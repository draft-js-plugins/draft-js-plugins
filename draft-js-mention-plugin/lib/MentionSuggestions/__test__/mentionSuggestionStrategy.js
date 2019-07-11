"use strict";

var _chai = require("chai");

var _sinon = _interopRequireDefault(require("sinon"));

var _draftJs = require("draft-js");

var _mentionSuggestionsStrategy = _interopRequireDefault(require("../../mentionSuggestionsStrategy"));

var _defaultRegExp = _interopRequireDefault(require("../../defaultRegExp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var callback;
var trigger = '@';
var nonWhitespaceStrategy = (0, _mentionSuggestionsStrategy["default"])(trigger, false, _defaultRegExp["default"]);
var whitespaceStrategy = (0, _mentionSuggestionsStrategy["default"])(trigger, true, _defaultRegExp["default"]);

var getBlock = function getBlock(text) {
  var entityRanges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var entityMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var contentState = (0, _draftJs.convertFromRaw)({
    blocks: [{
      key: (0, _draftJs.genKey)(),
      text: text,
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: entityRanges
    }],
    entityMap: entityMap
  });
  return contentState.getFirstBlock();
};

describe('mentionSuggestionsStrategy', function () {
  beforeEach(function () {
    callback = _sinon["default"].spy();
  });
  context('when whitespace support is disabled', function () {
    it('should match a word', function () {
      nonWhitespaceStrategy(getBlock('@the'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(1);
      (0, _chai.expect)(callback.lastCall.args).to.deep.equal([0, 4]);
    });
    it('should match a word with special characters', function () {
      nonWhitespaceStrategy(getBlock('@ęĻŌ'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(1);
      (0, _chai.expect)(callback.lastCall.args).to.deep.equal([0, 4]);
    });
    it('should match not match spaces', function () {
      nonWhitespaceStrategy(getBlock('@the walking dead'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(1);
      (0, _chai.expect)(callback.lastCall.args).to.deep.equal([0, 4]);
    });
    it('should match multiple mentions', function () {
      nonWhitespaceStrategy(getBlock('@the @walking @dead'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(3);
      (0, _chai.expect)(callback.firstCall.args).to.deep.equal([0, 4]);
      (0, _chai.expect)(callback.secondCall.args).to.deep.equal([4, 13]);
      (0, _chai.expect)(callback.thirdCall.args).to.deep.equal([13, 19]);
    });
  });
  context('when whitespace support is enabled', function () {
    it('should match a word', function () {
      whitespaceStrategy(getBlock('@the'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(1);
      (0, _chai.expect)(callback.lastCall.args).to.deep.equal([0, 4]);
    });
    it('should match a word trailing space', function () {
      whitespaceStrategy(getBlock('@the '), callback);
      (0, _chai.expect)(callback.callCount).to.equal(1);
      (0, _chai.expect)(callback.lastCall.args).to.deep.equal([0, 5]);
    });
    it('should match multiple mentions with spaces', function () {
      whitespaceStrategy(getBlock('@the walking dead tv @the white house'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(2);
      (0, _chai.expect)(callback.firstCall.args).to.deep.equal([0, 21]);
      (0, _chai.expect)(callback.secondCall.args).to.deep.equal([21, 37]);
    });
    it('should match multiple mentions with spaces and special characters', function () {
      whitespaceStrategy(getBlock('@Thomas Müller @Mario Götze'), callback);
      (0, _chai.expect)(callback.callCount).to.equal(2);
      (0, _chai.expect)(callback.firstCall.args).to.deep.equal([0, 15]);
      (0, _chai.expect)(callback.secondCall.args).to.deep.equal([15, 27]);
    });
    it('should not match entities', function () {
      var key = (0, _draftJs.genKey)();
      whitespaceStrategy(getBlock('@the walking dead tv the white house', [{
        key: key,
        offset: 20,
        length: 15
      }], _defineProperty({}, key, {
        type: 'mention',
        mutability: 'IMMUTABLE',
        data: {}
      })), callback);
      (0, _chai.expect)(callback.callCount).to.equal(1);
      (0, _chai.expect)(callback.lastCall.args).to.deep.equal([0, 20]);
    });
  });
});