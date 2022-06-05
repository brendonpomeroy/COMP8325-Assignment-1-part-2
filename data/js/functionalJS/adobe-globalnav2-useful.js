/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */

/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 *
 */

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

// RequireJS Mustache template plugin
// http://github.com/jfparadis/requirejs-mustache
//
// An alternative to https://github.com/millermedeiros/requirejs-hogan-plugin
//
// Using Mustache Logic-less templates at http://mustache.github.com
// Using and RequireJS text.js at http://requirejs.org/docs/api.html#text
// @author JF Paradis
// @version 0.0.3
//
// Released under the MIT license
//
// Usage:
//   require(['backbone', 'stache!mytemplate'], function (Backbone, mytemplate) {
//     return Backbone.View.extend({
//       initialize: function(){
//         this.render();
//       },
//       render: function(){
//         this.$el.html(mytemplate({message: 'hello'}));
//     });
//   });
//
// Configuration: (optional)
//   require.config({
//     stache: {
//       extension: '.stache' // default = '.html'
//     }
//   });

(function(e, t) {
    typeof define == "function" && define.amd && define([], t), e.AdobeGlobalNav = t()
})(this, function() {
    var e, t, n;
    return function(r) {
        function v(e, t) {
            return h.call(e, t)
        }
        function m(e, t) {
            var n, r, i, s, o, u, a, f, c, h, p, v = t && t.split("/"), m = l.map, g = m && m["*"] || {};
            if (e && e.charAt(0) === ".")
                if (t) {
                    v = v.slice(0, v.length - 1), e = e.split("/"), o = e.length - 1, l.nodeIdCompat && d.test(e[o]) && (e[o] = e[o].replace(d, "")), e = v.concat(e);
                    for (c = 0; c < e.length; c += 1) {
                        p = e[c];
                        if (p === ".")
                            e.splice(c, 1), c -= 1;
                        else if (p === "..") {
                            if (c === 1 && (e[2] === ".." || e[0] === ".."))
                                break;
                                c > 0 && (e.splice(c - 1, 2), c -= 2)
                            }
                    }
                    e = e.join("/")
                } else 
                    e.indexOf("./") === 0 && (e = e.substring(2));
            if ((v || g) && m) {
                n = e.split("/");
                for (c = n.length; c > 0; c -= 1) {
                    r = n.slice(0, c).join("/");
                    if (v)
                        for (h = v.length; h > 0; h -= 1) {
                            i = m[v.slice(0, h).join("/")];
                            if (i) {
                                i = i[r];
                                if (i) {
                                    s = i, u = c;
                                    break
                                }
                            }
                        }
                    if (s)
                        break;
                    !a && g && g[r] && (a = g[r], f = c)
                }
                !s && a && (s = a, u = f), s && (n.splice(0, u, s), e = n.join("/"))
            }
            return e
        }
        function g(e, t) {
            return function() {
                return s.apply(r, p.call(arguments, 0).concat([e, t]))
            }
        }
        function y(e) {
            return function(t) {
                return m(t, e)
            }
        }
        function b(e) {
            return function(t) {
                a[e] = t
            }
        }
        function w(e) {
            if (v(f, e)) {
                var t = f[e];
                delete f[e], c[e]=!0, i.apply(r, t)
            }
            if (!v(a, e)&&!v(c, e))
                throw new Error("No " + e);
            return a[e]
        }
        function E(e) {
            var t, n = e ? e.indexOf("!"): - 1;
            return n>-1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }
        function S(e) {
            return function() {
                return l && l.config && l.config[e] || {}
            }
        }
        var i, s, o, u, a = {}, f = {}, l = {}, c = {}, h = Object.prototype.hasOwnProperty, p = [].slice, d = /\.js$/;
        o = function(e, t) {
            var n, r = E(e), i = r[0];
            return e = r[1], i && (i = m(i, t), n = w(i)), i ? n && n.normalize ? e = n.normalize(e, y(t)) : e = m(e, t) : (e = m(e, t), r = E(e), i = r[0], e = r[1], i && (n = w(i))), {
                f: i ? i + "!" + e: e,
                n: e,
                pr: i,
                p: n
            }
        }, u = {
            require: function(e) {
                return g(e)
            },
            exports: function(e) {
                var t = a[e];
                return typeof t != "undefined" ? t : a[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: a[e],
                    config: S(e)
                }
            }
        }, i = function(e, t, n, i) {
            var s, l, h, p, d, m = [], y = typeof n, E;
            i = i || e;
            if (y === "undefined" || y === "function") {
                t=!t.length && n.length ? ["require", "exports", "module"] : t;
                for (d = 0; d < t.length; d += 1) {
                    p = o(t[d], i), l = p.f;
                    if (l === "require")
                        m[d] = u.require(e);
                    else if (l === "exports")
                        m[d] = u.exports(e), E=!0;
                    else if (l === "module")
                        s = m[d] = u.module(e);
                    else if (v(a, l) || v(f, l) || v(c, l))
                        m[d] = w(l);
                    else {
                        if (!p.p)
                            throw new Error(e + " missing " + l);
                        p.p.load(p.n, g(i, !0), b(l), {}), m[d] = a[l]
                    }
                }
                h = n ? n.apply(a[e], m) : undefined;
                if (e)
                    if (s && s.exports !== r && s.exports !== a[e])
                        a[e] = s.exports;
                    else if (h !== r ||!E)
                        a[e] = h
            } else 
                e && (a[e] = n)
        }, e = t = s = function(e, t, n, a, f) {
            if (typeof e == "string")
                return u[e] ? u[e](t) : w(o(e, t).f);
            if (!e.splice) {
                l = e, l.deps && s(l.deps, l.callback);
                if (!t)
                    return;
                t.splice ? (e = t, t = n, n = null) : e = r
            }
            return t = t || function() {}, typeof n == "function" && (n = a, a = f), a ? i(r, e, t, n) : setTimeout(function() {
                i(r, e, t, n)
            }, 4), s
        }, s.config = function(e) {
            return s(e)
        }, e._defined = a, n = function(e, t, n) {
            t.splice || (n = t, t = []), !v(a, e)&&!v(f, e) && (f[e] = [e, t, n])
        }, n.amd = {
            jQuery: !0
        }
    }(), n("almond", function() {}), n("config", [], function() {
        return {
            ACCOUNT_SERVICES_ENDPOINT: "https://accounts.adobe.com/acctmgmt",
            ANALYTICS_REPORT_SUITE: "adbadobenonacdcprod",
            BEHANCE_API_KEY: "oG0ZNzT0jCMJlwpZnrElVMF4oaQMYZDc",
            BEHANCE_ASSET_CDN: "https://a2.behance.net",
            BEHANCE_ENDPOINT: "https://api.behance.net",
            BEHANCE_WHITELIST_DOMAIN: "behance.net",
            GLOBAL_NAV_ENDPOINT: "https://wwwimages2.adobe.com/assets/globalnav/v1.1.4",
            IS_LOCAL_ENV: !1,
            JSONP_TEMPLATE_DATA_CALLBACK: "_jsonpTemplateDataCallback",
            SEARCH_BUDDY_ENDPOINT: "https://www.adobe.com/cfusion/search",
            SUPPORTED_LANGUAGES: ["ar", "bg", "cs", "da", "de", "en", "es", "et", "fi", "fr", "he", "hr", "hu", "it", "ja", "ko", "lt", "lv", "nb", "nl", "pl", "pt", "ro", "ru", "sk", "sl", "sr", "sv", "tr", "uk", "zh_CN", "zh_TW"],
            VERSION: "v1.1.4"
        }
    }), n("promise", [], function() {
        var e = function() {
            this._thens = [], this._resolved=!1, this._rejected=!1, this._resolveData = null
        };
        return e.all = function(t) {
            var n = new e, r = 0, i = [], s = function(e) {
                return function(s) {
                    setTimeout(function() {
                        r++, i[e] = s, r === t.length && n._resolveAndApply(i)
                    }, 0)
                }
            }, o = function() {
                n.reject()
            };
            for (var u = 0; u < t.length; u++) {
                var a = t[u];
                a._resolved ? s(u)(a._resolveData) : a._rejected ? setTimeout(o, 0) : a.then(s(u), o)
            }
            return n
        }, e.prototype = {
            then: function(e, t) {
                this._thens.push({
                    resolve: e,
                    reject: t
                })
            },
            resolve: function(e) {
                this._thens && (this._complete("resolve", e), this._resolved=!0, this._resolveData = e)
            },
            reject: function() {
                this._thens && (this._complete("reject"), this._rejected=!0)
            },
            isComplete: function() {
                return this._resolved || this._rejected
            },
            _resolveAndApply: function(e) {
                this._thens && (this._complete("resolve", e, !0), this._resolved=!0, this._resolveData = e)
            },
            _complete: function(e, t, n) {
                for (var r = 0; r < this._thens.length; r++)
                    this._thens[r][e] && (n ? this._thens[r][e].apply(this, t) : this._thens[r][e](t));
                delete this._thens
            }
        }, e
    }), function(e, t) {
        typeof exports == "object" ? module.exports = t() : typeof n == "function" && n.amd ? n("spinner", t) : e.Spinner = t()
    }(this, function() {
        function r(e, t) {
            var n = document.createElement(e || "div"), r;
            for (r in t)
                n[r] = t[r];
            return n
        }
        function i(e) {
            for (var t = 1, n = arguments.length; t < n; t++)
                e.appendChild(arguments[t]);
            return e
        }
        function o(e, r, i, o) {
            var u = ["opacity", r, ~~(e * 100), i, o].join("-"), a = .01 + i / o * 100, f = Math.max(1 - (1 - e) / r * (100 - a), e), l = n.substring(0, n.indexOf("Animation")).toLowerCase(), c = l && "-" + l + "-" || "";
            return t[u] || (s.insertRule("@" + c + "keyframes " + u + "{" + "0%{opacity:" + f + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + r)%100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", s.cssRules.length), t[u] = 1), u
        }
        function u(t, n) {
            var r = t.style, i, s;
            n = n.charAt(0).toUpperCase() + n.slice(1);
            for (s = 0; s < e.length; s++) {
                i = e[s] + n;
                if (r[i] !== undefined)
                    return i
            }
            if (r[n] !== undefined)
                return n
        }
        function a(e, t) {
            for (var n in t)
                e.style[u(e, n) || n] = t[n];
            return e
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    e[r] === undefined && (e[r] = n[r])
            }
            return e
        }
        function l(e) {
            var t = {
                x: e.offsetLeft,
                y: e.offsetTop
            };
            while (e = e.offsetParent)
                t.x += e.offsetLeft, t.y += e.offsetTop;
            return t
        }
        function c(e, t) {
            return typeof e == "string" ? e : e[t%e.length]
        }
        function p(e) {
            this.opts = f(e || {}, p.defaults, h)
        }
        function d() {
            function e(e, t) {
                return r("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
            }
            s.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function(t, n) {
                function o() {
                    return a(e("group", {
                        coordsize: s + " " + s,
                        coordorigin: - r + " " + - r
                    }), {
                        width: s,
                        height: s
                    })
                }
                function h(t, s, u) {
                    i(f, i(a(o(), {
                        rotation: 360 / n.lines * t + "deg",
                        left: ~~s
                    }), i(a(e("roundrect", {
                        arcsize: n.corners
                    }), {
                        width: r,
                        height: n.width,
                        left: n.radius,
                        top: - n.width>>1,
                        filter: u
                    }), e("fill", {
                        color: c(n.color, t),
                        opacity: n.opacity
                    }), e("stroke", {
                        opacity: 0
                    }))))
                }
                var r = n.length + n.width, s = 2 * r, u =- (n.width + n.length) * 2 + "px", f = a(o(), {
                    position: "absolute",
                    top: u,
                    left: u
                }), l;
                if (n.shadow)
                    for (l = 1; l <= n.lines; l++)
                        h(l, - 2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (l = 1; l <= n.lines; l++)
                    h(l);
                return i(t, f)
            }, p.prototype.opacity = function(e, t, n, r) {
                var i = e.firstChild;
                r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
            }
        }
        var e = ["webkit", "Moz", "ms", "O"], t = {}, n, s = function() {
            var e = r("style", {
                type: "text/css"
            });
            return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(), h = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            position: "absolute"
        };
        p.defaults = {}, f(p.prototype, {
            spin: function(e) {
                this.stop();
                var t = this, i = t.opts, s = t.el = a(r(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                }), o = i.radius + i.length + i.width;
                e && (e.insertBefore(s, e.firstChild || null), a(s, {
                    left: i.left,
                    top: i.top
                })), s.setAttribute("role", "progressbar"), t.lines(s, t.opts);
                if (!n) {
                    var u = 0, f = (i.lines - 1) * (1 - i.direction) / 2, l, c = i.fps, h = c / i.speed, p = (1 - i.opacity) / (h * i.trail / 100), d = h / i.lines;
                    (function v() {
                        u++;
                        for (var e = 0; e < i.lines; e++)
                            l = Math.max(1 - (u + (i.lines - e) * d)%h * p, i.opacity), t.opacity(s, e * i.direction + f, l, i);
                        t.timeout = t.el && setTimeout(v, ~~(1e3 / c))
                    })()
                }
                return t
            },
            stop: function() {
                var e = this.el;
                return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = undefined), this
            },
            lines: function(e, t) {
                function l(e, n) {
                    return a(r(), {
                        position: "absolute",
                        width: t.length + t.width + "px",
                        height: t.width + "px",
                        background: e,
                        boxShadow: n,
                        transformOrigin: "left",
                        transform: "rotate("+~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
                        borderRadius: (t.corners * t.width>>1) + "px"
                    })
                }
                var s = 0, u = (t.lines - 1) * (1 - t.direction) / 2, f;
                for (; s < t.lines; s++)
                    f = a(r(), {
                        position: "absolute",
                        top: 1+~(t.width / 2) + "px",
                        transform: t.hwaccel ? "translate3d(0,0,0)": "",
                        opacity: t.opacity,
                        animation: n && o(t.opacity, t.trail, u + s * t.direction, t.lines) + " " + 1 / t.speed + "s linear infinite"
                    }), t.shadow && i(f, a(l("#000", "0 0 4px #000"), {
                        top: "2px"
                    })), i(e, i(f, l(c(t.color, s), "0 0 1px rgba(0,0,0,.1)")));
                return e
            },
            opacity: function(e, t, n) {
                t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
            }
        });
        var v = a(r("group"), {
            behavior: "url(#default#VML)"
        });
        return !u(v, "transform") && v.adj ? d() : n = u(v, "animation"), p
    }), n("utils", ["promise", "spinner"], function(e, t) {
        function n() {
            this._namespace = "globalnav", this._stylingClassPrefix = this._namespace + "__", this._jsClassPrefix = "." + this._namespace + "__js__", this._html5Elements = ["header", "footer", "section", "article", "aside", "nav", "menu"], this._supportsHTML5Elements = function() {
                var e = document.createElement("div");
                return e.innerHTML = "<nav></nav>", e.childNodes.length === 1
            }()
        }
        return n.prototype = {
            addAndroidClass: function(e) {
                this.isOldAndroid(navigator.userAgent) && this.addClass(e, "is-old-android")
            },
            addClass: function(e, t) {
                var n = this._stylingClassPrefix + t;
                e.classList ? e.classList.add(n) : this.hasClass(e, t) || (e.className = e.className + " " + n)
            },
            arrayHas: function(e, t) {
                return e.indexOf(t)>-1
            },
            clamp: function(e, t, n) {
                return Math.max(t, Math.min(e, n))
            },
            classRegExp: function(e) {
                return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
            },
            clientHeightEm: function(e) {
                return e.clientHeight / this.getPixelsPerEm()
            },
            clientWidthEm: function(e) {
                var t = e.getBoundingClientRect(), n = "width"in t ? t.width: t.right - t.left;
                return Math.round(n) / this.getPixelsPerEm()
            },
            computedProperty: function(e, t) {
                var n = this.dashedToCamelCase(t);
                return window.getComputedStyle ? getComputedStyle(e)[n] : e.currentStyle[n]
            },
            computedPropertyEm: function(e, t) {
                var n = this.computedProperty(e, t);
                return Number(n.replace("px", "")) / this.getPixelsPerEm()
            },
            createElement: function(e) {
                e = e.trim();
                var t = document.createElement("div");
                if (!this._supportsHTML5Elements) {
                    var n = this._html5Elements, r = document.createDocumentFragment();
                    for (var i = 0; i < n.length; i++)
                        r.createElement(n[i]);
                    r.appendChild(t)
                }
                return t.innerHTML = e, t.firstChild
            },
            createHoverSelector: function(e) {
                return this.noTouchSelector() + " " + e + ":hover, " + e + ":active"
            },
            createHoverChildSelector: function(e) {
                return this.noTouchSelector() + " :hover > " + e + ", " + ":active > " + e
            },
            createURLWithQueryParams: function(e, t) {
                var n = [];
                for (var r in t)
                    n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                return e + "?" + n.join("&")
            },
            css: function(e, t, n) {
                var r = this.dashedToCamelCase(t);
                e.style[r] = n
            },
            cssEm: function(e, t, n) {
                (t === "width" || t === "height") && n < 0 && (n = 0), this.css(e, t, n + "em")
            },
            cssPx: function(e, t, n) {
                (t === "width" || t === "height") && n < 0 && (n = 0), this.css(e, t, n + "px")
            },
            cssUnset: function(e, t) {
                if (!e.style.removeProperty) {
                    e.style.removeAttribute(t);
                    return 
                }
                e.style.removeProperty(t)
            },
            dashedToCamelCase: function(e) {
                return e.replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            },
            epsilon: function() {
                return 1 / this.getPixelsPerEm()
            },
            enableActivePsuedoClass: function(e) {
                if (e.touchstart === null || e.touchstart === undefined)
                    e.ontouchstart = function() {}
            },
            extend: function(e, t) {
                if (typeof e == "undefined")
                    return t;
                if (typeof e != "object")
                    return e;
                for (var n in t)
                    t.hasOwnProperty(n) && (typeof t[n] == "object" ? e[n] = this.extend(e[n], t[n]) : e[n] = t[n]);
                return e
            },
            getActiveElement: function() {
                try {
                    return document.activeElement
                } catch (e) {}
            },
            getCycledItem: function(e, t, n) {
                var r = e.length - 1;
                return t += n, n > 0 && t > r ? t = 0 : n < 0 && t < 0 && (t = r), e[t]
            },
            getElement: function(e, t) {
                return t.querySelector(this._jsClassPrefix + e)
            },
            getElements: function(e, t) {
                return t.querySelectorAll(this._jsClassPrefix + e)
            },
            getText: function(t, n, r) {
                var i = this.createURLWithQueryParams(t, n), s = new e;
                if (window.XMLHttpRequest && "withCredentials"in new XMLHttpRequest) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function() {
                        var e = 4;
                        o.readyState === e && (o.status === 200 ? s.resolve(o.responseText) : s.reject())
                    }, setTimeout(function() {
                        try {
                            o.open("GET", i);
                            if (r)
                                for (var e = 0; e < r.length; e++)
                                    o.setRequestHeader(r[e].key, r[e].value);
                            o.send()
                        } catch (t) {
                            s.reject()
                        }
                    })
                } else if (window.XDomainRequest) {
                    var u = new XDomainRequest;
                    u.onload = function() {
                        setTimeout(function() {
                            s.resolve(u.responseText)
                        }, 0)
                    }, u.onerror = u.onabort = function() {
                        s.reject()
                    }, u.onprogress = function() {}, u.ontimeout = function() {}, setTimeout(function() {
                        try {
                            u.open("GET", i), u.send()
                        } catch (e) {
                            s.reject()
                        }
                    })
                } else 
                    setTimeout(function() {
                        s.reject()
                    });
                return s
            },
            getImage: function(e, t) {
                var n = this.createURLWithQueryParams(e, t);
                setTimeout(function() {
                    var e = new Image;
                    e.src = n
                })
            },
            getJSON: function(t, n, r) {
                var i = new e, s = this.getText(t, n, r);
                return s.then(function(e) {
                    var t;
                    try {
                        t = JSON.parse(e)
                    } catch (n) {
                        i.reject();
                        return 
                    }
                    i.resolve(t)
                }, i.reject.bind(i)), i
            },
            getJSONP: function(t, n, r, i) {
                r || (r = "_jsonpCallback" + Math.random().toString(36).substring(7)), i || (i = 3e4), n.callback = this.getRootClassName() + "." + r;
                var s = this.createURLWithQueryParams(t, n), o = new e;
                this.getRootClass()[r] = function(e) {
                    o.resolve(e)
                }, setTimeout(function() {
                    o.resolved || o.reject()
                }, i);
                var u = document.createElement("script");
                return u.type = "text/javascript", u.src = s, setTimeout(function() {
                    document.getElementsByTagName("head")[0].appendChild(u)
                }, 0), o
            },
            getNamespace: function() {
                return this._namespace
            },
            getPixelsPerEm: function() {
                return 16
            },
            getRootClass: function() {
                return window.AdobeGlobalNav
            },
            getRootClassName: function() {
                return "AdobeGlobalNav"
            },
            handleLinkClicksWhichMatchCurrentURL: function(e, t) {
                var n = function(e) {
                    e.preventDefault(), setTimeout(function() {
                        t.setSelected(!1)
                    })
                }, r = e.querySelectorAll("a");
                for (var i = 0; i < r.length; i++) {
                    var s = r[i];
                    s.href === document.URL && this.listen(s, "click", n)
                }
            },
            hasClass: function(e, t) {
                var n = this._stylingClassPrefix + t;
                return e.classList ? e.classList.contains(n) : this.classRegExp(n).test(e.className)
            },
            injectSpinner: function(e) {
                var n = {
                    radius: 12,
                    width: 4,
                    length: 2,
                    lines: 60,
                    color: "#ddd"
                }, r = (new t(n)).spin(e)
            },
            insertCSSRule: function(e, t) {
                var n = this.getStyleSheet();
                n.insertRule ? n.insertRule(e + "{" + t + "}", n.cssRules.length) : n.addRule(e, t, - 1)
            },
            isKeyboardTypeControl: function(e) {
                var t = "";
                return e && e.tagName && (t = e.tagName.toLowerCase()), t == "input" && e.type != "button" && e.type != "radio" && e.type != "checkbox" || t == "textarea"
            },
            isOldAndroid: function(e) {
                var t = e.match(/android/i), n = e.match(/applewebkit\/(\d+\.\d+)/i);
                if (!t ||!n)
                    return !1;
                var r =+ n[1], i = r < 536;
                return i
            },
            isDescendant: function(e, t) {
                var n = t;
                while (n) {
                    n = n.parentNode;
                    if (e === n)
                        return !0
                }
                return !1
            },
            isIPad: function(e) {
                return e = e || navigator.userAgent, !!e.match(/iPad;/)
            },
            isNewerIOS: function(e) {
                e = e || navigator.userAgent;
                var t = e.match(/ OS (\d+)_.* like Mac OS X/);
                return t && t.length >= 2 ? t[1] >= 8 : !1
            },
            isRetinaScreen: function() {
                return window.devicePixelRatio > 1
            },
            isSmallScreen: function() {
                return window.innerWidth <= 767
            },
            isTouchScreen: function() {
                return "ontouchstart"in document.documentElement || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints > 0
            },
            listen: function(e, t, n, r, i) {
                r && i ? n = n.bind(r, i) : r && (n = n.bind(r)), e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, function(e) {
                    e.target = window.event.srcElement, e.preventDefault = function() {
                        e.returnValue=!1
                    }, e.stopPropagation = function() {
                        e.cancelBubble=!0
                    }, n(e)
                })
            },
            isURLInDomain: function(e, t) {
                var n = document.createElement("a");
                return n.href = e, this.stringEndsWith(n.hostname, t)
            },
            getStyleSheet: function() {
                if (this._styleSheet)
                    return this._styleSheet;
                var e = document.createElement("style");
                return document.getElementsByTagName("head")[0].appendChild(e), this._styleSheet = e.sheet || e.styleSheet, this._styleSheet
            },
            maxHeightEm: function(e) {
                var t = 0;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], i = this.clientHeightEm(r);
                    i > t && (t = i)
                }
                return t
            },
            noTouchSelector: function() {
                return "." + this.getNamespace() + "__external__no-touch"
            },
            offsetWidthEm: function(e) {
                return e.offsetWidth / this.getPixelsPerEm()
            },
            offsetHeightEm: function(e) {
                return e.offsetHeight / this.getPixelsPerEm()
            },
            prependElement: function(e, t) {
                e.insertBefore(t, e.firstChild)
            },
            removeClass: function(e, t) {
                var n = this._stylingClassPrefix + t;
                e.classList ? e.classList.remove(this._stylingClassPrefix + t) : e.className = e.className.replace(this.classRegExp(n), " ")
            },
            removeClassBulk: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    this.removeClass(r, t)
                }
            },
            removeElement: function(e) {
                e.parentNode.removeChild(e)
            },
            removeChildren: function(e) {
                while (e.firstChild)
                    e.removeChild(e.firstChild)
            },
            removeTransition: function(e) {
                this.css(e, "-webkit-transition", "none"), this.css(e, "-moz-transition", "none"), this.css(e, "transition", "none")
            },
            truncate: function(e, t) {
                var n = e.trim();
                return n.length <= t ? n : n.substring(0, t).trim() + "..."
            },
            _measureElementTextEm: function(e) {
                var t = document.createElement("div");
                this.css(t, "display", "inline"), this.css(t, "font-family", this.computedProperty(e, "font-family")), this.cssPx(t, "font-size", this.getPixelsPerEm()), t.innerHTML = e.innerHTML, document.body.appendChild(t);
                var n = this.offsetWidthEm(t);
                return document.body.removeChild(t), n
            },
            scaleFontSizeToFit: function(e, t, n, r) {
                var i = (t - 1) / this._measureElementTextEm(e), s = this.clamp(i, n, r);
                this.cssEm(e, "font-size", s)
            },
            setInnerText: function(e, t) {
                var n = document.createTextNode(t);
                e.innerHTML = "", e.appendChild(n)
            },
            stringEndsWith: function(e, t) {
                return e.indexOf(t, e.length - t.length)!==-1
            },
            supportsSVG: function() {
                return document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
            },
            toggleClass: function(e, t, n) {
                var r = n ? "addClass": "removeClass";
                this[r](e, t)
            },
            unlisten: function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
            },
            wrapInPromise: function(t, n) {
                if (!t)
                    return null;
                n || (n = 0);
                var r = new e;
                return setTimeout(function() {
                    r.resolve(t)
                }, n), r
            }
        }, new n
    }), n("account-services", ["config", "promise", "utils"], function(e, t, n) {
        var r = function() {
            this._token = null, this._getEntitlementsPromise = new t
        };
        return r.prototype = {
            getEntitlements: function() {
                n.getJSON(e.ACCOUNT_SERVICES_ENDPOINT + "/plan-categories", {
                    authToken: this._token
                }).then(this._resolveGetEntitlements.bind(this), this._rejectGetEntitlements.bind(this))
            },
            getEntitlementsPromise: function() {
                return this._getEntitlementsPromise
            },
            setToken: function(e) {
                this._token = e
            },
            _resolveGetEntitlements: function(e) {
                this._getEntitlementsPromise.resolve(e)
            },
            _rejectGetEntitlements: function() {
                this._getEntitlementsPromise.resolve({
                    creativeCloudUser: !1,
                    creativeCloudTeamAdmin: !1
                })
            }
        }, r
    }), n("lib/app-measurement-light", [], function() {
        function e() {
            var e = this;
            e.version = "1.4-l";
            var t = window;
            t.s_c_in || (t.s_c_il = [], t.s_c_in = 0), e._il = t.s_c_il, e._in = t.s_c_in, e._il[e._in] = e, t.s_c_in++, e._c = "s_c";
            var n = t.rb;
            n || (n = null);
            var r = t, i, s;
            try {
                i = r.parent;
                for (s = r.location; i && i.location && s && "" + i.location != "" + s && r.location && "" + i.location != "" + r.location && i.location.host == s.host;)
                    r = i, i = r.parent
            } catch (o) {}
            e.qa = function(e) {
                return "" + parseInt(e) == "" + e
            }, e.replace = function(e, t, n) {
                return !e || e.indexOf(t) < 0 ? e : e.split(t).join(n)
            }, e.escape = function(t) {
                var n, r;
                if (!t)
                    return t;
                t = encodeURIComponent(t);
                for (n = 0; n < 7; n++)
                    r = "+~!*()'".substring(n, n + 1), t.indexOf(r) >= 0 && (t = e.replace(t, r, "%" + r.charCodeAt(0).toString(16).toUpperCase()));
                return t
            }, e.unescape = function(t) {
                if (!t)
                    return t;
                t = t.indexOf("+") >= 0 ? e.replace(t, "+", " ") : t;
                try {
                    return decodeURIComponent(t)
                } catch (n) {}
                return unescape(t)
            }, e.Ta = function() {
                var n = t.location.hostname, r = e.fpCookieDomainPeriods, i;
                r || (r = e.cookieDomainPeriods);
                if (n&&!e.cookieDomain&&!/^[0-9.]+$/.test(n) && (r = r ? parseInt(r) : 2, r = r > 2 ? r : 2, i = n.lastIndexOf("."), i >= 0)) {
                    for (; i >= 0 && r > 1;)
                        i = n.lastIndexOf(".", i - 1), r--;
                    e.cookieDomain = i > 0 ? n.substring(i) : n
                }
                return e.cookieDomain
            }, e.c_r = e.cookieRead = function(t) {
                t = e.escape(t);
                var n = " " + e.d.cookie, r = n.indexOf(" " + t + "="), i = r < 0 ? r: n.indexOf(";", r);
                return t = r < 0 ? "" : e.unescape(n.substring(r + 2 + t.length, i < 0 ? n.length : i)), t != "[[B]]" ? t : ""
            }, e.c_w = e.cookieWrite = function(t, n, r) {
                var i = e.Ta(), s = e.cookieLifetime, o;
                return n = "" + n, s = s ? ("" + s).toUpperCase() : "", r && s != "SESSION" && s != "NONE" && ((o = n != "" ? parseInt(s ? s : 0) : - 60) ? (r = new Date, r.setTime(r.getTime() + o * 1e3)) : r == 1 && (r = new Date, o = r.getYear(), r.setYear(o + 5 + (o < 1900 ? 1900 : 0)))), t && s != "NONE" ? (e.d.cookie = t + "=" + e.escape(n != "" ? n : "[[B]]") + "; path=/;" + (r && s != "SESSION" ? " expires=" + r.toGMTString() + ";" : "") + (i ? " domain=" + i + ";" : ""), e.cookieRead(t) == n) : 0
            }, e.D = [], e.C = function(t, n, r) {
                if (e.ka)
                    return 0;
                e.maxDelay || (e.maxDelay = 250);
                var i = 0, s = (new Date).getTime() + e.maxDelay, o = e.d.pb, u = ["webkitvisibilitychange", "visibilitychange"];
                o || (o = e.d.qb);
                if (o && o == "prerender") {
                    if (!e.W) {
                        e.W = 1;
                        for (r = 0; r < u.length; r++)
                            e.d.addEventListener(u[r], function() {
                                var t = e.d.pb;
                                t || (t = e.d.qb), t == "visible" && (e.W = 0, e.delayReady())
                            })
                        }
                    i = 1, s = 0
                } else 
                    r || e.r("_d") && (i = 1);
                return i && (e.D.push({
                    m: t,
                    a: n,
                    t: s
                }), e.W || setTimeout(e.delayReady, e.maxDelay)), i
            }, e.delayReady = function() {
                var t = (new Date).getTime(), n = 0, r;
                for (e.r("_d") && (n = 1); e.D.length > 0;) {
                    r = e.D.shift();
                    if (n&&!r.t && r.t > t) {
                        e.D.unshift(r), setTimeout(e.delayReady, parseInt(e.maxDelay / 2));
                        break
                    }
                    e.ka = 1, e[r.m].apply(e, r.a), e.ka = 0
                }
            }, e.setAccount = e.sa = function(t) {
                var n, r;
                if (!e.C("setAccount", arguments))
                    if (e.account = t, e.allAccounts) {
                        n = e.allAccounts.concat(t.split(",")), e.allAccounts = [], n.sort();
                        for (r = 0; r < n.length; r++)(r == 0 || n[r - 1] != n[r]) 
                            && e.allAccounts.push(n[r])
                    } else 
                        e.allAccounts = t.split(",")
            }, e.J = function(t, n, r, i, s) {
                var o = "", u, a, f, l, c = 0;
                t == "contextData" && (t = "c");
                if (n) {
                    for (u in n)
                        if (!Object.prototype[u] && (!s || u.substring(0, s.length) == s) && n[u] && (!r || r.indexOf("," + (i ? i + "." : "") + u + ",") >= 0)) {
                            f=!1;
                            if (c)
                                for (a = 0; a < c.length; a++)
                                    u.substring(0, c[a].length) == c[a] && (f=!0);
                                    if (!f && (o == "" && (o += "&" + t + "."), a = n[u], s && (u = u.substring(s.length)), u.length > 0))
                                        if (f = u.indexOf("."), f > 0)
                                            a = u.substring(0, f), f = (s ? s : "") + a + ".", c || (c = []), c.push(f), o += e.J(a, n, r, i, f);
                                        else if (typeof a == "boolean" && (a = a ? "true" : "false"), a)
                                            o += "&" + e.escape(u) + "=" + e.escape(a)
                        }
                    o != "" && (o += "&." + t)
                }
                return o
            }, e.Va = function() {
                var t = "", n, r, i, s, o, u, a, f, l = "", c = "", h = r = "";
                n = e.c;
                if (e.pe || e.linkType)
                    if (l = e.linkTrackVars, c = e.linkTrackEvents, e.pe && (r = e.pe.substring(0, 1).toUpperCase() + e.pe.substring(1), e[r]))
                        l = e[r].ob, c = e[r].nb;
                l && (l = "," + l + "," + e.A.join(",") + ","), c && (c = "," + c + ",", l && (l += ",events,")), e.events2 && (h += (h != "" ? "," : "") + e.events2), e.AudienceManagement && e.AudienceManagement.isReady() && (t += e.J("d", e.AudienceManagement.getEventCallConfigParams()));
                var p = {
                    supplementalDataID: "sdid",
                    timestamp: "ts",
                    dynamicVariablePrefix: "D",
                    visitorID: "vid",
                    marketingCloudVisitorID: "mid",
                    analyticsVisitorID: "aid",
                    audienceManagerLocationHint: "aamlh",
                    audienceManagerBlob: "aamb",
                    authState: "as",
                    pageURLRest: "-g",
                    referrer: "r",
                    vmk: "vmt",
                    visitorMigrationKey: "vmt",
                    charSet: "ce",
                    visitorNamespace: "ns",
                    cookieDomainPeriods: "cdp",
                    cookieLifetime: "cl",
                    variableProvider: "vvp",
                    currencyCode: "cc",
                    channel: "ch",
                    transactionID: "xact",
                    campaign: "v0",
                    latitude: "lat",
                    longitude: "lon",
                    resolution: "s",
                    colorDepth: "c",
                    javascriptVersion: "j",
                    javaEnabled: "v",
                    cookiesEnabled: "k",
                    browserWidth: "bw",
                    browserHeight: "bh",
                    connectionType: "ct",
                    homepage: "hp"
                };
                for (r = 0; r < n.length; r++) {
                    s = n[r], o = e[s], i = s.substring(0, 4), u = s.substring(4), !o && s == "events" && h && (o = h, h = "");
                    if (o && (!l || l.indexOf("," + s + ",") >= 0)) {
                        if (p[s])
                            s = p[s];
                        else 
                            switch (s) {
                            case"pageURL":
                                s = "g", o.length > 255 && (e.pageURLRest = o.substring(255), o = o.substring(0, 255));
                                break;
                            case"visitorMigrationServer":
                                s = "vmf", e.ssl && e.visitorMigrationServerSecure && (o = "");
                                break;
                            case"visitorMigrationServerSecure":
                                s = "vmf", !e.ssl && e.visitorMigrationServer && (o = "");
                                break;
                            case"events":
                                h && (o += (o != "" ? "," : "") + h);
                                if (c) {
                                    u = o.split(","), o = "";
                                    for (i = 0; i < u.length; i++)
                                        a = u[i], f = a.indexOf("="), f >= 0 && (a = a.substring(0, f)), f = a.indexOf(":"), f >= 0 && (a = a.substring(0, f)), c.indexOf("," + a + ",") >= 0 && (o += (o ? "," : "") + u[i])
                                    }
                                    break;
                                case"events2":
                                    o = "";
                                    break;
                                case"contextData":
                                    t += e.J("c", e[s], l, s), o = "";
                                    break;
                                default:
                                    e.qa(u) && (i == "prop" ? s = "c" + u : i == "eVar" ? s = "v" + u : i == "list" ? s = "l" + u : i == "hier" && (s = "h" + u, o = o.substring(0, 255)))
                                }
                        o && (t += "&" + s + "=" + (s.substring(0, 3) != "pev" ? e.escape(o) : o))
                    }
                    s == "pev3" && e.g && (t += e.g)
                }
                return t
            }, e.fb = function() {
                var t, n, r = e.linkURL, i, s;
                e.aa = 1, r&&!e.linkLeaveQueryString && (i = r.indexOf("?"), i >= 0 && (r = r.substring(0, i))), e.linkURL = r
            }, e.Wa = function() {
                var t = e.aa, n = e.linkType, r = e.linkURL, i = e.linkName;
                return n && (r || i) && (n = n.toLowerCase(), n != "d" && n != "e" && (n = "o"), e.pe = "lnk_" + n, e.pev1 = r ? e.escape(r) : "", e.pev2 = i ? e.escape(i) : "", t = 1), e.abort && (t = 0), t
            }, e.Xa = function() {
                if (!e.mb) {
                    var t = new Date, n = r.location, i, s, o = s = i = "", u = "", a = "", f = "1.2", l = e.cookieWrite("s_cc", "true", 0) ? "Y": "N", c = "", h = "";
                    if (t.setUTCDate && (f = "1.3", 0..toPrecision && (f = "1.5", t = [], t.forEach))) {
                        f = "1.6", s = 0, i = {};
                        try {
                            s = new Iterator(i), s.next && (f = "1.7", t.reduce && (f = "1.8", f.trim && (f = "1.8.1", Date.parse && (f = "1.8.2", Object.create && (f = "1.8.5")))))
                        } catch (p) {}
                    }
                    i = screen.width + "x" + screen.height, o = navigator.javaEnabled() ? "Y" : "N", s = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, u = e.w.innerWidth ? e.w.innerWidth : e.d.documentElement.offsetWidth, a = e.w.innerHeight ? e.w.innerHeight : e.d.documentElement.offsetHeight;
                    try {
                        e.b.addBehavior("#default#homePage"), c = e.b.ub(n) ? "Y" : "N"
                    } catch (d) {}
                    try {
                        e.b.addBehavior("#default#clientCaps"), h = e.b.connectionType
                    } catch (v) {}
                    e.resolution = i, e.colorDepth = s, e.javascriptVersion = f, e.javaEnabled = o, e.cookiesEnabled = l, e.browserWidth = u, e.browserHeight = a, e.connectionType = h, e.homepage = c, e.mb = 1
                }
            }, e.I = {}, e.loadModule = function(n, r) {
                var i = e.I[n];
                if (!i) {
                    i = t["AppMeasurement_Module_" + n] ? new t["AppMeasurement_Module_" + n](e) : {}, e.I[n] = e[n] = i, i.Da = function() {
                        return i.Ga
                    }, i.Ha = function(t) {
                        if (i.Ga = t)
                            e[n + "_onLoad"] = t, e.C(n + "_onLoad", [e, i], 1) || t(e, i)
                    };
                    try {
                        Object.defineProperty ? Object.defineProperty(i, "onLoad", {
                            get: i.Da,
                            set: i.Ha
                        }) : i._olc = 1
                    } catch (s) {
                        i._olc = 1
                    }
                }
                r && (e[n + "_onLoad"] = r, e.C(n + "_onLoad", [e, i], 1) || r(e, i))
            }, e.r = function(t) {
                var n, r;
                for (n in e.I)
                    if (!Object.prototype[n] && (r = e.I[n])) {
                        r._olc && r.onLoad && (r._olc = 0, r.onLoad(e, r));
                        if (r[t] && r[t]())
                            return 1
                    }
                return 0
            }, e.$a = function() {
                var t = Math.floor(Math.random() * 1e13), n = e.visitorSampling, r = e.visitorSamplingGroup;
                r = "s_vsn_" + (e.visitorNamespace ? e.visitorNamespace : e.account) + (r ? "_" + r : "");
                var i = e.cookieRead(r);
                if (n) {
                    i && (i = parseInt(i));
                    if (!i) {
                        if (!e.cookieWrite(r, t))
                            return 0;
                        i = t
                    }
                    if (i%1e4 > v)
                        return 0
                }
                return 1
            }, e.K = function(t, n) {
                var r, i, s, o, u, a;
                for (r = 0; r < 2; r++) {
                    i = r > 0 ? e.ha : e.c;
                    for (s = 0; s < i.length; s++)
                        if (o = i[s], (u = t[o]) || t["!" + o]) {
                            if (!n && o == "contextData" && e[o])
                                for (a in e[o])
                                    u[a] || (u[a] = e[o][a]);
                                    e[o] = u
                        }
                }
            }, e.ya = function(t, n) {
                var r, i, s, o;
                for (r = 0; r < 2; r++) {
                    i = r > 0 ? e.ha : e.c;
                    for (s = 0; s < i.length; s++)
                        o = i[s], t[o] = e[o], !n&&!t[o] && (t["!" + o] = 1)
                }
            }, e.Sa = function(e) {
                var t, n, r, i, s, o = 0, u, a = "", f = "";
                if (e && e.length > 255 && (t = "" + e, n = t.indexOf("?"), n > 0 && (u = t.substring(n + 1), t = t.substring(0, n), i = t.toLowerCase(), r = 0, i.substring(0, 7) == "http://" ? r += 7 : i.substring(0, 8) == "https://" && (r += 8), n = i.indexOf("/", r), n > 0 && (i = i.substring(r, n), s = t.substring(n), t = t.substring(0, n), i.indexOf("google") >= 0 ? o = ",q,ie,start,search_key,word,kw,cd," : i.indexOf("yahoo.co") >= 0 && (o = ",p,ei,"), o && u)))) {
                    if ((e = u.split("&")) && e.length > 1) {
                        for (r = 0; r < e.length; r++)
                            i = e[r], n = i.indexOf("="), n > 0 && o.indexOf("," + i.substring(0, n) + ",") >= 0 ? a += (a ? "&" : "") + i : f += (f ? "&" : "") + i;
                        a && f ? u = a + "&" + f : f = ""
                    }
                    n = 253 - (u.length - f.length) - t.length, e = t + (n > 0 ? s.substring(0, n) : "") + "?" + u
                }
                return e
            }, e.T=!1, e.O=!1, e.Fa = function(t) {
                e.marketingCloudVisitorID = t, e.O=!0, e.l()
            }, e.Q=!1, e.L=!1, e.Aa = function(t) {
                e.analyticsVisitorID = t, e.L=!0, e.l()
            }, e.S=!1, e.N=!1, e.Ca = function(t) {
                e.audienceManagerLocationHint = t, e.N=!0, e.l()
            }, e.R=!1, e.M=!1, e.Ba = function(t) {
                e.audienceManagerBlob = t, e.M=!0, e.l()
            }, e.isReadyToTrack = function() {
                var t=!0, n = e.visitor;
                if (n && n.isAllowed()) {
                    !e.T&&!e.marketingCloudVisitorID && n.getMarketingCloudVisitorID && (e.T=!0, e.marketingCloudVisitorID = n.getMarketingCloudVisitorID([e, e.Fa]), e.marketingCloudVisitorID) && (e.O=!0), !e.Q&&!e.analyticsVisitorID && n.getAnalyticsVisitorID && (e.Q=!0, e.analyticsVisitorID = n.getAnalyticsVisitorID([e, e.Aa]), e.analyticsVisitorID) && (e.L=!0), !e.S&&!e.audienceManagerLocationHint && n.getAudienceManagerLocationHint && (e.S=!0, e.audienceManagerLocationHint = n.getAudienceManagerLocationHint([e, e.Ca]), e.audienceManagerLocationHint) && (e.N=!0), !e.R&&!e.audienceManagerBlob && n.getAudienceManagerBlob && (e.R=!0, e.audienceManagerBlob = n.getAudienceManagerBlob([e, e.Ba]), e.audienceManagerBlob) && (e.M=!0);
                    if (e.T&&!e.O&&!e.marketingCloudVisitorID || e.Q&&!e.L&&!e.analyticsVisitorID || e.S&&!e.N&&!e.audienceManagerLocationHint || e.R&&!e.M&&!e.audienceManagerBlob)
                        t=!1
                }
                return t
            }, e.k = n, e.o = 0, e.callbackWhenReadyToTrack = function(t, r, i) {
                var s;
                s = {}, s.Ma = t, s.La = r, s.Ia = i, e.k == n && (e.k = []), e.k.push(s), e.o == 0 && (e.o = setInterval(e.l, 100))
            }, e.l = function() {
                var t;
                if (e.isReadyToTrack()) {
                    e.o && (clearInterval(e.o), e.o = 0);
                    if (e.k != n)
                        for (; e.k.length > 0;)
                            t = e.k.shift(), t.La.apply(t.Ma, t.Ia)
                }
            }, e.Ea = function(t) {
                var r, i, s = n, o = n;
                if (!e.isReadyToTrack()) {
                    r = [];
                    if (t != n)
                        for (i in s = {}, t)
                            s[i] = t[i];
                    return o = {}, e.ya(o, !0), r.push(s), r.push(o), e.callbackWhenReadyToTrack(e, e.track, r), !0
                }
                return !1
            }, e.Ua = function() {
                var t = e.cookieRead("s_fid"), n = "", r = "", i;
                i = 8;
                var s = 4;
                if (!t || t.indexOf("-") < 0) {
                    for (t = 0; t < 16; t++)
                        i = Math.floor(Math.random() * i), n += "0123456789ABCDEF".substring(i, i + 1), i = Math.floor(Math.random() * s), r += "0123456789ABCDEF".substring(i, i + 1), i = s = 16;
                    t = n + "-" + r
                }
                return e.cookieWrite("s_fid", t, 1) || (t = 0), t
            }, e.t = e.track = function(n, i) {
                var s, o = new Date, u = "s" + Math.floor(o.getTime() / 108e5)%10 + Math.floor(Math.random() * 1e13), a = o.getYear();
                a = "t=" + e.escape(o.getDate() + "/" + o.getMonth() + "/" + (a < 1900 ? a + 1900 : a) + " " + o.getHours() + ":" + o.getMinutes() + ":" + o.getSeconds() + " " + o.getDay() + " " + o.getTimezoneOffset()), e.visitor && (e.visitor.getAuthState && (e.authState = e.visitor.getAuthState()), !e.supplementalDataID && e.visitor.getSupplementalDataID && (e.supplementalDataID = e.visitor.getSupplementalDataID("AppMeasurement:" + e._in, e.expectSupplementalData?!1 : !0))), e.r("_s"), e.C("track", arguments) || (e.Ea(n) || (i && e.K(i), n && (s = {}, e.ya(s, 0), e.K(n)), e.$a() && (!e.analyticsVisitorID&&!e.marketingCloudVisitorID && (e.fid = e.Ua()), e.fb(), e.usePlugins && e.doPlugins && e.doPlugins(e), e.account && (e.abort || (e.trackOffline&&!e.timestamp && (e.timestamp = Math.floor(o.getTime() / 1e3)), o = t.location, e.pageURL || (e.pageURL = o.href ? o.href : o), !e.referrer&&!e.za && (e.referrer = r.document.referrer, e.za = 1), e.referrer = e.Sa(e.referrer), e.r("_g")), e.Wa()&&!e.abort && (e.Xa(), a += e.Va(), e.eb(u, a), e.r("_t"), e.referrer = ""))), n && e.K(s, 1)), e.abort = e.supplementalDataID = e.timestamp = e.pageURLRest = e.linkObject = e.j = e.linkURL = e.linkName = e.linkType = t.vb = e.pe = e.pev1 = e.pev2 = e.pev3 = e.g = 0)
            }, e.tl = e.trackLink = function(t, n, r, i) {
                return e.linkObject = t, e.linkType = n, e.linkName = r, e.track(i)
            }, e.clearVars = function() {
                var t, n;
                for (t = 0; t < e.c.length; t++)
                    if (n = e.c[t], n.substring(0, 4) == "prop" || n.substring(0, 4) == "eVar" || n.substring(0, 4) == "hier" || n.substring(0, 4) == "list" || n == "channel" || n == "events" || n == "eventList" || n == "products" || n == "productList" || n == "purchaseID" || n == "transactionID" || n == "state" || n == "zip" || n == "campaign")
                        e[n] = void 0
            }, e.eb = function(t, n) {
                var r, i = e.trackingServer;
                r = "";
                var s = e.dc, o = "sc.", u = e.visitorNamespace;
                i ? e.trackingServerSecure && e.ssl && (i = e.trackingServerSecure) : (u || (u = e.account, i = u.indexOf(","), i >= 0 && (u = u.substring(0, i)), u = u.replace(/[^A-Za-z0-9]/g, "")), r || (r = "2o7.net"), s = s ? ("" + s).toLowerCase() : "d1", r == "2o7.net" && (s == "d1" ? s = "112" : s == "d2" && (s = "122"), o = ""), i = u + "." + s + "." + o + r), r = e.ssl ? "https://" : "http://", s = e.AudienceManagement && e.AudienceManagement.isReady(), r += i + "/b/ss/" + e.account + "/" + (e.mobile ? "5." : "") + (s ? "10" : "1") + "/JS-" + e.version + (e.lb ? "T" : "") + "/" + t + "?AQB=1&ndh=1&pf=1&" + (s ? "callback=s_c_il[" + e._in + "].AudienceManagement.passData&" : "") + n + "&AQE=1", e.Qa(r), e.X()
            }, e.Qa = function(t) {
                e.e || e.Ya(), e.e.push(t), e.Y = e.u(), e.xa()
            }, e.Ya = function() {
                e.e = e.ab(), e.e || (e.e = [])
            }, e.ab = function() {
                var n, r;
                if (e.da()) {
                    try {
                        (r = t.localStorage.getItem(e.ba())) && (n = t.JSON.parse(r))
                    } catch (i) {}
                    return n
                }
            }, e.da = function() {
                var n=!0;
                if (!e.trackOffline ||!e.offlineFilename ||!t.localStorage ||!t.JSON)
                    n=!1;
                return n
            }, e.na = function() {
                var t = 0;
                return e.e && (t = e.e.length), e.z && t++, t
            }, e.X = function() {
                if (!e.z)
                    if (e.oa = n, e.ca)
                        e.Y > e.G && e.va(e.e), e.fa(500);
                    else {
                        var t = e.la();
                        t && (e.z = 1, e.ib(t))
                    }
            }, e.fa = function(t) {
                e.oa || (t || (t = 0), e.oa = setTimeout(e.X, t))
            }, e.la = function() {
                if (e.e.length > 0)
                    return e.e.shift()
            }, e.sb = function() {
                return !1
            }, e.ga=!1;
            var u;
            try {
                u = JSON.parse('{"x":"y"}')
            } catch (a) {
                u = null
            }
            u && u.x == "y" ? (e.ga=!0, e.P = function(e) {
                return JSON.parse(e)
            }) : t.$ && t.$.parseJSON ? (e.P = function(e) {
                return t.$.parseJSON(e)
            }, e.ga=!0) : e.P = function() {
                return null
            }, e.ib = function(n) {
                var r, i, s;
                !r && e.Za && (n = n.substring(0, 2047)), !r && e.d.createElement && e.AudienceManagement && e.AudienceManagement.isReady() && (r = e.d.createElement("SCRIPT")) && "async"in r && ((s = (s = e.d.getElementsByTagName("HEAD")) && s[0] ? s[0] : e.d.body) ? (r.type = "text/javascript", r.setAttribute("async", "async"), i = 3) : r = 0), r || (r = new Image, r.alt = ""), r.ja = function() {
                    try {
                        e.ea && (clearTimeout(e.ea), e.ea = 0), r.timeout && (clearTimeout(r.timeout), r.timeout = 0)
                    } catch (t) {}
                }, r.onload = r.kb = function() {
                    r.ja(), e.Pa(), e.z = 0, e.X();
                    if (r.Ja) {
                        r.Ja=!1;
                        try {
                            var t = e.P(r.responseText);
                            AudienceManagement.passData(t)
                        } catch (n) {}
                    }
                }, r.onabort = r.onerror = r.Ra = function() {
                    r.ja(), (e.trackOffline || e.ca) && e.z && e.e.unshift(e.Oa), e.z = 0, e.Y > e.G && e.va(e.e), e.fa(500)
                }, r.onreadystatechange = function() {
                    r.readyState == 4 && (r.status == 200 ? r.kb() : r.Ra())
                }, e.ua = e.u();
                if (i == 1 || i == 2) {
                    var o = n.indexOf("?");
                    s = n.substring(0, o), o = n.substring(o + 1), o = o.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), i == 1 ? (r.open("POST", s, !0), r.send(o)) : i == 2 && (r.open("POST", s), r.send(o))
                } else if (r.src = n, i == 3) {
                    if (e.ra)
                        try {
                            s.removeChild(e.ra)
                        } catch (u) {}
                    s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r), e.ra = e.Na
                }
                r.abort && (e.ea = setTimeout(r.abort, 5e3)), e.Oa = n, e.Na = t["s_i_" + e.replace(e.account, ",", "_")] = r
            }, e.Pa = function() {
                if (e.da()&&!(e.ta > e.G))
                    try {
                        t.localStorage.removeItem(e.ba()), e.ta = e.u()
                } catch (n) {}
            }, e.va = function(n) {
                if (e.da()) {
                    e.xa();
                    try {
                        t.localStorage.setItem(e.ba(), t.JSON.stringify(n)), e.G = e.u()
                    } catch (r) {}
                }
            }, e.xa = function() {
                if (e.trackOffline) {
                    if (!e.offlineLimit || e.offlineLimit <= 0)
                        e.offlineLimit = 10;
                    for (; e.e.length > e.offlineLimit;)
                        e.la()
                }
            }, e.forceOffline = function() {
                e.ca=!0
            }, e.forceOnline = function() {
                e.ca=!1
            }, e.ba = function() {
                return e.offlineFilename + "-" + e.visitorNamespace + e.account
            }, e.u = function() {
                return (new Date).getTime()
            }, e.Util = {
                urlEncode: e.escape,
                urlDecode: e.unescape,
                cookieRead: e.cookieRead,
                cookieWrite: e.cookieWrite,
                getQueryParam: function(n, r, i) {
                    var s;
                    return r || (r = e.pageURL ? e.pageURL : t.location), i || (i = "&"), n && r && (r = "" + r, s = r.indexOf("?"), s >= 0 && (r = i + r.substring(s + 1) + i, s = r.indexOf(i + n + "="), s >= 0 && (r = r.substring(s + i.length + n.length + 1), s = r.indexOf(i), s >= 0 && (r = r.substring(0, s)), r.length > 0))) ? e.unescape(r) : ""
                }
            }, e.A = ["timestamp", "charSet", "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "contextData", "supplementalDataID", "dynamicVariablePrefix", "visitorID", "marketingCloudVisitorID", "analyticsVisitorID", "audienceManagerLocationHint", "authState", "fid", "vmk", "visitorMigrationKey", "visitorMigrationServer", "visitorMigrationServerSecure", "fpCookieDomainPeriods", "pageName", "pageURL", "referrer", "currencyCode", "pe", "pev1", "pev2", "pev3", "pageURLRest"], e.c = e.A.concat(["purchaseID", "variableProvider", "channel", "server", "pageType", "transactionID", "campaign", "state", "zip", "events", "events2", "products", "audienceManagerBlob", "tnt"]), e.ha = ["account", "allAccounts", "visitor", "trackOffline", "offlineLimit", "offlineFilename", "usePlugins", "doPlugins", "configURL", "visitorSampling", "visitorSamplingGroup", "linkObject", "linkURL", "linkName", "linkType", "trackDownloadLinks", "trackExternalLinks", "linkLeaveQueryString", "linkTrackVars", "linkTrackEvents", "useForcedLinkTracking", "forcedLinkTrackingTimeout", "trackingServer", "trackingServerSecure", "ssl", "abort", "mobile", "dc", "maxDelay", "expectSupplementalData", "AudienceManagement"];
            for (i = 0; i <= 250; i++)
                i < 76 && e.c.push("prop" + i), e.c.push("eVar" + i), i < 6 && e.c.push("hier" + i), i < 4 && e.c.push("list" + i);
            i = ["latitude", "longitude", "resolution", "colorDepth", "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth", "browserHeight", "connectionType", "homepage"], e.c = e.c.concat(i), e.A = e.A.concat(i), e.ssl = t.location.protocol.toLowerCase().indexOf("https") >= 0, e.charSet = "UTF-8", e.contextData = {}, e.offlineFilename = "AppMeasurement.offline", e.ua = 0, e.Y = 0, e.G = 0, e.ta = 0, e.w = t, e.d = t.document;
            try {
                e.Za = navigator.appName == "Microsoft Internet Explorer"
            } catch (f) {}
        }
        return new e
    }), n("analytics", ["config", "utils", "lib/app-measurement-light"], function(e, t, n) {
        function r() {
            n.account = e.ANALYTICS_REPORT_SUITE, n.charSet = "UTF-8", n.trackingServer = "stats.adobe.com", n.trackingServerSecure = "sstats.adobe.com", n.cookieDomainPeriods = 2, n.fpCookieDomainPeriods = 2, n.linkLeaveQueryString=!1, n.linkTrackVars = "channel,prop3,prop4,prop5,eVar14,eVar28"
        }
        return r.prototype = {
            setIsLoggedIn: function(e) {
                r.prototype._isLoggedIn = e
            },
            setLocale: function(e) {
                r.prototype._locale = e
            },
            trackClickMenubarSitemap: function() {
                this._track("GlobalNav:OnClick_MenuBarSiteMapButton")
            },
            trackClickMenubarSearch: function() {
                this._track("GlobalNav:OnClick_MenuBarSearchButton")
            },
            trackClickMenubarProfile: function() {
                this._track("GlobalNav:OnClick_MenuBarProfileButton")
            },
            trackClickSiteMapSubsection: function(e) {
                this._track("GlobalNav:OnClick_SiteMapSubsection" + this._formatEventString(e) + "Button")
            },
            trackPageLoad: function() {
                this._track("GlobalNav:" + e.VERSION + ":OnLoad")
            },
            _formatEventString: function(e) {
                var t = e.split("-");
                for (var n = 0; n < t.length; n++)
                    t[n] = t[n].charAt(0).toUpperCase() + t[n].slice(1);
                return t.join("")
            },
            _track: function(e) {
                n.pageName = e, n.prop3 = window.location.hostname.toLowerCase(), n.prop4 = r.prototype._locale.toLowerCase(), n.prop5 = n.prop4 + ":GlobalNav:OnLoad", n.eVar14 = r.prototype._isLoggedIn ? "SignedIn" : "NotSignedIn", n.eVar28 = window.location.hostname.toLowerCase() + window.location.pathname.toLowerCase(), n.channel = window.location.hostname.toLowerCase().replace("www.", ""), n.tl(!0, "o", e)
            }
        }, new r
    }), n("behance", ["config", "promise", "utils"], function(e, t, n) {
        var r = function(e) {
            this._options = e, this._profile = null, this._defaultImagePath = null, this.resetProfilePromise()
        };
        return r.prototype = {
            getProfile: function(t) {
                var r = {
                    client_id: e.BEHANCE_API_KEY,
                    card: "1"
                };
                t && (r.cacheBuster = (new Date).getTime()), n.getJSONP(e.BEHANCE_ENDPOINT + "/v2/users/" + this._profile.userId, r, "_jsonpBehanceGetAvatar", 1e4).then(this._handleGetProfileResolve.bind(this), this._handleGetProfileResolve.bind(this))
            },
            getProfilePromise: function() {
                return this._getProfilePromise
            },
            getAvatarFromProfile: function(t) {
                if (t && t.images && t.images[138]) {
                    var r = t.images[138];
                    if (n.isURLInDomain(r, e.BEHANCE_WHITELIST_DOMAIN))
                        return r
                }
                return this._getDefaultImagePath()
            },
            resetProfilePromise: function() {
                return this._getProfilePromise = new t, this._getProfilePromise
            },
            setIMSProfile: function(e) {
                this._profile = e
            },
            _getDefaultImagePath: function() {
                return this._defaultImagePath || e.BEHANCE_ASSET_CDN + "/img/profile/no-image-138.jpg"
            },
            _handleGetProfileResolve: function(e) {
                if (e && e.http_code === 200 && e.user) {
                    this._getProfilePromise.resolve(e.user);
                    return 
                }
                e && e.http_code === 203 && e.user && (this._defaultImagePath = this.getAvatarFromProfile(e.user)), this._getProfilePromise.resolve(null)
            }
        }, r
    }), n("ims", ["promise"], function(e) {
        var t = function(t) {
            this._getAccessTokenPromise = new e, this._getProfilePromise = new e, this._clientSignInCallback = t.events.signIn, this._clientSignOutCallback = t.events.signOut, this._adobeid = t.adobeid, this._setupAdobeIDCallbacks(t), this._setupPromiseTimeouts(), this._adobeIMS() && this._adobeIMS().getAccessToken() && this._adobeIMS().getUserProfile() && setTimeout(function() {
                this._resolvePromises()
            }.bind(this))
        };
        return t.prototype = {
            _adobeIMS: function() {
                return window.adobeIMS
            },
            _onReady: function() {
                this._resolvePromises(), this._clientOnReady && this._clientOnReady.apply(this, arguments)
            },
            _resolvePromises: function() {
                var e = this._adobeIMS().getAccessToken();
                e ? this._getAccessTokenPromise.resolve(e) : this._getAccessTokenPromise.reject();
                var t = this._adobeIMS().getUserProfile();
                t ? this._getProfilePromise.resolve(t) : this._getProfilePromise.reject()
            },
            _setupAdobeIDCallbacks: function(e) {
                this._clientOnReady = this._adobeid.onReady, this._adobeid.onReady = this._onReady.bind(this)
            },
            _setupPromiseTimeouts: function() {
                setTimeout(function() {
                    this._getAccessTokenPromise.isComplete() || this._getAccessTokenPromise.reject(), this._getProfilePromise.isComplete() || this._getProfilePromise.reject()
                }.bind(this), 3e4)
            },
            destroy: function() {
                this._adobeid.onReady = this._clientOnReady
            },
            getAccessToken: function() {
                return this._getAccessTokenPromise
            },
            getProfile: function(e) {
                return e && this._adobeIMS().makeApiCall(this._adobeIMS().IMSAPIs.profile, {
                    bearer_token: this._adobeIMS().getAccessToken()
                }, function(e) {
                    this._adobeIMS().setProfile(e), this._getProfilePromise.resolve(e)
                }.bind(this)), this._getProfilePromise
            },
            resetProfilePromise: function() {
                return this._getProfilePromise = new e, this._getProfilePromise
            },
            signIn: function() {
                this._clientSignInCallback ? this._clientSignInCallback(function() {
                    this._adobeIMS().signIn()
                }.bind(this)) : this._adobeIMS().signIn()
            },
            signOut: function() {
                this._clientSignOutCallback ? this._clientSignOutCallback(function() {
                    this._adobeIMS().signOut()
                }.bind(this)) : this._adobeIMS().signOut()
            }
        }, t
    }), n("scroll-capture", ["utils"], function(e) {
        function t(t) {
            this._el = t, e.listen(this._el, "mousewheel", this._handleMousewheel, this), e.listen(this._el, "wheel", this._handleWheel, this), e.listen(this._el, "touchstart", this._handleTouchstart, this), e.listen(this._el, "touchmove", this._handleTouchmove, this)
        }
        return t.prototype = {
            setBodyScrollingEnabled: function(t) {
                e.toggleClass(document.body, "external__body--disable-scroll", !t && e.isTouchScreen())
            },
            _handleMousewheel: function(e) {
                this._preventParentScroll(e, - e.wheelDelta)
            },
            _handleWheel: function(e) {
                this._preventParentScroll(e, e.deltaY)
            },
            _handleTouchstart: function(e) {
                this._lastTouchY = this._getTouchY(e)
            },
            _handleTouchmove: function(e) {
                var t = this._lastTouchY - this._getTouchY(e);
                this._preventParentScroll(e, t)
            },
            _preventParentScroll: function(e, t) {
                var n = this._el, r = n.scrollTop === 0, i = n.scrollTop == n.scrollHeight - n.clientHeight;
                (r && t < 0 || i && t > 0) && e.preventDefault(), e.stopPropagation()
            },
            _getTouchY: function(e) {
                return e.touches && e.touches[0] && e.touches[0].screenY ? e.touches[0].screenY : 0
            }
        }, t
    }), n("overlay", ["scroll-capture", "utils"], function(e, t) {
        function n(n, r) {
            this._el = n, this._el.style.zIndex = r.styles.overlayZIndex, t.isNewerIOS() && (this._el.style.webkitOverflowScrolling = "touch"), this.registerCloseArea(this._el);
            var i = t.getElements("overlay__empty-space", this._el);
            for (var s = 0; s < i.length; s++) {
                var o = i[s];
                this.registerCloseArea(o)
            }
            this._scrollCapture = new e(n)
        }
        return n.prototype = {
            setSelected: function(e, n) {
                if (this._selected == e)
                    return;
                t.toggleClass(document.documentElement, "external__html", n), t.toggleClass(document.body, "external__body", n), this._scrollCapture.setBodyScrollingEnabled(!n), t.toggleClass(this._el, "overlay--selected", e), this._el.setAttribute("aria-hidden", e ? "false" : "true"), this._selected = e
            },
            setDelegate: function(e) {
                this._delegate = e
            },
            registerCloseButton: function(e) {
                t.listen(e, "click", this._handleCloseButtonClick, this)
            },
            registerCloseArea: function(e) {
                t.listen(e, "click", this._handleCloseAreaClick, this, e)
            },
            _handleCloseButtonClick: function(e) {
                this._delegate.selectSection(null)
            },
            _handleCloseAreaClick: function(e, t) {
                if (t.target != e)
                    return;
                this._delegate.selectSection(null)
            }
        }, n
    }), n("keyboard-nav", ["scroll-capture", "utils"], function(e, t) {
        function n(e, n) {
            this._el = e, this._options = n, this._currentList =- 1, this._keepInputFocused=!1, t.listen(document, "keydown", this._handleKeyDown, this)
        }
        var r = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
        return n.KEY = r, n.prototype = {
            setSelected: function(e, t) {
                if (this._selected == e)
                    return;
                this._selected = e, this._toggleTabIndex(e), e && t && (this._enableFocusStyles(), this._focusFirstItem(this._el))
            },
            keepInputFocused: function(e) {
                this._keepInputFocused=!0, this._inputEl = e, t.listen(this._inputEl, "focus", this._handleInputFocus, this), t.listen(this._inputEl, "blur", this._handleInputBlur, this)
            },
            registerNewContent: function() {
                this._toggleTabIndex(this._selected)
            },
            selectSubSection: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], i = r === t;
                    r.setAttribute("aria-hidden", i ? "false" : "true"), this._tagLists(r, i), this._toggleTabIndex(i, r)
                }
                this._subSection = t
            },
            _handleInputFocus: function() {
                this._keepInputFocused=!0
            },
            _handleInputBlur: function() {
                this._focusedEl && t.removeClass(this._focusedEl, "focused-link"), this._keepInputFocused=!1
            },
            _tagLists: function(e, t) {
                var n = e.querySelectorAll("[data-nav-list]");
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (i.querySelector("[data-nav-list]")) {
                        i.removeAttribute("data-nav-list");
                        continue
                    }
                    i.setAttribute("data-selectable", t ? "1" : "0")
                }
            },
            _updateItems: function() {
                var e = this._el.querySelectorAll("[data-nav-list]");
                if (!this._subSection)
                    this._listElements = e;
                else 
                    try {
                        this._listElements = this._el.querySelectorAll('[data-nav-list]:not([data-selectable="0"])')
                } catch (t) {
                    this._listElements = e
                }
            },
            _toggleTabIndex: function(e, n) {
                var r = this._getAllFocusElements(n), i = e ? 0: - 1;
                for (var s = 0; s < r.length; s++) {
                    var o = r[s], u = o.getAttribute("data-tab-index-override"), a = u !== null ? u: i;
                    o.tabIndex = a, t.enableActivePsuedoClass(o)
                }
            },
            _focusFirstItem: function(e) {
                setTimeout(function() {
                    var t = this._getTabbableFocusElements(e)[0];
                    t && this._focusEl(t)
                }.bind(this), 0)
            },
            _enableFocusStyles: function() {
                this._focusStylesEnabled || t.addClass(this._el, "show-focus"), this._focusStylesEnabled=!0
            },
            _handleKeyDown: function(e) {
                if (!this._selected)
                    return;
                this._updateItems();
                var t = e.keyCode;
                switch (t) {
                case r.DOWN:
                case r.UP:
                    e.preventDefault();
                case r.TAB:
                case r.LEFT:
                case r.RIGHT:
                    e.stopPropagation(), this._enableFocusStyles()
                }
                switch (t) {
                case r.TAB:
                    if (!this._getActiveEl())
                        this._focusFirstItem();
                    else {
                        var n = e.shiftKey?-1 : 1;
                        this._focusItem(n)
                    }
                    e.preventDefault();
                    break;
                case r.LEFT:
                    this._keepInputFocused || this._selectItem( - 1, "h");
                    break;
                case r.RIGHT:
                    this._keepInputFocused || this._selectItem(1, "h");
                    break;
                case r.DOWN:
                    this._keepInputFocused ? this._selectItem(1) : this._selectItem(1, "v");
                    break;
                case r.UP:
                    this._keepInputFocused ? this._selectItem( - 1) : this._selectItem( - 1, "v");
                    break;
                case r.ENTER:
                case r.SPACE:
                    var i = this._getActiveEl();
                    i && i !== this._inputEl && i.href && (this._runItem(i), e.preventDefault());
                    break;
                default:
                    this._keepInputFocused && this._focusFirstItem()
                }
            },
            _getListIndex: function() {
                var e = this._getActiveEl();
                for (var n = 0; n < this._listElements.length; n++) {
                    var r = this._listElements[n];
                    if (t.isDescendant(r, e))
                        return n
                }
                return - 1
            },
            _getTabbableFocusElements: function(e) {
                e = e || this._el;
                var t;
                try {
                    t = e.querySelectorAll('a:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"])')
                } catch (n) {
                    t = this._getAllFocusElements()
                }
                return t
            },
            _getAllFocusElements: function(e) {
                return e = e || this._el, e.querySelectorAll("a, button, input")
            },
            _focusEl: function(e) {
                this._focusedEl && t.removeClass(this._focusedEl, "focused-link");
                if (e.tabIndex===-1)
                    return;
                this._keepInputFocused ? (t.addClass(e, "focused-link"), this._focusedEl = e) : e.focus()
            },
            _getActiveEl: function() {
                return this._keepInputFocused ? this._focusedEl : document.activeElement && document.activeElement !== document.body ? document.activeElement : null
            },
            _runItem: function(e) {
                e.href && (window.location.href = e.href)
            },
            _focusItem: function(e) {
                var n = this._getTabbableFocusElements(), r = n.length - 1, i = this._getActiveEl();
                for (var s = 0; s < n.length; s++)
                    if (i === n[s]) {
                        var o = t.getCycledItem(n, s, e);
                        this._focusEl(o);
                        return 
                    }
            },
            _selectItem: function(e, n) {
                this._options._rightToLeft && n === "h" && (e*=-1);
                var r = this._getListIndex();
                if (r>-1) {
                    var i = this._listElements[r], s = i.getAttribute("data-nav-list");
                    if (s === n)
                        this._focusItem(e);
                    else {
                        var o = t.getCycledItem(this._listElements, r, e);
                        this._focusFirstItem(o)
                    }
                } else 
                    this._focusItem(e)
            }
        }, n
    }), n("icon-maker", ["utils"], function(e) {
        function t() {
            this._index = 0, this._classID = "icon-"
        }
        return t.prototype = {
            makeHoverableIcons: function(e, t, n) {
                this._parentEl = e, this._color = t, this._hoverColor = n, this._attribute = "data-hoverable-icon", this._makeIcons()
            },
            makeStaticIcons: function(e) {
                this._parentEl = e, this._hoverColor = null, this._attribute = "data-static-icon", this._makeIcons()
            },
            _makeIcons: function() {
                if (!e.supportsSVG())
                    return;
                var t = this._parentEl.querySelectorAll("[" + this._attribute + "]");
                for (var n = 0; n < t.length; n++)
                    this._currentEl = t[n], this._makeIcon()
            },
            _makeIcon: function() {
                var t = this._classID + this._index, n = "." + e.getNamespace() + "__" + t;
                this._hoverColor ? (this._addColoredDeclaration(n), this._addColoredDeclaration(n, !0)) : this._addStaticDeclaration(n), e.addClass(this._currentEl, t), this._currentEl.removeAttribute(this._attribute), this._index++
            },
            _addStaticDeclaration: function(e) {
                var t = this._makeEncodedSVG();
                this._addToSheet(e, t)
            },
            _addColoredDeclaration: function(t, n) {
                var r;
                if (n)
                    r = this._hoverColor;
                else {
                    var i = this._currentEl.getAttribute("data-icon-color");
                    r = i || this._color
                }
                var s = t;
                n && (s = e.createHoverSelector(t) + ", " + e.createHoverChildSelector(t));
                var o = this._makeEncodedSVG(r);
                this._addToSheet(s, o)
            },
            _addToSheet: function(t, n) {
                var r = 'background-image:url("' + n + '") !important';
                e.insertCSSRule(t, r)
            },
            _makeEncodedSVG: function(e) {
                var t = this._currentEl.getAttribute(this._attribute);
                if (e) {
                    var n = "<style>* { fill:" + e + "!important}" + '[fill="none"], [fill="none"] * { fill: none !important;}' + "[stroke] { stroke: " + e + "!important;}" + "</style>";
                    t = t.replace(/(<svg[\s\S]*?>)/, "$1" + n)
                }
                return "data:image/svg+xml," + encodeURIComponent(t)
            }
        }, new t
    }), n("text", ["module"], function(e) {
        var n, r, i, s, o, u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, f = typeof location != "undefined" && location.href, l = f && location.protocol && location.protocol.replace(/\:/, ""), c = f && location.hostname, h = f && (location.port || undefined), p = {}, d = e.config && e.config() || {};
        return n = {
            version: "2.0.12",
            strip: function(e) {
                if (e) {
                    e = e.replace(u, "");
                    var t = e.match(a);
                    t && (e = t[1])
                } else 
                    e = "";
                return e
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: d.createXhr || function() {
                return new XMLHttpRequest
            },
            parseName: function(e) {
                var t, n, r, i=!1, s = e.indexOf("."), o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
                return s!==-1 && (!o || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1, e.length)) : t = e, r = n || t, s = r.indexOf("!"), s!==-1 && (i = r.substring(s + 1) === "strip", r = r.substring(0, s), n ? n = r : t = r), {
                    moduleName: t,
                    ext: n,
                    strip: i
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(e, t, r, i) {
                var s, o, u, a = n.xdRegExp.exec(e);
                return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === t) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u&&!o || u === i)) : !0
            },
            finishLoad: function(e, t, r, i) {
                r = t ? n.strip(r) : r, d.isBuild && (p[e] = r), i(r)
            },
            load: function(e, t, r, i) {
                if (i && i.isBuild&&!i.inlineText) {
                    r();
                    return 
                }
                d.isBuild = i && i.isBuild;
                var s = n.parseName(e), o = s.moduleName + (s.ext ? "." + s.ext : ""), u = t.toUrl(o), a = d.useXhr || n.useXhr;
                if (u.indexOf("empty:") === 0) {
                    r();
                    return 
                }
                !f || a(u, l, c, h) ? n.get(u, function(t) {
                    n.finishLoad(e, s.strip, t, r)
                }, function(e) {
                    r.error && r.error(e)
                }) : t([o], function(e) {
                    n.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
                })
            }
        }, d.env === "node" ||!d.env && typeof process != "undefined" && process.versions&&!!process.versions.node&&!process.versions["node-webkit"] ? (r = t.nodeRequire("fs"), n.get = function(e, t, n) {
            try {
                var i = r.readFileSync(e, "utf8");
                i.indexOf("﻿") === 0 && (i = i.substring(1)), t(i)
            } catch (s) {
                n && n(s)
            }
        }) : n.get = function(e, t, r, i) {
            var s = n.createXhr(), o;
            s.open("GET", e, !0);
            if (i)
                for (o in i)
                    i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
            d.onXhr && d.onXhr(s, e), s.onreadystatechange = function(n) {
                var i, o;
                s.readyState === 4 && (i = s.status || 0, i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i), o.xhr = s, r && r(o)) : t(s.responseText), d.onXhrComplete && d.onXhrComplete(s, e))
            }, s.send(null)
        }, n
    }), function(e, t) {
        if (typeof exports == "object" && exports)
            t(exports);
        else {
            var r = {};
            t(r), typeof n == "function" && n.amd ? n("mustache", r) : e.Mustache = r
        }
    }(this, function(e) {
        function a(e, t) {
            return u.call(e, t)
        }
        function f(e) {
            return !a(r, e)
        }
        function h(e) {
            return typeof e == "function"
        }
        function p(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        function v(e) {
            return String(e).replace(/[&<>"'\/]/g, function(e) {
                return d[e]
            })
        }
        function m(e) {
            if (!c(e) || e.length !== 2)
                throw new Error("Invalid tags: " + e);
            return [new RegExp(p(e[0]) + "\\s*"), new RegExp("\\s*" + p(e[1]))]
        }
        function g(r, u) {
            function E() {
                if (v&&!g)
                    while (d.length)
                        delete h[d.pop()];
                else 
                    d = [];
                v=!1, g=!1
            }
            u = u || e.tags, r = r || "", typeof u == "string" && (u = u.split(n));
            var a = m(u), l = new w(r), c = [], h = [], d = [], v=!1, g=!1, S, x, T, N, C, k;
            while (!l.eos()) {
                S = l.pos, T = l.scanUntil(a[0]);
                if (T)
                    for (var L = 0, A = T.length; L < A; ++L)
                        N = T.charAt(L), f(N) ? d.push(h.length) : g=!0, h.push(["text", N, S, S + 1]), S += 1, N === "\n" && E();
                if (!l.scan(a[0]))
                    break;
                v=!0, x = l.scan(o) || "name", l.scan(t), x === "=" ? (T = l.scanUntil(i), l.scan(i), l.scanUntil(a[1])) : x === "{" ? (T = l.scanUntil(new RegExp("\\s*" + p("}" + u[1]))), l.scan(s), l.scanUntil(a[1]), x = "&") : T = l.scanUntil(a[1]);
                if (!l.scan(a[1]))
                    throw new Error("Unclosed tag at " + l.pos);
                C = [x, T, S, l.pos], h.push(C);
                if (x === "#" || x === "^")
                    c.push(C);
                else if (x === "/") {
                    k = c.pop();
                    if (!k)
                        throw new Error('Unopened section "' + T + '" at ' + S);
                    if (k[1] !== T)
                        throw new Error('Unclosed section "' + k[1] + '" at ' + S)
                    } else 
                        x === "name" || x === "{" || x === "&" ? g=!0 : x === "=" && (a = m(u = T.split(n)))
            }
            k = c.pop();
            if (k)
                throw new Error('Unclosed section "' + k[1] + '" at ' + l.pos);
            return b(y(h))
        }
        function y(e) {
            var t = [], n, r;
            for (var i = 0, s = e.length; i < s; ++i)
                n = e[i], n && (n[0] === "text" && r && r[0] === "text" ? (r[1] += n[1], r[3] = n[3]) : (t.push(n), r = n));
            return t
        }
        function b(e) {
            var t = [], n = t, r = [], i, s;
            for (var o = 0, u = e.length; o < u; ++o) {
                i = e[o];
                switch (i[0]) {
                case"#":
                case"^":
                    n.push(i), r.push(i), n = i[4] = [];
                    break;
                case"/":
                    s = r.pop(), s[5] = i[2], n = r.length > 0 ? r[r.length - 1][4] : t;
                    break;
                default:
                    n.push(i)
                }
            }
            return t
        }
        function w(e) {
            this.string = e, this.tail = e, this.pos = 0
        }
        function E(e, t) {
            this.view = e == null ? {} : e, this.cache = {
                ".": this.view
            }, this.parent = t
        }
        function S() {
            this.cache = {}
        }
        var t = /\s*/, n = /\s+/, r = /\S/, i = /\s*=/, s = /\s*\}/, o = /#|\^|\/|>|\{|&|=|!/, u = RegExp.prototype.test, l = Object.prototype.toString, c = Array.isArray || function(e) {
            return l.call(e) === "[object Array]"
        }, d = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        w.prototype.eos = function() {
            return this.tail === ""
        }, w.prototype.scan = function(e) {
            var t = this.tail.match(e);
            if (t && t.index === 0) {
                var n = t[0];
                return this.tail = this.tail.substring(n.length), this.pos += n.length, n
            }
            return ""
        }, w.prototype.scanUntil = function(e) {
            var t = this.tail.search(e), n;
            switch (t) {
            case - 1:
                n = this.tail, this.tail = "";
                break;
            case 0:
                n = "";
                break;
            default:
                n = this.tail.substring(0, t), this.tail = this.tail.substring(t)
            }
            return this.pos += n.length, n
        }, E.prototype.push = function(e) {
            return new E(e, this)
        }, E.prototype.lookup = function(e) {
            var t;
            if (e in this.cache)
                t = this.cache[e];
            else {
                var n = this;
                while (n) {
                    if (e.indexOf(".") > 0) {
                        t = n.view;
                        var r = e.split("."), i = 0;
                        while (t != null && i < r.length)
                            t = t[r[i++]]
                    } else 
                        t = n.view[e];
                    if (t != null)
                        break;
                    n = n.parent
                }
                this.cache[e] = t
            }
            return h(t) && (t = t.call(this.view)), t
        }, S.prototype.clearCache = function() {
            this.cache = {}
        }, S.prototype.parse = function(e, t) {
            var n = this.cache, r = n[e];
            return r == null && (r = n[e] = g(e, t)), r
        }, S.prototype.render = function(e, t, n) {
            var r = this.parse(e), i = t instanceof E ? t: new E(t);
            return this.renderTokens(r, i, n, e)
        }, S.prototype.renderTokens = function(t, n, r, i) {
            function u(e) {
                return o.render(e, n, r)
            }
            var s = "", o = this, a, f;
            for (var l = 0, p = t.length; l < p; ++l) {
                a = t[l];
                switch (a[0]) {
                case"#":
                    f = n.lookup(a[1]);
                    if (!f)
                        continue;
                    if (c(f))
                        for (var d = 0, v = f.length; d < v; ++d)
                            s += this.renderTokens(a[4], n.push(f[d]), r, i);
                    else if (typeof f == "object" || typeof f == "string")
                        s += this.renderTokens(a[4], n.push(f), r, i);
                    else if (h(f)) {
                        if (typeof i != "string")
                            throw new Error("Cannot use higher-order sections without the original template");
                        f = f.call(n.view, i.slice(a[3], a[5]), u), f != null && (s += f)
                    } else 
                        s += this.renderTokens(a[4], n, r, i);
                    break;
                case"^":
                    f = n.lookup(a[1]);
                    if (!f || c(f) && f.length === 0)
                        s += this.renderTokens(a[4], n, r, i);
                    break;
                case">":
                    if (!r)
                        continue;
                    f = h(r) ? r(a[1]) : r[a[1]], f != null && (s += this.renderTokens(this.parse(f), n, r, f));
                    break;
                case"&":
                    f = n.lookup(a[1]), f != null && (s += f);
                    break;
                case"name":
                    f = n.lookup(a[1]), f != null && (s += e.escape(f));
                    break;
                case"text":
                    s += a[1]
                }
            }
            return s
        }, e.name = "mustache.js", e.version = "0.8.1", e.tags = ["{{", "}}"];
        var x = new S;
        e.clearCache = function() {
            return x.clearCache()
        }, e.parse = function(e, t) {
            return x.parse(e, t)
        }, e.render = function(e, t, n) {
            return x.render(e, t, n)
        }, e.to_html = function(t, n, r, i) {
            var s = e.render(t, n, r);
            if (!h(i))
                return s;
            i(s)
        }, e.escape = v, e.Scanner = w, e.Context = E, e.Writer = S
    }), n("stache", ["text", "mustache"], function(e, t) {
        var n = {}, r = {}, i = "define('{pluginName}!{moduleName}', ['mustache'], function (Mustache) { var template = '{content}'; Mustache.parse( template ); return function( view ) { return Mustache.render( template, view ); } });\n";
        return {
            version: "0.0.3",
            load: function(i, s, o, u) {
                if (r[i])
                    o(r[i]);
                else {
                    var a = u.stache && u.stache.extension || ".html", f = u.stache && u.stache.path || "";
                    e.load(f + i + a, s, function(e) {
                        u.isBuild ? (n[i] = e, o()) : (t.parse(e), r[i] = function(n) {
                            return t.render(e, n)
                        }, o(r[i]))
                    }, u)
                }
            },
            write: function(t, r, s, o) {
                var u = n[r], a = u && e.jsEscape(u);
                a && s.asModule(t + "!" + r, i.replace("{pluginName}", t).replace("{moduleName}", r).replace("{content}", a))
            }
        }
    }), n("stache!profile", ["mustache"], function(e) {
        var t = '{{#profile}} <nav aria-hidden="true" data-has-list-columns="true" class="globalnav__overlay globalnav__overlay--variable-height globalnav__profile"> <div class="globalnav__overlay__root globalnav__js__overlay__empty-space"> <div class="globalnav__overlay__container globalnav__js__overlay__empty-space globalnav__js__profile__parent"> </div> </div> </nav> {{/profile}} ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), n("stache!profile-content", ["mustache"], function(e) {
        var t = '<div class="globalnav__overlay__content">   <div class="globalnav__overlay__header"> <button class="globalnav__overlay__header__close globalnav__js__close" type="button" data-tab-index-override="-1"> <span class="globalnav__icon globalnav__icon--close" data-hoverable-icon="{{all.close.icon}}"></span> </button> </div> {{#profile}}  <div class="globalnav__profile__user-info globalnav__js__profile__user-info"> <a class="globalnav__profile__user-info__avatar globalnav__js__profile__user-info__avatar" href="{{#chooseURLForLocale}}{{uploadAvatarURL}}{{/chooseURLForLocale}}"> <div class="globalnav__profile__user-info__avatar__overlay"> <span class="globalnav__icon globalnav__icon--camera" data-hoverable-icon="{{uploadAvatarIcon}}"></span> </div> <img class="globalnav__profile__user-info__avatar__image globalnav__js__profile__user-info__avatar__image"></img> </a> <div class="globalnav__profile__user-info__identity globalnav__js__profile__user-info__identity"> <div class="globalnav__profile__user-info__identity__name globalnav__js__profile__user-info__identity__name"></div> <div class="globalnav__profile__user-info__identity__email globalnav__js__profile__user-info__identity__email"></div> </div> <nav class="globalnav__profile__user-info__management globalnav__js__profile__user-info__management"> {{#actions}} {{#showHideForLocale}} <a data-action-id="{{id}}" class="globalnav__button" href="{{#chooseURLForLocale}}{{url}}{{/chooseURLForLocale}}">{{title}}</a> {{/showHideForLocale}} {{/actions}}  <button class="globalnav__profile__user-info__management__sign-out globalnav__js__profile__user-info__management__sign-out">{{signOut.title}}</button> </nav> </div>  {{#groups.length}} <div class="globalnav__profile__entitlements">  {{#ccIcon}} {{#showHideForLocale}} <figure class="globalnav__profile__entitlements__cc-figure"> <span class="globalnav__icon globalnav__icon--creative-cloud" data-static-icon="{{icon}}"></span> </figure> {{/showHideForLocale}} {{/ccIcon}} <div class="globalnav__profile__entitlements__groups"> {{#groups}} {{#showHideForLocale}} <div class="globalnav__profile__entitlements__group"> <h1 class="globalnav__profile__entitlements__group__title">{{title}}</h1> <ul data-nav-list="v" class="globalnav__profile__entitlements__group__list"> {{#items}} {{#showHideForLocale}} <li data-item-id="{{id}}" class="globalnav__profile__entitlements__group__list__item {{#itemVariants}}{{#showHideForLocale}} globalnav__profile__entitlements__group__list__item--{{variant}}{{/showHideForLocale}}{{/itemVariants}}"> <a class="globalnav__profile__entitlements__group__list__item__link" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}"> {{#hoverIcon}} <span class="globalnav__icon" data-hoverable-icon="{{icon}}"></span> {{/hoverIcon}} <span class="globalnav__profile__entitlements__group__list__item__link__title">{{title}}</span> </a> </li> {{/showHideForLocale}} {{/items}} </ul> </div> {{/showHideForLocale}} {{/groups}} </div> </div> {{/groups.length}} </div> {{/profile}} ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), typeof n == "undefined" && (n = function(e, t) {
        module.exports = t()
    }), n("templating-helpers", [], function() {
        function e() {}
        return e.prototype = {
            configure: function(t, n, r) {
                e.prototype.options = r || {}, e.prototype.Mustache = t, this.configureData(n), e.prototype.boundEscape || (e.prototype.boundEscape = e.prototype.escape.bind(this, t.escape), t.escape = e.prototype.boundEscape)
            },
            configureData: function(e) {
                return e || (e = {}), e.chooseURLForLocale || (e.chooseURLForLocale = this.chooseURLForLocale), e.showHideForLocale || (e.showHideForLocale = this.showHideForLocale), e.getLengthAfterShowHide || (e.getLengthAfterShowHide = this.getLengthAfterShowHide), e.getURLsForLanguage || (e.getURLsForLanguage = this.getURLsForLanguage), e.evaluateNestedTemplate || (e.evaluateNestedTemplate = this.evaluateNestedTemplate), e
            },
            escape: function(e, t) {
                var n = "<br>";
                t = t.replace(/<\s*br\s*\/?>/gi, n);
                var r = e(t), i = e(n);
                return r = r.replace(i, n), r = r.replace(/\&amp;(shy|#173|#xad);/gi, "&shy;"), r
            },
            chooseURLForLocale: function() {
                return function(t, n) {
                    var r = t.replace(/\W/g, "");
                    return e.prototype._chooseURLForLocale(this[r], e.prototype.options)
                }
            },
            showHideForLocale: function() {
                return function(t, n) {
                    return e.prototype._showHideForLocale(this, n(t), e.prototype.options)
                }
            },
            getLengthAfterShowHide: function() {
                return function(t, n) {
                    var r = t.replace(/\W/g, "");
                    return e.prototype._getLengthAfterShowHide(this[r], e.prototype.options)
                }
            },
            getURLsForLanguage: function() {
                return function(t, n) {
                    var r = t.replace(/\W/g, "");
                    return e.prototype._getURLsForLanguage(this[r], e.prototype.options)
                }
            },
            evaluateNestedTemplate: function() {
                return function(t, n) {
                    return e.prototype._evaluateNestedTemplate(this, n(t), e.prototype.options)
                }
            },
            itemShouldBeHiddenForLocale: function(e, t) {
                return e.hideForLocales && t.locale && this._arrayHas(e.hideForLocales, t.locale) || e.hideForLanguages && t.language && this._arrayHas(e.hideForLanguages, t.language) || e.hideForCountries && t.country && this._arrayHas(e.hideForCountries, t.country)?!0 : e.showForLocales && (t.locale&&!this._arrayHas(e.showForLocales, t.locale) || t.language&&!this._arrayHasPrefix(e.showForLocales, t.language)) || e.showForLanguages && t.language&&!this._arrayHas(e.showForLanguages, t.language) || e.showForCountries && t.country&&!this._arrayHas(e.showForCountries, t.country)?!0 : !1
            },
            _chooseURLForLocale: function(e, t) {
                var n = e, r = ["localeCodeLinks", "defaultLocaleLink", "countryCodeLinks", "languageCodeLinks", "defaultLanguageLink", "defaultLink"];
                if (e && typeof e == "object")
                    for (var i = 0; i < r.length; i++) {
                        var s = r[i];
                        n = this._getURL(e, t, s);
                        if (n)
                            break
                    }
                return encodeURI(decodeURI(n))
            },
            _getURL: function(e, t, n) {
                var r = e[n];
                if (!r)
                    return null;
                var i;
                switch (n) {
                case"localeCodeLinks":
                    return r[t.locale] || null;
                case"countryCodeLinks":
                    return r[t.country] || null;
                case"languageCodeLinks":
                    return r[t.language] || null;
                case"defaultLocaleLink":
                    i = this._codeMaps.locale[e.localeCodeType];
                    if (e.hasOwnProperty("excludeLocales") && this._arrayHas(e.excludeLocales, t.locale))
                        return null;
                    if (i && i.hasOwnProperty(t.locale)) {
                        var s = i[t.locale];
                        return r.replace(/@@LOCALE@@/g, s)
                    }
                    return null;
                case"defaultLanguageLink":
                    i = this._codeMaps.language[e.languageCodeType];
                    if (i && i.hasOwnProperty(t.language)) {
                        var o = i[t.language];
                        return r.replace(/@@LANGUAGE@@/g, o)
                    }
                    return null;
                case"defaultLink":
                    return r
                }
            },
            _showHideForLocale: function(e, t, n) {
                return this.itemShouldBeHiddenForLocale(e, n) ? "" : t
            },
            _evaluateNestedTemplate: function(e, t, n) {
                return this.configureData(e), this.Mustache.render(t, e, n)
            },
            _getLengthAfterShowHide: function(e, t) {
                var n = 0;
                for (var r = 0; r < e.length; r++)
                    this.itemShouldBeHiddenForLocale(e[r], t) || n++;
                return n
            },
            _getURLsForLanguage: function(e, t) {
                var n = e.localeCodeLinks, r = e.languageCodeLinks, i = t.language, s = 0;
                for (var o in n) {
                    s++;
                    if (n.hasOwnProperty(o)) {
                        var u;
                        "zh_CN" === o ? u = "zh_CN" : "zh_TW" === o || "zh_HK" === o ? u = "zh_TW" : u = o.split("_")[0], u !== i && (delete n[o], s--)
                    }
                }
                e.localeCodeLinks && s === 0 && delete e.localeCodeLinks;
                var a = 0;
                for (var f in r)
                    a++, r.hasOwnProperty(f) && f !== i && (delete r[f], a--);
                return e.languageCodeLinks && a === 0 && delete e.languageCodeLinks, JSON.stringify(e)
            },
            _arrayHas: function(e, t) {
                return e.indexOf(t)>-1
            },
            _arrayHasPrefix: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n].indexOf(t) === 0)
                        return !0;
                return !1
            },
            _codeMaps: {
                locale: {
                    defaultSet: {
                        ar_MENA: "mena_ar",
                        bg_BG: "bg",
                        cs_CZ: "cz",
                        da_DK: "dk",
                        de_AT: "at",
                        de_CH: "ch_de",
                        de_DE: "de",
                        de_LU: "lu_de",
                        en_AFRICA: "africa",
                        en_AU: "au",
                        en_BE: "be_en",
                        en_CA: "ca",
                        en_CY: "cy_en",
                        en_EEUROPE: "eeurope",
                        en_GB: "uk",
                        en_GR: "gr_en",
                        en_HK: "hk_en",
                        en_IE: "ie",
                        en_IL: "il_en",
                        en_IN: "in",
                        en_LU: "lu_en",
                        en_MENA: "mena_en",
                        en_MT: "mt",
                        en_NZ: "nz",
                        en_SEA: "sea",
                        es_ES: "es",
                        es_LA: "la",
                        es_MX: "mx",
                        et_EE: "ee",
                        fi_FI: "fi",
                        fr_BE: "be_fr",
                        fr_CA: "ca_fr",
                        fr_CH: "ch_fr",
                        fr_FR: "fr",
                        fr_LU: "lu_fr",
                        fr_MENA: "mena_fr",
                        he_IL: "il_he",
                        hr_HR: "hr",
                        hu_HU: "hu",
                        it_CH: "ch_it",
                        it_IT: "it",
                        ja_JP: "jp",
                        ko_KR: "kr",
                        lt_LT: "lt",
                        lv_LV: "lv",
                        nb_NO: "no",
                        nl_BE: "be_nl",
                        nl_NL: "nl",
                        pl_PL: "pl",
                        pt_BR: "br",
                        pt_PT: "pt",
                        ro_RO: "ro",
                        ru_RU: "ru",
                        sk_SK: "sk",
                        sl_SI: "si",
                        sr_RS: "rs",
                        sv_SE: "se",
                        tr_TR: "tr",
                        uk_UA: "ua",
                        zh_CN: "cn",
                        zh_HK: "hk_zh",
                        zh_TW: "tw"
                    },
                    typekit: {
                        ar_MENA: "ar-MENA",
                        bg_BG: "bg-BG",
                        cs_CZ: "cs-CZ",
                        da_DK: "da-DK",
                        de_AT: "de-AT",
                        de_CH: "de-CH",
                        de_DE: "de-DE",
                        de_LU: "de-LU",
                        en_AFRICA: "en-AFRICA",
                        en_AU: "en-AU",
                        en_BE: "en-BE",
                        en_CA: "en-CA",
                        en_CY: "en-CY",
                        en_EEUROPE: "en-EEUROPE",
                        en_GB: "en-UK",
                        en_GR: "en-GR",
                        en_HK: "en-HK",
                        en_IE: "en-IE",
                        en_IL: "en-IL",
                        en_IN: "en-IN",
                        en_LU: "en-LU",
                        en_MENA: "en-MENA",
                        en_MT: "en-MT",
                        en_NZ: "en-NZ",
                        en_SEA: "en-SEA",
                        es_ES: "es-ES",
                        es_LA: "es-LA",
                        es_MX: "es-MX",
                        et_EE: "et-EE",
                        fi_FI: "fi-FF",
                        fr_BE: "fr-BE",
                        fr_CA: "fr-CA",
                        fr_CH: "fr-CH",
                        fr_FR: "fr-FR",
                        fr_LU: "fr-LU",
                        fr_MENA: "fr-MENA",
                        he_IL: "he-IL",
                        hr_HR: "hr-HR",
                        hu_HU: "hu-HU",
                        it_CH: "it-CH",
                        it_IT: "it-IT",
                        ja_JP: "ja-JP",
                        ko_KR: "ko-KR",
                        lt_LT: "lt-LT",
                        lv_LV: "lv-LV",
                        nb_NO: "nb-NO",
                        nl_BE: "nl-BE",
                        nl_NL: "nl-NL",
                        pl_PL: "pl-PL",
                        pt_BR: "pt-BR",
                        pt_PT: "pt-PT",
                        ro_RO: "ro-RO",
                        ru_RU: "ru-RU",
                        sk_SK: "sk-SK",
                        sl_SI: "sl-SI",
                        sr_RS: "sr-RS",
                        sv_SE: "sv-SE",
                        tr_TR: "tr-TR",
                        uk_UA: "uk-UA",
                        zh_CN: "zh-CNX",
                        zh_HK: "zh-HK",
                        zh_TW: "zh-TW"
                    }
                },
                language: {
                    defaultSet: {
                        cs: "cs",
                        da: "da",
                        de: "de",
                        es: "es",
                        fi: "fi",
                        fr: "fr",
                        it: "it",
                        ja: "ja",
                        ko: "ko",
                        nb: "nb",
                        nl: "nl",
                        pl: "pl",
                        pt: "pt",
                        ru: "ru",
                        sv: "sv",
                        tr: "tr",
                        zh_TW: "zh-tw"
                    }
                }
            }
        }, new e
    }), n("templating", ["mustache", "templating-helpers", "utils"], function(e, t, n) {
        function r() {}
        return r.prototype = {
            render: function(r, i, s) {
                t.configure(e, i, s);
                var o = r(i);
                return n.createElement(o)
            }
        }, new r
    }), n("profile", ["overlay", "keyboard-nav", "icon-maker", "stache!profile", "stache!profile-content", "templating", "utils"], function(e, t, n, r, i, s, o) {
        function u(e, t) {
            this._ims = e, this._honorific = "", this._options = t, this._relayout = this._relayout.bind(this)
        }
        return u.prototype = {
            el: function() {
                return this._el
            },
            attach: function(n, i) {
                this._honorific = i.profile.honorific, this._templateData = i, this._el = s.render(r, this._templateData, this._options), n.appendChild(this._el), this.overlay = new e(this._el, this._options), this.keyboardNav = new t(this._el, this._options), this._relayout(), o.listen(window, "resize", this._relayout)
            },
            destroy: function() {
                o.unlisten(window, "resize", this._relayout)
            },
            setSelected: function(e) {
                if (!e || this._hasRenderedTemplateWithEntitlements() || this._hasScheduledSpinnerForAttachment)
                    return;
                setTimeout(this._attachSpinnerForEntitlements.bind(this), 600), this._hasScheduledSpinnerForAttachment=!0
            },
            updateWithEntitlements: function(e) {
                this._renderTemplateWithEntitlements(e), this._relayout()
            },
            updateWithEntitlementsAndAvatar: function(e, t) {
                this._renderTemplateWithEntitlements(e);
                var n = o.getElement("profile__user-info__avatar__image", this._el);
                n.src = t, this._relayout()
            },
            updateWithEntitlementsAndProfile: function(e, t) {
                this._renderTemplateWithEntitlements(e);
                var n = o.getElement("close", this._el);
                this.overlay.registerCloseButton(n), this.keyboardNav.registerNewContent();
                var r = "", i = t.countryCode ? t.countryCode.toLocaleLowerCase(): "";
                i === "jp" || i === "kr" ? (t.last_name, r += t.last_name, t.first_name && (r += " " + t.first_name), r = o.truncate(r, 25), this._honorific && (r += " " + this._honorific)) : t.first_name && (r += t.first_name, r = o.truncate(r, 25));
                var s = o.getElement("profile__user-info__identity__name", this._el);
                o.setInnerText(s, r);
                var u = o.getElement("profile__user-info__identity__email", this._el);
                o.setInnerText(u, t.email), this._relayout()
            },
            _hasRenderedTemplateWithEntitlements: function() {
                return this._subProfileContent
            },
            _addSignOutListener: function() {
                var e = o.getElement("profile__user-info__management__sign-out", this._el);
                o.listen(e, "click", function(e) {
                    this._ims.signOut()
                }, this)
            },
            _removeUnentitledItems: function(e, t) {
                var n = e;
                if (Array.isArray(n)) {
                    for (var r = n.length - 1; r >= 0; r--)
                        this._removeUnentitledItems(n[r], t) && n.splice(r, 1);
                    return !1
                }
                if (typeof n == "object") {
                    if (n.entitlements)
                        for (var i = 0; i < n.entitlements.length; i++) {
                            var s = n.entitlements[i];
                            if (!t[s])
                                return !0
                        }
                    for (var o in n)
                        this._removeUnentitledItems(n[o], t) && delete n[o];
                    return !1
                }
                return !1
            },
            _renderTemplateWithEntitlements: function(e) {
                if (this._hasRenderedTemplateWithEntitlements())
                    return;
                this._removeUnentitledItems(this._templateData.profile, e), this._subProfileContent = s.render(i, this._templateData, this._options);
                var t = o.getElement("profile__parent", this._el);
                o.removeChildren(t), t.appendChild(this._subProfileContent), n.makeHoverableIcons(this._el, this._options._iconColor, this._options._iconHoverColor), n.makeStaticIcons(this._el), this._addSignOutListener(), o.handleLinkClicksWhichMatchCurrentURL(this._el, this.overlay)
            },
            _relayout: function() {
                var e = o.getElement("profile__user-info", this._el);
                if (!e)
                    return;
                var t = o.getElement("profile__user-info__identity", this._el);
                o.cssEm(t, "width", 0);
                var n = o.clientWidthEm(e) - o.epsilon(), r = o.getElement("profile__user-info__avatar", this._el), i = o.clientWidthEm(r) + o.epsilon(), s;
                if (o.isSmallScreen())
                    s = n - i;
                else {
                    var u = o.getElement("profile__user-info__management", this._el), a = o.clientWidthEm(u) + o.epsilon();
                    s = n - i - a
                }
                o.cssEm(t, "width", s);
                var f = o.getElement("profile__user-info__identity__name", this._el), l = o.clientWidthEm(f), c = o.getElement("profile__user-info__identity__name", this._el);
                o.scaleFontSizeToFit(c, l, .625, 2.5)
            },
            _attachSpinnerForEntitlements: function() {
                if (this._hasRenderedTemplateWithEntitlements())
                    return;
                var e = o.getElement("profile__parent", this._el);
                o.injectSpinner(e)
            }
        }, u
    }), n("logging", ["utils"], function(e) {
        function t() {}
        return t.prototype = {
            consoleLoggingEnabled: function() {
                return this._consoleLoggingEnabled
            },
            setConsoleLoggingEnabled: function(e) {
                this._consoleLoggingEnabled = e
            },
            log: function(e) {
                this._consoleLoggingEnabled && window.console && console.log(e)
            },
            error: function(e) {
                if (this._consoleLoggingEnabled && window.console) {
                    var t = "Error: " + e;
                    console.log(t)
                }
            }
        }, new t
    }), n("stache!search", ["mustache"], function(e) {
        var t = '{{#search}} <form method="get" action="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}" aria-hidden="true" class="globalnav__overlay globalnav__search"> <div class="globalnav__overlay__root globalnav__js__overlay__empty-space"> <div class="globalnav__overlay__container globalnav__js__overlay__empty-space"> <div class="globalnav__overlay__content">   <div class="globalnav__overlay__header"> <button class="globalnav__overlay__header__close globalnav__js__close" type="button" data-tab-index-override="-1"> <span class="globalnav__icon globalnav__icon--close" data-hoverable-icon="{{all.close.icon}}"></span> </button> </div>  <div class="globalnav__overlay__body">  <div class="globalnav__search__inner"> <label class="globalnav__search__label globalnav__js__search__label" for="globalnav__search__input">{{label}}</label> <input type="text" name="term" id="globalnav__search__input" class="globalnav__search__input globalnav__js__search__input" autocomplete="off"> <input type="hidden" class="globalnav__js__search-loc" name="loc" value="{{#chooseURLForLocale}}{{{loc}}}{{/chooseURLForLocale}}"> </div>  <div class="globalnav__search-results globalnav__js__search-results"></div> </div> </div> </div> </div> </form> {{/search}} ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), n("stache!search-results", ["mustache"], function(e) {
        var t = '<ul class="globalnav__search-results__list"> {{#hasHublets}} {{#HUBLETS}} <li class="globalnav__search-results__item"> <a class="globalnav__search-results__img-link" href="{{#chooseURLForLocale}}{{{HOMEPAGEURL}}}{{/chooseURLForLocale}}" data-tab-index-override="-1" data-dom-analytics="search_resultLink"> <img class="globalnav__search-results__img-link__img" src="https://www.adobe.com{{#chooseURLForLocale}}{{{ICONURL}}}{{/chooseURLForLocale}}"> </a> <div class="globalnav__search-results__content"> <a class="globalnav__search-results__text-link" href="{{#chooseURLForLocale}}{{{HOMEPAGEURL}}}{{/chooseURLForLocale}}" data-dom-analytics="search_resultLink">{{TITLE}}</a> <ul class="globalnav__search-results__links-list"> {{#LINKS}} <li class="globalnav__search-results__links-list__item"> <a href="{{#chooseURLForLocale}}{{{URL}}}{{/chooseURLForLocale}}" class="globalnav__search-results__links-list__link" data-dom-analytics="search_resultSubLink">{{TITLE}}</a> </li> {{/LINKS}} </ul> </div> </li> {{/HUBLETS}} {{/hasHublets}} {{#hasSuggestions}} {{#hasHublets}} <li class="globalnav__search-results__item globalnav__search-results__item--separator"> <hr class="globalnav__search-results__hr"> </li> {{/hasHublets}} {{#SUGGESTIONS}} <li class="globalnav__search-results__item"> <a href="{{#chooseURLForLocale}}{{{DESTINATIONURL}}}{{/chooseURLForLocale}}" class="globalnav__search-results__suggestion__link" data-dom-analytics="search_suggestionLink">{{TITLE}}</a> <span class="globalnav__search-results__suggestion__blurb">{{BLURB}}</span> </li> {{/SUGGESTIONS}} {{/hasSuggestions}} {{#hasResults}} <li class="globalnav__search-results__item globalnav__search-results__item--separator"> <hr class="globalnav__search-results__hr"> </li> <li class="globalnav__search-results__item"> <a href="{{#chooseURLForLocale}}{{{resultsURL}}}{{/chooseURLForLocale}}" class="globalnav__search-results__suggestion__link" data-dom-analytics="search_seeAll">{{strings.seeAllSearchResults}} ›</a> </li> {{/hasResults}} {{^hasResults}} <li class="globalnav__search-results__item"> <h1 class="globalnav__search-results__h1"></h1> <a href="{{#chooseURLForLocale}}{{{resultsURL}}}{{/chooseURLForLocale}}" class="globalnav__search-results__no-results__link" data-dom-analytics="search_tryAdvanced">{{strings.tryAdvancedSearch}} ›</a> </li> {{/hasResults}} </ul> ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), n("search", ["config", "logging", "overlay", "keyboard-nav", "scroll-capture", "icon-maker", "stache!search", "stache!search-results", "templating", "utils"], function(e, t, n, r, i, s, o, u, a, f) {
        function c(e) {
            this._options = e, this._locale = e.locale, this._isShown=!1, this._handleOrientationChange = this._handleOrientationChange.bind(this)
        }
        var l = 600;
        return c.prototype = {
            el: function() {
                return this._el
            },
            attach: function(e, t) {
                this._el = a.render(o, t, this._options), this._templateData = t, e.appendChild(this._el), this._inputEl = f.getElement("search__input", this._el), this._labelEl = f.getElement("search__label", this._el), this._resultsEl = f.getElement("search-results", this._el), this._locValue = f.getElement("search-loc", this._el).value, this._addListeners(), this._getSiteSection(), this.setSelected(!1), this.overlay = new n(this._el, this._options);
                var i = f.getElement("close", this._el);
                this.overlay.registerCloseButton(i), this.overlay.registerCloseArea(this._resultsEl), s.makeHoverableIcons(this._el, this._options._iconColor, this._options._iconHoverColor), this.keyboardNav = new r(this._el, this._options), this.keyboardNav.keepInputFocused(this._inputEl), this.keyboardNav.registerNewContent()
            },
            _addListeners: function() {
                this._inputEl.onkeydown = this._handleKeyDown.bind(this), f.listen(this._inputEl, "input", this._handleInputEvent, this), f.listen(this._labelEl, "click", this._handleLabelClick, this), f.listen(this._el, "submit", this._handleFormSubmit, this)
            },
            _getSiteSection: function() {
                var e = window.location.pathname.replace(/(\b\/)/g, ":").replace(/(.html)|(^\/)/g, "");
                this._siteSection = e.length >= 2 ? e : "home"
            },
            destroy: function() {
                f.unlisten(window, "orientationchange", this._handleOrientationChange)
            },
            setSelected: function(e) {
                this._isShown = e, e ? (this._inputEl.focus(), setTimeout(function() {
                    this._inputEl.focus()
                }.bind(this), 400), this._resultsEl.style.display = "block", this._inputEl.value.length > 0 && this._hideLabel(), f.listen(window, "orientationchange", this._handleOrientationChange, this)) : (this._inputEl.blur(), f.unlisten(window, "orientationchange", this._handleOrientationChange))
            },
            _showLabel: function() {
                this._labelEl.style.display = "block"
            },
            _hideLabel: function() {
                this._labelEl.style.display = "none"
            },
            _handleFormSubmit: function() {
                this._query && this._inputEl.setAttribute("value", this._query)
            },
            _handleLabelClick: function(e) {
                this._inputEl.focus()
            },
            _handleKeyDown: function(e) {
                setTimeout(function() {
                    this._handleInputChange(e)
                }.bind(this), 1)
            },
            _handleInputEvent: function(e) {
                this._inputEl.onkeydown = null, this._handleInputChange(e)
            },
            _handleInputChange: function(t) {
                var n = this._inputEl.value.replace(/^\s+|\s+$/g, "");
                if (this._inputEl.value.length === 0)
                    this._clearResults(), this._showLabel();
                else {
                    this._query = n, this._hideLabel();
                    var r = this._options.locale, i = e.SEARCH_BUDDY_ENDPOINT + "/buddy/searchbuddy.cfm";
                    if (e.IS_LOCAL_ENV)
                        i = "/cors-proxy/" + i;
                    else if (location.protocol === "http:" || location.protocol === "https:")
                        i = i.replace(/^.+?:/, location.protocol);
                    var s = {
                        s: this._siteSection,
                        loc: r,
                        pre: n
                    };
                    f.getJSON(i, s).then(this._handleResultData.bind(this), this._handleResultError.bind(this))
                }
            },
            _handleResultData: function(e) {
                if (this._inputEl.value.length === 0) {
                    this._clearResults();
                    return 
                }
                e.hasSuggestions = e.SUGGESTIONS.length > 0, e.hasHublets = e.HUBLETS.length > 0, e.hasResults = e.hasSuggestions || e.hasHublets, e.resultsURL = this._getResultsURL(), e.query = this._query, e.strings = this._templateData.search.results;
                var t = a.render(u, e, this._options);
                this._clearResults(), this._resultsEl.appendChild(t), this.keyboardNav.registerNewContent()
            },
            _handleResultError: function(e) {
                t.error(e)
            },
            _handleOrientationChange: function() {
                this._inputEl.blur()
            },
            _getResultsURL: function() {
                var t = {
                    term: this._query,
                    loc: this._locValue,
                    siteSection: this._siteSection
                };
                return f.createURLWithQueryParams(e.SEARCH_BUDDY_ENDPOINT + "/index.cfm", t)
            },
            _clearResults: function() {
                this._resultsEl.innerHTML = ""
            }
        }, c
    }), n("stache!sitemap", ["mustache"], function(e) {
        var t = ' <div aria-hidden="true" class="globalnav__overlay globalnav__sitemap globalnav__js__sitemap"> <div class="globalnav__overlay__root globalnav__js__overlay__empty-space"> <div class="globalnav__overlay__container globalnav__js__overlay__empty-space"> <div class="globalnav__overlay__content globalnav__overlay__content--sitemap globalnav__js__overlay__content"> <p class="globalnav__no-js-note">{{all.noJSNote}}</p>   <div class="globalnav__overlay__header globalnav__overlay__header--sitemap"> <button class="globalnav__overlay__header__close globalnav__js__close" type="button" data-tab-index-override="-1"> <span class="globalnav__icon globalnav__icon--close" data-hoverable-icon="{{all.close.icon}}"></span> </button> </div>  {{#sitemap}} <div class="globalnav__overlay__body globalnav__overlay__body--sitemap">  {{#sectionLists}} <div data-nav-list="h" class="globalnav__sitemap__section-lists {{#sectionListsVariants}}{{#showHideForLocale}} globalnav__sitemap__section-lists--{{variant}}{{/showHideForLocale}}{{/sectionListsVariants}}"> {{#items}} <ul class="globalnav__sitemap__section-list"> {{#sections}} <li class="globalnav__sitemap__section-list__item"> <button data-section-id="{{id}}" type="button" class="globalnav__sitemap__section-list__item__button globalnav__js__sitemap__section-list__item__button globalnav__js__sitemap__section-list__item__button--{{id}}"> <div class="globalnav__sitemap__section-list__item__button__title">{{title}}</div> </button> </li> {{/sections}} </ul> {{/items}} </div> {{/sectionLists}} <div class="globalnav__sitemap__sections"> {{#sections}} <div class="globalnav__sitemap__section globalnav__js__sitemap__section globalnav__js__sitemap__{{id}} {{#sectionVariants}} globalnav__sitemap__section--{{variant}}{{/sectionVariants}}"> {{#groups}} {{#showHideForLocale}} <div class="globalnav__sitemap__group {{#header}}{{#showHideForLocale}} globalnav__sitemap__group--with-header{{/showHideForLocale}}{{/header}} {{#groupVariants}}{{#showHideForLocale}} globalnav__sitemap__group--{{variant}}{{/showHideForLocale}}{{/groupVariants}}"> {{#header}} {{#showHideForLocale}} <div class="globalnav__sitemap__group__header {{#headerVariants}}{{#showHideForLocale}} globalnav__sitemap__group__header--{{variant}}{{/showHideForLocale}}{{/headerVariants}}"> {{#staticTitle}} <span class="globalnav__sitemap__group__header__static-title">{{title}}</span> {{/staticTitle}} {{#hoverTitle}} <a class="globalnav__sitemap__group__header__hover-title" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}">{{title}}</a> {{/hoverTitle}} </div> {{/showHideForLocale}} {{/header}} <ul data-nav-list="h" class="globalnav__sitemap__group__content globalnav__sitemap__group__content--{{#getLengthAfterShowHide}}{{{items}}}{{/getLengthAfterShowHide}}"> {{#items}} {{#showHideForLocale}}  {{#iconAndText}} <li data-item-id="{{id}}" class="globalnav__sitemap__item {{#itemVariants}}{{#showHideForLocale}} globalnav__sitemap__item--{{variant}}{{/showHideForLocale}}{{/itemVariants}}"> <a class="globalnav__sitemap__item__link" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}" {{#openInNewTab}}target="_blank"{{/openInNewTab}}>  {{#hoverIcon}} <span data-hoverable-icon="{{icon}}" class="globalnav__sitemap__item__icon globalnav__icon {{#iconVariants}}{{#showHideForLocale}} globalnav__icon--{{variant}}{{/showHideForLocale}}{{/iconVariants}}"></span> {{/hoverIcon}} {{#staticIcon}} <span data-static-icon="{{icon}}" class="globalnav__sitemap__item__icon globalnav__icon {{#iconVariants}}{{#showHideForLocale}} globalnav__icon--{{variant}}{{/showHideForLocale}}{{/iconVariants}}"></span> {{/staticIcon}}  <div class="globalnav__sitemap__item__title"> <div class="globalnav__sitemap__item__title__text">{{title}}</div> </div>  {{#buttonIcon}} <span data-hoverable-icon="{{icon}}" {{#iconColor}}data-icon-color="{{color}}"{{/iconColor}} class="globalnav__sitemap__item__button-icon globalnav__icon {{#iconVariants}}{{#showHideForLocale}} globalnav__icon--{{variant}}{{/showHideForLocale}}{{/iconVariants}}"></span> {{/buttonIcon}} </a>  {{#itemDescription}} <div class="globalnav__sitemap__item__description">{{description}}</div> {{/itemDescription}}  {{#itemCallToAction}} <a class="globalnav__sitemap__item__call-to-action" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}">{{title}}</a> {{/itemCallToAction}} </li> {{/iconAndText}}  {{#htmlItem}} <li data-item-id="{{id}}" class="globalnav__sitemap__item {{#itemVariants}}{{#showHideForLocale}} globalnav__sitemap__item--{{variant}}{{/showHideForLocale}}{{/itemVariants}}"> {{#evaluateNestedTemplate}} {{{html}}} {{/evaluateNestedTemplate}} </li> {{/htmlItem}}  {{#megaIcon}} <li class="globalnav__sitemap__mega-icon {{#itemVariants}} globalnav__sitemap__item--{{variant}}{{/itemVariants}}"> <span data-static-icon="{{staticIcon}}" class="globalnav__icon {{#iconVariants}}{{#showHideForLocale}} globalnav__icon--{{variant}}{{/showHideForLocale}}{{/iconVariants}}"></span> </li> {{/megaIcon}}  {{#linkList}} <ul data-nav-list="v" class="globalnav__sitemap__link-list {{#itemVariants}}{{#showHideForLocale}} globalnav__sitemap__item--{{variant}}{{/showHideForLocale}}{{/itemVariants}}"> {{#items}} {{#showHideForLocale}} <li data-item-id="{{id}}" class="globalnav__sitemap__link-list__item"> <a class="globalnav__sitemap__link-list__item__link" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}">{{title}}</a> {{#additionalLinks}} {{#showHideForLocale}} {{^hasLinebreak}} <span class="globalnav__sitemap__link-list__item__text">&nbsp;|&nbsp;</span> {{/hasLinebreak}} {{#hasLinebreak}} </li> <li data-item-id="{{id}}" class="globalnav__sitemap__link-list__item"> {{/hasLinebreak}} <a class="globalnav__sitemap__link-list__item__link" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}">{{title}}</a> {{/showHideForLocale}} {{/additionalLinks}} </li> {{/showHideForLocale}} {{/items}} </ul> {{/linkList}}  {{#news}} <ul data-nav-list="v" class="globalnav__sitemap__news"> {{#items}} {{#showHideForLocale}} <li class="globalnav__sitemap__news__item"> <div class="globalnav__sitemap__news__item__date">{{date}}</div> <div class="globalnav__sitemap__news__item__title"> <a class="globalnav__sitemap__news__item__title__link" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}">{{title}}</a> </div> </li> {{/showHideForLocale}} {{/items}} </ul> {{/news}}  {{#newsImage}} <a class="globalnav__sitemap__news-image" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}"> <img class="globalnav__sitemap__news-image__image globalnav__js__sitemap__news-image__image" src="#" data-src="{{#src}}{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}{{/src}}" data-src-2x="{{#src-2x}}{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}{{/src-2x}}" alt="{{imageDescription}}"/> </a> {{/newsImage}} {{/showHideForLocale}} {{/items}} <div class="globalnav__stretch"></div> </ul> </div> {{/showHideForLocale}} {{/groups}} </div> {{/sections}} </div> </div> </div> </div> </div> </div> {{/sitemap}} ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), n("sitemap", ["analytics", "overlay", "keyboard-nav", "stache!sitemap", "templating", "icon-maker", "utils"], function(e, t, n, r, i, s, o) {
        function u(e) {
            this._options = e
        }
        return u.prototype = {
            el: function() {
                return this._el
            },
            attach: function(e, s, u) {
                u ? this._el = o.getElement("sitemap", e) : (this._el = i.render(r, s, this._options), e.appendChild(this._el)), this.overlay = new t(this._el, this._options), this.keyboardNav = new n(this._el, this._options), this.keyboardNav.registerNewContent();
                var a = o.getElement("close", this._el);
                this.overlay.registerCloseButton(a);
                var f = o.getElements("sitemap__section-list__item__button", this._el);
                for (var l = 0; l < f.length; l++) {
                    var c = f[l];
                    o.listen(c, "click", this._handleSectionButtonClick, this, c)
                }
                var h = o.getElement("sitemap__news-image__image", this._el);
                if (h) {
                    var p = o.isRetinaScreen() ? "data-src-2x": "data-src";
                    h.src = h.getAttribute(p), o.css(h, "display", "block")
                }
                this._selectSection(this._options.defaultSitemapSection, !0), o.handleLinkClicksWhichMatchCurrentURL(this._el, this.overlay), setTimeout(this._makeIcons.bind(this), 500)
            },
            _makeIcons: function() {
                this._iconsMade || (s.makeStaticIcons(this._el), s.makeHoverableIcons(this._el, this._options._iconColor, this._options._iconHoverColor)), this._iconsMade=!0
            },
            setSelected: function(e) {
                e && (this._makeIcons(), this._selectSection(this._selectedSectionId))
            },
            _handleSectionButtonClick: function(t, n) {
                if (this._transitioningSections)
                    return;
                var r = t.getAttribute("data-section-id");
                this._selectSection(r), e.trackClickSiteMapSubsection(r)
            },
            _selectSection: function(e, t) {
                this._selectedSectionId = e;
                var n = o.getElements("sitemap__section", this._el);
                o.removeClassBulk(n, "sitemap__section--selected");
                var r = o.getElement("sitemap__" + e, this._el);
                o.addClass(r, "sitemap__section--selected"), this._triggerSelectSectionTransition(n, r), this._selectSectionButton(e), t || this.keyboardNav.selectSubSection(n, r)
            },
            _selectSectionButton: function(e) {
                var t = o.getElements("sitemap__section-list__item__button", this._el);
                o.removeClassBulk(t, "sitemap__section-list__item__button--selected");
                var n = o.getElement("sitemap__section-list__item__button--" + e, this._el);
                o.addClass(n, "sitemap__section-list__item__button--selected")
            },
            _triggerSelectSectionTransition: function(e, t) {
                this._transitioningSections=!0, o.css(t, "z-index", ""), setTimeout(function() {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r !== t && o.css(r, "z-index", "-1")
                    }
                    this._transitioningSections=!1
                }.bind(this), 400)
            }
        }, u
    }), n("stache!header", ["mustache"], function(e) {
        var t = ' <div id="globalnav__header" class="globalnav__js__header"> {{>sitemap}} </div> ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), n("header", ["profile", "search", "sitemap", "stache!header", "templating", "utils"], function(e, t, n, r, i, s) {
        function o(e, t) {
            this._options = e, this._ims = t
        }
        return o.prototype = {
            attach: function(e) {
                if (this._el)
                    return;
                var t = "#globalnav__header";
                this._el = document.documentElement.querySelector(t);
                if (this._options.progressiveEnhancement) {
                    if (!this._el)
                        throw t + " element not found! 'progressiveEnhancement' is true, so globalnav needs static HTML."
                } else {
                    if (this._el)
                        throw t + " element found! 'progressiveEnhancement' is false, so globalnav was expecting to inject it.";
                    this._el = i.render(r), s.prependElement(document.body, this._el), this._options._rightToLeft && s.addClass(this._el, "rtl"), this._el.setAttribute("data-locale", this._options.locale), this._el.setAttribute("data-language", this._options.language), this._el.setAttribute("data-country", this._options.country)
                }
                s.addAndroidClass(this._el), s.removeClass(this._el, "no-js"), this._sections = {}, this._templateData = e, this.initializeSections(), s.isIPad()&&!s.isNewerIOS() && s.listen(window, "orientationchange", this._handleOrientationChange, this)
            },
            destroy: function() {
                s.isIPad()&&!s.isNewerIOS() && s.unlisten(window, "orientationchange", this._handleOrientationChange, this);
                for (var e in this._sections) {
                    var t = this._sections[e];
                    t.destroy && t.destroy()
                }
                s.removeElement(this._el)
            },
            selectSection: function(e, t) {
                e ? s.isIPad()&&!s.isNewerIOS() && s.unlisten(window, "orientationchange", this._handleOrientationChange, this) : s.isIPad()&&!s.isNewerIOS() && s.listen(window, "orientationchange", this._handleOrientationChange, this);
                var n = e in this._sections;
                for (var r in this._sections) {
                    var i = this._sections[r], o = r == e;
                    i.overlay.setSelected(o, n), i.keyboardNav.setSelected(o, t), i.setSelected && i.setSelected(o)
                }
                n && this._options.events && this._options.events.openedSection ? this._options.events.openedSection(e) : !n && this._options.events && this._options.events.closedSection && this._options.events.closedSection()
            },
            initializeSections: function() {
                this._hasSection("sitemap")&&!this._sections.sitemap && (this._sections.sitemap = new n(this._options), this._sections.sitemap.attach(this._el, this._templateData, this._options.progressiveEnhancement)), this._hasSection("search")&&!this._sections.search && (this._sections.search = new t(this._options), this._sections.search.attach(this._el, this._templateData)), this._hasSection("profile")&&!this._sections.profile && (this._sections.profile = new e(this._ims, this._options), this._sections.profile.attach(this._el, this._templateData));
                for (var r in this._sections)
                    this._sections[r].overlay.setDelegate(this)
            },
            updateWithRemoteTemplateDataAndEntitlements: function(e, t) {
                this.attach(e), this._sections.profile.updateWithEntitlements(t)
            },
            updateWithRemoteTemplateDataAndEntitlementsAndAvatar: function(e, t, n) {
                this.attach(e), this._sections.profile.updateWithEntitlementsAndAvatar(t, n)
            },
            updateWithRemoteTemplateDataAndEntitlementsAndProfile: function(e, t, n) {
                this.attach(e), this._sections.profile.updateWithEntitlementsAndProfile(t, n)
            },
            _hasSection: function(e) {
                return s.arrayHas(this._options.sections, e)
            },
            _handleClose: function() {
                this.selectSection(null)
            },
            _handleOrientationChange: function() {
                s.isKeyboardTypeControl(s.getActiveElement()) && s.getActiveElement().blur()
            }
        }, o
    }), n("stache!menu-bar", ["mustache"], function(e) {
        var t = '<nav id="globalnav__menu-bar" class="globalnav__js__menu-bar"> <ul> <li class="globalnav__menu-bar__item"> <button data-menu-id="sitemap" type="button" aria-haspopup="true" class="globalnav__menu-bar__button globalnav__js__menu-bar__button"> <span class="globalnav__icon globalnav__icon--menu" data-hoverable-icon="{{menuBar.menu.icon}}"></span> <span class="globalnav__menu-bar__item__title">{{menuBar.menu.label}}</span> </button> </li> <li class="globalnav__menu-bar__item"> <button data-menu-id="search" type="button" aria-haspopup="true" class="globalnav__menu-bar__button globalnav__js__menu-bar__button"> <span class="globalnav__icon globalnav__icon--search" data-hoverable-icon="{{menuBar.search.icon}}"></span> <span class="globalnav__menu-bar__item__title">{{menuBar.search.label}}</span> </button> </li> <li class="globalnav__menu-bar__item globalnav__js__menu-bar__item__profile"> <button data-menu-id="profile" type="button" aria-haspopup="true" class="globalnav__menu-bar__button globalnav__js__menu-bar__button"> <img class="globalnav__icon globalnav__icon--avatar globalnav__js__menu-bar__item__profile--avatar"/> <span class="globalnav__menu-bar__item__title globalnav__menu-bar__item__title--profile globalnav__js__menu-bar__item__title--profile">{{user.profileName}}</span> </button> </li> <li class="globalnav__menu-bar__item globalnav__js__menu-bar__item__signin"> <button data-menu-id="signin" type="button" class="globalnav__menu-bar__button globalnav__js__menu-bar__button"> <span class="globalnav__icon globalnav__icon--person" data-hoverable-icon="{{menuBar.signIn.icon}}"></span> <span class="globalnav__menu-bar__item__title">{{menuBar.signIn.label}}</span> </button> </li> {{#menuBar.logo}} <li class="globalnav__menu-bar__item globalnav__js__menu-bar__item__logo"> <a data-menu-id="logo" href="{{#chooseURLForLocale}}{{{url}}}{{/chooseURLForLocale}}" class="globalnav__menu-bar__button globalnav__js__menu-bar__button"> <span class="globalnav__icon globalnav__icon--logo" data-hoverable-icon="{{icon}}"></span> </a> </li> {{/menuBar.logo}} </ul> </nav> ';
        return e.parse(t), function(n) {
            return e.render(t, n)
        }
    }), n("menu-bar", ["analytics", "stache!menu-bar", "templating", "keyboard-nav", "icon-maker", "utils"], function(e, t, n, r, i, s) {
        function u(e, t, n, r) {
            this._delegate = e, this._options = t, this._ims = n, this._profileButtonActivatedPromise = r, this._honorific = "", this._customClass = "custom-color-button", this._handleKeyboardNav = this._handleKeyboardNav.bind(this)
        }
        var o = function(e, t, n, r) {
            this.id = e, this.button = t, this.buttonParent = t.parentNode, this.isShown=!0, this.options = n, this.honorific = r, s.enableActivePsuedoClass(this.button)
        };
        return o.prototype = {
            blur: function() {
                this.button.blur()
            },
            focus: function() {
                this.button.focus()
            },
            hide: function() {
                this.buttonParent.style.display = "none", this.isShown=!1
            },
            show: function(e) {
                this.buttonParent.style.display = "", this.isShown=!0;
                if (e) {
                    var t = s.getElement("menu-bar__item__title--profile", this.button), n = "", r = e.countryCode ? e.countryCode.toLocaleLowerCase(): "";
                    r === "jp" || r === "kr" ? (e.last_name, n += e.last_name.toLocaleUpperCase(), e.first_name && (n += " " + e.first_name.toLocaleUpperCase()), n = s.truncate(n, 10), this.honorific && (n += " " + this.honorific)) : e.first_name && (n += e.first_name.toLocaleUpperCase(), n = s.truncate(n, 12)), s.setInnerText(t, n)
                }
            }
        }, u.prototype = {
            attach: function(e, r) {
                this._el = n.render(t, r, this._options), s.prependElement(e, this._el), this._options._rightToLeft && s.addClass(this._el, "rtl"), this._signInBumperURL = null, this._profile = null, this._hasUpdatedProfile=!1, this._honorific = r.menuBar.honorific, this._buttonPairs = [], this._pairsById = {}, this._focusIndex =- 1, this._addCustomStyles(this._options.styles), this._getButtons(), this.showOrHideSections(), this._addKeyboardNav(), i.makeHoverableIcons(this._el, this._options.styles.buttonTextColor, this._options.styles.buttonTextHoverColor), this._addSignInListener(), this._addFadeInTimeout()
            },
            destroy: function() {
                s.removeElement(this._el), this._removeKeyboardNav()
            },
            showOrHideSections: function() {
                for (var e = 0; e < this._buttonPairs.length; e++) {
                    var t = this._buttonPairs[e].id;
                    s.arrayHas(this._options.sections, t) && t !== "profile" && t !== "signin" ? this._buttonPairs[e].show() : this._buttonPairs[e].hide()
                }(this._hasUpdatedProfile ||!s.arrayHas(this._options.sections, "profile")) && this._updateButtonsWithProfile(this._profile)
            },
            updateWithAvatar: function(e) {
                var t = s.getElement("menu-bar__item__profile--avatar", this._el);
                t.src = e, s.css(t, "opacity", 1)
            },
            updateWithProfile: function(e) {
                this._signInBumperURL || (this._profile = e, this._hasUpdatedProfile=!0, this._updateButtonsWithProfile(e), s.css(this._el, "opacity", "1"))
            },
            updateWithRemoteTemplateData: function(e) {
                e.menuBar && e.menuBar.signIn && e.menuBar.signIn.bumperURL && (this._signInBumperURL = e.menuBar.signIn.bumperURL, this._updateButtonsWithProfile(null), s.css(this._el, "opacity", "1"))
            },
            _addCustomStyles: function(e) {
                var t = "#" + s.getNamespace() + "__menu-bar ." + s.getNamespace() + "__" + this._customClass, n = e.buttonTextColor, r = e.buttonTextHoverColor;
                s.insertCSSRule(t, "color:" + n), s.insertCSSRule(s.createHoverSelector(t), "color:" + r)
            },
            _addKeyboardNav: function() {
                s.listen(document, "keydown", this._handleKeyboardNav, this)
            },
            _addFadeInTimeout: function() {
                setTimeout(function() {
                    s.css(this._el, "opacity", "1")
                }.bind(this), 3e3)
            },
            _addPairEvents: function(e) {
                var t = e.section, n = e.button;
                s.listen(n, "blur", function() {
                    this._focusIndex =- 1
                }, this), s.listen(n, "focus", function() {
                    this._focusIndex = this._buttonPairs.indexOf(e), this._focus()
                }, this), s.listen(n, "click", function() {
                    e.isSelected ? this._unselect(e) : this._select(e)
                }, this), s.listen(n, "keyup", function(t) {
                    if (e.id === "signin")
                        return;
                    switch (t.keyCode) {
                    case r.KEY.SPACE:
                    case r.KEY.ENTER:
                        t.preventDefault(), this._select(e, !0)
                    }
                }, this), e.id === "profile" && s.listen(n, "mouseover", function() {
                    this._profileButtonActivatedPromise.resolve()
                }, this)
            },
            _addSignInListener: function() {
                var e = s.getElement("menu-bar__item__signin", this._el);
                s.listen(e, "click", function(e) {
                    this._signInBumperURL ? window.location.href = this._signInBumperURL : this._ims.signIn()
                }, this)
            },
            _getButtons: function() {
                var e = s.getElements("menu-bar__button", this._el);
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    s.addClass(n, this._customClass);
                    var r = n.getAttribute("data-menu-id"), i = new o(r, n, this._options, this._honorific);
                    this._addPairEvents(i), this._buttonPairs.push(i), this._pairsById[r] = i
                }
            },
            _selectItem: function(e) {
                var t = this._options._rightToLeft ? e*-1: e, n = s.getCycledItem(this._buttonPairs, this._focusIndex, t);
                this._focusIndex = this._buttonPairs.indexOf(n), n.isShown ? this._focus() : this._selectItem(e)
            },
            _focus: function() {
                var e = this._buttonPairs[this._focusIndex];
                e.focus()
            },
            _handleKeyboardNav: function(e) {
                var t = e.keyCode, n = r.KEY;
                t === n.ESCAPE && this._currentPair && (this._delegate.selectSection(null), this._currentPair.focus());
                if (!this._focusStylesEnabled)
                    switch (t) {
                    case n.TAB:
                    case n.LEFT:
                    case n.RIGHT:
                    case n.DOWN:
                    case n.UP:
                        this._enableFocusStyles()
                    }
                if (this._focusIndex < 0)
                    return;
                switch (t) {
                case n.SPACE:
                    var i = this._buttonPairs[this._focusIndex];
                    i && i.button.href && (e.preventDefault(), location.href = i.button.href);
                    break;
                case n.LEFT:
                    this._selectItem( - 1);
                    break;
                case n.RIGHT:
                    this._selectItem(1)
                }
            },
            _enableFocusStyles: function() {
                s.addClass(this._el, "show-focus"), this._focusStylesEnabled=!0
            },
            _removeKeyboardNav: function() {
                s.unlisten(document, "keydown", this._handleKeyboardNav)
            },
            _select: function(t, n) {
                t.id === "sitemap" ? e.trackClickMenubarSitemap() : t.id === "search" ? e.trackClickMenubarSearch() : t.id === "profile" && (e.trackClickMenubarProfile(), this._profileButtonActivatedPromise.resolve()), t.blur(), this._currentPair = t, this._delegate.selectSection(t.id, n)
            },
            _unselect: function(e) {
                this._selectedIndex =- 1, this._currentPair = null, this._delegate.selectSection(null)
            },
            _updateButtonsWithProfile: function(e) {
                s.arrayHas(this._options.sections, "profile") ? e ? (this._pairsById.profile.show(e), this._pairsById.signin.hide()) : (this._pairsById.signin.show(), this._pairsById.profile.hide()) : s.css(this._el, "opacity", "1")
            }
        }, u
    }), n("polyfills", [], function() {
        Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = Array.prototype.slice.call(arguments, 1), n = this, r = function() {}, i = function() {
                return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
            return r.prototype = this.prototype, i.prototype = new r, i
        }), Array.isArray || (Array.isArray = function(e) {
            return Object.prototype.toString.call(e) === "[object Array]"
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            var t = this.length>>>0, n = Number(arguments[1]) || 0;
            n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t);
            for (; n < t; n++)
                if (n in this && this[n] === e)
                    return n;
            return - 1
        }), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), document.head || (document.head = document.getElementsByTagName("head")[0])
    }), n("../data/data-embedded", ["utils"], function(e) {
        var t = function() {
            this._sharedData = {
                menuBar: {
                    menu: {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="#333"><path d="M0 2h32v6H0zM0 14h32v6H0zM0 26h32v6H0z"/></g></svg>'
                    },
                    search: {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M9.752 1.848c10.88-2.835 19.204 9.166 13.15 18.238l7.946 7.938-3.404 3.4-8.043-7.937c-1.985 1.324-4.255 1.984-6.62 1.984C-1.41 25.378-3.587 5.346 9.752 1.85zM5.874 11.58c-.662 2.458-.094 5.104 1.892 6.994 5.016 5.103 13.908.378 12.11-6.993-1.986-7.18-12.205-6.992-14.002 0z"/></svg>'
                    },
                    signIn: {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35.5" height="31.8" viewBox="0 0 35.5 31.8"><path fill="#fff" d="M0 31.8h35.5c0-7.1-.3-6.2-7.8-9.2-4.5-2-2.9-.8-5.4-2.9v-.2c-.1 0-.3-.6-.4-.6 0-.2.2-1.2.3-1.4.1-.1.6-2.6.7-2.7.2-.4.6-.7.8-1.1.4-.9.8-2.6.6-3.7-.4-2 .6-6.4-1.6-7.7C21.6 1.6 21 0 17.3.2c-7.5.9-5.7 7.8-5.9 9.5-.2 1.2.3 4.2 1.2 4.9l.2.2c.1.3.5 2.2.5 2.7.2.3.3.9.4 1.7l-.3.4h-.1c-1.2.8-1 1.4-3.1 2-.2.1-.4.2-.5.2C1 26 0 23.4 0 31.8z"/></svg>'
                    },
                    logo: {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="16"><path d="M12.1 0h7.1v16zM7.1 0H0v16zM9.6 5.9L14.1 16h-3l-1.3-3.2H6.5zM29 9.8l-1.2 3.3c0 .1-.1.1-.1.1h-1.1c-.1 0-.1-.1-.1-.1 1-2.5 2.6-6.9 3.7-9.7.1-.1.1-.3.1-.7 0-.1 0-.1.1-.1H32c.1 0 .1 0 .1.1 1.3 3.4 2.6 7 3.9 10.4 0 .1 0 .1-.1.1h-1.3c-.1 0-.1 0-.1-.1l-1.3-3.4-4.2.1zm3.8-1.2c-.4-1-1.3-3.8-1.7-4.9-.3 1-1.1 3.1-1.6 4.9h3.3zM36.7 9.4c0-2.4 1.8-4.1 4.4-4.1.5 0 .9 0 1.3.2V1.8c0-.1 0-.1.1-.1h1.3c.1 0 .1 0 .1.1V12.5c0 .1 0 .1-.1.2-1 .5-2 .8-3 .8-2.4-.1-4.1-1.5-4.1-4.1zm5.7-2.8c-.3-.2-.8-.2-1.3-.2-1.8 0-2.9 1.2-2.9 2.9 0 2.2 1.3 2.9 2.7 2.9.6 0 1.1-.1 1.4-.2l.1-5.4zM53.1 9.3c0 2.4-1.5 4-3.9 4-2.8 0-3.9-2.1-3.9-4 0-2.4 1.5-4 3.9-4 2.6 0 3.9 1.7 3.9 4zm-6.2 0c0 1.7.9 3 2.5 3 1.2 0 2.3-.8 2.3-2.9 0-1.6-.7-3-2.4-3-1.4-.1-2.4 1-2.4 2.9zM56.1 1.7c.1 0 .1 0 0 0l.1 4c.7-.3 1.3-.5 2-.5 2.2 0 3.6 1.6 3.6 3.7 0 2.8-2.2 4.4-4.6 4.4-.9 0-1.5-.1-2.3-.4-.1 0-.1-.1-.1-.2v-11c0-.1 0-.1.1-.1h1.2v.1zm1.8 4.7c-.7 0-1.3.1-1.7.4v5.3c.4.1.8.1 1.2.1 1.4 0 3-1 3-3.2 0-1.6-.9-2.6-2.5-2.6zM64.6 9.4c0 1.6.9 2.7 2.7 2.7.7 0 1.3-.1 2-.5.1 0 .1 0 .1.1v.9c0 .1 0 .1-.1.2-.6.3-1.3.5-2.3.5-2.9 0-3.9-2-3.9-4 0-2.4 1.3-4 3.7-4 2.3 0 3.2 1.8 3.2 3.1 0 .7-.1.8-.1.9-.3.1-.9.1-1.7.1h-3.6zm3-.8c.8 0 1-.1 1-.1v-.3c0-.6-.4-1.9-1.9-1.9-1.3 0-2 1-2.1 2.3h3z"/></svg>'
                    }
                }
            }, this._languageSpecificData = {
                ar: {
                    menuBar: {
                        menu: {
                            label: "القائمة"
                        },
                        search: {
                            label: "بحث"
                        },
                        signIn: {
                            label: "تسجيل الدخول"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                bg: {
                    menuBar: {
                        menu: {
                            label: "Меню"
                        },
                        search: {
                            label: "Търсене"
                        },
                        signIn: {
                            label: "Влизане"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                cs: {
                    menuBar: {
                        menu: {
                            label: "Nabídka"
                        },
                        search: {
                            label: "Hledat"
                        },
                        signIn: {
                            label: "Přihlášení"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                da: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Søg"
                        },
                        signIn: {
                            label: "Log på"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                de: {
                    menuBar: {
                        menu: {
                            label: "Menü"
                        },
                        search: {
                            label: "Suchen"
                        },
                        signIn: {
                            label: "Anmelden"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                en: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Search"
                        },
                        signIn: {
                            label: "Sign In"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                es: {
                    menuBar: {
                        menu: {
                            label: "Menú"
                        },
                        search: {
                            label: "Buscar"
                        },
                        signIn: {
                            label: "Iniciar sesión"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                et: {
                    menuBar: {
                        menu: {
                            label: "Menüü"
                        },
                        search: {
                            label: "Otsing"
                        },
                        signIn: {
                            label: "Logi sisse"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                fi: {
                    menuBar: {
                        menu: {
                            label: "Valikko"
                        },
                        search: {
                            label: "Hae"
                        },
                        signIn: {
                            label: "Kirjaudu sisään"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                fr: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Rechercher"
                        },
                        signIn: {
                            label: "Se connecter"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                he: {
                    menuBar: {
                        menu: {
                            label: "תפריט"
                        },
                        search: {
                            label: "חיפוש"
                        },
                        signIn: {
                            label: "כניסה"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                hr: {
                    menuBar: {
                        menu: {
                            label: "Izbornik"
                        },
                        search: {
                            label: "Pretraživanje"
                        },
                        signIn: {
                            label: "Prijava"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                hu: {
                    menuBar: {
                        menu: {
                            label: "Menü"
                        },
                        search: {
                            label: "Keresés"
                        },
                        signIn: {
                            label: "Bejelentkezés"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                it: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Cerca"
                        },
                        signIn: {
                            label: "Accedi"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                ja: {
                    menuBar: {
                        menu: {
                            label: "メニュー"
                        },
                        search: {
                            label: "検索"
                        },
                        signIn: {
                            label: "ログイン"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: "さん"
                    }
                },
                ko: {
                    menuBar: {
                        menu: {
                            label: "메뉴"
                        },
                        search: {
                            label: "검색"
                        },
                        signIn: {
                            label: "로그인"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: "님"
                    }
                },
                "long": {
                    menuBar: {
                        menu: {
                            label: ""
                        },
                        search: {
                            label: ""
                        },
                        signIn: {
                            label: ""
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                lt: {
                    menuBar: {
                        menu: {
                            label: "Meniu"
                        },
                        search: {
                            label: "Paieška"
                        },
                        signIn: {
                            label: "Prisijungti"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                lv: {
                    menuBar: {
                        menu: {
                            label: "Izvēlne"
                        },
                        search: {
                            label: "Meklēt"
                        },
                        signIn: {
                            label: "Pierakstīties"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                nb: {
                    menuBar: {
                        menu: {
                            label: "Meny"
                        },
                        search: {
                            label: "Søk"
                        },
                        signIn: {
                            label: "Logg på"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                nl: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Zoeken"
                        },
                        signIn: {
                            label: "Aanmelden"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                pl: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Szukaj"
                        },
                        signIn: {
                            label: "Zaloguj się"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                pt: {
                    menuBar: {
                        menu: {
                            label: "Menu"
                        },
                        search: {
                            label: "Procurar"
                        },
                        signIn: {
                            label: "Entrar"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                ro: {
                    menuBar: {
                        menu: {
                            label: "Meniu"
                        },
                        search: {
                            label: "Căutare"
                        },
                        signIn: {
                            label: "Conectare"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                ru: {
                    menuBar: {
                        menu: {
                            label: "Меню"
                        },
                        search: {
                            label: "Поиск"
                        },
                        signIn: {
                            label: "Войти"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                sk: {
                    menuBar: {
                        menu: {
                            label: "Ponuka"
                        },
                        search: {
                            label: "Hľadať"
                        },
                        signIn: {
                            label: "Prihlásiť sa"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                sl: {
                    menuBar: {
                        menu: {
                            label: "Meni"
                        },
                        search: {
                            label: "Iskanje"
                        },
                        signIn: {
                            label: "Prijava"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                sr: {
                    menuBar: {
                        menu: {
                            label: "Meni"
                        },
                        search: {
                            label: "Pretraga"
                        },
                        signIn: {
                            label: "Prijavljivanje"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                sv: {
                    menuBar: {
                        menu: {
                            label: "Meny"
                        },
                        search: {
                            label: "Sök"
                        },
                        signIn: {
                            label: "Logga in"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                tr: {
                    menuBar: {
                        menu: {
                            label: "Menü"
                        },
                        search: {
                            label: "Ara"
                        },
                        signIn: {
                            label: "Giriş Yap"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                uk: {
                    menuBar: {
                        menu: {
                            label: "Меню"
                        },
                        search: {
                            label: "Пошук"
                        },
                        signIn: {
                            label: "Увійти"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                zh_CN: {
                    menuBar: {
                        menu: {
                            label: "菜单"
                        },
                        search: {
                            label: "搜索"
                        },
                        signIn: {
                            label: "登录"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                },
                zh_TW: {
                    menuBar: {
                        menu: {
                            label: "選單"
                        },
                        search: {
                            label: "搜尋"
                        },
                        signIn: {
                            label: "登入"
                        },
                        logo: {
                            url: {
                                defaultLink: "https://www.adobe.com",
                                localeCodeType: "defaultSet",
                                defaultLocaleLink: "https://www.adobe.com/@@LOCALE@@"
                            }
                        },
                        honorific: ""
                    }
                }
            }
        };
        return t.prototype = {
            getData: function(t) {
                return e.extend(this._sharedData, this._languageSpecificData[t])
            }
        }, new t
    }), n("main", ["account-services", "analytics", "behance", "config", "ims", "header", "menu-bar", "logging", "polyfills", "profile", "promise", "../data/data-embedded", "utils"], function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
        var p = function(e) {
            this._options = e, this._init()
        };
        return p.prototype = {
            openSection: function(e) {
                e === "profile" && this._profileMenuButtonActivatedPromise.resolve(), this._header.selectSection(e, !1)
            },
            refreshAvatar: function() {
                if (!this._behanceGetProfilePromise.isComplete())
                    return;
                var e = this._behance.resetProfilePromise();
                this._menuBar && e.then(this._updateMenuBarWithAvatarFromProfile.bind(this), this._handleError("Refreshing behance profile")), l.all([this._remoteTemplateDataPromise, this._getEntitlementsPromise, this._imsGetProfilePromise, e]).then(this._updateHeaderWithRemoteTemplateDataAndEntitlementsAndProfiles.bind(this), this._handleError("Getting remote template data, entitlements, and refreshed avatar")), this._behance.getProfile(!0)
            },
            refreshProfile: function() {
                if (!this._imsGetProfilePromise.isComplete() ||!this._behanceGetProfilePromise.isComplete())
                    return;
                var e = this._ims.resetProfilePromise(), t = this._behance.resetProfilePromise();
                this._menuBar && l.all([e, t]).then(this._updateMenuBarWithProfiles.bind(this), this._handleErrorFetchingProfile.bind(this)), l.all([this._remoteTemplateDataPromise, this._getEntitlementsPromise, e, t]).then(this._updateHeaderWithRemoteTemplateDataAndEntitlementsAndProfiles.bind(this), this._handleError("Getting remote template data, entitlements, and refreshed avatar")), this._ims.getProfile(!0), this._behance.getProfile(!0)
            },
            setSections: function(e) {
                this._options.sections = e, this._menuBar && this._menuBar.showOrHideSections(), this._remoteTemplateDataPromise.isComplete() && this._header.initializeSections()
            },
            destroy: function() {
                this._header.destroy(), this._ims.destroy(), this._menuBar && this._menuBar.destroy()
            },
            _init: function() {
                this._initOptions(this._options), u.setConsoleLoggingEnabled(this._options._consoleLogging), t.setLocale(this._options.locale), h.arrayHas(this._options.sections, "profile") && (this._ims = new i(this._options), this._accountServices = new e, this._behance = new n(this._options)), this._initPromises(), this._header = new s(this._options, this._ims), this._parentElement && (this._menuBar = new o(this._header, this._options, this._ims, this._profileMenuButtonActivatedPromise)), this._initPromiseCallbacks(), this._initEmbeddedTemplateData()
            },
            _initEmbeddedTemplateData: function() {
                if (this._menuBar) {
                    var e = c.getData(this._options.language);
                    this._menuBar.attach(this._parentElement, e)
                }
            },
            _initOptions: function(e) {
                if (!e)
                    throw "No options were passed to AdobeGlobalNav.";
                if (e.parentSelector) {
                    this._parentElement = document.documentElement.querySelector(e.parentSelector);
                    if (!this._parentElement)
                        throw "No element found for parentSelector: " + e.parentSelector;
                    if (this._parentElement.firstChild)
                        throw "Element specified by parentSelector should not have any children."
                }
                if (e.adobeid && e.adobeid.scope&&!h.arrayHas(e.adobeid.scope.split(","), "gnav"))
                    throw 'Scope "gnav" is required on adobeid parameter.';
                if ((!e.sections || h.arrayHas(e.sections, "profile"))&&!e.adobeid)
                    throw "The adobeid parameter is required if using the profile section";
                this._setDefaultOptions(null, {
                    progressiveEnhancement: !1,
                    locale: "en_US"
                }), this._setDefaultOptions("styles", {
                    buttonTextColor: "rgb(75%, 75%, 75%)",
                    buttonTextHoverColor: "white",
                    overlayZIndex: 2147483647
                });
                var t, n, i;
                if (e.locale.toLowerCase() === "zh_tw")
                    t = "zh_TW", i = "zh_TW", n = "TW";
                else if (e.locale.toLowerCase() === "zh_cn")
                    t = "zh_CN", i = "zh_CN", n = "CN";
                else if (e.locale.toLowerCase() === "zh_hk")
                    t = "zh_TW", i = "zh_HK", n = "HK";
                else if (e.locale.toLowerCase() === "long")
                    t = "long", i = "long", n = "US";
                else {
                    var s = e.locale.indexOf("_");
                    s >= 0 && (t = e.locale.substr(0, s).toLowerCase(), n = e.locale.substr(s + 1).toUpperCase())
                }
                e.events = e.events || {}, e.language = h.arrayHas(r.SUPPORTED_LANGUAGES, t) ? t : "en", e.country = n || "US", e.locale = i || e.language + "_" + e.country, e.sections = e.sections || ["sitemap", "search", "profile", "logo"];
                var o = ["products", "how-to-buy", "learn-and-support", "about-adobe"], u = h.arrayHas(o, e.defaultSitemapSection);
                e.defaultSitemapSection = u ? e.defaultSitemapSection : "products", e._dataPath = e._dataPath || r.GLOBAL_NAV_ENDPOINT + "/json/" + e.language + "/" + h.getNamespace() + ".js", e._rightToLeft = this._isRightToLeftLocale(), e._iconColor = "rgb(60%, 60%, 60%)", e._iconHoverColor = "white", e.language === "ja" && h.addClass(document.body, "external__lang__ja"), e._rightToLeft && h.addClass(document.body, "external__rtl"), h.isTouchScreen() || h.addClass(document.body, "external__no-touch")
            },
            _initPromises: function() {
                this._remoteTemplateDataPromise = h.wrapInPromise(this._options._data) || this._fetchRemoteTemplateData();
                if (!h.arrayHas(this._options.sections, "profile"))
                    return;
                this._imsGetAccessTokenPromise = this._options._entitlements ? h.wrapInPromise({}) : this._ims.getAccessToken(), this._imsGetProfilePromise = h.wrapInPromise(this._options._imsProfile) || this._ims.getProfile();
                var e = h.wrapInPromise(this._options._entitlements, this._options._entitlementsDelay);
                this._getEntitlementsPromise = e || this._accountServices.getEntitlementsPromise(), this._behanceGetProfilePromise = h.wrapInPromise(this._options.behanceProfile) || this._behance.getProfilePromise(), this._profileMenuButtonActivatedPromise = new l
            },
            _initPromiseCallbacks: function() {
                this._remoteTemplateDataPromise.then(this._header.attach.bind(this._header), this._handleError("Getting remote template data for header")), this._menuBar && this._remoteTemplateDataPromise.then(this._menuBar.updateWithRemoteTemplateData.bind(this._menuBar), this._handleError("Getting remote template data for menubar"));
                if (!h.arrayHas(this._options.sections, "profile")) {
                    this._trackPageLoad(!1);
                    return 
                }
                this._imsGetProfilePromise.then(this._trackPageLoad.bind(this), this._trackPageLoad.bind(this)), l.all([this._imsGetAccessTokenPromise, this._profileMenuButtonActivatedPromise]).then(this._fetchEntitlements.bind(this), this._handleError("Getting IMS access token")), this._options.behanceProfile || l.all([this._imsGetProfilePromise]).then(this._fetchBehanceProfile.bind(this), this._handleError("Getting access token and profile")), this._menuBar && l.all([this._imsGetProfilePromise, this._behanceGetProfilePromise]).then(this._updateMenuBarWithProfiles.bind(this), this._handleErrorFetchingProfile.bind(this)), l.all([this._remoteTemplateDataPromise, this._getEntitlementsPromise]).then(this._header.updateWithRemoteTemplateDataAndEntitlements.bind(this._header), this._handleError("Getting remote data and entitlements")), l.all([this._remoteTemplateDataPromise, this._getEntitlementsPromise, this._imsGetProfilePromise, this._behanceGetProfilePromise]).then(this._updateHeaderWithRemoteTemplateDataAndEntitlementsAndProfiles.bind(this), this._handleError("Getting remote template data, entitlements, and avatar"))
            },
            _trackPageLoad: function(e) {
                t.setIsLoggedIn(!!e), t.trackPageLoad()
            },
            _chooseProfile: function(e, t) {
                var n = e;
                if (t) {
                    n = t, n.email = n.email || e.email;
                    if (!t.first_name || t.first_name.trim().length === 0)
                        n.first_name = e.first_name;
                    if (!t.last_name || t.last_name.trim().length === 0)
                        n.last_name = e.last_name;
                    n.countryCode = e.countryCode
                }
                return n
            },
            _updateHeaderWithRemoteTemplateDataAndEntitlementsAndProfiles: function(e, t, n, r) {
                var i = this._chooseProfile(n, r);
                this._header.updateWithRemoteTemplateDataAndEntitlementsAndProfile(e, t, i);
                var s = this._options.avatar || this._behance.getAvatarFromProfile(i);
                s && this._header.updateWithRemoteTemplateDataAndEntitlementsAndAvatar(e, t, s)
            },
            _updateMenuBarWithProfiles: function(e, t) {
                var n = this._chooseProfile(e, t);
                this._menuBar.updateWithProfile(n), this._updateMenuBarWithAvatarFromProfile(n)
            },
            _updateMenuBarWithAvatarFromProfile: function(e) {
                var t = this._options.avatar || this._behance.getAvatarFromProfile(e);
                t && (this._menuBar.updateWithAvatar(t), !this._options.avatar && this._options.events.avatar && this._options.events.avatar(t))
            },
            _fetchBehanceProfile: function(e) {
                this._behance.setIMSProfile(e), this._behance.getProfile()
            },
            _fetchEntitlements: function(e) {
                this._accountServices.setToken(e), this._accountServices.getEntitlements()
            },
            _fetchRemoteTemplateData: function() {
                return h.getJSONP(this._options._dataPath, {}, r.JSONP_TEMPLATE_DATA_CALLBACK)
            },
            _handleError: function(e) {
                return function() {
                    u.error(e)
                }.bind(this)
            },
            _handleErrorFetchingProfile: function() {
                this._menuBar && this._menuBar.updateWithProfile(null)
            },
            _setDefaultOptions: function(e, t) {
                var n = e ? this._options[e]: this._options;
                e&&!n && (n = this._options[e] = {});
                for (var r in t)
                    n[r] = n[r] || t[r]
            },
            _isRightToLeftLocale: function() {
                return h.arrayHas(["ar", "he"], this._options.language)
            }
        }, p
    }), t("main")
});
