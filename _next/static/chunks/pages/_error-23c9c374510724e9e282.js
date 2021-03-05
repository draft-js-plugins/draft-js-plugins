_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    '1Pcy': function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
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
    J9Yr: function (e, t, n) {
      'use strict';
      var r = n('RhWx'),
        o = n('VrFO'),
        a = n('Y9Ll'),
        i = (n('1Pcy'), n('5Yy7')),
        u = n('N+ot'),
        c = n('AuHH');
      function s(e) {
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
          return u(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = n('ERkP'),
        f = (function (e) {
          i(n, e);
          var t = s(n);
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
        })(l.Component);
      t.default = f;
    },
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
    'N+ot': function (e, t, n) {
      var r = n('T0aG'),
        o = n('1Pcy');
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    RhWx: function (e, t, n) {
      var r = n('tGbD'),
        o = n('twbh'),
        a = n('peMk'),
        i = n('d8WC');
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
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
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n('ERkP')) && r.__esModule ? r : { default: r },
        a = n('TZT2');
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (o && i);
      }
    },
    gzpe: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return n('iQU9');
        },
      ]);
    },
    iQU9: function (e, t, n) {
      'use strict';
      var r = n('VrFO'),
        o = n('Y9Ll'),
        a = n('5Yy7'),
        i = n('N+ot'),
        u = n('AuHH');
      function c(e) {
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
            r = u(e);
          if (t) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      var s = n('IGGJ');
      (t.__esModule = !0), (t.default = void 0);
      var l = s(n('ERkP')),
        f = s(n('ysqo')),
        d = {
          400: 'Bad Request',
          404: 'This page could not be found',
          405: 'Method Not Allowed',
          500: 'Internal Server Error',
        };
      function p(e) {
        var t = e.res,
          n = e.err;
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        };
      }
      var h = (function (e) {
        a(n, e);
        var t = c(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    d[e] ||
                    'An unexpected error has occurred';
                return l.default.createElement(
                  'div',
                  { style: y.error },
                  l.default.createElement(
                    f.default,
                    null,
                    l.default.createElement('title', null, e, ': ', t)
                  ),
                  l.default.createElement(
                    'div',
                    null,
                    l.default.createElement('style', {
                      dangerouslySetInnerHTML: { __html: 'body { margin: 0 }' },
                    }),
                    e
                      ? l.default.createElement('h1', { style: y.h1 }, e)
                      : null,
                    l.default.createElement(
                      'div',
                      { style: y.desc },
                      l.default.createElement('h2', { style: y.h2 }, t, '.')
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.default.Component);
      (t.default = h),
        (h.displayName = 'ErrorPage'),
        (h.getInitialProps = p),
        (h.origGetInitialProps = p);
      var y = {
        error: {
          color: '#000',
          background: '#fff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: {
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle',
        },
        h1: {
          display: 'inline-block',
          borderRight: '1px solid rgba(0, 0, 0,.3)',
          margin: 0,
          marginRight: '20px',
          padding: '10px 23px 10px 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: {
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: 'inherit',
          margin: 0,
          padding: 0,
        },
      };
    },
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
    ysqo: function (e, t, n) {
      'use strict';
      n('KEM+');
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e };
          var t = s();
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
        i = n('TZT2'),
        u = n('op+c'),
        c = n('dq4L');
      function s() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
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
      function f(e, t) {
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
      function p(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  i = !1;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  i = !0;
                  var u = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(u) ? (a = !1) : e.add(u);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var c = 0, s = d.length; c < s; c++) {
                      var l = d[c];
                      if (o.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var f = o.props[l],
                            p = r[l] || new Set();
                          ('name' === l && i) || !p.has(f)
                            ? (p.add(f), (r[l] = p))
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
          n = (0, o.useContext)(i.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: p,
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
  },
  [['gzpe', 0, 2, 1]],
]);
