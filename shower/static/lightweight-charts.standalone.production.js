/*!
 * @license
 * TradingView Lightweight Charts v3.2.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!function () {
    "use strict";
    var t, i;

    function n(t, i) {
        var n,
            h = ((n = {})[0] = [], n[1] = [t.lineWidth, t.lineWidth], n[2] = [2 * t.lineWidth, 2 * t.lineWidth], n[3] = [6 * t.lineWidth, 6 * t.lineWidth], n[4] = [t.lineWidth, 4 * t.lineWidth], n)[i];
        t.setLineDash(h)
    }

    function h(t, i, n, h) {
        t.beginPath();
        var s = t.lineWidth % 2 ? .5 : 0;
        t.moveTo(n, i + s), t.lineTo(h, i + s), t.stroke()
    }

    !function (t) {
        t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps"
    }(t || (t = {})), function (t) {
        t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted"
    }(i || (i = {}));
    var s = function (t, i) {
        return (s = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, i) {
            t.__proto__ = i
        } || function (t, i) {
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        })(t, i)
    };

    function r(t, i) {
        function n() {
            this.constructor = t
        }

        s(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
    }

    var e = function () {
        return (e = Object.assign || function (t) {
            for (var i, n = 1, h = arguments.length; n < h; n++) for (var s in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
            return t
        }).apply(this, arguments)
    };

    function u() {
        for (var t = 0, i = 0, n = arguments.length; i < n; i++) t += arguments[i].length;
        var h = Array(t), s = 0;
        for (i = 0; i < n; i++) for (var r = arguments[i], e = 0, u = r.length; e < u; e++, s++) h[s] = r[e];
        return h
    }

    function a(t, i) {
        if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""))
    }

    function o(t) {
        if (void 0 === t) throw new Error("Value is undefined");
        return t
    }

    function l(t) {
        if (null === t) throw new Error("Value is null");
        return t
    }

    function f(t) {
        return l(o(t))
    }

    function c(t) {
        for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
        for (var h = 0, s = i; h < s.length; h++) {
            var r = s[h];
            for (var e in r) void 0 !== r[e] && ("object" != typeof r[e] || void 0 === t[e] ? t[e] = r[e] : c(t[e], r[e]))
        }
        return t
    }

    function v(t) {
        return "number" == typeof t && isFinite(t)
    }

    function _(t) {
        return "number" == typeof t && t % 1 == 0
    }

    function d(t) {
        return "string" == typeof t
    }

    function w(t) {
        return "boolean" == typeof t
    }

    function M(t) {
        var i, n, h, s = t;
        if (!s || "object" != typeof s) return s;
        for (n in i = Array.isArray(s) ? [] : {}, s) s.hasOwnProperty(n) && (h = s[n], i[n] = h && "object" == typeof h ? M(h) : h);
        return i
    }

    function b(t) {
        return null !== t
    }

    function m(t) {
        return null === t ? void 0 : t
    }

    var g = function () {
        function t() {
            this.t = []
        }

        return t.prototype.i = function (t) {
            this.t = t
        }, t.prototype.h = function (t, i, n, h) {
            this.t.forEach((function (s) {
                t.save(), s.h(t, i, n, h), t.restore()
            }))
        }, t
    }(), p = function () {
        function t() {
        }

        return t.prototype.h = function (t, i, n, h) {
            t.save(), t.scale(i, i), this.u(t, n, h), t.restore()
        }, t.prototype.o = function (t, i, n, h) {
            t.save(), t.scale(i, i), this.l(t, n, h), t.restore()
        }, t.prototype.l = function (t, i, n) {
        }, t
    }(), y = function (t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.v = null, i
        }

        return r(i, t), i.prototype._ = function (t) {
            this.v = t
        }, i.prototype.u = function (t) {
            if (null !== this.v && null !== this.v.M) {
                var i = this.v.M, n = this.v, h = function (h) {
                    t.beginPath();
                    for (var s = i.to - 1; s >= i.from; --s) {
                        var r = n.m[s];
                        t.moveTo(r.g, r.p), t.arc(r.g, r.p, h, 0, 2 * Math.PI)
                    }
                    t.fill()
                };
                t.fillStyle = n.k, h(n.N + 2), t.fillStyle = n.S, h(n.N)
            }
        }, i
    }(p);
    var k = {from: 0, to: 1}, x = function () {
        function t(t, i) {
            this.D = new g, this.C = [], this.T = [], this.L = !0, this.B = t, this.A = i, this.D.i(this.C)
        }

        return t.prototype.O = function (t) {
            var i = this, n = this.B.V();
            n.length !== this.C.length && (this.T = n.map((function () {
                return {m: [{g: 0, p: 0, P: 0, F: 0}], S: "", k: i.B.I().layout.backgroundColor, N: 0, M: null}
            })), this.C = this.T.map((function (t) {
                var i = new y;
                return i._(t), i
            })), this.D.i(this.C)), this.L = !0
        }, t.prototype.W = function (t, i, n) {
            return this.L && (this.j(), this.L = !1), this.D
        }, t.prototype.j = function () {
            var t = this, i = this.B.V(), n = this.A.R(), h = this.B.U();
            i.forEach((function (i, s) {
                var r = t.T[s], e = i.q(n);
                if (null !== e && i.I().visible) {
                    var u = l(i.H());
                    r.S = i.$().K(n).Y, r.k = t.B.I().layout.backgroundColor, r.N = e.N, r.m[0].F = e.F, r.m[0].p = i.Z().X(e.F, u.J), r.m[0].P = n, r.m[0].g = h.G(n), r.M = k
                } else r.M = null
            }))
        }, t
    }(), N = function () {
        function t(t) {
            this.tt = t
        }

        return t.prototype.h = function (t, i, s, r) {
            if (null !== this.tt) {
                var e = this.tt.nt.it, u = this.tt.ht.it;
                if (e || u) {
                    t.save();
                    var a = Math.round(this.tt.g * i), o = Math.round(this.tt.p * i), l = Math.ceil(this.tt.st * i),
                        f = Math.ceil(this.tt.rt * i);
                    t.lineCap = "butt", e && a >= 0 && (t.lineWidth = Math.floor(this.tt.nt.et * i), t.strokeStyle = this.tt.nt.ut, t.fillStyle = this.tt.nt.ut, n(t, this.tt.nt.at), function (t, i, n, h) {
                        t.beginPath();
                        var s = t.lineWidth % 2 ? .5 : 0;
                        t.moveTo(i + s, n), t.lineTo(i + s, h), t.stroke()
                    }(t, a, 0, f)), u && o >= 0 && (t.lineWidth = Math.floor(this.tt.ht.et * i), t.strokeStyle = this.tt.ht.ut, t.fillStyle = this.tt.ht.ut, n(t, this.tt.ht.at), h(t, o, 0, l)), t.restore()
                }
            }
        }, t
    }(), S = function () {
        function t(t) {
            this.L = !0, this.ot = {
                nt: {et: 1, at: 0, ut: "", it: !1},
                ht: {et: 1, at: 0, ut: "", it: !1},
                st: 0,
                rt: 0,
                g: 0,
                p: 0
            }, this.lt = new N(this.ot), this.ft = t
        }

        return t.prototype.O = function () {
            this.L = !0
        }, t.prototype.W = function (t, i) {
            return this.L && (this.j(), this.L = !1), this.lt
        }, t.prototype.j = function () {
            var t = this.ft.it(), i = l(this.ft.ct()), n = i.vt().I().crosshair, h = this.ot;
            h.ht.it = t && this.ft._t(i), h.nt.it = t && this.ft.dt(), h.ht.et = n.horzLine.width, h.ht.at = n.horzLine.style, h.ht.ut = n.horzLine.color, h.nt.et = n.vertLine.width, h.nt.at = n.vertLine.style, h.nt.ut = n.vertLine.color, h.st = i.wt(), h.rt = i.Mt(), h.g = this.ft.bt(), h.p = this.ft.gt()
        }, t
    }(), D = {
        khaki: "#f0e68c",
        azure: "#f0ffff",
        aliceblue: "#f0f8ff",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        gray: "#808080",
        green: "#008000",
        honeydew: "#f0fff0",
        floralwhite: "#fffaf0",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lemonchiffon: "#fffacd",
        hotpink: "#ff69b4",
        lightyellow: "#ffffe0",
        greenyellow: "#adff2f",
        lightgoldenrodyellow: "#fafad2",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        lightcyan: "#e0ffff",
        magenta: "#f0f",
        maroon: "#800000",
        olive: "#808000",
        orange: "#ffa500",
        oldlace: "#fdf5e6",
        mediumblue: "#0000cd",
        transparent: "#0000",
        lime: "#0f0",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        midnightblue: "#191970",
        orchid: "#da70d6",
        mediumorchid: "#ba55d3",
        mediumturquoise: "#48d1cc",
        orangered: "#ff4500",
        royalblue: "#4169e1",
        powderblue: "#b0e0e6",
        red: "#f00",
        coral: "#ff7f50",
        turquoise: "#40e0d0",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        wheat: "#f5deb3",
        teal: "#008080",
        steelblue: "#4682b4",
        bisque: "#ffe4c4",
        aquamarine: "#7fffd4",
        aqua: "#0ff",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        springgreen: "#00ff7f",
        antiquewhite: "#faebd7",
        burlywood: "#deb887",
        brown: "#a52a2a",
        beige: "#f5f5dc",
        chocolate: "#d2691e",
        chartreuse: "#7fff00",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cadetblue: "#5f9ea0",
        tomato: "#ff6347",
        fuchsia: "#f0f",
        blue: "#00f",
        salmon: "#fa8072",
        blanchedalmond: "#ffebcd",
        slateblue: "#6a5acd",
        slategray: "#708090",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        cyan: "#0ff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        blueviolet: "#8a2be2",
        black: "#000",
        darkmagenta: "#8b008b",
        darkslateblue: "#483d8b",
        darkkhaki: "#bdb76b",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkgreen: "#006400",
        darkred: "#8b0000",
        dodgerblue: "#1e90ff",
        darkslategray: "#2f4f4f",
        dimgray: "#696969",
        deepskyblue: "#00bfff",
        firebrick: "#b22222",
        forestgreen: "#228b22",
        indigo: "#4b0082",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        feldspar: "#d19275",
        indianred: "#cd5c5c",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightskyblue: "#87cefa",
        lightslategray: "#789",
        lightslateblue: "#8470ff",
        snow: "#fffafa",
        lightseagreen: "#20b2aa",
        lightsalmon: "#ffa07a",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        mediumpurple: "#9370d8",
        mediumaquamarine: "#66cdaa",
        skyblue: "#87ceeb",
        lavender: "#e6e6fa",
        lightsteelblue: "#b0c4de",
        mediumvioletred: "#c71585",
        mintcream: "#f5fffa",
        navajowhite: "#ffdead",
        navy: "#000080",
        olivedrab: "#6b8e23",
        palevioletred: "#d87093",
        violetred: "#d02090",
        yellow: "#ff0",
        yellowgreen: "#9acd32",
        lawngreen: "#7cfc00",
        pink: "#ffc0cb",
        paleturquoise: "#afeeee",
        palegoldenrod: "#eee8aa",
        darkolivegreen: "#556b2f",
        darkseagreen: "#8fbc8f",
        darkturquoise: "#00ced1",
        peachpuff: "#ffdab9",
        deeppink: "#ff1493",
        violet: "#ee82ee",
        palegreen: "#98fb98",
        mediumseagreen: "#3cb371",
        peru: "#cd853f",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        purple: "#800080",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        papayawhip: "#ffefd5",
        mediumslateblue: "#7b68ee",
        plum: "#dda0dd",
        mediumspringgreen: "#00fa9a"
    };

    function C(t) {
        return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0
    }

    var T = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
        E = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
        L = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
        B = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

    function A(t) {
        var i, n = function (t) {
            var i;
            if ((t = t.toLowerCase()) in D && (t = D[t]), i = B.exec(t) || L.exec(t)) return [C(parseInt(i[1], 10)), C(parseInt(i[2], 10)), C(parseInt(i[3], 10))];
            if (i = E.exec(t)) return [C(parseInt(i[1], 16)), C(parseInt(i[2], 16)), C(parseInt(i[3], 16))];
            if (i = T.exec(t)) return [C(17 * parseInt(i[1], 16)), C(17 * parseInt(i[2], 16)), C(17 * parseInt(i[3], 16))];
            throw new Error("Cannot parse color: " + t)
        }(t);
        return {
            yt: "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")",
            kt: (i = n, .199 * i[0] + .687 * i[1] + .114 * i[2] > 160 ? "black" : "white")
        }
    }

    function O(t, i, n, h, s, r) {
        t.fillRect(i + r, n, h - 2 * r, r), t.fillRect(i + r, n + s - r, h - 2 * r, r), t.fillRect(i, n, r, s), t.fillRect(i + h - r, n, r, s)
    }

    function V(t, i, n) {
        t.save(), t.scale(i, i), n(), t.restore()
    }

    function z(t, i, n, h, s, r) {
        t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, n, h, s), t.restore()
    }

    var P, F = function () {
        function t(t, i) {
            this._(t, i)
        }

        return t.prototype._ = function (t, i) {
            this.tt = t, this.xt = i
        }, t.prototype.h = function (t, i, n, h, s, r) {
            if (this.tt.it) {
                t.font = i.Nt;
                var e = this.tt.St || !this.tt.Dt ? i.Ct : 0, u = i.Tt, a = i.Et, o = i.Lt, l = i.Bt, f = i.At,
                    c = this.tt.Ot, v = Math.ceil(n.Vt(t, c)), _ = i.zt, d = i.Pt + a + o, w = Math.ceil(.5 * d),
                    M = u + v + l + f + e, b = this.xt.Ft;
                this.xt.It && (b = this.xt.It);
                var m, g, p = (b = Math.round(b)) - w, y = p + d, k = "right" === s, x = k ? h : 0,
                    N = Math.ceil(h * r), S = x;
                if (t.fillStyle = this.xt.yt, t.lineWidth = 1, t.lineCap = "butt", c) {
                    k ? (m = x - e, g = (S = x - M) + f) : (S = x + M, m = x + e, g = x + u + e + l);
                    var D = Math.max(1, Math.floor(r)), C = Math.max(1, Math.floor(u * r)), T = k ? N : 0,
                        E = Math.round(p * r), L = Math.round(S * r), B = Math.round(b * r) - Math.floor(.5 * r),
                        A = B + D + (B - E), O = Math.round(m * r);
                    t.save(), t.beginPath(), t.moveTo(T, E), t.lineTo(L, E), t.lineTo(L, A), t.lineTo(T, A), t.fill(), t.fillStyle = this.tt.Wt, t.fillRect(k ? N - C : 0, E, C, A - E), this.tt.St && (t.fillStyle = this.xt.ut, t.fillRect(T, B, O - T, D)), t.textAlign = "left", t.fillStyle = this.xt.ut, V(t, r, (function () {
                        t.fillText(c, g, y - o - _)
                    })), t.restore()
                }
            }
        }, t.prototype.Mt = function (t, i) {
            return this.tt.it ? t.Pt + t.Et + t.Lt : 0
        }, t
    }(), I = function () {
        function t(t) {
            this.jt = {Ft: 0, ut: "#FFF", yt: "#000"}, this.Rt = {
                Ot: "",
                it: !1,
                St: !0,
                Dt: !1,
                Wt: ""
            }, this.Ut = {
                Ot: "",
                it: !1,
                St: !1,
                Dt: !0,
                Wt: ""
            }, this.L = !0, this.qt = new (t || F)(this.Rt, this.jt), this.Ht = new (t || F)(this.Ut, this.jt)
        }

        return t.prototype.Ot = function () {
            return this.Rt.Ot
        }, t.prototype.Ft = function () {
            return this.Yt(), this.jt.Ft
        }, t.prototype.O = function () {
            this.L = !0
        }, t.prototype.Mt = function (t, i) {
            return void 0 === i && (i = !1), Math.max(this.qt.Mt(t, i), this.Ht.Mt(t, i))
        }, t.prototype.Kt = function () {
            return this.jt.It || 0
        }, t.prototype.$t = function (t) {
            this.jt.It = t
        }, t.prototype.Xt = function () {
            return this.Yt(), this.Rt.it || this.Ut.it
        }, t.prototype.Zt = function () {
            return this.Yt(), this.Rt.it
        }, t.prototype.W = function (t) {
            return this.Yt(), this.Rt.St = this.Rt.St && t.I().drawTicks, this.Ut.St = this.Ut.St && t.I().drawTicks, this.qt._(this.Rt, this.jt), this.Ht._(this.Ut, this.jt), this.qt
        }, t.prototype.Jt = function () {
            return this.Yt(), this.qt._(this.Rt, this.jt), this.Ht._(this.Ut, this.jt), this.Ht
        }, t.prototype.Yt = function () {
            this.L && (this.Rt.St = !0, this.Ut.St = !1, this.Gt(this.Rt, this.Ut, this.jt))
        }, t
    }(), W = function (t) {
        function i(i, n, h) {
            var s = t.call(this) || this;
            return s.ft = i, s.Qt = n, s.ti = h, s
        }

        return r(i, t), i.prototype.Gt = function (t, i, n) {
            t.it = !1;
            var h = this.ft.I().horzLine;
            if (h.labelVisible) {
                var s = this.Qt.H();
                if (this.ft.it() && !this.Qt.ii() && null !== s) {
                    var r = A(h.labelBackgroundColor);
                    n.yt = r.yt, n.ut = r.kt;
                    var e = this.ti(this.Qt);
                    n.Ft = e.Ft, t.Ot = this.Qt.ni(e.F, s), t.it = !0
                }
            }
        }, i
    }(I), j = /[1-9]/g, R = function () {
        function t() {
            this.tt = null
        }

        return t.prototype._ = function (t) {
            this.tt = t
        }, t.prototype.h = function (t, i, n) {
            var h = this;
            if (null !== this.tt && !1 !== this.tt.it && 0 !== this.tt.Ot.length) {
                t.font = i.Nt;
                var s = Math.round(i.hi.Vt(t, this.tt.Ot, j));
                if (!(s <= 0)) {
                    t.save();
                    var r = i.si, e = s + 2 * r, u = e / 2, a = this.tt.wt, o = this.tt.Ft, f = Math.floor(o - u) + .5;
                    f < 0 ? (o += Math.abs(0 - f), f = Math.floor(o - u) + .5) : f + e > a && (o -= Math.abs(a - (f + e)), f = Math.floor(o - u) + .5);
                    var c = f + e, v = 0 + i.Tt + i.Et + i.Pt + i.Lt;
                    t.fillStyle = this.tt.yt;
                    var _ = Math.round(f * n), d = Math.round(0 * n), w = Math.round(c * n), M = Math.round(v * n);
                    t.fillRect(_, d, w - _, M - d);
                    var b = Math.round(this.tt.Ft * n), m = d, g = Math.round((m + i.Tt + i.Ct) * n);
                    t.fillStyle = this.tt.ut;
                    var p = Math.max(1, Math.floor(n)), y = Math.floor(.5 * n);
                    t.fillRect(b - y, m, p, g - m);
                    var k = v - i.zt - i.Lt;
                    t.textAlign = "left", t.fillStyle = this.tt.ut, V(t, n, (function () {
                        t.fillText(l(h.tt).Ot, f + r, k)
                    })), t.restore()
                }
            }
        }, t
    }(), U = function () {
        function t(t, i, n) {
            this.L = !0, this.lt = new R, this.ot = {
                it: !1,
                yt: "#4c525e",
                ut: "white",
                Ot: "",
                wt: 0,
                Ft: NaN
            }, this.A = t, this.ri = i, this.ti = n
        }

        return t.prototype.O = function () {
            this.L = !0
        }, t.prototype.W = function () {
            return this.L && (this.j(), this.L = !1), this.lt._(this.ot), this.lt
        }, t.prototype.j = function () {
            var t = this.ot;
            t.it = !1;
            var i = this.A.I().vertLine;
            if (i.labelVisible) {
                var n = this.ri.U();
                if (!n.ii()) {
                    var h = n.ei(this.A.R());
                    t.wt = n.wt();
                    var s = this.ti();
                    if (s.P) {
                        t.Ft = s.Ft, t.Ot = n.ui(l(h)), t.it = !0;
                        var r = A(i.labelBackgroundColor);
                        t.yt = r.yt, t.ut = r.kt
                    }
                }
            }
        }, t
    }(), q = function () {
        function t() {
            this.ai = null, this.oi = 0
        }

        return t.prototype.li = function () {
            return this.oi
        }, t.prototype.fi = function (t) {
            this.oi = t
        }, t.prototype.Z = function () {
            return this.ai
        }, t.prototype.ci = function (t) {
            this.ai = t
        }, t.prototype.vi = function (t, i) {
            return []
        }, t.prototype._i = function (t) {
            return []
        }, t.prototype.di = function () {
            return []
        }, t
    }();
    !function (t) {
        t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet"
    }(P || (P = {}));
    var H = function (t) {
        function i(i, n) {
            var h = t.call(this) || this;
            h.wi = null, h.Mi = NaN, h.bi = 0, h.mi = !0, h.gi = new Map, h.pi = !1, h.yi = NaN, h.ki = NaN, h.xi = NaN, h.Ni = NaN, h.ri = i, h.Si = n, h.Di = new x(i, h);
            var s, r;
            h.Ci = (s = function () {
                return h.Mi
            }, r = function () {
                return h.ki
            }, function (t) {
                var i = r(), n = s();
                if (t === l(h.wi).Ti()) return {F: n, Ft: i};
                var e = l(t.H());
                return {F: t.Ei(i, e), Ft: i}
            });
            var e = function (t, i) {
                return function () {
                    return {P: h.ri.U().ei(t()), Ft: i()}
                }
            }((function () {
                return h.bi
            }), (function () {
                return h.bt()
            }));
            return h.Li = new U(h, i, e), h.Bi = new S(h), h
        }

        return r(i, t), i.prototype.I = function () {
            return this.Si
        }, i.prototype.Ai = function (t, i) {
            this.xi = t, this.Ni = i
        }, i.prototype.Oi = function () {
            this.xi = NaN, this.Ni = NaN
        }, i.prototype.Vi = function () {
            return this.xi
        }, i.prototype.zi = function () {
            return this.Ni
        }, i.prototype.Pi = function (t, i, n) {
            this.pi || (this.pi = !0), this.mi = !0, this.Fi(t, i, n)
        }, i.prototype.R = function () {
            return this.bi
        }, i.prototype.bt = function () {
            return this.yi
        }, i.prototype.gt = function () {
            return this.ki
        }, i.prototype.it = function () {
            return this.mi
        }, i.prototype.Ii = function () {
            this.mi = !1, this.Wi(), this.Mi = NaN, this.yi = NaN, this.ki = NaN, this.wi = null, this.Oi()
        }, i.prototype._i = function (t) {
            return null !== this.wi ? [this.Bi, this.Di] : []
        }, i.prototype._t = function (t) {
            return t === this.wi && this.Si.horzLine.visible
        }, i.prototype.dt = function () {
            return this.Si.vertLine.visible
        }, i.prototype.vi = function (t, i) {
            this.mi && this.wi === t || this.gi.clear();
            var n = [];
            return this.wi === t && n.push(this.ji(this.gi, i, this.Ci)), n
        }, i.prototype.di = function () {
            return this.mi ? [this.Li] : []
        }, i.prototype.ct = function () {
            return this.wi
        }, i.prototype.Ri = function () {
            this.Bi.O(), this.gi.forEach((function (t) {
                return t.O()
            })), this.Li.O(), this.Di.O()
        }, i.prototype.Ui = function (t) {
            return t && !t.Ti().ii() ? t.Ti() : null
        }, i.prototype.Fi = function (t, i, n) {
            this.qi(t, i, n) && this.Ri()
        }, i.prototype.qi = function (t, i, n) {
            var h = this.yi, s = this.ki, r = this.Mi, e = this.bi, u = this.wi, a = this.Ui(n);
            this.bi = t, this.yi = isNaN(t) ? NaN : this.ri.U().G(t), this.wi = n;
            var o = null !== a ? a.H() : null;
            return null !== a && null !== o ? (this.Mi = i, this.ki = a.X(i, o)) : (this.Mi = NaN, this.ki = NaN), h !== this.yi || s !== this.ki || e !== this.bi || r !== this.Mi || u !== this.wi
        }, i.prototype.Wi = function () {
            var t = this.ri.V().map((function (t) {
                return t.Yi().Hi()
            })).filter(b), i = 0 === t.length ? null : Math.max.apply(Math, t);
            this.bi = null !== i ? i : NaN
        }, i.prototype.ji = function (t, i, n) {
            var h = t.get(i);
            return void 0 === h && (h = new W(this, i, n), t.set(i, h)), h
        }, i
    }(q), Y = ".";

    function K(t, i) {
        if (!v(t)) return "n/a";
        if (!_(i)) throw new TypeError("invalid length");
        if (i < 0 || i > 16) throw new TypeError("invalid length");
        if (0 === i) return t.toString();
        return ("0000000000000000" + t.toString()).slice(-i)
    }

    var $ = function () {
        function t(t, i) {
            if (i || (i = 1), v(t) && _(t) || (t = 100), t < 0) throw new TypeError("invalid base");
            this.Qt = t, this.Ki = i, this.$i()
        }

        return t.prototype.Xi = function (t) {
            var i = t < 0 ? "−" : "";
            return t = Math.abs(t), i + this.Zi(t)
        }, t.prototype.$i = function () {
            if (this.Ji = 0, this.Qt > 0 && this.Ki > 0) for (var t = this.Qt; t > 1;) t /= 10, this.Ji++
        }, t.prototype.Zi = function (t) {
            var i = this.Qt / this.Ki, n = Math.floor(t), h = "", s = void 0 !== this.Ji ? this.Ji : NaN;
            if (i > 1) {
                var r = +(Math.round(t * i) - n * i).toFixed(this.Ji);
                r >= i && (r -= i, n += 1), h = Y + K(+r.toFixed(this.Ji) * this.Ki, s)
            } else n = Math.round(n * i) / i, s > 0 && (h = Y + K(0, s));
            return n.toFixed(0) + h
        }, t
    }(), X = function (t) {
        function i(i) {
            return void 0 === i && (i = 100), t.call(this, i) || this
        }

        return r(i, t), i.prototype.Xi = function (i) {
            return t.prototype.Xi.call(this, i) + "%"
        }, i
    }($), Z = function () {
        function t() {
            this.Gi = []
        }

        return t.prototype.Qi = function (t, i, n) {
            var h = {tn: t, nn: i, hn: !0 === n};
            this.Gi.push(h)
        }, t.prototype.sn = function (t) {
            var i = this.Gi.findIndex((function (i) {
                return t === i.tn
            }));
            i > -1 && this.Gi.splice(i, 1)
        }, t.prototype.rn = function (t) {
            this.Gi = this.Gi.filter((function (i) {
                return i.nn === t
            }))
        }, t.prototype.en = function (t, i) {
            var n = u(this.Gi);
            this.Gi = this.Gi.filter((function (t) {
                return !t.hn
            })), n.forEach((function (n) {
                return n.tn(t, i)
            }))
        }, t.prototype.un = function () {
            return this.Gi.length > 0
        }, t.prototype.an = function () {
            this.Gi = []
        }, t
    }(), J = function () {
        function t(t, i) {
            this.on = t, this.ln = i
        }

        return t.prototype.fn = function (t) {
            return null !== t && (this.on === t.on && this.ln === t.ln)
        }, t.prototype.cn = function () {
            return new t(this.on, this.ln)
        }, t.prototype.vn = function () {
            return this.on
        }, t.prototype._n = function () {
            return this.ln
        }, t.prototype.dn = function () {
            return this.ln - this.on
        }, t.prototype.ii = function () {
            return this.ln === this.on || Number.isNaN(this.ln) || Number.isNaN(this.on)
        }, t.prototype.wn = function (i) {
            return null === i ? this : new t(Math.min(this.vn(), i.vn()), Math.max(this._n(), i._n()))
        }, t.prototype.Mn = function (t) {
            if (v(t) && 0 !== this.ln - this.on) {
                var i = .5 * (this.ln + this.on), n = this.ln - i, h = this.on - i;
                n *= t, h *= t, this.ln = i + n, this.on = i + h
            }
        }, t.prototype.bn = function (t) {
            v(t) && (this.ln += t, this.on += t)
        }, t.prototype.mn = function () {
            return {minValue: this.on, maxValue: this.ln}
        }, t.gn = function (i) {
            return null === i ? null : new t(i.minValue, i.maxValue)
        }, t
    }();

    function G(t, i, n) {
        return Math.min(Math.max(t, i), n)
    }

    function Q(t, i, n) {
        return i - t <= n
    }

    function tt(t) {
        return t <= 0 ? NaN : Math.log(t) / Math.log(10)
    }

    function it(t) {
        var i = Math.ceil(t);
        return i % 2 != 0 ? i - 1 : i
    }

    function nt(t) {
        var i = Math.ceil(t);
        return i % 2 == 0 ? i - 1 : i
    }

    function ht(t, i) {
        var n = 100 * (t - i) / i;
        return i < 0 ? -n : n
    }

    function st(t, i) {
        var n = ht(t.vn(), i), h = ht(t._n(), i);
        return new J(n, h)
    }

    function rt(t, i) {
        var n = 100 * (t - i) / i + 100;
        return i < 0 ? -n : n
    }

    function et(t, i) {
        var n = rt(t.vn(), i), h = rt(t._n(), i);
        return new J(n, h)
    }

    function ut(t) {
        var i = Math.abs(t);
        if (i < 1e-8) return 0;
        var n = tt(i + 1e-4) + 4;
        return t < 0 ? -n : n
    }

    function at(t) {
        var i = Math.abs(t);
        if (i < 1e-8) return 0;
        var n = Math.pow(10, i - 4) - 1e-4;
        return t < 0 ? -n : n
    }

    function ot(t) {
        if (null === t) return null;
        var i = ut(t.vn()), n = ut(t._n());
        return new J(i, n)
    }

    var lt, ft = function () {
        function t(t, i) {
            if (this.pn = t, this.yn = i, function (t) {
                if (t < 0) return !1;
                for (var i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
                return !0
            }(this.pn)) this.kn = [2, 2.5, 2]; else {
                this.kn = [];
                for (var n = this.pn; 1 !== n;) {
                    if (n % 2 == 0) this.kn.push(2), n /= 2; else {
                        if (n % 5 != 0) throw new Error("unexpected base");
                        this.kn.push(2), this.kn.push(2.5), n /= 5
                    }
                    if (this.kn.length > 100) throw new Error("something wrong with base")
                }
            }
        }

        return t.prototype.xn = function (t, i, n) {
            for (var h, s, r, e = 0 === this.pn ? 0 : 1 / this.pn, u = 1e-9, a = Math.pow(10, Math.max(0, Math.ceil(tt(t - i)))), o = 0, l = this.yn[0]; ;) {
                var f = Q(a, e, u) && a > e + u, c = Q(a, n * l, u), v = Q(a, 1, u);
                if (!(f && c && v)) break;
                a /= l, l = this.yn[++o % this.yn.length]
            }
            if (a <= e + u && (a = e), a = Math.max(1, a), this.kn.length > 0 && (h = a, s = 1, r = u, Math.abs(h - s) < r)) for (o = 0, l = this.kn[0]; Q(a, n * l, u) && a > e + u;) a /= l, l = this.kn[++o % this.kn.length];
            return a
        }, t
    }(), ct = function () {
        function t(t, i, n, h) {
            this.Nn = [], this.Qt = t, this.pn = i, this.Sn = n, this.Dn = h
        }

        return t.prototype.xn = function (t, i) {
            if (t < i) throw new Error("high < low");
            var n = this.Qt.Mt(), h = (t - i) * this.Cn() / n, s = new ft(this.pn, [2, 2.5, 2]),
                r = new ft(this.pn, [2, 2, 2.5]), e = new ft(this.pn, [2.5, 2, 2]), u = [];
            return u.push(s.xn(t, i, h)), u.push(r.xn(t, i, h)), u.push(e.xn(t, i, h)), function (t) {
                if (t.length < 1) throw Error("array is empty");
                for (var i = t[0], n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
                return i
            }(u)
        }, t.prototype.Tn = function () {
            var t = this.Qt, i = t.H();
            if (null !== i) {
                var n = t.Mt(), h = this.Sn(n - 1, i), s = this.Sn(0, i),
                    r = this.Qt.I().entireTextOnly ? this.En() / 2 : 0, e = r, u = n - 1 - r, a = Math.max(h, s),
                    o = Math.min(h, s);
                if (a !== o) {
                    for (var l = this.xn(a, o), f = a % l, c = a >= o ? 1 : -1, v = null, _ = 0, d = a - (f += f < 0 ? l : 0); d > o; d -= l) {
                        var w = this.Dn(d, i, !0);
                        null !== v && Math.abs(w - v) < this.Cn() || (w < e || w > u || (_ < this.Nn.length ? (this.Nn[_].Ln = w, this.Nn[_].Bn = t.An(d)) : this.Nn.push({
                            Ln: w,
                            Bn: t.An(d)
                        }), _++, v = w, t.On() && (l = this.xn(d * c, o))))
                    }
                    this.Nn.length = _
                } else this.Nn = []
            } else this.Nn = []
        }, t.prototype.Vn = function () {
            return this.Nn
        }, t.prototype.En = function () {
            return this.Qt.Pt()
        }, t.prototype.Cn = function () {
            return Math.ceil(2.5 * this.En())
        }, t
    }();

    function vt(t) {
        return t.slice().sort((function (t, i) {
            return l(t.li()) - l(i.li())
        }))
    }

    !function (t) {
        t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100"
    }(lt || (lt = {}));
    var _t, dt = new X, wt = new $(100, 1), Mt = function () {
        function t(t, i, n, h) {
            this.zn = 0, this.Pn = null, this.Fn = null, this.In = null, this.Wn = {
                jn: !1,
                Rn: null
            }, this.Un = 0, this.qn = 0, this.Hn = new Z, this.Yn = new Z, this.Kn = [], this.$n = null, this.Xn = null, this.Zn = null, this.Jn = null, this.Gn = wt, this.Qn = t, this.Si = i, this.th = n, this.ih = h, this.nh = new ct(this, 100, this.hh.bind(this), this.sh.bind(this))
        }

        return t.prototype.rh = function () {
            return this.Qn
        }, t.prototype.I = function () {
            return this.Si
        }, t.prototype.eh = function (t) {
            if (c(this.Si, t), this.uh(), void 0 !== t.mode && this.ah({oh: t.mode}), void 0 !== t.scaleMargins) {
                var i = o(t.scaleMargins.top), n = o(t.scaleMargins.bottom);
                if (i < 0 || i > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=" + i);
                if (n < 0 || n > 1 || i + n > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + n);
                if (i + n > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (i + n));
                this.lh(), this.Xn = null
            }
        }, t.prototype.fh = function () {
            return this.Si.autoScale
        }, t.prototype.On = function () {
            return 1 === this.Si.mode
        }, t.prototype._h = function () {
            return 2 === this.Si.mode
        }, t.prototype.dh = function () {
            return 3 === this.Si.mode
        }, t.prototype.oh = function () {
            return {wh: this.Si.autoScale, Mh: this.Si.invertScale, oh: this.Si.mode}
        }, t.prototype.ah = function (t) {
            var i = this.oh(), n = null;
            void 0 !== t.wh && (this.Si.autoScale = t.wh), void 0 !== t.oh && (this.Si.mode = t.oh, 2 !== t.oh && 3 !== t.oh || (this.Si.autoScale = !0), this.Wn.jn = !1), 1 === i.oh && t.oh !== i.oh && (!function (t) {
                if (null === t) return !1;
                var i = at(t.vn()), n = at(t._n());
                return isFinite(i) && isFinite(n)
            }(this.Fn) ? this.Si.autoScale = !0 : null !== (n = function (t) {
                if (null === t) return null;
                var i = at(t.vn()), n = at(t._n());
                return new J(i, n)
            }(this.Fn)) && this.bh(n)), 1 === t.oh && t.oh !== i.oh && null !== (n = ot(this.Fn)) && this.bh(n);
            var h = i.oh !== this.Si.mode;
            h && (2 === i.oh || this._h()) && this.uh(), h && (3 === i.oh || this.dh()) && this.uh(), void 0 !== t.Mh && i.Mh !== t.Mh && (this.Si.invertScale = t.Mh, this.mh()), this.Yn.en(i, this.oh())
        }, t.prototype.gh = function () {
            return this.Yn
        }, t.prototype.Pt = function () {
            return this.th.fontSize
        }, t.prototype.Mt = function () {
            return this.zn
        }, t.prototype.ph = function (t) {
            this.zn !== t && (this.zn = t, this.lh(), this.Xn = null)
        }, t.prototype.yh = function () {
            if (this.Pn) return this.Pn;
            var t = this.Mt() - this.kh() - this.xh();
            return this.Pn = t, t
        }, t.prototype.Nh = function () {
            return this.Sh(), this.Fn
        }, t.prototype.bh = function (t, i) {
            var n = this.Fn;
            (i || null === n && null !== t || null !== n && !n.fn(t)) && (this.Xn = null, this.Fn = t)
        }, t.prototype.ii = function () {
            return this.Sh(), 0 === this.zn || !this.Fn || this.Fn.ii()
        }, t.prototype.Dh = function (t) {
            return this.Mh() ? t : this.Mt() - 1 - t
        }, t.prototype.X = function (t, i) {
            return this._h() ? t = ht(t, i) : this.dh() && (t = rt(t, i)), this.sh(t, i)
        }, t.prototype.Ch = function (t, i, n) {
            this.Sh();
            for (var h = this.xh(), s = l(this.Nh()), r = s.vn(), e = s._n(), u = this.yh() - 1, a = this.Mh(), o = u / (e - r), f = void 0 === n ? 0 : n.from, c = void 0 === n ? t.length : n.to, v = this.Th(), _ = f; _ < c; _++) {
                var d = t[_], w = d.F;
                if (!isNaN(w)) {
                    var M = w;
                    null !== v && (M = v(d.F, i));
                    var b = h + o * (M - r), m = a ? b : this.zn - 1 - b;
                    d.p = m
                }
            }
        }, t.prototype.Eh = function (t, i, n) {
            this.Sh();
            for (var h = this.xh(), s = l(this.Nh()), r = s.vn(), e = s._n(), u = this.yh() - 1, a = this.Mh(), o = u / (e - r), f = void 0 === n ? 0 : n.from, c = void 0 === n ? t.length : n.to, v = this.Th(), _ = f; _ < c; _++) {
                var d = t[_], w = d.open, M = d.high, b = d.low, m = d.close;
                null !== v && (w = v(d.open, i), M = v(d.high, i), b = v(d.low, i), m = v(d.close, i));
                var g = h + o * (w - r), p = a ? g : this.zn - 1 - g;
                d.Lh = p, g = h + o * (M - r), p = a ? g : this.zn - 1 - g, d.Bh = p, g = h + o * (b - r), p = a ? g : this.zn - 1 - g, d.Ah = p, g = h + o * (m - r), p = a ? g : this.zn - 1 - g, d.Oh = p
            }
        }, t.prototype.Ei = function (t, i) {
            var n = this.hh(t, i);
            return this.Vh(n, i)
        }, t.prototype.Vh = function (t, i) {
            var n = t;
            return this._h() ? n = function (t, i) {
                return i < 0 && (t = -t), t / 100 * i + i
            }(n, i) : this.dh() && (n = function (t, i) {
                return t -= 100, i < 0 && (t = -t), t / 100 * i + i
            }(n, i)), n
        }, t.prototype.zh = function () {
            return this.Kn
        }, t.prototype.Ph = function () {
            if (this.$n) return this.$n;
            for (var t = [], i = 0; i < this.Kn.length; i++) {
                var n = this.Kn[i];
                null === n.li() && n.fi(i + 1), t.push(n)
            }
            return t = vt(t), this.$n = t, this.$n
        }, t.prototype.Fh = function (t) {
            -1 === this.Kn.indexOf(t) && (this.Kn.push(t), this.uh(), this.Ih())
        }, t.prototype.Wh = function (t) {
            var i = this.Kn.indexOf(t);
            if (-1 === i) throw new Error("source is not attached to scale");
            this.Kn.splice(i, 1), 0 === this.Kn.length && (this.ah({wh: !0}), this.bh(null)), this.uh(), this.Ih()
        }, t.prototype.H = function () {
            for (var t = null, i = 0, n = this.Kn; i < n.length; i++) {
                var h = n[i].H();
                null !== h && ((null === t || h.jh < t.jh) && (t = h))
            }
            return null === t ? null : t.J
        }, t.prototype.Mh = function () {
            return this.Si.invertScale
        }, t.prototype.Vn = function () {
            return this.Xn || (this.nh.Tn(), this.Xn = this.nh.Vn(), this.Hn.en()), this.Xn
        }, t.prototype.Rh = function () {
            return this.Hn
        }, t.prototype.Uh = function (t) {
            this._h() || this.dh() || null === this.Zn && null === this.In && (this.ii() || (this.Zn = this.zn - t, this.In = l(this.Nh()).cn()))
        }, t.prototype.qh = function (t) {
            if (!this._h() && !this.dh() && null !== this.Zn) {
                this.ah({wh: !1}), (t = this.zn - t) < 0 && (t = 0);
                var i = (this.Zn + .2 * (this.zn - 1)) / (t + .2 * (this.zn - 1)), n = l(this.In).cn();
                i = Math.max(i, .1), n.Mn(i), this.bh(n)
            }
        }, t.prototype.Hh = function () {
            this._h() || this.dh() || (this.Zn = null, this.In = null)
        }, t.prototype.Yh = function (t) {
            this.fh() || null === this.Jn && null === this.In && (this.ii() || (this.Jn = t, this.In = l(this.Nh()).cn()))
        }, t.prototype.Kh = function (t) {
            if (!this.fh() && null !== this.Jn) {
                var i = l(this.Nh()).dn() / (this.yh() - 1), n = t - this.Jn;
                this.Mh() && (n *= -1);
                var h = n * i, s = l(this.In).cn();
                s.bn(h), this.bh(s, !0), this.Xn = null
            }
        }, t.prototype.$h = function () {
            this.fh() || null !== this.Jn && (this.Jn = null, this.In = null)
        }, t.prototype.Xh = function () {
            return this.Gn || this.uh(), this.Gn
        }, t.prototype.ni = function (t, i) {
            switch (this.Si.mode) {
                case 2:
                    return this.Xh().Xi(ht(t, i));
                case 3:
                    return this.Xh().Xi(rt(t, i));
                default:
                    return this.Zh(t)
            }
        }, t.prototype.An = function (t) {
            switch (this.Si.mode) {
                case 2:
                case 3:
                    return this.Xh().Xi(t);
                default:
                    return this.Zh(t)
            }
        }, t.prototype.Jh = function (t) {
            return this.Zh(t, l(this.Gh()).Xh())
        }, t.prototype.Qh = function (t, i) {
            return t = ht(t, i), dt.Xi(t)
        }, t.prototype.ts = function () {
            return this.Kn
        }, t.prototype.ns = function (t) {
            this.Wn = {Rn: t, jn: !1}
        }, t.prototype.Ri = function () {
            this.Kn.forEach((function (t) {
                return t.Ri()
            }))
        }, t.prototype.uh = function () {
            this.Xn = null;
            var t = this.Gh(), i = 100;
            null !== t && (i = Math.round(1 / t.hs())), this.Gn = wt, this._h() ? (this.Gn = dt, i = 100) : this.dh() ? (this.Gn = new $(100, 1), i = 100) : null !== t && (this.Gn = t.Xh()), this.nh = new ct(this, i, this.hh.bind(this), this.sh.bind(this)), this.nh.Tn()
        }, t.prototype.Ih = function () {
            this.$n = null
        }, t.prototype.Gh = function () {
            return this.Kn[0] || null
        }, t.prototype.kh = function () {
            return this.Mh() ? this.Si.scaleMargins.bottom * this.Mt() + this.qn : this.Si.scaleMargins.top * this.Mt() + this.Un
        }, t.prototype.xh = function () {
            return this.Mh() ? this.Si.scaleMargins.top * this.Mt() + this.Un : this.Si.scaleMargins.bottom * this.Mt() + this.qn
        }, t.prototype.Sh = function () {
            this.Wn.jn || (this.Wn.jn = !0, this.ss())
        }, t.prototype.lh = function () {
            this.Pn = null
        }, t.prototype.sh = function (t, i) {
            if (this.Sh(), this.ii()) return 0;
            t = this.On() && t ? ut(t) : t;
            var n = l(this.Nh()), h = this.xh() + (this.yh() - 1) * (t - n.vn()) / n.dn();
            return this.Dh(h)
        }, t.prototype.hh = function (t, i) {
            if (this.Sh(), this.ii()) return 0;
            var n = this.Dh(t), h = l(this.Nh()), s = h.vn() + h.dn() * ((n - this.xh()) / (this.yh() - 1));
            return this.On() ? at(s) : s
        }, t.prototype.mh = function () {
            this.Xn = null, this.nh.Tn()
        }, t.prototype.ss = function () {
            var t = this.Wn.Rn;
            if (null !== t) {
                for (var i = null, n = 0, h = 0, s = 0, r = this.ts(); s < r.length; s++) {
                    var e = r[s], u = e.H();
                    if (null !== u) {
                        var a = e.rs(t.es(), t.us()), o = a && a.Nh();
                        if (null !== o) {
                            switch (this.Si.mode) {
                                case 1:
                                    o = ot(o);
                                    break;
                                case 2:
                                    o = st(o, u.J);
                                    break;
                                case 3:
                                    o = et(o, u.J)
                            }
                            if (i = null === i ? o : i.wn(l(o)), null !== a) {
                                var f = a.os();
                                null !== f && (n = Math.max(n, f.above), h = Math.max(n, f.below))
                            }
                        }
                    }
                }
                if (n === this.Un && h === this.qn || (this.Un = n, this.qn = h, this.Xn = null, this.lh()), null !== i) {
                    if (i.vn() === i._n()) {
                        var c = this.Gh(), v = 5 * (null === c || this._h() || this.dh() ? 1 : c.hs());
                        i = new J(i.vn() - v, i._n() + v)
                    }
                    this.bh(i)
                } else null === this.Fn && this.bh(new J(-.5, .5));
                this.Wn.jn = !0
            }
        }, t.prototype.Th = function () {
            return this._h() ? ht : this.dh() ? rt : this.On() ? ut : null
        }, t.prototype.Zh = function (t, i) {
            return void 0 === this.ih.priceFormatter ? (void 0 === i && (i = this.Xh()), i.Xi(t)) : this.ih.priceFormatter(t)
        }, t
    }();

    function bt(t) {
        void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor)
    }

    !function (t) {
        t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible"
    }(_t || (_t = {}));
    var mt = function (t) {
        return t.getUTCFullYear()
    };

    function gt(t, i, n) {
        return i.replace(/yyyy/g, function (t) {
            return K(mt(t), 4)
        }(t)).replace(/yy/g, function (t) {
            return K(mt(t) % 100, 2)
        }(t)).replace(/MMMM/g, function (t, i) {
            return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {month: "long"})
        }(t, n)).replace(/MMM/g, function (t, i) {
            return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {month: "short"})
        }(t, n)).replace(/MM/g, function (t) {
            return K(function (t) {
                return t.getUTCMonth() + 1
            }(t), 2)
        }(t)).replace(/dd/g, function (t) {
            return K(function (t) {
                return t.getUTCDate()
            }(t), 2)
        }(t))
    }

    var pt = function () {
        function t(t, i) {
            void 0 === t && (t = "yyyy-MM-dd"), void 0 === i && (i = "default"), this.ls = t, this.fs = i
        }

        return t.prototype.Xi = function (t) {
            return gt(t, this.ls, this.fs)
        }, t
    }(), yt = function () {
        function t(t) {
            this.cs = t || "%h:%m:%s"
        }

        return t.prototype.Xi = function (t) {
            return this.cs.replace("%h", K(t.getUTCHours(), 2)).replace("%m", K(t.getUTCMinutes(), 2)).replace("%s", K(t.getUTCSeconds(), 2))
        }, t
    }(), kt = {vs: "yyyy-MM-dd", _s: "%h:%m:%s", ds: " ", ws: "default"}, xt = function () {
        function t(t) {
            void 0 === t && (t = {});
            var i = e(e({}, kt), t);
            this.Ms = new pt(i.vs, i.ws), this.bs = new yt(i._s), this.gs = i.ds
        }

        return t.prototype.Xi = function (t) {
            return "" + this.Ms.Xi(t) + this.gs + this.bs.Xi(t)
        }, t
    }();
    var Nt = function () {
        function t(t, i) {
            void 0 === i && (i = 50), this.ps = 0, this.ys = 1, this.ks = 1, this.xs = new Map, this.Ns = new Map, this.Ss = t, this.Ds = i
        }

        return t.prototype.Xi = function (t) {
            var i = void 0 === t.Cs ? new Date(1e3 * t.Ts).getTime() : new Date(Date.UTC(t.Cs.year, t.Cs.month - 1, t.Cs.day)).getTime(),
                n = this.xs.get(i);
            if (void 0 !== n) return n.Es;
            if (this.ps === this.Ds) {
                var h = this.Ns.get(this.ks);
                this.Ns.delete(this.ks), this.xs.delete(o(h)), this.ks++, this.ps--
            }
            var s = this.Ss(t);
            return this.xs.set(i, {Es: s, Ls: this.ys}), this.Ns.set(this.ys, i), this.ps++, this.ys++, s
        }, t
    }(), St = function () {
        function t(t, i) {
            a(t <= i, "right should be >= left"), this.Bs = t, this.As = i
        }

        return t.prototype.es = function () {
            return this.Bs
        }, t.prototype.us = function () {
            return this.As
        }, t.prototype.Os = function () {
            return this.As - this.Bs + 1
        }, t.prototype.Vs = function (t) {
            return this.Bs <= t && t <= this.As
        }, t.prototype.fn = function (t) {
            return this.Bs === t.es() && this.As === t.us()
        }, t
    }();

    function Dt(t, i) {
        return null === t || null === i ? t === i : t.fn(i)
    }

    var Ct, Tt = function () {
        function t() {
            this.zs = new Map, this.xs = null
        }

        return t.prototype.Ps = function (t) {
            var i = this;
            this.xs = null, this.zs.clear(), t.forEach((function (t, n) {
                var h = i.zs.get(t.Fs);
                void 0 === h && (h = [], i.zs.set(t.Fs, h)), h.push({Is: n, P: t.P, Ws: t.Fs})
            }))
        }, t.prototype.js = function (t, i) {
            var n = Math.ceil(i / t);
            return null !== this.xs && this.xs.Rs === n || (this.xs = {Vn: this.Us(n), Rs: n}), this.xs.Vn
        }, t.prototype.Us = function (t) {
            for (var i = [], n = 0, h = Array.from(this.zs.keys()).sort((function (t, i) {
                return i - t
            })); n < h.length; n++) {
                var s = h[n];
                if (this.zs.get(s)) {
                    var r = i;
                    i = [];
                    for (var e = r.length, u = 0, a = o(this.zs.get(s)), l = a.length, f = 1 / 0, c = -1 / 0, v = 0; v < l; v++) {
                        for (var _ = a[v], d = _.Is; u < e;) {
                            var w = r[u], M = w.Is;
                            if (!(M < d)) {
                                f = M;
                                break
                            }
                            u++, i.push(w), c = M, f = 1 / 0
                        }
                        f - d >= t && d - c >= t && (i.push(_), c = d)
                    }
                    for (; u < e; u++) i.push(r[u])
                }
            }
            return i
        }, t
    }(), Et = function () {
        function t(t) {
            this.qs = t
        }

        return t.prototype.Hs = function () {
            return null === this.qs ? null : new St(Math.floor(this.qs.es()), Math.ceil(this.qs.us()))
        }, t.prototype.Ys = function () {
            return this.qs
        }, t.Ks = function () {
            return new t(null)
        }, t
    }();
    !function (t) {
        t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds"
    }(Ct || (Ct = {}));
    var Lt = function () {
        function t(t, i, n) {
            this.$s = 0, this.Xs = null, this.Zs = [], this.Jn = null, this.Zn = null, this.Js = new Tt, this.Gs = new Map, this.Qs = Et.Ks(), this.tr = !0, this.ir = new Z, this.nr = new Z, this.hr = new Z, this.sr = null, this.rr = null, this.er = [], this.Si = i, this.ih = n, this.ur = i.rightOffset, this.ar = i.barSpacing, this.ri = t, this.lr()
        }

        return t.prototype.I = function () {
            return this.Si
        }, t.prototype.cr = function (t) {
            c(this.ih, t), this.vr(), this.lr()
        }, t.prototype.eh = function (t, i) {
            c(this.Si, t), this.Si.fixLeftEdge && this._r(), void 0 !== t.barSpacing && this.ri.dr(t.barSpacing), void 0 !== t.rightOffset && this.ri.wr(t.rightOffset), this.vr(), this.lr(), this.hr.en()
        }, t.prototype.ei = function (t) {
            var i;
            return (null === (i = this.Zs[t]) || void 0 === i ? void 0 : i.P) || null
        }, t.prototype.Mr = function (t, i) {
            if (this.Zs.length < 1) return null;
            if (t.Ts > this.Zs[this.Zs.length - 1].P.Ts) return i ? this.Zs.length - 1 : null;
            for (var n = 0; n < this.Zs.length; ++n) {
                if (t.Ts === this.Zs[n].P.Ts) return n;
                if (t.Ts < this.Zs[n].P.Ts) return i ? n : null
            }
            return null
        }, t.prototype.ii = function () {
            return 0 === this.$s || 0 === this.Zs.length
        }, t.prototype.br = function () {
            return this.mr(), this.Qs.Hs()
        }, t.prototype.gr = function () {
            return this.mr(), this.Qs.Ys()
        }, t.prototype.pr = function () {
            var t = this.br();
            if (null === t) return null;
            var i = {from: t.es(), to: t.us()};
            return this.yr(i)
        }, t.prototype.yr = function (t) {
            var i = Math.round(t.from), n = Math.round(t.to), h = l(this.kr()), s = l(this.Nr());
            return {from: l(this.ei(Math.max(h, i))), to: l(this.ei(Math.min(s, n)))}
        }, t.prototype.Sr = function (t) {
            var i = this.ri.U();
            return {from: l(i.Mr(t.from, !0)), to: l(i.Mr(t.to, !0))}
        }, t.prototype.Dr = function () {
            return this.Js
        }, t.prototype.wt = function () {
            return this.$s
        }, t.prototype.Cr = function (t) {
            if (isFinite(t) && !(t <= 0) && this.$s !== t) {
                if (this.Si.lockVisibleTimeRangeOnResize && this.$s) {
                    var i = this.ar * t / this.$s;
                    this.Tr(i)
                }
                if (this.Si.fixLeftEdge) {
                    var n = this.br();
                    if (null !== n) if (n.es() <= 0) {
                        var h = this.$s - t;
                        this.ur -= Math.round(h / this.ar) + 1
                    }
                }
                this.$s = t, this.tr = !0, this.Er(), this.Lr()
            }
        }, t.prototype.G = function (t) {
            if (this.ii() || !_(t)) return 0;
            var i = this.Br() + this.ur - t;
            return this.$s - (i + .5) * this.ar
        }, t.prototype.Ar = function (t, i) {
            for (var n = this.Br(), h = void 0 === i ? 0 : i.from, s = void 0 === i ? t.length : i.to, r = h; r < s; r++) {
                var e = t[r].P, u = n + this.ur - e, a = this.$s - (u + .5) * this.ar;
                t[r].g = a
            }
        }, t.prototype.Or = function (t) {
            return Math.ceil(this.Vr(t))
        }, t.prototype.wr = function (t) {
            this.tr = !0, this.ur = t, this.Lr(), this.ri.zr(), this.ri.Pr()
        }, t.prototype.Fr = function () {
            return this.ar
        }, t.prototype.dr = function (t) {
            this.Tr(t), this.Lr(), this.ri.zr(), this.ri.Pr()
        }, t.prototype.Ir = function () {
            return this.ur
        }, t.prototype.Vn = function () {
            if (this.ii()) return null;
            if (null !== this.rr) return this.rr;
            for (var t = this.ar, i = 5 * (this.ri.I().layout.fontSize + 4), n = Math.round(i / t), h = l(this.br()), s = Math.max(h.es(), h.es() - n), r = Math.max(h.us(), h.us() - n), e = 0, u = 0, a = this.Js.js(t, i); u < a.length; u++) {
                var o = a[u];
                if (s <= o.Is && o.Is <= r) {
                    var f = this.ei(o.Is);
                    if (null !== f) {
                        if (e < this.er.length) {
                            var c = this.er[e];
                            c.Ln = this.G(o.Is), c.Bn = this.Wr(f, o.Ws), c.Ws = o.Ws
                        } else this.er.push({Ln: this.G(o.Is), Bn: this.Wr(f, o.Ws), Ws: o.Ws});
                        e++
                    }
                }
            }
            return this.er.length = e, this.rr = this.er, this.er
        }, t.prototype.jr = function () {
            this.tr = !0, this.dr(this.Si.barSpacing), this.wr(this.Si.rightOffset)
        }, t.prototype.Rr = function (t) {
            this.tr = !0, this.Xs = t, this.Lr(), this._r()
        }, t.prototype.Ur = function (t, i) {
            var n = this.Vr(t), h = this.Fr(), s = h + i * (h / 10);
            this.dr(s), this.Si.rightBarStaysOnScroll || this.wr(this.Ir() + (n - this.Vr(t)))
        }, t.prototype.Uh = function (t) {
            this.Jn && this.$h(), null === this.Zn && null === this.sr && (this.ii() || (this.Zn = t, this.qr()))
        }, t.prototype.qh = function (t) {
            if (null !== this.sr) {
                var i = G(this.$s - t, 0, this.$s), n = G(this.$s - l(this.Zn), 0, this.$s);
                0 !== i && 0 !== n && this.dr(this.sr.Fr * i / n)
            }
        }, t.prototype.Hh = function () {
            null !== this.Zn && (this.Zn = null, this.Hr())
        }, t.prototype.Yh = function (t) {
            null === this.Jn && null === this.sr && (this.ii() || (this.Jn = t, this.qr()))
        }, t.prototype.Kh = function (t) {
            if (null !== this.Jn) {
                var i = (this.Jn - t) / this.Fr();
                this.ur = l(this.sr).Ir + i, this.tr = !0, this.Lr()
            }
        }, t.prototype.$h = function () {
            null !== this.Jn && (this.Jn = null, this.Hr())
        }, t.prototype.Yr = function () {
            this.Kr(this.Si.rightOffset)
        }, t.prototype.Kr = function (t, i) {
            var n = this;
            if (void 0 === i && (i = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number");
            if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
            var h = this.ur, s = (new Date).getTime(), r = function () {
                var e = ((new Date).getTime() - s) / i, u = e >= 1, a = u ? t : h + (t - h) * e;
                n.wr(a), u || setTimeout(r, 20)
            };
            r()
        }, t.prototype.O = function (t) {
            this.tr = !0, this.Zs = t, this.Js.Ps(t), this.Lr()
        }, t.prototype.$r = function () {
            return this.ir
        }, t.prototype.Xr = function () {
            return this.nr
        }, t.prototype.Zr = function () {
            return this.hr
        }, t.prototype.Br = function () {
            return this.Xs || 0
        }, t.prototype.Jr = function (t) {
            var i = t.Os();
            this.Tr(this.$s / i), this.ur = t.us() - this.Br(), this.Lr(), this.tr = !0, this.ri.zr(), this.ri.Pr()
        }, t.prototype.Gr = function () {
            var t = this.kr(), i = this.Nr();
            null !== t && null !== i && this.Jr(new St(t, i + this.Si.rightOffset))
        }, t.prototype.Qr = function (t) {
            var i = new St(t.from, t.to);
            this.Jr(i)
        }, t.prototype.ui = function (t) {
            return void 0 !== this.ih.timeFormatter ? this.ih.timeFormatter(t.Cs || t.Ts) : this.te.Xi(new Date(1e3 * t.Ts))
        }, t.prototype.kr = function () {
            return 0 === this.Zs.length ? null : 0
        }, t.prototype.Nr = function () {
            return 0 === this.Zs.length ? null : this.Zs.length - 1
        }, t.prototype.ie = function (t) {
            return (this.$s + 1 - t) / this.ar
        }, t.prototype.Vr = function (t) {
            var i = this.ie(t), n = this.Br() + this.ur - i;
            return Math.round(1e6 * n) / 1e6
        }, t.prototype.Tr = function (t) {
            var i = this.ar;
            this.ar = t, this.Er(), i !== this.ar && (this.tr = !0, this.ne())
        }, t.prototype.mr = function () {
            if (this.tr) if (this.tr = !1, this.ii()) this.he(Et.Ks()); else {
                var t = this.Br(), i = this.$s / this.ar, n = this.ur + t, h = new St(n - i + 1, n);
                this.he(new Et(h))
            }
        }, t.prototype.Er = function () {
            if (this.ar < .5 && (this.ar = .5, this.tr = !0), 0 !== this.$s) {
                var t = .5 * this.$s;
                this.ar > t && (this.ar = t, this.tr = !0)
            }
        }, t.prototype.Lr = function () {
            var t = this.se();
            this.ur > t && (this.ur = t, this.tr = !0);
            var i = this.re();
            null !== i && this.ur < i && (this.ur = i, this.tr = !0)
        }, t.prototype.re = function () {
            var t = this.kr(), i = this.Xs;
            return null === t || null === i ? null : t - i - 1 + (this.Si.fixLeftEdge ? this.$s / this.ar : Math.min(2, this.Zs.length))
        }, t.prototype.se = function () {
            return this.$s / this.ar - Math.min(2, this.Zs.length)
        }, t.prototype.qr = function () {
            this.sr = {Fr: this.Fr(), Ir: this.Ir()}
        }, t.prototype.Hr = function () {
            this.sr = null
        }, t.prototype.Wr = function (t, i) {
            var n = this, h = this.Gs.get(i);
            return void 0 === h && (h = new Nt((function (t) {
                return n.ee(t, i)
            })), this.Gs.set(i, h)), h.Xi(t)
        }, t.prototype.ee = function (t, i) {
            var n, h, s = this.Si.timeVisible;
            return h = i < 20 && s ? this.Si.secondsVisible ? 4 : 3 : i < 40 && s ? 3 : i < 50 || i < 60 ? 2 : i < 70 ? 1 : 0, void 0 !== this.Si.tickMarkFormatter ? this.Si.tickMarkFormatter(null !== (n = t.Cs) && void 0 !== n ? n : t.Ts, h, this.ih.locale) : function (t, i, n) {
                var h = {};
                switch (i) {
                    case 0:
                        h.year = "numeric";
                        break;
                    case 1:
                        h.month = "short";
                        break;
                    case 2:
                        h.day = "numeric";
                        break;
                    case 3:
                        h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit";
                        break;
                    case 4:
                        h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit", h.second = "2-digit"
                }
                var s = void 0 === t.Cs ? new Date(1e3 * t.Ts) : new Date(Date.UTC(t.Cs.year, t.Cs.month - 1, t.Cs.day));
                return new Date(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()).toLocaleString(n, h)
            }(t, h, this.ih.locale)
        }, t.prototype.he = function (t) {
            var i = this.Qs;
            this.Qs = t, Dt(i.Hs(), this.Qs.Hs()) || this.ir.en(), Dt(i.Ys(), this.Qs.Ys()) || this.nr.en(), this.ne()
        }, t.prototype.ne = function () {
            this.rr = null
        }, t.prototype.vr = function () {
            this.ne(), this.Gs.clear()
        }, t.prototype.lr = function () {
            var t = this.ih.dateFormat;
            this.Si.timeVisible ? this.te = new xt({
                vs: t,
                _s: this.Si.secondsVisible ? "%h:%m:%s" : "%h:%m",
                ds: "   ",
                ws: this.ih.locale
            }) : this.te = new pt(t, this.ih.locale)
        }, t.prototype._r = function () {
            if (this.Si.fixLeftEdge) {
                var t = this.kr();
                if (null !== t) {
                    var i = l(this.br()).es() - t;
                    if (i < 0) {
                        var n = this.ur - i - 1;
                        this.wr(n)
                    }
                }
            }
        }, t
    }();

    function Bt(t) {
        return !v(t) && !d(t)
    }

    function At(t) {
        return v(t)
    }

    var Ot = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

    function Vt(t, i, n) {
        return void 0 !== n ? n += " " : n = "", void 0 === i && (i = Ot), "" + n + t + "px " + i
    }

    var zt = function () {
        function t(t) {
            this.ue = {Tt: 1, Ct: 4, Pt: NaN, Nt: "", ae: "", ut: "", Lt: 0, Bt: 0, At: 0, Et: 0, zt: 0}, this.B = t
        }

        return t.prototype.I = function () {
            var t = this.ue, i = this.oe(), n = this.le();
            return t.Pt === i && t.ae === n || (t.Pt = i, t.ae = n, t.Nt = Vt(i, n), t.Et = Math.floor(i / 3.5), t.Lt = t.Et, t.Bt = Math.max(Math.ceil(i / 2 - t.Ct / 2), 0), t.At = Math.ceil(i / 2 + t.Ct / 2), t.zt = Math.round(i / 10)), t.ut = this.fe(), this.ue
        }, t.prototype.fe = function () {
            return this.B.I().layout.textColor
        }, t.prototype.oe = function () {
            return this.B.I().layout.fontSize
        }, t.prototype.le = function () {
            return this.B.I().layout.fontFamily
        }, t
    }();

    function Pt(t) {
        return "left" === t || "right" === t
    }

    var Ft = function () {
        function t() {
            this.tt = null
        }

        return t.prototype._ = function (t) {
            this.tt = t
        }, t.prototype.h = function (t, i, h, s) {
            var r = this;
            if (null !== this.tt) {
                var e = Math.max(1, Math.floor(i));
                t.lineWidth = e;
                var u = Math.ceil(this.tt.rt * i), a = Math.ceil(this.tt.st * i);
                !function (t, i) {
                    t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore()
                }(t, (function () {
                    var h = l(r.tt);
                    if (h.ce) {
                        t.strokeStyle = h.ve, n(t, h._e), t.beginPath();
                        for (var s = 0, o = h.de; s < o.length; s++) {
                            var f = o[s], c = Math.round(f.Ln * i);
                            t.moveTo(c, -e), t.lineTo(c, u + e)
                        }
                        t.stroke()
                    }
                    if (h.we) {
                        t.strokeStyle = h.Me, n(t, h.be), t.beginPath();
                        for (var v = 0, _ = h.me; v < _.length; v++) {
                            var d = _[v], w = Math.round(d.Ln * i);
                            t.moveTo(-e, w), t.lineTo(a + e, w)
                        }
                        t.stroke()
                    }
                }))
            }
        }, t
    }(), It = function () {
        function t(t) {
            this.lt = new Ft, this.L = !0, this.wi = t
        }

        return t.prototype.O = function () {
            this.L = !0
        }, t.prototype.W = function (t, i) {
            if (this.L) {
                var n = this.wi.vt().I().grid, h = {
                    rt: t,
                    st: i,
                    we: n.horzLines.visible,
                    ce: n.vertLines.visible,
                    Me: n.horzLines.color,
                    ve: n.vertLines.color,
                    be: n.horzLines.style,
                    _e: n.vertLines.style,
                    me: this.wi.Ti().Vn(),
                    de: this.wi.vt().U().Vn() || []
                };
                this.lt._(h), this.L = !1
            }
            return this.lt
        }, t
    }(), Wt = function () {
        function t() {
            this.ge = new WeakMap, this.L = !0
        }

        return t.prototype._i = function (t) {
            var i = this.ge.get(t);
            return void 0 === i && (i = [new It(t)], this.ge.set(t, i)), this.L && (i.forEach((function (t) {
                return t.O()
            })), this.L = !1), i
        }, t.prototype.pe = function () {
            this.L = !0
        }, t
    }();
    var jt = function () {
        function t(t) {
            this.ye = new Map, this.ke = !1, this.xe = [], this.Ne = t
        }

        return t.prototype.Se = function (t, i) {
            var n = function (t, i) {
                return void 0 === t ? i : {De: Math.max(t.De, i.De), wh: t.wh || i.wh}
            }(this.ye.get(t), i);
            this.ye.set(t, n)
        }, t.prototype.Ce = function () {
            return this.Ne
        }, t.prototype.Te = function (t) {
            var i = this.ye.get(t);
            return void 0 === i ? {De: this.Ne} : {De: Math.max(this.Ne, i.De), wh: i.wh}
        }, t.prototype.Ee = function () {
            this.xe = [{Le: 0}]
        }, t.prototype.Be = function (t) {
            this.xe = [{Le: 1, J: t}]
        }, t.prototype.Ae = function () {
            this.xe = [{Le: 4}]
        }, t.prototype.dr = function (t) {
            this.xe.push({Le: 2, J: t})
        }, t.prototype.wr = function (t) {
            this.xe.push({Le: 3, J: t})
        }, t.prototype.Oe = function () {
            return this.xe
        }, t.prototype.wn = function (t) {
            var i = this;
            this.ke = this.ke || t.ke, this.xe = this.xe.concat(t.xe);
            for (var n = 0, h = t.xe; n < h.length; n++) {
                var s = h[n];
                this.Ve(s)
            }
            this.Ne = Math.max(this.Ne, t.Ne), t.ye.forEach((function (t, n) {
                i.Se(n, t)
            }))
        }, t.prototype.Ve = function (t) {
            switch (t.Le) {
                case 0:
                    this.Ee();
                    break;
                case 1:
                    this.Be(t.J);
                    break;
                case 2:
                    this.dr(t.J);
                    break;
                case 3:
                    this.wr(t.J);
                    break;
                case 4:
                    this.Ae()
            }
        }, t
    }(), Rt = function () {
        function t(t) {
            this.ze = t
        }

        return t.prototype.Xi = function (t) {
            var i = "";
            return t < 0 && (i = "-", t = -t), t < 995 ? i + this.Pe(t) : t < 999995 ? i + this.Pe(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.Pe(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.Pe(t / 1e9) + "B")
        }, t.prototype.Pe = function (t) {
            var i = Math.pow(10, this.ze);
            return ((t = Math.round(t * i) / i) >= 1e-15 && t < 1 ? t.toFixed(this.ze).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, (function (t, i) {
                return i
            }))
        }, t
    }();

    function Ut(t, i, n, h) {
        if (0 !== i.length) {
            var s = i[h.from].g, r = i[h.from].p;
            t.moveTo(s, r);
            for (var e = h.from + 1; e < h.to; ++e) {
                var u = i[e];
                if (1 === n) {
                    var a = i[e - 1].p, o = u.g;
                    t.lineTo(o, a)
                }
                t.lineTo(u.g, u.p)
            }
        }
    }

    var qt = function (t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.v = null, i
        }

        return r(i, t), i.prototype._ = function (t) {
            this.v = t
        }, i.prototype.u = function (t) {
            if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                if (t.lineCap = "butt", t.strokeStyle = this.v.S, t.lineWidth = this.v.et, n(t, this.v.at), t.lineWidth = 1, t.beginPath(), 1 === this.v.m.length) {
                    var i = this.v.m[0], h = this.v.Fe / 2;
                    t.moveTo(i.g - h, this.v.Ie), t.lineTo(i.g - h, i.p), t.lineTo(i.g + h, i.p), t.lineTo(i.g + h, this.v.Ie)
                } else t.moveTo(this.v.m[this.v.M.from].g, this.v.Ie), t.lineTo(this.v.m[this.v.M.from].g, this.v.m[this.v.M.from].p), Ut(t, this.v.m, this.v.We, this.v.M), this.v.M.to > this.v.M.from && (t.lineTo(this.v.m[this.v.M.to - 1].g, this.v.Ie), t.lineTo(this.v.m[this.v.M.from].g, this.v.Ie));
                t.closePath();
                var s = t.createLinearGradient(0, 0, 0, this.v.Ie);
                s.addColorStop(0, this.v.je), s.addColorStop(1, this.v.Re), t.fillStyle = s, t.fill()
            }
        }, i
    }(p), Ht = function (t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.v = null, i
        }

        return r(i, t), i.prototype._ = function (t) {
            this.v = t
        }, i.prototype.u = function (t) {
            if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                if (t.lineCap = "butt", t.lineWidth = this.v.et, n(t, this.v.at), t.strokeStyle = this.v.S, t.lineJoin = "miter", t.beginPath(), 1 === this.v.m.length) {
                    var i = this.v.m[0];
                    t.moveTo(i.g - this.v.Fe / 2, i.p), t.lineTo(i.g + this.v.Fe / 2, i.p)
                } else Ut(t, this.v.m, this.v.We, this.v.M);
                t.stroke()
            }
        }, i
    }(p);

    function Yt(t, i, n, h, s) {
        void 0 === h && (h = 0), void 0 === s && (s = t.length);
        for (var r = s - h; 0 < r;) {
            var e = r >> 1, u = h + e;
            n(t[u], i) ? (h = u + 1, r -= e + 1) : r = e
        }
        return h
    }

    function Kt(t, i, n, h, s) {
        void 0 === h && (h = 0), void 0 === s && (s = t.length);
        for (var r = s - h; 0 < r;) {
            var e = r >> 1, u = h + e;
            n(i, t[u]) ? r = e : (h = u + 1, r -= e + 1)
        }
        return h
    }

    function $t(t, i) {
        return t.P < i
    }

    function Xt(t, i) {
        return t < i.P
    }

    function Zt(t, i, n) {
        var h = i.es(), s = i.us(), r = Yt(t, h, $t), e = Kt(t, s, Xt);
        if (!n) return {from: r, to: e};
        var u = r, a = e;
        return r > 0 && r < t.length && t[r].P >= h && (u = r - 1), e > 0 && e < t.length && t[e - 1].P <= s && (a = e + 1), {
            from: u,
            to: a
        }
    }

    var Jt = function () {
        function t(t, i, n) {
            this.Ue = !0, this.qe = !0, this.He = [], this.Ye = null, this.Ke = t, this.$e = i, this.Xe = n
        }

        return t.prototype.O = function (t) {
            this.Ue = !0, "data" === t && (this.qe = !0)
        }, t.prototype.Ze = function () {
            this.qe && (this.Je(), this.qe = !1), this.Ue && (this.Ge(), this.Ue = !1)
        }, t.prototype.Qe = function () {
            this.Ye = null
        }, t.prototype.Ge = function () {
            var t = this.Ke.Z(), i = this.$e.U();
            if (this.Qe(), !i.ii() && !t.ii()) {
                var n = i.br();
                if (null !== n && 0 !== this.Ke.Yi().tu()) {
                    var h = this.Ke.H();
                    null !== h && (this.Ye = Zt(this.He, n, this.Xe), this.iu(t, i, h.J))
                }
            }
        }, t
    }(), Gt = function (t) {
        function i(i, n) {
            return t.call(this, i, n, !0) || this
        }

        return r(i, t), i.prototype.iu = function (t, i, n) {
            i.Ar(this.He, m(this.Ye)), t.Ch(this.He, n, m(this.Ye))
        }, i.prototype.nu = function (t, i) {
            return {P: t, F: i, g: NaN, p: NaN}
        }, i.prototype.Je = function () {
            var t = this, i = this.Ke.$();
            this.He = this.Ke.Yi().hu().map((function (n) {
                var h = n.J[3];
                return t.su(n.Is, h, i)
            }))
        }, i
    }(Jt), Qt = function (t) {
        function i(i, n) {
            var h = t.call(this, i, n) || this;
            return h.lt = new g, h.ru = new qt, h.eu = new Ht, h.lt.i([h.ru, h.eu]), h
        }

        return r(i, t), i.prototype.W = function (t, i) {
            var n = this.Ke.I();
            if (!n.visible) return null;
            this.Ze();
            var h = {
                We: n.lineType,
                m: this.He,
                S: n.lineColor,
                at: n.lineStyle,
                et: n.lineWidth,
                je: n.topColor,
                Re: n.bottomColor,
                Ie: t,
                M: this.Ye,
                Fe: this.$e.U().Fr()
            };
            return this.ru._(h), this.eu._(h), this.lt
        }, i.prototype.su = function (t, i) {
            return this.nu(t, i)
        }, i
    }(Gt);
    var ti = function () {
        function t() {
            this.tt = null, this.uu = 0, this.au = 0
        }

        return t.prototype._ = function (t) {
            this.tt = t
        }, t.prototype.h = function (t, i, n, h) {
            if (null !== this.tt && 0 !== this.tt.Yi.length && null !== this.tt.M) {
                if (this.uu = this.ou(i), this.uu >= 2) Math.max(1, Math.floor(i)) % 2 != this.uu % 2 && this.uu--;
                this.au = this.tt.lu ? Math.min(this.uu, Math.floor(i)) : this.uu;
                for (var s = null, r = this.au <= this.uu && this.tt.Fr >= Math.floor(1.5 * i), e = this.tt.M.from; e < this.tt.M.to; ++e) {
                    var u = this.tt.Yi[e];
                    s !== u.ut && (t.fillStyle = u.ut, s = u.ut);
                    var a = Math.floor(.5 * this.au), o = Math.round(u.g * i), l = o - a, f = this.au, c = l + f - 1,
                        v = Math.min(u.Bh, u.Ah), _ = Math.max(u.high, u.Ah), d = Math.round(v * i) - a,
                        w = Math.round(_ * i) + a, M = Math.max(w - d, this.au);
                    t.fillRect(l, d, f, M);
                    var b = Math.ceil(1.5 * this.uu);
                    if (r) {
                        if (this.tt.fu) {
                            var m = o - b, g = Math.max(d, Math.round(u.Lh * i) - a), p = g + f - 1;
                            p > d + M - 1 && (g = (p = d + M - 1) - f + 1), t.fillRect(m, g, l - m, p - g + 1)
                        }
                        var y = o + b, k = Math.max(d, Math.round(u.Oh * i) - a), x = k + f - 1;
                        x > d + M - 1 && (k = (x = d + M - 1) - f + 1), t.fillRect(c + 1, k, y - c, x - k + 1)
                    }
                }
            }
        }, t.prototype.ou = function (t) {
            var i = Math.floor(t);
            return Math.max(i, Math.floor(function (t, i) {
                return Math.floor(.3 * t * i)
            }(l(this.tt).Fr, t)))
        }, t
    }(), ii = function (t) {
        function i(i, n) {
            return t.call(this, i, n, !1) || this
        }

        return r(i, t), i.prototype.iu = function (t, i, n) {
            i.Ar(this.He, m(this.Ye)), t.Eh(this.He, n, m(this.Ye))
        }, i.prototype.cu = function (t, i, n) {
            return {
                P: t,
                open: i.J[0],
                high: i.J[1],
                low: i.J[2],
                close: i.J[3],
                g: NaN,
                Lh: NaN,
                Bh: NaN,
                Ah: NaN,
                Oh: NaN
            }
        }, i.prototype.Je = function () {
            var t = this, i = this.Ke.$();
            this.He = this.Ke.Yi().hu().map((function (n) {
                return t.su(n.Is, n, i)
            }))
        }, i
    }(Jt), ni = function (t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.lt = new ti, i
        }

        return r(i, t), i.prototype.W = function (t, i) {
            var n = this.Ke.I();
            if (!n.visible) return null;
            this.Ze();
            var h = {Yi: this.He, Fr: this.$e.U().Fr(), fu: n.openVisible, lu: n.thinBars, M: this.Ye};
            return this.lt._(h), this.lt
        }, i.prototype.su = function (t, i, n) {
            return e(e({}, this.cu(t, i, n)), {ut: n.K(t).Y})
        }, i
    }(ii), hi = function () {
        function t() {
            this.tt = null, this.uu = 0
        }

        return t.prototype._ = function (t) {
            this.tt = t
        }, t.prototype.h = function (t, i, n, h) {
            if (null !== this.tt && 0 !== this.tt.Yi.length && null !== this.tt.M) {
                if (this.uu = function (t, i) {
                    if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                    var n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI), h = Math.floor(t * n * i),
                        s = Math.floor(t * i), r = Math.min(h, s);
                    return Math.max(Math.floor(i), r)
                }(this.tt.Fr, i), this.uu >= 2) Math.floor(i) % 2 != this.uu % 2 && this.uu--;
                var s = this.tt.Yi;
                this.tt.vu && this._u(t, s, this.tt.M, i), this.tt.du && this.wu(t, s, this.tt.M, this.tt.Fr, i);
                var r = this.Mu(i);
                (!this.tt.du || this.uu > 2 * r) && this.bu(t, s, this.tt.M, i)
            }
        }, t.prototype._u = function (t, i, n, h) {
            if (null !== this.tt) {
                var s = "", r = Math.min(Math.floor(h), Math.floor(this.tt.Fr * h));
                r = Math.max(Math.floor(h), Math.min(r, this.uu));
                for (var e = Math.floor(.5 * r), u = null, a = n.from; a < n.to; a++) {
                    var o = i[a];
                    o.mu !== s && (t.fillStyle = o.mu, s = o.mu);
                    var l = Math.round(Math.min(o.Lh, o.Oh) * h), f = Math.round(Math.max(o.Lh, o.Oh) * h),
                        c = Math.round(o.Bh * h), v = Math.round(o.Ah * h), _ = Math.round(h * o.g) - e, d = _ + r - 1;
                    null !== u && (_ = Math.max(u + 1, _), _ = Math.min(_, d));
                    var w = d - _ + 1;
                    t.fillRect(_, c, w, l - c), t.fillRect(_, f + 1, w, v - f), u = d
                }
            }
        }, t.prototype.Mu = function (t) {
            var i = Math.floor(1 * t);
            this.uu <= 2 * i && (i = Math.floor(.5 * (this.uu - 1)));
            var n = Math.max(Math.floor(t), i);
            return this.uu <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n
        }, t.prototype.wu = function (t, i, n, h, s) {
            if (null !== this.tt) for (var r = "", e = this.Mu(s), u = null, a = n.from; a < n.to; a++) {
                var o = i[a];
                o.Wt !== r && (t.fillStyle = o.Wt, r = o.Wt);
                var l = Math.round(o.g * s) - Math.floor(.5 * this.uu), f = l + this.uu - 1,
                    c = Math.round(Math.min(o.Lh, o.Oh) * s), v = Math.round(Math.max(o.Lh, o.Oh) * s);
                if (null !== u && (l = Math.max(u + 1, l), l = Math.min(l, f)), this.tt.Fr * s > 2 * e) O(t, l, c, f - l + 1, v - c + 1, e); else {
                    var _ = f - l + 1;
                    t.fillRect(l, c, _, v - c + 1)
                }
                u = f
            }
        }, t.prototype.bu = function (t, i, n, h) {
            if (null !== this.tt) for (var s = "", r = this.Mu(h), e = n.from; e < n.to; e++) {
                var u = i[e], a = Math.round(Math.min(u.Lh, u.Oh) * h), o = Math.round(Math.max(u.Lh, u.Oh) * h),
                    l = Math.round(u.g * h) - Math.floor(.5 * this.uu), f = l + this.uu - 1;
                if (u.ut !== s) {
                    var c = u.ut;
                    t.fillStyle = c, s = c
                }
                this.tt.du && (l += r, a += r, f -= r, o -= r), a > o || t.fillRect(l, a, f - l + 1, o - a + 1)
            }
        }, t
    }(), si = function (t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.lt = new hi, i
        }

        return r(i, t), i.prototype.W = function (t, i) {
            var n = this.Ke.I();
            if (!n.visible) return null;
            this.Ze();
            var h = {Yi: this.He, Fr: this.$e.U().Fr(), vu: n.wickVisible, du: n.borderVisible, M: this.Ye};
            return this.lt._(h), this.lt
        }, i.prototype.su = function (t, i, n) {
            var h = n.K(t);
            return e(e({}, this.cu(t, i, n)), {ut: h.Y, mu: h.gu, Wt: h.pu})
        }, i
    }(ii), ri = function () {
        function t() {
            this.tt = null, this.yu = []
        }

        return t.prototype._ = function (t) {
            this.tt = t, this.yu = []
        }, t.prototype.h = function (t, i, n, h) {
            if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                this.yu.length || this.ku(i);
                for (var s = Math.max(1, Math.floor(i)), r = Math.round(this.tt.xu * i) - Math.floor(s / 2), e = r + s, u = this.tt.M.from; u < this.tt.M.to; u++) {
                    var a = this.tt.m[u], o = this.yu[u - this.tt.M.from], l = Math.round(a.p * i);
                    t.fillStyle = a.ut;
                    var f = void 0, c = void 0;
                    l <= r ? (f = l, c = e) : (f = r, c = l - Math.floor(s / 2) + s), t.fillRect(o.es, f, o.us - o.es + 1, c - f)
                }
            }
        }, t.prototype.ku = function (t) {
            if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                var i = Math.ceil(this.tt.Fr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                    n = Math.round(this.tt.Fr * t) - i;
                this.yu = new Array(this.tt.M.to - this.tt.M.from);
                for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                    var s, r = this.tt.m[h], e = Math.round(r.g * t), u = void 0, a = void 0;
                    if (n % 2) u = e - (s = (n - 1) / 2), a = e + s; else u = e - (s = n / 2), a = e + s - 1;
                    this.yu[h - this.tt.M.from] = {es: u, us: a, Nu: e, Su: r.g * t, P: r.P}
                }
                for (h = this.tt.M.from + 1; h < this.tt.M.to; h++) {
                    var o = this.yu[h - this.tt.M.from], l = this.yu[h - this.tt.M.from - 1];
                    o.P === l.P + 1 && (o.es - l.us !== i + 1 && (l.Nu > l.Su ? l.us = o.es - i - 1 : o.es = l.us + i + 1))
                }
                var f = Math.ceil(this.tt.Fr * t);
                for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                    (o = this.yu[h - this.tt.M.from]).us < o.es && (o.us = o.es);
                    var c = o.us - o.es + 1;
                    f = Math.min(c, f)
                }
                if (i > 0 && f < 4) for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                    (c = (o = this.yu[h - this.tt.M.from]).us - o.es + 1) > f && (o.Nu > o.Su ? o.us -= 1 : o.es += 1)
                }
            } else this.yu = []
        }, t
    }();

    function ei(t) {
        return {m: [], Fr: t, xu: NaN, M: null}
    }

    function ui(t, i, n) {
        return {P: t, F: i, g: NaN, p: NaN, ut: n}
    }

    var ai = function (t) {
        function i(i, n) {
            var h = t.call(this, i, n, !1) || this;
            return h.D = new g, h.Du = ei(0), h.lt = new ri, h
        }

        return r(i, t), i.prototype.W = function (t, i) {
            return this.Ke.I().visible ? (this.Ze(), this.D) : null
        }, i.prototype.Je = function () {
            var t = this.$e.U().Fr();
            this.Du = ei(t);
            for (var i = 0, n = 0, h = this.Ke.I().color, s = 0, r = this.Ke.Yi().hu(); s < r.length; s++) {
                var e = r[s], u = e.J[3], a = void 0 !== e.ut ? e.ut : h, o = ui(e.Is, u, a);
                ++i < this.Du.m.length ? this.Du.m[i] = o : this.Du.m.push(o), this.He[n++] = {P: e.Is, g: 0}
            }
            this.lt._(this.Du), this.D.i([this.lt])
        }, i.prototype.Qe = function () {
            t.prototype.Qe.call(this), this.Du.M = null
        }, i.prototype.iu = function (t, i, n) {
            if (null !== this.Ye) {
                var h = i.Fr(), s = l(i.br()), r = t.X(this.Ke.I().base, n);
                i.Ar(this.Du.m), t.Ch(this.Du.m, n), this.Du.xu = r, this.Du.M = Zt(this.Du.m, s, !1), this.Du.Fr = h, this.lt._(this.Du)
            }
        }, i
    }(Jt), oi = function (t) {
        function i(i, n) {
            var h = t.call(this, i, n) || this;
            return h.eu = new Ht, h
        }

        return r(i, t), i.prototype.W = function (t, i) {
            var n = this.Ke.I();
            if (!n.visible) return null;
            this.Ze();
            var h = {
                m: this.He,
                S: n.color,
                at: n.lineStyle,
                We: n.lineType,
                et: n.lineWidth,
                M: this.Ye,
                Fe: this.$e.U().Fr()
            };
            return this.eu._(h), this.eu
        }, i.prototype.su = function (t, i) {
            return this.nu(t, i)
        }, i
    }(Gt), li = /[2-9]/g, fi = function () {
        function t(t) {
            void 0 === t && (t = 50), this.xs = new Map, this.Cu = 0, this.Tu = Array.from(new Array(t))
        }

        return t.prototype.Eu = function () {
            this.xs.clear(), this.Tu.fill(void 0)
        }, t.prototype.Vt = function (t, i, n) {
            var h = n || li, s = String(i).replace(h, "0"), r = this.xs.get(s);
            if (void 0 === r) {
                if (0 === (r = t.measureText(s).width) && 0 !== i.length) return 0;
                var e = this.Tu[this.Cu];
                void 0 !== e && this.xs.delete(e), this.Tu[this.Cu] = s, this.Cu = (this.Cu + 1) % this.Tu.length, this.xs.set(s, r)
            }
            return r
        }, t
    }(), ci = function () {
        function t(t) {
            this.Lu = null, this.ue = null, this.Bu = "right", this.$s = 0, this.Au = t
        }

        return t.prototype.Ou = function (t, i, n, h) {
            this.Lu = t, this.ue = i, this.$s = n, this.Bu = h
        }, t.prototype.h = function (t, i) {
            null !== this.ue && null !== this.Lu && this.Lu.h(t, this.ue, this.Au, this.$s, this.Bu, i)
        }, t
    }(), vi = function () {
        function t(t, i, n) {
            this.Vu = t, this.Au = new fi(50), this.zu = i, this.B = n, this.oe = -1, this.lt = new ci(this.Au)
        }

        return t.prototype.W = function (t, i) {
            var n = this.B.Pu(this.zu);
            if (null === n) return null;
            var h = n.Fu(this.zu) ? n.Ti() : this.zu.Z();
            if (null === h) return null;
            var s = n.Iu(h);
            if ("overlay" === s) return null;
            var r = this.B.Wu();
            return r.Pt !== this.oe && (this.oe = r.Pt, this.Au.Eu()), this.lt.Ou(this.Vu.Jt(), r, i, s), this.lt
        }, t
    }(), _i = function () {
        function t() {
            this.tt = null
        }

        return t.prototype._ = function (t) {
            this.tt = t
        }, t.prototype.h = function (t, i, s, r) {
            if (null !== this.tt && !1 !== this.tt.it) {
                var e = Math.round(this.tt.p * i);
                if (!(e < 0 || e > Math.ceil(this.tt.Mt * i))) {
                    var u = Math.ceil(this.tt.wt * i);
                    t.lineCap = "butt", t.strokeStyle = this.tt.ut, t.lineWidth = Math.floor(this.tt.et * i), n(t, this.tt.at), h(t, e, 0, u)
                }
            }
        }, t
    }(), di = function () {
        function t(t) {
            this.ju = {
                wt: 0,
                Mt: 0,
                p: 0,
                ut: "rgba(0, 0, 0, 0)",
                et: 1,
                at: 0,
                it: !1
            }, this.Ru = new _i, this.L = !0, this.Ke = t, this.$e = t.vt(), this.Ru._(this.ju)
        }

        return t.prototype.O = function () {
            this.L = !0
        }, t.prototype.W = function (t, i) {
            return this.Ke.I().visible ? (this.L && (this.Uu(t, i), this.L = !1), this.Ru) : null
        }, t
    }(), wi = function (t) {
        function i(i) {
            return t.call(this, i) || this
        }

        return r(i, t), i.prototype.Uu = function (t, i) {
            this.ju.it = !1;
            var n = this.Ke.Z(), h = n.oh().oh;
            if (2 === h || 3 === h) {
                var s = this.Ke.I();
                if (s.baseLineVisible && s.visible) {
                    var r = this.Ke.H();
                    null !== r && (this.ju.it = !0, this.ju.p = n.X(r.J, r.J), this.ju.wt = i, this.ju.Mt = t, this.ju.ut = s.baseLineColor, this.ju.et = s.baseLineWidth, this.ju.at = s.baseLineStyle)
                }
            }
        }, i
    }(di);

    function Mi(t, i) {
        return nt(Math.min(Math.max(t, 12), 30) * i)
    }

    function bi(t, i) {
        switch (t) {
            case"arrowDown":
            case"arrowUp":
                return Mi(i, 1);
            case"circle":
                return Mi(i, .8);
            case"square":
                return Mi(i, .7)
        }
    }

    function mi(t) {
        return it(Mi(t, 1))
    }

    function gi(t) {
        return Math.max(Mi(t, .1), 3)
    }

    function pi(t, i, n, h, s) {
        var r = bi("square", n), e = (r - 1) / 2, u = t - e, a = i - e;
        return h >= u && h <= u + r && s >= a && s <= a + r
    }

    function yi(t, i, n, h, s) {
        var r = (bi("arrowUp", s) - 1) / 2, e = (nt(s / 2) - 1) / 2;
        i.beginPath(), t ? (i.moveTo(n - r, h), i.lineTo(n, h - r), i.lineTo(n + r, h), i.lineTo(n + e, h), i.lineTo(n + e, h + r), i.lineTo(n - e, h + r), i.lineTo(n - e, h)) : (i.moveTo(n - r, h), i.lineTo(n, h + r), i.lineTo(n + r, h), i.lineTo(n + e, h), i.lineTo(n + e, h - r), i.lineTo(n - e, h - r), i.lineTo(n - e, h)), i.fill()
    }

    function ki(t, i, n, h, s, r) {
        return pi(i, n, h, s, r)
    }

    var xi = function (t) {
        function i() {
            var i = null !== t && t.apply(this, arguments) || this;
            return i.tt = null, i.Au = new fi, i.oe = -1, i.le = "", i.qu = "", i
        }

        return r(i, t), i.prototype._ = function (t) {
            this.tt = t
        }, i.prototype.Ou = function (t, i) {
            this.oe === t && this.le === i || (this.oe = t, this.le = i, this.qu = Vt(t, i), this.Au.Eu())
        }, i.prototype.Hu = function (t, i) {
            if (null === this.tt || null === this.tt.M) return null;
            for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
                var h = this.tt.m[n];
                if (Si(h, t, i)) return {Yu: h.Ku, $u: h.$u}
            }
            return null
        }, i.prototype.u = function (t, i, n) {
            if (null !== this.tt && null !== this.tt.M) {
                t.textBaseline = "middle", t.font = this.qu;
                for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                    var s = this.tt.m[h];
                    void 0 !== s.Ot && (s.Ot.wt = this.Au.Vt(t, s.Ot.Xu), s.Ot.Mt = this.oe), Ni(s, t)
                }
            }
        }, i
    }(p);

    function Ni(t, i) {
        i.fillStyle = t.ut, void 0 !== t.Ot && function (t, i, n, h) {
            t.fillText(i, n, h)
        }(i, t.Ot.Xu, t.g - t.Ot.wt / 2, t.Ot.p), function (t, i) {
            if (0 === t.tu) return;
            switch (t.Zu) {
                case"arrowDown":
                    return void yi(!1, i, t.g, t.p, t.tu);
                case"arrowUp":
                    return void yi(!0, i, t.g, t.p, t.tu);
                case"circle":
                    return void function (t, i, n, h) {
                        var s = (bi("circle", h) - 1) / 2;
                        t.beginPath(), t.arc(i, n, s, 0, 2 * Math.PI, !1), t.fill()
                    }(i, t.g, t.p, t.tu);
                case"square":
                    return void function (t, i, n, h) {
                        var s = bi("square", h), r = (s - 1) / 2, e = i - r, u = n - r;
                        t.fillRect(e, u, s, s)
                    }(i, t.g, t.p, t.tu)
            }
            t.Zu
        }(t, i)
    }

    function Si(t, i, n) {
        return !(void 0 === t.Ot || !function (t, i, n, h, s, r) {
            var e = h / 2;
            return s >= t && s <= t + n && r >= i - e && r <= i + e
        }(t.g, t.Ot.p, t.Ot.wt, t.Ot.Mt, i, n)) || function (t, i, n) {
            if (0 === t.tu) return !1;
            switch (t.Zu) {
                case"arrowDown":
                case"arrowUp":
                    return ki(0, t.g, t.p, t.tu, i, n);
                case"circle":
                    return function (t, i, n, h, s) {
                        var r = 2 + bi("circle", n) / 2, e = t - h, u = i - s;
                        return Math.sqrt(e * e + u * u) <= r
                    }(t.g, t.p, t.tu, i, n);
                case"square":
                    return pi(t.g, t.p, t.tu, i, n)
            }
            t.Zu
        }(t, i, n)
    }

    function Di(t, i, n, h, s, r, e, u, a) {
        var o = v(n) ? n : n.close, l = v(n) ? n : n.high, f = v(n) ? n : n.low,
            c = v(i.size) ? Math.max(i.size, 0) : 1, _ = mi(u.Fr()) * c, d = _ / 2;
        switch (t.tu = _, i.position) {
            case"inBar":
                return t.p = e.X(o, a), void (void 0 !== t.Ot && (t.Ot.p = t.p + d + r + .6 * s));
            case"aboveBar":
                return t.p = e.X(l, a) - d - h.Ju, void 0 !== t.Ot && (t.Ot.p = t.p - d - .6 * s, h.Ju += 1.2 * s), void (h.Ju += _ + r);
            case"belowBar":
                return t.p = e.X(f, a) + d + h.Gu, void 0 !== t.Ot && (t.Ot.p = t.p + d + r + .6 * s, h.Gu += 1.2 * s), void (h.Gu += _ + r)
        }
        i.position
    }

    var Ci = function () {
        function t(t, i) {
            this.L = !0, this.Qu = !0, this.ta = !0, this.ia = null, this.lt = new xi, this.na = t, this.ri = i, this.tt = {
                m: [],
                M: null
            }
        }

        return t.prototype.O = function (t) {
            this.L = !0, this.ta = !0, "data" === t && (this.Qu = !0)
        }, t.prototype.W = function (t, i, n) {
            if (!this.na.I().visible) return null;
            this.L && this.Ze();
            var h = this.ri.I().layout;
            return this.lt.Ou(h.fontSize, h.fontFamily), this.lt._(this.tt), this.lt
        }, t.prototype.ha = function () {
            if (this.ta) {
                if (this.na.sa().length > 0) {
                    var t = this.ri.U().Fr(), i = gi(t), n = 1.5 * mi(t) + 2 * i;
                    this.ia = {above: n, below: n}
                } else this.ia = null;
                this.ta = !1
            }
            return this.ia
        }, t.prototype.Ze = function () {
            var t = this.na.Z(), i = this.ri.U(), n = this.na.sa();
            this.Qu && (this.tt.m = n.map((function (t) {
                return {P: t.time, g: 0, p: 0, tu: 0, Zu: t.shape, ut: t.color, Ku: t.Ku, $u: t.id, Ot: void 0}
            })), this.Qu = !1);
            var h = this.ri.I().layout;
            this.tt.M = null;
            var s = i.br();
            if (null !== s) {
                var r = this.na.H();
                if (null !== r && 0 !== this.tt.m.length) {
                    var e = NaN, u = gi(i.Fr()), a = {Ju: u, Gu: u};
                    this.tt.M = Zt(this.tt.m, s, !0);
                    for (var o = this.tt.M.from; o < this.tt.M.to; o++) {
                        var l = n[o];
                        l.time !== e && (a.Ju = u, a.Gu = u, e = l.time);
                        var f = this.tt.m[o];
                        f.g = i.G(l.time), void 0 !== l.text && l.text.length > 0 && (f.Ot = {
                            Xu: l.text,
                            p: 0,
                            wt: 0,
                            Mt: 0
                        });
                        var c = this.na.ra(l.time);
                        null !== c && Di(f, l, c, a, h.fontSize, u, t, i, r.J)
                    }
                    this.L = !1
                }
            }
        }, t
    }(), Ti = function (t) {
        function i(i) {
            return t.call(this, i) || this
        }

        return r(i, t), i.prototype.Uu = function (t, i) {
            var n = this.ju;
            n.it = !1;
            var h = this.Ke.I();
            if (h.priceLineVisible && h.visible) {
                var s = this.Ke.ea(0 === h.priceLineSource);
                s.ua || (n.it = !0, n.p = s.Ft, n.ut = this.Ke.aa(s.ut), n.wt = i, n.Mt = t, n.et = h.priceLineWidth, n.at = h.priceLineStyle)
            }
        }, i
    }(di), Ei = function (t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.ft = i, n
        }

        return r(i, t), i.prototype.Gt = function (t, i, n) {
            t.it = !1, i.it = !1;
            var h = this.ft.I();
            if (h.visible) {
                var s = h.lastValueVisible, r = "" !== this.ft.oa(), e = 0 === h.seriesLastValueMode,
                    u = this.ft.ea(!1);
                if (!u.ua) {
                    s && (t.Ot = this.la(u, s, e), t.it = 0 !== t.Ot.length), (r || e) && (i.Ot = this.fa(u, s, r, e), i.it = i.Ot.length > 0);
                    var a = this.ft.aa(u.ut), o = A(a);
                    n.yt = o.yt, n.ut = o.kt, n.Ft = u.Ft, i.Wt = this.ft.vt().I().layout.backgroundColor, t.Wt = a
                }
            }
        }, i.prototype.fa = function (t, i, n, h) {
            var s = "", r = this.ft.oa();
            return n && 0 !== r.length && (s += r + " "), i && h && (s += this.ft.Z()._h() ? t.ca : t.va), s.trim()
        }, i.prototype.la = function (t, i, n) {
            return i ? n ? this.ft.Z()._h() ? t.va : t.ca : t.Ot : ""
        }, i
    }(I), Li = function () {
        function t(t, i) {
            this.Fn = t, this._a = i || null
        }

        return t.prototype.Nh = function () {
            return this.Fn
        }, t.prototype.os = function () {
            return this._a
        }, t.prototype.mn = function () {
            return null === this.Fn ? null : {priceRange: this.Fn.mn(), margins: this._a || void 0}
        }, t.gn = function (i) {
            return null === i ? null : new t(J.gn(i.priceRange), i.margins)
        }, t
    }(), Bi = function (t) {
        function i(i, n) {
            var h = t.call(this, i) || this;
            return h.da = n, h
        }

        return r(i, t), i.prototype.Uu = function (t, i) {
            var n = this.ju;
            if (n.it = !1, this.Ke.I().visible) {
                var h = this.da.wa();
                if (null !== h) {
                    var s = this.da.I();
                    n.it = !0, n.p = h, n.ut = s.color, n.wt = i, n.Mt = t, n.et = s.lineWidth, n.at = s.lineStyle
                }
            }
        }, i
    }(di), Ai = function (t) {
        function i(i, n) {
            var h = t.call(this) || this;
            return h.na = i, h.da = n, h
        }

        return r(i, t), i.prototype.Gt = function (t, i, n) {
            t.it = !1, i.it = !1;
            var h = this.da.I(), s = h.axisLabelVisible, r = "" !== h.title;
            if (s && this.na.I().visible) {
                var e = this.da.wa();
                if (null !== e) {
                    r && (i.Ot = h.title, i.it = !0), i.Wt = this.na.vt().I().layout.backgroundColor, t.Ot = this.na.Z().Jh(h.price), t.it = !0;
                    var u = A(h.color);
                    n.yt = u.yt, n.ut = u.kt, n.Ft = e
                }
            }
        }, i
    }(I), Oi = function () {
        function t(t, i) {
            this.na = t, this.Si = i, this.Ma = new Bi(t, this), this.Vu = new Ai(t, this), this.ba = new vi(this.Vu, t, t.vt())
        }

        return t.prototype.eh = function (t) {
            c(this.Si, t), this.O(), this.na.vt().Pr()
        }, t.prototype.I = function () {
            return this.Si
        }, t.prototype._i = function () {
            var t = [];
            return t.push(this.Ma), t.push(this.ba), t
        }, t.prototype.ma = function () {
            return this.Vu
        }, t.prototype.O = function () {
            this.Ma.O(), this.Vu.O()
        }, t.prototype.wa = function () {
            var t = this.na, i = t.Z();
            if (t.vt().U().ii() || i.ii()) return null;
            var n = t.H();
            return null === n ? null : i.X(this.Si.price, n.J)
        }, t
    }(), Vi = function (t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.ri = i, n
        }

        return r(i, t), i.prototype.vt = function () {
            return this.ri
        }, i
    }(q), zi = {Y: "", pu: "", gu: ""}, Pi = function () {
        function t(t) {
            this.na = t
        }

        return t.prototype.K = function (t, i) {
            var n = this.na.ga(), h = this.na.I();
            switch (n) {
                case"Line":
                    return this.pa(h);
                case"Area":
                    return this.ya(h);
                case"Bar":
                    return this.ka(h, t, i);
                case"Candlestick":
                    return this.xa(h, t, i);
                case"Histogram":
                    return this.Na(h, t, i)
            }
            throw new Error("Unknown chart style")
        }, t.prototype.ka = function (t, i, n) {
            var h = e({}, zi), s = t.upColor, r = t.downColor, u = s, a = r, o = l(this.Sa(i, n)),
                c = f(o.J[0]) <= f(o.J[3]);
            return h.Y = c ? s : r, h.pu = c ? u : a, h
        }, t.prototype.xa = function (t, i, n) {
            var h = e({}, zi), s = t.upColor, r = t.downColor, u = t.borderUpColor, a = t.borderDownColor,
                o = t.wickUpColor, c = t.wickDownColor, v = l(this.Sa(i, n)), _ = f(v.J[0]) <= f(v.J[3]);
            return h.Y = _ ? s : r, h.pu = _ ? u : a, h.gu = _ ? o : c, h
        }, t.prototype.ya = function (t) {
            return e(e({}, zi), {Y: t.lineColor})
        }, t.prototype.pa = function (t) {
            return e(e({}, zi), {Y: t.color})
        }, t.prototype.Na = function (t, i, n) {
            var h = e({}, zi), s = l(this.Sa(i, n));
            return h.Y = void 0 !== s.ut ? s.ut : t.color, h
        }, t.prototype.Sa = function (t, i) {
            return void 0 !== i ? i.J : this.na.Yi().Da(t)
        }, t
    }(), Fi = 30, Ii = function () {
        function t() {
            this.Ca = [], this.Ta = new Map, this.Ea = new Map
        }

        return t.prototype.La = function () {
            this.Ca = [], this.Ta.clear(), this.Ea.clear()
        }, t.prototype.Ba = function () {
            return this.tu() > 0 ? this.Ca[this.Ca.length - 1] : null
        }, t.prototype.Aa = function () {
            return this.tu() > 0 ? this.Oa(0) : null
        }, t.prototype.Hi = function () {
            return this.tu() > 0 ? this.Oa(this.Ca.length - 1) : null
        }, t.prototype.tu = function () {
            return this.Ca.length
        }, t.prototype.ii = function () {
            return 0 === this.tu()
        }, t.prototype.Vs = function (t) {
            return null !== this.Va(t, 0)
        }, t.prototype.Da = function (t) {
            return this.za(t)
        }, t.prototype.za = function (t, i) {
            void 0 === i && (i = 0);
            var n = this.Va(t, i);
            return null === n ? null : e(e({}, this.Pa(n)), {Is: this.Oa(n)})
        }, t.prototype.hu = function () {
            return this.Ca
        }, t.prototype.Fa = function (t, i, n) {
            if (this.ii()) return null;
            for (var h = null, s = 0, r = n; s < r.length; s++) {
                var e = r[s];
                h = Wi(h, this.Ia(t, i, e))
            }
            return h
        }, t.prototype.wn = function (t) {
            0 !== t.length && (this.ii() || t[t.length - 1].Is < this.Ca[0].Is ? this.Wa(t) : t[0].Is > this.Ca[this.Ca.length - 1].Is ? this.ja(t) : 1 !== t.length || t[0].Is !== this.Ca[this.Ca.length - 1].Is ? this.Ra(t) : this.Ua(t[0]))
        }, t.prototype.Oa = function (t) {
            return this.Ca[t].Is
        }, t.prototype.Pa = function (t) {
            return this.Ca[t]
        }, t.prototype.Va = function (t, i) {
            var n = this.qa(t);
            if (null === n && 0 !== i) switch (i) {
                case-1:
                    return this.Ha(t);
                case 1:
                    return this.Ya(t);
                default:
                    throw new TypeError("Unknown search mode")
            }
            return n
        }, t.prototype.Ha = function (t) {
            var i = this.Ka(t);
            return i > 0 && (i -= 1), i !== this.Ca.length && this.Oa(i) < t ? i : null
        }, t.prototype.Ya = function (t) {
            var i = this.$a(t);
            return i !== this.Ca.length && t < this.Oa(i) ? i : null
        }, t.prototype.qa = function (t) {
            var i = this.Ka(t);
            return i === this.Ca.length || t < this.Ca[i].Is ? null : i
        }, t.prototype.Ka = function (t) {
            return Yt(this.Ca, t, (function (t, i) {
                return t.Is < i
            }))
        }, t.prototype.$a = function (t) {
            return Kt(this.Ca, t, (function (t, i) {
                return i.Is > t
            }))
        }, t.prototype.Xa = function (t, i, n) {
            for (var h = null, s = t; s < i; s++) {
                var r = this.Ca[s].J[n];
                Number.isNaN(r) || (null === h ? h = {Za: r, Ja: r} : (r < h.Za && (h.Za = r), r > h.Ja && (h.Ja = r)))
            }
            return h
        }, t.prototype.Ga = function (t) {
            var i = Math.floor(t.Is / Fi);
            this.Ta.forEach((function (t) {
                return t.delete(i)
            }))
        }, t.prototype.Wa = function (t) {
            a(0 !== t.length, "plotRows should not be empty"), this.Ea.clear(), this.Ta.clear(), this.Ca = t.concat(this.Ca)
        }, t.prototype.ja = function (t) {
            a(0 !== t.length, "plotRows should not be empty"), this.Ea.clear(), this.Ta.clear(), this.Ca = this.Ca.concat(t)
        }, t.prototype.Ua = function (t) {
            a(!this.ii(), "plot list should not be empty"), a(this.Ca[this.Ca.length - 1].Is === t.Is, "last row index should match new row index"), this.Ga(t), this.Ea.delete(t.Is), this.Ca[this.Ca.length - 1] = t
        }, t.prototype.Ra = function (t) {
            a(0 !== t.length, "plot rows should not be empty"), this.Ea.clear(), this.Ta.clear(), this.Ca = function (t, i) {
                var n = function (t, i) {
                    var n = t.length, h = i.length, s = n + h, r = 0, e = 0;
                    for (; r < n && e < h;) t[r].Is < i[e].Is ? r++ : t[r].Is > i[e].Is ? e++ : (r++, e++, s--);
                    return s
                }(t, i), h = new Array(n), s = 0, r = 0, e = t.length, u = i.length, a = 0;
                for (; s < e && r < u;) t[s].Is < i[r].Is ? (h[a] = t[s], s++) : t[s].Is > i[r].Is ? (h[a] = i[r], r++) : (h[a] = i[r], s++, r++), a++;
                for (; s < e;) h[a] = t[s], s++, a++;
                for (; r < u;) h[a] = i[r], r++, a++;
                return h
            }(this.Ca, t)
        }, t.prototype.Ia = function (t, i, n) {
            if (this.ii()) return null;
            var h = null, s = l(this.Aa()), r = l(this.Hi()), e = Math.max(t, s), u = Math.min(i, r),
                a = Math.ceil(e / Fi) * Fi, o = Math.max(a, Math.floor(u / Fi) * Fi), f = this.Ka(e),
                c = this.$a(Math.min(u, a, i));
            h = Wi(h, this.Xa(f, c, n));
            var v = this.Ta.get(n);
            void 0 === v && (v = new Map, this.Ta.set(n, v));
            for (var _ = Math.max(a + 1, e); _ < o; _ += Fi) {
                var d = Math.floor(_ / Fi), w = v.get(d);
                if (void 0 === w) {
                    var M = this.Ka(d * Fi), b = this.$a((d + 1) * Fi - 1);
                    w = this.Xa(M, b, n), v.set(d, w)
                }
                h = Wi(h, w)
            }
            f = this.Ka(o), c = this.$a(u);
            return h = Wi(h, this.Xa(f, c, n))
        }, t
    }();

    function Wi(t, i) {
        return null === t ? i : null === i ? t : {Za: Math.min(t.Za, i.Za), Ja: Math.max(t.Ja, i.Ja)}
    }

    var ji = function (t) {
        function i(i, n, h) {
            var s = t.call(this, i) || this;
            s.tt = new Ii, s.Ma = new Ti(s), s.Qa = [], s.io = new wi(s), s.no = null, s.ho = [], s.so = [], s.Si = n, s.ro = h;
            var r = new Ei(s);
            return s.gi = [r], s.ba = new vi(r, s, i), s.eo(), s.uo(), s
        }

        return r(i, t), i.prototype.an = function () {
        }, i.prototype.aa = function (t) {
            return this.Si.priceLineColor || t
        }, i.prototype.ea = function (t, i) {
            var n = {ua: !0}, h = this.Z();
            if (this.vt().U().ii() || h.ii() || this.tt.ii()) return n;
            var s, r, e = this.vt().U().br(), u = this.H();
            if (null === e || null === u) return n;
            if (t) {
                var a = this.tt.Ba();
                if (null === a) return n;
                s = a, r = a.Is
            } else {
                var o = this.tt.za(e.us(), -1);
                if (null === o) return n;
                if (null === (s = this.tt.Da(o.Is))) return n;
                r = o.Is
            }
            var l = s.J[3], f = this.$().K(r, {J: s}), c = h.X(l, u.J);
            return {ua: !1, F: i ? l : void 0, Ot: h.ni(l, u.J), ca: h.Jh(l), va: h.Qh(l, u.J), ut: f.Y, Ft: c, Is: r}
        }, i.prototype.$ = function () {
            return null !== this.no || (this.no = new Pi(this)), this.no
        }, i.prototype.I = function () {
            return this.Si
        }, i.prototype.eh = function (t) {
            var i = t.priceScaleId;
            void 0 !== i && i !== this.Si.priceScaleId && this.vt().ao(this, i), c(this.Si, t), null !== this.ai && void 0 !== t.scaleMargins && this.ai.eh({scaleMargins: t.scaleMargins}), void 0 !== t.priceFormat && this.eo(), this.vt().oo(this)
        }, i.prototype.lo = function () {
            this.tt.La(), this.uo()
        }, i.prototype.fo = function (t, i) {
            i && this.tt.La(), this.tt.wn(t), this.co(), this.Bi.O("data"), this.Di.O("data");
            var n = this.vt().Pu(this);
            this.vt().vo(n), this.vt().oo(this), this.vt()._o(), this.vt().Pr()
        }, i.prototype.do = function (t) {
            this.ho = t.map((function (t) {
                return e({}, t)
            })), this.co();
            var i = this.vt().Pu(this);
            this.Di.O("data"), this.vt().vo(i), this.vt().oo(this), this.vt()._o(), this.vt().Pr()
        }, i.prototype.sa = function () {
            return this.so
        }, i.prototype.wo = function (t) {
            var i = new Oi(this, t);
            return this.Qa.push(i), this.vt().oo(this), i
        }, i.prototype.Mo = function (t) {
            var i = this.Qa.indexOf(t);
            -1 !== i && this.Qa.splice(i, 1), this.vt().oo(this)
        }, i.prototype.ga = function () {
            return this.ro
        }, i.prototype.H = function () {
            var t = this.bo();
            return null === t ? null : {J: t.J[3], jh: t.P}
        }, i.prototype.bo = function () {
            var t = this.vt().U().br();
            if (null === t) return null;
            var i = t.es();
            return this.tt.za(i, 1)
        }, i.prototype.Yi = function () {
            return this.tt
        }, i.prototype.ra = function (t) {
            var i = this.tt.Da(t);
            return null === i ? null : "Bar" === this.ro || "Candlestick" === this.ro ? {
                open: i.J[0],
                high: i.J[1],
                low: i.J[2],
                close: i.J[3]
            } : i.J[3]
        }, i.prototype._i = function () {
            var t = [];
            this.mo() || t.push(this.io);
            for (var i = 0, n = this.Qa; i < n.length; i++) {
                var h = n[i];
                t.push.apply(t, h._i())
            }
            return t.push(this.Bi), t.push(this.Ma), t.push(this.ba), t.push(this.Di), t
        }, i.prototype.vi = function (t, i) {
            for (var n = i === this.ai || this.mo() ? u(this.gi) : [], h = 0, s = this.Qa; h < s.length; h++) {
                var r = s[h];
                n.push(r.ma())
            }
            return n
        }, i.prototype.rs = function (t, i) {
            var n = this;
            if (void 0 !== this.Si.autoscaleInfoProvider) {
                var h = this.Si.autoscaleInfoProvider((function () {
                    var h = n.po(t, i);
                    return null === h ? null : h.mn()
                }));
                return Li.gn(h)
            }
            return this.po(t, i)
        }, i.prototype.hs = function () {
            return this.Si.priceFormat.minMove
        }, i.prototype.Xh = function () {
            return this.Gn
        }, i.prototype.Ri = function () {
            this.Bi.O(), this.Di.O();
            for (var t = 0, i = this.gi; t < i.length; t++) {
                i[t].O()
            }
            for (var n = 0, h = this.Qa; n < h.length; n++) {
                h[n].O()
            }
            this.Ma.O(), this.io.O()
        }, i.prototype.Z = function () {
            return l(this.ai)
        }, i.prototype.q = function (t) {
            if (!(("Line" === this.ro || "Area" === this.ro) && this.Si.crosshairMarkerVisible)) return null;
            var i = this.tt.Da(t);
            return null === i ? null : {F: i.J[3], N: this.yo()}
        }, i.prototype.oa = function () {
            return this.Si.title
        }, i.prototype.mo = function () {
            return !Pt(this.Z().rh())
        }, i.prototype.po = function (t, i) {
            if (!_(t) || !_(i) || this.tt.ii()) return null;
            var n = "Line" === this.ro || "Area" === this.ro || "Histogram" === this.ro ? [3] : [2, 1],
                h = this.tt.Fa(t, i, n), s = null !== h ? new J(h.Za, h.Ja) : null;
            if ("Histogram" === this.ga()) {
                var r = this.Si.base, e = new J(r, r);
                s = null !== s ? s.wn(e) : e
            }
            return new Li(s, this.Di.ha())
        }, i.prototype.yo = function () {
            switch (this.ro) {
                case"Line":
                case"Area":
                    return this.Si.crosshairMarkerRadius
            }
            return 0
        }, i.prototype.eo = function () {
            switch (this.Si.priceFormat.type) {
                case"custom":
                    this.Gn = {Xi: this.Si.priceFormat.formatter};
                    break;
                case"volume":
                    this.Gn = new Rt(this.Si.priceFormat.precision);
                    break;
                case"percent":
                    this.Gn = new X(this.Si.priceFormat.precision);
                    break;
                default:
                    var t = Math.pow(10, this.Si.priceFormat.precision);
                    this.Gn = new $(t, this.Si.priceFormat.minMove * t)
            }
            null !== this.ai && this.ai.uh()
        }, i.prototype.co = function () {
            var t = this, i = this.vt().U();
            if (i.ii() || 0 === this.tt.tu()) this.so = []; else {
                var n = l(this.tt.Aa());
                this.so = this.ho.map((function (h, s) {
                    var r = l(i.Mr(h.time, !0)), e = r < n ? 1 : -1;
                    return {
                        time: l(t.tt.za(r, e)).Is,
                        position: h.position,
                        shape: h.shape,
                        color: h.color,
                        id: h.id,
                        Ku: s,
                        text: h.text,
                        size: h.size
                    }
                }))
            }
        }, i.prototype.uo = function () {
            switch (this.Di = new Ci(this, this.vt()), this.ro) {
                case"Bar":
                    this.Bi = new ni(this, this.vt());
                    break;
                case"Candlestick":
                    this.Bi = new si(this, this.vt());
                    break;
                case"Line":
                    this.Bi = new oi(this, this.vt());
                    break;
                case"Area":
                    this.Bi = new Qt(this, this.vt());
                    break;
                case"Histogram":
                    this.Bi = new ai(this, this.vt());
                    break;
                default:
                    throw Error("Unknown chart style assigned: " + this.ro)
            }
        }, i
    }(Vi), Ri = function () {
        function t(t) {
            this.Si = t
        }

        return t.prototype.ko = function (t, i, n) {
            var h = t;
            if (0 === this.Si.mode) return h;
            var s = n.Ti(), r = s.H();
            if (null === r) return h;
            var e = s.X(t, r), u = n.zh().filter((function (t) {
                return t instanceof ji
            })).reduce((function (t, h) {
                if (n.Fu(h) || !h.I().visible) return t;
                var s = h.Z(), r = h.Yi();
                if (s.ii() || !r.Vs(i)) return t;
                var e = r.Da(i);
                if (null === e) return t;
                var u = f(h.H());
                return t.concat([s.X(e.J[3], u.J)])
            }), []);
            if (0 === u.length) return h;
            u.sort((function (t, i) {
                return Math.abs(t - e) - Math.abs(i - e)
            }));
            var a = u[0];
            return h = s.Ei(a, r)
        }, t
    }(), Ui = function () {
        function t(t, i) {
            this.Kn = [], this.xo = new Map, this.zn = 0, this.$s = 0, this.No = 1e3, this.$n = null, this.So = new Z, this.Do = t, this.ri = i;
            var n = i.I();
            this.Co = this.To("left", n.leftPriceScale), this.Eo = this.To("right", n.rightPriceScale), this.Co.gh().Qi(this.Lo.bind(this, this.Co), this), this.Eo.gh().Qi(this.Lo.bind(this, this.Co), this), this.Bo(n)
        }

        return t.prototype.Bo = function (t) {
            if (t.leftPriceScale && this.Co.eh(t.leftPriceScale), t.rightPriceScale && this.Eo.eh(t.rightPriceScale), t.localization && (this.Co.uh(), this.Eo.uh()), t.overlayPriceScales) for (var i = 0, n = Array.from(this.xo.values()); i < n.length; i++) {
                var h = l(n[i][0].Z());
                h.eh(t.overlayPriceScales), t.localization && h.uh()
            }
        }, t.prototype.Ao = function (t) {
            switch (t) {
                case"left":
                    return this.Co;
                case"right":
                    return this.Eo
            }
            return this.xo.has(t) ? o(this.xo.get(t))[0].Z() : null
        }, t.prototype.an = function () {
            this.vt().Oo().rn(this), this.Co.gh().rn(this), this.Eo.gh().rn(this), this.Kn.forEach((function (t) {
                t.an && t.an()
            })), this.So.en()
        }, t.prototype.Vo = function () {
            return this.No
        }, t.prototype.zo = function (t) {
            this.No = t
        }, t.prototype.vt = function () {
            return this.ri
        }, t.prototype.wt = function () {
            return this.$s
        }, t.prototype.Mt = function () {
            return this.zn
        }, t.prototype.Cr = function (t) {
            this.$s = t, this.Po()
        }, t.prototype.ph = function (t) {
            var i = this;
            this.zn = t, this.Co.ph(t), this.Eo.ph(t), this.Kn.forEach((function (n) {
                if (i.Fu(n)) {
                    var h = n.Z();
                    null !== h && h.ph(t)
                }
            })), this.Po()
        }, t.prototype.zh = function () {
            return this.Kn
        }, t.prototype.Fu = function (t) {
            var i = t.Z();
            return null === i || this.Co !== i && this.Eo !== i
        }, t.prototype.Fh = function (t, i, n) {
            var h = void 0 !== n ? n : this.Io().Fo - 1;
            this.Wo(t, i, h)
        }, t.prototype.Wh = function (t) {
            var i = this.Kn.indexOf(t);
            a(-1 !== i, "removeDataSource: invalid data source"), this.Kn.splice(i, 1);
            var n = l(t.Z()).rh();
            if (this.xo.has(n)) {
                var h = o(this.xo.get(n)), s = h.indexOf(t);
                -1 !== s && (h.splice(s, 1), 0 === h.length && this.xo.delete(n))
            }
            var r = t.Z();
            r && r.zh().indexOf(t) >= 0 && r.Wh(t), null !== r && (r.Ih(), this.jo(r)), this.$n = null
        }, t.prototype.Iu = function (t) {
            return t === this.Co ? "left" : t === this.Eo ? "right" : "overlay"
        }, t.prototype.Ro = function () {
            return this.Co
        }, t.prototype.Uo = function () {
            return this.Eo
        }, t.prototype.qo = function (t, i) {
            t.Uh(i)
        }, t.prototype.Ho = function (t, i) {
            t.qh(i), this.Po()
        }, t.prototype.Yo = function (t) {
            t.Hh()
        }, t.prototype.Ko = function (t, i) {
            t.Yh(i)
        }, t.prototype.$o = function (t, i) {
            t.Kh(i), this.Po()
        }, t.prototype.Xo = function (t) {
            t.$h()
        }, t.prototype.Po = function () {
            this.Kn.forEach((function (t) {
                t.Ri()
            }))
        }, t.prototype.Ti = function () {
            var t = null;
            return this.ri.I().rightPriceScale.visible && 0 !== this.Eo.zh().length ? t = this.Eo : this.ri.I().leftPriceScale.visible && 0 !== this.Co.zh().length ? t = this.Co : 0 !== this.Kn.length && (t = this.Kn[0].Z()), null === t && (t = this.Eo), t
        }, t.prototype.jo = function (t) {
            null !== t && t.fh() && this.Zo(t)
        }, t.prototype.Jo = function (t) {
            var i = this.Do.br();
            t.ah({wh: !0}), null !== i && t.ns(i), this.Po()
        }, t.prototype.Go = function () {
            this.Zo(this.Co), this.Zo(this.Eo)
        }, t.prototype.Qo = function () {
            var t = this;
            this.jo(this.Co), this.jo(this.Eo), this.Kn.forEach((function (i) {
                t.Fu(i) && t.jo(i.Z())
            })), this.Po(), this.ri.Pr()
        }, t.prototype.Ph = function () {
            return null === this.$n && (this.$n = vt(this.Kn)), this.$n
        }, t.prototype.tl = function () {
            return this.So
        }, t.prototype.Zo = function (t) {
            var i = t.ts();
            if (i && i.length > 0 && !this.Do.ii()) {
                var n = this.Do.br();
                null !== n && t.ns(n)
            }
            t.Ri()
        }, t.prototype.Io = function () {
            var t = this.Ph();
            if (0 === t.length) return {Fo: 0, il: 0};
            for (var i = 0, n = 0, h = 0; h < t.length; h++) {
                var s = t[h].li();
                null !== s && (s < i && (i = s), s > n && (n = s))
            }
            return {Fo: i, il: n}
        }, t.prototype.Wo = function (t, i, n) {
            var h = this.Ao(i);
            if (null === h && (h = this.To(i, this.ri.I().overlayPriceScales)), this.Kn.push(t), !Pt(i)) {
                var s = this.xo.get(i) || [];
                s.push(t), this.xo.set(i, s)
            }
            h.Fh(t), t.ci(h), t.fi(n), this.jo(h), this.$n = null
        }, t.prototype.Lo = function (t, i, n) {
            i.oh !== n.oh && this.Zo(t)
        }, t.prototype.To = function (t, i) {
            var n = e({visible: !0, autoScale: !0}, M(i)),
                h = new Mt(t, n, this.ri.I().layout, this.ri.I().localization);
            return h.ph(this.Mt()), h
        }, t
    }(), qi = function (t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.nl = new Map, n.tt = i, n
        }

        return r(i, t), i.prototype.u = function (t) {
        }, i.prototype.l = function (t) {
            if (this.tt.it) {
                t.save();
                for (var i = 0, n = 0, h = this.tt.hl; n < h.length; n++) {
                    if (0 !== (a = h[n]).Ot.length) {
                        t.font = a.Nt;
                        var s = this.sl(t, a.Ot);
                        s > this.tt.wt ? a.Ur = this.tt.wt / s : a.Ur = 1, i += a.rl * a.Ur
                    }
                }
                var r = 0;
                switch (this.tt.el) {
                    case"top":
                        r = 0;
                        break;
                    case"center":
                        r = Math.max((this.tt.Mt - i) / 2, 0);
                        break;
                    case"bottom":
                        r = Math.max(this.tt.Mt - i, 0)
                }
                t.fillStyle = this.tt.ut;
                for (var e = 0, u = this.tt.hl; e < u.length; e++) {
                    var a = u[e];
                    t.save();
                    var o = 0;
                    switch (this.tt.ul) {
                        case"left":
                            t.textAlign = "left", o = a.rl / 2;
                            break;
                        case"center":
                            t.textAlign = "center", o = this.tt.wt / 2;
                            break;
                        case"right":
                            t.textAlign = "right", o = this.tt.wt - 1 - a.rl / 2
                    }
                    t.translate(o, r), t.textBaseline = "top", t.font = a.Nt, t.scale(a.Ur, a.Ur), t.fillText(a.Ot, 0, a.al), t.restore(), r += a.rl * a.Ur
                }
                t.restore()
            }
        }, i.prototype.sl = function (t, i) {
            var n = this.ol(t.font), h = n.get(i);
            return void 0 === h && (h = t.measureText(i).width, n.set(i, h)), h
        }, i.prototype.ol = function (t) {
            var i = this.nl.get(t);
            return void 0 === i && (i = new Map, this.nl.set(t, i)), i
        }, i
    }(p), Hi = function () {
        function t(t) {
            this.L = !0, this.ot = {
                it: !1,
                ut: "",
                Mt: 0,
                wt: 0,
                hl: [],
                el: "center",
                ul: "center"
            }, this.lt = new qi(this.ot), this.ft = t
        }

        return t.prototype.O = function () {
            this.L = !0
        }, t.prototype.W = function (t, i) {
            return this.L && (this.j(t, i), this.L = !1), this.lt
        }, t.prototype.j = function (t, i) {
            var n = this.ft.I(), h = this.ot;
            h.it = n.visible, h.it && (h.ut = n.color, h.wt = i, h.Mt = t, h.ul = n.horzAlign, h.el = n.vertAlign, h.hl = [{
                Ot: n.text,
                Nt: Vt(n.fontSize, n.fontFamily, n.fontStyle),
                rl: 1.2 * n.fontSize,
                al: 0,
                Ur: 0
            }])
        }, t
    }(), Yi = function (t) {
        function i(i, n) {
            var h = t.call(this) || this;
            return h.Si = n, h.Bi = new Hi(h), h
        }

        return r(i, t), i.prototype._i = function () {
            return [this.Bi]
        }, i.prototype.I = function () {
            return this.Si
        }, i.prototype.Ri = function () {
            this.Bi.O()
        }, i
    }(q), Ki = function () {
        function t(t, i) {
            this.ll = [], this.fl = [], this.$s = 0, this.cl = null, this.vl = null, this._l = new Z, this.dl = new Z, this.wl = t, this.Si = i, this.Ml = new zt(this), this.Do = new Lt(this, i.timeScale, this.Si.localization), this.bl = new Wt, this.A = new H(this, i.crosshair), this.ml = new Ri(i.crosshair), this.gl = new Yi(this, i.watermark), this.pl(), this.ll[0].zo(2e3)
        }

        return t.prototype.yl = function () {
            this.kl(new jt(3))
        }, t.prototype.Pr = function () {
            this.kl(new jt(2))
        }, t.prototype.oo = function (t) {
            var i = this.xl(t);
            this.kl(i)
        }, t.prototype.Nl = function () {
            return this.vl
        }, t.prototype.Sl = function (t) {
            var i = this.vl;
            this.vl = t, null !== i && this.oo(i.Dl), null !== t && this.oo(t.Dl)
        }, t.prototype.I = function () {
            return this.Si
        }, t.prototype.eh = function (t) {
            c(this.Si, t), this.ll.forEach((function (i) {
                return i.Bo(t)
            })), void 0 !== t.timeScale && this.Do.eh(t.timeScale), void 0 !== t.localization && this.Do.cr(t.localization), (t.leftPriceScale || t.rightPriceScale) && this._l.en(), this.yl()
        }, t.prototype.Cl = function (t, i) {
            var n = this.Tl(t);
            null !== n && (n.Z.eh(i), this._l.en())
        }, t.prototype.Tl = function (t) {
            for (var i = 0, n = this.ll; i < n.length; i++) {
                var h = n[i], s = h.Ao(t);
                if (null !== s) return {ct: h, Z: s}
            }
            return null
        }, t.prototype.U = function () {
            return this.Do
        }, t.prototype.El = function () {
            return this.ll
        }, t.prototype.Ll = function () {
            return this.bl
        }, t.prototype.Bl = function () {
            return this.gl
        }, t.prototype.Al = function () {
            return this.A
        }, t.prototype.Ol = function () {
            return this.dl
        }, t.prototype.Vl = function (t, i) {
            t.ph(i), this.zr()
        }, t.prototype.Cr = function (t) {
            this.$s = t, this.Do.Cr(this.$s), this.ll.forEach((function (i) {
                return i.Cr(t)
            })), this.zr()
        }, t.prototype.pl = function (t) {
            var i = new Ui(this.Do, this);
            void 0 !== t ? this.ll.splice(t, 0, i) : this.ll.push(i);
            var n = void 0 === t ? this.ll.length - 1 : t, h = new jt(3);
            return h.Se(n, {De: 0, wh: !0}), this.pe(h), i
        }, t.prototype.qo = function (t, i, n) {
            t.qo(i, n)
        }, t.prototype.Ho = function (t, i, n) {
            t.Ho(i, n), this._o(), this.kl(this.zl(t, 2))
        }, t.prototype.Yo = function (t, i) {
            t.Yo(i), this.kl(this.zl(t, 2))
        }, t.prototype.Ko = function (t, i, n) {
            i.fh() || t.Ko(i, n)
        }, t.prototype.$o = function (t, i, n) {
            i.fh() || (t.$o(i, n), this._o(), this.kl(this.zl(t, 2)))
        }, t.prototype.Xo = function (t, i) {
            i.fh() || (t.Xo(i), this.kl(this.zl(t, 2)))
        }, t.prototype.Jo = function (t, i) {
            t.Jo(i), this.kl(this.zl(t, 2))
        }, t.prototype.Pl = function (t) {
            this.Do.Uh(t)
        }, t.prototype.Fl = function (t, i) {
            var n = this.U();
            if (!n.ii() && 0 !== i) {
                var h = n.wt();
                t = Math.max(1, Math.min(t, h)), n.Ur(t, i), this.zr()
            }
        }, t.prototype.Il = function (t) {
            this.Wl(0), this.jl(t), this.Rl()
        }, t.prototype.Ul = function (t) {
            this.Do.qh(t), this.zr()
        }, t.prototype.ql = function () {
            this.Do.Hh(), this.Pr()
        }, t.prototype.Wl = function (t) {
            this.cl = t, this.Do.Yh(t)
        }, t.prototype.jl = function (t) {
            var i = !1;
            return null !== this.cl && Math.abs(t - this.cl) > 20 && (this.cl = null, i = !0), this.Do.Kh(t), this.zr(), i
        }, t.prototype.Rl = function () {
            this.Do.$h(), this.Pr(), this.cl = null
        }, t.prototype.pe = function (t) {
            this.wl && this.wl(t), this.bl.pe(), this.Pr()
        }, t.prototype.V = function () {
            return this.fl
        }, t.prototype.Hl = function (t, i, n) {
            this.A.Ai(t, i);
            var h = NaN, s = this.Do.Or(t), r = this.Do.br();
            null !== r && (s = Math.min(Math.max(r.es(), s), r.us()));
            var e = n.Ti(), u = e.H();
            null !== u && (h = e.Ei(i, u)), h = this.ml.ko(h, s, n), this.A.Pi(s, h, n), this.Yl(), this.dl.en(this.A.R(), {
                x: t,
                y: i
            })
        }, t.prototype.Kl = function () {
            this.Al().Ii(), this.Yl(), this.dl.en(null, null)
        }, t.prototype._o = function () {
            var t = this.A.ct();
            if (null !== t) {
                var i = this.A.Vi(), n = this.A.zi();
                this.Hl(i, n, t)
            }
        }, t.prototype.$l = function (t, i) {
            var n = this.Do.ei(0);
            void 0 !== i && this.Do.O(i);
            var h = this.Do.ei(0), s = this.Do.Br(), r = this.Do.br();
            if (null !== r && null !== n && null !== h) {
                var e = r.Vs(s), u = n.Ts > h.Ts;
                if (t > s && !u && !e) {
                    var a = t - s;
                    this.Do.wr(this.Do.Ir() - a)
                }
            }
            this.Do.Rr(t)
        }, t.prototype.vo = function (t) {
            null !== t && t.Qo()
        }, t.prototype.Pu = function (t) {
            var i = this.ll.find((function (i) {
                return i.Ph().includes(t)
            }));
            return void 0 === i ? null : i
        }, t.prototype.zr = function () {
            this.gl.Ri(), this.ll.forEach((function (t) {
                return t.Qo()
            })), this._o()
        }, t.prototype.an = function () {
            this.ll.forEach((function (t) {
                return t.an()
            })), this.ll.length = 0, this.Si.localization.priceFormatter = void 0, this.Si.localization.timeFormatter = void 0
        }, t.prototype.Xl = function () {
            return this.Ml
        }, t.prototype.Wu = function () {
            return this.Ml.I()
        }, t.prototype.Oo = function () {
            return this._l
        }, t.prototype.Zl = function (t, i) {
            var n = this.ll[0], h = this.Jl(i, t, n);
            return this.fl.push(h), 1 === this.fl.length ? this.yl() : this.Pr(), h
        }, t.prototype.Gl = function (t) {
            var i = this.Pu(t), n = this.fl.indexOf(t);
            a(-1 !== n, "Series not found"), this.fl.splice(n, 1), l(i).Wh(t), t.an && t.an()
        }, t.prototype.ao = function (t, i) {
            var n = l(this.Pu(t));
            n.Wh(t);
            var h = this.Tl(i);
            if (null === h) {
                var s = t.li();
                n.Fh(t, i, s)
            } else {
                s = h.ct === n ? t.li() : void 0;
                h.ct.Fh(t, i, s)
            }
        }, t.prototype.Gr = function () {
            var t = new jt(2);
            t.Ee(), this.kl(t)
        }, t.prototype.Ql = function (t) {
            var i = new jt(2);
            i.Be(t), this.kl(i)
        }, t.prototype.Ae = function () {
            var t = new jt(2);
            t.Ae(), this.kl(t)
        }, t.prototype.dr = function (t) {
            var i = new jt(2);
            i.dr(t), this.kl(i)
        }, t.prototype.wr = function (t) {
            var i = new jt(2);
            i.wr(t), this.kl(i)
        }, t.prototype.tf = function () {
            return this.Si.rightPriceScale.visible ? "right" : "left"
        }, t.prototype.zl = function (t, i) {
            var n = new jt(i);
            if (null !== t) {
                var h = this.ll.indexOf(t);
                n.Se(h, {De: i})
            }
            return n
        }, t.prototype.xl = function (t, i) {
            return void 0 === i && (i = 2), this.zl(this.Pu(t), i)
        }, t.prototype.kl = function (t) {
            this.wl && this.wl(t), this.bl.pe()
        }, t.prototype.Yl = function () {
            this.kl(new jt(1))
        }, t.prototype.Jl = function (t, i, n) {
            var h = new ji(this, t, i), s = void 0 !== t.priceScaleId ? t.priceScaleId : this.tf();
            return n.Fh(h, s), Pt(s) || h.eh(t), h
        }, t
    }(), $i = {allowDownsampling: !0};
    var Xi = function () {
        function t(t, i) {
            var n = this;
            this._resolutionMediaQueryList = null, this._resolutionListener = function (t) {
                return n._onResolutionChanged()
            }, this._canvasConfiguredListeners = [], this.canvas = t, this._canvasSize = {
                width: this.canvas.clientWidth,
                height: this.canvas.clientHeight
            }, this._options = i, this._configureCanvas(), this._installResolutionListener()
        }

        return t.prototype.destroy = function () {
            this._canvasConfiguredListeners.length = 0, this._uninstallResolutionListener(), this.canvas = null
        }, Object.defineProperty(t.prototype, "canvasSize", {
            get: function () {
                return {width: this._canvasSize.width, height: this._canvasSize.height}
            }, enumerable: !0, configurable: !0
        }), t.prototype.resizeCanvas = function (t) {
            this._canvasSize = {width: t.width, height: t.height}, this._configureCanvas()
        }, Object.defineProperty(t.prototype, "pixelRatio", {
            get: function () {
                var t = this.canvas.ownerDocument.defaultView;
                if (null == t) throw new Error("No window is associated with the canvas");
                return t.devicePixelRatio > 1 || this._options.allowDownsampling ? t.devicePixelRatio : 1
            }, enumerable: !0, configurable: !0
        }), t.prototype.subscribeCanvasConfigured = function (t) {
            this._canvasConfiguredListeners.push(t)
        }, t.prototype.unsubscribeCanvasConfigured = function (t) {
            this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter((function (i) {
                return i != t
            }))
        }, t.prototype._configureCanvas = function () {
            var t = this.pixelRatio;
            this.canvas.style.width = this._canvasSize.width + "px", this.canvas.style.height = this._canvasSize.height + "px", this.canvas.width = this._canvasSize.width * t, this.canvas.height = this._canvasSize.height * t, this._emitCanvasConfigured()
        }, t.prototype._emitCanvasConfigured = function () {
            var t = this;
            this._canvasConfiguredListeners.forEach((function (i) {
                return i.call(t)
            }))
        }, t.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
            var t = this.canvas.ownerDocument.defaultView;
            if (null == t) throw new Error("No window is associated with the canvas");
            var i = t.devicePixelRatio;
            this._resolutionMediaQueryList = t.matchMedia("all and (resolution: " + i + "dppx)"), this._resolutionMediaQueryList.addListener(this._resolutionListener)
        }, t.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
        }, t.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(), this._installResolutionListener()
        }, t.prototype._onResolutionChanged = function () {
            this._configureCanvas(), this._reinstallResolutionListener()
        }, t
    }(), Zi = function () {
        function t(t, i) {
            this.st = t, this.rt = i
        }

        return t.prototype.fn = function (t) {
            return this.st === t.st && this.rt === t.rt
        }, t
    }();

    function Ji(t) {
        return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1
    }

    function Gi(t) {
        var i = l(t.getContext("2d"));
        return i.setTransform(1, 0, 0, 1, 0, 0), i
    }

    function Qi(t, i) {
        var n = t.createElement("canvas"), h = Ji(n);
        return n.style.width = i.st + "px", n.style.height = i.rt + "px", n.width = i.st * h, n.height = i.rt * h, n
    }

    function tn(t, i) {
        var n = l(t.ownerDocument).createElement("canvas");
        t.appendChild(n);
        var h = function (t, i) {
            return void 0 === i && (i = $i), new Xi(t, i)
        }(n);
        return h.resizeCanvas({width: i.st, height: i.rt}), h
    }

    var nn = "undefined" != typeof window;
    var hn = function () {
        if (!nn) return !1;
        var t = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || !!nn && ("ontouchstart" in window || Boolean(window.DocumentTouch && document instanceof window.DocumentTouch));
        return "onorientationchange" in window && t
    }();
    var sn = function () {
        if (!nn) return !1;
        var t = /Android/i.test(navigator.userAgent),
            i = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
        return t || i
    }(), rn = function () {
        function t(t, i, n) {
            this.if = 0, this.nf = null, this.hf = null, this.sf = !1, this.rf = null, this.ef = !1, this.uf = !1, this.af = null, this.lf = null, this.ff = null, this.cf = null, this.vf = 0, this._f = !1, this.df = !1, this.wf = !1, this.Mf = t, this.bf = i, this.Si = n, this.mf()
        }

        return t.prototype.an = function () {
            null !== this.af && (this.af(), this.af = null), null !== this.lf && (this.lf(), this.lf = null), null !== this.ff && (this.ff(), this.ff = null), this.gf(), this.pf()
        }, t.prototype.yf = function (t) {
            var i = this;
            this.lf && this.lf();
            var n = this.kf.bind(this);
            this.lf = function () {
                i.Mf.removeEventListener("mousemove", n)
            }, this.Mf.addEventListener("mousemove", n), an(t) && this.kf(t);
            var h = this.xf(t);
            this.Nf(h, this.bf.Sf)
        }, t.prototype.pf = function () {
            null !== this.nf && clearTimeout(this.nf), this.if = 0, this.nf = null
        }, t.prototype.kf = function (t) {
            if (!this.wf || an(t)) {
                var i = this.xf(t);
                this.Nf(i, this.bf.Df)
            }
        }, t.prototype.Cf = function (t) {
            if ((!("button" in t) || 0 === t.button) && null === this.cf) {
                var i = an(t);
                if (!this.df || !i) {
                    this._f = !0;
                    var n = this.xf(t), h = f(this.rf), s = Math.abs(h.g - n.Tf), r = Math.abs(h.p - n.Ef),
                        e = s + r > 5;
                    if (e || !i) {
                        if (e && !this.ef && i) {
                            var u = .5 * s, a = r >= u && !this.Si.Lf, o = u > r && !this.Si.Bf;
                            a || o || (this.df = !0)
                        }
                        e && (this.ef = !0, this.uf = !0, i && this.gf()), this.df || (this.Nf(n, this.bf.Af), i && on(t))
                    }
                }
            }
        }, t.prototype.Of = function (t) {
            if (!("button" in t) || 0 === t.button) {
                var i = this.xf(t);
                this.gf(), this.rf = null, this.wf = !1, this.ff && (this.ff(), this.ff = null), an(t) && this.Vf(t), this.Nf(i, this.bf.zf), ++this.if, this.nf && this.if > 1 ? (this.Nf(i, this.bf.Pf), this.pf()) : this.uf || this.Nf(i, this.bf.Ff), an(t) && (on(t), this.Vf(t), 0 === t.touches.length && (this.sf = !1))
            }
        }, t.prototype.gf = function () {
            null !== this.hf && (clearTimeout(this.hf), this.hf = null)
        }, t.prototype.If = function (t) {
            if (!("button" in t) || 0 === t.button) {
                var i = this.xf(t);
                this.uf = !1, this.ef = !1, this.df = !1, an(t) && this.yf(t), this.rf = {
                    g: i.Tf,
                    p: i.Ef
                }, this.ff && (this.ff(), this.ff = null);
                var n = this.Cf.bind(this), h = this.Of.bind(this), s = this.Mf.ownerDocument.documentElement;
                this.ff = function () {
                    s.removeEventListener("touchmove", n), s.removeEventListener("touchend", h), s.removeEventListener("mousemove", n), s.removeEventListener("mouseup", h)
                }, s.addEventListener("touchmove", n, {passive: !1}), s.addEventListener("touchend", h, {passive: !1}), this.gf(), an(t) && 1 === t.touches.length ? this.hf = setTimeout(this.Wf.bind(this, t), 240) : (s.addEventListener("mousemove", n), s.addEventListener("mouseup", h)), this.wf = !0, this.Nf(i, this.bf.jf), this.nf || (this.if = 0, this.nf = setTimeout(this.pf.bind(this), 500))
            }
        }, t.prototype.mf = function () {
            var t = this;
            this.Mf.addEventListener("mouseenter", this.yf.bind(this)), this.Mf.addEventListener("touchcancel", this.gf.bind(this));
            var i = this.Mf.ownerDocument, n = function (i) {
                t.bf.Rf && (i.composed && t.Mf.contains(i.composedPath()[0]) || i.target && t.Mf.contains(i.target) || t.bf.Rf())
            };
            this.af = function () {
                i.removeEventListener("mousedown", n), i.removeEventListener("touchstart", n)
            }, i.addEventListener("mousedown", n), i.addEventListener("touchstart", n, {passive: !0}), this.Mf.addEventListener("mouseleave", this.Vf.bind(this)), this.Mf.addEventListener("touchstart", this.If.bind(this), {passive: !0}), hn || this.Mf.addEventListener("mousedown", this.If.bind(this)), this.Uf(), this.Mf.addEventListener("touchmove", (function () {
            }), {passive: !1})
        }, t.prototype.Uf = function () {
            var t = this;
            void 0 === this.bf.qf && void 0 === this.bf.Hf && void 0 === this.bf.Yf || (this.Mf.addEventListener("touchstart", (function (i) {
                return t.Kf(i.touches)
            }), {passive: !0}), this.Mf.addEventListener("touchmove", (function (i) {
                if (2 === i.touches.length && null !== t.cf && void 0 !== t.bf.Hf) {
                    var n = un(i.touches[0], i.touches[1]) / t.vf;
                    t.bf.Hf(t.cf, n), on(i)
                }
            }), {passive: !1}), this.Mf.addEventListener("touchend", (function (i) {
                t.Kf(i.touches)
            })))
        }, t.prototype.Kf = function (t) {
            1 === t.length && (this._f = !1), 2 !== t.length || this._f || this.sf ? this.$f() : this.Xf(t)
        }, t.prototype.Xf = function (t) {
            var i = en(this.Mf);
            this.cf = {
                g: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
                p: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
            }, this.vf = un(t[0], t[1]), void 0 !== this.bf.qf && this.bf.qf(), this.gf()
        }, t.prototype.$f = function () {
            null !== this.cf && (this.cf = null, void 0 !== this.bf.Yf && this.bf.Yf())
        }, t.prototype.Vf = function (t) {
            this.lf && this.lf();
            var i = this.xf(t);
            this.Nf(i, this.bf.Zf)
        }, t.prototype.Wf = function (t) {
            var i = this.xf(t);
            this.Nf(i, this.bf.Jf), this.uf = !0, this.sf = !0
        }, t.prototype.Nf = function (t, i) {
            i && i.call(this.bf, t)
        }, t.prototype.xf = function (t) {
            var i;
            i = "touches" in t && t.touches.length ? t.touches[0] : "changedTouches" in t && t.changedTouches.length ? t.changedTouches[0] : t;
            var n = en(this.Mf);
            return {
                Gf: i.clientX,
                Qf: i.clientY,
                Tf: i.pageX,
                Ef: i.pageY,
                tc: i.screenX,
                ic: i.screenY,
                nc: i.clientX - n.left,
                hc: i.clientY - n.top,
                sc: t.ctrlKey,
                rc: t.altKey,
                ec: t.shiftKey,
                uc: t.metaKey,
                Le: t.type.startsWith("mouse") ? "mouse" : "touch",
                ac: t.view
            }
        }, t
    }();

    function en(t) {
        return t.getBoundingClientRect() || {left: 0, top: 0}
    }

    function un(t, i) {
        var n = t.clientX - i.clientX, h = t.clientY - i.clientY;
        return Math.sqrt(n * n + h * h)
    }

    function an(t) {
        return Boolean(t.touches)
    }

    function on(t) {
        t.cancelable && t.preventDefault()
    }

    var ln = function () {
        function t(t, i, n, h) {
            this.Au = new fi(200), this.oe = 0, this.oc = "", this.qu = "", this.Tu = [], this.lc = new Map, this.oe = t, this.oc = i, this.qu = Vt(t, n, h)
        }

        return t.prototype.an = function () {
            this.Au.Eu(), this.Tu = [], this.lc.clear()
        }, t.prototype.fc = function (t, i, n, h, s) {
            var r = this.cc(t, i);
            if ("left" !== s) {
                var e = Ji(t.canvas);
                n -= Math.floor(r.vc * e)
            }
            h -= Math.floor(r.Mt / 2), t.drawImage(r._c, n, h, r.wt, r.Mt)
        }, t.prototype.cc = function (t, i) {
            var n, h = this;
            if (this.lc.has(i)) n = o(this.lc.get(i)); else {
                if (this.Tu.length >= 200) {
                    var s = o(this.Tu.shift());
                    this.lc.delete(s)
                }
                var r = Ji(t.canvas), e = Math.ceil(this.oe / 4.5), u = Math.round(this.oe / 10),
                    a = Math.ceil(this.Au.Vt(t, i)), l = it(Math.round(a + 2 * e)), f = it(this.oe + 2 * e),
                    c = Qi(document, new Zi(l, f));
                n = {
                    Ot: i,
                    vc: Math.round(Math.max(1, a)),
                    wt: Math.ceil(l * r),
                    Mt: Math.ceil(f * r),
                    _c: c
                }, 0 !== a && (this.Tu.push(n.Ot), this.lc.set(n.Ot, n)), V(t = Gi(n._c), r, (function () {
                    t.font = h.qu, t.fillStyle = h.oc, t.fillText(i, 0, f - e - u)
                }))
            }
            return n
        }, t
    }(), fn = function () {
        function t(t, i, n, h) {
            var s = this;
            this.Qt = null, this.dc = null, this.wc = null, this.Mc = !1, this.bc = new fi(50), this.mc = new ln(11, "#000"), this.oc = null, this.qu = null, this.gc = 0, this.yc = function () {
                s.kc(s.Ml.I()), s.wi.xc().vt().Pr()
            }, this.Nc = function () {
                s.wi.xc().vt().Pr()
            }, this.wi = t, this.Si = i, this.Ml = n, this.Sc = "left" === h, this.Dc = document.createElement("div"), this.Dc.style.height = "100%", this.Dc.style.overflow = "hidden", this.Dc.style.width = "25px", this.Dc.style.left = "0", this.Dc.style.position = "relative", this.Cc = tn(this.Dc, new Zi(16, 16)), this.Cc.subscribeCanvasConfigured(this.yc);
            var r = this.Cc.canvas;
            r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Tc = tn(this.Dc, new Zi(16, 16)), this.Tc.subscribeCanvasConfigured(this.Nc);
            var e = this.Tc.canvas;
            e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0";
            var u = {
                jf: this.Ec.bind(this),
                Af: this.Lc.bind(this),
                Rf: this.Bc.bind(this),
                zf: this.Ac.bind(this),
                Pf: this.Oc.bind(this),
                Sf: this.Vc.bind(this),
                Zf: this.zc.bind(this)
            };
            this.Pc = new rn(this.Tc.canvas, u, {Lf: !1, Bf: !0})
        }

        return t.prototype.an = function () {
            this.Pc.an(), this.Tc.unsubscribeCanvasConfigured(this.Nc), this.Tc.destroy(), this.Cc.unsubscribeCanvasConfigured(this.yc), this.Cc.destroy(), null !== this.Qt && this.Qt.Rh().rn(this), this.Qt = null, null !== this.wc && (clearTimeout(this.wc), this.wc = null), this.mc.an()
        }, t.prototype.Fc = function () {
            return this.Dc
        }, t.prototype.Ic = function () {
            return this.Si.backgroundColor
        }, t.prototype.S = function () {
            return l(this.Qt).I().borderColor
        }, t.prototype.Wc = function () {
            return this.Si.textColor
        }, t.prototype.Pt = function () {
            return this.Si.fontSize
        }, t.prototype.jc = function () {
            return Vt(this.Pt(), this.Si.fontFamily)
        }, t.prototype.Rc = function () {
            var t = this.Ml.I(), i = this.oc !== t.ut, n = this.qu !== t.Nt;
            return (i || n) && (this.kc(t), this.oc = t.ut), n && (this.bc.Eu(), this.qu = t.Nt), t
        }, t.prototype.Uc = function () {
            if (null === this.Qt) return 0;
            var t = 34, i = this.Rc(), n = Gi(this.Cc.canvas), h = this.Qt.Vn();
            n.font = this.jc(), h.length > 0 && (t = Math.max(this.bc.Vt(n, h[0].Bn), this.bc.Vt(n, h[h.length - 1].Bn)));
            for (var s = this.qc(), r = s.length; r--;) {
                var e = this.bc.Vt(n, s[r].Ot());
                e > t && (t = e)
            }
            var u = Math.ceil(i.Tt + i.Ct + i.Bt + i.At + t);
            return u += u % 2
        }, t.prototype.Hc = function (t) {
            if (t.st < 0 || t.rt < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
            null !== this.dc && this.dc.fn(t) || (this.dc = t, this.Cc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.Tc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.Dc.style.width = t.st + "px", this.Dc.style.height = t.rt + "px", this.Dc.style.minWidth = t.st + "px")
        }, t.prototype.Yc = function () {
            return l(this.dc).st
        }, t.prototype.ci = function (t) {
            this.Qt !== t && (null !== this.Qt && this.Qt.Rh().rn(this), this.Qt = t, t.Rh().Qi(this.Hn.bind(this), this))
        }, t.prototype.Z = function () {
            return this.Qt
        }, t.prototype.Eu = function () {
            var t = this.wi.Kc();
            this.wi.xc().vt().Jo(t, l(this.Z()))
        }, t.prototype.$c = function (t) {
            if (null !== this.dc) {
                if (1 !== t) {
                    var i = Gi(this.Cc.canvas);
                    this.Xc(), this.Zc(i, this.Cc.pixelRatio), this.wu(i, this.Cc.pixelRatio), this.Jc(i, this.Cc.pixelRatio), this.Gc(i, this.Cc.pixelRatio)
                }
                var n = Gi(this.Tc.canvas), h = this.dc.st, s = this.dc.rt;
                V(n, this.Tc.pixelRatio, (function () {
                    n.clearRect(0, 0, h, s)
                })), this.Qc(n, this.Tc.pixelRatio)
            }
        }, t.prototype.tv = function () {
            return this.Cc.canvas
        }, t.prototype.Ec = function (t) {
            if (null !== this.Qt && !this.Qt.ii() && this.wi.xc().I().handleScale.axisPressedMouseMove.price) {
                var i = this.wi.xc().vt(), n = this.wi.Kc();
                this.Mc = !0, i.qo(n, this.Qt, t.hc)
            }
        }, t.prototype.Lc = function (t) {
            if (null !== this.Qt && this.wi.xc().I().handleScale.axisPressedMouseMove.price) {
                var i = this.wi.xc().vt(), n = this.wi.Kc(), h = this.Qt;
                i.Ho(n, h, t.hc)
            }
        }, t.prototype.Bc = function () {
            if (null !== this.Qt && this.wi.xc().I().handleScale.axisPressedMouseMove.price) {
                var t = this.wi.xc().vt(), i = this.wi.Kc(), n = this.Qt;
                this.Mc && (this.Mc = !1, t.Yo(i, n))
            }
        }, t.prototype.Ac = function (t) {
            if (null !== this.Qt && this.wi.xc().I().handleScale.axisPressedMouseMove.price) {
                var i = this.wi.xc().vt(), n = this.wi.Kc();
                this.Mc = !1, i.Yo(n, this.Qt)
            }
        }, t.prototype.Oc = function (t) {
            this.wi.xc().I().handleScale.axisDoubleClickReset && this.Eu()
        }, t.prototype.Vc = function (t) {
            null !== this.Qt && (!this.wi.xc().vt().I().handleScale.axisPressedMouseMove.price || this.Qt._h() || this.Qt.dh() || this.iv(1))
        }, t.prototype.zc = function (t) {
            this.iv(0)
        }, t.prototype.qc = function () {
            var t = this, i = [], n = null === this.Qt ? void 0 : this.Qt;
            return function (h) {
                for (var s = 0; s < h.length; ++s) for (var r = h[s].vi(t.wi.Kc(), n), e = 0; e < r.length; e++) i.push(r[e])
            }(this.wi.Kc().Ph()), i
        }, t.prototype.Zc = function (t, i) {
            var n = this;
            if (null !== this.dc) {
                var h = this.dc.st, s = this.dc.rt;
                V(t, i, (function () {
                    z(t, 0, 0, h, s, n.Ic())
                }))
            }
        }, t.prototype.wu = function (t, i) {
            if (null !== this.dc && null !== this.Qt && this.Qt.I().borderVisible) {
                t.save(), t.fillStyle = this.S();
                var n, h = Math.max(1, Math.floor(this.Rc().Tt * i));
                n = this.Sc ? Math.floor(this.dc.st * i) - h : 0, t.fillRect(n, 0, h, Math.ceil(this.dc.rt * i)), t.restore()
            }
        }, t.prototype.Jc = function (t, i) {
            if (null !== this.dc && null !== this.Qt) {
                var n = this.Qt.Vn();
                t.save(), t.strokeStyle = this.S(), t.font = this.jc(), t.fillStyle = this.S();
                var h = this.Rc(), s = this.Qt.I().borderVisible && this.Qt.I().drawTicks,
                    r = this.Sc ? Math.floor((this.dc.st - h.Ct) * i - h.Tt * i) : Math.floor(h.Tt * i),
                    e = this.Sc ? Math.round(r - h.Bt * i) : Math.round(r + h.Ct * i + h.Bt * i),
                    u = this.Sc ? "right" : "left", a = Math.max(1, Math.floor(i)), o = Math.floor(.5 * i);
                if (s) {
                    var l = Math.round(h.Ct * i);
                    t.beginPath();
                    for (var f = 0, c = n; f < c.length; f++) {
                        var v = c[f];
                        t.rect(r, Math.round(v.Ln * i) - o, l, a)
                    }
                    t.fill()
                }
                t.fillStyle = this.Wc();
                for (var _ = 0, d = n; _ < d.length; _++) {
                    v = d[_];
                    this.mc.fc(t, v.Bn, e, Math.round(v.Ln * i), u)
                }
                t.restore()
            }
        }, t.prototype.Xc = function () {
            if (null !== this.dc && null !== this.Qt) {
                var t = this.dc.rt / 2, i = [], n = this.Qt.Ph().slice(), h = this.wi.Kc(), s = this.Rc();
                this.Qt === h.Ti() && this.wi.Kc().Ph().forEach((function (t) {
                    h.Fu(t) && n.push(t)
                }));
                var r = this.Qt.zh()[0], e = this.Qt;
                n.forEach((function (n) {
                    var s = n.vi(h, e);
                    s.forEach((function (t) {
                        t.$t(null), t.Xt() && i.push(t)
                    })), r === n && s.length > 0 && (t = s[0].Ft())
                }));
                var u = i.filter((function (i) {
                    return i.Ft() <= t
                })), a = i.filter((function (i) {
                    return i.Ft() > t
                }));
                if (u.sort((function (t, i) {
                    return i.Ft() - t.Ft()
                })), u.length && a.length && a.push(u[0]), a.sort((function (t, i) {
                    return t.Ft() - i.Ft()
                })), i.forEach((function (t) {
                    return t.$t(t.Ft())
                })), this.Qt.I().alignLabels) {
                    for (var o = 1; o < u.length; o++) {
                        var l = u[o], f = (v = u[o - 1]).Mt(s, !1);
                        l.Ft() > (_ = v.Kt()) - f && l.$t(_ - f)
                    }
                    for (var c = 1; c < a.length; c++) {
                        var v, _;
                        l = a[c], f = (v = a[c - 1]).Mt(s, !0);
                        l.Ft() < (_ = v.Kt()) + f && l.$t(_ + f)
                    }
                }
            }
        }, t.prototype.Gc = function (t, i) {
            var n = this;
            if (null !== this.dc) {
                t.save();
                var h = this.dc, s = this.qc(), r = this.Rc(), e = this.Sc ? "right" : "left";
                s.forEach((function (s) {
                    if (s.Zt()) {
                        var u = s.W(l(n.Qt));
                        t.save(), u.h(t, r, n.bc, h.st, e, i), t.restore()
                    }
                })), t.restore()
            }
        }, t.prototype.Qc = function (t, i) {
            var n = this;
            if (null !== this.dc && null !== this.Qt) {
                t.save();
                var h = this.dc, s = this.wi.xc().vt(), r = [], e = this.wi.Kc(), u = s.Al().vi(e, this.Qt);
                u.length && r.push(u);
                var a = this.Rc(), o = this.Sc ? "right" : "left";
                r.forEach((function (s) {
                    s.forEach((function (s) {
                        t.save(), s.W(l(n.Qt)).h(t, a, n.bc, h.st, o, i), t.restore()
                    }))
                })), t.restore()
            }
        }, t.prototype.iv = function (t) {
            this.Dc.style.cursor = 1 === t ? "ns-resize" : "default"
        }, t.prototype.Hn = function () {
            var t = this, i = this.Uc();
            if (this.gc < i) {
                var n = this.wi.xc();
                null === this.wc && (this.wc = setTimeout((function () {
                    n && n.vt().yl(), t.wc = null
                }), 100))
            }
            this.gc = i
        }, t.prototype.kc = function (t) {
            this.mc.an(), this.mc = new ln(t.Pt, t.ut, t.ae)
        }, t
    }(), cn = sn, vn = function () {
        function t(t, i) {
            var n = this;
            this.dc = new Zi(0, 0), this.nv = null, this.hv = null, this.sv = null, this.rv = !1, this.ev = new Z, this.uv = 0, this.av = !1, this.ov = null, this.lv = !1, this.fv = null, this.yc = function () {
                return n.cv && n.ri().Pr()
            }, this.Nc = function () {
                return n.cv && n.ri().Pr()
            }, this.vv = t, this.cv = i, this.cv.tl().Qi(this._v.bind(this), this, !0), this.dv = document.createElement("td"), this.dv.style.padding = "0", this.dv.style.position = "relative";
            var h = document.createElement("div");
            h.style.width = "100%", h.style.height = "100%", h.style.position = "relative", h.style.overflow = "hidden", this.wv = document.createElement("td"), this.wv.style.padding = "0", this.Mv = document.createElement("td"), this.Mv.style.padding = "0", this.dv.appendChild(h), this.Cc = tn(h, new Zi(16, 16)), this.Cc.subscribeCanvasConfigured(this.yc);
            var s = this.Cc.canvas;
            s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Tc = tn(h, new Zi(16, 16)), this.Tc.subscribeCanvasConfigured(this.Nc);
            var r = this.Tc.canvas;
            r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.bv = document.createElement("tr"), this.bv.appendChild(this.wv), this.bv.appendChild(this.dv), this.bv.appendChild(this.Mv), this.mv();
            var e = this.xc().I().handleScroll;
            this.Pc = new rn(this.Tc.canvas, this, {Lf: !e.vertTouchDrag, Bf: !e.horzTouchDrag})
        }

        return t.prototype.an = function () {
            null !== this.nv && this.nv.an(), null !== this.hv && this.hv.an(), this.Tc.unsubscribeCanvasConfigured(this.Nc), this.Tc.destroy(), this.Cc.unsubscribeCanvasConfigured(this.yc), this.Cc.destroy(), null !== this.cv && this.cv.tl().rn(this), this.Pc.an()
        }, t.prototype.Kc = function () {
            return l(this.cv)
        }, t.prototype.gv = function (i) {
            null !== this.cv && this.cv.tl().rn(this), this.cv = i, null !== this.cv && this.cv.tl().Qi(t.prototype._v.bind(this), this, !0), this.mv()
        }, t.prototype.xc = function () {
            return this.vv
        }, t.prototype.Fc = function () {
            return this.bv
        }, t.prototype.mv = function () {
            if (null !== this.cv && (this.pv(), 0 !== this.ri().V().length)) {
                if (null !== this.nv) {
                    var t = this.cv.Ro();
                    this.nv.ci(l(t))
                }
                if (null !== this.hv) {
                    var i = this.cv.Uo();
                    this.hv.ci(l(i))
                }
            }
        }, t.prototype.Vo = function () {
            return null !== this.cv ? this.cv.Vo() : 0
        }, t.prototype.zo = function (t) {
            this.cv && this.cv.zo(t)
        }, t.prototype.Sf = function (t) {
            if (this.cv) {
                var i = t.nc, n = t.hc;
                hn || this.yv(i, n)
            }
        }, t.prototype.jf = function (t) {
            if (this.av = !1, this.lv = null !== this.ov, this.cv) {
                if (document.activeElement !== document.body && document.activeElement !== document.documentElement) l(document.activeElement).blur(); else {
                    var i = document.getSelection();
                    null !== i && i.removeAllRanges()
                }
                var n = this.ri();
                if (!this.cv.Ti().ii() && !n.U().ii()) {
                    if (null !== this.ov) {
                        var h = n.Al();
                        this.fv = {x: h.bt(), y: h.gt()}, this.ov = {x: t.nc, y: t.hc}
                    }
                    hn || this.yv(t.nc, t.hc)
                }
            }
        }, t.prototype.Df = function (t) {
            if (this.cv) {
                var i = t.nc, n = t.hc;
                if (this.kv() && this.xv(), !hn) {
                    this.yv(i, n);
                    var h = this.Hu(i, n);
                    this.ri().Sl(h && {Dl: h.Dl, Nv: h.Nv}), null !== h && void 0 !== h.ac.Sv && h.ac.Sv(i, n)
                }
            }
        }, t.prototype.Ff = function (t) {
            if (null !== this.cv) {
                var i = t.nc, n = t.hc, h = this.Hu(i, n);
                if (null !== h && void 0 !== h.ac.Dv && h.ac.Dv(i, n), this.ev.un()) {
                    var s = this.ri().Al().R();
                    this.ev.en(s, {x: i, y: n})
                }
                this.Cv()
            }
        }, t.prototype.Af = function (t) {
            if (null !== this.cv) {
                var i = this.ri(), n = t.nc, h = t.hc;
                if (null !== this.ov) {
                    this.lv = !1;
                    var s = l(this.fv), r = s.x + (n - this.ov.x), e = s.y + (h - this.ov.y);
                    this.yv(r, e)
                } else this.kv() || this.yv(n, h);
                if (!i.U().ii()) {
                    var u = this.vv.I().handleScroll;
                    if (u.pressedMouseMove && "touch" !== t.Le || (u.horzTouchDrag || u.vertTouchDrag) && "mouse" !== t.Le) {
                        var a = this.cv.Ti();
                        null !== this.sv || this.Tv() || (this.sv = {
                            x: t.Gf,
                            y: t.Qf
                        }), null === this.sv || this.sv.x === t.Gf && this.sv.y === t.Qf || this.rv || (a.ii() || i.Ko(this.cv, a, t.hc), i.Wl(t.nc), this.rv = !0), this.rv && (a.ii() || i.$o(this.cv, a, t.hc), i.jl(t.nc))
                    }
                }
            }
        }, t.prototype.zf = function (t) {
            if (null !== this.cv) {
                this.av = !1;
                var i = this.ri();
                if (this.rv) {
                    var n = this.cv.Ti();
                    i.Xo(this.cv, n), i.Rl(), this.sv = null, this.rv = !1
                }
            }
        }, t.prototype.Jf = function (t) {
            if (this.av = !0, null === this.ov && cn) {
                var i = {x: t.nc, y: t.hc};
                this.Ev(i, i)
            }
        }, t.prototype.Zf = function (t) {
            null !== this.cv && (this.cv.vt().Sl(null), sn || this.xv())
        }, t.prototype.Lv = function () {
            return this.ev
        }, t.prototype.qf = function () {
            this.uv = 1
        }, t.prototype.Hf = function (t, i) {
            if (this.vv.I().handleScale.pinch) {
                var n = 5 * (i - this.uv);
                this.uv = i, this.ri().Fl(t.g, n)
            }
        }, t.prototype.Hu = function (t, i) {
            var n = this.cv;
            if (null === n) return null;
            for (var h = 0, s = n.Ph(); h < s.length; h++) {
                var r = s[h], e = this.Bv(r._i(n), t, i);
                if (null !== e) return {Dl: r, ac: e.ac, Nv: e.Nv}
            }
            return null
        }, t.prototype.Av = function (t, i) {
            l("left" === i ? this.nv : this.hv).Hc(new Zi(t, this.dc.rt))
        }, t.prototype.Ov = function () {
            return this.dc
        }, t.prototype.Hc = function (t) {
            if (t.st < 0 || t.rt < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
            this.dc.fn(t) || (this.dc = t, this.Cc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.Tc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.dv.style.width = t.st + "px", this.dv.style.height = t.rt + "px")
        }, t.prototype.Vv = function () {
            var t = l(this.cv);
            t.jo(t.Ro()), t.jo(t.Uo());
            for (var i = 0, n = t.zh(); i < n.length; i++) {
                var h = n[i];
                if (t.Fu(h)) {
                    var s = h.Z();
                    null !== s && t.jo(s), h.Ri()
                }
            }
        }, t.prototype.tv = function () {
            return this.Cc.canvas
        }, t.prototype.$c = function (t) {
            if (0 !== t && null !== this.cv) {
                if (t > 1 && this.Vv(), null !== this.nv && this.nv.$c(t), null !== this.hv && this.hv.$c(t), 1 !== t) {
                    var i = Gi(this.Cc.canvas);
                    i.save(), this.Zc(i, this.zv(), this.Cc.pixelRatio), this.cv && (this.Pv(i, this.Cc.pixelRatio), this.Fv(i, this.Cc.pixelRatio), this.Iv(i, this.Cc.pixelRatio)), i.restore()
                }
                var n = Gi(this.Tc.canvas);
                n.clearRect(0, 0, Math.ceil(this.dc.st * this.Tc.pixelRatio), Math.ceil(this.dc.rt * this.Tc.pixelRatio)), this.Wv(n, this.Tc.pixelRatio)
            }
        }, t.prototype.jv = function () {
            return this.nv
        }, t.prototype.Rv = function () {
            return this.hv
        }, t.prototype.zv = function () {
            return this.vv.I().layout.backgroundColor
        }, t.prototype._v = function () {
            null !== this.cv && this.cv.tl().rn(this), this.cv = null
        }, t.prototype.Zc = function (t, i, n) {
            var h = this;
            V(t, n, (function () {
                z(t, 0, 0, h.dc.st, h.dc.rt, i)
            }))
        }, t.prototype.Pv = function (t, i) {
            for (var n = l(this.cv), h = this.ri().Ll()._i(n), s = n.Mt(), r = n.wt(), e = 0, u = h; e < u.length; e++) {
                var a = u[e];
                t.save();
                var o = a.W(s, r);
                null !== o && o.h(t, i, !1), t.restore()
            }
        }, t.prototype.Fv = function (t, i) {
            var n = this.ri().Bl();
            this.Uv(n, t, i), this.qv(n, t, i)
        }, t.prototype.Wv = function (t, i) {
            this.qv(this.ri().Al(), t, i)
        }, t.prototype.Iv = function (t, i) {
            for (var n = l(this.cv).Ph(), h = 0, s = n; h < s.length; h++) {
                var r = s[h];
                this.Uv(r, t, i)
            }
            for (var e = 0, u = n; e < u.length; e++) {
                r = u[e];
                this.qv(r, t, i)
            }
        }, t.prototype.qv = function (t, i, n) {
            for (var h = l(this.cv), s = t._i(h), r = h.Mt(), e = h.wt(), u = h.vt().Nl(), a = null !== u && u.Dl === t, o = null !== u && a && void 0 !== u.Nv ? u.Nv.Yu : void 0, f = 0, c = s; f < c.length; f++) {
                var v = c[f].W(r, e);
                null !== v && (i.save(), v.h(i, n, a, o), i.restore())
            }
        }, t.prototype.Uv = function (t, i, n) {
            for (var h = l(this.cv), s = t._i(h), r = h.Mt(), e = h.wt(), u = h.vt().Nl(), a = null !== u && u.Dl === t, o = null !== u && a && void 0 !== u.Nv ? u.Nv.Yu : void 0, f = 0, c = s; f < c.length; f++) {
                var v = c[f].W(r, e);
                null !== v && void 0 !== v.o && (i.save(), v.o(i, n, a, o), i.restore())
            }
        }, t.prototype.Bv = function (t, i, n) {
            for (var h = 0, s = t; h < s.length; h++) {
                var r = s[h], e = r.W(this.dc.rt, this.dc.st);
                if (null !== e && e.Hu) {
                    var u = e.Hu(i, n);
                    if (null !== u) return {ac: r, Nv: u}
                }
            }
            return null
        }, t.prototype.pv = function () {
            if (null !== this.cv) {
                var t = this.vv;
                t.I().leftPriceScale.visible || null === this.nv || (this.wv.removeChild(this.nv.Fc()), this.nv.an(), this.nv = null), t.I().rightPriceScale.visible || null === this.hv || (this.Mv.removeChild(this.hv.Fc()), this.hv.an(), this.hv = null);
                var i = t.vt().Xl();
                t.I().leftPriceScale.visible && null === this.nv && (this.nv = new fn(this, t.I().layout, i, "left"), this.wv.appendChild(this.nv.Fc())), t.I().rightPriceScale.visible && null === this.hv && (this.hv = new fn(this, t.I().layout, i, "right"), this.Mv.appendChild(this.hv.Fc()))
            }
        }, t.prototype.kv = function () {
            return cn && null === this.ov
        }, t.prototype.Tv = function () {
            return cn && this.av || null !== this.ov
        }, t.prototype.Hv = function (t) {
            return Math.max(0, Math.min(t, this.dc.st - 1))
        }, t.prototype.Yv = function (t) {
            return Math.max(0, Math.min(t, this.dc.rt - 1))
        }, t.prototype.yv = function (t, i) {
            this.ri().Hl(this.Hv(t), this.Yv(i), l(this.cv))
        }, t.prototype.xv = function () {
            this.ri().Kl()
        }, t.prototype.Cv = function () {
            this.lv && (this.ov = null, this.xv())
        }, t.prototype.Ev = function (t, i) {
            this.ov = t, this.lv = !1, this.yv(i.x, i.y);
            var n = this.ri().Al();
            this.fv = {x: n.bt(), y: n.gt()}
        }, t.prototype.ri = function () {
            return this.vv.vt()
        }, t
    }(), _n = function () {
        function t(t, i, n, h) {
            var s = this;
            this.L = !0, this.dc = new Zi(0, 0), this.yc = function () {
                return s.$c(3)
            }, this.Sc = "left" === t, this.Ml = n.Xl, this.Si = i, this.Kv = h, this.Dc = document.createElement("div"), this.Dc.style.width = "25px", this.Dc.style.height = "100%", this.Dc.style.overflow = "hidden", this.Cc = tn(this.Dc, new Zi(16, 16)), this.Cc.subscribeCanvasConfigured(this.yc)
        }

        return t.prototype.an = function () {
            this.Cc.unsubscribeCanvasConfigured(this.yc), this.Cc.destroy()
        }, t.prototype.Fc = function () {
            return this.Dc
        }, t.prototype.Ov = function () {
            return this.dc
        }, t.prototype.Hc = function (t) {
            if (t.st < 0 || t.rt < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
            this.dc.fn(t) || (this.dc = t, this.Cc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.Dc.style.width = t.st + "px", this.Dc.style.minWidth = t.st + "px", this.Dc.style.height = t.rt + "px", this.L = !0)
        }, t.prototype.$c = function (t) {
            if ((!(t < 3) || this.L) && 0 !== this.dc.st && 0 !== this.dc.rt) {
                this.L = !1;
                var i = Gi(this.Cc.canvas);
                this.Zc(i, this.Cc.pixelRatio), this.wu(i, this.Cc.pixelRatio)
            }
        }, t.prototype.tv = function () {
            return this.Cc.canvas
        }, t.prototype.wu = function (t, i) {
            if (this.Kv()) {
                var n = this.dc.st;
                t.save(), t.fillStyle = this.Si.timeScale.borderColor;
                var h = Math.floor(this.Ml.I().Tt * i), s = this.Sc ? Math.round(n * i) - h : 0;
                t.fillRect(s, 0, h, h), t.restore()
            }
        }, t.prototype.Zc = function (t, i) {
            var n = this;
            V(t, i, (function () {
                z(t, 0, 0, n.dc.st, n.dc.rt, n.Si.layout.backgroundColor)
            }))
        }, t
    }();

    function dn(t, i) {
        return t.Ws > i.Ws ? t : i
    }

    var wn = function () {
        function t(t) {
            var i = this;
            this.$v = null, this.Xv = null, this.ue = null, this.Zv = !1, this.dc = new Zi(0, 0), this.yc = function () {
                return i.vv.vt().Pr()
            }, this.Nc = function () {
                return i.vv.vt().Pr()
            }, this.vv = t, this.Si = t.I().layout, this.Jv = document.createElement("tr"), this.Gv = document.createElement("td"), this.Gv.style.padding = "0", this.Qv = document.createElement("td"), this.Qv.style.padding = "0", this.Dc = document.createElement("td"), this.Dc.style.height = "25px", this.Dc.style.padding = "0", this.t_ = document.createElement("div"), this.t_.style.width = "100%", this.t_.style.height = "100%", this.t_.style.position = "relative", this.t_.style.overflow = "hidden", this.Dc.appendChild(this.t_), this.Cc = tn(this.t_, new Zi(16, 16)), this.Cc.subscribeCanvasConfigured(this.yc);
            var n = this.Cc.canvas;
            n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Tc = tn(this.t_, new Zi(16, 16)), this.Tc.subscribeCanvasConfigured(this.Nc);
            var h = this.Tc.canvas;
            h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0", this.Jv.appendChild(this.Gv), this.Jv.appendChild(this.Dc), this.Jv.appendChild(this.Qv), this.i_(), this.vv.vt().Oo().Qi(this.i_.bind(this), this), this.Pc = new rn(this.Tc.canvas, this, {
                Lf: !0,
                Bf: !1
            })
        }

        return t.prototype.an = function () {
            this.Pc.an(), null !== this.$v && this.$v.an(), null !== this.Xv && this.Xv.an(), this.Tc.unsubscribeCanvasConfigured(this.Nc), this.Tc.destroy(), this.Cc.unsubscribeCanvasConfigured(this.yc), this.Cc.destroy()
        }, t.prototype.Fc = function () {
            return this.Jv
        }, t.prototype.n_ = function () {
            return this.$v
        }, t.prototype.h_ = function () {
            return this.Xv
        }, t.prototype.jf = function (t) {
            if (!this.Zv) {
                this.Zv = !0;
                var i = this.vv.vt();
                !i.U().ii() && this.vv.I().handleScale.axisPressedMouseMove.time && i.Pl(t.nc)
            }
        }, t.prototype.Rf = function () {
            var t = this.vv.vt();
            !t.U().ii() && this.Zv && (this.Zv = !1, this.vv.I().handleScale.axisPressedMouseMove.time && t.ql())
        }, t.prototype.Af = function (t) {
            var i = this.vv.vt();
            !i.U().ii() && this.vv.I().handleScale.axisPressedMouseMove.time && i.Ul(t.nc)
        }, t.prototype.zf = function (t) {
            this.Zv = !1;
            var i = this.vv.vt();
            i.U().ii() && !this.vv.I().handleScale.axisPressedMouseMove.time || i.ql()
        }, t.prototype.Pf = function () {
            this.vv.I().handleScale.axisDoubleClickReset && this.vv.vt().Ae()
        }, t.prototype.Sf = function (t) {
            this.vv.vt().I().handleScale.axisPressedMouseMove.time && this.iv(1)
        }, t.prototype.Zf = function (t) {
            this.iv(0)
        }, t.prototype.Ov = function () {
            return this.dc
        }, t.prototype.s_ = function (t, i, n) {
            this.dc && this.dc.fn(t) || (this.dc = t, this.Cc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.Tc.resizeCanvas({
                width: t.st,
                height: t.rt
            }), this.Dc.style.width = t.st + "px", this.Dc.style.height = t.rt + "px"), null !== this.$v && this.$v.Hc(new Zi(i, t.rt)), null !== this.Xv && this.Xv.Hc(new Zi(n, t.rt))
        }, t.prototype.r_ = function () {
            var t = this.e_();
            return Math.ceil(t.Tt + t.Ct + t.Pt + t.Et + t.Lt)
        }, t.prototype.O = function () {
            this.vv.vt().U().Vn()
        }, t.prototype.tv = function () {
            return this.Cc.canvas
        }, t.prototype.$c = function (t) {
            if (0 !== t) {
                if (1 !== t) {
                    var i = Gi(this.Cc.canvas);
                    this.Zc(i, this.Cc.pixelRatio), this.wu(i, this.Cc.pixelRatio), this.Jc(i, this.Cc.pixelRatio), null !== this.$v && this.$v.$c(t), null !== this.Xv && this.Xv.$c(t)
                }
                var n = Gi(this.Tc.canvas), h = this.Tc.pixelRatio;
                n.clearRect(0, 0, Math.ceil(this.dc.st * h), Math.ceil(this.dc.rt * h)), this.u_([this.vv.vt().Al()], n, h)
            }
        }, t.prototype.Zc = function (t, i) {
            var n = this;
            V(t, i, (function () {
                z(t, 0, 0, n.dc.st, n.dc.rt, n.zv())
            }))
        }, t.prototype.wu = function (t, i) {
            if (this.vv.I().timeScale.borderVisible) {
                t.save(), t.fillStyle = this.a_();
                var n = Math.max(1, Math.floor(this.e_().Tt * i));
                t.fillRect(0, 0, Math.ceil(this.dc.st * i), n), t.restore()
            }
        }, t.prototype.Jc = function (t, i) {
            var n = this, h = this.vv.vt().U().Vn();
            if (h && 0 !== h.length) {
                var s = h.reduce(dn, h[0]).Ws;
                s > 30 && s < 40 && (s = 30), t.save(), t.strokeStyle = this.a_();
                var r = this.e_(), e = r.Tt + r.Ct + r.Et + r.Pt - r.zt;
                t.textAlign = "center", t.fillStyle = this.a_();
                var u = Math.floor(this.e_().Tt * i), a = Math.max(1, Math.floor(i)), o = Math.floor(.5 * i);
                if (this.vv.vt().U().I().borderVisible) {
                    t.beginPath();
                    for (var l = Math.round(r.Ct * i), f = h.length; f--;) {
                        var c = Math.round(h[f].Ln * i);
                        t.rect(c - o, u, a, l)
                    }
                    t.fill()
                }
                t.fillStyle = this.fe(), V(t, i, (function () {
                    t.font = n.o_();
                    for (var i = 0, r = h; i < r.length; i++) {
                        (o = r[i]).Ws < s && t.fillText(o.Bn, o.Ln, e)
                    }
                    t.font = n.l_();
                    for (var u = 0, a = h; u < a.length; u++) {
                        var o;
                        (o = a[u]).Ws >= s && t.fillText(o.Bn, o.Ln, e)
                    }
                }))
            }
        }, t.prototype.u_ = function (t, i, n) {
            for (var h = this.e_(), s = 0, r = t; s < r.length; s++) for (var e = 0, u = r[s].di(); e < u.length; e++) {
                var a = u[e];
                i.save(), a.W().h(i, h, n), i.restore()
            }
        }, t.prototype.zv = function () {
            return this.Si.backgroundColor
        }, t.prototype.a_ = function () {
            return this.vv.I().timeScale.borderColor
        }, t.prototype.fe = function () {
            return this.Si.textColor
        }, t.prototype.oe = function () {
            return this.Si.fontSize
        }, t.prototype.o_ = function () {
            return Vt(this.oe(), this.Si.fontFamily)
        }, t.prototype.l_ = function () {
            return Vt(this.oe(), this.Si.fontFamily, "bold")
        }, t.prototype.e_ = function () {
            null === this.ue && (this.ue = {
                Tt: 1,
                zt: NaN,
                Et: NaN,
                Lt: NaN,
                si: NaN,
                Ct: 3,
                Pt: NaN,
                Nt: "",
                hi: new fi
            });
            var t = this.ue, i = this.o_();
            if (t.Nt !== i) {
                var n = this.oe();
                t.Pt = n, t.Nt = i, t.Et = Math.ceil(n / 2.5), t.Lt = t.Et, t.si = Math.ceil(n / 2), t.zt = Math.round(this.oe() / 5), t.hi.Eu()
            }
            return this.ue
        }, t.prototype.iv = function (t) {
            this.Dc.style.cursor = 1 === t ? "ew-resize" : "default"
        }, t.prototype.i_ = function () {
            var t = this.vv.vt(), i = t.I();
            i.leftPriceScale.visible || null === this.$v || (this.Gv.removeChild(this.$v.Fc()), this.$v.an(), this.$v = null), i.rightPriceScale.visible || null === this.Xv || (this.Qv.removeChild(this.Xv.Fc()), this.Xv.an(), this.Xv = null);
            var n = {Xl: this.vv.vt().Xl()};
            if (i.leftPriceScale.visible && null === this.$v) {
                var h = function () {
                    return i.leftPriceScale.borderVisible && t.U().I().borderVisible
                };
                this.$v = new _n("left", this.vv.I(), n, h), this.Gv.appendChild(this.$v.Fc())
            }
            if (i.rightPriceScale.visible && null === this.Xv) {
                h = function () {
                    return i.rightPriceScale.borderVisible && t.U().I().borderVisible
                };
                this.Xv = new _n("right", this.vv.I(), n, h), this.Qv.appendChild(this.Xv.Fc())
            }
        }, t
    }(), Mn = function () {
        function t(t, i) {
            var n;
            this.f_ = [], this.c_ = 0, this.zn = 0, this.$s = 0, this.v_ = 0, this.__ = 0, this.d_ = null, this.w_ = !1, this.ev = new Z, this.dl = new Z, this.Si = i, this.Jv = document.createElement("div"), this.Jv.classList.add("tv-lightweight-charts"), this.Jv.style.overflow = "hidden", this.Jv.style.width = "100%", this.Jv.style.height = "100%", (n = this.Jv).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.M_ = document.createElement("table"), this.M_.setAttribute("cellspacing", "0"), this.Jv.appendChild(this.M_), this.b_ = this.m_.bind(this), this.Jv.addEventListener("wheel", this.b_, {passive: !1}), this.ri = new Ki(this.wl.bind(this), this.Si), this.vt().Ol().Qi(this.g_.bind(this), this), this.p_ = new wn(this), this.M_.appendChild(this.p_.Fc());
            var h = this.Si.width, s = this.Si.height;
            if (0 === h || 0 === s) {
                var r = t.getBoundingClientRect();
                0 === h && (h = Math.floor(r.width), h -= h % 2), 0 === s && (s = Math.floor(r.height), s -= s % 2)
            }
            this.y_(h, s), this.k_(), t.appendChild(this.Jv), this.x_(), this.ri.U().Zr().Qi(this.ri.yl.bind(this.ri), this), this.ri.Oo().Qi(this.ri.yl.bind(this.ri), this)
        }

        return t.prototype.vt = function () {
            return this.ri
        }, t.prototype.I = function () {
            return this.Si
        }, t.prototype.N_ = function () {
            return this.f_
        }, t.prototype.an = function () {
            this.Jv.removeEventListener("wheel", this.b_), 0 !== this.c_ && window.cancelAnimationFrame(this.c_), this.ri.Ol().rn(this), this.ri.U().Zr().rn(this), this.ri.Oo().rn(this), this.ri.an();
            for (var t = 0, i = this.f_; t < i.length; t++) {
                var n = i[t];
                this.M_.removeChild(n.Fc()), n.Lv().rn(this), n.an()
            }
            this.f_ = [], l(this.p_).an(), null !== this.Jv.parentElement && this.Jv.parentElement.removeChild(this.Jv), this.dl.an(), this.ev.an()
        }, t.prototype.y_ = function (t, i, n) {
            if (void 0 === n && (n = !1), this.zn !== i || this.$s !== t) {
                this.zn = i, this.$s = t;
                var h = i + "px", s = t + "px";
                l(this.Jv).style.height = h, l(this.Jv).style.width = s, this.M_.style.height = h, this.M_.style.width = s, n ? this.S_(new jt(3)) : this.ri.yl()
            }
        }, t.prototype.$c = function (t) {
            void 0 === t && (t = new jt(3));
            for (var i = 0; i < this.f_.length; i++) this.f_[i].$c(t.Te(i).De);
            this.p_.$c(t.Ce())
        }, t.prototype.eh = function (t) {
            this.ri.eh(t), this.x_();
            var i = t.width || this.$s, n = t.height || this.zn;
            this.y_(i, n)
        }, t.prototype.Lv = function () {
            return this.ev
        }, t.prototype.Ol = function () {
            return this.dl
        }, t.prototype.D_ = function () {
            var t = this;
            null !== this.d_ && (this.S_(this.d_), this.d_ = null);
            var i = this.f_[0], n = Qi(document, new Zi(this.$s, this.zn)), h = Gi(n), s = Ji(n);
            return V(h, s, (function () {
                var n = 0, s = 0, r = function (i) {
                    for (var r = 0; r < t.f_.length; r++) {
                        var e = t.f_[r], u = e.Ov().rt, a = l("left" === i ? e.jv() : e.Rv()), o = a.tv();
                        h.drawImage(o, n, s, a.Yc(), u), s += u
                    }
                };
                t.C_() && (r("left"), n = l(i.jv()).Yc()), s = 0;
                for (var e = 0; e < t.f_.length; e++) {
                    var u = t.f_[e], a = u.Ov(), o = u.tv();
                    h.drawImage(o, n, s, a.st, a.rt), s += a.rt
                }
                n += i.Ov().st, t.T_() && (s = 0, r("right"));
                var f = function (i) {
                    var r = l("left" === i ? t.p_.n_() : t.p_.h_()), e = r.Ov(), u = r.tv();
                    h.drawImage(u, n, s, e.st, e.rt)
                };
                if (t.Si.timeScale.visible) {
                    n = 0, t.C_() && (f("left"), n = l(i.jv()).Yc());
                    var c = t.p_.Ov();
                    o = t.p_.tv();
                    h.drawImage(o, n, s, c.st, c.rt), t.T_() && (n = i.Ov().st, f("right"), h.restore())
                }
            })), n
        }, t.prototype.E_ = function (t) {
            return "none" === t ? 0 : ("left" !== t || this.C_()) && ("right" !== t || this.T_()) ? 0 === this.f_.length ? 0 : l("left" === t ? this.f_[0].jv() : this.f_[0].Rv()).Yc() : 0
        }, t.prototype.L_ = function () {
            for (var t = 0, i = 0, n = 0, h = 0, s = this.f_; h < s.length; h++) {
                var r = s[h];
                this.C_() && (i = Math.max(i, l(r.jv()).Uc())), this.T_() && (n = Math.max(n, l(r.Rv()).Uc())), t += r.Vo()
            }
            var e = this.$s, u = this.zn, a = Math.max(e - i - n, 0), o = this.Si.timeScale.visible ? this.p_.r_() : 0;
            o % 2 && (o += 1);
            for (var f = 0 + o, c = u < f ? 0 : u - f, v = c / t, _ = 0, d = 0; d < this.f_.length; ++d) {
                (r = this.f_[d]).gv(this.ri.El()[d]);
                var w, M = 0;
                M = d === this.f_.length - 1 ? c - _ : Math.round(r.Vo() * v), _ += w = Math.max(M, 2), r.Hc(new Zi(a, w)), this.C_() && r.Av(i, "left"), this.T_() && r.Av(n, "right"), r.Kc() && this.ri.Vl(r.Kc(), w)
            }
            this.p_.s_(new Zi(a, o), i, n), this.ri.Cr(a), this.v_ !== i && (this.v_ = i), this.__ !== n && (this.__ = n)
        }, t.prototype.m_ = function (t) {
            var i = t.deltaX / 100, n = -t.deltaY / 100;
            if (0 !== i && this.Si.handleScroll.mouseWheel || 0 !== n && this.Si.handleScale.mouseWheel) {
                switch (t.cancelable && t.preventDefault(), t.deltaMode) {
                    case t.DOM_DELTA_PAGE:
                        i *= 120, n *= 120;
                        break;
                    case t.DOM_DELTA_LINE:
                        i *= 32, n *= 32
                }
                if (0 !== n && this.Si.handleScale.mouseWheel) {
                    var h = Math.sign(n) * Math.min(1, Math.abs(n)),
                        s = t.clientX - this.Jv.getBoundingClientRect().left;
                    this.vt().Fl(s, h)
                }
                0 !== i && this.Si.handleScroll.mouseWheel && this.vt().Il(-80 * i)
            }
        }, t.prototype.S_ = function (t) {
            var i = t.Ce();
            if (3 === i && this.B_(), 3 === i || 2 === i) {
                for (var n = this.ri.El(), h = 0; h < n.length; h++) t.Te(h).wh && n[h].Go();
                for (var s = t.Oe(), r = 0, e = s; r < e.length; r++) {
                    var u = e[r];
                    this.Ve(u)
                }
                s.length > 0 && (this.ri.zr(), this.ri._o(), this.ri.Pr()), this.p_.O()
            }
            this.$c(t)
        }, t.prototype.Ve = function (t) {
            var i = this.ri.U();
            switch (t.Le) {
                case 0:
                    i.Gr();
                    break;
                case 1:
                    i.Qr(t.J);
                    break;
                case 2:
                    i.dr(t.J);
                    break;
                case 3:
                    i.wr(t.J);
                    break;
                case 4:
                    i.jr()
            }
        }, t.prototype.wl = function (t) {
            var i = this;
            null !== this.d_ ? this.d_.wn(t) : this.d_ = t, this.w_ || (this.w_ = !0, this.c_ = window.requestAnimationFrame((function () {
                i.w_ = !1, i.c_ = 0, null !== i.d_ && (i.S_(i.d_), i.d_ = null)
            })))
        }, t.prototype.B_ = function () {
            this.k_()
        }, t.prototype.k_ = function () {
            for (var t = this.ri.El(), i = t.length, n = this.f_.length, h = i; h < n; h++) {
                var s = o(this.f_.pop());
                this.M_.removeChild(s.Fc()), s.Lv().rn(this), s.an()
            }
            for (h = n; h < i; h++) {
                (s = new vn(this, t[h])).Lv().Qi(this.A_.bind(this), this), this.f_.push(s), this.M_.insertBefore(s.Fc(), this.p_.Fc())
            }
            for (h = 0; h < i; h++) {
                var r = t[h];
                (s = this.f_[h]).Kc() !== r ? s.gv(r) : s.mv()
            }
            this.x_(), this.L_()
        }, t.prototype.O_ = function (t, i) {
            var n, h = new Map;
            null !== t && this.ri.V().forEach((function (i) {
                var n = i.ra(t);
                null !== n && h.set(i, n)
            }));
            if (null !== t) {
                var s = this.ri.U().ei(t);
                null !== s && (n = s)
            }
            var r = this.vt().Nl(), e = null !== r && r.Dl instanceof ji ? r.Dl : void 0,
                u = null !== r && void 0 !== r.Nv ? r.Nv.$u : void 0;
            return {P: n, V_: i || void 0, z_: e, P_: h, F_: u}
        }, t.prototype.A_ = function (t, i) {
            var n = this;
            this.ev.en((function () {
                return n.O_(t, i)
            }))
        }, t.prototype.g_ = function (t, i) {
            var n = this;
            this.dl.en((function () {
                return n.O_(t, i)
            }))
        }, t.prototype.x_ = function () {
            var t = this.Si.timeScale.visible ? "" : "none";
            this.p_.Fc().style.display = t
        }, t.prototype.C_ = function () {
            return this.Si.leftPriceScale.visible
        }, t.prototype.T_ = function () {
            return this.Si.rightPriceScale.visible
        }, t
    }();

    function bn(t, i, n) {
        var h = n.value, s = {Is: i, P: t, J: [h, h, h, h]};
        return "color" in n && void 0 !== n.color && (s.ut = n.color), s
    }

    function mn(t, i, n) {
        return {Is: i, P: t, J: [n.open, n.high, n.low, n.close]}
    }

    function gn(t) {
        return void 0 !== t.J
    }

    function pn(t) {
        return function (i, n, h) {
            return void 0 === (s = h).open && void 0 === s.value ? {P: i, Is: n} : t(i, n, h);
            var s
        }
    }

    var yn = {Candlestick: pn(mn), Bar: pn(mn), Area: pn(bn), Histogram: pn(bn), Line: pn(bn)};

    function kn(t) {
        return yn[t]
    }

    function xn(t) {
        return 60 * t * 60 * 1e3
    }

    function Nn(t) {
        return 60 * t * 1e3
    }

    var Sn, Dn = [{I_: 1, Ws: 20}, {I_: (Sn = 1, 1e3 * Sn), Ws: 19}, {I_: Nn(1), Ws: 20}, {I_: Nn(5), Ws: 21}, {
        I_: Nn(30),
        Ws: 22
    }, {I_: xn(1), Ws: 30}, {I_: xn(3), Ws: 31}, {I_: xn(6), Ws: 32}, {I_: xn(12), Ws: 33}];

    function Cn(t, i) {
        if (null !== i) {
            var n = new Date(1e3 * i), h = new Date(1e3 * t);
            if (h.getUTCFullYear() !== n.getUTCFullYear()) return 70;
            if (h.getUTCMonth() !== n.getUTCMonth()) return 60;
            if (h.getUTCDate() !== n.getUTCDate()) return 50;
            for (var s = Dn.length - 1; s >= 0; --s) if (Math.floor(n.getTime() / Dn[s].I_) !== Math.floor(h.getTime() / Dn[s].I_)) return Dn[s].Ws
        }
        return 20
    }

    function Tn(t) {
        if (!Bt(t)) throw new Error("time must be of type BusinessDay");
        var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
        return {Ts: Math.round(i.getTime() / 1e3), Cs: t}
    }

    function En(t) {
        if (!At(t)) throw new Error("time must be of type isUTCTimestamp");
        return {Ts: t}
    }

    function Ln(t) {
        return 0 === t.length ? null : Bt(t[0].time) ? Tn : En
    }

    function Bn(t) {
        return At(t) ? En(t) : Bt(t) ? Tn(t) : Tn(An(t))
    }

    function An(t) {
        var i = new Date(t);
        if (isNaN(i.getTime())) throw new Error("Invalid date string=" + t + ", expected format=yyyy-mm-dd");
        return {day: i.getUTCDate(), month: i.getUTCMonth() + 1, year: i.getUTCFullYear()}
    }

    function On(t) {
        d(t.time) && (t.time = An(t.time))
    }

    function Vn(t) {
        return {Is: 0, W_: new Map, jh: t}
    }

    var zn = function () {
        function t() {
            this.j_ = new Map, this.R_ = new Map, this.U_ = new Map, this.q_ = []
        }

        return t.prototype.an = function () {
            this.j_.clear(), this.R_.clear(), this.U_.clear(), this.q_ = []
        }, t.prototype.H_ = function (t, i) {
            var n = this;
            this.U_.has(t) && this.j_.forEach((function (i) {
                return i.W_.delete(t)
            }));
            var h = [];
            if (0 !== i.length) {
                !function (t) {
                    t.forEach(On)
                }(i);
                var s = l(Ln(i)), r = kn(t.ga());
                h = i.map((function (i) {
                    var h = s(i.time), e = n.j_.get(h.Ts);
                    void 0 === e && (e = Vn(h), n.j_.set(h.Ts, e));
                    var u = r(h, e.Is, i);
                    return e.W_.set(t, u), u
                }))
            }
            return this.Y_(), this.K_(t, h), this.X_(t)
        }, t.prototype.Gl = function (t) {
            return this.H_(t, [])
        }, t.prototype.Z_ = function (t, i) {
            On(i);
            var n = l(Ln([i]))(i.time), h = this.U_.get(t);
            if (void 0 !== h && n.Ts < h.Ts) throw new Error("Cannot update oldest data, last time=" + h.Ts + ", new time=" + n.Ts);
            var s = this.j_.get(n.Ts), r = void 0 === s;
            void 0 === s && (s = Vn(n), this.j_.set(n.Ts, s));
            var e = kn(t.ga())(n, s.Is, i);
            s.W_.set(t, e);
            var u = this.J_(t, e);
            if (!r) {
                var a = new Map;
                return null !== u && a.set(t, u), {G_: a, U: {Br: this.Q_()}}
            }
            return this.X_(t)
        }, t.prototype.J_ = function (t, i) {
            var n = this.R_.get(t);
            void 0 === n && (n = [], this.R_.set(t, n));
            var h = 0 !== n.length ? n[n.length - 1] : null, s = null;
            return null === h || i.P.Ts > h.P.Ts ? gn(i) && (n.push(i), s = {
                yl: !1,
                td: [i]
            }) : gn(i) ? (n[n.length - 1] = i, s = {yl: !1, td: [i]}) : (n.splice(-1, 1), s = {
                yl: !0,
                td: n
            }), this.U_.set(t, i.P), s
        }, t.prototype.K_ = function (t, i) {
            0 !== i.length ? (this.R_.set(t, i.filter(gn)), this.U_.set(t, i[i.length - 1].P)) : (this.R_.delete(t), this.U_.delete(t))
        }, t.prototype.Y_ = function () {
            var t = new Map;
            this.j_.forEach((function (i, n) {
                i.W_.size > 0 && t.set(n, i)
            })), this.j_ = t
        }, t.prototype.nd = function (t) {
            for (var i = -1, n = 0; n < this.q_.length && n < t.length; ++n) {
                var h = this.q_[n], s = t[n];
                if (h.P.Ts !== s.P.Ts) {
                    i = n;
                    break
                }
                s.Fs = h.Fs
            }
            if (-1 === i && this.q_.length !== t.length && (i = Math.min(this.q_.length, t.length)), -1 === i) return -1;
            var r = function (i) {
                var n = o(e.j_.get(t[i].P.Ts));
                n.Is = i, n.W_.forEach((function (t) {
                    t.Is = i
                }))
            }, e = this;
            for (n = i; n < t.length; ++n) r(n);
            return function (t, i) {
                void 0 === i && (i = 0);
                for (var n = 0 === i || 0 === t.length ? null : t[i - 1].P.Ts, h = 0, s = i; s < t.length; ++s) {
                    var r = t[s];
                    r.Fs = Cn(r.P.Ts, n), h += r.P.Ts - (n || r.P.Ts), n = r.P.Ts
                }
                if (0 === i && t.length > 1) {
                    var e = Math.ceil(h / (t.length - 1)), u = t[0].P.Ts - e;
                    t[0].Fs = Cn(t[0].P.Ts, u)
                }
            }(t, i), this.q_ = t, i
        }, t.prototype.Q_ = function () {
            var t = 0;
            return this.R_.forEach((function (i) {
                0 !== i.length && (t = Math.max(t, i[i.length - 1].Is))
            })), t
        }, t.prototype.X_ = function (t) {
            var i = Array.from(this.j_.values()).map((function (t) {
                return {Fs: 0, P: t.jh}
            }));
            i.sort((function (t, i) {
                return t.P.Ts - i.P.Ts
            }));
            var n = this.nd(i), h = {G_: new Map, U: {Br: this.Q_()}};
            if (-1 !== n) this.R_.forEach((function (t, i) {
                h.G_.set(i, {td: t, yl: !0})
            })), h.U.hd = this.q_; else {
                var s = this.R_.get(t);
                h.G_.set(t, {td: s || [], yl: !0})
            }
            return h
        }, t
    }();
    var Pn = {color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, axisLabelVisible: !0, title: ""},
        Fn = function () {
            function t(t) {
                this.da = t
            }

            return t.prototype.applyOptions = function (t) {
                this.da.eh(t)
            }, t.prototype.options = function () {
                return this.da.I()
            }, t.prototype.sd = function () {
                return this.da
            }, t
        }();

    function In(t) {
        var i = t.overlay, n = function (t, i) {
            var n = {};
            for (var h in t) Object.prototype.hasOwnProperty.call(t, h) && i.indexOf(h) < 0 && (n[h] = t[h]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (h = Object.getOwnPropertySymbols(t); s < h.length; s++) i.indexOf(h[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, h[s]) && (n[h[s]] = t[h[s]])
            }
            return n
        }(t, ["overlay"]);
        return i && (n.priceScaleId = ""), n
    }

    var Wn = function () {
        function t(t, i, n) {
            this.Ke = t, this.rd = i, this.ed = n
        }

        return t.prototype.priceFormatter = function () {
            return this.Ke.Xh()
        }, t.prototype.G_ = function () {
            return this.Ke
        }, t.prototype.priceToCoordinate = function (t) {
            var i = this.Ke.H();
            return null === i ? null : this.Ke.Z().X(t, i.J)
        }, t.prototype.coordinateToPrice = function (t) {
            var i = this.Ke.H();
            return null === i ? null : this.Ke.Z().Ei(t, i.J)
        }, t.prototype.barsInLogicalRange = function (t) {
            if (null === t) return null;
            var i = new Et(new St(t.from, t.to)).Hs(), n = this.Ke.Yi();
            if (n.ii()) return null;
            var h = n.za(i.es(), 1), s = n.za(i.us(), -1), r = l(n.Aa()), e = l(n.Hi());
            if (null !== h && null !== s && h.Is > s.Is) return {barsBefore: t.from - r, barsAfter: e - t.to};
            var u = {
                barsBefore: null === h || h.Is === r ? t.from - r : h.Is - r,
                barsAfter: null === s || s.Is === e ? e - t.to : e - s.Is
            };
            return null !== h && null !== s && (u.from = h.P.Cs || h.P.Ts, u.to = s.P.Cs || s.P.Ts), u
        }, t.prototype.setData = function (t) {
            this.Ke.ga(), this.rd.ud(this.Ke, t)
        }, t.prototype.update = function (t) {
            this.Ke.ga(), this.rd.fo(this.Ke, t)
        }, t.prototype.setMarkers = function (t) {
            var i = t.map((function (t) {
                return e(e({}, t), {time: Bn(t.time)})
            }));
            this.Ke.do(i)
        }, t.prototype.applyOptions = function (t) {
            var i = In(t);
            this.Ke.eh(i)
        }, t.prototype.options = function () {
            return M(this.Ke.I())
        }, t.prototype.priceScale = function () {
            return this.ed.priceScale(this.Ke.Z().rh())
        }, t.prototype.createPriceLine = function (t) {
            var i = c(M(Pn), t), n = this.Ke.wo(i);
            return new Fn(n)
        }, t.prototype.removePriceLine = function (t) {
            this.Ke.Mo(t.sd())
        }, t
    }(), jn = function (t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this
        }

        return r(i, t), i.prototype.applyOptions = function (i) {
            bt(i), t.prototype.applyOptions.call(this, i)
        }, i
    }(Wn), Rn = {
        autoScale: !0,
        mode: 0,
        invertScale: !1,
        alignLabels: !0,
        borderVisible: !0,
        borderColor: "#2B2B43",
        entireTextOnly: !1,
        visible: !1,
        drawTicks: !0,
        scaleMargins: {bottom: .1, top: .2}
    }, Un = {
        color: "rgba(0, 0, 0, 0)",
        visible: !1,
        fontSize: 48,
        fontFamily: Ot,
        fontStyle: "",
        text: "",
        horzAlign: "center",
        vertAlign: "center"
    }, qn = {
        width: 0,
        height: 0,
        layout: {backgroundColor: "#FFFFFF", textColor: "#191919", fontSize: 11, fontFamily: Ot},
        crosshair: {
            vertLine: {
                color: "#758696",
                width: 1,
                style: 3,
                visible: !0,
                labelVisible: !0,
                labelBackgroundColor: "#4c525e"
            },
            horzLine: {
                color: "#758696",
                width: 1,
                style: 3,
                visible: !0,
                labelVisible: !0,
                labelBackgroundColor: "#4c525e"
            },
            mode: 1
        },
        grid: {
            vertLines: {color: "#D6DCDE", style: 0, visible: !0},
            horzLines: {color: "#D6DCDE", style: 0, visible: !0}
        },
        overlayPriceScales: e({}, Rn),
        leftPriceScale: e(e({}, Rn), {visible: !1}),
        rightPriceScale: e(e({}, Rn), {visible: !0}),
        timeScale: {
            rightOffset: 0,
            barSpacing: 6,
            fixLeftEdge: !1,
            lockVisibleTimeRangeOnResize: !1,
            rightBarStaysOnScroll: !1,
            borderVisible: !0,
            borderColor: "#2B2B43",
            visible: !0,
            timeVisible: !1,
            secondsVisible: !0
        },
        watermark: Un,
        localization: {locale: nn ? navigator.language : "", dateFormat: "dd MMM 'yy"},
        handleScroll: {mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0},
        handleScale: {axisPressedMouseMove: {time: !0, price: !0}, axisDoubleClickReset: !0, mouseWheel: !0, pinch: !0}
    }, Hn = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        wickVisible: !0,
        borderVisible: !0,
        borderColor: "#378658",
        borderUpColor: "#26a69a",
        borderDownColor: "#ef5350",
        wickColor: "#737375",
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350"
    }, Yn = {upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0}, Kn = {
        color: "#2196f3",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4
    }, $n = {
        topColor: "rgba( 46, 220, 135, 0.4)",
        bottomColor: "rgba( 40, 221, 100, 0)",
        lineColor: "#33D778",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4
    }, Xn = {color: "#26a69a", base: 0}, Zn = {
        title: "",
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: "",
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: "#B2B5BE",
        baseLineStyle: 0,
        priceFormat: {type: "price", precision: 2, minMove: .01}
    }, Jn = function () {
        function t(t, i) {
            this.ad = t, this.od = i
        }

        return t.prototype.applyOptions = function (t) {
            this.ad.vt().Cl(this.od, t)
        }, t.prototype.options = function () {
            return this.Qt().I()
        }, t.prototype.width = function () {
            return Pt(this.od) ? this.ad.E_("left" === this.od ? "left" : "right") : 0
        }, t.prototype.Qt = function () {
            return l(this.ad.vt().Tl(this.od)).Z
        }, t
    }(), Gn = function () {
        function t(t) {
            this.ld = new Z, this.nr = new Z, this.ri = t, this.Do().$r().Qi(this.fd.bind(this)), this.Do().Xr().Qi(this.vd.bind(this))
        }

        return t.prototype.an = function () {
            this.Do().$r().rn(this), this.Do().Xr().rn(this), this.ld.an()
        }, t.prototype.scrollPosition = function () {
            return this.Do().Ir()
        }, t.prototype.scrollToPosition = function (t, i) {
            i ? this.Do().Kr(t, 1e3) : this.ri.wr(t)
        }, t.prototype.scrollToRealTime = function () {
            this.Do().Yr()
        }, t.prototype.getVisibleRange = function () {
            var t, i, n = this.Do().pr();
            return null === n ? null : {
                from: null !== (t = n.from.Cs) && void 0 !== t ? t : n.from.Ts,
                to: null !== (i = n.to.Cs) && void 0 !== i ? i : n.to.Ts
            }
        }, t.prototype.setVisibleRange = function (t) {
            var i = {from: Bn(t.from), to: Bn(t.to)}, n = this.Do().Sr(i);
            this.ri.Ql(n)
        }, t.prototype.getVisibleLogicalRange = function () {
            var t = this.Do().gr();
            return null === t ? null : {from: t.es(), to: t.us()}
        }, t.prototype.setVisibleLogicalRange = function (t) {
            a(t.from <= t.to, "The from index cannot be after the to index."), this.ri.Ql(t)
        }, t.prototype.resetTimeScale = function () {
            this.ri.Ae()
        }, t.prototype.fitContent = function () {
            this.ri.Gr()
        }, t.prototype.logicalToCoordinate = function (t) {
            var i = this.ri.U();
            return i.ii() ? null : i.G(t)
        }, t.prototype.coordinateToLogical = function (t) {
            var i = this.ri.U();
            return i.ii() ? null : i.Or(t)
        }, t.prototype.timeToCoordinate = function (t) {
            var i = Bn(t), n = this.ri.U(), h = n.Mr(i, !1);
            return null === h ? null : n.G(h)
        }, t.prototype.coordinateToTime = function (t) {
            var i, n = this.ri.U(), h = n.Or(t), s = n.ei(h);
            return null === s ? null : null !== (i = s.Cs) && void 0 !== i ? i : s.Ts
        }, t.prototype.subscribeVisibleTimeRangeChange = function (t) {
            this.ld.Qi(t)
        }, t.prototype.unsubscribeVisibleTimeRangeChange = function (t) {
            this.ld.sn(t)
        }, t.prototype.subscribeVisibleLogicalRangeChange = function (t) {
            this.nr.Qi(t)
        }, t.prototype.unsubscribeVisibleLogicalRangeChange = function (t) {
            this.nr.sn(t)
        }, t.prototype.applyOptions = function (t) {
            this.Do().eh(t)
        }, t.prototype.options = function () {
            return M(this.Do().I())
        }, t.prototype.Do = function () {
            return this.ri.U()
        }, t.prototype.fd = function () {
            this.ld.un() && this.ld.en(this.getVisibleRange())
        }, t.prototype.vd = function () {
            this.nr.un() && this.nr.en(this.getVisibleLogicalRange())
        }, t
    }();

    function Qn(t) {
        if (void 0 !== t && "custom" !== t.type) {
            var i = t;
            void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
                if (t >= 1) return 0;
                for (var i = 0; i < 8; i++) {
                    var n = Math.round(t);
                    if (Math.abs(n - t) < 1e-8) return i;
                    t *= 10
                }
                return i
            }(i.minMove))
        }
    }

    function th(t) {
        return function (t) {
            if (w(t.handleScale)) {
                var i = t.handleScale;
                t.handleScale = {
                    axisDoubleClickReset: i,
                    axisPressedMouseMove: {time: i, price: i},
                    mouseWheel: i,
                    pinch: i
                }
            } else if (void 0 !== t.handleScale && w(t.handleScale.axisPressedMouseMove)) {
                var n = t.handleScale.axisPressedMouseMove;
                t.handleScale.axisPressedMouseMove = {time: n, price: n}
            }
            var h = t.handleScroll;
            w(h) && (t.handleScroll = {horzTouchDrag: h, vertTouchDrag: h, mouseWheel: h, pressedMouseMove: h})
        }(t), function (t) {
            if (t.priceScale) {
                t.leftPriceScale = t.leftPriceScale || {}, t.rightPriceScale = t.rightPriceScale || {};
                var i = t.priceScale.position;
                delete t.priceScale.position, t.leftPriceScale = c(t.leftPriceScale, t.priceScale), t.rightPriceScale = c(t.rightPriceScale, t.priceScale), "left" === i && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === i && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === i && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1), t.overlayPriceScales = t.overlayPriceScales || {}, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins)
            }
        }(t), t
    }

    var ih = function () {
        function t(t, i) {
            var n = this;
            this._d = new zn, this.dd = new Map, this.wd = new Map, this.Md = new Z, this.bd = new Z;
            var h = void 0 === i ? M(qn) : c(M(qn), th(i));
            this.ad = new Mn(t, h), this.ad.Lv().Qi((function (t) {
                n.Md.un() && n.Md.en(n.md(t()))
            }), this), this.ad.Ol().Qi((function (t) {
                n.bd.un() && n.bd.en(n.md(t()))
            }), this);
            var s = this.ad.vt();
            this.gd = new Gn(s)
        }

        return t.prototype.remove = function () {
            this.ad.Lv().rn(this), this.ad.Ol().rn(this), this.gd.an(), this.ad.an(), this.dd.clear(), this.wd.clear(), this.Md.an(), this.bd.an(), this._d.an()
        }, t.prototype.resize = function (t, i, n) {
            this.ad.y_(t, i, n)
        }, t.prototype.addAreaSeries = function (t) {
            void 0 === t && (t = {}), Qn((t = In(t)).priceFormat);
            var i = c(M(Zn), $n, t), n = this.ad.vt().Zl("Area", i), h = new Wn(n, this, this);
            return this.dd.set(h, n), this.wd.set(n, h), h
        }, t.prototype.addBarSeries = function (t) {
            void 0 === t && (t = {}), Qn((t = In(t)).priceFormat);
            var i = c(M(Zn), Yn, t), n = this.ad.vt().Zl("Bar", i), h = new Wn(n, this, this);
            return this.dd.set(h, n), this.wd.set(n, h), h
        }, t.prototype.addCandlestickSeries = function (t) {
            void 0 === t && (t = {}), bt(t = In(t)), Qn(t.priceFormat);
            var i = c(M(Zn), Hn, t), n = this.ad.vt().Zl("Candlestick", i), h = new jn(n, this, this);
            return this.dd.set(h, n), this.wd.set(n, h), h
        }, t.prototype.addHistogramSeries = function (t) {
            void 0 === t && (t = {}), Qn((t = In(t)).priceFormat);
            var i = c(M(Zn), Xn, t), n = this.ad.vt().Zl("Histogram", i), h = new Wn(n, this, this);
            return this.dd.set(h, n), this.wd.set(n, h), h
        }, t.prototype.addLineSeries = function (t) {
            void 0 === t && (t = {}), Qn((t = In(t)).priceFormat);
            var i = c(M(Zn), Kn, t), n = this.ad.vt().Zl("Line", i), h = new Wn(n, this, this);
            return this.dd.set(h, n), this.wd.set(n, h), h
        }, t.prototype.removeSeries = function (t) {
            var i = o(this.dd.get(t)), n = this._d.Gl(i);
            this.ad.vt().Gl(i), this.pd(n), this.dd.delete(t), this.wd.delete(i)
        }, t.prototype.ud = function (t, i) {
            this.pd(this._d.H_(t, i))
        }, t.prototype.fo = function (t, i) {
            this.pd(this._d.Z_(t, i))
        }, t.prototype.subscribeClick = function (t) {
            this.Md.Qi(t)
        }, t.prototype.unsubscribeClick = function (t) {
            this.Md.sn(t)
        }, t.prototype.subscribeCrosshairMove = function (t) {
            this.bd.Qi(t)
        }, t.prototype.unsubscribeCrosshairMove = function (t) {
            this.bd.sn(t)
        }, t.prototype.priceScale = function (t) {
            return void 0 === t && (t = this.ad.vt().tf()), new Jn(this.ad, t)
        }, t.prototype.timeScale = function () {
            return this.gd
        }, t.prototype.applyOptions = function (t) {
            this.ad.eh(th(t))
        }, t.prototype.options = function () {
            return this.ad.I()
        }, t.prototype.takeScreenshot = function () {
            return this.ad.D_()
        }, t.prototype.pd = function (t) {
            var i = this.ad.vt();
            i.$l(t.U.Br, t.U.hd), t.G_.forEach((function (t, i) {
                return i.fo(t.td, t.yl)
            })), i.zr()
        }, t.prototype.yd = function (t) {
            return o(this.wd.get(t))
        }, t.prototype.md = function (t) {
            var i = this, n = new Map;
            t.P_.forEach((function (t, h) {
                n.set(i.yd(h), t)
            }));
            var h = void 0 === t.z_ ? void 0 : this.yd(t.z_);
            return {
                time: t.P && (t.P.Cs || t.P.Ts),
                point: t.V_,
                hoveredSeries: h,
                hoveredMarkerId: t.F_,
                seriesPrices: n
            }
        }, t
    }();
    var nh = Object.freeze({
        __proto__: null, version: function () {
            return "3.2.0"
        }, get LineStyle() {
            return i
        }, get LineType() {
            return t
        }, get CrosshairMode() {
            return P
        }, get PriceScaleMode() {
            return lt
        }, get PriceLineSource() {
            return _t
        }, get TickMarkType() {
            return Ct
        }, isBusinessDay: Bt, isUTCTimestamp: At, createChart: function (t, i) {
            var n;
            if (d(t)) {
                var h = document.getElementById(t);
                a(null !== h, "Cannot find element in DOM with id=" + t), n = h
            } else n = t;
            return new ih(n, i)
        }
    });
    window.LightweightCharts = nh
}();

const chart = LightweightCharts.createChart(document.body, {width: 400, height: 300});
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    {time: '2019-04-11', value: 80.01},
    {time: '2019-04-12', value: 96.63},
    {time: '2019-04-13', value: 76.64},
    {time: '2019-04-14', value: 81.89},
    {time: '2019-04-15', value: 74.43},
    {time: '2019-04-16', value: 80.01},
    {time: '2019-04-17', value: 96.63},
    {time: '2019-04-18', value: 76.64},
    {time: '2019-04-19', value: 81.89},
    {time: '2019-04-20', value: 74.43},
    {time: '2019-04-21', value: 74.43},
    {time: '2019-04-22', value: 74.43},
    {time: '2019-04-23', value: 74.43},
    {time: '2019-04-24', value: 74.43},
    {time: '2019-04-25', value: 74.43},
    {time: '2019-04-26', value: 74.43},
]);
const chartNew = LightweightCharts.createChart(document.body, {width: 400, height: 300});
const candlestickSeries = chartNew.addCandlestickSeries();

// set data
candlestickSeries.setData([
    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-21', open: 108.19, high: 118.43, low: 74.22, close: 75.16 },
    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
]);