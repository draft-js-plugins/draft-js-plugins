"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var positionSuggestions = function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      state = _ref.state,
      props = _ref.props;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect = {};

  if (relativeParent) {
    relativeRect.scrollLeft = relativeParent.scrollLeft;
    relativeRect.scrollTop = relativeParent.scrollTop;
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect.left = decoratorRect.left - relativeParentRect.left;
    relativeRect.top = decoratorRect.bottom - relativeParentRect.top;
  } else {
    relativeRect.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    relativeRect.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    relativeRect.top = decoratorRect.bottom;
    relativeRect.left = decoratorRect.left;
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (state.isActive) {
    if (props.suggestions.length > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px"),
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
};

var _default = positionSuggestions;
exports["default"] = _default;