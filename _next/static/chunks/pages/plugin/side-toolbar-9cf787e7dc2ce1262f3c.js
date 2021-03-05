_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [30],
  {
    '24Uf': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return G;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        a = n('8K1b'),
        i = n('K/z8'),
        l = n('sRHE'),
        s = n('ERkP'),
        c = n.n(s),
        u = n('Diez'),
        d = n('9zpB'),
        p = n('YITQ'),
        f = n('LajI'),
        h = n.n(f),
        m = n('lIm4'),
        b = n('bsbD'),
        g = n('pWxA'),
        v = n('zjfJ'),
        y = n('mwv6'),
        S = n('YfPl'),
        E = n('u0mx'),
        w = n.n(E),
        x = c.a.createElement;
      function L(t) {
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
          return Object(i.a)(this, n);
        };
      }
      var k = Object(S.a)(),
        T = k.SideToolbar,
        _ = [k],
        C =
          'Once you click into the text field the sidebar plugin will show up \u2026',
        j = (function (t) {
          Object(a.a)(n, t);
          var e = L(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(C),
              }),
              Object(v.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(g.a)(t), 'focus', function () {
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
                  return x(
                    'div',
                    { className: w.a.editor, onClick: this.focus },
                    x(y.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: _,
                      ref: function (e) {
                        t.editor = e;
                      },
                    }),
                    x(T, null)
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        M = n('KNE6'),
        N = n('6eJQ'),
        O = n.n(N),
        z = n('laLU'),
        P = n.n(z),
        B = n('JL4W'),
        H = n.n(B),
        R = n('zgdE'),
        I = n.n(R),
        D = c.a.createElement;
      function K(t) {
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
          return Object(i.a)(this, n);
        };
      }
      var A = Object(S.a)({
          position: 'right',
          theme: {
            buttonStyles: P.a,
            toolbarStyles: H.a,
            blockTypeSelectStyles: I.a,
          },
        }),
        W = A.SideToolbar,
        U = [A],
        Z =
          'Once you click into the text field the sidebar plugin will show up \u2026',
        V = (function (t) {
          Object(a.a)(n, t);
          var e = K(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(Z),
              }),
              Object(v.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(g.a)(t), 'focus', function () {
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
                  return D(
                    'div',
                    { className: O.a.editor, onClick: this.focus },
                    D(y.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: U,
                      ref: function (e) {
                        t.editor = e;
                      },
                    }),
                    D(W, null, function (t) {
                      return D(
                        'div',
                        null,
                        D(M.i, t),
                        D(M.k, t),
                        D(M.e, t),
                        D(M.g, t)
                      );
                    })
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        q = n('98Mn'),
        F = n('3h/d'),
        J = c.a.createElement;
      function Y(t) {
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
          return Object(i.a)(this, n);
        };
      }
      var G = (function (t) {
        Object(a.a)(n, t);
        var e = Y(n);
        function n() {
          return Object(o.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return J(
                  F.a,
                  null,
                  J(
                    u.a,
                    null,
                    J(p.a, { level: 2 }, 'SideToolbar'),
                    J(p.a, { level: 3 }, 'Supported Environment'),
                    J(
                      'ul',
                      { className: h.a.list },
                      J('li', { className: h.a.listEntry }, 'Desktop: Yes'),
                      J('li', { className: h.a.listEntry }, 'Mobile: No'),
                      J('li', { className: h.a.listEntry }, 'Screen-reader: No')
                    )
                  ),
                  J(
                    d.a,
                    null,
                    J(p.a, { level: 2 }, 'Getting Started'),
                    J(m.a, { code: 'npm install @draft-js-plugins/editor' }),
                    J(m.a, {
                      code: 'npm install @draft-js-plugins/side-toolbar',
                    }),
                    J(m.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst sideToolbarPlugin = createSideToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the sideToolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[sideToolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    J(p.a, { level: 3 }, 'Importing the default styles'),
                    J(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      J(b.a, {
                        code:
                          'node_modules/@draft-js-plugins/side-toolbar/lib/plugin.css',
                      })
                    ),
                    J(p.a, { level: 4 }, 'Webpack Usage'),
                    J(
                      'ul',
                      { className: h.a.list },
                      J(
                        'li',
                        { className: h.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        J(b.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      J(
                        'li',
                        { className: h.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        J(m.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: h.a.guideCodeBlock,
                        })
                      ),
                      J(
                        'li',
                        { className: h.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        J(m.a, {
                          code:
                            "import '@draft-js-plugins/side-toolbar/lib/plugin.css';",
                          className: h.a.guideCodeBlock,
                        })
                      ),
                      J(
                        'li',
                        { className: h.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    J(p.a, { level: 4 }, 'Browserify Usage'),
                    J(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      J(
                        q.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/SideToolbar/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  J(
                    u.a,
                    null,
                    J(p.a, { level: 2 }, 'Configuration Parameters'),
                    J(
                      'div',
                      { className: h.a.param },
                      J('span', { className: h.a.paramName }, 'theme'),
                      J(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      J(
                        'div',
                        { className: h.a.subParams },
                        J(
                          'div',
                          { className: h.a.subParam },
                          J(
                            'span',
                            { className: h.a.subParamName },
                            'buttonStyles:'
                          ),
                          ' CSS class for the buttons.'
                        ),
                        J(
                          'div',
                          { className: h.a.subParam },
                          J(
                            'span',
                            { className: h.a.subParamName },
                            'toolbarStyles:'
                          ),
                          ' CSS class for toolbar.'
                        ),
                        J(
                          'div',
                          { className: h.a.subParam },
                          J(
                            'span',
                            { className: h.a.subParamName },
                            'blockTypeSelectStyles:'
                          ),
                          ' ',
                          'CSS class for the dot.'
                        )
                      )
                    ),
                    J(
                      'div',
                      { className: h.a.paramBig },
                      J('span', { className: h.a.paramName }, 'position'),
                      J(
                        'span',
                        null,
                        'String for the position to be rendered.(Default is left)'
                      )
                    )
                  ),
                  J(
                    u.a,
                    null,
                    J(p.a, { level: 2 }, 'Simple Side Toolbar Example'),
                    J(j, null),
                    J(m.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst sideToolbarPlugin = createSideToolbarPlugin();\nconst { SideToolbar } = sideToolbarPlugin;\nconst plugins = [sideToolbarPlugin];\nconst text =\n  'Once you click into the text field the sidebar plugin will show up \u2026';\n\nexport default class SimpleSideToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <SideToolbar />\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleSideToolbarEditor.js',
                    }),
                    J(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  J(
                    u.a,
                    null,
                    J(p.a, { level: 2 }, 'Custom Side Toolbar Example'),
                    J(V, null),
                    J(m.a, {
                      code:
                        "import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport {\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\n\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\nimport blockTypeSelectStyles from './blockTypeSelectStyles.module.css';\n\n// Setting the side Toolbar at right position(default is left) and styling with custom theme\nconst sideToolbarPlugin = createSideToolbarPlugin({\n  position: 'right',\n  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },\n});\nconst { SideToolbar } = sideToolbarPlugin;\nconst plugins = [sideToolbarPlugin];\nconst text =\n  'Once you click into the text field the sidebar plugin will show up \u2026';\n\nexport default class CustomSideToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <SideToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <HeadlineOneButton {...externalProps} />\n                <HeadlineTwoButton {...externalProps} />\n                <BlockquoteButton {...externalProps} />\n                <CodeBlockButton {...externalProps} />\n              </div>\n            )\n          }\n        </SideToolbar>\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomSideToolbarEditor.js',
                    }),
                    J(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    }),
                    J(m.a, {
                      code:
                        '.wrapper {\n  position: absolute;\n}\n\n.buttonWrapper {\n  display: inline-block;\n}\n\n.button {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.button svg {\n  fill: #ddd;\n}\n\n.button:hover, .button:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.active {\n  color: #6a9cc9;\n}\n\n.active svg {\n  fill: #6a9cc9;\n}\n',
                      name: 'buttonStyles.css',
                    }),
                    J(m.a, {
                      code: '.wrapper {\n  position: absolute;\n}\n',
                      name: 'toolbarStyles.css',
                    }),
                    J(m.a, {
                      code:
                        '.blockType {\n  box-sizing: border-box;\n  border: 1px solid #111;\n  background: #333;\n  padding: 5px;\n  margin: 0;\n  border-radius: 18px;\n  cursor: pointer;\n  height: 36px;\n  width: 36px;\n  line-height: 36px;\n  text-align: center;\n}\n\n.blockType svg {\n  fill: #ddd;\n}\n\n.spacer {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  width: 74px;\n  height: 8px;\n}\n\n.popup {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 3;\n  box-sizing: border-box;\n  width: 74px;\n  margin-top: 8px;\n}\n\n.popup:after, .popup:before {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.popup:after {\n  border-color: rgba(251, 251, 251, 0);\n  border-bottom-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n.popup:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-bottom-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n',
                      name: 'blockTypeSelectStyles.css',
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
    '6eJQ': function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__2KlBN' };
    },
    ENCy: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var o = n('zpdM');
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
          }).apply(this, arguments);
      }
      function a(t) {
        void 0 === t && (t = {});
        var e = t,
          n = {};
        return {
          subscribeToItem: function (t, e) {
            (n[t] = n[t] || []), n[t].push(e);
          },
          unsubscribeFromItem: function (t, e) {
            var o = n[t];
            o &&
              (n[t] = o.filter(function (t) {
                return t !== e;
              }));
          },
          updateItem: function (t, o) {
            var a;
            e = r({}, e, (((a = {})[t] = o), a));
            var i = n[t];
            i &&
              i.forEach(function (n) {
                return n(e[t]);
              });
          },
          getItem: function (t) {
            return e[t];
          },
        };
      }
      var i = {
        decodeOffsetKey: function (t) {
          var e = t.split('-'),
            n = e[0],
            o = e[1],
            r = e[2];
          return {
            blockKey: n,
            decoratorKey: parseInt(o, 10),
            leafKey: parseInt(r, 10),
          };
        },
        createLinkAtSelection: function (t, e) {
          var n = t
              .getCurrentContent()
              .createEntity('LINK', 'MUTABLE', { url: e })
              .getLastCreatedEntityKey(),
            r = o.RichUtils.toggleLink(t, t.getSelection(), n);
          return o.EditorState.forceSelection(r, t.getSelection());
        },
        removeLinkAtSelection: function (t) {
          var e = t.getSelection();
          return o.RichUtils.toggleLink(t, e, null);
        },
        collapseToEnd: function (t) {
          var e = t.getSelection();
          return o.EditorState.forceSelection(
            t,
            e.merge({
              anchorKey: e.getEndKey(),
              focusKey: e.getEndKey(),
              anchorOffset: e.getEndOffset(),
              focusOffset: e.getEndOffset(),
            })
          );
        },
        getCurrentEntityKey: function (t) {
          var e = t.getSelection(),
            n = e.getAnchorKey(),
            o = t.getCurrentContent().getBlockForKey(n),
            r = e.getAnchorOffset(),
            a = e.getIsBackward() ? r - 1 : r;
          return o.getEntityAt(a);
        },
        getCurrentEntity: function (t) {
          var e = t.getCurrentContent(),
            n = this.getCurrentEntityKey(t);
          return n ? e.getEntity(n) : null;
        },
        hasEntity: function (t, e) {
          var n = this.getCurrentEntity(t);
          return Boolean(n && n.getType() === e);
        },
      };
      e.b = i;
    },
    JL4W: function (t, e, n) {
      t.exports = { wrapper: 'toolbarStyles_wrapper__2LkGT' };
    },
    KNE6: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return w;
      }),
        n.d(e, 'b', function () {
          return E;
        }),
        n.d(e, 'c', function () {
          return x;
        }),
        n.d(e, 'd', function () {
          return L;
        }),
        n.d(e, 'e', function () {
          return y;
        }),
        n.d(e, 'f', function () {
          return d;
        }),
        n.d(e, 'g', function () {
          return S;
        }),
        n.d(e, 'h', function () {
          return p;
        }),
        n.d(e, 'i', function () {
          return h;
        }),
        n.d(e, 'j', function () {
          return b;
        }),
        n.d(e, 'k', function () {
          return m;
        }),
        n.d(e, 'l', function () {
          return u;
        }),
        n.d(e, 'm', function () {
          return v;
        }),
        n.d(e, 'n', function () {
          return f;
        }),
        n.d(e, 'o', function () {
          return g;
        });
      var o = n('ERkP'),
        r = n.n(o),
        a = n('zpdM'),
        i = n('7O4Y');
      function l(t) {
        var e = t.blockType,
          n = t.children;
        return function (t) {
          var o = t.theme,
            l = (function () {
              if (!t.getEditorState) return !1;
              var n = t.getEditorState();
              return (
                n
                  .getCurrentContent()
                  .getBlockForKey(n.getSelection().getStartKey())
                  .getType() === e
              );
            })()
              ? Object(i.a)(o.button, o.active)
              : o.button;
          return r.a.createElement(
            'div',
            {
              className: o.buttonWrapper,
              onMouseDown: function (t) {
                t.preventDefault();
              },
            },
            r.a.createElement('button', {
              className: l,
              onClick: function (n) {
                n.preventDefault(),
                  t.setEditorState(
                    a.RichUtils.toggleBlockType(t.getEditorState(), e)
                  );
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      function s(t) {
        var e = t.style,
          n = t.children;
        return function (t) {
          var o = t.theme,
            l =
              t.getEditorState &&
              t.getEditorState().getCurrentInlineStyle().has(e)
                ? Object(i.a)(o.button, o.active)
                : o.button;
          return r.a.createElement(
            'div',
            {
              className: o.buttonWrapper,
              onMouseDown: function (t) {
                t.preventDefault();
              },
            },
            r.a.createElement('button', {
              className: l,
              onClick: function (n) {
                n.preventDefault(),
                  t.setEditorState(
                    a.RichUtils.toggleInlineStyle(t.getEditorState(), e)
                  );
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      function c(t) {
        var e = t.alignment,
          n = t.children;
        return function (t) {
          var o = t.theme,
            a = t.alignment === e ? Object(i.a)(o.button, o.active) : o.button;
          return r.a.createElement(
            'div',
            {
              className: o.buttonWrapper,
              onMouseDown: function (t) {
                t.preventDefault();
              },
            },
            r.a.createElement('button', {
              className: a,
              onClick: function (n) {
                n.preventDefault(), t.setAlignment({ alignment: e });
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      var u = s({
          style: 'ITALIC',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            r.a.createElement('path', {
              d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
            })
          ),
        }),
        d = s({
          style: 'BOLD',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        p = s({
          style: 'CODE',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            r.a.createElement('path', {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            })
          ),
        }),
        f = s({
          style: 'UNDERLINE',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            r.a.createElement('path', {
              d:
                'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
            })
          ),
        }),
        h = l({ blockType: 'header-one', children: 'H1' }),
        m = l({ blockType: 'header-two', children: 'H2' }),
        b = l({ blockType: 'header-three', children: 'H3' }),
        g = l({
          blockType: 'unordered-list-item',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
          ),
        }),
        v = l({
          blockType: 'ordered-list-item',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        y = l({
          blockType: 'blockquote',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        S = l({
          blockType: 'code-block',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            r.a.createElement('path', {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            })
          ),
        }),
        E = c({
          alignment: 'default',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        w = c({
          alignment: 'center',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        x = c({
          alignment: 'left',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        L = c({
          alignment: 'right',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        });
      s({
        style: 'SUBSCRIPT',
        children: r.a.createElement(
          'div',
          null,
          'x',
          r.a.createElement('sub', null, '2')
        ),
      }),
        s({
          style: 'SUPERSCRIPT',
          children: r.a.createElement(
            'div',
            null,
            'x',
            r.a.createElement('sup', null, '2')
          ),
        });
    },
    LajI: function (t, e, n) {
      t.exports = {
        root: 'styles_root__1GkQx',
        param: 'styles_param__pgi6M',
        paramName: 'styles_paramName__WNHM3',
        subParams: 'styles_subParams__Bdtmu',
        subParam: 'styles_subParam__2RMg6',
        subParamName: 'styles_subParamName__1pmId',
        list: 'styles_list__1tweK',
        listEntry: 'styles_listEntry__2l3Uf',
        guideCodeBlock: 'styles_guideCodeBlock__8QD-U',
      };
    },
    Tw9o: function (t, e, n) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    YfPl: function (t, e, n) {
      'use strict';
      var o = n('ERkP'),
        r = n.n(o),
        a = n('ENCy'),
        i = n('aWzz'),
        l = n.n(i),
        s = n('b//S'),
        c = n.n(s),
        u = n('KNE6');
      function d() {
        return (d =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
          }).apply(this, arguments);
      }
      function p(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          f(t, e);
      }
      function f(t, e) {
        return (f =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var h = (function (t) {
        function e() {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(o)) || this).state = {
              style: { transform: 'translate(-50%) scale(0)' },
            }),
            (e.onMouseEnter = function () {
              e.setState({
                style: {
                  transform: 'translate(-50%) scale(1)',
                  transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                },
              });
            }),
            (e.onMouseLeave = function () {
              e.setState({ style: { transform: 'translate(-50%) scale(0)' } });
            }),
            (e.onMouseDown = function (t) {
              t.preventDefault(), t.stopPropagation();
            }),
            e
          );
        }
        return (
          p(e, t),
          (e.prototype.render = function () {
            var t,
              e,
              n,
              o = this.props,
              a = o.theme,
              i = o.getEditorState,
              l = o.setEditorState;
            return r.a.createElement(
              'div',
              {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onMouseDown: this.onMouseDown,
              },
              r.a.createElement(
                'div',
                {
                  className:
                    null == (t = a.blockTypeSelectStyles)
                      ? void 0
                      : t.blockType,
                },
                r.a.createElement(
                  'svg',
                  {
                    height: '24',
                    viewBox: '0 0 24 24',
                    width: '24',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  r.a.createElement('path', {
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  r.a.createElement('path', {
                    d:
                      'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
                  })
                )
              ),
              r.a.createElement('div', {
                className:
                  null == (e = a.blockTypeSelectStyles) ? void 0 : e.spacer,
              }),
              r.a.createElement(
                'div',
                {
                  className:
                    null == (n = a.blockTypeSelectStyles) ? void 0 : n.popup,
                  style: this.state.style,
                },
                this.props.childNodes({
                  getEditorState: i,
                  setEditorState: l,
                  theme: a.buttonStyles,
                })
              )
            );
          }),
          e
        );
      })(o.Component);
      h.propTypes = { childNodes: l.a.func };
      var m = (function (t) {
        function e() {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(o)) || this).state = {
              position: { transform: 'scale(0)' },
            }),
            (e.onEditorStateChange = function (t) {
              var n = t.getSelection();
              if (n.getHasFocus()) {
                var o = t.getCurrentContent().getBlockForKey(n.getStartKey()),
                  r = c.a.encode(o.getKey(), 0, 0);
                setTimeout(function () {
                  var t = document.querySelectorAll(
                      '[data-offset-key="' + r + '"]'
                    )[0],
                    n = e.props.store.getItem('getEditorRef')();
                  if (n) {
                    for (
                      var o =
                        n.refs && n.refs.editor ? n.refs.editor : n.editor;
                      -1 === o.className.indexOf('DraftEditor-root');

                    )
                      o = o.parentNode;
                    var a = {
                      top: t.offsetTop + o.offsetTop,
                      transform: 'scale(1)',
                      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                    };
                    'right' === e.props.position
                      ? (a.left = o.offsetLeft + o.offsetWidth + 80 - 36)
                      : (a.left = o.offsetLeft - 80),
                      e.setState({ position: a });
                  }
                }, 0);
              } else e.setState({ position: { transform: 'scale(0)' } });
            }),
            e
          );
        }
        p(e, t);
        var n = e.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.store.subscribeToItem(
              'editorState',
              this.onEditorStateChange
            );
          }),
          (n.componentWillUnmount = function () {
            this.props.store.unsubscribeFromItem(
              'editorState',
              this.onEditorStateChange
            );
          }),
          (n.render = function () {
            var t,
              e = this.props,
              n = e.theme,
              o = e.store;
            return r.a.createElement(
              'div',
              {
                className: null == (t = n.toolbarStyles) ? void 0 : t.wrapper,
                style: this.state.position,
              },
              r.a.createElement(h, {
                getEditorState: o.getItem('getEditorState'),
                setEditorState: o.getItem('setEditorState'),
                theme: n,
                childNodes: this.props.children,
              })
            );
          }),
          e
        );
      })(r.a.Component);
      (m.defaultProps = {
        children: function (t) {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(u.i, t),
            r.a.createElement(u.k, t),
            r.a.createElement(u.e, t),
            r.a.createElement(u.g, t),
            r.a.createElement(u.o, t),
            r.a.createElement(u.m, t)
          );
        },
      }),
        (m.propTypes = { children: l.a.func });
      var b = {
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
      e.a = function (t) {
        void 0 === t && (t = {});
        var e = Object(a.a)({ isVisible: !1 }),
          n = t,
          o = n.position,
          i = void 0 === o ? 'left' : o,
          l = n.theme,
          s = void 0 === l ? b : l;
        return {
          initialize: function (t) {
            var n = t.setEditorState,
              o = t.getEditorState,
              r = t.getEditorRef;
            e.updateItem('getEditorState', o),
              e.updateItem('setEditorState', n),
              e.updateItem('getEditorRef', r);
          },
          onChange: function (t) {
            return e.updateItem('editorState', t), t;
          },
          SideToolbar: function (t) {
            return r.a.createElement(
              m,
              d({}, t, { store: e, theme: s, position: i })
            );
          },
        };
      };
    },
    bsbD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var o = n('ERkP'),
        r = n.n(o),
        a = n('7O4Y'),
        i = (n('U/75'), n('Tw9o')),
        l = n.n(i),
        s = r.a.createElement;
      function c(t) {
        var e = t.code,
          n = t.className,
          o = Object(a.a)(l.a.root, n);
        return s(
          'span',
          { className: o },
          s('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    'ff+6': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/side-toolbar',
        function () {
          return n('24Uf');
        },
      ]);
    },
    laLU: function (t, e, n) {
      t.exports = {
        wrapper: 'buttonStyles_wrapper__byQmW',
        buttonWrapper: 'buttonStyles_buttonWrapper__VOCR8',
        button: 'buttonStyles_button__3A8gv',
        active: 'buttonStyles_active__366Lx',
      };
    },
    u0mx: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__2MPoa' };
    },
    zgdE: function (t, e, n) {
      t.exports = {
        blockType: 'blockTypeSelectStyles_blockType__39X7i',
        spacer: 'blockTypeSelectStyles_spacer__ay6AG',
        popup: 'blockTypeSelectStyles_popup__1cGqO',
      };
    },
  },
  [['ff+6', 0, 2, 1, 3, 4]],
]);
