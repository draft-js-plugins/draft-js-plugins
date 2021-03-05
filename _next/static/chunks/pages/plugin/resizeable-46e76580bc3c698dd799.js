_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [29],
  {
    Dmjd: function (e, t, n) {
      'use strict';
      var o = n('zpdM'),
        r = n('Svze'),
        i = n('b//S'),
        a = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        l = n('7O4Y');
      function u(e) {
        var t = (function (e, t, n) {
            var r = t.getStartKey(),
              i = [];
            return (
              e.getBlockMap().forEach(function (e, t) {
                i.push(e), t === r && i.push(n);
              }),
              e.merge({
                blockMap: o.BlockMapBuilder.createFromArray(i),
                selectionBefore: t,
                selectionAfter: t.merge({
                  anchorKey: n.getKey(),
                  anchorOffset: n.getLength(),
                  focusKey: n.getKey(),
                  focusOffset: n.getLength(),
                  isBackward: !1,
                }),
              })
            );
          })(
            e.getCurrentContent(),
            e.getSelection(),
            new o.ContentBlock({
              key: Object(o.genKey)(),
              type: 'unstyled',
              text: '',
              characterList: Object(r.List)(),
            })
          ),
          n = t.merge({
            selectionAfter: t.getSelectionAfter().set('hasFocus', !0),
          });
        return o.EditorState.push(e, n, 'insert-fragment');
      }
      var d = function (e, t, n, r) {
        var i = e(),
          c = i.getSelection().getAnchorKey(),
          s =
            'up' === n
              ? i.getCurrentContent().getBlockBefore(c)
              : i.getCurrentContent().getBlockAfter(c);
        if ((!s || s.get('key') !== c) && s) {
          var l = a.a.encode(s.getKey(), 0, 0),
            u = document.querySelectorAll('[data-offset-key="' + l + '"]')[0],
            d = window.getSelection(),
            f = document.createRange();
          f.setStart(u, 0), f.setEnd(u, 0), d.removeAllRanges(), d.addRange(f);
          var g = 'up' === n ? s.getLength() : 0;
          r.preventDefault(),
            t(
              o.EditorState.forceSelection(
                i,
                new o.SelectionState({
                  anchorKey: s.getKey(),
                  anchorOffset: g,
                  focusKey: s.getKey(),
                  focusOffset: g,
                  isBackward: !1,
                })
              )
            );
        }
      };
      function f() {
        return (f =
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
      var g = function (e) {
        var t = e.theme,
          n = e.blockKeyStore;
        return function (e) {
          var o = s.a.forwardRef(function (o, r) {
            Object(c.useEffect)(function () {
              return (
                n.add(o.block.getKey()),
                function () {
                  n.remove(o.block.getKey());
                }
              );
            }, []);
            var i = o.blockProps,
              a = o.className,
              u = i.isFocused
                ? Object(l.a)(a, t.focused)
                : Object(l.a)(a, t.unfocused);
            return s.a.createElement(
              e,
              f({}, o, {
                ref: r,
                onClick: function (e) {
                  e.preventDefault(),
                    o.blockProps.isFocused || o.blockProps.setFocusToBlock();
                },
                className: u,
              })
            );
          });
          return (
            (o.displayName =
              'BlockFocus(' +
              (function (e) {
                var t = e.WrappedComponent || e;
                return t.displayName || t.name || 'Component';
              })(e) +
              ')'),
            (o.WrappedComponent = e.WrappedComponent || e),
            o
          );
        };
      };
      var p = function (e, t, n) {
          return e
            .getBlockMap()
            .keySeq()
            .skipUntil(function (e) {
              return e === t;
            })
            .takeUntil(function (e) {
              return e === n;
            })
            .concat([n]);
        },
        y = function (e, t) {
          return (function (e) {
            var t = e.getSelection(),
              n = e.getCurrentContent();
            return p(n, t.getStartKey(), t.getEndKey());
          })(e).includes(t);
        };
      var h = { unfocused: 'uz5k6rs', focused: 'f1vn2c6d' },
        v = function (e, t) {
          var n = e.getSelection();
          if (n.getAnchorKey() !== n.getFocusKey()) return !1;
          var o = e.getCurrentContent().getBlockForKey(n.getAnchorKey());
          return t.includes(o.getKey());
        },
        m = [
          'backspace',
          'backspace-word',
          'backspace-to-start-of-line',
          'delete',
          'delete-word',
          'delete-to-end-of-block',
        ];
      t.a = function (e) {
        void 0 === e && (e = {});
        var t,
          n,
          i = (function () {
            var e = Object(r.List)();
            return {
              add: function (t) {
                return (e = e.push(t));
              },
              remove: function (t) {
                return (e = e.filter(function (e) {
                  return e !== t;
                }));
              },
              includes: function (t) {
                return e.includes(t);
              },
              getAll: function () {
                return e;
              },
            };
          })(),
          c = e.theme ? e.theme : h;
        return {
          handleReturn: function (e, t, n) {
            var o = n.setEditorState;
            return v(t, i) ? (o(u(t)), 'handled') : 'not-handled';
          },
          handleKeyCommand: function (e, t, n, r) {
            var a = r.setEditorState;
            if (m.includes(e) && v(t, i)) {
              var c = t.getSelection().getStartKey(),
                s = (function (e, t) {
                  var n = e.getCurrentContent(),
                    r = n.getKeyBefore(t),
                    i = n.getBlockForKey(r);
                  if (void 0 === i) {
                    var a = new o.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 1,
                    });
                    (n = o.Modifier.removeRange(n, a, 'backward')),
                      (n = o.Modifier.setBlockType(n, a, 'unstyled'));
                    var c = o.EditorState.push(e, n, 'remove-range'),
                      s = new o.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: t,
                        focusOffset: 0,
                      });
                    return o.EditorState.forceSelection(c, s);
                  }
                  var l = new o.SelectionState({
                    anchorKey: r,
                    anchorOffset: i.getLength(),
                    focusKey: t,
                    focusOffset: 1,
                  });
                  n = o.Modifier.removeRange(n, l, 'backward');
                  var u = o.EditorState.push(e, n, 'remove-range'),
                    d = new o.SelectionState({
                      anchorKey: r,
                      anchorOffset: i.getLength(),
                      focusKey: r,
                      focusOffset: i.getLength(),
                    });
                  return o.EditorState.forceSelection(u, d);
                })(t, c);
              if (s !== t) return a(s), 'handled';
            }
            return 'not-handled';
          },
          onChange: function (e) {
            var r = e.getCurrentContent();
            if (!r.equals(n)) return (n = r), e;
            n = r;
            var a = e.getSelection();
            if (t && a.equals(t)) return (t = e.getSelection()), e;
            var c = i.getAll();
            if (
              t &&
              p(r, t.getStartKey(), t.getEndKey()).some(function (e) {
                return c.includes(e);
              })
            )
              return (t = a), o.EditorState.forceSelection(e, e.getSelection());
            return p(r, a.getStartKey(), a.getEndKey()).some(function (e) {
              return c.includes(e);
            })
              ? ((t = a), o.EditorState.forceSelection(e, e.getSelection()))
              : e;
          },
          keyBindingFn: function (e, t) {
            var n = t.getEditorState,
              o = t.setEditorState,
              r = n();
            if (
              v(r, i) &&
              (37 === e.keyCode && d(n, o, 'up', e),
              39 === e.keyCode && d(n, o, 'down', e),
              38 === e.keyCode && d(n, o, 'up', e),
              40 === e.keyCode)
            )
              d(n, o, 'down', e);
            else if (!e.shiftKey) {
              if (37 === e.keyCode) {
                var a = r.getSelection(),
                  c = a.getAnchorKey(),
                  s = r.getCurrentContent().getBlockBefore(c);
                s &&
                  0 === a.getAnchorOffset() &&
                  i.includes(s.getKey()) &&
                  d(n, o, 'up', e);
              }
              if (39 === e.keyCode) {
                var l = r.getSelection(),
                  u = l.getFocusKey(),
                  f = r.getCurrentContent().getBlockForKey(u),
                  g = r.getCurrentContent().getBlockAfter(u),
                  p =
                    'atomic' !== f.getType() &&
                    f.getLength() === l.getFocusOffset();
                g && p && i.includes(g.getKey()) && d(n, o, 'down', e);
              }
              if (38 === e.keyCode) {
                var y = r.getSelection().getAnchorKey(),
                  h = r.getCurrentContent().getBlockBefore(y);
                h && i.includes(h.getKey()) && d(n, o, 'up', e);
              }
              if (40 === e.keyCode) {
                var m = r.getSelection().getAnchorKey(),
                  b = r.getCurrentContent().getBlockAfter(m);
                b && i.includes(b.getKey()) && d(n, o, 'down', e);
              }
            }
          },
          blockRendererFn: function (e, t) {
            var n = t.getEditorState,
              r = t.setEditorState;
            if ('atomic' === e.getType()) {
              var i = n();
              return {
                props: {
                  isFocused: y(i, e.getKey()),
                  isCollapsedSelection: i.getSelection().isCollapsed(),
                  setFocusToBlock: function () {
                    !(function (e, t, n) {
                      var r = e(),
                        i = a.a.encode(n.getKey(), 0, 0),
                        c = document.querySelectorAll(
                          '[data-offset-key="' + i + '"]'
                        )[0],
                        s = window.getSelection(),
                        l = document.createRange();
                      l.setStart(c, 0),
                        l.setEnd(c, 0),
                        s.removeAllRanges(),
                        s.addRange(l),
                        t(
                          o.EditorState.forceSelection(
                            r,
                            new o.SelectionState({
                              anchorKey: n.getKey(),
                              anchorOffset: 0,
                              focusKey: n.getKey(),
                              focusOffset: 0,
                              isBackward: !1,
                            })
                          )
                        );
                    })(n, r, e);
                  },
                },
              };
            }
          },
          decorator: g({ theme: c, blockKeyStore: i }),
        };
      };
    },
    EKUP: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/resizeable',
        function () {
          return n('VSra');
        },
      ]);
    },
    Kqn8: function (e, t, n) {
      'use strict';
      var o = n('zpdM'),
        r = n('ERkP'),
        i = n.n(r),
        a = n('7nmT'),
        c = n.n(a);
      function s() {
        return (s =
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var d = function (e, t) {
          return Math.ceil(e / t) * t;
        },
        f = function (e) {
          var t = e.config,
            n = e.store;
          return function (e) {
            var o, a;
            return (
              (a = o = (function (t) {
                var o, r;
                function a() {
                  for (
                    var e, o = arguments.length, r = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    r[i] = arguments[i];
                  return (
                    ((e = t.call.apply(t, [this].concat(r)) || this).state = {
                      hoverPosition: {},
                      clicked: !1,
                    }),
                    (e.wrapper = void 0),
                    (e.setEntityData = function (t) {
                      e.props.blockProps.setResizeData(t);
                    }),
                    (e.mouseLeave = function () {
                      e.state.clicked || e.setState({ hoverPosition: {} });
                    }),
                    (e.mouseMove = function (t) {
                      var n = e.props,
                        o = n.vertical,
                        r = n.horizontal,
                        i = n.isResizable,
                        a = e.state.hoverPosition,
                        s = c.a.findDOMNode(u(e)).getBoundingClientRect(),
                        l = t.clientX - s.left,
                        d = t.clientY - s.top,
                        f = !(!o || 'auto' === o) && d < 6,
                        g = !!r && l < 6,
                        p = !!r && l >= s.width - 6,
                        y =
                          !(!o || 'auto' === o) &&
                          d >= s.height - 6 &&
                          d < s.height,
                        h = {
                          isTop: f,
                          isLeft: g,
                          isRight: p,
                          isBottom: y,
                          canResize: (f || g || p || y) && i,
                        };
                      Object.keys(h).filter(function (e) {
                        return a[e] !== h[e];
                      }).length && e.setState({ hoverPosition: h });
                    }),
                    (e.mouseDown = function (t) {
                      if (e.state.hoverPosition.canResize) {
                        t.preventDefault();
                        var o = e.props,
                          r = o.resizeSteps,
                          i = o.vertical,
                          a = o.horizontal,
                          s = e.state.hoverPosition,
                          l = s.isTop,
                          f = s.isLeft,
                          g = s.isRight,
                          p = s.isBottom,
                          y = c.a.findDOMNode(u(e)),
                          h = t.clientX,
                          v = t.clientY,
                          m = parseInt(
                            document.defaultView.getComputedStyle(y).width,
                            10
                          ),
                          b = parseInt(
                            document.defaultView.getComputedStyle(y).height,
                            10
                          ),
                          S = function (t) {
                            var o = m + (f ? h - t.clientX : t.clientX - h),
                              c = b + t.clientY - v,
                              s = n.getEditorRef(),
                              u =
                                s.refs && s.refs.editor
                                  ? s.refs.editor
                                  : s.editor;
                            (o = Math.min(u.clientWidth, o)),
                              (c = Math.min(u.clientHeight, c));
                            var y = (100 / u.clientWidth) * o,
                              S = (100 / u.clientHeight) * c,
                              k = {};
                            (f || g) && 'relative' === a
                              ? (k.width = r ? d(y, r) : y)
                              : (f || g) &&
                                'absolute' === a &&
                                (k.width = r ? d(o, r) : o),
                              (l || p) && 'relative' === i
                                ? (k.height = r ? d(S, r) : S)
                                : (l || p) &&
                                  'absolute' === i &&
                                  (k.height = r ? d(c, r) : c),
                              t.preventDefault(),
                              e.setState(k);
                          };
                        document.addEventListener('mousemove', S, !1),
                          document.addEventListener(
                            'mouseup',
                            function t() {
                              document.removeEventListener('mousemove', S, !1),
                                document.removeEventListener('mouseup', t, !1);
                              var n = e.state,
                                o = n.width,
                                r = n.height;
                              e.setState({ clicked: !1 }),
                                e.setEntityData({ width: o, height: r });
                            },
                            !1
                          ),
                          e.setState({ clicked: !0 });
                      }
                    }),
                    e
                  );
                }
                return (
                  (r = t),
                  ((o = a).prototype = Object.create(r.prototype)),
                  (o.prototype.constructor = o),
                  l(o, r),
                  (a.prototype.render = function () {
                    var t = this,
                      o = this.props,
                      r = o.blockProps,
                      a = o.vertical,
                      c = o.horizontal,
                      l = o.initialWidth,
                      u = o.initialHeight,
                      d = o.style,
                      f = o.isResizable;
                    o.resizeSteps;
                    var g = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          o,
                          r = {},
                          i = Object.keys(e);
                        for (o = 0; o < i.length; o++)
                          (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                      })(o, [
                        'blockProps',
                        'vertical',
                        'horizontal',
                        'initialWidth',
                        'initialHeight',
                        'style',
                        'isResizable',
                        'resizeSteps',
                      ]),
                      p = this.state,
                      y = p.width,
                      h = p.height,
                      v = p.hoverPosition,
                      m = v.isTop,
                      b = v.isLeft,
                      S = v.isRight,
                      k = v.isBottom,
                      E = s({ position: 'relative' }, d);
                    if ('auto' === c) E.width = 'auto';
                    else if ('relative' === c) {
                      var w = y || r.resizeData.width;
                      E.width = !w && l ? l : (w || 40) + '%';
                    } else if ('absolute' === c) {
                      var C = y || r.resizeData.width;
                      E.width = !C && l ? l : (C || 40) + 'px';
                    }
                    if ('auto' === a) E.height = 'auto';
                    else if ('relative' === a) {
                      var O = h || r.resizeData.height;
                      E.height = !O && u ? u : (O || 40) + '%';
                    } else if ('absolute' === a) {
                      var R = h || r.resizeData.height;
                      E.height = !R && u ? u : (R || 40) + '%';
                    }
                    E.cursor = f
                      ? (S && k) || (b && m)
                        ? 'nwse-resize'
                        : (S && m) || (k && b)
                        ? 'nesw-resize'
                        : S || b
                        ? 'ew-resize'
                        : k || m
                        ? 'ns-resize'
                        : 'default'
                      : 'default';
                    var j =
                      !n.getReadOnly || n.getReadOnly()
                        ? {}
                        : {
                            onMouseDown: this.mouseDown,
                            onMouseMove: this.mouseMove,
                            onMouseLeave: this.mouseLeave,
                          };
                    return i.a.createElement(
                      e,
                      s({}, g, j, {
                        blockProps: r,
                        ref: function (e) {
                          t.wrapper = e;
                        },
                        style: E,
                      })
                    );
                  }),
                  a
                );
              })(r.Component)),
              (o.displayName =
                'Resizable(' +
                (function (e) {
                  var t = e.WrappedComponent || e;
                  return t.displayName || t.name || 'Component';
                })(e) +
                ')'),
              (o.WrappedComponent = e.WrappedComponent || e),
              (o.defaultProps = s(
                {
                  horizontal: 'relative',
                  vertical: !1,
                  resizeSteps: 1,
                  isResizable: !0,
                },
                t
              )),
              a
            );
          };
        },
        g = function (e, t) {
          var n = t.getEditorState,
            r = t.setEditorState;
          return function (t) {
            var i = e.getEntityAt(0);
            if (i) {
              var a = n();
              a.getCurrentContent().mergeEntityData(i, s({}, t)),
                r(o.EditorState.forceSelection(a, a.getSelection()));
            }
          };
        };
      t.a = function (e) {
        var t = {
          getEditorRef: void 0,
          getReadOnly: void 0,
          getEditorState: void 0,
          setEditorState: void 0,
        };
        return {
          initialize: function (e) {
            var n = e.getEditorRef,
              o = e.getReadOnly,
              r = e.getEditorState,
              i = e.setEditorState;
            (t.getReadOnly = o),
              (t.getEditorRef = n),
              (t.getEditorState = r),
              (t.setEditorState = i);
          },
          decorator: f({ config: e, store: t }),
          blockRendererFn: function (e, t) {
            var n = t.getEditorState,
              o = t.setEditorState,
              r = e.getEntityAt(0),
              i = n().getCurrentContent();
            return {
              props: {
                resizeData: r ? i.getEntity(r).getData() : {},
                setResizeData: g(e, { getEditorState: n, setEditorState: o }),
              },
            };
          },
        };
      };
    },
    VSra: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return W;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        i = n('8K1b'),
        a = n('K/z8'),
        c = n('sRHE'),
        s = n('ERkP'),
        l = n.n(s),
        u = n('Diez'),
        d = n('9zpB'),
        f = n('YITQ'),
        g = n('aJa1'),
        p = n.n(g),
        y = n('lIm4'),
        h = n('pWxA'),
        v = n('zjfJ'),
        m = n('zpdM'),
        b = n('mwv6'),
        S = n('Kqn8'),
        k = n('Dmjd'),
        E = n('cxan'),
        w = n('HbGN'),
        C = l.a.createElement;
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                Object(v.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var j = l.a.forwardRef(function (e, t) {
          e.block,
            e.blockProps,
            e.customStyleMap,
            e.customStyleFn,
            e.decorator,
            e.forceSelection,
            e.offsetKey,
            e.selection,
            e.tree,
            e.contentState,
            e.blockStyleFn,
            e.preventScroll;
          var n = e.style,
            o = Object(w.a)(e, [
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
          return C(
            'div',
            Object(E.a)({ ref: t }, o, {
              style: R(
                { width: 200, height: 80, backgroundColor: '#9bc0c7' },
                n
              ),
            })
          );
        }),
        P = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.decorator ? e.decorator(j) : j;
          return {
            blockRendererFn: function (e, n) {
              var o = n.getEditorState;
              if (
                'atomic' === e.getType() &&
                'colorBlock' ===
                  o().getCurrentContent().getEntity(e.getEntityAt(0)).getType()
              )
                return { component: t, editable: !1 };
              return null;
            },
          };
        },
        K = n('fAD8'),
        B = n.n(K),
        z = l.a.createElement;
      function _(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var x = Object(k.a)(),
        D = Object(S.a)(),
        A = [x, D, P({ decorator: Object(b.a)(D.decorator, x.decorator) })],
        M = {
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
              text: 'More text here \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        F = (function (e) {
          Object(i.a)(n, e);
          var t = _(n);
          function n() {
            var e;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              Object(v.a)(Object(h.a)(e), 'state', {
                editorState: m.EditorState.createWithContent(
                  Object(m.convertFromRaw)(M)
                ),
              }),
              Object(v.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(v.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return z(
                    'div',
                    null,
                    z(
                      'div',
                      { className: B.a.editor, onClick: this.focus },
                      z(b.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: A,
                        ref: function (t) {
                          e.editor = t;
                        },
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        N = n('3h/d'),
        T = l.a.createElement;
      function L(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var W = (function (e) {
        Object(i.a)(n, e);
        var t = L(n);
        function n() {
          return Object(o.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return T(
                  N.a,
                  null,
                  T(
                    u.a,
                    null,
                    T(f.a, { level: 2 }, 'Resizeable'),
                    T(f.a, { level: 3 }, 'Prerequisite'),
                    T(
                      'p',
                      null,
                      'This plugin exposes a decorator for blocks. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Resizeable Example` further down contains an example plugin rendering a colored div. In addition this plugin only works in combination with the @draft-js-plugins/focus.'
                    ),
                    T(f.a, { level: 3 }, 'Usage'),
                    T(
                      'p',
                      null,
                      'Hover with the mouse on the right side of the block and drag it to resize. At which edge resize is possible is configurable.'
                    ),
                    T(f.a, { level: 3 }, 'Supported Environment'),
                    T(
                      'ul',
                      { className: p.a.list },
                      T('li', { className: p.a.listEntry }, 'Desktop: Yes'),
                      T('li', { className: p.a.listEntry }, 'Mobile: No'),
                      T('li', { className: p.a.listEntry }, 'Screen-reader: No')
                    )
                  ),
                  T(
                    d.a,
                    null,
                    T(f.a, { level: 2 }, 'Getting Started'),
                    T(y.a, { code: 'npm install @draft-js-plugins/editor' }),
                    T(y.a, { code: 'npm install @draft-js-plugins/focus' }),
                    T(y.a, { code: 'npm install @draft-js-plugins/resizeable' })
                  ),
                  T(
                    u.a,
                    null,
                    T(f.a, { level: 2 }, 'Configuration Parameters')
                  ),
                  T(
                    u.a,
                    null,
                    T(f.a, { level: 2 }, 'Simple Resizeable Example'),
                    T(F, null),
                    T(y.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, resizeablePlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Hover the block and change the with by dragging the mouse.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'More text here \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class SimpleResizeableEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleResizeableEditor.js',
                    }),
                    T(y.a, {
                      code:
                        "import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\n\nexport default createColorBlockPlugin;\n",
                      name: 'colorBlockPlugin.js',
                    }),
                    T(y.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(s.Component);
    },
    aJa1: function (e, t, n) {
      e.exports = {
        root: 'styles_root__1dzkj',
        param: 'styles_param__25JjX',
        paramBig: 'styles_paramBig__3ojT0',
        paramName: 'styles_paramName__blbJE',
        subParams: 'styles_subParams__2qHtX',
        subParam: 'styles_subParam__2guFk',
        subParamName: 'styles_subParamName__1-8pq',
        list: 'styles_list__9JIP4',
        listEntry: 'styles_listEntry__2dTHj',
        guideCodeBlock: 'styles_guideCodeBlock__1iopd',
      };
    },
    fAD8: function (e, t, n) {
      e.exports = {
        editor: 'editorStyles_editor__3UvEi',
        options: 'editorStyles_options__1gTbi',
      };
    },
  },
  [['EKUP', 0, 2, 1, 3, 4]],
]);
