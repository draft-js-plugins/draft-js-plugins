'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToolbarActions = exports.getToolbarPosition = exports.shouldRenderToolbar = undefined;

var _draftJs = require('draft-js');

var _inlineStyles = require('../actions/inlineStyles');

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _custom = require('../actions/custom');

var _custom2 = _interopRequireDefault(_custom);

var _getSelection = require('../utils/getSelection');

var _getSelection2 = _interopRequireDefault(_getSelection);

var _getSelectionRect = require('../utils/getSelectionRect');

var _getSelectionRect2 = _interopRequireDefault(_getSelectionRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Helper function, is toolbar necessary / is a text selected?
var shouldRenderToolbar = exports.shouldRenderToolbar = function shouldRenderToolbar(editorState) {
  var selected = (0, _getSelection2.default)();
  var selectionState = editorState ? editorState.getSelection() : null;
  return !!selected.rangeCount && !selectionState.isCollapsed();
};

// Helper function, is toolbar necessary / is a text selected?
var getToolbarPosition = exports.getToolbarPosition = function getToolbarPosition() {
  return (0, _getSelectionRect2.default)((0, _getSelection2.default)());
};

// Toggle the block type
/* function toggleBlockType(editorState, setEditorState, blockType) {
  setEditorState(RichUtils.toggleBlockType(
    editorState,
    blockType
  ));
} */

var getToolbarActions = exports.getToolbarActions = function getToolbarActions(config, editorState, setEditorState) {
  var inlineStyles = config.inlineStyles || _inlineStyles2.default;
  var customActions = config.clearTextActions ? config.textActions || [] : [].concat(_toConsumableArray(_custom2.default), _toConsumableArray(config.textActions || []));

  // Get current style to check what actions are toggled
  var currentStyle = editorState.getCurrentInlineStyle();
  // Get current block
  var block = editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey());

  return [].concat(_toConsumableArray(inlineStyles.map(function (action) {
    return {
      icon: action.icon,
      button: action.button,
      label: action.label,
      active: currentStyle.has(action.style),
      toggle: function toggle() {
        return setEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, action.style));
      }
    };
  })), _toConsumableArray(customActions.map(function (action) {
    return {
      icon: action.icon,
      button: action.button,
      label: action.label,
      active: typeof action.active === 'function' ? action.active(block, editorState) : action.active,
      toggle: function toggle() {
        return action.toggle(block, action, editorState, setEditorState);
      }
    };
  })));
};