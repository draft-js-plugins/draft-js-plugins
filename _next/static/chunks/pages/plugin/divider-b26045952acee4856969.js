_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [20],
  {
    '7FFL': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/divider',
        function () {
          return n('fWkA');
        },
      ]);
    },
    Dmjd: function (e, t, n) {
      'use strict';
      var r = n('zpdM'),
        o = n('Svze'),
        a = n('b//S'),
        i = n.n(a),
        c = n('ERkP'),
        l = n.n(c),
        s = n('7O4Y');
      function u(e) {
        var t = (function (e, t, n) {
            var o = t.getStartKey(),
              a = [];
            return (
              e.getBlockMap().forEach(function (e, t) {
                a.push(e), t === o && a.push(n);
              }),
              e.merge({
                blockMap: r.BlockMapBuilder.createFromArray(a),
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
            new r.ContentBlock({
              key: Object(r.genKey)(),
              type: 'unstyled',
              text: '',
              characterList: Object(o.List)(),
            })
          ),
          n = t.merge({
            selectionAfter: t.getSelectionAfter().set('hasFocus', !0),
          });
        return r.EditorState.push(e, n, 'insert-fragment');
      }
      var d = function (e, t, n, o) {
        var a = e(),
          c = a.getSelection().getAnchorKey(),
          l =
            'up' === n
              ? a.getCurrentContent().getBlockBefore(c)
              : a.getCurrentContent().getBlockAfter(c);
        if ((!l || l.get('key') !== c) && l) {
          var s = i.a.encode(l.getKey(), 0, 0),
            u = document.querySelectorAll('[data-offset-key="' + s + '"]')[0],
            d = window.getSelection(),
            f = document.createRange();
          f.setStart(u, 0), f.setEnd(u, 0), d.removeAllRanges(), d.addRange(f);
          var p = 'up' === n ? l.getLength() : 0;
          o.preventDefault(),
            t(
              r.EditorState.forceSelection(
                a,
                new r.SelectionState({
                  anchorKey: l.getKey(),
                  anchorOffset: p,
                  focusKey: l.getKey(),
                  focusOffset: p,
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
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var p = function (e) {
        var t = e.theme,
          n = e.blockKeyStore;
        return function (e) {
          var r = l.a.forwardRef(function (r, o) {
            Object(c.useEffect)(function () {
              return (
                n.add(r.block.getKey()),
                function () {
                  n.remove(r.block.getKey());
                }
              );
            }, []);
            var a = r.blockProps,
              i = r.className,
              u = a.isFocused
                ? Object(s.a)(i, t.focused)
                : Object(s.a)(i, t.unfocused);
            return l.a.createElement(
              e,
              f({}, r, {
                ref: o,
                onClick: function (e) {
                  e.preventDefault(),
                    r.blockProps.isFocused || r.blockProps.setFocusToBlock();
                },
                className: u,
              })
            );
          });
          return (
            (r.displayName =
              'BlockFocus(' +
              (function (e) {
                var t = e.WrappedComponent || e;
                return t.displayName || t.name || 'Component';
              })(e) +
              ')'),
            (r.WrappedComponent = e.WrappedComponent || e),
            r
          );
        };
      };
      var g = function (e, t, n) {
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
        m = function (e, t) {
          return (function (e) {
            var t = e.getSelection(),
              n = e.getCurrentContent();
            return g(n, t.getStartKey(), t.getEndKey());
          })(e).includes(t);
        };
      var h = { unfocused: 'uz5k6rs', focused: 'f1vn2c6d' },
        v = function (e, t) {
          var n = e.getSelection();
          if (n.getAnchorKey() !== n.getFocusKey()) return !1;
          var r = e.getCurrentContent().getBlockForKey(n.getAnchorKey());
          return t.includes(r.getKey());
        },
        y = [
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
            var e = Object(o.List)();
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
          c = e.theme ? e.theme : h;
        return {
          handleReturn: function (e, t, n) {
            var r = n.setEditorState;
            return v(t, a) ? (r(u(t)), 'handled') : 'not-handled';
          },
          handleKeyCommand: function (e, t, n, o) {
            var i = o.setEditorState;
            if (y.includes(e) && v(t, a)) {
              var c = t.getSelection().getStartKey(),
                l = (function (e, t) {
                  var n = e.getCurrentContent(),
                    o = n.getKeyBefore(t),
                    a = n.getBlockForKey(o);
                  if (void 0 === a) {
                    var i = new r.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 1,
                    });
                    (n = r.Modifier.removeRange(n, i, 'backward')),
                      (n = r.Modifier.setBlockType(n, i, 'unstyled'));
                    var c = r.EditorState.push(e, n, 'remove-range'),
                      l = new r.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: t,
                        focusOffset: 0,
                      });
                    return r.EditorState.forceSelection(c, l);
                  }
                  var s = new r.SelectionState({
                    anchorKey: o,
                    anchorOffset: a.getLength(),
                    focusKey: t,
                    focusOffset: 1,
                  });
                  n = r.Modifier.removeRange(n, s, 'backward');
                  var u = r.EditorState.push(e, n, 'remove-range'),
                    d = new r.SelectionState({
                      anchorKey: o,
                      anchorOffset: a.getLength(),
                      focusKey: o,
                      focusOffset: a.getLength(),
                    });
                  return r.EditorState.forceSelection(u, d);
                })(t, c);
              if (l !== t) return i(l), 'handled';
            }
            return 'not-handled';
          },
          onChange: function (e) {
            var o = e.getCurrentContent();
            if (!o.equals(n)) return (n = o), e;
            n = o;
            var i = e.getSelection();
            if (t && i.equals(t)) return (t = e.getSelection()), e;
            var c = a.getAll();
            if (
              t &&
              g(o, t.getStartKey(), t.getEndKey()).some(function (e) {
                return c.includes(e);
              })
            )
              return (t = i), r.EditorState.forceSelection(e, e.getSelection());
            return g(o, i.getStartKey(), i.getEndKey()).some(function (e) {
              return c.includes(e);
            })
              ? ((t = i), r.EditorState.forceSelection(e, e.getSelection()))
              : e;
          },
          keyBindingFn: function (e, t) {
            var n = t.getEditorState,
              r = t.setEditorState,
              o = n();
            if (
              v(o, a) &&
              (37 === e.keyCode && d(n, r, 'up', e),
              39 === e.keyCode && d(n, r, 'down', e),
              38 === e.keyCode && d(n, r, 'up', e),
              40 === e.keyCode)
            )
              d(n, r, 'down', e);
            else if (!e.shiftKey) {
              if (37 === e.keyCode) {
                var i = o.getSelection(),
                  c = i.getAnchorKey(),
                  l = o.getCurrentContent().getBlockBefore(c);
                l &&
                  0 === i.getAnchorOffset() &&
                  a.includes(l.getKey()) &&
                  d(n, r, 'up', e);
              }
              if (39 === e.keyCode) {
                var s = o.getSelection(),
                  u = s.getFocusKey(),
                  f = o.getCurrentContent().getBlockForKey(u),
                  p = o.getCurrentContent().getBlockAfter(u),
                  g =
                    'atomic' !== f.getType() &&
                    f.getLength() === s.getFocusOffset();
                p && g && a.includes(p.getKey()) && d(n, r, 'down', e);
              }
              if (38 === e.keyCode) {
                var m = o.getSelection().getAnchorKey(),
                  h = o.getCurrentContent().getBlockBefore(m);
                h && a.includes(h.getKey()) && d(n, r, 'up', e);
              }
              if (40 === e.keyCode) {
                var y = o.getSelection().getAnchorKey(),
                  b = o.getCurrentContent().getBlockAfter(y);
                b && a.includes(b.getKey()) && d(n, r, 'down', e);
              }
            }
          },
          blockRendererFn: function (e, t) {
            var n = t.getEditorState,
              o = t.setEditorState;
            if ('atomic' === e.getType()) {
              var a = n();
              return {
                props: {
                  isFocused: m(a, e.getKey()),
                  isCollapsedSelection: a.getSelection().isCollapsed(),
                  setFocusToBlock: function () {
                    !(function (e, t, n) {
                      var o = e(),
                        a = i.a.encode(n.getKey(), 0, 0),
                        c = document.querySelectorAll(
                          '[data-offset-key="' + a + '"]'
                        )[0],
                        l = window.getSelection(),
                        s = document.createRange();
                      s.setStart(c, 0),
                        s.setEnd(c, 0),
                        l.removeAllRanges(),
                        l.addRange(s),
                        t(
                          r.EditorState.forceSelection(
                            o,
                            new r.SelectionState({
                              anchorKey: n.getKey(),
                              anchorOffset: 0,
                              focusKey: n.getKey(),
                              focusOffset: 0,
                              isBackward: !1,
                            })
                          )
                        );
                    })(n, o, e);
                  },
                },
              };
            }
          },
          decorator: p({ theme: c, blockKeyStore: a }),
        };
      };
    },
    ENCy: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('zpdM');
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e) {
        void 0 === e && (e = {});
        var t = e,
          n = {};
        return {
          subscribeToItem: function (e, t) {
            (n[e] = n[e] || []), n[e].push(t);
          },
          unsubscribeFromItem: function (e, t) {
            var r = n[e];
            r &&
              (n[e] = r.filter(function (e) {
                return e !== t;
              }));
          },
          updateItem: function (e, r) {
            var a;
            t = o({}, t, (((a = {})[e] = r), a));
            var i = n[e];
            i &&
              i.forEach(function (n) {
                return n(t[e]);
              });
          },
          getItem: function (e) {
            return t[e];
          },
        };
      }
      var i = {
        decodeOffsetKey: function (e) {
          var t = e.split('-'),
            n = t[0],
            r = t[1],
            o = t[2];
          return {
            blockKey: n,
            decoratorKey: parseInt(r, 10),
            leafKey: parseInt(o, 10),
          };
        },
        createLinkAtSelection: function (e, t) {
          var n = e
              .getCurrentContent()
              .createEntity('LINK', 'MUTABLE', { url: t })
              .getLastCreatedEntityKey(),
            o = r.RichUtils.toggleLink(e, e.getSelection(), n);
          return r.EditorState.forceSelection(o, e.getSelection());
        },
        removeLinkAtSelection: function (e) {
          var t = e.getSelection();
          return r.RichUtils.toggleLink(e, t, null);
        },
        collapseToEnd: function (e) {
          var t = e.getSelection();
          return r.EditorState.forceSelection(
            e,
            t.merge({
              anchorKey: t.getEndKey(),
              focusKey: t.getEndKey(),
              anchorOffset: t.getEndOffset(),
              focusOffset: t.getEndOffset(),
            })
          );
        },
        getCurrentEntityKey: function (e) {
          var t = e.getSelection(),
            n = t.getAnchorKey(),
            r = e.getCurrentContent().getBlockForKey(n),
            o = t.getAnchorOffset(),
            a = t.getIsBackward() ? o - 1 : o;
          return r.getEntityAt(a);
        },
        getCurrentEntity: function (e) {
          var t = e.getCurrentContent(),
            n = this.getCurrentEntityKey(e);
          return n ? t.getEntity(n) : null;
        },
        hasEntity: function (e, t) {
          var n = this.getCurrentEntity(e);
          return Boolean(n && n.getType() === t);
        },
      };
      t.b = i;
    },
    FaFo: function (e, t, n) {
      e.exports = { editor: 'editorStyles_editor__WtRu-' };
    },
    KNE6: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return w;
      }),
        n.d(t, 'b', function () {
          return S;
        }),
        n.d(t, 'c', function () {
          return k;
        }),
        n.d(t, 'd', function () {
          return C;
        }),
        n.d(t, 'e', function () {
          return b;
        }),
        n.d(t, 'f', function () {
          return d;
        }),
        n.d(t, 'g', function () {
          return E;
        }),
        n.d(t, 'h', function () {
          return f;
        }),
        n.d(t, 'i', function () {
          return g;
        }),
        n.d(t, 'j', function () {
          return h;
        }),
        n.d(t, 'k', function () {
          return m;
        }),
        n.d(t, 'l', function () {
          return u;
        }),
        n.d(t, 'm', function () {
          return y;
        }),
        n.d(t, 'n', function () {
          return p;
        }),
        n.d(t, 'o', function () {
          return v;
        });
      var r = n('ERkP'),
        o = n.n(r),
        a = n('zpdM'),
        i = n('7O4Y');
      function c(e) {
        var t = e.blockType,
          n = e.children;
        return function (e) {
          var r = e.theme,
            c = (function () {
              if (!e.getEditorState) return !1;
              var n = e.getEditorState();
              return (
                n
                  .getCurrentContent()
                  .getBlockForKey(n.getSelection().getStartKey())
                  .getType() === t
              );
            })()
              ? Object(i.a)(r.button, r.active)
              : r.button;
          return o.a.createElement(
            'div',
            {
              className: r.buttonWrapper,
              onMouseDown: function (e) {
                e.preventDefault();
              },
            },
            o.a.createElement('button', {
              className: c,
              onClick: function (n) {
                n.preventDefault(),
                  e.setEditorState(
                    a.RichUtils.toggleBlockType(e.getEditorState(), t)
                  );
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      function l(e) {
        var t = e.style,
          n = e.children;
        return function (e) {
          var r = e.theme,
            c =
              e.getEditorState &&
              e.getEditorState().getCurrentInlineStyle().has(t)
                ? Object(i.a)(r.button, r.active)
                : r.button;
          return o.a.createElement(
            'div',
            {
              className: r.buttonWrapper,
              onMouseDown: function (e) {
                e.preventDefault();
              },
            },
            o.a.createElement('button', {
              className: c,
              onClick: function (n) {
                n.preventDefault(),
                  e.setEditorState(
                    a.RichUtils.toggleInlineStyle(e.getEditorState(), t)
                  );
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      function s(e) {
        var t = e.alignment,
          n = e.children;
        return function (e) {
          var r = e.theme,
            a = e.alignment === t ? Object(i.a)(r.button, r.active) : r.button;
          return o.a.createElement(
            'div',
            {
              className: r.buttonWrapper,
              onMouseDown: function (e) {
                e.preventDefault();
              },
            },
            o.a.createElement('button', {
              className: a,
              onClick: function (n) {
                n.preventDefault(), e.setAlignment({ alignment: t });
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      var u = l({
          style: 'ITALIC',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            o.a.createElement('path', {
              d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
            })
          ),
        }),
        d = l({
          style: 'BOLD',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        f = l({
          style: 'CODE',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            o.a.createElement('path', {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            })
          ),
        }),
        p = l({
          style: 'UNDERLINE',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            o.a.createElement('path', {
              d:
                'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
            })
          ),
        }),
        g = c({ blockType: 'header-one', children: 'H1' }),
        m = c({ blockType: 'header-two', children: 'H2' }),
        h = c({ blockType: 'header-three', children: 'H3' }),
        v = c({
          blockType: 'unordered-list-item',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
          ),
        }),
        y = c({
          blockType: 'ordered-list-item',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        b = c({
          blockType: 'blockquote',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        E = c({
          blockType: 'code-block',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            o.a.createElement('path', {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            })
          ),
        }),
        S = s({
          alignment: 'default',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        w = s({
          alignment: 'center',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        k = s({
          alignment: 'left',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        C = s({
          alignment: 'right',
          children: o.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            o.a.createElement('path', {
              d:
                'M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z',
            }),
            o.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        });
      l({
        style: 'SUBSCRIPT',
        children: o.a.createElement(
          'div',
          null,
          'x',
          o.a.createElement('sub', null, '2')
        ),
      }),
        l({
          style: 'SUPERSCRIPT',
          children: o.a.createElement(
            'div',
            null,
            'x',
            o.a.createElement('sup', null, '2')
          ),
        });
    },
    Tw9o: function (e, t, n) {
      e.exports = { root: 'InlineCode_root__1EGp7' };
    },
    YfPl: function (e, t, n) {
      'use strict';
      var r = n('ERkP'),
        o = n.n(r),
        a = n('ENCy'),
        i = n('aWzz'),
        c = n.n(i),
        l = n('b//S'),
        s = n.n(l),
        u = n('KNE6');
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          p(e, t);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var g = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).state = {
              style: { transform: 'translate(-50%) scale(0)' },
            }),
            (t.onMouseEnter = function () {
              t.setState({
                style: {
                  transform: 'translate(-50%) scale(1)',
                  transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                },
              });
            }),
            (t.onMouseLeave = function () {
              t.setState({ style: { transform: 'translate(-50%) scale(0)' } });
            }),
            (t.onMouseDown = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            t
          );
        }
        return (
          f(t, e),
          (t.prototype.render = function () {
            var e,
              t,
              n,
              r = this.props,
              a = r.theme,
              i = r.getEditorState,
              c = r.setEditorState;
            return o.a.createElement(
              'div',
              {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onMouseDown: this.onMouseDown,
              },
              o.a.createElement(
                'div',
                {
                  className:
                    null == (e = a.blockTypeSelectStyles)
                      ? void 0
                      : e.blockType,
                },
                o.a.createElement(
                  'svg',
                  {
                    height: '24',
                    viewBox: '0 0 24 24',
                    width: '24',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  o.a.createElement('path', {
                    d: 'M0 0h24v24H0z',
                    fill: 'none',
                  }),
                  o.a.createElement('path', {
                    d:
                      'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
                  })
                )
              ),
              o.a.createElement('div', {
                className:
                  null == (t = a.blockTypeSelectStyles) ? void 0 : t.spacer,
              }),
              o.a.createElement(
                'div',
                {
                  className:
                    null == (n = a.blockTypeSelectStyles) ? void 0 : n.popup,
                  style: this.state.style,
                },
                this.props.childNodes({
                  getEditorState: i,
                  setEditorState: c,
                  theme: a.buttonStyles,
                })
              )
            );
          }),
          t
        );
      })(r.Component);
      g.propTypes = { childNodes: c.a.func };
      var m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).state = {
              position: { transform: 'scale(0)' },
            }),
            (t.onEditorStateChange = function (e) {
              var n = e.getSelection();
              if (n.getHasFocus()) {
                var r = e.getCurrentContent().getBlockForKey(n.getStartKey()),
                  o = s.a.encode(r.getKey(), 0, 0);
                setTimeout(function () {
                  var e = document.querySelectorAll(
                      '[data-offset-key="' + o + '"]'
                    )[0],
                    n = t.props.store.getItem('getEditorRef')();
                  if (n) {
                    for (
                      var r =
                        n.refs && n.refs.editor ? n.refs.editor : n.editor;
                      -1 === r.className.indexOf('DraftEditor-root');

                    )
                      r = r.parentNode;
                    var a = {
                      top: e.offsetTop + r.offsetTop,
                      transform: 'scale(1)',
                      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                    };
                    'right' === t.props.position
                      ? (a.left = r.offsetLeft + r.offsetWidth + 80 - 36)
                      : (a.left = r.offsetLeft - 80),
                      t.setState({ position: a });
                  }
                }, 0);
              } else t.setState({ position: { transform: 'scale(0)' } });
            }),
            t
          );
        }
        f(t, e);
        var n = t.prototype;
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
            var e,
              t = this.props,
              n = t.theme,
              r = t.store;
            return o.a.createElement(
              'div',
              {
                className: null == (e = n.toolbarStyles) ? void 0 : e.wrapper,
                style: this.state.position,
              },
              o.a.createElement(g, {
                getEditorState: r.getItem('getEditorState'),
                setEditorState: r.getItem('setEditorState'),
                theme: n,
                childNodes: this.props.children,
              })
            );
          }),
          t
        );
      })(o.a.Component);
      (m.defaultProps = {
        children: function (e) {
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(u.i, e),
            o.a.createElement(u.k, e),
            o.a.createElement(u.e, e),
            o.a.createElement(u.g, e),
            o.a.createElement(u.o, e),
            o.a.createElement(u.m, e)
          );
        },
      }),
        (m.propTypes = { children: c.a.func });
      var h = {
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
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = Object(a.a)({ isVisible: !1 }),
          n = e,
          r = n.position,
          i = void 0 === r ? 'left' : r,
          c = n.theme,
          l = void 0 === c ? h : c;
        return {
          initialize: function (e) {
            var n = e.setEditorState,
              r = e.getEditorState,
              o = e.getEditorRef;
            t.updateItem('getEditorState', r),
              t.updateItem('setEditorState', n),
              t.updateItem('getEditorRef', o);
          },
          onChange: function (e) {
            return t.updateItem('editorState', e), e;
          },
          SideToolbar: function (e) {
            return o.a.createElement(
              m,
              d({}, e, { store: t, theme: l, position: i })
            );
          },
        };
      };
    },
    bsbD: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('ERkP'),
        o = n.n(r),
        a = n('7O4Y'),
        i = (n('U/75'), n('Tw9o')),
        c = n.n(i),
        l = o.a.createElement;
      function s(e) {
        var t = e.code,
          n = e.className,
          r = Object(a.a)(c.a.root, n);
        return l(
          'span',
          { className: r },
          l('code', { dangerouslySetInnerHTML: { __html: t } })
        );
      }
    },
    fWkA: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return G;
        });
      var r = n('9fIP'),
        o = n('MMYH'),
        a = n('8K1b'),
        i = n('K/z8'),
        c = n('sRHE'),
        l = n('ERkP'),
        s = n.n(l),
        u = n('Diez'),
        d = n('9zpB'),
        f = n('YITQ'),
        p = n('ghfr'),
        g = n.n(p),
        m = n('lIm4'),
        h = n('pWxA'),
        v = n('zjfJ'),
        y = n('zpdM'),
        b = n('mwv6'),
        E = n('Dmjd'),
        S = n('YfPl'),
        w = n('7O4Y'),
        k = n('aWzz'),
        C = n.n(k);
      function L() {
        return (L =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function M(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      function K(e) {
        e.block;
        var t = e.className,
          n = e.theme,
          r = void 0 === n ? {} : n,
          o = M(e, ['block', 'className', 'theme']);
        o.blockProps,
          o.customStyleMap,
          o.customStyleFn,
          o.decorator,
          o.forceSelection,
          o.offsetKey,
          o.selection,
          o.tree,
          o.contentState,
          o.blockStyleFn,
          o.preventScroll;
        var a = M(o, [
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
          ]),
          i = Object(w.a)(r.divider, t);
        return s.a.createElement('hr', L({}, a, { className: i }));
      }
      var O = function (e) {
        var t = e.theme,
          n = void 0 === t ? {} : t,
          r = (function () {
            var t = e.getEditorState();
            return (
              t
                .getCurrentContent()
                .getBlockForKey(t.getSelection().getStartKey())
                .getType() === e.blockType
            );
          })()
            ? Object(w.a)(n.button, n.active)
            : n.button;
        return s.a.createElement(
          'div',
          {
            className: n.buttonWrapper,
            onMouseDown: function (e) {
              e.preventDefault();
            },
          },
          s.a.createElement(
            'button',
            {
              className: r,
              onClick: function (t) {
                t.preventDefault();
                var n = e.getEditorState(),
                  r = e.addDivider(n);
                e.setEditorState(r);
              },
              type: 'button',
            },
            s.a.createElement(
              'svg',
              {
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              s.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
              s.a.createElement('path', {
                d:
                  'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
              })
            )
          )
        );
      };
      function j(e) {
        return function (t, n) {
          var r = t
              .getCurrentContent()
              .createEntity(e, 'IMMUTABLE', n)
              .getLastCreatedEntityKey(),
            o = y.AtomicBlockUtils.insertAtomicBlock(t, r, ' ');
          return y.EditorState.forceSelection(
            o,
            o.getCurrentContent().getSelectionAfter()
          );
        };
      }
      O.propTypes = {
        theme: C.a.object,
        getEditorState: C.a.func.isRequired,
        setEditorState: C.a.func.isRequired,
        addDivider: C.a.func.isRequired,
      };
      var B = { divider: 'd6zlymw' },
        x = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.entityType,
            r = void 0 === n ? 'divider' : n,
            o = t.dividerComponent,
            a = void 0 === o ? K : o,
            i = t.buttonComponent,
            c = void 0 === i ? O : i,
            l = t.theme,
            u = void 0 === l ? B : l,
            d = t.decorator,
            f = a;
          'function' === typeof d && (f = d(f));
          var p = function (e) {
              return s.a.createElement(f, L({}, e, { theme: u }));
            },
            g = c;
          return {
            blockRendererFn: function (e, t) {
              var n = t.getEditorState;
              if ('atomic' === e.getType()) {
                var o = n().getCurrentContent(),
                  a = e.getEntityAt(0);
                if (!a) return null;
                if (o.getEntity(a).getType() === r)
                  return { component: p, editable: !1 };
              }
              return null;
            },
            DividerButton: function (e) {
              return s.a.createElement(g, L({}, e, { addDivider: j(r) }));
            },
            addDivider: j(r),
          };
        },
        N = n('FaFo'),
        z = n.n(N),
        T = s.a.createElement;
      function P(e) {
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
            r = Object(c.a)(e);
          if (t) {
            var o = Object(c.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var R = Object(E.a)(),
        _ = x({ decorator: Object(b.a)(R.decorator) }),
        D = _.DividerButton,
        A = Object(S.a)(),
        F = A.SideToolbar,
        H = [R, _, A],
        I = {
          entityMap: {
            0: { type: 'divider', mutability: 'IMMUTABLE', data: {} },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'This is a simple example for divider plugin. Click side toolbar divider button.',
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
          ],
        },
        W = (function (e) {
          Object(a.a)(n, e);
          var t = P(n);
          function n() {
            var e;
            Object(r.a)(this, n);
            for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              Object(v.a)(Object(h.a)(e), 'state', {
                editorState: y.EditorState.createWithContent(
                  Object(y.convertFromRaw)(I)
                ),
              }),
              Object(v.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(v.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return T(
                    'div',
                    { className: z.a.editor, onClick: this.focus },
                    T(b.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: H,
                      ref: function (t) {
                        e.editor = t;
                      },
                    }),
                    T(F, null, function (e) {
                      return T('div', null, T(D, e));
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        U = n('98Mn'),
        Z = n('bsbD'),
        q = n('3h/d'),
        V = s.a.createElement;
      function Y(e) {
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
            r = Object(c.a)(e);
          if (t) {
            var o = Object(c.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var G = (function (e) {
        Object(a.a)(n, e);
        var t = Y(n);
        function n() {
          return Object(r.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(o.a)(n, [
            {
              key: 'render',
              value: function () {
                return V(
                  q.a,
                  null,
                  V(
                    u.a,
                    null,
                    V(f.a, { level: 2 }, 'Divider'),
                    V(f.a, { level: 3 }, 'Supported Environment'),
                    V(
                      'ul',
                      { className: g.a.list },
                      V('li', { className: g.a.listEntry }, 'Desktop: Yes'),
                      V('li', { className: g.a.listEntry }, 'Mobile: Yes'),
                      V(
                        'li',
                        { className: g.a.listEntry },
                        'Screen-reader: Yes'
                      )
                    )
                  ),
                  V(
                    d.a,
                    null,
                    V(f.a, { level: 2 }, 'Getting Started'),
                    V(m.a, { code: 'npm install @draft-js-plugins/editor' }),
                    V(m.a, { code: 'npm install @draft-js-plugins/divider' }),
                    V(m.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createDividerPlugin from '@draft-js-plugins/divider';\nimport React from 'react';\n\nconst dividerPlugin = createDividerPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the dividerPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[dividerPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    V(f.a, { level: 3 }, 'Importing the default styles'),
                    V(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      V(Z.a, {
                        code:
                          'node_modules/@draft-js-plugins/divider/lib/plugin.css',
                      })
                    ),
                    V(f.a, { level: 4 }, 'Webpack Usage'),
                    V(
                      'ul',
                      { className: g.a.list },
                      V(
                        'li',
                        { className: g.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        V(Z.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      V(
                        'li',
                        { className: g.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        V(m.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: g.a.guideCodeBlock,
                        })
                      ),
                      V(
                        'li',
                        { className: g.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        V(m.a, {
                          code:
                            "import '@draft-js-plugins/divider/lib/plugin.css';",
                          className: g.a.guideCodeBlock,
                        })
                      ),
                      V(
                        'li',
                        { className: g.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    V(f.a, { level: 4 }, 'Browserify Usage'),
                    V(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      V(
                        U.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  V(
                    u.a,
                    null,
                    V(f.a, { level: 2 }, 'Configuration Parameters'),
                    V(
                      'div',
                      { className: g.a.param },
                      V('span', { className: g.a.paramName }, 'theme'),
                      V(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      V(
                        'div',
                        { className: g.a.subParams },
                        V(
                          'div',
                          { className: g.a.subParam },
                          V(
                            'span',
                            { className: g.a.subParamName },
                            'divider:'
                          ),
                          ' CSS class for the divider.'
                        )
                      )
                    ),
                    V(
                      'div',
                      { className: g.a.param },
                      V('span', { className: g.a.paramName }, 'entityType'),
                      V(
                        'span',
                        null,
                        'Entity type for divider. default type is `divider`'
                      )
                    ),
                    V(
                      'div',
                      { className: g.a.param },
                      V(
                        'span',
                        { className: g.a.paramName },
                        'dividerComponent'
                      ),
                      V(
                        'span',
                        null,
                        'Pass in a custom divider component to be rendered.'
                      )
                    )
                  ),
                  V(
                    u.a,
                    null,
                    V(
                      f.a,
                      { level: 2 },
                      'Divider + SideToolbar + Focus Example'
                    ),
                    V(W, null),
                    V(m.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';\nimport createDividerPlugin from '@draft-js-plugins/divider';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst dividerPlugin = createDividerPlugin({ decorator });\nconst { DividerButton } = dividerPlugin;\n\nconst sideToolbarPlugin = createSideToolbarPlugin();\nconst { SideToolbar } = sideToolbarPlugin;\n\nconst plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'divider',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example for divider plugin. Click side toolbar divider button.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n\n        <SideToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <DividerButton {...externalProps} />\n              </div>\n            )\n          }\n        </SideToolbar>\n      </div>\n    );\n  }\n}\n",
                      name: 'DividerWithSideToolbarEditor.js',
                    }),
                    V(m.a, {
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
    ghfr: function (e, t, n) {
      e.exports = {
        root: 'styles_root__25WAG',
        param: 'styles_param__2jueL',
        paramBig: 'styles_paramBig__5OpnV',
        paramName: 'styles_paramName__1qWUG',
        subParams: 'styles_subParams__foFQt',
        subParam: 'styles_subParam__3EKy5',
        subParamName: 'styles_subParamName__3h7dW',
        list: 'styles_list__21I2H',
        listEntry: 'styles_listEntry__1SkYe',
        guideCodeBlock: 'styles_guideCodeBlock__naOiM',
      };
    },
  },
  [['7FFL', 0, 2, 1, 3, 4]],
]);
