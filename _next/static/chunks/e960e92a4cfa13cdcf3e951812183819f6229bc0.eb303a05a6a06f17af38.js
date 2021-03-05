(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [5],
  {
    Dmjd: function (e, t, n) {
      'use strict';
      var r = n('zpdM'),
        o = n('Svze'),
        a = n('b//S'),
        c = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        u = n('7O4Y');
      function s(e) {
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
      var f = function (e, t, n, o) {
        var a = e(),
          i = a.getSelection().getAnchorKey(),
          l =
            'up' === n
              ? a.getCurrentContent().getBlockBefore(i)
              : a.getCurrentContent().getBlockAfter(i);
        if ((!l || l.get('key') !== i) && l) {
          var u = c.a.encode(l.getKey(), 0, 0),
            s = document.querySelectorAll('[data-offset-key="' + u + '"]')[0],
            f = window.getSelection(),
            d = document.createRange();
          d.setStart(s, 0), d.setEnd(s, 0), f.removeAllRanges(), f.addRange(d);
          var g = 'up' === n ? l.getLength() : 0;
          o.preventDefault(),
            t(
              r.EditorState.forceSelection(
                a,
                new r.SelectionState({
                  anchorKey: l.getKey(),
                  anchorOffset: g,
                  focusKey: l.getKey(),
                  focusOffset: g,
                  isBackward: !1,
                })
              )
            );
        }
      };
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
      var g = function (e) {
        var t = e.theme,
          n = e.blockKeyStore;
        return function (e) {
          var r = l.a.forwardRef(function (r, o) {
            Object(i.useEffect)(function () {
              return (
                n.add(r.block.getKey()),
                function () {
                  n.remove(r.block.getKey());
                }
              );
            }, []);
            var a = r.blockProps,
              c = r.className,
              s = a.isFocused
                ? Object(u.a)(c, t.focused)
                : Object(u.a)(c, t.unfocused);
            return l.a.createElement(
              e,
              d({}, r, {
                ref: o,
                onClick: function (e) {
                  e.preventDefault(),
                    r.blockProps.isFocused || r.blockProps.setFocusToBlock();
                },
                className: s,
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
      var h = function (e, t, n) {
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
        v = function (e, t) {
          return (function (e) {
            var t = e.getSelection(),
              n = e.getCurrentContent();
            return h(n, t.getStartKey(), t.getEndKey());
          })(e).includes(t);
        };
      var p = { unfocused: 'uz5k6rs', focused: 'f1vn2c6d' },
        m = function (e, t) {
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
          i = e.theme ? e.theme : p;
        return {
          handleReturn: function (e, t, n) {
            var r = n.setEditorState;
            return m(t, a) ? (r(s(t)), 'handled') : 'not-handled';
          },
          handleKeyCommand: function (e, t, n, o) {
            var c = o.setEditorState;
            if (y.includes(e) && m(t, a)) {
              var i = t.getSelection().getStartKey(),
                l = (function (e, t) {
                  var n = e.getCurrentContent(),
                    o = n.getKeyBefore(t),
                    a = n.getBlockForKey(o);
                  if (void 0 === a) {
                    var c = new r.SelectionState({
                      anchorKey: t,
                      anchorOffset: 0,
                      focusKey: t,
                      focusOffset: 1,
                    });
                    (n = r.Modifier.removeRange(n, c, 'backward')),
                      (n = r.Modifier.setBlockType(n, c, 'unstyled'));
                    var i = r.EditorState.push(e, n, 'remove-range'),
                      l = new r.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: t,
                        focusOffset: 0,
                      });
                    return r.EditorState.forceSelection(i, l);
                  }
                  var u = new r.SelectionState({
                    anchorKey: o,
                    anchorOffset: a.getLength(),
                    focusKey: t,
                    focusOffset: 1,
                  });
                  n = r.Modifier.removeRange(n, u, 'backward');
                  var s = r.EditorState.push(e, n, 'remove-range'),
                    f = new r.SelectionState({
                      anchorKey: o,
                      anchorOffset: a.getLength(),
                      focusKey: o,
                      focusOffset: a.getLength(),
                    });
                  return r.EditorState.forceSelection(s, f);
                })(t, i);
              if (l !== t) return c(l), 'handled';
            }
            return 'not-handled';
          },
          onChange: function (e) {
            var o = e.getCurrentContent();
            if (!o.equals(n)) return (n = o), e;
            n = o;
            var c = e.getSelection();
            if (t && c.equals(t)) return (t = e.getSelection()), e;
            var i = a.getAll();
            if (
              t &&
              h(o, t.getStartKey(), t.getEndKey()).some(function (e) {
                return i.includes(e);
              })
            )
              return (t = c), r.EditorState.forceSelection(e, e.getSelection());
            return h(o, c.getStartKey(), c.getEndKey()).some(function (e) {
              return i.includes(e);
            })
              ? ((t = c), r.EditorState.forceSelection(e, e.getSelection()))
              : e;
          },
          keyBindingFn: function (e, t) {
            var n = t.getEditorState,
              r = t.setEditorState,
              o = n();
            if (
              m(o, a) &&
              (37 === e.keyCode && f(n, r, 'up', e),
              39 === e.keyCode && f(n, r, 'down', e),
              38 === e.keyCode && f(n, r, 'up', e),
              40 === e.keyCode)
            )
              f(n, r, 'down', e);
            else if (!e.shiftKey) {
              if (37 === e.keyCode) {
                var c = o.getSelection(),
                  i = c.getAnchorKey(),
                  l = o.getCurrentContent().getBlockBefore(i);
                l &&
                  0 === c.getAnchorOffset() &&
                  a.includes(l.getKey()) &&
                  f(n, r, 'up', e);
              }
              if (39 === e.keyCode) {
                var u = o.getSelection(),
                  s = u.getFocusKey(),
                  d = o.getCurrentContent().getBlockForKey(s),
                  g = o.getCurrentContent().getBlockAfter(s),
                  h =
                    'atomic' !== d.getType() &&
                    d.getLength() === u.getFocusOffset();
                g && h && a.includes(g.getKey()) && f(n, r, 'down', e);
              }
              if (38 === e.keyCode) {
                var v = o.getSelection().getAnchorKey(),
                  p = o.getCurrentContent().getBlockBefore(v);
                p && a.includes(p.getKey()) && f(n, r, 'up', e);
              }
              if (40 === e.keyCode) {
                var y = o.getSelection().getAnchorKey(),
                  E = o.getCurrentContent().getBlockAfter(y);
                E && a.includes(E.getKey()) && f(n, r, 'down', e);
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
                  isFocused: v(a, e.getKey()),
                  isCollapsedSelection: a.getSelection().isCollapsed(),
                  setFocusToBlock: function () {
                    !(function (e, t, n) {
                      var o = e(),
                        a = c.a.encode(n.getKey(), 0, 0),
                        i = document.querySelectorAll(
                          '[data-offset-key="' + a + '"]'
                        )[0],
                        l = window.getSelection(),
                        u = document.createRange();
                      u.setStart(i, 0),
                        u.setEnd(i, 0),
                        l.removeAllRanges(),
                        l.addRange(u),
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
          decorator: g({ theme: i, blockKeyStore: a }),
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
            var c = n[e];
            c &&
              c.forEach(function (n) {
                return n(t[e]);
              });
          },
          getItem: function (e) {
            return t[e];
          },
        };
      }
      var c = {
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
      t.b = c;
    },
    KNE6: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return S;
      }),
        n.d(t, 'b', function () {
          return w;
        }),
        n.d(t, 'c', function () {
          return k;
        }),
        n.d(t, 'd', function () {
          return L;
        }),
        n.d(t, 'e', function () {
          return E;
        }),
        n.d(t, 'f', function () {
          return f;
        }),
        n.d(t, 'g', function () {
          return b;
        }),
        n.d(t, 'h', function () {
          return d;
        }),
        n.d(t, 'i', function () {
          return h;
        }),
        n.d(t, 'j', function () {
          return p;
        }),
        n.d(t, 'k', function () {
          return v;
        }),
        n.d(t, 'l', function () {
          return s;
        }),
        n.d(t, 'm', function () {
          return y;
        }),
        n.d(t, 'n', function () {
          return g;
        }),
        n.d(t, 'o', function () {
          return m;
        });
      var r = n('ERkP'),
        o = n.n(r),
        a = n('zpdM'),
        c = n('7O4Y');
      function i(e) {
        var t = e.blockType,
          n = e.children;
        return function (e) {
          var r = e.theme,
            i = (function () {
              if (!e.getEditorState) return !1;
              var n = e.getEditorState();
              return (
                n
                  .getCurrentContent()
                  .getBlockForKey(n.getSelection().getStartKey())
                  .getType() === t
              );
            })()
              ? Object(c.a)(r.button, r.active)
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
              className: i,
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
            i =
              e.getEditorState &&
              e.getEditorState().getCurrentInlineStyle().has(t)
                ? Object(c.a)(r.button, r.active)
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
              className: i,
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
      function u(e) {
        var t = e.alignment,
          n = e.children;
        return function (e) {
          var r = e.theme,
            a = e.alignment === t ? Object(c.a)(r.button, r.active) : r.button;
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
      var s = l({
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
        f = l({
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
        d = l({
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
        g = l({
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
        h = i({ blockType: 'header-one', children: 'H1' }),
        v = i({ blockType: 'header-two', children: 'H2' }),
        p = i({ blockType: 'header-three', children: 'H3' }),
        m = i({
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
        y = i({
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
        E = i({
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
        b = i({
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
        w = u({
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
        S = u({
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
        k = u({
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
        L = u({
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
    m4hd: function (e, t, n) {
      'use strict';
      var r = n('ERkP'),
        o = n.n(r),
        a = n('zpdM'),
        c = n('ENCy'),
        i = n('7nmT'),
        l = n.n(i),
        u = n('KNE6');
      function s() {
        return (s =
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
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var g = function (e) {
        var t = e.store;
        return function (e) {
          var n, a;
          return (
            (a = n = (function (n) {
              var r, a;
              function c() {
                for (
                  var e, r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  ((e =
                    n.call.apply(n, [this].concat(o)) ||
                    this).componentDidUpdate = function () {
                    if (
                      e.props.blockProps.isFocused &&
                      e.props.blockProps.isCollapsedSelection
                    ) {
                      var n = l.a.findDOMNode(d(e)).getBoundingClientRect();
                      t.updateItem(
                        'setAlignment',
                        e.props.blockProps.setAlignment
                      ),
                        t.updateItem('alignment', e.props.blockProps.alignment),
                        t.updateItem('boundingRect', n),
                        t.updateItem('visibleBlock', e.props.block.getKey());
                    } else
                      t.getItem('visibleBlock') === e.props.block.getKey() &&
                        t.updateItem('visibleBlock', null);
                  }),
                  e
                );
              }
              (a = n),
                ((r = c).prototype = Object.create(a.prototype)),
                (r.prototype.constructor = r),
                f(r, a);
              var i = c.prototype;
              return (
                (i.componentWillUnmount = function () {
                  t.updateItem('visibleBlock', null);
                }),
                (i.render = function () {
                  var t = this.props,
                    n = t.blockProps,
                    r = t.style,
                    a = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                      for (r = 0; r < a.length; r++)
                        (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o;
                    })(t, ['blockProps', 'style']),
                    c = n.alignment,
                    i = r;
                  return (
                    'left' === c
                      ? (i = s({}, r, { float: 'left' }))
                      : 'right' === c
                      ? (i = s({}, r, { float: 'right' }))
                      : 'center' === c &&
                        (i = s({}, r, {
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          display: 'block',
                        })),
                    o.a.createElement(e, s({}, a, { blockProps: n, style: i }))
                  );
                }),
                c
              );
            })(r.Component)),
            (n.displayName =
              'Alignment(' +
              (function (e) {
                var t = e.WrappedComponent || e;
                return t.displayName || t.name || 'Component';
              })(e) +
              ')'),
            (n.WrappedComponent = e.WrappedComponent || e),
            a
          );
        };
      };
      function h(e) {
        return e
          ? 'static' !== window.getComputedStyle(e).getPropertyValue('position')
            ? e
            : h(e.parentElement)
          : null;
      }
      function v(e) {
        var t = Object(r.useState)({}),
          n = t[0],
          a = t[1],
          c = Object(r.useState)(null),
          i = c[0],
          l = c[1],
          s = Object(r.useRef)(null),
          f = Object(r.useRef)(),
          d = Object(r.useCallback)(function (t) {
            var n = setTimeout(function () {
              var n,
                r = e.store.getItem('boundingRect');
              if (t && r) {
                var o = h(s.current.parentElement),
                  c = s.current.clientHeight,
                  i = o
                    ? o.getBoundingClientRect()
                    : document.body.getBoundingClientRect();
                n = {
                  top: r.top - i.top - c,
                  left: r.left - i.left + r.width / 2,
                  transform: 'translate(-50%) scale(1)',
                  transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
                };
              } else n = { transform: 'translate(-50%) scale(0)' };
              var u = e.store.getItem('alignment') || 'default';
              l(u), a(n), (f.current = void 0);
            }, 0);
            f.current = n;
          }, []),
          g = Object(r.useCallback)(function (e) {
            e && l(e);
          }, []);
        Object(r.useEffect)(function () {
          return function () {
            f.current && clearTimeout(f.current);
          };
        }, []),
          Object(r.useEffect)(
            function () {
              return (
                e.store.subscribeToItem('visibleBlock', d),
                e.store.subscribeToItem('alignment', g),
                function () {
                  e.store.unsubscribeFromItem('visibleBlock', d),
                    e.store.unsubscribeFromItem('alignment', g);
                }
              );
            },
            [d, g]
          );
        var v = [u.b, u.c, u.a, u.d],
          p = e.theme;
        return o.a.createElement(
          'div',
          { className: p.alignmentToolStyles.alignmentTool, style: n, ref: s },
          v.map(function (t, n) {
            return o.a.createElement(t, {
              key: n,
              alignment: i,
              setAlignment: e.store.getItem('setAlignment'),
              theme: p.buttonStyles,
            });
          })
        );
      }
      var p = {
          buttonStyles: {
            buttonWrapper: 'b1qfpj3o',
            button: 'bgspekh',
            active: 'autuw9p',
          },
          alignmentToolStyles: { alignmentTool: 'awlhfjh' },
        },
        m = function (e, t) {
          var n = t.getEditorState,
            r = t.setEditorState;
          return function (t) {
            var o = e.getEntityAt(0);
            if (o) {
              var c = n();
              c.getCurrentContent().mergeEntityData(o, s({}, t)),
                r(a.EditorState.forceSelection(c, c.getSelection()));
            }
          };
        };
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = Object(c.a)({ isVisible: !1 }),
          n = e.theme,
          r = void 0 === n ? p : n;
        return {
          initialize: function (e) {
            var n = e.getReadOnly,
              r = e.getEditorState,
              o = e.setEditorState;
            t.updateItem('getReadOnly', n),
              t.updateItem('getEditorState', r),
              t.updateItem('setEditorState', o);
          },
          decorator: g({ store: t }),
          blockRendererFn: function (e, t) {
            var n = t.getEditorState,
              r = t.setEditorState,
              o = e.getEntityAt(0),
              a = n().getCurrentContent();
            return {
              props: {
                alignment:
                  (o ? a.getEntity(o).getData() : {}).alignment || 'default',
                setAlignment: m(e, { getEditorState: n, setEditorState: r }),
              },
            };
          },
          AlignmentTool: function () {
            return o.a.createElement(v, { store: t, theme: r });
          },
        };
      };
    },
  },
]);
