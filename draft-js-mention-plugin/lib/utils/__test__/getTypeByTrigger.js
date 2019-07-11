"use strict";

var _chai = require("chai");

var _getTypeByTrigger = _interopRequireDefault(require("../getTypeByTrigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('getTypeByTrigger', function () {
  it('returns "mention" for trigger "@"', function () {
    (0, _chai.expect)((0, _getTypeByTrigger["default"])('@')).to.equal('mention');
  });
  it('returns ":mention" for trigger ":"', function () {
    (0, _chai.expect)((0, _getTypeByTrigger["default"])(':')).to.equal(':mention');
  });
  it('returns "-mention" for trigger "-"', function () {
    (0, _chai.expect)((0, _getTypeByTrigger["default"])('-')).to.equal('-mention');
  });
  it('returns "mention" for trigger "<>"', function () {
    (0, _chai.expect)((0, _getTypeByTrigger["default"])('<>')).to.equal('<>mention');
  });
});