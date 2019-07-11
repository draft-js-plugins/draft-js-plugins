"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _sinon = _interopRequireDefault(require("sinon"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mentions = [{
  name: 'Matthew Russell',
  link: 'https://twitter.com/mrussell247',
  avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg'
}, {
  name: 'Julian Krispel-Samsel',
  link: 'https://twitter.com/juliandoesstuff',
  avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
}, {
  name: 'Jyoti Puri',
  link: 'https://twitter.com/jyopur',
  avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400'
}, {
  name: 'Max Stoiber',
  link: 'https://twitter.com/mxstbr',
  avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
}, {
  name: 'Nik Graf',
  link: 'https://twitter.com/nikgraf',
  avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400'
}, {
  name: 'Pascal Brandt',
  link: 'https://twitter.com/psbrandt',
  avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png'
}];

function defaultProps() {
  return {
    suggestions: mentions,
    callbacks: {
      onDownArrow: _sinon["default"].spy(),
      onUpArrow: _sinon["default"].spy(),
      onTab: _sinon["default"].spy(),
      onEscape: _sinon["default"].spy(),
      handleReturn: _sinon["default"].spy()
    },
    store: {
      getAllSearches: _sinon["default"].spy(function () {
        return {
          has: function has() {
            return false;
          }
        };
      }),
      getPortalClientRect: _sinon["default"].spy(),
      isEscaped: _sinon["default"].spy(),
      resetEscapedSearch: _sinon["default"].spy(),
      escapeSearch: _sinon["default"].spy()
    },
    ariaProps: {},
    onSearchChange: _sinon["default"].spy(),
    onAddMention: _sinon["default"].spy(),
    positionSuggestions: _sinon["default"].stub().returns({}),
    theme: {}
  };
}

describe('MentionSuggestions Component', function () {
  it('Closes when suggestions is empty', function () {
    var props = defaultProps();
    var suggestions = (0, _enzyme.mount)(_react["default"].createElement(_index.MentionSuggestions, props));
    suggestions.instance().openDropdown();
    (0, _chai.expect)(suggestions.state().isActive).to.equal(true);
    suggestions.setProps({
      suggestions: []
    });
    (0, _chai.expect)(suggestions.state().isActive).to.equal(false);
  });
  it('The popoverComponent prop changes the popover component', function () {
    var PopoverComponent = function PopoverComponent(_ref) {
      var children = _ref.children,
          props = _objectWithoutProperties(_ref, ["children"]);

      return _react["default"].createElement("div", _extends({
        "data-test-test": true
      }, props), children);
    };

    var props = defaultProps();
    props.popoverComponent = _react["default"].createElement(PopoverComponent, null);
    var suggestions = (0, _enzyme.mount)(_react["default"].createElement(_index.MentionSuggestions, props));
    suggestions.instance().openDropdown();
    (0, _chai.expect)(suggestions.find('[data-test-test]')).to.have.length(1);
  });
  it('The popoverComponent recieves the children', function () {
    var called = false;

    var PopoverComponent = function PopoverComponent(_ref2) {
      var children = _ref2.children,
          props = _objectWithoutProperties(_ref2, ["children"]);

      called = true;
      (0, _chai.expect)(_react["default"].Children.count(children)).to.equal(mentions.length);
      return _react["default"].createElement("div", props, children);
    };

    var props = defaultProps();
    props.popoverComponent = _react["default"].createElement(PopoverComponent, null);
    var suggestions = (0, _enzyme.mount)(_react["default"].createElement(_index.MentionSuggestions, props));
    suggestions.instance().openDropdown();
    (0, _chai.expect)(called).to.equal(true);
  });
  it('The popoverComponent prop uses div by default', function () {
    var props = defaultProps();
    var suggestions = (0, _enzyme.mount)(_react["default"].createElement(_index.MentionSuggestions, _extends({}, props, {
      "data-findme": true
    })));
    suggestions.instance().openDropdown();
    (0, _chai.expect)(suggestions.find('div[data-findme]')).to.have.length(1);
  });
});