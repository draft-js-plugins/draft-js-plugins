'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call.apply(_ref, [this].concat(args))), _this), _this.preventDefault = function (event) {
      event.preventDefault();
    }, _this.toggleAction = function (action) {
      if (action.toggle) {
        action.toggle(action, !action.active);
      }
    }, _this.renderAction = function (action) {
      var toolbarTheme = _this.context.toolbarTheme;
      var theme = _this.props.theme;

      var styles = toolbarTheme || theme;

      var classNames = [styles['toolbar-item']];
      if (action.active) {
        classNames.push(styles['toolbar-item-active']);
      }

      var toggle = function toggle() {
        return _this.toggleAction(action);
      };
      return _react2.default.createElement(
        'div',
        { key: action.label, className: classNames.join(' ') },
        _react2.default.createElement(
          'button',
          { onClick: toggle, 'data-tooltip': action.label },
          action.icon ? _react2.default.createElement('i', { className: action.icon + ' icon' }) : action.button
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // PreventDefault helper to swallow clicks on toolbar to not loose focus


  // Action toggle


  // Render single action buttons


  _createClass(Toolbar, [{
    key: 'render',


    // Render
    value: function render() {
      var _props = this.props;
      var theme = _props.theme;
      var actions = _props.actions; // eslint-disable-line no-use-before-define

      var toolbarTheme = this.context.toolbarTheme;

      var styles = toolbarTheme || theme;

      return _react2.default.createElement(
        'div',
        { className: styles.toolbar, onMouseDown: this.preventDefault },
        actions.map(this.renderAction)
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

Toolbar.contextTypes = {
  toolbarTheme: _react2.default.PropTypes.object
};
Toolbar.defaultProps = {
  actions: [],
  active: true
};
exports.default = Toolbar;