import linkifyIt, { LinkifyIt } from 'linkify-it';
import tlds from 'tlds';

const linkify: LinkifyIt = linkifyIt().tlds(tlds);

export function extractLinks(
  text: string,
  linkifyit: LinkifyIt = linkify
): linkifyIt.Match[] | null {
  if (linkifyit) {
    linkifyit.tlds(tlds);
    return linkifyit.match(text);
  }
  return linkify.match(text);
}
