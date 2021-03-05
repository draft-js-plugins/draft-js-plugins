(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '/mDG': function (e, t, o) {
      var n = o('VBlB');
      e.exports = function (e) {
        return n(e)
          .replace(/[\W_]+(.|$)/g, function (e, t) {
            return t ? ' ' + t : '';
          })
          .trim();
      };
    },
    '/vf7': function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var n in o)
              Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          }
          return e;
        };
      (t.renderViewDefault = function (e) {
        return a.default.createElement('div', e);
      }),
        (t.renderTrackHorizontalDefault = function (e) {
          var t = e.style,
            o = s(e, ['style']),
            r = n({}, t, { right: 2, bottom: 2, left: 2, borderRadius: 3 });
          return a.default.createElement('div', n({ style: r }, o));
        }),
        (t.renderTrackVerticalDefault = function (e) {
          var t = e.style,
            o = s(e, ['style']),
            r = n({}, t, { right: 2, bottom: 2, top: 2, borderRadius: 3 });
          return a.default.createElement('div', n({ style: r }, o));
        }),
        (t.renderThumbHorizontalDefault = function (e) {
          var t = e.style,
            o = s(e, ['style']),
            r = n({}, t, {
              cursor: 'pointer',
              borderRadius: 'inherit',
              backgroundColor: 'rgba(0,0,0,.2)',
            });
          return a.default.createElement('div', n({ style: r }, o));
        }),
        (t.renderThumbVerticalDefault = function (e) {
          var t = e.style,
            o = s(e, ['style']),
            r = n({}, t, {
              cursor: 'pointer',
              borderRadius: 'inherit',
              backgroundColor: 'rgba(0,0,0,.2)',
            });
          return a.default.createElement('div', n({ style: r }, o));
        });
      var r,
        i = o('ERkP'),
        a = (r = i) && r.__esModule ? r : { default: r };
      function s(e, t) {
        var o = {};
        for (var n in e)
          t.indexOf(n) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]));
        return o;
      }
    },
    '0xii': function (e, t, o) {
      (function (t) {
        for (
          var n = o('FF9q'),
            r = 'undefined' === typeof window ? t : window,
            i = ['moz', 'webkit'],
            a = 'AnimationFrame',
            s = r['request' + a],
            l = r['cancel' + a] || r['cancelRequest' + a],
            c = 0;
          !s && c < i.length;
          c++
        )
          (s = r[i[c] + 'Request' + a]),
            (l = r[i[c] + 'Cancel' + a] || r[i[c] + 'CancelRequest' + a]);
        if (!s || !l) {
          var u = 0,
            d = 0,
            p = [];
          (s = function (e) {
            if (0 === p.length) {
              var t = n(),
                o = Math.max(0, 16.666666666666668 - (t - u));
              (u = o + t),
                setTimeout(function () {
                  var e = p.slice(0);
                  p.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(u);
                      } catch (o) {
                        setTimeout(function () {
                          throw o;
                        }, 0);
                      }
                }, Math.round(o));
            }
            return p.push({ handle: ++d, callback: e, cancelled: !1 }), d;
          }),
            (l = function (e) {
              for (var t = 0; t < p.length; t++)
                p[t].handle === e && (p[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return s.call(r, e);
        }),
          (e.exports.cancel = function () {
            l.apply(r, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = r),
              (e.requestAnimationFrame = s),
              (e.cancelAnimationFrame = l);
          });
      }.call(this, o('GfI+')));
    },
    '18cJ': function (e, t, o) {
      'use strict';
      e.exports = {
        prefixProperties: o('zWCH'),
        cssUnitless: o('1cmr'),
        object: o('3hJ+'),
        string: o('K8J+'),
      };
    },
    '1cmr': function (e, t) {
      e.exports = {
        animation: 1,
        'column-count': 1,
        columns: 1,
        'font-weight': 1,
        opacity: 1,
        'order  ': 1,
        'z-index': 1,
        zoom: 1,
        flex: 1,
        'box-flex': 1,
        transform: 1,
        perspective: 1,
        'box-pack': 1,
        'box-align': 1,
        colspan: 1,
        rowspan: 1,
      };
    },
    '296u': function (e, t, o) {
      'use strict';
      var n = o('LAGv'),
        r = o('g7w9'),
        i = o('XHsT'),
        a = o('MVet'),
        s = o('Flvg'),
        l = o('zWCH'),
        c =
          'undefined' == typeof document ? {} : document.documentElement.style;
      e.exports = function (e) {
        return function (t, o) {
          o = o || {};
          var u = i(n(t)),
            d = r(t),
            p = e ? u : d,
            f = s.style ? (e ? s.style : s.css) : '';
          if (u in c) return o.asString ? p : [p];
          var h = p,
            m = l[d],
            v = [];
          if ((e && (h = a(p)), 'function' == typeof m)) {
            var g = m(p, f) || [];
            g && !Array.isArray(g) && (g = [g]),
              g.length &&
                (g = g.map(function (t) {
                  return e ? i(n(t)) : r(t);
                })),
              (v = v.concat(g));
          }
          return (
            f && v.push(f + h),
            v.push(p),
            o.asString || 1 == v.length ? v[0] : v
          );
        };
      };
    },
    '3hJ+': function (e, t, o) {
      'use strict';
      o('Flvg');
      var n = o('qf5W'),
        r = o('g7w9'),
        i = o('LAGv'),
        a = o('9fqH'),
        s = o('q9tZ'),
        l = o('GPtA'),
        c = function (e, t, o, r) {
          n(t).forEach(function (t) {
            e[r ? r(t) : t] = o;
          });
        },
        u = { cssUnitless: o('1cmr') },
        d = function (e, t, o, n) {
          'string' == typeof e &&
            (e = (function (e) {
              e = (e || '').split(';');
              var t = {};
              return (
                e.forEach(function (e) {
                  var o = e.split(':');
                  2 == o.length && (t[o[0].trim()] = o[1].trim());
                }),
                t
              );
            })(e)),
            ((t = t || u).cssUnitless = t.cssUnitless || u.cssUnitless),
            (n = n || {});
          var p,
            f,
            h,
            m,
            v,
            g,
            b,
            y,
            S = t.scope || {},
            j =
              null != t.addUnits
                ? t.addUnits
                : !S || null == S.addUnits || S.addUnits,
            w =
              (null != t.cssUnitless
                ? t.cssUnitless
                : S
                ? S.cssUnitless
                : null) || {},
            E = (t.cssUnit || S ? S.cssUnit : null) || 'px',
            T = t.prefixProperties || (S ? S.prefixProperties : null) || {},
            k = t.camelize ? i : r;
          for (h in e)
            if (a(e, h)) {
              if (
                ((m = e[h]),
                (f = r(o ? o + h : h)),
                (p = !1),
                (y = !1),
                l(m) &&
                  ((b = m.call(S || e, m, h, f, e)),
                  s(b) && null != b.value
                    ? ((m = b.value),
                      (y = b.prefix),
                      (f = b.name ? r(b.name) : f))
                    : (m = b)),
                (g =
                  'number' == (v = typeof m) ||
                  ('string' == v && '' != m && 1 * m == m)),
                null == m || null == f || '' === f)
              )
                continue;
              if (
                ((g || 'string' == v) && (p = !0),
                !p &&
                  null != m.value &&
                  m.prefix &&
                  ((p = !0), (y = m.prefix), (m = m.value)),
                p)
              ) {
                if (
                  ((y = y || !!T[f]),
                  g && (m = j && !(f in w) ? m + E : m + ''),
                  ('border' != f &&
                    (f.indexOf('border') ||
                      ~f.indexOf('radius') ||
                      ~f.indexOf('width'))) ||
                    !g ||
                    (f += '-width'),
                  !f.indexOf('border-radius-') &&
                    (f.replace(/border(-radius)(-(.*))/, function (e, t, o) {
                      var n = {
                        '-top': ['-top-left', '-top-right'],
                        '-left': ['-top-left', '-bottom-left'],
                        '-right': ['-top-right', '-bottom-right'],
                        '-bottom': ['-bottom-left', '-bottom-right'],
                      };
                      o in n
                        ? ((f = []),
                          n[o].forEach(function (e) {
                            f.push('border' + e + t);
                          }))
                        : (f = 'border' + o + t);
                    }),
                    Array.isArray(f)))
                ) {
                  f.forEach(function (e) {
                    y ? c(n, e, m, k) : (n[k(e)] = m);
                  });
                  continue;
                }
                y ? c(n, f, m, k) : (n[k(f)] = m);
              } else d(m, t, f + '-', n);
            }
          return n;
        };
      e.exports = d;
    },
    '7NtS': function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return 'string' === typeof e;
        });
    },
    '9fqH': function (e, t, o) {
      'use strict';
      var n = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        return n.call(e, t);
      };
    },
    Af8m: function (e, t, o) {
      'use strict';
      (function (e) {
        var n = o('kq48'),
          r =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          i = r && 'object' == typeof e && e && !e.nodeType && e,
          a = i && i.exports === r && n.a.process,
          s = (function () {
            try {
              var e = i && i.require && i.require('util').types;
              return e || (a && a.binding && a.binding('util'));
            } catch (t) {}
          })();
        t.a = s;
      }.call(this, o('EwmA')(e)));
    },
    'DE/k': function (e, t, o) {
      'use strict';
      var n = o('GAvS'),
        r = Object.prototype,
        i = r.hasOwnProperty,
        a = r.toString,
        s = n.a ? n.a.toStringTag : void 0;
      var l = function (e) {
          var t = i.call(e, s),
            o = e[s];
          try {
            e[s] = void 0;
            var n = !0;
          } catch (l) {}
          var r = a.call(e);
          return n && (t ? (e[s] = o) : delete e[s]), r;
        },
        c = Object.prototype.toString;
      var u = function (e) {
          return c.call(e);
        },
        d = n.a ? n.a.toStringTag : void 0;
      t.a = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : d && d in Object(e)
          ? l(e)
          : u(e);
      };
    },
    EwmA: function (e, t) {
      (function (t) {
        e.exports = (function () {
          var e = {
              931: function (e) {
                e.exports = function (e) {
                  if (!e.webpackPolyfill) {
                    var t = Object.create(e);
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
                      Object.defineProperty(t, 'exports', { enumerable: !0 }),
                      (t.webpackPolyfill = 1);
                  }
                  return t;
                };
              },
            },
            o = {};
          function n(t) {
            if (o[t]) return o[t].exports;
            var r = (o[t] = { exports: {} }),
              i = !0;
            try {
              e[t](r, r.exports, n), (i = !1);
            } finally {
              i && delete o[t];
            }
            return r.exports;
          }
          return (n.ab = t + '/'), n(931);
        })();
      }.call(this, '/'));
    },
    F3tW: function (e, t, o) {
      'use strict';
      var n = o('ERkP'),
        r = o.n(n),
        i = o('Svze');
      var a = function (e, t) {
          for (var o = -1, n = Array(e); ++o < e; ) n[o] = t(o);
          return n;
        },
        s = o('DE/k'),
        l = o('gfy7');
      var c = function (e) {
          return Object(l.a)(e) && '[object Arguments]' == Object(s.a)(e);
        },
        u = Object.prototype,
        d = u.hasOwnProperty,
        p = u.propertyIsEnumerable,
        f = c(
          (function () {
            return arguments;
          })()
        )
          ? c
          : function (e) {
              return (
                Object(l.a)(e) && d.call(e, 'callee') && !p.call(e, 'callee')
              );
            },
        h = o('SEb4'),
        m = o('TPB+'),
        v = /^(?:0|[1-9]\d*)$/;
      var g = function (e, t) {
        var o = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ('number' == o || ('symbol' != o && v.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var b = function (e) {
          return (
            'number' == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        y = {};
      (y['[object Float32Array]'] = y['[object Float64Array]'] = y[
        '[object Int8Array]'
      ] = y['[object Int16Array]'] = y['[object Int32Array]'] = y[
        '[object Uint8Array]'
      ] = y['[object Uint8ClampedArray]'] = y['[object Uint16Array]'] = y[
        '[object Uint32Array]'
      ] = !0),
        (y['[object Arguments]'] = y['[object Array]'] = y[
          '[object ArrayBuffer]'
        ] = y['[object Boolean]'] = y['[object DataView]'] = y[
          '[object Date]'
        ] = y['[object Error]'] = y['[object Function]'] = y[
          '[object Map]'
        ] = y['[object Number]'] = y['[object Object]'] = y[
          '[object RegExp]'
        ] = y['[object Set]'] = y['[object String]'] = y[
          '[object WeakMap]'
        ] = !1);
      var S = function (e) {
        return Object(l.a)(e) && b(e.length) && !!y[Object(s.a)(e)];
      };
      var j = function (e) {
          return function (t) {
            return e(t);
          };
        },
        w = o('Af8m'),
        E = w.a && w.a.isTypedArray,
        T = E ? j(E) : S,
        k = Object.prototype.hasOwnProperty;
      var O = function (e, t) {
          var o = Object(h.a)(e),
            n = !o && f(e),
            r = !o && !n && Object(m.a)(e),
            i = !o && !n && !r && T(e),
            s = o || n || r || i,
            l = s ? a(e.length, String) : [],
            c = l.length;
          for (var u in e)
            (!t && !k.call(e, u)) ||
              (s &&
                ('length' == u ||
                  (r && ('offset' == u || 'parent' == u)) ||
                  (i &&
                    ('buffer' == u ||
                      'byteLength' == u ||
                      'byteOffset' == u)) ||
                  g(u, c))) ||
              l.push(u);
          return l;
        },
        D = Object.prototype;
      var x = function (e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || D);
      };
      var M = (function (e, t) {
          return function (o) {
            return e(t(o));
          };
        })(Object.keys, Object),
        P = Object.prototype.hasOwnProperty;
      var H = function (e) {
        if (!x(e)) return M(e);
        var t = [];
        for (var o in Object(e))
          P.call(e, o) && 'constructor' != o && t.push(o);
        return t;
      };
      var A = function (e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
      var C = function (e) {
        if (!A(e)) return !1;
        var t = Object(s.a)(e);
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      };
      var R = function (e) {
        return null != e && b(e.length) && !C(e);
      };
      var L = function (e) {
          return R(e) ? O(e) : H(e);
        },
        z = o('zpdM'),
        I = o('ENCy'),
        q = o('23EE'),
        F = o.n(q),
        W = o('aWzz'),
        V = o.n(W),
        U = o('SVx0'),
        N = o('T8kG'),
        B = o('XuDI'),
        G = o('18cJ'),
        _ = o.n(G),
        K = o('udmA'),
        X = o.n(K),
        Y = o('7O4Y');
      function Z() {
        return (Z =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function J(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          $(e, t);
      }
      function $(e, t) {
        return ($ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Q(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      function te(e, t) {
        var o;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (o = (function (e, t) {
              if (e) {
                if ('string' === typeof e) return ee(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === o && e.constructor && (o = e.constructor.name),
                  'Map' === o || 'Set' === o
                    ? Array.from(e)
                    : 'Arguments' === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? ee(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            o && (e = o);
            var n = 0;
            return function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        return (o = e[Symbol.iterator]()).next.bind(o);
      }
      function oe(e) {
        var t = e.theme,
          o = void 0 === t ? {} : t,
          n = e.className,
          i = e.decoratedText,
          a = e.emojiInlineText,
          s = e.children;
        return r.a.createElement(
          a,
          { className: n, decoratedText: i, theme: o },
          s
        );
      }
      var ne = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
            n[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).mouseDown = !1),
            (t.onMouseUp = function () {
              t.mouseDown &&
                ((t.mouseDown = !1), t.props.onEmojiSelect(t.props.emoji));
            }),
            (t.onMouseDown = function (e) {
              e.preventDefault(), (t.mouseDown = !0);
            }),
            (t.onMouseEnter = function () {
              t.props.onEmojiFocus(t.props.index);
            }),
            t
          );
        }
        J(t, e);
        var o = t.prototype;
        return (
          (o.componentDidUpdate = function () {
            this.mouseDown = !1;
          }),
          (o.render = function () {
            var e = this.props,
              t = e.emoji,
              o = e.theme,
              n = void 0 === o ? {} : o,
              i = e.isFocused,
              a = e.id,
              s = e.emojiImage,
              l = i ? n.emojiSuggestionsEntryFocused : n.emojiSuggestionsEntry;
            return r.a.createElement(
              'div',
              {
                className: l,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseEnter: this.onMouseEnter,
                role: 'option',
                id: a,
                'aria-selected': i ? 'true' : void 0,
              },
              r.a.createElement(s, { emoji: t, theme: n }),
              r.a.createElement(
                'span',
                { className: n.emojiSuggestionsEntryText },
                this.props.emoji
              )
            );
          }),
          t
        );
      })(n.Component);
      function re(e, t) {
        var o = t.getAnchorKey(),
          n = t.getAnchorOffset() - 1;
        return (function (e, t) {
          var o = String(e),
            n = Number(t) >>> 0,
            r = o.slice(0, n + 1).search(/\S+$/),
            i = o.slice(n).search(/\s/);
          return i < 0
            ? { word: o.slice(r), begin: r, end: o.length }
            : { word: o.slice(r, i + n), begin: r, end: i + n };
        })(e.getCurrentContent().getBlockForKey(o).getText(), n);
      }
      var ie = 'INSERT',
        ae = 'REPLACE';
      function se(e, t, o) {
        void 0 === o && (o = ie);
        var n,
          r = Object(q.shortnameToUnicode)(t),
          i = e.getCurrentContent(),
          a = i
            .createEntity('emoji', 'IMMUTABLE', { emojiUnicode: r })
            .getLastCreatedEntityKey(),
          s = e.getSelection(),
          l = 0,
          c = 0;
        switch (o) {
          case ie:
            var u = z.Modifier.removeRange(i, s, 'backward'),
              d = u.getSelectionAfter();
            (n = z.Modifier.insertText(u, d, r, void 0, a)),
              (l = d.getAnchorOffset());
            var p = d.getAnchorKey();
            c = i.getBlockForKey(p).getLength();
            break;
          case ae:
            var f = re(e, s),
              h = f.begin,
              m = f.end,
              v = s.merge({ anchorOffset: h, focusOffset: m });
            (n = z.Modifier.replaceText(i, v, r, void 0, a)), (l = m);
            var g = v.getAnchorKey();
            c = i.getBlockForKey(g).getLength();
            break;
          default:
            throw new Error('Unidentified value of "mode"');
        }
        l === c && (n = z.Modifier.insertText(n, n.getSelectionAfter(), ' '));
        var b = z.EditorState.push(e, n, 'insert-fragment');
        return z.EditorState.forceSelection(b, n.getSelectionAfter());
      }
      var le = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
            n[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).state = {
              isActive: !1,
              focusedOptionIndex: 0,
            }),
            (t.popover = void 0),
            (t.key = void 0),
            (t.filteredEmojis = void 0),
            (t.activeOffsetKey = void 0),
            (t.lastSelectionIsInsideWord = void 0),
            (t.lastSearchValue = void 0),
            (t.onEditorStateChange = function (e) {
              var o = t.props.store.getAllSearches();
              if (0 === o.size) return e;
              var n = function () {
                  return (
                    t.props.store.resetEscapedSearch(), t.closeDropdown(), e
                  );
                },
                r = e.getSelection(),
                i = r.getAnchorKey(),
                a = r.getAnchorOffset();
              if (!r.isCollapsed() || !r.getHasFocus()) return n();
              var s = o
                .map(function (e) {
                  return I.b.decodeOffsetKey(e);
                })
                .filter(function (e) {
                  return e.blockKey === i;
                })
                .map(function (t) {
                  return e
                    .getBlockTree(t.blockKey)
                    .getIn([t.decoratorKey, 'leaves', t.leafKey]);
                });
              if (
                s.every(function (e) {
                  return void 0 === e;
                })
              )
                return n();
              var l = e.getCurrentContent().getPlainText(),
                c = s
                  .filter(function (e) {
                    return void 0 !== e;
                  })
                  .map(function (e) {
                    var t = e.start,
                      o = e.end;
                    return (
                      (0 === t &&
                        1 === a &&
                        ':' !== l.charAt(a) &&
                        /(\s|^):[\w]*/.test(l) &&
                        a <= o) ||
                      (a > t + 1 && a <= o)
                    );
                  });
              return c.every(function (e) {
                return !1 === e;
              })
                ? n()
                : ((t.activeOffsetKey = c
                    .filter(function (e) {
                      return !0 === e;
                    })
                    .keySeq()
                    .first()),
                  t.onSearchChange(e, r),
                  t.props.store.isEscaped(t.activeOffsetKey) ||
                    t.props.store.resetEscapedSearch(),
                  t.state.isActive ||
                    t.props.store.isEscaped(t.activeOffsetKey) ||
                    t.openDropdown(),
                  (void 0 !== t.lastSelectionIsInsideWord &&
                    c.equals(t.lastSelectionIsInsideWord)) ||
                    t.setState({ focusedOptionIndex: 0 }),
                  (t.lastSelectionIsInsideWord = c),
                  e);
            }),
            (t.onSearchChange = function (e, o) {
              var n = re(e, o).word,
                r = n.substring(1, n.length);
              t.lastSearchValue !== r &&
                'function' === typeof t.props.onSearchChange &&
                ((t.lastSearchValue = r), t.props.onSearchChange({ value: r }));
            }),
            (t.onDownArrow = function (e) {
              e.preventDefault();
              var o = t.state.focusedOptionIndex + 1;
              t.onEmojiFocus(o >= t.filteredEmojis.size ? 0 : o);
            }),
            (t.onTab = function (e) {
              e.preventDefault(), t.commitSelection();
            }),
            (t.onUpArrow = function (e) {
              if (
                (e.preventDefault(),
                t.filteredEmojis && t.filteredEmojis.size > 0)
              ) {
                var o = t.state.focusedOptionIndex - 1;
                t.onEmojiFocus(Math.max(o, 0));
              }
            }),
            (t.onEscape = function (e) {
              e.preventDefault();
              var o = t.lastSelectionIsInsideWord
                .filter(function (e) {
                  return !0 === e;
                })
                .keySeq()
                .first();
              t.props.store.escapeSearch(o),
                t.closeDropdown(),
                t.props.store.setEditorState(t.props.store.getEditorState());
            }),
            (t.onEmojiSelect = function (e) {
              t.closeDropdown();
              var o = se(t.props.store.getEditorState(), e, ae);
              t.props.store.setEditorState(o);
            }),
            (t.onEmojiFocus = function (e) {
              var o = 'emoji-option-' + t.key + '-' + e;
              (t.props.ariaProps.ariaActiveDescendantID = o),
                t.setState({ focusedOptionIndex: e }),
                t.props.store.setEditorState(t.props.store.getEditorState());
            }),
            (t.getEmojisForFilter = function () {
              var e = t.props.store.getEditorState().getSelection(),
                o = re(t.props.store.getEditorState(), e).word,
                n = o.substring(1, o.length).toLowerCase(),
                r = t.props.shortNames.filter(function (e) {
                  return !n || e.indexOf(n) > -1;
                }),
                i = r.size < 9 ? r.size : 9;
              return r.setSize(i);
            }),
            (t.commitSelection = function () {
              return (
                t.onEmojiSelect(
                  t.filteredEmojis.get(t.state.focusedOptionIndex)
                ),
                'handled'
              );
            }),
            (t.openDropdown = function () {
              (t.props.callbacks.handleReturn = t.commitSelection),
                (t.props.callbacks.keyBindingFn = function (e) {
                  40 === e.keyCode && t.onDownArrow(e),
                    38 === e.keyCode && t.onUpArrow(e),
                    27 === e.keyCode && t.onEscape(e),
                    9 === e.keyCode && t.onTab(e);
                });
              var e =
                'emoji-option-' + t.key + '-' + t.state.focusedOptionIndex;
              (t.props.ariaProps.ariaActiveDescendantID = e),
                (t.props.ariaProps.ariaOwneeID = 'emojis-list-' + t.key),
                (t.props.ariaProps.ariaHasPopup = 'true'),
                (t.props.ariaProps.ariaExpanded = !0),
                t.setState({ isActive: !0 }),
                t.props.onOpen && t.props.onOpen();
            }),
            (t.closeDropdown = function () {
              (t.props.callbacks.keyBindingFn = void 0),
                (t.props.callbacks.handleReturn = void 0),
                (t.props.ariaProps.ariaHasPopup = 'false'),
                (t.props.ariaProps.ariaExpanded = !1),
                (t.props.ariaProps.ariaActiveDescendantID = void 0),
                (t.props.ariaProps.ariaOwneeID = void 0),
                t.setState({ isActive: !1 }),
                t.props.onClose && t.props.onClose();
            }),
            t
          );
        }
        J(t, e);
        var o = t.prototype;
        return (
          (o.UNSAFE_componentWillMount = function () {
            (this.key = Object(z.genKey)()),
              (this.props.callbacks.onChange = this.onEditorStateChange);
          }),
          (o.componentDidUpdate = function () {
            if (this.popover && this.filteredEmojis) {
              var e = this.filteredEmojis.size;
              e > 0 &&
                this.state.focusedOptionIndex >= e &&
                this.setState({ focusedOptionIndex: e - 1 }),
                e <= 0 && this.closeDropdown();
              var t = this.props.store.getPortalClientRect(
                this.activeOffsetKey
              );
              if (t)
                for (
                  var o = this.props.positionSuggestions({
                      decoratorRect: t,
                      props: this.props,
                      state: this.state,
                      filteredEmojis: this.filteredEmojis,
                      popover: this.popover,
                    }),
                    n = 0,
                    r = Object.entries(o);
                  n < r.length;
                  n++
                ) {
                  var i = r[n],
                    a = i[0],
                    s = i[1];
                  this.popover.style[a] = s;
                }
              else this.closeDropdown();
            }
          }),
          (o.componentWillUnmount = function () {
            this.props.callbacks.onChange = void 0;
          }),
          (o.render = function () {
            var e = this;
            if (!this.state.isActive) return null;
            this.filteredEmojis = this.getEmojisForFilter();
            var t = this.props,
              o = t.theme,
              n = void 0 === o ? {} : o;
            t.ariaProps,
              t.callbacks,
              t.onClose,
              t.onOpen,
              t.onSearchChange,
              t.positionSuggestions,
              t.shortNames,
              t.store;
            var i = t.emojiImage,
              a = (function (e, t) {
                if (null == e) return {};
                var o,
                  n,
                  r = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
                return r;
              })(t, [
                'theme',
                'ariaProps',
                'callbacks',
                'onClose',
                'onOpen',
                'onSearchChange',
                'positionSuggestions',
                'shortNames',
                'store',
                'emojiImage',
              ]);
            return r.a.createElement(
              'div',
              Z({}, a, {
                className: n.emojiSuggestions,
                role: 'listbox',
                id: 'emojis-list-' + this.key,
                ref: function (t) {
                  e.popover = t;
                },
              }),
              this.filteredEmojis
                .map(function (t, o) {
                  return r.a.createElement(ne, {
                    key: t,
                    onEmojiSelect: e.onEmojiSelect,
                    onEmojiFocus: e.onEmojiFocus,
                    isFocused: e.state.focusedOptionIndex === o,
                    emoji: t,
                    index: o,
                    id: 'emoji-option-' + e.key + '-' + o,
                    theme: n,
                    emojiImage: i,
                  });
                })
                .toJS()
            );
          }),
          t
        );
      })(n.Component);
      function ce(e) {
        var t = e.children,
          o = e.store,
          i = e.offsetKey,
          a = Object(n.useRef)(null),
          s = Object(n.useCallback)(
            function () {
              o.updatePortalClientRect(i, function () {
                var e;
                return null == (e = a.current)
                  ? void 0
                  : e.getBoundingClientRect();
              });
            },
            [o, i]
          );
        return (
          Object(n.useEffect)(
            function () {
              return (
                o.register(i),
                s(),
                o.setEditorState(o.getEditorState()),
                function () {
                  o.unregister(i);
                }
              );
            },
            [s, o]
          ),
          r.a.createElement('span', { ref: a }, t)
        );
      }
      var ue = [
          {
            title: 'People',
            icon: r.a.createElement(N.g, { style: { verticalAlign: '' } }),
            categories: ['people'],
          },
          {
            title: 'Nature',
            icon: r.a.createElement(N.e, { style: { verticalAlign: '' } }),
            categories: ['nature'],
          },
          {
            title: 'Food & Drink',
            icon: r.a.createElement(N.h, { style: { verticalAlign: '' } }),
            categories: ['food'],
          },
          {
            title: 'Activity',
            icon: r.a.createElement(N.c, { style: { verticalAlign: '' } }),
            categories: ['activity'],
          },
          {
            title: 'Travel & Places',
            icon: r.a.createElement(N.f, { style: { verticalAlign: '' } }),
            categories: ['travel'],
          },
          {
            title: 'Objects',
            icon: r.a.createElement(N.a, { style: { verticalAlign: '' } }),
            categories: ['objects'],
          },
          {
            title: 'Symbols',
            icon: r.a.createElement(N.d, { style: { verticalAlign: '' } }),
            categories: ['symbols'],
          },
          {
            title: 'Flags',
            icon: r.a.createElement(N.b, { style: { verticalAlign: '' } }),
            categories: ['flags'],
          },
        ],
        de = (function (e) {
          function t() {
            for (
              var t, o = arguments.length, n = new Array(o), r = 0;
              r < o;
              r++
            )
              n[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                isFocused: !1,
              }),
              (t.button = void 0),
              (t.onMouseUp = function () {
                t.mouseDown &&
                  ((t.mouseDown = !1), t.props.onEmojiSelect(t.props.emoji));
              }),
              (t.onMouseDown = function () {
                (t.mouseDown = !0),
                  t.props.onEmojiMouseDown &&
                    t.props.onEmojiMouseDown(Q(t), t.props.toneSet || null);
              }),
              (t.onMouseEnter = function () {
                t.props.checkMouseDown() || t.setState({ isFocused: !0 });
              }),
              (t.onMouseLeave = function () {
                t.props.checkMouseDown() || t.setState({ isFocused: !1 });
              }),
              (t.deselect = function () {
                t.setState({ isFocused: !1 });
              }),
              (t.mouseDown = t.props.mouseDown),
              t
            );
          }
          return (
            J(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.theme,
                n = void 0 === o ? {} : o,
                i = t.emoji,
                a = t.emojiImage,
                s = this.state.isFocused;
              return r.a.createElement(
                'button',
                {
                  type: 'button',
                  className: s
                    ? n.emojiSelectPopoverEntryFocused
                    : n.emojiSelectPopoverEntry,
                  onMouseDown: this.onMouseDown,
                  onMouseEnter: this.onMouseEnter,
                  onMouseLeave: this.onMouseLeave,
                  onMouseUp: this.onMouseUp,
                  ref: function (t) {
                    e.button = t;
                  },
                },
                r.a.createElement(a, { emoji: i, theme: n })
              );
            }),
            t
          );
        })(n.Component);
      (de.propTypes = {
        theme: V.a.object.isRequired,
        emoji: V.a.string.isRequired,
        mouseDown: V.a.bool,
        checkMouseDown: V.a.func.isRequired,
        onEmojiSelect: V.a.func.isRequired,
        onEmojiMouseDown: V.a.func,
      }),
        (de.defaultProps = { mouseDown: !1 });
      var pe = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), i = 0; i < o; i++)
            n[i] = arguments[i];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).state = {
              hasRenderedEmoji: !1,
            }),
            (t.container = void 0),
            (t.list = void 0),
            (t.shouldComponentUpdate = function (e) {
              return !t.state.hasRenderedEmoji && e.isActive;
            }),
            (t.renderCategory = function (e) {
              var o = t.props,
                n = o.theme,
                i = void 0 === n ? {} : n,
                a = o.emojis,
                s = o.checkMouseDown,
                l = o.onEmojiSelect,
                c = o.onEmojiMouseDown,
                u = o.emojiImage,
                d = o.isActive,
                p = a[e];
              return Object.keys(p).map(function (e) {
                return r.a.createElement(
                  'li',
                  { key: p[e][0], className: i.emojiSelectPopoverGroupItem },
                  d &&
                    r.a.createElement(de, {
                      emoji: p[e][0],
                      theme: i,
                      toneSet: p[e].length > 1 ? p[e] : null,
                      checkMouseDown: s,
                      onEmojiSelect: l,
                      onEmojiMouseDown: c,
                      emojiImage: u,
                    })
                );
              });
            }),
            t
          );
        }
        J(t, e);
        var o = t.prototype;
        return (
          (o.componentDidUpdate = function () {
            this.props.isActive && this.setState({ hasRenderedEmoji: !0 });
          }),
          (o.render = function () {
            var e = this,
              t = this.props,
              o = t.theme,
              n = void 0 === o ? {} : o,
              i = t.group;
            return r.a.createElement(
              'section',
              {
                className: n.emojiSelectPopoverGroup,
                ref: function (t) {
                  e.container = t;
                },
              },
              r.a.createElement(
                'h3',
                { className: n.emojiSelectPopoverGroupTitle },
                i.title
              ),
              r.a.createElement(
                'ul',
                {
                  className: n.emojiSelectPopoverGroupList,
                  ref: function (t) {
                    e.list = t;
                  },
                },
                i.categories.map(function (t) {
                  return e.renderCategory(t);
                })
              )
            );
          }),
          t
        );
      })(n.Component);
      pe.propTypes = {
        theme: V.a.object.isRequired,
        group: V.a.object.isRequired,
        emojis: V.a.object.isRequired,
        checkMouseDown: V.a.func.isRequired,
        onEmojiSelect: V.a.func.isRequired,
        onEmojiMouseDown: V.a.func.isRequired,
        isActive: V.a.bool,
      };
      var fe = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
            n[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).state = {
              activeGroup: 0,
            }),
            (t.scrollbars = void 0),
            (t.container = void 0),
            (t.onScroll = function (e) {
              var o = t.props,
                n = o.groups,
                r = o.onGroupScroll,
                i = 0;
              n.forEach(function (o, n) {
                e.scrollTop >= o.top &&
                  ((i = n), t.setState({ activeGroup: i }));
              }),
                r(i);
            }),
            (t.onWheel = function (e) {
              var o = t.scrollbars.getValues(),
                n = o.clientHeight,
                r = o.scrollHeight,
                i = o.scrollTop;
              e.deltaY > 0
                ? i < r - n - e.deltaY
                  ? e.stopPropagation()
                  : t.scrollbars.scrollToBottom()
                : i > -e.deltaY
                ? e.stopPropagation()
                : t.scrollbars.scrollTop(0);
            }),
            (t.scrollToGroup = function (e) {
              var o = t.props.groups;
              t.scrollbars.scrollTop(o[e].topList);
            }),
            (t.calculateBounds = function () {
              var e = t.scrollbars.getValues(),
                o = e.scrollHeight,
                n = e.scrollTop;
              if (o) {
                var r = t.props.groups,
                  i = t.container.getBoundingClientRect().top - n;
                r.forEach(function (e) {
                  var t = e.instance.container.getBoundingClientRect().top,
                    o = e.instance.list.getBoundingClientRect().top;
                  (e.top = t - i), (e.topList = o - i);
                });
              }
            }),
            (t.isRenderedGroupActive = function (e) {
              var o = t.state.activeGroup,
                n = t.props.isOpen;
              return o === e || (n && o + 1 === e);
            }),
            t
          );
        }
        J(t, e);
        var o = t.prototype;
        return (
          (o.componentDidMount = function () {
            this.calculateBounds();
          }),
          (o.componentDidUpdate = function () {
            this.calculateBounds();
          }),
          (o.render = function () {
            var e = this,
              t = this.props,
              o = t.theme,
              n = void 0 === o ? {} : o,
              i = t.groups,
              a = void 0 === i ? [] : i,
              s = t.emojis,
              l = t.checkMouseDown,
              c = t.onEmojiSelect,
              u = t.onEmojiMouseDown,
              d = t.emojiImage;
            return r.a.createElement(
              'div',
              {
                className: n.emojiSelectPopoverGroups,
                onWheel: this.onWheel,
                ref: function (t) {
                  e.container = t;
                },
              },
              r.a.createElement(
                B.Scrollbars,
                {
                  className: n.emojiSelectPopoverScrollbarOuter,
                  onScrollFrame: this.onScroll,
                  renderTrackVertical: function () {
                    return r.a.createElement('div', {
                      className: n.emojiSelectPopoverScrollbar,
                    });
                  },
                  renderThumbVertical: function (e) {
                    return r.a.createElement(
                      'div',
                      Z({}, e, {
                        className: n.emojiSelectPopoverScrollbarThumb,
                      })
                    );
                  },
                  ref: function (t) {
                    e.scrollbars = t;
                  },
                },
                a.map(function (t, o) {
                  return r.a.createElement(pe, {
                    key: 'group#' + o + '[' + t.categories.join(',') + ']',
                    theme: n,
                    group: t,
                    emojis: s,
                    checkMouseDown: l,
                    onEmojiSelect: c,
                    onEmojiMouseDown: u,
                    ref: function (e) {
                      t.instance = e;
                    },
                    emojiImage: d,
                    isActive: e.isRenderedGroupActive(o),
                  });
                })
              )
            );
          }),
          t
        );
      })(n.Component);
      fe.propTypes = {
        theme: V.a.object.isRequired,
        groups: V.a.arrayOf(V.a.object).isRequired,
        emojis: V.a.object.isRequired,
        checkMouseDown: V.a.func.isRequired,
        onEmojiSelect: V.a.func.isRequired,
        onEmojiMouseDown: V.a.func.isRequired,
        onGroupScroll: V.a.func.isRequired,
        isOpen: V.a.bool,
      };
      var he = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
            n[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).mouseDown = !1),
            (t.onMouseDown = function () {
              t.mouseDown = !0;
            }),
            (t.onMouseUp = function () {
              t.mouseDown &&
                ((t.mouseDown = !1), t.props.onGroupSelect(t.props.groupIndex));
            }),
            t
          );
        }
        return (
          J(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.theme,
              o = void 0 === t ? {} : t,
              n = e.icon,
              i = e.isActive;
            return r.a.createElement(
              'button',
              {
                className: i
                  ? o.emojiSelectPopoverNavEntryActive
                  : o.emojiSelectPopoverNavEntry,
                onMouseDown: this.onMouseDown,
                type: 'button',
                onMouseUp: this.onMouseUp,
              },
              n
            );
          }),
          t
        );
      })(n.Component);
      (he.propTypes = {
        theme: V.a.object.isRequired,
        icon: V.a.oneOfType([V.a.element, V.a.string]).isRequired,
        groupIndex: V.a.number.isRequired,
        isActive: V.a.bool,
        onGroupSelect: V.a.func.isRequired,
      }),
        (he.defaultProps = { isActive: !1 });
      var me = function (e) {
        var t = e.theme,
          o = void 0 === t ? {} : t,
          n = e.groups,
          i = e.activeGroup,
          a = e.onGroupSelect;
        return r.a.createElement(
          'ul',
          { className: o.emojiSelectPopoverNav },
          n.map(function (e, t) {
            return r.a.createElement(
              'li',
              {
                key: 'nav-group#' + t + '[' + e.categories.join(',') + ']',
                className: o.emojiSelectPopoverNavItem,
              },
              r.a.createElement(he, {
                theme: o,
                groupIndex: t,
                isActive: t === i,
                icon: e.icon,
                onGroupSelect: a,
              })
            );
          })
        );
      };
      me.propTypes = {
        theme: V.a.object.isRequired,
        groups: V.a.arrayOf(V.a.object).isRequired,
        activeGroup: V.a.number.isRequired,
        onGroupSelect: V.a.func.isRequired,
      };
      var ve = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
            n[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(n)) || this).tones = void 0),
            (t.setCorrectPosition = function (e, o) {
              var n = t.tones.offsetWidth,
                r = t.tones.offsetHeight,
                i = {
                  marginLeft: 0,
                  left: o.left + o.width / 2 - n / 2,
                  bottom: o.bottom + o.height,
                };
              i.left < e.left
                ? (delete i.marginLeft, (i.left = e.left))
                : i.left > e.left + e.width - n &&
                  (delete i.marginLeft, delete i.left, (i.right = e.right)),
                i.bottom > e.bottom + e.height - r &&
                  (delete i.bottom, (i.top = o.top + o.height)),
                (i = _.a.object(i));
              for (var a = 0, s = Object.entries(i); a < s.length; a++) {
                var l = s[a],
                  c = l[0],
                  u = l[1];
                t.tones.style[c] = u;
              }
            }),
            t
          );
        }
        J(t, e);
        var o = t.prototype;
        return (
          (o.componentDidMount = function () {
            var e = this.props.bounds,
              t = e.areaBounds,
              o = e.entryBounds;
            this.setCorrectPosition(t, o);
          }),
          (o.render = function () {
            var e = this,
              t = this.props,
              o = t.theme,
              n = void 0 === o ? {} : o,
              i = t.toneSet,
              a = void 0 === i ? [] : i,
              s = t.onEmojiSelect,
              l = t.emojiImage;
            return r.a.createElement(
              'div',
              { className: n.emojiSelectPopoverToneSelect },
              r.a.createElement(
                'ul',
                {
                  className: n.emojiSelectPopoverToneSelectList,
                  ref: function (t) {
                    e.tones = t;
                  },
                },
                (a || []).map(function (e) {
                  return r.a.createElement(
                    'li',
                    {
                      key: 'tone-select(' + e + ')',
                      className: n.emojiSelectPopoverToneSelectItem,
                    },
                    r.a.createElement(de, {
                      emoji: e,
                      theme: n,
                      checkMouseDown: function () {
                        return !1;
                      },
                      onEmojiSelect: s,
                      mouseDown: !0,
                      emojiImage: l,
                    })
                  );
                })
              )
            );
          }),
          t
        );
      })(n.Component);
      ve.propTypes = {
        theme: V.a.object.isRequired,
        bounds: V.a.shape({
          areaBounds: V.a.shape({
            left: V.a.number.isRequired,
            right: V.a.number.isRequired,
            top: V.a.number.isRequired,
            bottom: V.a.number.isRequired,
            width: V.a.number.isRequired,
            height: V.a.number.isRequired,
          }).isRequired,
          entryBounds: V.a.shape({
            left: V.a.number.isRequired,
            right: V.a.number.isRequired,
            top: V.a.number.isRequired,
            bottom: V.a.number.isRequired,
            width: V.a.number.isRequired,
            height: V.a.number.isRequired,
          }).isRequired,
        }).isRequired,
        onEmojiSelect: V.a.func.isRequired,
      };
      var ge = (function (e) {
        function t() {
          for (var t, o = arguments.length, n = new Array(o), i = 0; i < o; i++)
            n[i] = arguments[i];
          return (
            ((t =
              e.call.apply(e, [this].concat(n)) || this).activeEmoji = null),
            (t.toneSelectTimer = null),
            (t.mouseDown = !1),
            (t.toneSet = null),
            (t.container = void 0),
            (t.groupsElement = void 0),
            (t.state = { activeGroup: 0, showToneSelect: !1 }),
            (t.onMouseDown = function () {
              t.mouseDown = !0;
            }),
            (t.onMouseUp = function () {
              (t.mouseDown = !1),
                t.activeEmoji &&
                  (t.activeEmoji.deselect(),
                  (t.activeEmoji = null),
                  t.state.showToneSelect
                    ? t.closeToneSelect()
                    : t.toneSelectTimer &&
                      (clearTimeout(t.toneSelectTimer),
                      (t.toneSelectTimer = null)));
            }),
            (t.onEmojiSelect = function (e) {
              var o = se(t.props.store.getEditorState(), e);
              t.props.store.setEditorState(o);
            }),
            (t.onEmojiMouseDown = function (e, o) {
              (t.activeEmoji = e), o && t.openToneSelectWithTimer(o);
            }),
            (t.onGroupSelect = function (e) {
              t.groupsElement.scrollToGroup(e);
            }),
            (t.onGroupScroll = function (e) {
              e !== t.state.activeGroup && t.setState({ activeGroup: e });
            }),
            (t.openToneSelectWithTimer = function (e) {
              t.toneSelectTimer = setTimeout(function () {
                (t.toneSelectTimer = null), t.openToneSelect(e);
              }, t.props.toneSelectOpenDelay);
            }),
            (t.openToneSelect = function (e) {
              (t.toneSet = e), t.setState({ showToneSelect: !0 });
            }),
            (t.closeToneSelect = function () {
              (t.toneSet = []), t.setState({ showToneSelect: !1 });
            }),
            (t.checkMouseDown = function () {
              return t.mouseDown;
            }),
            (t.renderToneSelect = function () {
              if (t.state.showToneSelect) {
                var e = t.props,
                  o = e.theme,
                  n = void 0 === o ? {} : o,
                  i = e.emojiImage,
                  a = t.container.getBoundingClientRect(),
                  s = t.groupsElement.container.getBoundingClientRect(),
                  l = t.activeEmoji.button.getBoundingClientRect(),
                  c = {
                    areaBounds: {
                      left: s.left - a.left,
                      right: a.right - s.right,
                      top: s.top - a.top,
                      bottom: a.bottom - s.bottom,
                      width: s.width,
                      height: s.width,
                    },
                    entryBounds: {
                      left: l.left - a.left,
                      right: a.right - l.right,
                      top: l.top - a.top,
                      bottom: a.bottom - l.bottom,
                      width: l.width,
                      height: l.width,
                    },
                  };
                return r.a.createElement(ve, {
                  theme: n,
                  bounds: c,
                  toneSet: t.toneSet,
                  onEmojiSelect: t.onEmojiSelect,
                  emojiImage: i,
                });
              }
              return null;
            }),
            t
          );
        }
        J(t, e);
        var o = t.prototype;
        return (
          (o.componentDidMount = function () {
            window.addEventListener('mouseup', this.onMouseUp);
          }),
          (o.componentWillUnmount = function () {
            window.removeEventListener('mouseup', this.onMouseUp);
          }),
          (o.render = function () {
            var e = this,
              t = this.props,
              o = t.theme,
              n = void 0 === o ? {} : o,
              i = t.groups,
              a = void 0 === i ? [] : i,
              s = t.emojis,
              l = t.isOpen,
              c = void 0 !== l && l,
              u = t.emojiImage,
              d = c ? n.emojiSelectPopover : n.emojiSelectPopoverClosed,
              p = this.state.activeGroup;
            return r.a.createElement(
              'div',
              {
                className: d,
                onMouseDown: this.onMouseDown,
                ref: function (t) {
                  e.container = t;
                },
              },
              r.a.createElement(
                'h3',
                { className: n.emojiSelectPopoverTitle },
                a[p].title
              ),
              r.a.createElement(fe, {
                theme: n,
                groups: a,
                emojis: s,
                checkMouseDown: this.checkMouseDown,
                onEmojiSelect: this.onEmojiSelect,
                onEmojiMouseDown: this.onEmojiMouseDown,
                onGroupScroll: this.onGroupScroll,
                ref: function (t) {
                  e.groupsElement = t;
                },
                emojiImage: u,
                isOpen: c,
              }),
              r.a.createElement(me, {
                theme: n,
                groups: a,
                activeGroup: p,
                onGroupSelect: this.onGroupSelect,
              }),
              this.renderToneSelect()
            );
          }),
          t
        );
      })(n.Component);
      (ge.propTypes = {
        theme: V.a.object.isRequired,
        store: V.a.object.isRequired,
        groups: V.a.arrayOf(V.a.object).isRequired,
        emojis: V.a.object.isRequired,
        toneSelectOpenDelay: V.a.number.isRequired,
        isOpen: V.a.bool,
      }),
        (ge.defaultProps = { isOpen: !1 });
      var be = (function () {
          for (var e, t = {}, o = te(U); !(e = o()).done; ) {
            var n = e.value,
              r = Object(q.toShort)(n.unicode),
              i = q.emojiList[r];
            if (
              i &&
              (t[i.category] || (t[i.category] = {}),
              (t[i.category][r] = [r]),
              n.skins)
            )
              for (var a, s = te(n.skins); !(a = s()).done; ) {
                var l = a.value,
                  c = Object(q.toShort)(l.unicode);
                q.emojiList[c] && t[i.category][r].push(c);
              }
          }
          return t;
        })(),
        ye = (function (e) {
          function t() {
            for (
              var t, o = arguments.length, n = new Array(o), r = 0;
              r < o;
              r++
            )
              n[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                isOpen: !1,
              }),
              (t.onClick = function (e) {
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
              }),
              (t.onButtonMouseUp = function () {
                return t.state.isOpen ? t.closePopover() : t.openPopover();
              }),
              (t.openPopover = function () {
                t.state.isOpen || t.setState({ isOpen: !0 }),
                  t.props.onOpen && t.props.onOpen();
              }),
              (t.closePopover = function () {
                t.state.isOpen && t.setState({ isOpen: !1 }),
                  t.props.onClose && t.props.onClose();
              }),
              t
            );
          }
          J(t, e);
          var o = t.prototype;
          return (
            (o.componentDidMount = function () {
              document.addEventListener('click', this.closePopover);
            }),
            (o.componentWillUnmount = function () {
              document.removeEventListener('click', this.closePopover);
            }),
            (o.render = function () {
              var e = this.props,
                t = e.theme,
                o = void 0 === t ? {} : t,
                n = e.store,
                i = e.selectGroups,
                a = e.selectButtonContent,
                s = e.toneSelectOpenDelay,
                l = e.emojiImage,
                c = this.state.isOpen
                  ? o.emojiSelectButtonPressed
                  : o.emojiSelectButton;
              return r.a.createElement(
                'div',
                { className: o.emojiSelect, onClick: this.onClick },
                r.a.createElement(
                  'button',
                  {
                    className: c,
                    onMouseUp: this.onButtonMouseUp,
                    type: 'button',
                  },
                  a
                ),
                r.a.createElement(ge, {
                  theme: o,
                  store: n,
                  groups: i,
                  emojis: be,
                  toneSelectOpenDelay: s,
                  isOpen: this.state.isOpen,
                  emojiImage: l,
                })
              );
            }),
            t
          );
        })(n.Component);
      (ye.propTypes = {
        theme: V.a.object.isRequired,
        store: V.a.object.isRequired,
        selectGroups: V.a.arrayOf(
          V.a.shape({
            title: V.a.string.isRequired,
            icon: V.a.oneOfType([V.a.element, V.a.string]).isRequired,
            categories: V.a.arrayOf(V.a.oneOf(Object.keys(be))).isRequired,
          })
        ),
        selectButtonContent: V.a.oneOfType([V.a.element, V.a.string]),
        toneSelectOpenDelay: V.a.number,
      }),
        (ye.defaultProps = {
          selectButtonContent: '\u263a',
          selectGroups: ue,
          toneSelectOpenDelay: 500,
        });
      var Se = F.a.escapeRegExp(F.a.unicodeCharRegex()),
        je = new RegExp(
          '<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(' +
            Se +
            ')',
          'gi'
        ),
        we = function (e, t) {
          X()(je, e, t);
        },
        Ee = /(\s|^):[\w]*:?/g,
        Te = function (e, t) {
          X()(Ee, e, t);
        },
        ke = new RegExp(F.a.regAscii, 'g');
      function Oe(e) {
        return e
          ? 'static' !== window.getComputedStyle(e).getPropertyValue('position')
            ? e
            : Oe(e.parentElement)
          : null;
      }
      function De(e) {
        var t,
          o = e.decoratorRect,
          n = e.popover,
          r = e.state,
          i = e.filteredEmojis,
          a = Oe(n.parentElement);
        if (a) {
          var s = a.getBoundingClientRect();
          t = {
            scrollLeft: a.scrollLeft,
            scrollTop: a.scrollTop,
            left: o.left - s.left,
            top: o.top - s.top,
          };
        } else
          t = {
            scrollLeft:
              window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop,
            left: o.left,
            top: o.top,
          };
        var l,
          c,
          u = t.left + t.scrollLeft,
          d = t.top + t.scrollTop;
        return (
          r.isActive &&
            (i.size > 0
              ? ((l = 'scale(1)'), (c = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
              : ((l = 'scale(0)'), (c = 'all 0.35s cubic-bezier(.3,1,.2,1)'))),
          {
            left: u + 'px',
            top: d + 'px',
            transform: l,
            transformOrigin: '1em 0%',
            transition: c,
          }
        );
      }
      var xe = {
        setPriorityList: function (e) {
          this.list = (function (e) {
            var t = {};
            for (var o in F.a.emojiList)
              e.hasOwnProperty(o) || (t[o] = [F.a.emojiList[o].uc_base]);
            return Z({}, e, t);
          })(e);
        },
        list: {},
      };
      xe.setPriorityList({
        ':thumbsup:': ['1f44d'],
        ':smile:': ['1f604'],
        ':heart:': ['2764-fe0f', '2764'],
        ':ok_hand:': ['1f44c'],
        ':joy:': ['1f602'],
        ':tada:': ['1f389'],
        ':see_no_evil:': ['1f648'],
        ':raised_hands:': ['1f64c'],
        ':100:': ['1f4af'],
      });
      var Me = {
        emoji: 'e1g1wugw',
        emojiSuggestions: 'esyutjr',
        emojiSuggestionsEntry: 'e1eijkox',
        emojiSuggestionsEntryFocused: 'e1adbvmt',
        emojiSuggestionsEntryText: 'e13wg9oj',
        emojiSuggestionsEntryIcon: 'e1w5jrn9',
        emojiSelect: 'e183m4hm',
        emojiSelectButton: 'e8k2yoa',
        emojiSelectButtonPressed: 'e13wqaj6',
        emojiSelectPopoverScrollbarOuter: 'ec6zxdw',
        emojiSelectPopover: 'ejr02pv',
        emojiSelectPopoverClosed: 'e6amujp',
        emojiSelectPopoverTitle: 'e16zneum',
        emojiSelectPopoverGroups: 'e1kg9q3n',
        emojiSelectPopoverGroup: 'e1m341vm',
        emojiSelectPopoverGroupTitle: 'e19xmvdb',
        emojiSelectPopoverGroupList: 'e13arc1',
        emojiSelectPopoverGroupItem: 'e6nwac2',
        emojiSelectPopoverToneSelect: 'e3h4qvg',
        emojiSelectPopoverToneSelectList: 'e1129lxj',
        emojiSelectPopoverToneSelectItem: 'eug7aee',
        emojiSelectPopoverEntry: 'eyoq5wq',
        emojiSelectPopoverEntryFocused: 'e1eigyu0',
        emojiSelectPopoverEntryIcon: 'e11mkpma',
        emojiSelectPopoverNav: 'e1cibj9i',
        emojiSelectPopoverNavItem: 'e2bpndj',
        emojiSelectPopoverNavEntry: 'e1qma4nk',
        emojiSelectPopoverNavEntryActive: 'e1q5rpho',
        emojiSelectPopoverScrollbar: 'e17si09n',
        emojiSelectPopoverScrollbarThumb: 'e1duapnp',
      };
      function Pe(e) {
        var t,
          o = e.emoji,
          n = e.theme,
          i = Object(q.toImage)(o),
          a = null == (t = /src="(.*)"/.exec(i)) ? void 0 : t[1];
        return r.a.createElement('img', {
          src: a,
          className: n.emojiSelectPopoverEntryIcon,
          title: o,
          draggable: !1,
          role: 'presentation',
        });
      }
      function He(e) {
        var t = e.emoji;
        return r.a.createElement(
          'span',
          { title: t },
          Object(q.shortnameToUnicode)(t)
        );
      }
      function Ae(e) {
        var t = e.decoratedText,
          o = e.children;
        return r.a.createElement('span', { title: Object(q.toShort)(t) }, o);
      }
      function Ce(e) {
        var t,
          o = e.decoratedText,
          n = e.theme,
          i = e.children,
          a = e.className,
          s = Object(q.toShort)(o),
          l = Object(q.shortnameToImage)(s),
          c = null == (t = /src="(.*)"/.exec(l)) ? void 0 : t[1];
        if (!c) return r.a.createElement(Ae, { decoratedText: o, theme: n }, i);
        var u = 'url(' + c + ')',
          d = Object(Y.a)(n.emoji, a);
        return r.a.createElement(
          'span',
          { className: d, title: s, style: { backgroundImage: u } },
          i
        );
      }
      t.a = function (e) {
        void 0 === e && (e = {});
        var t,
          o = {
            keyBindingFn: void 0,
            handleKeyCommand: void 0,
            handleReturn: void 0,
            onChange: void 0,
          },
          n = {
            ariaHasPopup: 'false',
            ariaExpanded: !1,
            ariaOwneeID: void 0,
            ariaActiveDescendantID: void 0,
          },
          a = Object(i.Map)(),
          s = Object(i.Map)(),
          l = {
            getEditorState: void 0,
            setEditorState: void 0,
            getPortalClientRect: function (e) {
              var t;
              return null == (t = s.get(e)) ? void 0 : t();
            },
            getAllSearches: function () {
              return a;
            },
            isEscaped: function (e) {
              return t === e;
            },
            escapeSearch: function (e) {
              t = e;
            },
            resetEscapedSearch: function () {
              t = void 0;
            },
            register: function (e) {
              a = a.set(e, e);
            },
            updatePortalClientRect: function (e, t) {
              s = s.set(e, t);
            },
            unregister: function (e) {
              (a = a.delete(e)), (s = s.delete(e));
            },
          },
          c = e,
          u = c.theme,
          d = void 0 === u ? Me : u,
          p = c.positionSuggestions,
          f = void 0 === p ? De : p,
          h = c.priorityList,
          m = c.selectGroups,
          v = c.selectButtonContent,
          g = c.toneSelectOpenDelay,
          b = c.useNativeArt,
          y = c.emojiImage,
          S = void 0 === y ? (b ? He : Pe) : y,
          j = c.emojiInlineText,
          w = void 0 === j ? (b ? Ae : Ce) : j;
        h && xe.setPriorityList(h);
        var E = {
            ariaProps: n,
            callbacks: o,
            theme: d,
            store: l,
            positionSuggestions: f,
            shortNames: Object(i.List)(L(xe.list)),
            emojiImage: S,
          },
          T = {
            theme: d,
            store: l,
            selectGroups: m,
            selectButtonContent: v,
            toneSelectOpenDelay: g,
            emojiImage: S,
          };
        return {
          EmojiSuggestions: function (e) {
            return r.a.createElement(le, Z({}, e, E));
          },
          EmojiSelect: function (e) {
            return r.a.createElement(ye, Z({}, e, T));
          },
          decorators: [
            {
              strategy: we,
              component: function (e) {
                return r.a.createElement(
                  oe,
                  Z({}, e, { theme: d, emojiInlineText: w })
                );
              },
            },
            {
              strategy: Te,
              component: function (e) {
                return r.a.createElement(ce, Z({}, e, { store: l }));
              },
            },
          ],
          getAccessibilityProps: function () {
            return {
              role: 'combobox',
              ariaAutoComplete: 'list',
              ariaHasPopup: n.ariaHasPopup,
              ariaExpanded: n.ariaExpanded,
              ariaActiveDescendantID: n.ariaActiveDescendantID,
              ariaOwneeID: n.ariaOwneeID,
            };
          },
          initialize: function (e) {
            var t = e.getEditorState,
              o = e.setEditorState;
            (l.getEditorState = t), (l.setEditorState = o);
          },
          keyBindingFn: function (e) {
            return o.keyBindingFn && o.keyBindingFn(e);
          },
          handleReturn: function (e) {
            return o.handleReturn && o.handleReturn(e);
          },
          onChange: function (e) {
            var t = (function (e) {
              var t = e.getCurrentContent(),
                o = t.getBlockMap(),
                n = t;
              return (
                o.forEach(function (e) {
                  if (e) {
                    var t = e.getText();
                    X()(ke, e, function (o, r) {
                      var i = e.getEntityAt(o);
                      if (i) {
                        var a = n.getEntity(i);
                        if (a && 'emoji' === a.getType()) return;
                      }
                      var s = z.SelectionState.createEmpty(e.getKey())
                          .set('anchorOffset', o)
                          .set('focusOffset', r),
                        l = t.substring(o, r),
                        c = n
                          .createEntity('emoji', 'IMMUTABLE', {
                            emojiUnicode: l,
                          })
                          .getLastCreatedEntityKey();
                      n = z.Modifier.replaceText(n, s, l, void 0, c);
                    });
                  }
                }),
                n.equals(t) ? e : z.EditorState.push(e, n, 'change-block-data')
              );
            })(e);
            if (!t.getCurrentContent().equals(e.getCurrentContent())) {
              var n = e.getSelection();
              t = z.EditorState.forceSelection(t, n);
            }
            return o.onChange ? o.onChange(t) : t;
          },
        };
      };
    },
    FF9q: function (e, t, o) {
      (function (t) {
        (function () {
          var o, n, r, i, a, s;
          'undefined' !== typeof performance &&
          null !== performance &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : 'undefined' !== typeof t && null !== t && t.hrtime
            ? ((e.exports = function () {
                return (o() - a) / 1e6;
              }),
              (n = t.hrtime),
              (i = (o = function () {
                var e;
                return 1e9 * (e = n())[0] + e[1];
              })()),
              (s = 1e9 * t.uptime()),
              (a = i - s))
            : Date.now
            ? ((e.exports = function () {
                return Date.now() - r;
              }),
              (r = Date.now()))
            : ((e.exports = function () {
                return new Date().getTime() - r;
              }),
              (r = new Date().getTime()));
        }.call(this));
      }.call(this, o('F63i')));
    },
    Flvg: function (e, t, o) {
      'use strict';
      var n = o('MVet'),
        r = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        i =
          'undefined' == typeof document ? {} : document.documentElement.style,
        a = (function () {
          var e = (function () {
              for (var e in i) if (r.test(e)) return e.match(r)[0];
              return 'WebkitOpacity' in i
                ? 'Webkit'
                : 'KhtmlOpacity' in i
                ? 'Khtml'
                : '';
            })(),
            t = e.toLowerCase();
          return {
            style: e,
            css: '-' + t + '-',
            dom: { Webkit: 'WebKit', ms: 'MS', o: 'WebKit' }[e] || n(e),
          };
        })();
      e.exports = a;
    },
    GAvS: function (e, t, o) {
      'use strict';
      var n = o('fw2E').a.Symbol;
      t.a = n;
    },
    GPtA: function (e, t, o) {
      'use strict';
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return '[object Function]' === n.apply(e);
      };
    },
    IBDW: function (e, t) {
      var o = null,
        n = ['Webkit', 'Moz', 'O', 'ms'];
      e.exports = function (e) {
        o || (o = document.createElement('div'));
        var t = o.style;
        if (e in t) return e;
        for (
          var r = e.charAt(0).toUpperCase() + e.slice(1), i = n.length;
          i >= 0;
          i--
        ) {
          var a = n[i] + r;
          if (a in t) return a;
        }
        return !1;
      };
    },
    'K8J+': function (e, t, o) {
      'use strict';
      var n = o('3hJ+'),
        r = o('9fqH');
      e.exports = function (e, t) {
        e = n(e, t);
        var o,
          i = [];
        for (o in e) r(e, o) && i.push(o + ': ' + e[o]);
        return i.join('; ');
      };
    },
    LAGv: function (e, t, o) {
      'use strict';
      var n = function (e, t) {
          return t ? t.toUpperCase() : '';
        },
        r = o('fbee');
      e.exports = function (e) {
        return e ? e.replace(r, n) : '';
      };
    },
    'M+uA': function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          return !1;
        });
    },
    MVet: function (e, t, o) {
      'use strict';
      e.exports = function (e) {
        return e.length ? e.charAt(0).toUpperCase() + e.substring(1) : e;
      };
    },
    PupT: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = e.clientHeight,
            o = getComputedStyle(e),
            n = o.paddingTop,
            r = o.paddingBottom;
          return t - parseFloat(n) - parseFloat(r);
        });
    },
    R46i: function (e, t, o) {
      var n = o('/mDG');
      e.exports = function (e) {
        return n(e).replace(/\s(\w)/g, function (e, t) {
          return t.toUpperCase();
        });
      };
    },
    SEb4: function (e, t, o) {
      'use strict';
      var n = Array.isArray;
      t.a = n;
    },
    SLDQ: function (e, t) {
      var o = {
        animationIterationCount: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridColumn: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        stopOpacity: !0,
        strokeDashoffset: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      e.exports = function (e, t) {
        return 'number' !== typeof t || o[e] ? t : t + 'px';
      };
    },
    'TPB+': function (e, t, o) {
      'use strict';
      (function (e) {
        var n = o('fw2E'),
          r = o('VxF/'),
          i =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          a = i && 'object' == typeof e && e && !e.nodeType && e,
          s = a && a.exports === i ? n.a.Buffer : void 0,
          l = (s ? s.isBuffer : void 0) || r.a;
        t.a = l;
      }.call(this, o('EwmA')(e)));
    },
    U1lw: function (e, t, o) {
      'use strict';
      var n = /::/g,
        r = /([A-Z]+)([A-Z][a-z])/g,
        i = /([a-z\d])([A-Z])/g,
        a = /_/g;
      e.exports = function (e, t) {
        return e
          ? e
              .replace(n, '/')
              .replace(r, '$1_$2')
              .replace(i, '$1_$2')
              .replace(a, t || '-')
          : '';
      };
    },
    VBlB: function (e, t) {
      e.exports = function (e) {
        return o.test(e)
          ? e.toLowerCase()
          : n.test(e)
          ? (
              (function (e) {
                return e.replace(i, function (e, t) {
                  return t ? ' ' + t : '';
                });
              })(e) || e
            ).toLowerCase()
          : r.test(e)
          ? (function (e) {
              return e.replace(a, function (e, t, o) {
                return t + ' ' + o.toLowerCase().split('').join(' ');
              });
            })(e).toLowerCase()
          : e.toLowerCase();
      };
      var o = /\s/,
        n = /(_|-|\.|:)/,
        r = /([a-z][A-Z]|[A-Z][a-z])/;
      var i = /[\W_]+(.|$)/g;
      var a = /(.)([A-Z]+)/g;
    },
    'VxF/': function (e, t, o) {
      'use strict';
      t.a = function () {
        return !1;
      };
    },
    XHsT: function (e, t, o) {
      'use strict';
      e.exports = function (e) {
        return e.length ? e.charAt(0).toLowerCase() + e.substring(1) : e;
      };
    },
    XuDI: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Scrollbars = void 0);
      var n,
        r = o('p2Oq'),
        i = (n = r) && n.__esModule ? n : { default: n };
      (t.default = i.default), (t.Scrollbars = i.default);
    },
    ZUB1: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return u;
      });
      var n = o('ERkP'),
        r = o.n(n),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = r.a.createContext && r.a.createContext(i),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        };
      function c(e) {
        return (
          e &&
          e.map(function (e, t) {
            return r.a.createElement(e.tag, s({ key: t }, e.attr), c(e.child));
          })
        );
      }
      function u(e) {
        return function (t) {
          return r.a.createElement(
            d,
            s({ attr: s({}, e.attr) }, t),
            c(e.child)
          );
        };
      }
      function d(e) {
        var t = function (t) {
          var o,
            n = e.attr,
            i = e.size,
            a = e.title,
            c = l(e, ['attr', 'size', 'title']),
            u = i || t.size || '1em';
          return (
            t.className && (o = t.className),
            e.className && (o = (o ? o + ' ' : '') + e.className),
            r.a.createElement(
              'svg',
              s(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                n,
                c,
                {
                  className: o,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              a && r.a.createElement('title', null, a),
              e.children
            )
          );
        };
        return void 0 !== a
          ? r.a.createElement(a.Consumer, null, function (e) {
              return t(e);
            })
          : t(i);
      }
    },
    Zjh3: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.containerStyleDefault = {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }),
        (t.containerStyleAutoHeight = { height: 'auto' }),
        (t.viewStyleDefault = {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'scroll',
          WebkitOverflowScrolling: 'touch',
        }),
        (t.viewStyleAutoHeight = {
          position: 'relative',
          top: void 0,
          left: void 0,
          right: void 0,
          bottom: void 0,
        }),
        (t.viewStyleUniversalInitial = {
          overflow: 'hidden',
          marginRight: 0,
          marginBottom: 0,
        }),
        (t.trackHorizontalStyleDefault = { position: 'absolute', height: 6 }),
        (t.trackVerticalStyleDefault = { position: 'absolute', width: 6 }),
        (t.thumbHorizontalStyleDefault = {
          position: 'relative',
          display: 'block',
          height: '100%',
        }),
        (t.thumbVerticalStyleDefault = {
          position: 'relative',
          display: 'block',
          width: '100%',
        }),
        (t.disableSelectStyle = { userSelect: 'none' }),
        (t.disableSelectStyleReset = { userSelect: '' });
    },
    ca4U: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = e.clientWidth,
            o = getComputedStyle(e),
            n = o.paddingLeft,
            r = o.paddingRight;
          return t - parseFloat(n) - parseFloat(r);
        });
    },
    fbee: function (e, t) {
      e.exports = /[-\s]+(.)?/g;
    },
    fw2E: function (e, t, o) {
      'use strict';
      var n = o('kq48'),
        r = 'object' == typeof self && self && self.Object === Object && self,
        i = n.a || r || Function('return this')();
      t.a = i;
    },
    g7w9: function (e, t, o) {
      'use strict';
      var n = o('U1lw');
      e.exports = function (e) {
        return n(e).toLowerCase();
      };
    },
    gfy7: function (e, t, o) {
      'use strict';
      t.a = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
    k93s: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          if (!1 !== a) return a;
          if ('undefined' !== typeof document) {
            var e = document.createElement('div');
            (0, i.default)(e, {
              width: 100,
              height: 100,
              position: 'absolute',
              top: -9999,
              overflow: 'scroll',
              MsOverflowStyle: 'scrollbar',
            }),
              document.body.appendChild(e),
              (a = e.offsetWidth - e.clientWidth),
              document.body.removeChild(e);
          } else a = 0;
          return a || 0;
        });
      var n,
        r = o('voa/'),
        i = (n = r) && n.__esModule ? n : { default: n };
      var a = !1;
    },
    kq48: function (e, t, o) {
      'use strict';
      (function (e) {
        var o = 'object' == typeof e && e && e.Object === Object && e;
        t.a = o;
      }.call(this, o('GfI+')));
    },
    p2Oq: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        i = o('0xii'),
        a = g(i),
        s = g(o('voa/')),
        l = o('ERkP'),
        c = g(o('aWzz')),
        u = g(o('7NtS')),
        d = g(o('k93s')),
        p = g(o('M+uA')),
        f = g(o('ca4U')),
        h = g(o('PupT')),
        m = o('Zjh3'),
        v = o('/vf7');
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function y(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      var S = (function (e) {
        function t(e) {
          var o;
          b(this, t);
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          var a = y(
            this,
            (o = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              o,
              [this, e].concat(r)
            )
          );
          return (
            (a.getScrollLeft = a.getScrollLeft.bind(a)),
            (a.getScrollTop = a.getScrollTop.bind(a)),
            (a.getScrollWidth = a.getScrollWidth.bind(a)),
            (a.getScrollHeight = a.getScrollHeight.bind(a)),
            (a.getClientWidth = a.getClientWidth.bind(a)),
            (a.getClientHeight = a.getClientHeight.bind(a)),
            (a.getValues = a.getValues.bind(a)),
            (a.getThumbHorizontalWidth = a.getThumbHorizontalWidth.bind(a)),
            (a.getThumbVerticalHeight = a.getThumbVerticalHeight.bind(a)),
            (a.getScrollLeftForOffset = a.getScrollLeftForOffset.bind(a)),
            (a.getScrollTopForOffset = a.getScrollTopForOffset.bind(a)),
            (a.scrollLeft = a.scrollLeft.bind(a)),
            (a.scrollTop = a.scrollTop.bind(a)),
            (a.scrollToLeft = a.scrollToLeft.bind(a)),
            (a.scrollToTop = a.scrollToTop.bind(a)),
            (a.scrollToRight = a.scrollToRight.bind(a)),
            (a.scrollToBottom = a.scrollToBottom.bind(a)),
            (a.handleTrackMouseEnter = a.handleTrackMouseEnter.bind(a)),
            (a.handleTrackMouseLeave = a.handleTrackMouseLeave.bind(a)),
            (a.handleHorizontalTrackMouseDown = a.handleHorizontalTrackMouseDown.bind(
              a
            )),
            (a.handleVerticalTrackMouseDown = a.handleVerticalTrackMouseDown.bind(
              a
            )),
            (a.handleHorizontalThumbMouseDown = a.handleHorizontalThumbMouseDown.bind(
              a
            )),
            (a.handleVerticalThumbMouseDown = a.handleVerticalThumbMouseDown.bind(
              a
            )),
            (a.handleWindowResize = a.handleWindowResize.bind(a)),
            (a.handleScroll = a.handleScroll.bind(a)),
            (a.handleDrag = a.handleDrag.bind(a)),
            (a.handleDragEnd = a.handleDragEnd.bind(a)),
            (a.state = { didMountUniversal: !1 }),
            a
          );
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'componentDidMount',
              value: function () {
                this.addListeners(),
                  this.update(),
                  this.componentDidMountUniversal();
              },
            },
            {
              key: 'componentDidMountUniversal',
              value: function () {
                this.props.universal &&
                  this.setState({ didMountUniversal: !0 });
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.update();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.removeListeners(),
                  (0, i.cancel)(this.requestFrame),
                  clearTimeout(this.hideTracksTimeout),
                  clearInterval(this.detectScrollingInterval);
              },
            },
            {
              key: 'getScrollLeft',
              value: function () {
                return this.view ? this.view.scrollLeft : 0;
              },
            },
            {
              key: 'getScrollTop',
              value: function () {
                return this.view ? this.view.scrollTop : 0;
              },
            },
            {
              key: 'getScrollWidth',
              value: function () {
                return this.view ? this.view.scrollWidth : 0;
              },
            },
            {
              key: 'getScrollHeight',
              value: function () {
                return this.view ? this.view.scrollHeight : 0;
              },
            },
            {
              key: 'getClientWidth',
              value: function () {
                return this.view ? this.view.clientWidth : 0;
              },
            },
            {
              key: 'getClientHeight',
              value: function () {
                return this.view ? this.view.clientHeight : 0;
              },
            },
            {
              key: 'getValues',
              value: function () {
                var e = this.view || {},
                  t = e.scrollLeft,
                  o = void 0 === t ? 0 : t,
                  n = e.scrollTop,
                  r = void 0 === n ? 0 : n,
                  i = e.scrollWidth,
                  a = void 0 === i ? 0 : i,
                  s = e.scrollHeight,
                  l = void 0 === s ? 0 : s,
                  c = e.clientWidth,
                  u = void 0 === c ? 0 : c,
                  d = e.clientHeight,
                  p = void 0 === d ? 0 : d;
                return {
                  left: o / (a - u) || 0,
                  top: r / (l - p) || 0,
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: a,
                  scrollHeight: l,
                  clientWidth: u,
                  clientHeight: p,
                };
              },
            },
            {
              key: 'getThumbHorizontalWidth',
              value: function () {
                var e = this.props,
                  t = e.thumbSize,
                  o = e.thumbMinSize,
                  n = this.view,
                  r = n.scrollWidth,
                  i = n.clientWidth,
                  a = (0, f.default)(this.trackHorizontal),
                  s = Math.ceil((i / r) * a);
                return a === s ? 0 : t || Math.max(s, o);
              },
            },
            {
              key: 'getThumbVerticalHeight',
              value: function () {
                var e = this.props,
                  t = e.thumbSize,
                  o = e.thumbMinSize,
                  n = this.view,
                  r = n.scrollHeight,
                  i = n.clientHeight,
                  a = (0, h.default)(this.trackVertical),
                  s = Math.ceil((i / r) * a);
                return a === s ? 0 : t || Math.max(s, o);
              },
            },
            {
              key: 'getScrollLeftForOffset',
              value: function (e) {
                var t = this.view,
                  o = t.scrollWidth,
                  n = t.clientWidth;
                return (
                  (e /
                    ((0, f.default)(this.trackHorizontal) -
                      this.getThumbHorizontalWidth())) *
                  (o - n)
                );
              },
            },
            {
              key: 'getScrollTopForOffset',
              value: function (e) {
                var t = this.view,
                  o = t.scrollHeight,
                  n = t.clientHeight;
                return (
                  (e /
                    ((0, h.default)(this.trackVertical) -
                      this.getThumbVerticalHeight())) *
                  (o - n)
                );
              },
            },
            {
              key: 'scrollLeft',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                this.view && (this.view.scrollLeft = e);
              },
            },
            {
              key: 'scrollTop',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                this.view && (this.view.scrollTop = e);
              },
            },
            {
              key: 'scrollToLeft',
              value: function () {
                this.view && (this.view.scrollLeft = 0);
              },
            },
            {
              key: 'scrollToTop',
              value: function () {
                this.view && (this.view.scrollTop = 0);
              },
            },
            {
              key: 'scrollToRight',
              value: function () {
                this.view && (this.view.scrollLeft = this.view.scrollWidth);
              },
            },
            {
              key: 'scrollToBottom',
              value: function () {
                this.view && (this.view.scrollTop = this.view.scrollHeight);
              },
            },
            {
              key: 'addListeners',
              value: function () {
                if ('undefined' !== typeof document && this.view) {
                  var e = this.view,
                    t = this.trackHorizontal,
                    o = this.trackVertical,
                    n = this.thumbHorizontal,
                    r = this.thumbVertical;
                  e.addEventListener('scroll', this.handleScroll),
                    (0, d.default)() &&
                      (t.addEventListener(
                        'mouseenter',
                        this.handleTrackMouseEnter
                      ),
                      t.addEventListener(
                        'mouseleave',
                        this.handleTrackMouseLeave
                      ),
                      t.addEventListener(
                        'mousedown',
                        this.handleHorizontalTrackMouseDown
                      ),
                      o.addEventListener(
                        'mouseenter',
                        this.handleTrackMouseEnter
                      ),
                      o.addEventListener(
                        'mouseleave',
                        this.handleTrackMouseLeave
                      ),
                      o.addEventListener(
                        'mousedown',
                        this.handleVerticalTrackMouseDown
                      ),
                      n.addEventListener(
                        'mousedown',
                        this.handleHorizontalThumbMouseDown
                      ),
                      r.addEventListener(
                        'mousedown',
                        this.handleVerticalThumbMouseDown
                      ),
                      window.addEventListener(
                        'resize',
                        this.handleWindowResize
                      ));
                }
              },
            },
            {
              key: 'removeListeners',
              value: function () {
                if ('undefined' !== typeof document && this.view) {
                  var e = this.view,
                    t = this.trackHorizontal,
                    o = this.trackVertical,
                    n = this.thumbHorizontal,
                    r = this.thumbVertical;
                  e.removeEventListener('scroll', this.handleScroll),
                    (0, d.default)() &&
                      (t.removeEventListener(
                        'mouseenter',
                        this.handleTrackMouseEnter
                      ),
                      t.removeEventListener(
                        'mouseleave',
                        this.handleTrackMouseLeave
                      ),
                      t.removeEventListener(
                        'mousedown',
                        this.handleHorizontalTrackMouseDown
                      ),
                      o.removeEventListener(
                        'mouseenter',
                        this.handleTrackMouseEnter
                      ),
                      o.removeEventListener(
                        'mouseleave',
                        this.handleTrackMouseLeave
                      ),
                      o.removeEventListener(
                        'mousedown',
                        this.handleVerticalTrackMouseDown
                      ),
                      n.removeEventListener(
                        'mousedown',
                        this.handleHorizontalThumbMouseDown
                      ),
                      r.removeEventListener(
                        'mousedown',
                        this.handleVerticalThumbMouseDown
                      ),
                      window.removeEventListener(
                        'resize',
                        this.handleWindowResize
                      ),
                      this.teardownDragging());
                }
              },
            },
            {
              key: 'handleScroll',
              value: function (e) {
                var t = this,
                  o = this.props,
                  n = o.onScroll,
                  r = o.onScrollFrame;
                n && n(e),
                  this.update(function (e) {
                    var o = e.scrollLeft,
                      n = e.scrollTop;
                    (t.viewScrollLeft = o), (t.viewScrollTop = n), r && r(e);
                  }),
                  this.detectScrolling();
              },
            },
            {
              key: 'handleScrollStart',
              value: function () {
                var e = this.props.onScrollStart;
                e && e(), this.handleScrollStartAutoHide();
              },
            },
            {
              key: 'handleScrollStartAutoHide',
              value: function () {
                this.props.autoHide && this.showTracks();
              },
            },
            {
              key: 'handleScrollStop',
              value: function () {
                var e = this.props.onScrollStop;
                e && e(), this.handleScrollStopAutoHide();
              },
            },
            {
              key: 'handleScrollStopAutoHide',
              value: function () {
                this.props.autoHide && this.hideTracks();
              },
            },
            {
              key: 'handleWindowResize',
              value: function () {
                this.update();
              },
            },
            {
              key: 'handleHorizontalTrackMouseDown',
              value: function (e) {
                e.preventDefault();
                var t = e.target,
                  o = e.clientX,
                  n = t.getBoundingClientRect().left,
                  r = this.getThumbHorizontalWidth(),
                  i = Math.abs(n - o) - r / 2;
                this.view.scrollLeft = this.getScrollLeftForOffset(i);
              },
            },
            {
              key: 'handleVerticalTrackMouseDown',
              value: function (e) {
                e.preventDefault();
                var t = e.target,
                  o = e.clientY,
                  n = t.getBoundingClientRect().top,
                  r = this.getThumbVerticalHeight(),
                  i = Math.abs(n - o) - r / 2;
                this.view.scrollTop = this.getScrollTopForOffset(i);
              },
            },
            {
              key: 'handleHorizontalThumbMouseDown',
              value: function (e) {
                e.preventDefault(), this.handleDragStart(e);
                var t = e.target,
                  o = e.clientX,
                  n = t.offsetWidth,
                  r = t.getBoundingClientRect().left;
                this.prevPageX = n - (o - r);
              },
            },
            {
              key: 'handleVerticalThumbMouseDown',
              value: function (e) {
                e.preventDefault(), this.handleDragStart(e);
                var t = e.target,
                  o = e.clientY,
                  n = t.offsetHeight,
                  r = t.getBoundingClientRect().top;
                this.prevPageY = n - (o - r);
              },
            },
            {
              key: 'setupDragging',
              value: function () {
                (0, s.default)(document.body, m.disableSelectStyle),
                  document.addEventListener('mousemove', this.handleDrag),
                  document.addEventListener('mouseup', this.handleDragEnd),
                  (document.onselectstart = p.default);
              },
            },
            {
              key: 'teardownDragging',
              value: function () {
                (0, s.default)(document.body, m.disableSelectStyleReset),
                  document.removeEventListener('mousemove', this.handleDrag),
                  document.removeEventListener('mouseup', this.handleDragEnd),
                  (document.onselectstart = void 0);
              },
            },
            {
              key: 'handleDragStart',
              value: function (e) {
                (this.dragging = !0),
                  e.stopImmediatePropagation(),
                  this.setupDragging();
              },
            },
            {
              key: 'handleDrag',
              value: function (e) {
                if (this.prevPageX) {
                  var t = e.clientX,
                    o =
                      -this.trackHorizontal.getBoundingClientRect().left +
                      t -
                      (this.getThumbHorizontalWidth() - this.prevPageX);
                  this.view.scrollLeft = this.getScrollLeftForOffset(o);
                }
                if (this.prevPageY) {
                  var n = e.clientY,
                    r =
                      -this.trackVertical.getBoundingClientRect().top +
                      n -
                      (this.getThumbVerticalHeight() - this.prevPageY);
                  this.view.scrollTop = this.getScrollTopForOffset(r);
                }
                return !1;
              },
            },
            {
              key: 'handleDragEnd',
              value: function () {
                (this.dragging = !1),
                  (this.prevPageX = this.prevPageY = 0),
                  this.teardownDragging(),
                  this.handleDragEndAutoHide();
              },
            },
            {
              key: 'handleDragEndAutoHide',
              value: function () {
                this.props.autoHide && this.hideTracks();
              },
            },
            {
              key: 'handleTrackMouseEnter',
              value: function () {
                (this.trackMouseOver = !0),
                  this.handleTrackMouseEnterAutoHide();
              },
            },
            {
              key: 'handleTrackMouseEnterAutoHide',
              value: function () {
                this.props.autoHide && this.showTracks();
              },
            },
            {
              key: 'handleTrackMouseLeave',
              value: function () {
                (this.trackMouseOver = !1),
                  this.handleTrackMouseLeaveAutoHide();
              },
            },
            {
              key: 'handleTrackMouseLeaveAutoHide',
              value: function () {
                this.props.autoHide && this.hideTracks();
              },
            },
            {
              key: 'showTracks',
              value: function () {
                clearTimeout(this.hideTracksTimeout),
                  (0, s.default)(this.trackHorizontal, { opacity: 1 }),
                  (0, s.default)(this.trackVertical, { opacity: 1 });
              },
            },
            {
              key: 'hideTracks',
              value: function () {
                var e = this;
                if (!this.dragging && !this.scrolling && !this.trackMouseOver) {
                  var t = this.props.autoHideTimeout;
                  clearTimeout(this.hideTracksTimeout),
                    (this.hideTracksTimeout = setTimeout(function () {
                      (0, s.default)(e.trackHorizontal, { opacity: 0 }),
                        (0, s.default)(e.trackVertical, { opacity: 0 });
                    }, t));
                }
              },
            },
            {
              key: 'detectScrolling',
              value: function () {
                var e = this;
                this.scrolling ||
                  ((this.scrolling = !0),
                  this.handleScrollStart(),
                  (this.detectScrollingInterval = setInterval(function () {
                    e.lastViewScrollLeft === e.viewScrollLeft &&
                      e.lastViewScrollTop === e.viewScrollTop &&
                      (clearInterval(e.detectScrollingInterval),
                      (e.scrolling = !1),
                      e.handleScrollStop()),
                      (e.lastViewScrollLeft = e.viewScrollLeft),
                      (e.lastViewScrollTop = e.viewScrollTop);
                  }, 100)));
              },
            },
            {
              key: 'raf',
              value: function (e) {
                var t = this;
                this.requestFrame && a.default.cancel(this.requestFrame),
                  (this.requestFrame = (0, a.default)(function () {
                    (t.requestFrame = void 0), e();
                  }));
              },
            },
            {
              key: 'update',
              value: function (e) {
                var t = this;
                this.raf(function () {
                  return t._update(e);
                });
              },
            },
            {
              key: '_update',
              value: function (e) {
                var t = this.props,
                  o = t.onUpdate,
                  n = t.hideTracksWhenNotNeeded,
                  r = this.getValues();
                if ((0, d.default)()) {
                  var i = r.scrollLeft,
                    a = r.clientWidth,
                    l = r.scrollWidth,
                    c = (0, f.default)(this.trackHorizontal),
                    u = this.getThumbHorizontalWidth(),
                    p = {
                      width: u,
                      transform:
                        'translateX(' + (i / (l - a)) * (c - u) + 'px)',
                    },
                    m = r.scrollTop,
                    v = r.clientHeight,
                    g = r.scrollHeight,
                    b = (0, h.default)(this.trackVertical),
                    y = this.getThumbVerticalHeight(),
                    S = {
                      height: y,
                      transform:
                        'translateY(' + (m / (g - v)) * (b - y) + 'px)',
                    };
                  if (n) {
                    var j = { visibility: l > a ? 'visible' : 'hidden' },
                      w = { visibility: g > v ? 'visible' : 'hidden' };
                    (0, s.default)(this.trackHorizontal, j),
                      (0, s.default)(this.trackVertical, w);
                  }
                  (0, s.default)(this.thumbHorizontal, p),
                    (0, s.default)(this.thumbVertical, S);
                }
                o && o(r), 'function' === typeof e && e(r);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = (0, d.default)(),
                  o = this.props,
                  r =
                    (o.onScroll,
                    o.onScrollFrame,
                    o.onScrollStart,
                    o.onScrollStop,
                    o.onUpdate,
                    o.renderView),
                  i = o.renderTrackHorizontal,
                  a = o.renderTrackVertical,
                  s = o.renderThumbHorizontal,
                  c = o.renderThumbVertical,
                  p = o.tagName,
                  f = (o.hideTracksWhenNotNeeded, o.autoHide),
                  h = (o.autoHideTimeout, o.autoHideDuration),
                  v = (o.thumbSize, o.thumbMinSize, o.universal),
                  g = o.autoHeight,
                  b = o.autoHeightMin,
                  y = o.autoHeightMax,
                  S = o.style,
                  j = o.children,
                  w = (function (e, t) {
                    var o = {};
                    for (var n in e)
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, n) &&
                          (o[n] = e[n]));
                    return o;
                  })(o, [
                    'onScroll',
                    'onScrollFrame',
                    'onScrollStart',
                    'onScrollStop',
                    'onUpdate',
                    'renderView',
                    'renderTrackHorizontal',
                    'renderTrackVertical',
                    'renderThumbHorizontal',
                    'renderThumbVertical',
                    'tagName',
                    'hideTracksWhenNotNeeded',
                    'autoHide',
                    'autoHideTimeout',
                    'autoHideDuration',
                    'thumbSize',
                    'thumbMinSize',
                    'universal',
                    'autoHeight',
                    'autoHeightMin',
                    'autoHeightMax',
                    'style',
                    'children',
                  ]),
                  E = this.state.didMountUniversal,
                  T = n(
                    {},
                    m.containerStyleDefault,
                    g &&
                      n({}, m.containerStyleAutoHeight, {
                        minHeight: b,
                        maxHeight: y,
                      }),
                    S
                  ),
                  k = n(
                    {},
                    m.viewStyleDefault,
                    { marginRight: t ? -t : 0, marginBottom: t ? -t : 0 },
                    g &&
                      n({}, m.viewStyleAutoHeight, {
                        minHeight: (0, u.default)(b)
                          ? 'calc(' + b + ' + ' + t + 'px)'
                          : b + t,
                        maxHeight: (0, u.default)(y)
                          ? 'calc(' + y + ' + ' + t + 'px)'
                          : y + t,
                      }),
                    g && v && !E && { minHeight: b, maxHeight: y },
                    v && !E && m.viewStyleUniversalInitial
                  ),
                  O = { transition: 'opacity ' + h + 'ms', opacity: 0 },
                  D = n(
                    {},
                    m.trackHorizontalStyleDefault,
                    f && O,
                    (!t || (v && !E)) && { display: 'none' }
                  ),
                  x = n(
                    {},
                    m.trackVerticalStyleDefault,
                    f && O,
                    (!t || (v && !E)) && { display: 'none' }
                  );
                return (0, l.createElement)(
                  p,
                  n({}, w, {
                    style: T,
                    ref: function (t) {
                      e.container = t;
                    },
                  }),
                  [
                    (0, l.cloneElement)(
                      r({ style: k }),
                      {
                        key: 'view',
                        ref: function (t) {
                          e.view = t;
                        },
                      },
                      j
                    ),
                    (0, l.cloneElement)(
                      i({ style: D }),
                      {
                        key: 'trackHorizontal',
                        ref: function (t) {
                          e.trackHorizontal = t;
                        },
                      },
                      (0, l.cloneElement)(
                        s({ style: m.thumbHorizontalStyleDefault }),
                        {
                          ref: function (t) {
                            e.thumbHorizontal = t;
                          },
                        }
                      )
                    ),
                    (0, l.cloneElement)(
                      a({ style: x }),
                      {
                        key: 'trackVertical',
                        ref: function (t) {
                          e.trackVertical = t;
                        },
                      },
                      (0, l.cloneElement)(
                        c({ style: m.thumbVerticalStyleDefault }),
                        {
                          ref: function (t) {
                            e.thumbVertical = t;
                          },
                        }
                      )
                    ),
                  ]
                );
              },
            },
          ]),
          t
        );
      })(l.Component);
      (t.default = S),
        (S.propTypes = {
          onScroll: c.default.func,
          onScrollFrame: c.default.func,
          onScrollStart: c.default.func,
          onScrollStop: c.default.func,
          onUpdate: c.default.func,
          renderView: c.default.func,
          renderTrackHorizontal: c.default.func,
          renderTrackVertical: c.default.func,
          renderThumbHorizontal: c.default.func,
          renderThumbVertical: c.default.func,
          tagName: c.default.string,
          thumbSize: c.default.number,
          thumbMinSize: c.default.number,
          hideTracksWhenNotNeeded: c.default.bool,
          autoHide: c.default.bool,
          autoHideTimeout: c.default.number,
          autoHideDuration: c.default.number,
          autoHeight: c.default.bool,
          autoHeightMin: c.default.oneOfType([
            c.default.number,
            c.default.string,
          ]),
          autoHeightMax: c.default.oneOfType([
            c.default.number,
            c.default.string,
          ]),
          universal: c.default.bool,
          style: c.default.object,
          children: c.default.node,
        }),
        (S.defaultProps = {
          renderView: v.renderViewDefault,
          renderTrackHorizontal: v.renderTrackHorizontalDefault,
          renderTrackVertical: v.renderTrackVerticalDefault,
          renderThumbHorizontal: v.renderThumbHorizontalDefault,
          renderThumbVertical: v.renderThumbVerticalDefault,
          tagName: 'div',
          thumbMinSize: 30,
          hideTracksWhenNotNeeded: !1,
          autoHide: !1,
          autoHideTimeout: 1e3,
          autoHideDuration: 200,
          autoHeight: !1,
          autoHeightMin: 0,
          autoHeightMax: 200,
          universal: !1,
        });
    },
    q9tZ: function (e, t, o) {
      'use strict';
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return !!e && '[object Object]' === n.call(e);
      };
    },
    qf5W: function (e, t, o) {
      e.exports = o('296u')();
    },
    udmA: function (e, t, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = function (e, t, o) {
        for (
          var n = t.getText(), r = void 0, i = void 0;
          null !== (r = e.exec(n));

        )
          r.index === e.lastIndex && e.lastIndex++,
            o((i = r.index), i + r[0].length);
      };
    },
    'voa/': function (e, t, o) {
      var n = o('IBDW'),
        r = o('R46i'),
        i = { float: 'cssFloat' },
        a = o('SLDQ');
      function s(e, t, o) {
        var s = i[t];
        if (
          ('undefined' === typeof s &&
            (s = (function (e) {
              var t = r(e),
                o = n(t);
              return (i[t] = i[e] = i[o] = o), o;
            })(t)),
          s)
        ) {
          if (void 0 === o) return e.style[s];
          e.style[s] = a(s, o);
        }
      }
      function l(e, t) {
        for (var o in t) t.hasOwnProperty(o) && s(e, o, t[o]);
      }
      function c() {
        2 === arguments.length
          ? 'string' === typeof arguments[1]
            ? (arguments[0].style.cssText = arguments[1])
            : l(arguments[0], arguments[1])
          : s(arguments[0], arguments[1], arguments[2]);
      }
      (e.exports = c),
        (e.exports.set = c),
        (e.exports.get = function (e, t) {
          return Array.isArray(t)
            ? t.reduce(function (t, o) {
                return (t[o] = s(e, o || '')), t;
              }, {})
            : s(e, t || '');
        });
    },
    zWCH: function (e, t) {
      e.exports = {
        'border-radius': 1,
        'border-top-left-radius': 1,
        'border-top-right-radius': 1,
        'border-bottom-left-radius': 1,
        'border-bottom-right-radius': 1,
        'box-shadow': 1,
        order: 1,
        flex: function (e, t) {
          return [t + 'box-flex'];
        },
        'box-flex': 1,
        'box-align': 1,
        animation: 1,
        'animation-duration': 1,
        'animation-name': 1,
        transition: 1,
        'transition-duration': 1,
        transform: 1,
        'transform-style': 1,
        'transform-origin': 1,
        'backface-visibility': 1,
        perspective: 1,
        'box-pack': 1,
      };
    },
  },
]);
