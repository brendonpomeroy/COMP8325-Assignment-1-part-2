/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    var ia, la;
    _.b = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    var _DumpException = function(a) {
        throw a;
    };
    _.aa = [];
    _.na = _.na || {};
    _.D = this;
    _.kf = function(a) {
        return void 0 !== a
    };
    _.da = function(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return c;
                        var f = Object.prototype.toString.call(a);
                        if ("[object Window]" == f)
                            return "object";
                            if ("[object Array]" == f || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == f || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == c && "undefined" == typeof a.call)
    return "object";
return c
};
_.ea = function(a) {
    return "array" == _.da(a)
};
_.fa = function(a) {
    return "string" == typeof a
};
_.oa = "closure_uid_" + (1E9 * Math.random()>>>0);
ia = function(a, c, f) {
    return a.call.apply(a.bind, arguments)
};
la = function(a, c, f) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var g = Array.prototype.slice.call(arguments, 2);
        return function() {
            var f = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(f, g);
            return a.apply(c, f)
        }
    }
    return function() {
        return a.apply(c, arguments)
    }
};
_.H = function(a, c, f) {
    _.H = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ia : la;
    return _.H.apply(null, arguments)
};
_.ma = function(a, c) {
    var f = Array.prototype.slice.call(arguments, 1);
    return function() {
        var c = f.slice();
        c.push.apply(c, arguments);
        return a.apply(this, c)
    }
};
_.pa = Date.now || function() {
    return + new Date
};
_.J = function(a, c) {
    function f() {}
    f.prototype = c.prototype;
    a.T = c.prototype;
    a.prototype = new f;
    a.prototype.constructor = a;
    a.yc = function(a, f, l) {
        for (var n = Array(arguments.length - 2), q = 2; q < arguments.length; q++)
            n[q - 2] = arguments[q];
        return c.prototype[f].apply(a, n)
    }
};
_.ra = window.gadgets || {};
_.L = window.osapi = window.osapi || {};
_.google = window.google || {};
window.___jsl = window.___jsl || {};
(window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: {
        parsetags: "explicit"
    },
    appsapi: {
        plus_one_service: "/plus/v1"
    },
    client: {
        jsonpOverride: !1,
        rms: "migrated"
    },
    csi: {
        rate: .01
    },
    poshare: {
        hangoutContactPickerServer: "https://plus.google.com"
    },
    gappsutil: {
        required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
        display_on_page_ready: !1
    },
    appsutil: {
        required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
        display_on_page_ready: !1
    },
    "oauth-flow": {
        authUrl: "https://accounts.google.com/o/oauth2/auth",
        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
        redirectUri: "postmessage"
    },
    iframes: {
        sharebox: {
            params: {
                json: "&"
            },
            url: ":socialhost:/:session_prefix:_/sharebox/dialog"
        },
        plus: {
            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
        },
        ":socialhost:": "https://apis.google.com",
        ":im_socialhost:": "https://plus.googleapis.com",
        domains_suggest: {
            url: "https://domains.google.com/suggest/flow"
        },
        card: {
            params: {
                s: "#",
                userid: "&"
            },
            url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
        },
        ":signuphost:": "https://plus.google.com",
        ":gplus_url:": "https://plus.google.com",
        plusone: {
            url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
        },
        plus_share: {
            url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
        },
        plus_circle: {
            url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
        },
        plus_followers: {
            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
        },
        configurator: {
            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
        },
        appcirclepicker: {
            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
        },
        page: {
            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
        },
        person: {
            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
        },
        community: {
            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
        },
        follow: {
            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
        },
        commentcount: {
            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
        },
        comments: {
            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
        },
        youtube: {
            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
        },
        reportabuse: {
            url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
        },
        additnow: {
            url: ":socialhost:/additnow/additnow.html"
        },
        udc_webconsentflow: {
            url: "https://www.google.com/settings/webconsent?usegapi=1"
        },
        ":source:": "1p"
    },
    poclient: {
        update_session: "google.updateSessionCallback"
    },
    "googleapis.config": {
        methods: {
            "pos.plusones.list": !0,
            "pos.plusones.get": !0,
            "pos.plusones.insert": !0,
            "pos.plusones.delete": !0,
            "pos.plusones.getSignupState": !0
        },
        requestCache: {
            enabled: !0
        },
        versions: {
            pos: "v1"
        },
        rpc: "/rpc",
        root: "https://content.googleapis.com",
        "root-1p": "https://clients6.google.com",
        sessionCache: {
            enabled: !0
        },
        transport: {
            isProxyShared: !0
        },
        xd3: "/static/proxy.html",
        developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
        auth: {
            useInterimAuth: !1
        }
    },
    report: {
        apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
        rate: 1E-4
    }
});

window.___jsl = window.___jsl || {};
(window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: {
        parsetags: "onload"
    },
    iframes: {
        ":source:": "3p"
    },
    client: {
        rms: ""
    }
});
_.ba = function(a, c) {
    return c
};
_.Mu = function(a, c) {
    var f = a.split("."), g = _.D;
    f[0]in g ||!g.execScript || g.execScript("var " + f[0]);
    for (var h; f.length && (h = f.shift());)
        !f.length && _.kf(c) ? g[h] = c : g[h] ? g = g[h] : g = g[h] = {}
};
_.e = function(a, c) {
    c = _.ba(a, c);
    _.Mu(a, c)
};
_.ta = window;
_.ua = window.document;
_.Ha = _.ta.location;
_.Ia = /\[native code\]/;
_.Ka = function(a, c, f) {
    return a[c] = a[c] || f
};
_.r = function() {
    var a;
    if ((a = Object.create) && _.Ia.test(a))
        a = a(null);
    else {
        a = {};
        for (var c in a)
            a[c] = void 0
    }
    return a
};
_.Qa = function(a, c) {
    return Object.prototype.hasOwnProperty.call(a, c)
};
_.Sa = function(a, c) {
    if (!a)
        throw Error(c || "");
};
_.Ua = _.Ka(_.ta, "gapi", {});
_.Wa = function(a, c, f) {
    var g = new RegExp("([#].*&|[#])" + c + "=([^&#]*)", "g");
    c = new RegExp("([?#].*&|[?#])" + c + "=([^&#]*)", "g");
    if (a = a && (g.exec(a) || c.exec(a)))
        try {
            f = (0, window.decodeURIComponent)(a[2])
    } catch (h) {}
    return f
};
_.Za = function(a, c, f) {
    _.Xa(a, c, f, "add", "at")
};
_.Xa = function(a, c, f, g, h) {
    if (a[g + "EventListener"])
        a[g + "EventListener"](c, f, !1);
    else if (a[h + "tachEvent"])
        a[h + "tachEvent"]("on" + c, f)
};
_.bb = _.Ka(_.ta, "___jsl", _.r());
_.Ka(_.bb, "I", 0);
_.Ka(_.bb, "hel", 10);
var ya, za, Aa, Ba, Da, Ea;
ya = function(a) {
    var c = window.___jsl = window.___jsl || {};
    c[a] = c[a] || [];
    return c[a]
};
za = function(a) {
    var c = window.___jsl = window.___jsl || {};
    c.cfg=!a && c.cfg || {};
    return c.cfg
};
Aa = function(a) {
    return "object" === typeof a && /\[native code\]/.test(a.push)
};
Ba = function(a, c) {
    if (c)
        for (var f in c)
            c.hasOwnProperty(f) && (a[f] && c[f] && "object" === typeof a[f] && "object" === typeof c[f]&&!Aa(a[f])&&!Aa(c[f]) ? Ba(a[f], c[f]) : c[f] && "object" === typeof c[f] ? (a[f] = Aa(c[f]) ? [] : {}, Ba(a[f], c[f])) : a[f] = c[f])
};
Da = function(a) {
    if (a&&!/^\s+$/.test(a)) {
        for (; 0 == a.charCodeAt(a.length - 1);)
            a = a.substring(0, a.length - 1);
        var c;
        try {
            c = window.JSON.parse(a)
        } catch (f) {}
        if ("object" === typeof c)
            return c;
        try {
            c = (new Function("return (" + a + "\n)"))()
        } catch (g) {}
        if ("object" === typeof c)
            return c;
        try {
            c = (new Function("return ({" + a + "\n})"))()
        } catch (h) {}
        return "object" === typeof c ? c : {}
    }
};
Ea = function(a) {
    za(!0);
    var c = window.___gcfg, f = ya("cu");
    if (c && c !== window.___gu) {
        var g = {};
        Ba(g, c);
        f.push(g);
        window.___gu = c
    }
    var c = ya("cu"), h = window.document.scripts || window.document.getElementsByTagName("script") || [], g = [], l = [];
    l.push.apply(l, ya("us"));
    for (var n = 0; n < h.length; ++n)
        for (var q = h[n], t = 0; t < l.length; ++t)
            q.src && 0 == q.src.indexOf(l[t]) && g.push(q);
    0 == g.length && 0 < h.length && h[h.length - 1].src && g.push(h[h.length - 1]);
    for (h = 0; h < g.length; ++h)
        g[h].getAttribute("gapi_processed") || (g[h].setAttribute("gapi_processed",
        !0), (l = g[h]) ? (n = l.nodeType, l = 3 == n || 4 == n ? l.nodeValue : l.textContent || l.innerText || l.innerHTML || "") : l = void 0, (l = Da(l)) && c.push(l));
    a && (g = {}, Ba(g, a), f.push(g));
    g = ya("cd");
    a = 0;
    for (c = g.length; a < c; ++a)
        Ba(za(), g[a]);
    g = ya("ci");
    a = 0;
    for (c = g.length; a < c; ++a)
        Ba(za(), g[a]);
    a = 0;
    for (c = f.length; a < c; ++a)
        Ba(za(), f[a])
};
_.P = function(a, c) {
    if (!a)
        return za();
    for (var f = a.split("/"), g = za(), h = 0, l = f.length; g && "object" === typeof g && h < l; ++h)
        g = g[f[h]];
    return h === f.length && void 0 !== g ? g : c
};
_.Fa = function(a, c) {
    var f = a;
    if ("string" === typeof a) {
        for (var g = f = {}, h = a.split("/"), l = 0, n = h.length; l < n - 1; ++l)
            var q = {}, g = g[h[l]] = q;
        g[h[l]] = c
    }
    Ea(f)
};
var Ga = function() {
    var a = window.__GOOGLEAPIS;
    a && (a.googleapis&&!a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.Ka(_.bb, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
};
Ga && Ga();
Ea();
_.e("gapi.config.get", _.P);
_.e("gapi.config.update", _.Fa);
var ib, jb, Nb, sb, Fb, Hb, Kb, Na, Pa, Wb, Yb, qb, Ma, cc, Lc;
_.cb = function(a) {
    return !!a && "object" === typeof a && _.Ia.test(a.push)
};
_.eb = function(a, c, f) {
    if (a) {
        _.Sa(_.cb(a), "arrayForEach was called with a non array value");
        for (var g = 0; g < a.length; g++)
            c.call(f, a[g], g)
    }
};
_.fb = function(a, c, f) {
    if (a)
        if (_.cb(a))
            _.eb(a, c, f);
        else {
            _.Sa("object" === typeof a, "objectForEach was called with a non object value");
            f = f || a;
            for (var g in a)
                _.Qa(a, g) && void 0 !== a[g] && c.call(f, a[g], g)
        }
};
ib = function(a) {
    a = a.sort();
    for (var c = [], f = void 0, g = 0; g < a.length; g++) {
        var h = a[g];
        h != f && c.push(h);
        f = h
    }
    return c
};
jb = function() {
    var a = [], c = _.bb.H;
    c && _.fb(c, function(c) {
        a.push.apply(a, c.L)
    });
    return ib(a)
};
_.kb = function(a) {
    if (_.Ia.test(Object.keys))
        return Object.keys(a);
    var c = [], f;
    for (f in a)
        _.Qa(a, f) && c.push(f);
    return c
};
Na = {};
Pa = 0;
Wb = _.r();
Yb = _.r();
qb = function(a) {
    return "number" === typeof a && a > Math.random()
};
_.La = function(a) {
    if ("undefined" === typeof Nb) {
        var c = _.P("report") || {}, f = c.rate;
        Hb = c.timeout || 1E3;
        sb = c.host || "https://plus.google.com";
        Fb = c.path || "/_/widget/report";
        Nb = [];
        qb(f) && (Nb = c.apis || []);
        var c = c.apiRate || {}, g;
        for (g in c)
            qb(c[g]) && Nb.push(g)
    }
    for (g = 0; g < Nb.length; ++g)
        if ((new RegExp("^" + Nb[g] + "$")).test(a))
            return !0;
    return !1
};
Ma = function(a) {
    delete Na[a]
};
cc = function() {
    Kb && (_.ta.clearTimeout(Kb), Kb = 0);
    Kb = _.ta.setTimeout(function() {
        var a;
        a = window.document.location;
        a = a.protocol + "//" + a.host + a.pathname;
        var c = _.kb(Yb).join(":");
        a = [sb, Fb, "?api=", (0, window.encodeURIComponent)(c), "&url=", (0, window.encodeURIComponent)(a), "&loaded=", (0, window.encodeURIComponent)(jb().join(":"))].join("");
        Yb = _.r();
        var c = new window.Image, f = Pa++;
        Na[f] = c;
        c.onload = c.onerror = _.ma(Ma, f);
        c.src = a;
        Kb = 0
    }, Hb)
};
_.wc = function(a) {
    Wb[a] || (Yb[a]=!0, Wb[a]=!0, cc())
};
Lc = _.ba;
_.ba = function(a, c) {
    var f = Lc(a, c);
    "function" === typeof c && _.La(a) && (f = function(f) {
        _.wc(a);
        return c.apply(this, arguments)
    });
    return f
};

_.V = {};
_.Sb = {};
window.iframer = _.Sb;
var pe;
_.re = function(a) {
    var c = _.da(a);
    return "array" == c || "object" == c && "number" == typeof a.length
};
pe = 0;
_.oe = function(a) {
    return a[_.oa] || (a[_.oa]=++pe)
};
_.Vg = function(a) {
    var c = typeof a;
    return "object" == c && null != a || "function" == c
};
_.vd = function(a) {
    return "function" == _.da(a)
};
_.qe = function(a) {
    return "number" == typeof a
};
_.jd = function(a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
_.Ge = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
_.Gf = function(a, c) {
    return Array(c + 1).join(a)
};
_.ne = 2147483648 * Math.random() | 0;
_.Cg = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, f) {
        return f.toUpperCase()
    })
};
_.ye = Array.prototype;
_.we = _.ye.indexOf ? function(a, c, f) {
    return _.ye.indexOf.call(a, c, f)
} : function(a, c, f) {
    f = null == f ? 0 : 0 > f ? Math.max(0, a.length + f) : f;
    if (_.fa(a))
        return _.fa(c) && 1 == c.length ? a.indexOf(c, f) : - 1;
    for (; f < a.length; f++)
        if (f in a && a[f] === c)
            return f;
    return - 1
};
_.Wf = _.ye.lastIndexOf ? function(a, c, f) {
    return _.ye.lastIndexOf.call(a, c, null == f ? a.length - 1 : f)
} : function(a, c, f) {
    f = null == f ? a.length - 1 : f;
    0 > f && (f = Math.max(0, a.length + f));
    if (_.fa(a))
        return _.fa(c) && 1 == c.length ? a.lastIndexOf(c, f) : - 1;
    for (; 0 <= f; f--)
        if (f in a && a[f] === c)
            return f;
    return - 1
};
_.Be = _.ye.forEach ? function(a, c, f) {
    _.ye.forEach.call(a, c, f)
} : function(a, c, f) {
    for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
        l in h && c.call(f, h[l], l, a)
};
_.Ce = _.ye.filter ? function(a, c, f) {
    return _.ye.filter.call(a, c, f)
} : function(a, c, f) {
    for (var g = a.length, h = [], l = 0, n = _.fa(a) ? a.split("") : a, q = 0; q < g; q++)
        if (q in n) {
            var t = n[q];
            c.call(f, t, q, a) && (h[l++] = t)
        }
    return h
};
_.De = _.ye.map ? function(a, c, f) {
    return _.ye.map.call(a, c, f)
} : function(a, c, f) {
    for (var g = a.length, h = Array(g), l = _.fa(a) ? a.split("") : a, n = 0; n < g; n++)
        n in l && (h[n] = c.call(f, l[n], n, a));
    return h
};
_.Ee = _.ye.some ? function(a, c, f) {
    return _.ye.some.call(a, c, f)
} : function(a, c, f) {
    for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
        if (l in h && c.call(f, h[l], l, a))
            return !0;
    return !1
};
_.Fe = _.ye.every ? function(a, c, f) {
    return _.ye.every.call(a, c, f)
} : function(a, c, f) {
    for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
        if (l in h&&!c.call(f, h[l], l, a))
            return !1;
    return !0
};
_.ve = function(a, c) {
    return 0 <= (0, _.we)(a, c)
};
_.Gl = function(a, c) {
    for (var f = 1; f < arguments.length; f++) {
        var g = arguments[f];
        if (_.re(g)) {
            var h = a.length || 0, l = g.length || 0;
            a.length = h + l;
            for (var n = 0; n < l; n++)
                a[h + n] = g[n]
        } else 
            a.push(g)
    }
};

var Ke, Ze, Le, Me, Re, Xe, Ye;
_.d = function(a, c) {
    return _.aa[a] = c
};
Ke = /[\x00&<>"']/;
Ze = /\x00/g;
Le = /'/g;
Me = /"/g;
Re = />/g;
Xe = /</g;
Ye = /&/g;
_.He = function(a) {
    if (!Ke.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(Ye, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(Xe, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(Re, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(Me, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(Le, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(Ze, "&#0;"));
    return a
};
_.Li = function(a) {
    var c = [], f = 0, g;
    for (g in a)
        c[f++] = a[g];
    return c
};
_.Ki = function(a) {
    var c = [], f = 0, g;
    for (g in a)
        c[f++] = g;
    return c
};
_.hi = function(a, c) {
    for (var f in a)
        if (a[f] == c)
            return !0;
    return !1
};
_.uf = function(a) {
    var c = arguments.length;
    if (1 == c && _.ea(arguments[0]))
        return _.uf.apply(null, arguments[0]);
    for (var f = {}, g = 0; g < c; g++)
        f[arguments[g]]=!0;
    return f
};
t: {
    var Ne = _.D.navigator;
    if (Ne) {
        var $e = Ne.userAgent;
        if ($e) {
            _.We = $e;
            break t
        }
    }
    _.We = ""
}
_.pf = function(a) {
    return - 1 != _.We.indexOf(a)
};
_.Oe = function() {
    return _.pf("Trident") || _.pf("MSIE")
};
_.ih = [];
_.kh = [];
_.jh=!1;
_.hh = function(a) {
    _.ih[_.ih.length] = a;
    if (_.jh)
        for (var c = 0; c < _.kh.length; c++)
            a((0, _.H)(_.kh[c].wrap, _.kh[c]))
};
var tp, $o, ep, Yo;
_.se = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, _.se);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a))
};
_.J(_.se, Error);
_.se.prototype.name = "CustomError";
_.vC = function(a) {
    return a
};
_.rf = function(a) {
    var c = {}, f;
    for (f in a)
        c[f] = a[f];
    return c
};
_.Og = function(a) {
    for (var c in a)
        return !1;
    return !0
};
_.RE = function(a) {
    for (var c = {}, f = 0, g = 0; g < a.length;) {
        var h = a[g++], l = _.Vg(h) ? "o" + _.oe(h): (typeof h).charAt(0) + h;
        Object.prototype.hasOwnProperty.call(c, l) || (c[l]=!0, a[f++] = h)
    }
    a.length = f
};
tp = function(a) {
    _.D.setTimeout(function() {
        throw a;
    }, 0)
};
_.qk = function(a) {
    a = Yo(a);
    !_.vd(_.D.setImmediate) || _.D.Window && _.D.Window.prototype.setImmediate == _.D.setImmediate ? ($o || ($o = ep()), $o(a)) : _.D.setImmediate(a)
};
ep = function() {
    var a = _.D.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
        var a = window.document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        window.document.documentElement.appendChild(a);
        var c = a.contentWindow, a = c.document;
        a.open();
        a.write("");
        a.close();
        var f = "callImmediate" + Math.random(), g = "file:" == c.location.protocol ? "*": c.location.protocol + "//" + c.location.host, a = (0, _.H)(function(a) {
            if (("*" == g || a.origin == g) &&
            a.data == f)
                this.port1.onmessage()
        }, this);
        c.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                c.postMessage(f, g)
            }
        }
    });
    if ("undefined" !== typeof a&&!_.Oe()) {
        var c = new a, f = {}, g = f;
        c.port1.onmessage = function() {
            if (_.kf(f.next)) {
                f = f.next;
                var a = f.xC;
                f.xC = null;
                a()
            }
        };
        return function(a) {
            g.next = {
                xC: a
            };
            g = g.next;
            c.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof window.document && "onreadystatechange"in window.document.createElement("script") ? function(a) {
        var c = window.document.createElement("script");
        c.onreadystatechange = function() {
            c.onreadystatechange = null;
            c.parentNode.removeChild(c);
            c = null;
            a();
            a = null
        };
        window.document.documentElement.appendChild(c)
    } : function(a) {
        _.D.setTimeout(a, 0)
    }
};
Yo = _.vC;
_.hh(function(a) {
    Yo = a
});
var Qp = function(a, c) {
    um || Pm();
    up || (um(), up=!0);
    Lp.push(new Pp(a, c))
}, um, Pm = function() {
    if (_.D.Promise && _.D.Promise.resolve) {
        var a = _.D.Promise.resolve();
        um = function() {
            a.then(Ap)
        }
    } else 
        um = function() {
            _.qk(Ap)
        }
}, up=!1, Lp = [], Ap = function() {
    for (; Lp.length;) {
        var a = Lp;
        Lp = [];
        for (var c = 0; c < a.length; c++) {
            var f = a[c];
            try {
                f.Ip.call(f.scope)
            } catch (g) {
                tp(g)
            }
        }
    }
    up=!1
}, Pp = function(a, c) {
    this.Ip = a;
    this.scope = c
};
_.Rp = function(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable=!0
};
_.Wp = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (c) {
        return !1
    }
};
_.C = function(a, c) {
    this.G = 0;
    this.Ka = void 0;
    this.B = this.ha = null;
    this.M = this.qa=!1;
    try {
        var f = this;
        a.call(c, function(a) {
            hq(f, 2, a)
        }, function(a) {
            hq(f, 3, a)
        })
    } catch (g) {
        hq(this, 3, g)
    }
};
_.C.prototype.then = function(a, c, f) {
    return uq(this, _.vd(a) ? a : null, _.vd(c) ? c : null, f)
};
_.Rp(_.C);
_.C.prototype.cancel = function(a) {
    0 == this.G && Qp(function() {
        var c = new tq(a);
        Mq(this, c)
    }, this)
};
var Mq = function(a, c) {
    if (0 == a.G)
        if (a.ha) {
            var f = a.ha;
            if (f.B) {
                for (var g = 0, h =- 1, l = 0, n; n = f.B[l]; l++)
                    if (n = n.pu)
                        if (g++, n == a && (h = l), 0 <= h && 1 < g)
                            break;
                            0 <= h && (0 == f.G && 1 == g ? Mq(f, c) : (g = f.B.splice(h, 1)[0], Wq(f, g, 3, c)))
                        }
        } else 
            hq(a, 3, c)
    }, lr = function(a, c) {
    a.B && a.B.length || 2 != a.G && 3 != a.G || er(a);
    a.B || (a.B = []);
    a.B.push(c)
}, uq = function(a, c, f, g) {
    var h = {
        pu: null,
        vE: null,
        BE: null
    };
    h.pu = new _.C(function(a, n) {
        h.vE = c ? function(f) {
            try {
                var h = c.call(g, f);
                a(h)
            } catch (v) {
                n(v)
            }
        } : a;
        h.BE = f ? function(c) {
            try {
                var h = f.call(g, c);
                !_.kf(h) && c instanceof
                tq ? n(c) : a(h)
            } catch (v) {
                n(v)
            }
        } : n
    });
    h.pu.ha = a;
    lr(a, h);
    return h.pu
};
_.C.prototype.wc = function(a) {
    this.G = 0;
    hq(this, 2, a)
};
_.C.prototype.Ld = function(a) {
    this.G = 0;
    hq(this, 3, a)
};
var hq = function(a, c, f) {
    if (0 == a.G) {
        if (a == f)
            c = 3, f = new TypeError("Promise cannot resolve to itself");
        else {
            if (_.Wp(f)) {
                a.G = 1;
                f.then(a.wc, a.Ld, a);
                return 
            }
            if (_.Vg(f))
                try {
                    var g = f.then;
                    if (_.vd(g)) {
                        mr(a, f, g);
                        return 
                    }
            } catch (h) {
                c = 3, f = h
            }
        }
        a.Ka = f;
        a.G = c;
        er(a);
        3 != c || f instanceof tq || wq(a, f)
    }
}, mr = function(a, c, f) {
    a.G = 1;
    var g=!1, h = function(c) {
        g || (g=!0, a.wc(c))
    }, l = function(c) {
        g || (g=!0, a.Ld(c))
    };
    try {
        f.call(c, h, l)
    } catch (n) {
        l(n)
    }
}, er = function(a) {
    a.qa || (a.qa=!0, Qp(a.ye, a))
};
_.C.prototype.ye = function() {
    for (; this.B && this.B.length;) {
        var a = this.B;
        this.B = [];
        for (var c = 0; c < a.length; c++)
            Wq(this, a[c], this.G, this.Ka)
    }
    this.qa=!1
};
var Wq = function(a, c, f, g) {
    if (2 == f)
        c.vE(g);
    else {
        if (c.pu)
            for (; a && a.M; a = a.ha)
                a.M=!1;
        c.BE(g)
    }
}, wq = function(a, c) {
    a.M=!0;
    Qp(function() {
        a.M && nr.call(null, c)
    })
}, nr = tp, tq = function(a) {
    _.se.call(this, a)
};
_.J(tq, _.se);
tq.prototype.name = "cancel";

_.R = _.R || {};
_.R = _.R || {};
(function() {
    function a(a, c) {
        return String.fromCharCode(c)
    }
    var c = {
        0: !1,
        10: !0,
        13: !0,
        34: !0,
        39: !0,
        60: !0,
        62: !0,
        92: !0,
        8232: !0,
        8233: !0,
        65282: !0,
        65287: !0,
        65308: !0,
        65310: !0,
        65340: !0
    };
    _.R.escape = function(a, c) {
        if (a) {
            if ("string" === typeof a)
                return _.R.Qf(a);
            if ("Array" === typeof a)
                for (var h = 0, l = a.length; h < l; ++h)
                    a[h] = _.R.escape(a[h]);
            else if ("object" === typeof a && c) {
                h = {};
                for (l in a)
                    a.hasOwnProperty(l) && (h[_.R.Qf(l)] = _.R.escape(a[l], !0));
                return h
            }
        }
        return a
    };
    _.R.Qf = function(a) {
        if (!a)
            return a;
        for (var g = [], h, l, n = 0, q = a.length; n < q; ++n)
            h = a.charCodeAt(n), l = c[h], !0 === l ? g.push("&#", h, ";") : !1 !== l && g.push(a.charAt(n));
        return g.join("")
    };
    _.R.su = function(c) {
        return c ? c.replace(/&#([0-9]+);/g, a) : c
    }
})();

_.R = _.R || {};
(function() {
    function a(c) {
        var f = "";
        if (3 == c.nodeType || 4 == c.nodeType)
            f = c.nodeValue;
        else if (c.innerText)
            f = c.innerText;
        else if (c.innerHTML)
            f = c.innerHTML;
        else if (c.firstChild) {
            f = [];
            for (c = c.firstChild; c; c = c.nextSibling)
                f.push(a(c));
            f = f.join("")
        }
        return f
    }
    _.R.createElement = function(a) {
        var f;
        if (!window.document.body || window.document.body.namespaceURI)
            try {
                f = window.document.createElementNS("http://www.w3.org/1999/xhtml", a)
        } catch (g) {}
        return f || window.document.createElement(a)
    };
    _.R.Fh = function(a) {
        var f = _.R.createElement("iframe");
        try {
            var g = ["<", "iframe"], h = a || {}, l;
            for (l in h)
                h.hasOwnProperty(l) && (g.push(" "), g.push(l), g.push('="'), g.push(_.R.Qf(h[l])), g.push('"'));
            g.push("></");
            g.push("iframe");
            g.push(">");
            var n = _.R.createElement(g.join(""));
            n && (!f || n.tagName == f.tagName && n.namespaceURI == f.namespaceURI) && (f = n)
        } catch (q) {}
        g = f;
        a = a || {};
        for (var t in a)
            a.hasOwnProperty(t) && (g[t] = a[t]);
        return f
    };
    _.R.Jk = function() {
        if (window.document.body)
            return window.document.body;
        try {
            var a = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
            if (a && 1 == a.length)
                return a[0]
        } catch (f) {}
        return window.document.documentElement || window.document
    };
    _.R.Qt = function(c) {
        return a(c)
    }
})();

_.Mb = function() {
    function a(a, c) {
        if (!(a < f) && g)
            if (2 === a && g.warn)
                g.warn(c);
            else if (3 === a && g.error)
                try {
                    g.error(c)
        } catch (n) {} else 
            g.log && g.log(c)
    }
    var c = function(c) {
        a(1, c)
    };
    _.Lb = function(c) {
        a(2, c)
    };
    _.sa = function(c) {
        a(3, c)
    };
    _.Fc = function() {};
    c.INFO = 1;
    c.WARNING = 2;
    c.NONE = 4;
    var f = 1, g = window.console ? window.console: window.opera ? window.opera.postError: void 0;
    return c
}();

_.R = _.R || {};
(function() {
    var a = [];
    _.R.du = function(c) {
        a.push(c)
    };
    _.R.ku = function() {
        for (var c = 0, f = a.length; c < f; ++c)
            a[c]()
    }
})();
_.xd = function(a) {
    for (var c = 0; c < this.length; c++)
        if (this[c] === a)
            return c;
    return - 1
};
_.Sc = function(a, c) {
    var f = _.Ka(_.bb, "watt", _.r());
    _.Ka(f, a, c)
};
_.R = _.R || {};
(function() {
    var a = null;
    _.R.dc = function(c) {
        var f = "undefined" === typeof c;
        if (null !== a && f)
            return a;
        var g = {};
        c = c || window.location.href;
        var h = c.indexOf("?"), l = c.indexOf("#");
        c = ( - 1 === l ? c.substr(h + 1) : [c.substr(h + 1, l - h - 1), "&", c.substr(l + 1)].join("")).split("&");
        for (var h = window.decodeURIComponent ? window.decodeURIComponent : window.unescape, l = 0, n = c.length; l < n; ++l) {
            var q = c[l].indexOf("=");
            if ( - 1 !== q) {
                var t = c[l].substring(0, q), q = c[l].substring(q + 1), q = q.replace(/\+/g, " ");
                try {
                    g[t] = h(q)
                } catch (v) {}
            }
        }
        f && (a = g);
        return g
    };
    _.R.dc()
})();
_.e("gadgets.util.getUrlParameters", _.R.dc);
_.Kd = window.console;
_.kd = function(a) {
    _.Kd && _.Kd.log && _.Kd.log(a)
};
_.ke = function() {};
_.Pb = function() {
    var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
    a && _.Fa(a());
    return {
        register: function(a, f, g) {
            g && g(_.P())
        },
        get: function(a) {
            return _.P(a)
        },
        update: function(a, f) {
            if (f)
                throw "Config replacement is not supported";
            _.Fa(a)
        },
        kc: function() {}
    }
}();
_.e("gadgets.config.register", _.Pb.register);
_.e("gadgets.config.get", _.Pb.get);
_.e("gadgets.config.init", _.Pb.kc);
_.e("gadgets.config.update", _.Pb.update);
var Ed = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
}, Nd = function(a) {
    var c, f, g;
    c = /[\"\\\x00-\x1f\x7f-\x9f]/g;
    if (void 0 !== a) {
        switch (typeof a) {
        case "string":
            return c.test(a) ? '"' + a.replace(c, function(a) {
                var c = Ed[a];
                if (c)
                    return c;
                c = a.charCodeAt();
                return "\\u00" + Math.floor(c / 16).toString(16) + (c%16).toString(16)
            }) + '"' : '"' + a + '"';
        case "number":
            return (0, window.isFinite)(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a)
                return "null";
            c = [];
            if ("number" ===
            typeof a.length&&!a.propertyIsEnumerable("length")) {
                g = a.length;
                for (f = 0; f < g; f += 1)
                    c.push(Nd(a[f]) || "null");
                return "[" + c.join(",") + "]"
            }
            for (f in a)
                !/___$/.test(f) && _.Qa(a, f) && "string" === typeof f && (g = Nd(a[f])) && c.push(Nd(f) + ":" + g);
            return "{" + c.join(",") + "}"
        }
        return ""
    }
}, me = function(a) {
    if (!a)
        return !1;
    if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (c) {}
    return !1
}, Qe=!1, af;
try {
    Qe=!!window.JSON && '["a"]' === window.JSON.stringify(["a"]) && "a" === window.JSON.parse('["a"]')[0]
} catch (Ie) {}
af = function(a) {
    try {
        return window.JSON.parse(a)
    } catch (c) {
        return !1
    }
};
_.mf = Qe ? window.JSON.stringify : Nd;
_.of = Qe ? af : me;

_.e("gadgets.json.stringify", _.mf);
_.e("gadgets.json.parse", _.of);
_.Wa(_.ta.location.href, "rpctoken") && _.Za(_.ua, "unload", function() {});
var yg, Qb;
yg = function() {
    var a = _.ua.readyState;
    return "complete" === a || "interactive" === a&&-1 == window.navigator.userAgent.indexOf("MSIE")
};
_.$g = function(a) {
    if (yg())
        a();
    else {
        var c=!1, f = function() {
            if (!c)
                return c=!0, a.apply(this, arguments)
        };
        _.ta.addEventListener ? (_.ta.addEventListener("load", f, !1), _.ta.addEventListener("DOMContentLoaded", f, !1)) : _.ta.attachEvent && (_.ta.attachEvent("onreadystatechange", function() {
            yg() && f.apply(this, arguments)
        }), _.ta.attachEvent("onload", f))
    }
};
_.rh = function(a, c) {
    if (!yg())
        try {
            a()
    } catch (f) {}
    _.$g(c)
};
Qb = Qb || {};
Qb.Km = null;
Qb.bm = null;
Qb.pg = null;
Qb.frameElement = null;
Qb = Qb || {};
Qb.Lj || (Qb.Lj = function() {
    function a(a) {
        "undefined" != typeof window.addEventListener ? window.addEventListener("message", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onmessage", a);
        window.___jsl = window.___jsl || {};
        var c = window.___jsl;
        c.RPMQ = c.RPMQ || [];
        c.RPMQ.push(a)
    }
    function c(a) {
        var c = (0, _.of)(a.data);
        if (c && c.f) {
            (0, _.Fc)("gadgets.rpc.receive(" + window.name + "): " + a.data);
            var g = _.T.$d(c.f);
            h && ("undefined" !== typeof a.origin ? a.origin !== g : a.domain !== /^.+:\/\/([^:]+).*/.exec(g)[1]) ? _.sa("Invalid rpc message origin. " +
            g + " vs " + (a.origin || "")) : f(c, a.origin)
        }
    }
    var f, g, h=!0;
    return {
        Kk: function() {
            return "wpm"
        },
        B: function() {
            return !0
        },
        kc: function(l, n) {
            _.Pb.register("rpc", null, function(a) {
                "true" === String((a && a.rpc || {}).disableForceSecure) && (h=!1)
            });
            f = l;
            g = n;
            a(c);
            g("..", !0);
            return !0
        },
        sf: function(a) {
            g(a, !0);
            return !0
        },
        call: function(a, c, f) {
            var g = _.T.$d(a), h = _.T.dk(a);
            g ? window.setTimeout(function() {
                var a = (0, _.mf)(f);
                (0, _.Fc)("gadgets.rpc.send(" + window.name + "): " + a);
                h.postMessage(a, g)
            }, 0) : ".." != a && _.sa("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
            return !0
        }
    }
}());
Qb = Qb || {};
Qb.Uf || (Qb.Uf = function() {
    function a(a, c) {
        Ca[c] = Ca[c] || function() {
            a.apply({}, arguments)
        }
    }
    function c() {
        if (null === F && window.document.body && t) {
            var a = t + "?cb=" + Math.random() + "&origin=" + S + "&jsl=1", f = window.document.createElement("div");
            f.style.height = "1px";
            f.style.width = "1px";
            a = '<object height="1" width="1" id="___xpcswf" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="' + a + '"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="' + a +
            '" height="1" width="1"></embed></object>';
            window.document.body.appendChild(f);
            f.innerHTML = a;
            F = f.firstChild
        }
        ++E;
        null !== I && (null !== F || 50 <= E) ? window.clearTimeout(I) : I = window.setTimeout(c, 100)
    }
    function f() {
        ka[".."] || (q(".."), K++, 50 <= K && null !== U ? (window.clearTimeout(U), U = null) : U = window.setTimeout(f, 100))
    }
    function g() {
        if (null !== F && F.setup)
            for (; 0 < z.length;) {
                var a = z.shift(), c = a.Qs;
                F.setup(a.ve, ".." === c ? _.T.lh : c, ".." === c ? "INNER" : "OUTER")
            }
        null !== I && window.clearTimeout(I);
        I = null
    }
    function h() {
        ka[".."] || null !==
        U || (U = window.setTimeout(f, 100))
    }
    function l(a, c, f) {
        c = _.T.$d(a);
        var g = _.T.Wd(a);
        F["sendMessage_" + (".." === a ? _.T.lh : a) + "_" + g + "_" + (".." === a ? "INNER" : "OUTER")].call(F, (0, _.mf)(f), c);
        return !0
    }
    function n(a, c) {
        var f = (0, _.of)(a), g = f._scr;
        g ? (A(g, !0), ka[g]=!0, ".." !== g && q(g, !0)) : window.setTimeout(function() {
            w(f, c)
        }, 0)
    }
    function q(a, c) {
        var f = _.T.lh, g = {};
        g._scr = c ? ".." : f;
        g._pnt = f;
        l(a, 0, g)
    }
    var t = null, v=!1, w = null, A = null, F = null, z = [], I = null, E = 0, K = 0, U = null, ka = {}, S = window.location.protocol + "//" + window.location.host, Ca;
    window.___jsl =
    window.___jsl || {};
    Ca = window.___jsl._fm = {};
    _.Pb.register("rpc", null, function(a) {
        v && (t = a && a.rpc && a.rpc.commSwf || "//xpc.googleusercontent.com/gadgets/xpc.swf")
    });
    a(g, "ready");
    a(h, "setupDone");
    a(n, "receiveMessage");
    return {
        Kk: function() {
            return "flash"
        },
        B: function() {
            return !0
        },
        kc: function(a, c) {
            w = a;
            A = c;
            return v=!0
        },
        sf: function(a, f) {
            z.push({
                ve: f,
                Qs: a
            });
            null === F && null === I && (I = window.setTimeout(c, 100));
            return !0
        },
        call: l,
        Vo: n,
        M: g,
        qa: h
    }
}());
if (window.gadgets && window.gadgets.rpc)
    "undefined" != typeof _.T && _.T || (_.T = window.gadgets.rpc, _.T.config = _.T.config, _.T.register = _.T.register, _.T.Jd = _.T.unregister, _.T.Am = _.T.registerDefault, _.T.aB = _.T.unregisterDefault, _.T.Fk = _.T.forceParentVerifiable, _.T.call = _.T.call, _.T.Rk = _.T.getRelayUrl, _.T.Xg = _.T.setRelayUrl, _.T.Wg = _.T.setAuthToken, _.T.tf = _.T.setupReceiver, _.T.Wd = _.T.getAuthToken, _.T.mj = _.T.removeReceiver, _.T.Qk = _.T.getRelayChannel, _.T.ym = _.T.receive, _.T.zm = _.T.receiveSameDomain, _.T.Pq = _.T.getOrigin,
    _.T.$d = _.T.getTargetOrigin, _.T.dk = _.T._getTargetWin, _.T.Uo = _.T._parseSiblingId);
else {
    _.T = function() {
        function a(a, c) {
            if (!Ta[a]) {
                var f = fc;
                c || (f = te);
                Ta[a] = f;
                for (var g = Ya[a] || [], h = 0; h < g.length; ++h) {
                    var l = g[h];
                    l.t = ka[a];
                    f.call(a, l.f, l)
                }
                Ya[a] = []
            }
        }
        function c() {
            function a() {
                Go=!0
            }
            Ho || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a), Ho=!0)
        }
        function f(a, f, g, h, l) {
            ka[f] && ka[f] === g || (_.sa("Invalid gadgets.rpc token. " +
            ka[f] + " vs " + g), ok(f, 2));
            l.onunload = function() {
                ja[f]&&!Go && (ok(f, 1), _.T.mj(f))
            };
            c();
            h = (0, _.of)((0, window.decodeURIComponent)(h))
        }
        function g(c, f) {
            if (c && "string" === typeof c.s && "string" === typeof c.f && c.a instanceof Array)
                if (ka[c.f] && ka[c.f] !== c.t && (_.sa("Invalid gadgets.rpc token. " + ka[c.f] + " vs " + c.t), ok(c.f, 2)), "__ack" === c.s)
                    window.setTimeout(function() {
                        a(c.f, !0)
                    }, 0);
                else {
                    c.c && (c.callback = function(a) {
                        _.T.call(c.f, (c.g ? "legacy__" : "") + "__cb", null, c.c, a)
                    });
                    if (f) {
                        var g = h(f);
                        c.origin = f;
                        var l = c.r, n;
                        try {
                            n =
                            h(l)
                        } catch (q) {}
                        l && n == g || (l = f);
                        c.referer = l
                    }
                    g = (E[c.s] || E[""]).apply(c, c.a);
                    c.c && "undefined" !== typeof g && _.T.call(c.f, "__cb", null, c.c, g)
                }
            }
        function h(a) {
            if (!a)
                return "";
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            - 1 == a.indexOf("://") && (a = window.location.protocol + "//" + a);
            var c = a.substring(a.indexOf("://") + 3), f = c.indexOf("/");
            - 1 != f && (c = c.substring(0, f));
            a = a.substring(0, a.indexOf("://"));
            if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !==
            a)
                throw Error("Pa");
            var f = "", g = c.indexOf(":");
            if ( - 1 != g) {
                var h = c.substring(g + 1), c = c.substring(0, g);
                if ("http" === a && "80" !== h || "https" === a && "443" !== h)
                    f = ":" + h
            }
            return a + "://" + c + f
        }
        function l(a) {
            if ("/" == a.charAt(0)) {
                var c = a.indexOf("|");
                return {
                    id: 0 < c ? a.substring(1, c): a.substring(1),
                    origin: 0 < c ? a.substring(c + 1): null
                }
            }
            return null
        }
        function n(a) {
            if ("undefined" === typeof a || ".." === a)
                return window.parent;
            var c = l(a);
            if (c)
                return window.top.frames[c.id];
            a = String(a);
            return (c = window.frames[a]) ? c : (c = window.document.getElementById(a)) &&
            c.contentWindow ? c.contentWindow : null
        }
        function q(a, c) {
            if (!0 !== ja[a]) {
                "undefined" === typeof ja[a] && (ja[a] = 0);
                var f = n(a);
                ".." !== a && null == f ||!0 !== fc.sf(a, c)?!0 !== ja[a] && 10 > ja[a]++?window.setTimeout(function() {
                    q(a, c)
                }, 500) : (Ta[a] = te, ja[a]=!0) : ja[a]=!0
            }
        }
        function t(a) {
            (a = K[a]) && "/" === a.substring(0, 1) && (a = "/" === a.substring(1, 2) ? window.document.location.protocol + a : window.document.location.protocol + "//" + window.document.location.host + a);
            return a
        }
        function v(a, c, f) {
            c&&!/http(s)?:\/\/.+/.test(c) && (0 == c.indexOf("//") ?
            c = window.location.protocol + c : "/" == c.charAt(0) ? c = window.location.protocol + "//" + window.location.host + c : - 1 == c.indexOf("://") && (c = window.location.protocol + "//" + c));
            K[a] = c;
            "undefined" !== typeof f && (U[a]=!!f)
        }
        function w(a, c) {
            c = c || "";
            ka[a] = String(c);
            q(a, c)
        }
        function A(a) {
            a = (a.passReferrer || "").split(":", 2);
            If = a[0] || "none";
            wh = a[1] || "origin"
        }
        function F(c) {
            "true" === String(c.useLegacyProtocol) && (fc = Qb.pg || te, fc.kc(g, a))
        }
        function z(a, c) {
            function f(g) {
                g = g && g.rpc || {};
                A(g);
                var l = g.parentRelayUrl || "", l = h(rw.parent ||
                c) + l;
                v("..", l, "true" === String(g.useLegacyProtocol));
                F(g);
                w("..", a)
            }
            !rw.parent && c ? f({}) : _.Pb.register("rpc", null, f)
        }
        function I(a, c, f) {
            if (".." === a)
                z(f || rw.rpctoken || rw.ifpctok || "", c);
            else 
                t: {
                var g = null;
                if ("/" != a.charAt(0)) {
                    if (!_.R)
                        break t;
                        g = window.document.getElementById(a);
                        if (!g)
                            throw Error("h`" + a);
                }
                g = g && g.src;
                c = c || _.T.Pq(g);
                v(a, c);
                c = _.R.dc(g);
                w(a, f || c.rpctoken)
            }
        }
        var E = {}, K = {}, U = {}, ka = {}, S = 0, Ca = {}, ja = {}, rw = {}, Ta = {}, Ya = {}, If = null, wh = null, nk = window.top !== window.self, Yw = window.name, ok = function() {}, pk =
        window.console, Io = pk && pk.log && function(a) {
            pk.log(a)
        }
        || function() {}, te = function() {
            function a(c) {
                return function() {
                    Io(c + ": call ignored")
                }
            }
            return {
                getCode: function() {
                    return "noop"
                },
                isParentVerifiable: function() {
                    return !0
                },
                init: a("init"),
                setup: a("setup"),
                call: a("call")
            }
        }();
        _.R && (rw = _.R.dc());
        var Go=!1, Ho=!1, fc = function() {
            if ("flash" == rw.rpctx)
                return Qb.Uf;
            if ("rmr" == rw.rpctx)
                return Qb.Km;
            var a = "function" === typeof window.postMessage ? Qb.Lj: "object" === typeof window.postMessage ? Qb.Lj: window.ActiveXObject ? Qb.Uf ?
            Qb.Uf: Qb.bm ? Qb.bm: Qb.pg: 0 < window.navigator.userAgent.indexOf("WebKit") ? Qb.Km: "Gecko" === window.navigator.product ? Qb.frameElement: Qb.pg;
            a || (a = te);
            return a
        }();
        E[""] = function() {
            Io("Unknown RPC service: " + this.s)
        };
        E.__cb = function(a, c) {
            var f = Ca[a];
            f && (delete Ca[a], f.call(this, c))
        };
        return {
            config: function(a) {
                "function" === typeof a.Mm && (ok = a.Mm)
            },
            register: function(a, c) {
                if ("__cb" === a || "__ack" === a)
                    throw Error("i");
                if ("" === a)
                    throw Error("j");
                E[a] = c
            },
            Jd: function(a) {
                if ("__cb" === a || "__ack" === a)
                    throw Error("k");
                if ("" ===
                a)
                    throw Error("l");
                delete E[a]
            },
            Am: function(a) {
                E[""] = a
            },
            aB: function() {
                delete E[""]
            },
            Fk: function() {},
            call: function(a, c, f, g) {
                a = a || "..";
                var h = "..";
                ".." === a ? h = Yw : "/" == a.charAt(0) && (h = _.T.Pq(window.location.href), h = "/" + Yw + (h ? "|" + h : ""));
                ++S;
                f && (Ca[S] = f);
                var n = {
                    s: c,
                    f: h,
                    c: f ? S: 0,
                    a: Array.prototype.slice.call(arguments, 3),
                    t: ka[a],
                    l: !!U[a]
                }, q;
                t: if ("bidir" === If || "c2p" === If && ".." === a || "p2c" === If && ".." !== a) {
                    q = window.location.href;
                    var t = "?";
                    if ("query" === wh)
                        t = "#";
                    else if ("hash" === wh)
                        break t;
                    t = q.lastIndexOf(t);
                    t =- 1 ===
                    t ? q.length : t;
                    q = q.substring(0, t)
                } else 
                    q = null;
                q && (n.r = q);
                if (".." === a || null != l(a) || window.document.getElementById(a))(q = Ta[a]) || null === l(a) || (q = fc), 0 === c.indexOf("legacy__") && (q = fc, n.s = c.substring(8), n.c = n.c ? n.c : S), n.g=!0, n.r = h, q ? (U[a] && (q = Qb.pg), !1 === q.call(a, h, n) && (Ta[a] = te, fc.call(a, h, n))): Ya[a] ? Ya[a].push(n): Ya[a] = [n]
            }, Rk: t, Xg : v, Wg : w, tf : I, Wd : function(a) {
                return ka[a]
            }, mj: function(a) {
                delete K[a];
                delete U[a];
                delete ka[a];
                delete ja[a];
                delete Ta[a]
            }, Qk: function() {
                return fc.Kk()
            }, ym: function(a, c) {
                4 < a.length ?
                fc.Vo(a, g) : f.apply(null, a.concat(c))
            }, zm: function(a) {
                a.a = Array.prototype.slice.call(a.a);
                window.setTimeout(function() {
                    g(a)
                }, 0)
            }, Pq: h, $d : function(a) {
                var c = null, f = t(a);
                f ? c = f : (f = l(a)) ? c = f.origin : c = ".." == a ? rw.parent : window.document.getElementById(a).src;
                return h(c)
            }, kc: function() {
                !1 === fc.kc(g, a) && (fc = te);
                nk ? I("..") : _.Pb.register("rpc", null, function(a) {
                    a = a.rpc || {};
                    A(a);
                    F(a)
                })
            }, dk: n, Uo : l, B : "__ack", lh : Yw || "..", M : 0, ha : 1, G : 2
        }
    }();
    _.T.kc()
};
_.T.config({
    Mm: function(a) {
        throw Error("m`" + a);
    }
});
_.Fc = _.ke;
_.e("gadgets.rpc.config", _.T.config);
_.e("gadgets.rpc.register", _.T.register);
_.e("gadgets.rpc.unregister", _.T.Jd);
_.e("gadgets.rpc.registerDefault", _.T.Am);
_.e("gadgets.rpc.unregisterDefault", _.T.aB);
_.e("gadgets.rpc.forceParentVerifiable", _.T.Fk);
_.e("gadgets.rpc.call", _.T.call);
_.e("gadgets.rpc.getRelayUrl", _.T.Rk);
_.e("gadgets.rpc.setRelayUrl", _.T.Xg);
_.e("gadgets.rpc.setAuthToken", _.T.Wg);
_.e("gadgets.rpc.setupReceiver", _.T.tf);
_.e("gadgets.rpc.getAuthToken", _.T.Wd);
_.e("gadgets.rpc.removeReceiver", _.T.mj);
_.e("gadgets.rpc.getRelayChannel", _.T.Qk);
_.e("gadgets.rpc.receive", _.T.ym);
_.e("gadgets.rpc.receiveSameDomain", _.T.zm);
_.e("gadgets.rpc.getOrigin", _.T.Pq);
_.e("gadgets.rpc.getTargetOrigin", _.T.$d);

_.Rb = window.gapi && window.gapi.util || {};
var uk = _.Rb = _.Rb || {};
window.___jsl = window.___jsl || {};
uk.xh = {
    B: function() {
        return window.___jsl.bsh
    },
    Ok: function() {
        return window.___jsl.h
    },
    pj: function(a) {
        window.___jsl.bsh = a
    },
    ys: function(a) {
        window.___jsl.h = a
    }
};
_.Vo = function(a) {
    if (!a)
        return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var c = a.substring(a.indexOf("://") + 3), f = c.indexOf("/");
    - 1 != f && (c = c.substring(0, f));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a)
        throw Error("Pa");
    var f = "", g = c.indexOf(":");
    if ( - 1 != g) {
        var h = c.substring(g + 1), c = c.substring(0, g);
        if ("http" === a && "80" !== h || "https" === a && "443" !== h)
            f = ":" + h
    }
    return a + "://" + c + f
};

_.Rb.Pq = function(a) {
    return _.Vo(a)
};
var uh, Bh;
uh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//;
Bh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//;
_.Dh = function(a) {
    var c = _.P("googleapis.config/sessionIndex");
    null == c && (c = window.__X_GOOG_AUTHUSER);
    if (null == c) {
        var f = window.google;
        f && (c = f.authuser)
    }
    null == c && (a = a || window.location.href, c = _.Wa(a, "authuser") || null, null == c && (c = (c = a.match(uh)) ? c[1] : null));
    return null == c ? null : String(c)
};
_.Rh = function(a) {
    var c = _.P("googleapis.config/sessionDelegate");
    null == c && (c = (a = (a || window.location.href).match(Bh)) ? a[1] : null);
    return null == c ? null : String(c)
};
_.ci = function(a, c) {
    var f = _.Dh(a) || c, g = _.Rh(a), h = "";
    f && (h += "u/" + f + "/");
    g && (h += "b/" + g + "/");
    return h || null
};

_.Ve = function(a) {
    var c;
    if (c = _.P("enableMultilogin"))
        if (c = a("cookie_policy"))
            c = String(a("immediate") || ""), a = String(a("prompt") || ""), c=!("true" === c.toLowerCase() || "none" === a.toLowerCase());
    return c?!0 : !1
};
_.Xb = function(a, c, f) {
    a = String(a);
    if (null != (_.Wa(a, "authuser") || null) || null != (_.Wa(a, "hd") || null))
        return a;
    c = _.Dh(c);
    if (f) {
        var g = a, h = g.match(/^((https?:)?\/\/[^\/?#]*)?(\/[^\/?#]+)\/[0-9]+([\/][^?#]*)([?#].*)?$/);
        if (h && h[0]) {
            var l = h[1], n = h[4], q = h[5];
            h[3] == "/" + f && (g = (l || "") + (n || "/") + (q || ""))
        }
        if ((h = g.match(/^(((https?:)?\/\/[^\/?#]*)([\/][^?#]*)?|([\/][^?#]*))([?#].*)?$/)) && h[0]) {
            var l = h[2], t = h[4] || h[5], q = h[6];
            null != c && (g = (l || "") + "/" + f + "/" + (0, window.encodeURIComponent)(c) + (t || "/") + (q || ""));
            return g
        }
    }
    null ==
    c ? _.Ve(function(c) {
        return _.Wa(a, c) || null
    }) || (t = (0, window.encodeURIComponent)("authuser") + "=0") : t = c.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [(0, window.encodeURIComponent)("authuser") + "=", (0, window.encodeURIComponent)(String(c)), "&" + (0, window.encodeURIComponent)("hd") + "=", (0, window.encodeURIComponent)(c)].join("") : ["authuser=", (0, window.encodeURIComponent)(c)].join("");
    f = a.split("#");
    c = f[0].indexOf("?");
    0 > c ? f[0] = [f[0], "?", t].join("") : (g = [f[0]], c < f[0].length - 1 && g.push("&"), g.push(t), f[0] = g.join(""));
    return g = f.join("#")
};
_.google.ko = _.Xb;
_.google.mr = _.Dh;
_.google.pP = _.Rh;
_.google.qP = _.ci;

var wb = function() {
    this.G =- 1
};
var xb = function() {
    this.G =- 1;
    this.G = 64;
    this.B = [];
    this.Ka = [];
    this.Ld = [];
    this.M = [];
    this.M[0] = 128;
    for (var a = 1; a < this.G; ++a)
        this.M[a] = 0;
    this.qa = this.ha = 0;
    this.reset()
};
_.J(xb, wb);
xb.prototype.reset = function() {
    this.B[0] = 1732584193;
    this.B[1] = 4023233417;
    this.B[2] = 2562383102;
    this.B[3] = 271733878;
    this.B[4] = 3285377520;
    this.qa = this.ha = 0
};
var yb = function(a, c, f) {
    f || (f = 0);
    var g = a.Ld;
    if (_.fa(c))
        for (var h = 0; 16 > h; h++)
            g[h] = c.charCodeAt(f)<<24 | c.charCodeAt(f + 1)<<16 | c.charCodeAt(f + 2)<<8 | c.charCodeAt(f + 3), f += 4;
    else 
        for (h = 0; 16 > h; h++)
            g[h] = c[f]<<24 | c[f + 1]<<16 | c[f + 2]<<8 | c[f + 3], f += 4;
    for (h = 16; 80 > h; h++) {
        var l = g[h - 3]^g[h - 8]^g[h - 14]^g[h - 16];
        g[h] = (l<<1 | l>>>31) & 4294967295
    }
    c = a.B[0];
    f = a.B[1];
    for (var n = a.B[2], q = a.B[3], t = a.B[4], v, h = 0; 80 > h; h++)
        40 > h ? 20 > h ? (l = q^f & (n^q), v = 1518500249) : (l = f^n^q, v = 1859775393) : 60 > h ? (l = f & n | q & (f | n), v = 2400959708) : (l = f^n^q, v = 3395469782),
        l = (c<<5 | c>>>27) + l + t + v + g[h] & 4294967295, t = q, q = n, n = (f<<30 | f>>>2) & 4294967295, f = c, c = l;
    a.B[0] = a.B[0] + c & 4294967295;
    a.B[1] = a.B[1] + f & 4294967295;
    a.B[2] = a.B[2] + n & 4294967295;
    a.B[3] = a.B[3] + q & 4294967295;
    a.B[4] = a.B[4] + t & 4294967295
};
xb.prototype.update = function(a, c) {
    if (null != a) {
        _.kf(c) || (c = a.length);
        for (var f = c - this.G, g = 0, h = this.Ka, l = this.ha; g < c;) {
            if (0 == l)
                for (; g <= f;)
                    yb(this, a, g), g += this.G;
            if (_.fa(a))
                for (; g < c;) {
                    if (h[l] = a.charCodeAt(g), ++l, ++g, l == this.G) {
                        yb(this, h);
                        l = 0;
                        break
                    }
                } else 
                    for (; g < c;)
                        if (h[l] = a[g], ++l, ++g, l == this.G) {
                            yb(this, h);
                            l = 0;
                            break
                        }
        }
        this.ha = l;
        this.qa += c
    }
};
xb.prototype.wc = function() {
    var a = [], c = 8 * this.qa;
    56 > this.ha ? this.update(this.M, 56 - this.ha) : this.update(this.M, this.G - (this.ha - 56));
    for (var f = this.G - 1; 56 <= f; f--)
        this.Ka[f] = c & 255, c/=256;
    yb(this, this.Ka);
    for (f = c = 0; 5 > f; f++)
        for (var g = 24; 0 <= g; g -= 8)
            a[c] = this.B[f]>>g & 255, ++c;
    return a
};
_.pi = function() {
    this.B = new xb
};
_.k = _.pi.prototype;
_.k.reset = function() {
    this.B.reset()
};
_.k.AF = function(a) {
    this.B.update(a)
};
_.k.GC = function() {
    return this.B.wc()
};
_.k.bB = function(a) {
    a = (0, window.unescape)((0, window.encodeURIComponent)(a));
    for (var c = [], f = 0, g = a.length; f < g; ++f)
        c.push(a.charCodeAt(f));
    this.AF(c)
};
_.k.Of = function() {
    for (var a = this.GC(), c = "", f = 0; f < a.length; f++)
        c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f]%16);
    return c
};

_.Fn = function() {
    return Math.floor((new Date).getTime() / 1E3)
};
var LC, MC;
_.Vj = function(a, c) {
    this.B = a;
    var f = c || {};
    this.M = f.Fr;
    this.G = f.domain;
    this.ha = f.path;
    this.qa = f.wD
};
LC = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
MC = /^[A-Z_][A-Z0-9_]{0,63}$/;
_.Vj.prototype.Hd = function() {
    for (var a = this.B + "=", c = window.document.cookie.split(/;\s*/), f = 0; f < c.length; ++f) {
        var g = c[f];
        if (0 == g.indexOf(a))
            return g.substr(a.length)
    }
};
_.Vj.prototype.write = function(a, c) {
    if (!MC.test(this.B))
        throw "Invalid cookie name";
    if (!LC.test(a))
        throw "Invalid cookie value";
    var f = this.B + "=" + a;
    this.G && (f += ";domain=" + this.G);
    this.ha && (f += ";path=" + this.ha);
    var g = "number" === typeof c ? c: this.M;
    if (0 <= g) {
        var h = new Date;
        h.setSeconds(h.getSeconds() + g);
        f += ";expires=" + h.toUTCString()
    }
    this.qa && (f += ";secure");
    window.document.cookie = f;
    return !0
};
_.Vj.prototype.clear = function() {
    this.write("", 0)
};
_.Vj.iterate = function(a) {
    for (var c = window.document.cookie.split(/;\s*/), f = 0; f < c.length; ++f) {
        var g = c[f].split("="), h = g.shift();
        a(h, g.join("="))
    }
};
var Ok;
_.dk = function(a) {
    this.B = a
};
Ok = {};
_.dk.prototype.Hd = function() {
    if (Ok.hasOwnProperty(this.B))
        return Ok[this.B]
};
_.dk.prototype.write = function(a) {
    Ok[this.B] = a;
    return !0
};
_.dk.prototype.clear = function() {
    delete Ok[this.B]
};
_.dk.iterate = function(a) {
    for (var c in Ok)
        Ok.hasOwnProperty(c) && a(c, Ok[c])
};
_.fk = function(a) {
    this.G = a;
    this.B = window.sessionStorage
};
_.fk.prototype.Hd = function() {
    return this.B && this.B.getItem(this.G)
};
_.fk.prototype.write = function(a) {
    try {
        this.B && this.B.setItem(this.G, a)
    } catch (c) {
        return !1
    }
    return !0
};
_.fk.prototype.clear = function() {
    this.B && this.B.removeItem(this.G)
};
_.fk.iterate = function(a) {
    if (window.sessionStorage)
        for (var c = 0, f = window.sessionStorage.length; c < f; ++c) {
            var g = window.sessionStorage.key(c);
            a(g, window.sessionStorage[g])
        }
};
for (var vk = 0; 64 > vk; ++vk);
var Gi;
Gi = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
_.Yi = "https:" === window.location.protocol;
_.dj = _.Yi || "http:" === window.location.protocol ? _.Vj : _.dk;
_.fj = function(a) {
    a = a.toUpperCase();
    for (var c = 0, f = Gi.length; c < f; ++c) {
        var g = a.split(Gi[c]);
        2 == g.length && "" === g[1] && (a = g[0])
    }
    a = a.replace(/-/g, "_").toUpperCase();
    40 < a.length && (c = new _.pi, c.bB(a), a = c.Of().toUpperCase());
    return a
};
_.jj = function(a) {
    var c = a.substr(1), f = "", g = window.location.hostname;
    if ("" !== c) {
        f = (0, window.parseInt)(c, 10);
        if ((0, window.isNaN)(f))
            return null;
        c = g.split(".");
        if (c.length < f - 1)
            return null;
        c.length == f - 1 && (g = "." + g)
    } else 
        g = "";
    return {
        Gb: "S" == a.charAt(0),
        domain: g,
        Ke: f
    }
};
_.wj = function(a) {
    if (0 !== a.indexOf("GCSC"))
        return null;
    var c = {
        uf: !1
    };
    a = a.substr(4);
    if (!a)
        return c;
    var f = a.charAt(0);
    a = a.substr(1);
    var g = a.lastIndexOf("_");
    if ( - 1 == g)
        return c;
    var h = _.jj(a.substr(g + 1));
    if (null == h)
        return c;
    a = a.substring(0, g);
    if ("_" !== a.charAt(0))
        return c;
    g = "E" === f && h.Gb;
    return !g && ("U" !== f || h.Gb) || g&&!_.Yi ? c : {
        uf: !0,
        Gb: g,
        ep: a.substr(1),
        domain: h.domain,
        Ke: h.Ke
    }
};
var Bj, Oj, ak, bk, gk;
Bj = _.r();
Oj = _.r();
_.Pj = _.r();
_.Tj = _.r();
_.Wj = null;
ak = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
bk = function(a) {
    this.G = a;
    this.B = null
};
bk.prototype.write = function(a) {
    var c = _.r(), f = _.r(), g;
    for (g in a)
        _.Qa(a, g) && (f[g] = a[g], c[g] = a[g]);
    g = 0;
    for (var h = ak.length; g < h; ++g)
        delete f[ak[g]];
    a = String(a.authuser || 0);
    g = _.r();
    g[a] = _.R.dc("#" + _.ck(f));
    this.G.write((0, _.mf)(g));
    this.B = c
};
bk.prototype.Hd = function() {
    return this.B
};
bk.prototype.clear = function() {
    this.G.clear();
    this.B = _.r()
};
_.ek = function(a) {
    if (!a)
        return null;
    "single_host_origin" !== a && (a = _.T.Pq(a));
    var c = window.location.hostname, f = c, g = _.Yi;
    if ("single_host_origin" !== a) {
        f = a.split("://");
        if (2 == f.length)
            g = "https" === f.shift();
        else 
            return _.kd("WARNING invalid cookie_policy: " + a), null;
        f = f[0]
    }
    if ( - 1 !== f.indexOf(":"))
        f = c = "";
    else {
        a = "." + f;
        if (c.lastIndexOf(a) !== c.length - a.length)
            return _.kd("Invalid cookie_policy domain: " + f), null;
        f = a;
        c = f.split(".").length - 1
    }
    return {
        domain: f,
        Gb: g,
        Ke: c
    }
};
gk = function(a) {
    if (!a)
        return null;
    var c = a.client_id;
    if (!c)
        return null;
    c = _.fj(c);
    a = _.ek(a.cookie_policy);
    return a?!_.Yi && a.Gb ? (_.kd("WARNING: https cookie_policy set for http domain"), null) : ["GCSC", a.Gb ? "E": "U", "_", c, "_", a.Gb ? "S": "H", a.Ke].join("") : null
};
_.hk = function(a) {
    return a ? {
        domain: a.domain,
        path: "/",
        wD: a.Gb
    } : null
};
_.ik = function(a) {
    var c = Bj[a];
    c || (c = new bk(new _.dk(a)), Bj[a] = c);
    return {
        Kc: c,
        key: a
    }
};
_.jk = function(a, c) {
    var f = c ? Oj: Bj, g = c ? _.dj: _.fk, h = a && gk(a), l=!!h;
    a&&!a.g_user_cookie_policy && (g = _.dk, h = "token");
    if (!h)
        if (!c && _.Wj)
            h = _.Wj;
        else 
            return null;
    var n = f[h];
    if (!n) {
        n = _.wj(h);
        if (!("token" === h || n && n.uf))
            return null;
        n = new g(h, _.hk(n));
        c || (n = new bk(n))
    }
    f[h] = n;
    return {
        Kc: n,
        key: h,
        Fj: l
    }
};
_.kk = function(a, c, f) {
    a = a && "token" !== a ? _.ik(a) : _.jk();
    if (!a)
        return null;
    if (f) {
        f = a.Kc;
        _.r();
        var g = f.G.Hd();
        f = null;
        try {
            f = (0, _.of)(g)
        } catch (h) {}
        0 == f && (f = null);
        g = _.Dh() || "0";
        g = String(g);
        f = f && f[g]
    } else 
        f = a.Kc.Hd();
    f && f.expires_at && _.Fn() > f.expires_at && (a.Kc.clear(), f = null);
    f && f.error&&!c && (f = null);
    return f
};
_.ck = function(a) {
    var c = "";
    if (!a)
        return c;
    for (var f in a)
        if ({}.hasOwnProperty.call(a, f)) {
            var g;
            g = a[f];
            if (null != g) {
                var h = [(0, window.encodeURIComponent)(f), "="];
                if (g instanceof Array) {
                    for (var l = [], n = 0; n < g.length; n++)
                        l.push((0, window.encodeURIComponent)(g[n]));
                        h.push(l.join("+"))
                    } else 
                        h.push((0, window.encodeURIComponent)(g));
                        g = h.join("")
                    } else 
                        g = "";
                        g && (c && (c += "&"), c += g)
        }
    return c
};
_.fk.iterate(function(a) {
    var c = _.wj(a);
    c && c.uf && (Bj[a] = new bk(new _.fk(a)))
});
_.dj.iterate(function(a) {
    Bj[a] && (Oj[a] = new _.dj(a, _.hk(_.wj(a))))
});

_.Xj = window.googleapis && window.googleapis.server || {};
_.Yj = function() {
    var a = /\s*;\s*/;
    return {
        get: function(c, f) {
            for (var g = c + "=", h = (window.document.cookie || "").split(a), l = 0, n; n = h[l]; ++l)
                if (0 == n.indexOf(g))
                    return n.substr(g.length);
            return f
        }
    }
}();
var cp, dp;
_.bp = function(a) {
    this.B = a
};
cp = /\s*;\s*/;
_.k = _.bp.prototype;
_.k.isEnabled = function() {
    return window.navigator.cookieEnabled
};
_.k.set = function(a, c, f, g, h, l) {
    if (/[;=\s]/.test(a))
        throw Error("O`" + a);
    if (/[;\r\n]/.test(c))
        throw Error("aa`" + c);
    _.kf(f) || (f =- 1);
    h = h ? ";domain=" + h : "";
    g = g ? ";path=" + g : "";
    l = l ? ";secure" : "";
    f = 0 > f ? "" : 0 == f ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.pa)() + 1E3 * f)).toUTCString();
    this.B.cookie = a + "=" + c + h + g + f + l
};
_.k.get = function(a, c) {
    for (var f = a + "=", g = (this.B.cookie || "").split(cp), h = 0, l; l = g[h]; h++) {
        if (0 == l.lastIndexOf(f, 0))
            return l.substr(f.length);
        if (l == a)
            return ""
    }
    return c
};
_.k.remove = function(a, c, f) {
    var g = _.kf(this.get(a));
    this.set(a, "", 0, c, f);
    return g
};
_.k.$b = function() {
    return dp(this).keys
};
_.k.Va = function() {
    return dp(this).Wy
};
_.k.isEmpty = function() {
    return !this.B.cookie
};
_.k.Da = function() {
    return this.B.cookie ? (this.B.cookie || "").split(cp).length : 0
};
_.k.zn = function(a) {
    for (var c = dp(this).Wy, f = 0; f < c.length; f++)
        if (c[f] == a)
            return !0;
    return !1
};
_.k.clear = function() {
    for (var a = dp(this).keys, c = a.length - 1; 0 <= c; c--)
        this.remove(a[c])
    };
dp = function(a) {
    a = (a.B.cookie || "").split(cp);
    for (var c = [], f = [], g, h, l = 0; h = a[l]; l++)
        g = h.indexOf("="), - 1 == g ? (c.push(""), f.push(h)) : (c.push(h.substring(0, g)), f.push(h.substring(g + 1)));
    return {
        keys: c,
        Wy: f
    }
};
_.hp = new _.bp(window.document);
_.hp.G = 3950;

var Hp = function() {
    function a() {
        h[0] = 1732584193;
        h[1] = 4023233417;
        h[2] = 2562383102;
        h[3] = 271733878;
        h[4] = 3285377520;
        w = v = 0
    }
    function c(a) {
        for (var c = n, f = 0; 64 > f; f += 4)
            c[f / 4] = a[f]<<24 | a[f + 1]<<16 | a[f + 2]<<8 | a[f + 3];
        for (f = 16; 80 > f; f++)
            a = c[f - 3]^c[f - 8]^c[f - 14]^c[f - 16], c[f] = (a<<1 | a>>>31) & 4294967295;
        a = h[0];
        for (var g = h[1], l = h[2], q = h[3], t = h[4], v, w, f = 0; 80 > f; f++)
            40 > f ? 20 > f ? (v = q^g & (l^q), w = 1518500249) : (v = g^l^q, w = 1859775393) : 60 > f ? (v = g & l | q & (g | l), w = 2400959708) : (v = g^l^q, w = 3395469782), v = ((a<<5 | a>>>27) & 4294967295) + v + t + w + c[f] & 4294967295,
            t = q, q = l, l = (g<<30 | g>>>2) & 4294967295, g = a, a = v;
        h[0] = h[0] + a & 4294967295;
        h[1] = h[1] + g & 4294967295;
        h[2] = h[2] + l & 4294967295;
        h[3] = h[3] + q & 4294967295;
        h[4] = h[4] + t & 4294967295
    }
    function f(a, f) {
        if ("string" === typeof a) {
            a = (0, window.unescape)((0, window.encodeURIComponent)(a));
            for (var g = [], h = 0, n = a.length; h < n; ++h)
                g.push(a.charCodeAt(h));
            a = g
        }
        f || (f = a.length);
        g = 0;
        if (0 == v)
            for (; g + 64 < f;)
                c(a.slice(g, g + 64)), g += 64, w += 64;
        for (; g < f;)
            if (l[v++] = a[g++], w++, 64 == v)
                for (v = 0, c(l); g + 64 < f;)
                    c(a.slice(g, g + 64)), g += 64, w += 64
    }
    function g() {
        var a = [],
        g = 8 * w;
        56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
        for (var n = 63; 56 <= n; n--)
            l[n] = g & 255, g>>>=8;
        c(l);
        for (n = g = 0; 5 > n; n++)
            for (var t = 24; 0 <= t; t -= 8)
                a[g++] = h[n]>>t & 255;
        return a
    }
    for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t)
        q[t] = 0;
    var v, w;
    a();
    return {
        reset: a,
        update: f,
        wc: g,
        Of: function() {
            for (var a = g(), c = "", f = 0; f < a.length; f++)
                c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f]%16);
            return c
        }
    }
};
var Ip, Xp, Jp;
_.sE = function(a) {
    var c = {
        SAPISIDHASH: !0,
        APISIDHASH: !0
    };
    return a && (a.OriginToken || a.Authorization && c[String(a.Authorization).split(" ")[0]])?!0 : !1
};
Ip = function() {
    var a = window.__OVERRIDE_SID;
    null == a && (a = (new _.bp(window.document)).get("SID"));
    return !!a
};
Xp = function(a, c, f) {
    if (1 == (_.ea(f) ? 2 : 1))
        return Jp([c, a].join(" "));
    var g = [], h = [];
    (0, _.Be)(f || [], function(a) {
        h.push(a.key);
        g.push(a.value)
    });
    f = (new Date).getTime();
    var l = [], l = 0 == g.length ? [f, c, a]: [g.join(":"), f, c, a];
    a = Jp(l.join(" "));
    a = [f, a];
    0 == h.length || a.push(h.join(""));
    return a.join("_")
};
Jp = function(a) {
    var c = Hp();
    c.update(a);
    return c.Of().toLowerCase()
};
_.Qj = {
    Nq: _.sE,
    er: Ip,
    bq: function() {
        var a = null;
        Ip() && (a = window.__PVT, null == a && (a = _.Yj.get("BEAT")));
        return a
    },
    Qe: function(a) {
        var c = _.Vo(String(window.location.href));
        if (Ip()) {
            var f = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:"), g = f ? window.__SAPISID: window.__APISID;
            null == g && (g = (new _.bp(window.document)).get(f ? "SAPISID" : "APISID"));
            if (g)
                return [f ? "SAPISIDHASH": "APISIDHASH", Xp(c, g, a)].join(" ")
        }
        return null
    }
};

_.R = _.R || {};
_.R.Ee = function(a, c, f, g) {
    "undefined" != typeof a.addEventListener ? a.addEventListener(c, f, g) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + c, f) : _.Lb("cannot attachBrowserEvent: " + c)
};
_.R.Vr = function(a) {
    var c = window;
    c.removeEventListener ? c.removeEventListener("mousemove", a, !1) : c.detachEvent ? c.detachEvent("onmousemove", a) : _.Lb("cannot removeBrowserEvent: mousemove")
};

_.Tb = function() {
    function a() {
        h[0] = 1732584193;
        h[1] = 4023233417;
        h[2] = 2562383102;
        h[3] = 271733878;
        h[4] = 3285377520;
        w = v = 0
    }
    function c(a) {
        for (var c = n, f = 0; 64 > f; f += 4)
            c[f / 4] = a[f]<<24 | a[f + 1]<<16 | a[f + 2]<<8 | a[f + 3];
        for (f = 16; 80 > f; f++)
            a = c[f - 3]^c[f - 8]^c[f - 14]^c[f - 16], c[f] = (a<<1 | a>>>31) & 4294967295;
        a = h[0];
        for (var g = h[1], l = h[2], q = h[3], t = h[4], v, w, f = 0; 80 > f; f++)
            40 > f ? 20 > f ? (v = q^g & (l^q), w = 1518500249) : (v = g^l^q, w = 1859775393) : 60 > f ? (v = g & l | q & (g | l), w = 2400959708) : (v = g^l^q, w = 3395469782), v = ((a<<5 | a>>>27) & 4294967295) + v + t + w + c[f] & 4294967295,
            t = q, q = l, l = (g<<30 | g>>>2) & 4294967295, g = a, a = v;
        h[0] = h[0] + a & 4294967295;
        h[1] = h[1] + g & 4294967295;
        h[2] = h[2] + l & 4294967295;
        h[3] = h[3] + q & 4294967295;
        h[4] = h[4] + t & 4294967295
    }
    function f(a, f) {
        if ("string" === typeof a) {
            a = (0, window.unescape)((0, window.encodeURIComponent)(a));
            for (var g = [], h = 0, n = a.length; h < n; ++h)
                g.push(a.charCodeAt(h));
            a = g
        }
        f || (f = a.length);
        g = 0;
        if (0 == v)
            for (; g + 64 < f;)
                c(a.slice(g, g + 64)), g += 64, w += 64;
        for (; g < f;)
            if (l[v++] = a[g++], w++, 64 == v)
                for (v = 0, c(l); g + 64 < f;)
                    c(a.slice(g, g + 64)), g += 64, w += 64
    }
    function g() {
        var a = [],
        g = 8 * w;
        56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
        for (var n = 63; 56 <= n; n--)
            l[n] = g & 255, g>>>=8;
        c(l);
        for (n = g = 0; 5 > n; n++)
            for (var t = 24; 0 <= t; t -= 8)
                a[g++] = h[n]>>t & 255;
        return a
    }
    for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t)
        q[t] = 0;
    var v, w;
    a();
    return {
        reset: a,
        update: f,
        wc: g,
        Of: function() {
            for (var a = g(), c = "", f = 0; f < a.length; f++)
                c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f]%16);
            return c
        }
    }
};
_.Vb = function() {
    function a(a) {
        var c = _.Tb();
        c.update(a);
        return c.Of()
    }
    var c = window.crypto;
    if (c && "function" == typeof c.getRandomValues)
        return function() {
            var a = new window.Uint32Array(1);
            c.getRandomValues(a);
            return Number("0." + a[0])
        };
    var f = _.P("random/maxObserveMousemove");
    null == f && (f =- 1);
    var g = 0, h = Math.random(), l = 1, n = 1E6 * (window.screen.width * window.screen.width + window.screen.height), q = function(a) {
        a = a || window.event;
        var c = a.screenX + a.clientX<<16, c = c + (a.screenY + a.clientY), c = (new Date).getTime()%1E6 * c;
        l =
        l * c%n;
        0 < f&&++g == f && _.R.Vr(q)
    };
    0 != f && _.R.Ee(window, "mousemove", q, !1);
    var t = a(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + h);
    return function() {
        var c = l, c = c + (0, window.parseInt)(t.substr(0, 20), 16);
        t = a(t);
        return c / (n + Math.pow(16, 20))
    }
}();
_.e("shindig.random", _.Vb);
var lk, tf;
_.gh = function() {};
_.sh = function() {
    return _.pf("Opera") || _.pf("OPR")
};
lk = function(a, c) {
    return a < c?-1 : a > c ? 1 : 0
};
_.Ae = function(a, c, f) {
    return 2 >= arguments.length ? _.ye.slice.call(a, c) : _.ye.slice.call(a, c, f)
};
tf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
_.rk = function(a, c) {
    for (var f = 0, g = (0, _.Ge)(String(a)).split("."), h = (0, _.Ge)(String(c)).split("."), l = Math.max(g.length, h.length), n = 0; 0 == f && n < l; n++) {
        var q = g[n] || "", t = h[n] || "", v = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
        do {
            var A = v.exec(q) || ["", "", ""], F = w.exec(t) || ["", "", ""];
            if (0 == A[0].length && 0 == F[0].length)
                break;
            f = lk(0 == A[1].length ? 0 : (0, window.parseInt)(A[1], 10), 0 == F[1].length ? 0 : (0, window.parseInt)(F[1], 10)) || lk(0 == A[2].length, 0 == F[2].length) || lk(A[2], F[2])
        }
        while (0 == f)
        }
    return f
};
_.sf = function(a, c) {
    for (var f, g, h = 1; h < arguments.length; h++) {
        g = arguments[h];
        for (f in g)
            a[f] = g[f];
        for (var l = 0; l < tf.length; l++)
            f = tf[l], Object.prototype.hasOwnProperty.call(g, f) && (a[f] = g[f])
    }
};
_.qf = function(a, c, f) {
    for (var g in a)
        c.call(f, a[g], g, a)
};
_.ze = function(a) {
    var c = a.length;
    if (0 < c) {
        for (var f = Array(c), g = 0; g < c; g++)
            f[g] = a[g];
        return f
    }
    return []
};
_.pg = function() {
    return _.pf("Android")
};
_.mZ = function() {
    return _.pf("iPhone")&&!_.pf("iPod")&&!_.pf("iPad")
};
var Eh, Pe, Zk, tk;
_.cf = _.sh();
_.W = _.Oe();
_.df = _.pf("Gecko")&&-1 == _.We.toLowerCase().indexOf("webkit")&&!(_.pf("Trident") || _.pf("MSIE"));
_.ef =- 1 != _.We.toLowerCase().indexOf("webkit");
_.ff = _.ef && _.pf("Mobile");
_.Gg = _.pf("Macintosh");
_.Hg = _.pf("Windows");
_.Jg = _.pf("Linux") || _.pf("CrOS");
Eh = _.D.navigator || null;
_.wk=!!Eh&&-1 != (Eh.appVersion || "").indexOf("X11");
_.Ui = _.pg();
_.mk = _.mZ();
_.sk = _.pf("iPad");
Pe = function() {
    var a = _.D.document;
    return a ? a.documentMode : void 0
};
_.Se = function() {
    var a = "", c;
    if (_.cf && _.D.opera)
        return a = _.D.opera.version, _.vd(a) ? a() : a;
    _.df ? c = /rv\:([^\);]+)(\)|;)/ : _.W ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : _.ef && (c = /WebKit\/(\S+)/);
    c && (a = (a = c.exec(_.We)) ? a[1] : "");
    return _.W && (c = Pe(), c > (0, window.parseFloat)(a)) ? String(c) : a
}();
Zk = {};
_.sl = function(a) {
    return Zk[a] || (Zk[a] = 0 <= _.rk(_.Se, a))
};
_.Te = function(a) {
    return _.W && _.Ue >= a
};
tk = _.D.document;
_.Ue = tk && _.W ? Pe() || ("CSS1Compat" == tk.compatMode ? (0, window.parseInt)(_.Se, 10) : 5) : void 0;

var Ti, Xi, Wi;
_.im = function(a) {
    return /^[\s\xa0]*$/.test(a)
};
_.B = function(a) {
    return _.im(null == a ? "" : String(a))
};
Ti = function(a) {
    return Array.prototype.join.call(arguments, "")
};
_.jr = function(a, c) {
    var f = a.length - c.length;
    return 0 <= f && a.indexOf(c, f) == f
};
Xi = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
_.Vi = function(a) {
    if (Wi) {
        Wi=!1;
        var c = _.D.location;
        if (c) {
            var f = c.href;
            if (f && (f = (f = _.Vi(f)[3] || null) ? (0, window.decodeURI)(f) : f) && f != c.hostname)
                throw Wi=!0, Error();
        }
    }
    return a.match(Xi)
};
Wi = _.ef;
_.Zi = function(a) {
    if (a[1]) {
        var c = a[0], f = c.indexOf("#");
        0 <= f && (a.push(c.substr(f)), a[0] = c = c.substr(0, f));
        f = c.indexOf("?");
        0 > f ? a[1] = "?" : f == c.length - 1 && (a[1] = void 0)
    }
    return a.join("")
};
_.$i = function(a, c, f) {
    if (_.ea(c))
        for (var g = 0; g < c.length; g++)
            _.$i(a, String(c[g]), f);
    else 
        null != c && f.push("&", a, "" === c ? "" : "=", (0, window.encodeURIComponent)(String(c)))
};
_.aj = function(a, c) {
    for (var f in c)
        _.$i(f, c[f], a);
    return a
};
_.ul = function(a, c) {
    _.jr(a, "/") && (a = a.substr(0, a.length - 1));
    _.jd(c, "/") && (c = c.substr(1));
    return Ti(a, "/", c)
};

var zk;
zk = function(a, c) {
    var f = _.R.Fh({
        id: a,
        name: a
    });
    f.style.width = "1px";
    f.style.height = "1px";
    f.style.position = "absolute";
    f.style.top = "-100px";
    var g;
    if (window.navigator) {
        g = window.navigator.userAgent || "";
        var h = window.navigator.product || "";
        g = 0 != g.indexOf("Opera")&&-1 == g.indexOf("WebKit") && "Gecko" == h && 0 < g.indexOf("rv:1.")
    } else 
        g=!1;
    f.src = g ? "about:blank" : c;
    f.tabIndex = "-1";
    window.document.body.appendChild(f);
    g && (f.src = c);
    return f
};
_.Bk = function() {
    function a() {
        return !!v("auth/useFirstPartyAuthV2")
    }
    function c(a, c, f, g) {
        var h = v("proxy");
        if (f ||!h)
            var h = v("root"), l = v("root-1p") || h, n = v("xd3"), h = (f || String(c ? l : h)) + n;
        (c = _.R.dc().jsh || _.Rb.xh.Ok()) && (h += (0 <= h.indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(c));
        v("push") && (h += (0 <= h.indexOf("?") ? "&" : "?") + "p=1");
        h += "#parent=" + (0, window.encodeURIComponent)(null != g ? String(g) : _.Rb.Pq(window.document.location.href));
        return h + ("&rpctoken=" + a)
    }
    function f(a, c, f, g) {
        var l = h(f, g);
        A[l] ||
        (f = zk(l, c), _.T.register("ready:" + a, function() {
            _.T.Jd("ready:" + a);
            if (!F[l]) {
                F[l]=!0;
                var c = z[l];
                z[l] = [];
                for (var f = 0, g = c.length; f < g; ++f) {
                    var h = c[f];
                    q(h.qf, h.$r, h.Ga)
                }
            }
        }), _.T.tf(l, c), A[l] = f)
    }
    function g(a, g) {
        var h = String(2147483647 * (0, _.Vb)() | 0), l = c(h, a, g);
        _.$g(function() {
            f(h, l, a, g)
        })
    }
    function h(a, f) {
        var g = c("", a, f, ""), h = w[g];
        h || (h = _.Tb(), h.update(g), h = h.Of().toLowerCase(), h += Math.random(), w[g] = h);
        return "apiproxy" + h
    }
    function l(a) {
        if (!a)
            return null;
        var c = {}, f = a.headers || {}, g;
        for (g in f)({})
            .hasOwnProperty.call(f,
            g) && (c[g] = f[g]);
        c["Content-Type"] = "application/json";
        return [{
            key: "gapiRequest",
            params: {
                id: "gapiRequest",
                key: "gapiRequest",
                httpMethod: "POST",
                root: a.root,
                url: "/rpc",
                urlParams: a.urlParams,
                headers: c,
                clientName: a.clientName || null,
                clientVersion: a.clientVersion || null,
                body: a.requests || []
            }
        }
        ]
    }
    function n(a) {
        return function(c) {
            c = c.gapiRequest.data.body;
            var f = (0, _.of)(c);
            if (f) {
                for (var g = {}, h = 0, l = f.length; h < l; ++h)
                    g[f[h].id] = f[h];
                a(g, c)
            } else 
                a(f, c)
        }
    }
    function q(a, c, f) {
        var q = void 0, v=!1;
        if ("makeRequest" !== a && "makeHttpRequests" !==
        a)
            throw 'only "makeRequest" and "makeHttpRequests" RPCs are implemented';
        "makeRequest" === a && (a = "makeHttpRequests", c = l(c), f = n(f));
        var w = function(a) {
            if (a) {
                if ("undefined" != typeof q && "undefined" != typeof a.root && q != a.root)
                    throw "all requests in a batch must have the same root URL";
                q = a.root || q;
                v = _.Qj.Nq(a.headers)
            }
        };
        if (c) {
            for (var Ca = _.P("client/jsonpOverride"), ja = 0, rw = c.length; ja < rw; ++ja) {
                var Ta = c[ja];
                Ta && (Ta = Ta.params, w(Ta), Ca && t(Ta, f))
            }
            if (Ca)
                return 
        }
        var Ya = h(v, q);
        A[Ya] || g(v, q);
        F[Ya] ? _.T.call(Ya, a, function(a) {
            if (this.f ==
            Ya && this.t == _.T.Wd(this.f) && this.origin == _.T.$d(this.f)) {
                var c = (0, _.of)(a);
                f(c, a)
            }
        }, c) : (z[Ya] || (z[Ya] = []), z[Ya].push({
            qf: a,
            $r: c,
            Ga: f
        }))
    }
    function t(a, c) {
        if ("GET" != a.httpMethod)
            throw "JSONP supports GET methods only.";
        var f = "jpcb" + String(2147483647 * (0, _.Vb)() | 0), g = window.document.createElement("script"), h = window.document.getElementsByTagName("head")[0];
        window[f] = function(a) {
            c(a);
            try {
                delete window[f]
            } catch (l) {
                window[f] = void 0
            }
            window.setTimeout(function() {
                h.removeChild(g)
            }, 1)
        };
        var l = a.root || v("root"),
        n = a.urlParams;
        n.callback = f;
        l = _.ul(l, a.url);
        n = _.Zi(_.aj([l], n));
        g.setAttribute("id", f);
        g.setAttribute("src", n);
        g.setAttribute("charset", "utf-8");
        h.appendChild(g)
    }
    function v(a) {
        return _.P("googleapis.config/" + a)
    }
    var w = {}, A = {}, F = {}, z = {};
    return {
        Md: function(c, f, g) {
            var h = g || "auto";
            c = c || {};
            if ("none" == h)
                return c;
            f = f || window.location.href;
            g = c.Authorization;
            var l = c.OriginToken;
            if (!g&&!l) {
                l = _.kk(void 0, void 0);
                !l && window.gapi.auth2 && "function" == typeof window.gapi.auth2._gt && (l = window.gapi.auth2._gt());
                l && l.access_token &&
                ("oauth2" == h || "auto" == h) && (g = String(l.token_type || "Bearer") + " " + l.access_token);
                if (l=!g)
                    l = (!!v("auth/useFirstPartyAuth") || "1p" == h) && "oauth2" != h;
                if (l && _.Qj.er()) {
                    if (a()) {
                        g = v("primaryEmail");
                        var h = v("appDomain"), l = v("fogId"), n = [];
                        g && n.push({
                            key: "e",
                            value: g
                        });
                        h && n.push({
                            key: "a",
                            value: h
                        });
                        l && n.push({
                            key: "u",
                            value: l
                        });
                        g = _.Qj.Qe(n)
                    } else 
                        g = _.Qj.Qe();
                    g && (f = _.google.mr(f), f = c["X-Goog-AuthUser"] || f, _.B(f) && (!a() || a() && _.B(v("primaryEmail")) && _.B(v("appDomain")) && _.B(v("fogId"))) && (f = "0"), _.B(f) || (c["X-Goog-AuthUser"] = f))
                }
                g ? c.Authorization = g : !1 !== v("auth/useOriginToken") && (l = _.Qj.bq()) && (c.OriginToken = l)
            }
            return c
        },
        B: t,
        Dd: q
    }
}();

_.ue = function(a, c) {
    var f;
    t: {
        f = a.length;
        for (var g = _.fa(a) ? a.split("") : a, h = 0; h < f; h++)
            if (h in g && c.call(void 0, g[h], h, a)) {
                f = h;
                break t
            }
        f =- 1
    }
    return 0 > f ? null : _.fa(a) ? a.charAt(f) : a[f]
};
_.fh = function(a, c) {
    for (var f = a.split("."), g = c || _.D, h; h = f.shift();)
        if (null != g[h])
            g = g[h];
        else 
            return null;
    return g
};
_.wd = function(a, c) {
    return 1 == _.ye.splice.call(a, c, 1).length
};
_.xe = function(a, c) {
    var f = (0, _.we)(a, c), g;
    (g = 0 <= f) && _.wd(a, f);
    return g
};
_.dh = function() {
    this.Oj = this.Oj;
    this.te = this.te
};
_.dh.prototype.Oj=!1;
_.dh.prototype.Ma = function() {
    return this.Oj
};
_.dh.prototype.U = function() {
    this.Oj || (this.Oj=!0, this.C())
};
_.pD = function(a, c) {
    var f = _.ma(_.eh, c);
    a.te || (a.te = []);
    a.te.push(_.kf(void 0) ? (0, _.H)(f, void 0) : f)
};
_.dh.prototype.C = function() {
    if (this.te)
        for (; this.te.length;)
            this.te.shift()()
};
_.eh = function(a) {
    a && "function" == typeof a.U && a.U()
};
_.mh = function(a, c) {
    this.type = a;
    this.currentTarget = this.target = c;
    this.defaultPrevented = this.Ad=!1;
    this.Tg=!0
};
_.mh.prototype.C = function() {};
_.mh.prototype.U = function() {};
_.mh.prototype.stopPropagation = function() {
    this.Ad=!0
};
_.mh.prototype.preventDefault = function() {
    this.defaultPrevented=!0;
    this.Tg=!1
};
var lh = function(a) {
    lh[" "](a);
    return a
};
lh[" "] = _.gh;
var Ih=!_.W || _.Te(9), yh=!_.W || _.Te(9), Jh = _.W&&!_.sl("9");
!_.ef || _.sl("528");
_.df && _.sl("1.9b") || _.W && _.sl("8") || _.cf && _.sl("9.5") || _.ef && _.sl("528");
_.df&&!_.sl("8") || _.W && _.sl("9");
_.Ur = _.W ? "focusin" : "DOMFocusIn";
_.as = _.W ? "focusout" : "DOMFocusOut";
_.cs = _.ef ? "webkitTransitionEnd" : _.cf ? "otransitionend" : "transitionend";
_.nh = function(a, c) {
    _.mh.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey=!1;
    this.state = null;
    this.fj=!1;
    this.B = null;
    a && this.kc(a, c)
};
_.J(_.nh, _.mh);
var wp = [1, 4, 2];
_.nh.prototype.kc = function(a, c) {
    var f = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = c;
    var g = a.relatedTarget;
    if (g) {
        if (_.df) {
            var h;
            t:
            {
                try {
                    lh(g.nodeName);
                    h=!0;
                    break t
                } catch (l) {}
                h=!1
            }
            h || (g = null)
        }
    } else 
        "mouseover" == f ? g = a.fromElement : "mouseout" == f && (g = a.toElement);
    this.relatedTarget = g;
    this.offsetX = _.ef || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = _.ef || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY :
    a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == f ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.fj = _.Gg ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.B = a;
    a.defaultPrevented && this.preventDefault()
};
_.vp = function(a) {
    return (Ih ? 0 == a.B.button : "click" == a.type?!0 : !!(a.B.button & wp[0]))&&!(_.ef && _.Gg && a.ctrlKey)
};
_.nh.prototype.stopPropagation = function() {
    _.nh.T.stopPropagation.call(this);
    this.B.stopPropagation ? this.B.stopPropagation() : this.B.cancelBubble=!0
};
_.nh.prototype.preventDefault = function() {
    _.nh.T.preventDefault.call(this);
    var a = this.B;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, Jh)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (c) {}
};
_.nh.prototype.Op = function() {
    return this.B
};
_.nh.prototype.C = function() {};
var cC, Lh;
cC = "closure_listenable_" + (1E6 * Math.random() | 0);
_.wB = function(a) {
    return !(!a ||!a[cC])
};
Lh = 0;
var oh = function(a, c, f, g, h) {
    this.lb = a;
    this.B = null;
    this.src = c;
    this.type = f;
    this.hR=!!g;
    this.Tc = h;
    this.key=++Lh;
    this.gR = this.If=!1
}, hs = function(a) {
    a.gR=!0;
    a.lb = null;
    a.B = null;
    a.src = null;
    a.Tc = null
};
var ts = function(a) {
    this.src = a;
    this.B = {};
    this.G = 0
}, et, zs;
ts.prototype.add = function(a, c, f, g, h) {
    var l = a.toString();
    a = this.B[l];
    a || (a = this.B[l] = [], this.G++);
    var n = zs(a, c, g, h);
    - 1 < n ? (c = a[n], f || (c.If=!1)) : (c = new oh(c, this.src, l, !!g, h), c.If = f, a.push(c));
    return c
};
ts.prototype.remove = function(a, c, f, g) {
    a = a.toString();
    if (!(a in this.B))
        return !1;
    var h = this.B[a];
    c = zs(h, c, f, g);
    return - 1 < c ? (hs(h[c]), _.wd(h, c), 0 == h.length && (delete this.B[a], this.G--), !0) : !1
};
et = function(a, c) {
    var f = c.type;
    if (!(f in a.B))
        return !1;
    var g = _.xe(a.B[f], c);
    g && (hs(c), 0 == a.B[f].length && (delete a.B[f], a.G--));
    return g
};
_.ht = function(a, c, f, g, h) {
    a = a.B[c.toString()];
    c =- 1;
    a && (c = zs(a, f, g, h));
    return - 1 < c ? a[c] : null
};
zs = function(a, c, f, g) {
    for (var h = 0; h < a.length; ++h) {
        var l = a[h];
        if (!l.gR && l.lb == c && l.hR==!!f && l.Tc == g)
            return h
    }
    return - 1
};
var lt, vh, st, th, Gk, Fh, Gh, xh, lC;
lt = "closure_lm_" + (1E6 * Math.random() | 0);
vh = {};
st = 0;
_.ph = function(a, c, f, g, h) {
    if (_.ea(c)) {
        for (var l = 0; l < c.length; l++)
            _.ph(a, c[l], f, g, h);
        return null
    }
    f = _.tl(f);
    return _.wB(a) ? a.Q(c, f, g, h) : _.qh(a, c, f, !1, g, h)
};
_.qh = function(a, c, f, g, h, l) {
    if (!c)
        throw Error("u");
    var n=!!h, q = _.zt(a);
    q || (a[lt] = q = new ts(a));
    f = q.add(c, f, g, h, l);
    if (f.B)
        return f;
    g = th();
    f.B = g;
    g.src = a;
    g.lb = f;
    a.addEventListener ? a.addEventListener(c.toString(), g, n) : a.attachEvent(Gk(c.toString()), g);
    st++;
    return f
};
th = function() {
    var a = xh, c = yh ? function(f) {
        return a.call(c.src, c.lb, f)
    }
    : function(f) {
        f = a.call(c.src, c.lb, f);
        if (!f)
            return f
    };
    return c
};
_.Ah = function(a, c, f, g, h) {
    if (_.ea(c))
        for (var l = 0; l < c.length; l++)
            _.Ah(a, c[l], f, g, h);
    else 
        f = _.tl(f), _.wB(a) ? a.cb(c, f, g, h) : a && (a = _.zt(a)) && (c = _.ht(a, c, f, !!g, h)) && _.Ch(c)
};
_.Ch = function(a) {
    if (_.qe(a) ||!a || a.gR)
        return !1;
    var c = a.src;
    if (_.wB(c))
        return et(c.li, a);
    var f = a.type, g = a.B;
    c.removeEventListener ? c.removeEventListener(f, g, a.hR) : c.detachEvent && c.detachEvent(Gk(f), g);
    st--;
    (f = _.zt(c)) ? (et(f, a), 0 == f.G && (f.src = null, c[lt] = null)) : hs(a);
    return !0
};
Gk = function(a) {
    return a in vh ? vh[a] : vh[a] = "on" + a
};
Fh = function(a, c, f, g) {
    var h = 1;
    if (a = _.zt(a))
        if (c = a.B[c.toString()])
            for (c = c.concat(), a = 0; a < c.length; a++) {
                var l = c[a];
                l && l.hR == f&&!l.gR && (h&=!1 !== Gh(l, g))
            }
    return Boolean(h)
};
Gh = function(a, c) {
    var f = a.lb, g = a.Tc || a.src;
    a.If && _.Ch(a);
    return f.call(g, c)
};
xh = function(a, c) {
    if (a.gR)
        return !0;
    if (!yh) {
        var f = c || _.fh("window.event"), g = new _.nh(f, this), h=!0;
        if (!(0 > f.keyCode || void 0 != f.returnValue)) {
            t:
            {
                var l=!1;
                if (0 == f.keyCode)
                    try {
                        f.keyCode =- 1;
                        break t
                } catch (n) {
                    l=!0
                }
                if (l || void 0 == f.returnValue)
                    f.returnValue=!0
            }
            f = [];
            for (l = g.currentTarget; l; l = l.parentNode)
                f.push(l);
            for (var l = a.type, q = f.length - 1; !g.Ad && 0 <= q; q--)
                g.currentTarget = f[q], h&=Fh(f[q], l, !0, g);
            for (q = 0; !g.Ad && q < f.length; q++)
                g.currentTarget = f[q], h&=Fh(f[q], l, !1, g)
            }
        return h
    }
    return Gh(a, new _.nh(c, this))
};
_.zt = function(a) {
    a = a[lt];
    return a instanceof ts ? a : null
};
lC = "__closure_events_fn_" + (1E9 * Math.random()>>>0);
_.tl = function(a) {
    if (_.vd(a))
        return a;
    a[lC] || (a[lC] = function(c) {
        return a.handleEvent(c)
    });
    return a[lC]
};
_.hh(function(a) {
    xh = a(xh)
});
_.Hh = function() {
    _.dh.call(this);
    this.li = new ts(this);
    this.XK = this;
    this.eg = null
};
_.J(_.Hh, _.dh);
_.Hh.prototype[cC]=!0;
_.k = _.Hh.prototype;
_.k.KR = function() {
    return this.eg
};
_.k.tj = _.b(1);
_.k.addEventListener = function(a, c, f, g) {
    _.ph(this, a, c, f, g)
};
_.k.removeEventListener = function(a, c, f, g) {
    _.Ah(this, a, c, f, g)
};
_.k.dispatchEvent = function(a) {
    var c, f = this.KR();
    if (f)
        for (c = []; f; f = f.KR()
            )c.push(f);
    var f = this.XK, g = a.type || a;
    if (_.fa(a))
        a = new _.mh(a, f);
    else if (a instanceof _.mh)
        a.target = a.target || f;
    else {
        var h = a;
        a = new _.mh(g, f);
        _.sf(a, h)
    }
    var h=!0, l;
    if (c)
        for (var n = c.length - 1; !a.Ad && 0 <= n; n--)
            l = a.currentTarget = c[n], h = pC(l, g, !0, a) && h;
    a.Ad || (l = a.currentTarget = f, h = pC(l, g, !0, a) && h, a.Ad || (h = pC(l, g, !1, a) && h));
    if (c)
        for (n = 0; !a.Ad && n < c.length; n++)
            l = a.currentTarget = c[n], h = pC(l, g, !1, a) && h;
    return h
};
_.k.C = function() {
    _.Hh.T.C.call(this);
    if (this.li) {
        var a = this.li, c = 0, f;
        for (f in a.B) {
            for (var g = a.B[f], h = 0; h < g.length; h++)
                ++c, hs(g[h]);
            delete a.B[f];
            a.G--
        }
    }
    this.eg = null
};
_.k.Q = function(a, c, f, g) {
    return this.li.add(String(a), c, !1, f, g)
};
_.k.cb = function(a, c, f, g) {
    return this.li.remove(String(a), c, f, g)
};
var pC = function(a, c, f, g) {
    c = a.li.B[String(c)];
    if (!c)
        return !0;
    c = c.concat();
    for (var h=!0, l = 0; l < c.length; ++l) {
        var n = c[l];
        if (n&&!n.gR && n.hR == f) {
            var q = n.lb, t = n.Tc || n.src;
            n.If && et(a.li, n);
            h=!1 !== q.call(t, g) && h
        }
    }
    return h && 0 != g.Tg
};

_.Ni = function(a) {
    if ("function" == typeof a.Va)
        return a.Va();
    if (_.fa(a))
        return a.split("");
    if (_.re(a)) {
        for (var c = [], f = a.length, g = 0; g < f; g++)
            c.push(a[g]);
        return c
    }
    return _.Li(a)
};
_.hz = function(a) {
    if ("function" == typeof a.$b)
        return a.$b();
    if ("function" != typeof a.Va) {
        if (_.re(a) || _.fa(a)) {
            var c = [];
            a = a.length;
            for (var f = 0; f < a; f++)
                c.push(f);
            return c
        }
        return _.Ki(a)
    }
};
_.Oi = function(a, c, f) {
    if ("function" == typeof a.forEach)
        a.forEach(c, f);
    else if (_.re(a) || _.fa(a))(0, _.Be)(a, c, f);
    else 
        for (var g = _.hz(a), h = _.Ni(a), l = h.length, n = 0; n < l; n++)
            c.call(f, h[n], g && g[n], a)
};

_.Si = "StopIteration"in _.D ? _.D.StopIteration : Error("w");
_.Mi = function() {};
_.Mi.prototype.next = function() {
    throw _.Si;
};
_.Mi.prototype.xc = function() {
    return this
};
_.Pi = function(a, c) {
    this.G = {};
    this.B = [];
    this.M = this.ha = 0;
    var f = arguments.length;
    if (1 < f) {
        if (f%2)
            throw Error("q");
        for (var g = 0; g < f; g += 2)
            this.set(arguments[g], arguments[g + 1])
    } else if (a) {
        a instanceof _.Pi ? (f = a.$b(), g = a.Va()) : (f = _.Ki(a), g = _.Li(a));
        for (var h = 0; h < f.length; h++)
            this.set(f[h], g[h])
    }
};
_.k = _.Pi.prototype;
_.k.Da = function() {
    return this.ha
};
_.k.Va = function() {
    Qi(this);
    for (var a = [], c = 0; c < this.B.length; c++)
        a.push(this.G[this.B[c]]);
    return a
};
_.k.$b = function() {
    Qi(this);
    return this.B.concat()
};
_.k.zn = _.b(2);
_.k.equals = function(a, c) {
    if (this === a)
        return !0;
    if (this.ha != a.Da())
        return !1;
    var f = c || kA;
    Qi(this);
    for (var g, h = 0; g = this.B[h]; h++)
        if (!f(this.get(g), a.get(g)))
            return !1;
    return !0
};
var kA = function(a, c) {
    return a === c
};
_.Pi.prototype.isEmpty = function() {
    return 0 == this.ha
};
_.Pi.prototype.clear = function() {
    this.G = {};
    this.M = this.ha = this.B.length = 0
};
_.Pi.prototype.remove = function(a) {
    return _.Ri(this.G, a) ? (delete this.G[a], this.ha--, this.M++, this.B.length > 2 * this.ha && Qi(this), !0) : !1
};
var Qi = function(a) {
    if (a.ha != a.B.length) {
        for (var c = 0, f = 0; c < a.B.length;) {
            var g = a.B[c];
            _.Ri(a.G, g) && (a.B[f++] = g);
            c++
        }
        a.B.length = f
    }
    if (a.ha != a.B.length) {
        for (var h = {}, f = c = 0; c < a.B.length;)
            g = a.B[c], _.Ri(h, g) || (a.B[f++] = g, h[g] = 1), c++;
        a.B.length = f
    }
};
_.k = _.Pi.prototype;
_.k.get = function(a, c) {
    return _.Ri(this.G, a) ? this.G[a] : c
};
_.k.set = function(a, c) {
    _.Ri(this.G, a) || (this.ha++, this.B.push(a), this.M++);
    this.G[a] = c
};
_.k.forEach = function(a, c) {
    for (var f = this.$b(), g = 0; g < f.length; g++) {
        var h = f[g], l = this.get(h);
        a.call(c, l, h, this)
    }
};
_.k.clone = function() {
    return new _.Pi(this)
};
_.k.xc = function(a) {
    Qi(this);
    var c = 0, f = this.B, g = this.G, h = this.M, l = this, n = new _.Mi;
    n.next = function() {
        for (; ;) {
            if (h != l.M)
                throw Error("z");
            if (c >= f.length)
                throw _.Si;
            var n = f[c++];
            return a ? n : g[n]
        }
    };
    return n
};
_.Ri = function(a, c) {
    return Object.prototype.hasOwnProperty.call(a, c)
};

var rA, wA;
_.Pi.prototype.zn = _.d(2, function(a) {
    for (var c = 0; c < this.B.length; c++) {
        var f = this.B[c];
        if (_.Ri(this.G, f) && this.G[f] == a)
            return !0
    }
    return !1
});
_.qA = function(a) {
    var c = 0, f;
    for (f in a)
        c++;
    return c
};
rA = function(a, c) {
    if ("function" == typeof a.every)
        return a.every(c, void 0);
    if (_.re(a) || _.fa(a))
        return (0, _.Fe)(a, c, void 0);
    for (var f = _.hz(a), g = _.Ni(a), h = g.length, l = 0; l < h; l++)
        if (!c.call(void 0, g[l], f && f[l], a))
            return !1;
    return !0
};
wA = function(a) {
    return "function" == typeof a.Da ? a.Da() : _.re(a) || _.fa(a) ? a.length : _.qA(a)
};
var Hn;
_.Gn = function(a) {
    this.B = new _.Pi;
    if (a) {
        a = _.Ni(a);
        for (var c = a.length, f = 0; f < c; f++)
            this.add(a[f])
    }
};
Hn = function(a) {
    var c = typeof a;
    return "object" == c && a || "function" == c ? "o" + _.oe(a) : c.substr(0, 1) + a
};
_.k = _.Gn.prototype;
_.k.Da = function() {
    return this.B.Da()
};
_.k.add = function(a) {
    this.B.set(Hn(a), a)
};
_.k.remove = function(a) {
    return this.B.remove(Hn(a))
};
_.k.clear = function() {
    this.B.clear()
};
_.k.isEmpty = function() {
    return this.B.isEmpty()
};
_.k.contains = function(a) {
    a = Hn(a);
    return _.Ri(this.B.G, a)
};
_.k.Va = function() {
    return this.B.Va()
};
_.k.clone = function() {
    return new _.Gn(this)
};
_.k.equals = function(a) {
    return this.Da() == wA(a) && JA(this, a)
};
var JA = function(a, c) {
    var f = wA(c);
    if (a.Da() > f)
        return !1;
    !("undefined" != typeof _.Gn && c instanceof _.Gn) && 5 < f && (c = new _.Gn(c));
    return rA(a, function(a) {
        var f = c;
        return "function" == typeof f.contains ? f.contains(a) : "function" == typeof f.zn ? f.zn(a) : _.re(f) || _.fa(f) ? _.ve(f, a) : _.hi(f, a)
    })
};
_.Gn.prototype.xc = function() {
    return this.B.xc(!1)
};

var xk, Qk, Dp, Sn, Cp;
xk = function(a) {
    return /^\s*$/.test(a)?!1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
};
_.Qn = function(a) {
    a = String(a);
    if (xk(a))
        try {
            return eval("(" + a + ")")
    } catch (c) {}
    throw Error("G`" + a);
};
_.QA = function(a) {
    return eval("(" + a + ")")
};
_.PC = function(a) {
    return _.cm(new _.zp(void 0), a)
};
_.zp = function(a) {
    this.B = a
};
_.cm = function(a, c) {
    var f = [];
    Qk(a, c, f);
    return f.join("")
};
Qk = function(a, c, f) {
    switch (typeof c) {
    case "string":
        Cp(c, f);
        break;
    case "number":
        f.push((0, window.isFinite)(c)&&!(0, window.isNaN)(c) ? c : "null");
        break;
    case "boolean":
        f.push(c);
        break;
    case "undefined":
        f.push("null");
        break;
    case "object":
        if (null == c) {
            f.push("null");
            break
        }
        if (_.ea(c)) {
            var g = c.length;
            f.push("[");
            for (var h = "", l = 0; l < g; l++)
                f.push(h), h = c[l], Qk(a, a.B ? a.B.call(c, String(l), h) : h, f), h = ",";
            f.push("]");
            break
        }
        f.push("{");
        g = "";
        for (l in c)
            Object.prototype.hasOwnProperty.call(c, l) && (h = c[l], "function" != typeof h &&
            (f.push(g), Cp(l, f), f.push(":"), Qk(a, a.B ? a.B.call(c, l, h) : h, f), g = ","));
        f.push("}");
        break;
    case "function":
        break;
    default:
        throw Error("H`" + typeof c);
    }
};
Dp = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
};
Sn = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
Cp = function(a, c) {
    c.push('"', a.replace(Sn, function(a) {
        if (a in Dp)
            return Dp[a];
        var c = a.charCodeAt(0), h = "\\u";
        16 > c ? h += "000" : 256 > c ? h += "00" : 4096 > c && (h += "0");
        return Dp[a] = h + c.toString(16)
    }), '"')
};

_.OA = function(a, c) {
    _.Hh.call(this);
    this.G = a || 1;
    this.B = c || _.D;
    this.ha = (0, _.H)(this.bM, this);
    this.M = (0, _.pa)()
};
_.J(_.OA, _.Hh);
_.k = _.OA.prototype;
_.k.enabled=!1;
_.k.Oh = null;
_.k.setInterval = function(a) {
    this.G = a;
    this.Oh && this.enabled ? (_.PA(this), this.start()) : this.Oh && _.PA(this)
};
_.k.bM = function() {
    if (this.enabled) {
        var a = (0, _.pa)() - this.M;
        0 < a && a < .8 * this.G ? this.Oh = this.B.setTimeout(this.ha, this.G - a) : (this.Oh && (this.B.clearTimeout(this.Oh), this.Oh = null), this.dispatchEvent("tick"), this.enabled && (this.Oh = this.B.setTimeout(this.ha, this.G), this.M = (0, _.pa)()))
    }
};
_.k.start = function() {
    this.enabled=!0;
    this.Oh || (this.Oh = this.B.setTimeout(this.ha, this.G), this.M = (0, _.pa)())
};
_.PA = function(a) {
    a.enabled=!1;
    a.Oh && (a.B.clearTimeout(a.Oh), a.Oh = null)
};
_.OA.prototype.C = function() {
    _.OA.T.C.call(this);
    _.PA(this);
    delete this.B
};
_.Rn = function(a, c, f) {
    if (_.vd(a))
        f && (a = (0, _.H)(a, f));
    else if (a && "function" == typeof a.handleEvent)
        a = (0, _.H)(a.handleEvent, a);
    else 
        throw Error("t");
    return 2147483647 < c?-1 : _.D.setTimeout(a, c || 0)
};
_.Pt = function(a) {
    _.D.clearTimeout(a)
};

_.Em = function(a) {
    switch (a) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        return !0;
    default:
        return !1
    }
};
var Tn = function() {};
Tn.prototype.B = null;
var SA = function(a) {
    var c;
    (c = a.B) || (c = {}, Vn(a) && (c[0]=!0, c[1]=!0), c = a.B = c);
    return c
};
var Wn, Vn;
Wn = function() {};
_.J(Wn, Tn);
_.Xn = function(a) {
    return (a = Vn(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
};
Vn = function(a) {
    if (!a.G && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
        for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], f = 0; f < c.length; f++) {
            var g = c[f];
            try {
                return new window.ActiveXObject(g), a.G = g
            } catch (h) {}
        }
        throw Error("I");
    }
    return a.G
};
_.fo = new Wn;
var go, VA, ko;
_.Yn = function(a) {
    _.Hh.call(this);
    this.headers = new _.Pi;
    this.zt = a || null;
    this.G=!1;
    this.po = this.B = null;
    this.Kh = "";
    this.qa = 0;
    this.ha = this.ca = this.ye = this.Ei=!1;
    this.Ka = 0;
    this.Ld = null;
    this.M = "";
    this.Na = this.Za=!1
};
_.J(_.Yn, _.Hh);
go = /^https?$/i;
VA = ["POST", "PUT"];
ko = [];
_.mo = function(a, c, f, g, h, l) {
    var n = new _.Yn;
    ko.push(n);
    c && n.Q("complete", c);
    n.li.add("ready", n.fb, !0, void 0, void 0);
    l && (n.Ka = Math.max(0, l));
    n.send(a, f, g, h)
};
_.Yn.prototype.fb = function() {
    this.U();
    _.xe(ko, this)
};
_.Yn.prototype.Sk = function() {
    return this.M
};
_.Yn.prototype.send = function(a, c, f, g) {
    if (this.B)
        throw Error("J`" + this.Kh + "`" + a);
    c = c ? c.toUpperCase() : "GET";
    this.Kh = a;
    this.qa = 0;
    this.Ei=!1;
    this.G=!0;
    this.B = this.zt ? _.Xn(this.zt) : _.Xn(_.fo);
    this.po = this.zt ? SA(this.zt) : SA(_.fo);
    this.B.onreadystatechange = (0, _.H)(this.eb, this);
    try {
        this.ca=!0, this.B.open(c, String(a), !0), this.ca=!1
    } catch (h) {
        YA(this);
        return 
    }
    a = f || "";
    var l = this.headers.clone();
    g && _.Oi(g, function(a, c) {
        l.set(c, a)
    });
    g = _.ue(l.$b(), SC);
    f = _.D.FormData && a instanceof _.D.FormData;
    !_.ve(VA, c) || g || f ||
    l.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    l.forEach(function(a, c) {
        this.B.setRequestHeader(c, a)
    }, this);
    this.M && (this.B.responseType = this.M);
    "withCredentials"in this.B && (this.B.withCredentials = this.Za);
    try {
        $A(this), 0 < this.Ka && ((this.Na = aB(this.B)) ? (this.B.timeout = this.Ka, this.B.ontimeout = (0, _.H)(this.Ss, this)) : this.Ld = _.Rn(this.Ss, this.Ka, this)), this.ye=!0, this.B.send(a), this.ye=!1
    } catch (n) {
        YA(this)
    }
};
var aB = function(a) {
    return _.W && _.sl(9) && _.qe(a.timeout) && _.kf(a.ontimeout)
}, SC = function(a) {
    return "content-type" == a.toLowerCase()
};
_.Yn.prototype.Ss = function() {
    "undefined" != typeof _.na && this.B && (this.qa = 8, this.dispatchEvent("timeout"), this.abort(8))
};
var YA = function(a) {
    a.G=!1;
    a.B && (a.ha=!0, a.B.abort(), a.ha=!1);
    a.qa = 5;
    $n(a);
    ao(a)
}, $n = function(a) {
    a.Ei || (a.Ei=!0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
_.Yn.prototype.abort = function(a) {
    this.B && this.G && (this.G=!1, this.ha=!0, this.B.abort(), this.ha=!1, this.qa = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ao(this))
};
_.Yn.prototype.C = function() {
    this.B && (this.G && (this.G=!1, this.ha=!0, this.B.abort(), this.ha=!1), ao(this, !0));
    _.Yn.T.C.call(this)
};
_.Yn.prototype.eb = function() {
    this.Ma() || (this.ca || this.ye || this.ha ? bo(this) : this.pa())
};
_.Yn.prototype.pa = function() {
    bo(this)
};
var bo = function(a) {
    if (a.G && "undefined" != typeof _.na && (!a.po[1] || 4 != _.iB(a) || 2 != a.getStatus()))
        if (a.ye && 4 == _.iB(a))
            _.Rn(a.eb, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == _.iB(a)) {
            a.G=!1;
            try {
                _.Eu(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.qa = 6, a.getStatus(), $n(a))
            } finally {
                ao(a)
            }
    }
}, ao = function(a, c) {
    if (a.B) {
        $A(a);
        var f = a.B, g = a.po[0] ? _.gh: null;
        a.B = null;
        a.po = null;
        c || a.dispatchEvent("ready");
        try {
            f.onreadystatechange = g
        } catch (h) {}
    }
}, $A = function(a) {
    a.B && a.Na && (a.B.ontimeout = null);
    _.qe(a.Ld) && (_.Pt(a.Ld), a.Ld = null)
};
_.Yn.prototype.kh = function() {
    return !!this.B
};
_.Eu = function(a) {
    var c = a.getStatus(), f;
    if (!(f = _.Em(c))) {
        if (c = 0 === c)
            a = _.Vi(String(a.Kh))[1] || null, !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), c=!go.test(a ? a.toLowerCase() : "");
        f = c
    }
    return f
};
_.iB = function(a) {
    return a.B ? a.B.readyState : 0
};
_.Yn.prototype.getStatus = function() {
    try {
        return 2 < _.iB(this) ? this.B.status : - 1
    } catch (a) {
        return - 1
    }
};
_.KI = function(a) {
    try {
        return a.B ? a.B.responseText : ""
    } catch (c) {
        return ""
    }
};
_.pA = function(a) {
    try {
        if (!a.B)
            return null;
        if ("response"in a.B)
            return a.B.response;
        switch (a.M) {
        case "":
        case "text":
            return a.B.responseText;
        case "arraybuffer":
            if ("mozResponseArrayBuffer"in a.B)
                return a.B.mozResponseArrayBuffer
        }
        return null
    } catch (c) {
        return null
    }
};
_.Yn.prototype.getAllResponseHeaders = function() {
    return this.B && 4 == _.iB(this) ? this.B.getAllResponseHeaders() : ""
};
_.hh(function(a) {
    _.Yn.prototype.pa = a(_.Yn.prototype.pa)
});

var ___;
_.Yl = window.tamings___ || [];
_.Zl = window.caja___;
___ = window.___;
_.L.Ui = function() {
    var a = {}, c = [], f = function(a) {
        var c = {
            method: a.request.method,
            id: a.key
        };
        a.request.rpc && (c.params = a.request.rpc);
        return c
    };
    a.execute = function(a) {
        for (var h = {}, l = {}, n = 0, q = [], t = 0; t < c.length; t++) {
            var v = c[t].request.transport;
            l[v.name] || (q.push(v), n++);
            l[v.name] = l[v.name] || [];
            l[v.name].push(f(c[t]))
        }
        t = function(f) {
            f.error && (h.error = f.error);
            for (var l = 0; l < c.length; l++) {
                var q = c[l].key, t = f[q];
                t && (h[q] = t.error ? t : t.data || t.result)
            }
            n--;
            0 === n && a(h)
        };
        for (v = 0; v < q.length; v++)
            q[v].execute(l[q[v].name], t);
        0 == n && window.setTimeout(function() {
            a(h)
        }, 0)
    };
    a.add = function(f, h) {
        h && f && c.push({
            key: f,
            request: h
        });
        return a
    };
    return a
};
_.L.qh = function(a, c) {
    if ("newBatch" !== a) {
        for (var f = a.split("."), g = window.osapi, h = 0; h < f.length - 1; h++)
            g[f[h]] = g[f[h]] || {}, g = g[f[h]];
        var l = f[f.length - 1];
        g[l] ? (g.__dupwarn || _.Lb("Skipping duplicate osapi method definition " + a + " on transport " + c.name + "; others may exist, but suppressing warnings"), g.__dupwarn=!0) : (g[l] = function(f) {
            f = f || {};
            f.userId = f.userId || "@viewer";
            f.groupId = f.groupId || "@self";
            return new $l(a, c, f)
        }, "undefined" !== typeof _.Yl && _.Yl.push(function() {
            _.Zl.markTameAsFunction(g[l], a)
        }))
    }
};
var $l = function(a, c, f) {
    this.method = a;
    this.transport = c;
    this.rpc = f
};
$l.prototype.execute = function(a) {
    var c = "undefined" !== typeof _.Zl && _.Zl.getUseless && _.Zl.getUseless(), f = c ? _.Zl.getUseless(): this, g = c ? _.Zl.untame(a): a;
    a = _.L.Ui();
    a.add(this.method, this);
    a.execute(function(a) {
        a.error ? g.call(f, a.error) : g.call(f, a[f.method])
    })
};
_.e("osapi.newBatch.add", _.L.Ui.add);
_.e("osapi.newBatch.execute", _.L.Ui.execute);
_.e("osapi._registerMethod", _.L.qh);
_.e("osapi._BoundCall", $l);
_.e("osapi._BoundCall.prototype.execute", $l.prototype.execute);
var am = function(a) {
    a = a.split(".");
    for (var c = window.osapi || window, f; f = a.shift();)
        if (null != c[f])
            c = c[f];
        else 
            return null;
    return c
}, bm = function(a, c) {
    var f = a.split("."), g = window;
    f[0]in g ||!g.execScript || g.execScript("var " + f[0]);
    for (var h; f.length && (h = f.shift());)
        f.length || void 0 === c ? g[h] ? g = g[h] : g = g[h] = {} : g[h] = c
};
var fm, vm, hm, km, om, dm, Jm, Nm;
fm = {};
vm = function(a, c) {
    _.L.qh(a, {
        name: "googleapis",
        execute: dm,
        root: c
    });
    var f = am(a);
    bm(a, f);
    if (0 != a.indexOf("googleapis.")) {
        var g = a.substring(a.indexOf(".") + 1), h = g.lastIndexOf(".delete");
        - 1 != h && h + 7 == g.length && (g = g.replace(".delete", ".remove"));
        bm("googleapis." + g, f)
    }
};
_.em = function(a) {
    for (var c in a)
        a.hasOwnProperty(c) && (fm[c] = a[c])
};
_.gm = function(a) {
    null == a ? _.jm && delete _.jm.key : (_.jm = _.jm || {}, _.jm.key = a)
};
hm = function(a, c) {
    if ("trace" != a)
        throw 'only the "trace" parameter may be set using this API';
    null == c ? _.jm && delete _.jm[a] : (_.jm = _.jm || {}, _.jm[a] = c)
};
km = function(a) {
    a = a || {};
    if (window.navigator) {
        for (var c = ["appVersion", "platform", "userAgent"], f = [], g = 0; g < c.length; g++)
            window.navigator[c[g]] && f.push((0, window.encodeURIComponent)(c[g]) + "=" + (0, window.encodeURIComponent)(window.navigator[c[g]]));
        a["X-ClientDetails"] = f.join("&")
    }
    return a
};
om = function(a) {
    a.clientVersion = "1.0.0-alpha";
    _.jm && (a.urlParams = _.jm)
};
dm = function(a, c) {
    for (var f = this.root || null, g = 0; g < a.length; g++) {
        var h = a[g], l;
        l = h.method;
        l = l.substring(0, l.indexOf("."));
        h.jsonrpc = "2.0";
        h.key = h.id;
        f = h.root || f;
        (l = fm[l] || "v1", !h.apiVersion) && (h.apiVersion = l)
    }
    g = {};
    g = _.Bk.Md(g);
    g = km(g);
    f = {
        requests: a,
        headers: g,
        root: f
    };
    om(f);
    _.Bk.Dd("makeRequest", f, c)
};
Jm = function(a, c) {
    for (var f = 0, g = a.length; f < g; f++) {
        var h = a[f];
        h.key = h.id;
        var l = h.params.headers || {}, l = _.Bk.Md(l), l = km(l);
        h.params.headers = l;
        om(h.params)
    }
    _.Bk.Dd("makeHttpRequests", a, c)
};
Nm = function() {
    var a = _.R.dc(), c = {
        debug: "googleapis.config/debug"
    }, f;
    for (f in c)
        a[f] && _.Fa(c[f], "true" == a[f]);
    for (var g in _.P("googleapis.config/methods"))
        vm(g);
    _.P("googleapis.config/versions") && _.em(_.P("googleapis.config/versions"));
    _.P("googleapis.config/developerKey") && _.gm(_.P("googleapis.config/developerKey"));
    _.L.qh("googleapis.newHttpRequest", {
        name: "googleapis",
        execute: Jm
    });
    bm("googleapis.newHttpRequest", am("googleapis.newHttpRequest"))
};
Nm();
var wm = function() {
    this.B = {};
    this.G = _.L.Ui()
};
wm.prototype.add = function(a, c, f) {
    this.B[a] = f;
    this.G.add(a, c);
    return this
};
wm.prototype.execute = function(a) {
    var c = this;
    this.G.execute(function(f) {
        var g = {}, h=!1, l;
        for (l in f)
            if (f.hasOwnProperty(l)) {
                var n = f[l], q = c.B[l];
                q ? q(n) : (g[l] = n, h=!0)
            }
        h && a && a(g)
    })
};
_.e("googleapis.ApiClient.register", vm);
_.e("googleapis.ApiClient.setVersions", _.em);
_.e("googleapis.ApiClient.setDeveloperKey", _.gm);
_.e("googleapis.ApiClient.setUrlParameter", hm);
_.e("googleapis.ApiClient.init", Nm);
_.e("googleapis.Batch", wm);
_.e("googleapis.Batch.prototype.add", wm.prototype.add);
_.e("googleapis.Batch.prototype.execute", wm.prototype.execute);
_.e("googleapis.init", function() {
    Nm()
});
_.e("googleapis.newBatch", function() {
    return new wm
});
_.e("googleapis.newRequest", function(a, c, f) {
    c = c || {};
    var g = {
        name: "googleapis",
        execute: dm,
        root: f
    }, h = _.L.Ui(), l = this;
    f = {};
    f.method = a;
    f.transport = g;
    f.rpc = c;
    f.execute = function(f) {
        h.add(a, {
            method: a,
            rpc: c,
            transport: g
        });
        h.execute(function(c) {
            c.error ? f.call(l, c.error) : f.call(l, c[a])
        })
    };
    return f
});
_.e("googleapis.register", function(a, c) {
    vm(a, c)
});
_.e("googleapis.setUrlParameter", function(a, c) {
    hm(a, c)
});
_.e("googleapis.setDeveloperKey", function(a) {
    _.gm(a)
});
_.e("googleapis.setVersions", function(a) {
    _.em(a)
});

var xl;
_.vl = function(a) {
    if (!_.re(a))
        return null;
    for (var c = {}, f = 0; f < a.length; f++)
        c[a[f]] = a[f];
    return c
};
_.wl = function(a, c) {
    var f = a.length;
    if (f != c.length)
        return !1;
    for (var g = 0; g < f; ++g) {
        var h = a.charCodeAt(g), l = c.charCodeAt(g);
        65 <= h && 90 >= h && (h += 32);
        65 <= l && 90 >= l && (l += 32);
        if (h != l)
            return !1
    }
    return !0
};
xl = null;
_.Al = function(a) {
    if (null === xl) {
        var c = _.P("client/headers/response");
        c || (c = _.P("googleapis/headers/response"));
        xl = _.vl(c)
    }
    if (null != xl) {
        if (xl.hasOwnProperty(a))
            return !0;
        for (var f in xl)
            if (xl.hasOwnProperty(f) && _.wl(f, a))
                return !0
    }
    return !1
};
_.Cl = function(a) {
    a = String(a || "").split("\x00").join("");
    for (var c = [], f = 0, g = a.length; f < g; ++f) {
        var h = a.charAt(f), l = a.charCodeAt(f);
        if (55296 <= l && 56319 >= l && f + 1 < g) {
            var n = a.charAt(f + 1), q = a.charCodeAt(f + 1);
            56320 <= q && 57343 >= q && (h += n, l = 65536 + (l - 55296<<10) + (q - 56320), ++f)
        }
        if (!(0 <= l && 1114109 >= l) || 55296 <= l && 57343 >= l || 64976 <= l && 65007 >= l || 65534 == (l & 65534))
            l = 65533, h = String.fromCharCode(l);
        n=!(32 <= l && 126 >= l) || " " == h || ":" == h || "\\" == h;
        "%" == h && (f + 2 >= g ? n=!0 : (q = 16 * (0, window.parseInt)(a.charAt(f + 1), 16) + (0, window.parseInt)(a.charAt(f +
        2), 16), 0 <= q && 255 >= q ? (l = q, h = 0 == l ? "" : "%" + (256 + q).toString(16).toUpperCase().substr(1), f += 2) : n=!0));
        n && (h = (0, window.encodeURIComponent)(h), 1 >= h.length && (0 <= l && 127 >= l ? h = "%" + (256 + l).toString(16).toUpperCase().substr(1) : (l = 65533, h = (0, window.encodeURIComponent)(String.fromCharCode(l)))));
        c.push(h)
    }
    a = c.join("");
    a = a.split("#")[0];
    a = a.split("?");
    c = a[0].split("/");
    h = [];
    f = 0;
    for (g = c.length; f < g; ++f)
        l = c[f], n = l.split("%2E").join("."), n = n.split((0, window.encodeURIComponent)("\uff0e")).join("."), "." == n ? f + 1 == g && h.push("") :
        ".." == n ? (0 < h.length && h.pop(), f + 1 == g && h.push("")) : h.push(l);
    a[0] = h.join("/");
    for (a = a.join("?"); a && "/" == a.charAt(0);)
        a = a.substr(1);
    return "/" + a
};
_.fu = function(a) {
    var c = _.Cl(a);
    if (String(a) != c)
        throw Error("ga");
    (a = c) && "/" == a.charAt(a.length - 1) || (a = (a || "") + "/");
    _.T.register("init", function() {
        _.fu(a)
    });
    _.iu = a;
    _.R.dc(window.location.href)
};
_.xu = "function" == typeof window.atob;
var jz = function(a) {
    this.G = a;
    this.B = _.ta;
    this.qa = this.Ka;
    this.wc = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
    if (this.G.RE) {
        this.B = this.G.kq(this.B, this.G.RE);
        a = this.B.document;
        var c = a.createElement("script");
        c.setAttribute("type", "text/javascript");
        c.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
        a.body.appendChild(c);
        this.qa = this.B.doPostMsg
    }
    this.ha = {};
    this.M = {};
    a = (0, _.H)(this.Ld, this);
    _.Za(this.B, "message", a);
    _.Ka(_.bb, "RPMQ", []).push(a);
    this.B != this.B.parent && CC(this, this.B.parent, "{h:'" + (0, window.escape)(this.B.name) + "'}", "*")
}, lz = function(a) {
    var c = null;
    0 === a.indexOf("{h:'") && a.indexOf("'}") === a.length - 2 && (c = (0, window.unescape)(a.substring(4, a.length - 2)));
    return c
}, kz = function(a) {
    a = (0, _.of)(a);
    return null !== a && "object" === typeof a&&!!a.g
};
jz.prototype.Ld = function(a) {
    var c = String(a.data);
    (0, _.ke)("gapi.rpc.receive(" + Qz + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
    var f = 0 !== c.indexOf("!_");
    f || (c = c.substring(2));
    var g = kz(c);
    if (!f&&!g) {
        if (!g && (f = lz(c))) {
            if (this.ha[f])
                this.ha[f]();
            else 
                this.M[f] = 1;
            return 
        }
        var h = a.origin, l = this.G.zp;
        this.wc ? _.ta.setTimeout(function() {
            l(c, h)
        }, 0) : l(c, h)
    }
};
jz.prototype.sf = function(a, c) {
    ".." === a || this.M[a] ? (c(), delete this.M[a]) : this.ha[a] = c
};
var CC = function(a, c, f, g) {
    var h = kz(f) ? "": "!_";
    (0, _.ke)("gapi.rpc.send(" + Qz + "): " + (!f || 512 >= f.length ? f : f.substr(0, 512) + "... (" + f.length + " bytes)"));
    a.qa(c, h + f, g)
};
jz.prototype.Ka = function(a, c, f) {
    a.postMessage(c, f)
};
jz.prototype.send = function(a, c, f) {
    (a = this.G.kq(this.B, a))&&!a.closed && CC(this, a, c, f)
};
var Rz, Hz, pz, uz, Nz, Sz, Pz, Oz, Dl, Qz, Cz, Ez, mz, Gz, nz, oz, qz, rz, yz, xz, zz, Bz, Dz, Fz, tz, vz, Iz, Jz, Kz, Lz;
Rz = 0;
Hz = [];
pz = {};
uz = {};
Nz = _.R.dc;
Sz = Nz();
Pz = Sz.rpctoken;
Oz = Sz.parent || _.ua.referrer;
Dl = Sz.rly;
Qz = Dl || (_.ta !== _.ta.top || _.ta.opener) && _.ta.name || "..";
Cz = null;
Ez = {};
mz = function() {};
Gz = {
    send: mz,
    sf: mz
};
nz = function(a, c) {
    "/" == c.charAt(0) && (c = c.substring(1), a = _.ta.top);
    for (var f = c.split("/"); f.length;) {
        var g;
        g = f.shift();
        "{" == g.charAt(0) && "}" == g.charAt(g.length - 1) && (g = g.substring(1, g.length - 1));
        if (".." === g)
            a = a == a.parent ? a.opener : a.parent;
        else if (".." !== g && a.frames[g]) {
            if (a = a.frames[g], !("postMessage"in a))
                throw "Not a window";
        } else 
            return null
    }
    return a
};
oz = function(a) {
    return (a = pz[a]) && a.ve
};
qz = function(a) {
    if (a.f in{})
        return !1;
    var c = a.t, f = pz[a.r];
    a = a.origin;
    return f && (f.ve === c ||!f.ve&&!c) && (a === f.origin || "*" === f.origin)
};
rz = function(a) {
    var c = a.id.split("/"), f = c[c.length - 1], g = a.origin;
    return function(a) {
        var c = a.origin;
        return a.f == f && (g == c || "*" == g)
    }
};
_.sz = function(a, c, f) {
    a = tz(a);
    uz[a.name] = {
        Ip: c,
        lf: a.lf,
        Us: f || qz
    };
    vz()
};
_.wz = function(a) {
    delete uz[tz(a).name]
};
yz = {};
xz = function(a, c) {
    var f = yz["_" + a];
    f && f[1](this) && f[0].call(this, c)
};
zz = function(a) {
    var c = a.c;
    if (!c)
        return mz;
    var f = a.r, g = a.g ? "legacy__": "";
    return function() {
        var a = [].slice.call(arguments, 0);
        a.unshift(f, g + "__cb", null, c);
        _.Az.apply(null, a)
    }
};
Bz = function(a) {
    Cz = a
};
Dz = function(a) {
    Ez[a] || (Ez[a] = _.ta.setTimeout(function() {
        Ez[a]=!1;
        Fz(a)
    }, 0))
};
Fz = function(a) {
    var c = pz[a];
    if (c && c.ready) {
        var f = c.kj;
        for (c.kj = []; f.length;)
            Gz.send(a, (0, _.mf)(f.shift()), c.origin)
    }
};
tz = function(a) {
    return 0 === a.indexOf("legacy__") ? {
        name: a.substring(8),
        lf: !0
    } : {
        name: a,
        lf: !1
    }
};
vz = function() {
    for (var a = _.P("rpc/residenceSec") || 60, c = (new Date).getTime() / 1E3, f = 0, g; g = Hz[f]; ++f) {
        var h = g.qf;
        if (!h || 0 < a && c - g.timestamp > a)
            Hz.splice(f, 1), --f;
        else {
            var l = h.s, n = uz[l] || uz["*"];
            if (n)
                if (Hz.splice(f, 1), --f, h.origin = g.origin, g = zz(h), h.callback = g, n.Us(h)) {
                    if ("__cb" !== l&&!!n.lf!=!!h.g)
                        break;
                        h = n.Ip.apply(h, h.a);
                        void 0 !== h && g(h)
                } else (0, _.ke)("gapi.rpc.rejected(" + Qz + "): " + l)
            }
    }
};
Iz = function(a, c, f) {
    Hz.push({
        qf: a,
        origin: c,
        timestamp: (new Date).getTime() / 1E3
    });
    f || vz()
};
Jz = function(a, c) {
    var f = (0, _.of)(a);
    Iz(f, c, !1)
};
Kz = function(a) {
    for (; a.length;)
        Iz(a.shift(), this.origin, !0);
    vz()
};
Lz = function(a) {
    var c=!1;
    a = a.split("|");
    var f = a[0];
    0 <= f.indexOf("/") && (c=!0);
    return {
        id: f,
        origin: a[1] || "*",
        Ki: c
    }
};
_.Mz = function(a, c, f, g) {
    var h = Lz(a);
    g && (_.ta.frames[h.id] = _.ta.frames[h.id] || g);
    a = h.id;
    if (!pz.hasOwnProperty(a)) {
        f = f || null;
        g = h.origin;
        if (".." === a)
            g = _.Rb.Pq(Oz), f = f || Pz;
        else if (!h.Ki) {
            var l = _.ua.getElementById(a);
            l && (l = l.src, g = _.Rb.Pq(l), f = f || Nz(l).rpctoken)
        }
        "*" === h.origin && g || (g = h.origin);
        pz[a] = {
            ve: f,
            kj: [],
            origin: g,
            hs: c,
            xm: function() {
                var c = a;
                pz[c].ready = 1;
                Fz(c)
            }
        };
        Gz.sf(a, pz[a].xm)
    }
    return pz[a].xm
};
_.Az = function(a, c, f, g) {
    a = a || "..";
    _.Mz(a);
    a = a.split("|", 1)[0];
    var h = c, l = [].slice.call(arguments, 3), n = f, q = Qz, t = Pz, v = pz[a], w = q, A = Lz(a);
    if (v && ".." !== a) {
        if (A.Ki) {
            if (!(t = pz[a].hs)) {
                t = null;
                Cz ? t = Cz.substring(1).split("/") : t = [Qz];
                for (var w = t.length - 1, F = _.ta.parent; F !== _.ta.top;) {
                    var z = F.parent;
                    if (!w--) {
                        for (var I = null, E = z.frames.length, K = 0; K < E; ++K)
                            z.frames[K] == F && (I = K);
                        t.unshift("{" + I + "}")
                    }
                    F = z
                }
                t = "/" + t.join("/")
            }
            w = t
        } else 
            w = q = "..";
        t = v.ve
    }
    n && A ? (v = qz, A.Ki && (v = rz(A)), yz["_" + ++Rz] = [n, v], A = Rz) : A = null;
    l = {
        s: h,
        f: q,
        r: w,
        t: t,
        c: A,
        a: l
    };
    h = tz(h);
    l.s = h.name;
    l.g = h.lf;
    pz[a].kj.push(l);
    Dz(a)
};
if ("function" === typeof _.ta.postMessage || "object" === typeof _.ta.postMessage)
    Gz = new jz({
        RE: Dl ? "../" + Dl: null,
        zp: Jz,
        kq: nz,
        GP: Qz,
        $f: oz,
        $P: Bz
    }), _.sz("__cb", xz, function() {
        return !0
    }), _.sz("_processBatch", Kz, function() {
        return !0
    }), _.Mz("..");

_.Fu = function(a) {
    return new _.C(a)
};
_.Ob = _.Ob || {};
_.Ob.Xk = function() {
    var a = 0, c = 0;
    window.self.innerHeight ? (a = window.self.innerWidth, c = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (a = window.document.documentElement.clientWidth, c = window.document.documentElement.clientHeight) : window.document.body && (a = window.document.body.clientWidth, c = window.document.body.clientHeight);
    return {
        width: a,
        height: c
    }
};

_.Ob = _.Ob || {};
(function() {
    function a(a, f) {
        window.getComputedStyle(a, "").getPropertyValue(f).match(/^([0-9]+)/);
        return (0, window.parseInt)(RegExp.$1, 10)
    }
    _.Ob.Cd = function() {
        var c = _.Ob.Xk().height, f = window.document.body, g = window.document.documentElement;
        if ("CSS1Compat" === window.document.compatMode && g.scrollHeight)
            return g.scrollHeight !== c ? g.scrollHeight : g.offsetHeight;
        if (0 <= window.navigator.userAgent.indexOf("AppleWebKit")) {
            c = 0;
            for (f = [window.document.body]; 0 < f.length;) {
                var h = f.shift(), g = h.childNodes;
                if ("undefined" !==
                typeof h.style) {
                    var l = h.style.overflowY;
                    l || (l = (l = window.document.defaultView.getComputedStyle(h, null)) ? l.overflowY : null);
                    if ("visible" != l && "inherit" != l && (l = h.style.height, l || (l = (l = window.document.defaultView.getComputedStyle(h, null)) ? l.height : ""), 0 < l.length && "auto" != l))
                        continue
                }
                for (h = 0; h < g.length; h++) {
                    l = g[h];
                    if ("undefined" !== typeof l.offsetTop && "undefined" !== typeof l.offsetHeight)
                        var n = l.offsetTop + l.offsetHeight + a(l, "margin-bottom"), c = Math.max(c, n);
                    f.push(l)
                }
            }
            return c + a(window.document.body, "border-bottom") + a(window.document.body, "margin-bottom") + a(window.document.body, "padding-bottom")
        }
        if (f && g)
            return h = g.scrollHeight, l = g.offsetHeight, g.clientHeight !== l && (h = f.scrollHeight, l = f.offsetHeight), h > c ? h > l ? h : l : h < l ? h : l
    }
})();

var Ib, Jb, Cb, Db, Ab, Bb, Gb, zb, Eb, Jb;
_.Rl = function() {
    var a;
    Jb ? (a = new _.ta.Uint32Array(1), Ib.getRandomValues(a), a = Number("0." + a[0])) : (a = Ab, a += (0, window.parseInt)(Gb.substr(0, 20), 16), Gb = Eb(Gb), a = a / (Bb + Math.pow(16, 20)));
    return a
};
Ib = _.ta.crypto;
Jb=!1;
Cb = 0;
Db = 0;
Ab = 1;
Bb = 0;
Gb = "";
zb = function(a) {
    a = a || _.ta.event;
    var c = a.screenX + a.clientX<<16, c = c + (a.screenY + a.clientY), c = (new Date).getTime()%1E6 * c;
    Ab = Ab * c%Bb;
    0 < Cb&&++Db == Cb && _.Xa(_.ta, "mousemove", zb, "remove", "de")
};
Eb = function(a) {
    var c = new _.pi;
    c.bB(a);
    return c.Of()
};
Jb=!!Ib && "function" == typeof Ib.getRandomValues;
Jb || (Bb = 1E6 * (window.screen.width * window.screen.width + window.screen.height), Gb = Eb(_.ua.cookie + "|" + _.ua.location + "|" + (new Date).getTime() + "|" + Math.random()), Cb = _.P("random/maxObserveMousemove") || 0, 0 != Cb && _.Za(_.ta, "mousemove", zb));

var Tl, Wl, zm, Tm, Um, on, vn, wn, xn, zn, Cn, kc, mb, nb, ob, pb;
_.Sl = function(a, c) {
    a = a || {};
    for (var f in a)
        _.Qa(a, f) && (c[f] = a[f])
};
Tl = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/;
_.Ul = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
Wl = function(a, c) {
    var f = [];
    if (a)
        for (var g in a)
            if (_.Qa(a, g) && null != a[g]) {
                var h = c ? c(a[g]): a[g];
                f.push((0, window.encodeURIComponent)(g) + "=" + (0, window.encodeURIComponent)(h))
            }
    return f
};
zm = function(a) {
    return a.yc + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Vf.length ? "#" + a.Vf.join("&") : "")
};
Tm = function(a) {
    a = a.match(Tl);
    var c = _.r();
    c.yc = a[1];
    c.query = a[3] ? [a[3]] : [];
    c.Vf = a[5] ? [a[5]] : [];
    return c
};
Um = /'/g;
on = /"/g;
vn = />/g;
wn = /</g;
xn = /&/g;
zn = function(a) {
    for (; a.firstChild;)
        a.removeChild(a.firstChild)
};
_.An = function(a, c) {
    var f = "";
    2E3 < c.length && (f = c.substring(2E3), c = c.substring(0, 2E3));
    var g = a.createElement("div"), h = a.createElement("a");
    h.href = c;
    g.appendChild(h);
    g.innerHTML = g.innerHTML;
    c = String(g.firstChild.href);
    g.parentNode && g.parentNode.removeChild(g);
    return c + f
};
_.Bn = function(a, c, f, g) {
    a = Tm(a);
    a.query.push.apply(a.query, Wl(c, g));
    a.Vf.push.apply(a.Vf, Wl(f, g));
    return zm(a)
};
Cn = function(a) {
    return String(a).replace(xn, "&amp;").replace(wn, "&lt;").replace(vn, "&gt;").replace(on, "&quot;").replace(Um, "&#39;")
};
mb = function() {
    var a = _.bb.onl;
    if (!a) {
        a = _.r();
        _.bb.onl = a;
        var c = _.r();
        a.e = function(a) {
            var g = c[a];
            g && (delete c[a], g())
        };
        a.a = function(a, g) {
            c[a] = g
        };
        a.r = function(a) {
            delete c[a]
        }
    }
    return a
};
nb = function(a, c) {
    var f = c.onload;
    return "function" === typeof f ? (mb().a(a, f), f) : null
};
ob = function(a) {
    _.Sa(/^\w+$/.test(a), "Unsupported id - " + a);
    mb();
    return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
};
pb = function(a) {
    mb().r(a)
};
var rb, ub, hc;
_.vb = {
    allowtransparency: "true",
    frameborder: "0",
    hspace: "0",
    marginheight: "0",
    marginwidth: "0",
    scrolling: "no",
    style: "",
    tabindex: "0",
    vspace: "0",
    width: "100%"
};
rb = {
    allowtransparency: !0,
    onload: !0
};
ub = 0;
_.Dn = function(a, c) {
    var f, g = 0;
    do 
        f = c.id || ["I", ub++, "_", (new Date).getTime()].join("");
    while (a.getElementById(f) && 5>++g);
    _.Sa(5 > g, "Error creating iframe id");
    return f
};
_.Ln = function(a, c) {
    return a ? c + "/" + a : ""
};
_.qa = function(a, c, f, g) {
    var h = {}, l = {};
    a.documentMode && 9 > a.documentMode && (h.hostiemode = a.documentMode);
    _.Sl(g.queryParams || {}, h);
    _.Sl(g.fragmentParams || {}, l);
    var n = g.connectWithQueryParams ? h: l, q = g.pfname, t = _.r();
    t.id = f;
    t.parent = a.location.protocol + "//" + a.location.host;
    f = _.Wa(a.location.href, "parent");
    q = q || "";
    !q && f && (q = _.Ln(_.Wa(a.location.href, "id", ""), _.Wa(a.location.href, "pfname", "")));
    t.pfname = q;
    _.Sl(t, n);
    (t = _.Wa(c, "rpctoken") || h.rpctoken || l.rpctoken) || (t = n.rpctoken = g.rpctoken || String(Math.round(1E8 *
    _.Rl())));
    g.rpctoken = t;
    n = a.location.href;
    a = _.r();
    (t = _.Wa(n, "_bsh", _.bb.bsh)) && (a._bsh = t);
    (n = _.bb.dpo ? _.bb.h : _.Wa(n, "jsh", _.bb.h)) && (a.jsh = n);
    g.hintInFragment ? _.Sl(a, l) : _.Sl(a, h);
    return _.Bn(c, h, l, g.paramsSerializer)
};
hc = function(a) {
    _.Sa(!a || _.Ul.test(a), "Illegal url for new iframe - " + a)
};
_.Pn = function(a, c, f, g, h) {
    hc(f.src);
    var l, n = nb(g, f), q = n ? ob(g): "";
    try {
        l = a.createElement('<iframe frameborder="' + Cn(String(f.frameborder)) + '" scrolling="' + Cn(String(f.scrolling)) + '" ' + q + ' name="' + Cn(String(f.name)) + '"/>')
    } catch (t) {
        l = a.createElement("iframe"), n && (l.onload = function() {
            l.onload = null;
            n.call(this)
        }, pb(g))
    }
    for (var v in f)
        a = f[v], "style" === v && "object" === typeof a ? _.Sl(a, l.style) : rb[v] || l.setAttribute(v, String(a));
    (v = h && h.beforeNode || null) || h && h.dontclear || zn(c);
    c.insertBefore(l, v);
    l = v ? v.previousSibling : c.lastChild;
    f.allowtransparency && (l.allowTransparency=!0);
    return l
};
var zd, jc;
zd = /^:[\w]+$/;
_.nc = /:([a-zA-Z_]+):/g;
_.ql = function() {
    var a = _.Dh() || "0", c = _.Rh(), f = _.ci(void 0, a), g=!1 === _.P("isLoggedIn"), h = g ? "_/im/" : "";
    h && (f = "");
    var l = _.P("iframes/:socialhost:"), n = _.P("iframes/:im_socialhost:");
    return kc = {
        socialhost: l,
        ctx_socialhost: g ? n: l,
        session_index: a,
        session_delegate: c,
        session_prefix: f,
        im_prefix: h
    }
};
jc = function(a, c) {
    return _.ql()[c] || ""
};
_.mc = function(a) {
    return _.An(_.ua, a.replace(_.nc, jc))
};
_.Un = function(a) {
    var c = a;
    zd.test(a) && (c = _.P("iframes/" + c.substring(1) + "/url"), _.Sa(!!c, "Unknown iframe url config for - " + a));
    return _.mc(c)
};
_.tb = function(a, c, f) {
    var g = f || {};
    f = g.attributes || {};
    _.Sa(!g.allowPost ||!f.onload, "onload is not supported by post iframe");
    a = _.Un(a);
    f = c.ownerDocument || _.ua;
    var h = _.Dn(f, g);
    a = _.qa(f, a, h, g);
    var l = _.r();
    _.Sl(_.vb, l);
    _.Sl(g.attributes, l);
    l.name = l.id = h;
    l.src = a;
    g.eurl = a;
    if ((g || {}).allowPost && 2E3 < a.length) {
        var n = Tm(a);
        l.src = "";
        l["data-postorigin"] = a;
        a = _.Pn(f, c, l, h);
        var q;
        if ( - 1 != window.navigator.userAgent.indexOf("WebKit")) {
            q = a.contentWindow.document;
            q.open();
            var l = q.createElement("div"), t = {}, v = h + "_inner";
            t.name = v;
            t.src = "";
            t.style = "display:none";
            _.Pn(f, l, t, v, g)
        }
        l = (g = n.query[0]) ? g.split("&") : [];
        g = [];
        for (t = 0; t < l.length; t++)
            v = l[t].split("=", 2), g.push([(0, window.decodeURIComponent)(v[0]), (0, window.decodeURIComponent)(v[1])]);
        n.query = [];
        l = zm(n);
        n = f.createElement("form");
        n.action = l;
        n.method = "POST";
        n.target = h;
        n.style.display = "none";
        for (h = 0; h < g.length; h++)
            l = f.createElement("input"), l.type = "hidden", l.name = g[h][0], l.value = g[h][1], n.appendChild(l);
        c.appendChild(n);
        n.submit();
        n.parentNode.removeChild(n);
        q && q.close();
        c = a
    } else 
        c = _.Pn(f, c, l, h, g);
    return c
};

var AB = function(a) {
    this.B = a
};
_.k = AB.prototype;
_.k.value = function() {
    return this.B
};
_.k.Es = function(a) {
    this.B.width = a;
    return this
};
_.k.Ne = function() {
    return this.B.width
};
_.k.Rm = function(a) {
    this.B.height = a;
    return this
};
_.k.Cd = function() {
    return this.B.height
};
_.FN = function(a) {
    this.B = a
};
_.FN.prototype.Rm = function(a) {
    this.B.height = a;
    return this
};
_.FN.prototype.Cd = function() {
    return this.B.height
};
_.FN.prototype.Es = function(a) {
    this.B.width = a;
    return this
};
_.FN.prototype.Ne = function() {
    return this.B.width
};
_.BB = function(a) {
    this.B = a || {}
};
_.BB.prototype.value = function() {
    return this.B
};
_.IB = function(a, c) {
    a.B.url = c;
    return a
};
_.BB.prototype.getUrl = function() {
    return this.B.url
};
_.DN = function(a, c) {
    a.B.style = c;
    return a
};
_.BB.prototype.Hh = function() {
    return this.B.id
};
_.CN = function(a, c) {
    a.B.queryParams = c;
    return a
};
_.Ko = function(a, c) {
    a.B.relayOpen = c;
    return a
};
_.BB.prototype.Rd = _.b(7);
_.BB.prototype.getContext = _.b(8);
_.BB.prototype.ci = function() {
    return this.B.openerIframe
};
_.BB.prototype.Wp = function() {
    this.B.attributes = this.B.attributes || {};
    return new AB(this.B.attributes)
};

var Ek, pl, Lu, Ku, Nu, Zz, Xz;
_.Qm = function(a) {
    a.B.waitForOnload=!0;
    return a
};
_.BB.prototype.getContext = _.d(8, function() {
    return this.B.context
});
_.BB.prototype.Rd = _.d(7, function() {
    return this.B.apis
});
Ek = function(a) {
    return (a = a.B.timeout) ? a : null
};
_.rl = function(a) {
    return a.B.rpctoken
};
pl = function(a, c) {
    a.B.onload = c
};
Lu = function(a) {
    this.resolve = this.reject = null;
    this.promise = _.Fu((0, _.H)(function(a, f) {
        this.resolve = a;
        this.reject = f
    }, this));
    a && (this.promise = Ku(this.promise, a))
};
Ku = function(a, c) {
    return a.then(function(a) {
        try {
            c(a)
        } catch (g) {}
        return a
    })
};
_.Pr = function(a) {
    return new _.C(function(c, f) {
        var g = a.length, h = [];
        if (g)
            for (var l = function(a, f) {
                g--;
                h[a] = f;
                0 == g && c(h)
            }, n = function(a) {
                f(a)
            }, q = 0, t; t = a[q]; q++)
                t.then(_.ma(l, q), n);
        else 
            c(h)
    })
};
Nu = function(a) {
    return new _.C(function(c) {
        c(a)
    })
};
_.yp = function(a) {
    this.B = a || {}
};
_.J(_.yp, _.BB);
_.oq = function(a, c) {
    a.B.frameName = c;
    return a
};
_.yp.prototype.Tp = function() {
    return this.B.frameName
};
_.Lr = function(a, c) {
    a.B.rpcAddr = c;
    return a
};
_.yp.prototype.Fl = function() {
    return this.B.rpcAddr
};
_.Mr = function(a, c) {
    a.B.retAddr = c;
    return a
};
_.Ss = function(a) {
    return a.B.retAddr
};
_.yp.prototype.Og = function(a) {
    this.B.origin = a;
    return this
};
_.yp.prototype.Pq = function() {
    return this.B.origin
};
_.yp.prototype.vj = function(a) {
    this.B.setRpcReady = a;
    return this
};
_.yp.prototype.Pm = function(a) {
    this.B.context = a;
    return this
};
var ft = function(a, c) {
    a.B._rpcReadyFn = c
};
_.yp.prototype.rb = function() {
    return this.B.iframeEl
};
var co, Wz;
co = /^[\w\.\-]*$/;
_.Uz = function(a) {
    return a.Db === a.getContext().Db
};
_.Vz = function() {
    return !0
};
_.AD = function(a) {
    for (var c = _.r(), f = 0; f < a.length; f++)
        c[a[f]]=!0;
    return function(a) {
        return !!c[a.Db]
    }
};
Wz = function(a, c, f) {
    var g = Xz[a];
    return function(a) {
        if (!c.Ma() && (_.Sa(this.origin === c.Db, "Wrong origin " + this.origin + " != " + c.Db), g && 0 < g.length)) {
            for (var l = this.callback, n = [], q = 0; q < g.length; q++)
                n.push(Nu(g[q].call(c, a, c)));
            f || _.Pr(n).then(l)
        }
    }
};
_.Yz = function(a, c, f) {
    _.Sa("_default" != a, "Cannot update default api");
    Zz[a] = {
        map: c,
        filter: f
    }
};
_.$z = function(a, c, f) {
    _.Sa("_default" != a, "Cannot update default api");
    _.Ka(Zz, a, {
        map: {},
        filter: _.Uz
    }).map[c] = f
};
_.aA = function(a, c) {
    _.Ka(Zz, "_default", {
        map: {},
        filter: _.Vz
    }).map[a] = c;
    _.fb(_.Sm.B, function(f) {
        f.register(a, c, _.Vz)
    })
};
_.jo = function() {
    return _.Sm
};
_.bA = function(a) {
    a = a || {};
    this.Oj=!1;
    this.zt = _.r();
    this.B = _.r();
    this.ye = a._window || _.ta;
    this.ha = this.ye.location.href;
    this.ca = (this.pa = _.Wa(this.ha, "parent", "")) ? _.Wa(this.ha, "pfname", "") : "";
    this.El = this.pa ? _.Wa(this.ha, "id", "") : "";
    this.Jh = _.Ln(this.El, this.ca);
    this.Db = _.Rb.Pq(this.ha);
    if (this.El) {
        var c = new _.yp;
        _.Lr(c, a._parentRpcAddr || "..");
        _.Mr(c, a._parentRetAddr || this.El);
        c.Og(_.Rb.Pq(_.Wa(this.ha, "parent", this.ha)));
        _.oq(c, this.ca);
        this.G = this.Pe(c.value())
    } else 
        this.G = null
};
_.k = _.bA.prototype;
_.k.Ma = function() {
    return this.Oj
};
_.k.U = function() {
    if (!this.Ma()) {
        for (var a = 0; a < this.B.length; a++)
            this.B[a].U();
        this.Oj=!0
    }
};
_.k.Tp = function() {
    return this.Jh
};
_.k.Aa = function() {
    return this.ye
};
_.k.sj = _.b(9);
_.k.$h = function(a) {
    return this.zt[a]
};
_.k.Pe = function(a) {
    _.Sa(!this.Ma(), "Cannot attach iframe in disposed context");
    a = new _.yp(a);
    a.Fl() || _.Lr(a, a.Hh());
    _.Ss(a) || _.Mr(a, "..");
    a.Pq() || a.Og(_.Rb.Pq(a.getUrl()));
    a.Tp() || _.oq(a, _.Ln(a.Hh(), this.Jh));
    var c = a.Tp();
    if (this.B[c])
        return this.B[c];
    var f = a.Fl(), g = f;
    a.Pq() && (g = f + "|" + a.Pq());
    var h = _.Ss(a), l = _.rl(a);
    l || (l = (l = a.rb()) && (l.getAttribute("data-postorigin") || l.src) || a.getUrl(), l = _.Wa(l, "rpctoken"));
    ft(a, _.Mz(g, h, l, a.B._popupWindow));
    g = ((window.gadgets || {}).rpc || {}).setAuthToken;
    l && g && g(f,
    l);
    var n = new _.Rm(this, f, c, a), q = a.B.messageHandlersFilter;
    _.fb(a.B.messageHandlers, function(a, c) {
        n.register(c, a, q)
    });
    a.B.setRpcReady && n.vj();
    _.jA(n, "_g_rpcReady");
    return n
};
_.k.CA = function(a) {
    _.oq(a, null);
    var c = a.Hh();
    !c || co.test(c)&&!this.Aa().document.getElementById(c) || (_.kd("Ignoring requested iframe ID - " + c), a.B.id = null)
};
_.k.cj = function(a) {
    _.Sa(!this.Ma(), "Cannot open iframe in disposed context");
    var c = new _.yp(a);
    rt(this, c);
    var f = c.Tp();
    if (f && this.B[f])
        return this.B[f];
    this.CA(c);
    f = c.getUrl();
    _.Sa(f, "No url for new iframe");
    var g = c.B.queryParams || {};
    g.usegapi = "1";
    _.CN(c, g);
    g = this.xu && this.xu(f, c);
    g || (g = c.B.where, _.Sa(!!g, "No location for new iframe"), f = _.tb(f, g, a), c.B.iframeEl = f, g = f.getAttribute("id"));
    _.Lr(c, g).B.id = g;
    c.Og(_.Rb.Pq(c.B.eurl || ""));
    this.te && this.te(c, c.rb());
    f = this.Pe(a);
    f.NA && f.NA(f, a);
    (a = c.B.onCreate) &&
    a(f);
    c.B.disableRelayOpen || f.Ce("_open");
    return f
};
var cA = function(a, c, f) {
    var g = c.B.canvasUrl;
    if (!g)
        return f;
    _.Sa(!c.B.allowPost, "Post is not supported when using canvas url");
    var h = c.getUrl();
    _.Sa(h && _.Rb.Pq(h) === a.Db && _.Rb.Pq(g) === a.Db, "Wrong origin for canvas or hidden url " + g);
    _.IB(c, g);
    _.Qm(c);
    c.B.canvasUrl = null;
    return function(a) {
        var c = a.Aa(), g = c.location.hash, g = _.Un(h) + (/#/.test(h) ? g.replace(/^#/, "&") : g);
        c.location.replace(g);
        f && f(a)
    }
}, dA = function(a, c, f) {
    var g = c.B.relayOpen;
    if (g) {
        var h = a.G;
        g instanceof _.Rm ? (h = g, _.Ko(c, 0)) : 0 < Number(g) && _.Ko(c,
        Number(g) - 1);
        if (h) {
            _.Sa(!!h.DE, "Relaying iframe open is disabled");
            if (g = c.B.style)
                if (g = _.eA[g])
                    c.Pm(a), g(c.value()), c.Pm(null);
            c.B.openerIframe = null;
            f.resolve(h.DE(c));
            return !0
        }
    }
    return !1
}, fA = function(a, c, f) {
    var g = c.B.style;
    if (g)
        if (_.Sa(!!_.gA, "Defer style is disabled, when requesting style " + g), _.hA[g])
            rt(a, c);
        else 
            return iA(g, function() {
                _.Sa(!!_.hA[g], "Fail to load style - " + g);
                f.resolve(a.open(c.value()))
            }), !0;
    return !1
};
_.bA.prototype.open = function(a, c) {
    _.Sa(!this.Ma(), "Cannot open iframe in disposed context");
    var f = new _.yp(a), g = cA(this, f, c), h = new Lu(g);
    (g = f.getUrl()) && _.IB(f, _.Un(g));
    if (dA(this, f, h) || fA(this, f, h) || dA(this, f, h))
        return h.promise;
    var l;
    if (null != Ek(f)) {
        var n = (0, window.setTimeout)(function() {
            l.rb().src = "about:blank";
            h.reject({
                timeout: "Exceeded time limit of :" + Ek(f) + "milliseconds"
            })
        }, Ek(f)), q = h.resolve;
        h.resolve = function(a) {
            (0, window.clearTimeout)(n);
            q(a)
        }
    }
    f.B.waitForOnload && pl(f.Wp(), function() {
        h.resolve(l)
    });
    l = this.cj(a);
    f.B.waitForOnload || h.resolve(l);
    return h.promise
};
_.bA.prototype.Ei = _.b(10);
_.Rm = function(a, c, f, g) {
    this.Oj=!1;
    this.Yf = a;
    this.Nc = c;
    this.Jh = f;
    this.zd = g;
    this.re = _.Ss(this.zd);
    this.Db = this.zd.Pq();
    this.iK = this.zd.rb();
    this.vF = this.zd.B.where;
    this.$o = [];
    this.Ce("_default");
    a = this.zd.Rd() || [];
    for (c = 0; c < a.length; c++)
        this.Ce(a[c]);
    this.Yf.B[f] = this
};
_.k = _.Rm.prototype;
_.k.Ma = function() {
    return this.Oj
};
_.k.U = function() {
    if (!this.Ma()) {
        for (var a = 0; a < this.$o.length; a++)
            this.Jd(this.$o[a]);
        delete _.Sm.B[this.Tp()];
        this.Oj=!0
    }
};
_.k.getContext = function() {
    return this.Yf
};
_.k.Fl = function() {
    return this.Nc
};
_.k.Tp = function() {
    return this.Jh
};
_.k.rb = function() {
    return this.iK
};
_.k.V = function() {
    return this.vF
};
_.k.qc = function(a) {
    this.vF = a
};
_.k.vj = function() {
    (0, this.zd.B._rpcReadyFn)()
};
_.k.Vm = function(a, c) {
    this.zd.value()[a] = c
};
_.k.Zf = function(a) {
    return this.zd.value()[a]
};
_.k.va = function() {
    return this.zd.value()
};
_.k.Hh = function() {
    return this.zd.Hh()
};
_.k.Pq = function() {
    return this.Db
};
_.k.register = function(a, c, f) {
    _.Sa(!this.Ma(), "Cannot register handler on disposed iframe " + a);
    _.Sa((f || _.Uz)(this), "Rejecting untrusted message " + a);
    f = this.Jh + ":" + this.Yf.Jh + ":" + a;
    1 == _.Ka(Xz, f, []).push(c) && (this.$o.push(a), _.sz(f, Wz(f, this, "_g_wasClosed" === a)))
};
_.k.Jd = function(a, c) {
    var f = this.Jh + ":" + this.Yf.Jh + ":" + a, g = Xz[f];
    if (g) {
        if (c) {
            var h = _.xd.call(g, c);
            0 <= h && g.splice(h, 1)
        } else 
            g.splice(0, g.length);
        0 == g.length && (h = _.xd.call(this.$o, a), 0 <= h && this.$o.splice(h, 1), _.wz(f))
    }
};
_.k.fq = function() {
    return this.$o
};
_.k.Ce = function(a) {
    this.Sy = this.Sy || [];
    if (!(0 <= _.xd.call(this.Sy, a))) {
        this.Sy.push(a);
        a = Zz[a] || {
            map: {}
        };
        for (var c in a.map)
            _.Qa(a.map, c) && this.register(c, a.map[c], a.filter)
    }
};
_.k.send = function(a, c, f, g) {
    _.Sa(!this.Ma(), "Cannot send message to disposed iframe - " + a);
    _.Sa((g || _.Uz)(this), "Wrong target for message " + a);
    f = new Lu(f);
    _.Az(this.Nc, this.Yf.Jh + ":" + this.Jh + ":" + a, f.resolve, c);
    return f.promise
};
_.jA = function(a, c, f, g) {
    return a.send(c, f, g, _.Vz)
};
_.Rm.prototype.aL = function(a) {
    return a
};
_.Rm.prototype.ping = _.b(11);
Xz = _.r();
Zz = _.r();
_.Sm = new _.bA;
_.aA("_g_rpcReady", _.Rm.prototype.vj);
_.aA("_g_discover", _.Rm.prototype.fq);
_.aA("_g_ping", _.Rm.prototype.aL);
var iA, rt;
_.hA = _.r();
_.eA = _.r();
_.gA = function(a) {
    return _.hA[a]
};
iA = function(a, c) {
    _.Ua.load("gapi.iframes.style." + a, c)
};
rt = function(a, c) {
    var f = c.B.style;
    if (f) {
        _.DN(c, null);
        var g = _.hA[f];
        _.Sa(g, "No such style: " + f);
        c.Pm(a);
        g(c.value());
        c.Pm(null)
    }
};
var nA, oA;
nA = {
    height: !0,
    width: !0
};
oA = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
_.no = function(a) {
    "number" === typeof a && (a = String(a) + "px");
    return a
};
_.Rm.prototype.Aa = function() {
    if (!_.Uz(this))
        return null;
    var a = this.zd.B._popupWindow;
    if (a)
        return a;
    for (var c = this.Nc.split("/"), a = this.getContext().Aa(), f = 0; f < c.length && a; f++) {
        var g = c[f];
        ".." === g ? a = a == a.parent ? a.opener : a.parent : a = a.frames[g]
    }
    return a
};
var lA = function(a, c) {
    var f = a.G, g=!0;
    c.filter && (g = c.filter.call(c.qg, c.params));
    return Nu(g).then(function(g) {
        if (g && f) {
            var l;
            c.um && c.um.call(a, c.params);
            c.dF ? l = c.dF(c.params) : l = _.jA(f, c.message, c.params);
            return c.pn ? l.then(function() {
                return !0
            }) : !0
        }
        return !1
    })
};
_.bA.prototype.Ka = function(a, c, f) {
    a = lA(this, {
        dF: function(a) {
            var c = _.Sm.G;
            _.fb(_.Sm.B, function(f) {
                f !== c && _.jA(f, "_g_wasClosed", a)
            });
            var f = _.jA(c, "_g_closeMe", a);
            _.jA(c, "_g_wasClosed", a);
            return f
        },
        message: "_g_closeMe",
        params: a,
        qg: f,
        filter: this.$h("onCloseSelfFilter")
    });
    c = new Lu(c);
    c.resolve(a);
    return c.promise
};
_.bA.prototype.po = function(a, c, f) {
    a = a || {};
    c = new Lu(c);
    c.resolve(lA(this, {
        message: "_g_restyleMe",
        params: a,
        qg: f,
        filter: this.$h("onRestyleSelfFilter"),
        pn: !0,
        um: this.fb
    }));
    return c.promise
};
_.bA.prototype.fb = function(a) {
    "auto" === a.height && (a.height = _.Ob.Cd())
};
_.mA = function(a) {
    var c = {};
    if (a)
        for (var f in a)
            _.Qa(a, f) && _.Qa(nA, f) && oA.test(a[f]) && (c[f] = a[f]);
    return c
};
_.k = _.Rm.prototype;
_.k.close = function(a, c) {
    return _.jA(this, "_g_close", a, c)
};
_.k.sD = function(a, c) {
    return _.jA(this, "_g_restyle", a, c)
};
_.k.ds = function(a, c) {
    return _.jA(this, "_g_restyleDone", a, c)
};
_.k.qp = function(a) {
    return this.getContext().Ka(a, void 0, this)
};
_.k.tD = function(a) {
    if (a && "object" === typeof a)
        return this.getContext().po(a, void 0, this)
};
_.k.fs = function(a) {
    var c = this.zd.B.onRestyle;
    c && c.call(this, a, this);
    a = a && "object" === typeof a ? _.mA(a) : {};
    (c = this.rb()) && a && "object" === typeof a && (_.Qa(a, "height") && (a.height = _.no(a.height)), _.Qa(a, "width") && (a.width = _.no(a.width)), _.Sl(a, c.style))
};
_.k.rp = function(a) {
    var c = this.zd.B.onClose;
    c && c.call(this, a, this);
    this.BC && this.BC() || (a = this.rb()) && a.parentNode && a.parentNode.removeChild(a);
    if (a = this.zd.B.controller)
        c = {}, c.frameName = this.Tp(), _.jA(a, "_g_disposeControl", c)
};
_.bA.prototype.eb = _.b(12);
_.bA.prototype.Za = _.b(13);
_.Rm.prototype.QE = _.b(14);
_.Rm.prototype.PE = function(a, c) {
    this.register("_g_wasClosed", a, c)
};
_.Rm.prototype.pM = function() {
    this.getContext().Aa().setTimeout((0, _.H)(function() {
        this.U()
    }, this), 0)
};
_.aA("_g_close", _.Rm.prototype.qp);
_.aA("_g_closeMe", _.Rm.prototype.rp);
_.aA("_g_restyle", _.Rm.prototype.tD);
_.aA("_g_restyleMe", _.Rm.prototype.fs);
_.aA("_g_wasClosed", _.Rm.prototype.pM);

var ol, jv, Bp, Tu, Tz, tB, fB, bB, ZA;
_.Pu = function(a, c) {
    a.B.onClose = c
};
ol = function(a, c) {
    a.B.apis = c;
    return a
};
_.AN = function(a, c) {
    a.B.messageHandlersFilter = c;
    return a
};
_.BN = function(a, c) {
    a.B.messageHandlers = c;
    return a
};
jv = function(a, c) {
    a.B.rpctoken = c;
    return a
};
_.JB = function(a, c) {
    a.B.where = c;
    return a
};
_.uW = function(a, c) {
    a.B.show = c;
    return a
};
_.EN = function(a, c) {
    a.B.anchor = c;
    return a
};
Bp = function(a, c, f) {
    this.promise = a;
    this.resolve = c;
    this.reject = f
};
Tu = function(a) {
    this.Kd = a || {}
};
Tu.prototype.value = function() {
    return this.Kd
};
var Kv = function(a) {
    var c = new Tu;
    c.Kd.role = a;
    return c
};
Tu.prototype.na = function(a) {
    this.Kd.handler = a;
    return this
};
Tu.prototype.Cr = function() {
    return this.Kd.handler
};
var yn = function(a, c) {
    a.Kd.filter = c;
    return a
};
Tu.prototype.KE = function() {
    return this.Kd.filter
};
var Mv = function(a, c) {
    a.Kd.apis = c;
    return a
};
Tu.prototype.Rd = function() {
    return this.Kd.apis
};
var $v = function(a) {
    a.Kd.runOnce=!0;
    return a
}, kv = function(a) {
    this.B = a || {}
};
kv.prototype.value = function() {
    return this.B
};
kv.prototype.getIframe = function() {
    return this.B.iframe
};
var lv = function(a, c) {
    a.B.role = c;
    return a
}, mv = function(a, c) {
    a.B.data = c;
    return a
};
kv.prototype.vj = function(a) {
    this.B.setRpcReady = a;
    return this
};
Tz = function(a, c) {
    a.B.rpctoken = c;
    return a
};
tB = function(a) {
    a.B.selfConnect=!0;
    return a
};
_.Su = function() {
    var a, c, f = new _.C(function(f, h) {
        a = f;
        c = h
    });
    return new Bp(f, a, c)
};
fB = /^https?:\/\/[^\/%\\?#\s]+$/i;
bB = {
    longdesc: !0,
    name: !0,
    src: !0,
    frameborder: !0,
    marginwidth: !0,
    marginheight: !0,
    scrolling: !0,
    align: !0,
    height: !0,
    width: !0,
    id: !0,
    "class": !0,
    title: !0,
    tabindex: !0,
    hspace: !0,
    vspace: !0,
    allowtransparency: !0
};
ZA = function(a, c, f) {
    var g = a.Nc, h = c.re;
    _.Mr(_.Lr(f, a.re + "/" + c.Nc), h + "/" + g);
    _.oq(f, c.Tp()).Og(c.Db)
};
_.bA.prototype.wc = function(a, c) {
    var f = new kv(a), g = new kv(c), h = f.B.setRpcReady, l = f.getIframe(), n = g.getIframe();
    if (n) {
        var q = f.B.rpctoken, t = new _.yp;
        ZA(l, n, t);
        mv(lv(Tz(new kv(t.value()), q), f.B.role), f.B.data).vj(h);
        var v = new _.yp;
        ZA(n, l, v);
        mv(lv(Tz(new kv(v.value()), q), g.B.role), g.B.data).vj(!0);
        _.jA(l, "_g_connect", t.value(), function() {
            h || _.jA(n, "_g_connect", v.value())
        });
        h && _.jA(n, "_g_connect", v.value())
    } else 
        g = {}, mv(lv(tB(new kv(g)), f.B.role), f.B.data), _.jA(l, "_g_connect", g)
};
_.k = _.Rm.prototype;
_.k.$H = function(a) {
    var c, f = new _.yp(a);
    a = new kv(f.value());
    a.B.selfConnect ? c = this : (_.Sa(fB.test(f.Pq()), "Illegal origin for connected iframe - " + f.Pq()), c = this.Yf.B[f.Tp()], c) ? f.B.setRpcReady && (c.vj(), _.jA(c, "_g_rpcReady")) : (f = _.oq(_.Mr(_.Lr(jv(new _.yp, _.rl(f)), f.Fl()), _.Ss(f)).Og(f.Pq()), f.Tp()).vj(f.B.setRpcReady), c = this.Yf.Pe(f.value()));
    var f = this.Yf, g = a.B.role;
    a = a.B.data;
    dB(f);
    g = g || "";
    _.Ka(f.Ld, g, []).push({
        qg: c.Tp(),
        data: a
    });
    eB(c, a, f.Kh[g])
};
_.k.NA = function(a, c) {
    if (!(new _.yp(c)).B._relayedDepth) {
        var f = {};
        tB(lv(new kv(f), "_opener"));
        _.jA(a, "_g_connect", f)
    }
};
_.k.DE = function(a) {
    var c = this, f = a.B.messageHandlers, g = a.B.messageHandlersFilter, h = a.B.onClose;
    _.Pu(_.AN(_.BN(a, null), null), null);
    _.Su();
    return _.jA(this, "_g_open", a.value()).then(function(l) {
        var n = new _.yp(l[0]), q = n.Tp();
        l = new _.yp;
        var t = c.re, v = _.Ss(n);
        _.Mr(_.Lr(l, c.Nc + "/" + n.Fl()), v + "/" + t);
        _.oq(l, q);
        l.Og(n.Pq());
        ol(l, n.Rd());
        jv(l, _.rl(a));
        _.BN(l, f);
        _.AN(l, g);
        _.Pu(l, h);
        (n = c.Yf.B[q]) || (n = c.Yf.Pe(l.value()));
        return n
    })
};
_.k.CA = function(a) {
    var c = a.getUrl();
    _.Sa(!c || _.Ul.test(c), "Illegal url for new iframe - " + c);
    var f = a.Wp().value(), c = {}, g;
    for (g in f)
        _.Qa(f, g) && _.Qa(bB, g) && (c[g] = f[g]);
    _.Qa(f, "style") && (g = f.style, "object" === typeof g && (c.style = _.mA(g)));
    a.value().attributes = c
};
_.k.VK = function(a) {
    a = new _.yp(a);
    this.CA(a);
    var c = a.B._relayedDepth || 0;
    a.B._relayedDepth = c + 1;
    a.B.openerIframe = this;
    _.Su();
    var f = _.rl(a);
    jv(a, null);
    return this.Yf.open(a.value()).then((0, _.H)(function(a) {
        var h = (new _.yp(a.va())).Rd(), l = new _.yp;
        ZA(a, this, l);
        0 == c && lv(new kv(l.value()), "_opener");
        l.vj(!0);
        jv(l, f);
        _.jA(a, "_g_connect", l.value());
        l = new _.yp;
        _.oq(_.Mr(_.Lr(ol(l, h), a.Fl()), a.re), a.Tp()).Og(a.Pq());
        return l.value()
    }, this))
};
var dB = function(a) {
    a.Ld || (a.Ld = _.r(), a.Kh = _.r())
};
_.bA.prototype.qa = function(a, c, f, g) {
    dB(this);
    "object" === typeof a ? (c = new Tu(a), f = c.Kd.role || "") : (c = yn(Mv(Kv(a).na(c), f), g), f = a);
    g = this.Ld[f] || [];
    a=!1;
    for (var h = 0; h < g.length&&!a; h++)
        eB(this.B[g[h].qg], g[h].data, [c]), a = c.Kd.runOnce;
    f = _.Ka(this.Kh, f, []);
    a || c.Kd.dontWait || f.push(c)
};
_.bA.prototype.Na = _.b(15);
var eB = function(a, c, f) {
    f = f || [];
    for (var g = 0; g < f.length; g++) {
        var h = f[g];
        if (h && a) {
            var l = h.KE() || _.Uz;
            if (a && l(a)) {
                for (var l = h.Rd() || [], n = 0; n < l.length; n++)
                    a.Ce(l[n]);
                h.Cr() && h.Cr()(a, c);
                h.Kd.runOnce && (f.splice(g, 1), --g)
            }
        }
    }
};
_.bA.prototype.M = function(a, c, f) {
    this.qa($v(yn(Mv(Kv("_opener").na(a), c), f)).value())
};
_.Rm.prototype.pL = function(a) {
    this.getContext().M(function(c) {
        c.send("_g_wasRestyled", a, void 0, _.Vz)
    }, null, _.Vz)
};
var gB = _.Sm.G;
gB && gB.register("_g_restyleDone", _.Rm.prototype.pL, _.Vz);
_.aA("_g_connect", _.Rm.prototype.$H);
var hB = {};
hB._g_open = _.Rm.prototype.VK;
_.Yz("_open", hB, _.Vz);

_.Pb.ft = function(a) {
    var c = [];
    if (1 < arguments.length)
        for (var f = 0, g; g = arguments[f]; ++f)
            c.push(g);
    else 
        c = a;
    return function(a) {
        for (var f = 0; c[f]; ++f)
            if (a === c[f])
                return !0;
        return !1
    }
};
_.Pb.Dt = function(a) {
    return function(c) {
        return a.test(c)
    }
};
_.Pb.Sn = function(a) {
    return "undefined" !== typeof a
};
_.Pb.yt = function(a) {
    return "string" === typeof a && 0 < a.length
};
_.Pb.DM = function(a) {
    return "boolean" === typeof a
};
_.Pb.rt = function(a) {
    return function(c) {
        for (var f in a)
            if (a.hasOwnProperty(f)&&!(0, a[f])(c[f]))
                return !1;
        return !0
    }
};

_.R = _.R || {};
_.R.Dg = function(a, c, f) {
    for (var g = [], h = 2, l = arguments.length; h < l; ++h)
        g.push(arguments[h]);
    return function() {
        for (var f = g.slice(), h = 0, l = arguments.length; h < l; ++h)
            f.push(arguments[h]);
        return c.apply(a, f)
    }
};
_.R.nf = function(a) {
    var c, f, g = {};
    for (c = 0; f = a[c]; ++c)
        g[f] = f;
    return g
};

_.R = _.R || {};
(function() {
    function a(a) {
        c = a["core.util"] || {}
    }
    var c = {}, f = {};
    _.Pb && _.Pb.register("core.util", null, a);
    _.R.Nt = function(a) {
        return "undefined" === typeof c[a] ? null : c[a]
    };
    _.R.hasFeature = function(a) {
        return "undefined" !== typeof c[a]
    };
    _.R.Rt = function() {
        return f
    }
})();

var Nf, Xo, ag;
Nf=!_.W || _.Te(9);
Xo=!_.df&&!_.W || _.W && _.Te(9) || _.df && _.sl("1.9.1");
ag = _.W&&!_.sl("9");
_.Zn = _.W || _.cf || _.ef;
_.qm = _.W&&!_.Te(9);
var Ff, Mf, Of, dg, eg, bg, Pf;
_.Bf = function(a, c) {
    var f = c || window.document;
    return f.querySelectorAll && f.querySelector ? f.querySelectorAll("." + a) : _.Cf(window.document, "*", a, c)
};
_.Df = function(a, c) {
    var f = c || window.document, g = null;
    f.querySelectorAll && f.querySelector ? g = f.querySelector("." + a) : g = _.Cf(window.document, "*", a, c)[0];
    return g || null
};
_.Cf = function(a, c, f, g) {
    a = g || a;
    c = c && "*" != c ? c.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (c || f))
        return a.querySelectorAll(c + (f ? "." + f : ""));
    if (f && a.getElementsByClassName) {
        a = a.getElementsByClassName(f);
        if (c) {
            g = {};
            for (var h = 0, l = 0, n; n = a[l]; l++)
                c == n.nodeName && (g[h++] = n);
            g.length = h;
            return g
        }
        return a
    }
    a = a.getElementsByTagName(c || "*");
    if (f) {
        g = {};
        for (l = h = 0; n = a[l]; l++)
            c = n.className, "function" == typeof c.split && _.ve(c.split(/\s+/), f) && (g[h++] = n);
        g.length = h;
        return g
    }
    return a
};
_.Ef = function(a, c) {
    _.qf(c, function(c, g) {
        "style" == g ? a.style.cssText = c : "class" == g ? a.className = c : "for" == g ? a.htmlFor = c : g in Ff ? a.setAttribute(Ff[g], c) : _.jd(g, "aria-") || _.jd(g, "data-") ? a.setAttribute(g, c) : a[g] = c
    })
};
Ff = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
_.Ng = function(a, c, f) {
    return Mf(window.document, arguments)
};
Mf = function(a, c) {
    var f = c[0], g = c[1];
    if (!Nf && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', _.He(g.name), '"');
        if (g.type) {
            f.push(' type="', _.He(g.type), '"');
            var h = {};
            _.sf(h, g);
            delete h.type;
            g = h
        }
        f.push(">");
        f = f.join("")
    }
    f = a.createElement(f);
    g && (_.fa(g) ? f.className = g : _.ea(g) ? f.className = g.join(" ") : _.Ef(f, g));
    2 < c.length && Of(a, f, c, 2);
    return f
};
Of = function(a, c, f, g) {
    function h(f) {
        f && c.appendChild(_.fa(f) ? a.createTextNode(f) : f)
    }
    for (; g < f.length; g++) {
        var l = f[g];
        !_.re(l) || _.Vg(l) && 0 < l.nodeType ? h(l) : (0, _.Be)(Pf(l) ? _.ze(l) : l, h)
    }
};
_.xp = function(a, c) {
    Of(_.zf(a), a, arguments, 1)
};
_.Qf = function(a) {
    for (var c; c = a.firstChild;)
        a.removeChild(c)
};
_.Rf = function(a, c) {
    c.parentNode && c.parentNode.insertBefore(a, c)
};
_.Tf = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
_.Uf = function(a) {
    var c, f = a.parentNode;
    if (f && 11 != f.nodeType) {
        if (a.removeNode)
            return a.removeNode(!1);
        for (; c = a.firstChild;)
            f.insertBefore(c, a);
        return _.Tf(a)
    }
};
_.SO = function(a) {
    return Xo && void 0 != a.children ? a.children : (0, _.Ce)(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
_.Vf = function(a) {
    if (void 0 != a.firstElementChild)
        a = a.firstElementChild;
    else 
        for (a = a.firstChild; a && 1 != a.nodeType;)
            a = a.nextSibling;
    return a
};
_.iz = function(a) {
    return _.Vg(a) && 1 == a.nodeType
};
_.Yf = function(a, c) {
    if (a.contains && 1 == c.nodeType)
        return a == c || a.contains(c);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == c || Boolean(a.compareDocumentPosition(c) & 16);
    for (; c && a != c;)
        c = c.parentNode;
    return c == a
};
_.zf = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
};
_.Zf = function(a, c) {
    if ("textContent"in a)
        a.textContent = c;
    else if (3 == a.nodeType)
        a.data = c;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)
            a.removeChild(a.lastChild);
        a.firstChild.data = c
    } else 
        _.Qf(a), a.appendChild(_.zf(a).createTextNode(String(c)))
};
dg = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
};
eg = {
    IMG: " ",
    BR: "\n"
};
_.$f = function(a) {
    if (ag && "innerText"in a)
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var c = [];
        bg(a, c, !0);
        a = c.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    ag || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
};
_.cg = function(a) {
    var c = [];
    bg(a, c, !1);
    return c.join("")
};
bg = function(a, c, f) {
    if (!(a.nodeName in dg))
        if (3 == a.nodeType)
            f ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
        else if (a.nodeName in eg)
            c.push(eg[a.nodeName]);
        else 
            for (a = a.firstChild; a;)
                bg(a, c, f), a = a.nextSibling
};
Pf = function(a) {
    if (a && "number" == typeof a.length) {
        if (_.Vg(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (_.vd(a))
            return "function" == typeof a.item
    }
    return !1
};
_.yf = function(a) {
    this.B = a || _.D.document || window.document
};
_.k = _.yf.prototype;
_.k.Z = _.b(0);
_.k.R = function(a, c, f) {
    return Mf(this.B, arguments)
};
_.k.createElement = function(a) {
    return this.B.createElement(a)
};
_.k.Aa = function() {
    var a = this.B;
    return a.parentWindow || a.defaultView
};
_.k.appendChild = function(a, c) {
    a.appendChild(c)
};
_.k.append = _.xp;
_.k.uD = _.Qf;
_.k.Sl = _.Rf;
_.k.removeNode = _.Tf;
_.k.Hp = _.Uf;
_.k.NR = _.SO;
_.k.Yd = _.Vf;
_.k.isElement = _.iz;
_.k.contains = _.Yf;

_.mm = _.uf("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
_.pm = function() {
    this.B = "";
    this.G = _.nm
};
_.pm.prototype.nK=!0;
_.nm = {};
_.pm.prototype.cR = function() {
    return this.B
};
_.yk = function(a) {
    var c = new _.pm;
    c.B = a;
    return c
};
_.rm = _.yk("");
var pu;
_.su = function() {
    this.B = "";
    this.G = pu
};
_.su.prototype.nK=!0;
_.su.prototype.cR = function() {
    return this.B
};
_.su.prototype.mK=!0;
_.su.prototype.Im = function() {
    return 1
};
_.Ls = function(a) {
    return a instanceof _.su && a.constructor === _.su && a.G === pu ? a.B : "type_error:SafeUrl"
};
pu = {};
var XM;
_.NG = function() {
    this.B = "";
    this.ha = XM;
    this.G = null
};
_.NG.prototype.mK=!0;
_.NG.prototype.Im = function() {
    return this.G
};
_.NG.prototype.nK=!0;
_.NG.prototype.cR = function() {
    return this.B
};
_.OG = function(a) {
    return a instanceof _.NG && a.constructor === _.NG && a.ha === XM ? a.B : "type_error:SafeHtml"
};
_.eG = function(a) {
    if (a instanceof _.NG)
        return a;
    var c = null;
    a.mK && (c = a.Im());
    return _.lm(_.He(a.nK ? a.cR() : String(a)), c)
};
_.sm = _.uf("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
_.tm = _.uf("embed", "iframe", "link", "script", "style", "template");
XM = {};
_.lm = function(a, c) {
    var f = new _.NG;
    f.B = a;
    f.G = c;
    return f
};
_.RG = _.lm("", 0);

_.Uo = _.r();
_.Uu = function(a) {
    var c = window;
    a = (a || c.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
    return "1" === (0, window.decodeURIComponent)(a[a.length - 1] || "")
};
var Af;
_.Lf = function(a) {
    return "CSS1Compat" == a.compatMode
};
_.Kf = function(a) {
    return !_.ef && _.Lf(a) ? a.documentElement : a.body || a.documentElement
};
_.fg = function(a, c) {
    this.width = a;
    this.height = c
};
_.k = _.fg.prototype;
_.k.clone = function() {
    return new _.fg(this.width, this.height)
};
_.k.isEmpty = function() {
    return !(this.width * this.height)
};
_.k.ceil = _.b(4);
_.k.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
_.k.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
_.X = function(a, c) {
    this.x = _.kf(a) ? a : 0;
    this.y = _.kf(c) ? c : 0
};
_.k = _.X.prototype;
_.k.clone = function() {
    return new _.X(this.x, this.y)
};
_.k.ceil = _.b(5);
_.k.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
_.k.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
_.k.translate = _.b(6);
_.Jf = function(a) {
    var c = _.Kf(a);
    a = a.parentWindow || a.defaultView;
    return _.W && _.sl("10") && a.pageYOffset != c.scrollTop ? new _.X(c.scrollLeft, c.scrollTop) : new _.X(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop)
};
_.Ct = function(a) {
    a = a.document;
    a = _.Lf(a) ? a.documentElement : a.body;
    return new _.fg(a.clientWidth, a.clientHeight)
};
_.X.prototype.ceil = _.d(5, function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
});
_.fg.prototype.ceil = _.d(4, function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
});
_.yf.prototype.Z = _.d(0, function(a) {
    return _.fa(a) ? this.B.getElementById(a) : a
});
_.Hf = function(a) {
    return _.Jf(a.B)
};
_.hg = function(a) {
    return _.Lf(a.B)
};
_.ig = function(a) {
    return _.Ct(a || window)
};
_.xf = function(a) {
    return a ? new _.yf(_.zf(a)) : Af || (Af = new _.yf)
};
_.Gt = function(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
_.Sf = function(a, c) {
    c.parentNode && c.parentNode.insertBefore(a, c.nextSibling)
};
_.jg = function(a) {
    return a ? a.parentWindow || a.defaultView : window
};
_.kg = function(a) {
    return _.fa(a) ? window.document.getElementById(a) : a
};
_.Dg = function(a) {
    var c = _.fa(void 0) ? _.Gt(void 0): "\\s";
    return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, c, h) {
        return c + h.toUpperCase()
    })
};
_.Ht = function(a, c) {
    for (var f in c)
        a[f] = c[f]
};
var aw;
aw = function() {
    return _.ef ? "Webkit" : _.df ? "Moz" : _.W ? "ms" : _.cf ? "O" : null
};
_.bw = function() {
    return _.ef ? "-webkit" : _.df ? "-moz" : _.W ? "-ms" : _.cf ? "-o" : null
};
var qg, zg, vg;
_.Mg = function(a, c, f) {
    if (_.fa(c))(c = _.Fg(a, c)) && (a.style[c] = f);
    else 
        for (var g in c) {
            f = a;
            var h = c[g], l = _.Fg(f, g);
            l && (f.style[l] = h)
        }
};
_.Fg = function(a, c) {
    var f = _.Cg(c);
    if (void 0 === a.style[f]) {
        var g = aw() + _.Dg(f);
        if (void 0 !== a.style[g])
            return g
    }
    return f
};
_.lg = function(a, c) {
    var f = _.zf(a);
    return f.defaultView && f.defaultView.getComputedStyle && (f = f.defaultView.getComputedStyle(a, null)) ? f[c] || f.getPropertyValue(c) || "" : ""
};
_.mg = function(a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
_.ng = function(a, c) {
    return _.lg(a, c) || _.mg(a, c) || a.style && a.style[c]
};
_.og = function(a) {
    return _.ng(a, "position")
};
qg = function(a) {
    var c;
    try {
        c = a.getBoundingClientRect()
    } catch (f) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    _.W && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
    return c
};
_.rg = function(a) {
    if (_.W&&!_.Te(8))
        return a.offsetParent;
    var c = _.zf(a), f = _.ng(a, "position"), g = "fixed" == f || "absolute" == f;
    for (a = a.parentNode; a && a != c; a = a.parentNode)
        if (f = _.ng(a, "position"), g = g && "static" == f && a != c.documentElement && a != c.body, !g && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == f || "absolute" == f || "relative" == f))
            return a;
    return null
};
_.sg = function(a) {
    var c, f = _.zf(a), g = _.ng(a, "position"), h = _.df && f.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == g && (c = f.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), l = new _.X(0, 0), n;
    c = f ? _.zf(f) : window.document;
    n=!_.W || _.Te(9) || _.hg(_.xf(c)) ? c.documentElement : c.body;
    if (a == n)
        return l;
    if (a.getBoundingClientRect)
        c = qg(a), a = _.Hf(_.xf(f)), l.x = c.left + a.x, l.y = c.top + a.y;
    else if (f.getBoxObjectFor&&!h)
        c = f.getBoxObjectFor(a), a = f.getBoxObjectFor(n), l.x = c.screenX - a.screenX, l.y = c.screenY - a.screenY;
    else {
        c =
        a;
        do {
            l.x += c.offsetLeft;
            l.y += c.offsetTop;
            c != a && (l.x += c.clientLeft || 0, l.y += c.clientTop || 0);
            if (_.ef && "fixed" == _.og(c)) {
                l.x += f.body.scrollLeft;
                l.y += f.body.scrollTop;
                break
            }
            c = c.offsetParent
        }
        while (c && c != a);
        if (_.cf || _.ef && "absolute" == g)
            l.y -= f.body.offsetTop;
        for (c = a; (c = _.rg(c)) && c != f.body && c != n;)
            l.x -= c.scrollLeft, _.cf && "TR" == c.tagName || (l.y -= c.scrollTop)
    }
    return l
};
_.tg = function(a, c) {
    var f = new _.X(0, 0), g = _.jg(_.zf(a)), h = a;
    do {
        var l = g == c ? _.sg(h): _.Kt(h);
        f.x += l.x;
        f.y += l.y
    }
    while (g && g != c && (h = g.frameElement) && (g = g.parent));
    return f
};
_.Kt = function(a) {
    var c;
    if (a.getBoundingClientRect)
        c = qg(a), c = new _.X(c.left, c.top);
    else {
        c = _.Hf(_.xf(a));
        var f = _.sg(a);
        c = new _.X(f.x - c.x, f.y - c.y)
    }
    if (_.df&&!_.sl(12)) {
        i:
        {
            f = _.Cg("transform");
            if (void 0 === a.style[f] && (f = aw() + _.Dg(f), void 0 !== a.style[f])) {
                f = _.bw() + "-transform";
                break i
            }
            f = "transform"
        }
        a = (a = _.ng(a, f) || _.ng(a, "transform")) ? (a = a.match(vg)) ? new _.X((0, window.parseFloat)(a[1]), (0, window.parseFloat)(a[2])) : new _.X(0, 0) : new _.X(0, 0);
        a = new _.X(c.x + a.x, c.y + a.y)
    } else 
        a = c;
    return a
};
_.wg = function(a, c, f) {
    if (c instanceof _.fg)
        f = c.height, c = c.width;
    else if (void 0 == f)
        throw Error("r");
    a.style.width = _.xg(c, !0);
    _.Lt(a, f)
};
_.xg = function(a, c) {
    "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
    return a
};
_.Lt = function(a, c) {
    a.style.height = _.xg(c, !0)
};
_.Nt = function(a) {
    var c = zg;
    if ("none" != _.ng(a, "display"))
        return c(a);
    var f = a.style, g = f.display, h = f.visibility, l = f.position;
    f.visibility = "hidden";
    f.position = "absolute";
    f.display = "inline";
    a = c(a);
    f.display = g;
    f.position = l;
    f.visibility = h;
    return a
};
zg = function(a) {
    var c = a.offsetWidth, f = a.offsetHeight, g = _.ef&&!c&&!f;
    return _.kf(c)&&!g ||!a.getBoundingClientRect ? new _.fg(c, f) : (a = qg(a), new _.fg(a.right - a.left, a.bottom - a.top))
};
_.Xg = function(a) {
    var c = _.xf(void 0), f = null, g = c.B;
    _.W && g.createStyleSheet ? (f = g.createStyleSheet(), _.HG(f, a)) : (g = _.Cf(c.B, "head", void 0, void 0)[0], g || (f = _.Cf(c.B, "body", void 0, void 0)[0], g = c.R("head"), f.parentNode.insertBefore(g, f)), f = c.R("style"), _.HG(f, a), c.appendChild(g, f));
    return f
};
_.HG = function(a, c) {
    _.W && _.kf(a.cssText) ? a.cssText = c : a.innerHTML = c
};
_.Bg = _.df ? "MozUserSelect" : _.ef ? "WebkitUserSelect" : null;
vg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

_.mV = function(a) {
    if (8192 > a.length)
        return String.fromCharCode.apply(null, a);
    for (var c = "", f = 0; f < a.length; f += 8192)
        c += String.fromCharCode.apply(null, _.Ae(a, f, f + 8192));
    return c
};
var ch, sv, rv;
_.tv = null;
ch = null;
sv = null;
rv = null;
_.Kh = _.df || _.ef || _.cf || "function" == typeof _.D.atob;
_.Ks = function(a, c) {
    _.vi();
    for (var f = c ? rv : ch, g = [], h = 0; h < a.length;) {
        var l = f[a.charAt(h++)], n = h < a.length ? f[a.charAt(h)]: 0;
        ++h;
        var q = h < a.length ? f[a.charAt(h)]: 64;
        ++h;
        var t = h < a.length ? f[a.charAt(h)]: 64;
        ++h;
        if (null == l || null == n || null == q || null == t)
            throw Error();
        g.push(l<<2 | n>>4);
        64 != q && (g.push(n<<4 & 240 | q>>2), 64 != t && g.push(q<<6 & 192 | t))
    }
    return g
};
_.vi = function() {
    if (!_.tv) {
        _.tv = {};
        ch = {};
        sv = {};
        rv = {};
        for (var a = 0; 65 > a; a++)
            _.tv[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ch[_.tv[a]] = a, sv[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), rv[sv[a]] = a, 62 <= a && (ch["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a, rv["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a)
    }
};

_.rF = function(a) {
    this.B = a
};
_.rF.prototype.toString = function() {
    return this.B
};
_.fp = function() {
    _.dh.call(this);
    this.B = [];
    this.G = {}
};
_.J(_.fp, _.dh);
_.k = _.fp.prototype;
_.k.dl = 1;
_.k.Pg = 0;
_.k.subscribe = _.b(26);
_.k.zf = function(a) {
    if (0 != this.Pg)
        return this.ha || (this.ha = []), this.ha.push(a), !1;
    var c = this.B[a];
    if (c) {
        var f = this.G[c];
        f && _.xe(f, a);
        delete this.B[a];
        delete this.B[a + 1];
        delete this.B[a + 2]
    }
    return !!c
};
_.k.iu = function(a, c) {
    var f = this.G[a];
    if (f) {
        this.Pg++;
        for (var g = Array(arguments.length - 1), h = 1, l = arguments.length; h < l; h++)
            g[h - 1] = arguments[h];
        h = 0;
        for (l = f.length; h < l; h++) {
            var n = f[h];
            this.B[n + 1].apply(this.B[n + 2], g)
        }
        this.Pg--;
        if (this.ha && 0 == this.Pg)
            for (; f = this.ha.pop();)
                this.zf(f);
        return 0 != h
    }
    return !1
};
_.k.clear = function(a) {
    if (a) {
        var c = this.G[a];
        c && ((0, _.Be)(c, this.zf, this), delete this.G[a])
    } else 
        this.B.length = 0, this.G = {}
};
_.k.Da = function(a) {
    if (a) {
        var c = this.G[a];
        return c ? c.length : 0
    }
    a = 0;
    for (c in this.G)
        a += this.Da(c);
    return a
};
_.k.C = function() {
    _.fp.T.C.call(this);
    delete this.B;
    delete this.G;
    delete this.ha
};
_.lH = function() {
    _.dh.call(this);
    this.B = new _.fp;
    _.pD(this, this.B)
};
_.J(_.lH, _.dh);
_.lH.prototype.subscribe = _.b(25);
_.lH.prototype.zf = function(a) {
    return this.B.zf(a)
};
_.lH.prototype.clear = function(a) {
    this.B.clear(_.kf(a) ? a.toString() : void 0)
};
_.lH.prototype.Da = function(a) {
    return this.B.Da(_.kf(a) ? a.toString() : void 0)
};

var Us = {}, ou = function() {
    this.B = Us
}, tu, uu;
ou.prototype.nK=!0;
ou.prototype.cR = function() {
    return ""
};
ou.prototype.toString = function() {
    return "Const{}"
};
var WD = {}, qu = /^[-.%_!# a-zA-Z0-9]+$/, ru = function(a) {
    return a instanceof ou && a.constructor === ou && a.B === Us ? "" : "type_error:Const"
}, qE = function() {
    this.B = WD
};
qE.prototype.nK=!0;
qE.prototype.cR = function() {
    return ""
};
qE.prototype.mK=!0;
qE.prototype.Im = function() {
    return 1
};
tu = function(a) {
    var c = 0, f = "", g = function(a) {
        _.ea(a) ? (0, _.Be)(a, g) : (a = _.eG(a), f += _.OG(a), a = a.Im(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    };
    (0, _.Be)(arguments, g);
    return _.lm(f, c)
};
uu = /^[a-zA-Z0-9-]+$/;
_.Nk = function(a, c) {
    _.ea(c) || (c = [c]);
    var f = (0, _.De)(c, function(a) {
        return _.fa(a) ? a : a.Rr + " " + a.duration + "s " + a.timing + " " + a.Le + "s"
    });
    _.Mg(a, "transition", f.join(","))
};
_.Pk = function(a) {
    var c=!1, f;
    return function() {
        c || (f = a(), c=!0);
        return f
    }
}(function() {
    if (_.W)
        return _.sl("10.0");
    var a = window.document.createElement("div"), c = _.bw(), f = {
        transition: "opacity 1s linear"
    };
    c && (f[c + "-transition"] = "opacity 1s linear");
    c = {
        style: f
    };
    if (!uu.test("div"))
        throw Error("s`div");
    if ("div"in _.tm)
        throw Error("D`div");
    var f = null, g = "<div";
    if (c)
        for (var h in c) {
            if (!uu.test(h))
                throw Error("E`" + h);
                var l = c[h];
                if (null != l) {
                    var n;
                    n = h;
                    if (l instanceof ou)
                        l = ru(l);
                    else if ("style" == n.toLowerCase()) {
                        if (!_.Vg(l))
                            throw Error("M`" +
                            typeof l + "`" + l);
                            if (!(l instanceof _.pm)) {
                                var q = "", t = void 0;
                                for (t in l) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(t))
                                        throw Error("e`" + t);
                                        var v = l[t];
                                        null != v && (v instanceof ou ? v = ru(v) : qu.test(v) || (v = "zClosurez"), q += t + ":" + v + ";")
                                    }
                                    l = q ? _.yk(q) : _.rm
                            }
                            l = l instanceof _.pm && l.constructor === _.pm && l.G === _.nm ? l.B : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(n))
                                throw Error("F`" + n + "`" + l);
                                if (n.toLowerCase()in _.sm)
                                    if (l instanceof qE)
                                        l = l instanceof qE && l.constructor === qE && l.B === WD ? "" : "type_error:TrustedResourceUrl";
                                    else if (l instanceof
                                    _.su)
                                        l = _.Ls(l);
                                    else 
                                        throw Error("N`" + n + "`div`" + l);
                        }
                        l.nK && (l = l.cR());
                        n = n + '="' + _.He(String(l)) + '"';
                        g = g + (" " + n)
                    }
            }
    h = void 0;
    _.kf(h) ? _.ea(h) || (h = [h]) : h = [];
    !0 === _.mm.div ? g += ">" : (f = tu(h), g += ">" + _.OG(f) + "</div>", f = f.Im());
    (c = c && c.dir) && (/^(ltr|rtl|auto)$/i.test(c) ? f = 0 : f = null);
    c = _.lm(g, f);
    a.innerHTML = _.OG(c);
    a = a.firstChild;
    c = a.style[_.Cg("transition")];
    return "" != ("undefined" !== typeof c ? c : a.style[_.Fg(a, "transition")] || "")
});

_.Au = function() {
    _.wu = "oauth2relay" + String(2147483647 * (0, _.Vb)() | 0);
    _.Qt.proxy = _.wu
};
_.Bu = new _.lH;
_.mH = new _.rF("oauth");
_.Qt = {};
_.Au();
var LD = _.P("oauth-flow/client_id");
_.Qt.client_id = LD;
var uE = _.Qt, vE;
var xE = String(_.P("oauth-flow/redirectUri"));
if (xE)
    vE = xE.replace(/[#][\s\S]*/, "");
else {
    var QE = _.Rb.Pq(window.location.href);
    vE = [_.P("oauth-flow/callbackUrl"), "?x_origin=", (0, window.encodeURIComponent)(QE)].join("")
}
uE.redirect_uri = vE;
_.Qt.origin = _.Rb.Pq(window.location.href);
_.Qt.response_type = "token";

_.Tc = _.Ka(_.bb, "rw", _.r());
var Uc = function(a, c) {
    var f = _.Tc[a];
    f && f.state < c && (f.state = c)
};
var Vc = function(a) {
    a = (a = _.Tc[a]) ? a.oid : void 0;
    if (a) {
        var c = _.ua.getElementById(a);
        c && c.parentNode.removeChild(c);
        delete _.Tc[a];
        Vc(a)
    }
};
_.bf = function(a) {
    a = a.container;
    "string" === typeof a && (a = window.document.getElementById(a));
    return a
};
_.gf = function(a) {
    var c = a.clientWidth;
    return "position:absolute;top:-10000px;width:" + (c ? c + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
};
_.hf = function(a, c) {
    var f = {}, g = a.va(), h = c && c.width, l = c && c.height, n = c && c.verticalAlign;
    n && (f.verticalAlign = n);
    h || (h = g.width || a.width);
    l || (l = g.height || a.height);
    g.width = f.width = h;
    g.height = f.height = l;
    g = a.rb();
    h = a.Hh();
    Uc(h, 2);
    t: {
        h = a.V();
        f = f || {};
        if (_.bb.oa) {
            var q = g.id;
            if (q) {
                l = (l = _.Tc[q]) ? l.state : void 0;
                if (1 === l || 4 === l)
                    break t;
                Vc(q)
            }
        }(l = h.nextSibling) && l.getAttribute && l.getAttribute("data-gapistub") && (h.parentNode.removeChild(l), h.style.cssText = "");
        var l = f.width, n = f.height, t = h.style;
        t.textIndent = "0";
        t.margin =
        "0";
        t.padding = "0";
        t.background = "transparent";
        t.borderStyle = "none";
        t.cssFloat = "none";
        t.styleFloat = "none";
        t.lineHeight = "normal";
        t.fontSize = "1px";
        t.verticalAlign = "baseline";
        h = h.style;
        h.display = "inline-block";
        g = g.style;
        g.position = "static";
        g.left = 0;
        g.top = 0;
        g.visibility = "visible";
        l && (h.width = g.width = l + "px");
        n && (h.height = g.height = n + "px");
        f.verticalAlign && (h.verticalAlign = f.verticalAlign);
        q && Uc(q, 3)
    }(q = c ? c.title : null) && a.rb().setAttribute("title", q)
};
_.jf = function(a) {
    var c = a.V();
    c && c.removeChild(a.rb())
};
_.Ru = function(a) {
    a.where = _.bf(a);
    var c = a.messageHandlers = a.messageHandlers || {}, f = function(a) {
        _.hf(this, a)
    };
    c._ready = f;
    c._renderstart = f;
    var g = a.onClose;
    a.onClose = function(a) {
        g && g.call(this, a);
        _.jf(this)
    };
    a.onCreate = function(a) {
        a = a.rb();
        a.style.cssText = _.gf(a)
    }
};

_.V.J = _.V.J || {};
_.V.J.jp = function(a) {
    try {
        return !!a.document
    } catch (c) {}
    return !1
};
_.V.J.Uk = function(a) {
    var c = a.parent;
    return a != c && _.V.J.jp(c) ? _.V.J.Uk(c) : a
};
_.V.J.St = function(a) {
    var c = a.userAgent || "";
    a = a.product || "";
    return 0 != c.indexOf("Opera")&&-1 == c.indexOf("WebKit") && "Gecko" == a && 0 < c.indexOf("rv:1.")
};

var gc = function() {
    _.V.Kl++;
    return ["I", _.V.Kl, "_", (new Date).getTime()].join("")
}, ec;
var ic = function(a) {
    return a instanceof Array ? a.join(",") : a instanceof Object ? (0, _.mf)(a) : a
};
var lc = function() {};
var oc = function(a) {
    a && a.match(pc) && _.Fa("googleapis.config/gcv", a)
};
var qc = function(a) {
    _.Rb.xh.ys(a)
};
var rc = function(a) {
    _.Rb.xh.pj(a)
};
_.sc = function(a, c) {
    var f = c || {}, g;
    for (g in a)
        a.hasOwnProperty(g) && (f[g] = a[g]);
    return f
};
_.tc = function(a, c, f, g, h) {
    var l = [], n;
    for (n in a)
        if (a.hasOwnProperty(n)) {
            var q = c, t = f, v = a[n], w = g, A = Zb(n);
            A[q] = A[q] || {};
            w = _.R.Dg(w, v);
            v._iframe_wrapped_rpc_ && (w._iframe_wrapped_rpc_=!0);
            A[q][t] = w;
            l.push(n)
        }
    if (h)
        for (n in _.V.bo)
            _.V.bo.hasOwnProperty(n) && l.push(n);
    return l.join(",")
};
var uc = function(a, c, f) {
    var g = {};
    if (a && a._methods) {
        a = a._methods.split(",");
        for (var h = 0; h < a.length; h++) {
            var l = a[h];
            g[l] = $b(l, c, f)
        }
    }
    return g
};
var vc = function(a) {
    if (a && a.disableMultiLevelParentRelay)
        a=!1;
    else {
        var c;
        if (c = _.Sb && _.Sb._open && "inline" != a.style&&!0 !== a.inline)
            a = a.container, c=!(a && ("string" == typeof a && window.document.getElementById(a) || window.document == (a.ownerDocument || a.document)));
        a = c
    }
    return a
};
var eo = function(a, c) {
    var f = {}, g = c.params || {}, h;
    for (h in a)
        "#" == h.charAt(0) && (f[h.substring(1)] = a[h]), 0 == h.indexOf("fr-") && (f[h.substring(3)] = a[h]), "#" == g[h] && (f[h] = a[h]);
    for (var l in f)
        delete a["fr-" + l], delete a["#" + l], delete a[l];
    return f
};
var xc = function(a) {
    if (":" == a.charAt(0)) {
        var c = _.P("iframes/" + a.substring(1));
        a = {};
        _.Sl(c, a);
        (c = a.url) && (a.url = _.mc(c));
        a.params || (a.params = {});
        return a
    }
    return {
        url: _.mc(a)
    }
};
var yc = function(a) {
    function c() {}
    c.prototype = zc.prototype;
    a.prototype = new c
};
var Mc = function(a) {
    return _.V.yf[a]
};
var Nc = function(a, c) {
    _.V.yf[a] = c
};
var Oc = function(a) {
    a = a || {};
    "auto" === a.height && (a.height = _.Ob.Cd());
    var c = window && Pc && Pc.ma();
    c ? c.Gm(a.width || 0, a.height || 0) : _.Sb && _.Sb._resizeMe && _.Sb._resizeMe(a)
};
var Qc = function(a) {
    oc(a)
};
ec = function(a) {
    var c = _.Wa(a.location.href, "urlindex");
    if (c = _.Ka(_.bb, "fUrl", [])[c]) {
        var f = a.location.hash, c = c + (/#/.test(c) ? f.replace(/^#/, "&") : f);
        a.location.replace(c)
    }
};
_.Qu = function() {
    return _.ta.location.origin || _.ta.location.protocol + "//" + _.ta.location.host
};
if (window.ToolbarApi)
    Pc = window.ToolbarApi, Pc.ma = window.ToolbarApi.getInstance, Pc.prototype = window.ToolbarApi.prototype, _.k = Pc.prototype, _.k.pm = Pc.prototype.openWindow, _.k.rk = Pc.prototype.closeWindow, _.k.Tm = Pc.prototype.setOnCloseHandler, _.k.ok = Pc.prototype.canClosePopup, _.k.Gm = Pc.prototype.resizeWindow;
else {
    var Pc = function() {}, Rc = null;
    Pc.ma = function() {
        !Rc && window.external && window.external.GTB_IsToolbar && (Rc = new Pc);
        return Rc
    };
    _.k = Pc.prototype;
    _.k.pm = function(a) {
        return window.external.GTB_OpenPopup &&
        window.external.GTB_OpenPopup(a)
    };
    _.k.rk = function(a) {
        window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
    };
    _.k.Tm = function(a, c) {
        window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, c)
    };
    _.k.ok = function(a) {
        return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
    };
    _.k.Gm = function(a, c) {
        return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, c)
    };
    window.ToolbarApi = Pc;
    window.ToolbarApi.getInstance = Pc.ma
};
var bc = function() {
    _.T.register("_noop_echo", function() {
        this.callback(_.V.UI(_.V.Uc[this.f]))
    })
}, ac = function() {
    window.setTimeout(function() {
        _.T.call("..", "_noop_echo", _.V.Lr)
    }, 0)
}, $b = function(a, c, f) {
    var g = function(g) {
        var l = Array.prototype.slice.call(arguments, 0), n = l[l.length - 1];
        if ("function" === typeof n) {
            var q = n;
            l.pop()
        }
        l.unshift(c, a, q, f);
        _.T.call.apply(_.T, l)
    };
    g._iframe_wrapped_rpc_=!0;
    return g
}, Zb = function(a) {
    _.V.Rg[a] || (_.V.Rg[a] = {}, _.T.register(a, function(c, f) {
        var g = this.f;
        if (!("string" != typeof c ||
        c in{}
        || g in{})) {
            var h = this.callback, l = _.V.Rg[a][g], n;
            l && Object.hasOwnProperty.call(l, c) ? n = l[c] : Object.hasOwnProperty.call(_.V.bo, a) && (n = _.V.bo[a]);
            if (n)
                return g = Array.prototype.slice.call(arguments, 1), n._iframe_wrapped_rpc_ && h && g.push(h), n.apply({}, g)
        }
        _.sa(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', c, '" from frame "', g, '".'].join(""));
        return null
    }));
    return _.V.Rg[a]
};
_.V.ip = function(a, c, f) {
    var g = Array.prototype.slice.call(arguments);
    _.V.Pk(function(a) {
        a.sameOrigin && (g.unshift("/" + a.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.T.call.apply(_.T, g))
    })
};
_.V.Sr = function(a, c) {
    _.T.register(a, c)
};
var pc = /^[-_.0-9A-Za-z]+$/, Hc = {
    open: "open",
    onready: "ready",
    close: "close",
    onresize: "resize",
    onOpen: "open",
    onReady: "ready",
    onClose: "close",
    onResize: "resize",
    onRenderStart: "renderstart"
}, Jc = {
    onBeforeParentOpen: "beforeparentopen"
}, Cc = {
    onOpen: function(a) {
        var c = a.va();
        a.Pa(c.container || c.element);
        return a
    },
    onClose: function(a) {
        a.remove()
    }
};
_.V.Wp = function(a) {
    var c = _.r();
    _.Sl(_.vb, c);
    _.Sl(a, c);
    return c
};
var zc = function(a, c, f, g, h, l, n, q) {
    this.config = xc(a);
    this.openParams = this.ss = c || {};
    this.params = f || {};
    this.methods = g;
    this.qy=!1;
    Ac(this, c.style);
    this.Aq = {};
    Bc(this, function() {
        var a;
        (a = this.ss.style) && _.V.yf[a] ? a = _.V.yf[a] : a ? (_.Lb(['Missing handler for style "', a, '". Continuing with default handler.'].join("")), a = null) : a = Cc;
        if (a) {
            var c;
            if ("function" === typeof a)
                c = a(this);
            else {
                var f = {};
                for (c in a) {
                    var g = a[c];
                    f[c] = "function" === typeof g ? _.R.Dg(a, g, this) : g
                }
                c = f
            }
            for (var n in h)
                a = c[n], "function" === typeof a &&
                Dc(this, h[n], _.R.Dg(c, a))
        }
        l && Dc(this, "close", l)
    });
    this.ya = this.ac = n;
    this.dj = (q || []).slice();
    n && this.dj.unshift(n.Hh())
};
zc.prototype.va = function() {
    return this.ss
};
zc.prototype.tb = function() {
    return this.params
};
zc.prototype.bi = function() {
    return this.methods
};
zc.prototype.ci = function() {
    return this.ya
};
var Ac = function(a, c) {
    if (!a.qy) {
        var f = c&&!_.V.yf[c] && _.V.XR[c];
        f ? (a.kz = [], f(function() {
            a.qy=!0;
            for (var c = 0, f = a.kz.length; c < f; ++c)
                a.kz[c].call(a)
        })) : a.qy=!0
    }
}, Bc = function(a, c) {
    a.qy ? c.call(a) : a.kz.push(c)
};
zc.prototype.ea = function(a, c) {
    Bc(this, function() {
        Dc(this, a, c)
    })
};
var Dc = function(a, c, f) {
    a.Aq[c] = a.Aq[c] || [];
    a.Aq[c].push(f)
};
zc.prototype.Ub = function(a, c) {
    Bc(this, function() {
        var f = this.Aq[a];
        if (f)
            for (var g = 0, h = f.length; g < h; ++g)
                if (f[g] === c) {
                    f.splice(g, 1);
                    break
                }
    })
};
zc.prototype.Pb = function(a, c) {
    var f, g = this.Aq[a];
    if (g)
        for (var h = Array.prototype.slice.call(arguments, 1), l = 0, n = g.length; l < n; ++l)
            try {
                f = g[l].apply({}, h)
    } catch (q) {
        _.sa(['Exception when calling callback "', a, '" with exception "', q.name, ": ", q.message, '".'].join(""))
    }
    return f
};
var Ec = function(a) {
    return "number" == typeof a ? {
        value: a,
        od: a + "px"
    } : "100%" == a ? {
        value: 100,
        od: "100%",
        Ul: !0
    } : null
}, Gc = function(a, c, f, g, h, l, n) {
    zc.call(this, a, c, f, g, Hc, h, l, n);
    this.id = c.id || gc();
    this.G = c.rpctoken && String(c.rpctoken) || Math.round(1E9 * (0, _.Vb)());
    this.M = eo(this.params, this.config);
    this.Cz = {};
    Bc(this, function() {
        this.Pb("open");
        _.sc(this.Cz, this)
    })
};
yc(Gc);
_.k = Gc.prototype;
_.k.Pa = function(a, c) {
    if (!this.config.url)
        return _.sa("Cannot open iframe, empty URL."), this;
    var f = this.id;
    _.V.Uc[f] = this;
    var g = _.sc(this.methods);
    g._ready = this.Jg;
    g._close = this.close;
    g._open = this.HB;
    g._resizeMe = this.Ug;
    g._renderstart = this.PA;
    var h = this.M;
    this.G && (h.rpctoken = this.G);
    h._methods = _.tc(g, f, "", this, !0);
    this.ha = a = "string" === typeof a ? window.document.getElementById(a) : a;
    g = {};
    g.id = f;
    if (c) {
        g.attributes = c;
        var l = c.style;
        if ("string" === typeof l) {
            var n;
            if (l) {
                n = [];
                for (var l = l.split(";"), q = 0, t = l.length; q <
                t; ++q) {
                    var v = l[q];
                    if (0 != v.length || q + 1 != t)
                        v = v.split(":"), 2 == v.length && v[0].match(/^[ a-zA-Z_-]+$/) && v[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? n.push(v.join(":")) : _.sa(['Iframe style "', l[q], '" not allowed.'].join(""))
                    }
                n = n.join(";")
            } else 
                n = "";
            c.style = n
        }
    }
    this.va().allowPost && (g.allowPost=!0);
    g.queryParams = this.params;
    g.fragmentParams = h;
    g.paramsSerializer = ic;
    this.B = _.tb(this.config.url, a, g);
    h = this.B.getAttribute("data-postorigin") || this.B.src;
    _.V.Uc[f] = this;
    _.T.Wg(this.id, this.G);
    _.T.Xg(this.id, h);
    return this
};
_.k.fg = function(a, c) {
    this.Cz[a] = c
};
_.k.Hh = function() {
    return this.id
};
_.k.rb = function() {
    return this.B
};
_.k.V = function() {
    return this.ha
};
_.k.qc = function(a) {
    this.ha = a
};
_.k.Jg = function(a) {
    var c = uc(a, this.id, "");
    this.ya && "function" == typeof this.methods._ready && (a._methods = _.tc(c, this.ya.Hh(), this.id, this, !1), this.methods._ready(a));
    _.sc(a, this);
    _.sc(c, this);
    this.Pb("ready", a)
};
_.k.PA = function(a) {
    this.Pb("renderstart", a)
};
_.k.close = function(a) {
    a = this.Pb("close", a);
    delete _.V.Uc[this.id];
    return a
};
_.k.remove = function() {
    var a = window.document.getElementById(this.id);
    a && a.parentNode && a.parentNode.removeChild(a)
};
_.k.HB = function(a) {
    var c = uc(a.params, this.id, a.proxyId);
    delete a.params._methods;
    "_parent" == a.openParams.anchor && (a.openParams.anchor = this.ha);
    if (vc(a.openParams))
        new Ic(a.url, a.openParams, a.params, c, c._onclose, this, a.openedByProxyChain);
    else {
        var f = new Gc(a.url, a.openParams, a.params, c, c._onclose, this, a.openedByProxyChain), g = this;
        Bc(f, function() {
            var a = {
                childId: f.Hh()
            }, l = f.Cz;
            l._toclose = f.close;
            a._methods = _.tc(l, g.id, f.id, f, !1);
            c._onopen(a)
        })
    }
};
_.k.Ug = function(a) {
    if (void 0 === this.Pb("resize", a) && this.B) {
        var c = Ec(a.width);
        null != c && (this.B.style.width = c.od);
        a = Ec(a.height);
        null != a && (this.B.style.height = a.od);
        this.B.parentElement && (null != c && c.Ul || null != a && a.Ul) && (this.B.parentElement.style.display = "block")
    }
};
var Ic = function(a, c, f, g, h, l, n) {
    zc.call(this, a, c, f, g, Jc, h, l, n);
    this.url = a;
    this.B = null;
    this.xA = gc();
    Bc(this, function() {
        var a;
        this.Pb("beforeparentopen");
        var c = _.sc(this.methods);
        c._onopen = this.UK;
        c._ready = this.Jg;
        c._onclose = this.TK;
        this.params._methods = _.tc(c, "..", this.xA, this, !0);
        c = {};
        for (a in this.params)
            c[a] = ic(this.params[a]);
        var f = this.config.url;
        if (this.ss.hideUrlFromParent) {
            a = window.name;
            var g = f, f = _.Bn(this.config.url, this.params, {}, ic), h = c, c = {};
            c._methods = h._methods;
            c["#opener"] = h["#opener"];
            c["#urlindex"] = h["#urlindex"];
            c["#opener"] && void 0 != h["#urlindex"] ? (c["#opener"] = a + "," + c["#opener"], a = g) : (g = _.Ka(_.bb, "fUrl", []), h = g.length, g[h] = f, _.bb.rUrl = ec, c["#opener"] = a, c["#urlindex"] = h, a = _.Rb.Pq(_.ta.location.href), f = _.P("iframes/relay_url_" + (0, window.encodeURIComponent)(a)) || "/_/gapi/sibling/1/frame.html", a = a + f);
            f = a
        }
        _.Sb._open({
            url: f,
            openParams: this.ss,
            params: c,
            proxyId: this.xA,
            openedByProxyChain: this.dj
        })
    })
};
yc(Ic);
Ic.prototype.G = function() {
    return this.B
};
Ic.prototype.UK = function(a) {
    this.B = a.childId;
    var c = uc(a, "..", this.B);
    _.sc(c, this);
    this.close = c._toclose;
    _.V.Uc[this.B] = this;
    this.ya && this.methods._onopen && (a._methods = _.tc(c, this.ya.Hh(), this.B, this, !1), this.methods._onopen(a))
};
Ic.prototype.Jg = function(a) {
    var c = String(this.B), f = uc(a, "..", c);
    _.sc(a, this);
    _.sc(f, this);
    this.Pb("ready", a);
    this.ya && this.methods._ready && (a._methods = _.tc(f, this.ya.Hh(), c, this, !1), this.methods._ready(a))
};
Ic.prototype.TK = function(a) {
    if (this.ya && this.methods._onclose)
        this.methods._onclose(a);
    else 
        return a = this.Pb("close", a), delete _.V.Uc[this.B], a
};
var Kc = function(a, c, f, g, h, l, n) {
    zc.call(this, a, c, f, g, Jc, l, n);
    this.id = c.id || gc();
    this.G = h;
    g._close = this.close;
    this.onClosed = this.B;
    this.DF = 0;
    Bc(this, function() {
        this.Pb("beforeparentopen");
        var c = _.sc(this.methods);
        this.params._methods = _.tc(c, "..", this.xA, this, !0);
        c = {};
        c.queryParams = this.params;
        a = _.qa(_.ua, this.config.url, this.id, c);
        var f = h.pm(a);
        this.canAutoClose = function(a) {
            a(h.ok(f))
        };
        h.Tm(f, this);
        this.DF = f
    })
};
yc(Kc);
Kc.prototype.close = function(a) {
    a = this.Pb("close", a);
    this.G.rk(this.DF);
    return a
};
Kc.prototype.B = function() {
    this.Pb("close")
};
(function() {
    _.V.Uc = {};
    _.V.yf = {};
    _.V.XR = {};
    _.V.Kl = 0;
    _.V.Rg = {};
    _.V.bo = {};
    _.V.Ng = null;
    _.V.Mg = [];
    _.V.Lr = function(a) {
        var c=!1;
        try {
            if (null != a)
                var h = window.parent.frames[a.id], c = h.iframer.id == a.id && h.iframes.openedId_(_.Sb.id)
        } catch (l) {}
        try {
            _.V.Ng = {
                origin: this.origin,
                referer: this.referer,
                claimedOpenerId: a && a.id,
                claimedOpenerProxyChain: a && a.proxyChain || [],
                sameOrigin: c
            };
            for (a = 0; a < _.V.Mg.length; ++a)
                _.V.Mg[a](_.V.Ng);
            _.V.Mg = []
        } catch (n) {}
    };
    _.V.UI = function(a) {
        var c = a && a.ya, h = null;
        c && (h = {}, h.id = c.Hh(), h.proxyChain =
        a.dj);
        return h
    };
    bc();
    if (window.parent != window) {
        var a = _.R.dc();
        a.gcv && oc(a.gcv);
        var c = a.jsh;
        c && qc(c);
        _.sc(uc(a, "..", ""), _.Sb);
        _.sc(a, _.Sb);
        ac()
    }
    _.V.Cr = Mc;
    _.V.na = Nc;
    _.V.xs = Qc;
    _.V.resize = Oc;
    _.V.Rp = function(a) {
        return _.V.XR[a]
    };
    _.V.qj = function(a, c) {
        _.V.XR[a] = c
    };
    _.V.rD = Oc;
    _.V.Ds = Qc;
    _.V.ng = {};
    _.V.ng.get = Mc;
    _.V.ng.set = Nc;
    _.V.Zo = function(a, c) {
        Zb(a);
        _.V.bo[a] = c || window[a]
    };
    _.V.Mt = function(a) {
        delete _.V.bo[a]
    };
    _.V.open = function(a, c, h, l, n, q) {
        3 == arguments.length ? l = {} : 4 == arguments.length && "function" === typeof l &&
        (n = l, l = {});
        var t = "bubble" === c.style && Pc ? Pc.ma(): null;
        return t ? new Kc(a, c, h, l, t, n, q) : vc(c) ? new Ic(a, c, h, l, n, q) : new Gc(a, c, h, l, n, q)
    };
    _.V.close = function(a, c) {
        _.Sb && _.Sb._close && _.Sb._close(a, c)
    };
    _.V.ready = function(a, c, h) {
        2 == arguments.length && "function" === typeof c && (h = c, c = {});
        var l = a || {};
        "height"in l || (l.height = _.Ob.Cd());
        l._methods = _.tc(c || {}, "..", "", _.Sb, !0);
        _.Sb && _.Sb._ready && _.Sb._ready(l, h)
    };
    _.V.Pk = function(a) {
        _.V.Ng ? a(_.V.Ng) : _.V.Mg.push(a)
    };
    _.V.Ir = function(a) {
        return !!_.V.Uc[a]
    };
    _.V.Vp = function() {
        return ["https://ssl.gstatic.com/gb/js/",
        _.P("googleapis.config/gcv")].join("")
    };
    _.V.Qr = function(a) {
        var c = {
            mouseover: 1,
            mouseout: 1
        };
        if (_.Sb._event)
            for (var h = 0; h < a.length; h++) {
                var l = a[h];
                l in c && _.R.Ee(window.document, l, function(a) {
                    _.Sb._event({
                        event: a.type,
                        timestamp: (new Date).getTime()
                    })
                }, !0)
            }
    };
    _.V.zs = qc;
    _.V.pj = rc;
    _.V.kr = lc;
    _.V.dE = _.Sb
})();
_.e("iframes.allow", _.V.Zo);
_.e("iframes.callSiblingOpener", _.V.ip);
_.e("iframes.registerForOpenedSibling", _.V.Sr);
_.e("iframes.close", _.V.close);
_.e("iframes.getGoogleConnectJsUri", _.V.Vp);
_.e("iframes.getHandler", _.V.Cr);
_.e("iframes.getDeferredHandler", _.V.Rp);
_.e("iframes.getParentInfo", _.V.Pk);
_.e("iframes.iframer", _.V.dE);
_.e("iframes.open", _.V.open);
_.e("iframes.openedId_", _.V.Ir);
_.e("iframes.propagate", _.V.Qr);
_.e("iframes.ready", _.V.ready);
_.e("iframes.resize", _.V.resize);
_.e("iframes.setGoogleConnectJsVersion", _.V.xs);
_.e("iframes.setBootstrapHint", _.V.pj);
_.e("iframes.setJsHint", _.V.zs);
_.e("iframes.setHandler", _.V.na);
_.e("iframes.setDeferredHandler", _.V.qj);
_.e("IframeBase", zc);
_.e("IframeBase.prototype.addCallback", zc.prototype.ea);
_.e("IframeBase.prototype.getMethods", zc.prototype.bi);
_.e("IframeBase.prototype.getOpenerIframe", zc.prototype.ci);
_.e("IframeBase.prototype.getOpenParams", zc.prototype.va);
_.e("IframeBase.prototype.getParams", zc.prototype.tb);
_.e("IframeBase.prototype.removeCallback", zc.prototype.Ub);
_.e("Iframe", Gc);
_.e("Iframe.prototype.close", Gc.prototype.close);
_.e("Iframe.prototype.exposeMethod", Gc.prototype.fg);
_.e("Iframe.prototype.getId", Gc.prototype.Hh);
_.e("Iframe.prototype.getIframeEl", Gc.prototype.rb);
_.e("Iframe.prototype.getSiteEl", Gc.prototype.V);
_.e("Iframe.prototype.openInto", Gc.prototype.Pa);
_.e("Iframe.prototype.remove", Gc.prototype.remove);
_.e("Iframe.prototype.setSiteEl", Gc.prototype.qc);
_.e("Iframe.prototype.addCallback", Gc.prototype.ea);
_.e("Iframe.prototype.getMethods", Gc.prototype.bi);
_.e("Iframe.prototype.getOpenerIframe", Gc.prototype.ci);
_.e("Iframe.prototype.getOpenParams", Gc.prototype.va);
_.e("Iframe.prototype.getParams", Gc.prototype.tb);
_.e("Iframe.prototype.removeCallback", Gc.prototype.Ub);
_.e("IframeProxy", Ic);
_.e("IframeProxy.prototype.getTargetIframeId", Ic.prototype.G);
_.e("IframeProxy.prototype.addCallback", Ic.prototype.ea);
_.e("IframeProxy.prototype.getMethods", Ic.prototype.bi);
_.e("IframeProxy.prototype.getOpenerIframe", Ic.prototype.ci);
_.e("IframeProxy.prototype.getOpenParams", Ic.prototype.va);
_.e("IframeProxy.prototype.getParams", Ic.prototype.tb);
_.e("IframeProxy.prototype.removeCallback", Ic.prototype.Ub);
_.e("IframeWindow", Kc);
_.e("IframeWindow.prototype.close", Kc.prototype.close);
_.e("IframeWindow.prototype.onClosed", Kc.prototype.B);
_.e("iframes.util.getTopMostAccessibleWindow", _.V.J.Uk);
_.e("iframes.handlers.get", _.V.ng.get);
_.e("iframes.handlers.set", _.V.ng.set);
_.e("iframes.resizeMe", _.V.rD);
_.e("iframes.setVersionOverride", _.V.Ds);
zc.prototype.send = function(a, c, f) {
    _.V.Gr(this, a, c, f)
};
_.Sb.send = function(a, c, f) {
    _.V.Gr(_.Sb, a, c, f)
};
zc.prototype.register = function(a, c) {
    var f = this;
    f.ea(a, function(a) {
        c.call(f, a)
    })
};
_.V.Gr = function(a, c, f, g) {
    var h = [];
    void 0 !== f && h.push(f);
    g && h.push(function(a) {
        g.call(this, [a])
    });
    a[c] && a[c].apply(a, h)
};
_.V.Fa = function() {
    return !0
};
_.e("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.V.Fa);
_.e("IframeBase.prototype.send", zc.prototype.send);
_.e("IframeBase.prototype.register", zc.prototype.register);
_.e("Iframe.prototype.send", Gc.prototype.send);
_.e("Iframe.prototype.register", Gc.prototype.register);
_.e("IframeProxy.prototype.send", Ic.prototype.send);
_.e("IframeProxy.prototype.register", Ic.prototype.register);
_.e("IframeWindow.prototype.send", Kc.prototype.send);
_.e("IframeWindow.prototype.register", Kc.prototype.register);
_.e("iframes.iframer.send", _.V.dE.send);

var XC = _.V.na, hD = {
    open: function(a) {
        var c = _.bf(a.va());
        return a.Pa(c, {
            style: _.gf(c)
        })
    },
    attach: function(a, c) {
        var f = _.bf(a.va()), g = c.id, h = c.getAttribute("data-postorigin") || c.src, l = /#(?:.*&)?rpctoken=(\d+)/.exec(h), l = l && l[1];
        a.id = g;
        a.G = l;
        a.ha = f;
        a.B = c;
        _.V.Uc[g] = a;
        l = _.sc(a.methods);
        l._ready = a.Jg;
        l._close = a.close;
        l._open = a.HB;
        l._resizeMe = a.Ug;
        l._renderstart = a.PA;
        _.tc(l, g, "", a, !0);
        _.T.Wg(a.id, a.G);
        _.T.Xg(a.id, h);
        var f = _.V.Wp({
            style: _.gf(f)
        }), n;
        for (n in f)
            Object.prototype.hasOwnProperty.call(f, n) && ("style" == n ? a.B.style.cssText = f[n] : a.B.setAttribute(n, f[n]))
    }
};
hD.onready = _.hf;
hD.onRenderStart = _.hf;
hD.close = _.jf;
XC("inline", hD);

_.At = (window.gapi || {}).load;
var dC, Yu, Zu, $u, Ak, Fk, Ck, Dk, Fm;
_.Vu = {
    apppackagename: 1,
    callback: 1,
    clientid: 1,
    cookiepolicy: 1,
    openidrealm: - 1,
    includegrantedscopes: - 1,
    requestvisibleactions: 1,
    scope: 1
};
_.Wu=!1;
_.Xu = function() {
    if (!_.Wu) {
        for (var a = window.document.getElementsByTagName("meta"), c = 0; c < a.length; ++c) {
            var f = a[c].name.toLowerCase();
            if (_.jd(f, "google-signin-")) {
                var f = f.substring(14), g = a[c].content;
                _.Vu[f] && g && (_.Uo[f] = g)
            }
        }
        if (window.self !== window.top) {
            var a = window.document.location.toString(), h;
            for (h in _.Vu)
                0 < _.Vu[h] && (c = _.Wa(a, h, "")) && (_.Uo[h] = c)
            }
        _.Wu=!0
    }
    h = _.r();
    _.Sl(_.Uo, h);
    return h
};
dC = function(a) {
    return function(c, f) {
        return a ? _.ql()[f] || a[f] || "" : _.ql()[f] || ""
    }
};
Yu = {
    button: !0,
    div: !0,
    span: !0
};
Zu = function(a) {
    return _.Ka(_.bb, "watt", _.r())[a]
};
$u = function(a) {
    var c = _.Ka(_.bb, "sws", []);
    return 0 <= _.xd.call(c, a)
};
Ak = function() {};
Fk = function(a) {
    var c = a.Ws, f = function(a) {
        f.T.constructor.call(this, a);
        var c = this.Ya.length;
        this.B = [];
        for (var g = 0; g < c; ++g)
            this.Ya[g].zK || (this.B[g] = new this.Ya[g](a))
    };
    _.J(f, c);
    for (var g = []; a;) {
        if (c = a.Ws) {
            c.Ya && _.Gl(g, c.Ya);
            var c = c.prototype, h;
            for (h in c)
                if (c.hasOwnProperty(h) && _.vd(c[h]) && c[h] !== a) {
                    var l=!!c[h].RH, n = Ck(h, c, g, l);
                    (l = Dk(h, c, n, l)) && (f.prototype[h] = l)
                }
        }
        a = a.T && a.T.constructor
    }
    f.prototype.Ya = g;
    return f
};
Ck = function(a, c, f, g) {
    for (var h = [], l = 0; l < f.length && (f[l].prototype[a] === c[a] || (h.push(l), !g)); ++l);
    return h
};
Dk = function(a, c, f, g) {
    var h;
    f.length ? g ? h = function(c) {
        var g = this.B[f[0]];
        return g ? g[a].apply(this.B[f[0]], arguments) : this.Ya[f[0]].prototype[a].apply(this, arguments)
    } : c[a].uH ? h = function(c) {
        var g;
        t: {
            g = Array.prototype.slice.call(arguments, 0);
            for (var h = 0; h < f.length; ++h) {
                var t = this.B[f[h]];
                if (t = t ? t[a].apply(t, g) : this.Ya[f[h]].prototype[a].apply(this, g)) {
                    g = t;
                    break t
                }
            }
            g=!1
        }
        return g
    } : c[a].VF ? h = function(c) {
        var g;
        t: {
            g = Array.prototype.slice.call(arguments, 0);
            for (var h = 0; h < f.length; ++h) {
                var t = this.B[f[h]], t = t ?
                t[a].apply(t, g): this.Ya[f[h]].prototype[a].apply(this, g);
                if (null != t) {
                    g = t;
                    break t
                }
            }
            g = void 0
        }
        return g
    } : c[a].AE ? h = function(c) {
        for (var g = Array.prototype.slice.call(arguments, 0), h = 0; h < f.length; ++h) {
            var t = this.B[f[h]];
            t ? t[a].apply(t, g) : this.Ya[f[h]].prototype[a].apply(this, g)
        }
    } : h = function(c) {
        for (var g = Array.prototype.slice.call(arguments, 0), h = [], t = 0; t < f.length; ++t) {
            var v = this.B[f[t]];
            h.push(v ? v[a].apply(v, g) : this.Ya[f[t]].prototype[a].apply(this, g))
        }
        return h
    } : g || c[a].uH || c[a].VF || c[a].AE ? h = null : h = Fm;
    return h
};
Fm = function() {
    return []
};
Ak.prototype.G = function(a) {
    if (this.B)
        for (var c = 0; c < this.B.length; ++c)
            if (this.B[c]instanceof a)
                return this.B[c];
    return null
};
var Nn = function(a) {
    return this.Vx.G(a)
};
var Xc;
Xc = function(a) {
    var c;
    a.match(/^https?%3A/i) && (c = (0, window.decodeURIComponent)(a));
    return _.An(window.document, c ? c : a)
};
_.Yc = function(a) {
    a = a || "canonical";
    for (var c = window.document.getElementsByTagName("link"), f = 0, g = c.length; f < g; f++) {
        var h = c[f], l = h.getAttribute("rel");
        if (l && l.toLowerCase() == a && (h = h.getAttribute("href")) && (h = Xc(h)) && null != h.match(/^https?:\/\/[\w\-\_\.]+/i))
            return h
    }
    return window.location.href
};
_.md = function() {
    return window.location.origin || window.location.protocol + "//" + window.location.host
};
_.Zc = function(a, c, f, g) {
    return (a = "string" == typeof a ? a : void 0) ? Xc(a) : _.Yc(g)
};
_.fd = function(a, c, f) {
    null == a && f && (a = f.db, null == a && (a = f.gwidget && f.gwidget.db));
    return a || void 0
};
_.gd = function(a, c, f) {
    null == a && f && (a = f.ecp, null == a && (a = f.gwidget && f.gwidget.ecp));
    return a || void 0
};
_.ld = function(a, c) {
    return _.Zc(a, 0, 0, c.action ? void 0 : "publisher")
};
var Wo, av, Md, Ld, id, Gd, bv, nd;
Wo = {
    se: "0"
};
av = {
    post: !0
};
Md = {
    style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
};
Ld = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
id = _.Ka(_.bb, "WI", _.r());
Gd = ["style", "data-gapiscan"];
bv = function(a) {
    for (var c = _.r(), f = 0 != a.nodeName.toLowerCase().indexOf("g:"), g = 0, h = a.attributes.length; g < h; g++) {
        var l = a.attributes[g], n = l.name, q = l.value;
        0 <= _.xd.call(Gd, n) || f && 0 != n.indexOf("data-") || "null" === q || "specified"in l&&!l.specified || (f && (n = n.substr(5)), c[n.toLowerCase()] = q)
    }
    a = a.style;
    (f = nd(a && a.height)) && (c.height = String(f));
    (a = nd(a && a.width)) && (c.width = String(a));
    return c
};
_.cv = function(a, c, f, g, h, l) {
    var n;
    f.rd ? n = c : (n = window.document.createElement("div"), c.setAttribute("data-gapistub", !0), n.style.cssText = "position:absolute;width:450px;left:-10000px;", c.parentNode.insertBefore(n, c));
    l.siteElement = n;
    n.id || (n.id = _.lf(a));
    c = _.r();
    c[">type"] = a;
    _.Sl(f, c);
    a = _.tb(g, n, h);
    l.iframeNode = a;
    l.id = a.getAttribute("id")
};
_.lf = function(a) {
    _.Ka(id, a, 0);
    return "___" + a + "_" + id[a]++
};
nd = function(a) {
    var c = void 0;
    "number" === typeof a ? c = a : "string" === typeof a && (c = (0, window.parseInt)(a, 10));
    return c
};
var Bd, Cd, Dd, Fd, dv = /(?:^|\s)g-((\S)*)(?:$|\s)/, ev = {
    plusone: !0,
    autocomplete: !0,
    profile: !0,
    signin: !0
};
Bd = _.Ka(_.bb, "SW", _.r());
Cd = _.Ka(_.bb, "SA", _.r());
Dd = _.Ka(_.bb, "SM", _.r());
Fd = _.Ka(_.bb, "FW", []);
var fv = function(a, c) {
    var f;
    "string" === typeof a ? f = window.document.getElementById(a) : f = a;
    return f || c
}, hv = function(a, c) {
    var f, g, h, l;
    _.gv("ps0");
    var n = fv(a, _.ua);
    g = _.ua.documentMode;
    if (n.querySelectorAll && (!g || 8 < g)) {
        g = c ? [c] : _.kb(Bd).concat(_.kb(Cd)).concat(_.kb(Dd));
        h = [];
        for (var q = 0; q < g.length; q++) {
            var t = g[q];
            h.push(".g-" + t, "g\\:" + t)
        }
        g = n.querySelectorAll(h.join(","))
    } else 
        g = n.getElementsByTagName("*");
    n = _.r();
    for (h = 0; h < g.length; h++) {
        q = g[h];
        var v = q, t = c, w = v.nodeName.toLowerCase(), A = void 0;
        v.getAttribute("data-gapiscan") ?
        t = null : (0 == w.indexOf("g:") ? A = w.substr(2) : (v = (v = String(v.className || v.getAttribute("class"))) && dv.exec(v)) && (A = v[1]), t=!A ||!(Bd[A] || Cd[A] || Dd[A]) || t && A !== t ? null : A);
        t && (ev[t] || 0 == q.nodeName.toLowerCase().indexOf("g:") || 0 != _.kb(bv(q)).length) && (q.setAttribute("data-gapiscan", !0), _.Ka(n, t, []).push(q))
    }
    for (f in n)
        Fd.push(f);
    _.gv("ps1");
    if (f = Fd.join(":"))
        try {
            _.Ua.load(f, void 0)
    } catch (F) {
        _.kd(F);
        return 
    }
    q = [];
    for (l in n)
        for (h = n[l], g = 0, f = h.length; g < f; g++)
            t = h[g], Hd(l, t, bv(t), q, f)
};
var Id = function(a, c) {
    var f = Zu(a);
    c && f ? (f(c), (f = c.iframeNode) && f.setAttribute("data-gapiattached", !0)) : _.Ua.load(a, function() {
        var f = Zu(a), h = c && c.iframeNode;
        h && f ? (f(c), h.setAttribute("data-gapiattached", !0)) : (0, _.Ua[a].go)(h && h.parentNode)
    })
}, Hd = function(a, c, f, g, h, l) {
    switch (Jd(c, a, l)) {
    case 0:
        a = Dd[a] ? a + "_annotation" : a;
        g = {};
        g.iframeNode = c;
        g.userParams = f;
        Id(a, g);
        break;
    case 1:
        if (c.parentNode) {
            for (var n in f) {
                if (l = _.Qa(f, n))
                    l = f[n], l=!!l && "object" === typeof l && (!l.toString || l.toString === Object.prototype.toString ||
                    l.toString === Array.prototype.toString);
                if (l)
                    try {
                        f[n] = (0, _.mf)(f[n])
                    } catch (q) {
                    delete f[n]
                }
            }
            n=!0;
            f.dontclear && (n=!1);
            delete f.dontclear;
            var t, v, w;
            l = {};
            var A = w = a;
            "plus" == a && f.action && (w = a + "_" + f.action, A = a + "/" + f.action);
            (w = _.P("iframes/" + w + "/url")) || (w = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + A + "?usegapi=1");
            for (v in Wo)
                l[v] = v + "/" + (f[v] || Wo[v]) + "/";
            v = _.An(_.ua, w.replace(_.nc, dC(l)));
            A = "iframes/" + a + "/params/";
            l = {};
            _.Sl(f, l);
            (w = _.P("lang") || _.P("gwidget/lang")) && (l.hl = w);
            av[a] || (l.origin =
            _.md());
            l.exp = _.P(A + "exp");
            if (A = _.P(A + "location"))
                for (w = 0; w < A.length; w++) {
                    var F = A[w];
                    l[F] = _.ta.location[F]
                }
            switch (a) {
            case "plus":
            case "follow":
                l.url = _.ld(l.href, f);
                delete l.href;
                break;
            case "plusone":
                A = (A = f.href) ? Xc(A) : _.Yc();
                l.url = A;
                l.db = _.fd(f.db, 0, _.P());
                l.ecp = _.gd(f.ecp, 0, _.P());
                delete l.href;
                break;
            case "signin":
                l.url = _.Yc()
            }
            _.bb.ILI && (l.iloader = "1");
            delete l["data-onload"];
            delete l.rd;
            for (var z in Wo)
                l[z] && delete l[z];
            l.gsrc = _.P("iframes/:source:");
            z = _.P("inline/css");
            "undefined" !== typeof z &&
            0 < h && z >= h && (l.ic = "1");
            z = /^#|^fr-/;
            h = {};
            for (var I in l)
                _.Qa(l, I) && z.test(I) && (h[I.replace(z, "")] = l[I], delete l[I]);
            I = "q" == _.P("iframes/" + a + "/params/si") ? l : h;
            z = _.Xu();
            for (t in z)
                !_.Qa(z, t) || _.Qa(l, t) || _.Qa(h, t) || (I[t] = z[t]);
            t = [].concat(Ld);
            I = _.P("iframes/" + a + "/methods");
            _.cb(I) && (t = t.concat(I));
            for (var E in f)
                _.Qa(f, E) && /^on/.test(E) && ("plus" != a || "onconnect" != E) && (t.push(E), delete l[E]);
            delete l.callback;
            h._methods = t.join(",");
            t = _.Bn(v, l, h);
            I = {
                allowPost: 1,
                attributes: Md
            };
            I.dontclear=!n;
            E = {};
            E.userParams =
            f;
            E.url = t;
            E.type = a;
            _.cv(a, c, f, t, I, E);
            c = E.id;
            f = _.r();
            f.id = c;
            f.userParams = E.userParams;
            f.url = E.url;
            f.type = E.type;
            f.state = 1;
            _.Tc[c] = f;
            c = E
        } else 
            c = null;
        c && ((f = c.id) && g.push(f), Id(a, c))
    }
}, Jd = function(a, c, f) {
    if (a && 1 === a.nodeType && c) {
        if (f)
            return 1;
        if (Dd[c]) {
            if (Yu[a.nodeName.toLowerCase()])
                return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
        } else {
            if (Cd[c])
                return 0;
            if (Bd[c])
                return 1
        }
    }
    return null
};
_.Ka(_.Ua, "platform", {}).go = function(a, c) {
    hv(a, c)
};
var Rd = _.Ka(_.bb, "perf", _.r()), yd = _.Ka(Rd, "g", _.r()), Ud = _.Ka(Rd, "i", _.r()), Pd, Qd, Od, Ad, Td, Vd;
_.Ka(Rd, "r", []);
Pd = _.r();
Qd = _.r();
Od = function(a, c, f, g) {
    Pd[f] = Pd[f]||!!g;
    _.Ka(Qd, f, []);
    Qd[f].push([a, c])
};
Ad = function(a, c, f) {
    var g = Rd.r;
    "function" === typeof g ? g(a, c, f) : g.push([a, c, f])
};
_.gv = function(a, c) {
    yd[a] = c || (new Date).getTime();
    Ad(a)
};
_.Sd = function(a, c, f, g) {
    if ("_p" == c)
        throw Error("Ra");
    _.nf(a, c, f, g)
};
_.nf = function(a, c, f, g) {
    Td(c, f)[a] = g || (new Date).getTime();
    Ad(a, c, f)
};
Td = function(a, c) {
    var f = _.Ka(Ud, a, _.r());
    return _.Ka(f, c, _.r())
};
Vd = function(a, c, f) {
    var g = null;
    c && f && (g = Td(c, f)[a]);
    return g || yd[a]
};
_.iv = function(a, c, f, g, h, l) {
    _.Sd("wrt0", a, c, f);
    _.Sd("wrt1", a, c, g);
    _.Sd("wrt2", a, c, h);
    _.Sd("wrt3", a, c, l)
};
(function() {
    function a(a) {
        this.t = {};
        this.tick = function(a, c, f) {
            this.t[a] = [void 0 != f ? f: (new Date).getTime(), c];
            if (void 0 == f)
                try {
                    window.console.timeStamp("CSI/" + a)
            } catch (g) {}
        };
        this.tick("start", null, a)
    }
    var c;
    window.performance && (c = window.performance.timing);
    var f = c ? new a(c.responseStart): new a;
    window.__gapi_jstiming__ = {
        Timer: a,
        load: f
    };
    if (c) {
        var g = c.navigationStart, h = c.responseStart;
        0 < g && h >= g && (window.__gapi_jstiming__.srt = h - g)
    }
    if (c) {
        var l = window.__gapi_jstiming__.load;
        0 < g && h >= g && (l.tick("_wtsrt", void 0,
        g), l.tick("wtsrt_", "_wtsrt", h), l.tick("tbsd_", "wtsrt_"))
    }
    try {
        c = null, window.chrome && window.chrome.csi && (c = Math.floor(window.chrome.csi().pageT), l && 0 < g && (l.tick("_tbnd", void 0, window.chrome.csi().startE), l.tick("tbnd_", "_tbnd", g))), null == c && window.gtbExternal && (c = window.gtbExternal.pageT()), null == c && window.external && (c = window.external.pageT, l && 0 < g && (l.tick("_tbnd", void 0, window.external.startE), l.tick("tbnd_", "_tbnd", g))), c && (window.__gapi_jstiming__.pt = c)
    } catch (n) {}
})();
if (window.__gapi_jstiming__) {
    window.__gapi_jstiming__.Pz = {};
    window.__gapi_jstiming__.Yr = 1;
    var he = function(a, c, f) {
        var g = a.t[c], h = a.t.start;
        if (g && (h || f))
            return g = a.t[c][0], void 0 != f ? h = f : h = h[0], g - h
    };
    window.__gapi_jstiming__.getTick = he;
    window.__gapi_jstiming__.getLabels = function(a) {
        var c = [], f;
        for (f in a.t)
            c.push(f);
        return c
    };
    var ie = function(a, c, f) {
        var g = "";
        window.__gapi_jstiming__.srt && (g += "&srt=" + window.__gapi_jstiming__.srt);
        window.__gapi_jstiming__.pt && (g += "&tbsrt=" + window.__gapi_jstiming__.pt);
        try {
            window.external &&
            window.external.tran ? g += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? g += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (g += "&tran=" + window.chrome.csi().tran)
        } catch (h) {}
        var l = window.chrome;
        if (l && (l = l.loadTimes)) {
            l().wasFetchedViaSpdy && (g += "&p=s");
            if (l().wasNpnNegotiated) {
                var g = g + "&npn=1", n = l().npnNegotiatedProtocol;
                n && (g += "&npnv=" + (window.encodeURIComponent || window.escape)(n))
            }
            l().wasAlternateProtocolAvailable && (g += "&apa=1")
        }
        var q = a.t, t = q.start, l =
        [], n = [], v;
        for (v in q)
            if ("start" != v && 0 != v.indexOf("_")) {
                var w = q[v][1];
                w ? q[w] && n.push(v + "." + he(a, v, q[w][0])) : t && l.push(v + "." + he(a, v))
            }
        if (c)
            for (var A in c)
                g += "&" + A + "=" + c[A];
        (c = f) || (c = "https:" == window.document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [c, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "oz") + "&action=", a.name, n.length ? "&it=" + n.join(","): "", g, "&rt=", l.join(",")].join("")
    }, je = function(a, c, f) {
        a = ie(a, c, f);
        if (!a)
            return "";
        c = new window.Image;
        var g = window.__gapi_jstiming__.Yr++;
        window.__gapi_jstiming__.Pz[g] = c;
        c.onload = c.onerror = function() {
            window.__gapi_jstiming__ && delete window.__gapi_jstiming__.Pz[g]
        };
        c.src = a;
        c = null;
        return a
    };
    window.__gapi_jstiming__.report = function(a, c, f) {
        if ("prerender" == window.document.webkitVisibilityState) {
            var g=!1, h = function() {
                if (!g) {
                    c ? c.prerender = "1" : c = {
                        prerender: "1"
                    };
                    var l;
                    "prerender" == window.document.webkitVisibilityState ? l=!1 : (je(a, c, f), l=!0);
                    l && (g=!0, window.document.removeEventListener("webkitvisibilitychange", h, !1))
                }
            };
            window.document.addEventListener("webkitvisibilitychange", h, !1);
            return ""
        }
        return je(a, c, f)
    }
};
var fe = [73, 74, 77, 78], ee = {
    g: "gapi_global",
    m: "gapi_module",
    w: "gwidget"
}, Wd = function(a, c) {
    this.type = a ? "_p" == a ? "m" : "w" : "g";
    this.name = a;
    this.B = c
};
Wd.prototype.key = function() {
    switch (this.type) {
    case "g":
        return this.type;
    case "m":
        return this.type + "." + this.B;
    case "w":
        return this.type + "." + this.name + this.B
    }
};
var ce = new Wd, Yd = window.navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/), $d = _.Ka(Rd, "_c", _.r()), ae = Math.random() < (_.P("csi/rate") || 0), Zd = function(a, c, f) {
    for (var g = new Wd(c, f), h = _.Ka($d, g.key(), _.r()), l = Qd[a] || [], n = 0; n < l.length; ++n) {
        var q = l[n], t = q[0], v = a, w = c, A = f, q = Vd(q[1], w, A), v = Vd(v, w, A);
        h[t] = q && v ? v - q : null
    }
    Pd[a] && ae && (be(ce), be(g))
}, de = function(a, c) {
    c = c || [];
    for (var f = [], g = 0; g < c.length; g++)
        f.push(a + c[g]);
    return f
}, Zo = function(a, c) {
    var f = [];
    f.push("l" + (_.P("isPlusUser") ? "1" : "0"));
    var g = "m" + (Yd ? "1" : "0");
    f.push(g);
    if ("m" == a.type)
        f.push("p" + a.B);
    else if ("w" == a.type) {
        var h = "n" + a.B;
        f.push(h);
        "0" == a.B && f.push(g + h)
    }
    f.push("u" + (_.P("isLoggedIn") ? "1" : "0"));
    return de(c ? "e" + c : "", f)
}, be = function(a) {
    var c = _.ta.__gapi_jstiming__;
    c.sn = ee[a.type];
    var f = new c.Timer(0), g;
    t: {
        switch (a.type) {
        case "g":
            g = "global";
            break t;
        case "m":
            g = a.B;
            break t;
        case "w":
            g = a.name;
            break t
        }
        g = void 0
    }
    f.name = g;
    g=!1;
    var h = a.key(), l = $d[h];
    f.tick("_start", null, 0);
    for (var n in l)
        f.tick(n, "_start", l[n]), g=!0;
    $d[h] = _.r();
    if (g) {
        n =
        [];
        g = _.P("lexps");
        n = n.concat(de("e", g));
        n = n.concat(Zo(a));
        for (h = 0; h < fe.length; h++)
            l = fe[h], 0 <= _.xd.call(g, l) && (n = n.concat(Zo(a, l)));
        n = de("abc_", n);
        c.report(f, {
            e: n.join(",")
        })
    }
};
Od("blt", "bs0", "bs1");
Od("psi", "ps0", "ps1");
Od("rpcqi", "rqe", "rqd");
Od("bsprt", "bsrt0", "bsrt1");
Od("bsrqt", "bsrt1", "bsrt2");
Od("bsrst", "bsrt2", "bsrt3");
Od("mli", "ml0", "ml1");
Od("mei", "me0", "me1", !0);
Od("wcdi", "wrs", "wcdi");
Od("wci", "wrs", "wdc");
Od("wdi", "wrs", "wrdi");
Od("wdt", "bs0", "wrdt");
Od("wri", "wrs", "wrri", !0);
Od("wrt", "bs0", "wrrt");
Od("wji", "wje0", "wje1", !0);
Od("wjli", "wjl0", "wjl1");
Od("whi", "wh0", "wh1", !0);
Od("wai", "waaf0", "waaf1", !0);
Od("wadi", "wrs", "waaf1", !0);
Od("wadt", "bs0", "waaf1", !0);
Od("wprt", "wrt0", "wrt1");
Od("wrqt", "wrt1", "wrt2");
Od("wrst", "wrt2", "wrt3", !0);
Od("fbprt", "fsrt0", "fsrt1");
Od("fbrqt", "fsrt1", "fsrt2");
Od("fbrst", "fsrt2", "fsrt3", !0);
Od("fdns", "fdns0", "fdns1");
Od("fcon", "fcon0", "fcon1");
Od("freq", "freq0", "freq1");
Od("frsp", "frsp0", "frsp1");
Od("fttfb", "fttfb0", "fttfb1");
Od("ftot", "ftot0", "ftot1", !0);
var fq = Rd.r;
if ("function" !== typeof fq) {
    for (var Xq; Xq = fq.shift();)
        Zd.apply(null, Xq);
    Rd.r = Zd
};
var Rt = ["div"], jC = "onload", zx=!0, cB=!0, gg = function(a) {
    return a
}, gC = null, Kg = function(a) {
    var c = _.P(a);
    return "undefined" !== typeof c ? c : _.P("gwidget/" + a)
}, gC = _.P(), ov, pv, Uj, En, Ft, It, Mt, Jt, St, tw, Ds, Lv, uv, vv, Cv, Tt, sw, Ev, Ut, eC, fC, hC, Fv;
_.P("gwidget");
var Bs = Kg("parsetags"), jC = "explicit" === Bs || "onload" === Bs ? Bs: jC, $t = Kg("google_analytics");
"undefined" !== typeof $t && (zx=!!$t);
var Du = Kg("data_layer");
"undefined" !== typeof Du && (cB=!!Du);
ov = function() {
    var a = this && this.Hh();
    a && (_.bb.drw = a)
};
pv = function() {
    _.bb.drw = null
};
Uj = function(a) {
    return function(c) {
        var f = a;
        "number" === typeof c ? f = c : "string" === typeof c && (f = c.indexOf("px"), - 1 != f && (c = c.substring(0, f)), f = (0, window.parseInt)(c, 10));
        return f
    }
};
En = function(a) {
    "string" === typeof a && (a = window[a]);
    return "function" === typeof a ? a : null
};
Ft = function() {
    return Kg("lang") || "en-US"
};
It = function(a) {
    if (!_.V.Cr("attach")) {
        var c = {}, f = _.V.Cr("inline"), g;
        for (g in f)
            f.hasOwnProperty(g) && (c[g] = f[g]);
        c.open = function(a) {
            var c = a.va().renderData.id, c = window.document.getElementById(c);
            if (!c)
                throw Error("o");
            return f.attach(a, c)
        };
        _.V.na("attach", c)
    }
    a.style = "attach"
};
Mt = function() {
    var a = {};
    a.width = [Uj(450)];
    a.height = [Uj(24)];
    a.onready = [En];
    a.lang = [Ft, "hl"];
    a.iloader = [function() {
        return _.bb.ILI
    }, "iloader"];
    return a
}();
Jt = function(a) {
    var c = {};
    c.Fb = a[0];
    c.Kj =- 1;
    c.tn = "___" + c.Fb + "_";
    c.Xs = "g:" + c.Fb;
    c.Wt = "g-" + c.Fb;
    c.Dm = [];
    c.config = {};
    c.jd = [];
    c.Rh = {};
    c.Ie = {};
    var f = function(a) {
        for (var f in a)
            if (_.Qa(a, f)) {
                c.config[f] = [En];
                c.jd.push(f);
                var g = a[f], q = null, t = null, v = null;
                "function" === typeof g ? q = g : g && "object" === typeof g && (q = g.Er, t = g.Kg, v = g.Qh);
                v && (c.jd.push(v), c.config[v] = [En], c.Rh[f] = v);
                q && (c.config[f] = [q]);
                t && (c.Ie[f] = t)
            }
    }, g = function(a) {
        for (var f = {}, g = 0; g < a.length; ++g)
            f[a[g].toLowerCase()] = 1;
        f[c.Xs] = 1;
        c.nr = f
    };
    a[1] && (c.Jr =
    a[1]);
    (function(a) {
        c.config = a;
        for (var f in Mt)
            Mt.hasOwnProperty(f)&&!c.config.hasOwnProperty(f) && (c.config[f] = Mt[f])
    })(a[2] || {});
    a[3] && f(a[3]);
    a[4] && g(a[4]);
    a[5] && (c.qe = a[5]);
    c.nu=!0 === a[6];
    c.Or = a[7];
    c.lM = a[8];
    c.nr || g(Rt);
    c.bj = function(a) {
        c.Kj++;
        _.Sd("wrs", c.Fb, String(c.Kj));
        var f = [], g = a.element, q = a.config, t = ":" + c.Fb;
        ":plus" == t && a.pe && a.pe.action && (t += "_" + a.pe.action);
        var v = St(c, q), w = {};
        _.Sl(_.Xu(), w);
        for (var A in a.pe)
            null != a.pe[A] && (w[A] = a.pe[A]);
        A = {
            container: g.id,
            renderData: a.Xr,
            style: "inline",
            height: q.height,
            width: q.width
        };
        It(A);
        c.qe && (f[2] = A, f[3] = w, f[4] = v, c.qe("i", f));
        t = _.V.open(t, A, w, v);
        (0, _.qv)(c, t, q, g, a.xp);
        f[5] = t;
        c.qe && c.qe("e", f)
    };
    return c
};
St = function(a, c) {
    for (var f = {}, g = a.jd.length - 1; 0 <= g; --g) {
        var h = a.jd[g], l = c[a.Rh[h] || h] || c[h], n = c[h];
        n && l !== n && (l = function(a, c) {
            return function(f) {
                c.apply(this, arguments);
                a.apply(this, arguments)
            }
        }(l, n));
        l && (f[h] = l)
    }
    for (var q in a.Ie)
        a.Ie.hasOwnProperty(q) && (f[q] = tw(f[q] || function() {}, a.Ie[q]));
    f.drefresh = ov;
    f.erefresh = pv;
    return f
};
tw = function(a, c) {
    return function(f) {
        var g = c(f);
        if (g) {
            var h = f.href || null;
            if (zx) {
                if (window._gat)
                    try {
                        var l = window._gat._getTrackerByName("~0");
                        l && "UA-XXXXX-X" != l._getAccount() ? l._trackSocial("Google", g, h) : window._gaq && window._gaq.push(["_trackSocial", "Google", g, h])
                    } catch (n) {}
                if (window.ga && window.ga.getAll)
                    try {
                        for (var q = window.ga.getAll(), l = 0; l < q.length; l++)
                            q[l].send("social", "Google", g, h)
                        } catch (t) {}
            }
            if (cB && window.dataLayer)
                try {
                    window.dataLayer.push({
                        event: "social",
                        socialNetwork: "Google",
                        socialAction: g,
                        socialTarget: h
                    })
                } catch (v) {}
        }
        a.call(this, f)
    }
};
_.qv = function(a, c, f, g, h) {
    Tt(c, f);
    Ut(c, g);
    sw(a, c, h);
    XF(a.Fb, a.Kj.toString(), c);
    (new Ds).Vx.Ep(a, c, f, g, h)
};
Ds = function() {
    if (!this.Vx) {
        for (var a = this.constructor; a&&!a.Ws;)
            a = a.T && a.T.constructor;
        a.Ws.UD || (a.Ws.UD = Fk(a));
        this.Vx = new a.Ws.UD(this);
        this.G || (this.G = Nn)
    }
};
_.Gs = function() {};
Lv = Ds;
_.Gs.T || _.J(_.Gs, Ak);
Lv.Ws = _.Gs;
_.Gs.prototype.Ep = function(a) {
    a = a ? a : function() {};
    a.AE=!0;
    return a
}();
uv = function(a) {
    return _.Rm && a instanceof _.Rm
};
vv = function(a) {
    return uv(a) ? "_renderstart" : "renderstart"
};
Cv = function(a) {
    return uv(a) ? "_ready" : "ready"
};
_.Dv = function() {
    return !0
};
Tt = function(a, c) {
    if (c.onready) {
        var f=!1, g = function() {
            f || (f=!0, c.onready.call(null))
        };
        a.register(Cv(a), g, _.Dv);
        a.register(vv(a), g, _.Dv)
    }
};
sw = function(a, c, f) {
    var g = a.Fb, h = String(a.Kj), l=!1, n = function() {
        l || (l=!0, f && _.Sd("wrdt", g, h), _.Sd("wrdi", g, h))
    };
    c.register(vv(c), n, _.Dv);
    var q=!1;
    a = function() {
        q || (q=!0, n(), f && _.Sd("wrrt", g, h), _.Sd("wrri", g, h))
    };
    c.register(Cv(c), a, _.Dv);
    uv(c) ? c.register("widget-interactive-" + c.id, a, _.Dv) : _.T.register("widget-interactive-" + c.id, a);
    _.T.register("widget-csi-tick-" + c.id, function(a, c, f) {
        "wdc" === a ? _.Sd("wdc", g, h, f) : "wje0" === a ? _.Sd("wje0", g, h, f) : "wje1" === a ? _.Sd("wje1", g, h, f) : "wh0" == a ? _.nf("wh0", g, h, f) : "wh1" ==
        a ? _.nf("wh1", g, h, f) : "wcdi" == a && _.nf("wcdi", g, h, f)
    })
};
Ev = function(a) {
    return "number" == typeof a ? a + "px" : "100%" == a ? a : null
};
Ut = function(a, c) {
    var f = function(f) {
        f = f || a;
        var h = Ev(f.width);
        h && c.style.width != h && (c.style.width = h);
        (f = Ev(f.height)) && c.style.height != f && (c.style.height = f)
    };
    uv(a) ? a.Vm("onRestyle", f) : (a.register("ready", f, _.Dv), a.register("renderstart", f, _.Dv), a.register("resize", f, _.Dv))
};
eC = function(a, c) {
    for (var f in Mt)
        if (Mt.hasOwnProperty(f)) {
            var g = Mt[f][1];
            g&&!c.hasOwnProperty(g) && (c[g] = a[g])
        }
    return c
};
fC = function(a, c) {
    var f = {}, g;
    for (g in a)
        a.hasOwnProperty(g) && (f[a[g][1] || g] = (a[g] && a[g][0] || gg)(c[g.toLowerCase()], c, gC));
    return f
};
hC = function(a) {
    if (a = a.Or)
        for (var c = 0; c < a.length; c++)(new window.Image)
            .src = a[c]
};
Fv = function(a, c) {
    var f = c.userParams, g = c.siteElement;
    g || (g = (g = c.iframeNode) && g.parentNode);
    if (g && 1 === g.nodeType) {
        var h = fC(a.config, f);
        a.Dm.push({
            element: g,
            config: h,
            pe: eC(h, fC(a.Jr, f)),
            Sg: 3,
            xp: !!f["data-onload"],
            Xr: c
        })
    }
    f = a.Dm;
    for (g = a.bj; 0 < f.length;)
        g(f.shift())
};
_.iC = function(a) {
    var c = Jt(a);
    hC(c);
    _.Sc(c.Fb, function(a) {
        Fv(c, a)
    });
    Bd[c.Fb]=!0;
    var f = {
        S: function(a, f) {
            var l = f || {};
            l.type = c.Fb;
            var n = l.type;
            delete l.type;
            var q = fv(a);
            if (q) {
                var t = {}, v;
                for (v in l)
                    _.Qa(l, v) && (t[v.toLowerCase()] = l[v]);
                t.rd = 1;
                (l=!!t.ri) && delete t.ri;
                Hd(n, q, t, [], 0, l)
            } else 
                _.kd("string" === "gapi." + n + ".render: missing element " + typeof a ? a : "")
        },
        go: function(a) {
            hv(a, c.Fb)
        },
        B: function() {
            var a = _.Ka(_.bb, "WI", _.r()), c;
            for (c in a)
                delete a[c]
        }
    };
    a = function() {
        "onload" === jC && f.go()
    };
    $u(c.Fb) || _.rh(a, a);
    _.e("gapi." + c.Fb + ".go", f.go);
    _.e("gapi." + c.Fb + ".render", f.S);
    return f
};
var Gv = Fv, Hv = function(a, c) {
    a.Kj++;
    _.Sd("wrs", a.Fb, String(a.Kj));
    var f = c.userParams, g = fC(a.config, f), h = [], l = c.iframeNode, n = c.siteElement, q = St(a, g), t = fC(a.Jr, f);
    _.Sl(_.Xu(), t);
    var t = eC(g, t), f=!!f["data-onload"], v = _.Sm, w = _.r();
    w.renderData = c;
    w.height = g.height;
    w.width = g.width;
    w.id = c.id;
    w.url = c.url;
    w.iframeEl = l;
    w.where = w.container = n;
    w.apis = ["_open"];
    w.messageHandlers = q;
    w.messageHandlersFilter = _.Vz;
    _.Ru(w);
    l = t;
    a.qe && (h[2] = w, h[3] = l, h[4] = q, a.qe("i", h));
    q = v.Pe(w);
    q.id = c.id;
    q.NA(q, w);
    (0, _.qv)(a, q, g, n, f);
    h[5] = q;
    a.qe && a.qe("e", h)
}, Fv = function(a, c) {
    var f = c.url;
    a.lM || _.Uu(f) ? _.jo ? Hv(a, c) : (0, _.At)("gapi.iframes.impl", function() {
        Hv(a, c)
    }) : _.V.open ? Gv(a, c) : (0, _.At)("iframes", function() {
        Gv(a, c)
    })
};
var XF;
_.Iv = function() {
    var a = window;
    return !!a.performance&&!!a.performance.getEntries
};
_.Jv = function(a) {
    var c = a.indexOf("#");
    - 1 != c && (a = a.substring(0, c));
    a = window.performance.getEntriesByName(a);
    if (1 > a.length)
        return null;
    a = a[0];
    return 0 == a.responseStart ? null : a
};
XF = function(a, c, f) {
    if (_.Iv()) {
        var g = function() {
            var a=!1;
            return function() {
                if (a)
                    return !0;
                a=!0;
                return !1
            }
        }(), h = function() {
            g() || window.setTimeout(function() {
                var g = _.Jv(f.rb().src);
                g && _.iv(a, c, Math.round(g.startTime), Math.round(g.requestStart), Math.round(g.responseStart), Math.round(g.responseEnd))
            }, 1E3)
        };
        f.register(vv(f), h, _.Dv);
        f.register(Cv(f), h, _.Dv)
    }
};
_.e("gapi.widget.make", _.iC);
var Sv, Rv, Tv, ZM, Vv, Wv, Xv, Yv, Zv, hw, lw, mw, nw, Es, ow, pw, zv, vw, ww, yw, Fs, Iw, Jw, Kw, Mw, Nw, Rw, MD, Pw, ND, Ow, Sw, rE, Tw, Uw, Vw, Ww, Zw, $w, ax, bx, cx, ex, fx, ix, gx, jx, kx, lx, ox;
_.fp.prototype.subscribe = _.d(26, function(a, c, f) {
    var g = this.G[a];
    g || (g = this.G[a] = []);
    var h = this.dl;
    this.B[h] = a;
    this.B[h + 1] = c;
    this.B[h + 2] = f;
    this.dl = h + 3;
    g.push(h);
    return h
});
_.lH.prototype.subscribe = _.d(25, function(a, c, f) {
    return this.B.subscribe(a.toString(), c, f)
});
_.Bt = function(a, c, f, g) {
    if (c = a.G[c]) {
        var h = a.B;
        (c = _.ue(c, function(a) {
            return h[a + 1] == f && h[a + 2] == g
        })) && a.zf(c)
    }
};
_.xW = function(a) {
    a.B.closeClickDetection=!0;
    return a
};
Sv = function(a) {
    var c = Rv;
    _.Nk(c, [{
        Rr: "-webkit-transform",
        duration: 1,
        timing: "ease",
        Le: 0
    }
    ]);
    _.Nk(c, [{
        Rr: "transform",
        duration: 1,
        timing: "ease",
        Le: 0
    }
    ]);
    _.Rn(function() {
        c.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
        c.style.transform = "translate3d(0px," + a + "px,0px)"
    }, 0)
};
ZM = function(a) {
    var c = _.ek(a);
    if (!c)
        return new _.dk("G_USERSTATE_");
    a = ["G_USERSTATE_", _.Yi && c.Gb ? "S": "H", c.Ke].join("");
    var f = _.Tj[a];
    f || (f = {
        Fr: 63072E3
    }, _.Sl(_.hk(c), f), f = new _.Vj(a, f), _.Tj[a] = f, c = f.Hd(), "undefined" !== typeof c && null !== c && (window.document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/", f.write(c)));
    return f
};
Vv = function(a) {
    a = a && a.id_token;
    if (!a ||!a.split(".")[1])
        return null;
    a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
    return _.Qn(_.mV(_.Ks(a, !0)))
};
Wv = function() {
    Rv.parentNode.removeChild(Rv)
};
Xv = function() {
    var a = Tv + 88;
    Sv(a);
    Tv = a
};
Yv = function() {
    var a = Tv - 88;
    Sv(a);
    Tv = a
};
Zv = function(a) {
    var c = ZM(a).Hd();
    a = _.r();
    if (c)
        for (var c = c.split(":"), f; f = c.shift();)
            f = f.split("="), a[f[0]] = f[1];
    return a
};
hw = function(a) {
    if (!a)
        return [];
    a = a.split("=");
    return a[1] ? a[1].split("|") : []
};
lw = function(a) {
    return (a = Vv(a)) ? a.sub : null
};
mw = function(a) {
    var c = a ? Xv: Yv, f = a ? Yv: Xv;
    a = a ? "-" : "";
    Tv = (0, window.parseInt)(a + 88, 10);
    Rv.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
    Rv.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
    Rv.style.display = "";
    Rv.style.visibility = "visible";
    c();
    _.Rn(f, 4E3);
    _.Rn(Wv, 5E3)
};
nw = function(a) {
    a = a.split(":");
    return {
        zC: a[0].split("=")[1],
        EL: hw(a[1]),
        DP: hw(a[2]),
        fP: hw(a[3])
    }
};
Es = function(a) {
    a = _.ek(a);
    if (!a || a.Gb&&!_.Yi)
        return null;
    var c = ["G_AUTHUSER_", _.Yi && a.Gb ? "S": "H", a.Ke].join(""), f = _.Pj[c];
    f || (f = new _.dj(c, _.hk(a)), _.Pj[c] = f);
    return f
};
ow = function(a) {
    var c = lw(a);
    c ? (a = Zv(a.cookie_policy), c = "0" == a[c] || "X" == a[c]) : c=!1;
    return c
};
pw = function(a) {
    var c = _.P("oauth-flow/toast/position");
    "top" !== c && (c = "bottom");
    var f = window.document.createElement("div");
    Rv = f;
    f.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
    var g;
    _.Mg(f, "visibility", "hidden");
    _.Mg(f, c, "-40px");
    _.Mg(f, "height", "128px");
    g = f;
    if ("desktop" == _.P("deviceType")) {
        g = window.document.createElement("div");
        g.style.cssText = "float:left;position:relative;left:50%;";
        f.appendChild(g);
        var h = window.document.createElement("div");
        h.style.cssText = "float:left;position:relative;left:-50%";
        g.appendChild(h);
        g = h
    }
    h = "top" == c ? "-" : "";
    Tv = (0, window.parseInt)(h + 88, 10);
    Rv.style.webkitTransform = "translate3d(0px," + h + 88 + "px,0px)";
    Rv.style.transform = "translate3d(0px," + h + 88 + "px,0px)";
    h = window;
    try {
        for (; h.parent != h && h.parent.document;)
            h = h.parent
    } catch (l) {}
    h = h.document.body;
    try {
        h.insertBefore(f, h.firstChild)
    } catch (n) {}
    _.Sm.cj({
        url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
        queryParams: {
            clientId: a.client_id,
            idToken: a.id_token
        },
        where: g,
        onRestyle: function() {
            "top" === c ? mw(!0) : mw(!1)
        }
    })
};
zv=!1;
vw=!1;
_.gz = function(a) {
    _.La(a) && _.wc(a)
};
yw = function(a) {
    var c, f = null;
    _.dj.iterate(function(a, g) {
        if (0 === a.indexOf("G_AUTHUSER_")) {
            var h = _.jj(a.substring(11));
            if (!c || h.Gb&&!c.Gb || h.Gb == c.Gb && h.Ke > c.Ke)
                c = h, f = g
        }
    });
    var g = a && _.fj(a);
    if (null !== f) {
        var h;
        _.dj.iterate(function(a, f) {
            var l = _.wj(a);
            l && l.uf && (g && l.ep != g || l.Gb == c.Gb && l.Ke == c.Ke && (h = f))
        });
        if (h) {
            var l = nw(h);
            a = l && l.EL[Number(f)];
            l = l && l.zC;
            if (a)
                return {
                    $t: f,
                    ZP: a,
                    zC: l
                }
        }
    }
    return null
};
Fs = function(a) {
    a = Es(a.g_user_cookie_policy);
    _.Fa("googleapis.config/sessionIndex", null);
    a.clear()
};
Iw = function(a) {
    return "true" === String(a.immediate)
};
Jw = function(a, c) {
    var f = null;
    if (a && c) {
        f = c.client_id = c.client_id || a.client_id;
        c.scope = c.scope || a.scope;
        c.g_user_cookie_policy = a.cookie_policy;
        c.cookie_policy = c.cookie_policy || a.cookie_policy;
        c.response_type = c.response_type || a.response_type;
        var g = _.P("iframes/signin/iframeType");
        !zv && c.error && Iw(a) && (_.gz("gapi.signin.impression." + g + "." + f), zv=!0)
    }
    c && (c.issued_at || (c.issued_at = String(_.Fn())), g = (0, window.parseInt)(c.expires_in, 10) || 86400, c.error && (g = _.P("oauth-flow/errorMaxAge") || 86400), c.expires_in =
    String(g), c.expires_at || (c.expires_at = String(_.Fn() + g)), a && Iw(a) || (c["g-oauth-window"] = (ww || {}).popup), c._aa || c.error || null != yw(f) ||!Iw(a) || (c._aa = "1"), f = c.status = {}, f.google_logged_in=!!c.session_state, g = f.signed_in=!!c.access_token, f.method = g ? c["g-oauth-window"] ? "PROMPT" : "AUTO" : null);
    return c
};
Kw = {};
_.Lw = function(a, c) {
    var f, g;
    "string" == typeof a ? (f = c, g = a) : (f = a, g = "token");
    if (f) {
        var h = _.jk(f, !0);
        if (h) {
            var l;
            if ((l = f) && l.session_state) {
                var n = [], q = [], t = [], v = (0, window.parseInt)(l.authuser, 10) || 0;
                n[v] = l.session_state;
                q[v] = l.issued_at;
                t[v] = l.expires_at;
                l = ["C=" + l.client_id, "S=" + n.join("|"), "I=" + q.join("|"), "X=" + t.join("|")].join(":")
            } else 
                l = null;
            l && h.Kc.write(l);
            "token" == g && (h = Es(f.g_user_cookie_policy)) && (f.error ? Fs(f) : f.session_state && h.write(f.authuser || "0"))
        }
    }
    if (g = "token" !== g ? _.ik(g) : _.jk(f))
        if (f) {
            if (g.Kc.write(f),
            !_.Wj || g.Fj && "token" !== _.Wj)
                _.Wj = g.key
        } else 
            g.Kc.clear(), _.Wj = null;
    _.kk(void 0, void 0)
};
Mw = function(a, c) {
    var f = c && c.key || "token", g = a = Jw(c && c.params, a);
    !ow(g) && 0 <= (" " + (g.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ") && _.P("isLoggedIn") && "1" === g._aa && (g._aa = "0", vw || (vw=!0, pw(g)));
    _.Lw(f, a);
    a = _.kk(f, void 0);
    if (c) {
        (f = c.iframe) && f.parentNode.removeChild(f);
        f = c.popup;
        g = c.after_redirect;
        if (f && "keep_open" != g)
            try {
                f.close()
            } catch (h) {}
        c.timeout && (window.clearTimeout(c.timeout), c.timeout = null);
        c.callback && (c.callback(a), c.callback = null)
    }
};
Nw = {};
Rw = function(a) {
    var c = _.wu;
    return function(f) {
        if (this.f == c && this.t == _.T.Wd(this.f) && this.origin == _.T.$d(this.f))
            return a.apply(this, arguments)
    }
};
MD = null;
Pw = [];
ND = function(a, c, f) {
    _.Uu() ? MD.register(a, f, _.Vz) : _.T.register(a + ":" + c, Rw(f))
};
Ow = {};
Sw = 0;
rE = function(a) {
    a && Pw.push(a);
    a = _.wu;
    var c = window.document.getElementById(a), f = (new Date).getTime();
    if (c) {
        if (Sw && 6E4 > f - Sw)
            return;
        c.parentNode.removeChild(c);
        if (/Firefox/.test(window.navigator.userAgent))
            try {
                window.frames[a] = void 0
        } catch (g) {}
        _.Au();
        a = _.wu
    }
    Sw = f;
    var h = String(2147483647 * (0, _.Vb)() | 0), c = _.P("oauth-flow/proxyUrl") || _.P("oauth-flow/relayUrl");
    if (_.Uu())
        MD = _.Sm.cj({
            where: _.R.Jk(),
            url: c,
            id: a,
            attributes: {
                style: {
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px"
                }
            },
            dontclear: !0
        });
    else {
        var c =
        [c, "?parent=", (0, window.encodeURIComponent)(_.Rb.Pq(window.location.href)), "#rpctoken=", h, "&forcesecure=1"].join(""), f = _.R.Jk(), l = _.R.Fh({
            name: a,
            id: a
        });
        l.src = c;
        l.style.width = "1px";
        l.style.height = "1px";
        l.style.position = "absolute";
        l.style.top = "-100px";
        l.tabIndex = "-1";
        f.appendChild(l);
        _.T.tf(a)
    }
    ND("oauth2relayReady", h, function() {
        _.Uu() ? MD.Jd("oauth2relayReady") : _.T.Jd("oauth2relayReady:" + h);
        var a = Pw;
        if (null !== a) {
            Pw = null;
            for (var c = 0, f = a.length; c < f; c++)
                a[c]()
        }
    });
    ND("oauth2callback", h, function(a) {
        var c =
        _.R.dc;
        a = c(a);
        var c = a.state, f;
        f = c.replace(/\|.*$/, "");
        a.state = {}.hasOwnProperty.call(Kw, f) ? Kw[f] : null;
        null != a.state && (f = Nw[c], delete Nw[c], Mw(a, f))
    })
};
Tw = function(a) {
    var c = {
        error: "user_signed_out"
    };
    c.client_id = a.client_id;
    c.g_user_cookie_policy = a.g_user_cookie_policy;
    c.scope = a.scope;
    c.response_type = a.response_type;
    c.session_state = a.session_state;
    return Jw(null, c)
};
Uw = function(a, c) {
    var f = a || {}, g;
    for (g in _.Qt)
        _.kf(f[g]) || (f[g] = _.Qt[g]);
    a = f;
    f = _.P("googleapis/overrideClientId");
    null != f && (a.client_id = f);
    if (!a.redirect_uri || "postmessage" === a.redirect_uri) {
        f = a;
        g = a.state || "";
        g = String(g);
        var h = "";
        if ({}.hasOwnProperty.call(Ow, g))
            h = Ow[g];
        else {
            for (var l = 2147483647 * (0, _.Vb)() | 0; ;) {
                h = String(l);
                if (!{}.hasOwnProperty.call(Kw, h))
                    break;
                l += (0, _.Vb)()
            }
            Kw[h] = g;
            Ow[g] = h
        }
        f.state = h + "|" + (0, _.Vb)();
        Nw[a.state] = c
    }
    f = a.authorize_uri || _.P("oauth-flow/authUrl");
    delete a.authorize_uri;
    f +=
    0 < f.indexOf("?") ? "&" : "?";
    f += _.ck(a);
    f = _.Xb(f);
    g = _.P("iframes/signin/iframeType");
    "blue" == g ? f += "&e=3100070" : "red" == g ? f += "&e=3100071" : "default" == g && (f += "&e=3100077");
    return f
};
Vw = function(a) {
    var c = _.Xu(), f = c && c.scope, c = a && a.scope, c = "string" === typeof c ? c.split(" "): c || [];
    if (f) {
        for (var f = f.split(" "), g = 0; g < f.length; ++g) {
            var h = f[g];
            - 1 == _.xd.call(c, h) && c.push(h)
        }
        0 < c.length && (a.scope = c.join(" "))
    }
    return a
};
Ww = function(a) {
    if (!_.kf(a.include_granted_scopes)) {
        var c = _.P("include_granted_scopes"), f = _.Xu().include_granted_scopes;
        _.kf(c) ? a.include_granted_scopes=!!c : _.kf(f) && (a.include_granted_scopes = "1" == f || "true" == f)
    }
    return a
};
_.Xw = function(a) {
    null === Pw ? a && a() : rE(a)
};
Zw = function(a, c, f, g) {
    var h = Zv(f), l = h[a];
    h[a] = c ? "0" : "1";
    var n = [];
    _.fb(h, function(a, c) {
        n.push(c + "=" + a)
    });
    c = n.join(":");
    f = ZM(f);
    c ? f.write(c) : f.clear();
    h[a] !== l && g && g()
};
$w = function(a, c) {
    for (var f = a.split(" "), g = c.split(" "), h = _.r(), l = 0, n = g.length; l < n; ++l)
        g[l] && (h[g[l]] = 1);
    l = 0;
    for (n = f.length; l < n; ++l)
        if (f[l]&&!h[f[l]])
            return !1;
    return !0
};
ax = function(a) {
    if (!a)
        return null;
    var c, f, g = _.fj(a);
    _.fk.iterate(function(a) {
        var l = _.wj(a);
        l && l.uf && l.ep === g && (!c || l.Gb&&!c.Gb || l.Gb == c.Gb && l.Ke > c.Ke) && (c = l, f = a)
    });
    return f
};
bx = function(a) {
    if (_.Uu()) {
        var c = _.Sm.cj({
            where: _.R.Jk(),
            url: a.uri,
            attributes: {
                style: {
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px"
                }
            },
            dontclear: !0
        });
        a.timeout = window.setTimeout(function() {
            c.close()
        }, 3E5)
    } else {
        var f = _.R.Jk(), c = _.R.Fh();
        c.src = a.uri;
        c.style.width = "1px";
        c.style.height = "1px";
        c.style.position = "absolute";
        c.style.top = "-100px";
        a.timeout = window.setTimeout(function() {
            c.parentNode && c.parentNode.removeChild(c)
        }, 3E5);
        f.appendChild(c)
    }
};
cx = function(a, c) {
    if (ww) {
        var f = ww.popup, g = ww.after_redirect;
        if (f && "keep_open" != g&&!Iw(a))
            try {
                f.close()
            } catch (h) {}
    }
    f = ww = {};
    "key"in a && (f.key = a.key, delete a.key);
    a = Ww(a);
    f.params = Vw(a);
    f.callback = function(f) {
        Iw(a) ||!f || f.error || Zw(lw(f), !1, f.cookie_policy);
        ow(f) && Iw(a) && (f = Tw(f));
        (c || function() {})(Jw(a, f))
    };
    f.uri = Uw(a, f);
    return f
};
_.dx = function(a, c) {
    _.Xw(function() {
        _.Uu() ? MD.send("check_session_state", {
            session_state: a.session_state,
            client_id: a.client_id
        }, function(a) {
            c.call(null, a[0])
        }, _.Vz) : _.T.call(_.wu, "check_session_state", Rw(function(a) {
            c.call(null, a)
        }), a.session_state, a.client_id)
    })
};
ex = function(a) {
    a = _.R.dc("#" + _.ck(a));
    if (!Iw(a))
        return null;
    var c = a.key || ax(a.client_id);
    return (c = _.kk(c, !0, !0)) && c.client_id === a.client_id && $w(a.scope, c.scope) && $w(a.response_type, c.response_type) ? c : null
};
fx = function(a, c) {
    var f = _.R.dc();
    a.hl = f.lang || f.hl || _.P("lang");
    var g = cx(a, c);
    a.after_redirect && (g.after_redirect = a.after_redirect);
    if (null != a.scope && null != a.client_id) {
        var h = function() {
            _.Xw(function() {
                if (g.popup)
                    g.popup.focus();
                else if (Iw(a))
                    bx(g);
                else {
                    var c = Math.min(_.P("oauth-flow/authWindowWidth", 650), window.screen.width - 20), f = Math.min(_.P("oauth-flow/authWindowHeight", 600), window.screen.height - 30);
                    ww.popup = window.open(g.uri, "_blank", ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no",
                    "width=" + c, "height=" + f, "top=" + (window.screen.height - f) / 2, "left=" + (window.screen.width - c) / 2].join())
                }
            })
        }, l = ex(a);
        !_.P("oauth-flow/disableOpt") && l ? _.dx(l, function(a) {
            a ? Mw(l, ww) : h()
        }) : h()
    } else 
        Mw(null, ww), _.kd("Unable to perform authorization: scope and/or client_idparameters missing.")
};
ix = function(a) {
    a || (a = _.kk(void 0, !0));
    a && "object" === typeof a || (a = {
        error: "invalid_request",
        error_description: "no callback data"
    });
    var c = a.error_description;
    c && window.console && (window.console.error(a.error), window.console.error(c));
    a.error || (_.bb.drw = null);
    _.Lw(a);
    if (c = a.authuser)
        _.P("googleapis.config/sessionIndex"), _.Fa("googleapis.config/sessionIndex", c);
    _.Bu.B.iu(_.mH.toString(), a);
    return a
};
gx = function(a, c) {
    var f = a || {}, g = c || function() {};
    if (_.P("oauth-flow/disableOpt") || _.P("isLoggedIn") ||!Iw(f))
        fx(f, g);
    else {
        var h = _.r();
        h.client_id = f.client_id;
        h.session_state = null;
        _.dx(h, function(a) {
            a ? (a = _.r(), a.error = "immediate_failed_user_logged_out", g(Jw(f, a))) : (_.Fa("isLoggedIn", !0), fx(f, g))
        })
    }
};
jx = function(a, c) {
    var f = lw(a);
    f && (Fs(a), Zw(f, !0, c, function() {
        ix && ix(Tw(a))
    }))
};
_.hx = function(a, c) {
    var f = new _.C(function(c, f) {
        var l = function(a) {
            null == a || a.error ? f(a) : c(a)
        };
        try {
            gx(a, l)
        } catch (n) {
            f(n)
        }
    });
    c && f.then(c, function(a) {
        c(ix(a))
    });
    return f
};
_.nH = function(a) {
    _.Kd && (_.Kd.error ? _.Kd.error(a) : _.Kd.log && _.Kd.log(a))
};
kx = _.Qj.Qe;
lx = null;
_.px = function(a, c) {
    if ("force" !== a.approvalprompt) {
        var f = _.nx(a);
        f.immediate=!0;
        delete f.redirect_uri;
        delete f.approval_prompt;
        var g;
        if (g=!c)
            lx ? (f.client_id !== lx.client_id && window.console && window.console.log && window.console.log("Ignoring mismatched page-level auth param client_id=" + f.client_id), g=!0) : (lx = f, g=!1);
        g || ox(f)
    }
};
_.nx = function(a) {
    var c = a.redirecturi || "postmessage", f = (0, _.Ge)((a.scope || "").replace(/[\s\xa0]+/g, " ")), c = {
        client_id: a.clientid,
        redirect_uri: c,
        response_type: "code token id_token gsession",
        scope: f
    };
    a.approvalprompt && (c.approval_prompt = a.approvalprompt);
    a.state && (c.state = a.state);
    a.openidrealm && (c["openid.realm"] = a.openidrealm);
    f = "offline" == a.accesstype?!0 : (f = a.redirecturi) && "postmessage" != f;
    f && (c.access_type = "offline");
    a.requestvisibleactions && (c.request_visible_actions = (0, _.Ge)(a.requestvisibleactions.replace(/[\s\xa0]+/g,
    " ")));
    a.after_redirect && (c.after_redirect = a.after_redirect);
    a.cookiepolicy && "none" !== a.cookiepolicy && (c.cookie_policy = a.cookiepolicy);
    "none" === a.cookiepolicy && _.gz("gapi.signin.cpnone");
    "undefined" != typeof a.includegrantedscopes && (c.include_granted_scopes = a.includegrantedscopes);
    a.e && (c.e = a.e);
    (a = a.authuser || _.P("googleapis.config/sessionIndex")) && (c.authuser = a);
    (a = _.P("useoriginassocialhost")) && (c.use_origin_as_socialhost = a);
    return c
};
ox = function(a) {
    _.nf("waaf0", "signin", "0");
    _.hx(a, function(a) {
        _.nf("waaf1", "signin", "0");
        ix(a)
    })
};
_.qx = function(a) {
    a = _.nx(a);
    _.Fa("oauth-flow/authWindowWidth", 445);
    _.Fa("oauth-flow/authWindowHeight", 615);
    ox(a)
};
_.rx = function(a) {
    _.Bt(_.Bu.B, _.mH.toString(), a, void 0);
    _.Bu.subscribe(_.mH, a)
};
var Kx, fw;
_.Ax = function(a) {
    return a.cookiepolicy?!0 : (_.sx("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."), !1)
};
_.sx = function(a) {
    window.console && (window.console.error ? window.console.error(a) : window.console.log && window.console.log(a))
};
_.Jx = function(a, c) {
    var f = _.Xu();
    _.Sl(a, f);
    f = Vw(f);
    if (_.Ax(f)) {
        var g = _.Gx(f);
        _.Hx(f);
        c ? _.Za(c, "click", function() {
            _.Ix(f, g)
        }) : _.Ix(f, g)
    }
};
_.Gx = function(a) {
    var c = new Kx;
    _.rx(function(f) {
        if (c.B && f && (f.access_token && _.Fa("isPlusUser", !0), f["g-oauth-window"]))
            if (c.B=!1, f.access_token && "consent" == f.prompt) {
                var g = f["g-oauth-window"];
                f = f.id_token;
                var h = a.apppackagename;
                if (h && g) {
                    var l=!0;
                    try {
                        l = g.closed
                    } catch (n) {}
                    l || (f = _.P("iframes/:socialhost:") + "/_/history/otaappinstall?clientId=" + (0, window.encodeURIComponent)(a.clientid) + "&appId=" + (0, window.encodeURIComponent)(h) + "&idToken=" + (0, window.encodeURIComponent)(f), f = _.Xb(f), g.location.href = f)
                }
            } else if (g =
            f["g-oauth-window"], a.apppackagename && g)
                try {
                    g.close()
        } catch (q) {}
    });
    return c
};
Kx = function() {
    this.B=!1
};
_.Hx = function(a) {
    a = _.Vx(a);
    _.uy(a.callback);
    _.Xw(function() {
        _.px(a)
    })
};
_.Vx = function(a) {
    fw(a);
    a.apppackagename && (a.after_redirect = "keep_open");
    a.redirecturi && delete a.redirecturi;
    _.Ve(function(c) {
        return a[c]
    }) || (a.authuser = 0);
    a.apppackagename && (a.apppackagename = a.apppackagename.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
    return a
};
fw = function(a) {
    /^\s*$/.test(a.scope || "") && (a.scope = "https://www.googleapis.com/auth/plus.login")
};
_.uy = function(a) {
    if ("string" === typeof a)
        if (window[a])
            a = window[a];
        else {
            _.sx('Callback function named "' + a + '" not found');
            return 
        }
    a && _.rx(a)
};
_.Ix = function(a, c) {
    c.B=!0;
    var f;
    f = _.Vx(a);
    _.qx(f)
};
_.e("gapi.auth.authorize", _.hx);
_.e("gapi.auth.checkSessionState", _.dx);
_.e("gapi.auth.getAuthHeaderValueForFirstParty", kx);
_.e("gapi.auth.getToken", function(a, c) {
    return _.kk(a, c)
});
_.e("gapi.auth.getVersionInfo", function(a, c) {
    _.Xw(function() {
        var f = _.Qj.Qe() || "", g = null, h = null;
        f && (h = f.split(" "), 2 == h.length && (g = h[1]));
        g ? _.Uu() ? MD.send("get_versioninfo", {
            xapisidHash: g,
            sessionIndex: c
        }, function(c) {
            a(c[0])
        }, _.Vz) : _.T.call(_.wu, "get_versioninfo", Rw(function(c) {
            a(c)
        }), g, c) : a()
    })
});
_.e("gapi.auth.init", _.Xw);
_.e("gapi.auth.setToken", _.Lw);
_.e("gapi.auth.signIn", function(a) {
    _.Jx(a)
});
_.e("gapi.auth.signOut", function() {
    var a = _.kk(void 0, void 0);
    a && jx(a, a.cookie_policy)
});
_.e("gapi.auth.unsafeUnpackIdToken", Vv);
_.e("gapi.auth._pimf", _.px);
_.e("gapi.auth._oart", pw);
_.e("gapi.auth._guss", function(a) {
    return ZM(a).Hd()
});
var fz = _.Xu();
fz.clientid && fz.scope && fz.cookiepolicy && _.gz("gapi.auth.pageLevelConfig(" + _.kb(fz).sort().join("-") + ")");
fz.clientid && fz.scope && fz.callback&&!_.P("disableRealtimeCallback") ? _.Hx(fz) : _.Xw();
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
_.In = function(a, c) {
    this.Ka = [];
    this.Ei = a;
    this.zt = c || null;
    this.M = this.G=!1;
    this.ha = void 0;
    this.ye = this.xu = this.Ld=!1;
    this.wc = 0;
    this.B = null;
    this.qa = 0
};
_.In.prototype.cancel = function(a) {
    if (this.G)
        this.ha instanceof _.In && this.ha.cancel();
    else {
        if (this.B) {
            var c = this.B;
            delete this.B;
            a ? c.cancel(a) : (c.qa--, 0 >= c.qa && c.cancel())
        }
        this.Ei ? this.Ei.call(this.zt, this) : this.ye=!0;
        this.G || this.bu(new _.nB)
    }
};
_.In.prototype.po = function(a, c) {
    this.Ld=!1;
    Jn(this, a, c)
};
var Jn = function(a, c, f) {
    a.G=!0;
    a.ha = f;
    a.M=!c;
    Kn(a)
}, xB = function(a) {
    if (a.G) {
        if (!a.ye)
            throw new Mn;
        a.ye=!1
    }
};
_.k = _.In.prototype;
_.k.Ga = function(a) {
    xB(this);
    Jn(this, !0, a)
};
_.k.bu = function(a) {
    xB(this);
    Jn(this, !1, a)
};
_.k.ea = function(a, c) {
    return this.Ep(a, null, c)
};
_.k.Ep = function(a, c, f) {
    this.Ka.push([a, c, f]);
    this.G && Kn(this);
    return this
};
_.k.then = function(a, c, f) {
    var g, h, l = new _.C(function(a, c) {
        g = a;
        h = c
    });
    this.Ep(g, function(a) {
        a instanceof _.nB ? l.cancel() : h(a)
    });
    return l.then(a, c, f)
};
_.Rp(_.In);
_.In.prototype.Kh = _.b(3);
var On = function(a) {
    return (0, _.Ee)(a.Ka, function(a) {
        return _.vd(a[1])
    })
}, Kn = function(a) {
    if (a.wc && a.G && On(a)) {
        var c = a.wc, f = yB[c];
        f && (_.D.clearTimeout(f.El), delete yB[c]);
        a.wc = 0
    }
    a.B && (a.B.qa--, delete a.B);
    for (var c = a.ha, g = f=!1; a.Ka.length&&!a.Ld;) {
        var h = a.Ka.shift(), l = h[0], n = h[1], h = h[2];
        if (l = a.M ? n : l)
            try {
                var q = l.call(h || a.zt, c);
                _.kf(q) && (a.M = a.M && (q == c || q instanceof Error), a.ha = c = q);
                _.Wp(c) && (g=!0, a.Ld=!0)
            } catch (t) {
            c = t, a.M=!0, On(a) || (f=!0)
        }
    }
    a.ha = c;
    g && (q = (0, _.H)(a.po, a, !0), g = (0, _.H)(a.po, a, !1), c instanceof
    _.In ? (c.Ep(q, g), c.xu=!0) : c.then(q, g));
    f && (c = new zB(c), yB[c.El] = c, a.wc = c.El)
}, Mn = function() {
    _.se.call(this)
};
_.J(Mn, _.se);
Mn.prototype.message = "Deferred has already fired";
Mn.prototype.name = "AlreadyCalledError";
_.nB = function() {
    _.se.call(this)
};
_.J(_.nB, _.se);
_.nB.prototype.message = "Deferred was canceled";
_.nB.prototype.name = "CanceledError";
var zB = function(a) {
    this.El = _.D.setTimeout((0, _.H)(this.G, this), 0);
    this.B = a
};
zB.prototype.G = function() {
    delete yB[this.El];
    throw this.B;
};
var yB = {};

_.Gp = function(a, c, f, g) {
    return _.ye.splice.apply(a, _.Ae(arguments, 1))
};
_.zh = function(a, c, f, g, h) {
    if (_.ea(c)) {
        for (var l = 0; l < c.length; l++)
            _.zh(a, c[l], f, g, h);
        return null
    }
    f = _.tl(f);
    return _.wB(a) ? a.li.add(String(c), f, !0, g, h) : _.qh(a, c, f, !0, g, h)
};
_.CM = function(a, c, f) {
    if (c in a)
        throw Error("p`" + c);
    a[c] = f
};
_.sA = function(a) {
    if (!_.ea(a))
        for (var c = a.length - 1; 0 <= c; c--)
            delete a[c];
    a.length = 0
};
_.Up = function(a) {
    a.ma = function() {
        return a.Tl ? a.Tl : a.Tl = new a
    }
};
_.bi = function(a) {
    _.dh.call(this);
    this.Ld = a;
    this.ha = {}
};
_.J(_.bi, _.dh);
var ei = [];
_.bi.prototype.Q = function(a, c, f, g) {
    return _.tr(this, a, c, f, g)
};
_.tr = function(a, c, f, g, h, l) {
    _.ea(f) || (f && (ei[0] = f.toString()), f = ei);
    for (var n = 0; n < f.length; n++) {
        var q = _.ph(c, f[n], g || a.handleEvent, h ||!1, l || a.Ld || a);
        if (!q)
            break;
        a.ha[q.key] = q
    }
    return a
};
_.bi.prototype.cb = function(a, c, f, g, h) {
    if (_.ea(c))
        for (var l = 0; l < c.length; l++)
            this.cb(a, c[l], f, g, h);
    else 
        f = f || this.handleEvent, h = h || this.Ld || this, f = _.tl(f), g=!!g, c = _.wB(a) ? _.ht(a.li, String(c), f, g, h) : a ? (a = _.zt(a)) ? _.ht(a, c, f, g, h) : null : null, c && (_.Ch(c), delete this.ha[c.key]);
    return this
};
_.di = function(a) {
    _.qf(a.ha, _.Ch);
    a.ha = {}
};
_.bi.prototype.C = function() {
    _.bi.T.C.call(this);
    _.di(this)
};
_.bi.prototype.handleEvent = function() {
    throw Error("v");
};

var bj, LA, lj, oj, sj, uj, tj, mj, vj, pj;
bj = function(a) {
    return _.ye.concat.apply(_.ye, arguments)
};
_.kD = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random())^(0, _.pa)()).toString(36)
};
_.cj = function(a, c) {
    var f;
    a instanceof _.cj ? (this.td = _.kf(c) ? c : a.td, _.KA(this, a.mc), _.ZN(this, a.Af), _.WP(this, a.Bb), _.gj(this, a.bx), this.setPath(a.getPath()), _.hj(this, a.B.clone()), this.G(a.ha())) : a && (f = _.Vi(String(a))) ? (this.td=!!c, _.KA(this, f[1] || "", !0), _.ZN(this, f[2] || "", !0), _.WP(this, f[3] || "", !0), _.gj(this, f[4]), this.setPath(f[5] || "", !0), _.hj(this, f[6] || "", !0), this.G(f[7] || "", !0)) : (this.td=!!c, this.B = new _.ij(null, 0, this.td))
};
_.k = _.cj.prototype;
_.k.mc = "";
_.k.Af = "";
_.k.Bb = "";
_.k.bx = null;
_.k.Ox = "";
_.k.Wh = "";
_.k.fn=!1;
_.k.td=!1;
_.k.toString = function() {
    var a = [], c = this.mc;
    c && a.push(lj(c, sj, !0), ":");
    if (c = this.Bb) {
        a.push("//");
        var f = this.Af;
        f && a.push(lj(f, sj, !0), "@");
        a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        c = this.bx;
        null != c && a.push(":", String(c))
    }
    if (c = this.getPath())
        this.Bb && "/" != c.charAt(0) && a.push("/"), a.push(lj(c, "/" == c.charAt(0) ? tj : uj, !0));
    (c = this.B.toString()) && a.push("?", c);
    (c = this.ha()) && a.push("#", lj(c, vj));
    return a.join("")
};
_.k.resolve = function(a) {
    var c = this.clone(), f=!!a.mc;
    f ? _.KA(c, a.mc) : f=!!a.Af;
    f ? _.ZN(c, a.Af) : f=!!a.Bb;
    f ? _.WP(c, a.Bb) : f = null != a.bx;
    var g = a.getPath();
    if (f)
        _.gj(c, a.bx);
    else if (f=!!a.Ox) {
        if ("/" != g.charAt(0))
            if (this.Bb&&!this.Ox)
                g = "/" + g;
            else {
                var h = c.getPath().lastIndexOf("/");
                - 1 != h && (g = c.getPath().substr(0, h + 1) + g)
            }
        h = g;
        if (".." == h || "." == h)
            g = "";
        else if ( - 1 != h.indexOf("./")||-1 != h.indexOf("/.")) {
            for (var g = _.jd(h, "/"), h = h.split("/"), l = [], n = 0; n < h.length;) {
                var q = h[n++];
                "." == q ? g && n == h.length && l.push("") : ".." == q ?
                ((1 < l.length || 1 == l.length && "" != l[0]) && l.pop(), g && n == h.length && l.push("")) : (l.push(q), g=!0)
            }
            g = l.join("/")
        } else 
            g = h
    }
    f ? c.setPath(g) : f = "" !== a.B.toString();
    f ? _.hj(c, LA(a.B.toString())) : f=!!a.Wh;
    f && c.G(a.ha());
    return c
};
_.k.clone = function() {
    return new _.cj(this)
};
_.KA = function(a, c, f) {
    _.GU(a);
    a.mc = f ? LA(c, !0) : c;
    a.mc && (a.mc = a.mc.replace(/:$/, ""));
    return a
};
_.ZN = function(a, c, f) {
    _.GU(a);
    a.Af = f ? LA(c) : c;
    return a
};
_.WP = function(a, c, f) {
    _.GU(a);
    a.Bb = f ? LA(c, !0) : c;
    return a
};
_.gj = function(a, c) {
    _.GU(a);
    if (c) {
        c = Number(c);
        if ((0, window.isNaN)(c) || 0 > c)
            throw Error("B`" + c);
        a.bx = c
    } else 
        a.bx = null;
    return a
};
_.cj.prototype.getPath = function() {
    return this.Ox
};
_.cj.prototype.setPath = function(a, c) {
    _.GU(this);
    this.Ox = c ? LA(a, !0) : a;
    return this
};
_.hj = function(a, c, f) {
    _.GU(a);
    c instanceof _.ij ? (a.B = c, kj(a.B, a.td)) : (f || (c = lj(c, mj)), a.B = new _.ij(c, 0, a.td));
    return a
};
_.cj.prototype.uj = function(a, c) {
    return _.hj(this, a, c)
};
_.cj.prototype.Sj = function() {
    return this.B.toString()
};
_.nj = function(a, c, f) {
    _.GU(a);
    a.B.set(c, f);
    return a
};
_.cj.prototype.Mh = function(a) {
    return this.B.get(a)
};
_.cj.prototype.ha = function() {
    return this.Wh
};
_.cj.prototype.G = function(a, c) {
    _.GU(this);
    this.Wh = c ? LA(a) : a;
    return this
};
_.GU = function(a) {
    if (a.fn)
        throw Error("C");
};
_.Kp = function(a) {
    return a instanceof _.cj ? a.clone() : new _.cj(a, void 0)
};
LA = function(a, c) {
    return a ? c ? (0, window.decodeURI)(a) : (0, window.decodeURIComponent)(a) : ""
};
lj = function(a, c, f) {
    return _.fa(a) ? (a = (0, window.encodeURI)(a).replace(c, oj), f && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
};
oj = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
};
sj = /[#\/\?@]/g;
uj = /[\#\?:]/g;
tj = /[\#\?]/g;
mj = /[\#\?@]/g;
vj = /#/g;
_.ij = function(a, c, f) {
    this.B = a || null;
    this.G=!!f
};
pj = function(a) {
    if (!a.xa && (a.xa = new _.Pi, a.jh = 0, a.B))
        for (var c = a.B.split("&"), f = 0; f < c.length; f++) {
            var g = c[f].indexOf("="), h = null, l = null;
            0 <= g ? (h = c[f].substring(0, g), l = c[f].substring(g + 1)) : h = c[f];
            h = (0, window.decodeURIComponent)(h.replace(/\+/g, " "));
            h = qj(a, h);
            a.add(h, l ? (0, window.decodeURIComponent)(l.replace(/\+/g, " ")) : "")
        }
};
_.k = _.ij.prototype;
_.k.xa = null;
_.k.jh = null;
_.k.Da = function() {
    pj(this);
    return this.jh
};
_.k.add = function(a, c) {
    pj(this);
    this.B = null;
    a = qj(this, a);
    var f = this.xa.get(a);
    f || this.xa.set(a, f = []);
    f.push(c);
    this.jh++;
    return this
};
_.k.remove = function(a) {
    pj(this);
    a = qj(this, a);
    return _.Ri(this.xa.G, a) ? (this.B = null, this.jh -= this.xa.get(a).length, this.xa.remove(a)) : !1
};
_.k.clear = function() {
    this.xa = this.B = null;
    this.jh = 0
};
_.k.isEmpty = function() {
    pj(this);
    return 0 == this.jh
};
var rj = function(a, c) {
    pj(a);
    c = qj(a, c);
    return _.Ri(a.xa.G, c)
};
_.k = _.ij.prototype;
_.k.zn = function(a) {
    var c = this.Va();
    return _.ve(c, a)
};
_.k.$b = function() {
    pj(this);
    for (var a = this.xa.Va(), c = this.xa.$b(), f = [], g = 0; g < c.length; g++)
        for (var h = a[g], l = 0; l < h.length; l++)
            f.push(c[g]);
    return f
};
_.k.Va = function(a) {
    pj(this);
    var c = [];
    if (_.fa(a))
        rj(this, a) && (c = bj(c, this.xa.get(qj(this, a))));
    else {
        a = this.xa.Va();
        for (var f = 0; f < a.length; f++)
            c = bj(c, a[f])
    }
    return c
};
_.k.set = function(a, c) {
    pj(this);
    this.B = null;
    a = qj(this, a);
    rj(this, a) && (this.jh -= this.xa.get(a).length);
    this.xa.set(a, [c]);
    this.jh++;
    return this
};
_.k.get = function(a, c) {
    var f = a ? this.Va(a): [];
    return 0 < f.length ? String(f[0]) : c
};
_.Nr = function(a, c, f) {
    a.remove(c);
    0 < f.length && (a.B = null, a.xa.set(qj(a, c), _.ze(f)), a.jh += f.length)
};
_.ij.prototype.toString = function() {
    if (this.B)
        return this.B;
    if (!this.xa)
        return "";
    for (var a = [], c = this.xa.$b(), f = 0; f < c.length; f++)
        for (var g = c[f], h = (0, window.encodeURIComponent)(String(g)), g = this.Va(g), l = 0; l < g.length; l++) {
            var n = h;
            "" !== g[l] && (n += "=" + (0, window.encodeURIComponent)(String(g[l])));
            a.push(n)
        }
    return this.B = a.join("&")
};
_.ij.prototype.clone = function() {
    var a = new _.ij;
    a.B = this.B;
    this.xa && (a.xa = this.xa.clone(), a.jh = this.jh);
    return a
};
var qj = function(a, c) {
    var f = String(c);
    a.G && (f = f.toLowerCase());
    return f
}, kj = function(a, c) {
    c&&!a.G && (pj(a), a.B = null, a.xa.forEach(function(a, c) {
        var h = c.toLowerCase();
        c != h && (this.remove(c), _.Nr(this, h, a))
    }, a));
    a.G = c
};
_.ij.prototype.extend = function(a) {
    for (var c = 0; c < arguments.length; c++)
        _.Oi(arguments[c], function(a, c) {
            this.add(c, a)
        }, this)
    };

var Fp;
Fp = function(a, c) {
    return a > c ? 1 : a < c?-1 : 0
};
_.TO = function(a) {
    var c = _.da(a);
    if ("object" == c || "array" == c) {
        if (a.clone)
            return a.clone();
        var c = "array" == c ? []: {}, f;
        for (f in a)
            c[f] = _.TO(a[f]);
        return c
    }
    return a
};
_.kB = function(a, c) {
    a.sort(c || Fp)
};
_.nu = {
    s: function(a, c, f) {
        return (0, window.isNaN)(f) || "" == f || a.length >= f ? a : a =- 1 < c.indexOf("-", 0) ? a + _.Gf(" ", f - a.length) : _.Gf(" ", f - a.length) + a
    },
    f: function(a, c, f, g, h) {
        g = a.toString();
        (0, window.isNaN)(h) || "" == h || (g = a.toFixed(h));
        var l;
        l = 0 > a ? "-" : 0 <= c.indexOf("+") ? "+" : 0 <= c.indexOf(" ") ? " " : "";
        0 <= a && (g = l + g);
        if ((0, window.isNaN)(f) || g.length >= f)
            return g;
        g = (0, window.isNaN)(h) ? Math.abs(a).toString() : Math.abs(a).toFixed(h);
        a = f - g.length - l.length;
        return g = 0 <= c.indexOf("-", 0) ? l + g + _.Gf(" ", a) : l + _.Gf(0 <= c.indexOf("0", 0) ? "0" : " ", a) + g
    },
    d: function(a, c, f, g, h, l, n, q) {
        return _.nu.f((0, window.parseInt)(a, 10), c, f, g, 0, l, n, q)
    }
};
_.nu.i = _.nu.d;
_.nu.u = _.nu.d;

var AU = function(a) {
    a = _.rf(a);
    _.qf(a, function(c, f) {
        _.Al(f) && (a[f] = c)
    });
    return a
}, kY = function(a, c) {
    if (null == c)
        return c;
    var f = String(c);
    f.match(/^\/\/.*/) && (f = ("http:" == window.location.protocol ? "http:" : "https:") + f);
    f.match(/^\/([^\/].*)?$/) && window.location.host && String(window.location.protocol).match(/^https?:$/) && (f = window.location.protocol + "//" + window.location.host + f);
    var g = f.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
    g && window.location.host && String(window.location.protocol).match(/^https?:$/) &&
    (f = g[1] + "//" + window.location.host + (g[3] || ""));
    f = f.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
    f = f.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
    f = f.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
    f.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) && (f = f.toLowerCase());
    g = _.P("client/rewrite");
    _.Vg(g) && Object.prototype.hasOwnProperty.call(g, f) ? f = String(g[f] || f) : (f = f.replace(/^(https?):\/\/www\.googleapis\.com$/, "$1://content.googleapis.com"), f = f.replace(/^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/,
    "$1://content-$2"), f.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) || (f = f.replace(/^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/, "$1://content-$2")));
    a && (g = _.P("client/firstPartyRewrite"), _.Vg(g) && Object.prototype.hasOwnProperty.call(g, f) ? f = String(g[f] || f) : (f = f.replace(/^(https?):\/\/content\.googleapis\.com$/, "$1://clients6.google.com"), f = f.replace(/^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/, "$1://$2-googleapis.$3.google.com"), f = f.replace(/^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/,
    "$1://$2.clients6.google.com")));
    return f
}, DU = {
    error: {
        code: - 1,
        message: "A network error occurred and the request could not be completed."
    }
}, $H = function(a) {
    return new _.C(function(c, f) {
        f(a)
    })
}, oG = function(a) {
    a = _.rf(a);
    _.fb(a, function(c, f) {
        _.ea(c) && (a[f] = c.join(", "))
    });
    return a
}, AY = function(a, c, f) {
    f || (f = _.P("googleapis.config/root"), c && (f = _.P("googleapis.config/root-1p") || f), f = String(f || ""));
    f = String(kY(c, f) || f);
    return a = _.ul(f, a)
}, zV = function(a, c, f, g) {
    _.Yn.call(this);
    this.Bd = a;
    this.Zc = c;
    this.Kb = f;
    this.Zb = g;
    this.wc = null
};
_.J(zV, _.Yn);
zV.prototype.then = function(a) {
    this.wc || (this.wc = (new _.C(function(a, f) {
        this.Q("error", (0, _.H)(function() {
            f(AV(this))
        }, this));
        this.Q("success", (0, _.H)(function() {
            a(AV(this))
        }, this));
        this.send(this.Bd, this.Zc, this.Kb, this.Zb)
    }, this)).then(function(a) {
        a.headers = AU(a.headers);
        return a
    }, function(a) {
        return a.status ? (a.headers = AU(a.headers), $H(a)) : $H({
            result: DU,
            body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
            headers: null,
            status: null,
            statusText: null
        })
    }));
    return this.wc.then.apply(this.wc, arguments)
};
var AV = function(a) {
    var c, f = a.getStatus(), g = _.KI(a);
    204 == f ? c=!1 : c = "" == a.Sk() ? (0, _.of)(g) : _.pA(a);
    for (var h = {}, l = a.getAllResponseHeaders().split("\r\n"), n = 0; n < l.length; n++)
        if (!_.im(l[n])) {
            var q;
            q = 2;
            for (var t = l[n].split(": "), v = []; 0 < q && t.length;)
                v.push(t.shift()), q--;
                t.length && v.push(t.join(": "));
                q = v;
                h[q[0]] = h[q[0]] ? h[q[0]] + (", " + q[1]) : q[1]
        }
    var w;
    try {
        w = 2 < _.iB(a) ? a.B.statusText : ""
    } catch (A) {
        w = ""
    }
    return {
        result: c,
        body: g,
        headers: h,
        status: f,
        statusText: w
    }
}, yH = function(a, c) {
    for (var f = _.re(c), g = f ? c : arguments,
    f = f ? 0 : 1; f < g.length && (a = a[g[f]], _.kf(a)); f++);
    return a
}, cO = function(a) {
    var c = a.params || _.r();
    a = _.rf(c.headers) || {};
    var f = c.httpMethod || "GET", g = String(c.url || ""), h = c.body || null, c = c.responseType || null, l = _.sE(a);
    delete a["X-Referer"];
    a = oG(a);
    a = new zV(g, f, h, a);
    a.Za = l;
    c && (a.M = c);
    return a
}, BV = function(a, c) {
    var f = a.params || _.r();
    f.url = f.path;
    var g = f.root, g = AY("/", _.sE(f.headers), g);
    g.match(/^(.*[^\/])?\/$/) && (g = g.substr(0, g.length - 1));
    f.root = g;
    a.params = f;
    _.Bk.Dd("makeHttpRequests", [a], c)
}, kC = {
    "'": "\\'"
},
mC = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, yO = function(a, c) {
    var f = function(a) {
        a = _.rf(a);
        delete a.result;
        a = {
            gapiRequest: {
                data: a
            }
        };
        c && c(a, (0, _.mf)(a))
    };
    cO(a).then(f, f)
}, aG = function(a) {
    return new _.C(function(c, f) {
        var g = function(a) {
            a && a.gapiRequest ? a = a.gapiRequest.data || a : f(a);
            a = {
                result: 204 != a.status && (0, _.of)(a.body),
                body: a.body,
                headers: a.headers || null,
                status: a.status || null,
                statusText: a.statusText || null
            };
            _.Em(a.status) ? c(a) : f(a)
        };
        try {
            BV(a,
            g)
        } catch (h) {
            f(h)
        }
    })
}, lP = function(a) {
    var c;
    c = (a = yH(a, "params", "headers")) && _.Vg(a) ? a : {};
    a = "chrome-extension" == (_.Vi(window.location.href)[1] || null);
    c = _.sE(c);
    var f=!0, g = _.Xn(_.fo);
    g && _.kf(g.withCredentials) || (f=!1);
    return !(a && c) && f
}, wY = function(a) {
    _.se.call(this, a)
};
_.J(wY, _.se);
wY.prototype.name = "gapi.client.Error";
var iG = function(a, c) {
    _.P("client/cors") && lP(a) ? yO(a, c) : BV(a, c)
}, bG = function(a) {
    if (!a ||!_.vd(a))
        throw new wY("Must provide a function.");
    this.ha = null;
    this.M = a
};
bG.prototype.then = function(a, c, f) {
    this.ha || (this.ha = this.M());
    return this.ha.then(a, c, f)
};
bG.prototype.vR = function(a) {
    this.ha || (this.ha = a)
};
var rC = function(a) {
    (0, window.isFinite)(a) && (a = String(a));
    return _.fa(a) ? /^\s*-?0x/i.test(a) ? (0, window.parseInt)(a, 16) : (0, window.parseInt)(a, 10) : window.NaN
}, sC = function(a) {
    a = String(a);
    if (a.quote)
        return a.quote();
    for (var c = ['"'], f = 0; f < a.length; f++) {
        var g = a.charAt(f), h = g.charCodeAt(0), l = f + 1, n;
        if (!(n = mC[g])) {
            if (!(31 < h && 127 > h))
                if (g in kC)
                    g = kC[g];
                else if (g in mC)
                    g = kC[g] = mC[g];
                else {
                    h = g;
                    n = g.charCodeAt(0);
                    if (31 < n && 127 > n)
                        h = g;
                    else {
                        if (256 > n) {
                            if (h = "\\x", 16 > n || 256 < n)
                                h += "0"
                        } else 
                            h = "\\u", 4096 > n && (h += "0");
                            h += n.toString(16).toUpperCase()
                        }
                        g = kC[g] = h
                }
            n = g
        }
        c[l] = n
    }
    c.push('"');
    return c.join("")
};
new _.Hh;
var DC = function(a) {
    this.B = {};
    for (var c = 0; c < a.length; c++) {
        var f = a[c];
        this.B[f.B] = f
    }
}, EC = function(a) {
    a = _.Li(a.B);
    _.kB(a, function(a, f) {
        return a.B - f.B
    });
    return a
};
var TC = function(a, c) {
    this.B = a;
    this.M = c.name;
    this.ha=!!c.TP;
    this.G = c.ua;
    this.qa = c.type
};
var jI = function() {
    this.Nl = {};
    this.G = this.bh().B;
    this.B = null
}, VC = function(a, c, f) {
    f = f || a;
    for (var g in a.Nl) {
        var h = Number(g);
        a.G[h] || c.call(f, h, a.Nl[g])
    }
};
_.k = jI.prototype;
_.k.bh = function() {
    var a = this.constructor;
    return a.FC || (a.FC = zE(a.eI))
};
_.k.has = function(a) {
    return null != this.Nl[a.B]
};
_.k.get = function(a, c) {
    var f = a.B, g = lD(this, f);
    return this.G[f].ha ? g[c || 0] : g
};
_.k.set = function(a, c) {
    dD(this, a.B, c)
};
_.k.add = function(a, c) {
    nv(this, a.B, c)
};
_.k.clear = function(a) {
    a = a.B;
    delete this.Nl[a];
    this.B && delete this.B[a]
};
_.k.equals = function(a) {
    if (!a || this.constructor != a.constructor)
        return !1;
    for (var c = EC(this.bh()), f = 0; f < c.length; f++) {
        var g = c[f], h = g.B;
        if (null != this.Nl[h] != (null != a.Nl[h]))
            return !1;
        if (null != this.Nl[h]) {
            var l = 11 == g.G || 10 == g.G, n = lD(this, h), h = lD(a, h);
            if (g.ha) {
                if (n.length != h.length)
                    return !1;
                for (g = 0; g < n.length; g++) {
                    var q = n[g], t = h[g];
                    if (l?!q.equals(t) : q != t)
                        return !1
                }
            } else if (l?!n.equals(h) : n != h)
                return !1
        }
    }
    return !0
};
var DD = function(a, c) {
    for (var f = EC(a.bh()), g = 0; g < f.length; g++) {
        var h = f[g], l = h.B;
        if (null != c.Nl[l]) {
            a.B && delete a.B[h.B];
            var n = 11 == h.G || 10 == h.G;
            if (h.ha)
                for (var h = lD(c, l) || [], q = 0; q < h.length; q++)
                    nv(a, l, n ? h[q].clone() : h[q]);
            else 
                h = lD(c, l), n ? (n = lD(a, l)) ? DD(n, h) : dD(a, l, h.clone()) : dD(a, l, h)
            }
    }
};
jI.prototype.clone = function() {
    var a = new this.constructor;
    a != this && (a.Nl = {}, a.B && (a.B = {}), DD(a, this));
    return a
};
var lD = function(a, c) {
    var f = a.Nl[c];
    return null == f ? null : f
}, dD = function(a, c, f) {
    a.Nl[c] = f;
    a.B && (a.B[c] = f)
}, nv = function(a, c, f) {
    a.Nl[c] || (a.Nl[c] = []);
    a.Nl[c].push(f);
    a.B && delete a.B[c]
}, zE = function(a) {
    var c = [], f;
    for (f in a)
        0 != f && c.push(new TC(f, a[f]));
    return new DC(c)
};
var OD = function() {
    jI.call(this)
}, CE;
_.J(OD, jI);
var TD = function() {
    jI.call(this)
}, GE;
_.J(TD, jI);
OD.prototype.bh = function() {
    CE || (CE = zE({
        0: {
            name: "Version",
            Nf: "buzz.channel.Version"
        },
        1: {
            name: "major_version",
            ua: 5,
            type: Number
        },
        2: {
            name: "minor_version",
            ua: 5,
            type: Number
        }
    }));
    return CE
};
OD.ctor = OD;
OD.ctor.bh = OD.prototype.bh;
TD.prototype.bh = function() {
    GE || (GE = zE({
        0: {
            name: "ProtocolVersion",
            Nf: "buzz.channel.ProtocolVersion"
        },
        1: {
            name: "version",
            ua: 11,
            type: OD
        }
    }));
    return GE
};
TD.ctor = TD;
TD.ctor.bh = TD.prototype.bh;
var DE = function() {};
var IE = function(a, c) {
    this.B=!!c
};
_.J(IE, DE);
var LE = function(a, c, f) {
    var g = EC(c.bh());
    (0, _.Be)(g, function(a) {
        if (c.has(a)) {
            var g;
            g = a.B;
            g = c.G[g].ha ? null != c.Nl[g] ? c.Nl[g].length : 0 : null != c.Nl[g] ? 1 : 0;
            for (var n = 0; n < g; ++n) {
                f.append(a.M);
                11 == a.G || 10 == a.G ? (f.append(" {"), ME(f), f.B += 2) : f.append(": ");
                NE(this, c.get(a, n), a, f);
                if (11 == a.G || 10 == a.G)
                    f.B -= 2, f.append("}");
                ME(f)
            }
        }
    }, a);
    VC(c, function(a, c) {
        OE(this, a, c, f)
    }, a)
}, OE = function(a, c, f, g) {
    if (null != f)
        if (_.ea(f))(0, _.Be)(f, function(a) {
            OE(this, c, a, g)
        }, a);
    else {
        if (_.Vg(f)) {
            g.append(c);
            g.append(" {");
            ME(g);
            g.B +=
            2;
            if (f instanceof jI)
                LE(a, f, g);
            else 
                for (var h in f) {
                    var l = rC(h);
                    OE(a, l, f[h], g)
                }
                g.B -= 2;
                g.append("}")
            } else 
                _.fa(f) && (f = sC(f)), g.append(c), g.append(": "), g.append(f.toString());
                ME(g)
        }
}, NE = function(a, c, f, g) {
    switch (f.G) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 13:
    case 6:
    case 7:
    case 8:
    case 15:
    case 16:
    case 17:
    case 18:
        g.append(c);
        break;
    case 12:
    case 9:
        c = sC(c.toString());
        g.append(c);
        break;
    case 14:
        if (!a.B) {
            var h=!1;
            _.qf(f.qa, function(a, f) {
                a == c && (g.append(f), h=!0)
            })
        }
        h&&!a.B || g.append(c.toString());
        break;
    case 10:
    case 11:
        LE(a,
        c, g)
    }
}, KE = function() {
    this.B = 0;
    this.G = [];
    this.ha=!0
};
KE.prototype.toString = function() {
    return this.G.join("")
};
KE.prototype.append = function(a) {
    if (this.ha) {
        for (var c = 0; c < this.B; ++c)
            this.G.push(" ");
        this.ha=!1
    }
    this.G.push(a.toString())
};
var ME = function(a) {
    a.G.push("\n");
    a.ha=!0
};
var hF = new IE;
jI.prototype.toString = function() {
    var a = new KE;
    LE(hF, this, a);
    return a.toString()
};
(function() {
    var a;
    return _.Hg ? (a = /Windows NT ([0-9.]+)/, (a = a.exec(_.We)) ? a[1] : "0") : _.Gg ? (a = /10[_.][0-9_.]+/, (a = a.exec(_.We)) ? a[0].replace(/_/g, ".") : "10") : _.Ui ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.We)) ? a[1] : "") : _.mk || _.sk ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.We)) ? a[1].replace(/_/g, ".") : "") : ""
})();
var gY = new TD, kZ = new OD;
dD(kZ, 1, 3);
dD(kZ, 2, 2);
dD(gY, 1, kZ);
var pZ = new OD;
dD(pZ, 1, 3);
dD(pZ, 2, 2);
var rZ = new OD;
dD(rZ, 1, 3);
dD(rZ, 2, 2);
var DF = function(a) {
    _.dh.call(this);
    this.Na = a || _.xf()
};
_.J(DF, _.dh);
DF.prototype.zF = 0;
DF.prototype.O = function() {
    return this.zF
};
DF.prototype.Aa = function() {
    return this.Na.Aa()
};
var EF = function(a, c) {
    DF.call(this, c);
    this.B = a;
    this.Ld = this.B.G().ppu;
    this.fb = this.B.G().lpu;
    this.Ka = []
}, FF, sG;
_.J(EF, DF);
_.k = EF.prototype;
_.k.sQ = 5;
_.k.zF = 4;
_.k.zD = 0;
_.k.CF=!1;
_.k.fo=!1;
_.k.iQ = null;
var tG = function(a) {
    return "googlexpc_" + a.B.name + "_msg"
}, QG = function(a) {
    return "googlexpc_" + a.B.name + "_ack"
}, bH = function(a) {
    try {
        if (!a.Ma() && a.B.M())
            return a.B.Ka().frames || {}
    } catch (c) {}
    return {}
};
EF.prototype.hQ = function() {
    if (!this.Ma() && this.B.M()) {
        if (!this.fo) {
            var a = tG(this);
            this.ha = cH(this, a);
            this.ye = this.Aa().frames[a];
            a = QG(this);
            this.G = cH(this, a);
            this.wc = this.Aa().frames[a];
            this.fo=!0
        }
        if (dH(this, tG(this)) && dH(this, QG(this)))
            this.xu = new eH(this, bH(this)[tG(this)], (0, _.H)(this.Za, this)), this.po = new eH(this, bH(this)[QG(this)], (0, _.H)(this.eb, this)), this.Ei();
        else {
            if (1 == this.B.ha()) {
                if (!(this.iQ || 0 < this.sQ--)) {
                    for (var c = 10, a = ""; 0 < c--;)
                        a += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                        Math.random()));
                    this.B.ye(a);
                    fH(this);
                    this.fo=!1;
                    this.iQ = cH(this, "googlexpc_reconnect_" + this.B.name)
                }
            } else if (0 == this.B.ha())
                for (var a = bH(this), f = a.length, g = 0; g < f; g++) {
                    try {
                        a[g] && a[g].name && (c = a[g].name)
                    } catch (h) {}
                    if (c) {
                        var l = c.split("_");
                        if (3 == l.length && "googlexpc" == l[0] && "reconnect" == l[1]) {
                            this.B.name = l[2];
                            fH(this);
                            this.fo=!1;
                            break
                        }
                    }
            }
            this.Aa().setTimeout((0, _.H)(this.hQ, this), 100)
        }
    }
};
var cH = function(a, c) {
    var f = window.document.createElement("iframe"), g = f.style;
    g.position = "absolute";
    g.top = "-10px";
    g.left = "10px";
    g.width = "1px";
    g.height = "1px";
    f.id = f.name = c;
    f.src = a.Ld + "#INITIAL";
    a.Aa().document.body.appendChild(f);
    return f
}, fH = function(a) {
    a.ha && (a.ha.parentNode.removeChild(a.ha), a.ha = null, a.ye = null);
    a.G && (a.G.parentNode.removeChild(a.G), a.G = null, a.wc = null)
}, dH = function(a, c) {
    try {
        var f = bH(a)[c];
        if (!f || 0 != f.location.href.indexOf(a.fb))
            return !1
        } catch (g) {
        return !1
    }
    return !0
};
EF.prototype.Ei = function() {
    var a = bH(this);
    a[QG(this)] && a[tG(this)] ? (this.ca = new gH(this.Ld, this.ye), this.qa = new gH(this.Ld, this.wc), this.Aa().setTimeout((0, _.H)(function() {
        this.ca.send("SETUP");
        this.CF=!0
    }, this), 100)) : (this.zt || (this.zt = (0, _.H)(this.Ei, this)), this.Aa().setTimeout(this.zt, 100))
};
var hH = function(a) {
    if (a.pa && a.Kb && (a.B.wc(), a.M)) {
        for (var c = 0, f; c < a.M.length; c++)
            f = a.M[c], a.B.qa(f.service, f.rQ);
        delete a.M
    }
};
EF.prototype.Za = function(a) {
    if ("SETUP" == a)
        this.qa && (this.qa.send("SETUP_ACK"), this.pa=!0, hH(this));
    else if (this.B.B() || this.pa) {
        var c = a.indexOf("|"), f = a.substring(0, c);
        a = a.substring(c + 1);
        c = f.indexOf(",");
        if ( - 1 == c) {
            var g;
            this.qa.send("ACK:" + f);
            iH(this, a)
        } else 
            g = f.substring(0, c), this.qa.send("ACK:" + g), f = f.substring(c + 1).split("/"), c = (0, window.parseInt)(f[0], 10), f = (0, window.parseInt)(f[1], 10), 1 == c && (this.Kh = []), this.Kh.push(a), c == f && (iH(this, this.Kh.join("")), delete this.Kh)
    }
};
EF.prototype.eb = function(a) {
    "SETUP_ACK" == a ? (this.CF=!1, this.Kb=!0, hH(this)) : this.B.B() && this.CF && (0, window.parseInt)(a.split(":")[1], 10) == this.zD && (this.CF=!1, jH(this))
};
var jH = function(a) {
    if (!a.CF && a.Ka.length) {
        var c = a.Ka.shift();
        ++a.zD;
        a.ca.send(a.zD + c);
        a.CF=!0
    }
}, iH = function(a, c) {
    var f = c.indexOf(":"), g = c.substr(0, f), f = c.substring(f + 1);
    a.B.B() ? a.B.qa(g, f) : (a.M || (a.M = [])).push({
        service: g,
        rQ: f
    })
};
EF.prototype.send = function(a, c) {
    var f = a + ":" + c;
    if (!_.W || 3800 >= c.length)
        this.Ka.push("|" + f);
    else 
        for (var g = c.length, h = Math.ceil(g / 3800), l = 0, n = 1; l < g;)
            this.Ka.push("," + n + "/" + h + "|" + f.substr(l, 3800)), n++, l += 3800;
    jH(this)
};
EF.prototype.C = function() {
    EF.T.C.call(this);
    var a = GF;
    _.xe(a, this.xu);
    _.xe(a, this.po);
    this.xu = this.po = null;
    _.Tf(this.ha);
    _.Tf(this.G);
    this.ye = this.wc = this.ha = this.G = null
};
var GF = [], HF = (0, _.H)(function() {
    var a = GF, c, f=!1;
    try {
        for (var g = 0; c = a[g]; g++)
            f = f || c.ym()
    } catch (h) {
        if (c.M.B.Ld(), !a.length)
            return 
    }
    a = (0, _.pa)();
    f && (FF = a);
    sG = window.setTimeout(HF, 1E3 > a - FF ? 10 : 100)
}, EF), kH = function() {
    FF = (0, _.pa)();
    sG && window.clearTimeout(sG);
    sG = window.setTimeout(HF, 10)
}, gH = function(a, c) {
    this.ha = a;
    this.G = c;
    this.B = 0
};
gH.prototype.send = function(a) {
    this.B=++this.B%2;
    a = this.ha + "#" + this.B + (0, window.encodeURIComponent)(a);
    try {
        _.ef ? this.G.location.href = a : this.G.location.replace(a)
    } catch (c) {}
    kH()
};
var eH = function(a, c, f) {
    this.M = a;
    this.G = c;
    this.ha = f;
    this.B = this.G.location.href.split("#")[0] + "#INITIAL";
    GF.push(this);
    kH()
};
eH.prototype.ym = function() {
    var a = this.G.location.href;
    if (a != this.B) {
        this.B = a;
        if (a = a.split("#")[1])
            a = a.substr(1), this.ha((0, window.decodeURIComponent)(a));
        return !0
    }
    return !1
};
var CX = function(a) {
    this.ha = a;
    this.M=!1;
    this.promise = {
        then: (0, _.H)(function(a, f, g) {
            this.M || (this.M=!0);
            this.G&&!this.B ? this.ha.resolve(this.G) : this.B&&!this.G && this.ha.reject(this.B);
            return this.ha.promise.then(a, f, g)
        }, this)
    }
};
CX.prototype.resolve = function(a) {
    this.M ? this.ha.resolve(a) : this.G || this.B || (this.G = a)
};
CX.prototype.reject = function(a) {
    this.M ? this.ha.reject(a) : this.G || this.B || (this.B = a)
};
var BH = function(a) {
    bG.call(this, BH.prototype.qa);
    if (!a || "object" != typeof a && "string" != typeof a)
        throw new wY("Invalid request parameters");
    var c;
    _.fa(a) ? c = {
        path: a
    } : c = a;
    if (!c.path)
        throw new wY('Missing required parameter: "path"');
    this.B = {
        path: c.path,
        method: c.method || "GET",
        params: c.params || {},
        headers: c.headers || {},
        body: c.body,
        root: c.root,
        responseType: c.responseType
    };
    this.G = c.EP || "auto"
};
_.J(BH, bG);
BH.prototype.eR = function() {
    return this.B
};
BH.prototype.fR = function() {
    var a = this.B, c = a.headers || {}, f = c, g = a.applicationName || null, h = a.clientName || null, l = a.clientVersion || null, l = l || "0.1", h = h || "google-api-javascript-client", n = [];
    g && (n.push(g), n.push(" "));
    n.push(h);
    l && (n.push("/"), n.push(l));
    f["X-JavaScript-User-Agent"] = n.join("");
    f = c["Content-Type"];
    a.body&&!f && (f = "application/json", c["Content-Type"] = f);
    "application/json" != f || a.params.alt || (a.params.alt = "json");
    (f = a.body || null) && _.Vg(f) && (a.body = (0, _.mf)(f));
    a.key = a.id;
    c = _.Bk.Md(c, void 0, this.G);
    f = _.sE(c);
    ym(c);
    (c = _.jm.key)&&!a.params.key && (a.params.key = c);
    (c = String(a.path || "").match(/^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i))&&!a.root && (a.root = String(c[1]), a.path = String(c[2] || "/"), a.path.match(/^\/_ah\/api(\/.*)?$/) && (a.root += "/_ah/api", a.path = a.path.substr(8)));
    c = a.params;
    g = _.Cl(a.path);
    h = String(_.P("googleapis.config/xd3") || "");
    18 <= h.length && "/static/proxy.html" == h.substring(h.length - 18) && (h = h.substring(0, h.length - 18));
    h || (h = "/");
    l = _.Cl(h);
    if (h != l)
        throw Error("ga");
    "/" != h.charAt(h.length -
    1) && (h += "/");
    g = _.ul(h, g);
    _.jr(g, "/") && (g = g.substring(0, g.length - 1));
    g = _.Zi(_.aj([g], c));
    a.path = g;
    a.root = kY(f, a.root);
    a.url = AY(a.path, f, a.root)
};
var Km = function(a) {
    a.fR();
    a = a.B;
    return {
        key: "gapiRequest",
        params: {
            id: a.id,
            key: a.key,
            url: a.url,
            path: a.path,
            httpMethod: a.method,
            body: a.body || "",
            headers: a.headers || {},
            urlParams: {},
            root: a.root,
            clientName: Am(),
            clientVersion: Cm()
        }
    }
};
BH.prototype.execute = function(a) {
    this.B.headers.Authorization || _.kk(void 0, void 0);
    var c = Km(this);
    iG(c, function(c, g) {
        var h = c;
        c.gapiRequest && (h = c.gapiRequest);
        h && h.data && (h = h.data);
        var h = h instanceof Array ? h[0]: h, l;
        if (204 != h.status && h.body)
            try {
                l = (0, _.of)(h.body)
        } catch (n) {}
        _.P("client/jsonpOverride") && (l = h);
        a && a(l, g)
    })
};
BH.prototype.qa = function() {
    var a = Km(this);
    return _.P("client/cors") && lP(a) ? cO(a) : aG(a)
};
var CH = /<response-(.*)>/, DH = /^application\/http(;.+$|$)/, wH = function(a, c) {
    if (!a ||!c ||!_.Qa(a, c = c.toLowerCase()))
        throw new wY("Unable to retrieve header.");
    return a[c]
}, MG = function(a, c) {
    for (var f = "batch" + String(Math.round(2147483647 * (0, _.Vb)())) + String(Math.round(2147483647 * (0, _.Vb)())), g = {
        path: "/batch",
        headers: {
            "Content-Type": "multipart/mixed; boundary=" + f
        },
        method: "POST"
    }, f = "--" + f, h = [], l = 0; l < a.length; l++)
        h.push(EH(a[l].request, a[l].id));
    g.body = [f, h.join("\r\n" + f + "\r\n"), f + "--"].join("\r\n") + "\r\n";
    g.root = c || null;
    return Dm(g)
}, EH = function(a, c) {
    var f = [], g = a.eR(), h = function(a, c) {
        _.fb(a, function(a, f) {
            c.push(f + ": " + a)
        })
    };
    h({
        "Content-Type": "application/http",
        "Content-Transfer-Encoding": "binary",
        "Content-ID": "<" + c + ">"
    }, f);
    f.push("");
    f.push(g.method + " " + g.path);
    h(g.headers, f);
    f.push("");
    g.body && f.push(g.body);
    return f.join("\r\n")
}, AH = function(a, c) {
    var f = zH(a, c), g = {};
    _.qf(f, function(a, c) {
        g[c] = {
            result: a.result || a.body,
            rawResult: (0, _.mf)({
                id: c,
                result: a.result || a.body
            }),
            id: c
        }
    });
    return g
}, zH = function(a,
c) {
    a = (0, _.Ge)(a);
    _.jr(a, "--") && (a = a.substring(0, a.length - 2));
    for (var f = a.split(c), g = _.r(), h = 0; h < f.length; h++)
        if (f[h]) {
            var l;
            if (l = f[h]) {
                _.jr(l, "\r\n") && (l = l.substring(0, l.length - 2));
                l = FH(l);
                var n = _.r(), q = wH(l.outerHeaders, "Content-Type");
                if (null == DH.exec(q))
                    throw new wY("Unexpected Content-Type");
                    q = wH(l.outerHeaders, "Content-Id");
                    q = CH.exec(q);
                    if (!q)
                        throw new wY("Unable to recognize Content-Id.");
                        n.id = q[1];
                        q = (0, _.of)(l.body);
                        n.response = {
                            result: q,
                            body: l.body,
                            status: l.status,
                            statusText: l.statusText,
                            headers: l.headers
                        };
                        l = n
            } else 
                l = null;
                l && l.id && (g[l.id] = l.response)
        }
    return g
}, FH = function(a) {
    if (!a)
        return null;
    a = a.split("\r\n");
    for (var c = 0, f = {
        headers: {},
        body: ""
    }, g = function(a) {
        var c = 0;
        _.fb(a, function() {
            c++
        });
        return c
    }; c < a.length && "" == a[c];)
        c++;
    f.outerHeaders = GH(a, c);
    var c = c + (g(f.outerHeaders) + 1), h = a[c++].split(" ");
    f.status = Number(h[1]);
    f.statusText = h[2];
    f.headers = GH(a, c);
    c += g(f.headers) + 1;
    f.body = a.slice(c).join("\r\n");
    return f
}, GH = function(a, c) {
    for (var f = _.r(), g = c; g < a.length && a[g]; g++) {
        var h = a[g].split(": "), l = (0, _.Ge)(h[0].toLowerCase()), h = (0, _.Ge)(h[1]);
        f[l] = h
    }
    return f
};
var gG = function(a) {
    bG.call(this, gG.prototype.qa);
    this.B = [];
    this.G = a;
    this.Ka=!!a
};
_.J(gG, bG);
var $F = function(a, c) {
    for (var f = 0; f < a.B.length; f++)
        if (a.B[f].id == c)
            return !0;
    return !1
};
gG.prototype.add = function(a, c) {
    var f = c || _.r(), g = _.r();
    if (a)
        g.request = a;
    else 
        throw new wY("Batch entry " + (_.Qa(f, "id") ? '"' + f.id + '" ' : "") + "is missing a request method");
    var h;
    h = _.Su();
    h = new CX(h);
    g.Ae = h;
    a.vR(g.Ae.promise);
    h = a.eR().root;
    if (!this.Ka) {
        if (h && this.G && h != this.G)
            throw new wY('The "root" provided in this request is not consistent with that of existing requests in the batch.');
        this.G = h || this.G
    }
    if (_.Qa(f, "id")) {
        h = f.id;
        if ($F(this, h))
            throw new wY('Batch ID "' + h + '" already in use, please use another.');
        g.id = h
    } else {
        do 
            g.id = String(Math.round(2147483647 * (0, _.Vb)()));
        while ($F(this, g.id))
        }
    g.Ga = f.callback;
    this.B.push(g);
    return g.id
};
gG.prototype.execute = function(a) {
    1 > this.B.length || (_.eb(this.B, function(a) {
        a.request.fR()
    }), a = hG(this, a), MG(this.B, this.G).execute(a))
};
gG.prototype.qa = function() {
    if (1 > this.B.length)
        return new _.C(function(a) {
            a({})
        });
    _.eb(this.B, function(a) {
        a.request.fR()
    });
    var a = MG(this.B, this.G), c = (0, _.H)(function(a) {
        sH(a);
        if (0 != wH(a.headers, "Content-Type").indexOf("multipart/mixed"))
            throw new wY("The response's Content-Type is not multipart/mixed.");
        var c = wH(a.headers, "Content-Type").split("boundary=")[1];
        if (!c)
            throw new wY("Boundary not indicated in response.");
        c = zH(a.body, "--" + c);
        a.result = c || {};
        for (var f = 0; f < this.B.length; f++) {
            var n = this.B[f],
            q = c[n.id];
            _.Em(q.status) ? n.Ae.resolve(q) : n.Ae.reject(q)
        }
        return a
    }, this), f = (0, _.H)(function(a) {
        for (var c = 0; c < this.B.length; c++)
            this.B[c].Ae.reject({
                result: {
                    error: {
                        code: 0,
                        message: "The batch request could not be fulfilled."
                    }
                },
                body: '{"error":{"code":0,"message":"The batch request could not befulfilled"}}',
                headers: null,
                status: null,
                statusText: null
            });
        throw a;
    }, this);
    return a.then(c, f)
};
var hG = function(a, c) {
    return (0, _.H)(function(a, g) {
        var h;
        h = a;
        if (g&&!h) {
            var l = (0, _.of)(g);
            l && (l.gapiRequest ? h = l.gapiRequest.data : h = l)
        }
        sH(h);
        if (h) {
            if (0 != wH(h.headers, "Content-Type").indexOf("multipart/mixed"))
                throw new wY("The response's Content-Type is not multipart/mixed.");
            if (200 <= h.status && 299 >= h.status) {
                var n = wH(h.headers, "Content-Type").split("boundary=")[1];
                if (!n)
                    throw new wY("Boundary not indicated in response.");
                n = AH(h.body, "--" + n);
                for (h = 0; h < this.B.length; h++)
                    if (l = this.B[h], delete n[l.id].rawResult, l.Ga) {
                        var q = (0, _.mf)(n[l.id]);
                        l.Ga(n[l.id] ||!1, q)
                    }
            }
            c && c(n || null, g)
        }
    }, a)
}, sH = function(a) {
    if (a && a.headers) {
        var c = _.r(), f;
        for (f in a.headers)
            c[f.toLowerCase()] = a.headers[f];
        a.headers = c
    }
};
var MF = ["appVersion", "platform", "userAgent"], Bm = {
    "google-api-javascript-client": !0,
    "google-api-gwt-client": !0
}, Im = {}, xm = function(a, c) {
    var f;
    return f = "/discovery/v1/apis/" + ((0, window.encodeURIComponent)(a) + "/" + (0, window.encodeURIComponent)(c) + "/rpc?fields=methods%2f*%2fid&pp=0")
}, NF = function(a, c) {
    var f;
    return f = "/discovery/v1/apis/" + ((0, window.encodeURIComponent)(a) + "/" + (0, window.encodeURIComponent)(c) + "/rest?fields=servicePath%2Cresources%2Cparameters%2Cmethods&pp=0")
}, ym = function(a) {
    if (a && window.navigator) {
        for (var c =
        [], f = 0; f < MF.length; f++) {
            var g = window.navigator[MF[f]];
            g && c.push((0, window.encodeURIComponent)(MF[f]) + "=" + (0, window.encodeURIComponent)(g))
        }
        a["X-ClientDetails"] = c.join("&")
    }
}, Am = function() {
    var a = _.P("client/name", "google-api-javascript-client");
    return a in Bm ? a : "google-api-javascript-client"
}, Cm = function() {
    return String(_.P("client/version", "1.1.0-beta"))
}, OF = function(a, c, f, g) {
    if (!a ||!c)
        throw new wY("Missing required parameters.");
    var h = f || function() {};
    Dm({
        path: xm(a, c),
        callback: function(a) {
            if (a.error)
                h(a);
            else {
                var f = null != a.rootUrl ? String(a.rootUrl): g, f = _.fa(f) ? f.replace(/([^\/])\/$/, "$1"): void 0, q;
                for (q in a)
                    if (a.hasOwnProperty(q) && "methods" == q) {
                        var t = a[q], v;
                        for (v in t)
                            if (t.hasOwnProperty(v)) {
                                SF(v, {
                                    root: f
                                }, void 0);
                                var w = {};
                                w[v] = c;
                                Hm(w)
                            }
                    }
                h.call(null)
            }
        },
        root: g
    })
}, QF = function(a, c, f, g) {
    function h(a) {
        function c(a) {
            _.fb(a, function(a) {
                PF(n, a, I, h)
            })
        }
        function f(a) {
            _.fb(a, function(a) {
                c(a.methods);
                (a = a.resources) && f(a)
            })
        }
        if (a.error)
            q(a);
        else {
            var h = _.rf(_.Vg(g) ? g : {}), l = h.root, l = null != a.rootUrl ? String(a.rootUrl):
            l, l = _.fa(l) ? l.replace(/([^\/])\/$/, "$1"): void 0;
            h.root = l;
            var n = a.servicePath, I = a.parameters;
            (l = a.resources) && f(l);
            (a = a.methods) && c(a);
            q.call()
        }
    }
    var l, n;
    _.Vg(a) ? (n = a, l = a.name, c = a.version) : l = a;
    if (!l ||!c)
        throw new wY("Missing required parameters.");
    var q = f || function() {};
    n ? h(n) : Dm({
        path: NF(l, c),
        callback: h,
        root: g && g.root
    })
}, Dm = function(a, c) {
    var f;
    "object" == typeof a && (f = a.callback, delete a.callback);
    var g;
    KW() ? g = new kX(a, c) : g = new BH(a);
    return f ? (g.execute(f), null) : g
}, RF = function(a, c) {
    c = _.rf(c);
    var f = function(a,
    c, f) {
        var g;
        if (a.hasOwnProperty(c))
            g = a[c], delete a[c];
        else if (f)
            throw new wY("Missing required parameters.");
        return g
    }, g = f(c, "servicePath", !0), h = String(f(c, "restPath", !0)), l = String(f(c, "httpMethod", !0)), n = f(c, "parameters");
    null != n ? n = _.rf(n) : n = null;
    var q = f(c, "parameterName");
    _.fa(q) || (q = null);
    f = f(c, "supportsSubscription");
    if (!h ||!l)
        throw new wY("Missing required parameters.");
    h = {
        id: a,
        path: h,
        parameters: n,
        httpMethod: l,
        request: {
            parameterName: q
        }
    };
    f && (h.supportsSubscription = f);
    PF(g, h, {
        path: {},
        query: {}
    },
    c)
}, SF = function(a, c, f) {
    if (!a)
        throw new wY("Missing required parameters");
    for (var g = a.split("."), h = window.gapi.client, l = 0; l < g.length - 1; l++) {
        var n = g[l];
        h[n] = h[n] || {};
        h = h[n]
    }
    g = g[g.length - 1];
    if (!h[g] || f) {
        var q = c || {};
        h[g] = function(c) {
            var f;
            "string" == typeof q ? f = q : f = q.root;
            c && c.root && (f = c.root);
            c = {
                method: a,
                apiVersion: q.apiVersion,
                rpcParams: c,
                transport: {
                    name: "googleapis",
                    root: f
                }
            };
            return KW() ? new kX(c, 2) : new Gm(c)
        }
    }
}, PF = function(a, c, f, g) {
    if (!(c && c.id && c.path && c.httpMethod))
        throw new wY("Missing required parameters");
    var h = c.id.split("."), l = window.gapi.client, n;
    for (n = 0; n < h.length - 1; n++) {
        var q = h[n];
        l[q] = l[q] || {};
        l = l[q]
    }
    q = window.gapi.client[h[0]];
    q.kB || (q.kB = {
        servicePath: a || "",
        parameters: f
    });
    a = h[n];
    if (!l[a]) {
        if (g && g.hasOwnProperty("root"))
            var t = g.root;
        l[a] = _.ma(lX, {
            path: _.fa(c.path) ? c.path: null,
            httpMethod: _.fa(c.httpMethod) ? c.httpMethod: null,
            parameters: c.parameters,
            parameterName: (c.request || {}).parameterName || "",
            request: c.request,
            root: t
        }, q.kB)
    }
}, lX = function(a, c, f, g) {
    var h = c.servicePath || "";
    _.jd(h, "/") || (h = "/" + h);
    f = WF(a.path, [a.parameters, c.parameters], f || {});
    c = f.pe;
    var l = f.hM, h = _.ul(h, f.path);
    f = l.root;
    delete l.root;
    var n = a.parameterName;
    !n && 1 == _.qA(l) && l.hasOwnProperty("resource") && (n = "resource");
    var q;
    n && (q = l[n], delete l[n]);
    null != q || (q = g);
    null == q && a.request && (_.Og(l) && (l = void 0), q = l);
    g = "complete" == _.P("client/rms") ? 0 : 1;
    l = {};
    n = a.httpMethod;
    "GET" == n && _.kf(q) && "" != String(q) && (l["X-HTTP-Method-Override"] = n, n = "POST");
    return Dm({
        path: h,
        method: n,
        params: c,
        headers: l,
        body: q,
        root: f || a.root
    }, g) || null
}, WF = function(a,
c, f) {
    f = _.rf(f);
    var g = {};
    _.eb(c, function(c) {
        _.fb(c, function(c, h) {
            var q = c.required;
            if ("path" == c.location)
                if (Object.prototype.hasOwnProperty.call(f, h)) - 1 != a.indexOf("{" + h + "}") ? (q = (0, window.encodeURIComponent)(String(f[h])), a = a.replace("{" + h + "}", q)): - 1 != a.indexOf("{+" + h + "}") && (q = (0, window.encodeURI)(String(f[h])), a = a.replace("{+" + h + "}", q)), delete f[h];
            else {
                if (q)
                    throw new wY("Required path parameter " + h + " is missing.");
            } else 
                "query" == c.location && Object.prototype.hasOwnProperty.call(f, h) && (g[h] = f[h], delete f[h])
        })
    });
    if (c = f.trace)
        g.trace = c, delete f.trace;
    return {
        path: a,
        pe: g,
        hM: f
    }
}, YF = function(a) {
    return KW() ? new mX(a, 0) : new gG(a)
}, Hm = function(a) {
    _.em(a);
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && (Im[c] = a[c])
};
_.gm(null);
var ZF = function(a) {
    var c = ["complete"], f = _.P("client/rms");
    if (_.ve(["rpcDeprecated", "migrated"], f))
        _.kd(a + " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs");
    else if (_.ve(c, f))
        throw new wY(a + " is discontinued.");
}, KW = function() {
    return "migrated" == _.P("client/rms")
};
var Lm = function() {
    this.B = [];
    this.ha = this.G = null
};
Lm.prototype.add = function(a, c) {
    var f = c || {}, g = {}, h = Object.prototype.hasOwnProperty;
    if (a)
        g.qf = a;
    else 
        throw new wY("Batch entry " + (h.call(f, "id") ? '"' + f.id + '" ' : "") + "is missing a request method");
    if (h.call(f, "id")) {
        for (var h = f.id, l = 0; l < this.B.length; l++)
            if (this.B[l].id == h)
                throw new wY('Batch ID "' + h + '" already in use, please use another.');
        g.id = h
    } else {
        do 
            g.id = String(2147483647 * (0, _.Vb)() | 0);
        while (h.call(this.B, g.id))
        }
    g.Ga = f.callback;
    this.B.push(g)
};
Lm.prototype.execute = function(a) {
    this.G = [];
    for (var c, f, g = 0; g < this.B.length; g++)
        c = this.B[g], f = c.qf, this.G.push(f.Vs(c.id)), this.ha = f.Ns() || this.ha;
    c = {};
    c = _.Bk.Md(c);
    ym(c);
    c = {
        requests: this.G,
        headers: c,
        root: this.ha,
        clientName: Am(),
        clientVersion: Cm(),
        urlParams: {
            key: _.jm.key
        }
    };
    _.Bk.Dd("makeRequest", c, Mm(this, a))
};
var Mm = function(a, c) {
    return function(f, g) {
        for (var h = 0; h < a.B.length; h++) {
            var l = a.B[h];
            l.Ga && l.Ga(f[l.id] ||!1, g)
        }
        c && c(f, g)
    }
};
var Gm = function(a) {
    if (!a || "object" != typeof a)
        throw new wY("Missing rpc parameters");
    if (!a.method)
        throw new wY("Missing rpc method");
    this.B = a
};
Gm.prototype.Ns = function() {
    var a = this.B.transport;
    return a ? a.root || null : null
};
Gm.prototype.execute = function(a) {
    var c = new Lm;
    c.add(this, {
        id: "gapiRpc",
        callback: Om(a)
    });
    c.execute()
};
Gm.prototype.Vs = function(a) {
    var c = this.B.method;
    a = {
        jsonrpc: "2.0",
        id: a,
        method: c,
        apiVersion: String(this.B.apiVersion || Im[c] || "v1")
    };
    (c = this.B.rpcParams) && (a.params = c);
    return a
};
var Om = function(a) {
    return function(c, f) {
        var g;
        c ? c.error ? (g = c.error, null == g.error && (g.error = _.rf(c.error))) : (g = c.result || c.data, _.Vg(g) && null == g.result && (g.result = _.rf(c.result || c.data))) : g=!1;
        a(g, f)
    }
};
var kX = function(a, c) {
    this.G = c || 0;
    if (2 == this.G) {
        var f = null;
        null != a && _.Vg(a) && (f = {
            method: a.method,
            rpcParams: a.rpcParams,
            transport: a.transport,
            root: a.root,
            apiVersion: a.apiVersion
        });
        this.B = new Gm(f)
    } else 
        0 == this.G && (f = a && a.callback) && (a.callback = oX(f)), f = null, null != a && (_.Vg(a) ? f = {
            path: a.path,
            method: a.method,
            params: a.params,
            headers: a.headers,
            body: a.body,
            root: a.root,
            responseType: a.responseType
        } : _.fa(a) && (f = a)), this.B = new BH(f)
}, oX = function(a) {
    return function(c) {
        var f;
        null != c && _.Vg(c) && c.error ? (f = oF(c),
        c = (0, _.mf)([{
            id: "gapiRpc",
            error: f
        }
        ]), f.error = _.TO(f)) : (null != c || (c = {}), f = _.TO(c), f.result = _.TO(c), c = (0, _.mf)([{
            id: "gapiRpc",
            result: c
        }
        ]));
        a(f, c)
    }
}, oF = function(a) {
    a = _.TO(a.error);
    return {
        code: a.code,
        data: a.errors,
        message: a.message
    }
};
_.k = kX.prototype;
_.k.execute = function(a) {
    var c;
    a && 1 == this.G ? c = oX(a) : c = a;
    this.B.execute(c)
};
_.k.then = function(a, c, f) {
    2 == this.G && pX('The "then" method is not available on this object.');
    return this.B.then(a, c, f)
};
_.k.vR = function(a) {
    this.B.vR && this.B.vR(a)
};
_.k.eR = function() {
    if (this.B.eR)
        return this.B.eR()
};
_.k.fR = function() {
    this.B.eR && this.B.fR()
};
_.k.Ns = function() {
    if (this.B.Ns)
        return this.B.Ns()
};
_.k.Vs = function(a) {
    if (this.B.Vs)
        return this.B.Vs(a)
};
var mX = function(a, c) {
    this.ha = a;
    this.B = c || null;
    this.G = null
};
mX.prototype.add = function(a, c) {
    null === this.B && (this.B = a.G, 2 == this.B ? this.G = new Lm : this.G = new gG(this.ha));
    this.B !== a.G && pX("Unable to add item to batch.");
    var f = c && c.callback;
    1 == this.B && f && (c.callback = function(a) {
        a = zF(a);
        var c = (0, _.mf)([a]);
        f(a, c)
    });
    this.G.add(a, c)
};
mX.prototype.execute = function(a) {
    var c;
    a && 1 == this.B ? c = function(c) {
        var g = [];
        _.fb(c, function(a, h) {
            a = zF(a);
            c[h] = a;
            g.push(a)
        });
        var h = (0, _.mf)(g);
        a(c, h)
    } : c = a;
    this.G && this.G.execute(c)
};
var zF = function(a) {
    var c = a ? yH(a, "result"): null;
    _.Vg(c) && null != c.error && (c = oF(c), a = {
        id: a.id,
        error: c
    });
    return a
};
mX.prototype.then = function(a, c, f) {
    2 == this.B && pX('The "then" method is not available on this object.');
    return this.G.then(a, c, f)
};
var pX = function(a) {
    throw Error("K`" + a);
};
_.e("gapi.client.load", function(a, c, f, g) {
    function h(f) {
        var g = "migrated" == q || "complete" == q;
        _.Vg(a) && (g = "discovery#rpcDescription" != a.kind);
        g ? QF(a, c, f, n) : _.fa(a) && OF(a, c, f, l)
    }
    var l = _.Vg(g) ? g.root: g, n = _.Vg(g) ? g: {
        root: l
    }, q = _.P("client/rms");
    if (f)
        h(f);
    else 
        return new _.C(function(a, c) {
            try {
                h(a)
            } catch (f) {
                c(f)
            }
        })
});
_.e("gapi.client.newBatch", function(a) {
    return KW() ? new mX(a) : "complete" == _.P("client/rms") ? YF(a) : new Lm
});
_.e("gapi.client.newRpcBatch", function() {
    ZF("gapi.client.newRpcBatch");
    return KW() ? new mX : new Lm
});
_.e("gapi.client.newHttpBatch", YF);
_.e("gapi.client.register", function(a, c) {
    if ("complete" == _.P("client/rms"))
        RF(a, c);
    else {
        var f;
        c && (f = {
            apiVersion: c.apiVersion,
            root: c.root
        });
        SF(a, f)
    }
});
_.e("gapi.client.request", Dm);
_.e("gapi.client.rpcRequest", function(a, c, f) {
    ZF("gapi.client.rpcRequest");
    if (!a)
        throw new wY('Missing required parameter "method".');
    a = {
        method: a,
        apiVersion: c,
        rpcParams: f,
        transport: {
            name: "googleapis",
            root: f && f.root || ""
        }
    };
    return KW() ? new kX(a, 2) : new Gm(a)
});
_.e("gapi.client.setApiKey", _.gm);
_.e("gapi.client.setApiVersions", Hm);
_.e("gapi.client.AuthType", {
    LH: "auto",
    NONE: "none",
    CP: "oauth2",
    NH: "1p"
});
_.e("gapi.client.AuthType.AUTO", "auto");
_.e("gapi.client.AuthType.NONE", "none");
_.e("gapi.client.AuthType.OAUTH2", "oauth2");
_.e("gapi.client.AuthType.FIRST_PARTY", "1p");

_.e("gapi.plusone.render", _.pG);
_.e("gapi.plusone.go", _.qG);
var od, qd, sd, rd;
od = function(a, c) {
    if ("string" == typeof a) {
        a = a.toLowerCase();
        var f;
        for (f = 0; f < c.length; f++)
            if (c[f] == a)
                return a
    }
};
qd = "inline bubble none only pp vertical-bubble".split(" ");
sd = ["left", "right"];
_.pd = function(a) {
    return od(a, qd)
};
rd = function(a) {
    return od(a, sd)
};
_.td = function(a) {
    a.source = [null, "source"];
    a.expandTo = [null, "expandTo"];
    a.align = [rd];
    a.annotation = [_.pd];
    a.origin = [_.md]
};

_.V.qj("bubble", function(a) {
    (0, _.At)("iframes-styles-bubble", a)
});
_.V.qj("slide-menu", function(a) {
    (0, _.At)("iframes-styles-slide-menu", a)
});
var dd = {
    tall: {
        "true": {
            width: 50,
            height: 60
        },
        "false": {
            width: 50,
            height: 24
        }
    },
    small: {
        "false": {
            width: 24,
            height: 15
        },
        "true": {
            width: 70,
            height: 15
        }
    },
    medium: {
        "false": {
            width: 32,
            height: 20
        },
        "true": {
            width: 90,
            height: 20
        }
    },
    standard: {
        "false": {
            width: 38,
            height: 24
        },
        "true": {
            width: 106,
            height: 24
        }
    }
}, cd = function(a) {
    return "string" == typeof a && dd[a.toLowerCase()] ? a.toLowerCase() : "standard"
}, $c = function(a) {
    return "string" == typeof a ? "" != a && "0" != a && "false" != a.toLowerCase() : !!a
}, ed = function(a, c) {
    return "tall" == cd(c) ? "true" : null == a || $c(a) ?
    "true" : "false"
}, bd = function(a) {
    if ($c(a))
        return "true"
}, ad = function(a) {
    var c = (0, window.parseInt)(a, 10);
    if (c == a)
        return String(c)
}, xv = {
    width: 180,
    height: 35
}, hd = {
    href: [_.Zc, "url"],
    width: [ad],
    size: [cd],
    resize: [bd],
    autosize: [bd],
    count: [function(a, c) {
        return ed(c.count, c.size)
    }
    ],
    db: [_.fd],
    ecp: [_.gd],
    textcolor: [function(a) {
        if ("string" == typeof a && a.match(/^[0-9A-F]{6}$/i))
            return a
    }
    ],
    drm: [bd],
    recommendations: [],
    fu: [],
    ad: [bd],
    cr: [ad],
    ag: [ad],
    "fr-ai": [],
    "fr-sigh": []
}, wv = function(a, c, f) {
    a = _.pd(a);
    c = cd(c);
    if ("" !=
    a) {
        if ("inline" == a || "only" == a)
            return a = 450, f.width && (a = 120 < f.width ? f.width : 120), {
                width: a,
                height: dd[c]["false"].height
            };
        if ("bubble" != a) {
            if ("none" == a)
                return dd[c]["false"];
            if ("pp" == a)
                return xv
        }
    }
    return dd[c]["true"]
}, gO = function(a, c) {
    return dd[cd(a)][ed(c, a)]
};
(function() {
    var a = {
        0: "plusone"
    }, c = _.P("iframes/plusone/preloadUrl");
    c && (a[7] = c);
    _.td(hd);
    a[1] = hd;
    a[2] = {
        width: [function(a, c) {
            return c.annotation ? wv(c.annotation, c.size, c).width : gO(c.size, c.count).width
        }
        ],
        height: [function(a, c) {
            return c.annotation ? wv(c.annotation, c.size, c).height : gO(c.size, c.count).height
        }
        ]
    };
    a[3] = {
        onPlusOne: {
            Kg: function(a) {
                return "on" == a.state ? "+1" : null
            },
            Qh: "callback"
        },
        onstartinteraction: !0,
        onendinteraction: !0,
        onpopup: !0
    };
    a[4] = ["div", "button"];
    a = _.iC(a);
    _.qG = a.go;
    _.pG = a.S
})();

});
// Google Inc.

