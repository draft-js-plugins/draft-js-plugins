(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return src_createEditorStateWithText;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return src_composeDecorators;
        });
      var Draft = __webpack_require__(1);
      var src_createEditorStateWithText = function createEditorStateWithText(
          text
        ) {
          return Draft.EditorState.createWithText
            ? Draft.EditorState.createWithText(text)
            : Draft.EditorState.createWithContent(
                Draft.ContentState.createFromText(text)
              );
        },
        src_composeDecorators = function composeDecorators() {
          for (
            var _len = arguments.length, funcs = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            funcs[_key] = arguments[_key];
          if (0 === funcs.length)
            return function (arg) {
              return arg;
            };
          if (1 === funcs.length) return funcs[0];
          var last = funcs[funcs.length - 1];
          return function () {
            for (
              var result = last.apply(void 0, arguments), i = funcs.length - 2;
              i >= 0;
              i -= 1
            ) {
              var f = funcs[i];
              result = f(result);
            }
            return result;
          };
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return src_defaultSuggestionsFilter;
      });
      var immutable = __webpack_require__(3),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        clsx_m = __webpack_require__(8);
      function MentionLink(_ref) {
        var mention = _ref.mention,
          children = _ref.children,
          className = _ref.className;
        return react_default.a.createElement(
          'a',
          {
            href: mention.link,
            className: className,
            spellCheck: !1,
            'data-testid': 'mentionLink',
          },
          children
        );
      }
      function MentionText(_ref2) {
        var children = _ref2.children,
          className = _ref2.className;
        return react_default.a.createElement(
          'span',
          {
            className: className,
            spellCheck: !1,
            'data-testid': 'mentionText',
          },
          children
        );
      }
      function Mention(props) {
        var entityKey = props.entityKey,
          _props$theme = props.theme,
          theme = void 0 === _props$theme ? {} : _props$theme,
          mentionComponent = props.mentionComponent,
          children = props.children,
          decoratedText = props.decoratedText,
          className = props.className,
          contentState = props.contentState,
          combinedClassName = Object(clsx_m.a)(theme.mention, className),
          mention = contentState.getEntity(entityKey).getData().mention,
          Component =
            mentionComponent || (mention.link ? MentionLink : MentionText);
        return react_default.a.createElement(
          Component,
          {
            entityKey: entityKey,
            mention: mention,
            theme: theme,
            className: combinedClassName,
            decoratedText: decoratedText,
          },
          children
        );
      }
      try {
        (Mention.displayName = 'Mention'),
          (Mention.__docgenInfo = {
            description: '',
            displayName: 'Mention',
            props: {
              mention: {
                defaultValue: null,
                description: '',
                name: 'mention',
                required: !0,
                type: { name: 'MentionData' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !0,
                type: { name: 'string' },
              },
              entityKey: {
                defaultValue: null,
                description: '',
                name: 'entityKey',
                required: !0,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'MentionPluginTheme' },
              },
              mentionComponent: {
                defaultValue: null,
                description: '',
                name: 'mentionComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<SubMentionComponentProps, any> | FunctionComponent<SubMentionComponentProps>',
                },
              },
              decoratedText: {
                defaultValue: null,
                description: '',
                name: 'decoratedText',
                required: !0,
                type: { name: 'string' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !0,
                type: { name: 'ContentState' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/Mention.tsx#Mention'
            ] = {
              docgenInfo: Mention.__docgenInfo,
              name: 'Mention',
              path: 'packages/mention/src/Mention.tsx#Mention',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        Draft = __webpack_require__(1),
        escapeRegExp = __webpack_require__(189),
        escapeRegExp_default = __webpack_require__.n(escapeRegExp),
        Entry_Entry = function Entry(props) {
          var mouseDown = Object(react.useRef)(!1);
          Object(react.useEffect)(function () {
            mouseDown.current = !1;
          });
          var _props$theme = props.theme,
            theme = void 0 === _props$theme ? {} : _props$theme,
            mention = props.mention,
            searchValue = props.searchValue,
            isFocused = props.isFocused,
            id = props.id,
            className = isFocused
              ? theme.mentionSuggestionsEntryFocused
              : theme.mentionSuggestionsEntry,
            EntryComponent = props.entryComponent;
          return react_default.a.createElement(EntryComponent, {
            className: className,
            onMouseDown: function onMouseDown(event) {
              event.preventDefault(), (mouseDown.current = !0);
            },
            onMouseUp: function onMouseUp() {
              mouseDown.current &&
                (props.onMentionSelect(props.mention),
                (mouseDown.current = !1));
            },
            onMouseEnter: function onMouseEnter() {
              props.onMentionFocus(props.index);
            },
            role: 'option',
            id: id,
            'aria-selected': isFocused ? 'true' : void 0,
            theme: theme,
            mention: mention,
            isFocused: isFocused,
            searchValue: searchValue,
          });
        };
      Entry_Entry.propTypes = {
        entryComponent: prop_types_default.a.any.isRequired,
        searchValue: prop_types_default.a.string,
        onMentionSelect: prop_types_default.a.func,
      };
      var MentionSuggestions_Entry_Entry = Entry_Entry;
      try {
        (Entry_Entry.displayName = 'Entry'),
          (Entry_Entry.__docgenInfo = {
            description: '',
            displayName: 'Entry',
            props: {
              mention: {
                defaultValue: null,
                description: '',
                name: 'mention',
                required: !0,
                type: { name: 'MentionData' },
              },
              entryComponent: {
                defaultValue: null,
                description: '',
                name: 'entryComponent',
                required: !0,
                type: { name: 'ComponentType<EntryComponentProps>' },
              },
              onMentionSelect: {
                defaultValue: null,
                description: '',
                name: 'onMentionSelect',
                required: !0,
                type: { name: '(mention: MentionData) => void' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'MentionPluginTheme' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              index: {
                defaultValue: null,
                description: '',
                name: 'index',
                required: !0,
                type: { name: 'number' },
              },
              onMentionFocus: {
                defaultValue: null,
                description: '',
                name: 'onMentionFocus',
                required: !0,
                type: { name: '(index: number) => void' },
              },
              isFocused: {
                defaultValue: null,
                description: '',
                name: 'isFocused',
                required: !0,
                type: { name: 'boolean' },
              },
              searchValue: {
                defaultValue: null,
                description: '',
                name: 'searchValue',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/MentionSuggestions/Entry/Entry.tsx#Entry'
            ] = {
              docgenInfo: Entry_Entry.__docgenInfo,
              name: 'Entry',
              path:
                'packages/mention/src/MentionSuggestions/Entry/Entry.tsx#Entry',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var getSearchText = function (editorState, selection, trigger) {
        var anchorKey = selection.getAnchorKey(),
          anchorOffset = selection.getAnchorOffset();
        return (function getSearchTextAt(blockText, position, trigger) {
          var str = blockText.substr(0, position),
            begin = 0 === trigger.length ? 0 : str.lastIndexOf(trigger),
            matchingString =
              0 === trigger.length ? str : str.slice(begin + trigger.length);
          return {
            begin: begin,
            end: str.length,
            matchingString: matchingString,
          };
        })(
          editorState.getCurrentContent().getBlockForKey(anchorKey).getText(),
          anchorOffset,
          trigger
        );
      };
      function getTypeByTrigger(trigger) {
        return '@' === trigger ? 'mention' : trigger + 'mention';
      }
      var utils_decodeOffsetKey = function decodeOffsetKey(offsetKey) {
        var _offsetKey$split = offsetKey.split('-'),
          blockKey = _offsetKey$split[0],
          decoratorKey = _offsetKey$split[1],
          leafKey = _offsetKey$split[2];
        return {
          blockKey: blockKey,
          decoratorKey: parseInt(decoratorKey, 10),
          leafKey: parseInt(leafKey, 10),
        };
      };
      function Avatar(_ref) {
        var mention = _ref.mention,
          _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme;
        return mention.avatar
          ? react_default.a.createElement('img', {
              src: mention.avatar,
              className: theme.mentionSuggestionsEntryAvatar,
              role: 'presentation',
            })
          : null;
      }
      try {
        (Avatar.displayName = 'Avatar'),
          (Avatar.__docgenInfo = {
            description: '',
            displayName: 'Avatar',
            props: {
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'MentionPluginTheme' },
              },
              mention: {
                defaultValue: null,
                description: '',
                name: 'mention',
                required: !0,
                type: { name: 'MentionData' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/MentionSuggestions/Entry/Avatar/Avatar.tsx#Avatar'
            ] = {
              docgenInfo: Avatar.__docgenInfo,
              name: 'Avatar',
              path:
                'packages/mention/src/MentionSuggestions/Entry/Avatar/Avatar.tsx#Avatar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function DefaultEntryComponent(props) {
        var mention = props.mention,
          theme = props.theme,
          parentProps =
            (props.isFocused,
            props.searchValue,
            (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(props, ['mention', 'theme', 'isFocused', 'searchValue']));
        return react_default.a.createElement(
          'div',
          parentProps,
          react_default.a.createElement(Avatar, {
            mention: mention,
            theme: theme,
          }),
          react_default.a.createElement(
            'span',
            {
              className:
                null == theme ? void 0 : theme.mentionSuggestionsEntryText,
            },
            mention.name
          )
        );
      }
      try {
        (DefaultEntryComponent.displayName = 'DefaultEntryComponent'),
          (DefaultEntryComponent.__docgenInfo = {
            description: '',
            displayName: 'DefaultEntryComponent',
            props: {
              mention: {
                defaultValue: null,
                description: '',
                name: 'mention',
                required: !0,
                type: { name: 'MentionData' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'MentionPluginTheme' },
              },
              isFocused: {
                defaultValue: null,
                description: '',
                name: 'isFocused',
                required: !0,
                type: { name: 'boolean' },
              },
              searchValue: {
                defaultValue: null,
                description: '',
                name: 'searchValue',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/MentionSuggestions/Entry/DefaultEntryComponent.tsx#DefaultEntryComponent'
            ] = {
              docgenInfo: DefaultEntryComponent.__docgenInfo,
              name: 'DefaultEntryComponent',
              path:
                'packages/mention/src/MentionSuggestions/Entry/DefaultEntryComponent.tsx#DefaultEntryComponent',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var MentionSuggestions_MentionSuggestions = (function (_Component) {
        function MentionSuggestions(props) {
          var _this;
          return (
            ((_this = _Component.call(this, props) || this).state = {
              focusedOptionIndex: 0,
            }),
            (_this.key = Object(Draft.genKey)()),
            (_this.popover = void 0),
            (_this.activeOffsetKey = void 0),
            (_this.lastSearchValue = void 0),
            (_this.lastSelectionIsInsideWord = void 0),
            (_this.onEditorStateChange = function (editorState) {
              var searches = _this.props.store.getAllSearches();
              if (0 === searches.size) return editorState;
              var removeList = function removeList() {
                  return (
                    _this.props.store.resetEscapedSearch(),
                    _this.closeDropdown(),
                    editorState
                  );
                },
                selection = editorState.getSelection(),
                anchorKey = selection.getAnchorKey(),
                anchorOffset = selection.getAnchorOffset();
              if (!selection.isCollapsed() || !selection.getHasFocus())
                return removeList();
              var leaves = searches
                .map(function (offsetKey) {
                  return utils_decodeOffsetKey(offsetKey);
                })
                .filter(function (offsetDetail) {
                  return offsetDetail.blockKey === anchorKey;
                })
                .map(function (offsetDetail) {
                  return editorState
                    .getBlockTree(offsetDetail.blockKey)
                    .getIn([offsetDetail.decoratorKey]);
                });
              if (
                leaves.every(function (leave) {
                  return void 0 === leave;
                })
              )
                return removeList();
              var plainText = editorState.getCurrentContent().getPlainText(),
                selectionIsInsideWord = leaves
                  .filter(function (leave) {
                    return void 0 !== leave;
                  })
                  .map(function (_ref) {
                    var start = _ref.start,
                      end = _ref.end;
                    return (
                      (0 === start &&
                        anchorOffset === _this.props.mentionTrigger.length &&
                        plainText.charAt(anchorOffset) !==
                          _this.props.mentionTrigger &&
                        new RegExp(
                          String.raw({
                            raw:
                              '' +
                              escapeRegExp_default()(
                                _this.props.mentionTrigger
                              ),
                          }),
                          'g'
                        ).test(plainText) &&
                        anchorOffset <= end) ||
                      (anchorOffset >=
                        start + _this.props.mentionTrigger.length &&
                        anchorOffset <= end)
                    );
                  });
              if (
                selectionIsInsideWord.every(function (isInside) {
                  return !1 === isInside;
                })
              )
                return removeList();
              var lastActiveOffsetKey = _this.activeOffsetKey;
              return (
                (_this.activeOffsetKey = selectionIsInsideWord
                  .filter(function (value) {
                    return !0 === value;
                  })
                  .keySeq()
                  .first()),
                _this.onSearchChange(
                  editorState,
                  selection,
                  _this.activeOffsetKey,
                  lastActiveOffsetKey
                ),
                _this.props.store.isEscaped(_this.activeOffsetKey) ||
                  _this.props.store.resetEscapedSearch(),
                _this.props.open ||
                  _this.props.store.isEscaped(_this.activeOffsetKey) ||
                  _this.openDropdown(),
                (void 0 !== _this.lastSelectionIsInsideWord &&
                  selectionIsInsideWord.equals(
                    _this.lastSelectionIsInsideWord
                  )) ||
                  _this.setState({ focusedOptionIndex: 0 }),
                (_this.lastSelectionIsInsideWord = selectionIsInsideWord),
                editorState
              );
            }),
            (_this.onSearchChange = function (
              editorState,
              selection,
              activeOffsetKey,
              lastActiveOffsetKey
            ) {
              var searchValue = getSearchText(
                editorState,
                selection,
                _this.props.mentionTrigger
              ).matchingString;
              (_this.lastSearchValue === searchValue &&
                activeOffsetKey === lastActiveOffsetKey) ||
                ((_this.lastSearchValue = searchValue),
                _this.props.onSearchChange({ value: searchValue }));
            }),
            (_this.onDownArrow = function (keyboardEvent) {
              keyboardEvent.preventDefault();
              var newIndex = _this.state.focusedOptionIndex + 1;
              _this.onMentionFocus(
                newIndex >= _this.props.suggestions.length ? 0 : newIndex
              );
            }),
            (_this.onTab = function (keyboardEvent) {
              keyboardEvent.preventDefault(), _this.commitSelection();
            }),
            (_this.onUpArrow = function (keyboardEvent) {
              if (
                (keyboardEvent.preventDefault(),
                _this.props.suggestions.length > 0)
              ) {
                var newIndex = _this.state.focusedOptionIndex - 1;
                _this.onMentionFocus(
                  newIndex < 0 ? _this.props.suggestions.length - 1 : newIndex
                );
              }
            }),
            (_this.onEscape = function (keyboardEvent) {
              keyboardEvent.preventDefault();
              var activeOffsetKey = _this.lastSelectionIsInsideWord
                .filter(function (value) {
                  return !0 === value;
                })
                .keySeq()
                .first();
              _this.props.store.escapeSearch(activeOffsetKey),
                _this.closeDropdown(),
                _this.props.store.setEditorState(
                  _this.props.store.getEditorState()
                );
            }),
            (_this.onMentionSelect = function (mention) {
              if (mention) {
                _this.props.onAddMention && _this.props.onAddMention(mention),
                  _this.closeDropdown();
                var newEditorState = (function addMention(
                  editorState,
                  mention,
                  mentionPrefix,
                  mentionTrigger,
                  entityMutability
                ) {
                  var entityKey = editorState
                      .getCurrentContent()
                      .createEntity(
                        getTypeByTrigger(mentionTrigger),
                        entityMutability,
                        { mention: mention }
                      )
                      .getLastCreatedEntityKey(),
                    currentSelectionState = editorState.getSelection(),
                    _getSearchText = getSearchText(
                      editorState,
                      currentSelectionState,
                      mentionTrigger
                    ),
                    begin = _getSearchText.begin,
                    end = _getSearchText.end,
                    mentionTextSelection = currentSelectionState.merge({
                      anchorOffset: begin,
                      focusOffset: end,
                    }),
                    mentionReplacedContent = Draft.Modifier.replaceText(
                      editorState.getCurrentContent(),
                      mentionTextSelection,
                      '' + mentionPrefix + mention.name,
                      void 0,
                      entityKey
                    ),
                    blockKey = mentionTextSelection.getAnchorKey();
                  editorState
                    .getCurrentContent()
                    .getBlockForKey(blockKey)
                    .getLength() === end &&
                    (mentionReplacedContent = Draft.Modifier.insertText(
                      mentionReplacedContent,
                      mentionReplacedContent.getSelectionAfter(),
                      ' '
                    ));
                  var newEditorState = Draft.EditorState.push(
                    editorState,
                    mentionReplacedContent,
                    'insert-fragment'
                  );
                  return Draft.EditorState.forceSelection(
                    newEditorState,
                    mentionReplacedContent.getSelectionAfter()
                  );
                })(
                  _this.props.store.getEditorState(),
                  mention,
                  _this.props.mentionPrefix,
                  _this.props.mentionTrigger,
                  _this.props.entityMutability
                );
                _this.props.store.setEditorState(newEditorState);
              }
            }),
            (_this.onMentionFocus = function (index) {
              var descendant = 'mention-option-' + _this.key + '-' + index;
              (_this.props.ariaProps.ariaActiveDescendantID = descendant),
                _this.setState({ focusedOptionIndex: index }),
                _this.props.store.setEditorState(
                  _this.props.store.getEditorState()
                );
            }),
            (_this.commitSelection = function () {
              return _this.props.store.getIsOpened()
                ? (_this.onMentionSelect(
                    _this.props.suggestions[_this.state.focusedOptionIndex]
                  ),
                  'handled')
                : 'not-handled';
            }),
            (_this.openDropdown = function () {
              (_this.props.callbacks.handleReturn = _this.commitSelection),
                (_this.props.callbacks.keyBindingFn = function (keyboardEvent) {
                  40 === keyboardEvent.keyCode &&
                    _this.onDownArrow(keyboardEvent),
                    38 === keyboardEvent.keyCode &&
                      _this.onUpArrow(keyboardEvent),
                    27 === keyboardEvent.keyCode &&
                      _this.onEscape(keyboardEvent),
                    9 === keyboardEvent.keyCode && _this.onTab(keyboardEvent);
                });
              var descendant =
                'mention-option-' +
                _this.key +
                '-' +
                _this.state.focusedOptionIndex;
              (_this.props.ariaProps.ariaActiveDescendantID = descendant),
                (_this.props.ariaProps.ariaOwneeID =
                  'mentions-list-' + _this.key),
                (_this.props.ariaProps.ariaHasPopup = 'true'),
                (_this.props.ariaProps.ariaExpanded = !0),
                _this.props.onOpenChange(!0);
            }),
            (_this.closeDropdown = function () {
              (_this.props.callbacks.handleReturn = void 0),
                (_this.props.callbacks.keyBindingFn = void 0),
                (_this.props.ariaProps.ariaHasPopup = 'false'),
                (_this.props.ariaProps.ariaExpanded = !1),
                (_this.props.ariaProps.ariaActiveDescendantID = void 0),
                (_this.props.ariaProps.ariaOwneeID = void 0),
                _this.props.onOpenChange(!1);
            }),
            (_this.props.callbacks.onChange = _this.onEditorStateChange),
            _this
          );
        }
        !(function _inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            _setPrototypeOf(subClass, superClass);
        })(MentionSuggestions, _Component);
        var _proto = MentionSuggestions.prototype;
        return (
          (_proto.componentDidUpdate = function componentDidUpdate() {
            if (this.popover) {
              var size = this.props.suggestions.length;
              if (
                (size > 0 &&
                  this.state.focusedOptionIndex >= size &&
                  this.setState({ focusedOptionIndex: size - 1 }),
                !this.props.store.getAllSearches().has(this.activeOffsetKey))
              )
                return;
              for (
                var decoratorRect = this.props.store.getPortalClientRect(
                    this.activeOffsetKey
                  ),
                  newStyles = this.props.positionSuggestions({
                    decoratorRect: decoratorRect,
                    props: this.props,
                    popover: this.popover,
                  }),
                  _i = 0,
                  _Object$entries = Object.entries(newStyles);
                _i < _Object$entries.length;
                _i++
              ) {
                var _Object$entries$_i = _Object$entries[_i],
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];
                this.popover.style[key] = value;
              }
            }
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            this.props.callbacks.onChange = void 0;
          }),
          (_proto.render = function render() {
            var _this2 = this;
            if (!this.props.open) return null;
            var _this$props = this.props,
              entryComponent = _this$props.entryComponent,
              _this$props$popoverCo = _this$props.popoverComponent,
              popoverComponent =
                void 0 === _this$props$popoverCo
                  ? react_default.a.createElement('div', null)
                  : _this$props$popoverCo,
              _this$props$theme =
                (_this$props.onOpenChange,
                _this$props.onAddMention,
                _this$props.onSearchChange,
                _this$props.suggestions,
                _this$props.ariaProps,
                _this$props.callbacks,
                _this$props.theme),
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              elementProps =
                (_this$props.store,
                _this$props.entityMutability,
                _this$props.positionSuggestions,
                _this$props.mentionTrigger,
                _this$props.mentionPrefix,
                (function MentionSuggestions_objectWithoutPropertiesLoose(
                  source,
                  excluded
                ) {
                  if (null == source) return {};
                  var key,
                    i,
                    target = {},
                    sourceKeys = Object.keys(source);
                  for (i = 0; i < sourceKeys.length; i++)
                    (key = sourceKeys[i]),
                      excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                  return target;
                })(_this$props, [
                  'entryComponent',
                  'popoverComponent',
                  'onOpenChange',
                  'onAddMention',
                  'onSearchChange',
                  'suggestions',
                  'ariaProps',
                  'callbacks',
                  'theme',
                  'store',
                  'entityMutability',
                  'positionSuggestions',
                  'mentionTrigger',
                  'mentionPrefix',
                ]));
            return react_default.a.cloneElement(
              popoverComponent,
              _extends({}, elementProps, {
                className: theme.mentionSuggestions,
                role: 'listbox',
                id: 'mentions-list-' + this.key,
                ref: function ref(element) {
                  _this2.popover = element;
                },
              }),
              this.props.suggestions.map(function (mention, index) {
                return react_default.a.createElement(
                  MentionSuggestions_Entry_Entry,
                  {
                    key: null != mention.id ? mention.id : mention.name,
                    onMentionSelect: _this2.onMentionSelect,
                    onMentionFocus: _this2.onMentionFocus,
                    isFocused: _this2.state.focusedOptionIndex === index,
                    mention: mention,
                    index: index,
                    id: 'mention-option-' + _this2.key + '-' + index,
                    theme: theme,
                    searchValue: _this2.lastSearchValue,
                    entryComponent: entryComponent || DefaultEntryComponent,
                  }
                );
              })
            );
          }),
          MentionSuggestions
        );
      })(react.Component);
      MentionSuggestions_MentionSuggestions.propTypes = {
        open: prop_types_default.a.bool.isRequired,
        onOpenChange: prop_types_default.a.func.isRequired,
        entityMutability: prop_types_default.a.oneOf([
          'SEGMENTED',
          'IMMUTABLE',
          'MUTABLE',
        ]),
        entryComponent: prop_types_default.a.func,
        onAddMention: prop_types_default.a.func,
        suggestions: prop_types_default.a.array.isRequired,
      };
      var src_MentionSuggestions_MentionSuggestions = MentionSuggestions_MentionSuggestions;
      try {
        (MentionSuggestions_MentionSuggestions.displayName =
          'MentionSuggestions'),
          (MentionSuggestions_MentionSuggestions.__docgenInfo = {
            description: '',
            displayName: 'MentionSuggestions',
            props: {
              callbacks: {
                defaultValue: null,
                description: '',
                name: 'callbacks',
                required: !0,
                type: { name: 'MentionSuggestionCallbacks' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'MentionPluginStore' },
              },
              positionSuggestions: {
                defaultValue: null,
                description: '',
                name: 'positionSuggestions',
                required: !0,
                type: {
                  name:
                    '({ decoratorRect, popover, props, }: PositionSuggestionsParams) => CSSProperties',
                },
              },
              mentionTrigger: {
                defaultValue: null,
                description: '',
                name: 'mentionTrigger',
                required: !0,
                type: { name: 'string' },
              },
              ariaProps: {
                defaultValue: null,
                description: '',
                name: 'ariaProps',
                required: !0,
                type: { name: 'AriaProps' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'MentionPluginTheme' },
              },
              mentionPrefix: {
                defaultValue: null,
                description: '',
                name: 'mentionPrefix',
                required: !0,
                type: { name: 'string' },
              },
              entityMutability: {
                defaultValue: null,
                description: '',
                name: 'entityMutability',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"SEGMENTED"' },
                    { value: '"IMMUTABLE"' },
                    { value: '"MUTABLE"' },
                  ],
                },
              },
              suggestions: {
                defaultValue: null,
                description: '',
                name: 'suggestions',
                required: !0,
                type: { name: 'MentionData[]' },
              },
              open: {
                defaultValue: null,
                description: '',
                name: 'open',
                required: !0,
                type: { name: 'boolean' },
              },
              onOpenChange: {
                defaultValue: null,
                description: '',
                name: 'onOpenChange',
                required: !0,
                type: { name: '(open: boolean) => void' },
              },
              onSearchChange: {
                defaultValue: null,
                description: '',
                name: 'onSearchChange',
                required: !0,
                type: { name: '(event: { value: string; }) => void' },
              },
              onAddMention: {
                defaultValue: null,
                description: '',
                name: 'onAddMention',
                required: !1,
                type: { name: '((Mention: MentionData) => void)' },
              },
              popoverComponent: {
                defaultValue: null,
                description: '',
                name: 'popoverComponent',
                required: !1,
                type: {
                  name:
                    'ReactElement<PopoverComponentProps & RefAttributes<HTMLElement>, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<...>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              entryComponent: {
                defaultValue: null,
                description: '',
                name: 'entryComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<EntryComponentProps, any> | FunctionComponent<EntryComponentProps>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/MentionSuggestions/MentionSuggestions.tsx#MentionSuggestions'
            ] = {
              docgenInfo: MentionSuggestions_MentionSuggestions.__docgenInfo,
              name: 'MentionSuggestions',
              path:
                'packages/mention/src/MentionSuggestions/MentionSuggestions.tsx#MentionSuggestions',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var useIsomorphicLayoutEffect =
        'undefined' != typeof window ? react.useLayoutEffect : react.useEffect;
      function MentionSuggestionsPortal(props) {
        var searchPortal = Object(react.useRef)(),
          updatePortalClientRect = function updatePortalClientRect(
            currentProps
          ) {
            currentProps.store.updatePortalClientRect(
              currentProps.offsetKey,
              function () {
                return searchPortal.current.getBoundingClientRect();
              }
            );
          };
        return (
          useIsomorphicLayoutEffect(function () {
            return (
              props.store.register(props.offsetKey),
              props.store.setIsOpened(!0),
              updatePortalClientRect(props),
              props.store.setEditorState(props.store.getEditorState()),
              function () {
                props.store.unregister(props.offsetKey),
                  props.store.setIsOpened(!1);
              }
            );
          }, []),
          Object(react.useEffect)(function () {
            updatePortalClientRect(props);
          }),
          react_default.a.createElement(
            'span',
            {
              ref: function searchPortalRef(element) {
                searchPortal.current = element;
              },
            },
            props.children
          )
        );
      }
      try {
        (MentionSuggestionsPortal.displayName = 'MentionSuggestionsPortal'),
          (MentionSuggestionsPortal.__docgenInfo = {
            description: '',
            displayName: 'MentionSuggestionsPortal',
            props: {
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !0,
                type: { name: 'string' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'MentionPluginStore' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !0,
                type: { name: '() => EditorState' },
              },
              setEditorState: {
                defaultValue: null,
                description: '',
                name: 'setEditorState',
                required: !0,
                type: { name: '(state: EditorState) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/MentionSuggestionsPortal.tsx#MentionSuggestionsPortal'
            ] = {
              docgenInfo: MentionSuggestionsPortal.__docgenInfo,
              name: 'MentionSuggestionsPortal',
              path:
                'packages/mention/src/MentionSuggestionsPortal.tsx#MentionSuggestionsPortal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function positionSuggestions_positionSuggestions(_ref) {
        var relativeRect,
          decoratorRect = _ref.decoratorRect,
          popover = _ref.popover,
          props = _ref.props,
          relativeParent = (function getRelativeParent(element) {
            return element
              ? 'static' !==
                window.getComputedStyle(element).getPropertyValue('position')
                ? element
                : getRelativeParent(element.parentElement)
              : null;
          })(popover.parentElement);
        if (relativeParent) {
          var relativeParentRect = relativeParent.getBoundingClientRect();
          relativeRect = {
            scrollLeft: relativeParent.scrollLeft,
            scrollTop: relativeParent.scrollTop,
            left: decoratorRect.left - relativeParentRect.left,
            top: decoratorRect.bottom - relativeParentRect.top,
          };
        } else
          relativeRect = {
            scrollTop: window.pageYOffset || document.documentElement.scrollTop,
            scrollLeft:
              window.pageXOffset || document.documentElement.scrollLeft,
            top: decoratorRect.bottom,
            left: decoratorRect.left,
          };
        var transform,
          transition,
          left = relativeRect.left + relativeRect.scrollLeft,
          top = relativeRect.top + relativeRect.scrollTop;
        return (
          props.open &&
            (props.suggestions.length > 0
              ? ((transform = 'scale(1)'),
                (transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
              : ((transform = 'scale(0)'),
                (transition = 'all 0.35s cubic-bezier(.3,1,.2,1)'))),
          {
            left: left + 'px',
            top: top + 'px',
            transform: transform,
            transformOrigin: '1em 0%',
            transition: transition,
          }
        );
      }
      var defaultTheme = {
        mention: 'm6zwb4v',
        mentionSuggestions: 'mnw6qvm',
        mentionSuggestionsEntry: 'm1ymsnxd',
        mentionSuggestionsEntryFocused: 'm126ak5t',
        mentionSuggestionsEntryText: 'mtiwdxc',
        mentionSuggestionsEntryAvatar: 'myz2dw1',
      };
      __webpack_require__(1004);
      var mentionStrategy = function findMentionEntities(trigger) {
          return function (contentBlock, callback, contentState) {
            contentBlock.findEntityRanges(function (character) {
              var entityKey = character.getEntity();
              return (
                null !== entityKey &&
                contentState.getEntity(entityKey).getType() ===
                  getTypeByTrigger(trigger)
              );
            }, callback);
          };
        },
        utils_defaultSuggestionsFilter = function defaultSuggestionsFilter(
          searchValue,
          suggestions
        ) {
          var value = searchValue.toLowerCase(),
            filteredSuggestions = suggestions.filter(function (suggestion) {
              return (
                !value || suggestion.name.toLowerCase().indexOf(value) > -1
              );
            }),
            length =
              filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
          return filteredSuggestions.slice(0, length);
        };
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var escapedSearch,
          trigger,
          supportWhiteSpace,
          regExp,
          escapedTrigger,
          MENTION_REGEX,
          callbacks = {
            keyBindingFn: void 0,
            handleKeyCommand: void 0,
            handleReturn: void 0,
            onChange: void 0,
          },
          ariaProps = {
            ariaHasPopup: 'false',
            ariaExpanded: !1,
            ariaOwneeID: void 0,
            ariaActiveDescendantID: void 0,
          },
          searches = Object(immutable.Map)(),
          clientRectFunctions = Object(immutable.Map)(),
          isOpened = !1,
          store = {
            getEditorState: void 0,
            setEditorState: void 0,
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
              escapedSearch = void 0;
            },
            register: function register(offsetKey) {
              searches = searches.set(offsetKey, offsetKey);
            },
            updatePortalClientRect: function updatePortalClientRect(
              offsetKey,
              func
            ) {
              clientRectFunctions = clientRectFunctions.set(offsetKey, func);
            },
            unregister: function unregister(offsetKey) {
              (searches = searches.delete(offsetKey)),
                (clientRectFunctions = clientRectFunctions.delete(offsetKey));
            },
            getIsOpened: function getIsOpened() {
              return isOpened;
            },
            setIsOpened: function setIsOpened(nextIsOpened) {
              isOpened = nextIsOpened;
            },
          },
          _config = config,
          _config$mentionPrefix = _config.mentionPrefix,
          mentionPrefix =
            void 0 === _config$mentionPrefix ? '' : _config$mentionPrefix,
          _config$theme = _config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme,
          _config$positionSugge = _config.positionSuggestions,
          positionSuggestions =
            void 0 === _config$positionSugge
              ? positionSuggestions_positionSuggestions
              : _config$positionSugge,
          mentionComponent = _config.mentionComponent,
          _config$mentionSugges = _config.mentionSuggestionsComponent,
          MentionSuggestionsComponent =
            void 0 === _config$mentionSugges
              ? src_MentionSuggestions_MentionSuggestions
              : _config$mentionSugges,
          _config$entityMutabil = _config.entityMutability,
          entityMutability =
            void 0 === _config$entityMutabil
              ? 'SEGMENTED'
              : _config$entityMutabil,
          _config$mentionTrigge = _config.mentionTrigger,
          mentionTrigger =
            void 0 === _config$mentionTrigge ? '@' : _config$mentionTrigge,
          _config$mentionRegExp = _config.mentionRegExp,
          mentionRegExp =
            void 0 === _config$mentionRegExp
              ? '[\\w-À-ÖØ-öø-ÿĀ-ňŊ-ſА-я぀-ゟ゠-ヿ㄰-㆏가-힣一-黿؀-ۿÀ-ỹ]'
              : _config$mentionRegExp,
          _config$supportWhites = _config.supportWhitespace,
          supportWhitespace =
            void 0 !== _config$supportWhites && _config$supportWhites,
          mentionSearchProps = {
            ariaProps: ariaProps,
            callbacks: callbacks,
            theme: theme,
            store: store,
            entityMutability: entityMutability,
            positionSuggestions: positionSuggestions,
            mentionTrigger: mentionTrigger,
            mentionPrefix: mentionPrefix,
          };
        return {
          MentionSuggestions: function DecoratedMentionSuggestionsComponent(
            props
          ) {
            return react_default.a.createElement(
              MentionSuggestionsComponent,
              src_extends({}, props, mentionSearchProps)
            );
          },
          decorators: [
            {
              strategy: mentionStrategy(mentionTrigger),
              component: function DecoratedMention(props) {
                return react_default.a.createElement(
                  Mention,
                  src_extends({}, props, {
                    theme: theme,
                    mentionComponent: mentionComponent,
                  })
                );
              },
            },
            {
              strategy:
                ((trigger = mentionTrigger),
                (supportWhiteSpace = supportWhitespace),
                (regExp = mentionRegExp),
                (escapedTrigger = escapeRegExp_default()(trigger)),
                (MENTION_REGEX = supportWhiteSpace
                  ? new RegExp(
                      '(?<!' +
                        regExp +
                        ')' +
                        escapedTrigger +
                        '(' +
                        regExp +
                        '|\\s)*',
                      'g'
                    )
                  : new RegExp('(\\s|^)' + escapedTrigger + regExp + '*', 'g')),
                function (contentBlock, callback) {
                  !(function findWithRegex(regex, contentBlock, callback) {
                    var contentBlockText = contentBlock.getText();
                    contentBlock.findEntityRanges(
                      function (character) {
                        return !character.getEntity();
                      },
                      function (nonEntityStart, nonEntityEnd) {
                        for (
                          var matchArr,
                            start,
                            text = contentBlockText.slice(
                              nonEntityStart,
                              nonEntityEnd
                            ),
                            prevLastIndex = regex.lastIndex;
                          null !== (matchArr = regex.exec(text)) &&
                          regex.lastIndex !== prevLastIndex;

                        )
                          (prevLastIndex = regex.lastIndex),
                            (start = nonEntityStart + matchArr.index),
                            callback(start, start + matchArr[0].length);
                      }
                    );
                  })(MENTION_REGEX, contentBlock, callback);
                }),
              component: function DecoratedMentionSuggestionsPortal(props) {
                return react_default.a.createElement(
                  MentionSuggestionsPortal,
                  src_extends({}, props, { store: store })
                );
              },
            },
          ],
          getAccessibilityProps: function getAccessibilityProps() {
            return {
              role: 'combobox',
              ariaAutoComplete: 'list',
              ariaHasPopup: ariaProps.ariaHasPopup,
              ariaExpanded: ariaProps.ariaExpanded,
              ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
              ariaOwneeID: ariaProps.ariaOwneeID,
            };
          },
          initialize: function initialize(_ref) {
            var getEditorState = _ref.getEditorState,
              setEditorState = _ref.setEditorState;
            (store.getEditorState = getEditorState),
              (store.setEditorState = setEditorState);
          },
          keyBindingFn: function keyBindingFn(keyboardEvent) {
            return (
              callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent)
            );
          },
          handleReturn: function handleReturn(keyboardEvent) {
            return (
              callbacks.handleReturn && callbacks.handleReturn(keyboardEvent)
            );
          },
          onChange: function onChange(editorState) {
            return callbacks.onChange
              ? callbacks.onChange(editorState)
              : editorState;
          },
        };
      };
      var src_defaultSuggestionsFilter = utils_defaultSuggestionsFilter;
      try {
        (MentionSuggestions.displayName = 'MentionSuggestions'),
          (MentionSuggestions.__docgenInfo = {
            description: '',
            displayName: 'MentionSuggestions',
            props: {
              callbacks: {
                defaultValue: null,
                description: '',
                name: 'callbacks',
                required: !0,
                type: { name: 'MentionSuggestionCallbacks' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'MentionPluginStore' },
              },
              positionSuggestions: {
                defaultValue: null,
                description: '',
                name: 'positionSuggestions',
                required: !0,
                type: {
                  name:
                    '({ decoratorRect, popover, props, }: PositionSuggestionsParams) => CSSProperties',
                },
              },
              mentionTrigger: {
                defaultValue: null,
                description: '',
                name: 'mentionTrigger',
                required: !0,
                type: { name: 'string' },
              },
              ariaProps: {
                defaultValue: null,
                description: '',
                name: 'ariaProps',
                required: !0,
                type: { name: 'AriaProps' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'MentionPluginTheme' },
              },
              mentionPrefix: {
                defaultValue: null,
                description: '',
                name: 'mentionPrefix',
                required: !0,
                type: { name: 'string' },
              },
              entityMutability: {
                defaultValue: null,
                description: '',
                name: 'entityMutability',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"SEGMENTED"' },
                    { value: '"IMMUTABLE"' },
                    { value: '"MUTABLE"' },
                  ],
                },
              },
              suggestions: {
                defaultValue: null,
                description: '',
                name: 'suggestions',
                required: !0,
                type: { name: 'MentionData[]' },
              },
              open: {
                defaultValue: null,
                description: '',
                name: 'open',
                required: !0,
                type: { name: 'boolean' },
              },
              onOpenChange: {
                defaultValue: null,
                description: '',
                name: 'onOpenChange',
                required: !0,
                type: { name: '(open: boolean) => void' },
              },
              onSearchChange: {
                defaultValue: null,
                description: '',
                name: 'onSearchChange',
                required: !0,
                type: { name: '(event: { value: string; }) => void' },
              },
              onAddMention: {
                defaultValue: null,
                description: '',
                name: 'onAddMention',
                required: !1,
                type: { name: '((Mention: MentionData) => void)' },
              },
              popoverComponent: {
                defaultValue: null,
                description: '',
                name: 'popoverComponent',
                required: !1,
                type: {
                  name:
                    'ReactElement<PopoverComponentProps & RefAttributes<HTMLElement>, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<...>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              entryComponent: {
                defaultValue: null,
                description: '',
                name: 'entryComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<EntryComponentProps, any> | FunctionComponent<EntryComponentProps>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/mention/src/index.tsx#MentionSuggestions'
            ] = {
              docgenInfo: MentionSuggestions.__docgenInfo,
              name: 'MentionSuggestions',
              path: 'packages/mention/src/index.tsx#MentionSuggestions',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              mentionPrefix: {
                defaultValue: null,
                description: '',
                name: 'mentionPrefix',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'MentionPluginTheme' },
              },
              positionSuggestions: {
                defaultValue: null,
                description: '',
                name: 'positionSuggestions',
                required: !1,
                type: {
                  name:
                    '(({ decoratorRect, popover, props, }: PositionSuggestionsParams) => CSSProperties)',
                },
              },
              mentionComponent: {
                defaultValue: null,
                description: '',
                name: 'mentionComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<SubMentionComponentProps, any> | FunctionComponent<SubMentionComponentProps>',
                },
              },
              mentionSuggestionsComponent: {
                defaultValue: null,
                description: '',
                name: 'mentionSuggestionsComponent',
                required: !1,
                type: {
                  name: 'ComponentClass<{}, any> | FunctionComponent<{}>',
                },
              },
              entityMutability: {
                defaultValue: null,
                description: '',
                name: 'entityMutability',
                required: !1,
                type: { name: '"SEGMENTED" | "IMMUTABLE" | "MUTABLE"' },
              },
              mentionTrigger: {
                defaultValue: null,
                description: '',
                name: 'mentionTrigger',
                required: !1,
                type: { name: 'string' },
              },
              mentionRegExp: {
                defaultValue: null,
                description: '',
                name: 'mentionRegExp',
                required: !1,
                type: { name: 'string' },
              },
              supportWhitespace: {
                defaultValue: null,
                description: '',
                name: 'supportWhitespace',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/mention/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/mention/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return createBlockStyleButton;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
      function createBlockStyleButton(_ref) {
        var blockType = _ref.blockType,
          children = _ref.children;
        return function BlockStyleButton(props) {
          var theme = props.theme,
            className = (function blockTypeIsActive() {
              if (!props.getEditorState) return !1;
              var editorState = props.getEditorState();
              return (
                editorState
                  .getCurrentContent()
                  .getBlockForKey(editorState.getSelection().getStartKey())
                  .getType() === blockType
              );
            })()
              ? Object(clsx__WEBPACK_IMPORTED_MODULE_2__.a)(
                  theme.button,
                  theme.active
                )
              : theme.button;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: theme.buttonWrapper,
              onMouseDown: function preventBubblingUp(event) {
                event.preventDefault();
              },
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              {
                className: className,
                onClick: function toggleStyle(event) {
                  event.preventDefault(),
                    props.setEditorState(
                      draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleBlockType(
                        props.getEditorState(),
                        blockType
                      )
                    );
                },
                type: 'button',
                children: children,
              }
            )
          );
        };
      }
      try {
        (createBlockStyleButton.displayName = 'createBlockStyleButton'),
          (createBlockStyleButton.__docgenInfo = {
            description: '',
            displayName: 'createBlockStyleButton',
            props: {
              blockType: {
                defaultValue: null,
                description: '',
                name: 'blockType',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/buttons/src/utils/createBlockStyleButton.tsx#createBlockStyleButton'
            ] = {
              docgenInfo: createBlockStyleButton.__docgenInfo,
              name: 'createBlockStyleButton',
              path:
                'packages/buttons/src/utils/createBlockStyleButton.tsx#createBlockStyleButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
      __webpack_exports__.a = {
        decodeOffsetKey: function decodeOffsetKey(offsetKey) {
          var _offsetKey$split = offsetKey.split('-'),
            blockKey = _offsetKey$split[0],
            decoratorKey = _offsetKey$split[1],
            leafKey = _offsetKey$split[2];
          return {
            blockKey: blockKey,
            decoratorKey: parseInt(decoratorKey, 10),
            leafKey: parseInt(leafKey, 10),
          };
        },
        createLinkAtSelection: function createLinkAtSelection(
          editorState,
          url
        ) {
          var entityKey = editorState
              .getCurrentContent()
              .createEntity('LINK', 'MUTABLE', { url: url })
              .getLastCreatedEntityKey(),
            withLink = draft_js__WEBPACK_IMPORTED_MODULE_0__.RichUtils.toggleLink(
              editorState,
              editorState.getSelection(),
              entityKey
            );
          return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.forceSelection(
            withLink,
            editorState.getSelection()
          );
        },
        removeLinkAtSelection: function removeLinkAtSelection(editorState) {
          var selection = editorState.getSelection();
          return draft_js__WEBPACK_IMPORTED_MODULE_0__.RichUtils.toggleLink(
            editorState,
            selection,
            null
          );
        },
        collapseToEnd: function collapseToEnd(editorState) {
          var selection = editorState.getSelection();
          return draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.forceSelection(
            editorState,
            selection.merge({
              anchorKey: selection.getEndKey(),
              focusKey: selection.getEndKey(),
              anchorOffset: selection.getEndOffset(),
              focusOffset: selection.getEndOffset(),
            })
          );
        },
        getCurrentEntityKey: function getCurrentEntityKey(editorState) {
          var selection = editorState.getSelection(),
            anchorKey = selection.getAnchorKey(),
            anchorBlock = editorState
              .getCurrentContent()
              .getBlockForKey(anchorKey),
            offset = selection.getAnchorOffset(),
            index = selection.getIsBackward() ? offset - 1 : offset;
          return anchorBlock.getEntityAt(index);
        },
        getCurrentEntity: function getCurrentEntity(editorState) {
          var contentState = editorState.getCurrentContent(),
            entityKey = this.getCurrentEntityKey(editorState);
          return entityKey ? contentState.getEntity(entityKey) : null;
        },
        hasEntity: function hasEntity(editorState, entityType) {
          var entity = this.getCurrentEntity(editorState);
          return Boolean(entity && entity.getType() === entityType);
        },
      };
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return createInlineStyleButton;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
      function createInlineStyleButton(_ref) {
        var style = _ref.style,
          children = _ref.children;
        return function InlineStyleButton(props) {
          var theme = props.theme,
            className = (function styleIsActive() {
              return (
                props.getEditorState &&
                props.getEditorState().getCurrentInlineStyle().has(style)
              );
            })()
              ? Object(clsx__WEBPACK_IMPORTED_MODULE_2__.a)(
                  theme.button,
                  theme.active
                )
              : theme.button;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: theme.buttonWrapper,
              onMouseDown: function preventBubblingUp(event) {
                event.preventDefault();
              },
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              {
                className: className,
                onClick: function toggleStyle(event) {
                  event.preventDefault(),
                    props.setEditorState(
                      draft_js__WEBPACK_IMPORTED_MODULE_1__.RichUtils.toggleInlineStyle(
                        props.getEditorState(),
                        style
                      )
                    );
                },
                type: 'button',
                children: children,
              }
            )
          );
        };
      }
      try {
        (createInlineStyleButton.displayName = 'createInlineStyleButton'),
          (createInlineStyleButton.__docgenInfo = {
            description: '',
            displayName: 'createInlineStyleButton',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/buttons/src/utils/createInlineStyleButton.tsx#createInlineStyleButton'
            ] = {
              docgenInfo: createInlineStyleButton.__docgenInfo,
              name: 'createInlineStyleButton',
              path:
                'packages/buttons/src/utils/createInlineStyleButton.tsx#createInlineStyleButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var Draft = __webpack_require__(1),
        immutable = __webpack_require__(3);
      function insertNewLine(editorState) {
        var withNewLine = (function insertBlockAfterSelection(
            contentState,
            selectionState,
            newBlock
          ) {
            var targetKey = selectionState.getStartKey(),
              array = [];
            return (
              contentState.getBlockMap().forEach(function (block, blockKey) {
                array.push(block),
                  blockKey === targetKey && array.push(newBlock);
              }),
              contentState.merge({
                blockMap: Draft.BlockMapBuilder.createFromArray(array),
                selectionBefore: selectionState,
                selectionAfter: selectionState.merge({
                  anchorKey: newBlock.getKey(),
                  anchorOffset: newBlock.getLength(),
                  focusKey: newBlock.getKey(),
                  focusOffset: newBlock.getLength(),
                  isBackward: !1,
                }),
              })
            );
          })(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            new Draft.ContentBlock({
              key: Object(Draft.genKey)(),
              type: 'unstyled',
              text: '',
              characterList: Object(immutable.List)(),
            })
          ),
          newContent = withNewLine.merge({
            selectionAfter: withNewLine.getSelectionAfter().set('hasFocus', !0),
          });
        return Draft.EditorState.push(
          editorState,
          newContent,
          'insert-fragment'
        );
      }
      var DraftOffsetKey = __webpack_require__(27),
        DraftOffsetKey_default = __webpack_require__.n(DraftOffsetKey),
        setSelection = function (getEditorState, setEditorState, mode, event) {
          var editorState = getEditorState(),
            selectionKey = editorState.getSelection().getAnchorKey(),
            newActiveBlock =
              'up' === mode
                ? editorState.getCurrentContent().getBlockBefore(selectionKey)
                : editorState.getCurrentContent().getBlockAfter(selectionKey);
          if (
            (!newActiveBlock || newActiveBlock.get('key') !== selectionKey) &&
            newActiveBlock
          ) {
            var offsetKey = DraftOffsetKey_default.a.encode(
                newActiveBlock.getKey(),
                0,
                0
              ),
              node = document.querySelectorAll(
                '[data-offset-key="' + offsetKey + '"]'
              )[0],
              selection = window.getSelection(),
              range = document.createRange();
            range.setStart(node, 0),
              range.setEnd(node, 0),
              selection.removeAllRanges(),
              selection.addRange(range);
            var offset = 'up' === mode ? newActiveBlock.getLength() : 0;
            event.preventDefault(),
              setEditorState(
                Draft.EditorState.forceSelection(
                  editorState,
                  new Draft.SelectionState({
                    anchorKey: newActiveBlock.getKey(),
                    anchorOffset: offset,
                    focusKey: newActiveBlock.getKey(),
                    focusOffset: offset,
                    isBackward: !1,
                  })
                )
              );
          }
        },
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        clsx_m = __webpack_require__(8);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var src_createDecorator = function (_ref) {
        var theme = _ref.theme,
          blockKeyStore = _ref.blockKeyStore;
        return function (WrappedComponent) {
          var BlockFocusDecorator = react_default.a.forwardRef(function (
            props,
            ref
          ) {
            Object(react.useEffect)(function () {
              return (
                blockKeyStore.add(props.block.getKey()),
                function () {
                  blockKeyStore.remove(props.block.getKey());
                }
              );
            }, []);
            var blockProps = props.blockProps,
              className = props.className,
              combinedClassName = blockProps.isFocused
                ? Object(clsx_m.a)(className, theme.focused)
                : Object(clsx_m.a)(className, theme.unfocused);
            return react_default.a.createElement(
              WrappedComponent,
              _extends({}, props, {
                ref: ref,
                onClick: function onClick(evt) {
                  evt.preventDefault(),
                    props.blockProps.isFocused ||
                      props.blockProps.setFocusToBlock();
                },
                className: combinedClassName,
              })
            );
          });
          return (
            (BlockFocusDecorator.displayName =
              'BlockFocus(' +
              (function getDisplayName(WrappedComponent) {
                var component =
                  WrappedComponent.WrappedComponent || WrappedComponent;
                return component.displayName || component.name || 'Component';
              })(WrappedComponent) +
              ')'),
            (BlockFocusDecorator.WrappedComponent =
              WrappedComponent.WrappedComponent || WrappedComponent),
            BlockFocusDecorator
          );
        };
      };
      try {
        (createDecorator.displayName = 'createDecorator'),
          (createDecorator.__docgenInfo = {
            description: '',
            displayName: 'createDecorator',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'FocusPluginTheme' },
              },
              blockKeyStore: {
                defaultValue: null,
                description: '',
                name: 'blockKeyStore',
                required: !0,
                type: { name: 'BlockKeyStore' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/focus/src/createDecorator.tsx#createDecorator'
            ] = {
              docgenInfo: createDecorator.__docgenInfo,
              name: 'createDecorator',
              path: 'packages/focus/src/createDecorator.tsx#createDecorator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var getBlockMapKeys = function (contentState, startKey, endKey) {
          return contentState
            .getBlockMap()
            .keySeq()
            .skipUntil(function (key) {
              return key === startKey;
            })
            .takeUntil(function (key) {
              return key === endKey;
            })
            .concat([endKey]);
        },
        blockInSelection = function (editorState, blockKey) {
          return (function (editorState) {
            var selectionState = editorState.getSelection(),
              contentState = editorState.getCurrentContent();
            return getBlockMapKeys(
              contentState,
              selectionState.getStartKey(),
              selectionState.getEndKey()
            );
          })(editorState).includes(blockKey);
        };
      var defaultTheme = { unfocused: 'uz5k6rs', focused: 'f1vn2c6d' };
      __webpack_require__(935);
      var focusableBlockIsSelected = function focusableBlockIsSelected(
          editorState,
          blockKeyStore
        ) {
          var selection = editorState.getSelection();
          if (selection.getAnchorKey() !== selection.getFocusKey()) return !1;
          var block = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getAnchorKey());
          return blockKeyStore.includes(block.getKey());
        },
        deleteCommands = [
          'backspace',
          'backspace-word',
          'backspace-to-start-of-line',
          'delete',
          'delete-word',
          'delete-to-end-of-block',
        ];
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var lastSelection,
          lastContentState,
          blockKeyStore = (function createBlockKeyStore() {
            var keys = Object(immutable.List)();
            return {
              add: function add(key) {
                return (keys = keys.push(key));
              },
              remove: function remove(key) {
                return (keys = keys.filter(function (item) {
                  return item !== key;
                }));
              },
              includes: function includes(key) {
                return keys.includes(key);
              },
              getAll: function getAll() {
                return keys;
              },
            };
          })(),
          theme = config.theme ? config.theme : defaultTheme;
        return {
          handleReturn: function handleReturn(event, editorState, _ref) {
            var setEditorState = _ref.setEditorState;
            return focusableBlockIsSelected(editorState, blockKeyStore)
              ? (setEditorState(insertNewLine(editorState)), 'handled')
              : 'not-handled';
          },
          handleKeyCommand: function handleKeyCommand(
            command,
            editorState,
            eventTimeStamp,
            _ref2
          ) {
            var setEditorState = _ref2.setEditorState;
            if (
              deleteCommands.includes(command) &&
              focusableBlockIsSelected(editorState, blockKeyStore)
            ) {
              var key = editorState.getSelection().getStartKey(),
                newEditorState = (function removeBlock(editorState, blockKey) {
                  var content = editorState.getCurrentContent(),
                    beforeKey = content.getKeyBefore(blockKey),
                    beforeBlock = content.getBlockForKey(beforeKey);
                  if (void 0 === beforeBlock) {
                    var _targetRange = new Draft.SelectionState({
                      anchorKey: blockKey,
                      anchorOffset: 0,
                      focusKey: blockKey,
                      focusOffset: 1,
                    });
                    (content = Draft.Modifier.removeRange(
                      content,
                      _targetRange,
                      'backward'
                    )),
                      (content = Draft.Modifier.setBlockType(
                        content,
                        _targetRange,
                        'unstyled'
                      ));
                    var _newState = Draft.EditorState.push(
                        editorState,
                        content,
                        'remove-range'
                      ),
                      _newSelection = new Draft.SelectionState({
                        anchorKey: blockKey,
                        anchorOffset: 0,
                        focusKey: blockKey,
                        focusOffset: 0,
                      });
                    return Draft.EditorState.forceSelection(
                      _newState,
                      _newSelection
                    );
                  }
                  var targetRange = new Draft.SelectionState({
                    anchorKey: beforeKey,
                    anchorOffset: beforeBlock.getLength(),
                    focusKey: blockKey,
                    focusOffset: 1,
                  });
                  content = Draft.Modifier.removeRange(
                    content,
                    targetRange,
                    'backward'
                  );
                  var newState = Draft.EditorState.push(
                      editorState,
                      content,
                      'remove-range'
                    ),
                    newSelection = new Draft.SelectionState({
                      anchorKey: beforeKey,
                      anchorOffset: beforeBlock.getLength(),
                      focusKey: beforeKey,
                      focusOffset: beforeBlock.getLength(),
                    });
                  return Draft.EditorState.forceSelection(
                    newState,
                    newSelection
                  );
                })(editorState, key);
              if (newEditorState !== editorState)
                return setEditorState(newEditorState), 'handled';
            }
            return 'not-handled';
          },
          onChange: function onChange(editorState) {
            var contentState = editorState.getCurrentContent();
            if (!contentState.equals(lastContentState))
              return (lastContentState = contentState), editorState;
            lastContentState = contentState;
            var selection = editorState.getSelection();
            if (lastSelection && selection.equals(lastSelection))
              return (lastSelection = editorState.getSelection()), editorState;
            var focusableBlockKeys = blockKeyStore.getAll();
            if (
              lastSelection &&
              getBlockMapKeys(
                contentState,
                lastSelection.getStartKey(),
                lastSelection.getEndKey()
              ).some(function (key) {
                return focusableBlockKeys.includes(key);
              })
            )
              return (
                (lastSelection = selection),
                Draft.EditorState.forceSelection(
                  editorState,
                  editorState.getSelection()
                )
              );
            return getBlockMapKeys(
              contentState,
              selection.getStartKey(),
              selection.getEndKey()
            ).some(function (key) {
              return focusableBlockKeys.includes(key);
            })
              ? ((lastSelection = selection),
                Draft.EditorState.forceSelection(
                  editorState,
                  editorState.getSelection()
                ))
              : editorState;
          },
          keyBindingFn: function keyBindingFn(evt, _ref3) {
            var getEditorState = _ref3.getEditorState,
              setEditorState = _ref3.setEditorState,
              editorState = getEditorState();
            if (
              focusableBlockIsSelected(editorState, blockKeyStore) &&
              (37 === evt.keyCode &&
                setSelection(getEditorState, setEditorState, 'up', evt),
              39 === evt.keyCode &&
                setSelection(getEditorState, setEditorState, 'down', evt),
              38 === evt.keyCode &&
                setSelection(getEditorState, setEditorState, 'up', evt),
              40 === evt.keyCode)
            )
              setSelection(getEditorState, setEditorState, 'down', evt);
            else if (!evt.shiftKey) {
              if (37 === evt.keyCode) {
                var selection = editorState.getSelection(),
                  selectionKey = selection.getAnchorKey(),
                  beforeBlock = editorState
                    .getCurrentContent()
                    .getBlockBefore(selectionKey);
                beforeBlock &&
                  0 === selection.getAnchorOffset() &&
                  blockKeyStore.includes(beforeBlock.getKey()) &&
                  setSelection(getEditorState, setEditorState, 'up', evt);
              }
              if (39 === evt.keyCode) {
                var _selection = editorState.getSelection(),
                  _selectionKey = _selection.getFocusKey(),
                  currentBlock = editorState
                    .getCurrentContent()
                    .getBlockForKey(_selectionKey),
                  afterBlock = editorState
                    .getCurrentContent()
                    .getBlockAfter(_selectionKey),
                  notAtomicAndLastPost =
                    'atomic' !== currentBlock.getType() &&
                    currentBlock.getLength() === _selection.getFocusOffset();
                afterBlock &&
                  notAtomicAndLastPost &&
                  blockKeyStore.includes(afterBlock.getKey()) &&
                  setSelection(getEditorState, setEditorState, 'down', evt);
              }
              if (38 === evt.keyCode) {
                var _selectionKey2 = editorState.getSelection().getAnchorKey(),
                  _beforeBlock = editorState
                    .getCurrentContent()
                    .getBlockBefore(_selectionKey2);
                _beforeBlock &&
                  blockKeyStore.includes(_beforeBlock.getKey()) &&
                  setSelection(getEditorState, setEditorState, 'up', evt);
              }
              if (40 === evt.keyCode) {
                var _selectionKey3 = editorState.getSelection().getAnchorKey(),
                  _afterBlock = editorState
                    .getCurrentContent()
                    .getBlockAfter(_selectionKey3);
                _afterBlock &&
                  blockKeyStore.includes(_afterBlock.getKey()) &&
                  setSelection(getEditorState, setEditorState, 'down', evt);
              }
            }
          },
          blockRendererFn: function blockRendererFn(contentBlock, _ref4) {
            var getEditorState = _ref4.getEditorState,
              setEditorState = _ref4.setEditorState;
            if ('atomic' === contentBlock.getType()) {
              var editorState = getEditorState();
              return {
                props: {
                  isFocused: blockInSelection(
                    editorState,
                    contentBlock.getKey()
                  ),
                  isCollapsedSelection: editorState
                    .getSelection()
                    .isCollapsed(),
                  setFocusToBlock: function setFocusToBlock() {
                    !(function (
                      getEditorState,
                      setEditorState,
                      newActiveBlock
                    ) {
                      var editorState = getEditorState(),
                        offsetKey = DraftOffsetKey_default.a.encode(
                          newActiveBlock.getKey(),
                          0,
                          0
                        ),
                        node = document.querySelectorAll(
                          '[data-offset-key="' + offsetKey + '"]'
                        )[0],
                        selection = window.getSelection(),
                        range = document.createRange();
                      range.setStart(node, 0),
                        range.setEnd(node, 0),
                        selection.removeAllRanges(),
                        selection.addRange(range),
                        setEditorState(
                          Draft.EditorState.forceSelection(
                            editorState,
                            new Draft.SelectionState({
                              anchorKey: newActiveBlock.getKey(),
                              anchorOffset: 0,
                              focusKey: newActiveBlock.getKey(),
                              focusOffset: 0,
                              isBackward: !1,
                            })
                          )
                        );
                    })(getEditorState, setEditorState, contentBlock);
                  },
                },
              };
            }
          },
          decorator: src_createDecorator({
            theme: theme,
            blockKeyStore: blockKeyStore,
          }),
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'FocusPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/focus/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/focus/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        createStore = __webpack_require__(408),
        Draft = __webpack_require__(1),
        ItalicButton = __webpack_require__(1082),
        BoldButton = __webpack_require__(1083),
        UnderlineButton = __webpack_require__(1084),
        CodeButton = __webpack_require__(1085);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Toolbar_Toolbar = (function (_React$Component) {
        function Toolbar() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _React$Component.call.apply(
                _React$Component,
                [this].concat(args)
              ) || this).state = {
              isVisible: !1,
              position: void 0,
              overrideContent: void 0,
            }),
            (_this.toolbar = null),
            (_this.onOverrideContent = function (overrideContent) {
              _this.setState({ overrideContent: overrideContent });
            }),
            (_this.onSelectionChanged = function () {
              setTimeout(function () {
                if (_this.toolbar) {
                  var editorRef = _this.props.store.getItem('getEditorRef')();
                  if (editorRef) {
                    for (
                      var editorRoot =
                        editorRef.refs && editorRef.refs.editor
                          ? editorRef.refs.editor
                          : editorRef.editor;
                      -1 === editorRoot.className.indexOf('DraftEditor-root');

                    )
                      editorRoot = editorRoot.parentNode;
                    var editorRootRect = editorRoot.getBoundingClientRect(),
                      parentWindow =
                        editorRoot.ownerDocument &&
                        editorRoot.ownerDocument.defaultView,
                      selectionRect = Object(Draft.getVisibleSelectionRect)(
                        parentWindow || window
                      );
                    if (selectionRect) {
                      var position = {
                        top:
                          editorRoot.offsetTop -
                          _this.toolbar.offsetHeight +
                          (selectionRect.top - editorRootRect.top) -
                          5,
                        left:
                          editorRoot.offsetLeft +
                          (selectionRect.left - editorRootRect.left) +
                          selectionRect.width / 2,
                      };
                      _this.setState({ position: position });
                    }
                  }
                }
              });
            }),
            _this
          );
        }
        !(function _inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            _setPrototypeOf(subClass, superClass);
        })(Toolbar, _React$Component);
        var _proto = Toolbar.prototype;
        return (
          (_proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
            this.props.store.subscribeToItem(
              'selection',
              this.onSelectionChanged
            );
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            this.props.store.unsubscribeFromItem(
              'selection',
              this.onSelectionChanged
            );
          }),
          (_proto.getStyle = function getStyle() {
            var store = this.props.store,
              _this$state = this.state,
              overrideContent = _this$state.overrideContent,
              position = _this$state.position,
              selection = store.getItem('getEditorState')().getSelection(),
              isVisible =
                (!selection.isCollapsed() && selection.getHasFocus()) ||
                overrideContent,
              style = _extends({}, position);
            return (
              isVisible
                ? ((style.visibility = 'visible'),
                  (style.transform = 'translate(-50%) scale(1)'),
                  (style.transition =
                    'transform 0.15s cubic-bezier(.3,1.2,.2,1)'))
                : ((style.transform = 'translate(-50%) scale(0)'),
                  (style.visibility = 'hidden')),
              style
            );
          }),
          (_proto.render = function render() {
            var _this2 = this,
              _this$props = this.props,
              theme = _this$props.theme,
              store = _this$props.store,
              OverrideContent = this.state.overrideContent,
              childrenProps = {
                theme: theme.buttonStyles,
                getEditorState: store.getItem('getEditorState'),
                setEditorState: store.getItem('setEditorState'),
                onOverrideContent: this.onOverrideContent,
              };
            return react_default.a.createElement(
              'div',
              {
                className: theme.toolbarStyles.toolbar,
                style: this.getStyle(),
                ref: function ref(element) {
                  _this2.toolbar = element;
                },
              },
              OverrideContent
                ? react_default.a.createElement(OverrideContent, childrenProps)
                : this.props.children(childrenProps)
            );
          }),
          Toolbar
        );
      })(react_default.a.Component);
      Toolbar_Toolbar.defaultProps = {
        children: function children(externalProps) {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(ItalicButton.a, externalProps),
            react_default.a.createElement(BoldButton.a, externalProps),
            react_default.a.createElement(UnderlineButton.a, externalProps),
            react_default.a.createElement(CodeButton.a, externalProps)
          );
        },
      };
      try {
        (Toolbar_Toolbar.displayName = 'Toolbar'),
          (Toolbar_Toolbar.__docgenInfo = {
            description: '',
            displayName: 'Toolbar',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'InlineToolbarPluginStore' },
              },
              isVisible: {
                defaultValue: null,
                description: '',
                name: 'isVisible',
                required: !1,
                type: { name: 'boolean' },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: { name: '{ top: number; left: number; }' },
              },
              overrideContent: {
                defaultValue: null,
                description: '',
                name: 'overrideContent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<ToolbarChildrenProps, any> | FunctionComponent<ToolbarChildrenProps>',
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'InlineToolbarPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/inline-toolbar/src/components/Toolbar/index.tsx#Toolbar'
            ] = {
              docgenInfo: Toolbar_Toolbar.__docgenInfo,
              name: 'Toolbar',
              path:
                'packages/inline-toolbar/src/components/Toolbar/index.tsx#Toolbar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = {
        buttonStyles: {
          buttonWrapper: 'bpsgbes',
          button: 'b181v2oy',
          active: 'a9immln',
        },
        toolbarStyles: { toolbar: 'tukdd6b' },
      };
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(984);
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var store = Object(createStore.a)({ isVisible: !1 }),
          _config$theme = config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme;
        return {
          initialize: function initialize(_ref) {
            var getEditorState = _ref.getEditorState,
              setEditorState = _ref.setEditorState,
              getEditorRef = _ref.getEditorRef;
            store.updateItem('getEditorState', getEditorState),
              store.updateItem('setEditorState', setEditorState),
              store.updateItem('getEditorRef', getEditorRef);
          },
          onChange: function onChange(editorState) {
            return (
              store.updateItem('selection', editorState.getSelection()),
              editorState
            );
          },
          InlineToolbar: function InlineToolbar(props) {
            return react_default.a.createElement(
              Toolbar_Toolbar,
              src_extends({}, props, { store: store, theme: theme })
            );
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'InlineToolbarPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/inline-toolbar/src/index.tsx#src'
            ] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/inline-toolbar/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        createStore = __webpack_require__(408),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        DraftOffsetKey = __webpack_require__(27),
        DraftOffsetKey_default = __webpack_require__.n(DraftOffsetKey),
        HeadlineOneButton = __webpack_require__(1075),
        HeadlineTwoButton = __webpack_require__(1076),
        BlockquoteButton = __webpack_require__(1077),
        CodeBlockButton = __webpack_require__(1078),
        UnorderedListButton = __webpack_require__(1079),
        OrderedListButton = __webpack_require__(1080);
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var BlockTypeSelect_BlockTypeSelect = (function (_Component) {
        function BlockTypeSelect() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).state = {
              style: { transform: 'translate(-50%) scale(0)' },
            }),
            (_this.onMouseEnter = function () {
              _this.setState({
                style: {
                  transform: 'translate(-50%) scale(1)',
                  transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                },
              });
            }),
            (_this.onMouseLeave = function () {
              _this.setState({
                style: { transform: 'translate(-50%) scale(0)' },
              });
            }),
            (_this.onMouseDown = function (clickEvent) {
              clickEvent.preventDefault(), clickEvent.stopPropagation();
            }),
            _this
          );
        }
        return (
          (function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(BlockTypeSelect, _Component),
          (BlockTypeSelect.prototype.render = function render() {
            var _theme$blockTypeSelec,
              _theme$blockTypeSelec2,
              _theme$blockTypeSelec3,
              _this$props = this.props,
              theme = _this$props.theme,
              getEditorState = _this$props.getEditorState,
              setEditorState = _this$props.setEditorState;
            return react_default.a.createElement(
              'div',
              {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onMouseDown: this.onMouseDown,
              },
              react_default.a.createElement(
                'div',
                {
                  className:
                    null ==
                    (_theme$blockTypeSelec = theme.blockTypeSelectStyles)
                      ? void 0
                      : _theme$blockTypeSelec.blockType,
                },
                react_default.a.createElement(
                  'svg',
                  {
                    height: '24',
                    viewBox: '0 0 24 24',
                    width: '24',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  react_default.a.createElement('path', {
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  react_default.a.createElement('path', {
                    d:
                      'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
                  })
                )
              ),
              react_default.a.createElement('div', {
                className:
                  null == (_theme$blockTypeSelec2 = theme.blockTypeSelectStyles)
                    ? void 0
                    : _theme$blockTypeSelec2.spacer,
              }),
              react_default.a.createElement(
                'div',
                {
                  className:
                    null ==
                    (_theme$blockTypeSelec3 = theme.blockTypeSelectStyles)
                      ? void 0
                      : _theme$blockTypeSelec3.popup,
                  style: this.state.style,
                },
                this.props.childNodes({
                  getEditorState: getEditorState,
                  setEditorState: setEditorState,
                  theme: theme.buttonStyles,
                })
              )
            );
          }),
          BlockTypeSelect
        );
      })(react.Component);
      BlockTypeSelect_BlockTypeSelect.propTypes = {
        childNodes: prop_types_default.a.func,
      };
      try {
        (BlockTypeSelect_BlockTypeSelect.displayName = 'BlockTypeSelect'),
          (BlockTypeSelect_BlockTypeSelect.__docgenInfo = {
            description: '',
            displayName: 'BlockTypeSelect',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'SideToolbarPluginTheme' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !0,
                type: { name: '() => EditorState' },
              },
              setEditorState: {
                defaultValue: null,
                description: '',
                name: 'setEditorState',
                required: !0,
                type: { name: '(state: EditorState) => void' },
              },
              childNodes: {
                defaultValue: null,
                description: '',
                name: 'childNodes',
                required: !0,
                type: { name: 'FC<BlockTypeSelectChildProps>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/side-toolbar/src/components/BlockTypeSelect/index.tsx#BlockTypeSelect'
            ] = {
              docgenInfo: BlockTypeSelect_BlockTypeSelect.__docgenInfo,
              name: 'BlockTypeSelect',
              path:
                'packages/side-toolbar/src/components/BlockTypeSelect/index.tsx#BlockTypeSelect',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Toolbar_setPrototypeOf(o, p) {
        return (Toolbar_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Toolbar_Toolbar = (function (_React$Component) {
        function Toolbar() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _React$Component.call.apply(
                _React$Component,
                [this].concat(args)
              ) || this).state = { position: { transform: 'scale(0)' } }),
            (_this.onEditorStateChange = function (editorState) {
              var selection = editorState.getSelection();
              if (selection.getHasFocus()) {
                var currentBlock = editorState
                    .getCurrentContent()
                    .getBlockForKey(selection.getStartKey()),
                  offsetKey = DraftOffsetKey_default.a.encode(
                    currentBlock.getKey(),
                    0,
                    0
                  );
                setTimeout(function () {
                  var node = document.querySelectorAll(
                      '[data-offset-key="' + offsetKey + '"]'
                    )[0],
                    editorRef = _this.props.store.getItem('getEditorRef')();
                  if (editorRef) {
                    for (
                      var editorRoot =
                        editorRef.refs && editorRef.refs.editor
                          ? editorRef.refs.editor
                          : editorRef.editor;
                      -1 === editorRoot.className.indexOf('DraftEditor-root');

                    )
                      editorRoot = editorRoot.parentNode;
                    var position = {
                      top:
                        node.offsetTop + editorRoot.offsetTop > 700
                          ? node.offsetTop + editorRoot.offsetTop - 150
                          : node.offsetTop + editorRoot.offsetTop,
                      transform: 'scale(1)',
                      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                    };
                    'right' === _this.props.position
                      ? (position.left =
                          editorRoot.offsetLeft +
                          editorRoot.offsetWidth +
                          80 -
                          36)
                      : (position.left = editorRoot.offsetLeft - 80),
                      _this.setState({ position: position });
                  }
                }, 0);
              } else _this.setState({ position: { transform: 'scale(0)' } });
            }),
            _this
          );
        }
        !(function Toolbar_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            Toolbar_setPrototypeOf(subClass, superClass);
        })(Toolbar, _React$Component);
        var _proto = Toolbar.prototype;
        return (
          (_proto.componentDidMount = function componentDidMount() {
            this.props.store.subscribeToItem(
              'editorState',
              this.onEditorStateChange
            );
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            this.props.store.unsubscribeFromItem(
              'editorState',
              this.onEditorStateChange
            );
          }),
          (_proto.render = function render() {
            var _theme$toolbarStyles,
              _this$props = this.props,
              theme = _this$props.theme,
              store = _this$props.store;
            return react_default.a.createElement(
              'div',
              {
                className:
                  null == (_theme$toolbarStyles = theme.toolbarStyles)
                    ? void 0
                    : _theme$toolbarStyles.wrapper,
                style: this.state.position,
              },
              react_default.a.createElement(BlockTypeSelect_BlockTypeSelect, {
                getEditorState: store.getItem('getEditorState'),
                setEditorState: store.getItem('setEditorState'),
                theme: theme,
                childNodes: this.props.children,
              })
            );
          }),
          Toolbar
        );
      })(react_default.a.Component);
      (Toolbar_Toolbar.defaultProps = {
        children: function children(externalProps) {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(HeadlineOneButton.a, externalProps),
            react_default.a.createElement(HeadlineTwoButton.a, externalProps),
            react_default.a.createElement(BlockquoteButton.a, externalProps),
            react_default.a.createElement(CodeBlockButton.a, externalProps),
            react_default.a.createElement(UnorderedListButton.a, externalProps),
            react_default.a.createElement(OrderedListButton.a, externalProps)
          );
        },
      }),
        (Toolbar_Toolbar.propTypes = { children: prop_types_default.a.func });
      try {
        (Toolbar_Toolbar.displayName = 'Toolbar'),
          (Toolbar_Toolbar.__docgenInfo = {
            description: '',
            displayName: 'Toolbar',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'SideToolbarPluginStore' },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !0,
                type: {
                  name: 'enum',
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'SideToolbarPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/side-toolbar/src/components/Toolbar/index.tsx#Toolbar'
            ] = {
              docgenInfo: Toolbar_Toolbar.__docgenInfo,
              name: 'Toolbar',
              path:
                'packages/side-toolbar/src/components/Toolbar/index.tsx#Toolbar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = {
        buttonStyles: {
          buttonWrapper: 'b1x6qj4x',
          button: 'b1vm70k4',
          active: 'ah6tpgz',
        },
        blockTypeSelectStyles: {
          blockType: 'bloz0n9',
          spacer: 's98xzql',
          popup: 'p1sbsapy',
        },
        toolbarStyles: { wrapper: 'w1f9fdzj' },
      };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(947);
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var store = Object(createStore.a)({ isVisible: !1 }),
          _config = config,
          _config$position = _config.position,
          position = void 0 === _config$position ? 'left' : _config$position,
          _config$theme = _config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme;
        return {
          initialize: function initialize(_ref) {
            var setEditorState = _ref.setEditorState,
              getEditorState = _ref.getEditorState,
              getEditorRef = _ref.getEditorRef;
            store.updateItem('getEditorState', getEditorState),
              store.updateItem('setEditorState', setEditorState),
              store.updateItem('getEditorRef', getEditorRef);
          },
          onChange: function onChange(editorState) {
            return store.updateItem('editorState', editorState), editorState;
          },
          SideToolbar: function SideToolbar(props) {
            return react_default.a.createElement(
              Toolbar_Toolbar,
              _extends({}, props, {
                store: store,
                theme: theme,
                position: position,
              })
            );
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'SideToolbarPluginTheme' },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: { name: '"left" | "right"' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/side-toolbar/src/index.tsx#src'
            ] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/side-toolbar/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var addImage = function (editorState, url, extraData) {
          var entityKey = editorState
              .getCurrentContent()
              .createEntity(
                'IMAGE',
                'IMMUTABLE',
                _extends({}, extraData, { src: url })
              )
              .getLastCreatedEntityKey(),
            newEditorState = Draft.AtomicBlockUtils.insertAtomicBlock(
              editorState,
              entityKey,
              ' '
            );
          return Draft.EditorState.forceSelection(
            newEditorState,
            newEditorState.getCurrentContent().getSelectionAfter()
          );
        },
        clsx_m = __webpack_require__(8);
      function Image_extends() {
        return (Image_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]),
            excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }
      function Image_Image(props) {
        var block = props.block,
          className = props.className,
          _props$theme = props.theme,
          theme = void 0 === _props$theme ? {} : _props$theme,
          otherProps = _objectWithoutPropertiesLoose(props, [
            'block',
            'className',
            'theme',
          ]),
          contentState =
            (otherProps.blockProps,
            otherProps.customStyleMap,
            otherProps.customStyleFn,
            otherProps.decorator,
            otherProps.forceSelection,
            otherProps.offsetKey,
            otherProps.selection,
            otherProps.tree,
            otherProps.blockStyleFn,
            otherProps.preventScroll,
            otherProps.contentState),
          elementProps = _objectWithoutPropertiesLoose(otherProps, [
            'blockProps',
            'customStyleMap',
            'customStyleFn',
            'decorator',
            'forceSelection',
            'offsetKey',
            'selection',
            'tree',
            'blockStyleFn',
            'preventScroll',
            'contentState',
          ]),
          combinedClassName = Object(clsx_m.a)(theme.image, className),
          src = contentState.getEntity(block.getEntityAt(0)).getData().src;
        return react_default.a.createElement(
          'img',
          Image_extends({}, elementProps, {
            src: src,
            role: 'presentation',
            className: combinedClassName,
          })
        );
      }
      try {
        (Image_Image.displayName = 'Image'),
          (Image_Image.__docgenInfo = {
            description: '',
            displayName: 'Image',
            props: {
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !0,
                type: { name: 'ContentBlock' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'ImagePluginTheme' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !0,
                type: { name: 'ContentState' },
              },
              blockStyleFn: {
                defaultValue: null,
                description: '',
                name: 'blockStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              blockProps: {
                defaultValue: null,
                description: '',
                name: 'blockProps',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleMap: {
                defaultValue: null,
                description: '',
                name: 'customStyleMap',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleFn: {
                defaultValue: null,
                description: '',
                name: 'customStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !0,
                type: { name: 'unknown' },
              },
              forceSelection: {
                defaultValue: null,
                description: '',
                name: 'forceSelection',
                required: !0,
                type: { name: 'unknown' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !0,
                type: { name: 'unknown' },
              },
              selection: {
                defaultValue: null,
                description: '',
                name: 'selection',
                required: !0,
                type: { name: 'unknown' },
              },
              tree: {
                defaultValue: null,
                description: '',
                name: 'tree',
                required: !0,
                type: { name: 'unknown' },
              },
              preventScroll: {
                defaultValue: null,
                description: '',
                name: 'preventScroll',
                required: !0,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/image/src/Image.tsx#Image'] = {
              docgenInfo: Image_Image.__docgenInfo,
              name: 'Image',
              path: 'packages/image/src/Image.tsx#Image',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var defaultTheme = {},
        src_Image =
          ((__webpack_exports__.a = function (config) {
            void 0 === config && (config = {});
            var theme = config.theme ? config.theme : defaultTheme,
              Image = config.imageComponent || Image_Image;
            config.decorator && (Image = config.decorator(Image));
            var ThemedImage = function ThemedImage(props) {
              return react_default.a.createElement(
                Image,
                src_extends({}, props, { theme: theme })
              );
            };
            return {
              blockRendererFn: function blockRendererFn(block, _ref) {
                var getEditorState = _ref.getEditorState;
                if ('atomic' === block.getType()) {
                  var contentState = getEditorState().getCurrentContent(),
                    entity = block.getEntityAt(0);
                  if (!entity) return null;
                  var type = contentState.getEntity(entity).getType();
                  return 'IMAGE' === type || 'image' === type
                    ? { component: ThemedImage, editable: !1 }
                    : null;
                }
                return null;
              },
              addImage: addImage,
            };
          }),
          Image_Image);
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !1,
                type: {
                  name:
                    '((component: ComponentType<ImageProps>) => ComponentType<ImageProps>)',
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'ImagePluginTheme' },
              },
              imageComponent: {
                defaultValue: null,
                description: '',
                name: 'imageComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<ImageProps, any> | FunctionComponent<ImageProps>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/image/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/image/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (src_Image.displayName = 'Image'),
          (src_Image.__docgenInfo = {
            description: '',
            displayName: 'Image',
            props: {
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !0,
                type: { name: 'ContentBlock' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'ImagePluginTheme' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !0,
                type: { name: 'ContentState' },
              },
              blockStyleFn: {
                defaultValue: null,
                description: '',
                name: 'blockStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              blockProps: {
                defaultValue: null,
                description: '',
                name: 'blockProps',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleMap: {
                defaultValue: null,
                description: '',
                name: 'customStyleMap',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleFn: {
                defaultValue: null,
                description: '',
                name: 'customStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !0,
                type: { name: 'unknown' },
              },
              forceSelection: {
                defaultValue: null,
                description: '',
                name: 'forceSelection',
                required: !0,
                type: { name: 'unknown' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !0,
                type: { name: 'unknown' },
              },
              selection: {
                defaultValue: null,
                description: '',
                name: 'selection',
                required: !0,
                type: { name: 'unknown' },
              },
              tree: {
                defaultValue: null,
                description: '',
                name: 'tree',
                required: !0,
                type: { name: 'unknown' },
              },
              preventScroll: {
                defaultValue: null,
                description: '',
                name: 'preventScroll',
                required: !0,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/image/src/index.tsx#Image'] = {
              docgenInfo: src_Image.__docgenInfo,
              name: 'Image',
              path: 'packages/image/src/index.tsx#Image',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(833);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(930);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        immutable = __webpack_require__(3),
        keys = __webpack_require__(150),
        keys_default = __webpack_require__.n(keys),
        Draft = __webpack_require__(1);
      function Emoji(_ref) {
        var _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme,
          className = _ref.className,
          decoratedText = _ref.decoratedText,
          EmojiInlineText = _ref.emojiInlineText,
          children = _ref.children;
        return react_default.a.createElement(
          EmojiInlineText,
          { className: className, decoratedText: decoratedText, theme: theme },
          children
        );
      }
      try {
        (Emoji.displayName = 'Emoji'),
          (Emoji.__docgenInfo = {
            description: '',
            displayName: 'Emoji',
            props: {
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'EmojiPluginTheme' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !0,
                type: { name: 'string' },
              },
              decoratedText: {
                defaultValue: null,
                description: '',
                name: 'decoratedText',
                required: !0,
                type: { name: 'string' },
              },
              emojiInlineText: {
                defaultValue: null,
                description: '',
                name: 'emojiInlineText',
                required: !0,
                type: { name: 'ComponentType<EmojiInlineTextProps>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/Emoji/index.tsx#Emoji'
            ] = {
              docgenInfo: Emoji.__docgenInfo,
              name: 'Emoji',
              path: 'packages/emoji/src/components/Emoji/index.tsx#Emoji',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var utils_src = __webpack_require__(43);
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Entry_Entry = (function (_Component) {
        function Entry() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).mouseDown = !1),
            (_this.onMouseUp = function () {
              _this.mouseDown &&
                ((_this.mouseDown = !1),
                _this.props.onEmojiSelect(_this.props.emoji));
            }),
            (_this.onMouseDown = function (event) {
              event.preventDefault(), (_this.mouseDown = !0);
            }),
            (_this.onMouseEnter = function () {
              _this.props.onEmojiFocus(_this.props.index);
            }),
            _this
          );
        }
        !(function _inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            _setPrototypeOf(subClass, superClass);
        })(Entry, _Component);
        var _proto = Entry.prototype;
        return (
          (_proto.componentDidUpdate = function componentDidUpdate() {
            this.mouseDown = !1;
          }),
          (_proto.render = function render() {
            var _this$props = this.props,
              emoji = _this$props.emoji,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              isFocused = _this$props.isFocused,
              id = _this$props.id,
              EmojiImage = _this$props.emojiImage,
              className = isFocused
                ? theme.emojiSuggestionsEntryFocused
                : theme.emojiSuggestionsEntry;
            return react_default.a.createElement(
              'div',
              {
                className: className,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseEnter: this.onMouseEnter,
                role: 'option',
                id: id,
                'aria-selected': isFocused ? 'true' : void 0,
              },
              react_default.a.createElement(EmojiImage, {
                emoji: emoji,
                theme: theme,
              }),
              react_default.a.createElement(
                'span',
                { className: theme.emojiSuggestionsEntryText },
                this.props.emoji
              )
            );
          }),
          Entry
        );
      })(react.Component);
      try {
        (Entry_Entry.displayName = 'Entry'),
          (Entry_Entry.__docgenInfo = {
            description: '',
            displayName: 'Entry',
            props: {
              emoji: {
                defaultValue: null,
                description: '',
                name: 'emoji',
                required: !0,
                type: { name: 'string' },
              },
              onEmojiSelect: {
                defaultValue: null,
                description: '',
                name: 'onEmojiSelect',
                required: !0,
                type: { name: '(emoji: string) => void' },
              },
              index: {
                defaultValue: null,
                description: '',
                name: 'index',
                required: !0,
                type: { name: 'number' },
              },
              onEmojiFocus: {
                defaultValue: null,
                description: '',
                name: 'onEmojiFocus',
                required: !0,
                type: { name: '(index: number) => void' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              isFocused: {
                defaultValue: null,
                description: '',
                name: 'isFocused',
                required: !0,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSuggestions/Entry/index.tsx#Entry'
            ] = {
              docgenInfo: Entry_Entry.__docgenInfo,
              name: 'Entry',
              path:
                'packages/emoji/src/components/EmojiSuggestions/Entry/index.tsx#Entry',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var joypixels = __webpack_require__(16),
        joypixels_default = __webpack_require__.n(joypixels);
      function getSearchText(editorState, selection) {
        var anchorKey = selection.getAnchorKey(),
          anchorOffset = selection.getAnchorOffset() - 1;
        return (function getWordAt(string, position) {
          var str = String(string),
            pos = Number(position) >>> 0,
            left = str.slice(0, pos + 1).search(/\S+$/),
            right = str.slice(pos).search(/\s/);
          return right < 0
            ? { word: str.slice(left), begin: left, end: str.length }
            : {
                word: str.slice(left, right + pos),
                begin: left,
                end: right + pos,
              };
        })(
          editorState.getCurrentContent().getBlockForKey(anchorKey).getText(),
          anchorOffset
        );
      }
      var Mode_INSERT = 'INSERT',
        Mode_REPLACE = 'REPLACE';
      function addEmoji(editorState, emojiShortName, mode) {
        void 0 === mode && (mode = Mode_INSERT);
        var emojiAddedContent,
          emoji = Object(joypixels.shortnameToUnicode)(emojiShortName),
          contentState = editorState.getCurrentContent(),
          entityKey = contentState
            .createEntity('emoji', 'IMMUTABLE', { emojiUnicode: emoji })
            .getLastCreatedEntityKey(),
          currentSelectionState = editorState.getSelection(),
          emojiEndPos = 0,
          blockSize = 0;
        switch (mode) {
          case Mode_INSERT:
            var afterRemovalContentState = Draft.Modifier.removeRange(
                contentState,
                currentSelectionState,
                'backward'
              ),
              targetSelection = afterRemovalContentState.getSelectionAfter();
            (emojiAddedContent = Draft.Modifier.insertText(
              afterRemovalContentState,
              targetSelection,
              emoji,
              void 0,
              entityKey
            )),
              (emojiEndPos = targetSelection.getAnchorOffset());
            var blockKey = targetSelection.getAnchorKey();
            blockSize = contentState.getBlockForKey(blockKey).getLength();
            break;
          case Mode_REPLACE:
            var _getSearchText = getSearchText(
                editorState,
                currentSelectionState
              ),
              begin = _getSearchText.begin,
              end = _getSearchText.end,
              emojiTextSelection = currentSelectionState.merge({
                anchorOffset: begin,
                focusOffset: end,
              });
            (emojiAddedContent = Draft.Modifier.replaceText(
              contentState,
              emojiTextSelection,
              emoji,
              void 0,
              entityKey
            )),
              (emojiEndPos = end);
            var _blockKey = emojiTextSelection.getAnchorKey();
            blockSize = contentState.getBlockForKey(_blockKey).getLength();
            break;
          default:
            throw new Error('Unidentified value of "mode"');
        }
        emojiEndPos === blockSize &&
          (emojiAddedContent = Draft.Modifier.insertText(
            emojiAddedContent,
            emojiAddedContent.getSelectionAfter(),
            ' '
          ));
        var newEditorState = Draft.EditorState.push(
          editorState,
          emojiAddedContent,
          'insert-fragment'
        );
        return Draft.EditorState.forceSelection(
          newEditorState,
          emojiAddedContent.getSelectionAfter()
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function EmojiSuggestions_setPrototypeOf(o, p) {
        return (EmojiSuggestions_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var EmojiSuggestions_EmojiSuggestions = (function (_Component) {
        function EmojiSuggestions() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).state = { isActive: !1, focusedOptionIndex: 0 }),
            (_this.popover = void 0),
            (_this.key = void 0),
            (_this.filteredEmojis = void 0),
            (_this.activeOffsetKey = void 0),
            (_this.lastSelectionIsInsideWord = void 0),
            (_this.lastSearchValue = void 0),
            (_this.onEditorStateChange = function (editorState) {
              var searches = _this.props.store.getAllSearches();
              if (0 === searches.size) return editorState;
              var removeList = function removeList() {
                  return (
                    _this.props.store.resetEscapedSearch(),
                    _this.closeDropdown(),
                    editorState
                  );
                },
                selection = editorState.getSelection(),
                anchorKey = selection.getAnchorKey(),
                anchorOffset = selection.getAnchorOffset();
              if (!selection.isCollapsed() || !selection.getHasFocus())
                return removeList();
              var leaves = searches
                .map(function (offsetKey) {
                  return utils_src.a.decodeOffsetKey(offsetKey);
                })
                .filter(function (offsetDetail) {
                  return offsetDetail.blockKey === anchorKey;
                })
                .map(function (offsetDetail) {
                  return editorState
                    .getBlockTree(offsetDetail.blockKey)
                    .getIn([
                      offsetDetail.decoratorKey,
                      'leaves',
                      offsetDetail.leafKey,
                    ]);
                });
              if (
                leaves.every(function (leave) {
                  return void 0 === leave;
                })
              )
                return removeList();
              var plainText = editorState.getCurrentContent().getPlainText(),
                selectionIsInsideWord = leaves
                  .filter(function (leave) {
                    return void 0 !== leave;
                  })
                  .map(function (_ref) {
                    var start = _ref.start,
                      end = _ref.end;
                    return (
                      (0 === start &&
                        1 === anchorOffset &&
                        ':' !== plainText.charAt(anchorOffset) &&
                        /(\s|^):[\w]*/.test(plainText) &&
                        anchorOffset <= end) ||
                      (anchorOffset > start + 1 && anchorOffset <= end)
                    );
                  });
              return selectionIsInsideWord.every(function (isInside) {
                return !1 === isInside;
              })
                ? removeList()
                : ((_this.activeOffsetKey = selectionIsInsideWord
                    .filter(function (value) {
                      return !0 === value;
                    })
                    .keySeq()
                    .first()),
                  _this.onSearchChange(editorState, selection),
                  _this.props.store.isEscaped(_this.activeOffsetKey) ||
                    _this.props.store.resetEscapedSearch(),
                  _this.state.isActive ||
                    _this.props.store.isEscaped(_this.activeOffsetKey) ||
                    _this.openDropdown(),
                  (void 0 !== _this.lastSelectionIsInsideWord &&
                    selectionIsInsideWord.equals(
                      _this.lastSelectionIsInsideWord
                    )) ||
                    _this.setState({ focusedOptionIndex: 0 }),
                  (_this.lastSelectionIsInsideWord = selectionIsInsideWord),
                  editorState);
            }),
            (_this.onSearchChange = function (editorState, selection) {
              var word = getSearchText(editorState, selection).word,
                searchValue = word.substring(1, word.length);
              _this.lastSearchValue !== searchValue &&
                'function' == typeof _this.props.onSearchChange &&
                ((_this.lastSearchValue = searchValue),
                _this.props.onSearchChange({ value: searchValue }));
            }),
            (_this.onDownArrow = function (keyboardEvent) {
              keyboardEvent.preventDefault();
              var newIndex = _this.state.focusedOptionIndex + 1;
              _this.onEmojiFocus(
                newIndex >= _this.filteredEmojis.size ? 0 : newIndex
              );
            }),
            (_this.onTab = function (keyboardEvent) {
              keyboardEvent.preventDefault(), _this.commitSelection();
            }),
            (_this.onUpArrow = function (keyboardEvent) {
              if (
                (keyboardEvent.preventDefault(),
                _this.filteredEmojis && _this.filteredEmojis.size > 0)
              ) {
                var newIndex = _this.state.focusedOptionIndex - 1;
                _this.onEmojiFocus(Math.max(newIndex, 0));
              }
            }),
            (_this.onEscape = function (keyboardEvent) {
              keyboardEvent.preventDefault();
              var activeOffsetKey = _this.lastSelectionIsInsideWord
                .filter(function (value) {
                  return !0 === value;
                })
                .keySeq()
                .first();
              _this.props.store.escapeSearch(activeOffsetKey),
                _this.closeDropdown(),
                _this.props.store.setEditorState(
                  _this.props.store.getEditorState()
                );
            }),
            (_this.onEmojiSelect = function (emoji) {
              _this.closeDropdown();
              var newEditorState = addEmoji(
                _this.props.store.getEditorState(),
                emoji,
                Mode_REPLACE
              );
              _this.props.store.setEditorState(newEditorState);
            }),
            (_this.onEmojiFocus = function (index) {
              var descendant = 'emoji-option-' + _this.key + '-' + index;
              (_this.props.ariaProps.ariaActiveDescendantID = descendant),
                _this.setState({ focusedOptionIndex: index }),
                _this.props.store.setEditorState(
                  _this.props.store.getEditorState()
                );
            }),
            (_this.getEmojisForFilter = function () {
              var selection = _this.props.store.getEditorState().getSelection(),
                word = getSearchText(
                  _this.props.store.getEditorState(),
                  selection
                ).word,
                emojiValue = word.substring(1, word.length).toLowerCase(),
                filteredValues = _this.props.shortNames.filter(function (
                  emojiShortName
                ) {
                  return !emojiValue || emojiShortName.indexOf(emojiValue) > -1;
                }),
                size = filteredValues.size < 9 ? filteredValues.size : 9;
              return filteredValues.setSize(size);
            }),
            (_this.commitSelection = function () {
              return (
                _this.onEmojiSelect(
                  _this.filteredEmojis.get(_this.state.focusedOptionIndex)
                ),
                'handled'
              );
            }),
            (_this.openDropdown = function () {
              (_this.props.callbacks.handleReturn = _this.commitSelection),
                (_this.props.callbacks.keyBindingFn = function (keyboardEvent) {
                  40 === keyboardEvent.keyCode &&
                    _this.onDownArrow(keyboardEvent),
                    38 === keyboardEvent.keyCode &&
                      _this.onUpArrow(keyboardEvent),
                    27 === keyboardEvent.keyCode &&
                      _this.onEscape(keyboardEvent),
                    9 === keyboardEvent.keyCode && _this.onTab(keyboardEvent);
                });
              var descendant =
                'emoji-option-' +
                _this.key +
                '-' +
                _this.state.focusedOptionIndex;
              (_this.props.ariaProps.ariaActiveDescendantID = descendant),
                (_this.props.ariaProps.ariaOwneeID =
                  'emojis-list-' + _this.key),
                (_this.props.ariaProps.ariaHasPopup = 'true'),
                (_this.props.ariaProps.ariaExpanded = !0),
                _this.setState({ isActive: !0 }),
                _this.props.onOpen && _this.props.onOpen();
            }),
            (_this.closeDropdown = function () {
              (_this.props.callbacks.keyBindingFn = void 0),
                (_this.props.callbacks.handleReturn = void 0),
                (_this.props.ariaProps.ariaHasPopup = 'false'),
                (_this.props.ariaProps.ariaExpanded = !1),
                (_this.props.ariaProps.ariaActiveDescendantID = void 0),
                (_this.props.ariaProps.ariaOwneeID = void 0),
                _this.setState({ isActive: !1 }),
                _this.props.onClose && _this.props.onClose();
            }),
            _this
          );
        }
        !(function EmojiSuggestions_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            EmojiSuggestions_setPrototypeOf(subClass, superClass);
        })(EmojiSuggestions, _Component);
        var _proto = EmojiSuggestions.prototype;
        return (
          (_proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
            (this.key = Object(Draft.genKey)()),
              (this.props.callbacks.onChange = this.onEditorStateChange);
          }),
          (_proto.componentDidUpdate = function componentDidUpdate() {
            if (this.popover && this.filteredEmojis) {
              var size = this.filteredEmojis.size;
              size > 0 &&
                this.state.focusedOptionIndex >= size &&
                this.setState({ focusedOptionIndex: size - 1 }),
                size <= 0 && this.closeDropdown();
              var decoratorRect = this.props.store.getPortalClientRect(
                this.activeOffsetKey
              );
              if (decoratorRect)
                for (
                  var newStyles = this.props.positionSuggestions({
                      decoratorRect: decoratorRect,
                      props: this.props,
                      state: this.state,
                      filteredEmojis: this.filteredEmojis,
                      popover: this.popover,
                    }),
                    _i = 0,
                    _Object$entries = Object.entries(newStyles);
                  _i < _Object$entries.length;
                  _i++
                ) {
                  var _Object$entries$_i = _Object$entries[_i],
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];
                  this.popover.style[key] = value;
                }
              else this.closeDropdown();
            }
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            this.props.callbacks.onChange = void 0;
          }),
          (_proto.render = function render() {
            var _this2 = this;
            if (!this.state.isActive) return null;
            this.filteredEmojis = this.getEmojisForFilter();
            var _this$props = this.props,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              emojiImage =
                (_this$props.ariaProps,
                _this$props.callbacks,
                _this$props.onClose,
                _this$props.onOpen,
                _this$props.onSearchChange,
                _this$props.positionSuggestions,
                _this$props.shortNames,
                _this$props.store,
                _this$props.emojiImage),
              restProps = (function _objectWithoutPropertiesLoose(
                source,
                excluded
              ) {
                if (null == source) return {};
                var key,
                  i,
                  target = {},
                  sourceKeys = Object.keys(source);
                for (i = 0; i < sourceKeys.length; i++)
                  (key = sourceKeys[i]),
                    excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                return target;
              })(_this$props, [
                'theme',
                'ariaProps',
                'callbacks',
                'onClose',
                'onOpen',
                'onSearchChange',
                'positionSuggestions',
                'shortNames',
                'store',
                'emojiImage',
              ]);
            return react_default.a.createElement(
              'div',
              _extends({}, restProps, {
                className: theme.emojiSuggestions,
                role: 'listbox',
                id: 'emojis-list-' + this.key,
                ref: function ref(element) {
                  _this2.popover = element;
                },
              }),
              this.filteredEmojis
                .map(function (emoji, index) {
                  return react_default.a.createElement(Entry_Entry, {
                    key: emoji,
                    onEmojiSelect: _this2.onEmojiSelect,
                    onEmojiFocus: _this2.onEmojiFocus,
                    isFocused: _this2.state.focusedOptionIndex === index,
                    emoji: emoji,
                    index: index,
                    id: 'emoji-option-' + _this2.key + '-' + index,
                    theme: theme,
                    emojiImage: emojiImage,
                  });
                })
                .toJS()
            );
          }),
          EmojiSuggestions
        );
      })(react.Component);
      try {
        (EmojiSuggestions_EmojiSuggestions.displayName = 'EmojiSuggestions'),
          (EmojiSuggestions_EmojiSuggestions.__docgenInfo = {
            description: '',
            displayName: 'EmojiSuggestions',
            props: {
              callbacks: {
                defaultValue: null,
                description: '',
                name: 'callbacks',
                required: !0,
                type: { name: 'EmojiPLuginCallbacks' },
              },
              ariaProps: {
                defaultValue: null,
                description: '',
                name: 'ariaProps',
                required: !0,
                type: { name: 'AriaProps' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'EmojiPluginStore' },
              },
              shortNames: {
                defaultValue: null,
                description: '',
                name: 'shortNames',
                required: !0,
                type: { name: 'List<string>' },
              },
              positionSuggestions: {
                defaultValue: null,
                description: '',
                name: 'positionSuggestions',
                required: !0,
                type: {
                  name: '(arg: PositionSuggestionsParams) => CSSProperties',
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
              isActive: {
                defaultValue: null,
                description: '',
                name: 'isActive',
                required: !1,
                type: { name: 'boolean' },
              },
              focusedOptionIndex: {
                defaultValue: null,
                description: '',
                name: 'focusedOptionIndex',
                required: !1,
                type: { name: 'number' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !1,
                type: { name: '(() => void)' },
              },
              onOpen: {
                defaultValue: null,
                description: '',
                name: 'onOpen',
                required: !1,
                type: { name: '(() => void)' },
              },
              onSearchChange: {
                defaultValue: null,
                description: '',
                name: 'onSearchChange',
                required: !1,
                type: { name: '((change: { value: string; }) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSuggestions/index.tsx#EmojiSuggestions'
            ] = {
              docgenInfo: EmojiSuggestions_EmojiSuggestions.__docgenInfo,
              name: 'EmojiSuggestions',
              path:
                'packages/emoji/src/components/EmojiSuggestions/index.tsx#EmojiSuggestions',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function EmojiSuggestionsPortal(_ref) {
        var children = _ref.children,
          store = _ref.store,
          offsetKey = _ref.offsetKey,
          ref = Object(react.useRef)(null),
          updatePortalClientRect = Object(react.useCallback)(
            function () {
              store.updatePortalClientRect(offsetKey, function () {
                var _ref$current;
                return null == (_ref$current = ref.current)
                  ? void 0
                  : _ref$current.getBoundingClientRect();
              });
            },
            [store, offsetKey]
          );
        return (
          Object(react.useEffect)(
            function () {
              return (
                store.register(offsetKey),
                updatePortalClientRect(),
                store.setEditorState(store.getEditorState()),
                function () {
                  store.unregister(offsetKey);
                }
              );
            },
            [updatePortalClientRect, store]
          ),
          react_default.a.createElement('span', { ref: ref }, children)
        );
      }
      try {
        (EmojiSuggestionsPortal.displayName = 'EmojiSuggestionsPortal'),
          (EmojiSuggestionsPortal.__docgenInfo = {
            description: '',
            displayName: 'EmojiSuggestionsPortal',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'EmojiPluginStore' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSuggestionsPortal/index.tsx#EmojiSuggestionsPortal'
            ] = {
              docgenInfo: EmojiSuggestionsPortal.__docgenInfo,
              name: 'EmojiSuggestionsPortal',
              path:
                'packages/emoji/src/components/EmojiSuggestionsPortal/index.tsx#EmojiSuggestionsPortal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        compact = __webpack_require__(430);
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it;
        if ('undefined' == typeof Symbol || null == o[Symbol.iterator]) {
          if (
            Array.isArray(o) ||
            (it = (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              'Object' === n && o.constructor && (n = o.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(o);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(o, minLen);
            })(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0;
            return function () {
              return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        return (it = o[Symbol.iterator]()).next.bind(it);
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var index_esm = __webpack_require__(78),
        constants_defaultEmojiGroups = [
          {
            title: 'People',
            icon: react_default.a.createElement(index_esm.g, {
              style: { verticalAlign: '' },
            }),
            categories: ['people'],
          },
          {
            title: 'Nature',
            icon: react_default.a.createElement(index_esm.e, {
              style: { verticalAlign: '' },
            }),
            categories: ['nature'],
          },
          {
            title: 'Food & Drink',
            icon: react_default.a.createElement(index_esm.h, {
              style: { verticalAlign: '' },
            }),
            categories: ['food'],
          },
          {
            title: 'Activity',
            icon: react_default.a.createElement(index_esm.c, {
              style: { verticalAlign: '' },
            }),
            categories: ['activity'],
          },
          {
            title: 'Travel & Places',
            icon: react_default.a.createElement(index_esm.f, {
              style: { verticalAlign: '' },
            }),
            categories: ['travel'],
          },
          {
            title: 'Objects',
            icon: react_default.a.createElement(index_esm.a, {
              style: { verticalAlign: '' },
            }),
            categories: ['objects'],
          },
          {
            title: 'Symbols',
            icon: react_default.a.createElement(index_esm.d, {
              style: { verticalAlign: '' },
            }),
            categories: ['symbols'],
          },
          {
            title: 'Flags',
            icon: react_default.a.createElement(index_esm.b, {
              style: { verticalAlign: '' },
            }),
            categories: ['flags'],
          },
        ],
        lib = __webpack_require__(432);
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function Entry_setPrototypeOf(o, p) {
        return (Entry_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Popover_Entry_Entry = (function (_Component) {
        function Entry() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).state = { isFocused: !1 }),
            (_this.button = void 0),
            (_this.onMouseUp = function () {
              _this.mouseDown &&
                ((_this.mouseDown = !1),
                _this.props.onEmojiSelect(_this.props.emoji));
            }),
            (_this.onMouseDown = function () {
              (_this.mouseDown = !0),
                _this.props.onEmojiMouseDown &&
                  _this.props.onEmojiMouseDown(
                    _assertThisInitialized(_this),
                    _this.props.toneSet || null
                  );
            }),
            (_this.onMouseEnter = function () {
              _this.props.checkMouseDown() || _this.setState({ isFocused: !0 });
            }),
            (_this.onMouseLeave = function () {
              _this.props.checkMouseDown() || _this.setState({ isFocused: !1 });
            }),
            (_this.deselect = function () {
              _this.setState({ isFocused: !1 });
            }),
            (_this.mouseDown = _this.props.mouseDown),
            _this
          );
        }
        return (
          (function Entry_inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              Entry_setPrototypeOf(subClass, superClass);
          })(Entry, _Component),
          (Entry.prototype.render = function render() {
            var _this2 = this,
              _this$props = this.props,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              emoji = _this$props.emoji,
              EmojiImage = _this$props.emojiImage,
              isFocused = this.state.isFocused;
            return react_default.a.createElement(
              'button',
              {
                type: 'button',
                className: isFocused
                  ? theme.emojiSelectPopoverEntryFocused
                  : theme.emojiSelectPopoverEntry,
                onMouseDown: this.onMouseDown,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onMouseUp: this.onMouseUp,
                ref: function ref(element) {
                  _this2.button = element;
                },
              },
              react_default.a.createElement(EmojiImage, {
                emoji: emoji,
                theme: theme,
              })
            );
          }),
          Entry
        );
      })(react.Component);
      (Popover_Entry_Entry.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        emoji: prop_types_default.a.string.isRequired,
        mouseDown: prop_types_default.a.bool,
        checkMouseDown: prop_types_default.a.func.isRequired,
        onEmojiSelect: prop_types_default.a.func.isRequired,
        onEmojiMouseDown: prop_types_default.a.func,
      }),
        (Popover_Entry_Entry.defaultProps = { mouseDown: !1 });
      try {
        (Popover_Entry_Entry.displayName = 'Entry'),
          (Popover_Entry_Entry.__docgenInfo = {
            description: '',
            displayName: 'Entry',
            props: {
              isFocused: {
                defaultValue: null,
                description: '',
                name: 'isFocused',
                required: !1,
                type: { name: 'boolean' },
              },
              mouseDown: {
                defaultValue: { value: !1 },
                description: '',
                name: 'mouseDown',
                required: !1,
                type: { name: 'boolean' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              emoji: {
                defaultValue: null,
                description: '',
                name: 'emoji',
                required: !0,
                type: { name: 'string' },
              },
              checkMouseDown: {
                defaultValue: null,
                description: '',
                name: 'checkMouseDown',
                required: !0,
                type: { name: '() => boolean' },
              },
              onEmojiSelect: {
                defaultValue: null,
                description: '',
                name: 'onEmojiSelect',
                required: !0,
                type: { name: '(emoji: string) => void' },
              },
              onEmojiMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onEmojiMouseDown',
                required: !1,
                type: {
                  name:
                    '((entryComponent: Entry, toneSet: string[] | null) => void)',
                },
              },
              toneSet: {
                defaultValue: null,
                description: '',
                name: 'toneSet',
                required: !1,
                type: { name: 'string[] | null' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/Entry/index.tsx#Entry'
            ] = {
              docgenInfo: Popover_Entry_Entry.__docgenInfo,
              name: 'Entry',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/Entry/index.tsx#Entry',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Group_setPrototypeOf(o, p) {
        return (Group_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Group_Group = (function (_Component) {
        function Group() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).state = { hasRenderedEmoji: !1 }),
            (_this.container = void 0),
            (_this.list = void 0),
            (_this.shouldComponentUpdate = function (nextProps) {
              return !_this.state.hasRenderedEmoji && nextProps.isActive;
            }),
            (_this.renderCategory = function (category) {
              var _this$props = _this.props,
                _this$props$theme = _this$props.theme,
                theme = void 0 === _this$props$theme ? {} : _this$props$theme,
                emojis = _this$props.emojis,
                checkMouseDown = _this$props.checkMouseDown,
                onEmojiSelect = _this$props.onEmojiSelect,
                onEmojiMouseDown = _this$props.onEmojiMouseDown,
                emojiImage = _this$props.emojiImage,
                isActive = _this$props.isActive,
                categoryEmojis = emojis[category];
              return Object.keys(categoryEmojis).map(function (key) {
                return react_default.a.createElement(
                  'li',
                  {
                    key: categoryEmojis[key][0],
                    className: theme.emojiSelectPopoverGroupItem,
                  },
                  isActive &&
                    react_default.a.createElement(Popover_Entry_Entry, {
                      emoji: categoryEmojis[key][0],
                      theme: theme,
                      toneSet:
                        categoryEmojis[key].length > 1
                          ? categoryEmojis[key]
                          : null,
                      checkMouseDown: checkMouseDown,
                      onEmojiSelect: onEmojiSelect,
                      onEmojiMouseDown: onEmojiMouseDown,
                      emojiImage: emojiImage,
                    })
                );
              });
            }),
            _this
          );
        }
        !(function Group_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            Group_setPrototypeOf(subClass, superClass);
        })(Group, _Component);
        var _proto = Group.prototype;
        return (
          (_proto.componentDidUpdate = function componentDidUpdate() {
            this.props.isActive && this.setState({ hasRenderedEmoji: !0 });
          }),
          (_proto.render = function render() {
            var _this2 = this,
              _this$props2 = this.props,
              _this$props2$theme = _this$props2.theme,
              theme = void 0 === _this$props2$theme ? {} : _this$props2$theme,
              group = _this$props2.group;
            return react_default.a.createElement(
              'section',
              {
                className: theme.emojiSelectPopoverGroup,
                ref: function ref(element) {
                  _this2.container = element;
                },
              },
              react_default.a.createElement(
                'h3',
                { className: theme.emojiSelectPopoverGroupTitle },
                group.title
              ),
              react_default.a.createElement(
                'ul',
                {
                  className: theme.emojiSelectPopoverGroupList,
                  ref: function ref(element) {
                    _this2.list = element;
                  },
                },
                group.categories.map(function (category) {
                  return _this2.renderCategory(category);
                })
              )
            );
          }),
          Group
        );
      })(react.Component);
      Group_Group.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        group: prop_types_default.a.object.isRequired,
        emojis: prop_types_default.a.object.isRequired,
        checkMouseDown: prop_types_default.a.func.isRequired,
        onEmojiSelect: prop_types_default.a.func.isRequired,
        onEmojiMouseDown: prop_types_default.a.func.isRequired,
        isActive: prop_types_default.a.bool,
      };
      try {
        (Group_Group.displayName = 'Group'),
          (Group_Group.__docgenInfo = {
            description: '',
            displayName: 'Group',
            props: {
              hasRenderedEmoji: {
                defaultValue: null,
                description: '',
                name: 'hasRenderedEmoji',
                required: !1,
                type: { name: 'boolean' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              group: {
                defaultValue: null,
                description: '',
                name: 'group',
                required: !0,
                type: { name: 'EmojiSelectGroup' },
              },
              emojis: {
                defaultValue: null,
                description: '',
                name: 'emojis',
                required: !0,
                type: { name: 'EmojiStrategy' },
              },
              checkMouseDown: {
                defaultValue: null,
                description: '',
                name: 'checkMouseDown',
                required: !0,
                type: { name: '() => boolean' },
              },
              onEmojiSelect: {
                defaultValue: null,
                description: '',
                name: 'onEmojiSelect',
                required: !0,
                type: { name: '(emoji: string) => void' },
              },
              onEmojiMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onEmojiMouseDown',
                required: !0,
                type: {
                  name:
                    '(entryComponent: Entry, toneSet: string[] | null) => void',
                },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
              isActive: {
                defaultValue: null,
                description: '',
                name: 'isActive',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/Groups/Group/index.tsx#Group'
            ] = {
              docgenInfo: Group_Group.__docgenInfo,
              name: 'Group',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/Groups/Group/index.tsx#Group',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Groups_extends() {
        return (Groups_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Groups_setPrototypeOf(o, p) {
        return (Groups_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Groups_Groups = (function (_Component) {
        function Groups() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).state = { activeGroup: 0 }),
            (_this.scrollbars = void 0),
            (_this.container = void 0),
            (_this.onScroll = function (values) {
              var _this$props = _this.props,
                groups = _this$props.groups,
                onGroupScroll = _this$props.onGroupScroll,
                activeGroup = 0;
              groups.forEach(function (group, index) {
                values.scrollTop >= group.top &&
                  ((activeGroup = index),
                  _this.setState({ activeGroup: activeGroup }));
              }),
                onGroupScroll(activeGroup);
            }),
            (_this.onWheel = function (event) {
              var _getValues = _this.scrollbars.getValues(),
                clientHeight = _getValues.clientHeight,
                scrollHeight = _getValues.scrollHeight,
                scrollTop = _getValues.scrollTop;
              event.deltaY > 0
                ? scrollTop < scrollHeight - clientHeight - event.deltaY
                  ? event.stopPropagation()
                  : _this.scrollbars.scrollToBottom()
                : scrollTop > -event.deltaY
                ? event.stopPropagation()
                : _this.scrollbars.scrollTop(0);
            }),
            (_this.scrollToGroup = function (groupIndex) {
              var groups = _this.props.groups;
              _this.scrollbars.scrollTop(groups[groupIndex].topList);
            }),
            (_this.calculateBounds = function () {
              var _getValues2 = _this.scrollbars.getValues(),
                scrollHeight = _getValues2.scrollHeight,
                scrollTop = _getValues2.scrollTop;
              if (scrollHeight) {
                var groups = _this.props.groups,
                  containerTop =
                    _this.container.getBoundingClientRect().top - scrollTop;
                groups.forEach(function (group) {
                  var groupTop = group.instance.container.getBoundingClientRect()
                      .top,
                    listTop = group.instance.list.getBoundingClientRect().top;
                  (group.top = groupTop - containerTop),
                    (group.topList = listTop - containerTop);
                });
              }
            }),
            (_this.isRenderedGroupActive = function (index) {
              var activeGroup = _this.state.activeGroup,
                isOpen = _this.props.isOpen;
              return (
                activeGroup === index || (isOpen && activeGroup + 1 === index)
              );
            }),
            _this
          );
        }
        !(function Groups_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            Groups_setPrototypeOf(subClass, superClass);
        })(Groups, _Component);
        var _proto = Groups.prototype;
        return (
          (_proto.componentDidMount = function componentDidMount() {
            this.calculateBounds();
          }),
          (_proto.componentDidUpdate = function componentDidUpdate() {
            this.calculateBounds();
          }),
          (_proto.render = function render() {
            var _this2 = this,
              _this$props2 = this.props,
              _this$props2$theme = _this$props2.theme,
              theme = void 0 === _this$props2$theme ? {} : _this$props2$theme,
              _this$props2$groups = _this$props2.groups,
              groups =
                void 0 === _this$props2$groups ? [] : _this$props2$groups,
              emojis = _this$props2.emojis,
              checkMouseDown = _this$props2.checkMouseDown,
              onEmojiSelect = _this$props2.onEmojiSelect,
              onEmojiMouseDown = _this$props2.onEmojiMouseDown,
              emojiImage = _this$props2.emojiImage;
            return react_default.a.createElement(
              'div',
              {
                className: theme.emojiSelectPopoverGroups,
                onWheel: this.onWheel,
                ref: function ref(element) {
                  _this2.container = element;
                },
              },
              react_default.a.createElement(
                lib.Scrollbars,
                {
                  className: theme.emojiSelectPopoverScrollbarOuter,
                  onScrollFrame: this.onScroll,
                  renderTrackVertical: function renderTrackVertical() {
                    return react_default.a.createElement('div', {
                      className: theme.emojiSelectPopoverScrollbar,
                    });
                  },
                  renderThumbVertical: function renderThumbVertical(props) {
                    return react_default.a.createElement(
                      'div',
                      Groups_extends({}, props, {
                        className: theme.emojiSelectPopoverScrollbarThumb,
                      })
                    );
                  },
                  ref: function ref(element) {
                    _this2.scrollbars = element;
                  },
                },
                groups.map(function (group, index) {
                  return react_default.a.createElement(Group_Group, {
                    key:
                      'group#' + index + '[' + group.categories.join(',') + ']',
                    theme: theme,
                    group: group,
                    emojis: emojis,
                    checkMouseDown: checkMouseDown,
                    onEmojiSelect: onEmojiSelect,
                    onEmojiMouseDown: onEmojiMouseDown,
                    ref: function ref(element) {
                      group.instance = element;
                    },
                    emojiImage: emojiImage,
                    isActive: _this2.isRenderedGroupActive(index),
                  });
                })
              )
            );
          }),
          Groups
        );
      })(react.Component);
      Groups_Groups.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        groups: prop_types_default.a.arrayOf(prop_types_default.a.object)
          .isRequired,
        emojis: prop_types_default.a.object.isRequired,
        checkMouseDown: prop_types_default.a.func.isRequired,
        onEmojiSelect: prop_types_default.a.func.isRequired,
        onEmojiMouseDown: prop_types_default.a.func.isRequired,
        onGroupScroll: prop_types_default.a.func.isRequired,
        isOpen: prop_types_default.a.bool,
      };
      try {
        (Groups_Groups.displayName = 'Groups'),
          (Groups_Groups.__docgenInfo = {
            description: '',
            displayName: 'Groups',
            props: {
              activeGroup: {
                defaultValue: null,
                description: '',
                name: 'activeGroup',
                required: !1,
                type: { name: 'number' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              groups: {
                defaultValue: null,
                description: '',
                name: 'groups',
                required: !0,
                type: { name: 'EmojiSelectGroup[]' },
              },
              emojis: {
                defaultValue: null,
                description: '',
                name: 'emojis',
                required: !0,
                type: { name: 'EmojiStrategy' },
              },
              checkMouseDown: {
                defaultValue: null,
                description: '',
                name: 'checkMouseDown',
                required: !0,
                type: { name: '() => boolean' },
              },
              onEmojiSelect: {
                defaultValue: null,
                description: '',
                name: 'onEmojiSelect',
                required: !0,
                type: { name: '(emoji: string) => void' },
              },
              onEmojiMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onEmojiMouseDown',
                required: !0,
                type: {
                  name:
                    '(entryComponent: Entry, toneSet: string[] | null) => void',
                },
              },
              onGroupScroll: {
                defaultValue: null,
                description: '',
                name: 'onGroupScroll',
                required: !0,
                type: { name: '(activeGroup: number) => void' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
              isOpen: {
                defaultValue: null,
                description: '',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/Groups/index.tsx#Groups'
            ] = {
              docgenInfo: Groups_Groups.__docgenInfo,
              name: 'Groups',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/Groups/index.tsx#Groups',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Nav_Entry_setPrototypeOf(o, p) {
        return (Nav_Entry_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Nav_Entry_Entry = (function (_Component) {
        function Entry() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).mouseDown = !1),
            (_this.onMouseDown = function () {
              _this.mouseDown = !0;
            }),
            (_this.onMouseUp = function () {
              _this.mouseDown &&
                ((_this.mouseDown = !1),
                _this.props.onGroupSelect(_this.props.groupIndex));
            }),
            _this
          );
        }
        return (
          (function Nav_Entry_inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              Nav_Entry_setPrototypeOf(subClass, superClass);
          })(Entry, _Component),
          (Entry.prototype.render = function render() {
            var _this$props = this.props,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              icon = _this$props.icon,
              isActive = _this$props.isActive;
            return react_default.a.createElement(
              'button',
              {
                className: isActive
                  ? theme.emojiSelectPopoverNavEntryActive
                  : theme.emojiSelectPopoverNavEntry,
                onMouseDown: this.onMouseDown,
                type: 'button',
                onMouseUp: this.onMouseUp,
              },
              icon
            );
          }),
          Entry
        );
      })(react.Component);
      (Nav_Entry_Entry.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        icon: prop_types_default.a.oneOfType([
          prop_types_default.a.element,
          prop_types_default.a.string,
        ]).isRequired,
        groupIndex: prop_types_default.a.number.isRequired,
        isActive: prop_types_default.a.bool,
        onGroupSelect: prop_types_default.a.func.isRequired,
      }),
        (Nav_Entry_Entry.defaultProps = { isActive: !1 });
      try {
        (Nav_Entry_Entry.displayName = 'Entry'),
          (Nav_Entry_Entry.__docgenInfo = {
            description: '',
            displayName: 'Entry',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !0,
                type: { name: 'ReactNode' },
              },
              groupIndex: {
                defaultValue: null,
                description: '',
                name: 'groupIndex',
                required: !0,
                type: { name: 'number' },
              },
              isActive: {
                defaultValue: { value: !1 },
                description: '',
                name: 'isActive',
                required: !1,
                type: { name: 'boolean' },
              },
              onGroupSelect: {
                defaultValue: null,
                description: '',
                name: 'onGroupSelect',
                required: !0,
                type: { name: '(index: number) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/Nav/Entry/index.tsx#Entry'
            ] = {
              docgenInfo: Nav_Entry_Entry.__docgenInfo,
              name: 'Entry',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/Nav/Entry/index.tsx#Entry',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Nav_Nav = function Nav(_ref) {
        var _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme,
          groups = _ref.groups,
          activeGroup = _ref.activeGroup,
          onGroupSelect = _ref.onGroupSelect;
        return react_default.a.createElement(
          'ul',
          { className: theme.emojiSelectPopoverNav },
          groups.map(function (group, index) {
            return react_default.a.createElement(
              'li',
              {
                key:
                  'nav-group#' + index + '[' + group.categories.join(',') + ']',
                className: theme.emojiSelectPopoverNavItem,
              },
              react_default.a.createElement(Nav_Entry_Entry, {
                theme: theme,
                groupIndex: index,
                isActive: index === activeGroup,
                icon: group.icon,
                onGroupSelect: onGroupSelect,
              })
            );
          })
        );
      };
      Nav_Nav.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        groups: prop_types_default.a.arrayOf(prop_types_default.a.object)
          .isRequired,
        activeGroup: prop_types_default.a.number.isRequired,
        onGroupSelect: prop_types_default.a.func.isRequired,
      };
      var Popover_Nav = Nav_Nav;
      try {
        (Nav_Nav.displayName = 'Nav'),
          (Nav_Nav.__docgenInfo = {
            description: '',
            displayName: 'Nav',
            props: {
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'EmojiPluginTheme' },
              },
              groups: {
                defaultValue: null,
                description: '',
                name: 'groups',
                required: !0,
                type: { name: 'EmojiSelectGroup[]' },
              },
              activeGroup: {
                defaultValue: null,
                description: '',
                name: 'activeGroup',
                required: !0,
                type: { name: 'number' },
              },
              onGroupSelect: {
                defaultValue: null,
                description: '',
                name: 'onGroupSelect',
                required: !0,
                type: { name: '(index: number) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/Nav/index.tsx#Nav'
            ] = {
              docgenInfo: Nav_Nav.__docgenInfo,
              name: 'Nav',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/Nav/index.tsx#Nav',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var to_style = __webpack_require__(431),
        to_style_default = __webpack_require__.n(to_style);
      function ToneSelect_setPrototypeOf(o, p) {
        return (ToneSelect_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var ToneSelect_ToneSelect = (function (_Component) {
        function ToneSelect() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).tones = void 0),
            (_this.setCorrectPosition = function (areaBounds, entryBounds) {
              var width = _this.tones.offsetWidth,
                height = _this.tones.offsetHeight,
                style = {
                  marginLeft: 0,
                  left: entryBounds.left + entryBounds.width / 2 - width / 2,
                  bottom: entryBounds.bottom + entryBounds.height,
                };
              style.left < areaBounds.left
                ? (delete style.marginLeft, (style.left = areaBounds.left))
                : style.left > areaBounds.left + areaBounds.width - width &&
                  (delete style.marginLeft,
                  delete style.left,
                  (style.right = areaBounds.right)),
                style.bottom > areaBounds.bottom + areaBounds.height - height &&
                  (delete style.bottom,
                  (style.top = entryBounds.top + entryBounds.height)),
                (style = to_style_default.a.object(style));
              for (
                var _i = 0, _Object$entries = Object.entries(style);
                _i < _Object$entries.length;
                _i++
              ) {
                var _Object$entries$_i = _Object$entries[_i],
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];
                _this.tones.style[key] = value;
              }
            }),
            _this
          );
        }
        !(function ToneSelect_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            ToneSelect_setPrototypeOf(subClass, superClass);
        })(ToneSelect, _Component);
        var _proto = ToneSelect.prototype;
        return (
          (_proto.componentDidMount = function componentDidMount() {
            var _this$props$bounds = this.props.bounds,
              areaBounds = _this$props$bounds.areaBounds,
              entryBounds = _this$props$bounds.entryBounds;
            this.setCorrectPosition(areaBounds, entryBounds);
          }),
          (_proto.render = function render() {
            var _this2 = this,
              _this$props = this.props,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              _this$props$toneSet = _this$props.toneSet,
              toneSet =
                void 0 === _this$props$toneSet ? [] : _this$props$toneSet,
              onEmojiSelect = _this$props.onEmojiSelect,
              emojiImage = _this$props.emojiImage;
            return react_default.a.createElement(
              'div',
              { className: theme.emojiSelectPopoverToneSelect },
              react_default.a.createElement(
                'ul',
                {
                  className: theme.emojiSelectPopoverToneSelectList,
                  ref: function ref(element) {
                    _this2.tones = element;
                  },
                },
                (toneSet || []).map(function (emoji) {
                  return react_default.a.createElement(
                    'li',
                    {
                      key: 'tone-select(' + emoji + ')',
                      className: theme.emojiSelectPopoverToneSelectItem,
                    },
                    react_default.a.createElement(Popover_Entry_Entry, {
                      emoji: emoji,
                      theme: theme,
                      checkMouseDown: function checkMouseDown() {
                        return !1;
                      },
                      onEmojiSelect: onEmojiSelect,
                      mouseDown: !0,
                      emojiImage: emojiImage,
                    })
                  );
                })
              )
            );
          }),
          ToneSelect
        );
      })(react.Component);
      ToneSelect_ToneSelect.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        bounds: prop_types_default.a.shape({
          areaBounds: prop_types_default.a.shape({
            left: prop_types_default.a.number.isRequired,
            right: prop_types_default.a.number.isRequired,
            top: prop_types_default.a.number.isRequired,
            bottom: prop_types_default.a.number.isRequired,
            width: prop_types_default.a.number.isRequired,
            height: prop_types_default.a.number.isRequired,
          }).isRequired,
          entryBounds: prop_types_default.a.shape({
            left: prop_types_default.a.number.isRequired,
            right: prop_types_default.a.number.isRequired,
            top: prop_types_default.a.number.isRequired,
            bottom: prop_types_default.a.number.isRequired,
            width: prop_types_default.a.number.isRequired,
            height: prop_types_default.a.number.isRequired,
          }).isRequired,
        }).isRequired,
        onEmojiSelect: prop_types_default.a.func.isRequired,
      };
      try {
        (ToneSelect_ToneSelect.displayName = 'ToneSelect'),
          (ToneSelect_ToneSelect.__docgenInfo = {
            description: '',
            displayName: 'ToneSelect',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              bounds: {
                defaultValue: null,
                description: '',
                name: 'bounds',
                required: !0,
                type: {
                  name: '{ areaBounds: Boundaries; entryBounds: Boundaries; }',
                },
              },
              onEmojiSelect: {
                defaultValue: null,
                description: '',
                name: 'onEmojiSelect',
                required: !0,
                type: { name: '(emoji: string) => void' },
              },
              toneSet: {
                defaultValue: null,
                description: '',
                name: 'toneSet',
                required: !0,
                type: { name: 'string[] | null' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/ToneSelect/index.tsx#ToneSelect'
            ] = {
              docgenInfo: ToneSelect_ToneSelect.__docgenInfo,
              name: 'ToneSelect',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/ToneSelect/index.tsx#ToneSelect',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Popover_setPrototypeOf(o, p) {
        return (Popover_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Popover_Popover = (function (_Component) {
        function Popover() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).activeEmoji = null),
            (_this.toneSelectTimer = null),
            (_this.mouseDown = !1),
            (_this.toneSet = null),
            (_this.container = void 0),
            (_this.groupsElement = void 0),
            (_this.state = { activeGroup: 0, showToneSelect: !1 }),
            (_this.onMouseDown = function () {
              _this.mouseDown = !0;
            }),
            (_this.onMouseUp = function () {
              (_this.mouseDown = !1),
                _this.activeEmoji &&
                  (_this.activeEmoji.deselect(),
                  (_this.activeEmoji = null),
                  _this.state.showToneSelect
                    ? _this.closeToneSelect()
                    : _this.toneSelectTimer &&
                      (clearTimeout(_this.toneSelectTimer),
                      (_this.toneSelectTimer = null)));
            }),
            (_this.onEmojiSelect = function (emoji) {
              var newEditorState = addEmoji(
                _this.props.store.getEditorState(),
                emoji
              );
              _this.props.store.setEditorState(newEditorState);
            }),
            (_this.onEmojiMouseDown = function (emojiEntry, toneSet) {
              (_this.activeEmoji = emojiEntry),
                toneSet && _this.openToneSelectWithTimer(toneSet);
            }),
            (_this.onGroupSelect = function (groupIndex) {
              _this.groupsElement.scrollToGroup(groupIndex);
            }),
            (_this.onGroupScroll = function (groupIndex) {
              groupIndex !== _this.state.activeGroup &&
                _this.setState({ activeGroup: groupIndex });
            }),
            (_this.openToneSelectWithTimer = function (toneSet) {
              _this.toneSelectTimer = setTimeout(function () {
                (_this.toneSelectTimer = null), _this.openToneSelect(toneSet);
              }, _this.props.toneSelectOpenDelay);
            }),
            (_this.openToneSelect = function (toneSet) {
              (_this.toneSet = toneSet), _this.setState({ showToneSelect: !0 });
            }),
            (_this.closeToneSelect = function () {
              (_this.toneSet = []), _this.setState({ showToneSelect: !1 });
            }),
            (_this.checkMouseDown = function () {
              return _this.mouseDown;
            }),
            (_this.renderToneSelect = function () {
              if (_this.state.showToneSelect) {
                var _this$props = _this.props,
                  _this$props$theme = _this$props.theme,
                  theme = void 0 === _this$props$theme ? {} : _this$props$theme,
                  emojiImage = _this$props.emojiImage,
                  containerBounds = _this.container.getBoundingClientRect(),
                  areaBounds = _this.groupsElement.container.getBoundingClientRect(),
                  entryBounds = _this.activeEmoji.button.getBoundingClientRect(),
                  bounds = {
                    areaBounds: {
                      left: areaBounds.left - containerBounds.left,
                      right: containerBounds.right - areaBounds.right,
                      top: areaBounds.top - containerBounds.top,
                      bottom: containerBounds.bottom - areaBounds.bottom,
                      width: areaBounds.width,
                      height: areaBounds.width,
                    },
                    entryBounds: {
                      left: entryBounds.left - containerBounds.left,
                      right: containerBounds.right - entryBounds.right,
                      top: entryBounds.top - containerBounds.top,
                      bottom: containerBounds.bottom - entryBounds.bottom,
                      width: entryBounds.width,
                      height: entryBounds.width,
                    },
                  };
                return react_default.a.createElement(ToneSelect_ToneSelect, {
                  theme: theme,
                  bounds: bounds,
                  toneSet: _this.toneSet,
                  onEmojiSelect: _this.onEmojiSelect,
                  emojiImage: emojiImage,
                });
              }
              return null;
            }),
            _this
          );
        }
        !(function Popover_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            Popover_setPrototypeOf(subClass, superClass);
        })(Popover, _Component);
        var _proto = Popover.prototype;
        return (
          (_proto.componentDidMount = function componentDidMount() {
            window.addEventListener('mouseup', this.onMouseUp);
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            window.removeEventListener('mouseup', this.onMouseUp);
          }),
          (_proto.render = function render() {
            var _this2 = this,
              _this$props2 = this.props,
              _this$props2$theme = _this$props2.theme,
              theme = void 0 === _this$props2$theme ? {} : _this$props2$theme,
              _this$props2$groups = _this$props2.groups,
              groups =
                void 0 === _this$props2$groups ? [] : _this$props2$groups,
              emojis = _this$props2.emojis,
              _this$props2$isOpen = _this$props2.isOpen,
              isOpen = void 0 !== _this$props2$isOpen && _this$props2$isOpen,
              emojiImage = _this$props2.emojiImage,
              className = isOpen
                ? theme.emojiSelectPopover
                : theme.emojiSelectPopoverClosed,
              activeGroup = this.state.activeGroup;
            return react_default.a.createElement(
              'div',
              {
                className: className,
                onMouseDown: this.onMouseDown,
                ref: function ref(element) {
                  _this2.container = element;
                },
              },
              react_default.a.createElement(
                'h3',
                { className: theme.emojiSelectPopoverTitle },
                groups[activeGroup].title
              ),
              react_default.a.createElement(Groups_Groups, {
                theme: theme,
                groups: groups,
                emojis: emojis,
                checkMouseDown: this.checkMouseDown,
                onEmojiSelect: this.onEmojiSelect,
                onEmojiMouseDown: this.onEmojiMouseDown,
                onGroupScroll: this.onGroupScroll,
                ref: function ref(element) {
                  _this2.groupsElement = element;
                },
                emojiImage: emojiImage,
                isOpen: isOpen,
              }),
              react_default.a.createElement(Popover_Nav, {
                theme: theme,
                groups: groups,
                activeGroup: activeGroup,
                onGroupSelect: this.onGroupSelect,
              }),
              this.renderToneSelect()
            );
          }),
          Popover
        );
      })(react.Component);
      (Popover_Popover.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        store: prop_types_default.a.object.isRequired,
        groups: prop_types_default.a.arrayOf(prop_types_default.a.object)
          .isRequired,
        emojis: prop_types_default.a.object.isRequired,
        toneSelectOpenDelay: prop_types_default.a.number.isRequired,
        isOpen: prop_types_default.a.bool,
      }),
        (Popover_Popover.defaultProps = { isOpen: !1 });
      try {
        (Popover_Popover.displayName = 'Popover'),
          (Popover_Popover.__docgenInfo = {
            description: '',
            displayName: 'Popover',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'EmojiPluginStore' },
              },
              groups: {
                defaultValue: null,
                description: '',
                name: 'groups',
                required: !0,
                type: { name: 'EmojiSelectGroup[]' },
              },
              emojis: {
                defaultValue: null,
                description: '',
                name: 'emojis',
                required: !0,
                type: { name: 'EmojiStrategy' },
              },
              toneSelectOpenDelay: {
                defaultValue: null,
                description: '',
                name: 'toneSelectOpenDelay',
                required: !0,
                type: { name: 'number' },
              },
              isOpen: {
                defaultValue: { value: !1 },
                description: '',
                name: 'isOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/Popover/index.tsx#Popover'
            ] = {
              docgenInfo: Popover_Popover.__docgenInfo,
              name: 'Popover',
              path:
                'packages/emoji/src/components/EmojiSelect/Popover/index.tsx#Popover',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function EmojiSelect_setPrototypeOf(o, p) {
        return (EmojiSelect_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var EmojiSelect_emojis = (function createEmojisFromStrategy() {
          for (
            var _step,
              emojis = {},
              _iterator = _createForOfIteratorHelperLoose(compact);
            !(_step = _iterator()).done;

          ) {
            var item = _step.value,
              shortName = Object(joypixels.toShort)(item.unicode),
              emoji = joypixels.emojiList[shortName];
            if (
              emoji &&
              (emojis[emoji.category] || (emojis[emoji.category] = {}),
              (emojis[emoji.category][shortName] = [shortName]),
              item.skins)
            )
              for (
                var _step2,
                  _iterator2 = _createForOfIteratorHelperLoose(item.skins);
                !(_step2 = _iterator2()).done;

              ) {
                var skin = _step2.value,
                  skinShortName = Object(joypixels.toShort)(skin.unicode);
                joypixels.emojiList[skinShortName] &&
                  emojis[emoji.category][shortName].push(skinShortName);
              }
          }
          return emojis;
        })(),
        EmojiSelect_EmojiSelect = (function (_Component) {
          function EmojiSelect() {
            for (
              var _this,
                _len = arguments.length,
                args = new Array(_len),
                _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return (
              ((_this =
                _Component.call.apply(_Component, [this].concat(args)) ||
                this).state = { isOpen: !1 }),
              (_this.onClick = function (event) {
                event.stopPropagation(),
                  event.nativeEvent.stopImmediatePropagation();
              }),
              (_this.onButtonMouseUp = function () {
                return _this.state.isOpen
                  ? _this.closePopover()
                  : _this.openPopover();
              }),
              (_this.openPopover = function () {
                _this.state.isOpen || _this.setState({ isOpen: !0 }),
                  _this.props.onOpen && _this.props.onOpen();
              }),
              (_this.closePopover = function () {
                _this.state.isOpen && _this.setState({ isOpen: !1 }),
                  _this.props.onClose && _this.props.onClose();
              }),
              _this
            );
          }
          !(function EmojiSelect_inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              EmojiSelect_setPrototypeOf(subClass, superClass);
          })(EmojiSelect, _Component);
          var _proto = EmojiSelect.prototype;
          return (
            (_proto.componentDidMount = function componentDidMount() {
              document.addEventListener('click', this.closePopover);
            }),
            (_proto.componentWillUnmount = function componentWillUnmount() {
              document.removeEventListener('click', this.closePopover);
            }),
            (_proto.render = function render() {
              var _this$props = this.props,
                _this$props$theme = _this$props.theme,
                theme = void 0 === _this$props$theme ? {} : _this$props$theme,
                store = _this$props.store,
                selectGroups = _this$props.selectGroups,
                selectButtonContent = _this$props.selectButtonContent,
                toneSelectOpenDelay = _this$props.toneSelectOpenDelay,
                emojiImage = _this$props.emojiImage,
                buttonClassName = this.state.isOpen
                  ? theme.emojiSelectButtonPressed
                  : theme.emojiSelectButton;
              return react_default.a.createElement(
                'div',
                { className: theme.emojiSelect, onClick: this.onClick },
                react_default.a.createElement(
                  'button',
                  {
                    className: buttonClassName,
                    onMouseUp: this.onButtonMouseUp,
                    type: 'button',
                  },
                  selectButtonContent
                ),
                react_default.a.createElement(Popover_Popover, {
                  theme: theme,
                  store: store,
                  groups: selectGroups,
                  emojis: EmojiSelect_emojis,
                  toneSelectOpenDelay: toneSelectOpenDelay,
                  isOpen: this.state.isOpen,
                  emojiImage: emojiImage,
                })
              );
            }),
            EmojiSelect
          );
        })(react.Component);
      (EmojiSelect_EmojiSelect.propTypes = {
        theme: prop_types_default.a.object.isRequired,
        store: prop_types_default.a.object.isRequired,
        selectGroups: prop_types_default.a.arrayOf(
          prop_types_default.a.shape({
            title: prop_types_default.a.string.isRequired,
            icon: prop_types_default.a.oneOfType([
              prop_types_default.a.element,
              prop_types_default.a.string,
            ]).isRequired,
            categories: prop_types_default.a.arrayOf(
              prop_types_default.a.oneOf(Object.keys(EmojiSelect_emojis))
            ).isRequired,
          })
        ),
        selectButtonContent: prop_types_default.a.oneOfType([
          prop_types_default.a.element,
          prop_types_default.a.string,
        ]),
        toneSelectOpenDelay: prop_types_default.a.number,
      }),
        (EmojiSelect_EmojiSelect.defaultProps = {
          selectButtonContent: '☺',
          selectGroups: constants_defaultEmojiGroups,
          toneSelectOpenDelay: 500,
        });
      try {
        (EmojiSelect_EmojiSelect.displayName = 'EmojiSelect'),
          (EmojiSelect_EmojiSelect.__docgenInfo = {
            description: '',
            displayName: 'EmojiSelect',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'EmojiPluginStore' },
              },
              selectGroups: {
                defaultValue: null,
                description: '',
                name: 'selectGroups',
                required: !1,
                type: { name: 'EmojiSelectGroup[]' },
              },
              selectButtonContent: {
                defaultValue: { value: '☺' },
                description: '',
                name: 'selectButtonContent',
                required: !1,
                type: { name: 'ReactNode' },
              },
              toneSelectOpenDelay: {
                defaultValue: { value: 500 },
                description: '',
                name: 'toneSelectOpenDelay',
                required: !1,
                type: { name: 'number' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !0,
                type: { name: 'ComponentType<EmojiImageProps>' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !1,
                type: { name: '(() => void)' },
              },
              onOpen: {
                defaultValue: null,
                description: '',
                name: 'onOpen',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/EmojiSelect/index.tsx#EmojiSelect'
            ] = {
              docgenInfo: EmojiSelect_EmojiSelect.__docgenInfo,
              name: 'EmojiSelect',
              path:
                'packages/emoji/src/components/EmojiSelect/index.tsx#EmojiSelect',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var build = __webpack_require__(118),
        build_default = __webpack_require__.n(build),
        escapedFind = joypixels_default.a.escapeRegExp(
          joypixels_default.a.unicodeCharRegex()
        ),
        search = new RegExp(
          '<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(' +
            escapedFind +
            ')',
          'gi'
        ),
        emojiStrategy = function (contentBlock, callback) {
          build_default()(search, contentBlock, callback);
        },
        EMOJI_REGEX = /(\s|^):[\w]*:?/g,
        emojiSuggestionsStrategy = function (contentBlock, callback) {
          build_default()(EMOJI_REGEX, contentBlock, callback);
        },
        unicodeRegex = new RegExp(joypixels_default.a.regAscii, 'g');
      function positionSuggestions_positionSuggestions(_ref) {
        var relativeRect,
          decoratorRect = _ref.decoratorRect,
          popover = _ref.popover,
          state = _ref.state,
          filteredEmojis = _ref.filteredEmojis,
          relativeParent = (function getRelativeParent(element) {
            return element
              ? 'static' !==
                window.getComputedStyle(element).getPropertyValue('position')
                ? element
                : getRelativeParent(element.parentElement)
              : null;
          })(popover.parentElement);
        if (relativeParent) {
          var relativeParentRect = relativeParent.getBoundingClientRect();
          relativeRect = {
            scrollLeft: relativeParent.scrollLeft,
            scrollTop: relativeParent.scrollTop,
            left: decoratorRect.left - relativeParentRect.left,
            top: decoratorRect.top - relativeParentRect.top,
          };
        } else
          relativeRect = {
            scrollLeft:
              window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop,
            left: decoratorRect.left,
            top: decoratorRect.top,
          };
        var transform,
          transition,
          left = relativeRect.left + relativeRect.scrollLeft,
          top = relativeRect.top + relativeRect.scrollTop;
        return (
          state.isActive &&
            (filteredEmojis.size > 0
              ? ((transform = 'scale(1)'),
                (transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
              : ((transform = 'scale(0)'),
                (transition = 'all 0.35s cubic-bezier(.3,1,.2,1)'))),
          {
            left: left + 'px',
            top: top + 'px',
            transform: transform,
            transformOrigin: '1em 0%',
            transition: transition,
          }
        );
      }
      function emojiList_extends() {
        return (emojiList_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var emojiList = {
        setPriorityList: function setPriorityList(newPriorityList) {
          this.list = (function newEmojiListWithOutPriorityList(priorityList) {
            var list = {};
            for (var key in joypixels_default.a.emojiList)
              priorityList.hasOwnProperty(key) ||
                (list[key] = [joypixels_default.a.emojiList[key].uc_base]);
            return emojiList_extends({}, priorityList, list);
          })(newPriorityList);
        },
        list: {},
      };
      emojiList.setPriorityList({
        ':thumbsup:': ['1f44d'],
        ':smile:': ['1f604'],
        ':heart:': ['2764-fe0f', '2764'],
        ':ok_hand:': ['1f44c'],
        ':joy:': ['1f602'],
        ':tada:': ['1f389'],
        ':see_no_evil:': ['1f648'],
        ':raised_hands:': ['1f64c'],
        ':100:': ['1f4af'],
      });
      var utils_emojiList = emojiList,
        defaultTheme = {
          emoji: 'e1g1wugw',
          emojiSuggestions: 'esyutjr',
          emojiSuggestionsEntry: 'e1eijkox',
          emojiSuggestionsEntryFocused: 'e1adbvmt',
          emojiSuggestionsEntryText: 'e13wg9oj',
          emojiSuggestionsEntryIcon: 'e1w5jrn9',
          emojiSelect: 'e183m4hm',
          emojiSelectButton: 'e8k2yoa',
          emojiSelectButtonPressed: 'e13wqaj6',
          emojiSelectPopoverScrollbarOuter: 'ec6zxdw',
          emojiSelectPopover: 'ejr02pv',
          emojiSelectPopoverClosed: 'e6amujp',
          emojiSelectPopoverTitle: 'e16zneum',
          emojiSelectPopoverGroups: 'e1kg9q3n',
          emojiSelectPopoverGroup: 'e1m341vm',
          emojiSelectPopoverGroupTitle: 'e19xmvdb',
          emojiSelectPopoverGroupList: 'e13arc1',
          emojiSelectPopoverGroupItem: 'e6nwac2',
          emojiSelectPopoverToneSelect: 'e3h4qvg',
          emojiSelectPopoverToneSelectList: 'e1129lxj',
          emojiSelectPopoverToneSelectItem: 'eug7aee',
          emojiSelectPopoverEntry: 'eyoq5wq',
          emojiSelectPopoverEntryFocused: 'e1eigyu0',
          emojiSelectPopoverEntryIcon: 'e11mkpma',
          emojiSelectPopoverNav: 'e1cibj9i',
          emojiSelectPopoverNavItem: 'e2bpndj',
          emojiSelectPopoverNavEntry: 'e1qma4nk',
          emojiSelectPopoverNavEntryActive: 'e1q5rpho',
          emojiSelectPopoverScrollbar: 'e17si09n',
          emojiSelectPopoverScrollbarThumb: 'e1duapnp',
        };
      function JoyPixelEmojiImage(_ref) {
        var _$exec,
          emoji = _ref.emoji,
          theme = _ref.theme,
          imgTag = Object(joypixels.toImage)(emoji),
          path =
            null == (_$exec = /src="(.*)"/.exec(imgTag)) ? void 0 : _$exec[1];
        return react_default.a.createElement('img', {
          src: path,
          className: theme.emojiSelectPopoverEntryIcon,
          title: emoji,
          draggable: !1,
          role: 'presentation',
        });
      }
      __webpack_require__(951);
      try {
        (JoyPixelEmojiImage.displayName = 'JoyPixelEmojiImage'),
          (JoyPixelEmojiImage.__docgenInfo = {
            description: '',
            displayName: 'JoyPixelEmojiImage',
            props: {
              emoji: {
                defaultValue: null,
                description: '',
                name: 'emoji',
                required: !0,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/Emoji/JoyPixelEmojiImage.tsx#JoyPixelEmojiImage'
            ] = {
              docgenInfo: JoyPixelEmojiImage.__docgenInfo,
              name: 'JoyPixelEmojiImage',
              path:
                'packages/emoji/src/components/Emoji/JoyPixelEmojiImage.tsx#JoyPixelEmojiImage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function NativeEmojiImage(_ref) {
        var emoji = _ref.emoji;
        return react_default.a.createElement(
          'span',
          { title: emoji },
          Object(joypixels.shortnameToUnicode)(emoji)
        );
      }
      try {
        (NativeEmojiImage.displayName = 'NativeEmojiImage'),
          (NativeEmojiImage.__docgenInfo = {
            description: '',
            displayName: 'NativeEmojiImage',
            props: {
              emoji: {
                defaultValue: null,
                description: '',
                name: 'emoji',
                required: !0,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/Emoji/NativeEmojiImage.tsx#NativeEmojiImage'
            ] = {
              docgenInfo: NativeEmojiImage.__docgenInfo,
              name: 'NativeEmojiImage',
              path:
                'packages/emoji/src/components/Emoji/NativeEmojiImage.tsx#NativeEmojiImage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function NativeEmojiInlineText(_ref) {
        var decoratedText = _ref.decoratedText,
          children = _ref.children;
        return react_default.a.createElement(
          'span',
          { title: Object(joypixels.toShort)(decoratedText) },
          children
        );
      }
      try {
        (NativEmojiInlineText.displayName = 'NativEmojiInlineText'),
          (NativEmojiInlineText.__docgenInfo = {
            description: '',
            displayName: 'NativEmojiInlineText',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              decoratedText: {
                defaultValue: null,
                description: '',
                name: 'decoratedText',
                required: !0,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/Emoji/NativEmojiInlineText.tsx#NativEmojiInlineText'
            ] = {
              docgenInfo: NativEmojiInlineText.__docgenInfo,
              name: 'NativEmojiInlineText',
              path:
                'packages/emoji/src/components/Emoji/NativEmojiInlineText.tsx#NativEmojiInlineText',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var clsx_m = __webpack_require__(8);
      function JoyPixelEmojiInlineText(_ref) {
        var _$exec,
          decoratedText = _ref.decoratedText,
          theme = _ref.theme,
          children = _ref.children,
          className = _ref.className,
          shortName = Object(joypixels.toShort)(decoratedText),
          imgTag = Object(joypixels.shortnameToImage)(shortName),
          path =
            null == (_$exec = /src="(.*)"/.exec(imgTag)) ? void 0 : _$exec[1];
        if (!path)
          return react_default.a.createElement(
            NativeEmojiInlineText,
            { decoratedText: decoratedText, theme: theme },
            children
          );
        var backgroundImage = 'url(' + path + ')',
          combinedClassName = Object(clsx_m.a)(theme.emoji, className);
        return react_default.a.createElement(
          'span',
          {
            className: combinedClassName,
            title: shortName,
            style: { backgroundImage: backgroundImage },
          },
          children
        );
      }
      try {
        (JoyPixelEmojiInlineText.displayName = 'JoyPixelEmojiInlineText'),
          (JoyPixelEmojiInlineText.__docgenInfo = {
            description: '',
            displayName: 'JoyPixelEmojiInlineText',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'EmojiPluginTheme' },
              },
              decoratedText: {
                defaultValue: null,
                description: '',
                name: 'decoratedText',
                required: !0,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/emoji/src/components/Emoji/JoyPixelEmojiInlineText.tsx#JoyPixelEmojiInlineText'
            ] = {
              docgenInfo: JoyPixelEmojiInlineText.__docgenInfo,
              name: 'JoyPixelEmojiInlineText',
              path:
                'packages/emoji/src/components/Emoji/JoyPixelEmojiInlineText.tsx#JoyPixelEmojiInlineText',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var escapedSearch,
          callbacks = {
            keyBindingFn: void 0,
            handleKeyCommand: void 0,
            handleReturn: void 0,
            onChange: void 0,
          },
          ariaProps = {
            ariaHasPopup: 'false',
            ariaExpanded: !1,
            ariaOwneeID: void 0,
            ariaActiveDescendantID: void 0,
          },
          searches = Object(immutable.Map)(),
          clientRectFunctions = Object(immutable.Map)(),
          store = {
            getEditorState: void 0,
            setEditorState: void 0,
            getPortalClientRect: function getPortalClientRect(offsetKey) {
              var _clientRectFunctions$;
              return null ==
                (_clientRectFunctions$ = clientRectFunctions.get(offsetKey))
                ? void 0
                : _clientRectFunctions$();
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
              escapedSearch = void 0;
            },
            register: function register(offsetKey) {
              searches = searches.set(offsetKey, offsetKey);
            },
            updatePortalClientRect: function updatePortalClientRect(
              offsetKey,
              func
            ) {
              clientRectFunctions = clientRectFunctions.set(offsetKey, func);
            },
            unregister: function unregister(offsetKey) {
              (searches = searches.delete(offsetKey)),
                (clientRectFunctions = clientRectFunctions.delete(offsetKey));
            },
          },
          _config = config,
          _config$theme = _config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme,
          _config$positionSugge = _config.positionSuggestions,
          positionSuggestions =
            void 0 === _config$positionSugge
              ? positionSuggestions_positionSuggestions
              : _config$positionSugge,
          priorityList = _config.priorityList,
          selectGroups = _config.selectGroups,
          selectButtonContent = _config.selectButtonContent,
          toneSelectOpenDelay = _config.toneSelectOpenDelay,
          useNativeArt = _config.useNativeArt,
          _config$emojiImage = _config.emojiImage,
          emojiImage =
            void 0 === _config$emojiImage
              ? useNativeArt
                ? NativeEmojiImage
                : JoyPixelEmojiImage
              : _config$emojiImage,
          _config$emojiInlineTe = _config.emojiInlineText,
          emojiInlineText =
            void 0 === _config$emojiInlineTe
              ? useNativeArt
                ? NativeEmojiInlineText
                : JoyPixelEmojiInlineText
              : _config$emojiInlineTe;
        priorityList && utils_emojiList.setPriorityList(priorityList);
        var suggestionsProps = {
            ariaProps: ariaProps,
            callbacks: callbacks,
            theme: theme,
            store: store,
            positionSuggestions: positionSuggestions,
            shortNames: Object(immutable.List)(
              keys_default()(utils_emojiList.list)
            ),
            emojiImage: emojiImage,
          },
          selectProps = {
            theme: theme,
            store: store,
            selectGroups: selectGroups,
            selectButtonContent: selectButtonContent,
            toneSelectOpenDelay: toneSelectOpenDelay,
            emojiImage: emojiImage,
          };
        return {
          EmojiSuggestions: function DecoratedEmojiSuggestions(props) {
            return react_default.a.createElement(
              EmojiSuggestions_EmojiSuggestions,
              src_extends({}, props, suggestionsProps)
            );
          },
          EmojiSelect: function DecoratedEmojiSelect(props) {
            return react_default.a.createElement(
              EmojiSelect_EmojiSelect,
              src_extends({}, props, selectProps)
            );
          },
          decorators: [
            {
              strategy: emojiStrategy,
              component: function DecoratedEmoji(props) {
                return react_default.a.createElement(
                  Emoji,
                  src_extends({}, props, {
                    theme: theme,
                    emojiInlineText: emojiInlineText,
                  })
                );
              },
            },
            {
              strategy: emojiSuggestionsStrategy,
              component: function DecoratedEmojiSuggestionsPortal(props) {
                return react_default.a.createElement(
                  EmojiSuggestionsPortal,
                  src_extends({}, props, { store: store })
                );
              },
            },
          ],
          getAccessibilityProps: function getAccessibilityProps() {
            return {
              role: 'combobox',
              ariaAutoComplete: 'list',
              ariaHasPopup: ariaProps.ariaHasPopup,
              ariaExpanded: ariaProps.ariaExpanded,
              ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
              ariaOwneeID: ariaProps.ariaOwneeID,
            };
          },
          initialize: function initialize(_ref) {
            var getEditorState = _ref.getEditorState,
              setEditorState = _ref.setEditorState;
            (store.getEditorState = getEditorState),
              (store.setEditorState = setEditorState);
          },
          keyBindingFn: function keyBindingFn(keyboardEvent) {
            return (
              callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent)
            );
          },
          handleReturn: function handleReturn(keyboardEvent) {
            return (
              callbacks.handleReturn && callbacks.handleReturn(keyboardEvent)
            );
          },
          onChange: function onChange(editorState) {
            var newEditorState = (function attachImmutableEntitiesToEmojis(
              editorState
            ) {
              var contentState = editorState.getCurrentContent(),
                blocks = contentState.getBlockMap(),
                newContentState = contentState;
              return (
                blocks.forEach(function (block) {
                  if (block) {
                    var plainText = block.getText();
                    build_default()(
                      unicodeRegex,
                      block,
                      function addEntityToEmoji(start, end) {
                        var existingEntityKey = block.getEntityAt(start);
                        if (existingEntityKey) {
                          var entity = newContentState.getEntity(
                            existingEntityKey
                          );
                          if (entity && 'emoji' === entity.getType()) return;
                        }
                        var selection = Draft.SelectionState.createEmpty(
                            block.getKey()
                          )
                            .set('anchorOffset', start)
                            .set('focusOffset', end),
                          emojiText = plainText.substring(start, end),
                          entityKey = newContentState
                            .createEntity('emoji', 'IMMUTABLE', {
                              emojiUnicode: emojiText,
                            })
                            .getLastCreatedEntityKey();
                        newContentState = Draft.Modifier.replaceText(
                          newContentState,
                          selection,
                          emojiText,
                          void 0,
                          entityKey
                        );
                      }
                    );
                  }
                }),
                newContentState.equals(contentState)
                  ? editorState
                  : Draft.EditorState.push(
                      editorState,
                      newContentState,
                      'change-block-data'
                    )
              );
            })(editorState);
            if (
              !newEditorState
                .getCurrentContent()
                .equals(editorState.getCurrentContent())
            ) {
              var selection = editorState.getSelection();
              newEditorState = Draft.EditorState.forceSelection(
                newEditorState,
                selection
              );
            }
            return callbacks.onChange
              ? callbacks.onChange(newEditorState)
              : newEditorState;
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'EmojiPluginTheme' },
              },
              positionSuggestions: {
                defaultValue: null,
                description: '',
                name: 'positionSuggestions',
                required: !1,
                type: {
                  name: '((arg: PositionSuggestionsParams) => CSSProperties)',
                },
              },
              priorityList: {
                defaultValue: null,
                description: '',
                name: 'priorityList',
                required: !1,
                type: { name: '{ [k: string]: string[]; }' },
              },
              selectGroups: {
                defaultValue: null,
                description: '',
                name: 'selectGroups',
                required: !1,
                type: { name: 'EmojiSelectGroup[]' },
              },
              selectButtonContent: {
                defaultValue: null,
                description: '',
                name: 'selectButtonContent',
                required: !1,
                type: { name: 'ReactNode' },
              },
              toneSelectOpenDelay: {
                defaultValue: null,
                description: '',
                name: 'toneSelectOpenDelay',
                required: !1,
                type: { name: 'number' },
              },
              useNativeArt: {
                defaultValue: null,
                description: '',
                name: 'useNativeArt',
                required: !1,
                type: { name: 'boolean' },
              },
              emojiImage: {
                defaultValue: null,
                description: '',
                name: 'emojiImage',
                required: !1,
                type: {
                  name:
                    'ComponentClass<EmojiImageProps, any> | FunctionComponent<EmojiImageProps>',
                },
              },
              emojiInlineText: {
                defaultValue: null,
                description: '',
                name: 'emojiInlineText',
                required: !1,
                type: {
                  name:
                    'ComponentClass<EmojiInlineTextProps, any> | FunctionComponent<EmojiInlineTextProps>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/emoji/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/emoji/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        clsx_m = __webpack_require__(8);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Hashtag(props) {
        var _props$theme = props.theme,
          theme = void 0 === _props$theme ? {} : _props$theme,
          className = props.className,
          otherProps =
            (props.decoratedText,
            props.dir,
            props.entityKey,
            props.getEditorState,
            props.offsetKey,
            props.setEditorState,
            props.contentState,
            props.blockKey,
            (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(props, [
              'theme',
              'className',
              'decoratedText',
              'dir',
              'entityKey',
              'getEditorState',
              'offsetKey',
              'setEditorState',
              'contentState',
              'blockKey',
            ])),
          combinedClassName = Object(clsx_m.a)(theme.hashtag, className);
        return react_default.a.createElement(
          'span',
          _extends({}, otherProps, { className: combinedClassName })
        );
      }
      try {
        (Hashtag.displayName = 'Hashtag'),
          (Hashtag.__docgenInfo = {
            description: '',
            displayName: 'Hashtag',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'HashtagPluginTheme' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              decoratedText: {
                defaultValue: null,
                description: '',
                name: 'decoratedText',
                required: !1,
                type: { name: 'unknown' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'unknown' },
              },
              entityKey: {
                defaultValue: null,
                description: '',
                name: 'entityKey',
                required: !1,
                type: { name: 'unknown' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !1,
                type: { name: 'unknown' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !1,
                type: { name: 'unknown' },
              },
              setEditorState: {
                defaultValue: null,
                description: '',
                name: 'setEditorState',
                required: !1,
                type: { name: 'unknown' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !1,
                type: { name: 'unknown' },
              },
              blockKey: {
                defaultValue: null,
                description: '',
                name: 'blockKey',
                required: !1,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/hashtag/src/Hashtag.tsx#Hashtag'
            ] = {
              docgenInfo: Hashtag.__docgenInfo,
              name: 'Hashtag',
              path: 'packages/hashtag/src/Hashtag.tsx#Hashtag',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var unicodeLettersAndMarks = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D/
          .source,
        unicodeNumbers = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/
          .source,
        hashtagSpecialChars = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\u00b7/
          .source,
        regexes = {};
      function regexSupplant(regex, flags) {
        var regExpString;
        return (
          (flags = flags || ''),
          'string' != typeof regex
            ? (regex.global && flags.indexOf('g') < 0 && (flags += 'g'),
              regex.ignoreCase && flags.indexOf('i') < 0 && (flags += 'i'),
              regex.multiline && flags.indexOf('m') < 0 && (flags += 'm'),
              (regExpString = regex.source))
            : (regExpString = regex),
          new RegExp(
            regExpString.replace(/#\{(\w+)\}/g, function (match, name) {
              var newRegex = regexes[name] || '';
              return 'string' != typeof newRegex ? newRegex.source : newRegex;
            }),
            flags
          )
        );
      }
      (regexes.hashSigns = /[#＃]/),
        (regexes.hashtagAlpha = new RegExp('[' + unicodeLettersAndMarks + ']')),
        (regexes.hashtagAlphaNumeric = new RegExp(
          '[' +
            unicodeLettersAndMarks +
            unicodeNumbers +
            hashtagSpecialChars +
            ']'
        )),
        (regexes.endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/)),
        (regexes.hashtagBoundary = new RegExp(
          '(?:^|$|[^&' +
            unicodeLettersAndMarks +
            unicodeNumbers +
            hashtagSpecialChars +
            '])'
        )),
        (regexes.validHashtag = regexSupplant(
          /(#{hashtagBoundary})(#{hashSigns})(?!\ufe0f|\u20e3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi
        ));
      var hashtagRegex = regexes;
      var hashtagStrategy = function (contentBlock, callback) {
          (function extractHashtags_extractHashtagsWithIndices(text) {
            if (!text || !text.match(hashtagRegex.hashSigns)) return [];
            var tags = [];
            return (
              text.replace(
                hashtagRegex.validHashtag,
                function replacer(
                  match,
                  before,
                  hash,
                  hashText,
                  offset,
                  chunk
                ) {
                  if (
                    chunk
                      .slice(offset + match.length)
                      .match(hashtagRegex.endHashtagMatch)
                  )
                    return '';
                  var startPosition = offset + before.length,
                    endPosition = startPosition + hashText.length + 1;
                  return (
                    tags.push({
                      hashtag: hashText,
                      indices: [startPosition, endPosition],
                    }),
                    ''
                  );
                }
              ),
              tags
            );
          })(contentBlock.getText()).forEach(function (hashtag) {
            callback(hashtag.indices[0], hashtag.indices[1]);
          });
        },
        defaultTheme = { hashtag: 'hngfxw3' };
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(980);
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var theme = config.theme ? config.theme : defaultTheme;
        return {
          decorators: [
            {
              strategy: hashtagStrategy,
              component: function DecoratedHashtag(props) {
                return react_default.a.createElement(
                  Hashtag,
                  src_extends({}, props, { theme: theme })
                );
              },
            },
          ],
        };
      };
      try {
        (extractHashtagsWithIndices.displayName = 'extractHashtagsWithIndices'),
          (extractHashtagsWithIndices.__docgenInfo = {
            description: '',
            displayName: 'extractHashtagsWithIndices',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/hashtag/src/index.tsx#extractHashtagsWithIndices'
            ] = {
              docgenInfo: extractHashtagsWithIndices.__docgenInfo,
              name: 'extractHashtagsWithIndices',
              path: 'packages/hashtag/src/index.tsx#extractHashtagsWithIndices',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'HashtagPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/hashtag/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/hashtag/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        clsx_m = __webpack_require__(8),
        linkify_it = __webpack_require__(188),
        linkify_it_default = __webpack_require__.n(linkify_it),
        tlds = __webpack_require__(119);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var linkify = linkify_it_default()();
      function Link(props) {
        var _props$decoratedText = props.decoratedText,
          decoratedText =
            void 0 === _props$decoratedText ? '' : _props$decoratedText,
          _props$theme = props.theme,
          theme = void 0 === _props$theme ? {} : _props$theme,
          _props$target = props.target,
          target = void 0 === _props$target ? '_self' : _props$target,
          _props$rel = props.rel,
          rel = void 0 === _props$rel ? 'noreferrer noopener' : _props$rel,
          className = props.className,
          component = props.component,
          otherProps =
            (props.dir,
            props.entityKey,
            props.getEditorState,
            props.offsetKey,
            props.setEditorState,
            props.contentState,
            props.blockKey,
            props.start,
            props.end,
            (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(props, [
              'decoratedText',
              'theme',
              'target',
              'rel',
              'className',
              'component',
              'dir',
              'entityKey',
              'getEditorState',
              'offsetKey',
              'setEditorState',
              'contentState',
              'blockKey',
              'start',
              'end',
            ])),
          combinedClassName = Object(clsx_m.a)(
            null == theme ? void 0 : theme.link,
            className
          ),
          links = linkify.match(decoratedText),
          linkProps = _extends({}, otherProps, {
            href: links && links[0] ? links[0].url : '',
            target: target,
            rel: rel,
            className: combinedClassName,
          });
        return component
          ? react_default.a.createElement(component, linkProps)
          : react_default.a.createElement('a', linkProps);
      }
      linkify.tlds(tlds);
      try {
        (Link.displayName = 'Link'),
          (Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
            props: {
              decoratedText: {
                defaultValue: null,
                description: '',
                name: 'decoratedText',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'LinkifyPluginTheme' },
              },
              component: {
                defaultValue: null,
                description: '',
                name: 'component',
                required: !1,
                type: {
                  name:
                    'ComponentClass<ComponentProps, any> | FunctionComponent<ComponentProps>',
                },
              },
              target: {
                defaultValue: null,
                description: '',
                name: 'target',
                required: !1,
                type: { name: 'string' },
              },
              rel: {
                defaultValue: null,
                description: '',
                name: 'rel',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              entityKey: {
                defaultValue: null,
                description: '',
                name: 'entityKey',
                required: !1,
                type: { name: 'unknown' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !1,
                type: { name: 'unknown' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !1,
                type: { name: 'unknown' },
              },
              setEditorState: {
                defaultValue: null,
                description: '',
                name: 'setEditorState',
                required: !1,
                type: { name: 'unknown' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !1,
                type: { name: 'unknown' },
              },
              blockKey: {
                defaultValue: null,
                description: '',
                name: 'blockKey',
                required: !1,
                type: { name: 'unknown' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'unknown' },
              },
              start: {
                defaultValue: null,
                description: '',
                name: 'start',
                required: !1,
                type: { name: 'unknown' },
              },
              end: {
                defaultValue: null,
                description: '',
                name: 'end',
                required: !1,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/linkify/src/Link/Link.tsx#Link'
            ] = {
              docgenInfo: Link.__docgenInfo,
              name: 'Link',
              path: 'packages/linkify/src/Link/Link.tsx#Link',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var extractLinks_linkify = linkify_it_default()();
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it;
        if ('undefined' == typeof Symbol || null == o[Symbol.iterator]) {
          if (
            Array.isArray(o) ||
            (it = (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              'Object' === n && o.constructor && (n = o.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(o);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(o, minLen);
            })(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0;
            return function () {
              return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        return (it = o[Symbol.iterator]()).next.bind(it);
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      extractLinks_linkify.tlds(tlds);
      var src_linkStrategy = function linkStrategy(contentBlock, callback) {
          var links = (function extractLinks_extractLinks(text) {
            return extractLinks_linkify.match(text);
          })(contentBlock.getText());
          if (links)
            for (
              var _step, _iterator = _createForOfIteratorHelperLoose(links);
              !(_step = _iterator()).done;

            ) {
              var link = _step.value;
              callback(link.index, link.lastIndex);
            }
        },
        defaultTheme = { link: 'lxvs42t' };
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(997);
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var _config = config,
          component = _config.component,
          _config$theme = _config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme,
          _config$target = _config.target,
          target = void 0 === _config$target ? '_self' : _config$target,
          _config$rel = _config.rel,
          rel = void 0 === _config$rel ? 'noreferrer noopener' : _config$rel;
        return {
          decorators: [
            {
              strategy: src_linkStrategy,
              component: function DecoratedLink(props) {
                return react_default.a.createElement(
                  Link,
                  src_extends({}, props, {
                    theme: theme,
                    target: target,
                    rel: rel,
                    component: component,
                  })
                );
              },
            },
          ],
        };
      };
      try {
        (extractLinks.displayName = 'extractLinks'),
          (extractLinks.__docgenInfo = {
            description: '',
            displayName: 'extractLinks',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/linkify/src/index.tsx#extractLinks'
            ] = {
              docgenInfo: extractLinks.__docgenInfo,
              name: 'extractLinks',
              path: 'packages/linkify/src/index.tsx#extractLinks',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              component: {
                defaultValue: null,
                description: '',
                name: 'component',
                required: !1,
                type: {
                  name:
                    'ComponentClass<ComponentProps, any> | FunctionComponent<ComponentProps>',
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'LinkifyPluginTheme' },
              },
              target: {
                defaultValue: null,
                description: '',
                name: 'target',
                required: !1,
                type: { name: 'string' },
              },
              rel: {
                defaultValue: null,
                description: '',
                name: 'rel',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/linkify/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/linkify/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        createStore = __webpack_require__(408),
        ItalicButton = __webpack_require__(1082),
        BoldButton = __webpack_require__(1083),
        UnderlineButton = __webpack_require__(1084),
        CodeButton = __webpack_require__(1085),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types);
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Toolbar_Toolbar = (function (_React$Component) {
        function Toolbar() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _React$Component.call.apply(
                _React$Component,
                [this].concat(args)
              ) || this).state = { overrideContent: void 0 }),
            (_this.onOverrideContent = function (overrideContent) {
              return _this.setState({ overrideContent: overrideContent });
            }),
            (_this.renderDefaultButtons = function (externalProps) {
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(ItalicButton.a, externalProps),
                react_default.a.createElement(BoldButton.a, externalProps),
                react_default.a.createElement(UnderlineButton.a, externalProps),
                react_default.a.createElement(CodeButton.a, externalProps)
              );
            }),
            _this
          );
        }
        return (
          (function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(Toolbar, _React$Component),
          (Toolbar.prototype.render = function render() {
            var _this$props = this.props,
              theme = _this$props.theme,
              store = _this$props.store,
              OverrideContent = this.state.overrideContent,
              childrenProps = {
                theme: theme.buttonStyles,
                getEditorState: store.getItem('getEditorState'),
                setEditorState: store.getItem('setEditorState'),
                onOverrideContent: this.onOverrideContent,
              };
            return react_default.a.createElement(
              'div',
              { className: theme.toolbarStyles.toolbar },
              OverrideContent
                ? react_default.a.createElement(OverrideContent, childrenProps)
                : (this.props.children || this.renderDefaultButtons)(
                    childrenProps
                  )
            );
          }),
          Toolbar
        );
      })(react_default.a.Component);
      Toolbar_Toolbar.propTypes = { children: prop_types_default.a.func };
      try {
        (Toolbar_Toolbar.displayName = 'Toolbar'),
          (Toolbar_Toolbar.__docgenInfo = {
            description: '',
            displayName: 'Toolbar',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'StaticToolBarPluginStore' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'StaticToolbarPluginTheme' },
              },
              overrideContent: {
                defaultValue: null,
                description: '',
                name: 'overrideContent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<ToolbarChildrenProps, any> | FunctionComponent<ToolbarChildrenProps>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/static-toolbar/src/components/Toolbar/index.tsx#Toolbar'
            ] = {
              docgenInfo: Toolbar_Toolbar.__docgenInfo,
              name: 'Toolbar',
              path:
                'packages/static-toolbar/src/components/Toolbar/index.tsx#Toolbar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = {
        buttonStyles: {
          buttonWrapper: 'bi09khh',
          button: 'bc4rxid',
          active: 'akzb7t5',
        },
        toolbarStyles: { toolbar: 't16lpgj' },
      };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(1029);
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var store = Object(createStore.a)(),
          _config$theme = config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme;
        return {
          initialize: function initialize(_ref) {
            var getEditorState = _ref.getEditorState,
              setEditorState = _ref.setEditorState;
            store.updateItem('getEditorState', getEditorState),
              store.updateItem('setEditorState', setEditorState);
          },
          onChange: function onChange(editorState) {
            return (
              store.updateItem('selection', editorState.getSelection()),
              editorState
            );
          },
          Toolbar: function StaticToolbar(props) {
            return react_default.a.createElement(
              Toolbar_Toolbar,
              _extends({}, props, { store: store, theme: theme })
            );
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'StaticToolbarPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/static-toolbar/src/index.tsx#src'
            ] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/static-toolbar/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(996);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        createStore = __webpack_require__(408),
        react_dom = __webpack_require__(87),
        react_dom_default = __webpack_require__.n(react_dom);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var src_createDecorator = function (_ref) {
        var store = _ref.store;
        return function (WrappedComponent) {
          var _class, _temp;
          return (
            (_temp = _class = (function (_Component) {
              function BlockAlignmentDecorator() {
                for (
                  var _this,
                    _len = arguments.length,
                    args = new Array(_len),
                    _key = 0;
                  _key < _len;
                  _key++
                )
                  args[_key] = arguments[_key];
                return (
                  ((_this =
                    _Component.call.apply(_Component, [this].concat(args)) ||
                    this).componentDidUpdate = function () {
                    if (
                      _this.props.blockProps.isFocused &&
                      _this.props.blockProps.isCollapsedSelection
                    ) {
                      var boundingRect = react_dom_default.a
                        .findDOMNode(_assertThisInitialized(_this))
                        .getBoundingClientRect();
                      store.updateItem(
                        'setAlignment',
                        _this.props.blockProps.setAlignment
                      ),
                        store.updateItem(
                          'alignment',
                          _this.props.blockProps.alignment
                        ),
                        store.updateItem('boundingRect', boundingRect),
                        store.updateItem(
                          'visibleBlock',
                          _this.props.block.getKey()
                        );
                    } else
                      store.getItem('visibleBlock') ===
                        _this.props.block.getKey() &&
                        store.updateItem('visibleBlock', null);
                  }),
                  _this
                );
              }
              !(function _inheritsLoose(subClass, superClass) {
                (subClass.prototype = Object.create(superClass.prototype)),
                  (subClass.prototype.constructor = subClass),
                  _setPrototypeOf(subClass, superClass);
              })(BlockAlignmentDecorator, _Component);
              var _proto = BlockAlignmentDecorator.prototype;
              return (
                (_proto.componentWillUnmount = function componentWillUnmount() {
                  store.updateItem('visibleBlock', null);
                }),
                (_proto.render = function render() {
                  var _this$props = this.props,
                    blockProps = _this$props.blockProps,
                    style = _this$props.style,
                    elementProps = (function _objectWithoutPropertiesLoose(
                      source,
                      excluded
                    ) {
                      if (null == source) return {};
                      var key,
                        i,
                        target = {},
                        sourceKeys = Object.keys(source);
                      for (i = 0; i < sourceKeys.length; i++)
                        (key = sourceKeys[i]),
                          excluded.indexOf(key) >= 0 ||
                            (target[key] = source[key]);
                      return target;
                    })(_this$props, ['blockProps', 'style']),
                    alignment = blockProps.alignment,
                    newStyle = style;
                  return (
                    'left' === alignment
                      ? (newStyle = _extends({}, style, { float: 'left' }))
                      : 'right' === alignment
                      ? (newStyle = _extends({}, style, { float: 'right' }))
                      : 'center' === alignment &&
                        (newStyle = _extends({}, style, {
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          display: 'block',
                        })),
                    react_default.a.createElement(
                      WrappedComponent,
                      _extends({}, elementProps, {
                        blockProps: blockProps,
                        style: newStyle,
                      })
                    )
                  );
                }),
                BlockAlignmentDecorator
              );
            })(react.Component)),
            (_class.displayName =
              'Alignment(' +
              (function getDisplayName(WrappedComponent) {
                var component =
                  WrappedComponent.WrappedComponent || WrappedComponent;
                return component.displayName || component.name || 'Component';
              })(WrappedComponent) +
              ')'),
            (_class.WrappedComponent =
              WrappedComponent.WrappedComponent || WrappedComponent),
            _temp
          );
        };
      };
      try {
        (createDecorator.displayName = 'createDecorator'),
          (createDecorator.__docgenInfo = {
            description: '',
            displayName: 'createDecorator',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'AlignmentPluginStore' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/alignment/src/createDecorator.tsx#createDecorator'
            ] = {
              docgenInfo: createDecorator.__docgenInfo,
              name: 'createDecorator',
              path:
                'packages/alignment/src/createDecorator.tsx#createDecorator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var clsx_m = __webpack_require__(8);
      function createBlockAlignmentButton(_ref) {
        var alignment = _ref.alignment,
          children = _ref.children;
        return function BlockAlignmentButton(props) {
          var theme = props.theme,
            className = (function isActive() {
              return props.alignment === alignment;
            })()
              ? Object(clsx_m.a)(theme.button, theme.active)
              : theme.button;
          return react_default.a.createElement(
            'div',
            {
              className: theme.buttonWrapper,
              onMouseDown: function preventBubblingUp(event) {
                event.preventDefault();
              },
            },
            react_default.a.createElement('button', {
              className: className,
              onClick: function activate(event) {
                event.preventDefault(),
                  props.setAlignment({ alignment: alignment });
              },
              type: 'button',
              children: children,
            })
          );
        };
      }
      try {
        (createBlockAlignmentButton.displayName = 'createBlockAlignmentButton'),
          (createBlockAlignmentButton.__docgenInfo = {
            description: '',
            displayName: 'createBlockAlignmentButton',
            props: {
              alignment: {
                defaultValue: null,
                description: '',
                name: 'alignment',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/buttons/src/utils/createBlockAlignmentButton.tsx#createBlockAlignmentButton'
            ] = {
              docgenInfo: createBlockAlignmentButton.__docgenInfo,
              name: 'createBlockAlignmentButton',
              path:
                'packages/buttons/src/utils/createBlockAlignmentButton.tsx#createBlockAlignmentButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var AlignBlockDefaultButton = createBlockAlignmentButton({
          alignment: 'default',
          children: react_default.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            react_default.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z',
            }),
            react_default.a.createElement('path', {
              d: 'M0 0h24v24H0z',
              fill: 'none',
            })
          ),
        }),
        AlignBlockLeftButton = createBlockAlignmentButton({
          alignment: 'left',
          children: react_default.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            react_default.a.createElement('path', {
              d:
                'M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z',
            }),
            react_default.a.createElement('path', {
              d: 'M0 0h24v24H0z',
              fill: 'none',
            })
          ),
        }),
        AlignBlockCenterButton = createBlockAlignmentButton({
          alignment: 'center',
          children: react_default.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            react_default.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z',
            }),
            react_default.a.createElement('path', {
              d: 'M0 0h24v24H0z',
              fill: 'none',
            })
          ),
        }),
        AlignBlockRightButton = createBlockAlignmentButton({
          alignment: 'right',
          children: react_default.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            react_default.a.createElement('path', {
              d:
                'M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z',
            }),
            react_default.a.createElement('path', {
              d: 'M0 0h24v24H0z',
              fill: 'none',
            })
          ),
        });
      function AlignmentTool(props) {
        var _useState = Object(react.useState)({}),
          position = _useState[0],
          setPosition = _useState[1],
          _useState2 = Object(react.useState)(null),
          alignment = _useState2[0],
          setAlignment = _useState2[1],
          toolbar = Object(react.useRef)(null),
          ref = Object(react.useRef)(),
          onVisibilityChanged = Object(react.useCallback)(function (
            visibleBlock
          ) {
            var clear = setTimeout(function () {
              var newPosition,
                boundingRect = props.store.getItem('boundingRect');
              if (visibleBlock && boundingRect) {
                var relativeParent = (function getRelativeParent(element) {
                    return element
                      ? 'static' !==
                        window
                          .getComputedStyle(element)
                          .getPropertyValue('position')
                        ? element
                        : getRelativeParent(element.parentElement)
                      : null;
                  })(toolbar.current.parentElement),
                  toolbarHeight = toolbar.current.clientHeight,
                  relativeRect = relativeParent
                    ? relativeParent.getBoundingClientRect()
                    : document.body.getBoundingClientRect();
                newPosition = {
                  top: boundingRect.top - relativeRect.top - toolbarHeight,
                  left:
                    boundingRect.left -
                    relativeRect.left +
                    boundingRect.width / 2,
                  transform: 'translate(-50%) scale(1)',
                  transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                };
              } else newPosition = { transform: 'translate(-50%) scale(0)' };
              var newAlignment = props.store.getItem('alignment') || 'default';
              setAlignment(newAlignment),
                setPosition(newPosition),
                (ref.current = void 0);
            }, 0);
            ref.current = clear;
          },
          []),
          onAlignmentChange = Object(react.useCallback)(function (value) {
            value && setAlignment(value);
          }, []);
        Object(react.useEffect)(function () {
          return function () {
            ref.current && clearTimeout(ref.current);
          };
        }, []),
          Object(react.useEffect)(
            function () {
              return (
                props.store.subscribeToItem(
                  'visibleBlock',
                  onVisibilityChanged
                ),
                props.store.subscribeToItem('alignment', onAlignmentChange),
                function () {
                  props.store.unsubscribeFromItem(
                    'visibleBlock',
                    onVisibilityChanged
                  ),
                    props.store.unsubscribeFromItem(
                      'alignment',
                      onAlignmentChange
                    );
                }
              );
            },
            [onVisibilityChanged, onAlignmentChange]
          );
        var defaultButtons = [
            AlignBlockDefaultButton,
            AlignBlockLeftButton,
            AlignBlockCenterButton,
            AlignBlockRightButton,
          ],
          theme = props.theme;
        return react_default.a.createElement(
          'div',
          {
            className: theme.alignmentToolStyles.alignmentTool,
            style: position,
            ref: toolbar,
          },
          defaultButtons.map(function (Button, index) {
            return react_default.a.createElement(Button, {
              key: index,
              alignment: alignment,
              setAlignment: props.store.getItem('setAlignment'),
              theme: theme.buttonStyles,
            });
          })
        );
      }
      try {
        (AlignmentTool.displayName = 'AlignmentTool'),
          (AlignmentTool.__docgenInfo = {
            description: '',
            displayName: 'AlignmentTool',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'AlignmentPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'AlignmentPluginStore' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/alignment/src/AlignmentTool.tsx#AlignmentTool'
            ] = {
              docgenInfo: AlignmentTool.__docgenInfo,
              name: 'AlignmentTool',
              path: 'packages/alignment/src/AlignmentTool.tsx#AlignmentTool',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = {
        buttonStyles: {
          buttonWrapper: 'b1qfpj3o',
          button: 'bgspekh',
          active: 'autuw9p',
        },
        alignmentToolStyles: { alignmentTool: 'awlhfjh' },
      };
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(937);
      var src_createSetAlignment = function createSetAlignment(
        contentBlock,
        _ref
      ) {
        var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
        return function (data) {
          var entityKey = contentBlock.getEntityAt(0);
          if (entityKey) {
            var _editorState = getEditorState();
            _editorState
              .getCurrentContent()
              .mergeEntityData(entityKey, src_extends({}, data)),
              setEditorState(
                Draft.EditorState.forceSelection(
                  _editorState,
                  _editorState.getSelection()
                )
              );
          }
        };
      };
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var store = Object(createStore.a)({ isVisible: !1 }),
          _config$theme = config.theme,
          theme = void 0 === _config$theme ? defaultTheme : _config$theme;
        return {
          initialize: function initialize(_ref2) {
            var getReadOnly = _ref2.getReadOnly,
              getEditorState = _ref2.getEditorState,
              setEditorState = _ref2.setEditorState;
            store.updateItem('getReadOnly', getReadOnly),
              store.updateItem('getEditorState', getEditorState),
              store.updateItem('setEditorState', setEditorState);
          },
          decorator: src_createDecorator({ store: store }),
          blockRendererFn: function blockRendererFn(contentBlock, _ref3) {
            var getEditorState = _ref3.getEditorState,
              setEditorState = _ref3.setEditorState,
              entityKey = contentBlock.getEntityAt(0),
              contentState = getEditorState().getCurrentContent();
            return {
              props: {
                alignment:
                  (entityKey ? contentState.getEntity(entityKey).getData() : {})
                    .alignment || 'default',
                setAlignment: src_createSetAlignment(contentBlock, {
                  getEditorState: getEditorState,
                  setEditorState: setEditorState,
                }),
              },
            };
          },
          AlignmentTool: function DecoratedAlignmentTool() {
            return react_default.a.createElement(AlignmentTool, {
              store: store,
              theme: theme,
            });
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'AlignmentPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/alignment/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/alignment/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        immutable = __webpack_require__(3),
        Draft = __webpack_require__(1),
        addSticker = function (editorState, stickerId) {
          var insertionTargetSelection,
            insertionTargetBlock,
            currentContentState = editorState.getCurrentContent(),
            currentSelectionState = editorState.getSelection(),
            afterRemovalContentState = Draft.Modifier.removeRange(
              currentContentState,
              currentSelectionState,
              'backward'
            ),
            targetSelection = afterRemovalContentState.getSelectionAfter(),
            blockKeyForTarget = targetSelection.get('focusKey'),
            block = currentContentState.getBlockForKey(blockKeyForTarget),
            isEmptyBlock =
              0 === block.getLength() && null === block.getEntityAt(0),
            selectedFromStart = 0 === currentSelectionState.getStartOffset();
          isEmptyBlock || selectedFromStart
            ? ((insertionTargetSelection = targetSelection),
              (insertionTargetBlock = afterRemovalContentState))
            : (insertionTargetSelection = (insertionTargetBlock = Draft.Modifier.splitBlock(
                afterRemovalContentState,
                targetSelection
              )).getSelectionAfter());
          var newContentStateAfterSplit = Draft.Modifier.setBlockType(
              insertionTargetBlock,
              insertionTargetSelection,
              'sticker'
            ),
            entityKey = newContentStateAfterSplit
              .createEntity('sticker', 'IMMUTABLE', { id: stickerId })
              .getLastCreatedEntityKey(),
            charDataOfSticker = Draft.CharacterMetadata.create({
              entity: entityKey,
            }),
            fragmentArray = [
              new Draft.ContentBlock({
                key: Object(Draft.genKey)(),
                type: 'sticker',
                text: ' ',
                characterList: Object(immutable.List)(
                  Object(immutable.Repeat)(charDataOfSticker, 1)
                ),
              }),
              new Draft.ContentBlock({
                key: Object(Draft.genKey)(),
                type: 'unstyled',
                text: '',
                characterList: Object(immutable.List)(),
              }),
            ],
            fragment = Draft.BlockMapBuilder.createFromArray(fragmentArray),
            contentStateWithSticker = Draft.Modifier.replaceWithFragment(
              newContentStateAfterSplit,
              insertionTargetSelection,
              fragment
            ),
            newState = Draft.EditorState.push(
              editorState,
              contentStateWithSticker,
              'insert-fragment'
            );
          return Draft.EditorState.forceSelection(
            newState,
            contentStateWithSticker.getSelectionAfter()
          );
        },
        removeSticker = function (editorState, blockKey) {
          var targetRange,
            content = editorState.getCurrentContent(),
            newSelection = new Draft.SelectionState({
              anchorKey: blockKey,
              anchorOffset: 0,
              focusKey: blockKey,
              focusOffset: 0,
            }),
            afterKey = content.getKeyAfter(blockKey),
            afterBlock = content.getBlockForKey(afterKey);
          (targetRange =
            afterBlock &&
            'unstyled' === afterBlock.getType() &&
            0 === afterBlock.getLength() &&
            afterBlock === content.getBlockMap().last()
              ? new Draft.SelectionState({
                  anchorKey: blockKey,
                  anchorOffset: 0,
                  focusKey: afterKey,
                  focusOffset: 0,
                })
              : new Draft.SelectionState({
                  anchorKey: blockKey,
                  anchorOffset: 0,
                  focusKey: blockKey,
                  focusOffset: 1,
                })),
            (content = Draft.Modifier.setBlockType(
              content,
              targetRange,
              'unstyled'
            )),
            (content = Draft.Modifier.removeRange(
              content,
              targetRange,
              'backward'
            ));
          var newState = Draft.EditorState.push(
            editorState,
            content,
            'remove-range'
          );
          return Draft.EditorState.forceSelection(newState, newSelection);
        },
        cleanupEmptyStickers = function (editorState) {
          var newEditorState = editorState;
          return (
            editorState
              .getCurrentContent()
              .get('blockMap')
              .forEach(function (block) {
                'sticker' === block.get('type') &&
                  null === block.getEntityAt(0) &&
                  (newEditorState = (function cleanupSticker(
                    editorState,
                    blockKey
                  ) {
                    var content = editorState.getCurrentContent(),
                      targetRange = new Draft.SelectionState({
                        anchorKey: blockKey,
                        anchorOffset: 0,
                        focusKey: blockKey,
                        focusOffset: 0,
                      }),
                      withoutSticker = Draft.Modifier.setBlockType(
                        content,
                        targetRange,
                        'unstyled'
                      ),
                      newState = Draft.EditorState.push(
                        editorState,
                        withoutSticker,
                        'remove-range'
                      );
                    return Draft.EditorState.forceSelection(
                      newState,
                      withoutSticker.getSelectionAfter()
                    );
                  })(editorState, block.get('key')));
              }),
            newEditorState
          );
        };
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Sticker_Sticker = (function (_Component) {
        function Sticker() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).remove = function (event) {
              event.preventDefault(),
                event.stopPropagation(),
                _this.props.blockProps.onRemove(_this.props.block.getKey());
            }),
            _this
          );
        }
        return (
          (function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(Sticker, _Component),
          (Sticker.prototype.render = function render() {
            var _this$props = this.props,
              block = _this$props.block,
              stickers = _this$props.stickers,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              contentState = _this$props.contentState,
              removeButton = react_default.a.createElement(
                'span',
                {
                  className: theme.stickerRemoveButton,
                  onClick: this.remove,
                  role: 'button',
                },
                '✕'
              ),
              data = contentState.getEntity(block.getEntityAt(0)).getData();
            return react_default.a.createElement(
              'figure',
              {
                contentEditable: !1,
                'data-offset-key': block.get('key') + '-0-0',
                className: theme.sticker,
              },
              react_default.a.createElement('img', {
                className: theme.stickerImage,
                src: stickers.getIn(['data', data.id, 'url']),
                role: 'presentation',
              }),
              this.props.attachRemoveButton ? removeButton : null
            );
          }),
          Sticker
        );
      })(react.Component);
      try {
        (Sticker_Sticker.displayName = 'Sticker'),
          (Sticker_Sticker.__docgenInfo = {
            description: '',
            displayName: 'Sticker',
            props: {
              stickers: {
                defaultValue: null,
                description: '',
                name: 'stickers',
                required: !0,
                type: { name: 'ImmutableDataStickerPluginItem' },
              },
              attachRemoveButton: {
                defaultValue: null,
                description: '',
                name: 'attachRemoveButton',
                required: !1,
                type: { name: 'boolean' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'StickerPluginTheme' },
              },
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !0,
                type: { name: 'ContentBlock' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !0,
                type: { name: 'ContentState' },
              },
              blockProps: {
                defaultValue: null,
                description: '',
                name: 'blockProps',
                required: !0,
                type: { name: '{ onRemove(blockKey: string): void; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/sticker/src/Sticker/index.tsx#Sticker'
            ] = {
              docgenInfo: Sticker_Sticker.__docgenInfo,
              name: 'Sticker',
              path: 'packages/sticker/src/Sticker/index.tsx#Sticker',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function StickerOption_setPrototypeOf(o, p) {
        return (StickerOption_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var StickerOption_StickerOption = (function (_Component) {
        function StickerOption() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).onClick = function () {
              _this.props.onClick(_this.props.id);
            }),
            _this
          );
        }
        return (
          (function StickerOption_inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              StickerOption_setPrototypeOf(subClass, superClass);
          })(StickerOption, _Component),
          (StickerOption.prototype.render = function render() {
            var _this$props = this.props,
              id = _this$props.id,
              url = _this$props.url,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme;
            return react_default.a.createElement(
              'button',
              {
                onClick: this.onClick,
                key: id,
                type: 'button',
                className: theme.selectSticker,
              },
              react_default.a.createElement('img', {
                className: theme.selectStickerImage,
                src: url,
                role: 'presentation',
              })
            );
          }),
          StickerOption
        );
      })(react.Component);
      try {
        (StickerOption_StickerOption.displayName = 'StickerOption'),
          (StickerOption_StickerOption.__docgenInfo = {
            description:
              'Showcases a sticker one can then pick to add to the editor',
            displayName: 'StickerOption',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              url: {
                defaultValue: null,
                description: '',
                name: 'url',
                required: !0,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'StickerPluginTheme' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '(id: string) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/sticker/src/StickerSelect/StickerOption/index.tsx#StickerOption'
            ] = {
              docgenInfo: StickerOption_StickerOption.__docgenInfo,
              name: 'StickerOption',
              path:
                'packages/sticker/src/StickerSelect/StickerOption/index.tsx#StickerOption',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function StickerSelect_setPrototypeOf(o, p) {
        return (StickerSelect_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function setOverflow(newValue, element) {
        element.style.overflow = newValue;
      }
      var StickerSelect_StickerSelect = (function (_Component) {
        function StickerSelect() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).state = { open: !1 }),
            (_this.preventNextClose = void 0),
            (_this.onMouseEnter = function () {
              setOverflow('hidden', document.body);
            }),
            (_this.onMouseLeave = function () {
              setOverflow('auto', document.body);
            }),
            (_this.openPopover = function () {
              _this.state.open ||
                ((_this.preventNextClose = !0), _this.setState({ open: !0 }));
            }),
            (_this.closePopover = function () {
              !_this.preventNextClose &&
                _this.state.open &&
                _this.setState({ open: !1 }),
                (_this.preventNextClose = !1);
            }),
            (_this.add = function (id) {
              var editor = _this.props.editor;
              editor.onChange(addSticker(editor.state.editorState, id));
            }),
            _this
          );
        }
        !(function StickerSelect_inheritsLoose(subClass, superClass) {
          (subClass.prototype = Object.create(superClass.prototype)),
            (subClass.prototype.constructor = subClass),
            StickerSelect_setPrototypeOf(subClass, superClass);
        })(StickerSelect, _Component);
        var _proto = StickerSelect.prototype;
        return (
          (_proto.componentDidMount = function componentDidMount() {
            document.addEventListener('click', this.closePopover);
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            document.removeEventListener('click', this.closePopover);
          }),
          (_proto.render = function render() {
            var _this2 = this,
              stickerElements = this.props.stickers
                .get('data')
                .map(function (sticker) {
                  var id = sticker.get('id'),
                    url = sticker.get('url');
                  return react_default.a.createElement(
                    StickerOption_StickerOption,
                    {
                      theme: _this2.props.theme,
                      key: id,
                      onClick: _this2.add,
                      id: id,
                      url: url,
                    }
                  );
                }),
              _this$props$theme = this.props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              popoverClassName = this.state.open
                ? theme.selectPopover
                : theme.selectClosedPopover,
              buttonClassName = this.state.open
                ? theme.selectPressedButton
                : theme.selectButton;
            return react_default.a.createElement(
              'div',
              { className: theme.select },
              react_default.a.createElement(
                'button',
                {
                  className: buttonClassName,
                  onMouseUp: this.openPopover,
                  type: 'button',
                },
                this.props.selectButtonContent
              ),
              react_default.a.createElement(
                'div',
                {
                  className: popoverClassName,
                  onMouseEnter: this.onMouseEnter,
                  onMouseLeave: this.onMouseLeave,
                },
                react_default.a.createElement(
                  'div',
                  { className: theme.selectStickerList },
                  stickerElements.toList().toJS()
                ),
                react_default.a.createElement('div', {
                  className: theme.selectBottomGradient,
                })
              )
            );
          }),
          StickerSelect
        );
      })(react.Component);
      try {
        (StickerSelect_StickerSelect.displayName = 'StickerSelect'),
          (StickerSelect_StickerSelect.__docgenInfo = {
            description: 'Sticker Selector Component',
            displayName: 'StickerSelect',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'StickerPluginTheme' },
              },
              stickers: {
                defaultValue: null,
                description: '',
                name: 'stickers',
                required: !0,
                type: { name: 'ImmutableDataStickerPluginItem' },
              },
              selectButtonContent: {
                defaultValue: null,
                description: '',
                name: 'selectButtonContent',
                required: !0,
                type: { name: 'ReactNode' },
              },
              editor: {
                defaultValue: null,
                description: '',
                name: 'editor',
                required: !0,
                type: {
                  name:
                    '{ onChange(state: EditorState): void; state: { editorState: EditorState; }; }',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/sticker/src/StickerSelect/index.tsx#StickerSelect'
            ] = {
              docgenInfo: StickerSelect_StickerSelect.__docgenInfo,
              name: 'StickerSelect',
              path:
                'packages/sticker/src/StickerSelect/index.tsx#StickerSelect',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = {
        sticker: 'sl55r16',
        stickerImage: 's1b1f21y',
        stickerRemoveButton: 's3u1xfs',
        select: 'snop97i',
        selectPopover: 's1te48ud',
        selectClosedPopover: 'sqwiblq',
        selectBottomGradient: 's1sha4g8',
        selectButton: 's1m6n3s1',
        selectPressedButton: 'shl2p6m',
        selectStickerList: 'sjjedyb',
        selectSticker: 's14u7spj',
        selectStickerImage: 's64maza',
      };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(1008);
      __webpack_exports__.a = function (config) {
        var sticker,
          theme = config.theme ? config.theme : defaultTheme,
          stickers = config.stickers,
          selectButtonContent = config.selectButtonContent
            ? config.selectButtonContent
            : '☺',
          attachRemoveButton = !1 !== config.attachRemoveButton;
        return {
          blockRendererFn:
            ((sticker = function DecoratedSticker(props) {
              return react_default.a.createElement(
                Sticker_Sticker,
                _extends({}, props, {
                  attachRemoveButton: attachRemoveButton,
                  stickers: stickers,
                  theme: theme,
                })
              );
            }),
            function (contentBlock, _ref) {
              var getEditorState = _ref.getEditorState,
                setEditorState = _ref.setEditorState;
              if ('sticker' === contentBlock.getType())
                return {
                  component: sticker,
                  props: {
                    onRemove: function onRemove(blockKey) {
                      setEditorState(removeSticker(getEditorState(), blockKey));
                    },
                  },
                };
            }),
          onChange: cleanupEmptyStickers,
          add: addSticker,
          remove: removeSticker,
          blockRenderMap: Object(immutable.Map)({
            sticker: { element: 'div' },
          }),
          StickerSelect: function DecoratedStickerSelect(props) {
            return react_default.a.createElement(
              StickerSelect_StickerSelect,
              _extends({}, props, {
                selectButtonContent: selectButtonContent,
                stickers: stickers,
                theme: theme,
              })
            );
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              attachRemoveButton: {
                defaultValue: null,
                description: '',
                name: 'attachRemoveButton',
                required: !1,
                type: { name: 'boolean' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'StickerPluginTheme' },
              },
              stickers: {
                defaultValue: null,
                description: '',
                name: 'stickers',
                required: !0,
                type: { name: 'ImmutableDataStickerPluginItem' },
              },
              selectButtonContent: {
                defaultValue: null,
                description: '',
                name: 'selectButtonContent',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/sticker/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/sticker/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var constants_namespaceObject = {};
      __webpack_require__.r(constants_namespaceObject),
        __webpack_require__.d(
          constants_namespaceObject,
          'VIDEOTYPE',
          function () {
            return VIDEOTYPE;
          }
        ),
        __webpack_require__.d(constants_namespaceObject, 'ATOMIC', function () {
          return ATOMIC;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        VIDEOTYPE = 'draft-js-video-plugin-video',
        ATOMIC = 'atomic';
      function addVideo(editorState, _ref) {
        var src = _ref.src;
        if (Draft.RichUtils.getCurrentBlockType(editorState) === ATOMIC)
          return editorState;
        var entityKey = editorState
          .getCurrentContent()
          .createEntity(VIDEOTYPE, 'IMMUTABLE', { src: src })
          .getLastCreatedEntityKey();
        return Draft.AtomicBlockUtils.insertAtomicBlock(
          editorState,
          entityKey,
          ' '
        );
      }
      var prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        YOUTUBEMATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
        VIMEOMATCH_URL = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]),
            excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }
      var DefaultVideoComponent_getSrc = function getSrc(_ref) {
          var src = _ref.src;
          return (function isYoutube(url) {
            return YOUTUBEMATCH_URL.test(url);
          })(src)
            ? 'https://www.youtube.com/embed/' +
                (function getYoutubeSrc(url) {
                  return {
                    srcID: url && url.match(YOUTUBEMATCH_URL)[1],
                    srcType: 'youtube',
                    url: url,
                  };
                })(src).srcID
            : (function isVimeo(url) {
                return VIMEOMATCH_URL.test(url);
              })(src)
            ? 'https://player.vimeo.com/video/' +
              (function getVimeoSrc(url) {
                return {
                  srcID: url.match(VIMEOMATCH_URL)[3],
                  srcType: 'vimeo',
                  url: url,
                };
              })(src).srcID
            : void 0;
        },
        DefaultVideoComponent_DefaultVideoComponent = function DefaultVideoComponent(
          _ref2
        ) {
          var blockProps = _ref2.blockProps,
            _ref2$className = _ref2.className,
            className = void 0 === _ref2$className ? '' : _ref2$className,
            style = _ref2.style,
            theme = _ref2.theme,
            otherProps = _objectWithoutPropertiesLoose(_ref2, [
              'blockProps',
              'className',
              'style',
              'theme',
            ]),
            src = DefaultVideoComponent_getSrc(blockProps);
          if (src)
            return react_default.a.createElement(
              'div',
              { style: style },
              react_default.a.createElement(
                'div',
                { className: theme.iframeContainer + ' ' + className },
                react_default.a.createElement('iframe', {
                  className: theme.iframe,
                  src: src,
                  frameBorder: '0',
                  allowFullScreen: !0,
                })
              )
            );
          otherProps.block,
            otherProps.customStyleMap,
            otherProps.customStyleFn,
            otherProps.decorator,
            otherProps.forceSelection,
            otherProps.offsetKey,
            otherProps.selection,
            otherProps.tree,
            otherProps.contentState,
            otherProps.blockStyleFn;
          var elementProps = _objectWithoutPropertiesLoose(otherProps, [
            'block',
            'customStyleMap',
            'customStyleFn',
            'decorator',
            'forceSelection',
            'offsetKey',
            'selection',
            'tree',
            'contentState',
            'blockStyleFn',
          ]);
          return react_default.a.createElement(
            'video',
            _extends(
              { src: blockProps.src, className: theme.video, style: style },
              elementProps,
              { controls: !0 }
            )
          );
        };
      DefaultVideoComponent_DefaultVideoComponent.propTypes = {
        blockProps: prop_types_default.a.object.isRequired,
        className: prop_types_default.a.string,
        style: prop_types_default.a.object,
        theme: prop_types_default.a.object.isRequired,
      };
      var components_DefaultVideoComponent = DefaultVideoComponent_DefaultVideoComponent;
      try {
        (DefaultVideoComponent_DefaultVideoComponent.displayName =
          'DefaultVideoComponent'),
          (DefaultVideoComponent_DefaultVideoComponent.__docgenInfo = {
            description: '',
            displayName: 'DefaultVideoComponent',
            props: {
              blockProps: {
                defaultValue: null,
                description: '',
                name: 'blockProps',
                required: !0,
                type: { name: '{ src: string; }' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'VideoPluginTheme' },
              },
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !0,
                type: { name: 'ContentBlock' },
              },
              customStyleMap: {
                defaultValue: null,
                description: '',
                name: 'customStyleMap',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleFn: {
                defaultValue: null,
                description: '',
                name: 'customStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !0,
                type: { name: 'unknown' },
              },
              forceSelection: {
                defaultValue: null,
                description: '',
                name: 'forceSelection',
                required: !0,
                type: { name: 'unknown' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !0,
                type: { name: 'string' },
              },
              selection: {
                defaultValue: null,
                description: '',
                name: 'selection',
                required: !0,
                type: { name: 'SelectionState' },
              },
              tree: {
                defaultValue: null,
                description: '',
                name: 'tree',
                required: !0,
                type: { name: 'unknown' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !0,
                type: { name: 'ContentState' },
              },
              blockStyleFn: {
                defaultValue: null,
                description: '',
                name: 'blockStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/video/src/video/components/DefaultVideoComponent.tsx#DefaultVideoComponent'
            ] = {
              docgenInfo:
                DefaultVideoComponent_DefaultVideoComponent.__docgenInfo,
              name: 'DefaultVideoComponent',
              path:
                'packages/video/src/video/components/DefaultVideoComponent.tsx#DefaultVideoComponent',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = {
        iframeContainer: 'ifi492u',
        iframe: 'i1hzzm9j',
        invalidVideoSrc: 'ikyzbpi',
        video: 'vlyzuw8',
      };
      function createVideoPlugin_extends() {
        return (createVideoPlugin_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(932);
      try {
        (createVideoPlugin.displayName = 'createVideoPlugin'),
          (createVideoPlugin.__docgenInfo = {
            description: '',
            displayName: 'createVideoPlugin',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'VideoPluginTheme' },
              },
              videoComponent: {
                defaultValue: null,
                description: '',
                name: 'videoComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<DefaultVideoComponentProps, any> | FunctionComponent<DefaultVideoComponentProps>',
                },
              },
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !1,
                type: {
                  name:
                    '((component: ComponentType<DefaultVideoComponentProps>) => ComponentType<DefaultVideoComponentProps>)',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/video/src/createVideoPlugin.tsx#createVideoPlugin'
            ] = {
              docgenInfo: createVideoPlugin.__docgenInfo,
              name: 'createVideoPlugin',
              path:
                'packages/video/src/createVideoPlugin.tsx#createVideoPlugin',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.a = function videoPlugin(config) {
        void 0 === config && (config = {});
        var theme = config.theme ? config.theme : defaultTheme,
          Video = config.videoComponent || components_DefaultVideoComponent;
        config.decorator && (Video = config.decorator(Video));
        var ThemedVideo = function ThemedVideo(props) {
          return react_default.a.createElement(
            Video,
            createVideoPlugin_extends({}, props, { theme: theme })
          );
        };
        return {
          blockRendererFn: function blockRendererFn(block, _ref) {
            var getEditorState = _ref.getEditorState;
            if (block.getType() === ATOMIC) {
              var contentState = getEditorState().getCurrentContent(),
                entityKey = block.getEntityAt(0);
              if (!entityKey) return null;
              var entity = contentState.getEntity(entityKey),
                type = entity.getType(),
                src = entity.getData().src;
              if (type === VIDEOTYPE)
                return {
                  component: ThemedVideo,
                  editable: !1,
                  props: { src: src },
                };
            }
            return null;
          },
          addVideo: addVideo,
          types: constants_namespaceObject,
        };
      };
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return createBlockDndPlugin;
      });
      var Draft = __webpack_require__(1),
        immutable = __webpack_require__(3);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var handleDrop = function (selection, dataTransfer, isInternal, _ref) {
          var getEditorState = _ref.getEditorState,
            setEditorState = _ref.setEditorState,
            editorState = getEditorState(),
            raw = dataTransfer.data.getData('text'),
            data = raw ? raw.split(':') : [];
          if (2 !== data.length) return 'not-handled';
          if ('DRAFTJS_BLOCK_KEY' === data[0]) {
            var blockKey = data[1],
              contentState = editorState.getCurrentContent(),
              block = contentState.getBlockForKey(blockKey),
              entity = contentState.getEntity(block.getEntityAt(0)),
              contentStateAfterRemove = (function removeBlock(
                contentState,
                blockKey
              ) {
                var targetRange,
                  afterKey = contentState.getKeyAfter(blockKey),
                  afterBlock = contentState.getBlockForKey(afterKey);
                targetRange =
                  afterBlock &&
                  'unstyled' === afterBlock.getType() &&
                  0 === afterBlock.getLength() &&
                  afterBlock === contentState.getBlockMap().last()
                    ? new Draft.SelectionState({
                        anchorKey: blockKey,
                        anchorOffset: 0,
                        focusKey: afterKey,
                        focusOffset: 0,
                      })
                    : new Draft.SelectionState({
                        anchorKey: blockKey,
                        anchorOffset: 0,
                        focusKey: blockKey,
                        focusOffset: 1,
                      });
                var newContentState = Draft.Modifier.setBlockType(
                  contentState,
                  targetRange,
                  'unstyled'
                );
                return Draft.Modifier.removeRange(
                  newContentState,
                  targetRange,
                  'backward'
                );
              })(
                (function addBlock(
                  editorState,
                  selection,
                  type,
                  data,
                  entityType,
                  text
                ) {
                  void 0 === text && (text = ' ');
                  var insertionTargetSelection,
                    insertionTargetBlock,
                    currentContentState = editorState.getCurrentContent(),
                    currentSelectionState = selection,
                    afterRemovalContentState = Draft.Modifier.removeRange(
                      currentContentState,
                      currentSelectionState,
                      'backward'
                    ),
                    targetSelection = afterRemovalContentState.getSelectionAfter(),
                    blockKeyForTarget = targetSelection.get('focusKey'),
                    block = currentContentState.getBlockForKey(
                      blockKeyForTarget
                    ),
                    isEmptyBlock =
                      0 === block.getLength() && null === block.getEntityAt(0),
                    selectedFromStart =
                      0 === currentSelectionState.getStartOffset();
                  isEmptyBlock || selectedFromStart
                    ? ((insertionTargetSelection = targetSelection),
                      (insertionTargetBlock = afterRemovalContentState))
                    : (insertionTargetSelection = (insertionTargetBlock = Draft.Modifier.splitBlock(
                        afterRemovalContentState,
                        targetSelection
                      )).getSelectionAfter());
                  var newContentStateAfterSplit = Draft.Modifier.setBlockType(
                      insertionTargetBlock,
                      insertionTargetSelection,
                      type
                    ),
                    entityKey = newContentStateAfterSplit
                      .createEntity(
                        entityType || type,
                        'IMMUTABLE',
                        _extends({}, data)
                      )
                      .getLastCreatedEntityKey(),
                    charData = Draft.CharacterMetadata.create({
                      entity: entityKey,
                    }),
                    fragmentArray = [
                      new Draft.ContentBlock({
                        key: Object(Draft.genKey)(),
                        type: type,
                        text: text,
                        characterList: Object(immutable.List)(
                          Object(immutable.Repeat)(charData, text.length || 1)
                        ),
                      }),
                      new Draft.ContentBlock({
                        key: Object(Draft.genKey)(),
                        type: 'unstyled',
                        text: '',
                        characterList: Object(immutable.List)(),
                      }),
                    ],
                    fragment = Draft.BlockMapBuilder.createFromArray(
                      fragmentArray
                    );
                  return Draft.Modifier.replaceWithFragment(
                    newContentStateAfterSplit,
                    insertionTargetSelection,
                    fragment
                  );
                })(
                  editorState,
                  selection,
                  block.getType(),
                  entity.getData(),
                  entity.getType()
                ),
                blockKey
              ),
              newSelection = new Draft.SelectionState({
                anchorKey: blockKey,
                anchorOffset: 0,
                focusKey: blockKey,
                focusOffset: 0,
              }),
              newState = Draft.EditorState.push(
                editorState,
                contentStateAfterRemove,
                'insert-fragment'
              );
            setEditorState(
              Draft.EditorState.forceSelection(newState, newSelection)
            );
          }
          return 'handled';
        },
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react);
      function createDecorator_extends() {
        return (createDecorator_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var src_createDecorator = function (_ref) {
        var store = _ref.store;
        return function (WrappedComponent) {
          var BlockDraggableDecorator = function BlockDraggableDecorator(
            props
          ) {
            var readOnly = !store.getReadOnly || store.getReadOnly();
            return react_default.a.createElement(
              WrappedComponent,
              createDecorator_extends({}, props, {
                onDragStart: readOnly
                  ? void 0
                  : function startDrag(event) {
                      (event.dataTransfer.dropEffect = 'move'),
                        event.dataTransfer.setData(
                          'text',
                          'DRAFTJS_BLOCK_KEY:' + props.block.getKey()
                        );
                    },
              })
            );
          };
          return (
            (BlockDraggableDecorator.displayName =
              'BlockDraggable(' +
              (function getDisplayName(WrappedComponent) {
                var component =
                  WrappedComponent.WrappedComponent || WrappedComponent;
                return component.displayName || component.name || 'Component';
              })(WrappedComponent) +
              ')'),
            (BlockDraggableDecorator.WrappedComponent =
              WrappedComponent.WrappedComponent || WrappedComponent),
            BlockDraggableDecorator
          );
        };
      };
      try {
        (createDecorator.displayName = 'createDecorator'),
          (createDecorator.__docgenInfo = {
            description: '',
            displayName: 'createDecorator',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'DndPluginStore' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/drag-n-drop/src/createDecorator.tsx#createDecorator'
            ] = {
              docgenInfo: createDecorator.__docgenInfo,
              name: 'createDecorator',
              path:
                'packages/drag-n-drop/src/createDecorator.tsx#createDecorator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function createBlockDndPlugin() {
        var store = { getReadOnly: void 0 };
        return {
          initialize: function initialize(_ref) {
            var getReadOnly = _ref.getReadOnly;
            store.getReadOnly = getReadOnly;
          },
          decorator: src_createDecorator({ store: store }),
          handleDrop: handleDrop,
        };
      }
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        Draft = __webpack_require__(1),
        clsx_m = __webpack_require__(8);
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var UndoButton_UndoButton = (function (_Component) {
        function UndoButton() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).onClick = function (event) {
              event.stopPropagation(),
                _this.props.store.setEditorState(
                  Draft.EditorState.undo(_this.props.store.getEditorState())
                );
            }),
            _this
          );
        }
        return (
          (function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(UndoButton, _Component),
          (UndoButton.prototype.render = function render() {
            var _this$props = this.props,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              children = _this$props.children,
              className = _this$props.className,
              combinedClassName = Object(clsx_m.a)(theme.undo, className);
            return react_default.a.createElement(
              'button',
              {
                disabled:
                  !this.props.store ||
                  !this.props.store.getEditorState ||
                  this.props.store.getEditorState().getUndoStack().isEmpty(),
                type: 'button',
                onClick: this.onClick,
                className: combinedClassName,
              },
              children
            );
          }),
          UndoButton
        );
      })(react.Component);
      UndoButton_UndoButton.propTypes = {
        children: prop_types_default.a.node.isRequired,
        theme: prop_types_default.a.any,
      };
      try {
        (UndoButton_UndoButton.displayName = 'UndoButton'),
          (UndoButton_UndoButton.__docgenInfo = {
            description: '',
            displayName: 'UndoButton',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'UndoPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'UndoPuginStore' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/undo/src/UndoButton/index.tsx#UndoButton'
            ] = {
              docgenInfo: UndoButton_UndoButton.__docgenInfo,
              name: 'UndoButton',
              path: 'packages/undo/src/UndoButton/index.tsx#UndoButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function RedoButton_setPrototypeOf(o, p) {
        return (RedoButton_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var RedoButton_RedoButton = (function (_Component) {
        function RedoButton() {
          for (
            var _this,
              _len = arguments.length,
              args = new Array(_len),
              _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this =
              _Component.call.apply(_Component, [this].concat(args)) ||
              this).onClick = function (event) {
              event.stopPropagation(),
                _this.props.store.setEditorState(
                  Draft.EditorState.redo(_this.props.store.getEditorState())
                );
            }),
            _this
          );
        }
        return (
          (function RedoButton_inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              RedoButton_setPrototypeOf(subClass, superClass);
          })(RedoButton, _Component),
          (RedoButton.prototype.render = function render() {
            var _this$props = this.props,
              _this$props$theme = _this$props.theme,
              theme = void 0 === _this$props$theme ? {} : _this$props$theme,
              children = _this$props.children,
              className = _this$props.className,
              combinedClassName = Object(clsx_m.a)(theme.redo, className);
            return react_default.a.createElement(
              'button',
              {
                disabled:
                  !this.props.store ||
                  !this.props.store.getEditorState ||
                  this.props.store.getEditorState().getRedoStack().isEmpty(),
                type: 'button',
                onClick: this.onClick,
                className: combinedClassName,
              },
              children
            );
          }),
          RedoButton
        );
      })(react.Component);
      RedoButton_RedoButton.propTypes = {
        children: prop_types_default.a.node.isRequired,
        theme: prop_types_default.a.any,
      };
      try {
        (RedoButton_RedoButton.displayName = 'RedoButton'),
          (RedoButton_RedoButton.__docgenInfo = {
            description: '',
            displayName: 'RedoButton',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'UndoPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'UndoPuginStore' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/undo/src/RedoButton/index.tsx#RedoButton'
            ] = {
              docgenInfo: RedoButton_RedoButton.__docgenInfo,
              name: 'RedoButton',
              path: 'packages/undo/src/RedoButton/index.tsx#RedoButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = { redo: 'b1lh9taq', undo: 'b1lh9taq' };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(1006);
      __webpack_exports__.a = function (config) {
        void 0 === config && (config = {});
        var undoContent = config.undoContent ? config.undoContent : '↺',
          redoContent = config.redoContent ? config.redoContent : '↻',
          store = { getEditorState: void 0, setEditorState: void 0 },
          theme = config.theme ? config.theme : defaultTheme;
        return {
          UndoButton: function DecoratedUndoButton(props) {
            return react_default.a.createElement(
              UndoButton_UndoButton,
              _extends({}, props, { theme: theme, store: store }),
              undoContent
            );
          },
          RedoButton: function DecoratedRedoButton(props) {
            return react_default.a.createElement(
              RedoButton_RedoButton,
              _extends({}, props, { theme: theme, store: store }),
              redoContent
            );
          },
          initialize: function initialize(_ref) {
            var getEditorState = _ref.getEditorState,
              setEditorState = _ref.setEditorState;
            (store.getEditorState = getEditorState),
              (store.setEditorState = setEditorState);
          },
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              undoContent: {
                defaultValue: null,
                description: '',
                name: 'undoContent',
                required: !1,
                type: { name: 'ReactNode' },
              },
              redoContent: {
                defaultValue: null,
                description: '',
                name: 'redoContent',
                required: !1,
                type: { name: 'ReactNode' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'UndoPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/undo/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/undo/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var Draft = __webpack_require__(1),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        react_dom = __webpack_require__(87),
        react_dom_default = __webpack_require__.n(react_dom);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var round = function round(x, steps) {
          return Math.ceil(x / steps) * steps;
        },
        src_createDecorator = function (_ref) {
          var config = _ref.config,
            store = _ref.store;
          return function (WrappedComponent) {
            var _class, _temp;
            return (
              (_temp = _class = (function (_Component) {
                function BlockResizeableDecorator() {
                  for (
                    var _this,
                      _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  )
                    args[_key] = arguments[_key];
                  return (
                    ((_this =
                      _Component.call.apply(_Component, [this].concat(args)) ||
                      this).state = { hoverPosition: {}, clicked: !1 }),
                    (_this.wrapper = void 0),
                    (_this.setEntityData = function (data) {
                      _this.props.blockProps.setResizeData(data);
                    }),
                    (_this.mouseLeave = function () {
                      _this.state.clicked ||
                        _this.setState({ hoverPosition: {} });
                    }),
                    (_this.mouseMove = function (evt) {
                      var _this$props = _this.props,
                        vertical = _this$props.vertical,
                        horizontal = _this$props.horizontal,
                        isResizable = _this$props.isResizable,
                        hoverPosition = _this.state.hoverPosition,
                        b = react_dom_default.a
                          .findDOMNode(_assertThisInitialized(_this))
                          .getBoundingClientRect(),
                        x = evt.clientX - b.left,
                        y = evt.clientY - b.top,
                        isTop = !(!vertical || 'auto' === vertical) && y < 6,
                        isLeft = !!horizontal && x < 6,
                        isRight = !!horizontal && x >= b.width - 6,
                        isBottom =
                          !(!vertical || 'auto' === vertical) &&
                          y >= b.height - 6 &&
                          y < b.height,
                        newHoverPosition = {
                          isTop: isTop,
                          isLeft: isLeft,
                          isRight: isRight,
                          isBottom: isBottom,
                          canResize:
                            (isTop || isLeft || isRight || isBottom) &&
                            isResizable,
                        };
                      Object.keys(newHoverPosition).filter(function (key) {
                        return hoverPosition[key] !== newHoverPosition[key];
                      }).length &&
                        _this.setState({ hoverPosition: newHoverPosition });
                    }),
                    (_this.mouseDown = function (event) {
                      if (_this.state.hoverPosition.canResize) {
                        event.preventDefault();
                        var _this$props2 = _this.props,
                          resizeSteps = _this$props2.resizeSteps,
                          vertical = _this$props2.vertical,
                          horizontal = _this$props2.horizontal,
                          hoverPosition = _this.state.hoverPosition,
                          isTop = hoverPosition.isTop,
                          isLeft = hoverPosition.isLeft,
                          isRight = hoverPosition.isRight,
                          isBottom = hoverPosition.isBottom,
                          pane = react_dom_default.a.findDOMNode(
                            _assertThisInitialized(_this)
                          ),
                          startX = event.clientX,
                          startY = event.clientY,
                          startWidth = parseInt(
                            document.defaultView.getComputedStyle(pane).width,
                            10
                          ),
                          startHeight = parseInt(
                            document.defaultView.getComputedStyle(pane).height,
                            10
                          ),
                          doDrag = function doDrag(dragEvent) {
                            var width =
                                startWidth +
                                (isLeft
                                  ? startX - dragEvent.clientX
                                  : dragEvent.clientX - startX),
                              height = startHeight + dragEvent.clientY - startY,
                              editorComp = store.getEditorRef(),
                              editorNode =
                                editorComp.refs && editorComp.refs.editor
                                  ? editorComp.refs.editor
                                  : editorComp.editor;
                            (width = Math.min(editorNode.clientWidth, width)),
                              (height = Math.min(
                                editorNode.clientHeight,
                                height
                              ));
                            var widthPerc =
                                (100 / editorNode.clientWidth) * width,
                              heightPerc =
                                (100 / editorNode.clientHeight) * height,
                              newState = {};
                            (isLeft || isRight) && 'relative' === horizontal
                              ? (newState.width = resizeSteps
                                  ? round(widthPerc, resizeSteps)
                                  : widthPerc)
                              : (isLeft || isRight) &&
                                'absolute' === horizontal &&
                                (newState.width = resizeSteps
                                  ? round(width, resizeSteps)
                                  : width),
                              (isTop || isBottom) && 'relative' === vertical
                                ? (newState.height = resizeSteps
                                    ? round(heightPerc, resizeSteps)
                                    : heightPerc)
                                : (isTop || isBottom) &&
                                  'absolute' === vertical &&
                                  (newState.height = resizeSteps
                                    ? round(height, resizeSteps)
                                    : height),
                              dragEvent.preventDefault(),
                              _this.setState(newState);
                          };
                        document.addEventListener('mousemove', doDrag, !1),
                          document.addEventListener(
                            'mouseup',
                            function stopDrag() {
                              document.removeEventListener(
                                'mousemove',
                                doDrag,
                                !1
                              ),
                                document.removeEventListener(
                                  'mouseup',
                                  stopDrag,
                                  !1
                                );
                              var _this$state = _this.state,
                                width = _this$state.width,
                                height = _this$state.height;
                              _this.setState({ clicked: !1 }),
                                _this.setEntityData({
                                  width: width,
                                  height: height,
                                });
                            },
                            !1
                          ),
                          _this.setState({ clicked: !0 });
                      }
                    }),
                    _this
                  );
                }
                return (
                  (function _inheritsLoose(subClass, superClass) {
                    (subClass.prototype = Object.create(superClass.prototype)),
                      (subClass.prototype.constructor = subClass),
                      _setPrototypeOf(subClass, superClass);
                  })(BlockResizeableDecorator, _Component),
                  (BlockResizeableDecorator.prototype.render = function render() {
                    var _this2 = this,
                      _this$props3 = this.props,
                      blockProps = _this$props3.blockProps,
                      vertical = _this$props3.vertical,
                      horizontal = _this$props3.horizontal,
                      initialWidth = _this$props3.initialWidth,
                      initialHeight = _this$props3.initialHeight,
                      style = _this$props3.style,
                      isResizable = _this$props3.isResizable,
                      elementProps =
                        (_this$props3.resizeSteps,
                        (function _objectWithoutPropertiesLoose(
                          source,
                          excluded
                        ) {
                          if (null == source) return {};
                          var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                          for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                              excluded.indexOf(key) >= 0 ||
                                (target[key] = source[key]);
                          return target;
                        })(_this$props3, [
                          'blockProps',
                          'vertical',
                          'horizontal',
                          'initialWidth',
                          'initialHeight',
                          'style',
                          'isResizable',
                          'resizeSteps',
                        ])),
                      _this$state2 = this.state,
                      width = _this$state2.width,
                      height = _this$state2.height,
                      hoverPosition = _this$state2.hoverPosition,
                      isTop = hoverPosition.isTop,
                      isLeft = hoverPosition.isLeft,
                      isRight = hoverPosition.isRight,
                      isBottom = hoverPosition.isBottom,
                      styles = _extends({ position: 'relative' }, style);
                    if ('auto' === horizontal) styles.width = 'auto';
                    else if ('relative' === horizontal) {
                      var value = width || blockProps.resizeData.width;
                      styles.width =
                        !value && initialWidth
                          ? initialWidth
                          : (value || 40) + '%';
                    } else if ('absolute' === horizontal) {
                      var _value = width || blockProps.resizeData.width;
                      styles.width =
                        !_value && initialWidth
                          ? initialWidth
                          : (_value || 40) + 'px';
                    }
                    if ('auto' === vertical) styles.height = 'auto';
                    else if ('relative' === vertical) {
                      var _value2 = height || blockProps.resizeData.height;
                      styles.height =
                        !_value2 && initialHeight
                          ? initialHeight
                          : (_value2 || 40) + '%';
                    } else if ('absolute' === vertical) {
                      var _value3 = height || blockProps.resizeData.height;
                      styles.height =
                        !_value3 && initialHeight
                          ? initialHeight
                          : (_value3 || 40) + '%';
                    }
                    styles.cursor = isResizable
                      ? (isRight && isBottom) || (isLeft && isTop)
                        ? 'nwse-resize'
                        : (isRight && isTop) || (isBottom && isLeft)
                        ? 'nesw-resize'
                        : isRight || isLeft
                        ? 'ew-resize'
                        : isBottom || isTop
                        ? 'ns-resize'
                        : 'default'
                      : 'default';
                    var interactionProps =
                      !store.getReadOnly || store.getReadOnly()
                        ? {}
                        : {
                            onMouseDown: this.mouseDown,
                            onMouseMove: this.mouseMove,
                            onMouseLeave: this.mouseLeave,
                          };
                    return react_default.a.createElement(
                      WrappedComponent,
                      _extends({}, elementProps, interactionProps, {
                        blockProps: blockProps,
                        ref: function ref(element) {
                          _this2.wrapper = element;
                        },
                        style: styles,
                      })
                    );
                  }),
                  BlockResizeableDecorator
                );
              })(react.Component)),
              (_class.displayName =
                'Resizable(' +
                (function getDisplayName(WrappedComponent) {
                  var component =
                    WrappedComponent.WrappedComponent || WrappedComponent;
                  return component.displayName || component.name || 'Component';
                })(WrappedComponent) +
                ')'),
              (_class.WrappedComponent =
                WrappedComponent.WrappedComponent || WrappedComponent),
              (_class.defaultProps = _extends(
                {
                  horizontal: 'relative',
                  vertical: !1,
                  resizeSteps: 1,
                  isResizable: !0,
                },
                config
              )),
              _temp
            );
          };
        };
      try {
        (createDecorator.displayName = 'createDecorator'),
          (createDecorator.__docgenInfo = {
            description: '',
            displayName: 'createDecorator',
            props: {
              config: {
                defaultValue: null,
                description: '',
                name: 'config',
                required: !0,
                type: { name: 'ResizeablePluginConfig' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'ResizeablePluginStore' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/resizeable/src/createDecorator.tsx#createDecorator'
            ] = {
              docgenInfo: createDecorator.__docgenInfo,
              name: 'createDecorator',
              path:
                'packages/resizeable/src/createDecorator.tsx#createDecorator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var src_createSetResizeData = function createSetResizeData(
        contentBlock,
        _ref
      ) {
        var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
        return function (data) {
          var entityKey = contentBlock.getEntityAt(0);
          if (entityKey) {
            var editorState = getEditorState();
            editorState
              .getCurrentContent()
              .mergeEntityData(entityKey, src_extends({}, data)),
              setEditorState(
                Draft.EditorState.forceSelection(
                  editorState,
                  editorState.getSelection()
                )
              );
          }
        };
      };
      __webpack_exports__.a = function (config) {
        var store = {
          getEditorRef: void 0,
          getReadOnly: void 0,
          getEditorState: void 0,
          setEditorState: void 0,
        };
        return {
          initialize: function initialize(_ref2) {
            var getEditorRef = _ref2.getEditorRef,
              getReadOnly = _ref2.getReadOnly,
              getEditorState = _ref2.getEditorState,
              setEditorState = _ref2.setEditorState;
            (store.getReadOnly = getReadOnly),
              (store.getEditorRef = getEditorRef),
              (store.getEditorState = getEditorState),
              (store.setEditorState = setEditorState);
          },
          decorator: src_createDecorator({ config: config, store: store }),
          blockRendererFn: function blockRendererFn(contentBlock, _ref3) {
            var getEditorState = _ref3.getEditorState,
              setEditorState = _ref3.setEditorState,
              entityKey = contentBlock.getEntityAt(0),
              contentState = getEditorState().getCurrentContent();
            return {
              props: {
                resizeData: entityKey
                  ? contentState.getEntity(entityKey).getData()
                  : {},
                setResizeData: src_createSetResizeData(contentBlock, {
                  getEditorState: getEditorState,
                  setEditorState: setEditorState,
                }),
              },
            };
          },
        };
      };
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(983);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1028);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1033);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(950);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(976);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(991);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1026);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1035);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1036);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function createStore(initialState) {
        void 0 === initialState && (initialState = {});
        var state = initialState,
          listeners = {};
        return {
          subscribeToItem: function subscribeToItem(key, callback) {
            (listeners[key] = listeners[key] || []),
              listeners[key].push(callback);
          },
          unsubscribeFromItem: function unsubscribeFromItem(key, callback) {
            var listener = listeners[key];
            listener &&
              (listeners[key] = listener.filter(function (currentListener) {
                return currentListener !== callback;
              }));
          },
          updateItem: function updateItem(key, item) {
            var _extends2;
            state = _extends(
              {},
              state,
              (((_extends2 = {})[key] = item), _extends2)
            );
            var listener = listeners[key];
            listener &&
              listener.forEach(function (currentListener) {
                return currentListener(state[key]);
              });
          },
          getItem: function getItem(key) {
            return state[key];
          },
        };
      }
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return createStore;
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Seperator;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
      function Seperator(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? 's1o2cezu' : _ref$className;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: className }
        );
      }
      __webpack_require__(986);
      try {
        (Separator.displayName = 'Separator'),
          (Separator.__docgenInfo = {
            description: '',
            displayName: 'Separator',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/inline-toolbar/src/components/Separator/index.tsx#Separator'
            ] = {
              docgenInfo: Separator.__docgenInfo,
              name: 'Separator',
              path:
                'packages/inline-toolbar/src/components/Separator/index.tsx#Separator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Seperator;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
      function Seperator(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? 's6m29i4' : _ref$className;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: className }
        );
      }
      __webpack_require__(1031);
      try {
        (Separator.displayName = 'Separator'),
          (Separator.__docgenInfo = {
            description: '',
            displayName: 'Separator',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/static-toolbar/src/components/Separator/index.tsx#Separator'
            ] = {
              docgenInfo: Separator.__docgenInfo,
              name: 'Separator',
              path:
                'packages/static-toolbar/src/components/Separator/index.tsx#Separator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        Draft = __webpack_require__(1),
        immutable = __webpack_require__(3),
        immutable_default = __webpack_require__.n(immutable);
      function moveSelectionToEnd(editorState) {
        var blockMap = editorState.getCurrentContent().getBlockMap(),
          key = blockMap.last().getKey(),
          length = blockMap.last().getLength(),
          selection = new Draft.SelectionState({
            anchorKey: key,
            anchorOffset: length,
            focusKey: key,
            focusOffset: length,
          });
        return Draft.EditorState.acceptSelection(editorState, selection);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var MultiDecorator_MultiDecorator = (function () {
          function MultiDecorator(decorators) {
            (this.decorators = void 0),
              (this.decorators = immutable_default.a.List(decorators));
          }
          var _proto = MultiDecorator.prototype;
          return (
            (_proto.getDecorations = function getDecorations(
              block,
              contentState
            ) {
              var decorations = new Array(block.getText().length).fill(null);
              return (
                this.decorators.forEach(function (decorator, i) {
                  decorator
                    .getDecorations(block, contentState)
                    .forEach(function (key, offset) {
                      key && (decorations[offset] = i + '-' + key);
                    });
                }),
                immutable_default.a.List(decorations)
              );
            }),
            (_proto.getComponentForKey = function getComponentForKey(key) {
              return this.getDecoratorForKey(key).getComponentForKey(
                MultiDecorator.getInnerKey(key)
              );
            }),
            (_proto.getPropsForKey = function getPropsForKey(key) {
              return this.getDecoratorForKey(key).getPropsForKey(
                MultiDecorator.getInnerKey(key)
              );
            }),
            (_proto.getDecoratorForKey = function getDecoratorForKey(key) {
              var parts = key.split('-'),
                index = Number(parts[0]);
              return this.decorators.get(index);
            }),
            (MultiDecorator.getInnerKey = function getInnerKey(key) {
              return key.split('-').slice(1).join('-');
            }),
            MultiDecorator
          );
        })(),
        decoratorIsCustom = function decoratorIsCustom(decorator) {
          return (
            'function' == typeof decorator.getDecorations &&
            'function' == typeof decorator.getComponentForKey &&
            'function' == typeof decorator.getPropsForKey
          );
        };
      function resolveDecorators(props, getEditorState, onChange) {
        var decorators = (function getDecoratorsFromProps(_ref) {
            var decorators = _ref.decorators,
              _ref$plugins = _ref.plugins,
              plugins = void 0 === _ref$plugins ? [] : _ref$plugins;
            return Object(immutable.List)(
              [{ decorators: decorators }].concat(plugins)
            )
              .filter(function (plugin) {
                return void 0 !== (null == plugin ? void 0 : plugin.decorators);
              })
              .flatMap(function (plugin) {
                return null == plugin ? void 0 : plugin.decorators;
              });
          })(props),
          compositeDecorator = (function createCompositeDecorator(
            decorators,
            getEditorState,
            setEditorState
          ) {
            var convertedDecorators = Object(immutable.List)(decorators)
              .map(function (decorator) {
                var Component = decorator.component;
                return _extends({}, decorator, {
                  component: function DecoratedComponent(props) {
                    return react_default.a.createElement(
                      Component,
                      _extends({}, props, {
                        getEditorState: getEditorState,
                        setEditorState: setEditorState,
                      })
                    );
                  },
                });
              })
              .toJS();
            return new Draft.CompositeDecorator(convertedDecorators);
          })(
            decorators.filter(function (decorator) {
              return !decoratorIsCustom(decorator);
            }),
            getEditorState,
            onChange
          ),
          customDecorators = decorators.filter(function (decorator) {
            return decoratorIsCustom(decorator);
          });
        return new MultiDecorator_MultiDecorator(
          customDecorators.push(compositeDecorator)
        );
      }
      function defaultKeyBindings_keyBindingFn(event) {
        return Object(Draft.getDefaultKeyBinding)(event);
      }
      function handleKeyCommand(command, editorState, eventTimeStamp, _ref) {
        var newState,
          setEditorState = _ref.setEditorState;
        switch (command) {
          case 'backspace':
          case 'backspace-word':
          case 'backspace-to-start-of-line':
            newState = Draft.RichUtils.onBackspace(editorState);
            break;
          case 'delete':
          case 'delete-word':
          case 'delete-to-end-of-block':
            newState = Draft.RichUtils.onDelete(editorState);
            break;
          default:
            return 'not-handled';
        }
        return null != newState
          ? (setEditorState(newState), 'handled')
          : 'not-handled';
      }
      function PluginHooks_extends() {
        return (PluginHooks_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]),
            excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }
      function createPluginHooks(plugins, pluginFunction) {
        var pluginHooks = {},
          handledAttributes = new Set(['onChange']);
        return (
          plugins.forEach(function (plugin) {
            Object.keys(plugin).forEach(function (attrName) {
              handledAttributes.has(attrName) ||
                (handledAttributes.add(attrName),
                !(function isEditorEventKey(key) {
                  return key.startsWith('on');
                })(attrName)
                  ? !(function isEditorHandleKey(key) {
                      return key.startsWith('handle');
                    })(attrName)
                    ? (function isEditorFnKey(key) {
                        return key.endsWith('Fn');
                      })(attrName) &&
                      ('blockRendererFn' === attrName
                        ? (pluginHooks.blockRendererFn = (function blockRendererFnHook(
                            plugins,
                            pluginMethods
                          ) {
                            return function (block) {
                              var resultBlock = { props: {} };
                              return (
                                plugins.forEach(function (plugin) {
                                  if (
                                    'function' == typeof plugin.blockRendererFn
                                  ) {
                                    var result = plugin.blockRendererFn(
                                      block,
                                      pluginMethods
                                    );
                                    if (null != result) {
                                      var pluginProps = result.props,
                                        pluginRest = _objectWithoutPropertiesLoose(
                                          result,
                                          ['props']
                                        ),
                                        _resultBlock = resultBlock,
                                        props = _resultBlock.props,
                                        rest = _objectWithoutPropertiesLoose(
                                          _resultBlock,
                                          ['props']
                                        );
                                      resultBlock = PluginHooks_extends(
                                        {},
                                        rest,
                                        pluginRest,
                                        {
                                          props: PluginHooks_extends(
                                            {},
                                            props,
                                            pluginProps
                                          ),
                                        }
                                      );
                                    }
                                  }
                                }),
                                !!resultBlock.component && resultBlock
                              );
                            };
                          })(plugins, pluginFunction))
                        : 'blockStyleFn' === attrName
                        ? (pluginHooks.blockStyleFn = (function blockStyleFnHook(
                            plugins,
                            pluginMethods
                          ) {
                            return function (block) {
                              var styles = [];
                              return (
                                plugins.forEach(function (plugin) {
                                  if (
                                    'function' == typeof plugin.blockStyleFn
                                  ) {
                                    var result = plugin.blockStyleFn(
                                      block,
                                      pluginMethods
                                    );
                                    null != result && styles.push(result);
                                  }
                                }),
                                styles.join(' ')
                              );
                            };
                          })(plugins, pluginFunction))
                        : 'customStyleFn' === attrName
                        ? (pluginHooks.customStyleFn = (function customStyleFnHook(
                            plugins,
                            pluginMethods
                          ) {
                            return function (style, block) {
                              var result;
                              return plugins.some(function (plugin) {
                                return (
                                  'function' == typeof plugin.customStyleFn &&
                                  void 0 !==
                                    (result = plugin.customStyleFn(
                                      style,
                                      block,
                                      pluginMethods
                                    ))
                                );
                              }) && result
                                ? result
                                : {};
                            };
                          })(plugins, pluginFunction))
                        : 'keyBindingFn' === attrName &&
                          (pluginHooks.keyBindingFn = (function keyBindingFnHook(
                            plugins,
                            pluginMethods
                          ) {
                            return function (event) {
                              var result = null;
                              return plugins.some(function (plugin) {
                                return (
                                  'function' == typeof plugin.keyBindingFn &&
                                  void 0 !==
                                    (result = plugin.keyBindingFn(
                                      event,
                                      pluginMethods
                                    ))
                                );
                              })
                                ? result
                                : null;
                            };
                          })(plugins, pluginFunction)))
                    : (pluginHooks[attrName] = (function createHandleHooks(
                        methodName,
                        plugins,
                        pluginMethods
                      ) {
                        return function () {
                          for (
                            var _len = arguments.length,
                              args = new Array(_len),
                              _key = 0;
                            _key < _len;
                            _key++
                          )
                            args[_key] = arguments[_key];
                          return plugins.some(function (plugin) {
                            var fn = plugin[methodName];
                            return (
                              'function' == typeof fn &&
                              'handled' ===
                                fn.apply(void 0, args.concat([pluginMethods]))
                            );
                          })
                            ? 'handled'
                            : 'not-handled';
                        };
                      })(attrName, plugins, pluginFunction))
                  : (pluginHooks[attrName] = (function createEventHooks(
                      methodName,
                      plugins,
                      pluginMethods
                    ) {
                      return function () {
                        for (
                          var _len2 = arguments.length,
                            args = new Array(_len2),
                            _key2 = 0;
                          _key2 < _len2;
                          _key2++
                        )
                          args[_key2] = arguments[_key2];
                        return plugins.some(function (plugin) {
                          var fn = plugin[methodName];
                          return (
                            'function' == typeof fn &&
                            !0 ===
                              fn.apply(void 0, args.concat([pluginMethods]))
                          );
                        });
                      };
                    })(attrName, plugins, pluginFunction)));
            });
          }),
          pluginHooks
        );
      }
      function Editor_extends() {
        return (Editor_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var getDecoratorLength = function getDecoratorLength(obj) {
          var _obj$decorators, _obj$_decorators;
          return null != (null == obj ? void 0 : obj.decorators)
            ? null == (_obj$decorators = obj.decorators)
              ? void 0
              : _obj$decorators.size
            : null != (null == obj ? void 0 : obj._decorators)
            ? null == (_obj$_decorators = obj._decorators)
              ? void 0
              : _obj$_decorators.length
            : void 0;
        },
        Editor_PluginEditor = (function (_Component) {
          function PluginEditor(_props) {
            var _this;
            return (
              ((_this = _Component.call(this, _props) || this).editor = null),
              (_this.state = { readOnly: !1 }),
              (_this.onChange = function (editorState) {
                var newEditorState = editorState;
                _this.resolvePlugins().forEach(function (plugin) {
                  plugin.onChange &&
                    (newEditorState = plugin.onChange(
                      newEditorState,
                      _this.getPluginMethods()
                    ));
                }),
                  _this.props.onChange && _this.props.onChange(newEditorState);
              }),
              (_this.getPlugins = function () {
                return [].concat(_this.props.plugins);
              }),
              (_this.getProps = function () {
                return Editor_extends({}, _this.props);
              }),
              (_this.getReadOnly = function () {
                return _this.props.readOnly || _this.state.readOnly;
              }),
              (_this.setReadOnly = function (readOnly) {
                readOnly !== _this.state.readOnly &&
                  _this.setState({ readOnly: readOnly });
              }),
              (_this.getEditorRef = function () {
                return _this.editor;
              }),
              (_this.getEditorState = function () {
                return _this.props.editorState;
              }),
              (_this.getPluginMethods = function () {
                return {
                  getPlugins: _this.getPlugins,
                  getProps: _this.getProps,
                  setEditorState: _this.onChange,
                  getEditorState: _this.getEditorState,
                  getReadOnly: _this.getReadOnly,
                  setReadOnly: _this.setReadOnly,
                  getEditorRef: _this.getEditorRef,
                };
              }),
              (_this.createPluginHooks = function () {
                return createPluginHooks(
                  [_this.props].concat(_this.resolvePlugins()),
                  _this.getPluginMethods()
                );
              }),
              (_this.resolvePlugins = function () {
                var plugins = _this.getPlugins();
                return (
                  !0 === _this.props.defaultKeyBindings &&
                    plugins.push({
                      keyBindingFn: defaultKeyBindings_keyBindingFn,
                    }),
                  !0 === _this.props.defaultKeyCommands &&
                    plugins.push({ handleKeyCommand: handleKeyCommand }),
                  plugins
                );
              }),
              (_this.resolveCustomStyleMap = function () {
                return _this.props.plugins
                  .filter(function (plug) {
                    return void 0 !== plug.customStyleMap;
                  })
                  .map(function (plug) {
                    return plug.customStyleMap;
                  })
                  .concat([_this.props.customStyleMap])
                  .reduce(function (styles, style) {
                    return Editor_extends({}, styles, style);
                  }, {});
              }),
              (_this.resolveblockRenderMap = function () {
                var blockRenderMap = _this.props.plugins
                  .filter(function (plug) {
                    return void 0 !== plug.blockRenderMap;
                  })
                  .reduce(function (maps, plug) {
                    return maps.merge(plug.blockRenderMap);
                  }, Object(immutable.Map)({}));
                return (
                  _this.props.defaultBlockRenderMap &&
                    (blockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(
                      blockRenderMap
                    )),
                  _this.props.blockRenderMap &&
                    (blockRenderMap = blockRenderMap.merge(
                      _this.props.blockRenderMap
                    )),
                  blockRenderMap
                );
              }),
              (_this.resolveAccessibilityProps = function () {
                var accessibilityProps = {};
                return (
                  _this.resolvePlugins().forEach(function (plugin) {
                    if ('function' == typeof plugin.getAccessibilityProps) {
                      var props = plugin.getAccessibilityProps(),
                        popupProps = {};
                      void 0 === accessibilityProps.ariaHasPopup
                        ? (popupProps.ariaHasPopup = props.ariaHasPopup)
                        : 'true' === props.ariaHasPopup &&
                          (popupProps.ariaHasPopup = 'true'),
                        void 0 === accessibilityProps.ariaExpanded
                          ? (popupProps.ariaExpanded = props.ariaExpanded)
                          : !0 === props.ariaExpanded &&
                            (popupProps.ariaExpanded = !0),
                        (accessibilityProps = Editor_extends(
                          {},
                          accessibilityProps,
                          props,
                          popupProps
                        ));
                    }
                  }),
                  accessibilityProps
                );
              }),
              [_this.props]
                .concat(_this.resolvePlugins())
                .forEach(function (plugin) {
                  plugin &&
                    'function' == typeof plugin.initialize &&
                    plugin.initialize(_this.getPluginMethods());
                }),
              _this
            );
          }
          !(function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(PluginEditor, _Component);
          var _proto = PluginEditor.prototype;
          return (
            (_proto.focus = function focus() {
              this.editor && this.editor.focus();
            }),
            (_proto.blur = function blur() {
              this.editor && this.editor.blur();
            }),
            (_proto.componentDidMount = function componentDidMount() {
              var decorator = resolveDecorators(
                  this.props,
                  this.getEditorState,
                  this.onChange
                ),
                editorState = Draft.EditorState.set(this.props.editorState, {
                  decorator: decorator,
                });
              this.onChange(moveSelectionToEnd(editorState));
            }),
            (_proto.componentDidUpdate = function componentDidUpdate(
              prevProps
            ) {
              var next = this.props,
                currDec = prevProps.editorState.getDecorator(),
                nextDec = next.editorState.getDecorator();
              if (
                currDec &&
                !(
                  currDec === nextDec ||
                  (currDec &&
                    nextDec &&
                    getDecoratorLength(currDec) === getDecoratorLength(nextDec))
                )
              ) {
                var editorState = Draft.EditorState.set(next.editorState, {
                  decorator: currDec,
                });
                this.onChange(moveSelectionToEnd(editorState));
              }
            }),
            (_proto.componentWillUnmount = function componentWillUnmount() {
              var _this2 = this;
              this.resolvePlugins().forEach(function (plugin) {
                plugin.willUnmount &&
                  plugin.willUnmount({
                    getEditorState: _this2.getEditorState,
                    setEditorState: _this2.onChange,
                  });
              });
            }),
            (_proto.render = function render() {
              var _this3 = this,
                pluginHooks = this.createPluginHooks(),
                customStyleMap = this.resolveCustomStyleMap(),
                accessibilityProps = this.resolveAccessibilityProps(),
                blockRenderMap = this.resolveblockRenderMap(),
                _this$props = this.props,
                editorProps =
                  (_this$props.keyBindingFn,
                  (function Editor_objectWithoutPropertiesLoose(
                    source,
                    excluded
                  ) {
                    if (null == source) return {};
                    var key,
                      i,
                      target = {},
                      sourceKeys = Object.keys(source);
                    for (i = 0; i < sourceKeys.length; i++)
                      (key = sourceKeys[i]),
                        excluded.indexOf(key) >= 0 ||
                          (target[key] = source[key]);
                    return target;
                  })(_this$props, ['keyBindingFn']));
              return react_default.a.createElement(
                Draft.Editor,
                Editor_extends(
                  {},
                  editorProps,
                  accessibilityProps,
                  pluginHooks,
                  {
                    readOnly: this.props.readOnly || this.state.readOnly,
                    customStyleMap: customStyleMap,
                    blockRenderMap: blockRenderMap,
                    onChange: this.onChange,
                    editorState: this.props.editorState,
                    ref: function ref(element) {
                      _this3.editor = element;
                    },
                  }
                )
              );
            }),
            PluginEditor
          );
        })(react.Component);
      (Editor_PluginEditor.propTypes = {
        editorState: prop_types_default.a.object.isRequired,
        onChange: prop_types_default.a.func.isRequired,
        plugins: prop_types_default.a.array,
        defaultKeyBindings: prop_types_default.a.bool,
        defaultKeyCommands: prop_types_default.a.bool,
        defaultBlockRenderMap: prop_types_default.a.bool,
        customStyleMap: prop_types_default.a.object,
        decorators: prop_types_default.a.array,
      }),
        (Editor_PluginEditor.defaultProps = {
          defaultBlockRenderMap: !0,
          defaultKeyBindings: !0,
          defaultKeyCommands: !0,
          customStyleMap: {},
          plugins: [],
          decorators: [],
        });
      __webpack_exports__.a = Editor_PluginEditor;
      try {
        (Editor_PluginEditor.displayName = 'PluginEditor'),
          (Editor_PluginEditor.__docgenInfo = {
            description: 'The main editor component',
            displayName: 'PluginEditor',
            props: {
              plugins: {
                defaultValue: null,
                description: '',
                name: 'plugins',
                required: !1,
                type: { name: 'EditorPlugin[]' },
              },
              defaultKeyBindings: {
                defaultValue: null,
                description: '',
                name: 'defaultKeyBindings',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultKeyCommands: {
                defaultValue: null,
                description: '',
                name: 'defaultKeyCommands',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultBlockRenderMap: {
                defaultValue: null,
                description: '',
                name: 'defaultBlockRenderMap',
                required: !1,
                type: { name: 'boolean' },
              },
              keyBindingFn: {
                defaultValue: null,
                description: '',
                name: 'keyBindingFn',
                required: !1,
                type: {
                  name:
                    '((event: KeyboardEvent<Element>) => string | null) | undefined',
                },
              },
              decorators: {
                defaultValue: null,
                description: '',
                name: 'decorators',
                required: !1,
                type: { name: '(CompositeDraftDecorator | DraftDecorator)[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/editor/src/Editor/index.tsx#PluginEditor'
            ] = {
              docgenInfo: Editor_PluginEditor.__docgenInfo,
              name: 'PluginEditor',
              path: 'packages/editor/src/Editor/index.tsx#PluginEditor',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(834);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(931);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(934);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(939);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(940);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(943);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(944);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(949);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(977);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(978);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(979);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(982);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(988);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(989);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(990);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(992);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    ,
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(995);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1010);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1011);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1012);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1013);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1014);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1015);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1016);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1018);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1019);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1020);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1021);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1022);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1023);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1024);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1025);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1027);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1034);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1037);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      __webpack_require__(462),
        __webpack_require__(634),
        __webpack_require__(635),
        __webpack_require__(825),
        (module.exports = __webpack_require__(830));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, exports) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(315);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      'use strict';
      var _clientApi = __webpack_require__(162),
        _clientLogger = __webpack_require__(72),
        _configFilename = __webpack_require__(826);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      (_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({
            args: _configFilename.args,
            argTypes: _configFilename.argTypes,
          })
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1);
          }),
        _configFilename.loaders &&
          _configFilename.loaders.forEach(function (loader) {
            return (0, _clientApi.addLoader)(loader, !1);
          }),
        (_configFilename.parameters ||
          _configFilename.globals ||
          _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              {
                globals: _configFilename.globals,
                globalTypes: _configFilename.globalTypes,
              }
            ),
            !1
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(827);
    },
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(315).configure)(
          [__webpack_require__(831), __webpack_require__(832)],
          module,
          !1
        );
      }.call(this, __webpack_require__(132)(module)));
    },
    function (module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = function () {
        return [];
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 831);
    },
    function (module, exports, __webpack_require__) {
      var map = {
        './adding-images/src/AddImageEditor.stories.tsx': 1042,
        './adding-video/src/CustomAddVideoEditor.stories.tsx': 1043,
        './align-drag-focus-and-resize-images/src/CustomImageEditor.stories.tsx': 1053,
        './alignment/src/SimpleAlignmentEditor.stories.tsx': 1044,
        './counter-plugin-simple/src/SimpleCounterEditor.stories.tsx': 1039,
        './displaying-images/src/SimpleImageEditor.stories.tsx': 1054,
        './divider-with-side-toolbar/src/DividerWithSideToolbar.stories.tsx': 1040,
        './drag-n-drop/src/DragNDropImageEditor.stories.tsx': 1055,
        './emoji-styled/src/CustomEmojiEditor.stories.tsx': 1056,
        './emoji/src/SimpleEmojiEditor.stories.tsx': 1057,
        './focus/src/SimpleFocusEditor.stories.tsx': 1045,
        './hashtag-styled/src/CustomHashtagEditor.stories.tsx': 1058,
        './hashtag/src/SimpleHashtagEditor.stories.tsx': 1059,
        './inline-toolbar-custom-buttons/src/CustomInlineToolbarEditor.stories.tsx': 1060,
        './inline-toolbar-custom-styled/src/ThemedInlineToolbarEditor.stories.tsx': 1061,
        './inline-toolbar-relative-parent/src/RelativeParentInlineToolbarEditor.stories.tsx': 1062,
        './inline-toolbar-with-anchor-plugin/src/AnchorSimpleLinkPluginEditor.stories.tsx': 1038,
        './inline-toolbar/src/SimpleInlineToolbarEditor.stories.tsx': 1063,
        './kitchensink/src/KitchenSink.stories.tsx': 1041,
        './linkify-configured/src/CustomLinkifyEditor.stories.tsx': 1064,
        './linkify/src/SimpleLinkifyEditor.stories.tsx': 1065,
        './mentions-custom-component/src/CustomComponentMentionEditor.stories.tsx': 1046,
        './mentions-custom-styled/src/CustomMentionEditor.stories.tsx': 1047,
        './mentions-custom-trigger/src/MentionEditorWithCustomTrigger.stories.tsx': 1048,
        './mentions-remote/src/RemoteMentionEditor.stories.tsx': 1066,
        './mentions-with-whitespace/src/MentionEditorWithWhitespaceSupport.stories.tsx': 1049,
        './mentions/src/SimpleMentionEditor.stories.tsx': 1050,
        './resizable/src/ResizableEditor.stories.tsx': 1051,
        './side-toolbar-custom/src/CustomSideToolbarEditor.stories.tsx': 1067,
        './side-toolbar-relative-parent/src/RelativeParentSideToolbarEditor.stories.tsx': 1068,
        './side-toolbar/src/SimpleSideToolbarEditor.stories.tsx': 1069,
        './static-toolbar-custom-buttons/src/CustomToolbarEditor.stories.tsx': 1070,
        './static-toolbar-styled/src/ThemedToolbarEditor.stories.tsx': 1071,
        './static-toolbar/src/SimpleToolbarEditor.stories.tsx': 1072,
        './sticker/src/SimpleStickerEditor.stories.tsx': 1052,
        './undo/src/SimpleUndoEditor.stories.tsx': 1073,
        './video/src/SimpleVideoEditor.stories.tsx': 1074,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 832);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.styles__addImage___3Uz8J {\n  background: #FFF;\n  display: inline-block;\n}\n\n.styles__addImagePopover___2WU0t {\n  margin-top: 10px;\n  background: #FFF;\n  position: absolute;\n  height: 54px;\n  width: 300px;\n  border-radius: 2px;\n  padding: 10px;\n  box-shadow: 0px 4px 30px 0px rgba(220,220,220,1);\n  z-index: 1000;\n}\n\n.styles__addImageClosedPopover___1IqPa {\n  display: none;\n}\n\n.styles__addImageButton___2sPbJ, .styles__addImagePressedButton___3SYHy {\n  box-sizing: border-box;\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 0;\n  color: #888;\n  margin: 0;\n  border-radius: 1.5em;\n  cursor: pointer;\n  height: 1.5em;\n  width: 2.5em;\n  font-size: 1.5em;\n  line-height: 1.2em;\n  margin: 0;\n}\n\n.styles__addImageButton___2sPbJ:focus {\n  outline: 0; /* reset for :focus */\n}\n\n.styles__addImageButton___2sPbJ:hover {\n  background: #f3f3f3;\n}\n\n.styles__addImageButton___2sPbJ:active {\n  background: #e6e6e6;\n}\n\n.styles__addImagePressedButton___3SYHy {\n  background: #ededed;\n}\n\n.styles__addImageBottomGradient___2ASj3 {\n  width: 100%;\n  height: 1em;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background-color: white;\n  pointer-events: none;\n  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);\n}\n\n.styles__addImageInput___9D6Su {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 4px;\n  width: 78%;\n  border-radius: 2px;\n  margin-bottom: 1em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.styles__addImageConfirmButton___3LquK {\n  box-sizing: border-box;\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 0;\n  color: #888;\n  margin: 0;\n  border-radius: 2.1em;\n  cursor: pointer;\n  height: 2.1em;\n  width: 18%;\n  font-size: 1em;\n  line-height: 2.1em;\n  margin: 0;\n  margin-left: 4%;\n}\n\n.styles__addImageConfirmButton___3LquK:focus {\n  outline: 0; /* reset for :focus */\n}\n\n.styles__addImageConfirmButton___3LquK:hover {\n  background: #f3f3f3;\n}\n\n.styles__addImageConfirmButton___3LquK:active {\n  background: #e6e6e6;\n}\n',
        '',
      ]),
        (exports.locals = {
          addImage: 'styles__addImage___3Uz8J',
          addImagePopover: 'styles__addImagePopover___2WU0t',
          addImageClosedPopover: 'styles__addImageClosedPopover___1IqPa',
          addImageButton: 'styles__addImageButton___2sPbJ',
          addImagePressedButton: 'styles__addImagePressedButton___3SYHy',
          addImageBottomGradient: 'styles__addImageBottomGradient___2ASj3',
          addImageInput: 'styles__addImageInput___9D6Su',
          addImageConfirmButton: 'styles__addImageConfirmButton___3LquK',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1aY1C {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1aY1C .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___JQbUf {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___1aY1C',
          options: 'editorStyles__options___JQbUf',
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.styles__addVideo___3TJpX {\n    background: #FFF;\n    display: inline-block;\n}\n\n.styles__addVideoPopover___2wc66 {\n    margin-top: 10px;\n    background: #FFF;\n    position: absolute;\n    height: 54px;\n    width: 300px;\n    border-radius: 2px;\n    padding: 10px;\n    box-shadow: 0px 4px 30px 0px rgba(220, 220, 220, 1);\n    z-index: 1000;\n}\n\n.styles__addVideoClosedPopover___3V99k {\n    display: none;\n}\n\n.styles__addVideoButton___10Zwj {\n    box-sizing: border-box;\n    background: #fff;\n    border: 1px solid #ddd;\n    padding: 0;\n    color: #888;\n    margin: 0;\n    border-radius: 1.5em;\n    cursor: pointer;\n    height: 1.5em;\n    width: 2.5em;\n    font-size: 1.5em;\n    line-height: 1.2em;\n    margin: 0;\n}\n\n.styles__addVideoButton___10Zwj:focus {\n    outline: 0; /* reset for :focus */\n}\n\n.styles__addVideoButton___10Zwj:hover {\n    background: #f3f3f3;\n}\n\n.styles__addVideoButton___10Zwj:active {\n    background: #e6e6e6;\n}\n\n.styles__addVideoPressedButton___22ATW {\n    background: #ededed;\n}\n\n.styles__addVideoBottomGradient___24h0J {\n    width: 100%;\n    height: 1em;\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    background-color: white;\n    pointer-events: none;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);\n}\n\n.styles__addVideoInput___2N2EJ {\n    box-sizing: border-box;\n    border: 1px solid #ddd;\n    cursor: text;\n    padding: 4px;\n    width: 78%;\n    border-radius: 2px;\n    margin-bottom: 1em;\n    box-shadow: inset 0px 1px 8px -3px #ABABAB;\n    background: #fefefe;\n}\n\n.styles__addVideoConfirmButton___2E0v8 {\n    box-sizing: border-box;\n    background: #fff;\n    border: 1px solid #ddd;\n    padding: 0;\n    color: #888;\n    margin: 0;\n    border-radius: 2.1em;\n    cursor: pointer;\n    height: 2.1em;\n    width: 18%;\n    font-size: 1em;\n    line-height: 2.1em;\n    margin: 0;\n    margin-left: 4%;\n}\n\n.styles__addVideoConfirmButton___2E0v8:focus {\n    outline: 0; /* reset for :focus */\n}\n\n.styles__addVideoConfirmButton___2E0v8:hover {\n    background: #f3f3f3;\n}\n\n.styles__addVideoConfirmButton___2E0v8:active {\n    background: #e6e6e6;\n}\n',
        '',
      ]),
        (exports.locals = {
          addVideo: 'styles__addVideo___3TJpX',
          addVideoPopover: 'styles__addVideoPopover___2wc66',
          addVideoClosedPopover: 'styles__addVideoClosedPopover___3V99k',
          addVideoButton: 'styles__addVideoButton___10Zwj',
          addVideoPressedButton:
            'styles__addVideoPressedButton___22ATW styles__addVideoButton___10Zwj',
          addVideoBottomGradient: 'styles__addVideoBottomGradient___24h0J',
          addVideoInput: 'styles__addVideoInput___2N2EJ',
          addVideoConfirmButton: 'styles__addVideoConfirmButton___2E0v8',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2UfcQ {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2UfcQ .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___2UfcQ' });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(933);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.ifi492u{width:100%;height:0;position:relative;padding-bottom:56.25%;}\n.i1hzzm9j{width:100%;height:100%;position:absolute;top:0;left:0;}\n.ikyzbpi{text-align:center;background-color:#eaeaea;padding:1em;}\n.vlyzuw8{width:100%;height:100%;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1-7Mr {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1-7Mr .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___M8SkQ {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___1-7Mr',
          options: 'editorStyles__options___M8SkQ',
        });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(936);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.uz5k6rs:hover{cursor:default;border-radius:2px;box-shadow:0 0 0 3px #d2e3f7;}\n.f1vn2c6d{cursor:default;border-radius:2px;box-shadow:0 0 0 3px #accef7;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(938);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        ".b1qfpj3o{display:inline-block;}\n.bgspekh{background:#fbfbfb;color:#888;font-size:18px;border:0;padding-top:5px;vertical-align:bottom;height:34px;width:36px;}.bgspekh:hover,.bgspekh:focus{background:#f3f3f3;outline:0;}.bgspekh svg{fill:#888;}\n.autuw9p{background:#efefef;color:#444;}.autuw9p svg{fill:#444;}\n.awlhfjh{left:50%;-webkit-transform:translate(-50%) scale(0);-ms-transform:translate(-50%) scale(0);transform:translate(-50%) scale(0);position:absolute;border:1px solid #ddd;background:#fff;border-radius:2px;box-shadow:0px 1px 3px 0px rgba(220,220,220,1);z-index:2;box-sizing:border-box;}.awlhfjh:after,.awlhfjh:before{top:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;}.awlhfjh:after{border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:4px;margin-left:-4px;}.awlhfjh:before{border-color:rgba(221,221,221,0);border-top-color:#ddd;border-width:6px;margin-left:-6px;}",
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1gGCb {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1gGCb .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___35nJA {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___1gGCb',
          options: 'editorStyles__options___35nJA',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1rGTd {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1rGTd .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___1rGTd' });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(942);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.c1svg00{color:inherit;}\n.c6sdxe3{color:#d86262;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___3o9uP {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___3o9uP .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___IVXIM {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___3o9uP',
          options: 'editorStyles__options___IVXIM',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___RV9d2 {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___RV9d2 .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___RV9d2' });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(946);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        ".d6zlymw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;margin:32px 0;border:none;text-align:center;}.d6zlymw::after{margin-left:48px;color:rgba(0,0,0,0.26);font-size:2.125rem;-webkit-letter-spacing:48px;-moz-letter-spacing:48px;-ms-letter-spacing:48px;letter-spacing:48px;content:'\\2022\\2022\\2022';}",
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(948);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        ".b1x6qj4x{display:inline-block;}\n.b1vm70k4{background:#fbfbfb;color:#888;font-size:18px;border:0;padding-top:5px;vertical-align:bottom;height:34px;width:36px;}.b1vm70k4:hover,.b1vm70k4:focus{background:#f3f3f3;outline:0;}.b1vm70k4 svg{fill:#888;}\n.ah6tpgz{background:#efefef;color:#444;}.ah6tpgz svg{fill:#444;}\n.bloz0n9{box-sizing:border-box;border:1px solid #ddd;background:#fff;padding:5px;margin:0;border-radius:18px;cursor:pointer;height:36px;width:36px;line-height:36px;text-align:center;}.bloz0n9 svg{fill:#888;}\n.s98xzql{position:absolute;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);width:74px;height:8px;}\n.p1sbsapy{position:absolute;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);background:#efefef;border:1px solid #ddd;background:#fff;border-radius:2px;box-shadow:0px 1px 3px 0px rgba(220,220,220,1);z-index:3;box-sizing:border-box;width:74px;margin-top:8px;}.p1sbsapy:after,.p1sbsapy:before{bottom:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;}.p1sbsapy:after{border-color:rgba(251,251,251,0);border-bottom-color:#fbfbfb;border-width:4px;margin-left:-4px;}.p1sbsapy:before{border-color:rgba(221,221,221,0);border-bottom-color:#ddd;border-width:6px;margin-left:-6px;}\n.w1f9fdzj{position:absolute;}",
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___19S8g {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___19S8g .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___ZBm__ {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___19S8g',
          options: 'editorStyles__options___ZBm__',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___393WO {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___393WO .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___1NU-B {\n  margin-bottom: 2em;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___393WO',
          options: 'editorStyles__options___1NU-B',
        });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(952);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.e17si09n{position:absolute;right:0;top:0.3em;bottom:0.3em;width:0.25em;background-color:#e0e0e0;border-radius:0.125em;opacity:0.1;-webkit-transition:opacity 0.4s;transition:opacity 0.4s;}\n.e19xmvdb{margin:1em 0;padding-left:0.5em;font-weight:normal;font-size:1em;color:#9e9e9e;}\n.e1g1wugw{background-position:center;background-repeat:no-repeat;background-size:contain;vertical-align:middle;display:inline-block;overflow:hidden;max-width:1.95ch;max-height:1em;line-height:inherit;margin:-0.2ex 0em 0.2ex;color:transparent;min-width:1em;}\n.esyutjr{border:1px solid #eee;margin-top:1.75em;position:absolute;min-width:220px;max-width:440px;background:#fff;border-radius:2px;box-shadow:0px 4px 30px 0px rgba(220,220,220,1);cursor:pointer;padding-top:8px;padding-bottom:8px;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}\n.e1eijkox{padding:5px 10px 1px 10px;-webkit-transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);}.e1eijkox:active{background-color:#cce7ff;}\n.e1adbvmt{padding:5px 10px 1px 10px;-webkit-transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);background-color:#e6f3ff;}.e1adbvmt:active{background-color:#cce7ff;}\n.e13wg9oj{display:inline-block;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:368px;font-size:0.9em;}\n.e1w5jrn9{width:1em;height:1em;margin-left:0.25em;margin-right:0.25em;display:inline-block;}\n.e183m4hm{display:inline-block;}\n.e8k2yoa{margin:0;padding:0;width:2.5em;height:1.5em;box-sizing:border-box;line-height:1.2em;font-size:1.5em;color:#888;background:#fff;border:1px solid #ddd;border-radius:1.5em;cursor:pointer;}.e8k2yoa:focus{outline:0;}.e8k2yoa:hover{background:#f3f3f3;}.e8k2yoa:active{background:#e6e6e6;}\n.e13wqaj6{margin:0;padding:0;width:2.5em;height:1.5em;box-sizing:border-box;line-height:1.2em;font-size:1.5em;color:#888;background:#fff;border:1px solid #ddd;border-radius:1.5em;cursor:pointer;background:#ededed;}.e13wqaj6:focus{outline:0;}.e13wqaj6:hover{background:#f3f3f3;}.e13wqaj6:active{background:#e6e6e6;}\n.ec6zxdw > div{overscroll-behavior:contain;}\n.ejr02pv{margin-top:10px;padding:0 0.3em;position:absolute;z-index:1000;box-sizing:content-box;background:#fff;border:1px solid #e0e0e0;box-shadow:0 4px 30px 0 gainsboro;}\n.e6amujp{display:none;}\n.e16zneum{margin:0 0 0.3em;padding-left:1em;height:2.5em;line-height:2.5em;font-weight:normal;font-size:1em;color:#9e9e9e;}\n.e1kg9q3n{margin:0 0 0.3em;position:relative;z-index:0;width:21em;height:20em;}.e1kg9q3n:hover .e17si09n{opacity:0.3;}.e1kg9q3n .e17si09n:hover,.e1kg9q3n .e17si09n:active{opacity:0.6;}\n.e1m341vm{padding:0 0.5em;}.e1m341vm:first-child .e19xmvdb{display:none;}\n.e13arc1{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n.e6nwac2{width:2.5em;height:2.5em;}\n.e3h4qvg{position:absolute;left:0;right:0;top:0;bottom:0;z-index:2;}\n.e1129lxj{margin:0.3em;padding:0.3em;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;border:1px solid #e0e0e0;border-radius:0.5em;background:#fff;box-shadow:0 0 0.3em rgba(0,0,0,0.1);}\n.eug7aee{width:2.5em;height:2.5em;}.eug7aee:first-child{border-right:1px solid #e0e0e0;}\n.eyoq5wq{padding:0;width:100%;height:100%;background:none;border:none;outline:none;-webkit-transition:background-color 0.4s cubic-bezier(0.27,1.27,0.48,0.56);transition:background-color 0.4s cubic-bezier(0.27,1.27,0.48,0.56);}\n.e1eigyu0{padding:0;width:100%;height:100%;background:none;border:none;outline:none;-webkit-transition:background-color 0.4s cubic-bezier(0.27,1.27,0.48,0.56);transition:background-color 0.4s cubic-bezier(0.27,1.27,0.48,0.56);background-color:#efefef;}\n.e11mkpma{width:1.5em;height:1.5em;vertical-align:middle;}\n.e1cibj9i{margin:0;padding:0 0.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:20em;list-style:none;}\n.e2bpndj{width:2.5em;height:2.5em;}\n.e1qma4nk{padding:0;width:100%;height:100%;font-size:1.2em;color:#bdbdbd;background:none;border:none;outline:none;}\n.e1q5rpho{padding:0;width:100%;height:100%;font-size:1.2em;color:#bdbdbd;background:none;border:none;outline:none;color:#42a5f5;}\n.e1duapnp{background-color:#000;border-radius:0.125em;cursor:pointer;}',
        '',
      ]);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2vc0Y {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2vc0Y .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___3A41F {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___2vc0Y',
          options: 'editorStyles__options___3A41F',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2fU4u {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2fU4u .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___11UEU {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___2fU4u',
          options: 'editorStyles__options___11UEU',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___3kHTu {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___3kHTu .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___3kHTu' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.hashtagStyles__hashtag___3dwOj {\n  color: #1CA782;\n  font-family: cursive;\n}\n',
        '',
      ]),
        (exports.locals = { hashtag: 'hashtagStyles__hashtag___3dwOj' });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(981);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.hngfxw3{color:#5e93c5;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2Tg3q {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2Tg3q .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___2Tg3q' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1Ow9K {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1Ow9K .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__headlineButtonWrapper___3e0Ye {\n  display: inline-block;\n}\n\n.editorStyles__headlineButton___3Mx4H {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.editorStyles__headlineButton___3Mx4H:hover,\n.editorStyles__headlineButton___3Mx4H:focus {\n  background: #f3f3f3;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___1Ow9K',
          headlineButtonWrapper: 'editorStyles__headlineButtonWrapper___3e0Ye',
          headlineButton: 'editorStyles__headlineButton___3Mx4H',
        });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(985);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        ".bpsgbes{display:inline-block;}\n.b181v2oy{background:#fbfbfb;color:#888;font-size:18px;border:0;padding-top:5px;vertical-align:bottom;height:34px;width:36px;}.b181v2oy:hover,.b181v2oy:focus{background:#f3f3f3;outline:0;}.b181v2oy svg{fill:#888;}\n.a9immln{background:#efefef;color:#444;}.a9immln svg{fill:#444;}\n.tukdd6b{left:50%;-webkit-transform:translate(-50%) scale(0);-ms-transform:translate(-50%) scale(0);transform:translate(-50%) scale(0);position:absolute;border:1px solid #ddd;background:#fff;border-radius:2px;box-shadow:0px 1px 3px 0px rgba(220,220,220,1);z-index:2;box-sizing:border-box;}.tukdd6b:after,.tukdd6b:before{top:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;}.tukdd6b:after{border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:4px;margin-left:-4px;}.tukdd6b:before{border-color:rgba(221,221,221,0);border-top-color:#ddd;border-width:6px;margin-left:-6px;}",
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(987);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.s1o2cezu{display:inline-block;border-right:1px solid #ddd;height:24px;margin:0 0.5em;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1owwf {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1owwf .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___1owwf' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.buttonStyles__buttonWrapper___2g2cA {\n  display: inline-block;\n}\n\n.buttonStyles__button___2lGMl {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.buttonStyles__button___2lGMl svg {\n  fill: #ddd;\n}\n\n.buttonStyles__button___2lGMl:hover, .buttonStyles__button___2lGMl:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.buttonStyles__active___2UukU {\n  color: #6a9cc9;\n}\n\n.buttonStyles__active___2UukU svg {\n  fill: #6a9cc9;\n}\n',
        '',
      ]),
        (exports.locals = {
          buttonWrapper: 'buttonStyles__buttonWrapper___2g2cA',
          button: 'buttonStyles__button___2lGMl',
          active: 'buttonStyles__active___2UukU',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.toolbarStyles__toolbar___3UOHx {\n  left: 50%;\n  transform: translate(-50%) scale(0);\n  position: absolute;\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.toolbarStyles__toolbar___3UOHx:after, .toolbarStyles__toolbar___3UOHx:before {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.toolbarStyles__toolbar___3UOHx:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.toolbarStyles__toolbar___3UOHx:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n',
        '',
      ]),
        (exports.locals = { toolbar: 'toolbarStyles__toolbar___3UOHx' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__root___33Nz_ {\n  padding: 50px;\n  position: relative;\n}\n\n.editorStyles__editor___cXEr0 {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___cXEr0 .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = {
          root: 'editorStyles__root___33Nz_',
          editor: 'editorStyles__editor___cXEr0',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2SvbR {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2SvbR .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___2SvbR' });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(994);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.i1qh9dya{height:34px;width:220px;padding:0 12px;font-size:15px;font-family:inherit;background-color:transparent;border:none;color:#444;}.i1qh9dya:focus{outline:none;}.i1qh9dya::-webkit-input-placeholder{color:#888;}.i1qh9dya::-moz-placeholder{color:#888;}.i1qh9dya:-ms-input-placeholder{color:#888;}.i1qh9dya::placeholder{color:#888;}\n.i119ugvj{color:#e65757;}\n.lit0q4h{color:#2996da;-webkit-text-decoration:underline;text-decoration:underline;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___15tMX {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___15tMX .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___15tMX' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.styles__root___2Wmzk {\n  background: #FFF;\n}\n\n.styles__editor___lv9Hd {\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 10px;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.styles__editor___lv9Hd .public-DraftEditor-content {\n  min-height: 240px;\n}\n\n.styles__stateButton___1l7Sl {\n  border: 1px solid #bbb;\n  height: 40px;\n  padding: 0 1.2em;\n  color: #888;\n  margin: 0;\n  border-radius: 20px;\n  line-height: 1.2em;\n  cursor: pointer;\n  margin-right: 10px;\n  position: relative;\n  top: -4px;\n  background-color: #fff;\n}\n\n.styles__stateButton___1l7Sl:focus {\n  outline: 0; /* reset for :focus */\n}\n\n.styles__stateButton___1l7Sl:hover {\n  background: #f3f3f3;\n}\n\n.styles__stateButton___1l7Sl:active {\n  background: #e6e6e6;\n}\n\n.styles__pressedStateButton___1rVLy {\n  background-color: #ededed;\n}\n\n.styles__editorButton___CZdrA {\n  margin-right: 10px;\n  display: inline-block;\n}\n',
        '',
      ]),
        (exports.locals = {
          root: 'styles__root___2Wmzk',
          editor: 'styles__editor___lv9Hd',
          stateButton: 'styles__stateButton___1l7Sl',
          pressedStateButton:
            'styles__pressedStateButton___1rVLy styles__stateButton___1l7Sl',
          editorButton: 'styles__editorButton___CZdrA',
        });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(998);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.lxvs42t,.lxvs42t:visited{color:#5e93c5;-webkit-text-decoration:none;text-decoration:none;}.lxvs42t:hover,.lxvs42t:focus{color:#7eadda;outline:0;cursor:pointer;}.lxvs42t:active{color:#4a7bab;}',
        '',
      ]);
    },
    ,
    ,
    ,
    ,
    ,
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1005);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.m6zwb4v,.m6zwb4v:visited{color:#575f67;cursor:pointer;display:inline-block;background:#e6f3ff;padding-left:2px;padding-right:2px;border-radius:2px;-webkit-text-decoration:none;text-decoration:none;}.m6zwb4v:hover,.m6zwb4v:focus{color:#677584;background:#edf5fd;outline:0;}.m6zwb4v:active{color:#222;background:#455261;}\n.mnw6qvm{border:1px solid #eee;margin-top:0.4em;position:absolute;min-width:220px;max-width:440px;background:#fff;border-radius:2px;box-shadow:0px 4px 30px 0px rgba(220,220,220,1);cursor:pointer;padding-top:8px;padding-bottom:8px;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}\n.m1ymsnxd{padding:7px 10px 3px 10px;-webkit-transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);}.m1ymsnxd:active{background-color:#cce7ff;}\n.m126ak5t{padding:7px 10px 3px 10px;-webkit-transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);transition:background-color 0.4s cubic-bezier(.27,1.27,.48,.56);background-color:#e6f3ff;}.m126ak5t:active{background-color:#cce7ff;}\n.mtiwdxc{display:inline-block;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:368px;font-size:0.9em;margin-bottom:0.2em;}\n.myz2dw1{display:inline-block;width:24px;height:24px;border-radius:12px;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1007);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.b1lh9taq{box-sizing:border-box;border:1px solid #ddd;height:1.5em;color:#888;border-radius:1.5em;line-height:1.2em;cursor:pointer;background-color:#fff;width:2.5em;font-weight:bold;font-size:1.5em;padding:0;margin:0;}.b1lh9taq:focus{background-color:#eee;color:#999;outline:0;}.b1lh9taq:hover{background-color:#eee;color:#999;}.b1lh9taq:active{background-color:#ddd;color:#777;}.b1lh9taq:disabled{background-color:#f5f5f5;color:#ccc;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1009);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.sl55r16{margin:0;position:relative;display:block;}\n.s1b1f21y{width:80px;height:80px;}\n.s3u1xfs{background:#d9d9d9;color:#fff;margin:0;padding:0.5em;border:none;border-radius:50%;line-height:80%;position:absolute;font-size:0.62em;margin-left:-0.825em;cursor:pointer;}.s3u1xfs:hover{background:#e4e4e4;}.s3u1xfs:active{background:#cecece;color:#efefef;}\n.snop97i{background:#fff;display:inline-block;}\n.s1te48ud{margin-top:10px;background:#fff;position:absolute;height:250px;width:230px;border-radius:2px;padding:10px;box-shadow:0px 4px 30px 0px rgba(220,220,220,1);z-index:1000;}\n.sqwiblq{display:none;}\n.s1sha4g8{width:100%;height:1em;position:absolute;bottom:0px;left:0px;right:0px;background-color:white;pointer-events:none;background:linear-gradient( to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100% );}\n.s1m6n3s1{box-sizing:border-box;background:#fff;border:1px solid #ddd;padding:0;color:#888;margin:0;border-radius:1.5em;cursor:pointer;height:1.5em;width:2.5em;font-size:1.5em;line-height:1.2em;margin:0;}.s1m6n3s1:focus{outline:0;}.s1m6n3s1:hover{background:#f3f3f3;}.s1m6n3s1:active{background:#e6e6e6;}\n.shl2p6m{box-sizing:border-box;background:#fff;border:1px solid #ddd;padding:0;color:#888;margin:0;border-radius:1.5em;cursor:pointer;height:1.5em;width:2.5em;font-size:1.5em;line-height:1.2em;margin:0;background:#ededed;}.shl2p6m:focus{outline:0;}.shl2p6m:hover{background:#f3f3f3;}.shl2p6m:active{background:#e6e6e6;}\n.sjjedyb{position:absolute;overflow-x:none;overflow-y:scroll;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}\n.s14u7spj{border:0;border-radius:4px;background:#fff;margin:5px 0px 5px 0px;box-sizing:border-box;}.s14u7spj:hover{background:#efefef;outline:0;}.s14u7spj:active{background:#dfdfdf;}\n.s64maza{height:80px;width:80px;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___30hOL {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___30hOL .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___30hOL' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___Lw0To {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___Lw0To .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___Lw0To' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___beWxS {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___beWxS .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___beWxS' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___3ElT1 {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___3ElT1 .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___3ElT1' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.mentionsStyles__mention___4GlTa {\n  color: #4a85bb;\n  text-decoration: none;\n}\n\n.mentionsStyles__mentionSuggestions___1mLUC {\n  border-top: 1px solid #eee;\n  background: #fff;\n  border-radius: 2px;\n  cursor: pointer;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  transform-origin: 50% 0%;\n  transform: scaleY(0);\n  margin: -16px;\n}\n\n.mentionsStyles__mentionSuggestionsEntryContainer___3Iyq7 {\n  display: table;\n  width: 100%;\n}\n\n.mentionsStyles__mentionSuggestionsEntryContainerLeft___zkMMc,\n.mentionsStyles__mentionSuggestionsEntryContainerRight___1CSMe {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.mentionsStyles__mentionSuggestionsEntryContainerRight___1CSMe {\n  width: 100%;\n  padding-left: 8px;\n}\n\n.mentionsStyles__mentionSuggestionsEntry___1YkPV {\n  padding: 7px 10px 3px 10px;\n  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);\n}\n\n.mentionsStyles__mentionSuggestionsEntry___1YkPV:active {\n  background-color: #cce7ff;\n}\n\n.mentionsStyles__mentionSuggestionsEntryFocused___2Bpd- {\n  background-color: #e6f3ff;\n}\n\n.mentionsStyles__mentionSuggestionsEntryText___2z3NX,\n.mentionsStyles__mentionSuggestionsEntryTitle___kj9ta {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mentionsStyles__mentionSuggestionsEntryText___2z3NX {\n}\n\n.mentionsStyles__mentionSuggestionsEntryTitle___kj9ta {\n  font-size: 80%;\n  color: #a7a7a7;\n}\n\n.mentionsStyles__mentionSuggestionsEntryAvatar___DHRR0 {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n',
        '',
      ]),
        (exports.locals = {
          mention: 'mentionsStyles__mention___4GlTa',
          mentionSuggestions: 'mentionsStyles__mentionSuggestions___1mLUC',
          mentionSuggestionsEntryContainer:
            'mentionsStyles__mentionSuggestionsEntryContainer___3Iyq7',
          mentionSuggestionsEntryContainerLeft:
            'mentionsStyles__mentionSuggestionsEntryContainerLeft___zkMMc',
          mentionSuggestionsEntryContainerRight:
            'mentionsStyles__mentionSuggestionsEntryContainerRight___1CSMe',
          mentionSuggestionsEntry:
            'mentionsStyles__mentionSuggestionsEntry___1YkPV',
          mentionSuggestionsEntryFocused:
            'mentionsStyles__mentionSuggestionsEntryFocused___2Bpd- mentionsStyles__mentionSuggestionsEntry___1YkPV',
          mentionSuggestionsEntryText:
            'mentionsStyles__mentionSuggestionsEntryText___2z3NX',
          mentionSuggestionsEntryTitle:
            'mentionsStyles__mentionSuggestionsEntryTitle___kj9ta',
          mentionSuggestionsEntryAvatar:
            'mentionsStyles__mentionSuggestionsEntryAvatar___DHRR0',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___3WSd5 {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___3WSd5 .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___3WSd5' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___9qIxN {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___9qIxN .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___9qIxN' });
    },
    ,
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1DMMx {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1DMMx .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___1DMMx' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.mentionsStyles__mention___Tagmz {\n  color: #4a85bb;\n  text-decoration: none;\n}\n\n.mentionsStyles__mentionSuggestions___w0IAP {\n  border-top: 1px solid #eee;\n  background: #fff;\n  border-radius: 2px;\n  cursor: pointer;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  transform-origin: 50% 0%;\n  transform: scaleY(0);\n  margin: -16px;\n}\n\n.mentionsStyles__mentionSuggestionsEntryContainer___2OcPF {\n  display: table;\n  width: 100%;\n}\n\n.mentionsStyles__mentionSuggestionsEntryContainerLeft___3RNHN,\n.mentionsStyles__mentionSuggestionsEntryContainerRight___3mOse {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.mentionsStyles__mentionSuggestionsEntryContainerRight___3mOse {\n  width: 100%;\n  padding-left: 8px;\n}\n\n.mentionsStyles__mentionSuggestionsEntry___2J_NW {\n  padding: 7px 10px 3px 10px;\n  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);\n}\n\n.mentionsStyles__mentionSuggestionsEntry___2J_NW:active {\n  background-color: #cce7ff;\n}\n\n.mentionsStyles__mentionSuggestionsEntryFocused___2RCuU {\n  background-color: #e6f3ff;\n}\n\n.mentionsStyles__mentionSuggestionsEntryText___3Q2e5,\n.mentionsStyles__mentionSuggestionsEntryTitle___1ymXH {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mentionsStyles__mentionSuggestionsEntryText___3Q2e5 {\n}\n\n.mentionsStyles__mentionSuggestionsEntryTitle___1ymXH {\n  font-size: 80%;\n  color: #a7a7a7;\n}\n\n.mentionsStyles__mentionSuggestionsEntryAvatar___1FXoW {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n',
        '',
      ]),
        (exports.locals = {
          mention: 'mentionsStyles__mention___Tagmz',
          mentionSuggestions: 'mentionsStyles__mentionSuggestions___w0IAP',
          mentionSuggestionsEntryContainer:
            'mentionsStyles__mentionSuggestionsEntryContainer___2OcPF',
          mentionSuggestionsEntryContainerLeft:
            'mentionsStyles__mentionSuggestionsEntryContainerLeft___3RNHN',
          mentionSuggestionsEntryContainerRight:
            'mentionsStyles__mentionSuggestionsEntryContainerRight___3mOse',
          mentionSuggestionsEntry:
            'mentionsStyles__mentionSuggestionsEntry___2J_NW',
          mentionSuggestionsEntryFocused:
            'mentionsStyles__mentionSuggestionsEntryFocused___2RCuU mentionsStyles__mentionSuggestionsEntry___2J_NW',
          mentionSuggestionsEntryText:
            'mentionsStyles__mentionSuggestionsEntryText___3Q2e5',
          mentionSuggestionsEntryTitle:
            'mentionsStyles__mentionSuggestionsEntryTitle___1ymXH',
          mentionSuggestionsEntryAvatar:
            'mentionsStyles__mentionSuggestionsEntryAvatar___1FXoW',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___1-rdh {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1-rdh .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___1-rdh' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2RzlJ {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2RzlJ .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___1mIUj {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___2RzlJ',
          options: 'editorStyles__options___1mIUj',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2Nq3u {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2Nq3u .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___2Nq3u' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.buttonStyles__wrapper___2vZ4Q {\n  position: absolute;\n}\n\n.buttonStyles__buttonWrapper___1cKkQ {\n  display: inline-block;\n}\n\n.buttonStyles__button___MLIMZ {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.buttonStyles__button___MLIMZ svg {\n  fill: #ddd;\n}\n\n.buttonStyles__button___MLIMZ:hover, .buttonStyles__button___MLIMZ:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.buttonStyles__active___2wESP {\n  color: #6a9cc9;\n}\n\n.buttonStyles__active___2wESP svg {\n  fill: #6a9cc9;\n}\n',
        '',
      ]),
        (exports.locals = {
          wrapper: 'buttonStyles__wrapper___2vZ4Q',
          buttonWrapper: 'buttonStyles__buttonWrapper___1cKkQ',
          button: 'buttonStyles__button___MLIMZ',
          active: 'buttonStyles__active___2wESP',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.toolbarStyles__wrapper___AePVQ {\n  position: absolute;\n}\n',
        '',
      ]),
        (exports.locals = { wrapper: 'toolbarStyles__wrapper___AePVQ' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.blockTypeSelectStyles__blockType___reZIf {\n  box-sizing: border-box;\n  border: 1px solid #111;\n  background: #333;\n  padding: 5px;\n  margin: 0;\n  border-radius: 18px;\n  cursor: pointer;\n  height: 36px;\n  width: 36px;\n  line-height: 36px;\n  text-align: center;\n}\n\n.blockTypeSelectStyles__blockType___reZIf svg {\n  fill: #ddd;\n}\n\n.blockTypeSelectStyles__spacer___zmpvO {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  width: 74px;\n  height: 8px;\n}\n\n.blockTypeSelectStyles__popup___322CM {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 3;\n  box-sizing: border-box;\n  width: 74px;\n  margin-top: 8px;\n}\n\n.blockTypeSelectStyles__popup___322CM:after, .blockTypeSelectStyles__popup___322CM:before {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.blockTypeSelectStyles__popup___322CM:after {\n  border-color: rgba(251, 251, 251, 0);\n  border-bottom-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n.blockTypeSelectStyles__popup___322CM:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-bottom-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n',
        '',
      ]),
        (exports.locals = {
          blockType: 'blockTypeSelectStyles__blockType___reZIf',
          spacer: 'blockTypeSelectStyles__spacer___zmpvO',
          popup: 'blockTypeSelectStyles__popup___322CM',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__root___61DBS {\n  padding: 50px;\n  position: relative;\n}\n\n.editorStyles__editor___1quaA {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___1quaA .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = {
          root: 'editorStyles__root___61DBS',
          editor: 'editorStyles__editor___1quaA',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___20y_X {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___20y_X .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___20y_X' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___Do1CN {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___Do1CN .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__headlineButtonWrapper___1QYg6 {\n  display: inline-block;\n}\n\n.editorStyles__headlineButton___yO39h {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.editorStyles__headlineButton___yO39h:hover,\n.editorStyles__headlineButton___yO39h:focus {\n  background: #f3f3f3;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___Do1CN',
          headlineButtonWrapper: 'editorStyles__headlineButtonWrapper___1QYg6',
          headlineButton: 'editorStyles__headlineButton___yO39h',
        });
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1030);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.bi09khh{display:inline-block;}\n.bc4rxid{background:#fbfbfb;color:#888;font-size:18px;border:0;padding-top:5px;vertical-align:bottom;height:34px;width:36px;}.bc4rxid:hover,.bc4rxid:focus{background:#f3f3f3;outline:0;}.bc4rxid svg{fill:#888;}\n.akzb7t5{background:#efefef;color:#444;}.akzb7t5 svg{fill:#444;}\n.t16lpgj{border:1px solid #ddd;background:#fff;border-radius:2px;box-shadow:0px 1px 3px 0px rgba(220,220,220,1);z-index:2;box-sizing:border-box;}.t16lpgj:after{border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:4px;margin-left:-4px;}.t16lpgj:before{border-color:rgba(221,221,221,0);border-top-color:#ddd;border-width:6px;margin-left:-6px;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(1032);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(5)(content, options);
      content.locals && (module.exports = content.locals);
    },
    function (module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.s6m29i4{display:inline-block;border-right:1px solid #ddd;height:24px;margin:0 0.5em;}',
        '',
      ]);
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___AEvjY {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___AEvjY .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__headlineButtonWrapper___3kZjv {\n  display: inline-block;\n}\n\n.editorStyles__headlineButton___2p1Zp {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.editorStyles__headlineButton___2p1Zp:hover,\n.editorStyles__headlineButton___2p1Zp:focus {\n  background: #f3f3f3;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___AEvjY',
          headlineButtonWrapper: 'editorStyles__headlineButtonWrapper___3kZjv',
          headlineButton: 'editorStyles__headlineButton___2p1Zp',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___2kRYk {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___2kRYk .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___2kRYk' });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___3PNI4 {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___3PNI4 .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___39YWV {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___3PNI4',
          options: 'editorStyles__options___39YWV',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___3Jejl {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___3Jejl .public-DraftEditor-content {\n  min-height: 140px;\n}\n\n.editorStyles__options___MMnz7 {\n  margin-bottom: 20px;\n}\n',
        '',
      ]),
        (exports.locals = {
          editor: 'editorStyles__editor___3Jejl',
          options: 'editorStyles__options___MMnz7',
        });
    },
    function (module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(4)(!1)).push([
        module.i,
        '.editorStyles__editor___4E3l_ {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editorStyles__editor___4E3l_ .public-DraftEditor-content {\n  min-height: 140px;\n}\n',
        '',
      ]),
        (exports.locals = { editor: 'editorStyles__editor___4E3l_' });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return AnchorSimpleLinkPluginEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        editor_src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        inline_toolbar_src = __webpack_require__(61),
        utils_src = __webpack_require__(43),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        propTypes = {
          className: prop_types_default.a.string,
          children: prop_types_default.a.node.isRequired,
          entityKey: prop_types_default.a.string,
          getEditorState: prop_types_default.a.func.isRequired,
        },
        Link_Link = function Link(_ref) {
          var children = _ref.children,
            className = _ref.className,
            entityKey = _ref.entityKey,
            getEditorState = _ref.getEditorState,
            target = _ref.target,
            entity = getEditorState().getCurrentContent().getEntity(entityKey),
            entityData = entity ? entity.getData() : void 0,
            href = (entityData && entityData.url) || void 0;
          return react_default.a.createElement(
            'a',
            {
              className: className,
              title: href,
              href: href,
              target: target,
              rel: 'noopener noreferrer',
            },
            children
          );
        };
      Link_Link.propTypes = propTypes;
      var components_Link = Link_Link;
      try {
        (Link_Link.displayName = 'Link'),
          (Link_Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              target: {
                defaultValue: null,
                description: '',
                name: 'target',
                required: !1,
                type: { name: 'string' },
              },
              entityKey: {
                defaultValue: null,
                description: '',
                name: 'entityKey',
                required: !0,
                type: { name: 'string' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !0,
                type: { name: '() => EditorState' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/anchor/src/components/Link.tsx#Link'
            ] = {
              docgenInfo: Link_Link.__docgenInfo,
              name: 'Link',
              path: 'packages/anchor/src/components/Link.tsx#Link',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var clsx_m = __webpack_require__(8),
        prepend_http = __webpack_require__(441),
        prepend_http_default = __webpack_require__.n(prepend_http),
        tlds = __webpack_require__(119),
        v4 =
          '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}',
        v6seg = '[0-9a-fA-F]{1,4}',
        v6 = (
          '\n(\n(?:' +
          v6seg +
          ':){7}(?:' +
          v6seg +
          '|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:' +
          v6seg +
          ':){6}(?:' +
          v4 +
          '|:' +
          v6seg +
          '|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:' +
          v6seg +
          ':){5}(?::' +
          v4 +
          '|(:' +
          v6seg +
          '){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:' +
          v6seg +
          ':){4}(?:(:' +
          v6seg +
          '){0,1}:' +
          v4 +
          '|(:' +
          v6seg +
          '){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:' +
          v6seg +
          ':){3}(?:(:' +
          v6seg +
          '){0,2}:' +
          v4 +
          '|(:' +
          v6seg +
          '){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:' +
          v6seg +
          ':){2}(?:(:' +
          v6seg +
          '){0,3}:' +
          v4 +
          '|(:' +
          v6seg +
          '){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:' +
          v6seg +
          ':){1}(?:(:' +
          v6seg +
          '){0,4}:' +
          v4 +
          '|(:' +
          v6seg +
          '){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::((?::' +
          v6seg +
          '){0,5}:' +
          v4 +
          '|(?::' +
          v6seg +
          '){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1\n'
        )
          .replace(/\s*\/\/.*$/gm, '')
          .replace(/\n/g, '')
          .trim(),
        ipRegex = function ipRegex(opts) {
          return opts && opts.exact
            ? new RegExp('(?:^' + v4 + '$)|(?:^' + v6 + '$)')
            : new RegExp('(?:' + v4 + ')|(?:' + v6 + ')', 'g');
        };
      (ipRegex.v4 = function (opts) {
        return opts && opts.exact
          ? new RegExp('^' + v4 + '$')
          : new RegExp(v4, 'g');
      }),
        (ipRegex.v6 = function (opts) {
          return opts && opts.exact
            ? new RegExp('^' + v6 + '$')
            : new RegExp(v6, 'g');
        });
      var URLUtils_isUrl = function isUrl(text) {
          return (function urlRegex(_opts) {
            var opts = Object.assign({ strict: !0 }, _opts),
              regex =
                '(?:' +
                ('(?:(?:[a-z]+:)?//)' + (opts.strict ? '' : '?')) +
                '|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|' +
                ipRegex.v4().source +
                '|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
                ('(?:\\.' +
                  (opts.strict
                    ? '(?:[a-z\\u00a1-\\uffff]{2,})'
                    : '(?:' +
                      tlds
                        .sort(function (a, b) {
                          return b.length - a.length;
                        })
                        .join('|') +
                      ')') +
                  ')\\.?') +
                ')(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
            return opts.exact
              ? new RegExp('(?:^' + regex + '$)', 'i')
              : new RegExp(regex, 'ig');
          })().test(text);
        },
        URLUtils_isMail = function isMail(text) {
          return /^((mailto:[^<>()/[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
            text
          );
        },
        URLUtils_normaliseMail = function normaliseMail(email) {
          return email.toLowerCase().startsWith('mailto:')
            ? email
            : 'mailto:' + email;
        },
        URLUtils_normalizeUrl = function normalizeUrl(url) {
          return prepend_http_default()(url);
        },
        AddLinkForm_AddLinkForm = function AddLinkForm(props) {
          var _useState = Object(react.useState)(''),
            value = _useState[0],
            setValue = _useState[1],
            _useState2 = Object(react.useState)(!1),
            isValid = _useState2[0],
            setIsValid = _useState2[1],
            input = Object(react.useRef)(null);
          Object(react.useEffect)(function () {
            input.current.focus();
          }, []);
          var isUrl = function isUrl(urlValue) {
              return props.validateUrl
                ? props.validateUrl(urlValue)
                : URLUtils_isUrl(urlValue);
            },
            onClose = function onClose() {
              return props.onOverrideContent(void 0);
            },
            theme = props.theme,
            placeholder = props.placeholder,
            className = isValid
              ? theme.input
              : Object(clsx_m.a)(theme.input, theme.inputInvalid);
          return react_default.a.createElement('input', {
            className: className,
            onBlur: onClose,
            onChange: function onChange(event) {
              var newValue = event.target.value;
              setIsValid(isUrl(URLUtils_normalizeUrl(newValue))),
                setValue(newValue);
            },
            onKeyDown: function onKeyDown(event) {
              'Enter' === event.key
                ? (event.preventDefault(),
                  (function submit() {
                    var getEditorState = props.getEditorState,
                      setEditorState = props.setEditorState,
                      url = value;
                    if (URLUtils_isMail(URLUtils_normaliseMail(url)))
                      url = URLUtils_normaliseMail(url);
                    else if (((url = URLUtils_normalizeUrl(url)), !isUrl(url)))
                      return void setIsValid(!1);
                    setEditorState(
                      utils_src.a.createLinkAtSelection(getEditorState(), url)
                    ),
                      input.current.blur(),
                      onClose();
                  })())
                : 'Escape' === event.key && (event.preventDefault(), onClose());
            },
            placeholder: placeholder,
            ref: input,
            type: 'text',
            value: value,
          });
        };
      (AddLinkForm_AddLinkForm.propTypes = {
        getEditorState: prop_types_default.a.func.isRequired,
        setEditorState: prop_types_default.a.func.isRequired,
        onOverrideContent: prop_types_default.a.func.isRequired,
        theme: prop_types_default.a.object.isRequired,
        placeholder: prop_types_default.a.string,
        validateUrl: prop_types_default.a.func,
      }),
        (AddLinkForm_AddLinkForm.defaultProps = {
          placeholder: 'Enter a URL and press enter',
        });
      var components_AddLinkForm = AddLinkForm_AddLinkForm;
      try {
        (AddLinkForm_AddLinkForm.displayName = 'AddLinkForm'),
          (AddLinkForm_AddLinkForm.__docgenInfo = {
            description: '',
            displayName: 'AddLinkForm',
            props: {
              validateUrl: {
                defaultValue: null,
                description: '',
                name: 'validateUrl',
                required: !1,
                type: { name: '((url: string) => boolean)' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'AnchorPluginTheme' },
              },
              placeholder: {
                defaultValue: { value: 'Enter a URL and press enter' },
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !0,
                type: { name: '() => EditorState' },
              },
              setEditorState: {
                defaultValue: null,
                description: '',
                name: 'setEditorState',
                required: !0,
                type: { name: '(state: EditorState) => void' },
              },
              onOverrideContent: {
                defaultValue: null,
                description: '',
                name: 'onOverrideContent',
                required: !0,
                type: { name: '(content: undefined) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/anchor/src/components/AddLinkForm.tsx#AddLinkForm'
            ] = {
              docgenInfo: AddLinkForm_AddLinkForm.__docgenInfo,
              name: 'AddLinkForm',
              path:
                'packages/anchor/src/components/AddLinkForm.tsx#AddLinkForm',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var LinkButton_LinkButton = function LinkButton(_ref) {
        var ownTheme = _ref.ownTheme,
          placeholder = _ref.placeholder,
          onOverrideContent = _ref.onOverrideContent,
          validateUrl = _ref.validateUrl,
          theme = _ref.theme,
          onRemoveLinkAtSelection = _ref.onRemoveLinkAtSelection,
          store = _ref.store,
          InnerLinkButton = _ref.linkButton,
          editorState =
            null == store.getEditorState ? void 0 : store.getEditorState(),
          hasLinkSelected =
            !!editorState && utils_src.a.hasEntity(editorState, 'LINK');
        return react_default.a.createElement(InnerLinkButton, {
          onRemoveLinkAtSelection: onRemoveLinkAtSelection,
          hasLinkSelected: hasLinkSelected,
          onAddLinkClick: function onAddLinkClick(event) {
            event.preventDefault(), event.stopPropagation();
            onOverrideContent(function content(contentProps) {
              return react_default.a.createElement(
                components_AddLinkForm,
                _extends({}, contentProps, {
                  placeholder: placeholder,
                  theme: ownTheme,
                  validateUrl: validateUrl,
                })
              );
            });
          },
          theme: theme,
        });
      };
      LinkButton_LinkButton.propTypes = {
        placeholder: prop_types_default.a.string,
        store: prop_types_default.a.object.isRequired,
        ownTheme: prop_types_default.a.object.isRequired,
        onRemoveLinkAtSelection: prop_types_default.a.func.isRequired,
        validateUrl: prop_types_default.a.func,
      };
      var components_LinkButton = LinkButton_LinkButton;
      try {
        (LinkButton_LinkButton.displayName = 'LinkButton'),
          (LinkButton_LinkButton.__docgenInfo = {
            description: '',
            displayName: 'LinkButton',
            props: {
              ownTheme: {
                defaultValue: null,
                description: '',
                name: 'ownTheme',
                required: !0,
                type: { name: 'AnchorPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'AnchorPluginStore' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              onRemoveLinkAtSelection: {
                defaultValue: null,
                description: '',
                name: 'onRemoveLinkAtSelection',
                required: !0,
                type: { name: '() => void' },
              },
              validateUrl: {
                defaultValue: null,
                description: '',
                name: 'validateUrl',
                required: !1,
                type: { name: '((url: string) => boolean)' },
              },
              linkButton: {
                defaultValue: null,
                description: '',
                name: 'linkButton',
                required: !0,
                type: { name: 'ComponentType<DefaultLinkButtonProps>' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'LinkButtonTheme' },
              },
              onOverrideContent: {
                defaultValue: null,
                description: '',
                name: 'onOverrideContent',
                required: !0,
                type: {
                  name:
                    '(component: ComponentType<AddLinkFormPubParams>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/anchor/src/components/LinkButton.tsx#LinkButton'
            ] = {
              docgenInfo: LinkButton_LinkButton.__docgenInfo,
              name: 'LinkButton',
              path: 'packages/anchor/src/components/LinkButton.tsx#LinkButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function strategy(contentBlock, callback, contentState) {
        contentState &&
          contentBlock.findEntityRanges(function (character) {
            var entityKey = character.getEntity();
            return (
              null !== entityKey &&
              (function matchesEntityType(type) {
                return 'LINK' === type;
              })(contentState.getEntity(entityKey).getType())
            );
          }, callback);
      }
      var defaultTheme = {
        input: 'i1qh9dya',
        inputInvalid: 'i119ugvj',
        link: 'lit0q4h',
      };
      function DefaultLinkButton(_ref) {
        var hasLinkSelected = _ref.hasLinkSelected,
          onRemoveLinkAtSelection = _ref.onRemoveLinkAtSelection,
          onAddLinkClick = _ref.onAddLinkClick,
          theme = _ref.theme,
          className = Object(clsx_m.a)(
            theme.button,
            hasLinkSelected && theme.active
          );
        return react_default.a.createElement(
          'div',
          {
            className: theme.buttonWrapper,
            onMouseDown: function onMouseDown(event) {
              event.preventDefault();
            },
          },
          react_default.a.createElement(
            'button',
            {
              className: className,
              onClick: hasLinkSelected
                ? onRemoveLinkAtSelection
                : onAddLinkClick,
              type: 'button',
            },
            react_default.a.createElement(
              'svg',
              {
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              react_default.a.createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none',
              }),
              react_default.a.createElement('path', {
                d:
                  'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
              })
            )
          )
        );
      }
      __webpack_require__(993);
      try {
        (DefaultLinkButton.displayName = 'DefaultLinkButton'),
          (DefaultLinkButton.__docgenInfo = {
            description: '',
            displayName: 'DefaultLinkButton',
            props: {
              hasLinkSelected: {
                defaultValue: null,
                description: '',
                name: 'hasLinkSelected',
                required: !0,
                type: { name: 'boolean' },
              },
              onRemoveLinkAtSelection: {
                defaultValue: null,
                description: '',
                name: 'onRemoveLinkAtSelection',
                required: !0,
                type: { name: '() => void' },
              },
              onAddLinkClick: {
                defaultValue: null,
                description: '',
                name: 'onAddLinkClick',
                required: !0,
                type: {
                  name: '(event: MouseEvent<Element, MouseEvent>) => void',
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !0,
                type: { name: 'LinkButtonTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/anchor/src/components/DefaultLinkButton.tsx#DefaultLinkButton'
            ] = {
              docgenInfo: DefaultLinkButton.__docgenInfo,
              name: 'DefaultLinkButton',
              path:
                'packages/anchor/src/components/DefaultLinkButton.tsx#DefaultLinkButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'AnchorPluginTheme' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              Link: {
                defaultValue: null,
                description: '',
                name: 'Link',
                required: !1,
                type: {
                  name:
                    'ComponentClass<AnchorHTMLAttributes<HTMLAnchorElement>, any> | FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>>',
                },
              },
              linkTarget: {
                defaultValue: null,
                description: '',
                name: 'linkTarget',
                required: !1,
                type: { name: 'string' },
              },
              validateUrl: {
                defaultValue: null,
                description: '',
                name: 'validateUrl',
                required: !1,
                type: { name: '((url: string) => boolean)' },
              },
              LinkButton: {
                defaultValue: null,
                description: '',
                name: 'LinkButton',
                required: !1,
                type: {
                  name:
                    'ComponentClass<DefaultLinkButtonProps, any> | FunctionComponent<DefaultLinkButtonProps>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/anchor/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/anchor/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var BoldButton = __webpack_require__(1083),
        ItalicButton = __webpack_require__(1082),
        UnderlineButton = __webpack_require__(1084),
        editorStyles = __webpack_require__(440),
        editorStyles_default = __webpack_require__.n(editorStyles),
        linkPlugin = (function (config) {
          void 0 === config && (config = {});
          var _config = config,
            _config$theme = _config.theme,
            theme = void 0 === _config$theme ? defaultTheme : _config$theme,
            placeholder = _config.placeholder,
            Link = _config.Link,
            linkTarget = _config.linkTarget,
            validateUrl = _config.validateUrl,
            linkButton = _config.LinkButton,
            store = { getEditorState: void 0, setEditorState: void 0 };
          return {
            initialize: function initialize(_ref) {
              var getEditorState = _ref.getEditorState,
                setEditorState = _ref.setEditorState;
              (store.getEditorState = getEditorState),
                (store.setEditorState = setEditorState);
            },
            decorators: [
              {
                strategy: strategy,
                component:
                  Link ||
                  function DecoratedDefaultLink(props) {
                    return react_default.a.createElement(
                      components_Link,
                      src_extends({}, props, {
                        className: theme.link,
                        target: linkTarget,
                      })
                    );
                  },
              },
            ],
            LinkButton: function DecoratedLinkButton(props) {
              return react_default.a.createElement(
                components_LinkButton,
                src_extends({}, props, {
                  ownTheme: theme,
                  store: store,
                  placeholder: placeholder,
                  onRemoveLinkAtSelection: function onRemoveLinkAtSelection() {
                    return store.setEditorState(
                      utils_src.a.removeLinkAtSelection(store.getEditorState())
                    );
                  },
                  validateUrl: validateUrl,
                  linkButton: linkButton || DefaultLinkButton,
                })
              );
            },
          };
        })(),
        inlineToolbarPlugin = Object(inline_toolbar_src.a)(),
        InlineToolbar = inlineToolbarPlugin.InlineToolbar,
        plugins = [inlineToolbarPlugin, linkPlugin],
        AnchorSimpleLinkPluginEditor = function SimpleLinkPluginEditor() {
          var _useState = Object(react.useState)(
              Object(editor_src.b)(
                'Try selecting a part of this text and click on the link button in the toolbar that appears …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                return editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(
              InlineToolbar,
              null,
              function (externalProps) {
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(BoldButton.a, externalProps),
                  react_default.a.createElement(ItalicButton.a, externalProps),
                  react_default.a.createElement(
                    UnderlineButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    linkPlugin.LinkButton,
                    externalProps
                  )
                );
              }
            )
          );
        },
        AnchorSimpleLinkPluginEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Anchor/Editor with Anchor Plugin',
            component: AnchorSimpleLinkPluginEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              AnchorSimpleLinkPluginEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleCounterEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        editor_src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        clsx_m = __webpack_require__(8),
        punycode = __webpack_require__(426),
        punycode_default = __webpack_require__.n(punycode),
        CharCounter_CharCounter = function CharCounter(_ref) {
          var _ref$theme = _ref.theme,
            theme = void 0 === _ref$theme ? {} : _ref$theme,
            className = _ref.className,
            store = _ref.store,
            limit = _ref.limit,
            count = (function getCharCount(editorState) {
              return (function decodeUnicode(str) {
                return punycode_default.a.ucs2.decode(str);
              })(
                editorState
                  .getCurrentContent()
                  .getPlainText('')
                  .replace(/(?:\r\n|\r|\n)/g, '')
                  .trim()
              ).length;
            })(store.getEditorState()),
            classNames = (function getClassNames(count) {
              var defaultStyle = Object(clsx_m.a)(theme.counter, className),
                overLimitStyle = Object(clsx_m.a)(
                  theme.counterOverLimit,
                  className
                );
              return count > limit ? overLimitStyle : defaultStyle;
            })(count);
          return react_default.a.createElement(
            'span',
            { className: classNames },
            count
          );
        };
      CharCounter_CharCounter.propTypes = {
        theme: prop_types_default.a.any,
        className: prop_types_default.a.any,
        store: prop_types_default.a.any,
        limit: prop_types_default.a.any,
      };
      var src_CharCounter = CharCounter_CharCounter;
      try {
        (CharCounter_CharCounter.displayName = 'CharCounter'),
          (CharCounter_CharCounter.__docgenInfo = {
            description: '',
            displayName: 'CharCounter',
            props: {
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'CounterPluginTheme' },
              },
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'CounterPluginStore' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              limit: {
                defaultValue: null,
                description: '',
                name: 'limit',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/counter/src/CharCounter/index.tsx#CharCounter'
            ] = {
              docgenInfo: CharCounter_CharCounter.__docgenInfo,
              name: 'CharCounter',
              path: 'packages/counter/src/CharCounter/index.tsx#CharCounter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var WordCounter_WordCounter = function WordCounter(_ref) {
        var store = _ref.store,
          limit = _ref.limit,
          _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme,
          className = _ref.className,
          count = (function getWordCount(editorState) {
            var wordArray = editorState
              .getCurrentContent()
              .getPlainText('')
              .replace(/(?:\r\n|\r|\n)/g, ' ')
              .trim()
              .match(/\S+/g);
            return wordArray ? wordArray.length : 0;
          })(store.getEditorState()),
          classNames = (function getClassNames(count) {
            var defaultStyle = Object(clsx_m.a)(theme.counter, className),
              overLimitStyle = Object(clsx_m.a)(
                theme.counterOverLimit,
                className
              );
            return count > limit ? overLimitStyle : defaultStyle;
          })(count);
        return react_default.a.createElement(
          'span',
          { className: classNames },
          count
        );
      };
      WordCounter_WordCounter.propTypes = {
        theme: prop_types_default.a.any,
        limit: prop_types_default.a.number,
      };
      var src_WordCounter = WordCounter_WordCounter;
      try {
        (WordCounter_WordCounter.displayName = 'WordCounter'),
          (WordCounter_WordCounter.__docgenInfo = {
            description: '',
            displayName: 'WordCounter',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'CounterPluginStore' },
              },
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'CounterPluginTheme' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              limit: {
                defaultValue: null,
                description: '',
                name: 'limit',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/counter/src/WordCounter/index.tsx#WordCounter'
            ] = {
              docgenInfo: WordCounter_WordCounter.__docgenInfo,
              name: 'WordCounter',
              path: 'packages/counter/src/WordCounter/index.tsx#WordCounter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var LineCounter_LineCounter = function LineCounter(_ref) {
        var store = _ref.store,
          limit = _ref.limit,
          _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme,
          className = _ref.className,
          count = (function getLineCount(editorState) {
            var blockArray = editorState.getCurrentContent().getBlocksAsArray();
            return blockArray ? blockArray.length : null;
          })(store.getEditorState()),
          classNames = (function getClassNames(count) {
            var defaultStyle = Object(clsx_m.a)(theme.counter, className),
              overLimitStyle = Object(clsx_m.a)(
                theme.counterOverLimit,
                className
              );
            return count > limit ? overLimitStyle : defaultStyle;
          })(count);
        return react_default.a.createElement(
          'span',
          { className: classNames },
          count
        );
      };
      LineCounter_LineCounter.propTypes = {
        theme: prop_types_default.a.any,
        store: prop_types_default.a.any,
        className: prop_types_default.a.any,
        limit: prop_types_default.a.number,
      };
      var src_LineCounter = LineCounter_LineCounter;
      try {
        (LineCounter_LineCounter.displayName = 'LineCounter'),
          (LineCounter_LineCounter.__docgenInfo = {
            description: '',
            displayName: 'LineCounter',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'CounterPluginStore' },
              },
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'CounterPluginTheme' },
              },
              limit: {
                defaultValue: null,
                description: '',
                name: 'limit',
                required: !1,
                type: { name: 'number' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/counter/src/LineCounter/index.tsx#LineCounter'
            ] = {
              docgenInfo: LineCounter_LineCounter.__docgenInfo,
              name: 'LineCounter',
              path: 'packages/counter/src/LineCounter/index.tsx#LineCounter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var CustomCounter_CustomCounter = function CustomCounter(_ref) {
        var store = _ref.store,
          _ref$limit = _ref.limit,
          limit = void 0 === _ref$limit ? 0 : _ref$limit,
          countFunction = _ref.countFunction,
          _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme,
          className = _ref.className,
          count = countFunction(
            store.getEditorState().getCurrentContent().getPlainText('')
          ),
          classNames = (function getClassNames(count) {
            var defaultStyle = Object(clsx_m.a)(theme.counter, className),
              overLimitStyle = Object(clsx_m.a)(
                theme.counterOverLimit,
                className
              );
            return count > limit ? overLimitStyle : defaultStyle;
          })(count);
        return react_default.a.createElement(
          'span',
          { className: classNames },
          count
        );
      };
      CustomCounter_CustomCounter.propTypes = {
        theme: prop_types_default.a.any,
        store: prop_types_default.a.any,
        className: prop_types_default.a.any,
        limit: prop_types_default.a.number,
        countFunction: prop_types_default.a.func.isRequired,
      };
      var src_CustomCounter = CustomCounter_CustomCounter;
      try {
        (CustomCounter_CustomCounter.displayName = 'CustomCounter'),
          (CustomCounter_CustomCounter.__docgenInfo = {
            description: '',
            displayName: 'CustomCounter',
            props: {
              store: {
                defaultValue: null,
                description: '',
                name: 'store',
                required: !0,
                type: { name: 'CounterPluginStore' },
              },
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'CounterPluginTheme' },
              },
              limit: {
                defaultValue: { value: 0 },
                description: '',
                name: 'limit',
                required: !1,
                type: { name: 'number' },
              },
              countFunction: {
                defaultValue: null,
                description: '',
                name: 'countFunction',
                required: !0,
                type: { name: '(text: string) => number' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/counter/src/CustomCounter/index.tsx#CustomCounter'
            ] = {
              docgenInfo: CustomCounter_CustomCounter.__docgenInfo,
              name: 'CustomCounter',
              path:
                'packages/counter/src/CustomCounter/index.tsx#CustomCounter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var defaultTheme = { counter: 'c1svg00', counterOverLimit: 'c6sdxe3' };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(941);
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'CounterPluginTheme' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/counter/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/counter/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var editorStyles = __webpack_require__(425),
        editorStyles_default = __webpack_require__.n(editorStyles),
        counterPlugin = (function (config) {
          void 0 === config && (config = {});
          var store = { getEditorState: void 0, setEditorState: void 0 },
            theme = config.theme ? config.theme : defaultTheme;
          return {
            CharCounter: function DecoratedCharCounter(props) {
              return react_default.a.createElement(
                src_CharCounter,
                _extends({}, props, { theme: theme, store: store })
              );
            },
            WordCounter: function DecoratedWordCounter(props) {
              return react_default.a.createElement(
                src_WordCounter,
                _extends({}, props, { theme: theme, store: store })
              );
            },
            LineCounter: function DecoratedLineCounter(props) {
              return react_default.a.createElement(
                src_LineCounter,
                _extends({}, props, { theme: theme, store: store })
              );
            },
            CustomCounter: function DecoratedCustomCounter(props) {
              return react_default.a.createElement(
                src_CustomCounter,
                _extends({}, props, { theme: theme, store: store })
              );
            },
            initialize: function initialize(_ref) {
              var getEditorState = _ref.getEditorState,
                setEditorState = _ref.setEditorState;
              (store.getEditorState = getEditorState),
                (store.setEditorState = setEditorState);
            },
          };
        })(),
        SimpleCounterEditor_CharCounter = counterPlugin.CharCounter,
        SimpleCounterEditor_WordCounter = counterPlugin.WordCounter,
        SimpleCounterEditor_LineCounter = counterPlugin.LineCounter,
        SimpleCounterEditor_CustomCounter = counterPlugin.CustomCounter,
        plugins = [counterPlugin],
        src_SimpleCounterEditor = function SimpleCounterEditor() {
          var _useState = Object(react.useState)(
              Object(editor_src.b)(
                'This editor has counters below!\nTry typing here and watch the numbers go up. 🙌\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            ),
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(SimpleCounterEditor_CharCounter, {
                limit: 200,
              }),
              ' characters'
            ),
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(SimpleCounterEditor_WordCounter, {
                limit: 30,
              }),
              ' words'
            ),
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(SimpleCounterEditor_LineCounter, {
                limit: 10,
              }),
              ' lines'
            ),
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(SimpleCounterEditor_CustomCounter, {
                limit: 40,
                countFunction: function customCountFunction(str) {
                  var wordArray = str.match(/\S+/g);
                  return wordArray ? wordArray.length : 0;
                },
              }),
              react_default.a.createElement(
                'span',
                null,
                ' words (custom function)'
              )
            ),
            react_default.a.createElement('br', null),
            react_default.a.createElement('br', null)
          );
        },
        SimpleCounterEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Counter/Editor With Counter Plugin',
            component: src_SimpleCounterEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleCounterEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return DividerWithSideToolbar_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        editor_src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        focus_src = __webpack_require__(45),
        side_toolbar_src = __webpack_require__(88),
        clsx_m = __webpack_require__(8);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]),
            excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }
      function DefaultDivider_Divider(_ref) {
        _ref.block;
        var className = _ref.className,
          _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? {} : _ref$theme,
          otherProps = _objectWithoutPropertiesLoose(_ref, [
            'block',
            'className',
            'theme',
          ]),
          elementProps =
            (otherProps.blockProps,
            otherProps.customStyleMap,
            otherProps.customStyleFn,
            otherProps.decorator,
            otherProps.forceSelection,
            otherProps.offsetKey,
            otherProps.selection,
            otherProps.tree,
            otherProps.contentState,
            otherProps.blockStyleFn,
            otherProps.preventScroll,
            _objectWithoutPropertiesLoose(otherProps, [
              'blockProps',
              'customStyleMap',
              'customStyleFn',
              'decorator',
              'forceSelection',
              'offsetKey',
              'selection',
              'tree',
              'contentState',
              'blockStyleFn',
              'preventScroll',
            ])),
          combinedClassName = Object(clsx_m.a)(theme.divider, className);
        return react_default.a.createElement(
          'hr',
          _extends({}, elementProps, { className: combinedClassName })
        );
      }
      try {
        (DefaultDivider.displayName = 'DefaultDivider'),
          (DefaultDivider.__docgenInfo = {
            description: '',
            displayName: 'DefaultDivider',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'DividerPluginTheme' },
              },
              block: {
                defaultValue: null,
                description: '',
                name: 'block',
                required: !0,
                type: { name: 'unknown' },
              },
              blockProps: {
                defaultValue: null,
                description: '',
                name: 'blockProps',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleMap: {
                defaultValue: null,
                description: '',
                name: 'customStyleMap',
                required: !0,
                type: { name: 'unknown' },
              },
              customStyleFn: {
                defaultValue: null,
                description: '',
                name: 'customStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !0,
                type: { name: 'unknown' },
              },
              forceSelection: {
                defaultValue: null,
                description: '',
                name: 'forceSelection',
                required: !0,
                type: { name: 'unknown' },
              },
              offsetKey: {
                defaultValue: null,
                description: '',
                name: 'offsetKey',
                required: !0,
                type: { name: 'unknown' },
              },
              selection: {
                defaultValue: null,
                description: '',
                name: 'selection',
                required: !0,
                type: { name: 'unknown' },
              },
              tree: {
                defaultValue: null,
                description: '',
                name: 'tree',
                required: !0,
                type: { name: 'unknown' },
              },
              contentState: {
                defaultValue: null,
                description: '',
                name: 'contentState',
                required: !0,
                type: { name: 'unknown' },
              },
              blockStyleFn: {
                defaultValue: null,
                description: '',
                name: 'blockStyleFn',
                required: !0,
                type: { name: 'unknown' },
              },
              preventScroll: {
                defaultValue: null,
                description: '',
                name: 'preventScroll',
                required: !0,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/divider/src/components/DefaultDivider.tsx#DefaultDivider'
            ] = {
              docgenInfo: DefaultDivider.__docgenInfo,
              name: 'DefaultDivider',
              path:
                'packages/divider/src/components/DefaultDivider.tsx#DefaultDivider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        DividerButton_DividerButton = function DividerButton(props) {
          var _props$theme = props.theme,
            theme = void 0 === _props$theme ? {} : _props$theme,
            className = (function blockTypeIsActive() {
              var editorState = props.getEditorState();
              return (
                editorState
                  .getCurrentContent()
                  .getBlockForKey(editorState.getSelection().getStartKey())
                  .getType() === props.blockType
              );
            })()
              ? Object(clsx_m.a)(theme.button, theme.active)
              : theme.button;
          return react_default.a.createElement(
            'div',
            {
              className: theme.buttonWrapper,
              onMouseDown: function preventBubblingUp(event) {
                event.preventDefault();
              },
            },
            react_default.a.createElement(
              'button',
              {
                className: className,
                onClick: function onClick(event) {
                  event.preventDefault();
                  var editorState = props.getEditorState(),
                    newEditorState = props.addDivider(editorState);
                  props.setEditorState(newEditorState);
                },
                type: 'button',
              },
              react_default.a.createElement(
                'svg',
                {
                  height: '24',
                  viewBox: '0 0 24 24',
                  width: '24',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                react_default.a.createElement('path', {
                  d: 'M0 0h24v24H0z',
                  fill: 'none',
                }),
                react_default.a.createElement('path', {
                  d:
                    'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
                })
              )
            )
          );
        };
      DividerButton_DividerButton.propTypes = {
        theme: prop_types_default.a.object,
        getEditorState: prop_types_default.a.func.isRequired,
        setEditorState: prop_types_default.a.func.isRequired,
        addDivider: prop_types_default.a.func.isRequired,
      };
      var components_DividerButton = DividerButton_DividerButton;
      try {
        (DividerButton_DividerButton.displayName = 'DividerButton'),
          (DividerButton_DividerButton.__docgenInfo = {
            description: '',
            displayName: 'DividerButton',
            props: {
              addDivider: {
                defaultValue: null,
                description: '',
                name: 'addDivider',
                required: !0,
                type: {
                  name:
                    '(editorState: EditorState, data?: Record<string, unknown> | undefined) => EditorState',
                },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'DividerButtonTheme' },
              },
              getEditorState: {
                defaultValue: null,
                description: '',
                name: 'getEditorState',
                required: !0,
                type: { name: '() => EditorState' },
              },
              setEditorState: {
                defaultValue: null,
                description: '',
                name: 'setEditorState',
                required: !0,
                type: { name: '(state: EditorState) => void' },
              },
              blockType: {
                defaultValue: null,
                description: '',
                name: 'blockType',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/divider/src/components/DividerButton.tsx#DividerButton'
            ] = {
              docgenInfo: DividerButton_DividerButton.__docgenInfo,
              name: 'DividerButton',
              path:
                'packages/divider/src/components/DividerButton.tsx#DividerButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function addDivider(entityType) {
        return function (editorState, data) {
          var entityKey = editorState
              .getCurrentContent()
              .createEntity(entityType, 'IMMUTABLE', data)
              .getLastCreatedEntityKey(),
            newEditorState = Draft.AtomicBlockUtils.insertAtomicBlock(
              editorState,
              entityKey,
              ' '
            );
          return Draft.EditorState.forceSelection(
            newEditorState,
            newEditorState.getCurrentContent().getSelectionAfter()
          );
        };
      }
      var defaultTheme = { divider: 'd6zlymw' };
      function src_extends() {
        return (src_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      __webpack_require__(945);
      var divider_src = function createDividerPlugin(_temp) {
        var _ref = void 0 === _temp ? {} : _temp,
          _ref$entityType = _ref.entityType,
          entityType = void 0 === _ref$entityType ? 'divider' : _ref$entityType,
          _ref$dividerComponent = _ref.dividerComponent,
          dividerComponent =
            void 0 === _ref$dividerComponent
              ? DefaultDivider_Divider
              : _ref$dividerComponent,
          _ref$buttonComponent = _ref.buttonComponent,
          buttonComponent =
            void 0 === _ref$buttonComponent
              ? components_DividerButton
              : _ref$buttonComponent,
          _ref$theme = _ref.theme,
          theme = void 0 === _ref$theme ? defaultTheme : _ref$theme,
          decorator = _ref.decorator,
          Divider = dividerComponent;
        'function' == typeof decorator && (Divider = decorator(Divider));
        var ThemedDivider = function ThemedDivider(props) {
            return react_default.a.createElement(
              Divider,
              src_extends({}, props, { theme: theme })
            );
          },
          Button = buttonComponent;
        return {
          blockRendererFn: function blockRendererFn(block, _ref2) {
            var getEditorState = _ref2.getEditorState;
            if ('atomic' === block.getType()) {
              var contentState = getEditorState().getCurrentContent(),
                entity = block.getEntityAt(0);
              if (!entity) return null;
              if (contentState.getEntity(entity).getType() === entityType)
                return { component: ThemedDivider, editable: !1 };
            }
            return null;
          },
          DividerButton: function DividerButton(props) {
            return react_default.a.createElement(
              Button,
              src_extends({}, props, { addDivider: addDivider(entityType) })
            );
          },
          addDivider: addDivider(entityType),
        };
      };
      try {
        (src.displayName = 'src'),
          (src.__docgenInfo = {
            description: '',
            displayName: 'src',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'DividerPluginTheme' },
              },
              entityType: {
                defaultValue: { value: 'divider' },
                description: '',
                name: 'entityType',
                required: !1,
                type: { name: 'string' },
              },
              dividerComponent: {
                defaultValue: null,
                description: '',
                name: 'dividerComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<DefaultDividerProps, any> | FunctionComponent<DefaultDividerProps>',
                },
              },
              buttonComponent: {
                defaultValue: {
                  value: 'DefaultButton as ComponentType<DividerButtonProps>',
                },
                description: '',
                name: 'buttonComponent',
                required: !1,
                type: {
                  name:
                    'ComponentClass<DividerButtonProps, any> | FunctionComponent<DividerButtonProps>',
                },
              },
              decorator: {
                defaultValue: null,
                description: '',
                name: 'decorator',
                required: !1,
                type: { name: 'unknown' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/divider/src/index.tsx#src'] = {
              docgenInfo: src.__docgenInfo,
              name: 'src',
              path: 'packages/divider/src/index.tsx#src',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var editorStyles = __webpack_require__(428),
        editorStyles_default = __webpack_require__.n(editorStyles),
        focusPlugin = Object(focus_src.a)(),
        dividerPlugin = divider_src({
          decorator: Object(editor_src.a)(focusPlugin.decorator),
        }),
        App_DividerButton = dividerPlugin.DividerButton,
        sideToolbarPlugin = Object(side_toolbar_src.a)(),
        SideToolbar = sideToolbarPlugin.SideToolbar,
        plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin],
        initialState = {
          entityMap: {
            0: { type: 'divider', mutability: 'IMMUTABLE', data: {} },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'This is a simple example for divider plugin. Click side toolbar divider button.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
          ],
        },
        App = function CustomImageEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(
              SideToolbar,
              null,
              function (externalProps) {
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    App_DividerButton,
                    externalProps
                  )
                );
              }
            )
          );
        },
        DividerWithSideToolbar_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Divider/Divider with side toolbar',
            component: App,
          }),
          function Default() {
            return react_default.a.createElement(App, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return KitchenSink_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Editor = __webpack_require__(420),
        src = __webpack_require__(121),
        sticker_src = __webpack_require__(191),
        linkify_src = __webpack_require__(122),
        mention_src = __webpack_require__(20),
        emoji_src = __webpack_require__(120),
        undo_src = __webpack_require__(194),
        Draft = __webpack_require__(1),
        styles = __webpack_require__(124),
        styles_default = __webpack_require__.n(styles),
        immutable = __webpack_require__(3),
        src_stickers = Object(immutable.fromJS)({
          data: {
            'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {
              id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',
              url: 'images/unicorn-4.png',
            },
            'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {
              id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',
              url: 'images/unicorn-1.png',
            },
            'e14b5a20-1025-4952-b731-41cd4b118ba0': {
              id: 'e14b5a20-1025-4952-b731-41cd4b118ba0',
              url: 'images/unicorn-6.png',
            },
            '659a0dbf-5f85-4f32-999d-eb9ba6b0f417': {
              id: '659a0dbf-5f85-4f32-999d-eb9ba6b0f417',
              url: 'images/unicorn-2.png',
            },
            'fab0ae95-ae95-4775-b484-72c290437602': {
              id: 'fab0ae95-ae95-4775-b484-72c290437602',
              url: 'images/unicorn-5.png',
            },
            '71853190-8acd-4d3b-b4fd-63f7b0648daa': {
              id: '71853190-8acd-4d3b-b4fd-63f7b0648daa',
              url: 'images/unicorn-3.png',
            },
          },
        }),
        src_mentions = [
          {
            name: 'Matthew Russell',
            link: 'https://twitter.com/mrussell247',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            link: 'https://twitter.com/juliandoesstuff',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            link: 'https://twitter.com/jyopur',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            link: 'https://twitter.com/mxstbr',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            link: 'https://twitter.com/nikgraf',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            link: 'https://twitter.com/psbrandt',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        emojiPlugin = Object(emoji_src.a)(),
        hashtagPlugin = Object(src.a)(),
        linkifyPlugin = Object(linkify_src.a)(),
        mentionPlugin = Object(mention_src.a)(),
        undoPlugin = Object(undo_src.a)(),
        stickerPlugin = Object(sticker_src.a)({ stickers: src_stickers }),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        EmojiSuggestions = emojiPlugin.EmojiSuggestions,
        StickerSelect = stickerPlugin.StickerSelect,
        UndoButton = undoPlugin.UndoButton,
        RedoButton = undoPlugin.RedoButton,
        plugins = [
          emojiPlugin,
          hashtagPlugin,
          stickerPlugin,
          linkifyPlugin,
          mentionPlugin,
          undoPlugin,
        ],
        contentState = Draft.ContentState.createFromText(
          'You can add Emojis by typing colon : or mentions with an @. Add Stickers and undo your actions with the undo button below …'
        ),
        KitchenSink = function UnicornEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(contentState)
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(src_mentions),
            suggestions = _useState2[0],
            setSuggestions = _useState2[1],
            _useState3 = Object(react.useState)(!1),
            open = _useState3[0],
            setOpen = _useState3[1],
            onChange = function onChange(value) {
              setEditorState(value);
            },
            self = { onChange: onChange, state: { editorState: editorState } };
          return react_default.a.createElement(
            'div',
            { className: styles_default.a.root },
            react_default.a.createElement(
              'div',
              {
                className: styles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: onChange,
                plugins: plugins,
                spellCheck: !0,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            ),
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(MentionSuggestions, {
                onSearchChange: function onMentionSearchChange(_ref) {
                  var value = _ref.value;
                  setSuggestions(Object(mention_src.b)(value, src_mentions));
                },
                suggestions: suggestions,
                onOpenChange: function onOpenChange(newOpen) {
                  setOpen(newOpen);
                },
                open: open,
              }),
              react_default.a.createElement(EmojiSuggestions, null),
              react_default.a.createElement(
                'div',
                { className: styles_default.a.editorButton },
                react_default.a.createElement(StickerSelect, { editor: self })
              ),
              react_default.a.createElement(
                'div',
                { className: styles_default.a.editorButton },
                react_default.a.createElement(UndoButton, null)
              ),
              react_default.a.createElement(
                'div',
                { className: styles_default.a.editorButton },
                react_default.a.createElement(RedoButton, null)
              )
            )
          );
        },
        KitchenSink_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Kitchen sink',
            component: KitchenSink,
          }),
          function Default() {
            return react_default.a.createElement(KitchenSink, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return AddImageEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        image_src = __webpack_require__(89),
        styles = __webpack_require__(90),
        styles_default = __webpack_require__.n(styles);
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var ImageAdd_ImageAdd = (function (_Component) {
          function ImageAdd() {
            for (
              var _this,
                _len = arguments.length,
                args = new Array(_len),
                _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return (
              ((_this =
                _Component.call.apply(_Component, [this].concat(args)) ||
                this).state = { url: '', open: !1 }),
              (_this.onPopoverClick = function () {
                _this.preventNextClose = !0;
              }),
              (_this.openPopover = function () {
                _this.state.open ||
                  ((_this.preventNextClose = !0), _this.setState({ open: !0 }));
              }),
              (_this.closePopover = function () {
                !_this.preventNextClose &&
                  _this.state.open &&
                  _this.setState({ open: !1 }),
                  (_this.preventNextClose = !1);
              }),
              (_this.addImage = function () {
                var _this$props = _this.props,
                  editorState = _this$props.editorState;
                (0, _this$props.onChange)(
                  _this.props.modifier(editorState, _this.state.url)
                );
              }),
              (_this.changeUrl = function (evt) {
                _this.setState({ url: evt.target.value });
              }),
              _this
            );
          }
          !(function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(ImageAdd, _Component);
          var _proto = ImageAdd.prototype;
          return (
            (_proto.componentDidMount = function componentDidMount() {
              document.addEventListener('click', this.closePopover);
            }),
            (_proto.componentWillUnmount = function componentWillUnmount() {
              document.removeEventListener('click', this.closePopover);
            }),
            (_proto.render = function render() {
              var popoverClassName = this.state.open
                  ? styles_default.a.addImagePopover
                  : styles_default.a.addImageClosedPopover,
                buttonClassName = this.state.open
                  ? styles_default.a.addImagePressedButton
                  : styles_default.a.addImageButton;
              return react_default.a.createElement(
                'div',
                { className: styles_default.a.addImage },
                react_default.a.createElement(
                  'button',
                  {
                    className: buttonClassName,
                    onMouseUp: this.openPopover,
                    type: 'button',
                  },
                  '+'
                ),
                react_default.a.createElement(
                  'div',
                  { className: popoverClassName, onClick: this.onPopoverClick },
                  react_default.a.createElement('input', {
                    type: 'text',
                    placeholder: 'Paste the image url …',
                    className: styles_default.a.addImageInput,
                    onChange: this.changeUrl,
                    value: this.state.url,
                  }),
                  react_default.a.createElement(
                    'button',
                    {
                      className: styles_default.a.addImageConfirmButton,
                      type: 'button',
                      onClick: this.addImage,
                    },
                    'Add'
                  )
                )
              );
            }),
            ImageAdd
          );
        })(react.Component),
        editorStyles = __webpack_require__(421),
        editorStyles_default = __webpack_require__.n(editorStyles),
        imagePlugin = Object(image_src.a)(),
        plugins = [imagePlugin],
        AddImageEditor = function CustomImageEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Click on the + button below and insert "/images/canada-landscape-small.jpg" to add the landscape image. Alternativly you can use any image url on the web.'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            onChange = function onChange(value) {
              setEditorState(value);
            };
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: onChange,
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            ),
            react_default.a.createElement(ImageAdd_ImageAdd, {
              editorState: editorState,
              onChange: onChange,
              modifier: imagePlugin.addImage,
            })
          );
        },
        AddImageEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Image/Editor with Image Plugin and Add mechanism',
            component: AddImageEditor,
          }),
          function Default() {
            return react_default.a.createElement(AddImageEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomAddVideoEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(192),
        styles = __webpack_require__(91),
        styles_default = __webpack_require__.n(styles);
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var VideoAdd_VideoAdd = (function (_Component) {
          function VideoAdd() {
            for (
              var _this,
                _len = arguments.length,
                args = new Array(_len),
                _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return (
              ((_this =
                _Component.call.apply(_Component, [this].concat(args)) ||
                this).state = { url: '', open: !1 }),
              (_this.onPopoverClick = function () {
                _this.preventNextClose = !0;
              }),
              (_this.openPopover = function () {
                _this.state.open ||
                  ((_this.preventNextClose = !0), _this.setState({ open: !0 }));
              }),
              (_this.closePopover = function () {
                !_this.preventNextClose &&
                  _this.state.open &&
                  _this.setState({ open: !1 }),
                  (_this.preventNextClose = !1);
              }),
              (_this.addVideo = function () {
                var _this$props = _this.props,
                  editorState = _this$props.editorState;
                (0, _this$props.onChange)(
                  _this.props.modifier(editorState, { src: _this.state.url })
                );
              }),
              (_this.changeUrl = function (evt) {
                _this.setState({ url: evt.target.value });
              }),
              _this
            );
          }
          !(function _inheritsLoose(subClass, superClass) {
            (subClass.prototype = Object.create(superClass.prototype)),
              (subClass.prototype.constructor = subClass),
              _setPrototypeOf(subClass, superClass);
          })(VideoAdd, _Component);
          var _proto = VideoAdd.prototype;
          return (
            (_proto.componentDidMount = function componentDidMount() {
              document.addEventListener('click', this.closePopover);
            }),
            (_proto.componentWillUnmount = function componentWillUnmount() {
              document.removeEventListener('click', this.closePopover);
            }),
            (_proto.render = function render() {
              var popoverClassName = this.state.open
                  ? styles_default.a.addVideoPopover
                  : styles_default.a.addVideoClosedPopover,
                buttonClassName = this.state.open
                  ? styles_default.a.addVideoPressedButton
                  : styles_default.a.addVideoButton;
              return react_default.a.createElement(
                'div',
                { className: styles_default.a.addVideo },
                react_default.a.createElement(
                  'button',
                  {
                    className: buttonClassName,
                    onMouseUp: this.openPopover,
                    type: 'button',
                  },
                  '+'
                ),
                react_default.a.createElement(
                  'div',
                  { className: popoverClassName, onClick: this.onPopoverClick },
                  react_default.a.createElement('input', {
                    type: 'text',
                    placeholder: 'Paste the video url …',
                    className: styles_default.a.addVideoInput,
                    onChange: this.changeUrl,
                    value: this.state.url,
                  }),
                  react_default.a.createElement(
                    'button',
                    {
                      className: styles_default.a.addVideoConfirmButton,
                      type: 'button',
                      onClick: this.addVideo,
                    },
                    'Add'
                  )
                )
              );
            }),
            VideoAdd
          );
        })(react.Component),
        editorStyles = __webpack_require__(422),
        editorStyles_default = __webpack_require__.n(editorStyles),
        videoPlugin = Object(src.a)(),
        plugins = [videoPlugin],
        CustomAddVideoEditor = function CustomVideoEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            onChange = function onChange(value) {
              setEditorState(value);
            };
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: onChange,
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            ),
            react_default.a.createElement(VideoAdd_VideoAdd, {
              editorState: editorState,
              onChange: onChange,
              modifier: videoPlugin.addVideo,
            })
          );
        },
        CustomAddVideoEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Video/Editor with Video Plugin and Add Video Button',
            component: CustomAddVideoEditor,
          }),
          function Default() {
            return react_default.a.createElement(CustomAddVideoEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleAlignmentEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        alignment_src = __webpack_require__(190),
        focus_src = __webpack_require__(45);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var colorBlockPlugin_ColorBlock = function ColorBlock(_ref) {
          _ref.block,
            _ref.blockProps,
            _ref.customStyleMap,
            _ref.customStyleFn,
            _ref.decorator,
            _ref.forceSelection,
            _ref.offsetKey,
            _ref.selection,
            _ref.tree,
            _ref.contentState,
            _ref.blockStyleFn,
            _ref.preventScroll;
          var style = _ref.style,
            elementProps = (function _objectWithoutPropertiesLoose(
              source,
              excluded
            ) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(_ref, [
              'block',
              'blockProps',
              'customStyleMap',
              'customStyleFn',
              'decorator',
              'forceSelection',
              'offsetKey',
              'selection',
              'tree',
              'contentState',
              'blockStyleFn',
              'preventScroll',
              'style',
            ]);
          return react_default.a.createElement(
            'div',
            _extends({}, elementProps, {
              style: _extends(
                { width: 200, height: 80, backgroundColor: '#9bc0c7' },
                style
              ),
            })
          );
        },
        colorBlockPlugin = function createColorBlockPlugin(config) {
          void 0 === config && (config = {});
          var component = config.decorator
            ? config.decorator(colorBlockPlugin_ColorBlock)
            : colorBlockPlugin_ColorBlock;
          return {
            blockRendererFn: function blockRendererFn(block, _ref2) {
              var getEditorState = _ref2.getEditorState;
              if (
                'atomic' === block.getType() &&
                'colorBlock' ===
                  getEditorState()
                    .getCurrentContent()
                    .getEntity(block.getEntityAt(0))
                    .getType()
              )
                return { component: component, editable: !1 };
              return null;
            },
          };
        },
        editorStyles = __webpack_require__(424),
        editorStyles_default = __webpack_require__.n(editorStyles),
        focusPlugin = Object(focus_src.a)(),
        alignmentPlugin = Object(alignment_src.a)(),
        AlignmentTool = alignmentPlugin.AlignmentTool,
        plugins = [
          focusPlugin,
          alignmentPlugin,
          colorBlockPlugin({
            decorator: Object(src.a)(
              alignmentPlugin.decorator,
              focusPlugin.decorator
            ),
          }),
        ],
        initialState = {
          entityMap: {
            0: { type: 'colorBlock', mutability: 'IMMUTABLE', data: {} },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text:
                'More text here to demonstrate how inline left/right alignment works …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        src_SimpleAlignmentEditor = function SimpleAlignmentEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function onClick() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(AlignmentTool, null)
            )
          );
        },
        SimpleAlignmentEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Alignment/Editor With Alignment Plugin',
            component: src_SimpleAlignmentEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              src_SimpleAlignmentEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleFocusEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        focus_src = __webpack_require__(45);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var colorBlockPlugin_ColorBlock = function ColorBlock(_ref) {
          _ref.block,
            _ref.blockProps,
            _ref.customStyleMap,
            _ref.customStyleFn,
            _ref.decorator,
            _ref.forceSelection,
            _ref.offsetKey,
            _ref.selection,
            _ref.tree,
            _ref.contentState,
            _ref.blockStyleFn,
            _ref.preventScroll;
          var style = _ref.style,
            elementProps = (function _objectWithoutPropertiesLoose(
              source,
              excluded
            ) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(_ref, [
              'block',
              'blockProps',
              'customStyleMap',
              'customStyleFn',
              'decorator',
              'forceSelection',
              'offsetKey',
              'selection',
              'tree',
              'contentState',
              'blockStyleFn',
              'preventScroll',
              'style',
            ]);
          return react_default.a.createElement(
            'div',
            _extends({}, elementProps, {
              style: _extends(
                { width: 200, height: 80, backgroundColor: '#9bc0c7' },
                style
              ),
            })
          );
        },
        colorBlockPlugin = function createColorBlockPlugin(config) {
          void 0 === config && (config = {});
          var component = config.decorator
            ? config.decorator(colorBlockPlugin_ColorBlock)
            : colorBlockPlugin_ColorBlock;
          return {
            blockRendererFn: function blockRendererFn(block, _ref2) {
              var getEditorState = _ref2.getEditorState;
              if (
                'atomic' === block.getType() &&
                'colorBlock' ===
                  getEditorState()
                    .getCurrentContent()
                    .getEntity(block.getEntityAt(0))
                    .getType()
              )
                return { component: component, editable: !1 };
              return null;
            },
          };
        },
        editorStyles = __webpack_require__(433),
        editorStyles_default = __webpack_require__.n(editorStyles),
        focusPlugin = Object(focus_src.a)(),
        plugins = [
          focusPlugin,
          colorBlockPlugin({ decorator: Object(src.a)(focusPlugin.decorator) }),
        ],
        initialState = {
          entityMap: {
            0: { type: 'colorBlock', mutability: 'IMMUTABLE', data: {} },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'This is a simple example. Click on the block to focus on it.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text:
                'More text here to demonstrate how inline left/right alignment works …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        SimpleFocusEditor = function CustomImageEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function onClick() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            })
          );
        },
        SimpleFocusEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Focus/Editor with Focus Plugin',
            component: SimpleFocusEditor,
          }),
          function Default() {
            return react_default.a.createElement(SimpleFocusEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomComponentMentionEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(20),
        editorStyles = __webpack_require__(445),
        editorStyles_default = __webpack_require__.n(editorStyles),
        src_mentions = [
          {
            name: 'matthew',
            title: 'Senior Software Engineer',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'julian',
            title: 'United Kingdom',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'jyoti',
            title: 'New Delhi, India',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'max',
            title:
              'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'nik',
            title:
              'Passionate about Software Architecture, UX, Skiing & Triathlons',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'pascal',
            title: 'HeathIT hacker and researcher',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        mentionPlugin = Object(src.a)({
          mentions: src_mentions,
          mentionComponent: function mentionComponent(props) {
            return react_default.a.createElement(
              'span',
              {
                className: props.className,
                onClick: function onClick() {
                  return alert('Clicked on the Mention!');
                },
              },
              props.children
            );
          },
        }),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        plugins = [mentionPlugin],
        CustomComponentMentionEditor = function CustomMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(!1),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = Object(react.useState)(src_mentions),
            suggestions = _useState3[0],
            setSuggestions = _useState3[1];
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(MentionSuggestions, {
              open: open,
              onOpenChange: function onOpenChange(newOpen) {
                setOpen(newOpen);
              },
              onSearchChange: function onSearchChange(_ref) {
                var value = _ref.value;
                setSuggestions(Object(src.b)(value, src_mentions));
              },
              suggestions: suggestions,
            })
          );
        },
        CustomComponentMentionEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Mentions/Mentions with styled suggestions',
            component: CustomComponentMentionEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              CustomComponentMentionEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomMentionEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(20),
        editorStyles = __webpack_require__(446),
        editorStyles_default = __webpack_require__.n(editorStyles),
        mentionsStyles = __webpack_require__(447),
        mentionsStyles_default = __webpack_require__.n(mentionsStyles),
        src_mentions = [
          {
            name: 'matthew',
            title: 'Senior Software Engineer',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Júlian',
            title: 'United Kingdom',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'jyoti',
            title: 'New Delhi, India',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'max',
            title:
              'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'nik',
            title:
              'Passionate about Software Architecture, UX, Skiing & Triathlons',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'pascal',
            title: 'HeathIT hacker and researcher',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ];
      var mentionPlugin = Object(src.a)({
          mentions: src_mentions,
          entityMutability: 'IMMUTABLE',
          theme: mentionsStyles_default.a,
          positionSuggestions: function positionSuggestions(_ref) {
            var transform,
              transition,
              props = _ref.props;
            return (
              props.open &&
                (props.suggestions.length > 0
                  ? ((transform = 'scaleY(1)'),
                    (transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
                  : ((transform = 'scaleY(0)'),
                    (transition = 'all 0.25s cubic-bezier(.3,1,.2,1)'))),
              { transform: transform, transition: transition }
            );
          },
          mentionPrefix: '@',
        }),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        plugins = [mentionPlugin],
        CustomMentionEditor_Entry = function Entry(props) {
          var mention = props.mention,
            theme = props.theme,
            parentProps =
              (props.isFocused,
              props.searchValue,
              (function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var key,
                  i,
                  target = {},
                  sourceKeys = Object.keys(source);
                for (i = 0; i < sourceKeys.length; i++)
                  (key = sourceKeys[i]),
                    excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                return target;
              })(props, ['mention', 'theme', 'isFocused', 'searchValue']));
          return react_default.a.createElement(
            'div',
            parentProps,
            react_default.a.createElement(
              'div',
              { className: theme.mentionSuggestionsEntryContainer },
              react_default.a.createElement(
                'div',
                { className: theme.mentionSuggestionsEntryContainerLeft },
                react_default.a.createElement('img', {
                  src: mention.avatar,
                  className: theme.mentionSuggestionsEntryAvatar,
                  role: 'presentation',
                })
              ),
              react_default.a.createElement(
                'div',
                { className: theme.mentionSuggestionsEntryContainerRight },
                react_default.a.createElement(
                  'div',
                  { className: theme.mentionSuggestionsEntryText },
                  mention.name
                ),
                react_default.a.createElement(
                  'div',
                  { className: theme.mentionSuggestionsEntryTitle },
                  mention.title
                )
              )
            )
          );
        },
        src_CustomMentionEditor = function CustomMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(!1),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = Object(react.useState)(src_mentions),
            suggestions = _useState3[0],
            setSuggestions = _useState3[1];
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(MentionSuggestions, {
              open: open,
              onOpenChange: function onOpenChange(newOpen) {
                setOpen(newOpen);
              },
              onSearchChange: function onSearchChange(_ref2) {
                var value = _ref2.value;
                setSuggestions(Object(src.b)(value, src_mentions));
              },
              suggestions: suggestions,
              entryComponent: CustomMentionEditor_Entry,
            })
          );
        },
        CustomMentionEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Mention/Editor with custom themed Mention Plugin',
            component: src_CustomMentionEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_CustomMentionEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return MentionEditorWithCustomTrigger_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(20),
        editorStyles = __webpack_require__(448),
        editorStyles_default = __webpack_require__.n(editorStyles),
        src_mentions = [
          {
            name: 'Matthew Russell',
            link: 'https://twitter.com/mrussell247',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            link: 'https://twitter.com/juliandoesstuff',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            link: 'https://twitter.com/jyopur',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            link: 'https://twitter.com/mxstbr',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            link: 'https://twitter.com/nikgraf',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            link: 'https://twitter.com/psbrandt',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        mentionPlugin = Object(src.a)({ mentionTrigger: '(' }),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        plugins = [mentionPlugin],
        MentionEditorWithCustomTrigger = function SimpleMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Draft.ContentState.createFromText(
                  'Type ( to make the mention dropdown appear'
                )
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(!1),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = Object(react.useState)(src_mentions),
            suggestions = _useState3[0],
            setSuggestions = _useState3[1];
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(MentionSuggestions, {
              open: open,
              onOpenChange: function onOpenChange(newOpen) {
                setOpen(newOpen);
              },
              onSearchChange: function onSearchChange(_ref) {
                var value = _ref.value;
                setSuggestions(Object(src.b)(value, src_mentions));
              },
              suggestions: suggestions,
              onAddMention: function onAddMention() {},
            })
          );
        },
        MentionEditorWithCustomTrigger_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Mentions/Mentions with a custom trigger',
            component: MentionEditorWithCustomTrigger,
          }),
          function Default() {
            return react_default.a.createElement(
              MentionEditorWithCustomTrigger,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return MentionEditorWithWhitespaceSupport_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(20),
        editorStyles = __webpack_require__(450),
        editorStyles_default = __webpack_require__.n(editorStyles),
        mentionsStyles = __webpack_require__(451),
        mentionsStyles_default = __webpack_require__.n(mentionsStyles),
        src_mentions = [
          {
            name: 'Matthew Russell',
            title: 'Senior Software Engineer',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            title: 'United Kingdom',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            title: 'New Delhi, India',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            title:
              'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            title:
              'Passionate about Software Architecture, UX, Skiing & Triathlons',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            title: 'HeathIT hacker and researcher',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ];
      var mentionPlugin = Object(src.a)({
          mentions: src_mentions,
          entityMutability: 'IMMUTABLE',
          theme: mentionsStyles_default.a,
          positionSuggestions: function positionSuggestions(_ref) {
            var transform,
              transition,
              props = _ref.props;
            return (
              props.open &&
                (props.suggestions.length > 0
                  ? ((transform = 'scaleY(1)'),
                    (transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
                  : ((transform = 'scaleY(0)'),
                    (transition = 'all 0.25s cubic-bezier(.3,1,.2,1)'))),
              { transform: transform, transition: transition }
            );
          },
          mentionPrefix: '@',
          supportWhitespace: !0,
        }),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        plugins = [mentionPlugin],
        MentionEditorWithWhitespaceSupport_Entry = function Entry(props) {
          var mention = props.mention,
            theme = props.theme,
            parentProps =
              (props.isFocused,
              props.searchValue,
              (function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var key,
                  i,
                  target = {},
                  sourceKeys = Object.keys(source);
                for (i = 0; i < sourceKeys.length; i++)
                  (key = sourceKeys[i]),
                    excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                return target;
              })(props, ['mention', 'theme', 'isFocused', 'searchValue']));
          return react_default.a.createElement(
            'div',
            parentProps,
            react_default.a.createElement(
              'div',
              { className: theme.mentionSuggestionsEntryContainer },
              react_default.a.createElement(
                'div',
                { className: theme.mentionSuggestionsEntryContainerLeft },
                react_default.a.createElement('img', {
                  src: mention.avatar,
                  className: theme.mentionSuggestionsEntryAvatar,
                  role: 'presentation',
                })
              ),
              react_default.a.createElement(
                'div',
                { className: theme.mentionSuggestionsEntryContainerRight },
                react_default.a.createElement(
                  'div',
                  { className: theme.mentionSuggestionsEntryText },
                  mention.name
                ),
                react_default.a.createElement(
                  'div',
                  { className: theme.mentionSuggestionsEntryTitle },
                  mention.title
                )
              )
            )
          );
        },
        MentionEditorWithWhitespaceSupport = function CustomMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Draft.ContentState.createFromText(
                  'Type a "@first last" name, mispelling the last name will drop the match'
                )
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(!1),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = Object(react.useState)(src_mentions),
            suggestions = _useState3[0],
            setSuggestions = _useState3[1];
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(MentionSuggestions, {
              open: open,
              onOpenChange: function onOpenChange(newOpen) {
                setOpen(newOpen);
              },
              onSearchChange: function onSearchChange(_ref2) {
                var value = _ref2.value;
                setSuggestions(Object(src.b)(value, src_mentions));
              },
              suggestions: suggestions,
              entryComponent: MentionEditorWithWhitespaceSupport_Entry,
            })
          );
        },
        MentionEditorWithWhitespaceSupport_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Mentions/Mentions with whitespace',
            component: MentionEditorWithWhitespaceSupport,
          }),
          function Default() {
            return react_default.a.createElement(
              MentionEditorWithWhitespaceSupport,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleMentionEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(20),
        editorStyles = __webpack_require__(452),
        editorStyles_default = __webpack_require__.n(editorStyles),
        src_mentions = [
          {
            name: 'Matthew Russell',
            link: 'https://twitter.com/mrussell247',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            link: 'https://twitter.com/juliandoesstuff',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            link: 'https://twitter.com/jyopur',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            link: 'https://twitter.com/mxstbr',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            link: 'https://twitter.com/nikgraf',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            link: 'https://twitter.com/psbrandt',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        mentionPlugin = Object(src.a)(),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        plugins = [mentionPlugin],
        src_SimpleMentionEditor = function SimpleMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(!1),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = Object(react.useState)(''),
            search = _useState3[0],
            setSearch = _useState3[1];
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(MentionSuggestions, {
              open: open,
              suggestions: Object(src.b)(search, src_mentions),
              onOpenChange: function onOpenChange(newOpen) {
                setOpen(newOpen);
              },
              onSearchChange: function onSearchChange(_ref) {
                var value = _ref.value;
                setSearch(value);
              },
              onAddMention: function onAddMention() {},
            })
          );
        },
        SimpleMentionEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Mentions/Editor with Mention Plugin',
            component: src_SimpleMentionEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleMentionEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return ResizableEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        resizeable_src = __webpack_require__(195),
        focus_src = __webpack_require__(45);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var ColorBlock = react_default.a.forwardRef(function (_ref, ref) {
        _ref.block,
          _ref.blockProps,
          _ref.customStyleMap,
          _ref.customStyleFn,
          _ref.decorator,
          _ref.forceSelection,
          _ref.offsetKey,
          _ref.selection,
          _ref.tree,
          _ref.contentState,
          _ref.blockStyleFn,
          _ref.preventScroll;
        var style = _ref.style,
          elementProps = (function _objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(_ref, [
            'block',
            'blockProps',
            'customStyleMap',
            'customStyleFn',
            'decorator',
            'forceSelection',
            'offsetKey',
            'selection',
            'tree',
            'contentState',
            'blockStyleFn',
            'preventScroll',
            'style',
          ]);
        return react_default.a.createElement(
          'div',
          _extends({ ref: ref }, elementProps, {
            style: _extends(
              { width: 200, height: 80, backgroundColor: '#9bc0c7' },
              style
            ),
          })
        );
      });
      ColorBlock.displayName = 'ColorBlock';
      var colorBlockPlugin = function createColorBlockPlugin(config) {
          void 0 === config && (config = {});
          var component = config.decorator
            ? config.decorator(ColorBlock)
            : ColorBlock;
          return {
            blockRendererFn: function blockRendererFn(block, _ref2) {
              var getEditorState = _ref2.getEditorState;
              if (
                'atomic' === block.getType() &&
                'colorBlock' ===
                  getEditorState()
                    .getCurrentContent()
                    .getEntity(block.getEntityAt(0))
                    .getType()
              )
                return { component: component, editable: !1 };
              return null;
            },
          };
        },
        editorStyles = __webpack_require__(453),
        editorStyles_default = __webpack_require__.n(editorStyles),
        focusPlugin = Object(focus_src.a)(),
        resizeablePlugin = Object(resizeable_src.a)(),
        plugins = [
          focusPlugin,
          resizeablePlugin,
          colorBlockPlugin({
            decorator: Object(src.a)(
              resizeablePlugin.decorator,
              focusPlugin.decorator
            ),
          }),
        ],
        initialState = {
          entityMap: {
            0: { type: 'colorBlock', mutability: 'IMMUTABLE', data: {} },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'This is a simple example. Hover the block and change the with by dragging the mouse.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text: 'More text here …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        ResizableEditor = function SimpleResizeableEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            )
          );
        },
        ResizableEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Resizeable/Resizeable editor',
            component: ResizableEditor,
          }),
          function Default() {
            return react_default.a.createElement(ResizableEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleStickerEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(191),
        editorStyles = __webpack_require__(270),
        editorStyles_default = __webpack_require__.n(editorStyles),
        immutable = __webpack_require__(3),
        src_stickers = Object(immutable.fromJS)({
          data: {
            'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {
              id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',
              url: '../images/unicorn-4.png',
            },
            'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {
              id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',
              url: '../images/unicorn-1.png',
            },
            'e14b5a20-1025-4952-b731-41cd4b118ba0': {
              id: 'e14b5a20-1025-4952-b731-41cd4b118ba0',
              url: '../images/unicorn-6.png',
            },
            '659a0dbf-5f85-4f32-999d-eb9ba6b0f417': {
              id: '659a0dbf-5f85-4f32-999d-eb9ba6b0f417',
              url: '../images/unicorn-2.png',
            },
            'fab0ae95-ae95-4775-b484-72c290437602': {
              id: 'fab0ae95-ae95-4775-b484-72c290437602',
              url: '../images/unicorn-5.png',
            },
            '71853190-8acd-4d3b-b4fd-63f7b0648daa': {
              id: '71853190-8acd-4d3b-b4fd-63f7b0648daa',
              url: '../images/unicorn-3.png',
            },
          },
        }),
        stickerPlugin = Object(src.a)({ stickers: src_stickers }),
        plugins = [stickerPlugin],
        StickerSelect = stickerPlugin.StickerSelect,
        SimpleStickerEditor = function SimpleMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            onChange = function onChange(value) {
              setEditorState(value);
            },
            self = { onChange: onChange, state: { editorState: editorState } };
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: onChange,
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            ),
            react_default.a.createElement(
              'div',
              { className: editorStyles_default.a.options },
              react_default.a.createElement(StickerSelect, { editor: self })
            )
          );
        },
        SimpleStickerEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Sticker/Editor with Sticker Plugin',
            component: SimpleStickerEditor,
          }),
          function Default() {
            return react_default.a.createElement(SimpleStickerEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomImageEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        image_src = __webpack_require__(89),
        alignment_src = __webpack_require__(190),
        focus_src = __webpack_require__(45),
        resizeable_src = __webpack_require__(195),
        drag_n_drop_src = __webpack_require__(193),
        editorStyles = __webpack_require__(423),
        editorStyles_default = __webpack_require__.n(editorStyles),
        focusPlugin = Object(focus_src.a)(),
        resizeablePlugin = Object(resizeable_src.a)(),
        blockDndPlugin = Object(drag_n_drop_src.a)(),
        alignmentPlugin = Object(alignment_src.a)(),
        AlignmentTool = alignmentPlugin.AlignmentTool,
        decorator = Object(src.a)(
          resizeablePlugin.decorator,
          alignmentPlugin.decorator,
          focusPlugin.decorator,
          blockDndPlugin.decorator
        ),
        plugins = [
          blockDndPlugin,
          focusPlugin,
          alignmentPlugin,
          resizeablePlugin,
          Object(image_src.a)({ decorator: decorator }),
        ],
        initialState = {
          entityMap: {
            0: {
              type: 'IMAGE',
              mutability: 'IMMUTABLE',
              data: { src: '/images/canada-landscape-small.jpg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text: 'See advanced examples further down …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        src_CustomImageEditor = function CustomImageEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function onClick() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(AlignmentTool, null)
            )
          );
        },
        CustomImageEditor_stories_Default =
          ((__webpack_exports__.default = {
            title:
              'Image/Editor With Image Plugin And A Few Others DragAndDrop Alignment Resizable Focus',
            component: src_CustomImageEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_CustomImageEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleImageEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(89),
        editorStyles = __webpack_require__(427),
        editorStyles_default = __webpack_require__.n(editorStyles),
        plugins = [Object(src.a)()],
        initialState = {
          entityMap: {
            0: {
              type: 'IMAGE',
              mutability: 'IMMUTABLE',
              data: { src: '/images/canada-landscape-small.jpg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text: 'See advanced examples further down …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        src_SimpleImageEditor = function SimpleImageEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            )
          );
        },
        SimpleImageEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Image/Editor with Image Plugin',
            component: src_SimpleImageEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleImageEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return DragNDropImageEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        image_src = __webpack_require__(89),
        focus_src = __webpack_require__(45),
        drag_n_drop_src = __webpack_require__(193),
        editorStyles = __webpack_require__(429),
        editorStyles_default = __webpack_require__.n(editorStyles),
        focusPlugin = Object(focus_src.a)(),
        blockDndPlugin = Object(drag_n_drop_src.a)(),
        decorator = Object(src.a)(
          focusPlugin.decorator,
          blockDndPlugin.decorator
        ),
        plugins = [
          blockDndPlugin,
          focusPlugin,
          Object(image_src.a)({ decorator: decorator }),
        ],
        initialState = {
          entityMap: {
            0: {
              type: 'IMAGE',
              mutability: 'IMMUTABLE',
              data: { src: '/images/canada-landscape-small.jpg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text:
                'You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        DragNDropImageEditor = function CustomImageEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            )
          );
        },
        DragNDropImageEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Image/Editor With DragNDrop Plugin And Image Plugin',
            component: DragNDropImageEditor,
          }),
          function Default() {
            return react_default.a.createElement(DragNDropImageEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomEmojiEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        emoji_src = __webpack_require__(120),
        editorStyles = __webpack_require__(266),
        editorStyles_default = __webpack_require__.n(editorStyles),
        emojiPlugin = Object(emoji_src.a)({ useNativeArt: !0 }),
        EmojiSuggestions = emojiPlugin.EmojiSuggestions,
        EmojiSelect = emojiPlugin.EmojiSelect,
        plugins = [emojiPlugin],
        src_CustomEmojiEditor = function CustomEmojiEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Cool, we can have all sorts of Emojis here. 🙌\n🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(EmojiSuggestions, null)
            ),
            react_default.a.createElement(
              'div',
              { className: editorStyles_default.a.options },
              react_default.a.createElement(EmojiSelect, null)
            )
          );
        },
        CustomEmojiEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Emoji/Editor with Emoji Plugin using native emojis',
            component: src_CustomEmojiEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_CustomEmojiEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleEmojiEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        emoji_src = __webpack_require__(120),
        editorStyles = __webpack_require__(267),
        editorStyles_default = __webpack_require__.n(editorStyles),
        emojiPlugin = Object(emoji_src.a)(),
        EmojiSuggestions = emojiPlugin.EmojiSuggestions,
        EmojiSelect = emojiPlugin.EmojiSelect,
        plugins = [emojiPlugin],
        src_SimpleEmojiEditor = function SimpleEmojiEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Cool, we can have all sorts of Emojis here. 🙌\n🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(EmojiSuggestions, null)
            ),
            react_default.a.createElement(
              'div',
              { className: editorStyles_default.a.options },
              react_default.a.createElement(EmojiSelect, null)
            )
          );
        },
        SimpleEmojiEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Emoji/Editor with Emoji Plugin using emoji-one plugins',
            component: src_SimpleEmojiEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleEmojiEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomHashtagEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        hashtag_src = __webpack_require__(121),
        editorStyles = __webpack_require__(434),
        editorStyles_default = __webpack_require__.n(editorStyles),
        hashtagStyles = __webpack_require__(435),
        hashtagStyles_default = __webpack_require__.n(hashtagStyles),
        plugins = [Object(hashtag_src.a)({ theme: hashtagStyles_default.a })],
        src_CustomHashtagEditor = function CustomHashtagEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'In this editor, we can even apply our own styles … #design #theme'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            })
          );
        },
        CustomHashtagEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Hashtag/Editor with custom themed Hashtag Plugin',
            component: src_CustomHashtagEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_CustomHashtagEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleHashtagEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        hashtag_src = __webpack_require__(121),
        editorStyles = __webpack_require__(436),
        editorStyles_default = __webpack_require__.n(editorStyles),
        plugins = [Object(hashtag_src.a)()],
        src_SimpleHashtagEditor = function SimpleHashtagEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                '#TIL: This editor can have all sorts of #hashtags. Pretty #cool :)\nTry it yourself by starting a word with a # (hash character) …\n'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            })
          );
        },
        SimpleHashtagEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Hashtag/Editor with Hashtag Plugin',
            component: src_SimpleHashtagEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleHashtagEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomInlineToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        inline_toolbar_src = __webpack_require__(61),
        Separator = __webpack_require__(418),
        HeadlineOneButton = __webpack_require__(1075),
        HeadlineTwoButton = __webpack_require__(1076),
        HeadlineThreeButton = __webpack_require__(1081),
        BoldButton = __webpack_require__(1083),
        ItalicButton = __webpack_require__(1082),
        UnderlineButton = __webpack_require__(1084),
        SubButton = __webpack_require__(1086),
        SupButton = __webpack_require__(1087),
        CodeButton = __webpack_require__(1085),
        UnorderedListButton = __webpack_require__(1079),
        OrderedListButton = __webpack_require__(1080),
        BlockquoteButton = __webpack_require__(1077),
        CodeBlockButton = __webpack_require__(1078),
        editorStyles = __webpack_require__(196),
        editorStyles_default = __webpack_require__.n(editorStyles);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var CustomInlineToolbarEditor_HeadlinesPicker = function HeadlinesPicker(
          props
        ) {
          var onWindowClick = function onWindowClick() {
            return props.onOverrideContent(void 0);
          };
          Object(react.useEffect)(function () {
            var timeout = setTimeout(function () {
              window.addEventListener('click', onWindowClick);
            });
            return function () {
              timeout && clearTimeout(timeout),
                window.removeEventListener('click', onWindowClick);
            };
          });
          var buttons = [
            HeadlineOneButton.a,
            HeadlineTwoButton.a,
            HeadlineThreeButton.a,
          ];
          return react_default.a.createElement(
            'div',
            null,
            buttons.map(function (Button, i) {
              return react_default.a.createElement(
                Button,
                _extends({ key: i }, props)
              );
            })
          );
        },
        CustomInlineToolbarEditor_HeadlinesButton = function HeadlinesButton(
          _ref
        ) {
          var onOverrideContent = _ref.onOverrideContent;
          return react_default.a.createElement(
            'div',
            {
              onMouseDown: function onMouseDown(event) {
                return event.preventDefault();
              },
              className: editorStyles_default.a.headlineButtonWrapper,
            },
            react_default.a.createElement(
              'button',
              {
                onClick: function onClick() {
                  return onOverrideContent(
                    CustomInlineToolbarEditor_HeadlinesPicker
                  );
                },
                className: editorStyles_default.a.headlineButton,
              },
              'H'
            )
          );
        },
        inlineToolbarPlugin = Object(inline_toolbar_src.a)(),
        InlineToolbar = inlineToolbarPlugin.InlineToolbar,
        plugins = [inlineToolbarPlugin],
        src_CustomInlineToolbarEditor = function CustomInlineToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'In this editor a toolbar shows up once you select part of the text …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(
              InlineToolbar,
              null,
              function (externalProps) {
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(BoldButton.a, externalProps),
                  react_default.a.createElement(ItalicButton.a, externalProps),
                  react_default.a.createElement(
                    UnderlineButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(SubButton.a, externalProps),
                  react_default.a.createElement(SupButton.a, externalProps),
                  react_default.a.createElement(CodeButton.a, externalProps),
                  react_default.a.createElement(Separator.a, externalProps),
                  react_default.a.createElement(
                    CustomInlineToolbarEditor_HeadlinesButton,
                    externalProps
                  ),
                  react_default.a.createElement(
                    UnorderedListButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    OrderedListButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    BlockquoteButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    CodeBlockButton.a,
                    externalProps
                  )
                );
              }
            )
          );
        },
        CustomInlineToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title:
              'Inline Toolbar/Editor with inline toolbar plugin containing all buttons',
            component: src_CustomInlineToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              src_CustomInlineToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return ThemedInlineToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        inline_toolbar_src = __webpack_require__(61),
        editorStyles = __webpack_require__(437),
        editorStyles_default = __webpack_require__.n(editorStyles),
        buttonStyles = __webpack_require__(438),
        buttonStyles_default = __webpack_require__.n(buttonStyles),
        toolbarStyles = __webpack_require__(439),
        toolbarStyles_default = __webpack_require__.n(toolbarStyles),
        inlineToolbarPlugin = Object(inline_toolbar_src.a)({
          theme: {
            buttonStyles: buttonStyles_default.a,
            toolbarStyles: toolbarStyles_default.a,
          },
        }),
        InlineToolbar = inlineToolbarPlugin.InlineToolbar,
        plugins = [inlineToolbarPlugin],
        src_ThemedInlineToolbarEditor = function ThemedInlineToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'In this editor a toolbar with a lot more options shows up once you select part of the text …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(InlineToolbar, null)
          );
        },
        ThemedInlineToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Inline Toolbar/Editor with custom themed toolbar plugin',
            component: src_ThemedInlineToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              src_ThemedInlineToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return RelativeParentInlineToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        inline_toolbar_src = __webpack_require__(61),
        editorStyles = __webpack_require__(268),
        editorStyles_default = __webpack_require__.n(editorStyles),
        inlineToolbarPlugin = Object(inline_toolbar_src.a)(),
        InlineToolbar = inlineToolbarPlugin.InlineToolbar,
        plugins = [inlineToolbarPlugin],
        RelativeParentInlineToolbarEditor = function SimpleInlineToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'In this editor a toolbar shows up once you select part of the text …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            { className: editorStyles_default.a.root },
            react_default.a.createElement(
              'p',
              null,
              'Here is some content above the editor.'
            ),
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(InlineToolbar, null)
            )
          );
        },
        RelativeParentInlineToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title:
              'Inline Toolbar/Inline Toolbar with relatively positioned parent',
            component: RelativeParentInlineToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              RelativeParentInlineToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleInlineToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        inline_toolbar_src = __webpack_require__(61),
        editorStyles = __webpack_require__(442),
        editorStyles_default = __webpack_require__.n(editorStyles),
        inlineToolbarPlugin = Object(inline_toolbar_src.a)(),
        InlineToolbar = inlineToolbarPlugin.InlineToolbar,
        plugins = [inlineToolbarPlugin],
        src_SimpleInlineToolbarEditor = function SimpleInlineToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'In this editor a toolbar shows up once you select part of the text …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(InlineToolbar, null)
          );
        },
        SimpleInlineToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Inline Toolbar/Editor with default inline toolbar plugin',
            component: src_SimpleInlineToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              src_SimpleInlineToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomLinkifyEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(122),
        editorStyles = __webpack_require__(443),
        editorStyles_default = __webpack_require__.n(editorStyles);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var plugins = [
          Object(src.a)({
            target: '_blank',
            component: function component(props) {
              return react_default.a.createElement(
                'a',
                _extends({}, props, {
                  onClick: function onClick() {
                    return alert('Clicked on Link!');
                  },
                })
              );
            },
          }),
        ],
        CustomLinkifyEditor = function CustomMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            })
          );
        },
        CustomLinkifyEditor_stories_Default =
          ((__webpack_exports__.default = {
            title:
              'Linkify/Editor with Linkify Plugin and configured to render links with target blank',
            component: CustomLinkifyEditor,
          }),
          function Default() {
            return react_default.a.createElement(CustomLinkifyEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleLinkifyEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(122),
        editorStyles = __webpack_require__(444),
        editorStyles_default = __webpack_require__.n(editorStyles),
        plugins = [Object(src.a)()],
        SimpleLinkifyEditor = function SimpleMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Draft.ContentState.createFromText('Hello there google.com')
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            })
          );
        },
        SimpleLinkifyEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Linkify/Editor with Linkify Plugin',
            component: SimpleLinkifyEditor,
          }),
          function Default() {
            return react_default.a.createElement(SimpleLinkifyEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return RemoteMentionEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(20),
        editorStyles = __webpack_require__(449),
        editorStyles_default = __webpack_require__.n(editorStyles),
        mentionPlugin = Object(src.a)(),
        MentionSuggestions = mentionPlugin.MentionSuggestions,
        plugins = [mentionPlugin],
        RemoteMentionEditor = function SimpleMentionEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)(),
            _useState2 = Object(react.useState)(!1),
            open = _useState2[0],
            setOpen = _useState2[1],
            _useState3 = Object(react.useState)([]),
            suggestions = _useState3[0],
            setSuggestions = _useState3[1];
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(MentionSuggestions, {
              open: open,
              onOpenChange: function onOpenChange(newOpen) {
                setOpen(newOpen);
              },
              onSearchChange: function onSearchChange(_ref) {
                var value = _ref.value;
                __webpack_require__(1017);
                var url = '/data/mentionsA.json';
                1 === value.length
                  ? (url = '/data/mentionsB.json')
                  : value.length > 1 && (url = '/data/mentionsC.json'),
                  fetch(url)
                    .then(function (response) {
                      return response.json();
                    })
                    .then(function (data) {
                      setSuggestions(data);
                    });
              },
              suggestions: suggestions,
            })
          );
        },
        RemoteMentionEditor_stories_Default =
          ((__webpack_exports__.default = {
            title:
              'Mentions/Editor with Mention Plugin and asynchronously loaded suggestions',
            component: RemoteMentionEditor,
          }),
          function Default() {
            return react_default.a.createElement(RemoteMentionEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomSideToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        HeadlineOneButton = __webpack_require__(1075),
        HeadlineTwoButton = __webpack_require__(1076),
        BlockquoteButton = __webpack_require__(1077),
        CodeBlockButton = __webpack_require__(1078),
        side_toolbar_src = __webpack_require__(88),
        editorStyles = __webpack_require__(454),
        editorStyles_default = __webpack_require__.n(editorStyles),
        buttonStyles = __webpack_require__(455),
        buttonStyles_default = __webpack_require__.n(buttonStyles),
        toolbarStyles = __webpack_require__(456),
        toolbarStyles_default = __webpack_require__.n(toolbarStyles),
        blockTypeSelectStyles = __webpack_require__(457),
        blockTypeSelectStyles_default = __webpack_require__.n(
          blockTypeSelectStyles
        ),
        sideToolbarPlugin = Object(side_toolbar_src.a)({
          position: 'right',
          theme: {
            buttonStyles: buttonStyles_default.a,
            toolbarStyles: toolbarStyles_default.a,
            blockTypeSelectStyles: blockTypeSelectStyles_default.a,
          },
        }),
        SideToolbar = sideToolbarPlugin.SideToolbar,
        plugins = [sideToolbarPlugin],
        src_CustomSideToolbarEditor = function CustomSideToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Once you click into the text field the sidebar plugin will show up …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(
              SideToolbar,
              null,
              function (externalProps) {
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    HeadlineOneButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    HeadlineTwoButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    BlockquoteButton.a,
                    externalProps
                  ),
                  react_default.a.createElement(
                    CodeBlockButton.a,
                    externalProps
                  )
                );
              }
            )
          );
        },
        CustomSideToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Toolbar/Styled sidebar',
            component: src_CustomSideToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              src_CustomSideToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return RelativeParentSideToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        side_toolbar_src = __webpack_require__(88),
        editorStyles = __webpack_require__(269),
        editorStyles_default = __webpack_require__.n(editorStyles),
        sideToolbarPlugin = Object(side_toolbar_src.a)(),
        SideToolbar = sideToolbarPlugin.SideToolbar,
        plugins = [sideToolbarPlugin],
        RelativeParentSideToolbarEditor = function SimpleSideToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Once you click into the text field the sidebar plugin will show up …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            { className: editorStyles_default.a.root },
            react_default.a.createElement(
              'p',
              null,
              'Here is some content above the editor.'
            ),
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(SideToolbar, null)
            )
          );
        },
        RelativeParentSideToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Toolbar/Sidebar with relatively positioned parent',
            component: RelativeParentSideToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              RelativeParentSideToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleSideToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        side_toolbar_src = __webpack_require__(88),
        editorStyles = __webpack_require__(458),
        editorStyles_default = __webpack_require__.n(editorStyles),
        sideToolbarPlugin = Object(side_toolbar_src.a)(),
        SideToolbar = sideToolbarPlugin.SideToolbar,
        plugins = [sideToolbarPlugin],
        src_SimpleSideToolbarEditor = function SimpleSideToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Once you click into the text field the sidebar plugin will show up …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            }),
            react_default.a.createElement(SideToolbar, null)
          );
        },
        SimpleSideToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Toolbar/Sidebar',
            component: src_SimpleSideToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(
              src_SimpleSideToolbarEditor,
              null
            );
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return CustomToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        static_toolbar_src = __webpack_require__(123),
        Separator = __webpack_require__(419),
        HeadlineOneButton = __webpack_require__(1075),
        HeadlineTwoButton = __webpack_require__(1076),
        HeadlineThreeButton = __webpack_require__(1081),
        BoldButton = __webpack_require__(1083),
        ItalicButton = __webpack_require__(1082),
        UnderlineButton = __webpack_require__(1084),
        CodeButton = __webpack_require__(1085),
        UnorderedListButton = __webpack_require__(1079),
        OrderedListButton = __webpack_require__(1080),
        BlockquoteButton = __webpack_require__(1077),
        CodeBlockButton = __webpack_require__(1078),
        SubButton = __webpack_require__(1086),
        SupButton = __webpack_require__(1087),
        editorStyles = __webpack_require__(197),
        editorStyles_default = __webpack_require__.n(editorStyles);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var CustomToolbarEditor_HeadlinesPicker = function HeadlinesPicker(
          props
        ) {
          var onWindowClick = function onWindowClick() {
            return props.onOverrideContent(void 0);
          };
          Object(react.useEffect)(function () {
            var timeout = setTimeout(function () {
              window.addEventListener('click', onWindowClick);
            });
            return function () {
              timeout && clearTimeout(timeout),
                window.removeEventListener('click', onWindowClick);
            };
          }, []);
          var buttons = [
            HeadlineOneButton.a,
            HeadlineTwoButton.a,
            HeadlineThreeButton.a,
          ];
          return react_default.a.createElement(
            'div',
            null,
            buttons.map(function (Button, i) {
              return react_default.a.createElement(
                Button,
                _extends({ key: i }, props)
              );
            })
          );
        },
        CustomToolbarEditor_HeadlinesButton = function HeadlinesButton(_ref) {
          var onOverrideContent = _ref.onOverrideContent;
          return react_default.a.createElement(
            'div',
            { className: editorStyles_default.a.headlineButtonWrapper },
            react_default.a.createElement(
              'button',
              {
                onClick: function onClick() {
                  return onOverrideContent(CustomToolbarEditor_HeadlinesPicker);
                },
                className: editorStyles_default.a.headlineButton,
              },
              'H'
            )
          );
        },
        toolbarPlugin = Object(static_toolbar_src.a)(),
        Toolbar = toolbarPlugin.Toolbar,
        plugins = [toolbarPlugin],
        src_CustomToolbarEditor = function CustomToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Remember to place the <Toolbar> component bellow the Editor component …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                customStyleMap: {
                  SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
                  SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' },
                },
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(
                Toolbar,
                null,
                function (externalProps) {
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(BoldButton.a, externalProps),
                    react_default.a.createElement(
                      ItalicButton.a,
                      externalProps
                    ),
                    react_default.a.createElement(
                      UnderlineButton.a,
                      externalProps
                    ),
                    react_default.a.createElement(CodeButton.a, externalProps),
                    react_default.a.createElement(Separator.a, externalProps),
                    react_default.a.createElement(
                      CustomToolbarEditor_HeadlinesButton,
                      externalProps
                    ),
                    react_default.a.createElement(
                      UnorderedListButton.a,
                      externalProps
                    ),
                    react_default.a.createElement(
                      OrderedListButton.a,
                      externalProps
                    ),
                    react_default.a.createElement(
                      BlockquoteButton.a,
                      externalProps
                    ),
                    react_default.a.createElement(
                      CodeBlockButton.a,
                      externalProps
                    ),
                    react_default.a.createElement(SubButton.a, externalProps),
                    react_default.a.createElement(SupButton.a, externalProps)
                  );
                }
              )
            )
          );
        },
        CustomToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Toolbar/Custom toolbar editor',
            component: src_CustomToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_CustomToolbarEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return ThemedToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        static_toolbar_src = __webpack_require__(123),
        Separator = __webpack_require__(419),
        HeadlineOneButton = __webpack_require__(1075),
        HeadlineTwoButton = __webpack_require__(1076),
        HeadlineThreeButton = __webpack_require__(1081),
        BoldButton = __webpack_require__(1083),
        ItalicButton = __webpack_require__(1082),
        UnderlineButton = __webpack_require__(1084),
        CodeButton = __webpack_require__(1085),
        UnorderedListButton = __webpack_require__(1079),
        OrderedListButton = __webpack_require__(1080),
        BlockquoteButton = __webpack_require__(1077),
        CodeBlockButton = __webpack_require__(1078),
        SubButton = __webpack_require__(1086),
        SupButton = __webpack_require__(1087),
        editorStyles = __webpack_require__(198),
        editorStyles_default = __webpack_require__.n(editorStyles);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var ThemedToolbarEditor_HeadlinesPicker = function HeadlinesPicker(
          props
        ) {
          var onWindowClick = function onWindowClick() {
            return props.onOverrideContent(void 0);
          };
          Object(react.useEffect)(function () {
            var timeout = setTimeout(function () {
              window.addEventListener('click', onWindowClick);
            });
            return function () {
              timeout && clearTimeout(timeout),
                window.removeEventListener('click', onWindowClick);
            };
          }, []);
          var buttons = [
            HeadlineOneButton.a,
            HeadlineTwoButton.a,
            HeadlineThreeButton.a,
          ];
          return react_default.a.createElement(
            'div',
            null,
            buttons.map(function (Button, i) {
              return react_default.a.createElement(
                Button,
                _extends({ key: i }, props)
              );
            })
          );
        },
        toolbarPlugin = Object(static_toolbar_src.a)({
          structure: [
            BoldButton.a,
            ItalicButton.a,
            UnderlineButton.a,
            CodeButton.a,
            Separator.a,
            function HeadlinesButton(_ref) {
              var onOverrideContent = _ref.onOverrideContent;
              return react_default.a.createElement(
                'div',
                { className: editorStyles_default.a.headlineButtonWrapper },
                react_default.a.createElement(
                  'button',
                  {
                    onClick: function onClick() {
                      return onOverrideContent(
                        ThemedToolbarEditor_HeadlinesPicker
                      );
                    },
                    className: editorStyles_default.a.headlineButton,
                  },
                  'H'
                )
              );
            },
            UnorderedListButton.a,
            OrderedListButton.a,
            BlockquoteButton.a,
            CodeBlockButton.a,
            SubButton.a,
            SupButton.a,
          ],
        }),
        Toolbar = toolbarPlugin.Toolbar,
        plugins = [toolbarPlugin],
        ThemedToolbarEditor = function CustomToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'Remember to place the <Toolbar> component bellow the Editor component …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                customStyleMap: {
                  SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
                  SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' },
                },
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(Toolbar, null)
            )
          );
        },
        ThemedToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Toolbar/Themed toolbar editor',
            component: ThemedToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(ThemedToolbarEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleToolbarEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(6),
        Editor = __webpack_require__(420),
        static_toolbar_src = __webpack_require__(123),
        editorStyles = __webpack_require__(459),
        editorStyles_default = __webpack_require__.n(editorStyles),
        inlineToolbarPlugin = Object(static_toolbar_src.a)(),
        Toolbar = inlineToolbarPlugin.Toolbar,
        plugins = [inlineToolbarPlugin],
        SimpleToolbarEditor = function SimpleInlineToolbarEditor() {
          var _useState = Object(react.useState)(
              Object(src.b)(
                'The toolbar above the editor can be used for formatting text, as in conventional static editors  …'
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              }),
              react_default.a.createElement(Toolbar, null)
            )
          );
        },
        SimpleToolbarEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Toolbar/Simple toolbar editor',
            component: SimpleToolbarEditor,
          }),
          function Default() {
            return react_default.a.createElement(SimpleToolbarEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleUndoEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(194),
        editorStyles = __webpack_require__(271),
        editorStyles_default = __webpack_require__.n(editorStyles),
        undoPlugin = Object(src.a)(),
        UndoButton = undoPlugin.UndoButton,
        RedoButton = undoPlugin.RedoButton,
        plugins = [undoPlugin],
        src_SimpleUndoEditor = function SimpleUndoEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createEmpty()
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'div',
              {
                className: editorStyles_default.a.editor,
                onClick: function focus() {
                  editor.current.focus();
                },
              },
              react_default.a.createElement(Editor.a, {
                editorState: editorState,
                onChange: function onChange(value) {
                  setEditorState(value);
                },
                plugins: plugins,
                ref: function ref(element) {
                  editor.current = element;
                },
              })
            ),
            react_default.a.createElement(
              'div',
              { className: editorStyles_default.a.options },
              react_default.a.createElement(UndoButton, null),
              react_default.a.createElement(RedoButton, null)
            )
          );
        },
        SimpleUndoEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Undo/Editor with undo plugin',
            component: src_SimpleUndoEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleUndoEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return SimpleVideoEditor_stories_Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Draft = __webpack_require__(1),
        Editor = __webpack_require__(420),
        src = __webpack_require__(192),
        editorStyles = __webpack_require__(460),
        editorStyles_default = __webpack_require__.n(editorStyles),
        videoPlugin = Object(src.a)(),
        types = videoPlugin.types,
        plugins = [videoPlugin],
        initialState = {
          entityMap: {
            0: {
              type: types.VIDEOTYPE,
              mutability: 'IMMUTABLE',
              data: { src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text: 'See advanced examples further down …',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        src_SimpleVideoEditor = function SimpleVideoEditor() {
          var _useState = Object(react.useState)(
              Draft.EditorState.createWithContent(
                Object(Draft.convertFromRaw)(initialState)
              )
            ),
            editorState = _useState[0],
            setEditorState = _useState[1],
            editor = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            {
              className: editorStyles_default.a.editor,
              onClick: function focus() {
                editor.current.focus();
              },
            },
            react_default.a.createElement(Editor.a, {
              editorState: editorState,
              onChange: function onChange(value) {
                setEditorState(value);
              },
              plugins: plugins,
              ref: function ref(element) {
                editor.current = element;
              },
            })
          );
        },
        SimpleVideoEditor_stories_Default =
          ((__webpack_exports__.default = {
            title: 'Video/Editor with Video Plugin',
            component: src_SimpleVideoEditor,
          }),
          function Default() {
            return react_default.a.createElement(src_SimpleVideoEditor, null);
          });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        33
      );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_0__.a
      )({ blockType: 'header-one', children: 'H1' });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        33
      );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_0__.a
      )({ blockType: 'header-two', children: 'H2' });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          33
        );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        blockType: 'blockquote',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0z',
            fill: 'none',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          33
        );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        blockType: 'code-block',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0V0z',
            fill: 'none',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d:
              'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          33
        );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        blockType: 'unordered-list-item',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d:
              'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0V0z',
            fill: 'none',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          33
        );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        blockType: 'ordered-list-item',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d:
              'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0z',
            fill: 'none',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        33
      );
      __webpack_exports__.a = Object(
        _utils_createBlockStyleButton__WEBPACK_IMPORTED_MODULE_0__.a
      )({ blockType: 'header-three', children: 'H3' });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          44
        );
      __webpack_exports__.a = Object(
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        style: 'ITALIC',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0z',
            fill: 'none',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          44
        );
      __webpack_exports__.a = Object(
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        style: 'BOLD',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d:
              'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0z',
            fill: 'none',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          44
        );
      __webpack_exports__.a = Object(
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        style: 'UNDERLINE',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0z',
            fill: 'none',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d:
              'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          44
        );
      __webpack_exports__.a = Object(
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        style: 'CODE',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'svg',
          {
            height: '24',
            viewBox: '0 0 24 24',
            width: '24',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d: 'M0 0h24v24H0V0z',
            fill: 'none',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
            d:
              'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
          })
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          44
        );
      __webpack_exports__.a = Object(
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        style: 'SUBSCRIPT',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          'x',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'sub',
            null,
            '2'
          )
        ),
      });
    },
    function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          44
        );
      __webpack_exports__.a = Object(
        _utils_createInlineStyleButton__WEBPACK_IMPORTED_MODULE_1__.a
      )({
        style: 'SUPERSCRIPT',
        children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          'x',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'sup',
            null,
            '2'
          )
        ),
      });
    },
  ],
  [[461, 1, 2]],
]);
//# sourceMappingURL=main.72f18617593e4742c1d9.bundle.js.map
