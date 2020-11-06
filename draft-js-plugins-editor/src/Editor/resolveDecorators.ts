import { CompositeDecorator, DraftDecorator, EditorState } from 'draft-js';
import { List } from 'immutable';
import { PluginEditorProps } from '.';
import createCompositeDecorator from './createCompositeDecorator';
import MultiDecorator from './MultiDecorator';

// Return true if decorator implements the DraftDecoratorType interface
// @see https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const decoratorIsCustom = (decorator: any): decorator is DraftDecorator =>
  typeof decorator.getDecorations === 'function' &&
  typeof decorator.getComponentForKey === 'function' &&
  typeof decorator.getPropsForKey === 'function';

const getDecoratorsFromProps = ({
  decorators,
  plugins = [],
}: PluginEditorProps): List<CompositeDecorator | DraftDecorator> =>
  List([{ decorators }, ...plugins])
    .filter((plugin) => plugin?.decorators !== undefined)
    .flatMap((plugin) => plugin?.decorators) as List<
    CompositeDecorator | DraftDecorator
  >;

export default function resolveDecorators(
  props: PluginEditorProps,
  getEditorState: () => EditorState,
  onChange: (editorState: EditorState) => void
): MultiDecorator {
  const decorators = getDecoratorsFromProps(props);
  const compositeDecorator = createCompositeDecorator(
    decorators.filter((decorator) => !decoratorIsCustom(decorator!)) as List<
      DraftDecorator
    >,
    getEditorState,
    onChange
  );
  const customDecorators = decorators.filter((decorator) =>
    decoratorIsCustom(decorator)
  ) as List<CompositeDecorator>;
  return new MultiDecorator(customDecorators.push(compositeDecorator));
}
