define(['jquery/nyt', 'underscore/nyt', 'backbone/nyt'], function($, _, Backbone) {
    var NYTD = NYTD || {};
    NYTD.jQuery = $;
    var NYTD = NYTD || {};
    NYTD.Subscription || (NYTD.Subscription = function() {
        var e = {}, t = {}, n = function() {};
        return n(), e.subscribe = function(e, n) {
            function r() {
                var r = {
                    type: e,
                    listener: n
                };
                null == t[e] && (t[e] = []), t[e].push(r)
            }
            if (this.hasSubscriber(e, n))
                return;
            return r.apply(this), n
        }, e.notify = function(e, n) {
            function r() {
                var r = 0, i = t[e], s = i.length;
                for (r; r < s; r++)
                    try {
                        i[r].listener(n)
                } catch (o) {}
            }
            return typeof n != "object" && (n = {}), null == t[e]?!1 : (r.apply(this), this)
        }, e.hasSubscriber = function(e, n) {
            if (null == t[e])
                return !1;
            var r = 0, i = t[e], s = i.length, o=!1;
            for (r; r < s; r++) {
                var u = i[r].listener;
                u && u.prototype && u.prototype.constructor && (u = u.prototype.constructor), n && n.prototype && n.prototype.constructor && (n = n.prototype.constructor);
                if (String(u) === String(n)) {
                    o=!0;
                    break
                }
            }
            return o
        }, e.cancel = function(e, n) {
            function r() {
                var r = 0, i = t[e], s = i.length;
                for (r; r < s; r++) {
                    var o = i[r].listener;
                    o && o.prototype && o.prototype.constructor && (o = o.prototype.constructor), n && n.prototype && n.prototype.constructor && (n = n.prototype.constructor);
                    if (String(o) === String(n)) {
                        t[e].splice(r, 1);
                        break
                    }
                }
            }
            return this.hasSubscriber(e, n) ? (r.apply(this), this) : !1
        }, e
    });
    var NYTD = NYTD || {};
    (function() {
        function l() {
            this.Video = this.Video || {}, this.Video.$ = NYTD.jQuery || window.jQuery, this.Video.CACHE_SCRIPT_LOAD=!0, this.Video.Ad = this.Video.Ad || {}, this.Video.Ad.Controller = this.Video.Ad.Controller || {}, this.Video.Ad.Model = this.Video.Ad.Model || {}, this.Video.Player = this.Video.Player || {}, this.Video.DEPENDENCY_LOAD_CHECK_INTERVAL = 50, this.Video.Libs = this.Video.Libs || {}, this.Video.Metrics = this.Video.Metrics || {}, this.Video.Ad.SERVER_DEVELOPMENT = "http://www-video.dev.lga1.nytimes.com", this.Video.Ad.SERVER_STAGING = "http://video.stg.ewr1.nytimes.com", this.Video.Ad.SERVER_PRODUCTION = "http://www.nytimes.com", this.Video.Log = this.Video.Log || {}, this.Video.Log.Levels = {
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                NONE: 4
            }, this.Video.Log.Level = NYTD.env === "production" || NYTD.env === "staging" || NYTD.env === undefined ? this.Video.Log.Levels.NONE : this.Video.Log.Levels.DEBUG, document.location.protocol === "https:" ? (this.Video.BaseURL = n, this.Video.Ad.SERVER_PRODUCTION = "https://www.nytimes.com") : this.Video.BaseURL = t, this.Video.env = r
        }
        function c() {
            var e = "http:";
            this.Libs.JQUERY_IS_LOADED=!1;
            if (document.location.protocol === "https:") {
                e = "https:", this.Libs.jQuery = n + "/js/app/lib/jquery/jquery-1.7.1.min.js", this.Libs.Brightcove = n + "/js2/build/video/libs/brightcove/BrightcoveExperiences_All.js", this.Libs.Underscore = n + "/js/app/lib/underscore/underscore.js", this.Libs.Backbone = n + "/js/app/lib/backbone/backbone.js", this.Libs.GoogleJSAPI = "https://s0.2mdn.net/instream/html5/ima3.js", this.Libs.VideoManager = n + "/js2/build/video/2.0/videomanager.2.0.js", this.Libs.FreewheelJSAPI = "https://m.v.fwmrm.net/p/nytimes_live/AdManager.js", this.Libs.FreewheelJsServer = e + u, this.Libs.FreewheelFlashServer = e + u;
                if (this.env === "local" || this.env === "development" || this.env === "staging")
                    this.Libs.FreewheelJSAPI = "https://m.v.fwmrm.net/p/nytimes_test/AdManager.js"
            } else {
                this.Libs.jQuery = t + "/js/app/lib/jquery/jquery-1.7.1.min.js", this.Libs.Brightcove = t + "/js2/build/video/libs/brightcove/BrightcoveExperiences_All.js", this.Libs.Underscore = "http://js.nyt.com/js/app/lib/underscore/underscore.js", this.Libs.Backbone = "http://js.nyt.com/js/app/lib/backbone/backbone.js", this.Libs.GoogleJSAPI = "http://s0.2mdn.net/instream/html5/ima3.js", this.Libs.VideoManager = t + "/js2/build/video/2.0/videomanager.2.0.js", this.Libs.FreewheelJSAPI = "http://adm.fwmrm.net/p/nytimes_live/AdManager.js", this.Libs.FreewheelJsServer = e + u, this.Libs.FreewheelFlashServer = e + u;
                if (this.env === "local" || this.env === "development" || this.env === "staging")
                    this.Libs.FreewheelJSAPI = "http://adm.fwmrm.net/p/nytimes_test/AdManager.js"
            }
        }
        function h() {
            this.Validation = {
                isEmpty: function(e) {
                    return typeof e == "undefined" || null === e || e === ""
                },
                isFunction: function(e) {
                    return typeof e == "function"
                },
                isString: function(e) {
                    return typeof e == "string"
                },
                isProduction: function() {
                    return NYTD.env && NYTD.env === "production"
                },
                isIOS: function() {
                    return (new RegExp("ipod|ipad|itouch|iphone", "igm")).test(navigator.userAgent)
                },
                isAndroid: function() {
                    return (new RegExp("android", "igm")).test(navigator.userAgent)
                },
                supportsAutoPlay: function() {
                    var e=!0;
                    return this.isAndroid() || this.isIOS() ? e=!1 : e=!0, e
                },
                isTouchable: function() {
                    return "createTouch"in document
                },
                isLocalDomain: function(e) {
                    return e = e || window.location.href.toString(), /(http:\/\/)?(s?www\.)?([^\.]\.)?nytimes.com/.test(e)
                },
                hasFlash: function() {
                    var e=!1, t = "application/x-shockwave-flash", n = navigator.plugins, r = navigator.mimeTypes, i = null;
                    if (this.isIOS())
                        return !1;
                    if (n && n.length > 0)
                        r && r[t] && r[t].enabledPlugin && r[t].enabledPlugin.description && (e=!0);
                    else if (window.ActiveXObject) {
                        try {
                            i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                        } catch (s) {
                            return !1
                        }
                        i && (e=!0)
                    }
                    return e
                }
            }
        }
        function p() {
            this.Sanitizer = {
                cleanCDATA: function(e) {
                    return typeof e == "undefined" || null === e || "" === e ? "" : e.replace("<!--[CDATA[", "").replace("]]-->", "").replace("[timestamp]", (new Date).getTime())
                },
                trim: function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }
            }
        }
        function d() {
            this.Utils = {
                callbacks: [],
                queryParams: null,
                scriptCache: [],
                loadInterval: 0,
                getDeviceType: function() {
                    var e = null, t = navigator.userAgent.toLowerCase(), n = [["android", "android"], ["ipad", "ipad"], ["iphone", "iphone"], ["other mobile", "(touchpad|blackberry|nokia|windows phone|opera mobi)"]];
                    for (var r = 0; r < n.length; r++) {
                        var i = new RegExp(n[r][1]), s = t.match(i);
                        s !== null && (e = n[r][0])
                    }
                    return e || "desktop"
                },
                generateCallbackName: function(e) {
                    var t = "video_lib_" + (new Date).getTime() + "_" + e;
                    return this.callbacks[t]===!0 ? (this.generateCallbackName(e), !1) : (this.callbacks[t]=!0, t)
                },
                getQueryParams: function() {
                    if (NYTD.Video.Validation.isEmpty(this.queryParams)) {
                        var e = this, t = window.location.search;
                        this.queryParams = {};
                        var n = function(e) {
                            return decodeURIComponent(e.replace(/\+/g, " "))
                        };
                        return t.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(t, r, i, s) {
                            r && s && (e.queryParams[n(r)] = n(s))
                        }), this.queryParams
                    }
                    return this.queryParams
                },
                getScript: function(e, t, n) {
                    NYTD.Video.$.ajax({
                        type: "GET",
                        url: e,
                        success: t,
                        dataType: "script",
                        cache: n || NYTD.Video.CACHE_SCRIPT_LOAD
                    })
                },
                loadJQuery: function(e) {
                    if (NYTD.Video.Libs.JQUERY_IS_LOADED)
                        e();
                    else {
                        var t = this;
                        if (NYTD.jQuery || window.jQuery)
                            NYTD.Video.$ = NYTD.jQuery || window.jQuery, window.jQuery || (window.jQuery = NYTD.Video.$), NYTD.Video.Libs.JQUERY_IS_LOADED=!0, e(!0);
                        else {
                            var n = document.createElement("script");
                            n.src = NYTD.Video.Libs.jQuery, this.loadInterval = setInterval(function() {
                                window.jQuery && (clearInterval(t.loadInterval), NYTD.Video.$ = jQuery, NYTD.Video.Libs.JQUERY_IS_LOADED=!0, e(!0))
                            }, NYTD.Video.DEPENDENCY_LOAD_CHECK_INTERVAL), NYTD.Video.DOCUMENT_HEAD && NYTD.Video.DOCUMENT_HEAD.appendChild(n)
                        }
                    }
                },
                loadDependencies: function(e, t, n) {
                    NYTD.Video.Validation.isEmpty(e) && t.call(n, !1);
                    var r = this;
                    NYTD.Video.$ ? this.buildDependencyCache(function() {
                        r.doLoadDependencies(e, t, n)
                    }, this) : this.loadJQuery(function() {
                        r.buildDependencyCache(function() {
                            r.doLoadDependencies(e, t, n)
                        }, r)
                    })
                },
                buildDependencyCache: function(e, t) {
                    var n = this, r = NYTD.Video.$('script[type="text/javascript"]'), i = parseInt(r.length, 10) - 1;
                    r.each(function(r, s) {
                        var o = NYTD.Video.$(this).attr("src");
                        NYTD.Video.Validation.isEmpty(o) || (n.scriptCache[o.toLowerCase()]=!0), parseInt(r, 10) === i && e.call(t)
                    })
                },
                doLoadDependencies: function(e, t, n) {
                    var r = e.length, i = 0, s = this, o = function(u, a) {
                        var f = function() {
                            i < r ? o(e[i].src, e[i].type) : t.call(n, !0)
                        };
                        u&&!s.scriptCache[u.toLowerCase()] || a&&!window[a] ? (s.scriptCache[u]=!0, s.getScript(u, function(e) {
                            i++, f()
                        }, NYTD.Video.CACHE_SCRIPT_LOAD)) : (i++, f())
                    };
                    o(e[0].src, e[0].type)
                },
                loadBundle: function(e, t) {
                    var n = this;
                    if (e && e.length > 0) {
                        var r = [];
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            if (s.type&&!NYTD.Video.Validation.isEmpty(window[s.type]))
                                continue;
                            r.push(s.src)
                        }
                        r && r.length ? this.loadJQuery(function() {
                            r = r.join(";"), n.getScript([NYTD.Video.Libs.LOADER, r].join(""), function() {
                                typeof t == "function" && t(!0)
                            })
                        }) : typeof t == "function" && t(!1)
                    } else 
                        typeof t == "function" && t(!1)
                },
                loadScript: function(e) {
                    var t = document.getElementsByTagName("script"), n = t.length, r=!1;
                    for (var i = 0; i < n; i++)
                        if (t[i].src === e) {
                            r=!0;
                            break
                        }
                    if (!r) {
                        var s = document.createElement("script");
                        s.src = e, s.type = "text/javascript";
                        var o = document.getElementsByTagName("head");
                        return typeof o != "undefined" && o.length > 0 ? (o[0].appendChild(s), !0) : !1
                    }
                    return !1
                },
                stopRefreshTimer: function(e) {
                    !NYTD.Video.Validation.isEmpty(NYTD.HomepageRefresh) && NYTD.Video.Validation.isFunction(NYTD.HomepageRefresh.stop) && NYTD.HomepageRefresh.stop(e)
                },
                startRefreshTimer: function(e) {
                    !NYTD.Video.Validation.isEmpty(NYTD.HomepageRefresh) && NYTD.Video.Validation.isFunction(NYTD.HomepageRefresh.start) && NYTD.HomepageRefresh.start(e)
                },
                registerRefreshTimerElement: function(e) {
                    return !NYTD.Video.Validation.isEmpty(NYTD.HomepageRefresh) && NYTD.Video.Validation.isFunction(NYTD.HomepageRefresh.register) ? NYTD.HomepageRefresh.register(e) : - 1
                },
                forceBoolean: function(e) {
                    return typeof e == "undefined" || null === e || e !== "true" && e!==!0?!1 : !0
                },
                bind: function(e, t) {
                    if (typeof e != "function")
                        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    var n = Array.prototype.slice.call(arguments, 1);
                    n.shift(), n.shift();
                    var r = e, i = function() {}, s = function() {
                        var s = e instanceof i ? e: t || window;
                        return r.apply(s, n.concat(Array.prototype.slice.call(arguments)))
                    };
                    return i.prototype = e.prototype, s.prototype = new i, s
                }
            }
        }
        function v() {
            var e = document.getElementsByTagName("head");
            this.Validation.isEmpty(e[0]) ? this.DOCUMENT_HEAD = null : this.DOCUMENT_HEAD = e[0]
        }
        var e=!0, t = "http://js.nyt.com", n = "https://sv.nyt.com", r = "production", i = "http://static.local.nytimes.com", s = "http://static.dev.nytimes.com", o = "http://static.stg.nytimes.com", u = "//fw.nytimes.com/ad/g/1", a = "//fw.stg.nytimes.com/ad/g/1", f = "//5ca90.v.fwmrm.net/ad/g/1";
        document.location.protocol === "https:" && (i = "https://static.local.nytimes.com", s = "https://static.dev.nytimes.com", o = "https://static.stg.nytimes.com"), window && window.location && window.location.host && (window.location.host.indexOf("localhost")!==-1 || window.location.host.indexOf("127.0.0.1")!==-1 ? (r = "local", t = i, e=!1, u = a) : window.location.host.indexOf(".dev")!==-1 ? (r = "development", t = s, e=!1, u = a) : window.location.host.indexOf("app1.prvt")!==-1 ? (r = "staging", t = o, e=!1, u = a) : window.location.host.indexOf(".stg")!==-1 && (r = "staging", t = o, u = a, e=!1)), function(e) {
            var t = window.location.search, n = "", r = "_ro", i = 1, s, o, u, a, f;
            if (!t)
                return;
            s = /[&?]tsdel=/.exec(t);
            if (!s) {
                o = /[&?]tspid=([^&#]*)/.exec(t);
                if (!o)
                    return;
                f = o[1], u = e ? "tearsheet.fw.nytimes.com" : "tearsheet.fw.stg.nytimes.com", n = encodeURIComponent(["Candidate-Ads=", f, ";", "Internal-Call;", "Opt-Out;", "Testing-Placement=true;", "Commercial-Pattern=14852;;", "Target-Server;", "domain=", u, ";", "Reload-Ads=", f].join(""))
            }
            a = new Date, a.setTime(a.getTime() + i * 24 * 60 * 60 * 1e3), document.cookie = r + "=" + n + ";expires=" + a + ";domain=.nytimes.com;path=/"
        }(e), l.call(NYTD), c.call(NYTD.Video), h.call(NYTD.Video), p.call(NYTD.Video), d.call(NYTD.Video), v.call(NYTD.Video)
    })(), NYTD.Video.Log = NYTD.Video.Log || {}, NYTD.Video.Log.Levels = NYTD.Video.Log.Levels || {
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    }, function() {
        return this.RemoteLogger = function() {
            var e = "", t = "", n = window.console || null, r = function(e) {
                var r = [].concat([t], Array.prototype.slice.call(arguments));
                n.debug(r)
            }, i = function(e) {
                var r = [].concat([t], Array.prototype.slice.call(arguments));
                n.info(r)
            }, s = function(e) {
                var r = [].concat([t], Array.prototype.slice.call(arguments));
                n.warn(r)
            }, o = function(e) {
                var r = [].concat([t], Array.prototype.slice.call(arguments));
                n.error(r)
            };
            return {
                initialize: function(e) {
                    if (NYTD.Video.Validation.isEmpty(e) || NYTD.Video.Validation.isEmpty(e.scope))
                        throw new Error("Missing one or more required arguments.");
                    NYTD.Video.Validation.isEmpty(n) && (n = {}), NYTD.Video.Validation.isFunction(n.log) || (n.log = function() {}), NYTD.Video.Validation.isFunction(n.debug) || (n.debug = function() {}), NYTD.Video.Validation.isFunction(n.info) || (n.info = function() {}), NYTD.Video.Validation.isFunction(n.warn) || (n.warn = function() {}), NYTD.Video.Validation.isFunction(n.error) || (n.error = function() {}), t = e.scope
                },
                debug: function() {
                    NYTD.Video.Log.Level <= NYTD.Video.Log.Levels.DEBUG && i.apply(null, arguments)
                },
                info: function() {
                    NYTD.Video.Log.Level <= NYTD.Video.Log.Levels.INFO && i.apply(null, arguments)
                },
                warn: function() {
                    NYTD.Video.Log.Level <= NYTD.Video.Log.Levels.WARN && s.apply(null, arguments)
                },
                error: function() {
                    NYTD.Video.Log.Level <= NYTD.Video.Log.Levels.ERROR && o.apply(null, arguments)
                }
            }
        }, this.Logger = {
            get: function(e) {
                var t = new NYTD.Video.RemoteLogger;
                return t.initialize({
                    scope: e
                }), t
            }
        }, this
    }.call(NYTD.Video), function() {
        this.VideoManager = function() {
            var e = {}, t = [], n=!1, r=!1, i = "", s = null, o = null;
            e.create = function() {
                var e = null;
                NYTD.Video.Validation.hasFlash() ? o = NYTD.Video.Player.FlashVideoPlayer : o = NYTD.Video.Player.HTML5VideoPlayer, e = new o;
                var n = NYTD.Video.VideoEvents, r = e.getSubscription();
                return r.subscribe(n.DESTROYING, u), r.subscribe(n.STOP_OTHER_PLAYERS, m), r.subscribe(n.DISABLE_OTHER_PLAYERS, g), r.subscribe(n.ENABLE_OTHER_PLAYERS, y), r.subscribe(n.MEDIA_BEGIN, S), r.subscribe(n.CONTENT_LOAD, w), r.subscribe(n.VIDEO_START, l), r.subscribe(n.TEMPLATE_LOADED, T), t.push(e), e
            }, e.getPlayers = function() {
                return t
            }, e.setAllowMultiPlayback = function(e) {
                c(e)
            }, e.getAllowMultiPlayback = function() {
                return h()
            };
            var u = function(e) {
                var n = e.id, r = NYTD.Video.VideoEvents, i = 0, s = t.length;
                for (i; i < s; i++) {
                    var o = t[i];
                    if (o.getObjectId() == n) {
                        var a = e.player.getSubscription();
                        a.cancel(r.DESTROYING, u), a.cancel(r.STOP_OTHER_PLAYERS, m), a.cancel(r.DISABLE_OTHER_PLAYERS, g), a.cancel(r.ENABLE_OTHER_PLAYERS, y), a.cancel(r.MEDIA_BEGIN, S), a.cancel(r.CONTENT_LOAD, w), a.cancel(r.VIDEO_START, l), a.cancel(r.TEMPLATE_LOADED, T), t.splice(i, 1), o = null;
                        break
                    }
                }
            }, a = function(e) {}, f = function(e) {}, l = function(e) {
                if (i == e.id)
                    return;
                i = e.id, p(e.id)
            }, c = function(e) {
                e = e && e===!0 || e === "true", n = e
            }, h = function() {
                return n
            }, p = function(e) {
                if (h())
                    return;
                var n = 0, r = t.length;
                for (n; n < r; n++) {
                    var i = t[n];
                    if (i.getObjectId() !== e && i.getVideoModule().isPlaying()) {
                        i.pause(!0);
                        break
                    }
                }
            }, d = function(e) {
                var n = 0, r = t.length;
                for (n; n < r; n++) {
                    var i = t[n];
                    if (i.getObjectId() !== e) {
                        var s = i.getVideoModule();
                        s && s.setEnabled(!1)
                    }
                }
            }, v = function(e) {
                var n = 0, r = t.length;
                for (n; n < r; n++) {
                    var i = t[n];
                    if (i.getObjectId() !== e) {
                        var s = i.getVideoModule();
                        s && s.setEnabled(!0)
                    }
                }
            }, m = function(e) {
                p(e.id)
            }, g = function(e) {
                r=!0, d(e.id)
            }, y = function(e) {
                r=!1, v(e.id)
            }, b = function(e) {}, w = function(e) {
                i = e.id
            }, E = function(e) {
                if (h())
                    return;
                var n = 0, r = t.length;
                for (n; n < r; n++) {
                    var i = t[n];
                    if (i.getObjectId() !== e) {
                        i.pause(!0);
                        break
                    }
                }
            }, S = function(e) {
                E(e.id)
            }, x = function(e) {}, T = function(e) {
                var n = 0, i = t.length;
                for (n; n < i; n++) {
                    var s = t[n];
                    if (s.getObjectId() === e.player.getObjectId()) {
                        var o = s.getAdModule();
                        o.addEventListener(BCAdvertisingEvent.AD_START, a), o.addEventListener(BCAdvertisingEvent.AD_COMPLETE, f);
                        if (r) {
                            var u = s.getVideoModule();
                            setTimeout(function() {
                                u.setEnabled(!1)
                            }, 1e3)
                        }
                        break
                    }
                }
            };
            return e.getActivePlayer = function() {
                var e = null, n = t.length;
                for (var r = 0; r < n; r++) {
                    e = t[r];
                    if (e.getObjectId() === i)
                        break
                }
                return e
            }, e
        }
    }.call(NYTD.Video), function() {
        this.VideoPoster = function() {
            return {
                props: null,
                player: null,
                documentHead: null,
                playButtonWidth: 60,
                playButtonHeight: 50,
                playButtonVisible: !1,
                buttonAnimated: !1,
                initialized: !1,
                isExpanded: !1,
                isAnimating: !1,
                isVisible: !1,
                isRendered: !1,
                isPollCheckPending: !1,
                isLoadingPlayer: !1,
                mousedIn: !1,
                bumperImage: null,
                spinnerImg: null,
                hotspot: null,
                overlay: null,
                playButton: null,
                playButtonTextContainer: null,
                playButtonContainer: null,
                backgroundImage: null,
                photoCreditContainer: null,
                destroying: !1,
                smallestWidth: 30,
                smallestHeight: 30,
                expandOptions: null,
                contractOptions: null,
                videoPrimed: !1,
                posterStylesheet: NYTD.Video.BaseURL + "/css/0.1/screen/common/modules/video/poster.css",
                init: function(e, t) {
                    this.logger = NYTD.Video.Logger.get("NYTD.Video.VideoPoster");
                    if (t.autoStart)
                        return;
                    this.setPlayer(e), this.setProps(t);
                    if (!this.validate(this.props))
                        return;
                    t.loadVideoPosterAssets && this.loadPosterStylesheet(), this.buildPlayer(), this.player.getSubscription().subscribe(NYTD.Video.VideoEvents.CONTENT_LOAD, NYTD.Video.Utils.bind(this.onContentLoaded, this)), this.player.getSubscription().subscribe(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), this.doInit()
                },
                resize: function(e, t) {
                    if ((this.props.width !== e || this.props.height !== t)&&!this.props.autoStart) {
                        this.props.width = e || this.props.width, this.props.height = t || this.props.height, this.props.playButtonTop = null, this.props.playButtonBottom = null, this.props.playButtonLeft = null, this.props.playButtonRight = null, this.props.spinnerImgTop = null, this.props.spinnerImgLeft = null;
                        if (!this.validate(this.props))
                            return;
                        this.resetContainer(), this.resizeOverlay(), this.resizeBackgroundImage(), this.resizeHotspot(), this.resizePlayButton()
                    }
                },
                loadPosterStylesheet: function() {
                    var e = NYTD.Video.$(document.createElement("link"));
                    e.attr("rel", "stylesheet").attr("href", this.posterStylesheet), NYTD.Video.Validation.isEmpty(NYTD.Video.DOCUMENT_HEAD) || NYTD.Video.$(NYTD.Video.DOCUMENT_HEAD).append(e)
                },
                hidePlayer: function() {
                    if (NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isTouchable())
                        this.logger.info("hidePlayer"), this.player.hide()
                },
                hidePhotoCredit: function() {
                    NYTD.Video.Validation.isEmpty(this.photoCreditContainer) || (this.logger.info("hidePhotoCredit"), this.photoCreditContainer.hide())
                },
                hideOverlay: function() {
                    NYTD.Video.Validation.isEmpty(this.overlay) || (this.logger.info("hideOverlay"), this.overlay.hide())
                },
                hideHotspot: function() {
                    NYTD.Video.Validation.isEmpty(this.hotspot) || (this.logger.info("hideHotspot"), this.hotspot.hide())
                },
                hideSpinnerImage: function() {
                    NYTD.Video.Validation.isEmpty(this.spinnerImage) || this.spinnerImage.hide()
                },
                showPlayer: function() {
                    if (NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isTouchable())
                        this.logger.info("showPlayer"), this.player.show()
                },
                showPhotoCredit: function() {
                    NYTD.Video.Validation.isEmpty(this.photoCreditContainer) || this.photoCreditContainer.show()
                },
                showOverlay: function() {
                    NYTD.Video.Validation.isEmpty(this.overlay) || this.overlay.show()
                },
                showHotspot: function() {
                    NYTD.Video.Validation.isEmpty(this.hotspot) || this.hotspot.show(), this.playButtonContainer.show()
                },
                showPlayButtonContainer: function() {
                    NYTD.Video.Validation.isEmpty(this.playButtonContainer) || this.playButtonContainer.show()
                },
                reinitialize: function() {
                    if (this.destroying)
                        return;
                    try {
                        this.logger.info("reinitialize"), this.showPlayButtonContainer(), this.showHotspot(), this.showOverlay(), this.showPhotoCredit(), this.player.videoModule.mediaIsLive() ? this.showLiveBumper() : this.showVODBumper(), this.hidePlayer(), this.activate(), this.isVisible=!0, this.isLoadingPlayer=!1
                    } catch (e) {
                        this.logger.error(e)
                    }
                },
                doInit: function() {
                    !this.initialized&&!this.isPollCheckPending && (this.logger.info("doInit"), this.hidePlayer(), this.activate(), this.showBumper(), this.playButtonContainer.show(), this.initialized=!0, this.player && this.player.getSubscription().notify(NYTD.Video.VideoEvents.POSTER_LOADED, {
                        id: this.player.objectId,
                        obj: {},
                        player: this.player
                    }))
                },
                onContentLoaded: function(e) {
                    this.logger.info("VideoPoster::onContentLoaded", e), this.doInit()
                },
                buildPlayer: function() {
                    this.props.autoStart || (this.setContainer(), this.drawOverlay(), this.drawBackgroundImage(), this.drawPhotoCredit(), this.drawBumper(), this.drawHotspot(), this.drawSpinnerImage(), this.showOverlay(), this.drawPlayButton(), this.container.append(this.hotspot), this.props.width.toString().indexOf("%")!==-1&&!this.props.preserveAspectRatio && NYTD.Video.Validation.isIOS() && NYTD.Video.$(window).bind("resize", NYTD.Video.Utils.bind(this.onResize, this)))
                },
                onResize: function(e) {
                    var t, n = this;
                    this.logger.debug("VideoPoster::onResize", e), t = NYTD.Video.$(this.props.container).height(), NYTD.Video.$(this.props.container).height(t), setTimeout(function() {
                        NYTD.Video.$(n.props.container).height("100%")
                    }, 100)
                },
                setContainer: function() {
                    var e = {};
                    this.container = NYTD.Video.$(this.props.container), e.display = "block", e.position = "relative", e.width = this.props.width.toString(), e.height = this.props.height.toString(), e.overflow = "hidden", e.background = "#272727", e.paddingBottom = 0, e["line-height"] = 0, this.props.width.toString().indexOf("%")!==-1 && (this.props.preserveAspectRatio ? (e.height = 0, e.paddingBottom = "56.25%", navigator.appVersion.indexOf("MSIE 7.")!==-1 && (e.width = "auto")) : (e.position = "absolute", e.top = 0, e.left = 0)), this.container.css(e)
                },
                resetContainer: function() {
                    var e = {};
                    e.display = "block", e.position = "relative", e.width = this.props.width.toString(), e.height = this.props.height.toString(), e.overflow = "hidden", e.background = "#272727", e.paddingBottom = 0, e["line-height"] = 0, this.props.width.toString().indexOf("%")!==-1 && (this.props.preserveAspectRatio ? (e.height = 0, e.paddingBottom = "56.25%", navigator.appVersion.indexOf("MSIE 7.") && (e.width = "auto")) : (e.position = "absolute", e.top = 0, e.left = 0)), this.container.css(e)
                },
                play: function() {
                    this.player.getVideoModule().play()
                },
                setProps: function(e) {
                    this.props = e
                },
                validate: function() {
                    return this.props.overlay.backgroundImage ? (this.props.overlay.backgroundImageContainerID = this.props.overlay.backgroundImageContainerID || this.props.id + "-posterImageContainer", this.props.overlay.backgroundImagePlayButtonContainerID = this.props.overlay.backgroundImagePlayButtonContainerID || this.props.id + "-playButtonContainer", this.props.hotspotContainerID = this.props.hotspotContainerID || this.props.id + "-hotspotContainer", this.props.playButtonWidth = this.props.playButtonWidth || this.playButtonWidth, this.props.playButtonHeight = this.props.playButtonHeight || this.playButtonHeight, this.props.playButtonTop = this.props.playButtonTop || (parseInt(this.props.height, 10) / 2 - 23).toString(), this.props.playButtonLeft = this.props.playButtonLeft || (parseInt(this.props.width, 10) / 2 - 25).toString(), this.props.spinnerImgTop = this.props.spinnerImgTop || (parseInt(this.props.height, 10) / 2 - 17).toString(), this.props.spinnerImgLeft = this.props.spinnerImgLeft || (parseInt(this.props.width, 10) / 2 - 17).toString(), this.props.overlay.playButtonClass = this.props.playButtonClass || "standardSize", this.props.overlay.buttonPosition = this.props.overlay.buttonPosition || "center", this.positionButton(), !0) : !1
                },
                setPlayer: function(e) {
                    this.player = e
                },
                styleOverlay: function() {
                    this.overlay.css({
                        cursor: "pointer",
                        width: this.props.width.toString(),
                        height: this.props.height.toString()
                    }).css({
                        cursor: "hand"
                    }).addClass("videoOverlayDiv").attr("id", this.props.id + "_" + this.props.overlay.backgroundImageContainerID)
                },
                resizeOverlay: function() {
                    this.overlay.css({
                        cursor: "pointer",
                        width: this.props.width.toString(),
                        height: this.props.height.toString()
                    })
                },
                styleHotspot: function() {
                    this.hotspot.addClass("videoHotspotDiv").attr("id", this.props.id + "_videoHotspotDiv").css({
                        cursor: "pointer",
                        top: "0px",
                        left: "0px",
                        width: this.props.width.toString(),
                        height: this.props.height.toString()
                    }).css({
                        cursor: "hand"
                    })
                },
                resizeHotspot: function() {
                    this.hotspot.css({
                        cursor: "pointer",
                        top: "0px",
                        left: "0px",
                        width: this.props.width.toString(),
                        height: this.props.height.toString()
                    })
                },
                styleSpinnerImage: function() {
                    this.spinnerImg.css({
                        top: this.props.spinnerImgTop + "px",
                        left: this.props.spinnerImgLeft + "px",
                        position: "relative"
                    })
                },
                drawOverlay: function() {
                    this.overlay = NYTD.Video.$(document.createElement("div")), this.styleOverlay(), this.container.append(this.overlay)
                },
                drawBackgroundImage: function() {
                    this.backgroundImage = NYTD.Video.$(document.createElement("img")), this.backgroundImage.attr("src", this.props.overlay.backgroundImage).attr("width", this.props.width).attr("height", this.props.height), this.props.width.toString().indexOf("%")!==-1 && (navigator.appVersion.indexOf("MSIE 7.")!==-1 && this.backgroundImage.css({
                        width: this.props.width,
                        height: this.props.height
                    }), NYTD.Video.Validation.isIOS() && this.backgroundImage.css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    })), this.overlay.append(this.backgroundImage)
                },
                resizeBackgroundImage: function() {
                    this.backgroundImage.attr("width", this.props.width).attr("height", this.props.height)
                },
                showLiveBumper: function() {
                    this.logger.info("showLiveBumper"), this.bumperImage && (this.bumperImage.css({
                        top: this.props.height - this.props.overlay.liveBumperHeight + "px",
                        display: "block"
                    }), this.bumperImage.attr("src", this.props.overlay.liveBumperPath))
                },
                showVODBumper: function() {
                    this.logger.info("showVODBumper"), this.bumperImage && (this.bumperImage.css({
                        top: this.props.height - this.props.overlay.vodBumperHeight + "px",
                        display: "block"
                    }), this.bumperImage.attr("src", this.props.overlay.vodBumperPath))
                },
                showBumper: function() {
                    if (this.props.overlay.liveBumperPath || this.props.overlay.vodBumperPath)
                        this.player.videoModule && this.player.videoModule.mediaIsLive() ? (this.logger.info("showBumper - live"), this.showLiveBumper()) : (this.logger.info("showBumper - vod"), this.showVODBumper())
                },
                showSpinnerImage: function() {
                    NYTD.Video.Validation.isEmpty(this.spinnerImg) || this.spinnerImg.show()
                },
                drawBumper: function() {
                    if (this.props.overlay.vodBumperPath || this.props.overlay.liveBumperPath)
                        this.bumperImage = NYTD.Video.$(document.createElement("img")), this.bumperImage.css({
                            position: "absolute",
                            display: "none"
                        }), this.overlay.append(this.bumperImage), this.props.overlay.bumperDefault === "live" ? this.showLiveBumper() : this.props.overlay.bumperDefault === "vod" && this.showVODBumper()
                },
                drawPhotoCredit: function() {
                    !NYTD.Video.Validation.isEmpty(this.props.overlay.photoCredit)&&!NYTD.Video.Validation.isEmpty(this.props.overlay.photoCreditContainer) && (NYTD.Video.Validation.isString(this.props.overlay.photoCreditContainer) && (this.props.overlay.photoCreditContainer = this.props.overlay.photoCreditContainer.replace("#", ""), this.photoCreditContainer = NYTD.Video.$("#" + this.props.overlay.photoCreditContainer)), NYTD.Video.Validation.isEmpty(this.photoCreditContainer) || this.photoCreditContainer.html(this.props.overlay.photoCredit))
                },
                removePhotoCredit: function() {
                    NYTD.Video.Validation.isEmpty(this.photoCreditContainer) || this.photoCreditContainer.hide()
                },
                drawPlayButton: function() {
                    var e = {};
                    this.playButtonContainer = NYTD.Video.$(document.createElement("div")), this.playButtonContainer.addClass("videoPlayButtonDiv videoPlayButtonContracted " + this.props.overlay.playButtonClass + " " + this.props.overlay.buttonPosition), this.playButtonContainer.attr("id", this.props.id + "_" + this.props.overlay.backgroundImagePlayButtonContainerID), e.opacity = .6, e.display = "none";
                    if (this.props.width.toString().indexOf("%")!==-1 || this.props.height.toString().indexOf("%")!==-1)
                        switch (this.props.overlay.buttonPosition) {
                        case"bottomLeft":
                            e.bottom = this.props.playButtonBottom, e.left = this.props.playButtonLeft;
                            break;
                        case"bottomRight":
                            e.bottom = this.props.playButtonBottom, e.right = this.props.playButtonRight;
                            break;
                        case"topLeft":
                            e.top = this.props.playButtonTop, e.left = this.props.playButtonLeft;
                            break;
                        case"topRight":
                            e.top = this.props.playButtonTop, e.right = this.props.playButtonRight;
                            break;
                        case"center":
                            e.top = "50%", e.left = "50%";
                            break;
                        default:
                            e.top = this.props.playButtonTop, e.left = this.props.playButtonLeft
                        } else 
                            e.top = this.props.playButtonTop, e.left = this.props.playButtonLeft;
                    this.playButtonContainer.css(e), this.props.overlay.buttonWidth && this.playButtonContainer.width(this.props.overlay.buttonWidth), this.props.overlay.buttonHeight && this.playButtonContainer.height(this.props.overlay.buttonHeight), this.playButton = NYTD.Video.$(document.createElement("img")), this.playButton.attr("src", this.props.overlay.buttonPlayIcon), this.props.overlay.playIconWidth && this.playButton.width(this.props.overlay.playIconWidth), this.props.overlay.playIconHeight && this.playButton.height(this.props.overlay.playIconHeight), this.playButton.attr("style", "left: " + String(this.props.overlay.buttonWidth / 2 - this.props.overlay.playIconWidth / 2) + "px; top: " + String(this.props.overlay.buttonHeight / 2 - this.props.overlay.playIconHeight / 2) + "px; position: absolute; width: " + this.props.overlay.playIconWidth + "px; height:" + this.props.overlay.playIconHeight + "px"), this.playButtonContainer.append(this.playButton), this.playButtonTextContainer = NYTD.Video.$(document.createElement("p")), this.playButtonText = document.createTextNode("Play video"), this.playButtonTextContainer.append(this.playButtonText), this.playButtonContainer.append(this.playButtonTextContainer), this.container.append(this.playButtonContainer), this.playButtonVisible=!0
                },
                resizePlayButton: function() {
                    var e = {};
                    this.playButtonContainer.attr("class", ""), this.playButtonContainer.addClass("videoPlayButtonDiv videoPlayButtonContracted " + this.props.overlay.playButtonClass + " " + this.props.overlay.buttonPosition), e.opacity = .6;
                    if (this.props.width.toString().indexOf("%")!==-1 || this.props.height.toString().indexOf("%")!==-1)
                        switch (this.props.overlay.buttonPosition) {
                        case"bottomLeft":
                            e.bottom = this.props.playButtonBottom, e.left = this.props.playButtonLeft;
                            break;
                        case"bottomRight":
                            e.bottom = this.props.playButtonBottom, e.right = this.props.playButtonRight;
                            break;
                        case"topLeft":
                            e.top = this.props.playButtonTop, e.left = this.props.playButtonLeft;
                            break;
                        case"topRight":
                            e.top = this.props.playButtonTop, e.right = this.props.playButtonRight;
                            break;
                        default:
                            e.top = this.props.playButtonTop, e.left = this.props.playButtonLeft
                        } else 
                            e.top = this.props.playButtonTop, e.left = this.props.playButtonLeft;
                    this.playButtonContainer.css(e), this.props.overlay.buttonWidth && this.playButtonContainer.width(this.props.overlay.buttonWidth), this.props.overlay.buttonHeight && this.playButtonContainer.height(this.props.overlay.buttonHeight), this.props.overlay.playIconWidth && this.playButton.width(this.props.overlay.playIconWidth), this.props.overlay.playIconHeight && this.playButton.height(this.props.overlay.playIconHeight), this.playButton.attr("style", "left: " + String(this.props.overlay.buttonWidth / 2 - this.props.overlay.playIconWidth / 2) + "px; top: " + String(this.props.overlay.buttonHeight / 2 - this.props.overlay.playIconHeight / 2) + "px; position: absolute; width: " + this.props.overlay.playIconWidth + "px; height:" + this.props.overlay.playIconHeight + "px")
                },
                drawHotspot: function() {
                    this.hotspot = NYTD.Video.$(document.createElement("div")), this.styleHotspot(), this.overlay.append(this.hotspot)
                },
                drawSpinnerImage: function() {
                    this.logger.info("drawSpinnerImage"), this.spinnerImg = NYTD.Video.$(document.createElement("img")), this.spinnerImg.attr("src", this.props.overlay.spinnerIcon), this.styleSpinnerImage(), this.container.append(this.spinnerImg)
                },
                removeSpinnerImage: function() {
                    this.logger.info("removeSpinnerImage"), this.spinnerImg.remove()
                },
                expand: function() {
                    var e = this;
                    if (!this.isExpanded&&!this.isAnimating) {
                        this.isAnimating=!0;
                        if (!this.expandOptions) {
                            this.expandOptions = {};
                            switch (this.props.overlay.buttonPosition) {
                            case"bottomLeft":
                            case"topLeft":
                                this.expandOptions.width = "+=" + this.props.overlay.buttonExpandBy;
                                break;
                            case"bottomRight":
                            case"topRight":
                                this.expandOptions.width = "+=" + this.props.overlay.buttonExpandBy, this.props.width.toString().indexOf("%")===-1 && this.props.height.toString().indexOf("%")===-1 && (this.expandOptions.left = "-=" + this.props.overlay.buttonExpandBy);
                                break;
                            case"center":
                                this.expandOptions.width = "+=" + this.props.overlay.buttonExpandBy, this.expandOptions.left = "-=" + this.props.overlay.buttonExpandBy / 2
                            }
                            this.expandOptions.opacity = 1
                        }
                        this.playButtonContainer.animate(this.expandOptions, this.props.overlay.buttonExpandDuration, this.props.overlay.buttonExpandEasing, function() {
                            NYTD.Video.$(this).removeClass("videoPlayButtonContracted"), e.playButtonTextContainer.show(), e.isAnimating=!1, e.isExpanded=!0, e.mousedIn===!1 && e.contract()
                        })
                    }
                },
                contract: function() {
                    var e = this;
                    if (this.isExpanded&&!this.isAnimating) {
                        this.isAnimating=!0;
                        if (!this.contractOptions) {
                            this.contractOptions = {};
                            switch (this.props.overlay.buttonPosition) {
                            case"bottomLeft":
                            case"topLeft":
                                this.contractOptions.width = "-=" + this.props.overlay.buttonExpandBy;
                                break;
                            case"bottomRight":
                            case"topRight":
                                this.contractOptions.width = "-=" + this.props.overlay.buttonExpandBy, this.props.width.toString().indexOf("%")===-1 && this.props.height.toString().indexOf("%")===-1 && (this.expandOptions.left = "+=" + this.props.overlay.buttonExpandBy);
                                break;
                            case"center":
                                this.contractOptions.width = "-=" + this.props.overlay.buttonExpandBy, this.contractOptions.left = "+=" + this.props.overlay.buttonExpandBy / 2
                            }
                            this.contractOptions.opacity = .7
                        }
                        this.playButtonTextContainer.hide(), this.playButtonContainer.animate(this.contractOptions, this.props.overlay.buttonExpandDuration, this.props.overlay.buttonExpandEasing, function() {
                            NYTD.Video.$(this).removeClass("videoPlayButtonContracted"), e.isAnimating=!1, e.isExpanded=!1, e.mousedIn===!0 && e.expand()
                        })
                    }
                },
                onClick: function(e) {
                    this.logger.info("clicked - unbound click event from hotspot"), this.hotspot.unbind("click touchstart", NYTD.Video.Utils.bind(this.onClick, this)), this.revealAndPlay()
                },
                disable: function() {
                    this.logger.info("disable - disbling click on hotspot...");
                    if (!this.isVisible)
                        return;
                    var e = this, t = function() {
                        e.hotspot.unbind("click touchstart", NYTD.Video.Utils.bind(e.onClick, e))
                    };
                    this.overlay.animate({
                        opacity: .3
                    }, {
                        duration: 100,
                        easing: "linear",
                        onComplete: t
                    })
                },
                enable: function() {
                    if (!this.isVisible)
                        return;
                    var e = this, t = function() {
                        e.hotspot.unbind("click touchstart", NYTD.Video.Utils.bind(e.onClick, e)).bind("click touchstart", NYTD.Video.Utils.bind(e.onClick, e))
                    };
                    this.overlay.animate({
                        opacity: 0
                    }, {
                        duration: 100,
                        easing: "linear",
                        onComplete: t
                    })
                },
                registerMouseEvents: function() {
                    var e = this, t = null, n = null;
                    this.props.overlay.buttonAnimated ? (this.hotspot.removeClass("videoHotspotDiv active").addClass("videoHotspotDiv active"), t = function() {
                        e.mousedIn=!0, function() {
                            e.expand()
                        }(), function() {
                            e.playButtonContainer.animate({
                                opacity: 1
                            }, {
                                duration: 300,
                                easing: "linear"
                            })
                        }()
                    }, n = function() {
                        e.mousedIn=!1, e.playButtonContainer.animate({
                            opacity: .6
                        }, {
                            duration: 200,
                            easing: "linear"
                        }), e.contract()
                    }, this.hotspot.unbind("mouseenter", t).unbind("mouseleave", n).bind("mouseleave", n).bind("mouseenter", t)) : (t = function() {
                        e.playButtonContainer.animate({
                            opacity: 1
                        }, {
                            duration: 300,
                            easing: "linear"
                        })
                    }, n = function() {
                        e.playButtonContainer.animate({
                            opacity: .6
                        }, {
                            duration: 200,
                            easing: "linear"
                        })
                    }, this.hotspot.unbind("mouseenter", t).unbind("mouseleave", n).bind("mouseenter", t).bind("mouseleave", n))
                },
                activate: function() {
                    this.logger.info("activate hotspot");
                    var e = NYTD.Video.$(document), t = null, n = null, r = this;
                    this.hotspot.css({
                        opacity: 0
                    }), navigator.appVersion.indexOf("MSIE")!==-1 && this.hotspot.css({
                        filter: "Alpha(opacity=0)"
                    }), this.removeSpinnerImage(), this.logger.info("binding click"), this.hotspot.unbind("click touchstart", NYTD.Video.Utils.bind(this.onClick, this)).bind("click touchstart", NYTD.Video.Utils.bind(this.onClick, this)), this.isVisible=!0, NYTD.Video.Validation.isTouchable() || this.registerMouseEvents()
                },
                reload: function() {
                    NYTD.Video.Validation.isIOS() && this.logger.info("reload - reloading object")
                },
                onTemplateLoaded: function() {
                    this.logger.info("onTemplateLoaded"), this.removeSpinnerImage(), this.isRendered=!0
                },
                onVideoContentLoaded: function() {
                    this.player.getSubscription().cancel(NYTD.Video.VideoEvents.TEMPLATE_LOADED, NYTD.Video.Utils.bind(this.onTemplateLoaded, this)), this.logger.info("content loaded...." + this.isVisible), this.reload(), this.isVisible || this.player.play(), this.player.getSubscription().cancel(NYTD.Video.VideoEvents.CONTENT_LOAD, NYTD.Video.Utils.bind(this.onVideoContentLoaded, this))
                },
                onDestroyed: function() {
                    this.destroying=!0, this.unregisterPlayerEvents(), this.hotspot.remove(), this.playButtonContainer.remove(), this.overlay.remove()
                },
                unregisterPlayerEvents: function() {
                    this.player.getSubscription().cancel(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.reinitialize, this)), this.player.getSubscription().cancel(NYTD.Video.VideoEvents.TEMPLATE_LOADED, NYTD.Video.Utils.bind(this.onTemplateLoaded, this))
                },
                registerContentEvents: function() {
                    this.unregisterPlayerEvents(), this.player.getSubscription().cancel(NYTD.Video.VideoEvents.CONTENT_LOAD, NYTD.Video.Utils.bind(this.onVideoContentLoaded, this)), this.player.getSubscription().subscribe(NYTD.Video.VideoEvents.CONTENT_LOAD, NYTD.Video.Utils.bind(this.onVideoContentLoaded, this)), this.player.getSubscription().subscribe(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.reinitialize, this)), this.player.getSubscription().subscribe(NYTD.Video.VideoEvents.TEMPLATE_LOADED, NYTD.Video.Utils.bind(this.onTemplateLoaded, this)), this.player.render()
                },
                revealAndPlay: function() {
                    var e = this;
                    if (this.isLoadingPlayer)
                        return;
                    this.isLoadingPlayer=!0, NYTD.Video.Validation.supportsAutoPlay() ? this.overlay.fadeTo(0, 200, function() {
                        e.showPlayer(), e.props.autoRender && e.reload(), setTimeout(function() {
                            e.finishRevealAndPlay()
                        }, 1)
                    }) : (this.overlay.fadeTo(0, 200), this.showPlayer(), this.props.autoRender && this.reload(), this.finishRevealAndPlay()), this.props.width.toString().indexOf("%")!==-1&&!this.props.preserveAspectRatio && NYTD.Video.Validation.isIOS() && NYTD.Video.$(window).unbind("resize", NYTD.Video.Utils.bind(this.onResize, this))
                },
                finishRevealAndPlay: function() {
                    var e = this;
                    this.removePhotoCredit(), this.playButtonContainer.hide(), this.hotspot.hide(), this.overlay.hide(), this.isVisible=!1, NYTD.Video.Validation.isEmpty(this.spinnerImg) ? this.drawSpinnerImage() : this.showSpinnerImage();
                    if (this.props.autoRender)
                        this.player.defaultProps.autoStart=!0, this.player.play();
                    else if (this.isRendered)
                        this.logger.info("is rendered..."), this.player.play();
                    else {
                        this.logger.info("testing if we can poll");
                        if (this.player.canPoll()) {
                            this.logger.info("can poll...");
                            var t = function() {
                                e.logger.info("VideoPoster::onPollCheckComplete"), e.player.getSubscription().cancel(NYTD.Video.VideoEvents.POLL_CHECK_COMPLETE, t), e.registerContentEvents()
                            };
                            this.player.getSubscription().cancel(NYTD.Video.VideoEvents.POLL_CHECK_COMPLETE, t), this.player.getSubscription().subscribe(NYTD.Video.VideoEvents.POLL_CHECK_COMPLETE, t), this.player.checkState()
                        } else 
                            this.registerContentEvents();
                        NYTD.Video.Validation.supportsAutoPlay() || this.primeVideoForMobile()
                    }
                },
                primeVideoForMobile: function() {
                    this.player && this.player.object&&!this.videoPrimed && (this.player.object.play(), this.player.object.pause(), this.videoPrimed=!0)
                },
                positionButton: function() {
                    var e = 57, t = 52;
                    this.props.overlay.buttonWidth !== null && this.props.overlay.buttonHeight !== null ? this.props.overlay.buttonWidth >= this.smallestWidth && this.props.overlay.buttonHeight >= this.smallestHeight && (e = this.props.overlay.buttonWidth, t = this.props.overlay.buttonHeight) : this.props.width <= 190 ? (this.props.overlay.playButtonClass = "smallSize", e = 34, t = 31) : this.props.width > 190 && this.props.width < 347 && (this.props.overlay.playButtonClass = "mediumSize", e = 46, t = 42);
                    switch (this.props.overlay.buttonPosition) {
                    case"bottomLeft":
                        this.props.playButtonLeft = this.props.overlay.buttonPaddingLeftRight, this.props.playButtonTop = this.props.height - t - this.props.overlay.buttonPaddingTopBottom, this.props.playButtonBottom = this.props.overlay.buttonPaddingTopBottom;
                        break;
                    case"bottomRight":
                        this.props.playButtonLeft = this.props.width - e - this.props.overlay.buttonPaddingLeftRight, this.props.playButtonRight = this.props.overlay.buttonPaddingLeftRight, this.props.playButtonTop = this.props.height - t - this.props.overlay.buttonPaddingTopBottom, this.props.playButtonBottom = this.props.overlay.buttonPaddingTopBottom;
                        break;
                    case"topRight":
                        this.props.playButtonLeft = this.props.width - e - this.props.overlay.buttonPaddingLeftRight, this.props.playButtonRight = this.props.overlay.buttonPaddingLeftRight, this.props.playButtonTop = this.props.overlay.buttonPaddingTopBottom;
                        break;
                    case"topLeft":
                        this.props.playButtonLeft = this.props.overlay.buttonPaddingLeftRight, this.props.playButtonTop = this.props.overlay.buttonPaddingTopBottom;
                        break;
                    case"center":
                        this.props.playButtonLeft = this.props.width / 2 - e / 2, this.props.playButtonHeight = this.props.height / 2 - t / 2
                    }
                    this.props.overlay.buttonWidth = e, this.props.overlay.buttonHeight = t, this.props.overlay.playIconWidth = e, this.props.overlay.playIconHeight = t
                }
            }
        }
    }.call(NYTD.Video), NYTD.Video && typeof NYTD.Video.Factory != "object" && (NYTD.Video.Factory = NYTD.Video.Factory || {}, function() {
        this.videoManager = new NYTD.Video.VideoManager, this.instances = {}, this.PREFIX = "nytd_video_", this.CONFIGURATION_ERROR = "Opps! There seems to be a configuration error when you called NYTD.Video.Factory.create. Please see the error notice.", this.BC_ASSETS_LOADED=!1, this.BC_ASSETS_LOADED_QUEUE = [], this.BC_ASSETS_LOADED_IN_PROGRESS=!1;
        var e = null, t = function(e) {
            var t = this.BC_ASSETS_LOADED_QUEUE.length;
            for (var n = 0; n < t; n++) {
                var r = this.BC_ASSETS_LOADED_QUEUE.shift();
                NYTD.Video.Validation.isFunction(r) && r(e)
            }
        }, n = function(e, t) {
            t.setADXInfo({
                playerType: e.playerType,
                pagename: e.adxPagename || "",
                positions: e.adxAdPositions || "VideoPlayerAd,VideoBigAd,ADX_CLIENTSIDE",
                bigAdContainer: e.bigAdContainer,
                bannerWidth: e.bannerWidth,
                bannerHeight: e.bannerHeight,
                adFrequency: e.adFrequency,
                adCountdown: e.adCountdown
            })
        }, r = function(e, t) {
            t.setFreewheel(e)
        }, i = function(e, t) {
            var n, r, i, s = {}, o=!1;
            e.autoStart&&!e.userInitiatedPlay && (o=!0), s = {
                playerType: e.playerType,
                kicker: e.kicker || "",
                autoPlay: o,
                series: e.series || "",
                wttags: e.wttags || "",
                videoEvent: e.videoEvent || "play",
                isPromo: e.isPromo ||!1,
                nextPlay: e.nextPlay ||!1
            }, NYTD.Video.Metrics.WebTrends && (n = new NYTD.Video.Metrics.WebTrends, n.init(t), n.setInfo(s)), NYTD.Video.Metrics.ComScore && (r = new NYTD.Video.Metrics.ComScore, r.init(t), r.setInfo(s)), NYTD.Video.Metrics.EventTracker && (i = new NYTD.Video.Metrics.EventTracker, i.init(t), i.setInfo(s))
        }, s = function(e) {
            var t = [{
                name: "@videoPlayer",
                value: "ref:" + e.videoId
            }, {
                name: "playerID",
                value: e.playerId
            }, {
                name: "width",
                value: e.width
            }, {
                name: "height",
                value: e.height
            }, {
                name: "bgcolor",
                value: e.bgcolor
            }, {
                name: "publisherID",
                value: e.publisherId
            }, {
                name: "isVid",
                value: e.isVid
            }, {
                name: "isUI",
                value: e.isUI
            }, {
                name: "wmode",
                value: e.wmode
            }, {
                name: "dynamicStreaming",
                value: e.dynamicStreaming
            }, {
                name: "optimizedContentLoad",
                value: e.optimizedContentLoad
            }, {
                name: "AllowScriptAccess",
                value: e.allowScriptAccess
            }, {
                name: "useExternalAdControls",
                value: e.useExternalAdControls
            }, {
                name: "autoStart",
                value: e.autoStart
            }, {
                name: "includeAPI",
                value: !1
            }, {
                name: "templateErrorHandler",
                value: e.templateErrorHandler
            }, {
                name: "quality",
                value: e.quality
            }, {
                name: "@videoList",
                value: e.videoList
            }
            ], n = [];
            n.push(e.videoId);
            var r = e.videoIds.length;
            for (var i = 0; i < r; i++)
                n.push(e.videoIds[i]);
            return e.videoIds = n, e.stillOverlay && t.push({
                name: "stillOverlay",
                value: e.stillOverlay
            }), e.secure && (t.push({
                name: "secureConnections",
                value: !0
            }), t.push({
                name: "secureHTMLConnections",
                value: !0
            })), t
        }, o = function(e) {
            var t = "http://graphics8.nytimes.com/";
            document.location.protocol === "https:" && (t = "https://sv.nyt.com/"), e.width = e.width || 600, e.height = e.height || 338, e.preserveAspectRatio = e.preserveAspectRatio===!1?!1 : !0, e.videoList = e.videoList || "", e.objectClass = e.objectClass || "BrightcoveExperience", e.bgcolor = e.bgcolor || "#000000", e.publisherId = e.publisherId || "1749339200", e.readToken = e.publisherReadToken || "cE97ArV7TzqBzkmeRVVhJ8O6GWME2iG_bRvjBTlNb4o.", e.isVid = e.isVid || "true", e.isUI = e.isUI || "true", e.wmode = e.wmode || "transparent", e.dynamicStreaming = e.dynamicStreaming || "true", e.connectOnLoad = e.connectOnLoad || "false", e.enableInitialBandwidthDetection = e.enableInitialBandwidthDetection || "true", e.optimizedContentLoad = e.optimizedContentLoad || "true", e.allowScriptAccess = e.allowScriptAccess || "always", e.useExternalAdControls = e.useExternalAdControls || "true", e.autoStart = e.autoStart && e.autoStart === "true" || e.autoStart===!0?!0 : !1, e.matchContainerSize = e.matchContainerSize ||!1, e.autoRender = typeof e.autoRender != "undefined" && e.autoRender !== null && e.autoRender===!1 || e.autoRender === "false"?!1 : !0, e.shareURL = e.shareURL || e.shareUrl || "", e.templateErrorHandler = e.templateErrorHandler || a, e.quality = e.quality || "high", e.events = e.events || {}, e.isLive = e.isLive && e.isLive === "true" || e.isLive===!0?!0 : !1, e.m3u = e.m3u || "", e.series = e.series || "", e.wttags = e.wttags || "", e.minRegularPlayerWidth = e.minRegularPlayerWidth || 312, e.isPromo = e.isPromo ||!1, e.width < e.minRegularPlayerWidth || e.isPromo===!0 ? (e.videoEvent = "promo", e.kicker = "promo", e.adxPagename = "video.nytimes.com/noads", e.isPromo=!0) : e.videoEvent = e.videoEvent || "play", e.userInitiatedPlay = e.userInitiatedPlay ||!1, e.nextPlay = e.nextPlay ||!1, e.captureProgressEvents = e.captureProgressEvents===!1 || e.captureProgressEvents === "false"?!1 : !0, e.adCountdown = e.adCountdown===!1 || e.adCountdown === "false"?!1 : !0, e.enableHTML5Ads = e.enableHTML5Ads===!1 || e.enableHTML5Ads === "false"?!1 : !0, e.useNativeControls = e.useNativeControls ||!1, e.enableLivePoll = e.enableLivePoll===!0 || e.enableLivePoll === "true", e.pollService = e.pollService || null, e.captionContainer = e.captionContainer || null, e.liveCaption = e.liveCaption || "Live Video", e.vodCaption = e.vodCaption || "Video", e.spinnerImgTop = e.spinnerImgTop || null, e.spinnerImgLeft = e.spinnerImgLeft || null, e.videoIds = e.videoIds || [], e.autoPlayPlaylist = e.autoPlayPlaylist ||!1, e.autoPosterFrame=!e.autoPosterFrame || e.autoPosterFrame !== "true" && e.autoPosterFrame!==!0?!1 : !0, e.overlay = e.overlay || {}, e.overlay.backgroundImage = e.overlay.backgroundImage || "", e.overlay.backgroundImageCSSPath = e.overlay.cssPath || null, e.overlay.photoCredit = e.overlay.photoCredit || null, e.overlay.photoCreditContainer = e.overlay.photoCreditContainer || null, e.overlay.buttonWidth = parseInt(e.overlay.buttonWidth, 10), e.overlay.buttonWidth = e.overlay.buttonWidth > 0 ? e.overlay.buttonWidth : null, e.overlay.buttonHeight = parseInt(e.overlay.buttonHeight, 10), e.overlay.buttonHeight = e.overlay.buttonHeight > 0 ? e.overlay.buttonHeight : null, e.overlay.buttonExpandBy = e.overlay.buttonExpandBy || 100, e.overlay.buttonExpandDuration = e.buttonExpandDuration || 180, e.overlay.buttonContractDuration = e.buttonContractDuration || 180, e.overlay.buttonExpandEasing = e.overlay.buttonExpandEasing || "linear", e.overlay.buttonExpandEasing = e.overlay.buttonContractEasing || "linear", e.overlay.buttonFontColor = e.overlay.buttonFontColor || "#FFF", e.overlay.buttonFontSize = e.overlay.buttonFontSize || null, e.overlay.buttonAnimated = e.overlay.buttonAnimated && e.overlay.buttonAnimated === "true" || e.overlay.buttonAnimated===!0?!0 : !1, e.overlay.buttonPaddingTopBottom = parseInt(e.overlay.buttonPaddingTopBottom, 10) || 10, e.overlay.buttonPaddingLeftRight = parseInt(e.overlay.buttonPaddingLeftRight, 10) || 10, e.overlay.vodBumperPath = e.overlay.vodBumperPath || null, e.overlay.vodBumperHeight = e.overlay.vodBumperHeight || null, e.overlay.liveBumperPath = e.overlay.liveBumperPath || null, e.overlay.liveBumperHeight = e.overlay.liveBumperHeight || null, e.overlay.bumperDefault = e.overlay.bumperDefault || null, e.overlay.buttonPlayIcon = e.overlay.buttonPlayIcon || t + "images/video/playbutton_arrow.png", e.overlay.spinnerIcon = e.overlay.spinnerIcon || t + "images/video/spinner-dark.gif", e.overlay.position = e.overlay.buttonPosition || "center", e.overlay.padding = parseInt(e.overlay.padding, 10) || 0, e.notification = e.notification || "none", e.adxKeywords = e.adxKeywords || null, e.loadVideoPosterAssets = e.loadVideoPosterAssets===!1?!1 : !0, e.adDurationBeforeSkippable = e.adDurationBeforeSkippable || null, e.skippableAdDuration = e.skippableAdDuration || 20, e.videoURL = e.videoURL || null, e.displayName = e.displayName || "", e.shortDescription = e.shortDescription || e.displayName, e.longDescription = e.longDescription || e.shortDescription, e.videoCodec = e.videoCodec || "H264", e.tags = e.tags || [], e.videoLength = e.videoLength || 18e4, e.placeholderReferenceId = e.placeholderReferenceId || "nonscoop_video_ads", e.secure = e.secure===!0?!0 : !1, e.freewheel = e.freewheel===!1?!1 : !0;
            var n = "http://adm.fwmrm.net/p/nytimes_live/AdManager.swf", r = "379536", i = "379536", s = "379536", o = "ny_times_brightcove_as3_live", u = "379536:ny_times_js_live";
            if (NYTD.Video.env === "local" || NYTD.Video.env === "development" || NYTD.Video.env === "staging")
                n = "http://adm.fwmrm.net/p/nytimes_test/AdManager.swf", r = "379535", i = "379535", s = "379535", o = "ny_times_brightcove_as3_test", u = "379535:ny_times_js_test";
            return e.amLocation = e.amLocation || n, e.networkId = e.networkId || r, e.videoAssetNetworkId = e.videoAssetNetworkId || i, e.siteSectionNetworkId = e.siteSectionNetworkId || s, e.cb_profile_js = e.cb_profile_js || u, e.cb_profile_flash = e.cb_profile_flash || o, e.fw_server_flash = e.fw_server_flash || NYTD.Video.Libs.FreewheelFlashServer, e.fw_server_js = e.fw_server_js || NYTD.Video.Libs.FreewheelJsServer, e.siteSection = e.siteSection, e
        }, u = function(e) {
            if (!e)
                throw new Error("Empty configuration. Please paramertize the video instance.");
            if (!e.container)
                throw new Error(["Missing required property: props.container. ", "Please specify the container id or HTMLElement"].join(""));
            if (!e.playerId)
                throw new Error(["Missing required property: props.playerId. ", "Please contact the video team for an ID"].join(""));
            if (!e.playerType)
                throw new Error(["Missing required parameter: props.playerType. ", "The playerType is used for tracking purposes and indicates ", "the type of player being tracked: eg: Homepage, article, etc"].join(""));
            return e.id || (e.id = [(new Date).getTime(), "_nytd_vid_player"].join("")), !0
        };
        this.loadDependencies = function(e) {
            if (this.BC_ASSETS_LOADED===!0) {
                if (!e)
                    return !0;
                e(!0)
            } else if (this.BC_ASSETS_LOADED_IN_PROGRESS)
                this.BC_ASSETS_LOADED_QUEUE.push(e);
            else {
                this.BC_ASSETS_LOADED_QUEUE.push(e), this.BC_ASSETS_LOADED=!1, this.BC_ASSETS_LOADED_IN_PROGRESS=!0;
                var n = [{
                    src: NYTD.Video.Libs.Underscore,
                    type: "_"
                }, {
                    src: NYTD.Video.Libs.Backbone,
                    type: "Backbone"
                }, {
                    src: NYTD.Video.Libs.Brightcove,
                    type: "BrightcoveExperience"
                }, {
                    src: NYTD.Video.Libs.VideoManager,
                    type: "VideoManager"
                }
                ], r = this;
                NYTD.Video.Utils.loadDependencies(n, function(e) {
                    r.BC_ASSETS_LOADED=!0, r.BC_ASSETS_LOADED_IN_PROGRESS=!1, t.call(r, e)
                })
            }
        }, this.loadBCAssets = function(e) {
            this.loadDependencies(e)
        }, this.create = function(e) {
            u(e), e = o(e);
            var t = e.type ? e.type: null, a = this.videoManager.create(t), f = this;
            typeof e.container == "string" && (e.container = document.getElementById(e.container)), e.matchContainerSize && e.container.width && e.container.height && (e.width = e.container.style.width || e.container.width, e.height = e.container.style.height || e.container.height);
            var l = s(e);
            e.flashVars && l.push({
                name: "flashVars",
                value: e.flashVars
            });
            var c = [this.PREFIX, e.id].join("");
            return a.setProps(e), a.setContainer(e.container), a.setObjectId(c), a.setObjectClass(e.objectClass), a.setEnableInitialBandwidthDetection(e.enableInitialBandwidthDetection), a.setConnectOnLoad(e.connectOnLoad), a.setParams(l), e.embedCode && a.setEmbedCode(e.embedCode), e.videoURL ? (a.setVideoIds([e.placeholderReferenceId]), e.shareURL || (e.shareURL = "http://www.nytimes.com")) : e.videoIds && a.setVideoIds(e.videoIds), e.shareURL && a.setSocialURL(e.shareURL), i(e, a), !NYTD.Video.Validation.isEmpty(e.overlay)&&!NYTD.Video.Validation.isEmpty(e.overlay.backgroundImage) ? a.setPoster() : (e.autoPosterFrame&&!e.autoStart&&!e.autoRender ||!e.autoStart && e.autoRender) && a.type === "html5" && a.setAutoPoster(), e.freewheel ? r(e, a) : n(e, a), a.getSubscription().subscribe(NYTD.Video.VideoEvents.DESTROYING, function(e) {
                var t = e.id;
                f.instances[t] && (f.instances[t] = null)
            }), e.autoRender && a.render(), this.instances[c] = a, a
        };
        var a = function(e) {};
        return this.get = function(e) {
            e = [this.PREFIX, e].join("");
            var t = this.instances[e];
            return t ? t : null
        }, this.Log = NYTD.Video.Log, this.Validation = NYTD.Video.Validation, this
    }.call(NYTD.Video.Factory)), NYTD.Video.Ad.Model.AdModel = function() {
        var e = {
            player: null,
            playerType: null,
            positions: "",
            pagename: "",
            adxTrackingContainer: null,
            adxTrackingContainerId: null,
            requestVidPosition: 0,
            requestFetched: !1,
            videoPlayerAd: "",
            bigAdContainer: null,
            bigAd: "",
            stageADXBaseURL: "www.stg.nytimes.com",
            productionADXBaseURL: "www.nytimes.com",
            adBaseURL: "",
            debugMode: "0",
            interstitialAllowed: 0,
            bigAdRegExp: new RegExp("ADXINFO", "i"),
            adModule: null,
            contentModule: null,
            videoModule: null,
            callback: "",
            imageRegExp: /image\/{1}(jpg|gif|jpeg|png)/,
            iframeWidth: "300",
            iframeHeight: "250",
            iframeBorder: "0",
            iframeScrolling: "no",
            iframeSrc: "#",
            iframeMarginWidth: "0",
            iframeMarginHeight: "0",
            iframeNoResize: "noresize",
            subscription: new NYTD.Subscription,
            adFrequency: 2,
            bannerWidth: 300,
            bannerHeight: 250,
            maxVidPosition: 2,
            adCountdown: null
        }, t = NYTD.Video.Logger.get("AdsModel"), n = function() {
            window.location.host.indexOf("localhost")!==-1 ? e.adxBaseURL = e.stageADXBaseURL : window.location.host.indexOf(".dev.")!==-1 ? e.adxBaseURL = e.stageADXBaseURL : window.location.host.indexOf(".stg.")!==-1 ? e.adxBaseURL = e.stageADXBaseURL : e.adxBaseURL = e.productionADXBaseURL, t.debug("setADXBaseURL", e.adxBaseURL)
        };
        return e.init = function(e) {
            n(), t.debug("init")
        }, e
    }, function() {
        "use strict";
        return this.VASTModel = function() {
            this.proxyBaseUrl = "http://www.nytimes.com/video/svc/ads/video/vast/index.html?", this.pageURL = window.location.href.toString(), this.playerWidth = 0, this.playerHeight = 0, this.videoTitle = "", this.videoId = 0, this.vastURL = null, this.callback = null, this.$ = null, this.imageRegExp = /image\/.*/, this.bigAdContainer = null, this.init = function() {
                this.$ = NYTD.Video.$, e.call(this)
            };
            var e = function() {
                if (NYTD && NYTD.env) {
                    if (NYTD.env === "production")
                        this.proxyBaseURL = [NYTD.Video.Ad.SERVER_PRODUCTION, "/video/svc/ads/video/vast/index.html?"].join("");
                    else if (NYTD.env === "staging" || NYTD.env === "development")
                        this.proxyBaseURL = [NYTD.Video.Ad.SERVER_STAGING, "/video/svc/ads/video/vast/index.html?"].join("")
                } else 
                    this.proxyBaseURL = [NYTD.Video.Ad.SERVER_PRODUCTION, "/video/svc/ads/video/vast/index.html?"].join("")
            };
            return this.init(), this
        }, this
    }.call(NYTD.Video.Ad.Model), function() {
        "use strict";
        return this.AbstractAdController = Backbone.Model.extend({
            videoEvents: null,
            validation: null,
            model: null,
            vastController: null,
            logger: null,
            skipAd: !1,
            showVideoAdCountDown: !1,
            videoAdCountDownPlayerTypes: ["library", "homepage", "article", "article inline", "blog", "embed", "photospot"],
            videoAdCountdownHTML: null,
            videoAdDuration: 0,
            videoAdCountdown: null,
            videoAdSkipButton: null,
            skippableAdDuration: 20,
            adDurationBeforeSkippable: null,
            skipAdCopy: ["YOU CAN SKIP THIS AD IN ", 15, " SECONDS."],
            adCountdownCopy: ["YOUR VIDEO WILL START IN ", 15, " SECONDS."],
            adNoCountdownCopy: ["YOUR VIDEO WILL RESUME SHORTLY"],
            videoAdCountdownCSS: NYTD.Video.BaseURL + "/css/0.1/screen/common/modules/video/adCountdown.css",
            isVideoAdCountdownVisible: !1,
            ricocheCampaignSent: !1,
            documentHead: NYTD.Video.DOCUMENT_HEAD,
            initialize: function(e) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Ad.Controller.AbstractAdController"), this.videoEvents = NYTD.Video.VideoEvents
            },
            setup: function(e) {
                if (NYTD.Video.Validation.isEmpty(e) || NYTD.Video.Validation.isEmpty(e.player))
                    throw new Error("Missing one or more required parameters");
                this.setAdsModel(), this.model.position = e.positions, this.model.pagename = e.pagename, this.model.player = e.player, this.model.playerType = e.playerType, e.adxKeywords && (this.model.keywords = e.adxKeywords), e.bannerWidth && (this.model.bannerWidth = e.bannerWidth), e.bannerHeight && (this.model.bannerHeight = e.bannerHeight), e.adFrequency && (this.logger.debug("init::setting ad frequency", e.adFrequency), this.model.adFrequency = e.adFrequency);
                if (e.adCountdown === "true" || e.adCountdown===!0)
                    this.model.adCountdown=!0;
                else if (e.adCountdown === "false" || e.adCountdown===!1)
                    this.model.adCountdown=!1;
                this.logger.debug("init::setting ad countdown", this.model.adCountdown), typeof e.bigAdContainer == "string" ? this.model.bigAdContainer = document.getElementById(e.bigAdContainer.replace("#", "")) : typeof e.bigAdContainer != "undefined" && (this.model.bigAdContainer = e.bigAdContainer), this.model.player.defaultProps.adDurationBeforeSkippable && (this.adDurationBeforeSkippable = this.model.player.defaultProps.adDurationBeforeSkippable), this.model.player.defaultProps.skippableAdDuration && (this.skippableAdDuration = this.model.player.defaultProps.skippableAdDuration), this.setADXCallback(), this.setADXTrackingContainer(), this.registerListeners();
                if (NYTD.Video.$.inArray(this.model.playerType, this.videoAdCountDownPlayerTypes)!==-1 && this.model.adCountdown!==!1 || this.model.adCountdown===!0)
                    this.showVideoAdCountDown=!0, this.loadSupportCSS();
                this.logger.debug("Abstract Ad Controller, initialization complete")
            },
            setAdsModel: function() {
                this.model = new NYTD.Video.Ad.Model.AdModel, this.model.init()
            },
            setADXTrackingContainer: function() {
                this.model.adxTrackingContainer || (this.model.adxTrackingContainerId = NYTD.Video.Utils.generateCallbackName("adxTracking"), this.model.adxTrackingContainer = document.createElement("div"), this.model.adxTrackingContainer.setAttribute("id", this.model.adxTrackingContainerId), this.model.adxTrackingContainer.setAttribute("visibility", "hidden"), NYTD.Video.$("body").append(NYTD.Video.$(this.model.adxTrackingContainer)), this.logger.debug("setADXTrackingContainer - Container ID: " + this.model.adxTrackingContainerId))
            },
            setADXCallback: function() {
                NYTD.Video.Validation.isEmpty(this.model.callback) && (this.model.callback = NYTD.Video.Utils.generateCallbackName(this.model.player.getObjectId() + "_adx_video_success"))
            },
            setPageUrl: function() {
                typeof NYTD.env == "undefined" || NYTD.env && NYTD.env !== "production" ? this.model.pageUrl = "http://video.nytimes.com" : this.model.pageUrl = window.location.href.toString()
            },
            removeADXTrackingContainer: function() {
                NYTD.Video.Validation.isEmpty(this.model.adxTrackingContainer) || NYTD.Video.$(this.model.adxTrackingContainer).remove()
            },
            removeBigAd: function() {
                if (!NYTD.Video.Validation.isEmpty(this.model.bigAdContainer)) {
                    var e = this.model.bigAdContainer.children();
                    if (e) {
                        var t = e.first();
                        t && t.remove()
                    }
                }
            },
            getAdPosition: function() {
                return this.model.requestVidPosition
            },
            getRequestVidPosition: function() {
                return this.model.requestVidPosition <= 0 ? this.model.requestVidPosition = 1 : this.model.requestVidPosition < this.model.maxVidPosition ? this.model.requestVidPosition++ : this.model.requestVidPosition = 1, this.logger.debug("getRequestVidPosition - Current ad position is " + this.model.requestVidPosition), this.model.requestVidPosition
            },
            getTag: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (t.test(r)) {
                        var i = r.indexOf("_") + 1;
                        return r.substring(i)
                    }
                }
                return ""
            },
            addToKeywords: function(e, t) {
                if (t && e && e.push && typeof t == "string") {
                    var n = t.replace(/\&/g, "").replace(/\?/g, ""), r = ["%22", encodeURIComponent(n), "%22"].join("");
                    NYTD.Video.$.inArray(r, e)===-1 && e.push(r)
                }
                return e
            },
            getJoinedAdxUrl: function(e, t, n) {
                var r, i, s, o, u, a;
                return r = e, i = t, s = n, document.location.protocol === "https:" ? a = "https://" : a = "http://", o = ["[", "{", "%22videoads%22:{", "%22url%22:%22", r, "%22,", "%22positions%22:[", i, "],", "%22keywords%22:[", s, "]", "}", "}", "]"].join(""), u = [a, this.model.adxBaseURL, "/svc/adxmulti?", "&debug=", this.model.debugMode.toString(), "&interstitial_allowed=", this.model.interstitialAllowed, "&json_request=", o].join(""), u
            },
            buildADXRequestURL: function(e) {
                var t = /MSIE 9.*/.test(navigator.userAgent), n = this.getRequestVidPosition();
                if (n===!1)
                    return this.resumeContent(), !1;
                var r = "/vid" + n, i = NYTD.Video.Utils.getQueryParams();
                i && i.pagename && (this.model.pagename = i.pagename);
                var s = "", o = null, u = "", a = "", f = "", l = "", c = null, h = this.model.position, p = [];
                if (typeof h == "string" && h.length > 0) {
                    var d = h.split(","), v = d.length;
                    for (var m = 0; m < v; m++) {
                        var g = encodeURIComponent(d[m].replace(/^\s+|\s+$/g, ""));
                        p.push(["%22", g, "%22"].join(""))
                    }
                }
                h = p.join(","), this.model && this.model.videoModule && this.model.videoModule.getCurrentVideo && (o = this.model.videoModule.getCurrentVideo()), o && o.customFields && (o.customFields.series && (f = o.customFields.series), o.customFields.adsensitivity && (c = o.customFields.adsensitivity)), o && o.tags && (u = this.getTag(o.tags, /nytsec0_(.+)/), a = this.getTag(o.tags, /nytsec1_(.+)/)), this.model && this.model.playerType && (l = this.model.playerType.toLowerCase().replace(/\s/g, "-").replace(/\|/g, "-"));
                if (this.model.player.type === "html5" && t || c && c === "noads")
                    s = "video.nytimes.com/noads" + r;
                else if (this.model.pagename)
                    s = this.model.pagename + r;
                else {
                    s = ["vid", n, ".nytimes.com"], u && (s.push("/"), s.push(u)), a && (s.push("/"), s.push(a)), l && (s.push("/"), s.push(l));
                    if (f) {
                        var y = f.toLowerCase().replace(/\s/g, "-");
                        s.push("/"), s.push(y)
                    }
                    s = s.join("")
                }
                var b = [], w = "", E = "", S = 0;
                if (NYTD && NYTD.jQuery) {
                    w = NYTD.jQuery("meta[name=keywords]");
                    if (w) {
                        w = w.attr("content");
                        if (w && w.length && w.length > 0) {
                            var x = w.split(","), T = x.length;
                            for (S = 0; S < T; S++) {
                                var N = x[S].replace(/^\s+|\s+$/g, "");
                                b = this.addToKeywords(b, N)
                            }
                        }
                    }
                }
                if (i && i.keywords && i.keywords !== "" && i.rico && parseInt(i.rico, 10) === 1&&!this.ricocheCampaignSent) {
                    var C = i.keywords;
                    C && (b = ["%22", encodeURIComponent(i.keywords), "%22"].join(""), this.ricocheCampaignSent=!0)
                } else {
                    b = this.addToKeywords(b, u), b = this.addToKeywords(b, a), b = this.addToKeywords(b, f), this.model.player.type === "html5" && (b = this.addToKeywords(b, "HTML5"));
                    if (NYTD && NYTD.Video && NYTD.Video.Library && NYTD.Video.Library.PageInfo && NYTD.Video.Library.PageInfo.landingUrl && typeof NYTD.Video.Library.PageInfo.landingUrl == "string") {
                        var k = NYTD.Video.Library.PageInfo.landingUrl.replace(/(\/video\/landing\/)(.+)(\/\d*\/index.html)/, "$2"), L = ["playlist_", k].join("");
                        b = this.addToKeywords(b, L)
                    }
                }
                var A = this.getJoinedAdxUrl(s, h, b), O = 1900;
                if (A.length >= O && typeof b != "string") {
                    var M, _, D, P, H, B, j;
                    M = [], _ = b.join(",").length, D = A.length - _, P = 100, j = O - D - P;
                    if (j > 0) {
                        H = b.length;
                        for (S = H - 1; S >= 0; S--) {
                            B = b[S];
                            if (!(B.length + M.join(",").length < j))
                                break;
                            M.push(B)
                        }
                        A = this.getJoinedAdxUrl(s, h, M)
                    }
                }
                return this.logger.debug("buildADXRequestURL", A), A
            },
            dropADXClientSide: function(e) {
                var t = null, n = /\s*(<img.+src=['"])(.+)$/gi, r = n.exec(e), i = "http://www.nytimes.com";
                document.location.protocol === "https:" && (i = "https://www.nytimes.com"), r && r.length == 3 && (t = [r[1], i, r[2]].join(""), this.model.adxTrackingContainer.innerHTML = t, this.logger.debug("dropADXClientSide - ADX client side dropped: " + t))
            },
            renderVideoLibraryStripAd: function(e) {
                var t;
                this.model.player.defaultProps.playerType === "library" && e && (NYTD.Video.$(".video-library-sponsor-ad").length > 0 ? t = NYTD.Video.$(".video-library-sponsor-ad").empty().hide().html(e) : (t = NYTD.Video.$(document.createElement("div")), t.addClass("video-library-sponsor-ad").addClass("clearfix").html(e), NYTD.Video.$(".navigation").after(t)), t.show())
            },
            isProduction: function() {
                return NYTD.env && NYTD.env === "production"
            },
            getSubscription: function() {
                return this.model.subscription
            },
            buildVideoAdNotice: function(e) {
                this.logger.debug("buildVideoAdNotice", e);
                if (this.showVideoAdCountDown) {
                    var t = NYTD.Video.$(document.createElement("div"));
                    this.videoAdCountdown = NYTD.Video.$(document.createElement("p")), this.videoAdSkipButton = NYTD.Video.$(document.createElement("button")), this.model.player.defaultProps.adDurationBeforeSkippable === null ? this.adDurationBeforeSkippable = Math.floor(e / 2) : this.adDurationBeforeSkippable = this.model.player.defaultProps.adDurationBeforeSkippable;
                    var n = "";
                    e === 0 ? n = this.adNoCountdownCopy : e >= this.skippableAdDuration ? (this.skipAdCopy[1] = this.adDurationBeforeSkippable, n = this.skipAdCopy) : (this.adCountdownCopy[1] = e, n = this.adCountdownCopy), n.length > 1 && n[1] < 10 && (n[1] = ["0", n[1]].join("")), this.videoAdCountdown.html(n.join("")), this.videoAdSkipButton.html("SKIP AD"), t.addClass("videoAdCountdownContainer"), this.videoAdCountdown.addClass("videoAdCountdown"), this.videoAdSkipButton.addClass("videoAdSkipButton").hide(), t.append(this.videoAdCountdown), t.append(this.videoAdSkipButton), this.model.player.defaultProps.width <= 337 && t.addClass("videoAdCountdownContainerSmall"), this.videoAdCountdownHTML = t
                }
            },
            addVideoAdCountdown: function() {
                this.logger.debug("addVideoAdCountdown");
                if (this.showVideoAdCountDown && this.model && this.model.player) {
                    var e = this.model.player.getContainer();
                    e && (NYTD.Video.$(e).prepend(this.videoAdCountdownHTML), this.isVideoAdCountdownVisible=!0)
                }
            },
            removeVideoAdCountdown: function() {
                this.logger.debug("removeVideoAdCountdown"), this.showVideoAdCountDown && (this.videoAdSkipButton && this.videoAdSkipButton.hide(), this.videoAdCountdownHTML && typeof this.videoAdCountdownHTML.remove == "function" && (this.videoAdCountdownHTML.remove(), this.isVideoAdCountdownVisible=!1))
            },
            showVideoSkipButton: function() {
                if (this.showVideoAdCountDown && this.videoAdSkipButton) {
                    if (!this.videoAdSkipButton.is(":visible")) {
                        this.logger.debug("showVideoSkipButton"), this.videoAdSkipButton.removeClass("hover").fadeIn("slow");
                        var e = this;
                        this.videoAdSkipButton.bind("click", function(t) {
                            e.logger.debug("clickVideoSkipButton"), e.model && e.model.adModule && typeof e.model.adModule.stopAd == "function" && (e && e.model && e.model.player && e.model.player.subscription && e.model.player.subscription.notify(NYTD.Video.VideoEvents.AD_SKIPPED, {}), e.model.adModule.stopAd(), e.removeVideoAdCountdown())
                        }), this.videoAdSkipButton.hover(function() {
                            NYTD.Video.$(this).addClass("hover")
                        }, function() {
                            NYTD.Video.$(this).removeClass("hover")
                        })
                    }
                    this.videoAdCountdown.html("")
                }
            },
            loadSupportCSS: function() {
                NYTD.Video.$("head").append('<link rel="stylesheet" type="text/css" href="' + this.videoAdCountdownCSS + '">')
            },
            adxRequestError: function(e) {
                this.logger.debug("adx request error", e), this.resumeContent(), this.model && this.model.player && this.model.player.subscription && this.model.player.subscription.notify(NYTD.Video.VideoEvents.ADX_ERROR, {})
            },
            adxAdDataReceived: function(e) {
                this.logger.debug("adxAdDataReceived", e), this.model && this.model.player && this.model.player.subscription && this.model.player.subscription.notify(NYTD.Video.VideoEvents.ADX_AD_DATA_RECEIVED, {
                    data: e
                })
            },
            getSiteSection: function() {
                function r(e) {
                    var t = e === "" ? "none": e;
                    return t.replace(/[^a-zA-Z]/g, "").toLowerCase()
                }
                var e = NYTD.Video.$('meta[name="CG"]').attr("content") || "", t = NYTD.Video.$('meta[name="SCG"]').attr("content") || "", n = NYTD.Video.$('meta[name="PT"]').attr("content") || "", i = r(e) + "_" + r(t) + "_" + r(n);
                return i
            }
        }), this
    }.call(NYTD.Video.Ad.Controller), function() {
        "use strict";
        this.FlashAdPrivateController = this.AbstractAdController.extend({
            logger: null,
            VPaidSkipDuration: 15,
            initialize: function(e) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Ad.Controller.FlashAdController"), this.videoEvents = NYTD.Video.VideoEvents, this.setup(e), this.setBCRoadSync(), this.logger.debug("initialization complete")
            },
            setADXCallback: function() {
                NYTD.Video.Validation.isEmpty(this.model.callback) && (this.model.callback = NYTD.Video.Utils.generateCallbackName(this.model.player.getObjectId() + "__adx_video_success"))
            },
            destroy: function() {},
            isVPaid: function(e) {
                var t = e.getCurrentAdProperties();
                return t && "additionalElements"in t && t.additionalElements.vpaidDuration?!0 : !1
            },
            getDuration: function(e) {
                var t = e.getCurrentAdProperties(), n = 0;
                return t && (n = "additionalElements"in t && t.additionalElements.vpaidDuration ? t.additionalElements.vpaidDuration : t.duration), n
            },
            setAdsModel: function() {
                this.model = new NYTD.Video.Ad.Model.AdModel, this.model.init()
            },
            setVASTController: function(e) {
                NYTD.Video.Validation.isEmpty(this.vastController) && (this.logger.info("setVASTController"), this.vastController = new NYTD.Video.Ad.Controller.VASTController({
                    player: this.model.player
                }), this.vastController.getSubscription().subscribe(NYTD.Video.Ad.Controller.VASTController.COMPLETE, NYTD.Video.Utils.bind(this.onVASTComplete, this)), this.logger.debug("setVastController - VAST Controller initialized..."))
            },
            onVASTComplete: function(e) {
                NYTD.Video.Validation.isEmpty(e) || NYTD.Video.Validation.isEmpty(e.vast) ? (this.logger.error("VAST response was empty"), this.resumeContent()) : this.model.adModule.showAd(e.vast);
                try {
                    this.logger.info("onVASTComplete"), this.vastController.getSubscription().cancel(NYTD.Video.Ad.Controller.VASTController.COMPLETE, NYTD.Video.Utils.bind(this.onVASTComplete, this)), this.vastController.kill(), this.vastController = null, this.clientSide = null
                } catch (t) {
                    var n = t;
                    this.logger.error("onVASTComplete", n)
                }
            },
            registerListeners: function() {
                var e = this.model.player.getSubscription();
                e.subscribe(this.videoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.subscribe(this.videoEvents.TEMPLATE_LOADED, NYTD.Video.Utils.bind(this.onTemplateLoaded, this)), e.subscribe(this.videoEvents.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), e.subscribe(this.videoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.subscribe(this.videoEvents.AD_START, NYTD.Video.Utils.bind(this.onAdStart, this)), e.subscribe(this.videoEvents.AD_COMPLETE, NYTD.Video.Utils.bind(this.onAdComplete, this)), e.subscribe(this.videoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)), e.subscribe(this.videoEvents.PLAY, NYTD.Video.Utils.bind(this.onMediaPlay, this)), e.subscribe(this.videoEvents.VIDEO_LOAD, NYTD.Video.Utils.bind(this.onVideoLoaded, this)), e.subscribe(this.videoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this)), this.onFwAdManagerLoaded && e.subscribe(this.videoEvents.FW_AD_MANAGER_LOADED, NYTD.Video.Utils.bind(this.onFwAdManagerLoaded, this)), this.logger.debug("registerListeners")
            },
            unregisterListeners: function() {
                var e = this.model.player.getSubscription();
                e.cancel(this.videoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.cancel(this.videoEvents.TEMPLATE_LOADED, NYTD.Video.Utils.bind(this.onTemplateLoaded, this)), e.cancel(this.videoEvents.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), e.cancel(this.videoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.cancel(this.videoEvents.AD_START, NYTD.Video.Utils.bind(this.onAdStart, this)), e.cancel(this.videoEvents.AD_COMPLETE, NYTD.Video.Utils.bind(this.onAdComplete, this)), e.cancel(this.videoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)), e.cancel(this.videoEvents.PLAY, NYTD.Video.Utils.bind(this.onMediaPlay, this)), e.cancel(this.videoEvents.VIDEO_LOAD, NYTD.Video.Utils.bind(this.onVideoLoaded, this)), e.cancel(this.videoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this)), this.logger.debug("unregisterListeners")
            },
            onTemplateReady: function(e) {
                this.logger.debug("onTemplateReady", e);
                try {
                    this.model.adModule = e.player.getAdModule(), this.model.contentModule = e.player.getContentModule(), this.model.videoModule = e.player.getVideoModule()
                } catch (t) {
                    var n = t;
                    this.logger.error("onTemplateLoaded", n)
                }
                this.model.adModule.enableExternalAds(!0)
            },
            onTemplateLoaded: function(e) {
                this.logger.debug("onTemplateLoaded", e)
            },
            onExternalAd: function(e) {
                this.logger.info("onExternalAd", e), this.fetch()
            },
            onCuePoint: function(e) {
                this.logger.info("onCuePoint", e)
            },
            onDestroyed: function(e) {
                this.kill()
            },
            onAdStart: function(e) {
                this.hasVPaid = this.isVPaid(this.model.adModule), this.progressSteps = 0, this.adProgressTimer = null, this.logger.info("onAdStart", e)
            },
            onAdComplete: function(e) {
                this.logger.info("onAdComplete", e), this.removeVideoAdCountdown()
            },
            onAdProgress: function(e) {
                var t = this.hasVPaid, n = this, r, i, s, o, u;
                if (t && typeof this.adProgressTimer == "number" && typeof e.mockedOnly == "undefined")
                    return 0;
                if (this.showVideoAdCountDown) {
                    this.isVideoAdCountdownVisible || (NYTD.Video.Validation.isEmpty(this.model.adModule) || (u = t ? this.VPaidSkipDuration : this.model.adModule.getCurrentAdProperties().duration, this.videoAdDuration = Math.floor(u)), this.videoAdCountdownHTML === null && this.buildVideoAdNotice(t ? this.VPaidSkipDuration : this.videoAdDuration), this.addVideoAdCountdown());
                    if (this.videoAdCountdown && e && e.obj) {
                        r = Math.abs(e.obj.position);
                        if (r >= 0) {
                            !t && this.model && (NYTD.Video.Validation.isEmpty(this.model.adModule) || (o = Math.floor(this.model.adModule.getCurrentAdProperties().duration), o !== this.videoAdDuration && (this.videoAdDuration = o, this.model.player.defaultProps.adDurationBeforeSkippable === null && (this.adDurationBeforeSkippable = Math.floor(this.videoAdDuration / 2))))), i = t?++this.progressSteps : Math.floor(r), s = parseInt(this.videoAdDuration - i, 10);
                            if (s >= 0) {
                                var a = "";
                                t || this.videoAdDuration >= this.skippableAdDuration && i < this.adDurationBeforeSkippable ? (this.skipAdCopy[1] = t ? this.VPaidSkipDuration - i : this.adDurationBeforeSkippable - i, a = this.skipAdCopy) : (this.adCountdownCopy[1] = s, a = this.adCountdownCopy), a[1] < 10 && (a[1] = ["0", a[1]].join("")), this.videoAdCountdown.html(a.join(""))
                            }
                            t && i >= this.VPaidSkipDuration ? (this.showVideoSkipButton(), window.clearInterval(this.adProgressTimer)) : this.videoAdDuration >= this.skippableAdDuration && i >= this.adDurationBeforeSkippable && this.showVideoSkipButton(), t && i < this.VPaidSkipDuration && this.adProgressTimer === null && (this.cacheProgress = s, this.mockEvent = e, this.logger.info("FlashAdController - cacheProgress::start"), this.adProgressTimer = window.setInterval(function() {
                                typeof n.mockEvent.obj == "object" && (n.mockEvent.obj.position = n.progressSteps, n.mockEvent.mockedOnly=!0), n.showVideoAdCountDown && n.mockEvent.obj.position < n.VPaidSkipDuration && n.onAdProgress(n.mockEvent)
                            }, 1100))
                        }
                    }
                }
            },
            onMediaPlay: function(e) {
                this.logger.info("onMediaPlay", e), this.hasVPaid===!0 && (window.clearInterval(this.adProgressTimer), this.adProgressTimer = null), this.removeVideoAdCountdown()
            },
            onVideoLoaded: function(e) {
                this.logger.info("onVideoLoaded", e), this.removeVideoAdCountdown()
            },
            onStreamStart: function(e) {
                this.logger.info("onStreamStart", e), this.removeVideoAdCountdown()
            },
            adRequestTimedout: !1,
            fetch: function(e) {
                this.logger.debug("fetch - Fetching ads from ADX");
                var t = this, n = this.buildADXRequestURL(this.model.callback);
                NYTD.Video.$.ajax({
                    url: n,
                    dataType: "jsonp",
                    timeout: 5e3,
                    success: function(e) {
                        t.success(e)
                    },
                    error: function() {
                        t.adxRequestError("Error. Timeout. No ads returned")
                    }
                })
            },
            fetchVASTTag: function() {
                var e = this.model.videoModule.getCurrentVideo();
                this.setVASTController(this.model.bigAdContainer);
                var t = /[^\d]+/.test(e.referenceId) ? e.id: e.referenceId, n = {
                    pageUrl: "http://video.nytimes.com",
                    videoId: t,
                    videoTitle: e.displayName,
                    playerWidth: this.model.videoModule.getDisplayWidth(),
                    playerHeight: this.model.videoModule.getDisplayHeight(),
                    vastUrl: this.model.videoPlayerAd
                };
                this.vastController.fetch(n), this.logger.info("fetchVASTTag - Fetching VAST tag", n)
            },
            setPageUrl: function() {
                typeof NYTD.env == "undefined" || NYTD.env && NYTD.env !== "production" ? this.model.pageUrl = "http://video.nytimes.com" : this.model.pageUrl = window.location.href.toString()
            },
            success: function(e) {
                if (!e ||!e.status || e.status.length <= 0 ||!e.status[0].videoads || e.status[0].videoads.status === 0) {
                    this.logger.warn("No ads found."), this.adxError("No ads found");
                    return 
                }
                var t = NYTD.Video.Validation.isEmpty;
                if (e&&!t(e.response)&&!t(e.response.videoads)&&!t(e.response.videoads.ads)) {
                    e.response.videoads.ads.ADX_CLIENTSIDE && this.dropADXClientSide(e.response.videoads.ads.ADX_CLIENTSIDE);
                    var n=!1;
                    t(e.response.videoads.ads.VideoPlayerAd) || (n=!0, this.model.videoPlayerAd = e.response.videoads.ads.VideoPlayerAd, this.clientSide = e.response.videoads.ads.ADX_CLIENTSIDE || null, typeof this.model.videoPlayerAd == "string" && /^<!--.*-->/.test(this.model.videoPlayerAd) && (this.model.videoPlayerAd = this.model.videoPlayerAd.replace(/^<!--.*-->/, "")), /^http:\/\//.test(this.model.videoPlayerAd) ? this.fetchVASTTag() : this.showAds({
                        videoPlayerAd: this.model.videoPlayerAd
                    }), this.adxAdDataReceived(e)), t(e.response.videoads.ads.VideoBigAd) || (this.model.bigAd = e.response.videoads.ads.VideoBigAd, this.showAds({
                        videoBigAd: this.model.bigAd
                    })), t(e.response.videoads.ads.VideoLibraryStrip) || this.renderVideoLibraryStripAd(e.response.videoads.ads.VideoLibraryStrip), n || (this.logger.info("No video ads returned. Resume Content."), this.resumeContent())
                } else 
                    this.adxError("No ads found")
            },
            showAds: function(e) {
                if (typeof e == "undefined" || null === e) {
                    this.resumeContent();
                    return 
                }
                e.videoPlayerAd && this.model.adModule.showAd(e.videoPlayerAd), e.videoBigAd && this.renderAd(e.videoBigAd)
            },
            setBCRoadSync: function() {
                var e = this;
                window.bcsyncroadblock = function(t) {
                    e.bcsyncroadblock(t)
                }, this.logger.debug("setBCRoadSync")
            },
            bcsyncroadblock: function(e) {
                if (typeof this.model.bigAdContainer == "undefined" || null === this.model.bigAdContainer) {
                    this.logger.warn("BigAd container not specified...");
                    return 
                }
                this.logger.debug("bcsyncroadblock", e);
                var t = NYTD.Video.$, n = t.parseXML(e), r = n.getElementsByTagName("CompanionAds"), i = r.length, s = 0, o = 0, u = null, a = null, f = null, l = null, c = null, h = "", p = null, d = /^http:\/\//, v = NYTD.Video.Sanitizer, m = "", g = "";
                for (var y = 0; y < i; y++) {
                    g = r[y].getElementsByTagName("Companion");
                    if (g && g.length > 0) {
                        var b = g.length;
                        for (var w = 0; w < b; w++) {
                            var E = g[w];
                            if (!E)
                                continue;
                            p = {}, s = parseInt(E.getAttribute("width"), 10), o = parseInt(E.getAttribute("height"), 10), m = E.getAttribute("creativeType");
                            if (s === this.model.bannerWidth && o === this.model.bannerHeight) {
                                u = t(t(E).find("HTMLResource")).first().text(), a = t(t(E).find("IFrameResource")).first().text(), f = t(t(E).find("CompanionClickThrough")).first().text(), l = t(t(E).find("Tracking")), c = t(t(E).find("StaticResource")).first(), c && (p.src = v.cleanCDATA(t(c).text()), p.creativeType = t(c).attr("creativeType")), p.tracking = l ? l : null, p.iframe = v.cleanCDATA(a), p.href = f, p.HTMLResource = v.cleanCDATA(u), d.test(u)&&!p.iframe ? (this.logger.warn("The HTMLResource element was determined to be a URL. Converting to an IFrameResource.", u), p.iframe = u) : p.HTMLResource = u;
                                break
                            }
                        }
                    }
                }
                null !== p ? this.renderAd(p) : this.logger.error("Big ad was not found. Possibly due to invalid banner dimension.", r)
            },
            renderAd: function(e) {
                if (NYTD.Video.Validation.isEmpty(this.model.bigAdContainer))
                    return this.logger.warn("renderAd", "Big ad container element was not specified. Companion ad will not be displayed"), !1;
                if (NYTD.Video.Validation.isEmpty(e))
                    return this.logger.error("renderAd", "It appears the ad property is empty", e), !1;
                this.logger.debug("renderAd", e), this.model.bigAdContainer.innerHTML = "";
                if (e.src && e.href) {
                    if (!e.creativeType || e.creativeType)
                        this.model.imageRegExp.test(e.creativeType)===!0 ? this.renderImageAd(e) : e.creativeType === "application/x-shockwave-flash" && this.renderSWFAd(e)
                } else 
                    e.iframe ? this.renderIFrameAd(e) : e.HTMLResource ? this.renderHTMLAd(e) : this.renderHTMLAd(e);
                return !0
            },
            renderImageAd: function(e) {
                this.logger.debug("renderImageAd", e);
                var t = document.createElement("img");
                t.setAttribute("src", e.src), t.setAttribute("width", e.width), t.setAttribute("height", e.height);
                var n = document.createElement("a");
                n.setAttribute("href", e.href), n.appendChild(t), this.model.bigAdContainer.appendChild(n), this.renderImageTracker()
            },
            renderImageTracker: function(e) {
                var t = NYTD.Video.$, n = e.tracking, r = n.length;
                for (var i = 0; i < r; i++) {
                    var s = n[i];
                    if (typeof s == "undefined" || t(s).attr("event") !== "creativeView")
                        continue;
                    var o = NYTD.Video.Sanitizer.cleanCDATA(t(s).text()), u = document.createElement("img");
                    u.setAttribute("src", o), u.setAttribute("width", "1px"), u.setAttribute("height", "1px"), u.style.visibility = "hidden", documentHead.append(u), NYTD.Video.Logger.info("Dropping creativeView beacon", o)
                }
            },
            renderClickDiv: function(e) {
                var t = NYTD.Video.$, n = document.createElement("div");
                this.model.bigAdContainer.appendChild(n), e.href && t(n).addClass("overlay").bind("mouseenter", function(e) {
                    t(this).css({
                        cursor: "pointer"
                    }).css({
                        cursor: "hand"
                    })
                }).bind("click", function(t) {
                    window.location.href = e.href
                })
            },
            renderSWFAd: function(e) {
                var t = [{
                    src: NYTD.Video.Libs.SWFObject,
                    type: "jQuery.flash"
                }
                ];
                NYTD.Video.Utils.loadDependencies(t, function(t) {
                    swfobject.embedSWF(e.src, NYTD.Video.$(this.model.bigAdContainer).attr("id"), "300", "250", "9.0.0"), this.logger.info("Dependencies loaded", t)
                }, this)
            },
            renderIFrameAd: function(e) {
                this.logger.debug("renderIFrameAd", e);
                var t = NYTD.Video.$(document.createElement("iframe"));
                t.attr("width", this.model.iframeWidth).attr("height", this.model.iframeHeight).attr("frameBorder", this.model.iframeBorder).attr("scrolling", this.model.iframeScrolling).attr("src", this.model.iframeSrc).attr("marginWidth", this.model.iframeMarginWidth).attr("marginHeight", this.model.iframeMarginHeight).attr("noresize", this.model.iframeNoResize), NYTD.Video.$(this.model.bigAdContainer).append(t), t.attr("src", e.iframe), this.renderClickDiv(e)
            },
            renderHTMLAd: function(e) {
                this.logger.debug("renderHTMLAd", e), e.HTMLResource ? this.model.bigAdContainer.innerHTML = e.HTMLResource : this.model.bigAdContainer.innerHTML = e
            },
            adxError: function(e) {
                this.logger.error("adxError", e), this.resumeContent()
            },
            resumeContent: function() {
                this.logger.debug("resumeContent", this.model.adModule), this.model.adModule.resumeAfterExternalAd()
            },
            kill: function() {
                NYTD.Video.Validation.isEmpty(window[this.model.callback]) || (window[this.model.callback] = null), this.unregisterListeners(), this.removeADXTrackingContainer(), this.removeBigAd()
            }
        }), this.FlashAdController = function(e) {
            var t = new NYTD.Video.Ad.Controller.FlashAdPrivateController(e)
        }
    }.call(NYTD.Video.Ad.Controller), function() {
        "use strict";
        this.FWFlashAdController = this.AbstractAdController.extend({
            initialize: function(e, t) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Ad.Controller.FWFlashAdController"), this.player = e, this.props = t, this.model = new NYTD.Video.Ad.Model.AdModel, this.model.init(), this.freewheelCallback(), this.setup({
                    player: e,
                    playerType: this.player.defaultProps.playerType,
                    adCountdown: this.player.defaultProps.adCountdown
                })
            },
            freewheelCallback: function() {
                var e = this.props, t = this;
                window.fw_config = function() {
                    var n = {
                        amLocation: e.amLocation,
                        fw_server: e.fw_server_flash,
                        networkId: e.networkId,
                        videoAssetNetworkId: e.videoAssetNetworkId,
                        siteSectionNetworkId: e.siteSectionNetworkId,
                        cb_profile: e.cb_profile_flash,
                        siteSection: e.siteSection || t.getSiteSection()
                    };
                    return n
                }
            },
            getAdDuration: function() {
                return this.player.videoModule.getVideoDuration() || 0
            },
            registerListeners: function() {
                var e = this.player.getSubscription();
                e.subscribe(NYTD.Video.VideoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.subscribe(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.subscribe(NYTD.Video.VideoEvents.AD_START, NYTD.Video.Utils.bind(this.onAdStart, this)), e.subscribe(NYTD.Video.VideoEvents.AD_COMPLETE, NYTD.Video.Utils.bind(this.onAdComplete, this)), e.subscribe(NYTD.Video.VideoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onVideoStreamStart, this)), e.subscribe(NYTD.Video.VideoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this))
            },
            unregisterListeners: function() {
                var e = this.player.getSubscription();
                e.cancel(NYTD.Video.VideoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.cancel(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.cancel(NYTD.Video.VideoEvents.AD_START, NYTD.Video.Utils.bind(this.onAdStart, this)), e.cancel(NYTD.Video.VideoEvents.AD_COMPLETE, NYTD.Video.Utils.bind(this.onAdComplete, this)), e.cancel(NYTD.Video.VideoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onVideoStreamStart, this)), e.cancel(NYTD.Video.VideoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this))
            },
            onTemplateReady: function(e) {
                this.logger.debug("onTemplateReady", e);
                try {
                    this.model.adModule = e.player.getAdModule(), this.model.contentModule = e.player.getContentModule(), this.model.videoModule = e.player.getVideoModule()
                } catch (t) {
                    var n = t;
                    this.logger.error("onTemplateLoaded", n)
                }
            },
            onDestroyed: function(e) {
                this.kill()
            },
            onAdProgress: function(e) {
                var t, n, r, i;
                if (this.showVideoAdCountDown) {
                    this.isVideoAdCountdownVisible || (NYTD.Video.Validation.isEmpty(this.player.adModule) || (this.videoAdDuration = Math.floor(this.getAdDuration())), this.videoAdCountdownHTML === null && this.buildVideoAdNotice(this.videoAdDuration), this.player && this.player.defaultProps && this.player.defaultProps.adDurationBeforeSkippable === null && (this.adDurationBeforeSkippable = Math.floor(this.videoAdDuration / 2)), this.addVideoAdCountdown());
                    if (this.videoAdCountdown && e && e.obj) {
                        t = Math.abs(e.obj.position);
                        if (t >= 0) {
                            this.player && (NYTD.Video.Validation.isEmpty(this.player.adModule) || (n = Math.floor(this.getAdDuration()), n !== this.videoAdDuration && (this.videoAdDuration = n, this.player.defaultProps.adDurationBeforeSkippable === null && (this.adDurationBeforeSkippable = Math.floor(this.videoAdDuration / 2)))));
                            if (this.videoAdDuration !== 0) {
                                r = Math.floor(t), i = parseInt(this.videoAdDuration - r, 10);
                                if (i >= 0) {
                                    var s = "";
                                    this.videoAdDuration >= this.skippableAdDuration && r < this.adDurationBeforeSkippable ? (this.skipAdCopy[1] = this.adDurationBeforeSkippable - r, s = this.skipAdCopy) : (this.adCountdownCopy[1] = i, s = this.adCountdownCopy), s[1] < 10 && (s[1] = ["0", s[1]].join("")), this.videoAdCountdown.html(s.join(""))
                                }
                                this.videoAdDuration >= this.skippableAdDuration && r >= this.adDurationBeforeSkippable && this.showVideoSkipButton()
                            }
                        }
                    }
                }
            },
            onAdStart: function(e) {
                this.logger.info("Freewheel::onAdStart", e);
                var t = this;
                this.timeoutID = setTimeout(function() {
                    t.logger.info("Freewheel::Set sponsor message", e);
                    var n;
                    t && t.player && t.player.adModule && (n = t.player.adModule.getCurrentAdProperties(), n && typeof n == "object" && n.cuePointInsertion === "Mid-roll" && (t.logger.info("Freewheel::Mid-roll detected. Turn off ad control", e), t.player.adModule.allowThirdPartyControl(!1)))
                }, 500)
            },
            onAdComplete: function(e) {
                this.logger.info("Freewheel::onAdComplete", e), window.clearTimeout(this.timeoutID), this.removeVideoAdCountdown()
            },
            onVideoStreamStart: function(e) {
                this.logger.info("Freewheel::onVideoStreamStart", e);
                var t = this;
                setTimeout(function() {
                    t.removeVideoAdCountdown()
                }, 100)
            },
            stopAd: function() {
                this.player.adModule.stopAd()
            },
            kill: function() {
                this.unregisterListeners()
            }
        })
    }.call(NYTD.Video.Ad.Controller), function() {
        "use strict";
        this.HTML5AdController = this.AbstractAdController.extend({
            adsLoader: null,
            el: null,
            elParent: null,
            adsManager: null,
            adsLoaded: !1,
            adDisplayContainer: null,
            currentAd: null,
            adStarted: !1,
            reloadedAd: !1,
            adCheckTimeout: null,
            initialize: function(e) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Ad.Controller.HTML5AdController"), this.videoEvents = NYTD.Video.VideoEvents, this.setup(e), this.logger.debug("Ad Controller, initialization complete")
            },
            registerListeners: function() {
                this.logger.debug("registerListeners");
                var e = this.model.player.getSubscription();
                e.subscribe(NYTD.Video.VideoEvents.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), e.subscribe(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.subscribe(NYTD.Video.VideoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.subscribe(NYTD.Video.VideoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this))
            },
            unregisterListeners: function() {
                this.logger.debug("unregisterListeners");
                var e = this.model.player.getSubscription();
                e.cancel(NYTD.Video.VideoEvents.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), e.cancel(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.cancel(NYTD.Video.VideoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.cancel(NYTD.Video.VideoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this))
            },
            onTemplateReady: function(e) {
                this.logger.debug("HTML5::onTemplateReady", e);
                try {
                    this.model.adModule = e.player.getAdModule(), this.model.contentModule = e.player.getContentModule(), this.model.videoModule = e.player.getVideoModule()
                } catch (t) {
                    var n = t;
                    this.logger.error("HTML5::onTemplateReady Error", n)
                }
                this.model.adModule.enableExternalAds(!0)
            },
            onExternalAd: function(e) {
                this.fetch()
            },
            setCallback: function() {
                NYTD.Video.Validation.isEmpty(this.model.callback) && (this.model.callback = NYTD.Video.Utils.generateCallbackName("adx_video_success"))
            },
            onStreamStart: function(e) {
                this.logger.info("HTML5::onStreamStart", e), this.removeHTML5VideoAdCountdown()
            },
            onAdsLoadError: function(e) {
                this.logger.info("HTML5::onAdsLoadError", e);
                var t = "";
                if (e.hasOwnProperty("message") && e.hasOwnProperty("data")) {
                    this.logger.error("Ad Error Msg. ", e.message);
                    var n = e.data;
                    if (n) {
                        var r = null;
                        typeof n.getError == "function" && (r = n.getError(), typeof r.getMessage == "function" && this.logger.error("Ad Error Msg. ", r.getMessage()), typeof r.getType == "function" && this.logger.error("Ad Error Type. ", r.getType()), typeof r.getErrorCode == "function" && (this.logger.error("Ad Error Code. ", r.getErrorCode()), t = r.getErrorCode()), typeof r.getInnerError == "function" && this.logger.error("Ad Inner Error. ", r.getInnerError()))
                    }
                }
                t !== 3102 && (this.resumeContent(), this.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.ERROR, e))
            },
            onAdProgress: function(e) {
                if (this.adsManager) {
                    var t = Math.floor(this.adsManager.getRemainingTime());
                    this.model && this.model.player && this.model.player.controlsModule && this.model.player.controlsModule.updateDuration(this.model.player.timeFormat(t))
                }
                var n = this.currentAd.getDuration() - this.adsManager.getRemainingTime();
                if (this.showVideoAdCountDown && n !== 0) {
                    this.isVideoAdCountdownVisible || (this.model.player.object && (this.videoAdDuration = Math.floor(this.currentAd.getDuration())), this.videoAdCountdownHTML === null && this.buildVideoAdNotice(this.videoAdDuration), this.addHTML5VideoAdCountdown());
                    if (this.videoAdCountdown) {
                        var r = Math.floor(this.currentAd.getDuration());
                        r !== this.videoAdDuration && (this.videoAdDuration = r, this.model.player.defaultProps.adDurationBeforeSkippable === null && (this.adDurationBeforeSkippable = Math.floor(this.videoAdDuration / 2)));
                        var i = Math.floor(n);
                        if (i >= 0) {
                            var s = Math.floor(i), o = parseInt(this.videoAdDuration - s, 10);
                            if (o >= 0) {
                                var u = "";
                                this.videoAdDuration >= this.skippableAdDuration && s < this.adDurationBeforeSkippable ? (this.skipAdCopy[1] = this.adDurationBeforeSkippable - s, u = this.skipAdCopy) : (this.adCountdownCopy[1] = o, u = this.adCountdownCopy), u[1] < 10 && (u[1] = ["0", u[1]].join("")), this.videoAdCountdown.html(u.join(""))
                            }
                            this.videoAdDuration >= this.skippableAdDuration && s >= this.adDurationBeforeSkippable && this.showVideoSkipButton()
                        }
                    }
                }
            },
            addHTML5VideoAdCountdown: function() {
                this.logger.info("addHTML5VideoAdCountdown"), this.addVideoAdCountdown();
                var e = this;
                this.videoAdCountdownHTML && (NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isAndroid() ? this.videoAdCountdownHTML.on("touchend", function(t) {
                    e.logger.info("touchend video ad countdown"), e.model.player.controlsModule.fadeInControls()
                }) : (this.videoAdCountdownHTML.on("mouseenter", function(t) {
                    e.logger.info("mouseenter video ad countdown"), e.model.player.controlsModule.fadeInControls()
                }), this.videoAdCountdownHTML.on("mouseleave", function(t) {
                    e.logger.info("mouseleave video ad countdown"), e.model.player.controlsModule.startFadeOutTimer()
                })))
            },
            removeHTML5VideoAdCountdown: function() {
                this.logger.info("removeHTML5VideoAdCountdown"), clearInterval(this.progressTimer), this.removeVideoAdCountdown()
            },
            reloadContentAndPlay: function() {
                var e = navigator.userAgent, t = /MSIE 9.*/.test(e), n = /MSIE 10.*/.test(e);
                this.logger.info("reloadContentAndPlay"), this.adStarted=!1, this.reloadedAd=!1, this.removeHTML5VideoAdCountdown(), this.adsManager && this.adsManager.destroy(), this.adsLoaded=!1;
                if (this.model && this.model.player) {
                    var r = NYTD.Video.$(this.model.player.object);
                    this.model.player.defaultProps.useNativeControls ? this.model.player.object.controls=!0 : this.model.player.controlsModule && (this.model.player.videoModule.mediaIsLive() ? this.model.player.controlsModule.configureForLiveVideo() : this.model.player.controlsModule.configureForVideo()), this.model.player.isAdPlaying=!1, this.model.player.isAdInitializing=!1, r.removeAttr("src"), r.attr("autoplay", "autoplay"), this.model.player.videoModule.mediaIsLive() ? this.model.player.loadLiveVideo() : this.model.player.selectedRendition && this.model.player.selectedRendition.url && r.attr("src", this.model.player.selectedRendition.url), this.model.player.reloadObject(), t || n ? this.model.player.object.play() : this.model.player.autoPlay()
                }
            },
            onAdsManagerLoaded: function(e) {
                this.logger.info("onAdsManagerLoaded", e);
                var t = this, n = document.getElementById(this.model.player.getProps().id);
                this.adsManager = e.getAdsManager(n);
                var r = function(e) {
                    t.logger.info("HTML5::onAdLoaded", e)
                }, i = function(e) {
                    t.logger.info("HTML5::onAdsComplete", e), t.adStarted=!1, t.reloadedAd=!1, t.removeHTML5VideoAdCountdown(), t.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.COMPLETE, {})
                }, s = function(e) {
                    t.logger.info("Ad All Ads Completed", e)
                }, o = function(e) {
                    t.logger.info("Ad Started", e), t.adStarted=!0;
                    var n = e.getAd();
                    n.isLinear() && (t.progressTimer = setInterval(function() {
                        t.onAdProgress()
                    }, 300)), t.model && t.model.player && (t.model.player.isAdPlaying=!0, t.model.player.isAdInitializing=!1), t.model.player.defaultProps.useNativeControls ? t.model.player.object.controls=!1 : t.model.player.controlsModule && t.model.player.controlsModule.configureForAd(), t.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.STARTED, {});
                    if (!NYTD.Video.Validation.isEmpty(t.model.bigAdContainer)) {
                        var r = n.getCompanionAds(300, 250, {
                            resourceType: google.ima.CompanionAdSelectionSettings.ResourceType.STATIC,
                            creativeType: google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE
                        });
                        if (r.length > 0) {
                            var i = r[0], s = i.getContent();
                            t.renderHTMLAd(s)
                        }
                    }
                    t.adCheckTimeout = setTimeout(function() {
                        if (t && t.model && t.model.player && t.model.player.object&&!t.reloadedAd) {
                            var e = t.model.player.object.played;
                            e && e.length === 0 && (t.model.player.clearPoster(), t.model.player.object.load(), t.model.player.object.play(), t.reloadedAd=!0)
                        }
                    }, 1e3)
                }, u = function(e) {
                    t.logger.info("Ad Paused", e), t.model.player.defaultProps.useNativeControls && (t.model.player.object.controls=!0), t.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.PAUSED, {})
                }, a = function(e) {
                    t.logger.info("Ad Clicked", e), t.model.player.defaultProps.useNativeControls && (t.model.player.object.controls=!0)
                }, f = function(e) {
                    t.logger.info("onPauseContentRequested: Content Paused", e), t.model && t.model.player && (t.model.player.isAdPlaying=!0, t.model.player.isAdInitializing=!1, t.model.player.pause()), t.currentAd = e.getAd()
                }, l = function(e) {
                    t.logger.info("onResumeContentRequested: Content Resumed", e), t.reloadContentAndPlay()
                }, c = function(e) {
                    t.logger.info("Ad Error", e);
                    var n = null;
                    typeof e.getError == "function" && (n = e.getError(), typeof n.getMessage == "function" && t.logger.error("Ad Error Msg. ", n.getMessage()), typeof n.getType == "function" && t.logger.error("Ad Error Type. ", n.getType()), typeof n.getErrorCode == "function" && t.logger.error("Ad Error Code. ", n.getErrorCode()), typeof n.getInnerError == "function" && t.logger.error("Ad Inner Error. ", n.getInnerError())), t.reloadContentAndPlay(), t.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.ERROR, e)
                }, h = function(e) {
                    t.logger.info("Ad Load Error", e), t.reloadContentAndPlay(), t.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.ERROR, e)
                }, p = function(e) {
                    t.logger.info("Ad Play Error", e), t.reloadContentAndPlay(), t.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.ERROR, e)
                };
                this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, i, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, s, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, o, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, u, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, a, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, r, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, f, !1), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, l, !1), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, c, !1), this.adsManager.addEventListener(google.ima.AdError.Type.AD_LOAD, h, !1), this.adsManager.addEventListener(google.ima.AdError.Type.AD_PLAY, p, !1), this.adsLoaded=!0, this.model.player.contentInitialized ? (this.logger.info("Content initialized", this.model.player.contentInitialized), this.startAds()) : (this.logger.info("Content NOT initialized. Wait...", this.model.player.contentInitialized), NYTD.Video.Validation.isIOS() && (this.logger.info("IOS Start AutoPlay"), this.model.player.autoPlay()))
            },
            startAds: function() {
                this.logger.info("startAds");
                try {
                    this.model.player.object.pause();
                    var e = document.getElementById(this.model.player.getProps().id);
                    e.controls=!1, this.adsManager.init(this.model.player.defaultProps.width, this.model.player.defaultProps.height, google.ima.ViewMode.NORMAL), this.adsManager.start()
                } catch (t) {
                    var n = t;
                    this.logger.error(n), this.onAdsLoadError({
                        message: "Ad Error Catch",
                        data: n
                    })
                }
            },
            stopAd: function(e) {
                this.logger.info("Stop Ad", e), this.adsManager && this.adsManager.stop()
            },
            resumeAd: function(e) {
                this.logger.info("Resume Ad", e), this.adsManager && this.adsManager.resume()
            },
            pauseAd: function(e) {
                this.logger.info("Pause Ad", e), this.adsManager && this.adsManager.pause()
            },
            setVASTController: function(e) {
                this.logger.debug("setVastController"), NYTD.Video.Validation.isEmpty(this.vastController) && (this.vastController = new NYTD.Video.Ad.Controller.VASTController, this.vastController.getSubscription().subscribe(NYTD.Video.Ad.Controller.VASTController.COMPLETE, NYTD.Video.Utils.bind(this.onVASTComplete, this)))
            },
            onDestroyed: function(e) {
                this.kill()
            },
            adxError: function(e) {
                this.logger.error("adxError", e), this.resumeContent()
            },
            fetch: function(e) {
                this.logger.debug("fetch - Fetching ads from ADX");
                var t = this;
                this.doFetch = function(e) {
                    t.logger.debug("fetch - Fetching ads from ADX"), NYTD.Video.Validation.isEmpty(window[t.model.callback]) && (window[t.model.callback] = function(e) {
                        t.logger.info("Got response from ADX 1", e), t.success(e)
                    });
                    var n = t.buildADXRequestURL(t.model.callback);
                    NYTD.Video.$.ajax({
                        url: n,
                        dataType: "jsonp",
                        timeout: 5e3,
                        success: function(e) {
                            t.logger.info("Got response from ADX 2", e), t.success(e)
                        },
                        error: function() {
                            t.adxRequestError("Error. Timeout. No ads returned")
                        }
                    })
                };
                if (!this.initialized) {
                    this.onGoogleAPILoaded = function() {
                        t.logger.info("onGoogleSDKLoaded loaded"), t.initialized=!0;
                        var e = document.getElementById(t.model.player.getProps().id);
                        t.adDisplayContainer = new google.ima.AdDisplayContainer(this.model.player.html5VideoAdContainer, e, e), t.adDisplayContainer.initialize(), t.adsLoader = new google.ima.AdsLoader(t.adDisplayContainer), t.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                            t.onAdsLoadError({
                                message: "Ads Load Error",
                                data: e
                            })
                        }, !1), t.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(e) {
                            t.onAdsManagerLoaded.call(t, e)
                        }, !1), t.doFetch()
                    };
                    var n = [{
                        src: NYTD.Video.Libs.GoogleJSAPI,
                        type: "google"
                    }
                    ];
                    NYTD.Video.Utils.loadDependencies(n, function(e) {
                        t.logger.info("Dependencies loaded", e), t.onGoogleAPILoaded()
                    }, this)
                } else 
                    this.doFetch()
            },
            success: function(e) {
                this.logger.info("SUCCESS", e);
                var t = NYTD.Video.Validation.isEmpty;
                e&&!t(e.response)&&!t(e.response.videoads)&&!t(e.response.videoads.ads) && e.response.videoads.ads.ADX_CLIENTSIDE && this.dropADXClientSide(e.response.videoads.ads.ADX_CLIENTSIDE);
                if (!e ||!e.status || e.status.length <= 0 ||!e.status[0].videoads || e.status[0].videoads.status === 0) {
                    this.onAdsLoadError({
                        message: "No ads found",
                        data: e
                    });
                    return 
                }
                e && e.response && e.response.videoads && e.response.videoads.ads && (t(e.response.videoads.ads.VideoLibraryStrip) || this.renderVideoLibraryStripAd(e.response.videoads.ads.VideoLibraryStrip)), e && e.response && e.response.videoads && e.response.videoads.ads && e.response.videoads.ads.VideoPlayerAd ? (this.model.videoPlayerAd = e.response.videoads.ads.VideoPlayerAd, typeof this.model.videoPlayerAd == "string" && /^<!--.*-->/.test(this.model.videoPlayerAd) && (this.model.videoPlayerAd = this.model.videoPlayerAd.replace(/^<!--.*-->/, "")), /^http:\/\//.test(this.model.videoPlayerAd) || /^<VAST/.test(this.model.videoPlayerAd) ? this.fetchVASTTag() : this.onAdsLoadError({
                    message: "No ads found",
                    data: e
                }), this.adxAdDataReceived(e)) : this.onAdsLoadError({
                    message: "VideoPlayerAd was not found in response",
                    data: e
                })
            },
            fetchVASTTag: function() {
                if (NYTD.Video.Validation.isEmpty(this.model.videoPlayerAd))
                    this.onAdsLoadError({
                        message: "Vast tag is not set",
                        data: {}
                    });
                else {
                    var e = new google.ima.AdsRequest;
                    /^http:\/\//.test(this.model.videoPlayerAd) ? e.adTagUrl = this.model.videoPlayerAd : /^<VAST/.test(this.model.videoPlayerAd) && (e.adsResponse = this.model.videoPlayerAd, e.adTagUrl = ""), e.linearAdSlotWidth = this.model.player.defaultProps.width, e.linearAdSlotHeight = this.model.player.defaultProps.height, e.nonLinearAdSlotWidth = this.model.player.defaultProps.width, e.nonLinearAdSlotHeight = this.model.player.defaultProps.height, this.logger.info("Request Ad using Google API"), this.adsManager && (this.logger.info("Unload/Destroy previous ad"), this.adsManager.destroy(), this.adsLoaded=!1);
                    try {
                        this.adsLoader.requestAds(e)
                    } catch (t) {
                        this.logger.info("error requesting Ads", t)
                    }
                }
            },
            renderHTMLAd: function(e) {
                this.logger.debug("renderHTMLAd", e), e.HTMLResource&&!NYTD.Video.Validation.isEmpty(this.model.bigAdContainer) ? this.model.bigAdContainer.innerHTML = e.HTMLResource : this.model.bigAdContainer.innerHTML = e
            },
            resumeContent: function() {
                this.logger.debug("resumeContent"), this.model.player.isAdInitializing=!1, this.model.player.isAdPlaying=!1, this.model.player.adModule.resumeAfterExternalAd()
            },
            kill: function() {
                this.logger.warn("onDestroyed"), this.unregisterListeners(), this.removeADXTrackingContainer(), this.removeBigAd()
            }
        }), NYTD.Video.Ad.Controller.HTML5AdController.COMPLETE = "complete", NYTD.Video.Ad.Controller.HTML5AdController.STARTED = "started", NYTD.Video.Ad.Controller.HTML5AdController.PAUSED = "paused", NYTD.Video.Ad.Controller.HTML5AdController.ERROR = "error"
    }.call(NYTD.Video.Ad.Controller), function() {
        "use strict";
        this.FWHTML5AdController = this.AbstractAdController.extend({
            dependenciesLoaded: !1,
            theAdManager: null,
            theContext: null,
            prerollSlots: [],
            midrollSlots: [],
            overlaySlots: [],
            postrollSlots: [],
            adsLoaded: !1,
            postRollSupported: !1,
            currentPlayingSlot: null,
            lastAdDuration: 0,
            initialize: function(e, t) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Ad.Controller.FWHTML5AdController"), this.videoEvents = NYTD.Video.VideoEvents, this.player = e, this.props = t, this.adsLoaded=!1, this.model = new NYTD.Video.Ad.Model.AdModel, this.model.init(), this.model.player = this.player, this.model.props = this.props, this.registerListeners();
                if (NYTD.Video.$.inArray(this.model.props.playerType, this.videoAdCountDownPlayerTypes)!==-1 && this.model.props.adCountdown!==!1 || this.model.props.adCountdown===!0)
                    this.showVideoAdCountDown=!0, this.loadSupportCSS();
                this.logger.debug("FW Ad Controller, initialization complete")
            },
            registerListeners: function() {
                this.logger.debug("registerListeners");
                var e = this.model.player.getSubscription();
                e.subscribe(NYTD.Video.VideoEvents.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), e.subscribe(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.subscribe(NYTD.Video.VideoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.subscribe(NYTD.Video.VideoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this))
            },
            unregisterListeners: function() {
                this.logger.debug("unregisterListeners");
                var e = this.model.player.getSubscription();
                e.cancel(NYTD.Video.VideoEvents.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), e.cancel(NYTD.Video.VideoEvents.DESTROYING, NYTD.Video.Utils.bind(this.onDestroyed, this)), e.cancel(NYTD.Video.VideoEvents.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), e.cancel(NYTD.Video.VideoEvents.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this))
            },
            onTemplateReady: function(e) {
                this.logger.debug("FW-HTML5::onTemplateReady", e);
                try {
                    this.model.adModule = e.player.getAdModule(), this.model.contentModule = e.player.getContentModule(), this.model.videoModule = e.player.getVideoModule()
                } catch (t) {
                    var n = t;
                    this.logger.error("HTML5::onTemplateReady Error", n)
                }
                this.model.adModule.enableExternalAds(!0)
            },
            startAds: function(e) {
                this.logger.debug("FW-HTML5::startAds", e), this.prerollSlots && this.prerollSlots.length ? (this.setCurrentlyPlayingSlot(this.prerollSlots[0]), this.prerollSlots[0].play()) : this.resumeContent()
            },
            setCurrentlyPlayingSlot: function(e) {
                this.currentPlayingSlot = e, this.setLastAdDuration()
            },
            setLastAdDuration: function() {
                this.currentPlayingSlot && (this.lastAdDuration = this.currentPlayingSlot.getTotalDuration())
            },
            onExternalAd: function(e) {
                this.logger.debug("FW-HTML5::onExternalAd", e), this.fetch()
            },
            onDestroyed: function(e) {
                this.logger.debug("FW-HTML5::onDestroyed", e)
            },
            onStreamStart: function(e) {
                this.logger.debug("FW-HTML5::onStreamStart", e)
            },
            fetch: function(e) {
                this.logger.debug("FW-HTML5::fetch - Fetching ads from FREEWHEEL");
                var t = this, n = [{
                    src: NYTD.Video.Libs.FreewheelJSAPI,
                    type: "freewheel"
                }
                ];
                this.dependenciesLoaded ? (this.setupAdContext(), this.loadAdData()) : window.tv ? this.onFreewheelAdManagerLoaded() : NYTD.Video.Utils.loadDependencies(n, function(e) {
                    t.logger.info("Dependencies loaded", e), t.onFreewheelAdManagerLoaded()
                }, this)
            },
            onFreewheelAdManagerLoaded: function() {
                this.logger.info("onFreewheelAdManagerLoaded loaded"), this.dependenciesLoaded=!0, this.tv = window.tv || {}, this.initializeAdManager(), this.loadAdData()
            },
            initializeAdManager: function() {
                this.logger.info("initializeAdManager"), this.theAdManager = new this.tv.freewheel.SDK.AdManager, this.theAdManager.setNetwork(this.props.networkId), this.theAdManager.setServer(this.props.fw_server_js), this.setupAdContext()
            },
            setupAdContext: function() {
                this.logger.info("setupAdContext");
                var e = this.model.player.container.id, t = this.model.player.currentVideo.referenceId, n = this.model.player.currentVideo.length / 1e3, r = this.props.siteSection || this.getSiteSection();
                this.destroyContext(), this.logger.info("create new ad manager context"), this.theContext = this.theAdManager.newContext(), this.theContext.registerVideoDisplayBase(e), this.theContext.setProfile(this.props.cb_profile_js), this.theContext.setVideoAsset(t, n, this.props.networkId), this.theContext.setSiteSection(r, this.props.networkId), this.registerContextListeners(), this.theContext.setParameter(this.tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT, 1e4, this.tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL), this.theContext.setParameter(this.tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT, 1e4, this.tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL), this.theContext.setParameter(this.tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, !1, this.tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL), this.theContext.addTemporalSlot("Preroll_1", this.tv.freewheel.SDK.ADUNIT_PREROLL, 0)
            },
            registerContextListeners: function() {
                this.logger.info("registerContextListeners"), this.theContext && (this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, NYTD.Video.Utils.bind(this.onRequestComplete, this)), this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_SLOT_STARTED, NYTD.Video.Utils.bind(this.onSlotStarted, this)), this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_SLOT_ENDED, NYTD.Video.Utils.bind(this.onSlotEnded, this)), this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_AD_IMPRESSION, NYTD.Video.Utils.bind(this.onAdImpression, this)), this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_AD_IMPRESSION_END, NYTD.Video.Utils.bind(this.onAdImpressionEnd, this)), this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_ERROR, NYTD.Video.Utils.bind(this.onAdError, this)), this.theContext.addEventListener(this.tv.freewheel.SDK.EVENT_RESELLER_NO_AD, NYTD.Video.Utils.bind(this.onResellerNoAd, this)))
            },
            unregisterContextListeners: function() {
                this.logger.info("unregisterContextListeners"), this.theContext && (this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, NYTD.Video.Utils.bind(this.onRequestComplete, this)), this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_SLOT_STARTED, NYTD.Video.Utils.bind(this.onSlotStarted, this)), this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_SLOT_ENDED, NYTD.Video.Utils.bind(this.onSlotEnded, this)), this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_AD_IMPRESSION, NYTD.Video.Utils.bind(this.onAdImpression, this)), this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_AD_IMPRESSION_END, NYTD.Video.Utils.bind(this.onAdImpressionEnd, this)), this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_ERROR, NYTD.Video.Utils.bind(this.onAdError, this)), this.theContext.removeEventListener(this.tv.freewheel.SDK.EVENT_RESELLER_NO_AD, NYTD.Video.Utils.bind(this.onResellerNoAd, this)))
            },
            loadAdData: function() {
                this.logger.info("loadAdData"), this.adsLoaded=!1, this.theContext.submitRequest(2)
            },
            onAdStarted: function() {
                this.logger.info("onAdStarted");
                if (this.model && this.model.player) {
                    this.model.player.isAdPlaying=!0, this.model.player.isAdInitializing=!1, this.model.player.isAdSkipped=!1, this.model.player.defaultProps.useNativeControls ? this.model.player.object.controls=!1 : this.model.player.controlsModule && this.model.player.controlsModule.configureForAd();
                    var e = this.model.player.getSubscription();
                    e.subscribe(NYTD.Video.VideoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)), e.notify(NYTD.Video.Ad.Controller.HTML5AdController.STARTED, {}), NYTD.Video.$(this.model.player.object).bind("pause.ad", NYTD.Video.Utils.bind(this.onAdPause, this))
                }
            },
            onRequestComplete: function(e) {
                this.logger.info("onRequestComplete"), this.adsLoaded=!0, this.prerollSlots = [], this.midrollSlots = [], this.overlaySlots = [], this.postrollSlots = [];
                if (e.success) {
                    var t = this.theContext.getTemporalSlots();
                    for (var n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        switch (i.getTimePositionClass()) {
                        case this.tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
                            this.prerollSlots.push(i);
                            break;
                        case this.tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
                            this.midrollSlots.push(i);
                            break;
                        case this.tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:
                            this.overlaySlots.push(i);
                            break;
                        case this.tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
                            this.postrollSlots.push(i)
                        }
                    }
                }
                this.startAds()
            },
            onSlotStarted: function(e) {
                this.logger.info("onSlotStarted");
                var t = e.slot.getTimePositionClass(), n = e.slot.getTotalDuration();
                this.logger.info("slotTimePositionClass", t), this.logger.info("slotTotalDuration", n);
                if (n > 0)
                    switch (t) {
                    case this.tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
                        this.onAdStarted();
                        break;
                    case this.tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
                        this.postRollSupported && this.onAdStarted()
                    }
            },
            onSlotEnded: function(e) {
                this.logger.info("onSlotEnded");
                var t = e.slot.getTimePositionClass(), n = e.slot.getTotalDuration();
                this.logger.info("slotTimePositionClass", t), this.logger.info("slotTotalDuration", n);
                switch (t) {
                case this.tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
                    this.prerollSlots.length && (this.prerollSlots.shift(), this.prerollSlots.length ? (this.logger.info("we have slots play them"), this.prerollSlots[0].play(), this.setCurrentlyPlayingSlot(this.prerollSlots[0])) : (this.logger.info("no slots - resume content"), this.resumeContent(n)));
                    break;
                case this.tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
                    this.postRollSupported && this.postrollSlots.length && (this.postrollSlots.shift(), this.postrollSlots.length ? (this.postrollSlots[0].play(), this.setCurrentlyPlayingSlot(this.postrollSlots[0])) : (this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_COMPLETED), this.resetAfterPostRoll()));
                    break;
                case this.tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
                case this.tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:
                case this.tv.freewheel.SDK.TIME_POSITION_CLASS_DISPLAY:
                    this.logger.info(t + " - Slot Ended")
                }
            },
            onAdError: function(e) {
                this.logger.info("onAdError", e), this.resumeContent(), this.model.player.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.ERROR, e)
            },
            onResellerNoAd: function(e) {
                this.logger.info("onResellerNoAd", e), this.resumeContent()
            },
            onAdImpression: function(e) {
                this.logger.info("onAdImpression", e)
            },
            onAdImpressionEnd: function(e) {
                this.logger.info("onAdImpressionEnd", e)
            },
            onVideoContentComplete: function(e) {
                this.logger.info("onVideoContentComplete");
                var t = this.model.player.getSubscription();
                this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_STOPPED), this.postRollSupported ? this.postrollSlots && this.postrollSlots.length ? (t.cancel(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoContentComplete, this)), this.postrollSlots[0].play(), this.setCurrentlyPlayingSlot(this.postrollSlots[0])) : this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_COMPLETED) : (t.cancel(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoContentComplete, this)), t.cancel(NYTD.Video.VideoEvents.VIDEO_PAUSED, NYTD.Video.Utils.bind(this.onVideoContentPaused, this)), t.cancel(NYTD.Video.VideoEvents.PLAY, NYTD.Video.Utils.bind(this.onVideoContentPlay, this)), this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_COMPLETED))
            },
            onAdProgress: function(e) {
                var t = 15;
                if (this.model && this.model.player && this.model.player.object) {
                    var n = this.model.player.object.duration, r = this.model.player.object.currentTime;
                    this.model.player.controlsModule && (t = n - r, this.model.player.controlsModule.updateDuration(this.model.player.timeFormat(t)));
                    if (this.showVideoAdCountDown && r !== 0) {
                        this.isVideoAdCountdownVisible || (this.videoAdDuration = Math.floor(n), this.videoAdCountdownHTML === null && this.buildVideoAdNotice(this.videoAdDuration), this.addHTML5VideoAdCountdown(), this.model.player.defaultProps.adDurationBeforeSkippable === null && (this.adDurationBeforeSkippable = Math.floor(this.videoAdDuration / 2)));
                        if (this.videoAdCountdown) {
                            var i = Math.floor(n);
                            i !== this.videoAdDuration && (this.videoAdDuration = i, this.model.player.defaultProps.adDurationBeforeSkippable === null && (this.adDurationBeforeSkippable = Math.floor(this.videoAdDuration / 2)));
                            var s = Math.floor(r);
                            if (s >= 0) {
                                var o = Math.floor(s), u = parseInt(this.videoAdDuration - o, 10);
                                if (u >= 0) {
                                    var a = "";
                                    this.videoAdDuration >= this.skippableAdDuration && o < this.adDurationBeforeSkippable ? (this.skipAdCopy[1] = this.adDurationBeforeSkippable - o, a = this.skipAdCopy) : (this.adCountdownCopy[1] = u, a = this.adCountdownCopy), a[1] < 10 && (a[1] = ["0", a[1]].join("")), this.videoAdCountdown.html(a.join(""))
                                }
                                this.videoAdDuration >= this.skippableAdDuration && o >= this.adDurationBeforeSkippable && this.showVideoSkipButton()
                            }
                        }
                    }
                }
            },
            addHTML5VideoAdCountdown: function() {
                this.logger.info("addHTML5VideoAdCountdown"), this.addVideoAdCountdown();
                var e = this;
                this.videoAdCountdownHTML && (NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isAndroid() ? this.videoAdCountdownHTML.on("touchend", function(t) {
                    e.logger.info("touchend video ad countdown"), e.model.player.controlsModule.fadeInControls()
                }) : (this.videoAdCountdownHTML.on("mouseenter", function(t) {
                    e.logger.info("mouseenter video ad countdown"), e.model.player.controlsModule.fadeInControls()
                }), this.videoAdCountdownHTML.on("mouseleave", function(t) {
                    e.logger.info("mouseleave video ad countdown"), e.model.player.controlsModule.startFadeOutTimer()
                })))
            },
            onAdPause: function(e) {
                this.logger.info("onAdPause", e), this.model && this.model.player && this.model.player.object&&!this.model.player.object.ended && this.model.player.getSubscription().notify(NYTD.Video.Ad.Controller.HTML5AdController.PAUSED, {})
            },
            onVideoContentPaused: function(e) {
                this.logger.info("onVideoContentPaused", e), this.theContext && this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_PAUSED)
            },
            onVideoContentPlay: function(e) {
                this.logger.info("onVideoContentPlay", e), this.theContext && this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_PLAYING)
            },
            stopAd: function() {
                this.logger.info("stopAd");
                var e = this.model.player.getSubscription();
                this.model.player.isAdSkipped=!0, e.cancel(NYTD.Video.VideoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)), NYTD.Video.$(this.model.player.object).unbind("pause.ad"), e.cancel(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoContentComplete, this)), e.cancel(NYTD.Video.VideoEvents.VIDEO_PAUSED, NYTD.Video.Utils.bind(this.onVideoContentPaused, this)), e.cancel(NYTD.Video.VideoEvents.PLAY, NYTD.Video.Utils.bind(this.onVideoContentPlay, this)), this.currentPlayingSlot && (this.currentPlayingSlot.stop(), this.setCurrentlyPlayingSlot(null)), this.theContext && this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_PLAYING), this.removeVideoAdCountdown()
            },
            destroyContext: function() {
                this.logger.info("destroyContext"), this.theContext && (this.unregisterContextListeners(), this.theContext.dispose())
            },
            resumeContent: function(e) {
                this.logger.info("resumeContent");
                var t = this.model.player.getSubscription();
                this.model.player.isAdInitializing=!1, this.model.player.isAdPlaying=!1, this.model.player.object.play(), this.setCurrentlyPlayingSlot(null), this.theContext && this.theContext.setVideoState(this.tv.freewheel.SDK.VIDEO_STATE_PLAYING), t.cancel(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoContentComplete, this)), t.subscribe(NYTD.Video.VideoEvents.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoContentComplete, this)), t.subscribe(NYTD.Video.VideoEvents.VIDEO_PAUSED, NYTD.Video.Utils.bind(this.onVideoContentPaused, this)), t.subscribe(NYTD.Video.VideoEvents.PLAY, NYTD.Video.Utils.bind(this.onVideoContentPlay, this)), t.cancel(NYTD.Video.VideoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)), NYTD.Video.$(this.model.player.object).unbind("pause.ad"), this.model.player.isAdSkipped ? (t.notify(NYTD.Video.Ad.Controller.HTML5AdController.SKIP_COMPLETE, {}), this.model.player.isAdSkipped=!1) : e && e > 0 && t.notify(NYTD.Video.Ad.Controller.HTML5AdController.COMPLETE, {}), this.removeVideoAdCountdown()
            },
            resetAfterPostRoll: function() {
                this.logger.info("resetAfterPostRoll");
                var e = this.model.player.getSubscription();
                this.model.player.isAdInitializing=!1, this.model.player.isAdPlaying=!1, this.model.player.defaultProps.useNativeControls ? this.model.player.object.controls=!0 : this.model.player.controlsModule && this.model.player.controlsModule.configureForVideo(), e.cancel(NYTD.Video.VideoEvents.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)), e.cancel(NYTD.Video.VideoEvents.VIDEO_PAUSED, NYTD.Video.Utils.bind(this.onVideoContentPaused, this)), e.cancel(NYTD.Video.VideoEvents.PLAY, NYTD.Video.Utils.bind(this.onVideoContentPlay, this)), NYTD.Video.$(this.model.player.object).unbind("pause.ad"), this.removeVideoAdCountdown()
            }
        }), NYTD.Video.Ad.Controller.HTML5AdController.SKIP_COMPLETE = "skip_complete", NYTD.Video.Ad.Controller.HTML5AdController.COMPLETE = "complete", NYTD.Video.Ad.Controller.HTML5AdController.STARTED = "started", NYTD.Video.Ad.Controller.HTML5AdController.PAUSED = "paused", NYTD.Video.Ad.Controller.HTML5AdController.ERROR = "error"
    }.call(NYTD.Video.Ad.Controller), function() {
        "use strict";
        return this.VASTPrivateController = Backbone.Model.extend({
            videoEvents: null,
            validation: null,
            model: null,
            subscription: null,
            sanitizer: NYTD.Video.Sanitizer,
            documentHead: NYTD.Video.DOCUMENT_HEAD,
            logger: null,
            player: null,
            initialize: function(e) {
                this.validation = NYTD.Video.Validation, this.videoEvents = NYTD.Video.VideoEvents;
                if (this.validation.isEmpty(e) || this.validation.isEmpty(e.player))
                    throw new Error("Missing one or more required parameters");
                this.subscription = new NYTD.Subscription, this.logger = NYTD.Video.Logger.get("NYTD.Video.VASTController"), this.player = e.player, this.setVASTModel(), this.logger.info("settingVASTCallback"), this.model.callback = NYTD.Video.Utils.generateCallbackName([this.player.getObjectId(), "_vast"].join(""));
                var t = this;
                window[this.model.callback] = function(e) {
                    t.logger.info("Received VAST response", e), t.subscription.notify(NYTD.Video.Ad.Controller.VASTController.COMPLETE, {
                        vast: e
                    })
                }, this.logger.debug("init - Initializing complete")
            },
            resetObjectState: function() {
                this.model = null, this.subscription = null, this.sanitizer = NYTD.Video.Sanitizer, this.documentHead = NYTD.Video.DOCUMENT_HEAD, this.logger = null, this.player = null
            },
            setVASTModel: function() {
                this.model = new NYTD.Video.Ad.Model.VASTModel, this.model.init()
            },
            fetch: function(e) {
                if (this.validation.isEmpty(e) || this.validation.isEmpty(e.videoId) || this.validation.isEmpty(e.videoTitle) || this.validation.isEmpty(e.vastUrl) || this.validation.isEmpty(e.playerWidth) || this.validation.isEmpty(e.playerHeight)) {
                    var t = new Error("Missing one or more required parameters");
                    throw this.logger.error("fetch - There was an error", t), t
                }
                e.pageUrl && (this.model.pageUrl = e.pageUrl), this.model.videoTitle = e.videoTitle, this.model.videoId = e.videoId, this.model.vastURL = e.vastUrl, this.model.playerWidth = e.playerWidth, this.model.playerHeight = e.playerHeight;
                var n = this.buildProxyRequestURL();
                this.dropScriptTag(n)
            },
            buildProxyRequestURL: function() {
                var e = [this.model.proxyBaseURL, "&cu=", encodeURIComponent(this.model.pageUrl), "&pw=", this.model.playerWidth, "&ph=", this.model.playerHeight, "&vu=", encodeURIComponent(this.model.vastURL), "&vt=", this.model.videoTitle, "&vi=", this.model.videoId, "&callback=", this.model.callback].join("");
                return this.logger.debug(["buildProxyRequestURL - ", e].join("")), e
            },
            dropScriptTag: function(e) {
                this.logger.debug("dropScriptTag - ", e);
                var t = document.createElement("script");
                t.setAttribute("src", e), this.documentHead.appendChild(t)
            },
            getSubscription: function() {
                return this.subscription
            },
            kill: function() {
                window[this.model.callback] && (window[this.model.callback] = null), this.resetObjectState()
            }
        }), this.VASTController = function(e) {
            this.COMPLETE = "vast:controller:complete";
            var t = new NYTD.Video.Ad.Controller.VASTPrivateController(e);
            return {
                fetch: function(e) {
                    t.fetch(e)
                },
                getSubscription: function() {
                    return t.getSubscription()
                },
                kill: function() {
                    t.kill()
                }
            }
        }, NYTD.Video.Ad.Controller.VASTController.COMPLETE = "vast:controller:complete", this
    }.call(NYTD.Video.Ad.Controller), NYTD.Video.VideoEvents = {
        INIT: "init",
        RENDERED: "rendered",
        REMOVED: "removed",
        DESTROY: "destroy",
        DESTROYING: "destroying",
        DESTROYED: "destroyed",
        STOP_OTHER_PLAYERS: "stop_other_players",
        DISABLE_OTHER_PLAYERS: "disable_other_players",
        ENABLE_OTHER_PLAYERS: "enable_other_players",
        PLAY: "play",
        PAUSED: "paused",
        RESUMED: "resumed",
        TEMPLATE_LOADED: "template_loaded",
        TEMPLATE_READY: "template_ready",
        TEMPLATE_ERROR: "template_error",
        CONTENT_LOAD: "content_loaded",
        CUE: "cue",
        VIDEO_LOAD: "video_load",
        VIDEO_START: "video_start",
        VIDEO_STOP: "video_stop",
        VIDEO_PAUSED: "video_paused",
        STREAM_START: "stream_start",
        VIDEO_COMPLETE: "video_complete",
        FULLSCREEN: "fullscreen",
        EXIT_FULLSCREEN: "exit_fullscreen",
        PLAYLIST_LOAD: "playlist_load",
        MEDIA_COLLECTION_LOAD: "media_collection_load",
        MEDIA_LOAD: "media_load",
        MEDIA_BEGIN: "media_begin",
        MEDIA_CHANGE: "media_change",
        MEDIA_COMPLETE: "media_complete",
        MEDIA_PROGRESS: "media_progress",
        MEDIA_ERROR: "media_error",
        MEDIA_STOP: "media_stop",
        MEDIA_SEEK: "media_seek",
        MUTED: "media_muted",
        UNMUTED: "media_unmuted",
        MUTE_CHANGE: "media_mute_change",
        BLOG_POST_CLICK: "blog_post_click",
        COPY_CODE: "copy_code",
        COPY_LINK: "copy_link",
        ICON_MENU_CLOSE: "icon_menu_close",
        ICON_MENU_OPEN: "icon_menu_open",
        MENU_PAGE_CLOSE: "menu_page_close",
        MENU_PAGE_OPEN: "menu_page_open",
        OVERLAY_MENU_CLOSE: "overlay_menu_close",
        OVERLAY_MENU_OPEN: "overlay_menu_open",
        OVERLAY_MENU_PLAY_CLICK: "overlay_menu_play_click",
        SEND_EMAIL_CLICK: "send_email_click",
        VIDEO_REQUEST: "video_request",
        AD_COMPLETE: "ad_complete",
        AD_PAUSE: "ad_pause",
        AD_START: "ad_start",
        AD_RESUME: "ad_resume",
        AD_PROGRESS: "ad_progress",
        AD_CLICK: "ad_click",
        AD_POSTROLLS_COMPLETE: "ad_postrolls_complete",
        AD_RECEIVED: "ad_received",
        AD_RULES_READY: "ad_rules_ready",
        ADX_ERROR: "adx_error",
        EXTERNAL_AD: "external_ad",
        AD_SKIPPED: "ad_skipped",
        PLAY_CLICKED: "play_clicked",
        DFXP_LOAD_ERROR: "dfxp_load_error",
        DFXP_LOAD_SUCCESS: "dfxp_load_success",
        SEARCH_ERROR: "search_error",
        SEARCH_RESULT: "search_result",
        ADX_MODULE_READY: "adx_module_ready",
        ADX_AD_DATA_RECEIVED: "ADX_AD_DATA_RECEIVED",
        FW_AD_MANAGER_LOADED: "FWAdManagerLoaded",
        POLL_CHECK_COMPLETE: "poll_check_complete",
        POSTER_LOADED: "poster_loaded",
        FREEWHEEL_MODULE_READY: "freewheel_module_ready"
    }, NYTD.Video.Factory.VideoEvents = NYTD.Video.VideoEvents, function() {
        this.AbstractMetrics = Backbone.Model.extend({
            player: null,
            info: null,
            currentVideo: null,
            tracked: !1,
            autoTracked: !1,
            body: null,
            logger: null,
            videoFramework: NYTD.Video,
            videoFrameworkEvents: NYTD.Video.VideoEvents,
            videoFrameworkValidation: NYTD.Video.Validation,
            videoFrameworkUtils: NYTD.Video.Utils,
            isAd: !1,
            initialize: function(e) {},
            resetObjectState: function() {
                this.player = null, this.info = null, this.currentVideo = null, this.tracked=!1, this.autoTracked=!1, this.trackedUptProgress=!1, this.uptContainer = null, this.body = null
            },
            registerListeners: function() {
                this.logger.debug("registerListeners");
                var e = this.player.getSubscription();
                e.subscribe(this.videoFrameworkEvents.TEMPLATE_READY, this.videoFrameworkUtils.bind(this.onTemplateReady, this)), e.subscribe(this.videoFrameworkEvents.DESTROY, this.videoFrameworkUtils.bind(this.onDestroy, this)), typeof this.onStreamStart == "function" && e.subscribe(this.videoFrameworkEvents.STREAM_START, this.videoFrameworkUtils.bind(this.onStreamStart, this)), typeof this.onVideoStart == "function" && e.subscribe(this.videoFrameworkEvents.VIDEO_START, this.videoFrameworkUtils.bind(this.onVideoStart, this)), typeof this.onVideoComplete == "function" && e.subscribe(this.videoFrameworkEvents.VIDEO_COMPLETE, this.videoFrameworkUtils.bind(this.onVideoComplete, this)), typeof this.onVideoProgress == "function" && e.subscribe(this.videoFrameworkEvents.MEDIA_PROGRESS, this.videoFrameworkUtils.bind(this.onVideoProgress, this)), typeof this.onAdStart == "function" && e.subscribe(this.videoFrameworkEvents.AD_START, this.videoFrameworkUtils.bind(this.onAdStart, this)), typeof this.onAdComplete == "function" && e.subscribe(this.videoFrameworkEvents.AD_COMPLETE, this.videoFrameworkUtils.bind(this.onAdComplete, this)), typeof this.onEnterFullScreen == "function" && e.subscribe(this.videoFrameworkEvents.FULLSCREEN, this.videoFrameworkUtils.bind(this.onEnterFullScreen, this)), typeof this.onExitFullScreen == "function" && e.subscribe(this.videoFrameworkEvents.EXIT_FULLSCREEN, this.videoFrameworkUtils.bind(this.onExitFullScreen, this)), typeof this.onVideoLoad == "function" && e.subscribe(this.videoFrameworkEvents.VIDEO_LOAD, this.videoFrameworkUtils.bind(this.onVideoLoad, this)), typeof this.onContentLoad == "function" && e.subscribe(this.videoFrameworkEvents.CONTENT_LOAD, this.videoFrameworkUtils.bind(this.onContentLoad, this)), typeof this.onMuted == "function" && e.subscribe(this.videoFrameworkEvents.MUTED, this.videoFrameworkUtils.bind(this.onMuted, this)), typeof this.onUnMuted == "function" && e.subscribe(this.videoFrameworkEvents.UNMUTED, this.videoFrameworkUtils.bind(this.onUnMuted, this)), typeof this.onMediaError == "function" && e.subscribe(this.videoFrameworkEvents.MEDIA_ERROR, this.videoFrameworkUtils.bind(this.onMediaError, this)), typeof this.onAdSkipped == "function" && e.subscribe(this.videoFrameworkEvents.AD_SKIPPED, this.videoFrameworkUtils.bind(this.onAdSkipped, this)), typeof this.onAdPause == "function" && e.subscribe(this.videoFrameworkEvents.AD_PAUSE, this.videoFrameworkUtils.bind(this.onAdPause, this)), typeof this.onAdResume == "function" && e.subscribe(this.videoFrameworkEvents.AD_RESUME, this.videoFrameworkUtils.bind(this.onAdResume, this)), typeof this.onMediaSeek == "function" && e.subscribe(this.videoFrameworkEvents.MEDIA_SEEK, this.videoFrameworkUtils.bind(this.onMediaSeek, this)), typeof this.onMediaBegin == "function" && e.subscribe(this.videoFrameworkEvents.MEDIA_BEGIN, this.videoFrameworkUtils.bind(this.onMediaBegin, this)), typeof this.onMediaChange == "function" && e.subscribe(this.videoFrameworkEvents.MEDIA_CHANGE, this.videoFrameworkUtils.bind(this.onMediaChange, this)), typeof this.onMediaPlay == "function" && e.subscribe(this.videoFrameworkEvents.PLAY, this.videoFrameworkUtils.bind(this.onMediaPlay, this)), typeof this.onVideoPaused == "function" && e.subscribe(this.videoFrameworkEvents.VIDEO_PAUSED, this.videoFrameworkUtils.bind(this.onVideoPaused, this)), typeof this.onPosterLoaded == "function" && e.subscribe(this.videoFrameworkEvents.POSTER_LOADED, this.videoFrameworkUtils.bind(this.onPosterLoaded, this)), typeof this.onTemplateError == "function" && e.subscribe(this.videoFrameworkEvents.TEMPLATE_ERROR, this.videoFrameworkUtils.bind(this.onTemplateError, this)), typeof this.onRendered == "function" && e.subscribe(this.videoFrameworkEvents.RENDERED, this.videoFrameworkUtils.bind(this.onRendered, this)), typeof this.onAdxError == "function" && e.subscribe(this.videoFrameworkEvents.ADX_ERROR, this.videoFrameworkUtils.bind(this.onAdxError, this))
            },
            unregisterListeners: function() {
                this.logger.debug("unregisterListeners");
                var e = this.player.getSubscription();
                e.cancel(this.videoFrameworkEvents.TEMPLATE_READY, this.videoFrameworkUtils.bind(this.onTemplateReady, this)), e.cancel(this.videoFrameworkEvents.DESTROY, this.videoFrameworkUtils.bind(this.onDestroy, this)), typeof this.onStreamStart == "function" && e.cancel(this.videoFrameworkEvents.STREAM_START, this.videoFrameworkUtils.bind(this.onStreamStart, this)), typeof this.onVideoStart == "function" && e.cancel(this.videoFrameworkEvents.VIDEO_START, this.videoFrameworkUtils.bind(this.onVideoStart, this)), typeof this.onVideoComplete == "function" && e.cancel(this.videoFrameworkEvents.VIDEO_COMPLETE, this.videoFrameworkUtils.bind(this.onVideoComplete, this)), typeof this.onVideoProgress == "function" && e.cancel(this.videoFrameworkEvents.MEDIA_PROGRESS, this.videoFrameworkUtils.bind(this.onVideoProgress, this)), typeof this.onAdStart == "function" && e.cancel(this.videoFrameworkEvents.AD_START, this.videoFrameworkUtils.bind(this.onAdStart, this)), typeof this.onAdComplete == "function" && e.cancel(this.videoFrameworkEvents.AD_COMPLETE, this.videoFrameworkUtils.bind(this.onAdComplete, this)), typeof this.onEnterFullScreen == "function" && e.cancel(this.videoFrameworkEvents.FULLSCREEN, this.videoFrameworkUtils.bind(this.onEnterFullScreen, this)), typeof this.onExitFullScreen == "function" && e.cancel(this.videoFrameworkEvents.EXIT_FULLSCREEN, this.videoFrameworkUtils.bind(this.onExitFullScreen, this)), typeof this.onVideoLoad == "function" && e.cancel(this.videoFrameworkEvents.VIDEO_LOAD, this.videoFrameworkUtils.bind(this.onVideoLoad, this)), typeof this.onContentLoad == "function" && e.cancel(this.videoFrameworkEvents.CONTENT_LOAD, this.videoFrameworkUtils.bind(this.onContentLoad, this)), typeof this.onMuted == "function" && e.cancel(this.videoFrameworkEvents.MUTED, this.videoFrameworkUtils.bind(this.onMuted, this)), typeof this.onUnMuted == "function" && e.cancel(this.videoFrameworkEvents.UNMUTED, this.videoFrameworkUtils.bind(this.onUnMuted, this)), typeof this.onMediaError == "function" && e.cancel(this.videoFrameworkEvents.MEDIA_ERROR, this.videoFrameworkUtils.bind(this.onMediaError, this)), typeof this.onAdSkipped == "function" && e.cancel(this.videoFrameworkEvents.AD_SKIPPED, this.videoFrameworkUtils.bind(this.onAdSkipped, this)), typeof this.onAdPause == "function" && e.cancel(this.videoFrameworkEvents.AD_PAUSE, this.videoFrameworkUtils.bind(this.onAdPause, this)), typeof this.onAdResume == "function" && e.cancel(this.videoFrameworkEvents.AD_RESUME, this.videoFrameworkUtils.bind(this.onAdResume, this)), typeof this.onMediaSeek == "function" && e.cancel(this.videoFrameworkEvents.MEDIA_SEEK, this.videoFrameworkUtils.bind(this.onMediaSeek, this)), typeof this.onMediaBegin == "function" && e.cancel(this.videoFrameworkEvents.MEDIA_BEGIN, this.videoFrameworkUtils.bind(this.onMediaBegin, this)), typeof this.onMediaChange == "function" && e.cancel(this.videoFrameworkEvents.MEDIA_CHANGE, this.videoFrameworkUtils.bind(this.onMediaChange, this)), typeof this.onMediaPlay == "function" && e.cancel(this.videoFrameworkEvents.PLAY, this.videoFrameworkUtils.bind(this.onMediaPlay, this)), typeof this.onVideoPaused == "function" && e.cancel(this.videoFrameworkEvents.VIDEO_PAUSED, this.videoFrameworkUtils.bind(this.onVideoPaused, this)), typeof this.onPosterLoaded == "function" && e.cancel(this.videoFrameworkEvents.POSTER_LOADED, this.videoFrameworkUtils.bind(this.onPosterLoaded, this)), typeof this.onTemplateError == "function" && e.cancel(this.videoFrameworkEvents.TEMPLATE_ERROR, this.videoFrameworkUtils.bind(this.onTemplateError, this)), typeof this.onRendered == "function" && e.cancel(this.videoFrameworkEvents.RENDERED, this.videoFrameworkUtils.bind(this.onRendered, this)), typeof this.onAdxError == "function" && e.cancel(this.videoFrameworkEvents.ADX_ERROR, this.videoFrameworkUtils.bind(this.onAdxError, this))
            },
            track: function(e) {
                throw new Error("Abstract method error")
            },
            getVideoName: function() {
                var e = "";
                return this.currentVideo && (e = this.currentVideo.displayName ? this.currentVideo.displayName : this.currentVideo.name), e
            },
            getVideoId: function() {
                var e = "";
                return this.currentVideo && (e = this.currentVideo.referenceId ? this.currentVideo.referenceId : this.currentVideo.id), e
            },
            getTagValue: function(e) {
                var t, n, r, i;
                return i = e, this.currentVideo && this.currentVideo.tags && (n = this.currentVideo.tags, r = new RegExp(i + "_([^\\s]+)", "ig"), t = r.exec(n.join(" ")), t && t.length > 0 && (t = t[1])), t || ""
            },
            getVideoCategory: function() {
                this.logger.info("getVideoCategory", this.currentVideo);
                var e = "";
                if (this.currentVideo && this.currentVideo.tags) {
                    var t = this.currentVideo.tags, n = this.currentVideo.tags.length, r = "", i = "";
                    for (var s = 0; s < n; s++) {
                        var o = t[s], u = [];
                        /nytsec0_(.+)/.test(o) ? (u = /nytsec0_(.+)/.exec(o), u && u.length > 0 && (r = u[1])) : /nytsec1_(.+)/.test(o) && (u = /nytsec1_(.+)/.exec(o), u && u.length > 0 && (i = u[1]))
                    }
                    e = i !== "" ? i : r
                }
                return this.info && this.info.kicker && this.info.kicker !== "" && typeof this.info.kicker == "string" && (e = this.info.kicker), e
            },
            getFranchise: function() {
                this.logger.info("getFranchise", this.currentVideo);
                var e = "";
                if (this.currentVideo && this.currentVideo.hasOwnProperty("customFields")) {
                    var t = this.currentVideo.customFields;
                    t && t.hasOwnProperty("series") && (e = t.series)
                }
                return typeof this.info == "object" && this.info.hasOwnProperty("series") && typeof this.info.series != "undefined" && this.info.series !== null && this.info.series !== "" && (e = this.info.series), typeof e != "string" && (e = e.toString()), e
            },
            getAdditionalTrackingTags: function() {
                var e = {}, t = {};
                if (typeof this.info == "object" && this.info.hasOwnProperty("wttags") && typeof this.info.wttags != "undefined" && this.info.wttags !== null && this.info.wttags !== "" && typeof this.info.wttags == "string") {
                    e = this.info.wttags;
                    var n = e.split(",");
                    if (n.length%2 === 0) {
                        var r = n.length, i = "", s = "", o = "";
                        for (var u = 0; u < r; u++)
                            if (u%2 === 0)
                                i = n[u];
                            else if (u%2 !== 0) {
                                s = n[u], o = "";
                                if (this.currentVideo.hasOwnProperty("customFields")) {
                                    var a = this.currentVideo.customFields;
                                    a.hasOwnProperty(s) && (o = a[s])
                                }
                                o !== "" && (t[i] = o)
                            }
                        }
                }
                return t
            },
            setCurrentVideoStarted: function() {
                if (null === this.currentVideo ||!this.videoModule.mediaIsLive())
                    this.logger.info("currentVideo was", this.currentVideo), this.setCurrentVideo(), this.logger.info("currentVideo is", this.currentVideo), this.videoModule.mediaIsLive() && this.onVideoStart(null)
            },
            setCurrentVideo: function() {
                this.currentVideo = this.player.getCurrentVideo()
            },
            setModules: function() {
                try {
                    this.logger.info("setModules", this.player), this.moduleExperience = this.player.getModuleExperience(), this.videoModule = this.player.getVideoModule(), this.contentModule = this.player.getContentModule(), this.adModule = this.player.getAdModule(), this.menuModule = this.player.getMenuModule()
                } catch (e) {
                    this.logger.error(e)
                }
            },
            hideElement: function(e) {
                return e.css({
                    width: "0px",
                    height: "0px",
                    border: "0px"
                }), e.hide(), e
            }
        })
    }.call(NYTD.Video.Metrics), function() {
        var e = NYTD.Video.Metrics.AbstractMetrics.extend({
            trackedUptProgress: !1,
            tracked: !1,
            uptContainer: null,
            uid: null,
            uptURL: "",
            videoCompleted: !1,
            adStarted: !1,
            adCompleted: !1,
            mediaChanged: !1,
            initialize: function(e) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Metrics.WebTrends"), this.resetObjectState(), this.player = e.player, this.info = e.info, this.body = NYTD.Video.$("body").first(), this.registerListeners(), this.setUptTrackingContainer(), this.initUPT()
            },
            track: function(e) {
                this.logger.info("track", e);
                var t = NYTD.Video.Utils.getDeviceType(), n = [e.playerType, t].join("|"), r = ["DCS.dcssip", "www.nytimes.com", "DCS.dcsuri", ["/video/", e.playerType, "/", e.action, ".html"].join(""), "WT.ti", ["Video", e.playerType, e.ti].join(" "), "WT.cg_n", "Video", "WT.videoCategory", this.getVideoCategory(), "WT.videoEvent", e.event, "WT.videoLoad", e.load, "WT.videoName", e.name, "WT.z_gpt", "Multimedia", "WT.z_gpst", "Video", "WT.z_gpsst", ["Video", e.gpsst].join("-"), "WT.z_vid", e.id, "WT.z_vpt", n, "WT.z_vft", e.z_vft, "WT.z_dcsm", e.z_dcsm];
                e.z_vaud && e.action === "Audio" && r.push("WT.z_vaud", e.z_vaud);
                var i = this.getAdditionalTrackingTags(), s;
                for (s in i)
                    r.push(["WT.", s].join("")), r.push(i[s]);
                typeof dcsMultiTrack == "function" ? dcsMultiTrack.apply(this, r) : this.logger.error("dcsMultiTrack not loaded")
            },
            play: function() {
                this.logger.info("play");
                var e = this.info;
                e.action = "Play", e.event = this.info.videoEvent || "play", e.load = "user", e.ti = "Play", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Play", this.track(e)
            },
            autoPlay: function() {
                this.logger.info("play");
                var e = this.info;
                e.action = "Play", e.event = this.info.videoEvent || "play", e.load = "auto", e.ti = "Play", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Play", this.track(e)
            },
            autoPlayStart: function() {
                this.logger.info("autoPlay");
                var e = this.info;
                e.action = "Play", e.event = this.info.videoEvent || "play", e.load = "auto", e.ti = "PlayStart", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Play", this.track(e)
            },
            stop: function() {
                this.logger.info("stop");
                var e = this.info;
                e.action = "Finish", e.event = "finish", e.load = "null", e.ti = "FinishStop", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Play", this.track(e)
            },
            big: function() {
                this.logger.info("big");
                var e = this.info;
                e.action = "GoBig", e.event = "Go Big", e.load = "null", e.ti = "GoBig", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Play", this.track(e)
            },
            small: function() {
                this.logger.info("small");
                var e = this.info;
                e.action = "GoSmall", e.event = "Go Small", e.load = "null", e.ti = "GoSmall", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Play", this.track(e)
            },
            muted: function() {
                this.logger.info("muted");
                var e = this.info;
                e.action = "Audio", e.event = "AudioOff", e.load = "null", e.ti = "Audio", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Audio", e.z_vaud = "Off", this.track(e)
            },
            unmuted: function() {
                this.logger.info("unmuted");
                var e = this.info;
                e.action = "Audio", e.event = "AudioOn", e.load = "null", e.ti = "Audio", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Audio", e.z_vaud = "On", this.track(e)
            },
            adskipped: function() {
                this.logger.info("adskipped");
                var e = this.info;
                e.action = "Ad", e.event = "AdSkip", e.load = "null", e.ti = "Ad", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Ad", this.track(e)
            },
            adxerror: function() {
                this.logger.info("adxerror");
                var e = this.info;
                e.action = "Ad", e.event = "AdxError", e.load = "null", e.ti = "Ad", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Ad", this.track(e)
            },
            mediaError: function() {
                this.logger.info("media error");
                var e = this.info;
                e.action = "MediaError", e.event = "MediaError", e.load = "null", e.ti = "Error", e.name = this.getVideoName(), e.id = this.getVideoId(), e.z_dcsm = "1", e.z_vft = this.getFranchise(), e.gpsst = "Error", this.track(e)
            },
            setUptTrackingContainer: function() {
                this.logger.info("setUptTrackingContainer"), this.uptContainer = NYTD.Video.$(document.createElement("div")), this.hideElement(this.uptContainer), this.body.append(this.uptContainer)
            },
            initUPT: function() {
                this.uptURL = [document.location.protocol, "//up.nytimes.com/"].join("");
                var e = "production";
                NYTD && NYTD.env ? e = NYTD.env : window.NYTD && window.NYTD.env && (e = window.NYTD.env), e !== "production" && (this.uptURL = [document.location.protocol, "//up.stg.nytimes.com/"].join(""));
                var t = window.dcsvid || "";
                this.uid = this.videoFrameworkValidation.isEmpty(t) ? "" : encodeURIComponent(t)
            },
            upt: function(e, t) {
                var n = ["d=", 0, "&m=", "", "&ui=", this.uid, "&u=", this.currentVideo && this.currentVideo.customFields && this.currentVideo.customFields.videourl ? encodeURIComponent(this.currentVideo.customFields.videourl): "", "&r=", encodeURIComponent(window.location.href), "&e=", encodeURIComponent(e), "&p=", encodeURIComponent(t !== null || t !== "undefined" && t !== "" ? ['{"', e, '":"', t, '"}'].join("") : "")].join("");
                this.uptPixel(this.uptURL, n)
            },
            uptPixel: function(e, t) {
                var n = NYTD.Video.$(document.createElement("img"));
                n.attr("src", e + "?" + t), this.hideElement(n), this.uptContainer && (this.uptContainer.empty(), this.uptContainer.append(n))
            },
            videoStarted: function() {
                this.logger.info("WebTrends::videoStarted", this.tracked), this.tracked===!1 && (this.info.autoPlay===!0 && this.autoTracked===!1 && this.info.playerType !== "article inline" ? (this.info.nextPlay ? this.autoPlay() : this.autoPlayStart(), this.autoTracked=!0) : this.player.userInitiatedNext ? this.play() : this.videoCompleted&&!this.adStarted && this.mediaChanged ? this.autoPlay() : this.videoCompleted && this.adStarted && this.adCompleted && this.mediaChanged ? this.autoPlay() : this.play(), this.tracked=!0, this.upt("videoStart", ""), this.videoCompleted=!1, this.adStarted=!1, this.adCompleted=!1, this.mediaChanged=!1)
            },
            onVideoLoad: function(e) {
                this.logger.info("WebTrends::onVideoLoad"), this.tracked=!1
            },
            onContentLoad: function(e) {
                this.logger.info("WebTrends::onContentLoad"), this.tracked=!1
            },
            onMediaChange: function(e) {
                this.logger.info("WebTrends::onMediaChange"), this.tracked=!1, this.mediaChanged=!0
            },
            onStreamStart: function(e) {
                this.logger.info("WebTrends::onStreamStart"), this.setCurrentVideoStarted()
            },
            onVideoStart: function(e) {
                this.logger.info("WebTrends::onVideoStart"), this.logger.info("WebTrends::tracked", this.tracked), this.setCurrentVideoStarted(), this.videoCompleted&&!this.mediaChanged && this.player.type === "flash" && this.videoStarted()
            },
            onMediaBegin: function(e) {
                this.logger.info("WebTrends::onMediaBegin"), this.videoStarted()
            },
            onVideoComplete: function(e) {
                this.logger.info("WebTrends::onVideoComplete"), this.stop(), this.upt("videoComplete", ""), this.tracked=!1, this.trackedUptProgress=!1, this.videoCompleted=!0
            },
            onVideoProgress: function(e) {
                var t = e.position ? e.position: e.obj && e.obj.position ? e.obj.position: 0, n = e.duration ? e.duration: e.obj && e.obj.duration ? e.obj.duration: 0, r = Math.round(parseInt(t, 10)), i = Math.round(parseInt(n, 10)), s = Math.round(i * .75);
                r > 0 && r === s&&!this.trackedUptProgress && (this.logger.info("WebTrends::Watch 75%"), this.upt("videoWatched", "75%"), this.trackedUptProgress=!0)
            },
            onAdStart: function(e) {
                this.logger.info("WebTrends::onAdStart"), this.setCurrentVideo(), this.adStarted=!0
            },
            onAdComplete: function(e) {
                this.logger.info("WebTrends::onAdComplete"), this.adCompleted=!0
            },
            setModules: function() {
                this.logger.info("setModules", this.player), this.moduleExperience = this.player.getModuleExperience(), this.videoModule = this.player.getVideoModule(), this.contentModule = this.player.getContentModule(), this.adModule = this.player.getAdModule(), this.menuModule = this.player.getMenuModule()
            },
            onMuted: function(e) {
                this.logger.info("WebTrends::onMuted"), this.player.muteFunctionCalled || this.muted(), this.player.muteFunctionCalled=!1
            },
            onUnMuted: function(e) {
                this.logger.info("WebTrends::onUnMuted"), this.player.unmuteFunctionCalled || this.unmuted(), this.player.unmuteFunctionCalled=!1
            },
            onAdSkipped: function(e) {
                this.logger.info("WebTrends::onAdSkipped"), this.adskipped(), this.adCompleted=!0
            },
            onAdxError: function(e) {
                this.logger.info("WebTrends::onAdxError"), this.adxerror()
            },
            onMediaError: function(e) {
                this.logger.info("WebTrends::onMediaError"), this.mediaError()
            },
            onEnterFullScreen: function() {
                this.logger.info("WebTrends::onEnterFullScreen"), this.big()
            },
            onExitFullScreen: function() {
                this.logger.info("WebTrends::onExitFullScreen"), this.small()
            },
            onDestroy: function() {
                this.logger.info("WebTrends::onDestroy"), this.unregisterListeners(), this.resetObjectState()
            },
            onTemplateReady: function(e) {
                this.logger.info("WebTrends::onTemplateReady"), this.setModules()
            }
        });
        this.WebTrends = NYTD.Video.VideoTracker = function() {
            var t = null, n = null, r = null;
            return {
                init: function(e) {
                    n = e
                },
                setInfo: function(i) {
                    r = i, t = new e({
                        player: n,
                        info: r
                    })
                }
            }
        }
    }.call(NYTD.Video.Metrics), function() {
        "use strict";
        var e = NYTD.Video.Metrics.AbstractMetrics.extend({
            tracked: !1,
            videoCompleted: !1,
            mediaChanged: !1,
            initialize: function(e) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Metrics.ComScore"), this.resetObjectState(), this.player = e.player, this.info = e.info, this.registerListeners();
                if (typeof COMSCORE == "undefined")
                    if (!this.info.isPromo) {
                        this.logger.info("comScore::COMSCORE is undefined, load it");
                        var t = document.createElement("script"), n = document.getElementsByTagName("script")[0];
                        t.async=!0, t.src = (document.location.protocol === "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", n.parentNode.insertBefore(t, n)
                    } else 
                        this.logger.info("comScore::COMSCORE is undefined, do NOT load it. This is a promo player.", this.info.isPromo)
            },
            track: function(e) {
                this.logger.info("comScore::track start");
                var t = this.isAd ? "09": "02", n = {
                    c1: 1,
                    c2: "3005403",
                    c3: "",
                    c4: "",
                    c5: t
                };
                this.info.isPromo ? this.logger.info("comScore::isPromo, do NOT track", this.info.isPromo) : COMSCORE.beacon(n), this.logger.info("comScore::track end", n)
            },
            getVideoName: function() {
                return this.currentVideo.displayName ? this.currentVideo.displayName : this.currentVideo.name
            },
            getVideoId: function() {
                return this.currentVideo.referenceId ? this.currentVideo.referenceId : this.currentVideo.id
            },
            videoStarted: function() {
                this.logger.info("comScore::videoStarted"), this.logger.info("comScore::tracked", this.tracked), this.tracked===!1 && (this.track(), this.tracked=!0, this.mediaChanged=!1, this.videoCompleted=!1)
            },
            onStreamStart: function(e) {
                this.logger.info("comScore::onStreamStart"), this.setCurrentVideoStarted()
            },
            onVideoStart: function(e) {
                this.logger.info("comScore::onVideoStart"), this.setCurrentVideoStarted(), this.videoCompleted&&!this.mediaChanged && this.player.type === "flash" && this.videoStarted()
            },
            onMediaBegin: function(e) {
                this.logger.info("comScore::onMediaBegin"), this.setCurrentVideoStarted(), this.videoStarted()
            },
            onAdStart: function(e) {
                this.logger.info("comScore::onAdStart", e), this.isAd=!0, this.track()
            },
            onAdComplete: function(e) {
                this.logger.info("comScore::onAdComplete", e), this.isAd=!1
            },
            onAdSkipped: function(e) {
                this.logger.info("comScore::onAdSkipped"), this.isAd=!1
            },
            onVideoComplete: function(e) {
                this.logger.info("comScore::onVideoComplete", e), this.tracked=!1, this.videoCompleted=!0
            },
            onVideoLoad: function(e) {
                this.logger.info("ComScore::onVideoLoad"), this.tracked=!1
            },
            onContentLoad: function(e) {
                this.logger.info("ComScore::onContentLoad"), this.tracked=!1
            },
            onMediaChange: function(e) {
                this.logger.info("ComScore::onMediaChange"), this.tracked=!1, this.mediaChanged=!0
            },
            onDestroy: function() {
                this.logger.info("ComScore::onDestroy"), this.unregisterListeners(), this.resetObjectState()
            },
            onTemplateReady: function(e) {
                this.logger.info("ComScore::onTemplateReady"), this.setModules()
            }
        });
        this.ComScore = function() {
            var t = null, n = null, r = null;
            return {
                init: function(e) {
                    n = e
                },
                setInfo: function(i) {
                    r = i, t = new e({
                        player: n,
                        info: r
                    })
                }
            }
        }
    }.call(NYTD.Video.Metrics), function() {
        var e = NYTD.Video.Metrics.AbstractMetrics.extend({
            tracked25Percent: !1,
            tracked50Percent: !1,
            tracked75Percent: !1,
            tracked: !1,
            videoCompleted: !1,
            mediaChanged: !1,
            adStarted: !1,
            adCompleted: !1,
            subject: "video-nytv",
            url: window.location.href || "",
            referrer: window.referrer || "",
            tracker: null,
            startTimestamp: null,
            endTimestamp: null,
            startUpTimeSent: !1,
            isVideoPaused: !1,
            isAdInterrupted: !1,
            savedTrackingEvents: [],
            lastAdDuration: 0,
            ETEvents: {
                USER_PLAY: "user-play",
                AUTO_PLAY_NEXT: "auto-play-next",
                AUTO_PLAY_START: "auto-play-start",
                VIDEO_COMPLETE: "video-complete",
                PAUSE: "pause",
                UNPAUSE: "unpause",
                GO_FULLSCREEN: "go-fullscreen",
                EXIT_FULLSCREEN: "exit-fullscreen",
                MUTED: "muted",
                UNMUTED: "unmuted",
                SKIP_AD: "skip-ad",
                AD_START: "ad-start",
                AD_COMPLETE: "ad-complete",
                ADX_ERROR: "adx-error",
                MEDIA_ERROR: "media-error",
                PLAYER_LOAD: "player-load",
                PLAYER_STARTUP_TIME: "player-startup-time",
                PERCENT_25_VIEWED: "percent-25-viewed",
                PERCENT_50_VIEWED: "percent-50-viewed",
                PERCENT_75_VIEWED: "percent-75-viewed",
                SEEK: "seek",
                AD_PAUSE: "ad-pause",
                AD_RESUME: "ad-resume",
                POSTER_LOAD: "poster-load",
                TEMPLATE_ERROR: "template-error",
                RENDERED: "rendered"
            },
            initialize: function(e) {
                this.logger = NYTD.Video.Logger.get("NYTD.Video.Metrics.EventTracker"), this.resetObjectState(), this.player = e.player, this.info = e.info, this.registerListeners(), this.initEventTracker()
            },
            initEventTracker: function() {
                this.logger.info("initEventTracker"), NYTD && (typeof NYTD.EventTracker == "function" ? (this.logger.info("initEventTracker success"), this.tracker = new NYTD.EventTracker) : window.NYTD && typeof window.NYTD.EventTracker == "function" && (NYTD.EventTracker = window.NYTD.EventTracker, this.tracker = new NYTD.EventTracker))
            },
            track: function(e) {
                this.logger.info("track event", e), this.tracker || this.initEventTracker();
                if (this.tracker) {
                    this.tracker.track(e);
                    if (this.savedTrackingEvents && this.savedTrackingEvents.length > 0) {
                        for (var t = 0, n = this.savedTrackingEvents.length; t < n; t++)
                            this.tracker.track(this.savedTrackingEvents[t]);
                        this.savedTrackingEvents = []
                    }
                } else 
                    this.savedTrackingEvents.push(e)
            },
            getNewTrackingObject: function(e) {
                var t = e, n = NYTD.Video.$, r = {}, i = n('meta[name^="nytvideoet."]');
                this.info.playerType === "library" && (this.url = n("meta[name=publish_url]").attr("content") || window.location.href), i.each(function(e, t) {
                    var i = n(t), s = n.trim(i.attr("name")), o = n.trim(i.attr("content"));
                    s && s.length && (s = s.split("."), s.length > 1 && s[1] && s[1].length > 0 && (s = s[1]), r[s] = o)
                }), r.subject = this.subject, r.url = this.url, r.referrer = this.referrer, r.tech = this.player.type, r.playerType = this.info.playerType, r.device = NYTD.Video.Utils.getDeviceType(), r.event = t;
                switch (t) {
                case this.ETEvents.USER_PLAY:
                case this.ETEvents.AUTO_PLAY_NEXT:
                case this.ETEvents.AUTO_PLAY_START:
                case this.ETEvents.VIDEO_COMPLETE:
                case this.ETEvents.PAUSE:
                case this.ETEvents.UNPAUSE:
                case this.ETEvents.GO_FULLSCREEN:
                case this.ETEvents.EXIT_FULLSCREEN:
                case this.ETEvents.MUTED:
                case this.ETEvents.UNMUTED:
                case this.ETEvents.PERCENT_25_VIEWED:
                case this.ETEvents.PERCENT_50_VIEWED:
                case this.ETEvents.PERCENT_75_VIEWED:
                case this.ETEvents.SEEK:
                    r = this.addBaseVideoProps(r), r = this.addVideoProps(r);
                    break;
                case this.ETEvents.SKIP_AD:
                case this.ETEvents.AD_START:
                case this.ETEvents.AD_COMPLETE:
                case this.ETEvents.AD_PAUSE:
                case this.ETEvents.AD_RESUME:
                    r = this.addBaseVideoProps(r), r = this.addAdProps(r);
                    break;
                case this.ETEvents.PLAYER_LOAD:
                    r = this.addBaseVideoProps(r)
                }
                return r
            },
            addVideoProps: function(e) {
                var t = e;
                return t.videoType = this.videoModule.getContentTypeDisplayed(), t.videoFranchise = this.getFranchise(), t.videoDuration = this.currentVideo.length, t.videoSection = this.getTagValue("nytsec0"), t.videoSubSection = this.getTagValue("nytsec1"), t.videoPrimaryPlaylistId = this.getTagValue("nytp"), t.videoTimeOfEvent = this.videoModule.getVideoPosition(), t
            },
            addBaseVideoProps: function(e) {
                var t = e, n = this.getVideoId(), r = this.getVideoName();
                return n && (t.videoId = n), r && (t.videoName = r), t
            },
            addAdProps: function(e) {
                var t = e, n = this.adModule.getCurrentAdProperties();
                return t.videoType = "ad", t.adPosition = "preroll", n && typeof n == "object" && typeof n.cuePointInsertion == "string" && (t.adPosition = n.cuePointInsertion.toLowerCase().replace(/[^a-z0-9]/ig, "")), n && n.duration !== 0 ? t.adDuration = n.duration : t.adDuration = this.videoModule.getVideoDuration() || 0, t.event === this.ETEvents.AD_COMPLETE && t.tech === "flash" && (t.adDuration = this.lastAdDuration), t.adDuration = Math.floor(t.adDuration), t
            },
            userPlay: function() {
                this.logger.info("userplay");
                var e = this.getNewTrackingObject(this.ETEvents.USER_PLAY);
                this.track(e)
            },
            autoPlayNext: function() {
                this.logger.info("autoPlayNext");
                var e = this.getNewTrackingObject(this.ETEvents.AUTO_PLAY_NEXT);
                this.track(e)
            },
            autoPlayStart: function() {
                this.logger.info("autoPlayStart");
                var e = this.getNewTrackingObject(this.ETEvents.AUTO_PLAY_START);
                this.track(e)
            },
            videoPaused: function() {
                this.logger.info("paused");
                var e = this.getNewTrackingObject(this.ETEvents.PAUSE);
                this.track(e), this.isVideoPaused=!0
            },
            videoResume: function() {
                this.logger.info("unpause");
                var e = this.getNewTrackingObject(this.ETEvents.UNPAUSE);
                this.track(e), this.isVideoPaused=!1
            },
            videoStartUpTime: function() {
                this.startUpTimeSent=!0;
                var e = this.getNewTrackingObject(this.ETEvents.PLAYER_STARTUP_TIME), t = (this.endTimestamp.getTime() - this.startTimestamp.getTime()) / 1e3;
                e.videoTimeToStart = Math.round(t), e.videoType = this.videoModule.getContentTypeDisplayed(), this.track(e)
            },
            videoWatched: function(e) {
                var t = e, n;
                if (t) {
                    var r = ["percent-", t, "-viewed"].join("");
                    n = this.getNewTrackingObject(r), this.track(n)
                }
            },
            videoStarted: function() {
                this.logger.info("EventTracker::videoStarted", this.tracked), this.tracked===!1 && (this.info.autoPlay===!0 && this.autoTracked===!1 && this.info.playerType !== "article inline" ? (this.info.nextPlay ? this.autoPlayNext() : this.autoPlayStart(), this.autoTracked=!0) : this.player.userInitiatedNext ? this.userPlay() : this.videoCompleted&&!this.adStarted && this.mediaChanged ? this.autoPlayNext() : this.videoCompleted && this.adStarted && this.adCompleted && this.mediaChanged ? this.autoPlayNext() : this.userPlay(), this.videoCompleted && this.adStarted&&!this.adCompleted&&!this.mediaChanged && this.onAdComplete(), this.mediaChanged=!1, this.videoCompleted=!1, this.adStarted=!1, this.adCompleted=!1, this.isAdInterrupted=!1, this.tracked25Percent=!1, this.tracked50Percent=!1, this.tracked75Percent=!1, !this.startUpTimeSent && this.info.autoPlay && (this.endTimestamp = new Date, this.videoStartUpTime()), this.tracked=!0)
            },
            setModules: function() {
                this.logger.info("setModules", this.player), this.moduleExperience = this.player.getModuleExperience(), this.videoModule = this.player.getVideoModule(), this.contentModule = this.player.getContentModule(), this.adModule = this.player.getAdModule(), this.menuModule = this.player.getMenuModule()
            },
            onMediaSeek: function(e) {
                this.logger.info("EventTracker::onMediaSeek");
                var t = this.getNewTrackingObject(this.ETEvents.SEEK);
                this.track(t)
            },
            onVideoPaused: function(e) {
                this.logger.info("EventTracker::onVideoPaused"), this.videoPaused()
            },
            onPlayPauseClicked: function(e) {
                this.logger.info("EventTracker::onPlayPauseClicked"), !this.videoModule.isPlaying()&&!this.adStarted && this.videoPaused()
            },
            onVideoLoad: function(e) {
                this.logger.info("EventTracker::onVideoLoad"), this.tracked=!1
            },
            onMediaChange: function(e) {
                this.logger.info("EventTracker::onMediaChange"), this.mediaChanged=!0, this.tracked=!1, this.adStarted&&!this.adCompleted && (this.isAdInterrupted=!0)
            },
            onVideoStart: function(e) {
                this.logger.info("EventTracker::onVideoStart"), this.setCurrentVideoStarted(), this.videoCompleted&&!this.mediaChanged && this.player.type === "flash" && this.videoStarted(), this.isVideoPaused&&!this.mediaChanged && this.videoResume(), this.isVideoPaused=!1
            },
            onMediaBegin: function(e) {
                this.logger.info("EventTracker::onMediaBegin"), this.setCurrentVideoStarted(), this.videoStarted()
            },
            onVideoComplete: function(e) {
                this.logger.info("EventTracker::onVideoComplete");
                var t = this.getNewTrackingObject(this.ETEvents.VIDEO_COMPLETE);
                this.track(t), this.tracked25Percent=!1, this.tracked50Percent=!1, this.tracked75Percent=!1, this.videoCompleted=!0, this.tracked=!1
            },
            onVideoProgress: function(e) {
                var t = e.position ? e.position: e.obj && e.obj.position ? e.obj.position: 0, n = e.duration ? e.duration: e.obj && e.obj.duration ? e.obj.duration: 0, r = Math.round(parseInt(t, 10)), i = Math.round(parseInt(n, 10)), s = Math.round(i * .25), o = Math.round(i * .5), u = Math.round(i * .75);
                r > 0 && (r >= s&&!this.tracked25Percent ? (this.logger.info("EventTracker::Watch 25%"), this.videoWatched(25), this.tracked25Percent=!0) : r >= o&&!this.tracked50Percent ? (this.logger.info("EventTracker::Watch 50%"), this.videoWatched(50), this.tracked50Percent=!0) : r >= u&&!this.tracked75Percent && (this.logger.info("EventTracker::Watch 75%"), this.videoWatched(75), this.tracked75Percent=!0))
            },
            onAdStart: function(e) {
                this.logger.info("EventTracker::onAdStart"), this.setCurrentVideo();
                var t = this.getNewTrackingObject(this.ETEvents.AD_START);
                this.track(t), this.adStarted=!0, this.isAdInterrupted=!1, !this.startUpTimeSent && this.info.autoPlay && (this.endTimestamp = new Date, this.videoStartUpTime()), this.videoModule && this.player.type === "flash" && (this.lastAdDuration = this.videoModule.getVideoDuration() || 0)
            },
            onAdComplete: function(e) {
                this.logger.info("EventTracker::onAdComplete");
                if (this.adStarted) {
                    var t = this.getNewTrackingObject(this.ETEvents.AD_COMPLETE);
                    this.track(t), this.adCompleted=!0, this.isAdInterrupted=!1
                }
            },
            onMuted: function(e) {
                this.logger.info("EventTracker::onMuted");
                if (!this.player.muteFunctionCalled) {
                    var t = this.getNewTrackingObject(this.ETEvents.MUTED);
                    this.track(t)
                }
                this.player.muteFunctionCalled=!1
            },
            onUnMuted: function(e) {
                this.logger.info("EventTracker::onUnMuted");
                if (!this.player.unmuteFunctionCalled) {
                    var t = this.getNewTrackingObject(this.ETEvents.UNMUTED);
                    this.track(t)
                }
                this.player.unmuteFunctionCalled=!1
            },
            onAdSkipped: function(e) {
                this.logger.info("EventTracker::onAdSkipped");
                var t = this.getNewTrackingObject(this.ETEvents.SKIP_AD);
                this.track(t), this.adCompleted=!0, this.isAdInterrupted=!0
            },
            onAdPause: function(e) {
                this.logger.info("EventTracker::onAdPause"), this.adStarted && this.mediaChanged;
                if (!this.isAdInterrupted) {
                    var t = this.getNewTrackingObject(this.ETEvents.AD_PAUSE);
                    this.track(t)
                }
            },
            onAdResume: function(e) {
                this.logger.info("EventTracker::onAdResume");
                var t = this.getNewTrackingObject(this.ETEvents.AD_RESUME);
                this.track(t)
            },
            onAdxError: function(e) {
                this.logger.info("EventTracker::onAdxError");
                var t = this.getNewTrackingObject(this.ETEvents.ADX_ERROR);
                this.track(t)
            },
            onMediaError: function(e) {
                this.logger.info("EventTracker::onMediaError");
                var t = this.getNewTrackingObject(this.ETEvents.MEDIA_ERROR);
                this.track(t)
            },
            onEnterFullScreen: function() {
                this.logger.info("EventTracker::onEnterFullScreen");
                var e = this.getNewTrackingObject(this.ETEvents.GO_FULLSCREEN);
                this.track(e)
            },
            onExitFullScreen: function() {
                this.logger.info("EventTracker::onExitFullScreen");
                var e = this.getNewTrackingObject(this.ETEvents.EXIT_FULLSCREEN);
                this.track(e)
            },
            onRendered: function(e) {
                this.logger.info("EventTracker::onRendered");
                var t = this.getNewTrackingObject(this.ETEvents.RENDERED);
                this.track(t)
            },
            onPosterLoaded: function(e) {
                this.logger.info("EventTracker::onPosterLoaded");
                var t = this.getNewTrackingObject(this.ETEvents.POSTER_LOAD);
                this.track(t)
            },
            onTemplateError: function(e) {
                this.logger.info("EventTracker::onTemplateError");
                var t = this.getNewTrackingObject(this.ETEvents.TEMPLATE_ERROR);
                this.track(t)
            },
            onTemplateReady: function(e) {
                this.logger.info("EventTracker::onTemplateReady"), this.startTimestamp = new Date, this.startUpTimeSent=!1, this.setModules(), this.setCurrentVideo();
                var t = this.getNewTrackingObject(this.ETEvents.PLAYER_LOAD);
                this.track(t), this.player.type === "flash" && this.listenToBCPlayButton()
            },
            listenToBCPlayButton: function() {
                var e;
                this.player && (e = this.player.getModuleExperience().getElementByID("playButton"), e && e.addEventListener("elementClick", NYTD.Video.Utils.bind(this.onPlayPauseClicked, this)))
            },
            onDestroy: function() {
                this.logger.info("EventTracker::onDestroy"), this.unregisterListeners(), this.resetObjectState()
            }
        });
        this.EventTracker = function() {
            var t = null, n = null, r = null;
            return {
                init: function(e) {
                    n = e
                },
                setInfo: function(i) {
                    r = i, t = new e({
                        player: n,
                        info: r
                    })
                }
            }
        }
    }.call(NYTD.Video.Metrics), NYTD.Video.Player.AbstractVideoPlayer = Backbone.Model.extend({
        object: null,
        objectId: null,
        container: null,
        className: null,
        clazz: null,
        subscription: null,
        experience: null,
        moduleExperience: null,
        videoModule: null,
        menuModule: null,
        adModule: null,
        contentModule: null,
        socialModule: null,
        captionsModule: null,
        cuePointsModule: null,
        searchModule: null,
        adxModule: null,
        adxInfo: null,
        enableInitialBandwidthDetection: !1,
        connectOnLoad: !1,
        embedCode: "",
        defaultEmbedCode: '<iframe width="480" height="373" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="nyt_video_player" title="New York Times Video - Embed Player" src="http://graphics8.nytimes.com/bcvideo/1.0/iframe/embed.html?videoId={{VIDEO_ID}}&playerType=embed"></iframe>',
        socialURL: "",
        defaultSocialURL: "",
        isSocialURLShortened: !1,
        html5VideoTypes: ["video_xxxl_hb_mm", "video_s_3g_hp"],
        videoIds: null,
        current: 0,
        bitlyCallback: "",
        logger: null,
        defaultProps: null,
        type: "flash",
        isAdPlaying: !1,
        isAdInitializing: !1,
        isPolling: !1,
        poster: null,
        initialVideoPlayed: !1,
        $: null,
        bitlyStack: [],
        refereshId: - 1,
        stateTimer: - 1,
        muteFunctionCalled: !1,
        unmuteFunctionCalled: !1,
        userInitiatedNext: !1,
        callback: null,
        cueCallback: null,
        cuePosterCallback: null,
        triggered: [],
        isPollEnabled: !1,
        stopPolling: !1,
        isPollCheckComplete: !1,
        currentVideo: null,
        templateHandlerId: null,
        templateErrorId: null,
        resetObjectStateSuper: function() {
            this.currentVideo = null, this.object = null, this.objectId = null, this.container = null, this.className = null, this.clazz = null, this.subscription = new NYTD.Subscription, this.experience = null, this.moduleExperience = null, this.videoModule = null, this.menuModule = null, this.adModule = null, this.contentModule = null, this.socialModule = null, this.captionsModule = null, this.cuePointsModule = null, this.searchModule = null, this.adxModule = null, this.adxInfo = null, this.enableInitialBandwidthDetection=!1, this.connectOnLoad=!1, this.embedCode = "", this.defaultEmbedCode = '<iframe width="480" height="373" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="nyt_video_player" title="New York Times Video - Embed Player" src="http://graphics8.nytimes.com/bcvideo/1.0/iframe/embed.html?videoId={{VIDEO_ID}}&playerType=embed"></iframe>', this.socialURL = "", this.defaultSocialURL = "", this.isSocialURLShortened=!1, this.html5VideoTypes = ["video_xxxl_hb_mm", "video_s_3g_hp"], this.videoIds = null, this.current = 0, this.bitlyCallback = "", this.logger = NYTD.Video.Logger.get("NYTD.Video.AbstractVideoPlayer"), this.defaultProps = null, this.type = "flash", this.isAdPlaying=!1, this.isAdInitializing=!1, this.isPolling=!1, this.poster = null, this.initialVideoPlayed=!1, this.bitlyStack = [], this.refereshId =- 1, this.stateTimer =- 1, this.callback = null, this.cueCallback = null, this.cuePosterCallback = null, this.triggered = [], this.isPollEnabled=!1, this.stopPolling=!1, this.isPollCheckComplete=!1, this.templateHandlerId = null, this.templateErrorId = null
        },
        show: function() {
            NYTD.Video.Validation.isEmpty(this.object) || (this.logger.info("showing player", this.type, this.object), this.type === "html5" ? NYTD.Video.$(this.object).show() : NYTD.Video.$("#" + this.objectId).css({
                width: this.defaultProps.width.toString(),
                height: this.defaultProps.height.toString()
            }))
        },
        hide: function() {
            NYTD.Video.Validation.isEmpty(this.object) || (this.logger.info("Hiding player", this.type, this.object), this.type === "html5" ? NYTD.Video.$(this.object).hide() : NYTD.Video.$("#" + this.objectId).css({
                width: "0px",
                height: "0px"
            }))
        },
        setUserInitiatedNext: function(e) {
            e ? this.userInitiatedNext=!0 : this.userInitiatedNext=!1
        },
        setContainerId: function(e) {
            this.containerId = e
        },
        setContainer: function(e) {
            var t = this, n = {};
            if (NYTD.Video.Validation.isEmpty(e))
                throw new Error("Missing the video container HTMLElement or ID");
            typeof e == "string" ? this.container = document.getElementById("#" + this.containerId) : this.container = e, n.width = t.defaultProps.width, n.height = t.defaultProps.height, t.defaultProps.width.toString().indexOf("%")!==-1 && (t.defaultProps.preserveAspectRatio ? (n.height = 0, n.paddingBottom = "56.25%", n.position = "relative", navigator.appVersion.indexOf("MSIE 7.")!==-1 && (n.width = "auto")) : (n.position = "absolute", n.top = 0, n.left = 0)), NYTD.Video.$(this.container).css(n)
        },
        setObjectId: function(e) {
            this.objectId = e
        },
        setObjectClass: function(e) {
            this.clazz = e
        },
        setClassName: function(e) {
            this.className = e
        },
        setParams: function(e) {
            this.params = e
        },
        setProps: function(e) {
            this.defaultProps = e, this.defaultProps.renditions && (this.html5VideoTypes = this.defaultProps.renditions), this.callback = NYTD.Video.Utils.generateCallbackName(e.id + "video_cb"), this.cueCallback = NYTD.Video.Utils.generateCallbackName(e.id + "html5_video_cb"), this.cuePosterCallback = NYTD.Video.Utils.generateCallbackName(e.id + "html5_video_cbp"), this.refreshId = NYTD.Video.Utils.registerRefreshTimerElement(e.id), this.logger.info("setProps - refreshId: ", this.refreshId)
        },
        setPoster: function() {
            try {
                this.poster = new NYTD.Video.VideoPoster, this.poster.init(this, this.defaultProps)
            } catch (e) {
                this.logger.error(e)
            }
        },
        setAutoPoster: function() {},
        setVideoIds: function(e) {
            this.videoIds = e
        },
        setEmbedCode: function(e) {
            this.embedCode = e
        },
        setCallback: function(e) {
            this.callback = e
        },
        setEnableInitialBandwidthDetection: function(e) {
            this.enableInitialBandwidthDetection = e
        },
        setConnectOnLoad: function(e) {},
        setADXInfo: function(e) {
            this.adxInfo = e;
            var t = {
                player: this,
                playerType: this.adxInfo.playerType,
                pagename: this.adxInfo.pagename,
                positions: this.adxInfo.positions,
                bannerWidth: this.adxInfo.bannerWidth,
                bannerHeight: this.adxInfo.bannerHeight,
                adFrequency: this.adxInfo.adFrequency,
                adCountdown: this.adxInfo.adCountdown,
                bigAdContainer: this.adxInfo.bigAdContainer
            };
            this.type !== "flash" ? this.adxModule = new NYTD.Video.Ad.Controller.HTML5AdController(t) : this.adxModule = new NYTD.Video.Ad.Controller.FlashAdController(t), this.logger.debug("setADXInfo", this.adxInfo), this.notify(NYTD.Video.VideoEvents.ADX_MODULE_READY, {
                id: this.objectId,
                obj: null,
                player: this
            })
        },
        setFreewheel: function(e) {
            this.type !== "flash" ? this.freewheelModule = new NYTD.Video.Ad.Controller.FWHTML5AdController(this, e) : this.freewheelModule = new NYTD.Video.Ad.Controller.FWFlashAdController(this, e), this.logger.debug("Set Freewheel Module", this.freewheelModule), this.notify(NYTD.Video.VideoEvents.FREEWHEEL_MODULE_READY, {
                id: this.objectId,
                obj: null,
                player: this
            })
        },
        setPendingSocialURL: function() {
            this.socialModule.setLink("Fetching URL... Please wait...")
        },
        setSocialURL: function(e) {
            this.socialURL = e
        },
        getContainerId: function() {
            return this.containerId
        },
        getContainer: function() {
            return this.container
        },
        getCallback: function() {
            return this.callback
        },
        getObjectId: function() {
            return this.objectId
        },
        getClassName: function() {
            return this.className
        },
        getParams: function() {
            return this.params
        },
        getProps: function() {
            return this.defaultProps
        },
        getSubscription: function() {
            return this.subscription
        },
        getExperience: function() {
            return this.experience
        },
        getModuleExperience: function() {
            return this.moduleExperience
        },
        getVideoModule: function() {
            return this.videoModule
        },
        getMenuModule: function() {
            return this.menuModule
        },
        getAdModule: function() {
            return this.adModule
        },
        getContentModule: function() {
            return this.contentModule
        },
        getSocialURL: function() {
            return this.socialURL
        },
        getCuePointsModule: function() {
            return this.cuePointsModule
        },
        getCaptionsModule: function() {
            return this.captionsModule
        },
        getADXInfo: function() {
            return this.adxInfo
        },
        getADXModule: function() {
            return this.adxModule
        },
        getCurrentVideo: function() {
            if (this.type === "html5")
                return this.logger.info("getting currentVideo", this.currentVideo), this.currentVideo;
            var e = this.videoModule.getCurrentVideo();
            return null === e && (e = this.contentModule.getMedia(this.videoIds[this.current], "referenceId")), this.logger.info("getCurrentVideo", e), e
        },
        enablePlayer: function() {
            this.videoModule.setEnabled(!0), this.poster.enable()
        },
        disablePlayer: function() {
            this.videoModule.setEnabled(!1), this.poster.disable()
        },
        stopRefreshTimer: function() {
            this.logger.info("stopRefreshTimer", this.refreshId), NYTD.Video.Utils.stopRefreshTimer(this.refreshId)
        },
        startRefreshTimer: function() {
            this.logger.info("startRefreshTimer"), NYTD.Video.Utils.startRefreshTimer(this.refreshId)
        },
        toggleRefreshTimer: function(e) {
            this.logger.info("toggleRefreshTimer"), e === "stop" ? this.stopRefreshTimer() : e === "start" && this.startRefreshTimer()
        },
        canPoll: function() {
            var e = this.defaultProps.enableLivePoll && this.defaultProps.pollService&&!this.isPollCheckComplete;
            return this.logger.info("canPoll", e), e
        },
        checkState: function() {
            var e = this;
            this.canPoll() && NYTD.Video.$.ajax({
                url: this.defaultProps.pollService,
                cache: !1,
                dataType: "json",
                error: function(t) {
                    e.logger.error("checkState", t), e.isPollCheckComplete=!0, e.notify(NYTD.Video.VideoEvents.POLL_CHECK_COMPLETE)
                },
                success: function(t) {
                    e.logger.info("checkState - success");
                    if (t && typeof t == "object" && t.length > 0) {
                        var n = t[0];
                        n.state === "live" ? (e.logger.info("checkState - live: polling is enabled"), e.isPollEnabled=!0) : n.state && (e.logger.info("checkState - vod: polling is disabled... loading next video"), e.isPollEnabled=!1, e.incrementCurrentContent()), e.isPollCheckComplete=!0, e.notify(NYTD.Video.VideoEvents.POLL_CHECK_COMPLETE)
                    }
                }
            })
        },
        startPoll: function() {
            this.logger.info("startPoll");
            if (!this.isPollEnabled || this.stopPolling ||!this.videoModule.mediaIsLive() ||!this.defaultProps.enableLivePoll ||!this.defaultProps.pollService || this.isPolling) {
                this.logger.info(this.videoModule.mediaIsLive(), this.defaultProps.enableLivePoll, this.defaultProps.pollService), this.logger.error("Star poll error... either media is not live, pollService was not specified or enableLivePoll was not set.");
                return 
            }
            if (!NYTD.Video.Validation.isLocalDomain(this.defaultProps.pollService)) {
                this.logger.error("The poll service URL specified was not valid");
                return 
            }
            var e = this, t = function() {
                e.logger.debug("polling for service...");
                var n = function() {
                    if (e.stopPolling)
                        return;
                    setTimeout(function() {
                        t()
                    }, 15e3)
                };
                try {
                    NYTD.Video.$.ajax({
                        url: e.defaultProps.pollService,
                        cache: !1,
                        dataType: "json",
                        error: function(t) {
                            n(), e.logger.error(t)
                        },
                        success: function(t) {
                            typeof t != "object" && (e.logger.error("The returned result is not an object", t), n());
                            if (t.status == "pending")
                                e.logger.error("pending poll request"), n();
                            else if (t.length > 0) {
                                e.logger.info("trigger", t[0]);
                                var r = t && t.length > 0 ? t[0]: null;
                                if (r&&!NYTD.Video.Validation.isEmpty(r.trigger)&&!NYTD.Video.Validation.isEmpty(r.trigger.name)&&!e.triggered[r.trigger.name]) {
                                    e.logger.info("got ad trigger..."), e.triggered[r.trigger.name]=!0, e.type === "html5" ? (e.logger.info("loading html5 ad"), e.videoModule.pause(), e.onExternalAd(null)) : (e.logger.info("triggering requestAd"), e.adModule.requestAd()), e.isPolling=!1;
                                    return 
                                }
                                r.state === "live"&&!this.stopPolling ? (e.logger.info("in live mode... continue polling"), n()) : r.state === "vod" ? (e.logger.info("out of live mode... disable polling"), e.videoModule.pause(!0), e.type === "html5" ? e.onEnded() : (e.contentModule.purgeAllContent(), e.onVideoComplete(null)), e.isPolling=!1) : this.stopPolling || n()
                            }
                        },
                        contentType: "application/json"
                    })
                } catch (r) {}
                e.isPolling=!0
            };
            t()
        },
        checkNotification: function() {
            var e = this;
            if (this.defaultProps.notification === "push" && io) {
                var t = io.connect(this.defaultProps.notificationService);
                t.on("connected", function(n) {
                    e.notify("socket.connected", {
                        id: this.objectId,
                        obj: {},
                        player: this
                    }), t.emit("join room", {
                        room: "video"
                    })
                }), t.on("disconnect", function(t) {
                    e.notify("socket.disconnected", {
                        id: this.objectId,
                        obj: {},
                        player: this
                    })
                }), t.on("video", function(t) {
                    t = t.data;
                    if (t && t.actions && t.actions) {
                        var n = t.actions, r = n.triggers, i = r.length;
                        e.logger.info("received socket packet", n);
                        for (var s = 0; s < i; s++) {
                            var o = r[s];
                            o.ad ? e.adModule.requestAd() : o.pause ? e.videoModule.pause() : o.play ? e.videoModule.play() : o.remove ? e.kill() : o.mute ? e.mute() : o.unmute ? e.unmute() : o.render ? e.render() : o.revealAndPlay ? e.defaultProps.overlay && e.defaultProps.overlay.background ? e.poster.revealAndPlay() : this.autoRender || e.render() : o.vod ? e.type === "html5" ? e.onEnded() : (e.contentModule.purgeAllContent(), e.onVideoComplete(null)) : o.content && o.container && NYTD.Video.$(o.container).html(o.content)
                        }
                    }
                })
            }
        },
        toggleControls: function(e) {
            if (this.moduleExperience === "undefined")
                throw new Error("Brighcove experience not defined");
            var t = this.moduleExperience.getElementsByType("ChromelessVideoPlayer")[0], n = t.getControls(), r = n.getVisible();
            n.setVisible(!r);
            var i = setTimeout(function() {
                n.setVisible(r)
            }, 2e3)
        },
        stopPoll: function() {
            return this.stopPolling=!0, this.isPollEnabled=!1, this.isPolling=!1, this
        },
        initPostPlay: function() {
            return this.startRefreshTimer(), this.stopPoll(), this
        },
        initPrePlay: function() {
            this.defaultProps.isPromo ? this.logger.info("isPromo, do NOT stop HP timer", this.defaultProps.isPromo) : this.stopRefreshTimer(), this.defaultProps.autoStart && this.videoModule.mediaIsLive() && this.defaultProps.enableLivePoll && this.defaultProps.pollService && (this.isPollEnabled=!0), this.startPoll()
        },
        onVideoStop: function(e) {
            this.logger.info("onVideoStop", e), this.notify(NYTD.Video.VideoEvents.VIDEO_STOP, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onTemplateLoaded: function(e) {
            this.notify(NYTD.Video.VideoEvents.TEMPLATE_LOADED, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onTemplateErrorSuper: function(e) {
            this.stopPoll(), this.notify(NYTD.Video.VideoEvents.TEMPLATE_ERROR, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onTemplateReady: function(e) {
            this.moduleExperience.removeEventListener(BCExperienceEvent.TEMPLATE_READY, this.onTemplateReady), this.defaultProps.playlistId && this.loadPlaylist(), this.notify(NYTD.Video.VideoEvents.TEMPLATE_READY, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onRendered: function(e) {
            e = e || {}, this.notify(NYTD.Video.VideoEvents.RENDERED, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onCue: function(e) {
            this.logger.info("onCue", e), this.notify(NYTD.Video.VideoEvents.CUE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaCollectionLoad: function(e) {
            this.notify(NYTD.Video.VideoEvents.MEDIA_COLLECTION_LOAD, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaLoad: function(e) {
            this.notify(NYTD.Video.VideoEvents.MEDIA_LOAD, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaStop: function(e) {
            this.logger.info("onMediaStop", e), this.notify(NYTD.Video.VideoEvents.MEDIA_STOP, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaSeek: function(e) {
            this.logger.info("onMediaSeek", e), this.notify(NYTD.Video.VideoEvents.MEDIA_SEEK, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaChange: function(e) {
            this.logger.info("onMediaChange", e), this.notify(NYTD.Video.VideoEvents.MEDIA_CHANGE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaComplete: function(e) {
            this.logger.info("onMediaComplete", e), this.notify(NYTD.Video.VideoEvents.MEDIA_COMPLETE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaMuteChange: function(e) {
            this.logger.info("onMediaMuteChange"), e = e || {}, this.videoModule.isMuted() ? (this.logger.info("isMuted"), this.notify(NYTD.Video.VideoEvents.MUTED, {
                id: this.objectId,
                obj: e,
                player: this
            })) : (this.logger.info("not muted"), this.notify(NYTD.Video.VideoEvents.UNMUTED, {
                id: this.objectId,
                obj: e,
                player: this
            }))
        },
        onMediaError: function(e) {
            this.logger.info("onMediaError"), e = e || {}, this.notify(NYTD.Video.VideoEvents.MEDIA_ERROR, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onVideoStart: function(e) {
            this.logger.info("onVideoStart", e), this.initPrePlay(), this.initialVideoPlayed || (this.initialVideoPlayed=!0), this.notify(NYTD.Video.VideoEvents.VIDEO_START, {
                id: this.objectId,
                obj: e,
                player: this
            }), this.notify(NYTD.Video.VideoEvents.STOP_OTHER_PLAYERS, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onVideoProgress: function(e) {},
        onVideoComplete: function(e) {
            this.logger.info("onVideoComplete"), this.initPostPlay(), this.loadNextContent(), this.notify(NYTD.Video.VideoEvents.VIDEO_COMPLETE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onVideoPaused: function(e) {
            e = e || {}, this.notify(NYTD.Video.VideoEvents.VIDEO_PAUSED, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaBegin: function(e) {
            this.notify(NYTD.Video.VideoEvents.MEDIA_BEGIN, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaPlay: function(e) {
            this.notify(NYTD.Video.VideoEvents.PLAY, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdComplete: function(e) {
            this.logger.info("onAdComplete", e), this.notify(NYTD.Video.VideoEvents.AD_COMPLETE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdPause: function(e) {
            this.logger.info("onAdPause", e), this.notify(NYTD.Video.VideoEvents.AD_PAUSE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdStart: function(e) {
            this.logger.info("onAdStart", e), this.notify(NYTD.Video.VideoEvents.AD_START, {
                id: this.objectId,
                obj: e,
                player: this
            }), this.notify(NYTD.Video.VideoEvents.STOP_OTHER_PLAYERS, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onExternalAd: function(e) {
            this.logger.info("onExternalAd"), this.notify(NYTD.Video.VideoEvents.EXTERNAL_AD, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdResume: function(e) {
            this.logger.info("onAdResume", e), this.notify(NYTD.Video.VideoEvents.AD_RESUME, {
                id: this.objectId,
                obj: e,
                player: this
            }), this.notify(NYTD.Video.VideoEvents.STOP_OTHER_PLAYERS, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdProgress: function(e) {
            this.notify(NYTD.Video.VideoEvents.AD_PROGRESS, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdClick: function(e) {
            this.logger.info("onAdClick", e), this.notify(NYTD.Video.VideoEvents.AD_CLICK, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdPostRollsComplete: function(e) {
            this.notify(NYTD.Video.VideoEvents.AD_POSTROLLS_COMPLETE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdReceived: function(e) {
            this.notify(NYTD.Video.VideoEvents.AD_RECEIVED, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onAdRulesReady: function(e) {
            this.notify(NYTD.Video.VideoEvents.AD_RULES_READY, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onEnterFullScreen: function(e) {
            this.notify(NYTD.Video.VideoEvents.FULLSCREEN, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onExitFullScreen: function(e) {
            this.notify(NYTD.Video.VideoEvents.EXIT_FULLSCREEN, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onDFXPLoadError: function(e) {
            this.notify(NYTD.Video.VideoEvents.DFXP_LOAD_ERROR, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onDFXPLoadSuccess: function(e) {
            this.notify(NYTD.Video.VideoEvents.DFXP_LOAD_SUCCESS, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onSearchError: function(e) {
            this.notify(NYTD.Video.VideoEvents.SEARCH_ERROR, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onSearchResult: function(e) {
            this.notify(NYTD.Video.VideoEvents.SEARCH_RESULT, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onBlogPostClick: function(e) {
            this.notify(NYTD.Video.VideoEvents.BLOG_POST_CLICK, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onCopyCode: function(e) {
            this.notify(NYTD.Video.VideoEvents.COPY_CODE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onCopyLink: function(e) {
            this.notify(NYTD.Video.VideoEvents.COPY_LINK, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onIconMenuClose: function(e) {
            this.notify(NYTD.Video.VideoEvents.ICON_MENU_CLOSE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onIconMenuOpen: function(e) {
            this.notify(NYTD.Video.VideoEvents.ICON_MENU_OPEN, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMenuPageClose: function(e) {
            this.notify(NYTD.Video.VideoEvents.MENU_PAGE_CLOSE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMenuPageOpen: function(e) {
            this.checkSocialURL(e), this.notify(NYTD.Video.VideoEvents.MENU_PAGE_OPEN, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onOverlayMenuClose: function(e) {
            this.notify(NYTD.Video.VideoEvents.OVERLAY_MENU_CLOSE, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onOverlayMenuOpen: function(e) {
            this.notify(NYTD.Video.VideoEvents.OVERLAY_MENU_OPEN, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onOverlayMenuPlayClick: function(e) {
            this.notify(NYTD.Video.VideoEvents.OVERLAY_MENU_PLAY_CLICK, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onSendEmailClick: function(e) {
            this.notify(NYTD.Video.VideoEvents.SEND_EMAIL_CLICK, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onVideoRequest: function(e) {
            this.logger.info("onVideoRequest", e), this.notify(NYTD.Video.VideoEvents.VIDEO_REQUEST, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        onMediaProgress: function(e) {
            this.notify(NYTD.Video.VideoEvents.MEDIA_PROGRESS, {
                id: this.objectId,
                obj: e,
                player: this
            })
        },
        notify: function(e, t) {
            this.subscription.notify(e, t)
        },
        checkSocialURL: function(e) {
            switch (e.args.page.toLocaleLowerCase()) {
            case"share":
            case"link":
                this.isSocialURLShortened || this.shortenSocialURL()
            }
        },
        isContentShareable: function() {
            var e = this.videoModule.getCurrentVideo(), t = e.tags, n = t.length, r=!1;
            for (var i = 0; i < n; i++)
                if (t[i] === "nyt_rights") {
                    r=!0;
                    break
                }
            return r ? (this.socialModule.enableBlogging(!0), !0) : (this.disallowEmbed(), !1)
        },
        disallowEmbed: function() {
            this.socialModule.setEmbedCode("This video cannot be embedded.")
        },
        shortenSocialURL: function() {
            this.logger.info("shortenSocialURL");
            var e = function() {
                var e = (new Date).getTime(), t = function(e) {
                    this.logger.debug("setShortenedSocialURL - received data from bit.ly", e);
                    if (!NYTD.Video.Validation.isEmpty(this.socialModule)) {
                        !NYTD.Video.Validation.isEmpty(e)&&!NYTD.Video.Validation.isEmpty(e.results)&&!NYTD.Video.Validation.isEmpty(e.results[this.defaultSocialURL]) ? (this.bitlyStack.push({
                            original: this.defaultSocialURL,
                            shortened: e.results[this.defaultSocialURL].shortUrl
                        }), this.socialModule.setLink(e.results[this.defaultSocialURL].shortUrl)) : this.defaultSocialURL ? this.socialModule.setLink(this.defaultSocialURL) : this.socialModule.setLink("An unknown error occurred."), this.isSocialURLShortened=!0;
                        if (this.menuModule.isMenuPageShowing()) {
                            this.logger.debug("setShortenedSocialURL - menuPage is showing -- close and reopen to reflect new data");
                            var t = this.menuModule.getCurrentMenuPage();
                            this.menuModule.showMenuPage(t), this.menuModule.showMenuPage(t)
                        }
                    }
                };
                if (!this.bitlyCallback) {
                    this.bitlyCallback = NYTD.Video.Utils.generateCallbackName("video_" + this.getObjectId());
                    var n = this;
                    window[this.bitlyCallback] = function(e) {
                        t.call(n, e)
                    }
                }
                if (NYTD.Video.DOCUMENT_HEAD) {
                    var r = document.createElement("script");
                    r.setAttribute("src", "http://api.bit.ly/shorten?longUrl=" + this.defaultSocialURL + "&version=2.0&apiKey=R_554ad67f3555db8156cc911a4c8e37b0&login=timespeople&format=json&callback=" + this.bitlyCallback), NYTD.Video.DOCUMENT_HEAD.appendChild(r)
                }
            };
            if (!NYTD.Video.Validation.isEmpty(this.bitlyStack) && this.bitlyStack.length > 0) {
                var t = this.bitlyStack.length, n=!1;
                for (var r = 0; r < t; r++)
                    if (this.bitlyStack[r].original === this.defaulSocialURL) {
                        this.socialModule.setLink(this.bitlyStack[r].shortened);
                        break
                    }
                n || e.call(this)
            } else 
                e.call(this)
        },
        changeVideoCaption: function() {
            this.logger.info("onContentLoadedSuper", "Media is live", this.videoModule.mediaIsLive()), NYTD.Video.Validation.isEmpty(this.defaultProps.captionContainer) || (NYTD.Video.Validation.isString(this.defaultProps.captionContainer) && (this.defaultProps.captionContainer = this.defaultProps.captionContainer.replace("#", ""), this.defaultProps.captionContainer = NYTD.Video.$("#" + this.defaultProps.captionContainer)), NYTD.Video.Validation.isEmpty(this.defaultProps.captionContainer) || (this.videoModule.mediaIsLive()&&!NYTD.Video.Validation.isEmpty(this.defaultProps.liveCaption) ? this.defaultProps.captionContainer.html(this.defaultProps.liveCaption) : this.defaultProps.captionContainer.html(this.defaultProps.vodCaption)))
        },
        queryBrightcove: function(e, t, n) {
            this.logger.info("queryBrightcove", n), NYTD.Video.Validation.isEmpty(n) && (n = this.callback);
            var r = "", i = "http://api.brightcove.com";
            document.location.protocol === "https:" && (i = "https://api.brightcove.com");
            switch (t) {
            case"referenceId":
                t = "reference_id", r = "find_video_by_reference_id";
                break;
            case"id":
                t = "id", r = "find_video_by_id";
                break;
            case"video_id":
                t = "video_id", r = "find_video_by_id";
                break;
            case"playlist_id":
                t = "id", r = "find_playlist_by_id";
                break;
            case"playlist_reference_id":
                t = "reference_id", r = "find_playlist_by_reference_id";
                break;
            default:
                t = "reference_id", r = "find_video_by_reference_id"
            }
            var s = this.defaultProps.readToken, o = document.createElement("script"), u = [i, "/services/library?command=", r, "&", t, "=", e, "&token=", s, "&callback=", n, "&media_delivery=http"];
            /find_video/.test(r) ? u.push(["&custom_fields=related_headlines%2Crelated_type%2Cvideourl%2Cseries%2Cadsensitivity&", "fields=name%2Ctags%2CdisplayName%2Cid%2CreferenceId%2CaccountId%2CshortDescription%2ClongDescription", "%2CFLVURL%2Crenditions%2CcreationDate%2CpublishedDate%2ClastModifiedDate%2CstartDate", "%2CendDate%2ClinkURL%2ClinkText%2Ctags%2CvideoStillURL%2CthumbnailURL%2Clength%2Ceconomics", "%2CcuePoints%2CplaysTotal%2CplaysTrailingWeek%2CFLVFullLength%2CvideoFullLength&get_item_count=true"].join("")) : u.push("&fields=videoIds"), o.src = u.join(""), NYTD.Video.DOCUMENT_HEAD && (this.logger.info("dropping script in head", o.src), NYTD.Video.DOCUMENT_HEAD.appendChild(o))
        },
        loadPlaylist: function() {
            var e = this, t = function(t) {
                e.logger.info("playlist loaded", t), e.videoIds = t.videoIds;
                var n = e.getFieldType();
                e.defaultProps.autoStart || e.defaultProps.overlay.backgroundImage ? e.videoModule.loadVideo(t.videoIds[0], n) : e.videoModule.cueVideo(t.videoIds[0], n)
            }, n = [this.objectId, "_playlist_cb"].join("");
            window[n] = t, this.queryBrightcove(this.defaultProps.playlistId, "playlist_reference_id", n)
        },
        hasMoreContent: function() {
            return !NYTD.Video.Validation.isEmpty(this.videoIds) && this.videoIds.length > 0 && this.current < this.videoIds.length - 1
        },
        getFieldType: function() {
            var e = "referenceId";
            return this.defaultProps.playlistId && (this.type === "html5" ? e = "video_id" : e = "id"), e
        },
        loadNextContent: function() {
            this.hasMoreContent() && (this.logger.info("loadgNextContent", this.videoIds.length, this.current), this.incrementCurrentContent(), this.loadNextVideo.call(this))
        },
        incrementCurrentContent: function() {
            this.current < this.videoIds.length - 1 && (this.logger.info("incrementCurrentContent", this.current), this.current++, this.logger.info("current index", this.current))
        },
        getNextVideo: function() {
            return this.hasMoreContent() ? this.videoIds[this.current] : null
        },
        getCurrentContent: function() {
            return this.videoIds[this.current]
        },
        loadNextVideo: function() {
            var e = this.getFieldType();
            this.defaultProps.autoPlayPlaylist ? this.videoModule.loadVideo(this.videoIds[this.current], e) : this.type === "html5" ? (this.logger.info("cueing html5 video", this.videoIds[this.current]), this.videoModule.cueVideo(this.videoIds[this.current], e, this.cueCallback)) : (this.logger.info("cueing video", this.videoIds[this.current]), this.videoModule.cueVideo(this.videoIds[this.current], e))
        },
        replaceVideoByURL: function() {
            return this.currentVideo || (this.currentVideo = this.videoModule.getCurrentVideo()), this.currentVideo.renditions = [{
                audioOnly: !1,
                defaultURL: this.defaultProps.videoURL,
                url: this.defaultProps.videoURL,
                encodingRate: 2400,
                frameWidth: this.defaultProps.width,
                frameHeight: this.defaultProps.height,
                mediaDeliveryType: 0,
                size: 7969177,
                videoCodec: this.defaultProps.videoCodec,
                videoContainer: 1
            }
            ], this.currentVideo.FLVFullLengthURL = this.defaultProps.videoURL, this.currentVideo.FLVPreviewCodec = this.defaultProps.videoCodec, this.currentVideo.displayName = this.defaultProps.displayName, this.currentVideo.shortDescription = this.defaultProps.shortDescription, this.currentVideo.longDescription = this.defaultProps.longDescription, this.currentVideo.tags = this.defaultProps.tags, this.currentVideo.length = this.defaultProps.videoLength, this.defaultProps.stillOverlay && (this.currentVideo.videoStillURL = this.defaultProps.stillOverlay, this.currentVideo.thumbnailURL = this.defaultProps.stillOverlay), this.defaultProps.overlay && this.defaultProps.overlay.backgroundImage && (this.currentVideo.videoStillURL = this.defaultProps.overlay.backgroundImage, this.currentVideo.thumbnailURL = this.defaultProps.overlay.backgroundImage), this.type === "flash" && (this.contentModule.updateMedia(this.currentVideo), this.videoModule.loadVideo(this.currentVideo.id)), this.currentVideo
        },
        setModules: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        play: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        mute: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        stop: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        pause: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        remove: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        render: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        registerEventListeners: function() {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        onContentLoaded: function(e) {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        onLoadProgress: function(e) {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        onVideoLoaded: function(e) {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        onStreamStart: function(e) {
            throw new Error("Abstract Method Error - This method should be overloaded by a subclass")
        },
        killSuper: function() {
            this.stopPolling=!0, this.resetObjectStateSuper(), this.notify(NYTD.Video.VideoEvents.DESTROYED, {
                id: this.getObjectId()
            })
        }
    }), function() {
        this.HTML5VideoPlayer = NYTD.Video.Player.AbstractVideoPlayer.extend({
            rendition: "",
            isVideoPlaying: !1,
            isVideoInitializing: !1,
            dispatchedOnStreamStart: !1,
            lastVolume: 1,
            controlsModule: null,
            firstEmbed: !0,
            html5VideoAdContainer: null,
            contentInitialized: !1,
            firstPlayTouch: !0,
            selectedRendition: null,
            initialize: function(e) {
                this.resetObjectState(), this.logger.info("initialize"), this.setModuleExperience(), this.setVideoModule(), this.setAdModule(), this.setMenuModule(), this.setSocialModule(), this.setCaptionsModule(), this.setCuePointsModule()
            },
            resetObjectState: function() {
                this.resetObjectStateSuper(), this.logger = NYTD.Video.Logger.get("NYTD.Video.HTML5VideoPlayer"), this.logger.info("resetObjectState"), this.rendition = "", this.isVideoPlaying=!1, this.isVideoInitializing=!1, this.dispatchedOnStreamStart=!1, this.type = "html5"
            },
            setModuleExperience: function() {
                var e = this;
                this.moduleExperience = {
                    ready: !1,
                    enabled: !1,
                    removeEventListener: function(e, t) {},
                    addEventListener: function(e, t) {},
                    debug: function(e) {},
                    getAdEnabled: function() {},
                    getConfiguredPropertiesForID: function(e) {},
                    getElementById: function() {},
                    getElementsByType: function(e) {},
                    getEnabled: function() {
                        return this.enabled
                    },
                    getExperienceID: function() {
                        return e.params.id
                    },
                    getExperienceURL: function() {},
                    getHeight: function() {
                        return e.object.height
                    },
                    getWidth: function() {
                        return e.object.width
                    },
                    getLayout: function() {},
                    getLayoutRoot: function() {},
                    getModules: function() {},
                    getPlayerName: function() {},
                    getPlayerParameter: function(e) {},
                    getPublisherID: function() {
                        return e.props.publisherId
                    },
                    getReady: function() {
                        return this.ready
                    },
                    getReferrerURL: function() {},
                    getStage: function() {},
                    getTranslator: function() {},
                    getUserCountry: function() {},
                    loadExperience: function() {},
                    setEnabled: function(e) {
                        this.enabled=!0
                    },
                    setSize: function(t, n) {
                        NYTD.Video.$(e.object).attr("width", t).attr("height", n), e.controlsModule && e.controlsModule.resizeControls && e.controlsModule.resizeControls(t)
                    },
                    unload: function() {
                        e.kill()
                    }
                }
            },
            setVideoModule: function() {
                var e = this;
                this.videoModule = {
                    playing: !1,
                    enabled: !1,
                    duration: 0,
                    volume: 0,
                    isPaused: !1,
                    cueVideo: function(t, n, r) {
                        e.logger.info("cueVideo", t, n, r), NYTD.Video.Validation.isEmpty(r) && (r = e.callback), e.queryBrightcove(t, n, r)
                    },
                    enableInitialBandwidthDetection: function(e) {},
                    getAlpha: function() {},
                    getBlendMode: function() {},
                    getContainer: function() {},
                    getContentTypeDisplayed: function() {
                        return e.isAdPlaying ? "ad" : "video"
                    },
                    getCSS: function() {},
                    getCurrentTypeDisplayed: function() {},
                    getCurrentRendition: function() {},
                    getCurrentVideo: function() {
                        return e.logger.info("getCurrentVideo", e.getCurrentVideo()), e.getCurrentVideo()
                    },
                    getDefaultBufferTime: function() {},
                    getDefinition: function() {},
                    getDisplayHeight: function() {
                        return e.object.height
                    },
                    getDisplayWidth: function() {
                        return e.object.width
                    },
                    getEnabled: function() {},
                    getHeight: function() {
                        return e.object.height
                    },
                    getID: function() {},
                    getIndex: function() {},
                    getInitialBandwidthDetectionEnabled: function() {},
                    getNextSibling: function() {},
                    getPreviousSibling: function() {},
                    getRotation: function() {},
                    getVideoLoadedByBytes: function() {},
                    getVideoBytesTotal: function() {},
                    getVideoDuration: function() {
                        if (e.duration > 0 || e.currentVideo && e.currentVideo.length)
                            return Math.round(e.duration) || e.currentVideo.length
                    },
                    getVideoPosition: function() {
                        if (e.object && e.isAdPlaying || e.isVideoPlaying)
                            return e.object.currentTime
                    },
                    getVisible: function() {},
                    getVolume: function() {
                        return e.object.volume
                    },
                    getWidth: function() {
                        return e.object.width
                    },
                    getX: function() {},
                    getY: function() {},
                    goFullScreen: function(t) {
                        var n = NYTD.Video.Validation.isAndroid();
                        e.object && (t===!1 || t === "false" ? typeof document.webkitCancelFullScreen == "function" ? document.webkitCancelFullScreen() : typeof document.webkitCancelFullscreen == "function" ? document.webkitCancelFullscreen() : typeof document.mozCancelFullScreen == "function" ? document.mozCancelFullScreen() : e.logger.info("Your browser does not support Exit FullScreen") : e.container && e.object && (typeof e.container.webkitRequestFullscreen == "function"&&!n ? e.container.webkitRequestFullscreen() : typeof e.container.webkitRequestFullScreen == "function"&&!n ? e.container.webkitRequestFullScreen() : typeof e.container.mozRequestFullScreen == "function"&&!n ? e.container.mozRequestFullScreen() : typeof e.object.webkitEnterFullscreen == "function" ? e.object.webkitEnterFullscreen() : typeof e.object.webkitEnterFullScreen == "function" ? e.object.webkitEnterFullScreen() : typeof e.object.mozRequestFullScreen == "function" ? e.object.mozRequestFullScreen() : e.logger.info("Your browser does not support Request FullScreen")))
                    },
                    isMuted: function() {
                        return e.object.muted
                    },
                    isPlayerDefined: function() {},
                    isPlaying: function() {
                        return e.logger.info("isPlaying"), e.logger.info("isVideoPlaying", e.isVideoPlaying), e.logger.info("isAdPlaying", e.isAdPlaying), e.isVideoPlaying || e.isAdPlaying
                    },
                    loadVideo: function(t, n, r, i) {
                        e.logger.info("loadVideo", t, n, i);
                        var s=!0;
                        if (e.isVideoPlaying)
                            e.isVideoPlaying=!1, e.isVideoInitializing=!1;
                        else if (e.isAdPlaying || e.isAdInitializing) {
                            e.adModule.stopAd();
                            if (e.freewheelModule) {
                                var o = e.getSubscription();
                                o.subscribe(NYTD.Video.Ad.Controller.HTML5AdController.SKIP_COMPLETE, NYTD.Video.Utils.bind(this.onAdSkipComplete, this, {}, {
                                    id: t,
                                    type: n,
                                    callback: i
                                })), s=!1
                            }
                        }
                        s && (NYTD.Video.Validation.isEmpty(i) && (i = e.callback), e.queryBrightcove(t, n, i))
                    },
                    onAdSkipComplete: function(t) {
                        e.logger.info("onAdSkipComplete", t);
                        var n = e.getSubscription();
                        n.cancel(NYTD.Video.Ad.Controller.HTML5AdController.SKIP_COMPLETE, NYTD.Video.Utils.bind(this.onAdSkipComplete, this)), t.id && t.type && (NYTD.Video.Validation.isEmpty(t.callback) && (t.callback = e.callback), e.queryBrightcove(t.id, t.type, t.callback))
                    },
                    mediaIsLive: function() {
                        return !e.currentVideo ||!e.currentVideo.renditions?!1 : e.currentVideo.renditions.length <= 0?!1 : e.currentVideo.renditions[0].controllerType === "AKAMAI_LIVE"
                    },
                    move: function(e, t, n) {},
                    mute: function(t) {
                        e.logger.info("mute", t), e.object && (t ? (e.logger.info("muting...."), this.volume = this.getVolume(), NYTD.Video.$(e.object).attr("muted", !0), this.isMuted=!0) : (e.logger.info("unmuting..."), NYTD.Video.$(e.object).attr("muted", !1), e.videoModule.setVolume(this.volume), this.isMuted=!1))
                    },
                    pause: function(t) {
                        e.logger.info("pause - pausing (pause, isAdPlaying, isVideoPlaying, isAdInitializing)", t, e.isAdPlaying, e.isVideoPlaying, e.isAdInitializing), t ? e.object && e.isAdPlaying || e.isVideoPlaying || e.isAdInitializing ? (e.logger.info("pause"), e.object.pause(), this.isPaused=!0) : e.logger.info("nothing playing, do NOT pause") : (e.logger.info("pause - resume", t), this.play(), this.isPaused=!1)
                    },
                    play: function() {
                        e.logger.info("play"), e.object && (e.autoPlay(), this.isPaused=!1)
                    },
                    removeUserMessage: function() {},
                    seek: function(t) {
                        e.logger.info("seek", e, e.object), e && e.object.seekable&&!e.videoModule.mediaIsLive()&&!e.isAdPlaying&&!e.isAdInitializing && (e.logger.info("seeking"), e.object.currentTime = t)
                    },
                    setAlpha: function() {},
                    setBlendMode: function() {},
                    setConnectOnLoad: function() {},
                    setDefaultBufferTime: function() {},
                    setEnabled: function() {},
                    setRenditionSelectionCallback: function() {},
                    setRotation: function(e) {},
                    setSize: function(t, n) {
                        e.object.setAttribute("width", t), e.object.setAttribute("height", n), NYTD.Video.$(e.container).css("width", t).css("height", n), e.poster && e.poster.resize(t, n), e.controlsModule && e.controlsModule.resizeControls && e.controlsModule.resizeControls(t)
                    },
                    setStyles: function(e) {},
                    setVideoFilter: function() {},
                    setVisible: function(t) {
                        e.object.style.visibility = e.visible===!0 ? "visible" : "hidden"
                    },
                    setVolume: function(t) {
                        e.object && (e.logger.info("setVolume", t), e.object.volume = t)
                    },
                    showVolumeControls: function(e) {},
                    stop: function() {
                        e.object && (e.isVideoPlaying || e.isAdPlaying) && e.object.pause()
                    },
                    toggleMenuPage: function(e, t) {},
                    toggleVolumeControls: function() {}
                }
            },
            setMenuModule: function() {
                var e = this;
                this.menuModule = {
                    closeMenuPage: function() {},
                    getAdditionalMediaForType: function(e) {},
                    getCurrentMenuPage: function() {},
                    getOverlayMenuVisible: function() {},
                    isMenuPageShowing: function() {},
                    isOverlayMenuShowing: function() {},
                    removeOverlayMenu: function() {},
                    setAdditionalMediaCallback: function(e, t, n) {},
                    setOverlayMenuVisible: function(e) {},
                    showMenuPage: function(e) {}
                }
            },
            setAdModule: function() {
                var e = this, t=!1;
                this.adModule = {
                    allowThirdPartyControl: function(e) {},
                    disableForExternalAd: function() {
                        this.externalAdsEnabled=!1
                    },
                    enableAdFormats: function() {
                        var e = arguments.length;
                        for (var t = 0; t < e; t++);
                    },
                    enableExternalAds: function() {
                        this.externalAdsEnabled=!0
                    },
                    getAdPolicy: function() {},
                    getCurrentAdProperties: function() {
                        var t = {}, n;
                        return e.freewheelModule && e.freewheelModule.lastAdDuration ? t.duration = e.freewheelModule.lastAdDuration : e.object && (t.duration = e.object.duration), isNaN(t.duration) && (t.duration = 0), t
                    },
                    getCurrentAdRules: function() {},
                    getCurrentAdTranslator: function() {},
                    getEnabledAdFormats: function() {},
                    getExternalAdsEnabled: function() {
                        return this.defaultProps.adxPagename && this.defaultProps.adxPositions
                    },
                    getOverrideAdsEnabled: function() {},
                    getShowSponsorMessage: function() {},
                    getStayInFullScreen: function() {},
                    getThirdPartyTime: function() {},
                    requestAd: function(e, t) {},
                    resumeAfterExternalAd: function() {
                        e.autoPlay()
                    },
                    setAdPolicy: function(e) {},
                    setAdRules: function(e) {},
                    setAdTranslator: function(e) {},
                    setStayInFullScreen: function(e) {},
                    setThirdPartyTime: function(e) {},
                    showAd: function(t) {
                        e.isAdSupported || e.onAdComplete(null)
                    },
                    showSponsorMessage: function() {},
                    stopAd: function() {
                        e.logger.debug("stopAd if ad is playing", e.isAdPlaying), e.isAdPlaying && (e.logger.debug("stopAd"), e.isVideoInitializing=!0, e.adxModule ? e.adxModule.stopAd() : e.freewheelModule && e.freewheelModule.stopAd())
                    }
                }
            },
            setContentModule: function() {
                var e = this;
                this.contentModule = {
                    appendArgsToMediaRequest: function(e) {},
                    createRuntimeMediaCollection: function(e, t) {},
                    getAllMediaCollectionIDs: function(e) {},
                    getAllMediaCollections: function(e) {},
                    getMedia: function(e, t) {},
                    getMediaAsynch: function(e, t) {},
                    getMediaCollectionAsynch: function(e, t, n, r) {},
                    getMediaInGroupAsynch: function(e, t) {},
                    getProgrammingForTarget: function(e) {},
                    purgeAllContent: function() {},
                    purgeMedia: function() {},
                    purgeMediaCollection: function() {},
                    updateMedia: function() {}
                }
            },
            setSocialModule: function() {
                var e = this;
                this.socialModule = {
                    enableBlogging: function(e) {},
                    getEmbedCode: function(t) {
                        return e.props.embedCode
                    },
                    getLink: function() {},
                    isURLShortenedForMedia: function(e) {},
                    setEmbedCode: function(e) {},
                    setLink: function(e) {},
                    shareVideoViaEmail: function(e, t, n) {}
                }
            },
            setCaptionsModule: function() {
                this.captionsModule = {}
            },
            setCuePointsModule: function() {
                this.cuePointsModule = {}
            },
            setControlsModule: function() {
                var e = this;
                this.controlsModule = {
                    videoControls: null,
                    $videoControls: null,
                    $videoControlsPlay: null,
                    $videoControlsCurrentTime: null,
                    $videoControlsMaxDuration: null,
                    $videoControlsProgress: null,
                    $videoControlsProgressBufferBar: null,
                    $videoControlsProgressTimeBar: null,
                    $videoControlsProgressTimeIcon: null,
                    $videoControlsMuteButton: null,
                    $videoControlsVolume: null,
                    $videoControlsVolumeBar: null,
                    $videoControlsFullScreen: null,
                    $videoControlsAdvertisement: null,
                    $videoControlsLive: null,
                    timeDrag: !1,
                    volumeDrag: !1,
                    videoControlsCSS: NYTD.Video.BaseURL + "/css/0.1/screen/common/modules/video/controls.css",
                    controlsTimeout: null,
                    buildControls: function() {
                        this.videoControls = document.createElement("div"), this.$videoControls = NYTD.Video.$(this.videoControls), this.$videoControls.addClass("videoControls"), this.$videoControls.attr("id", "videoControls"), this.$videoControlsPlay = NYTD.Video.$(document.createElement("a")), this.$videoControlsPlay.addClass("videoControlsPlay"), this.$videoControlsPlay.addClass("play"), this.$videoControlsPlay.attr("title", "Play"), this.$videoControlsPlay.html("<span>Play</span>"), this.$videoControlsCurrentTime = NYTD.Video.$(document.createElement("span")), this.$videoControlsCurrentTime.addClass("videoControlsCurrentTime"), this.$videoControlsCurrentTime.html("00:00"), this.$videoControlsMaxDuration = NYTD.Video.$(document.createElement("span")), this.$videoControlsMaxDuration.addClass("videoControlsMaxDuration"), this.$videoControlsMaxDuration.html("00:00"), this.$videoControlsProgress = NYTD.Video.$(document.createElement("div")), this.$videoControlsProgress.addClass("videoControlsProgress"), this.$videoControlsProgressBufferBar = NYTD.Video.$(document.createElement("span")), this.$videoControlsProgressBufferBar.addClass("videoControlsProgressBufferBar"), this.$videoControlsProgressTimeBar = NYTD.Video.$(document.createElement("span")), this.$videoControlsProgressTimeBar.addClass("videoControlsProgressTimeBar"), this.$videoControlsProgressTimeIcon = NYTD.Video.$(document.createElement("span")), this.$videoControlsProgressTimeIcon.addClass("videoControlsProgressTimeIcon"), this.$videoControlsProgress.append(this.$videoControlsProgressBufferBar), this.$videoControlsProgress.append(this.$videoControlsProgressTimeBar), this.$videoControlsProgress.append(this.$videoControlsProgressTimeIcon), this.$videoControlsAdvertisement = NYTD.Video.$(document.createElement("span")), this.$videoControlsAdvertisement.addClass("videoControlsAdvertisement"), this.$videoControlsAdvertisement.html("Advertisement"), this.$videoControlsAdvertisement.css("display", "none"), this.$videoControlsLive = NYTD.Video.$(document.createElement("span")), this.$videoControlsLive.addClass("videoControlsLive"), this.$videoControlsLive.html("Live"), this.$videoControlsLive.css("display", "none"), !NYTD.Video.Validation.isIOS()&&!NYTD.Video.Validation.isAndroid() && (this.$videoControlsMuteButton = NYTD.Video.$(document.createElement("div")), this.$videoControlsMuteButton.addClass("videoControlsMuteButton"), e.defaultProps.width > 337), this.$videoControlsFullScreen = NYTD.Video.$(document.createElement("div")), this.$videoControlsFullScreen.addClass("videoControlsFullScreen"), this.$videoControlsFullScreen.attr("title", "Fullscreen"), this.$videoControls.append(this.$videoControlsPlay), this.$videoControls.append(this.$videoControlsAdvertisement), this.$videoControls.append(this.$videoControlsLive), this.$videoControls.append(this.$videoControlsCurrentTime), this.$videoControls.append(this.$videoControlsProgress), this.$videoControls.append(this.$videoControlsMaxDuration), this.$videoControlsMuteButton !== null ? (this.$videoControls.append(this.$videoControlsMuteButton), this.$videoControlsVolume !== null && this.$videoControls.append(this.$videoControlsVolume)) : this.$videoControls.addClass("videoControlsIOS"), e.isFullScreenSupported() && this.$videoControls.append(this.$videoControlsFullScreen)
                    },
                    resizeControls: function(t) {
                        var n = t || e.defaultProps.width;
                        n.toString().indexOf("%")!==-1 && (n = NYTD.Video.$(e.container).width());
                        var r = 54, i = 50, s = 50, o = 42, u = 40, a = 46, f = 0;
                        f += r, f += i, f += s, this.$videoControlsMuteButton !== null && (f += o), this.$videoControlsVolume !== null && (f += u), e.isFullScreenSupported() ? f += a : this.$videoControlsVolume !== null ? f += 24 : f += 12;
                        var l = n - f;
                        this.$videoControlsProgress.css("width", l + "px"), this.$videoControlsAdvertisement.css("width", parseInt(l, 10) + parseInt(i, 10) + "px"), this.$videoControlsLive.css("width", parseInt(l, 10) + parseInt(s, 10) + parseInt(i, 10) + "px");
                        if (e.object) {
                            var c = 100 * e.object.currentTime / e.object.duration;
                            isNaN(c) || this.updateTimeBar(c)
                        }
                    },
                    loadControlsCSS: function() {
                        NYTD.Video.$("head").append('<link rel="stylesheet" type="text/css" href="' + this.videoControlsCSS + '">')
                    },
                    addControls: function() {
                        this.videoControls === null && this.buildControls(), e.container.appendChild(this.videoControls), this.registerControls(), this.resizeControls(e.defaultProps.width)
                    },
                    removeControls: function() {
                        this.$videoControls && typeof this.$videoControls.remove == "function" && this.$videoControls.remove()
                    },
                    showControls: function() {
                        this.$videoControls.show()
                    },
                    hideControls: function() {
                        this.$videoControls.hide()
                    },
                    fadeInControls: function() {
                        clearInterval(this.controlsTimeout), this.$videoControls.removeClass("videoControlsHide"), NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isAndroid() ? e.controlsModule.startFadeOutTimer(6e3) : e.controlsModule.$videoControls.hasClass("videoControlsHover") || e.controlsModule.startFadeOutTimer(6e3)
                    },
                    fadeOutControls: function() {
                        if (NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isAndroid()) {
                            if (!e.isAdPlaying ||!e.object.paused)
                                this.$videoControls.hasClass("videoControlsHide") || this.$videoControls.addClass("videoControlsHide")
                        } else 
                            this.$videoControls.hasClass("videoControlsHide") || this.$videoControls.addClass("videoControlsHide")
                    },
                    startFadeOutTimer: function(t) {
                        var n = t || 100;
                        clearInterval(this.controlsTimeout), this.controlsTimeout = setTimeout(function() {
                            e.controlsModule.fadeOutControls()
                        }, n)
                    },
                    registerControls: function() {
                        this.$videoControls.hover(function(t) {
                            e.controlsModule.$videoControls.addClass("videoControlsHover")
                        }, function(t) {
                            e.controlsModule.$videoControls.removeClass("videoControlsHover")
                        }), this.$videoControlsPlay.on("click", function(t) {
                            return e.playpause(), t.preventDefault(), !1
                        }), this.$videoControlsCurrentTime.on("mousedown", function(e) {
                            return e.preventDefault(), !1
                        }), this.$videoControlsMaxDuration.on("mousedown", function(e) {
                            return e.preventDefault(), !1
                        }), this.$videoControlsProgress.on("mousedown", function(t) {
                            return e.controlsModule.timeDrag=!0, e.controlsModule.userUpdateTimeBar(t.pageX), t.preventDefault(), !1
                        }), NYTD.Video.$(document).on("mouseup", function(t) {
                            e.controlsModule.timeDrag && (e.controlsModule.timeDrag=!1, e.controlsModule.userUpdateTimeBar(t.pageX))
                        }), NYTD.Video.$(document).on("mousemove", function(t) {
                            e.controlsModule.timeDrag && e.controlsModule.userUpdateTimeBar(t.pageX)
                        }), this.$videoControlsProgress.on("touchstart", function(t) {
                            e.logger.info("touchstart", t), t.preventDefault(), e.controlsModule.timeTouchDrag=!0;
                            if (t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length === 1) {
                                var n = t.originalEvent.touches[0];
                                e.controlsModule.userUpdateTimeBar(n.pageX)
                            }
                        }), this.$videoControlsProgress.on("touchend", function(t) {
                            e.logger.info("touchend", t), t.preventDefault();
                            if (e.controlsModule.timeTouchDrag) {
                                e.controlsModule.timeTouchDrag=!1;
                                if (t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length === 1) {
                                    var n = t.originalEvent.touches[0];
                                    e.controlsModule.userUpdateTimeBar(n.pageX)
                                }
                            }
                        }), this.$videoControlsProgress.on("touchcancel", function(t) {
                            e.logger.info("touchcancel", t), t.preventDefault();
                            if (e.controlsModule.timeTouchDrag) {
                                e.controlsModule.timeTouchDrag=!1;
                                if (t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length === 1) {
                                    var n = t.originalEvent.touches[0];
                                    e.controlsModule.userUpdateTimeBar(n.pageX)
                                }
                            }
                        }), this.$videoControlsProgress.on("touchmove", function(t) {
                            e.logger.info("touchmove", t), t.preventDefault();
                            if (e.controlsModule.timeTouchDrag && t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length === 1) {
                                var n = t.originalEvent.touches[0];
                                e.controlsModule.userUpdateTimeBar(n.pageX)
                            }
                            return !1
                        }), this.$videoControlsMuteButton && this.$videoControlsMuteButton.on("click", function(t) {
                            e.logger.info("mute toggle", e.object.muted), e.object && (e.object.muted=!e.object.muted)
                        }), this.$videoControlsVolume && (this.$videoControlsVolume.on("mousedown", function(t) {
                            return e.controlsModule.volumeDrag=!0, e.object.muted=!1, e.controlsModule.userUpdateVolume(t.pageX), t.preventDefault(), !1
                        }), NYTD.Video.$(document).on("mouseup", function(t) {
                            e.controlsModule.volumeDrag && (e.controlsModule.volumeDrag=!1, e.controlsModule.userUpdateVolume(t.pageX))
                        }), NYTD.Video.$(document).on("mousemove", function(t) {
                            e.controlsModule.volumeDrag && e.controlsModule.userUpdateVolume(t.pageX)
                        })), this.$videoControlsFullScreen && this.$videoControlsFullScreen.on("click", function(t) {
                            e.logger.info("FullScreen Clicked"), e.isDocumentInFullScreenMode() ? e.videoModule.goFullScreen(!1) : e.videoModule.goFullScreen(!0)
                        }), e.object && (!NYTD.Video.Validation.isIOS()&&!NYTD.Video.Validation.isAndroid() ? (NYTD.Video.$(e.object).on("mouseenter", function(t) {
                            e.controlsModule.fadeInControls()
                        }), NYTD.Video.$(e.object).on("mouseleave", function(t) {
                            e.controlsModule.startFadeOutTimer()
                        }), NYTD.Video.$(e.object).on("mousemove", function(t) {
                            e.controlsModule.$videoControls.hasClass("videoControlsHide") && e.controlsModule.fadeInControls()
                        }), this.$videoControls.on("mouseenter", function(t) {
                            e.controlsModule.fadeInControls()
                        }), this.$videoControls.on("mouseleave", function(t) {
                            e.controlsModule.startFadeOutTimer()
                        })) : (NYTD.Video.$(e.object).on("touchend", function(t) {
                            e.logger.info("touchend video"), NYTD.Video.Validation.isAndroid() || (e.logger.info("prevent default"), t.preventDefault()), e.isAdPlaying ? e.controlsModule.fadeInControls() : e.controlsModule.$videoControls.hasClass("videoControlsHide") ? e.controlsModule.fadeInControls() : e.controlsModule.startFadeOutTimer(100)
                        }), (NYTD.Video.Validation.isAndroid() || NYTD.Video.Validation.isIOS()) && NYTD.Video.$(e.object).on("touchstart", function(t) {
                            return e.logger.info("touchstart video", e.firstPlayTouch), e.firstPlayTouch ? (e.logger.info("preventDefault"), t.preventDefault(), e.object.play(), e.firstPlayTouch=!1, e.logger.info("return false"), !1) : (e.logger.info("return true"), !0)
                        }), this.$videoControls.on("touchend", function(t) {
                            e.controlsModule.fadeInControls()
                        })))
                    },
                    configureForAd: function() {
                        this.$videoControlsProgress.hide(), this.$videoControlsCurrentTime.hide(), this.$videoControlsMaxDuration.show(), this.$videoControlsAdvertisement.show(), this.$videoControlsLive.hide()
                    },
                    configureForVideo: function() {
                        this.$videoControlsProgress.show(), this.$videoControlsCurrentTime.show(), this.$videoControlsMaxDuration.show(), this.$videoControlsAdvertisement.hide(), this.$videoControlsLive.hide()
                    },
                    configureForLiveVideo: function() {
                        this.$videoControlsProgress.hide(), this.$videoControlsCurrentTime.hide(), this.$videoControlsMaxDuration.hide(), this.$videoControlsAdvertisement.hide(), this.$videoControlsLive.show()
                    },
                    userUpdateTimeBar: function(t) {
                        if (e.object && this.$videoControlsProgress) {
                            var n = e.object.duration, r = t - this.$videoControlsProgress.offset().left, i = 100 * r / this.$videoControlsProgress.width();
                            i = i > 100 ? 100 : i < 0 ? 0 : i, this.updateTimeBar(i), e.object.currentTime = n * i / 100
                        }
                    },
                    userUpdateVolume: function(t) {
                        if (e.object && this.$videoControlsVolume) {
                            var n = 0, r = t - this.$videoControlsVolume.offset().left;
                            n = 100 * (r / this.$videoControlsVolume.width()), n = n > 100 ? 100 : n < 0 ? 0 : n, e.object.volume = n / 100
                        }
                    },
                    updateTime: function(e) {
                        this.$videoControlsCurrentTime.text(e)
                    },
                    updateDuration: function(e) {
                        this.$videoControlsMaxDuration.text(e)
                    },
                    updateBufferBar: function(e) {
                        this.$videoControlsProgressBufferBar.css("width", e + "%")
                    },
                    updateTimeBar: function(e) {
                        var t = Math.floor(e / 100 * (this.$videoControlsProgress.width() - 14) + 7);
                        this.$videoControlsProgressTimeBar.css("width", t + "px"), this.$videoControlsProgressTimeIcon.css("left", t + "px")
                    },
                    updatePlayPauseButton: function() {
                        e.object && (e.object.paused || e.object.ended ? (this.$videoControlsPlay.addClass("play"), this.$videoControlsPlay.removeClass("pause"), this.$videoControlsPlay.html("<span>Play</span>"), this.$videoControlsPlay.attr("title", "Play")) : (this.$videoControlsPlay.addClass("pause"), this.$videoControlsPlay.removeClass("play"), this.$videoControlsPlay.html("<span>Pause</span>"), this.$videoControlsPlay.attr("title", "Pause")))
                    },
                    updateVolumeBar: function(e) {
                        var t = e * 100;
                        this.$videoControlsVolumeBar && this.$videoControlsVolumeBar.css("width", t + "%"), this.updateVolumeMuteButton()
                    },
                    updateVolumeMuteButton: function() {
                        e.logger.info("updateVolumeMuteButton"), e.object && (e.object.muted ? (this.$videoControlsMuteButton && (this.$videoControlsMuteButton.addClass("videoControlsMuteButtonNoVolume"), this.$videoControlsMuteButton.attr("title", "Unmute")), this.$videoControlsVolumeBar && this.$videoControlsVolumeBar.css("width", "0%")) : this.$videoControlsMuteButton && (this.$videoControlsMuteButton.removeClass("videoControlsMuteButtonNoVolume"), this.$videoControlsMuteButton.removeClass("videoControlsMuteButtonMaxVolume"), this.$videoControlsMuteButton.removeClass("videoControlsMuteButtonMidVolume"), e.object.volume === 0 ? (this.$videoControlsMuteButton.addClass("videoControlsMuteButtonNoVolume"), this.$videoControlsMuteButton.attr("title", "Unmute")) : e.object.volume > .5 ? this.$videoControlsMuteButton.addClass("videoControlsMuteButtonMaxVolume") : this.$videoControlsMuteButton.addClass("videoControlsMuteButtonMidVolume"), e.object.volume !== 0 && this.$videoControlsMuteButton.attr("title", "Mute")))
                    },
                    updateFullScreen: function() {
                        e.logger.info("updateFullScreen: isInFullScreen", e.isDocumentInFullScreenMode()), e.isDocumentInFullScreenMode()===!0 ? (this.$videoControlsFullScreen.addClass("videoControlsExitFullScreen"), this.$videoControlsFullScreen.attr("title", "Exit Fullscreen")) : (this.$videoControlsFullScreen.removeClass("videoControlsExitFullScreen"), this.$videoControlsFullScreen.attr("title", "Fullscreen"))
                    }
                }, this.controlsModule.loadControlsCSS()
            },
            registerEventListeners: function() {
                this.logger.debug("registerEventListeners"), NYTD.Video.$(this.object).bind("loadstart", NYTD.Video.Utils.bind(this.onLoadStart, this)).bind("loadedmetadata", NYTD.Video.Utils.bind(this.onLoadedMetaData, this)).bind("loadeddata", NYTD.Video.Utils.bind(this.onLoadedData, this)).bind("error", NYTD.Video.Utils.bind(this.onError, this)).bind("emptied", NYTD.Video.Utils.bind(this.onEmptied, this)).bind("play", NYTD.Video.Utils.bind(this.onPlay, this)).bind("playing", NYTD.Video.Utils.bind(this.onPlaying, this)).bind("pause", NYTD.Video.Utils.bind(this.onPause, this)).bind("canplay", NYTD.Video.Utils.bind(this.onCanPlay, this)).bind("canplaythrough", NYTD.Video.Utils.bind(this.onCanPlayThrough, this)).bind("stalled", NYTD.Video.Utils.bind(this.onStalled, this)).bind("waiting", NYTD.Video.Utils.bind(this.onWaiting, this)).bind("timeupdate", NYTD.Video.Utils.bind(this.onTimeUpdate, this)).bind("volumechange", NYTD.Video.Utils.bind(this.onVolumeChange, this)).bind("durationchange", NYTD.Video.Utils.bind(this.onDurationChange, this)).bind("dataunavailable", NYTD.Video.Utils.bind(this.onError, this)).bind("webkitendfullscreen", NYTD.Video.Utils.bind(this.onWebKitEndFullScreen, this)).bind("webkitbeginfullscreen", NYTD.Video.Utils.bind(this.onWebKitBeginFullScreen, this)).bind("seeked", NYTD.Video.Utils.bind(this.onMediaSeek, this)).bind("contextmenu", NYTD.Video.Utils.bind(this.onContextMenuClicked, this)), NYTD.Video.$(document).bind("webkitfullscreenchange", NYTD.Video.Utils.bind(this.onWebKitFullScreenChange, this)), NYTD.Video.$(document).bind("mozfullscreenchange", NYTD.Video.Utils.bind(this.onMozFullScreenChange, this)), this.defaultProps.width.toString().indexOf("%")!==-1 && NYTD.Video.$(window).bind("resize", NYTD.Video.Utils.bind(this.onResize, this))
            },
            registerProgressListener: function() {
                this.logger.debug("registerProgressListener"), NYTD.Video.$(this.object).bind("progress", NYTD.Video.Utils.bind(this.onLoadProgress, this))
            },
            unregisterProgressListener: function() {
                this.logger.debug("unregisterProgressListener"), this.object.removeEventListener("progress", NYTD.Video.Utils.bind(this.onLoadProgress, this))
            },
            unregisterEventListeners: function() {
                this.logger.debug("unregisterEventListeners"), NYTD.Video.$(this.object).unbind("loadstart", NYTD.Video.Utils.bind(this.onLoadStart, this)).unbind("loadedmetadata", NYTD.Video.Utils.bind(this.onLoadedMetaData, this)).unbind("loadeddata", NYTD.Video.Utils.bind(this.onLoadedData, this)).unbind("error", NYTD.Video.Utils.bind(this.onError, this)).unbind("emptied", NYTD.Video.Utils.bind(this.onEmptied, this)).unbind("play", NYTD.Video.Utils.bind(this.onPlay, this)).unbind("playing", NYTD.Video.Utils.bind(this.onPlaying, this)).unbind("pause", NYTD.Video.Utils.bind(this.onPause, this)).unbind("canplay", NYTD.Video.Utils.bind(this.onCanPlay, this)).unbind("canplaythrough", NYTD.Video.Utils.bind(this.onCanPlayThrough, this)).unbind("stalled", NYTD.Video.Utils.bind(this.onStalled, this)).unbind("waiting", NYTD.Video.Utils.bind(this.onWaiting, this)).unbind("timeupdate", NYTD.Video.Utils.bind(this.onTimeUpdate, this)).unbind("volumechange", NYTD.Video.Utils.bind(this.onVolumeChange, this)).unbind("durationchange", NYTD.Video.Utils.bind(this.onDurationChange, this)).unbind("dataunavailable", NYTD.Video.Utils.bind(this.onError, this)).unbind("webkitendfullscreen", NYTD.Video.Utils.bind(this.onWebKitEndFullScreen, this)).unbind("webkitbeginfullscreen", NYTD.Video.Utils.bind(this.onWebKitBeginFullScreen, this)).unbind("seeked", NYTD.Video.Utils.bind(this.onMediaSeek, this)).unbind("contextmenu", NYTD.Video.Utils.bind(this.onContextMenuClicked, this)), NYTD.Video.$(document).unbind("webkitfullscreenchange", NYTD.Video.Utils.bind(this.onWebKitFullScreenChange, this)), NYTD.Video.$(document).unbind("mozfullscreenchange", NYTD.Video.Utils.bind(this.onMozFullScreenChange, this)), this.defaultProps.width.toString().indexOf("%")!==-1 && NYTD.Video.$(window).unbind("resize", NYTD.Video.Utils.bind(this.onResize, this))
            },
            onContextMenuClicked: function() {
                return this.logger.debug("context menu clicked"), !1
            },
            setAutoPoster: function() {
                window[this.cuePosterCallback] = NYTD.Video.Utils.bind(this.onContentLoadedCuePoster, this), NYTD.Video.Validation.isEmpty(this.defaultProps.playlistId) && (this.logger.info("Querying Brightcove For Poster..."), this.queryBrightcove(this.getCurrentContent(), "referenceId", this.cuePosterCallback))
            },
            setContentLoadCallbacks: function() {
                window[this.callback] = NYTD.Video.Utils.bind(this.onContentLoaded, this), window[this.cueCallback] = NYTD.Video.Utils.bind(this.onContentLoadedCue, this)
            },
            start: function() {
                this.logger.debug("start"), this.onRendered(null), this.onTemplateLoaded(null), this.onTemplateReady(null), this.registerPlayEvent(), NYTD.Video.Validation.isEmpty(this.defaultProps.playlistId) && (this.logger.info("Loading content..."), this.defaultProps.autoStart ? (this.logger.info("Querying brightcove..."), this.queryBrightcove(this.getCurrentContent())) : this.defaultProps.autoPosterFrame&&!this.defaultProps.autoStart&&!this.defaultProps.autoRender ||!this.defaultProps.autoStart && this.defaultProps.autoRender ? (this.logger.info("Using Video Data Already Loaded from Brightcove for posterframe..."), this.currentVideo ? this.onContentLoadedCue(this.currentVideo) : this.queryBrightcove(this.getCurrentContent(), "referenceId", this.cueCallback)) : (this.logger.info("Cueuing Brightcove..."), this.queryBrightcove(this.getCurrentContent(), "referenceId", this.cueCallback)))
            },
            render: function() {
                this.logger.debug("render"), this.defaultProps.useNativeControls || this.setControlsModule(), this.setContentLoadCallbacks(), this.drawObject(), this.container.appendChild(this.object), NYTD.Video.$(this.container).addClass("html5VideoContainer"), NYTD.Video.$(this.container).addClass("html5VideoLoading"), this.html5VideoAdContainer = document.createElement("div"), NYTD.Video.$(this.html5VideoAdContainer).addClass("html5VideoAdContainer"), this.container.appendChild(this.html5VideoAdContainer), !this.defaultProps.useNativeControls && this.controlsModule && (this.controlsModule.addControls(), this.defaultProps.overlay.backgroundImage || this.defaultProps.autoPosterFrame&&!this.defaultProps.autoStart&&!this.defaultProps.autoRender ||!this.defaultProps.autoStart && this.defaultProps.autoRender ? (this.controlsModule.hideControls(), this.controlsModule.$videoControls.addClass("videoControlsHide")) : this.controlsModule.fadeInControls()), this.moduleExperience.ready=!0, this.moduleExperience.enabled=!0, this.registerEventListeners();
                var e = this;
                setTimeout(function() {
                    e.start()
                }, 1e3)
            },
            drawObject: function() {
                this.logger.info("drawObject"), this.object = document.createElement("video"), this.defaultProps.useNativeControls===!0 ? this.object.controls=!0 : this.object.controls=!1;
                var e = NYTD.Video.$(this.object);
                e.attr("width", this.defaultProps.width).attr("height", this.defaultProps.height).attr("id", this.defaultProps.id), (this.defaultProps.autoStart===!0 || this.defaultProps.autoStart === "true")&&!this.defaultProps.enableHTML5Ads && e.attr("autoplay", "autoplay"), this.defaultProps.useNativeControls===!0 && e.attr("controls", "controls");
                var t = NYTD.Video.Utils.getDeviceType().toLowerCase();
                (t && t === "ipad" || t === "iphone") && e.attr("x-webkit-airplay", "allow"), t && t === "iphone" && (this.logger.info("add webkit-playsinline"), e.attr("webkit-playsinline", "webkit-playsinline")), this.defaultProps.width.toString().indexOf("%")!==-1 && (this.defaultProps.preserveAspectRatio || e.css({
                    position: "relative"
                }), navigator.appVersion.indexOf("MSIE")!==-1 && e.css({
                    width: this.defaultProps.width,
                    height: this.defaultProps.height
                })), (this.defaultProps.overlay.backgroundImage || this.defaultProps.autoPosterFrame&&!this.defaultProps.autoStart&&!this.defaultProps.autoRender ||!this.defaultProps.autoStart && this.defaultProps.autoRender) && e.hide()
            },
            registerPlayEvent: function() {
                this.logger.info("registeredPlayEvent"), NYTD.Video.$(this.object).bind("ended", NYTD.Video.Utils.bind(this.onEnded, this));
                var e = this.getSubscription();
                if (!NYTD.Video.Validation.isEmpty(this.adxModule) ||!NYTD.Video.Validation.isEmpty(this.freewheelModule))
                    e.subscribe(NYTD.Video.Ad.Controller.HTML5AdController.STARTED, NYTD.Video.Utils.bind(this.onAdPlaying, this)), e.subscribe(NYTD.Video.Ad.Controller.HTML5AdController.COMPLETE, NYTD.Video.Utils.bind(this.onAdPlayComplete, this)), e.subscribe(NYTD.Video.Ad.Controller.HTML5AdController.PAUSED, NYTD.Video.Utils.bind(this.onAdPaused, this)), e.subscribe(NYTD.Video.Ad.Controller.HTML5AdController.ERROR, NYTD.Video.Utils.bind(this.onAdError, this))
            },
            pause: function(e) {
                NYTD.Video.Validation.isEmpty(e) && (e=!0), this.videoModule.pause(e)
            },
            playpause: function() {
                this.logger.info("playpause"), this.object && (this.object.paused || this.object.ended ? this.object.play() : this.object.pause())
            },
            resume: function() {
                this.pause(!1)
            },
            mute: function(e) {
                NYTD.Video.Validation.isEmpty(e) && (e=!this.videoModule.isMuted), this.muteFunctionCalled=!0, this.videoModule.mute(e)
            },
            unmute: function() {
                this.unmuteFunctionCalled=!0, this.videoModule.mute(!1)
            },
            getVolume: function() {
                return this.videoModule.getVolume()
            },
            setVolume: function(e) {
                this.videoModule.setVolume(e)
            },
            getDuration: function() {
                return this.videoModule.getVideoDuration()
            },
            getPosition: function() {
                return this.videoModule.getVideoPosition()
            },
            seek: function(e) {
                this.videoModule.seek(e)
            },
            stop: function() {
                this.videoModule.stop()
            },
            isPlaying: function() {
                return this.isAdPlaying || this.isPlayingVideo
            },
            getNetworkState: function() {
                return this.object.networkState
            },
            getReadyState: function() {
                return this.object.readyState
            },
            getPaused: function() {
                return this.object.paused
            },
            getCurrentTime: function() {
                return this.object.currentTime
            },
            getBuffered: function() {
                return this.object.buffered
            },
            autoStart: function() {
                return this.defaultProps.autoStart===!0 || this.defaultProps.autoStart === "true"
            },
            autoPlay: function() {
                this.logger.info("autoPlay");
                if (document.createEvent) {
                    var e = this, t = function(n) {
                        NYTD.Video.$(this).unbind("click", t), e.object.play()
                    };
                    NYTD.Video.$(this.object).bind("click", t);
                    var n = document.createEvent("MouseEvents");
                    n && n.initMouseEvent && (n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 2, this.object), this.object.dispatchEvent(n))
                }
            },
            autoClickVideo: function(e) {
                this.logger.info("autoClickVideo", e);
                if (document.createEvent) {
                    var t = this, n = e, r = function(e) {
                        NYTD.Video.$(this).unbind("click", r), typeof n == "function" && n()
                    };
                    NYTD.Video.$(this.object).bind("click", r);
                    var i = document.createEvent("MouseEvents");
                    i && i.initMouseEvent && (i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 2, this.object), this.object.dispatchEvent(i))
                }
            },
            initEndedEvent: function() {
                this.logger.info("initEndedEvent");
                if (document.createEvent) {
                    var e = this, t = document.createEvent("Event");
                    t.initEvent("ended", !0, !0), this.object.dispatchEvent(t)
                }
            },
            loadLiveVideo: function() {
                this.logger.info("loadLiveVideo");
                if (this.currentVideo && this.currentVideo.customFields && this.currentVideo.customFields.videourl) {
                    this.logger.info("loadLiveVideo ", this.currentVideo.customFields.videourl);
                    var e = this.currentVideo.customFields.videourl.split("|");
                    NYTD.Video.Utils.getDeviceType().toLowerCase() === "android" && e.length >= 2&&!NYTD.Video.Validation.isEmpty(e[1]) ? (this.logger.info("loadLiveVideo - detected android device", e[1]), NYTD.Video.$(this.object).attr("src", e[1])) : e.length > 0&&!NYTD.Video.Validation.isEmpty(e[0]) ? NYTD.Video.$(this.object).attr("src", e[0]) : NYTD.Video.$(this.object).attr("src", this.currentVideo.customFields.videourl)
                }
            },
            clearObject: function() {
                this.logger.info("clearObject"), this.contentInitialized=!1, NYTD.Video.$(this.object).empty().removeAttr("src").attr("poster", "")
            },
            clearPoster: function() {
                this.logger.info("clearPoster"), NYTD.Video.$(this.object).attr("poster", "")
            },
            reloadObject: function() {
                try {
                    this.logger.info("reloadObject"), this.object.load()
                } catch (e) {
                    this.logger.warn("reloadObject Error", e)
                }
            },
            setVideoSources: function() {
                var e = NYTD.Video.$, t = [], n = 0, r = this.currentVideo.renditions, i, s, o;
                this.selectedRendition = null, this.logger.info("setVideoSources"), this.clearObject();
                if (this.currentVideo&&!this.videoModule.mediaIsLive()) {
                    if (this.defaultProps.videoURL && r && r.length > 0)
                        this.selectedRendition = r[0];
                    else {
                        for (o in this.html5VideoTypes)
                            if (!this.selectedRendition)
                                for (i in r)
                                    if (r[i].referenceId && r[i].referenceId.indexOf(this.html5VideoTypes[o])!==-1 && r[i].videoContainer === "MP4") {
                                        this.selectedRendition = r[i];
                                        break
                                    }
                        if (!this.selectedRendition)
                            for (s in r)
                                if (r[s].encodingRate > n && r[s].videoContainer === "MP4") {
                                    n = r[s].encodingRate, this.selectedRendition = r[s];
                                    break
                                }
                    }
                    this.selectedRendition && e(this.object).attr("src", this.selectedRendition.url)
                } else 
                    this.videoModule.mediaIsLive() && this.loadLiveVideo();
                this.reloadObject(), this.firstEmbed=!1, this.onMediaChange()
            },
            canPlayAd: function() {
                var e = this.adxModule || this.freewheelModule, t = this.defaultProps.enableHTML5Ads&&!this.isAdPlaying&&!NYTD.Video.Validation.isEmpty(e);
                return NYTD.Video.Validation.isAndroid() && ((new RegExp("chrome", "igm")).test(navigator.userAgent) || (t=!1)), t
            },
            initAd: function() {
                this.logger.info("initAd");
                if (this.canPlayAd()) {
                    this.logger.info("attempting to play ad"), this.isAdInitializing=!0, this.pause();
                    if (NYTD.Video.Validation.isIOS() || NYTD.Video.Validation.isAndroid()) {
                        var e = this;
                        this.autoClickVideo(function() {
                            e.onExternalAd(null)
                        })
                    } else 
                        this.onExternalAd(null);
                    return !0
                }
                return this.logger.info("unable to play ad... returning false"), !1
            },
            initVideo: function() {
                return this.logger.info("initVideo", this.isVideoPlaying, this.isAdPlaying, this.isAdInitializing), !this.isVideoPlaying&&!this.isAdPlaying&&!this.isAdInitializing ? (this.logger.info("init video is now true"), this.isVideoInitializing=!0, this.autoPlay(), this.object && (this.lastVolume = this.object.volume), !0) : (this.logger.warn("Unable to play video"), !1)
            },
            play: function() {
                this.logger.info("play");
                if (this.defaultProps.overlay.backgroundImage || this.defaultProps.autoPosterFrame&&!this.defaultProps.autoStart&&!this.defaultProps.autoRender ||!this.defaultProps.autoStart && this.defaultProps.autoRender)
                    NYTD.Video.$(this.object).show(), this.controlsModule && (this.controlsModule.showControls(), this.controlsModule.fadeInControls());
                if (this.isAdPlaying || this.isVideoPlaying || this.isVideoInitializing || this.isAdInitializing) {
                    var e = {
                        adPlaying: this.isAdPlaying,
                        videoPlaying: this.isVideoPlaying,
                        videoInitializing: this.isVideoInitializing,
                        adInitializing: this.isAdInitializing
                    };
                    this.logger.warn("play ", e);
                    return 
                }
                this.logger.info("play - Playing video"), this.initAd() || this.initVideo()
            },
            isFullScreenSupported: function() {
                if (this.object)
                    if (typeof this.object.webkitEnterFullScreen == "function" || typeof this.object.webkitEnterFullscreen == "function" || typeof this.object.mozRequestFullScreen == "function")
                        return !0;
                if (this.container)
                    if (typeof this.container.webkitRequestFullscreen == "function" || typeof this.container.webkitRequestFullScreen == "function" || typeof this.container.mozRequestFullScreen == "function")
                        return !0;
                return !1
            },
            isDocumentInFullScreenMode: function() {
                return document.mozFullScreen || document.webkitIsFullScreen || this.object.webkitDisplayingFullscreen
            },
            onWebKitFullScreenChange: function(e) {
                this.logger.debug("webkitfullscreenchange"), this.onFullScreenChange(e)
            },
            onMozFullScreenChange: function(e) {
                this.logger.debug("mozfullscreenchange"), this.onFullScreenChange(e)
            },
            onWebKitEndFullScreen: function(e) {
                this.logger.debug("onWebKitEndFullScreen"), this.logger.debug("this.object.webkitDisplayingFullscreen", this.object.webkitDisplayingFullscreen), this.onExitFullScreen(), this.controlsModule && (this.controlsModule.resizeControls(), this.controlsModule.updateFullScreen()), this.object.controls=!0, NYTD.Video.$(this.object).attr("controls", "controls"), this.object.controls=!1, NYTD.Video.$(this.object).removeAttr("controls")
            },
            onWebKitBeginFullScreen: function(e) {
                this.logger.debug("onWebKitBeginFullScreen")
            },
            onFullScreenChange: function(e) {
                this.logger.debug("fullscreenchange"), this.isDocumentInFullScreenMode() ? (this.onEnterFullScreen(), this.controlsModule && this.controlsModule.resizeControls(window.screen.width)) : (this.onExitFullScreen(), this.controlsModule && this.controlsModule.resizeControls()), this.controlsModule && this.controlsModule.updateFullScreen()
            },
            onPause: function(e) {
                this.logger.debug("onPause", e), this.controlsModule && this.controlsModule.updatePlayPauseButton(), this.unregisterProgressListener(), this.object&&!this.object.ended&&!this.isAdPlaying&&!this.isAdInitializing && this.onVideoPaused()
            },
            onResize: function(e) {
                var t, n = this;
                this.logger.debug("onResize", e), this.controlsModule && this.controlsModule.resizeControls(), this.defaultProps.width.toString().indexOf("%")!==-1&&!this.defaultProps.preserveAspectRatio && NYTD.Video.Validation.isIOS() && (t = NYTD.Video.$(this.object).height(), this.object.setAttribute("height", t), setTimeout(function() {
                    n.object.setAttribute("height", "100%")
                }, 100))
            },
            onError: function(t) {
                var n = t.target && t.target.error && t.target.error.code ? t.target.error.code: null;
                if (n) {
                    switch (t.target.error.code) {
                    case t.target.error.MEDIA_ERR_ABORTED:
                        this.logger.error("onError - You aborted the video playback.");
                        break;
                    case t.target.error.MEDIA_ERR_NETWORK:
                        this.logger.error("onError - A network error caused the video download to fail part-way.");
                        break;
                    case t.target.error.MEDIA_ERR_DECODE:
                        this.logger.error("onError - The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
                        break;
                    case t.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        this.logger.error("onError - The video could not be loaded, either because the server or network failed or because the format is not supported.");
                        break;
                    default:
                        this.logger.error("onError - An unknown error occurred.")
                    }
                    this.notify(NYTD.Video.VideoEvents.MEDIA_ERROR, {
                        id: this.objectId,
                        obj: {},
                        player: this
                    })
                }
            },
            onFirstFrameLoaded: function(e) {
                this.logger.debug("onFirstFrameLoaded", e)
            },
            onEmptied: function(e) {
                this.logger.debug("onEmptied", e)
            },
            onPlay: function(e) {
                this.logger.info("onPlay"), this.controlsModule && this.controlsModule.updatePlayPauseButton(), this.controlsModule && (this.isAdPlaying ? this.controlsModule.configureForAd() : this.videoModule.mediaIsLive() ? this.controlsModule.configureForLiveVideo() : this.controlsModule.configureForVideo()), this.isAdInitializing && this.adxModule && (this.logger.info("Ad is initializing.  Pause content."), this.pause())
            },
            onPlaying: function(e) {
                this.logger.info("onPlaying"), this.controlsModule && this.controlsModule.updatePlayPauseButton(), this.isAdPlaying || (this.isVideoInitializing=!1, this.isVideoPlaying=!0, this.videoModule.playing=!0, this.onVideoStart(null), this.onMediaPlay(null), this.logger.info("this.dispatchedOnStreamStart", this.dispatchedOnStreamStart), this.dispatchedOnStreamStart || (this.onStreamStart(null), this.onMediaBegin(null), this.dispatchedOnStreamStart=!0), this.unregisterProgressListener(), this.registerProgressListener()), NYTD.Video.$(this.container).removeClass("html5VideoLoading")
            },
            onAdPlaying: function(e) {
                this.logger.info("onAdPlaying"), this.isVideoPlaying=!1, this.isVideoInitializing=!1, this.onAdStart(null)
            },
            onVideoPlayerClicked: function(e) {
                return this.logger.info("onVideoPlayerClicked"), this.isAdPlaying || this.isVideoPlaying || this.isVideoInitializing || this.isAdInitializing?!1 : (this.initAd() || this.initVideo(), !0)
            },
            onLoadStart: function(e) {
                this.logger.info("onLoadStart"), NYTD.Video.$(this.container).addClass("html5VideoLoading")
            },
            onLoadedMetaData: function(e) {
                this.logger.info("onLoadedMetaData"), this.isAdPlaying || (this.contentInitialized=!0, this.adxModule && (this.adxModule.adsLoaded ? (this.logger.info("ads loaded, start ads"), this.adxModule.startAds()) : this.logger.info("ads NOT loaded, let content play")), this.object && this.controlsModule && (this.controlsModule.updateTime(this.timeFormat(0)), this.controlsModule.updateDuration(this.timeFormat(this.object.duration)), this.controlsModule.updateVolumeBar(this.object.volume)))
            },
            onLoadedData: function(e) {
                this.logger.info("onLoadedData"), this.onVideoLoaded(e)
            },
            onDurationChange: function(e) {
                this.logger.info("onDurationChange"), this.isAdPlaying || this.object && this.controlsModule && this.controlsModule.updateDuration(this.timeFormat(this.object.duration))
            },
            setPosterImage: function() {
                this.logger.info("setPosterImage..."), this.object && (!NYTD.Video.Validation.isEmpty(this.currentVideo)&&!NYTD.Video.Validation.isEmpty(this.currentVideo.videoStillURL) ||!NYTD.Video.Validation.isEmpty(this.defaultProps.overlay.backgroundImage)) && (document.location.protocol === "https:" && typeof this.currentVideo.videoStillURL == "string" && (this.currentVideo.videoStillURL = this.currentVideo.videoStillURL.replace("http://graphics8.nytimes.com", "https://sv.nyt.com")), this.object.poster = this.currentVideo.videoStillURL || this.defaultProps.overlay.backgroundImage || "")
            },
            exitFullScreen: function() {
                this.logger.info("exitFullScreen", this.container);
                if (!NYTD.Video.Validation.isEmpty(this.object) && this.isDocumentInFullScreenMode()) {
                    this.logger.info("exitFullScreen is supported");
                    var e = this, t = function(n) {
                        NYTD.Video.$(e.object).unbind("click", t), NYTD.Video.Validation.isFunction(document.webkitCancelFullScreen) ? document.webkitCancelFullScreen() : NYTD.Video.Validation.isFunction(document.webkitCancelFullscreen) ? document.webkitCancelFullscreen() : NYTD.Video.Validation.isFunction(document.mozCancelFullScreen) && document.mozCancelFullScreen()
                    };
                    NYTD.Video.$(this.object).bind("click", t);
                    var n = document.createEvent("MouseEvents");
                    n && n.initMouseEvent && (n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 2, this.object), this.object.dispatchEvent(n))
                }
            },
            onContentLoaded: function(e) {
                this.logger.info("html5 onContentLoaded", e), this.clearObject(), NYTD.Video.Validation.isEmpty(e) ? this.logger.error("No data was returned") : (this.currentVideo = e, this.defaultProps.videoURL && this.replaceVideoByURL(), this.logger.info("onContentLoaded - setting current video", this.currentVideo), this.checkState(), this.resetPlayState(), this.changeVideoCaption(), this.notify(NYTD.Video.VideoEvents.CONTENT_LOAD, {
                    id: this.objectId,
                    obj: this.contentModule,
                    player: this
                }), this.setVideoSources.call(this), this.setPosterImage(), this.initAd() || this.initVideo())
            },
            resetState: function() {
                this.videoModule.duration = 0
            },
            resetPlayState: function() {
                this.isVideoPlaying=!1, this.isVideoInitializing=!1, this.videoModule.playing=!1, this.dispatchedOnStreamStart=!1
            },
            onContentLoadedCue: function(e) {
                this.logger.info("onContentLoadedCue", e, this), this.clearObject(), NYTD.Video.Validation.isEmpty(e) ? this.logger.error("No data was returned") : (this.logger.info("onContentLoadedCue - setting current video", e), this.currentVideo = e, this.defaultProps.videoURL && this.replaceVideoByURL(), this.checkState(), this.resetPlayState(), this.changeVideoCaption(), this.setVideoSources.call(this), this.setPosterImage(), this.notify(NYTD.Video.VideoEvents.CONTENT_LOAD, {
                    id: this.objectId,
                    obj: this.contentModule,
                    player: this
                }))
            },
            onContentLoadedCuePoster: function(e) {
                this.logger.info("onContentLoadedCuePoster", e, this), NYTD.Video.Validation.isEmpty(e) ? this.logger.error("No data was returned") : (this.logger.info("onContentLoadedCuePoster - setting current video", e), this.currentVideo = e, this.defaultProps.videoURL && this.replaceVideoByURL(), typeof e.videoStillURL == "string" && (this.defaultProps.overlay = this.defaultProps.overlay || {}, this.defaultProps.overlay.backgroundImage = e.videoStillURL, this.defaultProps.overlay.buttonPosition = "bottomLeft", this.defaultProps.overlay.buttonAnimated=!0, this.defaultProps.overlay.buttonPaddingLeftRight = 20, this.defaultProps.overlay.buttonPaddingTopBottom = 20, this.defaultProps.overlay.buttonFontSize = "12px", this.defaultProps.width <= 190 ? this.defaultProps.overlay.buttonExpandBy = 77 : this.defaultProps.width > 190 && this.defaultProps.width < 347 ? this.defaultProps.overlay.buttonExpandBy = 77 : this.defaultProps.overlay.buttonExpandBy = 87, this.setPoster()))
            },
            onVideoPlayComplete: function() {
                this.isAdPlaying || (this.logger.info(">>>> onVideoPlayComplete, isVideoPlaying, isAdPlaying, isAdInitializing", this.isVideoPlaying, this.isAdPlaying, this.isAdInitializing, this.object), this.resetPlayState(), this.unregisterProgressListener(), this.setPosterImage(), this.onVideoComplete(null), this.onMediaComplete())
            },
            onAdPlayComplete: function() {
                this.logger.info("onAdPlayComplete"), this.isVideoInitializing=!0, this.onAdComplete(null)
            },
            onAdPaused: function() {
                this.logger.info("onAdPaused"), this.onAdPause(null)
            },
            onAdError: function() {
                this.logger.error("onAdError"), this.onAdPlayComplete()
            },
            onLoadProgress: function(e) {
                if (!this.isAdPlaying && this.object && this.controlsModule) {
                    var t = this.object.duration, n = 0;
                    if (this.object.buffered && this.object.buffered.end)
                        try {
                            var r = this.object.buffered.length - 1;
                            r >= 0 && (n = this.object.buffered.end(r))
                        } catch (i) {
                        n = 0
                    }
                    var s = 100 * (n / t);
                    this.controlsModule.updateBufferBar(s)
                }
            },
            onCanPlay: function(e) {
                this.logger.debug("onCanPlay,e,isVideoInitializing,isVideoPlaying ", e, this.isVideoInitializing, this.isVideoPlaying)
            },
            onCanPlayThrough: function(e) {
                this.logger.debug("onCanPlayThrough", e)
            },
            onStalled: function(e) {
                this.logger.debug("onStalled", e)
            },
            onVideoLoaded: function(e) {
                this.logger.debug("html5 onVideoLoaded", e), this.notify(NYTD.Video.VideoEvents.VIDEO_LOAD, {
                    id: this.objectId,
                    obj: {},
                    player: this
                })
            },
            onStreamStart: function(e) {
                this.logger.debug("html5 onStreamStart", e), this.notify(NYTD.Video.VideoEvents.STREAM_START, {
                    id: this.objectId,
                    obj: {},
                    player: this
                })
            },
            onWaiting: function(e) {
                this.logger.debug("onWaiting", e)
            },
            onTimeUpdate: function(e) {
                if (this.isAdPlaying)
                    this.freewheelModule && this.notify(NYTD.Video.VideoEvents.AD_PROGRESS, {
                        id: this.objectId,
                        obj: {},
                        player: this
                    });
                else {
                    if (this.object && this.controlsModule) {
                        var t = this.object.currentTime, n = this.object.duration, r = 100 * t / n, i = this.timeFormat(t);
                        this.controlsModule.updateTime(i), this.controlsModule.updateTimeBar(r), this.controlsModule.updateDuration(this.timeFormat(n))
                    }
                    this.onMediaProgress({
                        position: this.object.currentTime,
                        duration: this.object.duration
                    })
                }
            },
            timeFormat: function(e) {
                var t = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60): Math.floor(e / 60), n = Math.floor(e - t * 60) < 10 ? "0" + Math.floor(e - t * 60): Math.floor(e - t * 60);
                return this.isNumber(t) && this.isNumber(n) ? t + ":" + n : "00:00"
            },
            isNumber: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            onVolumeChange: function(e) {
                this.logger.debug("onVolumeChange", e), this.object && this.controlsModule && (this.object.muted ? (this.notify(NYTD.Video.VideoEvents.MUTED, {
                    id: this.objectId,
                    obj: {},
                    player: this
                }), this.controlsModule.updateVolumeBar(0)) : (this.object.volume === this.lastVolume && this.notify(NYTD.Video.VideoEvents.UNMUTED, {
                    id: this.objectId,
                    obj: {},
                    player: this
                }), this.controlsModule.updateVolumeBar(this.object.volume)), this.lastVolume = this.object.volume)
            },
            onEnded: function(e) {
                this.logger.info("onEnded"), this.isAdPlaying || (this.dispatchedOnStreamStart=!1, this.resetState(), this.onVideoPlayComplete(), this.controlsModule && this.controlsModule.updatePlayPauseButton())
            },
            removePlayer: function() {
                this.object && NYTD.Video.$(this.object).remove(), this.controlsModule && this.controlsModule.removeControls()
            },
            kill: function() {
                this.stop(), this.notify(NYTD.Video.VideoEvents.DESTROYING, {
                    id: this.objectId,
                    obj: null,
                    player: this
                }), this.unregisterEventListeners(), this.removePlayer(), this.resetObjectState(), this.killSuper()
            }
        })
    }.call(NYTD.Video.Player), function() {
        this.FlashVideoPlayer = NYTD.Video.Player.AbstractVideoPlayer.extend({
            logger: null,
            numberOfTemplateErorrs: 0,
            maxTemplateErrors: 2,
            templateErrorInterval: 1,
            initialize: function(e) {
                this.resetObjectState(), this.resetObjectStateSuper(), this.logger = NYTD.Video.Logger.get("NYTD.Video.FlashVideoPlayer")
            },
            resetObjectState: function() {
                this.logger = null, this.numberOfTemplateErorrs = 0, this.maxTemplateErrors = 2
            },
            setModules: function(e) {
                var t = this, n = window.BCExperienceEvent, r = window.BCMediaEvent, i = window.BCVideoEvent, s = window.BCMenuEvent, o = window.BCAdvertisingEvent, u = window.BCContentEvent, a = window.BCCaptionsEvent, f = window.BCCuePointEvent, l = window.BCSearchEvent, c = NYTD.Video.Validation, h = this.experience = brightcove.getExperience(this.objectId);
                if (!c.isEmpty(this.experience)) {
                    var p = this.moduleExperience = this.experience.getModule(APIModules.EXPERIENCE);
                    c.isEmpty(p) || (p.addEventListener(n.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), p.addEventListener(n.CONTENT_LOAD, NYTD.Video.Utils.bind(this.onContentLoaded, this)), p.addEventListener("enterFullScreen", NYTD.Video.Utils.bind(this.onEnterFullScreen, this)), p.addEventListener("exitFullScreen", NYTD.Video.Utils.bind(this.onExitFullScreen, this)));
                    var d = this.videoModule = h.getModule(APIModules.VIDEO_PLAYER);
                    c.isEmpty(d) || (d.enableInitialBandwidthDetection(this.enableInitialBandwidthDetection), d.setConnectOnLoad(this.connectOnLoad), d.addEventListener(r.PLAY, NYTD.Video.Utils.bind(this.onMediaPlay, this)), d.addEventListener(r.BEGIN, NYTD.Video.Utils.bind(this.onMediaBegin, this)), d.addEventListener(r.MUTE_CHANGE, NYTD.Video.Utils.bind(this.onMediaMuteChange, this)), d.addEventListener(r.ERROR, NYTD.Video.Utils.bind(this.onMediaError, this)), d.addEventListener(r.STOP, NYTD.Video.Utils.bind(this.onMediaStop, this)), d.addEventListener(r.SEEK, NYTD.Video.Utils.bind(this.onMediaSeek, this)), d.addEventListener(r.CHANGE, NYTD.Video.Utils.bind(this.onMediaChange, this)), d.addEventListener(r.COMPLETE, NYTD.Video.Utils.bind(this.onMediaComplete, this)), this.defaultProps.captureProgressEvents && d.addEventListener(r.PROGRESS, NYTD.Video.Utils.bind(this.onMediaProgress, this)), d.addEventListener(i.VIDEO_START, NYTD.Video.Utils.bind(this.onVideoStart, this)), d.addEventListener(i.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this)), d.addEventListener(i.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoComplete, this)), d.addEventListener(i.VIDEO_STOP, NYTD.Video.Utils.bind(this.onVideoStop, this)));
                    var v = this.menuModule = h.getModule(APIModules.MENU);
                    c.isEmpty(v) || (v.addEventListener(s.BLOG_POST_CLICK, NYTD.Video.Utils.bind(this.onBlogPostClick, this)), v.addEventListener(s.COPY_CODE, NYTD.Video.Utils.bind(this.onCopyCode, this)), v.addEventListener(s.COPY_LINK, NYTD.Video.Utils.bind(this.onCopyLink, this)), v.addEventListener(s.ICON_MENU_CLOSE, NYTD.Video.Utils.bind(this.onIconMenuClose, this)), v.addEventListener(s.ICON_MENU_OPEN, NYTD.Video.Utils.bind(this.onIconMenuOpen, this)), v.addEventListener(s.MENU_PAGE_CLOSE, NYTD.Video.Utils.bind(this.onMenuPageClose, this)), v.addEventListener(s.MENU_PAGE_OPEN, NYTD.Video.Utils.bind(this.onMenuPageOpen, this)), v.addEventListener(s.OVERLAY_MENU_CLOSE, NYTD.Video.Utils.bind(this.onOverlayMenuClose, this)), v.addEventListener(s.OVERLAY_MENU_OPEN, NYTD.Video.Utils.bind(this.onOverlayMenuOpen, this)), v.addEventListener(s.OVERLAY_MENU_PLAY_CLICK, NYTD.Video.Utils.bind(this.onOverlayMenuPlayClick, this)), v.addEventListener(s.SEND_EMAIL_CLICK, NYTD.Video.Utils.bind(this.onSendEmailClick, this)), v.addEventListener(s.VIDEO_REQUEST, NYTD.Video.Utils.bind(this.onVideoRequest, this)));
                    var m = this.adModule = h.getModule(APIModules.ADVERTISING);
                    c.isEmpty(m) || (m.addEventListener(o.AD_CLICK, NYTD.Video.Utils.bind(this.onAdClick, this)), m.addEventListener(o.AD_POSTROLLS_COMPLETE, NYTD.Video.Utils.bind(this.onAdPostRollsComplete, this)), m.addEventListener(o.AD_RECEIVED, NYTD.Video.Utils.bind(this.onAdReceived, this)), m.addEventListener(o.AD_RULES_READY, NYTD.Video.Utils.bind(this.onAdRulesReady, this)), m.addEventListener(o.AD_START, NYTD.Video.Utils.bind(this.onAdStart, this)), m.addEventListener(o.AD_COMPLETE, NYTD.Video.Utils.bind(this.onAdComplete, this)), m.addEventListener(o.AD_PAUSE, NYTD.Video.Utils.bind(this.onAdPause, this)), m.addEventListener(o.AD_RESUME, NYTD.Video.Utils.bind(this.onAdResume, this)), m.addEventListener(o.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), m.addEventListener(o.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this)));
                    var g = this.contentModule = h.getModule(APIModules.CONTENT);
                    c.isEmpty(g) || (g.addEventListener(u.VIDEO_LOAD, NYTD.Video.Utils.bind(this.onVideoLoaded, this)), g.addEventListener(u.MEDIA_COLLECTION_LOAD, NYTD.Video.Utils.bind(this.onMediaCollectionLoad, this)), g.addEventListener(u.MEDIA_LOAD, NYTD.Video.Utils.bind(this.onMediaLoad, this))), this.socialModule = this.experience.getModule(APIModules.SOCIAL), c.isEmpty(this.socialModule) || this.setPendingSocialURL();
                    var y = this.captionsModule = h.getModule(APIModules.CAPTIONS);
                    c.isEmpty(y) || (y.addEventListener(a.DFXP_LOAD_ERROR, NYTD.Video.Utils.bind(this.onDFXPLoadError, this)), y.addEventListener(a.DFXP_LOAD_SUCCESS, NYTD.Video.Utils.bind(this.onDFXPLoadSuccess, this))), this.cuePointsModule = h.getModule(APIModules.CUE_POINTS), NYTD.Video.Validation.isEmpty(this.cuePointsModule) || this.cuePointsModule.addEventListener(f.CUE, NYTD.Video.Utils.bind(this.onCue, this));
                    var b = this.searchModule = h.getModule(APIModules.SEARCH);
                    c.isEmpty(b) || (b.addEventListener(l.ERROR, NYTD.Video.Utils.bind(this.onSearchError, this)), b.addEventListener(l.RESULT, NYTD.Video.Utils.bind(this.onSearchResult, this)))
                }
            },
            render: function() {
                var e, t;
                this.logger.debug("render", "Rendering flash component"), t = function(e, t) {
                    if (NYTD.Video.Validation.isEmpty(this.params) || this.params.length <= 0)
                        throw this.logger.error("getObjectTag - Invalid parameters provided: this.params", this.params), new Error("Invalid object parameters");
                    var n = ['<object class="', t, '" id="', e, '">'], r = this.params, i = r.length, s = 0;
                    for (s; s < i; s++) {
                        var o = r[s], u = o.name, a = o.value;
                        if (o)
                            if (/@/.test(u)) {
                                if (/videoPlayer/.test(u)) {
                                    var f = this.getCurrentContent();
                                    /ref:/.test(a) && (a = ["ref:", f].join(""))
                                }
                                n.push(['<param name="', u, '" value="', a, '"/>'].join(""))
                            } else 
                                n.push(['<param name="', o.name, '" value="', o.value, '"/>'].join(""))
                        }
                    var l = NYTD.Video.Utils;
                    this.templateHandlerId = [this.objectId, "_template_load_handler"].join(""), window[this.templateHandlerId] = l.bind(this.onTemplateLoaded, this);
                    var c = ['<param name="templateLoadHandler" value="', this.templateHandlerId, '"/>'].join("");
                    n.push(c), this.templateErrorId = [this.objectId, "_template_error_handler"].join(""), window[this.templateErrorId] = NYTD.Video.Utils.bind(this.onTemplateError, this);
                    var h = ['<param name="templateErrorHandler" value="', this.templateErrorId, '"/>'].join("");
                    n.push(h), n.push("</object>"), n = n.join(""), NYTD.Video.$(this.container).append(n), this.object = document.getElementById(this.objectId), brightcove.createExperiences(), this.notify(NYTD.Video.VideoEvents.RENDERED, {
                        id: this.objectId,
                        obj: {},
                        player: this
                    })
                }, this.object = t.call(this, this.objectId, this.clazz), this.defaultProps.width.toString().indexOf("%")!==-1 && (e = {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0"
                }, this.defaultProps.preserveAspectRatio ? navigator.appVersion.indexOf("MSIE 7.")!==-1 ? (NYTD.Video.$("#" + this.objectId).closest("span").css(e), NYTD.Video.$("#" + this.objectId).css(e)) : NYTD.Video.$("#" + this.objectId).css({
                    position: "absolute"
                }) : navigator.appVersion.indexOf("MSIE")!==-1 && NYTD.Video.$("#" + this.objectId).closest("span").css(e))
            },
            removeEventListeners: function() {
                var e = this, t = window.BCExperienceEvent, n = window.BCMediaEvent, r = window.BCVideoEvent, i = window.BCMenuEvent, s = window.BCAdvertisingEvent, o = window.BCContentEvent, u = window.BCCaptionsEvent, a = window.BCCuePointEvent, f = window.BCSearchEvent;
                NYTD.Video.Validation.isEmpty(this.moduleExperience) || (this.moduleExperience.removeEventListener(t.TEMPLATE_READY, NYTD.Video.Utils.bind(this.onTemplateReady, this)), this.moduleExperience.removeEventListener(t.CONTENT_LOAD, NYTD.Video.Utils.bind(this.onContentLoaded, this)), this.moduleExperience.removeEventListener("enterFullScreen", NYTD.Video.Utils.bind(this.onEnterFullScreen, this)), this.moduleExperience.removeEventListener("exitFullScreen", NYTD.Video.Utils.bind(this.onExitFullScreen, this))), NYTD.Video.Validation.isEmpty(this.videoModule) || (this.videoModule.removeEventListener(n.PLAY, NYTD.Video.Utils.bind(this.onMediaPlay, this)), this.videoModule.removeEventListener(n.BEGIN, NYTD.Video.Utils.bind(this.onMediaBegin, this)), this.videoModule.removeEventListener(n.MUTE_CHANGE, NYTD.Video.Utils.bind(this.onMediaMuteChange, this)), this.videoModule.removeEventListener(n.ERROR, NYTD.Video.Utils.bind(this.onMediaError, this)), this.videoModule.removeEventListener(n.STOP, NYTD.Video.Utils.bind(this.onMediaStop, this)), this.videoModule.removeEventListener(n.SEEK, NYTD.Video.Utils.bind(this.onMediaSeek, this)), this.videoModule.removeEventListener(n.CHANGE, NYTD.Video.Utils.bind(this.onMediaChange, this)), this.videoModule.removeEventListener(n.COMPLETE, NYTD.Video.Utils.bind(this.onMediaComplete, this)), this.defaultProps.captureProgressEvents && this.videoModule.removeEventListener(n.PROGRESS, NYTD.Video.Utils.bind(this.onMediaProgress, this)), this.videoModule.removeEventListener(r.VIDEO_START, NYTD.Video.Utils.bind(this.onVideoStart, this)), this.videoModule.removeEventListener(r.STREAM_START, NYTD.Video.Utils.bind(this.onStreamStart, this)), this.videoModule.removeEventListener(r.VIDEO_COMPLETE, NYTD.Video.Utils.bind(this.onVideoComplete, this)), this.videoModule.removeEventListener(r.VIDEO_STOP, NYTD.Video.Utils.bind(this.onVideoStop, this))), NYTD.Video.Validation.isEmpty(this.menuModule) || (this.menuModule.removeEventListener(i.BLOG_POST_CLICK, NYTD.Video.Utils.bind(this.onBlogPostClick, this)), this.menuModule.removeEventListener(i.COPY_CODE, NYTD.Video.Utils.bind(this.onCopyCode, this)), this.menuModule.removeEventListener(i.COPY_LINK, NYTD.Video.Utils.bind(this.onCopyLink, this)), this.menuModule.removeEventListener(i.ICON_MENU_CLOSE, NYTD.Video.Utils.bind(this.onIconMenuClose, this)), this.menuModule.removeEventListener(i.ICON_MENU_OPEN, NYTD.Video.Utils.bind(this.onIconMenuOpen, this)), this.menuModule.removeEventListener(i.MENU_PAGE_CLOSE, NYTD.Video.Utils.bind(this.onMenuPageClose, this)), this.menuModule.removeEventListener(i.MENU_PAGE_OPEN, NYTD.Video.Utils.bind(this.onMenuPageOpen, this)), this.menuModule.removeEventListener(i.OVERLAY_MENU_CLOSE, NYTD.Video.Utils.bind(this.onOverlayMenuClose, this)), this.menuModule.removeEventListener(i.OVERLAY_MENU_OPEN, NYTD.Video.Utils.bind(this.onOverlayMenuOpen, this)), this.menuModule.removeEventListener(i.OVERLAY_MENU_PLAY_CLICK, NYTD.Video.Utils.bind(this.onOverlayMenuPlayClick, this)), this.menuModule.removeEventListener(i.SEND_EMAIL_CLICK, NYTD.Video.Utils.bind(this.onSendEmailClick, this)), this.menuModule.removeEventListener(i.VIDEO_REQUEST, NYTD.Video.Utils.bind(this.onVideoRequest, this))), NYTD.Video.Validation.isEmpty(this.adModule) || (this.adModule.removeEventListener(s.AD_CLICK, NYTD.Video.Utils.bind(this.onAdClick, this)), this.adModule.removeEventListener(s.AD_POSTROLLS_COMPLETE, NYTD.Video.Utils.bind(this.onAdPostRollsComplete, this)), this.adModule.removeEventListener(s.AD_RECEIVED, NYTD.Video.Utils.bind(this.onAdReceived, this)), this.adModule.removeEventListener(s.AD_RULES_READY, NYTD.Video.Utils.bind(this.onAdRulesReady, this)), this.adModule.removeEventListener(s.AD_START, NYTD.Video.Utils.bind(this.onAdStart, this)), this.adModule.removeEventListener(s.AD_COMPLETE, NYTD.Video.Utils.bind(this.onAdComplete, this)), this.adModule.removeEventListener(s.AD_PAUSE, NYTD.Video.Utils.bind(this.onAdPause, this)), this.adModule.removeEventListener(s.AD_RESUME, NYTD.Video.Utils.bind(this.onAdResume, this)), this.adModule.removeEventListener(s.EXTERNAL_AD, NYTD.Video.Utils.bind(this.onExternalAd, this)), this.adModule.removeEventListener(s.AD_PROGRESS, NYTD.Video.Utils.bind(this.onAdProgress, this))), NYTD.Video.Validation.isEmpty(this.contentModule) || (this.contentModule.removeEventListener(o.VIDEO_LOAD, NYTD.Video.Utils.bind(this.onVideoLoaded, this)), this.contentModule.removeEventListener(o.MEDIA_COLLECTION_LOAD, NYTD.Video.Utils.bind(this.onMediaCollectionLoad, this)), this.contentModule.removeEventListener(o.MEDIA_LOAD, NYTD.Video.Utils.bind(this.onMediaLoad, this))), NYTD.Video.Validation.isEmpty(this.socialModule) || this.setPendingSocialURL(), NYTD.Video.Validation.isEmpty(this.captionsModule) || (this.captionsModule.removeEventListener(u.DFXP_LOAD_ERROR, NYTD.Video.Utils.bind(this.onDFXPLoadError, this)), this.captionsModule.removeEventListener(u.DFXP_LOAD_SUCCESS, NYTD.Video.Utils.bind(this.onDFXPLoadSuccess, this))), NYTD.Video.Validation.isEmpty(this.cuePointsModule) || this.cuePointsModule.removeEventListener(a.CUE, NYTD.Video.Utils.bind(this.onCue, this)), NYTD.Video.Validation.isEmpty(this.searchModule) || (this.searchModule.removeEventListener(f.ERROR, NYTD.Video.Utils.bind(this.onSearchError, this)), this.searchModule.removeEventListener(f.RESULT, NYTD.Video.Utils.bind(this.onSearchResult, this)))
            },
            removePlayer: function() {
                try {
                    !NYTD.Video.Validation.isEmpty(this.moduleExperience) && typeof this.moduleExperience == "object" && typeof this.moduleExperience.unload == "function" && this.moduleExperience.unload()
                } catch (e) {}
                NYTD.Video.$("#" + this.objectId).remove(), this.notify(NYTD.Video.VideoEvents.REMOVED, {
                    id: this.getObjectId()
                })
            },
            play: function() {
                try {
                    this.videoModule && (this.logger.info("has video module", this.videoModule.isPlaying()), this.videoModule.isPlaying() || this.videoModule.play())
                } catch (e) {
                    this.logger.error("play", e)
                }
            },
            stop: function() {
                this.videoModule && this.videoModule.isPlaying() && this.videoModule.stop()
            },
            pause: function() {
                this.videoModule && this.videoModule.isPlaying() && this.videoModule.pause()
            },
            resume: function() {
                this.videoModule && (this.videoModule.isPlaying() || this.videoModule.play())
            },
            mute: function(e) {
                NYTD.Video.Validation.isEmpty(e) && (e=!0), this.muteFunctionCalled=!0, this.videoModule.mute(e)
            },
            unmute: function(e) {
                NYTD.Video.Validation.isEmpty(e) && (e=!1), this.unmuteFunctionCalled=!0, this.videoModule.mute(e)
            },
            getVolume: function() {
                return this.videoModule.getVolume()
            },
            setVolume: function(e) {
                this.videoModule.setVolume(e)
            },
            getDuration: function() {
                return this.videoModule.getVideoDuration()
            },
            getPosition: function() {
                return this.videoModule.getVideoPosition()
            },
            seek: function(e) {
                this.videoModule.seek(e)
            },
            templateLoaded: function(e) {
                this.setModules(e), this.notify(NYTD.Video.VideoEvents.TEMPLATE_LOADED, {
                    id: this.objectId,
                    obj: {},
                    player: this
                })
            },
            replaceMedia: function(e) {
                this.setPendingSocialURL();
                var t = e || this.videoModule.getCurrentVideo();
                if (typeof t == "undefined" || null === t)
                    return;
                var n = this.embedCode ? this.embedCode: this.defaultEmbedCode;
                if (!NYTD.Video.Validation.isEmpty(n))
                    try {
                        var r = n.replace("{{VIDEO_ID}}", t.referenceId);
                        this.socialModule.setEmbedCode(r)
                } catch (i) {
                    this.logger.error(i)
                }
                this.isSocialURLShortened=!1, this.socialURL ? this.defaultSocialURL = this.socialURL : this.defaultSocialURL = t.customFields && t.customFields.videourl ? t.customFields.videourl : t.linkURL ? t.linkURL : ""
            },
            onTemplateLoaded: function(e) {
                this.templateLoaded(this.getObjectId())
            },
            onTemplateError: function(e) {
                this.logger.info("onTemplateError", e);
                if (e && e.errorType&&++this.numberOfTemplateErorrs < this.maxTemplateErrors) {
                    var t = this;
                    switch (e.errorType) {
                    case"serviceUnavailable":
                    case"unknown":
                        setTimeout(function() {
                            t.removeEventListeners(), t.removePlayer(), t.cleanUpDOMHandlers(), t.render()
                        }, this.templateErrorInterval)
                    }
                }
                this.onTemplateErrorSuper(e)
            },
            onContentLoaded: function(e) {
                this.logger.info("onContentLoaded", e), this.currentVideo = e.video || e.media, this.replaceMedia(this.currentVideo), this.changeVideoCaption(), this.defaultProps.videoURL && (e.video = this.replaceVideoByURL(), e.media = e.video), this.notify(NYTD.Video.VideoEvents.CONTENT_LOAD, {
                    id: this.objectId,
                    obj: e,
                    player: this
                })
            },
            onVideoLoaded: function(e) {
                var t = e.video || e.media;
                this.logger.info("onVideoLoaded", t), this.replaceMedia(t), this.changeVideoCaption(), this.notify(NYTD.Video.VideoEvents.VIDEO_LOAD, {
                    id: this.objectId,
                    obj: e,
                    player: this
                })
            },
            onStreamStart: function(e) {
                var t = e.video || e.media;
                this.logger.info("onStreamStart", t), this.replaceMedia(t), this.changeVideoCaption(), this.notify(NYTD.Video.VideoEvents.STREAM_START, {
                    id: this.objectId,
                    obj: e,
                    player: this
                })
            },
            cleanUpDOMHandlers: function() {
                NYTD.Video.Validation.isEmpty(window[this.templateHandlerId]) || (window[this.templateHandlerId] = null), NYTD.Video.Validation.isEmpty(window[this.templateErrorId]) || (window[this.templateErrorId] = null)
            },
            kill: function() {
                this.logger.info("kill"), this.stopPolling=!0, this.notify(NYTD.Video.VideoEvents.DESTROYING, {
                    id: this.objectId,
                    obj: null,
                    player: this
                }), this.stop(), this.removeEventListeners(), this.removePlayer(), this.cleanUpDOMHandlers(), this.resetObjectState(), this.killSuper()
            }
        })
    }.call(NYTD.Video.Player);
    return NYTD.Video.Factory;
});

