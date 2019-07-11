"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _immutable = require("immutable");

var _draftJs = require("draft-js");

var _chai = require("chai");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Mention', function () {
  it('renders an Anchor tag in case a link is provided', function () {
    var mention = {
      link: 'https://www.example.com/john'
    };

    var contentState = _draftJs.ContentState.createFromText('');

    var contentStateWithEntity = contentState.createEntity('mention', 'SEGMENTED', {
      mention: mention
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var result = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      entityKey: entityKey,
      contentState: contentState,
      theme: (0, _immutable.Map)()
    }));
    (0, _chai.expect)(result).to.have.tagName('a');
  });
  it('renders a Span tag in case no link is provided', function () {
    var mention = {};

    var contentState = _draftJs.ContentState.createFromText('');

    var contentStateWithEntity = contentState.createEntity('mention', 'SEGMENTED', {
      mention: mention
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var result = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      entityKey: entityKey,
      contentState: contentState,
      theme: (0, _immutable.Map)()
    }));
    (0, _chai.expect)(result).to.have.tagName('span');
  });
  it('can render when mention is an Object', function () {
    var mention = {};

    var contentState = _draftJs.ContentState.createFromText('');

    var contentStateWithEntity = contentState.createEntity('mention', 'SEGMENTED', {
      mention: mention
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var result = (0, _enzyme.render)(_react["default"].createElement(_index["default"], {
      entityKey: entityKey,
      contentState: contentState,
      theme: (0, _immutable.Map)()
    }));
    (0, _chai.expect)(result).to.have.tagName('span');
  });
});