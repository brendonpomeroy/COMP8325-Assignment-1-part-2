/*!2014-11-27 10:11 */
KSLITE.declare("tanxssp-main", ["tanxssp-utils", "tanxssp-config", "tanxssp-params", "tanxssp-request"], function(a, b) {
    var c = a("tanxssp-utils"), d = a("tanxssp-params").Def, e = a("tanxssp-params").pvid, f = a("tanxssp-request").Def, g = a("tanxssp-config");
    b.run = function(a) {
        g.ready(function() {
            var b = {};
            c.mix(b, d()), c.mix(b, {
                pvid: e
            }), c.mix(b, a), f(b)
        })
    }
}), KSLITE.declare("tanxssp-config", function(a, b) {
    var c = {}, d = {}, e=!1;
    c.mapAdType = {
        1: "txt",
        2: "pic",
        3: "flash",
        4: "video",
        5: "txtlink",
        6: "tuwen",
        7: "js",
        8: "html",
        9: "flashb",
        98: "iframehtml",
        99: "multiframe"
    }, c.mapDisType = {
        1: "static",
        2: "couplet",
        3: "rightfloat",
        4: "floatwin",
        5: "popwin",
        6: "common",
        7: "backdisplay",
        8: "channel",
        9: "search",
        10: "topic",
        11: "video",
        13: "xuanting",
        201: "static"
    }, c.ali = ["taobao.com", "alimama.com", "alibaba.com", "alipay.com", "alisoft.com", "linezing.com", "tanx.com", "mmstat.com", "etao.com", "tmall.com"], c.sc = "sc1", c.mc = "mc1", c.kws = ["wd", "p", "q", "keyword", "kw", "w", "key", "word", "query", "name"], d.cache = void 0, d.win = window, d.d = document, d.maxwin = null, d._maxwin = function(a) {
        if (a)
            return void(d.maxwin = a);
        a = d.win;
        try {
            top != a && top.location && top.location.href && (a = top)
        } catch (b) {}
        d.maxwin = a
    }, d.ali = function() {
        var a, b = d.d.domain.split("."), e = c.ali;
        return b.length > 1 && (a = "@" + b[b.length - 2] + "." + b[b.length - 1], ("@" + e.join("@")).indexOf(a)>-1)?!0 : !1
    }(), d.frm = function() {
        return top != window
    }(), d.data = {}, d.laterShowData = {}, d.dx = function() {
        return d.data[c.sc]
    }, d.units = [], d.addUnit = function(a) {
        var b = (new Date).getTime(), c = {};
        c.w = window, c.pid = a.pid, c.t = b, d.units.push(c)
    }, d.plusUnitCount = function(a) {
        for (var b = 0, e = 0; e < d.units.length; e++)
            if (d.units[e].pid == a.pid && (b += 1), b > 1)
                return;
        var f = c.sc;
        d.data[f] ? d.data[f]++ : d.data[f] = 1
    }, d.ref_url = null, d.getRef_url = function() {
        if (d.ref_url)
            return d.ref_url;
        var a = location.href;
        return d.frm && (a = d.win == d.maxwin ? d.d.referrer : top.location.href, "" === a && (a = location.href)), d.ref_url = a, a
    }, d.r = function() {
        var a = "";
        try {
            a = top.document.referrer
        } catch (b) {}
        return null === a && (a = ""), a
    }(), d.send = function(a) {
        var b = new Image;
        window[Math.random().toString(16).substring(2)] = b, b.src = a
    }, d.isStrict = "CSS1Compat" == document.compatMode, b.c = c, b.r = d, b.ready = function(a) {
        if (e)
            return a();
        var b = setTimeout(function() {
            d._maxwin(window), e=!0, a()
        }, 50);
        d._maxwin(), clearTimeout(b), e=!0, a()
    }, b.ready(function() {})
}), KSLITE.declare("tanxssp-utils", ["tanxssp-config"], function(a, b) {
    var c = a("tanxssp-config").r, d = window, e = {};
    e.mix = KSLITE.mix, e.getScript = KSLITE.getScript, e.syncScript = function(a, b) {
        document.write('<script charset="' + (b || "gbk") + '" src="' + a + '"></script>')
    }, e.encode = function(a) {
        return encodeURIComponent(a + "")
    }, e.decode = function(a) {
        return decodeURIComponent(a + "")
    }, e.getAttr = function(a, b) {
        return e.trim(a.getAttribute(b.toLowerCase(), 2) || "") || ""
    }, e.setAttr = function(a, b, c) {
        a.setAttribute(b.toLowerCase(), e.trim(c + ""))
    }, e.getOffset = function(a) {
        var b = a.getBoundingClientRect(), c = document.body.scrollTop || document.documentElement.scrollTop;
        return {
            top: b.top + c,
            left: b.left
        }
    }, e.$ = function(a) {
        return document.getElementById(a)
    }, e.tanxId = function(a) {
        return e.$("tanx-a-" + a)
    }, e.tanxOuter = function(a) {
        return e.$("tanxssp-outer-con" + a)
    }, e.tanxSId = function(a) {
        return "tanx-a-" + a
    }, e.getCookie = function(a) {
        var b;
        try {
            b = d.localStorage
        } catch (c) {}
        var f =+ new Date, g = "";
        if (b) {
            var h = b.getItem(a);
            h && (f > h.split("::")[1] ? b.removeItem(a) : g = h.split("::")[0])
        } else 
            for (var i = (" " + document.cookie).split(";"), j = 0; j < i.length; j++)
                if (0 === i[j].indexOf(" " + a + "=")) {
                    g = e.decode(i[j].split("=")[1]);
                    break
                }
        return g
    }, e.css = function(a, b, c) {
        return c ? (a.style[b] = c, c) : d.getComputedStyle ? d.getComputedStyle(a, null).getPropertyValue(b) : a.currentStyle ? a.currentStyle[b] : void 0
    }, e.each = function(a, b) {
        if (a.length && a.slice)
            for (var c = 0, d = a.length; d > c; c++)
                b(a[c], c);
        else 
            for (var e in a)
                a.hasOwnProperty(e) && b(a[e], e)
    }, e.setCookie = function(a, b, c) {
        var f;
        try {
            f = d.localStorage
        } catch (g) {}
        var h = new Date;
        f ? (f.getItem(a) && f.removeItem(a), f.setItem(a, b + "::" + ( + h + 864e5 * c))) : (h.setDate(h.getDate() + c), document.cookie = a + "=" + e.encode(b) + "; expires=" + h.toGMTString() + "; path=/")
    }, e.trim = function(a) {
        var b = "";
        try {
            b = a.trim()
        } catch (c) {
            for (var a = a.replace(/^\s\s*/, ""), d = /\s/, e = a.length; d.test(a.charAt(--e)););
            b = a.slice(0, e + 1)
        }
        return b
    }, e.show = function(a) {
        var b = e.getAttr(a, "_tanx_old_display") || "";
        e.css(a, "display", b)
    }, e.hide = function(a) {
        a && (e.setAttr(a, "_tanx_old_display", e.css(a, "display")), e.css(a, "display", "none"))
    }, e.now = function() {
        return Date.now ? function() {
            return Date.now()
        } : function() {
            return new Date - 0
        }
    }(), navigator.userAgent && navigator.userAgent.toLowerCase().indexOf("firefox")>-1 && ("undefined" == typeof HTMLElement || HTMLElement.prototype.insertAdjacentElement || (HTMLElement.prototype.insertAdjacentElement = function(a, b) {
        switch (a.toLowerCase()) {
        case"beforebegin":
            this.parentNode.insertBefore(b, this);
            break;
        case"afterbegin":
            this.insertBefore(b, this.firstChild);
            break;
        case"beforeend":
            this.appendChild(b);
            break;
        case"afterend":
            this.nextSibling ? this.parentNode.insertBefore(b, this.nextSibling) : this.parentNode.appendChild(b)
        }
    }, HTMLElement.prototype.insertAdjacentHTML = function(a, b) {
        var c = this.ownerDocument.createRange();
        c.setStartBefore(this);
        var d = c.createContextualFragment(b);
        this.insertAdjacentElement(a, d)
    })), e.showAd = function(a, b, c, e) {
        b ? d.setTimeout(function() {
            var c = document.getElementById(b);
            try {
                c.insertAdjacentHTML("beforebegin", a), "function" == typeof e && e()
            } catch (d) {
                c = c.parentNode, c.insertAdjacentHTML("beforebegin", a), "function" == typeof e && e()
            }
        }, 0) : c ? d.setTimeout(function() {
            try {
                c.insertAdjacentHTML("afterbegin", a), "function" == typeof e && e()
            } catch (b) {
                c = c.parentNode, c.insertAdjacentHTML("afterbegin", a), "function" == typeof e && e()
            }
        }, 0) : (document.write(a), "function" == typeof e && e())
    };
    var f = function() {
        function a(a) {
            for (var b = 0; b < i.length && a !== i[b]; b++);
            return b < i.length ? b : - 1
        }
        var b, c = navigator.userAgent.toLowerCase(), f = c.indexOf("msie")>-1, g = navigator.userAgent.match(/MSIE\s([^;]*)/), h = 0;
        g && g[1] && (h = parseFloat(g[1])), b = f ? 7 > h?!1 : "BackCompat" == document.compatMode?!1 : !0 : !0;
        var i = [], j = [], k = [], l = [], m = function(c, f) {
            if (!(a(c) >= 0))
                if (l.push(c.style.cssText), i.push(c), b)
                    c.style.position = "fixed", e.each(f, function(a, b) {
                        c.style[b] = a || 0
                    });
                else {
                    var g = null, h = null;
                    j.push(f);
                    var m = function() {
                        for (var a, b, c, d, e = document, f = e.documentElement.clientHeight || e.body.clientHeight, g = 0, h = i.length; h > g; g++)
                            a = i[g], d = j[g], a.style.position = "absolute", b = a.offsetWidth, c = a.offsetHeight, void 0 !== d.top && (a.style.top = (parseInt(d.top, 10) || 0) + (e.body.scrollTop || e.documentElement.scrollTop) + "px"), void 0 !== d.left && (a.style.left = (parseInt(d.left, 10) || 0) + (e.body.scrollLeft || e.documentElement.scrollLeft) + "px"), void 0 !== d.right && (a.style.right = (parseInt(d.right, 10) || 0) - (e.body.scrollLeft || e.documentElement.scrollLeft) + "px"), void 0 !== d.bottom && (a.style.top = f - (parseInt(d.bottom, 10) || 0) - c + (e.body.scrollTop || e.documentElement.scrollTop) + "px")
                        }, n = function() {
                            g && clearTimeout(g), g = setTimeout(function() {
                                m()
                            }, 10)
                        };
                        e.addEvent(d, "scroll", n);
                        var o = function() {
                            h && clearTimeout(h), h = setTimeout(function() {
                                m()
                            }, 10)
                        };
                        e.addEvent(d, "resize", o), k.push({
                            scroll: n,
                            resize: o
                        }), m()
                }
        }, n = function(c) {
            var f = a(c);
            0 > f || (c.style.cssText = l[f], l.splice(f, 1), i.splice(f, 1), b || (j.splice(f, 1), e.removeEvent(d, "scroll", k[f].scroll), e.removeEvent(d, "resize", k[f].resize), k.splice(f, 1)))
        };
        return {
            fixedEl: m,
            deFixed: n
        }
    }();
    e.createCloseBtn = function() {
        var a = document.createElement("div"), b = " onmouseover=\"this.src='http://img.alimama.cn/p/close2.gif'\"", c = " onmouseout=\"this.src='http://img.alimama.cn/p/close1.gif'\"", d = ' style="height:13px;font-size:14px;float:right;width:43px;cursor:pointer;position:absolute;top:-16px;right:0"';
        return a.innerHTML = '<img alt="Close" src="http://img.alimama.cn/p/close1.gif" ' + b + c + d + " />", a
    }, e.fixedEl = f.fixedEl, e.deFixed = f.deFixed, function(a, b) {
        b.addEventListener ? (e.addEvent = function(a, b, c) {
            a.addEventListener(b, c, !1)
        }, e.removeEvent = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        }) : b.attachEvent ? (e.addEvent = function(b, c, d) {
            b["e" + c + d] = d, b[c + d] = function() {
                b["e" + c + d](a.event)
            }, b.attachEvent("on" + c, b[c + d])
        }, e.removeEvent = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]), a[b + c] = null
        }) : (e.addEvent = function(b, c, d) {
            b["on" + c] = d.call(b, a.event)
        }, e.removeEvent = function(a, b) {
            a["on" + b] = null
        }), e.domReady = function(a) {
            function b(a) {
                for (n = 1; a = d.shift();)
                    a()
            }
            var c, d = [], e=!1, f = document, g = f.documentElement, h = g.doScroll, i = "DOMContentLoaded", j = "addEventListener", k = "onreadystatechange", l = "readyState", m = h ? /^loaded|^c/ : /^loaded|c/, n = m.test(f[l]);
            return f[j] && (c = function() {
                f.removeEventListener(i, c, e), b()
            }, f[j](i, c, e)), h && (c = function() {
                /^c/.test(f[l]) && (f.detachEvent(k, c), b())
            }, f.attachEvent(k, c)), h ? a = function(b) {
                if (window != top)
                    n ? b() : d.push(b);
                else {
                    try {
                        g.doScroll("left")
                    } catch (c) {
                        return setTimeout(function() {
                            a(b)
                        }, 50)
                    }
                    b()
                }
            } : function(a) {
                n ? a() : d.push(a)
            }
        }()
    }(d, document), e.tagName = function(a) {
        return a && a.tagName ? a.tagName.toLowerCase() : null
    }, e.send = c.send, e.encodeJs = function(a) {
        if (!a)
            return a;
        var b, c, d = "0123456789ABCDEF", e = function(a) {
            for (var b = d.substr(15 & a, 1); a > 15;)
                a>>=4, b = d.substr(15 & a, 1) + b;
            return b
        }, f = "", g = a.length, h = "";
        for (c = 0; g > c; c++)
            if (b = a.charCodeAt(c), b >= 97 && 122 >= b || b >= 65 && 90 >= b || b >= 48 && 57 >= b || 32 == b || 44 == b || 46 == b)
                f += a.charAt(c);
            else if (127 >= b)
                h = e(b), h.length < 2 && (h += "0"), f += "\\x" + h;
            else {
                for (h = e(b); h.length < 4;)
                    h = "0" + h;
                    f += "\\u" + h
            }
        return f
    }, e.each(e, function(a, c) {
        b[c] = a
    })
}), KSLITE.declare("tanxssp-request", ["tanxssp-utils", "tanxssp-config", "tanxssp-lazy", "tanxssp-close"], function(a, b) {
    function c(a) {
        var b = "jsonp_callback_" + parseInt(1e5 * Math.random(), 10);
        window[b] = function(a) {
            i(a);
            var c = {
                elConId: "tanxssp-outer-con" + a.pid,
                clickUrl: a.clickurl,
                data: a.data,
                height: a.height,
                pid: a.pid,
                width: a.width
            }, d = window;
            if (d.tanx_ssp_load_ad && d.tanx_ssp_load_ad.length)
                for (var e = 0, f = d.tanx_ssp_load_ad.length; f > e; e++)
                    if (d.tanx_ssp_load_ad[e][a.pid])
                        try {
                            d.tanx_ssp_load_ad[e][a.pid](c)
                        } catch (g) {}
            try {
                window[b] = null, delete window[b]
            } catch (g) {}
        }, a.cb = b, a.ai = g.units.length - 1;
        var c = a.cas, d = ["i", "cb", "callback", "ep", "userid", "o", "f", "n", "re", "r", "cah", "caw", "ccd", "ctz", "chl", "cja", "cpl", "cmm", "cf", "cg", "pvid", "ai", "ac", c, "cas", "cbh", "cbw", "dx", "u", "pf", "k", "tt"], f = [];
        return h.each(d, function(b) {
            a[b] !== e && f.push(b + "=" + h.encode(a[b]))
        }), f.join("&")
    }
    function d(a) {
        for (var b=!1, c = 0, d = g.units.length; d > c; c++)
            if (a.i == g.units[c].i) {
                b=!0;
                break
            }
        return b || g.units.push({
            i: a.i,
            sync: a.sync
        }), b
    }
    var e, f, g = a("tanxssp-config").r, h = a("tanxssp-utils"), i = a("tanxssp-lazy").treatShow, j = a("tanxssp-close");
    window.null_data && (f = window.null_data), window.null_data = function() {
        f && f()
    }, b.Def = function(a) {
        if (d(a))
            return !1;
        if (!j.isClose(a.i)) {
            var b = c(a), e = "http://" + a.sd + "/ex?" + b;
            a.sync ? h.syncScript(e) : h.getScript(e)
        }
    }
}), KSLITE.declare("tanxssp-params", ["tanxssp-config", "tanxssp-utils"], function(a, b) {
    function c() {
        return {
            ctz: - ((new Date).getTimezoneOffset() / 60)
        }
    }
    function d() {
        return {
            chl: history.length
        }
    }
    function e() {
        var a = navigator;
        return {
            cja: a.javaEnabled() ? "1": "0",
            cpl: a.plugins ? a.plugins.length: 0,
            cmm: a.mimeTypes ? a.mimeTypes.length: 0
        }
    }
    function f() {
        var a, b, c = "-1", d = navigator;
        if (d.plugins && d.plugins.length) {
            for (a = 0; a < d.plugins.length; a++)
                if ( - 1 != d.plugins[a].name.indexOf("Shockwave Flash")) {
                    c = d.plugins[a].description.split("Shockwave Flash ")[1];
                    break
                }
        } else if (window.ActiveXObject)
            for (b = 10; b >= 2; b--)
                try {
                    var e = new Function("return new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + b + "');");
                    if (e) {
                        c = b + ".0";
                        break
                    }
        } catch (f) {}
        return "-1" != c && (c = c.substring(0, c.indexOf(".") + 2)), {
            cf: c
        }
    }
    function g() {
        var a, b = 0, c = 0;
        return v && v.body && (a = v.body, b = a.clientHeight, c = a.clientWidth), {
            cbh: b,
            cbw: c
        }
    }
    function h() {
        var a = window.screen, b = 0, c = 0, d = 0, e = 0, f = 0;
        try {
            b = a.width, c = a.height, d = a.availHeight, e = a.availWidth, f = a.colorDepth
        } catch (g) {}
        return {
            re: b + "x" + c,
            cah: d,
            caw: e,
            ccd: f
        }
    }
    function i() {
        var a = "";
        try {
            a = v.title
        } catch (b) {}
        return {
            tt: a
        }
    }
    function j() {
        function a(a, b) {
            var c, d = "", e = 1;
            if (e = Math.floor(a.length / b), 1 == e)
                d = a.substr(0, b);
            else 
                for (c = 0; b > c; c++)
                    d += a.substr(c * e, 1);
            return d
        }
        var b, c, d, e, f = "", g = "", h = location, i = "";
        if (r.ali)
            for (b = (" " + document.cookie).split(";"), c = 0; c < b.length; c++)
                if (0 === b[c].indexOf(" cna=")) {
                    g = b[c].substr(5, 24);
                    break
                }
        if ("" === g) {
            var j = h.search.length > 9 ? h.search: (h.pathname.length > 9 ? h.pathname : h.href).substr(1);
            for (b = document.cookie.split(";"), c = 0; c < b.length; c++)
                b[c].split("=").length > 1 && (i += b[c].split("=")[1]);
            i.length < 16 && (i += "0123456789abcdef"), g = a(j, 8) + a(i, 16)
        }
        for (c = 1; 32 >= c; c++)
            d = u.floor(16 * u.random()), g && c <= g.length && (e = g.charCodeAt(c - 1), d = (d + e)%16), f += d.toString(16), 1 === c && "a" > f && (f = "a");
        return {
            cg: f
        }
    }
    function k() {
        var a = u.floor(1e4 * u.random()) + 10001;
        try {
            r.sid ? a = r.sid : (a -= 10001, r.sid = a)
        } catch (b) {}
        return {
            ac: a
        }
    }
    function l() {
        var a, b, c, d, e, f = 0, g = 16, h = 0, i = s[0] || 4973;
        for (c = 1; g >= c; c++)
            a = u.random(), b = u.random(), u.pow(a, 2) + u.pow(b, 2) <= 1 && f++, 12 >= c && (h += a);
        d = "pr" + String.fromCharCode(97 + f), e = u.round(h * i) | (v.body ? v.body.clientWidth : 0)<<16;
        var j = {};
        return j[d] = e, j.cas = d, j
    }
    function m() {
        var a = r.data[s.sc] || 1;
        return {
            dx: a ? a: ""
        }
    }
    function n() {
        return {
            u: r.getRef_url()
        }
    }
    function o() {
        return {
            r: r.r
        }
    }
    function p(a) {
        var b, c, d, e = s.kws;
        if (a)
            for (b = 0; b < e.length; b++)
                if (c = new RegExp("[^1-9a-zA-Z]" + e[b] + "=([^&]*)"), d = a.match(c), d && (c = new RegExp("^[0-9]*$"), null === d[1].match(c)))
                    return d[1];
        return ""
    }
    function q() {
        var a = p(r.u);
        return "" === a && r.r && (a = p(r.r)), {
            k: a
        }
    }
    var r = a("tanxssp-config").r, s = a("tanxssp-config").c, t = a("tanxssp-utils"), u = Math, v = r.maxwin.document;
    b.pvid = function() {
        function a() {
            try {
                var a, f = r.maxwin, g = f[b], h = f.navigator[b];
                try {
                    a = window.localStorage
                } catch (i) {}
                if (g)
                    return g;
                if (h)
                    return h;
                if (a) {
                    var j = a.getItem(b);
                    if (j && c - j.split("::")[1] <= e)
                        return j.split("::")[0]
                }
                f[b] = d, f.navigator[b] = d, a && a.setItem(b, d + "::" + c)
            } catch (k) {}
            return d
        }
        var b = "tanx_ssp_pvid", c = (new Date).getTime(), d = j().cg, e = 2e3;
        return a()
    }(), b.Def = function() {
        var a = {};
        return t.each([c(), d(), e(), f(), g(), h(), i(), j(), k(), l(), m(), n(), o(), q()], function(b) {
            t.mix(a, b)
        }), a
    }
}), KSLITE.declare("tanxssp-acookie", function(a, b) {
    function c() {
        var a, b = navigator.userAgent.toLowerCase(), c = b.indexOf("msie")>-1, d = document, e = location.pathname.split("/");
        e[e.length - 1] = "";
        var f, g = encodeURIComponent(e.join("/"));
        try {
            f = window.localStorage
        } catch (h) {}
        if (f)
            return a = window.localStorage, {
                setkey: function(b, c) {
                    try {
                        a.setItem(b, c)
                    } catch (d) {
                        return !1
                    }
                    return !0
                },
                getkey: function(b) {
                    try {
                        return a.getItem(b)
                    } catch (c) {
                        return 
                    }
                }
            };
        if (c) {
            if (a = d.getElementById("_tanxssp_userdata"), !a) {
                a = d.createElement("input"), a.type = "hidden", d.body.insertBefore(a, d.body.firstChild);
                try {
                    a.addBehavior("#default#userData")
                } catch (h) {}
            }
            return {
                setkey: function(b, c) {
                    try {
                        a.load(g), a.setAttribute(b, c), a.save(g)
                    } catch (d) {
                        return !1
                    }
                    return !0
                },
                getkey: function(b) {
                    try {
                        a.load(g)
                    } catch (c) {
                        return 
                    }
                    return a.getAttribute(b)
                }
            }
        }
        return {
            setkey: function() {},
            getkey: function() {}
        }
    }
    var d=!1;
    b.Def = function() {
        if (!d && (d=!0, location.host.indexOf("www.taobao.com") < 0)) {
            var a = c(), b = "tanxssp_acookie_expires", e = a.getkey(b);
            if (e && e > (new Date).getTime())
                return !1;
            a.setkey(b, (new Date).getTime() + 36e5);
            var f = document, g = f.createElement("iframe");
            g.style.cssText = "width:0;height:0;display:none", g.src = "http://cdn.tanx.com/t/acookie/acbeacon2.html", f.body.insertBefore(g, f.body.firstChild)
        }
    }
}), KSLITE.declare("tanxssp-cookiemap", ["tanxssp-config"], function(a, b) {
    var c = a("tanxssp-config").r;
    b.Def = function(a) {
        if (!c.units[0] || c.units[0].i !== a)
            return 0;
        var b = Math.floor(100 * Math.random() + 1);
        (15 == b || 80 == b) && ((new Image).src = "http://cm.g.doubleclick.net/pixel?google_cm&google_nid=taobao");
        var d = document.domain.split(/qiyi\.com|pps\.tv/), e = d[d.length - 1];
        "" === e && (b = 51), 51 == b && ((new Image).src = "http://ckm.qiyi.com/pixel?qiyi_nid=71000017&qiyi_no_sc"), b = Math.floor(1e3 * Math.random() + 1), 503 === b && c.send("http://mlt01.com/mlcp.htm?media=taobao")
    }
}), KSLITE.declare("tanxssp-show", ["tanxssp-display", "tanxssp-acookie", "tanxssp-feedback", "tanxssp-ws2subway", "tanxssp-activeview"], function(a, b) {
    var c = a("tanxssp-display").Def, d = a("tanxssp-acookie").Def, e = a("tanxssp-feedback").Def, f = a("tanxssp-ws2subway").Def, g = a("tanxssp-activeview");
    b.show = function(a) {
        d(a), a.stdwidth && a.stdheight && (a.stdwidth != a.width || a.stdheight != a.height) && (a.adSpaceWidth = a.width, a.adSpaceHeight = a.height, a.paddingLeft = 0, a.paddingTop = 0, a.stdheight < a.height && (a.height = a.stdheight, a.paddingTop = (a.adSpaceHeight - 2 - a.height) / 2), a.stdwidth < a.width && (a.width = a.stdwidth, a.paddingLeft = (a.adSpaceWidth - 2 - a.width) / 2), a.adSpaceWidth -= a.paddingLeft + 2, a.adSpaceHeight -= a.paddingTop + 2, a.height > a.adSpaceHeight && (a.height = a.adSpaceHeight), a.width > a.adSpaceWidth && (a.width = a.adSpaceWidth)), f(a), c(a), e(a);
        try {
            g.check(a.pid)
        } catch (b) {}
    }
}), KSLITE.declare("tanxssp-feedback", function(a, b) {
    b.Def = function(a) {
        if (void 0 !== a.feedback && "" !== a.feedback) {
            var b = window["tanxssp-feedback-cache"] || (window["tanxssp-feedback-cache"] = {}), c = new Image;
            b[a.pid] = c, c.onload = c.onerror = function() {
                c.onload = c.onerror = null, c = null, delete b[a.pid]
            };
            var d = "?";
            a.feedback.indexOf("?")>-1 && (d = "&"), c.src = a.feedback + d + "tanxssp_t=" + parseInt(1e5 * Math.random(), 10)
        }
    }
}), KSLITE.declare("tanxssp-icon", ["tanxssp-utils"], function(a, b) {
    var c = a("tanxssp-utils");
    b.show = function(a) {
        function b() {
            g.style.display = "block", h.style.display = "none", f.style.width = "26px", l = "s"
        }
        function d() {
            n.style.display = "block", o.style.display = "none", p.style.display = "none", j = "s"
        }
        var e = function(b) {
            return b + a.pid
        }, f = c.$(e("icon")), g = c.$(e("icon_small")), h = c.$(e("icon_big")), i = null, j = "s", k = null, l = "s";
        f && g && h && (f.onmouseover = function() {
            k && window.clearTimeout(k), "s" === l && (g.style.display = "none", h.style.display = "block", f.style.width = "110px", l = "b")
        }, f.onmouseout = function() {
            "b" === l && (k = window.setTimeout(b, 200))
        });
        var m = c.$(e("sx")), n = c.$(e("sx1")), o = c.$(e("sx2")), p = c.$(e("sxtip"));
        m && n && o && (m.onmouseover = function() {
            i && window.clearTimeout(i), "s" === j && (n.style.display = "none", o.style.display = "block", p.style.display = "block", j = "b")
        }, m.onmouseout = function() {
            "b" === j && (i = window.setTimeout(d, 200))
        }, m.onclick = function() {
            var b = c.$("tanxssp_con_" + a.pid), d = c.getAttr(b, "bindundo");
            return d || (b.onclick = function(d) {
                d = window.event || d;
                var e = d.srcElement || d.target;
                if ("tanx-close-undo" === e.id) {
                    var f = document.getElementById("sxbg" + a.pid);
                    f.parentNode.removeChild(f), c.send("http://et.tanx.com/close?op=1&pid=" + a.pid + "&mid=" + (a.mid || "") + "&crid=" + (a.crid || "") + "&_rnd=" + Math.random())
                }
                c.setAttr(b, "bindundo", "click")
            }), c.send("http://et.tanx.com/close?op=0&pid=" + a.pid + "&mid=" + (a.mid || "") + "&crid=" + (a.crid || "") + "&_rnd=" + Math.random()), b.appendChild(function() {
                var b = document.createElement("div");
                return b.id = "sxbg" + a.pid, b.style.cssText = "background:#fff;width:100%;height:100%;position:absolute;top:0;left:0;z-index:300;font-size:12px;", b.innerHTML = '<div style="height:' + (a.height - 40) + 'px;margin:20px;background:url(//gtms02.alicdn.com/tps/i2/TB1OdKXGXXXXXc6XVXXQ1v.IpXX-69-23.png) right bottom no-repeat;"><div style="line-height:1.5;font-size:14px;">\u5df2\u5c4f\u853d\uff0c\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01</div><a href="javascript:;" id="tanx-close-undo" style="color:#36c; text-decoration: none; border-bottom: 1px solid #36c; padding-bottom:1px;" data="' + a.pid + '">\u64a4\u9500</a><a href="http://tanx.com/web/content.html" target="_blank" style="margin-left:20px; color:#f40; text-decoration: none; border-bottom: 1px solid #f40; padding-bottom:1px;">\u4e86\u89e3\u8be6\u60c5</a></div>', b
            }()), !1
        })
    }, b.tmpl = function(a, b) {
        if ("201" == a.distype && (a.icon = ""), a.isx = a.icon ? "1" : "0", !a.icon&&!a.isx)
            return b;
        var c = function(b) {
            return b + a.pid
        }, d = "//gw.alicdn.com/tps/i3/T1dt7VXiRaXXbd25o5-110-18.png", e = "//gw.alicdn.com/tps/i2/", f = ["", e + "T1oY3VXmNbXXXb8qDc-26-18.png", e + "T1qOSyFmXfXXaAQWDc-26-17.png", e + "T1xfOxFnVfXXaAQWDc-26-17.png", e + "T14e9lFhNgXXaAQWDc-26-17.png", e + "T1kvGNFeRgXXaAQWDc-26-17.png"], g = f[parseInt(a.icon, 10)];
        g || (g = f[1]);
        var h = "";
        a.icon && (h += '<a id="' + c("icon") + '" title="&#25105;&#20063;&#35201;&#30003;&#35831;&#27249;&#31383;&#25512;&#24191;" target="_blank" href="http://c.alimama.com" style="overflow:hidden;width:26px;height:17px;right:' + ("1" === a.isx ? "18" : "0") + 'px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;">   <span id="' + c("icon_small") + '" style="float:none;width:26px;display:block;height:17px;background-repeat:no-repeat;background-image: url(\'' + g + "');*background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + g + '\');"></span>   <span id="' + c("icon_big") + '" style="float:none;width:110px;height:17px;display: none;background-repeat:no-repeat;background-image: url(\'' + d + "');*background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d + "');\"></span></a>");
        var i = "//gw.alicdn.com/tps/i4/TB1HRyeGXXXXXbRXXXX1DxgFpXX-17-17.png", j = "//gw.alicdn.com/tps/i3/TB1buFUGXXXXXcIXVXX1DxgFpXX-17-17.png";
        return "1" === a.isx && (h += '<a id="' + c("sx") + '" href="javascript:;" style="width:17px;height:17px;right:0px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;">   <span id="' + c("sx1") + '" style="float:none;width:17px;display:block;height:17px;background-repeat:no-repeat;background-image: url(\'' + i + "');*background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + i + '\');"></span>   <span id="' + c("sx2") + '" style="float:none;width:110px;height:17px;display: none;background-repeat:no-repeat;background-image: url(\'' + j + "');*background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + j + '\');"></span></a><div id="' + c("sxtip") + '" style="display:none;width:100px;position:absolute;right:0;bottom:17px;"><div style="width:100px; height:20px;background:#ddd;color:#666;line-height:1.5;text-align: center;">\u5c4f\u853d\u6b64\u63a8\u5e7f\u5185\u5bb9</div><div style="float:right;margin-right:6px;width: 0;height: 0;border-left: 3px solid transparent;border-right: 3px solid transparent;border-top: 6px solid #ddd;"></div></div>'), '<div id="tanxssp_con_' + a.pid + '" style="overflow:hidden;display:inline-block;position:relative;width:' + a.width + "px;height:" + a.height + "px;*display:inline;*zoom:1;" + (!a.adboardtype || "5" != a.adboardtype && "1" != a.adboardtyp && "8" != a.adboardtype ? "font:12px/1.5 tahoma,'Hiragino Sans GB','microsoft yahei',sans-serif;" : "") + '">' + b + h + "</div>"
    }
}), KSLITE.declare("tanxssp-otherwin", ["tanxssp-utils"], function(a, b) {
    var c = a("tanxssp-utils").encodeJs;
    b.writeData = function(a) {
        var b = "1", d = [];
        for (var e in a)
            a.hasOwnProperty(e) && d.push("distype" == e ? '"' + e + '":"' + b + '"' : "data" == e ? '"' + e + '":"' + c(a[e]) + '"' : '"' + e + '":"' + a[e] + '"');
        d = "{" + d.join(",") + "}";
        var f = "var TANXSSPFILE = 'http://cdn.tanx.com/t/tanxssp.js';var TANXSSPMAINFILE = 'http://cdn.tanx.com/t/tanxssp/main.js';var win = window;var head = win.document.getElementsByTagName(\"head\")[0];var s = win.document.createElement(\"script\");s.type = \"text/javascript\";s.charset = 'gbk';s.src = TANXSSPFILE;function callback() {    var s1 = win.document.createElement(\"script\");    s1.type =\"text/javascript\";    s1.charset = 'gbk';    s1.src = TANXSSPMAINFILE;    head.insertBefore(s1, head.lastChild);}s.onload = callback;s.onreadystatechange = function() {    if (s.readyState && (s.readyState == 'loaded' || s.readyState == 'complete')) {        callback();    }};head.insertBefore(s, head.lastChild);", g = "";
        return g += "<html>", g += "<head>", g += '<style type="text/css">*{margin:0;padding:0}</style>', g += '<script type="text/javascript">', g += "   window.tanx_ssp_temp_show_obj = " + d + ";", g += f, g += "</script>", g += "</head>", g += "<body>", g += '<a style="none" id="tanx-a-' + a.pid + '" style="display:none"></a>', g += "</body>", g += "</html>"
    }
}), KSLITE.declare("tanxssp-display-xuanting", ["tanxssp-utils", "tanxssp-config"], function(a, b) {
    var c = a("tanxssp-utils"), d = function(a, b) {
        if (b.outer) {
            var d = b.outer;
            b.holder && 1 === b.holder.nodeType ? this.holder = b.holder : (b.holder || (b.holder = b.outer + "_holder", d.insertAdjacentElement("afterend", '<a style="display:none;" id="' + b.holder + '"></a>')), this.holder = c.$(b.holder)), this.outer = d, this._fixed=!1, this.bindEvent(d)
        }
    };
    c.mix(d.prototype, {
        bindEvent: function(a) {
            var b = this, d = c.getOffset(a).top, e = c.now(), f = 1e3, g = document, h = function() {
                !b._fixed && c.now() - e > f && (d = c.getOffset(a).top, e = c.now());
                var h = g.body.scrollTop || g.documentElement.scrollTop;
                h > 0 && h >= d ? b.beforeFixed() : b.beforeStatic()
            };
            c.addEvent(window, "scroll", h), h(), b._events = {
                scroll: h
            }
        },
        beforeFixed: function() {
            var a = this;
            if (!a._fixed) {
                var b = a.outer, d = a.holder, e = c.getOffset(b);
                d.style.cssText = "display:block;width:" + b.offsetWidth + "px;height:" + b.offsetHeight + "px", c.fixedEl(b, {
                    top: 0,
                    left: e.left + "px"
                }), b.style.zIndex = "2147483647", a._fixed=!0
            }
        },
        beforeStatic: function() {
            var a = this;
            if (a._fixed) {
                var b = a.outer, d = a.holder;
                d.style.cssText = "display:none", c.deFixed(b), a._fixed=!1
            }
        },
        destroy: function() {
            var a = this;
            a.beforeStatic(), c.removeEvent(window, "scroll", a._events.scroll)
        }
    }), b.hasOne = null, b.Def = function(a, c) {
        return b.hasOne ? null : (b.hasOne = new d(a, c), !0)
    }
}), KSLITE.declare("tanxssp-display", ["tanxssp-template", "tanxssp-utils", "tanxssp-config", "tanxssp-icon", "tanxssp-otherwin", "tanxssp-cookiemap", "tanxssp-close", "tanxssp-display-xuanting"], function(a, b) {
    function c(a, b) {
        if (b.insertAdjacentHTML)
            b.insertAdjacentHTML("beforebegin", a);
        else {
            var c = document.createElement("div");
            c.innerHTML = a, b.parentNode.insertBefore(c.getElementsByTagName("iframe")[0], b)
        }
    }
    function d(a, b, d, e) {
        var f = "tanx_frameanchor_" + a, h = '<!doctype html><html><head><meta charset=gbk /></head><body style="margin:0px;padding:0px">' + e + "</body></html>";
        g.$(f)&&!function i(e) {
            if (e > 20)
                return !1;
            var j = "tanxssp-outer-iframe" + a, k = '<iframe id="' + j + '" width="' + b + '" height="' + d + '" style="display:none"', l = " src=\"javascript:void((function(){try{var d=document;d.open();d.domain='" + document.domain + "';d.write('');d.close();}catch(e){}})())\"", m = ' border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>', n = k;
            navigator.userAgent.toLowerCase().indexOf("msie")>-1 && document.domain != location.hostname && (n += l), n += m;
            var o = g.$(f);
            c(n, o), setTimeout(function() {
                try {
                    var a = document.getElementById(j), b = a.contentWindow.document;
                    b.open("text/html", "replace"), b.write(h), setTimeout(function() {
                        b.close()
                    }, 20), a.style.display = "", "none" == a.style.display && setTimeout(function() {
                        a.style.display = ""
                    }, 10)
                } catch (d) {
                    a.parentNode.removeChild(a), n = k + l + m, c(n, o), e ? e++ : e = 1, i(e)
                }
            }, 20)
        }()
    }
    function e(a, b, c) {
        this.frameCount = b, this.clickurl = c, this.pid = a, this.cur = 0, this.previous = 0, this.init()
    }
    var f = a("tanxssp-template").Def, g = a("tanxssp-utils"), h = a("tanxssp-config").c.mapAdType, i = a("tanxssp-config").r, j = a("tanxssp-config").c.mapDisType, k = a("tanxssp-icon"), l = a("tanxssp-otherwin"), m = a("tanxssp-cookiemap").Def, n = a("tanxssp-close"), o = a("tanxssp-display-xuanting").Def, p = {};
    g.mix(e.prototype, {
        interval: 2e3,
        timer: null,
        isAuto: !0,
        init: function() {
            this.show(0), this.start(), this.bindEvents()
        },
        stopBubble: function(a) {
            a = a ? a : window.event, a.stopPropagation ? a.stopPropagation() : a.cancelBubble=!0
        },
        bindEvents: function() {
            var a = g.$("tanx-sw-wrap-" + this.pid), b = this;
            a.onmouseover = function(a) {
                b.isAuto=!1, g.$("tanx-sw-nav-" + b.pid).style.display = "block", b.stopBubble(a)
            }, a.onmouseout = function(a) {
                b.isAuto=!0, g.$("tanx-sw-nav-" + b.pid).style.display = "none", b.stopBubble(a)
            };
            for (var c = 0; c < this.frameCount; c++)
                !function(a) {
                    var c = g.$("tanx-sw-nav-" + b.pid + a), d = g.$("tanx-sw-block-" + b.pid + a);
                    c.onmouseover = function() {
                        b.isAuto=!1, b.show(a)
                    }, c.onmouseout = function() {
                        b.isAuto=!0
                    }, d.onclick = function(a) {
                        a = window.event || a;
                        var c = a.srcElement || a.target;
                        try {
                            if ("A" != c.tagName.toUpperCase()) {
                                for (var d = 5; d > 0 && (c = c.parentNode, "A" != c.tagName.toUpperCase()); d--);
                                "A" != c.tagName.toUpperCase() && (c = 0)
                            }
                            if ("undefined" == typeof c.href && (c = 0), c) {
                                "A" == c.tagName.toUpperCase() && 0 !== c.getAttribute("href", 2).replace(/(^\s*)/g, "").indexOf("http") && (c = 0);
                                var e = (c.getAttribute("href", 2).replace(/(^\s*)/g, "").match(/http:\/\/([^\/]+)/i) || ["", ""])[1];
                                (new Image).src = decodeURIComponent(b.clickurl) + "&d_r=" + e + "_" + (new Date).getTime().toString().substr(9)
                            }
                            b.stopBubble(a)
                        } catch (f) {}
                    }
                }(c)
        },
        stop: function() {
            this.isAuto=!1
        },
        start: function() {
            var a = this;
            this.timer = setInterval(function() {
                if (!a.isAuto)
                    return !1;
                var b = a.cur + 1;
                b >= a.frameCount && (b = 0), a.show(b)
            }, this.interval)
        },
        show: function(a) {
            try {
                this.cur = a, this.hide(this.previous), g.$("tanx-sw-block-" + this.pid + a).style.display = "block", g.$("tanx-sw-nav-" + this.pid + a).className = "tanx-sw-nav-cur", this.previous = this.cur
            } catch (b) {}
        },
        hide: function(a) {
            try {
                g.$("tanx-sw-block-" + this.pid + a).style.display = "none", g.$("tanx-sw-nav-" + this.pid + a).className = ""
            } catch (b) {}
        }
    }), p.flash = function(b, c) {
        var e = g.tanxSId(b.pid), h = a("tanxssp-template").wrapTmpl(b, "<a style='display:none !important;' id='tanx_frameanchor_" + b.pid + "'></a>"), i = f(b);
        g.showAd(h, e, null, function() {
            d(b.pid, b.width, b.height, i), c && c()
        })
    }, p.iframehtml = function(a, b) {
        var c = g.tanxSId(a.pid);
        g.showAd(f(a), c, null, function() {
            d(a.pid, a.width, a.height, a.data), b && b()
        })
    }, p.multiframe = function(a, b) {
        var c = a, d = "#tanx-sw-nav-" + c.pid + " span", h = "text-decoration:underline;color:#F60;cursor:pointer;margin-left:3px;width:18px;height:18px;background:white;float:left;font-size:13px;line-height:18px;overflow:visible;text-align:center;opacity:.6;filter:alpha(opacity=60);border:1px solid #D8D8D8;margin-left:-1px;font-family:tahoma,arial;", i = "#tanx-sw-nav-" + c.pid + " span.tanx-sw-nav-cur", j = "background:#F60;color:white;font-weight:bold;opacity:1;filter:alpha(opacity=100);z-index:2;position:relative;", k = document;
        if (k.createStyleSheet) {
            var l = k.createStyleSheet();
            l.addRule(d, h), l.addRule(i, j)
        } else {
            var m = k.createElement("style");
            m.innerHTML = d + "{" + h + "}" + i + "{" + j + "}", m.setAttribute("type", "text/css");
            var n = k.getElementsByTagName("head")[0];
            n.insertBefore(m, n.firstChild)
        }
        var o = g.tanxSId(c.pid);
        g.showAd(f(a), o, null, function() {
            new e(a.pid, a.data.split("|+|").length || 0, a.clickurl), b && b()
        })
    };
    var q = {};
    q.popwin = function() {
        var a=!1;
        return function(b) {
            if (a)
                return !1;
            a=!0;
            var c = function() {
                var c = document, d = c.createElement("div"), e = g.$("tanxssp-outer-con" + b.pid);
                if (e || (e = g.$("tanxssp-outer-iframe" + b.pid)), !e)
                    return !1;
                d.style.cssText = "position:absolute;display:block;z-index:2147483647;height:0px;overflow:hidden;right:5px";
                var f = g.createCloseBtn();
                f.onclick = function() {
                    g.hide(d)
                }, d.appendChild(f), d.appendChild(e), document.body.insertBefore(d, null), a=!0;
                var h, i = 0, j = parseInt(b.height, 10);
                k.show(b), h = setInterval(function() {
                    var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, b = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
                    i += 30, i >= j && (i = j, clearInterval(h), d.style.overflow = "visible", setTimeout(function() {
                        g.fixedEl(d, {
                            top: "auto",
                            right: "5px",
                            bottom: "0px"
                        })
                    }, 0)), d.style.top = a + b - i + "px", d.style.height = i + "px"
                }, 125)
            };
            g.domReady(function() {
                setTimeout(function() {
                    var a = g.tanxSId(b.pid), d = h[b.adboardtype];
                    p[d] ? p[d](b, c) : g.showAd(f(b), a, null, c)
                }, 50)
            })
        }
    }(), q.backdisplay = function(a, b) {
        a.width < 254 && (a.width = 254), "" === a.width && (a.width = 760), "" === a.height && (a.height = 480);
        var c = "width=" + a.width + ",height=" + a.height + ",toolbar=no,location=no,directories=no,status=yes,resizable=no,scrollbars=no", d = l.writeData(a), e = function() {
            var a;
            if (window.attachEvent&&!window.opera)
                try {
                    var e = document.getElementById("tanx_popup_try") || document.createElement("iframe");
                    e.id = "tanx_popup_try", e.style.display = "none", document.body.insertBefore(e, document.body.childNodes[0]), document.getElementById("tanx_popup_try").contentWindow.document.write("."), document.body.removeChild(document.getElementById("tanx_popup_try")), a = window.open("about:blank", "_blank", c), e = null
            } catch (f) {
                a = window.open('javascript:void((function(){var d=document;d.open();d.domain="' + document.domain + '";d.write("");d.close();})())', "_blank", c)
            } else 
                a = window.open("about:blank", "_blank", c);
            navigator.userAgent.toLowerCase().indexOf("firefox")>-1 && (a.HTMLElement.prototype.insertAdjacentElement = function(a, b) {
                switch (a.toLowerCase()) {
                case"beforebegin":
                    this.parentNode.insertBefore(b, this);
                    break;
                case"afterbegin":
                    this.insertBefore(b, this.firstChild);
                    break;
                case"beforeend":
                    this.appendChild(b);
                    break;
                case"afterend":
                    this.nextSibling ? this.parentNode.insertBefore(b, this.nextSibling) : this.parentNode.appendChild(b)
                }
            }, a.HTMLElement.prototype.insertAdjacentHTML = function(a, b) {
                var c = this.ownerDocument.createRange();
                c.setStartBefore(this);
                var d = c.createContextualFragment(b);
                this.insertAdjacentElement(a, d)
            }), a.blur();
            try {
                a.opener.focus()
            } catch (g) {}
            if (b)
                a.location = b;
            else {
                var h = a.document;
                h.open("text/html", "replace"), h.write(d), h.close()
            }
        }, f = function() {
            g.removeEvent(document, "click", f);
            try {
                e()
            } catch (a) {
                g.domReady(h)
            }
        }, h = function() {
            g.addEvent(document, "click", f)
        };
        try {
            h()
        } catch (i) {
            setTimeout(function() {
                h()
            }, 2e3)
        }
    }, q.couplet = function() {
        return function(a) {
            function b(a) {
                return '<iframe id="' + a + '" width="' + t + '" height="' + s + '" border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>'
            }
            var c, d = document, e = i.isStrict ? d.documentElement.clientHeight: d.body.clientHeight, f = i.isStrict ? d.documentElement.clientWidth: d.body.clientWidth, h = {}, j = window.tanx_c || {}, k = j.webwidth;
            k && (c = (f - parseInt(k, 10)) / 2 - a.width), c = 0 > c || void 0 === c ? 5 : c;
            var m = j[a.pid] || {}, n = m.coupletTop && /^\d+\w{0,3}$/g.test(m.coupletTop) ? m.coupletTop: (301 > e ? "80" : "180") + "px";
            h.pos = {
                top: n
            };
            var o = d.createElement("div"), p = d.createElement("div");
            o.style.cssText = "position:absolute;display:block;z-index:2147483647;left:" + c + "px", p.style.cssText = "position:absolute;display:block;z-index:2147483647;right:" + c + "px";
            var q = "tanx_displayframe_" + a.pid + "_l", r = "tanx_displayframe_" + a.pid + "_r", s = a.height, t = a.width;
            o.innerHTML = b(q), p.innerHTML = b(r);
            var u = g.createCloseBtn(), v = g.createCloseBtn();
            u.onclick = v.onclick = function() {
                g.hide(o), g.hide(p)
            }, o.appendChild(u), p.appendChild(v);
            var w = document.body;
            w.insertBefore(o, w.firstChild), w.insertBefore(p, w.firstChild), g.fixedEl(o, h.pos), g.fixedEl(p, h.pos);
            var x = document.getElementById(q), y = document.getElementById(r), z = "javascript:void((function(){var d=document;d.open();d.domain='" + document.domain + "';d.write('');d.close();})())";
            navigator.userAgent.toLowerCase().indexOf("msie")>-1 && document.domain != location.hostname && (x.src = z, y.src = z);
            var A = l.writeData(a), B = 0;
            !function C() {
                if (B > 10)
                    return !1;
                B++;
                try {
                    setTimeout(function() {
                        var a = x.contentWindow.document;
                        a.open("text/html", "replace"), a.write(A), a.close();
                        var b = y.contentWindow.document;
                        b.open("text/html", "replace"), b.write(A), b.close()
                    }, 10)
                } catch (a) {
                    x.src = z, y.src = z, C()
                }
            }()
        }
    }(), q.xuanting = o, b.Def = function(a) {
        function b() {
            if (q[e]) {
                var b = {
                    outer: g.tanxOuter(a.pid),
                    holder: g.tanxId(a.pid)
                };
                q[e](a, b)
            }
        }
        var c = g.tanxSId(a.pid), d = h[a.adboardtype], e = j[a.distype];
        m(a.pid);
        var l=!1;
        if ("html" == d && "static" == e) {
            for (var o = 0, r = i.units.length; r > o; o++)
                if (i.units[o].i === a.pid) {
                    l = i.units[o].sync;
                    break
                }
            if (l) {
                document.write(f(a));
                try {
                    setTimeout(function() {
                        k.show(a)
                    }, 0)
                } catch (s) {}
            } else 
                g.showAd(f(a), c, null, function() {
                    setTimeout(function() {
                        k.show(a)
                    }, 0)
                });
            return !1
        }
        return "backdisplay" === e ? (q[e](a), !1) : "couplet" === e ? (q[e](a), !1) : "popwin" == e ? (q[e](a), !1) : (p[d] ? p[d](a, function() {
            setTimeout(function() {
                k.show(a), b()
            }, 0)
        }) : g.showAd(f(a), c, null, function() {
            setTimeout(function() {
                k.show(a), b()
            }, 0)
        }), void setTimeout(function() {
            n.show(a)
        }, 300))
    }
}), KSLITE.declare("tanxssp-template", ["tanxssp-utils", "tanxssp-config", "tanxssp-icon", "tanxssp-close"], function(a, b) {
    function c(a, b) {
        var c = e[a.adboardtype], d = f[a.distype];
        if ("html" == c && "static" == d)
            return b;
        if (a.adSpaceWidth && a.adSpaceHeight)
            return '<ins style="display:inline-block;overflow:hidden;text-align:left;padding:0;margin:0;border:1px solid #e5e5e5;width:' + a.adSpaceWidth + "px;height:" + a.adSpaceHeight + "px;*zoom:1;*display:inline;background:#F3F3F3;padding-left:" + a.paddingLeft + "px;padding-top:" + a.paddingTop + 'px" id="tanxssp-outer-con' + a.pid + '">' + b + "</ins>";
        var g, h;
        return g = parseInt(a.width, 10) <= 1 ? "auto" : a.width + "px", h = parseInt(a.height, 10) <= 1 ? "auto" : a.height + "px", '<ins style="display:inline-block;padding:0;margin:0;width:' + g + ";height:" + h + ';*zoom:1;*display:inline" id="tanxssp-outer-con' + a.pid + '">' + b + "</ins>"
    }
    var d = a("tanxssp-utils"), e = a("tanxssp-config").c.mapAdType, f = a("tanxssp-config").c.mapDisType, g = a("tanxssp-icon").tmpl, h = a("tanxssp-close").tmpl, i = {};
    i.txt = {
        tmpl: function(a) {
            return '<a href="' + a.clickurl + '" target="_blank">' + a.data + "</a>"
        }
    }, i.txtlink = i.txt, i.pic = {
        tmpl: function(a) {
            return '<a href="' + a.clickurl + '" target="_blank"><img border=0 src="' + a.data + '" width="' + a.width + 'px" height="' + a.height + 'px"/></a>'
        }
    }, i.tuwen = {
        tmpl: function(a) {
            var b = "pid=" + a.pid;
            return b =- 1 == a.data.indexOf("?") ? "?" + b : "&" + b, '<iframe src="' + a.data + b + '" width="' + a.width + 'px" height="' + a.height + 'px" border="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowTransparency="true"></iframe>'
        }
    }, i.flash = {
        tmpl: function(a) {
            var b = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + a.width + 'px" height="' + a.height + 'px" align="middle">   <param name="allowScriptAccess" value="' + ("1" == a.bannermaker ? "always" : "never") + '" />' + ("" !== a.fvs ? '<param name="flashvars" value="' + a.fvs + '" />' : "") + '   <param name="movie" value="' + a.data + '" />   <param name="wmode" value="transparent" />   <param name="quality" value="high" />   <param name="bgcolor" value="#ffffff" />   <embed src="' + a.data + '" quality="high" bgcolor="#ffffff" width="' + a.width + '" height="' + a.height + '" ' + ("" !== a.fvs ? 'flashvars="' + a.fvs + '" ' : "") + '      align="middle" allowScriptAccess="' + ("1" === a.bannermaker ? "always" : "never") + '" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>', c = '<!doctype html><html><head></head>  <body style="margin:0px;padding:0px">       <div style="float:left;z-index:100;position:absolute;width:' + a.width + "px;height:" + a.height + 'px;">' + b + '       </div>       <div style="float:left;overflow:hidden;z-index:1000;position:absolute;left:0;top:0;width:' + a.width + "px;height:" + a.height + 'px;">       <a style="position:absolute;height:100%;width:100%;overflow:hidden;font-size:900px;" target="_blank" href="' + a.clickurl + '">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div> </body></html>';
            return c
        }
    }, i.flashb = {
        tmpl: function(a) {
            a.fvs = a.fvs ? a.fvs + "&clickTAG=" + d.encode(a.clickurl) : "clickTAG=" + d.encode(a.clickurl);
            var b = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + a.width + 'px" height="' + a.height + 'px" align="middle">    <param name="allowScriptAccess" value="' + ("1" === a.bannermaker ? "always" : "never") + '" />    <param name="flashvars" value="' + a.fvs + '" />    <param name="movie" value="' + a.data + '" />    <param name="wmode" value="transparent" />    <param name="quality" value="high" />    <param name="bgcolor" value="#ffffff" />    <embed src="' + a.data + '" quality="high" bgcolor="#ffffff" width="' + a.width + '" height="' + a.height + '" flashvars="' + a.fvs + '" align="middle" allowScriptAccess="' + ("1" === a.bannermaker ? "always" : "never") + '" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
            return b
        }
    }, i.iframehtml = {
        tmpl: function(a) {
            return "<a style='display:none !important;' id='tanx_frameanchor_" + a.pid + "'></a>"
        }
    }, i.multiframe = {
        tmpl: function(a) {
            for (var b = a.data.split("|+|"), c = b.length, d = "", e = "", f = '<div id="tanx-sw-nav-' + a.pid + '" style="display:none;position:absolute;bottom:20px;right:10px;">{nav}</div>', g = '<div><div id="tanx-sw-wrap-' + a.pid + '" style="display:block;position:relative;width:' + a.width + "px;height:" + a.height + 'px; border:0;margin:0;">{block}</div></div>', h = 0; c > h; h++)
                d += '<div id="tanx-sw-block-' + a.pid + h + '" style="display:' + (0 === h ? "block" : "none") + ';position:absolute;top:0;left:0;">' + b[h] + "</div>", e += '<span id="tanx-sw-nav-' + a.pid + h + '" style="display:block;text-decoration:none">' + (h + 1) + "</span>";
            return f = f.replace(/{nav}/gi, e), g = g.replace(/{block}/gi, [d, f].join(""))
        }
    }, i.html = {
        tmpl: function(a) {
            return a.data
        }
    }, b.wrapTmpl = c;
    var j = "http://img.alimama.cn/defboards/domainbind/2/", k = {};
    d.each(["760x90", "468x60", "250x60", "728x90", "950x90", "658x60", "120x600", "336x280", "300x250", "290x200", "120x60", "100x100", "120x240", "160x600", "180x250", "250x300", "360x190", "250x250", "200x200"], function(a) {
        k[a] = j + a + ".jpg"
    }), b.Def = function(a) {
        "1" === a.unregist && (a.clickurl = "http://a.alimama.cn", a.data = k[a.width + "x" + a.height] ? k[a.width + "x" + a.height] : "http://img.alimama.cn/defboards/domainbind/2/200x200.jpg", a.distype = "1", a.adboardtype = "2");
        var b = e[a.adboardtype];
        return "0" === a.width && (a.width = "auto"), "0" === a.height && (a.height = "auto"), c(a, h(a, g(a, i[b].tmpl(a))))
    }
}), KSLITE.declare("tanxssp-lazy", ["tanxssp-utils", "tanxssp-show", "tanxssp-config"], function(a, b) {
    var c = a("tanxssp-show").show, d = a("tanxssp-config").r, e=!1;
    if (window.is_tanx_ssp_lazy && (location.host.indexOf("www.taobao.com") >= 0 || location.host.indexOf("tb-fp.taobao.com") >= 0 || location.host.indexOf("www.tmall.com") >= 0 || location.host.indexOf("www.daily.taobao.net") >= 0)) {
        e=!0;
        var f = window.tanx_ssp_lazy;
        if (window.tanx_ssp_lazy = {
            push: function(a) {
                var b = d.data[a];
                b || (d.laterShowData[a] = {
                    isRender: !1
                }), b&&!b.isRender && (c(b.data), b.isRender=!0)
            }
        }, f && f.length)
            for (var g = 0; g < f.length; g++)
                try {
                    tanx_ssp_lazy.push(f[g])
                } catch (h) {}
    }
    b.treatShow = function(a) {
        var b = a.pid;
        e ? d.data[b] || (d.data[b] = {
            isRender: !1,
            data: a
        }, d.laterShowData[b]&&!d.laterShowData[b].isRender && (tanx_ssp_lazy.push(b), d.laterShowData[b].isRender=!0)) : c(a)
    }
}), KSLITE.declare("tanxssp-ws2subway", ["tanxssp-config"], function(a, b) {
    var c = a("tanxssp-config").r;
    b.Def = function(a) {
        var b = document.__tanxdata__ || {}, d = (a.data.indexOf("?") > 0 ? "&" : "?") + "u=" + encodeURIComponent(c.getRef_url()) + "&r=" + encodeURIComponent(c.r) + "&t=" + a.tproduct + "&k=" + (b[a.pid] || "");
        ("2" == a.tproduct && "3" == a.icon || "4" == a.tproduct && a.data.match(/^<iframe /i)) && (a.data = a.data.replace(/src="(http:\/\/.*)?"/i, 'src="$1' + d + '"')), "3" == a.tproduct && (a.data += d)
    }
}), KSLITE.declare("tanxssp-close", ["tanxssp-utils"], function(a, b) {
    var c = a("tanxssp-utils"), d = {
        mm_2000078546_20134048_20158119: 1
    };
    b.list = d, b.isClose = function(a) {
        var b = c.getCookie(a);
        return d.hasOwnProperty(a) && b
    }, b.tmpl = function(a, b) {
        if (!d.hasOwnProperty(a.pid))
            return b;
        var c = '<a href="javascript:;" style="display:block;position:absolute;top:5px;right:5px;width:12px;height:12px;"><img tanxssp-close="' + a.pid + '" src="http://gtms01.alicdn.com/tps/i1/T1Ey6ZFaxeXXaKKoA_-11-11.png" border="0"></a>';
        return '<div id="tanxssp_col_' + a.pid + '" style="display:inline-block;position:relative;width:' + a.width + "px;height:" + a.height + 'px;*display:inline;*zoom:1">' + b + c + "</div>"
    }, b.show = function(a) {
        var b = c.$("tanxssp-outer-con" + a.pid);
        b && c.addEvent(b, "click", function(a) {
            var d = a.target;
            if (d && d.tagName && "img" == d.tagName.toLowerCase()) {
                var e = c.getAttr(d, "tanxssp-close");
                e && (c.setCookie(e, "1", 1), b.parentNode.removeChild(b))
            }
        })
    }
}), KSLITE.declare("tanxssp-activeview", ["tanxssp-utils", "tanxssp-params", "tanxssp-config"], function(a, b) {
    var c = a("tanxssp-utils"), d = a("tanxssp-params").pvid, e = a("tanxssp-config").r.ali, f = document, g = {
        isTobeCheck: function() {
            var a = Math.floor(1e3 * Math.random() + 1);
            return e || 2 !== a && 1 !== a?!1 : !0
        },
        viewPortSize: function() {
            var a = window, b = "inner";
            return "innerWidth"in window || (b = "client", a = f.documentElement || f.body), {
                vw: a[b + "Width"],
                vh: a[b + "Height"]
            }
        },
        pageSize: function() {
            var a = f.documentElement, b = f.body;
            return {
                pw: Math.max(a.clientWidth, b.clientWidth),
                ph: Math.max(a.clientHeight, b.clientHeight)
            }
        },
        pageVisibility: function() {
            var a;
            return "undefined" != typeof document.hidden ? a = "hidden" : "undefined" != typeof document.mozHidden ? a = "mozHidden" : "undefined" != typeof document.msHidden ? a = "msHidden" : "undefined" != typeof document.webkitHidden && (a = "webkitHidden"), function() {
                return a?~~!f[a] : - 1
            }
        }(),
        isIframe: function() {
            return ~~(window != top)
        },
        pageOpenTime: parseInt(new Date / 1e3, 10),
        adRect: function(a) {
            var b = {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            }, d = this.getAdEl(a);
            return d && (d.childNodes.length > 0 || "iframe" == d.tagName.toLowerCase()) && (b = d.getBoundingClientRect(), (void 0 === b.height || void 0 === b.width) && (b = c.mix({}, b), b.height = d.offsetHeight, b.width = d.offsetWidth)), b.top = Math.round(b.top), b.left = Math.round(b.left), b
        },
        adPosInPage: function(a) {
            var b = f.documentElement, c = f.body, d = b.scrollLeft || c.scrollLeft, e = b.scrollTop || c.scrollTop;
            return {
                wx: a.left + d,
                wy: a.top + e
            }
        },
        hashCode: function(a) {
            var b, c = 0;
            if (0 === a.length)
                return c;
            for (var d = 0; d < a.length; d++)
                b = a.charCodeAt(d), c = (c<<5) - c + b;
            return (c>>>0).toString(16)
        },
        bindEvents: function() {
            if (this.binded)
                return !1;
            var a = this;
            c.addEvent(window, "scroll", function() {
                a.walkList()
            }), this.binded=!0
        },
        checkListObj: {},
        walkListTimer: null,
        walkList: function() {
            function a(a) {
                var d = c.viewPortSize(), e = c.adRect(a), f = {
                    x: e.left,
                    y: e.top
                }, g = {
                    x: e.left + e.width,
                    y: e.top + e.height
                };
                (f.x >= 0 && f.x <= d.vw && f.y >= 0 && f.y <= d.vh || g.x >= 0 && g.x <= d.vw && g.y >= 0 && g.y <= d.vh) && (new b.checker(a), c.checkListObj[a]=!0)
            }
            this.walkListTimer && clearTimeout(this.walkListTimer);
            var c = this;
            this.walkListTimer = setTimeout(function() {
                for (var b in c.checkListObj)
                    if (c.checkListObj[b]!==!0) {
                        var d = c.getAdEl(b);
                        d ? a(b) : setTimeout(function() {
                            a(b)
                        }, 100)
                    }
            }, 50)
        },
        check: function(a) {
            this.isTobeCheck(a) && (this.bindEvents(), this.firstLog(a), this.isIframe() || (this.checkListObj[a]=!1, this.walkList()))
        },
        firstLog: function(a) {
            var b = this.isIframe(), e = {
                ah: 0,
                ai: b,
                aw: 0,
                gtm: parseInt(new Date / 1e3, 10),
                mo: 0,
                pid: a,
                ta: 0,
                vh: 0,
                vw: 0,
                vx: 0,
                vy: 0,
                wx: 0,
                wy: 0,
                pw: 0,
                ph: 0
            }, f = "", g = ["gtm", "aw", "ah", "vw", "vh", "wx", "wy", "vx", "vy", "mo", "ta", "ai", "pw", "ph"], h = [];
            f += "p=" + d, f += "&s=0", f += "&o=" + this.pageOpenTime, f += "&i=" + a, f += "&f=" + g.join(","), f += "&r=", c.each(g, function(a) {
                h.push(e[a])
            }), f += h.join(",");
            var i = this.hashCode(f);
            f += "&h=" + i, this.send(f)
        },
        cacheAdEl: {},
        getAdEl: function(a) {
            if (this.cacheAdEl[a])
                return this.cacheAdEl[a];
            for (var b = f.getElementById("tanx-a-" + a), d = b, e = 0; d && "none" == c.css(d, "display") && (e++, 6 !== e);)
                if (d = d.previousSibling)
                    for (; 1 !== d.nodeType && (d = d.previousSibling, e++, 6 !== e););
            if (d === b || null === d) {
                var g = f.getElementById("tanxssp-outer-con" + a) || f.getElementById("tanx_displayframe_" + a + "_l");
                if (!g)
                    return null;
                d = g
            }
            return this.cacheAdEl[a] = d, d
        },
        canSend: function(a) {
            if (0 === a)
                return 0;
            if (1 == a)
                return 1;
            var b = Math.log(a) / Math.log(2);
            return ~~(parseInt(b, 10) === b)
        },
        buildQuery: function(a) {
            var b = "", d = ["gtm", "aw", "ah", "vw", "vh", "wx", "wy", "vx", "vy", "mo", "ta", "ai", "pw", "ph"];
            b += "p=" + a[0].pvid, b += "&s=" + a[0].startTime, b += "&o=" + this.pageOpenTime, b += "&i=" + a[0].pid, b += "&f=" + d.join(","), c.each(a, function(a) {
                b += "&r=";
                var e = [];
                c.each(d, function(b) {
                    e.push(a[b])
                }), b += e.join(",")
            });
            var e = this.hashCode(b);
            return b += "&h=" + e
        },
        send: function(a) {
            var b = window["tanxssp-feedback-cache"] || (window["tanxssp-feedback-cache"] = {}), c = new Image, d = "av_" + Math.floor(1e4 * Math.random()), e = "http://activeview.tanx.com/t?" + a;
            b[d] = c, c.onload = c.onerror = function() {
                c.onload = c.onerror = null, c = null, delete b[d]
            }, c.src = e
        }
    };
    b.checker = function(a) {
        this.pid = a, this.hasMouseover=!1, this.checkIndex = 0, this.maxCheck = 33, this.dataStack = [], this.pvid = d, this.timer = null, this.startTime = null;
        var e = this, f = g.getAdEl(a);
        return f ? (e.mouseListener = function() {
            e.hasMouseover=!0
        }, c.addEvent(f, "mouseover", e.mouseListener), void e.check()) : (setTimeout(function() {
            new b.checker(a)
        }, 250), !1)
    }, b.checker.prototype.check = function() {
        if (this.checkIndex == this.maxCheck)
            return clearTimeout(this.timer), !1;
        var a = this, b = g, e = b.adRect(a.pid), f = {
            pid: a.pid,
            pvid: d,
            gtm: parseInt(new Date / 1e3, 10),
            aw: e.width,
            ah: e.height,
            ai: b.isIframe(),
            vx: e.left,
            vy: e.top,
            ta: b.pageVisibility(),
            mo: ~~a.hasMouseover
        };
        this.startTime || (this.startTime = f.gtm), f.startTime = a.startTime, c.mix(f, b.adPosInPage(e)), c.mix(f, b.viewPortSize()), c.mix(f, b.pageSize()), a.dataStack.push(f), a.hasMouseover=!1, b.canSend(a.checkIndex) && (b.send(b.buildQuery(a.dataStack)), a.dataStack = []), a.checkIndex++, a.timer = setTimeout(function() {
            a.check()
        }, 1e3)
    }, c.mix(b, g)
}), function() {
    if (window.tanx_ssp_temp_adobj) {
        var a = window.tanx_ssp_temp_adobj;
        try {
            window.tanx_ssp_temp_adobj = null, delete window.tanx_ssp_temp_adobj
        } catch (b) {}
        KSLITE.provide(["tanxssp-main"], function(b) {
            b("tanxssp-main").run(a)
        })
    }
    if (window.tanx_ssp_temp_show_obj) {
        var c = window.tanx_ssp_temp_show_obj;
        try {
            window.tanx_ssp_temp_show_obj = null, delete window.tanx_ssp_temp_show_obj
        } catch (b) {}
        try {
            KSLITE.provide(["tanxssp-display"], function(a) {
                a("tanxssp-display").Def(c)
            })
        } catch (b) {}
    }
}();
