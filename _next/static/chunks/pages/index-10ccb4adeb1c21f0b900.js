_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    '/uQW': function (t, e, u) {
      'use strict';
      u.d(e, 'a', function () {
        return f;
      });
      var n = u('ERkP'),
        r = u.n(n),
        a = u('ENCy'),
        o = u('zpdM'),
        i = u('KNE6');
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var u = arguments[e];
              for (var n in u)
                Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var l = (function (t) {
        var e, u;
        function n() {
          for (var e, u = arguments.length, n = new Array(u), r = 0; r < u; r++)
            n[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(n)) || this).state = {
              isVisible: !1,
              position: void 0,
              overrideContent: void 0,
            }),
            (e.toolbar = null),
            (e.onOverrideContent = function (t) {
              e.setState({ overrideContent: t });
            }),
            (e.onSelectionChanged = function () {
              setTimeout(function () {
                if (e.toolbar) {
                  var t = e.props.store.getItem('getEditorRef')();
                  if (t) {
                    for (
                      var u =
                        t.refs && t.refs.editor ? t.refs.editor : t.editor;
                      -1 === u.className.indexOf('DraftEditor-root');

                    )
                      u = u.parentNode;
                    var n = u.getBoundingClientRect(),
                      r = u.ownerDocument && u.ownerDocument.defaultView,
                      a = Object(o.getVisibleSelectionRect)(r || window);
                    if (a) {
                      var i = {
                        top:
                          u.offsetTop -
                          e.toolbar.offsetHeight +
                          (a.top - n.top) -
                          5,
                        left: u.offsetLeft + (a.left - n.left) + a.width / 2,
                      };
                      e.setState({ position: i });
                    }
                  }
                }
              });
            }),
            e
          );
        }
        (u = t),
          ((e = n).prototype = Object.create(u.prototype)),
          (e.prototype.constructor = e),
          c(e, u);
        var a = n.prototype;
        return (
          (a.UNSAFE_componentWillMount = function () {
            this.props.store.subscribeToItem(
              'selection',
              this.onSelectionChanged
            );
          }),
          (a.componentWillUnmount = function () {
            this.props.store.unsubscribeFromItem(
              'selection',
              this.onSelectionChanged
            );
          }),
          (a.getStyle = function () {
            var t = this.props.store,
              e = this.state,
              u = e.overrideContent,
              n = e.position,
              r = t.getItem('getEditorState')().getSelection(),
              a = (!r.isCollapsed() && r.getHasFocus()) || u,
              o = s({}, n);
            return (
              a
                ? ((o.visibility = 'visible'),
                  (o.transform = 'translate(-50%) scale(1)'),
                  (o.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)'))
                : ((o.transform = 'translate(-50%) scale(0)'),
                  (o.visibility = 'hidden')),
              o
            );
          }),
          (a.render = function () {
            var t = this,
              e = this.props,
              u = e.theme,
              n = e.store,
              a = this.state.overrideContent,
              o = {
                theme: u.buttonStyles,
                getEditorState: n.getItem('getEditorState'),
                setEditorState: n.getItem('setEditorState'),
                onOverrideContent: this.onOverrideContent,
              };
            return r.a.createElement(
              'div',
              {
                className: u.toolbarStyles.toolbar,
                style: this.getStyle(),
                ref: function (e) {
                  t.toolbar = e;
                },
              },
              a ? r.a.createElement(a, o) : this.props.children(o)
            );
          }),
          n
        );
      })(r.a.Component);
      l.defaultProps = {
        children: function (t) {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(i.l, t),
            r.a.createElement(i.f, t),
            r.a.createElement(i.n, t),
            r.a.createElement(i.h, t)
          );
        },
      };
      function f(t) {
        var e = t.className,
          u = void 0 === e ? 's1o2cezu' : e;
        return r.a.createElement('div', { className: u });
      }
      var p = {
        buttonStyles: {
          buttonWrapper: 'bpsgbes',
          button: 'b181v2oy',
          active: 'a9immln',
        },
        toolbarStyles: { toolbar: 'tukdd6b' },
      };
      e.b = function (t) {
        void 0 === t && (t = {});
        var e = Object(a.a)({ isVisible: !1 }),
          u = t.theme,
          n = void 0 === u ? p : u;
        return {
          initialize: function (t) {
            var u = t.getEditorState,
              n = t.setEditorState,
              r = t.getEditorRef;
            e.updateItem('getEditorState', u),
              e.updateItem('setEditorState', n),
              e.updateItem('getEditorRef', r);
          },
          onChange: function (t) {
            return e.updateItem('selection', t.getSelection()), t;
          },
          InlineToolbar: function (t) {
            return r.a.createElement(l, s({}, t, { store: e, theme: n }));
          },
        };
      };
    },
    '0Oas': function (t, e, u) {
      'use strict';
      var n = u('ERkP'),
        r = u.n(n),
        a = u('zpdM'),
        o = u('7O4Y');
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var u = arguments[e];
              for (var n in u)
                Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function s(t, e) {
        if (null == t) return {};
        var u,
          n,
          r = {},
          a = Object.keys(t);
        for (n = 0; n < a.length; n++)
          (u = a[n]), e.indexOf(u) >= 0 || (r[u] = t[u]);
        return r;
      }
      var c = function (t, e, u) {
        var n = t
            .getCurrentContent()
            .createEntity('IMAGE', 'IMMUTABLE', i({}, u, { src: e }))
            .getLastCreatedEntityKey(),
          r = a.AtomicBlockUtils.insertAtomicBlock(t, n, ' ');
        return a.EditorState.forceSelection(
          r,
          r.getCurrentContent().getSelectionAfter()
        );
      };
      function l(t) {
        var e = t.block,
          u = t.className,
          n = t.theme,
          a = void 0 === n ? {} : n,
          c = s(t, ['block', 'className', 'theme']);
        c.blockProps,
          c.customStyleMap,
          c.customStyleFn,
          c.decorator,
          c.forceSelection,
          c.offsetKey,
          c.selection,
          c.tree,
          c.blockStyleFn,
          c.preventScroll;
        var l = c.contentState,
          f = s(c, [
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
          p = Object(o.a)(a.image, u),
          d = l.getEntity(e.getEntityAt(0)).getData().src;
        return r.a.createElement(
          'img',
          i({}, f, { src: d, role: 'presentation', className: p })
        );
      }
      var f = {};
      e.a = function (t) {
        void 0 === t && (t = {});
        var e = t.theme ? t.theme : f,
          u = t.imageComponent || l;
        t.decorator && (u = t.decorator(u));
        var n = function (t) {
          return r.a.createElement(u, i({}, t, { theme: e }));
        };
        return {
          blockRendererFn: function (t, e) {
            var u = e.getEditorState;
            if ('atomic' === t.getType()) {
              var r = u().getCurrentContent(),
                a = t.getEntityAt(0);
              if (!a) return null;
              var o = r.getEntity(a).getType();
              return 'IMAGE' === o || 'image' === o
                ? { component: n, editable: !1 }
                : null;
            }
            return null;
          },
          addImage: c,
        };
      };
    },
    '23aj': function (t, e, u) {
      'use strict';
      u.r(e),
        u.d(e, 'default', function () {
          return pt;
        });
      var n = u('ERkP'),
        r = u.n(n),
        a = u('vRNQ'),
        o = u.n(a),
        i = u('xJKF'),
        s = u('u4Vz'),
        c = u('GFFh'),
        l = u('1MwI'),
        f = u('NYlB'),
        p = u.n(f),
        d = r.a.createElement;
      function A() {
        var t = Object(n.useRef)(null),
          e = Object(n.useRef)(null),
          r = Object(n.useRef)(null),
          a = Object(n.useRef)(null),
          o = Object(n.useRef)(null);
        return (
          Object(n.useEffect)(function () {
            var n = u('XQ8u');
            n({
              el: t.current,
              'stroke-dashoffset': [570, 1140],
              duration: 800,
              easing: 'easeOutSine',
              delay: 600,
            }),
              n({
                el: e.current,
                'stroke-dashoffset': [85, 0],
                duration: 900,
                easing: 'linear',
                delay: 1100,
              }),
              n({
                el: r.current,
                'stroke-dashoffset': [48, 0],
                duration: 900,
                easing: 'linear',
                delay: 1100,
              }),
              n({
                el: a.current,
                'stroke-dashoffset': [228, 456],
                duration: 900,
                easing: 'linear',
                delay: 1100,
              }),
              n({
                el: o.current,
                rx: [0, 3.6743313],
                ry: [0, 1.73943662],
                duration: 600,
                easing: 'easeOutQuad',
                delay: 1500,
              });
          }, []),
          d(
            'svg',
            { className: p.a.logo, viewBox: '0 0 263 209', version: '1.1' },
            d(
              'g',
              {
                id: 'Page-1',
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
              },
              d(
                'g',
                {
                  id: 'Pencil',
                  transform: 'translate(177.000000, 1.000000)',
                  stroke: '#979797',
                  strokeWidth: '2',
                  fill: '#FFFFFF',
                },
                d('path', {
                  d:
                    'M9.86222802,83.2346527 C19.7086177,60.3135066 19.0904437,60.4954622 28.5876706,39.951712 C38.4066597,18.711948 62.1639292,-4.34969769 69.2604522,0.785282207 C76.3569752,5.92026211 68.390785,32.8458652 59.3370307,46.9675386 C50.2832764,61.089212 26.4106229,88.7005045 26.4106229,88.7005045 C26.4106229,88.7005045 15.8709471,84.8808725 9.86222802,83.2346527 Z',
                  id: 'Path-2',
                  strokeDasharray: '228',
                  strokeDashoffset: '228',
                  ref: a,
                }),
                d('path', {
                  d:
                    'M27.0409545,85.9009649 C27.0409545,84.3313098 26.1525667,82.9025007 24.698475,81.8335735 C23.0842946,80.6469623 20.7729906,79.9038379 18.2059893,79.9038379 C13.3265727,79.9038379 9.37102405,82.5888431 9.37102405,85.9009649 C9.37102405,89.2130867 13.3265727,91.8980919 18.2059893,91.8980919 C23.0854058,91.8980919 27.0409545,89.2130867 27.0409545,85.9009649 Z',
                  id: 'Oval-1',
                  transform:
                    'translate(18.205989, 85.900965) rotate(14.000000) translate(-18.205989, -85.900965) ',
                  strokeDasharray: '48',
                  strokeDashoffset: '48',
                  ref: r,
                }),
                d('path', {
                  d:
                    'M0.014878413,113.951878 C1.78180994,108.545401 2.43334044,105.616394 2.43334044,95.9203125 C3.53217498,94.3115413 4.86453139,92.7130126 6.26188059,91.2345519 C9.7362174,87.5585412 12.0429116,84.7660539 13.7303754,84.2627016 C17.9673635,84.2627016 20.6406783,85.746119 22.9093963,86.9867691 C22.9093963,90.2466481 22.134279,93.848891 19.3059407,100.370564 C9.49146758,105.559173 5.55996694,109.67568 0.014878413,113.951878 Z',
                  id: 'Path-1',
                  strokeDasharray: '85',
                  strokeDashoffset: '85',
                  ref: e,
                })
              ),
              d(
                'g',
                {
                  id: 'Line',
                  transform: 'translate(1.000000, 117.000000)',
                  stroke: '#979797',
                },
                d('ellipse', {
                  id: 'Oval-1',
                  fill: '#979797',
                  cx: '174.040826',
                  cy: '1.73943662',
                  rx: '0',
                  ry: '0',
                  ref: o,
                }),
                d('path', {
                  d:
                    'M173.726977,1.74286972 C173.726977,1.74286972 81.2371686,10.7928991 76.8796413,26.5927817 C72.522114,42.3926643 296.495571,20.2825558 256.053049,46.3454959 C215.610526,72.408436 0.0593251408,90.9481221 0.0593251408,90.9481221',
                  id: 'Path-5',
                  strokeDasharray: '570',
                  strokeDashoffset: '570',
                  ref: t,
                })
              )
            )
          )
        );
      }
      var m = u('98Mn'),
        g = u('+40x'),
        h = u('9zpB'),
        E = u('YITQ'),
        C = u('Diez'),
        F = u('L9Z3'),
        v = u('mwv6'),
        B = u('XuLV'),
        y = u('+3DM'),
        b = u('QjfH'),
        D = u('YQ7a'),
        S = u('F3tW'),
        w = u('l/ED'),
        k = u('/uQW'),
        M = u('YfPl'),
        O = u('0Oas'),
        _ = u('Dmjd'),
        N = u('m4hd'),
        j = u('EPMb'),
        x = u('zpdM'),
        I = u('hgJK'),
        T = u.n(I),
        R = u('Mpt7'),
        P = Object(R.a)({
          data: {
            'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {
              id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',
              url: 'images/unicorn-4.png',
            },
            'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {
              id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',
              url: 'images/unicorn-1.png',
            },
            'e14b5a20-1025-4952-b731-41cd4b118ba0': {
              id: 'e14b5a20-1025-4952-b731-41cd4b118ba0',
              url: 'images/unicorn-6.png',
            },
            '659a0dbf-5f85-4f32-999d-eb9ba6b0f417': {
              id: '659a0dbf-5f85-4f32-999d-eb9ba6b0f417',
              url: 'images/unicorn-2.png',
            },
            'fab0ae95-ae95-4775-b484-72c290437602': {
              id: 'fab0ae95-ae95-4775-b484-72c290437602',
              url: 'images/unicorn-5.png',
            },
            '71853190-8acd-4d3b-b4fd-63f7b0648daa': {
              id: '71853190-8acd-4d3b-b4fd-63f7b0648daa',
              url: 'images/unicorn-3.png',
            },
          },
        }),
        K = [
          {
            name: 'Matthew Russell',
            link: 'https://twitter.com/mrussell247',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            link: 'https://twitter.com/juliandoesstuff',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            link: 'https://twitter.com/jyopur',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            link: 'https://twitter.com/mxstbr',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            link: 'https://twitter.com/nikgraf',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            link: 'https://twitter.com/psbrandt',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        L = {
          entityMap: {
            0: {
              type: 'IMAGE',
              mutability: 'IMMUTABLE',
              data: { src: '/images/canada-landscape-small.jpg' },
            },
          },
          blocks: [
            {
              key: '5ab2o',
              text:
                'You can add Emojis by typing colon : or mentions with an @. Add Stickers and undo your actions with the undo button below \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: '6u7zo',
              text: '',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: '9gm3s',
              text:
                'Further you can have images in your text field. These images can be align and drag & dropped anywhere in the editor.',
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
                'In addition rich text formatting tools are available to you in the sidebar, but also inline toolbar when selecting a text range.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        z = r.a.createElement,
        H = Object(S.a)(),
        W = Object(B.a)(),
        Y = Object(b.a)(),
        Q = Object(D.a)(),
        U = Object(w.a)(),
        q = Object(y.a)({ stickers: P }),
        J = Object(k.b)(),
        X = Object(M.a)(),
        Z = Object(_.a)(),
        V = Object(j.a)(),
        G = Object(N.a)(),
        $ = Object(v.a)(G.decorator, Z.decorator, V.decorator),
        tt = Object(O.a)({ decorator: $ }),
        et = Q.MentionSuggestions,
        ut = H.EmojiSuggestions,
        nt = q.StickerSelect,
        rt = U.UndoButton,
        at = U.RedoButton,
        ot = J.InlineToolbar,
        it = X.SideToolbar,
        st = G.AlignmentTool,
        ct = [H, W, q, Y, Q, U, J, X, V, Z, G, tt];
      function lt() {
        var t = Object(n.useRef)(null),
          e = Object(n.useState)(!1),
          u = e[0],
          r = e[1],
          a = Object(n.useState)(function () {
            return x.EditorState.createWithContent(Object(x.convertFromRaw)(L));
          }),
          o = a[0],
          i = a[1],
          s = Object(n.useState)(K),
          c = s[0],
          l = s[1],
          f = Object(n.useCallback)(function (t) {
            i(t);
          }, []),
          p = Object(n.useCallback)(function (t) {
            var e = t.value;
            l(Object(D.b)(e, K));
          }, []),
          d = Object(n.useMemo)(
            function () {
              return { onChange: f, state: { editorState: o } };
            },
            [f, o]
          );
        return z(
          'div',
          { className: T.a.root },
          z(
            'div',
            {
              className: T.a.editor,
              onClick: function () {
                t.current.focus();
              },
            },
            z(v.c, {
              editorKey: 'editor',
              editorState: o,
              onChange: f,
              plugins: ct,
              spellCheck: !0,
              ref: t,
            }),
            z(it, null),
            z(ot, null),
            z(st, null)
          ),
          z(
            'div',
            null,
            z(et, {
              onSearchChange: p,
              suggestions: c,
              onOpenChange: function (t) {
                r(t);
              },
              open: u,
            }),
            z(ut, null),
            z('div', { className: T.a.editorButton }, z(nt, { editor: d })),
            z('div', { className: T.a.editorButton }, z(rt, null)),
            z('div', { className: T.a.editorButton }, z(at, null))
          )
        );
      }
      var ft = r.a.createElement;
      function pt() {
        return ft(
          'div',
          null,
          ft(
            'div',
            { className: o.a.header },
            ft(
              c.a,
              null,
              ft(A, null),
              ft('div', { className: o.a.logoText }, 'DraftJS Plugins'),
              ft(
                'p',
                { className: o.a.tagline },
                'High quality plugins with great UX'
              ),
              ft(l.a, {
                user: 'draft-js-plugins',
                repo: 'draft-js-plugins',
                size: 'large',
              })
            )
          ),
          ft(i.a, null),
          ft(g.a, null),
          ft(
            h.a,
            null,
            ft(
              'p',
              { className: o.a.whatText },
              'Slack-like emoji autocompletion, Facebook-like stickers & mentions, and many more features out of the box to enhance your web application.'
            ),
            ft(E.a, { level: 2 }, 'Wait, but why?'),
            ft(
              'p',
              { className: o.a.whyText },
              "Facebook's rich-text editor framework",
              ft(
                m.a,
                { href: 'https://facebook.github.io/draft-js/' },
                '\xa0DraftJS\xa0'
              ),
              'built on top of',
              ft(
                m.a,
                { href: 'https://facebook.github.io/react/' },
                '\xa0React\xa0'
              ),
              "allows you to create powerful editors. We're building a plugin architecture on top of it that aims to provide you with plug & play extensions. It comes with a set of plugins with great UX serving mobile & desktop as well as screen-readers. You can combine them in any way you want or build your own."
            )
          ),
          ft(
            C.a,
            null,
            ft(
              'div',
              { className: o.a.demoWrapper },
              ft(E.a, { level: 2 }, 'Gif Demo'),
              ft('br', null),
              ft('br', null),
              ft('img', {
                src: '/images/demo.gif',
                role: 'presentation',
                width: '175',
                height: '250',
                className: o.a.demo,
              })
            )
          ),
          ft(
            h.a,
            null,
            ft(E.a, { level: 2 }, 'Help spread the word \u2026'),
            ft(F.a, null)
          ),
          ft(
            C.a,
            null,
            ft(E.a, { level: 2 }, 'Try it yourself'),
            ft(lt, null),
            ft(E.a, { level: 3 }, 'Plugins used in this Editor'),
            ft(
              'div',
              { className: o.a.flexCenteredDisplay },
              ft(
                'ul',
                null,
                ft('li', null, 'Stickers'),
                ft('li', null, 'Hashtags'),
                ft(
                  'li',
                  null,
                  'Linkify (automatically turns links into a-tags)'
                ),
                ft('li', null, 'Mentions'),
                ft('li', null, 'Emojis'),
                ft('li', null, 'Image'),
                ft('li', null, 'Focus'),
                ft('li', null, 'Alignment'),
                ft('li', null, 'Drag', "'", 'n', "'", 'Drop'),
                ft('li', null, 'Inline Toolbar'),
                ft('li', null, 'Side Toolbar')
              )
            ),
            ft(E.a, { level: 3 }, 'Why a UnicornEditor?'),
            ft(
              'p',
              { className: o.a.center },
              'Because Unicorns are cooler than cats \ud83d\ude1c'
            )
          ),
          ft(
            h.a,
            null,
            ft(E.a, { level: 2 }, 'Team'),
            ft(
              'div',
              { className: o.a.teamSection },
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/jyopur',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://avatars0.githubusercontent.com/u/2182307?v=3&s=200',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Jyoti Puri')
                )
              ),
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/juliandoesstuff',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://avatars2.githubusercontent.com/u/1188186?v=3&s=200',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Julian Krispel-Samsel')
                )
              ),
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/mrussell247',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://pbs.twimg.com/profile_images/517863945/mattsailing_200x200.jpg',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Matthew Russell')
                )
              ),
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/psbrandt',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_200x200.png',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Pascal Brandt')
                )
              ),
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/nikgraf',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://avatars0.githubusercontent.com/u/223045?v=3&s=200',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Nik Graf')
                )
              ),
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/mxstbr',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Max Stoiber')
                )
              ),
              ft(
                'div',
                { className: o.a.teamMember },
                ft(
                  m.a,
                  {
                    className: o.a.teamTwitterLink,
                    href: 'https://twitter.com/adrianmcli',
                  },
                  ft('img', {
                    className: o.a.teamImage,
                    src:
                      'https://avatars0.githubusercontent.com/u/943555?s=200&v=4',
                    role: 'presentation',
                  }),
                  ft('div', null, 'Adrian Li')
                )
              )
            ),
            ft(
              'p',
              { className: o.a.specialThanks },
              "Special thanks to all the people from Stripe for their invaluable feedback and funding Nik's efforts during the\xa0",
              ft(
                m.a,
                {
                  href:
                    'https://stripe.com/blog/open-source-retreat-2016-grantees',
                },
                'Stripe Open Source Retreat'
              ),
              '.'
            )
          ),
          ft(
            C.a,
            null,
            ft(E.a, { level: 2 }, 'Discussion and Support'),
            ft(
              'p',
              { className: o.a.center },
              'Join the ',
              ft('b', null, '#draft-js-plugins'),
              ' channel after signing up to the',
              ' ',
              ft(
                m.a,
                { href: 'https://draftjs.herokuapp.com' },
                'DraftJS Slack organization'
              ),
              '\xa0or check out or collection of frequently asked questions here:\xa0',
              ft(
                m.a,
                {
                  href:
                    'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/FAQ.md',
                },
                'FAQ'
              ),
              '.'
            ),
            ft(E.a, { level: 2 }, 'Stay Informed'),
            ft(
              'p',
              { className: o.a.center },
              'by signing up to our newsletter'
            )
          ),
          ft(s.a, null)
        );
      }
    },
    EPMb: function (t, e, u) {
      'use strict';
      var n = u('zpdM'),
        r = u('Svze'),
        a = u('ERkP'),
        o = u.n(a);
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var u = arguments[e];
              for (var n in u)
                Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var s = 'DRAFTJS_BLOCK_KEY',
        c = function (t, e, u, a) {
          var o = a.getEditorState,
            c = a.setEditorState,
            l = o(),
            f = e.data.getData('text'),
            p = f ? f.split(':') : [];
          if (2 !== p.length) return 'not-handled';
          if (p[0] === s) {
            var d = p[1],
              A = l.getCurrentContent(),
              m = A.getBlockForKey(d),
              g = A.getEntity(m.getEntityAt(0)),
              h = (function (t, e) {
                var u,
                  r = t.getKeyAfter(e),
                  a = t.getBlockForKey(r);
                u =
                  a &&
                  'unstyled' === a.getType() &&
                  0 === a.getLength() &&
                  a === t.getBlockMap().last()
                    ? new n.SelectionState({
                        anchorKey: e,
                        anchorOffset: 0,
                        focusKey: r,
                        focusOffset: 0,
                      })
                    : new n.SelectionState({
                        anchorKey: e,
                        anchorOffset: 0,
                        focusKey: e,
                        focusOffset: 1,
                      });
                var o = n.Modifier.setBlockType(t, u, 'unstyled');
                return n.Modifier.removeRange(o, u, 'backward');
              })(
                (function (t, e, u, a, o, s) {
                  void 0 === s && (s = ' ');
                  var c,
                    l,
                    f = t.getCurrentContent(),
                    p = e,
                    d = n.Modifier.removeRange(f, p, 'backward'),
                    A = d.getSelectionAfter(),
                    m = A.get('focusKey'),
                    g = f.getBlockForKey(m),
                    h = 0 === g.getLength() && null === g.getEntityAt(0),
                    E = 0 === p.getStartOffset();
                  h || E
                    ? ((c = A), (l = d))
                    : (c = (l = n.Modifier.splitBlock(
                        d,
                        A
                      )).getSelectionAfter());
                  var C = n.Modifier.setBlockType(l, c, u),
                    F = C.createEntity(
                      o || u,
                      'IMMUTABLE',
                      i({}, a)
                    ).getLastCreatedEntityKey(),
                    v = n.CharacterMetadata.create({ entity: F }),
                    B = [
                      new n.ContentBlock({
                        key: Object(n.genKey)(),
                        type: u,
                        text: s,
                        characterList: Object(r.List)(
                          Object(r.Repeat)(v, s.length || 1)
                        ),
                      }),
                      new n.ContentBlock({
                        key: Object(n.genKey)(),
                        type: 'unstyled',
                        text: '',
                        characterList: Object(r.List)(),
                      }),
                    ],
                    y = n.BlockMapBuilder.createFromArray(B);
                  return n.Modifier.replaceWithFragment(C, c, y);
                })(l, t, m.getType(), g.getData(), g.getType()),
                d
              ),
              E = new n.SelectionState({
                anchorKey: d,
                anchorOffset: 0,
                focusKey: d,
                focusOffset: 0,
              }),
              C = n.EditorState.push(l, h, 'insert-fragment');
            c(n.EditorState.forceSelection(C, E));
          }
          return 'handled';
        },
        l = function (t) {
          var e = t.store;
          return function (t) {
            var u = function (u) {
              var n = !e.getReadOnly || e.getReadOnly();
              return o.a.createElement(
                t,
                i({}, u, {
                  onDragStart: n
                    ? void 0
                    : function (t) {
                        (t.dataTransfer.dropEffect = 'move'),
                          t.dataTransfer.setData(
                            'text',
                            'DRAFTJS_BLOCK_KEY:' + u.block.getKey()
                          );
                      },
                })
              );
            };
            return (
              (u.displayName =
                'BlockDraggable(' +
                (function (t) {
                  var e = t.WrappedComponent || t;
                  return e.displayName || e.name || 'Component';
                })(t) +
                ')'),
              (u.WrappedComponent = t.WrappedComponent || t),
              u
            );
          };
        };
      e.a = function () {
        var t = { getReadOnly: void 0 };
        return {
          initialize: function (e) {
            var u = e.getReadOnly;
            t.getReadOnly = u;
          },
          decorator: l({ store: t }),
          handleDrop: c,
        };
      };
    },
    NYlB: function (t, e, u) {
      t.exports = {
        logo: 'Pen_logo__2DcFN',
        hiddenLogo: 'Pen_hiddenLogo__JAsMl Pen_logo__2DcFN',
      };
    },
    XQ8u: function (t, e, u) {
      var n = (function () {
        var t = function (t) {
            var e = t.length;
            return function u() {
              for (var n = arguments.length, r = Array(n), a = 0; a < n; a++)
                r[a] = arguments[a];
              return r.length < e
                ? function () {
                    for (
                      var t = arguments.length, e = Array(t), n = 0;
                      n < t;
                      n++
                    )
                      e[n] = arguments[n];
                    return u.apply(void 0, r.concat(e));
                  }
                : t.apply(void 0, r);
            };
          },
          e = function () {
            for (var t = arguments.length, e = Array(t), u = 0; u < t; u++)
              e[u] = arguments[u];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          u = function (t) {
            return function () {
              return !t.apply(void 0, arguments);
            };
          },
          n = {
            linear: function (t, e, u, n) {
              return e + (t / n) * u;
            },
            easeInQuad: function (t, e, u, n) {
              return u * (t /= n) * t + e;
            },
            easeInCubic: function (t, e, u, n) {
              return u * (t /= n) * t * t + e;
            },
            easeInQuart: function (t, e, u, n) {
              return u * (t /= n) * t * t * t + e;
            },
            easeInQuint: function (t, e, u, n) {
              return u * (t /= n) * t * t * t * t + e;
            },
            easeInSine: function (t, e, u, n) {
              return -u * Math.cos((t / n) * (Math.PI / 2)) + u + e;
            },
            easeInExpo: function (t, e, u, n) {
              return 0 == t ? e : u * Math.pow(2, 10 * (t / n - 1)) + e;
            },
            easeInCirc: function (t, e, u, n) {
              return -u * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
            },
            easeInElastic: function (t, e, u, n) {
              var r =
                4 >= arguments.length || void 0 === arguments[4]
                  ? 500
                  : arguments[4];
              if (0 == t) return e;
              if (1 == (t /= n)) return e + u;
              r = n * (1 - Math.min(r, 999) / 1e3);
              var a =
                u < Math.abs(u)
                  ? r / 4
                  : (r / (2 * Math.PI)) * Math.asin(u / u);
              return (
                -u *
                  Math.pow(2, 10 * --t) *
                  Math.sin((2 * (t * n - a) * Math.PI) / r) +
                e
              );
            },
            easeInBack: function (t, e, u, n) {
              return u * (t /= n) * t * (2.70158 * t - 1.70158) + e;
            },
            easeOutQuad: function (t, e, u, n) {
              return -u * (t /= n) * (t - 2) + e;
            },
            easeOutCubic: function (t, e, u, n) {
              return u * ((t = t / n - 1) * t * t + 1) + e;
            },
            easeOutQuart: function (t, e, u, n) {
              return -u * ((t = t / n - 1) * t * t * t - 1) + e;
            },
            easeOutQuint: function (t, e, u, n) {
              return u * ((t = t / n - 1) * t * t * t * t + 1) + e;
            },
            easeOutSine: function (t, e, u, n) {
              return u * Math.sin((t / n) * (Math.PI / 2)) + e;
            },
            easeOutExpo: function (t, e, u, n) {
              return t == n ? e + u : u * (1 - Math.pow(2, (-10 * t) / n)) + e;
            },
            easeOutCirc: function (t, e, u, n) {
              return u * Math.sqrt(1 - (t = t / n - 1) * t) + e;
            },
            easeOutElastic: function (t, e, u, n) {
              var r =
                4 >= arguments.length || void 0 === arguments[4]
                  ? 500
                  : arguments[4];
              return 0 == t
                ? e
                : 1 == (t /= n)
                ? e + u
                : ((r = n * (1 - Math.min(r, 999) / 1e3)),
                  u *
                    Math.pow(2, -10 * t) *
                    Math.sin(
                      (2 *
                        (t * n -
                          (u < Math.abs(u)
                            ? r / 4
                            : (r / (2 * Math.PI)) * Math.asin(u / u))) *
                        Math.PI) /
                        r
                    ) +
                    u +
                    e);
            },
            easeOutBack: function (t, e, u, n) {
              return (
                u * ((t = t / n - 1) * t * (2.70158 * t + 1.70158) + 1) + e
              );
            },
            easeOutBounce: function (t, e, u, n) {
              return (t /= n) < 1 / 2.75
                ? 7.5625 * u * t * t + e
                : t < 2 / 2.75
                ? u * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
                : t < 2.5 / 2.75
                ? u * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
                : u * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
            },
            easeInOutQuad: function (t, e, u, n) {
              return 1 > (t /= n / 2)
                ? (u / 2) * t * t + e
                : (-u / 2) * (--t * (t - 2) - 1) + e;
            },
            easeInOutCubic: function (t, e, u, n) {
              return 1 > (t /= n / 2)
                ? (u / 2) * t * t * t + e
                : (u / 2) * ((t -= 2) * t * t + 2) + e;
            },
            easeInOutQuart: function (t, e, u, n) {
              return 1 > (t /= n / 2)
                ? (u / 2) * t * t * t * t + e
                : (-u / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
            easeInOutQuint: function (t, e, u, n) {
              return 1 > (t /= n / 2)
                ? (u / 2) * t * t * t * t * t + e
                : (u / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
            easeInOutSine: function (t, e, u, n) {
              return (-u / 2) * (Math.cos((Math.PI * t) / n) - 1) + e;
            },
            easeInOutExpo: function (t, e, u, n) {
              return 0 == t
                ? e
                : t == n
                ? e + u
                : 1 > (t /= n / 2)
                ? (u / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (u / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
            easeInOutCirc: function (t, e, u, n) {
              return 1 > (t /= n / 2)
                ? (-u / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (u / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
            easeInOutElastic: function (t, e, u, n) {
              var r =
                4 >= arguments.length || void 0 === arguments[4]
                  ? 500
                  : arguments[4];
              if (0 == t) return e;
              if (2 == (t /= n / 2)) return e + u;
              r = n * (1 - Math.min(r, 999) / 1e3) * 1.5;
              var a =
                u < Math.abs(u)
                  ? r / 4
                  : (r / (2 * Math.PI)) * Math.asin(u / u);
              return 1 > t
                ? -0.5 *
                    u *
                    Math.pow(2, 10 * --t) *
                    Math.sin((2 * (t * n - a) * Math.PI) / r) +
                    e
                : u *
                    Math.pow(2, -10 * --t) *
                    Math.sin((2 * (t * n - a) * Math.PI) / r) *
                    0.5 +
                    u +
                    e;
            },
            easeInOutBack: function (t, e, u, n) {
              var r = 1.70158;
              return 1 > (t /= n / 2)
                ? (u / 2) * t * t * ((1 + (r *= 1.525)) * t - r) + e
                : (u / 2) * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) +
                    e;
            },
          },
          r = function (t) {
            return t[0];
          },
          a = function (t) {
            return t.reduce(function (t, e) {
              return t.concat(e);
            });
          },
          o = Array.prototype.includes
            ? function (t, e) {
                return t.includes(e);
              }
            : function (t, e) {
                return t.some(function (t) {
                  return t === e;
                });
              },
          i = function (t) {
            for (
              var e = arguments.length, n = Array(1 < e ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            var i = a(n);
            return t.filter(function (t) {
              return u(o)(i, t);
            });
          },
          s = function (t) {
            return t instanceof Map
              ? t
              : (function (t) {
                  var e = new Map();
                  return (
                    Object.keys(t).forEach(function (u) {
                      return e.set(u, t[u]);
                    }),
                    e
                  );
                })(t);
          },
          c = function (t) {
            return /^#/.test(t);
          },
          l = function (t) {
            return /^rgb/.test(t);
          },
          f = (function () {
            var t = function (t) {
                return 7 > t.length
                  ? t.split('').reduce(function (t, e) {
                      return t + e + e;
                    })
                  : t;
              },
              u = function (t) {
                return t.match(/[\d\w]{2}/g).map(function (t) {
                  return parseInt(t, 16);
                });
              };
            return function (n) {
              return l(n)
                ? n
                : 'rgb(' +
                    (n = e(t, u)(n))[0] +
                    ', ' +
                    n[1] +
                    ', ' +
                    n[2] +
                    ')';
            };
          })(),
          p = function (t) {
            return d('string' == typeof t ? document.querySelectorAll(t) : t);
          },
          d = (function () {
            var t = [NodeList, HTMLCollection, Set];
            return function (e) {
              return Array.isArray(e)
                ? e
                : t.some(function (t) {
                    return e instanceof t;
                  })
                ? Array.from(e)
                : e.nodeType
                ? [e]
                : e.get();
            };
          })(),
          A = new Map();
        'el delay begin complete loop direction'
          .split(' ')
          .forEach(function (t) {
            return A.set(t, null);
          }),
          A.set('duration', 1e3),
          A.set('easing', 'easeOutElastic');
        var m = (function () {
            var t = Array.from(A.keys()).filter(function (t) {
                return A.get(t);
              }),
              e = function (e) {
                return t.every(function (t) {
                  return e.has(t);
                });
              },
              u = function (e) {
                var u = new Map(e);
                return (
                  t.forEach(function (t) {
                    u.has(t) || u.set(t, A.get(t));
                  }),
                  u
                );
              };
            return function (t) {
              return e(t) ? t : u(t);
            };
          })(),
          g = (function () {
            var e = t(function (t, e) {
                return Array.isArray(t.get(e));
              }),
              n = function (t) {
                return y(t).every(e(t));
              },
              r = function (t) {
                return y(t).filter(u(e(t)));
              };
            return function (t) {
              if (n(t)) return t;
              var e = new Map(t);
              return (
                r(e).forEach(function (t) {
                  return e.set(t, [S.get(t), e.get(t)]);
                }),
                e
              );
            };
          })(),
          h = (function () {
            var e = function (t) {
                return /\D$/.test(t);
              },
              u = t(function (t, u) {
                return e(u) || /scale/.test(t)
                  ? u
                  : /rotate|skew/.test(t)
                  ? u + 'deg'
                  : u + 'px';
              }),
              n = function (t, u) {
                return u.every(function (u) {
                  return t.get(u).every(e);
                });
              };
            return function (t) {
              var e = y(t).filter(w);
              if (n(t, e)) return t;
              var r = new Map(t);
              return (
                e.forEach(function (e) {
                  return r.set(e, t.get(e).map(u(e)));
                }),
                r
              );
            };
          })(),
          E = (function () {
            var e = t(function (t, e) {
                return t.get(e).some(c);
              }),
              u = function (t) {
                return !b(t).some(e(t));
              },
              n = function (t) {
                return b(t).filter(e(t));
              };
            return function (t) {
              if (u(t)) return t;
              var e = new Map(t);
              return (
                n(t).forEach(function (t) {
                  return e.set(t, e.get(t).map(f));
                }),
                e
              );
            };
          })(),
          C = function (t) {
            var e = new Map(t);
            return (
              v(t).forEach(function (t) {
                return e.set(t, e.get(t).slice().reverse());
              }),
              e
            );
          },
          F = e(
            s,
            m,
            g,
            h,
            E,
            function (t) {
              return new Map(t).set('el', p(t.get('el')));
            },
            function (t) {
              return 'reverse' == t.get('direction') ? C(t) : t;
            }
          ),
          v = (function () {
            var t = Array.from(A.keys()),
              e = function (e) {
                return u(o)(t, e);
              };
            return function (t) {
              return Array.from(t.keys()).filter(e);
            };
          })(),
          B = (function () {
            var u = e(r, l),
              n = t(function (t, e) {
                var n,
                  r = (n = t.get(e).map(k))[0],
                  a = n[1];
                return (
                  (n = new Map()).set('prop', e),
                  n.set('from', r),
                  n.set('to', a),
                  n.set('isTransformFunction', w(e)),
                  n.set('isColor', u(t.get(e))),
                  /\d$/.test(t.get('easing'))
                    ? ((a = (r = t.get('easing').split(' '))[1]),
                      n.set('easing', r[0]),
                      n.set('frequency', a))
                    : n.set('easing', t.get('easing')),
                  n
                );
              });
            return function (t, e) {
              return v(t).map(n(t));
            };
          })(),
          y = (function () {
            var t = function (t) {
              return o(D, t);
            };
            return function (e) {
              return Array.from(e.keys()).filter(t);
            };
          })(),
          b = function (t) {
            return i(v(t), y(t));
          },
          D = 'opacity translateX translateY scale rotate scaleX scaleY rotateX rotateY perspective skewX skewY translateZ rotateZ scaleZ'.split(
            ' '
          ),
          S = new Map();
        !(function () {
          var t = ['opacity', 'scale', 'scaleX', 'scaleY'];
          D.forEach(function (e) {
            return S.set(e, o(t, e) ? 1 : 0);
          });
        })();
        var w = (function () {
            var t = D.filter(function (t) {
              return 'opacity' != t;
            });
            return function (e) {
              return o(t, e);
            };
          })(),
          k = (function () {
            var t = /-?\d*\.?\d+/g;
            return function (e) {
              var u = new Map();
              return (
                u.set(
                  'digits',
                  ('string' == typeof e ? e : String(e)).match(t).map(Number)
                ),
                u.set(
                  'others',
                  ('string' == typeof e ? e : String(e)).split(t)
                ),
                u
              );
            };
          })(),
          M = t(function (t, e, u) {
            return (function (t, e) {
              return e.reduce(function (e, u, n) {
                return e + t[n - 1] + u;
              });
            })(
              u
                .get('to')
                .get('digits')
                .map(function (r, a) {
                  if ((i = u.get('from').get('digits')[a]) == r) return i;
                  var o = r - i,
                    i = n[u.get('easing')](
                      e,
                      i,
                      o,
                      t.get('duration'),
                      u.get('frequency')
                    );
                  return u.get('isColor') ? Math.round(i) : i;
                }),
              u.get('to').get('others')
            );
          }),
          O = t(function (t, e) {
            var u = t.get(e.get('prop'));
            return r(u.slice(-1));
          }),
          _ = t(function (t, e, u) {
            var n = void 0;
            t.forEach(function (t, r) {
              t.get('isTransformFunction')
                ? (n || (n = []), n.push(t.get('prop') + '(' + e[r] + ')'))
                : 'opacity' == t.get('prop')
                ? (u.style.opacity = e[r])
                : u.setAttribute(t.get('prop'), e[r]);
            }),
              n && (u.style.transform = n.join(' '));
          }),
          N = (function () {
            var t = function (t, e) {
              e.get('begin') && e.get('begin')(e.get('el')),
                requestAnimationFrame(t);
            };
            return function (e, u) {
              return u.get('delay')
                ? setTimeout(function () {
                    return t(e, u);
                  }, u.get('delay'))
                : t(e, u);
            };
          })(),
          j = new Map(),
          x = (function () {
            var t = 0;
            return function (e) {
              var u = t++;
              return (j = new Map(j).set(u, e)), u;
            };
          })(),
          I = function (t) {
            var e = F(t),
              u = B(e),
              n = x(e.get('el')),
              r = new Map();
            !(function (t) {
              var e = y(t);
              if (e.length) {
                var u = [];
                e.some(w) && u.push('transform'),
                  o(e, 'opacity') && u.push('opacity');
                var n = u.join();
                t.get('el').forEach(function (t) {
                  t.style.willChange || (t.style.willChange = n);
                });
              }
            })(e),
              N(function t(a) {
                if (j.has(n)) {
                  r.has('start') || r.set('start', a),
                    r.set('elapsed', a - r.get('start')),
                    (a = r.get('elapsed') < e.get('duration'));
                  var o = u.map(a ? M(e, r.get('elapsed')) : O(e));
                  j.get(n).forEach(_(u, o)),
                    a
                      ? requestAnimationFrame(t)
                      : ((a = new Map(j)).delete(n),
                        (j = a),
                        e.get('complete') && e.get('complete')(e.get('el')),
                        e.get('loop') &&
                          (function (t) {
                            I(
                              (function () {
                                if ('alternate' == t.get('direction'))
                                  return C(t);
                                if ('reverse' == t.get('direction')) {
                                  var e = new Map(t);
                                  return e.delete('direction'), e;
                                }
                                return t;
                              })()
                            );
                          })(e));
                }
              }, e);
          };
        return (
          (I.stop = function (t) {
            var e = p(t),
              u = new Map(j);
            u.forEach(function (t, n) {
              var r = i(t, e);
              r.length ? u.set(n, r) : u.delete(n);
            }),
              (j = u);
          }),
          I
        );
      })();
      t.exports && (t.exports = n);
    },
    XuLV: function (t, e, u) {
      'use strict';
      var n = u('ERkP'),
        r = u.n(n),
        a = u('7O4Y');
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var u = arguments[e];
              for (var n in u)
                Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function i(t) {
        var e = t.theme,
          u = void 0 === e ? {} : e,
          n = t.className;
        t.decoratedText,
          t.dir,
          t.entityKey,
          t.getEditorState,
          t.offsetKey,
          t.setEditorState,
          t.contentState,
          t.blockKey;
        var i = (function (t, e) {
            if (null == t) return {};
            var u,
              n,
              r = {},
              a = Object.keys(t);
            for (n = 0; n < a.length; n++)
              (u = a[n]), e.indexOf(u) >= 0 || (r[u] = t[u]);
            return r;
          })(t, [
            'theme',
            'className',
            'decoratedText',
            'dir',
            'entityKey',
            'getEditorState',
            'offsetKey',
            'setEditorState',
            'contentState',
            'blockKey',
          ]),
          s = Object(a.a)(u.hashtag, n);
        return r.a.createElement('span', o({}, i, { className: s }));
      }
      var s = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D/
          .source,
        c = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/
          .source,
        l = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\u00b7/
          .source,
        f = {};
      function p(t, e) {
        var u;
        return (
          (e = e || ''),
          'string' !== typeof t
            ? (t.global && e.indexOf('g') < 0 && (e += 'g'),
              t.ignoreCase && e.indexOf('i') < 0 && (e += 'i'),
              t.multiline && e.indexOf('m') < 0 && (e += 'm'),
              (u = t.source))
            : (u = t),
          new RegExp(
            u.replace(/#\{(\w+)\}/g, function (t, e) {
              var u = f[e] || '';
              return 'string' !== typeof u ? u.source : u;
            }),
            e
          )
        );
      }
      (f.hashSigns = /[#\uff03]/),
        (f.hashtagAlpha = new RegExp('[' + s + ']')),
        (f.hashtagAlphaNumeric = new RegExp('[' + s + c + l + ']')),
        (f.endHashtagMatch = p(/^(?:#{hashSigns}|:\/\/)/)),
        (f.hashtagBoundary = new RegExp('(?:^|$|[^&' + s + c + l + '])')),
        (f.validHashtag = p(
          /(#{hashtagBoundary})(#{hashSigns})(?!\ufe0f|\u20e3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi
        ));
      var d = function (t, e) {
          (function (t) {
            if (!t || !t.match(f.hashSigns)) return [];
            var e = [];
            return (
              t.replace(f.validHashtag, function (t, u, n, r, a, o) {
                if (o.slice(a + t.length).match(f.endHashtagMatch)) return '';
                var i = a + u.length,
                  s = i + r.length + 1;
                return e.push({ hashtag: r, indices: [i, s] }), '';
              }),
              e
            );
          })(t.getText()).forEach(function (t) {
            e(t.indices[0], t.indices[1]);
          });
        },
        A = { hashtag: 'hngfxw3' };
      e.a = function (t) {
        void 0 === t && (t = {});
        var e = t.theme ? t.theme : A;
        return {
          decorators: [
            {
              strategy: d,
              component: function (t) {
                return r.a.createElement(i, o({}, t, { theme: e }));
              },
            },
          ],
        };
      };
    },
    YfPl: function (t, e, u) {
      'use strict';
      var n = u('ERkP'),
        r = u.n(n),
        a = u('ENCy'),
        o = u('aWzz'),
        i = u.n(o),
        s = u('b//S'),
        c = u.n(s),
        l = u('KNE6');
      function f() {
        return (f =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var u = arguments[e];
              for (var n in u)
                Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function p(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          d(t, e);
      }
      function d(t, e) {
        return (d =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var A = (function (t) {
        function e() {
          for (var e, u = arguments.length, n = new Array(u), r = 0; r < u; r++)
            n[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(n)) || this).state = {
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
              u,
              n = this.props,
              a = n.theme,
              o = n.getEditorState,
              i = n.setEditorState;
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
                    null == (u = a.blockTypeSelectStyles) ? void 0 : u.popup,
                  style: this.state.style,
                },
                this.props.childNodes({
                  getEditorState: o,
                  setEditorState: i,
                  theme: a.buttonStyles,
                })
              )
            );
          }),
          e
        );
      })(n.Component);
      A.propTypes = { childNodes: i.a.func };
      var m = (function (t) {
        function e() {
          for (var e, u = arguments.length, n = new Array(u), r = 0; r < u; r++)
            n[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(n)) || this).state = {
              position: { transform: 'scale(0)' },
            }),
            (e.onEditorStateChange = function (t) {
              var u = t.getSelection();
              if (u.getHasFocus()) {
                var n = t.getCurrentContent().getBlockForKey(u.getStartKey()),
                  r = c.a.encode(n.getKey(), 0, 0);
                setTimeout(function () {
                  var t = document.querySelectorAll(
                      '[data-offset-key="' + r + '"]'
                    )[0],
                    u = e.props.store.getItem('getEditorRef')();
                  if (u) {
                    for (
                      var n =
                        u.refs && u.refs.editor ? u.refs.editor : u.editor;
                      -1 === n.className.indexOf('DraftEditor-root');

                    )
                      n = n.parentNode;
                    var a = {
                      top: t.offsetTop + n.offsetTop,
                      transform: 'scale(1)',
                      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                    };
                    'right' === e.props.position
                      ? (a.left = n.offsetLeft + n.offsetWidth + 80 - 36)
                      : (a.left = n.offsetLeft - 80),
                      e.setState({ position: a });
                  }
                }, 0);
              } else e.setState({ position: { transform: 'scale(0)' } });
            }),
            e
          );
        }
        p(e, t);
        var u = e.prototype;
        return (
          (u.componentDidMount = function () {
            this.props.store.subscribeToItem(
              'editorState',
              this.onEditorStateChange
            );
          }),
          (u.componentWillUnmount = function () {
            this.props.store.unsubscribeFromItem(
              'editorState',
              this.onEditorStateChange
            );
          }),
          (u.render = function () {
            var t,
              e = this.props,
              u = e.theme,
              n = e.store;
            return r.a.createElement(
              'div',
              {
                className: null == (t = u.toolbarStyles) ? void 0 : t.wrapper,
                style: this.state.position,
              },
              r.a.createElement(A, {
                getEditorState: n.getItem('getEditorState'),
                setEditorState: n.getItem('setEditorState'),
                theme: u,
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
            r.a.createElement(l.i, t),
            r.a.createElement(l.k, t),
            r.a.createElement(l.e, t),
            r.a.createElement(l.g, t),
            r.a.createElement(l.o, t),
            r.a.createElement(l.m, t)
          );
        },
      }),
        (m.propTypes = { children: i.a.func });
      var g = {
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
          u = t,
          n = u.position,
          o = void 0 === n ? 'left' : n,
          i = u.theme,
          s = void 0 === i ? g : i;
        return {
          initialize: function (t) {
            var u = t.setEditorState,
              n = t.getEditorState,
              r = t.getEditorRef;
            e.updateItem('getEditorState', n),
              e.updateItem('setEditorState', u),
              e.updateItem('getEditorRef', r);
          },
          onChange: function (t) {
            return e.updateItem('editorState', t), t;
          },
          SideToolbar: function (t) {
            return r.a.createElement(
              m,
              f({}, t, { store: e, theme: s, position: o })
            );
          },
        };
      };
    },
    hgJK: function (t, e, u) {
      t.exports = {
        root: 'UnicornEditor_root__267Fm',
        editor: 'UnicornEditor_editor__2ZK01',
        stateButton: 'UnicornEditor_stateButton__2YI4g',
        pressedStateButton:
          'UnicornEditor_pressedStateButton__21ADm UnicornEditor_stateButton__2YI4g',
        editorButton: 'UnicornEditor_editorButton__36_2Z',
      };
    },
    'l/ED': function (t, e, u) {
      'use strict';
      var n = u('ERkP'),
        r = u.n(n),
        a = u('aWzz'),
        o = u.n(a),
        i = u('zpdM'),
        s = u('7O4Y');
      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var u = arguments[e];
              for (var n in u)
                Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function l(t, e) {
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
      var p = (function (t) {
        function e() {
          for (var e, u = arguments.length, n = new Array(u), r = 0; r < u; r++)
            n[r] = arguments[r];
          return (
            ((e =
              t.call.apply(t, [this].concat(n)) || this).onClick = function (
              t
            ) {
              t.stopPropagation(),
                e.props.store.setEditorState(
                  i.EditorState.undo(e.props.store.getEditorState())
                );
            }),
            e
          );
        }
        return (
          l(e, t),
          (e.prototype.render = function () {
            var t = this.props,
              e = t.theme,
              u = void 0 === e ? {} : e,
              n = t.children,
              a = t.className,
              o = Object(s.a)(u.undo, a);
            return r.a.createElement(
              'button',
              {
                disabled:
                  !this.props.store ||
                  !this.props.store.getEditorState ||
                  this.props.store.getEditorState().getUndoStack().isEmpty(),
                type: 'button',
                onClick: this.onClick,
                className: o,
              },
              n
            );
          }),
          e
        );
      })(n.Component);
      p.propTypes = { children: o.a.node.isRequired, theme: o.a.any };
      var d = (function (t) {
        function e() {
          for (var e, u = arguments.length, n = new Array(u), r = 0; r < u; r++)
            n[r] = arguments[r];
          return (
            ((e =
              t.call.apply(t, [this].concat(n)) || this).onClick = function (
              t
            ) {
              t.stopPropagation(),
                e.props.store.setEditorState(
                  i.EditorState.redo(e.props.store.getEditorState())
                );
            }),
            e
          );
        }
        return (
          l(e, t),
          (e.prototype.render = function () {
            var t = this.props,
              e = t.theme,
              u = void 0 === e ? {} : e,
              n = t.children,
              a = t.className,
              o = Object(s.a)(u.redo, a);
            return r.a.createElement(
              'button',
              {
                disabled:
                  !this.props.store ||
                  !this.props.store.getEditorState ||
                  this.props.store.getEditorState().getRedoStack().isEmpty(),
                type: 'button',
                onClick: this.onClick,
                className: o,
              },
              n
            );
          }),
          e
        );
      })(n.Component);
      d.propTypes = { children: o.a.node.isRequired, theme: o.a.any };
      var A = 'b1lh9taq',
        m = { redo: A, undo: A };
      e.a = function (t) {
        void 0 === t && (t = {});
        var e = t.undoContent ? t.undoContent : '\u21ba',
          u = t.redoContent ? t.redoContent : '\u21bb',
          n = { getEditorState: void 0, setEditorState: void 0 },
          a = t.theme ? t.theme : m;
        return {
          UndoButton: function (t) {
            return r.a.createElement(p, c({}, t, { theme: a, store: n }), e);
          },
          RedoButton: function (t) {
            return r.a.createElement(d, c({}, t, { theme: a, store: n }), u);
          },
          initialize: function (t) {
            var e = t.getEditorState,
              u = t.setEditorState;
            (n.getEditorState = e), (n.setEditorState = u);
          },
        };
      };
    },
    vRNQ: function (t, e, u) {
      t.exports = {
        header: 'Home_header__3vlZW',
        logoText: 'Home_logoText__3PiXd',
        tagline: 'Home_tagline__306P2',
        center: 'Home_center__2Zxdr',
        whatText: 'Home_whatText__IxwTK',
        whyText: 'Home_whyText__1DEHD',
        flexCenteredDisplay: 'Home_flexCenteredDisplay__9mcXp',
        teamImage: 'Home_teamImage__EFu5S',
        teamTwitterLink: 'Home_teamTwitterLink__3gYtU',
        teamSection: 'Home_teamSection__3pb-F',
        teamMember: 'Home_teamMember__39NMq',
        specialThanks: 'Home_specialThanks__25gm4',
        demo: 'Home_demo__ubHEL',
        demoWrapper: 'Home_demoWrapper__3yJTM',
      };
    },
    yaYD: function (t, e, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return u('23aj');
        },
      ]);
    },
  },
  [['yaYD', 0, 2, 8, 10, 11, 1, 3, 5, 7, 6, 12, 9]],
]);
