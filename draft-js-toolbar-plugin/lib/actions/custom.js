'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  label: 'Link',
  button: _react2.default.createElement(
    'span',
    null,
    'Link'
  ),
  style: 'link',
  active: function active(block, editorState) {
    var active = void 0;
    var selection = editorState.getSelection();
    block.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'link';
    }, function (start, end) {
      if (block.getKey() === selection.anchorKey && selection.anchorKey === selection.focusKey) {
        if (selection.anchorOffset >= start && selection.focusOffset <= end) {
          active = true;
        }
      }
    });
    return active;
  },

  toggle: function toggle(block, action, editorState, setEditorState) {
    var selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }

    if (action.active(block, editorState)) {
      setEditorState(_draftJs.RichUtils.toggleLink(editorState, selection, null));
    } else {
      var href = window.prompt('Enter a URL'); // eslint-disable-line no-alert
      var entityKey = _draftJs.Entity.create('link', 'MUTABLE', { href: href });
      setEditorState(_draftJs.RichUtils.toggleLink(editorState, selection, entityKey));
    }
  }
}];