!function t(e, i, n) {
    function r(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (o)
                    return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = i[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                var i = e[s][1][t];
                return r(i ? i : t)
            }, c, c.exports, t, e, i, n)
        }
        return i[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)
        r(n[s]);
    return r
}({
    1: [function(t) {
        !function() {
            function e(t) {
                return !t && /^http\:$/.test(window.location.protocol) || twttr.ignoreSSL ? "http" : "https"
            }
            var i = t("util/domready"), n = t("util/env"), r = t("util/logger"), o = t("performance/perf-timers"), s = t("tfw/widget/base"), a = t("tfw/widget/follow"), l = t("tfw/widget/tweetbutton"), u = t("tfw/widget/embed"), c = t("tfw/widget/timeline"), d = t("tfw/widget/intent"), h = t("tfw/factories"), f = t("util/events"), m = t("util/util"), w = t("tfw/hub/client");
            if (window.twttr = window.twttr || {}, twttr.host = twttr.host || "platform.twitter.com", o.start("widgets-js-load"), !n.ie6()) {
                if (twttr.widgets && twttr.widgets.loaded)
                    return twttr.widgets.load(), !1;
                if (twttr.init)
                    return !1;
                twttr.init=!0, twttr._e = twttr._e || [], twttr.ready = twttr.ready || function(t) {
                    twttr.widgets && twttr.widgets.loaded ? t(twttr) : twttr._e.push(t)
                }, twttr.ignoreSSL = twttr.ignoreSSL ||!1;
                var p = [];
                twttr.events = {
                    bind: function(t, e) {
                        return p.push([t, e])
                    }
                }, i(function() {
                    function t(t) {
                        var i = twttr.host;
                        return "https" == e(t) && twttr.secureHost && (i = twttr.secureHost), e(t) + "://" + i
                    }
                    function i() {
                        twttr.events.hub = w.init(o), w.init(o, !0)
                    }
                    var n, o = {
                        widgets: {
                            "a.twitter-share-button": l,
                            "a.twitter-mention-button": l,
                            "a.twitter-hashtag-button": l,
                            "a.twitter-follow-button": a,
                            "blockquote.twitter-tweet": u,
                            "a.twitter-timeline": c,
                            "div.twitter-timeline": c,
                            body: d
                        }
                    }, g = twttr.events && twttr.events.hub ? twttr.events: {};
                    o.assetUrl = t, twttr.widgets = twttr.widgets || {}, m.aug(twttr.widgets, h, {
                        config: {
                            assetUrl: t
                        },
                        load: function(t) {
                            r.time("load"), s.init(o), s.embed(t), twttr.widgets.loaded=!0
                        }
                    }), m.aug(twttr.events, g, f.Emitter), n = twttr.events.bind, twttr.events.bind = function(t, e) {
                        i(), this.bind = n, this.bind(t, e)
                    }, m.forEach(p, function(t) {
                        twttr.events.bind(t[0], t[1])
                    }), m.forEach(twttr._e, function(t) {
                        m.async(function() {
                            t(twttr)
                        })
                    }), twttr.ready = function(t) {
                        m.async(function() {
                            t(twttr)
                        })
                    }, twttr.widgets.load()
                })
            }
        }()
    }, {
        "performance/perf-timers": 9,
        "tfw/factories": 15,
        "tfw/hub/client": 16,
        "tfw/widget/base": 25,
        "tfw/widget/embed": 26,
        "tfw/widget/follow": 27,
        "tfw/widget/intent": 28,
        "tfw/widget/timeline": 30,
        "tfw/widget/tweetbutton": 31,
        "util/domready": 34,
        "util/env": 36,
        "util/events": 37,
        "util/logger": 40,
        "util/util": 48
    }
    ],
    2: [function(t, e) {
        function i(t, e) {
            return t && t.getAttribute ? t.getAttribute("data-" + e) : void 0
        }
        function n(t) {
            return {
                element: t.element || h,
                action: t.action || f
            }
        }
        function r(t, e) {
            var n = a.ancestor(".cards-multimedia", e), r = a.ancestor(".tweet", e), o = s.aug({
                item_type: d,
                id: i(r, "tweet-id"),
                card_name: i(n, "card-name"),
                publisher_id: i(n, "publisher-id"),
                content_id: i(n, "video-content-id")
            }, t.itemData || {});
            return {
                items: [o]
            }
        }
        function o(t, e) {
            var i = this;
            if (arguments.length < 2)
                throw new Error("missing arguments");
            this.dnt=!!e, this.global = t, this.server = (new u).attachListener(new c.Listener(t)).bind("scribe", function(t) {
                i.scribe(t, this)
            })
        }
        var s = t("util/util"), a = t("dom/get"), l = t("tfw/util/tracking"), u = t("rpc/jsonrpc_server"), c = t("rpc/postmessage"), d = 0, h = "amplify_player", f = "undefined";
        o.prototype.findIframeByWindow = function(t) {
            var e, i = this.global.document.getElementsByTagName("iframe"), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].contentWindow == t)
                    return i[e]
        }, o.prototype.scribe = function(t, e) {
            var i, o, s;
            t = t && t.customScribe, i = this.findIframeByWindow(e), t && i && (o = n(t), s = r(t, i), l.addPixel2(o, s, !0, this.dnt))
        }, e.exports = o
    }, {
        "dom/get": 6,
        "rpc/jsonrpc_server": 10,
        "rpc/postmessage": 11,
        "tfw/util/tracking": 24,
        "util/util": 48
    }
    ],
    3: [function(t, e) {
        function i(t, e) {
            var i;
            return e = e || window, (i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function() {
                e.setTimeout(function() {
                    t( + new Date)
                }, 1e3 / 60)
            })(t)
        }
        function n(t, e) {
            return Math.sin(Math.PI / 2 * e) * t
        }
        function r(t, e, n, r, o) {
            function s() {
                var l =+ new Date, u = l - a, c = Math.min(u / n, 1), d = r ? r(e, c) : e * c, h = 1 == c;
                t(d, h), h || i(s, o)
            }
            var a =+ new Date;
            i(s)
        }
        e.exports = {
            animate: r,
            requestAnimationFrame: i,
            easeOut: n
        }
    }, {}
    ],
    4: [function(t, e) {
        function i(t) {
            return new RegExp("\\b" + t + "\\b", "g")
        }
        function n(t, e) {
            return t.classList ? void t.classList.add(e) : void(i(e).test(t.className) || (t.className += " " + e))
        }
        function r(t, e) {
            return t.classList ? void t.classList.remove(e) : void(t.className = t.className.replace(i(e), " "))
        }
        function o(t, e, i) {
            return void 0 === i && t.classList && t.classList.toggle ? t.classList.toggle(e, i) : (i ? n(t, e) : r(t, e), i)
        }
        function s(t, e, o) {
            return t.classList && a(t, e) ? (r(t, e), void n(t, o)) : void(t.className = t.className.replace(i(e), o))
        }
        function a(t, e) {
            return t.classList ? t.classList.contains(e) : i(e).test(t.className)
        }
        e.exports = {
            add: n,
            remove: r,
            replace: s,
            toggle: o,
            present: a
        }
    }, {}
    ],
    5: [function(t, e) {
        function i(t) {
            var e = t.getAttribute("data-twitter-event-id");
            return e ? e : (t.setAttribute("data-twitter-event-id", ++g), g)
        }
        function n(t, e, i) {
            var n = 0, r = t && t.length || 0;
            for (n = 0; r > n; n++)
                t[n].call(e, i)
        }
        function r(t, e, i) {
            for (var o = i || t.target || t.srcElement, s = o.className.split(" "), a = 0, l = s.length; l > a; a++)
                n(e["." + s[a]], o, t);
            n(e[o.tagName], o, t), t.cease || o !== this && r.call(this, t, e, o.parentElement || o.parentNode)
        }
        function o(t, e, i, n) {
            function o(n) {
                r.call(t, n, i[e])
            }
            function a() {
                r.call(t, t.ownerDocument.parentWindow.event, i[e])
            }
            return t.addEventListener ? (s(t, o, e, n), void t.addEventListener(e, o, !1)) : void(t.attachEvent && (s(t, a, e, n), t.attachEvent("on" + e, a)))
        }
        function s(t, e, i, n) {
            t.id && (v[t.id] = v[t.id] || [], v[t.id].push({
                el: t,
                listener: e,
                type: i,
                rootId: n
            }))
        }
        function a(t) {
            var e = v[t];
            e && (w.forEach(e, function(t) {
                l(t.el, t.type, t.listener), delete p[t.rootId]
            }), delete v[t])
        }
        function l(t, e, i) {
            t && t.removeEventListener && t.removeEventListener(e, i), t && t.detachEvent && t.detachEvent(e, i)
        }
        function u(t, e, n, r) {
            var s = i(t);
            p[s] = p[s] || {}, p[s][e] || (p[s][e] = {}, o(t, e, p[s], s)), p[s][e][n] = p[s][e][n] || [], p[s][e][n].push(r)
        }
        function c(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, function() {
                i(window.event)
            })
        }
        function d(t, e, n) {
            var o = i(e), s = p[o] && p[o];
            r.call(e, {
                target: n
            }, s[t])
        }
        function h(t) {
            return m(t), f(t), !1
        }
        function f(t) {
            t && t.preventDefault ? t.preventDefault() : t.returnValue=!1
        }
        function m(t) {
            t && (t.cease=!0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble=!0
        }
        var w = t("util/util"), p = {}, g =- 1, v = {};
        e.exports = {
            stop: h,
            stopPropagation: m,
            preventDefault: f,
            delegate: u,
            on: c,
            simulate: d,
            removeDelegatesForWidget: a,
            off: l
        }
    }, {
        "util/util": 48
    }
    ],
    6: [function(t, e) {
        function i(t, e, i) {
            return o(t, e, i, 1)[0]
        }
        function n(t, e, i) {
            var o, s = e && e.parentNode;
            if (s && s !== i)
                return s.tagName == t ? s : (o = s.className.split(" "), 0 === t.indexOf(".")&&~r.indexOf(o, t.slice(1)) ? s : n(t, s, i))
        }
        var r = t("util/util"), o = function() {
            var t = document.getElementsByClassName;
            return r.isNative(t) ? function(e, i, n, o) {
                var s = i ? i.getElementsByClassName(e): t.call(document, e), a = r.filter(s, function(t) {
                    return !n || t.tagName.toLowerCase() == n.toLowerCase()
                });
                return [].slice.call(a, 0, o || a.length)
            } : function(t, e, i, n) {
                var o, s, a, l, u, c, d, h, f = [];
                for (e = e || document, a = t.split(" "), c = a.length, o = e.getElementsByTagName(i || "*"), h = o.length, u = 0; c > u && h > 0; u++) {
                    for (f = [], l = a[u], d = 0; h > d && (s = o[d], ~r.indexOf(s.className.split(" "), l) && f.push(s), u + 1 != c || f.length !== n); d++);
                    o = f, h = o.length
                }
                return f
            }
        }();
        e.exports = {
            all: o,
            one: i,
            ancestor: n
        }
    }, {
        "util/util": 48
    }
    ],
    7: [function(t, e) {
        function i(t) {
            return t && 1 === t.nodeType ? t.offsetWidth || i(t.parentNode) : 0
        }
        e.exports = {
            effectiveWidth: i
        }
    }, {}
    ],
    8: [function(t, e) {
        function i(t, e, i) {
            for (var n, r = [], o = 0; n = i[o]; o++)
                r.push(n[0]), r.push(n[1]);
            return t + e + r.join(":")
        }
        function n(t) {
            var e = t || "";
            return e.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = {};
        e.exports = function(t, e, o) {
            var s, a = document.createElement("span"), l = {}, u = "", c = 0, d = 0, h = [];
            if (o = o || [], e = e || "", u = i(t, e, o), r[u])
                return r[u];
            a.className = e + " twitter-measurement";
            try {
                for (; s = o[c]; c++)
                    a.style[s[0]] = s[1]
            } catch (f) {
                for (; s = o[d]; d++)
                    h.push(n(s[0]) + ":" + s[1]);
                a.setAttribute("style", h.join(";") + ";")
            }
            return a.innerHTML = t, document.body.appendChild(a), l.width = a.clientWidth || a.offsetWidth, l.height = a.clientHeight || a.offsetHeight, document.body.removeChild(a), a = null, r[u] = l
        }
    }, {}
    ],
    9: [function(t, e) {
        function i(t) {
            l[t] =+ new Date
        }
        function n(t) {
            return l[t]?+new Date - l[t] : null
        }
        function r(t, e, i, r, s, a) {
            var l = n(e);
            l && o(t, i, r, l, s, a)
        }
        function o(t, e, i, n, r, o) {
            var l, c = void 0 === o ? u : o;
            100 * Math.random() > c || (i = a.aug(i || {}, {
                performance_details: {
                    duration_ms: n
                }
            }), l = {
                page: e,
                component: "performance",
                action: t
            }, s.addPixel(l, i, !0, r))
        }
        var s = t("tfw/util/tracking"), a = t("util/util"), l = {}, u = 1;
        e.exports = {
            start: i,
            end: n,
            track: o,
            endAndTrack: r
        }
    }, {
        "tfw/util/tracking": 24,
        "util/util": 48
    }
    ],
    10: [function(t, e) {
        function i() {
            this.registry = {}
        }
        function n(t) {
            return c.isType("string", t) ? JSON.parse(t) : t
        }
        function r(t) {
            var e, i, n;
            return c.isObject(t) ? (e = t.jsonrpc === h, i = c.isType("string", t.method), n=!("id"in t) || o(t.id), e && i && n) : !1
        }
        function o(t) {
            var e, i, n;
            return e = c.isType("string", t), i = c.isType("number", t), n = null === t, e || i || n
        }
        function s(t) {
            return c.isObject(t)&&!c.isType("function", t)
        }
        function a(t, e) {
            return {
                jsonrpc: h,
                id: t,
                result: e
            }
        }
        function l(t, e) {
            return {
                jsonrpc: h,
                id: o(t) ? t: null,
                error: e
            }
        }
        function u(t) {
            return d.every.apply(d, t).then(function(t) {
                return t = c.filter(t, function(t) {
                    return void 0 !== t
                }), t.length ? t : void 0
            })
        }
        var c = t("util/util"), d = t("util/promise");
        t("xd/json2");
        var h = "2.0", f = {
            code: - 32700,
            message: "Parse error"
        }, m = {
            code: - 32600,
            message: "Invalid Request"
        }, w = {
            code: - 32602,
            message: "Invalid params"
        }, p = {
            code: - 32601,
            message: "Method not found"
        }, g = {
            code: - 32603,
            message: "Internal error"
        };
        i.prototype._invoke = function(t, e) {
            var i, n, r;
            i = this.registry[t.method], n = t.params || [], n = c.isType("array", n) ? n : [n];
            try {
                r = i.apply(e.source || null, n)
            } catch (o) {
                r = d.reject(o.message)
            }
            return d.isThenable(r) ? r : d.fulfill(r)
        }, i.prototype._processRequest = function(t, e) {
            function i(e) {
                return a(t.id, e)
            }
            function n() {
                return l(t.id, g)
            }
            var o, u=!!t.id;
            return r(t) ? o = "params"in t&&!s(t.params) ? d.fulfill(l(t.id, w)) : this.registry[t.method] ? this._invoke(t, {
                source: e
            }).then(i, n) : d.fulfill(l(t.id, p)) : (u=!0, o = d.fulfill(l(t.id, m))), u ? o : d.fulfill()
        }, i.prototype.attachListener = function(t) {
            return t.attachTo(this), this
        }, i.prototype.bind = function(t, e) {
            return this.registry[t] = e, this
        }, i.prototype.receive = function(t, e) {
            var i, r, o;
            try {
                t = n(t)
            } catch (s) {
                return d.fulfill(l(null, f))
            }
            return e = e || null, i = c.isType("array", t), r = i ? t : [t], o = c.map(r, c.bind(function(t) {
                return this._processRequest(t, e)
            }, this)), i ? u(o) : o[0]
        }, e.exports = i
    }, {
        "util/promise": 42,
        "util/util": 48,
        "xd/json2": 52
    }
    ],
    11: [function(t, e) {
        function i(t, e) {
            t && t.postMessage && (e = d ? JSON.stringify(e) : e, t.postMessage(e, "*"))
        }
        function n(t) {
            var e = t.document;
            this.server = null, this.isTwitterFrame = u.isTwitterURL(e.location.href), s.on(t, "message", a.bind(this._onMessage, this))
        }
        function r(t) {
            this.pending = {}, this.target = t, this.isTwitterHost = u.isTwitterURL(document.location.href), s.on(window, "message", a.bind(this._onMessage, this))
        }
        function o(t) {
            return arguments.length > 0 && (d=!!t), d
        }
        var s = t("dom/delegate"), a = t("util/util"), l = t("util/env"), u = t("util/twitter"), c = t("util/promise");
        t("xd/json2");
        var d = l.ie8() || l.ie9();
        a.aug(n.prototype, {
            _onMessage: function(t) {
                this.server && (!this.isTwitterFrame || u.isTwitterURL(t.origin)) && this.server.receive(t.data, t.source).then(function(e) {
                    e && i(t.source, e)
                })
            },
            attachTo: function(t) {
                this.server = t
            },
            detach: function() {
                this.server = null
            }
        }), a.aug(r.prototype, {
            _processResponse: function(t) {
                var e = this.pending[t.id];
                e && (e.fulfill(t), delete this.pending[t.id])
            },
            _onMessage: function(t) {
                var e = t.data;
                if (!this.isTwitterHost || u.isTwitterURL(t.origin)) {
                    if (a.isType("string", e))
                        try {
                            e = JSON.parse(e)
                        } catch (i) {
                        return 
                    }
                    e = a.isType("array", e) ? e : [e], a.forEach(e, a.bind(this._processResponse, this))
                }
            },
            send: function(t) {
                var e, n = this.pending;
                return e = t.id ? new c(function(e) {
                    n[t.id] = e
                }) : c.fulfill(), i(this.target, t), e
            }
        }), e.exports = {
            Listener: n,
            Transport: r,
            _stringifyPayload: o
        }
    }, {
        "dom/delegate": 5,
        "util/env": 36,
        "util/promise": 42,
        "util/twitter": 45,
        "util/util": 48,
        "xd/json2": 52
    }
    ],
    12: [function(t, e) {
        function i(t, e, i, n) {
            var a;
            this.readyPromise = new o(s.bind(function(t) {
                this.resolver = t
            }, this)), this.attrs = t || {}, this.styles = e || {}, this.appender = i || function(t) {
                document.body.appendChild(t)
            }, this.layout = n || function(t) {
                return new o(function(e) {
                    return e.fulfill(t())
                })
            }, this.frame = a = r(this.attrs, this.styles), a.onreadystatechange = a.onload = this.getCallback(this.onLoad), this.layout(s.bind(function() {
                this.appender(a)
            }, this))
        }
        var n = t("util/env"), r = t("util/iframe"), o = t("util/promise"), s = t("util/util"), a = 0;
        window.twttr = window.twttr || {}, window.twttr.sandbox = window.twttr.sandbox || {}, i.prototype.getCallback = function(t) {
            var e = this, i=!1;
            return function() {
                i || (i=!0, t.call(e))
            }
        }, i.prototype.registerCallback = function(t) {
            var e = "cb" + a++;
            return window.twttr.sandbox[e] = t, e
        }, i.prototype.onLoad = function() {
            try {
                this.document = this.frame.contentWindow.document
            } catch (t) {
                return void this.setDocDomain()
            }
            this.writeStandardsDoc(), this.resolver.fulfill(this)
        }, i.prototype.ready = function() {
            return this.readyPromise
        }, i.prototype.setDocDomain = function() {
            var t = r(this.attrs, this.styles), e = this.registerCallback(this.getCallback(this.onLoad));
            t.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", "catch (e) {", 'document.domain="' + document.domain + '";', "}", 'window.parent.twttr.sandbox["' + e + '"]();'].join(""), this.layout(s.bind(function() {
                this.frame.parentNode.removeChild(this.frame), this.frame = null, this.appender ? this.appender(t) : document.body.appendChild(t), this.frame = t
            }, this))
        }, i.prototype.writeStandardsDoc = function() {
            if (n.anyIE()&&!n.cspEnabled()) {
                var t = ["<!DOCTYPE html>", "<html>", "<head>", "<scr", "ipt>", "try { window.parent.document; }", 'catch (e) {document.domain="' + document.domain + '";}', "</scr", "ipt>", "</head>", "<body></body>", "</html>"].join("");
                this.document.write(t), this.document.close()
            }
        }, e.exports = i
    }, {
        "util/env": 36,
        "util/iframe": 38,
        "util/promise": 42,
        "util/util": 48
    }
    ],
    13: [function(t, e) {
        function i() {
            var t, e;
            m = {}, o || (t = document.body.offsetHeight, e = document.body.offsetWidth, (t != p || e != w) && (c.forEach(f, function(t) {
                t.dispatchFrameResize(w, p)
            }), p = t, w = e))
        }
        function n(t) {
            var e;
            return t.id ? t.id : (e = t.getAttribute("data-twttr-id")) ? e : (e = "twttr-sandbox-" + h++, t.setAttribute("data-twttr-id", e), e)
        }
        function r(t, e) {
            a.apply(this, [t, e]), this._resizeHandlers = [], f = c.filter(f, function(t) {
                var e = t._frame.parentElement;
                return e || c.async(function() {
                    d.removeDelegatesForWidget(t._frame.id)
                }), e
            }), f.push(this), this._win.addEventListener ? this._win.addEventListener("resize", c.bind(function() {
                this.dispatchFrameResize()
            }, this), !0) : this._win.attachEvent("onresize", c.bind(function() {
                this.dispatchFrameResize(this._win.event)
            }, this))
        }
        var o, s = t("sandbox/baseframe"), a = t("sandbox/minimal"), l = t("util/env"), u = t("util/promise"), c = t("util/util"), d = t("dom/delegate"), h = 0, f = [], m = {}, w = 0, p = 0;
        window.addEventListener ? window.addEventListener("resize", i, !0) : document.body.attachEvent("onresize", function() {
            i(window.event)
        }), r.prototype = new a, c.aug(r.prototype, {
            dispatchFrameResize: function() {
                var t = this._frame.parentNode, e = n(t), i = m[e];
                o=!0, this._resizeHandlers.length && (i || (i = m[e] = {
                    w: this._frame.offsetWidth,
                    h: this._frame.offsetHeight
                }), (this._frameWidth != i.w || this._frameHeight != i.h) && (this._frameWidth = i.w, this._frameHeight = i.h, c.forEach(this._resizeHandlers, function(t) {
                    t(i.w, i.h)
                }), window.setTimeout(function() {
                    m = {}
                }, 50)))
            },
            appendStyleSheet: function(t) {
                var e = this._doc.createElement("link");
                return e.type = "text/css", e.rel = "stylesheet", e.href = t, this.layout(c.bind(function() {
                    return this._head.appendChild(e)
                }, this))
            },
            appendCss: function(t) {
                var e;
                return l.cspEnabled() ? u.reject("CSP enabled; cannot embed inline styles.") : (e = this._doc.createElement("style"), e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(this._doc.createTextNode(t)), this.layout(c.bind(function() {
                    return this._head.appendChild(e)
                }, this)))
            },
            style: function(t) {
                return this.layout(c.bind(function() {
                    c.forIn(t, c.bind(function(t, e) {
                        this._frame.style[t] = e
                    }, this))
                }, this))
            },
            onresize: function(t) {
                this._resizeHandlers.push(t)
            },
            width: function(t) {
                return void 0 !== t && (this._frame.style.width = t + "px"), l.ios() ? Math.min(this._frame.parentNode.offsetWidth, this._frame.offsetWidth) : this._frame.offsetWidth
            },
            height: function(t) {
                return void 0 !== t && (this._frame.height = t), this._frame.offsetHeight
            }
        }), r.createSandbox = function(t, e, i, n) {
            var o = new s(t, e, i, n);
            return o.ready().then(function(t) {
                return new r(t.frame, t.layout)
            })
        }, e.exports = r
    }, {
        "dom/delegate": 5,
        "sandbox/baseframe": 12,
        "sandbox/minimal": 14,
        "util/env": 36,
        "util/promise": 42,
        "util/util": 48
    }
    ],
    14: [function(t, e) {
        function i(t, e) {
            t && (this._frame = t, this._win = t.contentWindow, this._doc = this._win.document, this._body = this._doc.body, this._head = this._body.parentNode.children[0], this.layout = e)
        }
        var n = t("sandbox/baseframe"), r = t("util/util");
        r.aug(i.prototype, {
            createElement: function(t) {
                return this._doc.createElement(t)
            },
            createDocumentFragment: function() {
                return this._doc.createDocumentFragment()
            },
            appendChild: function(t) {
                return this.layout(r.bind(function() {
                    return this._body.appendChild(t)
                }, this))
            },
            setBaseTarget: function(t) {
                var e = this._doc.createElement("base");
                return e.target = t, this.layout(r.bind(function() {
                    return this._head.appendChild(e)
                }, this))
            },
            setTitle: function(t) {
                t && (this._frame.title = t)
            },
            element: function() {
                return this._frame
            },
            document: function() {
                return this._doc
            }
        }), i.createSandbox = function(t, e, r, o) {
            var s = new n(t, e, r, o);
            return s.ready().then(function(t) {
                return new i(t.frame, t.layout)
            })
        }, e.exports = i
    }, {
        "sandbox/baseframe": 12,
        "util/util": 48
    }
    ],
    15: [function(t, e) {
        function i(t, e, i, n) {
            return t = t || [], i = i || {}, function() {
                var s, l, u, c, d = Array.prototype.slice.apply(arguments, [0, t.length]), h = Array.prototype.slice.apply(arguments, [t.length]);
                return r.forEach(h, function(t) {
                    return t ? 1 === t.nodeType ? void(u = t) : r.isType("function", t) ? void(s = t) : void(r.isType("object", t) && (l = t)) : void 0
                }), d.length != t.length || 0 === h.length ? (s && r.async(function() {
                    s(!1)
                }), o.reject("Not enough parameters")) : u ? (l = r.aug(l || {}, i), l.targetEl = u, r.forEach(t, function(t) {
                    l[t] = d.shift()
                }), c = new e(l), a.doLayout(), c.render(twttr.widgets.config), n && n(), s && c.completed().then(s, function() {
                    s(!1)
                }), c.completed()) : (s && r.async(function() {
                    s(!1)
                }), o.reject("No target specified"))
            }
        }
        function n(t) {
            var e;
            t.linkColor = t.linkColor || t.previewParams.link_color, t.theme = t.theme || t.previewParams.theme, t.height = t.height || t.previewParams.height, e = new d(t), this.render = r.bind(e.render, e), this.completed = r.bind(e.completed, e)
        }
        var r = t("util/util"), o = t("util/promise"), s = t("util/twitter"), a = t("tfw/widget/base"), l = t("tfw/widget/tweetbutton"), u = t("tfw/widget/follow"), c = t("tfw/widget/embed"), d = t("tfw/widget/timeline"), h = i(["url"], l, {
            type: "share"
        }), f = i(["hashtag"], l, {
            type: "hashtag"
        }), m = i(["screenName"], l, {
            type: "mention"
        }), w = i(["screenName"], u), p = i(["tweetId"], c, {}, c.fetchAndRender), g = i(["widgetId"], d), v = i(["previewParams"], n), b = {
            createShareButton: h,
            createMentionButton: m,
            createHashtagButton: f,
            createFollowButton: w,
            createTweet: p,
            createTweetEmbed: p,
            createTimeline: g
        };
        s.isTwitterURL(window.location.href) && (b.createTimelinePreview = v), e.exports = b
    }, {
        "tfw/widget/base": 25,
        "tfw/widget/embed": 26,
        "tfw/widget/follow": 27,
        "tfw/widget/timeline": 30,
        "tfw/widget/tweetbutton": 31,
        "util/promise": 42,
        "util/twitter": 45,
        "util/util": 48
    }
    ],
    16: [function(t, e) {
        function i(t, e) {
            var i = s.connect({
                src: t,
                iframe: {
                    name: e,
                    style: "position:absolute;top:-9999em;width:10px;height:10px"
                }
            });
            return a(i).expose({
                trigger: function(t, e, i) {
                    e = e || {};
                    var n = e.region;
                    delete e.region, twttr.events.trigger(t, {
                        target: l.find(i),
                        data: e,
                        region: n,
                        type: t
                    })
                },
                initXPHub: function() {
                    r(twttr.widgets.config, !0)
                }
            }), i
        }
        function n(t) {
            return t ? u.secureHubId : u.contextualHubId
        }
        function r(t, e) {
            var r = t.assetUrl(e) + "/widgets/hub.fe4e93d64f1afc988e99833088f71057.html", o = n(e);
            if (!document.getElementById(o))
                return i(r, o)
        }
        function o(t, e) {
            var i = s.connect({
                window: {
                    width: 550,
                    height: 450
                },
                src: t
            });
            a(i).expose({
                trigger: function(t, i) {
                    twttr.events.trigger(t, {
                        target: e,
                        region: "intent",
                        type: t,
                        data: i
                    })
                }
            })
        }
        var s = t("xd/parent"), a = t("xd/jsonrpc"), l = t("tfw/widget/base"), u = t("util/widgetrpc");
        e.exports = {
            init: r,
            openIntent: o
        }
    }, {
        "tfw/widget/base": 25,
        "util/widgetrpc": 49,
        "xd/jsonrpc": 53,
        "xd/parent": 54
    }
    ],
    17: [function(t, e) {
        function i() {
            if (s = o.getCanonicalURL() || "" + document.location, window.top.postMessage) {
                if (window == window.top)
                    return void n.on(window, "message", function(t) {
                    var e;
                    if (!t.data || "{" == t.data[0]) {
                        try {
                            e = JSON.parse(t.data)
                        } catch (i) {}
                        e && "twttr:private:requestArticleUrl" == e.name && t.source.postMessage(JSON.stringify({
                            name: "twttr:private:provideArticleUrl",
                            data: {
                                url: s,
                                dnt: r.dnt()
                            }
                        }), "*")
                    }
                });
                n.on(window, "message", function(t) {
                    var e;
                    if (!t.data || "{" == t.data[0]) {
                        try {
                            e = JSON.parse(t.data)
                        } catch (i) {}
                        e && "twttr:private:provideArticleUrl" == e.name && (s = e.data && e.data.url, r.dnt(e.data.dnt), a = document.location.href)
                    }
                }), window.top.postMessage(JSON.stringify({
                    name: "twttr:private:requestArticleUrl"
                }), "*")
            }
        }
        var n = t("dom/delegate"), r = t("tfw/util/globals"), o = t("util/uri");
        t("xd/json2");
        var s, a = "";
        i(), e.exports = {
            url: function() {
                return s
            },
            frameUrl: function() {
                return a
            }
        }
    }, {
        "dom/delegate": 5,
        "tfw/util/globals": 21,
        "util/uri": 47,
        "xd/json2": 52
    }
    ],
    18: [function(t, e) {
        function i(t, e) {
            var i, o = r[t];
            return "embed/timeline.css" === t&&~location.href.indexOf("localhost.twitter.com") ? "components/syndication-templates/lib/css/index.css" : (i = n.retina() ? "2x" : n.ie6() || n.ie7() ? "gif" : "default", e && (i += ".rtl"), o[i])
        }
        var n = t("util/env"), r = {
            "embed/timeline.css": {
                "default": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.default.css",
                "2x": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.2x.css",
                gif: "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.gif.css",
                "default.rtl": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.default.rtl.css",
                "2x.rtl": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.2x.rtl.css",
                "gif.rtl": "embed/timeline.3fb0c4c981cd3f8f8dfb6b0ab93d6a9e.gif.rtl.css"
            }
        };
        e.exports = i
    }, {
        "util/env": 36
    }
    ],
    19: [function(t, e) {
        function i(t) {
            return function(e) {
                e.error ? t.error && t.error(e) : e.headers && 200 != e.headers.status ? (t.error && t.error(e), o.warn(e.headers.message)) : t.success && t.success(e), t.complete && t.complete(e), n(t)
            }
        }
        function n(t) {
            var e = t.script;
            e && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), t.script = void 0, e = void 0), t.callbackName && twttr.tfw.callbacks[t.callbackName] && delete twttr.tfw.callbacks[t.callbackName]
        }
        function r(t) {
            var e = {};
            return t.success && s.isType("function", t.success) && (e.success = t.success), t.error && s.isType("function", t.error) && (e.error = t.error), t.complete && s.isType("function", t.complete) && (e.complete = t.complete), e
        }
        var o = t("util/logger"), s = t("util/util"), a = t("util/querystring");
        window.twttr = window.twttr || {}, twttr.tfw = twttr.tfw || {}, twttr.tfw.callbacks = twttr.tfw.callbacks || {};
        var l = "twttr.tfw.callbacks", u = twttr.tfw.callbacks, c = "cb", d = 0, h=!1, f = {}, m = {
            tweets: "https://syndication.twitter.com/tweets.json",
            timeline: "https://cdn.syndication.twimg.com/widgets/timelines/",
            timelinePoll: "https://syndication.twitter.com/widgets/timelines/paged/",
            timelinePreview: "https://syndication.twitter.com/widgets/timelines/preview/"
        };
        twttr.widgets && twttr.widgets.endpoints && s.aug(m, twttr.widgets.endpoints), f.jsonp = function(t, e, n) {
            var r = n || c + d, o = l + "." + r, s = document.createElement("script"), f = {
                callback: o,
                suppress_response_codes: !0
            };
            u[r] = i(e), (h ||!/^https?\:$/.test(window.location.protocol)) && (t = t.replace(/^\/\//, "https://")), s.src = a.url(t, f), s.async = "async", document.body.appendChild(s), e.script = s, e.callbackName = r, n || d++
        }, f.config = function(t) {
            (t.forceSSL===!0 || t.forceSSL===!1) && (h = t.forceSSL)
        }, f.tweets = function(t) {
            var e = arguments[0], i = r(e), n = {
                ids: t.ids.join(","),
                lang: t.lang
            }, o = a.url(m.tweets, n);
            this.jsonp(o, i)
        }, f.timeline = function(t) {
            var e, i = arguments[0], n = r(i), o = 9e5, l = Math.floor( + new Date / o), u = {
                lang: t.lang,
                t: l,
                domain: window.location.host,
                dnt: t.dnt,
                override_type: t.overrideType,
                override_id: t.overrideId,
                override_name: t.overrideName,
                override_owner_id: t.overrideOwnerId,
                override_owner_name: t.overrideOwnerName,
                with_replies: t.withReplies
            };
            s.compact(u), e = a.url(m.timeline + t.id, u), this.jsonp(e, n, "tl_" + t.id + "_" + t.instanceId)
        }, f.timelinePoll = function(t) {
            var e, i = arguments[0], n = r(i), o = {
                lang: t.lang,
                since_id: t.sinceId,
                max_id: t.maxId,
                min_position: t.minPosition,
                max_position: t.maxPosition,
                domain: window.location.host,
                dnt: t.dnt,
                override_type: t.overrideType,
                override_id: t.overrideId,
                override_name: t.overrideName,
                override_owner_id: t.overrideOwnerId,
                override_owner_name: t.overrideOwnerName,
                with_replies: t.withReplies
            };
            s.compact(o), e = a.url(m.timelinePoll + t.id, o), this.jsonp(e, n, "tlPoll_" + t.id + "_" + t.instanceId + "_" + (t.sinceId || t.maxId || t.maxPosition || t.minPosition))
        }, f.timelinePreview = function(t) {
            var e = arguments[0], i = r(e), n = t.params, o = a.url(m.timelinePreview, n);
            this.jsonp(o, i)
        }, e.exports = f
    }, {
        "util/logger": 40,
        "util/querystring": 43,
        "util/util": 48
    }
    ],
    20: [function(t, e) {
        function i() {
            var t = 36e5, e = r.combined(document.location)._;
            return void 0 !== n ? n : (n=!1, e && /^\d+$/.test(e) && (n =+ new Date - parseInt(e) < t), n)
        }
        var n, r = t("util/params");
        e.exports = {
            isDynamicWidget: i
        }
    }, {
        "util/params": 41
    }
    ],
    21: [function(t, e) {
        function i(t) {
            var e, i, n, r = 0;
            for (o = {}, t = t || document, e = t.getElementsByTagName("meta"); i = e[r]; r++)
                /^twitter : /.test(i.name)&&(n=i.name.replace(/^twitter : /,""),o[n]=i.content)}function n(t){return o[t]}function r(t){return s.asBoolean(t)&&(o.dnt=!0),s.asBoolean(o.dnt)}var o,s=t("util/typevalidator");i(),e.exports={init:i,val:n,dnt:r}},{"util / typevalidator":46}],22:[function(t,e){function i(t,e){return 2==t||3==t&&0===+e}function n(t){var e=t.split(" ");this.url=decodeURIComponent(h.trim(e[0])),this.width=+h.trim(e[1].replace(/w$/,""))}function r(t,e,i){var r,o,s,a;if(t=window.devicePixelRatio?t*window.devicePixelRatio:t,o=h.map(e.split(", "),function(t){return new n(t)}),i)for(a=0;a<o.length;a++)o[a].url===i&&(r=o[a]);return s=h.reduce(o,function(e,i){return i.width<e.width&&i.width>=t?i:e},o[0]),r&&r.width>s.width?r:s}function o(t,e){var i,n=t.getAttribute("data - srcset"),o=t.src;n&&(i=r(e,n,o),t.src=i.url)}function s(t,e){e=void 0!==e?!!e:f.retina(),e&&h.forEach(t.getElementsByTagName("IMG"),function(t){var e=t.getAttribute("data - src - 2x");e&&(t.src=e)})}function a(t,e,n,r){var s=0,a=n?600:375,c=d.one("multi - photo",t,"DIV"),f=c&&+c.getAttribute("data - photo - count");if(t)return h.forEach(d.all("autosized - media",t),function(t){var i=l(t.getAttribute("data - width"),t.getAttribute("data - height"),e,a);r(function(){o(t,e),t.width=i.width,t.height=i.height,u(t,i)}),s=i.height>s?i.height:s}),h.forEach(d.all("cropped - media",t,"IMG"),function(t){var n,u,c,d=e-12,h=t.parentNode,m=t.getAttribute("data - crop - x")||0,v=t.getAttribute("data - crop - y")||0,b=i(f,t.getAttribute("data - image - index")),y=Math.floor(d/2-w),_=Math.floor(y/(b?p:g));b||(_-=w/2),c=l(t.getAttribute("data - width"),t.getAttribute("data - height"),y,a,y,_),n=c.width-y-m,u=c.height-_-v,0>n&&Math.max(0,m+=n),0>u&&Math.max(0,v+=u),r(function(){o(t,y),t.width=c.width,t.height=c.height,h.style.width=y-1+"px",h.style.height=_+"px",m&&(t.style.marginLeft=" - "+Math.floor(c.width*m/100)+"px"),v&&(t.style.marginTop=" - "+Math.floor(c.height*v/100)+"px")}),s=c.height*(b?2:1)>s?c.height:s}),s}function l(t,e,i,n,r,o){return i=i||t,n=n||e,r=r||0,o=o||0,t>i&&(e*=i/t,t=i),e>n&&(t*=n/e,e=n),r>t&&(e*=r/t,t=r),o>e&&(t*=o/e,e=o),{width:Math.floor(t),height:Math.floor(e)}}function u(t,e){function i(){var t={name:"tfw: resize",dimensions:e};r.postMessage(t," * ")}var n,r,o,s,a;t&&(r=t.contentWindow,n=t.ownerDocument&&t.ownerDocument.defaultView,o=f.ios()||f.android(),s=m.isTwitterURL(t.src),a=r&&f.canPostMessage(r),o&&s&&a&&(i(),n&&c.on(n,"message",function(t){"tfw: requestsize"===t.data&&i()})))}var c=t("dom / delegate"),d=t("dom / get"),h=t("util / util"),f=t("util / env"),m=t("util / twitter"),w=6,p=8/9,g=16/9;e.exports={scaleDimensions:l,retinize:s,constrainMedia:a,__setSrcFromSet:o}},{"dom / delegate":5,"dom / get":6,"util / env":36,"util / twitter":45,"util / util":48}],23:[function(t,e){var i=t("util / querystring"),n=t("util / twitter");e.exports=function(t,e){return function(r){var o,s,a="data - tw - params";if(r&&n.isTwitterURL(r.href)&&!r.getAttribute(a)){if(r.setAttribute(a,!0),"function"==typeof e){o=e.call(this,r);for(s in o)o.hasOwnProperty(s)&&(t[s]=o[s])}r.href=i.url(r.href,t)}}}},{"util / querystring":43,"util / twitter":45}],24:[function(t,e){function i(){return R?F:(A.createSandbox({id:"rufous - sandbox"},{display:"none"}).then(D.bind(function(t){C=t,O=b(),L=y(),P.fulfill([O,L])},this)),R=!0,F)}function n(t,e,i,n){return r(t,e,i,n,2)}function r(t,e,i,n,r){var o=!D.isObject(t),s=e?!D.isObject(e):!1;o||s||l(w(t),p(e,i,n,r),!0)}function o(t,e,i,n,o){var a=s(t.target||t.srcElement);a.action=o||"click",r(a,e,i,n)}function s(t,e){var i;return e=e||{},t&&1===t.nodeType?((i=t.getAttribute("data - scribe"))&&D.forEach(i.split(" "),function(t){var i=D.trim(t).split(" : "),n=i[0],r=i[1];n&&r&&!e[n]&&(e[n]=r)}),s(t.parentNode,e)):e}function a(t,e,i){var n,r;i&&D.isObject(t)&&D.isObject(e)&&(n=D.aug({},e,{event_namespace:t}),r={l:T(n)},n.dnt&&(r.dnt=1),_(N.url(i,r)))}function l(t,e,i){var n,r,o,s;D.isObject(t)&&D.isObject(e)&&(i?a(t,e,H):(o=D.aug({},e,{event_namespace:t}),n=O.firstChild,n.value=+(+n.value||o.dnt||0),s=T(o),r=C.createElement("input"),r.type="hidden",r.name="l",r.value=s,O.appendChild(r)))}function u(t,e,i,n){var r=!D.isObject(t),o=e?!D.isObject(e):!1;r||o||F.then(function(){l(w(t),p(e,i,n))})}function c(t){h("tweet",t)}function d(t){h("timeline",t)}function h(t,e){k.isHostPageSensitive()||W[t]||(W[t]=!0,a(w({page:t,action:"impression"}),g(e),U))}function f(){return F.then(function(){if(O.children.length<=2)return I.reject();var t=I.every(C.appendChild(O),C.appendChild(L)).then(function(t){var e=t[0],i=t[1];return x.on(i,"load",function(){m(e,i)(),twttr.events.trigger("logFlushed")}),e.submit(),t});return O=b(),L=y(),t})}function m(t,e){return function(){var i=t.parentNode;i&&(i.removeChild(t),i.removeChild(e))}}function w(t){return D.aug({client:"tfw"},t||{})}function p(t,e,i,n){var r=t&&t.widget_origin||document.referrer;return t=v("tfw_client_event",t,i||E(r)),t.client_version=j,t.format_version=void 0!==n?n:1,e||(t.widget_origin=r),t}function g(t){return v("syndicated_impression",{},t)}function v(t,e,i){return e=e||{},D.aug(e,{_category_:t,triggered_on:e.triggered_on||+new Date,dnt:!!i})}function b(){var t=C.createElement("form"),e=C.createElement("input"),i=C.createElement("input");return M++,t.action=H,t.method="POST",t.target="rufous - frame - "+M,t.id="rufous - form - "+M,e.type="hidden",e.name="dnt",e.value=0,i.type="hidden",i.name="tfw_redirect",i.value=z,t.appendChild(e),t.appendChild(i),t}function y(){var t="rufous - frame - "+M;return S({id:t,name:t,width:0,height:0,border:0},{display:"none"},C.document())}function _(t){var e=new Image;e.src=t}function T(t){var e,i=Array.prototype.toJSON;return delete Array.prototype.toJSON,e=JSON.stringify(t),i&&(Array.prototype.toJSON=i),e}var x=t("dom / delegate"),A=t("sandbox / minimal"),E=t("util / donottrack"),I=t("util / promise"),N=t("util / querystring"),k=t("util / tld"),S=t("util / iframe"),D=t("util / util");t("xd / json2");var O,L,C,P,j="43114e5edbe3facfa16d29cc02daa347bae17500: 1417650080",M=0,R=!1,F=new I(function(t){P=t}),W={},H="https: //syndication.twitter.com/i/jot",U="https://syndication.twitter.com/i/jot/syndication",z="https://platform.twitter.com/jot.html";twttr.widgets&&twttr.widgets.endpoints&&(H=twttr.widgets.endpoints.rufous||H,U=twttr.widgets.endpoints.rufous||U,z=twttr.widgets.endpoints.rufousRedirect||z),e.exports={enqueue:u,flush:f,initPostLogging:i,scribeInteraction:o,extractTermsFromDOM:s,addPixel:r,addPixel2:n,scribeTweetAudienceImpression:c,scribeTimelineAudienceImpression:d,_resetAudienceImpressionTracker:function(){W={}}}},{"dom/delegate":5,"sandbox/minimal":14,"util/donottrack":35,"util/iframe":38,"util/promise":42,"util/querystring":43,"util/tld":44,"util/util":48,"xd/json2":52}],25:[function(t,e){function i(t){var e;t&&(t.ownerDocument?(this.srcEl=t,this.classAttr=t.className.split(" ")):(this.srcOb=t,this.classAttr=[]),e=this.params(),this.id=this.generateId(),this.setLanguage(),this.related=e.related||this.dataAttr("related"),this.partner=e.partner||this.dataAttr("partner")||p.val("partner"),this.dnt=e.dnt||this.dataAttr("dnt")||p.dnt()||"",this.styleAttr=[],this.targetEl=t.targetEl,b[this.id]=this,this.completePromise=new h(w.bind(function(t){this.completeResolver=t},this)),this.completed().then(function(t){t&&t!=document.body&&twttr.events.trigger("rendered",{target:t})}))}function n(t){var e="";return p.dnt()?!0:(w.forEach(t,function(t){e=t.dnt||e
        }), e)
    }
    function r() {
        w.forEach(y, function(t) {
            t()
        }), i.doLayout()
    }
    function o(t) {
        return t ? t.lang ? t.lang : o(t.parentNode) : void 0
    }
    var s, a = t("dom/get"), l = t("performance/perf-timers"), u = t("tfw/util/article"), c = t("util/iframe"), d = t("util/layout"), h = t("util/promise"), f = t("util/querystring"), m = t("util/typevalidator"), w = t("util/util"), p = t("tfw/util/globals"), g = t("util/logger"), v = 0, b = {}, y = [], _ = new d, T = "data-twttr-rendered", x = {
        ar: {
            "%{followers_count} followers": "عدد المتابعين %{followers_count}",
            "100K+": "+100 ألف",
            "10k unit": "10 آلاف وحدة",
            Follow: "تابِع",
            "Follow %{screen_name}": "تابِع %{screen_name}",
            K: "ألف",
            M: "م",
            Tweet: "غرِّد",
            "Tweet %{hashtag}": "غرِّد %{hashtag}",
            "Tweet to %{name}": "غرِّد لـ %{name}"
        },
        bn: {
            "Follow %{screen_name}": "%{screen_name}-কে অনুসরণ করুন"
        },
        cs: {
            "Follow %{screen_name}": "Sledovat uživatele %{screen_name}"
        },
        da: {
            "%{followers_count} followers": "%{followers_count} følgere",
            "10k unit": "10k enhed",
            Follow: "Følg",
            "Follow %{screen_name}": "Følg %{screen_name}",
            "Tweet to %{name}": "Tweet til %{name}"
        },
        de: {
            "%{followers_count} followers": "%{followers_count} Follower",
            "100K+": "100Tsd+",
            "10k unit": "10tsd-Einheit",
            Follow: "Folgen",
            "Follow %{screen_name}": "%{screen_name} folgen",
            K: "Tsd",
            Tweet: "Twittern",
            "Tweet to %{name}": "Tweet an %{name}"
        },
        es: {
            "%{followers_count} followers": "%{followers_count} seguidores",
            "10k unit": "unidad de 10 mil",
            Follow: "Seguir",
            "Follow %{screen_name}": "Seguir a %{screen_name}",
            Tweet: "Twittear",
            "Tweet %{hashtag}": "Twittear %{hashtag}",
            "Tweet to %{name}": "Twittear a %{name}"
        },
        fa: {
            "%{followers_count} followers": "%{followers_count} دنبال‌کننده",
            "100K+": ">۱۰۰هزار",
            "10k unit": "۱۰هزار واحد",
            Follow: "دنبال کردن",
            "Follow %{screen_name}": "دنبال کردن %{screen_name}",
            K: "هزار",
            M: "میلیون",
            Tweet: "توییت",
            "Tweet %{hashtag}": "توییت کردن %{hashtag}",
            "Tweet to %{name}": "به %{name} توییت کنید"
        },
        fi: {
            "%{followers_count} followers": "%{followers_count} seuraajaa",
            "100K+": "100 000+",
            "10k unit": "10 000 yksikköä",
            Follow: "Seuraa",
            "Follow %{screen_name}": "Seuraa käyttäjää %{screen_name}",
            K: "tuhatta",
            M: "milj.",
            Tweet: "Twiittaa",
            "Tweet %{hashtag}": "Twiittaa %{hashtag}",
            "Tweet to %{name}": "Twiittaa käyttäjälle %{name}"
        },
        fil: {
            "%{followers_count} followers": "%{followers_count} mga tagasunod",
            "10k unit": "10k yunit",
            Follow: "Sundan",
            "Follow %{screen_name}": "Sundan si %{screen_name}",
            Tweet: "I-tweet",
            "Tweet %{hashtag}": "I-tweet ang %{hashtag}",
            "Tweet to %{name}": "Mag-Tweet kay %{name}"
        },
        fr: {
            "%{followers_count} followers": "%{followers_count} abonnés",
            "10k unit": "unité de 10k",
            Follow: "Suivre",
            "Follow %{screen_name}": "Suivre %{screen_name}",
            Tweet: "Tweeter",
            "Tweet %{hashtag}": "Tweeter %{hashtag}",
            "Tweet to %{name}": "Tweeter à %{name}"
        },
        he: {
            "%{followers_count} followers": "%{followers_count} עוקבים",
            "100K+": "מאות אלפים",
            "10k unit": "עשרות אלפים",
            Follow: "מעקב",
            "Follow %{screen_name}": "לעקוב אחר %{screen_name}",
            K: "אלף",
            M: "מיליון",
            Tweet: "ציוץ",
            "Tweet %{hashtag}": "צייצו %{hashtag}",
            "Tweet to %{name}": "ציוץ אל %{name}"
        },
        hi: {
            "%{followers_count} followers": "%{followers_count} फ़ॉलोअर्स",
            "100K+": "1 लाख से अधिक",
            "10k unit": "10 हजार इकाईयां",
            Follow: "फ़ॉलो",
            "Follow %{screen_name}": "%{screen_name} को फ़ॉलो करें",
            K: "हजार",
            M: "मिलियन",
            Tweet: "ट्वीट",
            "Tweet %{hashtag}": "ट्वीट %{hashtag}",
            "Tweet to %{name}": "%{name} के प्रति ट्वीट करें"
        },
        hu: {
            "%{followers_count} followers": "%{followers_count} követő",
            "100K+": "100E+",
            "10k unit": "10E+",
            Follow: "Követés",
            "Follow %{screen_name}": "%{screen_name} követése",
            K: "E",
            "Tweet %{hashtag}": "%{hashtag} tweetelése",
            "Tweet to %{name}": "Tweet küldése neki: %{name}"
        },
        id: {
            "%{followers_count} followers": "%{followers_count} pengikut",
            "100K+": "100 ribu+",
            "10k unit": "10 ribu unit",
            Follow: "Ikuti",
            "Follow %{screen_name}": "Ikuti %{screen_name}",
            K: "&nbsp;ribu",
            M: "&nbsp;juta",
            "Tweet to %{name}": "Tweet ke %{name}"
        },
        it: {
            "%{followers_count} followers": "%{followers_count} follower",
            "10k unit": "10k unità",
            Follow: "Segui",
            "Follow %{screen_name}": "Segui %{screen_name}",
            "Tweet %{hashtag}": "Twitta %{hashtag}",
            "Tweet to %{name}": "Twitta a %{name}"
        },
        ja: {
            "%{followers_count} followers": "%{followers_count}人のフォロワー",
            "100K+": "100K以上",
            "10k unit": "万",
            Follow: "フォローする",
            "Follow %{screen_name}": "%{screen_name}さんをフォロー",
            Tweet: "ツイート",
            "Tweet %{hashtag}": "%{hashtag} をツイートする",
            "Tweet to %{name}": "%{name}さんへツイートする"
        },
        ko: {
            "%{followers_count} followers": "%{followers_count}명의 팔로워",
            "100K+": "100만 이상",
            "10k unit": "만 단위",
            Follow: "팔로우",
            "Follow %{screen_name}": "%{screen_name} 님 팔로우하기",
            K: "천",
            M: "백만",
            Tweet: "트윗",
            "Tweet %{hashtag}": "%{hashtag} 관련 트윗하기",
            "Tweet to %{name}": "%{name} 님에게 트윗하기"
        },
        msa: {
            "%{followers_count} followers": "%{followers_count} pengikut",
            "100K+": "100 ribu+",
            "10k unit": "10 ribu unit",
            Follow: "Ikut",
            "Follow %{screen_name}": "Ikut %{screen_name}",
            K: "ribu",
            M: "juta",
            "Tweet to %{name}": "Tweet kepada %{name}"
        },
        nl: {
            "%{followers_count} followers": "%{followers_count} volgers",
            "100K+": "100k+",
            "10k unit": "10k-eenheid",
            Follow: "Volgen",
            "Follow %{screen_name}": "%{screen_name} volgen",
            K: "k",
            M: " mln.",
            Tweet: "Tweeten",
            "Tweet %{hashtag}": "%{hashtag} tweeten",
            "Tweet to %{name}": "Tweeten naar %{name}"
        },
        no: {
            "%{followers_count} followers": "%{followers_count} følgere",
            "100K+": "100 K+",
            "10k unit": "10-K-enhet",
            Follow: "Følg",
            "Follow %{screen_name}": "Følg %{screen_name}",
            "Tweet to %{name}": "Send en tweet til %{name}"
        },
        pl: {
            "%{followers_count} followers": "%{followers_count} obserwujących",
            "100K+": "100 tys.+",
            "10k unit": "10 tys.",
            Follow: "Obserwuj",
            "Follow %{screen_name}": "Obserwuj %{screen_name}",
            K: "tys.",
            M: "mln",
            Tweet: "Tweetnij",
            "Tweet %{hashtag}": "Tweetnij %{hashtag}",
            "Tweet to %{name}": "Tweetnij do %{name}"
        },
        pt: {
            "%{followers_count} followers": "%{followers_count} seguidores",
            "100K+": "+100 mil",
            "10k unit": "10 mil unidades",
            Follow: "Seguir",
            "Follow %{screen_name}": "Seguir %{screen_name}",
            K: "Mil",
            Tweet: "Tweetar",
            "Tweet %{hashtag}": "Tweetar %{hashtag}",
            "Tweet to %{name}": "Tweetar para %{name}"
        },
        ro: {
            "Follow %{screen_name}": "Urmăreşte pe %{screen_name}"
        },
        ru: {
            "%{followers_count} followers": "Читатели: %{followers_count} ",
            "100K+": "100 тыс.+",
            "10k unit": "блок 10k",
            Follow: "Читать",
            "Follow %{screen_name}": "Читать %{screen_name}",
            K: "тыс.",
            M: "млн.",
            Tweet: "Твитнуть",
            "Tweet %{hashtag}": "Твитнуть %{hashtag}",
            "Tweet to %{name}": "Твитнуть %{name}"
        },
        sv: {
            "%{followers_count} followers": "%{followers_count} följare",
            "10k unit": "10k",
            Follow: "Följ",
            "Follow %{screen_name}": "Följ %{screen_name}",
            Tweet: "Tweeta",
            "Tweet %{hashtag}": "Tweeta %{hashtag}",
            "Tweet to %{name}": "Tweeta till %{name}"
        },
        th: {
            "%{followers_count} followers": "%{followers_count} ผู้ติดตาม",
            "100K+": "100พัน+",
            "10k unit": "หน่วย 10พัน",
            Follow: "ติดตาม",
            "Follow %{screen_name}": "ติดตาม %{screen_name}",
            M: "ล้าน",
            Tweet: "ทวีต",
            "Tweet %{hashtag}": "ทวีต %{hashtag}",
            "Tweet to %{name}": "ทวีตถึง %{name}"
        },
        tr: {
            "%{followers_count} followers": "%{followers_count} takipçi",
            "100K+": "+100 bin",
            "10k unit": "10 bin birim",
            Follow: "Takip et",
            "Follow %{screen_name}": "Takip et: %{screen_name}",
            K: "bin",
            M: "milyon",
            Tweet: "Tweetle",
            "Tweet %{hashtag}": "Tweetle: %{hashtag}",
            "Tweet to %{name}": "Tweetle: %{name}"
        },
        uk: {
            "Follow %{screen_name}": "Читати %{screen_name}"
        },
        ur: {
            "%{followers_count} followers": "%{followers_count} فالورز",
            "100K+": "ایک لاکھ سے زیادہ",
            "10k unit": "دس ہزار یونٹ",
            Follow: "فالو کریں",
            "Follow %{screen_name}": "%{screen_name} کو فالو کریں",
            K: "ہزار",
            M: "ملین",
            Tweet: "ٹویٹ کریں",
            "Tweet %{hashtag}": "%{hashtag} ٹویٹ کریں",
            "Tweet to %{name}": "%{name} کو ٹویٹ کریں"
        },
        vi: {
            "Follow %{screen_name}": "Theo dõi %{screen_name}"
        },
        "zh-cn": {
            "%{followers_count} followers": "%{followers_count} 关注者",
            "100K+": "10万+",
            "10k unit": "1万单元",
            Follow: "关注",
            "Follow %{screen_name}": "关注 %{screen_name}",
            K: "千",
            M: "百万",
            Tweet: "发推",
            "Tweet %{hashtag}": "以 %{hashtag} 发推",
            "Tweet to %{name}": "发推给 %{name}"
        },
        "zh-tw": {
            "%{followers_count} followers": "%{followers_count} 位跟隨者",
            "100K+": "超過十萬",
            "10k unit": "1萬 單位",
            Follow: "跟隨",
            "Follow %{screen_name}": "跟隨 %{screen_name}",
            K: "千",
            M: "百萬",
            Tweet: "推文",
            "Tweet %{hashtag}": "推文%{hashtag}",
            "Tweet to %{name}": "推文給%{name}"
        }
    };
    w.aug(i.prototype, {
        setLanguage: function(t) {
            var e;
            return t || (t = this.params().lang || this.dataAttr("lang") || o(this.srcEl)), (t = t && t.toLowerCase()) ? x[t] ? this.lang = t : (e = t.replace(/[\-_].*/, ""), x[e] ? this.lang = e : void(this.lang = "en")) : this.lang = "en"
        },
        _: function(t, e) {
            var i = this.lang;
            return e = e || {}, i && x.hasOwnProperty(i) || (i = this.lang = "en"), t = x[i] && x[i][t] || t, this.ringo(t, e, /%\{([\w_]+)\}/g)
        },
        ringo: function(t, e, i) {
            return i = i || /\{\{([\w_]+)\}\}/g, t.replace(i, function(t, i) {
                return void 0 !== e[i] ? e[i] : t
            })
        },
        makeIframeSource: function() {
            if (this.iframeSource) {
                var t = f.encode(this.widgetUrlParams());
                return [twttr.widgets.config.assetUrl(), this.ringo(this.iframeSource, {
                    lang: this.lang
                }), "#", t].join("")
            }
        },
        add: function(t) {
            b[this.id] = t
        },
        create: function(t, e, i) {
            var n, r = this;
            return i[T]=!0, n = c(w.aug({
                id: this.id,
                src: t,
                "class": this.classAttr.join(" ")
            }, i), e, this.targetEl && this.targetEl.ownerDocument), this.srcEl ? this.layout(function() {
                return r.srcEl.parentNode.replaceChild(n, r.srcEl), r.completeResolver.fulfill(n), n
            }) : this.targetEl ? this.layout(function() {
                return r.targetEl.appendChild(n), r.completeResolver.fulfill(n), n
            }) : h.reject("Did not append widget")
        },
        params: function() {
            var t, e;
            return this.srcOb ? e = this.srcOb : (t = this.srcEl && this.srcEl.href && this.srcEl.href.split("?")[1], e = t ? f.decode(t) : {}), this.params = function() {
                return e
            }, e
        },
        widgetUrlParams: function() {
            return {}
        },
        dataAttr: function(t) {
            return this.srcEl && this.srcEl.getAttribute("data-" + t)
        },
        attr: function(t) {
            return this.srcEl && this.srcEl.getAttribute(t)
        },
        layout: function(t) {
            return _.enqueue(t)
        },
        styles: {
            base: [["font", "normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif"], ["margin", "0"], ["padding", "0"], ["whiteSpace", "nowrap"]],
            button: [["fontWeight", "bold"], ["textShadow", "0 1px 0 rgba(255,255,255,.5)"]],
            large: [["fontSize", "13px"], ["lineHeight", "26px"]],
            vbubble: [["fontSize", "16px"]]
        },
        width: function() {
            throw new Error(name + " not implemented")
        },
        height: function() {
            return "m" == this.size ? 20 : 28
        },
        minWidth: function() {},
        maxWidth: function() {},
        minHeight: function() {},
        maxHeight: function() {},
        dimensions: function() {
            function t(t) {
                switch (typeof t) {
                case"string":
                    return t;
                case"undefined":
                    return;
                default:
                    return t + "px"
                }
            }
            var e = {
                width: this.width(),
                height: this.height()
            };
            return this.minWidth() && (e["min-width"] = this.minWidth()), this.maxWidth() && (e["max-width"] = this.maxWidth()), this.minHeight() && (e["min-height"] = this.minHeight()), this.maxHeight() && (e["max-height"] = this.maxHeight()), w.forIn(e, function(i, n) {
                e[i] = t(n)
            }), e
        },
        generateId: function() {
            return this.srcEl && this.srcEl.id || "twitter-widget-" + v++
        },
        completed: function() {
            return this.completePromise
        }
    }), i.afterLoad = function(t) {
        y.push(t)
    }, i.doLayout = function() {
        _.exec()
    }, i.doLayoutAsync = function() {
        _.delayedExec()
    }, i.init = function(t) {
        s = t
    }, i.reset = function() {
        b = {}
    }, i.find = function(t) {
        return t && b[t] ? b[t].element : null
    }, i.embed = function(t) {
        var e = s.widgets, n = [], o = [], l = [];
        m.isArray(t) || (t = [t || document]), g.time("sandboxes"), w.forEach(t, function(t) {
            w.forIn(e, function(e, i) {
                var r, o;
                e.match(/\./) ? (r = e.split("."), o = a.all(r[1], t, r[0])) : o = t.getElementsByTagName(e), w.forEach(o, function(t) {
                    var e;
                    t.getAttribute(T) || (t.setAttribute(T, "true"), e = new i(t), n.push(e), l.push(e.sandboxCreated))
                })
            })
        }), h.every.apply(null, l).then(function() {
            g.timeEnd("sandboxes")
        }), i.doLayout(), w.forEach(n, function(t) {
            o.push(t.completed()), t.render(s)
        }), h.every.apply(null, o).then(function(t) {
            t = w.filter(t, function(t) {
                return t
            }), t.length && (twttr.events.trigger("loaded", {
                widgets: t
            }), g.timeEnd("load"))
        }).then(w.bind(i.trackRender, null, [n])), i.doLayoutAsync(), r()
    }, i.trackRender = function(t) {
        l.endAndTrack("render", "widgets-js-load", "page", {
            widget_origin: u.url()
        }, n(t))
    }, window.setInterval(function() {
        i.doLayout()
    }, 500), e.exports = i
}, {
    "dom/get": 6,
    "performance/perf-timers": 9,
    "tfw/util/article": 17,
    "tfw/util/globals": 21,
    "util/iframe": 38,
    "util/layout": 39,
    "util/logger": 40,
    "util/promise": 42,
    "util/querystring": 43,
    "util/typevalidator": 46,
    "util/util": 48
}
],
26: [function(t, e) {
    function i(t, e, i, n) {
        var r = h.one("subject", t, "BLOCKQUOTE"), o = h.one("reply", t, "BLOCKQUOTE"), s = r && r.getAttribute("data-tweet-id"), a = o && o.getAttribute("data-tweet-id"), l = {}, u = {};
        s && (l[s] = {
            item_type: 0
        }, b.enqueue({
            page: "tweet",
            section: "subject",
            component: "tweet",
            action: "results"
        }, w.aug({}, e, {
            item_ids: [s],
            item_details: l
        }), !0, n), b.scribeTweetAudienceImpression(n), a && (u[a] = {
            item_type: 0
        }, b.enqueue({
            page: "tweet",
            section: "conversation",
            component: "tweet",
            action: "results"
        }, w.aug({}, e, {
            item_ids: [a],
            item_details: u,
            associations: {
                4: {
                    association_id: s,
                    association_type: 4
                }
            }
        }), !0, n)))
    }
    function n(t, e, i) {
        var n = {};
        t && (n[t] = {
            item_type: 0
        }, b.enqueue({
            page: "tweet",
            section: "subject",
            component: "rawembedcode",
            action: "no_results"
        }, {
            widget_origin: g.url(),
            widget_frame: g.frameUrl(),
            message: e,
            item_ids: [t],
            item_details: n
        }, !0, i), b.scribeTweetAudienceImpression(i))
    }
    function r(t, e, i, n) {
        T[t] = T[t] || [], T[t].push({
            s: i,
            f: n,
            lang: e
        })
    }
    function o() {
        A.length && twttr.widgets.load(A)
    }
    function s(t) {
        if (t) {
            var e, i, n;
            l.apply(this, [t]), e = this.params(), i = this.srcEl && this.srcEl.getElementsByTagName("A"), n = i && i[i.length - 1], this.hideThread = "none" == (e.conversation || this.dataAttr("conversation"))||~w.indexOf(this.classAttr, "tw-hide-thread"), this.hideCard = "hidden" == (e.cards || this.dataAttr("cards"))||~w.indexOf(this.classAttr, "tw-hide-media"), "left" == (e.align || this.attr("align"))||~w.indexOf(this.classAttr, "tw-align-left") ? this.align = "left" : "right" == (e.align || this.attr("align"))||~w.indexOf(this.classAttr, "tw-align-right") ? this.align = "right" : ("center" == (e.align || this.attr("align"))||~w.indexOf(this.classAttr, "tw-align-center")) && (this.align = "center", this.containerWidth > this.dimensions.MIN_WIDTH * (1 / .7) && this.width > .7 * this.containerWidth && (this.width = .7 * this.containerWidth)), this.narrow = e.narrow || this.width <= this.dimensions.NARROW_WIDTH, this.narrow && this.classAttr.push("var-narrow"), this.tweetId = e.tweetId || n && p.status(n.href)
        }
    }
    var a = t("tfw/widget/base"), l = t("tfw/widget/syndicatedbase"), u = t("util/datetime"), c = t("tfw/util/params"), d = t("dom/classname"), h = t("dom/get"), f = t("performance/perf-timers"), m = t("util/promise"), w = t("util/util"), p = t("util/twitter"), g = t("tfw/util/article"), v = t("tfw/util/data"), b = t("tfw/util/tracking"), y = t("tfw/util/media"), _ = "tweetembed", T = {}, x = [], A = [];
    s.prototype = new l, w.aug(s.prototype, {
        renderedClassNames: "twitter-tweet twitter-tweet-rendered",
        dimensions: {
            DEFAULT_HEIGHT: "0",
            DEFAULT_WIDTH: "500",
            NARROW_WIDTH: "350",
            MIN_WIDTH: "220",
            MIN_HEIGHT: "0",
            WIDE_MEDIA_PADDING: 32,
            NARROW_MEDIA_PADDING: 32,
            BORDERS: 0
        },
        create: function(t) {
            var e, n, r = this.sandbox.createElement("div");
            return r.innerHTML = t, (e = r.children[0] ||!1) ? ("dark" == this.theme && this.classAttr.push("thm-dark"), this.linkColor && this.addSiteStyles(), d.present(e, "media-forward") && (this.fullBleedPhoto=!0), this.augmentWidgets(e), y.retinize(e), e.id = this.id, e.className += " " + this.classAttr.join(" "), e.lang = this.lang, this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Tweet"), this.sandbox.appendChild(e).then(w.bind(function() {
                this.renderResolver.fulfill(this.sandbox)
            }, this)), this.sandbox.style({
                cssText: "",
                display: "block",
                maxWidth: "99%",
                minWidth: this.dimensions.MIN_WIDTH + "px",
                padding: "0",
                borderRadius: "5px",
                margin: "10px 0",
                border: "#ddd 1px solid",
                borderTopColor: "#eee",
                borderBottomColor: "#bbb",
                boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                position: "absolute",
                visibility: "hidden"
            }), n = this.layout(w.bind(function() {
                this.predefinedWidth = this.width, this.width = this.sandbox.width(this.width), this.collapseRegions()
            }, this), "Insert Sandbox"), n.then(w.bind(function() {
                this.constrainMedia(e, this.contentWidth(this.width)), this.setNarrow().then(w.bind(function() {
                    this.layout(w.bind(function() {
                        this.completeResolver.fulfill(this.sandbox.element())
                    }, this))
                }, this))
            }, this)), i(e, this.baseScribeData(), this.partner, this.dnt), e) : void 0
        },
        render: function(t, e) {
            var i = "", o = this.tweetId;
            return o ? (this.hideCard && (i += "c"), this.hideThread && (i += "t"), i && (o += "-" + i), this.rendered().then(w.bind(function(t) {
                this.srcEl && this.srcEl.parentNode && this.layout(w.bind(function() {
                    this.srcEl && this.srcEl.parentNode && this.srcEl.parentNode.removeChild(this.srcEl)
                }, this), "Remove Embed Code"), "center" == this.align ? t.style({
                    margin: "7px auto",
                    cssFloat: "none"
                }) : this.align && (this.width == this.dimensions.DEFAULT_WIDTH && (this.predefinedWidth = this.width = this.dimensions.NARROW_WIDTH), t.style({
                    cssFloat: this.align
                })), this.layout(w.bind(function() {
                    this.height = this.sandbox.height(this.element.offsetHeight)
                }, this)).then(w.bind(function() {
                    return a.doLayoutAsync(), this.layout(w.bind(function() {
                        this.height = this.sandbox.height(this.element.offsetHeight)
                    }, this))
                }, this)).then(w.bind(function() {
                    t.onresize(w.bind(this.handleResize, this))
                }, this)), t.style({
                    position: "static",
                    visibility: "visible"
                }), a.doLayoutAsync()
            }, this)), r(o, this.lang, w.bind(function(t) {
                this.ready().then(w.bind(function() {
                    this.element = this.create(t), this.readTimestampTranslations(), this.updateTimeStamps(), this.bindIntentHandlers(), a.doLayoutAsync()
                }, this))
            }, this), w.bind(function() {
                n(this.tweetId, this.partner, this.dnt), this.completeResolver.fulfill(this.srcEl)
            }, this)), x.push(this.completed()), e && this.completed().then(e), this.completed().then(w.bind(this.scribePerformance, this)), this.completed()) : (this.completeResolver.fulfill(this.srcEl), this.completed())
        },
        scribePerformance: function() {
            f.endAndTrack("render", "widgets-js-load", "tweet", this.baseScribeData(), this.dnt)
        },
        augmentWidgets: function(t) {
            var e = h.one("twitter-follow-button", t, "A");
            e && (e.setAttribute("data-related", this.related), e.setAttribute("data-partner", this.partner), e.setAttribute("data-dnt", this.dnt), e.setAttribute("data-show-screen-name", "false"), A.push(e.parentNode))
        },
        addUrlParams: function(t) {
            var e = this, i = {
                related: this.related,
                partner: this.partner,
                original_referer: g.url(),
                tw_p: _
            };
            return this.addUrlParams = c(i, function(t) {
                var i = h.ancestor(".tweet", t, e.element);
                return {
                    tw_i: i.getAttribute("data-tweet-id")
                }
            }), this.addUrlParams(t)
        },
        baseScribeData: function() {
            return {
                widget_origin: g.url(),
                widget_frame: g.frameUrl(),
                message: this.partner
            }
        },
        handleResize: function(t) {
            t != this.width && (this.width = t, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(t)), this.collapseRegions(), this.layout(w.bind(function() {
                this.height = this.sandbox.height(this.element.offsetHeight), twttr.events.trigger("resize", {
                    target: this.sandbox.element()
                })
            }, this)), a.doLayoutAsync())
        },
        readTimestampTranslations: function() {
            var t = this.element, e = "data-dt-", i = t.getAttribute(e + "months") || "";
            this.datetime = new u(w.compact({
                phrases: {
                    AM: t.getAttribute(e + "am"),
                    PM: t.getAttribute(e + "pm")
                },
                months: i.split("|"),
                formats: {
                    full: t.getAttribute(e + "full")
                }
            }))
        },
        updateTimeStamps: function() {
            var t = h.one("long-permalink", this.element, "A"), e = t.getAttribute("data-datetime"), i = e && this.datetime.localTimeStamp(e), n = t.getElementsByTagName("TIME")[0];
            i && (this.layout(function() {
                return n && n.innerHTML ? void(n.innerHTML = i) : void(t.innerHTML = i)
            }, "Update Timestamp"), a.doLayoutAsync())
        }
    }), s.fetchAndRender = function() {
        var t, e, i = T, n = [];
        if (T = {}, i.keys)
            n = i.keys();
        else 
            for (t in i)
                i.hasOwnProperty(t) && n.push(t);
        n.length && (b.initPostLogging(), e = i[n[0]][0].lang, v.tweets({
            ids: n.sort(),
            lang: e,
            complete: function(t) {
                w.forIn(t, function(t, e) {
                    var n = i[t];
                    w.forEach(n, function(t) {
                        t.s && t.s.call(this, e)
                    }), delete i[t]
                }), a.doLayout(), w.forIn(i, function(t, e) {
                    w.forEach(e, function(e) {
                        e.f && e.f.call(this, t)
                    })
                }), a.doLayout()
            }
        }), m.every.apply(null, x).then(function() {
            o(), b.flush()
        }), x = [])
    }, a.afterLoad(s.fetchAndRender), e.exports = s
}, {
    "dom/classname": 4,
    "dom/get": 6,
    "performance/perf-timers": 9,
    "tfw/util/article": 17,
    "tfw/util/data": 19,
    "tfw/util/media": 22,
    "tfw/util/params": 23,
    "tfw/util/tracking": 24,
    "tfw/widget/base": 25,
    "tfw/widget/syndicatedbase": 29,
    "util/datetime": 33,
    "util/promise": 42,
    "util/twitter": 45,
    "util/util": 48
}
],
27: [function(t, e) {
    function i(t) {
        if (t) {
            var e, i, n, s;
            r.apply(this, [t]), e = this.params(), i = e.size || this.dataAttr("size"), n = e.showScreenName || this.dataAttr("show-screen-name"), s = e.count || this.dataAttr("count"), this.classAttr.push("twitter-follow-button"), this.showScreenName = "false" != n, this.showCount=!(e.showCount===!1 || "false" == this.dataAttr("show-count")), "none" == s && (this.showCount=!1), this.explicitWidth = e.width || this.dataAttr("width") || "", this.screenName = e.screen_name || e.screenName || o.screenName(this.attr("href")), this.preview = e.preview || this.dataAttr("preview") || "", this.align = e.align || this.dataAttr("align") || "", this.size = "large" == i ? "l" : "m"
        }
    }
    var n = t("util/util"), r = t("tfw/widget/base"), o = t("util/twitter"), s = t("util/promise"), a = t("dom/textsize");
    i.prototype = new r, n.aug(i.prototype, {
        iframeSource: "/widgets/follow_button.11ce3373df15f09ed07f509cf2213f79.{{lang}}.html",
        widgetUrlParams: function() {
            return n.compact({
                screen_name: this.screenName,
                lang: this.lang,
                show_count: this.showCount,
                show_screen_name: this.showScreenName,
                align: this.align,
                id: this.id,
                preview: this.preview,
                size: this.size,
                partner: this.partner,
                dnt: this.dnt,
                _: + new Date
            })
        },
        width: function() {
            if (this.calculatedWidth)
                return this.calculatedWidth;
            if (this.explicitWidth)
                return this.explicitWidth;
            var t, e, i = {
                cnt: 13,
                btn: 24,
                xlcnt: 22,
                xlbtn: 38
            }, r = this.showScreenName ? "Follow %{screen_name}": "Follow", o = this._(r, {
                screen_name: "@" + this.screenName
            }), s = this._(~n.indexOf(["ja", "ko"], this.lang) ? "10k unit" : "M"), l = this._("%{followers_count} followers", {
                followers_count: "88888" + s
            }), u = 0, c = 0, d = this.styles.base;
            return "l" == this.size ? (d = d.concat(this.styles.large), t = i.xlbtn, e = i.xlcnt) : (t = i.btn, e = i.cnt), this.showCount && (c = a(l, "", d).width + e), u = a(o, "", d.concat(this.styles.button)).width + t, this.calculatedWidth = u + c
        },
        render: function(t, e) {
            if (!this.screenName)
                return s.reject("Missing Screen Name").then(e);
            var i = this.makeIframeSource(), r = this.create(i, this.dimensions(), {
                title: this._("Twitter Follow Button")
            }).then(n.bind(function(t) {
                return this.element = t
            }, this));
            return e && r.then(e), r
        }
    }), e.exports = i
}, {
    "dom/textsize": 8,
    "tfw/widget/base": 25,
    "util/promise": 42,
    "util/twitter": 45,
    "util/util": 48
}
],
28: [function(t, e) {
    function i(t) {
        var e = Math.round(b / 2 - p / 2), i = 0;
        v > g && (i = Math.round(v / 2 - g / 2)), window.open(t, void 0, [w, "width=" + p, "height=" + g, "left=" + e, "top=" + i].join(","))
    }
    function n(e, i) {
        var n = t("tfw/hub/client");
        n.openIntent(e, i)
    }
    function r(t) {
        var e=~location.host.indexOf("poptip.com") ? "https://poptip.com" : location.href, i = "original_referer=" + e;
        return [t, i].join( - 1 == t.indexOf("?") ? "?" : "&")
    }
    function o(t) {
        var e, i, n;
        if (t = t || window.event, e = t.target || t.srcElement, !(t.altKey || t.metaKey || t.shiftKey)) {
            for (; e&&!~d.indexOf(["A", "AREA"], e.nodeName);)
                e = e.parentNode;
            e && e.href && (i = e.href.match(m), i && (n = r(e.href), n = n.replace(/^http[:]/, "https:"), n = n.replace(/^\/\//, "https://"), s(n, e), t.returnValue=!1, t.preventDefault && t.preventDefault()))
        }
    }
    function s(t, e) {
        if (f.isTwitterURL(t))
            if (twttr.events.hub && e) {
                var r = new a(u.generateId(), e);
                u.add(r), n(t, e), twttr.events.trigger("click", {
                    target: e,
                    region: "intent",
                    type: "click",
                    data: {}
                })
            } else 
                i(t)
    }
    function a(t, e) {
        this.id = t, this.element = this.srcEl = e
    }
    function l(t) {
        this.srcEl = [], this.element = t
    }
    var u, c = t("tfw/widget/base"), d = t("util/util"), h = t("util/promise"), f = t("util/twitter"), m = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/, w = "scrollbars=yes,resizable=yes,toolbar=no,location=yes", p = 550, g = 520, v = screen.height, b = screen.width;
    l.prototype = new c, d.aug(l.prototype, {
        render: function() {
            return u = this, window.twttr.__twitterIntentHandler || (document.addEventListener ? document.addEventListener("click", o, !1) : document.attachEvent && document.attachEvent("onclick", o), window.twttr.__twitterIntentHandler=!0), h.fulfill(document.body)
        }
    }), l.open = s, e.exports = l
}, {
    "tfw/hub/client": 16,
    "tfw/widget/base": 25,
    "util/promise": 42,
    "util/twitter": 45,
    "util/util": 48
}
],
29: [function(t, e) {
    function i() {
        o = n.VALID_COLOR.test(d.val("widgets:link-color")) && RegExp.$1, a = n.VALID_COLOR.test(d.val("widgets:border-color")) && RegExp.$1, s = d.val("widgets:theme")
    }
    function n(t) {
        if (t) {
            var e;
            this.readyPromise = new _(A.bind(function(t) {
                this.readyResolver = t
            }, this)), this.renderedPromise = new _(A.bind(function(t) {
                this.renderResolver = t
            }, this)), l.apply(this, [t]), e = this.params(), this.targetEl = this.srcEl && this.srcEl.parentNode || e.targetEl || document.body, this.predefinedWidth = n.VALID_UNIT.test(e.width || this.attr("width")) && RegExp.$1, this.layout(A.bind(function() {
                return this.containerWidth = v.effectiveWidth(this.targetEl)
            }, this)).then(A.bind(function(t) {
                var i = this.predefinedWidth || t || this.dimensions.DEFAULT_WIDTH;
                this.height = n.VALID_UNIT.test(e.height || this.attr("height")) && RegExp.$1, this.width = Math.max(this.dimensions.MIN_WIDTH, Math.min(i, this.dimensions.DEFAULT_WIDTH))
            }, this)), this.linkColor = n.VALID_COLOR.test(e.linkColor || this.dataAttr("link-color")) ? RegExp.$1 : o, this.borderColor = n.VALID_COLOR.test(e.borderColor || this.dataAttr("border-color")) ? RegExp.$1 : a, this.theme = e.theme || this.attr("data-theme") || s, this.theme = /(dark|light)/.test(this.theme) ? this.theme : "", this.classAttr.push(y.touch() ? "is-touch" : "not-touch"), y.ie9() && this.classAttr.push("ie9"), this.sandboxCreated = b.createSandbox({
                "class": this.renderedClassNames,
                id: this.id,
                allowfullscreen: ""
            }, {
                width: "1px",
                height: "0px",
                border: "none",
                position: "absolute",
                visibility: "hidden"
            }, A.bind(function(t) {
                this.srcEl ? this.targetEl.insertBefore(t, this.srcEl) : this.targetEl.appendChild(t)
            }, this), this.layout).then(A.bind(function(t) {
                this.setupSandbox(t), new m(t.element().contentWindow, this.dnt)
            }, this))
        }
    }
    function r(t, e) {
        return t + e
    }
    var o, s, a, l = t("tfw/widget/base"), u = t("tfw/widget/intent"), c = t("tfw/util/assets"), d = t("tfw/util/globals"), h = t("tfw/util/media"), f = t("tfw/util/tracking"), m = t("amplify/video_scribe_bridge"), w = t("dom/classname"), p = t("dom/get"), g = t("dom/delegate"), v = t("dom/size"), b = t("sandbox/frame"), y = t("util/env"), _ = t("util/promise"), T = t("util/twitter"), x = t("util/typevalidator"), A = t("util/util"), E = [".customisable", ".customisable:link", ".customisable:visited", ".customisable:hover", ".customisable:focus", ".customisable:active", ".customisable-highlight:hover", ".customisable-highlight:focus", "a:hover .customisable-highlight", "a:focus .customisable-highlight"], I = ["a:hover .ic-mask", "a:focus .ic-mask"], N = [".customisable-border"], k = [".timeline-header h1.summary", ".timeline-header h1.summary a:link", ".timeline-header h1.summary a:visited"], S = {
        TWEET: 0,
        RETWEET: 10
    };
    n.prototype = new l, A.aug(n.prototype, {
        setupSandbox: function(t) {
            this.sandbox = t, _.some(t.appendCss("body{display:none}"), t.setBaseTarget("_blank"), t.appendStyleSheet(twttr.widgets.config.assetUrl() + "/" + c("embed/timeline.css"))).then(A.bind(function() {
                this.readyResolver.fulfill(t)
            }, this))
        },
        ready: function() {
            return this.readyPromise
        },
        rendered: function() {
            return this.renderedPromise
        },
        contentWidth: function(t) {
            var e = this.dimensions, i = this.borderless ? 0: e.BORDERS, n = this.fullBleedPhoto ? 0: this.chromeless && this.narrow ? e.NARROW_MEDIA_PADDING_CL: this.chromeless ? e.WIDE_MEDIA_PADDING_CL: this.narrow ? e.NARROW_MEDIA_PADDING: e.WIDE_MEDIA_PADDING;
            return (t || this.width) - (n + i)
        },
        addSiteStyles: function() {
            var t = A.bind(function(t) {
                return ("dark" == this.theme ? ".thm-dark " : "") + t
            }, this), e = [];
            return this.headingStyle && e.push(A.map(k, t).join(",") + "{" + this.headingStyle + "}"), this.linkColor && (e.push(A.map(E, t).join(",") + "{color:" + this.linkColor + "}"), e.push(A.map(I, t).join(",") + "{background-color:" + this.linkColor + "}")), this.borderColor && e.push(A.map(N, t).concat("dark" == this.theme ? [".thm-dark.customisable-border"] : []).join(",") + "{border-color:" + this.borderColor + "}"), e.length ? this.sandbox.appendCss(e.join("")) : void 0
        },
        setNarrow: function() {
            var t = this.narrow;
            return this.narrow = this.width < this.dimensions.NARROW_WIDTH, t != this.narrow ? this.layout(A.bind(function() {
                return w.toggle(this.element, "var-narrow", this.narrow)
            }, this)) : _.fulfill(this.narrow)
        },
        bindIntentHandlers: function() {
            function t(t) {
                var n = p.ancestor(".tweet", this, i), r = A.aug({}, e.baseScribeData(), {
                    item_ids: [],
                    item_details: e.extractTweetScribeDetails(n)
                });
                A.forIn(r.item_details, function(t) {
                    r.item_ids.push(t)
                }), f.scribeInteraction(t, r, !0, e.dnt)
            }
            var e = this, i = this.element;
            g.delegate(i, "click", "A", t), g.delegate(i, "click", "BUTTON", t), g.delegate(i, "click", ".profile", function() {
                e.addUrlParams(this)
            }), g.delegate(i, "click", ".follow-button", function(t) {
                var i;
                t.altKey || t.metaKey || t.shiftKey || y.ios() || y.android() || x.asBoolean(this.getAttribute("data-age-gate")) || (i = T.intentForFollowURL(this.href, !0), i && (u.open(i, e.sandbox.element()), g.preventDefault(t)))
            }), g.delegate(i, "click", ".web-intent", function(t) {
                e.addUrlParams(this), t.altKey || t.metaKey || t.shiftKey || (u.open(this.href, e.sandbox.element()), g.preventDefault(t))
            })
        },
        baseScribeData: function() {
            return {}
        },
        extractTweetScribeDetails: function(t) {
            var e, i, n = {};
            return t ? (e = t.getAttribute("data-tweet-id"), i = t.getAttribute("data-rendered-tweet-id") || e, i == e ? n[i] = {
                item_type: S.TWEET
            } : e && (n[i] = {
                item_type: S.RETWEET,
                target_type: S.TWEET,
                target_id: e
            }), n) : n
        },
        constrainMedia: function(t, e) {
            return h.constrainMedia(t || this.element, e || this.contentWidth(), this.fullBleedPhoto, this.layout)
        },
        collapseRegions: function() {
            A.forEach(p.all("collapsible-container", this.element), A.bind(function(t) {
                var e, i, n = t.children, o = n.length && t.offsetWidth, s = n.length && A.map(n, function(t) {
                    return t.offsetWidth
                }), a = n.length;
                if (n.length)
                    for (; a > 0;) {
                        if (a--, e = A.reduce(s, r, 0), !o ||!e)
                            return;
                            if (o > e)
                                return;
                                i = n[a].getAttribute("data-collapsed-class"), i && (w.add(this.element, i), s[a] = n[a].offsetWidth)
                    }
            }, this))
        }
    }), n.VALID_UNIT = /^([0-9]+)( ?px)?$/, n.VALID_COLOR = /^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i, i(), e.exports = n
}, {
    "amplify/video_scribe_bridge": 2,
    "dom/classname": 4,
    "dom/delegate": 5,
    "dom/get": 6,
    "dom/size": 7,
    "sandbox/frame": 13,
    "tfw/util/assets": 18,
    "tfw/util/globals": 21,
    "tfw/util/media": 22,
    "tfw/util/tracking": 24,
    "tfw/widget/base": 25,
    "tfw/widget/intent": 28,
    "util/env": 36,
    "util/promise": 42,
    "util/twitter": 45,
    "util/typevalidator": 46,
    "util/util": 48
}
],
30: [function(t, e) {
    function i(t) {
        if (t) {
            var e, i, n, o, s, a, l, u;
            r.apply(this, [t]), e = this.params(), i = (e.chrome || this.dataAttr("chrome") || "").split(" "), this.preview = e.previewParams, this.widgetId = e.widgetId || this.dataAttr("widget-id"), this.instanceId=++F, this.cursors = {
                maxPosition: 0,
                minPosition: 0
            }, this.override = (o = e.screenName || this.dataAttr("screen-name")) || (s = e.userId || this.dataAttr("user-id")) ? {
                overrideType: "user",
                overrideId: s,
                overrideName: o,
                withReplies: p.asBoolean(e.showReplies || this.dataAttr("show-replies")) ? "true": "false"
            } : (o = e.favoritesScreenName || this.dataAttr("favorites-screen-name")) || (s = e.favoritesUserId || this.dataAttr("favorites-user-id")) ? {
                overrideType: "favorites",
                overrideId: s,
                overrideName: o
            } : ((o = e.listOwnerScreenName || this.dataAttr("list-owner-screen-name")) || (s = e.listOwnerId || this.dataAttr("list-owner-id"))) && ((a = e.listId || this.dataAttr("list-id")) || (l = e.listSlug || this.dataAttr("list-slug"))) ? {
                overrideType: "list",
                overrideOwnerId: s,
                overrideOwnerName: o,
                overrideId: a,
                overrideName: l
            } : (u = e.customTimelineId || this.dataAttr("custom-timeline-id")) ? {
                overrideType: "custom",
                overrideId: u
            } : {}, this.tweetLimit = p.asInt(e.tweetLimit || this.dataAttr("tweet-limit")), this.staticTimeline = this.tweetLimit > 0, i.length && (n=~g.indexOf(i, "none"), this.chromeless = n||~g.indexOf(i, "transparent"), this.headerless = n||~g.indexOf(i, "noheader"), this.footerless = n||~g.indexOf(i, "nofooter"), this.borderless = n||~g.indexOf(i, "noborders"), this.noscrollbar=~g.indexOf(i, "noscrollbar")), this.headingStyle = m.sanitize(e.headingStyle || this.dataAttr("heading-style"), void 0, !0), this.classAttr.push("twitter-timeline-rendered"), this.ariaPolite = e.ariaPolite || this.dataAttr("aria-polite")
        }
    }
    var n = t("tfw/widget/base"), r = t("tfw/widget/syndicatedbase"), o = t("util/datetime"), s = t("util/promise"), a = t("anim/transition"), l = t("performance/perf-timers"), u = t("tfw/util/article"), c = t("tfw/util/data"), d = t("tfw/util/media"), h = t("tfw/util/tracking"), f = t("tfw/util/params"), m = t("util/css"), w = t("util/env"), p = t("util/typevalidator"), g = t("util/util"), v = t("dom/delegate"), b = t("dom/classname"), y = t("dom/get"), _ = {
        CLIENT_SIDE_USER: 0,
        CLIENT_SIDE_APP: 2
    }, T = "timeline", x = "new-tweets-bar", A = "timeline-header", E = "timeline-footer", I = "stream", N = "h-feed", k = "tweet", S = "expanded", D = "detail-expander", O = "expand", L = "permalink", C = "twitter-follow-button", P = "no-more-pane", j = "pending-scroll-in", M = "pending-new-tweet", R = "pending-new-tweet-display", F = 0;
    i.prototype = new r, g.aug(i.prototype, {
        renderedClassNames: "twitter-timeline twitter-timeline-rendered",
        dimensions: {
            DEFAULT_HEIGHT: "600",
            DEFAULT_WIDTH: "520",
            NARROW_WIDTH: "320",
            MIN_WIDTH: "180",
            MIN_HEIGHT: "200",
            WIDE_MEDIA_PADDING: 81,
            NARROW_MEDIA_PADDING: 16,
            WIDE_MEDIA_PADDING_CL: 60,
            NARROW_MEDIA_PADDING_CL: 12,
            BORDERS: 2
        },
        create: function(t) {
            var e, i, r, o, a = this.sandbox.createElement("div"), l = [];
            return a.innerHTML = t.body, (e = a.children[0] ||!1) ? (this.reconfigure(t.config), this.discardStaticOverflow(e), this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Timeline"), d.retinize(e), this.constrainMedia(e), this.searchQuery = e.getAttribute("data-search-query"), this.profileId = e.getAttribute("data-profile-id"), this.timelineType = e.getAttribute("data-timeline-type"), o = this.getTweetDetails(y.one(N, a)), g.forIn(o, function(t) {
                l.push(t)
            }), r = this.baseScribeData(), r.item_ids = l, r.item_details = o, this.timelineType && h.enqueue({
                page: this.timelineType + "_timeline",
                component: "timeline",
                element: "initial",
                action: l.length ? "results": "no_results"
            }, r, !0, this.dnt), h.enqueue({
                page: "timeline",
                component: "timeline",
                element: "initial",
                action: l.length ? "results": "no_results"
            }, r, !0, this.dnt), h.scribeTimelineAudienceImpression(this.dnt), h.flush(), "assertive" == this.ariaPolite && (i = y.one(x, e, "DIV"), i.setAttribute("aria-polite", "assertive")), e.id = this.id, e.className += " " + this.classAttr.join(" "), e.lang = this.lang, this.augmentWidgets(e), this.ready().then(g.bind(function(t) {
                t.appendChild(e).then(g.bind(function() {
                    this.renderResolver.fulfill(this.sandbox)
                }, this)), t.style({
                    cssText: "",
                    border: "none",
                    maxWidth: "100%",
                    minWidth: this.dimensions.MIN_WIDTH + "px"
                }), this.layout(g.bind(function() {
                    this.srcEl && this.srcEl.parentNode && this.srcEl.parentNode.removeChild(this.srcEl), this.predefinedWidth = this.width, this.predefinedHeight = this.height, this.width = t.width(this.width), this.height = t.height(this.height)
                }, this)).then(g.bind(function() {
                    var e = [];
                    this.width < this.predefinedWidth && e.push(this.layout(g.bind(function() {
                        this.width = t.width(this.predefinedWidth)
                    }, this))), this.height < this.predefinedHeight && e.push(this.layout(g.bind(function() {
                        this.height = t.height(this.predefinedHeight), this.recalculateStreamHeight()
                    }, this))), e.length && n.doLayoutAsync(), e.push(s.fulfill()), s.every.apply(null, e).then(g.bind(function() {
                        this.setNarrow(), this.sandbox.onresize(g.bind(this.handleResize, this)), this.completeResolver.fulfill(this.sandbox.element())
                    }, this))
                }, this))
            }, this)), e) : void 0
        },
        render: function(t, e) {
            return this.preview || this.widgetId ? (this.rendered().then(this.staticTimeline ? g.bind(function(t) {
                this.layout(g.bind(function() {
                    t.height(this.height = this.element.offsetHeight)
                }, this)), n.doLayoutAsync()
            }, this) : g.bind(function() {
                this.recalculateStreamHeight(), n.doLayoutAsync()
            }, this)), this.preview ? this.getPreviewTimeline() : this.getTimeline(), e && this.completed().then(e), this.completed().then(g.bind(this.scribePerformance, this)), this.completed()) : (this.completeResolver.reject(400), this.completed())
        },
        scribePerformance: function() {
            l.endAndTrack("render", "widgets-js-load", "timeline", this.baseScribeData(), this.dnt)
        },
        getPreviewTimeline: function() {
            c.timelinePreview({
                success: g.bind(function(t) {
                    this.ready().then(g.bind(function() {
                        this.element = this.create(t), this.readTranslations(), this.bindInteractions(), this.updateCursors(t.headers, {
                            initial: !0
                        }), n.doLayoutAsync()
                    }, this))
                }, this),
                error: g.bind(function(t) {
                    return t && t.headers ? void this.completeResolver.reject(t.headers.status) : void this.completeResolver.fulfill(this.srcEl)
                }, this),
                params: this.preview
            })
        },
        getTimeline: function() {
            h.initPostLogging(), c.timeline(g.aug({
                id: this.widgetId,
                instanceId: this.instanceId,
                dnt: this.dnt,
                lang: this.lang,
                success: g.bind(function(t) {
                    this.ready().then(g.bind(function() {
                        this.element = this.create(t), this.readTranslations(), this.bindInteractions(), this.updateTimeStamps(), this.updateCursors(t.headers, {
                            initial: !0
                        }), t.headers.xPolling && /\d/.test(t.headers.xPolling) && (this.pollInterval = 1e3 * t.headers.xPolling), this.staticTimeline || this.schedulePolling(), n.doLayoutAsync()
                    }, this))
                }, this),
                error: g.bind(function(t) {
                    return t && t.headers ? void this.completeResolver.reject(t.headers.status) : void this.completeResolver.fulfill(this.srcEl)
                }, this)
            }, this.override))
        },
        reconfigure: function(t) {
            this.lang = t.lang, this.theme || (this.theme = t.theme), "dark" == this.theme && this.classAttr.push("thm-dark"), this.chromeless && this.classAttr.push("var-chromeless"), this.borderless && this.classAttr.push("var-borderless"), this.headerless && this.classAttr.push("var-headerless"), this.footerless && this.classAttr.push("var-footerless"), this.staticTimeline && this.classAttr.push("var-static"), !this.linkColor && t.linkColor && r.VALID_COLOR.test(t.linkColor) && (this.linkColor = RegExp.$1), !this.height && r.VALID_UNIT.test(t.height) && (this.height = RegExp.$1), this.height = Math.max(this.dimensions.MIN_HEIGHT, this.height ? this.height : this.dimensions.DEFAULT_HEIGHT), this.preview && this.classAttr.push("var-preview"), this.narrow = this.width <= this.dimensions.NARROW_WIDTH, this.narrow && this.classAttr.push("var-narrow"), this.addSiteStyles()
        },
        getTweetDetails: function(t) {
            var e, i = {};
            return e = t && t.children || [], g.forEach(e, g.bind(function(t) {
                g.aug(i, this.extractTweetScribeDetails(t))
            }, this)), i
        },
        baseScribeData: function() {
            return {
                widget_id: this.widgetId,
                widget_origin: u.url(),
                message: this.partner,
                query: this.searchQuery,
                profile_id: this.profileId
            }
        },
        bindInteractions: function() {
            var t = this, e = this.element, i=!0;
            this.bindIntentHandlers(), v.delegate(e, "click", ".load-tweets", function(e) {
                i && (i=!1, t.forceLoad(), v.stop(e))
            }), v.delegate(e, "click", ".display-sensitive-image", function(i) {
                t.showNSFW(y.ancestor("." + k, this, e)), v.stop(i)
            }), v.delegate(e, "mouseover", "." + T, function() {
                t.mouseOver=!0
            }), v.delegate(e, "mouseout", "." + T, function() {
                t.mouseOver=!1
            }), v.delegate(e, "mouseover", "." + x, function() {
                t.mouseOverNotifier=!0
            }), v.delegate(e, "mouseout", "." + x, function() {
                t.mouseOverNotifier=!1, window.setTimeout(function() {
                    t.hideNewTweetNotifier()
                }, 3e3)
            }), this.staticTimeline || (v.delegate(e, "click", "." + O, function(i) {
                i.altKey || i.metaKey || i.shiftKey || (t.toggleExpando(y.ancestor("." + k, this, e)), v.stop(i))
            }), v.delegate(e, "click", "A", function(t) {
                v.stopPropagation(t)
            }), v.delegate(e, "click", ".with-expansion", function(e) {
                t.toggleExpando(this), v.stop(e)
            }), v.delegate(e, "click", ".load-more", function() {
                t.loadMore()
            }), v.delegate(e, "click", "." + x, function() {
                t.scrollToTop(), t.hideNewTweetNotifier(!0)
            }))
        },
        scrollToTop: function() {
            var t = y.one(I, this.element, "DIV");
            t.scrollTop = 0, t.focus()
        },
        update: function() {
            var t = this, e = y.one(N, this.element), i = e && e.children[0], n = i && i.getAttribute("data-tweet-id");
            this.updateTimeStamps(), this.requestTweets(n, !0, function(e) {
                e.childNodes.length > 0 && t.insertNewTweets(e)
            })
        },
        loadMore: function() {
            var t = this, e = y.all(k, this.element, "LI").pop(), i = e && e.getAttribute("data-tweet-id");
            this.requestTweets(i, !1, function(e) {
                var n = y.one(P, t.element, "P"), r = e.childNodes[0];
                return n.style.cssText = "", r && r.getAttribute("data-tweet-id") == i && e.removeChild(r), e.childNodes.length > 0 ? void t.appendTweets(e) : (b.add(t.element, "no-more"), void n.focus())
            })
        },
        forceLoad: function() {
            var t = this, e=!!y.all(N, this.element, "OL").length;
            this.requestTweets(1, !0, function(i) {
                i.childNodes.length && (t[e ? "insertNewTweets": "appendTweets"](i), b.add(t.element, "has-tweets"))
            })
        },
        schedulePolling: function(t) {
            var e = this;
            null !== this.pollInterval && (t = twttr.widgets.poll || t || this.pollInterval || 1e4, t>-1 && window.setTimeout(function() {
                this.isUpdating || e.update(), e.schedulePolling()
            }, t))
        },
        updateCursors: function(t, e) {
            (e || {}).initial ? (this.cursors.maxPosition = t.maxPosition, this.cursors.minPosition = t.minPosition) : (e || {}).newer ? this.cursors.maxPosition = t.maxPosition || this.cursors.maxPosition : this.cursors.minPosition = t.minPosition || this.cursors.minPosition
        },
        requestTweets: function(t, e, i) {
            var n = this, r = {
                id: this.widgetId,
                instanceId: this.instanceId,
                screenName: this.widgetScreenName,
                userId: this.widgetUserId,
                withReplies: this.widgetShowReplies,
                dnt: this.dnt,
                lang: this.lang
            };
            e && this.cursors.maxPosition ? r.minPosition = this.cursors.maxPosition : !e && this.cursors.minPosition ? r.maxPosition = this.cursors.minPosition : e ? r.sinceId = t : r.maxId = t, r.complete = function() {
                this.isUpdating=!1
            }, r.error = function(t) {
                if (t && t.headers) {
                    if ("404" == t.headers.status)
                        return void(n.pollInterval = null);
                    if ("503" == t.headers.status)
                        return void(n.pollInterval*=1.5)
                }
            }, r.success = function(t) {
                var r, o, s = n.sandbox.createDocumentFragment(), a = n.sandbox.createElement("ol"), l = [];
                if (n.updateCursors(t.headers, {
                    newer: e
                }), t && t.headers && t.headers.xPolling && /\d+/.test(t.headers.xPolling) && (n.pollInterval = 1e3 * t.headers.xPolling), t && void 0 !== t.body) {
                    if (a.innerHTML = t.body, a.children[0] && "LI" != a.children[0].tagName)
                        return;
                    for (o = n.getTweetDetails(a), g.forIn(o, function(t) {
                        l.push(t)
                    }), l.length && (r = n.baseScribeData(), r.item_ids = l, r.item_details = o, r.event_initiator = e ? _.CLIENT_SIDE_APP : _.CLIENT_SIDE_USER, this.timelineType && h.enqueue({
                        page: this.timelineType + "_timeline",
                        component: "timeline",
                        element: "initial",
                        action: l.length ? "results": "no_results"
                    }, r, !0, this.dnt), h.enqueue({
                        page: "timeline",
                        component: "timeline",
                        element: e ? "newer": "older",
                        action: "results"
                    }, r, !0, n.dnt), h.flush()), d.retinize(a), n.constrainMedia(a); a.children[0];)
                        s.appendChild(a.children[0]);
                    i(s)
                }
            }, c.timelinePoll(g.aug(r, this.override))
        },
        insertNewTweets: function(t) {
            var e, i = this, n = y.one(I, this.element, "DIV"), r = y.one(N, n, "OL"), o = r.offsetHeight;
            return r.insertBefore(t, r.firstChild), e = r.offsetHeight - o, twttr.events.trigger("timelineUpdated", {
                target: this.sandbox.element(),
                region: "newer"
            }), n.scrollTop > 40 || this.mouseIsOver() ? (n.scrollTop = n.scrollTop + e, this.updateTimeStamps(), void this.showNewTweetNotifier()) : (b.remove(this.element, j), r.style.cssText = "margin-top: -" + e + "px", window.setTimeout(function() {
                n.scrollTop = 0, b.add(i.element, j), w.cssTransitions() ? r.style.cssText = "" : a.animate(function(t) {
                    r.style.cssText = e > t ? "margin-top: -" + (e - t) + "px" : ""
                }, e, 500, a.easeOut)
            }, 500), this.updateTimeStamps(), void("custom" != this.timelineType && this.gcTweets(50)))
        },
        appendTweets: function(t) {
            var e = y.one(I, this.element, "DIV"), i = y.one(N, e, "OL");
            i.appendChild(t), this.updateTimeStamps(), twttr.events.trigger("timelineUpdated", {
                target: this.sandbox.element(),
                region: "older"
            })
        },
        gcTweets: function(t) {
            var e, i = y.one(N, this.element, "OL"), n = i.children.length;
            for (t = t || 50; n > t && (e = i.children[n - 1]); n--)
                i.removeChild(e)
        },
        showNewTweetNotifier: function() {
            var t = this, e = y.one(x, this.element, "DIV"), i = e.children[0];
            e.style.cssText = "", e.removeChild(i), e.appendChild(i), b.add(this.element, R), window.setTimeout(function() {
                b.add(t.element, M)
            }, 10), this.newNoticeDisplayTime =+ new Date, window.setTimeout(function() {
                t.hideNewTweetNotifier()
            }, 5e3)
        },
        hideNewTweetNotifier: function(t) {
            var e = this;
            (t ||!this.mouseOverNotifier) && (b.remove(this.element, M), window.setTimeout(function() {
                b.remove(e.element, R)
            }, 500))
        },
        augmentWidgets: function(t) {
            var e = y.one(C, t, "A");
            e && (e.setAttribute("data-related", this.related), e.setAttribute("data-partner", this.partner), e.setAttribute("data-dnt", this.dnt), e.setAttribute("data-search-query", this.searchQuery), e.setAttribute("data-profile-id", this.profileId), this.width < 250 && e.setAttribute("data-show-screen-name", "false"), twttr.widgets.load(e.parentNode))
        },
        discardStaticOverflow: function(t) {
            var e, i = y.one(N, t, "OL");
            if (this.staticTimeline)
                for (this.height = 0; e = i.children[this.tweetLimit];)
                    i.removeChild(e)
        },
        hideStreamScrollBar: function() {
            var t, e = y.one(I, this.element, "DIV"), i = y.one(N, this.element, "OL");
            e.style.width = "", t = this.element.offsetWidth - i.offsetWidth, t > 0 && (e.style.width = this.element.offsetWidth + t + "px")
        },
        readTranslations: function() {
            var t = this.element, e = "data-dt-";
            this.datetime = new o(g.compact({
                phrases: {
                    now: t.getAttribute(e + "now"),
                    s: t.getAttribute(e + "s"),
                    m: t.getAttribute(e + "m"),
                    h: t.getAttribute(e + "h"),
                    second: t.getAttribute(e + "second"),
                    seconds: t.getAttribute(e + "seconds"),
                    minute: t.getAttribute(e + "minute"),
                    minutes: t.getAttribute(e + "minutes"),
                    hour: t.getAttribute(e + "hour"),
                    hours: t.getAttribute(e + "hours")
                },
                months: t.getAttribute(e + "months").split("|"),
                formats: {
                    abbr: t.getAttribute(e + "abbr"),
                    shortdate: t.getAttribute(e + "short"),
                    longdate: t.getAttribute(e + "long")
                }
            }))
        },
        updateTimeStamps: function() {
            for (var t, e, i, n, r = y.all(L, this.element, "A"), o = 0; t = r[o]; o++)
                i = t.getAttribute("data-datetime"), n = i && this.datetime.timeAgo(i, this.i18n), e = t.getElementsByTagName("TIME")[0], n && (e && e.innerHTML ? e.innerHTML = n : t.innerHTML = n)
        },
        mouseIsOver: function() {
            return this.mouseOver
        },
        addUrlParams: function(t) {
            var e = this, i = {
                tw_w: this.widgetId,
                related: this.related,
                partner: this.partner,
                query: this.searchQuery,
                profile_id: this.profileId,
                original_referer: u.url(),
                tw_p: "embeddedtimeline"
            };
            return this.addUrlParams = f(i, function(t) {
                var i = y.ancestor("." + k, t, e.element);
                return i && {
                    tw_i: i.getAttribute("data-tweet-id")
                }
            }), this.addUrlParams(t)
        },
        showNSFW: function(t) {
            var e, i, n, r, o, s, a = y.one("nsfw", t, "DIV"), l = 0;
            a && (i = d.scaleDimensions(a.getAttribute("data-width"), a.getAttribute("data-height"), this.contentWidth(), a.getAttribute("data-height")), e=!!(r = a.getAttribute("data-player")), e ? o = this.sandbox.createElement("iframe") : (o = this.sandbox.createElement("img"), r = a.getAttribute(w.retina() ? "data-image-2x" : "data-image"), o.alt = a.getAttribute("data-alt"), s = this.sandbox.createElement("a"), s.href = a.getAttribute("data-href"), s.appendChild(o)), o.title = a.getAttribute("data-title"), o.src = r, o.width = i.width, o.height = i.height, n = y.ancestor("." + D, a, t), l = i.height - a.offsetHeight, a.parentNode.replaceChild(e ? o : s, a), n.style.cssText = "height:" + (n.offsetHeight + l) + "px")
        },
        toggleExpando: function(t) {
            var e, i, r = y.one(D, t, "DIV"), o = r && r.children[0], s = o && o.getAttribute("data-expanded-media"), a = 0, l = y.one(O, t, "A"), u = l && l.getElementsByTagName("B")[0], c = u && (u.innerText || u.textContent);
            if (u) {
                if (this.layout(function() {
                    u.innerHTML = l.getAttribute("data-toggled-text"), l.setAttribute("data-toggled-text", c)
                }), b.present(t, S))
                    return this.layout(function() {
                        b.remove(t, S)
                    }), r ? (this.layout(function() {
                        r.style.cssText = "", o.innerHTML = ""
                    }), void n.doLayout()) : void n.doLayout();
                s && (e = this.sandbox.createElement("DIV"), e.innerHTML = s, d.retinize(e), a = this.constrainMedia(e), this.layout(function() {
                    o.appendChild(e)
                })), r && this.layout(function() {
                    i = Math.max(o.offsetHeight, a), r.style.cssText = "height:" + i + "px"
                }), this.layout(function() {
                    b.add(t, S)
                }), n.doLayout()
            }
        },
        recalculateStreamHeight: function(t) {
            var e = y.one(A, this.element, "DIV"), i = y.one(E, this.element, "DIV"), n = y.one(I, this.element, "DIV");
            this.layout(g.bind(function() {
                var r = e.offsetHeight + (i ? i.offsetHeight : 0), o = t || this.sandbox.height();
                n.style.cssText = "height:" + (o - r - 2) + "px", this.noscrollbar && this.hideStreamScrollBar()
            }, this))
        },
        handleResize: function(t, e) {
            var i = Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth || this.dimensions.DEFAULT_WIDTH, t)));
            (i != this.width || e != this.height) && (this.width = i, this.height = e, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(i)), this.staticTimeline ? this.layout(g.bind(function() {
                this.height = this.element.offsetHeight, this.sandbox.height(this.height), twttr.events.trigger("resize", {
                    target: this.sandbox.element()
                })
            }, this)) : (this.recalculateStreamHeight(e), twttr.events.trigger("resize", {
                target: this.sandbox.element()
            })), n.doLayoutAsync())
        }
    }), e.exports = i
}, {
    "anim/transition": 3,
    "dom/classname": 4,
    "dom/delegate": 5,
    "dom/get": 6,
    "performance/perf-timers": 9,
    "tfw/util/article": 17,
    "tfw/util/data": 19,
    "tfw/util/media": 22,
    "tfw/util/params": 23,
    "tfw/util/tracking": 24,
    "tfw/widget/base": 25,
    "tfw/widget/syndicatedbase": 29,
    "util/css": 32,
    "util/datetime": 33,
    "util/env": 36,
    "util/promise": 42,
    "util/typevalidator": 46,
    "util/util": 48
}
],
31: [function(t, e) {
    function i(t) {
        n.apply(this, [t]);
        var e = this.params(), i = e.count || this.dataAttr("count"), l = e.size || this.dataAttr("size"), f = s.getScreenNameFromPage(), m = "" + (e.shareWithRetweet || this.dataAttr("share-with-retweet") || r.val("share-with-retweet"));
        this.classAttr.push("twitter-tweet-button"), "hashtag" == e.type||~o.indexOf(this.classAttr, "twitter-hashtag-button") ? (this.type = "hashtag", this.classAttr.push("twitter-hashtag-button")) : "mention" == e.type||~o.indexOf(this.classAttr, "twitter-mention-button") ? (this.type = "mention", this.classAttr.push("twitter-mention-button")) : this.classAttr.push("twitter-share-button"), this.text = e.text || this.dataAttr("text"), this.text && /\+/.test(this.text)&&!/ /.test(this.text) && (this.text = this.text.replace(/\+/g, " ")), this.counturl = e.counturl || this.dataAttr("counturl"), this.searchlink = e.searchlink || this.dataAttr("searchlink"), this.button_hashtag = a.hashTag(e.button_hashtag || e.hashtag || this.dataAttr("button-hashtag"), !1), this.size = "large" == l ? "l" : "m", this.align = e.align || this.dataAttr("align") || "", this.via = e.via || this.dataAttr("via"), this.hashtags = e.hashtags || this.dataAttr("hashtags"), this.screen_name = a.screenName(e.screen_name || e.screenName || this.dataAttr("button-screen-name")), this.url = e.url || this.dataAttr("url"), this.type ? (this.count = "none", this.shareWithRetweet = "never", f && (this.related = this.related ? f + "," + this.related : f)) : (this.text = this.text || u, this.url = this.url || s.getCanonicalURL() || c, this.count=~o.indexOf(d, i) ? i : "horizontal", this.count = "vertical" == this.count && "l" == this.size ? "none" : this.count, this.via = this.via || f, m&&~o.indexOf(h, m) && (this.shareWithRetweet = m.replace("-", "_")))
    }
    var n = t("tfw/widget/base"), r = t("tfw/util/globals"), o = t("util/util"), s = t("util/uri"), a = t("util/twitter"), l = t("dom/textsize"), u = document.title, c = location.href, d = ["vertical", "horizontal", "none"], h = ["never", "publisher-first", "publisher-only", "author-first", "author-only"];
    i.prototype = new n, o.aug(i.prototype, {
        iframeSource: "/widgets/tweet_button.7f8347f02bb0ebbacdf7abc023d3665c.{{lang}}.html",
        widgetUrlParams: function() {
            return o.compact({
                text: this.text,
                url: this.url,
                via: this.via,
                related: this.related,
                count: this.count,
                lang: this.lang,
                counturl: this.counturl,
                searchlink: this.searchlink,
                placeid: this.placeid,
                original_referer: location.href,
                id: this.id,
                size: this.size,
                type: this.type,
                screen_name: this.screen_name,
                share_with_retweet: this.shareWithRetweet,
                button_hashtag: this.button_hashtag,
                hashtags: this.hashtags,
                align: this.align,
                partner: this.partner,
                dnt: this.dnt,
                _: + new Date
            })
        },
        height: function() {
            return "vertical" == this.count ? 62 : "m" == this.size ? 20 : 28
        },
        width: function() {
            var t = {
                ver: 8,
                cnt: 14,
                btn: 24,
                xlcnt: 18,
                xlbtn: 38
            }, e = "vertical" == this.count, i = "hashtag" == this.type && this.button_hashtag ? "Tweet %{hashtag}": "mention" == this.type && this.screen_name ? "Tweet to %{name}": "Tweet", n = this._(i, {
                name: "@" + this.screen_name,
                hashtag: "#" + this.button_hashtag
            }), r = this._("K"), s = this._("100K+"), a = (e ? "8888" : "88888") + r, u = 0, c = 0, d = 0, h = 0, f = this.styles.base, m = f;
            return ~o.indexOf(["ja", "ko"], this.lang) ? a += this._("10k unit") : a = a.length > s.length ? a : s, e ? (m = f.concat(this.styles.vbubble), h = t.ver, d = t.btn) : "l" == this.size ? (f = m = f.concat(this.styles.large), d = t.xlbtn, h = t.xlcnt) : (d = t.btn, h = t.cnt), "none" != this.count && (c = l(a, "", m).width + h), u = l(n, "", f.concat(this.styles.button)).width + d, e ? u > c ? u : c : this.calculatedWidth = u + c
        },
        render: function(t, e) {
            var i, n = this.makeIframeSource();
            return this.count && this.classAttr.push("twitter-count-" + this.count), i = this.create(n, this.dimensions(), {
                title: this._("Twitter Tweet Button")
            }).then(o.bind(function(t) {
                return this.element = t
            }, this)), e && i.then(e), i
        }
    }), e.exports = i
}, {
    "dom/textsize": 8,
    "tfw/util/globals": 21,
    "tfw/widget/base": 25,
    "util/twitter": 45,
    "util/uri": 47,
    "util/util": 48
}
],
32: [function(t, e) {
    var i = t("util/util");
    e.exports = {
        sanitize: function(t, e, n) {
            var r, o = /^[\w ,%\/"'\-_#]+$/, s = t && i.map(t.split(";"), function(t) {
                return i.map(t.split(":").slice(0, 2), function(t) {
                    return i.trim(t)
                })
            }), a = 0, l = [], u = n ? "!important": "";
            for (e = e || /^(font|text\-|letter\-|color|line\-)[\w\-]*$/; s && (r = s[a]); a++)
                r[0].match(e) && r[1].match(o) && l.push(r.join(":") + u);
            return l.join(";")
        }
    }
}, {
    "util/util": 48
}
],
33: [function(t, e) {
    function i(t) {
        return 10 > t ? "0" + t : t
    }
    function n(t) {
        function e(t, e) {
            return r && r[t] && (t = r[t]), t.replace(/%\{([\w_]+)\}/g, function(t, i) {
                return void 0 !== e[i] ? e[i] : t
            })
        }
        var r = t && t.phrases, o = t && t.months || l, s = t && t.formats || u;
        this.timeAgo = function(t) {
            var i, r = n.parseDate(t), a =+ new Date, l = a - r;
            return r ? isNaN(l) || 2 * c > l ? e("now") : d > l ? (i = Math.floor(l / c), e(s.abbr, {
                number: i,
                symbol: e(m, {
                    abbr: e("s"),
                    expanded: e(i > 1 ? "seconds" : "second")
                })
            })) : h > l ? (i = Math.floor(l / d), e(s.abbr, {
                number: i,
                symbol: e(m, {
                    abbr: e("m"),
                    expanded: e(i > 1 ? "minutes" : "minute")
                })
            })) : f > l ? (i = Math.floor(l / h), e(s.abbr, {
                number: i,
                symbol: e(m, {
                    abbr: e("h"),
                    expanded: e(i > 1 ? "hours" : "hour")
                })
            })) : 365 * f > l ? e(s.shortdate, {
                day: r.getDate(),
                month: e(o[r.getMonth()])
            }) : e(s.longdate, {
                day: r.getDate(),
                month: e(o[r.getMonth()]),
                year: r.getFullYear().toString().slice(2)
            }) : ""
        }, this.localTimeStamp = function(t) {
            var r = n.parseDate(t), a = r && r.getHours();
            return r ? e(s.full, {
                day: r.getDate(),
                month: e(o[r.getMonth()]),
                year: r.getFullYear(),
                hours24: i(a),
                hours12: 13 > a ? a ? a: "12": a - 12,
                minutes: i(r.getMinutes()),
                seconds: i(r.getSeconds()),
                amPm: e(12 > a ? "AM" : "PM")
            }) : ""
        }
    }
    var r = t("util/util"), o = /(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/, s = /[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i, a = /^\d+$/, l = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], u = {
        abbr: "%{number}%{symbol}",
        shortdate: "%{day} %{month}",
        longdate: "%{day} %{month} %{year}",
        full: "%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"
    }, c = 1e3, d = 60 * c, h = 60 * d, f = 24 * h, m = '<abbr title="%{expanded}">%{abbr}</abbr>';
    n.parseDate = function(t) {
        var e, i, n = t || "", u = n.toString();
        return (e = function() {
            var t;
            return a.test(u) ? parseInt(u, 10) : (t = u.match(s)) ? Date.UTC(t[7], r.indexOf(l, t[1]), t[2], t[3], t[4], t[5]) : (t = u.match(o)) ? Date.UTC(t[1], t[2] - 1, t[3], t[4], t[5], t[6]) : void 0
        }()) ? (i = new Date(e), !isNaN(i.getTime()) && i) : !1
    }, e.exports = n
}, {
    "util/util": 48
}
],
34: [function(t, e) {
    function i() {
        s = 1;
        for (var t = 0, e = a.length; e > t; t++)
            a[t]()
    }
    var n, r, o, s = 0, a = [], l=!1, u = document.createElement("a");
    /^loade|c/.test(document.readyState) && (s = 1), document.addEventListener && document.addEventListener("DOMContentLoaded", r = function() {
        document.removeEventListener("DOMContentLoaded", r, l), i()
    }, l), u.doScroll && document.attachEvent("onreadystatechange", n = function() {
        /^c/.test(document.readyState) && (document.detachEvent("onreadystatechange", n), i())
    }), o = u.doScroll ? function(t) {
        window.self != window.top ? s ? t() : a.push(t) : !function() {
            try {
                u.doScroll("left")
            } catch (e) {
                return setTimeout(function() {
                    o(t)
                }, 50)
            }
            t()
        }()
    } : function(t) {
        s ? t() : a.push(t)
    }, e.exports = o
}, {}
],
35: [function(t, e) {
    var i = t("util/tld"), n = t("tfw/util/globals");
    e.exports = function(t, e) {
        var r = /https?:\/\/([^\/]+).*/i;
        return t = t || document.referrer, t = r.test(t) && RegExp.$1, e = e || document.location.host, n.dnt()?!0 : i.isUrlSensitive(e)?!0 : t && i.isUrlSensitive(t)?!0 : document.navigator ? 1 == document.navigator.doNotTrack : navigator ? 1 == navigator.doNotTrack || 1 == navigator.msDoNotTrack : !1
    }
}, {
    "tfw/util/globals": 21,
    "util/tld": 44
}
],
36: [function(t, e) {
    function i(t) {
        return t = t || window, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : t.matchMedia ? t.matchMedia("only screen and (min-resolution: 144dpi)").matches : !1
    }
    function n(t) {
        return t = t || b, /(Trident|MSIE \d)/.test(t)
    }
    function r(t) {
        return t = t || b, /MSIE 6/.test(t)
    }
    function o(t) {
        return t = t || b, /MSIE 7/.test(t)
    }
    function s(t) {
        return t = t || b, /MSIE 8/.test(t)
    }
    function a(t) {
        return t = t || b, /MSIE 9/.test(t)
    }
    function l(t) {
        return t = t || b, /(iPad|iPhone|iPod)/.test(t)
    }
    function u(t) {
        return t = t || b, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
    }
    function c() {
        return y
    }
    function d(t, e) {
        return t = t || window, e = e || b, t.postMessage&&!(n(e) && t.opener)
    }
    function h(t) {
        t = t || navigator;
        try {
            return !!t.plugins["Shockwave Flash"]||!!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        } catch (e) {
            return !1
        }
    }
    function f(t, e, i) {
        return t = t || window, e = e || navigator, i = i || b, "ontouchstart"in t || /Opera Mini/.test(i) || e.msMaxTouchPoints > 0
    }
    function m() {
        var t = document.body.style;
        return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
    }
    var w = t("util/domready"), p = t("util/typevalidator"), g = t("util/logger"), v = t("tfw/util/globals"), b = window.navigator.userAgent, y=!1, _=!1, T = "twitter-csp-test";
    window.twttr = window.twttr || {}, twttr.verifyCSP = function(t) {
        var e = document.getElementById(T);
        _=!0, y=!!t, e && e.parentNode.removeChild(e)
    }, w(function() {
        var t;
        return r() || o() ? y=!1 : p.asBoolean(v.val("widgets:csp")) ? y=!0 : (t = document.createElement("script"), t.id = T, t.text = "twttr.verifyCSP(false);", document.body.appendChild(t), void window.setTimeout(function() {
            _ || (g.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'), g.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied."))
        }, 5e3))
    }), e.exports = {
        retina: i,
        anyIE: n,
        ie6: r,
        ie7: o,
        ie8: s,
        ie9: a,
        ios: l,
        android: u,
        cspEnabled: c,
        flashEnabled: h,
        canPostMessage: d,
        touch: f,
        cssTransitions: m
    }
}, {
    "tfw/util/globals": 21,
    "util/domready": 34,
    "util/logger": 40,
    "util/typevalidator": 46
}
],
37: [function(t, e) {
    var i = t("util/util"), n = {
        bind: function(t, e) {
            return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
        },
        unbind: function(t, e) {
            if (this._handlers[t])
                if (e) {
                    var n = i.indexOf(this._handlers[t], e);
                    n >= 0 && this._handlers[t].splice(n, 1)
                } else 
                    this._handlers[t] = []
        },
        trigger: function(t, e) {
            var n = this._handlers && this._handlers[t];
            e = e || {}, e.type = t, i.forEach(n, function(t) {
                i.async(i.bind(t, this, [e]))
            })
        }
    };
    e.exports = {
        Emitter: n
    }
}, {
    "util/util": 48
}
],
38: [function(t, e) {
    var i = t("util/util");
    e.exports = function(t, e, n) {
        var r;
        if (n = n || document, t = t || {}, e = e || {}, t.name) {
            try {
                r = n.createElement('<iframe name="' + t.name + '"></iframe>')
            } catch (o) {
                r = n.createElement("iframe"), r.name = t.name
            }
            delete t.name
        } else 
            r = n.createElement("iframe");
        return t.id && (r.id = t.id, delete t.id), r.allowtransparency = "true", r.scrolling = "no", r.setAttribute("frameBorder", 0), r.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
            r.setAttribute(t, e)
        }), i.forIn(e, function(t, e) {
            r.style[t] = e
        }), r
    }
}, {
    "util/util": 48
}
],
39: [function(t, e) {
    function i() {}
    var n, r = t("util/promise"), o = [];
    i.prototype.enqueue = function(t, e) {
        return new r(function(i) {
            o.push({
                action: t,
                resolver: i,
                note: e
            })
        })
    }, i.prototype.exec = function() {
        var t, e = o;
        if (e.length)
            for (o = []; e.length;)
                t = e.shift(), t && t.action ? t.resolver.fulfill(t.action()) : t.resolver.reject()
    }, i.prototype.delayedExec = function() {
        n && window.clearTimeout(n), n = window.setTimeout(this.exec, 100)
    }, e.exports = i
}, {
    "util/promise": 42
}
],
40: [function(t, e) {
    function i() {
        l("info", u.toRealArray(arguments))
    }
    function n() {
        l("warn", u.toRealArray(arguments))
    }
    function r() {
        l("error", u.toRealArray(arguments))
    }
    function o(t) {
        h && (d[t] = a())
    }
    function s(t) {
        var e;
        h && (d[t] ? (e = a(), i("_twitter", t, e - d[t])) : r("timeEnd() called before time() for id: ", t))
    }
    function a() {
        return window.performance&&+window.performance.now()||+new Date
    }
    function l(t, e) {
        if (window[c] && window[c][t])
            switch (e.length) {
            case 1:
                window[c][t](e[0]);
                break;
            case 2:
                window[c][t](e[0], e[1]);
                break;
            case 3:
                window[c][t](e[0], e[1], e[2]);
                break;
            case 4:
                window[c][t](e[0], e[1], e[2], e[3]);
                break;
            case 5:
                window[c][t](e[0], e[1], e[2], e[3], e[4]);
                break;
            default:
                0 !== e.length && window[c].warn && window[c].warn("too many params passed to logger." + t)
            }
    }
    var u = t("util/util"), c = ["con", "sole"].join(""), d = {}, h=!!~location.href.indexOf("tw_debug=true");
    e.exports = {
        info: i,
        warn: n,
        error: r,
        time: o,
        timeEnd: s
    }
}, {
    "util/util": 48
}
],
41: [function(t, e) {
    var i, n, r, o = t("util/querystring");
    i = function(t) {
        var e = t.search.substr(1);
        return o.decode(e)
    }, n = function(t) {
        var e = t.href, i = e.indexOf("#"), n = 0 > i ? "": e.substring(i + 1);
        return o.decode(n)
    }, r = function(t) {
        var e, r = {}, o = i(t), s = n(t);
        for (e in o)
            o.hasOwnProperty(e) && (r[e] = o[e]);
        for (e in s)
            s.hasOwnProperty(e) && (r[e] = s[e]);
        return r
    }, e.exports = {
        combined: r,
        fromQuery: i,
        fromFragment: n
    }
}, {
    "util/querystring": 43
}
],
42: [function(t, e) {
    var i = t("util/util"), n = function(t) {
        try {
            var e = t.then;
            if ("function" == typeof e)
                return !0
        } catch (i) {}
        return !1
    }, r = function(t) {
        Error.call(this, t)
    };
    r.prototype = i.createObject(Error.prototype);
    var o = function() {
        var t = [];
        return t.pump = function(e) {
            i.async(function() {
                for (var i = t.length, n = 0; i > n;)
                    n++, t.shift()(e)
            })
        }, t
    }, s = function(t, e, r, o, s, a) {
        var l=!1, u = this, c = function(t) {
            i.async(function() {
                a("fulfilled"), o(t), e.pump(t)
            })
        }, d = function(t) {
            i.async(function() {
                a("rejected"), s(t), r.pump(t)
            })
        }, h = function(t) {
            return n(t) ? void t.then(h, d) : void c(t)
        }, f = function(t) {
            return function(e) {
                l || (l=!0, t(e))
            }
        };
        this.resolve = f(h, "resolve"), this.fulfill = f(c, "fulfill"), this.reject = f(d, "reject"), this.cancel = function() {
            u.reject(new Error("Cancel"))
        }, this.timeout = function() {
            u.reject(new Error("Timeout"))
        }, a("pending")
    }, a = function(t) {
        var e, i, n = new o, r = new o, a = "pending";
        this._addAcceptCallback = function(t) {
            n.push(t), "fulfilled" == a && n.pump(e)
        }, this._addRejectCallback = function(t) {
            r.push(t), "rejected" == a && r.pump(i)
        };
        var l = new s(this, n, r, function(t) {
            e = t
        }, function(t) {
            i = t
        }, function(t) {
            a = t
        });
        try {
            t && t(l)
        } catch (u) {
            l.reject(u)
        }
    }, l = function(t) {
        return "function" == typeof t
    }, u = function(t, e, n) {
        return l(t) ? function() {
            try {
                var i = t.apply(null, arguments);
                e.resolve(i)
            } catch (n) {
                e.reject(n)
            }
        } : i.bind(e[n], e)
    }, c = function(t, e, i) {
        return l(t) && i._addAcceptCallback(t), l(e) && i._addRejectCallback(e), i
    };
    i.aug(a.prototype, {
        then: function(t, e) {
            var i = this;
            return new a(function(n) {
                c(u(t, n, "resolve"), u(e, n, "reject"), i)
            })
        },
        "catch": function(t) {
            var e = this;
            return new a(function(i) {
                c(null, u(t, i, "reject"), e)
            })
        }
    }), a.isThenable = n;
    var d = function(t) {
        return i.map(t, a.resolve)
    };
    a.any = function() {
        var t = d(arguments);
        return new a(function(e) {
            if (t.length) {
                var n=!1, r = function(t) {
                    n || (n=!0, e.resolve(t))
                }, o = function(t) {
                    n || (n=!0, e.reject(t))
                };
                i.forEach(t, function(t) {
                    t.then(r, o)
                })
            } else 
                e.reject("No futures passed to Promize.any()")
        })
    }, a.every = function() {
        var t = d(arguments);
        return new a(function(e) {
            if (t.length) {
                var n = new Array(t.length), r = 0, o = function(i, o) {
                    r++, n[i] = o, r == t.length && e.resolve(n)
                };
                i.forEach(t, function(t, n) {
                    t.then(i.bind(o, null, [n]), e.reject)
                })
            } else 
                e.reject("No futures passed to Promize.every()")
        })
    }, a.some = function() {
        var t = d(arguments);
        return new a(function(e) {
            if (t.length) {
                var n = 0, r = function() {
                    n++, n == t.length && e.reject()
                };
                i.forEach(t, function(t) {
                    t.then(e.resolve, r)
                })
            } else 
                e.reject("No futures passed to Promize.some()")
        })
    }, a.fulfill = function(t) {
        return new a(function(e) {
            e.fulfill(t)
        })
    }, a.resolve = function(t) {
        return new a(function(e) {
            e.resolve(t)
        })
    }, a.reject = function(t) {
        return new a(function(e) {
            e.reject(t)
        })
    }, e.exports = a
}, {
    "util/util": 48
}
],
43: [function(t, e) {
    function i(t) {
        return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
    }
    function n(t) {
        return decodeURIComponent(t)
    }
    function r(t) {
        var e, n = [];
        for (e in t)
            null !== t[e] && "undefined" != typeof t[e] && n.push(i(e) + "=" + i(t[e]));
        return n.sort().join("&")
    }
    function o(t) {
        var e, i, r, o, s = {};
        if (t)
            for (e = t.split("&"), o = 0; r = e[o]; o++)
                i = r.split("="), 2 == i.length && (s[n(i[0])] = n(i[1]));
        return s
    }
    function s(t, e) {
        var i = r(e);
        return i.length > 0 ? t.indexOf("?") >= 0 ? t + "&" + r(e) : t + "?" + r(e) : t
    }
    function a(t) {
        var e = t && t.split("?");
        return 2 == e.length ? o(e[1]) : {}
    }
    e.exports = {
        url: s,
        decodeURL: a,
        decode: o,
        encode: r,
        encodePart: i,
        decodePart: n
    }
}, {}
],
44: [function(t, e) {
    function i(t) {
        return t in o ? o[t] : o[t] = r.test(t)
    }
    function n() {
        return i(document.location.host)
    }
    var r = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i, o = {};
    e.exports = {
        isUrlSensitive: i,
        isHostPageSensitive: n
    }
}, {}
],
45: [function(t, e) {
    function i(t) {
        return "string" == typeof t && f.test(t) && RegExp.$1.length <= 20
    }
    function n(t) {
        return i(t) ? RegExp.$1 : void 0
    }
    function r(t, e) {
        var i = h.decodeURL(t);
        return e = e ||!1, i.screen_name = n(t), i.screen_name ? h.url("https://twitter.com/intent/" + (e ? "follow" : "user"), i) : void 0
    }
    function o(t) {
        return r(t, !0)
    }
    function s(t) {
        return "string" == typeof t && g.test(t)
    }
    function a(t, e) {
        return e = void 0 === e?!0 : e, s(t) ? (e ? "#" : "") + RegExp.$1 : void 0
    }
    function l(t) {
        return "string" == typeof t && m.test(t)
    }
    function u(t) {
        return l(t) && RegExp.$1
    }
    function c(t) {
        return w.test(t)
    }
    function d(t) {
        return p.test(t)
    }
    var h = t("util/querystring"), f = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i, m = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i, w = /^http(s?):\/\/(\w+\.)*twitter\.com([\:\/]|$)/i, p = /^http(s?):\/\/pbs\.twimg\.com\//, g = /^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/;
    e.exports = {
        isHashTag: s,
        hashTag: a,
        isScreenName: i,
        screenName: n,
        isStatus: l,
        status: u,
        intentForProfileURL: r,
        intentForFollowURL: o,
        isTwitterURL: c,
        isTwimgURL: d,
        regexen: {
            profile: f
        }
    }
}, {
    "util/querystring": 43
}
],
46: [function(t, e) {
    function i(t) {
        return void 0 !== t && null !== t && "" !== t
    }
    function n(t) {
        return o(t) && t%1 === 0
    }
    function r(t) {
        return o(t)&&!n(t)
    }
    function o(t) {
        return i(t)&&!isNaN(t)
    }
    function s(t) {
        return i(t) && "array" == d.toType(t)
    }
    function a(t) {
        if (!i(t))
            return !1;
        switch (t) {
        case"on":
        case"ON":
        case"true":
        case"TRUE":
            return !0;
        case"off":
        case"OFF":
        case"false":
        case"FALSE":
            return !1;
        default:
            return !!t
        }
    }
    function l(t) {
        return o(t) ? t : void 0
    }
    function u(t) {
        return r(t) ? t : void 0
    }
    function c(t) {
        return n(t) ? t : void 0
    }
    var d = t("util/util");
    e.exports = {
        hasValue: i,
        isInt: n,
        isFloat: r,
        isNumber: o,
        isArray: s,
        asInt: c,
        asFloat: u,
        asNumber: l,
        asBoolean: a
    }
}, {
    "util/util": 48
}
],
47: [function(t, e) {
    function i(t, e) {
        var i, n;
        return e = e || location, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (i = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (n = e.pathname.split("/"), n.pop(), n.push(t), t = "/" + n.join("/")), [e.protocol, "//", i, t].join(""))
    }
    function n() {
        for (var t, e = document.getElementsByTagName("link"), n = 0; t = e[n]; n++)
            if ("canonical" == t.rel)
                return i(t.href)
    }
    function r() {
        for (var t, e, i, n = document.getElementsByTagName("a"), r = document.getElementsByTagName("link"), s = [n, r], a = 0, l = 0, u = /\bme\b/; t = s[a]; a++)
            for (l = 0; e = t[l]; l++)
                if (u.test(e.rel) && (i = o.screenName(e.href)))
                    return i
    }
    var o = t("util/twitter");
    e.exports = {
        absolutize: i,
        getCanonicalURL: n,
        getScreenNameFromPage: r
    }
}, {
    "util/twitter": 45
}
],
48: [function(t, e) {
    function i(t) {
        return t && String(t).toLowerCase().indexOf("[native code]")>-1
    }
    function n(t) {
        return m(arguments, function(e) {
            o(e, function(e, i) {
                t[e] = i
            })
        }), t
    }
    function r(t) {
        return o(t, function(e, i) {
            u(i) && (r(i), c(i) && delete t[e]), (void 0 === i || null === i || "" === i) && delete t[e]
        }), t
    }
    function o(t, e) {
        for (var i in t)(!t.hasOwnProperty || t.hasOwnProperty(i)
            ) && e(i, t[i]);
        return t
    }
    function s(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }
    function a(t, e) {
        return t == s(e)
    }
    function l(t, e, i) {
        return i = i || [], function() {
            var n = p(arguments, function(t) {
                return t
            });
            return t.apply(e, i.concat(n))
        }
    }
    function u(t) {
        return t === Object(t)
    }
    function c(t) {
        if (!u(t))
            return !1;
        if (Object.keys)
            return !Object.keys(t).length;
        for (var e in t)
            if (t.hasOwnProperty(e))
                return !1;
        return !0
    }
    function d(t, e) {
        window.setTimeout(function() {
            t.call(e || null)
        }, 0)
    }
    function h(t) {
        return Array.prototype.slice.call(t)
    }
    var f = function() {
        var t = Array.prototype.indexOf;
        return i(t) ? function(e, i) {
            return e ? t.apply(e, [i]) : - 1
        } : function(t, e) {
            if (!t)
                return - 1;
            for (var i = 0, n = t.length; n > i; i++)
                if (e == t[i])
                    return i;
            return - 1
        }
    }(), m = function() {
        var t = Array.prototype.forEach;
        return i(t) ? function(e, i) {
            e && i && t.apply(e, [i])
        } : function(t, e) {
            if (t && e)
                for (var i = 0, n = t.length; n > i; i++)
                    e(t[i], i)
        }
    }(), w = function() {
        var t = Array.prototype.filter;
        return i(t) ? function(e, i) {
            return e ? i ? t.apply(e, [i]) : e : null
        } : function(t, e) {
            if (!t)
                return null;
            if (!e)
                return t;
            for (var i = [], n = 0, r = t.length; r > n; n++)
                e(t[n]) && i.push(t[n]);
            return i
        }
    }(), p = function() {
        var t = Array.prototype.map;
        return i(t) ? function(e, i) {
            return e ? i ? t.apply(e, [i]) : e : null
        } : function(t, e) {
            if (!t)
                return null;
            if (!e)
                return t;
            for (var i = [], n = 0, r = t.length; r > n; n++)
                i.push(e(t[n]));
            return i
        }
    }(), g = function() {
        var t = Array.prototype.reduce;
        return i(t) ? function(e, i, n) {
            return e ? i ? t.apply(e, [i, n]) : n : null
        } : function(t, e, i) {
            if (!t)
                return null;
            if (!e)
                return i;
            for (var n = i, r = 0, o = t.length; o > r; r++)
                n = e(n, t[r], r, t);
            return n
        }
    }(), v = function() {
        var t = String.prototype.trim;
        return i(t) ? function(e) {
            return e && t.apply(e)
        } : function(t) {
            return t && t.replace(/(^\s+|\s+$)/g, "")
        }
    }(), b = i(Object.create) ? Object.create: function(t) {
        function e() {}
        return e.prototype = t, new e
    };
    e.exports = {
        aug: n,
        async: d,
        compact: r,
        forIn: o,
        forEach: m,
        filter: w,
        map: p,
        reduce: g,
        trim: v,
        indexOf: f,
        isNative: i,
        isObject: u,
        isEmptyObject: c,
        createObject: b,
        bind: l,
        toType: s,
        isType: a,
        toRealArray: h
    }
}, {}
],
49: [function(t, e) {
    function i() {
        if (r)
            return r;
        if (s.isDynamicWidget()) {
            var t, e = 0, i = parent.frames.length;
            try {
                if (r = parent.frames[u])
                    return r
            } catch (n) {}
            if (a.anyIE())
                for (; i > e; e++)
                    try {
                        if (t = parent.frames[e], t && "function" == typeof t.openIntent)
                            return r = t
            } catch (n) {}
        }
    }
    function n() {
        var t, e, r, a, l, u, f = {};
        if ("function" === (typeof arguments[0]).toLowerCase() ? f.success = arguments[0] : f = arguments[0], t = f.success || function() {}, e = f.timeout || function() {}, r = f.nohub || function() {}, a = f.complete || function() {}, l = void 0 !== f.attempt ? f.attempt : h, !s.isDynamicWidget() || o)return r(), a(), !1;
        u = i(), l--;
        try {
            if (u && u.trigger)
                return t(u), void a()
        } catch (m) {}
        return 0 >= l ? (o=!0, e(), void a()) : + new Date - c > d * h ? (o=!0, void r()) : void window.setTimeout(function() {
            n({
                success: t,
                timeout: e,
                nohub: r,
                attempt: l,
                complete: a
            })
        }, d)
    }
    var r, o, s = t("tfw/util/env"), a = t("util/env"), l = "twttrHubFrameSecure", u = "http:" == document.location.protocol ? "twttrHubFrame": l, c =+ new Date, d = 100, h = 20;
    e.exports = {
        withHub: n,
        contextualHubId: u,
        secureHubId: l
    }
}, {
    "tfw/util/env": 20,
    "util/env": 36
}
],
50: [function(t, e) {
    function i() {}
    var n = t("util/util"), r = t("util/events");
    n.aug(i.prototype, r.Emitter, {
        transportMethod: "",
        init: function() {},
        send: function(t) {
            var e;
            this._ready ? this._performSend(t) : e = this.bind("ready", function() {
                this.unbind("ready", e), this._performSend(t)
            })
        },
        ready: function() {
            this.trigger("ready", this), this._ready=!0
        },
        isReady: function() {
            return !!this._ready
        },
        receive: function(t) {
            this.trigger("message", t)
        }
    }), e.exports = {
        Connection: i
    }
}, {
    "util/events": 37,
    "util/util": 48
}
],
51: [function(t, e) {
    function i(t, e) {
        var i = e || Math.floor(100 * Math.random()), n = ['<object id="xdflashshim' + i + '" name="xdflashshim' + i + '"', 'type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"', 'width="1" height="1" style="position:absolute;left:-9999px;top:-9999px;">', '<param name="movie" value="' + t + "&debug=" + window.__XDDEBUG__ + '">', '<param name="wmode" value="window">', '<param name="allowscriptaccess" value="always">', "</object>"].join(" ");
        return n
    }
    e.exports = {
        object: i
    }
}, {}
],
52: [function(require, module, exports) {
    function f(t) {
        return 10 > t ? "0" + t : t
    }
    function quote(t) {
        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var i, n, r, o, s, a = gap, l = e[t];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
        case"string":
            return quote(l);
        case"number":
            return isFinite(l) ? String(l) : "null";
        case"boolean":
        case"null":
            return String(l);
        case"object":
            if (!l)
                return "null";
            if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                for (o = l.length, i = 0; o > i; i += 1)
                    s[i] = str(i, l) || "null";
                return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r
            }
            if (rep && "object" == typeof rep)
                for (o = rep.length, i = 0; o > i; i += 1)
                    n = rep[i], "string" == typeof n && (r = str(n, l), r && s.push(quote(n) + (gap ? ": " : ":") + r));
            else 
                for (n in l)
                    Object.hasOwnProperty.call(l, n) && (r = str(n, l), r && s.push(quote(n) + (gap ? ": " : ":") + r));
            return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
        }
    }
    window.JSON || (window.JSON = {}), "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
        var n;
        if (gap = "", indent = "", "number" == typeof i)
            for (n = 0; i > n; n += 1)
                indent += " ";
        else 
            "string" == typeof i && (indent = i);
        if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": t
        })
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var i, n, r = t[e];
            if (r && "object" == typeof r)
                for (i in r)
                    Object.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n : delete r[i]);
            return reviver.call(t, e, r)
        }
        var j;
        if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }), module.exports = JSON
}, {}
],
53: [function(t, e) {
    function i(t) {
        return (JSON.parse || JSON.decode)(t)
    }
    function n(t) {
        this.con = t
    }
    function r() {
        this.id = r.id++
    }
    var o = t("util/util"), s = t("util/events");
    t("xd/json2"), o.aug(n.prototype, {
        expose: function(t) {
            this.con.bind("message", this._handleRequest(t))
        },
        call: function(t) {
            var e, n = this;
            return this._requests || (this._requests = {}, this.con.bind("message", function(t) {
                var e;
                try {
                    t = i(t)
                } catch (r) {
                    return 
                }
                t.callback && "number" == typeof t.id && (e = n._requests[t.id]) && (t.error ? e.trigger("error", t) : e.trigger("success", t), delete n._requests[t.id])
            })), e = new r, this._requests[e.id] = e, e.send(this.con, t, Array.prototype.slice.call(arguments, 1))
        },
        _handleRequest: function(t) {
            var e = this;
            return function(n) {
                var r, o;
                try {
                    n = i(n)
                } catch (s) {
                    return 
                }
                n.callback || "number" == typeof n.id && "function" == typeof t[n.method] && (o = e._responseCallbacks(n.id), r = t[n.method].apply(t, n.params.concat(o)), "undefined" != typeof r && o[0](r))
            }
        },
        _responseCallbacks: function(t) {
            var e = this.con;
            return [function(i) {
                e.send(JSON.stringify({
                    id: t,
                    result: i,
                    callback: !0
                }))
            }, function i(n) {
                e.send(JSON.stringify({
                    id: t,
                    error: i,
                    callback: n
                }))
            }
            ]
        }
    }), r.id = 0, o.aug(r.prototype, s.Emitter, {
        send: function(t, e, i) {
            return t.send(JSON.stringify({
                id: this.id,
                method: e,
                params: i
            })), this
        },
        success: function(t) {
            return this.bind("success", t), this
        },
        error: function(t) {
            return this.bind("error", t), this
        }
    }), e.exports = function(t) {
        return new n(t)
    }
}, {
    "util/events": 37,
    "util/util": 48,
    "xd/json2": 52
}
],
54: [function(t, e) {
    function i(t) {
        var e = [];
        return u.forIn(t, function(t, i) {
            e.push(t + "=" + i)
        }), e.join(",")
    }
    function n() {}
    function r(t) {
        this.transportMethod = "PostMessage", this.options = t, this._createChild()
    }
    function o(t) {
        this.transportMethod = "Flash", this.options = t, this.token = Math.random().toString(16).substring(2), this._setup()
    }
    function s(t) {
        this.transportMethod = "Fallback", this.options = t, this._createChild()
    }
    var a, l = t("xd/base"), u = t("util/util"), c = t("util/env"), d = "__ready__", h = 0;
    n.prototype = new l.Connection, u.aug(n.prototype, {
        _createChild: function() {
            this.options.window ? this._createWindow() : this._createIframe()
        },
        _createIframe: function() {
            function t() {
                o.child = e.contentWindow, o._ready || o.init()
            }
            var e, i, n, r, o = this, s = {
                allowTransparency: !0,
                frameBorder: "0",
                scrolling: "no",
                tabIndex: "0",
                name: this._name()
            }, l = u.aug(u.aug({}, s), this.options.iframe), c=!1;
            window.postMessage ? (a || (a = document.createElement("iframe")), e = a.cloneNode(!1)) : e = document.createElement('<iframe name="' + l.name + '">'), e.id = l.name, u.forIn(l, function(t, i) {
                "style" != t && e.setAttribute(t, i)
            }), r = e.getAttribute("style"), r && "undefined" != typeof r.cssText ? r.cssText = l.style : e.style.cssText = l.style, e.addEventListener ? e.addEventListener("load", t, !1) : e.attachEvent("onload", function() {
                c || (c=!0, t())
            }), e.src = this._source(), (i = this.options.appendTo) ? i.appendChild(e) : (n = this.options.replace) ? (i = n.parentNode, i && i.replaceChild(e, n)) : document.body.insertBefore(e, document.body.firstChild)
        },
        _createWindow: function() {
            var t, e = {
                width: 550,
                height: 450,
                personalbar: "0",
                toolbar: "0",
                scrollbars: "1",
                resizable: "1"
            }, n = u.aug(u.aug({}, e), this.options.window), r = screen.width, o = screen.height, s = this._name();
            n.left = n.left || Math.round(r / 2 - n.width / 2), n.top = n.top || Math.round(o / 2 - n.height / 2), o < n.height && (n.top = 0, n.height = o), t = window.open(this._source(), s, i(n)), t && t.focus(), this.child = t, this.init()
        },
        _source: function() {
            return this.options.src
        },
        _name: function() {
            var t = "_xd_" + h++;
            return window.parent && window.parent != window && window.name && (t = window.name + t), t
        }
    }), r.prototype = new n, u.aug(r.prototype, {
        init: function() {
            function t(t) {
                t.source === e.child && (e._ready || t.data !== d ? e.receive(t.data) : e.ready())
            }
            var e = this;
            window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent("onmessage", t)
        },
        _performSend: function(t) {
            this.child.postMessage(t, this.options.src)
        }
    }), o.prototype = new n, u.aug(o.prototype, {
        _setup: function() {
            var e = this, i = t("xd/flash");
            window["__xdcb" + e.token] = {
                receive: function(t) {
                    e._ready || t !== d ? e.receive(t) : e.ready()
                },
                loaded: function() {}
            };
            var n = document.createElement("div");
            n.innerHTML = i.object("https://platform.twitter.com/xd/ft.swf?&token=" + e.token + "&parent=true&callback=__xdcb" + e.token + "&xdomain=" + e._host(), e.token), document.body.insertBefore(n, document.body.firstChild), e.proxy = n.firstChild, e._createChild()
        },
        init: function() {},
        _performSend: function(t) {
            this.proxy.send(t)
        },
        _host: function() {
            return this.options.src.replace(/https?:\/\//, "").split(/(:|\/)/)[0]
        },
        _source: function() {
            return this.options.src + (this.options.src.match(/\?/) ? "&" : "?") + "xd_token=" + window.escape(this.token)
        }
    }), s.prototype = new n, u.aug(s.prototype, {
        init: function() {},
        _performSend: function() {}
    }), e.exports = {
        connect: function(t) {
            return !c.canPostMessage() || c.anyIE() && t.window ? c.anyIE() && c.flashEnabled() ? new o(t) : new s(t) : new r(t)
        }
    }
}, {
    "util/env": 36,
    "util/util": 48,
    "xd/base": 50,
    "xd/flash": 51
}
]
}, {}, [1]);
