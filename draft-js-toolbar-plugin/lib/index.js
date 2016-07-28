'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarDecorator = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _textToolbar = require('./utils/textToolbar');

var _toolbar = require('./decorators/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _linkStrategy = require('./linkStrategy');

var _linkStrategy2 = _interopRequireDefault(_linkStrategy);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _styles = {
  "draft-sidebar": "draftJsToolbar__draft-sidebar__iGLU3",
  "item": "draftJsToolbar__item__16yus",
  "menu": "draftJsToolbar__menu__2kTke",
  "toolbar": "draftJsToolbar__toolbar__2NV21",
  "toolbar-item": "draftJsToolbar__toolbar-item__ZQoML",
  "toolbar-item-active": "draftJsToolbar__toolbar-item-active__1MJoi"
};

var _styles2 = _interopRequireDefault(_styles);

var _airToolbar = require('./air-toolbar');

var _airToolbar2 = _interopRequireDefault(_airToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var toolbarPlugin = function toolbarPlugin() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var theme = config.theme || _styles2.default;
  var toolbarHandler = config.toolbarHandler || _extends({}, _airToolbar2.default, config);
  return {
    // Re-Render the text-toolbar onChange (on selection change)
    onChange: function onChange(editorState, _ref) {
      var setEditorState = _ref.setEditorState;

      if (typeof window !== 'undefined') {
        var props = {
          uid: 'text-toolbar',
          actions: (0, _textToolbar.getToolbarActions)(config, editorState, setEditorState),
          editorState: editorState,
          getTargetRectangle: _textToolbar.getToolbarPosition,
          setEditorState: setEditorState,
          theme: theme
        };
        if (toolbarHandler.textMode !== 'select' || (0, _textToolbar.shouldRenderToolbar)(editorState)) {
          toolbarHandler.add(props);
        } else {
          toolbarHandler.remove(props);
        }
      }
      return editorState;
    },
    // Wrap all block-types in hover-toolbar decorator
    // TODO investigate if we can avoid this pattern
    blockRendererFn: function blockRendererFn(contentBlock, _ref2) {
      _objectDestructuringEmpty(_ref2);

      return { // eslint-disable-line no-empty-pattern
        props: {
          toolbarHandler: toolbarHandler
        }
      };
    },
    decorators: [{
      strategy: _linkStrategy2.default,
      component: _Link2.default
    }]
  };
};

exports.default = toolbarPlugin;
var ToolbarDecorator = exports.ToolbarDecorator = function ToolbarDecorator() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return (0, _toolbar2.default)({ theme: options.theme || _styles2.default });
};