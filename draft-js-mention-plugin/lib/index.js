"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MentionSuggestions", {
  enumerable: true,
  get: function get() {
    return _MentionSuggestions["default"];
  }
});
Object.defineProperty(exports, "defaultTheme", {
  enumerable: true,
  get: function get() {
    return _defaultTheme.defaultTheme;
  }
});
exports.defaultSuggestionsFilter = exports["default"] = void 0;

var _decorateComponentWithProps = _interopRequireDefault(require("decorate-component-with-props"));

var _immutable = require("immutable");

var _Mention = _interopRequireDefault(require("./Mention"));

var _MentionSuggestions = _interopRequireDefault(require("./MentionSuggestions"));

var _MentionSuggestionsPortal = _interopRequireDefault(require("./MentionSuggestionsPortal"));

var _defaultRegExp = _interopRequireDefault(require("./defaultRegExp"));

var _mentionStrategy = _interopRequireDefault(require("./mentionStrategy"));

var _mentionSuggestionsStrategy = _interopRequireDefault(require("./mentionSuggestionsStrategy"));

var _defaultSuggestionsFilter = _interopRequireDefault(require("./utils/defaultSuggestionsFilter"));

var _positionSuggestions = _interopRequireDefault(require("./utils/positionSuggestions"));

var _defaultTheme = require("./defaultTheme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-line import/no-named-as-default
var _default = function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    onDownArrow: undefined,
    onUpArrow: undefined,
    onTab: undefined,
    onEscape: undefined,
    handleReturn: undefined,
    onChange: undefined
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };
  var searches = (0, _immutable.Map)();
  var escapedSearch;
  var clientRectFunctions = (0, _immutable.Map)();
  var isOpened;
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },
    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },
    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },
    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },
    unregister: function unregister(offsetKey) {
      searches = searches["delete"](offsetKey);
      clientRectFunctions = clientRectFunctions["delete"](offsetKey);
    },
    getIsOpened: function getIsOpened() {
      return isOpened;
    },
    setIsOpened: function setIsOpened(nextIsOpened) {
      isOpened = nextIsOpened;
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config$mentionPrefix = config.mentionPrefix,
      mentionPrefix = _config$mentionPrefix === void 0 ? '' : _config$mentionPrefix,
      _config$theme = config.theme,
      theme = _config$theme === void 0 ? _defaultTheme.defaultTheme : _config$theme,
      _config$positionSugge = config.positionSuggestions,
      positionSuggestions = _config$positionSugge === void 0 ? _positionSuggestions["default"] : _config$positionSugge,
      mentionComponent = config.mentionComponent,
      _config$mentionSugges = config.mentionSuggestionsComponent,
      mentionSuggestionsComponent = _config$mentionSugges === void 0 ? _MentionSuggestions["default"] : _config$mentionSugges,
      _config$entityMutabil = config.entityMutability,
      entityMutability = _config$entityMutabil === void 0 ? 'SEGMENTED' : _config$entityMutabil,
      _config$mentionTrigge = config.mentionTrigger,
      mentionTrigger = _config$mentionTrigge === void 0 ? '@' : _config$mentionTrigge,
      _config$mentionRegExp = config.mentionRegExp,
      mentionRegExp = _config$mentionRegExp === void 0 ? _defaultRegExp["default"] : _config$mentionRegExp,
      _config$supportWhites = config.supportWhitespace,
      supportWhitespace = _config$supportWhites === void 0 ? false : _config$supportWhites;
  var mentionSearchProps = {
    ariaProps: ariaProps,
    callbacks: callbacks,
    theme: theme,
    store: store,
    entityMutability: entityMutability,
    positionSuggestions: positionSuggestions,
    mentionTrigger: mentionTrigger,
    mentionPrefix: mentionPrefix
  };
  return {
    MentionSuggestions: (0, _decorateComponentWithProps["default"])(mentionSuggestionsComponent, mentionSearchProps),
    decorators: [{
      strategy: (0, _mentionStrategy["default"])(mentionTrigger),
      component: (0, _decorateComponentWithProps["default"])(_Mention["default"], {
        theme: theme,
        mentionComponent: mentionComponent
      })
    }, {
      strategy: (0, _mentionSuggestionsStrategy["default"])(mentionTrigger, supportWhitespace, mentionRegExp),
      component: (0, _decorateComponentWithProps["default"])(_MentionSuggestionsPortal["default"], {
        store: store
      })
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    onDownArrow: function onDownArrow(keyboardEvent) {
      return callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent);
    },
    onTab: function onTab(keyboardEvent) {
      return callbacks.onTab && callbacks.onTab(keyboardEvent);
    },
    onUpArrow: function onUpArrow(keyboardEvent) {
      return callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent);
    },
    onEscape: function onEscape(keyboardEvent) {
      return callbacks.onEscape && callbacks.onEscape(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      if (callbacks.onChange) return callbacks.onChange(editorState);
      return editorState;
    }
  };
};

exports["default"] = _default;
var defaultSuggestionsFilter = _defaultSuggestionsFilter["default"];
exports.defaultSuggestionsFilter = defaultSuggestionsFilter;