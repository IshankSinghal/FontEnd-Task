/*! For license information please see main.0d6cae56.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      881: (e, t) => {
        var n,
          r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.server_context"),
          d = Symbol.for("react.forward_ref"),
          p = Symbol.for("react.suspense"),
          f = Symbol.for("react.suspense_list"),
          h = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          g = Symbol.for("react.offscreen");
        function y(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case l:
                  case i:
                  case p:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case u:
                      case d:
                      case m:
                      case h:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        n = Symbol.for("react.module.reference");
      },
      805: (e, t, n) => {
        n(881);
      },
      219: (e, t, n) => {
        var r = n(763),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function s(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          p = Object.getOwnPropertyDescriptor,
          f = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = f(n);
              o && o !== h && e(t, o, r);
            }
            var i = c(n);
            d && (i = i.concat(d(n)));
            for (var l = s(t), m = s(n), g = 0; g < i.length; ++g) {
              var y = i[g];
              if (!a[y] && (!r || !r[y]) && (!m || !m[y]) && (!l || !l[y])) {
                var v = p(n, y);
                try {
                  u(t, y, v);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      983: (e, t) => {
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          s = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          p = n ? Symbol.for("react.forward_ref") : 60112,
          f = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          v = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          x = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case a:
                  case l:
                  case i:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case p:
                      case g:
                      case m:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function S(e) {
          return w(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = u),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = p),
          (t.Fragment = a),
          (t.Lazy = g),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = f),
          (t.isAsyncMode = function (e) {
            return S(e) || w(e) === c;
          }),
          (t.isConcurrentMode = S),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === p;
          }),
          (t.isFragment = function (e) {
            return w(e) === a;
          }),
          (t.isLazy = function (e) {
            return w(e) === g;
          }),
          (t.isMemo = function (e) {
            return w(e) === m;
          }),
          (t.isPortal = function (e) {
            return w(e) === o;
          }),
          (t.isProfiler = function (e) {
            return w(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === i;
          }),
          (t.isSuspense = function (e) {
            return w(e) === f;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === a ||
              e === d ||
              e === l ||
              e === i ||
              e === f ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === m ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === p ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === x ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = w);
      },
      763: (e, t, n) => {
        e.exports = n(983);
      },
      730: (e, t, n) => {
        var r = n(43),
          o = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          p =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(f, e) &&
                      (p.test(e) ? (h[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          A = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          R = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var B = Symbol.iterator;
        function I(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
        }
        var L,
          F = Object.assign;
        function z(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var D = !1;
        function U(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case A:
              return "StrictMode";
            case j:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case R:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === A ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function Q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Z(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function _(e, t) {
          X(e, t);
          var n = Q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, Q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Q(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Q(n) };
        }
        function ae(e, t) {
          var n = Q(t.value),
            r = Q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function pe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
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
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(fe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var ye = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ae = null;
        function Ee(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof Se) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Ae ? Ae.push(e) : (Ae = [e])) : (ke = e);
        }
        function Re() {
          if (ke) {
            var e = ke,
              t = Ae;
            if (((Ae = ke = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function je() {}
        var Ne = !1;
        function Pe(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Ne = !1), (null !== ke || null !== Ae) && (je(), Re());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Be, Be),
              window.removeEventListener("test", Be, Be);
          } catch (ce) {
            Me = !1;
          }
        function Ie(e, t, n, r, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Le = !1,
          Fe = null,
          ze = !1,
          De = null,
          Ue = {
            onError: function (e) {
              (Le = !0), (Fe = e);
            },
          };
        function Ve(e, t, n, r, o, a, i, l, s) {
          (Le = !1), (Fe = null), Ie.apply(Ue, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Qe(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Qe(o), e;
                    if (i === r) return Qe(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = o.unstable_scheduleCallback,
          Ye = o.unstable_cancelCallback,
          Ze = o.unstable_shouldYield,
          Je = o.unstable_requestPaint,
          Xe = o.unstable_now,
          _e = o.unstable_getCurrentPriorityLevel,
          $e = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = dt(l)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          St,
          kt,
          At,
          Et,
          Ct = !1,
          Rt = [],
          Tt = null,
          jt = null,
          Nt = null,
          Pt = new Map(),
          Ot = new Map(),
          Mt = [],
          Bt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Ft(e) {
          var t = xo(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Tt && zt(Tt) && (Tt = null),
            null !== jt && zt(jt) && (jt = null),
            null !== Nt && zt(Nt) && (Nt = null),
            Pt.forEach(Dt),
            Ot.forEach(Dt);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ut)));
        }
        function Wt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Rt.length) {
            Vt(Rt[0], e);
            for (var n = 1; n < Rt.length; n++) {
              var r = Rt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Vt(Tt, e),
              null !== jt && Vt(jt, e),
              null !== Nt && Vt(Nt, e),
              Pt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Mt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Qt = !0;
        function qt(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          var o = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = a);
          }
        }
        function Kt(e, t, n, r) {
          if (Qt) {
            var o = Zt(e, t, n, r);
            if (null === o) qr(e, t, r, Yt, n), It(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Tt = Lt(Tt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (jt = Lt(jt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Nt = Lt(Nt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Pt.set(a, Lt(Pt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Ot.set(a, Lt(Ot.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Bt.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && wt(a),
                  null === (a = Zt(e, t, n, r)) && qr(e, t, r, Yt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else qr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Zt(e, t, n, r) {
          if (((Yt = null), null !== (e = xo((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (_e()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          _t = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = _t,
            r = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return ($t = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = F({}, un, { view: 0, detail: 0 }),
          pn = on(dn),
          fn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(fn),
          mn = on(F({}, fn, { dataTransfer: 0 })),
          gn = on(F({}, dn, { relatedTarget: 0 })),
          yn = on(
            F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = F({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(vn),
          xn = on(F({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function An(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function En() {
          return An;
        }
        var Cn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Rn = on(Cn),
          Tn = on(
            F({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = on(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Nn = on(
            F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = F({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = on(Pn),
          Mn = [9, 13, 27, 32],
          Bn = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var Ln = c && "TextEvent" in window && !In,
          Fn = c && (!Bn || (In && 8 < In && 11 >= In)),
          Dn = String.fromCharCode(32),
          Un = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Qn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Qn[e.type] : "textarea" === t;
        }
        function Gn(e, t, n, r) {
          Ce(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Yn = null;
        function Zn(e) {
          Dr(e, 0);
        }
        function Jn(e) {
          if (K(So(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var _n = !1;
        if (c) {
          var $n;
          if (c) {
            var er = "oninput" in document;
            if (!er) {
              var tr = document.createElement("div");
              tr.setAttribute("oninput", "return;"),
                (er = "function" === typeof tr.oninput);
            }
            $n = er;
          } else $n = !1;
          _n = $n && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Kn && (Kn.detachEvent("onpropertychange", rr), (Yn = Kn = null));
        }
        function rr(e) {
          if ("value" === e.propertyName && Jn(Yn)) {
            var t = [];
            Gn(t, Yn, e, we(e)), Pe(Zn, t);
          }
        }
        function or(e, t, n) {
          "focusin" === e
            ? (nr(), (Yn = n), (Kn = t).attachEvent("onpropertychange", rr))
            : "focusout" === e && nr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(Yn);
        }
        function ir(e, t) {
          if ("click" === e) return Jn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function dr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function pr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? pr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            pr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = dr(n, a));
                var i = dr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = c && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          vr = null,
          br = null,
          xr = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == yr ||
            yr !== Y(r) ||
            ("selectionStart" in (r = yr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && ur(br, r)) ||
              ((br = r),
              0 < (r = Kr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Ar = {},
          Er = {};
        function Cr(e) {
          if (Ar[e]) return Ar[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Ar[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Rr = Cr("animationend"),
          Tr = Cr("animationiteration"),
          jr = Cr("animationstart"),
          Nr = Cr("transitionend"),
          Pr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          Pr.set(e, t), s(t, [e]);
        }
        for (var Br = 0; Br < Or.length; Br++) {
          var Ir = Or[Br];
          Mr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Mr(Rr, "onAnimationEnd"),
          Mr(Tr, "onAnimationIteration"),
          Mr(jr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(Nr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((Ve.apply(this, arguments), Le)) {
                if (!Le) throw Error(a(198));
                var c = Fe;
                (Le = !1), (Fe = null), ze || ((ze = !0), (De = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped()))
                    break e;
                  zr(o, l, u), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  zr(o, l, u), (a = s);
                }
            }
          }
          if (ze) throw ((e = De), (ze = !1), (De = null), e);
        }
        function Ur(e, t) {
          var n = t[yo];
          void 0 === n && (n = t[yo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Qr(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Qr(n, e, r, t);
        }
        var Wr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), Vr("selectionchange", !1, t));
          }
        }
        function Qr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var o = qt;
              break;
            case 4:
              o = Gt;
              break;
            default:
              o = Kt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function qr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = xo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = a,
              o = we(n),
              i = [];
            e: {
              var l = Pr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Rn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = jn;
                    break;
                  case Rr:
                  case Tr:
                  case jr:
                    s = yn;
                    break;
                  case Nr:
                    s = Nn;
                    break;
                  case "scroll":
                    s = pn;
                    break;
                  case "wheel":
                    s = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Tn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  p = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var f, h = r; null !== h; ) {
                  var m = (f = h).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m),
                      null !== p &&
                        null != (m = Oe(h, p)) &&
                        c.push(Gr(h, m, f))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!xo(u) && !u[go])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? xo(u)
                          : null) &&
                        (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (m = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : So(s)),
                  (f = null == u ? l : So(u)),
                  ((l = new c(m, h + "leave", s, n, o)).target = d),
                  (l.relatedTarget = f),
                  (m = null),
                  xo(o) === r &&
                    (((c = new c(p, h + "enter", u, n, o)).target = f),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (p = u, h = 0, f = c = s; f; f = Yr(f)) h++;
                    for (f = 0, m = p; m; m = Yr(m)) f++;
                    for (; 0 < h - f; ) (c = Yr(c)), h--;
                    for (; 0 < f - h; ) (p = Yr(p)), f--;
                    for (; h--; ) {
                      if (c === p || (null !== p && c === p.alternate)) break e;
                      (c = Yr(c)), (p = Yr(p));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Zr(i, l, s, c, !1),
                  null !== u && null !== d && Zr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? So(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Xn;
              else if (qn(l))
                if (_n) g = lr;
                else {
                  g = ar;
                  var y = or;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Gn(i, g, n, o)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? So(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(y) || "true" === y.contentEditable) &&
                    ((yr = y), (vr = r), (br = null));
                  break;
                case "focusout":
                  br = vr = yr = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var v;
              if (Bn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (v = en())
                    : ((_t = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Hn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Wn(n)) && (b.data = v))),
                (v = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Bn && Vn(e, t))
                          ? ((e = en()), ($t = _t = Xt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((o = new xn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Dr(i, t);
          });
        }
        function Gr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Oe(e, n)) && r.unshift(Gr(e, a, o)),
              null != (a = Oe(e, t)) && r.push(Gr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Zr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = Oe(n, a)) && i.unshift(Gr(n, s, l))
                : o || (null != (s = Oe(n, a)) && i.push(Gr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Jr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function _r(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Xr, "");
        }
        function $r(e, t, n) {
          if (((t = _r(t)), _r(e) !== t && n)) throw Error(a(425));
        }
        function eo() {}
        var to = null,
          no = null;
        function ro(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var oo = "function" === typeof setTimeout ? setTimeout : void 0,
          ao = "function" === typeof clearTimeout ? clearTimeout : void 0,
          io = "function" === typeof Promise ? Promise : void 0,
          lo =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof io
              ? function (e) {
                  return io.resolve(null).then(e).catch(so);
                }
              : oo;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Wt(t);
        }
        function co(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function po(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          ho = "__reactFiber$" + fo,
          mo = "__reactProps$" + fo,
          go = "__reactContainer$" + fo,
          yo = "__reactEvents$" + fo,
          vo = "__reactListeners$" + fo,
          bo = "__reactHandles$" + fo;
        function xo(e) {
          var t = e[ho];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[go] || n[ho])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = po(e); null !== e; ) {
                  if ((n = e[ho])) return n;
                  e = po(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[ho] || e[go]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[mo] || null;
        }
        var Ao = [],
          Eo = -1;
        function Co(e) {
          return { current: e };
        }
        function Ro(e) {
          0 > Eo || ((e.current = Ao[Eo]), (Ao[Eo] = null), Eo--);
        }
        function To(e, t) {
          Eo++, (Ao[Eo] = e.current), (e.current = t);
        }
        var jo = {},
          No = Co(jo),
          Po = Co(!1),
          Oo = jo;
        function Mo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return jo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Bo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Io() {
          Ro(Po), Ro(No);
        }
        function Lo(e, t, n) {
          if (No.current !== jo) throw Error(a(168));
          To(No, t), To(Po, n);
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || "Unknown", o));
          return F({}, n, r);
        }
        function zo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              jo),
            (Oo = No.current),
            To(No, e),
            To(Po, Po.current),
            !0
          );
        }
        function Do(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Fo(e, t, Oo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ro(Po),
              Ro(No),
              To(No, e))
            : Ro(Po),
            To(Po, n);
        }
        var Uo = null,
          Vo = !1,
          Wo = !1;
        function Ho(e) {
          null === Uo ? (Uo = [e]) : Uo.push(e);
        }
        function Qo() {
          if (!Wo && null !== Uo) {
            Wo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Uo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Uo = null), (Vo = !1);
            } catch (o) {
              throw (null !== Uo && (Uo = Uo.slice(e + 1)), Ke($e, Qo), o);
            } finally {
              (bt = t), (Wo = !1);
            }
          }
          return null;
        }
        var qo = [],
          Go = 0,
          Ko = null,
          Yo = 0,
          Zo = [],
          Jo = 0,
          Xo = null,
          _o = 1,
          $o = "";
        function ea(e, t) {
          (qo[Go++] = Yo), (qo[Go++] = Ko), (Ko = e), (Yo = t);
        }
        function ta(e, t, n) {
          (Zo[Jo++] = _o), (Zo[Jo++] = $o), (Zo[Jo++] = Xo), (Xo = e);
          var r = _o;
          e = $o;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (_o = (1 << (32 - it(t) + o)) | (n << o) | r),
              ($o = a + e);
          } else (_o = (1 << a) | (n << o) | r), ($o = e);
        }
        function na(e) {
          null !== e.return && (ea(e, 1), ta(e, 1, 0));
        }
        function ra(e) {
          for (; e === Ko; )
            (Ko = qo[--Go]), (qo[Go] = null), (Yo = qo[--Go]), (qo[Go] = null);
          for (; e === Xo; )
            (Xo = Zo[--Jo]),
              (Zo[Jo] = null),
              ($o = Zo[--Jo]),
              (Zo[Jo] = null),
              (_o = Zo[--Jo]),
              (Zo[Jo] = null);
        }
        var oa = null,
          aa = null,
          ia = !1,
          la = null;
        function sa(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (oa = e), (aa = co(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (oa = e), (aa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xo ? { id: _o, overflow: $o } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (oa = e),
                (aa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ca(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function da(e) {
          if (ia) {
            var t = aa;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (ca(e)) throw Error(a(418));
                t = co(n.nextSibling);
                var r = oa;
                t && ua(e, t)
                  ? sa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (oa = e));
              }
            } else {
              if (ca(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (oa = e);
            }
          }
        }
        function pa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          oa = e;
        }
        function fa(e) {
          if (e !== oa) return !1;
          if (!ia) return pa(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ro(e.type, e.memoizedProps)),
            t && (t = aa))
          ) {
            if (ca(e)) throw (ha(), Error(a(418)));
            for (; t; ) sa(e, t), (t = co(t.nextSibling));
          }
          if ((pa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      aa = co(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              aa = null;
            }
          } else aa = oa ? co(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ha() {
          for (var e = aa; e; ) e = co(e.nextSibling);
        }
        function ma() {
          (aa = oa = null), (ia = !1);
        }
        function ga(e) {
          null === la ? (la = [e]) : la.push(e);
        }
        var ya = x.ReactCurrentBatchConfig;
        function va(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function ba(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function xa(e) {
          return (0, e._init)(e._payload);
        }
        function wa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Bu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === O &&
                    xa(a) === t.type))
              ? (((r = o(t, n.props)).ref = va(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = va(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Lu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function p(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = zu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = va(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Du(t, e.mode, n)).return = e), t;
                case O:
                  return p(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Lu(t, e.mode, n, null)).return = e), t;
              ba(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === o ? u(e, t, n, r) : null;
                case S:
                  return n.key === o ? c(e, t, n, r) : null;
                case O:
                  return f(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== o ? null : d(e, t, n, r, null);
              ba(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || I(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              ba(t, r);
            }
            return null;
          }
          function m(o, a, l, s) {
            for (
              var u = null, c = null, d = a, m = (a = 0), g = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = f(o, d, l[m], s);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === l.length) return n(o, d), ia && ea(o, m), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = p(o, l[m], s)) &&
                  ((a = i(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ia && ea(o, m), u;
            }
            for (d = r(o, d); m < l.length; m++)
              null !== (g = h(d, o, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              ia && ea(o, m),
              u
            );
          }
          function g(o, l, s, u) {
            var c = I(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), m = l, g = (l = 0), y = null, v = s.next();
              null !== m && !v.done;
              g++, v = s.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = f(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(o, m), ia && ea(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = s.next())
                null !== (v = p(o, v.value, u)) &&
                  ((l = i(v, l, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ia && ea(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = s.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (l = i(v, l, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              ia && ea(o, g),
              c
            );
          }
          return function e(r, a, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === O &&
                            xa(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = va(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((a = Lu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = a))
                      : (((s = Iu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = va(r, a, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case S:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Du(i, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case O:
                  return e(r, a, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, a, i, s);
              if (I(i)) return g(r, a, i, s);
              ba(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = zu(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Sa = wa(!0),
          ka = wa(!1),
          Aa = Co(null),
          Ea = null,
          Ca = null,
          Ra = null;
        function Ta() {
          Ra = Ca = Ea = null;
        }
        function ja(e) {
          var t = Aa.current;
          Ro(Aa), (e._currentValue = t);
        }
        function Na(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Pa(e, t) {
          (Ea = e),
            (Ra = Ca = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Oa(e) {
          var t = e._currentValue;
          if (Ra !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ca)
            ) {
              if (null === Ea) throw Error(a(308));
              (Ca = e), (Ea.dependencies = { lanes: 0, firstContext: e });
            } else Ca = Ca.next = e;
          return t;
        }
        var Ma = null;
        function Ba(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Ia(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Ba(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            La(e, r)
          );
        }
        function La(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fa = !1;
        function za(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Da(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ua(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Va(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & js))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              La(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ba(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            La(e, n)
          );
        }
        function Wa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Ha(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Qa(e, t, n, r) {
          var o = e.updateQueue;
          Fa = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var p = l.lane,
                f = l.eventTime;
              if ((r & p) === p) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((p = t), (f = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(f, d, p);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (h = m.payload)
                              ? h.call(f, d, p)
                              : h) ||
                        void 0 === p
                      )
                        break e;
                      d = F({}, d, p);
                      break e;
                    case 2:
                      Fa = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (p = o.effects) ? (o.effects = [l]) : p.push(l));
              } else
                (f = {
                  eventTime: f,
                  lane: p,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (s = d)) : (c = c.next = f),
                  (i |= p);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (p = l).next),
                  (p.next = null),
                  (o.lastBaseUpdate = p),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Fs |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function qa(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ga = {},
          Ka = Co(Ga),
          Ya = Co(Ga),
          Za = Co(Ga);
        function Ja(e) {
          if (e === Ga) throw Error(a(174));
          return e;
        }
        function Xa(e, t) {
          switch ((To(Za, t), To(Ya, e), To(Ka, Ga), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ro(Ka), To(Ka, t);
        }
        function _a() {
          Ro(Ka), Ro(Ya), Ro(Za);
        }
        function $a(e) {
          Ja(Za.current);
          var t = Ja(Ka.current),
            n = se(t, e.type);
          t !== n && (To(Ya, e), To(Ka, n));
        }
        function ei(e) {
          Ya.current === e && (Ro(Ka), Ro(Ya));
        }
        var ti = Co(0);
        function ni(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ri = [];
        function oi() {
          for (var e = 0; e < ri.length; e++)
            ri[e]._workInProgressVersionPrimary = null;
          ri.length = 0;
        }
        var ai = x.ReactCurrentDispatcher,
          ii = x.ReactCurrentBatchConfig,
          li = 0,
          si = null,
          ui = null,
          ci = null,
          di = !1,
          pi = !1,
          fi = 0,
          hi = 0;
        function mi() {
          throw Error(a(321));
        }
        function gi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function yi(e, t, n, r, o, i) {
          if (
            ((li = i),
            (si = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? el : tl),
            (e = n(r, o)),
            pi)
          ) {
            i = 0;
            do {
              if (((pi = !1), (fi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (ci = ui = null),
                (t.updateQueue = null),
                (ai.current = nl),
                (e = n(r, o));
            } while (pi);
          }
          if (
            ((ai.current = $i),
            (t = null !== ui && null !== ui.next),
            (li = 0),
            (ci = ui = si = null),
            (di = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function vi() {
          var e = 0 !== fi;
          return (fi = 0), e;
        }
        function bi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e), ci
          );
        }
        function xi() {
          if (null === ui) {
            var e = si.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ui.next;
          var t = null === ci ? si.memoizedState : ci.next;
          if (null !== t) (ci = t), (ui = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ui = e).memoizedState,
              baseState: ui.baseState,
              baseQueue: ui.baseQueue,
              queue: ui.queue,
              next: null,
            }),
              null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e);
          }
          return ci;
        }
        function wi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Si(e) {
          var t = xi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ui,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((li & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var p = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = p), (l = r)) : (u = u.next = p),
                  (si.lanes |= d),
                  (Fs |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              sr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (si.lanes |= i), (Fs |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = xi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            sr(i, t.memoizedState) || (xl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ai() {}
        function Ei(e, t) {
          var n = si,
            r = xi(),
            o = t(),
            i = !sr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (xl = !0)),
            (r = r.queue),
            Fi(Ti.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ci && 1 & ci.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Oi(9, Ri.bind(null, n, r, o, t), void 0, null),
              null === Ns)
            )
              throw Error(a(349));
            0 !== (30 & li) || Ci(n, t, o);
          }
          return o;
        }
        function Ci(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ri(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), ji(t) && Ni(e);
        }
        function Ti(e, t, n) {
          return n(function () {
            ji(t) && Ni(e);
          });
        }
        function ji(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ni(e) {
          var t = La(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Pi(e) {
          var t = bi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Zi.bind(null, si, e)),
            [t.memoizedState, e]
          );
        }
        function Oi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Mi() {
          return xi().memoizedState;
        }
        function Bi(e, t, n, r) {
          var o = bi();
          (si.flags |= e),
            (o.memoizedState = Oi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ii(e, t, n, r) {
          var o = xi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ui) {
            var i = ui.memoizedState;
            if (((a = i.destroy), null !== r && gi(r, i.deps)))
              return void (o.memoizedState = Oi(t, n, a, r));
          }
          (si.flags |= e), (o.memoizedState = Oi(1 | t, n, a, r));
        }
        function Li(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function Fi(e, t) {
          return Ii(2048, 8, e, t);
        }
        function zi(e, t) {
          return Ii(4, 2, e, t);
        }
        function Di(e, t) {
          return Ii(4, 4, e, t);
        }
        function Ui(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Vi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ii(4, 4, Ui.bind(null, t, e), n)
          );
        }
        function Wi() {}
        function Hi(e, t) {
          var n = xi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Qi(e, t) {
          var n = xi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function qi(e, t, n) {
          return 0 === (21 & li)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (si.lanes |= n), (Fs |= n), (e.baseState = !0)),
              t);
        }
        function Gi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ii.transition;
          ii.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ii.transition = r);
          }
        }
        function Ki() {
          return xi().memoizedState;
        }
        function Yi(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ji(e))
          )
            Xi(t, n);
          else if (null !== (n = Ia(e, t, n, r))) {
            ru(n, e, r, tu()), _i(n, t, r);
          }
        }
        function Zi(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ji(e)) Xi(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), sr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((o.next = o), Ba(t))
                      : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Ia(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), _i(n, t, r));
          }
        }
        function Ji(e) {
          var t = e.alternate;
          return e === si || (null !== t && t === si);
        }
        function Xi(e, t) {
          pi = di = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function _i(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var $i = {
            readContext: Oa,
            useCallback: mi,
            useContext: mi,
            useEffect: mi,
            useImperativeHandle: mi,
            useInsertionEffect: mi,
            useLayoutEffect: mi,
            useMemo: mi,
            useReducer: mi,
            useRef: mi,
            useState: mi,
            useDebugValue: mi,
            useDeferredValue: mi,
            useTransition: mi,
            useMutableSource: mi,
            useSyncExternalStore: mi,
            useId: mi,
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Oa,
            useCallback: function (e, t) {
              return (bi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oa,
            useEffect: Li,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bi(4194308, 4, Ui.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = bi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = bi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Yi.bind(null, si, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (bi().memoizedState = e);
            },
            useState: Pi,
            useDebugValue: Wi,
            useDeferredValue: function (e) {
              return (bi().memoizedState = e);
            },
            useTransition: function () {
              var e = Pi(!1),
                t = e[0];
              return (
                (e = Gi.bind(null, e[1])), (bi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = si,
                o = bi();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ns)) throw Error(a(349));
                0 !== (30 & li) || Ci(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Li(Ti.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Oi(9, Ri.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = bi(),
                t = Ns.identifierPrefix;
              if (ia) {
                var n = $o;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (_o & ~(1 << (32 - it(_o) - 1))).toString(32) + n)),
                  0 < (n = fi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = hi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Oa,
            useCallback: Hi,
            useContext: Oa,
            useEffect: Fi,
            useImperativeHandle: Vi,
            useInsertionEffect: zi,
            useLayoutEffect: Di,
            useMemo: Qi,
            useReducer: Si,
            useRef: Mi,
            useState: function () {
              return Si(wi);
            },
            useDebugValue: Wi,
            useDeferredValue: function (e) {
              return qi(xi(), ui.memoizedState, e);
            },
            useTransition: function () {
              return [Si(wi)[0], xi().memoizedState];
            },
            useMutableSource: Ai,
            useSyncExternalStore: Ei,
            useId: Ki,
            unstable_isNewReconciler: !1,
          },
          nl = {
            readContext: Oa,
            useCallback: Hi,
            useContext: Oa,
            useEffect: Fi,
            useImperativeHandle: Vi,
            useInsertionEffect: zi,
            useLayoutEffect: Di,
            useMemo: Qi,
            useReducer: ki,
            useRef: Mi,
            useState: function () {
              return ki(wi);
            },
            useDebugValue: Wi,
            useDeferredValue: function (e) {
              var t = xi();
              return null === ui
                ? (t.memoizedState = e)
                : qi(t, ui.memoizedState, e);
            },
            useTransition: function () {
              return [ki(wi)[0], xi().memoizedState];
            },
            useMutableSource: Ai,
            useSyncExternalStore: Ei,
            useId: Ki,
            unstable_isNewReconciler: !1,
          };
        function rl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ol(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Ua(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Va(e, a, o)) && (ru(t, e, o, r), Wa(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Ua(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Va(e, a, o)) && (ru(t, e, o, r), Wa(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Ua(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Va(e, o, r)) && (ru(t, e, r, n), Wa(t, e, r));
          },
        };
        function il(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(o, a);
        }
        function ll(e, t, n) {
          var r = !1,
            o = jo,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Oa(a))
              : ((o = Bo(t) ? Oo : No.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Mo(e, o)
                  : jo)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function sl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function ul(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = {}), za(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = Oa(a))
            : ((a = Bo(t) ? Oo : No.current), (o.context = Mo(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (ol(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && al.enqueueReplaceState(o, o.state, null),
              Qa(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function pl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ua(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              qs || ((qs = !0), (Gs = r)), pl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Ua(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                pl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                pl(0, t),
                  "function" !== typeof r &&
                    (null === Ks ? (Ks = new Set([this])) : Ks.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ua(-1, 1)).tag = 2), Va(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? ka(t, null, n, r) : Sa(t, e.child, n, r);
        }
        function Sl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Pa(t, o),
            (r = yi(e, t, n, r, a, o)),
            (n = vi()),
            null === e || xl
              ? (ia && n && na(t), (t.flags |= 1), wl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                ql(e, t, o))
          );
        }
        function kl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Mu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Al(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return ql(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Bu(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Al(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), ql(e, t, o);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return Rl(e, t, n, r, o);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                To(Bs, Ms),
                (Ms |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  To(Bs, Ms),
                  (Ms |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                To(Bs, Ms),
                (Ms |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              To(Bs, Ms),
              (Ms |= r);
          return wl(e, t, o, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Rl(e, t, n, r, o) {
          var a = Bo(n) ? Oo : No.current;
          return (
            (a = Mo(t, a)),
            Pa(t, o),
            (n = yi(e, t, n, r, a, o)),
            (r = vi()),
            null === e || xl
              ? (ia && r && na(t), (t.flags |= 1), wl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                ql(e, t, o))
          );
        }
        function Tl(e, t, n, r, o) {
          if (Bo(n)) {
            var a = !0;
            zo(t);
          } else a = !1;
          if ((Pa(t, o), null === t.stateNode))
            Ql(e, t), ll(t, n, r), ul(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Oa(u))
              : (u = Mo(t, (u = Bo(n) ? Oo : No.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && sl(t, i, r, u)),
              (Fa = !1);
            var p = t.memoizedState;
            (i.state = p),
              Qa(t, r, i, o),
              (s = t.memoizedState),
              l !== r || p !== s || Po.current || Fa
                ? ("function" === typeof c &&
                    (ol(t, n, c, r), (s = t.memoizedState)),
                  (l = Fa || il(t, n, l, r, p, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Da(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : rl(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (p = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Oa(s))
                : (s = Mo(t, (s = Bo(n) ? Oo : No.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || p !== s) && sl(t, i, r, s)),
              (Fa = !1),
              (p = t.memoizedState),
              (i.state = p),
              Qa(t, r, i, o);
            var h = t.memoizedState;
            l !== d || p !== h || Po.current || Fa
              ? ("function" === typeof f &&
                  (ol(t, n, f, r), (h = t.memoizedState)),
                (u = Fa || il(t, n, u, r, p, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return jl(e, t, n, r, a, o);
        }
        function jl(e, t, n, r, o, a) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Do(t, n, !1), ql(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Sa(t, e.child, null, a)),
                (t.child = Sa(t, null, l, a)))
              : wl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Do(t, n, !0),
            t.child
          );
        }
        function Nl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Lo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Lo(0, t.context, !1),
            Xa(e, t.containerInfo);
        }
        function Pl(e, t, n, r, o) {
          return ma(), ga(o), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Ol,
          Ml,
          Bl,
          Il,
          Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ti.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            To(ti, 1 & i),
            null === e)
          )
            return (
              da(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Fu(s, o, 0, null)),
                      (e = Lu(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Fl(n)),
                      (t.memoizedState = Ll),
                      e)
                    : Dl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ul(e, t, l, (r = dl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Fu(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = Lu(i, o, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Sa(t, e.child, null, l),
                    (t.child.memoizedState = Fl(l)),
                    (t.memoizedState = Ll),
                    i);
              if (0 === (1 & t.mode)) return Ul(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Ul(e, t, l, (r = dl((i = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Ns)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), La(e, o), ru(r, e, o, -1));
                }
                return gu(), Ul(e, t, l, (r = dl(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (aa = co(o.nextSibling)),
                  (oa = t),
                  (ia = !0),
                  (la = null),
                  null !== e &&
                    ((Zo[Jo++] = _o),
                    (Zo[Jo++] = $o),
                    (Zo[Jo++] = Xo),
                    (_o = e.id),
                    ($o = e.overflow),
                    (Xo = t)),
                  (t = Dl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, r, i, n);
          if (l) {
            (l = o.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Bu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Bu(r, l))
                : ((l = Lu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Fl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ll),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Bu(l, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Dl(e, t) {
          return (
            ((t = Fu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ul(e, t, n, r) {
          return (
            null !== r && ga(r),
            Sa(t, e.child, null, n),
            ((e = Dl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Na(e.return, t, n);
        }
        function Wl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = ti.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vl(e, n, t);
                else if (19 === e.tag) Vl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((To(ti, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ni(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Wl(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ni(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Wl(t, !0, n, null, a);
                break;
              case "together":
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ql(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function ql(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Bu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Bu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Gl(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Kl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((ra(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Kl(t), null;
            case 1:
            case 17:
              return Bo(t.type) && Io(), Kl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                _a(),
                Ro(Po),
                Ro(No),
                oi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== la && (lu(la), (la = null)))),
                Ml(e, t),
                Kl(t),
                null
              );
            case 5:
              ei(t);
              var o = Ja(Za.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Bl(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Kl(t), null;
                }
                if (((e = Ja(Ka.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[ho] = t), (r[mo] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Lr.length; o++) Ur(Lr[o], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      J(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Ur("invalid", r);
                  }
                  for (var s in (ve(n, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              $r(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              $r(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), $(r, i, !0);
                      break;
                    case "textarea":
                      G(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = eo);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[ho] = t),
                    (e[mo] = r),
                    Ol(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Lr.length; o++) Ur(Lr[o], e);
                        o = r;
                        break;
                      case "source":
                        Ur("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (o = r);
                        break;
                      case "details":
                        Ur("toggle", e), (o = r);
                        break;
                      case "input":
                        J(e, r), (o = Z(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = F({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && pe(e, c)
                            : "number" === typeof c && pe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ur("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        G(e), $(e, r, !1);
                        break;
                      case "textarea":
                        G(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + Q(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = eo);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Kl(t), null;
            case 6:
              if (e && null != t.stateNode) Il(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Ja(Za.current)), Ja(Ka.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ho] = t),
                    (i = r.nodeValue !== n) && null !== (e = oa))
                  )
                    switch (e.tag) {
                      case 3:
                        $r(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          $r(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ho] = t),
                    (t.stateNode = r);
              }
              return Kl(t), null;
            case 13:
              if (
                (Ro(ti),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== aa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  ha(), ma(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[ho] = t;
                  } else
                    ma(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Kl(t), (i = !1);
                } else null !== la && (lu(la), (la = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ti.current)
                        ? 0 === Is && (Is = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Kl(t),
                  null);
            case 4:
              return (
                _a(),
                Ml(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                Kl(t),
                null
              );
            case 10:
              return ja(t.type._context), Kl(t), null;
            case 19:
              if ((Ro(ti), null === (i = t.memoizedState))) return Kl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Gl(i, !1);
                else {
                  if (0 !== Is || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ni(e))) {
                        for (
                          t.flags |= 128,
                            Gl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return To(ti, (1 & ti.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Hs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Gl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ni(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Gl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ia)
                    )
                      return Kl(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Gl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ti.current),
                  To(ti, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Kl(t), null);
            case 22:
            case 23:
              return (
                pu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ms) &&
                    (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Kl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Zl(e, t) {
          switch ((ra(t), t.tag)) {
            case 1:
              return (
                Bo(t.type) && Io(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                _a(),
                Ro(Po),
                Ro(No),
                oi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ei(t), null;
            case 13:
              if (
                (Ro(ti),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ma();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ro(ti), null;
            case 4:
              return _a(), null;
            case 10:
              return ja(t.type._context), null;
            case 22:
            case 23:
              return pu(), null;
            default:
              return null;
          }
        }
        (Ol = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ml = function () {}),
          (Bl = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Ja(Ka.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = Z(e, o)), (r = Z(e, r)), (i = []);
                  break;
                case "select":
                  (o = F({}, o, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = eo);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var s = o[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ur("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Il = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jl = !1,
          Xl = !1,
          _l = "function" === typeof WeakSet ? WeakSet : Set,
          $l = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function os(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ho],
              delete t[mo],
              delete t[yo],
              delete t[vo],
              delete t[bo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = eo));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          ps = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || es(n, t);
            case 6:
              var r = ds,
                o = ps;
              (ds = null),
                fs(e, t, n),
                (ps = o),
                null !== (ds = r) &&
                  (ps
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (ps
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? uo(e.parentNode, n)
                      : 1 === e.nodeType && uo(e, n),
                    Wt(e))
                  : uo(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (o = ps),
                (ds = n.stateNode.containerInfo),
                (ps = !0),
                fs(e, t, n),
                (ds = r),
                (ps = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Xl = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new _l()),
              t.forEach(function (t) {
                var r = ju.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (ps = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (ps = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(a(160));
                hs(i, l, o), (ds = null), (ps = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), os(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                vs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  pe(o, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(o, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        p = u[l + 1];
                      "style" === d
                        ? ge(o, p)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, p)
                        : "children" === d
                        ? pe(o, p)
                        : b(o, d, p, c);
                    }
                    switch (s) {
                      case "input":
                        _(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : f !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[mo] = i;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), vs(e);
              break;
            case 13:
              gs(t, e),
                vs(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Ws = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || d), gs(t, e), (Xl = c))
                  : gs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for ($l = e, d = e.child; null !== d; ) {
                    for (p = $l = d; null !== $l; ) {
                      switch (((h = (f = $l).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, f, f.return);
                          break;
                        case 1:
                          es(f, f.return);
                          var m = f.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            Ss(p);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = f), ($l = h)) : Ss(p);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === d) {
                      d = p;
                      try {
                        (o = p.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = p.stateNode),
                              (l =
                                void 0 !== (u = p.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === d)
                      try {
                        p.stateNode.nodeValue = c ? "" : p.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    d === p && (d = null), (p = p.return);
                  }
                  d === p && (d = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (pe(o, ""), (r.flags &= -33)),
                    cs(e, ss(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          ($l = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $l; ) {
            var o = $l,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Jl;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Jl;
                var u = Xl;
                if (((Jl = i), (Xl = s) && !u))
                  for ($l = o; null !== $l; )
                    (s = (i = $l).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(o)
                        : null !== s
                        ? ((s.return = i), ($l = s))
                        : ks(o);
                for (; null !== a; ) ($l = a), xs(a, t, n), (a = a.sibling);
                ($l = o), (Jl = l), (Xl = u);
              }
              ws(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), ($l = a))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || os(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : rl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && qa(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        qa(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var p = d.dehydrated;
                            null !== p && Wt(p);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Xl || (512 & t.flags && as(t));
              } catch (zn) {
                Eu(t, t.return, zn);
              }
            }
            if (t === e) {
              $l = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function Ss(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (t === e) {
              $l = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function ks(e) {
          for (; null !== $l; ) {
            var t = $l;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    os(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              $l = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), ($l = l);
              break;
            }
            $l = t.return;
          }
        }
        var As,
          Es = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          Rs = x.ReactCurrentOwner,
          Ts = x.ReactCurrentBatchConfig,
          js = 0,
          Ns = null,
          Ps = null,
          Os = 0,
          Ms = 0,
          Bs = Co(0),
          Is = 0,
          Ls = null,
          Fs = 0,
          zs = 0,
          Ds = 0,
          Us = null,
          Vs = null,
          Ws = 0,
          Hs = 1 / 0,
          Qs = null,
          qs = !1,
          Gs = null,
          Ks = null,
          Ys = !1,
          Zs = null,
          Js = 0,
          Xs = 0,
          _s = null,
          $s = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & js) ? Xe() : -1 !== $s ? $s : ($s = Xe());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & js) && 0 !== Os
            ? Os & -Os
            : null !== ya.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (_s = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & js) && e === Ns) ||
              (e === Ns && (0 === (2 & js) && (zs |= n), 4 === Is && su(e, Os)),
              ou(e, r),
              1 === n &&
                0 === js &&
                0 === (1 & t.mode) &&
                ((Hs = Xe() + 500), Vo && Qo()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = ft(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = pt(e, e === Ns ? Os : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Vo = !0), Ho(e);
                  })(uu.bind(null, e))
                : Ho(uu.bind(null, e)),
                lo(function () {
                  0 === (6 & js) && Qo();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if ((($s = -1), (eu = 0), 0 !== (6 & js))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = pt(e, e === Ns ? Os : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var o = js;
            js |= 2;
            var i = mu();
            for (
              (Ns === e && Os === t) ||
              ((Qs = null), (Hs = Xe() + 500), fu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            Ta(),
              (Cs.current = i),
              (js = o),
              null !== Ps ? (t = 0) : ((Ns = null), (Os = 0), (t = Is));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = Ls), fu(e, 0), su(e, r), ou(e, Xe()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Ls), fu(e, 0), su(e, r), ou(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Su(e, Vs, Qs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Ws + 500 - Xe()))
                  ) {
                    if (0 !== pt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = oo(Su.bind(null, e, Vs, Qs), t);
                    break;
                  }
                  Su(e, Vs, Qs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = oo(Su.bind(null, e, Vs, Qs), r);
                    break;
                  }
                  Su(e, Vs, Qs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Us;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Vs), (Vs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Vs ? (Vs = e) : Vs.push.apply(Vs, e);
        }
        function su(e, t) {
          for (
            t &= ~Ds,
              t &= ~zs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & js)) throw Error(a(327));
          ku();
          var t = pt(e, 0);
          if (0 === (1 & t)) return ou(e, Xe()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Ls), fu(e, 0), su(e, t), ou(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Vs, Qs),
            ou(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var n = js;
          js |= 1;
          try {
            return e(t);
          } finally {
            0 === (js = n) && ((Hs = Xe() + 500), Vo && Qo());
          }
        }
        function du(e) {
          null !== Zs && 0 === Zs.tag && 0 === (6 & js) && ku();
          var t = js;
          js |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (js = t)) && Qo();
          }
        }
        function pu() {
          (Ms = Bs.current), Ro(Bs);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ao(n)), null !== Ps))
            for (n = Ps.return; null !== n; ) {
              var r = n;
              switch ((ra(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Io();
                  break;
                case 3:
                  _a(), Ro(Po), Ro(No), oi();
                  break;
                case 5:
                  ei(r);
                  break;
                case 4:
                  _a();
                  break;
                case 13:
                case 19:
                  Ro(ti);
                  break;
                case 10:
                  ja(r.type._context);
                  break;
                case 22:
                case 23:
                  pu();
              }
              n = n.return;
            }
          if (
            ((Ns = e),
            (Ps = e = Bu(e.current, null)),
            (Os = Ms = t),
            (Is = 0),
            (Ls = null),
            (Ds = zs = Fs = 0),
            (Vs = Us = null),
            null !== Ma)
          ) {
            for (t = 0; t < Ma.length; t++)
              if (null !== (r = (n = Ma[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Ma = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ps;
            try {
              if ((Ta(), (ai.current = $i), di)) {
                for (var r = si.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                di = !1;
              }
              if (
                ((li = 0),
                (ci = ui = si = null),
                (pi = !1),
                (fi = 0),
                (Rs.current = null),
                null === n || null === n.return)
              ) {
                (Is = 1), (Ls = t), (Ps = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Os),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    p = d.tag;
                  if (0 === (1 & d.mode) && (0 === p || 11 === p || 15 === p)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && gl(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & s.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vl(y, l, s, 0, t),
                      ga(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Is && (Is = 2),
                  null === Us ? (Us = [i]) : Us.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ha(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ks || !Ks.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ha(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (x) {
              (t = x), Ps === n && null !== n && (Ps = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Cs.current;
          return (Cs.current = $i), null === e ? $i : e;
        }
        function gu() {
          (0 !== Is && 3 !== Is && 2 !== Is) || (Is = 4),
            null === Ns ||
              (0 === (268435455 & Fs) && 0 === (268435455 & zs)) ||
              su(Ns, Os);
        }
        function yu(e, t) {
          var n = js;
          js |= 2;
          var r = mu();
          for ((Ns === e && Os === t) || ((Qs = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((Ta(), (js = n), (Cs.current = r), null !== Ps))
            throw Error(a(261));
          return (Ns = null), (Os = 0), Is;
        }
        function vu() {
          for (; null !== Ps; ) xu(Ps);
        }
        function bu() {
          for (; null !== Ps && !Ze(); ) xu(Ps);
        }
        function xu(e) {
          var t = As(e.alternate, e, Ms);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ps = t),
            (Rs.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, Ms))) return void (Ps = n);
            } else {
              if (null !== (n = Zl(n, t)))
                return (n.flags &= 32767), void (Ps = n);
              if (null === e) return (Is = 6), void (Ps = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ps = t);
            Ps = t = e;
          } while (null !== t);
          0 === Is && (Is = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            o = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Zs);
                if (0 !== (6 & js)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Ns && ((Ps = Ns = null), (Os = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Nu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ts.transition), (Ts.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = js;
                  (js |= 4),
                    (Rs.current = null),
                    (function (e, t) {
                      if (((to = Qt), hr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                p = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  p !== n ||
                                    (0 !== o && 3 !== p.nodeType) ||
                                    (s = l + o),
                                    p !== i ||
                                      (0 !== r && 3 !== p.nodeType) ||
                                      (u = l + r),
                                    3 === p.nodeType &&
                                      (l += p.nodeValue.length),
                                    null !== (h = p.firstChild);

                                )
                                  (f = p), (p = h);
                                for (;;) {
                                  if (p === e) break t;
                                  if (
                                    (f === n && ++c === o && (s = l),
                                    f === i && ++d === r && (u = l),
                                    null !== (h = p.nextSibling))
                                  )
                                    break;
                                  f = (p = f).parentNode;
                                }
                                p = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        no = { focusedElem: e, selectionRange: n },
                          Qt = !1,
                          $l = t;
                        null !== $l;

                      )
                        if (
                          ((e = (t = $l).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($l = e);
                        else
                          for (; null !== $l; ) {
                            t = $l;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : rl(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Eu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($l = e);
                              break;
                            }
                            $l = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    ys(n, e),
                    mr(no),
                    (Qt = !!to),
                    (no = to = null),
                    (e.current = n),
                    bs(n, e, o),
                    Je(),
                    (js = s),
                    (bt = l),
                    (Ts.transition = i);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (Zs = e), (Js = o)),
                  (i = e.pendingLanes),
                  0 === i && (Ks = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (qs) throw ((qs = !1), (e = Gs), (Gs = null), e);
                0 !== (1 & Js) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === _s
                      ? Xs++
                      : ((Xs = 0), (_s = e))
                    : (Xs = 0),
                  Qo();
              })(e, t, n, r);
          } finally {
            (Ts.transition = o), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Zs) {
            var e = xt(Js),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Zs))
                var r = !1;
              else {
                if (((e = Zs), (Zs = null), (Js = 0), 0 !== (6 & js)))
                  throw Error(a(331));
                var o = js;
                for (js |= 4, $l = e.current; null !== $l; ) {
                  var i = $l,
                    l = i.child;
                  if (0 !== (16 & $l.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for ($l = c; null !== $l; ) {
                          var d = $l;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var p = d.child;
                          if (null !== p) (p.return = d), ($l = p);
                          else
                            for (; null !== $l; ) {
                              var f = (d = $l).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                $l = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = h), ($l = f);
                                break;
                              }
                              $l = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      $l = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), ($l = l);
                  else
                    e: for (; null !== $l; ) {
                      if (0 !== (2048 & (i = $l).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), ($l = v);
                        break e;
                      }
                      $l = i.return;
                    }
                }
                var b = e.current;
                for ($l = b; null !== $l; ) {
                  var x = (l = $l).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), ($l = x);
                  else
                    e: for (l = b; null !== $l; ) {
                      if (0 !== (2048 & (s = $l).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s);
                          }
                        } catch (S) {
                          Eu(s, s.return, S);
                        }
                      if (s === l) {
                        $l = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), ($l = w);
                        break e;
                      }
                      $l = s.return;
                    }
                }
                if (
                  ((js = o),
                  Qo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function Au(e, t, n) {
          (e = Va(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), ou(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Au(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Au(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ks || !Ks.has(r)))
                ) {
                  (t = Va(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ns === e &&
              (Os & n) === n &&
              (4 === Is ||
              (3 === Is && (130023424 & Os) === Os && 500 > Xe() - Ws)
                ? fu(e, 0)
                : (Ds |= n)),
            ou(e, t);
        }
        function Ru(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = La(e, t)) && (yt(e, t, n), ou(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ru(e, n);
        }
        function ju(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Ru(e, n);
        }
        function Nu(e, t) {
          return Ke(e, t);
        }
        function Pu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Bu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Mu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Lu(n.children, o, i, t);
              case A:
                (l = 8), (o |= 8);
                break;
              case E:
                return (
                  ((e = Ou(12, n, t, 2 | o)).elementType = E), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = Ou(13, n, t, o)).elementType = j), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = Ou(19, n, t, o)).elementType = N), (e.lanes = i), e
                );
              case M:
                return Fu(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case R:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case P:
                      l = 14;
                      break e;
                    case O:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ou(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Lu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function Fu(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zu(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function Du(e, t, n) {
          return (
            ((t = Ou(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vu(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Uu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ou(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            za(a),
            e
          );
        }
        function Wu(e) {
          if (!e) return jo;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Bo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Bo(n)) return Fo(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = Vu(n, r, !0, e, 0, a, 0, l, s)).context = Wu(null)),
            (n = e.current),
            ((a = Ua((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Va(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ou(e, r),
            e
          );
        }
        function Qu(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ua(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Va(o, t, i)) && (ru(e, o, i, a), Wa(e, o, i)),
            i
          );
        }
        function qu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Gu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ku(e, t) {
          Gu(e, t), (e = e.alternate) && Gu(e, t);
        }
        As = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Po.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Nl(t), ma();
                        break;
                      case 5:
                        $a(t);
                        break;
                      case 1:
                        Bo(t.type) && zo(t);
                        break;
                      case 4:
                        Xa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        To(Aa, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (To(ti, 1 & ti.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? zl(e, t, n)
                            : (To(ti, 1 & ti.current),
                              null !== (e = ql(e, t, n)) ? e.sibling : null);
                        To(ti, 1 & ti.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          To(ti, ti.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return ql(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ia && 0 !== (1048576 & t.flags) && ta(t, Yo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ql(e, t), (e = t.pendingProps);
              var o = Mo(t, No.current);
              Pa(t, n), (o = yi(null, t, r, e, o, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Bo(r) ? ((i = !0), zo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    za(t),
                    (o.updater = al),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    ul(t, r, e, n),
                    (t = jl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ia && i && na(t),
                    wl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ql(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = rl(r, e)),
                  o)
                ) {
                  case 0:
                    t = Rl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, rl(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Rl(e, t, r, (o = t.elementType === r ? o : rl(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Tl(e, t, r, (o = t.elementType === r ? o : rl(r, o)), n)
              );
            case 3:
              e: {
                if ((Nl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Da(e, t),
                  Qa(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Pl(e, t, r, n, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Pl(e, t, r, n, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    aa = co(t.stateNode.containerInfo.firstChild),
                      oa = t,
                      ia = !0,
                      la = null,
                      n = ka(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ma(), r === o)) {
                    t = ql(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                $a(t),
                null === e && da(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                ro(r, o)
                  ? (l = null)
                  : null !== i && ro(r, i) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && da(t), null;
            case 13:
              return zl(e, t, n);
            case 4:
              return (
                Xa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Sa(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Sl(e, t, r, (o = t.elementType === r ? o : rl(r, o)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  To(Aa, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (sr(i.value, l)) {
                    if (i.children === o.children && !Po.current) {
                      t = ql(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ua(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Na(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Na(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Pa(t, n),
                (r = r((o = Oa(o)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = rl((r = t.type), t.pendingProps)),
                kl(e, t, r, (o = rl(r.type, o)), n)
              );
            case 15:
              return Al(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : rl(r, o)),
                Ql(e, t),
                (t.tag = 1),
                Bo(r) ? ((e = !0), zo(t)) : (e = !1),
                Pa(t, n),
                ll(t, r, o),
                ul(t, r, o, n),
                jl(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Yu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Zu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function _u(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = qu(i);
                l.call(e);
              };
            }
            Qu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = qu(i);
                    a.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = i),
                  (e[go] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = qu(s);
                  l.call(e);
                };
              }
              var s = Vu(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = s),
                (e[go] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Qu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, o, r);
          return qu(i);
        }
        (Ju.prototype.render = Zu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Qu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Zu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Qu(null, e, null, null);
                }),
                  (t[go] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = At();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ou(t, Xe()),
                    0 === (6 & js) && ((Hs = Xe() + 500), Qo()));
                }
                break;
              case 13:
                du(function () {
                  var t = La(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Ku(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = La(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Ku(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = La(e, t);
              if (null !== n) ru(n, e, t, tu());
              Ku(e, t);
            }
          }),
          (At = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((_(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      K(r), _(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = cu),
          (je = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, So, ko, Ce, Re, cu],
          },
          nc = {
            findFiberByHostInstance: xo,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Yu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Vu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[go] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Zu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!_u(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Yu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[go] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!_u(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!_u(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[go] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!_u(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var x = (b.prototype = new v());
        (x.constructor = b), m(x, y.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          A = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, o) && !A.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: k.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var R = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === a ? "." + T(s, 0) : a),
              w(i)
                ? ((o = ""),
                  null != e && (o = e.replace(R, "$&/") + "/"),
                  j(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(R, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + T((l = e[u]), u);
              s += j(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += j((l = l.value), t, o, (c = a + T(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          M = { transition: null },
          B = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: k,
          };
        function I() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
          (t.act = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !A.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = I),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          p = null,
          f = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), M(S);
            else {
              var t = r(c);
              null !== t && B(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), g && ((g = !1), v(C), (C = -1)), (h = !0);
          var a = f;
          try {
            for (
              x(n), p = r(u);
              null !== p && (!(p.expirationTime > n) || (e && !j()));

            ) {
              var i = p.callback;
              if ("function" === typeof i) {
                (p.callback = null), (f = p.priorityLevel);
                var l = i(p.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (p.callback = l)
                    : p === r(u) && o(u),
                  x(n);
              } else o(u);
              p = r(u);
            }
            if (null !== p) var s = !0;
            else {
              var d = r(c);
              null !== d && B(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (p = null), (f = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          A = !1,
          E = null,
          C = -1,
          R = 5,
          T = -1;
        function j() {
          return !(t.unstable_now() - T < R);
        }
        function N() {
          if (null !== E) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? k() : ((A = !1), (E = null));
            }
          } else A = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            O = P.port2;
          (P.port1.onmessage = N),
            (k = function () {
              O.postMessage(null);
            });
        } else
          k = function () {
            y(N, 0);
          };
        function M(e) {
          (E = e), A || ((A = !0), k());
        }
        function B(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), M(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (R = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v(C), (C = -1)) : (g = !0), B(w, a - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), M(S))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & o && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(a, i), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".0c408937.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "leaderboard:";
      n.l = (r, o, a, i) => {
        if (e[r]) e[r].push(o);
        else {
          var l, s;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + a
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = r)),
            (e[r] = [o]);
          var p = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(f);
              var o = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = p.bind(null, l.onerror)),
            (l.onload = p.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "./"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var a = new Promise((n, r) => (o = e[t] = [n, r]));
            r.push((o[2] = a));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = i),
                    o[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var o,
            a,
            i = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++)
            (a = i[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkleaderboard = self.webpackChunkleaderboard || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = {};
  n.r(r),
    n.d(r, {
      hasBrowserEnv: () => At,
      hasStandardBrowserEnv: () => Ct,
      hasStandardBrowserWebWorkerEnv: () => Rt,
      navigator: () => Et,
      origin: () => Tt,
    });
  var o,
    a = n(43),
    i = n.t(a, 2),
    l = n(391),
    s = n(950),
    u = n.t(s, 2);
  function c() {
    return (
      (c = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      c.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(o || (o = {}));
  const d = "popstate";
  function p(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function f(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function h(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function m(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      c(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? y(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function g(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function y(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function v(e, t, n, r) {
    void 0 === r && (r = {});
    let { window: a = document.defaultView, v5Compat: i = !1 } = r,
      l = a.history,
      s = o.Pop,
      u = null,
      f = y();
    function y() {
      return (l.state || { idx: null }).idx;
    }
    function v() {
      s = o.Pop;
      let e = y(),
        t = null == e ? null : e - f;
      (f = e), u && u({ action: s, location: x.location, delta: t });
    }
    function b(e) {
      let t =
          "null" !== a.location.origin ? a.location.origin : a.location.href,
        n = "string" === typeof e ? e : g(e);
      return (
        (n = n.replace(/ $/, "%20")),
        p(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == f && ((f = 0), l.replaceState(c({}, l.state, { idx: f }), ""));
    let x = {
      get action() {
        return s;
      },
      get location() {
        return e(a, l);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(d, v),
          (u = e),
          () => {
            a.removeEventListener(d, v), (u = null);
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        s = o.Push;
        let r = m(x.location, e, t);
        n && n(r, e), (f = y() + 1);
        let c = h(r, f),
          d = x.createHref(r);
        try {
          l.pushState(c, "", d);
        } catch (p) {
          if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
          a.location.assign(d);
        }
        i && u && u({ action: s, location: x.location, delta: 1 });
      },
      replace: function (e, t) {
        s = o.Replace;
        let r = m(x.location, e, t);
        n && n(r, e), (f = y());
        let a = h(r, f),
          c = x.createHref(r);
        l.replaceState(a, "", c),
          i && u && u({ action: s, location: x.location, delta: 0 });
      },
      go: (e) => l.go(e),
    };
    return x;
  }
  var b;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(b || (b = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function x(e, t, n) {
    return void 0 === n && (n = "/"), w(e, t, n, !1);
  }
  function w(e, t, n, r) {
    let o = I(("string" === typeof t ? y(t) : t).pathname || "/", n);
    if (null == o) return null;
    let a = S(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(a);
    let i = null;
    for (let l = 0; null == i && l < a.length; ++l) {
      let e = B(o);
      i = O(a[l], e, r);
    }
    return i;
  }
  function S(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let o = (e, o, a) => {
      let i = {
        relativePath: void 0 === a ? e.path || "" : a,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: o,
        route: e,
      };
      i.relativePath.startsWith("/") &&
        (p(
          i.relativePath.startsWith(r),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let l = L([r, i.relativePath]),
        s = n.concat(i);
      e.children &&
        e.children.length > 0 &&
        (p(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            l +
            '".'
        ),
        S(e.children, t, s, l)),
        (null != e.path || e.index) &&
          t.push({ path: l, score: P(l, e.index), routesMeta: s });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of k(e.path)) o(e, t, r);
        else o(e, t);
      }),
      t
    );
  }
  function k(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      a = n.replace(/\?$/, "");
    if (0 === r.length) return o ? [a, ""] : [a];
    let i = k(r.join("/")),
      l = [];
    return (
      l.push(...i.map((e) => ("" === e ? a : [a, e].join("/")))),
      o && l.push(...i),
      l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const A = /^:[\w-]+$/,
    E = 3,
    C = 2,
    R = 1,
    T = 10,
    j = -2,
    N = (e) => "*" === e;
  function P(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(N) && (r += j),
      t && (r += C),
      n
        .filter((e) => !N(e))
        .reduce((e, t) => e + (A.test(t) ? E : "" === t ? R : T), r)
    );
  }
  function O(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      o = {},
      a = "/",
      i = [];
    for (let l = 0; l < r.length; ++l) {
      let e = r[l],
        s = l === r.length - 1,
        u = "/" === a ? t : t.slice(a.length) || "/",
        c = M(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
          u
        ),
        d = e.route;
      if (
        (!c &&
          s &&
          n &&
          !r[r.length - 1].route.index &&
          (c = M(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u
          )),
        !c)
      )
        return null;
      Object.assign(o, c.params),
        i.push({
          params: o,
          pathname: L([a, c.pathname]),
          pathnameBase: F(L([a, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (a = L([a, c.pathnameBase]));
    }
    return i;
  }
  function M(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        f(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          o =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (o += "\\/*$")
          : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
        let a = new RegExp(o, t ? void 0 : "i");
        return [a, r];
      })(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let a = o[0],
      i = a.replace(/(.)\/+$/, "$1"),
      l = o.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: o } = t;
        if ("*" === r) {
          let e = l[n] || "";
          i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const s = l[n];
        return (e[r] = o && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: a,
      pathnameBase: i,
      pattern: e,
    };
  }
  function B(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        f(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function I(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  const L = (e) => e.join("/").replace(/\/\/+/g, "/"),
    F = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  Error;
  function z(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const D = ["post", "put", "patch", "delete"],
    U = (new Set(D), ["get", ...D]);
  new Set(U), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function V() {
    return (
      (V = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      V.apply(this, arguments)
    );
  }
  const W = a.createContext(null);
  const H = a.createContext(null);
  const Q = a.createContext(null);
  const q = a.createContext(null);
  const G = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const K = a.createContext(null);
  function Y() {
    return null != a.useContext(q);
  }
  function Z() {
    return Y() || p(!1), a.useContext(q).location;
  }
  function J(e, t, n, r) {
    Y() || p(!1);
    let { navigator: i } = a.useContext(Q),
      { matches: l } = a.useContext(G),
      s = l[l.length - 1],
      u = s ? s.params : {},
      c = (s && s.pathname, s ? s.pathnameBase : "/");
    s && s.route;
    let d,
      f = Z();
    if (t) {
      var h;
      let e = "string" === typeof t ? y(t) : t;
      "/" === c ||
        (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
        p(!1),
        (d = e);
    } else d = f;
    let m = d.pathname || "/",
      g = m;
    if ("/" !== c) {
      let e = c.replace(/^\//, "").split("/");
      g = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let v = x(e, { pathname: g });
    let b = te(
      v &&
        v.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: L([
              c,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? c
                : L([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
    return t && b
      ? a.createElement(
          q.Provider,
          {
            value: {
              location: V(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                d
              ),
              navigationType: o.Pop,
            },
          },
          b
        )
      : b;
  }
  function X() {
    let e = (function () {
        var e;
        let t = a.useContext(K),
          n = re(ne.UseRouteError),
          r = oe(ne.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = z(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: r };
    return a.createElement(
      a.Fragment,
      null,
      a.createElement("h2", null, "Unexpected Application Error!"),
      a.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? a.createElement("pre", { style: o }, n) : null,
      null
    );
  }
  const _ = a.createElement(X, null);
  class $ extends a.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? a.createElement(
            G.Provider,
            { value: this.props.routeContext },
            a.createElement(K.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function ee(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = a.useContext(W);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(G.Provider, { value: t }, r)
    );
  }
  function te(e, t, n, r) {
    var o;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (
          !(
            null != (i = r) &&
            i.v7_partialHydration &&
            0 === t.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        e = n.matches;
      }
    }
    let l = e,
      s = null == (o = n) ? void 0 : o.errors;
    if (null != s) {
      let e = l.findIndex(
        (e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id])
      );
      e >= 0 || p(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
    }
    let u = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let a = 0; a < l.length; a++) {
        let e = l[a];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (c = a),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            o =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || o) {
            (u = !0), (l = c >= 0 ? l.slice(0, c + 1) : [l[0]]);
            break;
          }
        }
      }
    return l.reduceRight((e, r, o) => {
      let i,
        d = !1,
        p = null,
        f = null;
      var h;
      n &&
        ((i = s && r.route.id ? s[r.route.id] : void 0),
        (p = r.route.errorElement || _),
        u &&
          (c < 0 && 0 === o
            ? ((h = "route-fallback"),
              !1 || ae[h] || (ae[h] = !0),
              (d = !0),
              (f = null))
            : c === o &&
              ((d = !0), (f = r.route.hydrateFallbackElement || null))));
      let m = t.concat(l.slice(0, o + 1)),
        g = () => {
          let t;
          return (
            (t = i
              ? p
              : d
              ? f
              : r.route.Component
              ? a.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            a.createElement(ee, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
        ? a.createElement($, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: i,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : g();
    }, null);
  }
  var ne = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ne || {});
  function re(e) {
    let t = a.useContext(H);
    return t || p(!1), t;
  }
  function oe(e) {
    let t = (function () {
        let e = a.useContext(G);
        return e || p(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || p(!1), n.route.id;
  }
  const ae = {};
  const ie = {};
  const le = (e, t, n) => {
    var r;
    ie[
      (r =
        "\u26a0\ufe0f React Router Future Flag Warning: " +
        t +
        ". You can use the `" +
        e +
        "` future flag to opt-in early. For more information, see " +
        n +
        ".")
    ] || ((ie[r] = !0), console.warn(r));
  };
  function se(e, t) {
    (null != e && e.v7_startTransition) ||
      le(
        "v7_startTransition",
        "React Router will begin wrapping state updates in `React.startTransition` in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
      ),
      (null != e && e.v7_relativeSplatPath) ||
        (t && t.v7_relativeSplatPath) ||
        le(
          "v7_relativeSplatPath",
          "Relative route resolution within Splat routes is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
        ),
      t &&
        (t.v7_fetcherPersist ||
          le(
            "v7_fetcherPersist",
            "The persistence behavior of fetchers is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
          ),
        t.v7_normalizeFormMethod ||
          le(
            "v7_normalizeFormMethod",
            "Casing of `formMethod` fields is being normalized to uppercase in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
          ),
        t.v7_partialHydration ||
          le(
            "v7_partialHydration",
            "`RouterProvider` hydration behavior is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
          ),
        t.v7_skipActionErrorRevalidation ||
          le(
            "v7_skipActionErrorRevalidation",
            "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
          ));
  }
  i.startTransition;
  function ue(e) {
    p(!1);
  }
  function ce(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: i = o.Pop,
      navigator: l,
      static: s = !1,
      future: u,
    } = e;
    Y() && p(!1);
    let c = t.replace(/^\/*/, "/"),
      d = a.useMemo(
        () => ({
          basename: c,
          navigator: l,
          static: s,
          future: V({ v7_relativeSplatPath: !1 }, u),
        }),
        [c, u, l, s]
      );
    "string" === typeof r && (r = y(r));
    let {
        pathname: f = "/",
        search: h = "",
        hash: m = "",
        state: g = null,
        key: v = "default",
      } = r,
      b = a.useMemo(() => {
        let e = I(f, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: h, hash: m, state: g, key: v },
              navigationType: i,
            };
      }, [c, f, h, m, g, v, i]);
    return null == b
      ? null
      : a.createElement(
          Q.Provider,
          { value: d },
          a.createElement(q.Provider, { children: n, value: b })
        );
  }
  function de(e) {
    let { children: t, location: n } = e;
    return J(pe(t), n);
  }
  new Promise(() => {});
  a.Component;
  function pe(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let o = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, pe(e.props.children, o));
        e.type !== ue && p(!1), e.props.index && e.props.children && p(!1);
        let i = {
          id: e.props.id || o.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (i.children = pe(e.props.children, o)), n.push(i);
      }),
      n
    );
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  try {
    window.__reactRouterVersion = "6";
  } catch (Sf) {}
  new Map();
  const fe = i.startTransition;
  u.flushSync, i.useId;
  function he(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      i = a.useRef();
    var l;
    null == i.current &&
      (i.current =
        (void 0 === (l = { window: o, v5Compat: !0 }) && (l = {}),
        v(
          function (e, t) {
            let { pathname: n, search: r, hash: o } = e.location;
            return m(
              "",
              { pathname: n, search: r, hash: o },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : g(t);
          },
          null,
          l
        )));
    let s = i.current,
      [u, c] = a.useState({ action: s.action, location: s.location }),
      { v7_startTransition: d } = r || {},
      p = a.useCallback(
        (e) => {
          d && fe ? fe(() => c(e)) : c(e);
        },
        [c, d]
      );
    return (
      a.useLayoutEffect(() => s.listen(p), [s, p]),
      a.useEffect(() => se(r), [r]),
      a.createElement(ce, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: s,
        future: r,
      })
    );
  }
  "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    window.document.createElement;
  var me, ge;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(me || (me = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(ge || (ge = {}));
  function ye(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: ve } = Object.prototype,
    { getPrototypeOf: be } = Object,
    xe =
      ((we = Object.create(null)),
      (e) => {
        const t = ve.call(e);
        return we[t] || (we[t] = t.slice(8, -1).toLowerCase());
      });
  var we;
  const Se = (e) => ((e = e.toLowerCase()), (t) => xe(t) === e),
    ke = (e) => (t) => typeof t === e,
    { isArray: Ae } = Array,
    Ee = ke("undefined");
  const Ce = Se("ArrayBuffer");
  const Re = ke("string"),
    Te = ke("function"),
    je = ke("number"),
    Ne = (e) => null !== e && "object" === typeof e,
    Pe = (e) => {
      if ("object" !== xe(e)) return !1;
      const t = be(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    Oe = Se("Date"),
    Me = Se("File"),
    Be = Se("Blob"),
    Ie = Se("FileList"),
    Le = Se("URLSearchParams"),
    [Fe, ze, De, Ue] = ["ReadableStream", "Request", "Response", "Headers"].map(
      Se
    );
  function Ve(e, t) {
    let n,
      r,
      { allOwnKeys: o = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), Ae(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
          a = r.length;
        let i;
        for (n = 0; n < a; n++) (i = r[n]), t.call(null, e[i], i, e);
      }
  }
  function We(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      o = n.length;
    for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
    return null;
  }
  const He =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
        ? self
        : "undefined" !== typeof window
        ? window
        : global,
    Qe = (e) => !Ee(e) && e !== He;
  const qe =
    ((Ge = "undefined" !== typeof Uint8Array && be(Uint8Array)),
    (e) => Ge && e instanceof Ge);
  var Ge;
  const Ke = Se("HTMLFormElement"),
    Ye = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    Ze = Se("RegExp"),
    Je = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Ve(n, (n, o) => {
        let a;
        !1 !== (a = t(n, o, e)) && (r[o] = a || n);
      }),
        Object.defineProperties(e, r);
    },
    Xe = "abcdefghijklmnopqrstuvwxyz",
    _e = "0123456789",
    $e = { DIGIT: _e, ALPHA: Xe, ALPHA_DIGIT: Xe + Xe.toUpperCase() + _e };
  const et = Se("AsyncFunction"),
    tt =
      ((nt = "function" === typeof setImmediate),
      (rt = Te(He.postMessage)),
      nt
        ? setImmediate
        : rt
        ? ((e, t) => (
            He.addEventListener(
              "message",
              (n) => {
                let { source: r, data: o } = n;
                r === He && o === e && t.length && t.shift()();
              },
              !1
            ),
            (n) => {
              t.push(n), He.postMessage(e, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e));
  var nt, rt;
  const ot =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(He)
        : ("undefined" !== typeof process && process.nextTick) || tt,
    at = {
      isArray: Ae,
      isArrayBuffer: Ce,
      isBuffer: function (e) {
        return (
          null !== e &&
          !Ee(e) &&
          null !== e.constructor &&
          !Ee(e.constructor) &&
          Te(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            (Te(e.append) &&
              ("formdata" === (t = xe(e)) ||
                ("object" === t &&
                  Te(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && Ce(e.buffer)),
          t
        );
      },
      isString: Re,
      isNumber: je,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: Ne,
      isPlainObject: Pe,
      isReadableStream: Fe,
      isRequest: ze,
      isResponse: De,
      isHeaders: Ue,
      isUndefined: Ee,
      isDate: Oe,
      isFile: Me,
      isBlob: Be,
      isRegExp: Ze,
      isFunction: Te,
      isStream: (e) => Ne(e) && Te(e.pipe),
      isURLSearchParams: Le,
      isTypedArray: qe,
      isFileList: Ie,
      forEach: Ve,
      merge: function e() {
        const { caseless: t } = (Qe(this) && this) || {},
          n = {},
          r = (r, o) => {
            const a = (t && We(n, o)) || o;
            Pe(n[a]) && Pe(r)
              ? (n[a] = e(n[a], r))
              : Pe(r)
              ? (n[a] = e({}, r))
              : Ae(r)
              ? (n[a] = r.slice())
              : (n[a] = r);
          };
        for (let o = 0, a = arguments.length; o < a; o++)
          arguments[o] && Ve(arguments[o], r);
        return n;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          Ve(
            t,
            (t, r) => {
              n && Te(t) ? (e[r] = ye(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r }
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let o, a, i;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
            (i = o[a]),
              (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
          e = !1 !== n && be(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: xe,
      kindOfTest: Se,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (Ae(e)) return e;
        let t = e.length;
        if (!je(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: Ke,
      hasOwnProperty: Ye,
      hasOwnProp: Ye,
      reduceDescriptors: Je,
      freezeMethods: (e) => {
        Je(e, (t, n) => {
          if (Te(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          Te(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return Ae(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: We,
      global: He,
      isContextDefined: Qe,
      ALPHABET: $e,
      generateString: function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : $e.ALPHA_DIGIT,
          n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          Te(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (Ne(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const o = Ae(e) ? [] : {};
                return (
                  Ve(e, (e, t) => {
                    const a = n(e, r + 1);
                    !Ee(a) && (o[t] = a);
                  }),
                  (t[r] = void 0),
                  o
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: et,
      isThenable: (e) => e && (Ne(e) || Te(e)) && Te(e.then) && Te(e.catch),
      setImmediate: tt,
      asap: ot,
    };
  function it(e, t, n, r, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && ((this.response = o), (this.status = o.status ? o.status : null));
  }
  at.inherits(it, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: at.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const lt = it.prototype,
    st = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    st[e] = { value: e };
  }),
    Object.defineProperties(it, st),
    Object.defineProperty(lt, "isAxiosError", { value: !0 }),
    (it.from = (e, t, n, r, o, a) => {
      const i = Object.create(lt);
      return (
        at.toFlatObject(
          e,
          i,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        it.call(i, e.message, t, n, r, o),
        (i.cause = e),
        (i.name = e.name),
        a && Object.assign(i, a),
        i
      );
    });
  const ut = it;
  function ct(e) {
    return at.isPlainObject(e) || at.isArray(e);
  }
  function dt(e) {
    return at.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function pt(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = dt(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const ft = at.toFlatObject(at, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const ht = function (e, t, n) {
    if (!at.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = at.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !at.isUndefined(t[e]);
        }
      )).metaTokens,
      o = n.visitor || u,
      a = n.dots,
      i = n.indexes,
      l =
        (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
        at.isSpecCompliantForm(t);
    if (!at.isFunction(o)) throw new TypeError("visitor must be a function");
    function s(e) {
      if (null === e) return "";
      if (at.isDate(e)) return e.toISOString();
      if (!l && at.isBlob(e))
        throw new ut("Blob is not supported. Use a Buffer instead.");
      return at.isArrayBuffer(e) || at.isTypedArray(e)
        ? l && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function u(e, n, o) {
      let l = e;
      if (e && !o && "object" === typeof e)
        if (at.endsWith(n, "{}"))
          (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (at.isArray(e) &&
            (function (e) {
              return at.isArray(e) && !e.some(ct);
            })(e)) ||
          ((at.isFileList(e) || at.endsWith(n, "[]")) && (l = at.toArray(e)))
        )
          return (
            (n = dt(n)),
            l.forEach(function (e, r) {
              !at.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === i ? pt([n], r, a) : null === i ? n : n + "[]",
                  s(e)
                );
            }),
            !1
          );
      return !!ct(e) || (t.append(pt(o, n, a), s(e)), !1);
    }
    const c = [],
      d = Object.assign(ft, {
        defaultVisitor: u,
        convertValue: s,
        isVisitable: ct,
      });
    if (!at.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!at.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          c.push(n),
            at.forEach(n, function (n, a) {
              !0 ===
                (!(at.isUndefined(n) || null === n) &&
                  o.call(t, n, at.isString(a) ? a.trim() : a, r, d)) &&
                e(n, r ? r.concat(a) : [a]);
            }),
            c.pop();
        }
      })(e),
      t
    );
  };
  function mt(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function gt(e, t) {
    (this._pairs = []), e && ht(e, this, t);
  }
  const yt = gt.prototype;
  (yt.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (yt.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, mt);
          }
        : mt;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const vt = gt;
  function bt(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function xt(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || bt,
      o = n && n.serialize;
    let a;
    if (
      ((a = o
        ? o(t, n)
        : at.isURLSearchParams(t)
        ? t.toString()
        : new vt(t, n).toString(r)),
      a)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
    }
    return e;
  }
  const wt = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        at.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    St = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    kt = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : vt,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    At = "undefined" !== typeof window && "undefined" !== typeof document,
    Et = ("object" === typeof navigator && navigator) || void 0,
    Ct =
      At &&
      (!Et || ["ReactNative", "NativeScript", "NS"].indexOf(Et.product) < 0),
    Rt =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    Tt = (At && window.location.href) || "http://localhost",
    jt = { ...r, ...kt };
  const Nt = function (e) {
    function t(e, n, r, o) {
      let a = e[o++];
      if ("__proto__" === a) return !0;
      const i = Number.isFinite(+a),
        l = o >= e.length;
      if (((a = !a && at.isArray(r) ? r.length : a), l))
        return at.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i;
      (r[a] && at.isObject(r[a])) || (r[a] = []);
      return (
        t(e, n, r[a], o) &&
          at.isArray(r[a]) &&
          (r[a] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const o = n.length;
            let a;
            for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
            return t;
          })(r[a])),
        !i
      );
    }
    if (at.isFormData(e) && at.isFunction(e.entries)) {
      const n = {};
      return (
        at.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return at
                .matchAll(/\w+|\[(\w*)]/g, e)
                .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  };
  const Pt = {
    transitional: St,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          o = at.isObject(e);
        o && at.isHTMLForm(e) && (e = new FormData(e));
        if (at.isFormData(e)) return r ? JSON.stringify(Nt(e)) : e;
        if (
          at.isArrayBuffer(e) ||
          at.isBuffer(e) ||
          at.isStream(e) ||
          at.isFile(e) ||
          at.isBlob(e) ||
          at.isReadableStream(e)
        )
          return e;
        if (at.isArrayBufferView(e)) return e.buffer;
        if (at.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let a;
        if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return ht(
                e,
                new jt.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return jt.isNode && at.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((a = at.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return ht(
              a ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        return o || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (at.isString(e))
                try {
                  return (t || JSON.parse)(e), at.trim(e);
                } catch (Sf) {
                  if ("SyntaxError" !== Sf.name) throw Sf;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || Pt.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (at.isResponse(e) || at.isReadableStream(e)) return e;
        if (e && at.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (Sf) {
            if (n) {
              if ("SyntaxError" === Sf.name)
                throw ut.from(
                  Sf,
                  ut.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw Sf;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: jt.classes.FormData, Blob: jt.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  at.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Pt.headers[e] = {};
  });
  const Ot = Pt,
    Mt = at.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    Bt = Symbol("internals");
  function It(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Lt(e) {
    return !1 === e || null == e ? e : at.isArray(e) ? e.map(Lt) : String(e);
  }
  function Ft(e, t, n, r, o) {
    return at.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n),
        at.isString(t)
          ? at.isString(r)
            ? -1 !== t.indexOf(r)
            : at.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  class zt {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function o(e, t, n) {
        const o = It(t);
        if (!o) throw new Error("header name must be a non-empty string");
        const a = at.findKey(r, o);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = Lt(e));
      }
      const a = (e, t) => at.forEach(e, (e, n) => o(e, n, t));
      if (at.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (
        at.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        a(
          ((e) => {
            const t = {};
            let n, r, o;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (o = e.indexOf(":")),
                    (n = e.substring(0, o).trim().toLowerCase()),
                    (r = e.substring(o + 1).trim()),
                    !n ||
                      (t[n] && Mt[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if (at.isHeaders(e)) for (const [i, l] of e.entries()) o(l, i, n);
      else null != e && o(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = It(e))) {
        const n = at.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (at.isFunction(t)) return t.call(this, e, n);
          if (at.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = It(e))) {
        const n = at.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !Ft(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
        if ((e = It(e))) {
          const o = at.findKey(n, e);
          !o || (t && !Ft(0, n[o], o, t)) || (delete n[o], (r = !0));
        }
      }
      return at.isArray(e) ? e.forEach(o) : o(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const o = t[n];
        (e && !Ft(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        at.forEach(this, (r, o) => {
          const a = at.findKey(n, o);
          if (a) return (t[a] = Lt(r)), void delete t[o];
          const i = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(o)
            : String(o).trim();
          i !== o && delete t[o], (t[i] = Lt(r)), (n[i] = !0);
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        at.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && at.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return r.forEach((e) => t.set(e)), t;
    }
    static accessor(e) {
      const t = (this[Bt] = this[Bt] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = It(e);
        t[r] ||
          (!(function (e, t) {
            const n = at.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, o) {
                  return this[r].call(this, t, e, n, o);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return at.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  zt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    at.reduceDescriptors(zt.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    at.freezeMethods(zt);
  const Dt = zt;
  function Ut(e, t) {
    const n = this || Ot,
      r = t || n,
      o = Dt.from(r.headers);
    let a = r.data;
    return (
      at.forEach(e, function (e) {
        a = e.call(n, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
    );
  }
  function Vt(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Wt(e, t, n) {
    ut.call(this, null == e ? "canceled" : e, ut.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  at.inherits(Wt, ut, { __CANCEL__: !0 });
  const Ht = Wt;
  function Qt(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new ut(
            "Request failed with status code " + n.status,
            [ut.ERR_BAD_REQUEST, ut.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  const qt = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let o,
      a = 0,
      i = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (l) {
        const s = Date.now(),
          u = r[i];
        o || (o = s), (n[a] = l), (r[a] = s);
        let c = i,
          d = 0;
        for (; c !== a; ) (d += n[c++]), (c %= e);
        if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), s - o < t))
          return;
        const p = u && s - u;
        return p ? Math.round((1e3 * d) / p) : void 0;
      }
    );
  };
  const Gt = function (e, t) {
      let n,
        r,
        o = 0,
        a = 1e3 / t;
      const i = function (t) {
        let a =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        (o = a),
          (n = null),
          r && (clearTimeout(r), (r = null)),
          e.apply(null, t);
      };
      return [
        function () {
          const e = Date.now(),
            t = e - o;
          for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
            s[u] = arguments[u];
          t >= a
            ? i(s, e)
            : ((n = s),
              r ||
                (r = setTimeout(() => {
                  (r = null), i(n);
                }, a - t)));
        },
        () => n && i(n),
      ];
    },
    Kt = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const o = qt(50, 250);
      return Gt((n) => {
        const a = n.loaded,
          i = n.lengthComputable ? n.total : void 0,
          l = a - r,
          s = o(l);
        r = a;
        e({
          loaded: a,
          total: i,
          progress: i ? a / i : void 0,
          bytes: l,
          rate: s || void 0,
          estimated: s && i && a <= i ? (i - a) / s : void 0,
          event: n,
          lengthComputable: null != i,
          [t ? "download" : "upload"]: !0,
        });
      }, n);
    },
    Yt = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Zt = (e) =>
      function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return at.asap(() => e(...n));
      },
    Jt = jt.hasStandardBrowserEnv
      ? (function () {
          const e =
              jt.navigator && /(msie|trident)/i.test(jt.navigator.userAgent),
            t = document.createElement("a");
          let n;
          function r(n) {
            let r = n;
            return (
              e && (t.setAttribute("href", r), (r = t.href)),
              t.setAttribute("href", r),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname:
                  "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
              }
            );
          }
          return (
            (n = r(window.location.href)),
            function (e) {
              const t = at.isString(e) ? r(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    Xt = jt.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, o, a) {
            const i = [e + "=" + encodeURIComponent(t)];
            at.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
              at.isString(r) && i.push("path=" + r),
              at.isString(o) && i.push("domain=" + o),
              !0 === a && i.push("secure"),
              (document.cookie = i.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function _t(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const $t = (e) => (e instanceof Dt ? { ...e } : e);
  function en(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
      return at.isPlainObject(e) && at.isPlainObject(t)
        ? at.merge.call({ caseless: n }, e, t)
        : at.isPlainObject(t)
        ? at.merge({}, t)
        : at.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, n) {
      return at.isUndefined(t)
        ? at.isUndefined(e)
          ? void 0
          : r(void 0, e, n)
        : r(e, t, n);
    }
    function a(e, t) {
      if (!at.isUndefined(t)) return r(void 0, t);
    }
    function i(e, t) {
      return at.isUndefined(t)
        ? at.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function l(n, o, a) {
      return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
    }
    const s = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: l,
      headers: (e, t) => o($t(e), $t(t), !0),
    };
    return (
      at.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = s[r] || o,
          i = a(e[r], t[r], r);
        (at.isUndefined(i) && a !== l) || (n[r] = i);
      }),
      n
    );
  }
  const tn = (e) => {
      const t = en({}, e);
      let n,
        {
          data: r,
          withXSRFToken: o,
          xsrfHeaderName: a,
          xsrfCookieName: i,
          headers: l,
          auth: s,
        } = t;
      if (
        ((t.headers = l = Dt.from(l)),
        (t.url = xt(_t(t.baseURL, t.url), e.params, e.paramsSerializer)),
        s &&
          l.set(
            "Authorization",
            "Basic " +
              btoa(
                (s.username || "") +
                  ":" +
                  (s.password ? unescape(encodeURIComponent(s.password)) : "")
              )
          ),
        at.isFormData(r))
      )
        if (jt.hasStandardBrowserEnv || jt.hasStandardBrowserWebWorkerEnv)
          l.setContentType(void 0);
        else if (!1 !== (n = l.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          l.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        jt.hasStandardBrowserEnv &&
        (o && at.isFunction(o) && (o = o(t)), o || (!1 !== o && Jt(t.url)))
      ) {
        const e = a && i && Xt.read(i);
        e && l.set(a, e);
      }
      return t;
    },
    nn =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = tn(e);
          let o = r.data;
          const a = Dt.from(r.headers).normalize();
          let i,
            l,
            s,
            u,
            c,
            { responseType: d, onUploadProgress: p, onDownloadProgress: f } = r;
          function h() {
            u && u(),
              c && c(),
              r.cancelToken && r.cancelToken.unsubscribe(i),
              r.signal && r.signal.removeEventListener("abort", i);
          }
          let m = new XMLHttpRequest();
          function g() {
            if (!m) return;
            const r = Dt.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders()
            );
            Qt(
              function (e) {
                t(e), h();
              },
              function (e) {
                n(e), h();
              },
              {
                data:
                  d && "text" !== d && "json" !== d
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              }
            ),
              (m = null);
          }
          m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            "onloadend" in m
              ? (m.onloadend = g)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (m.onabort = function () {
              m &&
                (n(new ut("Request aborted", ut.ECONNABORTED, e, m)),
                (m = null));
            }),
            (m.onerror = function () {
              n(new ut("Network Error", ut.ERR_NETWORK, e, m)), (m = null);
            }),
            (m.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const o = r.transitional || St;
              r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new ut(
                    t,
                    o.clarifyTimeoutError ? ut.ETIMEDOUT : ut.ECONNABORTED,
                    e,
                    m
                  )
                ),
                (m = null);
            }),
            void 0 === o && a.setContentType(null),
            "setRequestHeader" in m &&
              at.forEach(a.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            at.isUndefined(r.withCredentials) ||
              (m.withCredentials = !!r.withCredentials),
            d && "json" !== d && (m.responseType = r.responseType),
            f && (([s, c] = Kt(f, !0)), m.addEventListener("progress", s)),
            p &&
              m.upload &&
              (([l, u] = Kt(p)),
              m.upload.addEventListener("progress", l),
              m.upload.addEventListener("loadend", u)),
            (r.cancelToken || r.signal) &&
              ((i = (t) => {
                m &&
                  (n(!t || t.type ? new Ht(null, e, m) : t),
                  m.abort(),
                  (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(i),
              r.signal &&
                (r.signal.aborted
                  ? i()
                  : r.signal.addEventListener("abort", i)));
          const y = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          y && -1 === jt.protocols.indexOf(y)
            ? n(
                new ut("Unsupported protocol " + y + ":", ut.ERR_BAD_REQUEST, e)
              )
            : m.send(o || null);
        });
      },
    rn = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const o = function (e) {
          if (!n) {
            (n = !0), i();
            const t = e instanceof Error ? e : this.reason;
            r.abort(
              t instanceof ut ? t : new Ht(t instanceof Error ? t.message : t)
            );
          }
        };
        let a =
          t &&
          setTimeout(() => {
            (a = null), o(new ut(`timeout ${t} of ms exceeded`, ut.ETIMEDOUT));
          }, t);
        const i = () => {
          e &&
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(o)
                : e.removeEventListener("abort", o);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", o));
        const { signal: l } = r;
        return (l.unsubscribe = () => at.asap(i)), l;
      }
    },
    on = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        o = 0;
      for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
    },
    an = async function* (e) {
      if (e[Symbol.asyncIterator]) return void (yield* e);
      const t = e.getReader();
      try {
        for (;;) {
          const { done: e, value: n } = await t.read();
          if (e) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    ln = (e, t, n, r) => {
      const o = (async function* (e, t) {
        for await (const n of an(e)) yield* on(n, t);
      })(e, t);
      let a,
        i = 0,
        l = (e) => {
          a || ((a = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await o.next();
              if (t) return l(), void e.close();
              let a = r.byteLength;
              if (n) {
                let e = (i += a);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (l(t), t);
            }
          },
          cancel: (e) => (l(e), o.return()),
        },
        { highWaterMark: 2 }
      );
    },
    sn =
      "function" === typeof fetch &&
      "function" === typeof Request &&
      "function" === typeof Response,
    un = sn && "function" === typeof ReadableStream,
    cn =
      sn &&
      ("function" === typeof TextEncoder
        ? ((dn = new TextEncoder()), (e) => dn.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var dn;
  const pn = function (e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (Sf) {
        return !1;
      }
    },
    fn =
      un &&
      pn(() => {
        let e = !1;
        const t = new Request(jt.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    hn = un && pn(() => at.isReadableStream(new Response("").body)),
    mn = { stream: hn && ((e) => e.body) };
  var gn;
  sn &&
    ((gn = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !mn[e] &&
        (mn[e] = at.isFunction(gn[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new ut(
                `Response type '${e}' is not supported`,
                ut.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const yn = async (e, t) => {
      const n = at.toFiniteNumber(e.getContentLength());
      return null == n
        ? (async (e) => {
            if (null == e) return 0;
            if (at.isBlob(e)) return e.size;
            if (at.isSpecCompliantForm(e)) {
              const t = new Request(jt.origin, { method: "POST", body: e });
              return (await t.arrayBuffer()).byteLength;
            }
            return at.isArrayBufferView(e) || at.isArrayBuffer(e)
              ? e.byteLength
              : (at.isURLSearchParams(e) && (e += ""),
                at.isString(e) ? (await cn(e)).byteLength : void 0);
          })(t)
        : n;
    },
    vn =
      sn &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: o,
          cancelToken: a,
          timeout: i,
          onDownloadProgress: l,
          onUploadProgress: s,
          responseType: u,
          headers: c,
          withCredentials: d = "same-origin",
          fetchOptions: p,
        } = tn(e);
        u = u ? (u + "").toLowerCase() : "text";
        let f,
          h = rn([o, a && a.toAbortSignal()], i);
        const m =
          h &&
          h.unsubscribe &&
          (() => {
            h.unsubscribe();
          });
        let g;
        try {
          if (
            s &&
            fn &&
            "get" !== n &&
            "head" !== n &&
            0 !== (g = await yn(c, r))
          ) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            if (
              (at.isFormData(r) &&
                (e = n.headers.get("content-type")) &&
                c.setContentType(e),
              n.body)
            ) {
              const [e, t] = Yt(g, Kt(Zt(s)));
              r = ln(n.body, 65536, e, t);
            }
          }
          at.isString(d) || (d = d ? "include" : "omit");
          const o = "credentials" in Request.prototype;
          f = new Request(t, {
            ...p,
            signal: h,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: o ? d : void 0,
          });
          let a = await fetch(f);
          const i = hn && ("stream" === u || "response" === u);
          if (hn && (l || (i && m))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = a[t];
            });
            const t = at.toFiniteNumber(a.headers.get("content-length")),
              [n, r] = (l && Yt(t, Kt(Zt(l), !0))) || [];
            a = new Response(
              ln(a.body, 65536, n, () => {
                r && r(), m && m();
              }),
              e
            );
          }
          u = u || "text";
          let y = await mn[at.findKey(mn, u) || "text"](a, e);
          return (
            !i && m && m(),
            await new Promise((t, n) => {
              Qt(t, n, {
                data: y,
                headers: Dt.from(a.headers),
                status: a.status,
                statusText: a.statusText,
                config: e,
                request: f,
              });
            })
          );
        } catch (y) {
          if (
            (m && m(), y && "TypeError" === y.name && /fetch/i.test(y.message))
          )
            throw Object.assign(new ut("Network Error", ut.ERR_NETWORK, e, f), {
              cause: y.cause || y,
            });
          throw ut.from(y, y && y.code, e, f);
        }
      }),
    bn = { http: null, xhr: nn, fetch: vn };
  at.forEach(bn, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (Sf) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const xn = (e) => `- ${e}`,
    wn = (e) => at.isFunction(e) || null === e || !1 === e,
    Sn = (e) => {
      e = at.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let a = 0; a < t; a++) {
        let t;
        if (
          ((n = e[a]),
          (r = n),
          !wn(n) && ((r = bn[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new ut(`Unknown adapter '${t}'`);
        if (r) break;
        o[t || "#" + a] = r;
      }
      if (!r) {
        const e = Object.entries(o).map((e) => {
          let [t, n] = e;
          return (
            `adapter ${t} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(xn).join("\n")
            : " " + xn(e[0])
          : "as no adapter specified";
        throw new ut(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function kn(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Ht(null, e);
  }
  function An(e) {
    kn(e),
      (e.headers = Dt.from(e.headers)),
      (e.data = Ut.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return Sn(e.adapter || Ot.adapter)(e).then(
      function (t) {
        return (
          kn(e),
          (t.data = Ut.call(e, e.transformResponse, t)),
          (t.headers = Dt.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          Vt(t) ||
            (kn(e),
            t &&
              t.response &&
              ((t.response.data = Ut.call(e, e.transformResponse, t.response)),
              (t.response.headers = Dt.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }
  const En = "1.7.7",
    Cn = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      Cn[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Rn = {};
  Cn.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.7.7] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, o, a) => {
      if (!1 === e)
        throw new ut(
          r(o, " has been removed" + (t ? " in " + t : "")),
          ut.ERR_DEPRECATED
        );
      return (
        t &&
          !Rn[o] &&
          ((Rn[o] = !0),
          console.warn(
            r(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, o, a)
      );
    };
  };
  const Tn = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new ut("options must be an object", ut.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
          const a = r[o],
            i = t[a];
          if (i) {
            const t = e[a],
              n = void 0 === t || i(t, a, e);
            if (!0 !== n)
              throw new ut(
                "option " + a + " must be " + n,
                ut.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new ut("Unknown option " + a, ut.ERR_BAD_OPTION);
        }
      },
      validators: Cn,
    },
    jn = Tn.validators;
  class Nn {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new wt(), response: new wt() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e;
          Error.captureStackTrace
            ? Error.captureStackTrace((e = {}))
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (Sf) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = en(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      void 0 !== n &&
        Tn.assertOptions(
          n,
          {
            silentJSONParsing: jn.transitional(jn.boolean),
            forcedJSONParsing: jn.transitional(jn.boolean),
            clarifyTimeoutError: jn.transitional(jn.boolean),
          },
          !1
        ),
        null != r &&
          (at.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Tn.assertOptions(
                r,
                { encode: jn.function, serialize: jn.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let a = o && at.merge(o.common, o[t.method]);
      o &&
        at.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete o[e];
          }
        ),
        (t.headers = Dt.concat(a, o));
      const i = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
      });
      const s = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let c,
        d = 0;
      if (!l) {
        const e = [An.bind(this), void 0];
        for (
          e.unshift.apply(e, i),
            e.push.apply(e, s),
            c = e.length,
            u = Promise.resolve(t);
          d < c;

        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = i.length;
      let p = t;
      for (d = 0; d < c; ) {
        const e = i[d++],
          t = i[d++];
        try {
          p = e(p);
        } catch (f) {
          t.call(this, f);
          break;
        }
      }
      try {
        u = An.call(this, p);
      } catch (f) {
        return Promise.reject(f);
      }
      for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
      return u;
    }
    getUri(e) {
      return xt(
        _t((e = en(this.defaults, e)).baseURL, e.url),
        e.params,
        e.paramsSerializer
      );
    }
  }
  at.forEach(["delete", "get", "head", "options"], function (e) {
    Nn.prototype[e] = function (t, n) {
      return this.request(
        en(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    at.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            en(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (Nn.prototype[e] = t()), (Nn.prototype[e + "Form"] = t(!0));
    });
  const Pn = Nn;
  class On {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, o) {
          n.reason || ((n.reason = new Ht(e, r, o)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new On(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Mn = On;
  const Bn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Bn).forEach((e) => {
    let [t, n] = e;
    Bn[n] = t;
  });
  const In = Bn;
  const Ln = (function e(t) {
    const n = new Pn(t),
      r = ye(Pn.prototype.request, n);
    return (
      at.extend(r, Pn.prototype, n, { allOwnKeys: !0 }),
      at.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(en(t, n));
      }),
      r
    );
  })(Ot);
  (Ln.Axios = Pn),
    (Ln.CanceledError = Ht),
    (Ln.CancelToken = Mn),
    (Ln.isCancel = Vt),
    (Ln.VERSION = En),
    (Ln.toFormData = ht),
    (Ln.AxiosError = ut),
    (Ln.Cancel = Ln.CanceledError),
    (Ln.all = function (e) {
      return Promise.all(e);
    }),
    (Ln.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Ln.isAxiosError = function (e) {
      return at.isObject(e) && !0 === e.isAxiosError;
    }),
    (Ln.mergeConfig = en),
    (Ln.AxiosHeaders = Dt),
    (Ln.formToJSON = (e) => Nt(at.isHTMLForm(e) ? new FormData(e) : e)),
    (Ln.getAdapter = Sn),
    (Ln.HttpStatusCode = In),
    (Ln.default = Ln);
  const Fn = Ln;
  function zn(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = zn(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  const Dn = function () {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = zn(e)) && (r && (r += " "), (r += t));
    return r;
  };
  function Un(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    const r = {};
    for (const o in e) {
      const a = e[o];
      let i = "",
        l = !0;
      for (let e = 0; e < a.length; e += 1) {
        const r = a[e];
        r &&
          ((i += (!0 === l ? "" : " ") + t(r)),
          (l = !1),
          n && n[r] && (i += " " + n[r]));
      }
      r[o] = i;
    }
    return r;
  }
  function Vn() {
    return (
      (Vn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Vn.apply(null, arguments)
    );
  }
  function Wn(e) {
    var t = Object.create(null);
    return function (n) {
      return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
  }
  var Hn =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Qn = Wn(function (e) {
      return (
        Hn.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    });
  var qn = (function () {
      function e(e) {
        var t = this;
        (this._insertTag = function (e) {
          var n;
          (n =
            0 === t.tags.length
              ? t.insertionPoint
                ? t.insertionPoint.nextSibling
                : t.prepend
                ? t.container.firstChild
                : t.before
              : t.tags[t.tags.length - 1].nextSibling),
            t.container.insertBefore(e, n),
            t.tags.push(e);
        }),
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (e) {
          e.forEach(this._insertTag);
        }),
        (t.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(
              (function (e) {
                var t = document.createElement("style");
                return (
                  t.setAttribute("data-emotion", e.key),
                  void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t
                );
              })(this)
            );
          var t = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var n = (function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            })(t);
            try {
              n.insertRule(e, n.cssRules.length);
            } catch (Sf) {}
          } else t.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (e) {
            var t;
            return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    Gn = Math.abs,
    Kn = String.fromCharCode,
    Yn = Object.assign;
  function Zn(e) {
    return e.trim();
  }
  function Jn(e, t, n) {
    return e.replace(t, n);
  }
  function Xn(e, t) {
    return e.indexOf(t);
  }
  function _n(e, t) {
    return 0 | e.charCodeAt(t);
  }
  function $n(e, t, n) {
    return e.slice(t, n);
  }
  function er(e) {
    return e.length;
  }
  function tr(e) {
    return e.length;
  }
  function nr(e, t) {
    return t.push(e), e;
  }
  var rr = 1,
    or = 1,
    ar = 0,
    ir = 0,
    lr = 0,
    sr = "";
  function ur(e, t, n, r, o, a, i) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: a,
      line: rr,
      column: or,
      length: i,
      return: "",
    };
  }
  function cr(e, t) {
    return Yn(
      ur("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function dr() {
    return (
      (lr = ir > 0 ? _n(sr, --ir) : 0), or--, 10 === lr && ((or = 1), rr--), lr
    );
  }
  function pr() {
    return (
      (lr = ir < ar ? _n(sr, ir++) : 0), or++, 10 === lr && ((or = 1), rr++), lr
    );
  }
  function fr() {
    return _n(sr, ir);
  }
  function hr() {
    return ir;
  }
  function mr(e, t) {
    return $n(sr, e, t);
  }
  function gr(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function yr(e) {
    return (rr = or = 1), (ar = er((sr = e))), (ir = 0), [];
  }
  function vr(e) {
    return (sr = ""), e;
  }
  function br(e) {
    return Zn(mr(ir - 1, Sr(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }
  function xr(e) {
    for (; (lr = fr()) && lr < 33; ) pr();
    return gr(e) > 2 || gr(lr) > 3 ? "" : " ";
  }
  function wr(e, t) {
    for (
      ;
      --t &&
      pr() &&
      !(lr < 48 || lr > 102 || (lr > 57 && lr < 65) || (lr > 70 && lr < 97));

    );
    return mr(e, hr() + (t < 6 && 32 == fr() && 32 == pr()));
  }
  function Sr(e) {
    for (; pr(); )
      switch (lr) {
        case e:
          return ir;
        case 34:
        case 39:
          34 !== e && 39 !== e && Sr(lr);
          break;
        case 40:
          41 === e && Sr(e);
          break;
        case 92:
          pr();
      }
    return ir;
  }
  function kr(e, t) {
    for (; pr() && e + lr !== 57 && (e + lr !== 84 || 47 !== fr()); );
    return "/*" + mr(t, ir - 1) + "*" + Kn(47 === e ? e : pr());
  }
  function Ar(e) {
    for (; !gr(fr()); ) pr();
    return mr(e, ir);
  }
  var Er = "-ms-",
    Cr = "-moz-",
    Rr = "-webkit-",
    Tr = "comm",
    jr = "rule",
    Nr = "decl",
    Pr = "@keyframes";
  function Or(e, t) {
    for (var n = "", r = tr(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function Mr(e, t, n, r) {
    switch (e.type) {
      case "@layer":
        if (e.children.length) break;
      case "@import":
      case Nr:
        return (e.return = e.return || e.value);
      case Tr:
        return "";
      case Pr:
        return (e.return = e.value + "{" + Or(e.children, r) + "}");
      case jr:
        e.value = e.props.join(",");
    }
    return er((n = Or(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function Br(e) {
    return vr(Ir("", null, null, null, [""], (e = yr(e)), 0, [0], e));
  }
  function Ir(e, t, n, r, o, a, i, l, s) {
    for (
      var u = 0,
        c = 0,
        d = i,
        p = 0,
        f = 0,
        h = 0,
        m = 1,
        g = 1,
        y = 1,
        v = 0,
        b = "",
        x = o,
        w = a,
        S = r,
        k = b;
      g;

    )
      switch (((h = v), (v = pr()))) {
        case 40:
          if (108 != h && 58 == _n(k, d - 1)) {
            -1 != Xn((k += Jn(br(v), "&", "&\f")), "&\f") && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          k += br(v);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          k += xr(h);
          break;
        case 92:
          k += wr(hr() - 1, 7);
          continue;
        case 47:
          switch (fr()) {
            case 42:
            case 47:
              nr(Fr(kr(pr(), hr()), t, n), s);
              break;
            default:
              k += "/";
          }
          break;
        case 123 * m:
          l[u++] = er(k) * y;
        case 125 * m:
        case 59:
        case 0:
          switch (v) {
            case 0:
            case 125:
              g = 0;
            case 59 + c:
              -1 == y && (k = Jn(k, /\f/g, "")),
                f > 0 &&
                  er(k) - d &&
                  nr(
                    f > 32
                      ? zr(k + ";", r, n, d - 1)
                      : zr(Jn(k, " ", "") + ";", r, n, d - 2),
                    s
                  );
              break;
            case 59:
              k += ";";
            default:
              if (
                (nr((S = Lr(k, t, n, u, c, o, l, b, (x = []), (w = []), d)), a),
                123 === v)
              )
                if (0 === c) Ir(k, t, S, S, x, a, d, l, w);
                else
                  switch (99 === p && 110 === _n(k, 3) ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      Ir(
                        e,
                        S,
                        S,
                        r && nr(Lr(e, S, S, 0, 0, o, l, b, o, (x = []), d), w),
                        o,
                        w,
                        d,
                        l,
                        r ? x : w
                      );
                      break;
                    default:
                      Ir(k, S, S, S, [""], w, 0, l, w);
                  }
          }
          (u = c = f = 0), (m = y = 1), (b = k = ""), (d = i);
          break;
        case 58:
          (d = 1 + er(k)), (f = h);
        default:
          if (m < 1)
            if (123 == v) --m;
            else if (125 == v && 0 == m++ && 125 == dr()) continue;
          switch (((k += Kn(v)), v * m)) {
            case 38:
              y = c > 0 ? 1 : ((k += "\f"), -1);
              break;
            case 44:
              (l[u++] = (er(k) - 1) * y), (y = 1);
              break;
            case 64:
              45 === fr() && (k += br(pr())),
                (p = fr()),
                (c = d = er((b = k += Ar(hr())))),
                v++;
              break;
            case 45:
              45 === h && 2 == er(k) && (m = 0);
          }
      }
    return a;
  }
  function Lr(e, t, n, r, o, a, i, l, s, u, c) {
    for (
      var d = o - 1, p = 0 === o ? a : [""], f = tr(p), h = 0, m = 0, g = 0;
      h < r;
      ++h
    )
      for (var y = 0, v = $n(e, d + 1, (d = Gn((m = i[h])))), b = e; y < f; ++y)
        (b = Zn(m > 0 ? p[y] + " " + v : Jn(v, /&\f/g, p[y]))) && (s[g++] = b);
    return ur(e, t, n, 0 === o ? jr : l, s, u, c);
  }
  function Fr(e, t, n) {
    return ur(e, t, n, Tr, Kn(lr), $n(e, 2, -2), 0);
  }
  function zr(e, t, n, r) {
    return ur(e, t, n, Nr, $n(e, 0, r), $n(e, r + 1, -1), r);
  }
  var Dr = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = fr()), 38 === r && 12 === o && (t[n] = 1), !gr(o);

      )
        pr();
      return mr(e, ir);
    },
    Ur = function (e, t) {
      return vr(
        (function (e, t) {
          var n = -1,
            r = 44;
          do {
            switch (gr(r)) {
              case 0:
                38 === r && 12 === fr() && (t[n] = 1),
                  (e[n] += Dr(ir - 1, t, n));
                break;
              case 2:
                e[n] += br(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === fr() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += Kn(r);
            }
          } while ((r = pr()));
          return e;
        })(yr(e), t)
      );
    },
    Vr = new WeakMap(),
    Wr = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          "rule" !== n.type;

        )
          if (!(n = n.parent)) return;
        if (
          (1 !== e.props.length || 58 === t.charCodeAt(0) || Vr.get(n)) &&
          !r
        ) {
          Vr.set(e, !0);
          for (
            var o = [], a = Ur(t, o), i = n.props, l = 0, s = 0;
            l < a.length;
            l++
          )
            for (var u = 0; u < i.length; u++, s++)
              e.props[s] = o[l]
                ? a[l].replace(/&\f/g, i[u])
                : i[u] + " " + a[l];
        }
      }
    },
    Hr = function (e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) &&
          98 === t.charCodeAt(2) &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function Qr(e, t) {
    switch (
      (function (e, t) {
        return 45 ^ _n(e, 0)
          ? (((((((t << 2) ^ _n(e, 0)) << 2) ^ _n(e, 1)) << 2) ^ _n(e, 2)) <<
              2) ^
              _n(e, 3)
          : 0;
      })(e, t)
    ) {
      case 5103:
        return Rr + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Rr + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Rr + e + Cr + e + Er + e + e;
      case 6828:
      case 4268:
        return Rr + e + Er + e + e;
      case 6165:
        return Rr + e + Er + "flex-" + e + e;
      case 5187:
        return (
          Rr +
          e +
          Jn(e, /(\w+).+(:[^]+)/, Rr + "box-$1$2" + Er + "flex-$1$2") +
          e
        );
      case 5443:
        return Rr + e + Er + "flex-item-" + Jn(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          Rr +
          e +
          Er +
          "flex-line-pack" +
          Jn(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return Rr + e + Er + Jn(e, "shrink", "negative") + e;
      case 5292:
        return Rr + e + Er + Jn(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Rr +
          "box-" +
          Jn(e, "-grow", "") +
          Rr +
          e +
          Er +
          Jn(e, "grow", "positive") +
          e
        );
      case 4554:
        return Rr + Jn(e, /([^-])(transform)/g, "$1" + Rr + "$2") + e;
      case 6187:
        return (
          Jn(
            Jn(Jn(e, /(zoom-|grab)/, Rr + "$1"), /(image-set)/, Rr + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return Jn(e, /(image-set\([^]*)/, Rr + "$1$`$1");
      case 4968:
        return (
          Jn(
            Jn(
              e,
              /(.+:)(flex-)?(.*)/,
              Rr + "box-pack:$3" + Er + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          Rr +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return Jn(e, /(.+)-inline(.+)/, Rr + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (er(e) - 1 - t > 6)
          switch (_n(e, t + 1)) {
            case 109:
              if (45 !== _n(e, t + 4)) break;
            case 102:
              return (
                Jn(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Rr +
                    "$2-$3$1" +
                    Cr +
                    (108 == _n(e, t + 3) ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Xn(e, "stretch")
                ? Qr(Jn(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (115 !== _n(e, t + 1)) break;
      case 6444:
        switch (_n(e, er(e) - 3 - (~Xn(e, "!important") && 10))) {
          case 107:
            return Jn(e, ":", ":" + Rr) + e;
          case 101:
            return (
              Jn(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  Rr +
                  (45 === _n(e, 14) ? "inline-" : "") +
                  "box$3$1" +
                  Rr +
                  "$2$3$1" +
                  Er +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (_n(e, t + 11)) {
          case 114:
            return Rr + e + Er + Jn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Rr + e + Er + Jn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Rr + e + Er + Jn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return Rr + e + Er + e + e;
    }
    return e;
  }
  var qr = [
      function (e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case Nr:
              e.return = Qr(e.value, e.length);
              break;
            case Pr:
              return Or([cr(e, { value: Jn(e.value, "@", "@" + Rr) })], r);
            case jr:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })(e.props, function (t) {
                  switch (
                    (function (e, t) {
                      return (e = t.exec(e)) ? e[0] : e;
                    })(t, /(::plac\w+|:read-\w+)/)
                  ) {
                    case ":read-only":
                    case ":read-write":
                      return Or(
                        [cr(e, { props: [Jn(t, /:(read-\w+)/, ":-moz-$1")] })],
                        r
                      );
                    case "::placeholder":
                      return Or(
                        [
                          cr(e, {
                            props: [Jn(t, /:(plac\w+)/, ":" + Rr + "input-$1")],
                          }),
                          cr(e, { props: [Jn(t, /:(plac\w+)/, ":-moz-$1")] }),
                          cr(e, {
                            props: [Jn(t, /:(plac\w+)/, Er + "input-$1")],
                          }),
                        ],
                        r
                      );
                  }
                  return "";
                });
          }
      },
    ],
    Gr = function (e) {
      var t = e.key;
      if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (e) {
          -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
            (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
      }
      var r,
        o,
        a = e.stylisPlugins || qr,
        i = {},
        l = [];
      (r = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (e) {
            for (
              var t = e.getAttribute("data-emotion").split(" "), n = 1;
              n < t.length;
              n++
            )
              i[t[n]] = !0;
            l.push(e);
          }
        );
      var s,
        u,
        c = [
          Mr,
          ((u = function (e) {
            s.insert(e);
          }),
          function (e) {
            e.root || ((e = e.return) && u(e));
          }),
        ],
        d = (function (e) {
          var t = tr(e);
          return function (n, r, o, a) {
            for (var i = "", l = 0; l < t; l++) i += e[l](n, r, o, a) || "";
            return i;
          };
        })([Wr, Hr].concat(a, c));
      o = function (e, t, n, r) {
        (s = n),
          (function (e) {
            Or(Br(e), d);
          })(e ? e + "{" + t.styles + "}" : t.styles),
          r && (p.inserted[t.name] = !0);
      };
      var p = {
        key: t,
        sheet: new qn({
          key: t,
          container: r,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: i,
        registered: {},
        insert: o,
      };
      return p.sheet.hydrate(l), p;
    };
  var Kr = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      scale: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    Yr = /[A-Z]|^ms/g,
    Zr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Jr = function (e) {
      return 45 === e.charCodeAt(1);
    },
    Xr = function (e) {
      return null != e && "boolean" !== typeof e;
    },
    _r = Wn(function (e) {
      return Jr(e) ? e : e.replace(Yr, "-$&").toLowerCase();
    }),
    $r = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if ("string" === typeof t)
            return t.replace(Zr, function (e, t, n) {
              return (to = { name: t, styles: n, next: to }), t;
            });
      }
      return 1 === Kr[e] || Jr(e) || "number" !== typeof t || 0 === t
        ? t
        : t + "px";
    };
  function eo(e, t, n) {
    if (null == n) return "";
    var r = n;
    if (void 0 !== r.__emotion_styles) return r;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        var o = n;
        if (1 === o.anim)
          return (to = { name: o.name, styles: o.styles, next: to }), o.name;
        var a = n;
        if (void 0 !== a.styles) {
          var i = a.next;
          if (void 0 !== i)
            for (; void 0 !== i; )
              (to = { name: i.name, styles: i.styles, next: to }), (i = i.next);
          return a.styles + ";";
        }
        return (function (e, t, n) {
          var r = "";
          if (Array.isArray(n))
            for (var o = 0; o < n.length; o++) r += eo(e, t, n[o]) + ";";
          else
            for (var a in n) {
              var i = n[a];
              if ("object" !== typeof i) {
                var l = i;
                null != t && void 0 !== t[l]
                  ? (r += a + "{" + t[l] + "}")
                  : Xr(l) && (r += _r(a) + ":" + $r(a, l) + ";");
              } else if (
                !Array.isArray(i) ||
                "string" !== typeof i[0] ||
                (null != t && void 0 !== t[i[0]])
              ) {
                var s = eo(e, t, i);
                switch (a) {
                  case "animation":
                  case "animationName":
                    r += _r(a) + ":" + s + ";";
                    break;
                  default:
                    r += a + "{" + s + "}";
                }
              } else
                for (var u = 0; u < i.length; u++)
                  Xr(i[u]) && (r += _r(a) + ":" + $r(a, i[u]) + ";");
            }
          return r;
        })(e, t, n);
      case "function":
        if (void 0 !== e) {
          var l = to,
            s = n(e);
          return (to = l), eo(e, t, s);
        }
    }
    var u = n;
    if (null == t) return u;
    var c = t[u];
    return void 0 !== c ? c : u;
  }
  var to,
    no = /label:\s*([^\s;{]+)\s*(;|$)/g;
  function ro(e, t, n) {
    if (
      1 === e.length &&
      "object" === typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var r = !0,
      o = "";
    to = void 0;
    var a = e[0];
    null == a || void 0 === a.raw
      ? ((r = !1), (o += eo(n, t, a)))
      : (o += a[0]);
    for (var i = 1; i < e.length; i++) {
      if (((o += eo(n, t, e[i])), r)) o += a[i];
    }
    no.lastIndex = 0;
    for (var l, s = ""; null !== (l = no.exec(o)); ) s += "-" + l[1];
    var u =
      (function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      })(o) + s;
    return { name: u, styles: o, next: to };
  }
  var oo = !!i.useInsertionEffect && i.useInsertionEffect,
    ao =
      oo ||
      function (e) {
        return e();
      },
    io = oo || a.useLayoutEffect,
    lo = a.createContext(
      "undefined" !== typeof HTMLElement ? Gr({ key: "css" }) : null
    ),
    so =
      (lo.Provider,
      function (e) {
        return (0, a.forwardRef)(function (t, n) {
          var r = (0, a.useContext)(lo);
          return e(t, r, n);
        });
      }),
    uo = a.createContext({});
  var co = function (e, t, n) {
      var r = e.key + "-" + t.name;
      !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
    },
    po = function (e, t, n) {
      co(e, t, n);
      var r = e.key + "-" + t.name;
      if (void 0 === e.inserted[t.name]) {
        var o = t;
        do {
          e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
        } while (void 0 !== o);
      }
    },
    fo = Qn,
    ho = function (e) {
      return "theme" !== e;
    },
    mo = function (e) {
      return "string" === typeof e && e.charCodeAt(0) > 96 ? fo : ho;
    },
    go = function (e, t, n) {
      var r;
      if (t) {
        var o = t.shouldForwardProp;
        r =
          e.__emotion_forwardProp && o
            ? function (t) {
                return e.__emotion_forwardProp(t) && o(t);
              }
            : o;
      }
      return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r;
    },
    yo = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        co(t, n, r),
        ao(function () {
          return po(t, n, r);
        }),
        null
      );
    },
    vo = function e(t, n) {
      var r,
        o,
        i = t.__emotion_real === t,
        l = (i && t.__emotion_base) || t;
      void 0 !== n && ((r = n.label), (o = n.target));
      var s = go(t, n, i),
        u = s || mo(l),
        c = !u("as");
      return function () {
        var d = arguments,
          p =
            i && void 0 !== t.__emotion_styles
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (void 0 !== r && p.push("label:" + r + ";"),
          null == d[0] || void 0 === d[0].raw)
        )
          p.push.apply(p, d);
        else {
          p.push(d[0][0]);
          for (var f = d.length, h = 1; h < f; h++) p.push(d[h], d[0][h]);
        }
        var m = so(function (e, t, n) {
          var r = (c && e.as) || l,
            i = "",
            d = [],
            f = e;
          if (null == e.theme) {
            for (var h in ((f = {}), e)) f[h] = e[h];
            f.theme = a.useContext(uo);
          }
          "string" === typeof e.className
            ? (i = (function (e, t, n) {
                var r = "";
                return (
                  n.split(" ").forEach(function (n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : n && (r += n + " ");
                  }),
                  r
                );
              })(t.registered, d, e.className))
            : null != e.className && (i = e.className + " ");
          var m = ro(p.concat(d), t.registered, f);
          (i += t.key + "-" + m.name), void 0 !== o && (i += " " + o);
          var g = c && void 0 === s ? mo(r) : u,
            y = {};
          for (var v in e) (c && "as" === v) || (g(v) && (y[v] = e[v]));
          return (
            (y.className = i),
            n && (y.ref = n),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(yo, {
                cache: t,
                serialized: m,
                isStringTag: "string" === typeof r,
              }),
              a.createElement(r, y)
            )
          );
        });
        return (
          (m.displayName =
            void 0 !== r
              ? r
              : "Styled(" +
                ("string" === typeof l
                  ? l
                  : l.displayName || l.name || "Component") +
                ")"),
          (m.defaultProps = t.defaultProps),
          (m.__emotion_real = m),
          (m.__emotion_base = l),
          (m.__emotion_styles = p),
          (m.__emotion_forwardProp = s),
          Object.defineProperty(m, "toString", {
            value: function () {
              return "." + o;
            },
          }),
          (m.withComponent = function (t, r) {
            return e(
              t,
              Vn({}, n, r, { shouldForwardProp: go(m, r, !0) })
            ).apply(void 0, p);
          }),
          m
        );
      };
    }.bind();
  function bo(e, t) {
    return vo(e, t);
  }
  [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ].forEach(function (e) {
    vo[e] = vo(e);
  });
  const xo = [];
  function wo(e) {
    return (xo[0] = e), ro(xo);
  }
  function So(e) {
    if ("object" !== typeof e || null === e) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (null === t ||
        t === Object.prototype ||
        null === Object.getPrototypeOf(t)) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function ko(e) {
    if (!So(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = ko(e[n]);
      }),
      t
    );
  }
  function Ao(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : { clone: !0 };
    const r = n.clone ? { ...e } : e;
    return (
      So(e) &&
        So(t) &&
        Object.keys(t).forEach((o) => {
          So(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && So(e[o])
            ? (r[o] = Ao(e[o], t[o], n))
            : n.clone
            ? (r[o] = So(t[o]) ? ko(t[o]) : t[o])
            : (r[o] = t[o]);
        }),
      r
    );
  }
  function Eo(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
        ...o
      } = e,
      a = ((e) => {
        const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
        return (
          t.sort((e, t) => e.val - t.val),
          t.reduce((e, t) => ({ ...e, [t.key]: t.val }), {})
        );
      })(t),
      i = Object.keys(a);
    function l(e) {
      return `@media (min-width:${"number" === typeof t[e] ? t[e] : e}${n})`;
    }
    function s(e) {
      return `@media (max-width:${
        ("number" === typeof t[e] ? t[e] : e) - r / 100
      }${n})`;
    }
    function u(e, o) {
      const a = i.indexOf(o);
      return `@media (min-width:${
        "number" === typeof t[e] ? t[e] : e
      }${n}) and (max-width:${
        (-1 !== a && "number" === typeof t[i[a]] ? t[i[a]] : o) - r / 100
      }${n})`;
    }
    return {
      keys: i,
      values: a,
      up: l,
      down: s,
      between: u,
      only: function (e) {
        return i.indexOf(e) + 1 < i.length ? u(e, i[i.indexOf(e) + 1]) : l(e);
      },
      not: function (e) {
        const t = i.indexOf(e);
        return 0 === t
          ? l(i[1])
          : t === i.length - 1
          ? s(i[t])
          : u(e, i[i.indexOf(e) + 1]).replace("@media", "@media not all and");
      },
      unit: n,
      ...o,
    };
  }
  const Co = { borderRadius: 4 },
    Ro = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    To = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${Ro[e]}px)`,
    },
    jo = {
      containerQueries: (e) => ({
        up: (t) => {
          let n = "number" === typeof t ? t : Ro[t] || t;
          return (
            "number" === typeof n && (n = `${n}px`),
            e
              ? `@container ${e} (min-width:${n})`
              : `@container (min-width:${n})`
          );
        },
      }),
    };
  function No(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const e = r.breakpoints || To;
      return t.reduce((r, o, a) => ((r[e.up(e.keys[a])] = n(t[a])), r), {});
    }
    if ("object" === typeof t) {
      const e = r.breakpoints || To;
      return Object.keys(t).reduce((o, a) => {
        if (
          (function (e, t) {
            return (
              "@" === t ||
              (t.startsWith("@") &&
                (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/)))
            );
          })(e.keys, a)
        ) {
          const e = (function (e, t) {
            const n = t.match(/^@([^/]+)?\/?(.+)?$/);
            if (!n) return null;
            const [, r, o] = n,
              a = Number.isNaN(+r) ? r || 0 : +r;
            return e.containerQueries(o).up(a);
          })(r.containerQueries ? r : jo, a);
          e && (o[e] = n(t[a], a));
        } else if (Object.keys(e.values || Ro).includes(a)) {
          o[e.up(a)] = n(t[a], a);
        } else {
          const e = a;
          o[e] = t[e];
        }
        return o;
      }, {});
    }
    return n(t);
  }
  function Po() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t = e.keys?.reduce((t, n) => ((t[e.up(n)] = {}), t), {});
    return t || {};
  }
  function Oo(e, t) {
    return e.reduce((e, t) => {
      const n = e[t];
      return (!n || 0 === Object.keys(n).length) && delete e[t], e;
    }, t);
  }
  function Mo(e) {
    let { values: t, breakpoints: n, base: r } = e;
    const o =
        r ||
        (function (e, t) {
          if ("object" !== typeof e) return {};
          const n = {},
            r = Object.keys(t);
          return (
            Array.isArray(e)
              ? r.forEach((t, r) => {
                  r < e.length && (n[t] = !0);
                })
              : r.forEach((t) => {
                  null != e[t] && (n[t] = !0);
                }),
            n
          );
        })(t, n),
      a = Object.keys(o);
    if (0 === a.length) return t;
    let i;
    return a.reduce(
      (e, n, r) => (
        Array.isArray(t)
          ? ((e[n] = null != t[r] ? t[r] : t[i]), (i = r))
          : "object" === typeof t
          ? ((e[n] = null != t[n] ? t[n] : t[i]), (i = n))
          : (e[n] = t),
        e
      ),
      {}
    );
  }
  function Bo(e) {
    const t = new URL(`https://mui.com/production-error/?code=${e}`);
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    return (
      r.forEach((e) => t.searchParams.append("args[]", e)),
      `Minified MUI error #${e}; visit ${t} for the full message.`
    );
  }
  function Io(e) {
    if ("string" !== typeof e) throw new Error(Bo(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function Lo(e, t) {
    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!t || "string" !== typeof t) return null;
    if (e && e.vars && n) {
      const n = `vars.${t}`
        .split(".")
        .reduce((e, t) => (e && e[t] ? e[t] : null), e);
      if (null != n) return n;
    }
    return t.split(".").reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
  }
  function Fo(e, t, n) {
    let r,
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
    return (
      (r =
        "function" === typeof e
          ? e(n)
          : Array.isArray(e)
          ? e[n] || o
          : Lo(e, n) || o),
      t && (r = t(r, o, e)),
      r
    );
  }
  const zo = function (e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      a = (e) => {
        if (null == e[t]) return null;
        const a = e[t],
          i = Lo(e.theme, r) || {};
        return No(e, a, (e) => {
          let r = Fo(i, o, e);
          return (
            e === r &&
              "string" === typeof e &&
              (r = Fo(i, o, `${t}${"default" === e ? "" : Io(e)}`, e)),
            !1 === n ? r : { [n]: r }
          );
        });
      };
    return (a.propTypes = {}), (a.filterProps = [t]), a;
  };
  const Do = function (e, t) {
    return t ? Ao(e, t, { clone: !1 }) : e;
  };
  const Uo = { m: "margin", p: "padding" },
    Vo = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    Wo = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    Ho = (function (e) {
      const t = {};
      return (n) => (void 0 === t[n] && (t[n] = e(n)), t[n]);
    })((e) => {
      if (e.length > 2) {
        if (!Wo[e]) return [e];
        e = Wo[e];
      }
      const [t, n] = e.split(""),
        r = Uo[t],
        o = Vo[n] || "";
      return Array.isArray(o) ? o.map((e) => r + e) : [r + o];
    }),
    Qo = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
    ],
    qo = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
    ],
    Go = [...Qo, ...qo];
  function Ko(e, t, n, r) {
    const o = Lo(e, t, !0) ?? n;
    return "number" === typeof o || "string" === typeof o
      ? (e) =>
          "string" === typeof e
            ? e
            : "string" === typeof o
            ? `calc(${e} * ${o})`
            : o * e
      : Array.isArray(o)
      ? (e) => {
          if ("string" === typeof e) return e;
          const t = Math.abs(e);
          const n = o[t];
          return e >= 0 ? n : "number" === typeof n ? -n : `-${n}`;
        }
      : "function" === typeof o
      ? o
      : () => {};
  }
  function Yo(e) {
    return Ko(e, "spacing", 8);
  }
  function Zo(e, t) {
    return "string" === typeof t || null == t ? t : e(t);
  }
  function Jo(e, t, n, r) {
    if (!t.includes(n)) return null;
    const o = (function (e, t) {
      return (n) => e.reduce((e, r) => ((e[r] = Zo(t, n)), e), {});
    })(Ho(n), r);
    return No(e, e[n], o);
  }
  function Xo(e, t) {
    const n = Yo(e.theme);
    return Object.keys(e)
      .map((r) => Jo(e, t, r, n))
      .reduce(Do, {});
  }
  function _o(e) {
    return Xo(e, Qo);
  }
  function $o(e) {
    return Xo(e, qo);
  }
  function ea(e) {
    return Xo(e, Go);
  }
  (_o.propTypes = {}),
    (_o.filterProps = Qo),
    ($o.propTypes = {}),
    ($o.filterProps = qo),
    (ea.propTypes = {}),
    (ea.filterProps = Go);
  function ta() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Yo({ spacing: e });
    if (e.mui) return e;
    const n = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      return (0 === n.length ? [1] : n)
        .map((e) => {
          const n = t(e);
          return "number" === typeof n ? `${n}px` : n;
        })
        .join(" ");
    };
    return (n.mui = !0), n;
  }
  const na = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    const r = t.reduce(
        (e, t) => (
          t.filterProps.forEach((n) => {
            e[n] = t;
          }),
          e
        ),
        {}
      ),
      o = (e) =>
        Object.keys(e).reduce((t, n) => (r[n] ? Do(t, r[n](e)) : t), {});
    return (
      (o.propTypes = {}),
      (o.filterProps = t.reduce((e, t) => e.concat(t.filterProps), [])),
      o
    );
  };
  function ra(e) {
    return "number" !== typeof e ? e : `${e}px solid`;
  }
  function oa(e, t) {
    return zo({ prop: e, themeKey: "borders", transform: t });
  }
  const aa = oa("border", ra),
    ia = oa("borderTop", ra),
    la = oa("borderRight", ra),
    sa = oa("borderBottom", ra),
    ua = oa("borderLeft", ra),
    ca = oa("borderColor"),
    da = oa("borderTopColor"),
    pa = oa("borderRightColor"),
    fa = oa("borderBottomColor"),
    ha = oa("borderLeftColor"),
    ma = oa("outline", ra),
    ga = oa("outlineColor"),
    ya = (e) => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
        const t = Ko(e.theme, "shape.borderRadius", 4),
          n = (e) => ({ borderRadius: Zo(t, e) });
        return No(e, e.borderRadius, n);
      }
      return null;
    };
  (ya.propTypes = {}), (ya.filterProps = ["borderRadius"]);
  na(aa, ia, la, sa, ua, ca, da, pa, fa, ha, ya, ma, ga);
  const va = (e) => {
    if (void 0 !== e.gap && null !== e.gap) {
      const t = Ko(e.theme, "spacing", 8),
        n = (e) => ({ gap: Zo(t, e) });
      return No(e, e.gap, n);
    }
    return null;
  };
  (va.propTypes = {}), (va.filterProps = ["gap"]);
  const ba = (e) => {
    if (void 0 !== e.columnGap && null !== e.columnGap) {
      const t = Ko(e.theme, "spacing", 8),
        n = (e) => ({ columnGap: Zo(t, e) });
      return No(e, e.columnGap, n);
    }
    return null;
  };
  (ba.propTypes = {}), (ba.filterProps = ["columnGap"]);
  const xa = (e) => {
    if (void 0 !== e.rowGap && null !== e.rowGap) {
      const t = Ko(e.theme, "spacing", 8),
        n = (e) => ({ rowGap: Zo(t, e) });
      return No(e, e.rowGap, n);
    }
    return null;
  };
  (xa.propTypes = {}), (xa.filterProps = ["rowGap"]);
  na(
    va,
    ba,
    xa,
    zo({ prop: "gridColumn" }),
    zo({ prop: "gridRow" }),
    zo({ prop: "gridAutoFlow" }),
    zo({ prop: "gridAutoColumns" }),
    zo({ prop: "gridAutoRows" }),
    zo({ prop: "gridTemplateColumns" }),
    zo({ prop: "gridTemplateRows" }),
    zo({ prop: "gridTemplateAreas" }),
    zo({ prop: "gridArea" })
  );
  function wa(e, t) {
    return "grey" === t ? t : e;
  }
  na(
    zo({ prop: "color", themeKey: "palette", transform: wa }),
    zo({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: wa,
    }),
    zo({ prop: "backgroundColor", themeKey: "palette", transform: wa })
  );
  function Sa(e) {
    return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }
  const ka = zo({ prop: "width", transform: Sa }),
    Aa = (e) => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
        const t = (t) => {
          const n = e.theme?.breakpoints?.values?.[t] || Ro[t];
          return n
            ? "px" !== e.theme?.breakpoints?.unit
              ? { maxWidth: `${n}${e.theme.breakpoints.unit}` }
              : { maxWidth: n }
            : { maxWidth: Sa(t) };
        };
        return No(e, e.maxWidth, t);
      }
      return null;
    };
  Aa.filterProps = ["maxWidth"];
  const Ea = zo({ prop: "minWidth", transform: Sa }),
    Ca = zo({ prop: "height", transform: Sa }),
    Ra = zo({ prop: "maxHeight", transform: Sa }),
    Ta = zo({ prop: "minHeight", transform: Sa }),
    ja =
      (zo({ prop: "size", cssProperty: "width", transform: Sa }),
      zo({ prop: "size", cssProperty: "height", transform: Sa }),
      na(ka, Aa, Ea, Ca, Ra, Ta, zo({ prop: "boxSizing" })),
      {
        border: { themeKey: "borders", transform: ra },
        borderTop: { themeKey: "borders", transform: ra },
        borderRight: { themeKey: "borders", transform: ra },
        borderBottom: { themeKey: "borders", transform: ra },
        borderLeft: { themeKey: "borders", transform: ra },
        borderColor: { themeKey: "palette" },
        borderTopColor: { themeKey: "palette" },
        borderRightColor: { themeKey: "palette" },
        borderBottomColor: { themeKey: "palette" },
        borderLeftColor: { themeKey: "palette" },
        outline: { themeKey: "borders", transform: ra },
        outlineColor: { themeKey: "palette" },
        borderRadius: { themeKey: "shape.borderRadius", style: ya },
        color: { themeKey: "palette", transform: wa },
        bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: wa,
        },
        backgroundColor: { themeKey: "palette", transform: wa },
        p: { style: $o },
        pt: { style: $o },
        pr: { style: $o },
        pb: { style: $o },
        pl: { style: $o },
        px: { style: $o },
        py: { style: $o },
        padding: { style: $o },
        paddingTop: { style: $o },
        paddingRight: { style: $o },
        paddingBottom: { style: $o },
        paddingLeft: { style: $o },
        paddingX: { style: $o },
        paddingY: { style: $o },
        paddingInline: { style: $o },
        paddingInlineStart: { style: $o },
        paddingInlineEnd: { style: $o },
        paddingBlock: { style: $o },
        paddingBlockStart: { style: $o },
        paddingBlockEnd: { style: $o },
        m: { style: _o },
        mt: { style: _o },
        mr: { style: _o },
        mb: { style: _o },
        ml: { style: _o },
        mx: { style: _o },
        my: { style: _o },
        margin: { style: _o },
        marginTop: { style: _o },
        marginRight: { style: _o },
        marginBottom: { style: _o },
        marginLeft: { style: _o },
        marginX: { style: _o },
        marginY: { style: _o },
        marginInline: { style: _o },
        marginInlineStart: { style: _o },
        marginInlineEnd: { style: _o },
        marginBlock: { style: _o },
        marginBlockStart: { style: _o },
        marginBlockEnd: { style: _o },
        displayPrint: {
          cssProperty: !1,
          transform: (e) => ({ "@media print": { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: va },
        rowGap: { style: xa },
        columnGap: { style: ba },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: "zIndex" },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: "shadows" },
        width: { transform: Sa },
        maxWidth: { style: Aa },
        minWidth: { transform: Sa },
        height: { transform: Sa },
        maxHeight: { transform: Sa },
        minHeight: { transform: Sa },
        boxSizing: {},
        font: { themeKey: "font" },
        fontFamily: { themeKey: "typography" },
        fontSize: { themeKey: "typography" },
        fontStyle: { themeKey: "typography" },
        fontWeight: { themeKey: "typography" },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: "typography" },
      });
  const Na = (function () {
    function e(e, t, n, r) {
      const o = { [e]: t, theme: n },
        a = r[e];
      if (!a) return { [e]: t };
      const { cssProperty: i = e, themeKey: l, transform: s, style: u } = a;
      if (null == t) return null;
      if ("typography" === l && "inherit" === t) return { [e]: t };
      const c = Lo(n, l) || {};
      if (u) return u(o);
      return No(o, t, (t) => {
        let n = Fo(c, s, t);
        return (
          t === n &&
            "string" === typeof t &&
            (n = Fo(c, s, `${e}${"default" === t ? "" : Io(t)}`, t)),
          !1 === i ? n : { [i]: n }
        );
      });
    }
    return function t(n) {
      const { sx: r, theme: o = {} } = n || {};
      if (!r) return null;
      const a = o.unstable_sxConfig ?? ja;
      function i(n) {
        let r = n;
        if ("function" === typeof n) r = n(o);
        else if ("object" !== typeof n) return n;
        if (!r) return null;
        const i = Po(o.breakpoints),
          l = Object.keys(i);
        let s = i;
        return (
          Object.keys(r).forEach((n) => {
            const i = (function (e, t) {
              return "function" === typeof e ? e(t) : e;
            })(r[n], o);
            if (null !== i && void 0 !== i)
              if ("object" === typeof i)
                if (a[n]) s = Do(s, e(n, i, o, a));
                else {
                  const e = No({ theme: o }, i, (e) => ({ [n]: e }));
                  !(function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    const r = t.reduce((e, t) => e.concat(Object.keys(t)), []),
                      o = new Set(r);
                    return t.every((e) => o.size === Object.keys(e).length);
                  })(e, i)
                    ? (s = Do(s, e))
                    : (s[n] = t({ sx: i, theme: o }));
                }
              else s = Do(s, e(n, i, o, a));
          }),
          (function (e, t) {
            if (!e.containerQueries) return t;
            const n = Object.keys(t)
              .filter((e) => e.startsWith("@container"))
              .sort((e, t) => {
                const n = /min-width:\s*([0-9.]+)/;
                return +(e.match(n)?.[1] || 0) - +(t.match(n)?.[1] || 0);
              });
            return n.length
              ? n.reduce(
                  (e, n) => {
                    const r = t[n];
                    return delete e[n], (e[n] = r), e;
                  },
                  { ...t }
                )
              : t;
          })(o, Oo(l, s))
        );
      }
      return Array.isArray(r) ? r.map(i) : i(r);
    };
  })();
  Na.filterProps = ["sx"];
  const Pa = Na;
  function Oa(e, t) {
    const n = this;
    if (n.vars) {
      if (
        !n.colorSchemes?.[e] ||
        "function" !== typeof n.getColorSchemeSelector
      )
        return {};
      let r = n.getColorSchemeSelector(e);
      return "&" === r
        ? t
        : ((r.includes("data-") || r.includes(".")) &&
            (r = `*:where(${r.replace(/\s*&$/, "")}) &`),
          { [r]: t });
    }
    return n.palette.mode === e ? t : {};
  }
  const Ma = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      breakpoints: t = {},
      palette: n = {},
      spacing: r,
      shape: o = {},
      ...a
    } = e;
    let i = Ao(
      {
        breakpoints: Eo(t),
        direction: "ltr",
        components: {},
        palette: { mode: "light", ...n },
        spacing: ta(r),
        shape: { ...Co, ...o },
      },
      a
    );
    (i = (function (e) {
      const t = (e, t) =>
        e.replace("@media", t ? `@container ${t}` : "@container");
      function n(n, r) {
        (n.up = function () {
          return t(e.breakpoints.up(...arguments), r);
        }),
          (n.down = function () {
            return t(e.breakpoints.down(...arguments), r);
          }),
          (n.between = function () {
            return t(e.breakpoints.between(...arguments), r);
          }),
          (n.only = function () {
            return t(e.breakpoints.only(...arguments), r);
          }),
          (n.not = function () {
            const n = t(e.breakpoints.not(...arguments), r);
            return n.includes("not all and")
              ? n
                  .replace("not all and ", "")
                  .replace("min-width:", "width<")
                  .replace("max-width:", "width>")
                  .replace("and", "or")
              : n;
          });
      }
      const r = {},
        o = (e) => (n(r, e), r);
      return n(o), { ...e, containerQueries: o };
    })(i)),
      (i.applyStyles = Oa);
    for (
      var l = arguments.length, s = new Array(l > 1 ? l - 1 : 0), u = 1;
      u < l;
      u++
    )
      s[u - 1] = arguments[u];
    return (
      (i = s.reduce((e, t) => Ao(e, t), i)),
      (i.unstable_sxConfig = { ...ja, ...a?.unstable_sxConfig }),
      (i.unstable_sx = function (e) {
        return Pa({ sx: e, theme: this });
      }),
      i
    );
  };
  function Ba(e) {
    const { variants: t, ...n } = e,
      r = { variants: t, style: wo(n), isProcessed: !0 };
    return (
      r.style === n ||
        (t &&
          t.forEach((e) => {
            "function" !== typeof e.style && (e.style = wo(e.style));
          })),
      r
    );
  }
  const Ia = Ma();
  function La(e) {
    return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }
  function Fa(e) {
    return e ? (t, n) => n[e] : null;
  }
  function za(e, t) {
    const n = "function" === typeof t ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((t) => za(e, t));
    if (Array.isArray(n?.variants)) {
      let t;
      if (n.isProcessed) t = n.style;
      else {
        const { variants: e, ...r } = n;
        t = r;
      }
      return Da(e, n.variants, [t]);
    }
    return n?.isProcessed ? n.style : n;
  }
  function Da(e, t) {
    let n,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    e: for (let o = 0; o < t.length; o += 1) {
      const a = t[o];
      if ("function" === typeof a.props) {
        if (
          ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
          !a.props(n))
        )
          continue;
      } else
        for (const t in a.props)
          if (e[t] !== a.props[t] && e.ownerState?.[t] !== a.props[t])
            continue e;
      "function" === typeof a.style
        ? ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
          r.push(a.style(n)))
        : r.push(a.style);
    }
    return r;
  }
  function Ua() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      themeId: t,
      defaultTheme: n = Ia,
      rootShouldForwardProp: r = La,
      slotShouldForwardProp: o = La,
    } = e;
    function a(e) {
      !(function (e, t, n) {
        e.theme = (function (e) {
          for (const t in e) return !1;
          return !0;
        })(e.theme)
          ? n
          : e.theme[t] || e.theme;
      })(e, t, n);
    }
    return function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      !(function (e, t) {
        Array.isArray(e.__emotion_styles) &&
          (e.__emotion_styles = t(e.__emotion_styles));
      })(e, (e) => e.filter((e) => e !== Pa));
      const {
          name: n,
          slot: i,
          skipVariantsResolver: l,
          skipSx: s,
          overridesResolver: u = Fa(Wa(i)),
          ...c
        } = t,
        d = void 0 !== l ? l : (i && "Root" !== i && "root" !== i) || !1,
        p = s || !1;
      let f = La;
      "Root" === i || "root" === i
        ? (f = r)
        : i
        ? (f = o)
        : (function (e) {
            return "string" === typeof e && e.charCodeAt(0) > 96;
          })(e) && (f = void 0);
      const h = bo(e, { shouldForwardProp: f, label: Va(n, i), ...c }),
        m = (e) => {
          if ("function" === typeof e && e.__emotion_real !== e)
            return function (t) {
              return za(t, e);
            };
          if (So(e)) {
            const t = Ba(e);
            return t.variants
              ? function (e) {
                  return za(e, t);
                }
              : t.style;
          }
          return e;
        },
        g = function () {
          const t = [];
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          const l = o.map(m),
            s = [];
          if (
            (t.push(a),
            n &&
              u &&
              s.push(function (e) {
                const t = e.theme,
                  r = t.components?.[n]?.styleOverrides;
                if (!r) return null;
                const o = {};
                for (const n in r) o[n] = za(e, r[n]);
                return u(e, o);
              }),
            n &&
              !d &&
              s.push(function (e) {
                const t = e.theme,
                  r = t?.components?.[n]?.variants;
                return r ? Da(e, r) : null;
              }),
            p || s.push(Pa),
            Array.isArray(l[0]))
          ) {
            const e = l.shift(),
              n = new Array(t.length).fill(""),
              r = new Array(s.length).fill("");
            let o;
            (o = [...n, ...e, ...r]),
              (o.raw = [...n, ...e.raw, ...r]),
              t.unshift(o);
          }
          const c = [...t, ...l, ...s],
            f = h(...c);
          return e.muiName && (f.muiName = e.muiName), f;
        };
      return h.withConfig && (g.withConfig = h.withConfig), g;
    };
  }
  function Va(e, t) {}
  function Wa(e) {
    return e ? e.charAt(0).toLowerCase() + e.slice(1) : e;
  }
  const Ha = function (e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Number.MIN_SAFE_INTEGER,
      n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : Number.MAX_SAFE_INTEGER;
    return Math.max(t, Math.min(e, n));
  };
  function Qa(e) {
    return Ha(
      e,
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
    );
  }
  function qa(e) {
    if (e.type) return e;
    if ("#" === e.charAt(0))
      return qa(
        (function (e) {
          e = e.slice(1);
          const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
          let n = e.match(t);
          return (
            n && 1 === n[0].length && (n = n.map((e) => e + e)),
            n
              ? `rgb${4 === n.length ? "a" : ""}(${n
                  .map((e, t) =>
                    t < 3
                      ? parseInt(e, 16)
                      : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                  )
                  .join(", ")})`
              : ""
          );
        })(e)
      );
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
      throw new Error(Bo(9, e));
    let r,
      o = e.substring(t + 1, e.length - 1);
    if ("color" === n) {
      if (
        ((o = o.split(" ")),
        (r = o.shift()),
        4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)),
        !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
          r
        ))
      )
        throw new Error(Bo(10, r));
    } else o = o.split(",");
    return (
      (o = o.map((e) => parseFloat(e))), { type: n, values: o, colorSpace: r }
    );
  }
  const Ga = (e, t) => {
    try {
      return ((e) => {
        const t = qa(e);
        return t.values
          .slice(0, 3)
          .map((e, n) => (t.type.includes("hsl") && 0 !== n ? `${e}%` : e))
          .join(" ");
      })(e);
    } catch (n) {
      return e;
    }
  };
  function Ka(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
      t.includes("rgb")
        ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
        : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      (r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`),
      `${t}(${r})`
    );
  }
  function Ya(e) {
    e = qa(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      a = r * Math.min(o, 1 - o),
      i = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e + n / 30) % 12;
        return o - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      };
    let l = "rgb";
    const s = [
      Math.round(255 * i(0)),
      Math.round(255 * i(8)),
      Math.round(255 * i(4)),
    ];
    return (
      "hsla" === e.type && ((l += "a"), s.push(t[3])),
      Ka({ type: l, values: s })
    );
  }
  function Za(e) {
    let t =
      "hsl" === (e = qa(e)).type || "hsla" === e.type
        ? qa(Ya(e)).values
        : e.values;
    return (
      (t = t.map(
        (t) => (
          "color" !== e.type && (t /= 255),
          t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
        )
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function Ja(e, t) {
    return (
      (e = qa(e)),
      (t = Qa(t)),
      ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
      "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      Ka(e)
    );
  }
  function Xa(e, t, n) {
    try {
      return Ja(e, t);
    } catch (r) {
      return e;
    }
  }
  function _a(e, t) {
    if (((e = qa(e)), (t = Qa(t)), e.type.includes("hsl")))
      e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return Ka(e);
  }
  function $a(e, t, n) {
    try {
      return _a(e, t);
    } catch (r) {
      return e;
    }
  }
  function ei(e, t) {
    if (((e = qa(e)), (t = Qa(t)), e.type.includes("hsl")))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return Ka(e);
  }
  function ti(e, t, n) {
    try {
      return ei(e, t);
    } catch (r) {
      return e;
    }
  }
  function ni(e, t, n) {
    try {
      return (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15;
        return Za(e) > 0.5 ? _a(e, t) : ei(e, t);
      })(e, t);
    } catch (r) {
      return e;
    }
  }
  const ri = { black: "#000", white: "#fff" },
    oi = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    ai = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    },
    ii = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    li = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    },
    si = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    },
    ui = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    },
    ci = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    };
  function di() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: ri.white, default: ri.white },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    };
  }
  const pi = di();
  function fi() {
    return {
      text: {
        primary: ri.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: ri.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
  }
  const hi = fi();
  function mi(e, t, n, r) {
    const o = r.light || r,
      a = r.dark || 1.5 * r;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : "light" === t
        ? (e.light = ei(e.main, o))
        : "dark" === t && (e.dark = _a(e.main, a)));
  }
  function gi(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
        ...o
      } = e,
      a =
        e.primary ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: si[200], light: si[50], dark: si[400] }
            : { main: si[700], light: si[400], dark: si[800] };
        })(t),
      i =
        e.secondary ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: ai[200], light: ai[50], dark: ai[400] }
            : { main: ai[500], light: ai[300], dark: ai[700] };
        })(t),
      l =
        e.error ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: ii[500], light: ii[300], dark: ii[700] }
            : { main: ii[700], light: ii[400], dark: ii[800] };
        })(t),
      s =
        e.info ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: ui[400], light: ui[300], dark: ui[700] }
            : { main: ui[700], light: ui[500], dark: ui[900] };
        })(t),
      u =
        e.success ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: ci[400], light: ci[300], dark: ci[700] }
            : { main: ci[800], light: ci[500], dark: ci[900] };
        })(t),
      c =
        e.warning ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: li[400], light: li[300], dark: li[700] }
            : { main: "#ed6c02", light: li[500], dark: li[900] };
        })(t);
    function d(e) {
      const t =
        (function (e, t) {
          const n = Za(e),
            r = Za(t);
          return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
        })(e, hi.text.primary) >= n
          ? hi.text.primary
          : pi.text.primary;
      return t;
    }
    const p = (e) => {
      let {
        color: t,
        name: n,
        mainShade: o = 500,
        lightShade: a = 300,
        darkShade: i = 700,
      } = e;
      if (
        ((t = { ...t }),
        !t.main && t[o] && (t.main = t[o]),
        !t.hasOwnProperty("main"))
      )
        throw new Error(Bo(11, n ? ` (${n})` : "", o));
      if ("string" !== typeof t.main)
        throw new Error(Bo(12, n ? ` (${n})` : "", JSON.stringify(t.main)));
      return (
        mi(t, "light", a, r),
        mi(t, "dark", i, r),
        t.contrastText || (t.contrastText = d(t.main)),
        t
      );
    };
    let f;
    "light" === t ? (f = di()) : "dark" === t && (f = fi());
    return Ao(
      {
        common: { ...ri },
        mode: t,
        primary: p({ color: a, name: "primary" }),
        secondary: p({
          color: i,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: p({ color: l, name: "error" }),
        warning: p({ color: c, name: "warning" }),
        info: p({ color: s, name: "info" }),
        success: p({ color: u, name: "success" }),
        grey: oi,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: p,
        tonalOffset: r,
        ...f,
      },
      o
    );
  }
  function yi() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    function t() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      if (!r.length) return "";
      const a = r[0];
      return "string" !== typeof a ||
        a.match(
          /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
        )
        ? `, ${a}`
        : `, var(--${e ? `${e}-` : ""}${a}${t(...r.slice(1))})`;
    }
    return function (n) {
      for (
        var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        o[a - 1] = arguments[a];
      return `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
    };
  }
  function vi(e) {
    const t = {};
    return (
      Object.entries(e).forEach((e) => {
        const [n, r] = e;
        "object" === typeof r &&
          (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${
            r.fontVariant ? `${r.fontVariant} ` : ""
          }${r.fontWeight ? `${r.fontWeight} ` : ""}${
            r.fontStretch ? `${r.fontStretch} ` : ""
          }${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${
            r.fontFamily || ""
          }`);
      }),
      t
    );
  }
  const bi = function (e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
      o = e;
    t.forEach((e, a) => {
      a === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(e)] = n)
          : o && "object" === typeof o && (o[e] = n)
        : o &&
          "object" === typeof o &&
          (o[e] || (o[e] = r.includes(e) ? [] : {}), (o = o[e]));
    });
  };
  function xi(e, t) {
    const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
      o = {},
      a = {},
      i = {};
    var l, s;
    return (
      (l = (e, t, l) => {
        if (
          ("string" === typeof t || "number" === typeof t) &&
          (!r || !r(e, t))
        ) {
          const r = `--${n ? `${n}-` : ""}${e.join("-")}`,
            s = ((e, t) =>
              "number" === typeof t
                ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((t) =>
                    e.includes(t)
                  ) || e[e.length - 1].toLowerCase().includes("opacity")
                  ? t
                  : `${t}px`
                : t)(e, t);
          Object.assign(o, { [r]: s }),
            bi(a, e, `var(${r})`, l),
            bi(i, e, `var(${r}, ${s})`, l);
        }
      }),
      (s = (e) => "vars" === e[0]),
      (function e(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        Object.entries(t).forEach((t) => {
          let [o, a] = t;
          (!s || (s && !s([...n, o]))) &&
            void 0 !== a &&
            null !== a &&
            ("object" === typeof a && Object.keys(a).length > 0
              ? e(a, [...n, o], Array.isArray(a) ? [...r, o] : r)
              : l([...n, o], a, r));
        });
      })(e),
      { css: o, vars: a, varsWithDefaults: i }
    );
  }
  const wi = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const {
        getSelector: n = g,
        disableCssColorScheme: r,
        colorSchemeSelector: o,
      } = t,
      {
        colorSchemes: a = {},
        components: i,
        defaultColorScheme: l = "light",
        ...s
      } = e,
      { vars: u, css: c, varsWithDefaults: d } = xi(s, t);
    let p = d;
    const f = {},
      { [l]: h, ...m } = a;
    if (
      (Object.entries(m || {}).forEach((e) => {
        let [n, r] = e;
        const { vars: o, css: a, varsWithDefaults: i } = xi(r, t);
        (p = Ao(p, i)), (f[n] = { css: a, vars: o });
      }),
      h)
    ) {
      const { css: e, vars: n, varsWithDefaults: r } = xi(h, t);
      (p = Ao(p, r)), (f[l] = { css: e, vars: n });
    }
    function g(t, n) {
      let r = o;
      if (
        ("class" === o && (r = ".%s"),
        "data" === o && (r = "[data-%s]"),
        o?.startsWith("data-") && !o.includes("%s") && (r = `[${o}="%s"]`),
        t)
      ) {
        if ("media" === r) {
          if (e.defaultColorScheme === t) return ":root";
          const r = a[t]?.palette?.mode || t;
          return { [`@media (prefers-color-scheme: ${r})`]: { ":root": n } };
        }
        if (r)
          return e.defaultColorScheme === t
            ? `:root, ${r.replace("%s", String(t))}`
            : r.replace("%s", String(t));
      }
      return ":root";
    }
    return {
      vars: p,
      generateThemeVars: () => {
        let e = { ...u };
        return (
          Object.entries(f).forEach((t) => {
            let [, { vars: n }] = t;
            e = Ao(e, n);
          }),
          e
        );
      },
      generateStyleSheets: () => {
        const t = [],
          o = e.defaultColorScheme || "light";
        function i(e, n) {
          Object.keys(n).length &&
            t.push("string" === typeof e ? { [e]: { ...n } } : e);
        }
        i(n(void 0, { ...c }), c);
        const { [o]: l, ...s } = f;
        if (l) {
          const { css: e } = l,
            t = a[o]?.palette?.mode,
            s = !r && t ? { colorScheme: t, ...e } : { ...e };
          i(n(o, { ...s }), s);
        }
        return (
          Object.entries(s).forEach((e) => {
            let [t, { css: o }] = e;
            const l = a[t]?.palette?.mode,
              s = !r && l ? { colorScheme: l, ...o } : { ...o };
            i(n(t, { ...s }), s);
          }),
          t
        );
      },
    };
  };
  function Si(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
      ...t,
    };
  }
  const ki = { textTransform: "uppercase" },
    Ai = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Ei(e, t) {
    const {
      fontFamily: n = Ai,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: i = 500,
      fontWeightBold: l = 700,
      htmlFontSize: s = 16,
      allVariants: u,
      pxToRem: c,
      ...d
    } = "function" === typeof t ? t(e) : t;
    const p = r / 14,
      f = c || ((e) => (e / s) * p + "rem"),
      h = (e, t, r, o, a) => {
        return {
          fontFamily: n,
          fontWeight: e,
          fontSize: f(t),
          lineHeight: r,
          ...(n === Ai
            ? { letterSpacing: ((i = o / t), Math.round(1e5 * i) / 1e5) + "em" }
            : {}),
          ...a,
          ...u,
        };
        var i;
      },
      m = {
        h1: h(o, 96, 1.167, -1.5),
        h2: h(o, 60, 1.2, -0.5),
        h3: h(a, 48, 1.167, 0),
        h4: h(a, 34, 1.235, 0.25),
        h5: h(a, 24, 1.334, 0),
        h6: h(i, 20, 1.6, 0.15),
        subtitle1: h(a, 16, 1.75, 0.15),
        subtitle2: h(i, 14, 1.57, 0.1),
        body1: h(a, 16, 1.5, 0.15),
        body2: h(a, 14, 1.43, 0.15),
        button: h(i, 14, 1.75, 0.4, ki),
        caption: h(a, 12, 1.66, 0.4),
        overline: h(a, 12, 2.66, 1, ki),
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
        },
      };
    return Ao(
      {
        htmlFontSize: s,
        pxToRem: f,
        fontFamily: n,
        fontSize: r,
        fontWeightLight: o,
        fontWeightRegular: a,
        fontWeightMedium: i,
        fontWeightBold: l,
        ...m,
      },
      d,
      { clone: !1 }
    );
  }
  function Ci() {
    return [
      `${arguments.length <= 0 ? void 0 : arguments[0]}px ${
        arguments.length <= 1 ? void 0 : arguments[1]
      }px ${arguments.length <= 2 ? void 0 : arguments[2]}px ${
        arguments.length <= 3 ? void 0 : arguments[3]
      }px rgba(0,0,0,0.2)`,
      `${arguments.length <= 4 ? void 0 : arguments[4]}px ${
        arguments.length <= 5 ? void 0 : arguments[5]
      }px ${arguments.length <= 6 ? void 0 : arguments[6]}px ${
        arguments.length <= 7 ? void 0 : arguments[7]
      }px rgba(0,0,0,0.14)`,
      `${arguments.length <= 8 ? void 0 : arguments[8]}px ${
        arguments.length <= 9 ? void 0 : arguments[9]
      }px ${arguments.length <= 10 ? void 0 : arguments[10]}px ${
        arguments.length <= 11 ? void 0 : arguments[11]
      }px rgba(0,0,0,0.12)`,
    ].join(",");
  }
  const Ri = [
      "none",
      Ci(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      Ci(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      Ci(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      Ci(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      Ci(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      Ci(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      Ci(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      Ci(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      Ci(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      Ci(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      Ci(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      Ci(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      Ci(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      Ci(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      Ci(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      Ci(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      Ci(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      Ci(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      Ci(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      Ci(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      Ci(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      Ci(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      Ci(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      Ci(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    Ti = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    ji = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function Ni(e) {
    return `${Math.round(e)}ms`;
  }
  function Pi(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round(10 * (4 + 15 * t ** 0.25 + t / 5)), 3e3);
  }
  function Oi(e) {
    const t = { ...Ti, ...e.easing },
      n = { ...ji, ...e.duration };
    return {
      getAutoHeightDuration: Pi,
      create: function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ["all"],
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          duration: o = n.standard,
          easing: a = t.easeInOut,
          delay: i = 0,
          ...l
        } = r;
        return (Array.isArray(e) ? e : [e])
          .map(
            (e) =>
              `${e} ${"string" === typeof o ? o : Ni(o)} ${a} ${
                "string" === typeof i ? i : Ni(i)
              }`
          )
          .join(",");
      },
      ...e,
      easing: t,
      duration: n,
    };
  }
  const Mi = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };
  function Bi() {
    const e = {
      ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
    };
    return (
      (function e(t) {
        const n = Object.entries(t);
        for (let o = 0; o < n.length; o++) {
          const [a, i] = n[o];
          (!So((r = i)) &&
            "undefined" !== typeof r &&
            "string" !== typeof r &&
            "boolean" !== typeof r &&
            "number" !== typeof r &&
            !Array.isArray(r)) ||
          a.startsWith("unstable_")
            ? delete t[a]
            : So(i) && ((t[a] = { ...i }), e(t[a]));
        }
        var r;
      })(e),
      `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';\n\nconst theme = ${JSON.stringify(
        e,
        null,
        2
      )};\n\ntheme.breakpoints = createBreakpoints(theme.breakpoints || {});\ntheme.transitions = createTransitions(theme.transitions || {});\n\nexport default theme;`
    );
  }
  function Ii() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      breakpoints: t,
      mixins: n = {},
      spacing: r,
      palette: o = {},
      transitions: a = {},
      typography: i = {},
      shape: l,
      ...s
    } = e;
    if (e.vars) throw new Error(Bo(20));
    const u = gi(o),
      c = Ma(e);
    let d = Ao(c, {
      mixins: Si(c.breakpoints, n),
      palette: u,
      shadows: Ri.slice(),
      typography: Ei(u, i),
      transitions: Oi(a),
      zIndex: { ...Mi },
    });
    d = Ao(d, s);
    for (
      var p = arguments.length, f = new Array(p > 1 ? p - 1 : 0), h = 1;
      h < p;
      h++
    )
      f[h - 1] = arguments[h];
    return (
      (d = f.reduce((e, t) => Ao(e, t), d)),
      (d.unstable_sxConfig = { ...ja, ...s?.unstable_sxConfig }),
      (d.unstable_sx = function (e) {
        return Pa({ sx: e, theme: this });
      }),
      (d.toRuntimeSource = Bi),
      d
    );
  }
  const Li = Ii;
  function Fi(e) {
    let t;
    return (
      (t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2),
      Math.round(10 * t) / 1e3
    );
  }
  const zi = [...Array(25)].map((e, t) => {
    if (0 === t) return "none";
    const n = Fi(t);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
  function Di(e) {
    return {
      inputPlaceholder: "dark" === e ? 0.5 : 0.42,
      inputUnderline: "dark" === e ? 0.7 : 0.42,
      switchTrackDisabled: "dark" === e ? 0.2 : 0.12,
      switchTrack: "dark" === e ? 0.3 : 0.38,
    };
  }
  function Ui(e) {
    return "dark" === e ? zi : [];
  }
  function Vi(e) {
    return (
      !!e[0].match(
        /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
      ) ||
      !!e[0].match(/sxConfig$/) ||
      ("palette" === e[0] &&
        !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
    );
  }
  const Wi = (e) => [
      ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
      `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
      `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
    ],
    Hi = (e) => (t, n) => {
      const r = e.rootSelector || ":root",
        o = e.colorSchemeSelector;
      let a = o;
      if (
        ("class" === o && (a = ".%s"),
        "data" === o && (a = "[data-%s]"),
        o?.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`),
        e.defaultColorScheme === t)
      ) {
        if ("dark" === t) {
          const o = {};
          return (
            Wi(e.cssVarPrefix).forEach((e) => {
              (o[e] = n[e]), delete n[e];
            }),
            "media" === a
              ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: o } }
              : a
              ? { [a.replace("%s", t)]: o, [`${r}, ${a.replace("%s", t)}`]: n }
              : { [r]: { ...n, ...o } }
          );
        }
        if (a && "media" !== a) return `${r}, ${a.replace("%s", String(t))}`;
      } else if (t) {
        if ("media" === a)
          return {
            [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n },
          };
        if (a) return a.replace("%s", String(t));
      }
      return r;
    };
  function Qi(e, t, n) {
    !e[t] && n && (e[t] = n);
  }
  function qi(e) {
    return e && e.startsWith("hsl") ? Ya(e) : e;
  }
  function Gi(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = Ga(qi(e[t])));
  }
  const Ki = (e) => {
    try {
      return e();
    } catch (t) {}
  };
  function Yi(e, t, n, r) {
    if (!t) return;
    t = !0 === t ? {} : t;
    const o = "dark" === r ? "dark" : "light";
    if (!n)
      return void (e[r] = (function (e) {
        const {
            palette: t = { mode: "light" },
            opacity: n,
            overlays: r,
            ...o
          } = e,
          a = gi(t);
        return {
          palette: a,
          opacity: { ...Di(a.mode), ...n },
          overlays: r || Ui(a.mode),
          ...o,
        };
      })({ ...t, palette: { mode: o, ...t?.palette } }));
    const { palette: a, ...i } = Li({
      ...n,
      palette: { mode: o, ...t?.palette },
    });
    return (
      (e[r] = {
        ...t,
        palette: a,
        opacity: { ...Di(o), ...t?.opacity },
        overlays: t?.overlays || Ui(o),
      }),
      i
    );
  }
  function Zi() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
        colorSchemes: t = { light: !0 },
        defaultColorScheme: n,
        disableCssColorScheme: r = !1,
        cssVarPrefix: o = "mui",
        shouldSkipGeneratingVar: a = Vi,
        colorSchemeSelector: i = t.light && t.dark ? "media" : void 0,
        rootSelector: l = ":root",
        ...s
      } = e,
      u = Object.keys(t)[0],
      c = n || (t.light && "light" !== u ? "light" : u),
      d = (function () {
        return yi(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mui"
        );
      })(o),
      { [c]: p, light: f, dark: h, ...m } = t,
      g = { ...m };
    let y = p;
    if (
      ((("dark" === c && !("dark" in t)) ||
        ("light" === c && !("light" in t))) &&
        (y = !0),
      !y)
    )
      throw new Error(Bo(21, c));
    const v = Yi(g, y, s, c);
    f && !g.light && Yi(g, f, void 0, "light"),
      h && !g.dark && Yi(g, h, void 0, "dark");
    let b = {
      defaultColorScheme: c,
      ...v,
      cssVarPrefix: o,
      colorSchemeSelector: i,
      rootSelector: l,
      getCssVar: d,
      colorSchemes: g,
      font: { ...vi(v.typography), ...v.font },
      spacing:
        ((x = s.spacing),
        "number" === typeof x
          ? `${x}px`
          : "string" === typeof x || "function" === typeof x || Array.isArray(x)
          ? x
          : "8px"),
    };
    var x;
    Object.keys(b.colorSchemes).forEach((e) => {
      const t = b.colorSchemes[e].palette,
        n = (e) => {
          const n = e.split("-"),
            r = n[1],
            o = n[2];
          return d(e, t[r][o]);
        };
      var r;
      if (
        ("light" === t.mode &&
          (Qi(t.common, "background", "#fff"),
          Qi(t.common, "onBackground", "#000")),
        "dark" === t.mode &&
          (Qi(t.common, "background", "#000"),
          Qi(t.common, "onBackground", "#fff")),
        (r = t),
        [
          "Alert",
          "AppBar",
          "Avatar",
          "Button",
          "Chip",
          "FilledInput",
          "LinearProgress",
          "Skeleton",
          "Slider",
          "SnackbarContent",
          "SpeedDialAction",
          "StepConnector",
          "StepContent",
          "Switch",
          "TableCell",
          "Tooltip",
        ].forEach((e) => {
          r[e] || (r[e] = {});
        }),
        "light" === t.mode)
      ) {
        Qi(t.Alert, "errorColor", $a(t.error.light, 0.6)),
          Qi(t.Alert, "infoColor", $a(t.info.light, 0.6)),
          Qi(t.Alert, "successColor", $a(t.success.light, 0.6)),
          Qi(t.Alert, "warningColor", $a(t.warning.light, 0.6)),
          Qi(t.Alert, "errorFilledBg", n("palette-error-main")),
          Qi(t.Alert, "infoFilledBg", n("palette-info-main")),
          Qi(t.Alert, "successFilledBg", n("palette-success-main")),
          Qi(t.Alert, "warningFilledBg", n("palette-warning-main")),
          Qi(
            t.Alert,
            "errorFilledColor",
            Ki(() => t.getContrastText(t.error.main))
          ),
          Qi(
            t.Alert,
            "infoFilledColor",
            Ki(() => t.getContrastText(t.info.main))
          ),
          Qi(
            t.Alert,
            "successFilledColor",
            Ki(() => t.getContrastText(t.success.main))
          ),
          Qi(
            t.Alert,
            "warningFilledColor",
            Ki(() => t.getContrastText(t.warning.main))
          ),
          Qi(t.Alert, "errorStandardBg", ti(t.error.light, 0.9)),
          Qi(t.Alert, "infoStandardBg", ti(t.info.light, 0.9)),
          Qi(t.Alert, "successStandardBg", ti(t.success.light, 0.9)),
          Qi(t.Alert, "warningStandardBg", ti(t.warning.light, 0.9)),
          Qi(t.Alert, "errorIconColor", n("palette-error-main")),
          Qi(t.Alert, "infoIconColor", n("palette-info-main")),
          Qi(t.Alert, "successIconColor", n("palette-success-main")),
          Qi(t.Alert, "warningIconColor", n("palette-warning-main")),
          Qi(t.AppBar, "defaultBg", n("palette-grey-100")),
          Qi(t.Avatar, "defaultBg", n("palette-grey-400")),
          Qi(t.Button, "inheritContainedBg", n("palette-grey-300")),
          Qi(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")),
          Qi(t.Chip, "defaultBorder", n("palette-grey-400")),
          Qi(t.Chip, "defaultAvatarColor", n("palette-grey-700")),
          Qi(t.Chip, "defaultIconColor", n("palette-grey-700")),
          Qi(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
          Qi(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
          Qi(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
          Qi(t.LinearProgress, "primaryBg", ti(t.primary.main, 0.62)),
          Qi(t.LinearProgress, "secondaryBg", ti(t.secondary.main, 0.62)),
          Qi(t.LinearProgress, "errorBg", ti(t.error.main, 0.62)),
          Qi(t.LinearProgress, "infoBg", ti(t.info.main, 0.62)),
          Qi(t.LinearProgress, "successBg", ti(t.success.main, 0.62)),
          Qi(t.LinearProgress, "warningBg", ti(t.warning.main, 0.62)),
          Qi(
            t.Skeleton,
            "bg",
            `rgba(${n("palette-text-primaryChannel")} / 0.11)`
          ),
          Qi(t.Slider, "primaryTrack", ti(t.primary.main, 0.62)),
          Qi(t.Slider, "secondaryTrack", ti(t.secondary.main, 0.62)),
          Qi(t.Slider, "errorTrack", ti(t.error.main, 0.62)),
          Qi(t.Slider, "infoTrack", ti(t.info.main, 0.62)),
          Qi(t.Slider, "successTrack", ti(t.success.main, 0.62)),
          Qi(t.Slider, "warningTrack", ti(t.warning.main, 0.62));
        const e = ni(t.background.default, 0.8);
        Qi(t.SnackbarContent, "bg", e),
          Qi(
            t.SnackbarContent,
            "color",
            Ki(() => t.getContrastText(e))
          ),
          Qi(t.SpeedDialAction, "fabHoverBg", ni(t.background.paper, 0.15)),
          Qi(t.StepConnector, "border", n("palette-grey-400")),
          Qi(t.StepContent, "border", n("palette-grey-400")),
          Qi(t.Switch, "defaultColor", n("palette-common-white")),
          Qi(t.Switch, "defaultDisabledColor", n("palette-grey-100")),
          Qi(t.Switch, "primaryDisabledColor", ti(t.primary.main, 0.62)),
          Qi(t.Switch, "secondaryDisabledColor", ti(t.secondary.main, 0.62)),
          Qi(t.Switch, "errorDisabledColor", ti(t.error.main, 0.62)),
          Qi(t.Switch, "infoDisabledColor", ti(t.info.main, 0.62)),
          Qi(t.Switch, "successDisabledColor", ti(t.success.main, 0.62)),
          Qi(t.Switch, "warningDisabledColor", ti(t.warning.main, 0.62)),
          Qi(t.TableCell, "border", ti(Xa(t.divider, 1), 0.88)),
          Qi(t.Tooltip, "bg", Xa(t.grey[700], 0.92));
      }
      if ("dark" === t.mode) {
        Qi(t.Alert, "errorColor", ti(t.error.light, 0.6)),
          Qi(t.Alert, "infoColor", ti(t.info.light, 0.6)),
          Qi(t.Alert, "successColor", ti(t.success.light, 0.6)),
          Qi(t.Alert, "warningColor", ti(t.warning.light, 0.6)),
          Qi(t.Alert, "errorFilledBg", n("palette-error-dark")),
          Qi(t.Alert, "infoFilledBg", n("palette-info-dark")),
          Qi(t.Alert, "successFilledBg", n("palette-success-dark")),
          Qi(t.Alert, "warningFilledBg", n("palette-warning-dark")),
          Qi(
            t.Alert,
            "errorFilledColor",
            Ki(() => t.getContrastText(t.error.dark))
          ),
          Qi(
            t.Alert,
            "infoFilledColor",
            Ki(() => t.getContrastText(t.info.dark))
          ),
          Qi(
            t.Alert,
            "successFilledColor",
            Ki(() => t.getContrastText(t.success.dark))
          ),
          Qi(
            t.Alert,
            "warningFilledColor",
            Ki(() => t.getContrastText(t.warning.dark))
          ),
          Qi(t.Alert, "errorStandardBg", $a(t.error.light, 0.9)),
          Qi(t.Alert, "infoStandardBg", $a(t.info.light, 0.9)),
          Qi(t.Alert, "successStandardBg", $a(t.success.light, 0.9)),
          Qi(t.Alert, "warningStandardBg", $a(t.warning.light, 0.9)),
          Qi(t.Alert, "errorIconColor", n("palette-error-main")),
          Qi(t.Alert, "infoIconColor", n("palette-info-main")),
          Qi(t.Alert, "successIconColor", n("palette-success-main")),
          Qi(t.Alert, "warningIconColor", n("palette-warning-main")),
          Qi(t.AppBar, "defaultBg", n("palette-grey-900")),
          Qi(t.AppBar, "darkBg", n("palette-background-paper")),
          Qi(t.AppBar, "darkColor", n("palette-text-primary")),
          Qi(t.Avatar, "defaultBg", n("palette-grey-600")),
          Qi(t.Button, "inheritContainedBg", n("palette-grey-800")),
          Qi(t.Button, "inheritContainedHoverBg", n("palette-grey-700")),
          Qi(t.Chip, "defaultBorder", n("palette-grey-700")),
          Qi(t.Chip, "defaultAvatarColor", n("palette-grey-300")),
          Qi(t.Chip, "defaultIconColor", n("palette-grey-300")),
          Qi(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
          Qi(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
          Qi(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
          Qi(t.LinearProgress, "primaryBg", $a(t.primary.main, 0.5)),
          Qi(t.LinearProgress, "secondaryBg", $a(t.secondary.main, 0.5)),
          Qi(t.LinearProgress, "errorBg", $a(t.error.main, 0.5)),
          Qi(t.LinearProgress, "infoBg", $a(t.info.main, 0.5)),
          Qi(t.LinearProgress, "successBg", $a(t.success.main, 0.5)),
          Qi(t.LinearProgress, "warningBg", $a(t.warning.main, 0.5)),
          Qi(
            t.Skeleton,
            "bg",
            `rgba(${n("palette-text-primaryChannel")} / 0.13)`
          ),
          Qi(t.Slider, "primaryTrack", $a(t.primary.main, 0.5)),
          Qi(t.Slider, "secondaryTrack", $a(t.secondary.main, 0.5)),
          Qi(t.Slider, "errorTrack", $a(t.error.main, 0.5)),
          Qi(t.Slider, "infoTrack", $a(t.info.main, 0.5)),
          Qi(t.Slider, "successTrack", $a(t.success.main, 0.5)),
          Qi(t.Slider, "warningTrack", $a(t.warning.main, 0.5));
        const e = ni(t.background.default, 0.98);
        Qi(t.SnackbarContent, "bg", e),
          Qi(
            t.SnackbarContent,
            "color",
            Ki(() => t.getContrastText(e))
          ),
          Qi(t.SpeedDialAction, "fabHoverBg", ni(t.background.paper, 0.15)),
          Qi(t.StepConnector, "border", n("palette-grey-600")),
          Qi(t.StepContent, "border", n("palette-grey-600")),
          Qi(t.Switch, "defaultColor", n("palette-grey-300")),
          Qi(t.Switch, "defaultDisabledColor", n("palette-grey-600")),
          Qi(t.Switch, "primaryDisabledColor", $a(t.primary.main, 0.55)),
          Qi(t.Switch, "secondaryDisabledColor", $a(t.secondary.main, 0.55)),
          Qi(t.Switch, "errorDisabledColor", $a(t.error.main, 0.55)),
          Qi(t.Switch, "infoDisabledColor", $a(t.info.main, 0.55)),
          Qi(t.Switch, "successDisabledColor", $a(t.success.main, 0.55)),
          Qi(t.Switch, "warningDisabledColor", $a(t.warning.main, 0.55)),
          Qi(t.TableCell, "border", $a(Xa(t.divider, 1), 0.68)),
          Qi(t.Tooltip, "bg", Xa(t.grey[700], 0.92));
      }
      Gi(t.background, "default"),
        Gi(t.background, "paper"),
        Gi(t.common, "background"),
        Gi(t.common, "onBackground"),
        Gi(t, "divider"),
        Object.keys(t).forEach((e) => {
          const n = t[e];
          n &&
            "object" === typeof n &&
            (n.main && Qi(t[e], "mainChannel", Ga(qi(n.main))),
            n.light && Qi(t[e], "lightChannel", Ga(qi(n.light))),
            n.dark && Qi(t[e], "darkChannel", Ga(qi(n.dark))),
            n.contrastText &&
              Qi(t[e], "contrastTextChannel", Ga(qi(n.contrastText))),
            "text" === e && (Gi(t[e], "primary"), Gi(t[e], "secondary")),
            "action" === e &&
              (n.active && Gi(t[e], "active"),
              n.selected && Gi(t[e], "selected")));
        });
    });
    for (
      var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), k = 1;
      k < w;
      k++
    )
      S[k - 1] = arguments[k];
    b = S.reduce((e, t) => Ao(e, t), b);
    const A = {
        prefix: o,
        disableCssColorScheme: r,
        shouldSkipGeneratingVar: a,
        getSelector: Hi(b),
      },
      { vars: E, generateThemeVars: C, generateStyleSheets: R } = wi(b, A);
    return (
      (b.vars = E),
      Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach((e) => {
        let [t, n] = e;
        b[t] = n;
      }),
      (b.generateThemeVars = C),
      (b.generateStyleSheets = R),
      (b.generateSpacing = function () {
        return ta(s.spacing, Yo(this));
      }),
      (b.getColorSchemeSelector = (function (e) {
        return function (t) {
          return "media" === e
            ? `@media (prefers-color-scheme: ${t})`
            : e
            ? e.startsWith("data-") && !e.includes("%s")
              ? `[${e}="${t}"] &`
              : "class" === e
              ? `.${t} &`
              : "data" === e
              ? `[data-${t}] &`
              : `${e.replace("%s", t)} &`
            : "&";
        };
      })(i)),
      (b.spacing = b.generateSpacing()),
      (b.shouldSkipGeneratingVar = a),
      (b.unstable_sxConfig = { ...ja, ...s?.unstable_sxConfig }),
      (b.unstable_sx = function (e) {
        return Pa({ sx: e, theme: this });
      }),
      (b.toRuntimeSource = Bi),
      b
    );
  }
  function Ji(e, t, n) {
    e.colorSchemes &&
      n &&
      (e.colorSchemes[t] = {
        ...(!0 !== n && n),
        palette: gi({ ...(!0 === n ? {} : n.palette), mode: t }),
      });
  }
  function Xi() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
        palette: t,
        cssVariables: n = !1,
        colorSchemes: r = t ? void 0 : { light: !0 },
        defaultColorScheme: o = t?.mode,
        ...a
      } = e,
      i = o || "light",
      l = r?.[i],
      s = {
        ...r,
        ...(t
          ? { [i]: { ...("boolean" !== typeof l && l), palette: t } }
          : void 0),
      };
    for (
      var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), d = 1;
      d < u;
      d++
    )
      c[d - 1] = arguments[d];
    if (!1 === n) {
      if (!("colorSchemes" in e)) return Li(e, ...c);
      let n = t;
      "palette" in e ||
        (s[i] &&
          (!0 !== s[i]
            ? (n = s[i].palette)
            : "dark" === i && (n = { mode: "dark" })));
      const r = Li({ ...e, palette: n }, ...c);
      return (
        (r.defaultColorScheme = i),
        (r.colorSchemes = s),
        "light" === r.palette.mode &&
          ((r.colorSchemes.light = {
            ...(!0 !== s.light && s.light),
            palette: r.palette,
          }),
          Ji(r, "dark", s.dark)),
        "dark" === r.palette.mode &&
          ((r.colorSchemes.dark = {
            ...(!0 !== s.dark && s.dark),
            palette: r.palette,
          }),
          Ji(r, "light", s.light)),
        r
      );
    }
    return (
      t || "light" in s || "light" !== i || (s.light = !0),
      Zi(
        {
          ...a,
          colorSchemes: s,
          defaultColorScheme: i,
          ...("boolean" !== typeof n && n),
        },
        ...c
      )
    );
  }
  const _i = Xi(),
    $i = "$$material";
  const el = function (e) {
      return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
    },
    tl = (e) => el(e) && "classes" !== e,
    nl = Ua({ themeId: $i, defaultTheme: _i, rootShouldForwardProp: tl });
  function rl(e, t) {
    const n = { ...t };
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const o = r;
        if ("components" === o || "slots" === o) n[o] = { ...e[o], ...n[o] };
        else if ("componentsProps" === o || "slotProps" === o) {
          const r = e[o],
            a = t[o];
          if (a)
            if (r) {
              n[o] = { ...a };
              for (const e in r)
                if (Object.prototype.hasOwnProperty.call(r, e)) {
                  const t = e;
                  n[o][t] = rl(r[t], a[t]);
                }
            } else n[o] = a;
          else n[o] = r || {};
        } else void 0 === n[o] && (n[o] = e[o]);
      }
    return n;
  }
  var ol = n(579);
  const al = a.createContext(void 0);
  function il(e) {
    let { props: t, name: n } = e;
    return (function (e) {
      const { theme: t, name: n, props: r } = e;
      if (!t || !t.components || !t.components[n]) return r;
      const o = t.components[n];
      return o.defaultProps
        ? rl(o.defaultProps, r)
        : o.styleOverrides || o.variants
        ? r
        : rl(o, r);
    })({ props: t, name: n, theme: { components: a.useContext(al) } });
  }
  function ll(e) {
    return il(e);
  }
  const sl = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const t = a.useContext(uo);
      return t && ((n = t), 0 !== Object.keys(n).length) ? t : e;
      var n;
    },
    ul = Ma();
  const cl = function () {
    return sl(
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ul
    );
  };
  function dl() {
    const e = cl(_i);
    return e[$i] || e;
  }
  const pl = { theme: void 0 };
  const fl = function (e) {
      let t, n;
      return function (r) {
        let o = t;
        return (
          (void 0 !== o && r.theme === n) ||
            ((pl.theme = r.theme), (o = Ba(e(pl))), (t = o), (n = r.theme)),
          o
        );
      };
    },
    hl = (e) => e,
    ml = (() => {
      let e = hl;
      return {
        configure(t) {
          e = t;
        },
        generate: (t) => e(t),
        reset() {
          e = hl;
        },
      };
    })(),
    gl = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected",
    };
  function yl(e, t) {
    const n = gl[t];
    return n
      ? `${
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui"
        }-${n}`
      : `${ml.generate(e)}-${t}`;
  }
  function vl(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui";
    const r = {};
    return (
      t.forEach((t) => {
        r[t] = yl(e, t, n);
      }),
      r
    );
  }
  function bl(e) {
    return yl("MuiPaper", e);
  }
  vl("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24",
  ]);
  const xl = nl("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          !n.square && t.rounded,
          "elevation" === n.variant && t[`elevation${n.elevation}`],
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          backgroundColor: (t.vars || t).palette.background.paper,
          color: (t.vars || t).palette.text.primary,
          transition: t.transitions.create("box-shadow"),
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.square;
              },
              style: { borderRadius: t.shape.borderRadius },
            },
            {
              props: { variant: "outlined" },
              style: { border: `1px solid ${(t.vars || t).palette.divider}` },
            },
            {
              props: { variant: "elevation" },
              style: {
                boxShadow: "var(--Paper-shadow)",
                backgroundImage: "var(--Paper-overlay)",
              },
            },
          ],
        };
      })
    ),
    wl = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiPaper" }),
        r = dl(),
        {
          className: o,
          component: a = "div",
          elevation: i = 1,
          square: l = !1,
          variant: s = "elevation",
          ...u
        } = n,
        c = { ...n, component: a, elevation: i, square: l, variant: s },
        d = ((e) => {
          const { square: t, elevation: n, variant: r, classes: o } = e;
          return Un(
            {
              root: [
                "root",
                r,
                !t && "rounded",
                "elevation" === r && `elevation${n}`,
              ],
            },
            bl,
            o
          );
        })(c);
      return (0,
      ol.jsx)(xl, { as: a, ownerState: c, className: Dn(d.root, o), ref: t, ...u, style: { ...("elevation" === s && { "--Paper-shadow": (r.vars || r).shadows[i], ...(r.vars && { "--Paper-overlay": r.vars.overlays?.[i] }), ...(!r.vars && "dark" === r.palette.mode && { "--Paper-overlay": `linear-gradient(${Ja("#fff", Fi(i))}, ${Ja("#fff", Fi(i))})` }) }), ...u.style } });
    });
  function Sl(e) {
    return yl("MuiCard", e);
  }
  vl("MuiCard", ["root"]);
  const kl = nl(wl, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ overflow: "hidden" }),
    Al = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiCard" }),
        { className: r, raised: o = !1, ...a } = n,
        i = { ...n, raised: o },
        l = ((e) => {
          const { classes: t } = e;
          return Un({ root: ["root"] }, Sl, t);
        })(i);
      return (0,
      ol.jsx)(kl, { className: Dn(l.root, r), elevation: o ? 8 : void 0, ref: t, ownerState: i, ...a });
    });
  function El(e) {
    const { sx: t, ...n } = e,
      { systemProps: r, otherProps: o } = ((e) => {
        const t = { systemProps: {}, otherProps: {} },
          n = e?.theme?.unstable_sxConfig ?? ja;
        return (
          Object.keys(e).forEach((r) => {
            n[r] ? (t.systemProps[r] = e[r]) : (t.otherProps[r] = e[r]);
          }),
          t
        );
      })(n);
    let a;
    return (
      (a = Array.isArray(t)
        ? [r, ...t]
        : "function" === typeof t
        ? function () {
            const e = t(...arguments);
            return So(e) ? { ...r, ...e } : r;
          }
        : { ...r, ...t }),
      { ...o, sx: a }
    );
  }
  const Cl = vl("MuiBox", ["root"]),
    Rl = Xi(),
    Tl = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
          themeId: t,
          defaultTheme: n,
          defaultClassName: r = "MuiBox-root",
          generateClassName: o,
        } = e,
        i = bo("div", {
          shouldForwardProp: (e) => "theme" !== e && "sx" !== e && "as" !== e,
        })(Pa);
      return a.forwardRef(function (e, a) {
        const l = cl(n),
          { className: s, component: u = "div", ...c } = El(e);
        return (0,
        ol.jsx)(i, { as: u, ref: a, className: Dn(s, o ? o(r) : r), theme: (t && l[t]) || l, ...c });
      });
    })({
      themeId: $i,
      defaultTheme: Rl,
      defaultClassName: Cl.root,
      generateClassName: ml.generate,
    }),
    jl = Tl,
    Nl = Ua();
  function Pl(e) {
    let { props: t, name: n, defaultTheme: r, themeId: o } = e,
      a = cl(r);
    return (
      o && (a = a[o] || a),
      (function (e) {
        const { theme: t, name: n, props: r } = e;
        return t &&
          t.components &&
          t.components[n] &&
          t.components[n].defaultProps
          ? rl(t.components[n].defaultProps, r)
          : r;
      })({ theme: a, name: n, props: t })
    );
  }
  const Ol = Ma(),
    Ml = Nl("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    });
  function Bl(e) {
    return Pl({ props: e, name: "MuiStack", defaultTheme: Ol });
  }
  function Il(e, t) {
    const n = a.Children.toArray(e).filter(Boolean);
    return n.reduce(
      (e, r, o) => (
        e.push(r),
        o < n.length - 1 &&
          e.push(a.cloneElement(t, { key: `separator-${o}` })),
        e
      ),
      []
    );
  }
  const Ll = (e) => {
    let { ownerState: t, theme: n } = e,
      r = {
        display: "flex",
        flexDirection: "column",
        ...No(
          { theme: n },
          Mo({ values: t.direction, breakpoints: n.breakpoints.values }),
          (e) => ({ flexDirection: e })
        ),
      };
    if (t.spacing) {
      const e = Yo(n),
        o = Object.keys(n.breakpoints.values).reduce(
          (e, n) => (
            (("object" === typeof t.spacing && null != t.spacing[n]) ||
              ("object" === typeof t.direction && null != t.direction[n])) &&
              (e[n] = !0),
            e
          ),
          {}
        ),
        a = Mo({ values: t.direction, base: o }),
        i = Mo({ values: t.spacing, base: o });
      "object" === typeof a &&
        Object.keys(a).forEach((e, t, n) => {
          if (!a[e]) {
            const r = t > 0 ? a[n[t - 1]] : "column";
            a[e] = r;
          }
        });
      r = Ao(
        r,
        No({ theme: n }, i, (n, r) => {
          return t.useFlexGap
            ? { gap: Zo(e, n) }
            : {
                "& > :not(style):not(style)": { margin: 0 },
                "& > :not(style) ~ :not(style)": {
                  [`margin${
                    ((o = r ? a[r] : t.direction),
                    {
                      row: "Left",
                      "row-reverse": "Right",
                      column: "Top",
                      "column-reverse": "Bottom",
                    }[o])
                  }`]: Zo(e, n),
                },
              };
          var o;
        })
      );
    }
    return (
      (r = (function (e) {
        const t = Po(e);
        for (
          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        const a = [t, ...r].reduce((e, t) => Ao(e, t), {});
        return Oo(Object.keys(t), a);
      })(n.breakpoints, r)),
      r
    );
  };
  const Fl = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
          createStyledComponent: t = Ml,
          useThemeProps: n = Bl,
          componentName: r = "MuiStack",
        } = e,
        o = t(Ll),
        i = a.forwardRef(function (e, t) {
          const a = El(n(e)),
            {
              component: i = "div",
              direction: l = "column",
              spacing: s = 0,
              divider: u,
              children: c,
              className: d,
              useFlexGap: p = !1,
              ...f
            } = a,
            h = { direction: l, spacing: s, useFlexGap: p },
            m = Un({ root: ["root"] }, (e) => yl(r, e), {});
          return (0,
          ol.jsx)(o, { as: i, ownerState: h, ref: t, className: Dn(m.root, d), ...f, children: u ? Il(c, u) : c });
        });
      return i;
    })({
      createStyledComponent: nl("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
      }),
      useThemeProps: (e) => ll({ props: e, name: "MuiStack" }),
    }),
    zl = Fl;
  n(219);
  var Dl = so(function (e, t) {
    var n = ro([e.styles], void 0, a.useContext(uo)),
      r = a.useRef();
    return (
      io(
        function () {
          var e = t.key + "-global",
            o = new t.sheet.constructor({
              key: e,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            i = document.querySelector(
              'style[data-emotion="' + e + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (o.before = t.sheet.tags[0]),
            null !== i &&
              ((a = !0), i.setAttribute("data-emotion", e), o.hydrate([i])),
            (r.current = [o, a]),
            function () {
              o.flush();
            }
          );
        },
        [t]
      ),
      io(
        function () {
          var e = r.current,
            o = e[0];
          if (e[1]) e[1] = !1;
          else {
            if ((void 0 !== n.next && po(t, n.next, !0), o.tags.length)) {
              var a = o.tags[o.tags.length - 1].nextElementSibling;
              (o.before = a), o.flush();
            }
            t.insert("", n, o, !1);
          }
        },
        [t, n.name]
      ),
      null
    );
  });
  function Ul() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return ro(t);
  }
  var Vl = function () {
    var e = Ul.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  };
  function Wl(e) {
    const { styles: t, defaultTheme: n = {} } = e,
      r =
        "function" === typeof t
          ? (e) => {
              return t(
                void 0 === (r = e) || null === r || 0 === Object.keys(r).length
                  ? n
                  : e
              );
              var r;
            }
          : t;
    return (0, ol.jsx)(Dl, { styles: r });
  }
  const Hl = function (e) {
    let { styles: t, themeId: n, defaultTheme: r = {} } = e;
    const o = cl(r),
      a = "function" === typeof t ? t((n && o[n]) || o) : t;
    return (0, ol.jsx)(Wl, { styles: a });
  };
  const Ql = function (e) {
    return (0, ol.jsx)(Hl, { ...e, defaultTheme: _i, themeId: $i });
  };
  const ql = Io;
  function Gl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (t) => {
      let [, n] = t;
      return (
        n &&
        (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          if (
            !(function (e) {
              return "string" === typeof e.main;
            })(e)
          )
            return !1;
          for (const n of t)
            if (!e.hasOwnProperty(n) || "string" !== typeof e[n]) return !1;
          return !0;
        })(n, e)
      );
    };
  }
  function Kl(e) {
    return yl("MuiTypography", e);
  }
  vl("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
  ]);
  const Yl = {
      primary: !0,
      secondary: !0,
      error: !0,
      info: !0,
      success: !0,
      warning: !0,
      textPrimary: !0,
      textSecondary: !0,
      textDisabled: !0,
    },
    Zl = El,
    Jl = nl("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.variant && t[n.variant],
          "inherit" !== n.align && t[`align${ql(n.align)}`],
          n.noWrap && t.noWrap,
          n.gutterBottom && t.gutterBottom,
          n.paragraph && t.paragraph,
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          margin: 0,
          variants: [
            {
              props: { variant: "inherit" },
              style: {
                font: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
              },
            },
            ...Object.entries(t.typography)
              .filter((e) => {
                let [t, n] = e;
                return "inherit" !== t && n && "object" === typeof n;
              })
              .map((e) => {
                let [t, n] = e;
                return { props: { variant: t }, style: n };
              }),
            ...Object.entries(t.palette)
              .filter(Gl())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars || t).palette[n].main },
                };
              }),
            ...Object.entries(t.palette?.text || {})
              .filter((e) => {
                let [, t] = e;
                return "string" === typeof t;
              })
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: `text${ql(n)}` },
                  style: { color: (t.vars || t).palette.text[n] },
                };
              }),
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "inherit" !== t.align;
              },
              style: { textAlign: "var(--Typography-textAlign)" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.noWrap;
              },
              style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.gutterBottom;
              },
              style: { marginBottom: "0.35em" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.paragraph;
              },
              style: { marginBottom: 16 },
            },
          ],
        };
      })
    ),
    Xl = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p",
    },
    _l = a.forwardRef(function (e, t) {
      const { color: n, ...r } = ll({ props: e, name: "MuiTypography" }),
        o = Zl({ ...r, ...(!Yl[n] && { color: n }) }),
        {
          align: a = "inherit",
          className: i,
          component: l,
          gutterBottom: s = !1,
          noWrap: u = !1,
          paragraph: c = !1,
          variant: d = "body1",
          variantMapping: p = Xl,
          ...f
        } = o,
        h = {
          ...o,
          align: a,
          color: n,
          className: i,
          component: l,
          gutterBottom: s,
          noWrap: u,
          paragraph: c,
          variant: d,
          variantMapping: p,
        },
        m = l || (c ? "p" : p[d] || Xl[d]) || "span",
        g = ((e) => {
          const {
            align: t,
            gutterBottom: n,
            noWrap: r,
            paragraph: o,
            variant: a,
            classes: i,
          } = e;
          return Un(
            {
              root: [
                "root",
                a,
                "inherit" !== e.align && `align${ql(t)}`,
                n && "gutterBottom",
                r && "noWrap",
                o && "paragraph",
              ],
            },
            Kl,
            i
          );
        })(h);
      return (0,
      ol.jsx)(Jl, { as: m, ref: t, className: Dn(g.root, i), ...f, ownerState: h, style: { ...("inherit" !== a && { "--Typography-textAlign": a }), ...f.style } });
    }),
    $l = _l;
  function es(e) {
    return yl("MuiCardContent", e);
  }
  vl("MuiCardContent", ["root"]);
  const ts = nl("div", {
      name: "MuiCardContent",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
    ns = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiCardContent" }),
        { className: r, component: o = "div", ...a } = n,
        i = { ...n, component: o },
        l = ((e) => {
          const { classes: t } = e;
          return Un({ root: ["root"] }, es, t);
        })(i);
      return (0,
      ol.jsx)(ts, { as: o, className: Dn(l.root, r), ownerState: i, ref: t, ...a });
    });
  function rs(e) {
    return yl("MuiSvgIcon", e);
  }
  vl("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
  ]);
  const os = nl("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          "inherit" !== n.color && t[`color${ql(n.color)}`],
          t[`fontSize${ql(n.fontSize)}`],
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          flexShrink: 0,
          transition: t.transitions?.create?.("fill", {
            duration: (t.vars ?? t).transitions?.duration?.shorter,
          }),
          variants: [
            { props: (e) => !e.hasSvgAsChild, style: { fill: "currentColor" } },
            { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
            {
              props: { fontSize: "small" },
              style: { fontSize: t.typography?.pxToRem?.(20) || "1.25rem" },
            },
            {
              props: { fontSize: "medium" },
              style: { fontSize: t.typography?.pxToRem?.(24) || "1.5rem" },
            },
            {
              props: { fontSize: "large" },
              style: { fontSize: t.typography?.pxToRem?.(35) || "2.1875rem" },
            },
            ...Object.entries((t.vars ?? t).palette)
              .filter((e) => {
                let [, t] = e;
                return t && t.main;
              })
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars ?? t).palette?.[n]?.main },
                };
              }),
            {
              props: { color: "action" },
              style: { color: (t.vars ?? t).palette?.action?.active },
            },
            {
              props: { color: "disabled" },
              style: { color: (t.vars ?? t).palette?.action?.disabled },
            },
            { props: { color: "inherit" }, style: { color: void 0 } },
          ],
        };
      })
    ),
    as = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiSvgIcon" }),
        {
          children: r,
          className: o,
          color: i = "inherit",
          component: l = "svg",
          fontSize: s = "medium",
          htmlColor: u,
          inheritViewBox: c = !1,
          titleAccess: d,
          viewBox: p = "0 0 24 24",
          ...f
        } = n,
        h = a.isValidElement(r) && "svg" === r.type,
        m = {
          ...n,
          color: i,
          component: l,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: c,
          viewBox: p,
          hasSvgAsChild: h,
        },
        g = {};
      c || (g.viewBox = p);
      const y = ((e) => {
        const { color: t, fontSize: n, classes: r } = e;
        return Un(
          {
            root: [
              "root",
              "inherit" !== t && `color${ql(t)}`,
              `fontSize${ql(n)}`,
            ],
          },
          rs,
          r
        );
      })(m);
      return (0,
      ol.jsxs)(os, { as: l, className: Dn(y.root, o), focusable: "false", color: u, "aria-hidden": !d || void 0, role: d ? "img" : void 0, ref: t, ...g, ...f, ...(h && r.props), ownerState: m, children: [h ? r.props.children : r, d ? (0, ol.jsx)("title", { children: d }) : null] });
    });
  as && (as.muiName = "SvgIcon");
  const is = as;
  function ls(e, t) {
    function n(n, r) {
      return (0, ol.jsx)(is, {
        "data-testid": `${t}Icon`,
        ref: r,
        ...n,
        children: e,
      });
    }
    return (n.muiName = is.muiName), a.memo(a.forwardRef(n));
  }
  const ss = ls(
      (0, ol.jsx)("path", {
        d: "m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z",
      }),
      "Verified"
    ),
    us = (e) => {
      let { src: t, alt: n } = e;
      return (0, ol.jsx)("div", {
        className:
          "w-24 h-24 clip-hexagon overflow-hidden flex items-center justify-center",
        children: (0, ol.jsx)("img", {
          src: t,
          alt: n,
          className: "w-full h-full object-cover",
        }),
      });
    };
  var cs = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    ds = a.createContext && a.createContext(cs),
    ps = ["attr", "size", "title"];
  function fs(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++)
        (n = a[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function hs() {
    return (
      (hs = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      hs.apply(this, arguments)
    );
  }
  function ms(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function gs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ms(Object(n), !0).forEach(function (t) {
            ys(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ms(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function ys(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      })(t)),
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
  }
  function vs(e) {
    return (
      e &&
      e.map((e, t) =>
        a.createElement(e.tag, gs({ key: t }, e.attr), vs(e.child))
      )
    );
  }
  function bs(e) {
    return (t) =>
      a.createElement(xs, hs({ attr: gs({}, e.attr) }, t), vs(e.child));
  }
  function xs(e) {
    var t = (t) => {
      var n,
        { attr: r, size: o, title: i } = e,
        l = fs(e, ps),
        s = o || t.size || "1em";
      return (
        t.className && (n = t.className),
        e.className && (n = (n ? n + " " : "") + e.className),
        a.createElement(
          "svg",
          hs(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            t.attr,
            r,
            l,
            {
              className: n,
              style: gs(gs({ color: e.color || t.color }, t.style), e.style),
              height: s,
              width: s,
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i && a.createElement("title", null, i),
          e.children
        )
      );
    };
    return void 0 !== ds
      ? a.createElement(ds.Consumer, null, (e) => t(e))
      : t(cs);
  }
  function ws(e) {
    return bs({
      tag: "svg",
      attr: { viewBox: "0 0 24 24", fill: "currentColor" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M8.00488 5.00281H11.0049V14.0028H8.00488V17.0028H6.00488V14.0028H3.00488V5.00281H6.00488V2.00281H8.00488V5.00281ZM18.0049 10.0028H21.0049V19.0028H18.0049V22.0028H16.0049V19.0028H13.0049V10.0028H16.0049V7.00281H18.0049V10.0028Z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Ss(e) {
    return bs({
      tag: "svg",
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M13.74 16.5 22.5 24v-6l-7-6 7-6V0L10.26 10.5v-3L1.5 0v6l7 6-7 6v6l12.24-10.5Z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function ks(e) {
    return yl("MuiDivider", e);
  }
  const As = vl("MuiDivider", [
      "root",
      "absolute",
      "fullWidth",
      "inset",
      "middle",
      "flexItem",
      "light",
      "vertical",
      "withChildren",
      "withChildrenVertical",
      "textAlignRight",
      "textAlignLeft",
      "wrapper",
      "wrapperVertical",
    ]),
    Es = nl("div", {
      name: "MuiDivider",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.absolute && t.absolute,
          t[n.variant],
          n.light && t.light,
          "vertical" === n.orientation && t.vertical,
          n.flexItem && t.flexItem,
          n.children && t.withChildren,
          n.children && "vertical" === n.orientation && t.withChildrenVertical,
          "right" === n.textAlign &&
            "vertical" !== n.orientation &&
            t.textAlignRight,
          "left" === n.textAlign &&
            "vertical" !== n.orientation &&
            t.textAlignLeft,
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (t.vars || t).palette.divider,
          borderBottomWidth: "thin",
          variants: [
            {
              props: { absolute: !0 },
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              },
            },
            {
              props: { light: !0 },
              style: {
                borderColor: t.vars
                  ? `rgba(${t.vars.palette.dividerChannel} / 0.08)`
                  : Ja(t.palette.divider, 0.08),
              },
            },
            { props: { variant: "inset" }, style: { marginLeft: 72 } },
            {
              props: { variant: "middle", orientation: "horizontal" },
              style: { marginLeft: t.spacing(2), marginRight: t.spacing(2) },
            },
            {
              props: { variant: "middle", orientation: "vertical" },
              style: { marginTop: t.spacing(1), marginBottom: t.spacing(1) },
            },
            {
              props: { orientation: "vertical" },
              style: {
                height: "100%",
                borderBottomWidth: 0,
                borderRightWidth: "thin",
              },
            },
            {
              props: { flexItem: !0 },
              style: { alignSelf: "stretch", height: "auto" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !!t.children;
              },
              style: {
                display: "flex",
                textAlign: "center",
                border: 0,
                borderTopStyle: "solid",
                borderLeftStyle: "solid",
                "&::before, &::after": { content: '""', alignSelf: "center" },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.children && "vertical" !== t.orientation;
              },
              style: {
                "&::before, &::after": {
                  width: "100%",
                  borderTop: `thin solid ${(t.vars || t).palette.divider}`,
                  borderTopStyle: "inherit",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "vertical" === t.orientation && t.children;
              },
              style: {
                flexDirection: "column",
                "&::before, &::after": {
                  height: "100%",
                  borderLeft: `thin solid ${(t.vars || t).palette.divider}`,
                  borderLeftStyle: "inherit",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "right" === t.textAlign && "vertical" !== t.orientation;
              },
              style: {
                "&::before": { width: "90%" },
                "&::after": { width: "10%" },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "left" === t.textAlign && "vertical" !== t.orientation;
              },
              style: {
                "&::before": { width: "10%" },
                "&::after": { width: "90%" },
              },
            },
          ],
        };
      })
    ),
    Cs = nl("span", {
      name: "MuiDivider",
      slot: "Wrapper",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.wrapper, "vertical" === n.orientation && t.wrapperVertical];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          display: "inline-block",
          paddingLeft: `calc(${t.spacing(1)} * 1.2)`,
          paddingRight: `calc(${t.spacing(1)} * 1.2)`,
          whiteSpace: "nowrap",
          variants: [
            {
              props: { orientation: "vertical" },
              style: {
                paddingTop: `calc(${t.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${t.spacing(1)} * 1.2)`,
              },
            },
          ],
        };
      })
    ),
    Rs = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiDivider" }),
        {
          absolute: r = !1,
          children: o,
          className: a,
          orientation: i = "horizontal",
          component: l = o || "vertical" === i ? "div" : "hr",
          flexItem: s = !1,
          light: u = !1,
          role: c = "hr" !== l ? "separator" : void 0,
          textAlign: d = "center",
          variant: p = "fullWidth",
          ...f
        } = n,
        h = {
          ...n,
          absolute: r,
          component: l,
          flexItem: s,
          light: u,
          orientation: i,
          role: c,
          textAlign: d,
          variant: p,
        },
        m = ((e) => {
          const {
            absolute: t,
            children: n,
            classes: r,
            flexItem: o,
            light: a,
            orientation: i,
            textAlign: l,
            variant: s,
          } = e;
          return Un(
            {
              root: [
                "root",
                t && "absolute",
                s,
                a && "light",
                "vertical" === i && "vertical",
                o && "flexItem",
                n && "withChildren",
                n && "vertical" === i && "withChildrenVertical",
                "right" === l && "vertical" !== i && "textAlignRight",
                "left" === l && "vertical" !== i && "textAlignLeft",
              ],
              wrapper: ["wrapper", "vertical" === i && "wrapperVertical"],
            },
            ks,
            r
          );
        })(h);
      return (0,
      ol.jsx)(Es, { as: l, className: Dn(m.root, a), role: c, ref: t, ownerState: h, "aria-orientation": "separator" !== c || ("hr" === l && "vertical" !== i) ? void 0 : i, ...f, children: o ? (0, ol.jsx)(Cs, { className: m.wrapper, ownerState: h, children: o }) : null });
    });
  Rs && (Rs.muiSkipListHighlight = !0);
  const Ts = Rs;
  const js = function (e) {
      let { trader: t, rank: n, AvatarImage: r } = e;
      return (0, ol.jsxs)(Al, {
        sx: {
          width: 250,
          padding: 2,
          borderRadius: 4,
          position: "relative",
          boxShadow: 3,
        },
        children: [
          (0, ol.jsx)(jl, {
            sx: {
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "2rem",
              color: "#f0f0f0",
              fontWeight: "bold",
            },
            children: n,
          }),
          (0, ol.jsxs)(zl, {
            children: [
              1 === n
                ? (0, ol.jsx)("div", {
                    className:
                      "absolute top-0 left-0 w-full h-[26%] bg-gradient-to-r from-[#d7eff1] to-[#fdebae] rounded-t-lg",
                    children: (0, ol.jsxs)("span", {
                      className:
                        "absolute left-44 top-3 italic font-bold text-6xl text-black opacity-10",
                      children: [
                        "1",
                        (0, ol.jsx)("sup", {
                          children: (0, ol.jsx)("span", {
                            className: "text-4xl",
                            children: "st",
                          }),
                        }),
                      ],
                    }),
                  })
                : 2 === n
                ? (0, ol.jsx)("div", {
                    className:
                      "absolute top-0 left-0 w-full h-[26%] bg-gradient-to-r from-[#e3f2fd] via-[#e1bee7] to-[#f8bbd0] rounded-t-lg",
                    children: (0, ol.jsxs)("span", {
                      className:
                        "absolute left-40 top-3 italic font-bold text-6xl text-black opacity-10",
                      children: [
                        "2",
                        (0, ol.jsx)("sup", {
                          children: (0, ol.jsx)("span", {
                            className: "text-4xl",
                            children: "nd",
                          }),
                        }),
                      ],
                    }),
                  })
                : (0, ol.jsx)("div", {
                    className:
                      "absolute top-0 left-0 w-full h-[26%] bg-gradient-to-r from-[#d7eff1] to-[#fdebae] rounded-t-lg",
                    children: (0, ol.jsxs)("span", {
                      className:
                        "absolute left-40 top-3 italic font-bold text-6xl text-black opacity-10",
                      children: [
                        "3",
                        (0, ol.jsx)("sup", {
                          children: (0, ol.jsx)("span", {
                            className: "text-4xl",
                            children: "nd",
                          }),
                        }),
                      ],
                    }),
                  }),
              (0, ol.jsx)("div", {
                className: "mt-7 relative",
                children: (0, ol.jsx)(us, { src: r, alt: "Avatar" }),
              }),
              (0, ol.jsxs)("div", {
                className:
                  "flex items-center space-x-1 justify-end relative -top-9 gap-1",
                children: [
                  (0, ol.jsx)("div", {
                    className:
                      "bg-gray-100 p-2 rounded-md flex items-center justify-center",
                    children:
                      2 === n ? (0, ol.jsx)(Ss, {}) : (0, ol.jsx)(ws, {}),
                  }),
                  (0, ol.jsxs)("div", {
                    className:
                      "bg-[#001848] text-white text-sm font-bold px-2 py-1 rounded-md flex items-center space-x-2",
                    children: [
                      (0, ol.jsx)("span", {
                        className:
                          1 === n
                            ? "text-yellow-500"
                            : 2 === n
                            ? "text-gray-400"
                            : 3 === n
                            ? "text-orange-500"
                            : "text-white",
                        children: "X",
                      }),
                      (0, ol.jsx)("span", { children: t.Xscore }),
                    ],
                  }),
                ],
              }),
              (0, ol.jsxs)("div", {
                className: "relative -top-6 ml-2",
                children: [
                  (0, ol.jsxs)($l, {
                    variant: "h6",
                    fontWeight: "bold",
                    children: [
                      t.name,
                      " ",
                      (0, ol.jsx)(ss, { color: "primary", fontSize: "small" }),
                    ],
                  }),
                  (0, ol.jsx)($l, {
                    className:
                      (2 === n
                        ? "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                        : "bg-gradient-to-r from-teal-400 to-cyan-400") +
                      " \n      text- bg-clip-text text-sm",
                    color: "textSecondary",
                    children: (0, ol.jsx)("div", {
                      className: "font-bold text-xs",
                      children: t.tradingStyle,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, ol.jsx)(ns, {
            children: (0, ol.jsxs)("div", {
              className: "flex justify-around relative -top-8 -left-6 ml-2",
              children: [
                (0, ol.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, ol.jsx)($l, {
                      variant: "h6",
                      className: "font-bold text-xs text-gray-900",
                      children: (0, ol.jsx)("div", {
                        className: "font-bold text-sm text-left",
                        children: t.Alerts,
                      }),
                    }),
                    (0, ol.jsx)($l, {
                      variant: "caption",
                      className: "text-xs text-gray-500",
                      children: (0, ol.jsx)("div", {
                        className: "font-bold",
                        children: "Alerts",
                      }),
                    }),
                  ],
                }),
                (0, ol.jsx)(Ts, { orientation: "vertical", flexItem: !0 }),
                (0, ol.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, ol.jsx)($l, {
                      variant: "h6",
                      className: "font-bold text-xl text-gray-900",
                      children: (0, ol.jsxs)("div", {
                        className: "font-bold text-sm text-left",
                        children: [t.Trades, " "],
                      }),
                    }),
                    (0, ol.jsx)($l, {
                      variant: "caption",
                      className: "text-xs text-gray-500",
                      children: (0, ol.jsx)("div", {
                        className: "font-bold",
                        children: " Trades",
                      }),
                    }),
                  ],
                }),
                (0, ol.jsx)(Ts, { orientation: "vertical", flexItem: !0 }),
                (0, ol.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, ol.jsx)($l, {
                      variant: "h6",
                      className: "font-bold text-xl text-gray-900",
                      children: (0, ol.jsxs)("div", {
                        className: "font-bold text-sm text-left",
                        children: [100 * t.averageGain, "%"],
                      }),
                    }),
                    (0, ol.jsx)($l, {
                      variant: "caption",
                      className: "text-xs text-gray-500",
                      children: (0, ol.jsx)("div", {
                        className: "font-bold",
                        children: " Avg Gain",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, ol.jsx)("button", {
            className:
              "w-full border-2 border-gray-400 text-gray-700 relative -top-4 font-bold text-sm py-2 px-4 rounded-md hover:bg-gray-500 hover:text-white transition-colors duration-200",
            children: "Profile",
          }),
        ],
      });
    },
    Ns =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESEhgSEhUYGBgYGBoZGBgZGBgZGRgYGhgaGRgYHBgcIS4lHB4rHxgYJjgnKy8xNzY1HCQ7QDszPy40NTEBDAwMEA8QHhISHjQrJSQ0NDQ1NDE0NDQ0NDQ0NDQxNjQ0NDE0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAEAQAAIBAgMFBQYDBgUEAwAAAAECAAMRBCExBRJBUWEicYGRoQYTMrHB8EJS0RRicoKS4SMzorLxBxXC0iRDc//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/xAAtEQADAAIBBAAFAgYDAAAAAAAAAQIDESEEEjFBEyIyUWFxsQUzQoGR8COhwf/aAAwDAQACEQMRAD8A+ZAT0CegSaiNIOCyYWegSQElI48CyQWSCwirCSBIhZILJqsLTS5A5/PhCO2BCSYSECSQSToFsGEnu5DCnlfuHne3yM9CSSAO5O3Ie0E7gGwBJ8B45yKalbZMp09IjuThTvylfi65Ha3u4W3QRe2Z5i2npxk8FXZjnp/a48bBh5Ss81PwiwsSXljhpHlImmZ7j7091xkeNuJuQR47pvJYCtvg8bZ25jQjzDTllr2jvhz9wb0SM/sd8EVlnTUe8ame8d2tuuY+fOJMkdNdyF1PaLlZArGCsgVnaBFys8KwxWQInaCAlZArDESJEE4ARIkQrCQYQSQdp0ladOODqIRRPFEmohpEHKIRVnqrJqslIE5VhFWeqsIqw0iGzlpm17Gw48IxRQZhwQDle2YOdiOfEEdYzgEG5UY5bq3J5LZgT8vAGU+0qjhhvGxFwTrmNb24HW+mvfK95dU50PjEnKrYarjBvdvXifzfvffPMDSHo4qlYhja+YPEEXtlxFiR5cpTmqT8djfnnf8AmklAH4bdwy9L/KLWSktBuJb2Wv7VYEKAd7I717W1GnGBas/5fEFQPLWV4I4W8lkWxoW4Uje4A2tw1sYDdN73yGu1LWuCxfE7ouWvf6a8Bl1ilfFO6EodM93Xl2gfK4+mYqK9d6hJJz4i2ncOXSe4XElT927+4/WF8z8sFuf6Vocxjq9LeHHtdxyv9J5gHsR/Df0Yf+UUrNZWUaXNu43I/wB0JQNj5DyGfz9JzBRY7SxJKBdTvG39bH5Q2yuwp7t3LjY3b/UTKrfLNcanJeg/E3075Y0KgyA0GQ7hO2SltllTa9cG+QQDx7TE+RTzg3We4IEsWPEWH34AdywrJLWFcCMz5QsVg2WMssGyxjQpMWZZBhGGWDZYDQaYAiDIh2EgwkMICwg2EMwkGEBnAbTyTtPZxwdRCqJ4ohFENIE9VYVVnKsIqw0gWzlWGVZyrCqsJIFsNga4ptnezDdyzscirdMwM+RMptpjdO7bJchzUaBeIK20OeQAPw3mkpoHotfN0OQ4lG4DQmzXNgR8WWtjlsd2i2dxfKxFx4ZH08Zn5q3lf4NDFP8AxJ/cSRR+FrHW2npmD3iSNQrwHlb1H6QTUjxI7jl9IGuWAyBtx0I9DJQDCYjFk2tceX2Ys1QE9oZ/mGR/vLPZ+w6lWzMd0Hzt9Jq9meyeGGbqWP7xNvLSLrLEsbOGqWzAOeBIuNCOX398J4WBHI/f395/ZsJsXDoOxTRe5QJY09m0jqi/0iQsyfo54fyfBw17ff3oIRXy759txXshgat9+kgJ4gBT5i0qsT/00wj503dO5t4f6rwu5Mj4bPlaNb5dw5CWOFPP76Tf4T/pvhqZ3qru45EhR/pz9ZpcNsfCrTNJaaFCLFd3Ijv+sF2kwljej5tskE1Lk2UAk8hla+RvfS1ukMUltidjfsbPTUsQ3aRudK9t0n8wNgdOB0OSDJNPAtzsoZ3qtCjJBMsbZIJ1htCkxRlg2WNOsAywGgkxdlg2EYZYFhAaDTAsJBhDMIJhBYQK06TtPJBw0ohUEgghkEYgGSRYZFkUEMiw0gGySrDIs8RYZVjEgGznxApqLi4a672fZOu61swCLm4Btu352zmPRgd590nvB8mte1uBHdaa3DAbwuLg6i17ju45gHwlB7T1Ar7gGQ5vfPuYkjxmZ1Uucq/JpdLSrC/wUIqZ5Kp7mz+f0haFMO6LY3LC4PIZmxtfzkPeXGaBhxsQ3pH9iBWq3ByVdORJ/wCYFPUtkxPdaRpsMthLnAPpKhJY4LWZu+TUc/KaOhYxq7aAX7zYemcRw5NoLE7bw9HJ6i3/ACr2m8hLEpvwVaaRb06NTW9MdPds3qGF/KTLMvxIh6lHQeZVh6zEY/22qfDQTdH5nsW8BoPWV2zPbDFU6gZ6juv4lY3BHS4yMesb0KeVbPpQ3zYrSXPRt9StuYIBMIiv+Ld8L/M/pB4SoA9Rfw7yuOQ317X+pSfGZxfbagzEbj7u9beyIsCRe3gD4wO1vwG6SLzbOFFWg4tdlUuuuZAuRkRe9vQTAMk+h4DaNOoA9Nww11zHeOEx22MIKdZ0Ast7r/CcwPDTwml0VfK5ZQ62fFr9CodIB1jrJAOsttFFMTZYJ1jbrAOsBoYmKuIFhGmWBcRbQaYu4gWEYcQLCAw0CtOkp0gkaQQ6CCURhBGIWwiCHRYNBDoIyUA2ERYZFkUEOixqQtsLQVs2QEso3gouCRx3SCO0BmBMnjhUZTd7gnQqcrDmAbHoZs8PTZWVipyIJ4G3HqMukzftPRIqMN4bp7QIBGunAA/8HLSZXWUnlWnvj/BqdHLWNppr/wBMq1NtQe4/ek0Ps1SO6ztqxt1suXzvKKlTqF9xFZz+VFLHvsomt2Ns+ulIb9N0zOTgodTwa0rZ61Hkf087yfoOiRxe2Vw4AFi50voOp/SeuwWwchbm177wudPhvxlKwSqfeOgc20N90DhlK+HH3Vt+EW8+TtntnywWK9oKtTJnb+EEgeQyMQ/aXJ7KH+kD5y598VyUIvIKiX8yIag1Z/8A7VA67hH+20upz6/YpfDrzX7lCoqtwC+McwOBLVAaji17kAa9JZYnD1FXeYU3U8VRLH+dACDFkxAUgFd3uNwe6/6wa7n4YUzK8pn1DEVN3DPVF7mnmeig5+pnxpajobFSQL5gXvPsWBZMXs8im196m6H91921iOeY8DPlYpgE9oBQSL6kkagDj4kDrBnuT4JfbS22Qo7RA6ek0GzdoNVG6xJ3RkSSSBfTPh/eU60Q1t2nvA/ic2B8FzHiTLfDbFYIH39zev2UQCwFs73z1PlLeCn3pLyVc0pQ2/H5G3WBZYJ9m1R8Fdr/ALwuPQxD9tq06nu6wHDMcQcrg8e45y/WTX1LRnqN/S9jjrAssbdYu4nNEJiriLuI24i7iLaGIWcQLCMuIBxFsYgNp0ladBOG0EYQQKCMII1C2GQQ6CCQRhBGyBQVBGKlf3NI1fxMSqdLAF37xdQOpJ1WCQSO21ulNeCoB/U7ufnbwlbrrcYuPfBa/h+JZMy7vC5EMHt6op7Y7POE2yabp71VR2AJAa5U94BF/u94jtDsIN3Ika8hyESwtR2pspubHInrqPT1mNK9o9Dk000QwntPiEG6oFh+EdlR/KgAEucPtCvVQMd0XF8gfmSZj61E+8KDUsB4tb9ZvsLSCqFHAAQ86mUmlyyng7m2m+EIV8OWUlmbLtD4dRmOEW2fTLITyNvITRNhN9GUalWA7yCJQbDO/RqEaqyk9zX/APWRjb7WFkSVr+5oNibDVgalQBmIuqt8IP4bjjK/C4p8PjCKlPfKOwIJcEAG2+HTO2V8siMrSz2XtELYE2l0uIp3DkC+ov8AMcI2K+xWzRW+SPtbhqTUjWVAj2G+BowPxBuZGoOuXWfOqz/4ZvqStu/L6Xmu9o9pb1M0wfiy8OMxeLbNV5C/idPlDfLRybUvY9s/FYtCRhve2PxBN/dPfu8YurmnUAqoylTmjAoeY7hfO4n0n2KQJRRbZ2z7zmYT2v2cm9SxYUE0XXf/AHqLsFe/8O9vdAG5yZybYLx6RX7Kwa4vBNUdFWqm8UdRZmCjeVWP4gRlnf4gdRM9tqptEVPd4amAiovaO5e7do/EeG9bThN4mOpoVppbtHdCj97In1vKnHJaow6kjuOY9CJa6XGrp86/QrdTdRjSa3z7MM2y9pVP8ysB03yPRFtA4vZjUVTfcMzu+YB5IOOvCbJxM/tvt4jD0xqCznuLL9KT+csZcMpJ872vLK+LPTenrWn4Q7UEWcRxxFnEe0ITFHEA4jTiLuItjELOIu8ZaAcRTGIDOkp0gkaSMpF0jNOMkWw9OM04vTjKRqF0HSebTXepjoo9GYW/pKySQtRboRyz8NGHlY/yxHW43eF69clnoMqx51v3wZzaj/4SnpbxntRl3F3PhsLd0NWoixRhdT6dRK7E0/d0mUG/xEX4XGnn85hy96R6HItJsqtnnfxSk8WLfMj6Taq9phdnPu1kPX5gibXfuJPUrlfoJ6N7T/Ut8FX0lNs/cwm0WpVMqVcHdJ0s5up8GBT1jWFexjmP2fSxdMJU7JW5R1+JCde9TbMfK152KkuGH1EbW58oLjPZyopvSIZeRNiIodnYpcgpX+aw9DPaNXamHXcXcxCjJSHVWt13x6XMBitp7RfI0/d9TUpEf6RveRje2fKaKnxK8NMS2jSFIXqNvORkL8OfQdZT4akXffOl795/SWlPZDMd+u9xe51sT1J7Tnv9ZY1cGN0e7XLrr5TqpJaQyMbqt0Xns9id2wmrxW5UplXAZWUq44FWFmHiCZgdmuVM2eFqb1PPlBxeB2TGkzIezRC1XoOw95RZlN9XVTZXHMEWPj1l5tDMK/O6n+Ug/JgPCVPtB7PU6ziujtSrab4uVcqAASAQQ27YXB4aGVgp7WVApem63Njdb3sLm5UHlLvSUpybXv0Z3Vy3iar1rTLTEOqKWYgKBck8Jndlq1au+JcEAdhAeGgI8ABfqzRv/tmKqEHEVQAOCZnwJAVT1Av1j6UEpqEQWUCwE0nNXSbWkjJVTEuU9tgXEWcRl4tUh0DItUi9SMVIvUiaHIXaAqQ9SAaLYaBTp06CENpGacWQxhDGSLYzTjFOLIYxTjZF0NJGUiqRhDGoUxbF4BjnTz/d0t3cPCUm09n1jTc7hVVRmYnLJRew5nKaxDPcVT95SdPzIy+akSlfQYtu52vevRfj+JZnKitP1v2fJlyIPI3mo2ZjQ656zOOliRDYWqUNxM7JCpF7DkeOjYI8bp1yNJR4HHBsjrLigAZTqHLNBZFSGv2l8gL5+kUxOOp0z2mF4j7Q7SNJRTpmzsLkjVV6dTn5GZe7ntEE34njHRi2t0V7zaepRo8btQO6gHsjPxlps7bCEbpMwjKdQbEcP7QZxTqb5g8xx74bwvfDJjq0lqkfT0rJe4lnQx9hafL8HtrgxsfT+0uqO2wBqPODqpfKLKyRa2mbepVFRWUnOxZe9QT6i48YN2Kimh/EtRvEGn+plJ7P49atQhibgdkc+fj/AHljtPEWr0V5KQf5jYfKWuk2sq2ih11TWJqQlSL1IdzF3M3GedQs8WeMuYs8VQ2RapF6kYqRepE0NQu0BUh2i7xbDQOdOvOghDKGMIYqhh0MNAMbQxhDFEMOhjZF0OIYwhiaGMoY2WKpDiGHRoqjQ6NDFnz3b2F93XdbWG9cfwnMelpXKZtPa/A79MVlGa5Nb8vA+By8ZiAc5jZIcW1/ujYi1cKl/rGUNsxlH8NtF6fXoZXI3956TAcp+Q1Tnwe4vEmpUZzx9ABkPvnNlsfB06mHQOoIKi4PdMSwm19la29RCk5qbW5Dh6QMi1PAzFXzPZW7T9nKi3aj21/KTZx/C34vGZ2vTUHdYMh5MDPp7kgSox+Po5rUCsRqCM+68XNMdUp8mB/ZAdHXxNvnHdm7Leo4VN1jzBuB3kaS899gif8AKXymj2JWokWpBQBqBkYdU0QscP2Zekj4PFhGN93ca/MH4vk4lhiMd7yt7waA5dwOU721p7talUGrKyn+Ugj/AHGVdFsvUfpH4XvVeyrk43Po2jtfOLuZHDPemh/dHplIu0197WzI7dPQJzF3MK7RZzF0xkoE5i7mFcwDmKoYgTmLvDOYu5i2MRG86eTpBIdDDIYshh0MJMFoaQxhDFEaHRoyWA0No0YRokrRhWjExbQ4jQ6NE1aHR4xMU0NMAylWFwRYjmDPne3dlPhntqjE7jcx+U9Rf6z6AjTzFYanWpmnUXeU+h5g8D1is+JZF+UNwZXjen4Z8uVodW5/fSM7b2O+FfO7Ifgbr+VuTZeMQRpmuXL0zQVKltDKqDLPZGKFFt852JNr2uSpGfr6eFUj/fy84dbEdfvSQ1vgJPXJa4vbVV/xW5Wy1+x5SvOdyfEnU2vPVpFulv72/XwknXyFr91m+l5KlLwQ6b8g1Ttd1r/L6RjD1XQ7yMVIyy1+zBIhBsee7fkQbA+NvTrGSlrEjUWPhqO7iJJGwu1toviKaBxmh155WN+ukVovJtT3TY6HRtPA9eXlykGe2s6Up8Ett8s1OAb/AAl7j8zJO0XwDf4S931Mk7TTl/KjOpfMyLtF3aTdoB2gtkpA2MAxhHMC5iWxiQNzAOYRzAuYDGIjedIzoJwZTDKYsphUMJM5jSNDq0VRoVGjExbQ2jQyNFEaGVoxMBocRoZHiSNDo18hDVAdux6ldiANTMz7V7SYMURuyoFuG817En1sJcjGgKQvG4vzH0BtfymW24m/MvN1jvJ2z4X/AGbWDoPh4nVfU/H4KzZlQ1KqrUZtwntAE5qM7eOl+sltDCGi1r3U/C3Mcj1kNnqFPWXTAOu6wuDE1bVb9AzCc6fkoVqQ9OsR45D9fnIYrBtTNxmvPiO+BpNY3MYmnyhTlp6ZZ0KhJzvbyjSuWzGl/PiT3ZWlQrlhnx+/KNrXO7lx9BzkpkDi1Ad5RzXPxBv5kw9WprbS4I8z/bwlTRq2BP5vRRp99Yf3t7g9B6AmTs7QxUqXBB008Dw8D8oota9gciMjnx+twbyHvb68vlkfofEw+y8N72oN4ZLZm9QB33v4XkynTSRDalbNPhgVpqDqFF++2c5mnjvBM00fC0UPL2eM0C7T12gWaA2GkRYwTGSdoFzFthog5gmMIxgWMBhojeeyN55IJCqYVTF1MIpnJgjCGGVosphFaGmQ0NK0KrRVWhqdyQACSdAMyYSrQPbsZRoYOQrNyUi/U9nzzv4TwUAgvUzP5R9SPkPOKnFGoWXgLWHADPh5Spm6tOXM8/k0el6Ctqr41zoArmw7oHEU7iEQZSYS4lCfJr3LcpGcdSj9DLPDPedj8LcaRXDsQbH/AJEentGfkhzQ7iFylRUw/wCXLpw/tLm9xK91s1uchcAUlS5Etxhqp+npPd+4txbUdOXSWRXKaXY2z0xWEq0GA3iCUbirr2lN+Glj0MbD7noTePS2jFrUHgPW2g7pyVDbqSW9fvykHoM28pFqiaj8wH1i2HrbpzhCpa3plvhtmV3YkruqcwW8rgDOaHCYZaSbq95J1JiGysaQNxu0p0558R+ks3GVwbg8foeRljBUf3I6jDaXcuUczQTNPGaDZpYbKiRzNBM05mg2aA2EkeMYJjPWMGxgNho8YwTmSYyDGCyUeXnSN50gkkpk1MCphAZxwZTCK0XUyy2XgfeEs2SL8R5n8o69eHlOq5ie5kxjq6UyuWEwOEepmOyg1c6dw5np8pZqyUxuoLZZsc2Pjy6QVfFA2RLBRkANAIAvM7JnrL+F9jbwdLGHny/ueYhyZXYZ7VbfmBHjcH6GPVDfUHw16ZStq0mDBtLG9tT4mLlFi6Uocv8AF0JzOgldiNtIhsq73U5Dw+zCYmm9Xsjsry4nviv/AGsco6IS5op5c90+2P8AJJNtI2TKR1Bv9+UJ7pXXeQ3tobW8CIlX2dui8d2ZjKSqKb9k55nQknnwhNLzIEOm+3I+AlB+BkMXSJG8NRnH6mGBG8pHQixB8RkYNHIydb905c+Acs/D59fcWoDeE0nsy5p1OhlLRogNddNbHhzlzhq6pYgEmFM1NJpCXlhryL+12zAGFdMmDA96s1iPW8ye28Cabb4GTa9DNzXqtVYF9BoOHjzlftygposCMzkBxEdrllS7TrgzGyKt+zxGY7uImjoVt3x4cD4TI7OJWsoP5rfSbCjT1GYz4a8Dl5xF8M0ump1JGuUvkQD+Ukbw8L5iLs0T2ngSGDJkwzBGW8OR6w2/cS7jp60+fyZmaV3PS1+CbNBM08ZpEmG2AkcxgyZzGQYwWwjmMgxnpMGxgs46dIXnSDj0GEUwQMkDIJG8JQao4RQST6Aakk5AdTLN8TdQAAu72SF0Av68M+M7Z1qVEufiqeifhHjr5coij2qG+jAn79JRzX3016Rr9Lh+FCt+X+w2j9bDiYxh0LdB6kc+kTwy314aD6nrLKk2Yi0tFl1t7CCkNBBvhhmSIdXkar2U90JIinwL0k7A8fv0hVw+UkijIC+Qz+/GM2ht+hGKeG/uVOKwW8LSnr7MbvmtCCRagDITDqNmKptVoG6kjmNQe8cfnLbB7Qp1eywCty4N/CfofWWWIwIPCUWP2SV7SeUZ5Euala8p+i5RmBtuE9R/zGKdU8Eb+k/rKLZe1ipCVTYjIMfk36/8zW4WqG1yI1EdNb4fkzc+HXzT4/b9RRfffhTd77fS5kf2Q5ljc/Lul2xFonXIAJh6KuzAGh/8sKPzA+Rv9JraC6nr8gB9JT4ChvV6lW3w9herH+1vOXNQ+7p+g/iPH5nwlbK+Ta6OWp39wbMr3RshfXkfzffCVmIptTco2o9eR7o0mUntEb9JX/EnZPVN6y+V18zDwZP6WH13TJx3ryirLSBM8LSJMt7Mg4mRJnEyBMHZxxMGTPSZEmCSdedI3nTjj1Z7OnTjjQY74U/hX/aJV1fjXv8AqJ06Zi8s9DX0L+xYU9T3/SOJw7p06EAvAcffnI19J5OkoivpZKh8R7hGxpOnSa8kY/pRwkhOnThgN4ri9J5OhSKox20P8w9wmx2R8NP/APNf9onTo1eUUa/l2Xj6Suxvwnuns6WDLKfY/wAC/wAb/Jo5j/hX+I/KdOlLJ5Z6DpfoQsZ6f8t/4W+STp0jF9SLfU/y2UpkTOnTQPNETIGezpBwMzxp06QSQnTp044//9k=",
    Ps =
      "data:image/jpeg;base64,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",
    Os =
      "data:image/jpeg;base64,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",
    Ms = [Ns, Ps, Os];
  const Bs = function (e) {
    let { traders: t } = e;
    return (0, ol.jsxs)("div", {
      className: "flex flex-col items-center relative z-40",
      children: [
        (0, ol.jsx)("div", {
          className:
            "sm:block absolute text-[6rem] lg:text-[15rem] xl:text-[25rem] font-extrabold text-black opacity-10 z-10 top-[-2rem] md:top-[-4rem] font-inter",
          children: "X X X",
        }),
        (0, ol.jsx)("div", {
          className:
            "absolute text-6xl md:text-8xl xl:text-9xl font-bold text-black opacity-10 z-10 font-inter",
          children: "Champions",
        }),
        (0, ol.jsx)("div", {
          className:
            "flex justify-around gap-4 md:gap-6 p-4 md:p-6 lg:p-8 z-10 relative flex-wrap top-12 md:top-14 mb-6 md:mb-10",
          children: t.map((e, t) =>
            (0, ol.jsx)(js, { trader: e, rank: t + 1, AvatarImage: Ms[t] }, t)
          ),
        }),
      ],
    });
  };
  function Is(e) {
    return bs({
      tag: "svg",
      attr: { viewBox: "0 0 384 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Ls(e) {
    return bs({
      tag: "svg",
      attr: { viewBox: "0 0 384 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Fs(e) {
    return bs({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function zs(e) {
    return bs({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z",
          },
          child: [],
        },
      ],
    })(e);
  }
  const Ds = (e) => {
      let { title: t, name: n, count: r, AvatarImage: o, type: a } = e;
      return (0, ol.jsxs)("div", {
        className:
          "w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] p-5 mb-8 mx-auto",
        children: [
          " ",
          (0, ol.jsxs)("div", {
            className:
              "flex flex-wrap items-center bg-white rounded-2xl px-5 py-4 shadow-md space-x-4",
            children: [
              (0, ol.jsxs)("div", {
                className: "relative flex-shrink-0",
                children: [
                  (0, ol.jsxs)("div", {
                    className:
                      "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200",
                    children: [
                      " ",
                      (0, ol.jsx)("img", {
                        src: o || "/api/placeholder/48/48",
                        alt: "Profile",
                        className: "w-full h-full object-cover",
                      }),
                    ],
                  }),
                  (0, ol.jsxs)("div", {
                    className:
                      "absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-400 rounded-full flex items-center justify-center",
                    children: [
                      " ",
                      (() => {
                        switch (a) {
                          case "mostTipsGiven":
                            return (0, ol.jsx)(Is, {
                              className: "w-5 h-5 text-white",
                            });
                          case "mostActive":
                            return (0, ol.jsx)(Fs, {
                              className: "w-5 h-5 text-white",
                            });
                          case "longestStreak":
                            return (0, ol.jsx)(Ls, {
                              className: "w-5 h-5 text-white",
                            });
                          case "rankChange":
                            return (0, ol.jsx)(zs, {
                              className: "w-5 h-5 text-white",
                            });
                          default:
                            return null;
                        }
                      })(),
                    ],
                  }),
                ],
              }),
              (0, ol.jsxs)("div", {
                className: "flex flex-col flex-1 justify-between",
                children: [
                  (0, ol.jsx)("div", {
                    className: "text-sm font-medium text-gray-500",
                    children: t,
                  }),
                  (0, ol.jsx)("div", {
                    className: "text-md font-semibold text-gray-900",
                    children: n || "Name",
                  }),
                ],
              }),
              (0, ol.jsx)("div", {
                className: "text-xl sm:text-2xl font-bold text-gray-900",
                children: r || "0",
              }),
              " ",
            ],
          }),
        ],
      });
    },
    Us = [
      n.p + "static/media/image5.b568862c4be9ab8119a9.jpeg",
      n.p + "static/media/image6.202f4330d4957ba93a1f.jpg",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
    ];
  const Vs = function (e) {
    let { keyMetrics: t } = e;
    const n = [
      { type: "longestStreak", label: "Longest Streak" },
      { type: "mostActive", label: "Most Active" },
      { type: "mostTipsGiven", label: "Most Tips Given" },
      { type: "rankChange", label: "Rank Change" },
    ];
    return (
      console.log("keyMetrics:", t),
      t && 0 !== Object.keys(t).length
        ? (0, ol.jsxs)("div", {
            children: [
              (0, ol.jsx)("div", {
                className:
                  "hidden sm:flex flex-row justify-evenly mt-5 max-w-full mx-auto gap-4 sm:max-w-full md:max-w-[85%] lg:max-w-[85%] xl:max-w-[85%]",
                children: n.map((e, n) => {
                  const r = t[e.type],
                    o = Us[n];
                  return (
                    console.log("metricData:", r),
                    r
                      ? (0, ol.jsx)(
                          Ds,
                          {
                            title: e.label,
                            name:
                              (null === r || void 0 === r ? void 0 : r.name) ||
                              "N/A",
                            count:
                              (null === r || void 0 === r ? void 0 : r.count) ||
                              "0",
                            AvatarImage: o,
                            type: e.type,
                          },
                          n
                        )
                      : null
                  );
                }),
              }),
              (0, ol.jsx)("div", {
                className: "sm:hidden bg-white",
                children: (0, ol.jsx)("div", {
                  className:
                    "flex flex-wrap justify-evenly mt-5 max-w-full mx-auto gap-4 sm:max-w-full md:max-w-[85%] lg:max-w-[85%] xl:max-w-[85%]",
                  children: n.map((e, n) => {
                    const r = t[e.type],
                      o = Us[n];
                    return (
                      console.log("metricData:", r),
                      r
                        ? (0, ol.jsx)(
                            Ds,
                            {
                              title: e.label,
                              name:
                                (null === r || void 0 === r
                                  ? void 0
                                  : r.name) || "N/A",
                              count:
                                (null === r || void 0 === r
                                  ? void 0
                                  : r.count) || "0",
                              AvatarImage: o,
                              type: e.type,
                            },
                            n
                          )
                        : null
                    );
                  }),
                }),
              }),
            ],
          })
        : (0, ol.jsx)("div", { children: "No key metrics available" })
    );
  };
  function Ws(e) {
    return bs({
      tag: "svg",
      attr: { version: "1.1", viewBox: "0 0 16 16" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M6 11.5c0-2.363 1.498-4.383 3.594-5.159 0.254-0.571 0.406-1.206 0.406-1.841 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h6.208c-0.135-0.477-0.208-0.98-0.208-1.5z",
          },
          child: [],
        },
        {
          tag: "path",
          attr: {
            d: "M11.5 7c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5zM14 12h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Hs(e) {
    return bs({
      tag: "svg",
      attr: { viewBox: "0 0 320 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
          },
          child: [],
        },
      ],
    })(e);
  }
  const Qs = function (e) {
    let { traders: t } = e;
    const n = [...t].sort((e, t) => e.Rank - t.Rank),
      r = (e) => {
        switch (e) {
          case 1:
            return "border-yellow-100 text-yellow-500";
          case 2:
            return "border-gray-700 text-gray-700";
          case 3:
            return "border-orange-100 text-orange-500";
          default:
            return "border-gray-100 text-gray-400";
        }
      };
    return (0, ol.jsxs)("div", {
      children: [
        (0, ol.jsx)("div", {
          className: "overflow-x-auto bg-white sm:block hidden",
          children: (0, ol.jsxs)("table", {
            className: "min-w-full table-auto",
            children: [
              (0, ol.jsx)("thead", {
                className: "relative z-20 bg-white shadow",
                children: (0, ol.jsxs)("tr", {
                  className: "text-gray-500",
                  children: [
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text text-sm font-bold uppercase tracking-widest",
                      children: "Name",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-left text-sm font-bold uppercase tracking-widest",
                      children: "Trophies",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-left text-sm font-medium uppercase tracking-wider",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-center text-sm font-bold uppercase tracking-widest",
                      children: "Streaks",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-left text-sm font-bold uppercase tracking-widest",
                      children: "Alerts",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-center text-sm font-bold uppercase tracking-widest",
                      children: "Trades",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-center text-sm font-bold uppercase tracking-widest",
                      children: "Avg. Gain",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-center text-sm font-bold uppercase tracking-widest",
                      children: "Xscore",
                    }),
                    (0, ol.jsx)("th", {
                      className:
                        "px-8 py-4 text-center text-sm font-medium uppercase tracking-wider",
                    }),
                  ],
                }),
              }),
              (0, ol.jsx)("tbody", { className: "relative z-10" }),
              (0, ol.jsx)("tbody", {
                className: "relative z-10",
                children: n.map((e, t) =>
                  (0, ol.jsxs)(
                    "tr",
                    {
                      className: `relative ${r(
                        e.Rank
                      )} hover:bg-gray-400 transition-colors duration-200`,
                      children: [
                        (0, ol.jsx)("td", {
                          className:
                            "absolute inset-0 -skew-x-12 border-4 border-r-4 bg-white group-hover:bg-gray-50 mx-5 rounded-md bottom-1 ",
                          style: {
                            content: '""',
                            zIndex: 0,
                            borderColor:
                              e.Rank <= 3
                                ? `var(--border-color, #${
                                    1 === e.Rank
                                      ? "FCD34D"
                                      : 2 === e.Rank
                                      ? "#C0C0C0"
                                      : "F97316"
                                  })`
                                : "#E5E7EB",
                          },
                        }),
                        (0, ol.jsx)("td", {
                          className: "pl-8 py-4 relative z-10 flex ml-5",
                          children: (0, ol.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              (0, ol.jsx)("span", {
                                className: `text-3xl font-bold ${
                                  e.Rank > 9 ? "mr-6" : "mr-3"
                                } opacity-70 ${r(e.Rank).split(" ")[1]} w-4`,
                                children: e.Rank,
                              }),
                              (0, ol.jsx)("div", {
                                className:
                                  "h-10 w-10 rounded-full overflow-hidden bg-gray-200",
                                children: (0, ol.jsx)("img", {
                                  src:
                                    1 === e.Rank
                                      ? Ns
                                      : 2 === e.Rank
                                      ? Ps
                                      : 3 === e.Rank
                                      ? Os
                                      : `https://ui-Avatars.com/api/?name=${encodeURIComponent(
                                          e.Name
                                        )}&background=random&color=fff&size=128`,
                                  alt: e.Name,
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                              (0, ol.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, ol.jsxs)("div", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                      (0, ol.jsx)("span", {
                                        className:
                                          "font-semibold text-gray-900 text-lg",
                                        children: e.Name,
                                      }),
                                      e &&
                                        (0, ol.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-blue-500 fill-current",
                                          viewBox: "0 0 20 20",
                                          children: (0, ol.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                            clipRule: "evenodd",
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, ol.jsx)("span", {
                                    className:
                                      "text-xs text-gray-500 font-bold w-18 tracking-tighter",
                                    children:
                                      "Short Bias" === e.tradingStyle
                                        ? "Short Bias"
                                        : "Options" === e.tradingStyle
                                        ? "Daytrader"
                                        : "Swing Trader",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10",
                          children: (0, ol.jsx)("div", {
                            className:
                              "flex items-center space-x-2 text-gray-700 rounded-md bg-gray-100 w-20",
                            children:
                              "Options" === e.tradingStyle
                                ? (0, ol.jsxs)("div", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                      (0, ol.jsx)("svg", {
                                        className: "w-5 h-5",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, ol.jsx)("path", {
                                          fillRule: "evenodd",
                                          d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                      (0, ol.jsx)("span", {
                                        className: "text-sm font-bold",
                                        children: "Options",
                                      }),
                                    ],
                                  })
                                : (0, ol.jsxs)("div", {
                                    className:
                                      "flex items-center justify-center space-x-1",
                                    children: [
                                      (0, ol.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, ol.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                                        }),
                                      }),
                                      (0, ol.jsx)("span", {
                                        className: "text-sm mb-1 font-bold",
                                        children: e.Trophies,
                                      }),
                                    ],
                                  }),
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10",
                          children: (0, ol.jsx)("div", {
                            className: `flex items-center gap-3 ${
                              r(e.Rank).split(" ")[1]
                            }`,
                            children: (0, ol.jsxs)("span", {
                              className: "font-extrabold text-xl mr-1",
                              children: [" ", (0, ol.jsx)(Ss, {})],
                            }),
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10 text-center",
                          children: (0, ol.jsx)("span", {
                            className: "text-gray-700 font-bold",
                            children: e.Streaks || "14",
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10",
                          children: (0, ol.jsxs)("span", {
                            className: "text-gray-700 font-bold",
                            children: [e.Alerts || "20/90%", " / 90%"],
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className:
                            "px-4 py-4 relative z-10 text-center font-bold",
                          children: (0, ol.jsx)("span", {
                            className: "text-gray-700",
                            children: e.Trades || "497/90%",
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10 text-center",
                          children: (0, ol.jsx)("span", {
                            className: "text-gray-700 font-bold",
                            children: e["Avg Gain"]
                              ? `${(100 * e["Avg Gain"]).toFixed()}%`
                              : "90%",
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10 text-center",
                          children: (0, ol.jsxs)("div", {
                            className:
                              "bg-[#001848] text-white px-3 py-1 rounded-lg inline-flex items-center space-x-2",
                            children: [
                              (0, ol.jsx)("span", {
                                className: `${
                                  r(e.Rank).split(" ")[1]
                                } font-bold`,
                                children: "X",
                              }),
                              (0, ol.jsx)("span", {
                                className: "font-semibold text-center",
                                children: e.Xscore || "83",
                              }),
                            ],
                          }),
                        }),
                        (0, ol.jsx)("td", {
                          className: "px-4 py-4 relative z-10",
                          children: (0, ol.jsxs)("div", {
                            className:
                              "flex items-center space-x-3 text-xl font-bold mr-5",
                            children: [
                              (0, ol.jsx)("button", {
                                className: "text-gray-400 hover:text-gray-600",
                                children: (0, ol.jsx)("svg", {
                                  className: "w-5 h-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, ol.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                  }),
                                }),
                              }),
                              (0, ol.jsx)("button", {
                                className: "text-gray-400 hover:text-gray-600",
                                children: (0, ol.jsx)(Ws, {
                                  className: "w-5 h-5",
                                }),
                              }),
                              (0, ol.jsx)("button", {
                                className: "text-gray-400 hover:text-gray-600",
                                children: (0, ol.jsx)(Hs, {
                                  className: "w-4 h-4",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        }),
        (0, ol.jsx)("div", {
          className: "sm:hidden bg-white",
          children: n.map((e, t) =>
            (0, ol.jsxs)(
              "div",
              {
                className:
                  "flex items-center justify-between p-4 border-b border-gray-200",
                children: [
                  (0, ol.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      (0, ol.jsx)("span", {
                        className: `text-xl font-bold ${r(e.Rank)}`,
                        children: e.Rank,
                      }),
                      (0, ol.jsx)("div", {
                        className:
                          "h-10 w-10 rounded-full overflow-hidden bg-gray-200",
                        children: (0, ol.jsx)("img", {
                          src:
                            1 === e.Rank
                              ? Ns
                              : 2 === e.Rank
                              ? Ps
                              : 3 === e.Rank
                              ? Os
                              : `https://ui-Avatars.com/api/?name=${encodeURIComponent(
                                  e.Name
                                )}&background=random&color=fff&size=128`,
                          alt: e.Name,
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      (0, ol.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, ol.jsx)("span", {
                            className: "font-semibold text-gray-900",
                            children: e.Name,
                          }),
                          (0, ol.jsx)("span", {
                            className: "text-xs text-gray-500",
                            children: e.tradingStyle || "Trader",
                          }),
                          (0, ol.jsxs)("span", {
                            className: "text-xs text-gray-700",
                            children: ["Trophies: ", e.Trophies],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, ol.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, ol.jsx)("span", {
                        className: "text-gray-700 font-bold",
                        children: e.Xscore || "83",
                      }),
                      (0, ol.jsxs)("div", {
                        className: "flex space-x-2 mt-2",
                        children: [
                          (0, ol.jsx)("button", {
                            className: "text-gray-400 hover:text-gray-600",
                            children: (0, ol.jsx)(Ws, { className: "w-5 h-5" }),
                          }),
                          (0, ol.jsx)("button", {
                            className: "text-gray-400 hover:text-gray-600",
                            children: (0, ol.jsx)(Hs, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              t
            )
          ),
        }),
      ],
    });
  };
  let qs = 0;
  const Gs = { ...i }.useId;
  function Ks(e) {
    if (void 0 !== Gs) {
      const t = Gs();
      return e ?? t;
    }
    return (function (e) {
      const [t, n] = a.useState(e),
        r = e || t;
      return (
        a.useEffect(() => {
          null == t && ((qs += 1), n(`mui-${qs}`));
        }, [t]),
        r
      );
    })(e);
  }
  function Ys(e, t) {
    "function" === typeof e ? e(t) : e && (e.current = t);
  }
  function Zs() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return a.useMemo(
      () =>
        t.every((e) => null == e)
          ? null
          : (e) => {
              t.forEach((t) => {
                Ys(t, e);
              });
            },
      t
    );
  }
  function Js(e) {
    return (e && e.ownerDocument) || document;
  }
  function Xs(e) {
    return Js(e).defaultView || window;
  }
  const _s = "undefined" !== typeof window ? a.useLayoutEffect : a.useEffect;
  function $s(e) {
    let t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166;
    function r() {
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      clearTimeout(t),
        (t = setTimeout(() => {
          e.apply(this, o);
        }, n));
    }
    return (
      (r.clear = () => {
        clearTimeout(t);
      }),
      r
    );
  }
  function eu(e) {
    return parseInt(e, 10) || 0;
  }
  const tu = {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  };
  const nu = a.forwardRef(function (e, t) {
      const {
          onChange: n,
          maxRows: r,
          minRows: o = 1,
          style: i,
          value: l,
          ...s
        } = e,
        { current: u } = a.useRef(null != l),
        c = a.useRef(null),
        d = Zs(t, c),
        p = a.useRef(null),
        f = a.useRef(null),
        h = a.useCallback(() => {
          const t = c.current,
            n = Xs(t).getComputedStyle(t);
          if ("0px" === n.width)
            return { outerHeightStyle: 0, overflowing: !1 };
          const a = f.current;
          (a.style.width = n.width),
            (a.value = t.value || e.placeholder || "x"),
            "\n" === a.value.slice(-1) && (a.value += " ");
          const i = n.boxSizing,
            l = eu(n.paddingBottom) + eu(n.paddingTop),
            s = eu(n.borderBottomWidth) + eu(n.borderTopWidth),
            u = a.scrollHeight;
          a.value = "x";
          const d = a.scrollHeight;
          let p = u;
          o && (p = Math.max(Number(o) * d, p)),
            r && (p = Math.min(Number(r) * d, p)),
            (p = Math.max(p, d));
          return {
            outerHeightStyle: p + ("border-box" === i ? l + s : 0),
            overflowing: Math.abs(p - u) <= 1,
          };
        }, [r, o, e.placeholder]),
        m = a.useCallback(() => {
          const e = h();
          if (
            void 0 === (t = e) ||
            null === t ||
            0 === Object.keys(t).length ||
            (0 === t.outerHeightStyle && !t.overflowing)
          )
            return;
          var t;
          const n = e.outerHeightStyle,
            r = c.current;
          p.current !== n && ((p.current = n), (r.style.height = `${n}px`)),
            (r.style.overflow = e.overflowing ? "hidden" : "");
        }, [h]);
      _s(() => {
        const e = () => {
          m();
        };
        let t;
        const n = $s(e),
          r = c.current,
          o = Xs(r);
        let a;
        return (
          o.addEventListener("resize", n),
          "undefined" !== typeof ResizeObserver &&
            ((a = new ResizeObserver(e)), a.observe(r)),
          () => {
            n.clear(),
              cancelAnimationFrame(t),
              o.removeEventListener("resize", n),
              a && a.disconnect();
          }
        );
      }, [h, m]),
        _s(() => {
          m();
        });
      return (0, ol.jsxs)(a.Fragment, {
        children: [
          (0, ol.jsx)("textarea", {
            value: l,
            onChange: (e) => {
              u || m(), n && n(e);
            },
            ref: d,
            rows: o,
            style: i,
            ...s,
          }),
          (0, ol.jsx)("textarea", {
            "aria-hidden": !0,
            className: e.className,
            readOnly: !0,
            ref: f,
            tabIndex: -1,
            style: { ...tu, ...i, paddingTop: 0, paddingBottom: 0 },
          }),
        ],
      });
    }),
    ru = nu;
  const ou = function (e) {
    return "string" === typeof e;
  };
  function au(e) {
    let { props: t, states: n, muiFormControl: r } = e;
    return n.reduce(
      (e, n) => (
        (e[n] = t[n]), r && "undefined" === typeof t[n] && (e[n] = r[n]), e
      ),
      {}
    );
  }
  const iu = a.createContext(void 0);
  function lu() {
    return a.useContext(iu);
  }
  const su = Zs,
    uu = _s;
  function cu(e) {
    return null != e && !(Array.isArray(e) && 0 === e.length);
  }
  function du(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
      e &&
      ((cu(e.value) && "" !== e.value) ||
        (t && cu(e.defaultValue) && "" !== e.defaultValue))
    );
  }
  function pu(e) {
    return yl("MuiInputBase", e);
  }
  const fu = vl("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]);
  var hu;
  const mu = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.formControl && t.formControl,
        n.startAdornment && t.adornedStart,
        n.endAdornment && t.adornedEnd,
        n.error && t.error,
        "small" === n.size && t.sizeSmall,
        n.multiline && t.multiline,
        n.color && t[`color${ql(n.color)}`],
        n.fullWidth && t.fullWidth,
        n.hiddenLabel && t.hiddenLabel,
      ];
    },
    gu = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.input,
        "small" === n.size && t.inputSizeSmall,
        n.multiline && t.inputMultiline,
        "search" === n.type && t.inputTypeSearch,
        n.startAdornment && t.inputAdornedStart,
        n.endAdornment && t.inputAdornedEnd,
        n.hiddenLabel && t.inputHiddenLabel,
      ];
    },
    yu = nl("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: mu,
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          ...t.typography.body1,
          color: (t.vars || t).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${fu.disabled}`]: {
            color: (t.vars || t).palette.text.disabled,
            cursor: "default",
          },
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline;
              },
              style: { padding: "4px 0 5px" },
            },
            {
              props: (e) => {
                let { ownerState: t, size: n } = e;
                return t.multiline && "small" === n;
              },
              style: { paddingTop: 1 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.fullWidth;
              },
              style: { width: "100%" },
            },
          ],
        };
      })
    ),
    vu = nl("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: gu,
    })(
      fl((e) => {
        let { theme: t } = e;
        const n = "light" === t.palette.mode,
          r = {
            color: "currentColor",
            ...(t.vars
              ? { opacity: t.vars.opacity.inputPlaceholder }
              : { opacity: n ? 0.42 : 0.5 }),
            transition: t.transitions.create("opacity", {
              duration: t.transitions.duration.shorter,
            }),
          },
          o = { opacity: "0 !important" },
          a = t.vars
            ? { opacity: t.vars.opacity.inputPlaceholder }
            : { opacity: n ? 0.42 : 0.5 };
        return {
          font: "inherit",
          letterSpacing: "inherit",
          color: "currentColor",
          padding: "4px 0 5px",
          border: 0,
          boxSizing: "content-box",
          background: "none",
          height: "1.4375em",
          margin: 0,
          WebkitTapHighlightColor: "transparent",
          display: "block",
          minWidth: 0,
          width: "100%",
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus": { outline: 0 },
          "&:invalid": { boxShadow: "none" },
          "&::-webkit-search-decoration": { WebkitAppearance: "none" },
          [`label[data-shrink=false] + .${fu.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": a,
            "&:focus::-moz-placeholder": a,
            "&:focus::-ms-input-placeholder": a,
          },
          [`&.${fu.disabled}`]: {
            opacity: 1,
            WebkitTextFillColor: (t.vars || t).palette.text.disabled,
          },
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableInjectingGlobalStyles;
              },
              style: {
                animationName: "mui-auto-fill-cancel",
                animationDuration: "10ms",
                "&:-webkit-autofill": {
                  animationDuration: "5000s",
                  animationName: "mui-auto-fill",
                },
              },
            },
            { props: { size: "small" }, style: { paddingTop: 1 } },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline;
              },
              style: {
                height: "auto",
                resize: "none",
                padding: 0,
                paddingTop: 0,
              },
            },
            {
              props: { type: "search" },
              style: { MozAppearance: "textfield" },
            },
          ],
        };
      })
    ),
    bu = (function (e) {
      return function (t) {
        return (0, ol.jsx)(Ql, {
          styles: "function" === typeof e ? (n) => e({ theme: n, ...t }) : e,
        });
      };
    })({
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    }),
    xu = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiInputBase" }),
        {
          "aria-describedby": r,
          autoComplete: o,
          autoFocus: i,
          className: l,
          color: s,
          components: u = {},
          componentsProps: c = {},
          defaultValue: d,
          disabled: p,
          disableInjectingGlobalStyles: f,
          endAdornment: h,
          error: m,
          fullWidth: g = !1,
          id: y,
          inputComponent: v = "input",
          inputProps: b = {},
          inputRef: x,
          margin: w,
          maxRows: S,
          minRows: k,
          multiline: A = !1,
          name: E,
          onBlur: C,
          onChange: R,
          onClick: T,
          onFocus: j,
          onKeyDown: N,
          onKeyUp: P,
          placeholder: O,
          readOnly: M,
          renderSuffix: B,
          rows: I,
          size: L,
          slotProps: F = {},
          slots: z = {},
          startAdornment: D,
          type: U = "text",
          value: V,
          ...W
        } = n,
        H = null != b.value ? b.value : V,
        { current: Q } = a.useRef(null != H),
        q = a.useRef(),
        G = a.useCallback((e) => {
          0;
        }, []),
        K = su(q, x, b.ref, G),
        [Y, Z] = a.useState(!1),
        J = lu();
      const X = au({
        props: n,
        muiFormControl: J,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
      (X.focused = J ? J.focused : Y),
        a.useEffect(() => {
          !J && p && Y && (Z(!1), C && C());
        }, [J, p, Y, C]);
      const _ = J && J.onFilled,
        $ = J && J.onEmpty,
        ee = a.useCallback(
          (e) => {
            du(e) ? _ && _() : $ && $();
          },
          [_, $]
        );
      uu(() => {
        Q && ee({ value: H });
      }, [H, ee, Q]);
      a.useEffect(() => {
        ee(q.current);
      }, []);
      let te = v,
        ne = b;
      A &&
        "input" === te &&
        ((ne = I
          ? { type: void 0, minRows: I, maxRows: I, ...ne }
          : { type: void 0, maxRows: S, minRows: k, ...ne }),
        (te = ru));
      a.useEffect(() => {
        J && J.setAdornedStart(Boolean(D));
      }, [J, D]);
      const re = {
          ...n,
          color: X.color || "primary",
          disabled: X.disabled,
          endAdornment: h,
          error: X.error,
          focused: X.focused,
          formControl: J,
          fullWidth: g,
          hiddenLabel: X.hiddenLabel,
          multiline: A,
          size: X.size,
          startAdornment: D,
          type: U,
        },
        oe = ((e) => {
          const {
            classes: t,
            color: n,
            disabled: r,
            error: o,
            endAdornment: a,
            focused: i,
            formControl: l,
            fullWidth: s,
            hiddenLabel: u,
            multiline: c,
            readOnly: d,
            size: p,
            startAdornment: f,
            type: h,
          } = e;
          return Un(
            {
              root: [
                "root",
                `color${ql(n)}`,
                r && "disabled",
                o && "error",
                s && "fullWidth",
                i && "focused",
                l && "formControl",
                p && "medium" !== p && `size${ql(p)}`,
                c && "multiline",
                f && "adornedStart",
                a && "adornedEnd",
                u && "hiddenLabel",
                d && "readOnly",
              ],
              input: [
                "input",
                r && "disabled",
                "search" === h && "inputTypeSearch",
                c && "inputMultiline",
                "small" === p && "inputSizeSmall",
                u && "inputHiddenLabel",
                f && "inputAdornedStart",
                a && "inputAdornedEnd",
                d && "readOnly",
              ],
            },
            pu,
            t
          );
        })(re),
        ae = z.root || u.Root || yu,
        ie = F.root || c.root || {},
        le = z.input || u.Input || vu;
      return (
        (ne = { ...ne, ...(F.input ?? c.input) }),
        (0, ol.jsxs)(a.Fragment, {
          children: [
            !f &&
              "function" === typeof bu &&
              (hu || (hu = (0, ol.jsx)(bu, {}))),
            (0, ol.jsxs)(ae, {
              ...ie,
              ref: t,
              onClick: (e) => {
                q.current && e.currentTarget === e.target && q.current.focus(),
                  T && T(e);
              },
              ...W,
              ...(!ou(ae) && { ownerState: { ...re, ...ie.ownerState } }),
              className: Dn(
                oe.root,
                ie.className,
                l,
                M && "MuiInputBase-readOnly"
              ),
              children: [
                D,
                (0, ol.jsx)(iu.Provider, {
                  value: null,
                  children: (0, ol.jsx)(le, {
                    "aria-invalid": X.error,
                    "aria-describedby": r,
                    autoComplete: o,
                    autoFocus: i,
                    defaultValue: d,
                    disabled: X.disabled,
                    id: y,
                    onAnimationStart: (e) => {
                      ee(
                        "mui-auto-fill-cancel" === e.animationName
                          ? q.current
                          : { value: "x" }
                      );
                    },
                    name: E,
                    placeholder: O,
                    readOnly: M,
                    required: X.required,
                    rows: I,
                    value: H,
                    onKeyDown: N,
                    onKeyUp: P,
                    type: U,
                    ...ne,
                    ...(!ou(le) && {
                      as: te,
                      ownerState: { ...re, ...ne.ownerState },
                    }),
                    ref: K,
                    className: Dn(
                      oe.input,
                      ne.className,
                      M && "MuiInputBase-readOnly"
                    ),
                    onBlur: (e) => {
                      C && C(e),
                        b.onBlur && b.onBlur(e),
                        J && J.onBlur ? J.onBlur(e) : Z(!1);
                    },
                    onChange: function (e) {
                      if (!Q) {
                        const t = e.target || q.current;
                        if (null == t) throw new Error(Bo(1));
                        ee({ value: t.value });
                      }
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          r = 1;
                        r < t;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      b.onChange && b.onChange(e, ...n), R && R(e, ...n);
                    },
                    onFocus: (e) => {
                      j && j(e),
                        b.onFocus && b.onFocus(e),
                        J && J.onFocus ? J.onFocus(e) : Z(!0);
                    },
                  }),
                }),
                h,
                B ? B({ ...X, startAdornment: D }) : null,
              ],
            }),
          ],
        })
      );
    }),
    wu = xu;
  function Su(e) {
    return yl("MuiInput", e);
  }
  const ku = { ...fu, ...vl("MuiInput", ["root", "underline", "input"]) },
    Au = nl(yu, {
      shouldForwardProp: (e) => tl(e) || "classes" === e,
      name: "MuiInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...mu(e, t), !n.disableUnderline && t.underline];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        let n =
          "light" === t.palette.mode
            ? "rgba(0, 0, 0, 0.42)"
            : "rgba(255, 255, 255, 0.7)";
        return (
          t.vars &&
            (n = `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),
          {
            position: "relative",
            variants: [
              {
                props: (e) => {
                  let { ownerState: t } = e;
                  return t.formControl;
                },
                style: { "label + &": { marginTop: 16 } },
              },
              {
                props: (e) => {
                  let { ownerState: t } = e;
                  return !t.disableUnderline;
                },
                style: {
                  "&::after": {
                    left: 0,
                    bottom: 0,
                    content: '""',
                    position: "absolute",
                    right: 0,
                    transform: "scaleX(0)",
                    transition: t.transitions.create("transform", {
                      duration: t.transitions.duration.shorter,
                      easing: t.transitions.easing.easeOut,
                    }),
                    pointerEvents: "none",
                  },
                  [`&.${ku.focused}:after`]: {
                    transform: "scaleX(1) translateX(0)",
                  },
                  [`&.${ku.error}`]: {
                    "&::before, &::after": {
                      borderBottomColor: (t.vars || t).palette.error.main,
                    },
                  },
                  "&::before": {
                    borderBottom: `1px solid ${n}`,
                    left: 0,
                    bottom: 0,
                    content: '"\\00a0"',
                    position: "absolute",
                    right: 0,
                    transition: t.transitions.create("border-bottom-color", {
                      duration: t.transitions.duration.shorter,
                    }),
                    pointerEvents: "none",
                  },
                  [`&:hover:not(.${ku.disabled}, .${ku.error}):before`]: {
                    borderBottom: `2px solid ${
                      (t.vars || t).palette.text.primary
                    }`,
                    "@media (hover: none)": { borderBottom: `1px solid ${n}` },
                  },
                  [`&.${ku.disabled}:before`]: { borderBottomStyle: "dotted" },
                },
              },
              ...Object.entries(t.palette)
                .filter(Gl())
                .map((e) => {
                  let [n] = e;
                  return {
                    props: { color: n, disableUnderline: !1 },
                    style: {
                      "&::after": {
                        borderBottom: `2px solid ${
                          (t.vars || t).palette[n].main
                        }`,
                      },
                    },
                  };
                }),
            ],
          }
        );
      })
    ),
    Eu = nl(vu, { name: "MuiInput", slot: "Input", overridesResolver: gu })({}),
    Cu = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiInput" }),
        {
          disableUnderline: r = !1,
          components: o = {},
          componentsProps: a,
          fullWidth: i = !1,
          inputComponent: l = "input",
          multiline: s = !1,
          slotProps: u,
          slots: c = {},
          type: d = "text",
          ...p
        } = n,
        f = ((e) => {
          const { classes: t, disableUnderline: n } = e,
            r = Un(
              { root: ["root", !n && "underline"], input: ["input"] },
              Su,
              t
            );
          return { ...t, ...r };
        })(n),
        h = { root: { ownerState: { disableUnderline: r } } },
        m = u ?? a ? Ao(u ?? a, h) : h,
        g = c.root ?? o.Root ?? Au,
        y = c.input ?? o.Input ?? Eu;
      return (0,
      ol.jsx)(wu, { slots: { root: g, input: y }, slotProps: m, fullWidth: i, inputComponent: l, multiline: s, ref: t, type: d, ...p, classes: f });
    });
  Cu && (Cu.muiName = "Input");
  const Ru = Cu;
  function Tu(e) {
    return yl("MuiFilledInput", e);
  }
  const ju = {
      ...fu,
      ...vl("MuiFilledInput", [
        "root",
        "underline",
        "input",
        "adornedStart",
        "adornedEnd",
        "sizeSmall",
        "multiline",
        "hiddenLabel",
      ]),
    },
    Nu = nl(yu, {
      shouldForwardProp: (e) => tl(e) || "classes" === e,
      name: "MuiFilledInput",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [...mu(e, t), !n.disableUnderline && t.underline];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        const n = "light" === t.palette.mode,
          r = n ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
          o = n ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
          a = n ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
          i = n ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return {
          position: "relative",
          backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : o,
          borderTopLeftRadius: (t.vars || t).shape.borderRadius,
          borderTopRightRadius: (t.vars || t).shape.borderRadius,
          transition: t.transitions.create("background-color", {
            duration: t.transitions.duration.shorter,
            easing: t.transitions.easing.easeOut,
          }),
          "&:hover": {
            backgroundColor: t.vars ? t.vars.palette.FilledInput.hoverBg : a,
            "@media (hover: none)": {
              backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : o,
            },
          },
          [`&.${ju.focused}`]: {
            backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : o,
          },
          [`&.${ju.disabled}`]: {
            backgroundColor: t.vars ? t.vars.palette.FilledInput.disabledBg : i,
          },
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableUnderline;
              },
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: t.transitions.create("transform", {
                    duration: t.transitions.duration.shorter,
                    easing: t.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${ju.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${ju.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (t.vars || t).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${
                    t.vars
                      ? `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`
                      : r
                  }`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: t.transitions.create("border-bottom-color", {
                    duration: t.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${ju.disabled}, .${ju.error}):before`]: {
                  borderBottom: `1px solid ${
                    (t.vars || t).palette.text.primary
                  }`,
                },
                [`&.${ju.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(t.palette)
              .filter(Gl())
              .map((e) => {
                let [n] = e;
                return {
                  props: { disableUnderline: !1, color: n },
                  style: {
                    "&::after": {
                      borderBottom: `2px solid ${
                        (t.vars || t).palette[n]?.main
                      }`,
                    },
                  },
                };
              }),
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.startAdornment;
              },
              style: { paddingLeft: 12 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.endAdornment;
              },
              style: { paddingRight: 12 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline;
              },
              style: { padding: "25px 12px 8px" },
            },
            {
              props: (e) => {
                let { ownerState: t, size: n } = e;
                return t.multiline && "small" === n;
              },
              style: { paddingTop: 21, paddingBottom: 4 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline && t.hiddenLabel;
              },
              style: { paddingTop: 16, paddingBottom: 17 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline && t.hiddenLabel && "small" === t.size;
              },
              style: { paddingTop: 8, paddingBottom: 9 },
            },
          ],
        };
      })
    ),
    Pu = nl(vu, {
      name: "MuiFilledInput",
      slot: "Input",
      overridesResolver: gu,
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          paddingTop: 25,
          paddingRight: 12,
          paddingBottom: 8,
          paddingLeft: 12,
          ...(!t.vars && {
            "&:-webkit-autofill": {
              WebkitBoxShadow:
                "light" === t.palette.mode ? null : "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "light" === t.palette.mode ? null : "#fff",
              caretColor: "light" === t.palette.mode ? null : "#fff",
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
            },
          }),
          ...(t.vars && {
            "&:-webkit-autofill": {
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
            },
            [t.getColorSchemeSelector("dark")]: {
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff",
              },
            },
          }),
          variants: [
            {
              props: { size: "small" },
              style: { paddingTop: 21, paddingBottom: 4 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.hiddenLabel;
              },
              style: { paddingTop: 16, paddingBottom: 17 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.startAdornment;
              },
              style: { paddingLeft: 0 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.endAdornment;
              },
              style: { paddingRight: 0 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.hiddenLabel && "small" === t.size;
              },
              style: { paddingTop: 8, paddingBottom: 9 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline;
              },
              style: {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
              },
            },
          ],
        };
      })
    ),
    Ou = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiFilledInput" }),
        {
          disableUnderline: r = !1,
          components: o = {},
          componentsProps: a,
          fullWidth: i = !1,
          hiddenLabel: l,
          inputComponent: s = "input",
          multiline: u = !1,
          slotProps: c,
          slots: d = {},
          type: p = "text",
          ...f
        } = n,
        h = {
          ...n,
          disableUnderline: r,
          fullWidth: i,
          inputComponent: s,
          multiline: u,
          type: p,
        },
        m = ((e) => {
          const {
              classes: t,
              disableUnderline: n,
              startAdornment: r,
              endAdornment: o,
              size: a,
              hiddenLabel: i,
              multiline: l,
            } = e,
            s = Un(
              {
                root: [
                  "root",
                  !n && "underline",
                  r && "adornedStart",
                  o && "adornedEnd",
                  "small" === a && `size${ql(a)}`,
                  i && "hiddenLabel",
                  l && "multiline",
                ],
                input: ["input"],
              },
              Tu,
              t
            );
          return { ...t, ...s };
        })(n),
        g = { root: { ownerState: h }, input: { ownerState: h } },
        y = c ?? a ? Ao(g, c ?? a) : g,
        v = d.root ?? o.Root ?? Nu,
        b = d.input ?? o.Input ?? Pu;
      return (0,
      ol.jsx)(wu, { slots: { root: v, input: b }, componentsProps: y, fullWidth: i, inputComponent: s, multiline: u, ref: t, type: p, ...f, classes: m });
    });
  Ou && (Ou.muiName = "Input");
  const Mu = Ou;
  var Bu;
  const Iu = nl("fieldset", { shouldForwardProp: tl })({
      textAlign: "left",
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden",
      minWidth: "0%",
    }),
    Lu = nl("legend", { shouldForwardProp: tl })(
      fl((e) => {
        let { theme: t } = e;
        return {
          float: "unset",
          width: "auto",
          overflow: "hidden",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.withLabel;
              },
              style: {
                padding: 0,
                lineHeight: "11px",
                transition: t.transitions.create("width", {
                  duration: 150,
                  easing: t.transitions.easing.easeOut,
                }),
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.withLabel;
              },
              style: {
                display: "block",
                padding: 0,
                height: 11,
                fontSize: "0.75em",
                visibility: "hidden",
                maxWidth: 0.01,
                transition: t.transitions.create("max-width", {
                  duration: 50,
                  easing: t.transitions.easing.easeOut,
                }),
                whiteSpace: "nowrap",
                "& > span": {
                  paddingLeft: 5,
                  paddingRight: 5,
                  display: "inline-block",
                  opacity: 0,
                  visibility: "visible",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.withLabel && t.notched;
              },
              style: {
                maxWidth: "100%",
                transition: t.transitions.create("max-width", {
                  duration: 100,
                  easing: t.transitions.easing.easeOut,
                  delay: 50,
                }),
              },
            },
          ],
        };
      })
    );
  function Fu(e) {
    return yl("MuiOutlinedInput", e);
  }
  const zu = {
      ...fu,
      ...vl("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
    },
    Du = nl(yu, {
      shouldForwardProp: (e) => tl(e) || "classes" === e,
      name: "MuiOutlinedInput",
      slot: "Root",
      overridesResolver: mu,
    })(
      fl((e) => {
        let { theme: t } = e;
        const n =
          "light" === t.palette.mode
            ? "rgba(0, 0, 0, 0.23)"
            : "rgba(255, 255, 255, 0.23)";
        return {
          position: "relative",
          borderRadius: (t.vars || t).shape.borderRadius,
          [`&:hover .${zu.notchedOutline}`]: {
            borderColor: (t.vars || t).palette.text.primary,
          },
          "@media (hover: none)": {
            [`&:hover .${zu.notchedOutline}`]: {
              borderColor: t.vars
                ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`
                : n,
            },
          },
          [`&.${zu.focused} .${zu.notchedOutline}`]: { borderWidth: 2 },
          variants: [
            ...Object.entries(t.palette)
              .filter(Gl())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: {
                    [`&.${zu.focused} .${zu.notchedOutline}`]: {
                      borderColor: (t.vars || t).palette[n].main,
                    },
                  },
                };
              }),
            {
              props: {},
              style: {
                [`&.${zu.error} .${zu.notchedOutline}`]: {
                  borderColor: (t.vars || t).palette.error.main,
                },
                [`&.${zu.disabled} .${zu.notchedOutline}`]: {
                  borderColor: (t.vars || t).palette.action.disabled,
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.startAdornment;
              },
              style: { paddingLeft: 14 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.endAdornment;
              },
              style: { paddingRight: 14 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline;
              },
              style: { padding: "16.5px 14px" },
            },
            {
              props: (e) => {
                let { ownerState: t, size: n } = e;
                return t.multiline && "small" === n;
              },
              style: { padding: "8.5px 14px" },
            },
          ],
        };
      })
    ),
    Uu = nl(
      function (e) {
        const {
            children: t,
            classes: n,
            className: r,
            label: o,
            notched: a,
            ...i
          } = e,
          l = null != o && "" !== o,
          s = { ...e, notched: a, withLabel: l };
        return (0, ol.jsx)(Iu, {
          "aria-hidden": !0,
          className: r,
          ownerState: s,
          ...i,
          children: (0, ol.jsx)(Lu, {
            ownerState: s,
            children: l
              ? (0, ol.jsx)("span", { children: o })
              : Bu ||
                (Bu = (0, ol.jsx)("span", {
                  className: "notranslate",
                  children: "\u200b",
                })),
          }),
        });
      },
      {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline",
        overridesResolver: (e, t) => t.notchedOutline,
      }
    )(
      fl((e) => {
        let { theme: t } = e;
        const n =
          "light" === t.palette.mode
            ? "rgba(0, 0, 0, 0.23)"
            : "rgba(255, 255, 255, 0.23)";
        return {
          borderColor: t.vars
            ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`
            : n,
        };
      })
    ),
    Vu = nl(vu, {
      name: "MuiOutlinedInput",
      slot: "Input",
      overridesResolver: gu,
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          padding: "16.5px 14px",
          ...(!t.vars && {
            "&:-webkit-autofill": {
              WebkitBoxShadow:
                "light" === t.palette.mode ? null : "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "light" === t.palette.mode ? null : "#fff",
              caretColor: "light" === t.palette.mode ? null : "#fff",
              borderRadius: "inherit",
            },
          }),
          ...(t.vars && {
            "&:-webkit-autofill": { borderRadius: "inherit" },
            [t.getColorSchemeSelector("dark")]: {
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff",
              },
            },
          }),
          variants: [
            { props: { size: "small" }, style: { padding: "8.5px 14px" } },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.multiline;
              },
              style: { padding: 0 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.startAdornment;
              },
              style: { paddingLeft: 0 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.endAdornment;
              },
              style: { paddingRight: 0 },
            },
          ],
        };
      })
    ),
    Wu = a.forwardRef(function (e, t) {
      var n;
      const r = ll({ props: e, name: "MuiOutlinedInput" }),
        {
          components: o = {},
          fullWidth: i = !1,
          inputComponent: l = "input",
          label: s,
          multiline: u = !1,
          notched: c,
          slots: d = {},
          type: p = "text",
          ...f
        } = r,
        h = ((e) => {
          const { classes: t } = e,
            n = Un(
              {
                root: ["root"],
                notchedOutline: ["notchedOutline"],
                input: ["input"],
              },
              Fu,
              t
            );
          return { ...t, ...n };
        })(r),
        m = lu(),
        g = au({
          props: r,
          muiFormControl: m,
          states: [
            "color",
            "disabled",
            "error",
            "focused",
            "hiddenLabel",
            "size",
            "required",
          ],
        }),
        y = {
          ...r,
          color: g.color || "primary",
          disabled: g.disabled,
          error: g.error,
          focused: g.focused,
          formControl: m,
          fullWidth: i,
          hiddenLabel: g.hiddenLabel,
          multiline: u,
          size: g.size,
          type: p,
        },
        v = d.root ?? o.Root ?? Du,
        b = d.input ?? o.Input ?? Vu;
      return (0,
      ol.jsx)(wu, { slots: { root: v, input: b }, renderSuffix: (e) => (0, ol.jsx)(Uu, { ownerState: y, className: h.notchedOutline, label: null != s && "" !== s && g.required ? n || (n = (0, ol.jsxs)(a.Fragment, { children: [s, "\u2009", "*"] })) : s, notched: "undefined" !== typeof c ? c : Boolean(e.startAdornment || e.filled || e.focused) }), fullWidth: i, inputComponent: l, multiline: u, ref: t, type: p, ...f, classes: { ...h, notchedOutline: null } });
    });
  Wu && (Wu.muiName = "Input");
  const Hu = Wu;
  function Qu(e) {
    return yl("MuiFormLabel", e);
  }
  const qu = vl("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]),
    Gu = nl("label", {
      name: "MuiFormLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        let { ownerState: n } = e;
        return {
          ...t.root,
          ...("secondary" === n.color && t.colorSecondary),
          ...(n.filled && t.filled),
        };
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          color: (t.vars || t).palette.text.secondary,
          ...t.typography.body1,
          lineHeight: "1.4375em",
          padding: 0,
          position: "relative",
          variants: [
            ...Object.entries(t.palette)
              .filter(Gl())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: {
                    [`&.${qu.focused}`]: {
                      color: (t.vars || t).palette[n].main,
                    },
                  },
                };
              }),
            {
              props: {},
              style: {
                [`&.${qu.disabled}`]: {
                  color: (t.vars || t).palette.text.disabled,
                },
                [`&.${qu.error}`]: { color: (t.vars || t).palette.error.main },
              },
            },
          ],
        };
      })
    ),
    Ku = nl("span", {
      name: "MuiFormLabel",
      slot: "Asterisk",
      overridesResolver: (e, t) => t.asterisk,
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          [`&.${qu.error}`]: { color: (t.vars || t).palette.error.main },
        };
      })
    ),
    Yu = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiFormLabel" }),
        {
          children: r,
          className: o,
          color: a,
          component: i = "label",
          disabled: l,
          error: s,
          filled: u,
          focused: c,
          required: d,
          ...p
        } = n,
        f = au({
          props: n,
          muiFormControl: lu(),
          states: [
            "color",
            "required",
            "focused",
            "disabled",
            "error",
            "filled",
          ],
        }),
        h = {
          ...n,
          color: f.color || "primary",
          component: i,
          disabled: f.disabled,
          error: f.error,
          filled: f.filled,
          focused: f.focused,
          required: f.required,
        },
        m = ((e) => {
          const {
            classes: t,
            color: n,
            focused: r,
            disabled: o,
            error: a,
            filled: i,
            required: l,
          } = e;
          return Un(
            {
              root: [
                "root",
                `color${ql(n)}`,
                o && "disabled",
                a && "error",
                i && "filled",
                r && "focused",
                l && "required",
              ],
              asterisk: ["asterisk", a && "error"],
            },
            Qu,
            t
          );
        })(h);
      return (0,
      ol.jsxs)(Gu, { as: i, ownerState: h, className: Dn(m.root, o), ref: t, ...p, children: [r, f.required && (0, ol.jsxs)(Ku, { ownerState: h, "aria-hidden": !0, className: m.asterisk, children: ["\u2009", "*"] })] });
    }),
    Zu = Yu;
  function Ju(e) {
    return yl("MuiInputLabel", e);
  }
  vl("MuiInputLabel", [
    "root",
    "focused",
    "disabled",
    "error",
    "required",
    "asterisk",
    "formControl",
    "sizeSmall",
    "shrink",
    "animated",
    "standard",
    "filled",
    "outlined",
  ]);
  const Xu = nl(Zu, {
      shouldForwardProp: (e) => tl(e) || "classes" === e,
      name: "MuiInputLabel",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${qu.asterisk}`]: t.asterisk },
          t.root,
          n.formControl && t.formControl,
          "small" === n.size && t.sizeSmall,
          n.shrink && t.shrink,
          !n.disableAnimation && t.animated,
          n.focused && t.focused,
          t[n.variant],
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          display: "block",
          transformOrigin: "top left",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.formControl;
              },
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                transform: "translate(0, 20px) scale(1)",
              },
            },
            {
              props: { size: "small" },
              style: { transform: "translate(0, 17px) scale(1)" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.shrink;
              },
              style: {
                transform: "translate(0, -1.5px) scale(0.75)",
                transformOrigin: "top left",
                maxWidth: "133%",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableAnimation;
              },
              style: {
                transition: t.transitions.create(
                  ["color", "transform", "max-width"],
                  {
                    duration: t.transitions.duration.shorter,
                    easing: t.transitions.easing.easeOut,
                  }
                ),
              },
            },
            {
              props: { variant: "filled" },
              style: {
                zIndex: 1,
                pointerEvents: "none",
                transform: "translate(12px, 16px) scale(1)",
                maxWidth: "calc(100% - 24px)",
              },
            },
            {
              props: { variant: "filled", size: "small" },
              style: { transform: "translate(12px, 13px) scale(1)" },
            },
            {
              props: (e) => {
                let { variant: t, ownerState: n } = e;
                return "filled" === t && n.shrink;
              },
              style: {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
            },
            {
              props: (e) => {
                let { variant: t, ownerState: n, size: r } = e;
                return "filled" === t && n.shrink && "small" === r;
              },
              style: { transform: "translate(12px, 4px) scale(0.75)" },
            },
            {
              props: { variant: "outlined" },
              style: {
                zIndex: 1,
                pointerEvents: "none",
                transform: "translate(14px, 16px) scale(1)",
                maxWidth: "calc(100% - 24px)",
              },
            },
            {
              props: { variant: "outlined", size: "small" },
              style: { transform: "translate(14px, 9px) scale(1)" },
            },
            {
              props: (e) => {
                let { variant: t, ownerState: n } = e;
                return "outlined" === t && n.shrink;
              },
              style: {
                userSelect: "none",
                pointerEvents: "auto",
                maxWidth: "calc(133% - 32px)",
                transform: "translate(14px, -9px) scale(0.75)",
              },
            },
          ],
        };
      })
    ),
    _u = a.forwardRef(function (e, t) {
      const n = ll({ name: "MuiInputLabel", props: e }),
        {
          disableAnimation: r = !1,
          margin: o,
          shrink: a,
          variant: i,
          className: l,
          ...s
        } = n,
        u = lu();
      let c = a;
      "undefined" === typeof c &&
        u &&
        (c = u.filled || u.focused || u.adornedStart);
      const d = au({
          props: n,
          muiFormControl: u,
          states: ["size", "variant", "required", "focused"],
        }),
        p = {
          ...n,
          disableAnimation: r,
          formControl: u,
          shrink: c,
          size: d.size,
          variant: d.variant,
          required: d.required,
          focused: d.focused,
        },
        f = ((e) => {
          const {
              classes: t,
              formControl: n,
              size: r,
              shrink: o,
              disableAnimation: a,
              variant: i,
              required: l,
            } = e,
            s = Un(
              {
                root: [
                  "root",
                  n && "formControl",
                  !a && "animated",
                  o && "shrink",
                  r && "normal" !== r && `size${ql(r)}`,
                  i,
                ],
                asterisk: [l && "asterisk"],
              },
              Ju,
              t
            );
          return { ...t, ...s };
        })(p);
      return (0,
      ol.jsx)(Xu, { "data-shrink": c, ref: t, className: Dn(f.root, l), ...s, ownerState: p, classes: f });
    });
  const $u = function (e, t) {
    return (
      a.isValidElement(e) &&
      -1 !== t.indexOf(e.type.muiName ?? e.type?._payload?.value?.muiName)
    );
  };
  function ec(e) {
    return yl("MuiFormControl", e);
  }
  vl("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
  ]);
  const tc = nl("div", {
      name: "MuiFormControl",
      slot: "Root",
      overridesResolver: (e, t) => {
        let { ownerState: n } = e;
        return {
          ...t.root,
          ...t[`margin${ql(n.margin)}`],
          ...(n.fullWidth && t.fullWidth),
        };
      },
    })({
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0,
      verticalAlign: "top",
      variants: [
        {
          props: { margin: "normal" },
          style: { marginTop: 16, marginBottom: 8 },
        },
        {
          props: { margin: "dense" },
          style: { marginTop: 8, marginBottom: 4 },
        },
        { props: { fullWidth: !0 }, style: { width: "100%" } },
      ],
    }),
    nc = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiFormControl" }),
        {
          children: r,
          className: o,
          color: i = "primary",
          component: l = "div",
          disabled: s = !1,
          error: u = !1,
          focused: c,
          fullWidth: d = !1,
          hiddenLabel: p = !1,
          margin: f = "none",
          required: h = !1,
          size: m = "medium",
          variant: g = "outlined",
          ...y
        } = n,
        v = {
          ...n,
          color: i,
          component: l,
          disabled: s,
          error: u,
          fullWidth: d,
          hiddenLabel: p,
          margin: f,
          required: h,
          size: m,
          variant: g,
        },
        b = ((e) => {
          const { classes: t, margin: n, fullWidth: r } = e;
          return Un(
            {
              root: [
                "root",
                "none" !== n && `margin${ql(n)}`,
                r && "fullWidth",
              ],
            },
            ec,
            t
          );
        })(v),
        [x, w] = a.useState(() => {
          let e = !1;
          return (
            r &&
              a.Children.forEach(r, (t) => {
                if (!$u(t, ["Input", "Select"])) return;
                const n = $u(t, ["Select"]) ? t.props.input : t;
                n && n.props.startAdornment && (e = !0);
              }),
            e
          );
        }),
        [S, k] = a.useState(() => {
          let e = !1;
          return (
            r &&
              a.Children.forEach(r, (t) => {
                $u(t, ["Input", "Select"]) &&
                  (du(t.props, !0) || du(t.props.inputProps, !0)) &&
                  (e = !0);
              }),
            e
          );
        }),
        [A, E] = a.useState(!1);
      s && A && E(!1);
      const C = void 0 === c || s ? A : c;
      let R;
      a.useRef(!1);
      const T = a.useMemo(
        () => ({
          adornedStart: x,
          setAdornedStart: w,
          color: i,
          disabled: s,
          error: u,
          filled: S,
          focused: C,
          fullWidth: d,
          hiddenLabel: p,
          size: m,
          onBlur: () => {
            E(!1);
          },
          onEmpty: () => {
            k(!1);
          },
          onFilled: () => {
            k(!0);
          },
          onFocus: () => {
            E(!0);
          },
          registerEffect: R,
          required: h,
          variant: g,
        }),
        [x, i, s, u, S, C, d, p, R, h, m, g]
      );
      return (0,
      ol.jsx)(iu.Provider, { value: T, children: (0, ol.jsx)(tc, { as: l, ownerState: v, className: Dn(b.root, o), ref: t, ...y, children: r }) });
    }),
    rc = nc;
  function oc(e) {
    return yl("MuiFormHelperText", e);
  }
  const ac = vl("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]);
  var ic;
  const lc = nl("p", {
      name: "MuiFormHelperText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.size && t[`size${ql(n.size)}`],
          n.contained && t.contained,
          n.filled && t.filled,
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          color: (t.vars || t).palette.text.secondary,
          ...t.typography.caption,
          textAlign: "left",
          marginTop: 3,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          [`&.${ac.disabled}`]: { color: (t.vars || t).palette.text.disabled },
          [`&.${ac.error}`]: { color: (t.vars || t).palette.error.main },
          variants: [
            { props: { size: "small" }, style: { marginTop: 4 } },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.contained;
              },
              style: { marginLeft: 14, marginRight: 14 },
            },
          ],
        };
      })
    ),
    sc = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiFormHelperText" }),
        {
          children: r,
          className: o,
          component: a = "p",
          disabled: i,
          error: l,
          filled: s,
          focused: u,
          margin: c,
          required: d,
          variant: p,
          ...f
        } = n,
        h = au({
          props: n,
          muiFormControl: lu(),
          states: [
            "variant",
            "size",
            "disabled",
            "error",
            "filled",
            "focused",
            "required",
          ],
        }),
        m = {
          ...n,
          component: a,
          contained: "filled" === h.variant || "outlined" === h.variant,
          variant: h.variant,
          size: h.size,
          disabled: h.disabled,
          error: h.error,
          filled: h.filled,
          focused: h.focused,
          required: h.required,
        };
      delete m.ownerState;
      const g = ((e) => {
        const {
          classes: t,
          contained: n,
          size: r,
          disabled: o,
          error: a,
          filled: i,
          focused: l,
          required: s,
        } = e;
        return Un(
          {
            root: [
              "root",
              o && "disabled",
              a && "error",
              r && `size${ql(r)}`,
              n && "contained",
              l && "focused",
              i && "filled",
              s && "required",
            ],
          },
          oc,
          t
        );
      })(m);
      return (0,
      ol.jsx)(lc, { as: a, className: Dn(g.root, o), ref: t, ...f, ownerState: m, children: " " === r ? ic || (ic = (0, ol.jsx)("span", { className: "notranslate", children: "\u200b" })) : r });
    });
  function uc(e) {
    return parseInt(a.version, 10) >= 19
      ? e?.props?.ref || null
      : e?.ref || null;
  }
  n(805);
  const cc = Js,
    dc = a.createContext();
  const pc = function (e) {
    return "string" === typeof e;
  };
  const fc = function (e, t, n) {
    return void 0 === e || pc(e)
      ? t
      : { ...t, ownerState: { ...t.ownerState, ...n } };
  };
  const hc = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (void 0 === e) return {};
    const n = {};
    return (
      Object.keys(e)
        .filter(
          (n) =>
            n.match(/^on[A-Z]/) && "function" === typeof e[n] && !t.includes(n)
        )
        .forEach((t) => {
          n[t] = e[t];
        }),
      n
    );
  };
  const mc = function (e) {
    if (void 0 === e) return {};
    const t = {};
    return (
      Object.keys(e)
        .filter((t) => !(t.match(/^on[A-Z]/) && "function" === typeof e[t]))
        .forEach((n) => {
          t[n] = e[n];
        }),
      t
    );
  };
  const gc = function (e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: o,
      className: a,
    } = e;
    if (!t) {
      const e = Dn(n?.className, a, o?.className, r?.className),
        t = { ...n?.style, ...o?.style, ...r?.style },
        i = { ...n, ...o, ...r };
      return (
        e.length > 0 && (i.className = e),
        Object.keys(t).length > 0 && (i.style = t),
        { props: i, internalRef: void 0 }
      );
    }
    const i = hc({ ...o, ...r }),
      l = mc(r),
      s = mc(o),
      u = t(i),
      c = Dn(u?.className, n?.className, a, o?.className, r?.className),
      d = { ...u?.style, ...n?.style, ...o?.style, ...r?.style },
      p = { ...u, ...n, ...s, ...l };
    return (
      c.length > 0 && (p.className = c),
      Object.keys(d).length > 0 && (p.style = d),
      { props: p, internalRef: u.ref }
    );
  };
  const yc = function (e, t, n) {
    return "function" === typeof e ? e(t, n) : e;
  };
  const vc = function (e) {
    const {
        elementType: t,
        externalSlotProps: n,
        ownerState: r,
        skipResolvingSlotProps: o = !1,
        ...a
      } = e,
      i = o ? {} : yc(n, r),
      { props: l, internalRef: s } = gc({ ...a, externalSlotProps: i }),
      u = Zs(s, i?.ref, e.additionalProps?.ref);
    return fc(t, { ...l, ref: u }, r);
  };
  const bc = a.createContext({});
  function xc(e) {
    return yl("MuiList", e);
  }
  vl("MuiList", ["root", "padding", "dense", "subheader"]);
  const wc = nl("ul", {
      name: "MuiList",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          !n.disablePadding && t.padding,
          n.dense && t.dense,
          n.subheader && t.subheader,
        ];
      },
    })({
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative",
      variants: [
        {
          props: (e) => {
            let { ownerState: t } = e;
            return !t.disablePadding;
          },
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.subheader;
          },
          style: { paddingTop: 0 },
        },
      ],
    }),
    Sc = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiList" }),
        {
          children: r,
          className: o,
          component: i = "ul",
          dense: l = !1,
          disablePadding: s = !1,
          subheader: u,
          ...c
        } = n,
        d = a.useMemo(() => ({ dense: l }), [l]),
        p = { ...n, component: i, dense: l, disablePadding: s },
        f = ((e) => {
          const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
          return Un(
            { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
            xc,
            t
          );
        })(p);
      return (0,
      ol.jsx)(bc.Provider, { value: d, children: (0, ol.jsxs)(wc, { as: i, className: Dn(f.root, o), ref: t, ownerState: p, ...c, children: [u, r] }) });
    });
  function kc() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
    const t = e.document.documentElement.clientWidth;
    return e.innerWidth - t;
  }
  const Ac = kc,
    Ec = Xs;
  function Cc(e, t, n) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
      ? null
      : e.firstChild;
  }
  function Rc(e, t, n) {
    return e === t
      ? n
        ? e.firstChild
        : e.lastChild
      : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
      ? null
      : e.lastChild;
  }
  function Tc(e, t) {
    if (void 0 === t) return !0;
    let n = e.innerText;
    return (
      void 0 === n && (n = e.textContent),
      (n = n.trim().toLowerCase()),
      0 !== n.length &&
        (t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join("")))
    );
  }
  function jc(e, t, n, r, o, a) {
    let i = !1,
      l = o(e, t, !!t && n);
    for (; l; ) {
      if (l === e.firstChild) {
        if (i) return !1;
        i = !0;
      }
      const t =
        !r && (l.disabled || "true" === l.getAttribute("aria-disabled"));
      if (l.hasAttribute("tabindex") && Tc(l, a) && !t) return l.focus(), !0;
      l = o(e, l, n);
    }
    return !1;
  }
  const Nc = a.forwardRef(function (e, t) {
      const {
          actions: n,
          autoFocus: r = !1,
          autoFocusItem: o = !1,
          children: i,
          className: l,
          disabledItemsFocusable: s = !1,
          disableListWrap: u = !1,
          onKeyDown: c,
          variant: d = "selectedMenu",
          ...p
        } = e,
        f = a.useRef(null),
        h = a.useRef({
          keys: [],
          repeating: !0,
          previousKeyMatched: !0,
          lastTime: null,
        });
      uu(() => {
        r && f.current.focus();
      }, [r]),
        a.useImperativeHandle(
          n,
          () => ({
            adjustStyleForScrollbar: (e, t) => {
              let { direction: n } = t;
              const r = !f.current.style.width;
              if (e.clientHeight < f.current.clientHeight && r) {
                const t = `${Ac(Ec(e))}px`;
                (f.current.style["rtl" === n ? "paddingLeft" : "paddingRight"] =
                  t),
                  (f.current.style.width = `calc(100% + ${t})`);
              }
              return f.current;
            },
          }),
          []
        );
      const m = su(f, t);
      let g = -1;
      a.Children.forEach(i, (e, t) => {
        a.isValidElement(e)
          ? (e.props.disabled ||
              ((("selectedMenu" === d && e.props.selected) || -1 === g) &&
                (g = t)),
            g === t &&
              (e.props.disabled ||
                e.props.muiSkipListHighlight ||
                e.type.muiSkipListHighlight) &&
              ((g += 1), g >= i.length && (g = -1)))
          : g === t && ((g += 1), g >= i.length && (g = -1));
      });
      const y = a.Children.map(i, (e, t) => {
        if (t === g) {
          const t = {};
          return (
            o && (t.autoFocus = !0),
            void 0 === e.props.tabIndex &&
              "selectedMenu" === d &&
              (t.tabIndex = 0),
            a.cloneElement(e, t)
          );
        }
        return e;
      });
      return (0, ol.jsx)(Sc, {
        role: "menu",
        ref: m,
        className: l,
        onKeyDown: (e) => {
          const t = f.current,
            n = e.key;
          if (e.ctrlKey || e.metaKey || e.altKey) return void (c && c(e));
          const r = cc(t).activeElement;
          if ("ArrowDown" === n) e.preventDefault(), jc(t, r, u, s, Cc);
          else if ("ArrowUp" === n) e.preventDefault(), jc(t, r, u, s, Rc);
          else if ("Home" === n) e.preventDefault(), jc(t, null, u, s, Cc);
          else if ("End" === n) e.preventDefault(), jc(t, null, u, s, Rc);
          else if (1 === n.length) {
            const o = h.current,
              a = n.toLowerCase(),
              i = performance.now();
            o.keys.length > 0 &&
              (i - o.lastTime > 500
                ? ((o.keys = []),
                  (o.repeating = !0),
                  (o.previousKeyMatched = !0))
                : o.repeating && a !== o.keys[0] && (o.repeating = !1)),
              (o.lastTime = i),
              o.keys.push(a);
            const l = r && !o.repeating && Tc(r, o);
            o.previousKeyMatched && (l || jc(t, r, !1, s, Cc, o))
              ? e.preventDefault()
              : (o.previousKeyMatched = !1);
          }
          c && c(e);
        },
        tabIndex: r ? 0 : -1,
        ...p,
        children: y,
      });
    }),
    Pc = $s,
    Oc = {};
  function Mc(e, t) {
    const n = a.useRef(Oc);
    return n.current === Oc && (n.current = e(t)), n;
  }
  const Bc = [];
  class Ic {
    static create() {
      return new Ic();
    }
    currentId = null;
    start(e, t) {
      this.clear(),
        (this.currentId = setTimeout(() => {
          (this.currentId = null), t();
        }, e));
    }
    clear = () => {
      null !== this.currentId &&
        (clearTimeout(this.currentId), (this.currentId = null));
    };
    disposeEffect = () => this.clear;
  }
  function Lc() {
    const e = Mc(Ic.create).current;
    var t;
    return (t = e.disposeEffect), a.useEffect(t, Bc), e;
  }
  function Fc(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (t.includes(r)) continue;
        n[r] = e[r];
      }
    return n;
  }
  function zc(e, t) {
    return (
      (zc = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      zc(e, t)
    );
  }
  function Dc(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      zc(e, t);
  }
  const Uc = !1,
    Vc = a.createContext(null);
  var Wc = "unmounted",
    Hc = "exited",
    Qc = "entering",
    qc = "entered",
    Gc = "exiting",
    Kc = (function (e) {
      function t(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var o,
          a = n && !n.isMounting ? t.enter : t.appear;
        return (
          (r.appearStatus = null),
          t.in
            ? a
              ? ((o = Hc), (r.appearStatus = Qc))
              : (o = qc)
            : (o = t.unmountOnExit || t.mountOnEnter ? Wc : Hc),
          (r.state = { status: o }),
          (r.nextCallback = null),
          r
        );
      }
      Dc(t, e),
        (t.getDerivedStateFromProps = function (e, t) {
          return e.in && t.status === Wc ? { status: Hc } : null;
        });
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (n.componentDidUpdate = function (e) {
          var t = null;
          if (e !== this.props) {
            var n = this.state.status;
            this.props.in
              ? n !== Qc && n !== qc && (t = Qc)
              : (n !== Qc && n !== qc) || (t = Gc);
          }
          this.updateStatus(!1, t);
        }),
        (n.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (n.getTimeouts = function () {
          var e,
            t,
            n,
            r = this.props.timeout;
          return (
            (e = t = n = r),
            null != r &&
              "number" !== typeof r &&
              ((e = r.exit),
              (t = r.enter),
              (n = void 0 !== r.appear ? r.appear : t)),
            { exit: e, enter: t, appear: n }
          );
        }),
        (n.updateStatus = function (e, t) {
          if ((void 0 === e && (e = !1), null !== t))
            if ((this.cancelNextCallback(), t === Qc)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : s.findDOMNode(this);
                n &&
                  (function (e) {
                    e.scrollTop;
                  })(n);
              }
              this.performEnter(e);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === Hc &&
              this.setState({ status: Wc });
        }),
        (n.performEnter = function (e) {
          var t = this,
            n = this.props.enter,
            r = this.context ? this.context.isMounting : e,
            o = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
            a = o[0],
            i = o[1],
            l = this.getTimeouts(),
            u = r ? l.appear : l.enter;
          (!e && !n) || Uc
            ? this.safeSetState({ status: qc }, function () {
                t.props.onEntered(a);
              })
            : (this.props.onEnter(a, i),
              this.safeSetState({ status: Qc }, function () {
                t.props.onEntering(a, i),
                  t.onTransitionEnd(u, function () {
                    t.safeSetState({ status: qc }, function () {
                      t.props.onEntered(a, i);
                    });
                  });
              }));
        }),
        (n.performExit = function () {
          var e = this,
            t = this.props.exit,
            n = this.getTimeouts(),
            r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
          t && !Uc
            ? (this.props.onExit(r),
              this.safeSetState({ status: Gc }, function () {
                e.props.onExiting(r),
                  e.onTransitionEnd(n.exit, function () {
                    e.safeSetState({ status: Hc }, function () {
                      e.props.onExited(r);
                    });
                  });
              }))
            : this.safeSetState({ status: Hc }, function () {
                e.props.onExited(r);
              });
        }),
        (n.cancelNextCallback = function () {
          null !== this.nextCallback &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (n.safeSetState = function (e, t) {
          (t = this.setNextCallback(t)), this.setState(e, t);
        }),
        (n.setNextCallback = function (e) {
          var t = this,
            n = !0;
          return (
            (this.nextCallback = function (r) {
              n && ((n = !1), (t.nextCallback = null), e(r));
            }),
            (this.nextCallback.cancel = function () {
              n = !1;
            }),
            this.nextCallback
          );
        }),
        (n.onTransitionEnd = function (e, t) {
          this.setNextCallback(t);
          var n = this.props.nodeRef
              ? this.props.nodeRef.current
              : s.findDOMNode(this),
            r = null == e && !this.props.addEndListener;
          if (n && !r) {
            if (this.props.addEndListener) {
              var o = this.props.nodeRef
                  ? [this.nextCallback]
                  : [n, this.nextCallback],
                a = o[0],
                i = o[1];
              this.props.addEndListener(a, i);
            }
            null != e && setTimeout(this.nextCallback, e);
          } else setTimeout(this.nextCallback, 0);
        }),
        (n.render = function () {
          var e = this.state.status;
          if (e === Wc) return null;
          var t = this.props,
            n = t.children,
            r =
              (t.in,
              t.mountOnEnter,
              t.unmountOnExit,
              t.appear,
              t.enter,
              t.exit,
              t.timeout,
              t.addEndListener,
              t.onEnter,
              t.onEntering,
              t.onEntered,
              t.onExit,
              t.onExiting,
              t.onExited,
              t.nodeRef,
              Fc(t, [
                "children",
                "in",
                "mountOnEnter",
                "unmountOnExit",
                "appear",
                "enter",
                "exit",
                "timeout",
                "addEndListener",
                "onEnter",
                "onEntering",
                "onEntered",
                "onExit",
                "onExiting",
                "onExited",
                "nodeRef",
              ]));
          return a.createElement(
            Vc.Provider,
            { value: null },
            "function" === typeof n
              ? n(e, r)
              : a.cloneElement(a.Children.only(n), r)
          );
        }),
        t
      );
    })(a.Component);
  function Yc() {}
  (Kc.contextType = Vc),
    (Kc.propTypes = {}),
    (Kc.defaultProps = {
      in: !1,
      mountOnEnter: !1,
      unmountOnExit: !1,
      appear: !1,
      enter: !0,
      exit: !0,
      onEnter: Yc,
      onEntering: Yc,
      onEntered: Yc,
      onExit: Yc,
      onExiting: Yc,
      onExited: Yc,
    }),
    (Kc.UNMOUNTED = Wc),
    (Kc.EXITED = Hc),
    (Kc.ENTERING = Qc),
    (Kc.ENTERED = qc),
    (Kc.EXITING = Gc);
  const Zc = Kc,
    Jc = (e) => e.scrollTop;
  function Xc(e, t) {
    const { timeout: n, easing: r, style: o = {} } = e;
    return {
      duration:
        o.transitionDuration ?? ("number" === typeof n ? n : n[t.mode] || 0),
      easing:
        o.transitionTimingFunction ?? ("object" === typeof r ? r[t.mode] : r),
      delay: o.transitionDelay,
    };
  }
  function _c(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const $c = {
      entering: { opacity: 1, transform: _c(1) },
      entered: { opacity: 1, transform: "none" },
    },
    ed =
      "undefined" !== typeof navigator &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    td = a.forwardRef(function (e, t) {
      const {
          addEndListener: n,
          appear: r = !0,
          children: o,
          easing: i,
          in: l,
          onEnter: s,
          onEntered: u,
          onEntering: c,
          onExit: d,
          onExited: p,
          onExiting: f,
          style: h,
          timeout: m = "auto",
          TransitionComponent: g = Zc,
          ...y
        } = e,
        v = Lc(),
        b = a.useRef(),
        x = dl(),
        w = a.useRef(null),
        S = su(w, uc(o), t),
        k = (e) => (t) => {
          if (e) {
            const n = w.current;
            void 0 === t ? e(n) : e(n, t);
          }
        },
        A = k(c),
        E = k((e, t) => {
          Jc(e);
          const {
            duration: n,
            delay: r,
            easing: o,
          } = Xc({ style: h, timeout: m, easing: i }, { mode: "enter" });
          let a;
          "auto" === m
            ? ((a = x.transitions.getAutoHeightDuration(e.clientHeight)),
              (b.current = a))
            : (a = n),
            (e.style.transition = [
              x.transitions.create("opacity", { duration: a, delay: r }),
              x.transitions.create("transform", {
                duration: ed ? a : 0.666 * a,
                delay: r,
                easing: o,
              }),
            ].join(",")),
            s && s(e, t);
        }),
        C = k(u),
        R = k(f),
        T = k((e) => {
          const {
            duration: t,
            delay: n,
            easing: r,
          } = Xc({ style: h, timeout: m, easing: i }, { mode: "exit" });
          let o;
          "auto" === m
            ? ((o = x.transitions.getAutoHeightDuration(e.clientHeight)),
              (b.current = o))
            : (o = t),
            (e.style.transition = [
              x.transitions.create("opacity", { duration: o, delay: n }),
              x.transitions.create("transform", {
                duration: ed ? o : 0.666 * o,
                delay: ed ? n : n || 0.333 * o,
                easing: r,
              }),
            ].join(",")),
            (e.style.opacity = 0),
            (e.style.transform = _c(0.75)),
            d && d(e);
        }),
        j = k(p);
      return (0, ol.jsx)(g, {
        appear: r,
        in: l,
        nodeRef: w,
        onEnter: E,
        onEntered: C,
        onEntering: A,
        onExit: T,
        onExited: j,
        onExiting: R,
        addEndListener: (e) => {
          "auto" === m && v.start(b.current || 0, e), n && n(w.current, e);
        },
        timeout: "auto" === m ? null : m,
        ...y,
        children: (e, t) =>
          a.cloneElement(o, {
            style: {
              opacity: 0,
              transform: _c(0.75),
              visibility: "exited" !== e || l ? void 0 : "hidden",
              ...$c[e],
              ...h,
              ...o.props.style,
            },
            ref: S,
            ...t,
          }),
      });
    });
  td && (td.muiSupportAuto = !0);
  const nd = td,
    rd = [
      "input",
      "select",
      "textarea",
      "a[href]",
      "button",
      "[tabindex]",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable="false"])',
    ].join(",");
  function od(e) {
    const t = [],
      n = [];
    return (
      Array.from(e.querySelectorAll(rd)).forEach((e, r) => {
        const o = (function (e) {
          const t = parseInt(e.getAttribute("tabindex") || "", 10);
          return Number.isNaN(t)
            ? "true" === e.contentEditable ||
              (("AUDIO" === e.nodeName ||
                "VIDEO" === e.nodeName ||
                "DETAILS" === e.nodeName) &&
                null === e.getAttribute("tabindex"))
              ? 0
              : e.tabIndex
            : t;
        })(e);
        -1 !== o &&
          (function (e) {
            return !(
              e.disabled ||
              ("INPUT" === e.tagName && "hidden" === e.type) ||
              (function (e) {
                if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                if (!e.name) return !1;
                const t = (t) =>
                  e.ownerDocument.querySelector(`input[type="radio"]${t}`);
                let n = t(`[name="${e.name}"]:checked`);
                return n || (n = t(`[name="${e.name}"]`)), n !== e;
              })(e)
            );
          })(e) &&
          (0 === o
            ? t.push(e)
            : n.push({ documentOrder: r, tabIndex: o, node: e }));
      }),
      n
        .sort((e, t) =>
          e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex
        )
        .map((e) => e.node)
        .concat(t)
    );
  }
  function ad() {
    return !0;
  }
  const id = function (e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: r = !1,
        disableRestoreFocus: o = !1,
        getTabbable: i = od,
        isEnabled: l = ad,
        open: s,
      } = e,
      u = a.useRef(!1),
      c = a.useRef(null),
      d = a.useRef(null),
      p = a.useRef(null),
      f = a.useRef(null),
      h = a.useRef(!1),
      m = a.useRef(null),
      g = Zs(uc(t), m),
      y = a.useRef(null);
    a.useEffect(() => {
      s && m.current && (h.current = !n);
    }, [n, s]),
      a.useEffect(() => {
        if (!s || !m.current) return;
        const e = Js(m.current);
        return (
          m.current.contains(e.activeElement) ||
            (m.current.hasAttribute("tabIndex") ||
              m.current.setAttribute("tabIndex", "-1"),
            h.current && m.current.focus()),
          () => {
            o ||
              (p.current &&
                p.current.focus &&
                ((u.current = !0), p.current.focus()),
              (p.current = null));
          }
        );
      }, [s]),
      a.useEffect(() => {
        if (!s || !m.current) return;
        const e = Js(m.current),
          t = (t) => {
            (y.current = t),
              !r &&
                l() &&
                "Tab" === t.key &&
                e.activeElement === m.current &&
                t.shiftKey &&
                ((u.current = !0), d.current && d.current.focus());
          },
          n = () => {
            const t = m.current;
            if (null === t) return;
            if (!e.hasFocus() || !l() || u.current)
              return void (u.current = !1);
            if (t.contains(e.activeElement)) return;
            if (
              r &&
              e.activeElement !== c.current &&
              e.activeElement !== d.current
            )
              return;
            if (e.activeElement !== f.current) f.current = null;
            else if (null !== f.current) return;
            if (!h.current) return;
            let n = [];
            if (
              ((e.activeElement !== c.current &&
                e.activeElement !== d.current) ||
                (n = i(m.current)),
              n.length > 0)
            ) {
              const e = Boolean(
                  y.current?.shiftKey && "Tab" === y.current?.key
                ),
                t = n[0],
                r = n[n.length - 1];
              "string" !== typeof t &&
                "string" !== typeof r &&
                (e ? r.focus() : t.focus());
            } else t.focus();
          };
        e.addEventListener("focusin", n), e.addEventListener("keydown", t, !0);
        const o = setInterval(() => {
          e.activeElement && "BODY" === e.activeElement.tagName && n();
        }, 50);
        return () => {
          clearInterval(o),
            e.removeEventListener("focusin", n),
            e.removeEventListener("keydown", t, !0);
        };
      }, [n, r, o, l, s, i]);
    const v = (e) => {
      null === p.current && (p.current = e.relatedTarget), (h.current = !0);
    };
    return (0, ol.jsxs)(a.Fragment, {
      children: [
        (0, ol.jsx)("div", {
          tabIndex: s ? 0 : -1,
          onFocus: v,
          ref: c,
          "data-testid": "sentinelStart",
        }),
        a.cloneElement(t, {
          ref: g,
          onFocus: (e) => {
            null === p.current && (p.current = e.relatedTarget),
              (h.current = !0),
              (f.current = e.target);
            const n = t.props.onFocus;
            n && n(e);
          },
        }),
        (0, ol.jsx)("div", {
          tabIndex: s ? 0 : -1,
          onFocus: v,
          ref: d,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  };
  const ld = a.forwardRef(function (e, t) {
    const { children: n, container: r, disablePortal: o = !1 } = e,
      [i, l] = a.useState(null),
      u = Zs(a.isValidElement(n) ? uc(n) : null, t);
    if (
      (_s(() => {
        o ||
          l(
            (function (e) {
              return "function" === typeof e ? e() : e;
            })(r) || document.body
          );
      }, [r, o]),
      _s(() => {
        if (i && !o)
          return (
            Ys(t, i),
            () => {
              Ys(t, null);
            }
          );
      }, [t, i, o]),
      o)
    ) {
      if (a.isValidElement(n)) {
        const e = { ref: u };
        return a.cloneElement(n, e);
      }
      return (0, ol.jsx)(a.Fragment, { children: n });
    }
    return (0, ol.jsx)(a.Fragment, { children: i ? s.createPortal(n, i) : i });
  });
  function sd(e, t) {
    const {
        className: n,
        elementType: r,
        ownerState: o,
        externalForwardedProps: a,
        getSlotOwnerState: i,
        internalForwardedProps: l,
        ...s
      } = t,
      {
        component: u,
        slots: c = { [e]: void 0 },
        slotProps: d = { [e]: void 0 },
        ...p
      } = a,
      f = c[e] || r,
      h = yc(d[e], o),
      {
        props: { component: m, ...g },
        internalRef: y,
      } = gc({
        className: n,
        ...s,
        externalForwardedProps: "root" === e ? p : void 0,
        externalSlotProps: h,
      }),
      v = Zs(y, h?.ref, t.ref),
      b = i ? i(g) : {},
      x = { ...o, ...b },
      w = "root" === e ? m || u : m,
      S = fc(
        f,
        {
          ...("root" === e && !u && !c[e] && l),
          ...("root" !== e && !c[e] && l),
          ...g,
          ...(w && { as: w }),
          ref: v,
        },
        x
      );
    return (
      Object.keys(b).forEach((e) => {
        delete S[e];
      }),
      [f, S]
    );
  }
  const ud = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    cd = a.forwardRef(function (e, t) {
      const n = dl(),
        r = {
          enter: n.transitions.duration.enteringScreen,
          exit: n.transitions.duration.leavingScreen,
        },
        {
          addEndListener: o,
          appear: i = !0,
          children: l,
          easing: s,
          in: u,
          onEnter: c,
          onEntered: d,
          onEntering: p,
          onExit: f,
          onExited: h,
          onExiting: m,
          style: g,
          timeout: y = r,
          TransitionComponent: v = Zc,
          ...b
        } = e,
        x = a.useRef(null),
        w = su(x, uc(l), t),
        S = (e) => (t) => {
          if (e) {
            const n = x.current;
            void 0 === t ? e(n) : e(n, t);
          }
        },
        k = S(p),
        A = S((e, t) => {
          Jc(e);
          const r = Xc({ style: g, timeout: y, easing: s }, { mode: "enter" });
          (e.style.webkitTransition = n.transitions.create("opacity", r)),
            (e.style.transition = n.transitions.create("opacity", r)),
            c && c(e, t);
        }),
        E = S(d),
        C = S(m),
        R = S((e) => {
          const t = Xc({ style: g, timeout: y, easing: s }, { mode: "exit" });
          (e.style.webkitTransition = n.transitions.create("opacity", t)),
            (e.style.transition = n.transitions.create("opacity", t)),
            f && f(e);
        }),
        T = S(h);
      return (0, ol.jsx)(v, {
        appear: i,
        in: u,
        nodeRef: x,
        onEnter: A,
        onEntered: E,
        onEntering: k,
        onExit: R,
        onExited: T,
        onExiting: C,
        addEndListener: (e) => {
          o && o(x.current, e);
        },
        timeout: y,
        ...b,
        children: (e, t) =>
          a.cloneElement(l, {
            style: {
              opacity: 0,
              visibility: "exited" !== e || u ? void 0 : "hidden",
              ...ud[e],
              ...g,
              ...l.props.style,
            },
            ref: w,
            ...t,
          }),
      });
    }),
    dd = cd;
  function pd(e) {
    return yl("MuiBackdrop", e);
  }
  vl("MuiBackdrop", ["root", "invisible"]);
  const fd = nl("div", {
      name: "MuiBackdrop",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.invisible && t.invisible];
      },
    })({
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      WebkitTapHighlightColor: "transparent",
      variants: [
        { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
      ],
    }),
    hd = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiBackdrop" }),
        {
          children: r,
          className: o,
          component: a = "div",
          invisible: i = !1,
          open: l,
          components: s = {},
          componentsProps: u = {},
          slotProps: c = {},
          slots: d = {},
          TransitionComponent: p,
          transitionDuration: f,
          ...h
        } = n,
        m = { ...n, component: a, invisible: i },
        g = ((e) => {
          const { classes: t, invisible: n } = e;
          return Un({ root: ["root", n && "invisible"] }, pd, t);
        })(m),
        y = {
          slots: { transition: p, root: s.Root, ...d },
          slotProps: { ...u, ...c },
        },
        [v, b] = sd("root", {
          elementType: fd,
          externalForwardedProps: y,
          className: Dn(g.root, o),
          ownerState: m,
        }),
        [x, w] = sd("transition", {
          elementType: dd,
          externalForwardedProps: y,
          ownerState: m,
        }),
        S = ((e) => {
          const { ownerState: t, ...n } = e;
          return n;
        })(w);
      return (0,
      ol.jsx)(x, { in: l, timeout: f, ...h, ...S, children: (0, ol.jsx)(v, { "aria-hidden": !0, ...b, classes: g, ref: t, children: r }) });
    });
  const md = function (e) {
    const t = a.useRef(e);
    return (
      _s(() => {
        t.current = e;
      }),
      a.useRef(function () {
        return (0, t.current)(...arguments);
      }).current
    );
  };
  function gd() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.reduce(
      (e, t) =>
        null == t
          ? e
          : function () {
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              e.apply(this, r), t.apply(this, r);
            },
      () => {}
    );
  }
  function yd(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function vd(e) {
    return parseInt(Xs(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function bd(e, t, n, r, o) {
    const a = [t, n, ...r];
    [].forEach.call(e.children, (e) => {
      const t = !a.includes(e),
        n = !(function (e) {
          const t = [
              "TEMPLATE",
              "SCRIPT",
              "STYLE",
              "LINK",
              "MAP",
              "META",
              "NOSCRIPT",
              "PICTURE",
              "COL",
              "COLGROUP",
              "PARAM",
              "SLOT",
              "SOURCE",
              "TRACK",
            ].includes(e.tagName),
            n = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
          return t || n;
        })(e);
      t && n && yd(e, o);
    });
  }
  function xd(e, t) {
    let n = -1;
    return e.some((e, r) => !!t(e) && ((n = r), !0)), n;
  }
  function wd(e, t) {
    const n = [],
      r = e.container;
    if (!t.disableScrollLock) {
      if (
        (function (e) {
          const t = Js(e);
          return t.body === e
            ? Xs(e).innerWidth > t.documentElement.clientWidth
            : e.scrollHeight > e.clientHeight;
        })(r)
      ) {
        const e = kc(Xs(r));
        n.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r,
        }),
          (r.style.paddingRight = `${vd(r) + e}px`);
        const t = Js(r).querySelectorAll(".mui-fixed");
        [].forEach.call(t, (t) => {
          n.push({
            value: t.style.paddingRight,
            property: "padding-right",
            el: t,
          }),
            (t.style.paddingRight = `${vd(t) + e}px`);
        });
      }
      let e;
      if (r.parentNode instanceof DocumentFragment) e = Js(r).body;
      else {
        const t = r.parentElement,
          n = Xs(r);
        e =
          "HTML" === t?.nodeName && "scroll" === n.getComputedStyle(t).overflowY
            ? t
            : r;
      }
      n.push(
        { value: e.style.overflow, property: "overflow", el: e },
        { value: e.style.overflowX, property: "overflow-x", el: e },
        { value: e.style.overflowY, property: "overflow-y", el: e }
      ),
        (e.style.overflow = "hidden");
    }
    return () => {
      n.forEach((e) => {
        let { value: t, el: n, property: r } = e;
        t ? n.style.setProperty(r, t) : n.style.removeProperty(r);
      });
    };
  }
  const Sd = new (class {
    constructor() {
      (this.modals = []), (this.containers = []);
    }
    add(e, t) {
      let n = this.modals.indexOf(e);
      if (-1 !== n) return n;
      (n = this.modals.length),
        this.modals.push(e),
        e.modalRef && yd(e.modalRef, !1);
      const r = (function (e) {
        const t = [];
        return (
          [].forEach.call(e.children, (e) => {
            "true" === e.getAttribute("aria-hidden") && t.push(e);
          }),
          t
        );
      })(t);
      bd(t, e.mount, e.modalRef, r, !0);
      const o = xd(this.containers, (e) => e.container === t);
      return -1 !== o
        ? (this.containers[o].modals.push(e), n)
        : (this.containers.push({
            modals: [e],
            container: t,
            restore: null,
            hiddenSiblings: r,
          }),
          n);
    }
    mount(e, t) {
      const n = xd(this.containers, (t) => t.modals.includes(e)),
        r = this.containers[n];
      r.restore || (r.restore = wd(r, t));
    }
    remove(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const n = this.modals.indexOf(e);
      if (-1 === n) return n;
      const r = xd(this.containers, (t) => t.modals.includes(e)),
        o = this.containers[r];
      if (
        (o.modals.splice(o.modals.indexOf(e), 1),
        this.modals.splice(n, 1),
        0 === o.modals.length)
      )
        o.restore && o.restore(),
          e.modalRef && yd(e.modalRef, t),
          bd(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1),
          this.containers.splice(r, 1);
      else {
        const e = o.modals[o.modals.length - 1];
        e.modalRef && yd(e.modalRef, !1);
      }
      return n;
    }
    isTopModal(e) {
      return (
        this.modals.length > 0 && this.modals[this.modals.length - 1] === e
      );
    }
  })();
  const kd = function (e) {
    const {
        container: t,
        disableEscapeKeyDown: n = !1,
        disableScrollLock: r = !1,
        closeAfterTransition: o = !1,
        onTransitionEnter: i,
        onTransitionExited: l,
        children: s,
        onClose: u,
        open: c,
        rootRef: d,
      } = e,
      p = a.useRef({}),
      f = a.useRef(null),
      h = a.useRef(null),
      m = Zs(h, d),
      [g, y] = a.useState(!c),
      v = (function (e) {
        return !!e && e.props.hasOwnProperty("in");
      })(s);
    let b = !0;
    ("false" !== e["aria-hidden"] && !1 !== e["aria-hidden"]) || (b = !1);
    const x = () => (
        (p.current.modalRef = h.current),
        (p.current.mount = f.current),
        p.current
      ),
      w = () => {
        Sd.mount(x(), { disableScrollLock: r }),
          h.current && (h.current.scrollTop = 0);
      },
      S = md(() => {
        const e =
          (function (e) {
            return "function" === typeof e ? e() : e;
          })(t) || Js(f.current).body;
        Sd.add(x(), e), h.current && w();
      }),
      k = () => Sd.isTopModal(x()),
      A = md((e) => {
        (f.current = e), e && (c && k() ? w() : h.current && yd(h.current, b));
      }),
      E = a.useCallback(() => {
        Sd.remove(x(), b);
      }, [b]);
    a.useEffect(
      () => () => {
        E();
      },
      [E]
    ),
      a.useEffect(() => {
        c ? S() : (v && o) || E();
      }, [c, E, v, o, S]);
    const C = (e) => (t) => {
        e.onKeyDown?.(t),
          "Escape" === t.key &&
            229 !== t.which &&
            k() &&
            (n || (t.stopPropagation(), u && u(t, "escapeKeyDown")));
      },
      R = (e) => (t) => {
        e.onClick?.(t),
          t.target === t.currentTarget && u && u(t, "backdropClick");
      };
    return {
      getRootProps: function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = hc(e);
        delete n.onTransitionEnter, delete n.onTransitionExited;
        const r = { ...n, ...t };
        return { role: "presentation", ...r, onKeyDown: C(r), ref: m };
      },
      getBackdropProps: function () {
        const e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { "aria-hidden": !0, ...e, onClick: R(e), open: c };
      },
      getTransitionProps: () => ({
        onEnter: gd(() => {
          y(!1), i && i();
        }, s?.props.onEnter),
        onExited: gd(() => {
          y(!0), l && l(), o && E();
        }, s?.props.onExited),
      }),
      rootRef: m,
      portalRef: A,
      isTopModal: k,
      exited: g,
      hasTransition: v,
    };
  };
  function Ad(e) {
    return yl("MuiModal", e);
  }
  vl("MuiModal", ["root", "hidden", "backdrop"]);
  const Ed = nl("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, !n.open && n.exited && t.hidden];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          position: "fixed",
          zIndex: (t.vars || t).zIndex.modal,
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.open && t.exited;
              },
              style: { visibility: "hidden" },
            },
          ],
        };
      })
    ),
    Cd = nl(hd, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    Rd = a.forwardRef(function (e, t) {
      const n = ll({ name: "MuiModal", props: e }),
        {
          BackdropComponent: r = Cd,
          BackdropProps: o,
          classes: i,
          className: l,
          closeAfterTransition: s = !1,
          children: u,
          container: c,
          component: d,
          components: p = {},
          componentsProps: f = {},
          disableAutoFocus: h = !1,
          disableEnforceFocus: m = !1,
          disableEscapeKeyDown: g = !1,
          disablePortal: y = !1,
          disableRestoreFocus: v = !1,
          disableScrollLock: b = !1,
          hideBackdrop: x = !1,
          keepMounted: w = !1,
          onBackdropClick: S,
          onClose: k,
          onTransitionEnter: A,
          onTransitionExited: E,
          open: C,
          slotProps: R = {},
          slots: T = {},
          theme: j,
          ...N
        } = n,
        P = {
          ...n,
          closeAfterTransition: s,
          disableAutoFocus: h,
          disableEnforceFocus: m,
          disableEscapeKeyDown: g,
          disablePortal: y,
          disableRestoreFocus: v,
          disableScrollLock: b,
          hideBackdrop: x,
          keepMounted: w,
        },
        {
          getRootProps: O,
          getBackdropProps: M,
          getTransitionProps: B,
          portalRef: I,
          isTopModal: L,
          exited: F,
          hasTransition: z,
        } = kd({ ...P, rootRef: t }),
        D = { ...P, exited: F },
        U = ((e) => {
          const { open: t, exited: n, classes: r } = e;
          return Un(
            { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
            Ad,
            r
          );
        })(D),
        V = {};
      if ((void 0 === u.props.tabIndex && (V.tabIndex = "-1"), z)) {
        const { onEnter: e, onExited: t } = B();
        (V.onEnter = e), (V.onExited = t);
      }
      const W = {
          ...N,
          slots: { root: p.Root, backdrop: p.Backdrop, ...T },
          slotProps: { ...f, ...R },
        },
        [H, Q] = sd("root", {
          elementType: Ed,
          externalForwardedProps: W,
          getSlotProps: O,
          additionalProps: { ref: t, as: d },
          ownerState: D,
          className: Dn(l, U?.root, !D.open && D.exited && U?.hidden),
        }),
        [q, G] = sd("backdrop", {
          elementType: r,
          externalForwardedProps: W,
          additionalProps: o,
          getSlotProps: (e) =>
            M({
              ...e,
              onClick: (t) => {
                S && S(t), e?.onClick && e.onClick(t);
              },
            }),
          className: Dn(o?.className, U?.backdrop),
          ownerState: D,
        }),
        K = su(o?.ref, G.ref);
      return w || C || (z && !F)
        ? (0, ol.jsx)(ld, {
            ref: I,
            container: c,
            disablePortal: y,
            children: (0, ol.jsxs)(H, {
              ...Q,
              children: [
                !x && r ? (0, ol.jsx)(q, { ...G, ref: K }) : null,
                (0, ol.jsx)(id, {
                  disableEnforceFocus: m,
                  disableAutoFocus: h,
                  disableRestoreFocus: v,
                  isEnabled: L,
                  open: C,
                  children: a.cloneElement(u, V),
                }),
              ],
            }),
          })
        : null;
    }),
    Td = Rd;
  function jd(e) {
    return yl("MuiPopover", e);
  }
  vl("MuiPopover", ["root", "paper"]);
  function Nd(e, t) {
    let n = 0;
    return (
      "number" === typeof t
        ? (n = t)
        : "center" === t
        ? (n = e.height / 2)
        : "bottom" === t && (n = e.height),
      n
    );
  }
  function Pd(e, t) {
    let n = 0;
    return (
      "number" === typeof t
        ? (n = t)
        : "center" === t
        ? (n = e.width / 2)
        : "right" === t && (n = e.width),
      n
    );
  }
  function Od(e) {
    return [e.horizontal, e.vertical]
      .map((e) => ("number" === typeof e ? `${e}px` : e))
      .join(" ");
  }
  function Md(e) {
    return "function" === typeof e ? e() : e;
  }
  const Bd = nl(Td, {
      name: "MuiPopover",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    Id = nl(wl, {
      name: "MuiPopover",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({
      position: "absolute",
      overflowY: "auto",
      overflowX: "hidden",
      minWidth: 16,
      minHeight: 16,
      maxWidth: "calc(100% - 32px)",
      maxHeight: "calc(100% - 32px)",
      outline: 0,
    }),
    Ld = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiPopover" }),
        {
          action: r,
          anchorEl: o,
          anchorOrigin: i = { vertical: "top", horizontal: "left" },
          anchorPosition: l,
          anchorReference: s = "anchorEl",
          children: u,
          className: c,
          container: d,
          elevation: p = 8,
          marginThreshold: f = 16,
          open: h,
          PaperProps: m = {},
          slots: g = {},
          slotProps: y = {},
          transformOrigin: v = { vertical: "top", horizontal: "left" },
          TransitionComponent: b = nd,
          transitionDuration: x = "auto",
          TransitionProps: { onEntering: w, ...S } = {},
          disableScrollLock: k = !1,
          ...A
        } = n,
        E = y?.paper ?? m,
        C = a.useRef(),
        R = {
          ...n,
          anchorOrigin: i,
          anchorReference: s,
          elevation: p,
          marginThreshold: f,
          externalPaperSlotProps: E,
          transformOrigin: v,
          TransitionComponent: b,
          transitionDuration: x,
          TransitionProps: S,
        },
        T = ((e) => {
          const { classes: t } = e;
          return Un({ root: ["root"], paper: ["paper"] }, jd, t);
        })(R),
        j = a.useCallback(() => {
          if ("anchorPosition" === s) return l;
          const e = Md(o),
            t = (
              e && 1 === e.nodeType ? e : cc(C.current).body
            ).getBoundingClientRect();
          return {
            top: t.top + Nd(t, i.vertical),
            left: t.left + Pd(t, i.horizontal),
          };
        }, [o, i.horizontal, i.vertical, l, s]),
        N = a.useCallback(
          (e) => ({
            vertical: Nd(e, v.vertical),
            horizontal: Pd(e, v.horizontal),
          }),
          [v.horizontal, v.vertical]
        ),
        P = a.useCallback(
          (e) => {
            const t = { width: e.offsetWidth, height: e.offsetHeight },
              n = N(t);
            if ("none" === s)
              return { top: null, left: null, transformOrigin: Od(n) };
            const r = j();
            let a = r.top - n.vertical,
              i = r.left - n.horizontal;
            const l = a + t.height,
              u = i + t.width,
              c = Ec(Md(o)),
              d = c.innerHeight - f,
              p = c.innerWidth - f;
            if (null !== f && a < f) {
              const e = a - f;
              (a -= e), (n.vertical += e);
            } else if (null !== f && l > d) {
              const e = l - d;
              (a -= e), (n.vertical += e);
            }
            if (null !== f && i < f) {
              const e = i - f;
              (i -= e), (n.horizontal += e);
            } else if (u > p) {
              const e = u - p;
              (i -= e), (n.horizontal += e);
            }
            return {
              top: `${Math.round(a)}px`,
              left: `${Math.round(i)}px`,
              transformOrigin: Od(n),
            };
          },
          [o, s, j, N, f]
        ),
        [O, M] = a.useState(h),
        B = a.useCallback(() => {
          const e = C.current;
          if (!e) return;
          const t = P(e);
          null !== t.top && e.style.setProperty("top", t.top),
            null !== t.left && (e.style.left = t.left),
            (e.style.transformOrigin = t.transformOrigin),
            M(!0);
        }, [P]);
      a.useEffect(
        () => (
          k && window.addEventListener("scroll", B),
          () => window.removeEventListener("scroll", B)
        ),
        [o, k, B]
      );
      a.useEffect(() => {
        h && B();
      }),
        a.useImperativeHandle(
          r,
          () =>
            h
              ? {
                  updatePosition: () => {
                    B();
                  },
                }
              : null,
          [h, B]
        ),
        a.useEffect(() => {
          if (!h) return;
          const e = Pc(() => {
              B();
            }),
            t = Ec(o);
          return (
            t.addEventListener("resize", e),
            () => {
              e.clear(), t.removeEventListener("resize", e);
            }
          );
        }, [o, h, B]);
      let I = x;
      "auto" !== x || b.muiSupportAuto || (I = void 0);
      const L = d || (o ? cc(Md(o)).body : void 0),
        F = { slots: g, slotProps: { ...y, paper: E } },
        [z, D] = sd("paper", {
          elementType: Id,
          externalForwardedProps: F,
          additionalProps: {
            elevation: p,
            className: Dn(T.paper, E?.className),
            style: O ? E.style : { ...E.style, opacity: 0 },
          },
          ownerState: R,
        }),
        [U, { slotProps: V, ...W }] = sd("root", {
          elementType: Bd,
          externalForwardedProps: F,
          additionalProps: {
            slotProps: { backdrop: { invisible: !0 } },
            container: L,
            open: h,
          },
          ownerState: R,
          className: Dn(T.root, c),
        }),
        H = su(C, D.ref);
      return (0, ol.jsx)(U, {
        ...W,
        ...(!ou(U) && { slotProps: V, disableScrollLock: k }),
        ...A,
        ref: t,
        children: (0, ol.jsx)(b, {
          appear: !0,
          in: h,
          onEntering: (e, t) => {
            w && w(e, t), B();
          },
          onExited: () => {
            M(!1);
          },
          timeout: I,
          ...S,
          children: (0, ol.jsx)(z, { ...D, ref: H, children: u }),
        }),
      });
    });
  function Fd(e) {
    return yl("MuiMenu", e);
  }
  vl("MuiMenu", ["root", "paper", "list"]);
  const zd = { vertical: "top", horizontal: "right" },
    Dd = { vertical: "top", horizontal: "left" },
    Ud = nl(Ld, {
      shouldForwardProp: (e) => tl(e) || "classes" === e,
      name: "MuiMenu",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    Vd = nl(Id, {
      name: "MuiMenu",
      slot: "Paper",
      overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    Wd = nl(Nc, {
      name: "MuiMenu",
      slot: "List",
      overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    Hd = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiMenu" }),
        {
          autoFocus: r = !0,
          children: o,
          className: i,
          disableAutoFocusItem: l = !1,
          MenuListProps: s = {},
          onClose: u,
          open: c,
          PaperProps: d = {},
          PopoverClasses: p,
          transitionDuration: f = "auto",
          TransitionProps: { onEntering: h, ...m } = {},
          variant: g = "selectedMenu",
          slots: y = {},
          slotProps: v = {},
          ...b
        } = n,
        x = a.useContext(dc) ?? !1,
        w = {
          ...n,
          autoFocus: r,
          disableAutoFocusItem: l,
          MenuListProps: s,
          onEntering: h,
          PaperProps: d,
          transitionDuration: f,
          TransitionProps: m,
          variant: g,
        },
        S = ((e) => {
          const { classes: t } = e;
          return Un(
            { root: ["root"], paper: ["paper"], list: ["list"] },
            Fd,
            t
          );
        })(w),
        k = r && !l && c,
        A = a.useRef(null);
      let E = -1;
      a.Children.map(o, (e, t) => {
        a.isValidElement(e) &&
          (e.props.disabled ||
            ((("selectedMenu" === g && e.props.selected) || -1 === E) &&
              (E = t)));
      });
      const C = y.paper ?? Vd,
        R = v.paper ?? d,
        T = vc({
          elementType: y.root,
          externalSlotProps: v.root,
          ownerState: w,
          className: [S.root, i],
        }),
        j = vc({
          elementType: C,
          externalSlotProps: R,
          ownerState: w,
          className: S.paper,
        });
      return (0, ol.jsx)(Ud, {
        onClose: u,
        anchorOrigin: { vertical: "bottom", horizontal: x ? "right" : "left" },
        transformOrigin: x ? zd : Dd,
        slots: { paper: C, root: y.root },
        slotProps: { root: T, paper: j },
        open: c,
        ref: t,
        transitionDuration: f,
        TransitionProps: {
          onEntering: (e, t) => {
            A.current &&
              A.current.adjustStyleForScrollbar(e, {
                direction: x ? "rtl" : "ltr",
              }),
              h && h(e, t);
          },
          ...m,
        },
        ownerState: w,
        ...b,
        classes: p,
        children: (0, ol.jsx)(Wd, {
          onKeyDown: (e) => {
            "Tab" === e.key && (e.preventDefault(), u && u(e, "tabKeyDown"));
          },
          actions: A,
          autoFocus: r && (-1 === E || l),
          autoFocusItem: k,
          variant: g,
          ...s,
          className: Dn(S.list, s.className),
          children: o,
        }),
      });
    });
  function Qd(e) {
    return yl("MuiNativeSelect", e);
  }
  const qd = vl("MuiNativeSelect", [
      "root",
      "select",
      "multiple",
      "filled",
      "outlined",
      "standard",
      "disabled",
      "icon",
      "iconOpen",
      "iconFilled",
      "iconOutlined",
      "iconStandard",
      "nativeInput",
      "error",
    ]),
    Gd = nl("select")((e) => {
      let { theme: t } = e;
      return {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": { borderRadius: 0 },
        [`&.${qd.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        variants: [
          {
            props: (e) => {
              let { ownerState: t } = e;
              return "filled" !== t.variant && "outlined" !== t.variant;
            },
            style: { "&&&": { paddingRight: 24, minWidth: 16 } },
          },
          {
            props: { variant: "filled" },
            style: { "&&&": { paddingRight: 32 } },
          },
          {
            props: { variant: "outlined" },
            style: {
              borderRadius: (t.vars || t).shape.borderRadius,
              "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
              "&&&": { paddingRight: 32 },
            },
          },
        ],
      };
    }),
    Kd = nl(Gd, {
      name: "MuiNativeSelect",
      slot: "Select",
      shouldForwardProp: tl,
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.select,
          t[n.variant],
          n.error && t.error,
          { [`&.${qd.multiple}`]: t.multiple },
        ];
      },
    })({}),
    Yd = nl("svg")((e) => {
      let { theme: t } = e;
      return {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${qd.disabled}`]: { color: (t.vars || t).palette.action.disabled },
        variants: [
          {
            props: (e) => {
              let { ownerState: t } = e;
              return t.open;
            },
            style: { transform: "rotate(180deg)" },
          },
          { props: { variant: "filled" }, style: { right: 7 } },
          { props: { variant: "outlined" }, style: { right: 7 } },
        ],
      };
    }),
    Zd = nl(Yd, {
      name: "MuiNativeSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${ql(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })({}),
    Jd = a.forwardRef(function (e, t) {
      const {
          className: n,
          disabled: r,
          error: o,
          IconComponent: i,
          inputRef: l,
          variant: s = "standard",
          ...u
        } = e,
        c = { ...e, disabled: r, variant: s, error: o },
        d = ((e) => {
          const {
            classes: t,
            variant: n,
            disabled: r,
            multiple: o,
            open: a,
            error: i,
          } = e;
          return Un(
            {
              select: [
                "select",
                n,
                r && "disabled",
                o && "multiple",
                i && "error",
              ],
              icon: ["icon", `icon${ql(n)}`, a && "iconOpen", r && "disabled"],
            },
            Qd,
            t
          );
        })(c);
      return (0,
      ol.jsxs)(a.Fragment, { children: [(0, ol.jsx)(Kd, { ownerState: c, className: Dn(d.select, n), disabled: r, ref: l || t, ...u }), e.multiple ? null : (0, ol.jsx)(Zd, { as: i, ownerState: c, className: d.icon })] });
    });
  const Xd = function (e) {
    let { controlled: t, default: n, name: r, state: o = "value" } = e;
    const { current: i } = a.useRef(void 0 !== t),
      [l, s] = a.useState(n);
    return [
      i ? t : l,
      a.useCallback((e) => {
        i || s(e);
      }, []),
    ];
  };
  function _d(e) {
    return yl("MuiSelect", e);
  }
  const $d = vl("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]);
  var ep;
  const tp = nl(Gd, {
      name: "MuiSelect",
      slot: "Select",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`&.${$d.select}`]: t.select },
          { [`&.${$d.select}`]: t[n.variant] },
          { [`&.${$d.error}`]: t.error },
          { [`&.${$d.multiple}`]: t.multiple },
        ];
      },
    })({
      [`&.${$d.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }),
    np = nl(Yd, {
      name: "MuiSelect",
      slot: "Icon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.icon,
          n.variant && t[`icon${ql(n.variant)}`],
          n.open && t.iconOpen,
        ];
      },
    })({}),
    rp = nl("input", {
      shouldForwardProp: (e) => el(e) && "classes" !== e,
      name: "MuiSelect",
      slot: "NativeInput",
      overridesResolver: (e, t) => t.nativeInput,
    })({
      bottom: 0,
      left: 0,
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: "100%",
      boxSizing: "border-box",
    });
  function op(e, t) {
    return "object" === typeof t && null !== t
      ? e === t
      : String(e) === String(t);
  }
  function ap(e) {
    return null == e || ("string" === typeof e && !e.trim());
  }
  const ip = a.forwardRef(function (e, t) {
      const {
          "aria-describedby": n,
          "aria-label": r,
          autoFocus: o,
          autoWidth: i,
          children: l,
          className: s,
          defaultOpen: u,
          defaultValue: c,
          disabled: d,
          displayEmpty: p,
          error: f = !1,
          IconComponent: h,
          inputRef: m,
          labelId: g,
          MenuProps: y = {},
          multiple: v,
          name: b,
          onBlur: x,
          onChange: w,
          onClose: S,
          onFocus: k,
          onOpen: A,
          open: E,
          readOnly: C,
          renderValue: R,
          SelectDisplayProps: T = {},
          tabIndex: j,
          type: N,
          value: P,
          variant: O = "standard",
          ...M
        } = e,
        [B, I] = Xd({ controlled: P, default: c, name: "Select" }),
        [L, F] = Xd({ controlled: E, default: u, name: "Select" }),
        z = a.useRef(null),
        D = a.useRef(null),
        [U, V] = a.useState(null),
        { current: W } = a.useRef(null != E),
        [H, Q] = a.useState(),
        q = su(t, m),
        G = a.useCallback((e) => {
          (D.current = e), e && V(e);
        }, []),
        K = U?.parentNode;
      a.useImperativeHandle(
        q,
        () => ({
          focus: () => {
            D.current.focus();
          },
          node: z.current,
          value: B,
        }),
        [B]
      ),
        a.useEffect(() => {
          u && L && U && !W && (Q(i ? null : K.clientWidth), D.current.focus());
        }, [U, i]),
        a.useEffect(() => {
          o && D.current.focus();
        }, [o]),
        a.useEffect(() => {
          if (!g) return;
          const e = cc(D.current).getElementById(g);
          if (e) {
            const t = () => {
              getSelection().isCollapsed && D.current.focus();
            };
            return (
              e.addEventListener("click", t),
              () => {
                e.removeEventListener("click", t);
              }
            );
          }
        }, [g]);
      const Y = (e, t) => {
          e ? A && A(t) : S && S(t), W || (Q(i ? null : K.clientWidth), F(e));
        },
        Z = a.Children.toArray(l),
        J = (e) => (t) => {
          let n;
          if (t.currentTarget.hasAttribute("tabindex")) {
            if (v) {
              n = Array.isArray(B) ? B.slice() : [];
              const t = B.indexOf(e.props.value);
              -1 === t ? n.push(e.props.value) : n.splice(t, 1);
            } else n = e.props.value;
            if ((e.props.onClick && e.props.onClick(t), B !== n && (I(n), w))) {
              const r = t.nativeEvent || t,
                o = new r.constructor(r.type, r);
              Object.defineProperty(o, "target", {
                writable: !0,
                value: { value: n, name: b },
              }),
                w(o, e);
            }
            v || Y(!1, t);
          }
        },
        X = null !== U && L;
      let _, $;
      delete M["aria-invalid"];
      const ee = [];
      let te = !1,
        ne = !1;
      (du({ value: B }) || p) && (R ? (_ = R(B)) : (te = !0));
      const re = Z.map((e) => {
        if (!a.isValidElement(e)) return null;
        let t;
        if (v) {
          if (!Array.isArray(B)) throw new Error(Bo(2));
          (t = B.some((t) => op(t, e.props.value))),
            t && te && ee.push(e.props.children);
        } else (t = op(B, e.props.value)), t && te && ($ = e.props.children);
        return (
          t && (ne = !0),
          a.cloneElement(e, {
            "aria-selected": t ? "true" : "false",
            onClick: J(e),
            onKeyUp: (t) => {
              " " === t.key && t.preventDefault(),
                e.props.onKeyUp && e.props.onKeyUp(t);
            },
            role: "option",
            selected: t,
            value: void 0,
            "data-value": e.props.value,
          })
        );
      });
      te &&
        (_ = v
          ? 0 === ee.length
            ? null
            : ee.reduce(
                (e, t, n) => (e.push(t), n < ee.length - 1 && e.push(", "), e),
                []
              )
          : $);
      let oe,
        ae = H;
      !i && W && U && (ae = K.clientWidth),
        (oe = "undefined" !== typeof j ? j : d ? null : 0);
      const ie = T.id || (b ? `mui-component-select-${b}` : void 0),
        le = { ...e, variant: O, value: B, open: X, error: f },
        se = ((e) => {
          const {
            classes: t,
            variant: n,
            disabled: r,
            multiple: o,
            open: a,
            error: i,
          } = e;
          return Un(
            {
              select: [
                "select",
                n,
                r && "disabled",
                o && "multiple",
                i && "error",
              ],
              icon: ["icon", `icon${ql(n)}`, a && "iconOpen", r && "disabled"],
              nativeInput: ["nativeInput"],
            },
            _d,
            t
          );
        })(le),
        ue = { ...y.PaperProps, ...y.slotProps?.paper },
        ce = Ks();
      return (0, ol.jsxs)(a.Fragment, {
        children: [
          (0, ol.jsx)(tp, {
            as: "div",
            ref: G,
            tabIndex: oe,
            role: "combobox",
            "aria-controls": ce,
            "aria-disabled": d ? "true" : void 0,
            "aria-expanded": X ? "true" : "false",
            "aria-haspopup": "listbox",
            "aria-label": r,
            "aria-labelledby": [g, ie].filter(Boolean).join(" ") || void 0,
            "aria-describedby": n,
            onKeyDown: (e) => {
              if (!C) {
                [" ", "ArrowUp", "ArrowDown", "Enter"].includes(e.key) &&
                  (e.preventDefault(), Y(!0, e));
              }
            },
            onMouseDown:
              d || C
                ? null
                : (e) => {
                    0 === e.button &&
                      (e.preventDefault(), D.current.focus(), Y(!0, e));
                  },
            onBlur: (e) => {
              !X &&
                x &&
                (Object.defineProperty(e, "target", {
                  writable: !0,
                  value: { value: B, name: b },
                }),
                x(e));
            },
            onFocus: k,
            ...T,
            ownerState: le,
            className: Dn(T.className, se.select, s),
            id: ie,
            children: ap(_)
              ? ep ||
                (ep = (0, ol.jsx)("span", {
                  className: "notranslate",
                  children: "\u200b",
                }))
              : _,
          }),
          (0, ol.jsx)(rp, {
            "aria-invalid": f,
            value: Array.isArray(B) ? B.join(",") : B,
            name: b,
            ref: z,
            "aria-hidden": !0,
            onChange: (e) => {
              const t = Z.find((t) => t.props.value === e.target.value);
              void 0 !== t && (I(t.props.value), w && w(e, t));
            },
            tabIndex: -1,
            disabled: d,
            className: se.nativeInput,
            autoFocus: o,
            ...M,
            ownerState: le,
          }),
          (0, ol.jsx)(np, { as: h, className: se.icon, ownerState: le }),
          (0, ol.jsx)(Hd, {
            id: `menu-${b || ""}`,
            anchorEl: K,
            open: X,
            onClose: (e) => {
              Y(!1, e);
            },
            anchorOrigin: { vertical: "bottom", horizontal: "center" },
            transformOrigin: { vertical: "top", horizontal: "center" },
            ...y,
            MenuListProps: {
              "aria-labelledby": g,
              role: "listbox",
              "aria-multiselectable": v ? "true" : void 0,
              disableListWrap: !0,
              id: ce,
              ...y.MenuListProps,
            },
            slotProps: {
              ...y.slotProps,
              paper: {
                ...ue,
                style: { minWidth: ae, ...(null != ue ? ue.style : null) },
              },
            },
            children: re,
          }),
        ],
      });
    }),
    lp = ip,
    sp = ls((0, ol.jsx)("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    up = {
      name: "MuiSelect",
      overridesResolver: (e, t) => t.root,
      shouldForwardProp: (e) => tl(e) && "variant" !== e,
      slot: "Root",
    },
    cp = nl(Ru, up)(""),
    dp = nl(Hu, up)(""),
    pp = nl(Mu, up)(""),
    fp = a.forwardRef(function (e, t) {
      const n = ll({ name: "MuiSelect", props: e }),
        {
          autoWidth: r = !1,
          children: o,
          classes: i = {},
          className: l,
          defaultOpen: s = !1,
          displayEmpty: u = !1,
          IconComponent: c = sp,
          id: d,
          input: p,
          inputProps: f,
          label: h,
          labelId: m,
          MenuProps: g,
          multiple: y = !1,
          native: v = !1,
          onClose: b,
          onOpen: x,
          open: w,
          renderValue: S,
          SelectDisplayProps: k,
          variant: A = "outlined",
          ...E
        } = n,
        C = v ? Jd : lp,
        R = au({
          props: n,
          muiFormControl: lu(),
          states: ["variant", "error"],
        }),
        T = R.variant || A,
        j = { ...n, variant: T, classes: i },
        N = ((e) => {
          const { classes: t } = e;
          return t;
        })(j),
        { root: P, ...O } = N,
        M =
          p ||
          {
            standard: (0, ol.jsx)(cp, { ownerState: j }),
            outlined: (0, ol.jsx)(dp, { label: h, ownerState: j }),
            filled: (0, ol.jsx)(pp, { ownerState: j }),
          }[T],
        B = su(t, uc(M));
      return (0,
      ol.jsx)(a.Fragment, { children: a.cloneElement(M, { inputComponent: C, inputProps: { children: o, error: R.error, IconComponent: c, variant: T, type: void 0, multiple: y, ...(v ? { id: d } : { autoWidth: r, defaultOpen: s, displayEmpty: u, labelId: m, MenuProps: g, onClose: b, onOpen: x, open: w, renderValue: S, SelectDisplayProps: { id: d, ...k } }), ...f, classes: f ? Ao(O, f.classes) : O, ...(p ? p.props.inputProps : {}) }, ...(((y && v) || u) && "outlined" === T ? { notched: !0 } : {}), ref: B, className: Dn(M.props.className, l, N.root), ...(!p && { variant: T }), ...E }) });
    });
  fp.muiName = "Select";
  const hp = fp;
  function mp(e) {
    return yl("MuiTextField", e);
  }
  vl("MuiTextField", ["root"]);
  const gp = { standard: Ru, filled: Mu, outlined: Hu },
    yp = nl(rc, {
      name: "MuiTextField",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    vp = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiTextField" }),
        {
          autoComplete: r,
          autoFocus: o = !1,
          children: a,
          className: i,
          color: l = "primary",
          defaultValue: s,
          disabled: u = !1,
          error: c = !1,
          FormHelperTextProps: d,
          fullWidth: p = !1,
          helperText: f,
          id: h,
          InputLabelProps: m,
          inputProps: g,
          InputProps: y,
          inputRef: v,
          label: b,
          maxRows: x,
          minRows: w,
          multiline: S = !1,
          name: k,
          onBlur: A,
          onChange: E,
          onFocus: C,
          placeholder: R,
          required: T = !1,
          rows: j,
          select: N = !1,
          SelectProps: P,
          slots: O = {},
          slotProps: M = {},
          type: B,
          value: I,
          variant: L = "outlined",
          ...F
        } = n,
        z = {
          ...n,
          autoFocus: o,
          color: l,
          disabled: u,
          error: c,
          fullWidth: p,
          multiline: S,
          required: T,
          select: N,
          variant: L,
        },
        D = ((e) => {
          const { classes: t } = e;
          return Un({ root: ["root"] }, mp, t);
        })(z);
      const U = Ks(h),
        V = f && U ? `${U}-helper-text` : void 0,
        W = b && U ? `${U}-label` : void 0,
        H = gp[L],
        Q = {
          slots: O,
          slotProps: {
            input: y,
            inputLabel: m,
            htmlInput: g,
            formHelperText: d,
            select: P,
            ...M,
          },
        },
        q = {},
        G = Q.slotProps.inputLabel;
      "outlined" === L &&
        (G && "undefined" !== typeof G.shrink && (q.notched = G.shrink),
        (q.label = b)),
        N &&
          ((P && P.native) || (q.id = void 0),
          (q["aria-describedby"] = void 0));
      const [K, Y] = sd("input", {
          elementType: H,
          externalForwardedProps: Q,
          additionalProps: q,
          ownerState: z,
        }),
        [Z, J] = sd("inputLabel", {
          elementType: _u,
          externalForwardedProps: Q,
          ownerState: z,
        }),
        [X, _] = sd("htmlInput", {
          elementType: "input",
          externalForwardedProps: Q,
          ownerState: z,
        }),
        [$, ee] = sd("formHelperText", {
          elementType: sc,
          externalForwardedProps: Q,
          ownerState: z,
        }),
        [te, ne] = sd("select", {
          elementType: hp,
          externalForwardedProps: Q,
          ownerState: z,
        }),
        re = (0, ol.jsx)(K, {
          "aria-describedby": V,
          autoComplete: r,
          autoFocus: o,
          defaultValue: s,
          fullWidth: p,
          multiline: S,
          name: k,
          rows: j,
          maxRows: x,
          minRows: w,
          type: B,
          value: I,
          id: U,
          inputRef: v,
          onBlur: A,
          onChange: E,
          onFocus: C,
          placeholder: R,
          inputProps: _,
          slots: { input: O.htmlInput ? X : void 0 },
          ...Y,
        });
      return (0,
      ol.jsxs)(yp, { className: Dn(D.root, i), disabled: u, error: c, fullWidth: p, ref: t, required: T, color: l, variant: L, ownerState: z, ...F, children: [null != b && "" !== b && (0, ol.jsx)(Z, { htmlFor: U, id: W, ...J, children: b }), N ? (0, ol.jsx)(te, { "aria-describedby": V, id: U, labelId: W, value: I, input: re, ...ne, children: a }) : re, f && (0, ol.jsx)($, { id: V, ...ee, children: f })] });
    }),
    bp = vp;
  function xp(e) {
    return yl("MuiInputAdornment", e);
  }
  const wp = vl("MuiInputAdornment", [
    "root",
    "filled",
    "standard",
    "outlined",
    "positionStart",
    "positionEnd",
    "disablePointerEvents",
    "hiddenLabel",
    "sizeSmall",
  ]);
  var Sp;
  const kp = nl("div", {
      name: "MuiInputAdornment",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`position${ql(n.position)}`],
          !0 === n.disablePointerEvents && t.disablePointerEvents,
          t[n.variant],
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          display: "flex",
          maxHeight: "2em",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: (t.vars || t).palette.action.active,
          variants: [
            {
              props: { variant: "filled" },
              style: {
                [`&.${wp.positionStart}&:not(.${wp.hiddenLabel})`]: {
                  marginTop: 16,
                },
              },
            },
            { props: { position: "start" }, style: { marginRight: 8 } },
            { props: { position: "end" }, style: { marginLeft: 8 } },
            {
              props: { disablePointerEvents: !0 },
              style: { pointerEvents: "none" },
            },
          ],
        };
      })
    ),
    Ap = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiInputAdornment" }),
        {
          children: r,
          className: o,
          component: i = "div",
          disablePointerEvents: l = !1,
          disableTypography: s = !1,
          position: u,
          variant: c,
          ...d
        } = n,
        p = lu() || {};
      let f = c;
      c && p.variant, p && !f && (f = p.variant);
      const h = {
          ...n,
          hiddenLabel: p.hiddenLabel,
          size: p.size,
          disablePointerEvents: l,
          position: u,
          variant: f,
        },
        m = ((e) => {
          const {
            classes: t,
            disablePointerEvents: n,
            hiddenLabel: r,
            position: o,
            size: a,
            variant: i,
          } = e;
          return Un(
            {
              root: [
                "root",
                n && "disablePointerEvents",
                o && `position${ql(o)}`,
                i,
                r && "hiddenLabel",
                a && `size${ql(a)}`,
              ],
            },
            xp,
            t
          );
        })(h);
      return (0,
      ol.jsx)(iu.Provider, { value: null, children: (0, ol.jsx)(kp, { as: i, ownerState: h, className: Dn(m.root, o), ref: t, ...d, children: "string" !== typeof r || s ? (0, ol.jsxs)(a.Fragment, { children: ["start" === u ? Sp || (Sp = (0, ol.jsx)("span", { className: "notranslate", children: "\u200b" })) : null, r] }) : (0, ol.jsx)($l, { color: "textSecondary", children: r }) }) });
    }),
    Ep = Ap;
  function Cp(e) {
    try {
      return e.matches(":focus-visible");
    } catch (t) {
      0;
    }
    return !1;
  }
  const Rp = md;
  class Tp {
    static create() {
      return new Tp();
    }
    static use() {
      const e = Mc(Tp.create).current,
        [t, n] = a.useState(!1);
      return (
        (e.shouldMount = t),
        (e.setShouldMount = n),
        a.useEffect(e.mountEffect, [t]),
        e
      );
    }
    constructor() {
      (this.ref = { current: null }),
        (this.mounted = null),
        (this.didMount = !1),
        (this.shouldMount = !1),
        (this.setShouldMount = null);
    }
    mount() {
      return (
        this.mounted ||
          ((this.mounted = (function () {
            let e, t;
            const n = new Promise((n, r) => {
              (e = n), (t = r);
            });
            return (n.resolve = e), (n.reject = t), n;
          })()),
          (this.shouldMount = !0),
          this.setShouldMount(this.shouldMount)),
        this.mounted
      );
    }
    mountEffect = () => {
      this.shouldMount &&
        !this.didMount &&
        null !== this.ref.current &&
        ((this.didMount = !0), this.mounted.resolve());
    };
    start() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this.mount().then(() => this.ref.current?.start(...t));
    }
    stop() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this.mount().then(() => this.ref.current?.stop(...t));
    }
    pulsate() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this.mount().then(() => this.ref.current?.pulsate(...t));
    }
  }
  function jp(e, t) {
    var n = Object.create(null);
    return (
      e &&
        a.Children.map(e, function (e) {
          return e;
        }).forEach(function (e) {
          n[e.key] = (function (e) {
            return t && (0, a.isValidElement)(e) ? t(e) : e;
          })(e);
        }),
      n
    );
  }
  function Np(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
  }
  function Pp(e, t, n) {
    var r = jp(e.children),
      o = (function (e, t) {
        function n(n) {
          return n in t ? t[n] : e[n];
        }
        (e = e || {}), (t = t || {});
        var r,
          o = Object.create(null),
          a = [];
        for (var i in e)
          i in t ? a.length && ((o[i] = a), (a = [])) : a.push(i);
        var l = {};
        for (var s in t) {
          if (o[s])
            for (r = 0; r < o[s].length; r++) {
              var u = o[s][r];
              l[o[s][r]] = n(u);
            }
          l[s] = n(s);
        }
        for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]);
        return l;
      })(t, r);
    return (
      Object.keys(o).forEach(function (i) {
        var l = o[i];
        if ((0, a.isValidElement)(l)) {
          var s = i in t,
            u = i in r,
            c = t[i],
            d = (0, a.isValidElement)(c) && !c.props.in;
          !u || (s && !d)
            ? u || !s || d
              ? u &&
                s &&
                (0, a.isValidElement)(c) &&
                (o[i] = (0, a.cloneElement)(l, {
                  onExited: n.bind(null, l),
                  in: c.props.in,
                  exit: Np(l, "exit", e),
                  enter: Np(l, "enter", e),
                }))
              : (o[i] = (0, a.cloneElement)(l, { in: !1 }))
            : (o[i] = (0, a.cloneElement)(l, {
                onExited: n.bind(null, l),
                in: !0,
                exit: Np(l, "exit", e),
                enter: Np(l, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var Op =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    Mp = (function (e) {
      function t(t, n) {
        var r,
          o = (r = e.call(this, t, n) || this).handleExited.bind(
            (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(r)
          );
        return (
          (r.state = {
            contextValue: { isMounting: !0 },
            handleExited: o,
            firstRender: !0,
          }),
          r
        );
      }
      Dc(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          (this.mounted = !0),
            this.setState({ contextValue: { isMounting: !1 } });
        }),
        (n.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (t.getDerivedStateFromProps = function (e, t) {
          var n,
            r,
            o = t.children,
            i = t.handleExited;
          return {
            children: t.firstRender
              ? ((n = e),
                (r = i),
                jp(n.children, function (e) {
                  return (0,
                  a.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: Np(e, "appear", n), enter: Np(e, "enter", n), exit: Np(e, "exit", n) });
                }))
              : Pp(e, o, i),
            firstRender: !1,
          };
        }),
        (n.handleExited = function (e, t) {
          var n = jp(this.props.children);
          e.key in n ||
            (e.props.onExited && e.props.onExited(t),
            this.mounted &&
              this.setState(function (t) {
                var n = Vn({}, t.children);
                return delete n[e.key], { children: n };
              }));
        }),
        (n.render = function () {
          var e = this.props,
            t = e.component,
            n = e.childFactory,
            r = Fc(e, ["component", "childFactory"]),
            o = this.state.contextValue,
            i = Op(this.state.children).map(n);
          return (
            delete r.appear,
            delete r.enter,
            delete r.exit,
            null === t
              ? a.createElement(Vc.Provider, { value: o }, i)
              : a.createElement(
                  Vc.Provider,
                  { value: o },
                  a.createElement(t, r, i)
                )
          );
        }),
        t
      );
    })(a.Component);
  (Mp.propTypes = {}),
    (Mp.defaultProps = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    });
  const Bp = Mp;
  const Ip = function (e) {
    const {
        className: t,
        classes: n,
        pulsate: r = !1,
        rippleX: o,
        rippleY: i,
        rippleSize: l,
        in: s,
        onExited: u,
        timeout: c,
      } = e,
      [d, p] = a.useState(!1),
      f = Dn(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
      h = { width: l, height: l, top: -l / 2 + i, left: -l / 2 + o },
      m = Dn(n.child, d && n.childLeaving, r && n.childPulsate);
    return (
      s || d || p(!0),
      a.useEffect(() => {
        if (!s && null != u) {
          const e = setTimeout(u, c);
          return () => {
            clearTimeout(e);
          };
        }
      }, [u, s, c]),
      (0, ol.jsx)("span", {
        className: f,
        style: h,
        children: (0, ol.jsx)("span", { className: m }),
      })
    );
  };
  const Lp = vl("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    Fp = Vl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
    zp = Vl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
    Dp = Vl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
    Up = nl("span", { name: "MuiTouchRipple", slot: "Root" })({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
    }),
    Vp = nl(Ip, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Lp.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Fp};
    animation-duration: ${550}ms;
    animation-timing-function: ${(e) => {
      let { theme: t } = e;
      return t.transitions.easing.easeInOut;
    }};
  }

  &.${Lp.ripplePulsate} {
    animation-duration: ${(e) => {
      let { theme: t } = e;
      return t.transitions.duration.shorter;
    }}ms;
  }

  & .${Lp.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Lp.childLeaving} {
    opacity: 0;
    animation-name: ${zp};
    animation-duration: ${550}ms;
    animation-timing-function: ${(e) => {
      let { theme: t } = e;
      return t.transitions.easing.easeInOut;
    }};
  }

  & .${Lp.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Dp};
    animation-duration: 2500ms;
    animation-timing-function: ${(e) => {
      let { theme: t } = e;
      return t.transitions.easing.easeInOut;
    }};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
    Wp = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiTouchRipple" }),
        { center: r = !1, classes: o = {}, className: i, ...l } = n,
        [s, u] = a.useState([]),
        c = a.useRef(0),
        d = a.useRef(null);
      a.useEffect(() => {
        d.current && (d.current(), (d.current = null));
      }, [s]);
      const p = a.useRef(!1),
        f = Lc(),
        h = a.useRef(null),
        m = a.useRef(null),
        g = a.useCallback(
          (e) => {
            const {
              pulsate: t,
              rippleX: n,
              rippleY: r,
              rippleSize: a,
              cb: i,
            } = e;
            u((e) => [
              ...e,
              (0, ol.jsx)(
                Vp,
                {
                  classes: {
                    ripple: Dn(o.ripple, Lp.ripple),
                    rippleVisible: Dn(o.rippleVisible, Lp.rippleVisible),
                    ripplePulsate: Dn(o.ripplePulsate, Lp.ripplePulsate),
                    child: Dn(o.child, Lp.child),
                    childLeaving: Dn(o.childLeaving, Lp.childLeaving),
                    childPulsate: Dn(o.childPulsate, Lp.childPulsate),
                  },
                  timeout: 550,
                  pulsate: t,
                  rippleX: n,
                  rippleY: r,
                  rippleSize: a,
                },
                c.current
              ),
            ]),
              (c.current += 1),
              (d.current = i);
          },
          [o]
        ),
        y = a.useCallback(
          function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : () => {};
            const {
              pulsate: o = !1,
              center: a = r || t.pulsate,
              fakeElement: i = !1,
            } = t;
            if ("mousedown" === e?.type && p.current)
              return void (p.current = !1);
            "touchstart" === e?.type && (p.current = !0);
            const l = i ? null : m.current,
              s = l
                ? l.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let u, c, d;
            if (
              a ||
              void 0 === e ||
              (0 === e.clientX && 0 === e.clientY) ||
              (!e.clientX && !e.touches)
            )
              (u = Math.round(s.width / 2)), (c = Math.round(s.height / 2));
            else {
              const { clientX: t, clientY: n } =
                e.touches && e.touches.length > 0 ? e.touches[0] : e;
              (u = Math.round(t - s.left)), (c = Math.round(n - s.top));
            }
            if (a)
              (d = Math.sqrt((2 * s.width ** 2 + s.height ** 2) / 3)),
                d % 2 === 0 && (d += 1);
            else {
              const e =
                  2 * Math.max(Math.abs((l ? l.clientWidth : 0) - u), u) + 2,
                t = 2 * Math.max(Math.abs((l ? l.clientHeight : 0) - c), c) + 2;
              d = Math.sqrt(e ** 2 + t ** 2);
            }
            e?.touches
              ? null === h.current &&
                ((h.current = () => {
                  g({
                    pulsate: o,
                    rippleX: u,
                    rippleY: c,
                    rippleSize: d,
                    cb: n,
                  });
                }),
                f.start(80, () => {
                  h.current && (h.current(), (h.current = null));
                }))
              : g({ pulsate: o, rippleX: u, rippleY: c, rippleSize: d, cb: n });
          },
          [r, g, f]
        ),
        v = a.useCallback(() => {
          y({}, { pulsate: !0 });
        }, [y]),
        b = a.useCallback(
          (e, t) => {
            if ((f.clear(), "touchend" === e?.type && h.current))
              return (
                h.current(),
                (h.current = null),
                void f.start(0, () => {
                  b(e, t);
                })
              );
            (h.current = null),
              u((e) => (e.length > 0 ? e.slice(1) : e)),
              (d.current = t);
          },
          [f]
        );
      return (
        a.useImperativeHandle(t, () => ({ pulsate: v, start: y, stop: b }), [
          v,
          y,
          b,
        ]),
        (0, ol.jsx)(Up, {
          className: Dn(Lp.root, o.root, i),
          ref: m,
          ...l,
          children: (0, ol.jsx)(Bp, { component: null, exit: !0, children: s }),
        })
      );
    });
  function Hp(e) {
    return yl("MuiButtonBase", e);
  }
  const Qp = vl("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    qp = nl("button", {
      name: "MuiButtonBase",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: 0,
      border: 0,
      margin: 0,
      borderRadius: 0,
      padding: 0,
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      WebkitAppearance: "none",
      textDecoration: "none",
      color: "inherit",
      "&::-moz-focus-inner": { borderStyle: "none" },
      [`&.${Qp.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    Gp = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiButtonBase" }),
        {
          action: r,
          centerRipple: o = !1,
          children: i,
          className: l,
          component: s = "button",
          disabled: u = !1,
          disableRipple: c = !1,
          disableTouchRipple: d = !1,
          focusRipple: p = !1,
          focusVisibleClassName: f,
          LinkComponent: h = "a",
          onBlur: m,
          onClick: g,
          onContextMenu: y,
          onDragLeave: v,
          onFocus: b,
          onFocusVisible: x,
          onKeyDown: w,
          onKeyUp: S,
          onMouseDown: k,
          onMouseLeave: A,
          onMouseUp: E,
          onTouchEnd: C,
          onTouchMove: R,
          onTouchStart: T,
          tabIndex: j = 0,
          TouchRippleProps: N,
          touchRippleRef: P,
          type: O,
          ...M
        } = n,
        B = a.useRef(null),
        I = Tp.use(),
        L = su(I.ref, P),
        [F, z] = a.useState(!1);
      u && F && z(!1),
        a.useImperativeHandle(
          r,
          () => ({
            focusVisible: () => {
              z(!0), B.current.focus();
            },
          }),
          []
        );
      const D = I.shouldMount && !c && !u;
      function U(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
        return Rp((r) => {
          t && t(r);
          return n || I[e](r), !0;
        });
      }
      a.useEffect(() => {
        F && p && !c && I.pulsate();
      }, [c, p, F, I]);
      const V = U("start", k),
        W = U("stop", y),
        H = U("stop", v),
        Q = U("stop", E),
        q = U("stop", (e) => {
          F && e.preventDefault(), A && A(e);
        }),
        G = U("start", T),
        K = U("stop", C),
        Y = U("stop", R),
        Z = U(
          "stop",
          (e) => {
            Cp(e.target) || z(!1), m && m(e);
          },
          !1
        ),
        J = Rp((e) => {
          B.current || (B.current = e.currentTarget),
            Cp(e.target) && (z(!0), x && x(e)),
            b && b(e);
        }),
        X = () => {
          const e = B.current;
          return s && "button" !== s && !("A" === e.tagName && e.href);
        },
        _ = Rp((e) => {
          p &&
            !e.repeat &&
            F &&
            " " === e.key &&
            I.stop(e, () => {
              I.start(e);
            }),
            e.target === e.currentTarget &&
              X() &&
              " " === e.key &&
              e.preventDefault(),
            w && w(e),
            e.target === e.currentTarget &&
              X() &&
              "Enter" === e.key &&
              !u &&
              (e.preventDefault(), g && g(e));
        }),
        $ = Rp((e) => {
          p &&
            " " === e.key &&
            F &&
            !e.defaultPrevented &&
            I.stop(e, () => {
              I.pulsate(e);
            }),
            S && S(e),
            g &&
              e.target === e.currentTarget &&
              X() &&
              " " === e.key &&
              !e.defaultPrevented &&
              g(e);
        });
      let ee = s;
      "button" === ee && (M.href || M.to) && (ee = h);
      const te = {};
      "button" === ee
        ? ((te.type = void 0 === O ? "button" : O), (te.disabled = u))
        : (M.href || M.to || (te.role = "button"),
          u && (te["aria-disabled"] = u));
      const ne = su(t, B),
        re = {
          ...n,
          centerRipple: o,
          component: s,
          disabled: u,
          disableRipple: c,
          disableTouchRipple: d,
          focusRipple: p,
          tabIndex: j,
          focusVisible: F,
        },
        oe = ((e) => {
          const {
              disabled: t,
              focusVisible: n,
              focusVisibleClassName: r,
              classes: o,
            } = e,
            a = Un(
              { root: ["root", t && "disabled", n && "focusVisible"] },
              Hp,
              o
            );
          return n && r && (a.root += ` ${r}`), a;
        })(re);
      return (0,
      ol.jsxs)(qp, { as: ee, className: Dn(oe.root, l), ownerState: re, onBlur: Z, onClick: g, onContextMenu: W, onFocus: J, onKeyDown: _, onKeyUp: $, onMouseDown: V, onMouseLeave: q, onMouseUp: Q, onDragLeave: H, onTouchEnd: K, onTouchMove: Y, onTouchStart: G, ref: ne, tabIndex: u ? -1 : j, type: O, ...te, ...M, children: [i, D ? (0, ol.jsx)(Wp, { ref: L, center: o, ...N }) : null] });
    });
  function Kp(e) {
    return yl("MuiIconButton", e);
  }
  const Yp = vl("MuiIconButton", [
      "root",
      "disabled",
      "colorInherit",
      "colorPrimary",
      "colorSecondary",
      "colorError",
      "colorInfo",
      "colorSuccess",
      "colorWarning",
      "edgeStart",
      "edgeEnd",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
    ]),
    Zp = nl(Gp, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          "default" !== n.color && t[`color${ql(n.color)}`],
          n.edge && t[`edge${ql(n.edge)}`],
          t[`size${ql(n.size)}`],
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: t.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          color: (t.vars || t).palette.action.active,
          transition: t.transitions.create("background-color", {
            duration: t.transitions.duration.shortest,
          }),
          variants: [
            {
              props: (e) => !e.disableRipple,
              style: {
                "--IconButton-hoverBg": t.vars
                  ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`
                  : Ja(t.palette.action.active, t.palette.action.hoverOpacity),
                "&:hover": {
                  backgroundColor: "var(--IconButton-hoverBg)",
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
            },
            { props: { edge: "start" }, style: { marginLeft: -12 } },
            {
              props: { edge: "start", size: "small" },
              style: { marginLeft: -3 },
            },
            { props: { edge: "end" }, style: { marginRight: -12 } },
            {
              props: { edge: "end", size: "small" },
              style: { marginRight: -3 },
            },
          ],
        };
      }),
      fl((e) => {
        let { theme: t } = e;
        return {
          variants: [
            { props: { color: "inherit" }, style: { color: "inherit" } },
            ...Object.entries(t.palette)
              .filter(Gl())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars || t).palette[n].main },
                };
              }),
            ...Object.entries(t.palette)
              .filter(Gl())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: {
                    "--IconButton-hoverBg": t.vars
                      ? `rgba(${(t.vars || t).palette[n].mainChannel} / ${
                          t.vars.palette.action.hoverOpacity
                        })`
                      : Ja(
                          (t.vars || t).palette[n].main,
                          t.palette.action.hoverOpacity
                        ),
                  },
                };
              }),
            {
              props: { size: "small" },
              style: { padding: 5, fontSize: t.typography.pxToRem(18) },
            },
            {
              props: { size: "large" },
              style: { padding: 12, fontSize: t.typography.pxToRem(28) },
            },
          ],
          [`&.${Yp.disabled}`]: {
            backgroundColor: "transparent",
            color: (t.vars || t).palette.action.disabled,
          },
        };
      })
    ),
    Jp = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiIconButton" }),
        {
          edge: r = !1,
          children: o,
          className: a,
          color: i = "default",
          disabled: l = !1,
          disableFocusRipple: s = !1,
          size: u = "medium",
          ...c
        } = n,
        d = {
          ...n,
          edge: r,
          color: i,
          disabled: l,
          disableFocusRipple: s,
          size: u,
        },
        p = ((e) => {
          const { classes: t, disabled: n, color: r, edge: o, size: a } = e;
          return Un(
            {
              root: [
                "root",
                n && "disabled",
                "default" !== r && `color${ql(r)}`,
                o && `edge${ql(o)}`,
                `size${ql(a)}`,
              ],
            },
            Kp,
            t
          );
        })(d);
      return (0,
      ol.jsx)(Zp, { className: Dn(p.root, a), centerRipple: !0, focusRipple: !s, disabled: l, ref: t, ...c, ownerState: d, children: o });
    }),
    Xp = Jp,
    _p = ls(
      (0, ol.jsx)("path", {
        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
      }),
      "Person"
    );
  function $p(e) {
    return yl("MuiAvatar", e);
  }
  vl("MuiAvatar", [
    "root",
    "colorDefault",
    "circular",
    "rounded",
    "square",
    "img",
    "fallback",
  ]);
  const ef = nl("div", {
      name: "MuiAvatar",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          width: 40,
          height: 40,
          fontFamily: t.typography.fontFamily,
          fontSize: t.typography.pxToRem(20),
          lineHeight: 1,
          borderRadius: "50%",
          overflow: "hidden",
          userSelect: "none",
          variants: [
            {
              props: { variant: "rounded" },
              style: { borderRadius: (t.vars || t).shape.borderRadius },
            },
            { props: { variant: "square" }, style: { borderRadius: 0 } },
            {
              props: { colorDefault: !0 },
              style: {
                color: (t.vars || t).palette.background.default,
                ...(t.vars
                  ? { backgroundColor: t.vars.palette.Avatar.defaultBg }
                  : {
                      backgroundColor: t.palette.grey[400],
                      ...t.applyStyles("dark", {
                        backgroundColor: t.palette.grey[600],
                      }),
                    }),
              },
            },
          ],
        };
      })
    ),
    tf = nl("img", {
      name: "MuiAvatar",
      slot: "Img",
      overridesResolver: (e, t) => t.img,
    })({
      width: "100%",
      height: "100%",
      textAlign: "center",
      objectFit: "cover",
      color: "transparent",
      textIndent: 1e4,
    }),
    nf = nl(_p, {
      name: "MuiAvatar",
      slot: "Fallback",
      overridesResolver: (e, t) => t.fallback,
    })({ width: "75%", height: "75%" });
  const rf = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiAvatar" }),
        {
          alt: r,
          children: o,
          className: i,
          component: l = "div",
          slots: s = {},
          slotProps: u = {},
          imgProps: c,
          sizes: d,
          src: p,
          srcSet: f,
          variant: h = "circular",
          ...m
        } = n;
      let g = null;
      const y = (function (e) {
          let { crossOrigin: t, referrerPolicy: n, src: r, srcSet: o } = e;
          const [i, l] = a.useState(!1);
          return (
            a.useEffect(() => {
              if (!r && !o) return;
              l(!1);
              let e = !0;
              const a = new Image();
              return (
                (a.onload = () => {
                  e && l("loaded");
                }),
                (a.onerror = () => {
                  e && l("error");
                }),
                (a.crossOrigin = t),
                (a.referrerPolicy = n),
                (a.src = r),
                o && (a.srcset = o),
                () => {
                  e = !1;
                }
              );
            }, [t, n, r, o]),
            i
          );
        })({ ...c, src: p, srcSet: f }),
        v = p || f,
        b = v && "error" !== y,
        x = { ...n, colorDefault: !b, component: l, variant: h };
      delete x.ownerState;
      const w = ((e) => {
          const { classes: t, variant: n, colorDefault: r } = e;
          return Un(
            {
              root: ["root", n, r && "colorDefault"],
              img: ["img"],
              fallback: ["fallback"],
            },
            $p,
            t
          );
        })(x),
        [S, k] = sd("img", {
          className: w.img,
          elementType: tf,
          externalForwardedProps: {
            slots: s,
            slotProps: { img: { ...c, ...u.img } },
          },
          additionalProps: { alt: r, src: p, srcSet: f, sizes: d },
          ownerState: x,
        });
      return (
        (g = b
          ? (0, ol.jsx)(S, { ...k })
          : o || 0 === o
          ? o
          : v && r
          ? r[0]
          : (0, ol.jsx)(nf, { ownerState: x, className: w.fallback })),
        (0, ol.jsx)(ef, {
          as: l,
          className: Dn(w.root, i),
          ref: t,
          ...m,
          ownerState: x,
          children: g,
        })
      );
    }),
    of = rf;
  const af = vl("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  const lf = vl("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]);
  function sf(e) {
    return yl("MuiMenuItem", e);
  }
  const uf = vl("MuiMenuItem", [
      "root",
      "focusVisible",
      "dense",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    cf = nl(Gp, {
      shouldForwardProp: (e) => tl(e) || "classes" === e,
      name: "MuiMenuItem",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.dense && t.dense,
          n.divider && t.divider,
          !n.disableGutters && t.gutters,
        ];
      },
    })(
      fl((e) => {
        let { theme: t } = e;
        return {
          ...t.typography.body1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          minHeight: 48,
          paddingTop: 6,
          paddingBottom: 6,
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (t.vars || t).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${uf.selected}`]: {
            backgroundColor: t.vars
              ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
              : Ja(t.palette.primary.main, t.palette.action.selectedOpacity),
            [`&.${uf.focusVisible}`]: {
              backgroundColor: t.vars
                ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`
                : Ja(
                    t.palette.primary.main,
                    t.palette.action.selectedOpacity +
                      t.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${uf.selected}:hover`]: {
            backgroundColor: t.vars
              ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`
              : Ja(
                  t.palette.primary.main,
                  t.palette.action.selectedOpacity +
                    t.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: t.vars
                ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                : Ja(t.palette.primary.main, t.palette.action.selectedOpacity),
            },
          },
          [`&.${uf.focusVisible}`]: {
            backgroundColor: (t.vars || t).palette.action.focus,
          },
          [`&.${uf.disabled}`]: {
            opacity: (t.vars || t).palette.action.disabledOpacity,
          },
          [`& + .${As.root}`]: {
            marginTop: t.spacing(1),
            marginBottom: t.spacing(1),
          },
          [`& + .${As.inset}`]: { marginLeft: 52 },
          [`& .${lf.root}`]: { marginTop: 0, marginBottom: 0 },
          [`& .${lf.inset}`]: { paddingLeft: 36 },
          [`& .${af.root}`]: { minWidth: 36 },
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableGutters;
              },
              style: { paddingLeft: 16, paddingRight: 16 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.divider;
              },
              style: {
                borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
                backgroundClip: "padding-box",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.dense;
              },
              style: { [t.breakpoints.up("sm")]: { minHeight: "auto" } },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.dense;
              },
              style: {
                minHeight: 32,
                paddingTop: 4,
                paddingBottom: 4,
                ...t.typography.body2,
                [`& .${af.root} svg`]: { fontSize: "1.25rem" },
              },
            },
          ],
        };
      })
    ),
    df = a.forwardRef(function (e, t) {
      const n = ll({ props: e, name: "MuiMenuItem" }),
        {
          autoFocus: r = !1,
          component: o = "li",
          dense: i = !1,
          divider: l = !1,
          disableGutters: s = !1,
          focusVisibleClassName: u,
          role: c = "menuitem",
          tabIndex: d,
          className: p,
          ...f
        } = n,
        h = a.useContext(bc),
        m = a.useMemo(
          () => ({ dense: i || h.dense || !1, disableGutters: s }),
          [h.dense, i, s]
        ),
        g = a.useRef(null);
      uu(() => {
        r && g.current && g.current.focus();
      }, [r]);
      const y = { ...n, dense: m.dense, divider: l, disableGutters: s },
        v = ((e) => {
          const {
              disabled: t,
              dense: n,
              divider: r,
              disableGutters: o,
              selected: a,
              classes: i,
            } = e,
            l = Un(
              {
                root: [
                  "root",
                  n && "dense",
                  t && "disabled",
                  !o && "gutters",
                  r && "divider",
                  a && "selected",
                ],
              },
              sf,
              i
            );
          return { ...i, ...l };
        })(n),
        b = su(g, t);
      let x;
      return (
        n.disabled || (x = void 0 !== d ? d : -1),
        (0, ol.jsx)(bc.Provider, {
          value: m,
          children: (0, ol.jsx)(cf, {
            ref: b,
            role: c,
            tabIndex: x,
            component: o,
            focusVisibleClassName: Dn(v.focusVisible, u),
            className: Dn(v.root, p),
            ...f,
            ownerState: y,
            classes: v,
          }),
        })
      );
    }),
    pf = ls(
      (0, ol.jsx)("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
      }),
      "Search"
    ),
    ff = ls(
      (0, ol.jsx)("path", {
        d: "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8",
      }),
      "Whatshot"
    ),
    hf = ls((0, ol.jsx)("path", { d: "M7 2v11h3v9l7-12h-4l4-8z" }), "FlashOn"),
    mf = ls(
      (0, ol.jsx)("path", {
        d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
      }),
      "ExpandMore"
    ),
    gf = n.p + "static/media/user.00b2d2b5b3b68130abef.jpg";
  const yf = function (e) {
    let { searchTerm: t, onSearchChange: n } = e;
    const [r, o] = (0, a.useState)(null),
      i = () => {
        o(null);
      };
    return (0, ol.jsxs)(jl, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      p: 2,
      sx: { flexDirection: { xs: "column", sm: "row" }, gap: { xs: 2, sm: 0 } },
      children: [
        (0, ol.jsx)(bp, {
          variant: "outlined",
          placeholder: "Search by Ticker, User, or Trader...",
          size: "small",
          value: t,
          onChange: (e) => n(e.target.value),
          InputProps: {
            startAdornment: (0, ol.jsx)(Ep, {
              position: "start",
              children: (0, ol.jsx)(pf, { color: "disabled" }),
            }),
          },
          sx: {
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            width: { xs: "100%", sm: "300px", md: "400px" },
            "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
          },
        }),
        (0, ol.jsxs)(zl, {
          direction: "row",
          alignItems: "center",
          spacing: 1,
          children: [
            (0, ol.jsx)(jl, {
              className: "bg-black rounded-full",
              children: (0, ol.jsx)(Xp, {
                children: (0, ol.jsx)(ff, { color: "error" }),
              }),
            }),
            (0, ol.jsx)(jl, {
              className: "bg-black rounded-full",
              children: (0, ol.jsx)(Xp, {
                children: (0, ol.jsx)(hf, { color: "primary" }),
              }),
            }),
            (0, ol.jsx)(of, {
              src: gf,
              alt: "User Profile",
              sx: { width: 36, height: 36 },
            }),
            (0, ol.jsx)(Xp, {
              onClick: (e) => {
                o(e.currentTarget);
              },
              children: (0, ol.jsx)(mf, {}),
            }),
            (0, ol.jsx)(Hd, {
              anchorEl: r,
              open: Boolean(r),
              onClose: i,
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
              transformOrigin: { vertical: "top", horizontal: "right" },
              children: (0, ol.jsx)(df, {
                onClick: () => {
                  console.log("User logged out"), i();
                },
                sx: {
                  fontSize: "16px",
                  color: "#333",
                  "&:hover": { backgroundColor: "#f0f0f0", color: "#000" },
                  padding: "10px 20px",
                },
                children: "Logout",
              }),
            }),
          ],
        }),
      ],
    });
  };
  const vf = function (e) {
    let { filter: t, setFilter: n } = e;
    return (0, ol.jsxs)("div", {
      className:
        "relative flex justify-center p-1 bg-gray-200 rounded-md w-full max-w-xs mx-auto mb-12",
      children: [
        (0, ol.jsx)("div", {
          className: `absolute top-1 bottom-1 left-1 w-[32%] bg-white rounded-md transition-transform duration-300 shadow-md font-inter ${((
            e
          ) => {
            switch (e) {
              case "All":
              default:
                return "translate-x-[1px]";
              case "Stocks":
                return "translate-x-[100.33%]";
              case "Options":
                return "translate-x-[200.66%]";
            }
          })(t)}`,
        }),
        ["All", "Stocks", "Options"].map((e) =>
          (0, ol.jsx)(
            "button",
            {
              onClick: () => n(e),
              className:
                "relative z-10 w-1/3 text-center py-1  text-sm sm:text-base font-medium transition-colors " +
                (t === e ? "text-black" : "text-gray-700"),
              children: e,
            },
            e
          )
        ),
      ],
    });
  };
  const bf = function () {
    const [e, t] = (0, a.useState)({
        topThreeTraders: [],
        keyMetrics: {},
        leaderboard: [],
        segregatedData: {},
      }),
      [n, r] = (0, a.useState)(!0),
      [o, i] = (0, a.useState)(null),
      [l, s] = (0, a.useState)("All"),
      [u, c] = (0, a.useState)("");
    (0, a.useEffect)(() => {
      (async () => {
        try {
          r(!0), i(null);
          const e = await Fn.get(
            "https://script.google.com/macros/s/AKfycbw4Stef0JDEBT6uRW_Hx3Udq2HCh6KRk4JtjK9Ms3xJGLahdHfC4KRONkIlRs2L69Ro/exec"
          );
          t(e.data);
        } catch (o) {
          i("Error fetching data: " + o.message);
        } finally {
          r(!1);
        }
      })();
    }, []);
    const d = (() => {
      let t = "All" === l ? e.leaderboard : e.segregatedData[l] || [];
      return (
        u &&
          (t = t.filter((e) => e.Name.toLowerCase().includes(u.toLowerCase()))),
        t
      );
    })();
    return n
      ? (0, ol.jsx)("p", { children: "Loading..." })
      : o
      ? (0, ol.jsx)("p", { children: o })
      : (0, ol.jsxs)("div", {
          className: "bg-gray-50",
          children: [
            (0, ol.jsx)(yf, { searchTerm: u, onSearchChange: c }),
            " ",
            (0, ol.jsx)(vf, { filter: l, setFilter: s }),
            (0, ol.jsx)(Bs, { traders: e.topThreeTraders }),
            (0, ol.jsx)(Vs, { keyMetrics: e.keyMetrics }),
            (0, ol.jsx)(Qs, { traders: d }),
          ],
        });
  };
  const xf = function () {
      return (0, ol.jsx)(he, {
        children: (0, ol.jsx)(de, {
          children: (0, ol.jsx)(ue, {
            path: "/",
            element: (0, ol.jsx)(bf, {}),
          }),
        }),
      });
    },
    wf = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: o, getLCP: a, getTTFB: i } = t;
            n(e), r(e), o(e), a(e), i(e);
          });
    };
  l.createRoot(document.getElementById("root")).render((0, ol.jsx)(xf, {})),
    wf();
})();
//# sourceMappingURL=main.0d6cae56.js.map
