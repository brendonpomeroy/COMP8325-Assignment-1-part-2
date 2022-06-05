(function() {
    var m = this, ba = function(a, b, c) {
        a = a.split(".");
        c = c || m;
        a[0]in c ||!c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
    }, ca = function() {}, ea = function() {
        var a = da;
        a.getInstance = function() {
            return a.Ka ? a.Ka : a.Ka = new a
        }
    }, fa = function(a) {
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
                            if ("[object Array]" == c ||
                            "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, n = function(a) {
    return "function" == fa(a)
}, ga = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ha = function(a,
b, c) {
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
}, p = function(a, b, c) {
    p = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
    return p.apply(null, arguments)
}, r = function(a, b) {
    var c;
    ba(a, b, c)
}, t = function(a, b, c) {
    a[b] = c
}, ia = function(a, b) {
    function c() {}
    c.prototype =
    b.prototype;
    a.bb = b.prototype;
    a.prototype = new c;
    a.base = function(a, c, f) {
        var g = Array.prototype.slice.call(arguments, 2);
        return b.prototype[c].apply(a, g)
    }
};
var ja = document, u = window, ka = function(a) {
    var b = null;
    (a = a.getElementsByTagName("script")) && a.length && (b = a[a.length - 1]);
    return b
}, la = function() {
    var a = ja;
    return (a = ka(a)) && a.parentElement
};
var ma;
var na = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, v = function(a) {
    var b;
    if (b)
        a = a.replace(oa, "&amp;").replace(pa, "&lt;").replace(qa, "&gt;").replace(ra, "&quot;").replace(sa, "&#39;").replace(ta, "&#0;");
    else {
        if (!va.test(a))
            return a;
        - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;"));
        - 1 != a.indexOf("<") && (a = a.replace(pa, "&lt;"));
        - 1 != a.indexOf(">") && (a = a.replace(qa, "&gt;"));
        - 1 != a.indexOf('"') && (a = a.replace(ra, "&quot;"));
        - 1 != a.indexOf("'") && (a = a.replace(sa,
        "&#39;"));
        - 1 != a.indexOf("\x00") && (a = a.replace(ta, "&#0;"))
    }
    return a
}, oa = /&/g, pa = /</g, qa = />/g, ra = /"/g, sa = /'/g, ta = /\x00/g, va = /[\x00&<>"']/, ya = function(a) {
    return - 1 != a.indexOf("&") ? "document"in m ? wa(a) : xa(a) : a
}, wa = function(a) {
    var b, c = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, d;
    d = b ? b.createElement("div") : m.document.createElement("div");
    return a.replace(za, function(a, b) {
        var g = c[a];
        if (g)
            return g;
        if ("#" == b.charAt(0)) {
            var k = Number("0" + b.substr(1));
            isNaN(k) || (g = String.fromCharCode(k))
        }
        g || (d.innerHTML =
        a + " ", g = d.firstChild.nodeValue.slice(0, - 1));
        return c[a] = g
    })
}, xa = function(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == c.charAt(0)) {
                var d = Number("0" + c.substr(1));
                if (!isNaN(d))
                    return String.fromCharCode(d)
                }
            return a
        }
    })
}, za = /&([^;\s<&]+);?/g, Aa = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, Ba = {
    "'": "\\'"
}, Da = function(a) {
    a = String(a);
    if (a.quote)
        return a.quote();
    for (var b = ['"'], c = 0; c < a.length; c++) {
        var d = a.charAt(c), e = d.charCodeAt(0);
        b[c + 1] = Aa[d] || (31 < e && 127 > e ? d : Ca(d))
    }
    b.push('"');
    return b.join("")
}, Ca = function(a) {
    if (a in Ba)
        return Ba[a];
    if (a in Aa)
        return Ba[a] = Aa[a];
    var b = a, c = a.charCodeAt(0);
    if (31 < c && 127 > c)
        b = a;
    else {
        if (256 > c) {
            if (b = "\\x", 16 > c || 256 < c)
                b += "0"
        } else 
            b = "\\u", 4096 > c && (b += "0");
        b += c.toString(16).toUpperCase()
    }
    return Ba[a] = b
}, Ga = function(a) {
    var b = Ea, c = 0, b = na(String(b)).split(".");
    a = na(String(a)).split(".");
    for (var d = Math.max(b.length,
    a.length), e = 0; 0 == c && e < d; e++) {
        var f = b[e] || "", g = a[e] || "", k = RegExp("(\\d*)(\\D*)", "g"), h = RegExp("(\\d*)(\\D*)", "g");
        do {
            var l = k.exec(f) || ["", "", ""], q = h.exec(g) || ["", "", ""];
            if (0 == l[0].length && 0 == q[0].length)
                break;
            var c = 0 == l[1].length ? 0: parseInt(l[1], 10), G = 0 == q[1].length ? 0: parseInt(q[1], 10), c = Fa(c, G) || Fa(0 == l[2].length, 0 == q[2].length) || Fa(l[2], q[2])
        }
        while (0 == c)
        }
    return c
}, Fa = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}, Ha = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
},
Ia = function(a) {
    var b;
    b = (b = "string" == typeof b ? String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s") ? "|[" + b + "]+" : "";
    b = new RegExp("(^" + b + ")([a-z])", "g");
    return a.replace(b, function(a, b, e) {
        return b + e.toUpperCase()
    })
};
var Ja = function(a) {
    Ja[" "](a);
    return a
};
Ja[" "] = ca;
var Ka = function(a) {
    var b = "foo";
    try {
        return Ja(a[b]), !0
    } catch (c) {}
    return !1
};
var La = function(a) {
    try {
        return !!a && null != a.location.href && Ka(a)
    } catch (b) {
        return !1
    }
}, Ma = function(a, b) {
    if (!(1E-4 > Math.random())) {
        var c = Math.random();
        if (c < b) {
            try {
                var d = new Uint16Array(1);
                window.crypto.getRandomValues(d);
                c = d[0] / 65536
            } catch (e) {
                c = Math.random()
            }
            c = Math.floor(c * a.length);
            return a[c]
        }
    }
    return null
}, Na = function(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d ||!1) : a.attachEvent && a.attachEvent("on" + b, c)
}, Oa = function(a, b, c) {
    var d;
    a.removeEventListener ? a.removeEventListener(b, c, d ||!1) : a.detachEvent &&
    a.detachEvent("on" + b, c)
};
var Qa = function(a) {
    var b = a.toString();
    a.name&&-1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message&&-1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = Pa(a.stack, b));
    return b
}, Ra = function(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = a.document.createElement("img");
    if (c) {
        var e = function() {
            c();
            Oa(d, "load", e);
            Oa(d, "error", e)
        };
        Na(d, "load", e);
        Na(d, "error", e)
    }
    d.src = b;
    a.google_image_requests.push(d)
}, Pa = function(a, b) {
    try {
        - 1 == a.indexOf(b) && (a = b + "\n" + a);
        for (var c; a != c;)
            c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
            "$1");
        return a.replace(/\n */g, "\n")
    } catch (d) {
        return b
    }
};
var Sa = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
};
function w(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}
function Ta() {
    var a, b, c, d = Ua;
    c = c || document;
    var e = c.createElement("script");
    e.type = "text/javascript";
    a && (void 0 !== e.onreadystatechange ? e.onreadystatechange = function() {
        if ("complete" == e.readyState || "loaded" == e.readyState)
            try {
                a()
        } catch (b) {}
    } : e.onload = a);
    b && (e.id = b);
    e.src = d;
    var f = c.getElementsByTagName("head")[0];
    if (f)
        try {
            window.setTimeout(function() {
                f.appendChild(e)
            }, 0)
    } catch (g) {}
}
var Wa = function(a, b) {
    Va(a, "load", b)
}, Va = function(a, b, c) {
    var d;
    Na(a, b, c, d)
}, Ya = function() {
    var a = Xa();
    "google_onload_fired"in a || (a.google_onload_fired=!1, Wa(a, function() {
        a.google_onload_fired=!0
    }))
}, Za = function(a) {
    var b, c = u;
    Ra(c, a, b)
}, $a = function() {
    var a;
    a = a || window;
    try {
        return a.history.length
    } catch (b) {
        return 0
    }
};
function ab() {
    var a = "msie";
    return a in bb ? bb[a] : bb[a] =- 1 != navigator.userAgent.toLowerCase().indexOf(a)
}
var bb = {};
function cb() {
    try {
        return db()
    } catch (a) {
        return "0"
    }
}
function db() {
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description)
            return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
    } else {
        if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
            for (var a = 3, b = 1; b;)
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
            } catch (c) {
                b = null
            }
            return a.toString()
        }
        if (ab()&&!window.opera) {
            b = null;
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                a = 0;
                try {
                    b =
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.AllowScriptAccess = "always"
                } catch (e) {
                    if (6 == a)
                        return a.toString()
                    }
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (f) {}
            }
            if (b)
                return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
            }
    }
    return "0"
}
var eb = function() {
    var a;
    a = a || u;
    return "http:" == a.location.protocol
}, fb = function() {
    var a = window;
    a.google_unique_id?++a.google_unique_id : a.google_unique_id = 1
}, gb = function() {
    var a = window, a = a.google_unique_id;
    return "number" == typeof a ? a : 0
}, hb = function(a) {
    a.u_tz =- (new Date).getTimezoneOffset();
    a.u_his = $a();
    a.u_java = navigator.javaEnabled();
    window.screen && (a.u_h = window.screen.height, a.u_w = window.screen.width, a.u_ah = window.screen.availHeight, a.u_aw = window.screen.availWidth, a.u_cd = window.screen.colorDepth);
    navigator.plugins && (a.u_nplug = navigator.plugins.length);
    navigator.mimeTypes && (a.u_nmime = navigator.mimeTypes.length)
}, ib = function(a) {
    var b, c = a.length;
    if (0 == c)
        return 0;
    b = b || 305419896;
    for (var d = 0; d < c; d++) {
        var e = a.charCodeAt(d);
        b^=(b<<5) + (b>>2) + e & 4294967295
    }
    return 0 < b ? b : 4294967296 + b
}, jb = function(a) {
    for (var b = [], c = 0; a && 25 > c; a = a.parentNode, ++c)
        b.push(9 != a.nodeType && a.id || "");
    return b.join()
}, kb = function(a, b) {
    var c, d = a.userAgent, e = a.platform;
    c = c || /Win|Mac|Linux|iPad|iPod|iPhone/;
    if (c.test(e)&&!/^Opera/.test(d)) {
        c =
        (/WebKit\/(\d+)/.exec(d) || [0, 0])[1];
        var f = (/rv\:(\d+\.\d+)/.exec(d) || [0, 0])[1];
        if (/Win/.test(e) && /Trident/.test(d) && 9 < b.documentMode ||!c && "Gecko" == a.product && 1.7 < f&&!/rv\:1\.8([^.]|\.0)/.test(d) || 524 < c)
            return !0
    }
    return !1
};
var x = function(a) {
    var b = 0;
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? b : a
}, lb = function() {
    var a = "1500", b = 1500, a = parseInt(a, 10);
    return isNaN(a) ? b : a
}, mb = function() {
    var a = "false", b=!1;
    return /^true$/.test(a)?!0 : /^false$/.test(a)?!1 : b
}, nb = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, ob = function(a, b) {
    if (!a)
        return b;
    var c = a.match(nb);
    return c ? c[0] : b
};
var pb = x("0.02"), qb = x("0.0");
var rb = x("0.005"), sb = x("0"), tb = x("0.001"), ub = lb(), vb = x("0.01"), wb = x("1.0"), xb = x("1.0");
var yb = mb();
var zb = function() {
    return ob("", "pagead2.googlesyndication.com")
}, Ab = function(a) {
    return a ? "pagead2.googlesyndication.com" : ob("", "pagead2.googlesyndication.com")
};
var Bb=!!window.google_async_iframe_id, y = Bb && window.parent || window, Xa = function() {
    if (Bb&&!La(y)) {
        for (var a = "." + ja.domain; 2 < a.split(".").length&&!La(y);)
            ja.domain = a = a.substr(a.indexOf(".") + 1), y = window.parent;
        La(y) || (y = window)
    }
    return y
};
var Cb = "jserror", Db = .01, Eb=!0, Fb = {}, Ib = function(a, b, c, d) {
    var e = Gb, f, g = Eb;
    try {
        f = b()
    } catch (k) {
        try {
            var h = Qa(k);
            b = "";
            k.fileName && (b = k.fileName);
            var l =- 1;
            k.lineNumber && (l = k.lineNumber);
            g = e(a, h, b, l, c)
        } catch (q) {
            Hb(q)
        }
        if (!g)
            throw k;
    } finally {
        if (d)
            try {
                d()
            } catch (G) {}
    }
    return f
}, Gb = function(a, b, c, d, e, f) {
    var g = ja, k = {};
    if (e)
        try {
            e(k)
    } catch (h) {}
    k.context = a;
    k.msg = b.substring(0, 512);
    c && (k.file = c);
    0 < d && (k.line = d.toString());
    k.url = g.URL.substring(0, 512);
    k.ref = g.referrer.substring(0, 512);
    Jb(k);
    Kb(Cb, k, f);
    return Eb
}, Kb =
function(a, b, c) {
    try {
        if (c = c || Db, Math.random() < c) {
            var d = "/pagead/gen_204?id=" + a + Lb(b), e = "http" + (eb() ? "" : "s") + "://pagead2.googlesyndication.com" + d, e = e.substring(0, 2E3);
            Za(e)
        }
    } catch (f) {}
}, Hb = function(a) {
    var b, c, d = "pAR";
    try {
        var e = Qa(a), f = "";
        a.fileName && (f = a.fileName);
        var g =- 1;
        a.lineNumber && (g = a.lineNumber);
        Gb(d, e, f, g, c, b)
    } catch (k) {
        a = {
            context: "mRE",
            msg: k.toString() + "\n" + (k.stack || "")
        }, Kb(Cb, a, b)
    }
}, Jb = function(a) {
    var b = a || {};
    Sa(Fb, function(a, d) {
        b[d] = u[a]
    })
}, Mb = function(a, b, c, d) {
    var e = void 0;
    return function() {
        var f =
        arguments, g = function() {
            return b.apply(e, f)
        };
        return Ib(a, g, c, d)
    }
}, Nb = function(a, b) {
    var c, d;
    return Mb(a, b, c, d)
}, Ob = function(a, b) {
    var c, d;
    return Mb(a, b, c, d)
}, Lb = function(a) {
    var b = "";
    Sa(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + w(a)
    });
    return b
};
var Pb = function(a, b) {
    for (var c = 0, d = a, e = 0; a != a.parent;)
        if (a = a.parent, e++, La(a))
            d = a, c = e;
        else if (b)
            break;
    return {
        win: d,
        level: c
    }
}, Qb = function() {
    var a = window, a = Pb(a, !0);
    return a.win
}, Rb = function(a) {
    a = Pb(a, !1);
    return a.win
}, Sb = null, Tb = function() {
    Sb || (Sb = Qb());
    return Sb
};
var Vb = function(a) {
    this.S = a;
    Ub(this)
}, Wb = {
    google_persistent_state: !0,
    google_persistent_state_async: !0
}, Xb = {}, Yb = function(a) {
    return "E" == a.google_pstate_expt || "EU" == a.google_pstate_expt
}, ac = function(a) {
    var b, c;
    try {
        var d = a.google_pstate;
        if (b = Zb(d))
            return c = d, $b(c), c
    } catch (e) {
        c = Qa(e)
    }
    b = {
        context: "ps::eg",
        msg: c,
        L: void 0 !== b ? b ? 1: 0: 2,
        url: a.location.href
    };
    Kb("jserror", b, 1);
    return a.google_pstate = new Vb({})
}, $b = function(a) {
    a.C = (a.C || 0) + 1
}, bc = function() {
    var a = Xa();
    if ("E" == a.google_pstate_gc_expt) {
        var a = Rb(a),
        b = a.google_global_correlator;
        b || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }
    return 1 + Math.floor(Math.random() * Math.pow(2, 43))
}, cc = function(a) {
    var b = Xa();
    if (Yb(b))
        return ac(b);
    a = a && Wb[a] ? a : Bb ? "google_persistent_state_async" : "google_persistent_state";
    if (Xb[a])
        return Xb[a];
    var c = "google_persistent_state_async" == a ? {}
    : b, d = b[a];
    return Zb(d) ? Xb[a] = d : b[a] = Xb[a] = new Vb(c)
}, Zb = function(a) {
    return "object" == typeof a && "object" == typeof a.S
}, Ub = function(a) {
    z(a, 3, null);
    z(a, 4,
    0);
    z(a, 5, 0);
    z(a, 6, 0);
    z(a, 15, 0);
    z(a, 7, bc());
    z(a, 8, {});
    z(a, 9, {});
    z(a, 10, {});
    z(a, 11, []);
    z(a, 12, 0);
    z(a, 16, null);
    var b = Xa();
    Yb(b) ? b.gaGlobal = dc(a, b.gaGlobal || {}) : z(a, 14, {})
}, ec = function(a) {
    switch (a) {
    case 3:
        return "google_exp_persistent";
    case 4:
        return "google_num_sdo_slots";
    case 5:
        return "google_num_0ad_slots";
    case 6:
        return "google_num_ad_slots";
    case 7:
        return "google_correlator";
    case 8:
        return "google_prev_ad_formats_by_region";
    case 9:
        return "google_prev_ad_slotnames_by_region";
    case 10:
        return "google_num_slots_by_channel";
    case 11:
        return "google_viewed_host_channels";
    case 12:
        return "google_num_slot_to_show";
    case 14:
        return "gaGlobal";
    case 15:
        return "google_num_reactive_ad_slots";
    case 16:
        return "google_persistent_language"
    }
    throw Error("unexpected state");
}, fc = function(a) {
    var b = 14, b = ec(b);
    return a = a.S[b]
}, dc = function(a, b) {
    var c = 14, d = a.S;
    return d[ec(c)] = b
}, z = function(a, b, c) {
    a = a.S;
    b = ec(b);
    void 0 === a[b] && (a[b] = c)
}, gc = function() {
    var a = cc();
    return fc(a)
}, hc = function(a) {
    var b = {};
    return dc(a, b)
};
var ic = function(a, b) {
    var c = "/pagead/osd.js";
    b || (b = yb ? "https" : "http");
    return [b, "://", a, c].join("")
};
var kc = function(a) {
    var b = jc, c;
    for (c in b)
        if (b[c] == a)
            return !0;
    return !1
};
var lc = function() {
    var a = m.navigator;
    return a && (a = a.userAgent) ? a : ""
}, mc = lc(), A = function(a) {
    var b = mc;
    return - 1 != b.indexOf(a)
}, nc = function() {
    var a = "WebKit", b = mc;
    return - 1 != b.toLowerCase().indexOf(a.toLowerCase())
};
var oc = function() {
    return A("Opera") || A("OPR")
}, pc = function() {
    return A("Trident") || A("MSIE")
}, qc = oc, rc = pc;
var sc = qc(), B = rc(), C = A("Gecko")&&!nc()&&!(A("Trident") || A("MSIE")), D = nc(), uc = function() {
    var a = "", b;
    if (sc && m.opera)
        return a = m.opera.version, n(a) ? a() : a;
    C ? b = /rv\:([^\);]+)(\)|;)/ : B ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : D && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(mc)) ? a[1] : "");
    return B && (b = tc(), b > parseFloat(a)) ? String(b) : a
}, tc = function() {
    var a = m.document;
    return a ? a.documentMode : void 0
}, Ea = uc(), vc = {}, wc = function(a) {
    return vc[a] || (vc[a] = 0 <= Ga(a))
}, xc = function() {
    var a = m.document;
    if (a && B) {
        var b = tc();
        return b ||
        ("CSS1Compat" == a.compatMode ? parseInt(Ea, 10) : 5)
    }
}();
var yc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, Ac = function(a) {
    zc();
    return a.match(yc)
}, Bc = D, zc = function() {
    if (Bc) {
        Bc=!1;
        var a = m.location;
        if (a) {
            var b = a.href;
            if (b && (b = Cc(Dc(b))) && b != a.hostname)
                throw Bc=!0, Error();
        }
    }
}, Cc = function(a) {
    var b=!0;
    return a ? b ? decodeURI(a) : decodeURIComponent(a) : a
}, Dc = function(a) {
    var b = 3;
    return Ac(a)[b] || null
};
function Ec(a, b) {
    var c = 500, d = 300, c = c || a.google_ad_width, d = d || a.google_ad_height;
    if (a.top == a)
        return !1;
    var e = b.documentElement;
    if (c && d) {
        var f = 1, g = 1;
        a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
        if (g > 2 * d || f > 2 * c)
            return !1
    }
    return !0
};
var E = function(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}, Fc = function(a, b) {
    return new E(a.x + b.x, a.y + b.y)
};
E.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
E.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
var F = function(a, b) {
    this.width = a;
    this.height = b
};
F.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
F.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
!C&&!B || B && B && 9 <= xc || C && wc("1.9.1");
B && wc("9");
var Hc = function(a) {
    return a ? new Gc(H(a)) : ma || (ma = new Gc)
}, Ic = function(a) {
    var b = document;
    return "string" == typeof a ? b.getElementById(a) : a
}, Jc = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new F(a.clientWidth, a.clientHeight)
}, Kc = function(a) {
    var b = D || "CSS1Compat" != a.compatMode ? a.body || a.documentElement: a.documentElement;
    a = a.parentWindow || a.defaultView;
    return B && wc("10") && a.pageYOffset != b.scrollTop ? new E(b.scrollLeft, b.scrollTop) : new E(a.pageXOffset || b.scrollLeft,
    a.pageYOffset || b.scrollTop)
}, Lc = function(a) {
    return a ? a.parentWindow || a.defaultView : window
}, Mc = function(a, b) {
    a.appendChild(b)
}, Nc = function(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}, Oc = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
}, H = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}, Gc = function(a) {
    this.o = a || m.document ||
    document
};
Gc.prototype.createElement = function(a) {
    return this.o.createElement(a)
};
var Pc = function(a) {
    return "CSS1Compat" == a.o.compatMode
}, Qc = function(a) {
    return Kc(a.o)
};
Gc.prototype.appendChild = Mc;
Gc.prototype.contains = Oc;
var Rc = function(a, b) {
    this.xa = a;
    this.fa = b;
    this.Ya = 0;
    this.sa=!1;
    this.La = this.Ma = this.ra = this.U = null
};
Rc.prototype.getName = function() {
    return this.fa
};
var Sc = function(a) {
    a.sa=!0
}, Tc = function(a) {
    a.U || (a.U = (new Date).getTime())
}, Uc = function(a) {
    a.ra || (a.ra = (new Date).getTime())
}, Vc = function(a) {
    a.Ma || (a.Ma = (new Date).getTime())
}, Wc = function(a) {
    a.La || (a.La = (new Date).getTime())
}, Xc = function(a) {
    return "google_ads_div_" + a.fa
}, Yc = function(a) {
    return "google_ads_iframe_" + a.fa
}, Zc = function(a) {
    a = a.getAttribute("id");
    return a.substr(18)
};
Rc.prototype.toString = function() {
    return "[gam.AdSlot: pubid=" + this.xa + ", name=" + this.fa + ", iframeLoaded=" + this.sa + ", tries=" + this.Ya + "]"
};
var $c = function(a, b, c) {
    b = b || u;
    a && b.top != b && (b = b.top);
    try {
        return b.document&&!b.document.body ? new F( - 1, - 1) : c ? new F(b.innerWidth, b.innerHeight) : Jc(b || window)
    } catch (d) {
        return new F( - 12245933, - 12245933)
    }
}, ad = function() {
    var a = window;
    if (a == a.top)
        return 0;
    var b = [];
    b.push(a.document.URL);
    a.name && b.push(a.name);
    a = $c(!1, a, !1);
    b.push(a.width.toString());
    b.push(a.height.toString());
    return ib(b.join(""))
}, bd = function(a, b) {
    if (ab()&&!window.opera) {
        var c = function() {
            "complete" == a.readyState && b(null)
        };
        Va(a, "readystatechange",
        Ob("osd::util::rschange", c))
    } else 
        Va(a, "load", Ob("osd::util::load", b))
}, cd = function() {
    var a = 0;
    void 0 === u.postMessage && (a|=1);
    return a
};
var dd = {
    google_ad_channel: "channel",
    google_ad_host: "host",
    google_ad_host_channel: "h_ch",
    google_ad_host_tier_id: "ht_id",
    google_ad_section: "region",
    google_ad_type: "ad_type",
    google_adtest: "adtest",
    google_original_width: "orig_w",
    google_available_width: "avail_w",
    google_allow_expandable_ads: "ea",
    google_alternate_ad_url: "alternate_ad_url",
    google_alternate_color: "alt_color",
    google_bid: "bid",
    google_city: "gcs",
    google_color_bg: "color_bg",
    google_color_border: "color_border",
    google_color_line: "color_line",
    google_color_link: "color_link",
    google_color_text: "color_text",
    google_color_url: "color_url",
    google_contents: "contents",
    google_country: "gl",
    google_cpm: "cpm",
    google_cust_age: "cust_age",
    google_cust_ch: "cust_ch",
    google_cust_gender: "cust_gender",
    google_cust_id: "cust_id",
    google_cust_interests: "cust_interests",
    google_cust_job: "cust_job",
    google_cust_l: "cust_l",
    google_cust_lh: "cust_lh",
    google_cust_u_url: "cust_u_url",
    google_disable_video_autoplay: "disable_video_autoplay",
    google_ed: "ed",
    google_encoding: "oe",
    google_feedback: "feedback_link",
    google_flash_version: "flash",
    google_font_face: "f",
    google_font_size: "fs",
    google_hints: "hints",
    google_kw: "kw",
    google_kw_type: "kw_type",
    google_language: "hl",
    google_page_url: "url",
    google_pgb_reactive: "pra",
    google_region: "gr",
    google_reuse_colors: "reuse_colors",
    google_responsive_formats: "resp_fmts",
    google_safe: "adsafe",
    google_sc_id: "sc_id",
    google_tag_info: "gut",
    google_targeting: "targeting",
    google_ui_features: "ui",
    google_ui_version: "uiv",
    google_video_doc_id: "video_doc_id",
    google_video_product_type: "video_product_type"
},
ed = {
    google_ad_block: "ad_block",
    google_ad_client: "client",
    google_ad_format: "format",
    google_ad_output: "output",
    google_ad_callback: "callback",
    google_ad_height: "h",
    google_ad_slot: "slotname",
    google_ad_unit_key: "adk",
    google_ad_unit_key_2: "adk2",
    google_ad_width: "w",
    google_analytics_url_parameters: "aup",
    google_captcha_token: "captok",
    google_content_recommendation_ui_type: "crui",
    google_ctr_threshold: "ctr_t",
    google_cust_criteria: "cust_params",
    google_image_size: "image_size",
    google_last_modified_time: "lmt",
    google_loeid: "loeid",
    google_max_num_ads: "num_ads",
    google_max_radlink_len: "max_radlink_len",
    google_mtl: "mtl",
    google_enable_content_recommendations: "ecr",
    google_num_radlinks: "num_radlinks",
    google_num_radlinks_per_unit: "num_radlinks_per_unit",
    google_only_ads_with_video: "only_ads_with_video",
    google_rl_dest_url: "rl_dest_url",
    google_rl_filtering: "rl_filtering",
    google_rl_mode: "rl_mode",
    google_rt: "rt",
    google_source_type: "src_type",
    google_sui: "sui",
    google_skip: "skip",
    google_tag_for_child_directed_treatment: "tfcd",
    google_tag_origin: "to",
    google_tdsma: "tdsma",
    google_tfs: "tfs",
    google_tl: "tl"
}, fd = {
    google_lact: "lact",
    google_only_pyv_ads: "pyv",
    google_only_userchoice_ads: "uc",
    google_scs: "scs",
    google_with_pyv_ads: "withpyv",
    google_previous_watch: "p_w",
    google_previous_searches: "p_s",
    google_video_url_to_fetch: "durl",
    google_yt_pt: "yt_pt",
    google_yt_up: "yt_up"
};
v("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
var I = function(a) {
    this.ia = [];
    this.na = a || window;
    this.s = 0;
    this.ha = null;
    this.Na = 0
}, gd = function(a, b) {
    this.fn = a;
    this.win = b
};
I.prototype.enqueue = function(a, b) {
    0 != this.s || 0 != this.ia.length || b && b != window ? this.ea(a, b) : (this.s = 2, this.ya(new gd(a, window)))
};
I.prototype.ea = function(a, b) {
    this.ia.push(new gd(a, b || this.na));
    hd(this)
};
I.prototype.ua = function(a) {
    this.s = 1;
    if (a) {
        var b = Nb("sjr::timeout", p(this.ja, this, !0));
        this.ha = this.na.setTimeout(b, a)
    }
};
I.prototype.ja = function(a) {
    a&&++this.Na;
    1 == this.s && (null != this.ha && (this.na.clearTimeout(this.ha), this.ha = null), this.s = 0);
    hd(this)
};
I.prototype.statusz = function() {
    return !(!window ||!Array)
};
I.prototype.za = function() {
    return this.Na
};
t(I.prototype, "nq", I.prototype.enqueue);
t(I.prototype, "nqa", I.prototype.ea);
t(I.prototype, "al", I.prototype.ua);
t(I.prototype, "rl", I.prototype.ja);
t(I.prototype, "sz", I.prototype.statusz);
t(I.prototype, "tc", I.prototype.za);
var hd = function(a) {
    var b = Nb("sjr::tryrun", p(a.Qa, a));
    a.na.setTimeout(b, 0)
};
I.prototype.Qa = function() {
    if (0 == this.s && this.ia.length) {
        var a = this.ia.shift();
        this.s = 2;
        var b = Nb("sjr::run", p(this.ya, this, a));
        a.win.setTimeout(b, 0);
        hd(this)
    }
};
I.prototype.ya = function(a) {
    this.s = 0;
    a.fn()
};
var id = function(a) {
    var b = "transform", c = Ha(b);
    return void 0 === a.style[c] && (c = (D ? "Webkit" : C ? "Moz" : B ? "ms" : sc ? "O" : null) + Ia(c), void 0 !== a.style[c]) ? (D ? "-webkit" : C ? "-moz" : B ? "-ms" : sc ? "-o" : null) + "-" + b : b
}, jd = function(a, b) {
    var c = H(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, J = function(a, b) {
    return jd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, kd = function(a) {
    var b = id(a);
    return J(a, b) || J(a, "transform")
},
ld = function(a) {
    a = a ? H(a) : document;
    return !B || B && 9 <= xc || Pc(Hc(a)) ? a.documentElement : a.body
}, md = function(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, nd = function(a) {
    if (B&&!(B && 8 <= xc))
        return a.offsetParent;
    var b = H(a), c = J(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c =
        J(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}, od = function(a) {
    var b, c = H(a), d = J(a, "position"), e = C && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new E(0, 0), g = ld(c);
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = md(a), a = Qc(Hc(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b =
        c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (D && "fixed" == J(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (sc || D && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = nd(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, sc && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, qd = function(a) {
    var b = window.top, c = new E(0, 0), d = Lc(H(a));
    do {
        var e = d == b ? od(a): pd(a);
        c.x += e.x;
        c.y += e.y
    }
    while (d && d != b && (a = d.frameElement) && (d = d.parent));
    return c
}, pd = function(a) {
    var b;
    if (a.getBoundingClientRect)
        b = md(a), b = new E(b.left, b.top);
    else {
        b = Qc(Hc(a));
        var c = od(a);
        b = new E(c.x - b.x, c.y - b.y)
    }
    return C&&!wc(12) ? Fc(b, rd(a)) : b
}, sd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/, rd = function(a) {
    a = kd(a);
    return a ? (a = a.match(sd)) ? new E(parseFloat(a[1]), parseFloat(a[2])) : new E(0, 0) : new E(0, 0)
};
var K = function(a) {
    var b = a;
    "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), a = /^https?:\/\//, a.test(b) || (b = "unknown:" + b));
    return b
}, td = /\+/g, ud = function(a) {
    return window.decodeURIComponent ? decodeURIComponent(a.replace(td, " ")) : unescape(a)
}, vd = function() {
    var a = navigator.userAgent, b = a.indexOf("MSIE ");
    if ( - 1 == b)
        return 0;
    var c = a.indexOf(";", b);
    return parseFloat(a.substring(b + 5, c))
}, wd = function(a) {
    a = a.toLowerCase();
    "ca-" != a.substring(0, 3) && (a = "ca-" +
    a);
    return a
}, xd = function(a, b) {
    var c = 0, d = [];
    a && d.push(a);
    if (b) {
        var e = jb(b);
        e && d.push(e)
    }
    0 < d.length && (c = ib(d.join(":")));
    return c.toString()
}, yd = function(a) {
    if (!a)
        return null;
    var b;
    try {
        b = qd(a)
    } catch (c) {
        b = new E( - 12245933, - 12245933)
    }
    return b
}, jc = {
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PRERENDER: "prerender",
    OTHER: "other"
}, zd = function(a) {
    a = a || document;
    a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
    return kc(a) ? a : "other"
};
var Ad = function(a) {
    this.f = {};
    this.Sa = a
}, Bd = function(a, b, c, d) {
    b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.Sa && ((d = "undefined" == typeof d || d) ||!a.f[b])) && (a.f[b] = c)
}, Cd = function(a, b) {
    for (var c in b.f) {
        var d = b.d(c);
        n(d) || a.f[c] || (a.f[c] = d)
    }
};
Ad.prototype.d = function(a) {
    return this.f[a]
};
Ad.prototype.k = function() {
    var a = [], b;
    for (b in this.f)
        if (!n(this.f[b])) {
            var c = dd[b] || ed[b] || fd[b] || null, d = this.f[b];
            c && d && a.push(c + "=" + w(d))
        }
    return a.join("&")
};
var Ed = function(a, b, c, d) {
    a = Dd(a, b, c, d);
    b = [];
    a[0] && 0 < a[0].length && b.push(a[0].join("&"));
    a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
    return b.join("&")
}, Dd = function(a, b, c, d) {
    var e = [], f = [];
    b = b.f;
    for (var g in d)
        if (!n(g)) {
            var k = d[g];
            if (k) {
                var h = "";
                null != b[g] && (h = w(b[g]));
                var l = [], q =- 1, G =- 1, aa;
                for (aa in a)
                    if (!n(a[aa]))
                        if (++q, null == c[aa])
                            l.push("");
                        else {
                            var ua = c[aa].f;
                            null != ua[g] ? (l.push(w(w(ua[g]))), G = q) : l.push("")
                        }
                        if (0 <= G) {
                            q = w(h);
                            h = [];
                            h.push(q);
                            for (q = 0; q <= G; ++q)
                                h.push(l[q]);
                                f.push(k + "," + h.join(","))
                            } else 
                                h &&
                                e.push(k + "=" + h)
                            }
                }
    a = [];
    a.push(e);
    a.push(f);
    return a
}, Fd = function(a) {
    var b = window, c = document, c = kb(b.navigator, c), b = Ec(b, b.document);
    a = "iframe" === a;
    return c&&!b&&!a
};
var Gd = function() {
    var a = u;
    return !!(a && Math.random() < rb && a.GA_jstiming && a.GA_jstiming.load && "http:" == a.location.protocol)
}, Hd = function(a) {
    this.Pa = (this.G = a && a.GA_jstiming) && this.G.load
};
Hd.prototype.tick = function(a, b) {
    this.Pa.tick(a, b)
};
Hd.prototype.report = function(a) {
    var b = {};
    b.e = a;
    this.G.report(this.Pa, b)
};
var Id = function() {};
ia(Id, Hd);
Id.prototype.tick = function() {};
Id.prototype.report = function() {};
var Jd = function(a, b, c, d) {
    4 >= c && (b = b + "_" + c, d ? a.tick(b, d + "_" + c) : a.tick(b))
};
var Ld = function() {
    this.f = {};
    Kd(this)
}, Kd = function(a) {
    var b = ja.URL;
    a.f = Md(b)
}, Md = function(a) {
    var b = {};
    a = a.split("?");
    a = a[a.length - 1].split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].split("=");
        if (d[0]) {
            var e = d[0].toLowerCase();
            if ("google_domain_reset_url" != e)
                try {
                    b[e] = 1 < d.length ? ud(d[1]) : ""
            } catch (f) {}
        }
    }
    return b
};
Ld.prototype.d = function(a) {
    return null == a ? null : this.f[a]
};
Ld.prototype.setParameter = function(a, b) {
    this.f[a] = b
};
Ld.prototype.debug = function() {};
var Nd = function(a, b) {
    this.a = {};
    this.j = [];
    this.q = {};
    this.Ra = a;
    this.ga = new Ad(a);
    this.Z = {};
    this.Ha=!1;
    this.Q = null;
    this.G = b || null;
    this.Da = {};
    this.aa = {};
    this.Ga =- 1
}, Od = {
    ENABLED: "_enabled_",
    EXPANDABLE: "_expandable_",
    WIDTH: "_width_",
    HEIGHT: "_height_"
}, Pd = function(a, b) {
    a.Ga = b
}, Qd = function(a, b) {
    var c = b.getName();
    a.a[c] = b
}, Rd = function(a, b, c) {
    b = new Rc(b, c);
    Qd(a, b);
    return b
}, Sd = function(a, b) {
    var c, d, e = {}, f = Od;
    e[f.WIDTH] = a;
    e[f.HEIGHT] = b;
    e[f.EXPANDABLE]=!!c;
    e[f.ENABLED]=!1 === d?!1 : !0;
    return e
}, Td = function(a) {
    var b =
    [], c;
    for (c in a.a)
        if (!n(a.a[c])) {
            var d = a.a[c];
            d.U || b.push(d)
        }
    return b
}, Ud = function() {
    var a = L(M);
    a.Ha=!0
};
Nd.prototype.p = function() {
    return this.j
};
var Vd = function(a, b) {
    a.j.push(b)
}, Wd = function(a) {
    var b = [], c;
    for (c in a.a) {
        var d = a.a[c];
        n(d) || d.U && (!d.U ||!d.ra) && b.push(c)
    }
    return b
}, Yd = function(a) {
    for (var b in a.a)
        n(a.a[b]) || Xd(a, b)
}, Xd = function(a, b) {
    var c = a.a[b];
    Tc(c)
}, Zd = function(a, b) {
    var c = a.a[b];
    Uc(c)
}, $d = function(a, b) {
    var c = a.a[b];
    Vc(c)
}, N = function(a, b) {
    var c = a.a[b];
    Wc(c);
    a.G && Jd(a.G, "ga_render", a.j.length, "ga_srt")
}, ae = function(a) {
    var b = 0, c;
    for (c in a.a)
        n(a.a[c]) || b++;
    return b
};
Nd.prototype.toString = function() {
    var a = "[AdData:", b = [], c;
    for (c in this.a)
        n(this.a[c]) || b.push(this.a[c].toString());
    for (var d in this.q)
        n(this.q[d]) || b.push("[" + d + "," + this.q[d] + "]");
    a += b.join();
    return a += "]"
};
Nd.prototype.c = function(a) {
    return this.a[a]
};
Nd.prototype.W = function() {
    return this.a
};
var be = function(a) {
    var b = {}, c;
    for (c in a.a) {
        var d = a.a[c];
        n(d) || (d = d.xa, null != d && (b[d]=!0))
    }
    a = [];
    for (var e in b)
        !0 === b[e] && a.push(e);
    return a
}, ce = function(a, b, c) {
    if (null != b && 0 != b.length) {
        if (null == c || 0 == c.length)
            c = "";
        var d = a.q[b];
        a.q[b] = null == d ? c : d + "," + c
    }
}, de = function(a, b, c) {
    Bd(a.ga, b, c)
}, ee = function(a, b, c, d) {
    if (null != b && 0 != b.length) {
        var e = a.Z[b];
        null == e && (a.Z[b] = new Ad(a.Ra));
        Bd(a.Z[b], c, d)
    }
}, fe = function(a) {
    var b = [], c;
    for (c in a.q)
        n(a.q[c]) || b.push(w(c) + "=" + w(a.q[c]));
    return b.join("&")
}, ge = function(a,
b, c) {
    null == a.Q && (a.Q = {});
    a.Q[b] = c
}, he = function(a, b) {
    return null != a.Q ? a.Q[b] : null
}, ie = function(a, b, c) {
    a.Da[b] = c
}, je = function(a, b, c) {
    a.aa[b] = c
}, ke = function(a, b) {
    var c = a.aa[b];
    c && (Nc(c), delete a.aa[b])
}, le = function(a, b) {
    var c = a.aa[b];
    return c ? yd(c) : null
}, ne = function(a, b, c) {
    return me(a, b, c) != c.URL ? c.domain : ""
}, me = function(a, b, c) {
    return (a = a.ga.d("google_page_url")) || (b.top == b ? c.URL : c.referrer)
}, oe = function(a, b) {
    for (var c = [], d = 0; d < b.length; ++d) {
        var e = "", f = he(a, b[d]);
        f && (e = f._width_ + "x" + f._height_);
        c.push(e)
    }
    return c.join()
};
var O = function(a, b) {
    this.ma = a;
    this.w = b && b.w ? b.w : [];
    this.ta = b ? b.ta : !1;
    this.m = b && b.m ? b.m : 0;
    this.F = b ? b.F : "";
    this.h = b && b.h ? b.h : [];
    this.pa = null;
    this.Ia=!1;
    if (b) {
        var c;
        for (c = 0; c < this.w.length; ++c)
            this.w[c].push("true");
        for (c = 0; c < this.h.length; ++c)
            this.h[c].isFromCopiedInstance=!0
    }
}, Ua = "", pe = 0, qe = 0, re = function() {
    var a = yb, b = Ab(!1), c = pb, d = qb;
    Ua = ic(b, a ? "https" : "http");
    pe = c;
    qe = d
};
re();
var se = function(a, b) {
    var c = "google_ad_request_done", d = a.w, e = a.ma[c];
    e && (e = e.orig_callback || e, a.ma[c] = function(a) {
        if (a && 0 < a.length) {
            var c = 1 < a.length ? a[1].url: null, k = a[0].log_info || null, h = a[0].activeview_url || null, l = a[0].activeview_js_enabled || null, q = a[0].activeview_js_immediate_enabled || null, G = a[0].activeview_js_tos_enabled || null;
            d.push([b, ya(a[0].url), c, k, null, h, l, q, G])
        }
        e(a)
    }, a.ma[c].orig_callback = e)
}, te = function(a) {
    a.ta || (Ya(), Ta(), a.ta=!0)
}, ue = function(a, b, c, d) {
    var e = a.w;
    if (0 < e.length)
        for (var f =
        b.document.getElementsByTagName("a"), g = 0; g < f.length; g++)
            for (var k = 0; k < e.length; k++) {
                var h = e[k][1];
                if (0 <= f[g].href.indexOf(h)) {
                    h = f[g].parentNode;
                    if (e[k][2])
                        for (var l = h, q = 0; 4 > q; q++) {
                            if (0 <= l.innerHTML.indexOf(e[k][2])) {
                                h = l;
                                break
                            }
                            l = l.parentNode
                        }
                        var l=!0, q = e[k][3], G = e[k][5], aa = "true" == e[k][6], ua = "true" == e[k][7], We = "true" == e[k][8], Xe = "true" == e[k][9];
                        c(h, e[k][0], d || 0, l, q, void 0, G, aa, ua, Xe, We);
                        e.splice(k, 1);
                        break
                }
            }
    if (0 < e.length && b != Tb())
        try {
            ue(a, b.parent, c, d)
    } catch (xg) {}
    for (g = 0; g < e.length; ++g)
        a = e[g], "true" ==
        a[6] && ve("osd2", a[3]), "true" == a[7] && ve("osdim", a[3])
}, ve = function(a, b) {
    if (a && b) {
        var c = ["//"];
        c.push("pagead2.googlesyndication.com");
        c.push("/activeview");
        c.push("?id=" + a);
        c.push("&r=j");
        c.push("&avi=" + b);
        Za(c.join(""))
    }
};
O.prototype.getNewBlocks = function(a, b) {
    b && ue(this, this.ma, a, 1);
    for (var c = this.h.length, d = 0; d < c; d++) {
        var e = this.h[d];
        !e.Ja && e.Ba && (a(e.Ba, e.Ea, e.Wa, e.Ca, "", e.Va, "", !1, !1, e.isFromCopiedInstance, !1), e.Ja=!0)
    }
    b && (this.pa = a)
};
O.prototype.getRegisteredAdblockUrls = function() {
    for (var a = [], b = this.h.length, c = 0; c < b; c++) {
        var d = this.h[c];
        a.push(d.Ea)
    }
    return a
};
O.prototype.setupOse = function(a) {
    if (this.getOseId())
        return this.getOseId();
    var b = window.google_enable_ose, c;
    !0 === b ? c = 2 : !1 !== b && (c = Ma([0], qe), null == c && ((c = Ma([2], pe)) || (c = 3)));
    if (!c)
        return 0;
    this.m = c;
    this.F = String(a || 0);
    return this.getOseId()
};
O.prototype.getOseId = function() {
    return window ? this.m : - 1
};
O.prototype.getCorrelator = function() {
    return this.F
};
O.prototype.numBlocks = function() {
    return this.w.length + this.h.length
};
O.prototype.registerAdBlock = function(a, b, c, d, e, f) {
    var g = null;
    e && f && (g = {
        width: e,
        height: f
    });
    if (this.pa && d)
        this.pa(d, a, b, !0, "", g, "", !1, !1, !1, !1);
    else {
        if ("js" == c)
            se(this, a);
        else {
            var k = new we(a, b, c, d, g);
            this.h.push(k);
            d && (a = function() {
                k.Ca=!0
            }, bd(d, a))
        }
        te(this)
    }
};
O.prototype.unloadAdBlock = function(a, b) {
    void 0 !== window.Goog_Osd_UnloadAdBlock && Goog_Osd_UnloadAdBlock(a, b)
};
O.prototype.setUpForcePeriscope = function() {
    window.google_enable_ose_periscope && (this.Ia=!0)
};
O.prototype.shouldForcePeriscope = function() {
    return this.Ia
};
var xe = function() {
    var a = Xa(), b = a.__google_ad_urls;
    if (!b)
        return a.__google_ad_urls = new O(a);
    try {
        if (0 <= b.getOseId())
            return b
    } catch (c) {}
    return a.__google_ad_urls = new O(a, b)
}, we = function(a, b, c, d, e) {
    this.Ea = a;
    this.Wa = b;
    this.ab = c;
    this.Ba = d;
    this.Ja = this.Ca=!1;
    this.Va = e;
    this.isFromCopiedInstance=!1
};
r("Goog_AdSense_getAdAdapterInstance", xe);
r("Goog_AdSense_OsdAdapter", O);
r("Goog_AdSense_OsdAdapter.prototype.numBlocks", O.prototype.numBlocks);
r("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", O.prototype.getNewBlocks);
r("Goog_AdSense_OsdAdapter.prototype.getOseId", O.prototype.getOseId);
r("Goog_AdSense_OsdAdapter.prototype.getCorrelator", O.prototype.getCorrelator);
r("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", O.prototype.getRegisteredAdblockUrls);
r("Goog_AdSense_OsdAdapter.prototype.setupOse", O.prototype.setupOse);
r("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", O.prototype.registerAdBlock);
r("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", O.prototype.setUpForcePeriscope);
r("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", O.prototype.shouldForcePeriscope);
r("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", O.prototype.unloadAdBlock);
var P = navigator;
function ye(a, b, c, d, e) {
    var f = Math.round((new Date).getTime() / 1E3), g = window.google_analytics_domain_name;
    a = "undefined" == typeof g ? ze("auto", a) : ze(g, a);
    var k =- 1 < b.indexOf("__utma=" + a + "."), g =- 1 < b.indexOf("__utmb=" + a), h = cc("google_persistent_state"), h = fc(h) || hc(h), l=!1;
    k ? (c = b.split("__utma=" + a + ".")[1].split(";")[0].split("."), g ? h.sid = c[3] + "" : h.sid || (h.sid = f + ""), h.vid = c[0] + "." + c[1], h.from_cookie=!0) : (h.sid || (h.sid = f + ""), h.vid || (l=!0, h.vid = Ae(b, c, d, e) + "." + f), h.from_cookie=!1);
    h.cid || (b = Be(b), l && b&&-1 != b.search(/^\d+\.\d+$/) ?
    h.vid = b : b != h.vid && (h.cid = b));
    h.dh = a;
    h.hid || (h.hid = Math.round(2147483647 * Math.random()))
}
function Ae(a, b, c, d) {
    return Math.round(2147483647 * Math.random())^Ce(a, b, c, d) & 2147483647
}
function Ce(a, b, c, d) {
    var e = [P.appName, P.version, P.language ? P.language: P.browserLanguage, P.platform, P.userAgent, P.javaEnabled() ? 1: 0].join("");
    c ? e += c.width + "x" + c.height + c.colorDepth : window.java && (c = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), e += c.screen.width + "x" + c.screen.height);
    e += a;
    e += d || "";
    for (a = e.length; 0 < b;)
        e += b--^a++;
    return De(e)
}
function De(a) {
    var b = 1, c = 0, d;
    if (void 0 != a && "" != a)
        for (b = 0, d = a.length - 1; 0 <= d; d--)
            c = a.charCodeAt(d), b = (b<<6 & 268435455) + c + (c<<14), c = b & 266338304, b = 0 != c ? b^c>>21 : b;
    return b
}
function ze(a, b) {
    if (!a || "none" == a)
        return 1;
    a = String(a);
    "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
    return De(a.toLowerCase())
}
var Ee = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Fe = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
function Be(a) {
    var b = 999, c = window.google_analytics_domain_name;
    c && (c = 0 == c.indexOf(".") ? c.substr(1) : c, b = ("" + c).split(".").length);
    var d, c = 999;
    a = a.split(";");
    for (var e = 0; e < a.length; e++) {
        var f = Ee.exec(a[e]) || Fe.exec(a[e]);
        if (f) {
            if (f[1] == b)
                return f[2];
            f[1] < c && (c = f[1], d = f[2])
        }
    }
    return d
};
var Ge = function(a, b, c, d) {
    this._value_ = a;
    this._expires_ = b;
    this._path_ = c;
    this._domain_ = d;
    this._path_ || (this._path_ = "/");
    null == this._domain_ && (this._domain_ = document.domain)
};
Ge.prototype.toString = function() {
    return "[GA_GoogleCookieInfo: value=" + this._value_ + ", expires=" + this._expires_ + ", path=" + this._path_ + "]"
};
var Je = function(a, b) {
    this.o = b || document;
    this.t = a || 0;
    this.P = He(this);
    this.Fa = this.ca=!1;
    Ie(this)
};
Je.prototype.oa = "__gads=";
Je.prototype.$ = "GoogleAdServingTest=";
var Ke = function(a, b) {
    a.t = b;
    Ie(a)
};
Je.prototype.ka = function(a) {
    this.D = a._cookies_[0];
    null != this.D && (this.P = this.D._value_, Le(this))
};
var Me = function(a) {
    var b = (new Date).valueOf(), c = new Date;
    c.setTime(b + a);
    return c
}, Ne = function() {
    var a = Me(15552E6), b = document.domain;
    return new Ge("ID=12345:T=15552000000", a.valueOf(), "/", b)
}, Oe = "http://" + ob("", "partner.googleadservices.com") + "/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo", Qe = function() {
    var a = Pe(M), b = window.GS_googleGetIdsForAdSenseService();
    if (!a.P && a.ca && 1 != a.t) {
        var c = document.domain, d = Oe;
        a.ca && (d += "&cookie_enabled=1");
        d += "&client=" + w(b) +
        "&domain=" + w(c);
        a = K(d);
        document.write('<script src="' + a + '">\x3c/script>')
    }
}, Ie = function(a) {
    a.P || a.Fa || 1 == a.t || (a.ca = Re(a), a.Fa=!0)
}, Re = function(a) {
    a.o.cookie = a.$ + "Good";
    var b = Se(a, a.$);
    if (b = "Good" == b) {
        var c = Me( - 1);
        a.o.cookie = a.$ + "; expires=" + c.toGMTString()
    }
    return b
}, He = function(a) {
    return a = Se(a, a.oa)
}, Se = function(a, b) {
    var c = a.o.cookie, d = c.indexOf(b), e = "";
    - 1 != d && (d += b.length, e = c.indexOf(";", d), - 1 == e && (e = c.length), e = c.substring(d, e));
    return e
}, Le = function(a) {
    if (null != a.D && a.P) {
        var b = new Date;
        b.setTime(1E3 *
        a.D._expires_);
        var c = a.D._domain_, b = a.oa + a.P + "; expires=" + b.toGMTString() + "; path=" + a.D._path_ + "; domain=." + c;
        a.o.cookie = b
    }
};
t(Je.prototype, "setCookieInfo", Je.prototype.ka);
var Q = function(a, b, c, d) {
    this.adData = b;
    this.env = c;
    this.adContentsBySlot = null;
    this.adUrl = "";
    this.i = d;
    this.F = 0;
    Te(this);
    this.b = a;
    this.qa = "";
    this.Za = dd;
    this.B = [];
    this.va = []
}, Ue = {
    WIDTH: "_width_",
    HEIGHT: "_height_",
    HTML: "_html_",
    SNIPPET: "_snippet_",
    EXPANDABLE: "_expandable_",
    IS_AFC: "_is_afc_",
    IS_3PAS: "_is_3pas_",
    COOKIES: "_cookies_",
    CREATIVE_IDS: "_cids_",
    ADGROUP2_IDS: "_a2ids_",
    PREVIOUSLY_SHOWN_TOKEN: "_pstok_",
    EMPTY: "_empty_"
};
Q.prototype.X = function() {
    return "json_html"
};
Q.prototype.g = function() {
    return "lean"
};
Q.prototype.getCorrelator = function() {
    return this.F
};
var Te = function(a) {
    var b = Math.floor(4503599627370496 * Math.random());
    a.F = Math.floor(b)
}, Ve = function() {
    var a = R();
    return a.b
};
Q.prototype.initialize = function() {
    Ye(this);
    this.adUrl = this.qa;
    this.va = [];
    this.B = []
};
var Ye = function(a) {
    a.qa = (yb ? "https://" + ob("", "securepubads.g.doubleclick.net") : "http://" + ob("", "pubads.g.doubleclick.net")) + "/gampad/ads?"
}, af = function(a) {
    a.adUrl = a.qa;
    S(a, "correlator", a.getCorrelator());
    T(a, "output", a.X());
    T(a, "callback", a.K());
    T(a, "impl", a.N());
    Ze(a);
    $e(a);
    a.b || a.ba()
}, U = function(a, b) {
    return null != a.adContentsBySlot ? a.adContentsBySlot[b] : null
};
Q.prototype.c = function(a) {
    return this.adData.c(a)
};
Q.prototype.p = function() {
    return this.adData.p()
};
Q.prototype.W = function() {
    return this.adData.W()
};
var S = function(a, b, c) {
    null != c && T(a, b, w(c.toString()))
}, T = function(a, b, c) {
    null != c && "" != c && (a.adUrl = "?" != a.adUrl.charAt(a.adUrl.length - 1) ? a.adUrl + ("&" + b + "=" + c) : a.adUrl + (b + "=" + c))
}, bf = function(a, b) {
    for (var c = 0; c < b.length; c++)
        if ("" != b[c]) {
            for (var d=!1, e = 0; e < a.B.length; e++)
                if (b[c] == a.B[e]) {
                    d=!0;
                    break
                }
                d || a.B.push(b[c])
        }
}, cf = function(a, b) {
    for (var c = "", d = 0; d < b.length; d++) {
        if (0 < d)
            c += "/";
        else if ("" == b[0])
            continue;
        for (var e = 0; e < a.B.length; e++)
            if (b[d] == a.B[e]) {
                c += e;
                break
            }
    }
    return c
}, df = function(a, b) {
    var c = "";
    "" != b && (c = b.split("/"), bf(a, c), c = cf(a, c));
    a.va.push(c)
};
Q.prototype.I = function(a) {
    T(this, "gdfp_req", 1);
    var b = [];
    if (this.b)
        for (var c = Td(this.adData), d = c.length, e = 0; e < d; e++)
            b.push(c[e].getName());
    else 
        S(this, "iu", a || ""), b = this.adData.p();
    if (0 < b.length) {
        if (a)
            df(this, a);
        else 
            for (e = 0; e < d; e++)
                df(this, b[e]);
        S(this, "iu_parts", this.B.join());
        S(this, "enc_prev_ius", this.va.join());
        S(this, "prev_iu_szs", oe(this.adData, b))
    }
};
var ef = function(a, b) {
    if (null == b)
        return a;
    var c = a.lastIndexOf("?"), c = a.indexOf("google_preview=", c), d = a.indexOf("&", c);
    - 1 == d && (d = a.length - 1, --c);
    return a.substring(0, c) + a.substring(d + 1, a.length)
};
Q.prototype.H = function(a, b, c) {
    S(this, "url", ef(me(this.adData, window, document), this.env.d("google_preview")));
    S(this, "ref", document.referrer);
    S(this, "lmt", (Date.parse(document.lastModified) / 1E3).toString());
    T(this, "dt", a.getTime());
    if (document.body) {
        a = document.body.scrollHeight;
        var d = document.body.clientHeight;
        d && a && S(this, "cc", Math.round(100 * d / a).toString())
    }
    a = this.env.d("deb");
    null != a && S(this, "deb", a);
    a = this.env.d("haonly");
    null != a && S(this, "haonly", a);
    b = this.adData.Z[b];
    a = this.adData.ga;
    d = "";
    c ? d =
    Ed(this.adData.W(), a, this.adData.Z, this.Za) : (null == b ? b = a : Cd(b, a), d = b.k());
    d && (this.adUrl += "&" + d)
};
var Ze = function(a) {
    a.i && 0 !== a.i.t && S(a, "co", a.i.t)
}, $e = function(a) {
    var b = a.adData.Ga;
    - 1 !== b && S(a, "tfcd", b)
}, ff = function(a) {
    var b = window, c = document;
    S(a, "cust_params", fe(a.adData));
    a.i && 1 != a.i.t && (S(a, "cookie", a.i.P), a.i.ca && S(a, "cookie_enabled", "1"));
    a.i && 1 != a.i.t && (b = ne(a.adData, b, c)) && S(a, "cdm", b)
}, gf = function(a, b) {
    for (var c in b) {
        var d = b[c];
        n(d) || T(a, c, d)
    }
};
Q.prototype.M = function() {
    return []
};
var hf = function(a) {
    try {
        S(a, "eid", a.M().join())
    } catch (b) {}
};
Q.prototype.k = function(a) {
    af(this);
    this.J(a);
    2E3 < this.adUrl.length && (a = this.adUrl.lastIndexOf("&", 1992), - 1 != a ? this.adUrl = this.adUrl.substring(0, a) : (this.adUrl = this.adUrl.substring(0, 1992), this.adUrl = this.adUrl.replace(/%\w?$/, "")), this.adUrl += "&trunc=1");
    return this.adUrl
};
Q.prototype.J = function(a) {
    hf(this);
    var b = new Date;
    this.I(a);
    ff(this);
    null != this.env.d("google_preview") && S(this, "gct", this.env.d("google_preview"));
    this.H(b, a || null, this.b);
    a = {};
    hb(a);
    gf(this, a);
    T(this, "flash", cb());
    T(this, "gads", "v2");
    return this.adUrl
};
Q.prototype.ba = function() {
    var a = 0, b = "", c;
    for (c in this.adContentsBySlot)
        if (!n(this.adContentsBySlot[c])) {
            var d = this.adContentsBySlot[c], e = d._is_afc_, a = 2 * a + (e ? 1 : 0);
            d._pstok_ && (b = d._pstok_)
        }
    0 < a && T(this, "prev_afc", a);
    b && S(this, "pstok", b)
};
var jf = function(a, b, c, d, e, f, g) {
    var k = "relative";
    a = a.createElement(b);
    a.style.width = d + "px";
    a.style.height = e + "px";
    a.style.display = f;
    a.style.position = k;
    g && (a.style.margin = g);
    a.style.border = 0;
    c && a.appendChild(c);
    return a
}, kf = function(a, b, c, d, e, f) {
    e = jf(a, "ins", e, c, d, "block");
    e = jf(a, "ins", e, c, d, "inline-table");
    b = a.getElementById(b);
    f ? (a = jf(a, "div", e, c, d, "block", "auto"), b.appendChild(a)) : b.appendChild(e)
}, lf = function(a, b, c, d) {
    var e = document, f = U(a, c), g = f._width_, k = f._height_, f = f._html_, h = e.createElement("iframe"),
    l = a.adData.c(c), l = Yc(l);
    h.id = l;
    h.name = l;
    h.width = g;
    h.height = k;
    h.vspace = 0;
    h.hspace = 0;
    h.allowTransparency = "true";
    h.scrolling = "no";
    h.marginWidth = 0;
    h.marginHeight = 0;
    h.frameBorder = 0;
    h.style.border = 0;
    h.style.position = "absolute";
    h.style.top = 0;
    h.style.left = 0;
    kf(e, b, g, k, h, d);
    h.contentWindow.document.write(f);
    h.contentWindow.document.write("<script>document.close();\x3c/script>");
    N(a.adData, c)
};
Q.prototype.u = function(a, b, c) {
    a = this.env.d("google_collapse_empty_div");
    "true" == a && (c = this.adData.c(c)) && (b = b.getElementById(Xc(c))) && (b.style.display = "none")
};
Q.prototype.r = function(a) {
    if (null == this.adContentsBySlot) {
        this.adContentsBySlot = a;
        for (var b in a)
            n(a[b]) || Zd(this.adData, b)
    } else 
        for (b in a)
            n(a[b]) || (this.adContentsBySlot[b] = a[b], Zd(this.adData, b));
    var c=!1;
    for (b in a)
        if (!n(a[b])) {
            var d = a[b];
            c && (d._cookies_ = [Ne()], c=!1);
            null != d && null != d._cookies_ && this.i.ka(d)
        }
};
var mf = function(a, b) {
    var c = yb ? "https://" + zb(): "http://" + zb();
    if (!b || 0 > b || 1 < b)
        b = 0;
    this.Xa = Math.random() < b;
    this.Ta = a;
    this.la = c + "/pagead/gen_204?id=" + w(a);
    this.Ua = []
}, V = function(a, b, c) {
    b && b.match(/^\w+$/) && c && (a.la += "&" + b + "=" + w(c))
}, nf = function(a, b) {
    var c = be(b);
    0 < c.length && V(a, "pub_id", c[0]);
    V(a, "nslots", ae(b).toString());
    V(a, "pub_url", document.URL);
    V(a, "pub_ref", document.referrer)
}, of = function(a) {
    if (a.Xa && a.Ta && a.la) {
        var b = new Image;
        b.src = a.la;
        a.Ua.push(b)
    }
};
var W = function(a, b, c, d, e) {
    Q.call(this, a, b, c, d);
    this.csi = e;
    this.noRender = this.noFetch=!1;
    this.Y = this.O = null;
    this.$a=!1;
    this.m = 0;
    this.da = ""
};
ia(W, Q);
W.prototype.g = function() {
    return "unknown"
};
W.prototype.initialize = function() {
    Q.prototype.initialize.call(this);
    this.noFetch = null != this.env.d("google_nofetch") || window.google_noFetch;
    this.noRender = null != this.env.d("google_norender");
    var a = p(this.l, this);
    pf(a);
    qf(this);
    rf(this)
};
var rf = function(a) {
    var b;
    b = b || window;
    var c = zd();
    "prerender" == c && (c = ["108809011", "108809012"], a.da = Ma(c, xb));
    b.google_enable_dimp_experiment && (a.da = "108809012")
};
W.prototype.M = function() {
    var a = Q.prototype.M.call(this);
    this.da && a.push(this.da);
    var b = sf();
    b && a.push(b);
    return a
};
var sf = function() {
    var a = document, b = "", c = 0;
    "prerender" == zd(a) ? (b = "108809016", c = wb) : (b = "108809015", c = vb);
    return a = Ma([b], c)
}, pf = function(a) {
    var b = window;
    b.attachEvent ? b.attachEvent("onload", a) : b.addEventListener && b.addEventListener("load", a, !1)
}, tf = function(a) {
    a.csi.tick("onload");
    a.csi.report(a.g())
}, uf = function(a) {
    var b = Wd(a.adData);
    0 < b.length && (a.O = new mf("gam_missing_cb", sb), V(a.O, "pending", b.join()), V(a.O, "correlator", a.getCorrelator().toString()), V(a.O, "impl", a.g()), nf(a.O, a.adData), of(a.O))
};
W.prototype.l = function() {
    tf(this);
    uf(this)
};
W.prototype.I = function(a) {
    this.$a ? Q.prototype.I.call(this, a) : vf(this, a)
};
var vf = function(a, b) {
    for (var c = Td(a.adData), d = [], e = [], f = [], g = c.length, k = 0; k < g; k++) {
        var h = c[k], l = h.getName();
        f.push(l);
        b && b != l || (d.push(l), e.push(wd(h.xa)))
    }
    S(a, "client", e[0]);
    a.b ? 0 < f.length && S(a, "page_slots", f.join()) : (S(a, "slotname", d.join()), 0 < a.adData.j.length && S(a, "page_slots", a.adData.p().join()))
};
W.prototype.H = function(a, b, c) {
    if (0 < navigator.userAgent.indexOf("MSIE ")) {
        var d = this.adData.ga;
        Bd(d, "google_encoding", document.charset, !1)
    }
    Q.prototype.H.call(this, a, b, c);
    if (a = $c(!0))
        S(this, "biw", a.width), S(this, "bih", a.height);
    b && (a = xd(b, this.adData.Da[b]), S(this, "adk", a), b = le(this.adData, b)) && (S(this, "adx", Math.round(b.x)), S(this, "ady", Math.round(b.y)));
    S(this, "ifi", gb());
    b = ad();
    0 != b && S(this, "ifk", b.toString());
    this.m && S(this, "oid", this.m);
    b = cd();
    0 < b && S(this, "osd", b);
    b = Fd(this.g());
    !1 === b && S(this,
    "ea", "0")
};
var wf = function(a) {
    var b = window;
    ye(b.document.domain, b.document.cookie, b.history.length, b.screen, b.document.referrer);
    var c = gc();
    T(a, "ga_vid", c.vid);
    T(a, "ga_sid", c.sid);
    T(a, "ga_hid", c.hid);
    T(a, "ga_fc", c.from_cookie);
    S(a, "ga_wpids", b.google_analytics_uacct)
};
W.prototype.J = function(a) {
    fb();
    "prerender" == zd() && S(this, "d_imp", 1);
    Q.prototype.J.call(this, a);
    wf(this);
    return this.adUrl
};
var xf = function(a) {
    if (a.b) {
        var b = ae(a.adData), c = a.adData.j.length;
        b != c && (a.Y = new mf("gam_sra_mismatch", tb), V(a.Y, "correlator", a.getCorrelator().toString()), V(a.Y, "fslots", c.toString()), nf(a.Y, a.adData), of(a.Y))
    }
}, yf = function(a, b, c) {
    c = '<ins style="position:relative;width:' + a + "px;height:" + b + 'px;border:none;display:block;">' + c + "</ins>";
    return a = '<ins style="position:relative;width:' + a + "px;height:" + b + 'px;border:none;display:inline-table;">' + c + "</ins>"
};
W.prototype.createIframe = function(a, b, c, d, e, f) {
    var g = this.adData.c(a);
    a = Yc(g);
    var k = [];
    b = K(b);
    k.push('<iframe id="', v(a), '" name="', v(a), '" width="', d, '" height="', e, '" vspace="0" hspace="0" allowtransparency="true" ', "scrolling=", this.capture ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', b, '"');
    null != c && k.push(' onload="', c, '"');
    k.push("></iframe>");
    c = [];
    f && (g = Xc(g), c.push('<div id="', v(g), '">'));
    c.push(yf(d, e, k.join("")));
    f && c.push("</div>");
    d = c.join("");
    document.write(d);
    (d = document.getElementById(a)) && zf(this, d)
};
var Af = function(a, b, c, d) {
    var e = "google_temp_div_" + b, f = '<div id="' + v(e) + '"';
    c && d && (f += ' style="width: ' + c + "px; height: " + d + 'px;"');
    f += " ></div>";
    document.write(f);
    (c = Ic(e)) && je(a.adData, b, c)
}, Bf = function(a, b) {
    ke(a.adData, b)
}, Cf = function() {
    var a = [], b = document.getElementsByTagName("base");
    if (b)
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c], f = e.getAttribute("target");
            f && (a.push({
                baseElement: e,
                originalTagValue: f
            }), e.removeAttribute("target"))
        }
    return a
}, Df = function(a) {
    if (a)
        for (var b = 0, c = a.length; b < c; ++b) {
            var d =
            a[b];
            d.baseElement.setAttribute("target", d.originalTagValue)
        }
};
W.prototype.u = function(a, b, c) {
    a.google_js_backfill ? b.write('<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js">\x3c/script>') : Q.prototype.u.call(this, a, b, c)
};
var Ef = function(a) {
    var b = "http://" + Ab() + "/pagead/inject_object_div.js";
    return 6 < parseInt(vd(), 10) || 0 > a.indexOf(b)?!1 : !0
}, Ff = function(a, b) {
    var c = Cf();
    window.frames[a.name].contents = b;
    Ef(b) ? a.src = 'javascript:document.write(window["contents"]);document.close();' : a.src = 'javascript:window["contents"]';
    Df(c)
}, Gf = function(a, b) {
    var c = Zc(a);
    try {
        var d = a.contentWindow ? a.contentWindow.document: a.contentDocument;
        if (null == d)
            if (document.implementation && document.implementation.createDocument)
                d = document.implementation.createDocument("",
                c, null);
            else if ("undefined" != typeof ActiveXObject)
                d = new ActiveXObject("Msxml.DOMDocument");
            else 
                return;
        d.open("text/html", "replace");
        d.write(b);
        d.close()
    } catch (e) {}
};
W.prototype.r = function(a) {
    Jd(this.csi, "ga_srt", this.adData.j.length, "_ga_start");
    Q.prototype.r.call(this, a)
};
var zf = function(a, b, c) {
    if (a.m && b) {
        var d = a.adUrl;
        a.b && c && 0 > a.adUrl.indexOf("&adk=") && (d += "&adk=" + ib(c).toString());
        xe().registerAdBlock(d, 2, a.X(), b)
    }
}, qf = function(a) {
    var b = xe();
    a.m = b.setupOse(a.getCorrelator())
};
var X = function(a, b, c, d, e) {
    W.call(this, a, b, c, d, e);
    this.A = [];
    this.Oa = {};
    this.Aa=!1
};
ia(X, W);
X.prototype.g = function() {
    return this.b ? "batched_friendly_iframe" : "friendly_iframe"
};
X.prototype.K = function() {
    return "window.parent.GA_googleSetAdContentsBySlotForAsync"
};
X.prototype.N = function() {
    return this.b ? "fifs" : "fif"
};
X.prototype.R = function(a) {
    this.k();
    var b = K(this.adUrl);
    Yd(this.adData);
    b = '<script src = "' + b + '">\x3c/script>';
    Jd(this.csi, "_ga_start", this.adData.j.length);
    Hf(this, document, a, !0, 0, 0, b)
};
var If = function(a, b) {
    Vd(a.adData, b);
    a.k(b);
    a.Aa && (a.Aa=!1, T(a, "fif_to", 1));
    var c = K(a.adUrl);
    Xd(a.adData, b);
    c = '<script src = "' + c + '">\x3c/script>';
    Jd(a.csi, "_ga_start", a.adData.j.length);
    Hf(a, document, b, !0, 0, 0, c);
    a.Oa[b] = setTimeout(p(a.wa, a, !0), ub)
}, Hf = function(a, b, c, d, e, f, g) {
    var k = a.adData.c(c), h = Yc(k);
    d && (h += "__hidden__");
    var l = b.getElementById(h);
    if (!l) {
        l = b.createElement("iframe");
        l.id = h;
        l.name = h;
        null != e && null != f && (l.width = e, l.height = f);
        l.vspace = 0;
        l.hspace = 0;
        l.allowTransparency = "true";
        l.scrolling =
        "no";
        l.marginWidth = 0;
        l.marginHeight = 0;
        l.frameBorder = 0;
        l.style.border = 0;
        d && (l.style.visibility = "hidden", l.style.display = "none");
        e = Xc(k);
        b = b.getElementById(e);
        if (null == b)
            return;
        b.appendChild(l)
    }
    d || je(a.adData, c, l);
    g && (a = l.contentWindow ? l.contentWindow.document : l.contentDocument, a.write(g), a.close())
};
X.prototype.T = function(a) {
    var b = this.adData.c(a);
    null == b || this.noFetch || (Jf(this, a), this.A.push(a), 1 == this.A.length && If(this, a))
};
var Jf = function(a, b) {
    var c = document, d = he(a.adData, b), e = d._width_, d = d._height_;
    Hf(a, c, b, !1, e, d)
}, Kf = function(a, b) {
    a.r(b);
    if (a.b)
        for (var c = a.adData.p(), d = 0; d < c.length; d++) {
            var e = c[d];
            a.n(e)
        } else {
        c = {};
        for (e in b)
            n(b[e]) || (c[e]=!0, a.n(e));
        e = a.A[0];
        e in c && (clearTimeout(a.Oa[e]), a.wa())
    }
};
X.prototype.wa = function(a) {
    a && (this.Aa=!0);
    0 < this.A.length && (this.A.shift(), 0 < this.A.length && If(this, this.A[0]))
};
var Lf = function(a, b) {
    var c = a.adData.c(b);
    null != c && (Vd(a.adData, b), Jf(a, b), c = U(a, b), null != c && a.n(b))
};
X.prototype.v = function(a) {
    this.b ? (Lf(this, a), 1 == this.adData.j.length && this.R(a)) : this.T(a)
};
X.prototype.n = function(a) {
    try {
        this.V(window, document, a)
    } catch (b) {}
};
X.prototype.V = function(a, b, c) {
    var d = this.adData.c(c);
    if (null != d) {
        var e = U(this, c);
        $d(this.adData, c);
        null == e || e._empty_ ? (this.u(a, b, c), N(this.adData, c)) : this.noRender ? N(this.adData, c) : (a = Yc(d), b = b.getElementById(a), a = e._html_, d = b.parentNode, null == a ? d.removeChild(b) : (0 < navigator.userAgent.indexOf("MSIE ") ? Mf(b, a, e._is_3pas_) : Nf(b, a), N(this.adData, c), zf(this, b)))
    }
};
var Nf = function(a, b) {
    a.contentWindow.document.write(b);
    a.contentWindow.document.close()
}, Mf = function(a, b, c) {
    c ? Ff(a, b) : Gf(a, b)
};
X.prototype.l = function() {
    W.prototype.l.call(this);
    xf(this)
};
var Y = function(a, b, c, d, e) {
    W.call(this, a, b, c, d, e)
};
ia(Y, W);
Y.prototype.g = function() {
    return "iframe"
};
Y.prototype.X = function() {
    return "html"
};
Y.prototype.K = function() {
    return ""
};
Y.prototype.N = function() {
    return "ifr"
};
Y.prototype.ba = function() {};
var Of = function(a, b) {
    var c;
    a.b ? (a.k(), c = a.adUrl + "&currentslot=" + w(b)) : c = a.k(b);
    return c
};
Y.prototype.v = function(a) {
    var b = he(this.adData, a);
    if (null != b && (Vd(this.adData, a), !this.noFetch)) {
        var c = Of(this, a);
        this.createIframe(a, c, null, b._width_, b._height_, !0)
    }
};
var Z = function(a, b, c, d, e) {
    W.call(this, a, b, c, d, e);
    this.adsLoadedCallback = "GA_googleSyncAdSlotLoaded";
    this.createDomIframeCallback = "GA_googleCreateDomIframe"
};
ia(Z, W);
Z.prototype.g = function() {
    return this.b ? "sync_sra" : "sync"
};
Z.prototype.K = function() {
    return "GA_googleSetAdContentsBySlotForSync"
};
Z.prototype.N = function() {
    return this.b ? "ss" : "s"
};
Z.prototype.T = function(a) {
    var b = this.adData.c(a);
    null == b || this.noFetch || (this.k(b.getName()), b = K(this.adUrl), Xd(this.adData, a), document.write('<script src = "' + b + '">\x3c/script>'))
};
var Pf = function(a, b) {
    a.r(b);
    if (a.b) {
        var c = a.adData.p();
        if (1 == c.length) {
            c = c[0];
            a.n(c);
            return 
        }
    }
    for (var d in b)
        n(b[d]) || a.n(d)
};
Z.prototype.R = function() {
    this.k();
    var a = K(this.adUrl);
    document.write('<script src = "' + a + '">\x3c/script>');
    Yd(this.adData)
};
Z.prototype.v = function(a) {
    if (this.adData.c(a)) {
        Vd(this.adData, a);
        var b = this.adData.j.length;
        Jd(this.csi, "_ga_start", b);
        this.b ? 1 == b ? this.R() : this.n(a) : this.T(a)
    }
};
Z.prototype.n = function(a) {
    this.V(window, document, a)
};
Z.prototype.V = function(a, b, c) {
    var d = this.adData.c(c);
    if (null != d)
        if (d = U(this, c), $d(this.adData, c), null == d || d._empty_)
            this.u(a, b, c), N(this.adData, c);
        else if (this.noRender)
            N(this.adData, c);
        else if (d._snippet_&&!d._is_afc_)
            Qf(this, c, b);
        else if (0 < a.navigator.userAgent.indexOf("MSIE ")) {
            b = this.adsLoadedCallback + "(this);";
            a = "about:blank";
            var e = this.env.d("google_domain_reset_url");
            if (e) {
                var f = Cc(Dc(e));
                if (null === f || 0 <= f.indexOf(document.domain))
                    a = e
            }
            this.createIframe(c, a, b, d._width_, d._height_, !0)
        } else 
            d =
            Rf(this, c, b || document), b.write("<script>" + this.createDomIframeCallback + "(" + Da(d) + " ," + Da(c) + ");\x3c/script>")
};
var Sf = function(a) {
    var b = Ue;
    return a[b.EXPANDABLE]&&!(a[b.IS_AFC] && a[b.IS_3PAS])
}, Tf = function(a, b) {
    var c = Zc(b), d = a.adData.c(c);
    if (!d.sa) {
        Sc(d);
        var d = U(a, c), e = b.parentNode, f = d && d._html_;
        f ? Sf(d) ? e.innerHTML = f : d._is_3pas_ ? Ff(b, f) : Gf(b, f) : e.removeChild(b);
        N(a.adData, c)
    }
}, Uf = function(a, b) {
    Zc(b);
    Tf(a, b)
}, Rf = function(a, b, c, d) {
    b = a.adData.c(b);
    a = Xc(b) + "_ad_container";
    var e = "";
    b = Xc(b) + "_ad_wrapper";
    e = '<div id="' + v(b) + '">\n';
    e += '<div id="' + v(a) + '" style="display:inline-block;">';
    d && (e += d._html_);
    e += "\n</div>\n</div>\n";
    c.write(e);
    return a
}, Qf = function(a, b, c) {
    var d = U(a, b);
    null != d && (d = Rf(a, b, c, d), N(a.adData, b), (c = c.getElementById(d)) && zf(a, c, a.b ? b : ""))
};
Z.prototype.l = function() {
    W.prototype.l.call(this);
    xf(this)
};
var Vf = function(a, b, c, d, e) {
    var f = null;
    null != e ? f = e : (f = b.d("google_ad_impl"), null == f && (f = "sync"));
    switch (f) {
    case "sync":
        return new Z(!1, a, b, c, d);
    case "sync_sra":
        return new Z(!0, a, b, c, d);
    case "iframe":
        return new Y(!1, a, b, c, d);
    case "friendly_iframe":
        return new X(!1, a, b, c, d);
    case "batched_friendly_iframe":
        return new X(!0, a, b, c, d);
    default:
        return new Z(!1, a, b, c, d)
    }
};
var da = function() {
    this.csi = this.settings = this.cookieHelper = this.adEngine = this.adData = null
}, L = function(a) {
    a.adData || (a.adData = new Nd(dd));
    return a.adData
}, Wf = function() {
    var a = M, b = new Nd(dd);
    a.adData = b
}, R = function(a) {
    var b = M;
    null == b.adEngine && (b.adEngine = Vf(L(b), Xf(b), Pe(b), Yf(b), a), b.adEngine.initialize());
    return b.adEngine
}, Zf = function() {
    var a = M, b = null;
    a.adEngine = b
}, Xf = function(a) {
    null == window.GA_googleEnv && (window.GA_googleEnv = new Ld);
    null == a.settings && (a.settings = window.GA_googleEnv);
    return a.settings
},
Pe = function(a, b) {
    null == window._GA_googleCookieHelper && (window._GA_googleCookieHelper = new Je(b));
    null == a.cookieHelper && (a.cookieHelper = window._GA_googleCookieHelper);
    return a.cookieHelper
}, Yf = function(a) {
    null == a.csi && (a.csi = Gd() ? new Hd(u) : new Id);
    return a.csi
};
ea();
var M = da.getInstance();
function $f(a) {
    "number" != typeof a ||!isFinite(a) || 0 != a%1 || 0 > a || Ke(Pe(M, a), a)
}
r("GA_googleSetCookieOptions", $f);
function ag(a) {
    0 !== a && 1 !== a || Pd(L(M), a)
}
r("GA_googleSetTagForChildDirectedTreatment", ag);
function bg(a, b) {
    if ("string" != typeof a || 0 == a.length || "string" != typeof b || 0 == b.length)
        return null;
    var c = L(M);
    return Rd(c, a, b)
}
r("GA_googleAddSlot", bg);
function cg() {
    Ud();
    R()
}
r("GA_googleFetchAds", cg);
function dg() {
    R("iframe");
    Qe()
}
r("GA_googleUseIframeRendering", dg);
function eg() {
    R("friendly_iframe")
}
r("GA_googleUseFriendlyIframeRendering", eg);
function fg() {
    R("batched_friendly_iframe")
}
r("GA_googleUseFriendlyIframeSRARendering", fg);
function gg() {
    var a = Xf(M);
    a.d("google_ad_impl") || a.setParameter("google_ad_impl", "sync_sra")
}
r("GA_googleUseSyncSRARendering", gg);
function hg(a) {
    var b = Xf(M);
    b.setParameter("google_domain_reset_url", a)
}
r("GA_googleDomainResetUrl", hg);
function ig(a) {
    var b = R(), c = L(M), d = la();
    ie(c, a, d);
    c.Ha && (c = b.g(), "iframe" == c || "friendly_iframe" == c || "batched_friendly_iframe" == c || null != U(b, a)&&!b.b || (Af(b, a), b.v(a), Bf(b, a)))
}
r("GA_googleFillSlot", ig);
function jg(a, b, c, d) {
    a = a || "";
    b = b || "";
    c = c || 0;
    d = d || 0;
    var e = R(), f = L(M), g = la();
    ie(f, b, g);
    g = e.g();
    if ("iframe" == g || "friendly_iframe" == g || "batched_friendly_iframe" == g)
        "iframe" == g && Af(e, b, c, d), Rd(f, a, b), a = Sd(c, d), ge(f, b, a), e.v(b), "iframe" == g && Bf(e, b)
}
r("GA_googleFillSlotWithSize", jg);
function kg() {
    Wf();
    Zf()
}
r("GA_googleResetAll", kg);
window.google_noFetch=!1;
function lg() {
    window.google_noFetch=!0
}
r("GA_googleNoFetch", lg);
function mg() {
    window.google_delayFetch=!0
}
r("GA_googleDelayFetch", mg);
function ng(a, b) {
    ce(L(M), a, b)
}
r("GA_googleAddAttr", ng);
function og(a, b) {
    de(L(M), a, b)
}
r("GA_googleAddAdSensePageAttr", og);
function pg(a, b, c) {
    ee(L(M), a, b, c)
}
r("GA_googleAddAdSenseSlotAttr", pg);
function qg(a, b, c) {
    lf(R(), a, b, c);
    a = L(M).c(b);
    (a = document.getElementById(Yc(a))) && zf(R(), a, Ve() ? b : "")
}
r("GA_googleCreateDomIframe", qg);
function rg(a) {
    R().r(a)
}
r("GA_googleSetAdContentsBySlot", rg);
function sg(a) {
    Pf(R(), a)
}
r("GA_googleSetAdContentsBySlotForSync", sg);
function tg(a) {
    Kf(R(), a)
}
r("GA_googleSetAdContentsBySlotForAsync", tg);
function ug(a) {
    Uf(R(), a)
}
r("GA_googleSyncAdSlotLoaded", ug);
function vg() {
    If(R())
}
r("GA_googleReallyFetchAds", vg);
var wg = function() {
    var a = da.getInstance();
    Xf(a).debug();
    Yf(a).tick("jl")
};
wg();
})()
