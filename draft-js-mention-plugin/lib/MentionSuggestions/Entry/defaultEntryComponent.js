"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultEntryComponent = function defaultEntryComponent(props) {
  var mention = props.mention,
      theme = props.theme,
      isFocused = props.isFocused,
      searchValue = props.searchValue,
      parentProps = _objectWithoutProperties(props, ["mention", "theme", "isFocused", "searchValue"]);

  return _react["default"].createElement("div", parentProps, _react["default"].createElement(_Avatar["default"], {
    mention: mention,
    theme: theme
  }), _react["default"].createElement("span", {
    className: theme.mentionSuggestionsEntryText
  }, mention.name));
};

var _default = defaultEntryComponent;
exports["default"] = _default;