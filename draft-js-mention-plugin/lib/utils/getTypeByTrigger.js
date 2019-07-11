"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getTypeByTrigger = function getTypeByTrigger(trigger) {
  return trigger === '@' ? 'mention' : "".concat(trigger, "mention");
};

var _default = getTypeByTrigger;
exports["default"] = _default;