_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [23],
  {
    '8J3a': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/focus',
        function () {
          return n('grcW');
        },
      ]);
    },
    Dmjd: function (e, t, n) {
      'use strict';
      var o = n('zpdM'),
        r = n('Svze'),
        a = n('b//S'),
        c = n.n(a),
        s = n('ERkP'),
        i = n.n(s),
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
          s = a.getSelection().getAnchorKey(),
          i =
            'up' === n
              ? a.getCurrentContent().getBlockBefore(s)
              : a.getCurrentContent().getBlockAfter(s);
        if ((!i || i.get('key') !== s) && i) {
          var l = c.a.encode(i.getKey(), 0, 0),
            u = document.querySelectorAll('[data-offset-key="' + l + '"]')[0],
            d = window.getSelection(),
            f = document.createRange();
          f.setStart(u, 0), f.setEnd(u, 0), d.removeAllRanges(), d.addRange(f);
          var g = 'up' === n ? i.getLength() : 0;
          r.preventDefault(),
            t(
              o.EditorState.forceSelection(
                a,
                new o.SelectionState({
                  anchorKey: i.getKey(),
                  anchorOffset: g,
                  focusKey: i.getKey(),
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
          var o = i.a.forwardRef(function (o, r) {
            Object(s.useEffect)(function () {
              return (
                n.add(o.block.getKey()),
                function () {
                  n.remove(o.block.getKey());
                }
              );
            }, []);
            var a = o.blockProps,
              c = o.className,
              u = a.isFocused
                ? Object(l.a)(c, t.focused)
                : Object(l.a)(c, t.unfocused);
            return i.a.createElement(
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
        b = function (e, t) {
          var n = e.getSelection();
          if (n.getAnchorKey() !== n.getFocusKey()) return !1;
          var o = e.getCurrentContent().getBlockForKey(n.getAnchorKey());
          return t.includes(o.getKey());
        },
        h = [
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
          s = e.theme ? e.theme : m;
        return {
          handleReturn: function (e, t, n) {
            var o = n.setEditorState;
            return b(t, a) ? (o(u(t)), 'handled') : 'not-handled';
          },
          handleKeyCommand: function (e, t, n, r) {
            var c = r.setEditorState;
            if (h.includes(e) && b(t, a)) {
              var s = t.getSelection().getStartKey(),
                i = (function (e, t) {
                  var n = e.getCurrentContent(),
                    r = n.getKeyBefore(t),
                    a = n.getBlockForKey(r);
                  if (void 0 === a) {
                    var c = new o.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 1,
                    });
                    (n = o.Modifier.removeRange(n, c, 'backward')),
                      (n = o.Modifier.setBlockType(n, c, 'unstyled'));
                    var s = o.EditorState.push(e, n, 'remove-range'),
                      i = new o.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: t,
                        focusOffset: 0,
                      });
                    return o.EditorState.forceSelection(s, i);
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
                })(t, s);
              if (i !== t) return c(i), 'handled';
            }
            return 'not-handled';
          },
          onChange: function (e) {
            var r = e.getCurrentContent();
            if (!r.equals(n)) return (n = r), e;
            n = r;
            var c = e.getSelection();
            if (t && c.equals(t)) return (t = e.getSelection()), e;
            var s = a.getAll();
            if (
              t &&
              p(r, t.getStartKey(), t.getEndKey()).some(function (e) {
                return s.includes(e);
              })
            )
              return (t = c), o.EditorState.forceSelection(e, e.getSelection());
            return p(r, c.getStartKey(), c.getEndKey()).some(function (e) {
              return s.includes(e);
            })
              ? ((t = c), o.EditorState.forceSelection(e, e.getSelection()))
              : e;
          },
          keyBindingFn: function (e, t) {
            var n = t.getEditorState,
              o = t.setEditorState,
              r = n();
            if (
              b(r, a) &&
              (37 === e.keyCode && d(n, o, 'up', e),
              39 === e.keyCode && d(n, o, 'down', e),
              38 === e.keyCode && d(n, o, 'up', e),
              40 === e.keyCode)
            )
              d(n, o, 'down', e);
            else if (!e.shiftKey) {
              if (37 === e.keyCode) {
                var c = r.getSelection(),
                  s = c.getAnchorKey(),
                  i = r.getCurrentContent().getBlockBefore(s);
                i &&
                  0 === c.getAnchorOffset() &&
                  a.includes(i.getKey()) &&
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
                var h = r.getSelection().getAnchorKey(),
                  S = r.getCurrentContent().getBlockAfter(h);
                S && a.includes(S.getKey()) && d(n, o, 'down', e);
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
                        a = c.a.encode(n.getKey(), 0, 0),
                        s = document.querySelectorAll(
                          '[data-offset-key="' + a + '"]'
                        )[0],
                        i = window.getSelection(),
                        l = document.createRange();
                      l.setStart(s, 0),
                        l.setEnd(s, 0),
                        i.removeAllRanges(),
                        i.addRange(l),
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
          decorator: g({ theme: s, blockKeyStore: a }),
        };
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
        c = (n('U/75'), n('Tw9o')),
        s = n.n(c),
        i = r.a.createElement;
      function l(e) {
        var t = e.code,
          n = e.className,
          o = Object(a.a)(s.a.root, n);
        return i(
          'span',
          { className: o },
          i('code', { dangerouslySetInnerHTML: { __html: t } })
        );
      }
    },
    dm8t: function (e, t, n) {
      e.exports = {
        root: 'styles_root__17GJY',
        param: 'styles_param__U8q04',
        paramBig: 'styles_paramBig__3etsF',
        paramName: 'styles_paramName__3YZJT',
        subParams: 'styles_subParams__3cYYn',
        subParam: 'styles_subParam__E1uNk',
        subParamName: 'styles_subParamName__1RSzj',
        list: 'styles_list__1TvAl',
        listEntry: 'styles_listEntry__2B_3K',
        guideCodeBlock: 'styles_guideCodeBlock__3CTZ2',
      };
    },
    f7c4: function (e, t, n) {
      e.exports = {
        editor: 'editorStyles_editor__2mo65',
        options: 'editorStyles_options__3m5Bx',
      };
    },
    grcW: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return I;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        a = n('8K1b'),
        c = n('K/z8'),
        s = n('sRHE'),
        i = n('ERkP'),
        l = n.n(i),
        u = n('Diez'),
        d = n('9zpB'),
        f = n('YITQ'),
        g = n('dm8t'),
        p = n.n(g),
        y = n('lIm4'),
        m = n('pWxA'),
        b = n('zjfJ'),
        h = n('zpdM'),
        S = n('mwv6'),
        v = n('Dmjd'),
        k = n('cxan'),
        C = n('HbGN'),
        O = l.a.createElement;
      function E(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                Object(b.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
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
            o = Object(C.a)(e, [
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
          return O(
            'div',
            Object(k.a)({ ref: t }, o, {
              style: w(
                { width: 200, height: 80, backgroundColor: '#9bc0c7' },
                n
              ),
            })
          );
        }),
        K = function () {
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
        B = n('f7c4'),
        _ = n.n(B),
        P = l.a.createElement;
      function R(e) {
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
            o = Object(s.a)(e);
          if (t) {
            var r = Object(s.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var x = Object(v.a)(),
        N = [x, K({ decorator: Object(S.a)(x.decorator) })],
        F = {
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
                'More text here to demonstrate how inline left/right alignment works \u2026',
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
          var t = R(n);
          function n() {
            var e;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              Object(b.a)(Object(m.a)(e), 'state', {
                editorState: h.EditorState.createWithContent(
                  Object(h.convertFromRaw)(F)
                ),
              }),
              Object(b.a)(Object(m.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(b.a)(Object(m.a)(e), 'focus', function () {
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
                  return P(
                    'div',
                    { className: _.a.editor, onClick: this.focus },
                    P(S.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: N,
                      ref: function (t) {
                        e.editor = t;
                      },
                    })
                  );
                },
              },
            ]),
            n
          );
        })(i.Component),
        M = n('98Mn'),
        T = n('bsbD'),
        D = n('3h/d'),
        L = l.a.createElement;
      function W(e) {
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
            o = Object(s.a)(e);
          if (t) {
            var r = Object(s.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var I = (function (e) {
        Object(a.a)(n, e);
        var t = W(n);
        function n() {
          return Object(o.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return L(
                  D.a,
                  null,
                  L(
                    u.a,
                    null,
                    L(f.a, { level: 2 }, 'Focus'),
                    L(f.a, { level: 3 }, 'Prerequisite'),
                    L(
                      'p',
                      null,
                      'This plugin exposes a decorator for blocks of the type `atomic`. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Focus Example` further down contains an example plugin rendering a colored div.'
                    ),
                    L(f.a, { level: 3 }, 'Usage'),
                    L('p', null, 'Select (via mouse or keyboard) a block.'),
                    L(f.a, { level: 3 }, 'Supported Environment'),
                    L(
                      'ul',
                      { className: p.a.list },
                      L('li', { className: p.a.listEntry }, 'Desktop: Yes'),
                      L('li', { className: p.a.listEntry }, 'Mobile: Yes'),
                      L('li', { className: p.a.listEntry }, 'Screen-reader: No')
                    )
                  ),
                  L(
                    d.a,
                    null,
                    L(f.a, { level: 2 }, 'Getting Started'),
                    L(y.a, { code: 'npm install @draft-js-plugins/editor' }),
                    L(y.a, { code: 'npm install @draft-js-plugins/focus' }),
                    L(f.a, { level: 3 }, 'Importing the default styles'),
                    L(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      L(T.a, {
                        code:
                          'node_modules/@draft-js-plugins/focus/lib/plugin.css',
                      })
                    ),
                    L(f.a, { level: 4 }, 'Webpack Usage'),
                    L(
                      'ul',
                      { className: p.a.list },
                      L(
                        'li',
                        { className: p.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        L(T.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      L(
                        'li',
                        { className: p.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        L(y.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: p.a.guideCodeBlock,
                        })
                      ),
                      L(
                        'li',
                        { className: p.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        L(y.a, {
                          code:
                            "import '@draft-js-plugins/focus/lib/plugin.css';",
                          className: p.a.guideCodeBlock,
                        })
                      ),
                      L(
                        'li',
                        { className: p.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    L(f.a, { level: 4 }, 'Browserify Usage'),
                    L(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      L(
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
                  L(
                    u.a,
                    null,
                    L(f.a, { level: 2 }, 'Configuration Parameters'),
                    L(
                      'div',
                      { className: p.a.param },
                      L('span', { className: p.a.paramName }, 'theme'),
                      L(
                        'span',
                        null,
                        'Object of CSS classes with the following keys:'
                      ),
                      L(
                        'div',
                        { className: p.a.subParams },
                        L(
                          'div',
                          { className: p.a.subParam },
                          L(
                            'span',
                            { className: p.a.subParamName },
                            'focused:'
                          ),
                          'CSS class for the focused item.'
                        ),
                        L(
                          'div',
                          { className: p.a.subParam },
                          L(
                            'span',
                            { className: p.a.subParamName },
                            'unfocused:'
                          ),
                          'CSS class for the unfocused item.'
                        )
                      )
                    )
                  ),
                  L(
                    u.a,
                    null,
                    L(f.a, { level: 2 }, 'Simple Focus Example'),
                    L(A, null),
                    L(y.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleFocusEditor.js',
                    }),
                    L(y.a, {
                      code:
                        "import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\n\nexport default createColorBlockPlugin;\n",
                      name: 'colorBlockPlugin.js',
                    }),
                    L(y.a, {
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
      })(i.Component);
    },
  },
  [['8J3a', 0, 2, 1, 3, 4]],
]);
