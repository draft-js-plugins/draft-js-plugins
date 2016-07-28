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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var left = _props.left;
      var top = _props.top;
      var width = _props.width;
      var _props2 = this.props;
      var forceLeft = _props2.forceLeft;
      var position = _props2.position;
      var getTargetRectangle = _props2.getTargetRectangle;
      var parent = _props2.parent;

      // getTargetRectangle defined? Get rect!

      if (getTargetRectangle) {
        var rect = getTargetRectangle();
        if (rect) {
          left = rect.left;
          top = rect.top;
          width = rect.width;
        }
      } else if (parent) {
        // Was props.parent set? Query parent element and get its rect
        var parentEl = typeof parent === 'string' ? document.querySelector(parent) : parent;

        if (!parentEl) {
          return;
        }

        var _rect = parentEl.getBoundingClientRect();
        left = _rect.left;
        top = _rect.top;
        width = _rect.width;
      }

      // Get tooltip ref for width centering
      if (this.tooltip) {
        var refRect = this.tooltip.getBoundingClientRect();
        var scrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        var scrollX = window.scrollX ? window.scrollX : window.pageXOffset;
        var leftForVerticalCenter = left + scrollX - (refRect.width / 2 + width / 2);
        // if tooltip overflow to window left(leftForVerticalCenter < 0),
        // some parts of it become invisible,
        // just simply set `state.left = 0` here
        var adjustedLeft = leftForVerticalCenter > 0 ? leftForVerticalCenter : 0;

        // Skip next componentDidUpdate
        this.skip = true;

        // Set state
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          top: top + scrollY - (position === 'left' ? 0 : refRect.height),
          left: typeof forceLeft === 'number' ? forceLeft : adjustedLeft,
          width: width
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // skip componentDidUpdate if necessary
      if (this.skip) {
        this.skip = false;
      } else {
        this.componentDidMount();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props;
      var onMouseOver = _props3.onMouseOver;
      var onMouseLeave = _props3.onMouseLeave;
      var active = _props3.active;
      var animations = _props3.animations;

      // Is server?

      if (typeof window === 'undefined') {
        return null;
      }

      // Left/Top
      var left = this.state.left + 'px';
      var top = this.state.top + 1 + 'px';

      // Style
      var style = {
        transition: animations ? 'all .3s ease-in-out, visibility .3s ease-in-out' : '',
        zIndex: 9999,
        position: 'absolute',
        left: left,
        top: top
      };

      // If !active => opacity = 0
      if (active === false) {
        style.opacity = 0;
      }

      return _react2.default.createElement(
        'div',
        { ref: function ref(element) {
            _this2.tooltip = element;
          }, style: style, onMouseOver: onMouseOver, onMouseLeave: onMouseLeave },
        this.props.children,
        _react2.default.createElement('div', { style: { backgroundColor: 'transparent', height: '5px', width: '100%', clear: 'both' } })
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

// Store active portals and the portal dom element here


var store = void 0;
var Portal = {
  // Remove a portal from the list of portals safely
  removePortalFromList: function removePortalFromList(portals, props) {
    if (!props) {
      return portals;
    }
    return portals.filter(function (portal) {
      return props.uid !== portal.uid;
    });
  },

  // Add a portal to the list of portals safely
  addPortalToList: function addPortalToList(portals, props) {
    if (!props) {
      return portals;
    }
    return [].concat(_toConsumableArray(Portal.removePortalFromList(portals, props)), [props]);
  },

  // Create the store and the dom element div
  createPortalNode: function createPortalNode() {
    store = {
      portals: [],
      el: document.createElement('div'),
      timeout: null
    };
    document.body.appendChild(store.el);
  },

  // Remove a portal
  removePortal: function removePortal(props) {
    if (props && store && store.portals.filter(function (portal) {
      return props.uid === portal.uid;
    }).length > 0) {
      store.portals = Portal.removePortalFromList(store.portals, props);
      // Other tooltip was active, switching
      if (store.portals.length > 0) {
        var item = store.portals[store.portals.length - 1];
        return item ? Portal.renderPortal(item, true) : null;
      }
      Portal.renderPortal(_extends({}, props, { active: false }), true);
      store.timeout = setTimeout(function () {
        if (store.portals.length > 0 && store.portals[store.portals.length - 1]) {
          var _item = store.portals[store.portals.length - 1];
          Portal.renderPortal(_item, true);
        } else {
          _reactDom2.default.unmountComponentAtNode(store.el);
          if (store.el.parentNode) {
            store.el.parentNode.removeChild(store.el);
          }
          store = null;
        }
      }, 500);
    }return undefined;
  },

  // Render a portal
  renderPortal: function renderPortal(props, renderOnly) {
    var Element = props.Element;
    var toolbarAnimations = props.toolbarAnimations;

    var actualProps = _objectWithoutProperties(props, ['Element', 'toolbarAnimations']); // eslint-disable-line no-use-before-define

    if (!props) {
      return;
    }

    if (!renderOnly) {
      if (!store) {
        Portal.createPortalNode();
      } else if (store.timeout) {
        clearTimeout(store.timeout);
        store.timeout = null;
      }
      store.portals = Portal.addPortalToList(store.portals, props);
    }

    _reactDom2.default.render(_react2.default.createElement(
      Tooltip,
      _extends({ animations: toolbarAnimations }, actualProps),
      _react2.default.createElement(Element, actualProps)
    ), store.el);
  }
};

exports.default = Portal;