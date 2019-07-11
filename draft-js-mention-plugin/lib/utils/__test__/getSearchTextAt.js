"use strict";

var _chai = require("chai");

var _getSearchTextAt = _interopRequireDefault(require("../getSearchTextAt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trigger = '@';
describe('getSearchTextAt', function () {
  it('finds the matching string following trigger', function () {
    var expected = {
      matchingString: 'The Walking Dead',
      begin: 3,
      end: 20
    };
    (0, _chai.expect)((0, _getSearchTextAt["default"])('hi @The Walking Dead', 20, trigger)).to.deep.equal(expected);
  });
  it('finds the matching string following trigger upto the position only', function () {
    var expected = {
      matchingString: 'The Walking',
      begin: 3,
      end: 15
    };
    (0, _chai.expect)((0, _getSearchTextAt["default"])('hi @The Walking Dead', 15, trigger)).to.deep.equal(expected);
  });
  it('finds the matching string following empty trigger', function () {
    var expected = {
      matchingString: 'Max',
      begin: 0,
      end: 3
    };
    (0, _chai.expect)((0, _getSearchTextAt["default"])('Max', 3, '')).to.deep.equal(expected);
  });
});