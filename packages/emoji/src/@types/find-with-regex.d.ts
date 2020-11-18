/// <reference types="draft-js"/>

type StrategyCallback = (start: number, end: number) => void;

declare module 'find-with-regex' {
  export default function findWithRegex(
    regex: RegExp,
    contentBlock: ContentBlock,
    callback: StrategyCallback
  ): void;
}
