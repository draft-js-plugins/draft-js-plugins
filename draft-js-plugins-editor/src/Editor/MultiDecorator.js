import Immutable from 'immutable';

const KEY_SEPARATOR = '-';

function MultiDecorator(decorators) {
  this.decorators = Immutable.List(decorators);
}

/**
 Return list of decoration IDs per character

 @param {ContentBlock} block
 @return {List<String>}
 */
MultiDecorator.prototype.getDecorations = function getDecorations(block) {
  const decorations = Array(block.getText().length).fill(null);

  this.decorators.forEach((decorator, i) => {
    const subDecorations = decorator.getDecorations(block);

    subDecorations.forEach((key, offset) => {
      if (!key) {
        return;
      }

      const decoration = i + KEY_SEPARATOR + key;

      decorations[offset] = decoration;
    });
  });

  return Immutable.List(decorations);
};

/**
 Return component to render a decoration

 @param {String} key
 @return {Function}
 */
MultiDecorator.prototype.getComponentForKey = function getComponentForKey(key) {
  const decorator = this.getDecoratorForKey(key);
  return decorator.getComponentForKey(
    this.getInnerKey(key)
  );
};

/**
 Return props to render a decoration

 @param {String} key
 @return {Object}
 */
MultiDecorator.prototype.getPropsForKey = function getPropsForKey(key) {
  const decorator = this.getDecoratorForKey(key);
  return decorator.getPropsForKey(
    this.getInnerKey(key)
  );
};

/**
 Return a decorator for a specific key

 @param {String} key
 @return {Decorator}
 */
MultiDecorator.prototype.getDecoratorForKey = function getDecoratorForKey(key) {
  const parts = key.split(KEY_SEPARATOR);
  const index = Number(parts[0]);

  return this.decorators.get(index);
};

/**
 Return inner key for a decorator

 @param {String} key
 @return {String}
 */
MultiDecorator.prototype.getInnerKey = function getInnerKey(key) {
  const parts = key.split(KEY_SEPARATOR);
  return parts.slice(1).join(KEY_SEPARATOR);
};

module.exports = MultiDecorator;
