import { CompositeDecorator, ContentBlock, ContentState } from 'draft-js';
import Immutable from 'immutable';

const KEY_SEPARATOR = '-';

export default class MultiDecorator {
  decorators: Immutable.List<CompositeDecorator>;

  constructor(
    decorators: Immutable.List<CompositeDecorator> | CompositeDecorator[]
  ) {
    this.decorators = Immutable.List(decorators);
  }

  /**
   * Return list of decoration IDs per character
   */
  getDecorations(
    block: ContentBlock,
    contentState: ContentState
  ): Immutable.List<string> {
    const decorations: string[] = new Array(block.getText().length).fill(null);

    this.decorators.forEach((decorator, i) => {
      const subDecorations = decorator!.getDecorations(block, contentState);

      subDecorations.forEach((key, offset) => {
        if (!key) {
          return;
        }

        decorations[offset!] = i + KEY_SEPARATOR + key;
      });
    });

    return Immutable.List(decorations);
  }

  /**
   * Return component to render a decoration
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  getComponentForKey(key: string): Function {
    const decorator = this.getDecoratorForKey(key);
    return decorator.getComponentForKey(MultiDecorator.getInnerKey(key));
  }

  /**
   * Return props to render a decoration
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  getPropsForKey(key: string): object {
    const decorator = this.getDecoratorForKey(key);
    return decorator.getPropsForKey(MultiDecorator.getInnerKey(key));
  }

  /**
   * Return a decorator for a specific key
   */
  getDecoratorForKey(key: string): CompositeDecorator {
    const parts = key.split(KEY_SEPARATOR);
    const index = Number(parts[0]);

    return this.decorators.get(index);
  }

  /**
   * Return inner key for a decorator
   */
  static getInnerKey(key: string): string {
    const parts = key.split(KEY_SEPARATOR);
    return parts.slice(1).join(KEY_SEPARATOR);
  }
}
