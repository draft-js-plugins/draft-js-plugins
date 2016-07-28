'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _portal = require('./utils/portal');

var _portal2 = _interopRequireDefault(_portal);

var _toolbar = require('./components/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var airToolbar = {
  blockMode: 'hover',
  textMode: 'select',
  animations: true,
  add: function add(props) {
    _portal2.default.renderPortal(_extends({
      toolbarAnimations: airToolbar.animations,
      Element: _toolbar2.default
    }, props));
  },
  remove: function remove(props) {
    _portal2.default.removePortal(_extends({
      toolbarAnimations: airToolbar.animations,
      Element: _toolbar2.default
    }, props));
  }
};

exports.default = airToolbar;