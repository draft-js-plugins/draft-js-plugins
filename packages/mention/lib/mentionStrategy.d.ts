import { ContentBlock, ContentState } from 'draft-js';
declare const findMentionEntities: (triggers: string[]) => (contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) => void;
export default findMentionEntities;
