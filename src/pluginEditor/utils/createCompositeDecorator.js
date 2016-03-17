/**
 * Creates a composite decorator with some plugins
 */

import { List } from 'immutable';
import CompositeDecorator from './CompositeDecorator';
import decorateComponentWithProps from '../../utils/decorateComponentWithProps';

export default (plugins, getEditorState, updateEditorState) => {
  const decorators = List(plugins)
    .filter((plugin) => plugin.decorators !== undefined)
    .flatMap((plugin) => plugin.decorators)
    .map((plugin) => {
      // Place plugin.theme as a prop on plugin.component
      const {theme} = plugin;
      if (theme !== undefined) {
        plugin.component = decorateComponentWithProps(plugin.component, {theme});
      }
      return plugin;
    })
    .toJS();
  return new CompositeDecorator(decorators, getEditorState, updateEditorState);
};
