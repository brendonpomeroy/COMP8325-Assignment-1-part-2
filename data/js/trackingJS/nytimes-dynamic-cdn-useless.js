DY.Util = (function() {
    var q = false;
    var l = true;
    var A = false;
    var x = "2.89";
    function m() {
        if (isNaN(x)) {
            return "-1"
        } else {
            return x
        }
    }
    function c(D) {
        var B;
        var C = 0;
        if (D.length == 0) {
            return C
        }
        for (B = 0; B < D.length; B++) {
            var E = D.charCodeAt(B);
            C = ((C<<5) - C) + E;
            C = C & C
        }
        return C
    }
    function v(C, B) {
        setTimeout(C, B)
    }
    function u() {
        DY.DataCollection.initTimer();
        j()
    }
    function z() {
        DY.DataCollection.updateTimer()
    }
    function o() {
        A = true;
        b()
    }
    function t() {
        A = false
    }
    function j() {
        if (DY.WindowActions.inFocus()) {
            DY.DataCollection.visitSiteTimer()
        }
        setTimeout(j, 1000)
    }
    function b() {
        if (A && DY.WindowActions.inFocus()) {
            DY.DataCollection.visitAdHoverTimer()
        }
        setTimeout(b, 100)
    }
    function f(B, C) {
        DY.DataCollection.visitClick(B, C)
    }
    function g(D) {
        return true;
        var B = false;
        var E = 1000;
        if (D > E) {
            return false
        }
        var C = Math.floor(Math.random() * E);
        if (C + (E / D) >= E) {
            B = true
        }
        C = null;
        return B
    }
    function y(D, B, C) {
        return Math.floor((B - D) / (C * 1000))
    }
    function r() {
        result = a("", true);
        return result
    }
    function a(E, D) {
        if (typeof E == "undefined") {
            E = ""
        }
        var C;
        var B = function(F, G) {
            F = parseInt(F, 10).toString(16);
            if (G < F.length) {
                return F.slice(F.length - G)
            }
            if (G > F.length) {
                return Array(1 + (G - F.length)).join("0") + F
            }
            return F
        };
        if (!this.php_js) {
            this.php_js = {}
        }
        if (!this.php_js.uniqidSeed) {
            this.php_js.uniqidSeed = Math.floor(Math.random() * 123456789)
        }
        this.php_js.uniqidSeed++;
        C = E;
        C += B(parseInt(new Date().getTime() / 1000, 10), 8);
        C += B(this.php_js.uniqidSeed, 5);
        if (D) {
            C += (Math.random() * 10).toFixed(8).toString()
        }
        return C
    }
    function i(B) {
        var C = {};
        B.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(E, D, G, F) {
            C[D] = F
        });
        return C
    }
    function h(C) {
        if (q) {
            try {
                console.log(C)
            } catch (B) {}
        }
    }
    function w(B) {
        return B.substr(B.indexOf("://") + 3)
    }
    function n(B) {
        if (B == null || B == "") {
            return B
        }
        return B.split("?")[0].split("#")[0]
    }
    function e(C, B) {
        var E = new Date();
        var D = E.getTime();
        if ((D - C) > B) {
            return true
        } else {
            return false
        }
    }
    function k(B) {
        return B.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    function d(E, C) {
        var F = false;
        var H = document.styleSheets[document.styleSheets.length - 1];
        if (H != null) {
            var G = (H.cssRules != undefined) ? H.cssRules: H.rules;
            if (G != null) {
                if (H.insertRule) {
                    H.insertRule(E + "{" + C + "}", G.length);
                    F = true
                } else {
                    if (H.addRule) {
                        H.addRule(E, C, G.length);
                        F = true
                    }
                }
            }
        }
        if (!F) {
            var B = document.getElementsByTagName("head")[0];
            var D = document.createElement("style");
            D.type = "text/css";
            if (D.styleSheet) {
                D.styleSheet.cssText = E + "{" + C + "}"
            } else {
                D.appendChild(document.createTextNode(E + "{" + C + "}"))
            }
            B.appendChild(D)
        }
    }
    function s() {
        var B = new Date();
        return B.getHours() + ":" + B.getMinutes()
    }
    return {
        prod: l,
        debug: q,
        startSiteTimer: u,
        stopSiteTimer: z,
        startAdHoverTimer: o,
        stopAdHoverTimer: t,
        monitorAdClick: f,
        getFrequency: y,
        hash: c,
        getUID: r,
        retry: v,
        checkCall: g,
        parseQuery: i,
        log: h,
        removeHttp: w,
        verifyInterval: e,
        stripQueryStringAndHashFromPath: n,
        efr: k,
        addCss: d,
        lts: s,
        sop: "dy_smart",
        ver: m
    }
})();
DY.ExpStorageUtils = (function() {
    var c = false;
    var r = 60 * 60 * 24 * 30 * 4;
    var h = false;
    var b = function(s) {
        return new RegExp("(?:^|;)\\s?" + s + "=(.*?)(?:;|$)", "i")
    };
    var d = function(s, w, v, u, t) {
        return s + "=" + escape(w) + (v ? ";expires=" + v : "") + (u ? ";path=" + u : "") + (t ? ";domain=" + t : ";domain=" + document.domain)
    };
    function j() {
        var s = document.domain.split(".");
        if (s.length < 2 || /^([0-9]+\.){3}[0-9]+$/.test(document.domain)) {
            return document.domain
        } else {
            return /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(document.domain)[0]
        }
    }
    function l(t) {
        var s = document.cookie.match(b(t));
        if (s) {
            return (unescape(s[1]))
        }
        return null
    }
    function n(t, v, s, w, u) {
        var x = new Date();
        x.setDate(x.getDate() + s);
        document.cookie = d(t, v, (s == null) ? null : x.toGMTString(), w, u)
    }
    function f(s, u, t) {
        if (this.getCookie(s)) {
            document.cookie = d(s, "", "Thu, 01-Jan-1970 00:00:01 GMT", u, t)
        }
    }
    function m(s, t) {
        try {
            if (window.localStorage) {
                window.localStorage.setItem(s, t);
                if (c) {
                    n(s, t, r, "/", j())
                }
            } else {
                n(s, t, r, "/", j())
            }
        } catch (u) {}
    }
    function g(s, u) {
        if (!c&&!h) {
            try {
                var t = l(DY.ExpUtils.storageKey);
                if (t != null && t.length > 0) {
                    c = true
                }
            } catch (v) {}
            h = true
        }
        m(s, u)
    }
    function k(t) {
        var s = null;
        try {
            if (window.localStorage) {
                if (c) {
                    s = l(t)
                }
                if (typeof s == "undefined" || s == null) {
                    s = window.localStorage.getItem(t)
                }
            } else {
                s = l(t)
            }
        } catch (u) {}
        return s
    }
    function q(s) {
        try {
            if (window.localStorage) {
                window.localStorage.removeItem(s);
                if (c) {
                    f(s, "/", j())
                }
            } else {
                f(s, "/", j())
            }
        } catch (t) {}
    }
    function a(s, t) {
        try {
            if (window.sessionStorage) {
                window.sessionStorage.setItem(s, t);
                if (c) {
                    n(s, t, 0, "/", j())
                }
            } else {
                m(s, t)
            }
        } catch (u) {}
    }
    function i(t) {
        var s = null;
        try {
            if (window.sessionStorage) {
                if (c) {
                    s = l(t)
                }
                if (typeof s == "undefined" || s == null) {
                    s = window.sessionStorage.getItem(t)
                }
            } else {
                s = k(t)
            }
        } catch (u) {}
        return s
    }
    function o() {
        c = true
    }
    function e() {
        try {
            if (window.localStorage) {
                return c
            } else {
                return true
            }
        } catch (s) {
            return false
        }
    }
    return {
        getLocal: k,
        setLocal: m,
        setDetected: g,
        isC: e,
        removeLocal: q,
        getSLD: j,
        enableCookies: o
    }
})();
DY.ExpUtils = (function() {
    var e = "0";
    var b = "1";
    var i = "2";
    var n = "0";
    var h = "1";
    var q = "2";
    var o = "3";
    var a = "4";
    var l = "_dyexps";
    var c = "_dy_att_exps";
    var g = "##";
    var k = "|";
    var m = ":";
    var j = ",";
    var f = "-1";
    function d(t, x, z, y) {
        if (typeof(z) === "undefined" || z == null || z.length <= 0) {
            return t
        }
        var s = new Array();
        if (typeof(t) !== "undefined" && t != "" && t != null) {
            s = t.split(g)
        }
        var v = false;
        var r = x + k + z + k + y + k + i;
        for (var w = 0; w < s.length; w++) {
            var u = s[w].split(k);
            if (x == u[0]) {
                s[w] = r;
                v = true;
                break
            }
        }
        if (!v) {
            s.push(r);
            v = true
        }
        return v ? s.join(g) : t
    }
    return {
        expSep: g,
        dataSep: k,
        verSep: m,
        variSep: j,
        notInExp: f,
        storageKey: l,
        storageAttKey: c,
        attributeVariations: d,
        SELECTION_AND_ATTRIBUTION: e,
        SELECTION: b,
        ATTRIBUTION: i,
        SUB_MECHANISM_NA: n,
        SUB_MECHANISM_CG_WITH_PREDICT: h,
        SUB_MECHANISM_CG_WITHOUT_PREDICT: q,
        SUB_MECHANISM_REWEIGHT_EXPLORE: o,
        SUB_MECHANISM_REWEIGHT_KICK_IN: a
    }
})();
DY.Predict = (function() {
    var a = "_dyprd";
    var h = "_dyprdobj";
    var l = "|";
    var b = ",";
    var n = "NP";
    var k = "NE";
    function m(r, q) {
        return r + l + q
    }
    function i(s, t, r) {
        var u = m(t, r);
        if (typeof s != "undefined" && s != null) {
            if (s.hasOwnProperty(u)) {
                var q = s[u];
                return q
            }
            return k
        }
        return n
    }
    var d = function(s, r) {
        var q = new Object();
        q.varIdArr = typeof s !== "undefined" ? s : null;
        q.smechArr = typeof r !== "undefined" ? r : null;
        q.toString = function() {
            return DY.StringUtils.skv({
                varIdArr: this.varIdArr,
                smechArr: this.smechArr
            })
        };
        return q
    };
    function f() {
        var r = {};
        if (typeof DY.prd != "undefined" && DY.prd != null) {
            for (var s = 0; s < DY.prd.length; s++) {
                var q = DY.prd[s];
                var t = m(q.expId, q.verId);
                r[t] = q.vars
            }
            return r
        }
    }
    function c() {
        var s = {};
        if (typeof DY.prd != "undefined" && DY.prd != null) {
            for (var t = 0; t < DY.prd.length; t++) {
                var r = DY.prd[t];
                var u = m(r.expId, r.verId);
                var q = d(r.vars, r.smech);
                s[u] = q
            }
            return s
        }
    }
    function j(t, s) {
        var q = c();
        var r = i(q, t, s);
        if (r == n) {
            return undefined
        }
        if (r == k) {
            return []
        }
        return r
    }
    function o(w, u) {
        var r = window.DY.ResourceUtils.getLocalStorage(h);
        if (typeof r !== "undefined" && r != null && r != "") {
            var t = window.DY.StringUtils.pkv(r);
            var s = i(t, w, u);
            if (s == n) {
                return null
            }
            if (s == k) {
                var q = d([], null);
                return q
            }
            var v = window.DY.StringUtils.pkv(s);
            var q = d(null, null);
            if (typeof v.varIdArr !== "undefined" && v.varIdArr != null && v.varIdArr.length > 0) {
                q.varIdArr = v.varIdArr.split(b)
            }
            if (typeof v.smechArr !== "undefined" && v.smechArr != null && v.smechArr.length > 0) {
                q.smechArr = v.smechArr.split(b)
            }
            return q
        }
        return null
    }
    function e() {
        try {
            var r = c();
            if (typeof r !== "undefined" && r != null) {
                var u = window.DY.StringUtils.skv(r);
                window.DY.ResourceUtils.setLocalStorage(h, u)
            } else {
                window.DY.ResourceUtils.removeLocalStorage(h)
            }
            var s = f();
            if (typeof s !== "undefined" && s != null) {
                var q = window.DY.StringUtils.skv(s);
                window.DY.ResourceUtils.setLocalStorage(a, q)
            } else {
                window.DY.ResourceUtils.removeLocalStorage(a)
            }
        } catch (t) {}
    }
    function g(t, s) {
        try {
            var q = j(t, s);
            if (q == null) {
                return o(t, s)
            } else {
                return q
            }
        } catch (r) {}
    }
    return {
        updatePredictStorage: e,
        getPrediction: g
    }
})();
DY.ResourceUtils = (function() {
    function d(f, g) {
        try {
            if (window.localStorage) {
                window.localStorage.setItem(f, g)
            }
        } catch (h) {}
    }
    function c(f) {
        try {
            if (window.localStorage) {
                return window.localStorage.getItem(f)
            }
        } catch (g) {}
    }
    function b(f) {
        try {
            if (window.localStorage) {
                window.localStorage.removeItem(f)
            }
        } catch (g) {}
    }
    function a(f, g) {
        try {
            if (window.sessionStorage) {
                window.sessionStorage.setItem(f, g)
            }
        } catch (h) {}
    }
    return {
        setLocalStorage: d,
        getLocalStorage: c,
        removeLocalStorage: b,
        setSessionStorage: a
    }
})();
DY.StringUtils = (function() {
    function a(h) {
        var f = h.split(".");
        var d = {};
        for (var e = 0; e < f.length; e++) {
            var g = f[e].split("@");
            d[g[0]] = g[1] == "nu" ? null : g[1].replace(/\%1\%/g, "@").replace(/\%0\%/g, ".")
        }
        return d
    }
    function c(f) {
        var e = [];
        for (var d in f) {
            e.push(d + "@" + ((f[d] == null) ? "nu" : f[d].toString().replace(/\./g, "%0%").replace(/\@/g, "%1%")))
        }
        return e.join(".")
    }
    function b(d) {
        return !isNaN(parseFloat(d)) && isFinite(d)
    }
    return {
        pkv: a,
        skv: c,
        isN: b
    }
})();
DY.AdDetection = (function() {
    var f = false;
    var ao = false;
    var ae = 0;
    var t = "";
    var L = 60;
    var d = 60;
    var ab = "dygoogad";
    var U = "dyad";
    var j = "dycustom";
    var I = "dyfbframe";
    var R = "dyslot";
    var M = "dyperf";
    var q = "dyaffil";
    var S = "dysocial";
    var w = "dyslider";
    var a = "dylinkad";
    var l = "dysponse";
    var P = "dyexchange";
    var V = "dyother";
    var y = "dyprem";
    var u = "dyprom";
    var G = "dyhouse";
    var i = "dycontent";
    var v = "dy-content";
    var af = "dy-article";
    var C = ".dy_unit,.dy-unit,.dyunit";
    var J = "." + ab + ",." + U + ",." + j + ",." + I + ",." + R + ",." + M + ",." + q + ",." + S + ",." + w + ",." + a + ",." + l + ",." + P + ",." + V + ",." + y + ",." + u + ",." + G + ",[class*=" + I + "]";
    var ac = "." + i;
    var O = "dyMonitor";
    var e = false;
    function F() {
        var aq = "";
        aq = "." + O;
        return aq
    }
    function s() {
        var aq = "";
        aq = J;
        return aq
    }
    function ad() {
        var aq = "";
        aq = ac;
        return aq
    }
    function ai() {
        f = false;
        top.focus()
    }
    function H() {
        DY.WindowActions.onUnHover("onAd");
        ao = false
    }
    function x() {
        f = true
    }
    function N() {
        DY.WindowActions.onHover("onAd");
        t = this;
        ao = true
    }
    function Y() {
        if (f && ao) {
            DY.DataCollection.visitClick(t, false)
        }
    }
    function al(aq) {
        try {
            k("Ad >> CLICK " + aq.which + "<< detected. ");
            if (aq.which == 1) {
                DY.WindowActions.onClick("onAd", this)
            } else {
                DY.WindowActions.onRightClick("onAd", this)
            }
            g(this, aq.which)
        } catch (ar) {}
    }
    function g(at, ar) {
        var aq = $dy(at).parents(F());
        if (aq.length > 0) {
            $dy(aq).trigger({
                type: "mousedown",
                which: ar
            })
        }
    }
    function h(au) {
        var aq = "";
        if (au != null && typeof(au) != "undefined" && au != "") {
            var at = au.split(" ");
            for (var ar = 0; ar < at.length; ar++) {
                if (at[ar].length > 3 && (at[ar].substring(0, 3) == "dy_" || at[ar].substring(0, 3) == "dy-") && at[ar] != "dy_unit") {
                    aq = at[ar].substring(3, at[ar].length);
                    break
                }
            }
        }
        return aq
    }
    function am(at) {
        var aq = false;
        var ar = $dy(at).parents();
        if (ar.hasClass(O)) {
            var au = $dy(at).parents(F());
            if (ap(au[0])) {
                aq = false
            } else {
                aq = true
            }
        }
        return aq
    }
    function r(at) {
        var aq = false;
        var au = F();
        var ar = $dy(at).find(au);
        if (ar.length > 0) {
            aq = true
        }
        return aq
    }
    function ap(ar) {
        var aq = false;
        var at = $dy(ar).attr("class");
        if (typeof at !== "undefined" && at.indexOf(DY.Util.sop)!==-1) {
            aq = true
        }
        return aq
    }
    function Q(at) {
        try {
            var aq = $dy(at);
            if (aq.position().top < 0) {
                return false
            } else {
                if (aq.height() > 10) {
                    return true
                }
                if (aq.height() > 0) {
                    return false
                }
                var au = false;
                aq.find("*:visible").each(function() {
                    if ($dy(this).height() > 10) {
                        au = true;
                        return false
                    }
                });
                return au
            }
        } catch (ar) {
            return false
        }
    }
    function k(aq) {}
    function W() {
        T(ah)
    }
    function T(aq) {
        $dy(document).ready(aq)
    }
    function ah() {
        B();
        var ar = $dy('iframe[class*="dyMonitor"],[class*="dyMonitor"] iframe');
        A(ar);
        var at = F();
        var aq = $dy(at);
        ak(aq)
    }
    function B() {
        var ar = E();
        var aq = $dy(ar).find("[data-" + af + "]");
        ag(ar, aq);
        DY.Util.log("marked" + ar.length + "elements and " + aq.length + "articles");
        return ar
    }
    function D() {
        var aq = B();
        A($dy(aq).filter("iframe"));
        A($dy(aq).find("iframe"));
        ak(aq);
        if (DY.DataCollection.isDone()) {
            DY.DataCollection.li(DYWork.abd, aq)
        }
    }
    function A(aq) {
        $dy(aq).mouseover(x);
        $dy(aq).mouseout(ai);
        $dy(window).unbind("blur.dyiframe");
        $dy(window).bind("blur.dyiframe", Y)
    }
    function ag(ar, aq) {
        $dy(aq).mousedown(function(au) {
            k("Content >> CLICK " + au.which + "<< detected. ");
            try {
                var at = $dy(au.target).closest("[data-" + af + "]");
                var av = "";
                var aA = "";
                var az;
                if (at.length === 1) {
                    if (at[0].tagName === "A" && at[0].getAttribute("href") !== "" && at[0].getAttribute("href") !== "#") {
                        av = at[0].href
                    } else {
                        var ay = at[0].getElementsByTagName("a");
                        if (ay.length > 0) {
                            for (az = 0; az < ay.length; az++) {
                                if (ay[az].getAttribute("href") !== "" && ay[az].getAttribute("href") !== "#") {
                                    av = ay[az].href;
                                    break
                                }
                            }
                        } else {
                            var ax = $dy(at[0]).closest("a");
                            if (ax.length > 0 && ax[0].getAttribute("href") !== "" && ax[0].getAttribute("href") !== "#") {
                                av = ax[0].href
                            }
                        }
                    }
                    aA = at[0].getAttribute("data-" + af);
                    DY.DataCollection.setLink(av);
                    DY.DataCollection.setPos(aA)
                }
            } catch (aw) {}
        });
        $dy(ar).mouseover(N);
        $dy(ar).mouseout(H);
        $dy(ar).mousedown(al)
    }
    function ak(at) {
        var aq = [];
        for (var ar = 0; ar < at.length; ar++) {
            if (K(at[ar], true)) {
                DY.DataCollection.iv(at[ar])
            } else {
                aq.push(at[ar])
            }
        }
        $dy(aq).one("inview", function(aw, av, au, ax) {
            if (av) {
                DY.DataCollection.iv($dy(this));
                if (ax == "top") {} else {
                    if (ax == "bottom") {} else {}
                }
            } else {}
        })
    }
    function c(ar, aq) {
        if (aq) {
            $dy(ar).mouseover(x);
            $dy(ar).mouseout(ai)
        } else {
            $dy(ar).mouseover(N);
            $dy(ar).mouseout(H);
            $dy(ar).mousedown(function(at) {
                k("Ad >> CLICK " + at.which + "<< detected. ");
                if (at.which == 1) {
                    DY.WindowActions.onClick("onAd", this)
                }
            })
        }
    }
    function K(av, ar) {
        var at = $dy(av).offset(), au = $dy(av).height(), aq = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (at.top + au < aq) {
            return ar
        } else {
            return !ar
        }
    }
    function aj(ax) {
        var aw = F();
        var au = $dy(aw);
        if (ax) {
            var av = document.createElement("div");
            av.id = "dyMarkCont";
            document.body.appendChild(av);
            for (var at = 0; at < au.length; at++) {
                var ar = document.createElement("div");
                var aq = h(au[at].className);
                if (aq != "") {
                    ar.className = "MK" + aq;
                    ar.style.width = $dy(au[at]).width() + "px";
                    ar.style.height = $dy(au[at]).height() + "px";
                    ar.style.top = $dy(au[at]).offset().top + "px";
                    ar.style.left = $dy(au[at]).offset().left + "px";
                    document.getElementById("dyMarkCont").appendChild(ar)
                }
            }
        }
        return au
    }
    function an(ar) {
        for (var au = 0; au < ar.length; au++) {
            try {
                var aq = $dy(ar[au]);
                if (typeof(aq) == "undefined" || aq == null || aq == "") {
                    continue
                } else {
                    var av = $dy(ar[au]).attr("data-adid");
                    if (typeof(av) == "undefined" || av == "") {
                        $dy(ar[au]).attr("data-adid", au + "||" + Math.round($dy(ar[au]).offset().top) + "|||")
                    } else {
                        if (av.split("|").length == 1) {
                            $dy(ar[au]).attr("data-adid", av + "||" + Math.round($dy(ar[au]).offset().top) + "|||")
                        } else {
                            if (av.split("|").length == 2) {
                                $dy(ar[au]).attr("data-adid", av + "|" + Math.round($dy(ar[au]).offset().top) + "|||")
                            }
                        }
                    }
                }
            } catch (at) {}
        }
    }
    function E() {
        var aq = [];
        try {
            aq = X(false);
            an(aq);
            e = true
        } catch (ar) {}
        return aq
    }
    function X(at) {
        var aq = [];
        try {
            aq = m(at, aq);
            aq = aa(at, aq);
            aq = n(at, aq);
            aq = z(at, aq)
        } catch (ar) {}
        return aq
    }
    function z(ay, aq) {
        var at;
        at = $dy("[data-dy-unit]");
        for (var aw = 0; aw < at.length; aw++) {
            if (!$dy(at[aw]).hasClass(O) && (ap(at[aw]) || Q(at[aw]))) {
                var ax = at[aw].getAttribute("data-dy-unit");
                if (ax != "") {
                    $dy(at[aw]).attr("data-adid", ax);
                    var av = at[aw].getAttribute("data-dy-type");
                    if (av === "content") {
                        var ar = $dy(at[aw]).find("[data-dy-subunit]");
                        for (var au = 0; au < ar.length; au++) {
                            ar[au].setAttribute("data-" + af, au + 1)
                        }
                    } else {
                        if (av === "") {
                            av = "other"
                        }
                    }
                    $dy(at[aw]).addClass("dy_unit dy" + av.toLowerCase() + " " + O);
                    aq.push(at[aw])
                }
            }
        }
        return aq
    }
    function n(ax, aq) {
        var aw = $dy(C);
        for (var au = 0; au < aw.length; au++) {
            if (!$dy(aw[au]).hasClass(O) && (ap(aw[au]) || (Q(aw[au])&&!am(aw[au])&&!r(aw[au])))) {
                var ar = aw[au].id;
                if (ar == "") {
                    ar = h(aw[au].className)
                }
                var av = $dy(aw[au]).parent();
                $dy(aw[au]).attr("data-adid", ar);
                $dy(aw[au]).addClass(V + " " + O);
                aq.push(aw[au]);
                if (ax) {
                    var at = document.createElement("div");
                    at.className = "MK" + ab;
                    at.style.width = $dy(aw[au]).width() + "px";
                    at.style.height = $dy(aw[au]).height() + "px";
                    if (typeof($dy(iframes[au]).offset()) != "undefined") {
                        at.style.top = $dy(aw[au]).offset().top + "px";
                        at.style.left = $dy(aw[au]).offset().left + "px"
                    }
                    av[0].appendChild(at)
                }
            }
        }
        return aq
    }
    function m(ax, ar) {
        if (typeof(DY.adUrlSelectors) != "undefined" && DY.adUrlSelectors.length > 0) {
            var au = DY.adUrlSelectors;
            for (var at = 0; at < au.length; at++) {
                var aq = au[at];
                var av = [];
                var aw = DY.Util.removeHttp(DY.Detectors.loc);
                if (aq.urlMatchType == "start" && aw.substring(0, aq.url.length) == aq.url) {
                    o(aq, ar, ax)
                } else {
                    if (aq.urlMatchType == "ex" && aw == aq.url) {
                        o(aq, ar, ax)
                    }
                }
            }
        }
        return ar
    }
    function aa(av, ar) {
        if (typeof(DY.adSelectors) != "undefined" && DY.adSelectors.length > 0) {
            var au = DY.adSelectors;
            for (var at = 0; at < au.length; at++) {
                var aq = au[at];
                o(aq, ar, av)
            }
        }
        return ar
    }
    function o(ar, aB, at) {
        var au = [];
        try {
            au = $dy(ar.selector);
            if (au.length > 0) {
                for (var ay = 0; ay < au.length; ay++) {
                    var aq = $dy(au[ay]);
                    if (!aq.hasClass(O)) {
                        if (ar.type == i) {
                            aq.attr("data-" + v, ar.slot);
                            var ax = [];
                            if (typeof(ar.aSelector) != "undefined" && ar.aSelector != "") {
                                ax = aq.find(ar.aSelector)
                            } else {
                                ax = aq.find("a")
                            }
                            for (var av = 0; av < ax.length; av++) {
                                ax[av].setAttribute("data-" + af, av + 1)
                            }
                        }
                        aq.addClass(ar.type + " " + O);
                        aq.attr("data-adid", ar.slot);
                        aB.push(au[ay])
                    }
                }
            }
        } catch (az) {}
        if (at) {
            var aw = document.createElement("div");
            aw.className = "MK" + ar.type;
            aw.style.width = $dy(au).width() + "px";
            aw.style.height = $dy(au).height() + "px";
            if (typeof($dy(au).offset()) != "undefined") {
                aw.style.top = $dy(au).offset().top + "px";
                aw.style.left = $dy(au).offset().left + "px"
            }
            var aA = $dy(au).parent();
            aA[0].appendChild(aw)
        }
        return aB
    }
    function b(au, aq) {
        var ar = $dy(au);
        var at = {};
        ar.on("dyexpuclick", function(ay, ax) {
            var aw = ar.attr("data-dy-exp-id");
            var av = ar.attr("data-dy-ver-data");
            DY.ServerUtil.logVariation("c", aw, ax, aq, true, av);
            try {
                if (typeof(av) === "undefined" || av == null || av.length <= 0) {
                    if (typeof DYO !== "undefined" && typeof DYO.removeFromVariationsIgnoreList !== "undefined") {
                        DYO.removeFromVariationsIgnoreList(ax)
                    }
                }
            } catch (az) {}
        }).on("dyexpurimp", function(ay, ax) {
            var aw = [];
            for (var av = 0; av < ax.length; av++) {
                if (!at.hasOwnProperty(ax[av].id)&&!at.hasOwnProperty(ax[av])) {
                    aw.push(ax[av])
                }
            }
            if (aw.length > 0) {
                DY.ServerUtil.logVariation("ri", ar.attr("data-dy-exp-id"), aw, false, false, ar.attr("data-dy-ver-data"))
            }
            for (var av = 0; av < aw.length; av++) {
                at[aw[av].id || aw[av]] = 1
            }
        })
    }
    function Z(aw, ax, av, at, aq, au, ay) {
        var ar = $dy(aw);
        ar.attr("data-dy-exp-id", ax);
        ar.attr("data-dy-var-id", av);
        ar.attr("data-dy-var-idx", ay);
        ar.attr("data-dy-ver-data", au);
        if (aq) {
            ar.attr("data-dy-exp-save", "1")
        }
        if (!at) {
            D()
        }
    }
    return {
        is: c,
        mark: E,
        dd: aj,
        da: X,
        execute: W,
        dycls: F,
        ne: D,
        monitorExpUnit: b,
        markExpUnit: Z,
        cmark: B
    }
})();
DY.ArticleExp = (function() {
    var q = [];
    var d = false;
    var f = false;
    var c = "data-dy-content";
    var g = "data-dy-article";
    function k(v, u, w) {
        if (v.nodeType === 3) {
            r(v, u, w)
        } else {
            l(v, u, w);
            if (v = v.firstChild) {
                do {
                    k(v, u, w)
                }
                while (v = v.nextSibling)
                }
        }
    }
    function r(w, u, y) {
        var x = w.textContent || w.innerText;
        if (w.textContent.trim() == u) {
            var v = new RegExp(DY.Util.efr(u), "g");
            w.textContent = w.textContent.replace(v, y)
        }
    }
    function l(w, u, y, x) {
        if (w.attributes) {
            for (var v = 0; v < w.attributes.length; v++) {
                if (w.attributes[v].textContent == u) {
                    w.attributes[v].textContent = y
                } else {
                    if (q.imgRegexp != "" && x == "img") {
                        if (w.attributes[v].textContent.indexOf(u)>-1) {
                            w.attributes[v].textContent = w.attributes[v].textContent.replace(u, y)
                        }
                    }
                }
            }
        }
    }
    function m(v, x, u) {
        if (u != null) {
            var w = x.img.match(u);
            if (w != null) {
                if (v.outerHTML.indexOf(w[0])>-1) {
                    return true
                }
            }
        } else {
            if (v.outerHTML.indexOf(x.img)>-1) {
                return true
            }
        }
        return false
    }
    function n() {
        if (d) {
            return q
        }
        var v = [];
        try {
            if (DY.fpExp.length > 0) {
                for (var u = 0; u < DY.fpExp.length; u++) {
                    if (DY.fpExp[u].fpurl == DY.Detectors.loc) {
                        v = DY.fpExp[u];
                        d = true;
                        break
                    }
                }
            } else {
                if (DY.fpExp.fpurl == DY.Detectors.loc) {
                    v = DY.fpExp;
                    d = true
                }
            }
        } catch (w) {}
        return v
    }
    function t(w, v, u) {
        if (w !== "" && v !== 0 && u !== 0&&!q.rawimg&&!q.imgRegex) {
            return "http://images.dynamicyield.com/image/fetch/f_jpg,q_100,c_fill,g_face,e_sharpen,w_" + v + ",h_" + u + "/" + encodeURIComponent(w)
        } else {
            return w
        }
    }
    function a(E, Q, w, A, D) {
        var L = document.querySelectorAll("[" + c + '="' + E + '"] [' + g + "]");
        for (var K = 0; K < L.length; K++) {
            var u = L[K].getAttribute(g);
            if (u.split(".").length > 1) {
                continue
            }
            try {
                var O = false;
                var y = false;
                var P = false;
                var z = [];
                if (L[K].tagName == "A") {
                    z.push(L[K])
                } else {
                    z = L[K].getElementsByTagName("a")
                }
                for (var I = 0; I < z.length; I++) {
                    if (z[I].innerHTML == w.title) {
                        if (!D) {
                            z[I].innerHTML = A.title
                        }
                        O = true
                    } else {
                        if (z[I].innerHTML.indexOf(w.title)>-1) {
                            if (!D) {
                                k(z[I], w.title, A.title)
                            }
                            O = true
                        }
                    }
                }
                var v = false;
                if (w.img != "" && w.img != A.img) {
                    var F = L[K].getElementsByTagName("img");
                    var J = "";
                    if (q.imgRegex != "") {
                        J = new RegExp(q.imgRegex)
                    }
                    for (var H = 0; H < F.length; H++) {
                        v = m(F[H], w, J);
                        if (v) {
                            if (!D) {
                                if (A.img !== "") {
                                    var C = F[H].width;
                                    var N = F[H].height;
                                    var x = A.img;
                                    if (C != 0 && N != 0) {
                                        x = t(A.img, C, N)
                                    }
                                    if (q.imgRegex != "") {
                                        var G = w.img.match(J);
                                        var B = x.match(J);
                                        if (G != null && B != null) {
                                            l(F[H], G[0], B[0], "img")
                                        }
                                    } else {
                                        l(F[H], w.img, x)
                                    }
                                }
                            }
                            y = true
                        }
                    }
                }
                if (typeof w.catchline !== "undefined" && typeof A.catchline !== "undefined" && w.catchline !== "" && w.catchline !== A.catchline) {
                    if (L[K].outerHTML.indexOf(w.catchline)>-1) {
                        k(L[K], w.catchline, A.catchline);
                        P = true
                    }
                }
                if (y || O || P) {
                    var u = L[K].getAttribute(g);
                    L[K].setAttribute(g, u + "." + q[E][Q].expid + "." + A.id);
                    q[E][Q].varset = A.id;
                    return true
                }
            } catch (M) {
                DY.Util.log("exception when setting up variation")
            }
        }
    }
    function i(u) {
        DY.Util.log("ARTICLE EXP :: " + u)
    }
    function e(x, u) {
        var w = null;
        var z = DY.CookieFunctions.getStorage(x + ":" + u, true);
        if (z != null && typeof z !== "undefined") {
            try {
                if (z === "0") {
                    i("returned default variation from storage for " + x + ":" + u);
                    if (!q[x][u].soriginal.lost) {
                        w = {
                            id: 0
                        }
                    }
                }
                for (var v = 0; v < q[x][u].variations.length; v++) {
                    if (q[x][u].variations[v].id == z) {
                        w = q[x][u].variations[v];
                        i("got variation " + w.id + " from storage for " + x + ":" + u);
                        break
                    }
                }
                if (w === null) {
                    DY.CookieFunctions.removeStorage(x + ":" + u, true);
                    i("removed obsolete position from storage for " + x + ":" + u)
                }
            } catch (y) {
                i(y)
            }
        }
        return w
    }
    function o(z, w) {
        var x = null;
        var y = 1;
        var B = q[z][w].soriginal;
        try {
            var v = q[z][w].variations;
            if (typeof B != "undefined" && typeof B.lost != "undefined") {
                y = 0
            }
            var u = Math.floor(Math.random() * (v.length + y));
            if (v.length > 0) {
                if (u == 0 && y == 1) {
                    x = q[z][w].soriginal
                } else {
                    x = q[z][w].variations[u - y]
                }
            } else {
                if (y == 1) {
                    x = q[z][w].soriginal
                } else {
                    x = null
                }
            }
        } catch (A) {
            i(A.message)
        }
        return x
    }
    function b(y, u) {
        var w = null;
        if (typeof(q[y][u].varset) != "undefined") {
            i("skipped " + y + ":" + u);
            return q[y][u].varset
        }
        var x = e(y, u);
        if (x === null) {
            x = o(y, u)
        }
        if (x !== null) {
            var v = false;
            if (x.id == 0) {
                v = true
            }
            w = a(y, u, q[y][u].soriginal, x, v);
            if (w) {
                i("setup " + y + ":" + u + ":" + x.id);
                DY.CookieFunctions.setStorage(y + ":" + u, x.id, true)
            } else {
                i("original not found for " + y + ":" + u)
            }
        } else {
            i("no variation to set for " + y + ":" + u);
            DY.CookieFunctions.removeStorage(y + ":" + u)
        }
        return w
    }
    function j() {
        if (!DY.Detectors.ua().crawler) {
            h()
        }
    }
    function h() {
        try {
            q = n();
            for (var v in q) {
                if (q.hasOwnProperty(v) && v !== "fpurl") {
                    for (var w in q[v]) {
                        if (q[v].hasOwnProperty(w)) {
                            b(v, w)
                        }
                    }
                }
            }
        } catch (u) {}
    }
    function s() {
        try {
            if (q&&!f) {
                var z = [];
                var A = document.querySelectorAll("[" + c + "]");
                for (var x = 0; x < A.length; x++) {
                    var u = A[x].getAttribute(c);
                    var B = A[x].querySelectorAll("[" + g + "]");
                    for (var v = 0; v < B.length; v++) {
                        var y = B[v].getAttribute(g).split(".");
                        if (y.length > 1) {
                            z.push([parseInt(u), parseInt(y[0]), parseInt(y[1]), parseInt(y[2])])
                        }
                    }
                }
                if (z.length > 0) {
                    DY.ServerUtil.logArtVariation(q.fpurl, DYJSON.stringify(z));
                    f = true
                }
            }
        } catch (w) {
            DY.Util.log("exception when logging variations")
        }
    }
    return {
        logVariations: s,
        execute: j,
        choose: b,
        exps: n
    }
})();
DY.Audiences = (function() {
    var s = (function() {
        var I = "_dyaud_page";
        var C = "_dyaud_nchc";
        var G = "_dyaud_sess";
        function K(O) {
            var N = [];
            for (var P = 0; P < O.length; P++) {
                if (O[P]) {
                    N.push(O[P])
                }
            }
            return N
        }
        function M(R) {
            var P = K(R.split("."));
            var N = {};
            for (var O = 0; O < P.length; O++) {
                var Q = P[O].split("@");
                N[Q[0]] = Q[1] == "nu" ? null : Q[1]
            }
            return N
        }
        function F(P) {
            var O = [];
            for (var N in P) {
                O.push(N + "@" + (P[N] == null ? "nu" : P[N]))
            }
            return O.join(".")
        }
        function B() {
            var R = DY.CookieFunctions.getCookie(I);
            if (R == null) {
                return null
            }
            R = R.split("*");
            var N = {};
            var P = K(R[0].split("."));
            for (var O = 0; O < P.length; O++) {
                var Q = P[O].split("@");
                N[Q[0]] = {
                    hash: Q[1],
                    session: Q[2],
                    conds: Q[3].split("-")
                }
            }
            return {
                audRules: N,
                ld: R[1],
                ldart: R[2]
            }
        }
        function L() {
            var N = DY.CookieFunctions.getCookie(C);
            if (N == null) {
                return null
            }
            N = N.split("*");
            return {
                auds: K(N[0].split(".")),
                tchc: M(N[1]),
                chc: M(N[2]),
                audCache: M(N[3])
            }
        }
        function J() {
            var N = DY.CookieFunctions.getCookieVal(G, true, true);
            if (N == null) {
                return null
            }
            N = N.split("*");
            return {
                sauds: K(N[0].split(".")),
                schc: M(N[1]),
                saudCache: M(N[2])
            }
        }
        function H(S) {
            var P = B() || {};
            var O = S.audRules || P.audRules;
            var R = S.ld || P.ld;
            var Q = S.ldart || P.ldart;
            var N = [];
            for (var T in O) {
                N.push(T + "@" + O[T].hash + "@" + O[T].session + "@" + O[T].conds.join("-"))
            }
            N = N.join(".") + "*" + R + "*" + Q;
            DY.ResourceUtils.setLocalStorage(I, N)
        }
        function E(R) {
            var O = L() || {};
            var S = $dy.unique(R.auds || O.auds || []);
            var P = R.tchc || O.tchc || {};
            var T = R.chc || O.chc || {};
            var Q = R.audCache || O.audCache || {};
            var N = S.join(".") + "*" + F(P) + "*" + F(T) + "*" + F(Q);
            DY.ResourceUtils.setLocalStorage(C, N)
        }
        function D(R) {
            var S = J() || {};
            var P = $dy.unique(R.sauds || S.sauds || []);
            var Q = R.schc || S.schc || {};
            var O = R.saudCache || S.saudCache || {};
            var N = P.join(".") + "*" + F(Q) + "*" + F(O);
            DY.ResourceUtils.setSessionStorage(G, N)
        }
        return {
            loadPageCookies: B,
            loadCHCCookies: L,
            loadSessionCookies: J,
            savePageCookies: H,
            saveCHCCookies: E,
            saveSessionCookies: D
        }
    })();
    var y = false;
    var t = {
        12: "c",
        13: "i6",
        14: "i7",
        15: "i8",
        16: "i9",
        17: "i10",
        18: "f",
        33: "o",
        34: "s",
        36: "ob",
        39: "i11",
        26: "ws",
        27: "ms",
        28: "ss",
        0: "d",
        1: "ip",
        2: "tb",
        3: "an",
        4: "w",
        5: "m",
        35: "l"
    };
    function v() {
        if (!y) {
            DY.CookieFunctions.deleteCookie("_dyaud_nchc", "/", DY.CookieFunctions.getSLD(), true);
            DY.CookieFunctions.deleteCookie("_dyaud_page", "/", DY.CookieFunctions.getSLD(), true);
            DY.CookieFunctions.deleteCookie("_dyaud_sess", "/", DY.CookieFunctions.getSLD(), true)
        }
        var B = false;
        if (s.loadSessionCookies() == null) {
            i();
            B = true
        }
        if (s.loadPageCookies() == null || s.loadCHCCookies() == null) {
            z();
            B = true
        } else {
            B = u() || B;
            if (!y) {
                A();
                m();
                B = true
            }
        }
        if (!y) {
            B = e() || B
        }
        y = true;
        if (B) {
            x()
        }
    }
    function e() {
        if (typeof DY.audTCHC === "object" && typeof DY.audYCHC === "object" && typeof DY.audSCHC === "object" && typeof DY.audTAuds === "object" && typeof DY.audYAuds === "object") {
            var J, O, F, C, E;
            if (DY.vu) {
                var G = s.loadCHCCookies();
                var D = s.loadSessionCookies();
                J = G.auds;
                O = G.tchc;
                F = G.audCache;
                C = D.schc;
                E = D.saudCache
            }
            s.saveSessionCookies({
                saudCache: {},
                schc: DY.audSCHC
            });
            var N = DY.audTCHC;
            var M = s.loadPageCookies().ldart.substr(0, 10);
            if (M != h()) {
                for (var I in DY.audYCHC) {
                    N[I] = (N[I] || 0) + DY.audYCHC[I]
                }
            }
            var L = {};
            var P = s.loadCHCCookies().audCache;
            for (var B in P) {
                if (P[B] === null) {
                    L[B] = null
                }
            }
            for (var K = 0; K < DY.audTAuds.length; K++) {
                L[DY.audTAuds[K]] = null
            }
            if (M != h()) {
                for (var K = 0; K < DY.audYAuds.length; K++) {
                    L[DY.audYAuds[K]] = null
                }
            }
            var H = [];
            for (var B in L) {
                if (L[B] === null) {
                    H.push(B)
                }
            }
            DY.ServerUtil.logVerbose("aud", ["tschc", [J, O, F, C, E], [H, N, L, DY.audSCHC, {}
            ], [DY.audTAuds, DY.audYAuds, M != h()]]);
            s.saveCHCCookies({
                auds: H,
                audCache: L,
                tchc: N
            });
            return true
        } else {
            DY.ServerUtil.logVerbose("aud", ["tschc error", [], []]);
            return false
        }
    }
    function b(D) {
        var B;
        var C = 0;
        if (D.length == 0) {
            return C
        }
        for (B = 0; B < D.length; B++) {
            var E = D.charCodeAt(B);
            C = ((C<<5) - C) + E;
            C = C & C
        }
        return C
    }
    function c(C) {
        var F = s.loadPageCookies().audRules;
        var E, D, B = {};
        for (var G = 0; G < DY.audienceRules.length; G++) {
            if (typeof DY.audienceRules[G] === "undefined" || typeof DY.audienceRules[G].audience === "undefined" || typeof DY.audienceRules[G].rule === "undefined" || typeof DY.audienceRules[G].session === "undefined" || typeof DY.audienceRules[G].updatedAt === "undefined") {
                continue
            }
            if (typeof C === "undefined" || DY.audienceRules[G].updatedAt < C) {
                E = [];
                n(DY.audienceRules[G], function(I, H) {
                    E.push(H.id)
                });
                B[DY.audienceRules[G].audience] = {
                    hash: b(DYJSON.stringify(DY.audienceRules[G].rule) + DY.audienceRules[G].session),
                    session: DY.audienceRules[G].session,
                    conds: E
                }
            } else {
                if (typeof F[DY.audienceRules[G].audience] === "undefined") {
                    continue
                }
                B[DY.audienceRules[G].audience] = F[DY.audienceRules[G].audience]
            }
        }
        s.savePageCookies({
            audRules: B
        })
    }
    function h(B) {
        function C(E) {
            return E < 10 ? "0" + E : E
        }
        B|=0;
        var D = new Date(new Date().getTime() + B * (1000 * 60 * 60 * 24) - (DY.tzo || 0) * (1000 * 60 * 60));
        return D.getUTCFullYear() + "-" + C(D.getUTCMonth() + 1) + "-" + C(D.getUTCDate())
    }
    function l(B, C) {
        if (typeof B === "undefined" || typeof B.rule === "undefined" || typeof B.audience === "undefined" || typeof B.session === "undefined") {
            return 
        }
        for (var D = 0; D < B.rule.length; D++) {
            if (typeof B.rule[D] === "undefined" || typeof B.rule[D].condType === "undefined" || typeof B.rule[D].conds === "undefined") {
                continue
            }
            C(B.rule[D], function(G) {
                for (var E = 0; E < B.rule[D].conds.length; E++) {
                    var F = B.rule[D].conds[E];
                    if (typeof F === "undefined") {
                        continue
                    }
                    G(B.rule[D].conds[E])
                }
            })
        }
    }
    function n(B, C) {
        l(B, function(E, D) {
            D(function(F) {
                C(E, F)
            })
        })
    }
    function f(D, C) {
        try {
            var B = "." + DY.Colors.getAll();
            switch (D.type) {
            case"SiteVariable":
                if (typeof D.data === "undefined") {
                    return false
                }
                return D.data.id == C.parameter && D.data.value == C.selectParameter;
            case"SiteEvent":
                return D.data == C.selectParameter;
            case"EventProp":
                if (D.data.name != C.eventName) {
                    return false
                }
                for (var G in D.data.props) {
                    if (G != C.selectParameter) {
                        continue
                    }
                    var F = D.data.props[G];
                    switch (C.selectMethod) {
                    case"pair_equals":
                        if (F == C.selectParameter2) {
                            return true
                        }
                        break;
                    case"pair_contains":
                        if (F.toString().indexOf(C.selectParameter2)!=-1) {
                            return true
                        }
                        break;
                    case"pair_eq_bigger":
                        if (parseInt(F) >= parseInt(C.selectParameter2)) {
                            return true
                        }
                        break;
                    case"pair_smaller":
                        if (parseInt(F) < parseInt(C.selectParameter2)) {
                            return true
                        }
                        break;
                    default:
                        return false
                    }
                }
                return false;
            case"Referrer":
            case"PageVisited":
                switch (C.selectMethod) {
                case"equals":
                case"not_equals":
                    return D.data == C.selectParameter;
                case"contains":
                    return D.data.indexOf(C.selectParameter)!=-1;
                default:
                    return false
                }
            case"UnitClick":
            case"Audience":
                return D.data == C.parameter;
            case"PageViews":
                return true;
            case"Browser":
            case"ScreenSize":
            case"OSDeviceName":
                return B.indexOf("." + t[C.parameter] + ".")!=-1;
            default:
                return false
            }
        } catch (E) {
            return false
        }
    }
    function g(G, M) {
        try {
            switch (G) {
            case"_Referrer":
                var N = document.referrer.toLowerCase();
                var P = M.selectParameter.toLowerCase();
                switch (M.selectMethod) {
                case"equals":
                    return N == P;
                case"not_equals":
                    return N != P;
                case"contains":
                    return N.indexOf(P)!=-1;
                default:
                    return false
                }
            case"_CurrentPage":
                var C = location.href.toLowerCase();
                var P = M.selectParameter.toLowerCase();
                switch (M.selectMethod) {
                case"equals":
                    return C == P;
                case"not_equals":
                    return C != P;
                case"contains":
                    return C.indexOf(P)!=-1;
                default:
                    return false
                }
            case"Audience":
                var I = ("." + ((window.DY && window.DY.aud) || "") + "." + s.loadCHCCookies().auds.join(".") + "." + s.loadSessionCookies().sauds.join(".") + ".").indexOf("." + M.parameter + ".")!=-1;
                switch (M.hitCountMethod) {
                case">=":
                    return I;
                case"<":
                    return !I;
                default:
                    return false
                }
            case"_Country":
                return (typeof window.DY.geoCode !== "undefined" && window.DY.geoCode === M.selectParameter);
            case"_Continent":
                return (typeof window.DY.geoCont !== "undefined" && window.DY.geoCont === M.selectParameter);
            case"_Browser":
                var Q = navigator.userAgent.toLowerCase();
                var J = function(R) {
                    if (/msie ([0-9]{1,}[\.0-9]{0,})/.exec(Q) != null) {
                        return parseInt(RegExp.$1) == R
                    }
                    if (/trident/.test(Q) && /rv\:([0-9]{1,}[\.0-9]{0,})/.exec(Q) != null) {
                        return parseInt(RegExp.$1) == R
                    }
                    return false
                };
                switch (M.parameter) {
                case 12:
                    return /chrome/.test(Q);
                case 13:
                    return J(6);
                case 14:
                    return J(7);
                case 15:
                    return J(8);
                case 16:
                    return J(9);
                case 17:
                    return J(10);
                case 18:
                    return /firefox/.test(Q);
                case 33:
                    return window.opera ? true : false;
                case 34:
                    return /safari/.test(Q)&&!/chrome/.test(Q);
                case 36:
                    return !/chrome|firefox|safari|msie|trident/.test(Q)&&!window.opera;
                case 39:
                    return J(11);
                default:
                    return false
                }
            case"_ScreenSize":
                var E = window.innerWidth;
                switch (M.parameter) {
                case 26:
                    return E > 1366;
                case 27:
                    return E <= 1366 && E > 1024;
                case 28:
                    return E <= 1024;
                default:
                    return false
                }
            case"_OSDeviceName":
                var Q = navigator.userAgent.toLowerCase();
                var F = navigator.platform.toLowerCase();
                switch (M.parameter) {
                case 0:
                    return /iphone|ipod|blackberry|android|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|sonyericsson|symbian|treo mini/.test(Q) || /silk|ipad|android|kindle/.test(Q);
                case 1:
                    return /iphone|ipod/.text(Q);
                case 2:
                    return /silk|ipad|android|kindle/.test(Q) && (!/android/.test(Q) || screen.width > 1024);
                case 3:
                    return /android/.test(Q) && screen.width <= 1024;
                case 4:
                    return /win/.test(F) || /win/.test(Q);
                case 5:
                    return /mac/.test(F) || /mac/.test(Q);
                case 35:
                    return /linux/.test(F) || /linux/.test(Q);
                default:
                    return false
                }
            case"_Date":
                var D = new Date();
                switch (M.selectMethod) {
                case"after":
                    return D >= new Date(parseInt(M.selectParameter) * 1000);
                case"before":
                    return D <= new Date(parseInt(M.selectParameter2) * 1000);
                case"between":
                    return D >= new Date(parseInt(M.selectParameter) * 1000) && D <= new Date(parseInt(M.selectParameter2) * 1000);
                default:
                    return false
                }
            case"_TimeOfDay":
                var D = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000);
                function H(R) {
                    R.setFullYear(D.getFullYear());
                    R.setMonth(D.getMonth());
                    R.setDate(D.getDate())
                }
                var B = new Date(parseInt(M.selectParameter) * 1000);
                var O = new Date(parseInt(M.selectParameter2) * 1000);
                H(B);
                H(O);
                return D <= O && D >= B;
            case"_Evaluator":
                var P = M.selectParameter;
                var L;
                L = DYO.safeEval(M.jsCode);
                switch (M.selectMethod) {
                case"equals":
                    return L == P;
                case"not_equals":
                    return L != P;
                case"contains":
                    return typeof L === "string" && L.indexOf(P)!=-1;
                default:
                    return false
                }
            default:
                return false
            }
        } catch (K) {
            return false
        }
    }
    function i() {
        if (typeof DY.audienceRules === "undefined") {
            return false
        }
        s.saveSessionCookies({
            sauds: [],
            saudCache: {},
            schc: {}
        })
    }
    function z() {
        if (typeof DY.audienceRules === "undefined") {
            return false
        }
        s.savePageCookies({
            ld: h(),
            ldart: DY.audLDART || "0"
        });
        s.saveCHCCookies({
            auds: [],
            chc: DY.audCHC || {},
            tchc: {},
            audCache: {}
        });
        c()
    }
    function u() {
        var F = false;
        var E = s.loadPageCookies();
        var K = E.ld;
        var J = h();
        if (J <= K) {
            return 
        }
        var H = E.ldart.substr(0, 10);
        if (H != J) {
            F = true;
            A()
        }
        var D = s.loadCHCCookies();
        var B = D.chc;
        var I = D.tchc;
        var C = K == h( - 1);
        for (var G in D.tchc) {
            if (C) {
                B[G] = (parseInt(B[G]) || 0) + parseInt(I[G] || 0)
            }
            delete I[G]
        }
        s.saveCHCCookies({
            chc: B,
            tchc: I
        });
        s.savePageCookies({
            ld: J
        });
        return F
    }
    function A() {
        if (typeof DY.audLDART === "undefined" || typeof DY.audCHC === "undefined" || DY.audLDART <= s.loadPageCookies().ldart) {
            return 
        }
        m(DY.audLDART);
        s.saveCHCCookies({
            chc: DY.audCHC,
            audCache: {}
        });
        s.savePageCookies({
            ldart: DY.audLDART
        });
        var B = DY.aud.split(".");
        for (var C = 0; C < x.length; C++) {
            x[C] = {
                type: "Audience",
                data: parseInt(x[C])
            }
        }
        r(x, false, true)
    }
    function m(F) {
        if (typeof DY.audienceRules === "undefined") {
            return false
        }
        var G = s.loadPageCookies().audRules;
        c(F);
        var J = s.loadCHCCookies();
        var E = s.loadSessionCookies();
        var M = J.auds;
        var D = J.audCache;
        var C = J.chc;
        var P = J.tchc;
        var O = E.sauds;
        var I = E.saudCache;
        var B = E.schc;
        for (var H in G) {
            var L = true;
            for (var N = 0; N < DY.audienceRules.length; N++) {
                if (typeof DY.audienceRules[N] === "undefined" || typeof DY.audienceRules[N].rule === "undefined" || typeof DY.audienceRules[N].audience === "undefined" || typeof DY.audienceRules[N].session === "undefined" || typeof DY.audienceRules[N].updatedAt === "undefined") {
                    continue
                }
                if (H == DY.audienceRules[N].audience) {
                    L = false;
                    if (typeof F === "undefined" || DY.audienceRules[N].updatedAt < F) {
                        if (G[H].hash != b(DYJSON.stringify(DY.audienceRules[N].rule) + DY.audienceRules[N].session)) {
                            L = true
                        }
                    }
                    break
                }
            }
            if (L) {
                if (G[H].session) {
                    for (var K = 0; K < G[H].conds.length; K++) {
                        delete B[G[H].conds[K]]
                    }
                    delete I[H];
                    O = $dy.map(O, function(Q) {
                        return Q == H ? null : Q
                    })
                } else {
                    for (var K = 0; K < G[H].conds.length; K++) {
                        delete C[G[H].conds[K]];
                        delete P[G[H].conds[K]]
                    }
                    delete D[H];
                    M = $dy.map(M, function(Q) {
                        return Q == H ? null : Q
                    })
                }
                delete G[H]
            }
        }
        s.saveCHCCookies({
            auds: M,
            audCache: D,
            chc: C,
            tchc: P
        });
        s.saveSessionCookies({
            sauds: O,
            saudCache: I,
            schc: B
        })
    }
    function d(B) {
        return false
    }
    function q(H, L, B, D) {
        if (typeof L === "undefined" || typeof B === "undefined") {
            var G = s.loadCHCCookies();
            L = G.tchc;
            B = G.chc
        }
        if (typeof D === "undefined") {
            D = s.loadSessionCookies().schc
        }
        if (typeof H === "number") {
            for (var C = 0; C < DY.audienceRules.length; C++) {
                if (typeof DY.audienceRules[C] === "undefined" || typeof DY.audienceRules[C].audience === "undefined") {
                    continue
                }
                if (DY.audienceRules[C].audience == H) {
                    H = DY.audienceRules[C];
                    break
                }
            }
            if (typeof H === "number") {
                return false
            }
        }
        var F = true;
        for (var E = 0; E < H.rule.length; E++) {
            if (typeof H.rule[E] === "undefined" || typeof H.rule[E].condType === "undefined" || typeof H.rule[E].conds === "undefined") {
                continue
            }
            var M = false;
            for (var K = 0; K < H.rule[E].conds.length; K++) {
                var J = H.rule[E].conds[K];
                if (H.rule[E].condType[0] === "_" || H.rule[E].condType === "Audience") {
                    M = g(H.rule[E].condType, J)
                } else {
                    if (typeof J === "undefined" || typeof J.id === "undefined" || typeof J.hitCountMethod === "undefined" || typeof J.hitCount === "undefined") {
                        continue
                    }
                    var I = H.session ? (D[J.id] || 0): ((parseInt(B[J.id]) || 0) + parseInt(L[J.id] || 0));
                    if (H.rule[E].condType == "Referrer" && d(J)) {
                        I++
                    }
                    switch (J.hitCountMethod) {
                    case"=":
                        M = I == J.hitCount;
                        break;
                    case">=":
                        M = I >= J.hitCount;
                        break;
                    case"<=":
                        M = I <= J.hitCount;
                        break;
                    case">":
                        M = I > J.hitCount;
                        break;
                    case"<":
                        M = I < J.hitCount;
                        break;
                    default:
                        M = false;
                        break
                    }
                }
                if (M) {
                    break
                }
            }
            if (!M) {
                F = false;
                break
            }
        }
        return F
    }
    function x(T) {
        var P, H, R, O;
        if (DY.vu) {
            var N = s.loadCHCCookies();
            var Q = s.loadSessionCookies();
            P = N.auds;
            H = N.audCache;
            R = Q.sauds;
            O = Q.saudCache
        }
        var N = s.loadCHCCookies();
        var Q = s.loadSessionCookies();
        var F = N.auds;
        var J = N.audCache;
        var B = N.chc;
        var E = N.tchc;
        var S = Q.sauds;
        var L = Q.saudCache;
        var D = Q.schc;
        var C = typeof T === "undefined" ? (DY.audienceRules.length || 1): T;
        if (!(C > 0)) {
            return 
        }
        F = $dy.map(F, function(U) {
            return (J[U] !== null && (J[U] || 0) <= 0) ? null : U
        });
        S = $dy.map(S, function(U) {
            return (L[U] || 0) <= 0 ? null : U
        });
        var I = [];
        for (var G = 0; G < DY.audienceRules.length; G++) {
            if (typeof DY.audienceRules[G] === "undefined" || typeof DY.audienceRules[G].rule === "undefined" || typeof DY.audienceRules[G].audience === "undefined" || typeof DY.audienceRules[G].session === "undefined") {
                continue
            }
            if (typeof DY.audienceRules[G].hidden !== "undefined" && DY.audienceRules[G].hidden) {
                continue
            }
            var K;
            if (!DY.audienceRules[G].session && J[DY.audienceRules[G].audience] === null) {
                K = null
            } else {
                K = (DY.audienceRules[G].session ? L[DY.audienceRules[G].audience] : J[DY.audienceRules[G].audience]) || 0
            }
            if (K === null || K > 0) {
                continue
            }
            I.push({
                type: "Audience",
                data: DY.audienceRules[G].audience
            });
            var M = q(DY.audienceRules[G], E, B, D);
            if (M) {
                if (DY.audienceRules[G].session) {
                    S.push(DY.audienceRules[G].audience + "")
                } else {
                    F.push(DY.audienceRules[G].audience + "")
                }
            }
            if (DY.audienceRules[G].session) {
                L[DY.audienceRules[G].audience] = 1
            } else {
                J[DY.audienceRules[G].audience] = M ? null : 1
            }
        }
        if (I.length == 0) {
            return 
        }
        DY.ServerUtil.logVerbose("aud", ["compute", [P, H, R, O], [F, J, S, L]]);
        s.saveCHCCookies({
            auds: F,
            audCache: J
        });
        s.saveSessionCookies({
            sauds: S,
            saudCache: L
        });
        r(I, true, true);
        x(C - 1)
    }
    function r(M, R, P) {
        try {
            if (DY.audienceRules.length == 0) {
                return 
            }
            if (!P) {
                v()
            }
            if (typeof M === "undefined") {
                return 
            }
            var O, H, F, G;
            if (DY.vu) {
                var J = s.loadCHCCookies();
                var E = s.loadSessionCookies();
                O = J.tchc;
                H = J.audCache;
                F = E.schc;
                G = E.saudCache
            }
            var Q = DY.audienceRules;
            var J = s.loadCHCCookies();
            var E = s.loadSessionCookies();
            var D = J.audCache;
            var N = J.tchc;
            var I = E.saudCache;
            var C = E.schc;
            var K = false;
            for (var B = 0; B < DY.audienceRules.length; B++) {
                l(DY.audienceRules[B], function(U, S) {
                    for (var T = 0; T < M.length; T++) {
                        if (typeof M[T] === "undefined" || typeof M[T].type === "undefined") {
                            continue
                        }
                        if (M[T].type == U.condType) {
                            S(function(V) {
                                if (typeof V.id === "undefined") {
                                    return 
                                }
                                if (f(M[T], V)) {
                                    K = true;
                                    if (DY.audienceRules[B].session) {
                                        C[V.id] = parseInt(C[V.id] || 0) + 1;
                                        if (typeof DY.audienceRules[B].hidden === "undefined" ||!DY.audienceRules[B].hidden) {
                                            I[DY.audienceRules[B].audience] = (I[DY.audienceRules[B].audience] || 0) - 1
                                        }
                                    } else {
                                        N[V.id] = parseInt(N[V.id] || 0) + 1;
                                        if (typeof DY.audienceRules[B].hidden === "undefined" ||!DY.audienceRules[B].hidden) {
                                            if (D[DY.audienceRules[B].audience] !== null) {
                                                D[DY.audienceRules[B].audience] = (D[DY.audienceRules[B].audience] || 0) - 1
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    }
                })
            }
            if (K) {
                DY.ServerUtil.logVerbose("aud", ["report", [O, H, F, G], [N, D, C, I]])
            }
            s.saveCHCCookies({
                audCache: D,
                tchc: N
            });
            s.saveSessionCookies({
                saudCache: I,
                schc: C
            });
            if (!R) {
                x()
            }
        } catch (L) {}
    }
    function o(C, B, D) {
        r([C], B, D)
    }
    function w(B) {
        try {
            r([{
                type: "Referrer",
                data: B.ref
            }, {
                type: "PageVisited",
                data: DY.Util.removeHttp(B.url)
            }, {
                type: "PageViews"
            }, {
                type: "Browser"
            }, {
                type: "ScreenSize"
            }, {
                type: "OSDeviceName"
            }
            ])
        } catch (C) {}
    }
    function k() {
        try {
            if (DY.audienceRules.length == 0) {
                return []
            }
            v();
            var B = s.loadSessionCookies().sauds;
            return s.loadCHCCookies().auds.concat(B)
        } catch (C) {
            return []
        }
    }
    function j(C) {
        try {
            var B = "";
            for (var E = 0; E < DY.audienceRules.length; E++) {
                if (typeof DY.audienceRules[E] === "undefined" || typeof DY.audienceRules[E].audience === "undefined" || typeof DY.audienceRules[E].rule === "undefined" || typeof DY.audienceRules[E].session === "undefined" || typeof DY.audienceRules[E].updatedAt === "undefined") {
                    continue
                }
                n(DY.audienceRules[E], function(G, F) {
                    if (G.condType == "SiteEvent" && F.parameter == C) {
                        B = F.selectParameter
                    }
                })
            }
            return B
        } catch (D) {
            return ""
        }
    }
    function a() {
        try {
            var B = [];
            for (var D = 0; D < DY.audienceRules.length; D++) {
                if (typeof DY.audienceRules[D] !== "undefined" && typeof DY.audienceRules[D].hidden !== "undefined" && DY.audienceRules[D].hidden && q(D)) {
                    B.push(D)
                }
            }
            return B
        } catch (C) {
            return null
        }
    }
    return {
        getUserAudiences: k,
        reportItems: r,
        reportItem: o,
        reportUserIdAction: w,
        getEventName: j,
        isInAudience: q,
        getUserHiddenAudiences: a
    }
})();
DY.Colors = (function() {
    var b = 30;
    var e = "_dyc";
    function h(j, i) {
        DY.CookieFunctions.setCookie(e + j, i, b, "/", null)
    }
    function c(i) {
        return DY.CookieFunctions.getCookie(e + i)
    }
    function g() {
        DY.CookieFunctions.deleteCookie(e + ".*", "/", null)
    }
    function a() {
        DY.CookieFunctions.deleteCookie(e + "noabc", "/", null);
        var i = new Date();
        h("abc", i.getTime());
        i = null
    }
    function d() {
        DY.CookieFunctions.deleteCookie(e + "abc", "/", null);
        var i = new Date();
        h("noabc", i.getTime());
        i = null
    }
    function f() {
        var i = "";
        var j = c("st");
        var k = c("abc");
        if (j != "" && j != null && j != "undefined") {
            i += j;
            if (k != "" && k != null && k != "undefined") {
                i += "ab."
            }
        }
        return i
    }
    return {
        noAdBlock: d,
        colorAdBlock: a,
        set: h,
        get: c,
        clear: g,
        getAll: f
    }
})();
DY.CookieFunctions = (function() {
    var t = function(v) {
        return v.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    };
    var s = function(v) {
        return new RegExp("(^|;) ?" + v + "=([^;]*)(;|$)")
    };
    var d = function(v) {
        return new RegExp("(?:^|;)\\s?" + v + "=(.*?)(?:;|$)", "i")
    };
    var u = function(v, z, y, x, w) {
        return v + "=" + escape(z) + (y ? ";expires=" + y : "") + (x ? ";path=" + x : "") + (w ? ";domain=" + w : ";domain=" + document.domain)
    };
    function l() {
        try {
            var w = document.domain.split(".");
            if (w.length <= 2 || /^([0-9]+\.){3}[0-9]+$/.test(document.domain)) {
                return document.domain
            } else {
                return /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(document.domain)[0]
            }
        } catch (v) {
            return document.domain
        }
    }
    function f(z) {
        var w = "";
        var y = document.cookie.split(";");
        for (var v = 0; v < y.length; v++) {
            var x = y[v].match(d(z));
            if (x) {
                w += (x[0])
            }
        }
        x = null;
        return w
    }
    function q(v) {
        return r(v, false, true)
    }
    function r(z, x, w) {
        if (typeof(w) === "undefined") {
            w = true
        }
        var v = null;
        var y = document.cookie.match(d(z));
        if (y) {
            v = unescape(y[1]);
            w = false
        }
        if (v == null) {
            if (x) {
                v = m(z)
            } else {
                v = DY.ResourceUtils.getLocalStorage(z)
            }
        }
        if (v != null && w) {
            v = unescape(v)
        }
        if (v == "null" || v == "NaN") {
            return null
        }
        return v
    }
    function k(w) {
        var v = this.getCookie(w);
        if (v == null || v == "") {
            return false
        }
        return true
    }
    function n(v, x, y, w) {
        document.cookie = u(v, x, 0, y, w);
        b(v, x)
    }
    function o(v, x, z, w) {
        var A = new Date();
        var y = A.getTime();
        y += 3600 * 1000;
        A.setTime(y);
        document.cookie = u(v, x, A.toGMTString(), z, w)
    }
    function i(w, y, v, z, x) {
        var A = new Date();
        A.setDate(A.getDate() + v);
        document.cookie = u(w, y, (v == null) ? null : A.toGMTString(), z, x);
        DY.ResourceUtils.setLocalStorage(w, y)
    }
    function c(v, x, w, y) {
        if (this.getCookie(v)) {
            document.cookie = u(v, "", "Thu, 01-Jan-1970 00:00:01 GMT", x, w)
        }
        if (typeof y === "undefined" ||!y) {
            DY.ResourceUtils.removeLocalStorage(v);
            e(v)
        }
    }
    function g() {
        var v = (navigator.cookieEnabled) ? true: false;
        if (typeof navigator.cookieEnabled == "undefined"&&!v) {
            document.cookie = "testcookie";
            v = (document.cookie.indexOf("testcookie")!=-1) ? true : false
        }
        return v
    }
    function h(w, x, v) {
        if (v) {
            b(w, x)
        } else {
            DY.ResourceUtils.setLocalStorage(w, x)
        }
    }
    function a(w, v) {
        if (v) {
            return m(w)
        } else {
            return DY.ResourceUtils.getLocalStorage(w)
        }
    }
    function j(w, v) {
        if (v) {
            e(w)
        } else {
            DY.ResourceUtils.removeLocalStorage(w)
        }
    }
    function b(v, w) {
        try {
            if (window.sessionStorage) {
                window.sessionStorage.setItem(v, w)
            }
        } catch (x) {}
    }
    function m(v) {
        try {
            if (window.sessionStorage) {
                return window.sessionStorage.getItem(v)
            }
        } catch (w) {}
    }
    function e(v) {
        try {
            if (window.sessionStorage) {
                window.sessionStorage.removeItem(v)
            }
        } catch (w) {}
    }
    return {
        getSLD: l,
        getCookies: f,
        getCookie: q,
        getCookieVal: r,
        checkCookie: k,
        setCookie: i,
        setHourCookie: o,
        setSessionCookie: n,
        deleteCookie: c,
        enabled: g,
        setStorage: h,
        getStorage: a,
        removeStorage: j
    }
})();
DY.DataCollection = (function() {
    var t = 50;
    var h = 0;
    var r = 0;
    var q = 0;
    var z = "_dyus_" + DY.section;
    var j = "_dyri_" + DY.section;
    var f = "_dyuss_" + DY.section;
    var s = ".";
    var m = "|";
    var N = {
        vdata: 0,
        visits: 1,
        firstTime: 2,
        lastTime: 3,
        freq: 4,
        data: 5
    };
    var B = {
        tos: 0,
        toa: 1,
        ac: 2,
        tosd: 3,
        toad: 4,
        acd: 5
    };
    var v = [];
    var o = "";
    var w = "";
    var L = "";
    var c = 0;
    var J = 3000;
    var n = false;
    function A(d, O) {
        if (!isNaN(d)) {
            O = O + parseInt(d)
        }
        return O
    }
    function G() {
        h = 0;
        r = 0;
        q = 0
    }
    function k() {
        var O = DY.CookieFunctions.getCookie(z);
        var P = null;
        var d = null;
        if (O) {
            P = O.split(s);
            d = l(P);
            d[B.tos] = A(d[B.tos], h);
            d[B.tosd] = A(d[B.tosd], h);
            d[B.toa] = A(d[B.toa], r);
            d[B.toad] = A(d[B.toad], r);
            d[B.ac] = A(d[B.ac], q);
            d[B.acd] = A(d[B.acd], q);
            P[N.vdata] = d.join(m);
            if (P != null) {
                DY.CookieFunctions.setCookie(z, P.join(s), 30, "/", null)
            }
        }
        O = P = null
    }
    function l(O) {
        var d = O[N.vdata].split(m);
        if (d[B.tosd] == null || typeof(d[B.tosd]) == "undefined" || d[B.tosd] == "undefined") {
            d[B.tosd] = 0;
            d[B.toad] = 0;
            d[B.acd] = 0
        }
        return d
    }
    function K() {
        h++
    }
    function D() {
        r++
    }
    function F(Q, X) {
        if (Q == L) {
            if (!DY.Util.verifyInterval(c, J)) {
                return 
            }
        }
        var U = new Date();
        c = U.getTime();
        L = Q;
        q++;
        var P = "";
        var V = "", O = "";
        if (o != "") {
            V = o;
            O = w;
            o = "";
            w = ""
        }
        if (Q != null && typeof(Q) != "undefined" && Q != "undefined") {
            var Y = $dy(Q);
            var aa = Y.attr("class");
            aa = H(aa);
            if (Y.data("adid") && Y.data("adid") != "") {
                P = aa + "|" + Y.data("adid")
            } else {
                P = aa + "|" + Y.width() + "x" + Y.height()
            }
            DY.ServerUtil.logClick(P, null, V, O, X);
            try {
                if (Y.attr("data-dy-exp-id") && Y.attr("data-dy-exp-id") != "" && Y.attr("data-dy-var-id") && Y.attr("data-dy-var-id") != "") {
                    var R = parseInt(Y.attr("data-dy-exp-id"));
                    var Z = Y.attr("data-dy-ver-data");
                    var W = parseInt(Y.attr("data-dy-var-id"));
                    if (Y.attr("data-dy-var-idx") && Y.attr("data-dy-var-idx") != "") {
                        W = {
                            id: W,
                            idx: parseInt(Y.attr("data-dy-var-idx"))
                        }
                    }
                    DY.ServerUtil.logVariation("c", R, [W], typeof Y.attr("data-dy-exp-save") !== "undefined", true, Z);
                    try {
                        if (typeof(Z) === "undefined" || Z == null || Z.length <= 0) {
                            if (typeof DYO !== "undefined" && typeof DYO.removeFromVariationsIgnoreList !== "undefined") {
                                DYO.removeFromVariationsIgnoreList(vars)
                            }
                        }
                    } catch (T) {}
                }
            } catch (S) {}
        } else {
            DY.ServerUtil.logClick("iframe-ad", null, "", "", X)
        }
    }
    function a(P) {
        var S = DY.CookieFunctions.getCookie(z);
        var Q = new Array();
        var O = new Date();
        if (S != null&&!DY.nu) {
            Q = S.split(s);
            Q[N.visits]++;
            Q[N.lastTime] = O.getTime();
            Q[N.freq] = DY.Util.getFrequency(Q[N.firstTime], Q[N.lastTime], Q[N.visits]);
            DY.vd.initS(Q[N.data]);
            DY.vd.visit(O);
            Q[N.data] = DY.vd.toString()
        } else {
            Q[N.vdata] = "0" + m + "0" + m + "0" + m + "0" + m + "0" + m + "0";
            Q[N.visits] = 1;
            Q[N.firstTime] = O.getTime();
            Q[N.lastTime] = O.getTime();
            Q[N.freq] = 0;
            DY.vd.initA();
            DY.vd.visit(O);
            Q[N.data] = DY.vd.toString()
        }
        S = Q.join(s);
        DY.CookieFunctions.setCookie(z, S, 30, "/", null);
        var d = {
            d: Q,
            id: P,
            dom: escape(document.location),
            sec: DY.section,
            vd: S
        };
        Q = S = O = null;
        var R = DY.CookieFunctions.getCookieVal(f, true);
        if (typeof(R) == "undefined" || R <= 0) {
            R = 1
        } else {
            R++
        }
        DY.CookieFunctions.setSessionCookie(f, R, "/", null);
        return d
    }
    function M() {
        var d = DY.CookieFunctions.getCookieVal(f, true);
        return d
    }
    function g() {
        if (v.length > 0) {
            DY.ServerUtil.logRealImpressions(v)
        }
        v = []
    }
    function e() {
        var d = DY.CookieFunctions.getCookie(j);
        if (typeof(d) != "undefined" && d != null && d != "") {
            var O = d.split(s);
            if (O.length > 0) {
                DY.ServerUtil.logRealImpressions(O)
            }
            DY.CookieFunctions.deleteCookie(j, "/", null)
        }
    }
    function C() {
        var d = v.join(s);
        if (d != "") {
            DY.CookieFunctions.setCookie(j, d, 30, "/", null)
        }
    }
    function E(P) {
        var d = $dy(P);
        var R = d.attr("class");
        R = H(R);
        if (d.data("adid") && d.data("adid") != "") {
            v.push(R + "|" + d.data("adid"))
        }
        try {
            if (d.attr("data-dy-exp-id") && d.attr("data-dy-exp-id") != "" && d.attr("data-dy-var-id") && d.attr("data-dy-var-id") != "") {
                var O = d.attr("data-dy-ver-data");
                var S = parseInt(d.attr("data-dy-var-id"));
                if (d.attr("data-dy-var-idx") && d.attr("data-dy-var-idx") != "") {
                    S = {
                        id: S,
                        idx: parseInt(d.attr("data-dy-var-idx"))
                    }
                }
                DY.ServerUtil.logVariation("ri", parseInt(d.attr("data-dy-exp-id")), [S], false, false, O)
            }
        } catch (Q) {}
    }
    function b() {
        var O = DY.CookieFunctions.getCookie(z);
        var d;
        if (O != null) {
            var P = O.split(s);
            var Q = l(P);
            d = Q[B.tosd] + s + Q[B.toad] + s + P[N.visits];
            Q[B.tosd] = 0;
            Q[B.toad] = 0;
            Q[B.acd] = 0;
            P[N.visits] = 0;
            P[N.vdata] = Q.join(m);
            O = P.join(s);
            DY.CookieFunctions.setCookie(z, O, 30, "/", null)
        } else {
            d = 0 + s + 0 + s + 0
        }
        return d
    }
    function u(T, S) {
        var Q = [];
        var P = "";
        for (var R = 0; S.length > R; R++) {
            var W = false;
            if (($dy(S[R]).parents("[id^='dycont']").length > 0)) {
                W = true
            }
            var O = $dy(S[R]).width();
            var U = $dy(S[R]).height();
            var d = $dy(S[R]).is("area");
            var V = S[R].className;
            V = H(V);
            if ($dy(S[R]).data("adid") && $dy(S[R]).data("adid") != "") {
                P = V + "|" + $dy(S[R]).data("adid")
            } else {
                P = V + "|" + O + "x" + U
            }
            Q.push(P)
        }
        if (Q.length > 0) {
            if (T) {
                DY.ServerUtil.logImpressions(Q, 1)
            } else {
                DY.ServerUtil.logImpressions(Q, 0)
            }
        }
        setInterval(g, 10000);
        e()
    }
    function i() {
        n = true
    }
    function I() {
        return n
    }
    function y(d) {
        o = d
    }
    function x(d) {
        w = d
    }
    function H(P) {
        var Q = P;
        var O = P.split(" ");
        for (var d = 0; d < O.length; d++) {
            if (O[d] == "dy_unit" || O[d] == "dy-unit" || O[d] == "dyunit") {
                Q = "dy_unit";
                break
            } else {
                if (O[d].substring(0, 2) == "dy" && O[d].indexOf(DY.Util.sop)==-1) {
                    Q = O[d];
                    break
                }
            }
        }
        return Q
    }
    return {
        initTimer: G,
        updateTimer: k,
        visitSiteTimer: K,
        visitAdHoverTimer: D,
        visitClick: F,
        visit: a,
        spv: M,
        sendVDA: b,
        getVDA: l,
        lri: g,
        lric: e,
        sri: C,
        iv: E,
        li: u,
        setLink: y,
        setPos: x,
        done: i,
        isDone: I
    }
})();
DY.Detectors = (function() {
    var pageLocation = getPageLocation();
    function getPageLocation() {
        var result = document.location.href;
        try {
            var canon = document.querySelector("link[rel='canonical']");
            if (canon !== null && canon.href != "") {
                result = canon.href
            } else {
                var og = document.querySelector("meta[property='og:url']");
                if (og !== null && og.content != "") {
                    result = og.content
                }
            }
            if (typeof result === "undefined" || result === "") {
                result = document.location.href
            }
        } catch (exception) {}
        return result
    }
    function detectSR() {
        return {
            width: screen.width,
            height: screen.height,
            str: screen.width + "x" + screen.height
        }
    }
    function detectWS() {
        return {
            width: $dy(window).width(),
            height: $dy(window).height(),
            str: $dy(window).width() + "x" + $dy(window).height()
        }
    }
    function detectUA() {
        var w3cdom = typeof document.getElementById != "undefined" && typeof document.getElementsByTagName != "undefined" && typeof document.createElement != "undefined", u = navigator.userAgent.toLowerCase(), p = navigator.platform.toLowerCase(), windows = p ? /win/.test(p): /win/.test(u), mac = p ? /mac/.test(p): /mac/.test(u), linux = p ? /linux/.test(p): /linux/.test(u), webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")): false, chrome = /chrome/.test(u) ? parseFloat(u.replace(/^.*chrome\/(\d+(\.\d+)?).*$/, "$1")): false, firefox = /firefox/.test(u) ? parseFloat(u.replace(/^.*firefox\/(\d+(\.\d+)?).*$/, "$1")): false, safari = /safari/.test(u) ? parseFloat(u.replace(/^.*safari\/(\d+(\.\d+)?).*$/, "$1")): false, opera = window.opera ? true: false, mobile = /(iphone|ipod|blackberry|android|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|sonyericsson|symbian|treo mini)/.test(u), tablet = /(silk|ipad|android|kindle)/.test(u), fixedDevice = /(iphone|ipod|ipad|blackberry)/.test(u), iphone = /(iphone|ipod)/.test(u), android = /(android)/.test(u), crawl = /(specialagent|dybot)/.test(u), ie = /(msie|trident)/.test(u), q = ie && (function() {
            try {
                return top.document.compatMode == "BackCompat"
            } catch (e) {
                return document.compatMode == "BackComp"
            }
        })(), ieVer =- 1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            ie = true
        }
        if (ie || true) {
            var re = /msie ([0-9]{1,}[\.0-9]{0,})/;
            if (re.exec(u) != null) {
                ieVer = parseFloat(RegExp.$1)
            } else {
                if (/trident/.test(u)) {
                    re = /rv\:([0-9]{1,}[\.0-9]{0,})/;
                    if (re.exec(u) != null) {
                        ieVer = parseFloat(RegExp.$1)
                    }
                }
            }
            re = null
        }
        return {
            agent: u,
            mobile: mobile,
            fixedDevice: fixedDevice,
            w3: w3cdom,
            wk: webkit,
            ie: ie,
            ieVer: ieVer,
            win: windows,
            mac: mac,
            linux: linux,
            quirks: q,
            opera: opera,
            safari: safari,
            chrome: chrome,
            firefox: firefox,
            tablet: tablet,
            iph: iphone,
            and: android,
            crawler: crawl
        }
    }
    function detectAB(detected, notDetected) {
        var adBlock = false;
        var frame = null;
        var image = null;
        var adLoadInterval = 500;
        function createAds() {
            if (document.body != null) {
                frame = document.createElement("IFRAME");
                image = document.createElement("IMG");
                frame.id = "_dyframe";
                frame.src = location.protocol + "//ads.dynamicyield.com/abadimage/my-ad.html";
                frame.style.display = "block";
                frame.style.border = "none";
                image.id = "_dyimage";
                image.src = location.protocol + "//ads.dynamicyield.com/abadimage/textlink-ads.jpg";
                image.style.width = frame.style.width = "1px";
                image.style.height = frame.style.height = "1px";
                image.style.top = frame.style.top = "-1000px";
                image.style.left = frame.style.left = "-1000px";
                document.body.appendChild(frame);
                document.body.appendChild(image);
                setTimeout(checkAds, adLoadInterval);
                frame = image = null
            } else {
                setTimeout(createAds, 1000)
            }
        }
        function checkAds() {
            try {
                var imageNode = document.getElementById("_dyimage");
                var frameNode = document.getElementById("_dyframe");
                if (imageNode == null || typeof(imageNode) == "undefined" || imageNode.style.display.indexOf("none")>-1) {
                    adBlock = true
                } else {
                    if (frameNode == null || typeof(frameNode) == "undefined" || frameNode.style.visibility == "hidden") {
                        adBlock = true
                    } else {
                        if (frameNode.clientHeight == 0) {
                            adBlock = true
                        }
                    }
                }
                if (frameNode != null && frameNode != "undefined" && typeof(frameNode) != "undefined") {
                    frameNode.parentNode.removeChild(frameNode)
                }
                if (imageNode != null && imageNode != "undefined" && typeof(imageNode) != "undefined") {
                    imageNode.parentNode.removeChild(imageNode)
                }
                imageNode = frameNode = null;
                if (adBlock == true) {
                    eval(detected + "();")
                } else {
                    eval(notDetected + "();")
                }
            } catch (exception) {}
        }
        createAds()
    }
    return {
        sr: detectSR,
        ws: detectWS,
        ua: detectUA,
        ab: detectAB,
        loc: pageLocation
    }
})();
DY.Experiments = (function() {
    var l = {};
    var i = {};
    function c(r) {
        var z = [];
        var H = [];
        var G = q();
        var u = k();
        if (typeof(G) != "undefined" && G != null && G != "") {
            if (r) {
                try {
                    var y = G.split(DY.ExpUtils.expSep);
                    for (var A = 0; A < y.length; A++) {
                        var v = y[A].split(DY.ExpUtils.dataSep);
                        var B = v[0];
                        var x = v[1].split(DY.ExpUtils.verSep);
                        var D = false;
                        var F = false;
                        if (x.length > 1) {
                            if (typeof(x[1]) != "undefined" && x[1] != "") {
                                D = true
                            }
                        }
                        if (v.length >= 4 && v[3] == DY.ExpUtils.SELECTION) {
                            continue
                        }
                        var C = v[2].split(DY.ExpUtils.variSep);
                        for (var w = 0; w < C.length; w++) {
                            var E = C[w].split(DY.ExpUtils.verSep);
                            if (v.length < 4 && $dy.inArray(E[0], u)>-1) {
                                continue
                            }
                            if (E.length > 1) {
                                F = true
                            }
                            if (E[0] != DY.ExpUtils.notInExp) {
                                H.push(B, x[0], E[0]);
                                if (D) {
                                    H.push(1, x[1]);
                                    if (F) {
                                        H.push(unescape(E[1]))
                                    } else {
                                        H.push(null)
                                    }
                                } else {
                                    H.push(0, null, null)
                                }
                                var t = d(v[1]);
                                H.push(t);
                                H.push(f(x));
                                H.push(h(x));
                                z.push(H);
                                H = []
                            }
                        }
                    }
                } catch (s) {}
            } else {
                H = G
            }
        }
        return DYJSON.stringify(z)
    }
    function q() {
        var u = m(DY.ExpUtils.storageKey);
        var s = m(DY.ExpUtils.storageAttKey);
        var r = typeof(u) != "undefined" && u != "" && u != null;
        var t = typeof(s) != "undefined" && s != "" && s != null;
        if (t) {
            if (r) {
                return e(u, s)
            } else {
                return s
            }
        } else {
            return u
        }
    }
    function m(s) {
        var r = DY.CookieFunctions.getCookieVal(s, false, false);
        return r
    }
    function e(r, y) {
        var A = r;
        try {
            var s = r == null ? []: r.split(DY.ExpUtils.expSep);
            var t = {};
            for (var x = 0; x < s.length; ++x) {
                var u = s[x].split(DY.ExpUtils.dataSep);
                if (u.length >= 4 && u[3] == DY.ExpUtils.SELECTION_AND_ATTRIBUTION) {
                    var v = u[0];
                    t[v + ""] = 1
                }
            }
            var z = y == null ? []: y.split(DY.ExpUtils.expSep);
            for (var x = 0; x < z.length; ++x) {
                var u = z[x].split(DY.ExpUtils.dataSep);
                if (u.length >= 4 && u[3] == DY.ExpUtils.ATTRIBUTION) {
                    var v = u[0];
                    if (!t.hasOwnProperty(v)) {
                        A = A + DYO.ExpUtils.expSep + z[x]
                    }
                }
            }
        } catch (w) {
            return r + DY.ExpUtils.expSep + y
        }
        return A
    }
    function k() {
        var r = [];
        try {
            var v = DY.CookieFunctions.getCookieVal("_dye_vil", false, false);
            var t = DY.CookieFunctions.getCookieVal("_dye_vilses", true, false);
            var s = typeof(v) != "undefined" && v != "" && v != null;
            var x = typeof(t) != "undefined" && t != "" && t != null;
            var u = null;
            if (s) {
                if (x) {
                    u = v + DY.ExpUtils.variSep + t
                } else {
                    u = v
                }
            } else {
                u = t
            }
            if (typeof u !== "undefined" && u != null) {
                r = u.split(DY.ExpUtils.variSep)
            }
        } catch (w) {}
        return r
    }
    function f(r) {
        return r == null || r.length < 7 ? null : r[6]
    }
    function h(r) {
        return r == null || r.length < 8 || r[7] == DY.ExpUtils.SUB_MECHANISM_NA ? null : r[7]
    }
    var d = function(r) {
        var s = typeof(DY) !== "undefined" && typeof(DY.dyid) !== "undefined" ? DY.dyid: "";
        var t = "" + s + DY.ExpUtils.dataSep + r;
        return n(t)
    };
    var n = function(u) {
        var t = 0;
        if (u.length == 0) {
            return t
        }
        for (var r = 0; r < u.length; r++) {
            var s = u.charCodeAt(r);
            t = ((t<<5) - t) + s;
            t = t & t
        }
        return t
    };
    function o(s, x) {
        var w = q();
        if (typeof(w) !== "undefined" && w != null && w != "") {
            var v = w.split(DY.ExpUtils.expSep);
            for (var r = 0; r < v.length; r++) {
                var t = v[r].split(DY.ExpUtils.dataSep);
                if (t.length < 4 && t[0] == x) {
                    s.verId = t[1].split(DY.ExpUtils.verSep)[0];
                    var u = t[1];
                    s.expVisitId = d(u)
                }
            }
        }
    }
    function j(s) {
        var r = 0;
        if (!l.hasOwnProperty(s)) {
            r = 1;
            l[s] = 1
        }
        return r
    }
    function b(s) {
        var r = 0;
        if (!i.hasOwnProperty(s)) {
            r = 1;
            i[s] = 1
        }
        return r
    }
    function a(x, u, z, w, t) {
        var A = new Object();
        A.verId = null;
        A.expVisitId = null;
        A.mechanism = null;
        A.subMechanisms = null;
        A.expRi = null;
        A.varIdsArr = null;
        A.varsToReport = t;
        try {
            if (typeof(z) === "undefined" || z == null) {
                o(A, u)
            } else {
                var y = z.split(DY.ExpUtils.verSep);
                if (y.length > 0) {
                    A.verId = y[0];
                    A.expVisitId = d(z);
                    A.mechanism = f(y);
                    A.subMechanisms = h(y)
                }
            }
            A.expRi = j(u);
            A.varIdsArr = [];
            A.varsToReport = x == "ri" ? [] : t;
            for (var r = 0; r < t.length; r++) {
                var s = t[r].id || t[r];
                A.varIdsArr.push(s);
                if (x == "ri" && b(s)) {
                    A.varsToReport.push(t[r])
                }
            }
            if (typeof w !== "undefined" && w && typeof z !== "undefined") {
                g(u, z, A.varIdsArr.join(DY.ExpUtils.variSep))
            }
        } catch (v) {}
        return A
    }
    function g(v, t, r) {
        try {
            if (typeof(t) === "undefined" || t == null || t.length <= 0) {
                return 
            }
            var s = m(DY.ExpUtils.storageAttKey);
            var u = DY.ExpUtils.attributeVariations(s, v, t, r);
            DY.ExpStorageUtils.setDetected(DY.ExpUtils.storageAttKey, u)
        } catch (w) {}
    }
    return {
        getExperiments: c,
        logVariations: a,
        getMergedExperiments: e
    }
})();
DY.PubSub = (function() {
    var f;
    var b = false;
    function e() {
        if (!b) {
            b = true;
            f = $dy({})
        }
    }
    function a(g) {
        e();
        if (typeof g.on != "undefined" && typeof g.callback == "function") {
            f.on.apply(f, [g.on, g.callback])
        }
    }
    function d(g) {
        e();
        if (typeof g.on != "undefined") {
            f.off.apply(f, [g.on])
        }
    }
    function c(g) {
        e();
        if (typeof g.on != "undefined") {
            f.trigger.apply(f, [g.on])
        }
    }
    return {
        init: e,
        pub: c,
        sub: a,
        unsub: d
    }
})();
DY.QManager = (function(b) {
    var c = true;
    function e(j) {
        if (c) {
            if (typeof(DY.API) != "undefined" && typeof(DY.API.actions) != "undefined") {
                var m = DY.API.actions.length;
                for (var k = 0; k < m; k++) {
                    try {
                        var o = DY.API.actions[k];
                        switch (o[0]) {
                        case"event":
                            if (typeof(o[1]) == "object") {
                                var f = o[1].name;
                                var q = o[1].properties;
                                DY.ServerUtil.logEvent(f, q)
                            }
                            break;
                        case"smartTag":
                            if (typeof(o[1]) == "object") {
                                try {
                                    DYO.smartTag(o[1].name, o[1].selector, o[1].inline, o[1].callback)
                                } catch (n) {}
                            }
                            break;
                        case"callback":
                            if (typeof(o[1]) == "function") {
                                try {
                                    setTimeout(o[1], 0)
                                } catch (n) {}
                            }
                            break;
                        case"experiment":
                            if (typeof(o[1]) == "object") {
                                var f = "experiment-" + o[1].name;
                                var q = DYJSON.stringify(o[1].properties);
                                DY.ServerUtil.logEvent(f, q)
                            }
                            break;
                        case"track_event":
                            if (typeof(o[1]) == "object") {
                                var l = "";
                                var h = "";
                                if (typeof(o[1].properties) == "object") {
                                    l = o[1].properties.label;
                                    h = o[1].properties.value
                                } else {
                                    l = o[1].label;
                                    h = o[1].value
                                }
                                DY.ServerUtil.logDynamicPixel(o[1].category, o[1].action, l, h)
                            }
                            break;
                        case"track_pageview":
                            if (typeof(o[1]) == "object") {
                                DY.ServerUtil.userIdActions(o[1].url)
                            } else {
                                DY.ServerUtil.userIdActions()
                            }
                            break;
                        case"identify":
                            if (typeof(o[1]) == "object") {
                                DY.ServerUtil.identify(o[1].uid, o[1].type)
                            }
                            break;
                        case"siteVar":
                            if (typeof(o[1]) == "object") {
                                DY.SiteVariables.addSiteVar(o[1].id, o[1].value)
                            }
                            break;
                        case"customUserData":
                            if (typeof(o[1]) == "object") {
                                DY.ServerUtil.logCustomUserData(o[1])
                            }
                            break;
                        case"sub":
                            if (typeof(o[1]) == "object") {
                                DY.PubSub.sub(o[1])
                            }
                            break;
                        case"unsub":
                            if (typeof(o[1]) == "object") {
                                DY.PubSub.unsub(o[1])
                            }
                            break;
                        case"pub":
                            if (typeof(o[1]) == "object") {
                                DY.PubSub.pub(o[1])
                            }
                            break;
                        default:
                            break
                        }
                    } catch (g) {}
                }
                DY.API.actions = DY.API.actions.slice(m)
            }
            setTimeout(function() {
                e(j)
            }, j)
        }
    }
    function d(f) {
        e(f)
    }
    function a() {
        c = false
    }
    return {
        init: d,
        stop: a
    }
})();
DY.ServerUtil = (function() {
    var D = location.protocol + "//px." + DY.server;
    var z = "_dyrc";
    var q = {};
    var A = "***";
    var j = "**";
    function x(F, J) {
        try {
            var G;
            var H = parseInt(Math.random() * 1000000);
            if (window.XDomainRequest) {
                G = new XDomainRequest();
                G.CacheControl = "no-cache";
                G.onerror = function() {};
                G.ontimeout = function() {};
                G.onprogress = function() {};
                G.onload = function() {
                    delete q[H]
                }
            } else {
                if (window.XMLHttpRequest) {
                    G = new XMLHttpRequest()
                } else {
                    G = new ActiveXObject("Microsoft.XMLHTTP")
                }
            }
            q[H] = {
                address: F,
                params: J
            };
            G.onreadystatechange = function() {
                if (G.readyState == 2) {
                    delete q[H]
                }
            };
            var I = c(J);
            G.open("GET", F + "?_=" + H + "&" + I, true);
            G.send()
        } catch (E) {
            DY.Util.log("exception when sending request : " + E.message())
        }
    }
    function c(I, G) {
        var J = [];
        for (var H in I) {
            var F = G ? G + "[" + H + "]": H, E = I[H];
            J.push(typeof E == "object" && E !== null ? c(E, F) : encodeURIComponent(F) + "=" + encodeURIComponent(E))
        }
        return J.join("&")
    }
    function B(F, H, J) {
        if (!DY.ignore&&!DY.Detectors.ua().crawler) {
            if ($dy.browser.msie && window.XDomainRequest) {
                var G = F;
                var I = $dy.param(H);
                if (I != "") {
                    G = G + "?" + I
                }
                var E = new XDomainRequest();
                E.CacheControl = "no-cache";
                E.open("get", F + "?" + $dy.param(H) + "&r=" + Math.random());
                E.onerror = function() {};
                E.ontimeout = function() {};
                E.onprogress = function() {};
                if (J) {
                    E.onload = function() {
                        J(E.responseText)
                    }
                } else {
                    E.onload = function() {}
                }
                setTimeout(function() {
                    E.send()
                }, 0)
            } else {
                if (J) {
                    $dy.ajax({
                        type: "GET",
                        url: F,
                        data: H,
                        cache: false,
                        success: function(L, K, M) {
                            J(L)
                        }
                    })
                } else {
                    $dy.ajax({
                        type: "GET",
                        url: F,
                        data: H,
                        cache: false,
                        success: function(L, K, M) {}
                    })
                }
            }
        }
    }
    function n(F, H, I) {
        if ($dy.browser.msie && window.XDomainRequest) {
            var G = F;
            p = $dy.param(H);
            if (p != "") {
                G = G + "?" + p
            }
            var E = new XDomainRequest();
            E.open("get", F + "?" + $dy.param(H));
            E.CacheControl = "no-cache";
            if (I) {
                E.onload = function() {
                    I(E.responseText)
                }
            } else {
                E.onload = function() {}
            }
            E.send()
        } else {
            if (I) {
                $dy.ajax({
                    type: "GET",
                    url: F,
                    data: H,
                    cache: false,
                    dataType: "json",
                    success: function(K, J, L) {
                        I(K)
                    }
                })
            } else {
                $dy.ajax({
                    type: "GET",
                    url: F,
                    data: H,
                    cache: false,
                    dataType: "json",
                    success: function(K, J, L) {}
                })
            }
        }
    }
    function u(E) {
        var F = w();
        if (typeof(E) == "undefined" || E == "" || E == null) {
            E = DY.Detectors.loc
        }
        var H = r();
        var G = document.title;
        DY.Audiences.reportUserIdAction({
            ref: F,
            url: E
        });
        B(D + "/uia", {
            id: DY.dyid,
            se: DY.section,
            us: DY.DataCollection.sendVDA(),
            cl: DY.Colors.getAll(),
            rf: F,
            p: DY.DataCollection.spv(),
            sub: document.location.hostname,
            sd: DY.segdef,
            url: E,
            title: G,
            lay: DY.layout,
            ses: DY.session,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables(),
            gv: H,
            exps: DY.Experiments.getExperiments(true),
            lts: DY.Util.lts()
        }, null)
    }
    function v() {
        var F = DY.CookieFunctions.getCookieVal(z, true);
        if (F != null && typeof(F) != "undefined" && F != "") {
            var H = F.split(A);
            for (var E = 0; E < H.length; E++) {
                if (H[E] !== "") {
                    var G = H[E].split(j);
                    if (G[0] !== "") {
                        x(G[0], DY.StringUtils.pkv(G[1]))
                    }
                }
            }
            DY.CookieFunctions.deleteCookie(z, "/", DY.CookieFunctions.getSLD())
        }
    }
    function y(J, I, L, K, M) {
        var G = w();
        var E = r();
        var F = DY.Detectors.loc;
        DY.Audiences.reportItem({
            type: "UnitClick",
            data: parseInt(J.split("|")[1])
        });
        var H = {
            id: DY.dyid,
            sec: DY.section,
            elm: J,
            da: I,
            cl: DY.Colors.getAll(),
            l: DY.layout,
            p: DY.DataCollection.spv(),
            sd: DY.segdef,
            sr: DY.Detectors.sr().str,
            url: F,
            ses: DY.session,
            rf: G,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables(),
            gv: E,
            exps: DY.Experiments.getExperiments(true),
            aurl: L,
            apos: K,
            right: M ? "true": ""
        };
        x(D + "/ac", H)
    }
    function m(H, F) {
        var G = w();
        var E = DY.Detectors.loc;
        B(D + "/imp", {
            id: DY.dyid,
            sec: DY.section,
            imps: H,
            cl: DY.Colors.getAll(),
            bl: F,
            l: DY.layout,
            p: DY.DataCollection.spv(),
            sd: DY.segdef,
            rf: G,
            sr: DY.Detectors.sr().str,
            ses: DY.session,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables(),
            url: E,
            exps: DY.Experiments.getExperiments(true)
        }, null)
    }
    function o(F) {
        var E = w();
        B(D + "/rimp", {
            id: DY.dyid,
            sec: DY.section,
            rimps: F,
            cl: DY.Colors.getAll(),
            l: DY.layout,
            p: DY.DataCollection.spv(),
            sd: DY.segdef,
            rf: E,
            ses: DY.session,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables()
        }, null)
    }
    function k(E, G) {
        var I = w();
        var H = DY.Detectors.loc;
        var F = DY.Audiences.getEventName(E);
        DY.Audiences.reportItem({
            type: "SiteEvent",
            data: F
        });
        if (typeof G !== "undefined") {
            DY.Audiences.reportItem({
                type: "EventProp",
                data: ({
                    name: F,
                    props: ({
                        value: G
                    })
                })
            })
        }
        x(D + "/px", {
            uid: DY.dyid,
            sec: DY.section,
            id: E,
            cl: DY.Colors.getAll(),
            ses: DY.session,
            l: DY.layout,
            p: DY.DataCollection.spv(),
            sd: DY.segdef,
            rf: I,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables(),
            gv: G,
            url: H,
            exps: DY.Experiments.getExperiments(true)
        })
    }
    function C(H, G) {
        var F = w();
        var E = DY.Detectors.loc;
        DY.Audiences.reportItem({
            type: "SiteEvent",
            data: H
        });
        DY.Audiences.reportItem({
            type: "EventProp",
            data: {
                name: H,
                props: (G || {})
            }
        });
        DY.API("pub", {
            on: "dy-event-" + H
        });
        x(D + "/dpx", {
            name: H,
            props: DYJSON.stringify(G),
            uid: DY.dyid,
            sec: DY.section,
            cl: DY.Colors.getAll(),
            ses: DY.session,
            l: DY.layout,
            p: DY.DataCollection.spv(),
            sd: DY.segdef,
            rf: F,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables(),
            url: E,
            exps: DY.Experiments.getExperiments(true)
        })
    }
    function d(I, K, G, J) {
        var H = w();
        var F = DY.Detectors.loc;
        var E = I + "-" + K;
        DY.Audiences.reportItem({
            type: "SiteEvent",
            data: E
        });
        if (typeof J !== "undefined") {
            DY.Audiences.reportItem({
                type: "EventProp",
                data: ({
                    name: E,
                    props: ({
                        value: J
                    })
                })
            })
        }
        x(D + "/dpx", {
            ctgr: I,
            act: K,
            lab: G,
            val: J,
            uid: DY.dyid,
            sec: DY.section,
            cl: DY.Colors.getAll(),
            ses: DY.session,
            l: DY.layout,
            p: DY.DataCollection.spv(),
            sd: DY.segdef,
            rf: H,
            aud: a(),
            svars: DY.SiteVariables.getSiteVariables(),
            url: F,
            exps: DY.Experiments.getExperiments(true)
        })
    }
    function l(K, L, G, F, H, I) {
        var J = DY.Experiments.logVariations(K, L, I, H, G);
        if (typeof F !== "undefined" && F) {
            var E = null;
            if (typeof I === "undefined" || I == null) {
                E = J.verId
            } else {
                E = I.replace("-", "~")
            }
            if (E != null && J.varIdsArr != null) {
                DY.CookieFunctions.setSessionCookie("DYEXPC" + DY.section + "-" + L, E + "-" + J.varIdsArr.join("."), "/", DY.CookieFunctions.getSLD())
            }
        }
        if (typeof J.verId !== "undefined" && J.verId != null && J.varsToReport != null && J.varsToReport.length > 0) {
            x(D + "/var", {
                uid: DY.dyid,
                sec: DY.section,
                t: K,
                e: L,
                p: DY.DataCollection.spv(),
                ve: J.verId,
                va: DYJSON.stringify(J.varsToReport),
                ses: DY.session,
                aud: a(),
                expVisitId: J.expVisitId,
                mech: J.mechanism,
                smech: J.subMechanisms,
                eri: J.expRi
            })
        }
    }
    function g(F, E) {
        if (typeof(E) == "undefined" || E == null || E == "") {
            E = "id"
        }
        B(D + "/id", {
            uid: DY.dyid,
            sec: DY.section,
            cuid: F,
            cuidType: E
        }, null)
    }
    function f(E, F) {
        try {
            B(D + "/avar", {
                sec: DY.section,
                url: E,
                vars: F
            }, null)
        } catch (G) {}
    }
    function s(G) {
        var E = G.name;
        var F = G.action;
        delete G.name;
        delete G.action;
        B(D + "/cud", {
            sec: DY.section,
            uid: DY.dyid,
            n: E,
            act: F,
            d: DYJSON.stringify(G)
        })
    }
    function b(F, E) {
        if (DY.vu) {
            B(D + "/vu", {
                sec: DY.section,
                uid: DY.dyid,
                p: F,
                d: DYJSON.stringify(E)
            })
        }
    }
    function w() {
        var G = document.referrer;
        try {
            if (G != null && typeof(G) != "undefined" && G != "") {
                smartLinkRef = DY.SmartLinks.getSmartLinkRef();
                if (smartLinkRef != null) {
                    G = smartLinkRef.split("//")[1]
                } else {
                    G = G.split("/")[2];
                    if (G.indexOf("google")!=-1) {
                        G = G + "/" + ((document.referrer).split("/")[3]).split("?")[0];
                        try {
                            if ((document.referrer).indexOf("?")!=-1) {
                                query = (document.referrer).split("?")[1].split("&");
                                for (var F = 0; F < query.length; F++) {
                                    if (query[F].indexOf("q=")!=-1) {
                                        G = G + "?" + query[F];
                                        break
                                    }
                                }
                            }
                        } catch (E) {}
                    }
                    if (G == document.location.hostname) {
                        G = "internal"
                    }
                }
            }
        } catch (E) {}
        return G
    }
    function r() {
        var F = "";
        try {
            if (DY.section == 8765250) {
                var E = $dy('.paneContent td:contains("Amount") ~ td').text();
                F = Number(E.replace(/[^0-9\.]+/g, ""))
            } else {
                if (DY.section == 8765247) {
                    F = $dy("tfoot .total:eq(2) nobr").text().substring(1)
                } else {
                    if (DY.goalScripts != null && DY.goalScripts.length > 0) {
                        for (var H = 0; H < DY.goalScripts.length; H++) {
                            try {
                                if (typeof(DY.goalScripts[H].val) != "undefined" && DY.goalScripts[H].val != "") {
                                    F = DY.goalScripts[H].val;
                                    break
                                }
                            } catch (G) {
                                DY.Util.log("Error collecting goal: " + G)
                            }
                        }
                    }
                }
            }
        } catch (G) {
            DY.Util.log("Error collecting goal: " + G)
        }
        if (!F || F == "undefined") {
            F = ""
        }
        return F
    }
    function t(E) {
        var G = [];
        var F = E.length;
        for (var I = 0; I < F; I++) {
            for (var H = I + 1; H < F; H++) {
                if (E[I] === E[H]) {
                    H=++I
                }
            }
            G.push(E[I])
        }
        return G
    }
    function i(F, J) {
        var H = [];
        var G = F.length;
        for (var I = 0; I < G; I++) {
            var E = J(F[I]);
            if (E !== null) {
                H.push(E)
            }
        }
        return H
    }
    function a() {
        var E = DY.Audiences.getUserAudiences();
        try {
            if (DY.aud != null && typeof(DY.aud) != "undefined") {
                E = E.concat(DY.aud.split("."));
                if (E != "" && E != []) {
                    E = t(E)
                }
            }
            E = i(E, function(G) {
                return G == "" ? null : G
            });
            E = E.join(".");
            return E
        } catch (F) {
            return DY.aud
        }
    }
    function e() {
        var H = a();
        if (H == null || H === "undefined" || H == "") {
            return []
        }
        var G = H.split(".");
        var E = [];
        for (var F = 0; F < G.length; F++) {
            if (G[F] != null && G[F] != "") {
                E.push(parseInt(G[F]))
            }
        }
        return E
    }
    function h() {
        try {
            var F = "";
            for (var E in q) {
                F += q[E].address + j + DY.StringUtils.skv(q[E].params) + A
            }
            DY.CookieFunctions.setCookie(z, F, 1, "/", DY.CookieFunctions.getSLD())
        } catch (G) {}
    }
    return {
        getRef: w,
        logClick: y,
        logDelayedData: v,
        logImpressions: m,
        logRealImpressions: o,
        logPixel: k,
        logDynamicPixel: d,
        logEvent: C,
        logVariation: l,
        logArtVariation: f,
        logCustomUserData: s,
        logVerbose: b,
        userIdActions: u,
        getUserAudiences: e,
        sdd: h,
        identify: g
    }
})();
DY.SiteVariables = (function() {
    var siteVariablesCookie = "_dysvar_" + DY.section;
    var VARS_SEPERATOR = ".@.";
    var KV_SEPERATOR = ":@:";
    DY.svarsValues = {};
    function calculateSiteVariables() {
        DY.Util.log("At calculateSiteVariables");
        try {
            if (DY.svars != null && DY.svars.length > 0) {
                var siteVarsMapFromCookie = getSiteVarsFromCookie();
                DY.Util.log("siteVarsMapFromCookie:");
                DY.Util.log(siteVarsMapFromCookie);
                for (var i = 0; i < DY.svars.length; i++) {
                    var value = "";
                    try {
                        var evalRes = eval(DY.svars[i].script);
                        if (evalRes != null && typeof(evalRes) != "undefined" && evalRes != "undefined" && evalRes != "") {
                            value = $dy.trim(evalRes)
                        }
                    } catch (exception) {
                        DY.Util.log("Error collecting site variable: " + exception)
                    }
                    if (value == null || value == "" || value == "undefined" || typeof(evalRes) == "undefined") {
                        if (siteVarsMapFromCookie != null && typeof(siteVarsMapFromCookie) != "undefined") {
                            var valFromCookie = siteVarsMapFromCookie[DY.svars[i].id];
                            DY.Util.log("!! Using value from cookie: " + DY.svars[i].id + " = " + valFromCookie);
                            value = valFromCookie == null ? "" : valFromCookie
                        }
                    }
                    addSiteVar(DY.svars[i].id, value)
                }
                saveSiteVarCookie()
            }
        } catch (exception) {
            DY.Util.log(exception)
        }
    }
    function addSiteVar(id, value) {
        DY.Util.log("addSiteVar: " + id + ": '" + value + "'");
        DY.svarsValues[id] = value;
        DY.Audiences.reportItem({
            type: "SiteVariable",
            data: {
                id: id,
                value: value
            }
        })
    }
    function getSiteVariables() {
        var retStr = stringifyValues(DY.svarsValues, false);
        DY.Util.log("getSiteVariables: " + retStr);
        return retStr
    }
    function saveSiteVarCookie() {
        try {
            var str = stringifyValues(DY.svarsValues, true);
            DY.Util.log("Saving site var cookie: " + str);
            DY.CookieFunctions.setSessionCookie(siteVariablesCookie, str, "/", null)
        } catch (ex) {}
    }
    function getSiteVarsFromCookie() {
        try {
            var str = DY.CookieFunctions.getCookieVal(siteVariablesCookie, true);
            DY.Util.log("getSiteVarsFromCookie: read from cookie: " + str);
            return parseValuesFromString(str)
        } catch (ex) {
            return null
        }
    }
    function stringifyValues(svars, shouldEscape) {
        var stringsArray = [];
        for (var key in svars) {
            var str = key + KV_SEPERATOR + svars[key];
            if (shouldEscape) {
                str = escape(str)
            }
            stringsArray.push(str)
        }
        return stringsArray.join(VARS_SEPERATOR)
    }
    function parseValuesFromString(str) {
        var siteVars = {};
        var array = str.split(VARS_SEPERATOR);
        for (var i = 0; i < array.length; i++) {
            var siteVarStr = array[i];
            if (siteVarStr != null && siteVarStr != "") {
                siteVarStr = unescape(siteVarStr);
                var siteVar = siteVarStr.split(KV_SEPERATOR);
                if (siteVar.length == 2) {
                    siteVars[siteVar[0]] = siteVar[1]
                }
            }
        }
        return siteVars
    }
    return {
        addSiteVar: addSiteVar,
        calculateSiteVariables: calculateSiteVariables,
        getSiteVariables: getSiteVariables
    }
})();
DY.SmartLinks = (function() {
    var b = "link." + DY.server + "/";
    function a() {
        smartLinkCleanRef = null;
        try {
            if (document.referrer !== "undefined" && document.referrer) {
                var e = DY.Util.stripQueryStringAndHashFromPath(document.referrer);
                var c = e.indexOf(b);
                if (c!=-1 && (c + b.length) < e.length) {
                    smartLinkCleanRef = e
                }
            }
        } catch (d) {
            DY.Util.log(d)
        }
        return smartLinkCleanRef
    }
    return {
        getSmartLinkRef: a
    }
})();
DY.vd = (function(v, q, t) {
    var x = "|";
    var g = 0;
    var i = v;
    var k = q;
    var y = t;
    var j = new Array(i);
    var r = new Array(k);
    var a = new Array(y);
    var f = 0;
    var h = 0;
    var o = 0;
    var b = 0;
    function n() {
        var d = new Date();
        f = s(d);
        h = e(d);
        o = d.getMonth();
        b = d.getYear();
        l(i + 1, i, j);
        l(k + 1, k, r);
        l(y + 1, y, a)
    }
    function z(m) {
        var w = m.split(x);
        if (w[0] == g) {
            f = w[1];
            h = w[2];
            o = w[3];
            b = w[4];
            for (var d = 0; d < i; d++) {
                j[d] = w[d + 5]
            }
            for (var d = 0; d < k; d++) {
                r[d] = w[d + 5 + i]
            }
            for (var d = 0; d < y; d++) {
                a[d] = w[d + 5 + i + k]
            }
        } else {
            n()
        }
    }
    function u() {
        return g + x + f + x + h + x + o + x + b + x + j.join(x) + x + r.join(x) + x + a.join(x)
    }
    function c(w) {
        var d = s(w);
        var m = e(w);
        var A = w.getMonth();
        var B = w.getYear() - b;
        if (B > 0) {
            b += B
        }
        if ((d + (365 * B)) != f) {
            l(d + (365 * B) - f, i, j);
            f = d;
            if ((m + (53 * B)) != h) {
                l(m + (53 * B) - h, k, r);
                h = m
            }
            if ((A + (12 * B)) != o) {
                l(A + (12 * B) - o, y, a);
                o = A
            }
        }
        j[0]++;
        r[0]++;
        a[0]++
    }
    function l(d, w, A) {
        if (d > 0) {
            if (d > w) {
                for (var m = 0; m < w; m++) {
                    A[m] = 0
                }
            } else {
                for (var m = (w - 1 - d); m>-1; m--) {
                    A[m + d] = A[m]
                }
                for (var m = 0; m < d; m++) {
                    A[m] = 0
                }
            }
        }
    }
    function e(m) {
        var d = new Date();
        d.setFullYear(m.getFullYear(), 0, 1);
        var w = Math.ceil((((m - d) / 86400000) + d.getDay() + 1) / 7);
        m = d = null;
        return w
    }
    function s(m) {
        var d = new Date();
        d.setFullYear(m.getFullYear(), 0, 1);
        var w = Math.ceil((m - d) / 86400000);
        m = d = null;
        return w
    }
    return {
        d: j,
        initS: z,
        initA: n,
        toString: u,
        visit: c
    }
})(7, 6, 6);
DY.WindowActions = (function() {
    var o = false;
    var g = false;
    var j = false;
    var e = false;
    var h = false;
    function c() {
        return o
    }
    function k() {
        o = false;
        if (DY.Util.debug) {
            document.body.className = "blurred"
        }
    }
    function f() {
        o = true;
        if (DY.Util.debug) {
            document.body.className = "focused"
        }
    }
    function s() {
        DY.Util.stopSiteTimer();
        try {
            DY.ServerUtil.sdd();
            DY.DataCollection.sri();
            if (typeof(DY.lri) != "undefined" && DY.lri) {
                DY.DataCollection.lri()
            }
        } catch (t) {}
    }
    function b() {
        DY.Util.startSiteTimer()
    }
    function i(u, t) {
        if (u == "onAd") {
            DY.Util.monitorAdClick(t, false)
        }
    }
    function d(u, t) {
        if (u == "onAd") {
            DY.Util.monitorAdClick(t, true)
        }
    }
    function n(t) {
        if (t == "onAd") {
            DY.Util.startAdHoverTimer()
        }
    }
    function m(t) {
        if (t == "onAd") {
            DY.Util.stopAdHoverTimer()
        }
    }
    function l(v, u) {
        if (typeof($dy.dynotify) != "undefined") {
            var t = {};
            t.style = "dy-notify";
            if (u.duration < 0) {
                t.autoHide = false
            } else {
                t.autoHideDelay = u.duration
            }
            if (u.position == 0) {
                t.globalPosition = "bottom right"
            } else {
                if (u.position == 1) {
                    t.globalPosition = "bottom left"
                } else {
                    if (u.position == 2) {
                        t.globalPosition = "top right"
                    } else {
                        if (u.position == 3) {
                            t.globalPosition = "top left"
                        }
                    }
                }
            }
            setTimeout(function() {
                if (v.callback) {
                    v.callback()
                }
                var w = ("dy-not" + Math.random()).replace("0.", "");
                $dy.dynotify({
                    title: '<div id="' + w + '"></div>'
                }, t);
                $dy("#" + w + "").append($dy(v.element))
            }, u.delay)
        } else {
            setTimeout(function() {
                l(v, u)
            }, 200)
        }
    }
    function r() {
        if (!h) {
            DY.Util.addCss(".dy-lb-close", 'position:absolute;top:-14px;right:-13px;cursor:pointer;color: #fff;border: 1px solid #918686;border-radius: 30px;background: #575757;font-size: 25px;font-weight: bold;display: inline-block;line-height: 0px;padding: 13px 6px;font-family: "Times Roman", times, serif;');
            DY.Util.addCss(".dy-lb-close:before", 'content:"\u00D7";');
            h = true
        }
    }
    function q(x, v) {
        if (typeof($dy.fn.lightbox_me) != "undefined") {
            var w = document.createElement("div");
            w.setAttribute("style", "-webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);-moz-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2)");
            var u = document.createElement("div");
            u.className = "dy-lb-close";
            r();
            w.appendChild(x.element);
            var t = {};
            q.classPrefix = "dy-";
            t.destroyOnClose = true;
            t.closeSelector = ".dy-lb-close";
            if (v.position == 0) {
                t.centered = true
            } else {
                if (v.position == 1) {
                    t.modalCSS = {
                        top: "20px"
                    }
                } else {
                    if (v.position == 2) {
                        t.modalCSS = {
                            bottom: "20px"
                        }
                    }
                }
            }
            if (v.closing == 0) {
                t.closeClick = false;
                w.appendChild(u)
            } else {
                if (v.closing == 1) {} else {
                    if (v.closing == 2) {
                        w.appendChild(u)
                    } else {
                        if (v.closing == 3) {
                            t.closeEsc = false;
                            t.closeClick = false
                        }
                    }
                }
            }
            if (v.background == 0) {
                t.overlayCSS = {
                    background: "black",
                    opacity: v.opacity
                }
            } else {
                if (v.background == 1) {
                    t.overlayCSS = {
                        background: "white",
                        opacity: v.opacity
                    }
                } else {
                    if (v.background == 2) {
                        t.overlayCSS = {
                            background: "transparent"
                        }
                    }
                }
            }
            t.onLoad = function() {
                if (x.callback) {
                    x.callback()
                }
            };
            setTimeout(function() {
                var y = $dy(w).lightbox_me(t);
                if (v.duration!=-1) {
                    setTimeout(function() {
                        y.trigger("close")
                    }, v.duration)
                }
            }, v.delay)
        } else {
            setTimeout(function() {
                q(x, v)
            }, 200)
        }
    }
    function a() {
        var w = 0;
        var u = 1;
        var t = 2;
        var v = w;
        $dy(document).mousemove(function(x) {
            if (x.clientY > 250) {
                v = w
            } else {
                if (x.clientY > 50) {
                    v = u
                } else {
                    if (v == u) {
                        v = t
                    }
                }
            }
            if (v == t) {
                DY.API("pub", {
                    on: "dy-mouse-leave-doc"
                });
                v = w
            }
        })
    }
    return {
        inFocus: c,
        onLoad: b,
        onUnload: s,
        onClick: i,
        onRightClick: d,
        onHover: n,
        onUnHover: m,
        onBlur: k,
        onFocus: f,
        overlay: q,
        notify: l,
        initMouseLeave: a
    }
})();
DYWork = (function() {
    var serverFreq = 50;
    var freq = 600;
    var cookieSupport = true;
    var cookieDeleter = false;
    var noThird = false;
    var initd = false;
    var toslim = 40;
    var ltoslim = 300;
    var toalim = 10;
    var clklim = 1;
    var abd = false;
    var ready = false;
    var queueSample = 50;
    var dfreq = [1, 5, 10, 25];
    var localIdCookie = "_dyid";
    var mismatchCount = "_dycmc";
    var firstSessionCookie = "_dyfs";
    var markRetry = 10;
    var markInterval = 500;
    var finishedMarking = false;
    function isAB() {
        return abd
    }
    function initSlim() {
        try {
            if (!initd) {
                DY.Util.log("DY Slim initializing...");
                $dy(window).unload(DY.WindowActions.onUnload);
                initd = true;
                try {
                    DY.ServerUtil.logDelayedData()
                } catch (ex) {}
                DY.QManager.init(queueSample);
                $dy(document).ready(function() {
                    try {
                        setTimeout(function() {
                            try {
                                DY.AdDetection.mark();
                                DY.AdDetection.execute();
                                DY.DataCollection.li(abd, $dy(DY.AdDetection.dycls()))
                            } catch (exception) {}
                        }, 1000)
                    } catch (exception) {}
                })
            }
        } catch (exception) {}
    }
    function init() {
        try {
            if (!initd) {
                DY.Util.log("DY initializing...");
                $dy(window).focus(DY.WindowActions.onFocus);
                $dy(window).blur(DY.WindowActions.onBlur);
                $dy(window).unload(DY.WindowActions.onUnload);
                $dy(window).ready(DY.WindowActions.onLoad);
                initd = true;
                var ab = DY.Colors.get("abc");
                if (ab != "" && ab != null && ab != "undefined") {
                    abd = true
                }
                if (typeof(DY.segdef) != "undefined" && DY.segdef != "") {
                    try {
                        DY.segdef = eval(DY.segdef)
                    } catch (exception) {}
                } else {
                    DY.segdef = ""
                }
                DY.SiteVariables.calculateSiteVariables();
                calculateGoals();
                DY.QManager.init(queueSample);
                try {
                    DY.ServerUtil.logDelayedData()
                } catch (ex) {}
                function contMark(count) {
                    if (count > 0) {
                        DY.AdDetection.cmark();
                        DY.ArticleExp.execute();
                        if (!finishedMarking) {
                            setTimeout(function() {
                                contMark(count - 1)
                            }, markInterval)
                        }
                    } else {
                        DY.ArticleExp.logVariations()
                    }
                }
                var uadata = DY.Detectors.ua();
                if (!uadata.ie || uadata.ieVer > 8) {
                    contMark(markRetry)
                }
                $dy(document).ready(function() {
                    try {
                        finishedMarking = true;
                        addSegment();
                        setTimeout(function() {
                            try {
                                DY.ArticleExp.logVariations();
                                DY.AdDetection.execute();
                                DY.DataCollection.li(abd, $dy(DY.AdDetection.dycls()));
                                DY.DataCollection.done()
                            } catch (exception) {}
                        }, 1000)
                    } catch (exception) {}
                });
                postInitSuccess()
            }
        } catch (exception) {}
    }
    function postInitSuccess() {
        try {
            if (window.location.search.length > 1 && window.location.search.indexOf("from_dy=1")!=-1) {
                var sendTo = location.protocol + "//adm." + DY.server;
                top.window.postMessage({
                    state: "afterInit",
                    secId: DY.scsec
                }, sendTo)
            }
        } catch (e) {}
    }
    function addSegment() {
        if (typeof(DY.segdef) == "undefined") {
            DY.segdef == ""
        }
        var uadata = DY.Detectors.ua();
        if (uadata.chrome) {
            var segdiv = document.createElement("div");
            segdiv.id = "dysegdiv";
            segdiv.setAttribute("data-id", DY.section + ":" + DY.layout + ":" + DY.segdef);
            document.body.appendChild(segdiv)
        }
    }
    function calculateGoals() {
        try {
            if (DY.goalScripts != null && DY.goalScripts.length > 0) {
                for (var i = 0; i < DY.goalScripts.length; i++) {
                    try {
                        var goalJs = eval(DY.goalScripts[i].script);
                        if (goalJs != null && goalJs != "" && ["string", "number"].indexOf(typeof(goalJs))) {
                            var value = Number(goalJs);
                            if (value != NaN && value != 0) {
                                DY.goalScripts[i].val = value
                            }
                        }
                    } catch (exception) {}
                }
            }
        } catch (exception) {}
    }
    function commonFlow() {
        DY.WindowActions.initMouseLeave();
        DY.Predict.updatePredictStorage()
    }
    function slim() {
        setReady();
        initSlim();
        var UID = userIdentification();
        color(null, UID);
        DY.Audiences.reportItem({
            type: "Referrer",
            data: DY.ServerUtil.getRef()
        });
        commonFlow()
    }
    function work() {
        try {
            setReady();
            init();
            var uadata = DY.Detectors.ua();
            var UID = userIdentification();
            if (cookieSupport) {
                if (DY.Util.checkCall(100)) {
                    if (!uadata.ie) {
                        $dy(document).ready(function() {
                            DY.Detectors.ab("DY.Colors.colorAdBlock", "DY.Colors.noAdBlock")
                        })
                    }
                }
                var data = collectData(UID);
                var cl = color(data.d, UID)
            }
            if (typeof DY.geoCode !== "undefined" && typeof DY.geoCont !== "undefined") {
                DY.CookieFunctions.setCookie("_dy_geo", DY.geoCode + "." + DY.geoCont, 3, "/", DY.CookieFunctions.getSLD())
            }
            if (DY.Util.checkCall(serverFreq)) {
                DY.ServerUtil.userIdActions()
            }
            commonFlow()
        } catch (exception) {}
    }
    function userIdentification() {
        var hasLocalStorage = true;
        try {
            hasLocalStorage = (typeof window.localStorage).length >= 0
        } catch (e) {
            hasLocalStorage = false
        }
        if (hasLocalStorage) {
            var UID = DY.dyid;
            var localUID = DY.CookieFunctions.getCookie(localIdCookie);
            if (typeof(localUID) == "undefined" || localUID == null || localUID == "null" || isNaN(parseInt(localUID))) {
                DY.CookieFunctions.setCookie(localIdCookie, UID, 30, "/", null);
                DY.CookieFunctions.setSessionCookie(firstSessionCookie, true, "/", null)
            } else {
                if (UID != localUID) {
                    DY.dyid = localUID;
                    DY.nu = false;
                    UID = localUID;
                    cookieDeleter = true;
                    var delCount = DY.CookieFunctions.getCookie(mismatchCount);
                    DY.CookieFunctions.setCookie(mismatchCount, ++delCount, 30, "/", null);
                    if (delCount > 5) {
                        noThird = true
                    }
                }
            }
            if (DY.CookieFunctions.enabled()) {
                if (UID == null || UID == "undefined") {
                    UID =- 2
                }
            } else {
                cookieSupport = false;
                UID =- 1
            }
        } else {
            cookieSupport = false;
            UID =- 1
        }
        return UID
    }
    function collectData(uid) {
        var data = DY.DataCollection.visit(uid);
        return data
    }
    function color(usdata, uid) {
        var uadata = DY.Detectors.ua();
        var scdata = DY.Detectors.sr();
        var windata = DY.Detectors.ws();
        var color = "";
        if (uadata.mobile || uadata.tablet) {
            color += "d."
        }
        if (uadata.iph) {
            color += "ip."
        }
        if (uadata.tablet) {
            if (uadata.and) {
                if (scdata.width > 1024) {
                    color += "tb."
                } else {
                    color += "an."
                }
            } else {
                color += "tb."
            }
        }
        if (uadata.win) {
            color += "w."
        }
        if (uadata.mac) {
            color += "m."
        }
        if (uadata.linux) {
            color += "l."
        }
        if (DY.slim != "true") {
            if (DY.vd.d[0] > dfreq[0]) {
                if (DY.vd.d[0] > dfreq[1]) {
                    if (DY.vd.d[0] > dfreq[2]) {
                        if (DY.vd.d[0] > dfreq[3]) {
                            color += "frv5."
                        } else {
                            color += "frv4."
                        }
                    } else {
                        color += "frv3."
                    }
                } else {
                    color += "frv2."
                }
            } else {
                color += "frv1."
            }
            if (windata.width > 1366) {
                color += "ws."
            } else {
                if (windata.width > 1024) {
                    color += "ms."
                } else {
                    color += "ss."
                }
            }
            if (usdata[4] < freq) {
                color += "frs."
            }
            var vda = DY.DataCollection.getVDA(usdata);
            if (vda[0] > ltoslim) {
                color += "ltos."
            } else {
                if (vda[0] > toslim) {
                    color += "tos."
                }
            }
            if (vda[1] > toalim) {
                color += "ah."
            }
            if (vda[2] > clklim) {
                color += "clk."
            }
            if (!cookieSupport) {
                color += "nc."
            }
            if (cookieDeleter) {
                color += "cd."
            }
            if (noThird) {
                color += "nc3."
            }
            if (typeof(FB) != "undefined" && FB != null) {
                if (FB.getUserID() > 0) {
                    color += "fb."
                }
            }
        }
        if (uadata.ie) {
            color += "i" + uadata.ieVer + "."
        } else {
            if (uadata.firefox) {
                color += "f."
            } else {
                if (uadata.safari) {
                    if (uadata.chrome) {
                        color += "c."
                    } else {
                        if (uadata.safari) {
                            color += "s."
                        }
                    }
                } else {
                    if (uadata.opera) {
                        color += "o."
                    } else {
                        color += "ob."
                    }
                }
            }
        }
        var isFirst = DY.CookieFunctions.getCookieVal(firstSessionCookie, true);
        if (isFirst != null && typeof(isFirst) != "undefined" && isFirst != "") {
            color += "fst."
        }
        color = prependControlGroup(color);
        DY.Colors.set("st", color);
        uadata = null;
        return color
    }
    function isReady() {
        return ready
    }
    function setReady() {
        ready = true
    }
    function prependControlGroup(color) {
        if (DY.color.indexOf("cg")!=-1) {
            color = "cg." + prependTestColor(color)
        } else {
            if (DY.color.indexOf("tg")!=-1) {
                color = "tg." + prependTestColor(color)
            }
        }
        return color
    }
    function prependTestColor(color) {
        if (DY.section == 8764247) {
            if (DY.color.indexOf("t117")!=-1) {
                color = "t117." + color
            } else {
                if (DY.color.indexOf("t118")!=-1) {
                    color = "t118." + color
                }
            }
        } else {
            if (DY.section == 8764249 || DY.section == 8764250 || DY.section == 8764251) {
                if (DY.color.indexOf("t105")!=-1) {
                    color = "t105." + color
                } else {
                    if (DY.color.indexOf("t106")!=-1) {
                        color = "t106." + color
                    } else {
                        if (DY.color.indexOf("t107")!=-1) {
                            color = "t107." + color
                        } else {
                            if (DY.color.indexOf("t110")!=-1) {
                                color = "t110." + color
                            } else {
                                if (DY.color.indexOf("t111")!=-1) {
                                    color = "t111." + color
                                }
                            }
                        }
                    }
                }
            }
        }
        return color
    }
    return {
        ab: isAB,
        work: work,
        slim: slim,
        isReady: isReady
    }
})();
function dyWaitForJQuery() {
    if (typeof($dy) == "undefined" || typeof($dy(window)) == "undefined" || typeof($dy.renderSmartTagSlider) == "undefined") {
        setTimeout(dyWaitForJQuery, 100)
    } else {
        if (typeof(DY.slim) != "undefined" && DY.slim == "true") {
            DYWork.slim()
        } else {
            DYWork.work()
        }
    }
}
dyWaitForJQuery();

