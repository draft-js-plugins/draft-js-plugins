import { RichUtils } from 'draft-js';
import defaultInlineStyles from '../actions/inlineStyles';
import defaultActions from '../actions/custom';
import getSelection from '../utils/getSelection';
import getSelectionRect from '../utils/getSelectionRect';

// Helper function, is toolbar necessary / is a text selected?
export const shouldRenderToolbar = editorState => {
  const selected = getSelection();
  const selectionState = editorState ? editorState.getSelection() : null;
  return !!selected.rangeCount && !selectionState.isCollapsed();
};

// Helper function, is toolbar necessary / is a text selected?
export const getToolbarPosition = () => getSelectionRect(getSelection());

// Toggle the block type
/* function toggleBlockType(editorState, setEditorState, blockType) {
  setEditorState(RichUtils.toggleBlockType(
    editorState,
    blockType
  ));
} */

export const getToolbarActions = (config, editorState, setEditorState) => {
  const inlineStyles = config.inlineStyles || defaultInlineStyles;
  const customActions = config.clearTextActions
    ? (config.textActions || [])
    : ([...defaultActions, ...(config.textActions || [])]);

  // Get current style to check what actions are toggled
  const currentStyle = editorState.getCurrentInlineStyle();
  // Get current block
  const block = editorState
    .getCurrentContent()
    .getBlockForKey(editorState.getSelection().getStartKey());

  return [
    ...inlineStyles.map(action => ({
      icon: action.icon,
      button: action.button,
      label: action.label,
      active: currentStyle.has(action.style),
      toggle: () => setEditorState(RichUtils.toggleInlineStyle(
        editorState,
        action.style
      )),
    })),
    ...customActions.map(action => ({
      icon: action.icon,
      button: action.button,
      label: action.label,
      active: typeof action.active === 'function'
        ? action.active(block, editorState)
        : action.active,
      toggle: () => action.toggle(block, action, editorState, setEditorState),
    })),
  ];
};
