import React, {
  Component,
  CSSProperties,
  ComponentType,
  KeyboardEvent,
  ReactElement,
  RefAttributes,
} from 'react';
import PropTypes from 'prop-types';
import {
  DraftHandleValue,
  EditorState,
  genKey,
  SelectionState,
} from 'draft-js';
import { AriaProps, EditorCommand } from '@draft-js-plugins/editor';
import Entry, { EntryComponentProps } from './Entry/Entry';
import addMention from '../modifiers/addMention';
import getSearchText from '../utils/getSearchText';
import defaultEntryComponent from './Entry/DefaultEntryComponent';
import { MentionData, MentionPluginStore, PopperOptions } from '..';
import defaultPositionSuggestions, {
  PositionSuggestionsFn,
} from '../utils/positionSuggestions';
import { MentionPluginTheme } from '../theme';
import getTriggerForMention from '../utils/getTriggerForMention';
import Popover from './Popover';
import { warning } from '../utils/warning';

export interface MentionSuggestionCallbacks {
  keyBindingFn?(event: KeyboardEvent): EditorCommand | null | undefined;
  handleKeyCommand: undefined;
  handleReturn?(event: KeyboardEvent): DraftHandleValue;
  onChange?(editorState: EditorState): EditorState;
}

export interface PopoverComponentProps {
  className: string;
  role: string;
  id: string;
}

export interface MentionSuggestionsPubProps {
  suggestions: MentionData[];
  open: boolean;
  onOpenChange(open: boolean): void;
  onSearchChange(event: { trigger: string; value: string }): void;
  onAddMention?(Mention: MentionData): void;
  popoverComponent?: ReactElement<
    PopoverComponentProps & RefAttributes<HTMLElement>
  >;
  entryComponent?: ComponentType<EntryComponentProps>;
  popoverContainer?: ComponentType<PopperOptions>;
  renderEmptyPopup?: boolean;
}

export interface MentionSuggestionsProps extends MentionSuggestionsPubProps {
  callbacks: MentionSuggestionCallbacks;
  store: MentionPluginStore;
  positionSuggestions?: PositionSuggestionsFn;
  ariaProps: AriaProps;
  theme: MentionPluginTheme;
  mentionPrefix: string;
  mentionTriggers: string[];
  entityMutability: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE';
  popperOptions?: PopperOptions;
}

export class MentionSuggestions extends Component<MentionSuggestionsProps> {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
    entityMutability: PropTypes.oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
    entryComponent: PropTypes.func,
    onAddMention: PropTypes.func,
    suggestions: PropTypes.array.isRequired,
  };

  state = {
    focusedOptionIndex: 0,
  };

  key = genKey();
  popover?: HTMLElement;
  activeOffsetKey?: string;
  lastSearchValue?: string;
  lastActiveTrigger?: string = '';
  lastSelectionIsInsideWord?: Immutable.Iterable<string, boolean>;

  constructor(props: MentionSuggestionsProps) {
    super(props);
    this.props.callbacks.onChange = this.onEditorStateChange;
  }

  componentDidUpdate(): void {
    if (this.popover) {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      const size = this.props.suggestions.length;
      if (size > 0 && this.state.focusedOptionIndex >= size) {
        this.setState({
          focusedOptionIndex: size - 1,
        });
      }

      // Note: this is a simple protection for the error when componentDidUpdate
      // try to get new getPortalClientRect, but the key already was deleted by
      // previous action. (right now, it only can happened when set the mention
      // trigger to be multi-characters which not supported anyway!)
      if (!this.props.store.getAllSearches().has(this.activeOffsetKey!)) {
        return;
      }

      const decoratorRect = this.props.store.getPortalClientRect(
        this.activeOffsetKey!
      );
      const positionSuggestions =
        this.props.positionSuggestions || defaultPositionSuggestions;
      const newStyles: CSSProperties = positionSuggestions({
        decoratorRect,
        props: this.props,
        popover: this.popover,
      });
      for (const [key, value] of Object.entries(newStyles)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this.popover!.style as { [x: string]: any })[key] = value;
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

    const triggerForMention = getTriggerForMention(
      editorState,
      searches,
      this.props.mentionTriggers
    );

    if (!triggerForMention) {
      return removeList();
    }

    const lastActiveOffsetKey = this.activeOffsetKey;
    this.activeOffsetKey = triggerForMention.activeOffsetKey;

    this.onSearchChange(
      editorState,
      editorState.getSelection(),
      this.activeOffsetKey,
      lastActiveOffsetKey,
      triggerForMention.activeTrigger
    );

    // make sure the escaped search is reseted in the cursor since the user
    // already switched to another mention search
    if (!this.props.store.isEscaped(this.activeOffsetKey || '')) {
      this.props.store.resetEscapedSearch();
    }

    // If none of the above triggered to close the window, it's safe to assume
    // the dropdown should be open. This is useful when a user focuses on another
    // input field and then comes back: the dropdown will show again.
    if (
      !this.props.open &&
      !this.props.store.isEscaped(this.activeOffsetKey || '')
    ) {
      this.openDropdown();
    }
    // makes sure the focused index is reseted every time a new selection opens
    // or the selection was moved to another mention search
    if (lastActiveOffsetKey !== this.activeOffsetKey) {
      this.setState({
        focusedOptionIndex: 0,
      });
    }

    return editorState;
  };

  onSearchChange = (
    editorState: EditorState,
    selection: SelectionState,
    activeOffsetKey: string | undefined,
    lastActiveOffsetKey: string | undefined,
    trigger: string
  ): void => {
    const { matchingString: searchValue } = getSearchText(
      editorState,
      selection,
      [trigger]
    );

    if (
      this.lastActiveTrigger !== trigger ||
      this.lastSearchValue !== searchValue ||
      activeOffsetKey !== lastActiveOffsetKey
    ) {
      this.lastActiveTrigger = trigger;
      this.lastSearchValue = searchValue;
      this.props.onSearchChange({ trigger, value: searchValue });
      //reset focus item if search is cahnged
      this.setState({
        focusedOptionIndex: 0,
      });
    }
  };

  onDownArrow = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();
    const newIndex = this.state.focusedOptionIndex + 1;
    this.onMentionFocus(
      newIndex >= this.props.suggestions.length ? 0 : newIndex
    );
  };

  onTab = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();
    this.commitSelection();
  };

  onUpArrow = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();
    if (this.props.suggestions.length > 0) {
      const newIndex = this.state.focusedOptionIndex - 1;
      this.onMentionFocus(
        newIndex < 0 ? this.props.suggestions.length - 1 : newIndex
      );
    }
  };

  onEscape = (keyboardEvent: KeyboardEvent): void => {
    keyboardEvent.preventDefault();

    this.props.store.escapeSearch(this.activeOffsetKey || '');
    this.closeDropdown();

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState!(this.props.store.getEditorState!());
  };

  onMentionSelect = (mention: MentionData | null): void => {
    // Note: This can happen in case a user typed @xxx (invalid mention) and
    // then hit Enter. Then the mention will be undefined.
    if (!mention) {
      return;
    }

    if (this.props.onAddMention) {
      this.props.onAddMention(mention);
    }

    this.closeDropdown();
    const newEditorState = addMention(
      this.props.store.getEditorState!(),
      mention,
      this.props.mentionPrefix,
      this.lastActiveTrigger || '',
      this.props.entityMutability
    );
    this.props.store.setEditorState!(newEditorState);
  };

  onMentionFocus = (index: number): void => {
    const descendant = `mention-option-${this.key}-${index}`;
    this.props.ariaProps.ariaActiveDescendantID = descendant;
    this.setState({
      focusedOptionIndex: index,
    });

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState!(this.props.store.getEditorState!());
  };

  commitSelection = (): DraftHandleValue => {
    const mention = this.props.suggestions[this.state.focusedOptionIndex];
    if (!this.props.store.getIsOpened() || !mention) {
      return 'not-handled';
    }

    this.onMentionSelect(mention);
    return 'handled';
  };

  openDropdown = (): void => {
    // This is a really nasty way of attaching & releasing the key related functions.
    // It assumes that the keyFunctions object will not loose its reference and
    // by this we can replace inner parameters spread over different modules.
    // This better be some registering & unregistering logic. PRs are welcome :)
    this.props.callbacks.handleReturn = this.commitSelection;
    this.props.callbacks.keyBindingFn = (keyboardEvent) => {
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

    const descendant = `mention-option-${this.key}-${this.state.focusedOptionIndex}`;
    this.props.ariaProps.ariaActiveDescendantID = descendant;
    this.props.ariaProps.ariaOwneeID = `mentions-list-${this.key}`;
    this.props.ariaProps.ariaHasPopup = 'true';
    this.props.ariaProps.ariaExpanded = true;
    this.props.onOpenChange(true);
  };

  closeDropdown = (): void => {
    // make sure none of these callbacks are triggered
    this.props.callbacks.handleReturn = undefined;
    this.props.callbacks.keyBindingFn = undefined;
    this.props.ariaProps.ariaHasPopup = 'false';
    this.props.ariaProps.ariaExpanded = false;
    this.props.ariaProps.ariaActiveDescendantID = undefined;
    this.props.ariaProps.ariaOwneeID = undefined;
    this.props.onOpenChange(false);
  };

  render(): ReactElement | null {
    if (!this.props.open) {
      return null;
    }

    const {
      entryComponent,
      popoverComponent,
      popperOptions,
      popoverContainer: PopoverContainer = Popover,
      onOpenChange, // eslint-disable-line @typescript-eslint/no-unused-vars
      onAddMention, // eslint-disable-line @typescript-eslint/no-unused-vars, no-shadow
      onSearchChange, // eslint-disable-line @typescript-eslint/no-unused-vars, no-shadow
      suggestions, // eslint-disable-line @typescript-eslint/no-unused-vars
      ariaProps, // eslint-disable-line @typescript-eslint/no-unused-vars
      callbacks, // eslint-disable-line @typescript-eslint/no-unused-vars
      theme = {},
      store, // eslint-disable-line @typescript-eslint/no-unused-vars
      entityMutability, // eslint-disable-line @typescript-eslint/no-unused-vars
      positionSuggestions, // eslint-disable-line @typescript-eslint/no-unused-vars
      mentionTriggers, // eslint-disable-line @typescript-eslint/no-unused-vars
      mentionPrefix, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...elementProps
    } = this.props;

    if (popoverComponent || positionSuggestions) {
      warning(
        'The properties `popoverComponent` and `positionSuggestions` are deprecated and will be removed in @draft-js-plugins/mentions 6.0 . Use `popperOptions` instead'
      );
      return React.cloneElement(
        popoverComponent || <div />,
        {
          ...elementProps,
          className: theme.mentionSuggestions,
          role: 'listbox',
          id: `mentions-list-${this.key}`,
          ref: (element: HTMLElement) => {
            this.popover = element;
          },
        },
        this.props.suggestions.map((mention, index) => (
          <Entry
            key={mention.id != null ? mention.id : mention.name}
            onMentionSelect={this.onMentionSelect}
            onMentionFocus={this.onMentionFocus}
            isFocused={this.state.focusedOptionIndex === index}
            mention={mention}
            index={index}
            id={`mention-option-${this.key}-${index}`}
            theme={theme}
            searchValue={this.lastSearchValue}
            entryComponent={entryComponent || defaultEntryComponent}
          />
        ))
      );
    }

    if (!this.props.renderEmptyPopup && this.props.suggestions.length === 0) {
      return null;
    }

    return (
      <PopoverContainer
        store={this.props.store}
        popperOptions={popperOptions}
        theme={theme}
      >
        {this.props.suggestions.map((mention, index) => (
          <Entry
            key={mention.id != null ? mention.id : mention.name}
            onMentionSelect={this.onMentionSelect}
            onMentionFocus={this.onMentionFocus}
            isFocused={this.state.focusedOptionIndex === index}
            mention={mention}
            index={index}
            id={`mention-option-${this.key}-${index}`}
            theme={theme}
            searchValue={this.lastSearchValue}
            entryComponent={entryComponent || defaultEntryComponent}
          />
        ))}
      </PopoverContainer>
    );
  }
}

export default MentionSuggestions;
