(function() {
    if (!a) {
        var a = (function() {
            var g = {};
            var b = "theia";
            var d = [];
            var c = 200;
            var f;
            g[b] = {
                IE: /msie/i.test(navigator.userAgent),
                E: function(h) {
                    if (typeof h === "string") {
                        return document.getElementById(h)
                    } else {
                        return h
                    }
                },
                C: function(h) {
                    var i;
                    h = h.toUpperCase();
                    if (h == "TEXT") {
                        i = document.createTextNode("")
                    } else {
                        if (h == "BUFFER") {
                            i = document.createDocumentFragment()
                        } else {
                            i = document.createElement(h)
                        }
                    }
                    return i
                },
                log: function() {
                    var n, m = arguments, j = m.length, i = [].slice.apply(m, [0, j]), k = "error", h;
                    while (i[--j]) {
                        if (i[j] instanceof Error) {
                            n = i.splice(j, 1)[0];
                            break
                        }
                    }
                    if (!n) {
                        n = new Error();
                        k = "log"
                    }
                    h = [i, k, new Date().getTime(), n.message, n.stack];
                    if (f) {
                        try {
                            f.apply(null, h)
                        } catch (o) {}
                    } else {
                        d.length >= c && d.shift();
                        d.push(h)
                    }
                },
                _regLogFn: function(h) {
                    f = h
                },
                _clearLogList: function() {
                    return d.splice(0, d.length)
                }
            };
            var e = g[b];
            e.register = function(m, h, l) {
                if (!l || typeof l != "string") {
                    l = b
                }
                if (!g[l]) {
                    g[l] = {}
                }
                var j = g[l];
                var o = m.split(".");
                var n = j;
                var i = null;
                while (i = o.shift()) {
                    if (o.length) {
                        if (n[i] === undefined) {
                            n[i] = {}
                        }
                        n = n[i]
                    } else {
                        if (n[i] === undefined) {
                            try {
                                if (l && l !== b) {
                                    if (m === "core.util.listener") {
                                        n[i] = g[b].core.util.listener;
                                        return true
                                    }
                                    if (m === "core.util.connect") {
                                        n[i] = g[b].core.util.connect;
                                        return true
                                    }
                                }
                                n[i] = h(j);
                                return true
                            } catch (p) {
                                setTimeout(function() {
                                    console.log(p)
                                }, 0)
                            }
                        }
                    }
                }
                return false
            };
            e.unRegister = function(l, j) {
                if (!j || typeof j != "string") {
                    j = b
                }
                var i = g[j];
                var n = l.split(".");
                var m = i;
                var h = null;
                while (h = n.shift()) {
                    if (n.length) {
                        if (m[h] === undefined) {
                            return false
                        }
                        m = m[h]
                    } else {
                        if (m[h] !== undefined) {
                            delete m[h];
                            return true
                        }
                    }
                }
                return false
            };
            e.regShort = function(h, i) {
                if (e[h] !== undefined) {
                    throw "[" + h + "] : short : has been register"
                }
                e[h] = i
            };
            e.shortRegister = function(m, h, l) {
                if (!l || typeof l != "string") {
                    l = b
                }
                var j = g[l];
                var o = m.split(".");
                if (!h) {
                    return false
                }
                if (j[h]) {
                    return false
                }
                var n = j;
                var i = null;
                while (i = o.shift()) {
                    if (o.length) {
                        if (n[i] === undefined) {
                            return false
                        }
                        n = n[i]
                    } else {
                        if (n[i] !== undefined) {
                            if (j[h]) {
                                return false
                            }
                            j[h] = n[i];
                            return true
                        }
                    }
                }
                return false
            };
            e.getPKG = function(h) {
                if (!h || typeof h != "string") {
                    h = b
                }
                return g[h]
            };
            return e
        })()
    }
    a.register("core.arr.isArray", function(b) {
        return function(c) {
            return Object.prototype.toString.call(c) === "[object Array]"
        }
    });
    a.register("core.arr.foreach", function(d) {
        var b = function(k, g) {
            var j = [];
            for (var h = 0, f = k.length; h < f; h += 1) {
                var e = g(k[h], h);
                if (e === false) {
                    break
                } else {
                    if (e !== null) {
                        j[h] = e
                    }
                }
            }
            return j
        };
        var c = function(i, f) {
            var h = {};
            for (var g in i) {
                var e = f(i[g], g);
                if (e === false) {
                    break
                } else {
                    if (e !== null) {
                        h[g] = e
                    }
                }
            }
            return h
        };
        return function(f, e) {
            if (d.core.arr.isArray(f) || (f.length && f[0] !== undefined)) {
                return b(f, e)
            } else {
                if (typeof f === "object") {
                    return c(f, e)
                }
            }
            return null
        }
    });
    a.register("core.arr.indexOf", function(b) {
        return function(e, f) {
            if (f.indexOf) {
                return f.indexOf(e)
            }
            for (var d = 0, c = f.length; d < c; d++) {
                if (f[d] === e) {
                    return d
                }
            }
            return - 1
        }
    });
    a.register("core.arr.inArray", function(b) {
        return function(c, d) {
            return b.core.arr.indexOf(c, d)>-1
        }
    });
    a.register("core.evt.addEvent", function(b) {
        return function(e, d, c) {
            e = b.E(e);
            if (e == null) {
                return false
            }
            if (typeof c !== "function") {
                return false
            }
            if (e.addEventListener) {
                e.addEventListener(d, c, false)
            } else {
                if (e.attachEvent) {
                    e.attachEvent("on" + d, c)
                } else {
                    e["on" + d] = c
                }
            }
            return true
        }
    });
    a.register("core.util.browser", function(i) {
        var b = navigator.userAgent.toLowerCase();
        var l = window.external || "";
        var d, f, g, n, h;
        var c = function(e) {
            var m = 0;
            return parseFloat(e.replace(/\./g, function() {
                return (m++==1) ? "" : "."
            }))
        };
        try {
            if ((/windows|win32/i).test(b)) {
                h = "windows"
            } else {
                if ((/macintosh/i).test(b)) {
                    h = "macintosh"
                } else {
                    if ((/rhino/i).test(b)) {
                        h = "rhino"
                    }
                }
            }
            if ((f = b.match(/applewebkit\/([^\s]*)/)) && f[1]) {
                d = "webkit";
                n = c(f[1])
            } else {
                if ((f = b.match(/presto\/([\d.]*)/)) && f[1]) {
                    d = "presto";
                    n = c(f[1])
                } else {
                    if (f = b.match(/msie\s([^;]*)/)) {
                        d = "trident";
                        n = 1;
                        if ((f = b.match(/trident\/([\d.]*)/)) && f[1]) {
                            n = c(f[1])
                        }
                    } else {
                        if (/gecko/.test(b)) {
                            d = "gecko";
                            n = 1;
                            if ((f = b.match(/rv:([\d.]*)/)) && f[1]) {
                                n = c(f[1])
                            }
                        }
                    }
                }
            }
            if (/world/.test(b)) {
                g = "world"
            } else {
                if (/360se/.test(b)) {
                    g = "360"
                } else {
                    if ((/maxthon/.test(b)) || typeof l.max_version == "number") {
                        g = "maxthon"
                    } else {
                        if (/tencenttraveler\s([\d.]*)/.test(b)) {
                            g = "tt"
                        } else {
                            if (/se\s([\d.]*)/.test(b)) {
                                g = "sogou"
                            }
                        }
                    }
                }
            }
        } catch (k) {}
        var j = {
            OS: h,
            CORE: d,
            Version: n,
            EXTRA: (g ? g : false),
            IE: /msie/.test(b),
            OPERA: /opera/.test(b),
            MOZ: /gecko/.test(b)&&!/(compatible|webkit)/.test(b),
            IE5: /msie 5 /.test(b),
            IE55: /msie 5.5/.test(b),
            IE6: /msie 6/.test(b),
            IE7: /msie 7/.test(b),
            IE8: /msie 8/.test(b),
            IE9: /msie 9/.test(b),
            IE10: /msie 10/.test(b),
            SAFARI: !/chrome\/([\d.]*)/.test(b) && /\/([\da-f.]*) safari/.test(b),
            CHROME: /chrome\/([\d.]*)/.test(b),
            IPAD: /\(ipad/i.test(b),
            IPHONE: /\(iphone/i.test(b),
            ITOUCH: /\(itouch/i.test(b),
            MOBILE: /mobile/i.test(b)
        };
        return j
    });
    a.register("core.func.getType", function(b) {
        return function(c) {
            var d;
            return ((d = typeof(c)) == "object" ? c == null && "null" || Object.prototype.toString.call(c).slice(8, - 1) : d).toLowerCase()
        }
    });
    a.register("core.dom.ready", function(h) {
        var d = [];
        var m = false;
        var l = h.core.func.getType;
        var i = h.core.util.browser;
        var g = h.core.evt.addEvent;
        var j = function() {
            if (!m) {
                if (document.readyState === "complete") {
                    return true
                }
            }
            return m
        };
        var e = function() {
            if (m == true) {
                return 
            }
            m = true;
            for (var o = 0, n = d.length; o < n; o++) {
                if (l(d[o]) === "function") {
                    try {
                        d[o].call()
                    } catch (p) {}
                }
            }
            d = []
        };
        var b = function() {
            if (j()) {
                e();
                return 
            }
            try {
                document.documentElement.doScroll("left")
            } catch (n) {
                setTimeout(arguments.callee, 25);
                return 
            }
            e()
        };
        var c = function() {
            if (j()) {
                e();
                return 
            }
            setTimeout(arguments.callee, 25)
        };
        var f = function() {
            g(document, "DOMContentLoaded", e)
        };
        var k = function() {
            g(window, "load", e)
        };
        if (!j()) {
            if (h.IE && window === window.top) {
                b()
            }
            f();
            c();
            k()
        }
        return function(n) {
            if (j()) {
                if (l(n) === "function") {
                    n.call()
                }
            } else {
                d.push(n)
            }
        }
    });
    a.register("core.dom.isNode", function(b) {
        return function(c) {
            return (c != undefined) && Boolean(c.nodeName) && Boolean(c.nodeType)
        }
    });
    a.register("core.dom.insertBefore", function(b) {
        return function(d, e) {
            var c = e.parentNode;
            c.insertBefore(d, e)
        }
    });
    a.register("core.dom.setStyle", function(c) {
        function b() {
            if ("y" in b) {
                return b.y
            }
            return b.y = ("filters" in c.C("div"))
        }
        return function(d, e, f) {
            if (b()) {
                switch (e) {
                case"opacity":
                    d.style.filter = "alpha(opacity=" + (f * 100) + ")";
                    if (!d.currentStyle ||!d.currentStyle.hasLayout) {
                        d.style.zoom = 1
                    }
                    break;
                case"float":
                    e = "styleFloat";
                default:
                    d.style[e] = f
                }
            } else {
                if (e == "float") {
                    e = "cssFloat"
                }
                d.style[e] = f
            }
        }
    });
    a.register("core.dom.getStyle", function(c) {
        function b() {
            if ("y" in b) {
                return b.y
            }
            return b.y = ("filters" in c.C("div"))
        }
        return function(f, h) {
            if (b()) {
                switch (h) {
                case"opacity":
                    var j = 100;
                    try {
                        j = f.filters["DXImageTransform.Microsoft.Alpha"].opacity
                    } catch (i) {
                        try {
                            j = f.filters("alpha").opacity
                        } catch (i) {}
                    }
                    return j / 100;
                case"float":
                    h = "styleFloat";
                default:
                    var g = f.currentStyle ? f.currentStyle[h]: null;
                    return (f.style[h] || g)
                }
            } else {
                if (h == "float") {
                    h = "cssFloat"
                }
                try {
                    var d = document.defaultView.getComputedStyle(f, "")
                } catch (i) {}
                return f.style[h] || d ? d[h] : null
            }
        }
    });
    a.register("core.util.hideContainer", function(d) {
        var e;
        var b = function() {
            if (e) {
                return 
            }
            e = d.C("div");
            e.style.cssText = "position:absolute;top:-9999px;left:-9999px;";
            document.getElementsByTagName("head")[0].appendChild(e)
        };
        var c = {
            appendChild: function(f) {
                if (d.core.dom.isNode(f)) {
                    b();
                    e.appendChild(f)
                }
            },
            removeChild: function(f) {
                if (d.core.dom.isNode(f)) {
                    e && e.removeChild(f)
                }
            }
        };
        return c
    });
    a.register("core.dom.getSize", function(c) {
        var b = function(e) {
            if (!c.core.dom.isNode(e)) {
                throw "core.dom.getSize need Element as first parameter"
            }
            return {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        };
        var d = function(f) {
            var e = null;
            if (f.style.display === "none") {
                f.style.visibility = "hidden";
                f.style.display = "";
                e = b(f);
                f.style.display = "none";
                f.style.visibility = "visible"
            } else {
                e = b(f)
            }
            return e
        };
        return function(f) {
            var e = {};
            if (!f.parentNode) {
                c.core.util.hideContainer.appendChild(f);
                e = d(f);
                c.core.util.hideContainer.removeChild(f)
            } else {
                e = d(f)
            }
            return e
        }
    });
    a.register("core.util.scrollPos", function(b) {
        return function(e) {
            e = e || document;
            var c = e.documentElement;
            var d = e.body;
            return {
                top: Math.max(window.pageYOffset || 0, c.scrollTop, d.scrollTop),
                left: Math.max(window.pageXOffset || 0, c.scrollLeft, d.scrollLeft)
            }
        }
    });
    a.register("core.obj.parseParam", function(b) {
        return function(e, d, c) {
            var f, g = {};
            d = d || {};
            for (f in e) {
                g[f] = e[f];
                if (d[f] != null) {
                    if (c) {
                        if (e.hasOwnProperty(f)) {
                            g[f] = d[f]
                        }
                    } else {
                        g[f] = d[f]
                    }
                }
            }
            return g
        }
    });
    a.register("core.dom.position", function(d) {
        var b = function(h) {
            var i, g, f, e, k, j;
            i = h.getBoundingClientRect();
            g = d.core.util.scrollPos();
            f = h.ownerDocument.body;
            e = h.ownerDocument.documentElement;
            k = e.clientTop || f.clientTop || 0;
            j = e.clientLeft || f.clientLeft || 0;
            return {
                l: parseInt(i.left + g.left - j, 10) || 0,
                t: parseInt(i.top + g.top - k, 10) || 0
            }
        };
        var c = function(g, e) {
            var h, f;
            h = [g.offsetLeft, g.offsetTop];
            f = g.offsetParent;
            if (f !== g && f !== e) {
                while (f) {
                    h[0] += f.offsetLeft;
                    h[1] += f.offsetTop;
                    f = f.offsetParent
                }
            }
            if (d.core.util.browser.OPERA!=-1 || (d.core.util.browser.SAFARI!=-1 && g.style.position == "absolute")) {
                h[0] -= document.body.offsetLeft;
                h[1] -= document.body.offsetTop
            }
            if (g.parentNode) {
                f = g.parentNode
            } else {
                f = null
            }
            while (f&&!/^body|html$/i.test(f.tagName) && f !== e) {
                if (f.style.display.search(/^inline|table-row.*$/i)) {
                    h[0] -= f.scrollLeft;
                    h[1] -= f.scrollTop
                }
                f = f.parentNode
            }
            return {
                l: parseInt(h[0], 10),
                t: parseInt(h[1], 10)
            }
        };
        return function(g, e) {
            if (g == document.body) {
                return false
            }
            if (g.parentNode == null) {
                return false
            }
            if (g.style.display == "none") {
                return false
            }
            var f = d.core.obj.parseParam({
                parent: null
            }, e);
            if (g.getBoundingClientRect) {
                if (f.parent) {
                    var i = b(g);
                    var h = b(f.parent);
                    return {
                        l: i.l - h.l,
                        t: i.t - h.t
                    }
                } else {
                    return b(g)
                }
            } else {
                return c(g, f.parent || document.body)
            }
        }
    });
    a.register("core.dom.hasClassName", function(b) {
        return function(d, c) {
            return (new RegExp("(^|\\s)" + c + "($|\\s)").test(d.className))
        }
    });
    a.register("core.str.trim", function(b) {
        return function(f) {
            if (typeof f !== "string") {
                throw "trim need a string as parameter"
            }
            var c = f.length;
            var e = 0;
            var d = /(\u3000|\s|\t|\u00A0)/;
            while (e < c) {
                if (!d.test(f.charAt(e))) {
                    break
                }
                e += 1
            }
            while (c > e) {
                if (!d.test(f.charAt(c - 1))) {
                    break
                }
                c -= 1
            }
            return f.slice(e, c)
        }
    });
    a.register("core.dom.addClassName", function(b) {
        return function(d, c) {
            if (d.nodeType === 1) {
                if (!b.core.dom.hasClassName(d, c)) {
                    d.className = b.core.str.trim(d.className) + " " + c
                }
            }
        }
    });
    a.register("core.dom.removeClassName", function(b) {
        return function(d, c) {
            if (d.nodeType === 1) {
                if (b.core.dom.hasClassName(d, c)) {
                    d.className = d.className.replace(new RegExp("(^|\\s)" + c + "($|\\s)"), " ")
                }
            }
        }
    });
    a.register("core.util.getUniqueKey", function(d) {
        var b = (new Date()).getTime().toString(), c = 1;
        return function() {
            return b + (c++)
        }
    });
    a.register("core.dom.uniqueID", function(b) {
        return function(c) {
            return c && (c.uniqueID || (c.uniqueID = b.core.util.getUniqueKey()))
        }
    });
    a.register("core.dom.contains", function(b) {
        return function(c, d) {
            if (c === d) {
                return false
            } else {
                if (c.compareDocumentPosition) {
                    return ((c.compareDocumentPosition(d) & 16) === 16)
                } else {
                    if (c.contains && d.nodeType === 1) {
                        return c.contains(d)
                    } else {
                        while (d = d.parentNode) {
                            if (c === d) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    });
    a.register("core.evt.removeEvent", function(b) {
        return function(e, d, c) {
            e = b.E(e);
            if (e == null) {
                return false
            }
            if (typeof c !== "function") {
                return false
            }
            if (e.removeEventListener) {
                e.removeEventListener(d, c, false)
            } else {
                if (e.detachEvent) {
                    e.detachEvent("on" + d, c)
                }
            }
            e["on" + d] = null;
            return true
        }
    });
    a.register("core.evt.getEvent", function(b) {
        return (function() {
            if (document.addEventListener) {
                return function() {
                    var d = arguments.callee;
                    var c;
                    do {
                        c = d.arguments[0];
                        if (c && (c.constructor == Event || c.constructor == MouseEvent || c.constructor == KeyboardEvent)) {
                            return c
                        }
                    }
                    while (d = d.caller);
                    return c
                }
            } else {
                return function(e, d, c) {
                    return window.event
                }
            }
        }())
    });
    a.register("core.evt.fixEvent", function(c) {
        var b = "clientX clientY pageX pageY screenX screenY".split(" ");
        return function(g) {
            g = g || c.core.evt.getEvent();
            if (!g.target) {
                g.target = g.srcElement || document
            }
            if (g.pageX == null && g.clientX != null) {
                var f = document.documentElement;
                var d = document.body;
                g.pageX = g.clientX + (f.scrollLeft || d && d.scrollLeft || 0) - (f.clientLeft || d && d.clientLeft || 0);
                g.pageY = g.clientY + (f.scrollTop || d && d.scrollTop || 0) - (f.clientTop || d && d.clientTop || 0)
            }
            if (!g.which && g.button) {
                if (g.button & 1) {
                    g.which = 1
                } else {
                    if (g.button & 4) {
                        g.which = 2
                    } else {
                        if (g.button & 2) {
                            g.which = 3
                        }
                    }
                }
            }
            if (g.relatedTarget === undefined) {
                g.relatedTarget = g.fromElement || g.toElement
            }
            if (g.layerX == null && g.offsetX != null) {
                g.layerX = g.offsetX;
                g.layerY = g.offsetY
            }
            return g
        }
    });
    a.register("core.evt.preventDefault", function(b) {
        return function(c) {
            c = c || b.core.evt.getEvent();
            if (c.preventDefault) {
                c.preventDefault()
            } else {
                c.returnValue = false
            }
        }
    });
    a.register("core.evt.custEvent", function(d) {
        var i = "__custEventKey__", c = 1, h = {}, e = function(m, l) {
            var k = (typeof m == "number") ? m: m[i];
            return (k && h[k]) && {
                obj: (typeof l == "string" ? h[k][l] : h[k]),
                key: k
            }
        };
        var g = {};
        var j = function(p, m, l, n, k) {
            if (p && typeof m == "string" && l) {
                var o = e(p, m);
                if (!o ||!o.obj) {
                    throw "custEvent (" + m + ") is undefined !"
                }
                o.obj.push({
                    fn: l,
                    data: n,
                    once: k
                });
                return o.key
            }
        };
        var b = function(m, t, r, n) {
            var v = true;
            var p = function() {
                v = false
            };
            if (m && typeof t == "string") {
                var k = e(m, t), q;
                if (k && (q = k.obj)) {
                    r = typeof r != "undefined" && [].concat(r) || [];
                    for (var l = q.length - 1; l>-1 && q[l]; l--) {
                        var u = q[l].fn;
                        var s = q[l].once;
                        if (u && u.apply) {
                            try {
                                u.apply(m, [{
                                    obj: m,
                                    type: t,
                                    data: q[l].data,
                                    preventDefault: p
                                }
                                ].concat(r));
                                if (s) {
                                    q.splice(l, 1)
                                }
                            } catch (o) {
                                d.log("[error][custEvent]" + o.message, o, o.stack)
                            }
                        }
                    }
                    if (v && d.core.func.getType(n) === "function") {
                        n()
                    }
                    return k.key
                }
            }
        };
        var f = {
            define: function(o, m) {
                if (o && m) {
                    var l = (typeof o == "number") ? o: o[i] || (o[i] = c++), n = h[l] || (h[l] = {});
                    m = [].concat(m);
                    for (var k = 0; k < m.length; k++) {
                        n[m[k]] || (n[m[k]] = [])
                    }
                    return l
                }
            },
            undefine: function(n, m) {
                if (n) {
                    var l = (typeof n == "number") ? n: n[i];
                    if (l && h[l]) {
                        if (m) {
                            m = [].concat(m);
                            for (var k = 0; k < m.length; k++) {
                                if (m[k] in h[l]) {
                                    delete h[l][m[k]]
                                }
                            }
                        } else {
                            delete h[l]
                        }
                    }
                }
            },
            add: function(n, l, k, m) {
                return j(n, l, k, m, false)
            },
            once: function(n, l, k, m) {
                return j(n, l, k, m, true)
            },
            remove: function(p, n, m) {
                if (p) {
                    var o = e(p, n), q, k;
                    if (o && (q = o.obj)) {
                        if (d.core.arr.isArray(q)) {
                            if (m) {
                                var l = 0;
                                while (q[l]) {
                                    if (q[l].fn === m) {
                                        break
                                    }
                                    l++
                                }
                                q.splice(l, 1)
                            } else {
                                q.splice(0, q.length)
                            }
                        } else {
                            for (var l in q) {
                                q[l] = []
                            }
                        }
                        return o.key
                    }
                }
            },
            fire: function(n, m, k, l) {
                return b(n, m, k, l)
            },
            hook: function(t, v, n) {
                if (!t ||!v ||!n) {
                    return 
                }
                var q = [], o = t[i], r = o && h[o], l, u = v[i] || (v[i] = c++), k;
                if (r) {
                    k = g[o + "_" + u] || (g[o + "_" + u] = {});
                    var s = function(x) {
                        var w = true;
                        b(v, k[x.type].type, Array.prototype.slice.apply(arguments, [1, arguments.length]), function() {
                            w = false
                        });
                        w && x.preventDefault()
                    };
                    for (var p in n) {
                        var m = n[p];
                        if (!k[p]) {
                            if (l = r[p]) {
                                l.push({
                                    fn: s,
                                    data: undefined
                                });
                                k[p] = {
                                    fn: s,
                                    type: m
                                };
                                q.push(m)
                            }
                        }
                    }
                    f.define(v, q)
                }
            },
            unhook: function(r, l, q) {
                if (!r ||!l ||!q) {
                    return 
                }
                var n = r[i], p = l[i], k = g[n + "_" + p];
                if (k) {
                    for (var m in q) {
                        var o = q[m];
                        if (k[m]) {
                            f.remove(r, m, k[m].fn)
                        }
                    }
                }
            },
            destroy: function() {
                h = {};
                c = 1;
                g = {}
            }
        };
        return f
    });
    a.register("core.func.empty", function() {
        return function() {}
    });
    a.register("core.dom.removeNode", function(b) {
        return function(c) {
            c = b.E(c) || c;
            try {
                c.parentNode.removeChild(c)
            } catch (d) {}
        }
    });
    a.register("core.str.parseURL", function(b) {
        return function(e) {
            var d = /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
            var j = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
            var g = d.exec(e);
            var h = {};
            for (var f = 0, c = j.length; f < c; f += 1) {
                h[j[f]] = g[f] || ""
            }
            return h
        }
    });
    a.register("core.json.queryToJson", function(b) {
        return function(e, j) {
            var l = b.core.str.trim(e).split("&");
            var k = {};
            var d = function(i) {
                if (j) {
                    return decodeURIComponent(i)
                } else {
                    return i
                }
            };
            for (var g = 0, h = l.length; g < h; g++) {
                if (l[g]) {
                    var f = l[g].split("=");
                    var c = f[0];
                    var m = f[1];
                    if (f.length < 2) {
                        m = c;
                        c = "$nullName"
                    }
                    if (!k[c]) {
                        k[c] = d(m)
                    } else {
                        if (b.core.arr.isArray(k[c]) != true) {
                            k[c] = [k[c]]
                        }
                        k[c].push(d(m))
                    }
                }
            }
            return k
        }
    });
    a.register("core.json.jsonToQuery", function(b) {
        var c = function(e, d) {
            e = e == null ? "" : e;
            e = b.core.str.trim(e.toString());
            if (d) {
                return encodeURIComponent(e)
            }
            return e
        };
        return function(h, f) {
            var j = [];
            if (typeof h == "object") {
                for (var e in h) {
                    if (e === "$nullName") {
                        j = j.concat(h[e]);
                        continue
                    }
                    if (h[e] instanceof Array) {
                        for (var g = 0, d = h[e].length; g < d; g++) {
                            j.push(e + "=" + c(h[e][g], f))
                        }
                    } else {
                        if (typeof h[e] != "function") {
                            j.push(e + "=" + c(h[e], f))
                        }
                    }
                }
            }
            if (j.length) {
                return j.join("&")
            }
            return ""
        }
    });
    a.register("core.util.URL", function(b) {
        return function(g, d) {
            var f = b.core.obj.parseParam({
                isEncodeQuery: false,
                isEncodeHash: false
            }, d || {});
            var e = {};
            var i = b.core.str.parseURL(g);
            var c = b.core.json.queryToJson(i.query);
            var h = b.core.json.queryToJson(i.hash);
            e.setParam = function(j, k) {
                c[j] = k;
                return this
            };
            e.getParam = function(j) {
                return c[j]
            };
            e.setParams = function(k) {
                for (var j in k) {
                    e.setParam(j, k[j])
                }
                return this
            };
            e.setHash = function(j, k) {
                h[j] = k;
                return this
            };
            e.getHash = function(j) {
                return h[j]
            };
            e.valueOf = e.toString = function() {
                var j = [];
                var k = b.core.json.jsonToQuery(c, f.isEncodeQuery);
                var l = b.core.json.jsonToQuery(h, f.isEncodeQuery);
                if (i.scheme != "") {
                    j.push(i.scheme + ":");
                    j.push(i.slash)
                }
                if (i.host != "") {
                    j.push(i.host);
                    if (i.port != "") {
                        j.push(":");
                        j.push(i.port)
                    }
                }
                j.push("/");
                j.push(i.path);
                if (k != "") {
                    j.push("?" + k)
                }
                if (l != "") {
                    j.push("#" + l)
                }
                return j.join("")
            };
            return e
        }
    });
    a.register("core.io.scriptLoader", function(c) {
        var d = {};
        var b = {
            url: "",
            charset: "UTF-8",
            timeout: 30 * 1000,
            args: {},
            onComplete: c.core.func.empty,
            onTimeout: c.core.func.empty,
            isEncode: false,
            uniqueID: null
        };
        return function(i) {
            var g, e;
            var f = c.core.obj.parseParam(b, i);
            if (f.url == "") {
                throw "scriptLoader: url is null"
            }
            var h = f.uniqueID || c.core.util.getUniqueKey();
            g = d[h];
            if (g != null && c.IE != true) {
                c.core.dom.removeNode(g);
                g = null
            }
            if (g == null) {
                g = d[h] = c.C("script")
            }
            g.charset = f.charset;
            g.id = "scriptRequest_script_" + h;
            g.type = "text/javascript";
            if (f.onComplete != null) {
                if (c.IE) {
                    g.onreadystatechange = function() {
                        if (g.readyState.toLowerCase() == "loaded" || g.readyState.toLowerCase() == "complete") {
                            try {
                                clearTimeout(e);
                                document.getElementsByTagName("head")[0].removeChild(g);
                                g.onreadystatechange = null
                            } catch (j) {}
                            f.onComplete()
                        }
                    }
                } else {
                    g.onload = function() {
                        try {
                            clearTimeout(e);
                            c.core.dom.removeNode(g)
                        } catch (j) {}
                        f.onComplete()
                    }
                }
            }
            g.src = c.core.util.URL(f.url, {
                isEncodeQuery: f.isEncode
            }).setParams(f.args).toString();
            document.getElementsByTagName("head")[0].appendChild(g);
            if (f.timeout > 0) {
                e = setTimeout(function() {
                    try {
                        document.getElementsByTagName("head")[0].removeChild(g)
                    } catch (j) {}
                    f.onTimeout()
                }, f.timeout)
            }
            return g
        }
    });
    a.register("core.io.jsonp", function(b) {
        return function(g) {
            var e = b.core.obj.parseParam({
                url: "",
                charset: "UTF-8",
                timeout: 30 * 1000,
                args: {},
                onComplete: null,
                onTimeout: null,
                responseName: null,
                isEncode: false,
                varkey: "callback"
            }, g);
            var h =- 1;
            var f = e.responseName || ("STK_" + b.core.util.getUniqueKey());
            e.args[e.varkey] = f;
            var c = e.onComplete;
            var d = e.onTimeout;
            window[f] = function(i) {
                if (h != 2 && c != null) {
                    h = 1;
                    c(i)
                }
            };
            e.onComplete = null;
            e.onTimeout = function() {
                if (h != 1 && d != null) {
                    h = 2;
                    d()
                }
            };
            return b.core.io.scriptLoader(e)
        }
    });
    a.register("core.json.merge", function(d) {
        var c = function(f) {
            if (f === undefined) {
                return true
            }
            if (f === null) {
                return true
            }
            if (d.core.arr.inArray((typeof f), ["number", "string", "function", "boolean"])) {
                return true
            }
            if (d.core.dom.isNode(f)) {
                return true
            }
            return false
        };
        var b = function(h, l, m) {
            if (c(m)) {
                h[l] = m;
                return 
            }
            if (d.core.arr.isArray(m)) {
                if (!d.core.arr.isArray(h[l])) {
                    h[l] = []
                }
                for (var j = 0, f = m.length; j < f; j += 1) {
                    b(h[l], j, m[j])
                }
                return 
            }
            if (typeof m === "object") {
                if (c(h[l]) || d.core.arr.isArray(h[l])) {
                    h[l] = {}
                }
                for (var g in m) {
                    b(h[l], g, m[g])
                }
                return 
            }
        };
        var e = function(h, j, g) {
            var i = {};
            if (g) {
                for (var f in h) {
                    b(i, f, h[f])
                }
                for (var f in j) {
                    b(i, f, j[f])
                }
            } else {
                for (var f in h) {
                    i[f] = h[f]
                }
                for (var f in j) {
                    i[f] = j[f]
                }
            }
            return i
        };
        return function(f, i, h) {
            var g = d.core.obj.parseParam({
                isDeep: false
            }, h);
            return e(f, i, g.isDeep)
        }
    });
    a.register("core.json.clone", function(b) {
        function c(g) {
            var e;
            if (g instanceof Array) {
                e = [];
                var f = g.length;
                while (f--) {
                    e[f] = c(g[f])
                }
                return e
            } else {
                if (g instanceof Object) {
                    e = {};
                    for (var d in g) {
                        e[d] = c(g[d])
                    }
                    return e
                } else {
                    return g
                }
            }
        }
        return c
    });
    a.register("core.json.jsonToStr", function(e) {
        function g(f) {
            return f < 10 ? "0" + f : f
        }
        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = function(f) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + g(this.getUTCMonth() + 1) + "-" + g(this.getUTCDate()) + "T" + g(this.getUTCHours()) + ":" + g(this.getUTCMinutes()) + ":" + g(this.getUTCSeconds()) + "Z" : null
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(f) {
                return this.valueOf()
            }
        }
        var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, j, c, l = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, k;
        function b(f) {
            i.lastIndex = 0;
            return i.test(f) ? '"' + f.replace(i, function(m) {
                var n = l[m];
                return typeof n === "string" ? n : "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"' : '"' + f + '"'
        }
        function h(s, p) {
            var n, m, t, f, q = j, o, r = p[s];
            if (r && typeof r === "object" && typeof r.toJSON === "function") {
                r = r.toJSON(s)
            }
            if (typeof k === "function") {
                r = k.call(p, s, r)
            }
            switch (typeof r) {
            case"string":
                return b(r);
            case"number":
                return isFinite(r) ? String(r) : "null";
            case"boolean":
            case"null":
                return String(r);
            case"object":
                if (!r) {
                    return "null"
                }
                j += c;
                o = [];
                if (Object.prototype.toString.apply(r) === "[object Array]") {
                    f = r.length;
                    for (n = 0; n < f; n += 1) {
                        o[n] = h(n, r) || "null"
                    }
                    t = o.length === 0 ? "[]" : j ? "[\n" + j + o.join(",\n" + j) + "\n" + q + "]" : "[" + o.join(",") + "]";
                    j = q;
                    return t
                }
                if (k && typeof k === "object") {
                    f = k.length;
                    for (n = 0; n < f; n += 1) {
                        m = k[n];
                        if (typeof m === "string") {
                            t = h(m, r);
                            if (t) {
                                o.push(b(m) + (j ? ": " : ":") + t)
                            }
                        }
                    }
                } else {
                    for (m in r) {
                        if (Object.hasOwnProperty.call(r, m)) {
                            t = h(m, r);
                            if (t) {
                                o.push(b(m) + (j ? ": " : ":") + t)
                            }
                        }
                    }
                }
                t = o.length === 0 ? "{}" : j ? "{\n" + j + o.join(",\n" + j) + "\n" + q + "}" : "{" + o.join(",") + "}";
                j = q;
                return t
            }
        }
        return function(o, m, n) {
            if (window.JSON && window.JSON.stringify) {
                return window.JSON.stringify(o, m, n)
            }
            var f;
            j = "";
            c = "";
            if (typeof n === "number") {
                for (f = 0; f < n; f += 1) {
                    c += " "
                }
            } else {
                if (typeof n === "string") {
                    c = n
                }
            }
            k = m;
            if (m && typeof m !== "function" && (typeof m !== "object" || typeof m.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return h("", {
                "": o
            })
        }
    });
    a.register("core.json.strToJson", function(h) {
        var e, c, b = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t"
        }, o, m = function(p) {
            throw {
                name: "SyntaxError",
                message: p,
                at: e,
                text: o
            }
        }, i = function(p) {
            if (p && p !== c) {
                m("Expected '" + p + "' instead of '" + c + "'")
            }
            c = o.charAt(e);
            e += 1;
            return c
        }, g = function() {
            var q, p = "";
            if (c === "-") {
                p = "-";
                i("-")
            }
            while (c >= "0" && c <= "9") {
                p += c;
                i()
            }
            if (c === ".") {
                p += ".";
                while (i() && c >= "0" && c <= "9") {
                    p += c
                }
            }
            if (c === "e" || c === "E") {
                p += c;
                i();
                if (c === "-" || c === "+") {
                    p += c;
                    i()
                }
                while (c >= "0" && c <= "9") {
                    p += c;
                    i()
                }
            }
            q =+ p;
            if (isNaN(q)) {
                m("Bad number")
            } else {
                return q
            }
        }, j = function() {
            var s, r, q = "", p;
            if (c === '"') {
                while (i()) {
                    if (c === '"') {
                        i();
                        return q
                    } else {
                        if (c === "\\") {
                            i();
                            if (c === "u") {
                                p = 0;
                                for (r = 0; r < 4; r += 1) {
                                    s = parseInt(i(), 16);
                                    if (!isFinite(s)) {
                                        break
                                    }
                                    p = p * 16 + s
                                }
                                q += String.fromCharCode(p)
                            } else {
                                if (typeof b[c] === "string") {
                                    q += b[c]
                                } else {
                                    break
                                }
                            }
                        } else {
                            q += c
                        }
                    }
                }
            }
            m("Bad string")
        }, l = function() {
            while (c && c <= " ") {
                i()
            }
        }, d = function() {
            switch (c) {
            case"t":
                i("t");
                i("r");
                i("u");
                i("e");
                return true;
            case"f":
                i("f");
                i("a");
                i("l");
                i("s");
                i("e");
                return false;
            case"n":
                i("n");
                i("u");
                i("l");
                i("l");
                return null
            }
            m("Unexpected '" + c + "'")
        }, n, k = function() {
            var p = [];
            if (c === "[") {
                i("[");
                l();
                if (c === "]") {
                    i("]");
                    return p
                }
                while (c) {
                    p.push(n());
                    l();
                    if (c === "]") {
                        i("]");
                        return p
                    }
                    i(",");
                    l()
                }
            }
            m("Bad array")
        }, f = function() {
            var q, p = {};
            if (c === "{") {
                i("{");
                l();
                if (c === "}") {
                    i("}");
                    return p
                }
                while (c) {
                    q = j();
                    l();
                    i(":");
                    if (Object.hasOwnProperty.call(p, q)) {
                        m('Duplicate key "' + q + '"')
                    }
                    p[q] = n();
                    l();
                    if (c === "}") {
                        i("}");
                        return p
                    }
                    i(",");
                    l()
                }
            }
            m("Bad object")
        };
        n = function() {
            l();
            switch (c) {
            case"{":
                return f();
            case"[":
                return k();
            case'"':
                return j();
            case"-":
                return g();
            default:
                return c >= "0" && c <= "9" ? g() : d()
            }
        };
        return function(s, q) {
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(s, q)
            }
            var p;
            o = s;
            e = 0;
            c = " ";
            p = n();
            l();
            if (c) {
                m("Syntax error")
            }
            return typeof q === "function" ? (function r(x, w) {
                var u, t, y = x[w];
                if (y && typeof y === "object") {
                    for (u in y) {
                        if (Object.hasOwnProperty.call(y, u)) {
                            t = r(y, u);
                            if (t !== undefined) {
                                y[u] = t
                            } else {
                                delete y[u]
                            }
                        }
                    }
                }
                return q.call(x, w, y)
            }({
                "": p
            }, "")) : p
        }
    });
    a.register("core.obj.beget", function(c) {
        var b = function() {};
        return function(d) {
            b.prototype = d;
            return new b()
        }
    });
    a.register("core.str.encodeHTML", function(b) {
        return function(c) {
            if (typeof c !== "string") {
                throw "encodeHTML need a string as parameter"
            }
            return c.replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\u00A0/g, "&nbsp;").replace(/(\u0020|\u000B|\u2028|\u2029|\f)/g, "&#32;")
        }
    });
    a.register("core.util.drag", function(d) {
        var b = function(f) {
            f.cancelBubble = true;
            return false
        };
        var c = function(f, e) {
            f.clientX = e.clientX;
            f.clientY = e.clientY;
            f.pageX = e.clientX + d.core.util.scrollPos()["left"];
            f.pageY = e.clientY + d.core.util.scrollPos()["top"];
            return f
        };
        return function(f, n) {
            if (!d.core.dom.isNode(f)) {
                throw "core.util.drag need Element as first parameter"
            }
            var m = d.core.obj.parseParam({
                actRect: [],
                actObj: {}
            }, n);
            var j = {};
            var k = d.core.evt.custEvent.define(m.actObj, "dragStart");
            var g = d.core.evt.custEvent.define(m.actObj, "dragEnd");
            var h = d.core.evt.custEvent.define(m.actObj, "draging");
            var l = function(p) {
                var o = c({}, p);
                document.body.onselectstart = function() {
                    return false
                };
                d.core.evt.addEvent(document, "mousemove", i);
                d.core.evt.addEvent(document, "mouseup", e);
                d.core.evt.addEvent(document, "click", b, true);
                if (p.preventDefault) {
                    p.preventDefault();
                    p.stopPropagation()
                }
                d.core.evt.custEvent.fire(k, "dragStart", o);
                return false
            };
            var i = function(p) {
                var o = c({}, p);
                p.cancelBubble = true;
                d.core.evt.custEvent.fire(k, "draging", o)
            };
            var e = function(p) {
                var o = c({}, p);
                document.body.onselectstart = function() {
                    return true
                };
                d.core.evt.removeEvent(document, "mousemove", i);
                d.core.evt.removeEvent(document, "mouseup", e);
                d.core.evt.removeEvent(document, "click", b, true);
                d.core.evt.custEvent.fire(k, "dragEnd", o)
            };
            d.core.evt.addEvent(f, "mousedown", l);
            j.destroy = function() {
                d.core.evt.removeEvent(f, "mousedown", l);
                m = null
            };
            j.getActObj = function() {
                return m.actObj
            };
            return j
        }
    });
    a.register("core.util.swf", function(d) {
        function b(j, k) {
            var f = d.core.obj.parseParam({
                id: "swf_" + parseInt(Math.random() * 10000, 10),
                width: 1,
                height: 1,
                attrs: {},
                paras: {},
                flashvars: {},
                html: ""
            }, k);
            if (j == null) {
                throw "swf: [sURL] 未定义";
                return 
            }
            var i;
            var h = [];
            var g = [];
            for (i in f.attrs) {
                g.push(i + '="' + f.attrs[i] + '" ')
            }
            var e = [];
            for (i in f.flashvars) {
                e.push(i + "=" + f.flashvars[i])
            }
            f.paras.flashvars = e.join("&");
            if (d.IE) {
                h.push('<object width="' + f.width + '" height="' + f.height + '" id="' + f.id + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
                h.push(g.join(""));
                h.push('><param name="movie" value="' + j + '" />');
                for (i in f.paras) {
                    h.push('<param name="' + i + '" value="' + f.paras[i] + '" />')
                }
                h.push("</object>")
            } else {
                h.push('<embed width="' + f.width + '" height="' + f.height + '" id="' + f.id + '" src="' + j + '" type="application/x-shockwave-flash" ');
                h.push(g.join(""));
                for (i in f.paras) {
                    h.push(i + '="' + f.paras[i] + '" ')
                }
                h.push(" />")
            }
            f.html = h.join("");
            return f
        }
        var c = {};
        c.create = function(f, h, i) {
            var g = d.E(f);
            if (g == null) {
                throw "swf: [" + f + "] 未找到";
                return 
            }
            var e = b(h, i);
            g.innerHTML = e.html;
            return d.E(e.id)
        };
        c.html = function(f, g) {
            var e = b(f, g);
            return e.html
        };
        c.check = function() {
            var f =- 1;
            if (d.IE) {
                try {
                    var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    f = e.GetVariable("$version")
                } catch (g) {}
            } else {
                if (navigator.plugins["Shockwave Flash"]) {
                    f = navigator.plugins["Shockwave Flash"]["description"]
                }
            }
            return f
        };
        return c
    });
    a.register("core.util.cookie", function(c) {
        var b = {
            set: function(h, k, j) {
                var e = [];
                var i, g;
                var f = c.core.obj.parseParam({
                    expire: null,
                    path: "/",
                    domain: null,
                    secure: null,
                    encode: true
                }, j);
                if (f.encode == true) {
                    k = escape(k)
                }
                e.push(h + "=" + k);
                if (f.path != null) {
                    e.push("path=" + f.path)
                }
                if (f.domain != null) {
                    e.push("domain=" + f.domain)
                }
                if (f.secure != null) {
                    e.push(f.secure)
                }
                if (f.expire != null) {
                    i = new Date();
                    g = i.getTime() + f.expire * 3600000;
                    i.setTime(g);
                    e.push("expires=" + i.toGMTString())
                }
                document.cookie = e.join(";")
            },
            get: function(f) {
                f = f.replace(/([\.\[\]\$])/g, "\\$1");
                var e = new RegExp(f + "=([^;]*)?;", "i");
                var g = document.cookie + ";";
                var d = g.match(e);
                if (d) {
                    return d[1] || ""
                } else {
                    return ""
                }
            },
            remove: function(d, e) {
                e = e || {};
                e.expire =- 10;
                b.set(d, "", e)
            }
        };
        return b
    });
    a.register("core.util.language", function(b) {
        return function(e, g) {
            var f = [];
            for (var d = 2, c = arguments.length; d < c; d += 1) {
                f.push(arguments[d])
            }
            return e.replace(/#L\{((.*?)(?:[^\\]))\}/ig, function() {
                var i = arguments[1];
                var h;
                if (g && g[i] !== undefined) {
                    h = g[i]
                } else {
                    h = i
                }
                if (f.length) {
                    h = h.replace(/(\%s)/ig, function() {
                        var j = f.shift();
                        if (j !== undefined) {
                            return j
                        } else {
                            return arguments[0]
                        }
                    })
                }
                return h
            })
        }
    });
    a.register("core.util.listener", function(b) {
        return (function() {
            var d = {};
            var e = [];
            var c;
            var f = function() {
                if (e.length == 0) {
                    return 
                }
                clearTimeout(c);
                var g = e.splice(0, 1)[0];
                try {
                    g.func.apply(g.func, [].concat(g.data))
                } catch (h) {}
                c = setTimeout(f, 25)
            };
            return {
                register: function(g, i, h) {
                    d[g] = d[g] || {};
                    d[g][i] = d[g][i] || [];
                    d[g][i].push(h)
                },
                fire: function(j, l, m) {
                    var k;
                    var h, g;
                    if (d[j] && d[j][l] && d[j][l].length > 0) {
                        k = d[j][l];
                        k.data_cache = m;
                        for (h = 0, g = k.length; h < g; h++) {
                            e.push({
                                channel: j,
                                evt: l,
                                func: k[h],
                                data: m
                            })
                        }
                        f()
                    }
                },
                remove: function(j, l, k) {
                    if (d[j]) {
                        if (d[j][l]) {
                            for (var h = 0, g = d[j][l].length; h < g; h++) {
                                if (d[j][l][h] === k) {
                                    d[j][l].splice(h, 1);
                                    break
                                }
                            }
                        }
                    }
                },
                list: function() {
                    return d
                },
                cache: function(g, h) {
                    if (d[g] && d[g][h]) {
                        return d[g][h].data_cache
                    }
                }
            }
        })()
    });
    a.register("core.util.templet", function(b) {
        return function(c, d) {
            return c.replace(/#\{(.+?)\}/ig, function() {
                var h = arguments[1].replace(/\s/ig, "");
                var f = arguments[0];
                var j = h.split("||");
                for (var g = 0, e = j.length; g < e; g += 1) {
                    if (/^default:.*$/.test(j[g])) {
                        f = j[g].replace(/^default:/, "");
                        break
                    } else {
                        if (d[j[g]] !== undefined) {
                            f = d[j[g]];
                            break
                        }
                    }
                }
                return f
            })
        }
    });
    a.register("core.util.winSize", function(b) {
        return function(d) {
            var c, e;
            var f;
            if (d) {
                f = d.document
            } else {
                f = document
            }
            if (f.compatMode === "CSS1Compat") {
                c = f.documentElement.clientWidth;
                e = f.documentElement.clientHeight
            } else {
                if (self.innerHeight) {
                    if (d) {
                        f = d.self
                    } else {
                        f = self
                    }
                    c = f.innerWidth;
                    e = f.innerHeight
                } else {
                    if (f.documentElement && f.documentElement.clientHeight) {
                        c = f.documentElement.clientWidth;
                        e = f.documentElement.clientHeight
                    } else {
                        if (f.body) {
                            c = f.body.clientWidth;
                            e = f.body.clientHeight
                        }
                    }
                }
            }
            return {
                width: c,
                height: e
            }
        }
    });
    a.register("core.util.pageSize", function(b) {
        return function(e) {
            var i;
            if (e) {
                i = e.document
            } else {
                i = document
            }
            var j = (i.compatMode == "CSS1Compat" ? i.documentElement : i.body);
            var h, d;
            var g, f;
            if (window.innerHeight && window.scrollMaxY) {
                h = j.scrollWidth;
                d = window.innerHeight + window.scrollMaxY
            } else {
                if (j.scrollHeight > j.offsetHeight) {
                    h = j.scrollWidth;
                    d = j.scrollHeight
                } else {
                    h = j.offsetWidth;
                    d = j.offsetHeight
                }
            }
            var c = b.core.util.winSize(e);
            if (d < c.height) {
                g = c.height
            } else {
                g = d
            }
            if (h < c.width) {
                f = c.width
            } else {
                f = h
            }
            return {
                page: {
                    width: f,
                    height: g
                },
                win: {
                    width: c.width,
                    height: c.height
                }
            }
        }
    });
    (function() {
        var c = a.core;
        var d = {
            arrCopy: c.arr.copy,
            arrClear: c.arr.clear,
            hasby: c.arr.hasby,
            unique: c.arr.unique,
            foreach: c.arr.foreach,
            isArray: c.arr.isArray,
            inArray: c.arr.inArray,
            arrIndexOf: c.arr.indexOf,
            findout: c.arr.findout,
            domNext: c.dom.next,
            domPrev: c.dom.prev,
            isNode: c.dom.isNode,
            addHTML: c.dom.addHTML,
            insertHTML: c.dom.insertHTML,
            setXY: c.dom.setXY,
            contains: c.dom.contains,
            position: c.dom.position,
            trimNode: c.dom.trimNode,
            insertAfter: c.dom.insertAfter,
            insertBefore: c.dom.insertBefore,
            removeNode: c.dom.removeNode,
            replaceNode: c.dom.replaceNode,
            Ready: c.dom.ready,
            setStyle: c.dom.setStyle,
            setStyles: c.dom.setStyles,
            getStyle: c.dom.getStyle,
            addClassName: c.dom.addClassName,
            hasClassName: c.dom.hasClassName,
            removeClassName: c.dom.removeClassName,
            builder: c.dom.builder,
            cascadeNode: c.dom.cascadeNode,
            selector: c.dom.selector,
            sizzle: c.dom.sizzle,
            addEvent: c.evt.addEvent,
            custEvent: c.evt.custEvent,
            removeEvent: c.evt.removeEvent,
            fireEvent: c.evt.fireEvent,
            fixEvent: c.evt.fixEvent,
            getEvent: c.evt.getEvent,
            stopEvent: c.evt.stopEvent,
            delegatedEvent: c.evt.delegatedEvent,
            preventDefault: c.evt.preventDefault,
            hotKey: c.evt.hotKey,
            memorize: c.func.memorize,
            bind: c.func.bind,
            getType: c.func.getType,
            methodBefore: c.func.methodBefore,
            timedChunk: c.func.timedChunk,
            funcEmpty: c.func.empty,
            ajax: c.io.ajax,
            jsonp: c.io.jsonp,
            ijax: c.io.ijax,
            scriptLoader: c.io.scriptLoader,
            require: c.io.require,
            jsonInclude: c.json.include,
            jsonCompare: c.json.compare,
            jsonClone: c.json.clone,
            jsonToQuery: c.json.jsonToQuery,
            queryToJson: c.json.queryToJson,
            jsonToStr: c.json.jsonToStr,
            strToJson: c.json.strToJson,
            objIsEmpty: c.obj.isEmpty,
            beget: c.obj.beget,
            cascade: c.obj.cascade,
            objSup: c.obj.sup,
            parseParam: c.obj.parseParam,
            bLength: c.str.bLength,
            dbcToSbc: c.str.dbcToSbc,
            leftB: c.str.leftB,
            trim: c.str.trim,
            encodeHTML: c.str.encodeHTML,
            decodeHTML: c.str.decodeHTML,
            parseURL: c.str.parseURL,
            parseHTML: c.str.parseHTML,
            queryString: c.str.queryString,
            htmlToJson: c.util.htmlToJson,
            cookie: c.util.cookie,
            drag: c.util.drag,
            timer: c.util.timer,
            jobsM: c.util.jobsM,
            listener: c.util.listener,
            winSize: c.util.winSize,
            pageSize: c.util.pageSize,
            templet: c.util.templet,
            queue: c.util.queue,
            stack: c.util.stack,
            swf: c.util.swf,
            URL: c.util.URL,
            scrollPos: c.util.scrollPos,
            scrollTo: c.util.scrollTo,
            getUniqueKey: c.util.getUniqueKey,
            storage: c.util.storage,
            pageletM: c.util.pageletM
        };
        for (var b in d) {
            if (d[b]) {
                a.regShort(b, d[b])
            }
        }
    })();
    a.register("kit.dom.cssText", function(c) {
        var b = function(g, f) {
            var d = (g + ";" + f).replace(/(\s*(;)\s*)|(\s*(:)\s*)/g, "$2$4"), e;
            while (d && (e = d.match(/(^|;)([\w\-]+:)([^;]*);(.*;)?\2/i))) {
                d = d.replace(e[1] + e[2] + e[3], "")
            }
            return d
        };
        return function(e) {
            e = e || "";
            var f = [], d = {
                push: function(h, g) {
                    f.push(h + ":" + g);
                    return d
                },
                remove: function(h) {
                    for (var g = 0; g < f.length; g++) {
                        if (f[g].indexOf(h + ":") == 0) {
                            f.splice(g, 1)
                        }
                    }
                    return d
                },
                getStyleList: function() {
                    return f.slice()
                },
                getCss: function() {
                    return b(e, f.join(";"))
                }
            };
            return d
        }
    });
    a.register("kit.dom.fix", function(e) {
        var b=!(e.core.util.browser.IE6 || (document.compatMode !== "CSS1Compat" && a.IE)), c = /^(c)|(lt)|(lb)|(rt)|(rb)$/;
        function d(h) {
            return e.core.dom.getStyle(h, "display") != "none"
        }
        function f(j) {
            j = e.core.arr.isArray(j) ? j : [0, 0];
            for (var h = 0; h < 2; h++) {
                if (typeof j[h] != "number") {
                    j[h] = 0
                }
            }
            return j
        }
        function g(k, s, n) {
            if (!d(k)) {
                return 
            }
            var r = "fixed", u, v, h, q, l = k.offsetWidth, m = k.offsetHeight, o = e.core.util.winSize(), p = 0, t = 0, i = e.kit.dom.cssText(k.style.cssText);
            if (!b) {
                r = "absolute";
                var j = e.core.util.scrollPos();
                p = u = j.top;
                t = v = j.left;
                switch (s) {
                case"lt":
                    u += n[1];
                    v += n[0];
                    break;
                case"lb":
                    u += o.height - m - n[1];
                    v += n[0];
                    break;
                case"rt":
                    u += n[1];
                    v += o.width - l - n[0];
                    break;
                case"rb":
                    u += o.height - m - n[1];
                    v += o.width - l - n[0];
                    break;
                case"c":
                default:
                    u += (o.height - m) / 2 + n[1];
                    v += (o.width - l) / 2 + n[0]
                }
                h = q = ""
            } else {
                u = q = n[1];
                v = h = n[0];
                switch (s) {
                case"lt":
                    q = h = "";
                    break;
                case"lb":
                    u = h = "";
                    break;
                case"rt":
                    v = q = "";
                    break;
                case"rb":
                    u = v = "";
                    break;
                case"c":
                default:
                    u = (o.height - m) / 2 + n[1];
                    v = (o.width - l) / 2 + n[0];
                    q = h = ""
                }
            }
            if (s == "c") {
                if (u < p) {
                    u = p
                }
                if (v < t) {
                    v = t
                }
            }
            i.push("position", r).push("top", u + "px").push("left", v + "px").push("right", h + "px").push("bottom", q + "px");
            k.style.cssText = i.getCss()
        }
        return function(i, o, j) {
            var k, p, l = true, h;
            if (e.core.dom.isNode(i) && c.test(o)) {
                var m = {
                    getNode: function() {
                        return i
                    },
                    isFixed: function() {
                        return l
                    },
                    setFixed: function(q) {
                        (l=!!q) && g(i, k, p);
                        return this
                    },
                    setAlign: function(q, r) {
                        if (c.test(q)) {
                            k = q;
                            p = f(r);
                            l && g(i, k, p)
                        }
                        return this
                    },
                    destroy: function() {
                        if (!b) {
                            e.core.evt.removeEvent(window, "scroll", n)
                        }
                        e.core.evt.removeEvent(window, "resize", n);
                        e.core.evt.custEvent.undefine(h)
                    }
                };
                h = e.core.evt.custEvent.define(m, "beforeFix");
                m.setAlign(o, j);
                function n(q) {
                    q = q || window.event;
                    e.core.evt.custEvent.fire(h, "beforeFix", q.type);
                    if (l && (!b || k == "c")) {
                        g(i, k, p)
                    }
                }
                if (!b) {
                    e.core.evt.addEvent(window, "scroll", n)
                }
                e.core.evt.addEvent(window, "resize", n);
                return m
            }
        }
    });
    a.register("kit.dom.builder", function(c) {
        var b = null;
        return function(d) {
            var e = null;
            if (typeof(d) == "string") {
                if (!b) {
                    b = c.C("div")
                }
                b.innerHTML = d;
                e = b.children[0];
                b.removeChild(e);
                b.innerHTML = ""
            } else {
                e = d
            }
            var g = {};
            var f = e.getElementsByTagName("*");
            if (f.length > 0) {
                c.foreach(f, function(j) {
                    if (c.isNode(j)) {
                        var i = j.getAttribute("node-type");
                        if (i) {
                            if (!g[i]) {
                                g[i] = []
                            }
                            g[i].push(j)
                        }
                    }
                })
            }
            var h = {};
            h.box = e;
            h.list = g;
            return h
        }
    });
    a.register("kit.dom.parseDOM", function(b) {
        return function(d) {
            for (var c in d) {
                if (d[c] && (d[c].length == 1)) {
                    d[c] = d[c][0]
                }
            }
            return d
        }
    });
    a.register("kit.obj.append", function(b) {
        return function(g) {
            for (var f = 1, d = arguments.length; f < d; f++) {
                var c = arguments[f] || {};
                for (var e in c) {
                    g[e] = c[e]
                }
            }
            return g
        }
    });
    a.register("kit.dom.loadStyle", function(e) {
        var d;
        var c = e.funcEmpty;
        var b = e.core.util.browser;
        return function(g, n) {
            var m, h, j = false, l = false;
            var k = e.parseParam({
                id: e.getUniqueKey(),
                timeout: 30 * 1000,
                styleCheck: null,
                onLoad: c,
                onTimeout: c,
                props: {
                    charset: "utf-8",
                    rel: "stylesheet",
                    media: "screen",
                    type: "text/css"
                }
            }, n);
            m = e.C("link");
            e.foreach(k.props, function(p, o) {
                m[o] = p
            });
            m.id = k.id;
            m.href = g;
            var f = function() {
                clearInterval(h);
                if (!l&&!j) {
                    if (e.getType(k.onLoad) === "function") {
                        setTimeout(k.onLoad, 100)
                    }
                }
                j = true
            };
            if (b.IE) {
                m.onload = f
            } else {
                if (e.getType(k.styleCheck) === "function") {
                    h = setInterval(function() {
                        if (k.styleCheck()) {
                            f()
                        }
                    }, 10)
                } else {
                    var i = document.createElement("img");
                    i.onerror = f;
                    i.src = g
                }
            }
            if (k.timeout && k.onTimeout) {
                setTimeout(function() {
                    clearInterval(h);
                    if (!j && e.getType(k.onTimeout) === "function") {
                        l = true;
                        k.onTimeout()
                    }
                }, k.timeout)
            }
            if (!d) {
                d = document.getElementsByTagName("head")[0]
            }
            d.appendChild(m)
        }
    });
    a.register("kit.util.makeReady", function(b) {
        return function(d) {
            var e = b.parseParam({
                timeout: 30 * 1000,
                condition: b.funcEmpty,
                ready: b.funcEmpty
            }, d);
            var c, f;
            return {
                reset: function() {
                    if (c) {
                        c.length = 0;
                        c = null
                    }
                    if (f) {
                        clearTimeout(f);
                        f = null
                    }
                },
                exec: function(g) {
                    var h = this;
                    if (b.getType(g) === "function") {
                        if (e.condition()) {
                            g()
                        } else {
                            if (!c) {
                                c = [];
                                c.push(g);
                                if (!f) {
                                    f = setTimeout(h.reset, e.timeout)
                                }
                                e.ready(function() {
                                    clearTimeout(f);
                                    f = null;
                                    while (b.getType(c) === "array" && c.length > 0) {
                                        c.shift()()
                                    }
                                })
                            } else {
                                c.push(g)
                            }
                        }
                    }
                },
                destroy: function() {
                    this.reset()
                }
            }
        }
    });
    a.register("kit.dom.appendStyle", function(b) {
        return function(f, c) {
            var d = b.parseParam({
                autoAppend: true,
                target: null,
                type: "text/css"
            }, c);
            var e;
            f = f || "";
            f = f.toString();
            if (b.isNode(d.target) && d.target.tagName.toLowerCase() === "style") {
                e = d.target
            } else {
                e = document.createElement("style");
                e.setAttribute("type", d.type)
            }
            if (e.styleSheet) {
                e.styleSheet.cssText = e.innerHTML + f
            } else {
                e.appendChild(document.createTextNode(f))
            }
            if (d.autoAppend) {
                document.getElementsByTagName("head")[0].appendChild(e)
            }
            return e
        }
    });
    a.register("module.mask", function(f) {
        var m, d = [], i, n, e;
        var h = f.core.dom.setStyle;
        var k = f.core.dom.getStyle;
        var l = f.core.evt.custEvent;
        var c = {}, b;
        function j(o) {
            m = f.C("div");
            if (f.core.util.browser.IE6 && o && o.useIframeInIE6) {
                m.innerHTML = '<iframe style="position:absolute;z-index:-1;width:100%;height:100%;filter:mask();"></iframe>'
            }
            document.body.appendChild(m);
            n = true;
            i = f.kit.dom.fix(m, "lt");
            var p = function() {
                var q = f.core.util.winSize();
                m.style.cssText = f.kit.dom.cssText(m.style.cssText).push("width", q.width + "px").push("height", q.height + "px").getCss()
            };
            e = l.add(i, "beforeFix", p);
            p()
        }
        var g = {
            getNode: function() {
                return m
            },
            show: function(p, o) {
                if (n) {
                    p = f.core.obj.parseParam({
                        useIframeInIE6: true,
                        opacity: 0.1,
                        background: "#000000"
                    }, p);
                    m.style.background = p.background;
                    h(m, "opacity", p.opacity);
                    m.style.display = "block";
                    i.setAlign("lt");
                    o && o()
                } else {
                    f.Ready(function() {
                        j(p);
                        g.show(p, o)
                    })
                }
                return g
            },
            hide: function(q) {
                if (m && q) {
                    if (b != q) {
                        delete c[f.core.dom.uniqueID(q)]
                    } else {
                        var r = f.core.dom.prev(m);
                        if (b) {
                            delete c[f.core.dom.uniqueID(b)];
                            b = undefined
                        }
                        var p = false;
                        for (var o = 0; r && o < 3; o++) {
                            if (c[f.core.dom.uniqueID(r)]) {
                                p = true;
                                break
                            }
                            r = f.core.dom.prev(r)
                        }
                        if (p) {
                            g.showUnderNode(r)
                        } else {
                            m.style.display = "none"
                        }
                        r = undefined
                    }
                }
                q = undefined;
                return g
            },
            showUnderNode: function(p, o) {
                if (f.isNode(p)) {
                    (b = p);
                    c[f.core.dom.uniqueID(p)] = 1;
                    g.show(o, function() {
                        document.body.appendChild(m);
                        document.body.appendChild(p);
                        h(m, "zIndex", k(p, "zIndex"))
                    })
                }
                return g
            },
            destroy: function() {
                l.remove(e);
                m.style.display = "none";
                b = undefined;
                c = {}
            }
        };
        return g
    });
    a.register("kit.num.limit", function(b) {
        return function(d, e, c) {
            return Math.min(c, Math.max(d, e))
        }
    });
    a.register("kit.dom.getCoordinates", function(b) {
        return function(c) {
            var d = b.position(c);
            return {
                left: d.l,
                top: d.t,
                right: d.l + c.offsetWidth,
                bottom: d.t + c.offsetHeight
            }
        }
    });
    a.register("kit.dom.offsetParent", function(c) {
        var b = /^(?:body|html)$/i;
        return function(e) {
            var d;
            if (c.isNode(e)) {
                d = e.offsetParent || document.body;
                while (d && c.getStyle(d, "position") === "static") {
                    if (b.test(d.nodeName)) {
                        d = document.body;
                        break
                    }
                    d = d.offsetParent
                }
            }
            return d || document.body
        }
    });
    a.register("module.draggable", function(g) {
        var c = g.core.util.browser, h = g.kit.num.limit, f = g.kit.dom.offsetParent, e = g.kit.dom.getCoordinates;
        var d = function(j) {
            var i = f(j);
            if (g.isNode(j) && g.isNode(i) && i.tagName && i.tagName.toLowerCase() === "body" && g.getStyle(j, "position") === "fixed") {
                return true
            } else {
                return false
            }
        };
        var b = {
            init: function() {
                g.custEvent.define(this, "beforeStart");
                g.custEvent.define(this, "dragStart");
                g.custEvent.define(this, "draging");
                g.custEvent.define(this, "dragEnd");
                this.build();
                this.setCustEvents("add");
                return this
            },
            setOptions: function(i) {
                this.conf = g.parseParam({
                    enable: true,
                    exclude: [],
                    fixScroll: true,
                    node: null,
                    dragarea: "page",
                    handle: null
                }, i)
            },
            build: function() {
                var j = this, i = this.conf;
                this.drag = g.drag(i.handle || i.node);
                this.bound = {
                    fixScrollDrag: function() {
                        j.fixScrollDrag()
                    }
                }
            },
            setDomEvents: function(k) {
                var i = this.conf, j = this.bound, l = k === "add" ? "add": "remove";
                if (i.fixScroll) {
                    g[l + "Event"](window, "scroll", j.fixScrollDrag)
                }
            },
            setCustEvents: function(k) {
                var l = this, i = this.conf, m = k === "add" ? "add": "remove", j = this.drag.getActObj();
                g.foreach(["dragStart", "dragMove", "dragEnd"], function(n) {
                    g.custEvent[m](j, (n === "dragMove" ? "draging" : n), function(p, o) {
                        l.data = o;
                        if (i.enable) {
                            l[n](l.formatData(o))
                        }
                    })
                })
            },
            enable: function() {
                this.conf.enable = true
            },
            disable: function() {
                this.conf.enable = false
            },
            fixScrollDrag: function() {
                if (this.draging && this.data && this.scrollPos) {
                    var j = g.scrollPos();
                    var i = this.data;
                    i.pageX = i.pageX + j.left - this.scrollPos.left;
                    i.pageY = i.pageY + j.top - this.scrollPos.top;
                    this.dragMove(this.formatData(this.data))
                }
            },
            updateInfo: function() {
                this.winsize = g.winSize();
                this.pagesize = g.pageSize()
            },
            formatData: function(i) {
                i.x = i.pageX;
                i.y = i.pageY;
                return i
            },
            limit: function(n) {
                var j = this.conf, l, k, i, o, m = j.node;
                if (j.dragarea) {
                    l = {};
                    if (g.isNode(j.dragarea)) {
                        l = e(j.dragarea)
                    } else {
                        if (j.dragarea === "page") {
                            k = this.pagesize;
                            l = {
                                left: 0,
                                top: 0,
                                right: k.page.width,
                                bottom: k.page.height
                            }
                        } else {
                            if (j.dragarea === "window") {
                                i = this.winsize;
                                o = g.scrollPos();
                                l = {
                                    left: o.left,
                                    top: o.top,
                                    right: i.width + o.left,
                                    bottom: i.height + o.top
                                }
                            }
                        }
                    }
                    n.left = Math.max(h(n.left, l.left, l.right - m.offsetWidth), l.left);
                    n.top = Math.max(h(n.top, l.top, l.bottom - m.offsetHeight), l.top)
                }
                return n
            },
            exclude: function(l, i) {
                var j = this.conf, k = true;
                if (i) {
                    k = g.inArray(i.target, j.exclude)
                }
                return k
            },
            getOffsetPos: function(n) {
                var i = this.conf;
                var k = {};
                n = g.parseParam({
                    x: 0,
                    y: 0
                }, n);
                var j = f(i.node);
                var l = g.position(j);
                l = g.parseParam({
                    l: 0,
                    t: 0
                }, l);
                this.scrollPos = g.scrollPos();
                var m = {
                    left: 0,
                    top: 0
                };
                if (d(i.node)) {
                    m = g.parseParam(m, this.scrollPos)
                }
                k.x = n.x - l.l - m.left;
                k.y = n.y - l.t - m.top;
                return k
            },
            dragStart: function(l) {
                var i = g.fixEvent(), j = this.conf, m = j.node;
                g.custEvent.fire(this, "beforeStart");
                if (this.exclude(l, i)) {
                    g.stopEvent();
                    return 
                }
                this.draging = true;
                this.startPos = g.position(j.node);
                if (g.getStyle(m, "position") === "static") {
                    g.setStyle(m, "position", "absolute")
                }
                var k = this.getOffsetPos({
                    x: this.startPos.l,
                    y: this.startPos.t
                });
                g.setStyle(m, "margin", "0");
                g.setStyle(m, "left", k.x + "px");
                g.setStyle(m, "top", k.y + "px");
                this.startData = l;
                this.updateInfo();
                this.setDomEvents("add");
                g.custEvent.fire(this, "dragStart", [l])
            },
            dragMove: function(m) {
                var j = this.conf, i = this.startPos, k = this.startData, o = {}, n = j.node;
                if (!this.draging) {
                    return 
                }
                o.left = i.l + m.x - k.x;
                o.top = i.t + m.y - k.y;
                o = this.limit(o);
                var l = this.getOffsetPos({
                    x: o.left,
                    y: o.top
                });
                g.setStyle(n, "left", l.x + "px");
                g.setStyle(n, "top", l.y + "px");
                g.custEvent.fire(this, "draging", [m])
            },
            dragEnd: function(i) {
                if (!this.draging) {
                    return 
                }
                this.draging = false;
                this.setDomEvents("remove");
                g.custEvent.fire(this, "dragEnd", [i])
            }
        };
        return function(j, i) {
            var k = g.beget(b);
            i.node = j;
            k.setOptions(i);
            return k
        }
    });
    a.register("common.listener", function(c) {
        var d = {};
        var b = {};
        b.define = function(f, g) {
            if (d[f] != null) {
                throw "common.listener.define: 频道已被占用"
            }
            d[f] = g;
            var e = {};
            e.register = function(i, h) {
                if (d[f] == null) {
                    throw "common.listener.define: 频道未定义"
                }
                c.core.util.listener.register(f, i, h)
            };
            e.fire = function(h, i) {
                if (d[f] == null) {
                    throw "commonlistener.define: 频道未定义"
                }
                c.core.util.listener.fire(f, h, i)
            };
            e.remove = function(i, h) {
                c.core.util.listener.remove(f, i, h)
            };
            return e
        };
        return b
    });
    a.register("common.channel.sso", function(b) {
        return b.common.listener.define("common.channel.sso", ["layer_ready", "layer_show", "layer_hide", "validate_failure", "play_door_voice", "login", "login_complete", "login_success", "pre_login_state", "login_failure", "login_timeout", "logout", "logout_complete", "logout_success", "logout_failure", "logout_timeout", "verify", "need_verify", ])
    });
    a.register("common.util.sso", function(d) {
        var c = d.core.json.merge, b = d.common.channel.sso;
        return function(f) {
            var h = {}, e = null;
            f = f || {};
            var g = c({
                name: "sinaSSOController", savestate: 0, vsnf: 0, hold_login_state: false, cookie_timeout: 0, timeout: 10 * 1000
            }, f);
            h.para = {};
            h.init = function() {
                if (h.inited) {
                    return 
                }
                h.set_options();
                e = window[g.name]; if (!e) {
                    e = new window.SSOController();
                    e.name = g.name;
                    window[g.name] = e
                }
                h.bindListener();
                h.inited = true
            }; h.set_options = function(i) {
                i = i || {};
                g = c(g, i)
            };
            h.set_extra = function(i) {
                i = i || {};
                if (!e.loginExtraQuery) {
                    e.loginExtraQuery = {}
                }
                if (g.cookie_timeout) {
                    e.loginExtraQuery.ct = g.cookie_timeout
                }
                e.loginExtraQuery.vsnf = g.vsnf;
                if (g.hold_login_state) {
                    e.loginExtraQuery.s = 1
                }
                e.loginExtraQuery = c(e.loginExtraQuery, i)
            };
            h.login = function(j, l, k, i) {
                var m;
                k = k || {};
                h.para.userid = j;
                h.para.password = l;
                if (d.getType(k.savestate) === "undefined") {
                    m = g.savestate || 0
                } else {
                    m = k.savestate || 0
                }
                h.para.savestate = m;
                e.loginExtraQuery = {};
                h.set_extra(i);
                h.requestLogin()
            };
            h.logout = function() {
                e.logout()
            };
            h.verify = function(j, k, i) {
                i = i || {};
                if (j == "vsn") {
                    h.set_extra({
                        vsnval: k
                    })
                } else {
                    if (j == "code") {
                        h.set_extra({
                            door: k
                        })
                    }
                }
                if (typeof(i.savestate) != "undefined") {
                    h.para.savestate = i.savestate
                }
                h.requestLogin()
            };
            h.requestLogin = function() {
                if (h.logining) {
                    return 
                }
                h.logining = true;
                h.loginTimer = setTimeout(function() {
                    if (!h.logining) {
                        return 
                    }
                    clearTimeout(h.loginTimer);
                    delete h.loginTimer;
                    h.logining = false;
                    b.fire("login_timeout")
                }, g.timeout);
                e.login(h.para.userid, h.para.password, h.para.savestate)
            };
            h.login_callback = function(j) {
                if (!h.logining) {
                    return 
                }
                clearTimeout(h.loginTimer);
                delete h.loginTimer;
                h.logining = false;
                b.fire("login_complete", [j]);
                if (j.result) {
                    b.fire("login_success", [j])
                } else {
                    var i = {};
                    i.code = j.errno;
                    i.reason = j.reason;
                    var k = d.inArray(i.code, ["5024", "5025", "4049", "2070"]);
                    if (k) {
                        b.fire("need_verify", [i])
                    } else {
                        b.fire("login_failure", [i])
                    }
                }
            };
            h.logout_callback = function(i) {
                b.fire("logout_complete", [i]);
                if (i.result) {
                    b.fire("logout_success", [i])
                } else {
                    b.fire("logout_failure", [i])
                }
            };
            h.bindListener = function() {
                e.customLoginCallBack = h.login_callback;
                e.customLogoutCallBack = h.logout_callback;
                b.register("login", h.login);
                b.register("verify", h.verify);
                b.register("logout", h.logout)
            };
            return h
        }
    });
    a.register("kit.extra.template", function(c) {
        var b = function(d, e) {
            return d.replace(/#\{(.+?)\}/ig, function() {
                var j = arguments[1];
                var g = arguments[0];
                var k = j.split("||");
                for (var h = 0, f = k.length; h < f; h += 1) {
                    if (/^default:.*$/.test(k[h])) {
                        g = k[h].replace(/^default:/, "");
                        break
                    } else {
                        if (e[k[h]] !== undefined) {
                            g = e[k[h]];
                            break
                        }
                    }
                }
                return g
            })
        };
        return function(d, e) {
            e = e || c.$LANG || {};
            var f = b(d, e);
            return f
        }
    });
    a.register("kit.evt.input_bindchange", function(c) {
        var b = c.core.util.browser;
        return function(g, f, e) {
            f = (f == "add") ? "add" : "remove";
            var h = f + "Event";
            if (b.IE) {
                var d = parseInt(b.Version, 10);
                if (d == 5) {
                    c[h](g, "keydown", e);
                    c[h](g, "cut", e);
                    c[h](g, "input", e)
                } else {
                    if (d > 5) {
                        c[h](g, "input", e)
                    } else {
                        c[h](g, "propertychange", e)
                    }
                }
            } else {
                c[h](g, "input", e)
            }
        }
    });
    a.register("kit.util.buffer_pool", function(b) {
        return function(d) {
            var g = {};
            var f = b.parseParam({
                delay: 50
            }, d);
            var c = null;
            g.trigger_final = function() {
                if (c) {
                    clearTimeout(c);
                    c = null
                }
                c = setTimeout(function() {
                    c = null;
                    g.feedback()
                }, f.delay)
            };
            var h = null;
            var e = false;
            g.trigger_regular = function() {
                e = true;
                if (!h) {
                    h = setInterval(function() {
                        g.feedback();
                        if (!e) {
                            clearInterval(h);
                            h = null
                        }
                        e = false
                    }, f.delay)
                }
            };
            g.feedback = function() {};
            return g
        }
    });
    a.register("kit.dom.placeholder", function(d) {
        var c = d.core.json.merge;
        var b;
        return function(h, e) {
            var g = {};
            var f = d.parseParam({}, e);
            var i = {
                opacity: 0.5
            };
            g.supportPlaceholder = function() {
                if (!b) {
                    b = d.C("input")
                }
                return "placeholder" in b
            };
            g.compute_offset = function() {
                var j = {};
                d.foreach(["marginTop", "paddingTop", "borderTopWidth", "marginLeft", "paddingLeft", "borderLeftWidth"], function(k) {
                    j[k] = d.getStyle(h, k);
                    if (j[k] == "auto") {
                        j[k] = "1px"
                    }
                    j[k] = parseInt(j[k], 10) || 0
                });
                j.x = j.marginLeft + j.paddingLeft + j.borderLeftWidth;
                j.y = j.marginTop + j.paddingTop + j.borderTopWidth + (d.core.util.browser.IE6 ? 1 : 0);
                return j
            };
            g.getStyles = function() {
                var j = {};
                d.foreach(["fontSize", "lineHeight"], function(k) {
                    j[k] = d.getStyle(h, k)
                });
                j.position = "absolute";
                return j
            };
            g.focus = function() {
                g.hide();
                setTimeout(function() {
                    h.focus()
                })
            };
            g.hide = function() {
                if (g.label) {
                    d.setStyle(g.label, "display", "none")
                }
            };
            g.show = function() {
                if (g.label && h&&!h.value) {
                    d.setStyle(g.label, "display", "")
                }
            };
            g.check = function() {
                if (!h.value) {
                    g.show()
                } else {
                    g.hide()
                }
            };
            g.build_placeholder = function(l) {
                if (!g.label) {
                    g.label = d.C("span");
                    g.hide();
                    d.insertBefore(g.label, h);
                    g.bindDomEvents()
                }
                g.label.innerHTML = l;
                var j = g.getStyles();
                var k = g.compute_offset();
                j.marginLeft = k.x + "px";
                j.marginTop = k.y + "px";
                j = c(j, i);
                d.foreach(j, function(n, m) {
                    d.setStyle(g.label, m, n)
                })
            };
            g.checkInput = function() {
                if (h && h.value) {
                    g.hide()
                }
            };
            g.bindDomEvents = function() {
                d.addEvent(h, "input", g.checkInput);
                d.addEvent(h, "propertychange", g.checkInput);
                d.addEvent(h, "focus", g.hide);
                d.addEvent(h, "blur", g.check);
                d.addEvent(g.label, "mousedown", g.focus)
            };
            g.destroy = function() {
                d.removeEvent(h, "focus", g.hide);
                d.removeEvent(g.label, "mousedown", g.focus);
                d.removeEvent(h, "blur", g.check);
                if (g.label && g.label.parentNode) {
                    g.label.parentNode.removeChild(g.label)
                }
                g.label = null
            };
            g.set = function(k, j) {
                if (!h) {
                    return 
                }
                j = j || {};
                i = c({
                    color: "#888"
                }, j);
                if (!k) {
                    k = h.getAttribute("placeholder") || ""
                }
                if (g.supportPlaceholder()) {
                    h.setAttribute("placeholder", k)
                } else {
                    g.build_placeholder(k);
                    g.check()
                }
                return g
            };
            g.node = h;
            g.conf = f;
            g.conf_style = i;
            return g
        }
    });
    a.register("common.util.door", function(e) {
        var d = e.core.json.merge, c = e.common.channel.sso;
        var b = function(k) {
            var g = {};
            var j = k.split("&");
            var f = [];
            for (var h = 0; h < j.length; h++) {
                f = j[h].split("=");
                g[f[0]] = f[1]
            }
            return g
        };
        return function(g) {
            var i = {}, h = {}, f = null, j = true;
            i.argsCheck = function() {
                h = e.parseParam({
                    ssoName: "sinaSSOController",
                    usesso: false,
                    address: "",
                    img: null,
                    input: null,
                    tip: null,
                    button: null,
                    img_extra: {},
                    voiceEnable: true,
                    voice_swf: "http://account.weibo.com/sguide/code_play.swf",
                    voice_service: "http://login.sina.com.cn/cgi/voicepin.php",
                    voice_para: {
                        p: "",
                        r: ""
                    },
                    voice_button: null,
                    autofocus: false
                }, g)
            };
            i.init = function() {
                i.argsCheck();
                i.setEvents("add")
            };
            i.checkSSO = function() {
                if (!f) {
                    f = window[h.ssoName]
                }
                if (f && f.getServerTime) {
                    f.getServerTime()
                }
            };
            i.change = function() {
                if (j) {
                    i.checkSSO();
                    j = false
                }
                var l = "/aj3/pincode/pin1.php", n = e.cookie.get("wvr"), o = parseFloat(n, 10);
                if (h.address) {
                    l = h.address
                } else {
                    if (!isNaN(o) && o && o < 3.6) {
                        l = "/pincode/pin1.php"
                    }
                }
                if (h.tip) {
                    h.tip.innerHTML = ""
                }
                if (h.input) {
                    h.input.value = ""
                }
                var m = "";
                var k = h.img_extra || {};
                if (h.usesso && f && f.getPinCodeUrl) {
                    m = f.getPinCodeUrl()
                } else {
                    k.r = (new Date() - 0);
                    m = l + "?" + e.jsonToQuery(k)
                }
                if (h.img) {
                    e.setStyle(h.img, "visibility", "hidden");
                    h.img.src = m
                }
                if (h.voiceEnable && h.voice_button) {
                    var p = i.getPinCode(m);
                    i.setVoiceCode(p)
                }
            };
            i.getPinCode = function(m) {
                var l = m.split("?");
                var n = l[1];
                var k = {};
                if (!n) {
                    return null
                } else {
                    return b(n)
                }
            };
            i.setVoiceCode = function(p) {
                if (!h.voiceEnable) {
                    return 
                }
                if (!p ||!p.p) {
                    return 
                }
                if (i.voiceSwf && i.swfcont) {
                    i.swfcont.innerHTML = ""
                }
                if (!i.swfcont) {
                    i.swfcont = e.C("span");
                    e.setStyle(i.swfcont, "position", "absolute");
                    e.setStyle(i.swfcont, "zIndex", "-100");
                    e.setStyle(i.swfcont, "marginTop", "-1px");
                    if (h.input) {
                        if (e.core.util.browser.IE6) {
                            document.body.appendChild(i.swfcont)
                        } else {
                            h.input.parentNode.appendChild(i.swfcont)
                        }
                    }
                }
                var n = e.getUniqueKey();
                var m = "swf_" + n;
                var k = d({}, h.voice_para);
                k = e.parseParam(k, p);
                var o = [];
                e.foreach(k, function(r, q) {
                    o.push(q + "=" + r)
                });
                var l = {};
                l.url = h.voice_service + "?" + o.join("&");
                i.voiceSwf = e.swf.create(i.swfcont, h.voice_swf, {
                    id: m,
                    paras: {
                        quality: "high",
                        allowScriptAccess: "always"
                    },
                    flashvars: l
                })
            };
            i.playVoice = function(k) {
                if (k) {
                    e.preventDefault(k)
                }
                if (i.voiceSwf) {
                    i.voiceSwf.SetVariable("isPlay", "1")
                }
            };
            i.stopVoice = function() {
                if (i.voiceSwf && i.swfcont) {
                    i.swfcont.innerHTML = ""
                }
            };
            i.bound = {
                change: function() {
                    e.preventDefault();
                    i.change();
                    if (h.input && h.autofocus) {
                        h.input.focus()
                    }
                },
                doorImgLoad: function() {
                    e.setStyle(h.img, "visibility", "visible")
                }
            };
            i.setEvents = function(k) {
                var l = k === "add" ? "addEvent": "removeEvent";
                e[l](h.button, "click", i.bound.change);
                e[l](h.img, "click", i.bound.change);
                e[l](h.img, "load", i.bound.doorImgLoad);
                e[l](h.voice_button, "click", i.playVoice);
                l = k === "add" ? "register" : "remove";
                c[l]("play_door_voice", i.playVoice)
            };
            i.destroy = function() {
                i.setEvents("remove")
            };
            i.conf = h;
            return i
        }
    });
    a.register("comp.login.outlogin", function(e) {
        var i = e.core.json.merge, f = e.kit.extra.template, k = e.kit.dom.builder, j = e.kit.dom.parseDOM, b = e.kit.evt.input_bindchange, c = e.kit.util.buffer_pool, h = e.kit.dom.placeholder, d = e.common.util.door, g = e.common.channel.sso;
        return function(n, q) {
            var p = {}, m = {}, l = false, o = {
                ssoName: "sinaSSOController",
                forgot_vsn_url: "",
                forgot_password_url: "",
                register_url: "https://login.sina.com.cn/signup/signup.php?entry=#{entry||default:sso}",
                entry: "",
                door_address: "http://login.sina.com.cn/cgi/pin.php",
                voiceEnable: true,
                voice_swf: "http://i.sso.sina.com.cn/images/code_play.swf",
                voice_service: "http://login.sina.com.cn/cgi/voicepin.php",
                savestate: 30,
                relative_node: null,
                tip_capslockon: "",
                setTipDelay: 100,
                closeAutoCompleteDelay: 200,
                updateDelay: 200
            };
            p.isInside = false;
            p.prev_value = "";
            p.disabled = false;
            p.getSSO = function() {
                return window[o.ssoName]
            };
            p.setOptions = function(s) {
                s = s || {};
                o = e.parseParam(o, s);
                p.conf = o
            };
            p.setTip = function(t, s) {
                if (t + "" === "undefined") {
                    return 
                }
                if (m.tip && t !== "") {
                    m.tip.innerHTML = t;
                    m.phone_tip.style.visibility = "hidden";
                    m.tip.style.visibility = "visible"
                }
            };
            p.hideTip = function() {
                if (m.tip) {
                    m.tip.style.visibility = "hidden";
                    m.tip.innerHTML = ""
                }
            };
            p.showPhoneTip = function() {
                setTimeout(function() {
                    if (m.tip.style.visibility == "hidden") {
                        m.phone_tip.style.visibility = "visible"
                    } else {
                        m.phone_tip.style.visibility = "hidden"
                    }
                }, 150)
            };
            p.hidePhoneTip = function() {
                m.phone_tip.style.visibility = "hidden"
            };
            p.isPhoneTipHide = function(t) {
                var s = t.target || t.srcElement;
                p.isInside = e.contains(m.phone_tip, s) || e.contains(m.loginname_box, s) || s == m.phone_tip;
                if (!p.isInside) {
                    p.hidePhoneTip()
                }
            };
            p.lockForm = function(s) {
                s=!!s;
                p.disabled = s;
                e.foreach(["loginname", "password", "door", "vsn"], function(u) {
                    var t = m[u];
                    t.readOnly = s
                })
            };
            p.getRemember = function() {
                var s = m.loginname.value;
                var u = p.getSSO();
                if (!s && u && e.getType(u.getLoginInfo) === "function") {
                    var t = u.getLoginInfo();
                    if (t && t.ln) {
                        m.loginname.value = t.ln
                    }
                }
                if (p.placeholder_loginname) {
                    p.placeholder_loginname.check()
                }
                p.checkFace()
            };
            p.showClearButton = function() {
                if (m.clear) {
                    if (m.loginname.value) {
                        e.setStyle(m.clear, "display", "")
                    } else {
                        e.setStyle(m.clear, "display", "none")
                    }
                }
            };
            p.hideClearButton = function() {
                if (m.clear) {
                    m.clear.style.display = "none"
                }
            };
            p.clearRemember = function() {};
            p.reset = function() {
                p.lockForm(false);
                l = false;
                m.loginname.value = "";
                m.password.value = "";
                m.door.value = "";
                m.vsn.value = "";
                p.switchFace("password");
                p.hideTip();
                if (p.placeholder_loginname) {
                    p.placeholder_loginname.check()
                }
                if (p.placeholder_password) {
                    p.placeholder_password.check()
                }
                if (p.placeholder_vsn) {
                    p.placeholder_vsn.check()
                }
                p.hideClearButton()
            };
            p.getData = function() {
                var s = {};
                e.foreach(["loginname", "door", "vsn", "password"], function(v) {
                    var u = m[v];
                    var t = e.trim(u.value);
                    if (u.value !== t && v !== "password") {
                        u.value = t;
                        u.blur()
                    }
                    s[v] = u.value
                });
                if (s.loginname == "" && q && m.loginname.prelogindata) {
                    s.loginname = m.loginname.prelogindata;
                    l = true
                }
                return s
            };
            p.validate = function(w, v) {
                var s = true;
                var u = "";
                var t = null;
                e.foreach({
                    loginname: "E010001",
                    password: "E010002",
                    door: "E010003",
                    vsn: "E010004"
                }, function(z, A) {
                    var x = A === "loginname" || A === "password" || v === A;
                    var y = m[A];
                    if (x && y&&!w[A]) {
                        t = y;
                        u = f("#{" + z + "}");
                        s = false
                    }
                    return s
                });
                if (!s) {
                    if (t) {
                        t.focus()
                    }
                    setTimeout(function() {
                        p.setTip(u, t);
                        g.fire("validate_failure")
                    }, o.setTipDelay)
                }
                return s
            };
            p.verify = function(t) {
                t = t || {
                    reason: ""
                };
                var u = f("#{" + t.code + "||default:" + t.reason + "}");
                var s = null;
                if (t.code == "4049" || t.code == "2070") {
                    p.switchFace("door");
                    if (p.door) {
                        p.door.change()
                    }
                    s = m.door
                } else {
                    p.switchFace("vsn");
                    s = m.vsn
                }
                if (s) {
                    s.focus()
                }
                setTimeout(function() {
                    p.setTip(u, s);
                    if (t.code == "2070" || t.code == "5025" || t.code == "4049") {
                        g.fire("validate_failure")
                    }
                }, o.setTipDelay)
            };
            p.submit = function() {
                if (p.disabled) {
                    return 
                }
                p.hideTip();
                var v = p.getData();
                var u = p.getFaceState();
                if (p.validate(v, u)) {
                    p.lockForm(true);
                    var t = {
                        savestate: 0
                    };
                    if (m.remember && m.remember.checked) {
                        t.savestate = o.savestate
                    }
                    var s = e.jsonClone(o.extra) || {};
                    if (u === "door") {
                        s.door = v.door
                    } else {
                        if (u === "vsn") {
                            s.vsnval = v.vsn
                        }
                    }
                    if (l && q) {
                        s.logintype = "sub"
                    }
                    g.fire("login", [v.loginname, v.password, t, s])
                }
            };
            p.getFaceState = function() {
                if (m.door_box.style.display != "none") {
                    return "door"
                } else {
                    if (m.vsn_box.style.display != "none") {
                        return "vsn"
                    } else {
                        return "password"
                    }
                }
            };
            p.switchFace = function(s) {
                s = s || "password";
                if (s === "door" && p.door) {
                    if (e.getStyle(m.door_box, "display") === "none") {
                        p.door.change()
                    }
                }
                e.foreach(["door", "vsn"], function(t) {
                    var u = m[t + "_box"];
                    if (t === s) {
                        e.setStyle(u, "display", "block")
                    } else {
                        e.setStyle(u, "display", "none")
                    }
                });
                if (m.forgot_vsn && m.forgot_password) {
                    if (s === "vsn") {
                        e.setStyle(m.forgot_vsn, "display", "");
                        e.setStyle(m.forgot_password, "display", "none")
                    } else {
                        e.setStyle(m.forgot_vsn, "display", "none");
                        e.setStyle(m.forgot_password, "display", "")
                    }
                }
            };
            var r = {};
            p.checkFace = function() {
                var t = window[o.ssoName];
                var s = e.trim(m.loginname.value);
                if (!s) {
                    return 
                }
                if (e.getType(r[s]) !== "undefined") {
                    p.checkPin(r[s])
                } else {
                    if (!t) {
                        return 
                    }
                    t.prelogin({
                        checkpin: 1,
                        username: s
                    }, function(u) {
                        if (u) {
                            if (u.showpin) {
                                p.checkPin(u.showpin)
                            }
                            r[s] = u.showpin
                        }
                    })
                }
            };
            p.checkPin = function(s) {
                s = s.toString();
                if (s === "1") {
                    p.switchFace("door")
                } else {
                    if (s === "2") {
                        p.switchFace("vsn")
                    }
                }
            };
            p.update = function() {
                var s = m.loginname.value;
                if (s != p.prev_value) {
                    p.switchFace("password");
                    if (r[e.trim(s)]) {
                        p.checkFace()
                    }
                }
                p.prev_value = s;
                p.showClearButton()
            };
            p.delayUpdate = function() {
                if (!p.buffer) {
                    p.buffer = c({
                        delay: o.updateDelay
                    });
                    p.buffer.feedback = p.update
                }
                p.buffer.trigger_regular()
            };
            p.parseDom = function() {
                var s = n;
                if (s) {
                    m = j(k(s).list);
                    p.nodes = m;
                    e.foreach(["root", "tip", "loginname", "password_box", "password", "door_box", "door", "door_img", "vsn_box", "vsn"], function(t) {
                        if (!m[t]) {
                            throw ("Can't find necessary node : " + t + " !")
                        }
                    });
                    e.foreach(["submit", "clear", "door_voice", "door_change", "forgot_password", "forgot_vsn", "register_button", "remember", "remember_label"], function(t) {
                        if (!m[t]) {
                            p.log("Can't find node : " + t + " !")
                        }
                    });
                    m.relative = o.relative_node || m.root
                } else {
                    p.log("Can't find login form : " + n.id || n.getAttribute("noe-type"))
                }
            };
            p.domEvents = {
                check_keydown: function(s) {
                    s = e.fixEvent(s);
                    var v = p.getFaceState();
                    var u = null;
                    var t = s.target.getAttribute("node-type");
                    if (s.keyCode == 13) {
                        if (!q&&!m.loginname.value) {
                            u = m.loginname
                        } else {
                            if (!m.password.value) {
                                u = m.password
                            } else {
                                if (!m[v].value) {
                                    u = m[v]
                                } else {
                                    p.submit()
                                }
                            }
                        }
                    }
                    if (u) {
                        setTimeout(function() {
                            u.focus()
                        }, 10)
                    }
                },
                clear: function() {
                    e.preventDefault();
                    p.reset();
                    p.hideClearButton();
                    p.clearRemember();
                    m.loginname.focus();
                    m.loginname.blur()
                },
                submit: function() {
                    e.preventDefault();
                    p.submit()
                }
            };
            p.showQRcodeHelp = function() {
                m.qrcode_help.style.display = "";
                setTimeout(function() {
                    e.addClassName(m.qrcode_help, "transition_hlp")
                }, 10)
            };
            p.hideQRcodeHelp = function() {
                m.qrcode_help.style.display = "none";
                e.removeClassName(m.qrcode_help, "transition_hlp")
            };
            p.hideQRcodeTip = function() {
                m.qrcode_tip.style.display = "none"
            };
            p.setDomEvents = function(s) {
                s = s == "add" ? "add" : "remove";
                var t = s + "Event";
                b(m.loginname, s, p.delayUpdate);
                e[t](m.submit, "click", p.domEvents.submit);
                e[t](m.clear, "click", p.domEvents.clear);
                e[t](m.loginname, "blur", p.showClearButton);
                e[t](m.loginname, "blur", p.checkFace);
                e[t](m.loginname, "focus", p.hideTip);
                e[t](m.password, "focus", p.hideTip);
                e[t](m.door, "focus", p.hideTip);
                e[t](m.vsn, "focus", p.hideTip);
                e[t](m.loginname, "focus", p.showPhoneTip);
                e[t](m.password, "focus", p.hidePhoneTip);
                e[t](m.door, "focus", p.hidePhoneTip);
                e[t](m.vsn, "focus", p.hidePhoneTip);
                e[t](m.root, "mousedown", p.isPhoneTipHide);
                e[t](m.loginname, "keydown", p.domEvents.check_keydown);
                e[t](m.password, "keydown", p.domEvents.check_keydown);
                e[t](m.door, "keydown", p.domEvents.check_keydown);
                e[t](m.vsn, "keydown", p.domEvents.check_keydown);
                e[t](m.qrcode_img, "mouseover", p.showQRcodeHelp);
                e[t](m.qrcode_img, "mouseout", p.hideQRcodeHelp);
                e[t](m.qrcode_tip_close, "click", p.hideQRcodeTip)
            };
            p.listenerEvents = {
                loginComplete: function(s) {},
                loginSuccess: function(s) {
                    p.hideTip()
                },
                loginFailure: function(s) {
                    p.lockForm(false);
                    s = s || {
                        reason: ""
                    };
                    var u = f("#{" + s.code + "||default:" + s.reason + "}");
                    var t = p.getFaceState();
                    u = f(u, {
                        loginname: encodeURIComponent(m.loginname.value)
                    });
                    if (p.door && t === "door") {
                        p.door.change()
                    }
                    p.setTip(u)
                },
                verify: function(s) {
                    p.lockForm(false);
                    p.verify(s)
                },
                logoutSuccess: function(s) {
                    q = false;
                    p.reset()
                },
                stopDoorVoice: function() {
                    if (p.door) {
                        p.door.stopVoice()
                    }
                },
                onLoginTimeout: function() {
                    p.lockForm(false);
                    var s = f("#{E010005}");
                    p.setTip(s)
                }
            };
            p.setListener = function(s) {
                var t = s == "register" ? "register": "remove";
                g[t]("login_complete", p.listenerEvents.loginComplete);
                g[t]("login_success", p.listenerEvents.loginSuccess);
                g[t]("login_failure", p.listenerEvents.loginFailure);
                g[t]("logout_success", p.listenerEvents.logoutSuccess);
                g[t]("need_verify", p.listenerEvents.verify);
                g[t]("layer_hide", p.listenerEvents.stopDoorVoice);
                g[t]("login_timeout", p.listenerEvents.onLoginTimeout);
                g[t]("layer_hide", p.hidePhoneTip)
            };
            p.initPlugin = function() {
                p.switchFace("password");
                p.lockForm(false);
                setTimeout(function() {
                    p.placeholder_loginname = h(m.loginname).set();
                    p.placeholder_password = h(m.password).set();
                    p.placeholder_vsn = h(m.vsn).set();
                    m.loginname.blur();
                    m.password.blur()
                }, o.closeAutoCompleteDelay);
                p.door = d({
                    ssoName: o.ssoName,
                    address: o.door_address,
                    usesso: true,
                    autofocus: true,
                    img: m.door_img,
                    input: m.door,
                    voiceEnable: o.voiceEnable,
                    voice_button: m.door_voice,
                    voice_swf: o.voice_swf,
                    voice_service: o.voice_service,
                    button: m.door_change
                });
                p.door.init();
                if (o.entry) {
                    var s = f(o.register_url, {
                        entry: o.entry
                    });
                    m.register_button.href = s
                }
                if (m.forgot_password && o.forgot_password_url) {
                    m.forgot_password.href = o.forgot_password_url
                }
                if (m.forgot_vsn && o.forgot_vsn_url) {
                    m.forgot_vsn.href = o.forgot_vsn_url
                }
            };
            p.log = function(s) {
                if (s) {
                    e.log("STK.comp.login.plugin : " + s)
                }
            };
            p.destroy = function() {
                p.setListener("remove");
                p.setDomEvents("remove");
                p.placeholder_loginname.destroy();
                p.placeholder_password.destroy();
                p.placeholder_vsn.destroy();
                if (p.door && p.door.destroy) {
                    p.door.destroy()
                }
            };
            p.init = function() {
                p.parseDom();
                p.setDomEvents("add");
                p.setListener("register");
                p.initPlugin()
            };
            p.nodes = m;
            p.conf = o;
            return p
        }
    });
    a.register("comp.defaultStyle", function(c) {
        var b = [".outlogin_layerbox_bylx,", ".outlogin_layerbox_bylx p,", ".outlogin_layerbox_bylx div,", ".outlogin_layerbox_bylx li,", '.outlogin_layerbox_bylx input{font: 12px/1.125 "Simsun", "Arial Narrow", "HELVETICA"!important;}', ".outlogin_layerbox_bylx{width:292px!important;position:absolute;border-width:1px!important;border-style:solid!important;text-align:left!important;}", ".outlogin_layerbox_bylx .cur_move{position:relative!important;width:477px!important;height:17px!important;cursor:move;left:0!important;clear:both!important;}", '.outlogin_layerbox_bylx a.layerbox_close{position:absolute!important;right:8px!important;top:8px!important;width:12px!important;height:11px!important;padding:5px!important;font:700 12px "Simsun"!important;text-decoration:none!important;overflow:hidden!important;z-index:10!important;}', '.outlogin_layerbox_bylx .close_loginname{position:absolute!important;width:11px!important;height:11px!important;padding:5px!important;left:180px!important;top:4px!important;font:700 12px "Simsun"!important;text-decoration:none!important;overflow:hidden!important;}', ".outlogin_layerbox_bylx a.layerbox_close:hover{text-decoration:none!important;}", ".outlogin_layerbox_bylx .layerbox_left{width:259px!important;display:inline!important;float:right!important;margin-top:-17px!important;height:260px;padding:17px 0 17px 30px!important;border-right-width:1px!important;border-right-style:solid!important;}", ".outlogin_layerbox_bylx .layerbox_left .titletips{padding:8px 0 35px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist{list-style:none!important;padding:0!important;margin:0!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li{width:260px!important; clear:both!important; padding-bottom:12px!important;*padding-bottom:11px!important; vertical-align:top;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist .sub_wrap_r{height:20px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist .ndrelativewrap{position:relative!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li .btn_wrap{float:left!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li input.styles{margin:0!important;border-style:solid!important;border-width:1px!important;width: 198px!important;height:14px!important;padding:6px 0 7px 4px!important;outline-style:none!important;vertical-align:middle!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li input.styles::-ms-clear{display:none!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist input.styles:focus::-webkit-input-placeholder {color:transparent!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist input.styles:focus::-moz-placeholder {color:transparent!important;}", ".outlogin_layerbox_bylx .layerbox_left .pre_name{display:block!important;;padding-top:50px!important;width:205px!important;; white-space:nowrap!important;text-overflow:ellipsis!important;overflow:hidden!important;font-size:18px!important;height:25px!important;}", ".outlogin_layerbox_bylx .layerbox_left .chg_ac{display:block!important;height:16px!important;font-size:14px!important;text-decoration:none!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li.loginform_yzm{height:28px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li.loginform_yzm input.styles{width:90px!important; float:left!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li.loginform_yzm .disability_voice{display:inline-block;", "width:35px;height:29px;vertical-align:middle!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li.loginform_yzm img.yzm{float:left!important;margin-left:12px!important;height:28px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li.loginform_yzm .reload-code{float:left!important;margin:7px 0 0 5px!important;width:24px!important;height:18px!important;cursor:pointer!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist a.login_btn{float:left!important;margin-right:6px!important;padding:7px 18px!important;text-decoration:none!important;font-size:14px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist a.register_lnk{text-decoration:none;vertical-align:middle;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist a.register_lnk:hover{text-decoration:underline; }", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist .auto_checkbox{vertical-align:-2px!important;_vertical-align:-1px!important;margin:0 5px 0 0!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist label{margin:0 0 0 0!important;vertical-align:middle!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist a.forget_Pwd{margin-right:10px!important;text-decoration:none!important;vertical-align:middle!important;_vertical-align:-1px!important;}", ".outlogin_layerbox_bylx .layerbox_left .log_option{float:left!important;padding:7px 20px 0 0!important;*padding-top:12px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist a.forget_Pwd:hover{text-decoration:underline!important;}", ".outlogin_layerbox_bylx .association{position:absolute!important;left:30px;top:94px;margin:0;border-width:1px!important;border-style:solid!important;width:230px;overflow:hidden!important;padding:0;clear:both!important;}", ".outlogin_layerbox_bylx .association li{margin:0 1px!important;padding:3px!important;line-height:1.2!important;list-style:none!important;white-space:nowrap!important;}", ".outlogin_layerbox_bylx .association li.note_item{margin:4px!important;padding:0!important;}", ".outlogin_layerbox_bylx .association li a{display:block!important;text-decoration:none!important;}", ".outlogin_layerbox_bylx .login_error_tips{position:absolute; top:42px; left:215px; z-index:10; border:1px #797979 solid; background:#ffffcc; margin:0 0 10px 0!important;width:225px!important;padding:5px!important;}", ".outlogin_layerbox_bylx .login_recom_tips{position:absolute; top:42px; left:215px; z-index:10; border:1px #797979 solid; background:#ffffcc; margin:0 0 10px 0!important;padding:5px; white-space:nowrap;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li .rmb_login{float:left;padding:8px 0 0 10px;}", ".outlogin_LoginBtn:hover{text-decoration:underline!important;}", ".outlogin_LoginBtn .LoginIcon{display:inline-block!important;height:15px!important;width:16px!important;vertical-align:middle!important;}", ".outlogin_LoginBtn .LoginTx{vertical-align:middle!important;padding-left:5px!important;cursor:pointer!important;}", ".outlogin_layerbox_bylx .otwo_d_wrap{width:185px!important;height:260px!important;_width:182px!important;}", ".outlogin_layerbox_bylx .otwo_d_wrap .otwo_tl{height:40px!important;padding:8px 0 0 26px!important;}", ".outlogin_layerbox_bylx .otwo_d_wrap .td_wrap{border-right:1px solid #ededed!important;height:128px!important;padding-right:30px!important;text-align:right!important;}", ".outlogin_layerbox_bylx .otwo_d_wrap .td_wrap img{border:none!important;display:inline!important;}", ".outlogin_layerbox_bylx .otwo_d_wrap .thumb{float:right;;border:2px solid #dfdfdf;-webkit-border-radius:60px;-moz-border-radius:60px;border-radius:60px;width:120px;height:120px;overflow:hidden; box-shadow:0 0 2px 3px hsla(0,0%,20%,.05)}", ".outlogin_layerbox_bylx .otwo_d_wrap .thumb img{width:120px;height:120px;-webkit-border-radius:60px;-moz-border-radius:60px;border-radius:60px;}", ".outlogin_layerbox_bylx .otwo_hlp{position:absolute!important;left:175px!important;top:59px!important;width:229px!important;height:329px!important;background:#ebebeb!important;background:hsla(0,0%,0%,.08)!important;z-index:16!important;}", ".outlogin_layerbox_bylx .otwo_hlp .hlp_cnt{margin:3px!important;border:1px solid #dadada!important;height:302px!important;padding:19px 0 0 15px!important;background:#fff;!important}", ".outlogin_layerbox_bylx .otwo_hlp .otwo_hlp_tl{height:23px!important;line-height:1!important;}", ".outlogin_layerbox_bylx .otwo_hlp .ot_arrow{position:absolute!important;top:68px!important;left:-7px!important;width:11px!important;height:16px!important;background:url(http://i.sso.sina.com.cn/images/login/arrow.png) no-repeat 0 0!important;}", ".outlogin_layerbox_bylx .swip_check{position:absolute!important;left:10px!important;top:25px!important;border:1px solid #ccc!important;width:204px!important;height:46px!important;background:#fffae1!important; box-shadow:0 0 3px hsla(0,0%,0%,.2)!important; border-radius:3px!important;}", ".outlogin_layerbox_bylx .swip_check_cls,", ".outlogin_layerbox_bylx .swip_check_icon,", ".outlogin_layerbox_bylx .swip_check_btmarow{background-image:url(http://i.sso.sina.com.cn/images/login/swip_icon.gif)!important;background-repeat:no-repeat!important;overflow:hidden!important;}", ".outlogin_layerbox_bylx .swip_check_cls{float:right!important;display:inline!important;margin:9px!important;width:10px!important;height:10px!important;background-position:1px -27px!important;}", ".outlogin_layerbox_bylx .swip_check_icon{float:left!important;margin:5px!important;width:15px!important;height:15px!important;background-position:0 -8px!important; }", ".outlogin_layerbox_bylx .swip_check_txt{ margin:4px 0 0!important;overflow:hidden!important;line-height:18px!important;}", ".swip_check_btmarow{position:absolute!important;bottom:-6px!important;left:50%!important;margin-left:-3px!important;width:10px!important;height:6px!important;background-position:0 0!important;}", ".outlogin_layerbox_bylx{width:477px!important;border-color:#ffc525;color:#434242;box-shadow:4px 4px 0 rgba(0,0,0,.1);background-color:#fff;}", ".outlogin_layerbox_bylx a.layerbox_close{color:#666;}", ".outlogin_layerbox_bylx a.layerbox_close:hover{color:#3f7bc1;}", ".outlogin_layerbox_bylx .close_loginname{color:#666;}", ".outlogin_layerbox_bylx .close_loginname:hover{color:#DA0000;}", ".outlogin_layerbox_bylx .layerbox_left{border-right-color:#fff;background:#fff;}", ".outlogin_layerbox_bylx .layerbox_left input.styles{border-color:#d0d0d0;background:#FFF;}", ".outlogin_layerbox_bylx .layerbox_left .disability_voice{background:url(http://i.sso.sina.com.cn/images/login/voice.gif) no-repeat 50% 50%;}", ".outlogin_layerbox_bylx .layerbox_left a.login_btn{background:#ff8500;color:#fff;}", ".outlogin_layerbox_bylx .layerbox_left a.login_btn:hover{background:#ff931d;}", ".outlogin_layerbox_bylx .layerbox_left a.register_lnk{color:#a87a2c;}", ".outlogin_layerbox_bylx .layerbox_left a.login_lnk:hover{color:#a87a2c;}", ".outlogin_layerbox_bylx .layerbox_left a.forget_Pwd{color:#a87a2c;}", ".outlogin_layerbox_bylx .association{border-color:#ddd;background:#fff;}", ".outlogin_layerbox_bylx .association .note_item{color:#999;}", ".outlogin_layerbox_bylx .association a{color:#999;}", ".outlogin_layerbox_bylx .association .current{background:#f4f5f7;}", ".outlogin_layerbox_bylx .login_error_tips{color:#DA0000; }", ".outlogin_layerbox_bylx .login_recom_tips{color:#000; }", ".outlogin_LoginBtn .LoginIcon{background:url(http://i.sso.sina.com.cn/images/login/loginButton_16a.png) no-repeat 0 0;}", ".outlogin_layerbox_bylx li.loginform_yzm .reload-code{background:url(http://i.sso.sina.com.cn/images/login/verify_refresh.png) no-repeat 0 0;}", ".outlogin_layerbox_bylx li.loginform_yzm .reload-code:hover{background-position:0 -18px;}", ".outlogin_layerbox_bylx .chg_ac{color:#ff8500;}", ".outlogin_layerbox_bylx .layerbox_left .qq_spanoption{float:left!important;padding:8px 20px 0 0!important;*padding-top:8px!important;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li span a.qq_login_h{margin-right:10px!important;text-decoration:none;vertical-align:middle!important;_vertical-align:-1px!important;color:#000;}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li span a.qq_login_h:hover{color:#ff8500;text-decoration:underline !important}", ".outlogin_layerbox_bylx .layerbox_left ul.loginformlist li span a span.qq_login_logo {display: inline-block;width: 16px;height: 16px;margin-right: 5px;background-image: url(http://i.sso.sina.com.cn/images/login/qq.png);background-repeat: no-repeat;vertical-align: middle;}"];
        return {
            get: function() {
                if (typeof b !== "string") {
                    b = b.join("\n")
                }
                return b
            }
        }
    });
    a.register("kit.extra.language", function(b) {
        var c = window.$LANG || {};
        return function(d, e) {
            var f = b.core.util.language(d, c);
            f = f.replace(/\\}/ig, "}");
            if (e) {
                f = b.templet(f, e)
            }
            return f
        }
    });
    a.register("kit.arr.filter", function(b) {
        return function(d, f, g) {
            var c = [];
            for (var e = 0; e < d.length; e++) {
                if (f.call(g, d[e], e, d)) {
                    c.push(d[e])
                }
            }
            return c
        }
    });
    a.register("comp.layer.bubble.relate_tip", function(d) {
        var c = d.core.dom.getSize, e = d.kit.dom.builder, b = d.kit.dom.parseDOM;
        return function(g) {
            var k = {};
            var j = ['<div class="tips">', '<span node-type="content"></span>', '<button node-type="close" class="close" style="cursor:pointer;">×</button>', "</div>"].join("");
            var h = {
                template: j,
                related_el: null,
                parent_node: document.body,
                use_relative: false,
                direction: "top",
                margin: 0,
                styles: {}
            };
            k.conf = h;
            var f = {
                position: "absolute"
            };
            k.init = function() {
                k.root = null;
                k.nodes = {};
                k.set_options(g)
            };
            k.set_options = function(l) {
                h = d.parseParam(h, l);
                f = d.core.json.merge(f, h.styles)
            };
            k.build = function() {
                var l = e(h.template);
                k.root = l.box;
                k.nodes = b(l.list);
                if (h.use_relative) {
                    h.parent_node.appendChild(k.root)
                } else {
                    h.parent_node.insertBefore(k.root, h.parent_node.firstChild)
                }
                k.setEvents("add")
            };
            k.set_styles = function(l) {
                l = l || f;
                if (k.root) {
                    d.foreach(l, function(n, m) {
                        d.setStyle(k.root, m, n)
                    })
                }
            };
            k.show = function(l, m) {
                k.visible = true;
                if (!k.root) {
                    k.build()
                }
                k.set_styles();
                if (m) {
                    h.related_el = m
                }
                if (k.root && h.related_el) {
                    d.setStyle(k.root, "display", "")
                }
                k.set_content(l);
                k.set_position()
            };
            k.set_content = function(m) {
                if (k.nodes) {
                    var l = k.nodes.content || k.root;
                    if (m) {
                        l.innerHTML = m
                    }
                }
            };
            k.get_content = function() {
                if (k.nodes) {
                    var l = k.nodes.content || k.root;
                    return l.innerHTML
                }
            };
            k.hide = function() {
                k.visible = false;
                if (k.root) {
                    d.setStyle(k.root, "display", "none")
                }
            };
            k.set_position = function() {
                var n = h.related_el;
                if (k.root && n) {
                    var p = {};
                    var q = d.position(n, {
                        parent: h.parent_node
                    });
                    var m = c(n);
                    p.left = q.l;
                    p.top = q.t;
                    p.right = q.l + m.width;
                    p.bottom = q.t + m.height;
                    var o = c(k.root);
                    var l = {};
                    l.top = p.top;
                    l.left = p.left;
                    if (h.direction == "right") {
                        l.left = p.right + h.margin
                    } else {
                        if (h.direction == "bottom") {
                            l.top = p.bottom + h.margin
                        } else {
                            if (h.direction == "left") {
                                l.left = p.left - o.width - h.margin
                            } else {
                                l.top = p.top - o.height - h.margin
                            }
                        }
                    }
                    if (h.use_relative) {
                        d.setStyle(k.root, "top", l.top + "px");
                        d.setStyle(k.root, "left", l.left + "px")
                    } else {
                        d.setStyle(k.root, "marginTop", l.top + "px");
                        d.setStyle(k.root, "marginLeft", l.left + "px")
                    }
                }
            };
            var i = {
                hide: function() {
                    d.preventDefault();
                    k.hide()
                }
            };
            k.setEvents = function(l) {
                var m = l + "Event";
                d[m](k.nodes.close, "click", i.hide)
            };
            k.destroy = function() {
                k.setEvents("remove");
                if (k.root && k.root.parentNode) {
                    k.root.parentNode.removeChild(k.root)
                }
                k.root = null;
                k.nodes = {}
            };
            k.init();
            k.conf = h;
            return k
        }
    });
    a.register("comp.layer.suggestor.custom_loginname", function(h) {
        var i = h.core.arr.indexOf, k = h.core.dom.getSize, j = h.kit.arr.filter, c = h.kit.extra.language, f = h.kit.evt.input_bindchange, g = h.kit.util.buffer_pool, e = h.comp.layer.bubble.relate_tip;
        var b = ["sina.com", "163.com", "qq.com", "126.com", "vip.sina.com", "sina.cn", "hotmail.com", "gmail.com", "sohu.com", "yahoo.cn", "139.com", "wo.com.cn", "189.cn"];
        var d = {
            box: '<ul style="display:none;" id="sinaNote" class="passCard">#{inner}</ul>',
            note: '<li class="note" node-type="note">#{text}</li>',
            item: '<li class="item" title="" data-email="#{email}" node-type="item"></li>'
        };
        var l = {
            box: {
                zIndex: "1",
                margin: "0",
                padding: "0",
                overflow: "hidden",
                background: "none repeat scroll 0 0 #FFFFFF",
                border: "1px solid #CCCCCC",
                position: "absolute",
                textAlign: "left"
            },
            item: {
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                clear: "both",
                color: "#999999",
                cursor: "pointer",
                fontSize: "12px",
                height: "20px",
                lineHeight: "20px",
                listStyle: "none outside none",
                margin: "0 1px",
                padding: "0 5px"
            }
        };
        return function(q, n) {
            var p = {};
            var m = {};
            var o = h.parseParam({
                input_delay: 200,
                hide_delay: 150,
                email_list: b,
                hover_class: "cur",
                hover_background: "#E8F4FC",
                onSelect: function() {},
                format_set: function(r) {
                    return h.encodeHTML(r)
                },
                format_get: function(s, r) {
                    return s
                },
                use_relative: false,
                item_tpl: d.item,
                item_styles: l.item,
                note_tpl: d.note,
                note_text: "请选择邮箱类型",
                note_styles: l.item,
                box_tpl: d.box,
                box_parent_node: document.body,
                box_direction: "bottom",
                box_margin: 0,
                box_styles: l.box
            }, n);
            p.init = function() {
                m.input = q;
                if (m.input) {
                    m.input.setAttribute("autocomplete", "off")
                }
                m.root = null;
                m.items = [];
                p.items = {};
                p.set_options(n);
                p.set_input_events("add")
            };
            p.set_options = function(r) {
                o = h.parseParam(o, r)
            };
            p.buildLayer = function() {
                var s = [];
                var r = c(o.note_tpl, {
                    text: o.note_text
                });
                s.push(r);
                s.push(c(o.item_tpl, {
                    email: ""
                }));
                h.foreach(o.email_list, function(v) {
                    var u = c(o.item_tpl, {
                        email: v
                    });
                    s.push(u)
                });
                var t = c(o.box_tpl, {
                    inner: s.join("")
                });
                if (!o.box_styles.width) {
                    o.box_styles.width = k(m.input).width - 2 + "px"
                }
                p.layer = e({
                    template: t,
                    related_el: m.input,
                    use_relative: o.use_relative,
                    parent_node: o.box_parent_node,
                    direction: o.box_direction,
                    margin: o.box_margin,
                    styles: o.box_styles
                });
                p.layer.set_content = function() {};
                p.layer.build();
                p.root = p.layer.root;
                m.note = p.layer.nodes.note;
                m.items = p.layer.nodes.item;
                p.bound = {};
                p.bound.get_value = function() {
                    h.preventDefault();
                    p.get_value()
                };
                h.foreach(m.items, function(v) {
                    var u = v.getAttribute("data-email") || "empty";
                    p.items[u] = v;
                    p.bound["over_" + u] = function() {
                        p.select_item(u)
                    }
                });
                p.set_item_styles();
                p.set_position();
                p.set_layer_events("add")
            };
            p.show = function() {
                if (p.focused) {
                    if (!p.layer) {
                        p.buildLayer()
                    }
                    p.layer.show()
                }
            };
            p.hide = function() {
                if (p.layer) {
                    p.layer.hide()
                }
            };
            p.isVisible = function() {
                return p.root ? h.getStyle(p.root, "display") !== "none" : false
            };
            p.onFocus = function() {
                p.focused = true
            };
            p.onBlur = function() {
                p.focused = false;
                p.hide()
            };
            p.set_position = function() {
                if (p.layer) {
                    p.layer.set_position()
                }
            };
            p.update = function() {
                var t = m.input.value;
                var s = t.indexOf("@");
                var u = t;
                var r = "";
                if (s >= 0) {
                    u = t.substr(0, s);
                    r = t.substr(s + 1)
                }
                u = h.trim(u);
                r = h.trim(r);
                h.foreach(m.items, function(w) {
                    var v = w.getAttribute("data-email");
                    var x = "";
                    if (v) {
                        x = u + "@" + v;
                        if (r && (v.indexOf(r) !== 0 || v == r)) {
                            h.setStyle(w, "display", "none")
                        } else {
                            h.setStyle(w, "display", "")
                        }
                    } else {
                        x = t
                    }
                    w.innerHTML = o.format_set(x);
                    w.setAttribute("title", x)
                });
                p.reset_focus(t)
            };
            p.check_update = function() {
                var r = m.input.value;
                r = h.trim(r);
                if (r) {
                    if (!p.isVisible()) {
                        p.show()
                    }
                } else {
                    p.hide();
                    return 
                }
                if (r != p.pre_value) {
                    p.update()
                }
                p.pre_value = r
            };
            p.delay_update = function(r) {
                if (!p.buffer) {
                    p.buffer = g({
                        delay: o.input_delay
                    });
                    p.buffer.feedback = p.check_update
                }
                p.buffer.trigger_regular()
            };
            p.get_value = function() {
                var s = m.input.value;
                if (s && p.selected_item_node) {
                    s = p.selected_item_node.getAttribute("title");
                    var r = p.selected_item_node.getAttribute("data-email");
                    if (r) {
                        m.input.value = o.format_get(s, r)
                    }
                    setTimeout(o.onSelect)
                }
            };
            p.check_key = function(r) {
                r = h.fixEvent(r);
                var s = r.keyCode.toString();
                if (s === "38") {
                    p.move_focus("up");
                    h.preventDefault()
                }
                if (s === "40") {
                    p.move_focus("down")
                }
                if (s === "13" || s === "9") {
                    if (p.isVisible()) {
                        p.get_value();
                        p.hide()
                    }
                }
            };
            p.select_item = function(r) {
                var s = p.items[r] || p.items.empty;
                p.set_blur(p.selected_item_node);
                p.set_focus(s);
                p.selected_item_node = s;
                return s
            };
            p.reset_focus = function(r) {
                if (r) {
                    p.select_item("empty")
                } else {
                    if (p.selected_item_node) {
                        p.set_blur(p.selected_item_node)
                    }
                }
            };
            p.move_focus = function(u) {
                if (!p.layer) {
                    return 
                }
                var s = "empty";
                var x = p.selected_item_node;
                if (x) {
                    s = x.getAttribute("data-email") || "empty"
                }
                var r = j(["empty"].concat(o.email_list), function(z) {
                    var y = p.items[z];
                    return y.style.display != "none"
                });
                var t = i(s, r);
                var w = u == "down" ? t + 1: t - 1;
                if (w < 0) {
                    w = r.length - 1
                } else {
                    if (w >= r.length) {
                        w = 0
                    }
                }
                var v = r[w];
                p.select_item(v)
            };
            p.set_focus = function(r) {
                if (r) {
                    h.addClassName(r, o.hover_class);
                    if (o.hover_background) {
                        h.setStyle(r, "background", o.hover_background)
                    }
                }
            };
            p.set_blur = function(r) {
                if (r) {
                    h.removeClassName(r, o.hover_class);
                    if (o.hover_background) {
                        var s = o.note_styles.background || "";
                        h.setStyle(r, "background", s)
                    }
                }
            };
            p.set_item_styles = function(s) {
                s = s || o.item_styles;
                if (m.items && m.items.length) {
                    var r = [].concat(m.items);
                    if (m.note) {
                        r.push(m.note)
                    }
                    h.foreach(r, function(t) {
                        h.foreach(s, function(v, u) {
                            h.setStyle(t, u, v)
                        })
                    })
                }
            };
            p.set_input_events = function(r) {
                var s = r + "Event";
                f(m.input, r, p.delay_update);
                h[s](m.input, "focus", p.onFocus);
                h[s](m.input, "blur", p.onBlur);
                h[s](m.input, "keydown", p.check_key)
            };
            p.set_layer_events = function(r) {
                var s = r + "Event";
                h[s](window, "resize", p.set_position);
                h.foreach(p.items, function(u, t) {
                    h[s](u, "mouseover", p.bound["over_" + t])
                });
                h[s](p.root, "mousedown", p.bound.get_value)
            };
            p.destroy = function() {
                p.set_input_events("remove");
                p.set_layer_events("remove");
                if (p.layer) {
                    p.layer.destroy()
                }
            };
            p.nodes = m;
            p.conf = o;
            p.init();
            return p
        }
    });
    a.register("comp.layer.outlogin", function(j) {
        var A = j.core.json.merge, h = j.core.util.language, s = j.core.io.jsonp, c = j.core.dom.getSize, D = j.kit.obj.append, E = j.kit.dom.fix, e = j.kit.dom.builder, k = j.kit.dom.parseDOM, r = j.kit.dom.loadStyle, y = j.kit.util.makeReady, b = j.kit.dom.appendStyle, C = j.module.mask, m = j.module.draggable, w = j.common.util.sso, f = j.common.channel.sso, u = j.comp.defaultStyle, p = j.comp.login.outlogin, B = j.comp.layer.suggestor.custom_loginname;
        var t = {};
        var d = {
            layer: ['<div node-type="box" class="outlogin_layerbox_bylx outlogin_layerbox_bylx_anrrow" style="display:none;">', "#L{iframemask}", '<div class="cur_move" node-type="handle">', '<a node-type="close" href="javascript:;" onclick="return false;" class="layerbox_close">&times;</a>', "</div>", '<div node-type="root" class="layerbox_left">', '<div class="titletips" node-type="titletips" >#L{新浪微博、博客、邮箱帐号，请直接登录}</div>', '<p node-type="tip" class="login_error_tips" style="visibility:hidden;"></p>', '<p node-type="phone_tip" class="login_recom_tips" style="visibility:hidden;">绑定手机号也能登录了。<a href="http://help.weibo.com/faq/q/1576/15471" target="_blank">详情</a></p>', '<ul class="loginformlist">', '<li class="ndrelativewrap" node-type="prelogin_area" style="display:none;">', '<span class="pre_name" node-type="prelogin_name">加载中...</span>', '<a href="javascript:;" class="chg_ac" node-type="prelogin_changeAccount">换个账号登录</a>', "</li>", '<li class="ndrelativewrap" node-type="loginname_box">', '<input node-type="loginname" name="loginname" class="styles" type="text" placeholder="#L{微博/博客/邮箱/手机号}" tabindex="1" maxlength="128" autocomplete="off" autocapitalize="off"/>', '<a node-type="clear" href="javascript:;" class="close_loginname" style="display:none;">&times;</a>', "</li>", '<li node-type="password_box">', '<input node-type="password" name="password" class="styles" type="password" placeholder="#L{请输入密码}" tabindex="2" maxlength="24"/>', "</li>", '<li class="loginform_yzm" node-type="door_box" style="display:none;">', '<input node-type="door" name="door" class="styles" type="text" tabindex="3" maxlength="6" autocomplete="off" autocapitalize="off"/>', '<img node-type="door_img" class="yzm" alt="#L{看不清？换一换}"/>', '<a node-type="door_change" href="javascript:;" class="reload-code" title="#L{看不清？换一换}"></a>', '<a node-type="door_voice" href="javascript:;" class="disability_voice" style="display:none;"></a>', "</li>", '<li node-type="vsn_box" style="display:none;">', '<input node-type="vsn" name="vsn" class="styles" type="text" tabindex="4" maxlength="6" placeholder="#L{请输入微盾动态码}" autocomplete="off" autocapitalize="off"/>', "</li>", '<li class="sub_wrap_r">', '<span class="btn_wrap">', '<a href="javascript:;" tabindex="5" node-type="submit" class="login_btn" suda-uatrack="key=index_new_menu&value=logon_login">#L{登录}</a>', '<label node-type="remember_label" class="rmb_login">', '<input name="remember" node-type="remember" type="checkbox" class="auto_checkbox" checked="checked" autocomplete="off"/>', "<span>#L{下次自动登录}</span>", "</label>", "</span>", "</li>", '<li class="sub_wrap_r">', '<span class="log_option">', '<a class="forget_Pwd" node-type="forgot_password" href="http://login.sina.com.cn/getpass.html" target="_blank" suda-uatrack="key=index_new_menu&value=logon_forgot">#L{忘记密码}</a>', '<a class="register_lnk" node-type="register_button" target="_blank" href="https://login.sina.com.cn/signup/signup.php" suda-uatrack="key=index_new_menu&value=logon_register">#L{立即注册}</a>', "</span>", "</li>", '<li class="sub_wrap_r">', '<span class="qq_spanoption" style="display:none;">', '<a class="qq_login_h" node-type="qq_login" href="#" suda-uatrack="key=index_new_menu&value=logon_qq">', '<span class="qq_login_logo"></span>', '<span class="qq_login">#L{使用QQ登录}</span>', "</a>", "</span>", "</li>", "</ul>", "</div>", '<div class="otwo_d_wrap" node-type="layerleft_qrcode">', '<div class="otwo_tl">', "用微博客户端扫描安全登录", "</div>", '<div class="td_wrap">', '<a href="javascript:;"><img node-type="qrcode_img" src="http://i.sso.sina.com.cn/images/login/td.png"></a>', "</div>", "</div>", '<div class="otwo_d_wrap" node-type="layerleft_preloginThumb" style="display:none;">', '<div class="otwo_tl"></div>', '<div class="td_wrap">', '<span class="thumb"><img node-type="prelogin_img" src="http://i.sso.sina.com.cn/images/login/pre_loading.gif"></span>', "</div>", "</div>", '<div node-type="qrcode_help" class="otwo_hlp" style="display:none;">', '<div class="hlp_cnt">', '<div class="otwo_hlp_tl">用此功能扫描二维码快速登录</div>', '<div class="ot_wrap">', '<img src="http://i.sso.sina.com.cn/images/login/weibo_how_ot.png">', "</div>", "</div>", '<span class="ot_arrow"></span>', "</div>", '<div node-type="qrcode_tip" class="swip_check" style="display:none;">', '<span class="swip_check_cls" node-type="qrcode_tip_close"></span>', '<span class="swip_check_icon"></span>', '<p class="swip_check_txt">扫描成功！<br>点击手机上的确认即可登录</p>', '<span class="swip_check_btmarow"></span>', "</div>", '<div node-type="css_check" class="outlogin_checkload" style="display:none;"></div>', "</div>"].join(""),
            login_button: '<a class="outlogin_LoginBtn" href="javascript:;"><span class="LoginIcon"></span><span class="LoginTx">#L{登录}</span></a>',
            suggestor_box: '<ul style="display:none;" class="association">#{inner}</ul>',
            suggestor_item: '<li title="" data-email="#{email}" node-type="item"></li>',
            suggestor_note: '<li class="note_item" node-type="note">#{text}</li>'
        };
        var l = {};
        var v = {};
        var g = {
            html: {
                button: d.login_button,
                layer: d.layer,
                pre_login_img: "http://i.sso.sina.com.cn/images/login/pre_loading.gif"
            },
            extra: {
                css: "",
                ssologin: "http://i.sso.sina.com.cn/js/ssologin.js",
                qrcodelogin: "http://i.sso.sina.com.cn/js/qrcode_login.js"
            },
            sso: {
                entry: "sso",
                setDomain: true,
                domain: "sina.com.cn"
            },
            login: {
                timeout: 10 * 1000,
                name: "pluginSSOController",
                vsnf: 1
            },
            language: {
                iframemask: "",
                E010001: "请输入登录名",
                E010002: "请输入密码",
                E010003: "请输入验证码",
                E010004: "请输入您微盾上显示的动态码",
                E010005: "网络异常，请检查网络连接",
                E010006: "获取二维码错误，请点击重新获取",
                "4010": '帐号尚未激活，请<a href="https://login.sina.com.cn/signup/signupmail1.php?user=#{loginname}" target="_blank">点此激活</a>',
                end: ""
            },
            styles: {
                zIndex: "1000"
            },
            drag: {
                enable: true,
                handle: "handle",
                dragarea: "page"
            },
            mask: {
                enable: false,
                useIframeInIE6: true,
                opacity: 0.5,
                background: "#000000"
            },
            suggestor: {
                email_list: ["sina.com", "vip.sina.com", "sina.cn", "3g.sina.cn", "非新浪邮箱"],
                format_set: function(F) {
                    return '<a href="javascript:;" onclick="return false">' + j.encodeHTML(F) + "</a>"
                },
                format_get: function(G, F) {
                    if (G && F === "非新浪邮箱") {
                        G = G.split(/@/)[0]
                    }
                    return G
                },
                hover_class: "current",
                hover_background: "",
                item_tpl: d.suggestor_item,
                item_styles: {},
                note_tpl: d.suggestor_note,
                note_styles: {},
                box_tpl: d.suggestor_box,
                box_styles: {
                    margin: "0 0 0 -1px"
                },
                use_relative: true
            },
            plugin: {
                position: "center",
                parentNode: null,
                relatedNode: null,
                useIframeInIE6: true,
                shakeWhenError: true,
                autologin: true,
                voiceEnable: false,
                savestate: 30,
                qqLogin: true
            }
        };
        j.$LANG = g.language;
        l.set = function(H, F) {
            H = H.toString();
            F = F || {};
            var G = g[H];
            if (G) {
                G = A(G, F);
                g[H] = G
            }
            if (v[H] && v[H].conf) {
                D(v[H].conf, G)
            }
            return l
        };
        l.getSSO = function() {
            return window[g.login.name]
        };
        l.init = function() {
            v.prepare(function() {
                var F = l.getSSO();
                if (F && F.autoLogin) {
                    F.autoLogin(function() {
                        f.fire("login_complete");
                        if (l.isLogin()) {
                            f.fire("login_success")
                        } else {
                            if (l.isPreLoginState && location.href.indexOf("http://www.sina.com.cn") < 0) {
                                f.fire("pre_login_state")
                            } else {
                                f.fire("login_failure")
                            }
                        }
                    })
                }
            });
            return l
        };
        v.fixDragOps = function() {
            var F = A({}, g.drag);
            if (!j.isNode(F.handle)) {
                F.handle = t[F.handle]
            }
            F.exclude = [t.close];
            return F
        };
        v.prepareSSO = function(F) {
            if (!v.ssoReady) {
                v.ssoReady = y({
                    condition: function() {
                        return !!window.sinaSSOController
                    },
                    ready: function(G) {
                        j.scriptLoader({
                            timeout: 10 * 1000,
                            url: g.extra.ssologin,
                            onComplete: G,
                            onTimeout: function() {
                                v.ssoReady.reset()
                            }
                        })
                    }
                })
            }
            v.ssoReady.exec(F)
        };
        v.prepareQRcode = function(F) {
            if (!v.qrcodeReady) {
                v.qrcodeReady = y({
                    condition: function() {
                        return !!window.SINA_QRCODE_LOGIN
                    },
                    ready: function(G) {
                        j.scriptLoader({
                            timeout: 10 * 1000,
                            url: g.extra.qrcodelogin,
                            onComplete: G,
                            onTimeout: function() {
                                v.qrcodeReady.reset()
                            }
                        })
                    }
                })
            }
            v.qrcodeReady.exec(F)
        };
        var z = false;
        v.prepareCss = function(F) {
            if (!v.cssReady) {
                v.cssReady = y({
                    condition: function() {
                        return z
                    },
                    ready: function(G) {
                        b(u.get());
                        if (g.extra.css) {
                            r(g.extra.css, {
                                timeout: 10 * 1000,
                                styleCheck: function() {
                                    if (j.isNode(t.css_check)) {
                                        var H = j.getStyle(t.css_check, "width");
                                        if (H === "123px") {
                                            return true
                                        }
                                    }
                                },
                                onLoad: function() {
                                    z = true;
                                    G()
                                },
                                onTimeout: function() {
                                    v.cssReady.reset()
                                }
                            })
                        } else {
                            z = true;
                            G()
                        }
                    }
                })
            }
            v.cssReady.exec(F)
        };
        var x = false;
        v.prepare = function(F) {
            if (!x) {
                x = true;
                j.Ready(function() {
                    v.prepareSSO(function() {
                        v.setSSO();
                        v.parseDom();
                        v.prepareQRcode(function() {
                            v.setQRcode()
                        });
                        v.prepareCss(function() {
                            v.build();
                            if (j.getType(F) === "function") {
                                F()
                            }
                        })
                    })
                })
            } else {
                if (j.getType(F) === "function") {
                    F()
                }
            }
        };
        v.setSSO = function() {
            l.isPreLoginState = false;
            if (!v.SSO) {
                if (window.SSOController) {
                    v.SSO = w(g.login);
                    v.SSO.init();
                    var F = l.getSSO();
                    j.foreach(g.sso, function(H, G) {
                        F[G] = H
                    });
                    if (F.isPreLoginState()) {
                        l.isPreLoginState = true;
                        v.getUserUid()
                    }
                }
                v.setListener("add")
            }
        };
        var n = false, i = false;
        v.getQRcode = function() {
            if (window.SINA_QRCODE_LOGIN&&!i) {
                var F = window.SINA_QRCODE_LOGIN;
                i = true;
                n = true;
                F.getQRcode(function(G) {
                    if (G.retcode == 20000000) {
                        t.qrcode_img.src = G.data.image;
                        if (n) {
                            F.start()
                        }
                    }
                })
            }
        };
        v.startQRcode = function() {
            if (window.SINA_QRCODE_LOGIN&&!n) {
                window.SINA_QRCODE_LOGIN.start();
                n = true
            }
        };
        v.cancelQRcode = function() {
            if (window.SINA_QRCODE_LOGIN) {
                window.SINA_QRCODE_LOGIN.cancel();
                n = false
            }
        };
        v.setQRcode = function() {
            if (window.SINA_QRCODE_LOGIN) {
                var F = window.SINA_QRCODE_LOGIN;
                F.set({
                    entry: g.sso.entry,
                    domain: g.sso.domain,
                    qrcode_size: 128
                }).register("qrcode_timeout", function(G) {
                    i = false;
                    v.getQRcode()
                }).register("qrcode_exception", function(G) {
                    i = false;
                    v.getQRcode()
                }).register("login_success", function(G) {
                    j.setStyle(t.qrcode_tip, "display", "none");
                    f.fire("login_success")
                }).register("login_failure", function(G) {
                    f.fire("login_failure")
                }).register("qrcode_scanned", function(G) {
                    j.setStyle(t.qrcode_tip, "display", "")
                })
            }
        };
        v.build = function() {
            if (v.plugin) {
                return 
            }
            j.setStyle(t.box, "display", "");
            if (g.plugin.voiceEnable) {
                if (!g.language["2070"]) {
                    g.language["2070"] = '验证码错误。<a href="javascript:;" onclick="try{SINA_OUTLOGIN_LAYER.listener.fire(\'play_door_voice\');}catch(e){}return false;">点击收听验证码。</a>'
                }
                if (t.door_voice) {
                    j.setStyle(t.door_voice, "display", "")
                }
            }
            if (g.mask.enable) {
                v.mask = C.showUnderNode(t.box, g.mask);
                j.setStyle(v.mask.getNode(), "display", "none")
            }
            if (g.plugin.qqLogin) {
                j.setStyle(t.qq_login.parentNode, "display", "");
                t.qq_login.href = "https://passport.weibo.com/othersitebind/authorize?site=qq&wl=1&entry=" + g.sso.entry + "&callback=" + encodeURIComponent(window.location.href)
            }
            var F = v.fixDragOps();
            v.drag = m(t.box, F);
            v.drag.init();
            v.plugin = p(t.box, l.isPreLoginState);
            g.plugin.entry = g.sso.entry;
            g.plugin.ssoName = g.login.name;
            v.plugin.setOptions(g.plugin);
            v.plugin.init();
            if (t.loginname) {
                g.suggestor.onSelect = function() {
                    if (l.isVisible()) {
                        t.password.focus()
                    }
                };
                g.suggestor.box_parent_node = t.box;
                g.suggestor.note_text = h("#L{请选择邮箱类型}", g.language);
                v.suggestor = B(t.loginname, g.suggestor)
            }
            j.setStyle(t.box, "display", "none");
            v.setEvents("add");
            f.fire("layer_ready")
        };
        v.insert = function() {
            if (!j.isNode(t.box)) {
                return 
            }
            var F = g.plugin.parentNode;
            if (!j.isNode(F)) {
                F = document.body
            }
            if (!j.isNode(t.box.parentNode) || F !== v._currentParentNode) {
                F.appendChild(t.box)
            }
            v._currentParentNode = F
        };
        v.parseDom = function() {
            if (!j.isNode(t.box)) {
                if (j.core.util.browser.IE6 && g.plugin.useIframeInIE6) {
                    g.language.iframemask = '<iframe node-type="iframemask" style="position:absolute;z-index:-1;width:100%;height:100%;filter:mask();left:0;top:0;"></iframe>'
                }
                var F = h(g.html.layer, g.language);
                var G = e(F);
                l.nodes = t = k(G.list);
                t.box = G.box;
                v.insert()
            }
        };
        v.updateLayer = function() {
            v.insert();
            j.foreach(g.styles, function(I, H) {
                j.setStyle(t.box, H, I)
            });
            var F = A({}, g.drag);
            var G = t[F.handle];
            if (j.isNode(G)) {
                if (F.enable) {
                    j.setStyle(G, "cursor", "move");
                    v.drag.enable()
                } else {
                    j.setStyle(G, "cursor", "auto");
                    v.drag.disable()
                }
            }
        };
        v.setPosition = function() {
            var G = g.plugin.position, L = c(t.box), K, F, J, I;
            if (G === "center") {
                if (!v.fixedLayer) {
                    v.fixedLayer = E(t.box, "c")
                } else {
                    v.fixedLayer.setFixed(true)
                }
            } else {
                if (v.fixedLayer) {
                    v.fixedLayer.destroy();
                    v.fixedLayer = null
                }
                if (G === "custom") {
                    j.setStyle(t.box, "position", "absolute")
                } else {
                    j.setStyle(t.box, "position", "absolute");
                    K = g.plugin.relatedNode;
                    if (K) {
                        J = j.position(K);
                        I = c(K)
                    }
                    F = G.split(/\s*[,，]\s*/gi);
                    j.foreach(F, function(M) {
                        if (J && I) {
                            switch (M) {
                            case"top":
                                j.setStyle(t.box, "top", J.t + "px");
                                break;
                            case"bottom":
                                j.setStyle(t.box, "top", J.t + I.height - L.height + "px");
                                break;
                            case"left":
                                j.setStyle(t.box, "left", J.l + "px");
                                break;
                            case"right":
                                j.setStyle(t.box, "left", J.l + I.width - L.width + "px");
                                break;
                            default:
                                break
                            }
                        } else {
                            j.setStyle(t.box, M, "0px")
                        }
                    })
                }
            }
            if (t.iframemask) {
                var H = j.getStyle(t.box, "borderWidth");
                H = parseInt(H, 10);
                j.setStyle(t.iframemask, "width", L.width + "px");
                j.setStyle(t.iframemask, "height", L.height + "px");
                j.setStyle(t.iframemask, "marginLeft", 0 - H + "px");
                j.setStyle(t.iframemask, "marginTop", 0 - H + "px")
            }
        };
        l.reset = function() {
            if (v.plugin) {
                v.plugin.reset()
            }
            if (v.suggestor) {
                v.suggestor.hide()
            }
        };
        v.onLogin = function() {
            l.hide();
            v.cancelQRcode()
        };
        v.onClose = function() {
            l.hide()
        };
        v.onLogout = function() {
            v.displayLoginLayer();
            l.isPreLoginState = false
        };
        v.preLogin = function() {
            l.getPreLoginWeiboData()
        };
        v.displayPreLoginLayer = function() {
            t.layerleft_qrcode.style.display = "none";
            t.loginname_box.style.display = "none";
            t.titletips.style.display = "none";
            t.layerleft_preloginThumb.style.display = "";
            t.prelogin_area.style.display = ""
        };
        v.displayLoginLayer = function() {
            t.layerleft_qrcode.style.display = "";
            t.loginname_box.style.display = "";
            t.titletips.style.display = "";
            t.layerleft_preloginThumb.style.display = "none";
            t.prelogin_area.style.display = "none"
        };
        var o = false;
        v.changeAccount = function() {
            o = true;
            v.displayLoginLayer()
        };
        l.getPreLoginWeiboData = function(F) {
            var H = A({
                url: "http://api.weibo.com/2/users/show_brief.json",
                args: {
                    source: "2835469272"
                },
                onTimeout: null,
                responseName: null,
                onComplete: null,
                onFail: null,
                onSuccess: j.funcEmpty,
                onFailure: j.funcEmpty
            }, F);
            var I = j.getType(H.onSuccess) === "function" ? H.onSuccess: j.funcEmpty, G = j.getType(H.onFailure) === "function" ? H.onFailure: j.funcEmpty;
            if (j.getType(H.onComplete) !== "function") {
                H.onComplete = function(J) {
                    if (J && J.code && J.code != 1) {
                        v.displayLoginLayer();
                        G(J);
                        return 
                    }
                    v.renderWeiboInfo(J.data.screen_name, J.data.profile_image_url);
                    I(J)
                }
            }
            if (j.getType(H.onFail) !== "function") {
                H.onFail = function(J) {
                    v.displayLoginLayer();
                    G({
                        code: - 1,
                        msg: "network fail"
                    })
                }
            }
            if (j.getType(H.onTimeout) !== "function") {
                H.onTimeout = function(J) {
                    G({
                        code: - 1,
                        msg: "timeout"
                    })
                }
            }
            s(H)
        };
        v.renderWeiboInfo = function(F, G) {
            if (!G ||!F) {
                return 
            }
            G = G.replace(/\/5\d\//, "/180/");
            t.prelogin_name.innerHTML = F;
            t.prelogin_img.src = G
        };
        v.renderName = function(F) {
            if (j.bLength(F) > 10) {
                F = j.leftB(F, 10)
            }
            return F
        };
        v.getUserUid = function() {
            window.sinaSSOController.prelogin({}, function(F) {
                t.loginname.prelogindata = F.uid
            })
        };
        v.shake = (function() {
            var H = "ui-outlogin-shake";
            var I = "outlogin-layer-shake";
            var G = null;
            var F = function() {
                if (G) {
                    return 
                }
                var K, N = [], J =- 16;
                N.push("." + H + " {-webkit-animation:" + I + " 600ms;}\n");
                N.push("@-webkit-keyframes " + I + " {\n");
                for (K = 0; K < 11; K++) {
                    N.push([K * 10 + "% {", "-webkit-transform:translateX(", (K%2 ? J : 0), "px);", "-webkit-animation-timing-function:", (K%2 ? "ease-in" : "ease-out"), ";}\n"].join(""));
                    if (K%2) {
                        J = 0 - J / 2
                    }
                }
                N.push("}\n");
                var L = N.join("");
                var M = ({
                    presto: "-o-",
                    trident: "-ms-",
                    gecko: "-moz-"
                })[j.core.util.browser.CORE];
                if (M) {
                    L = L.replace("-webkit-", M, "gi")
                }
                G = b(L)
            };
            return function() {
                if (g.plugin.shakeWhenError) {
                    F();
                    if (j.getStyle(t.box, "display") === "none") {
                        return 
                    }
                    j.removeClassName(t.box, H);
                    setTimeout(function() {
                        j.addClassName(t.box, H)
                    }, 100)
                }
            }
        })();
        v.setEvents = function(F) {
            var G = F === "add" ? "addEvent": "removeEvent";
            j[G](t.close, "click", v.onClose);
            j[G](window, "unload", l.destroy);
            j[G](t.prelogin_changeAccount, "click", v.changeAccount)
        };
        v.setListener = function(F) {
            var G = F === "add" ? "register": "remove";
            f[G]("login_success", v.onLogin);
            f[G]("logout_success", v.onLogout);
            f[G]("login_failure", v.shake);
            f[G]("validate_failure", v.shake);
            f[G]("pre_login_state", v.preLogin)
        };
        l.setLoginButton = function(F) {
            j.Ready(function() {
                if (j.getType(F) === "string") {
                    l.loginButton = j.E(F)
                } else {
                    if (j.isNode(F)) {
                        l.loginButton = F
                    }
                }
                if (l.loginButton) {
                    var H = h(g.html.button);
                    var G = e(H).box;
                    l.loginButton.appendChild(G);
                    j.addEvent(G, "click", l.show);
                    if (l.isLogin()) {
                        j.setStyle(G, "display", "none")
                    }
                    f.register("login_success", function() {
                        j.setStyle(G, "display", "none")
                    });
                    f.register("logout_success", function() {
                        j.setStyle(G, "display", "")
                    })
                }
            });
            return l
        };
        l.isDisplay = function() {
            return t.box ? j.getStyle(t.box, "display") !== "none" : false
        };
        l.isVisible = function() {
            return t.box?!!t.box.offsetWidth : false
        };
        l.show = function() {
            try {
                j.preventDefault()
            } catch (H) {}
            var G = l.isDisplay();
            var F = l.isVisible();
            if (!G) {
                if (v.mask) {
                    j.setStyle(v.mask.getNode(), "display", "")
                }
                if (t.box) {
                    j.setStyle(t.box, "display", "");
                    l.reset()
                }
            }
            j.removeClassName(t.box, "ui-outlogin-shake");
            v.updateLayer();
            v.setPosition();
            if (!F) {
                if (v.plugin) {
                    v.plugin.getRemember();
                    v.plugin.showClearButton()
                }
            }
            if (l.isPreLoginState&&!o && (location.href.indexOf("http://www.sina.com.cn") < 0)) {
                v.displayPreLoginLayer()
            } else {
                v.displayLoginLayer()
            }
            if (!G) {
                f.fire("layer_show")
            }
            v.getQRcode();
            v.startQRcode();
            return l
        };
        l.hide = function() {
            try {
                j.preventDefault()
            } catch (F) {}
            l.reset();
            if (v.suggestor) {
                v.suggestor.hide()
            }
            if (v.mask) {
                j.setStyle(v.mask.getNode(), "display", "none")
            }
            if (t.box) {
                j.setStyle(t.box, "display", "none")
            }
            v.cancelQRcode();
            f.fire("layer_hide");
            return l
        };
        var q = function(J) {
            var F = J.split("&");
            var I;
            var H = {};
            for (var G = 0; G < F.length; G++) {
                I = F[G].split("=");
                H[I[0]] = decodeURIComponent(I[1]) || ""
            }
            return H
        };
        l.getSinaInfo = function() {
            var F = j.cookie.get("sso_info");
            if (F) {
                F = decodeURIComponent(F);
                return q(F)
            } else {
                return null
            }
        };
        l.getSinaCookie = function() {
            var H = j.cookie.get("SUP");
            var G = j.cookie.get("ALF");
            var F = j.cookie.get("SUR");
            if (!H&&!G) {
                return null
            }
            var I = H || F;
            if (!I) {
                return null
            }
            I = decodeURIComponent(I);
            return q(I)
        };
        l.isLogin = function() {
            return !!l.getSinaCookie()
        };
        l.logout = function() {
            j.preventDefault();
            v.prepare(function() {
                if (v.SSO) {
                    v.SSO.logout()
                }
            });
            return l
        };
        l.destroy = function() {
            l.hide();
            v.setEvents("remove");
            v.setListener("remove");
            if (l.loginButton) {
                j.removeEvent(l.loginButton, "click", l.show);
                l.loginButton = null
            }
            j.foreach(["mask", "SSO", "plugin", "suggestor"], function(F) {
                var H = v[F];
                if (H && typeof(H.destroy) === "function") {
                    try {
                        H.destroy()
                    } catch (G) {}
                }
            })
        };
        l.getWeiboInfo = function(F) {
            var H = A({
                url: "http://api.sina.com.cn/weibo/wb/users_show.json",
                uid: "",
                args: {
                    uid: "",
                    source: "2835469272"
                },
                onComplete: null,
                onTimeout: null,
                responseName: null,
                onSuccess: j.funcEmpty,
                onFailure: j.funcEmpty
            }, F);
            var I = j.getType(H.onSuccess) === "function" ? H.onSuccess: j.funcEmpty, G = j.getType(H.onFailure) === "function" ? H.onFailure: j.funcEmpty;
            if (j.getType(H.onComplete) !== "function") {
                H.onComplete = function(J) {
                    var L, K = {};
                    if (J && J.result&&!J.result.data) {
                        G({
                            result: false,
                            type: "server",
                            data: J
                        });
                        return 
                    }
                    try {
                        L = J.result.data;
                        K.data = {
                            name: L.name,
                            avatar_large: L.avatar_large,
                            profile_url: L.profile_url,
                            profile_image_url: L.profile_image_url
                        };
                        K.result = true
                    } catch (M) {
                        G({
                            result: false,
                            type: "parse"
                        });
                        return 
                    }
                    I(K)
                }
            }
            if (j.getType(H.onTimeout) !== "function") {
                H.onTimeout = function(J) {
                    G({
                        result: false,
                        type: "timeout"
                    })
                }
            }
            v.prepareSSO(function() {
                var K = window.sinaSSOController;
                var J;
                if (j.getType(H.args) === "object") {
                    if (H.uid) {
                        H.args.uid = H.uid
                    } else {
                        if (K && j.getType(K.getLoginInfo) === "function") {
                            J = K.getSinaCookie();
                            H.args.uid = J.uid
                        }
                    }
                }
                s(H)
            });
            return l
        };
        l.register = function(G, F) {
            f.register(G, F);
            return l
        };
        l.remove = function(G, F) {
            f.remove(G, F);
            return l
        };
        l.getNodes = function() {
            return t
        };
        l.nodes = t;
        l.options = g;
        return l
    });
    (function(c) {
        var b = a.comp.layer.outlogin;
        b.getVersion = function() {
            return "3.0.0"
        };
        b.listener = c.common.channel.sso;
        b.STK = a;
        this.SINA_OUTLOGIN_LAYER = b
    }).call(this, a)
}).call(this);
