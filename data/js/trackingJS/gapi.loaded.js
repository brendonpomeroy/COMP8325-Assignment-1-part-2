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

_.Xj = window.googleapis && window.googleapis.server || {};
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
t:
{
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

_.ih = [];
_.kh = [];
_.jh=!1;
_.hh = function(a) {
    _.ih[_.ih.length] = a;
    if (_.jh)
        for (var c = 0; c < _.kh.length; c++)
            a((0, _.H)(_.kh[c].wrap, _.kh[c]))
};
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

var Qg, Tg, Sg, Rg, Wg;
_.Eg = function(a) {
    return "rtl" == _.ng(a, "direction")
};
_.Pg = function(a, c, f, g) {
    this.top = a;
    this.right = c;
    this.bottom = f;
    this.left = g
};
_.k = _.Pg.prototype;
_.k.Ne = function() {
    return this.right - this.left
};
_.k.Cd = function() {
    return this.bottom - this.top
};
_.k.clone = function() {
    return new _.Pg(this.top, this.right, this.bottom, this.left)
};
_.k.contains = function(a) {
    return this && a ? "undefined" != typeof _.Pg && a instanceof _.Pg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
_.k.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
_.k.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
_.k.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
_.k.translate = function(a, c) {
    a instanceof _.X ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, _.qe(c) && (this.top += c, this.bottom += c));
    return this
};
Qg = function(a, c) {
    if (/^\d+px?$/.test(c))
        return (0, window.parseInt)(c, 10);
    var f = a.style.left, g = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = c;
    var h = a.style.pixelLeft;
    a.style.left = f;
    a.runtimeStyle.left = g;
    return h
};
Tg = function(a, c) {
    var f = _.mg(a, c);
    return f ? Qg(a, f) : 0
};
Sg = {
    thin: 2,
    medium: 4,
    thick: 6
};
_.GG = function(a, c) {
    if (_.W) {
        var f = Tg(a, c + "Left"), g = Tg(a, c + "Right"), h = Tg(a, c + "Top"), l = Tg(a, c + "Bottom");
        return new _.Pg(h, g, l, f)
    }
    f = _.lg(a, c + "Left");
    g = _.lg(a, c + "Right");
    h = _.lg(a, c + "Top");
    l = _.lg(a, c + "Bottom");
    return new _.Pg((0, window.parseFloat)(h), (0, window.parseFloat)(g), (0, window.parseFloat)(l), (0, window.parseFloat)(f))
};
Rg = function(a, c) {
    if ("none" == _.mg(a, c + "Style"))
        return 0;
    var f = _.mg(a, c + "Width");
    return f in Sg ? Sg[f] : Qg(a, f)
};
Wg = function(a, c) {
    return new _.X(a.x - c.x, a.y - c.y)
};
_.Ig = function(a, c, f, g) {
    this.left = a;
    this.top = c;
    this.width = f;
    this.height = g
};
_.Ig.prototype.clone = function() {
    return new _.Ig(this.left, this.top, this.width, this.height)
};
_.Mh = function(a) {
    return new _.Pg(a.top, a.left + a.width, a.top + a.height, a.left)
};
_.k = _.Ig.prototype;
_.k.contains = function(a) {
    return "undefined" != typeof _.Ig && a instanceof _.Ig ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
_.k.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
_.k.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
_.k.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
_.k.translate = function(a, c) {
    a instanceof _.X ? (this.left += a.x, this.top += a.y) : (this.left += a, _.qe(c) && (this.top += c));
    return this
};
_.Ns = function(a) {
    return _.GG(a, "padding")
};
_.Ug = function(a) {
    if (_.W&&!_.Te(9)) {
        var c = Rg(a, "borderLeft"), f = Rg(a, "borderRight"), g = Rg(a, "borderTop");
        a = Rg(a, "borderBottom");
        return new _.Pg(g, f, a, c)
    }
    c = _.lg(a, "borderLeftWidth");
    f = _.lg(a, "borderRightWidth");
    g = _.lg(a, "borderTopWidth");
    a = _.lg(a, "borderBottomWidth");
    return new _.Pg((0, window.parseFloat)(g), (0, window.parseFloat)(f), (0, window.parseFloat)(a), (0, window.parseFloat)(c))
};
_.JG = function(a, c) {
    return (c & 4 && _.Eg(a) ? c^2 : c)&-5
};
_.Zg = function(a, c, f) {
    var g, h = _.df && (_.Gg || _.wk) && _.sl("1.9");
    c instanceof _.X ? (g = c.x, c = c.y) : (g = c, c = f);
    a.style.left = _.xg(g, h);
    a.style.top = _.xg(c, h)
};
_.Yg = function(a) {
    for (var c = new _.Pg(0, window.Infinity, window.Infinity, 0), f = _.xf(a), g = f.B.body, h = f.B.documentElement, l = _.Kf(f.B); a = _.rg(a);)
        if (!(_.W && 0 == a.clientWidth || _.ef && 0 == a.clientHeight && a == g) && a != g && a != h && "visible" != _.ng(a, "overflow")) {
            var n = _.sg(a), q;
            q = a;
            if (_.df&&!_.sl("1.9")) {
                var t = (0, window.parseFloat)(_.lg(q, "borderLeftWidth"));
                if (_.Eg(q))
                    var v = q.offsetWidth - q.clientWidth - t - (0, window.parseFloat)(_.lg(q, "borderRightWidth")), t = t + v;
                    q = new _.X(t, (0, window.parseFloat)(_.lg(q, "borderTopWidth")))
                } else 
                    q =
                    new _.X(q.clientLeft, q.clientTop);
                    n.x += q.x;
                    n.y += q.y;
                    c.top = Math.max(c.top, n.y);
                    c.right = Math.min(c.right, n.x + a.clientWidth);
                    c.bottom = Math.min(c.bottom, n.y + a.clientHeight);
                    c.left = Math.max(c.left, n.x)
        }
    g = l.scrollLeft;
    l = l.scrollTop;
    c.left = Math.max(c.left, g);
    c.top = Math.max(c.top, l);
    f = _.ig(f.Aa());
    c.right = Math.min(c.right, g + f.width);
    c.bottom = Math.min(c.bottom, l + f.height);
    return 0 <= c.top && 0 <= c.left && c.bottom > c.top && c.right > c.left ? c : null
};
_.Lg = function(a) {
    var c = _.sg(a);
    a = _.Nt(a);
    return new _.Ig(c.x, c.y, a.width, a.height)
};
_.ug = function(a) {
    if (1 == a.nodeType)
        return _.Kt(a);
    var c = _.vd(a.Op), f = a;
    a.targetTouches && a.targetTouches.length ? f = a.targetTouches[0] : c && a.B.targetTouches && a.B.targetTouches.length && (f = a.B.targetTouches[0]);
    return new _.X(f.clientX, f.clientY)
};
_.bh = function(a, c, f, g, h, l, n, q, t) {
    var v, w;
    if (v = f.offsetParent) {
        var A = "HTML" == v.tagName || "BODY" == v.tagName;
        A && "static" == _.og(v) || (w = _.sg(v), A || (A = (A = _.Eg(v)) && _.df?-v.scrollLeft : !A || _.W && _.sl("8") || "visible" == _.ng(v, "overflowX") ? v.scrollLeft : v.scrollWidth - v.clientWidth - v.scrollLeft, w = Wg(w, new _.X(A, v.scrollTop))))
    }
    v = w || new _.X;
    w = _.Lg(a);
    if (A = _.Yg(a)) {
        var F = new _.Ig(A.left, A.top, A.right - A.left, A.bottom - A.top), A = Math.max(w.left, F.left), z = Math.min(w.left + w.width, F.left + F.width);
        if (A <= z) {
            var I = Math.max(w.top,
            F.top), F = Math.min(w.top + w.height, F.top + F.height);
            I <= F && (w.left = A, w.top = I, w.width = z - A, w.height = F - I)
        }
    }
    A = _.xf(a);
    I = _.xf(f);
    A.B != I.B && (z = A.B.body, I = _.tg(z, I.Aa()), I = Wg(I, _.sg(z)), !_.W || _.Te(9) || _.hg(A) || (I = Wg(I, _.Hf(A))), w.left += I.x, w.top += I.y);
    a = _.JG(a, c);
    c = new _.X(a & 2 ? w.left + w.width : w.left, a & 1 ? w.top + w.height : w.top);
    c = Wg(c, v);
    h && (c.x += (a & 2?-1 : 1) * h.x, c.y += (a & 1?-1 : 1) * h.y);
    var E;
    if (n)
        if (t)
            E = t;
        else if (E = _.Yg(f))
            E.top -= v.y, E.right -= v.x, E.bottom -= v.y, E.left -= v.x;
    h = E;
    t = c.clone();
    E = _.JG(f, g);
    g = _.Nt(f);
    a = q ? q.clone() :
    g.clone();
    q = t;
    t = a;
    q = q.clone();
    t = t.clone();
    a = 0;
    if (l || 0 != E)
        E & 2 ? q.x -= t.width + (l ? l.right : 0) : l && (q.x += l.left), E & 1 ? q.y -= t.height + (l ? l.bottom : 0) : l && (q.y += l.top);
    n && (h ? (l = q, E = t, a = 0, 65 == (n & 65) && (l.x < h.left || l.x >= h.right) && (n&=-2), 132 == (n & 132) && (l.y < h.top || l.y >= h.bottom) && (n&=-5), l.x < h.left && n & 1 && (l.x = h.left, a|=1), l.x < h.left && l.x + E.width > h.right && n & 16 && (E.width = Math.max(E.width - (l.x + E.width - h.right), 0), a|=4), l.x + E.width > h.right && n & 1 && (l.x = Math.max(h.right - E.width, h.left), a|=1), n & 2 && (a = a | (l.x < h.left ? 16 : 0) | (l.x +
    E.width > h.right ? 32 : 0)), l.y < h.top && n & 4 && (l.y = h.top, a|=2), l.y <= h.top && l.y + E.height < h.bottom && n & 32 && (E.height = Math.max(E.height - (h.top - l.y), 0), l.y = h.top, a|=8), l.y >= h.top && l.y + E.height > h.bottom && n & 32 && (E.height = Math.max(E.height - (l.y + E.height - h.bottom), 0), a|=8), l.y + E.height > h.bottom && n & 4 && (l.y = Math.max(h.bottom - E.height, h.top), a|=2), n & 8 && (a = a | (l.y < h.top ? 64 : 0) | (l.y + E.height > h.bottom ? 128 : 0)), n = a) : n = 256, a = n);
    l = new _.Ig(0, 0, 0, 0);
    l.left = q.x;
    l.top = q.y;
    l.width = t.width;
    l.height = t.height;
    n = a;
    n & 496 || (_.Zg(f, new _.X(l.left,
    l.top)), a = new _.fg(l.width, l.height), g == a || g && a && g.width == a.width && g.height == a.height || (l = a, g = _.hg(_.xf(_.zf(f))), !_.W || _.sl("10") || g && _.sl("8") ? (f = f.style, _.df ? f.MozBoxSizing = "border-box" : _.ef ? f.WebkitBoxSizing = "border-box" : f.boxSizing = "border-box", f.width = Math.max(l.width, 0) + "px", f.height = Math.max(l.height, 0) + "px") : (q = f.style, g ? (g = _.Ns(f), f = _.Ug(f), q.pixelWidth = l.width - f.left - g.left - g.right - f.right, q.pixelHeight = l.height - f.top - g.top - g.bottom - f.bottom) : (q.pixelWidth = l.width, q.pixelHeight = l.height))));
    return n
};
_.Nh = function(a, c, f) {
    f || (a = a.parentNode);
    for (f = 0; a;) {
        if (c(a))
            return a;
        a = a.parentNode;
        f++
    }
    return null
};
_.Rj = function(a, c) {
    a.style.display = c ? "" : "none"
};
_.Ag = function(a, c) {
    var f = a.style;
    "opacity"in f ? f.opacity = c : "MozOpacity"in f ? f.MozOpacity = c : "filter"in f && (f.filter = "" === c ? "" : "alpha(opacity=" + 100 * c + ")")
};
_.Op = function(a, c) {
    c ? a.tabIndex = 0 : (a.tabIndex =- 1, a.removeAttribute("tabIndex"))
};
_.ah = function(a, c) {
    var f = {}, g;
    for (g in a)
        c.call(void 0, a[g], g, a) && (f[g] = a[g]);
    return f
};

_.vf = function(a) {
    a = a.className;
    return _.fa(a) && a.match(/\S+/g) || []
};
_.JH = function() {
    var a = window, c = a.document, f = 0;
    if (c) {
        var f = c.body, g = c.documentElement;
        if (!g ||!f)
            return 0;
        a = _.Ct(a).height;
        if (_.Lf(c) && g.scrollHeight)
            f = g.scrollHeight != a ? g.scrollHeight : g.offsetHeight;
        else {
            var c = g.scrollHeight, h = g.offsetHeight;
            g.clientHeight != h && (c = f.scrollHeight, h = f.offsetHeight);
            f = c > a ? c > h ? c : h : c < h ? c : h
        }
    }
    return f
};
_.Oh = function(a) {
    this.wb = a;
    this.B = a.va()
};
_.Oh.prototype.eb = function() {
    Ph(this)
};
_.Oh.prototype.onBeforeParentOpen = _.Oh.prototype.eb;
var Ph = function(a) {
    var c = a.wb.ci();
    if (a.B.anchorBox && c && c.rb())
        c = _.sg(c.rb()), a.B.anchorBox.left += c.x, a.B.anchorBox.top += c.y;
    else {
        c = a.B.anchor;
        if ("_default" != c && "_iframe" != c) {
            var f = _.kg(c);
            if (f)
                a.B.anchorBox = _.Lg(f);
            else {
                _.sa("Anchor not found in DOM: " + c + '. Falling back to "_default".');
                a.B.anchor = "_default";
                return 
            }
        }
        "_iframe" == c && (c = _.ig(), a.B.anchorBox = new _.Ig(0, 0, c.width, c.height))
    }
    a.B.anchor = ""
};
_.Qh = function(a) {
    _.Oh.call(this, a)
};
_.J(_.Qh, _.Oh);
_.Qh.prototype.open = function() {
    var a = this.B, c = window.document.createElement("ins");
    window.document.getElementById(a.container).appendChild(c);
    c.style.display = "block";
    _.Mg(c, a.containerCss);
    this.wb.qc(c);
    this.wb.Pa(c)
};
_.Qh.prototype.Oe = function() {
    window.document.getElementById(this.wb.id).style.height = this.wb.height + "px"
};
_.Qh.prototype.close = function() {
    _.Tf(this.wb.V());
    _.Tf(this.ye);
    this.ye = null
};
_.LH = function(a) {
    if (a.ye)
        return a.ye;
    var c = a.B;
    !c.anchorBox && c.anchor && Ph(a);
    var f = a.wb.ci();
    if ("_default" == c.anchor && f) {
        var g = _.Lg(_.kg(f.V()));
        c.anchorBox = g
    }
    if (!c.anchorBox)
        return _.sa("No anchor box defined."), null;
    c = new _.X(c.anchorBox.left, c.anchorBox.top);
    f && (f = _.tg(f.rb(), window), a.zt = new _.X, a.zt.x = f.x, a.zt.y = f.y, c.x += f.x, c.y += f.y, _.Sh(c));
    a.ca = c;
    f = _.KH(a, !0);
    a.ye = window.document.createElement("ins");
    a.ye.style.cssText = f;
    window.document.body.appendChild(a.ye);
    return a.ye
};
_.KH = function(a, c) {
    var f = a.B;
    return "position: absolute !important;background-color: transparent !important;left: " + a.ca.x + "px !important;top: " + a.ca.y + "px !important;width: " + f.anchorBox.width + "px !important;height: " + f.anchorBox.height + "px !important;z-index: -10000 !important;display: " + (c ? "block" : "none") + " !important;"
};
_.Th = function(a, c) {
    var f = 0, g = 0;
    if (c.pageX || c.pageY)
        f = c.pageX, g = c.pageY;
    else if (c.clientX || c.clientY) {
        var f = c.target ? c.target: c.srcElement, h;
        f.ownerDocument && f.ownerDocument.parentWindow ? h = f.ownerDocument.parentWindow : h = window;
        g = f = 0;
        _.W ? (f = h.document.documentElement.scrollLeft, g = h.document.documentElement.scrollTop) : (f = h.pageXOffset, g = h.pageYOffset);
        f = c.clientX + f;
        g = c.clientY + g
    }
    h = new _.X(f, g);
    return (f = _.Mh(_.Lg(a))) && f.contains(h)
};
_.Sh = function(a) {
    var c = window, f = window.document.body, g = _.sg(f), c = f.currentStyle || c.getComputedStyle(f, "");
    c.position && "static" != c.position && (a.x -= g.x, a.y -= g.y)
};
_.Uh = function(a) {
    var c = a.wb.ci() && a.wb.ci().V(), c = c && c.style.zIndex ? (0, window.parseInt)(c.style.zIndex, 10) + 1: 0;
    return Math.min(2147483647, Math.max(2E9, a.B.zIndex || c))
};
var Yh, Wh, Xh;
Yh = {
    "bottom-center": 1,
    "bottom-end": 7,
    "bottom-left": 1,
    "bottom-right": 3,
    "bottom-start": 5,
    "left-bottom": 1,
    "left-center": 0,
    "left-top": 0,
    "right-bottom": 3,
    "right-center": 2,
    "right-top": 2,
    "top-center": 0,
    "top-end": 6,
    "top-left": 0,
    "top-right": 2,
    "top-start": 4
};
Wh = {
    "bottom-center": !0,
    "top-center": !0
};
Xh = {
    "left-center": !0,
    "right-center": !0
};
_.Vh = function(a, c, f, g, h) {
    h = h || {
        x: 0,
        y: 0
    };
    if (Wh[c]) {
        var l = _.Nt(a).width / 2;
        h.x = "top-right" == g || "bottom-right" == g ? h.x + l : h.x - l
    }
    Wh[g] && (l = _.Nt(f).width / 2, h.x += l);
    Xh[c] && (l = _.Nt(a).height / 2, h.y = "right-bottom" == g || "left-bottom" == g ? h.y + l : h.y - l);
    Xh[g] && (h.y += _.Nt(f).height / 2);
    _.bh(f, Yh[g], a, Yh[c], new _.X(h.x, h.y));
    g = _.Nh(a, function(a) {
        if (a == window.document)
            return !1;
        a = _.og(a);
        return !!a && "static" != a
    });
    f = c = 0;
    g && (f = _.sg(g), c =- f.x, f =- f.y);
    a = a.style;
    (0, window.parseInt)(a.left, 10) < c && (a.left = c + "px");
    (0, window.parseInt)(a.top, 10) < f && (a.top = f + "px")
};
_.Zh = function(a) {
    _.Oh.call(this, a.wb);
    this.qa = a;
    this.G = null
};
_.J(_.Zh, _.Qh);
_.Zh.prototype.eb = function() {
    this.qa.eb()
};
_.Zh.prototype.onBeforeParentOpen = _.Zh.prototype.eb;
_.Zh.prototype.open = function() {
    this.qa.open();
    if (this.B.closeClickDetection || this.B.hideClickDetection)
        this.G = _.ph(window.document, ["click", "touchstart"], (0, _.H)(this.ha, this), !1)
};
_.Zh.prototype.open = _.Zh.prototype.open;
_.Zh.prototype.Oe = function(a) {
    this.qa.Oe(a)
};
_.Zh.prototype.onready = _.Zh.prototype.Oe;
_.Zh.prototype.M = function(a) {
    this.qa.onRenderStart && this.qa.onRenderStart(a)
};
_.Zh.prototype.onRenderStart = _.Zh.prototype.M;
_.Zh.prototype.close = function() {
    if (this.B.closeClickDetection || this.B.hideClickDetection)
        _.Ch(this.G), this.G = null;
    this.qa.close()
};
_.Zh.prototype.close = _.Zh.prototype.close;
_.Zh.prototype.ha = function(a) {
    _.Th(this.wb.V(), a) || (this.B.hideClickDetection && this.qa.show ? this.qa.show(!1) : this.qa.close())
};

var $h = function() {
    _.Hh.call(this);
    this.B = []
};
_.J($h, _.Hh);
$h.prototype.C = function() {
    for (var a in this.B)
        _.Ch(this.B[a]);
    this.B = [];
    this.G = _.D.clearTimeout(this.G);
    $h.T.C.call(this);
    this.dispatchEvent({
        type: "dispose"
    })
};
_.e("iframes.styles.createAnchor", function() {
    return new $h
});

for (var Iu = "bubble circlepicker float hover hover-menu slide-menu".split(" "), RN = 0; RN < Iu.length; RN++)
    _.V.na(Iu[RN], function(a) {
        return new _.Oh(a)
    });
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

_.Fu = function(a) {
    return new _.C(a)
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

_.e("gapi.iframes.create", _.tb);
_.Rm.prototype.QE = _.d(14, function(a, c) {
    this.register("_g_wasRestyled", a, c)
});
_.bA.prototype.Za = _.d(13, function(a) {
    this.sj("onRestyleSelfFilter", a)
});
_.bA.prototype.eb = _.d(12, function(a) {
    this.sj("onCloseSelfFilter", a)
});
_.Rm.prototype.ping = _.d(11, function(a, c) {
    return _.jA(this, "_g_ping", c, a)
});
_.bA.prototype.Ei = _.d(10, function() {
    return this.G
});
_.bA.prototype.sj = _.d(9, function(a, c) {
    this.zt[a] = c
});
_.e("gapi.iframes.registerStyle", function(a, c) {
    _.hA[a] = c
});
_.e("gapi.iframes.registerBeforeOpenStyle", function(a, c) {
    _.eA[a] = c
});
_.e("gapi.iframes.getStyle", _.gA);
_.e("gapi.iframes.getBeforeOpenStyle", function(a) {
    return _.eA[a]
});
_.e("gapi.iframes.registerIframesApi", _.Yz);
_.e("gapi.iframes.registerIframesApiHandler", _.$z);
_.e("gapi.iframes.getContext", _.jo);
_.e("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.Uz);
_.e("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Vz);
_.e("gapi.iframes.makeWhiteListIframesFilter", _.AD);
_.e("gapi.iframes.Context", _.bA);
_.e("gapi.iframes.Context.prototype.isDisposed", _.bA.prototype.Ma);
_.e("gapi.iframes.Context.prototype.getWindow", _.bA.prototype.Aa);
_.e("gapi.iframes.Context.prototype.getFrameName", _.bA.prototype.Tp);
_.e("gapi.iframes.Context.prototype.getGlobalParam", _.bA.prototype.$h);
_.e("gapi.iframes.Context.prototype.setGlobalParam", _.bA.prototype.sj);
_.e("gapi.iframes.Context.prototype.open", _.bA.prototype.open);
_.e("gapi.iframes.Context.prototype.openChild", _.bA.prototype.cj);
_.e("gapi.iframes.Context.prototype.getParentIframe", _.bA.prototype.Ei);
_.e("gapi.iframes.Context.prototype.closeSelf", _.bA.prototype.Ka);
_.e("gapi.iframes.Context.prototype.restyleSelf", _.bA.prototype.po);
_.e("gapi.iframes.Context.prototype.setCloseSelfFilter", _.bA.prototype.eb);
_.e("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.bA.prototype.Za);
_.e("gapi.iframes.Iframe", _.Rm);
_.e("gapi.iframes.Iframe.prototype.isDisposed", _.Rm.prototype.Ma);
_.e("gapi.iframes.Iframe.prototype.getContext", _.Rm.prototype.getContext);
_.e("gapi.iframes.Iframe.prototype.getFrameName", _.Rm.prototype.Tp);
_.e("gapi.iframes.Iframe.prototype.getId", _.Rm.prototype.Hh);
_.e("gapi.iframes.Iframe.prototype.register", _.Rm.prototype.register);
_.e("gapi.iframes.Iframe.prototype.unregister", _.Rm.prototype.Jd);
_.e("gapi.iframes.Iframe.prototype.send", _.Rm.prototype.send);
_.e("gapi.iframes.Iframe.prototype.applyIframesApi", _.Rm.prototype.Ce);
_.e("gapi.iframes.Iframe.prototype.getIframeEl", _.Rm.prototype.rb);
_.e("gapi.iframes.Iframe.prototype.getSiteEl", _.Rm.prototype.V);
_.e("gapi.iframes.Iframe.prototype.setSiteEl", _.Rm.prototype.qc);
_.e("gapi.iframes.Iframe.prototype.getWindow", _.Rm.prototype.Aa);
_.e("gapi.iframes.Iframe.prototype.getOrigin", _.Rm.prototype.Pq);
_.e("gapi.iframes.Iframe.prototype.close", _.Rm.prototype.close);
_.e("gapi.iframes.Iframe.prototype.restyle", _.Rm.prototype.sD);
_.e("gapi.iframes.Iframe.prototype.restyleDone", _.Rm.prototype.ds);
_.e("gapi.iframes.Iframe.prototype.registerWasRestyled", _.Rm.prototype.QE);
_.e("gapi.iframes.Iframe.prototype.registerWasClosed", _.Rm.prototype.PE);
_.e("gapi.iframes.Iframe.prototype.getParam", _.Rm.prototype.Zf);
_.e("gapi.iframes.Iframe.prototype.setParam", _.Rm.prototype.Vm);
_.e("gapi.iframes.Iframe.prototype.ping", _.Rm.prototype.ping);

_.bA.prototype.Na = _.d(15, function(a, c) {
    var f = _.Ka(this.Kh, a, []);
    if (c)
        for (var g = 0, h=!1; !h && g < f.length; g++)
            f[g].Tc === c && (h=!0, f.splice(g, 1));
    else 
        f.splice(0, f.length)
});
_.e("gapi.iframes.Context.prototype.addOnConnectHandler", _.bA.prototype.qa);
_.e("gapi.iframes.Context.prototype.removeOnConnectHandler", _.bA.prototype.Na);
_.e("gapi.iframes.Context.prototype.addOnOpenerHandler", _.bA.prototype.M);
_.e("gapi.iframes.Context.prototype.connectIframes", _.bA.prototype.wc);

var GC, HC, Ju;
for (_.FC = function(a) {
    return {
        va: function() {
            return a
        },
        ci: function() {
            return a.openerIframe
        }
    }
}, GC = function(a) {
    (new _.Oh(_.FC(a))).eb()
}, HC = "bubble circlepicker float hover hover-menu slide-menu".split(" "), Ju = 0; Ju < HC.length; Ju++)
    _.eA[HC[Ju]] = GC;

_.bA.prototype.ready = function(a, c, f, g) {
    var h = c || {}, l = this.G;
    this.M(function(a) {
        _.fb(h, function(c, f) {
            a.register(f, c, g)
        }, this);
        a !== l && a.send("_ready", n, void 0, g)
    }, void 0, g);
    var n = a || {};
    n.height = n.height || "auto";
    this.fb(n);
    l && l.send("_ready", n, f, _.Vz)
};
_.e("gapi.iframes.Context.prototype.ready", _.bA.prototype.ready);

_.Uu = function(a) {
    var c = window;
    a = (a || c.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
    return "1" === (0, window.decodeURIComponent)(a[a.length - 1] || "")
};
var qN = function(a, c, f) {
    _.Sm.ready(a, c, f, _.Vz)
}, rN = function(a) {
    a = a || {};
    "auto" === a.height && (a.height = _.Ob.Cd());
    _.Sm.po(a)
}, sN = function(a) {
    _.Sm.Ka(a)
}, tN = function(a, c, f) {
    "function" === typeof c && (f = c, c = void 0);
    _.Sm.M(function(g) {
        g.send(a, c, f, _.Vz)
    }, null, _.Vz)
}, uN = function(a) {
    var c = {
        mouseover: 1,
        mouseout: 1
    };
    if (_.Sb._event)
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            g in c && _.R.Ee(window.document, g, function(a) {
                _.Sb._event({
                    event: a.type,
                    timestamp: (new Date).getTime()
                })
            }, !0)
        }
}, vN = function() {
    var a = window.iframes =
    window.iframes || {};
    a.ready = _.V.ready = qN;
    a.resize = _.V.resize = rN;
    a.resizeMe = _.V.rD = rN;
    a.close = _.V.close = sN;
    a.propagate = _.V.Qr = uN;
    a.CROSS_ORIGIN_IFRAMES_FILTER = _.V.Fa = _.Vz;
    a.SAME_ORIGIN_IFRAMES_FILTER = _.V.lO = _.Uz;
    a = window.iframer = a.iframer = window.iframer || {};
    a.send = _.Sb.send = tN;
    var c = _.R.dc();
    _.Sl(c, a);
    for (var f = (a._methods || "").split(","), c = 0; c < f.length; c++)
        a[f[c]] = _.Sb[f[c]] = _.ma(function(a, c, l) {
            _.Sb.send(f[a], c, l)
        }, c)
};
_.Uu() && vN();

});
// Google Inc.

