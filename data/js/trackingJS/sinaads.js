/*!
 * sinaads
 * @author acelan<xiaobin8[at]staff.sina.com.cn> zhouyi<zhouyi3[at]staff.sina.com.cn>
 * @version 1.0.0
 * 
 *                          $$!   ;$;
 *                    !$  $$$$  !$$$   ;;
 *                 $ *$$;$$$$$$$$$$;*$$$
 *                $$$$$$$$$$$$$$$$$$$$$
 *               $$$$$$;         o$$$$$o
 *              *$$$   *#####;     $$$$$
 *              $$$   &#$*!###     $$$$!
 *              $$$;  $#!!###$   ;$$$$
 *                $$$o  ;**   !$$$$!
 *          !$&&&&$!  o$$$$$$o;   ;$&###&!     ;o$&&##&$;
 *       ###########$ o####*  #############!  o############
 *     ;#####;        #####  $####    *####;          ####*
 *      ###########  o####   ####;    ####$  $######;o####
 *          ;*#####o ####$  ####&    !#### o####     ####
 *    ####$**&####$ ;####  o####     ####o &####$o$#####
 *   ;o########$    *###   ####!    &####   ;######&!
 *                 ###;
 *                  ##o
 *                 ;#!
 *                 ;
 */
!function(a, b) {
    "use strict";
    var c = a.sinaadToolkit = a.sinaadToolkit || {
        VERSION: "1.0.0",
        mode: - 1 !== a.location.href.indexOf("__sinaadToolkitDebug__") ? "debug": "release",
        debug: function() {
            var b = "sinaadToolkitDebugContainer", d = a.console || {
                log: function(a) {
                    if (document.body) {
                        var c = document.getElementById(b);
                        c || (c = document.createElement("ul"), c.id = b, c.style.cssText = "z-index:99999;overflow:auto;height:300px;position:absolute;right:0;top:0;opacity:.9;*filter:alpha(opacity=90);background:#fff;width:500px;", document.body.insertBefore(c, document.body.firstChild));
                        var d = document.createElement("li");
                        d.style.cssText = "border-bottom:1px dotted #ccc;line-height:30px;font-size:12px;", d.innerHTML = a + Array.prototype.slice.call(arguments, 1).join(" "), c.appendChild(d)
                    }
                }
            };
            return function(a) {
                "debug" === c.mode && d.log(a, Array.prototype.slice.call(arguments, 1))
            }
        }(),
        error: function(b, d) {
            try {
                c.sio.log("//d00.sina.com.cn/a.gif?" + ["type=sinaads_error", "msg=" + encodeURIComponent(b ? b : d ? d.message : "unknow"), "ref=" + encodeURIComponent(c.url.top), "ja=" + (navigator.javaEnabled() ? 1 : 0), "ck=" + (navigator.cookieEnabled ? 1 : 0), "ds=" + (a.screen.width + "x" + a.screen.height), "ua=" + encodeURIComponent(navigator.appVersion), "pf=" + navigator.platform, "ts=" + c.now()].join("&"))
            } catch (d) {}
            if ("debug" === c.mode)
                throw new Error(b + (d ? ":" + d.message : ""))
        },
        now: function() {
            return + new Date
        },
        rnd: function() {
            return Math.floor(2147483648 * Math.random()).toString(36)
        },
        rand: function(a, b) {
            return Math.floor(a + Math.random() * (b - a + 1))
        },
        hash: function(a) {
            for (var b, c = 0, d = 0; !isNaN(b = a.charCodeAt(d++));)
                c = (c<<5) - c + b, c&=c;
            return Math.abs(c).toString(36)
        },
        isFunction: function(a) {
            return "[object Function]" === Object.prototype.toString.call(a)
        },
        isString: function(a) {
            return "[object String]" === Object.prototype.toString.call(a)
        },
        isNull: function(a) {
            return "undefined" == typeof a || null === a
        },
        isArray: function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        isNumber: function(a) {
            return "[object Number]" === Object.prototype.toString.call(a) && isFinite(a)
        },
        globalEval: function(b) {
            b && /\S/.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        underPop: function(b, d, e, f) {
            function g() {
                var h = a.open("about:blank", d, "width=" + e + ",height=" + f);
                h.blur(), h.opener.focus(), h.location = b, c.event.un(document.body, "click", g)
            }
            try {
                g()
            } catch (h) {
                c.debug("sinaads:Cannot pop window, use click event."), c.event.on(document.body, "click", g)
            }
        }
    };
    c.RESOURCE_URL = c.RESOURCE_URL || ["http://d1.sina.com.cn/litong/zhitou/sinaads", "http://d2.sina.com.cn/litong/zhitou/sinaads", "http://d3.sina.com.cn/litong/zhitou/sinaads", "http://d4.sina.com.cn/litong/zhitou/sinaads", "http://d5.sina.com.cn/litong/zhitou/sinaads", "http://d6.sina.com.cn/litong/zhitou/sinaads", "http://d7.sina.com.cn/litong/zhitou/sinaads", "http://d8.sina.com.cn/litong/zhitou/sinaads", "http://d9.sina.com.cn/litong/zhitou/sinaads"][c.rand(0, 8)], c.TOOLKIT_URL = c.RESOURCE_URL + "/release/sinaadToolkit.js", c.browser = c.browser || function(c) {
        var d = {
            android: /(Android)(\s+([\d.]+))*/i.test(c),
            ipad: /(iPad).*OS\s([\d_]+)/i.test(c),
            webos: /(webOS|hpwOS)[\s\/]([\d.]+)/i.test(c),
            kindle: /Kindle\/([\d.]+)/i.test(c),
            silk: /Silk\/([\d._]+)/i.test(c),
            blackberry: /(BlackBerry).*Version\/([\d.]+)/i.test(c),
            bb10: /(BB10).*Version\/([\d.]+)/i.test(c),
            rimtabletos: /(RIM\sTablet\sOS)\s([\d.]+)/i.test(c),
            playbook: /PlayBook/i.test(c),
            chrome: /chrome\/(\d+\.\d+)/i.test(c)?+RegExp.$1: b,
            firefox: /firefox\/(\d+\.\d+)/i.test(c)?+RegExp.$1: b,
            ie: /msie (\d+\.\d+)/i.test(c) ? document.documentMode||+RegExp.$1: b,
            isGecko: /gecko/i.test(c)&&!/like gecko/i.test(c),
            isStrict: "CSS1Compat" === document.compatMode,
            isWebkit: /webkit/i.test(c),
            opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(c)?+(RegExp.$6 || RegExp.$2): b
        };
        d.iphone=!d.ipad && /(iPhone\sOS)\s([\d_]+)/i.test(c), d.touchpad = d.webos && /TouchPad/.test(c), d.tablet=!!(d.ipad || d.playbook || d.android&&!/Mobile/.test(c) || d.firefox && /Tablet/.test(c)), d.phone=!(d.tablet ||!(d.android || d.iphone || d.webos || d.blackberry || d.bb10 || d.chrome && /Android/.test(c) || d.chrome && /CriOS\/([\d.]+)/.test(c) || d.firefox && /Mobile/.test(c)));
        try {
            /(\d+\.\d+)/.test(a.external.max_version) && (d.maxthon =+ RegExp.$1)
        } catch (e) {}
        return d.mobile = d.tablet || d.phone || d.touchpad, d.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(c)&&!/chrome/i.test(c)?+(RegExp.$1 || RegExp.$2) : b, d.isSupportFixed=!d.ie || d.ie >= 7, d
    }(navigator.userAgent), c.systemInfo = {
        screenSize: a.screen ? a.screen.width + "x" + a.screen.height: "-",
        language: navigator.systemLanguage || navigator.browserLanguage || navigator.language || navigator.userLanguage || "-",
        platform: "-"
    }, c.array = c.array || {
        remove: function(a, b) {
            for (var c = a.length; c--;)
                c in a && a[c] === b && a.splice(c, 1);
            return a
        },
        each: function(a, b, d) {
            a = c.array.ensureArray(a);
            var e, f, g, h = a.length;
            if ("function" == typeof b)
                for (g = 0; h > g && (f = a[g], e = b.call(d || a, f, g), e!==!1); g++);
            return a
        },
        ensureArray: function(a) {
            return c.isArray(a) ? a : c.isNull(a) ? [] : [a]
        }
    }, c.string = c.string || function() {
        var a = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "": "\\u000b"
        }, b = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
        return {
            encodeHTML: function(a) {
                return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            },
            decodeHTML: function(a) {
                var b = String(a).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
                return b.replace(/&#([\d]+);/g, function(a, b) {
                    return String.fromCharCode(parseInt(b, 10))
                })
            },
            formalString: function(c) {
                var d = [];
                return d.push(c.replace(b, function(b) {
                    if (b in a)
                        return a[b];
                    var c = b.charCodeAt(0), d = "\\u";
                    return 16 > c ? d += "000" : 256 > c ? d += "00" : 4096 > c && (d += "0"), a[b] = d + c.toString(16), a[b]
                })), '"' + d.join("") + '"'
            },
            format: function(a, b) {
                a = String(a);
                var c = Array.prototype.slice.call(arguments, 1), d = Object.prototype.toString;
                return c.length ? (c = 1 === c.length ? null !== b && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c, a.replace(/#\{(.+?)\}/g, function(a, b) {
                    var e = c[b];
                    return "[object Function]" === d.call(e) && (e = e(b)), "undefined" == typeof e ? "" : e
                })) : a
            },
            toCamelCase: function(a) {
                return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
                    return a.charAt(1).toUpperCase()
                })
            }
        }
    }(), c.string.trim = c.string.trim || function() {
        var a = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        return function(b) {
            return b = b || "", String(b).replace(a, "")
        }
    }(), c.number = c.number || {
        pad: function(a, b) {
            var c = "", d = 0 > a, e = String(Math.abs(a));
            return e.length < b && (c = new Array(b - e.length + 1).join("0")), (d ? "-" : "") + c + e
        }
    }, c.date = c.date || {
        format: function(a, b) {
            function d(a, c) {
                b = b.replace(a, c)
            }
            if ("string" != typeof b)
                return a.toString();
            var e = c.number.pad, f = a.getFullYear(), g = a.getMonth() + 1, h = a.getDate(), i = a.getHours(), j = a.getMinutes(), k = a.getSeconds();
            return d(/yyyy/g, e(f, 4)), d(/yy/g, e(parseInt(f.toString().slice(2), 10), 2)), d(/MM/g, e(g, 2)), d(/M/g, g), d(/dd/g, e(h, 2)), d(/d/g, h), d(/HH/g, e(i, 2)), d(/H/g, i), d(/hh/g, e(i%12, 2)), d(/h/g, i%12), d(/mm/g, e(j, 2)), d(/m/g, j), d(/ss/g, e(k, 2)), d(/s/g, k), b
        }
    }, c.object = c.object || {
        map: function(a, b) {
            var c = {};
            for (var d in a)
                a.hasOwnProperty(d) && (c[d] = b(a[d], d));
            return c
        }
    }, c.event = c.event || {
        on: function(a, b, c) {
            a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1)
        },
        un: function(a, b, c) {
            a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener && a.removeEventListener(b, c)
        }
    }, c.cookie = c.cookie || {
        _isValidKey: function(a) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)
        },
        _getRaw: function(a) {
            if (c.cookie._isValidKey(a)) {
                var b = new RegExp("(^| )" + a + "=([^;]*)(;|$)"), d = b.exec(document.cookie);
                if (d)
                    return d[2] || null
            }
            return null
        },
        _setRaw: function(a, b, d) {
            if (c.cookie._isValidKey(a)) {
                d = d || {};
                var e = d.expires;
                "number" == typeof d.expires && (e = new Date, e.setTime(e.getTime() + d.expires)), document.cookie = a + "=" + b + (d.path ? "; path=" + d.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (d.domain ? "; domain=" + d.domain : "") + (d.secure ? "; secure" : "")
            }
        },
        get: function(a) {
            var b = c.cookie._getRaw(a);
            return "string" == typeof b ? b = decodeURIComponent(b) : null
        },
        set: function(a, b, d) {
            c.cookie._setRaw(a, encodeURIComponent(b), d)
        },
        remove: function(a, b) {
            b = b || {}, b.expires = new Date(0), c.cookie._setRaw(a, "", b)
        }
    }, c.storage = c.storage || function() {
        var b = {};
        c.event.on(a, "beforeunload", function() {
            for (var a in b)
                try {
                    c.storage.remove(a), delete b[a]
            } catch (d) {}
        });
        var d = {
            id: "sinaadToolkitUserDataContainer",
            name: location.hostname,
            init: function() {
                var a = document.getElementById(d.id);
                if (!a)
                    try {
                        a = document.createElement("input"), a.type = "hidden", a.style.display = "none", a.addBehavior("#default#userData"), document.body.insertBefore(a, document.body.firstChild);
                        var b = new Date;
                        b.setDate(b.getDate() + 365), a.expires = b.toUTCString()
                } catch (e) {
                    return c.debug("sinaadToolkit.storage:userData init fail, " + e.message), null
                }
                return a
            },
            setItem: function(a, e, f) {
                var g = d.init();
                g && (g.load(d.name), g.setAttribute(a, e + (f ? ";expires=" + (c.now() + f) : "")), g.save(d.name)), f || (b[a] = 1)
            },
            getItem: function(a) {
                var b = d.init();
                return b ? (b.load(d.name), b.getAttribute(a)) : null
            },
            removeItem: function(a) {
                var b = d.init();
                b && (b.load(d.name), b.removeAttribute(a), b.save(d.name))
            }
        }, e = {
            getItem: function(b) {
                return a.localStorage.getItem(b)
            },
            setItem: function(d, e, f) {
                a.localStorage.setItem(d, e + (f ? ";expires=" + (c.now() + f) : "")), f || (b[d] = 1)
            },
            removeItem: function(b) {
                a.localStorage.removeItem(b)
            }
        }, f = {
            getItem: function(a) {
                return c.cookie.get(a)
            },
            setItem: function(a, b, d) {
                c.cookie.set(a, b, {
                    expires: d || 0
                })
            },
            removeItem: function(a) {
                c.cookie.remove(a)
            }
        }, g = a.localStorage ? e: c.browser.ie && c.browser.ie < 8 ? d: f;
        try {
            g.setItem("sinaads_test_ls", "support")
        } catch (h) {
            g = f
        }
        return {
            get: function(a) {
                try {
                    var b = g.getItem(a);
                    return b ? (c.debug("sinaadToolkit.storage.get:get value of " + a + ":" + b), b = b.split(";expires="), b[1] && c.now() > parseInt(b[1], 10) ? (g.removeItem(a), null) : b[0]) : null
                } catch (d) {
                    return c.debug("sinaadToolkit.storage.get:" + d.message), null
                }
            },
            set: function(a, b, d) {
                try {
                    g.setItem(a, b, d)
                } catch (e) {
                    c.error("sinaadToolkit.storage.set:" + e.message)
                }
            },
            remove: function(a) {
                try {
                    g.removeItem(a)
                } catch (b) {
                    c.error("sinaadToolkit.storage.remove:" + b.message)
                }
            }
        }
    }(), c.url = c.url || {
        protocol: function() {
            return "https:" === a.location.protocol ? "https://" : "http://"
        }(),
        ensureURL: function(a) {
            return a = c.string.trim(a), a ? /^(http|https):\/\//.test(a) ? a : c.url.protocol + a : ""
        },
        createURL: function(a, b, c) {
            return [c ? "https": "http", "://", a, b].join("")
        },
        top: function() {
            var b;
            try {
                b = a.top.location.href
            } catch (d) {}
            return b = b || (a.top === a.self ? a.location.href : a.document.referrer), b || c.error("sinaadToolkit:Cannot get pageurl on which ad locates."), b
        }()
    }, c.dom = c.dom || {
        get: function(a) {
            return a ? "string" == typeof a || a instanceof String ? document.getElementById(a) : !a.nodeName || 1 !== a.nodeType && 9 !== a.nodeType ? null : a : null
        },
        addClass: function(a, b) {
            a = c.dom.get(a);
            for (var d = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, h = d.length; h > g; g++)
                f.indexOf(" " + d[g] + " ") < 0 && (e += (e ? " " : "") + d[g]);
            return a.className = e, a
        },
        getDocument: function(a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        },
        getComputedStyle: function(a, b) {
            var d, e = c.dom.getDocument(a);
            return e.defaultView && e.defaultView.getComputedStyle && (d = e.defaultView.getComputedStyle(a, null)) ? d[b] || d.getPropertyValue(b) : ""
        },
        getCurrentStyle: function(a, b) {
            return a.style[b] || (a.currentStyle ? a.currentStyle[b] : "") || c.dom.getComputedStyle(a, b)
        },
        _styleFixer: {},
        _styleFilter: [],
        getStyle: function(a, b) {
            var d, e = c.dom;
            a = e.get(a), b = c.string.toCamelCase(b);
            var f = a.style[b] || (a.currentStyle ? a.currentStyle[b] : "") || e.getComputedStyle(a, b);
            return f && "auto" !== f || (d = e._styleFixer[b], d && (f = d.get ? d.get(a, b, f) : c.dom.getStyle(a, d))), (d = e._styleFilter) && (f = d.filter(b, f, "get")), f
        },
        getPosition: function(a) {
            a = c.dom.get(a);
            var b, d, e = c.dom.getDocument(a), f = c.browser, g = c.dom.getStyle, h = {
                left: 0,
                top: 0
            }, i = f.ie&&!f.isStrict ? e.body: e.documentElement;
            if (a === i)
                return h;
            if (a.getBoundingClientRect) {
                d = a.getBoundingClientRect(), h.left = Math.floor(d.left) + Math.max(e.documentElement.scrollLeft, e.body.scrollLeft), h.top = Math.floor(d.top) + Math.max(e.documentElement.scrollTop, e.body.scrollTop), h.left -= e.documentElement.clientLeft, h.top -= e.documentElement.clientTop;
                var j = e.body, k = parseInt(g(j, "borderLeftWidth"), 10), l = parseInt(g(j, "borderTopWidth"), 10);
                f.ie&&!f.isStrict && (h.left -= isNaN(k) ? 2 : k, h.top -= isNaN(l) ? 2 : l)
            } else {
                b = a;
                do {
                    if (h.left += b.offsetLeft, h.top += b.offsetTop, f.isWebkit > 0 && "fixed" === g(b, "position")) {
                        h.left += e.body.scrollLeft, h.top += e.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                }
                while (b && b !== a);
                for ((f.opera > 0 || f.isWebkit > 0 && "absolute" === g(a, "position")) && (h.top -= e.body.offsetTop), b = a.offsetParent; b && b !== e.body;)
                    h.left -= b.scrollLeft, f.opera && "TR" === b.tagName || (h.top -= b.scrollTop), b = b.offsetParent
            }
            return h
        },
        fill: function() {
            var a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g;
            return function(b, d) {
                function e() {
                    h++<i && (f = g[0]) && (c.browser.ie <= 6 && f.defer ? e() : f.src ? c.sio.loadScript(f.src, e, {
                        charset: "gb2312"
                    }) : (c.globalEval((f.text || f.textContent || f.innerHTML || "").replace(a, "")), e()), f.parentNode && f.parentNode.removeChild(f))
                }
                if (b) {
                    b.innerHTML = '<i style="display:none;">Hack ie first node is script</i>' + d;
                    var f, g = b.getElementsByTagName("script"), h = 0, i = g.length;
                    e()
                }
            }
        }()
    }, c.dom._styleFilter.filter = function(a, b, d) {
        for (var e, f = 0, g = c.dom._styleFilter; e = g[f]; f++)(e = e[d]) 
            && (b = e(a, b));
        return b
    }, c.page = c.page || {
        getScrollTop: function() {
            var b = document;
            return a.pageYOffset || b.documentElement.scrollTop || b.body.scrollTop
        },
        getScrollLeft: function() {
            var b = document;
            return a.pageXOffset || b.documentElement.scrollLeft || b.body.scrollLeft
        },
        getViewHeight: function() {
            var a = document, b = "BackCompat" === a.compatMode ? a.body: a.documentElement;
            return b.clientHeight
        },
        getViewWidth: function() {
            var a = document, b = "BackCompat" === a.compatMode ? a.body: a.documentElement;
            return b.clientWidth
        }
    }, c.Deferred = c.Deferred || function(a) {
        function b(a, b, d, f) {
            return function() {
                if ("function" == typeof d)
                    try {
                        var g = d.apply(a, arguments);
                        e.isPromise(g) ? g.then(function() {
                            b.resolve.apply(b, arguments)
                        }, function() {
                            b.reject.apply(b, arguments)
                        }) : b.resolve.call(b, g)
                } catch (h) {
                    c.error("sinaadToolkit.Deferred:Error occurred in _pipe. " + h.message), b.reject(h)
                } else 
                    b[f].apply(b, a._args)
            }
        }
        function d(b) {
            if ("pending" !== b._state) {
                var d = "resolved" === b._state ? b._resolves.slice(): b._rejects.slice();
                setTimeout(function() {
                    a.array.each(d, function(a) {
                        try {
                            a.apply(b, b._args)
                        } catch (d) {
                            c.error("sinaadToolkit.Deferred:Error occurred in _flush. " + d.message)
                        }
                    })
                }, 0), b._resolves = [], b._rejects = []
            }
        }
        function e() {
            this._state = "pending", this._args = null, this._resolves = [], this._rejects = []
        }
        return e.prototype = {
            resolve: function() {
                "pending" === this._state && (this._state = "resolved", this._args = [].slice.call(arguments), d(this))
            },
            reject: function() {
                "pending" === this._state && (this._state = "rejected", this._args = [].slice.call(arguments), d(this))
            },
            then: function(a, c) {
                var f = new e;
                return this._resolves.push(b(this, f, a, "resolve")), this._rejects.push(b(this, f, c, "reject")), d(this), f
            },
            done: function(a) {
                return this.then(a)
            },
            fail: function(a) {
                return this.then(null, a)
            }
        }, e.isPromise = function(a) {
            return a && "function" == typeof a.then
        }, e
    }(c), c.throttle = c.throttle || function(a, b, c, d) {
        var e, f, g, h =+ new Date, i = 0, j = 0, k = null, l = function() {
            j = h, a.apply(f, g)
        };
        return function() {
            h =+ new Date, f = this, g = arguments, e = h - (d ? i : j) - b, clearTimeout(k), d ? c ? k = setTimeout(l, b) : e >= 0 && l() : e >= 0 ? l() : c && (k = setTimeout(l, - e)), i = h
        }
    }, c.debounce = c.debounce || function(a, b, d) {
        return c.throttle(a, b, d, !0)
    }, c.sio = c.sio || function() {
        function b(a, b, c) {
            a.setAttribute("type", "text/javascript"), c && a.setAttribute("charset", c), a.setAttribute("src", b), document.getElementsByTagName("head")[0].appendChild(a)
        }
        function d(a) {
            a && a.parentNode && a.parentNode.removeChild(a), a = null
        }
        return {
            IMG_1_1: "http://d00.sina.com.cn/a.gif",
            loadScript: function(a, c, e) {
                var f, g = document.createElement("SCRIPT"), h = 0, i = e || {}, j = i.charset || "utf-8", k = c || function() {}, l = i.timeout || 0;
                g.onload = g.onreadystatechange = function() {
                    if (!h) {
                        var a = g.readyState;
                        if ("undefined" == typeof a || "loaded" === a || "complete" === a) {
                            h = 1;
                            try {
                                k(), clearTimeout(f)
                            } finally {
                                g.onload = g.onreadystatechange = null, d(g)
                            }
                        }
                    }
                }, l && (f = setTimeout(function() {
                    g.onload = g.onreadystatechange = null, d(g), i.onfailure && i.onfailure()
                }, l)), b(g, a, j)
            },
            jsonp: function(e, f, g) {
                function h(b) {
                    return function() {
                        try {
                            b ? n.onfailure && n.onfailure() : (f.apply(a, arguments), clearTimeout(j)), a[i] = null, delete a[i]
                        } catch (c) {} finally {
                            d(l)
                        }
                    }
                }
                var i, j, k, l = document.createElement("SCRIPT"), m = "_sinaads_cbs_", n = g || {}, o = n.charset || "utf-8", p = n.queryField || "callback", q = n.timeout || 0, r = new RegExp("(\\?|&)" + p + "=([^&]*)");
                c.isFunction(f) ? (i = m + Math.floor(2147483648 * Math.random()).toString(36), a[i] = h(0)) : c.isString(f) ? i = f : (k = r.exec(e)) && (i = k[2]), q && (j = setTimeout(h(1), q)), e = e.replace(r, "$1" + p + "=" + i), e.search(r) < 0 && (e += (e.indexOf("?") < 0 ? "?" : "&") + p + "=" + i), b(l, e, o)
            },
            log: function(b, d) {
                var e = new Image, f = "_sinaads_sio_log_" + c.rnd();
                a[f] = e, e.onload = e.onerror = e.onabort = function() {
                    e.onload = e.onerror = e.onabort = null, a[f] = null, e = null
                }, e.src = b + (d ? "" : (b.indexOf("?") > 0 ? "&" : "?") + f)
            }
        }
    }(), c.swf = c.swf || {
        uid: 0,
        getMovie: function(b, d) {
            d = d || a;
            var e, f = d.document[b];
            return 9 === c.browser.ie ? f && f.length ? 1 === (e = c.array.remove(c.toArray(f), function(a) {
                return "embed" !== a.tagName.toLowerCase()
            })).length ? e[0] : e : f : f || d[b]
        },
        createHTML: function(a) {
            a = a || {};
            var b, d, e = {}, f = c.string.encodeHTML;
            for (d in a)
                e[d] = a[d];
            a = e;
            var g = a.vars;
            if ("string" == typeof g)
                a.flashvars = g;
            else {
                var h = [];
                for (d in g)
                    b = g[d], h.push(d + "=" + encodeURIComponent(b));
                a.flashvars = h.join("&")
            }
            var i = ["<embed"];
            a.name = a.id || "sinaadtk_swf_uid_" + c.swf.uid++, a.align = a.align || "middle", a.src = a.url || "", a.type = "application/x-shockwave-flash", a.pluginspage = "http://www.macromedia.com/go/getflashplayer", delete a.id, delete a.url, delete a.vars;
            var j;
            for (d in a)
                if (b = a[d], b || b===!1 || 0 === b) {
                    if (new RegExp("^salign$", "i").test(d)) {
                        j = b;
                        continue
                    }
                    i.push(" ", d, '="', f(b), '"')
                }
            return j && i.push(' salign="', f(j), '"'), i.push("/>"), i.join("")
        }
    }, c.iframe = c.iframe || {
        uid: 0,
        init: function(a, b, c, d) {
            var e = d ? '"': "", f = e + "0" + e;
            a.width = e + b + e, a.height = e + c + e, a.frameborder = f, a.marginwidth = f, a.marginheight = f, a.vspace = f, a.hspace = f, a.allowtransparency = e + "true" + e, a.scrolling = e + "no" + e
        },
        createHTML: function(a) {
            var b = [];
            return a.name = a.name || a.id || "sinaadtk_iframe_uid_" + c.iframe.uid++, c.object.map(a, function(a, c) {
                b.push(" " + c + '="' + (null === a ? "" : a) + '"')
            }), "<iframe" + b.join("") + "></iframe>"
        },
        fill: function(b, d) {
            var e, f = c.browser.ie;
            if (f) {
                try {
                    e=!!b.contentWindow.document
                } catch (g) {
                    e=!1
                }
                if (e)
                    try {
                        f > 6 ? (a.frames[b.name].contents = d, b.src = 'javascript:window["contents"]') : (a.frames[b.name].contents = d, b.src = 'javascript:document.write(window["contents"]);/* document.close(); */')
                    } catch (g) {
                    c.error("sinaadToolkit.iframe.fill: cannot fill iframe content in ie, ", g)
                } else 
                    try {
                        var h = "sinaads-ad-iframecontent-" + c.rnd();
                        a[h] = d, d = 'var adContent = window.parent["' + h + '"];window.parent["' + h + '"] = null;document.write(adContent);', d = c.browser.ie && c.browser.ie <= 6 ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + d + "<\\/scr\\' + \\'ipt>\\');" + "/*document.close();*/" + "};" : 'document.domain = "' + document.domain + '";' + d + "/*document.close();*/", b.src = 'javascript:\'<script type="text/javascript">' + d + "</script>'"
                } catch (g) {
                    a[h] = null, c.error("sinaadToolkit.iframe.fill:Cannot fill iframe in IE by modifying the document.domain. ", g)
                }
            } else 
                try {
                    e = b.contentWindow ? b.contentWindow.document : b.contentDocument, c.browser.firefox && e.open("text/html", "replace"), e.write(d), e.close()
            } catch (g) {
                c.error("sinaadToolkit.iframe.fill:Cannot fill iframe by regular method. ", g)
            }
        }
    }, c.monitor = c.monitor || {
        parseTpl: function() {
            var a = /\{__([a-zA-Z0-9]+(_*[a-zA-Z0-9])*)__\}/g;
            return function(b, d) {
                return d = d || {}, d.timestamp = d.timestamp || c.now(), b ? b.replace(a, function(a, b) {
                    return b.indexOf("adbox_") > 0 ? (b = b.split("_"), "{__mo" + b[2] + "__}") : d[b] || a
                }) : ""
            }
        }(),
        createImpressMonitor: function(a) {
            var b = [];
            return c.array.each(a, function(a) {
                var d = {};
                c.iframe.init(d, 1, 1, !1), d.src = a, d.style = "display:none;", b.push(c.iframe.createHTML(d))
            }), b.join("")
        },
        createTrackingMonitor: function(a, b) {
            if (!a)
                return "";
            var d = c.url.ensureURL(a);
            return c.array.each(b, function(a) {
                a = c.url.ensureURL(a), a && (d = a + encodeURIComponent(d))
            }), d
        },
        stringify: function(a) {
            var b = [];
            return c.array.each(a, function(a) {
                a && b.push(encodeURIComponent(a))
            }), b.join("|")
        },
        parse: function(a) {
            var b = [], d = (a || "").split("|");
            return c.array.each(d, function(a) {
                a && b.push(decodeURIComponent(a))
            }), b
        }
    }, c.ad = c.ad || {
        getTimesInRange: function(a, b, d) {
            a = "sinaads_tc_" + a, d = d || 0;
            var e, f = (c.storage.get(a) || "").split("::"), g = c.now();
            return e = f[1] ? parseInt(f[1], 10) : g + d, e - g >= 0 ? f = f[0] ? parseInt(f[0], 10) + 1 : 1 : (f = 1, e = g + d, c.storage.remove(a)), c.storage.set(a, f + "::" + e, g + d), f > b ? 0 : f
        },
        getTypeBySrc: function(a, b) {
            var c = b;
            if (!c)
                switch (c = a.substring(a.length - 3).toLowerCase()) {
                case"swf":
                    c = "flash";
                    break;
                case"tml":
                    c = "url";
                    break;
                case".js":
                    c = "js";
                    break;
                case"png":
                case"jpg":
                case"gif":
                case"bmp":
                    c = "image";
                    break;
                default:
                    c = "html"
                }
            return "url" === c && a.indexOf("adbox.sina.com.cn/ad/") >= 0 && (c = "adbox"), c
        },
        embed: function(a, b, d, e, f) {
            switch (b) {
            case"text":
            case"image":
            case"url":
            case"adbox":
            case"flash":
                a.innerHTML = f;
                break;
            default:
                c.sandbox.create(a, d, e, f)
            }
        },
        createHTML: function(a, b, d, e, f, g, h, i, j) {
            var k, l = [], m = "", n = {}, o = 0, p = 0;
            if (j = j || {}, b = c.array.ensureArray(b), a = c.array.ensureArray(a), f = c.array.ensureArray(f), h = c.monitor.stringify(c.array.ensureArray(h)), g = c.monitor.stringify(c.array.ensureArray(g)), d += c.isNumber(d) ? "px" : "", e += c.isNumber(e) ? "px" : "", c.array.each(b, function(b, d) {
                n["src" + d] = b, n["type" + d] = a[d] || c.ad.getTypeBySrc(b, a[d]), n["link" + d] = f[d]
            }), n.width = d, n.height = e, n.src = n.src0 || "", n.type = n.type0 || "", n.link = n.link0 || "", i && "string" == typeof i)
                return c.string.format(i, n);
            for (o = b.length, o = 1; o > p; p++) {
                switch (b = n["src" + p], a = n["type" + p], f = n["link" + p], a) {
                case"image":
                    m = '<img border="0" src="' + c.url.ensureURL(b) + '" style="width:' + d + ";height:" + e + ';border:0" alt="' + b + '"/>', m = f ? '<a href="' + f + '" target="_blank">' + m + "</a>" : m;
                    break;
                case"text":
                    m = f ? '<a href="' + f + '" target="_blank">' + b + "</a>" : b;
                    break;
                case"flash":
                    var q = {};
                    f && (q.clickTAG = f), m = c.swf.createHTML({
                        url: c.url.ensureURL(b),
                        width: d,
                        height: e,
                        wmode: j.wmode || "opaque",
                        vars: q,
                        id: j.id || ""
                    }), f && (m = ['<div style="width:' + d + ";height:" + e + ';position:relative;overflow:hidden;">', m, '<a style="position:absolute;background:#fff;opacity:0;filter:alpha(opacity=0);width:' + d + ";height:" + e + ';left:0;top:0" href="' + f + '" target="_blank"></a>', "</div>"].join(""));
                    break;
                case"adbox":
                case"url":
                    k = {}, c.iframe.init(k, d, e, !1), k.src = c.url.ensureURL(b), k.name = k.name ? ["name=" + k.name] : [], g && k.name.push("clickTAG=" + g), h && k.name.push("viewTAG=" + h), k.name = k.name.join("&"), m = c.iframe.createHTML(k);
                    break;
                case"js":
                    m = ["<", 'script>window.clickTAG="' + g + '";window.viewTAG="' + h + '";</', "script>", "<", 'script charset="utf-8" src="', c.url.ensureURL(b), '"></', "script>"].join("");
                    break;
                default:
                    m = ["<", 'script>window.clickTAG="' + g + '";window.viewTAG="' + h + '";</', "script>", b.replace(/\\x3c/g, "<").replace(/\\x3e/g, ">")].join("")
                }
                l.push(m)
            }
            return l.join(" ")
        }
    }, c.sandbox = c.sandbox || function() {
        function a(b, d) {
            var e, f = "";
            switch (typeof b) {
            case"string":
                d.push(c.string.formalString(b));
                break;
            case"number":
                d.push(isFinite(b)&&!isNaN(b) ? b : "null");
                break;
            case"boolean":
                d.push(b);
                break;
            case"undefined":
                d.push("null");
                break;
            case"object":
                if (null === b) {
                    d.push("null");
                    break
                }
                if (b instanceof Array) {
                    var g = b.length;
                    for (d.push("["), f = "", e = 0; g > e; e++)
                        d.push(f), a(b[e], d), f = ",";
                    d.push("]");
                    break
                }
                d.push("{");
                var h;
                f = "";
                for (var i in b)
                    b.hasOwnProperty(i) && (h = b[i], "function" != typeof h && (d.push(f), d.push(i), d.push(":"), a(h, d), f = ","));
                d.push("}");
                break;
            case"function":
            }
        }
        function b(b) {
            var d = [];
            return c.object.map(b, function(b, c) {
                if (null !== b) {
                    var e = [];
                    try {
                        a(b, e), e = e.join("")
                    } catch (f) {}
                    e && d.push(c, "=", e, ";")
                }
            }), d.join("")
        }
        var d = 0;
        return {
            create: function(a, e, f, g, h) {
                var i = "sinaadtk_sandbox_id_" + d++;
                h = h || {}, h.sinaadToolkitSandboxId = i, e += c.isNumber(e) ? "px" : "", f += c.isNumber(f) ? "px" : "";
                var j = {};
                c.iframe.init(j, e, f, 0), j.src = "javascript:'<html><body style=background:transparent;></body></html>'", j.id = i, j.style = "float:left;", a.innerHTML = c.iframe.createHTML(j), h = b(h), c.iframe.fill(document.getElementById(i), ['<!doctype html><html><body style="background:transparent">', "<", "script>", h, "</", "script>", g, "</body></html>"].join(""))
            }
        }
    }()
}(window), function(a, b, c) {
    "use strict";
    function d(e) {
        e = e || {}, this.id = e.uid || "sinaadToolkitBox" + d.uid++, this.className = e.className || "sinaad-toolkit-box", this.position = this._parsePosition(e.position), this.width = e.width || 100, this.height = e.height || 100, this.follow = e.follow || 0, this.zIndex = e.zIndex || 99999, this.autoShow = "undefined" == typeof e.autoShow ? 0 : e.autoShow, this.minViewportWidth = e.minViewportWidth || 0, this.useFix = this.follow && c.browser.isSupportFixed ? 1 : 0;
        var f = b.createElement("div");
        f.id = this.id, f.className = this.className, f.style.cssText = ["position:" + (this.useFix ? "fixed" : "absolute"), "width:" + this.width + "px", "height:" + this.height + "px", "z-index:" + this.zIndex, "display:" + (this.autoShow ? "block" : "none")].join(";"), b.body.insertBefore(f, b.body.firstChild), this.main = f, this.resetPositionHandler = this._getResetPositionHandler(), c.event.on(a, "resize", this.resetPositionHandler), this.follow&&!c.browser.isSupportFixed && c.event.on(a, "scroll", this.resetPositionHandler), this.setPosition()
    }
    d.uid = 0, d.prototype = {
        _parseStringPosition: function(a) {
            var b = (a || "").match(/^([a-zA-Z]+)*([+|-]*\d+)*(?:px)*\s+([a-zA-Z]+)*([+|-]*\d+)*(?:px)*$/), c = {};
            return b || (b = []), c.pos = [b[1] || "left", b[3] || "top"], c.offset = [b[2] ? parseInt(b[2], 10): 0, b[4] ? parseInt(b[4], 10): 0], c
        },
        _parsePosition: function(d) {
            var e = {}, f = [];
            return "string" == typeof d ? (e.of = a, e.at = d) : (d = d || {}, e.of = d.of || a, e.at = d.at, e.my = d.my), c.array.each(e.of, function(c) {
                f.push("string" == typeof c ? "body" === c ? b.body : "window" === c ? a : b.getElementById(c) : c || a)
            }), e.of = f, e.at = this._parseStringPosition(e.at), e.my = this._parseStringPosition(e.my || e.at.pos.join(" ")), e
        },
        _getResetPositionHandler: function() {
            var a, b = this;
            return function() {
                a && clearTimeout(a), a = setTimeout(function() {
                    b.setPosition()
                }, 100)
            }
        },
        _getSize: function(d) {
            var e = [0, 0];
            return e = a === d || b.body === d ? [c.page.getViewWidth(), c.page.getViewHeight()] : [parseInt(c.dom.getStyle(d, "width"), 10), parseInt(c.dom.getStyle(d, "height"), 10)]
        },
        _getPosition: function(d) {
            var e, f = [0, 0];
            return a === d || b.body === d ? f = [0, 0] : (e = c.dom.getPosition(d), f = [e.left, e.top]), f
        },
        getMain: function() {
            return this.main
        },
        show: function() {
            this.getMain().style.display = "block"
        },
        hide: function() {
            this.getMain().style.display = "none"
        },
        setPosition: function() {
            var b = this.getMain(), d = this.position, e = d.of, f = d.at, g = d.my, h = this._getSize(e[0]), i = this._getPosition(e[0]), j = e[1] ? this._getSize(e[1]): h, k = e[1] ? this._getPosition(e[1]): i, l = this._getSize(b), m = c.page.getViewWidth(), n = Math.min(a === e[0] && this.minViewportWidth ? m / 2 - this.minViewportWidth / 2 : 0, 0), o = i[0] + g.offset[0] + f.offset[0] + (this.follow&&!c.browser.isSupportFixed ? c.page.getScrollLeft() : 0);
            switch (g.pos[0]) {
            case"center":
                o -= l[0] / 2;
                break;
            case"right":
                o -= l[0] + n;
                break;
            default:
                o += n
            }
            switch (f.pos[0]) {
            case"center":
                o += h[0] / 2;
                break;
            case"right":
                o += h[0];
                break;
            default:
                o += 0
            }
            var p = k[1] + g.offset[1] + f.offset[1] + (this.follow&&!c.browser.isSupportFixed ? c.page.getScrollTop() : 0);
            switch (g.pos[1]) {
            case"center":
                p -= l[1] / 2;
                break;
            case"bottom":
                p -= l[1];
                break;
            default:
                p += 0
            }
            switch (f.pos[1]) {
            case"center":
                p += j[1] / 2;
                break;
            case"bottom":
                p += j[1];
                break;
            default:
                p += 0
            }
            b.style.left = o + "px", b.style.top = p + "px"
        }
    }, c.Box = c.Box || d
}(window, document, window.sinaadToolkit), function(a, b, c) {
    "use strict";
    function d(a) {
        this.uid = a || "fc-uid" + ( + new Date).toString(36), this.list = {}
    }
    if (!b.FrequenceController)
        return d.prototype = {
            has: function(a) {
                return this.list[a]
            },
            register: function(a, b) {
                b && (this.list[a] = b)
            },
            enable: function(a) {
                this.has(a) && c.storage.remove(this.uid + a + "_disabled")
            },
            disable: function(a) {
                this.has(a) && c.storage.set(this.uid + a + "_disabled", 1, 1e3 * this.list[a])
            },
            isDisabled: function(a) {
                return c.storage.get(this.uid + a + "_disabled")
            }
        }, b.FrequenceController = d, d
}(window, window.sinaadToolkit || window, window.sinaadToolkit), function(a, b) {
    "use strict";
    function c(a, b) {
        return function() {
            a.done(b)
        }
    }
    function d(a) {
        for (var b, d, e = 0; b = a.order[e++];)
            f(a, b) && (a._state[b] = h.DOING, a._doneTimeoutTimer[b] = setTimeout(c(a, b), a._timeout), d = a._callback[b], "function" == typeof d ? d.apply(a._callbackThis[b] || null, a._callbackArgs[b] || []) : a.done(b));
        g.allDone(a) && a._checkTimer && clearInterval(a._checkTimer)
    }
    function e(a) {
        return function() {
            d(a)
        }
    }
    function f(a, b) {
        for (var c, d = 0; (c = a.order[d++]) && c !== b;)
            if (a._state[c] !== h.DONE)
                return !1;
        return a._state[b] ? a._state[b] === h.READY : !0
    }
    function g(a, b) {
        var c, d = b || {}, f = 0;
        for (this._uid = "oc-uid" + ( + new Date).toString(36), this._state = {}, this._callback = {}, this._callbackArgs = {}, this._callbackThis = {}, this._doneTimeoutTimer = {}, this._frequence = d.frequence || i, this._timeout = d.timeout || j, this.order = a || []; c = this.order[f++];)
            this._state[c] = h.INIT;
        this._checkTimer = setInterval(e(this), this._frequence)
    }
    if (!b.OrderController) {
        var h = {
            INIT: 1,
            READY: 2,
            DOING: 3,
            DONE: 4
        }, i = 1e3, j = 12e3;
        g.allDone = function(a) {
            for (var b, c = 0; b = a.order[c++];)
                if (a._state[b] !== h.DONE)
                    return !1;
            return !0
        }, g.prototype = {
            has: function(a) {
                return - 1 !== ("|" + this.order.join("|") + "|").indexOf("|" + a + "|")
            },
            ready: function(a, b, c, d) {
                this.has(a) ? (this._state[a] = h.READY, this._callback[a] = b, this._callbackArgs[a] = c, this._callbackThis[a] = d) : b.apply(d || null, c || [])
            },
            done: function(a) {
                this.has(a) && (this._state[a] = h.DONE, this._doneTimeoutTimer[a] && clearTimeout(this._doneTimeoutTimer[a]), delete this._callback[a], delete this._callbackArgs[a], delete this._callbackThis[a], delete this._doneTimeoutTimer[a])
            }
        }, b.OrderController = g
    }
}(window, window.sinaadToolkit || window), window._sinaadsIsInited = window._sinaadsIsInited || function(a, b) {
    "use strict";
    b.debug("sinaads:Init sinaads!");
    var c = 1, d = "sinaads_" + b.hash(a.location.host.split(".")[0] + a.location.pathname.substring(0, a.location.pathname.lastIndexOf("/"))), e = "//sax.sina.com.cn/newimpress", f = "//sax.sina.com.cn/preview", g = b.RESOURCE_URL + "/release/plus/Media.js", h = 1e3 * parseInt(a._SINAADS_CONF_SAX_REQUEST_TIMEOUT || 30, 10), i = a._SINAADS_CONF_PAGE_MEDIA_ORDER || [], j = 1e3 * (a._SINAADS_CONF_PAGE_MEDIA_DONE_TIMEOUT || 20), k = {
        frequenceController: new b.FrequenceController(d),
        orderController: new b.OrderController(i, {
            timeout: j
        })
    }, l = function(b, c, d) {
        function g(a) {
            var e = d + (c.frequenceController.has(a) ? a : "");
            return t[e] || (t[e] = parseInt(b.storage.get(e), 10) || b.rand(1, 100), b.storage.set(e, t[e] > 1e3 ? 1 : ++t[e], 2592e6)), t[e]
        }
        function i(a) {
            return r[a] ? (b.debug("sinaads: " + a + " is server preview slot."), f) : e
        }
        function j() {
            var b = a.sinaadsExParams || {}, c = [];
            for (var d in b)
                c.push(d + "=" + encodeURIComponent(b[d]));
            return c.join("&")
        }
        function k(a) {
            return r[a]
        }
        function l() {
            function c() {
                b.cookie.remove("sinaads_entry", {
                    domain: ".sina.com.cn",
                    path: "/"
                }), b.storage.remove("sinaads_entry")
            }
            if (!p) {
                var d, e, f, g, h = document.getElementsByTagName("head")[0].getElementsByTagName("meta"), i = {}, j = h.length, k = 0;
                for (p = {}, i.keywords = []; j > k; k++)
                    d = h[k], d.name && (e = d.name.toLowerCase(), f = b.string.trim(d.content), i[e] || (i[e] = []), f && i[e].push(f));
                for (var l in i)
                    0 === l.indexOf("sinaads_") && (e = l.replace("sinaads_", ""), p[e] = i[l].join(",") || i[e].join(","));
                if (g = b.cookie.get("sinaads_entry") || b.storage.get("sinaads_entry")) {
                    p.entry = g;
                    var m = setTimeout(c, 5e3);
                    b.event.on(a, "beforeunload", function() {
                        m && clearTimeout(m), c()
                    })
                }
                b.debug("sinaads:Targeting init,", p)
            }
            return p
        }
        function m(a) {
            var c, d = {
                1: "http://d3.sina.com.cn/litong/zhitou/union/tanx.html?pid=",
                2: "http://d3.sina.com.cn/litong/zhitou/union/google.html?pid=",
                3: "http://d3.sina.com.cn/litong/zhitou/union/yihaodian.html?pid=",
                4: "http://d3.sina.com.cn/litong/zhitou/union/baidu.html?pid=",
                5: "http://js.miaozhen.com/mzad_iframe.html?_srv=MZHKY&l="
            }, e = a.engineType;
            return !a.content && a.value && (b.debug("sinaads:Old data format, need adapter(pdps)", a.id), c = a.size.split("*"), a.content = [], b.array.each(a.value, function(b) {
                "network" === e && (b.content = {
                    src: [d["" + b.manageType] + b.content + "&w=" + c[0] + "&h=" + c[1]],
                    type: ["url"]
                }), "dsp" === e && 17 !== parseInt(b.manageType, 10) && (b.content = {
                    src: [b.content],
                    type: ["html"]
                }), a.content.push(b.content)
            }), delete a.value), a.content = function(c) {
                var d = [];
                return b.array.each(c, function(c, e) {
                    var f=!0;
                    b.array.each(c.src, function(a) {
                        return b.string.trim(a) ? (f=!1, !1) : void 0
                    }), f ? b.debug("sinaads: The" + e + " Ad Content src is null, via " + a.id) : d.push(c)
                }), d
            }(a.content), b.array.each(a.content, function(c, d) {
                var e, f;
                e = b.array.ensureArray(c.type), f = b.array.ensureArray(c.link), b.array.each(c.src, function(a, c) {
                    e[c] = b.ad.getTypeBySrc(a, e[c])
                }), a.type = {
                    lmt: "stream",
                    kl: "couplet",
                    sc: "videoWindow",
                    hzh: "embed",
                    tl: "embed",
                    jx: "embed",
                    dtl: "embed",
                    an: "embed",
                    dan: "embed",
                    xan: "embed",
                    wzl: "textlink",
                    ztwzl: "zhitoutextlink",
                    qp: "fullscreen",
                    fp: "turning",
                    dl: "float",
                    tip: "tip",
                    bt: "bp",
                    sx: "follow",
                    kzdl: "coupletExt",
                    fc1: "pop",
                    kzan: "skyscraper",
                    span: "leftsuspend"
                }
                [a.type] || a.type || "embed", a.content[d] = c
            }), a
        }
        function n(a) {
            var c = b.now(), d = new b.Deferred, e = [], f=!1, n = [];
            if (b.array.each(a, function(a) {
                f=!!q[a], f ? b.debug("sinaads:current pdps data is loaded, render immedietly. ", a, q[a]) : n.push(a)
            }), f)
                d.resolve();
            else {
                var o = l();
                b.debug("sinaads:current pdps data is unload, load immedietly. " + n.join(), q), e = ["adunitid=" + n.join(","), "rotate_count=" + g(n.length > 1 ? "" : n[0]), "TIMESTAMP=" + s.toString(36), "referral=" + encodeURIComponent(b.url.top)];
                var p = k(n.join(","));
                p && e.push(p);
                var r = j();
                r && e.push(r);
                for (var t in o)
                    e.push("tg" + t + "=" + encodeURIComponent(o[t]));
                b.sio.jsonp(i(n.join(",")) + "?" + e.join("&"), function(a) {
                    if ("nodata" === a)
                        b.debug("sinaads:" + n.join() + ". No register in SAX. "), d.reject();
                    else {
                        b.debug("sinaads:request data ready. ", e, b.now(), b.now() - c, a);
                        var f=!1;
                        b.array.each(a.ad, function(a) {
                            a = m ? m(a) : a, a.content instanceof Array && a.content.length > 0 ? (q[a.id] = a, f=!0) : b.debug("sinaads:" + a.id + ". cannot found data. ")
                        }), b.array.each(a.mapUrl, function(a) {
                            b.debug("sinaads:data ready, send cookie mapping. " + a, e, b.now()), a && b.sio.log(a, 1)
                        }), f ? d.resolve() : d.reject()
                    }
                }, {
                    timeout: h,
                    onfailure: function() {
                        b.error("sinaads:request timeout, via " + n.join()), d.reject()
                    }
                })
            }
            return d
        }
        function o(c) {
            q = a._sinaadsCacheData = a._sinaadsCacheData || {};
            var d = (b.url.top.split("#")[1] || "").split("?")[0] || "", e = (b.url.top.split("?")[1] || "").split("#")[0] || "", f = (d + "&" + e).replace(/</g, "").replace(/>/g, "").replace(/"/g, "").replace(/'/g, "");
            !function() {
                for (var a, c, d = f.split("&"), e = {}, g = ["pdps", "src", "size"], h = 0, i = d.length; i > h; h++)(c = d[h]) 
                    && (c = c.split("="), 0 === c[0].indexOf("sinaads_preview_") && (a = c[0].replace("sinaads_preview_", ""), a && c[1]&&!e[a] && (e[a] = c[1], b.array.remove(g, a))));
                0 === g.length && (b.debug("sinaads:Ad Unit " + e.pdps + " is for preview only. ", e), q[e.pdps] = {
                    content: [{
                        src: decodeURIComponent(e.src).split("|"),
                        link: (decodeURIComponent(e.link) || "").split("|"),
                        monitor: (e.monitor || "").split("|"),
                        pv: (e.pv || "").split("|"),
                        type: (e.type || "").split("|")
                    }
                    ],
                    size: e.size,
                    id: e.pdps,
                    type: e.adtype || "embed",
                    highlight: e.highlight ||!1
                })
            }(), r = function() {
                var a, c = f.split("&"), d = {}, e = "sinaads_server_preview", g = 0, h = 0, i = b.date.format(new Date, "yyyyMMddHH"), j = "", k = "", l = "";
                for (g = 0, h = c.length; h > g; g++)(a = c[g]) 
                    && (a = a.split("="), a[0] === e && a[1] && (a = decodeURIComponent(a[1]).split("|"), l = a[0] || l, i = a[1] || i, j = a[2] || j, k = a[3] || k, l && (d[l] = [], i && d[l].push("date=" + encodeURIComponent(i)), j && d[l].push("tgip=" + encodeURIComponent(j)), k && d[l].push("deid=" + encodeURIComponent(k)), d[l] = d[l].join("&"))));
                return d
            }();
            for (var h, i = [], j = a._SINAADS_CONF_PRELOAD || [], k = 0; h = j[k++];)
                r[h] || i.push(h);
            i.length > 0 ? (b.debug("sinaads:Data preload of bulk requests. " + i.join(",")), n(i, g()).done(c).fail(c)) : c()
        }
        var p, q = {}, r = {}, s = b.now(), t = {};
        return {
            init: o,
            request: n,
            getSeed: g,
            add: function(a, b) {
                q[a] = b
            },
            get: function(a) {
                return a ? q[a] : q
            },
            getExParamsQueryString: j
        }
    }(b, k, d), m = function() {
        function b(a, b) {
            !d[a] && (d[a] = b)
        }
        function c(a, b, e, f, g, h) {
            var i, j = d[a];
            "function" == typeof j && (i = j(b, e, f, g, h)), i && i.type !== a && c(i.type, b, e, f, i.content, h)
        }
        var d = a.sinaadsRenderHandler || {};
        return {
            render: c,
            register: b,
            handlerMap: d
        }
    }();
    !function(b, c) {
        c.register("bp", function(c, d, e, f, g) {
            b.debug("sinaads:Rendering bp."), f = f[0], c.style.cssText = "position:absolute;top:-9999px";
            var h = [f.type[0], f.src[0] ? encodeURIComponent(f.src[0]): "", f.link[0] ? encodeURIComponent(f.link[0]): "", d, e], i = b.monitor.stringify(f.origin_monitor);
            h.join("${}").length + i.length < 2e3 && h.push(i);
            var j = b.monitor.stringify(f.pv);
            h.join("${}").length + j.length < 2e3 && h.push(j), a.open("http://d1.sina.com.cn/litong/zhitou/sinaads/release/pbv5.html?" + h.join("${}"), "sinaads_bp_" + g.sinaads_ad_pdps, "width=" + d + ",height=" + e);
            try {
                b.debug("Media: In building bp complete!"), a.sinaadsROC.bp = g.sinaads_ad_pdps, a.sinaadsROC.done(a.sinaadsROC.bp)
            } catch (k) {}
        })
    }(b, m), function(b, c) {
        c.register("couplet", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering couplet.");
            var i = g || "./src/plus/CoupletMedia.js";
            if (a.sinaadsROC.couplet = h.sinaads_ad_pdps, f = f[0], a.sinaadsCoupletClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsCoupletViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), c.style.cssText = "position:absolute;top:-9999px", 1 === f.src.length)
                switch (f.type[0]) {
                case"js":
                    b.sio.loadScript(f.src[0], null, {
                        charset: "gb2312"
                    });
                    break;
                case"html":
                    b.dom.fill(c, f.src[0])
                } else {
                var j = {
                    pdps: h.sinaads_ad_pdps,
                    src: f.src,
                    type: f.type,
                    link: f.link,
                    mainWidth: d,
                    mainHeight: e,
                    top: h.sinaads_couple_top || 0,
                    monitor: f.origin_monitor || [],
                    pv: f.pv || [],
                    sideWidth: h.sinaads_ad_side_width,
                    sideHeight: h.sinaads_ad_side_height
                };
                b.CoupletMediaData ? new b.CoupletMedia(j) : b.sio.loadScript(i, function() {
                    new b.CoupletMedia(j)
                })
            }
        }), c.register("coupletExt", function(c, d, e, f, h) {
            var i = g || b.RESOURCE_URL + "/src/plus/CoupletExtMedia.js";
            if (a.sinaadsCoupletExtClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsCoupletExtViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), f = f[0], c.style.cssText = "position:absolute;top:-9999px", f.src.length >= 2) {
                var j = {
                    src: f.src,
                    type: f.type,
                    link: f.link,
                    width: d,
                    height: e,
                    offsettop: h.sinaads_coupletext_offsettop || 100,
                    expandpos: h.sinaads_coupletext_expandpos || 700,
                    smallsize: h.sinaads_coupletext_smallsize,
                    bigsize: h.sinaads_coupletext_bigsize,
                    monitor: f.origin_monitor || [],
                    pv: f.pv || []
                };
                b.CoupletExtMediaData ? new b.CoupletExtMedia(j) : b.sio.loadScript(i, function() {
                    new b.CoupletExtMedia(j)
                })
            }
        })
    }(b, m), function(b, c) {
        c.register("embed", function(c, d, e, f, g) {
            f = b.array.ensureArray(f), f = f[0];
            var h, i = g.sinaads_uid, j = f.type || "", k = f.link || "", l = f.src || "", m = g.sinaads_ad_pdps, n = g.sinaads_ad_tpl || "";
            if (!g.sinaads_ad_fullview || "flash" !== j && "image" !== j ? (d += "px", e += "px") : (d = "100%", e = "auto"), c.style.cssText += ";display:block;overflow:hidden;text-decoration:none;", c.innerHTML = '<ins style="text-decoration:none;margin:0px auto;display:block;overflow:hidden;width:' + d + ";height:" + e + ';"></ins>', c = c.getElementsByTagName("ins")[0], h = l ? b.ad.createHTML(j, l, d, e, k, f.origin_monitor, f.pv, b.isFunction(n) ? n(0, f) : n) : "", n)
                c.innerHTML = h;
            else 
                switch (j[0]) {
                case"text":
                case"image":
                case"url":
                case"adbox":
                case"flash":
                    c.innerHTML = h;
                    break;
                default:
                    b.sandbox.create(c, d, e, h, {
                        sinaads_uid: i,
                        sinaads_ad_pdps: m,
                        sinaads_ad_width: d,
                        sinaads_ad_height: e
                    })
                }
            try {
                a.sinaadsROC.done(m)
            } catch (o) {}
        })
    }(b, m), function(b, c) {
        c.register("float", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering float.");
            var i = g || "./src/plus/FloatMedia.js";
            if (a.sinaadsROC["float"] = h.sinaads_ad_pdps, f = f[0], a.sinaadsFloatClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsFloatViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), c.style.cssText = "position:absolute;top:-99999px", 1 === f.src.length && "js" === f.type[0])
                b.sio.loadScript(f.src[0], null, {
                    charset: "gb2312"
                }), a.sinaadsROC.done(a.sinaadsROC["float"]);
            else {
                var j = {
                    type: f.type,
                    src: f.src,
                    top: h.sinaads_float_top || 0,
                    monitor: f.origin_monitor || [],
                    pv: f.pv || [],
                    link: f.link,
                    sideWidth: d,
                    sideHeight: e,
                    pdps: h.sinaads_ad_pdps,
                    contentWidth: h.sinaads_ad_contentWidth,
                    follow: h.sinaads_ad_follow || 0,
                    showPos: h.sinaads_float_show_pos
                };
                b.FloatMedia ? new b.FloatMedia(j) : b.sio.loadScript(i, function() {
                    new b.FloatMedia(j)
                })
            }
        })
    }(b, m), function(b, c) {
        c.register("follow", function(c, d, e, f, h) {
            var i = g || "./src/plus/FollowMedia.js";
            f = f[0], a.sinaadsFollowClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsFollowViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv));
            var j = {
                main: {
                    width: d,
                    height: e,
                    src: f.src[0] || "",
                    type: f.type[0] || "",
                    link: f.link[0] || "",
                    top: h.sinaads_follow_top || 0
                },
                mini: {
                    src: f.src[1] || "",
                    type: f.type[1] || "",
                    link: f.link[1] || f.link[0] || "",
                    top: h.sinaads_follow_mini_top || "bottom"
                },
                monitor: f.origin_monitor || [],
                pv: f.pv || [],
                duration: h.sinaads_ad_duration || 5
            };
            b.FollowMedia ? new b.FollowMedia(j) : b.sio.loadScript(i, function() {
                new b.FollowMedia(j)
            })
        })
    }(b, m), function(b, c) {
        c.register("fullscreen", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering fullscreen");
            var i = g || "./src/plus/FullscreenMedia.js";
            switch (a.sinaadsROC.fullscreen = h.sinaads_ad_pdps, f = f[0], a.sinaadsFullscreenClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsFullscreenViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), c.style.cssText = "position:absolute;top:-9999px", a.sinaadsFullscreenMonitor = f.origin_monitor || [], f.type[0]) {
            case"js":
                b.sio.loadScript(f.src[0], null, {
                    charset: "gb2312"
                });
                break;
            case"html":
                b.dom.fill(c, f.src[0]);
                break;
            default:
                var j = {
                    pdps: h.sinaads_ad_pdps,
                    type: f.type[0] || "",
                    src: f.src[0] || "",
                    link: f.link[0] || "",
                    monitor: f.origin_monitor || [],
                    pv: f.pv || [],
                    width: d,
                    height: e,
                    hasClose: h.sinaads_fullscreen_close || ("flash" === f.type[0] ? 1 : 0)
                };
                b.FullscreenMedia ? new b.FullscreenMedia(j) : b.sio.loadScript(i, function() {
                    new b.FullscreenMedia(j)
                })
            }
        })
    }(b, m), function(b, c) {
        c.register("stream", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering stream.");
            var i = g || "./src/plus/StreamMedia.js";
            if (a.sinaadsROC.stream = h.sinaads_ad_pdps, f = f[0], c.style.cssText = "position:absolute;top:-9999px", a.sinaadsStreamMonitor = f.origin_monitor || [], a.sinaadsStreamClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsStreamViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), 1 === f.src.length) {
                var j = document.createElement("div");
                switch (j.id = "SteamMediaWrap", document.body.insertBefore(j, document.body.firstChild), f.type[0]) {
                case"js":
                    b.sio.loadScript(f.src[0], null, {
                        charset: "gb2312"
                    });
                    break;
                case"html":
                    b.dom.fill(c, f.src[0])
                }
            } else {
                var k = {
                    main: {
                        type: f.type[0] || "flash",
                        src: f.src[0] || "",
                        link: f.link[0] || "",
                        width: d,
                        height: e,
                        top: h.sinaads_top || 0
                    },
                    mini: {
                        src: f.src[1] || "",
                        type: f.type[1] || "flash",
                        link: f.link[1] || f.link[0] || ""
                    },
                    pdps: h.sinaads_ad_pdps,
                    monitor: f.origin_monitor || [],
                    pv: f.pv || []
                };
                b.StreamMedia ? new b.StreamMedia(k) : b.sio.loadScript(i, function() {
                    new b.StreamMedia(k)
                })
            }
        })
    }(b, m), function(a, b) {
        function c(b, c, d, e, f) {
            var g = f.sinaads_ad_tpl || "", h = [];
            a.array.each(e, function(b, c) {
                h.push(a.ad.createHTML(b.type, b.src, 0, 0, b.link, b.origin_monitor, b.pv, a.isFunction(g) ? g(c, b) : g))
            }), b.style.cssText += ";text-decoration:none", b.innerHTML = h.join("")
        }
        b.register("textlink", c), b.register("zhitoutextlink", c)
    }(b, m), function(b, c) {
        c.register("tip", function(c, d, e, f, h) {
            var i = g || "./src/plus/TipsMedia.js";
            f = f[0], a.sinaadsTipClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsTipViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv));
            var j = {
                width: d,
                height: e,
                src: f.src,
                type: f.type,
                link: f.link,
                monitor: f.origin_monitor || [],
                pv: f.pv || [],
                autoShow: 1,
                top: h.sinaads_tip_top || 0,
                left: h.sinaads_tip_left || 0,
                zIndex: h.sinaads_ad_zindex || 0
            };
            b.TipsMedia ? new b.TipsMedia(c, j) : b.sio.loadScript(i, function() {
                new b.TipsMedia(c, j)
            })
        })
    }(b, m), function(a, b) {
        b.register("turning", function(b, c, d, e, f) {
            var g = [], h = [], i = [], j = e.length;
            return a.array.each(e, function(a) {
                a.src && a.src[0] && g.push(a.src[0]), a.link && a.link[0] && h.push(a.link[0])
            }), e = [{
                src: [a.swf.createHTML({
                    id: "TurningMedia" + f.sinaads_uid,
                    url: "http://d3.sina.com.cn/litong/zhitou/sinaads/release/picshow_new.swf",
                    width: c,
                    height: d,
                    wmode: "transparent",
                    vars: {
                        ad_num: j,
                        pics: g.join("\xa7"),
                        urls: h.join("\xa7"),
                        monitor: i.join("\xa7"),
                        pic_width: c - 5,
                        pic_height: d - 5,
                        flip_time: 1e3 * f.sinaads_turning_flip_duration || 300,
                        pause_time: 1e3 * f.sinaads_turning_flip_delay || 4e3,
                        wait_time: 1e3 * f.sinaads_turning_wait || 1e3
                    }
                })],
                type: ["html"],
                link: []
            }
            ], {
                type: "embed",
                content: e
            }
        })
    }(b, m), function(b, c) {
        c.register("videoWindow", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering videoWindow.");
            var i = g || "./src/plus/VideoWindowMedia.js";
            switch (a.sinaadsROC.videoWindow = h.sinaads_ad_pdps, f = f[0], c.style.cssText = "position:absolute;top:-9999px", a.sinaadsVideoWindowMonitor = f.origin_monitor || [], a.sinaadsVideoWindowClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsVideoWindowViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), f.type[0]) {
            case"js":
                b.sio.loadScript(f.src[0], null, {
                    charset: "gb2312"
                });
                break;
            case"html":
                b.dom.fill(c, f.src[0]);
                break;
            default:
                var j = {
                    pdps: h.sinaads_ad_pdps,
                    src: f.src[0],
                    type: f.type[0],
                    width: d,
                    height: e,
                    link: f.link[0],
                    monitor: f.origin_monitor || [],
                    pv: f.pv || [],
                    zIndex: h.sinaads_ad_zindex
                };
                b.VideoWindowMedia ? new b.VideoWindowMedia(j) : b.sio.loadScript(i, function() {
                    new b.VideoWindowMedia(j)
                })
            }
        })
    }(b, m), function(b, c) {
        c.register("bg", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering bp.");
            var i = g || "./src/plus/BgMedia.js";
            f = f[0], a.sinaadsROC.bg = h.sinaads_ad_pdps, a.sinaadsBgClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsBgViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv));
            var j = {
                pdps: h.sinaads_ad_pdps,
                src: f.src,
                type: f.type,
                link: f.link,
                width: d || 1600,
                height: e || h.sinaads_bg_height,
                midWidth: h.sinaads_bg_midWidth || 1e3,
                headHeight: h.sinaads_bg_headHeight || 30,
                top: "undefined" != typeof h.sinaads_bg_top ? h.sinaads_bg_top: 46,
                asideClickable: h.sinaads_bg_asideClick,
                monitor: f.origin_monitor || [],
                pv: f.pv || []
            };
            b.BgMedia ? new b.BgMedia(j) : b.sio.loadScript(i, function() {
                new b.BgMedia(j)
            })
        })
    }(b, m), function(b, c) {
        c.register("pop", function(c, d, e, f, h) {
            b.debug("sinaads:Rendering pop.");
            var i = g || "./src/plus/PopMedia.js";
            switch (f = f[0], a.sinaadsPopClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsPopViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv)), f.type[0]) {
            case"js":
                b.sio.loadScript(f.src[0], null, {
                    charset: "gb2312"
                });
                break;
            default:
                var j = {
                    pdps: h.sinaads_ad_pdps,
                    src: f.src,
                    type: f.type,
                    link: f.link,
                    width: d || 300,
                    height: e || 250,
                    position: h.sinaads_pop_position || "center center",
                    monitor: f.origin_monitor || [],
                    pv: f.pv || []
                };
                b.PopMedia ? new b.PopMedia(c, j) : b.sio.loadScript(i, function() {
                    new b.PopMedia(c, j)
                })
            }
        })
    }(b, m), function(b, c) {
        c.register("skyscraper", function(c, d, e, f, h) {
            var i = g || "./src/plus/SkyscraperMedia.js";
            f = f[0], a.sinaadsSkyscraperClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsSkyscraperViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv));
            var j = {
                main: {
                    width: d,
                    height: e,
                    src: f.src[0] || "",
                    type: f.type[0] || "",
                    link: f.link[0] || ""
                },
                mini: {
                    src: f.src[1] || "",
                    type: f.type[1] || "",
                    link: f.link[1] || f.link[0] || "",
                    width: h.sinaads_mini_width || d
                },
                monitor: f.origin_monitor,
                pv: f.pv,
                duration: h.sinaads_ad_duration || 5,
                midWidth: h.sinaads_ss_mdWidth || 950,
                top: h.sinaads_ss_top || 0,
                left: h.sinaads_ss_left || 0,
                pdps: h.sinaads_ad_pdps
            };
            b.SkyScraperMedia ? new b.SkyScraperMedia(j) : b.sio.loadScript(i, function() {
                new b.SkyScraperMedia(j)
            })
        })
    }(b, m), function(b, c) {
        c.register("leftsuspend", function(c, d, e, f, h) {
            var i = g || "./src/plus/LeftSuspendMedia.js";
            f = f[0], a.sinaadsLeftsuspendClickTAG = b.monitor.stringify(b.array.ensureArray(f.origin_monitor)), a.sinaadsLeftsuspendViewTAG = b.monitor.stringify(b.array.ensureArray(f.pv));
            var j = {
                width: d,
                height: e,
                src: f.src[0] || "",
                type: f.type[0] || "",
                link: f.link[0] || "",
                monitor: f.origin_monitor,
                pv: f.pv,
                cookieKey: h.sinaads_ls_cookieKey,
                root: h.sinaads_ls_root,
                pdps: h.sinaads_ad_pdps
            };
            a.sinaadToolkit.LeftSuspendMedia ? new a.sinaadToolkit.LeftSuspendMedia(j) : a.sinaadToolkit.sio.loadScript(i, function() {
                new a.sinaadToolkit.LeftSuspendMedia(j)
            })
        })
    }(b, m);
    var n = function(b, e, f, g) {
        function h(a) {
            return /(^| )sinaads($| )/.test(a.className) && "done" !== a.getAttribute("data-ad-status")
        }
        function i(a) {
            return /(^| )sinaads($| )/.test(a.className) && "async" === a.getAttribute("data-ad-status")
        }
        function j(a) {
            var b, c = document.getElementsByTagName("ins"), d = 0, e = c.length;
            for (b = c[d]; e > d; b = c[++d])
                if (h(b) && (!a&&!i(b) || b.id === a))
                    return b;
            return null
        }
        function k(a, c, d) {
            if (!c)
                return b.debug("sinaads:" + d.sinaads_ad_pdps + ", Cannot render this element because the data is unavilable."), void 0;
            var g = d.sinaads_ad_type || c.type, h = b.now(), i = c.size.split("*"), j = d.sinaads_ad_width || (d.sinaads_ad_width = Number(i[0])) || 0, k = d.sinaads_ad_height || (d.sinaads_ad_height = Number(i[1])) || 0, l = e.getExParamsQueryString();
            b.array.each(c.content, function(a, c) {
                b.debug("sinaads:Processing the impression of the " + (c + 1) + " creative of ad unit " + d.sinaads_ad_pdps), a.src = b.array.ensureArray(a.src), a.link = b.array.ensureArray(a.link), a.type = b.array.ensureArray(a.type);
                var e = [], f = [], g = a.pv;
                b.array.each(g, function(a, c) {
                    l && a && ( - 1 !== a.indexOf("sax.sina.com.cn/view")||-1 !== a.indexOf("sax.sina.com.cn/dsp/view")) && (a += ( - 1 !== a.indexOf("?") ? "&" : "?") + l), g[c] = b.monitor.parseTpl(a, d), b.debug("sinaads:Recording the impression of ad unit " + d.sinaads_ad_pdps + " via url " + a), g[c] && b.sio.log(g[c])
                }), b.array.each(a.monitor, function(a) {
                    a && f.push(b.monitor.parseTpl(a, d))
                }), b.array.each(a.origin_monitor, function(a) {
                    a && f.push(b.monitor.parseTpl(a, d))
                }), a.origin_monitor = f;
                var h, i, j;
                b.array.each(a.monitor, function(a) {
                    a&&-1 !== a.indexOf("sax.sina.com.cn/click") ? (a = a.replace(/&url=$/, "") + (l ? "&" + l : "") + "&url=", j = b.monitor.parseTpl(a, d)) : a&&-1 !== a.indexOf("sax.sina.com.cn/dsp/click") ? (a = a.replace(/&url=$/, "") + (l ? "&" + l : "") + "&url=", h = b.monitor.parseTpl(a, d)) : a&&-1 !== a.indexOf("sax.sina.com.cn/mfp/click") ? (a = a.replace(/&url=$/, "") + (l ? "&" + l : "") + "&url=", i = b.monitor.parseTpl(a, d)) : (a = b.monitor.parseTpl(a, d), a && e.push(a)), b.debug("sinaads:Processing the click of ad unit " + d.sinaads_ad_pdps + " via url " + a)
                }), j && e.push(j), i && e.push(i), h && e.push(h);
                var k = a.link;
                b.array.each(k, function(a, c) {
                    k[c] = b.monitor.createTrackingMonitor(a, e)
                })
            }), f.render(g, a, j, k, c.content, d), c.highlight && "embed" === (d.sinaads_ad_type || c.type) && (a.style.outline = "2px solid #f00"), b.debug("sinaads:Ads Rendering is complete. (pdps:" + d.sinaads_ad_pdps + ", time elpased:" + (b.now() - h) + "ms)")
        }
        function l(a, c) {
            var f = c.sinaads_ad_pdps;
            g.orderController.ready(f, function(a, c, d, e, f, h) {
                b.dom.addClass(a, "sinaads-done"), g.frequenceController.disable(c), k(a, f, h), b.isFunction(h.sinaads_success_handler) && h.sinaads_success_handler(a, f, h)
            }, [a, f, c.sinaads_frequence || 0, d + f + "_disabled", e.get(f), c])
        }
        function m(a, c) {
            var d = c.sinaads_ad_pdps;
            g.orderController.ready(d, function(a, c) {
                g.orderController.done(c.sinaads_ad_pdps), b.dom.addClass(a, "sinaads-fail"), c.sinaads_cannot_empty && b.debug("Use Default ad data."), b.isFunction(c.sinaads_fail_handler) && c.sinaads_fail_handler(a, c)
            }, [a, c])
        }
        function n(a, b) {
            return function() {
                var c = b.sinaads_ad_delay;
                c && (c = parseInt(c, 10)) ? setTimeout(function() {
                    l(a, b)
                }, 1e3 * c) : l(a, b)
            }
        }
        function o(a, b) {
            return function() {
                m(a, b)
            }
        }
        return function(d) {
            var f = d.element, i = d.params || {};
            if ("string" == typeof f && (f = document.getElementById(f)), f) {
                if (!h(f) && (f = f.id && j(f.id), !f))
                    return b.debug("sinaads:Rendering of this element has been done. Stop rendering.", f), void 0;
                if (!("innerHTML"in f))
                    return b.debug("sinaads:Cannot render this element.", f), void 0
            } else if (f = j(), !f)
                return b.debug("sinaads:Rendering of all elements in the queue is done."), void 0;
            f.setAttribute("data-ad-status", "done");
            var k = b.dom.getPosition(f);
            f.setAttribute("data-ad-offset-left", k.left), f.setAttribute("data-ad-offset-top", k.top), i.sinaads_uid = c++;
            for (var l = f.attributes, p = l.length, q = 0; p > q; q++) {
                var r = l[q];
                if (/data-/.test(r.nodeName)) {
                    var s = r.nodeName.replace("data", "sinaads").replace(/-/g, "_");
                    i.hasOwnProperty(s) || (i[s] = r.value)
                }
            }
            i.sinaads_page_url = b.url.top;
            var t = i.sinaads_ad_pdps;
            try {
                a._sinaadsADPosition = a._sinaadsADPosition || {}, a._sinaadsADPosition[t] = [k.left, k.top]
            } catch (u) {}
            var v = i.sinaads_ad_data, w = 0;
            v && (v = b.array.ensureArray(v), w = v.length <= 1 ? 0 : e.getSeed(t)%v.length, e.add(t, v[w]), b.debug("sinaads: Use local data in count " + w)), g.frequenceController.register(t, i.sinaads_frequence || 0), g.frequenceController.isDisabled(t) ? m(f, i) : e.request(t).done(n(f, i)).fail(o(f, i))
        }
    }(b, l, m, k);
    return l.init(function() {
        b.debug("sinaads:Begin to scan and render all ad placeholders." + b.now());
        var c = a.sinaads;
        if (c && c.shift)
            for (var d, e = 100; (d = c.shift()) && 0 < e--;)
                n(d);
        a.sinaads = {
            push: n
        }
    }), a.sinaadsROC = k.orderController, a.sinaadsRFC = k.frequenceController, a._sinaadsCacheData = l.get(), a.sinaadsGetSeed = l.getSeed, a.sinaadsRenderHandler = m.handlerMap, !0
}(window, window.sinaadToolkit);
/*
//@ sourceMappingURL=sinaads.js.map
*/
