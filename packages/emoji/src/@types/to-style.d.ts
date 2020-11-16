/// <reference types="react"/>

declare module 'to-style' {
  interface ToStyle {
    string(style: CSSProperties): string;
    object(style: string | Record<string, unknown>): CSSProperties;
  }
  const toStyle: ToStyle;
  export default toStyle;
}
