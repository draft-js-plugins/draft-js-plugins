import { CSSProperties } from 'react';
import { MentionData, MentionPluginStore } from '..';
export interface PositionSuggestionsParams {
    decoratorRect: ClientRect;
    popover: HTMLElement;
    props: {
        open: boolean;
        suggestions: MentionData[];
        store: MentionPluginStore;
    };
}
export default function positionSuggestions({ decoratorRect, popover, props, }: PositionSuggestionsParams): CSSProperties;
export declare type PositionSuggestionsFn = typeof positionSuggestions;
