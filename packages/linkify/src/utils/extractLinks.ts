import linkifyIt from 'linkify-it';
import tlds from 'tlds';

export const linkify = linkifyIt();
linkify.tlds(tlds);

export function extractLinks(text: string): linkifyIt.Match[] | null {
  return linkify.match(text);
}
