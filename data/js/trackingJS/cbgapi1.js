try {
    var p;
    function aa(a) {
        return function() {
            return ba[a].apply(this, arguments)
        }
    }
    var ba = [];
    var Xa = Xa || {}, w = this, ea = function(a) {
        return void 0 !== a
    }, fa = function(a, b) {
        for (var c = a.split("."), d = b || w, e; e = c.shift();)
            if (null != d[e])
                d = d[e];
            else 
                return null;
        return d
    }, Sb = function() {}, ha = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable &&
                            !a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, ia = function(a) {
    return "array" == ha(a)
}, x = function(a) {
    var b = ha(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, y = function(a) {
    return "string" == typeof a
}, ca = function(a) {
    return "number" == typeof a
}, ja = function(a) {
    return "function" ==
    ha(a)
}, ka = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, ma = "closure_uid_" + (1E9 * Math.random()>>>0), na = 0, oa = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, pa = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}, z = function(a, b, c) {
    z = Function.prototype.bind &&
    - 1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
    return z.apply(null, arguments)
}, Ld = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}, L = Date.now || function() {
    return + new Date
}, Ig = function(a) {
    if (w.execScript)
        w.execScript(a, "JavaScript");
    else if (w.eval)
        if (null == Jg && (w.eval("var _et_ = 1;"), "undefined" != typeof w._et_ ? (delete w._et_, Jg=!0) : Jg=!1), Jg)
            w.eval(a);
        else {
            var b = w.document, c = b.createElement("script");
            c.type = "text/javascript";
            c.defer=!1;
            c.appendChild(b.createTextNode(a));
            b.body.appendChild(c);
            b.body.removeChild(c)
        } else 
            throw Error("f");
}, Jg = null, sg = function(a, b) {
    var c = a.split("."), d = w;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        !c.length && ea(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
}, A = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.F = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.xa = function(a, c, f) {
        for (var g = Array(arguments.length - 2), q = 2; q < arguments.length; q++)
            g[q - 2] = arguments[q];
        return b.prototype[c].apply(a, g)
    }
};
var vb = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, vb);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
A(vb, Error);
vb.prototype.name = "CustomError";
var Kb = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, ga = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}, Hg = function(a) {
    for (var b = 0, c = 0; c < a.length; ++c)
        b = 31 * b + a.charCodeAt(c), b%=4294967296;
    return b
};
Math.random();
var D = Array.prototype, qa = D.indexOf ? function(a, b, c) {
    return D.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (y(a))
        return y(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, M = D.forEach ? function(a, b, c) {
    D.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Wa = D.filter ? function(a, b, c) {
    return D.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f = 0, g = y(a) ?
    a.split("") : a, q = 0; q < d; q++)
        if (q in g) {
            var m = g[q];
            b.call(c, m, q, a) && (e[f++] = m)
        }
    return e
}, Ba = D.some ? function(a, b, c) {
    return D.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = y(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, ij = function(a) {
    var b;
    t: {
        b = jj;
        for (var c = a.length, d = y(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break t
            }
        b =- 1
    }
    return 0 > b ? null : y(a) ? a.charAt(b) : a[b]
}, C = function(a, b) {
    return 0 <= qa(a, b)
}, sa = function(a, b) {
    var c = qa(a, b), d;
    (d = 0 <= c) && D.splice.call(a, c, 1);
    return d
};
var Ga = [], Ia = [], Ha=!1, Fa = function(a) {
    Ga[Ga.length] = a;
    if (Ha)
        for (var b = 0; b < Ia.length; b++)
            a(z(Ia[b].g, Ia[b]))
}, Fg = function(a) {
    Ha=!0;
    for (var b = z(a.g, a), c = 0; c < Ga.length; c++)
        Ga[c](b);
    Ia.push(a)
};
var h;
t:
{
    var k = w.navigator;
    if (k) {
        var Sa = k.userAgent;
        if (Sa) {
            h = Sa;
            break t
        }
    }
    h = ""
};
var Ab = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}, Cb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, $d = function(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}, Qb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Pb = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Qb.length; f++)
            c = Qb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}, zb = function(a) {
    var b = arguments.length;
    if (1 == b && ia(arguments[0]))
        return zb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]]=!0;
    return c
};
var Da = function(a) {
    w.setTimeout(function() {
        throw a;
    }, 0)
}, ra, ua = function() {
    var a = w.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host, a = z(function(a) {
            if (("*" ==
            d || a.origin == d) && a.data == c)
                this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a&&-1 == h.indexOf("Trident")&&-1 == h.indexOf("MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            if (ea(c.next)) {
                c = c.next;
                var a = c.K;
                c.K = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                K: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
        var b =
        document.createElement("script");
        b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function(a) {
        w.setTimeout(a, 0)
    }
}, la = function(a) {
    return a
};
Fa(function(a) {
    la = a
});
var Ma = function(a, b) {
    Zc || $c();
    Ea || (Zc(), Ea=!0);
    Ka.push(new La(a, b))
}, Zc, $c = function() {
    if (w.Promise && w.Promise.resolve) {
        var a = w.Promise.resolve();
        Zc = function() {
            a.then(Ja)
        }
    } else 
        Zc = function() {
            var a = Ja, a = la(a);
            !ja(w.setImmediate) || w.Window && w.Window.prototype.setImmediate == w.setImmediate ? (ra || (ra = ua()), ra(a)) : w.setImmediate(a)
        }
}, Ea=!1, Ka = [], Ja = function() {
    for (; Ka.length;) {
        var a = Ka;
        Ka = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.i.call(c.g)
            } catch (d) {
                Da(d)
            }
        }
    }
    Ea=!1
}, La = function(a, b) {
    this.i = a;
    this.g = b
};
var Za = "StopIteration"in w ? w.StopIteration: Error("h"), Gb = function() {};
Gb.prototype.next = function() {
    throw Za;
};
Gb.prototype.qb = function() {
    return this
};
var Hb = function(a, b) {
    this.g = {};
    this.i = [];
    this.j = this.h = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("l");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof Hb ? (c = a.Z(), d = a.H()) : (c = Cb(a), d = Ab(a));
        for (var e = 0; e < c.length; e++)
            this.set(c[e], d[e])
    }
};
Hb.prototype.H = function() {
    Ib(this);
    for (var a = [], b = 0; b < this.i.length; b++)
        a.push(this.g[this.i[b]]);
    return a
};
Hb.prototype.Z = function() {
    Ib(this);
    return this.i.concat()
};
Hb.prototype.remove = function(a) {
    return Db(this.g, a) ? (delete this.g[a], this.h--, this.j++, this.i.length > 2 * this.h && Ib(this), !0) : !1
};
var Ib = function(a) {
    if (a.h != a.i.length) {
        for (var b = 0, c = 0; b < a.i.length;) {
            var d = a.i[b];
            Db(a.g, d) && (a.i[c++] = d);
            b++
        }
        a.i.length = c
    }
    if (a.h != a.i.length) {
        for (var e = {}, c = b = 0; b < a.i.length;)
            d = a.i[b], Db(e, d) || (a.i[c++] = d, e[d] = 1), b++;
        a.i.length = c
    }
};
p = Hb.prototype;
p.get = function(a, b) {
    return Db(this.g, a) ? this.g[a] : b
};
p.set = function(a, b) {
    Db(this.g, a) || (this.h++, this.i.push(a), this.j++);
    this.g[a] = b
};
p.forEach = function(a, b) {
    for (var c = this.Z(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
p.clone = function() {
    return new Hb(this)
};
p.qb = function(a) {
    Ib(this);
    var b = 0, c = this.i, d = this.g, e = this.j, f = this, g = new Gb;
    g.next = function() {
        for (; ;) {
            if (e != f.j)
                throw Error("m");
            if (b >= c.length)
                throw Za;
            var g = c[b++];
            return a ? g : d[g]
        }
    };
    return g
};
var Db = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var Fb = function(a) {
    if ("function" == typeof a.H)
        return a.H();
    if (y(a))
        return a.split("");
    if (x(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Ab(a)
}, Jb = function(a, b, c) {
    if ("function" == typeof a.forEach)
        a.forEach(b, c);
    else if (x(a) || y(a))
        M(a, b, c);
    else {
        var d;
        if ("function" == typeof a.Z)
            d = a.Z();
        else if ("function" != typeof a.H)
            if (x(a) || y(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else 
                d = Cb(a);
        else 
            d = void 0;
        for (var e = Fb(a), f = e.length, g = 0; g < f; g++)
            b.call(c, e[g], d && d[g], a)
    }
};
var fb =- 1 != h.indexOf("Opera")||-1 != h.indexOf("OPR"), N =- 1 != h.indexOf("Trident")||-1 != h.indexOf("MSIE"), gb =- 1 != h.indexOf("Gecko")&&-1 == h.toLowerCase().indexOf("webkit")&&!( - 1 != h.indexOf("Trident")||-1 != h.indexOf("MSIE")), hb =- 1 != h.toLowerCase().indexOf("webkit"), jb =- 1 != h.indexOf("Macintosh"), xa = function() {
    var a = w.document;
    return a ? a.documentMode : void 0
}, qb = function() {
    var a = "", b;
    if (fb && w.opera)
        return a = w.opera.version, ja(a) ? a() : a;
    gb ? b = /rv\:([^\);]+)(\)|;)/ : N ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : hb && (b =
    /WebKit\/(\S+)/);
    b && (a = (a = b.exec(h)) ? a[1] : "");
    return N && (b = xa(), b > parseFloat(a)) ? String(b) : a
}(), Rb = {}, P = function(a) {
    var b;
    if (!(b = Rb[a])) {
        b = 0;
        for (var c = Kb(String(qb)).split("."), d = Kb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", q = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), r = RegExp("(\\d*)(\\D*)", "g");
            do {
                var ad = m.exec(g) || ["", "", ""], u = r.exec(q) || ["", "", ""];
                if (0 == ad[0].length && 0 == u[0].length)
                    break;
                b = ga(0 == ad[1].length ? 0 : parseInt(ad[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || ga(0 == ad[2].length, 0 == u[2].length) || ga(ad[2], u[2])
            }
            while (0 == b)
            }
        b = Rb[a] = 0 <= b
    }
    return b
}, Ta = w.document, sb = Ta && N ? xa() || ("CSS1Compat" == Ta.compatMode ? parseInt(qb, 10) : 5) : void 0;
var Gg = function(a, b, c) {
    c = c || w;
    var d = c.onerror, e=!!b;
    hb&&!P("535.3") && (e=!e);
    c.onerror = function(b, c, q, m, r) {
        d && d(b, c, q, m, r);
        a({
            message: b,
            fileName: c,
            Nd: q,
            ya: m,
            error: r
        });
        return e
    }
}, Xd = function(a) {
    var b = fa("window.location.href");
    if (y(a))
        return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
    var c, d, e=!1;
    try {
        c = a.lineNumber || a.Nd || "Not available"
    } catch (f) {
        c = "Not available", e=!0
    }
    try {
        d = a.fileName || a.filename || a.sourceURL || w.$googDebugFname || b
    } catch (g) {
        d = "Not available",
        e=!0
    }
    return !e && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
        message: a.message || "Not available",
        name: a.name || "UnknownError",
        lineNumber: c,
        fileName: d,
        stack: a.stack || "Not available"
    }
}, Wd = function(a) {
    var b;
    b || (b = Qd(a || arguments.callee.caller, []));
    return b
}, Qd = function(a, b) {
    var c = [];
    if (C(b, a))
        c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(Md(a) + "(");
        for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
            case "object":
                f = f ? "object" : "null";
                break;
            case "string":
                break;
            case "number":
                f = String(f);
                break;
            case "boolean":
                f = f ? "true" : "false";
                break;
            case "function":
                f = (f = Md(f)) ? f : "[fn]";
                break;
            default:
                f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(Qd(a.caller, b))
        } catch (g) {
            c.push("[exception trying to get caller]\n")
        }
    } else 
        a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}, Md = function(a) {
    if (Nd[a])
        return Nd[a];
    a = String(a);
    if (!Nd[a]) {
        var b = /function ([^\(]+)/.exec(a);
        Nd[a] = b ? b[1] : "[Anonymous]"
    }
    return Nd[a]
}, Nd = {};
var E = function() {
    this.C = this.C;
    this.u = this.u
};
E.prototype.C=!1;
E.prototype.isDisposed = function() {
    return this.C
};
E.prototype.S = function() {
    this.C || (this.C=!0, this.h())
};
E.prototype.h = function() {
    if (this.u)
        for (; this.u.length;)
            this.u.shift()()
};
var O = function(a) {
    a && "function" == typeof a.S && a.S()
};
var Va = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
}, Ya = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var n = function(a, b) {
    this.g = 0;
    this.v = void 0;
    this.i = this.k = null;
    this.h = this.j=!1;
    try {
        var c = this;
        a.call(b, function(a) {
            l(c, 2, a)
        }, function(a) {
            l(c, 3, a)
        })
    } catch (d) {
        l(this, 3, d)
    }
};
n.prototype.then = function(a, b, c) {
    return db(this, ja(a) ? a : null, ja(b) ? b : null, c)
};
Va(n);
var ib = function(a, b) {
    a.i && a.i.length || 2 != a.g && 3 != a.g || eb(a);
    a.i || (a.i = []);
    a.i.push(b)
}, db = function(a, b, c, d) {
    var e = {
        q: null,
        R: null,
        T: null
    };
    e.q = new n(function(a, g) {
        e.R = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (r) {
                g(r)
            }
        } : a;
        e.T = c ? function(b) {
            try {
                var e = c.call(d, b);
                !ea(e) && "undefined" != typeof t && b instanceof t ? g(b) : a(e)
            } catch (r) {
                g(r)
            }
        } : g
    });
    e.q.k = a;
    ib(a, e);
    return e.q
};
n.prototype.D = function(a) {
    this.g = 0;
    l(this, 2, a)
};
n.prototype.p = function(a) {
    this.g = 0;
    l(this, 3, a)
};
var l = function(a, b, c) {
    if (0 == a.g) {
        if (a == c)
            b = 3, c = new TypeError("Promise cannot resolve to itself");
        else {
            if (Ya(c)) {
                a.g = 1;
                c.then(a.D, a.p, a);
                return 
            }
            if (ka(c))
                try {
                    var d = c.then;
                    if (ja(d)) {
                        kb(a, c, d);
                        return 
                    }
            } catch (e) {
                b = 3, c = e
            }
        }
        a.v = c;
        a.g = b;
        eb(a);
        3 != b || "undefined" != typeof t && c instanceof t || lb(a, c)
    }
}, kb = function(a, b, c) {
    a.g = 1;
    var d=!1, e = function(b) {
        d || (d=!0, a.D(b))
    }, f = function(b) {
        d || (d=!0, a.p(b))
    };
    try {
        c.call(b, e, f)
    } catch (g) {
        f(g)
    }
}, eb = function(a) {
    a.j || (a.j=!0, Ma(a.u, a))
};
n.prototype.u = function() {
    for (; this.i && this.i.length;) {
        var a = this.i;
        this.i = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b], d = this.v;
            if (2 == this.g)
                c.R(d);
            else {
                if (c.q)
                    for (var e = void 0, e = this; e && e.h; e = e.k)
                        e.h=!1;
                c.T(d)
            }
        }
    }
    this.j=!1
};
var lb = function(a, b) {
    a.h=!0;
    Ma(function() {
        a.h && mb.call(null, b)
    })
}, mb = Da, t = function(a) {
    vb.call(this, a)
};
A(t, vb);
t.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var F = function(a, b) {
    this.j = [];
    this.J = b || null;
    this.i = this.g=!1;
    this.h = void 0;
    this.u = this.B = this.v=!1;
    this.k = 0;
    this.D = null;
    this.C = 0
};
F.prototype.p = function(a, b) {
    this.v=!1;
    this.g=!0;
    this.h = b;
    this.i=!a;
    za(this)
};
F.prototype.callback = aa(0);
var ya = function(a, b, c) {
    a.j.push([b, c, void 0]);
    a.g && za(a)
};
F.prototype.then = function(a, b, c) {
    var d, e, f = new n(function(a, b) {
        d = a;
        e = b
    });
    ya(this, d, function(a) {
        e(a)
    });
    return f.then(a, b, c)
};
Va(F);
var Aa = function(a) {
    return Ba(a.j, function(a) {
        return ja(a[1])
    })
}, za = function(a) {
    if (a.k && a.g && Aa(a)) {
        var b = a.k, c = nb[b];
        c && (w.clearTimeout(c.n), delete nb[b]);
        a.k = 0
    }
    a.D && (a.D.C--, delete a.D);
    for (var b = a.h, d = c=!1; a.j.length&&!a.v;) {
        var e = a.j.shift(), f = e[0], g = e[1], e = e[2];
        if (f = a.i ? g : f)
            try {
                var q = f.call(e || a.J, b);
                ea(q) && (a.i = a.i && (q == b || q instanceof Error), a.h = b = q);
                Ya(b) && (d=!0, a.v=!0)
            } catch (m) {
            b = m, a.i=!0, Aa(a) || (c=!0)
        }
    }
    a.h = b;
    d && (q = z(a.p, a, !0), d = z(a.p, a, !1), b instanceof F ? (ya(b, q, d), b.B=!0) : b.then(q, d));
    c && (b = new ob(b), nb[b.n] = b, a.k = b.n)
}, ob = function(a) {
    this.n = w.setTimeout(z(this.g, this), 0);
    this.i = a
};
ob.prototype.g = function() {
    delete nb[this.n];
    throw this.i;
};
var nb = {};
var eh = function() {
    E.call(this)
};
A(eh, E);
eh.prototype.init = function() {
    this.i = []
};
var hj = function(a) {
    var b = W;
    b.g = a;
    fh(b)
}, v = function(a) {
    var b = W;
    b.isDisposed() || (b.g ? pb(b.g, a, null) : b.i && 10 > b.i.length && b.i.push([null, a]))
}, fh = function(a) {
    a.i && (M(a.i, function(a) {
        pb(this.g, a[1], a[0])
    }, a), a.i = null)
}, W = new eh, hh = function(a) {
    v(a)
};
!gb&&!N || N && N && 9 <= sb || gb && P("1.9.1");
N && P("9");
var xb = function() {}, Yf = function(a, b, c) {
    switch (typeof b) {
    case "string":
        yb(b, c);
        break;
    case "number":
        c.push(isFinite(b)&&!isNaN(b) ? b : "null");
        break;
    case "boolean":
        c.push(b);
        break;
    case "undefined":
        c.push("null");
        break;
    case "object":
        if (null == b) {
            c.push("null");
            break
        }
        if (ia(b)) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++)
                c.push(e), Yf(a, b[f], c), e = ",";
            c.push("]");
            break
        }
        c.push("{");
        d = "";
        for (e in b)
            Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), yb(e, c), c.push(":"),
            Yf(a, f, c), d = ","));
        c.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("B`" + typeof b);
    }
}, Eb = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, Ob = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g, yb = function(a, b) {
    b.push('"', a.replace(Ob, function(a) {
        if (a in Eb)
            return Eb[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return Eb[a] = e + b.toString(16)
    }), '"')
};
var Yb = function() {
    var a = window;
    if (!a.location) {
        var b;
        try {
            var c = [];
            Yf(new xb, a, c);
            b = c.join("")
        } catch (d) {
            b = Cb(a).toString()
        }
        v(Error("za`" + b))
    }
    b = a.location && a.location.ancestorOrigins;
    if (ea(b))
        return b && b.length ? b[b.length - 1] == a.location.origin : !0;
    try {
        return ea(a.top.location.href)
    } catch (e) {
        return !1
    }
};
var kh = {}, jh = function() {
    var a = {};
    a.location = document.location.toString();
    if (Yb())
        try {
            a["top.location"] = top.location.toString()
    } catch (b) {
        a["top.location"] = "[external]"
    } else 
        a["top.location"] = "[external]";
    for (var c in kh)
        try {
            a[c] = kh[c].call()
    } catch (d) {
        a[c] = "[error] " + d.message
    }
    return a
};
var lh = function(a) {
    this.i = a;
    this.h = {};
    this.g = []
}, pb = function(a, b, c) {
    var d = jh();
    d["call-stack"] = Wd();
    c && (d.message = c);
    var e;
    b instanceof Error ? e = b : e = b || "";
    var f;
    b = "";
    e && (b = (e.lineNumber || "unknown") + ":" + Hg(e.fileName || "unknown") + ":" + Hg(e.message || "unknown"));
    c = "";
    for (f in d) {
        var g;
        g = "call-stack" == f ? d[f].replace(/\(.*\)/g, "") : d[f];
        c = c + f + ":" + g + ":"
    }
    f = b + "::" + c;
    b = a.h[f];
    b || (b = {
        time: 0,
        count: 0
    }, a.h[f] = b);
    if (1E4 > L() - b.time)
        b.count++, 1 == b.count && (d = jh(), d.message = "Throttling: " + f, a.i.j(e, d));
    else {
        b.count && (d["dropped-instances"] = b.count);
        b.time = L();
        for (f = b.count = 0; f < a.g.length; f++)
            a.g[f](e, d);
        a.i.j(e, d)
    }
};
zb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var ab = function() {
    this.h = "";
    this.i = ta;
    this.g = null
};
zb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
zb("embed", "iframe", "link", "script", "style", "template");
var ta = {};
var Kg = function(a) {
    E.call(this);
    this.k = a;
    this.j=!0;
    this.i=!1
};
A(Kg, E);
Kg.prototype.g = function(a) {
    return Mg(this, a)
};
var Lg = function(a, b) {
    return (b ? "__wrapper_" : "__protected_") + (a[ma] || (a[ma]=++na)) + "__"
}, Mg = function(a, b) {
    var c = Lg(a, !0);
    b[c] || ((b[c] = Ng(a, b))[Lg(a, !1)] = b);
    return b[c]
}, Ng = function(a, b) {
    var c = function() {
        if (a.isDisposed())
            return b.apply(this, arguments);
        try {
            return b.apply(this, arguments)
        } catch (c) {
            a.k(c);
            if (!a.j)
                throw a.i && ("object" === typeof c ? c.message = "Error in protected function: " + c.message : c = "Error in protected function: " + c), c;
            throw new Og(c);
        } finally {}
    };
    c[Lg(a, !1)] = b;
    return c
}, $b = function(a) {
    for (var b =
    fa("window"), c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"], d = 0; d < c.length; d++) {
        var e = c[d];
        c[d]in b && Pg(a, e)
    }
}, Pg = function(a, b) {
    var c = fa("window"), d = c[b];
    c[b] = function(b, c) {
        y(b) && (b = Ld(Ig, b));
        b = Mg(a, b);
        return d.call ? d.call(this, b, c) : d(b, c)
    };
    c[b][Lg(a, !1)] = d
};
Kg.prototype.h = function() {
    var a = fa("window"), b;
    b = a.setTimeout;
    b = b[Lg(this, !1)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[Lg(this, !1)] || b;
    a.setInterval = b;
    Kg.F.h.call(this)
};
var Og = function(a) {
    vb.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
    (a = a && a.stack) && y(a) && (this.stack = a)
};
A(Og, vb);
var jc=!N || N && 9 <= sb, bc=!N || N && 9 <= sb, kc = N&&!P("9");
!hb || P("528");
gb && P("1.9b") || N && P("8") || fb && P("9.5") || hb && P("528");
gb&&!P("8") || N && P("9");
var Q = function(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.U=!0
};
Q.prototype.S = function() {};
Q.prototype.preventDefault = function() {
    this.U=!1
};
var Tb = function(a) {
    Tb[" "](a);
    return a
};
Tb[" "] = Sb;
var Ub = function(a, b) {
    Q.call(this, a ? a.type : "");
    this.relatedTarget = this.i = this.target = null;
    this.keyCode = this.button = this.clientY = this.clientX = 0;
    this.L=!1;
    this.Va = this.state = null;
    a && this.init(a, b)
};
A(Ub, Q);
Ub.prototype.init = function(a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.i = b;
    var d = a.relatedTarget;
    if (d) {
        if (gb) {
            var e;
            t:
            {
                try {
                    Tb(d.nodeName);
                    e=!0;
                    break t
                } catch (f) {}
                e=!1
            }
            e || (d = null)
        }
    } else 
        "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.L = a.ctrlKey;
    this.state = a.state;
    this.Va = a;
    a.defaultPrevented && this.preventDefault()
};
Ub.prototype.preventDefault = function() {
    Ub.F.preventDefault.call(this);
    var a = this.Va;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, kc)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
var fc = "closure_listenable_" + (1E6 * Math.random() | 0), lc = 0;
var Vb = function(a, b, c, d, e) {
    this.$ = a;
    this.i = null;
    this.src = b;
    this.type = c;
    this.X=!!d;
    this.ca = e;
    this.ra=++lc;
    this.m = this.Na=!1
}, mc = function(a) {
    a.m=!0;
    a.$ = null;
    a.i = null;
    a.src = null;
    a.ca = null
};
var pc = function(a) {
    this.src = a;
    this.i = {};
    this.g = 0
};
pc.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.i[f];
    a || (a = this.i[f] = [], this.g++);
    var g = tc(a, b, d, e);
    - 1 < g ? (b = a[g], c || (b.Na=!1)) : (b = new Vb(b, this.src, f, !!d, e), b.Na = c, a.push(b));
    return b
};
pc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.i))
        return !1;
    var e = this.i[a];
    b = tc(e, b, c, d);
    return - 1 < b ? (mc(e[b]), D.splice.call(e, b, 1), 0 == e.length && (delete this.i[a], this.g--), !0) : !1
};
var xc = function(a, b) {
    var c = b.type;
    if (!(c in a.i))
        return !1;
    var d = sa(a.i[c], b);
    d && (mc(b), 0 == a.i[c].length && (delete a.i[c], a.g--));
    return d
}, tc = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.m && f.$ == b && f.X==!!c && f.ca == d)
            return e
    }
    return - 1
};
var Gc = "closure_lm_" + (1E6 * Math.random() | 0), Zb = {}, Ic = 0, Wb = function(a, b, c, d, e) {
    if (ia(b)) {
        for (var f = 0; f < b.length; f++)
            Wb(a, b[f], c, d, e);
        return null
    }
    c = xf(c);
    if (a && a[fc])
        a = a.g.add(String(b), c, !1, d, e);
    else {
        if (!b)
            throw Error("F");
        var f=!!d, g = Jc(a);
        g || (a[Gc] = g = new pc(a));
        c = g.add(b, c, !1, d, e);
        c.i || (d = Xb(), c.i = d, d.src = a, d.$ = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Sc(b.toString()), d), Ic++);
        a = c
    }
    return a
}, Xb = function() {
    var a = ac, b = bc ? function(c) {
        return a.call(b.src, b.$, c)
    }
    : function(c) {
        c =
        a.call(b.src, b.$, c);
        if (!c)
            return c
    };
    return b
}, cc = function(a, b, c, d, e) {
    if (ia(b))
        for (var f = 0; f < b.length; f++)
            cc(a, b[f], c, d, e);
    else (c = xf(c), a && a[fc]) 
        ? a.g.remove(String(b), c, d, e) : a && (a = Jc(a)) && (b = a.i[b.toString()], a =- 1, b && (a = tc(b, c, !!d, e)), (c =- 1 < a ? b[a] : null) && dc(c))
}, dc = function(a) {
    if (ca(a) ||!a || a.m)
        return !1;
    var b = a.src;
    if (b && b[fc])
        return b.ye(a);
    var c = a.type, d = a.i;
    b.removeEventListener ? b.removeEventListener(c, d, a.X) : b.detachEvent && b.detachEvent(Sc(c), d);
    Ic--;
    (c = Jc(b)) ? (xc(c, a), 0 == c.g && (c.src = null, b[Gc] =
    null)) : mc(a);
    return !0
}, Sc = function(a) {
    return a in Zb ? Zb[a] : Zb[a] = "on" + a
}, gc = function(a, b, c, d) {
    var e = 1;
    if (a = Jc(a))
        if (b = a.i[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.X == c&&!f.m && (e&=!1 !== hc(f, d))
            }
    return Boolean(e)
}, hc = function(a, b) {
    var c = a.$, d = a.ca || a.src;
    a.Na && dc(a);
    return c.call(d, b)
}, ac = function(a, b) {
    if (a.m)
        return !0;
    if (!bc) {
        var c = b || fa("window.event"), d = new Ub(c, this), e=!0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            t:
            {
                var f=!1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode =- 1;
                        break t
                } catch (g) {
                    f =
                    !0
                }
                if (f || void 0 == c.returnValue)
                    c.returnValue=!0
            }
            c = [];
            for (f = d.i; f; f = f.parentNode)
                c.push(f);
            for (var f = a.type, q = c.length - 1; 0 <= q; q--)
                d.i = c[q], e&=gc(c[q], f, !0, d);
            for (q = 0; q < c.length; q++)
                d.i = c[q], e&=gc(c[q], f, !1, d)
            }
        return e
    }
    return hc(a, new Ub(b, this))
}, Jc = function(a) {
    a = a[Gc];
    return a instanceof pc ? a : null
}, cj = "__closure_events_fn_" + (1E9 * Math.random()>>>0), xf = function(a) {
    if (ja(a))
        return a;
    a[cj] || (a[cj] = function(b) {
        return a.handleEvent(b)
    });
    return a[cj]
};
Fa(function(a) {
    ac = a(ac)
});
var ic = function() {
    E.call(this);
    this.g = new pc(this);
    this.Wb = this;
    this.M = null
};
A(ic, E);
ic.prototype[fc]=!0;
ic.prototype.addEventListener = function(a, b, c, d) {
    Wb(this, a, b, c, d)
};
ic.prototype.removeEventListener = function(a, b, c, d) {
    cc(this, a, b, c, d)
};
var G = function(a, b) {
    var c, d = a.M;
    if (d)
        for (c = []; d; d = d.M)
            c.push(d);
    var d = a.Wb, e = b, f = e.type || e;
    if (y(e))
        e = new Q(e, d);
    else if (e instanceof Q)
        e.target = e.target || d;
    else {
        var g = e, e = new Q(f, d);
        Pb(e, g)
    }
    var g=!0, q;
    if (c)
        for (var m = c.length - 1; 0 <= m; m--)
            q = e.i = c[m], g = dj(q, f, !0, e) && g;
    q = e.i = d;
    g = dj(q, f, !0, e) && g;
    g = dj(q, f, !1, e) && g;
    if (c)
        for (m = 0; m < c.length; m++)
            q = e.i = c[m], g = dj(q, f, !1, e) && g
};
ic.prototype.h = function() {
    ic.F.h.call(this);
    if (this.g) {
        var a = this.g, b = 0, c;
        for (c in a.i) {
            for (var d = a.i[c], e = 0; e < d.length; e++)
                ++b, mc(d[e]);
            delete a.i[c];
            a.g--
        }
    }
    this.M = null
};
ic.prototype.ye = function(a) {
    return xc(this.g, a)
};
var dj = function(a, b, c, d) {
    b = a.g.i[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e=!0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g&&!g.m && g.X == c) {
            var q = g.$, m = g.ca || g.src;
            g.Na && a.ye(g);
            e=!1 !== q.call(m, d) && e
        }
    }
    return e && 0 != d.U
};
var ae = function() {};
ae.prototype.i = null;
var Qa = function(a) {
    var b;
    (b = a.i) || (b = {}, de(a) && (b[0]=!0, b[1]=!0), b = a.i = b);
    return b
};
var ee, be = function() {};
A(be, ae);
var ce = function(a) {
    return (a = de(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}, de = function(a) {
    if (!a.g && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.g = d
            } catch (e) {}
        }
        throw Error("J");
    }
    return a.g
};
ee = new be;
var ke = function(a, b, c) {
    if (ja(a))
        c && (a = z(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = z(a.handleEvent, a);
    else 
        throw Error("E");
    return 2147483647 < b?-1 : w.setTimeout(a, b || 0)
};
var tb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, Bb = function(a) {
    if (ub) {
        ub=!1;
        var b = w.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = Bb(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)
                throw ub=!0, Error();
        }
    }
    return a.match(tb)
}, ub = hb, Nb = function(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
}, Lb = function(a, b, c) {
    if (ia(b))
        for (var d =
        0; d < b.length; d++)
            Lb(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}, Pd = function(a, b, c) {
    for (c = c || 0; c < b.length; c += 2)
        Lb(b[c], b[c + 1], a);
    return a
}, Mb = function(a, b) {
    for (var c in b)
        Lb(c, b[c], a);
    return a
}, Vd = function(a) {
    a = Mb([], a);
    a[0] = "";
    return a.join("")
}, Ud = function(a, b) {
    return Nb(2 == arguments.length ? Pd([a], arguments[1], 0) : Pd([a], arguments, 1))
};
var Qg = function(a) {
    ic.call(this);
    this.headers = new Hb;
    this.B = a || null;
    this.j=!1;
    this.p = this.i = null;
    this.Ub = "";
    this.k = this.Tb = this.v = this.J=!1;
    this.W = 0;
    this.D = null;
    this.va = "";
    this.aa = this.Ka=!1
};
A(Qg, ic);
var Zg = /^https?$/i, Lc = ["POST", "PUT"], Sg = [];
Qg.prototype.Ja = function() {
    this.S();
    sa(Sg, this)
};
Qg.prototype.send = function(a, b, c, d) {
    if (this.i)
        throw Error("aa`" + this.Ub + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Ub = a;
    this.J=!1;
    this.j=!0;
    this.i = this.B ? ce(this.B) : ce(ee);
    this.p = this.B ? Qa(this.B) : Qa(ee);
    this.i.onreadystatechange = z(this.ua, this);
    try {
        this.Tb=!0, this.i.open(b, String(a), !0), this.Tb=!1
    } catch (e) {
        Ug(this);
        return 
    }
    a = c || "";
    var f = this.headers.clone();
    d && Jb(d, function(a, b) {
        f.set(b, a)
    });
    d = ij(f.Z());
    c = w.FormData && a instanceof w.FormData;
    !C(Lc, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(a, b) {
        this.i.setRequestHeader(b, a)
    }, this);
    this.va && (this.i.responseType = this.va);
    "withCredentials"in this.i && (this.i.withCredentials = this.Ka);
    try {
        Mc(this), 0 < this.W && ((this.aa = Nc(this.i)) ? (this.i.timeout = this.W, this.i.ontimeout = z(this.Ia, this)) : this.D = ke(this.Ia, this.W, this)), this.v=!0, this.i.send(a), this.v=!1
    } catch (g) {
        Ug(this)
    }
};
var Nc = function(a) {
    return N && P(9) && ca(a.timeout) && ea(a.ontimeout)
}, jj = function(a) {
    return "content-type" == a.toLowerCase()
};
Qg.prototype.Ia = function() {
    "undefined" != typeof Xa && this.i && (G(this, "timeout"), this.i && this.j && (this.j=!1, this.k=!0, this.i.abort(), this.k=!1, G(this, "complete"), G(this, "abort"), Wg(this)))
};
var Ug = function(a) {
    a.j=!1;
    a.i && (a.k=!0, a.i.abort(), a.k=!1);
    Vg(a);
    Wg(a)
}, Vg = function(a) {
    a.J || (a.J=!0, G(a, "complete"), G(a, "error"))
};
Qg.prototype.h = function() {
    this.i && (this.j && (this.j=!1, this.k=!0, this.i.abort(), this.k=!1), Wg(this, !0));
    Qg.F.h.call(this)
};
Qg.prototype.ua = function() {
    this.isDisposed() || (this.Tb || this.v || this.k ? Xg(this) : this.O())
};
Qg.prototype.O = function() {
    Xg(this)
};
var Xg = function(a) {
    if (a.j && "undefined" != typeof Xa && (!a.p[1] || 4 != (a.i ? a.i.readyState : 0) || 2 != Yg(a)))
        if (a.v && 4 == (a.i ? a.i.readyState : 0))
            ke(a.ua, 0, a);
        else if (G(a, "readystatechange"), 4 == (a.i ? a.i.readyState : 0)) {
            a.j=!1;
            try {
                var b = Yg(a), c;
                t:
                switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c=!0;
                    break t;
                default:
                    c=!1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = Bb(String(a.Ub))[1] || null;
                        if (!f && self.location)
                            var g = self.location.protocol, f = g.substr(0, g.length - 1);
                            e=!Zg.test(f ? f.toLowerCase() :
                            "")
                        }
                        d = e
                }
                d ? (G(a, "complete"), G(a, "success")) : Vg(a)
            } finally {
                Wg(a)
            }
    }
}, Wg = function(a, b) {
    if (a.i) {
        Mc(a);
        var c = a.i, d = a.p[0] ? Sb: null;
        a.i = null;
        a.p = null;
        b || G(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (e) {}
    }
}, Mc = function(a) {
    a.i && a.aa && (a.i.ontimeout = null);
    ca(a.D) && (w.clearTimeout(a.D), a.D = null)
}, Yg = function(a) {
    try {
        return 2 < (a.i ? a.i.readyState : 0) ? a.i.status : - 1
    } catch (b) {
        return - 1
    }
};
Fa(function(a) {
    Qg.prototype.O = a(Qg.prototype.O)
});
var $g = function(a, b, c) {
    ic.call(this);
    this.v = b || null;
    this.k = {};
    this.p = ah;
    this.D = a;
    c || (this.i = null, N&&!P("10") ? Gg(z(this.j, this), !1, null) : (this.i = new Kg(z(this.j, this)), Pg(this.i, "setTimeout"), Pg(this.i, "setInterval"), $b(this.i), Fg(this.i)))
};
A($g, ic);
var bh = function(a) {
    Q.call(this, "t");
    this.error = a
};
A(bh, Q);
var ah = function(a, b, c, d) {
    var e = new Qg;
    Sg.push(e);
    e.g.add("ready", e.Ja, !0, void 0, void 0);
    e.send(a, b, c, d)
};
$g.prototype.j = function(a, b) {
    var c = Xd(a), d = b ? $d(b): {};
    if (this.v)
        try {
            this.v(c, d)
    } catch (e) {}
    var f = c.stack;
    try {
        var g = Ud(this.D, "script", c.fileName, "error", c.message.substring(0, 2E3), "line", c.lineNumber), q;
        t:
        {
            var m = this.k, r;
            for (r in m) {
                q=!1;
                break t
            }
            q=!0
        }
        q || (g = Nb(Mb([g], this.k)));
        q = {};
        q.trace = f;
        if (d)
            for (var ad in d)
                q["context." + ad] = d[ad];
        var u = Vd(q);
        ca(null) && (u = u.substring(0, null));
        this.p(g, "POST", u, this.B)
    } catch (B) {}
    try {
        G(this, new bh(c))
    } catch (da) {}
};
$g.prototype.h = function() {
    O(this.i);
    $g.F.h.call(this)
};
var ph = function(a, b) {
    - 1 != b.message.indexOf("Error in protected function: ") || (b.error && b.error.stack ? v(b.error) : a || v(b))
}, qh = function() {};
qh.prototype.i = null;
qh.prototype.g = null;
var oh = new qh;
(function() {
    W.init();
    var a = new $g("_/jserror", void 0, !0), a = new lh(a);
    oh.g = a;
    hj(a);
    var b = null, a = function(a) {
        w.$googDebugFname && a && a.message&&!a.fileName && (a.message += " in " + w.$googDebugFname);
        b ? a && a.message && (a.message += " [Possibly caused by: " + b + "]") : b = String(a);
        v(a)
    };
    sg("_DumpException", a);
    sg("_B_err", a);
    M([w].concat([]), Ld(Gg, Ld(ph, !0), !0));
    if (!N || P(10))
        a = new Kg(hh), a.j=!0, a.i=!0, $b(a), Pg(a, "setTimeout"), Pg(a, "setInterval"), Fg(a), oh.i = a
})();
sg("_DumpException", function(a) {
    a.errsource = a.errsource || "plusone_publisher";
    throw a;
});
} catch (e) {
    _DumpException(e)
}
try {
    function Qc(a, b) {
        return ba[a] = b
    }
    var wb = function() {
        vb.call(this)
    };
    A(wb, vb);
    wb.prototype.message = "Deferred has already fired";
    wb.prototype.name = "AlreadyCalledError";
    F.prototype.callback = Qc(0, function(a) {
        if (this.g) {
            if (!this.u)
                throw new wb;
            this.u=!1
        }
        this.g=!0;
        this.h = a;
        this.i=!1;
        za(this)
    });
    var Nf = [1, 4, 2], Rc = function(a, b) {
        var c, d, e, f;
        c = document;
        c = b || c;
        if (c.querySelectorAll && c.querySelector && a)
            return c.querySelectorAll("" + (a ? "." + a : ""));
        if (a && c.getElementsByClassName) {
            var g = c.getElementsByClassName(a);
            return g
        }
        g = c.getElementsByTagName("*");
        if (a) {
            f = {};
            for (d = e = 0; c = g[d]; d++) {
                var q = c.className;
                "function" == typeof q.split && C(q.split(/\s+/), a) && (f[e++] = c)
            }
            f.length = e;
            return f
        }
        return g
    }, H = function(a) {
        return a.parentWindow || a.defaultView
    }, I = function(a, b) {
        return y(b) ? a.getElementById(b) : b
    }, Od = function(a) {
        this.i =
        a || w.document || document
    }, cd = function(a, b) {
        var c = a.i, d = c || document;
        return d.querySelectorAll && d.querySelector ? d.querySelectorAll("." + b) : Rc(b, c)
    }, Xf = function(a, b) {
        var c = a.i, d = c || document, e = null;
        d.querySelectorAll && d.querySelector ? e = d.querySelector("." + b) : e = Rc(b, c)[0];
        return e || null
    };
    Od.prototype.createElement = function(a) {
        return this.i.createElement(a)
    };
    Od.prototype.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)
            b = b.parentNode;
        return b == a
    };
    var Td, Rd = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ma] || (a[ma]=++na)) : b.substr(0, 1) + a
    }, va = /[\x00&<>"']/, Kc = /\x00/g, Ra = /'/g, Pa = /"/g, Oa = />/g, Na = /</g, wa = /&/g, Yd = function(a) {
        this.i = new Hb;
        if (a) {
            a = Fb(a);
            for (var b = a.length, c = 0; c < b; c++)
                this.add(a[c])
        }
    };
    p = Yd.prototype;
    p.add = function(a) {
        this.i.set(Rd(a), a)
    };
    p.remove = function(a) {
        return this.i.remove(Rd(a))
    };
    p.contains = function(a) {
        a = Rd(a);
        return Db(this.i.g, a)
    };
    p.H = function() {
        return this.i.H()
    };
    p.clone = function() {
        return new Yd(this)
    };
    p.qb = function() {
        return this.i.qb(!1)
    };
    var Hc = function(a) {
        var b = ha(a);
        if ("object" == b || "array" == b) {
            if (a.clone)
                return a.clone();
            var b = "array" == b ? []: {}, c;
            for (c in a)
                b[c] = Hc(a[c]);
            return b
        }
        return a
    }, he = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        c = new c;
        a.apply(c, Array.prototype.slice.call(arguments, 1));
        return c
    }, bb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }, oc = function(a) {
        return D.concat.apply(D, arguments)
    }, oe = function(a, b) {
        for (var c = y(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in
            c && b.call(void 0, c[d], d, a)
    }, rb = function(a) {
        if (!va.test(a))
            return a;
        - 1 != a.indexOf("&") && (a = a.replace(wa, "&amp;"));
        - 1 != a.indexOf("<") && (a = a.replace(Na, "&lt;"));
        - 1 != a.indexOf(">") && (a = a.replace(Oa, "&gt;"));
        - 1 != a.indexOf('"') && (a = a.replace(Pa, "&quot;"));
        - 1 != a.indexOf("'") && (a = a.replace(Ra, "&#39;"));
        - 1 != a.indexOf("\x00") && (a = a.replace(Kc, "&#0;"));
        return a
    }, me = function() {}, le = function(a, b, c) {
        a.j = {};
        b || (b = []);
        a.k = void 0;
        a.i =- 1;
        a.Y = b;
        t: {
            if (a.Y.length) {
                b = a.Y.length - 1;
                var d = a.Y[b];
                if (d && "object" == typeof d && "number" != typeof d.length) {
                    a.h = b - a.i;
                    a.g = d;
                    break t
                }
            }
            a.h = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                d = c[b], d < a.h ? (d += a.i, a.Y[d] = a.Y[d] || []) : a.g[d] = a.g[d] || []
    }, ne = function(a) {
        return a.Y
    };
    me.prototype.toString = function() {
        return this.Y.toString()
    };
    var pe = function(a) {
        le(this, a, [])
    };
    A(pe, me);
    var qe = function(a) {
        le(this, a, [1])
    };
    A(qe, me);
    N && P(8);
    var pf = {}, og = {}, U = function() {
        throw Error("W");
    };
    U.prototype.w = null;
    U.prototype.toString = function() {
        return this.content
    };
    var Ef = function(a) {
        if (!ka(a))
            return String(a);
        if (a instanceof U) {
            if (a.N === pf)
                return a.content;
            if (a.N === og)
                return rb(a.content)
        }
        return "zSoyz"
    };
    var id = function(a) {
        if (null != a)
            switch (a.w) {
            case 1:
                return 1;
            case - 1:
                return - 1;
            case 0:
                return 0
            }
        return null
    }, hf = function() {
        U.call(this)
    };
    A(hf, U);
    hf.prototype.N = pf;
    var J = function(a) {
        return null != a && a.N === pf ? a : a instanceof ab ? Rf(a instanceof ab && a.constructor === ab && a.i === ta ? a.h : "type_error:SafeHtml", a.g) : Rf(rb(String(String(a))), id(a))
    }, Rf = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.w = d);
            return e
        }
    }(hf);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e)
                return "";
            e = new b(e);
            void 0 !== d && (e.w = d);
            return e
        }
    })(hf);
    var K = function(a) {
        this.i = a
    };
    K.prototype.toString = function() {
        return this.i
    };
    var jd = new K("r70Aqd"), od = new K("n9jY4b"), pd = new K("dDFwb"), qd = new K("sFWHh"), rd = new K("cWNpwd"), sd = new K("gzgVSd"), td = new K("e5ALg");
    var ud = function() {
        this.i = []
    }, vd = function(a) {
        var b = new qe;
        a = (a = a.i) || [];
        for (var c = [], d = 0; d < a.length; d++)
            c[d] = a[d].Y;
        b.j[1] = a;
        1 < b.h ? b.Y[1 + b.i] = c : b.g[1] = c;
        return b
    }, wd = function(a) {
        var b = ue(a, td);
        b || (b = new ud, ve(a, td, b));
        return b
    };
    var xd = function(a) {
        var b = window.__SSR, c = window.__P1_XP;
        this.p=!!b.si;
        this.u=!!b.su;
        this.Tb = b.e || null;
        this.J = b.dn || null;
        this.j = b.at || null;
        this.D=!!b.aw;
        this.v = b.amw || null;
        this.k=!!b.ah;
        var d = b.ld;
        d && (a = wd(a), d = new pe(d), a.i.push(d));
        this.C = {
            id: b.id,
            isSetByViewer: !!b.is,
            metadata: {
                globalCounts: {
                    count: b.c || 0
                }
            }
        };
        this.i = c || {};
        this.g = b.s || "widget";
        this.h = b.r || null;
        this.B = b.bp || null
    };
    var tf = function(a) {
        this.g = a
    };
    tf.prototype.i = function(a) {
        try {
            var b = {};
            b["call-stack"] = Wd();
            var c = Xd(a), d = c.stack, e = Ud(this.g, "script", c.fileName, "error", c.message, "line", c.lineNumber);
            a = {};
            a.trace = d;
            if (b)
                for (var f in b)
                    a["context." + f] = b[f];
            var g = Vd(a), q = ce(ee);
            q.open("POST", e, !0);
            q.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            q.setRequestHeader("Content-length", g.length.toString());
            q.send(g)
        } catch (m) {}
    };
    var R = function(a) {
        this.i = a
    };
    R.prototype.h = function(a) {
        return a
    };
    R.prototype.j = function(a) {
        return a
    };
    R.prototype.g = 0;
    R.prototype.update = function(a, b) {
        var c = this.i.i(a);
        b&&!b.error && b.result ? Pc(c, b.result, this.g) : Oc(c, null, this.g)
    };
    var yd = function(a) {
        this.i = a
    };
    A(yd, R);
    yd.prototype.h = function(a) {
        var b = a.params, c = b && b.optimistic, d = b && b.id;
        this.D = d;
        var e = this.i.i(d).get(), e = e ? Hc(e): {
            id: d,
            isSetByViewer: !1,
            metadata: {}
        }, f;
        f = e || {};
        f.metadata = f.metadata || {};
        f.metadata.globalCounts = f.metadata.globalCounts || {};
        this.k(e, b);
        this.v = e;
        c && (Oc(this.i.i(d), e), a = Hc(a), delete a.params.optimistic);
        this.g = this.i.i(d).i;
        return a
    };
    yd.prototype.j = function(a) {
        if (a.result) {
            var b = a.result, c = this.v;
            b.metadata = b.metadata || c.metadata;
            b.metadata.globalCounts = b.metadata.globalCounts || c.metadata.globalCounts;
            b.metadata.globalCounts.count = b.metadata.globalCounts.count || c.metadata.globalCounts.count;
            if (c = b.metadata.globalCounts.person || c.metadata.globalCounts.person)
                b.metadata.globalCounts.person = c
        }
        this.update(this.D, a);
        return a
    };
    var zd = function(a) {
        this.i = a
    };
    A(zd, yd);
    zd.prototype.k = function(a) {
        a.isSetByViewer && void 0 != a.metadata.globalCounts.count && (a.metadata.globalCounts.count = Math.max(a.metadata.globalCounts.count - 1, 0));
        a.isSetByViewer=!1
    };
    var Ad = function(a) {
        this.i = a
    };
    A(Ad, R);
    Ad.prototype.h = function(a) {
        this.k = a.params && a.params.id;
        this.g = this.i.i(this.k).i;
        return a
    };
    Ad.prototype.j = function(a) {
        this.update(this.k, a);
        return a
    };
    var Bd = function(a) {
        this.i = a
    };
    A(Bd, yd);
    Bd.prototype.k = function(a, b) {
        a.isSetByViewer || void 0 == a.metadata.globalCounts.count || a.metadata.globalCounts.count++;
        a.isSetByViewer=!0;
        a.aclJson = b.aclJson
    };
    var Cd = function(a, b) {
        ic.call(this);
        this.k = a || null;
        this.j = b || null;
        this.i = 1
    };
    A(Cd, ic);
    Cd.prototype.get = function() {
        return this.j || this.k
    };
    var Oc = function(a, b, c) {
        c && c != a.i || (a.j = b, a.i++, G(a, "change"))
    }, Pc = function(a, b, c) {
        c && c != a.i ? (a.k = b, a.j || G(a, "change")) : (a.j = null, a.i++, a.k = b, G(a, "change"))
    };
    var Dd = function() {
        this.g = []
    };
    Dd.prototype.i = 0;
    var S = function(a) {
        this.h = {};
        this.j = {};
        this.g = (a || window.googleapis).plusones
    };
    S.prototype.get = function(a) {
        return Uc(this, this.g.get(a))
    };
    S.prototype.insert = function(a) {
        return Uc(this, this.g.insert(a))
    };
    S.prototype.remove = function(a) {
        return Uc(this, this.g.remove(a))
    };
    S.prototype.i = function(a) {
        this.h[a] || (this.h[a] = new Cd);
        return this.h[a]
    };
    var V = function(a, b) {
        return a.i(b).get()
    }, Tc = function(a, b) {
        a.j[b] || (a.j[b] = new Dd);
        return a.j[b]
    };
    S.prototype.ye = function(a) {
        dc(a)
    };
    var Uc = function(a, b) {
        b.transport = {
            name: "wrapped_googleapis",
            execute: z(a.k, a, b.transport)
        };
        return b
    };
    S.prototype.k = function(a, b, c) {
        for (var d = {}, e = [], f = [], g = 0, q = b.length; g < q; ++g) {
            var m = b[g], r = Wc(this, m);
            r && (r.i++, f.push(r));
            r = m.id;
            d[r] = Vc(this, m);
            (m = d[r].h(m)) && e.push(m)
        }
        a.execute(e, z(function(a) {
            for (var b = 0, e = f.length; b < e; ++b) {
                var g = f[b];
                for (g.i--; !(1 <= g.i) && g.g.length;)
                    g.g.shift()()
            }
            var b = {}, q;
            for (q in d)(e = d[q].j(a[q] || null)
                ) && (b[q] = e);
            c(b)
        }, this))
    };
    var Vc = function(a, b) {
        switch (b.method) {
        case "pos.plusones.get":
            return new Ad(a);
        case "pos.plusones.insert":
            return new Bd(a);
        case "pos.plusones.delete":
            return new zd(a);
        default:
            return new R(a)
        }
    }, Wc = function(a, b) {
        var c = b.method, d = b.params, d = d && d.id;
        return "pos.plusones.insert" != c && "pos.plusones.delete" != c ||!d ? null : Tc(a, d)
    };
    var Ed = function(a) {
        var b = ue(a, jd);
        b || (b = new S, ve(a, jd, b));
        return b
    };
    var bj = {
        ue: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        te: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    }, Zi = bj, Zi = bj;
    var af = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [0, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [18, "kr", "kr"],
        DOP: [2, "$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [0, "Ft",
        "Ft"],
        IDR: [0, "Rp", "Rp"],
        ILS: [2, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        LVL: [2, "Ls", "Ls"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "Php"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u0440\u0443\u0431.",
        "\u0440\u0443\u0431."],
        SAR: [2, "Rial", "Rial"],
        SEK: [2, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "TL", "YTL"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u20b4", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [0, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var Pf = {
        Jc: ".",
        Mc: ",",
        Wc: "%",
        Xb: "0",
        Zc: "+",
        Rc: "-",
        Lc: "E",
        Yc: "\u2030",
        Oc: "\u221e",
        Tc: "NaN",
        Ic: "#,##0.###",
        $c: "#E0",
        Xc: "#,##0%",
        Hc: "\u00a4#,##0.00",
        Kc: "USD"
    }, T = Pf, T = Pf;
    var Ze = function() {
        this.J = T.Kc;
        this.k = 40;
        this.i = 1;
        this.O = 0;
        this.h = 3;
        this.v = this.g = 0;
        this.W=!1;
        this.Ub = this.Tb = "";
        this.D = "-";
        this.p = "";
        this.j = 1;
        this.C = 3;
        this.u = this.M=!1;
        this.B = 0;
        switch (1) {
        case 1:
            Fd(this, T.Ic);
            break;
        case 2:
            Fd(this, T.$c);
            break;
        case 3:
            Fd(this, T.Xc);
            break;
        case 4:
            var a;
            a = T.Hc;
            var b = ["0"], c = af[this.J][0] & 7;
            if (0 < c) {
                b.push(".");
                for (var d = 0; d < c; d++)
                    b.push("0")
                }
            a = a.replace(/0.00/g, b.join(""));
            Fd(this, a);
            break;
        case 5:
            hg(this, 1);
            break;
        case 6:
            hg(this, 2);
            break;
        default:
            throw Error("N");
        }
    }, Fd = function(a,
    b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.Tb = bf(a, b, c);
        for (var d = c[0], e =- 1, f = 0, g = 0, q = 0, m =- 1, r = b.length, ad=!0; c[0] < r && ad; c[0]++)
            switch (b.charAt(c[0])) {
            case "#":
                0 < g ? q++ : f++;
                0 <= m && 0 > e && m++;
                break;
            case "0":
                if (0 < q)
                    throw Error("P`" + b);
                    g++;
                    0 <= m && 0 > e && m++;
                    break;
                case ",":
                    m = 0;
                    break;
                case ".":
                    if (0 <= e)
                        throw Error("Q`" + b);
                        e = f + g + q;
                        break;
                    case "E":
                        if (a.u)
                            throw Error("R`" + b);
                            a.u=!0;
                            a.v = 0;
                            c[0] + 1 < r && "+" == b.charAt(c[0] + 1) && (c[0]++, a.W=!0);
                            for (; c[0] + 1 < r && "0" == b.charAt(c[0] + 1);)
                                c[0]++, a.v++;
                                if (1 > f + g || 1 > a.v)
                                    throw Error("S`" +
                                    b);
                                    ad=!1;
                                    break;
                                default:
                                    c[0]--, ad=!1
            }
        0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, q = f - g, f = g - 1, g = 1);
        if (0 > e && 0 < q || 0 <= e && (e < f || e > f + g) || 0 == m)
            throw Error("T`" + b);
        q = f + g + q;
        a.h = 0 <= e ? q - e : 0;
        0 <= e && (a.g = f + g - e, 0 > a.g && (a.g = 0));
        a.i = (0 <= e ? e : q) - f;
        a.u && (a.k = f + a.i, 0 == a.h && 0 == a.i && (a.i = 1));
        a.C = Math.max(0, m);
        a.M = 0 == e || e == q;
        d = c[0] - d;
        a.Ub = bf(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, a.D = bf(a, b, c), c[0] += d, a.p = bf(a, b, c)) : (a.D = a.Tb + a.D, a.p += a.Ub)
    }, hg = function(a, b) {
        a.B = b;
        Fd(a, T.Ic);
        a.g = 0;
        a.h = 2;
        if (0 < a.g)
            throw Error("Ba");
        a.O = 2
    }, rg =
    function(a, b) {
        var c = Math.pow(10, a.h), d = 0 >= a.O ? Math.round(b * c): Math.round(gh(b * c, a.O, a.h)), e;
        isFinite(d) ? (e = Math.floor(d / c), c = Math.floor(d - e * c)) : (e = b, c = 0);
        return {
            Ac: e,
            we: c
        }
    }, cf = function(a, b, c, d) {
        if (a.g > a.h)
            throw Error("M");
        b = rg(a, b);
        var e = Math.pow(10, a.h), f = b.Ac, g = b.we, q = 0 < a.g || 0 < g ||!1;
        b = a.g;
        q && (b = a.g);
        for (var m = "", r = f; 1E20 < r;)
            m = "0" + m, r = Math.round(r / 10);
        var m = r + m, ad = T.Jc, u = T.Mc, r = T.Xb.charCodeAt(0), B = m.length;
        if (0 < f || 0 < c) {
            for (f = B; f < c; f++)
                d.push(String.fromCharCode(r));
            for (f = 0; f < B; f++)
                d.push(String.fromCharCode(r +
                1 * m.charAt(f))), 1 < B - f && 0 < a.C && 1 == (B - f)%a.C && d.push(u)
        } else 
            q || d.push(String.fromCharCode(r));
        (a.M || q) && d.push(ad);
        a = "" + (g + e);
        for (c = a.length; "0" == a.charAt(c - 1) && c > b + 1;)
            c--;
        for (f = 1; f < c; f++)
            d.push(String.fromCharCode(r + 1 * a.charAt(f)))
    }, df = function(a, b, c) {
        c.push(T.Lc);
        0 > b ? (b =- b, c.push(T.Rc)) : a.W && c.push(T.Zc);
        b = "" + b;
        for (var d = T.Xb, e = b.length; e < a.v; e++)
            c.push(d);
        c.push(b)
    }, bf = function(a, b, c) {
        for (var d = "", e=!1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g)
                c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
                d += "'") : e=!e;
            else if (e)
                d += g;
            else 
                switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += a.J) : d += af[a.J][1];
                    break;
                case "%":
                    if (1 != a.j)
                        throw Error("O");
                        a.j = 100;
                        d += T.Wc;
                        break;
                    case "\u2030":
                        if (1 != a.j)
                            throw Error("O");
                            a.j = 1E3;
                            d += T.Yc;
                            break;
                        default:
                            d += g
                }
        }
        return d
    }, $i = {
        prefix: "",
        rd: "",
        ac: 0
    }, ej = function(a, b) {
        var c = 1 == a.B ? Zi.ue: Zi.te;
        if (3 > b)
            return $i;
        b = Math.min(14, b);
        c = c[Math.pow(10, b)];
        if (!c)
            return $i;
        c = c.other;
        return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
            prefix: c[1],
            rd: c[3],
            ac: b - (c[2].length - 1)
        } : $i : $i
    }, aj = function(a) {
        for (var b = 0; 1 <= (a/=10);)
            b++;
        return b
    }, gh = function(a, b, c) {
        if (!a)
            return a;
        b = b - aj(a) - 1;
        if (b<-c)
            return c = Math.pow(10, c), Math.round(a / c) * c;
        c = Math.pow(10, b);
        return Math.round(a * c) / c
    };
    var Gd = function(a, b) {
        if (a&&!a.error)
            return "";
        if (a) {
            var c = "Error in RPC: " + a.id;
            a.error && (c = a.error.message ? c + (" - " + a.error.message) : c + (" - " + a.error))
        } else 
            c = "Empty response";
        b && b.call(void 0, c);
        return c
    };
    var Hd = function(a, b) {
        this.g = a;
        this.i = b
    }, Ie = function(a, b) {
        if (iframer) {
            var c = iframer[b];
            c && c({
                type: a.g,
                id: a.i
            })
        }
    };
    var Id = function(a, b) {
        var c = /^(\/u\/\d+)\//;
        if (0 == a.lastIndexOf("/", 0)&&!a.match(c)) {
            var d = 9 == b.nodeType ? b: b.ownerDocument || b.document;
            if (c = (d ? H(d) : window).location.pathname.match(c))
                return c[1] + a
        }
        return a
    };
    var Jd = function(a) {
        this.i = a
    };
    Jd.prototype.G = function(a) {
        this.i.expandTo = a;
        return this
    };
    var Kd = function(a) {
        this.l = a || {}
    };
    Kd.prototype.value = function() {
        return this.l
    };
    Kd.prototype.getId = function() {
        return this.l.id
    };
    var ge = function(a, b) {
        a.l.fragmentParams = b
    };
    Kd.prototype.getContext = function() {
        return this.l.context
    };
    var Vf = function() {
        var a = window.location.href.match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
        return "1" === decodeURIComponent(a[a.length - 1] || "")
    };
    var X = function(a, b, c, d, e, f, g, q, m, r, ad) {
        this.k = new Hd(a, g);
        this.D = Id(b, c);
        this.v = Vf();
        a = new Kd;
        a.l.style = "bubble";
        this.j = a;
        a = new Jd(this.j.l);
        a.i.bubbletype = "pls-container";
        a.i.arrowPosition = "center";
        a.i.anchorPosition = "center";
        a.i.anchor = c;
        a.i.height = 50;
        a.i.width = d;
        a.i.closeClickDetection=!0;
        a.i.hideClickDetection=!!r;
        a.i.maxExpectedSize = {
            height: 400
        };
        a.i.showSpinner=!0;
        if (ad) {
            c = this.j.value();
            for (var u in ad)
                c[u] = ad[u]
        }
        this.g = {
            hl: "en",
            url: g,
            t: q
        };
        m && (this.g.source = m);
        document.documentMode && (this.g.hostiemode =
        document.documentMode);
        this.h = {
            mouseEvent: e,
            trackingEvent: f,
            onVisibilityChanged: z(this.Xd, this)
        };
        iframer && iframer.onshare && (this.h.onshare = iframer.onshare)
    };
    p = X.prototype;
    p.I=!1;
    p.G = function(a) {
        (new Jd(this.j.l)).G(a);
        return this
    };
    p.open = function() {
        if (!this.i&&!this.I) {
            if (this.v) {
                var a = new Kd($d(this.j.value()));
                a.l.url = this.D;
                a.l.queryParams = $d(this.g);
                var b = "", c;
                for (c in this.h)
                    this.h.hasOwnProperty(c) && (b += "," + c);
                b = b.substr(1);
                ge(a, {
                    _methods: b
                });
                a.l.messageHandlers = $d(this.h);
                a.l.messageHandlersFilter = iframes.CROSS_ORIGIN_IFRAMES_FILTER;
                a.l.relayOpen =- 1;
                var d = this;
                gapi.iframes.getContext().open(a.value(), function(a) {
                    d.i = a;
                    a.registerWasClosed(z(d.Ud, d));
                    a.registerWasRestyled(z(d.Xd, d));
                    a.restyle({
                        setHideOnLeave: !1
                    })
                })
            } else 
                this.i =
                iframes.open(this.D, $d(this.j.value()), $d(this.g), $d(this.h), z(this.Ud, this));
            this.I=!0;
            Ie(this.k, "onstartinteraction")
        }
    };
    p.Ud = function() {
        this.i && (this.i = null, Ie(this.k, "onendinteraction"));
        this.I=!1
    };
    p.Xd = function(a) {
        this.I != a && (a ? Ie(this.k, "onstartinteraction") : Ie(this.k, "onendinteraction"));
        this.I = a
    };
    p.close = function() {
        this.i && (this.i.close ? this.i.close() : this.i = null);
        this.I=!1
    };
    var Wf = function(a, b) {
        a.v ? a.i && a.i.restyle({
            show: b
        }) : a.i && a.i.send("show", b)
    };
    X.prototype.p = function(a) {
        this.v ? this.i && this.i.restyle({
            showSpinner: a
        }) : this.i && this.i.send("showSpinner", a)
    };
    var se = function(a) {
        return !a.I&&!!a.i
    }, Ne = function(a, b) {
        if (!a.I)
            return null;
        var c = a.i;
        if (!c)
            return null;
        if (a.v)
            return function(a, d) {
                "function" === typeof a && (d = a, a = void 0);
                c.send(b, a, d)
            };
        var d = c[b];
        return ja(d) ? d : null
    };
    var te = function(a, b, c, d, e, f, g, q, m) {
        X.call(this, "confirm", "/wm/2/_/+1/confirmed", a, g || 431, b, c, d, e, f, q, {
            startVisible: !!q,
            bubbleClass: m
        })
    };
    A(te, X);
    var yc = function(a, b) {
        var c;
        a instanceof yc ? (this.ea = ea(b) ? b : a.ea, zc(this, a.ta), this.lb = a.lb, this.Vb = a.Vb, Ac(this, a.gb), this.Ya = a.Ya, Bc(this, a.i.clone()), this.Xa = a.Xa) : a && (c = Bb(String(a))) ? (this.ea=!!b, zc(this, c[1] || "", !0), this.lb = ec(c[2] || ""), this.Vb = ec(c[3] || "", !0), Ac(this, c[4]), this.Ya = ec(c[5] || "", !0), Bc(this, c[6] || "", !0), this.Xa = ec(c[7] || "")) : (this.ea=!!b, this.i = new qc(null, 0, this.ea))
    };
    p = yc.prototype;
    p.ta = "";
    p.lb = "";
    p.Vb = "";
    p.gb = null;
    p.Ya = "";
    p.Xa = "";
    p.ea=!1;
    p.toString = function() {
        var a = [], b = this.ta;
        b && a.push(wc(b, nd, !0), ":");
        if (b = this.Vb) {
            a.push("//");
            var c = this.lb;
            c && a.push(wc(c, nd, !0), "@");
            a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.gb;
            null != b && a.push(":", String(b))
        }
        if (b = this.Ya)
            this.Vb && "/" != b.charAt(0) && a.push("/"), a.push(wc(b, "/" == b.charAt(0) ? ld : md, !0));
        (b = this.i.toString()) && a.push("?", b);
        (b = this.Xa) && a.push("#", wc(b, kd));
        return a.join("")
    };
    p.clone = function() {
        return new yc(this)
    };
    var zc = function(a, b, c) {
        a.ta = c ? ec(b, !0) : b;
        a.ta && (a.ta = a.ta.replace(/:$/, ""))
    }, Ac = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("u`" + b);
            a.gb = b
        } else 
            a.gb = null
    }, Bc = function(a, b, c) {
        b instanceof qc ? (a.i = b, vc(a.i, a.ea)) : (c || (b = wc(b, Cc)), a.i = new qc(b, 0, a.ea))
    }, we = function(a) {
        return a instanceof yc ? a.clone() : new yc(a, void 0)
    }, ec = function(a, b) {
        return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
    }, wc = function(a, b, c) {
        return y(a) ? (a = encodeURI(a).replace(b, nc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
        "%$1")), a) : null
    }, nc = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
    }, nd = /[#\/\?@]/g, md = /[\#\?:]/g, ld = /[\#\?]/g, Cc = /[\#\?@]/g, kd = /#/g, qc = function(a, b, c) {
        this.g = a || null;
        this.j=!!c
    }, rc = function(a) {
        if (!a.i && (a.i = new Hb, a.h = 0, a.g))
            for (var b = a.g.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="), e = null, f = null;
                0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                e = decodeURIComponent(e.replace(/\+/g, " "));
                e = sc(a, e);
                a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) :
                "")
            }
    };
    qc.prototype.i = null;
    qc.prototype.h = null;
    qc.prototype.add = function(a, b) {
        rc(this);
        this.g = null;
        a = sc(this, a);
        var c = this.i.get(a);
        c || this.i.set(a, c = []);
        c.push(b);
        this.h++;
        return this
    };
    qc.prototype.remove = function(a) {
        rc(this);
        a = sc(this, a);
        return Db(this.i.g, a) ? (this.g = null, this.h -= this.i.get(a).length, this.i.remove(a)) : !1
    };
    var cb = function(a, b) {
        rc(a);
        b = sc(a, b);
        return Db(a.i.g, b)
    };
    p = qc.prototype;
    p.Z = function() {
        rc(this);
        for (var a = this.i.H(), b = this.i.Z(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    };
    p.H = function(a) {
        rc(this);
        var b = [];
        if (y(a))
            cb(this, a) && (b = oc(b, this.i.get(sc(this, a))));
        else {
            a = this.i.H();
            for (var c = 0; c < a.length; c++)
                b = oc(b, a[c])
        }
        return b
    };
    p.set = function(a, b) {
        rc(this);
        this.g = null;
        a = sc(this, a);
        cb(this, a) && (this.h -= this.i.get(a).length);
        this.i.set(a, [b]);
        this.h++;
        return this
    };
    p.get = function(a, b) {
        var c = a ? this.H(a): [];
        return 0 < c.length ? String(c[0]) : b
    };
    p.toString = function() {
        if (this.g)
            return this.g;
        if (!this.i)
            return "";
        for (var a = [], b = this.i.Z(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.H(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.g = a.join("&")
    };
    p.clone = function() {
        var a = new qc;
        a.g = this.g;
        this.i && (a.i = this.i.clone(), a.h = this.h);
        return a
    };
    var sc = function(a, b) {
        var c = String(b);
        a.j && (c = c.toLowerCase());
        return c
    }, vc = function(a, b) {
        b&&!a.j && (rc(a), a.g = null, a.i.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.g = null, this.i.set(sc(this, e), bb(a)), this.h += a.length))
        }, a));
        a.j = b
    };
    qc.prototype.k = function(a) {
        for (var b = 0; b < arguments.length; b++)
            Jb(arguments[b], function(a, b) {
                this.add(b, a)
            }, this)
    };
    var Xc = function(a, b) {
        b || (b = {});
        var c = window, d = "undefined" != typeof a.href ? a.href: String(a), e = b.target || a.target, f = [], g;
        for (g in b)
            switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
                f.push(g + "=" + b[g]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                f.push(g + "=" + (b[g] ? 1 : 0))
            }
        f = f.join(",");
        if (b.noreferrer) {
            if (c = c.open("", e, f))
                N&&-1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = null, d = rb(d), c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'), c.document.close()
        } else 
            c = c.open(d, e, f);
        return c
    };
    var xe = function(a, b, c, d) {
        this.g = Id("/wm/2/_/+1/confirmed", a);
        this.h = {
            menubar: !1,
            resizable: !0,
            toolbar: !1,
            status: !1,
            scrollbars: !1,
            height: 400,
            width: 450
        };
        this.i = {
            hl: "en",
            url: b,
            t: c,
            popup: !0
        };
        d && (this.i.source = d)
    };
    xe.prototype.open = function() {
        var a = we(this.g);
        a.i.k(this.i);
        2E3 < [window.location.protocol, "//", window.location.host, String(a)].join("").length && (this.i.referer = "TOO_LARGE", a = we(this.g), a.i.k(this.i));
        (a = Xc(a, this.h)) && a.focus()
    };
    var ye = function(a, b, c, d, e, f, g, q, m, r) {
        var ad = {};
        e && r && r.confirmClass && (ad.bubbleClass = r.confirmClass);
        X.call(this, "hover", "/_/+1/hover", a, e ? 431 : 350, b, c, d, f, g, m, ad);
        this.g.isSet = e;
        q && (this.g.ad = q);
        if (r)
            for (var u in r)
                this.g[u] = r[u]
    };
    A(ye, X);
    var Dc = function(a) {
        E.call(this);
        this.Ka = a;
        this.aa = {}
    };
    A(Dc, E);
    var Fc = [], Ec = function(a, b, c, d, e) {
        ia(c) || (c && (Fc[0] = c.toString()), c = Fc);
        for (var f = 0; f < c.length; f++) {
            var g = Wb(b, c[f], d || a.handleEvent, e ||!1, a.Ka || a);
            if (!g)
                break;
            a.aa[g.ra] = g
        }
    };
    Dc.prototype.h = function() {
        Dc.F.h.call(this);
        var a = this.aa, b = dc, c;
        for (c in a)
            b.call(void 0, a[c], c, a);
        this.aa = {}
    };
    Dc.prototype.handleEvent = function() {
        throw Error("G");
    };
    var Y = function(a, b, c, d, e, f, g, q, m, r, ad, u, B) {
        Dc.call(this);
        this.ua = a;
        this.J = b;
        this.va = c;
        this.pb = d;
        this.ha = e;
        this.o = f;
        this.Tb = g;
        this.v = L();
        this.Sc=!q;
        this.Ia=!m;
        this.Uc=!r;
        this.O=!!ad;
        this.ve=!!u;
        this.W = B || null;
        if (this.Sc || this.Ia)
            Ec(this, a, "mouseover", this.Fd), Ec(this, a, "mouseout", this.Ed)
    };
    A(Y, Dc);
    p = Y.prototype;
    p.la=!1;
    p.Ba = 0;
    p.vb = 3E4;
    p.gc = 1E3;
    p.Fd = function() {
        this.Ba = L();
        this.la=!1;
        this.j || (this.j = ke(z(this.Dd, this), 200))
    };
    p.Dd = function() {
        if (!this.B) {
            var a = V(this.o, this.J), a=!(!a ||!a.isSetByViewer);
            this.B ||!this.Sc || this.la || this.k && this.k.I || this.D && this.D.I || (this.i && se(this.i) ? Ue(this) : (a = this.Wb(this.ua, z(this.Ja, this), this.pb, this.J, a, this.v, this.va, this.ve, this.O, this.W), Se(this, a), this.i = this.D = a, this.Ub = this.gc))
        }
    };
    p.Ed = function() {
        this.Ba = L();
        Ve(this);
        this.j && (w.clearTimeout(this.j), this.j = void 0)
    };
    var Se = function(a, b) {
        a.Tb && (b.g.referer = a.Tb);
        b.G(a.ha);
        b.open()
    }, $a = function(a, b) {
        if (!(a.B ||!a.Ia || a.k && a.k.I))
            if (a.i && se(a.i))
                Ue(a);
            else {
                a.D && a.g(!0);
                var c = b(a.ua, z(a.Ja, a), a.pb, a.J, a.v, a.va, a.O);
                Se(a, c);
                a.i = a.k = c;
                a.Ub = a.vb
            }
    }, Ue = function(a, b) {
        a.i && (Wf(a.i, !0), a.i.p(!!b))
    };
    Y.prototype.M = function(a, b, c, d, e, f, g) {
        return new te(a, b, c, d, e, f, null, g, this.W && this.W.confirmClass)
    };
    Y.prototype.Wb = function(a, b, c, d, e, f, g, q, m, r) {
        return new ye(a, b, c, d, e, f, g, q, m, r)
    };
    Y.prototype.Ja = function(a) {
        this.Ba < a.timestamp && (this.Ba = a.timestamp, "mouseover" == a.type ? this.la=!1 : "mouseout" == a.type && Ve(this))
    };
    var Ve = function(a) {
        a.la=!0;
        a.p && w.clearTimeout(a.p);
        a.p = ke(a.Vc, a.Ub, a)
    };
    Y.prototype.g = function(a, b) {
        var c = this.i;
        c && (c.I || c.i) && (a ? (!this.O || b ? (c.close(), this.D = this.k = this.i = null, this.Ba = 0) : Wf(c, !1), this.la=!1, this.p && w.clearTimeout(this.p)) : Ve(this))
    };
    Y.prototype.Vc = function() {
        if (this.la) {
            var a = this.i;
            if (a && (a = Ne(a, "canAutoClose"))) {
                a(z(this.g, this));
                return 
            }
            this.g(!0)
        }
    };
    var Ge = function(a) {
        return !(!a.i ||!a.i.I)
    };
    Y.prototype.h = function() {
        this.g(!0);
        this.i = this.D = this.k = null;
        this.j && (w.clearTimeout(this.j), this.j = void 0);
        Y.F.h.call(this)
    };
    var He = ["top", "right", "bottom", "left"], Je = function(a) {
        var b = [];
        M(a.split(","), function(a) {
            if ((a = Kb(a).toLowerCase())&&!C(b, a)) {
                if (!C(He, a))
                    throw Error("L`" + a);
                b.push(a)
            }
        });
        return b
    };
    var ed = function(a, b, c, d) {
        a = a || window;
        "number" != typeof c && (c = 800);
        "number" != typeof d && (d = 600);
        var e = a.screen.availWidth, f = a.screen.availHeight, g = Math.min(e, null != a.outerWidth ? a.outerWidth : a.document.documentElement.clientWidth), q = Math.min(f, null != a.outerHeight ? a.outerHeight : a.document.documentElement.clientHeight), m = null != a.screenY ? a.screenY: a.screenTop;
        a = Math.max(0, (null != a.screenX ? a.screenX : a.screenLeft) + (g>>1) - (c>>1));
        q = Math.max(0, m + (q>>1) - (d>>1));
        m = q + d;
        a + c > e && (a = Math.max(0, e - c));
        m > f && (q = Math.max(0, f - d));
        c = {
            left: a,
            top: q,
            menubar: !1,
            toolbar: !1,
            location: !1,
            status: !0,
            scrollbars: !0,
            width: c,
            height: d
        };
        b && (c.target = b);
        return c
    };
    var Ni = function(a, b) {
        this.h = a;
        this.g = b;
        this.constructor.Yb || (this.constructor.Yb = {});
        this.constructor.Yb[this.toString()] = this
    };
    Ni.prototype.toString = function() {
        this.i || (this.i = this.h.i + ":" + this.g);
        return this.i
    };
    var Ke = function(a, b) {
        Ni.call(this, a, b)
    };
    A(Ke, Ni);
    var Le = function(a) {
        this.i = a
    };
    new Le("lib");
    var ze = function(a) {
        E.call(this);
        this.g = {};
        this.D = {};
        this.k = {};
        this.i = {};
        this.p = {};
        this.J = {};
        this.B = a ? a.B : new ic;
        this.Ub=!a;
        this.j = null;
        a ? (this.j = a, this.k = a.k, this.i = a.i, this.D = a.D, this.p = a.p) : L();
        a = Ae(this);
        this != a && (a.v ? a.v.push(this) : a.v = [this])
    };
    A(ze, E);
    Math.random();
    var Ae = function(a) {
        for (; a.j;)
            a = a.j;
        return a
    }, Be = function(a, b) {
        for (var c = a; c;) {
            if (c == b)
                return !0;
            c = c.j
        }
        return !1
    };
    ze.prototype.get = function(a) {
        var b = ue(this, a);
        if (null == b)
            throw new Fe(a);
        return b
    };
    var ue = function(a, b) {
        for (var c = a; c; c = c.j) {
            if (c.isDisposed())
                throw Error("Ea");
            if (c.g[b])
                return c.g[b][0];
            if (c.J[b])
                break
        }
        if (c = a.k[b]) {
            c = c(a);
            if (null == c)
                throw Error("Fa`" + b);
            ve(a, b, c);
            return c
        }
        return null
    }, ve = function(a, b, c) {
        if (a.isDisposed())
            O(c);
        else {
            a.g[b] = [c, !0];
            c = Ce(a, a, b);
            for (var d = 0; d < c.length; d++)
                c[d].callback(null);
            delete a.D[b]
        }
    }, De = function(a, b) {
        if (a.ba != b.ba) {
            if (Be(a.ba, b.ba))
                return 1;
            if (Be(b.ba, a.ba))
                return - 1
        }
        return a.index < b.index?-1 : a.index == b.index ? 0 : 1
    }, Ce = function(a, b, c) {
        var d = [],
        e = a.i[c];
        e && (oe(e, function(a) {
            Be(a.ba, b) && (d.push(a.d), sa(e, a))
        }), 0 == e.length && delete a.i[c]);
        return d
    }, Ee = function(a, b) {
        a.i && Jb(a.i, function(a, d, e) {
            oe(a, function(d) {
                d.ba == b && sa(a, d)
            });
            0 == a.length && delete e[d]
        })
    };
    ze.prototype.h = function() {
        if (Ae(this) == this) {
            var a = this.v;
            if (a)
                for (; a.length;)
                    a[0].S()
        } else 
            for (var a = Ae(this).v, b = 0; b < a.length; b++)
                if (a[b] == this) {
                    a.splice(b, 1);
                    break
                }
        for (var c in this.g)
            a = this.g[c], a[1] && "undefined" != typeof a[0].S && a[0].S();
        this.g = null;
        this.Ub && this.B.S();
        Ee(this, this);
        this.i = null;
        O(this.Tb);
        this.J = this.Tb = null;
        ze.F.h.call(this)
    };
    var Fe = function(a) {
        vb.call(this);
        this.id = a;
        this.message = 'Service for "' + a + '" is not registered'
    };
    A(Fe, vb);
    var Me = new Le("fva");
    new Ke(Me, 1);
    Fa(function() {});
    var je = [], Bf = [], Af=!1, ie = function() {
        function a(b) {
            b.he || (b.he=!0, b.oa && M(b.oa.H(), a), q.push(b))
        }
        var b = {}, c, d;
        for (c = je.length - 1; 0 <= c; --c) {
            var e = je[c];
            if (e.ia.i) {
                var f = e.ia.i;
                for (d = f.length - 1; 0 <= d; --d)
                    b[f[d].id] = e
            }
            if (e.ia.k)
                for (f = e.ia.k, d = f.length - 1; 0 <= d; --d)
                    b[f[d].id] = e
        }
        for (c = je.length - 1; 0 <= c; --c) {
            e = je[c];
            f = e.ia;
            if (f.g)
                for (e.oa = new Yd, d = f.g.length - 1; 0 <= d; --d) {
                    var g = b[f.g[d]];
                    g && e.oa.add(g)
                }
            if (f.h)
                for (e.oa || (e.oa = new Yd), d = f.h.length - 1; 0 <= d; --d)(g = b[f.h[d]]) 
                    && e.oa.add(g)
            }
        var q = [];
        M(je, a);
        je = q
    };
    var Oe = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return y(a) && a.match(/\S+/g) || []
    }, Pe = function(a, b) {
        return a.classList ? a.classList.contains(b) : C(Oe(a), b)
    }, Qe = function(a, b) {
        a.classList ? a.classList.add(b) : Pe(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, Re = function(a, b) {
        a.classList ? a.classList.remove(b) : Pe(a, b) && (a.className = Wa(Oe(a), function(a) {
            return a != b
        }).join(" "))
    };
    var Of = ["click", gb ? "keypress": "keydown", "keyup"], We = function(a, b, c, d) {
        var e = function(a) {
            var d = xf(b), e = a.target, e = ka(e) && 1 == e.nodeType ? a.target.getAttribute("role") || null: null;
            "click" == a.type && (jc ? 0 == a.Va.button : "click" == a.type || a.Va.button & Nf[0])&&!(hb && jb && a.L) ? d.call(c, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != e && "tab" != e || (d.call(c, a), a.preventDefault()) : (a.type = "keypress", d.call(c, a))
        };
        e.i = b;
        e.g = c;
        d ? Ec(d, a, Of, e, void 0) : Wb(a, Of, e, void 0)
    };
    var ef = function(a) {
        this.i = a
    }, gf = /\s*;\s*/;
    p = ef.prototype;
    p.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a))
            throw Error("U`" + a);
        if (/[;\r\n]/.test(b))
            throw Error("V`" + b);
        ea(c) || (c =- 1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(L() + 1E3 * c)).toUTCString();
        this.i.cookie = a + "=" + b + e + d + c + f
    };
    p.get = function(a, b) {
        for (var c = a + "=", d = (this.i.cookie || "").split(gf), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        var d = ea(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    };
    p.Z = function() {
        return ff(this).keys
    };
    p.H = function() {
        return ff(this).values
    };
    var ff = function(a) {
        a = (a.i.cookie || "").split(gf);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
            d = e.indexOf("="), - 1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var uf = function(a) {
        Dc.call(this);
        var b = gadgets.util.getUrlParameters() || {};
        this.M = b;
        var c = ue(a, od);
        this.Sc = z(c.i, c);
        var d = a.get(rd);
        this.j = d;
        this.O=!(b.db && "0" != b.db && "" != b.db && "false" != b.db);
        this.ve = b.ecp&&!("0" == b.ecp || "false" == b.ecp || "" == b.ecp);
        this.Tb = "string" == typeof b.ad && "false" != b.ad.toLowerCase();
        this.i = Ed(a);
        var e = a.get(sd);
        this.v = e;
        gapi.config.update("googleapis.config/auth/useFirstPartyAuth", !0);
        var c = e.C, f = c.id;
        this.k = f;
        var g = this.i.i(f);
        if (g) {
            Ec(this, g, "change", this.qa);
            this.pb = a.get(qd);
            var q = H(d.i);
            this.D = a.get(pd);
            this.Vc = new Ze;
            d = d || Td || (Td = new Od);
            this.p = I(d.i, "button");
            this.Ja = wd(a);
            this.Ub = e.p;
            this.D.i = e.u;
            a = z(this.Hd, this);
            this.D.g.add("plus_signed_up", a, !1, void 0, void 0);
            a = z(this.Hd, this);
            this.D.g.add("signup_cancelled", a, !1, void 0, void 0);
            a = e.J;
            this.Wb = e.Tb || "";
            this.Ia = a || "";
            vf(this, V(this.i, f));
            this.La = L();
            Ec(this, q, "unload", this.S);
            f = z(this.A, this);
            We(this.p, f, this.Ka || this, this);
            (f = this.O&&!!this.v.i.UH) && this.p.setAttribute("title", "");
            b = b.expandto ? Je(b.expandto) : [];
            q = e.B || {};
            q.gsrc = gapi.config.get("iframes/:source:");
            q.confirmClass = "grey";
            this.g = this.mc(this.p, this.k, e.g, z(this.ha, this), b, this.i, e.h, !f, !(this.O && this.v.i.UC), !(!this.O && this.ve && this.v.i.UCP), this.Tb, q);
            e = Ld(O, this.g);
            this.u || (this.u = []);
            this.u.push(ea(void 0) ? z(e, void 0) : e);
            Pc(g, c);
            sg("SB_verify", z(this.o, this))
        }
    };
    A(uf, Dc);
    uf.prototype.J=!1;
    var Xe = {
        me: "mEc",
        ne: "jd",
        ERROR: "uk",
        oe: "Nl"
    }, zf = function() {
        var a = new ze;
        if (!Af) {
            ie();
            for (var b = 0; b < je.length; ++b) {
                var c = je[b].ia;
                if (c.i)
                    for (var d = a, e = c.i, f = 0; f < e.length; ++f) {
                        var g = e[f], q = g.id;
                        if (!d.g[q]&&!d.k[q]&&!g.re)
                            if (g.Qd)
                                d.D[g.id] = g.Qd;
                            else if (g.multiple) {
                                var q = d, m = g.id;
                                q.k[m] = g.callback || Ld(he, g.fd);
                                if (g = q.i[m]) {
                                    var r = g;
                                    if (1 < r.length) {
                                        for (var ad = 0; ad < r.length; ++ad)
                                            r[ad].index = ad;
                                            r.sort(De)
                                        }
                                        for (; g.length;)
                                            g.shift().d.callback(null);
                                            delete q.i[m]
                                }
                            } else 
                                ve(d, g.id, g.callback ? g.callback(d) : new g.fd(d))
                            }
                c.j &&
                c.j(a)
            }
            for (b = 0; b < je.length; ++b)
                c = je[b], c.ia.initialize && c.ia.initialize(a);
            for (b = 0; b < Bf.length; ++b)
                Bf[b](a);
            Af=!0
        }
        b = document ? new Od(9 == document.nodeType ? document : document.ownerDocument || document.document) : Td || (Td = new Od);
        ve(a, rd, b);
        ve(a, od, new tf("/_/jserror"));
        c = new xd(a);
        ve(a, sd, c);
        ve(a, qd, new ef(b.i));
        return a
    }, Ye = function(a, b) {
        var c = b || {};
        c.id = a.k;
        c.source = a.v.g;
        c.track = window.JSON.stringify(ne(vd(a.Ja)));
        var d = a.v.h;
        d && (c.container = d);
        return c
    };
    uf.prototype.Uc = function(a) {
        if (!this.B(a, !0)) {
            this.Ub && this.D.i == a.signedUp || (this.g.v = L());
            this.Ub=!0;
            this.D.i = a.signedUp;
            var b = a.displayName;
            this.Wb = a.email || "";
            this.Ia = b || "";
            vf(this, V(this.i, this.k));
            this.J && (this.A(), this.J=!1)
        }
    };
    uf.prototype.qa = function() {
        this.g.v = L();
        if (this.W) {
            var a = this.W - L();
            if (0 < a) {
                H(this.j.i).setTimeout(z(this.qa, this), a);
                return 
            }
            this.W = 0
        }((a = V(this.i, this.k)) || this.ua) && this.Sb(a)
    };
    uf.prototype.Sb = function(a) {
        !a.isSetByViewer && Ge(this.g) && this.g.g(!0, !0);
        Df(this, a);
        Ff(this, a)
    };
    var Df = function(a, b) {
        if (b && b.metadata && b.metadata.globalCounts && void 0 != b.metadata.globalCounts.count) {
            var c = b.metadata.globalCounts.count, d = I(a.j.i, "aggregateCount");
            if (d) {
                var e;
                e = (e = "en".match(/^\w{2,3}([-_]|$)/)) ? e[0].replace(/[_-]/g, "") : "";
                var f;
                if ("en" != e) {
                    f = a.Vc;
                    var g = c;
                    if (isNaN(g))
                        f = T.Tc;
                    else {
                        var q = [], m;
                        var r = g, ad = g;
                        0 == f.B ? m = $i : (r = Math.abs(r), ad = Math.abs(ad), m = ej(f, 1 >= r ? 0 : aj(r)).ac, rg(f, ad / Math.pow(10, m)), r = rg(f, r / Math.pow(10, m)), m = ej(f, m + aj(r.Ac)));
                        g/=Math.pow(10, m.ac);
                        q.push(m.prefix);
                        r =
                        0 > g || 0 == g && 0 > 1 / g;
                        q.push(r ? f.D : f.Tb);
                        if (isFinite(g))
                            if (g = g * (r?-1 : 1) * f.j, f.u)
                                if (0 == g)
                                    cf(f, g, f.i, q), df(f, 0, q);
                                else {
                                    var ad = Math.log(g) / Math.log(10), ad = Math.floor(ad + 2E-15), g = g / Math.pow(10, ad), u = f.i;
                                    if (1 < f.k && f.k > f.i) {
                                        for (; 0 != ad%f.k;)
                                            g*=10, ad--;
                                            u = 1
                                    } else 
                                        1 > f.i ? (ad++, g/=10) : (ad -= f.i - 1, g*=Math.pow(10, f.i - 1));
                                        cf(f, g, u, q);
                                        df(f, ad, q)
                                } else 
                                    cf(f, g, f.i, q);
                        else 
                            q.push(T.Oc);
                        q.push(r ? f.p : f.Ub);
                        q.push(m.rd);
                        f = q.join("")
                    }
                } else 
                    f = Math.floor(10 * c), 1E7 <= f ? f/=1E6 : 1E4 <= f && (f/=1E3), f = Math.floor(f), f = 10 <= f && 100 > f && 0 != f%10 ?
                    "" + (f / 10).toPrecision(2) : "" + Math.floor(f / 10);
                c = c.toString().length;
                q = "";
                q = "en" == e ? 9 < c ? q + "Lots" : 6 < c ? q + (J(f) + "M") : 3 < c ? q + (J(f) + "k") : q + J(f) : 4 < c ? q + "10K+" : q + J(f);
                e = Rf(q);
                d.innerHTML = Ef(e)
            }
        }
        if (b) {
            d = cd(a.j, "checked");
            e = cd(a.j, "unchecked");
            if (d && e) {
                for (c = 0; c < d.length; c++)
                    d[c].style.display = b.isSetByViewer ? "" : "none";
                for (c = 0; c < e.length; c++)
                    e[c].style.display = b.isSetByViewer ? "none" : ""
            }
            r = a.v.D;
            d = a.v.k;
            e = a.v.v;
            if (r || d)
                c = I(a.j.i, "widget_bounds"), f = c.style, q = f.display, g = f.whiteSpace, f.display = "inline-block", f.whiteSpace =
                "nowrap", m = {}, r && (r = c.offsetWidth + 1, m.width = e ? Math.min(r, e) : r), d && (m.height = c.offsetHeight), iframes.resize(m), f.display = q, f.whiteSpace = g
        }
    }, Ff = function(a, b) {
        if (I(a.j.i, "plusone")) {
            var c = Xf(a.j, "Gib"), d;
            if (a.ua) {
                d = "uk";
                a.p.setAttribute("title", "+1");
                try {
                    a.g.g(!0, !0)
                } catch (e) {
                    throw $e(c, d), e;
                }
            } else 
                a.i.i(a.k).get() && Gf(a) ? (d = "Nl", a.W = L() + 650, jf(a)) : (b.isSetByViewer ? (d = "jd", a.p.setAttribute("aria-pressed", "true")) : (d = "mEc", a.p.setAttribute("aria-pressed", "false")), vf(a, b));
            c && $e(c, d)
        }
    }, $e = function(a,
    b) {
        for (var c in Xe) {
            var d = Xe[c];
            b == d ? Qe(a, b) : Re(a, d)
        }
    }, vf = function(a, b) {
        var c = a.dc(!!b && b.isSetByViewer, a.Ia, a.Wb);
        a.O && a.v.i.UC || a.O && a.v.i.UH ? a.p.setAttribute("aria-label", c) : a.p.setAttribute("title", c)
    };
    uf.prototype.dc = function(a, b, c) {
        var d = "";
        a ? b && c ? (a = "You publicly +1'd this as " + (J(b) + (" (" + (J(c) + "). Click again to undo."))), d += a) : c ? (a = "You publicly +1'd this as " + (J(c) + ". Click again to undo."), d += a) : d += "You publicly +1'd this. Click again to undo." : b && c ? (a = "Click here to publicly +1 this as " + (J(b) + (" (" + (J(c) + ")."))), d += a) : c ? (a = "Click here to publicly +1 this as " + (J(c) + "."), d += a) : d += "Click here to publicly +1 this.";
        return Rf(d).toString()
    };
    uf.prototype.ha = function(a) {
        a = new pe(a);
        this.Ja.i.push(a)
    };
    uf.prototype.A = function() {
        if (!Gf(this)&&!Hf(this)&&!If(this)) {
            var a = V(this.i, this.k);
            a && lf(this, a.isSetByViewer ? this.wa : this.V, a.isSetByViewer)
        }
    };
    var lf = function(a, b, c, d) {
        var e;
        e = Tc(a.i, a.k);
        b = z(b, a, d);
        1 <= e.i ? 1 <= e.g.length ? e = 2 : (e.g.push(b), e = 1) : (b(), e = 0);
        2 != e && (c ? H(a.j.i).setTimeout(z(a.qa, a), 150) : (a = a.g, !a.B && a.Uc && (c = new xe(a.ua, a.J, a.v, a.va), a.Tb && (c.i.referer = a.Tb), c.open())))
    }, Hf = function(a) {
        if (!a.Ub&&!ea(a.pb.get("BEAT")) ||!a.D.i) {
            var b = H(a.j.i);
            if (b.iframer && b.iframer.onpopup)
                b.iframer.onpopup();
            a.J=!0;
            b = a.D;
            a = H(a.j.i);
            var c = b.v + "/_/+1/messageproxy";
            if (!b.j) {
                var d = document.createElement("div");
                d.style.position = "absolute";
                d.style.left =
                "-1000px";
                d.style.top = "-1000px";
                d.style.width = "1px";
                d.style.height = "1px";
                document.body.appendChild(d);
                if (Vf())
                    c = {
                        url: c,
                        where: d,
                        messageHandlers: {
                            handleMessage: z(b.p, b)
                        },
                        messageHandlersFilter: window.gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
                    }, b.j = window.gapi.iframes.getContext().openChild(c);
                else {
                    var e = window.iframes;
                    b.j = e.open.apply(e, [c, {
                        container: d
                    }, {}, {
                        handleMessage: z(b.p, b)
                    }
                    ])
                }
            }
            var f;
            b.j.getId ? f = b.j.getId() : f = b.j.getId();
            f = b.v + "/up/?type=st&client=" + b.Tb + "&gpsrc=" + encodeURIComponent(b.Ub) + "&parent=" +
            encodeURIComponent(b.O) + "&proxy=" + f + "&wlbsl=1";
            b.D && (f += "&rsz=1");
            f += window.__P1_LOCALE ? "&hl=" + window.__P1_LOCALE : "";
            b = ed(a, "GooglePlusPopupSignup", b.J[0], b.J[1]);
            (a = window.iframer) && a.send && a.send("drefresh");
            (b = Xc(f, b)) && b.focus();
            return !0
        }
        return !1
    }, If = function(a) {
        if (!a.ua)
            return !1;
        (a = Xc("https://www.google.com/support/profiles/?p=plusone_button_error&hl=en", ed(window, "GooglePlusOneHelp", 800, 600))) && a.focus();
        return !0
    }, Jf = function(a) {
        var b = parseInt(a, 10);
        if (b == a)
            return String(b)
    };
    p = uf.prototype;
    p.Hd = function() {
        if (!this.Ub || this.D.i)
            this.g.v = L();
        this.Ub=!0;
        this.g.g(!0, !0);
        if (this.D.i) {
            var a = this.i;
            Uc(a, a.g.getSignupState({
                source: this.v.g,
                nolog: !0
            })).execute(Lf(this, this.Uc))
        } else 
            this.J && (lf(this, this.V, !1, this.na), this.J=!1);
        this.Cc()
    };
    p.na = function(a) {
        if (!a.error)
            this.D.i=!0;
        else if (401 != a.error.code)
            return this.B(a);
        return ""
    };
    p.Cc = function() {
        var a = {
            id: this.getId()
        };
        this.i.get(a).execute(Lf(this, this.B))
    };
    p.V = function(a) {
        var b = V(this.i, this.k);
        if (b&&!b.isSetByViewer) {
            var b = L() - this.La, b = Ye(this, {
                optimistic: !0,
                cdx: b.toString(16),
                profileVersion: this.D.B || void 0
            }), c = this.v.j;
            c && (b.abtk = c);
            this.Tb && (b.ad = this.Tb);
            this.M.cr && (b.cr = Jf(this.M.cr));
            this.M.ag && (b.ag = Jf(this.M.ag));
            this.g.g(!0, !0);
            c = this.g;
            $a(c, z(c.M, c));
            this.i.insert(b).execute(Lf(this, a || this.B));
            Kf(this, !0)
        }
    };
    p.wa = function() {
        var a = V(this.i, this.k);
        a && a.isSetByViewer && (a = L() - this.La, a = Ye(this, {
            cdx: a.toString(16),
            profileVersion: this.D.B || void 0
        }), this.Tb && (a.ad = this.Tb), this.i.remove(a).execute(Lf(this, this.B)), Kf(this, !1));
        this.g.g(!0, !0)
    };
    var Kf = function(a, b) {
        var c = H(a.j.i);
        if (c.iframer && c.iframer.onPlusOne)
            c.iframer.onPlusOne({
                state: b ? "on": "off",
                href: a.k
            })
    };
    uf.prototype.B = function(a, b) {
        var c = Gd(a, function() {});
        b || (this.ua = c, this.g.B=!!c, this.qa());
        c && this.g.g(!0, !0);
        return c
    };
    var Gf = function(a) {
        var b = a.k, c = Tc(a.i, b), d;
        if (!(d=!!a.W||!!c.g.length)) {
            if (c=!!c.i)
                c=!a.i.i(b).j;
            d = c
        }
        return d
    };
    uf.prototype.h = function() {
        this.i = null;
        uf.F.h.call(this)
    };
    var Lf = function(a, b) {
        return z(function() {
            try {
                b.apply(this, arguments)
            } catch (a) {
                try {
                    a.errsource = "plusone_publisher", this.Sc(a)
                } catch (d) {}
            }
        }, a)
    };
    uf.prototype.mc = function(a, b, c, d, e, f, g, q, m, r, ad, u) {
        return new Y(a, b, c, d, e, f, g, q, m, r, !0, ad, u)
    };
    uf.prototype.getId = function() {
        return this.k
    };
    uf.prototype.o = function(a) {
        return this.k == a
    };
    var jf = function(a) {
        if (N && P(9)) {
            var b = I(a.j.i, "Q0N8Vc").transform.baseVal.getItem(0), c = b.matrix, d = function() {
                setTimeout(function() {
                    Gf(a) && (window.requestAnimationFrame ? requestAnimationFrame(d) : d(), b.setMatrix(c.translate(7, 7).rotate(18).translate( - 7, - 7)))
                }, 100)
            };
            d()
        }
    };
    var dd = function() {
        this.i = {}
    };
    var fd = function(a, b) {
        ic.call(this);
        this.Ub = a;
        this.v = "https://plus.google.com";
        var c = window;
        this.O = c.location.protocol + "//" + c.location.host;
        this.Tb = b;
        this.J = [1100, 850];
        this.D=!1
    };
    A(fd, ic);
    var hd = /^\/_\/im(?=\/|$)/;
    fd.prototype.i=!1;
    fd.prototype.k = null;
    fd.prototype.p = function(a) {
        try {
            var b = new dd;
            b.i = Object(a);
            this.i=!!b.i.created;
            this.B = String(b.i.version || "");
            G(this, new Q(this.i ? "plus_signed_up" : "signup_cancelled"))
        } catch (c) {
            if (this.k)
                try {
                    this.k(c)
                } catch (d) {}
        }
    };
    var mf = (window.gapi || {}).config;
    var Mf = function(a) {
        var b = a.get(sd).g || "widget", c = a.get(od), c = z(c.i, c), b = new fd(b, 1);
        b.D=!0;
        c && (b.k = c);
        if (c = mf.get("iframes/:signuphost:")) {
            var d = c;
            d.match(/.*\/$/) && (d = d.substr(0, d.length - 1));
            var c = Bb(d), e = c[5] || "", f = hd.exec(e);
            if (f) {
                c[5] = e.substr(f[0].length);
                var d = c[1], e = c[2], f = c[3], g = c[4], q = c[5], m = c[6], c = c[7], r = "";
                d && (r += d + ":");
                f && (r += "//", e && (r += e + "@"), r += f, g && (r += ":" + g));
                q && (r += q);
                m && (r += "?" + m);
                c && (r += "#" + c);
                d = r
            }
            b.v = d
        }
        c=!!mf.get("isPlusUser");
        b.i = c;
        a && ve(a, pd, b)
    };

} catch (e) {
    _DumpException(e)
}
try {
    var Sf = function(a) {
        uf.call(this, a)
    };
    A(Sf, uf);
    var Tf = function() {
        var a = zf();
        Mf(a);
        new Sf(a);
        return a
    };
} catch (e) {
    _DumpException(e)
}
try {
    Tf();
} catch (e) {
    _DumpException(e)
}
// Google Inc.

