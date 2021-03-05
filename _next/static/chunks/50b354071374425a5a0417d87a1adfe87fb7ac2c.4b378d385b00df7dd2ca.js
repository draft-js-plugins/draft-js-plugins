(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    YQ7a: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return U;
      });
      var o = n('Svze'),
        r = n('ERkP'),
        i = n.n(r),
        a = n('7O4Y'),
        s = n('aWzz'),
        c = n.n(s),
        u = n('zpdM'),
        p = n('GAvS');
      var l = function (e, t) {
          for (
            var n = -1, o = null == e ? 0 : e.length, r = Array(o);
            ++n < o;

          )
            r[n] = t(e[n], n, e);
          return r;
        },
        f = n('SEb4'),
        d = n('DE/k'),
        g = n('gfy7');
      var m = function (e) {
          return (
            'symbol' == typeof e ||
            (Object(g.a)(e) && '[object Symbol]' == Object(d.a)(e))
          );
        },
        v = p.a ? p.a.prototype : void 0,
        h = v ? v.toString : void 0;
      var y = function e(t) {
        if ('string' == typeof t) return t;
        if (Object(f.a)(t)) return l(t, e) + '';
        if (m(t)) return h ? h.call(t) : '';
        var n = t + '';
        return '0' == n && 1 / t == -Infinity ? '-0' : n;
      };
      var E = function (e) {
          return null == e ? '' : y(e);
        },
        S = /[\\^$.*+?()[\]{}|]/g,
        O = RegExp(S.source);
      var b = function (e) {
        return (e = E(e)) && O.test(e) ? e.replace(S, '\\$&') : e;
      };
      function C() {
        return (C =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function k(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = {},
          i = Object.keys(e);
        for (o = 0; o < i.length; o++)
          (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      function w(e) {
        var t = e.mention,
          n = e.children,
          o = e.className;
        return i.a.createElement(
          'a',
          {
            href: t.link,
            className: o,
            spellCheck: !1,
            'data-testid': 'mentionLink',
          },
          n
        );
      }
      function A(e) {
        var t = e.children,
          n = e.className;
        return i.a.createElement(
          'span',
          { className: n, spellCheck: !1, 'data-testid': 'mentionText' },
          t
        );
      }
      function I(e) {
        var t = e.entityKey,
          n = e.theme,
          o = void 0 === n ? {} : n,
          r = e.mentionComponent,
          s = e.children,
          c = e.decoratedText,
          u = e.className,
          p = e.contentState,
          l = Object(a.a)(o.mention, u),
          f = p.getEntity(t).getData().mention,
          d = r || (f.link ? w : A);
        return i.a.createElement(
          d,
          {
            entityKey: t,
            mention: f,
            theme: o,
            className: l,
            decoratedText: c,
          },
          s
        );
      }
      var M = function (e) {
        var t = Object(r.useRef)(!1);
        Object(r.useEffect)(function () {
          t.current = !1;
        });
        var n = e.theme,
          o = void 0 === n ? {} : n,
          a = e.mention,
          s = e.searchValue,
          c = e.isFocused,
          u = e.id,
          p = c ? o.mentionSuggestionsEntryFocused : o.mentionSuggestionsEntry,
          l = e.entryComponent;
        return i.a.createElement(l, {
          className: p,
          onMouseDown: function (e) {
            e.preventDefault(), (t.current = !0);
          },
          onMouseUp: function () {
            t.current && (e.onMentionSelect(e.mention), (t.current = !1));
          },
          onMouseEnter: function () {
            e.onMentionFocus(e.index);
          },
          role: 'option',
          id: u,
          'aria-selected': c ? 'true' : void 0,
          theme: o,
          mention: a,
          isFocused: c,
          searchValue: s,
        });
      };
      M.propTypes = {
        entryComponent: c.a.any.isRequired,
        searchValue: c.a.string,
        onMentionSelect: c.a.func,
      };
      var D = function (e, t, n) {
        var o = t.getAnchorKey(),
          r = t.getAnchorOffset();
        return (function (e, t, n) {
          var o = e.substr(0, t),
            r = n
              .map(function (e, t) {
                return {
                  begin: 0 === e.length ? 0 : o.lastIndexOf(e),
                  index: t,
                };
              })
              .reduce(function (e, t) {
                return e.begin >= t.begin ? e : t;
              }),
            i = r.begin,
            a = r.index,
            s = 0 === n[a].length ? o : o.slice(i + n[a].length);
          return { begin: i, end: o.length, matchingString: s };
        })(e.getCurrentContent().getBlockForKey(o).getText(), r, n);
      };
      function T(e) {
        return '@' === e ? 'mention' : e + 'mention';
      }
      function P(e) {
        var t = e.mention,
          n = e.theme,
          o = void 0 === n ? {} : n;
        return t.avatar
          ? i.a.createElement('img', {
              src: t.avatar,
              className: o.mentionSuggestionsEntryAvatar,
              role: 'presentation',
            })
          : null;
      }
      function K(e) {
        var t = e.mention,
          n = e.theme;
        e.isFocused, e.searchValue;
        var o = k(e, ['mention', 'theme', 'isFocused', 'searchValue']);
        return i.a.createElement(
          'div',
          o,
          i.a.createElement(P, { mention: t, theme: n }),
          i.a.createElement(
            'span',
            { className: null == n ? void 0 : n.mentionSuggestionsEntryText },
            t.name
          )
        );
      }
      var R = (function (e) {
        var t, n;
        function o(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).state = { focusedOptionIndex: 0 }),
            (n.key = Object(u.genKey)()),
            (n.popover = void 0),
            (n.activeOffsetKey = void 0),
            (n.lastSearchValue = void 0),
            (n.lastActiveTrigger = ''),
            (n.lastSelectionIsInsideWord = void 0),
            (n.onEditorStateChange = function (e) {
              var t = n.props.store.getAllSearches();
              if (0 === t.size) return e;
              var o = function () {
                  return (
                    n.props.store.resetEscapedSearch(), n.closeDropdown(), e
                  );
                },
                r = e.getSelection(),
                i = r.getAnchorKey(),
                a = r.getAnchorOffset();
              if (!r.isCollapsed() || !r.getHasFocus()) return o();
              var s = t
                .map(function (e) {
                  return (function (e) {
                    var t = e.split('-'),
                      n = t[0],
                      o = t[1],
                      r = t[2];
                    return {
                      blockKey: n,
                      decoratorKey: parseInt(o, 10),
                      leafKey: parseInt(r, 10),
                    };
                  })(e);
                })
                .filter(function (e) {
                  return e.blockKey === i;
                })
                .map(function (t) {
                  return e.getBlockTree(t.blockKey).getIn([t.decoratorKey]);
                });
              if (
                s.every(function (e) {
                  return void 0 === e;
                })
              )
                return o();
              var c = e.getCurrentContent().getBlockForKey(i).getText(),
                u = s
                  .filter(function (e) {
                    return void 0 !== e;
                  })
                  .map(function (e) {
                    var t = e.start,
                      o = e.end;
                    return n.props.mentionTriggers
                      .map(function (e) {
                        return (0 === t &&
                          c.substr(0, e.length) === e &&
                          a <= o) ||
                          (n.props.mentionTriggers.length > 1 &&
                            a >= t + e.length &&
                            c.substr(t + 1, e.length) === e &&
                            a <= o) ||
                          (1 === n.props.mentionTriggers.length &&
                            a >= t + e.length &&
                            a <= o)
                          ? e
                          : void 0;
                      })
                      .filter(function (e) {
                        return void 0 !== e;
                      })[0];
                  })
                  .filter(function (e) {
                    return void 0 !== e;
                  });
              if (u.isEmpty()) return o();
              var p = u.entrySeq().first(),
                l = p[0],
                f = p[1],
                d = n.activeOffsetKey;
              return (
                (n.activeOffsetKey = l),
                n.onSearchChange(e, r, n.activeOffsetKey, d, f),
                n.props.store.isEscaped(n.activeOffsetKey || '') ||
                  n.props.store.resetEscapedSearch(),
                n.props.open ||
                  n.props.store.isEscaped(n.activeOffsetKey || '') ||
                  n.openDropdown(),
                d !== n.activeOffsetKey &&
                  n.setState({ focusedOptionIndex: 0 }),
                e
              );
            }),
            (n.onSearchChange = function (e, t, o, r, i) {
              var a = D(e, t, [i]).matchingString;
              (n.lastActiveTrigger === i &&
                n.lastSearchValue === a &&
                o === r) ||
                ((n.lastActiveTrigger = i),
                (n.lastSearchValue = a),
                n.props.onSearchChange({ trigger: i, value: a }));
            }),
            (n.onDownArrow = function (e) {
              e.preventDefault();
              var t = n.state.focusedOptionIndex + 1;
              n.onMentionFocus(t >= n.props.suggestions.length ? 0 : t);
            }),
            (n.onTab = function (e) {
              e.preventDefault(), n.commitSelection();
            }),
            (n.onUpArrow = function (e) {
              if ((e.preventDefault(), n.props.suggestions.length > 0)) {
                var t = n.state.focusedOptionIndex - 1;
                n.onMentionFocus(t < 0 ? n.props.suggestions.length - 1 : t);
              }
            }),
            (n.onEscape = function (e) {
              e.preventDefault(),
                n.props.store.escapeSearch(n.activeOffsetKey || ''),
                n.closeDropdown(),
                n.props.store.setEditorState(n.props.store.getEditorState());
            }),
            (n.onMentionSelect = function (e) {
              if (e) {
                n.props.onAddMention && n.props.onAddMention(e),
                  n.closeDropdown();
                var t = (function (e, t, n, o, r) {
                  var i = e
                      .getCurrentContent()
                      .createEntity(T(o), r, { mention: t })
                      .getLastCreatedEntityKey(),
                    a = e.getSelection(),
                    s = D(e, a, [o]),
                    c = s.begin,
                    p = s.end,
                    l = a.merge({ anchorOffset: c, focusOffset: p }),
                    f = u.Modifier.replaceText(
                      e.getCurrentContent(),
                      l,
                      '' + n + t.name,
                      void 0,
                      i
                    ),
                    d = l.getAnchorKey();
                  e.getCurrentContent().getBlockForKey(d).getLength() === p &&
                    (f = u.Modifier.insertText(f, f.getSelectionAfter(), ' '));
                  var g = u.EditorState.push(e, f, 'insert-fragment');
                  return u.EditorState.forceSelection(g, f.getSelectionAfter());
                })(
                  n.props.store.getEditorState(),
                  e,
                  n.props.mentionPrefix,
                  n.lastActiveTrigger || '',
                  n.props.entityMutability
                );
                n.props.store.setEditorState(t);
              }
            }),
            (n.onMentionFocus = function (e) {
              var t = 'mention-option-' + n.key + '-' + e;
              (n.props.ariaProps.ariaActiveDescendantID = t),
                n.setState({ focusedOptionIndex: e }),
                n.props.store.setEditorState(n.props.store.getEditorState());
            }),
            (n.commitSelection = function () {
              return n.props.store.getIsOpened()
                ? (n.onMentionSelect(
                    n.props.suggestions[n.state.focusedOptionIndex]
                  ),
                  'handled')
                : 'not-handled';
            }),
            (n.openDropdown = function () {
              (n.props.callbacks.handleReturn = n.commitSelection),
                (n.props.callbacks.keyBindingFn = function (e) {
                  40 === e.keyCode && n.onDownArrow(e),
                    38 === e.keyCode && n.onUpArrow(e),
                    27 === e.keyCode && n.onEscape(e),
                    9 === e.keyCode && n.onTab(e);
                });
              var e =
                'mention-option-' + n.key + '-' + n.state.focusedOptionIndex;
              (n.props.ariaProps.ariaActiveDescendantID = e),
                (n.props.ariaProps.ariaOwneeID = 'mentions-list-' + n.key),
                (n.props.ariaProps.ariaHasPopup = 'true'),
                (n.props.ariaProps.ariaExpanded = !0),
                n.props.onOpenChange(!0);
            }),
            (n.closeDropdown = function () {
              (n.props.callbacks.handleReturn = void 0),
                (n.props.callbacks.keyBindingFn = void 0),
                (n.props.ariaProps.ariaHasPopup = 'false'),
                (n.props.ariaProps.ariaExpanded = !1),
                (n.props.ariaProps.ariaActiveDescendantID = void 0),
                (n.props.ariaProps.ariaOwneeID = void 0),
                n.props.onOpenChange(!1);
            }),
            (n.props.callbacks.onChange = n.onEditorStateChange),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          x(t, n);
        var r = o.prototype;
        return (
          (r.componentDidUpdate = function () {
            if (this.popover) {
              var e = this.props.suggestions.length;
              if (
                (e > 0 &&
                  this.state.focusedOptionIndex >= e &&
                  this.setState({ focusedOptionIndex: e - 1 }),
                !this.props.store.getAllSearches().has(this.activeOffsetKey))
              )
                return;
              for (
                var t = this.props.store.getPortalClientRect(
                    this.activeOffsetKey
                  ),
                  n = this.props.positionSuggestions({
                    decoratorRect: t,
                    props: this.props,
                    popover: this.popover,
                  }),
                  o = 0,
                  r = Object.entries(n);
                o < r.length;
                o++
              ) {
                var i = r[o],
                  a = i[0],
                  s = i[1];
                this.popover.style[a] = s;
              }
            }
          }),
          (r.componentWillUnmount = function () {
            this.props.callbacks.onChange = void 0;
          }),
          (r.render = function () {
            var e = this;
            if (!this.props.open) return null;
            var t = this.props,
              n = t.entryComponent,
              o = t.popoverComponent,
              r = void 0 === o ? i.a.createElement('div', null) : o;
            t.onOpenChange,
              t.onAddMention,
              t.onSearchChange,
              t.suggestions,
              t.ariaProps,
              t.callbacks;
            var a = t.theme,
              s = void 0 === a ? {} : a;
            t.store,
              t.entityMutability,
              t.positionSuggestions,
              t.mentionTriggers,
              t.mentionPrefix;
            var c = k(t, [
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
              'mentionTriggers',
              'mentionPrefix',
            ]);
            return i.a.cloneElement(
              r,
              C({}, c, {
                className: s.mentionSuggestions,
                role: 'listbox',
                id: 'mentions-list-' + this.key,
                ref: function (t) {
                  e.popover = t;
                },
              }),
              this.props.suggestions.map(function (t, o) {
                return i.a.createElement(M, {
                  key: null != t.id ? t.id : t.name,
                  onMentionSelect: e.onMentionSelect,
                  onMentionFocus: e.onMentionFocus,
                  isFocused: e.state.focusedOptionIndex === o,
                  mention: t,
                  index: o,
                  id: 'mention-option-' + e.key + '-' + o,
                  theme: s,
                  searchValue: e.lastSearchValue,
                  entryComponent: n || K,
                });
              })
            );
          }),
          o
        );
      })(r.Component);
      R.propTypes = {
        open: c.a.bool.isRequired,
        onOpenChange: c.a.func.isRequired,
        entityMutability: c.a.oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
        entryComponent: c.a.func,
        onAddMention: c.a.func,
        suggestions: c.a.array.isRequired,
      };
      var F = 'undefined' !== typeof window ? r.useLayoutEffect : r.useEffect;
      function j(e) {
        var t = Object(r.useRef)(),
          n = function (e) {
            e.store.updatePortalClientRect(e.offsetKey, function () {
              return t.current.getBoundingClientRect();
            });
          };
        return (
          F(function () {
            return (
              e.store.register(e.offsetKey),
              e.store.setIsOpened(!0),
              n(e),
              e.store.setEditorState(e.store.getEditorState()),
              function () {
                e.store.unregister(e.offsetKey), e.store.setIsOpened(!1);
              }
            );
          }, []),
          Object(r.useEffect)(function () {
            n(e);
          }),
          i.a.createElement(
            'span',
            {
              ref: function (e) {
                t.current = e;
              },
            },
            e.children
          )
        );
      }
      var B = function e(t) {
        return t
          ? 'static' !== window.getComputedStyle(t).getPropertyValue('position')
            ? t
            : e(t.parentElement)
          : null;
      };
      function N(e) {
        var t,
          n = e.decoratorRect,
          o = e.popover,
          r = e.props,
          i = B(o.parentElement);
        if (i) {
          var a = i.getBoundingClientRect();
          t = {
            scrollLeft: i.scrollLeft,
            scrollTop: i.scrollTop,
            left: n.left - a.left,
            top: n.bottom - a.top,
          };
        } else
          t = {
            scrollTop: window.pageYOffset || document.documentElement.scrollTop,
            scrollLeft:
              window.pageXOffset || document.documentElement.scrollLeft,
            top: n.bottom,
            left: n.left,
          };
        var s,
          c,
          u = t.left + t.scrollLeft,
          p = t.top + t.scrollTop;
        return (
          r.open &&
            (r.suggestions.length > 0
              ? ((s = 'scale(1)'), (c = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
              : ((s = 'scale(0)'), (c = 'all 0.35s cubic-bezier(.3,1,.2,1)'))),
          {
            left: u + 'px',
            top: p + 'px',
            transform: s,
            transformOrigin: '1em 0%',
            transition: c,
          }
        );
      }
      var L = {
          mention: 'm6zwb4v',
          mentionSuggestions: 'mnw6qvm',
          mentionSuggestionsEntry: 'm1ymsnxd',
          mentionSuggestionsEntryFocused: 'm126ak5t',
          mentionSuggestionsEntryText: 'mtiwdxc',
          mentionSuggestionsEntryAvatar: 'myz2dw1',
        },
        V = /\s/;
      function z(e, t) {
        return 0 === t || V.test(e[t - 1]);
      }
      var _ = function (e, t, n) {
          var o =
              '[' +
              e
                .map(function (e) {
                  return b(e);
                })
                .join('') +
              ']',
            r = t
              ? new RegExp(o + '(' + n + '|\\s)*', 'g')
              : new RegExp('(\\s|^)' + o + n + '*', 'g');
          return function (e, n) {
            !(function (e, t, n, o) {
              var r = t.getText();
              t.findEntityRanges(
                function (e) {
                  return !e.getEntity();
                },
                function (t, i) {
                  for (
                    var a, s, c = r.slice(t, i), u = e.lastIndex;
                    null !== (a = e.exec(c)) && e.lastIndex !== u;

                  ) {
                    u = e.lastIndex;
                    var p = (s = t + a.index) + a[0].length;
                    !n && V.test(c[s]) && (s += 1),
                      ((n && z(c, a.index)) || !n) && o(s, p);
                  }
                }
              );
            })(r, e, t, n);
          };
        },
        U = function (e, t, n) {
          var o = e.toLowerCase(),
            r = (n && !Array.isArray(t) ? t[n] : t).filter(function (e) {
              return !o || e.name.toLowerCase().indexOf(o) > -1;
            }),
            i = r.length < 5 ? r.length : 5;
          return r.slice(0, i);
        };
      t.a = function (e) {
        void 0 === e && (e = {});
        var t,
          n,
          r = {
            keyBindingFn: void 0,
            handleKeyCommand: void 0,
            handleReturn: void 0,
            onChange: void 0,
          },
          a = {
            ariaHasPopup: 'false',
            ariaExpanded: !1,
            ariaOwneeID: void 0,
            ariaActiveDescendantID: void 0,
          },
          s = Object(o.Map)(),
          c = Object(o.Map)(),
          u = !1,
          p = {
            getEditorState: void 0,
            setEditorState: void 0,
            getPortalClientRect: function (e) {
              return c.get(e)();
            },
            getAllSearches: function () {
              return s;
            },
            isEscaped: function (e) {
              return t === e;
            },
            escapeSearch: function (e) {
              t = e;
            },
            resetEscapedSearch: function () {
              t = void 0;
            },
            register: function (e) {
              s = s.set(e, e);
            },
            updatePortalClientRect: function (e, t) {
              c = c.set(e, t);
            },
            unregister: function (e) {
              (s = s.delete(e)), (c = c.delete(e));
            },
            getIsOpened: function () {
              return u;
            },
            setIsOpened: function (e) {
              u = e;
            },
          },
          l = e,
          f = l.mentionPrefix,
          d = void 0 === f ? '' : f,
          g = l.theme,
          m = void 0 === g ? L : g,
          v = l.positionSuggestions,
          h = void 0 === v ? N : v,
          y = l.mentionComponent,
          E = l.mentionSuggestionsComponent,
          S = void 0 === E ? R : E,
          O = l.entityMutability,
          b = void 0 === O ? 'SEGMENTED' : O,
          x = l.mentionTrigger,
          k = void 0 === x ? '@' : x,
          w = l.mentionRegExp,
          A =
            void 0 === w
              ? '[\\w-\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u0148\u014a-\u017f\u0410-\u044f\u3040-\u309f\u30a0-\u30ff\u3130-\u318f\uac00-\ud7a3\u4e00-\u9eff\u0600-\u06ff\xc0-\u1ef9]'
              : w,
          M = l.supportWhitespace,
          D = 'string' === typeof k ? [k] : k,
          P = {
            ariaProps: a,
            callbacks: r,
            theme: m,
            store: p,
            entityMutability: b,
            positionSuggestions: h,
            mentionTriggers: D,
            mentionPrefix: d,
          };
        return {
          MentionSuggestions: function (e) {
            return i.a.createElement(S, C({}, e, P));
          },
          decorators: [
            {
              strategy:
                ((n = D),
                function (e, t, o) {
                  e.findEntityRanges(function (e) {
                    var t = e.getEntity();
                    return (
                      null !== t &&
                      n.some(function (e) {
                        return o.getEntity(t).getType() === T(e);
                      })
                    );
                  }, t);
                }),
              component: function (e) {
                return i.a.createElement(
                  I,
                  C({}, e, { theme: m, mentionComponent: y })
                );
              },
            },
            {
              strategy: _(D, void 0 !== M && M, A),
              component: function (e) {
                return i.a.createElement(j, C({}, e, { store: p }));
              },
            },
          ],
          getAccessibilityProps: function () {
            return {
              role: 'combobox',
              ariaAutoComplete: 'list',
              ariaHasPopup: a.ariaHasPopup,
              ariaExpanded: a.ariaExpanded,
              ariaActiveDescendantID: a.ariaActiveDescendantID,
              ariaOwneeID: a.ariaOwneeID,
            };
          },
          initialize: function (e) {
            var t = e.getEditorState,
              n = e.setEditorState;
            (p.getEditorState = t), (p.setEditorState = n);
          },
          keyBindingFn: function (e) {
            return r.keyBindingFn && r.keyBindingFn(e);
          },
          handleReturn: function (e) {
            return r.handleReturn && r.handleReturn(e);
          },
          onChange: function (e) {
            return r.onChange ? r.onChange(e) : e;
          },
        };
      };
    },
  },
]);
