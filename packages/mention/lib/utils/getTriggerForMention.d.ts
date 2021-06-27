import { EditorState } from 'draft-js';
import { Map } from 'immutable';
interface TriggerForMentionResult {
    activeOffsetKey: string;
    activeTrigger: string;
}
export default function getTriggerForMention(editorState: EditorState, searches: Map<string, string>, mentionTriggers: string[]): TriggerForMentionResult | null;
export {};
