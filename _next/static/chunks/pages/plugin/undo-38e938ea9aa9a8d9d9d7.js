_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [33],
  {
    '8T1u': function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/undo',
        function () {
          return e('Ipwy');
        },
      ]);
    },
    '9u7h': function (t, n, e) {
      t.exports = {
        editor: 'editorStyles_editor__1kHXi',
        options: 'editorStyles_options__34ppv',
      };
    },
    Dvg3: function (t, n, e) {
      t.exports = {
        editor: 'editorStyles_editor__zt7ek',
        options: 'editorStyles_options__3lVqc',
      };
    },
    Ipwy: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'default', function () {
          return V;
        });
      var o = e('9fIP'),
        r = e('MMYH'),
        a = e('8K1b'),
        s = e('K/z8'),
        i = e('sRHE'),
        l = e('ERkP'),
        c = e.n(l),
        d = e('Diez'),
        u = e('9zpB'),
        p = e('YITQ'),
        m = e('xVyG'),
        f = e.n(m),
        b = e('lIm4'),
        h = e('pWxA'),
        g = e('zjfJ'),
        y = e('zpdM'),
        v = e('mwv6'),
        S = e('l/ED'),
        E = e('Dvg3'),
        _ = e.n(E),
        j = c.a.createElement;
      function C(t) {
        var n = (function () {
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
          var e,
            o = Object(i.a)(t);
          if (n) {
            var r = Object(i.a)(this).constructor;
            e = Reflect.construct(o, arguments, r);
          } else e = o.apply(this, arguments);
          return Object(s.a)(this, e);
        };
      }
      var x = Object(S.a)(),
        N = x.UndoButton,
        O = x.RedoButton,
        P = [x],
        k = (function (t) {
          Object(a.a)(e, t);
          var n = C(e);
          function e() {
            var t;
            Object(o.a)(this, e);
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
              a[s] = arguments[s];
            return (
              (t = n.call.apply(n, [this].concat(a))),
              Object(g.a)(Object(h.a)(t), 'state', {
                editorState: y.EditorState.createEmpty(),
              }),
              Object(g.a)(Object(h.a)(t), 'onChange', function (n) {
                t.setState({ editorState: n });
              }),
              Object(g.a)(Object(h.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(e, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return j(
                    'div',
                    null,
                    j(
                      'div',
                      { className: _.a.editor, onClick: this.focus },
                      j(v.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: P,
                        ref: function (n) {
                          t.editor = n;
                        },
                      })
                    ),
                    j('div', { className: _.a.options }, j(N, null), j(O, null))
                  );
                },
              },
            ]),
            e
          );
        })(l.Component),
        R = e('9u7h'),
        w = e.n(R),
        B = e('JGS9'),
        U = e.n(B),
        D = c.a.createElement;
      function z(t) {
        var n = (function () {
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
          var e,
            o = Object(i.a)(t);
          if (n) {
            var r = Object(i.a)(this).constructor;
            e = Reflect.construct(o, arguments, r);
          } else e = o.apply(this, arguments);
          return Object(s.a)(this, e);
        };
      }
      var A = { undo: U.a.button, redo: U.a.button },
        I = Object(S.a)({ undoContent: 'Undo', redoContent: 'Redo', theme: A }),
        T = I.UndoButton,
        M = I.RedoButton,
        W = [I],
        Y = (function (t) {
          Object(a.a)(e, t);
          var n = z(e);
          function e() {
            var t;
            Object(o.a)(this, e);
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
              a[s] = arguments[s];
            return (
              (t = n.call.apply(n, [this].concat(a))),
              Object(g.a)(Object(h.a)(t), 'state', {
                editorState: y.EditorState.createEmpty(),
              }),
              Object(g.a)(Object(h.a)(t), 'onChange', function (n) {
                t.setState({ editorState: n });
              }),
              Object(g.a)(Object(h.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(e, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return D(
                    'div',
                    null,
                    D(
                      'div',
                      { className: w.a.editor, onClick: this.focus },
                      D(v.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: W,
                        ref: function (n) {
                          t.editor = n;
                        },
                      })
                    ),
                    D('div', { className: w.a.options }, D(T, null), D(M, null))
                  );
                },
              },
            ]),
            e
          );
        })(l.Component),
        G = e('98Mn'),
        q = e('bsbD'),
        J = e('3h/d'),
        F = c.a.createElement;
      function H(t) {
        var n = (function () {
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
          var e,
            o = Object(i.a)(t);
          if (n) {
            var r = Object(i.a)(this).constructor;
            e = Reflect.construct(o, arguments, r);
          } else e = o.apply(this, arguments);
          return Object(s.a)(this, e);
        };
      }
      var V = (function (t) {
        Object(a.a)(e, t);
        var n = H(e);
        function e() {
          return Object(o.a)(this, e), n.apply(this, arguments);
        }
        return (
          Object(r.a)(e, [
            {
              key: 'render',
              value: function () {
                return F(
                  J.a,
                  null,
                  F(
                    d.a,
                    null,
                    F(p.a, { level: 2 }, 'Undo/Redo'),
                    F(p.a, { level: 3 }, 'Supported Environment'),
                    F(
                      'ul',
                      { className: f.a.list },
                      F('li', { className: f.a.listEntry }, 'Desktop: Yes'),
                      F('li', { className: f.a.listEntry }, 'Mobile: Yes'),
                      F(
                        'li',
                        { className: f.a.listEntry },
                        'Screen-reader: Yes'
                      )
                    )
                  ),
                  F(
                    u.a,
                    null,
                    F(p.a, { level: 2 }, 'Getting Started'),
                    F(b.a, { code: 'npm install @draft-js-plugins/editor' }),
                    F(b.a, { code: 'npm install @draft-js-plugins/undo' }),
                    F(b.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createUndoPlugin from '@draft-js-plugins/undo';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst undoPlugin = createUndoPlugin();\nconst { UndoButton, RedoButton } = undoPlugin;\n\n// The Editor accepts an array of plugins. In this case, only the undoPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <div>\n    <Editor\n      editorState={editorState}\n      onChange={onChange}\n      plugins={[undoPlugin]}\n    />\n    <UndoButton />\n    <RedoButton />\n  </div>\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    F(p.a, { level: 3 }, 'Importing the default styles'),
                    F(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      F(q.a, {
                        code:
                          'node_modules/@draft-js-plugins/undo/lib/plugin.css',
                      })
                    ),
                    F(p.a, { level: 4 }, 'Webpack Usage'),
                    F(
                      'ul',
                      { className: f.a.list },
                      F(
                        'li',
                        { className: f.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        F(q.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      F(
                        'li',
                        { className: f.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        F(b.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      F(
                        'li',
                        { className: f.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        F(b.a, {
                          code:
                            "import '@draft-js-plugins/undo/lib/plugin.css';",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      F(
                        'li',
                        { className: f.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    F(p.a, { level: 4 }, 'Browserify Usage'),
                    F(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      F(
                        G.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Undo/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  F(
                    d.a,
                    null,
                    F(p.a, { level: 2 }, 'Configuration Parameters'),
                    F(
                      'div',
                      { className: f.a.param },
                      F('span', { className: f.a.paramName }, 'theme'),
                      F(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      F(
                        'div',
                        { className: f.a.subParams },
                        F(
                          'div',
                          { className: f.a.subParam },
                          F('span', { className: f.a.subParamName }, 'undo:'),
                          ' CSS class to be applied to undo button.'
                        ),
                        F(
                          'div',
                          { className: f.a.subParam },
                          F('span', { className: f.a.subParamName }, 'redo:'),
                          ' CSS class to be applied to redo button.'
                        )
                      )
                    ),
                    F(
                      'div',
                      { className: f.a.param },
                      F('span', { className: f.a.paramName }, 'undoContent'),
                      F(
                        'span',
                        null,
                        'Content of undo button. (Default content is \u21ba)'
                      )
                    ),
                    F(
                      'div',
                      { className: f.a.param },
                      F('span', { className: f.a.paramName }, 'redoContent'),
                      F(
                        'span',
                        null,
                        'Content of redo button. (Default content is \u21bb)'
                      )
                    )
                  ),
                  F(
                    d.a,
                    null,
                    F(p.a, { level: 2 }, 'Simple Example'),
                    F(k, null),
                    F(b.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createUndoPlugin from '@draft-js-plugins/undo';\nimport editorStyles from './editorStyles.module.css';\n\nconst undoPlugin = createUndoPlugin();\nconst { UndoButton, RedoButton } = undoPlugin;\nconst plugins = [undoPlugin];\n\nexport default class SimpleUndoEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div className={editorStyles.options}>\n          <UndoButton />\n          <RedoButton />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleUndoEditor.js',
                    }),
                    F(b.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  F(
                    d.a,
                    null,
                    F(p.a, { level: 2 }, 'Themed Undo/Redo Example'),
                    F(Y, null),
                    F(b.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createUndoPlugin from '@draft-js-plugins/undo';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\n\nconst theme = {\n  undo: buttonStyles.button,\n  redo: buttonStyles.button,\n};\nconst undoPlugin = createUndoPlugin({\n  undoContent: 'Undo',\n  redoContent: 'Redo',\n  theme,\n});\nconst { UndoButton, RedoButton } = undoPlugin;\nconst plugins = [undoPlugin];\n\nexport default class CustomUndoEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div className={editorStyles.options}>\n          <UndoButton />\n          <RedoButton />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomUndoEditor.js',
                    }),
                    F(b.a, {
                      code:
                        '.button {\n  border: 1px solid #bbb;\n  height: 40px;\n  color: #888;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative;\n  background-color: #fff;\n  margin-right: 10px;\n}\n\n.button:focus {\n  background-color: #eee;\n  color: #999;\n  outline: 0; /* reset for :focus */\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #999;\n}\n\n.button:active {\n  background-color: #ddd;\n  color: #777;\n}\n\n.button:disabled {\n  background-color: #F5F5F5;\n  color: #ccc;\n}\n',
                      name: 'buttonStyles.css',
                    }),
                    F(b.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          e
        );
      })(l.Component);
    },
    JGS9: function (t, n, e) {
      t.exports = { button: 'buttonStyles_button__3Jf9D' };
    },
    Tw9o: function (t, n, e) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bsbD: function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return c;
      });
      var o = e('ERkP'),
        r = e.n(o),
        a = e('7O4Y'),
        s = (e('U/75'), e('Tw9o')),
        i = e.n(s),
        l = r.a.createElement;
      function c(t) {
        var n = t.code,
          e = t.className,
          o = Object(a.a)(i.a.root, e);
        return l(
          'span',
          { className: o },
          l('code', { dangerouslySetInnerHTML: { __html: n } })
        );
      }
    },
    'l/ED': function (t, n, e) {
      'use strict';
      var o = e('ERkP'),
        r = e.n(o),
        a = e('aWzz'),
        s = e.n(a),
        i = e('zpdM'),
        l = e('7O4Y');
      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            }
            return t;
          }).apply(this, arguments);
      }
      function d(t, n) {
        (t.prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          u(t, n);
      }
      function u(t, n) {
        return (u =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      var p = (function (t) {
        function n() {
          for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++)
            o[r] = arguments[r];
          return (
            ((n =
              t.call.apply(t, [this].concat(o)) || this).onClick = function (
              t
            ) {
              t.stopPropagation(),
                n.props.store.setEditorState(
                  i.EditorState.undo(n.props.store.getEditorState())
                );
            }),
            n
          );
        }
        return (
          d(n, t),
          (n.prototype.render = function () {
            var t = this.props,
              n = t.theme,
              e = void 0 === n ? {} : n,
              o = t.children,
              a = t.className,
              s = Object(l.a)(e.undo, a);
            return r.a.createElement(
              'button',
              {
                disabled:
                  !this.props.store ||
                  !this.props.store.getEditorState ||
                  this.props.store.getEditorState().getUndoStack().isEmpty(),
                type: 'button',
                onClick: this.onClick,
                className: s,
              },
              o
            );
          }),
          n
        );
      })(o.Component);
      p.propTypes = { children: s.a.node.isRequired, theme: s.a.any };
      var m = (function (t) {
        function n() {
          for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++)
            o[r] = arguments[r];
          return (
            ((n =
              t.call.apply(t, [this].concat(o)) || this).onClick = function (
              t
            ) {
              t.stopPropagation(),
                n.props.store.setEditorState(
                  i.EditorState.redo(n.props.store.getEditorState())
                );
            }),
            n
          );
        }
        return (
          d(n, t),
          (n.prototype.render = function () {
            var t = this.props,
              n = t.theme,
              e = void 0 === n ? {} : n,
              o = t.children,
              a = t.className,
              s = Object(l.a)(e.redo, a);
            return r.a.createElement(
              'button',
              {
                disabled:
                  !this.props.store ||
                  !this.props.store.getEditorState ||
                  this.props.store.getEditorState().getRedoStack().isEmpty(),
                type: 'button',
                onClick: this.onClick,
                className: s,
              },
              o
            );
          }),
          n
        );
      })(o.Component);
      m.propTypes = { children: s.a.node.isRequired, theme: s.a.any };
      var f = 'b1lh9taq',
        b = { redo: f, undo: f };
      n.a = function (t) {
        void 0 === t && (t = {});
        var n = t.undoContent ? t.undoContent : '\u21ba',
          e = t.redoContent ? t.redoContent : '\u21bb',
          o = { getEditorState: void 0, setEditorState: void 0 },
          a = t.theme ? t.theme : b;
        return {
          UndoButton: function (t) {
            return r.a.createElement(p, c({}, t, { theme: a, store: o }), n);
          },
          RedoButton: function (t) {
            return r.a.createElement(m, c({}, t, { theme: a, store: o }), e);
          },
          initialize: function (t) {
            var n = t.getEditorState,
              e = t.setEditorState;
            (o.getEditorState = n), (o.setEditorState = e);
          },
        };
      };
    },
    xVyG: function (t, n, e) {
      t.exports = {
        root: 'styles_root__2WX-F',
        param: 'styles_param__101zg',
        paramName: 'styles_paramName__zQP4M',
        subParams: 'styles_subParams__Lrbp8',
        subParam: 'styles_subParam__1VNGW',
        subParamName: 'styles_subParamName__1hrfI',
        list: 'styles_list__3y1gc',
        listEntry: 'styles_listEntry__37ptC',
        guideCodeBlock: 'styles_guideCodeBlock__YrEqa',
      };
    },
  },
  [['8T1u', 0, 2, 1, 3, 4]],
]);
