_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [34],
  {
    '4G8O': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return St;
        });
      var i = n('9fIP'),
        o = n('MMYH'),
        a = n('8K1b'),
        r = n('K/z8'),
        s = n('sRHE'),
        c = n('ERkP'),
        l = n.n(c),
        d = n('Diez'),
        u = n('9zpB'),
        p = n('YITQ'),
        f = n('Infj'),
        m = n.n(f),
        y = n('lIm4'),
        h = n('pWxA'),
        g = n('zjfJ'),
        v = n('zpdM'),
        b = n('mwv6'),
        S = n('aWzz'),
        R = n.n(S);
      function E() {
        return (E =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function j(t, e) {
        if (null == t) return {};
        var n,
          i,
          o = {},
          a = Object.keys(t);
        for (i = 0; i < a.length; i++)
          (n = a[i]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      var P = 'draft-js-video-plugin-video',
        O = 'atomic',
        w = Object.freeze({ __proto__: null, VIDEOTYPE: P, ATOMIC: O });
      function C(t, e) {
        var n = e.src;
        if (v.RichUtils.getCurrentBlockType(t) === O) return t;
        var i = t
          .getCurrentContent()
          .createEntity(P, 'IMMUTABLE', { src: n })
          .getLastCreatedEntityKey();
        return v.AtomicBlockUtils.insertAtomicBlock(t, i, ' ');
      }
      var k = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
        _ = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      var x = function (t) {
          var e,
            n = t.src;
          return (
            (e = n),
            k.test(e)
              ? 'https://www.youtube.com/embed/' +
                (function (t) {
                  return {
                    srcID: t && t.match(k)[1],
                    srcType: 'youtube',
                    url: t,
                  };
                })(n).srcID
              : (function (t) {
                  return _.test(t);
                })(n)
              ? 'https://player.vimeo.com/video/' +
                (function (t) {
                  return { srcID: t.match(_)[3], srcType: 'vimeo', url: t };
                })(n).srcID
              : void 0
          );
        },
        V = function (t) {
          var e = t.blockProps,
            n = t.className,
            i = void 0 === n ? '' : n,
            o = t.style,
            a = t.theme,
            r = j(t, ['blockProps', 'className', 'style', 'theme']),
            s = x(e);
          if (s)
            return l.a.createElement(
              'div',
              { style: o },
              l.a.createElement(
                'div',
                { className: a.iframeContainer + ' ' + i },
                l.a.createElement('iframe', {
                  className: a.iframe,
                  src: s,
                  frameBorder: '0',
                  allowFullScreen: !0,
                })
              )
            );
          r.block,
            r.customStyleMap,
            r.customStyleFn,
            r.decorator,
            r.forceSelection,
            r.offsetKey,
            r.selection,
            r.tree,
            r.contentState,
            r.blockStyleFn;
          var c = j(r, [
            'block',
            'customStyleMap',
            'customStyleFn',
            'decorator',
            'forceSelection',
            'offsetKey',
            'selection',
            'tree',
            'contentState',
            'blockStyleFn',
          ]);
          return l.a.createElement(
            'video',
            E({ src: e.src, className: a.video, style: o }, c, { controls: !0 })
          );
        };
      V.propTypes = {
        blockProps: R.a.object.isRequired,
        className: R.a.string,
        style: R.a.object,
        theme: R.a.object.isRequired,
      };
      var N = {
        iframeContainer: 'ifi492u',
        iframe: 'i1hzzm9j',
        invalidVideoSrc: 'ikyzbpi',
        video: 'vlyzuw8',
      };
      var z = function (t) {
          void 0 === t && (t = {});
          var e = t.theme ? t.theme : N,
            n = t.videoComponent || V;
          t.decorator && (n = t.decorator(n));
          var i = function (t) {
            return l.a.createElement(n, E({}, t, { theme: e }));
          };
          return {
            blockRendererFn: function (t, e) {
              var n = e.getEditorState;
              if (t.getType() === O) {
                var o = n().getCurrentContent(),
                  a = t.getEntityAt(0);
                if (!a) return null;
                var r = o.getEntity(a),
                  s = r.getType(),
                  c = r.getData().src;
                if (s === P)
                  return { component: i, editable: !1, props: { src: c } };
              }
              return null;
            },
            addVideo: C,
            types: w,
          };
        },
        D = n('XDQD'),
        M = n.n(D),
        T = l.a.createElement;
      function B(t) {
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
            i = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return Object(r.a)(this, n);
        };
      }
      var A = z(),
        I = A.types,
        L = [A],
        F = {
          entityMap: {
            0: {
              type: I.VIDEOTYPE,
              mutability: 'IMMUTABLE',
              data: { src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',
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
              text: 'See advanced examples further down \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        Y = (function (t) {
          Object(a.a)(n, t);
          var e = B(n);
          function n() {
            var t;
            Object(i.a)(this, n);
            for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
              a[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(g.a)(Object(h.a)(t), 'state', {
                editorState: v.EditorState.createWithContent(
                  Object(v.convertFromRaw)(F)
                ),
              }),
              Object(g.a)(Object(h.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(g.a)(Object(h.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return T(
                    'div',
                    { className: M.a.editor, onClick: this.focus },
                    T(b.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: L,
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
        })(c.Component),
        U = n('m4hd'),
        W = n('Dmjd'),
        X = n('Kqn8'),
        q = n('vq4c'),
        H = n.n(q),
        K = l.a.createElement;
      function G(t) {
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
            i = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return Object(r.a)(this, n);
        };
      }
      var Q = Object(W.a)(),
        J = Object(X.a)(),
        $ = Object(U.a)(),
        Z = $.AlignmentTool,
        tt = z({
          decorator: Object(b.a)(J.decorator, $.decorator, Q.decorator),
        }),
        et = tt.types,
        nt = [Q, $, J, tt],
        it = {
          entityMap: {
            0: {
              type: et.VIDEOTYPE,
              mutability: 'IMMUTABLE',
              data: { src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',
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
              text: 'See advanced examples further down \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: '97vas',
              text: '',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'bbc5n',
              text: '',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'iqdh',
              text: '',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'fg6vi',
              text: '',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: '7bvko',
              text: '',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        ot = (function (t) {
          Object(a.a)(n, t);
          var e = G(n);
          function n() {
            var t;
            Object(i.a)(this, n);
            for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
              a[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(g.a)(Object(h.a)(t), 'state', {
                editorState: v.EditorState.createWithContent(
                  Object(v.convertFromRaw)(it)
                ),
              }),
              Object(g.a)(Object(h.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(g.a)(Object(h.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return K(
                    'div',
                    { className: H.a.editor, onClick: this.focus },
                    K(b.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: nt,
                      ref: function (e) {
                        t.editor = e;
                      },
                    }),
                    K(Z, null)
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        at = n('XmE9'),
        rt = n.n(at),
        st = l.a.createElement;
      function ct(t) {
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
            i = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return Object(r.a)(this, n);
        };
      }
      var lt = (function (t) {
          Object(a.a)(n, t);
          var e = ct(n);
          function n() {
            var t;
            Object(i.a)(this, n);
            for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
              a[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(g.a)(Object(h.a)(t), 'state', { url: '', open: !1 }),
              Object(g.a)(Object(h.a)(t), 'onPopoverClick', function () {
                t.preventNextClose = !0;
              }),
              Object(g.a)(Object(h.a)(t), 'openPopover', function () {
                t.state.open ||
                  ((t.preventNextClose = !0), t.setState({ open: !0 }));
              }),
              Object(g.a)(Object(h.a)(t), 'closePopover', function () {
                !t.preventNextClose && t.state.open && t.setState({ open: !1 }),
                  (t.preventNextClose = !1);
              }),
              Object(g.a)(Object(h.a)(t), 'addVideo', function () {
                var e = t.props,
                  n = e.editorState;
                (0, e.onChange)(t.props.modifier(n, { src: t.state.url }));
              }),
              Object(g.a)(Object(h.a)(t), 'changeUrl', function (e) {
                t.setState({ url: e.target.value });
              }),
              t
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener('click', this.closePopover);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener('click', this.closePopover);
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.state.open
                      ? rt.a.addVideoPopover
                      : rt.a.addVideoClosedPopover,
                    e = this.state.open
                      ? rt.a.addVideoPressedButton
                      : rt.a.addVideoButton;
                  return st(
                    'div',
                    { className: rt.a.addVideo },
                    st(
                      'button',
                      {
                        className: e,
                        onMouseUp: this.openPopover,
                        type: 'button',
                      },
                      '+'
                    ),
                    st(
                      'div',
                      { className: t, onClick: this.onPopoverClick },
                      st('input', {
                        type: 'text',
                        placeholder: 'Paste the video url \u2026',
                        className: rt.a.addVideoInput,
                        onChange: this.changeUrl,
                        value: this.state.url,
                      }),
                      st(
                        'button',
                        {
                          className: rt.a.addVideoConfirmButton,
                          type: 'button',
                          onClick: this.addVideo,
                        },
                        'Add'
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        dt = n('lMPV'),
        ut = n.n(dt),
        pt = l.a.createElement;
      function ft(t) {
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
            i = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return Object(r.a)(this, n);
        };
      }
      var mt = z(),
        yt = [mt],
        ht = (function (t) {
          Object(a.a)(n, t);
          var e = ft(n);
          function n() {
            var t;
            Object(i.a)(this, n);
            for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
              a[r] = arguments[r];
            return (
              (t = e.call.apply(e, [this].concat(a))),
              Object(g.a)(Object(h.a)(t), 'state', {
                editorState: v.EditorState.createEmpty(),
              }),
              Object(g.a)(Object(h.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(g.a)(Object(h.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return pt(
                    'div',
                    null,
                    pt(
                      'div',
                      { className: ut.a.editor, onClick: this.focus },
                      pt(b.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: yt,
                        ref: function (e) {
                          t.editor = e;
                        },
                      })
                    ),
                    pt(lt, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      modifier: mt.addVideo,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        gt = n('3h/d'),
        vt = l.a.createElement;
      function bt(t) {
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
            i = Object(s.a)(t);
          if (e) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return Object(r.a)(this, n);
        };
      }
      var St = (function (t) {
        Object(a.a)(n, t);
        var e = bt(n);
        function n() {
          return Object(i.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(o.a)(n, [
            {
              key: 'render',
              value: function () {
                return vt(
                  gt.a,
                  null,
                  vt(
                    d.a,
                    null,
                    vt(p.a, { level: 2 }, 'Video'),
                    vt(p.a, { level: 3 }, 'Supported Environment'),
                    vt(
                      'ul',
                      { className: m.a.list },
                      vt('li', { className: m.a.listEntry }, 'Desktop: Yes'),
                      vt('li', { className: m.a.listEntry }, 'Mobile: No'),
                      vt(
                        'li',
                        { className: m.a.listEntry },
                        'Screen-reader: No'
                      )
                    )
                  ),
                  vt(
                    u.a,
                    null,
                    vt(p.a, { level: 2 }, 'Getting Started'),
                    vt(y.a, { code: 'npm install @draft-js-plugins/editor' }),
                    vt(y.a, {
                      code: 'npm install @draft-js-plugins/video --save',
                    }),
                    vt(y.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst videoPlugin = createVideoPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the linkifyPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[videoPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    })
                  ),
                  vt(
                    d.a,
                    null,
                    vt(p.a, { level: 2 }, 'Configuration Parameters'),
                    vt(
                      'div',
                      { className: m.a.param },
                      vt('span', { className: m.a.paramName }, 'theme'),
                      vt(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      vt(
                        'div',
                        { className: m.a.subParams },
                        vt(
                          'div',
                          { className: m.a.subParam },
                          vt('span', { className: m.a.subParamName }, 'link:'),
                          ' CSS class to be applied to link text'
                        )
                      )
                    ),
                    vt(
                      'div',
                      { className: m.a.param },
                      vt('span', { className: m.a.paramName }, 'target'),
                      vt(
                        'span',
                        null,
                        'String value for the target attribute. (Default value is _self)'
                      )
                    ),
                    vt(
                      'div',
                      { className: m.a.param },
                      vt('span', { className: m.a.paramName }, 'component'),
                      vt(
                        'span',
                        null,
                        'If provided this component will be rendered instead of the default Anchor tag. It receives the following props: target, href & className'
                      )
                    )
                  ),
                  vt(
                    d.a,
                    null,
                    vt(p.a, { level: 2 }, 'Simple Example'),
                    vt(Y, null),
                    vt(y.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState, convertFromRaw } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport editorStyles from './editorStyles.module.css';\n\nconst videoPlugin = createVideoPlugin();\nconst { types } = videoPlugin;\nconst plugins = [videoPlugin];\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: types.VIDEOTYPE,\n      mutability: 'IMMUTABLE',\n      data: {\n        src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\nexport default class SimpleVideoEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleVideoEditor.js',
                    })
                  ),
                  vt(
                    d.a,
                    null,
                    vt(p.a, { level: 2 }, 'Advanced Video Example'),
                    vt(ot, null),
                    vt(y.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState, convertFromRaw } from 'draft-js';\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  alignmentPlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst videoPlugin = createVideoPlugin({ decorator });\nconst { types } = videoPlugin;\nconst plugins = [focusPlugin, alignmentPlugin, resizeablePlugin, videoPlugin];\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: types.VIDEOTYPE,\n      mutability: 'IMMUTABLE',\n      data: {\n        src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: '97vas',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'bbc5n',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'iqdh',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'fg6vi',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: '7bvko',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\nexport default class CustomVideoEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <AlignmentTool />\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomVideoEditor.js',
                    })
                  ),
                  vt(
                    d.a,
                    null,
                    vt(p.a, { level: 2 }, 'Add Video Button Example'),
                    vt(ht, null),
                    vt(y.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport VideoAdd from './VideoAdd';\nimport editorStyles from './editorStyles.module.css';\n\nconst videoPlugin = createVideoPlugin();\n\nconst plugins = [videoPlugin];\n\nexport default class CustomVideoEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <VideoAdd\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          modifier={videoPlugin.addVideo}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomAddVideoVideoEditor.js',
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
    Infj: function (t, e, n) {
      t.exports = {
        root: 'styles_root__1UmUV',
        param: 'styles_param__2s2rx',
        paramName: 'styles_paramName__zLiX4',
        subParams: 'styles_subParams__1OpOh',
        subParam: 'styles_subParam__syQEM',
        subParamName: 'styles_subParamName__FYs3M',
        list: 'styles_list__21nQC',
        listEntry: 'styles_listEntry__3JrfH',
        guideCodeBlock: 'styles_guideCodeBlock__28vsT',
      };
    },
    Kqn8: function (t, e, n) {
      'use strict';
      var i = n('zpdM'),
        o = n('ERkP'),
        a = n.n(o),
        r = n('7nmT'),
        s = n.n(r);
      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var u = function (t, e) {
          return Math.ceil(t / e) * e;
        },
        p = function (t) {
          var e = t.config,
            n = t.store;
          return function (t) {
            var i, r;
            return (
              (r = i = (function (e) {
                var i, o;
                function r() {
                  for (
                    var t, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    ((t = e.call.apply(e, [this].concat(o)) || this).state = {
                      hoverPosition: {},
                      clicked: !1,
                    }),
                    (t.wrapper = void 0),
                    (t.setEntityData = function (e) {
                      t.props.blockProps.setResizeData(e);
                    }),
                    (t.mouseLeave = function () {
                      t.state.clicked || t.setState({ hoverPosition: {} });
                    }),
                    (t.mouseMove = function (e) {
                      var n = t.props,
                        i = n.vertical,
                        o = n.horizontal,
                        a = n.isResizable,
                        r = t.state.hoverPosition,
                        c = s.a.findDOMNode(d(t)).getBoundingClientRect(),
                        l = e.clientX - c.left,
                        u = e.clientY - c.top,
                        p = !(!i || 'auto' === i) && u < 6,
                        f = !!o && l < 6,
                        m = !!o && l >= c.width - 6,
                        y =
                          !(!i || 'auto' === i) &&
                          u >= c.height - 6 &&
                          u < c.height,
                        h = {
                          isTop: p,
                          isLeft: f,
                          isRight: m,
                          isBottom: y,
                          canResize: (p || f || m || y) && a,
                        };
                      Object.keys(h).filter(function (t) {
                        return r[t] !== h[t];
                      }).length && t.setState({ hoverPosition: h });
                    }),
                    (t.mouseDown = function (e) {
                      if (t.state.hoverPosition.canResize) {
                        e.preventDefault();
                        var i = t.props,
                          o = i.resizeSteps,
                          a = i.vertical,
                          r = i.horizontal,
                          c = t.state.hoverPosition,
                          l = c.isTop,
                          p = c.isLeft,
                          f = c.isRight,
                          m = c.isBottom,
                          y = s.a.findDOMNode(d(t)),
                          h = e.clientX,
                          g = e.clientY,
                          v = parseInt(
                            document.defaultView.getComputedStyle(y).width,
                            10
                          ),
                          b = parseInt(
                            document.defaultView.getComputedStyle(y).height,
                            10
                          ),
                          S = function (e) {
                            var i = v + (p ? h - e.clientX : e.clientX - h),
                              s = b + e.clientY - g,
                              c = n.getEditorRef(),
                              d =
                                c.refs && c.refs.editor
                                  ? c.refs.editor
                                  : c.editor;
                            (i = Math.min(d.clientWidth, i)),
                              (s = Math.min(d.clientHeight, s));
                            var y = (100 / d.clientWidth) * i,
                              S = (100 / d.clientHeight) * s,
                              R = {};
                            (p || f) && 'relative' === r
                              ? (R.width = o ? u(y, o) : y)
                              : (p || f) &&
                                'absolute' === r &&
                                (R.width = o ? u(i, o) : i),
                              (l || m) && 'relative' === a
                                ? (R.height = o ? u(S, o) : S)
                                : (l || m) &&
                                  'absolute' === a &&
                                  (R.height = o ? u(s, o) : s),
                              e.preventDefault(),
                              t.setState(R);
                          };
                        document.addEventListener('mousemove', S, !1),
                          document.addEventListener(
                            'mouseup',
                            function e() {
                              document.removeEventListener('mousemove', S, !1),
                                document.removeEventListener('mouseup', e, !1);
                              var n = t.state,
                                i = n.width,
                                o = n.height;
                              t.setState({ clicked: !1 }),
                                t.setEntityData({ width: i, height: o });
                            },
                            !1
                          ),
                          t.setState({ clicked: !0 });
                      }
                    }),
                    t
                  );
                }
                return (
                  (o = e),
                  ((i = r).prototype = Object.create(o.prototype)),
                  (i.prototype.constructor = i),
                  l(i, o),
                  (r.prototype.render = function () {
                    var e = this,
                      i = this.props,
                      o = i.blockProps,
                      r = i.vertical,
                      s = i.horizontal,
                      l = i.initialWidth,
                      d = i.initialHeight,
                      u = i.style,
                      p = i.isResizable;
                    i.resizeSteps;
                    var f = (function (t, e) {
                        if (null == t) return {};
                        var n,
                          i,
                          o = {},
                          a = Object.keys(t);
                        for (i = 0; i < a.length; i++)
                          (n = a[i]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                        return o;
                      })(i, [
                        'blockProps',
                        'vertical',
                        'horizontal',
                        'initialWidth',
                        'initialHeight',
                        'style',
                        'isResizable',
                        'resizeSteps',
                      ]),
                      m = this.state,
                      y = m.width,
                      h = m.height,
                      g = m.hoverPosition,
                      v = g.isTop,
                      b = g.isLeft,
                      S = g.isRight,
                      R = g.isBottom,
                      E = c({ position: 'relative' }, u);
                    if ('auto' === s) E.width = 'auto';
                    else if ('relative' === s) {
                      var j = y || o.resizeData.width;
                      E.width = !j && l ? l : (j || 40) + '%';
                    } else if ('absolute' === s) {
                      var P = y || o.resizeData.width;
                      E.width = !P && l ? l : (P || 40) + 'px';
                    }
                    if ('auto' === r) E.height = 'auto';
                    else if ('relative' === r) {
                      var O = h || o.resizeData.height;
                      E.height = !O && d ? d : (O || 40) + '%';
                    } else if ('absolute' === r) {
                      var w = h || o.resizeData.height;
                      E.height = !w && d ? d : (w || 40) + '%';
                    }
                    E.cursor = p
                      ? (S && R) || (b && v)
                        ? 'nwse-resize'
                        : (S && v) || (R && b)
                        ? 'nesw-resize'
                        : S || b
                        ? 'ew-resize'
                        : R || v
                        ? 'ns-resize'
                        : 'default'
                      : 'default';
                    var C =
                      !n.getReadOnly || n.getReadOnly()
                        ? {}
                        : {
                            onMouseDown: this.mouseDown,
                            onMouseMove: this.mouseMove,
                            onMouseLeave: this.mouseLeave,
                          };
                    return a.a.createElement(
                      t,
                      c({}, f, C, {
                        blockProps: o,
                        ref: function (t) {
                          e.wrapper = t;
                        },
                        style: E,
                      })
                    );
                  }),
                  r
                );
              })(o.Component)),
              (i.displayName =
                'Resizable(' +
                (function (t) {
                  var e = t.WrappedComponent || t;
                  return e.displayName || e.name || 'Component';
                })(t) +
                ')'),
              (i.WrappedComponent = t.WrappedComponent || t),
              (i.defaultProps = c(
                {
                  horizontal: 'relative',
                  vertical: !1,
                  resizeSteps: 1,
                  isResizable: !0,
                },
                e
              )),
              r
            );
          };
        },
        f = function (t, e) {
          var n = e.getEditorState,
            o = e.setEditorState;
          return function (e) {
            var a = t.getEntityAt(0);
            if (a) {
              var r = n();
              r.getCurrentContent().mergeEntityData(a, c({}, e)),
                o(i.EditorState.forceSelection(r, r.getSelection()));
            }
          };
        };
      e.a = function (t) {
        var e = {
          getEditorRef: void 0,
          getReadOnly: void 0,
          getEditorState: void 0,
          setEditorState: void 0,
        };
        return {
          initialize: function (t) {
            var n = t.getEditorRef,
              i = t.getReadOnly,
              o = t.getEditorState,
              a = t.setEditorState;
            (e.getReadOnly = i),
              (e.getEditorRef = n),
              (e.getEditorState = o),
              (e.setEditorState = a);
          },
          decorator: p({ config: t, store: e }),
          blockRendererFn: function (t, e) {
            var n = e.getEditorState,
              i = e.setEditorState,
              o = t.getEntityAt(0),
              a = n().getCurrentContent();
            return {
              props: {
                resizeData: o ? a.getEntity(o).getData() : {},
                setResizeData: f(t, { getEditorState: n, setEditorState: i }),
              },
            };
          },
        };
      };
    },
    XDQD: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__cO0Jy' };
    },
    XmE9: function (t, e, n) {
      t.exports = {
        addVideo: 'styles_addVideo__3hal0',
        addVideoPopover: 'styles_addVideoPopover__3y_7E',
        addVideoClosedPopover: 'styles_addVideoClosedPopover__2oy2N',
        addVideoButton: 'styles_addVideoButton__akjNa',
        addVideoPressedButton:
          'styles_addVideoPressedButton__3GShB styles_addVideoButton__akjNa',
        addVideoBottomGradient: 'styles_addVideoBottomGradient__1Ir4O',
        addVideoInput: 'styles_addVideoInput__3l3U7',
        addVideoConfirmButton: 'styles_addVideoConfirmButton__34sjV',
      };
    },
    lMPV: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__1LQeC' };
    },
    resF: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/video',
        function () {
          return n('4G8O');
        },
      ]);
    },
    vq4c: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__34n8_' };
    },
  },
  [['resF', 0, 2, 1, 3, 4, 5]],
]);
