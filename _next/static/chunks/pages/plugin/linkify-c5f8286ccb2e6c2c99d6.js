_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [27],
  {
    Q9sA: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/linkify',
        function () {
          return n('f1S3');
        },
      ]);
    },
    RVyU: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__1a1p_' };
    },
    Tw9o: function (t, e, n) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    Zygt: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__1RzlI' };
    },
    bST1: function (t, e, n) {
      t.exports = {
        root: 'styles_root__1sSi6',
        param: 'styles_param__fftEP',
        paramName: 'styles_paramName__21ozo',
        subParams: 'styles_subParams__3zQMA',
        subParam: 'styles_subParam__3EetD',
        subParamName: 'styles_subParamName__2Z0jm',
        list: 'styles_list__3No7m',
        listEntry: 'styles_listEntry__dxB4L',
        guideCodeBlock: 'styles_guideCodeBlock__1mUeC',
      };
    },
    bsbD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var a = n('ERkP'),
        i = n.n(a),
        r = n('7O4Y'),
        o = (n('U/75'), n('Tw9o')),
        s = n.n(o),
        l = i.a.createElement;
      function c(t) {
        var e = t.code,
          n = t.className,
          a = Object(r.a)(s.a.root, n);
        return l(
          'span',
          { className: a },
          l('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    f1S3: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return J;
        });
      var a = n('9fIP'),
        i = n('MMYH'),
        r = n('8K1b'),
        o = n('K/z8'),
        s = n('sRHE'),
        l = n('ERkP'),
        c = n.n(l),
        u = n('Diez'),
        d = n('9zpB'),
        f = n('YITQ'),
        p = n('bST1'),
        m = n.n(p),
        h = n('lIm4'),
        g = n('pWxA'),
        y = n('zjfJ'),
        b = n('zpdM'),
        S = n('mwv6'),
        j = n('QjfH'),
        k = n('Zygt'),
        v = n.n(k),
        x = c.a.createElement;
      function E(t) {
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
            a = Object(s.a)(t);
          if (e) {
            var i = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
      var _ = [Object(j.a)()],
        C = (function (t) {
          Object(r.a)(n, t);
          var e = E(n);
          function n() {
            var t;
            Object(a.a)(this, n);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              (t = e.call.apply(e, [this].concat(r))),
              Object(y.a)(Object(g.a)(t), 'state', {
                editorState: b.EditorState.createEmpty(),
              }),
              Object(y.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(y.a)(Object(g.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return x(
                    'div',
                    { className: v.a.editor, onClick: this.focus },
                    x(S.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: _,
                      ref: function (e) {
                        t.editor = e;
                      },
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        O = n('RVyU'),
        N = n.n(O),
        P = c.a.createElement;
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
            a = Object(s.a)(t);
          if (e) {
            var i = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
      var w = [Object(j.a)({ target: '_blank' })],
        A = (function (t) {
          Object(r.a)(n, t);
          var e = R(n);
          function n() {
            var t;
            Object(a.a)(this, n);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              (t = e.call.apply(e, [this].concat(r))),
              Object(y.a)(Object(g.a)(t), 'state', {
                editorState: b.EditorState.createEmpty(),
              }),
              Object(y.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(y.a)(Object(g.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return P(
                    'div',
                    { className: N.a.editor, onClick: this.focus },
                    P(S.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: w,
                      ref: function (e) {
                        t.editor = e;
                      },
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        L = n('cxan'),
        D = n('vxf6'),
        B = n.n(D),
        I = c.a.createElement;
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
            a = Object(s.a)(t);
          if (e) {
            var i = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
      var T = [
          Object(j.a)({
            component: function (t) {
              return I(
                'a',
                Object(L.a)({}, t, {
                  onClick: function () {
                    return alert('Clicked on Link!');
                  },
                })
              );
            },
          }),
        ],
        z = (function (t) {
          Object(r.a)(n, t);
          var e = M(n);
          function n() {
            var t;
            Object(a.a)(this, n);
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
              r[o] = arguments[o];
            return (
              (t = e.call.apply(e, [this].concat(r))),
              Object(y.a)(Object(g.a)(t), 'state', {
                editorState: b.EditorState.createEmpty(),
              }),
              Object(y.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(y.a)(Object(g.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return I(
                    'div',
                    { className: B.a.editor, onClick: this.focus },
                    I(S.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: T,
                      ref: function (e) {
                        t.editor = e;
                      },
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        U = n('98Mn'),
        W = n('bsbD'),
        Y = n('3h/d'),
        Q = c.a.createElement;
      function H(t) {
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
            a = Object(s.a)(t);
          if (e) {
            var i = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
      var J = (function (t) {
        Object(r.a)(n, t);
        var e = H(n);
        function n() {
          return Object(a.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(i.a)(n, [
            {
              key: 'render',
              value: function () {
                return Q(
                  Y.a,
                  null,
                  Q(
                    u.a,
                    null,
                    Q(f.a, { level: 2 }, 'Linkify'),
                    Q(f.a, { level: 3 }, 'Supported Environment'),
                    Q(
                      'ul',
                      { className: m.a.list },
                      Q('li', { className: m.a.listEntry }, 'Desktop: Yes'),
                      Q('li', { className: m.a.listEntry }, 'Mobile: Yes'),
                      Q(
                        'li',
                        { className: m.a.listEntry },
                        'Screen-reader: Yes'
                      )
                    )
                  ),
                  Q(
                    d.a,
                    null,
                    Q(f.a, { level: 2 }, 'Getting Started'),
                    Q(h.a, { code: 'npm install @draft-js-plugins/editor' }),
                    Q(h.a, { code: 'npm install @draft-js-plugins/linkify' }),
                    Q(h.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createLinkifyPlugin from '@draft-js-plugins/linkify';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst linkifyPlugin = createLinkifyPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the linkifyPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[linkifyPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    Q(f.a, { level: 3 }, 'Importing the default styles'),
                    Q(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      Q(W.a, {
                        code:
                          'node_modules/@draft-js-plugins/linkify/lib/plugin.css',
                      })
                    ),
                    Q(f.a, { level: 4 }, 'Webpack Usage'),
                    Q(
                      'ul',
                      { className: m.a.list },
                      Q(
                        'li',
                        { className: m.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        Q(W.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      Q(
                        'li',
                        { className: m.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        Q(h.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: m.a.guideCodeBlock,
                        })
                      ),
                      Q(
                        'li',
                        { className: m.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        Q(h.a, {
                          code:
                            "import '@draft-js-plugins/linkify/lib/plugin.css';",
                          className: m.a.guideCodeBlock,
                        })
                      ),
                      Q(
                        'li',
                        { className: m.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    Q(f.a, { level: 4 }, 'Browserify Usage'),
                    Q(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      Q(
                        U.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Linkify/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  Q(
                    u.a,
                    null,
                    Q(f.a, { level: 2 }, 'Configuration Parameters'),
                    Q(
                      'div',
                      { className: m.a.param },
                      Q('span', { className: m.a.paramName }, 'theme'),
                      Q(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      Q(
                        'div',
                        { className: m.a.subParams },
                        Q(
                          'div',
                          { className: m.a.subParam },
                          Q('span', { className: m.a.subParamName }, 'link:'),
                          ' CSS class to be applied to link text'
                        )
                      )
                    ),
                    Q(
                      'div',
                      { className: m.a.param },
                      Q('span', { className: m.a.paramName }, 'rel'),
                      Q(
                        'span',
                        null,
                        'String value for the rel attribute. (Default value is',
                        ' ',
                        "'noreferrer noopener'",
                        ')'
                      )
                    ),
                    Q(
                      'div',
                      { className: m.a.param },
                      Q('span', { className: m.a.paramName }, 'target'),
                      Q(
                        'span',
                        null,
                        'String value for the target attribute. (Default value is _self)'
                      )
                    ),
                    Q(
                      'div',
                      { className: m.a.param },
                      Q('span', { className: m.a.paramName }, 'component'),
                      Q(
                        'span',
                        null,
                        'If provided this component will be rendered instead of the default Anchor tag. It receives the following props: target, href & className'
                      )
                    ),
                    Q(f.a, { level: 3 }, 'Additional Exports'),
                    Q(
                      'div',
                      null,
                      'In addition to the plugin the module exports',
                      ' ',
                      Q(W.a, { code: 'extractLinks' }),
                      '. As first argument it takes the text string. The function returns a list of linkifyit.Matches or null.',
                      Q(h.a, {
                        code:
                          'function extractLinks(text: string): linkifyIt.Match[] | null;',
                      }),
                      'It can be imported by:',
                      Q(h.a, {
                        code:
                          "import { extractLinks } from '@draft-js-plugins/linkify';",
                      })
                    )
                  ),
                  Q(
                    u.a,
                    null,
                    Q(f.a, { level: 2 }, 'Simple Example'),
                    Q(C, null),
                    Q(h.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createLinkifyPlugin from '@draft-js-plugins/linkify';\nimport editorStyles from './editorStyles.module.css';\n\nconst linkifyPlugin = createLinkifyPlugin();\nconst plugins = [linkifyPlugin];\n\nexport default class SimpleMentionEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleLinkifyEditor.js',
                    }),
                    Q(h.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  Q(
                    u.a,
                    null,
                    Q(f.a, { level: 2 }, 'Themed Linkify Example'),
                    Q(A, null),
                    Q(h.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createLinkifyPlugin from '@draft-js-plugins/linkify';\nimport editorStyles from './editorStyles.module.css';\n\nconst linkifyPlugin = createLinkifyPlugin({ target: '_blank' });\nconst plugins = [linkifyPlugin];\n\nexport default class CustomMentionEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomLinkifyEditor.js',
                    }),
                    Q(h.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  Q(
                    u.a,
                    null,
                    Q(f.a, { level: 2 }, 'Themed Linkify Example'),
                    Q(z, null),
                    Q(h.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createLinkifyPlugin from '@draft-js-plugins/linkify';\nimport editorStyles from './editorStyles.module.css';\n\nconst linkifyPlugin = createLinkifyPlugin({\n  component(props) {\n    // eslint-disable-next-line no-alert, jsx-a11y/anchor-has-content\n    return <a {...props} onClick={() => alert('Clicked on Link!')} />;\n  },\n});\nconst plugins = [linkifyPlugin];\n\nexport default class CustomMentionEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomComponentLinkifyEditor.js',
                    }),
                    Q(h.a, {
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
      })(l.Component);
    },
    vxf6: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__2O-6h' };
    },
  },
  [['Q9sA', 0, 2, 1, 3, 4, 12]],
]);
