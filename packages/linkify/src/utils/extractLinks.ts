import linkifyIt, { LinkifyIt } from 'linkify-it';
import tlds from 'tlds';

const linkify: LinkifyIt = linkifyIt().tlds(tlds);

export function extractLinks(text: string): linkifyIt.Match[] | null {
  return linkify.match(text);
}
