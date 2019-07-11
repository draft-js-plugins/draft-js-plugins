"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Avatar = function Avatar(_ref) {
  var mention = _ref.mention,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;

  if (mention.avatar) {
    return _react["default"].createElement("img", {
      src: mention.avatar,
      className: theme.mentionSuggestionsEntryAvatar,
      role: "presentation"
    });
  }

  return null;
};

var _default = Avatar;
exports["default"] = _default;