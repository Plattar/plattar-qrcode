"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.PlattarQRCode = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      var QRCodeStyling = require("qr-code-styling");

      var BaseElement = /*#__PURE__*/function (_HTMLElement) {
        _inherits(BaseElement, _HTMLElement);

        var _super = _createSuper(BaseElement);

        function BaseElement() {
          _classCallCheck(this, BaseElement);

          return _super.call(this);
        }

        _createClass(BaseElement, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            var url = this.hasAttribute("url") ? this.getAttribute("url") : undefined;

            if (!url) {
              throw new Error("BaseElement - required attribute \"url\" is missing");
            }

            var width = this.hasAttribute("width") ? this.getAttribute("width") : 512;
            var height = this.hasAttribute("height") ? this.getAttribute("height") : 512;
            var margin = this.hasAttribute("margin") ? this.getAttribute("margin") : 0;
            var image = this.hasAttribute("image") ? this.getAttribute("image") : undefined;

            if (image === "default") {
              image = "data:image/png;base64,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";
            }

            var shadow = this.shadowRoot || this.attachShadow({
              mode: 'open'
            });
            var qrCode = new QRCodeStyling({
              "width": width,
              "height": height,
              "data": url,
              "margin": margin,
              "imageOptions": {
                "hideBackgroundDots": true,
                "imageSize": 0.4,
                "margin": 0
              },
              "dotsOptions": {
                "type": "rounded",
                "color": "#2162f0"
              },
              "backgroundOptions": {
                "color": "#ffffff"
              },
              "image": image,
              "dotsOptionsHelper": {
                "colorType": {
                  "single": true,
                  "gradient": false
                },
                "gradient": {
                  "linear": true,
                  "radial": false,
                  "color1": "#6a1a4c",
                  "color2": "#6a1a4c",
                  "rotation": "0"
                }
              },
              "cornersSquareOptions": {
                "type": "extra-rounded",
                "color": "#2162f0"
              },
              "cornersSquareOptionsHelper": {
                "colorType": {
                  "single": true,
                  "gradient": false
                },
                "gradient": {
                  "linear": true,
                  "radial": false,
                  "color1": "#000000",
                  "color2": "#000000",
                  "rotation": "0"
                }
              },
              "cornersDotOptions": {
                "type": "dot",
                "color": "#2162f0"
              },
              "cornersDotOptionsHelper": {
                "colorType": {
                  "single": true,
                  "gradient": false
                },
                "gradient": {
                  "linear": true,
                  "radial": false,
                  "color1": "#000000",
                  "color2": "#000000",
                  "rotation": "0"
                }
              },
              "backgroundOptionsHelper": {
                "colorType": {
                  "single": true,
                  "gradient": false
                },
                "gradient": {
                  "linear": true,
                  "radial": false,
                  "color1": "#ffffff",
                  "color2": "#ffffff",
                  "rotation": "0"
                }
              }
            });
            qrCode.append(shadow);
          }
        }]);

        return BaseElement;
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

      module.exports = BaseElement;
    }, {
      "qr-code-styling": 4
    }],
    2: [function (require, module, exports) {
      var BaseElement = require("./base/base-element.js");

      var QRCodeElement = /*#__PURE__*/function (_BaseElement) {
        _inherits(QRCodeElement, _BaseElement);

        var _super2 = _createSuper(QRCodeElement);

        function QRCodeElement() {
          _classCallCheck(this, QRCodeElement);

          return _super2.call(this);
        }

        return QRCodeElement;
      }(BaseElement);

      module.exports = QRCodeElement;
    }, {
      "./base/base-element.js": 1
    }],
    3: [function (require, module, exports) {
      "use strict";

      var QRCodeElement = require("./elements/qrcode-element.js");

      customElements.define("plattar-qrcode", QRCodeElement);
      module.exports = {};
    }, {
      "./elements/qrcode-element.js": 2
    }],
    4: [function (require, module, exports) {
      !function (t, r) {
        "object" == _typeof(exports) && "object" == _typeof(module) ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == _typeof(exports) ? exports.QRCodeStyling = r() : t.QRCodeStyling = r();
      }(self, function () {
        return function () {
          var t = {
            192: function _(t, r) {
              var e,
                  n,
                  o = function () {
                var t = function t(_t, r) {
                  var e = _t,
                      n = a[r],
                      o = null,
                      i = 0,
                      u = null,
                      v = [],
                      y = {},
                      x = function x(t, r) {
                    o = function (t) {
                      for (var r = new Array(t), e = 0; e < t; e += 1) {
                        r[e] = new Array(t);

                        for (var n = 0; n < t; n += 1) {
                          r[e][n] = null;
                        }
                      }

                      return r;
                    }(i = 4 * e + 17), b(0, 0), b(i - 7, 0), b(0, i - 7), m(), _(), S(t, r), e >= 7 && M(t), null == u && (u = C(e, n, v)), O(u, r);
                  },
                      b = function b(t, r) {
                    for (var e = -1; e <= 7; e += 1) {
                      if (!(t + e <= -1 || i <= t + e)) for (var n = -1; n <= 7; n += 1) {
                        r + n <= -1 || i <= r + n || (o[t + e][r + n] = 0 <= e && e <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n && n <= 4);
                      }
                    }
                  },
                      _ = function _() {
                    for (var t = 8; t < i - 8; t += 1) {
                      null == o[t][6] && (o[t][6] = t % 2 == 0);
                    }

                    for (var r = 8; r < i - 8; r += 1) {
                      null == o[6][r] && (o[6][r] = r % 2 == 0);
                    }
                  },
                      m = function m() {
                    for (var t = s.getPatternPosition(e), r = 0; r < t.length; r += 1) {
                      for (var n = 0; n < t.length; n += 1) {
                        var i = t[r],
                            a = t[n];
                        if (null == o[i][a]) for (var u = -2; u <= 2; u += 1) {
                          for (var c = -2; c <= 2; c += 1) {
                            o[i + u][a + c] = -2 == u || 2 == u || -2 == c || 2 == c || 0 == u && 0 == c;
                          }
                        }
                      }
                    }
                  },
                      M = function M(t) {
                    for (var r = s.getBCHTypeNumber(e), n = 0; n < 18; n += 1) {
                      var a = !t && 1 == (r >> n & 1);
                      o[Math.floor(n / 3)][n % 3 + i - 8 - 3] = a;
                    }

                    for (n = 0; n < 18; n += 1) {
                      a = !t && 1 == (r >> n & 1), o[n % 3 + i - 8 - 3][Math.floor(n / 3)] = a;
                    }
                  },
                      S = function S(t, r) {
                    for (var e = n << 3 | r, a = s.getBCHTypeInfo(e), u = 0; u < 15; u += 1) {
                      var c = !t && 1 == (a >> u & 1);
                      u < 6 ? o[u][8] = c : u < 8 ? o[u + 1][8] = c : o[i - 15 + u][8] = c;
                    }

                    for (u = 0; u < 15; u += 1) {
                      c = !t && 1 == (a >> u & 1), u < 8 ? o[8][i - u - 1] = c : u < 9 ? o[8][15 - u - 1 + 1] = c : o[8][15 - u - 1] = c;
                    }

                    o[i - 8][8] = !t;
                  },
                      O = function O(t, r) {
                    for (var e = -1, n = i - 1, a = 7, u = 0, c = s.getMaskFunction(r), h = i - 1; h > 0; h -= 2) {
                      for (6 == h && (h -= 1);;) {
                        for (var f = 0; f < 2; f += 1) {
                          if (null == o[n][h - f]) {
                            var d = !1;
                            u < t.length && (d = 1 == (t[u] >>> a & 1)), c(n, h - f) && (d = !d), o[n][h - f] = d, -1 == (a -= 1) && (u += 1, a = 7);
                          }
                        }

                        if ((n += e) < 0 || i <= n) {
                          n -= e, e = -e;
                          break;
                        }
                      }
                    }
                  },
                      C = function C(t, r, e) {
                    for (var n = h.getRSBlocks(t, r), o = f(), i = 0; i < e.length; i += 1) {
                      var a = e[i];
                      o.put(a.getMode(), 4), o.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(o);
                    }

                    var u = 0;

                    for (i = 0; i < n.length; i += 1) {
                      u += n[i].dataCount;
                    }

                    if (o.getLengthInBits() > 8 * u) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")";

                    for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0;) {
                      o.putBit(!1);
                    }

                    for (; !(o.getLengthInBits() >= 8 * u || (o.put(236, 8), o.getLengthInBits() >= 8 * u));) {
                      o.put(17, 8);
                    }

                    return function (t, r) {
                      for (var e = 0, n = 0, o = 0, i = new Array(r.length), a = new Array(r.length), u = 0; u < r.length; u += 1) {
                        var h = r[u].dataCount,
                            f = r[u].totalCount - h;
                        n = Math.max(n, h), o = Math.max(o, f), i[u] = new Array(h);

                        for (var d = 0; d < i[u].length; d += 1) {
                          i[u][d] = 255 & t.getBuffer()[d + e];
                        }

                        e += h;
                        var l = s.getErrorCorrectPolynomial(f),
                            g = c(i[u], l.getLength() - 1).mod(l);

                        for (a[u] = new Array(l.getLength() - 1), d = 0; d < a[u].length; d += 1) {
                          var p = d + g.getLength() - a[u].length;
                          a[u][d] = p >= 0 ? g.getAt(p) : 0;
                        }
                      }

                      var v = 0;

                      for (d = 0; d < r.length; d += 1) {
                        v += r[d].totalCount;
                      }

                      var y = new Array(v),
                          w = 0;

                      for (d = 0; d < n; d += 1) {
                        for (u = 0; u < r.length; u += 1) {
                          d < i[u].length && (y[w] = i[u][d], w += 1);
                        }
                      }

                      for (d = 0; d < o; d += 1) {
                        for (u = 0; u < r.length; u += 1) {
                          d < a[u].length && (y[w] = a[u][d], w += 1);
                        }
                      }

                      return y;
                    }(o, n);
                  };

                  y.addData = function (t, r) {
                    var e = null;

                    switch (r = r || "Byte") {
                      case "Numeric":
                        e = d(t);
                        break;

                      case "Alphanumeric":
                        e = l(t);
                        break;

                      case "Byte":
                        e = g(t);
                        break;

                      case "Kanji":
                        e = p(t);
                        break;

                      default:
                        throw "mode:" + r;
                    }

                    v.push(e), u = null;
                  }, y.isDark = function (t, r) {
                    if (t < 0 || i <= t || r < 0 || i <= r) throw t + "," + r;
                    return o[t][r];
                  }, y.getModuleCount = function () {
                    return i;
                  }, y.make = function () {
                    if (e < 1) {
                      for (var t = 1; t < 40; t++) {
                        for (var r = h.getRSBlocks(t, n), o = f(), i = 0; i < v.length; i++) {
                          var a = v[i];
                          o.put(a.getMode(), 4), o.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(o);
                        }

                        var u = 0;

                        for (i = 0; i < r.length; i++) {
                          u += r[i].dataCount;
                        }

                        if (o.getLengthInBits() <= 8 * u) break;
                      }

                      e = t;
                    }

                    x(!1, function () {
                      for (var t = 0, r = 0, e = 0; e < 8; e += 1) {
                        x(!0, e);
                        var n = s.getLostPoint(y);
                        (0 == e || t > n) && (t = n, r = e);
                      }

                      return r;
                    }());
                  }, y.createTableTag = function (t, r) {
                    t = t || 2;
                    var e = "";
                    e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + (r = void 0 === r ? 4 * t : r) + "px;", e += '">', e += "<tbody>";

                    for (var n = 0; n < y.getModuleCount(); n += 1) {
                      e += "<tr>";

                      for (var o = 0; o < y.getModuleCount(); o += 1) {
                        e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + t + "px;", e += " height: " + t + "px;", e += " background-color: ", e += y.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
                      }

                      e += "</tr>";
                    }

                    return (e += "</tbody>") + "</table>";
                  }, y.createSvgTag = function (t, r, e, n) {
                    var o = {};
                    "object" == _typeof(arguments[0]) && (t = (o = arguments[0]).cellSize, r = o.margin, e = o.alt, n = o.title), t = t || 2, r = void 0 === r ? 4 * t : r, (e = "string" == typeof e ? {
                      text: e
                    } : e || {}).text = e.text || null, e.id = e.text ? e.id || "qrcode-description" : null, (n = "string" == typeof n ? {
                      text: n
                    } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
                    var i,
                        a,
                        s,
                        u,
                        c = y.getModuleCount() * t + 2 * r,
                        h = "";

                    for (u = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", h += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', h += o.scalable ? "" : ' width="' + c + 'px" height="' + c + 'px"', h += ' viewBox="0 0 ' + c + " " + c + '" ', h += ' preserveAspectRatio="xMinYMin meet"', h += n.text || e.text ? ' role="img" aria-labelledby="' + k([n.id, e.id].join(" ").trim()) + '"' : "", h += ">", h += n.text ? '<title id="' + k(n.id) + '">' + k(n.text) + "</title>" : "", h += e.text ? '<description id="' + k(e.id) + '">' + k(e.text) + "</description>" : "", h += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', h += '<path d="', a = 0; a < y.getModuleCount(); a += 1) {
                      for (s = a * t + r, i = 0; i < y.getModuleCount(); i += 1) {
                        y.isDark(a, i) && (h += "M" + (i * t + r) + "," + s + u);
                      }
                    }

                    return (h += '" stroke="transparent" fill="black"/>') + "</svg>";
                  }, y.createDataURL = function (t, r) {
                    t = t || 2, r = void 0 === r ? 4 * t : r;
                    var e = y.getModuleCount() * t + 2 * r,
                        n = r,
                        o = e - r;
                    return w(e, e, function (r, e) {
                      if (n <= r && r < o && n <= e && e < o) {
                        var i = Math.floor((r - n) / t),
                            a = Math.floor((e - n) / t);
                        return y.isDark(a, i) ? 0 : 1;
                      }

                      return 1;
                    });
                  }, y.createImgTag = function (t, r, e) {
                    t = t || 2, r = void 0 === r ? 4 * t : r;
                    var n = y.getModuleCount() * t + 2 * r,
                        o = "";
                    return o += "<img", o += ' src="', o += y.createDataURL(t, r), o += '"', o += ' width="', o += n, o += '"', o += ' height="', o += n, o += '"', e && (o += ' alt="', o += k(e), o += '"'), o + "/>";
                  };

                  var k = function k(t) {
                    for (var r = "", e = 0; e < t.length; e += 1) {
                      var n = t.charAt(e);

                      switch (n) {
                        case "<":
                          r += "&lt;";
                          break;

                        case ">":
                          r += "&gt;";
                          break;

                        case "&":
                          r += "&amp;";
                          break;

                        case '"':
                          r += "&quot;";
                          break;

                        default:
                          r += n;
                      }
                    }

                    return r;
                  };

                  return y.createASCII = function (t, r) {
                    if ((t = t || 1) < 2) return function (t) {
                      t = void 0 === t ? 2 : t;
                      var r,
                          e,
                          n,
                          o,
                          i,
                          a = 1 * y.getModuleCount() + 2 * t,
                          s = t,
                          u = a - t,
                          c = {
                        "██": "█",
                        "█ ": "▀",
                        " █": "▄",
                        "  ": " "
                      },
                          h = {
                        "██": "▀",
                        "█ ": "▀",
                        " █": " ",
                        "  ": " "
                      },
                          f = "";

                      for (r = 0; r < a; r += 2) {
                        for (n = Math.floor((r - s) / 1), o = Math.floor((r + 1 - s) / 1), e = 0; e < a; e += 1) {
                          i = "█", s <= e && e < u && s <= r && r < u && y.isDark(n, Math.floor((e - s) / 1)) && (i = " "), s <= e && e < u && s <= r + 1 && r + 1 < u && y.isDark(o, Math.floor((e - s) / 1)) ? i += " " : i += "█", f += t < 1 && r + 1 >= u ? h[i] : c[i];
                        }

                        f += "\n";
                      }

                      return a % 2 && t > 0 ? f.substring(0, f.length - a - 1) + Array(a + 1).join("▀") : f.substring(0, f.length - 1);
                    }(r);
                    t -= 1, r = void 0 === r ? 2 * t : r;
                    var e,
                        n,
                        o,
                        i,
                        a = y.getModuleCount() * t + 2 * r,
                        s = r,
                        u = a - r,
                        c = Array(t + 1).join("██"),
                        h = Array(t + 1).join("  "),
                        f = "",
                        d = "";

                    for (e = 0; e < a; e += 1) {
                      for (o = Math.floor((e - s) / t), d = "", n = 0; n < a; n += 1) {
                        i = 1, s <= n && n < u && s <= e && e < u && y.isDark(o, Math.floor((n - s) / t)) && (i = 0), d += i ? c : h;
                      }

                      for (o = 0; o < t; o += 1) {
                        f += d + "\n";
                      }
                    }

                    return f.substring(0, f.length - 1);
                  }, y.renderTo2dContext = function (t, r) {
                    r = r || 2;

                    for (var e = y.getModuleCount(), n = 0; n < e; n++) {
                      for (var o = 0; o < e; o++) {
                        t.fillStyle = y.isDark(n, o) ? "black" : "white", t.fillRect(n * r, o * r, r, r);
                      }
                    }
                  }, y;
                };

                t.stringToBytes = (t.stringToBytesFuncs = {
                  "default": function _default(t) {
                    for (var r = [], e = 0; e < t.length; e += 1) {
                      var n = t.charCodeAt(e);
                      r.push(255 & n);
                    }

                    return r;
                  }
                })["default"], t.createStringToBytes = function (t, r) {
                  var e = function () {
                    for (var e = y(t), n = function n() {
                      var t = e.read();
                      if (-1 == t) throw "eof";
                      return t;
                    }, o = 0, i = {};;) {
                      var a = e.read();
                      if (-1 == a) break;
                      var s = n(),
                          u = n() << 8 | n();
                      i[String.fromCharCode(a << 8 | s)] = u, o += 1;
                    }

                    if (o != r) throw o + " != " + r;
                    return i;
                  }(),
                      n = "?".charCodeAt(0);

                  return function (t) {
                    for (var r = [], o = 0; o < t.length; o += 1) {
                      var i = t.charCodeAt(o);
                      if (i < 128) r.push(i);else {
                        var a = e[t.charAt(o)];
                        "number" == typeof a ? (255 & a) == a ? r.push(a) : (r.push(a >>> 8), r.push(255 & a)) : r.push(n);
                      }
                    }

                    return r;
                  };
                };

                var r,
                    e,
                    n,
                    o,
                    i,
                    a = {
                  L: 1,
                  M: 0,
                  Q: 3,
                  H: 2
                },
                    s = (r = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], e = 1335, n = 7973, i = function i(t) {
                  for (var r = 0; 0 != t;) {
                    r += 1, t >>>= 1;
                  }

                  return r;
                }, (o = {}).getBCHTypeInfo = function (t) {
                  for (var r = t << 10; i(r) - i(e) >= 0;) {
                    r ^= e << i(r) - i(e);
                  }

                  return 21522 ^ (t << 10 | r);
                }, o.getBCHTypeNumber = function (t) {
                  for (var r = t << 12; i(r) - i(n) >= 0;) {
                    r ^= n << i(r) - i(n);
                  }

                  return t << 12 | r;
                }, o.getPatternPosition = function (t) {
                  return r[t - 1];
                }, o.getMaskFunction = function (t) {
                  switch (t) {
                    case 0:
                      return function (t, r) {
                        return (t + r) % 2 == 0;
                      };

                    case 1:
                      return function (t, r) {
                        return t % 2 == 0;
                      };

                    case 2:
                      return function (t, r) {
                        return r % 3 == 0;
                      };

                    case 3:
                      return function (t, r) {
                        return (t + r) % 3 == 0;
                      };

                    case 4:
                      return function (t, r) {
                        return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                      };

                    case 5:
                      return function (t, r) {
                        return t * r % 2 + t * r % 3 == 0;
                      };

                    case 6:
                      return function (t, r) {
                        return (t * r % 2 + t * r % 3) % 2 == 0;
                      };

                    case 7:
                      return function (t, r) {
                        return (t * r % 3 + (t + r) % 2) % 2 == 0;
                      };

                    default:
                      throw "bad maskPattern:" + t;
                  }
                }, o.getErrorCorrectPolynomial = function (t) {
                  for (var r = c([1], 0), e = 0; e < t; e += 1) {
                    r = r.multiply(c([1, u.gexp(e)], 0));
                  }

                  return r;
                }, o.getLengthInBits = function (t, r) {
                  if (1 <= r && r < 10) switch (t) {
                    case 1:
                      return 10;

                    case 2:
                      return 9;

                    case 4:
                    case 8:
                      return 8;

                    default:
                      throw "mode:" + t;
                  } else if (r < 27) switch (t) {
                    case 1:
                      return 12;

                    case 2:
                      return 11;

                    case 4:
                      return 16;

                    case 8:
                      return 10;

                    default:
                      throw "mode:" + t;
                  } else {
                    if (!(r < 41)) throw "type:" + r;

                    switch (t) {
                      case 1:
                        return 14;

                      case 2:
                        return 13;

                      case 4:
                        return 16;

                      case 8:
                        return 12;

                      default:
                        throw "mode:" + t;
                    }
                  }
                }, o.getLostPoint = function (t) {
                  for (var r = t.getModuleCount(), e = 0, n = 0; n < r; n += 1) {
                    for (var o = 0; o < r; o += 1) {
                      for (var i = 0, a = t.isDark(n, o), s = -1; s <= 1; s += 1) {
                        if (!(n + s < 0 || r <= n + s)) for (var u = -1; u <= 1; u += 1) {
                          o + u < 0 || r <= o + u || 0 == s && 0 == u || a == t.isDark(n + s, o + u) && (i += 1);
                        }
                      }

                      i > 5 && (e += 3 + i - 5);
                    }
                  }

                  for (n = 0; n < r - 1; n += 1) {
                    for (o = 0; o < r - 1; o += 1) {
                      var c = 0;
                      t.isDark(n, o) && (c += 1), t.isDark(n + 1, o) && (c += 1), t.isDark(n, o + 1) && (c += 1), t.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3);
                    }
                  }

                  for (n = 0; n < r; n += 1) {
                    for (o = 0; o < r - 6; o += 1) {
                      t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (e += 40);
                    }
                  }

                  for (o = 0; o < r; o += 1) {
                    for (n = 0; n < r - 6; n += 1) {
                      t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (e += 40);
                    }
                  }

                  var h = 0;

                  for (o = 0; o < r; o += 1) {
                    for (n = 0; n < r; n += 1) {
                      t.isDark(n, o) && (h += 1);
                    }
                  }

                  return e + Math.abs(100 * h / r / r - 50) / 5 * 10;
                }, o),
                    u = function () {
                  for (var t = new Array(256), r = new Array(256), e = 0; e < 8; e += 1) {
                    t[e] = 1 << e;
                  }

                  for (e = 8; e < 256; e += 1) {
                    t[e] = t[e - 4] ^ t[e - 5] ^ t[e - 6] ^ t[e - 8];
                  }

                  for (e = 0; e < 255; e += 1) {
                    r[t[e]] = e;
                  }

                  return {
                    glog: function glog(t) {
                      if (t < 1) throw "glog(" + t + ")";
                      return r[t];
                    },
                    gexp: function gexp(r) {
                      for (; r < 0;) {
                        r += 255;
                      }

                      for (; r >= 256;) {
                        r -= 255;
                      }

                      return t[r];
                    }
                  };
                }();

                function c(t, r) {
                  if (void 0 === t.length) throw t.length + "/" + r;

                  var e = function () {
                    for (var e = 0; e < t.length && 0 == t[e];) {
                      e += 1;
                    }

                    for (var n = new Array(t.length - e + r), o = 0; o < t.length - e; o += 1) {
                      n[o] = t[o + e];
                    }

                    return n;
                  }(),
                      n = {
                    getAt: function getAt(t) {
                      return e[t];
                    },
                    getLength: function getLength() {
                      return e.length;
                    },
                    multiply: function multiply(t) {
                      for (var r = new Array(n.getLength() + t.getLength() - 1), e = 0; e < n.getLength(); e += 1) {
                        for (var o = 0; o < t.getLength(); o += 1) {
                          r[e + o] ^= u.gexp(u.glog(n.getAt(e)) + u.glog(t.getAt(o)));
                        }
                      }

                      return c(r, 0);
                    },
                    mod: function mod(t) {
                      if (n.getLength() - t.getLength() < 0) return n;

                      for (var r = u.glog(n.getAt(0)) - u.glog(t.getAt(0)), e = new Array(n.getLength()), o = 0; o < n.getLength(); o += 1) {
                        e[o] = n.getAt(o);
                      }

                      for (o = 0; o < t.getLength(); o += 1) {
                        e[o] ^= u.gexp(u.glog(t.getAt(o)) + r);
                      }

                      return c(e, 0).mod(t);
                    }
                  };

                  return n;
                }

                var h = function () {
                  var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                      r = function r(t, _r) {
                    var e = {};
                    return e.totalCount = t, e.dataCount = _r, e;
                  },
                      e = {
                    getRSBlocks: function getRSBlocks(e, n) {
                      var o = function (r, e) {
                        switch (e) {
                          case a.L:
                            return t[4 * (r - 1) + 0];

                          case a.M:
                            return t[4 * (r - 1) + 1];

                          case a.Q:
                            return t[4 * (r - 1) + 2];

                          case a.H:
                            return t[4 * (r - 1) + 3];

                          default:
                            return;
                        }
                      }(e, n);

                      if (void 0 === o) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + n;

                      for (var i = o.length / 3, s = [], u = 0; u < i; u += 1) {
                        for (var c = o[3 * u + 0], h = o[3 * u + 1], f = o[3 * u + 2], d = 0; d < c; d += 1) {
                          s.push(r(h, f));
                        }
                      }

                      return s;
                    }
                  };

                  return e;
                }(),
                    f = function f() {
                  var t = [],
                      r = 0,
                      e = {
                    getBuffer: function getBuffer() {
                      return t;
                    },
                    getAt: function getAt(r) {
                      var e = Math.floor(r / 8);
                      return 1 == (t[e] >>> 7 - r % 8 & 1);
                    },
                    put: function put(t, r) {
                      for (var n = 0; n < r; n += 1) {
                        e.putBit(1 == (t >>> r - n - 1 & 1));
                      }
                    },
                    getLengthInBits: function getLengthInBits() {
                      return r;
                    },
                    putBit: function putBit(e) {
                      var n = Math.floor(r / 8);
                      t.length <= n && t.push(0), e && (t[n] |= 128 >>> r % 8), r += 1;
                    }
                  };
                  return e;
                },
                    d = function d(t) {
                  var r = t,
                      e = {
                    getMode: function getMode() {
                      return 1;
                    },
                    getLength: function getLength(t) {
                      return r.length;
                    },
                    write: function write(t) {
                      for (var e = r, o = 0; o + 2 < e.length;) {
                        t.put(n(e.substring(o, o + 3)), 10), o += 3;
                      }

                      o < e.length && (e.length - o == 1 ? t.put(n(e.substring(o, o + 1)), 4) : e.length - o == 2 && t.put(n(e.substring(o, o + 2)), 7));
                    }
                  },
                      n = function n(t) {
                    for (var r = 0, e = 0; e < t.length; e += 1) {
                      r = 10 * r + o(t.charAt(e));
                    }

                    return r;
                  },
                      o = function o(t) {
                    if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                    throw "illegal char :" + t;
                  };

                  return e;
                },
                    l = function l(t) {
                  var r = t,
                      e = {
                    getMode: function getMode() {
                      return 2;
                    },
                    getLength: function getLength(t) {
                      return r.length;
                    },
                    write: function write(t) {
                      for (var e = r, o = 0; o + 1 < e.length;) {
                        t.put(45 * n(e.charAt(o)) + n(e.charAt(o + 1)), 11), o += 2;
                      }

                      o < e.length && t.put(n(e.charAt(o)), 6);
                    }
                  },
                      n = function n(t) {
                    if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                    if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;

                    switch (t) {
                      case " ":
                        return 36;

                      case "$":
                        return 37;

                      case "%":
                        return 38;

                      case "*":
                        return 39;

                      case "+":
                        return 40;

                      case "-":
                        return 41;

                      case ".":
                        return 42;

                      case "/":
                        return 43;

                      case ":":
                        return 44;

                      default:
                        throw "illegal char :" + t;
                    }
                  };

                  return e;
                },
                    g = function g(r) {
                  var e = t.stringToBytes(r);
                  return {
                    getMode: function getMode() {
                      return 4;
                    },
                    getLength: function getLength(t) {
                      return e.length;
                    },
                    write: function write(t) {
                      for (var r = 0; r < e.length; r += 1) {
                        t.put(e[r], 8);
                      }
                    }
                  };
                },
                    p = function p(r) {
                  var e = t.stringToBytesFuncs.SJIS;
                  if (!e) throw "sjis not supported.";
                  !function (t, r) {
                    var n = e("友");
                    if (2 != n.length || 38726 != (n[0] << 8 | n[1])) throw "sjis not supported.";
                  }();
                  var n = e(r);
                  return {
                    getMode: function getMode() {
                      return 8;
                    },
                    getLength: function getLength(t) {
                      return ~~(n.length / 2);
                    },
                    write: function write(t) {
                      for (var r = n, e = 0; e + 1 < r.length;) {
                        var o = (255 & r[e]) << 8 | 255 & r[e + 1];
                        if (33088 <= o && o <= 40956) o -= 33088;else {
                          if (!(57408 <= o && o <= 60351)) throw "illegal char at " + (e + 1) + "/" + o;
                          o -= 49472;
                        }
                        o = 192 * (o >>> 8 & 255) + (255 & o), t.put(o, 13), e += 2;
                      }

                      if (e < r.length) throw "illegal char at " + (e + 1);
                    }
                  };
                },
                    v = function v() {
                  var t = [],
                      r = {
                    writeByte: function writeByte(r) {
                      t.push(255 & r);
                    },
                    writeShort: function writeShort(t) {
                      r.writeByte(t), r.writeByte(t >>> 8);
                    },
                    writeBytes: function writeBytes(t, e, n) {
                      e = e || 0, n = n || t.length;

                      for (var o = 0; o < n; o += 1) {
                        r.writeByte(t[o + e]);
                      }
                    },
                    writeString: function writeString(t) {
                      for (var e = 0; e < t.length; e += 1) {
                        r.writeByte(t.charCodeAt(e));
                      }
                    },
                    toByteArray: function toByteArray() {
                      return t;
                    },
                    toString: function toString() {
                      var r = "";
                      r += "[";

                      for (var e = 0; e < t.length; e += 1) {
                        e > 0 && (r += ","), r += t[e];
                      }

                      return r + "]";
                    }
                  };
                  return r;
                },
                    y = function y(t) {
                  var r = t,
                      e = 0,
                      n = 0,
                      o = 0,
                      i = {
                    read: function read() {
                      for (; o < 8;) {
                        if (e >= r.length) {
                          if (0 == o) return -1;
                          throw "unexpected end of file./" + o;
                        }

                        var t = r.charAt(e);
                        if (e += 1, "=" == t) return o = 0, -1;
                        t.match(/^\s$/) || (n = n << 6 | a(t.charCodeAt(0)), o += 6);
                      }

                      var i = n >>> o - 8 & 255;
                      return o -= 8, i;
                    }
                  },
                      a = function a(t) {
                    if (65 <= t && t <= 90) return t - 65;
                    if (97 <= t && t <= 122) return t - 97 + 26;
                    if (48 <= t && t <= 57) return t - 48 + 52;
                    if (43 == t) return 62;
                    if (47 == t) return 63;
                    throw "c:" + t;
                  };

                  return i;
                },
                    w = function w(t, r, e) {
                  for (var n = function (t, r) {
                    var e = t,
                        n = r,
                        o = new Array(t * r),
                        i = {
                      setPixel: function setPixel(t, r, n) {
                        o[r * e + t] = n;
                      },
                      write: function write(t) {
                        t.writeString("GIF87a"), t.writeShort(e), t.writeShort(n), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(e), t.writeShort(n), t.writeByte(0);
                        var r = a(2);
                        t.writeByte(2);

                        for (var o = 0; r.length - o > 255;) {
                          t.writeByte(255), t.writeBytes(r, o, 255), o += 255;
                        }

                        t.writeByte(r.length - o), t.writeBytes(r, o, r.length - o), t.writeByte(0), t.writeString(";");
                      }
                    },
                        a = function a(t) {
                      for (var r = 1 << t, e = 1 + (1 << t), n = t + 1, i = s(), a = 0; a < r; a += 1) {
                        i.add(String.fromCharCode(a));
                      }

                      i.add(String.fromCharCode(r)), i.add(String.fromCharCode(e));
                      var u,
                          c,
                          h,
                          f = v(),
                          d = (u = f, c = 0, h = 0, {
                        write: function write(t, r) {
                          if (t >>> r != 0) throw "length over";

                          for (; c + r >= 8;) {
                            u.writeByte(255 & (t << c | h)), r -= 8 - c, t >>>= 8 - c, h = 0, c = 0;
                          }

                          h |= t << c, c += r;
                        },
                        flush: function flush() {
                          c > 0 && u.writeByte(h);
                        }
                      });
                      d.write(r, n);
                      var l = 0,
                          g = String.fromCharCode(o[l]);

                      for (l += 1; l < o.length;) {
                        var p = String.fromCharCode(o[l]);
                        l += 1, i.contains(g + p) ? g += p : (d.write(i.indexOf(g), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(g + p)), g = p);
                      }

                      return d.write(i.indexOf(g), n), d.write(e, n), d.flush(), f.toByteArray();
                    },
                        s = function s() {
                      var t = {},
                          r = 0,
                          e = {
                        add: function add(n) {
                          if (e.contains(n)) throw "dup key:" + n;
                          t[n] = r, r += 1;
                        },
                        size: function size() {
                          return r;
                        },
                        indexOf: function indexOf(r) {
                          return t[r];
                        },
                        contains: function contains(r) {
                          return void 0 !== t[r];
                        }
                      };
                      return e;
                    };

                    return i;
                  }(t, r), o = 0; o < r; o += 1) {
                    for (var i = 0; i < t; i += 1) {
                      n.setPixel(i, o, e(i, o));
                    }
                  }

                  var a = v();
                  n.write(a);

                  for (var s = function () {
                    var t = 0,
                        r = 0,
                        e = 0,
                        n = "",
                        o = {},
                        i = function i(t) {
                      n += String.fromCharCode(a(63 & t));
                    },
                        a = function a(t) {
                      if (t < 0) ;else {
                        if (t < 26) return 65 + t;
                        if (t < 52) return t - 26 + 97;
                        if (t < 62) return t - 52 + 48;
                        if (62 == t) return 43;
                        if (63 == t) return 47;
                      }
                      throw "n:" + t;
                    };

                    return o.writeByte = function (n) {
                      for (t = t << 8 | 255 & n, r += 8, e += 1; r >= 6;) {
                        i(t >>> r - 6), r -= 6;
                      }
                    }, o.flush = function () {
                      if (r > 0 && (i(t << 6 - r), t = 0, r = 0), e % 3 != 0) for (var o = 3 - e % 3, a = 0; a < o; a += 1) {
                        n += "=";
                      }
                    }, o.toString = function () {
                      return n;
                    }, o;
                  }(), u = a.toByteArray(), c = 0; c < u.length; c += 1) {
                    s.writeByte(u[c]);
                  }

                  return s.flush(), "data:image/gif;base64," + s;
                };

                return t;
              }();

              o.stringToBytesFuncs["UTF-8"] = function (t) {
                return function (t) {
                  for (var r = [], e = 0; e < t.length; e++) {
                    var n = t.charCodeAt(e);
                    n < 128 ? r.push(n) : n < 2048 ? r.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? r.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(e)), r.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
                  }

                  return r;
                }(t);
              }, void 0 === (n = "function" == typeof (e = function e() {
                return o;
              }) ? e.apply(r, []) : e) || (t.exports = n);
            },
            151: function _(t, r, e) {
              "use strict";

              e.d(r, {
                "default": function _default() {
                  return O;
                }
              });

              var _n = function n() {
                return (_n = Object.assign || function (t) {
                  for (var r, e = 1, n = arguments.length; e < n; e++) {
                    for (var o in r = arguments[e]) {
                      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                    }
                  }

                  return t;
                }).apply(this, arguments);
              },
                  o = function o() {
                for (var t = 0, r = 0, e = arguments.length; r < e; r++) {
                  t += arguments[r].length;
                }

                var n = Array(t),
                    o = 0;

                for (r = 0; r < e; r++) {
                  for (var i = arguments[r], a = 0, s = i.length; a < s; a++, o++) {
                    n[o] = i[a];
                  }
                }

                return n;
              },
                  i = function i(t) {
                return !!t && "object" == _typeof(t) && !Array.isArray(t);
              };

              function a(t) {
                for (var r = [], e = 1; e < arguments.length; e++) {
                  r[e - 1] = arguments[e];
                }

                if (!r.length) return t;
                var s = r.shift();
                return void 0 !== s && i(t) && i(s) ? (t = _n({}, t), Object.keys(s).forEach(function (r) {
                  var e = t[r],
                      n = s[r];
                  Array.isArray(e) && Array.isArray(n) ? t[r] = n : i(e) && i(n) ? t[r] = a(Object.assign({}, e), n) : t[r] = n;
                }), a.apply(void 0, o([t], r))) : t;
              }

              var s = {
                L: .07,
                M: .15,
                Q: .25,
                H: .3
              };

              var _u = function u() {
                return (_u = Object.assign || function (t) {
                  for (var r, e = 1, n = arguments.length; e < n; e++) {
                    for (var o in r = arguments[e]) {
                      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                    }
                  }

                  return t;
                }).apply(this, arguments);
              };

              var c = function () {
                function t(t) {
                  var r = t.context,
                      e = t.type;
                  this._context = r, this._type = e;
                }

                return t.prototype.draw = function (t, r, e, n) {
                  var o,
                      i = this._context;

                  switch (this._type) {
                    case "dots":
                      o = this._drawDot;
                      break;

                    case "classy":
                      o = this._drawClassy;
                      break;

                    case "classy-rounded":
                      o = this._drawClassyRounded;
                      break;

                    case "rounded":
                      o = this._drawRounded;
                      break;

                    case "extra-rounded":
                      o = this._drawExtraRounded;
                      break;

                    case "square":
                    default:
                      o = this._drawSquare;
                  }

                  o.call(this, {
                    x: t,
                    y: r,
                    size: e,
                    context: i,
                    getNeighbor: n
                  });
                }, t.prototype._rotateFigure = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation,
                      a = t.draw,
                      s = r + n / 2,
                      u = e + n / 2;
                  o.translate(s, u), i && o.rotate(i), a(), o.closePath(), i && o.rotate(-i), o.translate(-s, -u);
                }, t.prototype._basicDot = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.arc(0, 0, r / 2, 0, 2 * Math.PI);
                    }
                  }));
                }, t.prototype._basicSquare = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.rect(-r / 2, -r / 2, r, r);
                    }
                  }));
                }, t.prototype._basicSideRounded = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.arc(0, 0, r / 2, -Math.PI / 2, Math.PI / 2), e.lineTo(-r / 2, r / 2), e.lineTo(-r / 2, -r / 2), e.lineTo(0, -r / 2);
                    }
                  }));
                }, t.prototype._basicCornerRounded = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.arc(0, 0, r / 2, -Math.PI / 2, 0), e.lineTo(r / 2, r / 2), e.lineTo(-r / 2, r / 2), e.lineTo(-r / 2, -r / 2), e.lineTo(0, -r / 2);
                    }
                  }));
                }, t.prototype._basicCornerExtraRounded = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.arc(-r / 2, r / 2, r, -Math.PI / 2, 0), e.lineTo(-r / 2, r / 2), e.lineTo(-r / 2, -r / 2);
                    }
                  }));
                }, t.prototype._basicCornersRounded = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.arc(0, 0, r / 2, -Math.PI / 2, 0), e.lineTo(r / 2, r / 2), e.lineTo(0, r / 2), e.arc(0, 0, r / 2, Math.PI / 2, Math.PI), e.lineTo(-r / 2, -r / 2), e.lineTo(0, -r / 2);
                    }
                  }));
                }, t.prototype._basicCornersExtraRounded = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_u(_u({}, t), {
                    draw: function draw() {
                      e.arc(-r / 2, r / 2, r, -Math.PI / 2, 0), e.arc(r / 2, -r / 2, r, Math.PI / 2, Math.PI);
                    }
                  }));
                }, t.prototype._drawDot = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context;

                  this._basicDot({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: 0
                  });
                }, t.prototype._drawSquare = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context;

                  this._basicSquare({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: 0
                  });
                }, t.prototype._drawRounded = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.getNeighbor,
                      a = +i(-1, 0),
                      s = +i(1, 0),
                      u = +i(0, -1),
                      c = +i(0, 1),
                      h = a + s + u + c;
                  if (0 !== h) {
                    if (h > 2 || a && s || u && c) this._basicSquare({
                      x: r,
                      y: e,
                      size: n,
                      context: o,
                      rotation: 0
                    });else {
                      if (2 === h) {
                        var f = 0;
                        return a && u ? f = Math.PI / 2 : u && s ? f = Math.PI : s && c && (f = -Math.PI / 2), void this._basicCornerRounded({
                          x: r,
                          y: e,
                          size: n,
                          context: o,
                          rotation: f
                        });
                      }

                      if (1 === h) return f = 0, u ? f = Math.PI / 2 : s ? f = Math.PI : c && (f = -Math.PI / 2), void this._basicSideRounded({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: f
                      });
                    }
                  } else this._basicDot({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: 0
                  });
                }, t.prototype._drawExtraRounded = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.getNeighbor,
                      a = +i(-1, 0),
                      s = +i(1, 0),
                      u = +i(0, -1),
                      c = +i(0, 1),
                      h = a + s + u + c;
                  if (0 !== h) {
                    if (h > 2 || a && s || u && c) this._basicSquare({
                      x: r,
                      y: e,
                      size: n,
                      context: o,
                      rotation: 0
                    });else {
                      if (2 === h) {
                        var f = 0;
                        return a && u ? f = Math.PI / 2 : u && s ? f = Math.PI : s && c && (f = -Math.PI / 2), void this._basicCornerExtraRounded({
                          x: r,
                          y: e,
                          size: n,
                          context: o,
                          rotation: f
                        });
                      }

                      if (1 === h) return f = 0, u ? f = Math.PI / 2 : s ? f = Math.PI : c && (f = -Math.PI / 2), void this._basicSideRounded({
                        x: r,
                        y: e,
                        size: n,
                        context: o,
                        rotation: f
                      });
                    }
                  } else this._basicDot({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: 0
                  });
                }, t.prototype._drawClassy = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.getNeighbor,
                      a = +i(-1, 0),
                      s = +i(1, 0),
                      u = +i(0, -1),
                      c = +i(0, 1);
                  0 !== a + s + u + c ? a || u ? s || c ? this._basicSquare({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: 0
                  }) : this._basicCornerRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: Math.PI / 2
                  }) : this._basicCornerRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: -Math.PI / 2
                  }) : this._basicCornersRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: Math.PI / 2
                  });
                }, t.prototype._drawClassyRounded = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.getNeighbor,
                      a = +i(-1, 0),
                      s = +i(1, 0),
                      u = +i(0, -1),
                      c = +i(0, 1);
                  0 !== a + s + u + c ? a || u ? s || c ? this._basicSquare({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: 0
                  }) : this._basicCornerExtraRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: Math.PI / 2
                  }) : this._basicCornerExtraRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: -Math.PI / 2
                  }) : this._basicCornersRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: Math.PI / 2
                  });
                }, t;
              }();

              var _h = function h() {
                return (_h = Object.assign || function (t) {
                  for (var r, e = 1, n = arguments.length; e < n; e++) {
                    for (var o in r = arguments[e]) {
                      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                    }
                  }

                  return t;
                }).apply(this, arguments);
              };

              var f = function () {
                function t(t) {
                  var r = t.context,
                      e = t.type;
                  this._context = r, this._type = e;
                }

                return t.prototype.draw = function (t, r, e, n) {
                  var o,
                      i = this._context;

                  switch (this._type) {
                    case "square":
                      o = this._drawSquare;
                      break;

                    case "extra-rounded":
                      o = this._drawExtraRounded;
                      break;

                    case "dot":
                    default:
                      o = this._drawDot;
                  }

                  o.call(this, {
                    x: t,
                    y: r,
                    size: e,
                    context: i,
                    rotation: n
                  });
                }, t.prototype._rotateFigure = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation,
                      a = t.draw,
                      s = r + n / 2,
                      u = e + n / 2;
                  o.translate(s, u), i && o.rotate(i), a(), o.closePath(), i && o.rotate(-i), o.translate(-s, -u);
                }, t.prototype._basicDot = function (t) {
                  var r = t.size,
                      e = t.context,
                      n = r / 7;

                  this._rotateFigure(_h(_h({}, t), {
                    draw: function draw() {
                      e.arc(0, 0, r / 2, 0, 2 * Math.PI), e.arc(0, 0, r / 2 - n, 0, 2 * Math.PI);
                    }
                  }));
                }, t.prototype._basicSquare = function (t) {
                  var r = t.size,
                      e = t.context,
                      n = r / 7;

                  this._rotateFigure(_h(_h({}, t), {
                    draw: function draw() {
                      e.rect(-r / 2, -r / 2, r, r), e.rect(-r / 2 + n, -r / 2 + n, r - 2 * n, r - 2 * n);
                    }
                  }));
                }, t.prototype._basicExtraRounded = function (t) {
                  var r = t.size,
                      e = t.context,
                      n = r / 7;

                  this._rotateFigure(_h(_h({}, t), {
                    draw: function draw() {
                      e.arc(-n, -n, 2.5 * n, Math.PI, -Math.PI / 2), e.lineTo(n, -3.5 * n), e.arc(n, -n, 2.5 * n, -Math.PI / 2, 0), e.lineTo(3.5 * n, -n), e.arc(n, n, 2.5 * n, 0, Math.PI / 2), e.lineTo(-n, 3.5 * n), e.arc(-n, n, 2.5 * n, Math.PI / 2, Math.PI), e.lineTo(-3.5 * n, -n), e.arc(-n, -n, 1.5 * n, Math.PI, -Math.PI / 2), e.lineTo(n, -2.5 * n), e.arc(n, -n, 1.5 * n, -Math.PI / 2, 0), e.lineTo(2.5 * n, -n), e.arc(n, n, 1.5 * n, 0, Math.PI / 2), e.lineTo(-n, 2.5 * n), e.arc(-n, n, 1.5 * n, Math.PI / 2, Math.PI), e.lineTo(-2.5 * n, -n);
                    }
                  }));
                }, t.prototype._drawDot = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation;

                  this._basicDot({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: i
                  });
                }, t.prototype._drawSquare = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation;

                  this._basicSquare({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: i
                  });
                }, t.prototype._drawExtraRounded = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation;

                  this._basicExtraRounded({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: i
                  });
                }, t;
              }();

              var _d = function d() {
                return (_d = Object.assign || function (t) {
                  for (var r, e = 1, n = arguments.length; e < n; e++) {
                    for (var o in r = arguments[e]) {
                      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                    }
                  }

                  return t;
                }).apply(this, arguments);
              };

              var l = function () {
                function t(t) {
                  var r = t.context,
                      e = t.type;
                  this._context = r, this._type = e;
                }

                return t.prototype.draw = function (t, r, e, n) {
                  var o,
                      i = this._context;

                  switch (this._type) {
                    case "square":
                      o = this._drawSquare;
                      break;

                    case "dot":
                    default:
                      o = this._drawDot;
                  }

                  o.call(this, {
                    x: t,
                    y: r,
                    size: e,
                    context: i,
                    rotation: n
                  });
                }, t.prototype._rotateFigure = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation,
                      a = t.draw,
                      s = r + n / 2,
                      u = e + n / 2;
                  o.translate(s, u), i && o.rotate(i), a(), o.closePath(), i && o.rotate(-i), o.translate(-s, -u);
                }, t.prototype._basicDot = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_d(_d({}, t), {
                    draw: function draw() {
                      e.arc(0, 0, r / 2, 0, 2 * Math.PI);
                    }
                  }));
                }, t.prototype._basicSquare = function (t) {
                  var r = t.size,
                      e = t.context;

                  this._rotateFigure(_d(_d({}, t), {
                    draw: function draw() {
                      e.rect(-r / 2, -r / 2, r, r);
                    }
                  }));
                }, t.prototype._drawDot = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation;

                  this._basicDot({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: i
                  });
                }, t.prototype._drawSquare = function (t) {
                  var r = t.x,
                      e = t.y,
                      n = t.size,
                      o = t.context,
                      i = t.rotation;

                  this._basicSquare({
                    x: r,
                    y: e,
                    size: n,
                    context: o,
                    rotation: i
                  });
                }, t;
              }();

              var g = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]],
                  p = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

              var v = function () {
                function t(t) {
                  this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
                }

                return Object.defineProperty(t.prototype, "context", {
                  get: function get() {
                    return this._canvas.getContext("2d");
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(t.prototype, "width", {
                  get: function get() {
                    return this._canvas.width;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(t.prototype, "height", {
                  get: function get() {
                    return this._canvas.height;
                  },
                  enumerable: !1,
                  configurable: !0
                }), t.prototype.getCanvas = function () {
                  return this._canvas;
                }, t.prototype.clear = function () {
                  var t = this.context;
                  t && t.clearRect(0, 0, this._canvas.width, this._canvas.height);
                }, t.prototype.drawQR = function (t) {
                  return r = this, e = void 0, o = function o() {
                    var r,
                        e,
                        n,
                        o,
                        i,
                        a,
                        u,
                        c,
                        h,
                        f = this;
                    return function (t, r) {
                      var e,
                          n,
                          o,
                          i,
                          a = {
                        label: 0,
                        sent: function sent() {
                          if (1 & o[0]) throw o[1];
                          return o[1];
                        },
                        trys: [],
                        ops: []
                      };
                      return i = {
                        next: s(0),
                        "throw": s(1),
                        "return": s(2)
                      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this;
                      }), i;

                      function s(i) {
                        return function (s) {
                          return function (i) {
                            if (e) throw new TypeError("Generator is already executing.");

                            for (; a;) {
                              try {
                                if (e = 1, n && (o = 2 & i[0] ? n["return"] : i[0] ? n["throw"] || ((o = n["return"]) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;

                                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                  case 0:
                                  case 1:
                                    o = i;
                                    break;

                                  case 4:
                                    return a.label++, {
                                      value: i[1],
                                      done: !1
                                    };

                                  case 5:
                                    a.label++, n = i[1], i = [0];
                                    continue;

                                  case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;

                                  default:
                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                      a = 0;
                                      continue;
                                    }

                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                      a.label = i[1];
                                      break;
                                    }

                                    if (6 === i[0] && a.label < o[1]) {
                                      a.label = o[1], o = i;
                                      break;
                                    }

                                    if (o && a.label < o[2]) {
                                      a.label = o[2], a.ops.push(i);
                                      break;
                                    }

                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue;
                                }

                                i = r.call(t, a);
                              } catch (t) {
                                i = [6, t], n = 0;
                              } finally {
                                e = o = 0;
                              }
                            }

                            if (5 & i[0]) throw i[1];
                            return {
                              value: i[0] ? i[1] : void 0,
                              done: !0
                            };
                          }([i, s]);
                        };
                      }
                    }(this, function (d) {
                      switch (d.label) {
                        case 0:
                          return r = t.getModuleCount(), e = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, n = Math.floor(e / r), o = {
                            hideXDots: 0,
                            hideYDots: 0,
                            width: 0,
                            height: 0
                          }, this._qr = t, this._options.image ? [4, this.loadImage()] : [3, 2];

                        case 1:
                          if (d.sent(), !this._image) return [2];
                          i = this._options, a = i.imageOptions, u = i.qrOptions, c = a.imageSize * s[u.errorCorrectionLevel], h = Math.floor(c * r * r), o = function (t) {
                            var r = t.originalHeight,
                                e = t.originalWidth,
                                n = t.maxHiddenDots,
                                o = t.maxHiddenAxisDots,
                                i = t.dotSize,
                                a = {
                              x: 0,
                              y: 0
                            },
                                s = {
                              x: 0,
                              y: 0
                            };
                            if (r <= 0 || e <= 0 || n <= 0 || i <= 0) return {
                              height: 0,
                              width: 0,
                              hideYDots: 0,
                              hideXDots: 0
                            };
                            var u = r / e;
                            return a.x = Math.floor(Math.sqrt(n / u)), a.x <= 0 && (a.x = 1), o && o < a.x && (a.x = o), a.x % 2 == 0 && a.x--, s.x = a.x * i, a.y = 1 + 2 * Math.ceil((a.x * u - 1) / 2), s.y = Math.round(s.x * u), (a.y * a.x > n || o && o < a.y) && (o && o < a.y ? (a.y = o, a.y % 2 == 0 && a.x--) : a.y -= 2, s.y = a.y * i, a.x = 1 + 2 * Math.ceil((a.y / u - 1) / 2), s.x = Math.round(s.y / u)), {
                              height: s.y,
                              width: s.x,
                              hideYDots: a.y,
                              hideXDots: a.x
                            };
                          }({
                            originalWidth: this._image.width,
                            originalHeight: this._image.height,
                            maxHiddenDots: h,
                            maxHiddenAxisDots: r - 14,
                            dotSize: n
                          }), d.label = 2;

                        case 2:
                          return this.clear(), this.drawBackground(), this.drawDots(function (t, e) {
                            var n, i, a, s, u, c;
                            return !(f._options.imageOptions.hideBackgroundDots && t >= (r - o.hideXDots) / 2 && t < (r + o.hideXDots) / 2 && e >= (r - o.hideYDots) / 2 && e < (r + o.hideYDots) / 2 || (null === (n = g[t]) || void 0 === n ? void 0 : n[e]) || (null === (i = g[t - r + 7]) || void 0 === i ? void 0 : i[e]) || (null === (a = g[t]) || void 0 === a ? void 0 : a[e - r + 7]) || (null === (s = p[t]) || void 0 === s ? void 0 : s[e]) || (null === (u = p[t - r + 7]) || void 0 === u ? void 0 : u[e]) || (null === (c = p[t]) || void 0 === c ? void 0 : c[e - r + 7]));
                          }), this.drawCorners(), this._options.image && this.drawImage({
                            width: o.width,
                            height: o.height,
                            count: r,
                            dotSize: n
                          }), [2];
                      }
                    });
                  }, new ((n = void 0) || (n = Promise))(function (t, i) {
                    function a(t) {
                      try {
                        u(o.next(t));
                      } catch (t) {
                        i(t);
                      }
                    }

                    function s(t) {
                      try {
                        u(o["throw"](t));
                      } catch (t) {
                        i(t);
                      }
                    }

                    function u(r) {
                      var e;
                      r.done ? t(r.value) : (e = r.value, e instanceof n ? e : new n(function (t) {
                        t(e);
                      })).then(a, s);
                    }

                    u((o = o.apply(r, e || [])).next());
                  });
                  var r, e, n, o;
                }, t.prototype.drawBackground = function () {
                  var t = this.context,
                      r = this._options;

                  if (t) {
                    if (r.backgroundOptions.gradient) {
                      var e = r.backgroundOptions.gradient,
                          n = this._createGradient({
                        context: t,
                        options: e,
                        additionalRotation: 0,
                        x: 0,
                        y: 0,
                        size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
                      });

                      e.colorStops.forEach(function (t) {
                        var r = t.offset,
                            e = t.color;
                        n.addColorStop(r, e);
                      }), t.fillStyle = n;
                    } else r.backgroundOptions.color && (t.fillStyle = r.backgroundOptions.color);

                    t.fillRect(0, 0, this._canvas.width, this._canvas.height);
                  }
                }, t.prototype.drawDots = function (t) {
                  var r = this;
                  if (!this._qr) throw "QR code is not defined";
                  var e = this.context;
                  if (!e) throw "QR code is not defined";

                  var n = this._options,
                      o = this._qr.getModuleCount();

                  if (o > n.width || o > n.height) throw "The canvas is too small.";
                  var i = Math.min(n.width, n.height) - 2 * n.margin,
                      a = Math.floor(i / o),
                      s = Math.floor((n.width - o * a) / 2),
                      u = Math.floor((n.height - o * a) / 2),
                      h = new c({
                    context: e,
                    type: n.dotsOptions.type
                  });
                  e.beginPath();

                  for (var f = function f(e) {
                    for (var n = function n(_n2) {
                      return t && !t(e, _n2) ? "continue" : d._qr.isDark(e, _n2) ? void h.draw(s + e * a, u + _n2 * a, a, function (i, a) {
                        return !(e + i < 0 || _n2 + a < 0 || e + i >= o || _n2 + a >= o) && !(t && !t(e + i, _n2 + a)) && !!r._qr && r._qr.isDark(e + i, _n2 + a);
                      }) : "continue";
                    }, i = 0; i < o; i++) {
                      n(i);
                    }
                  }, d = this, l = 0; l < o; l++) {
                    f(l);
                  }

                  if (n.dotsOptions.gradient) {
                    var g = n.dotsOptions.gradient,
                        p = this._createGradient({
                      context: e,
                      options: g,
                      additionalRotation: 0,
                      x: s,
                      y: u,
                      size: o * a
                    });

                    g.colorStops.forEach(function (t) {
                      var r = t.offset,
                          e = t.color;
                      p.addColorStop(r, e);
                    }), e.fillStyle = e.strokeStyle = p;
                  } else n.dotsOptions.color && (e.fillStyle = e.strokeStyle = n.dotsOptions.color);

                  e.fill("evenodd");
                }, t.prototype.drawCorners = function (t) {
                  var r = this;
                  if (!this._qr) throw "QR code is not defined";
                  var e = this.context;
                  if (!e) throw "QR code is not defined";

                  var n = this._options,
                      o = this._qr.getModuleCount(),
                      i = Math.min(n.width, n.height) - 2 * n.margin,
                      a = Math.floor(i / o),
                      s = 7 * a,
                      u = 3 * a,
                      h = Math.floor((n.width - o * a) / 2),
                      d = Math.floor((n.height - o * a) / 2);

                  [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function (i) {
                    var v,
                        y,
                        w,
                        x,
                        b,
                        _,
                        m,
                        M,
                        S,
                        O,
                        C = i[0],
                        k = i[1],
                        P = i[2];

                    if (!t || t(C, k)) {
                      var D = h + C * a * (o - 7),
                          I = d + k * a * (o - 7);

                      if (null === (v = n.cornersSquareOptions) || void 0 === v ? void 0 : v.type) {
                        var z = new f({
                          context: e,
                          type: null === (y = n.cornersSquareOptions) || void 0 === y ? void 0 : y.type
                        });
                        e.beginPath(), z.draw(D, I, s, P);
                      } else {
                        var B = new c({
                          context: e,
                          type: n.dotsOptions.type
                        });
                        e.beginPath();

                        for (var A = function A(t) {
                          for (var r = function r(_r2) {
                            if (!(null === (w = g[t]) || void 0 === w ? void 0 : w[_r2])) return "continue";
                            B.draw(D + t * a, I + _r2 * a, a, function (e, n) {
                              var o;
                              return !!(null === (o = g[t + e]) || void 0 === o ? void 0 : o[_r2 + n]);
                            });
                          }, e = 0; e < g[t].length; e++) {
                            r(e);
                          }
                        }, q = 0; q < g.length; q++) {
                          A(q);
                        }
                      }

                      if (null === (x = n.cornersSquareOptions) || void 0 === x ? void 0 : x.gradient) {
                        var R = n.cornersSquareOptions.gradient,
                            L = r._createGradient({
                          context: e,
                          options: R,
                          additionalRotation: P,
                          x: D,
                          y: I,
                          size: s
                        });

                        R.colorStops.forEach(function (t) {
                          var r = t.offset,
                              e = t.color;
                          L.addColorStop(r, e);
                        }), e.fillStyle = e.strokeStyle = L;
                      } else (null === (b = n.cornersSquareOptions) || void 0 === b ? void 0 : b.color) && (e.fillStyle = e.strokeStyle = n.cornersSquareOptions.color);

                      if (e.fill("evenodd"), null === (_ = n.cornersDotOptions) || void 0 === _ ? void 0 : _.type) {
                        var T = new l({
                          context: e,
                          type: null === (m = n.cornersDotOptions) || void 0 === m ? void 0 : m.type
                        });
                        e.beginPath(), T.draw(D + 2 * a, I + 2 * a, u, P);
                      } else {
                        B = new c({
                          context: e,
                          type: n.dotsOptions.type
                        }), e.beginPath();

                        var j = function j(t) {
                          for (var r = function r(_r3) {
                            if (!(null === (M = p[t]) || void 0 === M ? void 0 : M[_r3])) return "continue";
                            B.draw(D + t * a, I + _r3 * a, a, function (e, n) {
                              var o;
                              return !!(null === (o = p[t + e]) || void 0 === o ? void 0 : o[_r3 + n]);
                            });
                          }, e = 0; e < p[t].length; e++) {
                            r(e);
                          }
                        };

                        for (q = 0; q < p.length; q++) {
                          j(q);
                        }
                      }

                      if (null === (S = n.cornersDotOptions) || void 0 === S ? void 0 : S.gradient) {
                        R = n.cornersDotOptions.gradient;

                        var E = r._createGradient({
                          context: e,
                          options: R,
                          additionalRotation: P,
                          x: D + 2 * a,
                          y: I + 2 * a,
                          size: u
                        });

                        R.colorStops.forEach(function (t) {
                          var r = t.offset,
                              e = t.color;
                          E.addColorStop(r, e);
                        }), e.fillStyle = e.strokeStyle = E;
                      } else (null === (O = n.cornersDotOptions) || void 0 === O ? void 0 : O.color) && (e.fillStyle = e.strokeStyle = n.cornersDotOptions.color);

                      e.fill("evenodd");
                    }
                  });
                }, t.prototype.loadImage = function () {
                  var t = this;
                  return new Promise(function (r, e) {
                    var n = t._options,
                        o = new Image();
                    if (!n.image) return e("Image is not defined");
                    "string" == typeof n.imageOptions.crossOrigin && (o.crossOrigin = n.imageOptions.crossOrigin), t._image = o, o.onload = function () {
                      r();
                    }, o.src = n.image;
                  });
                }, t.prototype.drawImage = function (t) {
                  var r = t.width,
                      e = t.height,
                      n = t.count,
                      o = t.dotSize,
                      i = this.context;
                  if (!i) throw "canvasContext is not defined";
                  if (!this._image) throw "image is not defined";
                  var a = this._options,
                      s = Math.floor((a.width - n * o) / 2),
                      u = Math.floor((a.height - n * o) / 2),
                      c = s + a.imageOptions.margin + (n * o - r) / 2,
                      h = u + a.imageOptions.margin + (n * o - e) / 2,
                      f = r - 2 * a.imageOptions.margin,
                      d = e - 2 * a.imageOptions.margin;
                  i.drawImage(this._image, c, h, f < 0 ? 0 : f, d < 0 ? 0 : d);
                }, t.prototype._createGradient = function (t) {
                  var r,
                      e = t.context,
                      n = t.options,
                      o = t.additionalRotation,
                      i = t.x,
                      a = t.y,
                      s = t.size;
                  if ("radial" === n.type) r = e.createRadialGradient(i + s / 2, a + s / 2, 0, i + s / 2, a + s / 2, s / 2);else {
                    var u = ((n.rotation || 0) + o) % (2 * Math.PI),
                        c = (u + 2 * Math.PI) % (2 * Math.PI),
                        h = i + s / 2,
                        f = a + s / 2,
                        d = i + s / 2,
                        l = a + s / 2;
                    c >= 0 && c <= .25 * Math.PI || c > 1.75 * Math.PI && c <= 2 * Math.PI ? (h -= s / 2, f -= s / 2 * Math.tan(u), d += s / 2, l += s / 2 * Math.tan(u)) : c > .25 * Math.PI && c <= .75 * Math.PI ? (f -= s / 2, h -= s / 2 / Math.tan(u), l += s / 2, d += s / 2 / Math.tan(u)) : c > .75 * Math.PI && c <= 1.25 * Math.PI ? (h += s / 2, f += s / 2 * Math.tan(u), d -= s / 2, l -= s / 2 * Math.tan(u)) : c > 1.25 * Math.PI && c <= 1.75 * Math.PI && (f += s / 2, h += s / 2 / Math.tan(u), l -= s / 2, d -= s / 2 / Math.tan(u)), r = e.createLinearGradient(Math.round(h), Math.round(f), Math.round(d), Math.round(l));
                  }
                  return r;
                }, t;
              }();

              for (var y = {}, w = 0; w <= 40; w++) {
                y[w] = w;
              }

              var x = {
                width: 300,
                height: 300,
                data: "",
                margin: 0,
                qrOptions: {
                  typeNumber: y[0],
                  mode: void 0,
                  errorCorrectionLevel: "Q"
                },
                imageOptions: {
                  hideBackgroundDots: !0,
                  imageSize: .4,
                  crossOrigin: void 0,
                  margin: 0
                },
                dotsOptions: {
                  type: "square",
                  color: "#000"
                },
                backgroundOptions: {
                  color: "#fff"
                }
              };

              var _b = function b() {
                return (_b = Object.assign || function (t) {
                  for (var r, e = 1, n = arguments.length; e < n; e++) {
                    for (var o in r = arguments[e]) {
                      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                    }
                  }

                  return t;
                }).apply(this, arguments);
              };

              function _(t) {
                var r = _b({}, t);

                if (!r.colorStops || !r.colorStops.length) throw "Field 'colorStops' is required in gradient";
                return r.rotation ? r.rotation = Number(r.rotation) : r.rotation = 0, r.colorStops = r.colorStops.map(function (t) {
                  return _b(_b({}, t), {
                    offset: Number(t.offset)
                  });
                }), r;
              }

              function m(t) {
                var r = _b({}, t);

                return r.width = Number(r.width), r.height = Number(r.height), r.margin = Number(r.margin), r.imageOptions = _b(_b({}, r.imageOptions), {
                  hideBackgroundDots: Boolean(r.imageOptions.hideBackgroundDots),
                  imageSize: Number(r.imageOptions.imageSize),
                  margin: Number(r.imageOptions.margin)
                }), r.margin > Math.min(r.width, r.height) && (r.margin = Math.min(r.width, r.height)), r.dotsOptions = _b({}, r.dotsOptions), r.dotsOptions.gradient && (r.dotsOptions.gradient = _(r.dotsOptions.gradient)), r.cornersSquareOptions && (r.cornersSquareOptions = _b({}, r.cornersSquareOptions), r.cornersSquareOptions.gradient && (r.cornersSquareOptions.gradient = _(r.cornersSquareOptions.gradient))), r.cornersDotOptions && (r.cornersDotOptions = _b({}, r.cornersDotOptions), r.cornersDotOptions.gradient && (r.cornersDotOptions.gradient = _(r.cornersDotOptions.gradient))), r.backgroundOptions && (r.backgroundOptions = _b({}, r.backgroundOptions), r.backgroundOptions.gradient && (r.backgroundOptions.gradient = _(r.backgroundOptions.gradient))), r;
              }

              var M = e(192),
                  S = e.n(M);

              var O = function () {
                function t(t) {
                  this._options = t ? m(a(x, t)) : x, this.update();
                }

                return t._clearContainer = function (t) {
                  t && (t.innerHTML = "");
                }, t.prototype.update = function (r) {
                  t._clearContainer(this._container), this._options = r ? m(a(this._options, r)) : this._options, this._options.data && (this._qr = S()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function (t) {
                    switch (!0) {
                      case /^[0-9]*$/.test(t):
                        return "Numeric";

                      case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                        return "Alphanumeric";

                      default:
                        return "Byte";
                    }
                  }(this._options.data)), this._qr.make(), this._canvas = new v(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
                }, t.prototype.append = function (t) {
                  if (t) {
                    if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
                    this._canvas && t.appendChild(this._canvas.getCanvas()), this._container = t;
                  }
                }, t.prototype.download = function (t) {
                  var r = this;
                  this._drawingPromise && this._drawingPromise.then(function () {
                    if (r._canvas) {
                      var e = "png",
                          n = "qr";
                      "string" == typeof t ? (e = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == _typeof(t) && null !== t && (t.name && (n = t.name), t.extension && (e = t.extension)), function (t, r) {
                        var e = document.createElement("a");
                        e.download = r, e.href = t, document.body.appendChild(e), e.click(), document.body.removeChild(e);
                      }(r._canvas.getCanvas().toDataURL("image/" + e), n + "." + e);
                    }
                  });
                }, t;
              }();
            }
          },
              r = {};

          function e(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
              exports: {}
            };
            return t[n](o, o.exports, e), o.exports;
          }

          return e.n = function (t) {
            var r = t && t.__esModule ? function () {
              return t["default"];
            } : function () {
              return t;
            };
            return e.d(r, {
              a: r
            }), r;
          }, e.d = function (t, r) {
            for (var n in r) {
              e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: r[n]
              });
            }
          }, e.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r);
          }, e(151);
        }()["default"];
      });
    }, {}]
  }, {}, [3])(3);
});

