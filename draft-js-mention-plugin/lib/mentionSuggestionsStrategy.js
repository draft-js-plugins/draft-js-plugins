"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _escapeRegExp = _interopRequireDefault(require("lodash/escapeRegExp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findWithRegex = function findWithRegex(regex, contentBlock, callback) {
  var contentBlockText = contentBlock.getText(); // exclude entities, when matching

  contentBlock.findEntityRanges(function (character) {
    return !character.getEntity();
  }, function (nonEntityStart, nonEntityEnd) {
    var text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
    var matchArr;
    var start;
    var prevLastIndex = regex.lastIndex; // Go through all matches in the text and return the indices to the callback
    // Break the loop if lastIndex is not changed

    while ((matchArr = regex.exec(text)) !== null) {
      // eslint-disable-line
      if (regex.lastIndex === prevLastIndex) {
        break;
      }

      prevLastIndex = regex.lastIndex;
      start = nonEntityStart + matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  });
};

var _default = function _default(trigger, supportWhiteSpace, regExp) {
  //eslint-disable-line
  var MENTION_REGEX = supportWhiteSpace ? new RegExp("".concat((0, _escapeRegExp["default"])(trigger), "(").concat(regExp, "|\\s){0,}"), 'g') : new RegExp("(\\s|^)".concat((0, _escapeRegExp["default"])(trigger)).concat(regExp), 'g');
  return function (contentBlock, callback) {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};

exports["default"] = _default;