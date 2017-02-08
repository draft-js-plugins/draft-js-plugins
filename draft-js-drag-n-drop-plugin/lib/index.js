'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleDrop = require('./handleDrop');

var _handleDrop2 = _interopRequireDefault(_handleDrop);

var _createDecorator = require('./createDecorator');

var _createDecorator2 = _interopRequireDefault(_createDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createBlockDndPlugin = function createBlockDndPlugin(_ref) {
  var onDrop = _ref.onDrop;

  var store = {
    getReadOnly: undefined
  };

  return {
    initialize: function initialize(_ref2) {
      var getReadOnly = _ref2.getReadOnly;

      store.getReadOnly = getReadOnly;
    },
    decorator: (0, _createDecorator2.default)({ store: store }),
    // Handle blocks dragged and dropped across the editor
    handleDrop: (0, _handleDrop2.default)({ onDrop: onDrop })
  };
};

exports.default = createBlockDndPlugin;