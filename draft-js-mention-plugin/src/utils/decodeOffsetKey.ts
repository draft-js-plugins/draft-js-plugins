export interface DecodedOffset {
  blockKey: string;
  decoratorKey: number;
  leafKey: number;
}

const decodeOffsetKey = (offsetKey: string): DecodedOffset => {
  const [blockKey, decoratorKey, leafKey] = offsetKey.split('-');
  return {
    blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10),
  };
};

export default decodeOffsetKey;
