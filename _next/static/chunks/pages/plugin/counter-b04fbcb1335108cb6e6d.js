_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
  {
    '5iTU': function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__MKOah' };
    },
    '7M2s': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/counter',
        function () {
          return n('ec4s');
        },
      ]);
    },
    ORCE: function (t, e, n) {
      t.exports = {
        root: 'styles_root__1g0q2',
        center: 'styles_center__28hBu',
        param: 'styles_param__2xa5X',
        paramName: 'styles_paramName__1d9Uv',
        subParams: 'styles_subParams__2xNN0',
        subParam: 'styles_subParam__3VyzP',
        subParamName: 'styles_subParamName__2viK3',
        list: 'styles_list__3uFwk',
        listEntry: 'styles_listEntry__fMFWs',
        guideCodeBlock: 'styles_guideCodeBlock__19ixy',
      };
    },
    PIVb: function (t, e) {
      (function (e) {
        t.exports = (function () {
          var t = {
              880: function (t) {
                t.exports = function (t) {
                  return (
                    t.webpackPolyfill ||
                      ((t.deprecate = function () {}),
                      (t.paths = []),
                      t.children || (t.children = []),
                      Object.defineProperty(t, 'loaded', {
                        enumerable: !0,
                        get: function () {
                          return t.l;
                        },
                      }),
                      Object.defineProperty(t, 'id', {
                        enumerable: !0,
                        get: function () {
                          return t.i;
                        },
                      }),
                      (t.webpackPolyfill = 1)),
                    t
                  );
                };
              },
            },
            n = {};
          function r(e) {
            if (n[e]) return n[e].exports;
            var o = (n[e] = { exports: {} }),
              a = !0;
            try {
              t[e](o, o.exports, r), (a = !1);
            } finally {
              a && delete n[e];
            }
            return o.exports;
          }
          return (r.ab = e + '/'), r(880);
        })();
      }.call(this, '/'));
    },
    Tw9o: function (t, e, n) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bsbD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var r = n('ERkP'),
        o = n.n(r),
        a = n('7O4Y'),
        i = (n('U/75'), n('Tw9o')),
        s = n.n(i),
        u = o.a.createElement;
      function c(t) {
        var e = t.code,
          n = t.className,
          r = Object(a.a)(s.a.root, n);
        return u(
          'span',
          { className: r },
          u('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    ec4s: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return ut;
        });
      var r = n('9fIP'),
        o = n('MMYH'),
        a = n('8K1b'),
        i = n('K/z8'),
        s = n('sRHE'),
        u = n('ERkP'),
        c = n.n(u),
        l = n('ORCE'),
        d = n.n(l),
        m = n('Diez'),
        p = n('9zpB'),
        h = n('YITQ'),
        f = n('pWxA'),
        g = n('zjfJ'),
        v = n('mwv6'),
        b = n('aWzz'),
        y = n.n(b),
        C = n('7O4Y'),
        w = n('q3/s'),
        x = n.n(w);
      function S() {
        return (S =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var j = function (t) {
        var e = t.theme,
          n = void 0 === e ? {} : e,
          r = t.className,
          o = t.store,
          a = t.limit,
          i = (function (t) {
            var e,
              n = t
                .getCurrentContent()
                .getPlainText('')
                .replace(/(?:\r\n|\r|\n)/g, '')
                .trim();
            return ((e = n), x.a.ucs2.decode(e)).length;
          })(o.getEditorState()),
          s = (function (t) {
            var e = Object(C.a)(n.counter, r),
              o = Object(C.a)(n.counterOverLimit, r);
            return t > a ? o : e;
          })(i);
        return c.a.createElement('span', { className: s }, i);
      };
      j.propTypes = {
        theme: y.a.any,
        className: y.a.any,
        store: y.a.any,
        limit: y.a.any,
      };
      var E = function (t) {
        var e = t.store,
          n = t.limit,
          r = t.theme,
          o = void 0 === r ? {} : r,
          a = t.className,
          i = (function (t) {
            var e = t
              .getCurrentContent()
              .getPlainText('')
              .replace(/(?:\r\n|\r|\n)/g, ' ')
              .trim()
              .match(/\S+/g);
            return e ? e.length : 0;
          })(e.getEditorState()),
          s = (function (t) {
            var e = Object(C.a)(o.counter, a),
              r = Object(C.a)(o.counterOverLimit, a);
            return t > n ? r : e;
          })(i);
        return c.a.createElement('span', { className: s }, i);
      };
      E.propTypes = { theme: y.a.any, limit: y.a.number };
      var O = function (t) {
        var e = t.store,
          n = t.limit,
          r = t.theme,
          o = void 0 === r ? {} : r,
          a = t.className,
          i = (function (t) {
            var e = t.getCurrentContent().getBlocksAsArray();
            return e ? e.length : null;
          })(e.getEditorState()),
          s = (function (t) {
            var e = Object(C.a)(o.counter, a),
              r = Object(C.a)(o.counterOverLimit, a);
            return t > n ? r : e;
          })(i);
        return c.a.createElement('span', { className: s }, i);
      };
      O.propTypes = {
        theme: y.a.any,
        store: y.a.any,
        className: y.a.any,
        limit: y.a.number,
      };
      var _ = function (t) {
        var e = t.store,
          n = t.limit,
          r = void 0 === n ? 0 : n,
          o = t.countFunction,
          a = t.theme,
          i = void 0 === a ? {} : a,
          s = t.className,
          u = o(e.getEditorState().getCurrentContent().getPlainText('')),
          l = (function (t) {
            var e = Object(C.a)(i.counter, s),
              n = Object(C.a)(i.counterOverLimit, s);
            return t > r ? n : e;
          })(u);
        return c.a.createElement('span', { className: l }, u);
      };
      _.propTypes = {
        theme: y.a.any,
        store: y.a.any,
        className: y.a.any,
        limit: y.a.number,
        countFunction: y.a.func.isRequired,
      };
      var N = { counter: 'c1svg00', counterOverLimit: 'c6sdxe3' },
        P = function (t) {
          void 0 === t && (t = {});
          var e = { getEditorState: void 0, setEditorState: void 0 },
            n = t.theme ? t.theme : N;
          return {
            CharCounter: function (t) {
              return c.a.createElement(j, S({}, t, { theme: n, store: e }));
            },
            WordCounter: function (t) {
              return c.a.createElement(E, S({}, t, { theme: n, store: e }));
            },
            LineCounter: function (t) {
              return c.a.createElement(O, S({}, t, { theme: n, store: e }));
            },
            CustomCounter: function (t) {
              return c.a.createElement(_, S({}, t, { theme: n, store: e }));
            },
            initialize: function (t) {
              var n = t.getEditorState,
                r = t.setEditorState;
              (e.getEditorState = n), (e.setEditorState = r);
            },
          };
        },
        T = n('5iTU'),
        k = n.n(T),
        A = c.a.createElement;
      function R(t) {
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
            r = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var L = P(),
        F = L.CharCounter,
        W = L.WordCounter,
        I = L.LineCounter,
        B = L.CustomCounter,
        M = [L],
        D =
          'This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n',
        z = (function (t) {
          Object(a.a)(n, t);
          var e = R(n);
          function n() {
            var t;
            Object(r.a)(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(g.a)(Object(f.a)(t), 'state', {
                editorState: Object(v.b)(D),
              }),
              Object(g.a)(Object(f.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(g.a)(Object(f.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'customCountFunction',
                value: function (t) {
                  var e = t.match(/\S+/g);
                  return e ? e.length : 0;
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return A(
                    'div',
                    null,
                    A(
                      'div',
                      { className: k.a.editor, onClick: this.focus },
                      A(v.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: M,
                        ref: function (e) {
                          t.editor = e;
                        },
                      })
                    ),
                    A('div', null, A(F, { limit: 200 }), ' characters'),
                    A('div', null, A(W, { limit: 30 }), ' words'),
                    A('div', null, A(I, { limit: 10 }), ' lines'),
                    A(
                      'div',
                      null,
                      A(B, {
                        limit: 40,
                        countFunction: this.customCountFunction,
                      }),
                      A('span', null, ' words (custom function)')
                    ),
                    A('br', null),
                    A('br', null)
                  );
                },
              },
            ]),
            n
          );
        })(u.Component),
        Y = n('gjAx'),
        q = n.n(Y),
        U = n('qjso'),
        J = n.n(U),
        K = c.a.createElement;
      function X(t) {
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
            r = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var G = P({
          theme: {
            counter: J.a.counter,
            counterOverLimit: J.a.counterOverLimit,
          },
        }),
        H = G.CharCounter,
        V = G.WordCounter,
        Q = G.LineCounter,
        $ = G.CustomCounter,
        Z = [G],
        tt =
          'This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n',
        et = (function (t) {
          Object(a.a)(n, t);
          var e = X(n);
          function n() {
            var t;
            Object(r.a)(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(g.a)(Object(f.a)(t), 'state', {
                editorState: Object(v.b)(tt),
              }),
              Object(g.a)(Object(f.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(g.a)(Object(f.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'customCountFunction',
                value: function (t) {
                  var e = t.match(/\S+/g);
                  return e ? e.length : 0;
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return K(
                    'div',
                    null,
                    K(
                      'div',
                      { className: q.a.editor, onClick: this.focus },
                      K(v.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: Z,
                        ref: function (e) {
                          t.editor = e;
                        },
                      })
                    ),
                    K('div', null, K(H, { limit: 200 }), ' characters'),
                    K('div', null, K(V, { limit: 30 }), ' words'),
                    K('div', null, K(Q, { limit: 10 }), ' lines'),
                    K(
                      'div',
                      null,
                      K($, {
                        limit: 40,
                        countFunction: this.customCountFunction,
                      }),
                      K('span', null, ' words (custom function)')
                    ),
                    K('br', null),
                    K('br', null)
                  );
                },
              },
            ]),
            n
          );
        })(u.Component),
        nt = n('lIm4'),
        rt = n('98Mn'),
        ot = n('bsbD'),
        at = n('3h/d'),
        it = c.a.createElement;
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
            r = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var ut = (function (t) {
        Object(a.a)(n, t);
        var e = st(n);
        function n() {
          return Object(r.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(o.a)(n, [
            {
              key: 'render',
              value: function () {
                return it(
                  at.a,
                  null,
                  it(
                    m.a,
                    null,
                    it(h.a, { level: 2 }, 'Counter'),
                    it(
                      'p',
                      null,
                      'A simple counter plugin for all your counting needs. You can even set a limit to change the color past a certain threshold.'
                    ),
                    it(h.a, { level: 3 }, 'Usage'),
                    it(
                      'p',
                      null,
                      'To use, simply import and instantiate the counter plugin, and then use one of the available counter components in your JSX. Out of the box, the following counters are included:'
                    ),
                    it(
                      'ul',
                      null,
                      it('li', null, 'Character Counter'),
                      it('li', null, 'Word Counter'),
                      it('li', null, 'Line Counter'),
                      it('li', null, 'Custom Counter')
                    ),
                    it(
                      'p',
                      null,
                      'The Custom Counter allows you to bring your own counting function. This will be a function that takes plain text (as a string) from the editor as input and returns a numerical value.'
                    ),
                    it(h.a, { level: 3 }, 'Supported Environment'),
                    it(
                      'ul',
                      { className: d.a.list },
                      it('li', { className: d.a.listEntry }, 'Desktop: Yes'),
                      it('li', { className: d.a.listEntry }, 'Mobile: Yes'),
                      it(
                        'li',
                        { className: d.a.listEntry },
                        'Screen-reader: Yes'
                      )
                    )
                  ),
                  it(
                    p.a,
                    null,
                    it(h.a, { level: 2 }, 'Getting Started'),
                    it(nt.a, { code: 'npm install @draft-js-plugins/editor' }),
                    it(nt.a, { code: 'npm install @draft-js-plugins/counter' }),
                    it(nt.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createCounterPlugin from '@draft-js-plugins/counter';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst counterPlugin = createCounterPlugin();\n\n// Extract a counter from the plugin.\nconst { CharCounter } = counterPlugin;\n\n// The Editor accepts an array of plugins. In this case, only the counterPlugin is\n// passed in, although it is possible to pass in multiple plugins.\n// The Counter is placed after the Editor.\nconst MyEditor = ({ editorState, onChange }) => (\n  <div>\n    <Editor\n      editorState={editorState}\n      onChange={onChange}\n      plugins={[counterPlugin]}\n    />\n    <CharCounter editorState={this.state.editorState} limit={200} />\n  </div>\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    it(h.a, { level: 3 }, 'Importing the default styles'),
                    it(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      it(ot.a, {
                        code:
                          'node_modules/@draft-js-plugins/counter/lib/plugin.css',
                      })
                    ),
                    it(h.a, { level: 4 }, 'Webpack Usage'),
                    it(
                      'ul',
                      { className: d.a.list },
                      it(
                        'li',
                        { className: d.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        it(ot.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      it(
                        'li',
                        { className: d.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        it(nt.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: d.a.guideCodeBlock,
                        })
                      ),
                      it(
                        'li',
                        { className: d.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        it(nt.a, {
                          code:
                            "import '@draft-js-plugins/counter/lib/plugin.css';",
                          className: d.a.guideCodeBlock,
                        })
                      ),
                      it(
                        'li',
                        { className: d.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    it(h.a, { level: 4 }, 'Browserify Usage'),
                    it(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      it(
                        rt.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Counter/index.js',
                        },
                        'documention'
                      ),
                      '.'
                    )
                  ),
                  it(
                    m.a,
                    null,
                    it(h.a, { level: 2 }, 'Configuration Parameters'),
                    it(
                      'div',
                      { className: d.a.param },
                      it('div', { className: d.a.paramName }, 'theme'),
                      it(
                        'div',
                        null,
                        'Javascript object of CSS classes with the following keys.',
                        it(
                          'div',
                          { className: d.a.subParams },
                          it(
                            'div',
                            { className: d.a.subParam },
                            it(
                              'span',
                              { className: d.a.subParamName },
                              'counter:'
                            ),
                            ' CSS class to be applied to the number displayed when not over the specified limit'
                          ),
                          it(
                            'div',
                            { className: d.a.subParam },
                            it(
                              'span',
                              { className: d.a.subParamName },
                              'counterOverLimit:'
                            ),
                            ' ',
                            'CSS class to be applied to the number displayed when over the specified limit'
                          )
                        )
                      )
                    ),
                    it(h.a, { level: 2 }, 'Component Properties'),
                    it(
                      'div',
                      { className: d.a.param },
                      it('div', { className: d.a.paramName }, 'limit'),
                      it(
                        'div',
                        null,
                        'A limit to indicate to the user that a threshold has passed.'
                      )
                    ),
                    it(
                      'div',
                      { className: d.a.param },
                      it('div', { className: d.a.paramName }, 'countFunction'),
                      it(
                        'div',
                        null,
                        'A custom counting function for the Custom Counter. The function will receive plain text from the editor (as a string) as input and should return a numerical value.'
                      )
                    )
                  ),
                  it(
                    m.a,
                    null,
                    it(h.a, { level: 2 }, 'Simple Example'),
                    it(z, null),
                    it(nt.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createCounterPlugin from '@draft-js-plugins/counter';\nimport editorStyles from './editorStyles.module.css';\n\nconst counterPlugin = createCounterPlugin();\nconst { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;\nconst plugins = [counterPlugin];\nconst text = `This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n`;\n\nexport default class SimpleCounterEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({ editorState });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  customCountFunction(str) {\n    const wordArray = str.match(/\\S+/g); // matches words according to whitespace\n    return wordArray ? wordArray.length : 0;\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div>\n          <CharCounter limit={200} /> characters\n        </div>\n        <div>\n          <WordCounter limit={30} /> words\n        </div>\n        <div>\n          <LineCounter limit={10} /> lines\n        </div>\n        <div>\n          <CustomCounter limit={40} countFunction={this.customCountFunction} />\n          <span> words (custom function)</span>\n        </div>\n        <br />\n        <br />\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleCounterEditor.js',
                    }),
                    it(nt.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  it(
                    m.a,
                    null,
                    it(h.a, { level: 2 }, 'Themed Example'),
                    it(et, null),
                    it(nt.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createCounterPlugin from '@draft-js-plugins/counter';\nimport editorStyles from './editorStyles.module.css';\nimport counterStyles from './counterStyles.module.css';\n\nconst theme = {\n  counter: counterStyles.counter,\n  counterOverLimit: counterStyles.counterOverLimit,\n};\nconst counterPlugin = createCounterPlugin({ theme });\nconst { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;\nconst plugins = [counterPlugin];\nconst text = `This editor has counters below!\nTry typing here and watch the numbers go up. \ud83d\ude4c\n\nNote that the color changes when you pass one of the following limits:\n- 200 characters\n- 30 words\n- 10 lines\n`;\n\nexport default class CustomCounterEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({ editorState });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  // eslint-disable-next-line class-methods-use-this\n  customCountFunction(str) {\n    const wordArray = str.match(/\\S+/g); // matches words according to whitespace\n    return wordArray ? wordArray.length : 0;\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div>\n          <CharCounter limit={200} /> characters\n        </div>\n        <div>\n          <WordCounter limit={30} /> words\n        </div>\n        <div>\n          <LineCounter limit={10} /> lines\n        </div>\n        <div>\n          <CustomCounter limit={40} countFunction={this.customCountFunction} />\n          <span> words (custom function)</span>\n        </div>\n        <br />\n        <br />\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomCounterEditor.js',
                    }),
                    it(nt.a, {
                      code:
                        '.counter {\n  color: white;\n  background-color: #353535;\n  display: inline-block;\n  min-width: 50px;\n  border-radius: 10px;\n  padding: 2px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.counterOverLimit {\n  color: tomato;\n  background-color: #353535;\n  display: inline-block;\n  min-width: 50px;\n  border-radius: 10px;\n  padding: 2px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n',
                      name: 'counterStyles.css',
                    }),
                    it(nt.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(u.Component);
    },
    gjAx: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__2-hyS' };
    },
    'q3/s': function (t, e, n) {
      (function (t, r) {
        var o;
        !(function (a) {
          e && e.nodeType, t && t.nodeType;
          var i = 'object' == typeof r && r;
          i.global !== i && i.window !== i && i.self;
          var s,
            u = 2147483647,
            c = 36,
            l = /^xn--/,
            d = /[^\x20-\x7E]/,
            m = /[\x2E\u3002\uFF0E\uFF61]/g,
            p = {
              overflow: 'Overflow: input needs wider integers to process',
              'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
              'invalid-input': 'Invalid input',
            },
            h = Math.floor,
            f = String.fromCharCode;
          function g(t) {
            throw new RangeError(p[t]);
          }
          function v(t, e) {
            for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
            return r;
          }
          function b(t, e) {
            var n = t.split('@'),
              r = '';
            return (
              n.length > 1 && ((r = n[0] + '@'), (t = n[1])),
              r + v((t = t.replace(m, '.')).split('.'), e).join('.')
            );
          }
          function y(t) {
            for (var e, n, r = [], o = 0, a = t.length; o < a; )
              (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < a
                ? 56320 == (64512 & (n = t.charCodeAt(o++)))
                  ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                  : (r.push(e), o--)
                : r.push(e);
            return r;
          }
          function C(t) {
            return v(t, function (t) {
              var e = '';
              return (
                t > 65535 &&
                  ((e += f((((t -= 65536) >>> 10) & 1023) | 55296)),
                  (t = 56320 | (1023 & t))),
                (e += f(t))
              );
            }).join('');
          }
          function w(t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
          }
          function x(t, e, n) {
            var r = 0;
            for (t = n ? h(t / 700) : t >> 1, t += h(t / e); t > 455; r += c)
              t = h(t / 35);
            return h(r + (36 * t) / (t + 38));
          }
          function S(t) {
            var e,
              n,
              r,
              o,
              a,
              i,
              s,
              l,
              d,
              m,
              p,
              f = [],
              v = t.length,
              b = 0,
              y = 128,
              w = 72;
            for ((n = t.lastIndexOf('-')) < 0 && (n = 0), r = 0; r < n; ++r)
              t.charCodeAt(r) >= 128 && g('not-basic'), f.push(t.charCodeAt(r));
            for (o = n > 0 ? n + 1 : 0; o < v; ) {
              for (
                a = b, i = 1, s = c;
                o >= v && g('invalid-input'),
                  ((l =
                    (p = t.charCodeAt(o++)) - 48 < 10
                      ? p - 22
                      : p - 65 < 26
                      ? p - 65
                      : p - 97 < 26
                      ? p - 97
                      : c) >= c ||
                    l > h((u - b) / i)) &&
                    g('overflow'),
                  (b += l * i),
                  !(l < (d = s <= w ? 1 : s >= w + 26 ? 26 : s - w));
                s += c
              )
                i > h(u / (m = c - d)) && g('overflow'), (i *= m);
              (w = x(b - a, (e = f.length + 1), 0 == a)),
                h(b / e) > u - y && g('overflow'),
                (y += h(b / e)),
                (b %= e),
                f.splice(b++, 0, y);
            }
            return C(f);
          }
          function j(t) {
            var e,
              n,
              r,
              o,
              a,
              i,
              s,
              l,
              d,
              m,
              p,
              v,
              b,
              C,
              S,
              j = [];
            for (
              v = (t = y(t)).length, e = 128, n = 0, a = 72, i = 0;
              i < v;
              ++i
            )
              (p = t[i]) < 128 && j.push(f(p));
            for (r = o = j.length, o && j.push('-'); r < v; ) {
              for (s = u, i = 0; i < v; ++i)
                (p = t[i]) >= e && p < s && (s = p);
              for (
                s - e > h((u - n) / (b = r + 1)) && g('overflow'),
                  n += (s - e) * b,
                  e = s,
                  i = 0;
                i < v;
                ++i
              )
                if (((p = t[i]) < e && ++n > u && g('overflow'), p == e)) {
                  for (
                    l = n, d = c;
                    !(l < (m = d <= a ? 1 : d >= a + 26 ? 26 : d - a));
                    d += c
                  )
                    (S = l - m),
                      (C = c - m),
                      j.push(f(w(m + (S % C), 0))),
                      (l = h(S / C));
                  j.push(f(w(l, 0))), (a = x(n, b, r == o)), (n = 0), ++r;
                }
              ++n, ++e;
            }
            return j.join('');
          }
          (s = {
            version: '1.4.1',
            ucs2: { decode: y, encode: C },
            decode: S,
            encode: j,
            toASCII: function (t) {
              return b(t, function (t) {
                return d.test(t) ? 'xn--' + j(t) : t;
              });
            },
            toUnicode: function (t) {
              return b(t, function (t) {
                return l.test(t) ? S(t.slice(4).toLowerCase()) : t;
              });
            },
          }),
            void 0 ===
              (o = function () {
                return s;
              }.call(e, n, e, t)) || (t.exports = o);
        })();
      }.call(this, n('PIVb')(t), n('GfI+')));
    },
    qjso: function (t, e, n) {
      t.exports = {
        counter: 'counterStyles_counter__2w-Sq',
        counterOverLimit: 'counterStyles_counterOverLimit__2MC9Y',
      };
    },
  },
  [['7M2s', 0, 2, 1, 3, 4]],
]);
