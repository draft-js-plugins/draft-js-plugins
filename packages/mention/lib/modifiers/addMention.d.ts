import { EditorState } from 'draft-js';
import { MentionData } from '..';
export default function addMention(editorState: EditorState, mention: MentionData, mentionPrefix: string, mentionTrigger: string, entityMutability: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE'): EditorState;
