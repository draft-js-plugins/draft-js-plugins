'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Get a component's display name
var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

exports.default = function (_ref) {
  var store = _ref.store;
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(BlockDraggableDecorator, _Component);

      function BlockDraggableDecorator() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, BlockDraggableDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = BlockDraggableDecorator.__proto__ || Object.getPrototypeOf(BlockDraggableDecorator)).call.apply(_ref2, [this].concat(args))), _this), _this.startDrag = function (event) {
          event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
          // declare data and give info that its an existing key and a block needs to be moved
          event.dataTransfer.setData('text', _constants.DRAFTJS_BLOCK_KEY + ':' + _this.props.block.key);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      // eslint-disable-next-line no-redeclare


      // Handle start-drag and set dataTransfer data with blockKey


      _createClass(BlockDraggableDecorator, [{
        key: 'render',
        value: function render() {
          // const readOnly = store.getReadOnly();
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
            draggable: true,
            onDragStart: this.startDrag
          }));
        }
      }]);

      return BlockDraggableDecorator;
    }(_react.Component), _class.displayName = 'BlockDraggable(' + getDisplayName(WrappedComponent) + ')', _class.WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent, _temp2;
  };
};