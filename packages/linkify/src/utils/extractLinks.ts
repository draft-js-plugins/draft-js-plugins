import linkifyIt, { LinkifyIt } from 'linkify-it';
import tlds from 'tlds';

export interface ExtractLinks {
  (text: string): Array<{
    index: number;
    lastIndex: number;
    url: string;
  }> | null;
}

const linkify: LinkifyIt = linkifyIt().tlds(tlds);

export function extractLinks(text: string): linkifyIt.Match[] | null {
  return linkify.match(text);
}
