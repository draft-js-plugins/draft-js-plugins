export interface DecodedOffset {
    blockKey: string;
    decoratorKey: number;
    leafKey: number;
}
declare const decodeOffsetKey: (offsetKey: string) => DecodedOffset;
export default decodeOffsetKey;
