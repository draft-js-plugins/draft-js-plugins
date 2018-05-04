// @flow

import Immutable, { List } from 'immutable';
import { ContentBlock, ContentState } from 'draft-js';
import { type DraftDecoratorType } from 'draft-js/lib/DraftDecoratorType';

const KEY_SEPARATOR = '-';

class MultiDecorator {
  decorators: List<DraftDecoratorType>

  constructor(decorators: List<DraftDecoratorType>) {
    this.decorators = Immutable.List(decorators);
  }

  /**
   * Return list of decoration IDs per character
   */
  getDecorations(block: ContentBlock, contentState: ContentState): List<string|null> {
    const decorations = new Array(block.getText().length).fill(null);

    this.decorators.forEach((decorator, i) => {
      const subDecorations = decorator.getDecorations(block, contentState);

      subDecorations.forEach((key, offset) => {
        if (!key) {
          return;
        }

        decorations[offset] = i + KEY_SEPARATOR + key;
      });
    });

    return Immutable.List(decorations);
  }

  /**
   * Return component to render a decoration
   */
  getComponentForKey(key: string): Function {
    const decorator = this.getDecoratorForKey(key);
    return decorator.getComponentForKey(
      MultiDecorator.getInnerKey(key)
    );
  }

  /**
   * Return props to render a decoration
   */
  getPropsForKey(key: string): ?Object {
    const decorator = this.getDecoratorForKey(key);
    return decorator.getPropsForKey(
      MultiDecorator.getInnerKey(key)
    );
  }

  /**
   * Return a decorator for a specific key
   *
   * @param {String} key
   * @return {Decorator}
   */
  getDecoratorForKey(key: string): DraftDecoratorType {
    const parts = key.split(KEY_SEPARATOR);
    const index = Number(parts[0]);

    // $FlowFixMe
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

export default MultiDecorator;
