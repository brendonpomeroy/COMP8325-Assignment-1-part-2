var f = this, aa = function(a) {
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
                        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                            return "array";
                            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                return "function"
        } else 
            return "null";
            else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
};
Math.random();
var h = function(a, b) {
    var c = a.split("."), d = f;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}, k = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.n = b.prototype;
    a.prototype = new c;
    a.m = function(a, c, g) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var l = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, l);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
k(l, Error);
var ba = function(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)
        d += c.shift() + e.shift();
    return d + c.join("%s")
}, n = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, q = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
};
Math.random();
var r = function(a, b) {
    b.unshift(a);
    l.call(this, ba.apply(null, b));
    b.shift()
};
k(r, l);
var v = function(a, b, c) {
    if (!a) {
        var d = "Assertion failed";
        if (b)
            var d = d + (": " + b), e = Array.prototype.slice.call(arguments, 2);
        throw new r("" + d, e || []);
    }
};
var w;
i: {
    var x = f.navigator;
    if (x) {
        var y = x.userAgent;
        if (y) {
            w = y;
            break i
        }
    }
    w = ""
};
var ca =- 1 != w.indexOf("Opera")||-1 != w.indexOf("OPR"), z =- 1 != w.indexOf("Trident")||-1 != w.indexOf("MSIE"), A =- 1 != w.indexOf("Gecko")&&-1 == w.toLowerCase().indexOf("webkit")&&!( - 1 != w.indexOf("Trident")||-1 != w.indexOf("MSIE")), B =- 1 != w.toLowerCase().indexOf("webkit"), da = B&&-1 != w.indexOf("Mobile"), D = function() {
    var a = f.document;
    return a ? a.documentMode : void 0
}, E = function() {
    var a = "", b;
    if (ca && f.opera)
        return a = f.opera.version, "function" == aa(a) ? a() : a;
    A ? b = /rv\:([^\);]+)(\)|;)/ : z ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ :
    B && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(w)) ? a[1] : "");
    return z && (b = D(), b > parseFloat(a)) ? String(b) : a
}(), F = {}, G = function(a) {
    if (!F[a]) {
        for (var b = 0, c = n(String(E)).split("."), d = n(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
            var s = c[g] || "", t = d[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), C = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = m.exec(s) || ["", "", ""], u = C.exec(t) || ["", "", ""];
                if (0 == p[0].length && 0 == u[0].length)
                    break;
                b = q(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || q(0 ==
                p[2].length, 0 == u[2].length) || q(p[2], u[2])
            }
            while (0 == b)
            }
        F[a] = 0 <= b
    }
}, H = f.document, ea = H && z ? D() || ("CSS1Compat" == H.compatMode ? parseInt(E, 10) : 5) : void 0;
var I;
if (!(I=!A&&!z)) {
    var J;
    if (J = z)
        J = z && 9 <= ea;
    I = J
}
I || A && G("1.9.1");
z && G("9");
var K;
K=!1;
var L = w;
L && ( - 1 != L.indexOf("Firefox")||-1 != L.indexOf("Camino")||-1 != L.indexOf("iPad")||-1 != L.indexOf("iPhone")||-1 != L.indexOf("iPod")||-1 != L.indexOf("Chrome")||-1 != L.indexOf("Android")||-1 != L.indexOf("Safari") && (K=!0));
var fa = K;
var N = function(a) {
    var b = window;
    if (da && fa && b) {
        b.focus();
        var c = 0, d = null, d = b.setInterval(function() {
            a.closed || 5 == c ? (b.clearInterval(d), M(a)) : (a.close(), c++)
        }, 150)
    } else 
        a.close(), M(a)
}, M = function(a) {
    if (!a.closed && a.document && a.document.body)
        if (a = a.document.body, v(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent"in a)
            a.textContent = "Please close this window.";
        else if (3 == a.nodeType)
            a.data = "Please close this window.";
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild !=
            a.firstChild;)
                a.removeChild(a.lastChild);
                a.firstChild.data = "Please close this window."
        } else {
            for (var b; b = a.firstChild;)
                a.removeChild(b);
                v(a, "Node cannot be null or undefined.");
                a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode("Please close this window."))
        }
};
var O, P = function(a) {
    a = a || [];
    for (var b = [], c = 0, d = a.length; c < d; ++c) {
        var e = String(a[c] || "");
        e && b.push(e)
    }
    if (!b.length)
        return null;
    O ? O.reset.call(O) : O = shindig.sha1();
    O.update.call(O, b.join(" "));
    return O.digestString.call(O).toLowerCase()
}, Q = function(a, b, c) {
    this.i = String(a || "");
    this.e = String(b || "");
    this.a = String(c || "");
    this.d = {};
    this.g = this.k = this.f = this.h = "";
    this.c = null
};
Q.prototype.evaluate = function() {
    var a = {}, b = "";
    try {
        b = String(document.cookie || "")
    } catch (c) {}
    for (var b = b.split("; ").join(";").split(";"), d = 0, e = b.length; d < e; ++d) {
        var g = b[d], s = g.indexOf("=");
        - 1 != s ? a[g.substr(0, s)] = g.substr(s + 1) : a[g] = null
    }
    this.d = a;
    if (this.d.SID)
        if (this.e = this.e.split(".")[0].split("@")[0], a = "", a = 0 == this.i.indexOf("https://") ? "SAPISID" : "APISID", this.f = String(this.d[a] || ""))
            if (a = "", a = 0 == gadgets.rpc.getOrigin(String(window.location.href)).indexOf("https://") ? "SAPISID" : "APISID", this.h = String(this.d[a] ||
            "")) {
                b = String(this.d.LSOLH || "").split(":");
                d = b.length;
                if (1 == d || 4 == d)
                    this.k = b[0];
                    if (3 == d || 4 == d)
                        a = String(b[d - 3] || ""), b = String(b[d - 1] || ""), (d = P([a, this.h]).substr(0, 4)) && d == b && (this.g = a);
                        this.a && (a = this.a.indexOf("."), - 1 != a && (a = this.a.substr(0, a) || "", this.a = a + "." + P([this.f, this.i, this.e, this.k, this.g, a]).substr(0, 4)));
                        a = P([this.f, this.i, this.e, this.a]);
                        this.a && (a = a + "." + this.a);
                        this.c = a
            } else 
                this.c = "";
                else 
                    this.c = ""
};
var R = function(a, b, c) {
    a = new Q(a, b, c);
    a.evaluate();
    return a
}, T = function(a, b, c) {
    c = c || S(this);
    var d = null;
    if (a) {
        a = String(a);
        var e = a.indexOf(".");
        - 1 != e && (d = a.substr(e + 1))
    }
    b = R(c, b, d).c;
    if (null == a || "" == a)
        a = b == a;
    else if (null == b || b.length != a.length)
        a=!1;
    else {
        d = c = 0;
        for (e = a.length; d < e; ++d)
            c|=a.charCodeAt(d)^b.charCodeAt(d);
        a = 0 == c
    }
    return a
}, U = function(a, b, c) {
    c = c || S(this);
    c = R(c);
    if (String(a) != c.c)
        throw Error("Unauthorized request");
    b = String(b);
    a = parseInt(b, 10);
    String(a) == b && 0 <= a ? (b = c.g) ? (b = b.split("|"), a = b.length <=
    a ? null : b[a] || null) : a = null : a = null;
    return a
}, S = function(a) {
    a = String(a.origin || "");
    if (!a)
        throw Error("RPC has no origin.");
    return a
};
h("checkSessionState", T);
h("getVersionInfo", U);
var V, W, X, Y, Z, $, ga = window, ha = (window.location.href || ga.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
"1" === decodeURIComponent(ha[ha.length - 1] || "") ? (X = function(a, b, c, d, e, g) {
    V.send(b, e, d, g || gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, Y = function(a, b) {
    V.register(a, b, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, Z = function(a) {
    var b = /^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a), b = gapi.iframes.makeWhiteListIframesFilter([b ? b[0]: null]);
    X("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a, b)
}, W = function() {
    ia()
}, $ = function() {
    X("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    Y("check_session_state",
    ja);
    Y("get_versioninfo", ka)
}) : (X = function(a, b, c, d, e) {
    gadgets.rpc.call(a, b + ":" + c, d, e)
}, Y = function(a, b) {
    gadgets.rpc.register(a, b)
}, Z = function(a) {
    gadgets.rpc.getTargetOrigin("..") == gadgets.rpc.getOrigin(a) && X("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a)
}, W = function() {
    $()
}, $ = function() {
    X("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    Y("check_session_state", T);
    Y("get_versioninfo", U)
});
var ia = function() {
    var a = $;
    window.gapi.load("gapi.iframes", function() {
        V = gapi.iframes.getContext().getParentIframe();
        a()
    })
}, la = function(a) {
    window.setTimeout(function() {
        Z(a)
    }, 1)
}, ja = function(a) {
    var b, c;
    a && (b = a.session_state, c = a.client_id);
    return T(b, c, V.getOrigin())
}, ka = function(a) {
    return U(a.xapisidHash, a.sessionIndex, V.getOrigin())
};
h("oauth2callback", la);
h("oauth2verify", function(a, b) {
    var c = window.open("javascript:void(0);", a), d;
    if (c&&!c.closed && (d = c.oauth2callbackUrl))
        return window.b = window.b || {}, window.j = window.j || window.setTimeout, window.setTimeout = function(a, b) {
            try {
                var d = a, t=!1, m;
                a = function() {
                    if (!t) {
                        t=!0;
                        try {
                            window.b[String(m)] = void 0, delete window.b[String(m)]
                        } catch (a) {}
                        return d.call(this)
                    }
                };
                var C = c.setTimeout(a, b);
                m = window.j(a, b);
                window.b[String(m)] = C;
                return m
            } catch (p) {}
            return window.j(a, b)
        }, window.l = window.l || window.clearTimeout, window.clearTimeout =
        function(a) {
            try {
                var b = window.b[String(a)];
                b && c.clearTimeout(b)
            } catch (d) {}
            try {
                window.b[String(a)] = void 0, delete window.b[String(a)]
            } catch (t) {}
            window.l(a)
        }, la(String(d)), "keep_open" != b && N(c), !0;
    c&&!c.closed && N(c);
    return !1
});
window.addEventListener ? window.addEventListener("load", W, !1) : window.attachEvent("onload", W);

