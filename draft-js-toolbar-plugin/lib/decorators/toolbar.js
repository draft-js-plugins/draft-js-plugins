'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Get a component's display name
var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

var number = 0;

// HoverToolbar decorator will render a toolbar on hovering the WrappedComponent

exports.default = function (_ref) {
  var theme = _ref.theme;
  var customRender = _ref.customRender;
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(FocusedToolbarDecorator, _Component);

      function FocusedToolbarDecorator() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, FocusedToolbarDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = FocusedToolbarDecorator.__proto__ || Object.getPrototypeOf(FocusedToolbarDecorator)).call.apply(_ref2, [this].concat(args))), _this), _this.renderToolbar = function (actions, active) {
          var blockProps = _this.props.blockProps;

          var handler = blockProps.toolbarHandler;

          var props = _extends({}, _this.props, {
            actions: actions,
            theme: theme,
            getTargetRectangle: function getTargetRectangle() {
              return _this.DOMNode.getBoundingClientRect();
            },
            uid: _this.DOMNode
          });
          if (active) {
            handler.add(props);
          } else {
            handler.remove(props);
          }
        }, _this.addActions = function (actions) {
          _this.componentActions = actions;
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      // Statics


      _createClass(FocusedToolbarDecorator, [{
        key: 'componentDidMount',


        // Bind listeners on mount
        value: function componentDidMount() {
          // Set this.number to a unique value
          number += 1;
          this.number = number;

          // Bind listeners
          this.componentDidUpdate();
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          // eslint-disable-next-line react/no-find-dom-node
          this.DOMNode = _reactDom2.default.findDOMNode(this);
          if (!customRender) {
            this.renderToolbar([].concat(_toConsumableArray(this.props.actions || []), _toConsumableArray(this.componentActions || [])), this.props.blockProps.isFocused);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (!customRender) {
            this.renderToolbar([].concat(_toConsumableArray(this.props.actions || []), _toConsumableArray(this.componentActions || [])), false);
          }
        }

        // Render the actual toolbar

      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { addActions: this.addActions, renderToolbar: this.renderToolbar }));
        }
      }]);

      return FocusedToolbarDecorator;
    }(_react.Component), _class.displayName = 'FocusedToolbar(' + getDisplayName(WrappedComponent) + ')', _class.WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent, _temp2;
  };
};