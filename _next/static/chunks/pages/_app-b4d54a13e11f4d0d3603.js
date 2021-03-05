_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    0: function (e, t, n) {
      n('ODB1'), (e.exports = n('7xIC'));
    },
    '1Pcy': function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    '1Pk0': function (e, t, n) {},
    '485h': function (e, t, n) {},
    '5Yy7': function (e, t, n) {
      var r = n('695J');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    '7aKF': function (e, t, n) {},
    AuHH: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    HXA8: function (e, t, n) {},
    J9Yr: function (e, t, n) {
      'use strict';
      var r = n('RhWx'),
        o = n('VrFO'),
        a = n('Y9Ll'),
        u = (n('1Pcy'), n('5Yy7')),
        i = n('N+ot'),
        c = n('AuHH');
      function f(e) {
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
            r = c(e);
          if (t) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var s = n('ERkP'),
        p = (function (e) {
          u(n, e);
          var t = f(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(s.Component);
      t.default = p;
    },
    JECD: function (e, t, n) {},
    'KEM+': function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    KK3F: function (e, t, n) {},
    KS2b: function (e, t, n) {},
    'LGx/': function (e, t, n) {},
    'N+ot': function (e, t, n) {
      var r = n('T0aG'),
        o = n('1Pcy');
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    ODB1: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('cha2');
        },
      ]);
    },
    RhWx: function (e, t, n) {
      var r = n('tGbD'),
        o = n('twbh'),
        a = n('peMk'),
        u = n('d8WC');
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || u();
      };
    },
    RjZK: function (e, t, n) {},
    TZT2: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    'U/75': function (e, t, n) {},
    XHxC: function (e, t, n) {},
    'YQ+Z': function (e, t, n) {},
    cha2: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return c;
        });
      n('zPlV'),
        n('1Pk0'),
        n('LGx/'),
        n('485h'),
        n('RjZK'),
        n('lqD0'),
        n('zPP6'),
        n('YQ+Z'),
        n('JECD'),
        n('XHxC'),
        n('7aKF'),
        n('KK3F'),
        n('uHgY'),
        n('KS2b'),
        n('HXA8'),
        n('U/75');
      var r = n('ERkP'),
        o = n.n(r),
        a = n('vpUC'),
        u = n.n(a),
        i = o.a.createElement;
      function c(e) {
        var t = e.Component,
          n = e.pageProps;
        return i(
          o.a.Fragment,
          null,
          i(
            u.a,
            null,
            i(
              'title',
              null,
              'DraftJS Plugins - High quality plugins with great UX'
            )
          ),
          i(t, n)
        );
      }
    },
    d8WC: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    dq4L: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n('ERkP')) && r.__esModule ? r : { default: r },
        a = n('TZT2');
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          u = void 0 !== a && a;
        return n || (o && u);
      }
    },
    lqD0: function (e, t, n) {},
    'op+c': function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    tGbD: function (e, t, n) {
      var r = n('iQ7j');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    twbh: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    uHgY: function (e, t, n) {},
    vpUC: function (e, t, n) {
      e.exports = n('ysqo');
    },
    ysqo: function (e, t, n) {
      'use strict';
      n('KEM+');
      (t.__esModule = !0), (t.defaultHead = s), (t.default = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('ERkP')),
        a = (r = n('J9Yr')) && r.__esModule ? r : { default: r },
        u = n('TZT2'),
        i = n('op+c'),
        c = n('dq4L');
      function f() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        );
      }
      function p(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function l(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(s(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  u = !1;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  u = !0;
                  var i = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var c = 0, f = d.length; c < f; c++) {
                      var s = d[c];
                      if (o.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (a = !1) : n.add(s);
                        else {
                          var p = o.props[s],
                            l = r[s] || new Set();
                          ('name' === s && u) || !l.has(p)
                            ? (l.add(p), (r[s] = l))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return o.default.cloneElement(e, { key: n });
          });
      }
      function h(e) {
        var t = e.children,
          n = (0, o.useContext)(u.AmpStateContext),
          r = (0, o.useContext)(i.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: l,
            headManager: r,
            inAmpMode: (0, c.isInAmpMode)(n),
          },
          t
        );
      }
      h.rewind = function () {};
      var y = h;
      t.default = y;
    },
    zPP6: function (e, t, n) {},
    zPlV: function (e, t, n) {},
  },
  [[0, 0, 2, 1]],
]);
