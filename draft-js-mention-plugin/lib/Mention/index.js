"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _unionClassNames = _interopRequireDefault(require("union-class-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MentionLink = function MentionLink(_ref) {
  var mention = _ref.mention,
      children = _ref.children,
      className = _ref.className;
  return _react["default"].createElement("a", {
    href: mention.link,
    className: className,
    spellCheck: false
  }, children);
};

var MentionText = function MentionText(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return _react["default"].createElement("span", {
    className: className,
    spellCheck: false
  }, children);
};

var Mention = function Mention(props) {
  var entityKey = props.entityKey,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      mentionComponent = props.mentionComponent,
      children = props.children,
      decoratedText = props.decoratedText,
      className = props.className,
      contentState = props.contentState;
  var combinedClassName = (0, _unionClassNames["default"])(theme.mention, className);
  var mention = contentState.getEntity(entityKey).getData().mention;
  var Component = mentionComponent || (mention.link ? MentionLink : MentionText);
  return _react["default"].createElement(Component, {
    entityKey: entityKey,
    mention: mention,
    theme: theme,
    className: combinedClassName,
    decoratedText: decoratedText
  }, children);
};

var _default = Mention;
exports["default"] = _default;