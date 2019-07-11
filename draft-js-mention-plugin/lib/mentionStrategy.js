"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getTypeByTrigger = _interopRequireDefault(require("./utils/getTypeByTrigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findMentionEntities = function findMentionEntities(trigger) {
  return function (contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === (0, _getTypeByTrigger["default"])(trigger);
    }, callback);
  };
};

var _default = findMentionEntities;
exports["default"] = _default;