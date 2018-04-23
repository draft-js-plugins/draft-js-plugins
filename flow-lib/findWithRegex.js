import { ContentBlock } from 'draft-js'

declare module 'find-with-regex' {
  declare export default (
    regex: RegExp,
    contentBlock: ContentBlock,
    callback: (number, number) => void
  ) => void;
}
