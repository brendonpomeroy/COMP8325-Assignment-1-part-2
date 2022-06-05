/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if (!window.Typekit)
    window.Typekit = {};
window.Typekit.config = {
    "c": [".tk-alternate-gothic-no-2-d", "\"alternate-gothic-no-2-d\",sans-serif", ".tk-utopia-std", "\"utopia-std\",sans-serif", ".tk-alternate-gothic-no-1-d", "\"alternate-gothic-no-1-d\",sans-serif"],
    "f": "//use.typekit.com/c/40f316/1w;alternate-gothic-no-1-d,2,TV3:F:n4;alternate-gothic-no-2-d,2,TV4:F:n4;utopia-std,2,Xdm:F:i4,Xdl:F:i7,Xdn:F:n4,Xdk:F:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a99f4195b2a62befe589875b2e434a7d906c8b5cdd180d4121dc194c38d7e8669f7003f5f88b68b6fc40fd2ed94daf7fcaec3609a31517e7c78a8dd756d423890a97f70214c82db17f7fed88741bd168ab7d86212681ef305914138f896468f562dedd9bb9148e6b878063e763ff407f0a398f6cad610990bfbe52af437774cf8e8152cc0c5b7036421daa101b6b938a1fec51fd81ffa20523aec56209161e014615459dda3c2a42bfd57be53d676c7622da2c29fc9b7158350c5318905eacadeb7231296f54074e2252213409e6aa8f405bcc6c83cc0629a3a99f9a2110239cf3400bbe52ab5e37733091906de784c35a900a272b4c18d91ee7f57e6d3de72b13201a96dc4aeecc8e52146078a0d37cb993f2b60fd75c2b1ee4ca81615ea2000a75d9a7abae72a423a5d733d8f6a54484c32842d587336e2c4",
    "fn": ["alternate-gothic-no-1-d", ["n4"], "alternate-gothic-no-2-d", ["n4"], "utopia-std", ["i4", "i7", "n4", "n7"]],
    "k": "//use.typekit.com/{id}.js",
    "p": "//p.typekit.net/p.gif?s=1&k=cnb8lmq&ht=tk&h={host}&f=10327.13379.13381.13378.13380.10326&a=512880&_={_}",
    "w": "cnb8lmq"
};
/*{"k":"1.1.0","created":"2012-08-20T20:46:29Z"}*/
;
(function(window, document, undefined) {
    var g = void 0, k=!0, l = null, m=!1;
    function n(a) {
        return function() {
            return this[a]
        }
    }
    var o;
    function p(a, c, b) {
        var e = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2): [];
        return function() {
            e.push.apply(e, arguments);
            return c.apply(a, e)
        }
    }
    function q(a) {
        this.n = a;
        this.C = g
    }
    q.prototype.createElement = function(a, c, b) {
        a = this.n.createElement(a);
        if (c)
            for (var e in c)
                c.hasOwnProperty(e) && ("style" == e ? this.za(a, c[e]) : a.setAttribute(e, c[e]));
        b && a.appendChild(this.n.createTextNode(b));
        return a
    };
    function r(a, c, b) {
        a = a.n.getElementsByTagName(c)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(b, a.lastChild)
    }
    function s(a) {
        function c() {
            document.body ? a() : setTimeout(c, 0)
        }
        c()
    }
    function t(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }
    function u(a, c) {
        for (var b = a.className.split(/\s+/), e = 0, d = b.length; e < d; e++)
            if (b[e] == c)
                return;
        b.push(c);
        a.className = b.join(" ").replace(/^\s+/, "")
    }
    function v(a, c) {
        for (var b = a.className.split(/\s+/), e = [], d = 0, f = b.length; d < f; d++)
            b[d] != c && e.push(b[d]);
        a.className = e.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function aa(a, c) {
        for (var b = a.className.split(/\s+/), e = 0, d = b.length; e < d; e++)
            if (b[e] == c)
                return k;
        return m
    }
    q.prototype.za = function(a, c) {
        this.ba() ? a.setAttribute("style", c) : a.style.cssText = c
    };
    q.prototype.ba = function() {
        if (this.C === g) {
            var a = this.n.createElement("p");
            a.innerHTML = '<a style="top:1px;">w</a>';
            this.C = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return this.C
    };
    function w(a, c, b, e, d, f, h) {
        this.da = a;
        this.Ya = c;
        this.Ga = b;
        this.Fa = e;
        this.Ta = d;
        this.Sa = f;
        this.Ea = h
    }
    o = w.prototype;
    o.getName = n("da");
    o.getVersion = n("Ya");
    o.getEngine = n("Ga");
    o.getEngineVersion = n("Fa");
    o.getPlatform = n("Ta");
    o.getPlatformVersion = n("Sa");
    o.getDocumentMode = n("Ea");
    function ba(a, c) {
        this.j = a;
        this.A = c
    }
    var ca = new w("Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", g);
    ba.prototype.parse = function() {
        var a;
        if ( - 1 != this.j.indexOf("MSIE")) {
            a = x(this);
            var c = y(this), b = z(this.j, /(MSIE [\d\w\.]+)/, 1);
            if ("" != b) {
                var e = b.split(" "), b = e[0], e = e[1];
                A(e);
                A(c);
                a = new w(b, e, b, e, a, c, B(this.A))
            } else 
                a = new w("MSIE", "Unknown", "MSIE", "Unknown", a, c, B(this.A))
        } else if ( - 1 != this.j.indexOf("Opera"))
            a: if (c = a = "Unknown", b = z(this.j, /(Presto\/[\d\w\.]+)/, 1), "" != b ? (c = b.split("/"), a = c[0], c = c[1]) : ( - 1 != this.j.indexOf("Gecko") && (a = "Gecko"), b = z(this.j, /rv:([^\)]+)/, 1), "" != b && (c = b)), - 1 != this.j.indexOf("Opera Mini/"))
            b =
            z(this.j, /Opera Mini\/([\d\.]+)/, 1), "" == b && (b = "Unknown"), a = new w("OperaMini", b, a, c, x(this), y(this), B(this.A));
        else {
            if ( - 1 != this.j.indexOf("Version/") && (b = z(this.j, /Version\/([\d\.]+)/, 1), "" != b)) {
                a = new w("Opera", b, a, c, x(this), y(this), B(this.A), 10 <= A(b));
                break a
            }
            b = z(this.j, /Opera[\/ ]([\d\.]+)/, 1);
            a = "" != b ? new w("Opera", b, a, c, x(this), y(this), B(this.A), 10 <= A(b)) : new w("Opera", "Unknown", a, c, x(this), y(this), B(this.A))
        } else if ( - 1 != this.j.indexOf("AppleWebKit")) {
            a = x(this);
            c = y(this);
            b = z(this.j, /AppleWebKit\/([\d\.\+]+)/,
            1);
            "" == b && (b = "Unknown");
            e = "Unknown";
            - 1 != this.j.indexOf("Chrome")||-1 != this.j.indexOf("CrMo")||-1 != this.j.indexOf("CriOS") ? e = "Chrome" : - 1 != this.j.indexOf("Safari") ? e = "Safari" : - 1 != this.j.indexOf("AdobeAIR") && (e = "AdobeAIR");
            var d = "Unknown";
            - 1 != this.j.indexOf("Version/") ? d = z(this.j, /Version\/([\d\.\w]+)/, 1) : "Chrome" == e ? d = z(this.j, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : "AdobeAIR" == e && (d = z(this.j, /AdobeAIR\/([\d\.]+)/, 1));
            "AdobeAIR" == e ? (z(d, /\d+\.(\d+)/, 1), 2 < A(d) || A(d)) : (z(b, /\d+\.(\d+)/, 1), 526 <= A(b) || A(b));
            a = new w(e, d, "AppleWebKit", b, a, c, B(this.A))
        } else if ( - 1 != this.j.indexOf("Gecko")) {
            c = a = "Unknown";
            e = m;
            - 1 != this.j.indexOf("Firefox") ? (a = "Firefox", b = z(this.j, /Firefox\/([\d\w\.]+)/, 1), "" != b && (e = z(b, /\d+\.(\d+)/, 1), c = b, e = "" != b && 3 <= A(b) && 5 <= parseInt(e, 10))) : - 1 != this.j.indexOf("Mozilla") && (a = "Mozilla");
            b = z(this.j, /rv:([^\)]+)/, 1);
            if ("" == b)
                b = "Unknown";
            else if (!e) {
                var e = A(b), d = parseInt(z(b, /\d+\.(\d+)/, 1), 10), f = parseInt(z(b, /\d+\.\d+\.(\d+)/, 1), 10);
                1 < e || 1 == e && 9 < d || 1 == e && 9 == d && 2 <= f || b.match(/1\.9\.1b[123]/) !=
                l || b.match(/1\.9\.1\.[\d\.]+/)
            }
            a = new w(a, c, "Gecko", b, x(this), y(this), B(this.A))
        } else 
            a = ca;
        return a
    };
    function x(a) {
        var c = z(a.j, /(iPod|iPad|iPhone|Android|Windows Phone)/, 1);
        if ("" != c)
            return c;
        a = z(a.j, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }
    function y(a) {
        var c = z(a.j, /(OS X|Windows NT|Android|CrOS) ([^;)]+)/, 2);
        if (c || (c = z(a.j, /Windows Phone( OS)? ([^;)]+)/, 2)))
            return c;
        if (c = z(a.j, /(iPhone )?OS ([\d_]+)/, 2))
            return c;
        return (a = z(a.j, /Linux ([i\d]+)/, 1)) ? a : "Unknown"
    }
    function A(a) {
        a = z(a, /(\d+)/, 1);
        return "" != a ? parseInt(a, 10) : - 1
    }
    function z(a, c, b) {
        return (a = a.match(c)) && a[b] ? a[b] : ""
    }
    function B(a) {
        if (a.documentMode)
            return a.documentMode
    }
    function da(a, c, b) {
        this.l = a;
        this.o = c;
        this.ia = b;
        this.s = "wf";
        this.q = new ga("-")
    }
    function ha(a) {
        v(a.o, a.q.m(a.s, "loading"));
        aa(a.o, a.q.m(a.s, "active")) || u(a.o, a.q.m(a.s, "inactive"));
        D(a, "inactive")
    }
    function D(a, c, b, e) {
        if (a.ia[c])
            a.ia[c](b, e)
    }
    function E(a, c, b, e, d) {
        this.l = a;
        this.H = c;
        this.J = b;
        this.B = e;
        this.P = d;
        this.W = 0;
        this.Aa = this.qa = m
    }
    E.prototype.watch = function(a, c, b, e, d) {
        for (var f = a.length, h = 0; h < f; h++) {
            var i = a[h];
            c[i] || (c[i] = ["n4"]);
            this.W += c[i].length
        }
        d && (this.qa = d);
        for (h = 0; h < f; h++)
            for (var i = a[h], d = c[i], j = b[i], C = 0, Ia = d.length; C < Ia; C++) {
                var ea = d[C], G = this.H, O = i, fa = ea;
                u(G.o, G.q.m(G.s, O, fa, "loading"));
                D(G, "fontloading", O, fa);
                G = p(this, this.Ha);
                O = p(this, this.Ia);
                (new e(G, O, this.l, this.J, this.B, this.P, i, ea, j)).start()
            }
    };
    E.prototype.Ha = function(a, c) {
        var b = this.H;
        v(b.o, b.q.m(b.s, a, c, "loading"));
        v(b.o, b.q.m(b.s, a, c, "inactive"));
        u(b.o, b.q.m(b.s, a, c, "active"));
        D(b, "fontactive", a, c);
        this.Aa = k;
        ia(this)
    };
    E.prototype.Ia = function(a, c) {
        var b = this.H;
        v(b.o, b.q.m(b.s, a, c, "loading"));
        aa(b.o, b.q.m(b.s, a, c, "active")) || u(b.o, b.q.m(b.s, a, c, "inactive"));
        D(b, "fontinactive", a, c);
        ia(this)
    };
    function ia(a) {
        0==--a.W && a.qa && (a.Aa ? (a = a.H, v(a.o, a.q.m(a.s, "loading")), v(a.o, a.q.m(a.s, "inactive")), u(a.o, a.q.m(a.s, "active")), D(a, "active")) : ha(a.H))
    }
    function F(a, c, b, e, d, f, h, i, j) {
        this.Da = a;
        this.Na = c;
        this.l = b;
        this.J = e;
        this.B = d;
        this.P = f;
        this.Ra = new ja;
        this.Ka = new ka;
        this.Y = h;
        this.X = i;
        this.Ja = j || "BESbswy";
        this.ta = la(this, "arial,'URW Gothic L',sans-serif");
        this.ua = la(this, "Georgia,'Century Schoolbook L',serif");
        this.oa = this.ta;
        this.pa = this.ua;
        this.ea = H(this, "arial,'URW Gothic L',sans-serif");
        this.fa = H(this, "Georgia,'Century Schoolbook L',serif")
    }
    F.prototype.start = function() {
        this.Wa = this.P();
        this.ja()
    };
    F.prototype.ja = function() {
        var a = this.J.aa(this.ea), c = this.J.aa(this.fa);
        (this.ta != a || this.ua != c) && this.oa == a && this.pa == c ? (a = this.Da, t(this.ea), t(this.fa), a(this.Y, this.X)) : 5E3 <= this.P() - this.Wa ? (a = this.Na, t(this.ea), t(this.fa), a(this.Y, this.X)) : (this.oa = a, this.pa = c, ma(this))
    };
    function ma(a) {
        a.B(function(a, b) {
            return function() {
                b.call(a)
            }
        }(a, a.ja), 25)
    }
    function la(a, c) {
        var b = H(a, c, k), e = a.J.aa(b);
        t(b);
        return e
    }
    function H(a, c, b) {
        c = a.l.createElement("span", {
            style: na(a, c, a.X, b)
        }, a.Ja);
        r(a.l, "body", c);
        return c
    }
    function na(a, c, b, e) {
        b = a.Ka.expand(b);
        return "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:" + (e ? "" : a.Ra.quote(a.Y) + ",") + c + ";" + b
    }
    function ga(a) {
        this.Pa = a || "-"
    }
    ga.prototype.m = function(a) {
        for (var c = [], b = 0; b < arguments.length; b++)
            c.push(arguments[b].replace(/[\W_]+/g, "").toLowerCase());
        return c.join(this.Pa)
    };
    function ja() {
        this.ya = "'"
    }
    ja.prototype.quote = function(a) {
        for (var c = [], a = a.split(/,\s*/), b = 0; b < a.length; b++) {
            var e = a[b].replace(/['"]/g, "");
            - 1 == e.indexOf(" ") ? c.push(e) : c.push(this.ya + e + this.ya)
        }
        return c.join(",")
    };
    function ka() {
        this.wa = oa;
        this.M = pa
    }
    var oa = ["font-style", "font-weight"], pa = {
        "font-style": [["n", "normal"], ["i", "italic"], ["o", "oblique"]],
        "font-weight": [["1", "100"], ["2", "200"], ["3", "300"], ["4", "400"], ["5", "500"], ["6", "600"], ["7", "700"], ["8", "800"], ["9", "900"], ["4", "normal"], ["7", "bold"]]
    };
    function qa(a, c, b) {
        this.Oa = a;
        this.Ua = c;
        this.M = b
    }
    qa.prototype.expand = function(a, c) {
        for (var b = 0; b < this.M.length; b++)
            if (c == this.M[b][0]) {
                a[this.Oa] = this.Ua + ":" + this.M[b][1];
                break
            }
    };
    ka.prototype.expand = function(a) {
        if (2 != a.length)
            return l;
        for (var c = [l, l], b = 0, e = this.wa.length; b < e; b++) {
            var d = this.wa[b];
            (new qa(b, d, this.M[d])).expand(c, a.substr(b, 1))
        }
        return c[0] && c[1] ? c.join(";") + ";" : l
    };
    function I(a) {
        this.n = a;
        this.C = g
    }
    I.prototype = q.prototype;
    function J(a) {
        return "https:" == a.n.location.protocol
    }
    I.prototype.La = function() {
        return this.n.location.hostname
    };
    function ra(a, c, b) {
        var e = a.n.getElementsByTagName("head")[0];
        if (e) {
            var d = a.n.createElement("script");
            d.src = c;
            var f = m;
            d.onload = d.onreadystatechange = function() {
                if (!f && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState))
                    f = k, b && b(), d.onload = d.onreadystatechange = l, "HEAD" == d.parentNode.tagName && e.removeChild(d)
            };
            e.appendChild(d)
        }
    }
    I.prototype.za = function(a, c) {
        this.ba() ? a.setAttribute("style", c) : a.style.cssText = c
    };
    I.prototype.ba = function() {
        if (this.C === g) {
            var a = this.n.createElement("p");
            a.innerHTML = '<a style="top:1px;">w</a>';
            this.C = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return this.C
    };
    function sa() {
        var a = [{
            name: "font-family",
            value: K.c[L + 1]
        }
        ];
        this.Va = [K.c[L]];
        this.ka = a
    }
    function ta(a) {
        for (var c = a.Va.join(","), b = [], e = 0; e < a.ka.length; e++) {
            var d = a.ka[e];
            b.push(d.name + ":" + d.value + ";")
        }
        return c + "{" + b.join("") + "}"
    }
    function M(a, c) {
        this.I = a;
        this.O = c;
        this.ma = {};
        this.la = {}
    }
    M.prototype.F = function(a) {
        return a ? (this.ma[a.Q] || this.O).slice(0) : this.O.slice(0)
    };
    function ua(a, c, b) {
        for (var e = [], d = a.I.split(",")[0].replace(/"|'/g, ""), f = a.F(), h, i = [], j = {}, C = 0; C < f.length; C++)
            h = f[C], 0 < h.length&&!j[h] && (j[h] = k, i.push(h));
        b = b.xa ? b.xa(d, i, e) : i;
        c = c.Q;
        a.ma[c] = b;
        a.la[c] = e
    }
    M.prototype.watch = function(a, c, b) {
        var e = [], d = {};
        va(this, c, e, d);
        a(e, d, b)
    };
    function va(a, c, b, e) {
        b.push(a.I);
        e[a.I] = a.F(c);
        a = a.la[c.Q] || [];
        for (c = 0; c < a.length; c++) {
            for (var d = a[c], f = d.I, h = m, i = 0; i < b.length; i++)
                b[i] == f && (h = k);
            h || (b.push(f), e[f] = d.F())
        }
    }
    function wa(a, c) {
        this.I = a;
        this.O = c
    }
    wa.prototype.F = n("O");
    function xa(a) {
        var c = new Image(1, 1);
        c.src = a;
        c.onload = function() {
            c.onload = l
        }
    }
    function N(a, c) {
        this.Q = a;
        this.na = c
    }
    function ya() {
        this.Ca = this.D = this.K = this.L = k
    }
    function P(a) {
        za.T.push(a)
    }
    function Aa(a) {
        this.l = a;
        this.ha = this.u = this.j = this.S = l;
        this.r = [];
        this.N = [];
        this.Ba = this.Z = this.U = this.V = l
    }
    function Ba(a, c) {
        a.j = c;
        if (a.S) {
            var b;
            a:
            {
                b = a.S;
                for (var e = a.j, d = a.ha, f = 0; f < b.T.length; f++) {
                    var h = b.T[f], i = e, j = d;
                    j || (j = new ya);
                    if (h.na && h.na(i.getName(), i.getVersion(), i.getEngine(), i.getEngineVersion(), i.getPlatform(), i.getPlatformVersion(), i.getDocumentMode(), j)) {
                        b = h;
                        break a
                    }
                }
                b = l
            }
            a.u = b
        }
    }
    o = Aa.prototype;
    o.supportsConfiguredBrowser = function() {
        return !!this.u
    };
    o.init = function() {
        if (0 < this.N.length) {
            for (var a = [], c = 0; c < this.N.length; c++)
                a.push(ta(this.N[c]));
            var c = this.l, a = a.join(""), b = this.l.n.createElement("style");
            b.setAttribute("type", "text/css");
            b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
            r(c, "head", b)
        }
    };
    o.load = function(a, c) {
        var b = this.u.Q;
        if (this.Z)
            for (var e = Ca(this.Z, b), d = 0; d < this.r.length; d++)
                ua(this.r[d], this.u, e);
        this.V && (e = [], this.U && (e = new Da(this.l, this.u, this.r), e = Ea(this.U, b, e)), b = this.V.m(J(this.l), Fa(b, e)), r(this.l, "head", this.l.createElement("link", {
            rel: "stylesheet",
            href: b
        })));
        a && s(function(a, b, c, d) {
            return function() {
                for (var e = 0; e < a.r.length; e++)
                    a.r[e].watch(b, c, d && e == a.r.length - 1)
            }
        }(this, a, this.u, c))
    };
    o.collectFontFamilies = function(a, c) {
        for (var b = 0; b < this.r.length; b++)
            va(this.r[b], this.u, a, c)
    };
    o.performOptionalActions = function(a) {
        this.ca && s(function(a, b, e, d) {
            return function() {
                var b = a.ca;
                if (b.va) {
                    var h = window.__adobewebfontsappname__, h = h ? h.toString().substr(0, 20): "";
                    xa(b.va.m(J(d), {
                        host: encodeURIComponent(d.n.location.hostname),
                        app: encodeURIComponent(h),
                        _: ( + new Date).toString()
                    }))
                }
                b = a.ca;
                b.ga && (b = b.ga.m(e, d), r(d, "body", b))
            }
        }(this, a, this.j, this.l))
    };
    function Q(a, c, b, e) {
        this.Qa = a;
        this.l = c;
        this.o = b;
        this.B = e;
        this.t = []
    }
    Q.prototype.R = function(a) {
        this.t.push(a)
    };
    Q.prototype.load = function(a, c) {
        var b = a, e = c || {};
        if ("string" == typeof b)
            b = [b];
        else if (!b ||!b.length)
            e = b || {}, b = [];
        if (b.length)
            for (var d = this, f = b.length, h = 0; h < b.length; h++)
                Ga(this, b[h], function() {
                    0==--f && Ha(d, e)
                });
        else 
            Ha(this, e)
    };
    function Ga(a, c, b) {
        ra(a.l, a.Qa.m(J(a.l), {
            id: encodeURIComponent(c)
        }), b)
    }
    function Ha(a, c) {
        if (0 != a.t.length) {
            for (var b = new da(a.l, a.o, c), e = m, d = 0; d < a.t.length; d++)
                a.t[d].init(), e = e || a.t[d].supportsConfiguredBrowser();
            e ? (u(b.o, b.q.m(b.s, "loading")), D(b, "loading"), Ja(a, b)) : ha(b);
            a.t = []
        }
    }
    function Ja(a, c) {
        function b(a, b, c) {
            e.watch(a, b, {}, F, c)
        }
        for (var e = new E(a.l, c, {
            aa: function(a) {
                return a.offsetWidth
            }
        }, a.B, function() {
            return + new Date
        }), d = 0; d < a.t.length; d++) {
            var f = a.t[d];
            f.supportsConfiguredBrowser() && (f.load(b, d == a.t.length - 1), f.performOptionalActions(window))
        }
    }
    function R(a, c) {
        this.G = a;
        this.B = c;
        this.t = []
    }
    R.prototype.R = function(a) {
        this.t.push(a)
    };
    R.prototype.load = function() {
        var a = this.G.__webfonttypekitmodule__;
        if (a)
            for (var c = 0; c < this.t.length; c++) {
                var b = this.t[c], e = a[b.Ba];
                if (e) {
                    var d = this.B;
                    e(function(a, c, e) {
                        var c = [], j = {};
                        Ba(b, a);
                        b.supportsConfiguredBrowser() && (b.init(), b.load(l, d), b.collectFontFamilies(c, j), b.performOptionalActions(window));
                        e(b.supportsConfiguredBrowser(), c, j)
                    })
                }
            }
        };
    function S(a, c) {
        this.da = a;
        this.xa = c
    }
    S.prototype.getName = n("da");
    function Ka(a) {
        var c = T;
        La(c, a.getName()) || c.$.push(a)
    }
    function La(a, c) {
        for (var b = 0; b < a.$.length; b++) {
            var e = a.$[b];
            if (c === e.getName())
                return e
        }
        return l
    }
    function Ca(a, c) {
        var b = a.v[c];
        return b ? La(a, b) : l
    }
    function Ea(a, c, b) {
        for (var e = [], a = a.z[c] || [], c = 0; c < a.length; c++) {
            var d;
            a:
            switch (a[c]) {
            case "observeddomain":
                d = new Ma(b.l);
                break a;
            case "fontmask":
                d = new Na(b.u, b.r);
                break a;
            default:
                d = l
            }
            d && e.push(d)
        }
        return e
    }
    function Da(a, c, b) {
        this.l = a;
        this.u = c;
        this.r = b
    }
    function Ma(a) {
        this.l = a
    }
    Ma.prototype.toString = function() {
        return encodeURIComponent(this.l.La ? this.l.n.location.hostname : document.location.hostname)
    };
    function Na(a, c) {
        this.u = a;
        this.r = c
    }
    Na.prototype.toString = function() {
        for (var a = [], c = 0; c < this.r.length; c++)
            for (var b = this.r[c], e = b.F(), b = b.F(this.u), d = 0; d < e.length; d++) {
                var f;
                a:
                {
                    for (f = 0; f < b.length; f++)
                        if (e[d] === b[f]) {
                            f = k;
                            break a
                        }
                        f = m
                    }
                    a.push(f ? 1 : 0)
            }
        a = a.join("");
        a = a.replace(/^0+/, "");
        c = [];
        for (e = a.length; 0 < e; e -= 4)
            b = a.slice(0 > e - 4 ? 0 : e - 4, e), c.unshift(parseInt(b, 2).toString(16));
        return c.join("")
    };
    function U(a) {
        this.Xa = a
    }
    U.prototype.m = function(a, c) {
        var b = c || {}, e = this.Xa.replace(/\{\/?([^*}]*)(\*?)\}/g, function(a, c, e) {
            return e && b[c] ? "/" + b[c].join("/") : b[c] || ""
        });
        e.match(/^\/\//) && (e = (a ? "https:" : "http:") + e);
        return e.replace(/\/*\?*($|\?)/, "$1")
    };
    function Fa(a, c) {
        for (var b = [], e = 0; e < c.length; e++)
            b.push(c[e].toString());
        return {
            format: a,
            extras: b
        }
    }
    function Oa(a, c, b, e) {
        this.G = a;
        this.n = c;
        this.Ma = b;
        this.ra = e
    }
    Oa.prototype.m = function(a, c) {
        var b = this.n.createElement("img");
        b.setAttribute("width", 62);
        b.setAttribute("height", 25);
        b.setAttribute("src", this.Ma.m(J(c)));
        b.setAttribute("class", "typekit-badge");
        b.setAttribute("alt", "Fonts by Typekit");
        b.setAttribute("title", "Information about the fonts used on this site");
        b.style.position = "fixed";
        b.style.zIndex = 2E9;
        b.style.right = 0;
        b.style.bottom = 0;
        b.style.cursor = "pointer";
        b.style.border = 0;
        "Opera" != a.getName() && (b.style.content = "none");
        b.style.display = "inline";
        b.style["float"] =
        "none";
        b.style.height = "25px";
        b.style.left = "auto";
        b.style.margin = 0;
        b.style.maxHeight = "25px";
        b.style.maxWidth = "62px";
        b.style.minHeight = "25px";
        b.style.minWidth = "62px";
        b.style.orphans = 2;
        b.style.outline = "none";
        b.style.overflow = "visible";
        b.style.padding = 0;
        b.style.pageBreakAfter = "auto";
        b.style.pageBreakBefore = "auto";
        b.style.pageBreakInside = "auto";
        b.style.tableLayout = "auto";
        b.style.textIndent = 0;
        b.style.top = "auto";
        b.style.unicodeBidi = "normal";
        b.style.verticalAlign = "baseline";
        b.style.visibility = "visible";
        b.style.widows =
        2;
        b.style.width = "65px";
        if (this.ra) {
            var e = this.n, d = this.ra;
            V(this, b, "click", function() {
                e.location.href = d
            })
        }
        if ("MSIE" == a.getName()) {
            b.style.position = "absolute";
            var f = this, h = function() {
                var a = Pa(f, "scrollLeft", "scrollTop"), c = Pa(f, "clientWidth", "clientHeight");
                b.style.bottom = "auto";
                b.style.right = "auto";
                b.style.top = a[1] + c[1] - 25 + "px";
                b.style.left = a[0] + c[0] - 3 - 62 + "px"
            };
            V(this, this.G, "scroll", h);
            V(this, this.G, "resize", h)
        }
        h = a.getPlatform();
        if ("iPhone" == h || "iPod" == h || "iPad" == h || "Android" == h)
            b.style.display = "none";
        return b
    };
    function Pa(a, c, b) {
        var e = 0, d = 0, a = a.n;
        if (a.documentElement && (a.documentElement[c] || a.documentElement[b]))
            e = a.documentElement[c], d = a.documentElement[b];
        else if (a.body && (a.body[c] || a.body[b]))
            e = a.body[c], d = a.body[b];
        return [e, d]
    }
    function V(a, c, b, e) {
        if (c.attachEvent) {
            var d = a.G;
            c["e" + b + e] = e;
            c[b + e] = function() {
                c["e" + b + e](d.event)
            };
            c.attachEvent("on" + b, c[b + e])
        } else 
            c.addEventListener(b, e, m)
    }
    var za = new function() {
        this.T = []
    };
    P(new N("a", function(a, c, b, e, d, f) {
        if (m || ("Windows" == d && "Unknown" == f ? k : m) || ("Ubuntu" == d || "Linux" == d ? k : m))
            a: {
            if ("AdobeAIR" == a && (a = /([0-9]+.[0-9]+)/.exec(c))) {
                a = 2.5 <= parseFloat(a[1]);
                break a
            }
            a = m
        } else 
            a = m;
        return a
    }));
    P(new N("b", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b) {
            if ("AdobeAIR" == a) {
                var c = /([0-9]+.[0-9]+)/.exec(b);
                if (c)
                    return 2.5 <= parseFloat(c[1])
            }
            return m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("a", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i);
        return !j&&!("Ubuntu" ==
        d || "Linux" == d ? k : m) ? m : function(a, b) {
            if ("Chrome" == a) {
                var c = /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);
                if (c) {
                    var d = parseFloat(c[1]), e = parseInt(c[2], 10), c = parseInt(c[3], 10);
                    if (!(6 <= d) && (4 < d || 4 == d && 249 < e || 4 == d && 249 == e && 4 <= c))
                        return k
                }
            }
            return m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("d", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = (j = (j = (j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i)) || ("Ubuntu" ==
        d || "Linux" == d ? k : m) || function(a, b, c, e, d, f, h, i) {
            a = /([0-9]+).([0-9]+)/.exec(f);
            return i.D && "Android" == d && a ? (d = parseInt(a[1], 10), i = parseInt(a[2], 10), 3 == d && 1 <= i || 3 < d) : m
        }(a, c, b, e, d, f, h, i)) || "CrOS" == d || function(a, b, c, e, d, f, h, i) {
            return i.K && "iPad" == d ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, d, e, f, h, i) {
            return i.L && ("iPhone" == e || "iPod" == e) ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b) {
            if ("Chrome" == a) {
                var c =
                /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);
                if (c && 6 <= parseFloat(c[1]))
                    return k
            }
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("a", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = m || function(a, b, c, e, d, f, h, i) {
            return i.K && "iPad" == d && (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? (b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, e, d, f, h, i) {
            if (i.L && ("iPhone" == d || "iPod" == d))
                if (a = /^([0-9]+)_([0-9]+)/.exec(f))
                    return b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b;
            return m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b) {
            if ("Chrome" == a) {
                var c = /([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);
                if (c && 6 <= parseFloat(c[1]))
                    return k
            }
        }(a,
        c, b, e, d, f, h, i)
    }));
    P(new N("a", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, e, d, f, h, i);
        return !j&&!("Ubuntu" == d || "Linux" == d ? k : m) ? m : function(a, b, c, e) {
            return "Gecko" == c ? (a = /1.9.1b[1-3]{1}/, /1.9.1/.test(e)&&!a.test(e)) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("b", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b, c, e) {
            return "Gecko" == c ? (a = /1.9.1b[1-3]{1}/, /1.9.1/.test(e)&&!a.test(e)) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("d", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = (j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i)) || ("Ubuntu" ==
        d || "Linux" == d ? k : m) || i.D && "Android" == d;
        return !j ? m : function(a, b, c, e) {
            return "Gecko" == c && (b = /([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(e)) ? (a = parseFloat(b[1]), b = parseInt(b[3], 10), 1.9 < a || 1.9 <= a && 1 < b) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("i", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b, c, e, d, f, h) {
            if ("MSIE" == a)
                return (a = /([0-9]+.[0-9]+)/.exec(b)) ? 6 <= parseFloat(a[1]) && (h === g || 9 > h) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("d", function(a, c, b, e, d, f, h) {
        if (!(c = m))
            b = /^([0-9]+).([0-9]+)/.exec(f), "Windows" == d && b ? (c = parseInt(b[1], 10), b = parseInt(b[2], 10), c = 6 < c || 6 == c && 1 <= b) : c = m;
        a = c || ("Windows" == d && "6.0" == f ? k : m) ? "MSIE" == a ? 9 <= h : g : m;
        return a
    }));
    P(new N("d", function(a, c, b, e, d, f, h, i) {
        if (!(c = m))
            f = /^([0-9]+)/.exec(f), c = i.Ca && "Windows Phone" == d && f ? 8 <= parseInt(f[1], 10) : m;
        return !c ? m : "MSIE" == a
    }));
    P(new N("a", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, e, d, f, h, i);
        return !j&&!("Ubuntu" == d || "Linux" == d ? k : m) ? m : function(a, b) {
            if ("Opera" == a) {
                var c = parseFloat(b);
                return 10.54 <= c && 11.1 > c
            }
            return m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("b", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b) {
            if ("Opera" == a) {
                var c = parseFloat(b);
                return 10.54 <= c && 11.1 > c
            }
            return m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("d", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = (j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i)) || ("Ubuntu" ==
        d || "Linux" == d ? k : m) || i.D && "Android" == d;
        return !j ? m : "Opera" == a ? 11.1 <= parseFloat(c) : m
    }));
    P(new N("b", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || function(a, b, c, e, d, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == d && a ? (d = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < d || 10 == d && 4 <= f) : "Macintosh" == d && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b, c, d) {
            return "Safari" == a && "AppleWebKit" == c && (a = /([0-9]+.[0-9]+)/.exec(d)) ? (a = parseFloat(a[1]), 525.13 <= a && 534.5 > a) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("a", function(a, c, b, e, d, f, h, i) {
        var j;
        j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, d, e, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == e && a ? (e = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < e || 6 == e && 1 <= a) : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a, b, c, e) {
            return "Safari" == a && "AppleWebKit" == c && (a = /([0-9]+.[0-9]+)/.exec(e)) ? (a = parseFloat(a[1]), 525.13 <= a && 534.5 > a) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("d", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = m || ("Windows" == d && "5.1" == f ? k : m) || ("Windows" == d && "5.2" == f ? k : m) || ("Windows" == d && "6.0" == f ? k : m) || function(a, b, c, e, d, f) {
            a = /^([0-9]+).([0-9]+)/.exec(f);
            return "Windows" == d && a ? (d = parseInt(a[1], 10), a = parseInt(a[2], 10), 6 < d || 6 == d && 1 <= a) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, d, e, f) {
            a = /^([0-9]+)(_|.)([0-9]+)/.exec(f);
            return "Macintosh" == e && a ? (e = parseInt(a[1], 10), f = parseInt(a[3], 10), 10 < e || 10 == e && 4 <= f) : "Macintosh" == e && "Unknown" == f ? k : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : function(a,
        b, c, e) {
            return "Safari" == a && "AppleWebKit" == c && (a = /([0-9]+.[0-9]+)/.exec(e)) ? 534.5 <= parseFloat(a[1]) : m
        }(a, c, b, e, d, f, h, i)
    }));
    P(new N("a", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = (j = m || function(a, b, c, e, d, f, h, i) {
            a = /([0-9]+).([0-9]+)/.exec(f);
            return i.D && "Android" == d && a ? (d = parseInt(a[1], 10), i = parseInt(a[2], 10), 2 == d && 2 <= i || 3 == d && 1 > i) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, e, d, f, h, i) {
            return i.K && "iPad" == d && (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? (b = parseInt(a[2], 10), 4 == parseInt(a[1], 10) && 2 <= b) : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, e, d, f, h, i) {
            if (i.L && ("iPhone" == d || "iPod" == d))
                if (a = /^([0-9]+)_([0-9]+)/.exec(f))
                    return b = parseInt(a[2], 10), 4 ==
                    parseInt(a[1], 10) && 2 <= b;
            return m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == d || "iPad" == d) ? k : m
    }));
    P(new N("f", function(a, c, b, e, d, f, h, i) {
        if (!(c = m))
            f = /([0-9]+).([0-9]+)/.exec(f), i.D && "Android" == d && f ? (i = parseInt(f[1], 10), f = parseInt(f[2], 10), c = 3 == i && 1 <= f || 3 < i) : c = m;
        return !c ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == d || "iPad" == d) ? k : m
    }));
    P(new N("d", function(a, c, b, e, d, f, h, i) {
        var j;
        j = (j = m || function(a, b, c, d, e, f, h, i) {
            return i.K && "iPad" == e ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, e, d, f, h, i)) || function(a, b, c, e, d, f, h, i) {
            return i.L && ("iPhone" == d || "iPod" == d) ? (a = /^([0-9]+)_([0-9]+)/.exec(f)) ? 5 <= parseInt(a[1], 10) : m : m
        }(a, c, b, e, d, f, h, i);
        return !j ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == d || "iPad" == d) ? k : m
    }));
    var T = new function() {
        this.$ = [];
        this.v = {}
    };
    Ka(new S("AllFonts", function(a, c) {
        return c
    }));
    Ka(new S("DefaultFourFontsWithSingleFvdFamilies", function(a, c, b) {
        for (var e = 0; e < c.length; e++) {
            var d = c[e], f = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + d;
            b.push(new wa(f, [d]))
        }
        a = {};
        for (d = 0; d < c.length; d++)
            b = c[d], e = b.charAt(1), (a[e] || (a[e] = [])).push(b);
        b = [[4, 3, 2, 1, 5, 6, 7, 8, 9], [7, 8, 9, 6, 5, 4, 3, 2, 1]];
        e = [];
        for (d = 0; d < b.length; d++)
            for (var f = b[d], h = 0; h < f.length; h++) {
                var i = f[h];
                if (a[i]) {
                    e = e.concat(a[i]);
                    break
                }
            }
        b = e;
        e = {};
        a = [];
        for (d = 0; d < b.length; d++)
            f = b[d], e[f] || (e[f] = k, a.push(f));
        b = [];
        for (e = 0; e < c.length; e++) {
            d = c[e];
            for (f = 0; f < a.length; f++)
                h = a[f], h == d && b.push(h)
        }
        return b
    }));
    T.v.a = "AllFonts";
    T.v.b = "AllFonts";
    T.v.d = "AllFonts";
    T.v.e = "AllFonts";
    T.v.f = "AllFonts";
    T.v.g = "AllFonts";
    T.v.h = "AllFonts";
    T.v.i = "DefaultFourFontsWithSingleFvdFamilies";
    var W = new function() {
        this.z = {}
    };
    W.z.a = [];
    W.z.b = [];
    W.z.d = [];
    W.z.e = [];
    W.z.f = ["observeddomain"];
    W.z.g = ["observeddomain"];
    W.z.h = ["observeddomain"];
    W.z.i = ["observeddomain", "fontmask"];
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
        var Qa = window.Typekit.config || {}, Ra = l;
        Qa.k && (Ra = new U(Qa.k));
        var Sa = function(a, c) {
            setTimeout(a, c)
        }, X = new Q(Ra, new I(document), document.documentElement, Sa), Y = new R(window, Sa);
        window.Typekit.load = function() {
            X.load.apply(X, arguments)
        };
        window.Typekit.addKit = function() {
            X.R.apply(X, arguments)
        }
    }
    var Ta, Ua = l, Va = l, Wa = l, Xa, Z, $, K = window.Typekit.config || {};
    K.b && (Ua = new U(K.b), Va = new Oa(window, document, Ua, K.bu));
    K.p && (Wa = new U(K.p));
    Xa = new function() {
        var a = Wa;
        this.ga = Va;
        this.va = a
    };
    $ = new Aa(new I(document));
    $.ca = Xa;
    Z = new ya;
    Z.L=!K.si;
    Z.K=!K.st;
    Z.D=!K.sa;
    Z.Ca=!K.sw;
    $.ha = Z;
    K.w && ($.Ba = K.w);
    K.f && (Ta = new U(K.f), $.V = Ta);
    var L;
    if (K.fn)
        for (L = 0; L < K.fn.length; L += 2)
            $.r.push(new M(K.fn[L], K.fn[L + 1]));
    if (K.c)
        for (L = 0; L < K.c.length; L += 2)
            $.N.push(new sa);
    $.U = W;
    $.S = za;
    $.Z = T;
    Y && Y.G.__webfonttypekitmodule__ ? (Y.R($), Y.load()) : (Ba($, (new ba(navigator.userAgent, document)).parse()), window.Typekit.addKit($));
})(this, document);

