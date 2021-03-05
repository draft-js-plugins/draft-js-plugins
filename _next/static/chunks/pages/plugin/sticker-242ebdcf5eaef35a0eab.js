_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [32],
  {
    '4fTM': function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function () {
          return G;
        });
      var n = a('9fIP'),
        s = a('MMYH'),
        r = a('8K1b'),
        i = a('K/z8'),
        c = a('sRHE'),
        o = a('ERkP'),
        d = a.n(o),
        l = a('Diez'),
        u = a('9zpB'),
        b = a('YITQ'),
        m = a('SIvH'),
        f = a.n(m),
        p = a('lIm4'),
        g = a('98Mn'),
        S = a('bsbD'),
        h = a('3h/d'),
        k = a('pWxA'),
        v = a('zjfJ'),
        y = a('zpdM'),
        N = a('mwv6'),
        _ = a('+3DM'),
        j = a('6IWs'),
        P = a.n(j),
        E = a('Mpt7'),
        C = Object(E.a)({
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
        x = d.a.createElement;
      function O(e) {
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
          var a,
            n = Object(c.a)(e);
          if (t) {
            var s = Object(c.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(i.a)(this, a);
        };
      }
      var w = Object(_.a)({ stickers: C }),
        R = [w],
        B = w.StickerSelect,
        I = (function (e) {
          Object(r.a)(a, e);
          var t = O(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(v.a)(Object(k.a)(e), 'state', {
                editorState: y.EditorState.createEmpty(),
              }),
              Object(v.a)(Object(k.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(v.a)(Object(k.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return x(
                    'div',
                    null,
                    x(
                      'div',
                      { className: P.a.editor, onClick: this.focus },
                      x(N.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: R,
                        ref: function (t) {
                          e.editor = t;
                        },
                      })
                    ),
                    x('div', { className: P.a.options }, x(B, { editor: this }))
                  );
                },
              },
            ]),
            a
          );
        })(o.Component),
        D = a('MYnk'),
        M = a.n(D),
        A = Object(E.a)({
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
        T = d.a.createElement;
      function J(e) {
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
          var a,
            n = Object(c.a)(e);
          if (t) {
            var s = Object(c.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(i.a)(this, a);
        };
      }
      var Y = Object(_.a)({ stickers: A }),
        z = [Y],
        W = Y.StickerSelect,
        H = (function (e) {
          Object(r.a)(a, e);
          var t = J(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(v.a)(Object(k.a)(e), 'state', {
                editorState: y.EditorState.createEmpty(),
              }),
              Object(v.a)(Object(k.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(v.a)(Object(k.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return T(
                    'div',
                    null,
                    T(
                      'div',
                      { className: M.a.editor, onClick: this.focus },
                      T(N.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: z,
                        ref: function (t) {
                          e.editor = t;
                        },
                      })
                    ),
                    T('div', { className: M.a.options }, T(W, { editor: this }))
                  );
                },
              },
            ]),
            a
          );
        })(o.Component),
        L = d.a.createElement;
      function U(e) {
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
          var a,
            n = Object(c.a)(e);
          if (t) {
            var s = Object(c.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(i.a)(this, a);
        };
      }
      var G = (function (e) {
        Object(r.a)(a, e);
        var t = U(a);
        function a() {
          return Object(n.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(s.a)(a, [
            {
              key: 'render',
              value: function () {
                return L(
                  h.a,
                  null,
                  L(
                    l.a,
                    null,
                    L(b.a, { level: 2 }, 'Sticker'),
                    L(b.a, { level: 3 }, 'Supported Environment'),
                    L(
                      'ul',
                      { className: f.a.list },
                      L('li', { className: f.a.listEntry }, 'Desktop: Yes'),
                      L('li', { className: f.a.listEntry }, 'Mobile: Yes'),
                      L(
                        'li',
                        { className: f.a.listEntry },
                        'Screen-reader: Yes'
                      )
                    )
                  ),
                  L(
                    u.a,
                    null,
                    L(b.a, { level: 2 }, 'Getting Started'),
                    L(p.a, { code: 'npm install @draft-js-plugins/editor' }),
                    L(p.a, { code: 'npm install @draft-js-plugins/sticker' }),
                    L(p.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createStickerPlugin from '@draft-js-plugins/sticker';\nimport React from 'react';\nimport { fromJS } from 'immutable';\n\n// Creates an Instance. Passing in an Immutable.js List of stickers as an\n// argument.\nconst stickers = fromJS({\n  data: {\n    'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {\n      id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',\n      url: '../images/unicorn-4.png',\n    },\n    'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {\n      id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',\n      url: '../images/unicorn-1.png',\n    },\n  },\n});\n\nconst stickerPlugin = createStickerPlugin({ stickers });\n\n// The Editor accepts an array of plugins. In this case, only the stickerPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[stickerPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    L(b.a, { level: 3 }, 'Importing the default styles'),
                    L(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      L(S.a, {
                        code:
                          'node_modules/@draft-js-plugins/sticker/lib/plugin.css',
                      })
                    ),
                    L(b.a, { level: 4 }, 'Webpack Usage'),
                    L(
                      'ul',
                      { className: f.a.list },
                      L(
                        'li',
                        { className: f.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        L(S.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      L(
                        'li',
                        { className: f.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        L(p.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      L(
                        'li',
                        { className: f.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        L(p.a, {
                          code:
                            "import '@draft-js-plugins/sticker/lib/plugin.css';",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      L(
                        'li',
                        { className: f.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    L(b.a, { level: 4 }, 'Browserify Usage'),
                    L(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      L(
                        g.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Sticker/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  L(
                    l.a,
                    null,
                    L(b.a, { level: 2 }, 'Configuration Parameters'),
                    L(
                      'div',
                      { className: f.a.param },
                      L('span', { className: f.a.paramName }, 'theme'),
                      L(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      L(
                        'div',
                        { className: f.a.subParams },
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'sticker:'
                          ),
                          ' CSS class for sticker.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'stickerImage:'
                          ),
                          ' CSS class for sticker image tag.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'stickerRemoveButton:'
                          ),
                          ' ',
                          'CSS class for sticker remove button.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L('span', { className: f.a.subParamName }, 'select:'),
                          ' CSS class for sticker select.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectPopover:'
                          ),
                          ' CSS class for sticker select popup.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectClosedPopover:'
                          ),
                          ' ',
                          'CSS class for sticker select close button.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectBottomGradient:'
                          ),
                          ' ',
                          'CSS class for sticker select bottom gradient.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectButton:'
                          ),
                          ' CSS class for button to open sticker select.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectPressedButton:'
                          ),
                          ' ',
                          'CSS class for pressed state of button to open sticker select.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectStickerList:'
                          ),
                          ' ',
                          'CSS class for sticker select list.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectSticker:'
                          ),
                          ' CSS class for sticker select.'
                        ),
                        L(
                          'div',
                          { className: f.a.subParam },
                          L(
                            'span',
                            { className: f.a.subParamName },
                            'selectStickerImage:'
                          ),
                          ' ',
                          'CSS class for sticker select image.'
                        )
                      )
                    ),
                    L(
                      'div',
                      { className: f.a.param },
                      L('span', { className: f.a.paramName }, 'stickers'),
                      L('span', null, 'Immutable.js List of stickers.')
                    ),
                    L(
                      'div',
                      { className: f.a.paramBig },
                      L(
                        'span',
                        { className: f.a.paramName },
                        'selectButtonContent'
                      ),
                      L(
                        'span',
                        null,
                        'Content of button which opens select sticker drop-down. (Default content is \u263a)'
                      )
                    ),
                    L(
                      'div',
                      { className: f.a.paramBig },
                      L(
                        'span',
                        { className: f.a.paramName },
                        'attachRemoveButton'
                      ),
                      L(
                        'span',
                        null,
                        'Flag to attach or detach a remove button to stickers. (Default value is true)'
                      )
                    )
                  ),
                  L(
                    l.a,
                    null,
                    L(b.a, { level: 2 }, 'Simple Example'),
                    L(H, null),
                    L(p.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createStickerPlugin from '@draft-js-plugins/sticker';\nimport editorStyles from './editorStyles.module.css';\nimport stickers from './stickers';\n\nconst stickerPlugin = createStickerPlugin({ stickers });\nconst plugins = [stickerPlugin];\nconst StickerSelect = stickerPlugin.StickerSelect;\n\nexport default class SimpleMentionEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div className={editorStyles.options}>\n          <StickerSelect editor={this} />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleStickerEditor.js',
                    }),
                    L(p.a, {
                      code:
                        "import { fromJS } from 'immutable';\n\nconst stickers = fromJS({\n  data: {\n    'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {\n      id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',\n      url: '../images/unicorn-4.png',\n    },\n    'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {\n      id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',\n      url: '../images/unicorn-1.png',\n    },\n    'e14b5a20-1025-4952-b731-41cd4b118ba0': {\n      id: 'e14b5a20-1025-4952-b731-41cd4b118ba0',\n      url: '../images/unicorn-6.png',\n    },\n    '659a0dbf-5f85-4f32-999d-eb9ba6b0f417': {\n      id: '659a0dbf-5f85-4f32-999d-eb9ba6b0f417',\n      url: '../images/unicorn-2.png',\n    },\n    'fab0ae95-ae95-4775-b484-72c290437602': {\n      id: 'fab0ae95-ae95-4775-b484-72c290437602',\n      url: '../images/unicorn-5.png',\n    },\n    '71853190-8acd-4d3b-b4fd-63f7b0648daa': {\n      id: '71853190-8acd-4d3b-b4fd-63f7b0648daa',\n      url: '../images/unicorn-3.png',\n    },\n  },\n});\n\nexport default stickers;\n",
                      name: 'stickers.js',
                    }),
                    L(p.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  L(
                    l.a,
                    null,
                    L(b.a, { level: 2 }, 'Themed Sticker Example'),
                    L(I, null),
                    L(p.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createStickerPlugin from '@draft-js-plugins/sticker';\nimport editorStyles from './editorStyles.module.css';\nimport stickers from './stickers';\n\nconst stickerPlugin = createStickerPlugin({ stickers });\nconst plugins = [stickerPlugin];\nconst StickerSelect = stickerPlugin.StickerSelect;\n\nexport default class CustomStickerEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div className={editorStyles.options}>\n          <StickerSelect editor={this} />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomStickerEditor.js',
                    }),
                    L(p.a, {
                      code:
                        "import { fromJS } from 'immutable';\n\nconst stickers = fromJS({\n  data: {\n    'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {\n      id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',\n      url: '../images/unicorn-4.png',\n    },\n    'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {\n      id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',\n      url: '../images/unicorn-1.png',\n    },\n    'e14b5a20-1025-4952-b731-41cd4b118ba0': {\n      id: 'e14b5a20-1025-4952-b731-41cd4b118ba0',\n      url: '../images/unicorn-6.png',\n    },\n    '659a0dbf-5f85-4f32-999d-eb9ba6b0f417': {\n      id: '659a0dbf-5f85-4f32-999d-eb9ba6b0f417',\n      url: '../images/unicorn-2.png',\n    },\n    'fab0ae95-ae95-4775-b484-72c290437602': {\n      id: 'fab0ae95-ae95-4775-b484-72c290437602',\n      url: '../images/unicorn-5.png',\n    },\n    '71853190-8acd-4d3b-b4fd-63f7b0648daa': {\n      id: '71853190-8acd-4d3b-b4fd-63f7b0648daa',\n      url: '../images/unicorn-3.png',\n    },\n  },\n});\n\nexport default stickers;\n",
                      name: 'stickers.js',
                    }),
                    L(p.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          a
        );
      })(o.Component);
    },
    '6IWs': function (e, t, a) {
      e.exports = {
        editor: 'editorStyles_editor__3bjTY',
        options: 'editorStyles_options__5EAEg',
      };
    },
    Hr3p: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/sticker',
        function () {
          return a('4fTM');
        },
      ]);
    },
    MYnk: function (e, t, a) {
      e.exports = {
        editor: 'editorStyles_editor__20pPi',
        options: 'editorStyles_options__1mZm7',
      };
    },
    SIvH: function (e, t, a) {
      e.exports = {
        root: 'styles_root__2_VmN',
        param: 'styles_param__3JnfV',
        paramBig: 'styles_paramBig__1zrdO',
        paramName: 'styles_paramName__1cK_0',
        subParams: 'styles_subParams__1-dQ_',
        subParam: 'styles_subParam__3sREl',
        subParamName: 'styles_subParamName__151cm',
        list: 'styles_list__1I60Y',
        listEntry: 'styles_listEntry__3OcUu',
        guideCodeBlock: 'styles_guideCodeBlock__2LCBd',
      };
    },
    Tw9o: function (e, t, a) {
      e.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bsbD: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return d;
      });
      var n = a('ERkP'),
        s = a.n(n),
        r = a('7O4Y'),
        i = (a('U/75'), a('Tw9o')),
        c = a.n(i),
        o = s.a.createElement;
      function d(e) {
        var t = e.code,
          a = e.className,
          n = Object(r.a)(c.a.root, a);
        return o(
          'span',
          { className: n },
          o('code', { dangerouslySetInnerHTML: { __html: t } })
        );
      }
    },
  },
  [['Hr3p', 0, 2, 1, 3, 4, 7]],
]);
