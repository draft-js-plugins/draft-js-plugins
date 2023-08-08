import React, {
  Component,
  ComponentType,
  CSSProperties,
  KeyboardEvent,
  ReactElement,
} from 'react';
import {
  DraftHandleValue,
  EditorState,
  genKey,
  SelectionState,
} from 'draft-js';
import utils from '@draft-js-plugins/utils';
import { AriaProps } from '@draft-js-plugins/editor';
import { List } from 'immutable';
import Entry from './Entry';
import {
  EmojiImageProps,
  EmojiPLuginCallbacks,
  EmojiPluginStore,
  PopperOptions,
} from '../..';
import addEmoji, { Mode as AddEmojiMode } from '../../modifiers/addEmoji';
import getSearchText from '../../utils/getSearchText';
import defaultPositionSuggestions, {
  PositionSuggestionsParams,
} from '../../utils/positionSuggestions';
import { EmojiPluginTheme } from '../../theme';
import { EmojiShape } from '../../constants/type';
import Popover from './Popover';
import { warning } from '../../utils/warning';

export interface EmojiSuggestionsPubParams {
  isActive?: boolean;
  focusedOptionIndex?: number;
  onClose?(): void;
  onOpen?(): void;
  onSearchChange?(change: { value: string }): void;
}

interface EmojiSuggestionsParams extends EmojiSuggestionsPubParams {
  callbacks: EmojiPLuginCallbacks;
  ariaProps: AriaProps;
  store: EmojiPluginStore;
  emojis: List<EmojiShape>;
  positionSuggestions?(arg: PositionSuggestionsParams): CSSProperties;
  theme: EmojiPluginTheme;
  emojiImage: ComponentType<EmojiImageProps>;
  popperOptions?: PopperOptions;
}

export default class EmojiSuggestions extends Component<EmojiSuggestionsParams> {
  state = {
    isActive: false,
    focusedOptionIndex: 0,
  };

  popover?: HTMLDivElement | null;
  key!: string;
  filteredEmojis?: List<EmojiShape>;
  activeOffsetKey?: string;
  lastSelectionIsInsideWord?: Immutable.Iterable<string, boolean>;
  lastSearchValue?: string;

  UNSAFE_componentWillMount(): void {
    this.key = genKey();
    this.props.callbacks.onChange = this.onEditorStateChange;
  }

  componentDidUpdate(): void {
    if (this.popover && this.filteredEmojis) {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      const size = this.filteredEmojis.size;
      if (size > 0 && this.state.focusedOptionIndex >= size) {
        this.setState({
          focusedOptionIndex: size - 1,
        });
      }

      if (size <= 0) {
        this.closeDropdown();
      }

      const decoratorRect = this.props.store.getPortalClientRect(
        this.activeOffsetKey!
      );
      if (decoratorRect) {
        const positionSuggestions =
          this.props.positionSuggestions || defaultPositionSuggestions;
        const newStyles: CSSProperties = positionSuggestions({
          decoratorRect,
          props: this.props,
          state: this.state,
          filteredEmojis: this.filteredEmojis
            .map((emojiShape) => emojiShape!.shortname)
            .toList(),
          popover: this.popover,
        });
        for (const [key, value] of Object.entries(newStyles)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this.popover!.style as { [x: string]: any })[key] = value;
        }
      } else {
        //close dropdown if no position could calculated
        this.closeDropdown();
      }
    }
  }

  componentWillUnmount(): void {
    this.props.callbacks.onChange = undefined;
  }

  onEditorStateChange = (editorState: EditorState): EditorState => {
    const searches = this.props.store.getAllSearches();

    // if no search portal is active there is no need to show the popover
    if (searches.size === 0) {
      return editorState;
    }

    const removeList = (): EditorState => {
      this.props.store.resetEscapedSearch();
      this.closeDropdown();
      return editorState;
    };

    // get the current selection
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const anchorOffset = selection.getAnchorOffset();

    // the list should not be visible if a range is selected or the editor has no focus
    if (!selection.isCollapsed() || !selection.getHasFocus())
      return removeList();

    // identify the start & end positon of each search-text
    const offsetDetails = searches.map((offsetKey) =>
      utils.decodeOffsetKey(offsetKey!)
    );

    // a leave can be empty when it is removed due e.g. using backspace
    const leaves = offsetDetails
      .filter((offsetDetail) => offsetDetail!.blockKey === anchorKey)
      .map((offsetDetail) =>
        editorState
          .getBlockTree(offsetDetail!.blockKey)
          .getIn([offsetDetail!.decoratorKey, 'leaves', offsetDetail!.leafKey])
      );

    // if all leaves are undefined the popover should be removed
    if (leaves.every((leave) => leave === undefined)) {
      return removeList();
    }

    // Checks that the cursor is after the @ character but still somewhere in
    // the word (search term). Setting it to allow the cursor to be left of
    // the @ causes troubles due selection confusion.
    const plainText = editorState.getCurrentContent().getPlainText();
    const selectionIsInsideWord = leaves
      .filter((leave) => leave !== undefined)
      .map(
        ({ start, end }) =>
          (start === 0 &&
            anchorOffset === 1 &&
            plainText.charAt(anchorOffset) !== ':' &&
            /(\s|^):[\w]*/.test(plainText) &&
            anchorOffset <= end) || // : is the first character
          (anchorOffset > start + 1 &&
            anchorOffset <= end) /*: is in the text or at the end*/
      );
    if (selectionIsInsideWord.every((isInside) => isInside === false))
      return removeList();

    this.activeOffsetKey = selectionIsInsideWord
      .filter((value) => value === true)
      .keySeq()
      .first();

    this.onSearchChange(editorState, selection);

    // make sure the escaped search is reseted in the cursor since the user
    // already switched to another emoji search
    if (!this.props.store.isEscaped(this.activeOffsetKey)) {
      this.props.store.resetEscapedSearch();
    }

    // If none of the above triggered to close the window, it's safe to assume
    // the dropdown should be open. This is useful when a user focuses on another
    // input field and then comes back: the dropdown will again.
    if (
      !this.state.isActive &&
      !this.props.store.isEscaped(this.activeOffsetKey)
    ) {
      this.openDropdown();
    }

    // makes sure the focused index is reseted every time a new selection opens
    // or the selection was moved to another emoji search
    if (
      this.lastSelectionIsInsideWord === undefined ||
      !selectionIsInsideWord.equals(this.lastSelectionIsInsideWord)
    ) {
      this.setState({
        focusedOptionIndex: 0,
      });
    }

    this.lastSelectionIsInsideWord = selectionIsInsideWord;

    return editorState;
  };

  onSearchChange = (
    editorState: EditorState,
    selection: SelectionState
  ): void => {
    const { word } = getSearchText(editorState, selection);
    const searchValue = word.substring(1, word.length);
    if (
      this.lastSearchValue !== searchValue &&
      typeof this.props.onSearchChange === 'function'
    ) {
      this.lastSearchValue = searchValue;
      this.props.onSearchChange({ value: searchValue });
    }
  };

  onDownArrow = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();
    const newIndex = this.state.focusedOptionIndex + 1;
    this.onEmojiFocus(newIndex >= this.filteredEmojis!.size ? 0 : newIndex);
  };

  onTab = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();
    this.commitSelection();
  };

  onUpArrow = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();
    if (this.filteredEmojis && this.filteredEmojis.size > 0) {
      const newIndex = this.state.focusedOptionIndex - 1;
      this.onEmojiFocus(Math.max(newIndex, 0));
    }
  };

  onEscape = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();

    const activeOffsetKey = this.lastSelectionIsInsideWord!.filter(
      (value) => value === true
    )
      .keySeq()
      .first();
    this.props.store.escapeSearch(activeOffsetKey);
    this.closeDropdown();

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState!(this.props.store.getEditorState!());
  };

  onEmojiSelect = (emoji: EmojiShape): void => {
    this.closeDropdown();
    const newEditorState = addEmoji(
      this.props.store.getEditorState!(),
      emoji,
      AddEmojiMode.REPLACE
    );
    this.props.store.setEditorState!(newEditorState);
  };

  onEmojiFocus = (index: number): void => {
    const descendant = `emoji-option-${this.key}-${index}`;
    this.props.ariaProps.ariaActiveDescendantID = descendant;
    this.setState({ focusedOptionIndex: index });

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState!(this.props.store.getEditorState!());
  };

  // Get the first 6 emojis that match
  getEmojisForFilter = (): List<EmojiShape> => {
    const selection = this.props.store.getEditorState!().getSelection();
    const { word } = getSearchText(
      this.props.store.getEditorState!(),
      selection
    );
    const emojiValue = word.substring(1, word.length).toLowerCase();
    const filteredValues = this.props.emojis.filter(
      (emojiShape) =>
        !emojiValue || emojiShape!.shortname.indexOf(emojiValue) > -1
    ) as List<EmojiShape>;
    const size = filteredValues.size < 9 ? filteredValues.size : 9;
    return filteredValues.setSize(size);
  };

  commitSelection = (): DraftHandleValue => {
    this.onEmojiSelect(this.filteredEmojis!.get(this.state.focusedOptionIndex));
    return 'handled';
  };

  openDropdown = (): void => {
    // This is a really nasty way of attaching & releasing the key related functions.
    // It assumes that the keyFunctions object will not loose its reference and
    // by this we can replace inner parameters spread over different modules.
    // This better be some registering & unregistering logic. PRs are welcome :)
    this.props.callbacks.handleReturn = this.commitSelection;
    this.props.callbacks.keyBindingFn = (keyboardEvent: KeyboardEvent) => {
      // arrow down
      if (keyboardEvent.keyCode === 40) {
        this.onDownArrow(keyboardEvent);
      }
      // arrow up
      if (keyboardEvent.keyCode === 38) {
        this.onUpArrow(keyboardEvent);
      }
      // escape
      if (keyboardEvent.keyCode === 27) {
        this.onEscape(keyboardEvent);
      }
      // tab
      if (keyboardEvent.keyCode === 9) {
        this.onTab(keyboardEvent);
      }
      return undefined;
    };

    const descendant = `emoji-option-${this.key}-${this.state.focusedOptionIndex}`;
    this.props.ariaProps.ariaActiveDescendantID = descendant;
    this.props.ariaProps.ariaOwneeID = `emojis-list-${this.key}`;
    this.props.ariaProps.ariaHasPopup = 'true';
    this.props.ariaProps.ariaExpanded = true;
    this.setState({
      isActive: true,
    });

    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  closeDropdown = (): void => {
    // make sure none of these callbacks are triggered
    this.props.callbacks.keyBindingFn = undefined;
    this.props.callbacks.handleReturn = undefined;
    this.props.ariaProps.ariaHasPopup = 'false';
    this.props.ariaProps.ariaExpanded = false;
    this.props.ariaProps.ariaActiveDescendantID = undefined;
    this.props.ariaProps.ariaOwneeID = undefined;
    this.setState({
      isActive: false,
    });

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render(): ReactElement | null {
    if (!this.state.isActive) {
      return null;
    }

    this.filteredEmojis = this.getEmojisForFilter();
    const {
      theme = {},
      ariaProps, // eslint-disable-line @typescript-eslint/no-unused-vars
      callbacks, // eslint-disable-line @typescript-eslint/no-unused-vars
      onClose, // eslint-disable-line @typescript-eslint/no-unused-vars
      onOpen, // eslint-disable-line @typescript-eslint/no-unused-vars
      onSearchChange, // eslint-disable-line @typescript-eslint/no-unused-vars
      positionSuggestions, // eslint-disable-line @typescript-eslint/no-unused-vars
      popperOptions, // eslint-disable-line @typescript-eslint/no-unused-vars
      emojis, // eslint-disable-line @typescript-eslint/no-unused-vars
      store, // eslint-disable-line @typescript-eslint/no-unused-vars
      emojiImage,
      ...restProps
    } = this.props;

    if (positionSuggestions) {
      warning(
        'The property `positionSuggestions` is deprecated and will be removed in @draft-js-plugins/emoji 5.0 . Use `popperOptions` instead'
      );

      return (
        <div
          {...restProps}
          className={theme.emojiSuggestions}
          role="listbox"
          id={`emojis-list-${this.key}`}
          ref={(element) => {
            this.popover = element;
          }}
        >
          {this.filteredEmojis
            .map((emoji, index) => (
              <Entry
                key={emoji!.shortname}
                onEmojiSelect={this.onEmojiSelect}
                onEmojiFocus={this.onEmojiFocus}
                isFocused={this.state.focusedOptionIndex === index}
                emoji={emoji!}
                index={index!}
                id={`emoji-option-${this.key}-${index}`}
                theme={theme}
                emojiImage={emojiImage}
              />
            ))
            .toJS()}
        </div>
      );
    }

    return (
      <Popover
        store={this.props.store}
        popperOptions={popperOptions}
        theme={theme}
      >
        {this.filteredEmojis
          .map((emoji, index) => (
            <Entry
              key={emoji!.shortname}
              onEmojiSelect={this.onEmojiSelect}
              onEmojiFocus={this.onEmojiFocus}
              isFocused={this.state.focusedOptionIndex === index}
              emoji={emoji!}
              index={index!}
              id={`emoji-option-${this.key}-${index}`}
              theme={theme}
              emojiImage={emojiImage}
            />
          ))
          .toJS()}
      </Popover>
    );
  }
}
