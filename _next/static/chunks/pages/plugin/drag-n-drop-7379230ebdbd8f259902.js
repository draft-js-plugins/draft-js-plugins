_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    '0Oas': function (e, t, n) {
      'use strict';
      var o = n('ERkP'),
        r = n.n(o),
        a = n('zpdM'),
        i = n('7O4Y');
      function c() {
        return (c =
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
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = {},
          a = Object.keys(e);
        for (o = 0; o < a.length; o++)
          (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      var l = function (e, t, n) {
        var o = e
            .getCurrentContent()
            .createEntity('IMAGE', 'IMMUTABLE', c({}, n, { src: t }))
            .getLastCreatedEntityKey(),
          r = a.AtomicBlockUtils.insertAtomicBlock(e, o, ' ');
        return a.EditorState.forceSelection(
          r,
          r.getCurrentContent().getSelectionAfter()
        );
      };
      function u(e) {
        var t = e.block,
          n = e.className,
          o = e.theme,
          a = void 0 === o ? {} : o,
          l = s(e, ['block', 'className', 'theme']);
        l.blockProps,
          l.customStyleMap,
          l.customStyleFn,
          l.decorator,
          l.forceSelection,
          l.offsetKey,
          l.selection,
          l.tree,
          l.blockStyleFn,
          l.preventScroll;
        var u = l.contentState,
          d = s(l, [
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
          f = Object(i.a)(a.image, n),
          g = u.getEntity(t.getEntityAt(0)).getData().src;
        return r.a.createElement(
          'img',
          c({}, d, { src: g, role: 'presentation', className: f })
        );
      }
      var d = {};
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = e.theme ? e.theme : d,
          n = e.imageComponent || u;
        e.decorator && (n = e.decorator(n));
        var o = function (e) {
          return r.a.createElement(n, c({}, e, { theme: t }));
        };
        return {
          blockRendererFn: function (e, t) {
            var n = t.getEditorState;
            if ('atomic' === e.getType()) {
              var r = n().getCurrentContent(),
                a = e.getEntityAt(0);
              if (!a) return null;
              var i = r.getEntity(a).getType();
              return 'IMAGE' === i || 'image' === i
                ? { component: o, editable: !1 }
                : null;
            }
            return null;
          },
          addImage: l,
        };
      };
    },
    Dmjd: function (e, t, n) {
      'use strict';
      var o = n('zpdM'),
        r = n('Svze'),
        a = n('b//S'),
        i = n.n(a),
        c = n('ERkP'),
        s = n.n(c),
        l = n('7O4Y');
      function u(e) {
        var t = (function (e, t, n) {
            var r = t.getStartKey(),
              a = [];
            return (
              e.getBlockMap().forEach(function (e, t) {
                a.push(e), t === r && a.push(n);
              }),
              e.merge({
                blockMap: o.BlockMapBuilder.createFromArray(a),
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
        var a = e(),
          c = a.getSelection().getAnchorKey(),
          s =
            'up' === n
              ? a.getCurrentContent().getBlockBefore(c)
              : a.getCurrentContent().getBlockAfter(c);
        if ((!s || s.get('key') !== c) && s) {
          var l = i.a.encode(s.getKey(), 0, 0),
            u = document.querySelectorAll('[data-offset-key="' + l + '"]')[0],
            d = window.getSelection(),
            f = document.createRange();
          f.setStart(u, 0), f.setEnd(u, 0), d.removeAllRanges(), d.addRange(f);
          var g = 'up' === n ? s.getLength() : 0;
          r.preventDefault(),
            t(
              o.EditorState.forceSelection(
                a,
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
            var a = o.blockProps,
              i = o.className,
              u = a.isFocused
                ? Object(l.a)(i, t.focused)
                : Object(l.a)(i, t.unfocused);
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
      var m = { unfocused: 'uz5k6rs', focused: 'f1vn2c6d' },
        h = function (e, t) {
          var n = e.getSelection();
          if (n.getAnchorKey() !== n.getFocusKey()) return !1;
          var o = e.getCurrentContent().getBlockForKey(n.getAnchorKey());
          return t.includes(o.getKey());
        },
        v = [
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
          a = (function () {
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
          c = e.theme ? e.theme : m;
        return {
          handleReturn: function (e, t, n) {
            var o = n.setEditorState;
            return h(t, a) ? (o(u(t)), 'handled') : 'not-handled';
          },
          handleKeyCommand: function (e, t, n, r) {
            var i = r.setEditorState;
            if (v.includes(e) && h(t, a)) {
              var c = t.getSelection().getStartKey(),
                s = (function (e, t) {
                  var n = e.getCurrentContent(),
                    r = n.getKeyBefore(t),
                    a = n.getBlockForKey(r);
                  if (void 0 === a) {
                    var i = new o.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 1,
                    });
                    (n = o.Modifier.removeRange(n, i, 'backward')),
                      (n = o.Modifier.setBlockType(n, i, 'unstyled'));
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
                    anchorOffset: a.getLength(),
                    focusKey: t,
                    focusOffset: 1,
                  });
                  n = o.Modifier.removeRange(n, l, 'backward');
                  var u = o.EditorState.push(e, n, 'remove-range'),
                    d = new o.SelectionState({
                      anchorKey: r,
                      anchorOffset: a.getLength(),
                      focusKey: r,
                      focusOffset: a.getLength(),
                    });
                  return o.EditorState.forceSelection(u, d);
                })(t, c);
              if (s !== t) return i(s), 'handled';
            }
            return 'not-handled';
          },
          onChange: function (e) {
            var r = e.getCurrentContent();
            if (!r.equals(n)) return (n = r), e;
            n = r;
            var i = e.getSelection();
            if (t && i.equals(t)) return (t = e.getSelection()), e;
            var c = a.getAll();
            if (
              t &&
              p(r, t.getStartKey(), t.getEndKey()).some(function (e) {
                return c.includes(e);
              })
            )
              return (t = i), o.EditorState.forceSelection(e, e.getSelection());
            return p(r, i.getStartKey(), i.getEndKey()).some(function (e) {
              return c.includes(e);
            })
              ? ((t = i), o.EditorState.forceSelection(e, e.getSelection()))
              : e;
          },
          keyBindingFn: function (e, t) {
            var n = t.getEditorState,
              o = t.setEditorState,
              r = n();
            if (
              h(r, a) &&
              (37 === e.keyCode && d(n, o, 'up', e),
              39 === e.keyCode && d(n, o, 'down', e),
              38 === e.keyCode && d(n, o, 'up', e),
              40 === e.keyCode)
            )
              d(n, o, 'down', e);
            else if (!e.shiftKey) {
              if (37 === e.keyCode) {
                var i = r.getSelection(),
                  c = i.getAnchorKey(),
                  s = r.getCurrentContent().getBlockBefore(c);
                s &&
                  0 === i.getAnchorOffset() &&
                  a.includes(s.getKey()) &&
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
                g && p && a.includes(g.getKey()) && d(n, o, 'down', e);
              }
              if (38 === e.keyCode) {
                var y = r.getSelection().getAnchorKey(),
                  m = r.getCurrentContent().getBlockBefore(y);
                m && a.includes(m.getKey()) && d(n, o, 'up', e);
              }
              if (40 === e.keyCode) {
                var v = r.getSelection().getAnchorKey(),
                  b = r.getCurrentContent().getBlockAfter(v);
                b && a.includes(b.getKey()) && d(n, o, 'down', e);
              }
            }
          },
          blockRendererFn: function (e, t) {
            var n = t.getEditorState,
              r = t.setEditorState;
            if ('atomic' === e.getType()) {
              var a = n();
              return {
                props: {
                  isFocused: y(a, e.getKey()),
                  isCollapsedSelection: a.getSelection().isCollapsed(),
                  setFocusToBlock: function () {
                    !(function (e, t, n) {
                      var r = e(),
                        a = i.a.encode(n.getKey(), 0, 0),
                        c = document.querySelectorAll(
                          '[data-offset-key="' + a + '"]'
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
          decorator: g({ theme: c, blockKeyStore: a }),
        };
      };
    },
    EPMb: function (e, t, n) {
      'use strict';
      var o = n('zpdM'),
        r = n('Svze'),
        a = n('ERkP'),
        i = n.n(a);
      function c() {
        return (c =
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
      var s = 'DRAFTJS_BLOCK_KEY',
        l = function (e, t, n, a) {
          var i = a.getEditorState,
            l = a.setEditorState,
            u = i(),
            d = t.data.getData('text'),
            f = d ? d.split(':') : [];
          if (2 !== f.length) return 'not-handled';
          if (f[0] === s) {
            var g = f[1],
              p = u.getCurrentContent(),
              y = p.getBlockForKey(g),
              m = p.getEntity(y.getEntityAt(0)),
              h = (function (e, t) {
                var n,
                  r = e.getKeyAfter(t),
                  a = e.getBlockForKey(r);
                n =
                  a &&
                  'unstyled' === a.getType() &&
                  0 === a.getLength() &&
                  a === e.getBlockMap().last()
                    ? new o.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: r,
                        focusOffset: 0,
                      })
                    : new o.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: t,
                        focusOffset: 1,
                      });
                var i = o.Modifier.setBlockType(e, n, 'unstyled');
                return o.Modifier.removeRange(i, n, 'backward');
              })(
                (function (e, t, n, a, i, s) {
                  void 0 === s && (s = ' ');
                  var l,
                    u,
                    d = e.getCurrentContent(),
                    f = t,
                    g = o.Modifier.removeRange(d, f, 'backward'),
                    p = g.getSelectionAfter(),
                    y = p.get('focusKey'),
                    m = d.getBlockForKey(y),
                    h = 0 === m.getLength() && null === m.getEntityAt(0),
                    v = 0 === f.getStartOffset();
                  h || v
                    ? ((l = p), (u = g))
                    : (l = (u = o.Modifier.splitBlock(
                        g,
                        p
                      )).getSelectionAfter());
                  var b = o.Modifier.setBlockType(u, l, n),
                    S = b
                      .createEntity(i || n, 'IMMUTABLE', c({}, a))
                      .getLastCreatedEntityKey(),
                    k = o.CharacterMetadata.create({ entity: S }),
                    E = [
                      new o.ContentBlock({
                        key: Object(o.genKey)(),
                        type: n,
                        text: s,
                        characterList: Object(r.List)(
                          Object(r.Repeat)(k, s.length || 1)
                        ),
                      }),
                      new o.ContentBlock({
                        key: Object(o.genKey)(),
                        type: 'unstyled',
                        text: '',
                        characterList: Object(r.List)(),
                      }),
                    ],
                    C = o.BlockMapBuilder.createFromArray(E);
                  return o.Modifier.replaceWithFragment(b, l, C);
                })(u, e, y.getType(), m.getData(), m.getType()),
                g
              ),
              v = new o.SelectionState({
                anchorKey: g,
                anchorOffset: 0,
                focusKey: g,
                focusOffset: 0,
              }),
              b = o.EditorState.push(u, h, 'insert-fragment');
            l(o.EditorState.forceSelection(b, v));
          }
          return 'handled';
        },
        u = function (e) {
          var t = e.store;
          return function (e) {
            var n = function (n) {
              var o = !t.getReadOnly || t.getReadOnly();
              return i.a.createElement(
                e,
                c({}, n, {
                  onDragStart: o
                    ? void 0
                    : function (e) {
                        (e.dataTransfer.dropEffect = 'move'),
                          e.dataTransfer.setData(
                            'text',
                            'DRAFTJS_BLOCK_KEY:' + n.block.getKey()
                          );
                      },
                })
              );
            };
            return (
              (n.displayName =
                'BlockDraggable(' +
                (function (e) {
                  var t = e.WrappedComponent || e;
                  return t.displayName || t.name || 'Component';
                })(e) +
                ')'),
              (n.WrappedComponent = e.WrappedComponent || e),
              n
            );
          };
        };
      t.a = function () {
        var e = { getReadOnly: void 0 };
        return {
          initialize: function (t) {
            var n = t.getReadOnly;
            e.getReadOnly = n;
          },
          decorator: u({ store: e }),
          handleDrop: l,
        };
      };
    },
    FHv9: function (e, t, n) {
      e.exports = {
        editor: 'editorStyles_editor__2AmgK',
        options: 'editorStyles_options__7g5i7',
      };
    },
    'Mb/E': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/drag-n-drop',
        function () {
          return n('tGzz');
        },
      ]);
    },
    N8Pk: function (e, t, n) {
      e.exports = {
        root: 'styles_root__1j2ew',
        param: 'styles_param__1qnbj',
        paramBig: 'styles_paramBig__cu8zb',
        paramName: 'styles_paramName__2eUb0',
        subParams: 'styles_subParams__3IaUf',
        subParam: 'styles_subParam__2_jpF',
        subParamName: 'styles_subParamName__R_leo',
        list: 'styles_list__1nZt7',
        listEntry: 'styles_listEntry__2XqbL',
        guideCodeBlock: 'styles_guideCodeBlock__-rLdN',
      };
    },
    Tw9o: function (e, t, n) {
      e.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bsbD: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var o = n('ERkP'),
        r = n.n(o),
        a = n('7O4Y'),
        i = (n('U/75'), n('Tw9o')),
        c = n.n(i),
        s = r.a.createElement;
      function l(e) {
        var t = e.code,
          n = e.className,
          o = Object(a.a)(c.a.root, n);
        return s(
          'span',
          { className: o },
          s('code', { dangerouslySetInnerHTML: { __html: t } })
        );
      }
    },
    tGzz: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return T;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        a = n('8K1b'),
        i = n('K/z8'),
        c = n('sRHE'),
        s = n('ERkP'),
        l = n.n(s),
        u = n('Diez'),
        d = n('9zpB'),
        f = n('YITQ'),
        g = n('N8Pk'),
        p = n.n(g),
        y = n('lIm4'),
        m = n('pWxA'),
        h = n('zjfJ'),
        v = n('zpdM'),
        b = n('mwv6'),
        S = n('0Oas'),
        k = n('Dmjd'),
        E = n('EPMb'),
        C = n('FHv9'),
        O = n.n(C),
        K = l.a.createElement;
      function j(e) {
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
          return Object(i.a)(this, n);
        };
      }
      var w = Object(k.a)(),
        B = Object(E.a)(),
        _ = Object(b.a)(w.decorator, B.decorator),
        R = [B, w, Object(S.a)({ decorator: _ })],
        P = {
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
                'You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        A = (function (e) {
          Object(a.a)(n, e);
          var t = j(n);
          function n() {
            var e;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              Object(h.a)(Object(m.a)(e), 'state', {
                editorState: v.EditorState.createWithContent(
                  Object(v.convertFromRaw)(P)
                ),
              }),
              Object(h.a)(Object(m.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(h.a)(Object(m.a)(e), 'focus', function () {
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
                  return K(
                    'div',
                    null,
                    K(
                      'div',
                      { className: O.a.editor, onClick: this.focus },
                      K(b.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: R,
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
        M = n('98Mn'),
        x = n('bsbD'),
        N = n('3h/d'),
        F = l.a.createElement;
      function D(e) {
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
          return Object(i.a)(this, n);
        };
      }
      var T = (function (e) {
        Object(a.a)(n, e);
        var t = D(n);
        function n() {
          return Object(o.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return F(
                  N.a,
                  null,
                  F(
                    u.a,
                    null,
                    F(f.a, { level: 2 }, "Drag'n'Drop"),
                    F(f.a, { level: 3 }, 'Supported Environment'),
                    F(
                      'ul',
                      { className: p.a.list },
                      F('li', { className: p.a.listEntry }, 'Desktop: Yes'),
                      F('li', { className: p.a.listEntry }, 'Mobile: No'),
                      F('li', { className: p.a.listEntry }, 'Screen-reader: No')
                    )
                  ),
                  F(
                    d.a,
                    null,
                    F(f.a, { level: 2 }, 'Getting Started'),
                    F(y.a, { code: 'npm install @draft-js-plugins/editor' }),
                    F(y.a, { code: 'npm install @draft-js-plugins/focus' }),
                    F(y.a, {
                      code: 'npm install @draft-js-plugins/drag-n-drop',
                    }),
                    F(y.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport React from 'react';\n\nconst imagePlugin = createImagePlugin();\n\n// The Editor accepts an array of plugins. In this case, only the imagePlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[imagePlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    F(f.a, { level: 3 }, 'Importing the default styles'),
                    F(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      F(x.a, {
                        code:
                          'node_modules/@draft-js-plugins/drag-n-drop/lib/plugin.css',
                      })
                    ),
                    F(f.a, { level: 4 }, 'Webpack Usage'),
                    F(
                      'ul',
                      { className: p.a.list },
                      F(
                        'li',
                        { className: p.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        F(x.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      F(
                        'li',
                        { className: p.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        F(y.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: p.a.guideCodeBlock,
                        })
                      ),
                      F(
                        'li',
                        { className: p.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        F(y.a, {
                          code:
                            "import '@draft-js-plugins/image/lib/plugin.css';",
                          className: p.a.guideCodeBlock,
                        })
                      ),
                      F(
                        'li',
                        { className: p.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    F(f.a, { level: 4 }, 'Browserify Usage'),
                    F(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      F(
                        M.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  F(
                    u.a,
                    null,
                    F(f.a, { level: 2 }, 'Configuration Parameters')
                  ),
                  F(
                    u.a,
                    null,
                    F(f.a, { level: 2 }, "Image + Drag'n'Drop"),
                    F(A, null),
                    F(y.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst blockDndPlugin = createBlockDndPlugin();\n\nconst decorator = composeDecorators(\n  focusPlugin.decorator,\n  blockDndPlugin.decorator\n);\nconst imagePlugin = createImagePlugin({ decorator });\n\nconst plugins = [blockDndPlugin, focusPlugin, imagePlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'Editor.js',
                    }),
                    F(y.a, {
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
  },
  [['Mb/E', 0, 2, 1, 3, 4]],
]);
