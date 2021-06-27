import { ComponentType, ReactElement, ReactNode } from 'react';
import { ContentState, EditorState } from 'draft-js';
import { MentionData } from '.';
import { MentionPluginTheme } from './theme';
export interface SubMentionComponentProps {
    mention: MentionData;
    children: ReactNode;
    className: string;
    entityKey: string;
    theme: MentionPluginTheme;
    decoratedText: string;
    editorState: EditorState;
}
export interface MentionProps {
    mention: MentionData;
    children: ReactNode;
    className: string;
    entityKey: string;
    theme?: MentionPluginTheme;
    mentionComponent?: ComponentType<SubMentionComponentProps>;
    decoratedText: string;
    contentState: ContentState;
    getEditorState(): EditorState;
}
export default function Mention(props: MentionProps): ReactElement;
