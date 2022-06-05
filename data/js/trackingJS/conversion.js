(function() {
    var f = this, k = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var d = Object.prototype.toString.call(a);
                        if ("[object Window]" == d)
                            return "object";
                            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
};
var l = function(a) {
    l[" "](a);
    return a
};
l[" "] = function() {};
var m = function(a, b) {
    for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(void 0, a[d], d, a)
};
var n = window;
var p = function(a, b, d) {
    a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent && a.attachEvent("on" + b, d)
};
var q = function(a) {
    return {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4
    }
    [a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
}, r = function(a) {
    var b;
    a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
    return b
}, s = function(a, b) {
    if (3 == q(b))
        return !1;
    a();
    return !0
}, t = function(a, b) {
    if (!s(a, b)) {
        var d=!1, c = r(b), e = function() {
            if (!d && s(a, b)) {
                d=!0;
                var g = e;
                b.removeEventListener ? b.removeEventListener(c, g, !1) : b.detachEvent &&
                b.detachEvent("on" + c, g)
            }
        };
        c && p(b, c, e)
    }
};
var u = function(a) {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0 : a
};
var v = u("0.06"), w = u("0.01"), x = u("0.001");
var y;
n: {
    var z = f.navigator;
    if (z) {
        var A = z.userAgent;
        if (A) {
            y = A;
            break n
        }
    }
    y = ""
};
var B =- 1 != y.indexOf("Opera")||-1 != y.indexOf("OPR"), C =- 1 != y.indexOf("Trident")||-1 != y.indexOf("MSIE"), D =- 1 != y.indexOf("Gecko")&&-1 == y.toLowerCase().indexOf("webkit")&&!( - 1 != y.indexOf("Trident")||-1 != y.indexOf("MSIE")), E =- 1 != y.toLowerCase().indexOf("webkit");
(function() {
    var a = "", b;
    if (B && f.opera)
        return a = f.opera.version, "function" == k(a) ? a() : a;
    D ? b = /rv\:([^\);]+)(\)|;)/ : C ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : E && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(y)) ? a[1] : "");
    return C && (b = (b = f.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
})();
var F = function(a) {
    this.b = [];
    this.a = {};
    for (var b = 0, d = arguments.length; b < d; ++b)
        this.a[arguments[b]] = ""
}, G=!1, I = function(a, b, d) {
    var c = H;
    if (G ? 0 : d ? c.a.hasOwnProperty(d) && "" == c.a[d] : 1) {
        n:
        {
            if (!(1E-4 > Math.random())) {
                var e = Math.random();
                if (e < b) {
                    try {
                        var g = new Uint16Array(1);
                        window.crypto.getRandomValues(g);
                        e = g[0] / 65536
                    } catch (h) {
                        e = Math.random()
                    }
                    a = a[Math.floor(e * a.length)];
                    break n
                }
            }
            a = null
        }
        a && "" != a && (d ? c.a.hasOwnProperty(d) && (c.a[d] = a) : c.b.push(a))
    }
};
F.prototype.c = function(a) {
    return this.a.hasOwnProperty(a) ? this.a[a] : ""
};
var J = function() {
    var a = H, b = [];
    m(a.a, function(a) {
        "" != a && b.push(a)
    });
    return 0 < a.b.length && 0 < b.length ? a.b.join() + "," + b.join() : a.b.join() + b.join()
};
var G=!1, K = function(a) {
    F.apply(this, arguments)
};
(function() {
    function a() {}
    a.prototype = F.prototype;
    K.e = F.prototype;
    K.prototype = new a;
    K.d = function(a, d, c) {
        return F.prototype[d].apply(a, Array.prototype.slice.call(arguments, 2))
    }
})();
K.prototype.geil = K.prototype.c;
var H, L = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" "),
M = ["google_conversion_first_time", "google_conversion_snippets"];
function N(a) {
    return null != a ? escape(a.toString()) : ""
}
function O(a) {
    return null != a ? a.toString().substring(0, 512) : ""
}
function P(a, b) {
    var d = N(b);
    if ("" != d) {
        var c = N(a);
        if ("" != c)
            return "&".concat(c, "=", d)
    }
    return ""
}
function Q(a) {
    var b = typeof a;
    return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
}
function R(a) {
    var b;
    if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
        var d = [];
        for (b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                if (c && "function" == typeof c.join) {
                    for (var e = [], g = 0; g < c.length; ++g) {
                        var h = Q(c[g]);
                        null != h && e.push(h)
                    }
                    c = 0 == e.length ? null : e.join(",")
                } else 
                    c = Q(c);
                    (e = Q(b)) && null != c && d.push(e + "=" + c)
            }
        b = d.join(";")
    } else 
        b = "";
    return "" == b ? "" : "&".concat("data=", encodeURIComponent(b))
}
function S(a) {
    return "number" != typeof a && "string" != typeof a ? "" : N(a.toString())
}
function T(a) {
    if (!a)
        return "";
    a = a.google_conversion_items;
    if (!a)
        return "";
    for (var b = [], d = 0, c = a.length; d < c; d++) {
        var e = a[d], g = [];
        e && (g.push(S(e.value)), g.push(S(e.quantity)), g.push(S(e.item_id)), g.push(S(e.adwords_grouping)), g.push(S(e.sku)), b.push("(" + g.join("*") + ")"))
    }
    return 0 < b.length ? "&item=" + b.join("") : ""
}
function U(a, b, d) {
    var c = [];
    if (a) {
        var e = a.screen;
        e && (c.push(P("u_h", e.height)), c.push(P("u_w", e.width)), c.push(P("u_ah", e.availHeight)), c.push(P("u_aw", e.availWidth)), c.push(P("u_cd", e.colorDepth)));
        a.history && c.push(P("u_his", a.history.length))
    }
    d && "function" == typeof d.getTimezoneOffset && c.push(P("u_tz", - d.getTimezoneOffset()));
    b && ("function" == typeof b.javaEnabled && c.push(P("u_java", b.javaEnabled())), b.plugins && c.push(P("u_nplug", b.plugins.length)), b.mimeTypes && c.push(P("u_nmime", b.mimeTypes.length)));
    return c.join("")
}
function V(a, b, d) {
    var c = "";
    if (b) {
        var e;
        if (a.top == a)
            e = 0;
        else {
            var g = a.location.ancestorOrigins;
            if (g)
                e = g[g.length - 1] == a.location.origin ? 1 : 2;
            else {
                g = a.top;
                try {
                    var h;
                    if (h=!!g && null != g.location.href)
                        e: {
                        try {
                            l(g.foo);
                            h=!0;
                            break e
                        } catch (ia) {}
                        h=!1
                    }
                    e = h
                } catch (ja) {
                    e=!1
                }
                e = e ? 1 : 2
            }
        }
        h = "";
        h = d ? d : 1 == e ? a.top.location.href : a.location.href;
        c += P("frm", e);
        c += P("url", O(h));
        c += P("ref", O(b.referrer))
    }
    return c
}
function W(a) {
    return "42631044" == (H ? H.c(2) : "") || a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase() ? "https:" : "http:"
}
function X(a) {
    return a.google_remarketing_only ? "googleads.g.doubleclick.net" : a.google_conversion_domain || "www.googleadservices.com"
}
function Y(a, b, d, c) {
    var e = "/?";
    "landing" == c.google_conversion_type && (e = "/extclk?");
    var e = W(a) + "//" + X(c) + "/pagead/" + [c.google_remarketing_only ? "viewthroughconversion/": "conversion/", N(c.google_conversion_id), e, "random=", N(c.google_conversion_time)].join(""), g = d ? q(d): "0", h;
    n: {
        h = c.google_conversion_language;
        if (null != h) {
            h = h.toString();
            if (2 == h.length) {
                h = P("hl", h);
                break n
            }
            if (5 == h.length) {
                h = P("hl", h.substring(0, 2)) + P("gl", h.substring(3, 5));
                break n
            }
        }
        h = ""
    }
    a = [P("cv", c.google_conversion_js_version), P("fst",
    c.google_conversion_first_time), P("num", c.google_conversion_snippets), P("fmt", c.google_conversion_format), P("value", c.google_conversion_value), P("currency_code", c.google_conversion_currency), P("label", c.google_conversion_label), P("oid", c.google_conversion_order_id), P("bg", c.google_conversion_color), h, P("guid", "ON"), P("disvt", c.google_disable_viewthrough), P("is_call", c.google_is_call), P("eid", J()), T(c), U(a, b, c.google_conversion_date), R(c), V(a, d, c.google_conversion_page_url), c.google_remarketing_for_search &&
    !c.google_conversion_domain ? "&srr=n": "", P("vis", g)].join("");
    return e + a
}
function aa(a) {
    return {
        ar: 1,
        bg: 1,
        cs: 1,
        da: 1,
        de: 1,
        el: 1,
        en_AU: 1,
        en_US: 1,
        en_GB: 1,
        es: 1,
        et: 1,
        fi: 1,
        fr: 1,
        hi: 1,
        hr: 1,
        hu: 1,
        id: 1,
        is: 1,
        it: 1,
        iw: 1,
        ja: 1,
        ko: 1,
        lt: 1,
        nl: 1,
        no: 1,
        pl: 1,
        pt_BR: 1,
        pt_PT: 1,
        ro: 1,
        ru: 1,
        sk: 1,
        sl: 1,
        sr: 1,
        sv: 1,
        th: 1,
        tl: 1,
        tr: 1,
        vi: 1,
        zh_CN: 1,
        zh_TW: 1
    }
    [a] ? a + ".html" : "en_US.html"
}
var ba = /Android ([01]\.|2\.[01])/i;
function Z(a, b, d, c) {
    3 != c.google_conversion_format || c.google_remarketing_only || c.google_conversion_domain || H && I("317150500 317150501 317150502 317150503 317150504 317150505".split(" "), v, 1);
    var e = H ? H.c(1): "";
    b = Y(a, b, d, c);
    d = function(a, b, c) {
        return '<img height="' + c + '" width="' + b + '" border="0" alt="" src="' + a + '" />'
    };
    return 0 == c.google_conversion_format && null == c.google_conversion_domain ? '<a href="' + (W(a) + "//services.google.com/sitestats/" + aa(c.google_conversion_language) + "?cid=" + N(c.google_conversion_id)) +
    '" target="_blank">' + d(b, 135, 27) + "</a>" : 1 < c.google_conversion_snippets || 3 == c.google_conversion_format ? "317150501" == e || "317150502" == e || "317150503" == e || "317150504" == e || "317150505" == e ? d(b, 1, 1) + ('<script src="' + b.replace(/(&|\?)fmt=3(&|$)/, "$1fmt=4&adtest=on$2") + '">\x3c/script>') : d(b, 1, 1) : '<iframe name="google_conversion_frame" title="Google conversion frame" width="' + (2 == c.google_conversion_format ? 200 : 300) + '" height="' + (2 == c.google_conversion_format ? 26 : 13) + '" src="' + b + '" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">' +
    d(b.replace(/\?random=/, "?frame=0&random="), 1, 1) + "</iframe>"
}
function ca() {
    return new Image
}
function da(a, b) {
    var d = ca;
    "function" === typeof a.opt_image_generator && (d = a.opt_image_generator);
    d = d();
    b += P("async", "1");
    d.src = b;
    d.onload = function() {}
}
function $(a, b, d) {
    var c;
    c = W(a) + "//www.google.com/ads/user-lists/" + [N(d.google_conversion_id), "/?random=", Math.floor(1E9 * Math.random())].join("");
    c += [P("label", d.google_conversion_label), P("fmt", "3"), V(a, b, d.google_conversion_page_url)].join("");
    da(d, c)
}
function ea(a) {
    if ("landing" == a.google_conversion_type ||!a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough)
        return !1;
    a.google_conversion_date = new Date;
    a.google_conversion_time = a.google_conversion_date.getTime();
    a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
    "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
    a.google_conversion_js_version =
    "7";
    0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 1);
    H = new K(1, 2, 3);
    "https:" == W(n) || ba.test(navigator.userAgent) || H && I(["42631043", "42631044"], w, 2);
    return !0
}
function fa(a) {
    for (var b = 0; b < L.length; b++)
        a[L[b]] = null
}
function ga(a) {
    for (var b = {}, d = 0; d < L.length; d++)
        b[L[d]] = a[L[d]];
    for (d = 0; d < M.length; d++)
        b[M[d]] = a[M[d]];
    return b
}
function ha(a) {
    var b = document.getElementsByTagName("head")[0];
    b || (b = document.createElement("head"), document.getElementsByTagName("html")[0].insertBefore(b, document.getElementsByTagName("body")[0]));
    var d = document.createElement("script");
    d.src = W(window) + "//" + X(a) + "/pagead/conversion_debug_overlay.js";
    b.appendChild(d)
};
(function(a, b, d) {
    if (a)
        if (null != /[\?&;]google_debug/.exec(document.URL))
            ha(a);
        else {
            try {
                if (ea(a))
                    if (H && I(["3145833456", "3145833457"], x, 3), "3145833457" == (H ? H.c(3) : "") && 3 == q(d)) {
                        var c = ga(a), e = "google_conversion_" + Math.floor(1E9 * Math.random());
                        d.write('<span id="' + e + '"></span>');
                        t(function() {
                            try {
                                var h = d.getElementById(e);
                                h && (h.innerHTML = Z(a, b, d, c), c.google_remarketing_for_search&&!c.google_conversion_domain && $(a, d, c))
                            } catch (g) {}
                        }, d)
                    } else 
                        d.write(Z(a, b, d, a)), a.google_remarketing_for_search&&!a.google_conversion_domain &&
                        $(a, d, a)
                    } catch (g) {}
                    fa(a)
    }
})(window, navigator, document);
})();

