_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [31],
  {
    '0/1d': function (t, e, n) {
      t.exports = {
        editor: 'editorStyles_editor__dnmvQ',
        headlineButtonWrapper: 'editorStyles_headlineButtonWrapper__2jaYK',
        headlineButton: 'editorStyles_headlineButton__1kO9q',
      };
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
    HwPV: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return ft;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        a = n('8K1b'),
        i = n('K/z8'),
        l = n('sRHE'),
        c = n('ERkP'),
        s = n.n(c),
        u = n('Diez'),
        d = n('9zpB'),
        p = n('YITQ'),
        h = n('clgL'),
        f = n.n(h),
        m = n('lIm4'),
        b = n('bsbD'),
        g = n('pWxA'),
        v = n('zjfJ'),
        y = n('mwv6'),
        E = n('ENCy'),
        x = n('KNE6'),
        w = n('aWzz'),
        S = n.n(w);
      function C() {
        return (C =
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
      function L(t, e) {
        return (L =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var j = (function (t) {
        var e, n;
        function o() {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(o)) || this).state = {
              overrideContent: void 0,
            }),
            (e.onOverrideContent = function (t) {
              return e.setState({ overrideContent: t });
            }),
            (e.renderDefaultButtons = function (t) {
              return s.a.createElement(
                'div',
                null,
                s.a.createElement(x.l, t),
                s.a.createElement(x.f, t),
                s.a.createElement(x.n, t),
                s.a.createElement(x.h, t)
              );
            }),
            e
          );
        }
        return (
          (n = t),
          ((e = o).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          L(e, n),
          (o.prototype.render = function () {
            var t = this.props,
              e = t.theme,
              n = t.store,
              o = this.state.overrideContent,
              r = {
                theme: e.buttonStyles,
                getEditorState: n.getItem('getEditorState'),
                setEditorState: n.getItem('setEditorState'),
                onOverrideContent: this.onOverrideContent,
              };
            return s.a.createElement(
              'div',
              { className: e.toolbarStyles.toolbar },
              o
                ? s.a.createElement(o, r)
                : (this.props.children || this.renderDefaultButtons)(r)
            );
          }),
          o
        );
      })(s.a.Component);
      j.propTypes = { children: S.a.func };
      function O(t) {
        var e = t.className,
          n = void 0 === e ? 's6m29i4' : e;
        return s.a.createElement('div', { className: n });
      }
      var k = {
          buttonStyles: {
            buttonWrapper: 'bi09khh',
            button: 'bc4rxid',
            active: 'akzb7t5',
          },
          toolbarStyles: { toolbar: 't16lpgj' },
        },
        B = function (t) {
          void 0 === t && (t = {});
          var e = Object(E.a)(),
            n = t.theme,
            o = void 0 === n ? k : n;
          return {
            initialize: function (t) {
              var n = t.getEditorState,
                o = t.setEditorState;
              e.updateItem('getEditorState', n),
                e.updateItem('setEditorState', o);
            },
            onChange: function (t) {
              return e.updateItem('selection', t.getSelection()), t;
            },
            Toolbar: function (t) {
              return s.a.createElement(j, C({}, t, { store: e, theme: o }));
            },
          };
        },
        T = n('fTKg'),
        _ = n.n(T),
        P = s.a.createElement;
      function z(t) {
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
      var M = B(),
        N = M.Toolbar,
        H = [M],
        R =
          'The toolbar above the editor can be used for formatting text, as in conventional static editors  \u2026',
        W = (function (t) {
          Object(a.a)(n, t);
          var e = z(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(R),
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
                  return P(
                    'div',
                    null,
                    P(
                      'div',
                      { className: _.a.editor, onClick: this.focus },
                      P(y.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: H,
                        ref: function (e) {
                          t.editor = e;
                        },
                      }),
                      P(N, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        I = n('cxan'),
        D = n('0/1d'),
        A = n.n(D),
        K = s.a.createElement;
      function Z(t) {
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
      var U = (function (t) {
          Object(a.a)(n, t);
          var e = Z(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'onWindowClick', function () {
                return t.props.onOverrideContent(void 0);
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    window.addEventListener('click', t.onWindowClick);
                  });
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('click', this.onWindowClick);
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = [x.i, x.k, x.j];
                  return K(
                    'div',
                    null,
                    e.map(function (e, n) {
                      return K(e, Object(I.a)({ key: n }, t.props));
                    })
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        V = (function (t) {
          Object(a.a)(n, t);
          var e = Z(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'onClick', function () {
                return t.props.onOverrideContent(U);
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  return K(
                    'div',
                    { className: A.a.headlineButtonWrapper },
                    K(
                      'button',
                      { onClick: this.onClick, className: A.a.headlineButton },
                      'H'
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        q = B(),
        F = q.Toolbar,
        Y = [q],
        J =
          'In this editor a toolbar shows up once you select part of the text \u2026',
        G = (function (t) {
          Object(a.a)(n, t);
          var e = Z(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(J),
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
                  return K(
                    'div',
                    null,
                    K(
                      'div',
                      { className: A.a.editor, onClick: this.focus },
                      K(y.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: Y,
                        ref: function (e) {
                          t.editor = e;
                        },
                      }),
                      K(F, null, function (t) {
                        return K(
                          'div',
                          null,
                          K(x.f, t),
                          K(x.l, t),
                          K(x.n, t),
                          K(x.h, t),
                          K(O, t),
                          K(V, t),
                          K(x.o, t),
                          K(x.m, t),
                          K(x.e, t),
                          K(x.g, t)
                        );
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        X = n('WN8k'),
        Q = n.n(X),
        $ = n('esrK'),
        tt = n.n($),
        et = n('fzAv'),
        nt = n.n(et),
        ot = s.a.createElement;
      function rt(t) {
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
      var at = B({ theme: { buttonStyles: tt.a, toolbarStyles: nt.a } }),
        it = at.Toolbar,
        lt = [at],
        ct =
          'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026',
        st = (function (t) {
          Object(a.a)(n, t);
          var e = rt(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(ct),
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
                  return ot(
                    'div',
                    null,
                    ot(
                      'div',
                      { className: Q.a.editor, onClick: this.focus },
                      ot(y.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: lt,
                        ref: function (e) {
                          t.editor = e;
                        },
                      }),
                      ot(it, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        ut = n('98Mn'),
        dt = n('3h/d'),
        pt = s.a.createElement;
      function ht(t) {
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
      var ft = (function (t) {
        Object(a.a)(n, t);
        var e = ht(n);
        function n() {
          return Object(o.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return pt(
                  dt.a,
                  null,
                  pt(
                    u.a,
                    null,
                    pt(p.a, { level: 2 }, 'Toolbar'),
                    pt(p.a, { level: 3 }, 'Supported Environment'),
                    pt(
                      'ul',
                      { className: f.a.list },
                      pt('li', { className: f.a.listEntry }, 'Desktop: Yes'),
                      pt('li', { className: f.a.listEntry }, 'Mobile: No'),
                      pt(
                        'li',
                        { className: f.a.listEntry },
                        'Screen-reader: No'
                      )
                    )
                  ),
                  pt(
                    d.a,
                    null,
                    pt(p.a, { level: 2 }, 'Getting Started'),
                    pt(m.a, { code: 'npm install @draft-js-plugins/editor' }),
                    pt(m.a, {
                      code: 'npm install @draft-js-plugins/static-toolbar',
                    }),
                    pt(m.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst toolbarPlugin = createToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the toolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[toolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    pt(p.a, { level: 3 }, 'Importing the default styles'),
                    pt(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      pt(b.a, {
                        code:
                          'node_modules/@draft-js-plugins/tatic-toolbar/lib/plugin.css',
                      })
                    ),
                    pt(p.a, { level: 4 }, 'Webpack Usage'),
                    pt(
                      'ul',
                      { className: f.a.list },
                      pt(
                        'li',
                        { className: f.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        pt(b.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      pt(
                        'li',
                        { className: f.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        pt(m.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      pt(
                        'li',
                        { className: f.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        pt(m.a, {
                          code:
                            "import '@draft-js-plugins/static-toolbar/lib/plugin.css';",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      pt(
                        'li',
                        { className: f.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    pt(p.a, { level: 4 }, 'Browserify Usage'),
                    pt(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      pt(
                        ut.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Toolbar/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  pt(
                    u.a,
                    null,
                    pt(p.a, { level: 2 }, 'Simple Static Toolbar Example'),
                    pt(W, null),
                    pt(m.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst staticToolbarPlugin = createToolbarPlugin();\nconst { Toolbar } = staticToolbarPlugin;\nconst plugins = [staticToolbarPlugin];\nconst text =\n  'The toolbar above the editor can be used for formatting text, as in conventional static editors  \u2026';\n\nexport default class SimpleStaticToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleToolbarEditor.js',
                    }),
                    pt(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  pt(
                    u.a,
                    null,
                    pt(p.a, { level: 2 }, 'Custom Static Toolbar Example'),
                    pt(G, null),
                    pt(m.a, {
                      code:
                        "/* eslint-disable react/no-multi-comp */\nimport React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createToolbarPlugin, {\n  Separator,\n} from '@draft-js-plugins/static-toolbar';\nimport {\n  ItalicButton,\n  BoldButton,\n  UnderlineButton,\n  CodeButton,\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  HeadlineThreeButton,\n  UnorderedListButton,\n  OrderedListButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\nimport editorStyles from './editorStyles.module.css';\n\nclass HeadlinesPicker extends Component {\n  componentDidMount() {\n    setTimeout(() => {\n      window.addEventListener('click', this.onWindowClick);\n    });\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onWindowClick);\n  }\n\n  onWindowClick = () =>\n    // Call `onOverrideContent` again with `undefined`\n    // so the toolbar can show its regular content again.\n    this.props.onOverrideContent(undefined);\n\n  render() {\n    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];\n    return (\n      <div>\n        {buttons.map((Button, i) => (\n          // eslint-disable-next-line\n          <Button key={i} {...this.props} />\n        ))}\n      </div>\n    );\n  }\n}\n\nclass HeadlinesButton extends Component {\n  onClick = () =>\n    // A button can call `onOverrideContent` to replace the content\n    // of the toolbar. This can be useful for displaying sub\n    // menus or requesting additional information from the user.\n    this.props.onOverrideContent(HeadlinesPicker);\n\n  render() {\n    return (\n      <div className={editorStyles.headlineButtonWrapper}>\n        <button onClick={this.onClick} className={editorStyles.headlineButton}>\n          H\n        </button>\n      </div>\n    );\n  }\n}\n\nconst toolbarPlugin = createToolbarPlugin();\nconst { Toolbar } = toolbarPlugin;\nconst plugins = [toolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class CustomToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar>\n            {\n              // may be use React.Fragment instead of div to improve perfomance after React 16\n              (externalProps) => (\n                <div>\n                  <BoldButton {...externalProps} />\n                  <ItalicButton {...externalProps} />\n                  <UnderlineButton {...externalProps} />\n                  <CodeButton {...externalProps} />\n                  <Separator {...externalProps} />\n                  <HeadlinesButton {...externalProps} />\n                  <UnorderedListButton {...externalProps} />\n                  <OrderedListButton {...externalProps} />\n                  <BlockquoteButton {...externalProps} />\n                  <CodeBlockButton {...externalProps} />\n                </div>\n              )\n            }\n          </Toolbar>\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomToolbarEditor.js',
                    }),
                    pt(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.headlineButtonWrapper {\n  display: inline-block;\n}\n\n.headlineButton {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.headlineButton:hover,\n.headlineButton:focus {\n  background: #f3f3f3;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  pt(
                    u.a,
                    null,
                    pt(p.a, { level: 2 }, 'Themed Static Toolbar Example'),
                    pt(st, null),
                    pt(m.a, {
                      code:
                        "import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\n\nconst toolbarPlugin = createToolbarPlugin({\n  theme: { buttonStyles, toolbarStyles },\n});\nconst { Toolbar } = toolbarPlugin;\nconst plugins = [toolbarPlugin];\nconst text =\n  'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026';\n\nexport default class ThemedToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'ThemedToolbarEditor.js',
                    }),
                    pt(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    }),
                    pt(m.a, {
                      code:
                        '.buttonWrapper {\n  display: inline-block;\n}\n\n.button {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.button svg {\n  fill: #ddd;\n}\n\n.button:hover, .button:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.active {\n  color: #6a9cc9;\n}\n\n.active svg {\n  fill: #6a9cc9;\n}\n',
                      name: 'buttonStyles.css',
                    }),
                    pt(m.a, {
                      code:
                        '.toolbar {\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.toolbar:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.toolbar:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n',
                      name: 'toolbarStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(c.Component);
    },
    KNE6: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return w;
      }),
        n.d(e, 'b', function () {
          return x;
        }),
        n.d(e, 'c', function () {
          return S;
        }),
        n.d(e, 'd', function () {
          return C;
        }),
        n.d(e, 'e', function () {
          return y;
        }),
        n.d(e, 'f', function () {
          return d;
        }),
        n.d(e, 'g', function () {
          return E;
        }),
        n.d(e, 'h', function () {
          return p;
        }),
        n.d(e, 'i', function () {
          return f;
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
          return h;
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
      function c(t) {
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
      function s(t) {
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
      var u = c({
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
        d = c({
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
        p = c({
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
        h = c({
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
        f = l({ blockType: 'header-one', children: 'H1' }),
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
        E = l({
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
        x = s({
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
        w = s({
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
        S = s({
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
        C = s({
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
      c({
        style: 'SUBSCRIPT',
        children: r.a.createElement(
          'div',
          null,
          'x',
          r.a.createElement('sub', null, '2')
        ),
      }),
        c({
          style: 'SUPERSCRIPT',
          children: r.a.createElement(
            'div',
            null,
            'x',
            r.a.createElement('sup', null, '2')
          ),
        });
    },
    Tw9o: function (t, e, n) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    VvFt: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/static-toolbar',
        function () {
          return n('HwPV');
        },
      ]);
    },
    WN8k: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__RjTn9' };
    },
    bsbD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var o = n('ERkP'),
        r = n.n(o),
        a = n('7O4Y'),
        i = (n('U/75'), n('Tw9o')),
        l = n.n(i),
        c = r.a.createElement;
      function s(t) {
        var e = t.code,
          n = t.className,
          o = Object(a.a)(l.a.root, n);
        return c(
          'span',
          { className: o },
          c('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    clgL: function (t, e, n) {
      t.exports = {
        root: 'styles_root__21E2l',
        param: 'styles_param__3OSx2',
        paramName: 'styles_paramName__3qGfT',
        subParams: 'styles_subParams__xlDv0',
        subParam: 'styles_subParam__3677q',
        subParamName: 'styles_subParamName__19l4W',
        list: 'styles_list__3tjwu',
        listEntry: 'styles_listEntry__1wEnJ',
        guideCodeBlock: 'styles_guideCodeBlock__a1yFf',
      };
    },
    esrK: function (t, e, n) {
      t.exports = {
        buttonWrapper: 'buttonStyles_buttonWrapper__N2VHc',
        button: 'buttonStyles_button__3CWcb',
        active: 'buttonStyles_active__aXnhj',
      };
    },
    fTKg: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__2Ylu9' };
    },
    fzAv: function (t, e, n) {
      t.exports = { toolbar: 'toolbarStyles_toolbar__2RO0S' };
    },
  },
  [['VvFt', 0, 2, 1, 3, 4]],
]);
