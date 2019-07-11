"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MentionSuggestions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _draftJs = require("draft-js");

var _lodash = _interopRequireDefault(require("lodash.escaperegexp"));

var _Entry = _interopRequireDefault(require("./Entry"));

var _addMention = _interopRequireDefault(require("../modifiers/addMention"));

var _decodeOffsetKey = _interopRequireDefault(require("../utils/decodeOffsetKey"));

var _getSearchText2 = _interopRequireDefault(require("../utils/getSearchText"));

var _defaultEntryComponent = _interopRequireDefault(require("./Entry/defaultEntryComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MentionSuggestions =
/*#__PURE__*/
function (_Component) {
  _inherits(MentionSuggestions, _Component);

  function MentionSuggestions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MentionSuggestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MentionSuggestions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isActive: false,
      focusedOptionIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      if (_this.popover) {
        // In case the list shrinks there should be still an option focused.
        // Note: this might run multiple times and deduct 1 until the condition is
        // not fullfilled anymore.
        var size = _this.props.suggestions.length;

        if (size > 0 && _this.state.focusedOptionIndex >= size) {
          _this.setState({
            focusedOptionIndex: size - 1
          });
        } // Note: this is a simple protection for the error when componentDidUpdate
        // try to get new getPortalClientRect, but the key already was deleted by
        // previous action. (right now, it only can happened when set the mention
        // trigger to be multi-characters which not supported anyway!)


        if (!_this.props.store.getAllSearches().has(_this.activeOffsetKey)) {
          return;
        }

        var decoratorRect = _this.props.store.getPortalClientRect(_this.activeOffsetKey);

        var newStyles = _this.props.positionSuggestions({
          decoratorRect: decoratorRect,
          prevProps: prevProps,
          prevState: prevState,
          props: _this.props,
          state: _this.state,
          popover: _this.popover
        });

        Object.keys(newStyles).forEach(function (key) {
          _this.popover.style[key] = newStyles[key];
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.props.callbacks.onChange = undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "onEditorStateChange", function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      }; // get the current selection


      var selection = editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList(); // identify the start & end positon of each search-text

      var offsetDetails = searches.map(function (offsetKey) {
        return (0, _decodeOffsetKey["default"])(offsetKey);
      }); // a leave can be empty when it is removed due e.g. using backspace
      // do not check leaves, use full decorated portal text

      var leaves = offsetDetails.filter(function (_ref) {
        var blockKey = _ref.blockKey;
        return blockKey === anchorKey;
      }).map(function (_ref2) {
        var blockKey = _ref2.blockKey,
            decoratorKey = _ref2.decoratorKey;
        return editorState.getBlockTree(blockKey).getIn([decoratorKey]);
      }); // if all leaves are undefined the popover should be removed

      if (leaves.every(function (leave) {
        return leave === undefined;
      })) {
        return removeList();
      } // Checks that the cursor is after the @ character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the @ causes troubles due selection confusion.


      var plainText = editorState.getCurrentContent().getPlainText();
      var selectionIsInsideWord = leaves.filter(function (leave) {
        return leave !== undefined;
      }).map(function (_ref3) {
        var start = _ref3.start,
            end = _ref3.end;
        return start === 0 && anchorOffset === _this.props.mentionTrigger.length && plainText.charAt(anchorOffset) !== _this.props.mentionTrigger && new RegExp(String.raw({
          raw: "".concat((0, _lodash["default"])(_this.props.mentionTrigger))
        }), 'g').test(plainText) && anchorOffset <= end || // @ is the first character
        anchorOffset > start + _this.props.mentionTrigger.length && anchorOffset <= end // @ is in the text or at the end
        ;
      });
      if (selectionIsInsideWord.every(function (isInside) {
        return isInside === false;
      })) return removeList();
      var lastActiveOffsetKey = _this.activeOffsetKey;
      _this.activeOffsetKey = selectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.onSearchChange(editorState, selection, _this.activeOffsetKey, lastActiveOffsetKey); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another mention search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will show again.


      if (!_this.state.isActive && !_this.props.store.isEscaped(_this.activeOffsetKey) && _this.props.suggestions.length > 0) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another mention search


      if (_this.lastSelectionIsInsideWord === undefined || !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      _this.lastSelectionIsInsideWord = selectionIsInsideWord;
      return editorState;
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (editorState, selection, activeOffsetKey, lastActiveOffsetKey) {
      var _getSearchText = (0, _getSearchText2["default"])(editorState, selection, _this.props.mentionTrigger),
          searchValue = _getSearchText.matchingString;

      if (_this.lastSearchValue !== searchValue || activeOffsetKey !== lastActiveOffsetKey) {
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          value: searchValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDownArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onMentionFocus(newIndex >= _this.props.suggestions.length ? 0 : newIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onTab", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    });

    _defineProperty(_assertThisInitialized(_this), "onUpArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.props.suggestions.length > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onMentionFocus(newIndex < 0 ? _this.props.suggestions.length - 1 : newIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.props.store.escapeSearch(activeOffsetKey);

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "onMentionSelect", function (mention) {
      // Note: This can happen in case a user typed @xxx (invalid mention) and
      // then hit Enter. Then the mention will be undefined.
      if (!mention) {
        return;
      }

      if (_this.props.onAddMention) {
        _this.props.onAddMention(mention);
      }

      _this.closeDropdown();

      var newEditorState = (0, _addMention["default"])(_this.props.store.getEditorState(), mention, _this.props.mentionPrefix, _this.props.mentionTrigger, _this.props.entityMutability);

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), "onMentionFocus", function (index) {
      var descendant = "mention-option-".concat(_this.key, "-").concat(index);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "commitSelection", function () {
      if (!_this.props.store.getIsOpened()) {
        return 'not-handled';
      }

      _this.onMentionSelect(_this.props.suggestions[_this.state.focusedOptionIndex]);

      return 'handled';
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.onDownArrow = _this.onDownArrow;
      _this.props.callbacks.onUpArrow = _this.onUpArrow;
      _this.props.callbacks.onEscape = _this.onEscape;
      _this.props.callbacks.handleReturn = _this.commitSelection;
      _this.props.callbacks.onTab = _this.onTab;
      var descendant = "mention-option-".concat(_this.key, "-").concat(_this.state.focusedOptionIndex);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "mentions-list-".concat(_this.key);
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.setState({
        isActive: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.onDownArrow = undefined;
      _this.props.callbacks.onUpArrow = undefined;
      _this.props.callbacks.onTab = undefined;
      _this.props.callbacks.onEscape = undefined;
      _this.props.callbacks.handleReturn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.setState({
        isActive: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(MentionSuggestions, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.key = (0, _draftJs.genKey)();
      this.props.callbacks.onChange = this.onEditorStateChange;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.suggestions.length === 0 && this.state.isActive) {
        this.closeDropdown();
      } else if (nextProps.suggestions.length > 0 && nextProps.suggestions !== this.props.suggestions && !this.state.isActive) {
        this.openDropdown();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.isActive) {
        return null;
      }

      var _this$props = this.props,
          entryComponent = _this$props.entryComponent,
          _this$props$popoverCo = _this$props.popoverComponent,
          popoverComponent = _this$props$popoverCo === void 0 ? _react["default"].createElement("div", null) : _this$props$popoverCo,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen,
          onAddMention = _this$props.onAddMention,
          onSearchChange = _this$props.onSearchChange,
          suggestions = _this$props.suggestions,
          ariaProps = _this$props.ariaProps,
          callbacks = _this$props.callbacks,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          store = _this$props.store,
          entityMutability = _this$props.entityMutability,
          positionSuggestions = _this$props.positionSuggestions,
          mentionTrigger = _this$props.mentionTrigger,
          mentionPrefix = _this$props.mentionPrefix,
          elementProps = _objectWithoutProperties(_this$props, ["entryComponent", "popoverComponent", "onClose", "onOpen", "onAddMention", "onSearchChange", "suggestions", "ariaProps", "callbacks", "theme", "store", "entityMutability", "positionSuggestions", "mentionTrigger", "mentionPrefix"]);

      return _react["default"].cloneElement(popoverComponent, _objectSpread({}, elementProps, {
        className: theme.mentionSuggestions,
        role: 'listbox',
        id: "mentions-list-".concat(this.key),
        ref: function ref(element) {
          _this2.popover = element;
        }
      }), this.props.suggestions.map(function (mention, index) {
        return _react["default"].createElement(_Entry["default"], {
          key: mention.id != null ? mention.id : mention.name,
          onMentionSelect: _this2.onMentionSelect,
          onMentionFocus: _this2.onMentionFocus,
          isFocused: _this2.state.focusedOptionIndex === index,
          mention: mention,
          index: index,
          id: "mention-option-".concat(_this2.key, "-").concat(index),
          theme: theme,
          searchValue: _this2.lastSearchValue,
          entryComponent: entryComponent || _defaultEntryComponent["default"]
        });
      }));
    }
  }]);

  return MentionSuggestions;
}(_react.Component);

exports.MentionSuggestions = MentionSuggestions;

_defineProperty(MentionSuggestions, "propTypes", {
  entityMutability: _propTypes["default"].oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
  entryComponent: _propTypes["default"].func,
  onAddMention: _propTypes["default"].func,
  suggestions: _propTypes["default"].array
});

var _default = MentionSuggestions;
exports["default"] = _default;