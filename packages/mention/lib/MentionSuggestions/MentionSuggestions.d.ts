import { Component, ComponentType, KeyboardEvent, ReactElement, RefAttributes } from 'react';
import PropTypes from 'prop-types';
import { DraftHandleValue, EditorState, SelectionState } from 'draft-js';
import { AriaProps, EditorCommand } from '@draft-js-plugins/editor';
import { EntryComponentProps } from './Entry/Entry';
import { MentionData, MentionPluginStore, PopperOptions } from '..';
import { PositionSuggestionsFn } from '../utils/positionSuggestions';
import { MentionPluginTheme } from '../theme';
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
    onSearchChange(event: {
        trigger: string;
        value: string;
    }): void;
    onAddMention?(Mention: MentionData): void;
    popoverComponent?: ReactElement<PopoverComponentProps & RefAttributes<HTMLElement>>;
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
export declare class MentionSuggestions extends Component<MentionSuggestionsProps> {
    static propTypes: {
        open: PropTypes.Validator<boolean>;
        onOpenChange: PropTypes.Validator<(...args: any[]) => any>;
        entityMutability: PropTypes.Requireable<string>;
        entryComponent: PropTypes.Requireable<(...args: any[]) => any>;
        onAddMention: PropTypes.Requireable<(...args: any[]) => any>;
        suggestions: PropTypes.Validator<any[]>;
    };
    state: {
        focusedOptionIndex: number;
    };
    key: string;
    popover?: HTMLElement;
    activeOffsetKey?: string;
    lastSearchValue?: string;
    lastActiveTrigger?: string;
    lastSelectionIsInsideWord?: Immutable.Iterable<string, boolean>;
    constructor(props: MentionSuggestionsProps);
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onEditorStateChange: (editorState: EditorState) => EditorState;
    onSearchChange: (editorState: EditorState, selection: SelectionState, activeOffsetKey: string | undefined, lastActiveOffsetKey: string | undefined, trigger: string) => void;
    onDownArrow: (keyboardEvent: KeyboardEvent) => void;
    onTab: (keyboardEvent: KeyboardEvent) => void;
    onUpArrow: (keyboardEvent: KeyboardEvent) => void;
    onEscape: (keyboardEvent: KeyboardEvent) => void;
    onMentionSelect: (mention: MentionData | null) => void;
    onMentionFocus: (index: number) => void;
    commitSelection: () => DraftHandleValue;
    openDropdown: () => void;
    closeDropdown: () => void;
    render(): ReactElement | null;
}
export default MentionSuggestions;
