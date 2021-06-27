'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var immutable = require('immutable');
var React = require('react');
var clsx = require('clsx');
var PropTypes = require('prop-types');
var draftJs = require('draft-js');
var escapeRegExp = require('lodash/escapeRegExp');
var reactPopper = require('react-popper');
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var escapeRegExp__default = /*#__PURE__*/_interopDefaultLegacy(escapeRegExp);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function MentionLink(_ref) {
  var mention = _ref.mention,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement("a", {
    href: mention.link,
    className: className,
    spellCheck: false,
    "data-testid": "mentionLink"
  }, children);
}

function MentionText(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: className,
    spellCheck: false,
    "data-testid": "mentionText"
  }, children);
}

function Mention(props) {
  var entityKey = props.entityKey,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      mentionComponent = props.mentionComponent,
      children = props.children,
      decoratedText = props.decoratedText,
      className = props.className,
      contentState = props.contentState,
      getEditorState = props.getEditorState;
  var combinedClassName = clsx__default['default'](theme.mention, className);
  var mention = contentState.getEntity(entityKey).getData().mention;
  var Component = mentionComponent || (mention.link ? MentionLink : MentionText);
  return /*#__PURE__*/React__default['default'].createElement(Component, {
    entityKey: entityKey,
    mention: mention,
    theme: theme,
    className: combinedClassName,
    decoratedText: decoratedText,
    editorState: getEditorState()
  }, children);
}

var Entry = function Entry(props) {
  var mouseDown = React.useRef(false);
  React.useEffect(function () {
    mouseDown.current = false;
  });

  var onMouseUp = function onMouseUp() {
    if (mouseDown.current) {
      props.onMentionSelect(props.mention);
      mouseDown.current = false;
    }
  };

  var onMouseDown = function onMouseDown(event) {
    // Note: important to avoid a content edit change
    event.preventDefault();
    mouseDown.current = true;
  };

  var onMouseEnter = function onMouseEnter() {
    props.onMentionFocus(props.index);
  };

  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      mention = props.mention,
      searchValue = props.searchValue,
      isFocused = props.isFocused,
      id = props.id;
  var className = isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
  var EntryComponent = props.entryComponent;
  return /*#__PURE__*/React__default['default'].createElement(EntryComponent, {
    className: className,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseEnter: onMouseEnter,
    role: "option",
    id: id,
    "aria-selected": isFocused ? 'true' : undefined,
    theme: theme,
    mention: mention,
    isFocused: isFocused,
    searchValue: searchValue
  });
};

Entry.propTypes = {
  entryComponent: PropTypes__default['default'].any.isRequired,
  searchValue: PropTypes__default['default'].string,
  // eslint-disable-next-line react/no-unused-prop-types
  onMentionSelect: PropTypes__default['default'].func
};

/**
 * Return tail end of the string matching trigger upto the position.
 */
function getSearchTextAt(blockText, position, triggers) {
  var str = blockText.substr(0, position);
  var triggerPattern = triggers.map(function (trigger) {
    return escapeRegExp__default['default'](trigger);
  }).join('|');
  var TRIGGER_REGEX = new RegExp("(\\s|^)(" + triggerPattern + ")", 'g');
  var matches = str.matchAll(TRIGGER_REGEX);
  var triggerStartIndex = 0;
  var valueStartIndex = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(matches), _step; !(_step = _iterator()).done;) {
    var match = _step.value;
    var spaceLen = match[1].length;
    var matchLen = match[2].length;
    triggerStartIndex = (match.index || 0) + spaceLen;
    valueStartIndex = triggerStartIndex + matchLen;
  }

  var matchingString = str.slice(valueStartIndex);
  var end = str.length;
  return {
    begin: triggerStartIndex,
    end: end,
    matchingString: matchingString
  };
}

var getSearchText = (function (editorState, selection, triggers) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset();
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getSearchTextAt(blockText, anchorOffset, triggers);
});

function getTypeByTrigger(trigger) {
  return trigger === '@' ? 'mention' : trigger + "mention";
}

function addMention(editorState, mention, mentionPrefix, mentionTrigger, entityMutability) {
  var contentStateWithEntity = editorState.getCurrentContent().createEntity(getTypeByTrigger(mentionTrigger), entityMutability, {
    mention: mention
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();

  var _getSearchText = getSearchText(editorState, currentSelectionState, [mentionTrigger]),
      begin = _getSearchText.begin,
      end = _getSearchText.end; // get selection of the @mention search text


  var mentionTextSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end
  });
  var mentionReplacedContent = draftJs.Modifier.replaceText(editorState.getCurrentContent(), mentionTextSelection, "" + mentionPrefix + mention.name, undefined, // no inline style needed
  entityKey); // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.

  var blockKey = mentionTextSelection.getAnchorKey();
  var blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();

  if (blockSize === end) {
    mentionReplacedContent = draftJs.Modifier.insertText(mentionReplacedContent, mentionReplacedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = draftJs.EditorState.push(editorState, mentionReplacedContent, 'insert-fragment');
  return draftJs.EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
}

function Avatar(_ref) {
  var mention = _ref.mention,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;

  if (mention.avatar) {
    return /*#__PURE__*/React__default['default'].createElement("img", {
      src: mention.avatar,
      className: theme.mentionSuggestionsEntryAvatar,
      role: "presentation"
    });
  }

  return null;
}

var _excluded$1 = ["mention", "theme", "isFocused", "searchValue"];
function DefaultEntryComponent(props) {
  var mention = props.mention,
      theme = props.theme;
      props.isFocused;
      props.searchValue;
      var parentProps = _objectWithoutPropertiesLoose(props, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement("div", parentProps, /*#__PURE__*/React__default['default'].createElement(Avatar, {
    mention: mention,
    theme: theme
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: theme == null ? void 0 : theme.mentionSuggestionsEntryText
  }, mention.name));
}

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      props = _ref.props;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect;

  if (relativeParent) {
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect = {
      scrollLeft: relativeParent.scrollLeft,
      scrollTop: relativeParent.scrollTop,
      left: decoratorRect.left - relativeParentRect.left,
      top: decoratorRect.bottom - relativeParentRect.top
    };
  } else {
    relativeRect = {
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
      top: decoratorRect.bottom,
      left: decoratorRect.left
    };
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (props.open) {
    if (props.suggestions.length > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: left + "px",
    top: top + "px",
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
}

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
      blockKey = _offsetKey$split[0],
      decoratorKey = _offsetKey$split[1],
      leafKey = _offsetKey$split[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10)
  };
};

function filterUndefineds(value) {
  return value !== undefined;
}

function getTriggerForMention(editorState, searches, mentionTriggers) {
  // get the current selection
  var selection = editorState.getSelection();
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

  if (!selection.isCollapsed() || !selection.getHasFocus()) {
    return null;
  } // identify the start & end positon of each search-text


  var offsetDetails = searches.map(function (offsetKey) {
    return decodeOffsetKey(offsetKey);
  }); // a leave can be empty when it is removed due event.g. using backspace
  // do not check leaves, use full decorated portal text

  var leaves = offsetDetails.filter(function (offsetDetail) {
    return offsetDetail.blockKey === anchorKey;
  }).map(function (offsetDetail) {
    return editorState.getBlockTree(offsetDetail.blockKey).getIn([offsetDetail.decoratorKey]);
  }); // if all leaves are undefined the popover should be removed

  if (leaves.every(function (leave) {
    return leave === undefined;
  })) {
    return null;
  } // Checks that the cursor is after the @ character but still somewhere in
  // the word (search term). Setting it to allow the cursor to be left of
  // the @ causes troubles due selection confusion.


  var blockText = editorState.getCurrentContent().getBlockForKey(anchorKey).getText();
  var triggerForSelectionInsideWord = leaves.filter(filterUndefineds).map(function (_ref) {
    var start = _ref.start,
        end = _ref.end;
    return mentionTriggers.map(function (trigger) {
      return (// @ is the first character
        start === 0 && anchorOffset >= start + trigger.length && //should not trigger if the cursor is before the trigger
        blockText.substr(0, trigger.length) === trigger && anchorOffset <= end || // @ is in the text or at the end, multi triggers
        mentionTriggers.length > 1 && anchorOffset >= start + trigger.length && (blockText.substr(start + 1, trigger.length) === trigger || blockText.substr(start, trigger.length) === trigger) && anchorOffset <= end || // @ is in the text or at the end, single trigger
        mentionTriggers.length === 1 && anchorOffset >= start + trigger.length && anchorOffset <= end ? trigger : undefined
      );
    }).filter(filterUndefineds)[0];
  }).filter(filterUndefineds);

  if (triggerForSelectionInsideWord.isEmpty()) {
    return null;
  }

  var _triggerForSelectionI = triggerForSelectionInsideWord.entrySeq().first(),
      activeOffsetKey = _triggerForSelectionI[0],
      activeTrigger = _triggerForSelectionI[1];

  return {
    activeOffsetKey: activeOffsetKey,
    activeTrigger: activeTrigger
  };
}

function Popover(_ref) {
  var store = _ref.store,
      children = _ref.children,
      className = _ref.className,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {
    placement: 'bottom-start'
  } : _ref$popperOptions;

  var _useState = React.useState(null),
      popperElement = _useState[0],
      setPopperElement = _useState[1];

  var _usePopper = reactPopper.usePopper(store.getReferenceElement(), popperElement, popperOptions),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper, {
    className: className
  }), children);
}

var warning = lodash.once(function (text) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(text);
  }
});

var _excluded = ["entryComponent", "popoverComponent", "popperOptions", "popoverContainer", "onOpenChange", "onAddMention", "onSearchChange", "suggestions", "ariaProps", "callbacks", "theme", "store", "entityMutability", "positionSuggestions", "mentionTriggers", "mentionPrefix"];
var MentionSuggestions = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MentionSuggestions, _Component);

  function MentionSuggestions(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      focusedOptionIndex: 0
    };
    _this.key = draftJs.genKey();
    _this.popover = void 0;
    _this.activeOffsetKey = void 0;
    _this.lastSearchValue = void 0;
    _this.lastActiveTrigger = '';
    _this.lastSelectionIsInsideWord = void 0;

    _this.onEditorStateChange = function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      };

      var triggerForMention = getTriggerForMention(editorState, searches, _this.props.mentionTriggers);

      if (!triggerForMention) {
        return removeList();
      }

      var lastActiveOffsetKey = _this.activeOffsetKey;
      _this.activeOffsetKey = triggerForMention.activeOffsetKey;

      _this.onSearchChange(editorState, editorState.getSelection(), _this.activeOffsetKey, lastActiveOffsetKey, triggerForMention.activeTrigger); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another mention search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey || '')) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will show again.


      if (!_this.props.open && !_this.props.store.isEscaped(_this.activeOffsetKey || '')) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another mention search


      if (lastActiveOffsetKey !== _this.activeOffsetKey) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      return editorState;
    };

    _this.onSearchChange = function (editorState, selection, activeOffsetKey, lastActiveOffsetKey, trigger) {
      var _getSearchText = getSearchText(editorState, selection, [trigger]),
          searchValue = _getSearchText.matchingString;

      if (_this.lastActiveTrigger !== trigger || _this.lastSearchValue !== searchValue || activeOffsetKey !== lastActiveOffsetKey) {
        _this.lastActiveTrigger = trigger;
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          trigger: trigger,
          value: searchValue
        });
      }
    };

    _this.onDownArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onMentionFocus(newIndex >= _this.props.suggestions.length ? 0 : newIndex);
    };

    _this.onTab = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    };

    _this.onUpArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.props.suggestions.length > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onMentionFocus(newIndex < 0 ? _this.props.suggestions.length - 1 : newIndex);
      }
    };

    _this.onEscape = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.props.store.escapeSearch(_this.activeOffsetKey || '');

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    };

    _this.onMentionSelect = function (mention) {
      // Note: This can happen in case a user typed @xxx (invalid mention) and
      // then hit Enter. Then the mention will be undefined.
      if (!mention) {
        return;
      }

      if (_this.props.onAddMention) {
        _this.props.onAddMention(mention);
      }

      _this.closeDropdown();

      var newEditorState = addMention(_this.props.store.getEditorState(), mention, _this.props.mentionPrefix, _this.lastActiveTrigger || '', _this.props.entityMutability);

      _this.props.store.setEditorState(newEditorState);
    };

    _this.onMentionFocus = function (index) {
      var descendant = "mention-option-" + _this.key + "-" + index;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    };

    _this.commitSelection = function () {
      var mention = _this.props.suggestions[_this.state.focusedOptionIndex];

      if (!_this.props.store.getIsOpened() || !mention) {
        return 'not-handled';
      }

      _this.onMentionSelect(mention);

      return 'handled';
    };

    _this.openDropdown = function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up


        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape


        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab


        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }

        return undefined;
      };

      var descendant = "mention-option-" + _this.key + "-" + _this.state.focusedOptionIndex;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "mentions-list-" + _this.key;
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.props.onOpenChange(true);
    };

    _this.closeDropdown = function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.handleReturn = undefined;
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.props.onOpenChange(false);
    };

    _this.props.callbacks.onChange = _this.onEditorStateChange;
    return _this;
  }

  var _proto = MentionSuggestions.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.popover) {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      var size = this.props.suggestions.length;

      if (size > 0 && this.state.focusedOptionIndex >= size) {
        this.setState({
          focusedOptionIndex: size - 1
        });
      } // Note: this is a simple protection for the error when componentDidUpdate
      // try to get new getPortalClientRect, but the key already was deleted by
      // previous action. (right now, it only can happened when set the mention
      // trigger to be multi-characters which not supported anyway!)


      if (!this.props.store.getAllSearches().has(this.activeOffsetKey)) {
        return;
      }

      var decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);
      var positionSuggestions$1 = this.props.positionSuggestions || positionSuggestions;
      var newStyles = positionSuggestions$1({
        decoratorRect: decoratorRect,
        props: this.props,
        popover: this.popover
      });

      for (var _i = 0, _Object$entries = Object.entries(newStyles); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.popover.style[key] = value;
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.callbacks.onChange = undefined;
  };

  _proto.render = function render() {
    var _this2 = this;

    if (!this.props.open) {
      return null;
    }

    var _this$props = this.props,
        entryComponent = _this$props.entryComponent,
        popoverComponent = _this$props.popoverComponent,
        popperOptions = _this$props.popperOptions,
        _this$props$popoverCo = _this$props.popoverContainer,
        PopoverContainer = _this$props$popoverCo === void 0 ? Popover : _this$props$popoverCo;
        _this$props.onOpenChange;
        _this$props.onAddMention;
        _this$props.onSearchChange;
        _this$props.suggestions;
        _this$props.ariaProps;
        _this$props.callbacks;
        var _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme;
        _this$props.store;
        _this$props.entityMutability;
        var positionSuggestions = _this$props.positionSuggestions;
        _this$props.mentionTriggers;
        _this$props.mentionPrefix;
        var elementProps = _objectWithoutPropertiesLoose(_this$props, _excluded);

    if (popoverComponent || positionSuggestions) {
      warning('The properties `popoverComponent` and `positionSuggestions` are deprecated and will be removed in @draft-js-plugins/mentions 6.0 . Use `popperOptions` instead');
      return /*#__PURE__*/React__default['default'].cloneElement(popoverComponent || /*#__PURE__*/React__default['default'].createElement("div", null), _extends({}, elementProps, {
        className: theme.mentionSuggestions,
        role: 'listbox',
        id: "mentions-list-" + this.key,
        ref: function ref(element) {
          _this2.popover = element;
        }
      }), this.props.suggestions.map(function (mention, index) {
        return /*#__PURE__*/React__default['default'].createElement(Entry, {
          key: mention.id != null ? mention.id : mention.name,
          onMentionSelect: _this2.onMentionSelect,
          onMentionFocus: _this2.onMentionFocus,
          isFocused: _this2.state.focusedOptionIndex === index,
          mention: mention,
          index: index,
          id: "mention-option-" + _this2.key + "-" + index,
          theme: theme,
          searchValue: _this2.lastSearchValue,
          entryComponent: entryComponent || DefaultEntryComponent
        });
      }));
    }

    if (!this.props.renderEmptyPopup && this.props.suggestions.length === 0) {
      return null;
    }

    return /*#__PURE__*/React__default['default'].createElement(PopoverContainer, {
      store: this.props.store,
      className: theme.mentionSuggestions,
      popperOptions: popperOptions
    }, this.props.suggestions.map(function (mention, index) {
      return /*#__PURE__*/React__default['default'].createElement(Entry, {
        key: mention.id != null ? mention.id : mention.name,
        onMentionSelect: _this2.onMentionSelect,
        onMentionFocus: _this2.onMentionFocus,
        isFocused: _this2.state.focusedOptionIndex === index,
        mention: mention,
        index: index,
        id: "mention-option-" + _this2.key + "-" + index,
        theme: theme,
        searchValue: _this2.lastSearchValue,
        entryComponent: entryComponent || DefaultEntryComponent
      });
    }));
  };

  return MentionSuggestions;
}(React.Component);
MentionSuggestions.propTypes = {
  open: PropTypes__default['default'].bool.isRequired,
  onOpenChange: PropTypes__default['default'].func.isRequired,
  entityMutability: PropTypes__default['default'].oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
  entryComponent: PropTypes__default['default'].func,
  onAddMention: PropTypes__default['default'].func,
  suggestions: PropTypes__default['default'].array.isRequired
};

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
function MentionSuggestionsPortal(props) {
  var searchPortal = React.useRef(); // Note: this is a workaround for an obscure issue: https://github.com/draft-js-plugins/draft-js-plugins/pull/667/files
  // Ideally we can remove this in the future.

  var searchPortalRef = function searchPortalRef(element) {
    searchPortal.current = element;
    props.store.setReferenceElement(element);
  };

  var updatePortalClientRect = function updatePortalClientRect(currentProps) {
    currentProps.store.updatePortalClientRect(currentProps.offsetKey, function () {
      return searchPortal.current.getBoundingClientRect();
    });
  }; // When inputting Japanese characters (or any complex alphabet which requires
  // hitting enter to commit the characters), that action was causing a race
  // condition when we used UNSAFE_componentWillMount. By using componentDidMount
  // instead of UNSAFE_componentWillMount, the component will unmount unregister and
  // then properly mount and register after. Prior to this change,
  // UNSAFE_componentWillMount would not fire after componentWillUnmount even though it
  // was still in the DOM, so it wasn't re-registering the offsetkey.


  useIsomorphicLayoutEffect(function () {
    props.store.register(props.offsetKey);
    props.store.setIsOpened(true);
    updatePortalClientRect(props); // trigger a re-render so the MentionSuggestions becomes active

    props.store.setEditorState(props.store.getEditorState());
    return function () {
      props.store.unregister(props.offsetKey);
      props.store.setIsOpened(false);
      props.store.setReferenceElement(null);
    };
  }, []);
  React.useEffect(function () {
    updatePortalClientRect(props);
  });
  return /*#__PURE__*/React__default['default'].createElement("span", {
    ref: searchPortalRef
  }, props.children);
}

var defaultRegExp = '[' + '\\w-' + // Latin-1 Supplement (letters only) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin-1_Supplement
"\xC0-\xD6" + "\xD8-\xF6" + "\xF8-\xFF" + // Latin Extended-A (without deprecated character) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_Extended-A
"\u0100-\u0148" + "\u014A-\u017F" + // Cyrillic symbols: \u0410-\u044F - https://en.wikipedia.org/wiki/Cyrillic_script_in_Unicode
"\u0410-\u044F" + // hiragana (japanese): \u3040-\u309F - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
"\u3040-\u309F" + // katakana (japanese): \u30A0-\u30FF - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
"\u30A0-\u30FF" + // For an advanced explaination about Hangul see https://github.com/draft-js-plugins/draft-js-plugins/pull/480#issuecomment-254055437
// Hangul Jamo (korean): \u3130-\u318F - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
// Hangul Syllables (korean): \uAC00-\uD7A3 - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
"\u3130-\u318F" + "\uAC00-\uD7A3" + // common chinese symbols: \u4e00-\u9eff - http://stackoverflow.com/a/1366113/837709
// extended to \u9fa5 https://github.com/draft-js-plugins/draft-js-plugins/issues/1888
"\u4E00-\u9FA5" + // Arabic https://en.wikipedia.org/wiki/Arabic_(Unicode_block)
"\u0600-\u06FF" + // Vietnamese http://vietunicode.sourceforge.net/charset/
"\xC0-\u1EF9" + ']';

var defaultTheme = {
  mention: "m6zwb4v",
  // CSS class for suggestions component
  mentionSuggestions: "mnw6qvm",
  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry: "m1ymsnxd",
  mentionSuggestionsEntryFocused: "m126ak5t",
  mentionSuggestionsEntryText: "mtiwdxc",
  mentionSuggestionsEntryAvatar: "myz2dw1"
};

var findMentionEntities = function findMentionEntities(triggers) {
  return function (contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && triggers.some(function (trigger) {
        return contentState.getEntity(entityKey).getType() === getTypeByTrigger(trigger);
      });
    }, callback);
  };
};

var whitespaceRegEx = /\s/;

function checkForWhiteSpaceBeforeTrigger(text, index) {
  if (index === 0) {
    return true;
  }

  return whitespaceRegEx.test(text[index - 1]);
}

function findInContentBlock(regex, text, nonEntityStart, callback) {
  var matchArr;
  var start;
  var prevLastIndex = regex.lastIndex; // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed

  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }

    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;

    var _end = start + matchArr[0].length;

    if (whitespaceRegEx.test(text[start])) {
      //trim the result so that we have no whitespaces
      start += 1;
    }

    callback(start, _end);
  }
}

function findInContentBlockWithWhitespace(regex, text, nonEntityStart, callback) {
  var matchArr;
  var start;
  var prevLastIndex = regex.lastIndex; // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed

  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }

    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;

    var _end2 = start + matchArr[0].length; //check if whitespace support is active that the char before the trigger is a white space #1844


    if (checkForWhiteSpaceBeforeTrigger(text, matchArr.index)) {
      callback(start, _end2);
    }
  }
}

var findWithRegex = function findWithRegex(regex, contentBlock, supportWhiteSpace, callback) {
  var contentBlockText = contentBlock.getText(); // exclude entities, when matching

  contentBlock.findEntityRanges(function (character) {
    return !character.getEntity();
  }, function (nonEntityStart, nonEntityEnd) {
    var text = contentBlockText.slice(nonEntityStart, nonEntityEnd);

    if (supportWhiteSpace) {
      findInContentBlockWithWhitespace(regex, text, nonEntityStart, callback);
    } else {
      findInContentBlock(regex, text, nonEntityStart, callback);
    }
  });
};

var mentionSuggestionsStrategy = (function (triggers, supportWhiteSpace, regExp) {
  var triggerPattern = "(" + triggers.map(function (trigger) {
    return escapeRegExp__default['default'](trigger);
  }).join('|') + ")";
  var MENTION_REGEX = supportWhiteSpace ? new RegExp(triggerPattern + "(" + regExp + "|\\s)*", 'g') : new RegExp("(\\s|^)" + triggerPattern + regExp + "*", 'g');
  return function (contentBlock, callback) {
    findWithRegex(MENTION_REGEX, contentBlock, supportWhiteSpace, callback);
  };
});

// Get the first 5 suggestions that match
var defaultSuggestionsFilter$1 = function defaultSuggestionsFilter(searchValue, suggestions, trigger) {
  var value = searchValue.toLowerCase();
  var triggerSuggestions = trigger && !Array.isArray(suggestions) ? suggestions[trigger] : suggestions;
  var filteredSuggestions = triggerSuggestions.filter(function (suggestion) {
    return !value || suggestion.name.toLowerCase().indexOf(value) > -1;
  });
  var length = filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

var index = (function (config) {
  if (config === void 0) {
    config = {};
  }

  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };
  var searches = immutable.Map();
  var escapedSearch;
  var clientRectFunctions = immutable.Map();
  var isOpened = false;
  var referenceElement;
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
    },
    getReferenceElement: function getReferenceElement() {
      return referenceElement;
    },
    setReferenceElement: function setReferenceElement(element) {
      referenceElement = element;
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config = config,
      _config$mentionPrefix = _config.mentionPrefix,
      mentionPrefix = _config$mentionPrefix === void 0 ? '' : _config$mentionPrefix,
      _config$theme = _config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      positionSuggestions = _config.positionSuggestions,
      mentionComponent = _config.mentionComponent,
      _config$mentionSugges = _config.mentionSuggestionsComponent,
      MentionSuggestionsComponent = _config$mentionSugges === void 0 ? MentionSuggestions : _config$mentionSugges,
      _config$entityMutabil = _config.entityMutability,
      entityMutability = _config$entityMutabil === void 0 ? 'SEGMENTED' : _config$entityMutabil,
      _config$mentionTrigge = _config.mentionTrigger,
      mentionTrigger = _config$mentionTrigge === void 0 ? '@' : _config$mentionTrigge,
      _config$mentionRegExp = _config.mentionRegExp,
      mentionRegExp = _config$mentionRegExp === void 0 ? defaultRegExp : _config$mentionRegExp,
      _config$supportWhites = _config.supportWhitespace,
      supportWhitespace = _config$supportWhites === void 0 ? false : _config$supportWhites,
      popperOptions = _config.popperOptions;
  var mentionTriggers = typeof mentionTrigger === 'string' ? [mentionTrigger] : mentionTrigger;
  var mentionSearchProps = {
    ariaProps: ariaProps,
    callbacks: callbacks,
    theme: theme,
    store: store,
    entityMutability: entityMutability,
    positionSuggestions: positionSuggestions,
    mentionTriggers: mentionTriggers,
    mentionPrefix: mentionPrefix,
    popperOptions: popperOptions
  };

  var DecoratedMentionSuggestionsComponent = function DecoratedMentionSuggestionsComponent(props) {
    return /*#__PURE__*/React__default['default'].createElement(MentionSuggestionsComponent, _extends({}, props, mentionSearchProps));
  };

  var DecoratedMention = function DecoratedMention(props) {
    return /*#__PURE__*/React__default['default'].createElement(Mention, _extends({}, props, {
      theme: theme,
      mentionComponent: mentionComponent
    }));
  };

  var DecoratedMentionSuggestionsPortal = function DecoratedMentionSuggestionsPortal(props) {
    return /*#__PURE__*/React__default['default'].createElement(MentionSuggestionsPortal, _extends({}, props, {
      store: store
    }));
  };

  return {
    MentionSuggestions: DecoratedMentionSuggestionsComponent,
    decorators: [{
      strategy: findMentionEntities(mentionTriggers),
      component: DecoratedMention
    }, {
      strategy: mentionSuggestionsStrategy(mentionTriggers, supportWhitespace, mentionRegExp),
      component: DecoratedMentionSuggestionsPortal
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
    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      if (callbacks.onChange) {
        return callbacks.onChange(editorState);
      }

      return editorState;
    }
  };
});
var defaultSuggestionsFilter = defaultSuggestionsFilter$1;

exports.MentionSuggestions = MentionSuggestions;
exports.addMention = addMention;
exports.default = index;
exports.defaultSuggestionsFilter = defaultSuggestionsFilter;
exports.defaultTheme = defaultTheme;
