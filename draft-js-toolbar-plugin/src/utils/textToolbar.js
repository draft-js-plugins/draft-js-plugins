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

// Toggle custom actions, like make selected text a link
function toggleAction(editorState, setEditorState, action, state) {
  if (action.toggle) {
    action.toggle(action, state, editorState, setEditorState);
  }
}

// Toggle the block type
/* function toggleBlockType(editorState, setEditorState, blockType) {
  setEditorState(RichUtils.toggleBlockType(
    editorState,
    blockType
  ));
} */

// Toggle the inline style
function toggleInlineStyle(editorState, setEditorState, inlineStyle) {
  setEditorState(RichUtils.toggleInlineStyle(
    editorState,
    inlineStyle
  ));
}

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
      toggle: () => toggleInlineStyle(editorState, setEditorState, action.style),
    })),
    ...customActions.map(action => ({
      icon: action.icon,
      button: action.button,
      label: action.label,
      active: typeof action.active === 'function'
        ? action.active(block, editorState)
        : action.active,
      toggle: state => toggleAction(editorState, setEditorState, action, state),
    })),
  ];
};
