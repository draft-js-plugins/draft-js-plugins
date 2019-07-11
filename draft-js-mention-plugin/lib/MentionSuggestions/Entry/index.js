"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Entry =
/*#__PURE__*/
function (_Component) {
  _inherits(Entry, _Component);

  function Entry(props) {
    var _this;

    _classCallCheck(this, Entry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Entry).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.props.onMentionSelect(_this.props.mention);

        _this.mouseDown = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      // Note: important to avoid a content edit change
      event.preventDefault();
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      _this.props.onMentionFocus(_this.props.index);
    });

    _this.mouseDown = false;
    return _this;
  }

  _createClass(Entry, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mouseDown = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          mention = _this$props.mention,
          searchValue = _this$props.searchValue,
          isFocused = _this$props.isFocused,
          id = _this$props.id;
      var className = isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
      var EntryComponent = this.props.entryComponent;
      return _react["default"].createElement(EntryComponent, {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        role: "option",
        id: id,
        "aria-selected": isFocused ? 'true' : null,
        theme: theme,
        mention: mention,
        isFocused: isFocused,
        searchValue: searchValue
      });
    }
  }]);

  return Entry;
}(_react.Component);

exports["default"] = Entry;

_defineProperty(Entry, "propTypes", {
  entryComponent: _propTypes["default"].any.isRequired,
  searchValue: _propTypes["default"].string,
  onMentionSelect: _propTypes["default"].func
});