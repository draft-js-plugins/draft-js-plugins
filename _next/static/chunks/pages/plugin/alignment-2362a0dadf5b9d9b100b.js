_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [17],
  {
    '+P7z': function (t, e, n) {
      t.exports = {
        buttonWrapper: 'buttonStyles_buttonWrapper__djgnZ',
        button: 'buttonStyles_button__KISii',
        active: 'buttonStyles_active__1s9GZ',
      };
    },
    '/xnp': function (t, e, n) {
      t.exports = {
        editor: 'editorStyles_editor__3q1RY',
        options: 'editorStyles_options__3WGnh',
      };
    },
    '11nR': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return ct;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        i = n('8K1b'),
        a = n('K/z8'),
        l = n('sRHE'),
        s = n('ERkP'),
        c = n.n(s),
        u = n('O6dN'),
        d = n.n(u),
        p = n('9zpB'),
        g = n('lIm4'),
        m = n('Diez'),
        f = n('98Mn'),
        b = n('YITQ'),
        y = n('bsbD'),
        h = n('3h/d'),
        S = n('pWxA'),
        v = n('zjfJ'),
        k = n('zpdM'),
        j = n('mwv6'),
        x = n('m4hd'),
        O = n('Dmjd'),
        P = n('cxan'),
        _ = n('HbGN'),
        w = c.a.createElement;
      function R(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? R(Object(n), !0).forEach(function (e) {
                Object(v.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var C = c.a.forwardRef(function (t, e) {
          t.block,
            t.blockProps,
            t.customStyleMap,
            t.customStyleFn,
            t.decorator,
            t.forceSelection,
            t.offsetKey,
            t.selection,
            t.tree,
            t.contentState,
            t.blockStyleFn,
            t.preventScroll;
          var n = t.style,
            o = Object(_.a)(t, [
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
          return w(
            'div',
            Object(P.a)({ ref: e }, o, {
              style: E(
                { width: 200, height: 80, backgroundColor: '#9bc0c7' },
                n
              ),
            })
          );
        }),
        T = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.decorator ? t.decorator(C) : C;
          return {
            blockRendererFn: function (t, n) {
              var o = n.getEditorState;
              if (
                'atomic' === t.getType() &&
                'colorBlock' ===
                  o().getCurrentContent().getEntity(t.getEntityAt(0)).getType()
              )
                return { component: e, editable: !1 };
              return null;
            },
          };
        },
        B = n('/xnp'),
        A = n.n(B),
        N = c.a.createElement;
      function M(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var D = Object(O.a)(),
        F = Object(x.a)(),
        W = F.AlignmentTool,
        I = [D, F, T({ decorator: Object(j.a)(F.decorator, D.decorator) })],
        z = {
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
        K = (function (t) {
          Object(i.a)(n, t);
          var e = M(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(S.a)(t), 'state', {
                editorState: k.EditorState.createWithContent(
                  Object(k.convertFromRaw)(z)
                ),
              }),
              Object(v.a)(Object(S.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(S.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return N(
                    'div',
                    null,
                    N(
                      'div',
                      { className: A.a.editor, onClick: this.focus },
                      N(j.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: I,
                        ref: function (e) {
                          t.editor = e;
                        },
                      }),
                      N(W, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        U = c.a.createElement;
      function J(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? J(Object(n), !0).forEach(function (e) {
                Object(v.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var L = c.a.forwardRef(function (t, e) {
          t.block,
            t.blockProps,
            t.customStyleMap,
            t.customStyleFn,
            t.decorator,
            t.forceSelection,
            t.offsetKey,
            t.selection,
            t.tree,
            t.contentState,
            t.blockStyleFn,
            t.preventScroll;
          var n = t.style,
            o = Object(_.a)(t, [
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
          return U(
            'div',
            Object(P.a)({ ref: e }, o, {
              style: G(
                { width: 200, height: 80, backgroundColor: '#9bc0c7' },
                n
              ),
            })
          );
        }),
        Y = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.decorator ? t.decorator(L) : L;
          return {
            blockRendererFn: function (t, n) {
              var o = n.getEditorState;
              if (
                'atomic' === t.getType() &&
                'colorBlock' ===
                  o().getCurrentContent().getEntity(t.getEntityAt(0)).getType()
              )
                return { component: e, editable: !1 };
              return null;
            },
          };
        },
        H = n('J88T'),
        q = n.n(H),
        V = n('bfpb'),
        X = n.n(V),
        Z = n('+P7z'),
        Q = n.n(Z),
        $ = c.a.createElement;
      function tt(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var et = Object(O.a)(),
        nt = Object(x.a)({
          theme: { alignmentToolStyles: X.a, buttonStyles: Q.a },
        }),
        ot = nt.AlignmentTool,
        rt = [
          et,
          nt,
          Y({ decorator: Object(j.a)(nt.decorator, et.decorator) }),
        ],
        it = {
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
        at = (function (t) {
          Object(i.a)(n, t);
          var e = tt(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(S.a)(t), 'state', {
                editorState: k.EditorState.createWithContent(
                  Object(k.convertFromRaw)(it)
                ),
              }),
              Object(v.a)(Object(S.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(S.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return $(
                    'div',
                    null,
                    $(
                      'div',
                      { className: q.a.editor, onClick: this.focus },
                      $(j.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: rt,
                        ref: function (e) {
                          t.editor = e;
                        },
                      }),
                      $(ot, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        lt = c.a.createElement;
      function st(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var ct = (function (t) {
        Object(i.a)(n, t);
        var e = st(n);
        function n() {
          return Object(o.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return lt(
                  h.a,
                  null,
                  lt(
                    m.a,
                    null,
                    lt(b.a, { level: 2 }, 'Alignment'),
                    lt(b.a, { level: 3 }, 'Prerequisite'),
                    lt(
                      'p',
                      null,
                      'This plugin exposes a decorator for blocks. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Alignment Example` further down contains an example plugin rendering a colored div. In addition this plugin only works in combination with the @draft-js-plugins/focus.'
                    ),
                    lt(b.a, { level: 3 }, 'Usage'),
                    lt(
                      'p',
                      null,
                      'Select (via mouse or keyboard) a block supporting alignment modifications. A tooltip will pop up and you can update the alignment.'
                    ),
                    lt(b.a, { level: 3 }, 'Supported Environment'),
                    lt(
                      'ul',
                      { className: d.a.list },
                      lt('li', { className: d.a.listEntry }, 'Desktop: Yes'),
                      lt('li', { className: d.a.listEntry }, 'Mobile: No'),
                      lt(
                        'li',
                        { className: d.a.listEntry },
                        'Screen-reader: No'
                      )
                    )
                  ),
                  lt(
                    p.a,
                    null,
                    lt(b.a, { level: 2 }, 'Getting Started'),
                    lt(g.a, { code: 'npm install @draft-js-plugins/editor' }),
                    lt(g.a, { code: 'npm install @draft-js-plugins/focus' }),
                    lt(g.a, {
                      code: 'npm install @draft-js-plugins/alignment',
                    }),
                    lt(b.a, { level: 3 }, 'Importing the default styles'),
                    lt(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      lt(y.a, {
                        code:
                          'node_modules/@draft-js-plugins/alignment/lib/plugin.css',
                      })
                    ),
                    lt(b.a, { level: 4 }, 'Webpack Usage'),
                    lt(
                      'ul',
                      { className: d.a.list },
                      lt(
                        'li',
                        { className: d.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        lt(y.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      lt(
                        'li',
                        { className: d.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        lt(g.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: d.a.guideCodeBlock,
                        })
                      ),
                      lt(
                        'li',
                        { className: d.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        lt(g.a, {
                          code:
                            "import '@draft-js-plugins/alignment/lib/plugin.css';",
                          className: d.a.guideCodeBlock,
                        })
                      ),
                      lt(
                        'li',
                        { className: d.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    lt(b.a, { level: 4 }, 'Browserify Usage'),
                    lt(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      lt(
                        f.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Alignment/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  lt(
                    m.a,
                    null,
                    lt(b.a, { level: 2 }, 'Configuration Parameters')
                  ),
                  lt(
                    m.a,
                    null,
                    lt(b.a, { level: 2 }, 'Simple Alignment Example'),
                    lt(K, null),
                    lt(g.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  alignmentPlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, alignmentPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class SimpleAlignmentEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleAlignmentEditor.js',
                    }),
                    lt(g.a, {
                      code:
                        "import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\n\nexport default createColorBlockPlugin;\n",
                      name: 'colorBlockPlugin.js',
                    }),
                    lt(g.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  lt(
                    m.a,
                    null,
                    lt(b.a, { level: 2 }, 'Themed Alignment Example'),
                    lt(at, null),
                    lt(g.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\nimport alignmentToolStyles from './alignmentToolStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst alignmentPlugin = createAlignmentPlugin({\n  theme: {\n    alignmentToolStyles,\n    buttonStyles,\n  },\n});\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  alignmentPlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, alignmentPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class ThemedAlignmentEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleAlignmentEditor.js',
                    }),
                    lt(g.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    }),
                    lt(g.a, {
                      code:
                        '.alignmentTool {\n  left: 50%;\n  transform: translate(-50%) scale(0);\n  position: absolute;\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(220, 220, 220, 1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.alignmentTool:after,\n.alignmentTool:before {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.alignmentTool:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.alignmentTool:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n',
                      name: 'alignmentToolStyles.css',
                    }),
                    lt(g.a, {
                      code:
                        '.buttonWrapper {\n  display: inline-block;\n}\n\n.button {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.button svg {\n  fill: #ddd;\n}\n\n.button:hover,\n.button:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.active {\n  color: #6a9cc9;\n}\n\n.active svg {\n  fill: #6a9cc9;\n}\n',
                      name: 'buttonStyles.css',
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
    J88T: function (t, e, n) {
      t.exports = {
        editor: 'editorStyles_editor__3VfVy',
        options: 'editorStyles_options__3b6lS',
      };
    },
    O6dN: function (t, e, n) {
      t.exports = {
        root: 'styles_root__1J3gM',
        param: 'styles_param__3ir1i',
        paramBig: 'styles_paramBig__tDKq5',
        paramName: 'styles_paramName__2CJ-m',
        subParams: 'styles_subParams__3RxLH',
        subParam: 'styles_subParam__2GhNe',
        subParamName: 'styles_subParamName__2tgnX',
        list: 'styles_list__3_ppE',
        listEntry: 'styles_listEntry__2PckZ',
        guideCodeBlock: 'styles_guideCodeBlock__1iTmj',
      };
    },
    Tw9o: function (t, e, n) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bfpb: function (t, e, n) {
      t.exports = { alignmentTool: 'alignmentToolStyles_alignmentTool__gkSVf' };
    },
    bsbD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var o = n('ERkP'),
        r = n.n(o),
        i = n('7O4Y'),
        a = (n('U/75'), n('Tw9o')),
        l = n.n(a),
        s = r.a.createElement;
      function c(t) {
        var e = t.code,
          n = t.className,
          o = Object(i.a)(l.a.root, n);
        return s(
          'span',
          { className: o },
          s('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    x5ya: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/alignment',
        function () {
          return n('11nR');
        },
      ]);
    },
  },
  [['x5ya', 0, 2, 1, 3, 4, 5]],
]);
