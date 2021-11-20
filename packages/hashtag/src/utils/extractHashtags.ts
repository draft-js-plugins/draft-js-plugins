import regexes from './hashtagRegex';

interface HashtagIndice {
  hashtag: string;
  indices: [number, number];
}

export function extractHashtagsWithIndices(text: string): HashtagIndice[] {
  if (!text || !text.match(regexes.hashSigns)) {
    return [];
  }
  const tags: HashtagIndice[] = [];
  function replacer(
    match: string,
    before: string,
    hash: string,
    hashText: string,
    offset: number,
    chunk: string
  ): string {
    const after = chunk.slice(offset + match.length);
    if (after.match(regexes.endHashtagMatch)) {
      return '';
    }
    const startPosition = offset + before.length;
    const endPosition = startPosition + hashText.length + 1;
    tags.push({
      hashtag: hashText,
      indices: [startPosition, endPosition],
    });
    return '';
  }
  text.replace(regexes.validHashtag, replacer);
  return tags;
}
