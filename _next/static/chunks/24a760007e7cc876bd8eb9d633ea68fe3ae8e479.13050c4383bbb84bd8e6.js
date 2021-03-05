(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    '+3DM': function (t, e, r) {
      'use strict';
      var n = r('ERkP'),
        i = r.n(n),
        o = r('Svze'),
        u = r('zpdM');
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function a(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          c(t, e);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var f = function (t, e) {
          var r,
            n,
            i = t.getCurrentContent(),
            s = t.getSelection(),
            a = u.Modifier.removeRange(i, s, 'backward'),
            c = a.getSelectionAfter(),
            f = c.get('focusKey'),
            h = i.getBlockForKey(f),
            p = 0 === h.getLength() && null === h.getEntityAt(0),
            _ = 0 === s.getStartOffset();
          p || _
            ? ((r = c), (n = a))
            : (r = (n = u.Modifier.splitBlock(a, c)).getSelectionAfter());
          var l = u.Modifier.setBlockType(n, r, 'sticker'),
            v = l
              .createEntity('sticker', 'IMMUTABLE', { id: e })
              .getLastCreatedEntityKey(),
            y = u.CharacterMetadata.create({ entity: v }),
            d = [
              new u.ContentBlock({
                key: Object(u.genKey)(),
                type: 'sticker',
                text: ' ',
                characterList: Object(o.List)(Object(o.Repeat)(y, 1)),
              }),
              new u.ContentBlock({
                key: Object(u.genKey)(),
                type: 'unstyled',
                text: '',
                characterList: Object(o.List)(),
              }),
            ],
            g = u.BlockMapBuilder.createFromArray(d),
            m = u.Modifier.replaceWithFragment(l, r, g),
            w = u.EditorState.push(t, m, 'insert-fragment');
          return u.EditorState.forceSelection(w, m.getSelectionAfter());
        },
        h = function (t, e) {
          var r,
            n = t.getCurrentContent(),
            i = new u.SelectionState({
              anchorKey: e,
              anchorOffset: 0,
              focusKey: e,
              focusOffset: 0,
            }),
            o = n.getKeyAfter(e),
            s = n.getBlockForKey(o);
          (r =
            s &&
            'unstyled' === s.getType() &&
            0 === s.getLength() &&
            s === n.getBlockMap().last()
              ? new u.SelectionState({
                  anchorKey: e,
                  anchorOffset: 0,
                  focusKey: o,
                  focusOffset: 0,
                })
              : new u.SelectionState({
                  anchorKey: e,
                  anchorOffset: 0,
                  focusKey: e,
                  focusOffset: 1,
                })),
            (n = u.Modifier.setBlockType(n, r, 'unstyled')),
            (n = u.Modifier.removeRange(n, r, 'backward'));
          var a = u.EditorState.push(t, n, 'remove-range');
          return u.EditorState.forceSelection(a, i);
        },
        p = function (t) {
          var e = t;
          return (
            t
              .getCurrentContent()
              .get('blockMap')
              .forEach(function (r) {
                'sticker' === r.get('type') &&
                  null === r.getEntityAt(0) &&
                  (e = (function (t, e) {
                    var r = t.getCurrentContent(),
                      n = new u.SelectionState({
                        anchorKey: e,
                        anchorOffset: 0,
                        focusKey: e,
                        focusOffset: 0,
                      }),
                      i = u.Modifier.setBlockType(r, n, 'unstyled'),
                      o = u.EditorState.push(t, i, 'remove-range');
                    return u.EditorState.forceSelection(
                      o,
                      i.getSelectionAfter()
                    );
                  })(t, r.get('key')));
              }),
            e
          );
        },
        _ = (function (t) {
          function e() {
            for (
              var e, r = arguments.length, n = new Array(r), i = 0;
              i < r;
              i++
            )
              n[i] = arguments[i];
            return (
              ((e =
                t.call.apply(t, [this].concat(n)) || this).remove = function (
                t
              ) {
                t.preventDefault(),
                  t.stopPropagation(),
                  e.props.blockProps.onRemove(e.props.block.getKey());
              }),
              e
            );
          }
          return (
            a(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.block,
                r = t.stickers,
                n = t.theme,
                o = void 0 === n ? {} : n,
                u = t.contentState,
                s = i.a.createElement(
                  'span',
                  {
                    className: o.stickerRemoveButton,
                    onClick: this.remove,
                    role: 'button',
                  },
                  '\u2715'
                ),
                a = u.getEntity(e.getEntityAt(0)).getData();
              return i.a.createElement(
                'figure',
                {
                  contentEditable: !1,
                  'data-offset-key': e.get('key') + '-0-0',
                  className: o.sticker,
                },
                i.a.createElement('img', {
                  className: o.stickerImage,
                  src: r.getIn(['data', a.id, 'url']),
                  role: 'presentation',
                }),
                this.props.attachRemoveButton ? s : null
              );
            }),
            e
          );
        })(n.Component),
        l = (function (t) {
          function e() {
            for (
              var e, r = arguments.length, n = new Array(r), i = 0;
              i < r;
              i++
            )
              n[i] = arguments[i];
            return (
              ((e =
                t.call.apply(t, [this].concat(n)) ||
                this).onClick = function () {
                e.props.onClick(e.props.id);
              }),
              e
            );
          }
          return (
            a(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.id,
                r = t.url,
                n = t.theme,
                o = void 0 === n ? {} : n;
              return i.a.createElement(
                'button',
                {
                  onClick: this.onClick,
                  key: e,
                  type: 'button',
                  className: o.selectSticker,
                },
                i.a.createElement('img', {
                  className: o.selectStickerImage,
                  src: r,
                  role: 'presentation',
                })
              );
            }),
            e
          );
        })(n.Component);
      function v(t, e) {
        e.style.overflow = t;
      }
      var y = (function (t) {
          function e() {
            for (
              var e, r = arguments.length, n = new Array(r), i = 0;
              i < r;
              i++
            )
              n[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(n)) || this).state = {
                open: !1,
              }),
              (e.preventNextClose = void 0),
              (e.onMouseEnter = function () {
                v('hidden', document.body);
              }),
              (e.onMouseLeave = function () {
                v('auto', document.body);
              }),
              (e.openPopover = function () {
                e.state.open ||
                  ((e.preventNextClose = !0), e.setState({ open: !0 }));
              }),
              (e.closePopover = function () {
                !e.preventNextClose && e.state.open && e.setState({ open: !1 }),
                  (e.preventNextClose = !1);
              }),
              (e.add = function (t) {
                var r = e.props.editor;
                r.onChange(f(r.state.editorState, t));
              }),
              e
            );
          }
          a(e, t);
          var r = e.prototype;
          return (
            (r.componentDidMount = function () {
              document.addEventListener('click', this.closePopover);
            }),
            (r.componentWillUnmount = function () {
              document.removeEventListener('click', this.closePopover);
            }),
            (r.render = function () {
              var t = this,
                e = this.props.stickers.get('data').map(function (e) {
                  var r = e.get('id'),
                    n = e.get('url');
                  return i.a.createElement(l, {
                    theme: t.props.theme,
                    key: r,
                    onClick: t.add,
                    id: r,
                    url: n,
                  });
                }),
                r = this.props.theme,
                n = void 0 === r ? {} : r,
                o = this.state.open ? n.selectPopover : n.selectClosedPopover,
                u = this.state.open ? n.selectPressedButton : n.selectButton;
              return i.a.createElement(
                'div',
                { className: n.select },
                i.a.createElement(
                  'button',
                  { className: u, onMouseUp: this.openPopover, type: 'button' },
                  this.props.selectButtonContent
                ),
                i.a.createElement(
                  'div',
                  {
                    className: o,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                  },
                  i.a.createElement(
                    'div',
                    { className: n.selectStickerList },
                    e.toList().toJS()
                  ),
                  i.a.createElement('div', {
                    className: n.selectBottomGradient,
                  })
                )
              );
            }),
            e
          );
        })(n.Component),
        d = {
          sticker: 'sl55r16',
          stickerImage: 's1b1f21y',
          stickerRemoveButton: 's3u1xfs',
          select: 'snop97i',
          selectPopover: 's1te48ud',
          selectClosedPopover: 'sqwiblq',
          selectBottomGradient: 's1sha4g8',
          selectButton: 's1m6n3s1',
          selectPressedButton: 'shl2p6m',
          selectStickerList: 'sjjedyb',
          selectSticker: 's14u7spj',
          selectStickerImage: 's64maza',
        };
      e.a = function (t) {
        var e,
          r = t.theme ? t.theme : d,
          n = t.stickers,
          u = t.selectButtonContent ? t.selectButtonContent : '\u263a',
          a = !1 !== t.attachRemoveButton;
        return {
          blockRendererFn:
            ((e = function (t) {
              return i.a.createElement(
                _,
                s({}, t, { attachRemoveButton: a, stickers: n, theme: r })
              );
            }),
            function (t, r) {
              var n = r.getEditorState,
                i = r.setEditorState;
              if ('sticker' === t.getType())
                return {
                  component: e,
                  props: {
                    onRemove: function (t) {
                      i(h(n(), t));
                    },
                  },
                };
            }),
          onChange: p,
          add: f,
          remove: h,
          blockRenderMap: Object(o.Map)({ sticker: { element: 'div' } }),
          StickerSelect: function (t) {
            return i.a.createElement(
              y,
              s({}, t, { selectButtonContent: u, stickers: n, theme: r })
            );
          },
        };
      };
    },
    Mpt7: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return an;
      });
      var n = 32,
        i = 31,
        o = {};
      function u(t) {
        t && (t.value = !0);
      }
      function s() {}
      function a(t) {
        return void 0 === t.size && (t.size = t.__iterate(f)), t.size;
      }
      function c(t, e) {
        if ('number' !== typeof e) {
          var r = e >>> 0;
          if ('' + r !== e || 4294967295 === r) return NaN;
          e = r;
        }
        return e < 0 ? a(t) + e : e;
      }
      function f() {
        return !0;
      }
      function h(t, e, r) {
        return (
          ((0 === t && !v(t)) || (void 0 !== r && t <= -r)) &&
          (void 0 === e || (void 0 !== r && e >= r))
        );
      }
      function p(t, e) {
        return l(t, e, 0);
      }
      function _(t, e) {
        return l(t, e, e);
      }
      function l(t, e, r) {
        return void 0 === t
          ? r
          : v(t)
          ? e === 1 / 0
            ? e
            : 0 | Math.max(0, e + t)
          : void 0 === e || e === t
          ? t
          : 0 | Math.min(e, t);
      }
      function v(t) {
        return t < 0 || (0 === t && 1 / t === -1 / 0);
      }
      var y = '@@__IMMUTABLE_ITERABLE__@@';
      function d(t) {
        return Boolean(t && t[y]);
      }
      var g = '@@__IMMUTABLE_KEYED__@@';
      function m(t) {
        return Boolean(t && t[g]);
      }
      var w = '@@__IMMUTABLE_INDEXED__@@';
      function S(t) {
        return Boolean(t && t[w]);
      }
      function b(t) {
        return m(t) || S(t);
      }
      var z = function (t) {
          return d(t) ? t : V(t);
        },
        I = (function (t) {
          function e(t) {
            return m(t) ? t : F(t);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            e
          );
        })(z),
        E = (function (t) {
          function e(t) {
            return S(t) ? t : G(t);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            e
          );
        })(z),
        k = (function (t) {
          function e(t) {
            return d(t) && !b(t) ? t : Y(t);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            e
          );
        })(z);
      (z.Keyed = I), (z.Indexed = E), (z.Set = k);
      var O = '@@__IMMUTABLE_SEQ__@@';
      function M(t) {
        return Boolean(t && t[O]);
      }
      var q = '@@__IMMUTABLE_RECORD__@@';
      function A(t) {
        return Boolean(t && t[q]);
      }
      function j(t) {
        return d(t) || A(t);
      }
      var D = '@@__IMMUTABLE_ORDERED__@@';
      function x(t) {
        return Boolean(t && t[D]);
      }
      var B = 'function' === typeof Symbol && Symbol.iterator,
        C = '@@iterator',
        R = B || C,
        K = function (t) {
          this.next = t;
        };
      function L(t, e, r, n) {
        var i = 0 === t ? e : 1 === t ? r : [e, r];
        return n ? (n.value = i) : (n = { value: i, done: !1 }), n;
      }
      function U() {
        return { value: void 0, done: !0 };
      }
      function T(t) {
        return !!W(t);
      }
      function N(t) {
        return t && 'function' === typeof t.next;
      }
      function P(t) {
        var e = W(t);
        return e && e.call(t);
      }
      function W(t) {
        var e = t && ((B && t[B]) || t['@@iterator']);
        if ('function' === typeof e) return e;
      }
      (K.prototype.toString = function () {
        return '[Iterator]';
      }),
        (K.KEYS = 0),
        (K.VALUES = 1),
        (K.ENTRIES = 2),
        (K.prototype.inspect = K.prototype.toSource = function () {
          return this.toString();
        }),
        (K.prototype[R] = function () {
          return this;
        });
      var J = Object.prototype.hasOwnProperty;
      function H(t) {
        return (
          !(!Array.isArray(t) && 'string' !== typeof t) ||
          (t &&
            'object' === typeof t &&
            Number.isInteger(t.length) &&
            t.length >= 0 &&
            (0 === t.length
              ? 1 === Object.keys(t).length
              : t.hasOwnProperty(t.length - 1)))
        );
      }
      var V = (function (t) {
          function e(t) {
            return null === t || void 0 === t
              ? tt()
              : j(t)
              ? t.toSeq()
              : (function (t) {
                  var e = nt(t);
                  if (e) return e;
                  if ('object' === typeof t) return new X(t);
                  throw new TypeError(
                    'Expected Array or collection object of values, or keyed object: ' +
                      t
                  );
                })(t);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.toSeq = function () {
              return this;
            }),
            (e.prototype.toString = function () {
              return this.__toString('Seq {', '}');
            }),
            (e.prototype.cacheResult = function () {
              return (
                !this._cache &&
                  this.__iterateUncached &&
                  ((this._cache = this.entrySeq().toArray()),
                  (this.size = this._cache.length)),
                this
              );
            }),
            (e.prototype.__iterate = function (t, e) {
              var r = this._cache;
              if (r) {
                for (var n = r.length, i = 0; i !== n; ) {
                  var o = r[e ? n - ++i : i++];
                  if (!1 === t(o[1], o[0], this)) break;
                }
                return i;
              }
              return this.__iterateUncached(t, e);
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this._cache;
              if (r) {
                var n = r.length,
                  i = 0;
                return new K(function () {
                  if (i === n) return { value: void 0, done: !0 };
                  var o = r[e ? n - ++i : i++];
                  return L(t, o[0], o[1]);
                });
              }
              return this.__iteratorUncached(t, e);
            }),
            e
          );
        })(z),
        F = (function (t) {
          function e(t) {
            return null === t || void 0 === t
              ? tt().toKeyedSeq()
              : d(t)
              ? m(t)
                ? t.toSeq()
                : t.fromEntrySeq()
              : A(t)
              ? t.toSeq()
              : et(t);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.toKeyedSeq = function () {
              return this;
            }),
            e
          );
        })(V),
        G = (function (t) {
          function e(t) {
            return null === t || void 0 === t
              ? tt()
              : d(t)
              ? m(t)
                ? t.entrySeq()
                : t.toIndexedSeq()
              : A(t)
              ? t.toSeq().entrySeq()
              : rt(t);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.of = function () {
              return e(arguments);
            }),
            (e.prototype.toIndexedSeq = function () {
              return this;
            }),
            (e.prototype.toString = function () {
              return this.__toString('Seq [', ']');
            }),
            e
          );
        })(V),
        Y = (function (t) {
          function e(t) {
            return (d(t) && !b(t) ? t : G(t)).toSetSeq();
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.of = function () {
              return e(arguments);
            }),
            (e.prototype.toSetSeq = function () {
              return this;
            }),
            e
          );
        })(V);
      (V.isSeq = M),
        (V.Keyed = F),
        (V.Set = Y),
        (V.Indexed = G),
        (V.prototype[O] = !0);
      var Q = (function (t) {
          function e(t) {
            (this._array = t), (this.size = t.length);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.get = function (t, e) {
              return this.has(t) ? this._array[c(this, t)] : e;
            }),
            (e.prototype.__iterate = function (t, e) {
              for (var r = this._array, n = r.length, i = 0; i !== n; ) {
                var o = e ? n - ++i : i++;
                if (!1 === t(r[o], o, this)) break;
              }
              return i;
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this._array,
                n = r.length,
                i = 0;
              return new K(function () {
                if (i === n) return { value: void 0, done: !0 };
                var o = e ? n - ++i : i++;
                return L(t, o, r[o]);
              });
            }),
            e
          );
        })(G),
        X = (function (t) {
          function e(t) {
            var e = Object.keys(t);
            (this._object = t), (this._keys = e), (this.size = e.length);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.get = function (t, e) {
              return void 0 === e || this.has(t) ? this._object[t] : e;
            }),
            (e.prototype.has = function (t) {
              return J.call(this._object, t);
            }),
            (e.prototype.__iterate = function (t, e) {
              for (
                var r = this._object, n = this._keys, i = n.length, o = 0;
                o !== i;

              ) {
                var u = n[e ? i - ++o : o++];
                if (!1 === t(r[u], u, this)) break;
              }
              return o;
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this._object,
                n = this._keys,
                i = n.length,
                o = 0;
              return new K(function () {
                if (o === i) return { value: void 0, done: !0 };
                var u = n[e ? i - ++o : o++];
                return L(t, u, r[u]);
              });
            }),
            e
          );
        })(F);
      X.prototype[D] = !0;
      var Z,
        $ = (function (t) {
          function e(t) {
            (this._collection = t), (this.size = t.length || t.size);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.__iterateUncached = function (t, e) {
              if (e) return this.cacheResult().__iterate(t, e);
              var r = P(this._collection),
                n = 0;
              if (N(r))
                for (
                  var i;
                  !(i = r.next()).done && !1 !== t(i.value, n++, this);

                );
              return n;
            }),
            (e.prototype.__iteratorUncached = function (t, e) {
              if (e) return this.cacheResult().__iterator(t, e);
              var r = P(this._collection);
              if (!N(r)) return new K(U);
              var n = 0;
              return new K(function () {
                var e = r.next();
                return e.done ? e : L(t, n++, e.value);
              });
            }),
            e
          );
        })(G);
      function tt() {
        return Z || (Z = new Q([]));
      }
      function et(t) {
        var e = Array.isArray(t) ? new Q(t) : T(t) ? new $(t) : void 0;
        if (e) return e.fromEntrySeq();
        if ('object' === typeof t) return new X(t);
        throw new TypeError(
          'Expected Array or collection object of [k, v] entries, or keyed object: ' +
            t
        );
      }
      function rt(t) {
        var e = nt(t);
        if (e) return e;
        throw new TypeError(
          'Expected Array or collection object of values: ' + t
        );
      }
      function nt(t) {
        return H(t) ? new Q(t) : T(t) ? new $(t) : void 0;
      }
      var it = '@@__IMMUTABLE_MAP__@@';
      function ot(t) {
        return Boolean(t && t[it]);
      }
      function ut(t) {
        return ot(t) && x(t);
      }
      function st(t) {
        return Boolean(
          t &&
            'function' === typeof t.equals &&
            'function' === typeof t.hashCode
        );
      }
      function at(t, e) {
        if (t === e || (t !== t && e !== e)) return !0;
        if (!t || !e) return !1;
        if (
          'function' === typeof t.valueOf &&
          'function' === typeof e.valueOf
        ) {
          if ((t = t.valueOf()) === (e = e.valueOf()) || (t !== t && e !== e))
            return !0;
          if (!t || !e) return !1;
        }
        return !!(st(t) && st(e) && t.equals(e));
      }
      var ct =
        'function' === typeof Math.imul && -2 === Math.imul(4294967295, 2)
          ? Math.imul
          : function (t, e) {
              var r = 65535 & (t |= 0),
                n = 65535 & (e |= 0);
              return (
                (r * n + ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) | 0
              );
            };
      function ft(t) {
        return ((t >>> 1) & 1073741824) | (3221225471 & t);
      }
      var ht = Object.prototype.valueOf;
      function pt(t) {
        switch (typeof t) {
          case 'boolean':
            return t ? 1108378657 : 1108378656;
          case 'number':
            return (function (t) {
              if (t !== t || t === 1 / 0) return 0;
              var e = 0 | t;
              e !== t && (e ^= 4294967295 * t);
              for (; t > 4294967295; ) e ^= t /= 4294967295;
              return ft(e);
            })(t);
          case 'string':
            return t.length > wt
              ? (function (t) {
                  var e = zt[t];
                  void 0 === e &&
                    ((e = _t(t)),
                    bt === St && ((bt = 0), (zt = {})),
                    bt++,
                    (zt[t] = e));
                  return e;
                })(t)
              : _t(t);
          case 'object':
          case 'function':
            return null === t
              ? 1108378658
              : 'function' === typeof t.hashCode
              ? ft(t.hashCode(t))
              : (t.valueOf !== ht &&
                  'function' === typeof t.valueOf &&
                  (t = t.valueOf(t)),
                (function (t) {
                  var e;
                  if (dt && void 0 !== (e = yt.get(t))) return e;
                  if (void 0 !== (e = t[mt])) return e;
                  if (!vt) {
                    if (
                      void 0 !==
                      (e = t.propertyIsEnumerable && t.propertyIsEnumerable[mt])
                    )
                      return e;
                    if (
                      void 0 !==
                      (e = (function (t) {
                        if (t && t.nodeType > 0)
                          switch (t.nodeType) {
                            case 1:
                              return t.uniqueID;
                            case 9:
                              return (
                                t.documentElement && t.documentElement.uniqueID
                              );
                          }
                      })(t))
                    )
                      return e;
                  }
                  (e = ++gt), 1073741824 & gt && (gt = 0);
                  if (dt) yt.set(t, e);
                  else {
                    if (void 0 !== lt && !1 === lt(t))
                      throw new Error(
                        'Non-extensible objects are not allowed as keys.'
                      );
                    if (vt)
                      Object.defineProperty(t, mt, {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: e,
                      });
                    else if (
                      void 0 !== t.propertyIsEnumerable &&
                      t.propertyIsEnumerable ===
                        t.constructor.prototype.propertyIsEnumerable
                    )
                      (t.propertyIsEnumerable = function () {
                        return this.constructor.prototype.propertyIsEnumerable.apply(
                          this,
                          arguments
                        );
                      }),
                        (t.propertyIsEnumerable[mt] = e);
                    else {
                      if (void 0 === t.nodeType)
                        throw new Error(
                          'Unable to set a non-enumerable property on object.'
                        );
                      t[mt] = e;
                    }
                  }
                  return e;
                })(t));
          case 'undefined':
            return 1108378659;
          default:
            if ('function' === typeof t.toString) return _t(t.toString());
            throw new Error('Value type ' + typeof t + ' cannot be hashed.');
        }
      }
      function _t(t) {
        for (var e = 0, r = 0; r < t.length; r++)
          e = (31 * e + t.charCodeAt(r)) | 0;
        return ft(e);
      }
      var lt = Object.isExtensible,
        vt = (function () {
          try {
            return Object.defineProperty({}, '@', {}), !0;
          } catch (t) {
            return !1;
          }
        })();
      var yt,
        dt = 'function' === typeof WeakMap;
      dt && (yt = new WeakMap());
      var gt = 0,
        mt = '__immutablehash__';
      'function' === typeof Symbol && (mt = Symbol(mt));
      var wt = 16,
        St = 255,
        bt = 0,
        zt = {},
        It = (function (t) {
          function e(t, e) {
            (this._iter = t), (this._useKeys = e), (this.size = t.size);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.get = function (t, e) {
              return this._iter.get(t, e);
            }),
            (e.prototype.has = function (t) {
              return this._iter.has(t);
            }),
            (e.prototype.valueSeq = function () {
              return this._iter.valueSeq();
            }),
            (e.prototype.reverse = function () {
              var t = this,
                e = At(this, !0);
              return (
                this._useKeys ||
                  (e.valueSeq = function () {
                    return t._iter.toSeq().reverse();
                  }),
                e
              );
            }),
            (e.prototype.map = function (t, e) {
              var r = this,
                n = qt(this, t, e);
              return (
                this._useKeys ||
                  (n.valueSeq = function () {
                    return r._iter.toSeq().map(t, e);
                  }),
                n
              );
            }),
            (e.prototype.__iterate = function (t, e) {
              var r = this;
              return this._iter.__iterate(function (e, n) {
                return t(e, n, r);
              }, e);
            }),
            (e.prototype.__iterator = function (t, e) {
              return this._iter.__iterator(t, e);
            }),
            e
          );
        })(F);
      It.prototype[D] = !0;
      var Et = (function (t) {
          function e(t) {
            (this._iter = t), (this.size = t.size);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.includes = function (t) {
              return this._iter.includes(t);
            }),
            (e.prototype.__iterate = function (t, e) {
              var r = this,
                n = 0;
              return (
                e && a(this),
                this._iter.__iterate(function (i) {
                  return t(i, e ? r.size - ++n : n++, r);
                }, e)
              );
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this,
                n = this._iter.__iterator(1, e),
                i = 0;
              return (
                e && a(this),
                new K(function () {
                  var o = n.next();
                  return o.done ? o : L(t, e ? r.size - ++i : i++, o.value, o);
                })
              );
            }),
            e
          );
        })(G),
        kt = (function (t) {
          function e(t) {
            (this._iter = t), (this.size = t.size);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.has = function (t) {
              return this._iter.includes(t);
            }),
            (e.prototype.__iterate = function (t, e) {
              var r = this;
              return this._iter.__iterate(function (e) {
                return t(e, e, r);
              }, e);
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this._iter.__iterator(1, e);
              return new K(function () {
                var e = r.next();
                return e.done ? e : L(t, e.value, e.value, e);
              });
            }),
            e
          );
        })(Y),
        Ot = (function (t) {
          function e(t) {
            (this._iter = t), (this.size = t.size);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.entrySeq = function () {
              return this._iter.toSeq();
            }),
            (e.prototype.__iterate = function (t, e) {
              var r = this;
              return this._iter.__iterate(function (e) {
                if (e) {
                  Nt(e);
                  var n = d(e);
                  return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
                }
              }, e);
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this._iter.__iterator(1, e);
              return new K(function () {
                for (;;) {
                  var e = r.next();
                  if (e.done) return e;
                  var n = e.value;
                  if (n) {
                    Nt(n);
                    var i = d(n);
                    return L(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
                  }
                }
              });
            }),
            e
          );
        })(F);
      function Mt(t) {
        var e = Wt(t);
        return (
          (e._iter = t),
          (e.size = t.size),
          (e.flip = function () {
            return t;
          }),
          (e.reverse = function () {
            var e = t.reverse.apply(this);
            return (
              (e.flip = function () {
                return t.reverse();
              }),
              e
            );
          }),
          (e.has = function (e) {
            return t.includes(e);
          }),
          (e.includes = function (e) {
            return t.has(e);
          }),
          (e.cacheResult = Jt),
          (e.__iterateUncached = function (e, r) {
            var n = this;
            return t.__iterate(function (t, r) {
              return !1 !== e(r, t, n);
            }, r);
          }),
          (e.__iteratorUncached = function (e, r) {
            if (2 === e) {
              var n = t.__iterator(e, r);
              return new K(function () {
                var t = n.next();
                if (!t.done) {
                  var e = t.value[0];
                  (t.value[0] = t.value[1]), (t.value[1] = e);
                }
                return t;
              });
            }
            return t.__iterator(1 === e ? 0 : 1, r);
          }),
          e
        );
      }
      function qt(t, e, r) {
        var n = Wt(t);
        return (
          (n.size = t.size),
          (n.has = function (e) {
            return t.has(e);
          }),
          (n.get = function (n, i) {
            var u = t.get(n, o);
            return u === o ? i : e.call(r, u, n, t);
          }),
          (n.__iterateUncached = function (n, i) {
            var o = this;
            return t.__iterate(function (t, i, u) {
              return !1 !== n(e.call(r, t, i, u), i, o);
            }, i);
          }),
          (n.__iteratorUncached = function (n, i) {
            var o = t.__iterator(2, i);
            return new K(function () {
              var i = o.next();
              if (i.done) return i;
              var u = i.value,
                s = u[0];
              return L(n, s, e.call(r, u[1], s, t), i);
            });
          }),
          n
        );
      }
      function At(t, e) {
        var r = this,
          n = Wt(t);
        return (
          (n._iter = t),
          (n.size = t.size),
          (n.reverse = function () {
            return t;
          }),
          t.flip &&
            (n.flip = function () {
              var e = Mt(t);
              return (
                (e.reverse = function () {
                  return t.flip();
                }),
                e
              );
            }),
          (n.get = function (r, n) {
            return t.get(e ? r : -1 - r, n);
          }),
          (n.has = function (r) {
            return t.has(e ? r : -1 - r);
          }),
          (n.includes = function (e) {
            return t.includes(e);
          }),
          (n.cacheResult = Jt),
          (n.__iterate = function (r, n) {
            var i = this,
              o = 0;
            return (
              n && a(t),
              t.__iterate(function (t, u) {
                return r(t, e ? u : n ? i.size - ++o : o++, i);
              }, !n)
            );
          }),
          (n.__iterator = function (n, i) {
            var o = 0;
            i && a(t);
            var u = t.__iterator(2, !i);
            return new K(function () {
              var t = u.next();
              if (t.done) return t;
              var s = t.value;
              return L(n, e ? s[0] : i ? r.size - ++o : o++, s[1], t);
            });
          }),
          n
        );
      }
      function jt(t, e, r, n) {
        var i = Wt(t);
        return (
          n &&
            ((i.has = function (n) {
              var i = t.get(n, o);
              return i !== o && !!e.call(r, i, n, t);
            }),
            (i.get = function (n, i) {
              var u = t.get(n, o);
              return u !== o && e.call(r, u, n, t) ? u : i;
            })),
          (i.__iterateUncached = function (i, o) {
            var u = this,
              s = 0;
            return (
              t.__iterate(function (t, o, a) {
                if (e.call(r, t, o, a)) return s++, i(t, n ? o : s - 1, u);
              }, o),
              s
            );
          }),
          (i.__iteratorUncached = function (i, o) {
            var u = t.__iterator(2, o),
              s = 0;
            return new K(function () {
              for (;;) {
                var o = u.next();
                if (o.done) return o;
                var a = o.value,
                  c = a[0],
                  f = a[1];
                if (e.call(r, f, c, t)) return L(i, n ? c : s++, f, o);
              }
            });
          }),
          i
        );
      }
      function Dt(t, e, r, n) {
        var i = t.size;
        if (h(e, r, i)) return t;
        var o = p(e, i),
          u = _(r, i);
        if (o !== o || u !== u) return Dt(t.toSeq().cacheResult(), e, r, n);
        var s,
          a = u - o;
        a === a && (s = a < 0 ? 0 : a);
        var f = Wt(t);
        return (
          (f.size = 0 === s ? s : (t.size && s) || void 0),
          !n &&
            M(t) &&
            s >= 0 &&
            (f.get = function (e, r) {
              return (e = c(this, e)) >= 0 && e < s ? t.get(e + o, r) : r;
            }),
          (f.__iterateUncached = function (e, r) {
            var i = this;
            if (0 === s) return 0;
            if (r) return this.cacheResult().__iterate(e, r);
            var u = 0,
              a = !0,
              c = 0;
            return (
              t.__iterate(function (t, r) {
                if (!a || !(a = u++ < o))
                  return c++, !1 !== e(t, n ? r : c - 1, i) && c !== s;
              }),
              c
            );
          }),
          (f.__iteratorUncached = function (e, r) {
            if (0 !== s && r) return this.cacheResult().__iterator(e, r);
            if (0 === s) return new K(U);
            var i = t.__iterator(e, r),
              u = 0,
              a = 0;
            return new K(function () {
              for (; u++ < o; ) i.next();
              if (++a > s) return { value: void 0, done: !0 };
              var t = i.next();
              return n || 1 === e || t.done
                ? t
                : L(e, a - 1, 0 === e ? void 0 : t.value[1], t);
            });
          }),
          f
        );
      }
      function xt(t, e, r, n) {
        var i = Wt(t);
        return (
          (i.__iterateUncached = function (i, o) {
            var u = this;
            if (o) return this.cacheResult().__iterate(i, o);
            var s = !0,
              a = 0;
            return (
              t.__iterate(function (t, o, c) {
                if (!s || !(s = e.call(r, t, o, c)))
                  return a++, i(t, n ? o : a - 1, u);
              }),
              a
            );
          }),
          (i.__iteratorUncached = function (i, o) {
            var u = this;
            if (o) return this.cacheResult().__iterator(i, o);
            var s = t.__iterator(2, o),
              a = !0,
              c = 0;
            return new K(function () {
              var t, o, f;
              do {
                if ((t = s.next()).done)
                  return n || 1 === i
                    ? t
                    : L(i, c++, 0 === i ? void 0 : t.value[1], t);
                var h = t.value;
                (o = h[0]), (f = h[1]), a && (a = e.call(r, f, o, u));
              } while (a);
              return 2 === i ? t : L(i, o, f, t);
            });
          }),
          i
        );
      }
      function Bt(t, e) {
        var r = m(t),
          n = [t]
            .concat(e)
            .map(function (t) {
              return (
                d(t)
                  ? r && (t = I(t))
                  : (t = r ? et(t) : rt(Array.isArray(t) ? t : [t])),
                t
              );
            })
            .filter(function (t) {
              return 0 !== t.size;
            });
        if (0 === n.length) return t;
        if (1 === n.length) {
          var i = n[0];
          if (i === t || (r && m(i)) || (S(t) && S(i))) return i;
        }
        var o = new Q(n);
        return (
          r ? (o = o.toKeyedSeq()) : S(t) || (o = o.toSetSeq()),
          ((o = o.flatten(!0)).size = n.reduce(function (t, e) {
            if (void 0 !== t) {
              var r = e.size;
              if (void 0 !== r) return t + r;
            }
          }, 0)),
          o
        );
      }
      function Ct(t, e, r) {
        var n = Wt(t);
        return (
          (n.__iterateUncached = function (i, o) {
            if (o) return this.cacheResult().__iterate(i, o);
            var u = 0,
              s = !1;
            return (
              (function t(a, c) {
                a.__iterate(function (o, a) {
                  return (
                    (!e || c < e) && d(o)
                      ? t(o, c + 1)
                      : (u++, !1 === i(o, r ? a : u - 1, n) && (s = !0)),
                    !s
                  );
                }, o);
              })(t, 0),
              u
            );
          }),
          (n.__iteratorUncached = function (n, i) {
            if (i) return this.cacheResult().__iterator(n, i);
            var o = t.__iterator(n, i),
              u = [],
              s = 0;
            return new K(function () {
              for (; o; ) {
                var t = o.next();
                if (!1 === t.done) {
                  var a = t.value;
                  if ((2 === n && (a = a[1]), (e && !(u.length < e)) || !d(a)))
                    return r ? t : L(n, s++, a, t);
                  u.push(o), (o = a.__iterator(n, i));
                } else o = u.pop();
              }
              return { value: void 0, done: !0 };
            });
          }),
          n
        );
      }
      function Rt(t, e, r) {
        e || (e = Ht);
        var n = m(t),
          i = 0,
          o = t
            .toSeq()
            .map(function (e, n) {
              return [n, e, i++, r ? r(e, n, t) : e];
            })
            .valueSeq()
            .toArray();
        return (
          o
            .sort(function (t, r) {
              return e(t[3], r[3]) || t[2] - r[2];
            })
            .forEach(
              n
                ? function (t, e) {
                    o[e].length = 2;
                  }
                : function (t, e) {
                    o[e] = t[1];
                  }
            ),
          n ? F(o) : S(t) ? G(o) : Y(o)
        );
      }
      function Kt(t, e, r) {
        if ((e || (e = Ht), r)) {
          var n = t
            .toSeq()
            .map(function (e, n) {
              return [e, r(e, n, t)];
            })
            .reduce(function (t, r) {
              return Lt(e, t[1], r[1]) ? r : t;
            });
          return n && n[0];
        }
        return t.reduce(function (t, r) {
          return Lt(e, t, r) ? r : t;
        });
      }
      function Lt(t, e, r) {
        var n = t(r, e);
        return (
          (0 === n && r !== e && (void 0 === r || null === r || r !== r)) ||
          n > 0
        );
      }
      function Ut(t, e, r, n) {
        var i = Wt(t),
          o = new Q(r).map(function (t) {
            return t.size;
          });
        return (
          (i.size = n ? o.max() : o.min()),
          (i.__iterate = function (t, e) {
            for (
              var r, n = this.__iterator(1, e), i = 0;
              !(r = n.next()).done && !1 !== t(r.value, i++, this);

            );
            return i;
          }),
          (i.__iteratorUncached = function (t, i) {
            var o = r.map(function (t) {
                return (t = z(t)), P(i ? t.reverse() : t);
              }),
              u = 0,
              s = !1;
            return new K(function () {
              var r;
              return (
                s ||
                  ((r = o.map(function (t) {
                    return t.next();
                  })),
                  (s = n
                    ? r.every(function (t) {
                        return t.done;
                      })
                    : r.some(function (t) {
                        return t.done;
                      }))),
                s
                  ? { value: void 0, done: !0 }
                  : L(
                      t,
                      u++,
                      e.apply(
                        null,
                        r.map(function (t) {
                          return t.value;
                        })
                      )
                    )
              );
            });
          }),
          i
        );
      }
      function Tt(t, e) {
        return t === e ? t : M(t) ? e : t.constructor(e);
      }
      function Nt(t) {
        if (t !== Object(t)) throw new TypeError('Expected [K, V] tuple: ' + t);
      }
      function Pt(t) {
        return m(t) ? I : S(t) ? E : k;
      }
      function Wt(t) {
        return Object.create((m(t) ? F : S(t) ? G : Y).prototype);
      }
      function Jt() {
        return this._iter.cacheResult
          ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
          : V.prototype.cacheResult.call(this);
      }
      function Ht(t, e) {
        return void 0 === t && void 0 === e
          ? 0
          : void 0 === t
          ? 1
          : void 0 === e
          ? -1
          : t > e
          ? 1
          : t < e
          ? -1
          : 0;
      }
      function Vt(t, e) {
        e = e || 0;
        for (
          var r = Math.max(0, t.length - e), n = new Array(r), i = 0;
          i < r;
          i++
        )
          n[i] = t[i + e];
        return n;
      }
      function Ft(t, e) {
        if (!t) throw new Error(e);
      }
      function Gt(t) {
        Ft(t !== 1 / 0, 'Cannot perform this action with an infinite size.');
      }
      function Yt(t) {
        if (H(t) && 'string' !== typeof t) return t;
        if (x(t)) return t.toArray();
        throw new TypeError(
          'Invalid keyPath: expected Ordered Collection or Array: ' + t
        );
      }
      function Qt(t) {
        return (
          t &&
          ('function' !== typeof t.constructor ||
            'Object' === t.constructor.name)
        );
      }
      function Xt(t) {
        return 'object' === typeof t && (j(t) || Array.isArray(t) || Qt(t));
      }
      function Zt(t) {
        try {
          return 'string' === typeof t ? JSON.stringify(t) : String(t);
        } catch (e) {
          return JSON.stringify(t);
        }
      }
      function $t(t, e) {
        return j(t) ? t.has(e) : Xt(t) && J.call(t, e);
      }
      function te(t, e, r) {
        return j(t)
          ? t.get(e, r)
          : $t(t, e)
          ? 'function' === typeof t.get
            ? t.get(e)
            : t[e]
          : r;
      }
      function ee(t) {
        if (Array.isArray(t)) return Vt(t);
        var e = {};
        for (var r in t) J.call(t, r) && (e[r] = t[r]);
        return e;
      }
      function re(t, e) {
        if (!Xt(t))
          throw new TypeError('Cannot update non-data-structure value: ' + t);
        if (j(t)) {
          if (!t.remove)
            throw new TypeError(
              'Cannot update immutable value without .remove() method: ' + t
            );
          return t.remove(e);
        }
        if (!J.call(t, e)) return t;
        var r = ee(t);
        return Array.isArray(r) ? r.splice(e, 1) : delete r[e], r;
      }
      function ne(t, e, r) {
        if (!Xt(t))
          throw new TypeError('Cannot update non-data-structure value: ' + t);
        if (j(t)) {
          if (!t.set)
            throw new TypeError(
              'Cannot update immutable value without .set() method: ' + t
            );
          return t.set(e, r);
        }
        if (J.call(t, e) && r === t[e]) return t;
        var n = ee(t);
        return (n[e] = r), n;
      }
      function ie(t, e, r, n) {
        n || ((n = r), (r = void 0));
        var i = oe(j(t), t, Yt(e), 0, r, n);
        return i === o ? r : i;
      }
      function oe(t, e, r, n, i, u) {
        var s = e === o;
        if (n === r.length) {
          var a = s ? i : e,
            c = u(a);
          return c === a ? e : c;
        }
        if (!s && !Xt(e))
          throw new TypeError(
            'Cannot update within non-data-structure value in path [' +
              r.slice(0, n).map(Zt) +
              ']: ' +
              e
          );
        var f = r[n],
          h = s ? o : te(e, f, o),
          p = oe(h === o ? t : j(h), h, r, n + 1, i, u);
        return p === h
          ? e
          : p === o
          ? re(e, f)
          : ne(s ? (t ? Le() : {}) : e, f, p);
      }
      function ue(t, e, r) {
        return ie(t, e, o, function () {
          return r;
        });
      }
      function se(t, e) {
        return ue(this, t, e);
      }
      function ae(t, e) {
        return ie(t, e, function () {
          return o;
        });
      }
      function ce(t) {
        return ae(this, t);
      }
      function fe(t, e, r, n) {
        return ie(t, [e], r, n);
      }
      function he(t, e, r) {
        return 1 === arguments.length ? t(this) : fe(this, t, e, r);
      }
      function pe(t, e, r) {
        return ie(this, t, e, r);
      }
      function _e() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        return ve(this, t);
      }
      function le(t) {
        for (var e = [], r = arguments.length - 1; r-- > 0; )
          e[r] = arguments[r + 1];
        if ('function' !== typeof t)
          throw new TypeError('Invalid merger function: ' + t);
        return ve(this, e, t);
      }
      function ve(t, e, r) {
        for (var n = [], i = 0; i < e.length; i++) {
          var u = I(e[i]);
          0 !== u.size && n.push(u);
        }
        return 0 === n.length
          ? t
          : 0 !== t.toSeq().size || t.__ownerID || 1 !== n.length
          ? t.withMutations(function (t) {
              for (
                var e = r
                    ? function (e, n) {
                        fe(t, n, o, function (t) {
                          return t === o ? e : r(t, e, n);
                        });
                      }
                    : function (e, r) {
                        t.set(r, e);
                      },
                  i = 0;
                i < n.length;
                i++
              )
                n[i].forEach(e);
            })
          : t.constructor(n[0]);
      }
      function ye(t, e, r) {
        return de(
          t,
          e,
          (function (t) {
            function e(r, n, i) {
              return Xt(r) && Xt(n) ? de(r, [n], e) : t ? t(r, n, i) : n;
            }
            return e;
          })(r)
        );
      }
      function de(t, e, r) {
        if (!Xt(t))
          throw new TypeError(
            'Cannot merge into non-data-structure value: ' + t
          );
        if (j(t))
          return 'function' === typeof r && t.mergeWith
            ? t.mergeWith.apply(t, [r].concat(e))
            : t.merge
            ? t.merge.apply(t, e)
            : t.concat.apply(t, e);
        for (
          var n = Array.isArray(t),
            i = t,
            o = n ? E : I,
            u = n
              ? function (e) {
                  i === t && (i = ee(i)), i.push(e);
                }
              : function (e, n) {
                  var o = J.call(i, n),
                    u = o && r ? r(i[n], e, n) : e;
                  (o && u === i[n]) || (i === t && (i = ee(i)), (i[n] = u));
                },
            s = 0;
          s < e.length;
          s++
        )
          o(e[s]).forEach(u);
        return i;
      }
      function ge() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        return ye(this, t);
      }
      function me(t) {
        for (var e = [], r = arguments.length - 1; r-- > 0; )
          e[r] = arguments[r + 1];
        return ye(this, e, t);
      }
      function we(t) {
        for (var e = [], r = arguments.length - 1; r-- > 0; )
          e[r] = arguments[r + 1];
        return ie(this, t, Le(), function (t) {
          return de(t, e);
        });
      }
      function Se(t) {
        for (var e = [], r = arguments.length - 1; r-- > 0; )
          e[r] = arguments[r + 1];
        return ie(this, t, Le(), function (t) {
          return ye(t, e);
        });
      }
      function be(t) {
        var e = this.asMutable();
        return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
      }
      function ze() {
        return this.__ownerID ? this : this.__ensureOwner(new s());
      }
      function Ie() {
        return this.__ensureOwner();
      }
      function Ee() {
        return this.__altered;
      }
      Et.prototype.cacheResult = It.prototype.cacheResult = kt.prototype.cacheResult = Ot.prototype.cacheResult = Jt;
      var ke = (function (t) {
        function e(e) {
          return null === e || void 0 === e
            ? Le()
            : ot(e) && !x(e)
            ? e
            : Le().withMutations(function (r) {
                var n = t(e);
                Gt(n.size),
                  n.forEach(function (t, e) {
                    return r.set(e, t);
                  });
              });
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return Le().withMutations(function (e) {
              for (var r = 0; r < t.length; r += 2) {
                if (r + 1 >= t.length)
                  throw new Error('Missing value for key: ' + t[r]);
                e.set(t[r], t[r + 1]);
              }
            });
          }),
          (e.prototype.toString = function () {
            return this.__toString('Map {', '}');
          }),
          (e.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e;
          }),
          (e.prototype.set = function (t, e) {
            return Ue(this, t, e);
          }),
          (e.prototype.remove = function (t) {
            return Ue(this, t, o);
          }),
          (e.prototype.deleteAll = function (t) {
            var e = z(t);
            return 0 === e.size
              ? this
              : this.withMutations(function (t) {
                  e.forEach(function (e) {
                    return t.remove(e);
                  });
                });
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._root = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Le();
          }),
          (e.prototype.sort = function (t) {
            return fr(Rt(this, t));
          }),
          (e.prototype.sortBy = function (t, e) {
            return fr(Rt(this, e, t));
          }),
          (e.prototype.map = function (t, e) {
            return this.withMutations(function (r) {
              r.forEach(function (n, i) {
                r.set(i, t.call(e, n, i, r));
              });
            });
          }),
          (e.prototype.__iterator = function (t, e) {
            return new Be(this, t, e);
          }),
          (e.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0;
            return (
              this._root &&
                this._root.iterate(function (e) {
                  return n++, t(e[1], e[0], r);
                }, e),
              n
            );
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Ke(this.size, this._root, t, this.__hash)
              : 0 === this.size
              ? Le()
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          e
        );
      })(I);
      ke.isMap = ot;
      var Oe = ke.prototype;
      (Oe[it] = !0),
        (Oe.delete = Oe.remove),
        (Oe.removeAll = Oe.deleteAll),
        (Oe.setIn = se),
        (Oe.removeIn = Oe.deleteIn = ce),
        (Oe.update = he),
        (Oe.updateIn = pe),
        (Oe.merge = Oe.concat = _e),
        (Oe.mergeWith = le),
        (Oe.mergeDeep = ge),
        (Oe.mergeDeepWith = me),
        (Oe.mergeIn = we),
        (Oe.mergeDeepIn = Se),
        (Oe.withMutations = be),
        (Oe.wasAltered = Ee),
        (Oe.asImmutable = Ie),
        (Oe['@@transducer/init'] = Oe.asMutable = ze),
        (Oe['@@transducer/step'] = function (t, e) {
          return t.set(e[0], e[1]);
        }),
        (Oe['@@transducer/result'] = function (t) {
          return t.asImmutable();
        });
      var Me = function (t, e) {
        (this.ownerID = t), (this.entries = e);
      };
      (Me.prototype.get = function (t, e, r, n) {
        for (var i = this.entries, o = 0, u = i.length; o < u; o++)
          if (at(r, i[o][0])) return i[o][1];
        return n;
      }),
        (Me.prototype.update = function (t, e, r, n, i, a, c) {
          for (
            var f = i === o, h = this.entries, p = 0, _ = h.length;
            p < _ && !at(n, h[p][0]);
            p++
          );
          var l = p < _;
          if (l ? h[p][1] === i : f) return this;
          if ((u(c), (f || !l) && u(a), !f || 1 !== h.length)) {
            if (!l && !f && h.length >= He)
              return (function (t, e, r, n) {
                t || (t = new s());
                for (
                  var i = new De(t, pt(r), [r, n]), o = 0;
                  o < e.length;
                  o++
                ) {
                  var u = e[o];
                  i = i.update(t, 0, void 0, u[0], u[1]);
                }
                return i;
              })(t, h, n, i);
            var v = t && t === this.ownerID,
              y = v ? h : Vt(h);
            return (
              l
                ? f
                  ? p === _ - 1
                    ? y.pop()
                    : (y[p] = y.pop())
                  : (y[p] = [n, i])
                : y.push([n, i]),
              v ? ((this.entries = y), this) : new Me(t, y)
            );
          }
        });
      var qe = function (t, e, r) {
        (this.ownerID = t), (this.bitmap = e), (this.nodes = r);
      };
      (qe.prototype.get = function (t, e, r, n) {
        void 0 === e && (e = pt(r));
        var o = 1 << ((0 === t ? e : e >>> t) & i),
          u = this.bitmap;
        return 0 === (u & o)
          ? n
          : this.nodes[We(u & (o - 1))].get(t + 5, e, r, n);
      }),
        (qe.prototype.update = function (t, e, r, u, s, a, c) {
          void 0 === r && (r = pt(u));
          var f = (0 === e ? r : r >>> e) & i,
            h = 1 << f,
            p = this.bitmap,
            _ = 0 !== (p & h);
          if (!_ && s === o) return this;
          var l = We(p & (h - 1)),
            v = this.nodes,
            y = _ ? v[l] : void 0,
            d = Te(y, t, e + 5, r, u, s, a, c);
          if (d === y) return this;
          if (!_ && d && v.length >= Ve)
            return (function (t, e, r, i, o) {
              for (var u = 0, s = new Array(n), a = 0; 0 !== r; a++, r >>>= 1)
                s[a] = 1 & r ? e[u++] : void 0;
              return (s[i] = o), new Ae(t, u + 1, s);
            })(t, v, p, f, d);
          if (_ && !d && 2 === v.length && Ne(v[1 ^ l])) return v[1 ^ l];
          if (_ && d && 1 === v.length && Ne(d)) return d;
          var g = t && t === this.ownerID,
            m = _ ? (d ? p : p ^ h) : p | h,
            w = _
              ? d
                ? Je(v, l, d, g)
                : (function (t, e, r) {
                    var n = t.length - 1;
                    if (r && e === n) return t.pop(), t;
                    for (var i = new Array(n), o = 0, u = 0; u < n; u++)
                      u === e && (o = 1), (i[u] = t[u + o]);
                    return i;
                  })(v, l, g)
              : (function (t, e, r, n) {
                  var i = t.length + 1;
                  if (n && e + 1 === i) return (t[e] = r), t;
                  for (var o = new Array(i), u = 0, s = 0; s < i; s++)
                    s === e ? ((o[s] = r), (u = -1)) : (o[s] = t[s + u]);
                  return o;
                })(v, l, d, g);
          return g
            ? ((this.bitmap = m), (this.nodes = w), this)
            : new qe(t, m, w);
        });
      var Ae = function (t, e, r) {
        (this.ownerID = t), (this.count = e), (this.nodes = r);
      };
      (Ae.prototype.get = function (t, e, r, n) {
        void 0 === e && (e = pt(r));
        var o = (0 === t ? e : e >>> t) & i,
          u = this.nodes[o];
        return u ? u.get(t + 5, e, r, n) : n;
      }),
        (Ae.prototype.update = function (t, e, r, n, u, s, a) {
          void 0 === r && (r = pt(n));
          var c = (0 === e ? r : r >>> e) & i,
            f = u === o,
            h = this.nodes,
            p = h[c];
          if (f && !p) return this;
          var _ = Te(p, t, e + 5, r, n, u, s, a);
          if (_ === p) return this;
          var l = this.count;
          if (p) {
            if (!_ && --l < Fe)
              return (function (t, e, r, n) {
                for (
                  var i = 0,
                    o = 0,
                    u = new Array(r),
                    s = 0,
                    a = 1,
                    c = e.length;
                  s < c;
                  s++, a <<= 1
                ) {
                  var f = e[s];
                  void 0 !== f && s !== n && ((i |= a), (u[o++] = f));
                }
                return new qe(t, i, u);
              })(t, h, l, c);
          } else l++;
          var v = t && t === this.ownerID,
            y = Je(h, c, _, v);
          return v
            ? ((this.count = l), (this.nodes = y), this)
            : new Ae(t, l, y);
        });
      var je = function (t, e, r) {
        (this.ownerID = t), (this.keyHash = e), (this.entries = r);
      };
      (je.prototype.get = function (t, e, r, n) {
        for (var i = this.entries, o = 0, u = i.length; o < u; o++)
          if (at(r, i[o][0])) return i[o][1];
        return n;
      }),
        (je.prototype.update = function (t, e, r, n, i, s, a) {
          void 0 === r && (r = pt(n));
          var c = i === o;
          if (r !== this.keyHash)
            return c ? this : (u(a), u(s), Pe(this, t, e, r, [n, i]));
          for (
            var f = this.entries, h = 0, p = f.length;
            h < p && !at(n, f[h][0]);
            h++
          );
          var _ = h < p;
          if (_ ? f[h][1] === i : c) return this;
          if ((u(a), (c || !_) && u(s), c && 2 === p))
            return new De(t, this.keyHash, f[1 ^ h]);
          var l = t && t === this.ownerID,
            v = l ? f : Vt(f);
          return (
            _
              ? c
                ? h === p - 1
                  ? v.pop()
                  : (v[h] = v.pop())
                : (v[h] = [n, i])
              : v.push([n, i]),
            l ? ((this.entries = v), this) : new je(t, this.keyHash, v)
          );
        });
      var De = function (t, e, r) {
        (this.ownerID = t), (this.keyHash = e), (this.entry = r);
      };
      (De.prototype.get = function (t, e, r, n) {
        return at(r, this.entry[0]) ? this.entry[1] : n;
      }),
        (De.prototype.update = function (t, e, r, n, i, s, a) {
          var c = i === o,
            f = at(n, this.entry[0]);
          return (f ? i === this.entry[1] : c)
            ? this
            : (u(a),
              c
                ? void u(s)
                : f
                ? t && t === this.ownerID
                  ? ((this.entry[1] = i), this)
                  : new De(t, this.keyHash, [n, i])
                : (u(s), Pe(this, t, e, pt(n), [n, i])));
        }),
        (Me.prototype.iterate = je.prototype.iterate = function (t, e) {
          for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
            if (!1 === t(r[e ? i - n : n])) return !1;
        }),
        (qe.prototype.iterate = Ae.prototype.iterate = function (t, e) {
          for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
            var o = r[e ? i - n : n];
            if (o && !1 === o.iterate(t, e)) return !1;
          }
        }),
        (De.prototype.iterate = function (t, e) {
          return t(this.entry);
        });
      var xe,
        Be = (function (t) {
          function e(t, e, r) {
            (this._type = e),
              (this._reverse = r),
              (this._stack = t._root && Re(t._root));
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.next = function () {
              for (var t = this._type, e = this._stack; e; ) {
                var r = e.node,
                  n = e.index++,
                  i = void 0;
                if (r.entry) {
                  if (0 === n) return Ce(t, r.entry);
                } else if (r.entries) {
                  if (n <= (i = r.entries.length - 1))
                    return Ce(t, r.entries[this._reverse ? i - n : n]);
                } else if (n <= (i = r.nodes.length - 1)) {
                  var o = r.nodes[this._reverse ? i - n : n];
                  if (o) {
                    if (o.entry) return Ce(t, o.entry);
                    e = this._stack = Re(o, e);
                  }
                  continue;
                }
                e = this._stack = this._stack.__prev;
              }
              return { value: void 0, done: !0 };
            }),
            e
          );
        })(K);
      function Ce(t, e) {
        return L(t, e[0], e[1]);
      }
      function Re(t, e) {
        return { node: t, index: 0, __prev: e };
      }
      function Ke(t, e, r, n) {
        var i = Object.create(Oe);
        return (
          (i.size = t),
          (i._root = e),
          (i.__ownerID = r),
          (i.__hash = n),
          (i.__altered = !1),
          i
        );
      }
      function Le() {
        return xe || (xe = Ke(0));
      }
      function Ue(t, e, r) {
        var n, i;
        if (t._root) {
          var u = { value: !1 },
            s = { value: !1 };
          if (((n = Te(t._root, t.__ownerID, 0, void 0, e, r, u, s)), !s.value))
            return t;
          i = t.size + (u.value ? (r === o ? -1 : 1) : 0);
        } else {
          if (r === o) return t;
          (i = 1), (n = new Me(t.__ownerID, [[e, r]]));
        }
        return t.__ownerID
          ? ((t.size = i),
            (t._root = n),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : n
          ? Ke(i, n)
          : Le();
      }
      function Te(t, e, r, n, i, s, a, c) {
        return t
          ? t.update(e, r, n, i, s, a, c)
          : s === o
          ? t
          : (u(c), u(a), new De(e, n, [i, s]));
      }
      function Ne(t) {
        return t.constructor === De || t.constructor === je;
      }
      function Pe(t, e, r, n, o) {
        if (t.keyHash === n) return new je(e, n, [t.entry, o]);
        var u,
          s = (0 === r ? t.keyHash : t.keyHash >>> r) & i,
          a = (0 === r ? n : n >>> r) & i,
          c =
            s === a
              ? [Pe(t, e, r + 5, n, o)]
              : ((u = new De(e, n, o)), s < a ? [t, u] : [u, t]);
        return new qe(e, (1 << s) | (1 << a), c);
      }
      function We(t) {
        return (
          (t =
            ((t =
              (858993459 & (t -= (t >> 1) & 1431655765)) +
              ((t >> 2) & 858993459)) +
              (t >> 4)) &
            252645135),
          (t += t >> 8),
          127 & (t += t >> 16)
        );
      }
      function Je(t, e, r, n) {
        var i = n ? t : Vt(t);
        return (i[e] = r), i;
      }
      var He = 8,
        Ve = 16,
        Fe = 8,
        Ge = '@@__IMMUTABLE_LIST__@@';
      function Ye(t) {
        return Boolean(t && t[Ge]);
      }
      var Qe = (function (t) {
        function e(e) {
          var r = nr();
          if (null === e || void 0 === e) return r;
          if (Ye(e)) return e;
          var i = t(e),
            o = i.size;
          return 0 === o
            ? r
            : (Gt(o),
              o > 0 && o < n
                ? rr(0, o, 5, null, new Ze(i.toArray()))
                : r.withMutations(function (t) {
                    t.setSize(o),
                      i.forEach(function (e, r) {
                        return t.set(r, e);
                      });
                  }));
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments);
          }),
          (e.prototype.toString = function () {
            return this.__toString('List [', ']');
          }),
          (e.prototype.get = function (t, e) {
            if ((t = c(this, t)) >= 0 && t < this.size) {
              var r = ur(this, (t += this._origin));
              return r && r.array[t & i];
            }
            return e;
          }),
          (e.prototype.set = function (t, e) {
            return (function (t, e, r) {
              if ((e = c(t, e)) !== e) return t;
              if (e >= t.size || e < 0)
                return t.withMutations(function (t) {
                  e < 0 ? sr(t, e).set(0, r) : sr(t, 0, e + 1).set(e, r);
                });
              e += t._origin;
              var n = t._tail,
                i = t._root,
                o = { value: !1 };
              e >= ar(t._capacity)
                ? (n = ir(n, t.__ownerID, 0, e, r, o))
                : (i = ir(i, t.__ownerID, t._level, e, r, o));
              if (!o.value) return t;
              if (t.__ownerID)
                return (
                  (t._root = i),
                  (t._tail = n),
                  (t.__hash = void 0),
                  (t.__altered = !0),
                  t
                );
              return rr(t._origin, t._capacity, t._level, i, n);
            })(this, t, e);
          }),
          (e.prototype.remove = function (t) {
            return this.has(t)
              ? 0 === t
                ? this.shift()
                : t === this.size - 1
                ? this.pop()
                : this.splice(t, 1)
              : this;
          }),
          (e.prototype.insert = function (t, e) {
            return this.splice(t, 0, e);
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = this._origin = this._capacity = 0),
                (this._level = 5),
                (this._root = this._tail = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : nr();
          }),
          (e.prototype.push = function () {
            var t = arguments,
              e = this.size;
            return this.withMutations(function (r) {
              sr(r, 0, e + t.length);
              for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
            });
          }),
          (e.prototype.pop = function () {
            return sr(this, 0, -1);
          }),
          (e.prototype.unshift = function () {
            var t = arguments;
            return this.withMutations(function (e) {
              sr(e, -t.length);
              for (var r = 0; r < t.length; r++) e.set(r, t[r]);
            });
          }),
          (e.prototype.shift = function () {
            return sr(this, 1);
          }),
          (e.prototype.concat = function () {
            for (var e = arguments, r = [], n = 0; n < arguments.length; n++) {
              var i = e[n],
                o = t('string' !== typeof i && T(i) ? i : [i]);
              0 !== o.size && r.push(o);
            }
            return 0 === r.length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== r.length
              ? this.withMutations(function (t) {
                  r.forEach(function (e) {
                    return e.forEach(function (e) {
                      return t.push(e);
                    });
                  });
                })
              : this.constructor(r[0]);
          }),
          (e.prototype.setSize = function (t) {
            return sr(this, 0, t);
          }),
          (e.prototype.map = function (t, e) {
            var r = this;
            return this.withMutations(function (n) {
              for (var i = 0; i < r.size; i++)
                n.set(i, t.call(e, n.get(i), i, n));
            });
          }),
          (e.prototype.slice = function (t, e) {
            var r = this.size;
            return h(t, e, r) ? this : sr(this, p(t, r), _(e, r));
          }),
          (e.prototype.__iterator = function (t, e) {
            var r = e ? this.size : 0,
              n = er(this, e);
            return new K(function () {
              var i = n();
              return i === tr
                ? { value: void 0, done: !0 }
                : L(t, e ? --r : r++, i);
            });
          }),
          (e.prototype.__iterate = function (t, e) {
            for (
              var r, n = e ? this.size : 0, i = er(this, e);
              (r = i()) !== tr && !1 !== t(r, e ? --n : n++, this);

            );
            return n;
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? rr(
                  this._origin,
                  this._capacity,
                  this._level,
                  this._root,
                  this._tail,
                  t,
                  this.__hash
                )
              : 0 === this.size
              ? nr()
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          e
        );
      })(E);
      Qe.isList = Ye;
      var Xe = Qe.prototype;
      (Xe[Ge] = !0),
        (Xe.delete = Xe.remove),
        (Xe.merge = Xe.concat),
        (Xe.setIn = se),
        (Xe.deleteIn = Xe.removeIn = ce),
        (Xe.update = he),
        (Xe.updateIn = pe),
        (Xe.mergeIn = we),
        (Xe.mergeDeepIn = Se),
        (Xe.withMutations = be),
        (Xe.wasAltered = Ee),
        (Xe.asImmutable = Ie),
        (Xe['@@transducer/init'] = Xe.asMutable = ze),
        (Xe['@@transducer/step'] = function (t, e) {
          return t.push(e);
        }),
        (Xe['@@transducer/result'] = function (t) {
          return t.asImmutable();
        });
      var Ze = function (t, e) {
        (this.array = t), (this.ownerID = e);
      };
      (Ze.prototype.removeBefore = function (t, e, r) {
        if (r === e ? 1 << e : 0 === this.array.length) return this;
        var n = (r >>> e) & i;
        if (n >= this.array.length) return new Ze([], t);
        var o,
          u = 0 === n;
        if (e > 0) {
          var s = this.array[n];
          if ((o = s && s.removeBefore(t, e - 5, r)) === s && u) return this;
        }
        if (u && !o) return this;
        var a = or(this, t);
        if (!u) for (var c = 0; c < n; c++) a.array[c] = void 0;
        return o && (a.array[n] = o), a;
      }),
        (Ze.prototype.removeAfter = function (t, e, r) {
          if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
          var n,
            o = ((r - 1) >>> e) & i;
          if (o >= this.array.length) return this;
          if (e > 0) {
            var u = this.array[o];
            if (
              (n = u && u.removeAfter(t, e - 5, r)) === u &&
              o === this.array.length - 1
            )
              return this;
          }
          var s = or(this, t);
          return s.array.splice(o + 1), n && (s.array[o] = n), s;
        });
      var $e,
        tr = {};
      function er(t, e) {
        var r = t._origin,
          i = t._capacity,
          o = ar(i),
          u = t._tail;
        return s(t._root, t._level, 0);
        function s(t, a, c) {
          return 0 === a
            ? (function (t, s) {
                var a = s === o ? u && u.array : t && t.array,
                  c = s > r ? 0 : r - s,
                  f = i - s;
                f > n && (f = n);
                return function () {
                  if (c === f) return tr;
                  var t = e ? --f : c++;
                  return a && a[t];
                };
              })(t, c)
            : (function (t, o, u) {
                var a,
                  c = t && t.array,
                  f = u > r ? 0 : (r - u) >> o,
                  h = 1 + ((i - u) >> o);
                h > n && (h = n);
                return function () {
                  for (;;) {
                    if (a) {
                      var t = a();
                      if (t !== tr) return t;
                      a = null;
                    }
                    if (f === h) return tr;
                    var r = e ? --h : f++;
                    a = s(c && c[r], o - 5, u + (r << o));
                  }
                };
              })(t, a, c);
        }
      }
      function rr(t, e, r, n, i, o, u) {
        var s = Object.create(Xe);
        return (
          (s.size = e - t),
          (s._origin = t),
          (s._capacity = e),
          (s._level = r),
          (s._root = n),
          (s._tail = i),
          (s.__ownerID = o),
          (s.__hash = u),
          (s.__altered = !1),
          s
        );
      }
      function nr() {
        return $e || ($e = rr(0, 0, 5));
      }
      function ir(t, e, r, n, o, s) {
        var a,
          c = (n >>> r) & i,
          f = t && c < t.array.length;
        if (!f && void 0 === o) return t;
        if (r > 0) {
          var h = t && t.array[c],
            p = ir(h, e, r - 5, n, o, s);
          return p === h ? t : (((a = or(t, e)).array[c] = p), a);
        }
        return f && t.array[c] === o
          ? t
          : (s && u(s),
            (a = or(t, e)),
            void 0 === o && c === a.array.length - 1
              ? a.array.pop()
              : (a.array[c] = o),
            a);
      }
      function or(t, e) {
        return e && t && e === t.ownerID
          ? t
          : new Ze(t ? t.array.slice() : [], e);
      }
      function ur(t, e) {
        if (e >= ar(t._capacity)) return t._tail;
        if (e < 1 << (t._level + 5)) {
          for (var r = t._root, n = t._level; r && n > 0; )
            (r = r.array[(e >>> n) & i]), (n -= 5);
          return r;
        }
      }
      function sr(t, e, r) {
        void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
        var n = t.__ownerID || new s(),
          o = t._origin,
          u = t._capacity,
          a = o + e,
          c = void 0 === r ? u : r < 0 ? u + r : o + r;
        if (a === o && c === u) return t;
        if (a >= c) return t.clear();
        for (var f = t._level, h = t._root, p = 0; a + p < 0; )
          (h = new Ze(h && h.array.length ? [void 0, h] : [], n)),
            (p += 1 << (f += 5));
        p && ((a += p), (o += p), (c += p), (u += p));
        for (var _ = ar(u), l = ar(c); l >= 1 << (f + 5); )
          (h = new Ze(h && h.array.length ? [h] : [], n)), (f += 5);
        var v = t._tail,
          y = l < _ ? ur(t, c - 1) : l > _ ? new Ze([], n) : v;
        if (v && l > _ && a < u && v.array.length) {
          for (var d = (h = or(h, n)), g = f; g > 5; g -= 5) {
            var m = (_ >>> g) & i;
            d = d.array[m] = or(d.array[m], n);
          }
          d.array[(_ >>> 5) & i] = v;
        }
        if ((c < u && (y = y && y.removeAfter(n, 0, c)), a >= l))
          (a -= l),
            (c -= l),
            (f = 5),
            (h = null),
            (y = y && y.removeBefore(n, 0, a));
        else if (a > o || l < _) {
          for (p = 0; h; ) {
            var w = (a >>> f) & i;
            if ((w !== l >>> f) & i) break;
            w && (p += (1 << f) * w), (f -= 5), (h = h.array[w]);
          }
          h && a > o && (h = h.removeBefore(n, f, a - p)),
            h && l < _ && (h = h.removeAfter(n, f, l - p)),
            p && ((a -= p), (c -= p));
        }
        return t.__ownerID
          ? ((t.size = c - a),
            (t._origin = a),
            (t._capacity = c),
            (t._level = f),
            (t._root = h),
            (t._tail = y),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : rr(a, c, f, h, y);
      }
      function ar(t) {
        return t < n ? 0 : ((t - 1) >>> 5) << 5;
      }
      var cr,
        fr = (function (t) {
          function e(t) {
            return null === t || void 0 === t
              ? pr()
              : ut(t)
              ? t
              : pr().withMutations(function (e) {
                  var r = I(t);
                  Gt(r.size),
                    r.forEach(function (t, r) {
                      return e.set(r, t);
                    });
                });
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.of = function () {
              return this(arguments);
            }),
            (e.prototype.toString = function () {
              return this.__toString('OrderedMap {', '}');
            }),
            (e.prototype.get = function (t, e) {
              var r = this._map.get(t);
              return void 0 !== r ? this._list.get(r)[1] : e;
            }),
            (e.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
                : pr();
            }),
            (e.prototype.set = function (t, e) {
              return _r(this, t, e);
            }),
            (e.prototype.remove = function (t) {
              return _r(this, t, o);
            }),
            (e.prototype.wasAltered = function () {
              return this._map.wasAltered() || this._list.wasAltered();
            }),
            (e.prototype.__iterate = function (t, e) {
              var r = this;
              return this._list.__iterate(function (e) {
                return e && t(e[1], e[0], r);
              }, e);
            }),
            (e.prototype.__iterator = function (t, e) {
              return this._list.fromEntrySeq().__iterator(t, e);
            }),
            (e.prototype.__ensureOwner = function (t) {
              if (t === this.__ownerID) return this;
              var e = this._map.__ensureOwner(t),
                r = this._list.__ensureOwner(t);
              return t
                ? hr(e, r, t, this.__hash)
                : 0 === this.size
                ? pr()
                : ((this.__ownerID = t),
                  (this._map = e),
                  (this._list = r),
                  this);
            }),
            e
          );
        })(ke);
      function hr(t, e, r, n) {
        var i = Object.create(fr.prototype);
        return (
          (i.size = t ? t.size : 0),
          (i._map = t),
          (i._list = e),
          (i.__ownerID = r),
          (i.__hash = n),
          i
        );
      }
      function pr() {
        return cr || (cr = hr(Le(), nr()));
      }
      function _r(t, e, r) {
        var i,
          u,
          s = t._map,
          a = t._list,
          c = s.get(e),
          f = void 0 !== c;
        if (r === o) {
          if (!f) return t;
          a.size >= n && a.size >= 2 * s.size
            ? ((i = (u = a.filter(function (t, e) {
                return void 0 !== t && c !== e;
              }))
                .toKeyedSeq()
                .map(function (t) {
                  return t[0];
                })
                .flip()
                .toMap()),
              t.__ownerID && (i.__ownerID = u.__ownerID = t.__ownerID))
            : ((i = s.remove(e)),
              (u = c === a.size - 1 ? a.pop() : a.set(c, void 0)));
        } else if (f) {
          if (r === a.get(c)[1]) return t;
          (i = s), (u = a.set(c, [e, r]));
        } else (i = s.set(e, a.size)), (u = a.set(a.size, [e, r]));
        return t.__ownerID
          ? ((t.size = i.size),
            (t._map = i),
            (t._list = u),
            (t.__hash = void 0),
            t)
          : hr(i, u);
      }
      (fr.isOrderedMap = ut),
        (fr.prototype[D] = !0),
        (fr.prototype.delete = fr.prototype.remove);
      var lr = '@@__IMMUTABLE_STACK__@@';
      function vr(t) {
        return Boolean(t && t[lr]);
      }
      var yr = (function (t) {
        function e(t) {
          return null === t || void 0 === t
            ? wr()
            : vr(t)
            ? t
            : wr().pushAll(t);
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments);
          }),
          (e.prototype.toString = function () {
            return this.__toString('Stack [', ']');
          }),
          (e.prototype.get = function (t, e) {
            var r = this._head;
            for (t = c(this, t); r && t--; ) r = r.next;
            return r ? r.value : e;
          }),
          (e.prototype.peek = function () {
            return this._head && this._head.value;
          }),
          (e.prototype.push = function () {
            var t = arguments;
            if (0 === arguments.length) return this;
            for (
              var e = this.size + arguments.length,
                r = this._head,
                n = arguments.length - 1;
              n >= 0;
              n--
            )
              r = { value: t[n], next: r };
            return this.__ownerID
              ? ((this.size = e),
                (this._head = r),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : mr(e, r);
          }),
          (e.prototype.pushAll = function (e) {
            if (0 === (e = t(e)).size) return this;
            if (0 === this.size && vr(e)) return e;
            Gt(e.size);
            var r = this.size,
              n = this._head;
            return (
              e.__iterate(function (t) {
                r++, (n = { value: t, next: n });
              }, !0),
              this.__ownerID
                ? ((this.size = r),
                  (this._head = n),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : mr(r, n)
            );
          }),
          (e.prototype.pop = function () {
            return this.slice(1);
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._head = void 0),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : wr();
          }),
          (e.prototype.slice = function (e, r) {
            if (h(e, r, this.size)) return this;
            var n = p(e, this.size);
            if (_(r, this.size) !== this.size)
              return t.prototype.slice.call(this, e, r);
            for (var i = this.size - n, o = this._head; n--; ) o = o.next;
            return this.__ownerID
              ? ((this.size = i),
                (this._head = o),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : mr(i, o);
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? mr(this.size, this._head, t, this.__hash)
              : 0 === this.size
              ? wr()
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          (e.prototype.__iterate = function (t, e) {
            var r = this;
            if (e)
              return new Q(this.toArray()).__iterate(function (e, n) {
                return t(e, n, r);
              }, e);
            for (var n = 0, i = this._head; i && !1 !== t(i.value, n++, this); )
              i = i.next;
            return n;
          }),
          (e.prototype.__iterator = function (t, e) {
            if (e) return new Q(this.toArray()).__iterator(t, e);
            var r = 0,
              n = this._head;
            return new K(function () {
              if (n) {
                var e = n.value;
                return (n = n.next), L(t, r++, e);
              }
              return { value: void 0, done: !0 };
            });
          }),
          e
        );
      })(E);
      yr.isStack = vr;
      var dr,
        gr = yr.prototype;
      function mr(t, e, r, n) {
        var i = Object.create(gr);
        return (
          (i.size = t),
          (i._head = e),
          (i.__ownerID = r),
          (i.__hash = n),
          (i.__altered = !1),
          i
        );
      }
      function wr() {
        return dr || (dr = mr(0));
      }
      (gr[lr] = !0),
        (gr.shift = gr.pop),
        (gr.unshift = gr.push),
        (gr.unshiftAll = gr.pushAll),
        (gr.withMutations = be),
        (gr.wasAltered = Ee),
        (gr.asImmutable = Ie),
        (gr['@@transducer/init'] = gr.asMutable = ze),
        (gr['@@transducer/step'] = function (t, e) {
          return t.unshift(e);
        }),
        (gr['@@transducer/result'] = function (t) {
          return t.asImmutable();
        });
      var Sr = '@@__IMMUTABLE_SET__@@';
      function br(t) {
        return Boolean(t && t[Sr]);
      }
      function zr(t) {
        return br(t) && x(t);
      }
      function Ir(t, e) {
        if (t === e) return !0;
        if (
          !d(e) ||
          (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
          (void 0 !== t.__hash &&
            void 0 !== e.__hash &&
            t.__hash !== e.__hash) ||
          m(t) !== m(e) ||
          S(t) !== S(e) ||
          x(t) !== x(e)
        )
          return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var r = !b(t);
        if (x(t)) {
          var n = t.entries();
          return (
            e.every(function (t, e) {
              var i = n.next().value;
              return i && at(i[1], t) && (r || at(i[0], e));
            }) && n.next().done
          );
        }
        var i = !1;
        if (void 0 === t.size)
          if (void 0 === e.size)
            'function' === typeof t.cacheResult && t.cacheResult();
          else {
            i = !0;
            var u = t;
            (t = e), (e = u);
          }
        var s = !0,
          a = e.__iterate(function (e, n) {
            if (r ? !t.has(e) : i ? !at(e, t.get(n, o)) : !at(t.get(n, o), e))
              return (s = !1), !1;
          });
        return s && t.size === a;
      }
      function Er(t, e) {
        var r = function (r) {
          t.prototype[r] = e[r];
        };
        return (
          Object.keys(e).forEach(r),
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(e).forEach(r),
          t
        );
      }
      function kr(t) {
        if (!t || 'object' !== typeof t) return t;
        if (!d(t)) {
          if (!Xt(t)) return t;
          t = V(t);
        }
        if (m(t)) {
          var e = {};
          return (
            t.__iterate(function (t, r) {
              e[r] = kr(t);
            }),
            e
          );
        }
        var r = [];
        return (
          t.__iterate(function (t) {
            r.push(kr(t));
          }),
          r
        );
      }
      var Or = (function (t) {
        function e(e) {
          return null === e || void 0 === e
            ? Dr()
            : br(e) && !x(e)
            ? e
            : Dr().withMutations(function (r) {
                var n = t(e);
                Gt(n.size),
                  n.forEach(function (t) {
                    return r.add(t);
                  });
              });
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments);
          }),
          (e.fromKeys = function (t) {
            return this(I(t).keySeq());
          }),
          (e.intersect = function (t) {
            return (t = z(t).toArray()).length
              ? qr.intersect.apply(e(t.pop()), t)
              : Dr();
          }),
          (e.union = function (t) {
            return (t = z(t).toArray()).length
              ? qr.union.apply(e(t.pop()), t)
              : Dr();
          }),
          (e.prototype.toString = function () {
            return this.__toString('Set {', '}');
          }),
          (e.prototype.has = function (t) {
            return this._map.has(t);
          }),
          (e.prototype.add = function (t) {
            return Ar(this, this._map.set(t, t));
          }),
          (e.prototype.remove = function (t) {
            return Ar(this, this._map.remove(t));
          }),
          (e.prototype.clear = function () {
            return Ar(this, this._map.clear());
          }),
          (e.prototype.map = function (t, e) {
            var r = this,
              n = [],
              i = [];
            return (
              this.forEach(function (o) {
                var u = t.call(e, o, o, r);
                u !== o && (n.push(o), i.push(u));
              }),
              this.withMutations(function (t) {
                n.forEach(function (e) {
                  return t.remove(e);
                }),
                  i.forEach(function (e) {
                    return t.add(e);
                  });
              })
            );
          }),
          (e.prototype.union = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return 0 ===
              (e = e.filter(function (t) {
                return 0 !== t.size;
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== e.length
              ? this.withMutations(function (r) {
                  for (var n = 0; n < e.length; n++)
                    t(e[n]).forEach(function (t) {
                      return r.add(t);
                    });
                })
              : this.constructor(e[0]);
          }),
          (e.prototype.intersect = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            if (0 === e.length) return this;
            e = e.map(function (e) {
              return t(e);
            });
            var n = [];
            return (
              this.forEach(function (t) {
                e.every(function (e) {
                  return e.includes(t);
                }) || n.push(t);
              }),
              this.withMutations(function (t) {
                n.forEach(function (e) {
                  t.remove(e);
                });
              })
            );
          }),
          (e.prototype.subtract = function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            if (0 === e.length) return this;
            e = e.map(function (e) {
              return t(e);
            });
            var n = [];
            return (
              this.forEach(function (t) {
                e.some(function (e) {
                  return e.includes(t);
                }) && n.push(t);
              }),
              this.withMutations(function (t) {
                n.forEach(function (e) {
                  t.remove(e);
                });
              })
            );
          }),
          (e.prototype.sort = function (t) {
            return Qr(Rt(this, t));
          }),
          (e.prototype.sortBy = function (t, e) {
            return Qr(Rt(this, e, t));
          }),
          (e.prototype.wasAltered = function () {
            return this._map.wasAltered();
          }),
          (e.prototype.__iterate = function (t, e) {
            var r = this;
            return this._map.__iterate(function (e) {
              return t(e, e, r);
            }, e);
          }),
          (e.prototype.__iterator = function (t, e) {
            return this._map.__iterator(t, e);
          }),
          (e.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t);
            return t
              ? this.__make(e, t)
              : 0 === this.size
              ? this.__empty()
              : ((this.__ownerID = t), (this._map = e), this);
          }),
          e
        );
      })(k);
      Or.isSet = br;
      var Mr,
        qr = Or.prototype;
      function Ar(t, e) {
        return t.__ownerID
          ? ((t.size = e.size), (t._map = e), t)
          : e === t._map
          ? t
          : 0 === e.size
          ? t.__empty()
          : t.__make(e);
      }
      function jr(t, e) {
        var r = Object.create(qr);
        return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
      }
      function Dr() {
        return Mr || (Mr = jr(Le()));
      }
      (qr[Sr] = !0),
        (qr.delete = qr.remove),
        (qr.merge = qr.concat = qr.union),
        (qr.withMutations = be),
        (qr.asImmutable = Ie),
        (qr['@@transducer/init'] = qr.asMutable = ze),
        (qr['@@transducer/step'] = function (t, e) {
          return t.add(e);
        }),
        (qr['@@transducer/result'] = function (t) {
          return t.asImmutable();
        }),
        (qr.__empty = Dr),
        (qr.__make = jr);
      var xr,
        Br = (function (t) {
          function e(t, r, n) {
            if (!(this instanceof e)) return new e(t, r, n);
            if (
              (Ft(0 !== n, 'Cannot step a Range by 0'),
              (t = t || 0),
              void 0 === r && (r = 1 / 0),
              (n = void 0 === n ? 1 : Math.abs(n)),
              r < t && (n = -n),
              (this._start = t),
              (this._end = r),
              (this._step = n),
              (this.size = Math.max(0, Math.ceil((r - t) / n - 1) + 1)),
              0 === this.size)
            ) {
              if (xr) return xr;
              xr = this;
            }
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.toString = function () {
              return 0 === this.size
                ? 'Range []'
                : 'Range [ ' +
                    this._start +
                    '...' +
                    this._end +
                    (1 !== this._step ? ' by ' + this._step : '') +
                    ' ]';
            }),
            (e.prototype.get = function (t, e) {
              return this.has(t) ? this._start + c(this, t) * this._step : e;
            }),
            (e.prototype.includes = function (t) {
              var e = (t - this._start) / this._step;
              return e >= 0 && e < this.size && e === Math.floor(e);
            }),
            (e.prototype.slice = function (t, r) {
              return h(t, r, this.size)
                ? this
                : ((t = p(t, this.size)),
                  (r = _(r, this.size)) <= t
                    ? new e(0, 0)
                    : new e(
                        this.get(t, this._end),
                        this.get(r, this._end),
                        this._step
                      ));
            }),
            (e.prototype.indexOf = function (t) {
              var e = t - this._start;
              if (e % this._step === 0) {
                var r = e / this._step;
                if (r >= 0 && r < this.size) return r;
              }
              return -1;
            }),
            (e.prototype.lastIndexOf = function (t) {
              return this.indexOf(t);
            }),
            (e.prototype.__iterate = function (t, e) {
              for (
                var r = this.size,
                  n = this._step,
                  i = e ? this._start + (r - 1) * n : this._start,
                  o = 0;
                o !== r && !1 !== t(i, e ? r - ++o : o++, this);

              )
                i += e ? -n : n;
              return o;
            }),
            (e.prototype.__iterator = function (t, e) {
              var r = this.size,
                n = this._step,
                i = e ? this._start + (r - 1) * n : this._start,
                o = 0;
              return new K(function () {
                if (o === r) return { value: void 0, done: !0 };
                var u = i;
                return (i += e ? -n : n), L(t, e ? r - ++o : o++, u);
              });
            }),
            (e.prototype.equals = function (t) {
              return t instanceof e
                ? this._start === t._start &&
                    this._end === t._end &&
                    this._step === t._step
                : Ir(this, t);
            }),
            e
          );
        })(G);
      function Cr(t, e, r) {
        for (var n = Yt(e), i = 0; i !== n.length; )
          if ((t = te(t, n[i++], o)) === o) return r;
        return t;
      }
      function Rr(t, e) {
        return Cr(this, t, e);
      }
      function Kr(t, e) {
        return Cr(t, e, o) !== o;
      }
      function Lr() {
        Gt(this.size);
        var t = {};
        return (
          this.__iterate(function (e, r) {
            t[r] = e;
          }),
          t
        );
      }
      (z.isIterable = d),
        (z.isKeyed = m),
        (z.isIndexed = S),
        (z.isAssociative = b),
        (z.isOrdered = x),
        (z.Iterator = K),
        Er(z, {
          toArray: function () {
            Gt(this.size);
            var t = new Array(this.size || 0),
              e = m(this),
              r = 0;
            return (
              this.__iterate(function (n, i) {
                t[r++] = e ? [i, n] : n;
              }),
              t
            );
          },
          toIndexedSeq: function () {
            return new Et(this);
          },
          toJS: function () {
            return kr(this);
          },
          toKeyedSeq: function () {
            return new It(this, !0);
          },
          toMap: function () {
            return ke(this.toKeyedSeq());
          },
          toObject: Lr,
          toOrderedMap: function () {
            return fr(this.toKeyedSeq());
          },
          toOrderedSet: function () {
            return Qr(m(this) ? this.valueSeq() : this);
          },
          toSet: function () {
            return Or(m(this) ? this.valueSeq() : this);
          },
          toSetSeq: function () {
            return new kt(this);
          },
          toSeq: function () {
            return S(this)
              ? this.toIndexedSeq()
              : m(this)
              ? this.toKeyedSeq()
              : this.toSetSeq();
          },
          toStack: function () {
            return yr(m(this) ? this.valueSeq() : this);
          },
          toList: function () {
            return Qe(m(this) ? this.valueSeq() : this);
          },
          toString: function () {
            return '[Collection]';
          },
          __toString: function (t, e) {
            return 0 === this.size
              ? t + e
              : t +
                  ' ' +
                  this.toSeq().map(this.__toStringMapper).join(', ') +
                  ' ' +
                  e;
          },
          concat: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return Tt(this, Bt(this, t));
          },
          includes: function (t) {
            return this.some(function (e) {
              return at(e, t);
            });
          },
          entries: function () {
            return this.__iterator(2);
          },
          every: function (t, e) {
            Gt(this.size);
            var r = !0;
            return (
              this.__iterate(function (n, i, o) {
                if (!t.call(e, n, i, o)) return (r = !1), !1;
              }),
              r
            );
          },
          filter: function (t, e) {
            return Tt(this, jt(this, t, e, !0));
          },
          find: function (t, e, r) {
            var n = this.findEntry(t, e);
            return n ? n[1] : r;
          },
          forEach: function (t, e) {
            return Gt(this.size), this.__iterate(e ? t.bind(e) : t);
          },
          join: function (t) {
            Gt(this.size), (t = void 0 !== t ? '' + t : ',');
            var e = '',
              r = !0;
            return (
              this.__iterate(function (n) {
                r ? (r = !1) : (e += t),
                  (e += null !== n && void 0 !== n ? n.toString() : '');
              }),
              e
            );
          },
          keys: function () {
            return this.__iterator(0);
          },
          map: function (t, e) {
            return Tt(this, qt(this, t, e));
          },
          reduce: function (t, e, r) {
            return Pr(this, t, e, r, arguments.length < 2, !1);
          },
          reduceRight: function (t, e, r) {
            return Pr(this, t, e, r, arguments.length < 2, !0);
          },
          reverse: function () {
            return Tt(this, At(this, !0));
          },
          slice: function (t, e) {
            return Tt(this, Dt(this, t, e, !0));
          },
          some: function (t, e) {
            return !this.every(Hr(t), e);
          },
          sort: function (t) {
            return Tt(this, Rt(this, t));
          },
          values: function () {
            return this.__iterator(1);
          },
          butLast: function () {
            return this.slice(0, -1);
          },
          isEmpty: function () {
            return void 0 !== this.size
              ? 0 === this.size
              : !this.some(function () {
                  return !0;
                });
          },
          count: function (t, e) {
            return a(t ? this.toSeq().filter(t, e) : this);
          },
          countBy: function (t, e) {
            return (function (t, e, r) {
              var n = ke().asMutable();
              return (
                t.__iterate(function (i, o) {
                  n.update(e.call(r, i, o, t), 0, function (t) {
                    return t + 1;
                  });
                }),
                n.asImmutable()
              );
            })(this, t, e);
          },
          equals: function (t) {
            return Ir(this, t);
          },
          entrySeq: function () {
            var t = this;
            if (t._cache) return new Q(t._cache);
            var e = t.toSeq().map(Jr).toIndexedSeq();
            return (
              (e.fromEntrySeq = function () {
                return t.toSeq();
              }),
              e
            );
          },
          filterNot: function (t, e) {
            return this.filter(Hr(t), e);
          },
          findEntry: function (t, e, r) {
            var n = r;
            return (
              this.__iterate(function (r, i, o) {
                if (t.call(e, r, i, o)) return (n = [i, r]), !1;
              }),
              n
            );
          },
          findKey: function (t, e) {
            var r = this.findEntry(t, e);
            return r && r[0];
          },
          findLast: function (t, e, r) {
            return this.toKeyedSeq().reverse().find(t, e, r);
          },
          findLastEntry: function (t, e, r) {
            return this.toKeyedSeq().reverse().findEntry(t, e, r);
          },
          findLastKey: function (t, e) {
            return this.toKeyedSeq().reverse().findKey(t, e);
          },
          first: function (t) {
            return this.find(f, null, t);
          },
          flatMap: function (t, e) {
            return Tt(
              this,
              (function (t, e, r) {
                var n = Pt(t);
                return t
                  .toSeq()
                  .map(function (i, o) {
                    return n(e.call(r, i, o, t));
                  })
                  .flatten(!0);
              })(this, t, e)
            );
          },
          flatten: function (t) {
            return Tt(this, Ct(this, t, !0));
          },
          fromEntrySeq: function () {
            return new Ot(this);
          },
          get: function (t, e) {
            return this.find(
              function (e, r) {
                return at(r, t);
              },
              void 0,
              e
            );
          },
          getIn: Rr,
          groupBy: function (t, e) {
            return (function (t, e, r) {
              var n = m(t),
                i = (x(t) ? fr() : ke()).asMutable();
              t.__iterate(function (o, u) {
                i.update(e.call(r, o, u, t), function (t) {
                  return (t = t || []).push(n ? [u, o] : o), t;
                });
              });
              var o = Pt(t);
              return i
                .map(function (e) {
                  return Tt(t, o(e));
                })
                .asImmutable();
            })(this, t, e);
          },
          has: function (t) {
            return this.get(t, o) !== o;
          },
          hasIn: function (t) {
            return Kr(this, t);
          },
          isSubset: function (t) {
            return (
              (t = 'function' === typeof t.includes ? t : z(t)),
              this.every(function (e) {
                return t.includes(e);
              })
            );
          },
          isSuperset: function (t) {
            return (t = 'function' === typeof t.isSubset ? t : z(t)).isSubset(
              this
            );
          },
          keyOf: function (t) {
            return this.findKey(function (e) {
              return at(e, t);
            });
          },
          keySeq: function () {
            return this.toSeq().map(Wr).toIndexedSeq();
          },
          last: function (t) {
            return this.toSeq().reverse().first(t);
          },
          lastKeyOf: function (t) {
            return this.toKeyedSeq().reverse().keyOf(t);
          },
          max: function (t) {
            return Kt(this, t);
          },
          maxBy: function (t, e) {
            return Kt(this, e, t);
          },
          min: function (t) {
            return Kt(this, t ? Vr(t) : Gr);
          },
          minBy: function (t, e) {
            return Kt(this, e ? Vr(e) : Gr, t);
          },
          rest: function () {
            return this.slice(1);
          },
          skip: function (t) {
            return 0 === t ? this : this.slice(Math.max(0, t));
          },
          skipLast: function (t) {
            return 0 === t ? this : this.slice(0, -Math.max(0, t));
          },
          skipWhile: function (t, e) {
            return Tt(this, xt(this, t, e, !0));
          },
          skipUntil: function (t, e) {
            return this.skipWhile(Hr(t), e);
          },
          sortBy: function (t, e) {
            return Tt(this, Rt(this, e, t));
          },
          take: function (t) {
            return this.slice(0, Math.max(0, t));
          },
          takeLast: function (t) {
            return this.slice(-Math.max(0, t));
          },
          takeWhile: function (t, e) {
            return Tt(
              this,
              (function (t, e, r) {
                var n = Wt(t);
                return (
                  (n.__iterateUncached = function (n, i) {
                    var o = this;
                    if (i) return this.cacheResult().__iterate(n, i);
                    var u = 0;
                    return (
                      t.__iterate(function (t, i, s) {
                        return e.call(r, t, i, s) && ++u && n(t, i, o);
                      }),
                      u
                    );
                  }),
                  (n.__iteratorUncached = function (n, i) {
                    var o = this;
                    if (i) return this.cacheResult().__iterator(n, i);
                    var u = t.__iterator(2, i),
                      s = !0;
                    return new K(function () {
                      if (!s) return { value: void 0, done: !0 };
                      var t = u.next();
                      if (t.done) return t;
                      var i = t.value,
                        a = i[0],
                        c = i[1];
                      return e.call(r, c, a, o)
                        ? 2 === n
                          ? t
                          : L(n, a, c, t)
                        : ((s = !1), { value: void 0, done: !0 });
                    });
                  }),
                  n
                );
              })(this, t, e)
            );
          },
          takeUntil: function (t, e) {
            return this.takeWhile(Hr(t), e);
          },
          update: function (t) {
            return t(this);
          },
          valueSeq: function () {
            return this.toIndexedSeq();
          },
          hashCode: function () {
            return (
              this.__hash ||
              (this.__hash = (function (t) {
                if (t.size === 1 / 0) return 0;
                var e = x(t),
                  r = m(t),
                  n = e ? 1 : 0;
                return (function (t, e) {
                  return (
                    (e = ct(e, 3432918353)),
                    (e = ct((e << 15) | (e >>> -15), 461845907)),
                    (e = ct((e << 13) | (e >>> -13), 5)),
                    (e = ct(
                      (e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16),
                      2246822507
                    )),
                    (e = ft((e = ct(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16)))
                  );
                })(
                  t.__iterate(
                    r
                      ? e
                        ? function (t, e) {
                            n = (31 * n + Yr(pt(t), pt(e))) | 0;
                          }
                        : function (t, e) {
                            n = (n + Yr(pt(t), pt(e))) | 0;
                          }
                      : e
                      ? function (t) {
                          n = (31 * n + pt(t)) | 0;
                        }
                      : function (t) {
                          n = (n + pt(t)) | 0;
                        }
                  ),
                  n
                );
              })(this))
            );
          },
        });
      var Ur = z.prototype;
      (Ur[y] = !0),
        (Ur[R] = Ur.values),
        (Ur.toJSON = Ur.toArray),
        (Ur.__toStringMapper = Zt),
        (Ur.inspect = Ur.toSource = function () {
          return this.toString();
        }),
        (Ur.chain = Ur.flatMap),
        (Ur.contains = Ur.includes),
        Er(I, {
          flip: function () {
            return Tt(this, Mt(this));
          },
          mapEntries: function (t, e) {
            var r = this,
              n = 0;
            return Tt(
              this,
              this.toSeq()
                .map(function (i, o) {
                  return t.call(e, [o, i], n++, r);
                })
                .fromEntrySeq()
            );
          },
          mapKeys: function (t, e) {
            var r = this;
            return Tt(
              this,
              this.toSeq()
                .flip()
                .map(function (n, i) {
                  return t.call(e, n, i, r);
                })
                .flip()
            );
          },
        });
      var Tr = I.prototype;
      (Tr[g] = !0),
        (Tr[R] = Ur.entries),
        (Tr.toJSON = Lr),
        (Tr.__toStringMapper = function (t, e) {
          return Zt(e) + ': ' + Zt(t);
        }),
        Er(E, {
          toKeyedSeq: function () {
            return new It(this, !1);
          },
          filter: function (t, e) {
            return Tt(this, jt(this, t, e, !1));
          },
          findIndex: function (t, e) {
            var r = this.findEntry(t, e);
            return r ? r[0] : -1;
          },
          indexOf: function (t) {
            var e = this.keyOf(t);
            return void 0 === e ? -1 : e;
          },
          lastIndexOf: function (t) {
            var e = this.lastKeyOf(t);
            return void 0 === e ? -1 : e;
          },
          reverse: function () {
            return Tt(this, At(this, !1));
          },
          slice: function (t, e) {
            return Tt(this, Dt(this, t, e, !1));
          },
          splice: function (t, e) {
            var r = arguments.length;
            if (((e = Math.max(e || 0, 0)), 0 === r || (2 === r && !e)))
              return this;
            t = p(t, t < 0 ? this.count() : this.size);
            var n = this.slice(0, t);
            return Tt(
              this,
              1 === r ? n : n.concat(Vt(arguments, 2), this.slice(t + e))
            );
          },
          findLastIndex: function (t, e) {
            var r = this.findLastEntry(t, e);
            return r ? r[0] : -1;
          },
          first: function (t) {
            return this.get(0, t);
          },
          flatten: function (t) {
            return Tt(this, Ct(this, t, !1));
          },
          get: function (t, e) {
            return (t = c(this, t)) < 0 ||
              this.size === 1 / 0 ||
              (void 0 !== this.size && t > this.size)
              ? e
              : this.find(
                  function (e, r) {
                    return r === t;
                  },
                  void 0,
                  e
                );
          },
          has: function (t) {
            return (
              (t = c(this, t)) >= 0 &&
              (void 0 !== this.size
                ? this.size === 1 / 0 || t < this.size
                : -1 !== this.indexOf(t))
            );
          },
          interpose: function (t) {
            return Tt(
              this,
              (function (t, e) {
                var r = Wt(t);
                return (
                  (r.size = t.size && 2 * t.size - 1),
                  (r.__iterateUncached = function (r, n) {
                    var i = this,
                      o = 0;
                    return (
                      t.__iterate(function (t) {
                        return (
                          (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i)
                        );
                      }, n),
                      o
                    );
                  }),
                  (r.__iteratorUncached = function (r, n) {
                    var i,
                      o = t.__iterator(1, n),
                      u = 0;
                    return new K(function () {
                      return (!i || u % 2) && (i = o.next()).done
                        ? i
                        : u % 2
                        ? L(r, u++, e)
                        : L(r, u++, i.value, i);
                    });
                  }),
                  r
                );
              })(this, t)
            );
          },
          interleave: function () {
            var t = [this].concat(Vt(arguments)),
              e = Ut(this.toSeq(), G.of, t),
              r = e.flatten(!0);
            return e.size && (r.size = e.size * t.length), Tt(this, r);
          },
          keySeq: function () {
            return Br(0, this.size);
          },
          last: function (t) {
            return this.get(-1, t);
          },
          skipWhile: function (t, e) {
            return Tt(this, xt(this, t, e, !1));
          },
          zip: function () {
            var t = [this].concat(Vt(arguments));
            return Tt(this, Ut(this, Fr, t));
          },
          zipAll: function () {
            var t = [this].concat(Vt(arguments));
            return Tt(this, Ut(this, Fr, t, !0));
          },
          zipWith: function (t) {
            var e = Vt(arguments);
            return (e[0] = this), Tt(this, Ut(this, t, e));
          },
        });
      var Nr = E.prototype;
      function Pr(t, e, r, n, i, o) {
        return (
          Gt(t.size),
          t.__iterate(function (t, o, u) {
            i ? ((i = !1), (r = t)) : (r = e.call(n, r, t, o, u));
          }, o),
          r
        );
      }
      function Wr(t, e) {
        return e;
      }
      function Jr(t, e) {
        return [e, t];
      }
      function Hr(t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }
      function Vr(t) {
        return function () {
          return -t.apply(this, arguments);
        };
      }
      function Fr() {
        return Vt(arguments);
      }
      function Gr(t, e) {
        return t < e ? 1 : t > e ? -1 : 0;
      }
      function Yr(t, e) {
        return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
      }
      (Nr[w] = !0),
        (Nr[D] = !0),
        Er(k, {
          get: function (t, e) {
            return this.has(t) ? t : e;
          },
          includes: function (t) {
            return this.has(t);
          },
          keySeq: function () {
            return this.valueSeq();
          },
        }),
        (k.prototype.has = Ur.includes),
        (k.prototype.contains = k.prototype.includes),
        Er(F, I.prototype),
        Er(G, E.prototype),
        Er(Y, k.prototype);
      var Qr = (function (t) {
        function e(t) {
          return null === t || void 0 === t
            ? tn()
            : zr(t)
            ? t
            : tn().withMutations(function (e) {
                var r = k(t);
                Gt(r.size),
                  r.forEach(function (t) {
                    return e.add(t);
                  });
              });
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments);
          }),
          (e.fromKeys = function (t) {
            return this(I(t).keySeq());
          }),
          (e.prototype.toString = function () {
            return this.__toString('OrderedSet {', '}');
          }),
          e
        );
      })(Or);
      Qr.isOrderedSet = zr;
      var Xr,
        Zr = Qr.prototype;
      function $r(t, e) {
        var r = Object.create(Zr);
        return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
      }
      function tn() {
        return Xr || (Xr = $r(pr()));
      }
      (Zr[D] = !0),
        (Zr.zip = Nr.zip),
        (Zr.zipWith = Nr.zipWith),
        (Zr.__empty = tn),
        (Zr.__make = $r);
      var en = function (t, e) {
        var r,
          n = function (o) {
            var u = this;
            if (o instanceof n) return o;
            if (!(this instanceof n)) return new n(o);
            if (!r) {
              r = !0;
              var s = Object.keys(t),
                a = (i._indices = {});
              (i._name = e), (i._keys = s), (i._defaultValues = t);
              for (var c = 0; c < s.length; c++) {
                var f = s[c];
                (a[f] = c),
                  i[f]
                    ? 'object' === typeof console &&
                      console.warn &&
                      console.warn(
                        'Cannot define ' +
                          on(this) +
                          ' with property "' +
                          f +
                          '" since that property name is part of the Record API.'
                      )
                    : sn(i, f);
              }
            }
            (this.__ownerID = void 0),
              (this._values = Qe().withMutations(function (t) {
                t.setSize(u._keys.length),
                  I(o).forEach(function (e, r) {
                    t.set(
                      u._indices[r],
                      e === u._defaultValues[r] ? void 0 : e
                    );
                  });
              }));
          },
          i = (n.prototype = Object.create(rn));
        return (i.constructor = n), e && (n.displayName = e), n;
      };
      (en.prototype.toString = function () {
        for (
          var t, e = on(this) + ' { ', r = this._keys, n = 0, i = r.length;
          n !== i;
          n++
        )
          e += (n ? ', ' : '') + (t = r[n]) + ': ' + Zt(this.get(t));
        return e + ' }';
      }),
        (en.prototype.equals = function (t) {
          return (
            this === t ||
            (t && this._keys === t._keys && un(this).equals(un(t)))
          );
        }),
        (en.prototype.hashCode = function () {
          return un(this).hashCode();
        }),
        (en.prototype.has = function (t) {
          return this._indices.hasOwnProperty(t);
        }),
        (en.prototype.get = function (t, e) {
          if (!this.has(t)) return e;
          var r = this._indices[t],
            n = this._values.get(r);
          return void 0 === n ? this._defaultValues[t] : n;
        }),
        (en.prototype.set = function (t, e) {
          if (this.has(t)) {
            var r = this._values.set(
              this._indices[t],
              e === this._defaultValues[t] ? void 0 : e
            );
            if (r !== this._values && !this.__ownerID) return nn(this, r);
          }
          return this;
        }),
        (en.prototype.remove = function (t) {
          return this.set(t);
        }),
        (en.prototype.clear = function () {
          var t = this._values.clear().setSize(this._keys.length);
          return this.__ownerID ? this : nn(this, t);
        }),
        (en.prototype.wasAltered = function () {
          return this._values.wasAltered();
        }),
        (en.prototype.toSeq = function () {
          return un(this);
        }),
        (en.prototype.toJS = function () {
          return kr(this);
        }),
        (en.prototype.entries = function () {
          return this.__iterator(2);
        }),
        (en.prototype.__iterator = function (t, e) {
          return un(this).__iterator(t, e);
        }),
        (en.prototype.__iterate = function (t, e) {
          return un(this).__iterate(t, e);
        }),
        (en.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID) return this;
          var e = this._values.__ensureOwner(t);
          return t
            ? nn(this, e, t)
            : ((this.__ownerID = t), (this._values = e), this);
        }),
        (en.isRecord = A),
        (en.getDescriptiveName = on);
      var rn = en.prototype;
      function nn(t, e, r) {
        var n = Object.create(Object.getPrototypeOf(t));
        return (n._values = e), (n.__ownerID = r), n;
      }
      function on(t) {
        return t.constructor.displayName || t.constructor.name || 'Record';
      }
      function un(t) {
        return et(
          t._keys.map(function (e) {
            return [e, t.get(e)];
          })
        );
      }
      function sn(t, e) {
        try {
          Object.defineProperty(t, e, {
            get: function () {
              return this.get(e);
            },
            set: function (t) {
              Ft(this.__ownerID, 'Cannot set on an immutable record.'),
                this.set(e, t);
            },
          });
        } catch (r) {}
      }
      function an(t, e) {
        return cn([], e || fn, t, '', e && e.length > 2 ? [] : void 0, {
          '': t,
        });
      }
      function cn(t, e, r, n, i, o) {
        var u = Array.isArray(r) ? G : Qt(r) ? F : null;
        if (u) {
          if (~t.indexOf(r))
            throw new TypeError(
              'Cannot convert circular structure to Immutable'
            );
          t.push(r), i && '' !== n && i.push(n);
          var s = e.call(
            o,
            n,
            u(r).map(function (n, o) {
              return cn(t, e, n, o, i, r);
            }),
            i && i.slice()
          );
          return t.pop(), i && i.pop(), s;
        }
        return r;
      }
      function fn(t, e) {
        return m(e) ? e.toMap() : e.toList();
      }
      (rn[q] = !0),
        (rn.delete = rn.remove),
        (rn.deleteIn = rn.removeIn = ce),
        (rn.getIn = Rr),
        (rn.hasIn = Ur.hasIn),
        (rn.merge = _e),
        (rn.mergeWith = le),
        (rn.mergeIn = we),
        (rn.mergeDeep = ge),
        (rn.mergeDeepWith = me),
        (rn.mergeDeepIn = Se),
        (rn.setIn = se),
        (rn.update = he),
        (rn.updateIn = pe),
        (rn.withMutations = be),
        (rn.asMutable = ze),
        (rn.asImmutable = Ie),
        (rn[R] = rn.entries),
        (rn.toJSON = rn.toObject = Ur.toObject),
        (rn.inspect = rn.toSource = function () {
          return this.toString();
        });
    },
  },
]);
