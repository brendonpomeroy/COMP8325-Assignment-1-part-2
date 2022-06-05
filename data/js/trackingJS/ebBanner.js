EBGInfra = {
    declareNamespace: function(a) {
        for (var b = window.EBG, a = a.split("."), c = 0; c < a.length; c++) {
            var d = a[c], e = b[d];
            e || (e = b[d] = {});
            b = e
        }
    },
    declareClass: function(a, b) {
        a.prototype.constructor = a;
        if (b)
            a.__superClass = b, a.__basePrototypePending=!0, EBG._resolveInheritance(a);
        return a
    },
    runTimed: function(a, b, c, d) {
        return setTimeout(function() {
            b.apply(a, c)
        }, d)
    },
    setInterval: function(a, b, c, d) {
        return setInterval(function() {
            b.apply(a, c)
        }, d)
    },
    clearInterval: function(a) {
        clearInterval(a)
    },
    _resolveInheritance: function(a) {
        if (a.__basePrototypePending) {
            var b =
            a.__superClass;
            EBG._resolveInheritance(b);
            var b = b.prototype, c = a.prototype, d;
            for (d in b)
                c[d] = c[d] || b[d];
            delete a.__basePrototypePending
        }
    },
    callSuperConstructor: function(a, b, c) {
        (a = a.__superClass) && (c ? a.apply(b, c) : a.apply(b));
        return b
    },
    callSuperFunction: function(a, b, c, d) {
        if (a = a.__superClass)
            var e = a.prototype[c];
        if (e instanceof Function)
            return d ? e.apply(b, d) : e.apply(b)
    },
    typeOf: function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array ||!(a instanceof Object) && "[object Array]" == Object.prototype.toString.call(a) ||
                "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                    return "array";
                    if (!(a instanceof Object) && ("[object Function]" == Object.prototype.toString.call(a) || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call")))
                        return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    },
    isFunc: function(a) {
        return "function" == EBG.typeOf(a)
    },
    isDefined: function(a) {
        return "undefined" !=
        EBG.typeOf(a)
    },
    notNull: function(a) {
        return null != a
    },
    isDefinedNotNull: function(a) {
        return this.isDefined(a) && this.notNull(a)
    },
    hasValue: function(a) {
        return null != a && "undefined" != EBG.typeOf(a)
    },
    getRandomNumber: function() {
        var a = "";
        try {
            a = Math.random().toString(), a = a.substr(a.indexOf(".") + 1)
        } catch (b) {
            a = ""
        }
        return a
    },
    isObj: function(a) {
        return "object" == EBG.typeOf(a)
    },
    isArray: function(a) {
        return "array" == EBG.typeOf(a)
    },
    isBool: function(a) {
        return "boolean" == EBG.typeOf(a)
    },
    isNumber: function(a) {
        return !isNaN(parseFloat(a)) &&
        isFinite(a)
    },
    format: function(a) {
        for (var b = 1; b < arguments.length; b++)
            a = a.replace(RegExp("\\{" + (b - 1) + "\\}", "gi"), "" + arguments[b]);
        return a
    },
    throwEx: function(a) {
        throw {
            name: "",
            message: a
        };
    },
    mergeObj: function(a, b, c) {
        var c=!!c, d;
        for (d in a)
            if (a.hasOwnProperty(d) && (!b.hasOwnProperty(d) || c))
                b[d] = a[d]
    },
    cloneObj: function(a) {
        if (!EBG.isObj(a))
            return null;
        var b = {}, c;
        for (c in a)
            a.hasOwnProperty(c) && (b[c] = EBG.isObj(a[c]) ? EBG.cloneObj(a[c]) : a[c]);
        return b
    },
    combinePaths: function(a, b) {
        a = a || "";
        b = b || "";
        a && "/" != a[a.length -
        1] && (a += "/");
        var c = a;
        b && (c += b);
        return c
    },
    px: function(a) {
        return EBG.format("{0}px", a)
    },
    strEQ: function(a, b, c) {
        return a && b ? c ? a === b : a.toLowerCase() === b.toLowerCase() : !1
    },
    indexOfArray: function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] == b)
                return c;
        return - 1
    },
    isGlobalDef: function(a, b) {
        var c = "undefined" != eval("typeof(" + a + ")");
        b && c && (c = eval(a + "==" + b));
        return c
    },
    numberToEnum: function(a, b) {
        var c = "", d;
        for (d in b)
            if (b.hasOwnProperty(d) && b[d] === a) {
                c = d;
                break
            }
        return c
    },
    getPageUrl: function(a) {
        return a && a.location && a.location.href ?
        a.location.href : null
    },
    getFeatureFlagValue: function(a, b) {
        if (!EBG.isDefined(a))
            return !1;
        if (EBG.isArray(a)) {
            for (var c = 0; c < a.length; c++)
                if (a[c].name == b)
                    return a[c].state;
            return !1
        }
        return !!a[b]
    }
};
EBG = window.EBG || {};
EBGInfra.mergeObj(EBGInfra, EBG, !1);
EBG.declareNamespace("Logging");
EBG.Logging.LoggerLevels = {
    NONE: 0,
    ERROR: 1,
    INFO: 2,
    WARN: 3,
    DEBUG: 4
};
EBG.Logging.Logger = function(a) {
    this._level = a;
    this.startNestingGroupNames = [];
    this.endNestingGroupNames = []
};
EBG.Logging.Logger.prototype = {
    setLevel: function(a) {
        this._level = a
    },
    debug: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.DEBUG, arguments)
    },
    info: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.INFO, arguments)
    },
    warn: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.WARN, arguments)
    },
    error: function(a) {
        this._reportToLog(EBG.Logging.LoggerLevels.ERROR, arguments)
    },
    exception: function(a, b) {
        var c = "string" !== b ? EBG.format("Exception in {0}. message: {1}", a, b.message): EBG.format("Exception in: {0}. message: {1}",
        a, b);
        b.stack && (c += EBG.format(" stack: {0}", b.stack));
        this._reportToLog(EBG.Logging.LoggerLevels.ERROR, [c])
    },
    startGroup: function(a) {
        this._supportNesting() && this.startNestingGroupNames.push(a)
    },
    endGroup: function() {
        this._supportNesting() && 0 < this.endNestingGroupNames.length && window.console.groupEnd(this.endNestingGroupNames.pop())
    },
    _consoleAvailable: function() {
        return void 0 !== window.console
    },
    _supportNesting: function() {
        return this._consoleAvailable() ? void 0 !== window.console.group : !1
    },
    _supportErrorMessage: function() {
        return void 0 !==
        window.console.error
    },
    _supportInfoMessage: function() {
        return void 0 !== window.console.info || void 0 !== window.opera
    },
    _supportWarnMessage: function() {
        return void 0 !== window.console.warn || void 0 !== window.opera
    },
    _supportObjectView: function() {
        return void 0 !== window.console.dir || void 0 !== window.opera
    },
    _callConsoleFunction: function(a, b) {
        var c=!1;
        switch (a) {
        case EBG.Logging.LoggerLevels.INFO:
            this._supportInfoMessage() && (window.console.info(b), c=!0);
            break;
        case EBG.Logging.LoggerLevels.WARN:
            this._supportWarnMessage() &&
            (window.console.warn(b), c=!0);
            break;
        case EBG.Logging.LoggerLevels.ERROR:
            this._supportErrorMessage() && (consoleFunction = window.console.error(b), c=!0)
        }
        c || window.console.log(b)
    },
    _reportToLog: function(a, b) {
        if (this._level >= a && this._consoleAvailable()) {
            var c = b[0];
            "[object String]" !== Object.prototype.toString.call(c) ? this._supportObjectView() || (c = c.toString()) : c = EBG.format.apply(null, b);
            if (void 0 === window.opera) {
                for (; this.startNestingGroupNames.length;)
                    window.console.group(this.startNestingGroupNames[0]),
                    this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
                this._callConsoleFunction(a, c)
            } else 
                opera.postError(c)
        }
    }
};
EBG.declareClass(EBG.Logging.Logger, null);
EBG.log = EBG.log || new EBG.Logging.Logger(EBG.Logging.LoggerLevels.DEBUG);
EBG.declareNamespace("Reporter");
EBG.Reporter.ServerReporter = function(a) {
    this.reportFrequency = a.reportFrequency || 0
};
EBG.Reporter.ServerReporter.prototype = {
    report: function(a) {
        this._shouldReport() && this._reportMessage(a)
    },
    getCallStack: function() {
        try {
            throw Error();
        } catch (a) {
            return formatCallStack(a.stack)
        }
    },
    _shouldReport: function() {
        var a=!1;
        0 < this.reportFrequency && this.reportFrequency / 100 > Math.random() && (a=!0);
        return a
    },
    formatCallStack: function(a) {
        if (a) {
            for (var b; b != a;)
                b = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            a = a.replace(/\n/g, "")
        }
        return a
    },
    _reportMessage: function(a) {
        var b = EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=cLog&ord={2}",
        EBG.protocol, EBG.bs, Math.random()), c;
        for (c in a)
            a.hasOwnProperty(c) && (b += "&" + c + "=" + a[c]);
        EBG.adaptor.reportToRemoteServerUsingImage(b)
    }
};
EBG.declareClass(EBG.Reporter.ServerReporter, null);
(function(a, b, c) {
    b || (b = {
        fn: {},
        extend: function() {
            for (var a = arguments[0], b = 1, c = arguments.length; b < c; b++) {
                var d = arguments[b], i;
                for (i in d)
                    a[i] = d[i]
            }
            return a
        }
    });
    b.fn.pm = function() {
        return this
    };
    b.pm = EBG.pm = function(a) {
        d.send(a)
    };
    b.pm.bind = EBG.bind = function(a, b, c, h, i) {
        d.bind(a, b, c, h, i)
    };
    b.pm.unbind = EBG.unbind = function(a, b) {
        d.unbind(a, b)
    };
    b.pm.dispatch = function(a, b, c, h) {
        d._dispatch({
            data: JSON.stringify({
                data: b,
                type: a
            }),
            source: c,
            target: h,
            origin: null
        })
    };
    b.pm.origin = EBG.pm.origin = null;
    var d = {
        send: function(a) {
            var a =
            b.extend({}, d.defaults, a), c = a.target;
            if (a.target && a.type) {
                var g = {
                    data: a.data,
                    type: a.type
                };
                if (a.success)
                    g.callback = d._callback(a.success);
                if (a.error)
                    g.errback = d._callback(a.error);
                "postMessage"in c&&!a.hash && (d._bind(), c.postMessage(JSON.stringify(g), a.origin || "*"))
            }
        },
        bind: function(c, f, g, h, i, j) {
            "postMessage"in a&&!j && (d._bind(h), h = d.data("listeners.postmessage"), h || (h = {}, d.data("listeners.postmessage", h)), j = h[c], j || (j = [], h[c] = j), j.push({
                fn: f,
                origin: i || b.pm.origin,
                bindObj: g
            }))
        },
        unbind: function(a, b) {
            var c =
            d.data("listeners.postmessage");
            if (c && a)
                if (b) {
                    var h = c[a];
                    if (h) {
                        for (var i = [], j = 0, k = h.length; j < k; j++) {
                            var n = h[j];
                            n.fn !== b && i.push(n)
                        }
                        c[a] = i
                    }
                } else 
                    delete c[a]
            },
        data: function(a, b) {
            return b === c ? d._data[a] : d._data[a] = b
        },
        _data: {},
        _CHARS: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        _random: function() {
            for (var a = [], b = 0; 32 > b; b++)
                a[b] = d._CHARS[0 | 32 * Math.random()];
            return a.join("")
        },
        _callback: function(a) {
            var b = d.data("callbacks.postmessage");
            b || (b = {}, d.data("callbacks.postmessage",
            b));
            var c = d._random();
            b[c] = a;
            return c
        },
        _bind: function(b) {
            d.data("listening.postmessage") || (b = b ? b : a, b.addEventListener ? b.addEventListener("message", d._dispatch, !1) : a.attachEvent && b.attachEvent("onmessage", d._dispatch), d.data("listening.postmessage", 1))
        },
        _dispatch: function(a) {
            try {
                var b = JSON.parse(a.data)
            } catch (c) {
                return 
            }
            if (b.type) {
                var h = (d.data("callbacks.postmessage") || {})[b.type];
                if (h)
                    h(b.data);
                else 
                    for (var h = (d.data("listeners.postmessage") || {})[b.type] || [], i = 0, j = h.length; i < j; i++) {
                        var k = h[i];
                        if (k.origin &&
                        a.origin !== k.origin)
                            b.errback && d.send({
                                target: a.source,
                                data: {
                                    message: "postmessage origin mismatch",
                                    origin: [a.origin, k.origin]
                                },
                                type: b.errback
                            });
                        else 
                            try {
                                var n;
                                n = k.bindObj ? k.fn.apply(k.bindObj, [b.data, a]) : k.fn(b.data, a);
                                b.callback && d.send({
                                    target: a.source,
                                    data: n,
                                    type: b.callback
                                })
                            } catch (o) {
                                b.errback && d.send({
                                    target: a.source,
                                    data: o,
                                    type: b.errback
                                })
                            }
                        }
            }
        }
    };
    b.extend(d, {
        defaults: {
            target: null,
            url: null,
            type: null,
            data: null,
            success: null,
            error: null,
            origin: "*",
            hash: !1
        }
    })
})(this, "undefined" === typeof jQuery ? null :
jQuery);
"JSON"in window && window.JSON || (JSON = {});
(function() {
    function a(a) {
        return 10 > a ? "0" + a : a
    }
    function b(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, function(a) {
            var b = h[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + a + '"'
    }
    function c(a, d) {
        var e, h, p, m, r = f, q, l = d[a];
        l && "object" === typeof l && "function" === typeof l.toJSON && (l = l.toJSON(a));
        "function" === typeof i && (l = i.call(d, a, l));
        switch (typeof l) {
        case "string":
            return b(l);
        case "number":
            return isFinite(l) ? "" + l : "null";
        case "boolean":
        case "null":
            return "" +
            l;
        case "object":
            if (!l)
                return "null";
            f += g;
            q = [];
            if ("[object Array]" === Object.prototype.toString.apply(l)) {
                m = l.length;
                for (e = 0; e < m; e += 1)
                    q[e] = c(e, l) || "null";
                p = 0 === q.length ? "[]" : f ? "[\n" + f + q.join(",\n" + f) + "\n" + r + "]" : "[" + q.join(",") + "]";
                f = r;
                return p
            }
            if (i && "object" === typeof i) {
                m = i.length;
                for (e = 0; e < m; e += 1)
                    h = i[e], "string" === typeof h && (p = c(h, l)) && q.push(b(h) + (f ? ": " : ":") + p)
                } else 
                    for (h in l)
                        Object.hasOwnProperty.call(l, h) && (p = c(h, l)) && q.push(b(h) + (f ? ": " : ":") + p);
            p = 0 === q.length ? "{}" : f ? "{\n" + f + q.join(",\n" + f) + "\n" +
            r + "}" : "{" + q.join(",") + "}";
            f = r;
            return p
        }
    }
    if ("function" !== typeof Date.prototype.toJSON)
        Date.prototype.toJSON = function() {
            return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z"
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        };
    var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f, g, h = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, i;
    if ("function" !== typeof JSON.stringify)
        JSON.stringify = function(a, b, d) {
            var e;
            g = f = "";
            if ("number" === typeof d)
                for (e = 0; e < d; e += 1)
                    g += " ";
            else 
                "string" === typeof d && (g = d);
                if ((i = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))
                    throw Error("JSON.stringify");
                    return c("",
                    {
                        "": a
                    })
                };
    if ("function" !== typeof JSON.parse)
        JSON.parse = function(a, b) {
            function c(a, d) {
                var e, f, g = a[d];
                if (g && "object" === typeof g)
                    for (e in g)
                        Object.hasOwnProperty.call(g, e) && (f = c(g, e), void 0 !== f ? g[e] = f : delete g[e]);
                        return b.call(a, d, g)
                    }
                    var e;
                    d.lastIndex = 0;
                    d.test(a) && (a = a.replace(d, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                    }));
                    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                        return e = eval("(" + a + ")"), "function" === typeof b ? c({
                            "": e
                        }, "") : e;
                        throw new SyntaxError("JSON.parse");
                    }
})();
MsgProtocol = function() {};
MsgProtocol.prototype = {
    _interval_id: null,
    _last_hash: "",
    _cache_bust: 1,
    postMessage: function(a, b, c) {
        c = c || parent;
        if (b)
            c.location ? c.location = b.replace(/#.*$/, "") + "#" + + new Date + this._cache_bust++ + "&" + a : c.src = b.replace(/#.*$/, "") + "#" + + new Date + this._cache_bust++ + "&" + a
    },
    receiveMessages: function(a, b) {
        this._interval_id && clearInterval(this._interval_id);
        this._interval_id = null;
        if (a)
            this._interval_id = setInterval(function() {
                var b = document.location.hash, d = /^#?\d+&/;
                if (b !== this._last_hash && d.test(b))
                    this._last_hash =
                    b, a({
                        data: b.replace(d, "")
                    })
                }, b)
    },
    finishMessaging: function() {
        clearInterval(this._interval_id);
        this._interval_id = null
    }
};
"undefined" != typeof EBG ? EBG.msgProtocol = new MsgProtocol : EBG = {
    msgProtocol: new MsgProtocol
};
EBG.declareNamespace("API");
EBG.API.InjectionMethod = {
    APPEND: "append",
    INSERT_BEFORE: "insertBefore"
};
EBG.API.BrowserTypes = {
    NON_SUPPORTED: 0,
    IE: 1,
    FF: 2,
    NN: 3,
    SAFARI: 4,
    CHROME: 5,
    AOL: 6,
    OPERA: 7
};
EBG.API.PlatformTypes = {
    NON_SUPPORTED: 0,
    WIN_95: 1,
    WIN_98: 2,
    WIN_2000: 3,
    WIN_XP: 4,
    WIN_ME: 5,
    WIN_NT: 6,
    MAC: 7,
    WIN_VISTA: 8,
    WIN_7: 9,
    IPHONE: 10,
    IPAD: 11,
    IPOD: 12,
    ANDROID_2_TAB: 13,
    ANDROID_3_TAB: 14,
    BLACKBARRY_5: 15,
    WIN_MOBILE_7: 16,
    ANDROID_2_MOBILE: 17,
    ANDROID_3_MOBILE: 18,
    ANDROID_4_MOBILE: 21,
    MAC_NEW: 23
};
EBG.API.DeviceTypes = {
    DESKTOP: 0,
    MOBILE: 1,
    TABLET: 2,
    UNKNOWN: 3
};
EBG.VideoInteraction = {
    STARTED: "ebVideoStarted",
    PERCENT_25_PLAYED: "eb25Per_Played",
    PERCENT_50_PLAYED: "eb50Per_Played",
    PERCENT_75_PLAYED: "eb75Per_Played",
    FULLPLAY: "ebVideoFullPlay",
    MUTE: "ebVideoMute",
    UNMUTE: "ebVideoUnmute",
    PAUSE: "ebVideoPause",
    REPLAY: "ebVideoReplay",
    UNMUTED: "ebVideoUnmuted",
    FULLSCREEN_START: "ebFSStart",
    FULLSCREEN_END: "ebFSEnd",
    FULLSCREEN_MUTE: "ebFSVideoMute",
    FULLSCREEN_PAUSE: "ebFSVideoPause",
    SLIDER_DRAGGED: "ebSliderDragged",
    VIDEO_PLAY_DURATION: "ebVideoPlayDuration",
    VIDEO_ASSET_DURATION: "ebVideoAssetDuration",
    FULLSCREEN_DURATION: "ebFSVideoPlayDuration",
    FULLSCREEN_ASSET_DURATION: "ebFSVideoAssetDuration",
    USER_INITIATED_VIDEO: "ebUserInitiatedVideo"
};
EBG.EBMessage = {
    REQ_INIT: "reqInit",
    INIT: "ebInit",
    INITDONE: "ebInitDone",
    GET_ENVIROMENT: "ebGetEnvironment",
    SHOW_DEFAULT_IMAGE: "ebShowDefaultImage",
    CLICKTHROUGH: "ebclickthrough",
    VERSION_TRACKING_IMPRESSION: "ebversiontrackingimpression",
    USER_ACTION_COUNTER: "ebCIUserActionCounter",
    AUTOMATIC_EVENT_COUNTER: "ebCIAutomaticEventCounter",
    START_TIMER: "ebCIStartTimer",
    UPDATE_TIMER: "ebUpdateTimer",
    STOP_TIMER: "ebCIStopTimer",
    START_VIDEO_TIMER: "ebStartVideoTimer",
    STOP_VIDEO_TIMER: "ebendvideotimer",
    VIDEO_INTERACTION: "ebVideoInteraction",
    VIDEO_LOAD: "ebVideoLoad",
    INIT_VIDEO_LOADER: "ebInitVideoLoader",
    VIDEO_FS_OPEN: "ebVideoFSOpen",
    VIDEO_FS_CLOSE: "ebVideoFSClose",
    VIDEO_FS_AUTO_CLOSE: "ebVideoFSAutoClose",
    START_VIDEO: "ebtStartVideo",
    STOP_VIDEO: "ebtStoptVideo",
    UPDATE_VIDEO_DURATION: "ebtUpdateVideoDuration",
    FULL_SCREEN_OPEN: "ebFullScreenOpen",
    FULL_SCREEN_CLOSE: "ebFullScreenClose",
    FULL_SCREEN_AUTO_CLOSE: "ebFullScreenAutoClose",
    MOUSE_MOVE: "ebMouseMove",
    INIT_EXPANSION_PARAMS: "ebInitExpansionParams",
    EXPAND: "ebExpandPanel",
    EXPAND_DONE: "ebExpandDone",
    COLLAPSE: "ebCollapsePanel",
    COLLAPSE_DONE: "ebCollapseDone",
    NOTIFY_INTERACTION_MONITOR: "NotifyInteractionMonitor",
    HIDE_INTRO: "ebHideIntro",
    INTRO_FULL_PLAY: "ebIntroFullPlay",
    KEEP_AD_OPREN: "ebKeepAdOpen",
    GO_TO_MINISITE: "ebGoToMiniSite",
    UPDATE_CLICK: "ebUpdateClick",
    DOCUMENT_LOADED: "ebDocumentLoaded",
    PLAY_VIDEO_ON_NATIVE_PLAYER: "playVideoOnNativePlayer",
    CREATE_CALENDAR_EVENT: "createCalendarEvent",
    STORE_PICTURE: "storePicture",
    SDK_DATA_CHANGE: "sdkDataChange",
    SDK_EVENT: "sdkEvent",
    ADAPTOR_READY: "adaptorReady",
    SWIPE: "ebSwipe",
    DISPOSE: "ebDispose",
    SET_RESIZE_PROPS: "ebResizeProperties",
    RESIZE: "ebResize",
    SET_EXPAND_PROPS: "ebExpandProperties",
    SET_ORIENTATION_PROPS: "ebOrientationProperties",
    CLOSE: "ebClose",
    SET_STATE: "ebSetstate",
    RESET_STATE: "ebResetstate"
};
EBG.DurationInteraction = {
    TIMER: "Timer",
    AGGREGATE: "Aggregate"
};
EBG.INNERIFRAMEMessage = {
    LOADED: "ebInnerIframeLoaded",
    INIT: "ebInitInnerIframe",
    VERIFY: "ebVerifyInnerIframe",
    EBO: "ebO",
    GLOBALPARAMS: "ebGlobalParams",
    CONTINUE_SENDING: "ContinueSending",
    NOT_LASTMSG: "NotLastMsg",
    LASTMSG: "LastMsg",
    ADCONFIG_REQUEST: "AdConfig_Request",
    SECRET_TAGS: "Secret_Tags"
};
EBG.FS = {
    EB_VERSION_TRACKING_IMPRESSION: "ebversiontrackingimpression",
    EB_CLICKTHROUGH: "ebclickthrough",
    EB_CREATIVE_EVENT_SUBSCRIPTION: "ebcreativeaddhdr",
    EB_CI_USER_ACTION_COUNTER: "ebciuseractioncounter",
    EB_CI_AUTOMATIC_EVENT_COUNTER: "ebciautomaticeventcounter",
    EB_VIDEO_INTERACTION: "ebvideointeraction",
    EB_START_TIMER: "ebstarttimer",
    EB_END_TIMER: "ebendtimer",
    EB_CI_START_TIMER: "ebcistarttimer",
    EB_CI_STOP_TIMER: "ebcistoptimer",
    EB_UPDATE_TIMER: "ebupdatetimer",
    EB_START_VIDEO_TIMER: "ebstartvideotimer",
    EB_STOP_VIDEO_TIMER: "ebendvideotimer",
    EB_PAGE_LOAD: "ebpageload",
    EB_COMMAND: "ebcommand",
    EB_MSG: "ebmsg",
    EB_EXPAND_PANEL: "ebexpandpanel",
    EB_COLLAPSE_PANEL: "ebcollapsepanel",
    EB_SET_STATE: "ebsetstate",
    EB_RESET_STATE: "ebresetstate",
    EB_MOUSE_TRACKER: "ebmousetracker",
    EB_MOUSE_MOVE: "ebmousemove",
    EB_TEST_DC: "ebtestdc",
    EB_CLOSE_AD: "ebclosead",
    EB_REPLAY_AD: "ebreplayad",
    EB_REPLAY_EXP: "ebreplayexp",
    EB_LOAD_RICH_BANNER: "ebloadrichbanner",
    EB_SHOW_RICH_BANNER: "ebshowrichbanner",
    EB_INIT_VIDEO_LOADER: "ebinitvideoloader",
    EB_HIDE_INTRO: "ebhideintro",
    EB_INTRO_FULL_PLAY: "ebintrofullplay",
    EB_KEEP_AD_OPREN: "ebkeepadopen",
    EB_GO_TO_MINISITE: "ebgotominisite",
    EB_VIDEO_LOAD: "ebvideoload",
    EB_VIDEO_LOAD_AND_PLAY: "ebvideoloadandplay",
    EB_FULL_SCREEN_OPEN: "ebfullscreenopen",
    EB_FULL_SCREEN_CLOSE: "ebfullscreenclose",
    EB_FULL_SCREEN_AUTO_CLOSE: "ebfullscreenautoclose",
    EB_VIDEO_FS_OPEN: "ebvideofsopen",
    EB_VIDEO_FS_CLOSE: "ebvideofsclose",
    EB_VIDEO_FS_AUTO_CLOSE: "ebvideofsautoclose",
    EB_START_VIDEO: "ebtstartvideo",
    EB_STOP_VIDEO: "ebtstopvideo",
    EB_UPDATE_VIDEO_DURATION: "ebtupdatevideoduration",
    EB_GET_JS_VAR: "ebgetjsvar",
    EB_GET_ALL_JS_VARS: "ebgetalljsvars",
    EB_SET_JS_VAR: "ebsetjsvar",
    EB_INIT_SE: "ebinitse",
    EB_SET_SE_PROXY: "ebsetseproxy",
    EB_SE_EXPAND_STARTED: "ebseexpandstarted",
    EB_SE_RETRACT_STARTED: "ebseretractstarted",
    EB_SE_RETRACT_FINISHED: "ebseretractfinished",
    EB_NOTIFICATION: "notification",
    EB_VIDEO_ACTIVE_MODE: "ebvideoactivemode"
};
EBG.ActionType = {
    USER: "user",
    AUTO: "auto"
};
EBG.ExpBaseInteractions = {
    PANELS_VIEWED: "ebPanelsViewed",
    AUTO_SHOW: "autoshow",
    DURATION: "duration"
};
EBG.SingleExpInteractions = EBG.ExpBaseInteractions;
EBG.adTypes = {
    RichBannerHtml5: "Html5Banner",
    SEBannerHtml5: "Html5SEBanner",
    ExpBannerHtml5: "Html5ExpBanner",
    StdBanner: "StdBanner",
    Banner: "Banner",
    SingleExpBanner: "SingleExpBanner",
    ExpBanner: "ExpBanner",
    VisibilityAd: "Visibility",
    FloatingAd: "FloatingAd",
    FloatingAdWithRem: "FloatingAdWithReminder",
    TrackingAd: "Tracking"
};
EBG.WindowTarget = {
    BLANK: "_blank",
    SELF: "_self",
    PARENT: "_parent",
    TOP: "_top"
};
EBG.Const = {
    OUTER_DIV: "eyeDiv",
    DATACAPTURE: "/BurstingPipe/BurstingDataCapturePipe.asp",
    AKAMAIFCS_PLUID_9: "rtmp://flv.stream.atwola.com/flash/flv/mm",
    AKAMAIFCS_PLUID_43: "rtmp://eyeblaster.fcod.msecnd.net/vod/a10061/e1",
    AKAMAIFCS_PLUID_42_45: "rtmp://cp57388.edgefcs.net/ondemand",
    AKAMAI_DEFAULT: "rtmp://cp16207.edgefcs.net/ondemand",
    SHOW_HIDE_FLAG: "data-ebhidingoverlappingelement",
    SHOW_HIDE_BACKUP: "data-ebvisibilitybackup"
};
EBG.PanelPositionType = {
    PAGE_RELATIVE_PERCENTAGE: 0,
    BANNER_RELATIVE_PIXELS: 1,
    PAGE_RELATIVE_PIXELS: 2,
    VIEWPORT_RELATIVE_PERCENTAGE: 3,
    VIEWPORT_RELATIVE_PIXELS: 4
};
EBG.PanelCorner = {
    TOP_LEFT: 1,
    TOP_RIGHT: 2,
    BOTTOM_LEFT: 3,
    BOTTOM_RIGHT: 4
};
EBG.AnimationType = {
    NONE: "none",
    LINEAR: "linear",
    EASE_OUT: "easeout",
    EASE_OUT_SNAP: "easeoutsnap"
};
EBG.ExpandCollapseMethod = {
    CLIP: "clip",
    RESIZE: "resize"
};
EBG.AnimationDefaults = {
    easeOutCoefficient: 0.1,
    stepTime: 10,
    linearSteps: 50,
    snapThreshold: 10,
    animationType: EBG.AnimationType.NONE,
    snap: !1,
    checkShowHideOnEachStep: !1,
    hideAssetAfterExpand: !1,
    removeAssetAfterExpand: !1,
    hideAssetAfterCollapse: !0,
    removeAssetAfterCollapse: !0,
    method: EBG.ExpandCollapseMethod.ExpBanner,
    endAnimationHideAsset: !1,
    endAnimationRemoveAsset: !1
};
EBG.AnimationPushDownDefaults = {
    easeOutCoefficient: 0.1,
    stepTime: 50,
    linearSteps: 20,
    snapThreshold: 10,
    animationType: EBG.AnimationType.LINEAR,
    snap: !1,
    method: EBG.ExpandCollapseMethod.RESIZE,
    checkShowHideOnEachStep: !1,
    hideAssetAfterExpand: !1,
    removeAssetAfterExpand: !1,
    hideAssetAfterCollapse: !0,
    removeAssetAfterCollapse: !0,
    method: EBG.ExpandCollapseMethod.ExpBanner,
    endAnimationHideAsset: !1,
    endAnimationRemoveAsset: !1
};
EBG.AnimProps = {
    easeOutCoefficient: "easeOutCoefficient",
    snapThreshold: "snapThreshold",
    method: "method",
    endAnimationHideAsset: "endAnimationHideAsset",
    endAnimationRemoveAsset: "endAnimationRemoveAsset"
};
EBG.AnimDefaultProps = {
    stepTime: "stepTime",
    linearSteps: "linearSteps",
    animationType: "animationType"
};
EBG.AnimNonDefaultPanelValues = {
    animationType: EBG.AnimationType.NONE,
    stepTime: 0,
    linearSteps: 1
};
EBG.AnimExpansionProps = {
    hideAssetAfterExpand: "hideAssetAfterExpand",
    removeAssetAfterExpand: "removeAssetAfterExpand"
};
EBG.AnimCollapseProps = {
    hideAssetAfterCollapse: "hideAssetAfterCollapse",
    removeAssetAfterCollapse: "removeAssetAfterCollapse"
};
EBG.ProtectedElementIds = ["ebAd", "eyeDiv", "ebDefault", "ebRich", "ebDiv"];
EBG.VisibilityMode = {
    DEFAULT_MODE: "defaultMode",
    BASIC_MODE: "basicMode",
    ENHANCED_MODE: "enhancedMode"
};
EBG.AcCertProgram = {
    IAB_EU: 0,
    NAI_US: 1
};
EBG.AcIconPosition = {
    TopRight: 0,
    TopLeft: 1,
    BottomRight: 2,
    BottomLeft: 3
};
EBG.PreloadType = {
    DefaultImg: 0,
    PreloadImg: 1,
    DefaultFlash: 2
};
EBG.SDK_STATES = EBG.SDK_STATES || {};
EBG.SDK_STATES.API = {
    DEFAULT: "SDKdefault",
    EXPANDED: "SDKexpanded",
    LOADING: "SDKloading",
    RESIZED: "SDKresized"
};
EBG.SDK_EVENTS = EBG.SDK_EVENTS || {};
EBG.SDK_EVENTS.API = {
    STATE_CHANGE: "SDKstateChange",
    ERROR: "SDKerror",
    READY: "SDKready",
    VIEWABLE_CHANGE: "SDKviewableChange",
    SIZE_CHANGE: "SDKsizeChange",
    RESIZE_PROPS_CHANGE: "SDKresizePropsChange",
    EXPAND_PROPS_CHANGE: "SDKexpandPropsChange",
    WINDOW_SIZE_CHANGE: "windowSizeChange"
};
EBG.declareNamespace("Events");
EBG.Events.EventTiming = {
    BEFORE: "BEFORE",
    ONTIME: "ONTIME",
    AFTER: "AFTER",
    ONTIME_AND_AFTER: "ONTIME_AND_AFTER"
};
EBG.Events.EventNames = {
    STAM: "STAM",
    CREATE_AD: "CREATE_AD",
    CREATE_ADAPTOR: "CREATE_ADAPTOR",
    CREATE_INT_MGR: "CREATE_INT_MGR",
    CREATE_ANIM_MGR: "CREATE_ANIM_MGR",
    CREATE_POSITIONING_HELPER: "CREATE_POSITIONING_HELPER",
    SHOW_AD: "SHOW_AD",
    ADD_CREATIVES: "ADD_CREATIVES",
    ADD_INTERACTION: "ADD_INTERACTION",
    ADD_EYE_DIV: "ADD_EYE_DIV",
    ADD_HTML5_MAIN_CREATIVE: "ADD_HTML5_MAIN_CREATIVE",
    ADD_HTML5_PANEL_CREATIVE: "ADD_HTML5_PANEL_CREATIVE",
    ADD_EMPTY_BANNER_CREATIVE: "ADD_EMPTY_BANNER_CREATIVE",
    ADD_BANNER_DEFAULT_IMAGE_CREATIVE: "ADD_BANNER_DEFAULT_IMAGE_CREATIVE",
    ADD_BANNER_PRELOAD_IMAGE_CREATIVE: "ADD_BANNER_PRELOAD_IMAGE_CREATIVE",
    ADD_BANNER_DEFAULT_FLASH_CREATIVE: "ADD_BANNER_DEFAULT_FLASH_CREATIVE",
    ADD_BANNER_RICH_FLASH_CREATIVE: "ADD_BANNER_RICH_FLASH_CREATIVE",
    ADD_FLOATING_INTRO_CREATIVE: "ADD_FLOATING_INTRO_CREATIVE",
    ADD_FLOATING_REMINDER_CREATIVE: "ADD_FLOATING_REMINDER_CREATIVE",
    ADD_FLOATING_MINISITE_CREATIVE: "ADD_FLOATING_MINISITE_CREATIVE",
    ADD_PANEL_RICH_FLASH_CREATIVE: "ADD_PANEL_RICH_FLASH_CREATIVE",
    SHOW_BANNER_RICH_FLASH_CREATIVE: "SHOW_BANNER_RICH_FLASH_CREATIVE",
    SHOW_PANEL_RICH_FLASH_CREATIVE: "SHOW_PANEL_RICH_FLASH_CREATIVE",
    SHOW_PANEL_CREATIVE: "SHOW_PANEL_CREATIVE",
    SHOW_REMINDER: "SHOW_REMINDER",
    SHOW_MINISITE: "SHOW_MINISITE",
    PAGE_LOAD: "PAGE_LOAD",
    COLLECT_TIMERS: "COLLECT_TIMERS",
    PAGE_UNLOAD: "PAGE_UNLOAD",
    PAGE_BEFORE_UNLOAD: "PAGE_BEFORE_UNLOAD",
    PAGE_HIDE: "PAGE_HIDE",
    PAGE_RESIZE: "PAGE_RESIZE",
    PAGE_SCROLL: "PAGE_SCROLL",
    PAGE_FOCUS: "PAGE_FOCUS",
    PAGE_FOCUSIN: "PAGE_FOCUSIN",
    PAGE_FOCUSOUT: "PAGE_FOCUSOUT",
    PAGE_BLUR: "PAGE_BLUR",
    PAGE_HIDDEN: "PAGE_HIDDEN",
    PAGE_VISIBLE: "PAGE_VISIBLE",
    INTERACTION_REPORT_REMOTE_SERVERS: "INTERACTION_REPORT_REMOTE_SERVERS",
    START_TIMER: "START_TIMER",
    STOP_TIMER: "STOP_TIMER",
    UPDATE_TIMER: "UPDATE_TIMER",
    HANDLE_COUNTER_INTERACTION: "HANDLE_COUNTER_INTERACTION",
    DEFAULT_CLICK: "DEFAULT_CLICK",
    EXPAND: "EXPAND",
    COLLAPSE: "COLLAPSE",
    USER_INTERACTION: "USER_INTERACTION",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    USER_INITIATED_VIDEO: "USER_INITIATED_VIDEO",
    DWELL_UNIQUE: "DWELL_UNIQUE",
    DWELL_VIDEO_START: "DWELL_VIDEO_START",
    DWELL_VIDEO_STOP: "DWELL_VIDEO_STOP",
    CREATIVE_CONTAINER_READY: "CREATIVE_CONTAINER_READY",
    RICH_FLASH_PLAYED: "RICH_FLASH_PLAYED",
    REPLAY_AD: "REPLAY_AD",
    BANDWITH_DETECTED: "BANDWITH_DETECTED",
    FULL_SCREEN_START: "FULL_SCREEN_START",
    FULL_SCREEN_END: "FULL_SCREEN_STOP",
    ANIMATE_PANEL: "ANIMATE_PANEL",
    CLOSE_AD: "CLOSE_AD",
    OPEN_PAGE: "OPEN_PAGE",
    MAX_AD_DURATION: "MAX_AD_DURATION",
    FLASH_IN_FRAME_TWO: "FLASH_IN_FRAME_TWO",
    SHOW_HIDE_ELEMENTS: "SHOW_HIDE_ELEMENTS",
    DEFAULT_IMPRESSION: "DEFAULT_IMPRESSION",
    AIE_LOADED: "AIE_LOADED",
    INIT_MANAGERS: "INIT_MANAGERS",
    MOUSE_MOVE_NEEDED: "MOUSE_MOVE_NEEDED",
    VISIBILITY_CHECK: "VISIBILITY_CHECK",
    VISIBILITY_HIDDEN: "VISIBILITY_HIDDEN",
    AD_START: "AD_START",
    ELEMENT_LOADED: "ELEMENT_LOADED"
};
EBG.Events.EbEventNames = {
    PAGE_LOAD: EBG.Events.EventNames.PAGE_LOAD
};
EBG.Events.EventSubscription = function(a, b, c) {
    this.eventName = a;
    this.callback = b;
    this.callbackBinding = c ? c : null
};
EBG.Events.EventSubscription.prototype = {
    dispatcherFilters: null,
    timing: EBG.Events.EventTiming.ONTIME,
    isElementEvent: !1,
    elementId: "",
    isDocumentEvent: !1,
    isValid: function() {
        return EBG.isFunc(this.callback) && (!this.callbackBinding || EBG.isObj(this.callbackBinding))
    },
    toString: function() {
        return EBG.format("EventSubscription: eventName={0}, timing={1}, callback={2}, callbackBinding={3}, dispatcherFilters={4}", this.eventName, this.timing, EBG.typeOf(this.callback), EBG.typeOf(this.callbackBinding), EBG.typeOf(this.dispatcherFilters))
    }
};
EBG.declareClass(EBG.Events.EventSubscription, null);
EBG.Events.Event = function(a) {
    this.name = a;
    this.creationTime =+ new Date
};
EBG.Events.Event.prototype = {
    dispatcher: null,
    eventData: null,
    timing: null,
    toString: function() {
        return EBG.format("Event: name={0}, creationTime={1}, dispatcher={2}, eventData={3}", this.name, this.creationTime, EBG.typeOf(this.dispatcher), EBG.typeOf(this.eventData))
    }
};
EBG.declareClass(EBG.Events.Event, null);
EBG.Events.EventManager = function() {
    this._subscriptions = {}
};
EBG.Events.EventManager.prototype = {
    _subscriptions: {},
    subscribeToEvent: function(a) {
        if (a.isValid())
            if (a.isElementEvent)
                EBG.adaptor && EBG.adaptor.subscribeToEventOnElement(a.eventName, a.elementId, a.callback);
            else {
                var b = this._subscriptions[a.eventName] = this._subscriptions[a.eventName] || {}, c;
                for (c in EBG.Events.EventTiming)
                    EBG.Events.EventTiming.hasOwnProperty(c) && (b[c] = b[c] || []);
                    - 1 == this._getSubscriptionId(a, b[a.timing]) && (b[a.timing].push(a), EBG.adaptor && EBG.adaptor.hasEvent(a.eventName) && EBG.adaptor.subscribeToEvent(a.eventName,
                    a.isDocumentEvent))
            }
        },
    unsubscribeFromEvent: function(a) {
        if (a && a.isValid())
            if (a.isElementEvent)
                EBG.adaptor && EBG.adaptor.unsubscribeFromEventOnElement(a.eventName, a.elementId, a.callback);
            else if (this._subscriptions[a.eventName] && this._subscriptions[a.eventName][a.timing]) {
                var b = this._subscriptions[a.eventName][a.timing], a = this._getSubscriptionId(a, b);
                - 1 != a && (b[a] = null)
            }
    },
    dispatchEvent: function(a) {
        var b=!1;
        switch (a.timing) {
        case EBG.Events.EventTiming.BEFORE:
        case EBG.Events.EventTiming.ONTIME:
        case EBG.Events.EventTiming.AFTER:
            b =
            this._dispatchEventByTiming(a, a.timing);
            break;
        case EBG.Events.EventTiming.ONTIME_AND_AFTER:
            b = (b = this._dispatchEventByTiming(a, EBG.Events.EventTiming.ONTIME)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.AFTER);
            break;
        default:
            b = (b = (b = this._dispatchEventByTiming(a, EBG.Events.EventTiming.BEFORE)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.ONTIME)) || this._dispatchEventByTiming(a, EBG.Events.EventTiming.AFTER)
        }
        return b
    },
    attachToAdaptor: function() {
        EBG.adaptor.setListener(this.dispatchEvent,
        this)
    },
    _dispatchEventByTiming: function(a, b) {
        var c = this._subscriptions[a.name];
        if (!c)
            return !1;
        for (var c = c[b], d=!1, e = 0; e < c.length; e++) {
            var f = c[e];
            if (f && (f = this._dispatchEventToSubscription(a, f), EBG.isBool(f)&&!f)) {
                d=!0;
                break
            }
        }
        return d
    },
    _dispatchEventToSubscription: function(a, b) {
        var c = b.dispatcherFilters;
        if (EBG.isObj(c))
            for (var d in c)
                if (c.hasOwnProperty(d)) {
                    var e = c[d], f=!0, g = d.split("."), h = a.dispatcher;
                    if (h)
                        for (var i = 0; i < g.length; i++) {
                            var h = h[g[i]], j = i == g.length - 1;
                            if (!h || j && h !== e) {
                                f=!1;
                                break
                            }
                        }
                        if (!f)
                            return null
                }
        c =
        null;
        d = b.callback;
        if (EBG.isFunc(d)) {
            e = [a];
            try {
                c = d.apply(b.callbackBinding, e)
            } catch (k) {}
        }
        return c
    },
    _getSubscriptionId: function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c] && b[c].callback === a.callback && b[c].callbackBinding === a.callbackBinding && b[c].isDocumentEvent === a.isDocumentEvent && this._compareFilters(b[c].dispatcherFilters, a.dispatcherFilters))
                return c;
        return - 1
    },
    _compareFilters: function(a, b) {
        if (!EBG.isObj(a))
            return EBG.isObj(b)?!1 : !0;
        if (!EBG.isObj(b))
            return !1;
        for (var c in a)
            if (a.hasOwnProperty(c))
                if (b.hasOwnProperty(c)) {
                    if (a[c] !==
                    b[c])
                        return !1
                } else 
                    return !1;
        for (c in b)
            if (b.hasOwnProperty(c)&&!a.hasOwnProperty(c))
                return !1;
        return !0
    }
};
EBG.declareClass(EBG.Events.EventManager, null);
EBG.eventMgr = EBG.eventMgr || new EBG.Events.EventManager;
EBG.declareNamespace("Adaptors");
EBG.Adaptors.TagNames = {
    DIV: "div",
    IFRAME: "iframe",
    IMG: "img",
    SCRIPT: "script",
    OBJECT: "object",
    EMBED: "embed",
    SPAN: "span",
    A: "a"
};
EBG.Adaptors.InjectionMethod = EBG.API.InjectionMethod;
EBG.Adaptors.WindowProp = {
    top: "top",
    left: "left",
    location: "location",
    menubar: "menubar",
    width: "width",
    height: "height"
};
EBG.Adaptors.MoreSupportedEvent = {
    visibilitychange: 1,
    mozvisibilitychange: 1,
    msvisibilitychange: 1,
    webkitvisibilitychange: 1
};
EBG.Adaptors.StdWebAdaptor = function() {
    this._setEvents()
};
EBG.Adaptors.StdWebAdaptor.onEnvEvent = function() {
    EBG.adaptor._handleEvent.apply(EBG.adaptor, arguments)
};
EBG.Adaptors.StdWebAdaptor.prototype = {
    _environmentEvents: {},
    _logicalEvents: {},
    _subscribedEvents: {},
    _subscribedEventsOnElement: [],
    _listener: null,
    _listenerBinding: null,
    initInnerModules: function(a, b, c, d, e) {
        if (!this.browser)
            this.browser = new EBG.Adaptors.Browser(a, b, c, d, e);
        if (!this.flash)
            this.flash = EBG.Adaptors.FlashDetector ? new EBG.Adaptors.FlashDetector : null
    },
    registerSpecialBrowserEvents: function() {},
    copy: function(a) {
        for (var b in this._subscribedEvents)
            this._subscribedEvents.hasOwnProperty(b) && (this._removeEventListener(window,
            this._environmentEvents[b].name, EBG.Adaptors.StdWebAdaptor.onEnvEvent), a.subscribeToEvent(b));
        for (b = 0; b < this._subscribedEventsOnElement.length; b++) {
            var c = this._subscribedEventsOnElement[b];
            if (c) {
                var d = c.elementId, e = c.eventName, c = c.callback, f = this.getElementById(d);
                f && (this._removeEventListener(f, e, c), a.subscribeToEventOnElement(e, d, c))
            }
        }
    },
    intMonitorExist: function() {
        return EBG.isPreview && top.ebHandleFsCommandsPrev
    },
    notifyIntMonitor: function(a) {
        top.ebHandleFsCommandsPrev(a.command, a.args, a.objName,
        a.adId, a.elapsedTime)
    },
    hasEvent: function(a) {
        return !!this._environmentEvents[a]
    },
    generateElementId: function(a, b) {
        return EBG.format("eb{0}_{1}", a, b)
    },
    _getTags: function(a, b) {
        EBG.isGlobalDef("JSON");
        var c = "";
        if (b && a.tagName == EBG.Adaptors.TagNames.SCRIPT && a.text&&!a.attributes)
            b.push(a);
        else {
            c = "";
            a.attributes && (this._setObjDefaultAttributes(a), c = this._getObjAttributesStr(a));
            c = EBG.format("<{0} {1}>", a.tagName, c);
            a.innerHTML && (c += a.innerHTML);
            a.text && (c += a.text);
            a.params && (c += this._getObjParamsStr(a));
            if (a.children)
                for (var d = 0; d < a.children.length; d++)
                    c += this._getTags(a.children[d], b);
            c += EBG.format("</{0}>", a.tagName)
        }
        return c
    },
    writeReportingIFrame: function(a, b, c) {
        this.inject({
            tagName: EBG.Adaptors.TagNames.IFRAME,
            attributes: {
                id: a,
                src: b,
                style: {
                    width: "0px",
                    height: "0px"
                },
                frameborder: 0
            }
        }, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(c))
    },
    writeScript: function(a, b, c) {
        try {
            this.inject({
                tagName: EBG.Adaptors.TagNames.SCRIPT,
                attributes: {
                    id: a,
                    name: a,
                    src: b
                }
            }, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(c))
        } catch (d) {}
    },
    write: function(a) {
        this._documentWrite(this._getTags(a))
    },
    inject: function(a, b, c) {
        var d = c.ownerDocument.createElement(a.tagName);
        if (a.attributes) {
            this._setObjDefaultAttributes(a);
            for (var e in a.attributes)
                EBG.isObj(a.attributes[e]) ? this.setStyleToElem(d, a.attributes[e]) : d.setAttribute(e, a.attributes[e])
        }
        switch (b) {
        case EBG.Adaptors.InjectionMethod.INSERT_BEFORE:
            c.parentNode.insertBefore(d, c);
            break;
        default:
            c.appendChild(d)
        }
        e = "";
        if (a.innerHTML)
            e = a.innerHTML;
        var f = [];
        if (a.children)
            for (var g = 0; g < a.children.length; g++)
                e +=
                EBG.adaptor._getTags(a.children[g], f);
        if (e)
            d.innerHTML = e;
        if (a.text)
            d.text = a.text;
        for (g = 0; g < f.length; g++)
            this.inject(f[g], b, c)
    },
    addInlineDOM: function(a, b) {
        this.inject(a, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(b))
    },
    setInnerHtml: function(a, b) {
        a.innerHTML = b
    },
    setStyleToElem: function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a.style[c] = b[c])
    },
    getStyleOfElem: function(a) {
        if (a)
            return a.style
    },
    setListener: function(a, b) {
        this._listener = a;
        this._listenerBinding = b
    },
    subscribeToEvent: function(a, b) {
        var c =
        this.getDisplayWin(), d = this.getPageWin();
        if (this.hasEvent(a)&&!this._subscribedEvents[a]) {
            var e = this._environmentEvents[a], f = e.inCurWin ? window: this.getPageWin();
            if (b)
                f = f.document;
            this._logicalEvents[e.name].signInAllWindows && this.serving.detectServingMode(!0) === EBG.Adaptors.ServingMode.FRIENDLY_IFRAME && c !== d ? (this._addEventListener(d, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent), this._addEventListener(c, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent)) : this._addEventListener(f, e.name, EBG.Adaptors.StdWebAdaptor.onEnvEvent);
            this._subscribedEvents[a] = {}
        }
    },
    subscribeToEventOnElement: function(a, b, c) {
        var d=!1, e = "string" == typeof b ? this.getDisplayWin().document.getElementById(b) : b;
        e || (d=!0);
        for (var f = this._subscribedEventsOnElement.length, g = 0; g < f; g++)
            if (this._subscribedEventsOnElement[g] && this._subscribedEventsOnElement[g].elementId == b && this._subscribedEventsOnElement[g].eventName == a) {
                d=!0;
                break
            }
        d || (this._addEventListener(e, a, c), this._subscribedEventsOnElement[f] = {
            elementId: b,
            eventName: a,
            callback: c
        })
    },
    unsubscribeFromEventOnElement: function(a,
    b, c) {
        var d = "string" == typeof b ? this.getDisplayWin().document.getElementById(b): b;
        if (d) {
            for (var e = this._subscribedEventsOnElement.length, f =- 1, g = 0; g < e; g++)
                if (this._subscribedEventsOnElement[g] && this._subscribedEventsOnElement[g].elementId == b && this._subscribedEventsOnElement[g].eventName == a && this._subscribedEventsOnElement[g].callback == c) {
                    f = g;
                    break
                }
            0 <= g && (this._removeEventListener(d, a, c), this._subscribedEventsOnElement[f] = null)
        }
    },
    _addEventListener: function(a, b, c) {
        "load" == b && this.isPageLoaded() ? setTimeout(function() {
            c({
                type: "load"
            })
        },
        5) : window.addEventListener ? a.addEventListener(b, c, !1) : window.attachEvent && a.attachEvent("on" + b, c)
    },
    _removeEventListener: function(a, b, c) {
        window.removeEventListener ? a.removeEventListener(b, c, !1) : window.detachEvent && a.detachEvent("on" + b, c)
    },
    _checkIfPropExist: function(a, b) {
        return a && 0 <= a ? EBG.format(", {0}={1}", b, a) : ""
    },
    openPage: function(a, b) {
        var c = EBG.WindowTarget.BLANK, d = "", e = null;
        if (b && (c = b.target, b.xPos || b.yPos || b.width || b.height))
            d = "titlebar=1,resizable=1,scrollbars=1,directories=0,toolbar=1,status=1" +
            this._checkIfPropExist(b.yPos, EBG.Adaptors.WindowProp.top), d += this._checkIfPropExist(b.xPos, EBG.Adaptors.WindowProp.left), d += this._checkIfPropExist(b.showAddressBar, EBG.Adaptors.WindowProp.location), d += this._checkIfPropExist(b.showMenuBar, EBG.Adaptors.WindowProp.menubar), d += this._checkIfPropExist(b.width, EBG.Adaptors.WindowProp.width), d += this._checkIfPropExist(b.height, EBG.Adaptors.WindowProp.height);
        return e = "" != d ? window.open(a, c, d) : window.open(a, c)
    },
    reportToRemoteServerUsingImage: function(a) {
        this.ReportingImg =
        new Image;
        this.ReportingImg.src = a
    },
    getDataFromRemoteServer: function(a, b, c, d, e) {
        if (!a || EBG.isOfflineDemo)
            return !1;
        var d = EBG.isBool(d) ? d: !0, e = EBG.isBool(e) ? e: !1, f = function() {
            try {
                if (e) {
                    var a, d;
                    a = document.createElement("div");
                    a.innerHTML = "<xml>" + i.responseText + "</xml>";
                    document.body.appendChild(a);
                    d = a.firstChild.XMLDocument;
                    document.body.removeChild(a);
                    b.call(c, d)
                } else 
                    b.call(c, i.responseText)
            } catch (f) {
                b.call(c)
            }
        }, g=!1;
        try {
            if (this._isXMLHttpRequestSupported()) {
                var h = new XMLHttpRequest;
                h.open("GET", a,
                d);
                g=!0;
                if (d)
                    h.onreadystatechange = function() {
                        4 == h.readyState && (200 == h.status ? b.call(c, e ? h.responseXML : h.responseText) : b.call(c))
                    };
                h.send();
                d || b.call(c, e ? h.responseXML : h.responseText)
            } else if (window.XDomainRequest && d) {
                var i = new XDomainRequest;
                if (i)
                    i.onerror = function() {
                        EBG.log.error("XDomain request error");
                        b.call(c)
                    }, i.ontimeout = function() {
                        EBG.log.error("XDomain request timeout");
                        b.call(c)
                    }, i.onload = f, i.open("get", a), i.send(), g=!0
            }
        } catch (j) {
            g=!1
        }
        return g
    },
    reportToRemoteServer: function(a, b, c) {
        if (a &&
        !EBG.isOfflineDemo) {
            var b = EBG.isBool(b) ? b: !0, d=!1;
            try {
                if (this._isXMLHttpRequestSupported()) {
                    var e = new XMLHttpRequest;
                    e.open("GET", a, b);
                    if (b ||!b&&!this.browser.isFF())
                        e.withCredentials=!0;
                    try {
                        e.send()
                    } catch (f) {
                        if (b)
                            throw f;
                    }
                    d=!0
                } else if (window.XDomainRequest && (!EBG.isDefined(c) ||!c) && b) {
                    var g = new XDomainRequest;
                    g.open("GET", a);
                    g.send();
                    d=!0
                }
            } catch (h) {
                d=!1
            }
            d || this.reportToRemoteServerUsingImage(a)
        }
    },
    getElementById: function(a, b) {
        var c = null, b = b ? b: this.getDisplayWin();
        EBG.isDefinedNotNull(a) && (c = b.document.getElementById(a));
        return c
    },
    supportsPageLoadEvents: function() {
        return !(this.browser.isOpera() && 14 > this.browser.getVersion())&&!(this.browser.isIE() && 7 > this.browser.getVersion())
    },
    getHostName: function(a) {
        return (a ? a : this.getDisplayWin()).location.hostname
    },
    getDomain: function(a) {
        return (a ? a : this.getDisplayWin()).document.domain
    },
    getDisplayWin: function() {
        return window
    },
    getPageWin: function() {
        return window
    },
    inInnerIframe: function() {
        return !1
    },
    inPlacementIframe: function() {
        return !1
    },
    _setEvents: function() {
        this.supportsPageLoadEvents &&
        (this._setEvent(EBG.Events.EventNames.PAGE_LOAD, "load"), this._setEvent(EBG.Events.EventNames.PAGE_UNLOAD, "unload", !0), this._setEvent(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD, "beforeunload", !0), this._setEvent(EBG.Events.EventNames.PAGE_HIDE, "pagehide", !0));
        this._setEvent(EBG.Events.EventNames.PAGE_RESIZE, "resize");
        this._setEvent(EBG.Events.EventNames.MOUSE_MOVE, "mousemove", !1, ["clientX", "clientY", "pageX", "pageY", "view"], !0)
    },
    _setEvent: function(a, b, c, d, e) {
        this._environmentEvents[a] = {
            name: b,
            inCurWin: c ?
            c: !1
        };
        this._logicalEvents[b] = {
            name: a,
            signInAllWindows: e
        };
        if (d) {
            this._logicalEvents[b].attr = [];
            for (a = 0; a < d.length; a++)
                this._logicalEvents[b].attr[a] = d[a]
        }
    },
    _documentWrite: function(a) {
        document.write(a)
    },
    _isXMLHttpRequestSupported: function() {
        var a = window.XMLHttpRequest ? new XMLHttpRequest: null;
        return a && EBG.isBool(a.withCredentials)
    },
    isPageLoaded: function() {
        if (this._isPageLoaded)
            return !0;
        this._isPageLoaded = EBGInfra.isDefined(window.gEBMainWindow) && EBGInfra.isDefined(gEBMainWindow.EBP.downloadMgr) && gEBMainWindow.EBP.isPageLoaded;
        if (!this._isPageLoaded && this.getPageWin().document.readyState)
            this._isPageLoaded = "complete" == this.getPageWin().document.readyState;
        return EBG.adaptor._isPageLoaded
    },
    _handleEvent: function(a) {
        var b = this._logicalEvents[a.type].name;
        switch (b) {
        case EBG.Events.EventNames.PAGE_LOAD:
            this._isPageLoaded=!0;
            break;
        case EBG.Events.EventNames.PAGE_RESIZE:
            EBG.adaptor.inInnerIframe() && this.serving.rehidePlacementIframe();
            break;
        case EBG.Events.EventNames.PAGE_BEFORE_UNLOAD:
            if (this.browser.isIE())
                return 
        }
        b && (b = new EBG.Events.Event(b),
        EBGInfra.isDefinedNotNull(this._logicalEvents[a.type].attr) && this._prepareLogicalEventData(b, a, this._logicalEvents[a.type].attr), EBG.isFunc(this._listener) && this._listener.call(this._listenerBinding, b))
    },
    _prepareLogicalEventData: function(a, b, c) {
        try {
            a.eventData = {};
            for (var d = 0; d < c.length; d++)
                a.eventData[c[d]] = b[c[d]]
        } catch (e) {}
    },
    _getDefaultAttributes: function(a) {
        var b = {};
        switch (a.toLowerCase()) {
        case EBG.Adaptors.TagNames.IFRAME:
            b = {
                marginheight: "0px",
                marginwidth: "0px",
                frameborder: "0",
                scrolling: "no"
            }
        }
        return b
    },
    _getDefaultStyle: function(a) {
        var b = {
            border: "0px",
            padding: "0px",
            margin: "0px"
        };
        switch (a.toLowerCase()) {
        case EBG.Adaptors.TagNames.DIV:
            EBG.mergeObj({
                top: "0px",
                left: "0px",
                overflow: "visible",
                fontSize: "0px",
                lineHeight: "0px",
                textAlign: "left"
            }, b, !0)
        }
        return b
    },
    _setObjDefaultAttributes: function(a) {
        var b = this._getDefaultAttributes(a.tagName);
        EBG.mergeObj(a.attributes, b, !0);
        b.style = this._getDefaultStyle(a.tagName);
        a.attributes.style && EBG.mergeObj(a.attributes.style, b.style, !0);
        a.attributes = b
    },
    _getObjParamsStr: function(a) {
        var a =
        a.params, b = "", c;
        for (c in a)
            a.hasOwnProperty(c) && (b += EBG.format("<PARAM name='{0}' value='{1}'>", c, a[c]));
        return b
    },
    _getObjAttributesStr: function(a) {
        var a = a.attributes, b = "", c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (EBG.isObj(d)) {
                    var e = d, d = "", f;
                    for (f in e)
                        if (e.hasOwnProperty(f)) {
                            var g = e[f];
                            "textAlign" == f && (f = "text-align");
                            d += EBG.format("{0}:{1}; ", f, g)
                        }
                }
                if (d)
                    try {
                        d = d.toString().replace(/\"/ig, "&quot;"), b += EBG.format(' {0}="{1}"', c, d)
                    } catch (h) {}
        }
        return b
    },
    handleEvent: function(a) {
        this._handleEvent(a)
    },
    setElemStyle: function(a, b, c) {
        a.style[b] = c
    },
    getBrowserLanguage: function() {
        var a = "en-US";
        if ("undefined" !== typeof navigator.language)
            a = navigator.language;
        else if ("undefined" !== typeof navigator.userLanguage)
            a = navigator.userLanguage;
        return a
    },
    getPositioningById: function(a, b, c) {
        return this.getPositioningByElement(this.getElementById(a), b, c)
    },
    getPositioningByElement: function(a, b, c) {
        a = a && a.getBoundingClientRect ? a.getBoundingClientRect() : null;
        if (!a)
            return null;
        b = this.getScrollLeftTop(b, c);
        return {
            X: Math.floor(a.left) +
            b.X,
            Y: Math.floor(a.top) + b.Y
        }
    },
    getScrollLeftTop: function(a, b) {
        var c = this._getCurrentWindow(a, b), d = c.document, e = {
            X: {
                "0": "XOffset",
                1: "Left"
            },
            Y: {
                "0": "YOffset",
                1: "Top"
            }
        }, f;
        for (f in e)
            e[f] = c["page" + e[f][0]] || (d.documentElement ? d.documentElement["scroll" + e[f][1]] : d.documentElement["page" + e[f][0]]) || (d.body ? d.body["scroll" + e[f][1]] : 0);
        return e
    },
    _getCurrentWindow: function(a) {
        try {
            return a ? this.getDisplayWin() : top
        } catch (b) {}
    },
    removeElement: function(a) {
        if (a = this.getElementById(a))
            a.parentNode.removeChild(a),
            a.removeNode && a.removeNode(!0)
    },
    appendChildElement: function(a, b) {
        a && b && this.getElementById(a).appendChild(b)
    },
    getMaxZIndex: function(a) {
        if (this.browser.isIE() && 8 > this.browser.getVersion())
            return 10001;
        var b = 0;
        if (a) {
            var c = this.getStyleOfElem(a);
            c && c.zIndex && (b = c.zIndex);
            for (var d in a.childNodes)
                d && a.childNodes[d] && (c = this.getMaxZIndex(a.childNodes[d]), b = b > c ? b : c)
        }
        return b
    },
    setCookieKeyValuePair: function(a, b, c) {
        if (EBG.isDefined(a) && "" != a && EBG.isDefined(b))
            b = EBG.isDefined(c) && c ? escape(b) : b, document.cookie =
            a + "=" + b + ";"
        },
    isSafeFrame: function() {
        return !(!window.$sf ||!$sf.ext)
    },
    isInApp: function() {
        return !1
    }
};
EBG.declareClass(EBG.Adaptors.StdWebAdaptor, null);
EBG.Adaptors.WebAdaptor = function() {
    this._init();
    EBG.callSuperConstructor(EBG.Adaptors.WebAdaptor, this);
    EBG.adaptor && EBG.adaptor.copy(this)
};
EBG.Adaptors.WebAdaptor.prototype = {
    scrollBarWidth: 0,
    _isReady: !1,
    _focused: !1,
    _init: function() {
        this._sendReady()
    },
    isReady: function() {
        return this._isReady
    },
    isSDKDefined: function() {
        return !1
    },
    updateScrollBarWidth: function() {
        EBG.adaptor.scrollBarWidth = EBG.adaptor.getScrollerWidth()
    },
    initInnerModules: function(a, b, c, d, e) {
        EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "initInnerModules", [a, b, c, d, e]);
        this.updateScrollBarWidth();
        if (!this.serving)
            this.serving = EBG.Adaptors.ServingMgr ? new EBG.Adaptors.ServingMgr :
            null;
        this._addEventListener(this.getDisplayWin(), "resize", EBG.adaptor.updateScrollBarWidth)
    },
    registerSpecialBrowserEvents: function() {
        if (this.browser.isIE())
            this._addEventListener(this.getPageWin(), "focus", this._updateFocused), 10 > this.browser.getVersion() && (this._addEventListener(this.getPageWin().document, "focusout", this._updateFocusOut), this._addEventListener(this.getPageWin().document, "focusin", this._updateFocused)), this._focused = this._focused || "undefined" != typeof gEBMainWindow && "undefined" != typeof gEBMainWindow.EBP &&
            gEBMainWindow.EBP.focused
    },
    _updateFocusOut: function() {
        EBG.runTimed(EBG.adaptor, function() {
            if (!(EBG.adaptor.getPageWin().screenTop>-2 * EBG.adaptor.getPageWin().screen.availHeight)) {
                var a = new EBG.Events.Event(EBG.Events.EventNames.PAGE_HIDDEN);
                a.dispatcher = EBG.adaptor;
                EBG.eventMgr.dispatchEvent(a)
            }
        }, [], 50)
    },
    _updateFocused: function() {
        EBG.adaptor._focused=!0;
        var a = new EBG.Events.Event(EBG.Events.EventNames.PAGE_VISIBLE);
        a.dispatcher = EBG.adaptor;
        EBG.eventMgr.dispatchEvent(a);
        try {
            EBG.adaptor._removeEventListener(EBG.adaptor.getPageWin(),
            "focus", EBG.adaptor._updateFocused), 10 > EBG.adaptor.browser.getVersion() && EBG.adaptor._removeEventListener(EBG.adaptor.getPageWin().document, "focusin", EBG.adaptor._updateFocused)
        } catch (b) {}
    },
    _setEvents: function() {
        EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "_setEvents", []);
        this._setEvent(EBG.Events.EventNames.PAGE_SCROLL, "scroll");
        this._setEvent(EBG.Events.EventNames.PAGE_FOCUS, "focus");
        this._setEvent(EBG.Events.EventNames.PAGE_BLUR, "blur");
        var a = this._getVisibilityEventName();
        "undefined" ===
        typeof document.addEventListener || "undefined" === typeof a || (this._setEvent(EBG.Events.EventNames.PAGE_HIDDEN, a, !0), this._setEvent(EBG.Events.EventNames.PAGE_VISIBLE, a, !0))
    },
    initServingMode: function(a, b, c) {
        b = b ? b : !1;
        switch (a) {
        case EBG.Adaptors.ServingMode.INNER_IFRAME:
            this.serving.setServingMode(EBG.Adaptors.ServingMode.INNER_IFRAME);
            break;
        case - 1:
            this.serving.detectServingMode(!1);
            break;
        case 0:
            !EBG.isPreview && c == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME&&!b ? this.serving.setServingMode(EBG.Adaptors.ServingMode.FRIENDLY_IFRAME) :
            !EBG.isPreview && c == EBG.Adaptors.ServingMode.IFRAME&&!b ? this.serving.setServingMode(EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME) : b && this.serving.setServingMode(EBG.Adaptors.ServingMode.SCRIPT);
            break;
        case 1:
        case 2:
            this.serving.setServingMode(EBG.Adaptors.ServingMode.IFRAME)
        }
    },
    addInlineDOM: function(a, b) {
        this.inject(a, EBG.Adaptors.InjectionMethod.APPEND, this.getElementById(b))
    },
    addPlaceHolder: function(a) {
        this.inInnerIframe() && (this.inject(a, EBG.Adaptors.InjectionMethod.INSERT_BEFORE, this.serving.placementIframe),
        this.serving.hidePlacementIframe())
    },
    getPageWin: function() {
        return this.serving && this.serving.pageWin ? this.serving.pageWin : window
    },
    getDisplayWin: function() {
        return this.serving && this.serving.displayWin ? this.serving.displayWin : window
    },
    _getDocument: function() {
        return this.getDisplayWin().document
    },
    isCookiesSupported: function() {
        var a = navigator.cookieEnabled?!0 : !1;
        if ("undefined" == typeof navigator.cookieEnabled)
            if (document.cookie = "ebTestcookie", - 1 != document.cookie.indexOf("ebTestcookie")) {
                var a=!0, b = new Date;
                b.setTime(b.getTime() - 1E3);
                document.cookie = "ebTestcookie; expires=" + b.toGMTString()
            } else 
                a=!1;
        return a
    },
    inInnerIframe: function() {
        return this.serving && this.serving.placementIframe
    },
    inPlacementIframe: function() {
        return this.serving && this.serving.servingMode === EBG.Adaptors.ServingMode.IFRAME
    },
    setElemStyle: function(a, b, c) {
        a.style[b] = c
    },
    setElemAttribute: function(a, b, c) {
        a[b] = c
    },
    getClipTag: function(a, b, c, d) {
        return EBG.format("rect({0}px {1}px {2}px {3}px)", a, b, c, d)
    },
    clip: function(a, b, c, d, e) {
        a.style.clip =
        this.getClipTag(b, c, d, e)
    },
    unclip: function(a) {
        a.style.clip = "rect(auto auto auto auto)"
    },
    expand: function(a, b) {
        this.setElemStyle(a, "left", EBG.px( - b.x));
        this.setElemStyle(a, "top", EBG.px( - b.y));
        this.setElemStyle(a, "width", EBG.px(b.width));
        this.setElemStyle(a, "height", EBG.px(b.height));
        this.unclip(a)
    },
    collapse: function(a, b, c) {
        b = this.getClipParams(b, c);
        this.clip(a, b.top, b.right, b.bottom, b.left)
    },
    resize: function(a, b, c) {
        this.setElemStyle(a, "width", EBG.px(b));
        this.setElemStyle(a, "height", EBG.px(c))
    },
    getClipParams: function(a,
    b) {
        return {
            top: a.y,
            right: a.x + b.width,
            bottom: a.y + b.height,
            left: a.x
        }
    },
    getCurrentStyleAttr: function(a, b) {
        var c = null;
        try {
            c = a.currentStyle ? a.currentStyle[b] : a.ownerDocument.defaultView.getComputedStyle(a, null).getPropertyValue(b)
        } catch (d) {}
        if (!c && "embed" == a.tagName.toLowerCase() && a.parentNode && "object" == a.parentNode.tagName.toLowerCase())
            a = a.parentNode, c = a.currentStyle ? a.currentStyle[b] : a.ownerDocument.defaultView.getComputedStyle(a, null).getPropertyValue(b);
        return c
    },
    getViewPortMetrics: function(a, b, c) {
        return this.getWindowViewPortMetrics(this._getCurrentWindow(a,
        c))
    },
    getWindowViewPortMetrics: function(a) {
        try {
            var a = a ? a: this.getDisplayWin(), b = a.document, c = {
                Height: 0,
                Width: 0
            }, d = b.documentMode;
            if (this.browser.isIE() && (5 == d ||!this.browser.isStrictType(b)))
                c.Width = b.body.clientWidth, c.Height = b.body.clientHeight;
            else if (this.browser.isIE())
                c.Width = b.documentElement.clientWidth, c.Height = b.documentElement.clientHeight;
            else if (c.Width = a.innerWidth, c.Height = a.innerHeight, "hidden" != b.body.style.overflow) {
                if (b.body.offsetWidth > c.Width || b.body.scrollWidth > c.Width || 0 < a.scrollMaxX)
                    c.Height -=
                    this.scrollBarWidth;
                if (b.body.offsetHeight > c.Height || b.body.scrollHeight > c.Height || 0 < a.scrollMaxY)
                    c.Width -= this.scrollBarWidth
            }
        } catch (e) {}
        return c
    },
    getPageMetrics: function(a) {
        try {
            var b = a ? a.document: this.getDisplayWin().document, a = {
                Height: 0,
                Width: 0
            };
            a.Height = Math.max(b.body.scrollHeight, b.documentElement.scrollHeight, b.body.offsetHeight, b.documentElement.offsetHeight, b.body.clientHeight, b.documentElement.clientHeight);
            a.Width = Math.max(b.body.scrollWidth, b.documentElement.scrollWidth, b.body.offsetWidth,
            b.documentElement.offsetWidth, b.body.clientWidth, b.documentElement.clientWidth);
            return a
        } catch (c) {}
    },
    saveInitialScrollBarState: function(a) {
        a.EBG = a.EBG || {};
        var b = a.document;
        a.EBG._scrollBarsInitialState = null != a.EBG._scrollBarsInitialState ? a.EBG._scrollBarsInitialState : b.body.style.overflow
    },
    showScrollBars: function(a) {
        a = a ? a : this.getDisplayWin();
        this.saveInitialScrollBarState(a);
        a.document.body.style.overflow = "auto"
    },
    hideScrollBars: function(a) {
        a = a ? a : this.getDisplayWin();
        this.saveInitialScrollBarState(a);
        a.document.body.style.overflow = "hidden"
    },
    restoreScrollBarsState: function(a) {
        var a = a ? a: this.getDisplayWin(), b = a.document;
        if (null != a.EBG._scrollBarsInitialState)
            b.body.style.overflow = a.EBG._scrollBarsInitialState
    },
    _getCurrentWindow: function(a, b) {
        try {
            return this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME ? a=!0 : b == EBG.Adaptors.ServingMode.IFRAME && this.browser.isFF() && (a=!0), a ? this.getDisplayWin() : top
        } catch (c) {}
    },
    getPositioningById: function(a, b, c, d) {
        b = this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME ?
        !0 : b;
        return this.getPositioningByElement(this.getElementById(a), b, c, d)
    },
    getIframePosition: function() {
        var a = {
            X: 0,
            Y: 0
        };
        if (EBG.adaptor.serving.detectServingMode(!0) == EBG.Adaptors.ServingMode.IFRAME && "undefined" != typeof this.getDisplayWin().mozInnerScreenX)
            a.X = this.getDisplayWin().mozInnerScreenX, a.Y = this.getDisplayWin().mozInnerScreenY;
        return a
    },
    getPositioningByElement: function(a, b, c, d) {
        if (!a)
            return null;
        var b = this.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME || EBG.isPreview?!0 : b, e = a.getBoundingClientRect ?
        a.getBoundingClientRect() : null;
        if (!e)
            return null;
        a = Math.round(e.left);
        e = Math.round(e.top);
        if (!EBG.isDefined(d) ||!d)
            b = this.getScrollLeftTop(b, c), a += b.X, e += b.Y;
        return {
            X: a,
            Y: e
        }
    },
    getScrollLeftTop: function(a, b) {
        a = b == EBG.Adaptors.ServingMode.IFRAME?!0 : a;
        return EBG.callSuperFunction(EBG.Adaptors.WebAdaptor, this, "getScrollLeftTop", [a, b])
    },
    getBodyPositioning: function(a) {
        var b = this.getDisplayWin(), c = this.isCurrWin();
        (a = EBG.adaptor.getPositioningByElement(b.document.body, !c, a)) || (a = {
            X: 0,
            Y: 0
        });
        return a
    },
    isCurrWin: function() {
        return this.getDisplayWin() ===
        this.getPageWin()
    },
    _calculatePositioning: function() {
        return null
    },
    getScrollerWidth: function() {
        try {
            if (EBG.adaptor.browser._platform == EBG.adaptor.browser._platformTypes.IPAD || EBG.adaptor.browser._platform == EBG.adaptor.browser._platformTypes.IPHONE)
                return 0;
            var a = null, b = null, c = 0, d = 0, e = 0, a = document.createElement("div");
            a.style.position = "absolute";
            a.style.top = "-1000px";
            a.style.left = "-1000px";
            a.style.width = "100px";
            a.style.height = "50px";
            a.style.overflow = "auto";
            b = document.createElement("div");
            b.style.width =
            "100%";
            b.style.height = "200px";
            a.appendChild(b);
            document.body.appendChild(a);
            d = b.offsetWidth;
            document.body.removeChild(document.body.lastChild);
            a.style.overflow = "hidden";
            document.body.appendChild(a);
            c = b.offsetWidth;
            document.body.removeChild(document.body.lastChild);
            return c - d ? c - d : 0
        } catch (f) {}
    },
    getResolution: function() {
        var a = 0;
        switch (window.screen.width) {
        case 640:
            a = 1;
            break;
        case 800:
            a = 2;
            break;
        case 1024:
            a = 4;
            break;
        case 1152:
            a = 8;
            break;
        case 1280:
            a = 16;
            break;
        case 1600:
            a = 32;
            break;
        case 1400:
            a = 64;
            break;
        case 1920:
            a =
            128;
            break;
        case 1680:
            a = 256;
            break;
        case 1366:
            a = 512;
            break;
        case 1440:
            a = 1024;
            break;
        case 1360:
            a = 2048;
            break;
        case 768:
            a = 4096;
            break;
        case 1093:
            a = 8192;
            break;
        case 960:
            a = 16384;
            break;
        case 2560:
            a = 32768
        }
        return a
    },
    _handleEvent: function(a) {
        var b = this._logicalEvents[a.type].name;
        switch (b) {
        case EBG.Events.EventNames.PAGE_HIDDEN:
        case EBG.Events.EventNames.PAGE_VISIBLE:
            b = this.isPageVisible() ? EBG.Events.EventNames.PAGE_VISIBLE : EBG.Events.EventNames.PAGE_HIDDEN;
            break;
        default:
            EBG.callSuperFunction(EBG.Adaptors.WebAdaptor,
            this, "_handleEvent", [a]);
            return 
        }
        b && (b = new EBG.Events.Event(b), EBGInfra.isDefinedNotNull(this._logicalEvents[a.type].attr) && this._prepareLogicalEventData(b, this._logicalEvents[a.type].attr), EBG.isFunc(this._listener) && this._listener.call(this._listenerBinding, b))
    },
    _sendReady: function() {
        this._isReady=!0;
        var a = new EBG.Events.Event(EBG.EBMessage.ADAPTOR_READY);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.BEFORE;
        if (!EBG.eventMgr.dispatchEvent(a))
            a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(a)
    },
    getMouseCoordinates: function(a) {
        var b = {
            mouseX: 0,
            mouseY: 0
        };
        if (a)
            EBG.adaptor.browser.isIE() ? (b.mouseX = a.clientX ? a.clientX : 0, b.mouseY = a.clientY ? a.clientY : 0) : (b.mouseX = a.pageX ? a.pageX : 0, b.mouseY = a.pageY ? a.pageY : 0), b.view = a.view;
        return b
    },
    isPageVisible: function() {
        var a=!0;
        (a = (a = this._getVisibilityEventHidden()) && document[a]?!1 : !0) && this.browser.isIE() && this.serving.detectServingMode(!0) != EBG.Adaptors.ServingMode.IFRAME && (a = a && this._focused);
        return a
    },
    _getVisibilityEventHidden: function() {
        var a = null;
        "undefined" !==
        typeof document.hidden ? a = "hidden" : "undefined" !== typeof document.mozHidden ? a = "mozHidden" : "undefined" !== typeof document.msHidden ? a = "msHidden" : "undefined" !== typeof document.webkitHidden && (a = "webkitHidden");
        return a
    },
    _getVisibilityEventName: function() {
        var a = null;
        "undefined" !== typeof document.hidden ? a = "visibilitychange" : "undefined" !== typeof document.mozHidden ? a = "mozvisibilitychange" : "undefined" !== typeof document.msHidden ? a = "msvisibilitychange" : "undefined" !== typeof document.webkitHidden && (a = "webkitvisibilitychange");
        return a
    }
};
EBG.declareClass(EBG.Adaptors.WebAdaptor, EBG.Adaptors.StdWebAdaptor);
EBG.Adaptors.Browser = function(a, b, c, d, e) {
    this.set(a, b, c, d, e)
};
EBG.Adaptors.Browser.prototype = {
    _platform: 0,
    _browserType: 0,
    _browserVer: 0,
    _browserCode: 0,
    _deviceType: 0,
    _browserTypes: EBG.API.BrowserTypes,
    _platformTypes: EBG.API.PlatformTypes,
    _deviceTypes: EBG.API.DeviceTypes,
    set: function(a, b, c, d, e) {
        a = a ? a : this._platformTypes.NON_SUPPORTED;
        b = b ? b : this._browserTypes.NON_SUPPORTED;
        e = e ? e : this._browserTypes.NON_SUPPORTED;
        this._platform = a;
        this._browserType = b;
        this._browserVer = c ? c : 0;
        this._browserCode = e;
        this._deviceType = d ? d : 0
    },
    getVersion: function() {
        return this._browserVer
    },
    getDocumentMode: function() {
        return window.document.documentMode
    },
    isIE: function() {
        return this._browserType == this._browserTypes.IE || this._browserType == this._browserTypes.AOL
    },
    isStrictType: function(a) {
        var b=!1;
        this.isIE() && (b = a ? "CSS1Compat" == a.compatMode : "CSS1Compat" == document.compatMode);
        return b
    },
    isFF: function() {
        return this._browserType == this._browserTypes.FF
    },
    isSafari: function() {
        return this._browserType == this._browserTypes.SAFARI
    },
    isChrome: function() {
        return this._browserType == this._browserTypes.CHROME
    },
    isOpera: function() {
        return this._browserType == this._browserTypes.OPERA
    },
    isMac: function() {
        return this._platform == this._platformTypes.MAC || this._platform == this._platformTypes.MAC_NEW
    },
    isMobile: function() {
        var a=!1;
        if (this._deviceType == this._deviceTypes.MOBILE || this._deviceType == this._deviceTypes.TABLET)
            a=!0;
        return a
    },
    isAndroid: function() {
        for (var a in this._platformTypes)
            if (this._platformTypes[a] == this._platform && 0 <= a.indexOf("ANDROID"))
                return !0;
        return !1
    },
    isAndroidNative: function() {
        return this.isAndroid() && this.isSafari()
    }
};
EBG.Adaptors.ServingMode = {
    SCRIPT: "SCRIPT",
    IFRAME: "IFRAME",
    FRIENDLY_IFRAME: "FRIENDLY_IFRAME",
    INNER_IFRAME: "INNER_IFRAME",
    TOPMOST_FRIENDLY_IFRAME: "TOPMOST_FRIENDLY_IFRAME"
};
EBG.Adaptors.IframeMode = {
    SERVE: "SERVE",
    VERIFY: "VERIFY",
    SERVEANDVERIFY: "SERVEANDVERIFY"
};
EBG.Adaptors.ServingMgr = function() {
    this.displayWin = window;
    this.servingMode = EBG.Adaptors.ServingMode.SCRIPT;
    this._supportPostMessage = window.postMessage?!0 : !1
};
EBG.Adaptors.ServingMgr.prototype = {
    displayWin: null,
    pageWin: null,
    placementIframe: null,
    _placementIframeAttr: null,
    servingMode: null,
    ebO: null,
    addinEyeRef: null,
    aieServerRequestPrefix: "/BurstingPipe/adServer.bs?cn=chdm&dm=",
    aieServerRequestPrefixVersion: "&cv=2",
    setDisplayWin: function(a) {
        this.displayWin = a
    },
    setPageWin: function() {
        var a = this.detectServingMode(!0);
        switch (this.servingMode) {
        case EBG.Adaptors.ServingMode.SCRIPT:
            switch (a) {
            case EBG.Adaptors.ServingMode.SCRIPT:
                this.pageWin = window;
                break;
            case EBG.Adaptors.ServingMode.FRIENDLY_IFRAME:
                this.pageWin =
                top;
                break;
            case EBG.Adaptors.ServingMode.IFRAME:
            case EBG.Adaptors.ServingMode.INNER_IFRAME:
                this.pageWin = this.displayWin
            }
            break;
        case EBG.Adaptors.ServingMode.FRIENDLY_IFRAME:
            this.pageWin = top;
            break;
        case EBG.Adaptors.ServingMode.IFRAME:
        case EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME:
        case EBG.Adaptors.ServingMode.INNER_IFRAME:
            this.pageWin = this.displayWin
        }
    },
    setServingMode: function(a) {
        this.servingMode = a;
        var b = null;
        switch (a) {
        case EBG.Adaptors.ServingMode.TOPMOST_FRIENDLY_IFRAME:
            b = this._getTopFriendlyIframe();
            break;
        case EBG.Adaptors.ServingMode.INNER_IFRAME:
            b = top;
            break;
        case EBG.Adaptors.ServingMode.FRIENDLY_IFRAME:
            b = top;
            break;
        case EBG.Adaptors.ServingMode.SCRIPT:
            this.setDisplayWin(window);
            this.setPageWin();
            return 
        }
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD, this._restorePlacementIframe, this));
        b && (EBG.isGlobalDef("gstrEbDisplayPos") && (b = eval("parent." + gstrEbDisplayPos)), this.setDisplayWin(b), this.setPageWin(), b !== window && this._findPlacementIframe())
    },
    isFIF: function(a) {
        var b = "inFIF"in a ? a.inFIF: !1;
        return ("inDapIF"in a ? a.inDapIF : !1) || b
    },
    detectServingMode: function(a) {
        try {
            for (var b = EBG.Adaptors.ServingMode.SCRIPT, c = window; c.self !== c.parent;) {
                var d = null;
                try {
                    d = EBG.adaptor.getHostName(c.parent)
                } catch (e) {}
                if (EBGInfra.isDefinedNotNull(d) && EBG.adaptor.getHostName(c) === d || this.isFIF(c))
                    b = EBG.Adaptors.ServingMode.FRIENDLY_IFRAME, c = c.parent;
                else {
                    b = EBG.Adaptors.ServingMode.IFRAME;
                    break
                }
            }
            if (a)
                return b;
            this.setServingMode(b)
        } catch (f) {}
    },
    _getTopFriendlyIframe: function(a) {
        for (a =
        a ? a : window; a.self !== a.parent;) {
            var b = null;
            try {
                b = EBG.adaptor.getHostName(a.parent)
            } catch (c) {}
            if (EBGInfra.isDefinedNotNull(b) && EBG.adaptor.getHostName(a) === b || this.isFIF(a))
                a = a.parent;
            else 
                break
        }
        return a
    },
    _restorePlacementIframe: function() {
        this._placementIframeAttr && (EBGInfra.mergeObj(this._placementIframeAttr, this.placementIframe, !0), EBGInfra.mergeObj(this._placementIframeAttr.style, this.placementIframe.style, !0))
    },
    hidePlacementIframe: function() {
        var a = this.placementIframe;
        if (!this._placementIframeAttr)
            this._placementIframeAttr =
            {
                width: a.width,
                height: a.height
            }, this._placementIframeAttr.style = {
                width: EBG.adaptor.getCurrentStyleAttr(a, "width"),
                height: EBG.adaptor.getCurrentStyleAttr(a, "height"),
                visibility: EBG.adaptor.getCurrentStyleAttr(a, "visibility"),
                border: EBG.adaptor.getCurrentStyleAttr(a, "border")
            };
        a.style.visibility = "hidden";
        a.width = a.height = 0;
        a.style.width = a.style.height = a.style.border = "0px"
    },
    rehidePlacementIframe: function() {
        this._placementIframeAttr && this.hidePlacementIframe()
    },
    handleAieServing: function(a) {
        this.ebO = EBG.cloneObj(a);
        if (EBG.isDefinedNotNull(EBG.iframeLocation))
            this._handleAddInEyeServerResponse(JSON.stringify({
                iflExists: 1,
                iflCheck: 0
            }));
        else if (EBG.isDefinedNotNull(a.aiE) && EBG.isDefinedNotNull(a.aiE.iflExists))
            this._handleAddInEyeServerResponse(JSON.stringify(a.aiE));
        else {
            var b = this._ebGetHostName(document.referrer);
            "" == b ? this._handleAddInEyeServerResponse(null) : EBG.adaptor.getDataFromRemoteServer(ebPtcl + a.bs + this.aieServerRequestPrefix + b + this.aieServerRequestPrefixVersion, this._handleAddInEyeServerResponse, this,
            !0, !1) || this._handleAddInEyeServerResponse(JSON.stringify({
                iflExists: 1,
                iflCheck: 0
            }))
        }
    },
    _handleAddInEyeServerResponse: function(a, b) {
        var c;
        try {
            c=!b && EBG.isDefinedNotNull(a) ? JSON.parse(a) : {
                iflExists: 0,
                iflCheck: 1
            }
        } catch (d) {
            c = {
                iflExists: 0,
                iflCheck: 1
            }
        }
        if ((this.ebO.aiE = c) && c.iflExists)
            this.insertInnerIframe(this.ebO.phid, c.iflCheck ? EBG.Adaptors.IframeMode.SERVEANDVERIFY : EBG.Adaptors.IframeMode.SERVE);
        else {
            this.ebO.ifrm = 0;
            this.ebO.adConfig.showAieDefaultImage = 1;
            var e = new EBG.Events.Event(EBG.Events.EventNames.AIE_LOADED);
            e.eventData = {
                loadDefault: this.ebO.adConfig.showAieDefaultImage,
                currentResponse: this.ebO
            };
            e.timing = EBG.Events.EventTiming.BEFORE;
            EBG.eventMgr.dispatchEvent(e);
            c.iflCheck && this.insertInnerIframe(this.ebO.phid, EBG.Adaptors.IframeMode.VERIFY)
        }
    },
    insertInnerIframe: function(a, b) {
        this._supportPostMessage ? (this._initPmMessages(b), this.listenToMessages()) : this._startHashProtocol(b);
        var c = {
            tagName: EBG.Adaptors.TagNames.IFRAME,
            attributes: {
                id: "addineyeIframe",
                src: this._getAddineyeLocation(),
                width: "0",
                height: "0"
            }
        };
        EBG.adaptor.addInlineDOM(c, a);
        this.addinEyeRef = EBG.adaptor.getElementById("addineyeIframe");
        this._supportPostMessage || this._sendMessageHashProtocol()
    },
    _getAddineyeLocation: function() {
        var a = "eyeblaster/addineyeV2" + ("https://" == EBG.protocol ? "-secure" : "") + ".html", b = this._getTopFriendlyIframe().document;
        if ("undefined" != typeof EBG.iframeLocation && "" != EBG.iframeLocation)
            a = EBG.iframeLocation;
        if ("http" != a.substr(0, 4)) {
            b = this._ebGetHostName(b.referrer ? b.referrer : b.location.href);
            if ("" == b)
                return "";
            a = EBG.protocol +
            b + "/" + a
        }
        return a
    },
    _buildSecretTagsObj: function() {
        return {
            gstrEbPreLoadScripts: EBG.isGlobalDef("gstrEbPreLoadScripts") ? gstrEbPreLoadScripts: void 0,
            gnEbLowBWLimit: EBG.isGlobalDef("gnEbLowBWLimit") ? gnEbLowBWLimit: void 0,
            gstrEbPreLoadScripts: EBG.isGlobalDef("gstrEbPreLoadScripts") ? gstrEbPreLoadScripts: void 0,
            gfEbInlineBanner: EBG.isGlobalDef("gfEbInlineBanner") ? gfEbInlineBanner: void 0,
            gEbEyeDivRefElement: EBG.isGlobalDef("gEbEyeDivRefElement") ? gEbEyeDivRefElement: void 0,
            gstrEbDisplayPos: EBG.isGlobalDef("gstrEbDisplayPos") ?
            gstrEbDisplayPos: void 0,
            gnEbMinZIndex: EBG.isGlobalDef("gnEbMinZIndex") ? gnEbMinZIndex: void 0,
            gfEbForceStreaming: EBG.isGlobalDef("gfEbForceStreaming") ? gfEbForceStreaming: void 0,
            gfEbUseIntFlash: EBG.isGlobalDef("gfEbUseIntFlash") ? gfEbUseIntFlash: void 0,
            gEbfLoadAsAS2: EBG.isGlobalDef("gEbfLoadAsAS2") ? gEbfLoadAsAS2: void 0,
            gEbURLTokens: EBG.isGlobalDef("gEbURLTokens") ? gEbURLTokens: void 0
        }
    },
    _startHashProtocol: function(a) {
        this._hashMessages = [];
        if (a == EBG.Adaptors.IframeMode.VERIFY || a == EBG.Adaptors.IframeMode.SERVEANDVERIFY)
            this._hashMessages.push(this._buildHashMessages({
                ebProtocol: ebPtcl,
                ebBs: EBG.bs,
                addineyeDomain: this._ebGetHostName(document.referrer)
            }, EBG.INNERIFRAMEMessage.VERIFY, a == EBG.Adaptors.IframeMode.VERIFY ? EBG.INNERIFRAMEMessage.LASTMSG : EBG.INNERIFRAMEMessage.NOT_LASTMSG));
        if (a == EBG.Adaptors.IframeMode.SERVE || a == EBG.Adaptors.IframeMode.SERVEANDVERIFY) {
            var a = {
                ebPtcl: ebPtcl,
                ebBigS: ebBigS,
                ebResourcePath: this.ebO && this.ebO.adConfig && this.ebO.adConfig.resourcePath ? this.ebO.adConfig.resourcePath: ebResourcePath,
                ebRand: ebRand,
                ebPli: ebPli,
                ebAdID: ebAdID
            }, b = {
                ptcl: ebPtcl,
                bs: EBG.bs,
                adId: ebO.adConfig.adId
            }, c = this._buildSecretTagsObj();
            this.ebO.adConfig = this.ebO.tn != EBG.adTypes.VisibilityAd ? null : {
                tn: ebO.adConfig.tn,
                rnd: ebO.adConfig.rnd,
                adId: ebO.adConfig.adId,
                uid: ebO.adConfig.adId + "_" + ebO.adConfig.rnd
            };
            this._hashMessages.push(this._buildHashMessages(b, EBG.INNERIFRAMEMessage.ADCONFIG_REQUEST));
            this._hashMessages.push(this._buildHashMessages(this.ebO, EBG.INNERIFRAMEMessage.EBO));
            this._hashMessages.push(this._buildHashMessages(a, EBG.INNERIFRAMEMessage.GLOBALPARAMS, EBG.INNERIFRAMEMessage.NOT_LASTMSG));
            this._hashMessages.push(this._buildHashMessages(c, EBG.INNERIFRAMEMessage.SECRET_TAGS, EBG.INNERIFRAMEMessage.LASTMSG))
        }
        EBG.msgProtocol.receiveMessages(this._handleMessagesHashProtocol, 10)
    },
    _buildHashMessages: function(a, b, c) {
        a.typeObj = b;
        a.lastMsg = c ? c : EBG.INNERIFRAMEMessage.NOT_LASTMSG;
        a.parentURL = document.location.href;
        return escape(JSON.stringify(a))
    },
    _sendMessageHashProtocol: function() {
        EBG.msgProtocol.postMessage(EBG.adaptor.serving._hashMessages[0], EBG.adaptor.serving.addinEyeRef.src, EBG.adaptor.serving.addinEyeRef);
        EBG.adaptor.serving._hashMessages.splice(0, 1);
        0 == EBG.adaptor.serving._hashMessages.length && EBG.msgProtocol.finishMessaging()
    },
    listenToMessages: function() {
        EBG.pm.bind(EBG.INNERIFRAMEMessage.LOADED, this._handlePostMessage, this)
    },
    _ebGetHostName: function(a) {
        var b = "", a = a.toLowerCase(), b = 7 <= a.length && "http://" == a.substr(0, 7) ? a.substr(7): 8 <= a.length && "https://" == a.substr(0, 8) ? a.substr(8): a, a = b.indexOf("/");
        0 < a && (b = b.substr(0, a));
        return b
    },
    _findPlacementIframe: function() {
        try {
            var a = this.displayWin, b = window,
            c = null, d =- 1;
            do {
                var d =- 1, c = null, e = b.parent.frames;
                if (!EBG.isDefined(e.length))
                    for (var f = b.parent.document.getElementsByTagName(EBG.Adaptors.TagNames.IFRAME), e = [], g = 0; g < f.length; g++)
                        e.push(f[g].contentWindow);
                for (g = 0; g < e.length; g++)
                    try {
                        if (e[g] == b) {
                            d = g;
                            c = b;
                            break
                        }
                } catch (h) {}
                b = b.parent
            }
            while (b != a);
            if (!(0 <= d))
                throw new exception("ServingMgr._findPlacementIframe", "Could not find placement iframe!");
            b = null;
            try {
                if ("undefined" != typeof c.frameElement)
                    b = c.frameElement
            } catch (i) {}
            if (!b) {
                for (var j = a.document.getElementsByTagName(EBG.Adaptors.TagNames.IFRAME),
                g = 0; g < j.length; g++)
                    j[g].contentWindow == c && (d = g);
                if (d >= j.length)
                    throw new exception("ServingMgr._findPlacementIframe", EBG.format("frames List is too short ({0}). Needed frame is {1}", j.length, d));
                b = j[d]
            }
            this.placementIframe = b
        } catch (k) {}
    },
    _handleMessagesHashProtocol: function(a) {
        switch (a.data) {
        case EBG.INNERIFRAMEMessage.CONTINUE_SENDING:
            EBG.adaptor.serving._sendMessageHashProtocol()
        }
    },
    _handlePostMessage: function(a) {
        a && a == EBG.INNERIFRAMEMessage.LOADED && EBG.adaptor.serving._sendInitToInnerIframe()
    },
    _sendInitToInnerIframe: function() {
        for (var a =
        0; a < EBG.adaptor.serving._pmMessages.length; a++)
            EBG.pm({
                target: this.addinEyeRef.contentWindow,
                type: EBG.adaptor.serving._pmMessages[a].msgType,
                data: EBG.adaptor.serving._pmMessages[a].data
            });
        EBG.adaptor.serving._pmMessages = {}
    },
    _initPmMessages: function(a) {
        this._pmMessages = [];
        if (a == EBG.Adaptors.IframeMode.VERIFY || a == EBG.Adaptors.IframeMode.SERVEANDVERIFY) {
            var b = {
                ebProtocol: ebPtcl,
                ebBs: EBG.bs,
                addineyeDomain: this._ebGetHostName(document.referrer)
            };
            this._pmMessages.push({
                msgType: EBG.INNERIFRAMEMessage.VERIFY,
                data: b
            })
        }
        if ((a == EBG.Adaptors.IframeMode.SERVE || a == EBG.Adaptors.IframeMode.SERVEANDVERIFY) && EBG.adaptor.serving.ebO)
            a = {
                ebO: EBG.adaptor.serving.ebO,
                ebPtcl: ebPtcl,
                ebBigS: ebBigS,
                ebResourcePath: this.ebO && this.ebO.adConfig && this.ebO.adConfig.resourcePath ? this.ebO.adConfig.resourcePath: ebResourcePath,
                ebRand: ebRand,
                secretTagData: this._buildSecretTagsObj(),
                ebPli: ebPli,
                ebAdID: ebAdID
            }, this._pmMessages.push({
                msgType: EBG.INNERIFRAMEMessage.INIT,
                data: a
            })
    }
};
EBG.Adaptors.FlashDetector = function() {
    this._init()
};
EBG.Adaptors.FlashDetector.prototype = {
    version: 0,
    _init: function() {
        var a =- 1;
        try {
            a = (new ActiveXObject("Shockwaveflash.Shockwaveflash.7")).GetVariable("$version"), a = this._splitFlashMajorMinorVersions(a), a = Number(a)
        } catch (b) {}
        if ( - 1 == a)
            try {
                var c = 0, d = 0, e = 0;
                if (null != navigator.plugins && 0 < navigator.plugins.length) {
                    var f = navigator.mimeTypes;
                    if (f && f["application/x-shockwave-flash"] && f["application/x-shockwave-flash"].enabledPlugin && f["application/x-shockwave-flash"].enabledPlugin.description) {
                        var g = f["application/x-shockwave-flash"].enabledPlugin.description.split(" "),
                        h = g[2].split("."), c = h[0], d = h[1], e = g[3];
                        "" == e && (e = g[4]);
                        isNaN(e[0]) && (e = e.substring(1));
                        0 < e.indexOf("d") && (e = e.substring(0, e.indexOf("d")))
                    }
                    a = Number(c + "." + d + e)
                }
            } catch (i) {}
        if (!isNaN(a))
            this.version = a
    },
    _splitFlashMajorMinorVersions: function(a) {
        if (a)
            return a = a.split(" ")[1].split(","), EBG.format("{0}.{1}{2}", a[0], a[1], a[2])
        }
};
EBG.Adaptors.Wallpaper = function() {
    this._currentBg = this._getCurrentBackground()
};
EBG.Adaptors.Wallpaper.prototype = {
    SetBackgroundImage: function(a) {
        var b = EBG.adaptor.getPageWin().document;
        if (a.imgSrc) {
            if (!a.color)
                a.color = this._currentBg.color ? this._currentBg.color : "transparent";
            var c = a.color, c = c + (" url('" + a.imgSrc + "') ");
            a.tiling = "repeat" == a.tiling.toLowerCase() || "repeat-x" == a.tiling.toLowerCase() || "repeat-y" == a.tiling.toLowerCase() || "no-repeat" == a.tiling.toLowerCase() ? a.tiling.toLowerCase() : this._currentBg.tiling ? this._currentBg.tiling : "no-repeat";
            var c = c + (" " + a.tiling), c = a.scrolling ?
            c + " scroll": c + " fixed", d = "";
            "center" == a.positionX.toLowerCase() || "right" == a.positionX.toLowerCase() || "left" == a.positionX.toLowerCase() ? d = a.positionX.toLowerCase() : a.positionX = "";
            "center" == a.positionY.toLowerCase() || "top" == a.positionY.toLowerCase() || "bottom" == a.positionY.toLowerCase() ? d += " " + a.positionY.toLowerCase() : a.positionY = "";
            if (!a.positionX ||!a.positionY)
                d = b.body.style.backgroundPosition ? b.body.style.backgroundPosition : "center top";
            b.body.style.background = c + (" " + d)
        }
    },
    RemoveBackgroundImage: function() {
        this._currentBg.imgSrc ?
        this.SetBackgroundImage(this._currentBg) : EBG.adaptor.getPageWin().document.body.style.background = ""
    },
    _getCurrentBackground: function() {
        var a = new EBG.Adaptors.Wallpaper.BgData, b = EBG.adaptor.getPageWin().document.body;
        if ("" != b.style.backgroundImage)
            a.imgSrc = b.style.backgroundImage.substr(4, b.style.backgroundImage.length - 5);
        if ("" != b.style.backgroundColor)
            a.color = b.style.backgroundColor;
        if ("" != b.style.backgroundRepeat)
            a.tiling = b.style.backgroundRepeat;
        if ("" != b.style.backgroundAttachment)
            a.scrolling = "fixed" ==
            b.style.backgroundAttachment?!1 : !0;
        if ("" != b.style.backgroundPosition)
            posArr = b.style.backgroundPosition.split(" "), a.positionX = posArr[0], a.positionY = posArr[1];
        return a
    }
};
EBG.Adaptors.Wallpaper.BgData = function() {};
EBG.Adaptors.Wallpaper.BgData.prototype = {
    color: "",
    imgSrc: "",
    tiling: "",
    positionX: "",
    positionY: "",
    scrolling: !1
};
EBG.declareNamespace("Interactions");
EBG.Interactions.SystemInts = {
    CLICK: "_eyeblaster",
    AD_DURATION: "ebAdDuration",
    REPLAY: "ebReplay",
    CLOSE: "ebClose",
    CLOSE_REM: "ebRemClose",
    DEFAULT_CLICK: "ebDefaultClick",
    USER_INTERACTION: "ebUserInteraction",
    UNIQUE_VIDEO_STARTED: "ebUniqueVideoStarted",
    DWELL_TIME: "ebDwellTime",
    DWELL_UNIQUE: "ebUniqueDwell",
    RICH_FLASH_PLAYED: "ebRichFlashPlayed",
    INT_DURATION: "ebIntDuration",
    VISIBILITY_RECORDABLE: "VsR",
    VISIBILITY_AGENCY_RECORDABLE: "VsRAg",
    VISIBILITY_ADVERTISER_RECORDABLE: "VsRAd",
    VISIBILITY_ADVERTISER: "VsAd",
    VISIBILITY_AGENCY: "VsAg",
    VISIBILITY_IAB: "VsIAB",
    VISIBILITY_ADVERTISER_DURATION: "VsAdDu",
    VISIBILITY_AGENCY_DURATION: "VsAgDu",
    VISIBILITY_AVG_AD_SURFACE: "VsAvSu",
    VISIBILITY_AVG_SCREEN_SHARE: "VsAvSc",
    REM_DURATION: "ebRemDuration",
    INTRO_FULL_PLAY: "ebFullPlay",
    REM_FULL_PLAY: "ebRemFullPlay",
    SWIPE: "ebSwipe",
    AD_START: "AdStart"
};
EBG.Interactions.VideoInteractionOrder = [EBG.VideoInteraction.STARTED, EBG.VideoInteraction.PERCENT_25_PLAYED, EBG.VideoInteraction.PERCENT_50_PLAYED, EBG.VideoInteraction.PERCENT_75_PLAYED, EBG.VideoInteraction.FULLPLAY];
EBG.Interactions.Categories = {
    SYSTEM: 2,
    VIDEO: 1,
    CUSTOM: 0
};
EBG.Interactions.InitiationTypes = {
    AUTO: "auto",
    USER: "user"
};
EBG.Interactions.InteractionTypes = {
    COUNTER: "Counter",
    TIMER: "Timer"
};
EBG.Interactions.checkURL = function(a) {
    var b = a.toLowerCase();
    - 1 == b.indexOf("http://")&&-1 == b.indexOf("https://")&&-1 == b.indexOf("ftp://")&&-1 == b.indexOf("aim:")&&-1 == b.indexOf("mailto:") && (a = 0 == b.indexOf("/") ? "http://" + EBG.adaptor.getHostName() + a : "http://" + a);
    return a
};
EBG.Interactions.RemoteServersData = function() {};
EBG.Interactions.RemoteServersData.prototype = {
    networkUrl: null,
    agencyUrl: null
};
EBG.declareClass(EBG.Interactions.RemoteServersData, null);
EBG.Interactions.InteractionData = function(a, b, c) {
    this.reportingName = a;
    this.adUId = b;
    this.category = c
};
EBG.Interactions.InteractionData.prototype = {
    initiationType: EBG.Interactions.InitiationTypes.AUTO,
    category: EBG.Interactions.Categories.SYSTEM,
    isPanel: !1
};
EBG.declareClass(EBG.Interactions.InteractionData, null);
EBG.Interactions.CounterInteractionData = function(a, b, c) {
    EBG.callSuperConstructor(EBG.Interactions.CounterInteractionData, this, [a, c, b]);
    this.remoteServers = new EBG.Interactions.RemoteServersData
};
EBG.Interactions.CounterInteractionData.prototype = {
    reportImmediately: !1,
    countAsClick: !1,
    remoteServers: null,
    clickURL: null,
    numLeftToReport: 10,
    state: null
};
EBG.declareClass(EBG.Interactions.CounterInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.TimerInteractionData = function(a, b, c) {
    this.reportingName = a;
    EBG.callSuperConstructor(EBG.Interactions.TimerInteractionData, this, [a, c, b])
};
EBG.Interactions.TimerInteractionData.prototype = {
    value: 0,
    startTime: 0,
    idleDuration: 0
};
EBG.declareClass(EBG.Interactions.TimerInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.AggregationInteractionData = function(a, b, c) {
    this.reportingName = a;
    EBG.callSuperConstructor(EBG.Interactions.AggregationInteractionData, this, [a, c, b])
};
EBG.Interactions.AggregationInteractionData.prototype = {
    value: 0,
    isPlaying: !1
};
EBG.declareClass(EBG.Interactions.AggregationInteractionData, EBG.Interactions.InteractionData);
EBG.Interactions.Interaction = function() {};
EBG.Interactions.Interaction.prototype = {
    unique: 1,
    _escapeInteractionName: function(a) {
        a = a.toString();
        a = a.replace(/\~/ig, "_");
        a = a.replace(/\^/ig, "_");
        a = a.replace(/\|/ig, "_");
        return escape(a)
    },
    _buildReportFormat: function(a, b, c, d) {
        d || (d = 0);
        return EBG.format("{0}{2}{1}{3}{1}{4}{1}{5}{6}{7}{8}{9}", EBG.Interactions.InteractionManager.charIntDelimeter, EBG.Interactions.InteractionManager.charAdFieldsDelimeter, this._escapeInteractionName(this.interactionData.reportingName), c, d, a, this.unique, b, this.interactionData.category,
        this.interactionData.isPanel ? 1 : 0)
    }
};
EBG.Interactions.CounterInteraction = function(a) {
    EBG.callSuperConstructor(EBG.Interactions.CounterInteraction, this);
    this.interactionData = a ? a : new EBG.Interactions.CounterInteractionData
};
EBG.Interactions.CounterInteraction.prototype = {
    type: EBG.Interactions.InteractionTypes.COUNTER,
    handle: function(a) {
        var b = this.interactionData, c = b.counterJumpUrlData, d = c && c.tmpData ? c.tmpData.isClick: !1, e = c && c.tmpData ? c.tmpData.isProductClick: !1, f=!1, g=!0, h=!1, h = "", i = (c && c.tmpData ? c.tmpData.clickUrl : null) || (c ? c.jumpUrl : ""), c = c && c.tmpData && c.tmpData.windowWasOpen?!0 : !1;
        this.shouldReportInteraction() ? (this._handleRemoteServers(), b.counterJumpUrlData && (g = i && this._isEBClick()?!1 : !0, f = i && (d || this._isEBClick()) ?
        !0 : !1, (h = d || this._isEBClick()) ? f ? c || this.handleBRDFlow() : (d || e) && this.reportThirdPartyUrls() : !c && i && (i = EBG.Interactions.checkURL(i), this._openOrRedirect(i))), h = g ? this._getReportingData(a, f) : "") : !c && i && (i = EBG.Interactions.checkURL(i), this._openOrRedirect(i));
        return h
    },
    reportThirdPartyUrls: function() {
        var a = this.interactionData.reportingName.toLowerCase() == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase(), b = this.interactionData.counterJumpUrlData, c = [];
        if (b && b.tmpData && b.tmpData.isClick && (c = this.interactionData.adConfig.clickTrackingUrls,
        a || this.interactionData.adConfig.showOnlyImage))
            for (a = 0; a < this.interactionData.adConfig.defaultClickTrackingUrls.length; a++)
                c[c.length] = this.interactionData.adConfig.defaultClickTrackingUrls[a];
        if (b && b.tmpData && b.tmpData.isProductClick && b.tmpData.clickedVerUrl)
            c[c.length] = b.tmpData.clickedVerUrl;
        for (a = 0; a < c.length; a++)
            EBG.adaptor.reportToRemoteServerUsingImage(c[a])
    },
    shouldReportInteraction: function() {
        var a=!0;
        0 == this.interactionData.numLeftToReport || EBG.isPreview ? a=!1 : this.interactionData.numLeftToReport--;
        return a
    },
    handleBRDFlow: function() {
        var a = this.interactionData, b = this.interactionData.counterJumpUrlData, c = EBGInfra.isDefinedNotNull(b) && b.tmpData ? b.tmpData.clickUrl: null, d = c || EBGInfra.isDefinedNotNull(b) && b.jumpUrl;
        this._isEBClick() && (c || (d = ""));
        a = a.reportingName.toLowerCase() == EBG.Interactions.SystemInts.DEFAULT_CLICK.toLowerCase();
        c = 0;
        b.tmpData.isClick ? c = 1 : b.tmpData.isProductClick && (c = 2);
        d = "" == d ? "" : EBG.Interactions.checkURL(d);
        d = this._getBannerRedirectUrl(d, c, a, b.tmpData.clickedVersion);
        (d = EBG.Interactions.checkURL(d)) &&
        this.interactionData.adConfig.usercookie && (d =- 1 != d.indexOf("?") ? d + ("&usercookie=" + this.interactionData.adConfig.usercookie) : d + ("?usercookie=" + this.interactionData.adConfig.usercookie));
        this._openOrRedirect(d)
    },
    _openOrRedirect: function(a) {
        - 1 == this.interactionData.counterJumpUrlData.target.indexOf(EBG.WindowTarget.BLANK) ? (this.interactionData.reportImmediately=!0, EBG.runTimed(this, this._openPage, [a, this.interactionData.counterJumpUrlData], 1E3)) : this._openPage(a, this.interactionData.counterJumpUrlData)
    },
    _getRequestMethod: function(a) {
        return EBG.adaptor.browser.isIE() && 6 == EBG.adaptor.browser.getVersion() || EBG.adaptor.isInApp() ? "GET" : this._getGETRequestSizeThreshold() < a.length ? "POST" : "GET"
    },
    getClickTagUrl: function(a) {
        var b = "", a = EBG.isDefined(a) && "" != a ? EBG.Interactions.checkURL(a): void 0;
        EBG.isPreview ? EBG.isInWorkshop ? b = EBG.format("ReportPage_{0}.html", HTMLPageVer) : (b = this.interactionData.counterJumpUrlData.jumpUrl, 4 <= b.length && "http" != b.substr(0, 4) && (b = EBG.format("{0}{1}", ebPtcl, b))) : (b = this._getBannerRedirectUrl(a,
        null, null, null, !0), b = EBG.format("{0}/ReportPage{1}.html?ebReportURL={2}$$ebImpressionID={3}", ebBigS, EBG.reportPageVer, escape(b), EBG.Ads.Ad.Fn.getRandFromAdUId(this.interactionData.adConfig.uid)), a =- 1, EBG.adaptor.browser.isIE() && (a = 9 <= EBG.adaptor.browser.getVersion() ? 4096 : 2048, a -= b.length), a = this._getReportPageTrackingUrls(a), b += a);
        return b
    },
    _getReportPageTrackingUrls: function(a) {
        var b = "$$ebTURLs=[";
        if ( - 1 != a) {
            if (b.length >= a)
                return "";
            a -= b.length
        }
        for (var c = this.interactionData.adConfig.clickTrackingUrls,
        d = 0; d < c.length; d++) {
            var e = EBG.format('{0}"{1}"', 0 != d ? "," : "", c[d]);
            if ( - 1 != a) {
                if (e.length >= a)
                    break;
                a -= e.length
            }
            b += e
        }
        return b + "]"
    },
    _openPage: function(a, b) {
        var c = b.tmpData.clickedVerUrl ? encodeURIComponent('"' + b.tmpData.clickedVerUrl.split("|").join('","') + '"'): "", d = b.tmpData.clickedVerUrl ? a + "&cvurl=" + c: a;
        switch (this._getRequestMethod(d)) {
        case "GET":
            EBG.adaptor.openPage(d, b);
            break;
        case "POST":
            var e = b.target;
            if (!(EBG.adaptor.browser.isIE() && 9 >= EBG.adaptor.browser.getVersion()))
                b.target=!b.target || b.target ==
                EBG.WindowTarget.BLANK ? "ebReportPage" + parseInt(1E8 * Math.random()) : b.target, EBG.adaptor.openPage("", b);
            EBG.runTimed(this, function() {
                function c(a, b) {
                    var d = document.createElement("input");
                    d.setAttribute("type", "hidden");
                    d.setAttribute("name", a);
                    d.setAttribute("value", b);
                    return d
                }
                var g = document.createElement("form");
                g.setAttribute("method", "post");
                g.setAttribute("action", a.substring(0, d.indexOf("?")) + "?cn=brd&ebReferrer=" + encodeURIComponent(this.interactionData.adConfig.ebReferrer));
                g.setAttribute("target",
                b.target);
                b.target = e;
                var h = this._urlQueryStringToJSON(d), i;
                for (i in h)
                    g.appendChild(c(i, unescape(h[i])));
                EBG.adaptor.getDisplayWin().document.body.appendChild(g);
                g.submit()
            }, [], 25);
            break;
        default:
            EBG.adaptor.openPage(d, b)
        }
    },
    _urlQueryStringToJSON: function(a) {
        var b = {}, c = a.substring(a.indexOf("?") + 1);
        if (!c)
            return b;
        for (var a = [], d = 0, e = 0; e < c.length; e++)
            switch (c.charAt(e)) {
            case "&":
                a.push(c.substring(d, e));
                d = e + 1;
                break;
            case "$":
                if ("=" == c.charAt(e - 1) && "$" == c.charAt(e + 1))
                    for (e += 2; !("$" == c.charAt(e) && "$" == c.charAt(e -
                    1));)
                        e++
            }
        a.push(c.substring(d));
        for (e = 0; e < a.length; e++)
            c = a[e], b[c.substring(0, c.indexOf("="))] = c.substring(c.indexOf("=") + 1);
        return b
    },
    _getGETRequestSizeThreshold: function() {
        return 2E3
    },
    _getReportScript: function(a, b) {
        return '<script type="text/javascript">var clkURLs = ["' + a.join('","') + '"];var reported = false;var cntr = 0; for (var i=0;i<' + a.length + ';i++){var img = document.createElement("img");img.onload = img.onerror = function(){cntr++; if (cntr==' + a.length + ' && !reported){reported = true; window.location.replace("' +
        b + '");}};try{img.src = clkURLs[i];}catch(e){cntr++; if (cntr==' + a.length + ' && !reported){reported = true; window.location.replace("' + b + '");}}}setTimeout(function(){if (!reported){reported=true;window.location.replace("' + b + '");}}, 1000);<\/script><body></body>'
    },
    _getReportingData: function(a, b) {
        var c = 0, d = 0;
        b || (c = this.interactionData.counterJumpUrlData && this.interactionData.counterJumpUrlData.tmpData.isClick ? 1 : 0, d = this.interactionData.initiationType == EBG.Interactions.InitiationTypes.USER ? 1 : 0);
        c = this._buildReportFormat(c,
        d, 0, a);
        this.unique = 0;
        return c
    },
    _getBannerRedirectUrl: function(a, b, c, d, e) {
        var c = EBG.isBool(c) ? c: !1, f = this.interactionData.adConfig, g = EBG.Ads.Ad.Fn.getAdIdFromAdUId(this.interactionData.adConfig.uid), g = EBG.protocol + EBG.combinePaths(EBG.bs, EBG.format("BurstingPipe/adServer.bs?cn=brd&Page={0}&PluID={1}&Pos={2}&EyeblasterID={3}", f.page, f.pluId, f.rnd, g));
        void 0 != b && (g = EBG.format("{0}&clk={1}", g, b));
        if (f.massVersioning.adVersions || f.massVersioning.defaultAdVersion)
            g = d ? g + EBG.format("&vid={0}&vcl=1", d) : g +
            EBG.format("&vid={0}", EBG.Ads.Ad.Fn.getVersionToReport(f.massVersioning.adVersions));
        !d && a && (g += "&rtu=" + encodeURIComponent(a));
        EBGInfra.isDefined(f.ncu) && (g += "&ncu=" + encodeURIComponent(f.ncu));
        f.massVersioning.targetAudienceId && (g += EBG.format("&ta={0}", f.massVersioning.targetAudienceId));
        f.massVersioning.deliveryGroupId && (g += EBG.format("&dg={0}", f.massVersioning.deliveryGroupId));
        f.sPublisherPlacementId && (g += EBG.format("&pc={0}", f.sPublisherPlacementId));
        c || (g += "&di=0");
        f.sID && (g += EBG.format("&sessionid={0}",
        f.sID));
        EBGInfra.isDefined(f.optOut) && (g += EBG.format("&OptOut={0}", f.optOut));
        !EBG.isPreview&&!e && (g += "&sct=1");
        f.ebReferrer && (g += EBG.format("&ebReferrer={0}", encodeURIComponent(f.ebReferrer)));
        EBGInfra.isDefined(f.lineId) && (g += EBG.format("&lineid={0}", f.lineId));
        return g
    },
    _handleRemoteServers: function() {
        if (!EBG.isPreview && this.interactionData.remoteServers) {
            var a = this.interactionData.remoteServers, b = new EBG.Events.Event(EBG.Events.EventNames.INTERACTION_REPORT_REMOTE_SERVERS);
            b.dispatcher = this;
            b.timing =
            EBG.Events.EventTiming.BEFORE;
            b.eventData = {
                remoteServers: a
            };
            EBG.eventMgr.dispatchEvent(b) || (a.networkUrl && (b = this._replaceRSTokens(a.networkUrl), EBG.adaptor.reportToRemoteServerUsingImage(b)), a.agencyUrl && (a = this._replaceRSTokens(a.agencyUrl), EBG.adaptor.reportToRemoteServerUsingImage(a)))
        }
    },
    _replaceRSTokens: function(a) {
        try {
            a = a.replace(/\[ebInteraction\]/ig, this.interactionData.reportingName), a = a.replace(/\[ebInteractionNum\]/ig, EBG.intMgr.adsData[this.interactionData.adConfig.uid].numOfInteractions)
        } catch (b) {}
        return a
    },
    _getReportingPage: function() {
        var a = this.interactionData.adConfig.page, a = a.replace(/\~/ig, "_"), a = a.replace(/\^/ig, "_"), a = a.replace(/\|/ig, "_");
        return escape(a)
    },
    _isEBClick: function() {
        return this.interactionData && (EBG.strEQ(this.interactionData.reportingName, EBG.Interactions.SystemInts.CLICK) || EBG.strEQ(this.interactionData.reportingName, EBG.Interactions.SystemInts.DEFAULT_CLICK))
    }
};
EBG.declareClass(EBG.Interactions.CounterInteraction, EBG.Interactions.Interaction);
EBG.Interactions.TimerInteraction = function(a) {
    EBG.callSuperConstructor(EBG.Interactions.TimerInteraction, this);
    this.interactionData = a ? a : new EBG.Interactions.TimerInteractionData
};
EBG.Interactions.TimerInteraction.prototype = {
    type: EBG.Interactions.InteractionTypes.TIMER,
    handle: function(a) {
        var b = this.interactionData.value;
        this.isRunning() && (this.stop(), this.start());
        var b = this.interactionData.value - b, b = 0 < b ? b: 0, c = this.interactionData.idleDuration / 1E3;
        this.interactionData.value -= c <= b ? c : b;
        this.interactionData.idleDuration = 0;
        b = EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC;
        this.interactionData.value = this.interactionData.value > b ? b : this.interactionData.value;
        this.interactionData.value =
        Math.floor(this.interactionData.value);
        return 0 >= this.interactionData.value?!1 : this._buildReportFormat(0, 0, this.interactionData.value, a, 0)
    },
    start: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.START_TIMER);
        a.dispatcher = this;
        a.timing = EBG.Events.EventTiming.BEFORE;
        a.eventData = {
            interaction: this
        };
        if (!EBG.eventMgr.dispatchEvent(a)) {
            if (!this.isRunning())
                this.interactionData.startTime = (new Date).getTime(), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        }
    },
    stop: function() {
        if (this.isRunning()) {
            var a =
            new EBG.Events.Event(EBG.Events.EventNames.STOP_TIMER);
            a.dispatcher = this;
            a.timing = EBG.Events.EventTiming.BEFORE;
            a.eventData = {
                interaction: this
            };
            if (!EBG.eventMgr.dispatchEvent(a))
                this.interactionData.value += this.getElapsedTime() / 1E3, this.interactionData.startTime = 0, a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
        }
    },
    getElapsedTime: function() {
        return (new Date).getTime() - this.interactionData.startTime
    },
    update: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.UPDATE_TIMER);
        b.dispatcher = this;
        b.timing = EBG.Events.EventTiming.BEFORE;
        b.eventData = {
            interaction: this
        };
        if (!EBG.eventMgr.dispatchEvent(b))
            this.interactionData.value += a, b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(b)
    },
    clear: function() {
        this.interactionData.value = 0;
        this.interactionData.startTime = 0
    },
    increaseIdleDuration: function(a) {
        this.interactionData.idleDuration += a
    },
    isRunning: function() {
        return 0 < this.interactionData.startTime
    },
    isFinished: function() {
        return 0 === this.interactionData.startTime &&
        0 < this.interactionData.value
    },
    getValue: function() {
        return this.interactionData.value
    },
    getType: function() {
        return EBG.DurationInteraction.TIMER
    }
};
EBG.declareClass(EBG.Interactions.TimerInteraction, EBG.Interactions.Interaction);
EBG.Interactions.IdleManager = function() {
    this.currentIdleDuration = 0;
    this._startTime = (new Date).getTime();
    this.intervalId = EBG.setInterval(this, this._checkIfIdle, [], EBG.Interactions.IdleManager.IDLE_INTERVAL)
};
EBG.Interactions.IdleManager.IDLE_INTERVAL = 5E3;
EBG.Interactions.IdleManager.prototype = {
    _totalIdleDuration: 0,
    _lastActiveTimeStamp: 0,
    updateIdleDuration: function() {
        this.currentIdleDuration = 0;
        var a = (new Date).getTime();
        if (0 !== this._lastActiveTimeStamp)
            this.currentIdleDuration = a - this._lastActiveTimeStamp, this.currentIdleDuration > EBG.Interactions.IdleManager.IDLE_INTERVAL + 2E3 && (this._totalIdleDuration += this.currentIdleDuration, EBG.intMgr.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.HANDLE_IDLE))
    },
    _checkIfIdle: function() {
        this.updateIdleDuration();
        if ((this._lastActiveTimeStamp = (new Date).getTime()) - this._startTime - this._totalIdleDuration > 1E3 * EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC)
            EBG.intMgr.unLoadHandler(EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT, !1), EBG.eventMgr.dispatchEvent(new EBG.Events.Event(EBG.Events.EventNames.MAX_AD_DURATION)), EBG.clearInterval(this.intervalId)
    }
};
EBG.declareClass(EBG.Interactions.IdleManager, null);
EBG.Interactions.AggregateInteraction = function(a) {
    EBG.callSuperConstructor(EBG.Interactions.AggregateInteraction, this);
    this.interactionData = a ? a : new EBG.Interactions.AggregationInteractionData
};
EBG.Interactions.AggregateInteraction.prototype = {
    type: EBG.Interactions.InteractionTypes.TIMER,
    handle: function(a) {
        var b = this.interactionData.value / 1E3, c = EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC, b = Math.floor(b > c ? c : b);
        return 0 >= b?!1 : this._buildReportFormat(0, 0, b, a, 0)
    },
    start: function() {
        this.interactionData.isPlaying=!0
    },
    update: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.UPDATE_TIMER);
        b.dispatcher = this;
        b.timing = EBG.Events.EventTiming.BEFORE;
        b.eventData = {
            interaction: this
        };
        if (!EBG.eventMgr.dispatchEvent(b))
            this.interactionData.value += a, b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(b)
    },
    stop: function() {
        this.interactionData.isPlaying=!1
    },
    isRunning: function() {
        return this.interactionData.isPlaying
    },
    isFinished: function() {
        return !this.interactionData.isPlaying && 0 < this.interactionData.value
    },
    getValue: function() {
        return this.interactionData.value
    },
    getType: function() {
        return EBG.DurationInteraction.AGGREGATE
    },
    increaseIdleDuration: function() {}
};
EBG.declareClass(EBG.Interactions.AggregateInteraction, EBG.Interactions.Interaction);
EBG.Interactions.StdInteractionManager = function() {
    this.adsData = EBG.intMgr ? EBG.intMgr.adsData : {};
    this.adsIntQueues = EBG.intMgr ? EBG.intMgr.adsIntQueues : {}
};
EBG.Interactions.StdInteractionManager.prototype = {
    copy: function(a) {
        this.adsIntQueues = a.adsIntQueues;
        this.adsData = a.adsData
    },
    initAdData: function(a, b) {
        var c = a.uid;
        this.adsIntQueues[c] = [];
        c = this.adsData[c] = {
            adConfig: a,
            isUserInteractionOccur: !1,
            isClickOccur: !1,
            isProductClicked: [],
            numOfInteractions: 0,
            delayIntReport: b,
            videoState: {},
            assetsTimers: {},
            clickReportScript: ""
        };
        c[EBG.Interactions.InteractionTypes.COUNTER] = {};
        c[EBG.Interactions.InteractionTypes.TIMER] = {};
        c.adConfig.isStdAd || this._addSystemInteractions(a)
    },
    allowInteractionReport: function(a) {
        if (this.adsData[a])
            this.adsData[a].delayIntReport=!1
    },
    addInteraction: function(a, b) {
        var c = EBG.isDefinedNotNull(b) ? b.toLowerCase(): a.interactionData.reportingName.toLowerCase(), d = a.interactionData.adUId, e = new EBG.Events.Event(EBG.Events.EventNames.ADD_INTERACTION);
        e.eventData = a;
        e.dispatcher = {
            _adConfig: {
                rnd: this.adsData[d].adConfig.rnd
            }
        };
        e.timing = EBG.Events.EventTiming.BEFORE;
        var f = EBG.eventMgr.dispatchEvent(e), g = this.adsData[d];
        if (!f) {
            if (!g)
                return;
            g[a.type][c] = a;
            a.interactionData.adConfig =
            this.adsData[d].adConfig
        }
        e.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(e)
    },
    getClickTag: function(a) {
        return (a = this._getCounterInteraction(EBG.Interactions.SystemInts.CLICK, a)) ? a.getClickTagUrl() : ""
    },
    getClickTarget: function(a) {
        return (a = this._getCounterInteraction(EBG.Interactions.SystemInts.CLICK, a)) ? a.interactionData.counterJumpUrlData.target : ""
    },
    handleCloseAdParts: function(a) {
        if (a && 1 == a.fClose)
            a = new EBG.Events.Event(EBG.Events.EventNames.CLOSE_AD), a.dispatcher = this, a.eventData =
            {
                closeDueToClickthrough: !0
            }, EBG.eventMgr.dispatchEvent(a)
    },
    handleCounterInteraction: function(a, b, c, d, e, f) {
        var g = this._getCounterInteraction(a, b), h = g ? g.interactionData: null, i = h ? h.counterJumpUrlData: null, j = this.adsData[b], k = j.adConfig.isStdAd, n = "", f = EBGInfra.isDefined(f) ? f: !0, c = c || 0;
        if (!k && h)
            h.initiationType = d ? EBG.Interactions.InitiationTypes.USER : h.initiationType, this._handleUserInteraction(b, h), this._handleSpecialInteractions(a, b, c);
        if (g) {
            a = new EBG.Events.Event(EBG.Events.EventNames.HANDLE_COUNTER_INTERACTION);
            a.dispatcher = this;
            if (!a.dispatcher._adConfig)
                a.dispatcher._adConfig = {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(b)
                };
            a.timing = EBG.Events.EventTiming.BEFORE;
            a.eventData = {
                interaction: g
            };
            if (!EBG.eventMgr.dispatchEvent(a)) {
                if (i)
                    i.tmpData = e, i.tmpData.isClick = h.countAsClick&&!j.isClickOccur, j.isClickOccur = i.tmpData.isClick?!0 : j.isClickOccur, i.tmpData.isProductClick = h.countAsClick && i.tmpData.clickedVersion&&!j.isProductClicked[i.tmpData.clickedVersion], i.tmpData.isProductClick && (j.isProductClicked[i.tmpData.clickedVersion] =
                !0);
                n = f ? g.handle(c) : "";
                j.numOfInteractions++;
                n && (this._handleReportData(b, h, n), this._isReportDataInQueue(b, n) || this.reportInteractionQueues());
                this.handleCloseAdParts(i);
                a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(a)
            }
        }
    },
    isInteractionExist: function(a, b, c) {
        if (this.adsData[c] && this.adsData[c][b])
            return this.adsData[c][b][a]?!0 : !1
    },
    _getCounterInteraction: function(a, b) {
        a = a.toLowerCase();
        if (this.adsData[b] && this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER] && this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER][a])
            return this.adsData[b][EBG.Interactions.InteractionTypes.COUNTER][a]
    },
    getRepScr: function(a) {
        if (this.adsData[a] && this.adsData[a].clickReportScript)
            return this.adsData[a].clickReportScript
    }
};
EBG.declareClass(EBG.Interactions.StdInteractionManager, null);
EBG.Interactions.InteractionManager = function() {
    EBG.callSuperConstructor(EBG.Interactions.InteractionManager, this);
    EBG.intMgr && EBG.intMgr.copy(this);
    this.interactionPipe = EBG.combinePaths(EBG.protocol + EBG.bs, "BurstingPipe/adServer.bs?cn=int&iv=2&int=");
    this.idleManager = new EBG.Interactions.IdleManager;
    this._timedReport = EBG.isDefined(EBG.intReportTimeout) && null != EBG.intReportTimeout && 0 <= EBG.intReportTimeout ? EBG.intReportTimeout : this._timedReport;
    this._subscribeToEvents()
};
EBG.Interactions.InteractionManager.charAdFieldsDelimeter = "~";
EBG.Interactions.InteractionManager.charIntDelimeter = "^";
EBG.Interactions.InteractionManager.intStackLength = 6;
EBG.Interactions.InteractionManager.MAX_AD_DURATION_SEC = 900;
EBG.Interactions.InteractionManager.HandleAllTimersOptions = {
    REPORT: 0,
    PAUSE: 1,
    HANDLE_IDLE: 2
};
EBG.Interactions.InteractionManager.prototype = {
    _isUnloadHandled: !1,
    _pausedTimers: null,
    _masterOrdinalNumber: null,
    _seqTimersReportData: {
        index: - 1,
        intervals: [5, 10, 20, 40, 60, 120, 240]
    },
    _timedReport: 1E4,
    startAggregate: function(a, b, c) {
        if (null == this._masterOrdinalNumber)
            this._masterOrdinalNumber = c;
        this.startTimer(a, b, c)
    },
    startTimer: function(a, b, c) {
        var d = this._getTimerInteraction(a, b);
        if (d) {
            d.start();
            if (EBGInfra.isDefined(c) && EBGInfra.notNull(c))
                switch (d = this.adsData[b], d = d.assetsTimers[c] ? d.assetsTimers[c] :
                d.assetsTimers[c] = {}, a) {
                case EBG.VideoInteraction.VIDEO_PLAY_DURATION:
                    this._startAssetTimer(d, EBG.VideoInteraction.VIDEO_ASSET_DURATION, b, c);
                    break;
                case EBG.VideoInteraction.FULLSCREEN_DURATION:
                    this._startAssetTimer(d, EBG.VideoInteraction.FULLSCREEN_ASSET_DURATION, b, c)
                }
            EBG.isGlobalDef("JSON")
        }
    },
    _handleVideoStarted: function(a, b) {
        this.adsData[a].isUserInteractionOccur && this._reportUserInitatedVideo(a, b);
        var c = new EBG.Events.Event(EBG.Events.EventNames.DWELL_VIDEO_START);
        c.dispatcher = {
            _adConfig: {
                rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(a)
            }
        };
        EBG.eventMgr.dispatchEvent(c)
    },
    _startAssetTimer: function(a, b, c, d) {
        if (!a[b]) {
            var e;
            null != this._masterOrdinalNumber ? (e = new EBG.Interactions.AggregationInteractionData(b, EBG.Interactions.Categories.VIDEO, c), a[b] = new EBG.Interactions.AggregateInteraction(e)) : (e = new EBG.Interactions.TimerInteractionData(b, EBG.Interactions.Categories.VIDEO, c), a[b] = new EBG.Interactions.TimerInteraction(e))
        }
        a[b].start();
        this._handleVideoStarted(c, d)
    },
    updateAggregation: function(a, b, c, d) {
        if (null == this._masterOrdinalNumber)
            this._masterOrdinalNumber =
            d;
        var e = this._getTimerInteraction(a, b);
        if (e && (this._masterOrdinalNumber == d && e.update(c), EBGInfra.isDefined(d) && EBGInfra.notNull(d)))
            switch (e = this.adsData[b], e = e.assetsTimers[d] ? e.assetsTimers[d] : e.assetsTimers[d] = {}, a) {
            case EBG.VideoInteraction.VIDEO_PLAY_DURATION:
                this._updateAssetAggregation(e, EBG.VideoInteraction.VIDEO_ASSET_DURATION, b, c, d);
                break;
            case EBG.VideoInteraction.FULLSCREEN_DURATION:
                this._updateAssetAggregation(e, EBG.VideoInteraction.FULLSCREEN_ASSET_DURATION, b, c, d)
            }
    },
    _updateAssetAggregation: function(a,
    b, c, d) {
        a[b] || (c = new EBG.Interactions.AggregationInteractionData(b, EBG.Interactions.Categories.VIDEO, c), a[b] = new EBG.Interactions.AggregateInteraction(c));
        a[b].update(d)
    },
    stopAggregate: function(a, b, c) {
        this._masterOrdinalNumber = null;
        this.stopTimer(a, b, c)
    },
    stopTimer: function(a, b, c) {
        var d = this._getTimerInteraction(a, b), e = this.adsData[b].assetsTimers, f=!0;
        if (d) {
            if (EBGInfra.isDefined(c) && EBGInfra.notNull(c) && e[c])
                switch (a) {
                case EBG.VideoInteraction.VIDEO_PLAY_DURATION:
                    e[c][EBG.VideoInteraction.VIDEO_ASSET_DURATION].stop();
                    f=!this._isRunningVideoAsset(b, !1);
                    break;
                case EBG.VideoInteraction.FULLSCREEN_DURATION:
                    e[c][EBG.VideoInteraction.FULLSCREEN_ASSET_DURATION].stop()
                }
            f && d.stop();
            if (EBGInfra.isDefined(c) && EBGInfra.notNull(c)&&!this._isRunningAnyVideoAsset(b))
                a = new EBG.Events.Event(EBG.Events.EventNames.DWELL_VIDEO_STOP), a.dispatcher = {
                    _adConfig: {
                        rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(b)
                    }
                }, EBG.eventMgr.dispatchEvent(a)
            }
    },
    clearTimer: function(a, b) {
        var c = this._getTimerInteraction(a, b);
        c && c.clear()
    },
    _isRunningAnyVideoAsset: function(a) {
        return this._isRunningVideoAsset(a,
        !1) || this._isRunningVideoAsset(a, !0)
    },
    _isRunningVideoAsset: function(a, b) {
        var c = this.adsData[a].assetsTimers, d;
        for (d in c)
            if (c.hasOwnProperty(d)) {
                var e = b ? "ebFSVideoAssetDuration": "ebVideoAssetDuration";
                if (c[d][e] && c[d][e].isRunning())
                    return !0
            }
        return !1
    },
    updateTimer: function(a, b, c, d) {
        if (a = this._getTimerInteraction(a, b))
            a.update(c), EBGInfra.isDefined(d) && EBGInfra.notNull(d) && this.adsData[b].assetsTimers[d].update(c)
        },
    getTimerValue: function(a, b) {
        var c = this._getTimerInteraction(a, b);
        return c ? c.getValue() :
        0
    },
    isTimerRunning: function(a, b) {
        var c = this._getTimerInteraction(a, b);
        return c ? c.isRunning() : !1
    },
    _handleUserInteraction: function(a, b) {
        if (b.initiationType == EBG.Interactions.InitiationTypes.USER&&!this.adsData[a].isUserInteractionOccur) {
            this.adsData[a].isUserInteractionOccur=!0;
            var c = new EBG.Events.Event(EBG.Events.EventNames.USER_INTERACTION);
            c.dispatcher = {
                _adConfig: {
                    rnd: EBG.Ads.Ad.Fn.getRandFromAdUId(a)
                }
            };
            EBG.eventMgr.dispatchEvent(c);
            this._reportUserInteraction(a)
        }
    },
    _handlePanelsViewed: function(a,
    b) {
        b.isPanel && b.initiationType == EBG.Interactions.InitiationTypes.USER && this.handleCounterInteraction(EBG.ExpBaseInteractions.PANELS_VIEWED, a)
    },
    _handleReportData: function(a, b, c) {
        this.adsIntQueues[a].push(c);
        a = this.adsIntQueues[a].length == EBG.Interactions.InteractionManager.intStackLength?!0 : !1;
        (b && (b.reportImmediately || b.counterJumpUrlData && b.counterJumpUrlData.tmpData.isClick) || a) && this.reportInteractionQueues()
    },
    _handleSpecialInteractions: function(a, b, c) {
        var d = this._getCounterInteraction(a, b), a =
        d.interactionData;
        this._handleUserInteraction(b, a);
        switch (a.reportingName) {
        case EBG.VideoInteraction.STARTED:
            d.unique && this._reportUniqueVideoStarted(b);
            this.adsData[b].isUserInteractionOccur && this._reportUserInitatedVideo(b, c);
            break;
        case EBG.VideoInteraction.FULLSCREEN_START:
            if (this._isRunningVideoAsset(b, !1))
                switch (d = this._getTimerInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b), d = d.getType(), d) {
                case EBG.DurationInteraction.TIMER:
                    this.startTimer(EBG.VideoInteraction.FULLSCREEN_DURATION, b,
                    c);
                    this.stopTimer(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c);
                    break;
                case EBG.DurationInteraction.AGGREGATE:
                    this.startAggregate(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c), this.stopAggregate(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c)
                }
            break;
        case EBG.VideoInteraction.FULLSCREEN_END:
            if (this._isRunningVideoAsset(b, !0))
                switch (d = this._getTimerInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b), d = d.getType(), d) {
                case EBG.DurationInteraction.TIMER:
                    this.startTimer(EBG.VideoInteraction.VIDEO_PLAY_DURATION,
                    b, c);
                    this.stopTimer(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c);
                    break;
                case EBG.DurationInteraction.AGGREGATE:
                    this.startAggregate(EBG.VideoInteraction.VIDEO_PLAY_DURATION, b, c), this.stopAggregate(EBG.VideoInteraction.FULLSCREEN_DURATION, b, c)
                }
            }
        this._handlePanelsViewed(b, a)
    },
    handleVideoInteraction: function(a, b, c, d) {
        if (EBGInfra.isDefined(c) && EBGInfra.notNull(c)) {
            var e = this.adsData[b].videoState;
            e[c] || (e[c] = 0);
            var f=!0, g = EBG.indexOfArray(EBG.Interactions.VideoInteractionOrder, a);
            - 1 != g && (g == e[c] ? e[c]++ :
            f=!1);
            f && this.handleCounterInteraction(a, b, c, d)
        }
    },
    handleAllTimers: function(a, b) {
        if (a == EBG.Interactions.InteractionManager.HandleAllTimersOptions.PAUSE)
            this._pausedTimers = [];
        var c = new EBG.Events.Event(EBG.Events.EventNames.COLLECT_TIMERS);
        c.dispatcher = this;
        c.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(c);
        for (var d in this.adsData)
            if (this.adsData.hasOwnProperty(d)) {
                var c = this.adsData[d], e = c[EBG.Interactions.InteractionTypes.TIMER];
                e && this._handleTimers(e, a, d);
                if (c.assetsTimers)
                    for (var f in c.assetsTimers)
                        c.assetsTimers.hasOwnProperty(f) &&
                        this._handleTimers(c.assetsTimers[f], a, d, f);
                        c = new EBG.Events.Event(EBG.Events.EventNames.COLLECT_TIMERS);
                        c.dispatcher = this;
                        c.timing = EBG.Events.EventTiming.ONTIME;
                        EBG.eventMgr.dispatchEvent(c);
                        a === EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT && (c = 0 <= this._seqTimersReportData.index, b = EBG.isBool(b) ? b : !0, this.reportInteractionQueues(b, c))
            }
    },
    _handleTimers: function(a, b, c, d) {
        for (var e in a)
            if (a.hasOwnProperty(e)) {
                var f = a[e];
                if (f.isRunning() || f.isFinished())
                    switch (b) {
                    case EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT:
                        (f =
                        f.handle(d)) && this.adsIntQueues[c].push(f);
                        break;
                    case EBG.Interactions.InteractionManager.HandleAllTimersOptions.PAUSE:
                        f.stop();
                        this._pausedTimers.push(f);
                        break;
                    case EBG.Interactions.InteractionManager.HandleAllTimersOptions.HANDLE_IDLE:
                        f.increaseIdleDuration(this.idleManager.currentIdleDuration)
                    }
                }
        },
    pauseAllTimers: function() {
        return this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.PAUSE, !0)
    },
    resumeAllTimers: function() {
        if (null != this._pausedTimers) {
            for (var a = 0; a < this._pausedTimers.length; a++)
                this._pausedTimers[a].start();
            this._pausedTimers = null
        }
    },
    reportInteractionQueues: function(a, b) {
        var a = EBG.isBool(a) ? a: !0, b = EBG.isBool(b) ? b: !1, c = "", d = this.interactionPipe, e;
        for (e in this.adsData)
            if (this.adsData.hasOwnProperty(e)) {
                var f = this.adsIntQueues[e];
                if (!this.adsData[e].delayIntReport)
                    for (; f.length;) {
                        for (var g = this._getAdReportData(e), h = 0, i = this._isUnloadHandled ? f.length : EBG.Interactions.InteractionManager.intStackLength, j = 0; j < f.length && j < i; j++)
                            g += f[j], h++;
                            for (j = 0; j < h; j++)
                                f.shift();
                                this._isUnloadHandled ? ("" != c && (c += "|"), c +=
                                g) : this._reportServer(d + g + this._getPipeParams(e, b), a)
                            }
                }
        if (this._isUnloadHandled && "" != c) {
            for (e in this.adsData)
                if (this.adsData.hasOwnProperty(e)) {
                    c = d + c + this._getPipeParams(e, b);
                    break
                }
            this._reportServer(c, a)
        }
    },
    _reportServer: function(a, b) {
        (!EBG.isPreview || EBG.isGlobalDef("gfEbForceReportInt")) && EBG.adaptor.reportToRemoteServer(a, b)
    },
    _isReportDataInQueue: function(a, b) {
        for (var c=!1, d = this.adsIntQueues[a], e = 0; e < d.length; e++)
            if (d[e] === b) {
                c=!0;
                break
            }
        return c
    },
    _getPipeParams: function(a, b) {
        var c = "", d = this.adsData[a].adConfig.usercookie;
        d && (c += EBG.format("&usercookie={0}", d));
        (d = this.adsData[a].adConfig.optOut) && (c += EBG.format("&OptOut={0}", d));
        b && (c += EBG.format("&iseq={0}", this._seqTimersReportData.index));
        EBG.isGlobalDef("gfEbForceReportInt") && (c += "&pr=1");
        c += EBG.format("&rnd={0}", Math.random());
        EBG.adaptor.flash && (c += EBG.format("&flv={0}", EBG.adaptor.flash.version));
        EBG.isDefined(EBG.adaptor.getResolution) && (c += EBG.format("&res={0}", EBG.adaptor.getResolution()));
        return c
    },
    _getAdReportData: function(a) {
        var b = this.adsData[a].adConfig,
        c = EBG.Interactions.InteractionManager.charAdFieldsDelimeter;
        return EBG.format("{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}{11}{12}", EBG.Ads.Ad.Fn.getAdIdFromAdUId(a), c, b.page, c, b.pluId, c, b.massVersioning.targetAudienceId, c, b.massVersioning.deliveryGroupId, c, EBG.Ads.Ad.Fn.getVersionToReport(b.massVersioning.adVersions), c, this.adsData[a].adConfig.sID)
    },
    _addSystemInteractions: function(a) {
        var a = a.uid, b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.USER_INTERACTION, EBG.Interactions.Categories.SYSTEM,
        a);
        b.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.UNIQUE_VIDEO_STARTED, EBG.Interactions.Categories.VIDEO, a);
        b.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.DWELL_UNIQUE, EBG.Interactions.Categories.SYSTEM, a);
        b.reportImmediately=!0;
        b.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        b = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.REPLAY, EBG.Interactions.Categories.SYSTEM, a);
        this.addInteraction(new EBG.Interactions.CounterInteraction(b));
        a = new EBG.Interactions.CounterInteractionData(EBG.Interactions.SystemInts.RICH_FLASH_PLAYED, EBG.Interactions.Categories.SYSTEM, a);
        a.numLeftToReport = 1;
        this.addInteraction(new EBG.Interactions.CounterInteraction(a))
    },
    _reportUserInitatedVideo: function(a, b) {
        this.handleVideoInteraction(EBG.VideoInteraction.USER_INITIATED_VIDEO,
        a, b)
    },
    _reportUserInteraction: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.USER_INTERACTION, a)
    },
    _reportUniqueVideoStarted: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.UNIQUE_VIDEO_STARTED, a)
    },
    reportDwellUnique: function(a, b) {
        b && this.handleCounterInteraction(EBG.Interactions.SystemInts.DWELL_UNIQUE, a, null, !1)
    },
    reportRichFlashPlayed: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.RICH_FLASH_PLAYED, a)
    },
    reportReplay: function(a) {
        this.handleCounterInteraction(EBG.Interactions.SystemInts.REPLAY,
        a, 0, EBG.ActionType.USER)
    },
    _getTimerInteraction: function(a, b) {
        a = a.toLowerCase();
        if (this.adsData[b] && this.adsData[b][EBG.Interactions.InteractionTypes.TIMER] && this.adsData[b][EBG.Interactions.InteractionTypes.TIMER][a])
            return this.adsData[b][EBG.Interactions.InteractionTypes.TIMER][a]
    },
    _subscribeToEvents: function() {
        EBG.adaptor.supportsPageLoadEvents() ? (EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_BEFORE_UNLOAD, this.unLoadHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD,
        this.unLoadHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDE, this.unLoadHandler, this)), EBG.runTimed(this, this.reportInteractionQueues, [], this._timedReport)) : this._setNextTimerSeq(!0)
    },
    _handleAllTimersSeq: function() {
        var a = EBG.adaptor.browser.isMobile();
        EBG.adaptor.supportsPageLoadEvents();
        this.reportInteractionQueues(!a);
        this._pausedTimers || (this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT, !a), this.resumeAllTimers());
        this._setNextTimerSeq(!1)
    },
    _setNextTimerSeq: function(a) {
        a = "undefined" != typeof a && a ? this._seqTimersReportData.index = 0 : ++this._seqTimersReportData.index;
        a < this._seqTimersReportData.intervals.length && EBG.runTimed(this, this._handleAllTimersSeq, [], 1E3 * this._seqTimersReportData.intervals[a])
    },
    unLoadHandler: function() {
        if (!this._isUnloadHandled)
            this._isUnloadHandled=!0, this.handleAllTimers(EBG.Interactions.InteractionManager.HandleAllTimersOptions.REPORT, !1)
        },
    getAdDuration: function(a) {
        var b = 0;
        (a = this._getTimerInteraction(EBG.Interactions.SystemInts.AD_DURATION,
        a)) && (b = a.getElapsedTime());
        return b
    }
};
EBG.declareClass(EBG.Interactions.InteractionManager, EBG.Interactions.StdInteractionManager);
EBG.declareNamespace("Positioning");
EBG.Positioning.PositionManager = function() {};
EBG.Positioning.PositionManager.prototype = {
    isVisibile: function(a, b, c) {
        try {
            return 0 < this.calculateVisibilityPercentage(a, b, c)?!0 : !1
        } catch (d) {}
    },
    calculateVisibilityPercentage: function(a, b, c, d, e, f, g) {
        try {
            var h = 0, i = 0, j = 0, k=!(EBG.adaptor.getDisplayWin() != top && g == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME), n = EBG.adaptor.getScrollLeftTop(k, g), o = EBG.adaptor.getViewPortMetrics(k, f, g), p = this.calculateRightBottowCoordinate(n, o.Width, o.Height), m = EBG.adaptor.getPositioningById(a, !k, g);
            if (null != m) {
                a = {
                    X: 0,
                    Y: 0
                };
                try {
                    !k &&
                    window.frameElement && (a = EBG.adaptor.getPositioningByElement(window.frameElement, !1, g))
                } catch (r) {
                    a = {
                        X: 0,
                        Y: 0
                    }
                }
                m.X += a.X;
                m.Y += a.Y;
                "undefined" != typeof d && (m.X += d);
                "undefined" != typeof e && (m.Y += e);
                var q = this.calculateRightBottowCoordinate(m, b, c), j = b * c, i = this.calculateVisibleArea(n, p, m, q), h = j ? i / j: 0
            }
            return h
        } catch (l) {}
    },
    calculateRightBottowCoordinate: function(a, b, c) {
        var d = {
            X: 0,
            Y: 0
        };
        d.X = a.X + b;
        d.Y = a.Y + c;
        return d
    },
    calculateVisibleArea: function(a, b, c, d) {
        try {
            var e = 0, f = 0;
            if (c.Y == d.Y && c.X == d.X || b.X <= a.X || b.Y <= a.Y)
                return 0;
            c.X <= a.X && a.X <= d.X ? e = b.X <= d.X ? b.X - a.X : d.X - a.X : a.X <= c.X && c.X <= b.X && (e = d.X >= b.X ? b.X - c.X : d.X - c.X);
            c.Y <= a.Y && a.Y <= d.Y ? f = b.Y <= d.Y ? b.Y - a.Y : d.Y - a.Y : a.Y <= c.Y && c.Y <= b.Y && (f = d.Y >= b.Y ? b.Y - c.Y : d.Y - c.Y);
            return e * f
        } catch (g) {}
    },
    getFullRectWithClip: function(a, b) {
        var c = null, c = EBG.adaptor.getDisplayWin() === EBG.adaptor.getPageWin(), d = null;
        if (a) {
            var c = EBG.adaptor.getPositioningByElement(a, !c, b), d = {
                width: a.offsetWidth,
                height: a.offsetHeight
            }, e = a.style.clip, f = 0, g = 0, h = d.height, i = d.width;
            "" != e && (e = e.substring(e.indexOf("(") +
            1).replace(/,/g, "").replace(/ /g, ""), e = e.split("px"), g = parseInt(e[0]), i = parseInt(e[1]), h = parseInt(e[2]), f = parseInt(e[3]));
            d.left = c.X + f;
            d.top = c.Y + g;
            d.width -= d.width - i;
            d.width -= f;
            d.height -= d.height - h;
            d.height -= g;
            d.right = d.left + d.width;
            d.bottom = d.top + d.height
        }
        return d
    },
    isOverlapping: function(a, b, c) {
        if (!a || 0 == a.offsetWidth && 0 == a.offsetHeight ||!b || 0 == b.offsetWidth && 0 == b.offsetHeight)
            return !1;
        a = EBG.posHelper.getFullRectWithClip(a, c);
        b = EBG.posHelper.getFullRectWithClip(b, c);
        return !a ||!b || a.bottom < b.top ||
        a.top > b.bottom || a.right < b.left || a.left > b.right?!1 : !0
    }
};
EBG.declareClass(EBG.Positioning.PositionManager, null);
EBG.declareNamespace("RichModules");
EBG.RichModules.BasicVisibilityProvider = function(a, b) {
    this._resObjId = a;
    this.adConfig = b;
    this._subscribeToEvents();
    this._trackElementLocation()
};
EBG.RichModules.BasicVisibilityProvider._isAvailable = function() {
    return !1
};
EBG.RichModules.BasicVisibilityProvider.prototype = {
    _isStarted: !1,
    _calculateVisibilityPercentage: function() {
        return 0
    },
    _getViewPortMetrics: function() {
        return null
    },
    _dispatchCheckVisibility: function(a) {
        if (this._isStarted) {
            var b = new EBG.Events.Event(EBG.Events.EventNames.VISIBILITY_CHECK);
            b.dispatcher = this;
            b.eventData = a;
            b.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.dispatchEvent(b)
        }
    },
    _dispatchVisibilityHidden: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.VISIBILITY_HIDDEN);
        a.dispatcher =
        this;
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.dispatchEvent(a)
    },
    _subscribeToEvents: function() {},
    updateResourceObjId: function(a) {
        this._resObjId = a;
        this._trackElementLocation()
    },
    _isVisible: function() {
        return !1
    },
    _calculateVisibilityResult: function() {
        var a = {};
        try {
            a.percentage = this._calculateVisibilityPercentage(), a.viewPort = this._getViewPortMetrics()
        } catch (b) {}
        return a
    },
    start: function() {
        this._isStarted=!0
    },
    _trackElementLocation: function() {
        if (this._intervalHandler)
            clearInterval(this._intervalHandler),
            this._intervalHandler = null;
        var a = EBG.adaptor.getPositioningById(this._resObjId, !0, this.adConfig.actualServingMode);
        if (a)
            this._intervalHandler = EBG.setInterval(this, function() {
                var b = EBG.adaptor.getPositioningById(this._resObjId, !0, this.adConfig.actualServingMode);
                if (b && (a.X != b.X || a.Y != b.Y))
                    a = b, this.onElementMoved()
                }, [], 500)
    },
    onElementMoved: function() {}
};
EBG.declareClass(EBG.RichModules.BasicVisibilityProvider, null);
EBG.declareNamespace("RichModules");
EBG.RichModules.GeometricVisibilityProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.GeometricVisibilityProvider, this, [a, b])
};
EBG.RichModules.GeometricVisibilityProvider._isAvailable = function(a) {
    var b=!0, c = a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME, d = EBG.Initializer._getAdClass({
        tn: a.templateName
    }), e=!d.requiresIframeBust&&!a.UiVz, a = d.requiresIframeBust&&!EBG.iframeLocation && a.aiE&&!a.aiE.iflExists;
    if (c && (e || a))
        b=!1;
    return b
};
EBG.RichModules.GeometricVisibilityProvider.prototype = {
    _focusOnResourceElem: null,
    _justReceivedFocusOnPage: null,
    _reachedMaxAdDuration: !1,
    _calculateVisibilityPercentage: function(a) {
        var a = a || {}, b = a.resourceObjId || this._resObjId, c = a.width || this.adConfig.width, d = a.height || this.adConfig.height, e = a.offsetX || this.adConfig.offsetX, f = a.offsetY || this.adConfig.offsetY, a = a.actualServingMode || this.adConfig.actualServingMode, g = 0;
        if (!EBG.adaptor.isPageVisible())
            return 0;
        try {
            var h = 0, i = 0, j = this._getViewPortTopLeft(),
            k = this._getViewPortMetrics(), n = this.calculateRightBottowCoordinate(j, k.Width, k.Height), o = EBG.adaptor.getPositioningById(b, EBG.adaptor.getDisplayWin() != top && a == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME, a);
            if (null != o) {
                var p = this._getInnerFrameTopLeft(EBG.adaptor.getDisplayWin(), a);
                o.X += p.X;
                o.Y += p.Y;
                "undefined" != typeof e && (o.X += e);
                "undefined" != typeof f && (o.Y += f);
                var m = this.calculateRightBottowCoordinate(o, c, d), i = c * d, h = this.calculateVisibleArea(j, n, o, m), g = i ? h / i: 0
            }
            return 100 * g
        } catch (r) {
            return 0
        }
    },
    _getViewPortMetrics: function() {
        var a =
        "undefined" != typeof this.adConfig && EBG.isDefinedNotNull(this.adConfig) ? this.adConfig.actualServingMode: EBG.adaptor.serving.detectServingMode(!0), a = EBG.adaptor._getCurrentWindow(void 0, a);
        heightWidth = EBG.adaptor.getWindowViewPortMetrics(a);
        if (EBG.adaptor.browser.isFF() && "undefined" != typeof a.outerWidth && EBG.adaptor.serving.detectServingMode(!0) == EBG.Adaptors.ServingMode.IFRAME && ("undefined" == typeof this.adConfig ||!EBG.isDefined(this.adConfig.isUIVZ) ||!this.adConfig.isUIVZ)&&!EBG.iframeLocation && "undefined" !=
        typeof this.adConfig && this.adConfig.aiE&&!this.adConfig.aiE.iflExists)
            heightWidth.Width = a.outerWidth, heightWidth.Height = a.outerHeighth, EBG.isDefined(a.scrollMaxX) && 0 < a.scrollMaxX && EBG.isDefined(EBG.adaptor.scrollBarWidth) && 0 < EBG.adaptor.scrollBarWidth && (heightWidth.Height -= EBG.adaptor.scrollBarWidth), EBG.isDefined(a.scrollMaxY) && 0 < a.scrollMaxY && EBG.isDefined(EBG.adaptor.scrollBarHeight) && 0 < EBG.adaptor.scrollBarHeight && (heightWidth.Width -= EBG.adaptor.scrollBarHeight);
        return heightWidth
    },
    calculateRightBottowCoordinate: function(a,
    b, c) {
        var d = {
            X: 0,
            Y: 0
        };
        d.X = a.X + b;
        d.Y = a.Y + c;
        return d
    },
    calculateVisibleArea: function(a, b, c, d) {
        try {
            var e = 0, f = 0;
            if (c.Y == d.Y && c.X == d.X || b.X <= a.X || b.Y <= a.Y)
                return 0;
            c.X <= a.X && a.X <= d.X ? e = b.X <= d.X ? b.X - a.X : d.X - a.X : a.X <= c.X && c.X <= b.X && (e = d.X >= b.X ? b.X - c.X : d.X - c.X);
            c.Y <= a.Y && a.Y <= d.Y ? f = b.Y <= d.Y ? b.Y - a.Y : d.Y - a.Y : a.Y <= c.Y && c.Y <= b.Y && (f = d.Y >= b.Y ? b.Y - c.Y : d.Y - c.Y);
            return e * f
        } catch (g) {}
    },
    _isVisible: function(a) {
        a = a || {};
        return !!this._calculateVisibilityPercentage({
            resourceObjId: a.resourceObjId || this._resObjId,
            width: a.width ||
            this.adConfig.width,
            height: a.height || this.adConfig.height,
            offsetX: a.offsetX || this.adConfig.offsetX,
            offsetY: a.offsetY || this.adConfig.offsetY,
            isUIVZ: a.isUIVZ || this.adConfig.isUIVZ,
            actualServingMode: a.actualServingMode || this.adConfig.actualServingMode
        })
    },
    _subscribeToEvents: function() {
        try {
            EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "_subscribeToEvents");
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE, this._pageResizeHandler, this));
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_SCROLL, this._pageScrollHandler, this));
            if (!EBG.adaptor._getVisibilityEventName() || EBG.adaptor.browser.isAndroidNative() && 4.4 > EBG.adaptor.browser.getVersion())
                EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_FOCUS, this._pageFocusHandler, this)), EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_BLUR, this._pageBlurHandler, this)), this._subscribeToElementEvents();
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDDEN, this._pageHiddenHandler, this);
            a.isDocumentEvent=!0;
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_VISIBLE, this._pageVisibleHandler, this);
            a.isDocumentEvent=!0;
            EBG.eventMgr.subscribeToEvent(a)
        } catch (b) {}
    },
    _subscribeToElementEvents: function() {
        var a = this, b = function() {
            a._resourceBlurHandler()
        }, c = new EBG.Events.EventSubscription("focus", function() {
            a._resourceFocusHandler()
        }, this);
        c.isElementEvent =
        !0;
        c.elementId = this._resObjId;
        EBG.eventMgr.subscribeToEvent(c);
        if (EBG.adaptor.browser.isIE() && this.actualServingMode != EBG.Adaptors.ServingMode.SCRIPT)
            c = new EBG.Events.EventSubscription("blur", b, this), c.isElementEvent=!0, c.elementId = this._resObjId, EBG.eventMgr.subscribeToEvent(c)
    },
    updateResourceObjId: function(a) {
        EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "updateResourceObjId", [a]);
        EBG.adaptor._getVisibilityEventName() || this._subscribeToElementEvents()
    },
    _getInnerFrameTopLeft: function(a,
    b) {
        var c = {
            X: 0,
            Y: 0
        };
        try {
            EBG.adaptor.getDisplayWin() != top && b == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME && a.frameElement && (c = EBG.adaptor.getPositioningByElement(a.frameElement, !1, b))
        } catch (d) {}
        return c
    },
    _getViewPortTopLeft: function() {
        var a=!(EBG.adaptor.getDisplayWin() != top && this.adConfig.actualServingMode == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME);
        return EBG.adaptor.getScrollLeftTop(a, this.adConfig.actualServingMode)
    },
    _pageVisibleHandler: function() {
        this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    _pageHiddenHandler: function() {
        this._dispatchVisibilityHidden();
        this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && this._dispatchCheckVisibility({
            percentage: 0,
            viewPort: this._getViewPortMetrics()
        })
    },
    _resourceFocusHandler: function() {
        this._focusOnResourceElem=!0;
        EBG.runTimed(this, function() {
            this._focusOnResourceElem=!1
        }, [], 60);
        this._pageFocusHandler()
    },
    _resourceBlurHandler: function() {
        EBG.runTimed(this, function() {
            !this._justReceivedFocusOnPage&&!this._focusOnResourceElem && this._pageBlurHandler()
        },
        [], 30)
    },
    _pageFocusHandler: function() {
        this._justReceivedFocusOnPage=!0;
        EBG.runTimed(this, function() {
            this._justReceivedFocusOnPage=!1
        }, [], 60);
        this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    _pageBlurHandler: function() {
        EBG.runTimed(this, function() {
            this._justReceivedFocusOnPage || this._pageHiddenHandler()
        }, [], 30)
    },
    _pageScrollHandler: function() {
        this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    _pageResizeHandler: function() {
        if (!this._resizeTimeOut) {
            var a = this;
            this._resizeTimeOut =
            setTimeout(function() {
                a._resizeTimeOut = null;
                var b = a._calculateVisibilityResult();
                a._dispatchCheckVisibility(b)
            }, 100)
        }
    },
    _maxAdDurationHandler: function() {
        this._reachedMaxAdDuration=!0
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "start");
        this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    onElementMoved: function() {
        EBG.callSuperFunction(EBG.RichModules.GeometricVisibilityProvider, this, "onElementMove");
        this._dispatchCheckVisibility(this._calculateVisibilityResult())
    }
};
EBG.declareClass(EBG.RichModules.GeometricVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.declareNamespace("RichModules");
EBG.RichModules.SafeFrameVisibilityProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.SafeFrameVisibilityProvider, this, [a, b]);
    this._initSafeFrameObject()
};
EBG.RichModules.SafeFrameVisibilityProvider._isAvailable = function() {
    return !!EBG.adaptor.isSafeFrame()
};
EBG.RichModules.SafeFrameVisibilityProvider.prototype = {
    _safeFrameObj: null,
    _intervalHandler: null,
    _lastPercentage: null,
    _lastViewport: null,
    _initSafeFrameObject: function() {
        this._safeFrameObj = window.$sf && $sf.ext
    },
    _calculateVisibilityPercentage: function() {
        try {
            return EBG.adaptor.isPageVisible() ? this._safeFrameObj.inViewPercentage() : 0
        } catch (a) {
            return 0
        }
    },
    _getViewPortRect: function() {
        var a = this._safeFrameObj.geom().win;
        return {
            w: parseInt(a.w),
            h: parseInt(a.h)
        }
    },
    _getViewPortMetrics: function() {
        var a = this._getViewPortRect();
        return {
            Height: a.h,
            Width: a.w
        }
    },
    _isVisible: function() {
        return !!this._calculateVisibilityPercentage()
    },
    _checkVisibility: function() {
        var a = this._calculateVisibilityResult();
        if (this._lastPercentage != a.percentage ||!this._lastViewport || this._lastViewport.Height != a.viewPort.Height || this._lastViewport.Width != a.viewPort.Width)
            this._dispatchCheckVisibility(a), this._lastPercentage = a.percentage, this._lastViewport = a.viewPort
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.SafeFrameVisibilityProvider, this,
        "start");
        EBG.setInterval(this, this._checkVisibility, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval)
    }
};
EBG.declareClass(EBG.RichModules.SafeFrameVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.declareNamespace("RichModules");
EBG.RichModules.AddingEyeProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.AddingEyeProvider, this, [a, b])
};
EBG.RichModules.AddingEyeProvider._isAvailable = function(a) {
    var b = EBG.serverResponses[a.uid];
    if (!b.requiresIframeBust && a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME && b.aiE.iflExists) {
        var c = EBG.cloneObj(b);
        c.tn = c.adConfig.templateName = "Visibility";
        c.ifrm = 2;
        c.soi = 0;
        window.ebOArr[ebOArr.length] = c;
        var a = ebSrc.replace(b.tn, c.tn), a = a.replace(/ex(debug|_api|)\.js/ig, ".js"), d = document.createElement("SCRIPT");
        d.src = a;
        c.ebSrc = a;
        b.adConfig.adStarted ? (b = document.getElementById(c.phid)) && b.appendChild(d) :
        (b = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
            var a = document.getElementById(c.phid);
            a && a.appendChild(d)
        }, null), b.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.subscribeToEvent(b));
        return !0
    }
    return !1
};
EBG.RichModules.AddingEyeProvider.prototype = {
    shouldReportRecordable: function() {
        return !1
    },
    start: function() {}
};
EBG.declareClass(EBG.RichModules.AddingEyeProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.declareNamespace("RichModules");
EBG.RichModules.FFVisibilityProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.FFVisibilityProvider, this, [a, b])
};
EBG.RichModules.FFVisibilityProvider._isAvailable = function(a) {
    return (EBG.adaptor.browser.isFF() || EBG.adaptor.browser.isSafari() && 6 <= EBG.adaptor.browser.getVersion()) && a.actualServingMode == EBG.Adaptors.ServingMode.IFRAME
};
EBG.RichModules.FFVisibilityProvider.prototype = {
    _focusOnResourceElem: null,
    _justReceivedFocusOnPage: null,
    _reachedMaxAdDuration: !1,
    _getInnerFrameTopLeft: function() {
        return EBG.adaptor.getIframePosition()
    },
    _getViewPortTopLeft: function() {
        var a = EBGInfra.callSuperFunction(EBG.RichModules.FFVisibilityProvider, this, "_getViewPortTopLeft");
        return {
            X: EBG.adaptor.getDisplayWin().screenX + a.X,
            Y: EBG.adaptor.getDisplayWin().screenY + a.Y
        }
    },
    _getViewPortMetrics: function() {
        var a = EBG.adaptor.getDisplayWin(), b = {
            Height: 0,
            Width: 0
        };
        if (EBG.isDefined(a.outerWidth) && (0 < a.outerWidth || 0 < a.outerHeight))
            b.Width = a.outerWidth, b.Height = a.outerHeight;
        else if (EBG.isDefined(a.screen.availWidth))
            b.Width = a.screen.availWidth, b.Height = a.screen.availHeight;
        EBG.isDefined(a.scrollMaxX) && 0 < a.scrollMaxX && EBG.isDefined(EBG.adaptor.scrollBarWidth) && 0 < EBG.adaptor.scrollBarWidth && (b.Height -= EBG.adaptor.scrollBarWidth);
        EBG.isDefined(a.scrollMaxY) && 0 < a.scrollMaxY && EBG.isDefined(EBG.adaptor.scrollBarHeight) && 0 < EBG.adaptor.scrollBarHeight && (b.Width -=
        EBG.adaptor.scrollBarHeight);
        return b
    },
    _subscribeToEvents: function() {
        EBG.runTimed(this, this._visibilityPollingCheck, [], EBG.RichModules.VisibilityManager.VisibilityPollingTimer)
    },
    _visibilityPollingCheck: function() {
        this._reachedMaxAdDuration || (this._dispatchCheckVisibility(this._calculateVisibilityResult()), EBG.runTimed(this, this._visibilityPollingCheck, [], EBG.RichModules.VisibilityManager.VisibilityPollingTimer))
    }
};
EBG.declareClass(EBG.RichModules.FFVisibilityProvider, EBG.RichModules.GeometricVisibilityProvider);
EBG.declareNamespace("RichModules");
EBG.RichModules.FlashVisibilityProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.FlashVisibilityProvider, this, [a, b]);
    try {
        this.maxVisibilityArea = b.width * b.height, this.pixelContainer = this._writeFlashRenderPixels(), this._subscribeToEvents()
    } catch (c) {}
};
EBG.RichModules.FlashVisibilityProvider._isAvailable = function(a) {
    var b=!0;
    if (EBG.adaptor.browser.isChrome() && EBG.adaptor.flash && 9 <= EBG.adaptor.flash.version && a.visibility)
        for (var c = ["advertiserMinSurface", "agencyMinSurface", "iabMinSurface"], d, e = 0; e < c.length; e++) {
            if (d = a.visibility[c[e]], EBG.isDefined(d) && 50 != d && 100 != d) {
                b=!1;
                break
            }
        } else 
            b=!1;
    return b
};
EBG.RichModules.FlashVisibilityProvider.prototype = {
    pixelContainerId: null,
    pixels: [],
    maxVisibilityArea: 0,
    _calculationTimeOut: !1,
    _isReady: !1,
    _loadedPixelsCounter: 0,
    pixelCountPerAxis: 2,
    _calculateVisibilityPercentage: function() {
        if (!this._isReady)
            return - 1;
        var a = 0;
        if (EBG.adaptor.isPageVisible())
            var b = this.maxVisibilityArea / this.pixelCountPerAxis, a = this.getAxisHiddenAreaPercent("Y", b), b = this.getAxisHiddenAreaPercent("X", b), a = b > a ? this._calculateVisibilityPercentageByAlgorithem(b, a): this._calculateVisibilityPercentageByAlgorithem(a,
            b);
        return a
    },
    _calculateVisibilityPercentageByAlgorithem: function(a, b) {
        return 100 * (1 - (a + (b - a * b)))
    },
    _getViewPortMetrics: function() {
        return null
    },
    getAxisHiddenAreaPercent: function(a, b) {
        for (var c = 0, d = 0; d < this.pixels.length; d++)
            this.pixels[d].axis == a&&!this.pixels[d].isVisible && (c += b);
        return c / this.maxVisibilityArea
    },
    _handlePixelMessage: function(a) {
        var b = {};
        if (0 < a.length)
            for (var a = a.split(","), c = ["id", "isVisible", "axis"], d = 0; d < a.length; d++) {
                var e = a[d];
                b[c[d]] = '"' == e.charAt(0) || "'" == e.charAt(0) || "false" ==
                e || "true" == e ? eval(e) : e
            }
        for (d = 0; d < this.pixels.length; d++)
            if (this.pixels[d].id == b.id) {
                this.pixels[d].isVisible = "1" === b.isVisible;
                if (!this.pixels[d].loaded)
                    this.pixels[d].loaded=!0, this._loadedPixelsCounter++;
                    this._triggerCalculation();
                    break
            }
    },
    _writeFlashRenderPixels: function() {
        var a = EBG.adaptor.getPositioningById(this._resObjId, !0, this.adConfig.actualServingMode), b = EBG.adaptor.generateElementId("VisibilityDiv", this.adConfig.uid), a = {
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: b,
                dir: "ltr",
                style: {
                    position: "absolute",
                    width: EBG.px(this.adConfig.width),
                    height: EBG.px(this.adConfig.height),
                    top: EBG.px(a.Y),
                    left: EBG.px(a.X),
                    "z-index": - 10
                }
            },
            children: this._createPixelsJson()
        };
        if ("undefined" != typeof this.adConfig.display)
            a.attributes.style.display = this.adConfig.display;
        EBG.adaptor.addInlineDOM(a, this.adConfig.placeHolderId);
        return EBG.adaptor.getElementById(b)
    },
    _createPixelsJson: function() {
        var a = this._getPixelCordinates();
        if (!a || 0 == a.length)
            throw "could not get cordinates for creating render pixels";
        for (var b = [], c, d, e =
        0; e < 2 * this.pixelCountPerAxis; e++)
            c = a[e], d = this._resObjId + "pixel" + c.X + ":" + c.Y, b.push(this._buildRenderPixelJson(d, c.axis, c.X, c.Y)), this.pixels.push({
                id: d,
                axis: c.axis,
                isVisible: !1,
                loaded: !1
            });
        b.push(this._createScriptTag());
        return b
    },
    _createScriptTag: function() {
        var a = "handlePixel_" + this.adConfig.uid, b = EBG.format("EBG.ads['{0}'].visibilityMgr._visibilityProvider._handlePixelMessage", this.adConfig.uid), a = EBG.format("function {0}(args)", a), a = a + EBG.format("{ try{ if(!args||args=='null')args=''; return {0}(args);}catch(e){if(window.mmFSExceptionAlert)mmFSExceptionAlert('Command: '+command+'\\nargs: '+args.toString()+'\\n\\nexception in DoFS func:\\n'+e.message)}}",
        b);
        return {
            tagName: EBG.Adaptors.TagNames.SCRIPT,
            text: a
        }
    },
    _getPixelCordinates: function() {
        for (var a = [], b = 0 + Math.round(this.adConfig.height / 2), c = 0, d = Math.floor((this.adConfig.width - 1) / (this.pixelCountPerAxis - 1)), e = 0; e < this.pixelCountPerAxis; e++)
            a.push({
                X: c,
                Y: b,
                axis: "Y"
            }), c += d;
        b = 0;
        c = 0 + Math.round(this.adConfig.width / 2);
        d = Math.floor((this.adConfig.height - 1) / (this.pixelCountPerAxis - 1));
        for (e = 0; e < this.pixelCountPerAxis; e++)
            a.push({
                X: c,
                Y: b,
                axis: "X"
            }), b += d;
        return a
    },
    _buildRenderPixelJson: function(a, b, c, d) {
        a =
        {
            play: "true",
            resId: this.adConfig.uid,
            resPath: this.adConfig.bigSDir + "/Res/Assets/Pixel" + EBG.flashPixelVer + "/pixel.swf",
            unique: 0,
            wmode: "transparent",
            tagName: EBG.Adaptors.TagNames.OBJECT,
            attributes: {
                id: a,
                dir: "ltr",
                name: a,
                style: {
                    position: "absolute",
                    textAlign: "left",
                    width: "1px",
                    height: "1px",
                    left: EBG.px(c),
                    top: EBG.px(d),
                    "z-index": - 10
                },
                codebase: EBG.format("{0}download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#", EBG.protocol),
                version: EBG.format("{0},0,0,0", this.adConfig.flashVer)
            },
            params: {
                play: "true",
                wmode: "transparent",
                menu: "false",
                flashVars: "ebAdUID=" + this.adConfig.uid + "&id=" + a + "&axis=" + b,
                allowScriptAccess: "always",
                allowFullScreen: "true"
            }
        };
        this._isSupportShockwave() ? (a.attributes.type = "application/x-shockwave-flash", a.attributes.data = a.resPath) : (a.attributes.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", a.params.movie = a.resPath);
        return a
    },
    _isSupportShockwave: function() {
        var a=!0;
        if (EBG.adaptor.browser.isIE() && 11 > EBG.adaptor.browser.getVersion() || 10 < EBG.adaptor.browser.getVersion() && 9 >
        EBG.adaptor.getDisplayWin().document.documentMode)
            a=!1;
        return a
    },
    _subscribeToEvents: function() {
        EBG.callSuperFunction(EBG.RichModules.BasicVisibilityProvider, this, "_subscribeToEvents");
        EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE, this._repositonPixels, this))
    },
    _repositonPixels: function() {
        var a = EBG.adaptor.getPositioningById(this._resObjId, !0, this.adConfig.actualServingMode);
        this.pixelContainer.style.top = EBG.px(a.Y);
        this.pixelContainer.style.left = EBG.px(a.X)
    },
    _triggerCalculation: function() {
        if (this._checkPixelsLoaded()&&!this._calculationTimeOut) {
            var a = this;
            this._calculationTimeOut = setTimeout(function() {
                a._calculationTimeOut = null;
                var b = a._calculateVisibilityResult();
                a._dispatchCheckVisibility(b)
            }, 600)
        }
    },
    _checkPixelsLoaded: function() {
        if (!this._isReady)
            this._isReady = 2 * this.pixelCountPerAxis == this._loadedPixelsCounter;
        return this._isReady
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.FlashVisibilityProvider, this, "start");
        this._triggerCalculation()
    }
};
EBG.declareClass(EBG.RichModules.FlashVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.RichModules.MouseVisibilityProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.MouseVisibilityProvider, this, [a, b]);
    try {
        this._subscribeToEvents();
        this._scrollWidth = EBG.adaptor.getScrollerWidth();
        var c = EBG.adaptor.getDisplayWin();
        this._screenResolution = {
            width: c.screen.availWidth,
            height: c.screen.availHeight
        };
        this._screenOriginalResolution = {
            width: c.screen.availWidth,
            height: c.screen.availHeight
        };
        if (!this._browserStateSupported())
            this._resolutionBaseScreenSize = this._resolutionToScreenSize(this._screenResolution),
            this._resourceInitialPosition = {
                top: c.screenTop,
                left: c.screenLeft
            };
        this._resourceFullSize = this.adConfig.width * this.adConfig.height;
        this._mouseMoveEventInvoker()
    } catch (d) {}
};
EBG.RichModules.MouseVisibilityProvider._isAvailable = function() {
    var a=!1, b = EBG.adaptor.browser.getDocumentMode() || 5;
    EBG.adaptor.browser.isIE() && EBG.adaptor._getVisibilityEventHidden() && 11 > b && 11 > EBG.adaptor.browser._browserVer && (a=!0);
    return a
};
EBG.RichModules.MouseVisibilityProvider.prototype = {
    _isStarted: !1,
    _resObj: null,
    _lastViewPort: null,
    _resourceRect: null,
    _resourceFullSize: null,
    _screenResolution: null,
    _screenOriginalResolution: null,
    _screenInitialPosition: {
        top: 0,
        left: 0
    },
    _resolutionBaseScreenSize: null,
    _intervalId: null,
    _calculateVisibilityPercentage: function() {
        if (!this._isReady)
            return - 1;
        var a = this._getViewPortRect(), b = this._resourceRect;
        if (!a ||!b)
            return - 1;
        var c = 0;
        EBG.adaptor.isPageVisible() && (c = 100 * (EBG.posHelper.calculateVisibleArea({
            X: a.left,
            Y: a.top
        }, {
            X: a.right,
            Y: a.bottom
        }, {
            X: b.left,
            Y: b.top
        }, {
            X: b.right,
            Y: b.bottom
        }) / this._resourceFullSize));
        return c
    },
    _calcResourceRect: function(a) {
        var b;
        if (8 == EBG.adaptor.browser._browserVer && 8 == EBG.adaptor.browser.getDocumentMode()) {
            var c = (b = EBG.adaptor.getElementById(this._resObjId)) && b.getBoundingClientRect ? b.getBoundingClientRect(): {
                top: 0,
                left: 0
            };
            b = a.screenY - (a.clientY - c.top);
            a = a.screenX - (a.clientX - c.left)
        } else 
            b = a.screenY - a.offsetY, a = a.screenX - a.offsetX;
        return {
            top: b,
            left: a,
            bottom: b + this.adConfig.height,
            right: a + this.adConfig.width
        }
    },
    _getViewPortRect: function() {
        var a = null, b = this._getWindowRect();
        b && (a = {
            top: 0 > b.top ? 0: b.top,
            left: 0 > b.left ? 0: b.left,
            bottom: b.bottom > this._screenResolution.height ? this._screenResolution.height: b.bottom,
            right: b.right > this._screenResolution.width ? this._screenResolution.width: b.right
        });
        return a
    },
    _getWindowRect: function() {
        var a = null, b = EBG.adaptor.getDisplayWin();
        if (this._browserStateSupported())
            var a = this._isFullScreen(b), c=!a ? 6 : 0, d = b.screenX + c, e = b.screenY + 70, a = {
            top: e,
            left: d,
            bottom: e + b.outerHeight - this._scrollWidth - (!a ? 70 : 0),
            right: d + b.outerWidth - this._scrollWidth + c
        };
        else 
            this._resolutionBaseScreenSize && (b = this._getUnsupportedWindowTopLeft(b), a = {
                top: b.top,
                left: b.left,
                bottom: b.top + this._resolutionBaseScreenSize.height,
                right: b.left + this._resolutionBaseScreenSize.width
            });
        return a
    },
    _getUnsupportedWindowTopLeft: function(a) {
        var b = {
            top: this._screenInitialPosition.top,
            left: this._screenInitialPosition.left
        }, c = 0 < a.screenLeft ? a.screenLeft: 0, d = c - this._resourceInitialPosition.left,
        e = (0 < d ? this._screenOriginalResolution.width - this._resourceInitialPosition.left%this._screenOriginalResolution.width : this._resourceInitialPosition.left%this._screenOriginalResolution.width) + 1, f = 0;
        if (Math.abs(d) > e && 0 <= c && c < this._screenResolution.width)
            f = (1 + Math.floor(Math.abs(Math.abs(d) - e) / this._screenOriginalResolution.width)) * this._screenOriginalResolution.width, b.left = 0 > d ? b.left - f : b.left + f;
        a = 0 < a.screenTop ? a.screenTop : 0;
        d = a - this._resourceInitialPosition.top;
        e = (0 < d ? this._screenOriginalResolution.height -
        this._resourceInitialPosition.top%this._screenOriginalResolution.height : this._resourceInitialPosition.top%this._screenOriginalResolution.height) + 1;
        if (Math.abs(d) > e && 0 <= a && a < this._screenResolution.height)
            f = (1 + Math.floor(Math.abs(Math.abs(d) - e) / this._screenOriginalResolution.height)) * this._screenOriginalResolution.height, b.top = 0 > d ? b.top - f : b.top + f;
        return b
    },
    _isFullScreen: function(a) {
        return !this._browserStateSupported()?!0 : a.screenX + a.outerWidth == this._screenOriginalResolution.width
    },
    _getViewPortMetrics: function() {
        var a =
        this._getViewPortRect();
        return a ? {
            Width: a.right - a.left,
            Height: a.bottom - a.top
        } : null
    },
    _isVisible: function() {
        return !!this._calculateVisibilityPercentage()
    },
    _mouseMoveEventInvoker: function() {
        if ((this._resObj = this._resObj ? this._resObj : EBG.adaptor.getElementById(this._resObjId)) && this._resObj.parentNode && this._resObj.parentNode.fireEvent) {
            var a = this;
            this._resObj.parentNode.attachEvent("onmousemove", function(b) {
                var c = a._calcResourceRect(b), d = a._getViewPortRect();
                if (!a._resourceRect)
                    a._screenInitialPosition.left =
                    Math.floor(b.screenX / a._screenOriginalResolution.width) * a._screenOriginalResolution.width, a._screenInitialPosition.top = Math.floor((50 < b.screenY ? b.screenY - 50 : 0) / a._screenOriginalResolution.height) * a._screenOriginalResolution.height;
                a._handleMultipleScreen(b);
                a._handleRecievedData(c, d)
            });
            this._intervalId = EBG.setInterval(this._resObj.parentNode, function() {
                this.fireEvent("onmousemove")
            }, [], 200)
        } else 
            EBG.runTimed(this, this._mouseMoveEventInvoker, [], 100)
    },
    _handleMultipleScreen: function(a) {
        var b = this._getWindowRect();
        if (b) {
            if (a.screenY > this._screenOriginalResolution.height) {
                var c = b.bottom > a.screenY ? b.bottom: a.screenY;
                if (this._screenResolution.height < c)
                    this._screenResolution.height = c
            }
            if (a.screenX > this._screenOriginalResolution.width && (a = b.right > a.screenX ? b.right : a.screenX, this._screenResolution.width < a))
                this._screenResolution.width = a
        }
    },
    _handleRecievedData: function(a, b) {
        if (!this._resourceRect || this._checkRectanglesDifferent(this._resourceRect, a, 1) || this._checkRectanglesDifferent(this._lastViewPort, b, 1))
            this._resourceRect =
            a, this._lastViewPort = b, this._triggerCalculation()
    },
    _checkRectanglesDifferent: function(a, b, c) {
        for (var d in a)
            if (a.hasOwnProperty(d) && Math.abs(a[d] - b[d]) > c)
                return !0;
        return !1
    },
    _subscribeToEvents: function() {
        EBG.callSuperFunction(EBG.RichModules.BasicVisibilityProvider, this, "_subscribeToEvents")
    },
    _resolutionToScreenSize: function(a) {
        var b = {
            width: a.width,
            height: a.height
        };
        1680 == a.width && 1050 == a.height ? b = {
            width: 1444,
            height: 806
        } : 1366 == a.width && 768 == a.height ? b = {
            width: 1173,
            height: 562
        } : 1360 == a.width && 768 == a.height ?
        b = {
            width: 1167,
            height: 562
        } : 1280 == a.width && 1024 == a.height ? b = {
            width: 1097,
            height: 785
        } : 1280 == a.width && 960 == a.height ? b = {
            width: 1097,
            height: 730
        } : 1152 == a.width && 864 == a.height ? b = {
            width: 985,
            height: 645
        } : 1024 == a.width && 768 == a.height ? b = {
            width: 875,
            height: 562
        } : 800 == a.width && 600 == a.height && (b = {
            width: 680,
            height: 416
        });
        return b
    },
    _triggerCalculation: function() {
        if (this._isReady || this._isStarted && this._resourceRect)
            this._isReady=!0, this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    _browserStateSupported: function() {
        return 9 <=
        EBG.adaptor.browser._browserVer && 9 <= EBG.adaptor.browser.getDocumentMode()
    },
    updateResourceObjId: function(a) {
        this._resObj = null;
        this._intervalId && EBG.clearInterval(this._intervalId);
        EBG.callSuperFunction(EBG.RichModules.MouseVisibilityProvider, this, "updateResourceObjId", [a]);
        this._mouseMoveEventInvoker()
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.MouseVisibilityProvider, this, "start");
        this._isStarted=!0;
        this._triggerCalculation()
    }
};
EBG.declareClass(EBG.RichModules.MouseVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.RichModules.GridVisibilityProvider = function(a, b) {
    EBG.callSuperConstructor(EBG.RichModules.GridVisibilityProvider, this, [a, b]);
    try {
        this._subscribeToEvents(), this._visibilityDiv = this._writeVisibilityDiv(), this._setGridCoordinates(), this._intervalHandler = EBG.setInterval(this, this._checkPercentageChanged, [], 500)
    } catch (c) {}
};
EBG.RichModules.GridVisibilityProvider._isAvailable = function() {
    var a=!1, b = EBG.adaptor.browser.getDocumentMode() || 5;
    EBG.adaptor.browser.isIE() && 10 < b && (a=!0);
    return a
};
EBG.RichModules.GridVisibilityProvider.prototype = {
    _isStarted: !1,
    _isReady: !1,
    _visibilityDiv: null,
    _intervalHandler: null,
    _grid: [],
    _gridPointsCount: 64,
    _lastCalculatedVisibility: null,
    _writeVisibilityDiv: function() {
        var a = EBG.adaptor.getPositioningById(this._resObjId, !0, this.adConfig.actualServingMode), b = EBG.adaptor.generateElementId("VisibilityDiv", this.adConfig.uid), a = {
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: b,
                style: {
                    position: "absolute",
                    width: EBG.px(this.adConfig.width),
                    height: EBG.px(this.adConfig.height),
                    top: EBG.px(a.Y),
                    left: EBG.px(a.X),
                    pointerEvents: "none"
                }
            },
            children: []
        };
        EBG.adaptor.addInlineDOM(a, this.adConfig.placeHolderId);
        return EBG.adaptor.getElementById(b)
    },
    _setGridCoordinates: function() {
        for (var a = parseInt(this._visibilityDiv.style.left, 10), b = parseInt(this._visibilityDiv.style.top, 10), c = this._gridPointsCount / 2, d = (this.adConfig.width - 1) / (c - 1), e = (this.adConfig.height - 1) / (c - 1), f = 0; f < c; f++)
            this._grid.push({
                X: Math.floor(a + d * f),
                Y: Math.floor(b + e * f)
            }), this._grid.push({
                X: Math.floor(a + d * f),
                Y: Math.floor(b +
                e * (c - 1 - f))
            })
    },
    _repositonDiv: function() {
        var a = EBG.adaptor.getPositioningById(this._resObjId, !0, this.adConfig.actualServingMode);
        this.pixelContainer.style.top = EBG.px(a.Y);
        this.pixelContainer.style.left = EBG.px(a.X)
    },
    _calculateVisibilityPercentage: function() {
        this._visibilityDiv.style.pointerEvents = "auto";
        if (!EBG.adaptor.isPageVisible())
            return 0;
        for (var a = 0, b = 0; b < this._grid.length; b++)
            this._isPointVisible(this._grid[b]) && a++;
        this._visibilityDiv.style.pointerEvents = "none";
        return 100 * (a / this._gridPointsCount)
    },
    _isPointVisible: function(a) {
        return "outside" != this._visibilityDiv.componentFromPoint(a.X, a.Y)
    },
    _checkPercentageChanged: function() {
        if (this._isStarted) {
            var a = this._calculateVisibilityPercentage();
            a != this._lastCalculatedPercentage && this._triggerCalculation();
            this._lastCalculatedPercentage = a
        }
    },
    _getViewPortMetrics: function() {
        win = EBG.adaptor.getDisplayWin();
        return win.outerWidth && win.outerWidth ? {
            Width: win.outerWidth,
            Height: win.outerHeight
        } : null
    },
    _triggerCalculation: function() {
        this._isStarted && this._dispatchCheckVisibility(this._calculateVisibilityResult())
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.GridVisibilityProvider, this, "start");
        this._isStarted=!0;
        this._triggerCalculation()
    }
};
EBG.declareClass(EBG.RichModules.GridVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);
EBG.declareNamespace("RichModules");
EBG.RichModules.VisibilityManager = function(a, b) {
    this.adConfig = a;
    this._resObjId = b;
    this.actualServingMode = this.adConfig.actualServingMode;
    this._averageLastCalcTime = (new Date).getTime();
    if (this._shouldInitialize() && (this._visibilityProvider = this._getVisibilityProvider(this._resObjId, this.adConfig)))
        if (this._initializeVisibilityData(), this._subscribeToEvents(), this._visRecordable=!0, this.adConfig.adStarted)
            this._reportVisibilityRecordable(), this._visibilityProvider.start();
        else {
            var c = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START,
            function() {
                this._reportVisibilityRecordable();
                this._visibilityProvider.start()
            }, this);
            c.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(c)
        }
};
EBG.RichModules.VisibilityManager.ThreholdType = {
    IAB: 0,
    Agency: 1,
    Advertiser: 2
};
EBG.RichModules.VisibilityManager.VisibilityPollingTimer = 1E3;
EBG.RichModules.VisibilityManager.VisibilityCheckInterval = 200;
EBG.RichModules.VisibilityManager.prototype = {
    adConfig: null,
    _resObjId: null,
    _visibilityData: null,
    _visRecordable: !1,
    _lastVisPercentage: 0,
    _lastVisViewPort: null,
    _averageVisibility: 0,
    _averageScreenShare: 0,
    _averageAdDuration: 0,
    _averageLastCalcTime: null,
    actualServingMode: EBG.Adaptors.ServingMode.SCRIPT,
    _visibilityProvider: null,
    _availableVisibilityProviders: [EBG.RichModules.GeometricVisibilityProvider, EBG.RichModules.SafeFrameVisibilityProvider, EBG.RichModules.MouseVisibilityProvider, EBG.RichModules.GridVisibilityProvider,
    EBG.RichModules.FlashVisibilityProvider, EBG.RichModules.FFVisibilityProvider],
    checkVisibility: function(a) {
        EBG.isDefined(a) || (a = {});
        if (!EBG.isDefined(a.percentage) ||!EBG.isNumber(a.percentage))
            a.percentage = this.calculateVisibilityPercentage();
        if (0 <= a.percentage) {
            if (!("viewPort"in a))
                a.viewPort = this.getViewPortMetrics();
            this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && this._calculateAverages(a);
            for (var b in EBG.RichModules.VisibilityManager.ThreholdType)
                EBG.RichModules.VisibilityManager.ThreholdType.hasOwnProperty(b) &&
                this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[b]] && this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[b]].isActive && this._execCheckVisibility(a.percentage, EBG.RichModules.VisibilityManager.ThreholdType[b])
        }
    },
    updateResourceObjId: function(a) {
        if (this._visibilityProvider && a && this._resObjId != a)
            this._resObjId = a, this._visibilityProvider.updateResourceObjId(a)
    },
    _shouldInitialize: function() {
        var a = EBG.Initializer._getAdClass({
            tn: this.adConfig.templateName
        });
        return this.adConfig.actualServingMode ==
        EBG.Adaptors.ServingMode.IFRAME&&!a.requiresIframeBust && this.adConfig.UiVz?!1 : !0
    },
    _getVisibilityProvider: function(a, b) {
        for (var c = 0; c < this._availableVisibilityProviders.length; c++)
            if (this._availableVisibilityProviders[c]._isAvailable(b))
                return new this._availableVisibilityProviders[c](a, b);
        return null
    },
    calculateVisibilityPercentage: function(a, b, c, d, e, f, g) {
        var h = 0;
        EBG.adaptor.isPageVisible() ? this._visibilityProvider && (h = this._visibilityProvider._calculateVisibilityPercentage({
            resourceObjId: a,
            width: b,
            height: c,
            offsetX: d,
            offsetY: e,
            isUIVZ: f,
            actualServingMode: g
        })) : h = 0;
        return h
    },
    isVisibile: function(a, b, c) {
        var d=!1;
        if (EBG.adaptor.isPageVisible() && this._visibilityProvider)
            try {
                d=!!this._visibilityProvider._isVisible({
                    resourceObjId: a,
                    width: b,
                    height: c
                })
        } catch (e) {}
        return d
    },
    getViewPortMetrics: function() {
        var a = null;
        this._visibilityProvider && (a = this._visibilityProvider._getViewPortMetrics());
        return a
    },
    _subscribeToEvents: function() {
        try {
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.VISIBILITY_CHECK,
            this._visibilityCheckHandler, this);
            a.dispatcherFilters = {
                "adConfig.rnd": this.adConfig.rnd
            };
            a.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(a);
            if (this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE)
                a = new EBG.Events.EventSubscription(EBG.Events.EventNames.COLLECT_TIMERS, this._collectTimersHandler, this), a.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(a);
            var b = new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_HIDDEN, this._stopTimersHandler,
            this);
            b.isDocumentEvent=!0;
            EBG.eventMgr.subscribeToEvent(b);
            b = new EBG.Events.EventSubscription(EBG.Events.EventNames.VISIBILITY_HIDDEN, this._stopTimersHandler, this);
            EBG.eventMgr.subscribeToEvent(b)
        } catch (c) {}
    },
    _visibilityCheckHandler: function(a) {
        EBG.isDefined(a) && EBG.isDefined(a.eventData) && this.checkVisibility(a.eventData)
    },
    _initializeVisibilityData: function() {
        this._visibilityData = [];
        this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType.IAB] = {
            minSurface: this.adConfig.visibility.iabMinSurface,
            minDuration: this.adConfig.visibility.iabMinDuration,
            visibilityInteraction: EBG.Interactions.SystemInts.VISIBILITY_IAB,
            durationInteraction: null,
            isActive: !0,
            durationNeeded: !1,
            timeOutFlag: null,
            reported: !1
        };
        this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType.Agency] = {
            minSurface: this.adConfig.visibility.agencyMinSurface,
            minDuration: this.adConfig.visibility.agencyMinDuration,
            visibilityInteraction: EBG.Interactions.SystemInts.VISIBILITY_AGENCY,
            durationInteraction: EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION,
            isActive: this.adConfig.visibility.mode != EBG.VisibilityMode.DEFAULT_MODE,
            durationNeeded: this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE,
            timeOutFlag: null,
            reported: !1
        };
        this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType.Advertiser] = {
            minSurface: this.adConfig.visibility.advertiserMinSurface,
            minDuration: this.adConfig.visibility.advertiserMinDuration,
            visibilityInteraction: EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER,
            durationInteraction: EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION,
            isActive: this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE,
            durationNeeded: this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE,
            timeOutFlag: null,
            reported: !1
        }
    },
    _execCheckVisibility: function(a, b) {
        try {
            if (a >= this._visibilityData[b].minSurface)
                if (!this._visibilityData[b].reported&&!this._visibilityData[b].timeOutFlag) {
                    var c = this;
                    this._visibilityData[b].timeOutFlag = EBG.runTimed(this, function() {
                        c._visibilityData[b].timeOutFlag = null;
                        EBG.intMgr.handleCounterInteraction(c._visibilityData[b].visibilityInteraction,
                        c.adConfig.uid);
                        c._visibilityData[b].durationNeeded && c._visibilityData[b].durationInteraction && (EBG.intMgr.updateTimer(c._visibilityData[b].durationInteraction, c.adConfig.uid, c._visibilityData[b].minDuration), EBG.intMgr.startTimer(c._visibilityData[b].durationInteraction, c.adConfig.uid));
                        c._visibilityData[b].reported=!0
                    }, [], 1E3 * this._visibilityData[b].minDuration)
                } else 
                    this._visibilityData[b].reported && this._visibilityData[b].durationNeeded && this._visibilityData[b].durationInteraction && EBG.intMgr.startTimer(this._visibilityData[b].durationInteraction,
                    this.adConfig.uid);
            else 
                this._stopDurationTimeout(b), this._visibilityData[b].durationInteraction && this._stopDurationCounting(b)
        } catch (d) {}
    },
    _stopDurationTimeout: function(a) {
        if (this._visibilityData[a].timeOutFlag)
            clearTimeout(this._visibilityData[a].timeOutFlag), this._visibilityData[a].timeOutFlag = null
    },
    _stopDurationCounting: function(a) {
        this._visibilityData[a].durationNeeded && this._visibilityData[a].durationInteraction && EBG.intMgr.stopTimer(this._visibilityData[a].durationInteraction, this.adConfig.uid)
    },
    _reportVisibilityRecordable: function() {
        EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, this.adConfig.uid);
        (this.adConfig.visibility.mode == EBG.VisibilityMode.BASIC_MODE || this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE) && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, this.adConfig.uid);
        this.adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE,
        this.adConfig.uid)
    },
    _collectTimersHandler: function() {
        EBG.intMgr.clearTimer(EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, this.adConfig.uid);
        EBG.intMgr.clearTimer(EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE, this.adConfig.uid);
        this._calculateAverages({
            percentage: 0,
            viewPort: this._visibilityProvider._getViewPortMetrics()
        });
        EBG.intMgr.updateTimer(EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, this.adConfig.uid, this._averageVisibility);
        EBG.intMgr.updateTimer(EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE,
        this.adConfig.uid, this._averageScreenShare)
    },
    _stopTimersHandler: function() {
        for (var a in EBG.RichModules.VisibilityManager.ThreholdType)
            EBG.RichModules.VisibilityManager.ThreholdType.hasOwnProperty(a) && this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[a]] && this._visibilityData[EBG.RichModules.VisibilityManager.ThreholdType[a]].isActive && (this._stopDurationTimeout(EBG.RichModules.VisibilityManager.ThreholdType[a]), this._stopDurationCounting(EBG.RichModules.VisibilityManager.ThreholdType[a]))
    },
    stopMeasureVisibility: function() {
        this._collectTimersHandler();
        this._stopTimersHandler()
    },
    _calculateAverages: function(a) {
        var b = (new Date).getTime() - this._averageLastCalcTime;
        if (0 < this._lastVisPercentage && 1E3 < b) {
            this._averageVisibility = (this._averageVisibility * this._averageAdDuration + this._lastVisPercentage * b) / (this._averageAdDuration + b);
            if (this._lastVisViewPort && this._lastVisViewPort.Width && this._lastVisViewPort.Height)
                this._averageScreenShare = (this._averageScreenShare * this._averageAdDuration + 100 *
                (this._lastVisPercentage * this.adConfig.width * this.adConfig.height / 100 / (this._lastVisViewPort.Width * this._lastVisViewPort.Height)) * b) / (this._averageAdDuration + b);
            this._averageAdDuration += b
        }
        this._lastVisPercentage = a.percentage;
        this._lastVisViewPort = a.viewPort;
        this._averageLastCalcTime = (new Date).getTime()
    }
};
EBG.declareClass(EBG.RichModules.VisibilityManager, null);
EBG.Interactions.DwellTimeManager = function(a) {
    this._adConfig = a;
    this._defaultPanelName = this._adConfig.panelName
};
EBG.Interactions.DwellTimeManager.prototype = {
    _state: {
        idle: 0,
        start: 1,
        stop: 2,
        panelOpenMouseOver: 3,
        videoPlay: 4,
        videoPlayMouseOut: 5,
        panelOpenMouseOut: 6,
        idlePanelOpen: 7,
        idleVideoPlay: 8
    },
    _idleTimeLimit: 700,
    _curState: 0,
    _numOfOpenPanels: 0,
    _isMouseOverAd: !1,
    _wasMouseOverAd: !1,
    _isUserInteractionOccur: !1,
    _isVideoPlay: !1,
    _isVideoAutoReplay: !1,
    _mouseTimeoutId: 0,
    _autoShownPanels: [],
    _defaultMovieNum: 1,
    _dwellUniqueNeedsToBeReported: !0,
    init: function() {
        this._subscribeToEvents()
    },
    _subscribeToAdEvent: function(a, b, c) {
        a =
        new EBG.Events.EventSubscription(a, b, this);
        if (c)
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
        EBG.eventMgr.subscribeToEvent(a)
    },
    _subscribeToEvents: function() {
        this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_OVER, this._handleMouseOverAd, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_OUT, this._handleMouseOutOfAd, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.DWELL_VIDEO_START, this._handleVideoPlay, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.DWELL_VIDEO_STOP, this._handleVideoStop,
        !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.USER_INTERACTION, this._handleUserInteraction, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.EXPAND, this._handlePanelOpen, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.COLLAPSE, this._handlePanelClose, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.FULL_SCREEN_START, this._handlePanelOpen, !0);
        this._subscribeToAdEvent(EBG.Events.EventNames.FULL_SCREEN_END, this._handlePanelClose, !0)
    },
    _handleMouseThreshold: function() {
        this._mouseTimeoutId = null;
        EBG.intMgr.updateTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid, this._idleTimeLimit / 1E3);
        switch (this._curState) {
        case this._state.idle:
            this._isMouseOverAd ? this._start() : this._stop();
            break;
        case this._state.idleVideoPlay:
            this._isMouseOverAd ? this._videoPlay() : this._videoPlayMouseOut();
            break;
        case this._state.idlePanelOpen:
            this._isMouseOverAd ? this._panelOpenMouseOver() : this._panelOpenMouseOut()
        }
    },
    _handleUserInteraction: function() {
        if (this._wasMouseOverAd)
            switch (this._isUserInteractionOccur =
            !0, this._curState) {
            case this._state.idle:
                this._start();
                break;
            case this._state.idleVideoPlay:
                this._videoPlay();
                break;
            case this._state.idlePanelOpen:
                this._panelOpenMouseOver()
            }
    },
    _handleVideoPlay: function(a) {
        a = a.eventData || this._defaultMovieNum;
        if (this._wasMouseOverAd)
            switch (this._isVideoPlay=!0, this._isUserInteractionOccur && this._reportUserInitatedVideo(this, a), this._curState) {
            case this._state.idle:
                this._idleVideoPlay();
                break;
            case this._state.idlePanelOpen:
                break;
            case this._state.idleVideoPlay:
                break;
            case this._state.start:
                this._videoPlay();
                this._reportUserInitatedVideo(this, a);
                break;
            case this._state.stop:
                this._isVideoAutoReplay || (this._videoPlayMouseOut(), this._reportUserInitatedVideo(this, a));
                break;
            case this._state.videoPlayMouseOut:
                this._stop();
                this._isVideoAutoReplay=!0;
                break;
            default:
                this._isVideoAutoReplay || this._reportUserInitatedVideo(this, a)
            }
    },
    _handleVideoStop: function() {
        this._isVideoPlay = this._isVideoAutoReplay=!1;
        switch (this._curState) {
        case this._state.videoPlay:
            this._isMouseOverAd ?
            0 < this._numOfOpenPanels ? this._panelOpenMouseOver() : this._start() : 0 < this._numOfOpenPanels ? this._panelOpenMouseOut() : this._stop();
            break;
        case this._state.videoPlayMouseOut:
            0 < this._numOfOpenPanels ? this._panelOpenMouseOut() : this._stop();
            break;
        case this._state.idleVideoPlay:
            this._idle()
        }
    },
    _handleMouseOverAd: function() {
        this._wasMouseOverAd = this._isMouseOverAd=!0;
        this._isVideoAutoReplay=!1;
        this._checkRecentAutoPanelOpen();
        switch (this._curState) {
        case this._state.idle:
        case this._state.idlePanelOpen:
        case this._state.idleVideoPlay:
            this._startMouseTimer();
            break;
        case this._state.stop:
            this._isVideoPlay ? this._videoPlay() : this._start();
            break;
        case this._state.panelOpenMouseOut:
            this._panelOpenMouseOver();
            break;
        case this._state.videoPlayMouseOut:
            this._videoPlay()
        }
    },
    _checkRecentAutoPanelOpen: function() {
        if (this._curState == this._state.idle)
            for (var a = (new Date).getTime(), b = this._autoShownPanels.length - 1; 0 <= b; b--) {
                var c = this._autoShownPanels[b];
                300 >= a - c.showtime && (this._autoShownPanels.splice(b, 1), this.handlePanelOpen(c.name))
            }
    },
    _handleMouseOutOfAd: function() {
        this._isMouseOverAd =
        !1;
        switch (this._curState) {
        case this._state.idle:
        case this._state.idleVideoPlay:
        case this._state.idlePanelOpen:
            this._clearMouseTimer();
            break;
        case this._state.start:
            this._stop();
            break;
        case this._state.videoPlay:
            this._videoPlayMouseOut();
            break;
        case this._state.panelOpenMouseOver:
            this._panelOpenMouseOut()
        }
    },
    _handlePanelOpen: function(a) {
        a = a.eventData.props.panel.name || this._defaultPanelName;
        if (this._wasMouseOverAd)
            switch (this._numOfOpenPanels++, this._curState) {
            case this._state.start:
                this._panelOpenMouseOver();
                break;
            case this._state.stop:
                this._panelOpenMouseOut();
                break;
            case this._state.idle:
                this._idlePanelOpen();
                break;
            case this._state.videoPlay:
                this._panelOpenMouseOver()
            } else 
                this._onAutoShowPanel(a)
    },
    _onAutoShowPanel: function(a) {
        this._addAutoShownPanel({
            name: a || this._defaultPanelName,
            showtime: (new Date).getTime()
        })
    },
    _addAutoShownPanel: function(a) {
        0 <= this._getAutoShownPanelIdx(a.name) || (this._autoShownPanels[this._autoShownPanels.length] = a)
    },
    _getAutoShownPanelIdx: function(a) {
        for (var a = a || this._defaultPanelName,
        b =- 1, c = 0; c < this._autoShownPanels.length; c++)
            if (this._autoShownPanels[c].name == a) {
                b = c;
                break
            }
        return b
    },
    _handlePanelClose: function(a) {
        a = this._getAutoShownPanelIdx(this, a.eventData || this._defaultPanelName);
        if (0 <= a)
            this._autoShownPanels.splice(a, 1);
        else {
            this._numOfOpenPanels--;
            if (0 > this._numOfOpenPanels)
                this._numOfOpenPanels = 0;
            if (0 == this._numOfOpenPanels)
                switch (this._curState) {
                case this._state.panelOpenMouseOver:
                    this._isVideoPlay ? this._videoPlay() : this._start();
                    break;
                case this._state.panelOpenMouseOut:
                    this._isVideoPlay ?
                    this._videoPlayMouseOut() : this._stop();
                    break;
                case this._state.idlePanelOpen:
                    this._idle()
                }
            }
    },
    _startMouseTimer: function() {
        if (!this._mouseTimeoutId) {
            var a = this;
            this._mouseTimeoutId = setTimeout(function() {
                a._handleMouseThreshold()
            }, this._idleTimeLimit)
        }
    },
    _clearMouseTimer: function() {
        clearTimeout(this._mouseTimeoutId);
        this._mouseTimeoutId = null
    },
    _isIdleMode: function() {
        return this._curState == this._state.idle || this._curState == this._state.idlePanelOpen || this._curState == this._state.idleVideoPlay
    },
    _idle: function() {
        if (this._isIdleMode())
            this._curState =
            this._state.idle
    },
    _start: function() {
        this._curState = this._state.start;
        this._startTimer()
    },
    _stop: function() {
        this._curState = this._state.stop;
        this._endTimer()
    },
    _idlePanelOpen: function() {
        if (this._isIdleMode())
            this._curState = this._state.idlePanelOpen
    },
    _panelOpenMouseOver: function() {
        this._curState = this._state.panelOpenMouseOver;
        this._startTimer()
    },
    _videoPlay: function() {
        this._curState = this._state.videoPlay;
        this._startTimer()
    },
    _videoPlayMouseOut: function() {
        this._curState = this._state.videoPlayMouseOut;
        this._startTimer()
    },
    _panelOpenMouseOut: function() {
        this._curState = this._state.panelOpenMouseOut;
        this._startTimer()
    },
    _idleVideoPlay: function() {
        if (this._isIdleMode())
            this._curState = this._state.idleVideoPlay
    },
    _reportUserInitatedVideo: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.USER_INITIATED_VIDEO);
        b.dispatcher = this;
        b.eventData = a;
        EBG.eventMgr.dispatchEvent(b)
    },
    _isTimeOverLimit: function() {
        return this._isTimerStarted() ? (this._endTimer(), EBG.intMgr.getTimerValue(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid) >
        this._idleTimeLimit / 1E3) : !1
    },
    _isTimerStarted: function() {
        return EBG.intMgr.isTimerRunning(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid)
    },
    _resetTimer: function() {
        EBG.intMgr.updateTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid, 0)
    },
    _startTimer: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.DWELL_UNIQUE);
        a.dispatcher = this;
        a.eventData = {
            firstTime: this._dwellUniqueNeedsToBeReported,
            adUId: this._adConfig.uid
        };
        EBG.eventMgr.dispatchEvent(a);
        this._dwellUniqueNeedsToBeReported =
        !1;
        EBG.intMgr.startTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid)
    },
    _endTimer: function() {
        EBG.intMgr.stopTimer(EBG.Interactions.SystemInts.DWELL_TIME, this._adConfig.uid)
    }
};
EBG.declareNamespace("Video");
EBG.Video.AssetTypeByPriority = {
    F4V: 0,
    MP4: 1,
    FLV8: 2,
    FLV7: 3,
    SWF: 4
};
EBG.Video.VideoTypes = {
    FLV8: 1,
    FLV7: 2,
    SWF: 3,
    MP4: 4,
    F4V: 5
};
EBG.Video.VideoTypesHash = {
    FLV8: "FLV8",
    FLV7: "FLV7",
    SWF: "SWF",
    MP4: "MP4",
    F4V: 5
};
EBG.Video.VideoLoaderDriver = function(a) {
    this.data = a;
    this.data.apiProxyPath = EBG.format("{0}/APIProxy", this.data.apiPath)
};
EBG.Video.VideoLoaderDriver.prototype = {
    data: {},
    load: function(a) {
        this.data.newComp = a.newComp?!0 : !1;
        EBG.mergeObj(a, this.data, !0);
        EBG.BWDetection.checked ||!EBG.BWDetection.checking ? this._loadHandler() : this._subscribeToAdEvent(EBG.Events.EventNames.BANDWITH_DETECTED, this._loadHandler)
    },
    _loadHandler: function() {
        var a = this._getBestAdditionalAsset(this.data.movieName, this.data.streaming), b = a.dsPath;
        this.data.ad._adConfig.bestAsset = {};
        this.data.ad._adConfig.bestAsset[this.data.movieName] = a;
        this.data.ad._adConfig.FSMovie =
        a;
        if (!EBG.isInWorkshop)
            if (EBG.isOfflineDemo && 0 < a.type)
                var c = b.lastIndexOf("/"), b = b.substring(c + 1);
            else 
                b = EBG.format("{0}{1}", this.data.ad._adConfig.resourcePath, b);
        c = this._checkifFSIsSupported() && a.enableFS;
        a = EBG.Video.VideoLoaderDriver.Fn.convertVideoType(a.type);
        if (a == EBG.Video.VideoTypesHash.FLV7 || a == EBG.Video.VideoTypesHash.MP4 || a == EBG.Video.VideoTypesHash.F4V)
            a = EBG.Video.VideoTypes.FLV8;
        b = EBG.format("{0}::{1}::{2}::0", b, a, c);
        b = EBG.format("ebMovie,{0};ebMovieParams,0::{1}", b, c);
        this.callAPIProxyFunc("load",
        b)
    },
    _subscribeToAdEvent: function(a, b, c) {
        a = new EBG.Events.EventSubscription(a, b, this);
        if (c)
            a.timing = c;
        EBG.eventMgr.subscribeToEvent(a)
    },
    callAPIProxyFunc: function(a, b) {
        this.data.ad._CCs[this.data.res.id].callFlashFunc(this.data.apiProxyPath, a, b)
    },
    _checkifFSIsSupported: function() {
        return 9.0115 <= EBG.adaptor.flash.version && this.data.newComp
    },
    _getBestAdditionalAsset: function(a, b) {
        var c = {
            bitRate: - 1
        }, d = EBG.BWDetection.speed;
        - 1 != d && (d = Math.round(1.1 * d));
        var e = {}, f=!1, g;
        this.data.ad._adConfig.assets[a] ? (c =
        this.data.ad._adConfig.assets[a], g = EBG.Video.VideoLoaderDriver.Fn.convertVideoType(c.type), e[a] = {}, e[a][g] = [], e[a][g].push(this.data.ad._adConfig.assets[a])) : (f=!0, e = this.data.ad._adConfig.pckAssets[a]);
        if (!e || 0 == e.length)
            return null;
        for (currentType in EBG.Video.AssetTypeByPriority) {
            var h = f ? e[currentType]: e[a][g];
            if (h) {
                var i = this._getMinSupportedPlayerVersion(EBG.Video.AssetTypeByPriority[currentType]);
                if (i = EBG.adaptor.flash.version >= i) {
                    i = this._getBestBitrateAsset(d, h, b);
                    if (0 <= i) {
                        EBG.mergeObj(h[i],
                        c, !0);
                        break
                    }( - 1 == c.bitRate || h[h.length - 1].bitRate < c.bitRate) && EBG.mergeObj(h[h.length - 1], c, !0)
                }
            }
        }
        return c
    },
    _getMinSupportedPlayerVersion: function(a) {
        switch (a) {
        case EBG.Video.AssetTypeByPriority.MP4:
        case EBG.Video.AssetTypeByPriority.F4V:
            return 9.0115;
        case EBG.Video.AssetTypeByPriority.FLV8:
            return 8;
        case EBG.Video.AssetTypeByPriority.FLV7:
            return 7
        }
        return null
    },
    _getBestBitrateAsset: function(a, b, c) {
        var d =- 1;
        if ( - 1 == a || EBG.isOfflineDemo)
            return 0 < b.length ? 0 : - 1;
        if (c)
            for (c = 0; c < b.length; c++) {
                if (b[c].bitRate <=
                a) {
                    d = c;
                    break
                }
            } else 
                for (var e =- 1, c = 0; c < b.length; c++) {
                    var f = b[c].bitRate - a;
                    0 > f && (f =- f);
                    if ( - 1 == e || f < e)
                        e = f, d = c
                }
        return d
    }
};
EBG.declareClass(EBG.Video.VideoLoaderDriver, null);
EBG.Video.VideoLoaderDriver.Fn = {
    convertVideoType: function(a) {
        var b;
        switch (a) {
        case 12:
            b = EBG.Video.VideoTypesHash.FLV7;
            break;
        case 16:
            b = EBG.Video.VideoTypesHash.MP4;
            break;
        case 25:
            b = EBG.Video.VideoTypesHash.F4V
        }
        return b
    },
    convertVideoTypesHash: function(a) {
        var b;
        switch (a) {
        case "FLV7":
        case "FLV8":
        case "F4V":
        case "MP4":
            b = 1
        }
        return b
    }
};
EBG.declareNamespace("AdChoice");
EBG.AdChoice.AdChoiceManager = function(a) {
    this._adConfig = a;
    this._active = a.adChoice.includeMarker;
    this._iconAdded=!1
};
EBG.AdChoice.AdChoiceManager.ImageData = function() {
    this.iconSrc = "";
    this.id = ""
};
EBG.AdChoice.AdChoiceManager.IabIconData = {
    en: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/uk/"
    },
    "de-at": {
        icon: "OBA_AUSTRIA.png",
        url: "http://www.youronlinechoices.com/at/"
    },
    "fr-be": {
        icon: "OBA_BELGIUM_FR.png",
        url: "http://www.youronlinechoices.com/be-fr/"
    },
    "nl-be": {
        icon: "OBA_BELGIUM_NL.png",
        url: "http://www.youronlinechoices.com/be-nl/"
    },
    bg: {
        icon: "OBA_BULGARIA.png",
        url: "http://www.youronlinechoices.com/bg/"
    },
    cs: {
        icon: "OBA_CZECH.png",
        url: "http://www.youronlinechoices.com/cs/"
    },
    da: {
        icon: "OBA_DENMARK.png",
        url: "http://www.youronlinechoices.com/den/"
    },
    fi: {
        icon: "OBA_FINLAND.png",
        url: "http://www.youronlinechoices.com/fi/"
    },
    fr: {
        icon: "OBA_FRANCE.png",
        url: "http://www.youronlinechoices.com/fr/"
    },
    de: {
        icon: "OBA_GERMANY.png",
        url: "http://www.youronlinechoices.com/de/"
    },
    el: {
        icon: "OBA_GREEK.png",
        url: "http://www.youronlinechoices.com/gr/"
    },
    hu: {
        icon: "OBA_HUNGARY.png",
        url: "http://www.youronlinechoices.com/hu/"
    },
    "en-ie": {
        icon: "OBA_IRELAND.png",
        url: "http://www.youronlinechoices.com/ie/"
    },
    it: {
        icon: "OBA_ITALY.png",
        url: "http://www.youronlinechoices.com/it/"
    },
    nl: {
        icon: "OBA_NETHERLANDS.png",
        url: "http://www.youronlinechoices.com/nl/"
    },
    no: {
        icon: "OBA_NORWAY.png",
        url: "http://www.youronlinechoices.com/nor/"
    },
    pl: {
        icon: "OBA_POLAND.png",
        url: "http://www.youronlinechoices.com/pl/"
    },
    ro: {
        icon: "OBA_ROMANIA.png",
        url: "http://www.youronlinechoices.com/ro/"
    },
    sl: {
        icon: "OBA_SLOVAKIA.png",
        url: "http://www.youronlinechoices.com/sl/"
    },
    es: {
        icon: "OBA_SPAIN.png",
        url: "http://www.youronlinechoices.com/es/"
    },
    sv: {
        icon: "OBA_SWEDEN.png",
        url: "http://www.youronlinechoices.com/se/"
    },
    "de-ch": {
        icon: "OBA_SWITZERLAND_DE.png",
        url: "http://www.youronlinechoices.com/ch-de/"
    },
    "fr-ch": {
        icon: "OBA_SWITZERLAND_FR.png",
        url: "http://www.youronlinechoices.com/ch-fr/"
    },
    "it-ch": {
        icon: "OBA_SWITZERLAND_IT.png",
        url: "http://www.youronlinechoices.com/ch-it/"
    },
    "en-gb": {
        icon: "OBA_UK.png",
        url: "http://www.youronlinechoices.com/uk/"
    },
    hr: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/hr/"
    },
    is: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/is/"
    },
    lt: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/lt/"
    },
    lv: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/lv/"
    },
    pt: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/pt/"
    },
    sk: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.youronlinechoices.com/sk/"
    }
};
EBG.AdChoice.AdChoiceManager.NaiIconData = {
    en: {
        icon: "OBA_DEFAULT.png",
        url: "http://www.aboutads.info/consumers"
    }
};
EBG.AdChoice.AdChoiceManager.IabClosedIconName = "OBA.png";
EBG.AdChoice.AdChoiceManager.NaiClosedIconName = "OBA.png";
EBG.AdChoice.AdChoiceManager.VisibilityState = {
    HIDDEN: "hidden",
    VISIBLE: "visible"
};
EBG.AdChoice.AdChoiceManager.Position = {
    ABSOLUTE: "absolute",
    RELATIVE: "relative"
};
EBG.AdChoice.AdChoiceManager.ImageLoadTimeout = 100;
EBG.AdChoice.AdChoiceManager.DefaultOffset =- 1E3;
EBG.AdChoice.AdChoiceManager.prototype = {
    _imgData: null,
    _imgExpData: null,
    _iconLocalData: null,
    _acCloseIconName: null,
    _spanId: null,
    _iconsBaseUrl: null,
    _containerId: null,
    _assetObjId: null,
    init: function() {
        if (this._active) {
            this._iconsBaseUrl = this._getIconsDir(this._adConfig.adChoice.iconPosition);
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_CREATIVES, this._handleAdChoice, this);
            a.timing = EBG.Events.EventTiming.AFTER;
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this._handleAdChoice, this);
            a.timing = EBG.Events.EventTiming.AFTER;
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(a);
            a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ADD_BANNER_DEFAULT_FLASH_CREATIVE, this._handleAdChoice, this);
            a.timing = EBG.Events.EventTiming.AFTER;
            a.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
            EBG.eventMgr.subscribeToEvent(a);
            EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_RESIZE,
            this._pageResizeHandler, this));
            this._adConfig.adChoice.certificationProgram == EBG.AcCertProgram.NAI_US ? (this._iconLocalData = this._getIconDataByLanguage(EBG.AdChoice.AdChoiceManager.NaiIconData), this._acCloseIconName = EBG.AdChoice.AdChoiceManager.NaiClosedIconName) : (this._iconLocalData = this._getIconDataByLanguage(EBG.AdChoice.AdChoiceManager.IabIconData), this._acCloseIconName = EBG.AdChoice.AdChoiceManager.IabClosedIconName)
        }
    },
    _handleAdChoice: function(a) {
        if (a.eventData&&!a.eventData.isPanel)
            this._assetObjId =
            a.eventData.assetId;
        if (this._iconAdded) {
            var a = EBG.adaptor.getElementById(this._containerId), b = EBG.adaptor.getElementById(this._spanId);
            EBG.adaptor.removeElement(b);
            EBG.adaptor.appendChildElement(a.id, b)
        } else 
            this._iconAdded=!0, this._containerId = this._adConfig.placeHolderId, this._imgData = this._getImageData(), this._imgExpData = this._getExpImageData(), this._addAdChoiceIcons(this._imgData, this._imgExpData, this._getAdChoiceUrl()), this._subscribeIconToEvents(this._imgData.id, this._imgExpData.id)
    },
    _getImageData: function() {
        var a =
        new EBG.AdChoice.AdChoiceManager.ImageData;
        a.iconSrc = this._iconsBaseUrl + this._acCloseIconName;
        a.id = "acImage_" + this._adConfig.uid;
        return a
    },
    _getExpImageData: function() {
        var a = new EBG.AdChoice.AdChoiceManager.ImageData;
        a.iconSrc = this._iconsBaseUrl + this._iconLocalData.icon;
        a.id = "acExpImage_" + this._adConfig.uid;
        return a
    },
    _getAdChoiceUrl: function() {
        var a = "";
        return a = this._adConfig.adChoice.customUrl ? unescape(this._adConfig.adChoice.customUrl) : this._iconLocalData.url
    },
    _getIconDataByLanguage: function(a) {
        var b =
        EBG.adaptor.getBrowserLanguage().toLowerCase(), c = a[b];
        c || (b = b.split("-")[0], c = a[b]);
        c || (c = a.en);
        return c
    },
    _getIconOffsets: function(a, b, c, d, e, f) {
        var g = {
            offsetLeft: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset),
            offsetTop: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset)
        };
        if (this._assetObjId && (adPos = EBG.adaptor.getPositioningById(this._assetObjId, !0, this._adConfig.actualServingMode))) {
            acPos = EBG.adaptor.getPositioningById(a, !0, this._adConfig.actualServingMode);
            var h = EBG.adaptor.getStyleOfElem(EBG.adaptor.getElementById(a)),
            a = parseInt(h.left) + adPos.X - acPos.X, h = parseInt(h.top) + adPos.Y - acPos.Y;
            switch (b) {
            case EBG.AcIconPosition.BottomLeft:
                g.offsetLeft = EBG.px(a);
                g.offsetTop = EBG.px(h + f - d);
                break;
            case EBG.AcIconPosition.BottomRight:
                g.offsetLeft = EBG.px(a + e - c);
                g.offsetTop = EBG.px(h + f - d);
                break;
            case EBG.AcIconPosition.TopLeft:
                g.offsetLeft = EBG.px(a);
                g.offsetTop = EBG.px(h);
                break;
            case EBG.AcIconPosition.TopRight:
                g.offsetLeft = EBG.px(a + e - c), g.offsetTop = EBG.px(h)
            }
        }
        return g
    },
    _getIconsDir: function(a) {
        var b = this._adConfig.imagesDir + "/AdChoice/";
        switch (a) {
        case EBG.AcIconPosition.BottomLeft:
            b += "BottomLeft/";
            break;
        case EBG.AcIconPosition.BottomRight:
            b += "BottomRight/";
            break;
        case EBG.AcIconPosition.TopLeft:
            b += "TopLeft/";
            break;
        case EBG.AcIconPosition.TopRight:
            b += "TopRight/"
        }
        return b
    },
    _addAdChoiceIcons: function(a, b, c) {
        var d = "acImgLinkWrapper_" + this._adConfig.uid;
        this._spanId = "acSpan_" + this._adConfig.uid;
        var e = EBG.adaptor.getElementById(this._containerId);
        if (e && (c = {
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: this._spanId,
                style: {
                    position: EBG.AdChoice.AdChoiceManager.Position.ABSOLUTE,
                    zIndex: EBG.adaptor.getMaxZIndex(e) + 1
                }
            },
            children: [{
                tagName: EBG.Adaptors.TagNames.A,
                attributes: {
                    id: d,
                    target: "_blank",
                    href: c,
                    mmskipreplace: 1
                },
                children: null
            }
            ]
        }, this._containerId == this._adConfig.placeHolderId ? EBG.adaptor.inject(c, EBG.Adaptors.InjectionMethod.APPEND, e) : EBG.adaptor.inject(c, EBG.Adaptors.InjectionMethod.INSERT_BEFORE, e), d = EBG.adaptor.getElementById(d))) {
            e = {
                tagName: EBG.Adaptors.TagNames.IMG,
                attributes: {
                    id: a.id,
                    style: {
                        position: EBG.AdChoice.AdChoiceManager.Position.ABSOLUTE,
                        visibility: EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE,
                        left: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset),
                        top: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset)
                    }
                },
                children: null
            };
            EBG.adaptor.inject(e, EBG.Adaptors.InjectionMethod.APPEND, d);
            e = {
                tagName: EBG.Adaptors.TagNames.IMG,
                attributes: {
                    id: b.id,
                    style: {
                        position: EBG.AdChoice.AdChoiceManager.Position.ABSOLUTE,
                        visibility: EBG.AdChoice.AdChoiceManager.VisibilityState.HIDDEN,
                        left: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset),
                        top: EBG.px(EBG.AdChoice.AdChoiceManager.DefaultOffset)
                    }
                },
                children: null
            };
            EBG.adaptor.inject(e,
            EBG.Adaptors.InjectionMethod.APPEND, d);
            var d = EBG.adaptor.getElementById(a.id), e = EBG.adaptor.getElementById(b.id), f = this, g = function() {
                EBG.runTimed(f, f._handleImgOnloadEvent, [a.id, 0], EBG.AdChoice.AdChoiceManager.ImageLoadTimeout)
            }, c = function() {
                EBG.runTimed(f, f._handleImgOnloadEvent, [b.id, 0], EBG.AdChoice.AdChoiceManager.ImageLoadTimeout)
            };
            if (d)
                g = new EBG.Events.EventSubscription("load", g, this), g.isElementEvent=!0, g.elementId = a.id, EBG.eventMgr.subscribeToEvent(g), d.src = a.iconSrc;
            if (e)
                g = new EBG.Events.EventSubscription("load",
                c, this), g.isElementEvent=!0, g.elementId = b.id, EBG.eventMgr.subscribeToEvent(g), e.src = b.iconSrc
        }
    },
    _subscribeIconToEvents: function(a, b) {
        var c = this, d = function() {
            c._handleMouseOverEvent(a, b)
        }, e = new EBG.Events.EventSubscription("mouseover", d, this);
        e.isElementEvent=!0;
        e.elementId = a;
        EBG.eventMgr.subscribeToEvent(e);
        e = new EBG.Events.EventSubscription("mouseout", d, this);
        e.isElementEvent=!0;
        e.elementId = b;
        EBG.eventMgr.subscribeToEvent(e)
    },
    _handleMouseOverEvent: function(a, b) {
        var c = EBG.adaptor.getElementById(a),
        d = EBG.adaptor.getElementById(b), e = EBG.adaptor.getStyleOfElem(c), f = EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE, g = EBG.AdChoice.AdChoiceManager.VisibilityState.HIDDEN;
        if (e.visibility == EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE)
            f = EBG.AdChoice.AdChoiceManager.VisibilityState.HIDDEN, g = EBG.AdChoice.AdChoiceManager.VisibilityState.VISIBLE;
        e = {
            visibility: g
        };
        EBG.adaptor.setStyleToElem(c, {
            visibility: f
        });
        EBG.adaptor.setStyleToElem(d, e)
    },
    _pageResizeHandler: function() {
        this._handleImgOnloadEvent(this._imgData.id);
        this._handleImgOnloadEvent(this._imgExpData.id)
    },
    _handleImgOnloadEvent: function(a, b) {
        var c = EBG.adaptor.getElementById(a);
        imgPos = this._getIconOffsets(a, this._adConfig.adChoice.iconPosition, c.width, c.height, this._adConfig.width, this._adConfig.height);
        EBGInfra.isDefinedNotNull(b) && 10 > b ? EBG.runTimed(this, this._rehandleImgOnloadEvent, [a, b], EBG.AdChoice.AdChoiceManager.ImageLoadTimeout) : EBG.adaptor.setStyleToElem(c, {
            left: imgPos.offsetLeft,
            top: imgPos.offsetTop
        })
    },
    _rehandleImgOnloadEvent: function(a, b) {
        this._handleImgOnloadEvent(a,
        b + 1)
    }
};
EBG.declareNamespace("Ads");
EBG.Ads.Ad = function(a) {
    this._adConfig = a;
    this._adConfig.isStdAd = this._isStdAd();
    this._fixPage();
    this._updateURLs();
    EBG.ads[a.uid] = this;
    this._show()
};
EBG.Ads.Ad.prototype = {
    resizePlaceHolder: !0,
    _adConfig: null,
    _adChoice: null,
    _showOnlyDefaultImg: !1,
    _isStdAd: function() {
        return !0
    },
    _counterInteractionHandler: function(a) {
        try {
            var b = a.eventData.intName;
            if (!b)
                b = EBG.Interactions.SystemInts.CLICK;
            a.eventData.clickUrl = this._replaceURLTokens(a.eventData.clickUrl);
            a.eventData.clickedVerUrl = this._replaceURLTokens(a.eventData.clickedVerUrl);
            EBG.intMgr.handleCounterInteraction(b, this._adConfig.uid, 0, null, a.eventData, "undefined" != typeof a.eventData.handleClickInt ?
            a.eventData.handleClickInt : !0)
        } catch (c) {}
    },
    _versionTrackingImpressionHandler: function(a) {
        try {
            a.eventData.impTrackingUrls && this._reportImpressionTrackingURLs(a.eventData.impTrackingUrls)
        } catch (b) {}
    },
    _reportImpressionTrackingURLs: function(a) {
        if (!EBG.isPreview)
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c && (c = this._replaceURLTokens(c), EBG.adaptor.reportToRemoteServerUsingImage(c))
            }
    },
    _show: function() {
        var a=!this._canShow() || this._adConfig.showOnlyImage || this._adConfig.showAieDefaultImage;
        this._adConfig.defaultImageDisplayed =
        !(!a ||!this._adConfig.defaultImagePath);
        var b = this._adConfig.showOnlyImage, c = new EBG.Events.Event(EBG.Events.EventNames.SHOW_AD);
        c.dispatcher = this;
        c.timing = EBG.Events.EventTiming.BEFORE;
        c.eventData = {
            isDefaultImage: this._adConfig.defaultImageDisplayed
        };
        EBG.eventMgr.dispatchEvent(c);
        b !== this._adConfig.showOnlyImage && (a=!this._canShow() || this._adConfig.showOnlyImage || this._adConfig.showAieDefaultImage);
        this._subscribeToEvents();
        EBG.intMgr.initAdData(this._adConfig, this._adConfig.reportDelayedImpression ?
        !0 : !1);
        this._addSystemInteractions();
        this._verifyPlaceHolder();
        this._adChoice = new EBG.AdChoice.AdChoiceManager(this._adConfig);
        this._adChoice.init();
        (b = EBG.adaptor.getElementById(this._adConfig.placeHolderId)) && this.resizePlaceHolder && "undefined" != typeof this._adConfig.display && EBG.adaptor.setElemStyle(b, "display", this._adConfig.display);
        if (a)
            if (this._adConfig.defaultImagePath) {
                if (!this._adConfig.imageOnly)
                    a = new EBG.Events.Event(EBG.Events.EventNames.DEFAULT_IMPRESSION), a.eventData = {
                        impTrackingUrls: this._adConfig.defaultImpTrackingUrls
                    },
                    a.dispatcher = this, a.timing = EBG.Events.EventTiming.ONTIME, EBG.eventMgr.dispatchEvent(a);
                    this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this._terminateShow, EBG.Events.EventTiming.AFTER);
                    this._showOnlyDefaultImg=!0;
                    this.checkAndShowDefaultImage(this.showDefaultImage)
            } else 
                this._reportImpression(!0);
            else 
                this._showOnlyDefaultImg=!1, this._addVideoInteractions(), this._addCustomInteractions(), this._addCreatives(), this._terminateShow()
    },
    _terminateShow: function(a) {
        var b = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
        b && this.resizePlaceHolder && (EBG.adaptor.setElemStyle(b, "width", EBG.px(this._adConfig.width)), EBG.adaptor.setElemStyle(b, "height", EBG.px(this._adConfig.height)), EBG.adaptor.setElemStyle(b, "margin", "0px auto"));
        b = new EBG.Events.Event(EBG.Events.EventNames.SHOW_AD);
        b.dispatcher = this;
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        b.eventData = {
            isDefaultImage: a?!0: !1
        };
        EBG.eventMgr.dispatchEvent(b)
    },
    _verifyPlaceHolder: function() {
        !EBG.adaptor.getElementById(this._adConfig.placeHolderId)&&!document.body &&
        document.write('<img style="width:0;height:0"></img>');
        return EBG.adaptor.getElementById(this._adConfig.placeHolderId)
    },
    _canShow: function() {
        return !0
    },
    _onPlayHandler: function() {
        this._adConfig.arrOnPlayEvents && this._executeEvents(this._adConfig.arrOnPlayEvents)
    },
    _onDownloadHandler: function() {
        this._adConfig.arrOnStartDnlEvents && this._executeEvents(this._adConfig.arrOnStartDnlEvents)
    },
    _collectUrl: function() {
        if (!EBG.isPreview && this._adConfig.shouldCollectUrl)
            try {
                EBG.adaptor.reportToRemoteServer(EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=curl&ai={2}&url=$${3}$$",
                EBG.protocol, EBG.bs, this._adConfig.adId, top.document.URL))
        } catch (a) {}
    },
    _executeEvents: function(a) {
        for (var b = 0; b < a.length; b++) {
            var c, d = this._replaceURLTokens(a[b].url);
            switch (a[b].typeId) {
            case 3:
                c = "ebPlayScript" + b;
                EBG.adaptor.writeScript(EBG.adaptor.generateElementId(c, this._adConfig.uid), d, this._adConfig.placeHolderId);
                break;
            case 5:
                c = "ebDnlScript" + b;
                EBG.adaptor.writeScript(EBG.adaptor.generateElementId(c, this._adConfig.uid), d, this._adConfig.placeHolderId);
                break;
            case 4:
                c = "ebPlayIFR" + b;
                EBG.adaptor.writeReportingIFrame(EBG.adaptor.generateElementId(c,
                this._adConfig.uid), d, this._adConfig.placeHolderId);
                break;
            case 6:
                c = "ebDnlIFR" + b, EBG.adaptor.writeReportingIFrame(EBG.adaptor.generateElementId(c, this._adConfig.uid), d, this._adConfig.placeHolderId)
            }
        }
    },
    _addSystemInteractions: function() {
        try {
            var a = this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK];
            if (a) {
                var b = EBG.Interactions.Categories.SYSTEM;
                this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK] = EBG.cloneObj(a);
                this._addCounterInteraction(EBG.Interactions.SystemInts.CLICK,
                b);
                this._addCounterInteraction(EBG.Interactions.SystemInts.DEFAULT_CLICK, b)
            }
            this._addCounterInteraction(EBG.Interactions.SystemInts.AD_START, b, !1, 1)
        } catch (c) {}
    },
    _addCounterInteraction: function(a, b, c) {
        var d = this._adConfig.interactions[a], b = new EBG.Interactions.CounterInteractionData(a, b, this._adConfig.uid);
        b.initiationType = d.nInitiated ? EBG.Interactions.InitiationTypes.USER : EBG.Interactions.InitiationTypes.AUTO;
        b.countAsClick = d.fClick;
        if (d.agencyURL)
            b.remoteServers.agencyUrl = d.agencyURL;
        if (d.networkURL)
            b.remoteServers.networkUrl =
            d.networkURL;
        this._adjustClickTarget(a);
        b.counterJumpUrlData = d;
        b.reportImmediately = c?!0 : !1;
        a = new EBG.Interactions.CounterInteraction(b);
        EBG.intMgr.addInteraction(a)
    },
    _addVideoInteractions: function() {},
    _addCustomInteractions: function() {},
    _adjustClickTarget: function(a) {
        var a = this._adConfig.interactions[a], b;
        switch (a.target) {
        case 0:
            b = EBG.WindowTarget.SELF;
            break;
        case 2:
            b = EBG.WindowTarget.TOP;
            break;
        default:
            b = EBG.WindowTarget.BLANK
        }
        a.target = b
    },
    _subscribeToEvents: function() {
        this._adConfig.interactionsToReport &&
        this._subscribeToAdEvent(EBG.Events.EventNames.ADD_INTERACTION, this._handleInteractionsSubscription, EBG.Events.EventTiming.BEFORE);
        this._subscribeToAdEvent(EBG.EBMessage.CLICKTHROUGH, this._counterInteractionHandler);
        this._subscribeToAdEvent(EBG.EBMessage.VERSION_TRACKING_IMPRESSION, this._versionTrackingImpressionHandler);
        this._subscribeToAdEvent(EBG.Events.EventNames.DEFAULT_IMPRESSION, this._versionTrackingImpressionHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.DEFAULT_CLICK,
        this._counterInteractionHandler);
        this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this._onAddCreativesHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._onDownloadHandler, EBG.Events.EventTiming.ONTIME);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._onPlayHandler, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this._collectUrl, EBG.Events.EventTiming.AFTER);
        this._subscribeToAdEvent(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR,
        this._notifyInteractionManager);
        var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.ELEMENT_LOADED, function(a) {
            a.eventData.adUId == this._adConfig.uid && this._triggerAdStart()
        }, this);
        a.timing = EBG.Events.EventTiming.ONTIME;
        EBG.eventMgr.subscribeToEvent(a)
    },
    _handleInteractionsSubscription: function(a) {
        try {
            var b = a.eventData.interactionData.reportingName;
            return this._adConfig.interactionsToReport && this._adConfig.interactionsToReport[b]?!0 : !1
        } catch (c) {}
    },
    _onAddCreativesHandler: function(a) {
        try {
            if (!EBG.Initializer._getAdClass({
                tn: this._adConfig.templateName
            }).requiresIframeBust ||
            this._adConfig.actualServingMode == EBG.Adaptors.ServingMode.SCRIPT) {
                var b = a.dispatcher._adConfig.placeHolderId;
                if (b) {
                    var c = EBG.adaptor.getDisplayWin().document.getElementById(b);
                    if (c)
                        c.style.backgroundImage = "", c.onclick = function() {}
                }
            }
        } catch (d) {}
    },
    _onAdCreativesAdded: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.AD_CREATIVES_ADDED);
        a.dispatcher = this;
        EBG.eventMgr.dispatchEvent(a)
    },
    _fixPage: function() {
        var a = this._adConfig.page, a = a.replace(/\~/ig, "_"), a = a.replace(/\^/ig, "_"), a = a.replace(/\|/ig,
        "_"), a = escape(a);
        this._adConfig.page = a
    },
    _updateURLs: function() {
        for (var a = this._adConfig.clickTrackingUrls, b = 0; b < a.length; b++)
            a[b] = this._replaceURLTokens(a[b]);
        var a = this._adConfig.interactions, c;
        for (c in a)
            if (a.hasOwnProperty(c))
                a[c].agencyURL = this._replaceURLTokens(a[c].agencyURL), a[c].networkURL = this._replaceURLTokens(a[c].networkURL), a[c].jumpUrl = this._replaceURLTokens(a[c].jumpUrl)
    },
    getAdId: function() {
        return this._adConfig.adId
    },
    _replaceURLTokens: function(a) {
        var b = this._adConfig;
        try {
            a && (a = a.replace(/\[%random%\]/ig,
            b.rnd), a = a.replace(/\[ebRandom\]/ig, b.rnd), a = a.replace(/\[timestamp\]/ig, b.rnd), a = a.replace(/\[%tp_adid%\]/ig, b.adId), a = a.replace(/\[%tp_flightid%\]/ig, b.placementId), a = a.replace(/\[%tp_campaignid%\]/ig, b.campaignId));
            if (!a ||!b.sUrlTokens)
                return a;
            if (!EBG.isObj(b.objURLTokens))
                b.oURLTokens = this._pairsToObj(b.sUrlTokens, "$$");
            for (var c in b.oURLTokens)
                b.oURLTokens.hasOwnProperty(c) && (a = a.replace(RegExp("\\[%" + c + "%\\]", "ig"), b.oURLTokens[c]))
        } catch (d) {}
        return a
    },
    _pairsToObj: function(a, b) {
        for (var c =
        {}, d = unescape(a).split(b), e = 0; e < d.length; e++)
            try {
                if (d[e]) {
                    var f = d[e].indexOf("="), g = d[e].substr(0, f), h = d[e].substr(f + 1);
                    c[g] = escape(h)
                }
            } catch (i) {}
        return c
    },
    _subscribeToAdEvent: function(a, b, c) {
        a = new EBG.Events.EventSubscription(a, b, this);
        a.dispatcherFilters = {
            "_adConfig.rnd": this._adConfig.rnd
        };
        if (c)
            a.timing = c;
        EBG.eventMgr.subscribeToEvent(a)
    },
    _getCDIUrl: function(a) {
        var a = EBG.format("{0}{1}/BurstingPipe/adServer.bs?cn=cdi&ai={2}&p={3}&pluid={4}&ru={5}&pc={6}&brt={7}&pltype={8}&ord={9}", EBG.protocol,
        EBG.bs, this._adConfig.adId, this._adConfig.page, this._adConfig.pluId, EBG.isDefinedNotNull(a) && "" != a ? a : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath), this._adConfig.sPublisherPlacementId, EBG.adaptor.browser._browserCode, EBG.adaptor.browser._platform, this._adConfig.rnd), b = this._adConfig.massVersioning.targetAudienceId;
        b && (a += EBG.format("&ta={0}", b));
        (b = this._adConfig.massVersioning.deliveryGroupId) && (a += EBG.format("&dg={0}", b));
        this._adConfig.massVersioning.adVersions &&
        (b = this._removePrefixFromVersions(), a += EBG.format("&vid={0}", b));
        return a
    },
    _removePrefixFromVersions: function() {
        var a = "", b = this._adConfig.massVersioning.adVersions;
        if (b) {
            for (var a = [], b = b.split(","), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("_");
                a.push( - 1 == d ? b[c] : b[c].substring(0, d))
            }
            a = a.join()
        }
        return a
    },
    buildJSONImgObj: function(a, b) {
        var c = EBG.format(a + "_{0}", this._adConfig.uid);
        return {
            tagName: EBG.Adaptors.TagNames.IMG,
            attributes: {
                id: c,
                src: b,
                width: this._adConfig.width,
                height: this._adConfig.height,
                style: {
                    width: this._adConfig.width,
                    height: this._adConfig.height
                },
                title: this._adConfig.title ? this._adConfig.title: "",
                onload: EBG.format('(function(e) { var event = new EBG.Events.Event(EBG.Events.EventNames.ELEMENT_LOADED);event.dispatcher = this;event.eventData = { DOMEvent: e, elementId: "{0}", adUId:"{1}" };event.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;EBG.eventMgr.dispatchEvent(event);} )(typeof arguments != "undefined" ? arguments[0] : null);', c, this._adConfig.uid)
            }
        }
    },
    setImageClick: function(a, b, c, d) {
        a.attributes.onclick =
        EBG.format('EBG.ads["' + this._adConfig.uid + '"].onImageClick("{0}", {1},"{2}", "{3}", "{4}")', this._adConfig.uid, b, a.attributes.id, c, d);
        EBG.mergeObj({
            cursor: "pointer; cursor: hand"
        }, a.attributes.style)
    },
    _addDefaultImgRequest: function() {
        this.checkAndShowDefaultImage(this.showDefaultImage)
    },
    checkAndShowDefaultImage: function(a) {
        var b = "", c = ".xml", d=!0;
        if (EBG.isDefinedNotNull(this._adConfig.svJSON) || EBG.isDefinedNotNull(this._adConfig.sv3CatalogMap))
            c = ".json", d=!1;
        if (EBG.isDefinedNotNull(this._adConfig.massVersioning) &&
        "" != this._adConfig.massVersioning.defaultAdVersion && "" != this._adConfig.massVersioning.adBasePath)
            b = this._adConfig.massVersioning.defaultAdVersion, b = 0 < this._adConfig.massVersioning.massVersionFolderDivider ? EBG.Ads.Ad.Fn.fixMVPathString(b, this._adConfig.massVersioning.massVersionFolderDivider) : b, b = EBG.combinePaths(this._adConfig.massVersioning.adBasePath, b + c), b = EBG.combinePaths(this._adConfig.resourcePath, b);
        c = d ? this._readMassVersionInfo : this._readJsonVersionInfo;
        (!b ||!EBG.adaptor.getDataFromRemoteServer(b,
        c, this, !0, d)) && a.apply(this)
    },
    showDefaultImage: function(a) {
        var b=!this._adConfig.imageOnly, c = "";
        this._adConfig.showOnlyImage || this._adConfig.imageOnly || this._adConfig.reportDelayedImpression ? c = a && a.isValid ? a.defaultImagePath : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.defaultImagePath) : (c = a && a.isValid ? this._getCDIUrl(a.defaultImagePath) : this._getCDIUrl(), this._adConfig.massVersioning.adVersions = "");
        var c = this.buildJSONImgObj("ebDefaultImg", c), d = a && a.isValid ? a.jumpUrl: b ? this._adConfig.interactions[EBG.Interactions.SystemInts.DEFAULT_CLICK].jumpUrl:
        this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK].jumpUrl;
        d && this.setImageClick(c, b, d, a && a.isValid ? a.selectedVersion : "");
        a = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
        a.dispatcher = this;
        a.eventData = {
            tagsObj: c,
            assetId: c.attributes.id,
            isPanel: !1,
            creativeType: EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE
        };
        a.timing = EBG.Events.EventTiming.BEFORE;
        d = EBG.eventMgr.dispatchEvent(a);
        if (!d && (b = new EBG.Events.Event(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE), b.eventData =
        {
            assetId: c.attributes.id
        }, b.dispatcher = this, b.timing = EBG.Events.EventTiming.BEFORE, d = EBG.eventMgr.dispatchEvent(b), !d))
            c = EBG.adaptor._getTags(c), d = EBG.adaptor.getElementById(this._adConfig.placeHolderId), EBG.adaptor.setInnerHtml(d, c), b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(b), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
    },
    _triggerAdStart: function() {
        if (!this._adConfig.adStarted) {
            this._adConfig.adStarted=!0;
            var a = new EBG.Events.Event(EBG.Events.EventNames.AD_START);
            a.eventData = {
                intName: EBG.Interactions.SystemInts.Ad_START
            };
            a.dispatcher = this;
            a.timing = EBG.Events.EventTiming.BEFORE;
            if (!EBG.eventMgr.dispatchEvent(a))(this._adConfig.visibility.mode == EBG.VisibilityMode.BASIC_MODE || this._adConfig.visibility.mode == EBG.VisibilityMode.ENHANCED_MODE) && EBG.intMgr.handleCounterInteraction(EBG.Interactions.SystemInts.AD_START, this._adConfig.uid), a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER, EBG.eventMgr.dispatchEvent(a)
            }
    }, _readJsonVersionInfo: function(a) {
        var b = JSON.parse(a),
        a = this._adConfig.massVersioning.defaultAdVersion.indexOf("_"), a = {
            isValid: !!b.DefaultImage,
            jumpUrl: b.ClickthroughURL ? b.ClickthroughURL: "",
            defaultImagePath: b.DefaultImage ? b.DefaultImage: "",
            selectedVersion: - 1 == a ? this._adConfig.massVersioning.defaultAdVersion: this._adConfig.massVersioning.defaultAdVersion.substring(0, a)
        };
        if (a.isValid && EBG.isNumber(b.DefaultImage)) {
            a.isValid=!1;
            var b = this._adConfig.assets, c = "ebMovie" + a.defaultImagePath;
            if (EBG.isDefinedNotNull(b[c].dsPath))
                a.defaultImagePath = EBG.isInWorkshop ?
                b[c].dsPath : EBG.combinePaths(this._adConfig.resourcePath, b[c].dsPath), a.isValid=!0
        }
        this.showDefaultImage(a)
    }, _readMassVersionInfo: function(a) {
        var b = {
            isValid: !1,
            jumpUrl: "",
            defaultImagePath: "",
            selectedVersion: ""
        };
        try {
            if (EBG.isDefined(a) && null != a) {
                var c = a.documentElement.attributes.getNamedItem("productClickThrough"), d = a.documentElement.attributes.getNamedItem("DefaultImage"), e = this._adConfig.massVersioning.defaultAdVersion.indexOf("_"), b = {
                    isValid: null != d && "" != d.value,
                    jumpUrl: null != c ? c.value: "",
                    defaultImagePath: null !=
                    d ? d.value: "",
                    selectedVersion: - 1 == e ? this._adConfig.massVersioning.defaultAdVersion: this._adConfig.massVersioning.defaultAdVersion.substring(0, e)
                };
                if (b.isValid && EBG.isNumber(b.defaultImagePath)) {
                    b.isValid=!1;
                    var f = this._adConfig.assets, g = "ebMovie" + b.defaultImagePath;
                    if (EBG.isDefinedNotNull(f[g].dsPath))
                        b.defaultImagePath = EBG.isInWorkshop ? f[g].dsPath : EBG.combinePaths(this._adConfig.resourcePath, f[g].dsPath), b.isValid=!0
                }
            }(this._showOnlyDefaultImg ? this.showDefaultImage : this._showImgAsCreative).apply(this,
            [b])
        } catch (h) {
            this.showDefaultImage(b)
        }
    }, dispatchCustomEvent: function(a, b, c, d) {
        a = new EBG.Events.Event(a);
        a.dispatcher = d;
        a.eventData = {
            assetId: b
        };
        a.timing = c;
        return EBG.eventMgr.dispatchEvent(a)
    }, _notifyInteractionManager: function(a) {
        var b = {};
        if (a && a.eventData)
            b = a.eventData;
        b.elapsedTime = "";
        if (EBG.intMgr.getAdDuration)
            b.elapsedTime = EBG.intMgr.getAdDuration(this._adConfig.uid);
        EBG.adaptor.notifyIntMonitor(a.eventData)
    }, onImageClick: function(a, b, c, d, e) {
        try {
            var f = b ? new EBG.Events.Event(EBG.Events.EventNames.DEFAULT_CLICK):
            new EBG.Events.Event(EBG.EBMessage.CLICKTHROUGH);
            f.eventData = b ? {
                intName: EBG.Interactions.SystemInts.DEFAULT_CLICK
            } : {
                intName: EBG.Interactions.SystemInts.CLICK
            };
            if (EBG.isDefined(d))
                f.eventData.clickUrl = d;
            if (EBG.isDefined(e))
                f.eventData.clickedVersion = e;
            f.dispatcher = EBG.ads[a];
            EBG.eventMgr.dispatchEvent(f);
            if (EBG.adaptor.intMonitorExist()) {
                var g = new EBG.Events.Event(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR);
                g.eventData = {
                    command: EBG.EBMessage.CLICKTHROUGH,
                    args: "",
                    objName: c,
                    adId: EBG.Ads.Ad.Fn.getAdIdFromAdUId(a)
                };
                EBG.eventMgr.dispatchEvent(g)
            }
        } catch (h) {}
    }
};
EBG.declareClass(EBG.Ads.Ad,
null);
EBG.Ads.Ad.Fn = {
    getAdIdFromAdUId: function(a) {
        return a.split("_")[0]
    }, getRandFromAdUId : function(a) {
        return a.split("_")[1]
    }, getVersionToReport: function(a) {
        return - 1 < a.indexOf(",") ? "m" : - 1 < a.indexOf("_") ? a.substr(0, a.indexOf("_")) : a
    }, getAdVersions: function(a) {
        for (var b = "", a = a.adVersions.split(","), c = 0; c < a.length; c++)
            b && (b += ","), b += a[c];
        return b
    }, fixMVPathString: function(a, b) {
        if (0 < b)
            for (var c = a.split(","), d = "", e = "", f, g, h, i = 0; i < c.length; i++)
                h = c[i], f = "", EBG.isDefinedNotNull(h.match("_")) && (f = h.substr(h.indexOf("_"))),
                h = parseInt(h), g = parseInt(h / b), h = g + f + "/" + h, d += e + h, "" == e && (e = ",");
        return d
    }, _handlePageResizeOrScroll: function() {}
};
EBG.Ads.RichAd = function(a) {
    EBG.callSuperConstructor(EBG.Ads.RichAd, this, [a])
};
EBG.Ads.RichAd.prototype = {
    isInFullScreenMode: !1,
    visibilityMgr: null,
    videoLoaderDrivers: [],
    _wallpaper: null,
    _registeredToMouseMove: !1,
    _mouseMoveTimeOut: null,
    _creativeContainerReadyHandled: !1,
    _isStdAd: function() {
        return !1
    },
    _subscribeToEvents: function() {
        try {
            EBG.callSuperFunction(EBG.Ads.RichAd, this, "_subscribeToEvents"), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_INTERACTION, this._videoInteractionHandler), this._subscribeToAdEvent(EBG.EBMessage.USER_ACTION_COUNTER, this._counterInteractionHandler), this._subscribeToAdEvent(EBG.EBMessage.AUTOMATIC_EVENT_COUNTER,
            this._counterInteractionHandler), this._subscribeToAdEvent(EBG.EBMessage.START_TIMER, this._startTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.STOP_TIMER, this._stopTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.START_VIDEO_TIMER, this._startTimerVideoHandler), this._subscribeToAdEvent(EBG.EBMessage.STOP_VIDEO_TIMER, this._stopTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.UPDATE_TIMER, this._updateTimerHandler), this._subscribeToAdEvent(EBG.EBMessage.START_VIDEO, this._startAggregateHandler),
            this._subscribeToAdEvent(EBG.EBMessage.STOP_VIDEO, this._stopAggregateHandler), this._subscribeToAdEvent(EBG.EBMessage.UPDATE_VIDEO_DURATION, this._updateAggregationTimeHandler), this._subscribeToAdEvent(EBG.EBMessage.INIT_VIDEO_LOADER, this._initVideoLoaderHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_LOAD, this._videoLoadHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_FS_OPEN, this._videoFSOpenHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_FS_CLOSE, this._videoFSCloseHandler), this._subscribeToAdEvent(EBG.EBMessage.VIDEO_FS_AUTO_CLOSE,
            this._videoFSAutocloseHandler), this._subscribeToAdEvent(EBG.EBMessage.SET_STATE, this._setStateInCreativeState), this._subscribeToAdEvent(EBG.EBMessage.RESET_STATE, this._setStateInCreativeState), this._subscribeToAdEvent(EBG.Events.EventNames.MOUSE_MOVE_NEEDED, this._mouseMoveNeededHandler, EBG.Events.EventTiming.BEFORE), this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_AD, this.adCreativesAddedHandler, EBG.Events.EventTiming.AFTER), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this.addCreativesHandler,
            EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this.addCreativesHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.DWELL_UNIQUE, this._dwellUniqueEventHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.RICH_FLASH_PLAYED, this._richFlashPlayedEventHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.EBMessage.SHOW_DEFAULT_IMAGE, this._addDefaultImgRequest),
            this._subscribeToAdEvent(EBG.Events.EventNames.CREATIVE_CONTAINER_READY, this._handleDelayedImpressionReport, EBG.Events.EventTiming.AFTER), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, this._handleDelayedImpressionReport, EBG.Events.EventTiming.AFTER), this._dwellTimeManager = new EBG.Interactions.DwellTimeManager(this._adConfig), this._dwellTimeManager.init(), this._adConfig.bgImgSrc && (this._subscribeToAdEvent(EBG.Events.EventNames.CLOSE_AD, this._removeBackgroundImage),
            this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_UNLOAD, this._removeBackgroundImage))
        } catch (a) {}
    },
    _handleDelayedImpressionReport: function() {
        if (!this._creativeContainerReadyHandled && this._adConfig.reportDelayedImpression)
            this._creativeContainerReadyHandled=!0, this._adConfig.delayedImpParams && (this._reportImpression(), this._clearDelayedImpData()), (this._adConfig.impressionTrackingURLs || 0 < this._adConfig.impressionTrackingURLs) && this._reportImpressionTrackingURLs(this._adConfig.impressionTrackingURLs),
            EBG.intMgr.allowInteractionReport(this._adConfig.uid)
    },
    _clearDelayedImpData: function() {
        this._adConfig.delayedImpParams = null
    },
    _reportImpression: function(a) {
        var b = EBGInfra.isDefined(this._adConfig.page) && "" != this._adConfig.page ? 1: 0, b = EBG.format("{0}{1}/{2}/adServer.bs?cn=display&code=10&PluID={3}&EyeblasterID={4}&Page={5}&WebPageSource={6}&ForceDisplay={7}&Resolution={8}&sessionid={9}&Optout={10}", EBG.protocol, EBG.bs, this._adConfig.appPool, this._adConfig.pluId, this._adConfig.adId, this._adConfig.page,
        b, EBG.isPreview ? 1 : 0, EBG.adaptor.getResolution(), this._adConfig.sID, this._isOptOut());
        this._adConfig.delayedImpParams && (b += this._adConfig.delayedImpParams);
        a && (b += "&isBlank=1");
        EBG.adaptor.flash && (b += "&FlashVersion=" + EBG.adaptor.flash.version);
        this._adConfig.massVersioning.targetAudienceId && (b += "&ta=" + this._adConfig.massVersioning.targetAudienceId);
        this._adConfig.massVersioning.deliveryGroupId && (b += "&dg=" + this._adConfig.massVersioning.deliveryGroupId);
        this._adConfig.massVersioning.subDeliveryGroupId &&
        (b += "&sdg=" + this._adConfig.massVersioning.subDeliveryGroupId);
        this._adConfig.defaultImageDisplayed && (b += "&di=1");
        this._adConfig.defaultImageReason && (b += "&dir=" + this._adConfig.defaultImageReason);
        this._adConfig.massVersioning.adVersions && (b += "&vid=" + this._removePrefixFromVersions());
        b += "&ord=" + Math.random();
        EBG.adaptor.reportToRemoteServerUsingImage(b)
    },
    _mouseMoveNeededHandler: function() {
        if (!this._registeredToMouseMove) {
            var a = new EBG.Events.EventSubscription(EBG.Events.EventNames.MOUSE_MOVE, this._mouseMoveHandler,
            this);
            a.isDocumentEvent=!0;
            EBG.eventMgr.subscribeToEvent(a);
            this._registeredToMouseMove=!0
        }
    },
    _mouseMoveHandler: function(a) {
        try {
            if (!this._mouseMoveTimeOut) {
                var b = this;
                b._mouseMoveTimeOut = setTimeout(function() {
                    b._mouseMoveTimeOut = null;
                    for (var c in b._CCs)
                        if (b._CCs.hasOwnProperty(c) && b._CCs[c]._registeredToMouseMove) {
                            var e = {}, e = EBG.adaptor.getMouseCoordinates(a.eventData);
                            b._CCs[c]._handleMouseMove(e)
                        }
                }, 100)
            }
        } catch (c) {}
    },
    _dwellUniqueEventHandler: function(a) {
        EBG.intMgr.reportDwellUnique(this._adConfig.uid,
        a.eventData.firstTime)
    },
    _richFlashPlayedEventHandler: function() {
        EBG.intMgr.reportRichFlashPlayed(this._adConfig.uid)
    },
    addCreativesHandler: function(a) {
        try {
            if (this._adConfig.bgImgSrc && this._changeBackgroundImage(), !a.eventData.isPanel)
                this.visibilityMgr ? this.visibilityMgr.updateResourceObjId(a.eventData.assetId) : this.visibilityMgr = new EBG.RichModules.VisibilityManager(this._adConfig, a.eventData.assetId)
        } catch (b) {}
    },
    adCreativesAddedHandler: function() {
        try {
            this._startTimer(EBG.Interactions.SystemInts.AD_DURATION)
        } catch (a) {}
    },
    getAdLocationOnPage: function() {
        var a = this.getAdOffset();
        if (null == a)
            return a;
        var b = EBG.adaptor.getWindowViewPortMetrics(EBG.adaptor.getDisplayWin());
        return {
            isAdOnLeft: a.X + this._adConfig.width / 2 < b.Width / 2,
            isAdOnTop: a.Y + this._adConfig.height / 2 < b.Height / 2
        }
    },
    getAdOffset: function() {
        return null
    },
    getVideoLoaderDriver: function(a, b) {
        for (var b = b.replace(/\./ig, "/"), c = 0; c < this.videoLoaderDrivers.length; c++) {
            var d = this.videoLoaderDrivers[c];
            if (d.data.res.id == a && d.data.apiPath == b)
                return this.videoLoaderDrivers[c]
        }
        return null
    },
    _initVideoLoaderHandler: function(a) {
        a.eventData.apiPath = a.eventData.apiPath.replace(/\./ig, "/");
        a.eventData.res = EBG.adaptor.getElementById(a.flashResId);
        a.eventData.ad = this;
        this.videoLoaderDrivers.push(new EBG.Video.VideoLoaderDriver(a.eventData))
    },
    _videoLoadHandler: function(a) {
        a.eventData.apiPath = a.eventData.apiPath.replace(/\./ig, "/");
        this.getVideoLoaderDriver(a.flashResId, a.eventData.apiPath).load(a.eventData)
    },
    _startAggregateHandler: function(a) {
        try {
            EBG.intMgr.isInteractionExist(EBG.VideoInteraction.FULLSCREEN_DURATION.toLowerCase(),
            EBG.Interactions.InteractionTypes.TIMER, this._adConfig.uid) || (this._addAggregateInteraction(EBG.VideoInteraction.FULLSCREEN_DURATION, EBG.Interactions.Categories.VIDEO), this._addAggregateInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, EBG.Interactions.Categories.VIDEO));
            var b = a.eventData.intName, c = this._getAssetIdFromEvent(a);
            EBG.intMgr.startAggregate(b, this._adConfig.uid, c)
        } catch (d) {}
    },
    _updateAggregationTimeHandler: function(a) {
        try {
            var b = a.eventData.intName, c = parseInt(a.eventData.deltalDuration),
            d = this._getAssetIdFromEvent(a);
            EBG.intMgr.updateAggregation(b, this._adConfig.uid, c, d)
        } catch (e) {}
    },
    _stopAggregateHandler: function(a) {
        try {
            var b = a.eventData.intName, c = this._getAssetIdFromEvent(a);
            EBG.intMgr.stopAggregate(b, this._adConfig.uid, c)
        } catch (d) {}
    },
    _startTimerVideoHandler: function(a) {
        try {
            EBG.intMgr.isInteractionExist(EBG.VideoInteraction.FULLSCREEN_DURATION.toLowerCase(), EBG.Interactions.InteractionTypes.TIMER, this._adConfig.uid) || (this._addTimerInteraction(EBG.VideoInteraction.FULLSCREEN_DURATION,
            EBG.Interactions.Categories.VIDEO), this._addTimerInteraction(EBG.VideoInteraction.VIDEO_PLAY_DURATION, EBG.Interactions.Categories.VIDEO))
        } catch (b) {}
        this._startTimerHandler(a)
    },
    _startTimerHandler: function(a) {
        try {
            var b = a.eventData.intName, c = this._getAssetIdFromEvent(a);
            this._startTimer(b, c)
        } catch (d) {}
    },
    _stopTimerHandler: function(a) {
        try {
            var b = a.eventData.intName, c = this._getAssetIdFromEvent(a);
            this._stopTimer(b, c)
        } catch (d) {}
    },
    _getAssetIdFromEvent: function(a) {
        var b = EBGInfra.isDefined(a.eventData.assetId) ?
        a.eventData.assetId: null;
        if ((!EBGInfra.isDefined(b) ||!EBGInfra.notNull(b)) && a.eventData.ebmovie)
            if (b = 0, "0" != a.eventData.ebmovie) {
                a = EBG.format("ebMovie{0}", a.eventData.ebmovie);
                if (this._adConfig.assets && this._adConfig.assets[a])
                    b = this._adConfig.assets[a].assetID;
                    if (this._adConfig.bestAsset && this._adConfig.bestAsset[a])
                        b = this._adConfig.bestAsset[a].assetID
            }
        return b
    },
    _updateTimerHandler: function(a) {
        try {
            var b = a.eventData.intName, c = a.eventData.timerValue;
            if ("ebintduration" == b)
                b = EBG.Interactions.SystemInts.INT_DURATION,
                c/=1E3;
            this._updateTimer(b, c)
        } catch (d) {}
    },
    _startTimer: function(a, b) {
        EBG.intMgr.startTimer(a, this._adConfig.uid, b)
    },
    _stopTimer: function(a, b) {
        EBG.intMgr.stopTimer(a, this._adConfig.uid, b)
    },
    _updateTimer: function(a, b) {
        EBG.intMgr.updateTimer(a, this._adConfig.uid, b)
    },
    _videoInteractionHandler: function(a) {
        try {
            var b = a.eventData, c = this._getAssetIdFromEvent(a);
            EBG.intMgr.handleVideoInteraction(b.intName, this._adConfig.uid, c, b.userInitiated ? b.userInitiated : !1)
        } catch (d) {}
    },
    _videoFSOpenHandler: function(a) {
        this.isInFullScreenMode =
        !0;
        a = {
            eventData: {
                assetId: this._adConfig.FSMovie.assetID,
                userInitiated: !0,
                intName: "ebFSStart"
            }
        };
        this._videoInteractionHandler(a);
        a = new EBG.Events.Event(EBG.Events.EventNames.FULL_SCREEN_START);
        a.dispatcher = this;
        a.eventData = "FullScreen";
        EBG.eventMgr.dispatchEvent(a)
    },
    _videoFSCloseHandler: function() {
        this.isInFullScreenMode=!1;
        var a = {
            eventData: {
                assetId: this._adConfig.FSMovie.assetID,
                userInitiated: !0,
                intName: "ebFSEnd"
            }
        };
        a.eventData.assetId = this._adConfig.FSMovie.assetID;
        this._videoInteractionHandler(a);
        a = new EBG.Events.Event(EBG.Events.EventNames.FULL_SCREEN_END);
        a.dispatcher = this;
        a.eventData = "FullScreen";
        EBG.eventMgr.dispatchEvent(a)
    },
    _videoFSAutocloseHandler: function() {},
    _addSystemInteractions: function() {
        EBG.callSuperFunction(EBG.Ads.RichAd, this, "_addSystemInteractions");
        try {
            var a = EBG.Interactions.Categories.SYSTEM;
            this._addTimerInteraction(EBG.Interactions.SystemInts.INT_DURATION, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.AD_DURATION, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.DWELL_TIME,
            a);
            this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, a, !1, 1);
            this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, a, !1, 1);
            this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE, a, !1, 1);
            this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER, a, !1, 1);
            this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY, a, !1, 1);
            this._addCounterInteraction(EBG.Interactions.SystemInts.VISIBILITY_IAB,
            a, !1, 1);
            this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, a);
            this._addTimerInteraction(EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE, a)
        } catch (b) {}
    },
    _addCounterInteraction: function(a, b, c, d, e, f) {
        var g = this._adConfig.interactions[EBG.isDefinedNotNull(f) ? f: a], h = new EBG.Interactions.CounterInteractionData(a,
        b, this._adConfig.uid);
        if (e)
            h.isPanel=!0;
        g ? EBG.callSuperFunction(EBG.Ads.RichAd, this, "_addCounterInteraction", [a, b, c]) : (h.initiationType = EBG.Interactions.InitiationTypes.AUTO, h.numLeftToReport = d ? d : h.numLeftToReport, h.reportImmediately = c?!0 : !1, a = new EBG.Interactions.CounterInteraction(h), EBG.intMgr.addInteraction(a, f))
    },
    _addTimerInteraction: function(a, b, c) {
        a = new EBG.Interactions.TimerInteractionData(a, b, this._adConfig.uid);
        if (c)
            a.isPanel = c;
        c = new EBG.Interactions.TimerInteraction(a);
        EBG.intMgr.addInteraction(c)
    },
    _addAggregateInteraction: function(a, b, c) {
        a = new EBG.Interactions.AggregationInteractionData(a, b, this._adConfig.uid);
        if (c)
            a.isPanel = c;
        c = new EBG.Interactions.AggregateInteraction(a);
        EBG.intMgr.addInteraction(c)
    },
    _addVideoInteractions: function() {
        try {
            this._addVideoInteraction(EBG.VideoInteraction.STARTED), this._addVideoInteraction(EBG.VideoInteraction.PERCENT_25_PLAYED), this._addVideoInteraction(EBG.VideoInteraction.PERCENT_50_PLAYED), this._addVideoInteraction(EBG.VideoInteraction.PERCENT_75_PLAYED), this._addVideoInteraction(EBG.VideoInteraction.FULLPLAY),
            this._addVideoInteraction(EBG.VideoInteraction.MUTE, !0), this._addVideoInteraction(EBG.VideoInteraction.UNMUTE, !0), this._addVideoInteraction(EBG.VideoInteraction.UNMUTED), this._addVideoInteraction(EBG.VideoInteraction.PAUSE, !0), this._addVideoInteraction(EBG.VideoInteraction.REPLAY, !0), this._addVideoInteraction(EBG.VideoInteraction.SLIDER_DRAGGED, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_START, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_END, !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_MUTE,
            !0), this._addVideoInteraction(EBG.VideoInteraction.FULLSCREEN_PAUSE, !0), this._addVideoInteraction(EBG.VideoInteraction.USER_INITIATED_VIDEO, !1, 1)
        } catch (a) {}
    },
    _addVideoInteraction: function(a, b, c) {
        a = new EBG.Interactions.CounterInteractionData(a, EBG.Interactions.Categories.VIDEO, this._adConfig.uid);
        a.initiationType = b ? EBG.Interactions.InitiationTypes.USER : EBG.Interactions.InitiationTypes.AUTO;
        if (c)
            a.numLeftToReport = c;
        b = new EBG.Interactions.CounterInteraction(a);
        EBG.intMgr.addInteraction(b)
    },
    _addCustomInteractions: function() {
        try {
            var a =
            this._adConfig.interactions, b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = EBG.intMgr.adsData[this._adConfig.uid];
                    switch (a[b].type) {
                    case 0:
                        c.Counter.hasOwnProperty(b) || b !== EBG.Interactions.SystemInts.CLICK && b !== EBG.Interactions.SystemInts.DEFAULT_CLICK && this._addCounterInteraction(b, EBG.Interactions.Categories.CUSTOM);
                        break;
                    case 1:
                        c.Timer.hasOwnProperty(b) || this._addTimerInteraction(b, EBG.Interactions.Categories.CUSTOM)
                    }
                }
            } catch (d) {}
    },
    _isOptOut: function() {
        return EBG.isGlobalDef("gEbFOptOut") && gEbFOptOut ||
        this._adConfig.optOut
    },
    subscribeToStandardElementEvents: function(a) {
        var b = new EBG.Events.EventSubscription("mouseover", this._handleMouseEvent, this);
        b.isElementEvent=!0;
        b.elementId = a;
        EBG.eventMgr.subscribeToEvent(b);
        b = new EBG.Events.EventSubscription("mouseout", this._handleMouseEvent, this);
        b.isElementEvent=!0;
        b.elementId = a;
        EBG.eventMgr.subscribeToEvent(b)
    },
    _handleMouseEvent: function(a) {
        var b = a.currentTarget ? a.currentTarget: a.srcElement, c = "", d = b.id, e = d.lastIndexOf("_") + 1, f = "", f = b.id.split("_"), g = f.length,
        f = f[g - 2] + "_" + f[g - 1], f = EBGInfra.isDefined(f) ? f: "";
        e && (c = d.substring(e));
        d = "mouseover" == a.type ? new EBG.Events.Event(EBG.Events.EventNames.MOUSE_OVER) : new EBG.Events.Event(EBG.Events.EventNames.MOUSE_OUT);
        if (!("mouseout" == a.type && EBGInfra.isDefined(EBG.ads[f]) && EBG.ads[f].isInFullScreenMode))
            d.dispatcher = {
                _adConfig: {
                    rnd: c
                }
            }, d.eventData = {
                target: b
            }, EBG.eventMgr.dispatchEvent(d)
    },
    _verifyPlaceHolder: function() {
        EBG.callSuperFunction(EBG.Ads.RichAd, this, "_verifyPlaceHolder") || EBG.adaptor.addPlaceHolder({
            tagName: EBG.Adaptors.TagNames.DIV,
            attributes: {
                id: this._adConfig.placeHolderId,
                dir: "ltr"
            },
            children: null
        })
    },
    _changeBackgroundImage: function() {
        this._wallpaper = new EBG.Adaptors.Wallpaper;
        var a = new EBG.Adaptors.Wallpaper.BgData;
        a.imgSrc = EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.bgImgSrc);
        a.tiling = this._adConfig.bgRepeat;
        a.scrolling = this._adConfig.bgIgnoreScrolling;
        a.positionX = this._adConfig.bgPosX;
        a.positionY = this._adConfig.bgPosY;
        this._wallpaper.SetBackgroundImage(a)
    },
    _removeBackgroundImage: function() {
        this._wallpaper &&
        this._wallpaper.RemoveBackgroundImage()
    },
    _setStateInCreativeState: function(a) {
        this._isOptOut() || (a = EBG.format("{0}{1}/{2}/adServer.bs?cn=SetState&CampaignID={3}&StateValue={4}&ord={5}", EBG.protocol, EBG.bs, this._adConfig.appPool, this._adConfig.campaignId, a.eventData.stateValue ? a.eventData.stateValue : "", EBG.getRandomNumber()), EBG.adaptor.reportToRemoteServer(a, !0, !0))
    }
};
EBG.declareClass(EBG.Ads.RichAd, EBG.Ads.Ad);
EBG.Ads.RichBanner = function(a) {
    this._defaultResId = EBG.adaptor.generateElementId("DefaultBannerAsset", a.uid);
    this._richFlashBannerResId = EBG.adaptor.generateElementId("RichBannerFlash", a.uid);
    this._gotRich=!!a.richFlashPath;
    this._waitForLoadRichEvent = "1" == a.playOnCommand;
    this._preloader = "1" == a.preloader;
    this._downloadMode = a.dlm;
    EBG.callSuperConstructor(EBG.Ads.RichBanner, this, [a])
};
EBG.Ads.RichBanner.requiresIframeBust=!1;
EBG.Ads.RichBanner.prototype = {
    _richLoaded: !1,
    _richShown: !1,
    _CCs: {},
    _flashPageLoadedHandlerName: "",
    _shouldLoadDefault: !1,
    _shouldLoadRich: !1,
    _assetProperties: [],
    _banner: {
        divId: "",
        resId: "",
        width: 0,
        height: 0
    },
    _defaultImgResId: null,
    _preloadImgResId: null,
    _canShow: function() {
        var a=!1;
        this._adConfig.defaultFlashPath || this._adConfig.richFlashPath ? EBG.adaptor.flash.version >= this._adConfig.minimalflashVer && (a=!0) : this._adConfig.imageOnly=!0;
        return a
    },
    _subscribeToEvents: function() {
        try {
            EBG.callSuperFunction(EBG.Ads.RichBanner,
            this, "_subscribeToEvents"), EBG.adaptor.isPageLoaded() ? EBG.runTimed(this, this._handlePageLoaded, [], 0) : this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_LOAD, this._handlePageLoaded), this._subscribeToAdEvent(EBG.FS.EB_LOAD_RICH_BANNER, this.loadRich), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_BANNER_PRELOAD_IMAGE_CREATIVE, this.addCreativesHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.SHOW_BANNER_RICH_FLASH_CREATIVE, this.addCreativesHandler, EBG.Events.EventTiming.ONTIME),
            this._subscribeToAdEvent(EBG.FS.EB_SHOW_RICH_BANNER, this.loadAndShowRich), this._subscribeToAdEvent(EBG.Events.EventNames.CREATIVE_CONTAINER_READY, this._handleCreativeContainerReady), this._subscribeToAdEvent(EBG.FS.EB_PAGE_LOAD, this.handlePageLoadFSCommand), this._subscribeToAdEvent(EBG.FS.EB_SET_JS_VAR, this._handleEBSetJSVarFSCommand), this._subscribeToAdEvent(EBG.Events.EventNames.REPLAY_AD, this._replayAdEventHandler, EBG.Events.EventTiming.ONTIME)
        } catch (a) {}
    },
    _handleEBSetJSVarFSCommand: function(a) {
        if (a.eventData &&
        a.eventData && a.eventData.varName && EBG.hasValue(a.eventData.varValue)) {
            var b = a.eventData.varName, c = a.eventData.varValue, a = a.eventData.isString ? a.eventData.isString: null;
            this._adConfig && (this._adConfig[b] = a ? c : eval(c))
        }
    },
    callFlashPageLoaded: function() {
        "" != this._flashPageLoadedHandlerName && this._CCs[this._defaultResId].call(this._flashPageLoadedHandlerName, EBG.Events.EventNames.PAGE_LOAD)
    },
    handlePageLoadFSCommand: function(a) {
        if (a.flashResId == this._defaultResId)
            this._flashPageLoadedHandlerName = a.eventData.handlerName,
            EBG.adaptor.isPageLoaded() ? this.callFlashPageLoaded() : EBG.adaptor.isPageLoaded() ? EBG.runTimed(this, this.callFlashPageLoaded, [], 0) : this._subscribeToAdEvent(EBG.Events.EventNames.PAGE_LOAD, this.callFlashPageLoaded)
    },
    loadRich: function() {
        if (!this._richLoaded && this._gotRich) {
            this._richLoaded=!0;
            var a = this._richShown=!this._shouldLoadDefault;
            this._assetProperties[this._richFlashBannerResId] = {
                divId: "RichFlashBannerDiv",
                resId: this._richFlashBannerResId,
                cc: this._CCs[this._richFlashBannerResId],
                resPath: this._adConfig.richFlashPath,
                width: a ? this._adConfig.width: "0",
                fullWidth: this._adConfig.richFlashWidth,
                height: a ? this._adConfig.height: "0",
                fullHeight: this._adConfig.richFlashHeight,
                play: a ? "true": "false",
                wmode: this._adConfig.wmode ? this._adConfig.wmode: "opaque",
                creativeType: EBG.Events.EventNames.ADD_BANNER_RICH_FLASH_CREATIVE,
                weight: this._adConfig.richFlashWeight,
                parentNodeId: this._adConfig.placeHolderId,
                unique: 0
            };
            this._banner.divId = this._writeCreativeElements(this._assetProperties[this._richFlashBannerResId]);
            if (this._richShown)
                this._banner.resId =
                this._richFlashBannerResId;
            this._CCs[this._richFlashBannerResId].isReady()
        }
    },
    _handlePageLoaded: function() {
        !this._waitForLoadRichEvent&&!this._adConfig.showOnlyImage&&!this._adConfig.imageOnly&&!this._adConfig.defaultImageDisplayed && this.loadRich()
    },
    _handleCreativeContainerReady: function(a) {
        !this._waitForLoadRichEvent && a.eventData == this._richFlashBannerResId && this.showRich()
    },
    showRich: function() {
        if (!this._richShown && this._gotRich) {
            this._richShown=!0;
            var a = new EBG.Events.Event(EBG.Events.EventNames.SHOW_BANNER_RICH_FLASH_CREATIVE);
            a.dispatcher = this;
            a.timing = EBG.Events.EventTiming.BEFORE;
            if (!EBG.eventMgr.dispatchEvent(a))
                this._adConfig.preloadImagePath && "" != this._adConfig.preloadImagePath ? this._subscribeToAdEvent(EBG.Events.EventNames.FLASH_IN_FRAME_TWO, this.toggleFlashContainerEventHandler) : this._adConfig.defaultFlashPath && "" != this._adConfig.defaultFlashPath ? this._CCs[this._defaultResId].removeAsset(!0, !0) : null != this._defaultImgResId && EBG.adaptor.removeElement(this._defaultImgResId), this._adConfig.preloadImagePath && "" != this._adConfig.preloadImagePath ?
                (this._subscribeToAdEvent(EBG.Events.EventNames.RICH_FLASH_PLAYED, this._ccSecondFrameEventHandler, EBG.Events.EventTiming.ONTIME), this._subscribeToAdEvent(EBG.Events.EventNames.ADD_CREATIVES, this._ccSecondFrameEventHandler, EBG.Events.EventTiming.BEFORE)) : this._CCs[this._richFlashBannerResId].resize(this._adConfig.width, this._adConfig.height), this._banner.resId = this._richFlashBannerResId, this._CCs[this._richFlashBannerResId].play(), a.eventData = {
                    assetId: this._richFlashBannerResId
                }, a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER,
                EBG.eventMgr.dispatchEvent(a), a = new EBG.Events.Event(EBG.Events.EventNames.RICH_FLASH_PLAYED), a.dispatcher = this, a.flashResId = this._richFlashBannerResId, a.eventData = {
                    adUId: this._adConfig.uid
                }, EBG.eventMgr.dispatchEvent(a)
        }
    },
    loadAndShowRich: function() {
        this._richLoaded ? this.showRich() : (this._waitForLoadRichEvent=!1, this.loadRich())
    },
    toggleFlashContainerEventHandler: function() {
        if (this._adConfig.preloadImagePath && "" != this._adConfig.preloadImagePath) {
            var a = this._preloadImgResId, b = EBG.adaptor.getElementById(a);
            EBG.adaptor.setElemStyle(b, "height", EBG.px(0));
            EBG.adaptor.setElemStyle(b, "width", EBG.px(0));
            this._CCs[this._richFlashBannerResId].resize(this._adConfig.width, this._adConfig.height);
            EBG.runTimed(EBG.adaptor, EBG.adaptor.removeElement, [a], 200)
        }
    },
    _writeCreativeElements: function(a) {
        var b = EBG.adaptor.generateElementId(a.divId + "_" + a.unique, this._adConfig.uid);
        try {
            var c = {
                tagName: EBG.Adaptors.TagNames.DIV,
                attributes: {
                    id: b,
                    dir: "ltr",
                    style: {}
                },
                children: a.cc ? a.cc.buildCreativeContainerJson({
                    resPath: a.resPath,
                    resId: a.resId,
                    width: a.width,
                    height: a.height,
                    play: a.play,
                    wmode: a.wmode,
                    weight: a.weight,
                    unique: a.unique
                }): null
            };
            a.resId == this._richFlashBannerResId && c.children.push({
                tagName: EBG.Adaptors.TagNames.DIV,
                attributes: {
                    id: "emptyDiv" + b
                }
            });
            if ("undefined" != typeof this._adConfig.display)
                c.attributes.style.display = this._adConfig.display;
            var d = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
            d.dispatcher = this;
            d.eventData = {
                tagsObj: c,
                assetId: c.children[0].attributes.id,
                isPanel: !1,
                creativeType: a.creativeType
            };
            d.timing = EBG.Events.EventTiming.BEFORE;
            if (EBG.eventMgr.dispatchEvent(d))
                return b;
            EBG.adaptor.addInlineDOM(c, a.parentNodeId);
            a.cc.checkPlaying();
            d.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.dispatchEvent(d);
            this.subscribeToStandardElementEvents(b);
            d.timing = EBG.Events.EventTiming.AFTER;
            EBG.eventMgr.dispatchEvent(d)
        } catch (e) {}
        return b
    },
    _addImgAsCreative: function(a, b, c, d) {
        b = d && d.isValid ? d.defaultImagePath : EBG.combinePaths(this._adConfig.resourcePath, b);
        a = this.buildJSONImgObj(a, b);
        (b = d && d.isValid ?
        d.jumpUrl : this._adConfig.interactions[EBG.Interactions.SystemInts.CLICK].jumpUrl) && this.setImageClick(a, !1, b, d && d.isValid ? d.selectedVersion : "");
        b = new EBG.Events.Event(EBG.Events.EventNames.ADD_CREATIVES);
        b.dispatcher = this;
        b.eventData = {
            tagsObj: a,
            assetId: a.attributes.id,
            isPanel: !1,
            creativeType: c
        };
        b.timing = EBG.Events.EventTiming.BEFORE;
        var e = EBG.eventMgr.dispatchEvent(b);
        if (e || (e = this.dispatchCustomEvent(c, a.attributes.id, EBG.Events.EventTiming.BEFORE, this)))
            return a.attributes.id;
        var e = EBG.adaptor._getTags(a),
        f = EBG.adaptor.getElementById(this._adConfig.placeHolderId);
        if (this._richShown)
            return null;
        var g = EBG.adaptor.getElementById("emptyDiv" + this._banner.divId);
        d && g ? EBG.adaptor.setInnerHtml(g, e) : EBG.adaptor.setInnerHtml(f, e);
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(b);
        this.dispatchCustomEvent(c, a.attributes.id, EBG.Events.EventTiming.ONTIME_AND_AFTER, this);
        return a.attributes.id
    },
    _addDefaultImgBeforeFlash: function() {
        this.checkAndShowDefaultImage(this._showImgAsCreative)
    },
    _showImgAsCreative: function(a) {
        if (!this._richShown)
            this._defaultImgResId = this._addImgAsCreative("ebDefaultImg", this._adConfig.defaultImagePath, EBG.Events.EventNames.ADD_BANNER_DEFAULT_IMAGE_CREATIVE, a)
    },
    _addPreloadImg: function() {
        this._preloadImgResId = this._addImgAsCreative("ebPreloadImg", this._adConfig.preloadImagePath, EBG.Events.EventNames.ADD_BANNER_PRELOAD_IMAGE_CREATIVE)
    },
    _addBannerContainer: function() {
        this._CCs[this._defaultResId] = new EBG.RichFlashCC(this._adConfig);
        this._assetProperties[this._defaultResId] =
        {
            divId: "DefaultBannerDiv",
            resId: this._defaultResId,
            cc: this._CCs[this._defaultResId],
            resPath: this._adConfig.defaultFlashPath,
            width: this._adConfig.width,
            fullWidth: this._adConfig.width,
            height: this._adConfig.height,
            fullHeight: this._adConfig.height,
            play: "true",
            wmode: this._adConfig.wmode ? this._adConfig.wmode: "opaque",
            creativeType: EBG.Events.EventNames.ADD_BANNER_DEFAULT_FLASH_CREATIVE,
            weight: 100,
            parentNodeId: this._adConfig.placeHolderId,
            unique: 0
        };
        this._banner.divId = this._writeCreativeElements(this._assetProperties[this._defaultResId]);
        this._banner.resId = this._defaultResId;
        this._banner.width = this._adConfig.width;
        this._banner.height = this._adConfig.height
    },
    _addCreatives: function() {
        if (EBG.adaptor.isPageLoaded() && 3 != this._downloadMode)
            this._downloadMode = 3;
        switch (this._downloadMode) {
        case 1:
            this._shouldLoadDefault=!0;
            break;
        case 2:
        case 3:
            if (!this._preloader ||!this._gotRich)
                this._shouldLoadDefault=!0;
            this._shouldLoadRich=!0
        }
        this._shouldLoadDefault && (this._adConfig.preloadImagePath && "" != this._adConfig.preloadImagePath ? this._addPreloadImg() :
        "" != this._adConfig.defaultFlashPath ? this._addBannerContainer() : this._addDefaultImgBeforeFlash());
        this._checkRich()
    },
    _replayAdEventHandler: function(a) {
        try {
            !a.eventData.cancelReport && a.eventData.type.toLowerCase() == EBG.ActionType.USER && EBG.intMgr.reportReplay(this._adConfig.uid);
            var b = a.flashResId || a.flashResID, c = this._CCs[b];
            c && c.removeAsset(!1, !0);
            var d = this._assetProperties[b];
            if (d)
                this._adConfig.preloadImagePath && "" != this._adConfig.preloadImagePath ? (d.width = 0, d.height = 0) : (d.width = d.fullWidth, d.height =
                d.fullHeight), d.play = "true", d.unique++, this._banner.divId = this._writeCreativeElements(this._assetProperties[b])
        } catch (e) {}
    },
    _ccSecondFrameEventHandler: function(a) {
        try {
            this._CCs[a.flashResId || a.flashResID].inFrameTwo()
        } catch (b) {}
    },
    _checkRich: function() {
        this._gotRich && (this._CCs[this._richFlashBannerResId] = new EBG.RichFlashCC(this._adConfig), this._shouldLoadRich && this.loadRich())
    }
};
EBG.declareClass(EBG.Ads.RichBanner, EBG.Ads.RichAd);
EBG.declareNamespace("CreativeContainer");
EBG.CreativeContainer = function(a) {
    this._adConfig = a
};
EBG.declareClass(EBG.CreativeContainer, null);
EBG.declareNamespace("FlashCC");
EBG.FlashCC = function(a) {
    EBG.callSuperConstructor(EBG.FlashCC, this, [a]);
    this.fs = {};
    this._addSupportedFSCommands()
};
EBG.FlashCC.prototype = {
    _createIntMonitorObj: function(a, b) {
        return {
            command: a,
            args: b,
            objName: this._flashResID,
            adId: this._adConfig.adId
        }
    },
    _buildAdditionalResStr: function() {
        var a = "", b = this._adConfig.assets, c;
        for (c in b)
            try {
                var d = b[c], e = EBG.isInWorkshop ? d.dsPath: EBG.combinePaths(this._adConfig.resourcePath, d.dsPath), a = EBG.format("{0}{1}{2}={3}", a, a ? "&" : "", c, e)
        } catch (f) {}
        return a
    },
    _getSmartVersioningFlashVars: function() {
        var a = "", b = "", a = "undefined" != typeof this._adConfig.isSVSVP && this._adConfig.isSVSVP, c =
        this._adConfig.massVersioning.adVersions && this._adConfig.sv2DisplayMap;
        c && (b = EBG.Ads.Ad.Fn.getAdVersions(this._adConfig.massVersioning), b = 0 < this._adConfig.massVersioning.massVersionFolderDivider ? EBG.Ads.Ad.Fn.fixMVPathString(b, this._adConfig.massVersioning.massVersionFolderDivider) : b, b = EBG.format("&ebAdVersions={0}&ebAdMap={1}&ebResPath={2}&ebAdSVBasePath={3}", b, this._adConfig.sv2DisplayMap, EBG.isInWorkshop ? "" : this._adConfig.resourcePath, this._adConfig.massVersioning.adBasePath));
        if (this._adConfig.svXML &&
        (a ||!c))
            a = EBG.isGlobalDef("ebAdXmlPath") && ebAdXmlPath ? ebAdXmlPath : EBG.isInWorkshop ? this._adConfig.svXML : EBG.combinePaths(this._adConfig.resourcePath, this._adConfig.svXML), b += EBG.format("&ebAdXML={0}", a);
        return b
    },
    _getFlashParams: function() {
        var a = EBG.adaptor.getHostName(), b = EBG.intMgr.getClickTag(this._adConfig.uid), c = EBG.intMgr.getClickTarget(this._adConfig.uid), d = EBG.adaptor.browser.isIE() ? "": this._flashResID + "_DoFSCommand", e = EBG.format("ebDomain={0}&ebAdID={1}&clickTag={2}&clickTAG={2}&clicktag={2}&ebFSCmdHandler={3}&TemplateName={9}&clickTARGET={4}&ebFlashID={5}{6}&{7}{8}",
        a, this._adConfig.adId, escape(b), d, c, this._flashResID, this._getSmartVersioningFlashVars(), this._buildAdditionalResStr(), this._getAdditionalClickTagParams(), this._adConfig.templateName);
        EBG.adaptor.browser.isChrome() && 21 <= EBG.adaptor.browser.getVersion()&&!EBG.adaptor.browser.isMac() && (e = EBG.format("ebDomain={0}&ebAdID={1}&clickTag={2}&clickTAG={2}&clicktag={2}&TemplateName={9}&clickTARGET={4}&ebFlashID={5}{6}&{7}{8}", a, this._adConfig.adId, escape(b), d, c, this._flashResID, this._getSmartVersioningFlashVars(),
        this._buildAdditionalResStr(), this._getAdditionalClickTagParams(), this._adConfig.templateName));
        if (this._adConfig.additionalFlashVars)
            for (var f in this._adConfig.additionalFlashVars)
                this._adConfig.additionalFlashVars.hasOwnProperty(f) && f && (e += EBG.format("&{0}={1}", f.toLowerCase(), this._adConfig.additionalFlashVars[f]));
        return e
    },
    _getAdditionalClickTagParams: function() {
        var a = "", b = this._adConfig.interactions, c;
        for (c in b)
            try {
                if (/clicktag\d+/i.test(c)) {
                    var d = EBG.intMgr.adsData[this._adConfig.uid][EBG.Interactions.InteractionTypes.COUNTER][c.toLowerCase()],
                    e = d && "" != d.interactionData.counterJumpUrlData.jumpUrl ? d.getClickTagUrl(d.interactionData.counterJumpUrlData.jumpUrl): "";
                    "" != e && (a += EBG.format("&{0}={1}", c, escape(e)))
                }
            } catch (f) {}
        return a
    },
    buildCreativeContainerJson: function(a) {
        var b, c, d = null;
        b = ["transparent", "opaque", "window"];
        for (c = 0; 3 > c; c++)
            b[b[c]] = b[c];
        this._flashResID = a.resId;
        this.isIMPanel && 0 < a.unique && (a.resPath += "?" + Math.random());
        this._src = a.resPath;
        this._weight = a.weight;
        c = EBG.format("EBG.ads['{0}']._CCs['{1}']", this._adConfig.uid, this._flashResID);
        d = EBG.format("function {0}_DoFSCommand(command,args)", this._flashResID);
        d += EBG.format("{ try{ if(!args||args=='null')args='';command = command.replace(/FSCommand:/ig,''); return " + (this.isIMPanel ? "document.parentWindow.parent." : "") + "{0}._handleMessage(command,args,'{1}');}catch(e){if(window.mmFSExceptionAlert)mmFSExceptionAlert('Command: '+command+'\\nargs: '+args.toString()+'\\n\\nexception in DoFS func:\\n'+e.message)}}", c, this._flashResID);
        c = {
            tagName: EBG.Adaptors.TagNames.SCRIPT,
            text: d + "function ebIsFlashExtInterfaceExist(){return true;}"
        };
        var d = EBG.format("try{{0}_DoFSCommand(command,args);}catch(e){}", this._flashResID), d = {
            tagName: EBG.Adaptors.TagNames.SCRIPT,
            attributes: {
                "for": this._flashResID,
                event: "FSCommand(command,args)"
            },
            text: d
        }, e = this.getResPath(a.resPath), e =- 1 != e.toLowerCase().indexOf("http://")||-1 != e.toLowerCase().indexOf("https://") ? e : EBG.combinePaths(this._adConfig.resourcePath, e);
        b = {
            tagName: EBG.Adaptors.TagNames.OBJECT,
            attributes: {
                id: this._flashResID,
                dir: "ltr",
                name: this._flashResID,
                style: {
                    textAlign: "left",
                    width: EBG.format("{0}px",
                    a.width),
                    height: EBG.format("{0}px", a.height)
                },
                codebase: EBG.format("{0}download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#", EBG.protocol),
                version: EBG.format("{0},0,0,0", this._getFlashVersion()),
                title: this._adConfig.title ? this._adConfig.title: ""
            },
            params: {
                play: a.play,
                wmode: this.isIMPanel ? "opaque": b[a.wmode],
                menu: "false",
                flashVars: this._getFlashParams(),
                allowScriptAccess: "always",
                allowFullScreen: "true"
            }
        };
        this._isSupportShockwave() ? (b.attributes.type = "application/x-shockwave-flash", b.attributes.data =
        e) : (b.attributes.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", b.params.movie = e);
        return 0 < a.unique ? [b, d] : [b, c, d]
    },
    _isSupportShockwave: function() {
        var a=!0, b = EBG.adaptor.browser.getDocumentMode(), b = b ? b : 5;
        EBG.adaptor.browser.isIE() && 11 > b && (a=!1);
        return a
    },
    isPlaying: function() {
        if (!this._flashResID)
            return !1;
        var a = EBG.adaptor.getElementById(this._flashResID);
        if (!a)
            return !1;
        try {
            if ("undefined" == typeof a.PercentLoaded && "undefined" == typeof a.TGetProperty || "undefined" != typeof a.PercentLoaded && 100 == a.PercentLoaded())
                return !0;
            if ("undefined" != typeof a.TGetProperty)
                try {
                    return 1 < a.TGetProperty("/", 4)
                } catch (b) {}
        } catch (c) {
            return !0
        }
        return !1
    },
    checkPlaying: function() {
        if (this.isPlaying()) {
            var a = new EBG.Events.Event(EBG.Events.EventNames.ELEMENT_LOADED);
            a.dispatcher = this;
            a.eventData = {
                DOMEvent: null,
                elementId: this._flashResID,
                adUId: this._adConfig.uid
            };
            a.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(a)
        } else 
            EBG.runTimed(this, this.checkPlaying, [], 50)
    },
    getResPath: function(a) {
        return a
    },
    _getFlashVersion: function() {
        return this._adConfig.flashVer
    },
    _handleMessage: function(a, b, c) {
        var a = a.replace(/FSCommand:/ig, ""), d = a = a.toLowerCase(), e = b;
        a == EBG.EBMessage.CLICKTHROUGH && b && 0 == b.indexOf("SV2:")&&-1 != b.indexOf(String.fromCharCode(127)) && (e = b.substring(4), d = a + "sv2");
        var f = this.fs[d];
        if (f) {
            var g = f.mapEvent || d.toLowerCase(), g = new EBG.Events.Event(g);
            g.dispatcher = this;
            g.flashResId = c;
            var c = ",", h=!1;
            switch (d) {
            case EBG.EBMessage.CLICKTHROUGH:
                g.eventData = {};
                break;
            case EBG.EBMessage.CLICKTHROUGH + "sv2":
            case EBG.FS.EB_SET_JS_VAR:
                c = "\u007f";
                break;
            case EBG.EBMessage.VERSION_TRACKING_IMPRESSION:
                h =
                !0, g.eventData = {}, g.eventData[f.args[0]] = this._formatUrls(b)
            }
            if (f && f.args&&!h && (g.eventData = {
                adUId: this._adConfig.uid
            }, 0 < b.length)) {
                d = e.split(c);
                for (e = 0; e < f.args.length; e++)
                    c = f.args[e], h = "", e < d.length && (h = '"' == d[e].charAt(0) || "'" == d[e].charAt(0) || "false" == d[e] || "true" == d[e] ? eval(d[e]) : d[e]), g.eventData[c] = h
            }
            this._handleIntMonitor(a, b);
            if (f) {
                if (f.command)
                    return b = [g.eventData], f.command.call(this, b);
                f.combinedCommand && (b = [g.eventData], f.combinedCommand.call(this, b));
                EBG.eventMgr.dispatchEvent(g)
            }
        }
    },
    _formatUrls: function(a) {
        for (var b = [], a = a.split("\u007f"), c = 0; c < a.length; c++)
            for (var d = a[c].split("|"), e = 0; e < d.length; e++)
                b.push(d[e]);
        return b
    },
    _handleIntMonitor: function(a, b) {
        if (EBG.adaptor.intMonitorExist()) {
            var c = new EBG.Events.Event(EBG.EBMessage.NOTIFY_INTERACTION_MONITOR);
            c.eventData = this._createIntMonitorObj(a, b);
            EBG.eventMgr.dispatchEvent(c)
        }
    },
    _addSupportedFSCommands: function() {
        this.fs[EBG.FS.EB_CLICKTHROUGH] = {
            mapEvent: EBG.EBMessage.CLICKTHROUGH
        };
        this.fs[EBG.FS.EB_CLICKTHROUGH + "sv2"] = {
            mapEvent: EBG.EBMessage.CLICKTHROUGH,
            args: ["clickUrl", "clickedVersion", "clickedVerUrl"]
        };
        this.fs[EBG.FS.EB_VERSION_TRACKING_IMPRESSION] = {
            mapEvent: EBG.EBMessage.VERSION_TRACKING_IMPRESSION,
            args: ["impTrackingUrls"]
        };
        this.fs[EBG.FS.EB_CREATIVE_EVENT_SUBSCRIPTION] = {
            mapEvent: !1,
            args: ["eventHandler", "interAd"],
            command: this._addCreativeEventSubscription
        }
    },
    _addCreativeEventSubscription: function(a) {
        var b = a[0].eventHandler.split(String.fromCharCode(127)), c = new EBG.Events.EventSubscription(b[0], function(a) {
            this.call("ebCallHandlerWithObj", b[0],
            a.eventData)
        }, this);
        if (!a[0].interAd)
            c.dispatcherFilters = {
                "_adConfig.rnd": this._adConfig.rnd
            };
        EBG.eventMgr.subscribeToEvent(c)
    }
};
EBG.FlashCC.FlashProperty = {
    XPOSITION: 0,
    YPOSITION: 1,
    XSCALE: 2,
    YSCALE: 3,
    CURRENTFRAME: 4,
    TOTALFRAMES: 5,
    ALPHA: 6,
    VISIBILITY: 7,
    WIDTH: 8,
    HEIGHT: 9,
    ROTATION: 10,
    TARGET: 11,
    FRAMESLOADED: 12,
    NAME: 13,
    DROPTARGET: 14,
    URL: 15
};
EBG.declareClass(EBG.FlashCC, EBG.CreativeContainer);
EBG.declareNamespace("RichFlashCC");
EBG.RichFlashCC = function(a) {
    EBG.callSuperConstructor(EBG.RichFlashCC, this, [a]);
    this._displayWin = EBG.adaptor.getDisplayWin();
    this._pageWin = EBG.adaptor.getPageWin();
    this.isInBannerInFriendly = this._displayWin !== this._pageWin && this._adConfig.actualServingMode === EBG.Adaptors.ServingMode.FRIENDLY_IFRAME;
    this._videoAssetsActive = []
};
EBG.RichFlashCC.prototype = {
    _numOfPlayRetry: 0,
    _numOfSecondFrameRetry: 0,
    _registeredToMouseMove: !1,
    _videoAssetsActive: null,
    _mouseTrackerArr: {},
    _displayWin: null,
    _pageWin: null,
    isInBannerInFriendly: !1,
    _addSupportedFSCommands: function() {
        EBG.callSuperFunction(EBG.RichFlashCC, this, "_addSupportedFSCommands");
        this.fs[EBG.FS.EB_CLICKTHROUGH] = {
            mapEvent: EBG.EBMessage.CLICKTHROUGH,
            args: ["intName"]
        };
        this.fs[EBG.FS.EB_CI_USER_ACTION_COUNTER] = {
            mapEvent: EBG.EBMessage.USER_ACTION_COUNTER,
            args: ["intName"]
        };
        this.fs[EBG.FS.EB_CI_AUTOMATIC_EVENT_COUNTER] =
        {
            mapEvent: EBG.EBMessage.AUTOMATIC_EVENT_COUNTER,
            args: ["intName"]
        };
        this.fs[EBG.FS.EB_VIDEO_INTERACTION] = {
            mapEvent: EBG.EBMessage.VIDEO_INTERACTION,
            args: ["intName", "ebmovie"]
        };
        this.fs[EBG.FS.EB_START_TIMER] = {
            mapEvent: EBG.EBMessage.START_TIMER,
            args: ["intName", "assetId"]
        };
        this.fs[EBG.FS.EB_END_TIMER] = {
            mapEvent: EBG.EBMessage.STOP_TIMER,
            args: ["intName", "assetId"]
        };
        this.fs[EBG.FS.EB_CI_START_TIMER] = {
            mapEvent: EBG.EBMessage.START_TIMER,
            args: ["intName"]
        };
        this.fs[EBG.FS.EB_CI_STOP_TIMER] = {
            mapEvent: EBG.EBMessage.STOP_TIMER,
            args: ["intName"]
        };
        this.fs[EBG.FS.EB_UPDATE_TIMER] = {
            mapEvent: EBG.EBMessage.UPDATE_TIMER,
            args: ["intName", "timerValue"]
        };
        this.fs[EBG.FS.EB_START_VIDEO_TIMER] = {
            mapEvent: EBG.EBMessage.START_VIDEO_TIMER,
            args: ["intName", "ebmovie"],
            combinedCommand: this._registerVideo
        };
        this.fs[EBG.FS.EB_STOP_VIDEO_TIMER] = {
            mapEvent: EBG.EBMessage.STOP_VIDEO_TIMER,
            args: ["intName", "ebmovie"],
            combinedCommand: this._unregisterVideo
        };
        this.fs[EBG.FS.EB_PAGE_LOAD] = {
            mapEvent: !1,
            args: ["handlerName"]
        };
        this.fs[EBG.FS.EB_COMMAND] = {
            mapEvent: !1,
            args: ["command"]
        };
        this.fs[EBG.FS.EB_MSG] = {
            mapEvent: !1,
            args: ["message"]
        };
        this.fs[EBG.FS.EB_EXPAND_PANEL] = {
            mapEvent: EBG.EBMessage.EXPAND,
            args: ["panelName", "userInitiated"]
        };
        this.fs[EBG.FS.EB_COLLAPSE_PANEL] = {
            mapEvent: EBG.EBMessage.COLLAPSE,
            args: ["panelName", "userInitiated"]
        };
        this.fs[EBG.FS.EB_SET_STATE] = {
            mapEvent: EBG.EBMessage.SET_STATE,
            args: ["stateValue"]
        };
        this.fs[EBG.FS.EB_RESET_STATE] = {
            mapEvent: EBG.EBMessage.RESET_STATE,
            args: ["stateValue"]
        };
        this.fs[EBG.FS.EB_MOUSE_TRACKER] = {
            mapEvent: !1,
            args: ["handlerName"]
        };
        this.fs[EBG.FS.EB_MOUSE_MOVE] = {
            mapEvent: !1,
            args: ["proxyPath"],
            command: this._ebMouseMoveHandler
        };
        this.fs[EBG.FS.EB_TEST_DC] = {
            mapEvent: !1,
            args: ["strArgs"],
            command: this._ebTestDCHandler
        };
        this.fs[EBG.FS.EB_CLOSE_AD] = {
            mapEvent: EBG.Events.EventNames.CLOSE_AD,
            args: ["type"]
        };
        this.fs[EBG.FS.EB_REPLAY_AD] = {
            mapEvent: EBG.Events.EventNames.REPLAY_AD,
            args: ["type"]
        };
        this.fs[EBG.FS.EB_REPLAY_EXP] = {
            mapEvent: !1,
            args: !1
        };
        this.fs[EBG.FS.EB_LOAD_RICH_BANNER] = {
            mapEvent: !1,
            args: !1
        };
        this.fs[EBG.FS.EB_SHOW_RICH_BANNER] = {
            mapEvent: !1,
            args: !1
        };
        this.fs[EBG.FS.EB_INIT_VIDEO_LOADER] = {
            mapEvent: EBG.EBMessage.INIT_VIDEO_LOADER,
            args: "apiPath,stretchToFit,streaming,autoplay,xPos,yPos,width,height,handleClick,newComp".split(",")
        };
        this.fs[EBG.FS.EB_VIDEO_LOAD] = {
            mapEvent: EBG.EBMessage.VIDEO_LOAD,
            args: "apiPath,movieName,mute,volume,buffer,fsmovieName,newComp".split(",")
        };
        this.fs[EBG.FS.EB_VIDEO_LOAD_AND_PLAY] = {
            mapEvent: !1,
            args: ["strArgs"]
        };
        this.fs[EBG.FS.EB_FULL_SCREEN_OPEN] = {
            mapEvent: EBG.EBMessage.FULL_SCREEN_OPEN,
            args: ["apiPath"]
        };
        this.fs[EBG.FS.EB_FULL_SCREEN_CLOSE] =
        {
            mapEvent: EBG.EBMessage.FULL_SCREEN_CLOSE,
            args: ["apiPath"]
        };
        this.fs[EBG.FS.EB_FULL_SCREEN_AUTO_CLOSE] = {
            mapEvent: EBG.EBMessage.FULL_SCREEN_AUTO_CLOSE,
            args: ["apiPath"]
        };
        this.fs[EBG.FS.EB_VIDEO_FS_OPEN] = {
            mapEvent: EBG.EBMessage.VIDEO_FS_OPEN,
            args: "apiPath,posSecs,mute,volume,playProg,unMuteHandled".split(",")
        };
        this.fs[EBG.FS.EB_VIDEO_FS_CLOSE] = {
            mapEvent: EBG.EBMessage.VIDEO_FS_CLOSE,
            args: !1
        };
        this.fs[EBG.FS.EB_VIDEO_FS_AUTO_CLOSE] = {
            mapEvent: EBG.EBMessage.VIDEO_FS_AUTO_CLOSE,
            args: !1
        };
        this.fs[EBG.FS.EB_START_VIDEO] =
        {
            mapEvent: EBG.EBMessage.START_VIDEO,
            args: ["intName", "ebmovie"],
            combinedCommand: this._registerVideo
        };
        this.fs[EBG.FS.EB_STOP_VIDEO] = {
            mapEvent: EBG.EBMessage.STOP_VIDEO,
            args: ["intName", "ebmovie"],
            combinedCommand: this._unregisterVideo
        };
        this.fs[EBG.FS.EB_UPDATE_VIDEO_DURATION] = {
            mapEvent: EBG.EBMessage.UPDATE_VIDEO_DURATION,
            args: ["intName", "deltalDuration", "ebmovie"]
        };
        this.fs[EBG.FS.EB_GET_JS_VAR] = {
            mapEvent: !1,
            args: ["varName"],
            command: this._ebGetJSVar
        };
        this.fs[EBG.FS.EB_GET_ALL_JS_VARS] = {
            mapEvent: !1,
            args: !1,
            command: this._ebGetAllJSVars
        };
        this.fs[EBG.FS.EB_SET_JS_VAR] = {
            mapEvent: !1,
            args: ["varName", "varValue", "isString"]
        };
        this.fs[EBG.FS.EB_NOTIFICATION] = {
            mapEvent: !1,
            args: ["handleNotification"]
        };
        this.fs[EBG.FS.EB_VIDEO_ACTIVE_MODE] = {
            mapEvent: !1,
            args: ["arg1", "arg2"]
        }
    },
    _registerVideo: function(a) {
        a = this._getAssetIdFromEvent(a);
        - 1 == EBGInfra.indexOfArray(this._videoAssetsActive, a) && this._videoAssetsActive.push(a)
    },
    _unregisterVideo: function(a) {
        a = this._getAssetIdFromEvent(a);
        if (0 < this._videoAssetsActive.length)
            var b =
            EBGInfra.indexOfArray(this._videoAssetsActive, a);
        this._videoAssetsActive.splice(b, 1)
    },
    _getAssetIdFromEvent: function(a) {
        var b = null;
        if (a && a[0] && a[0].ebmovie) {
            b = 0;
            a = EBG.format("ebMovie{0}", a[0].ebmovie);
            if (this._adConfig.assets && this._adConfig.assets[a])
                b = this._adConfig.assets[a].assetID;
            if (this._adConfig.bestAsset && this._adConfig.bestAsset[a])
                b = this._adConfig.bestAsset[a].assetID
        }
        return b
    },
    _ebMouseMoveHandler: function(a) {
        try {
            if (!this._registeredToMouseMove) {
                var b = new EBG.Events.Event(EBG.Events.EventNames.MOUSE_MOVE_NEEDED);
                b.dispatcher = this;
                b.eventData = {
                    assetId: this._flashResID
                };
                b.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(b);
                this._registeredToMouseMove=!0
            }
            var c = a && a[0] ? a[0].proxyPath: "";
            if (!this._mouseTrackerArr.proxyPath)
                this._mouseTrackerArr.proxyPath = c
        } catch (d) {}
    },
    _handleMouseMove: function(a) {
        try {
            var b = this.ccGetElemById(this._flashResID);
            if (b) {
                var c = {
                    X: 0,
                    Y: 0
                }, d = {
                    X: 0,
                    Y: 0
                }, e, f, g, h, i = "";
                try {
                    c = EBG.adaptor.getPositioningByElement(b, !this.isInBannerInFriendly, this._adConfig.actualServingMode)
                } catch (j) {
                    c =
                    {
                        X: 0,
                        Y: 0
                    }
                }
                e = a.mouseX;
                f = a.mouseY;
                g = a.mouseX - c.X;
                h = a.mouseY - c.Y;
                if (this.isInBannerInFriendly) {
                    try {
                        d = EBG.adaptor.getPositioningByElement(this._displayWin.frameElement, !1, this._adConfig.actualServingMode)
                    } catch (k) {
                        d = {
                            X: 0,
                            Y: 0
                        }
                    }
                    a.view === this._displayWin ? (e += d.X, f += d.Y) : a.view === this._pageWin && (g -= d.X, h -= d.Y)
                }
                i = EBG.format("{0},{1},{2},{3}", e, f, g, h);
                this.call(this._mouseTrackerArr.proxyPath, EBG.EBMessage.MOUSE_MOVE, i)
            }
        } catch (n) {}
    },
    _ebTestDCHandler: function(a) {
        try {
            if ((EBG.isOfflineDemo || EBG.isPreview) && EBGInfra.isFunc(window.parent.setDataCaptureFormValues) &&
            EBGInfra.isDefined(a[0].strArgs)) {
                var b = a[0].strArgs.split("||");
                window.parent.setDataCaptureFormValues(b[0], b[1])
            }
        } catch (c) {}
    },
    _ebGetJSVar: function(a) {
        var b = a[0].varName;
        if (a[0] && EBG.hasValue(b))
            return this._adConfig[b]
    },
    _ebGetAllJSVars: function() {
        var a = {};
        if (this._adConfig.customJSVars)
            for (var b in this._adConfig.customJSVars)
                a[b] = this._adConfig[b];
        return a
    },
    _getFlashVersion: function() {
        return this._adConfig.minimalflashVer
    },
    _getFlashParams: function() {
        var a = EBG.callSuperFunction(EBG.RichFlashCC,
        this, "_getFlashParams"), b = this._getDynamicContentRes(), c = EBG.isPreview ? "1": "0", d = EBG.isOfflineDemo || EBG.isPreview ? "": EBG.format("{0}{1}{2}", EBG.protocol, EBG.dataCapture, EBG.Const.DATACAPTURE), e = this._adConfig.campaignId, f = EBG.Const.AKAMAI_DEFAULT, g = "";
        switch (this._adConfig.pluId) {
        case 42:
        case 45:
            f = EBG.Const.AKAMAIFCS_PLUID_42_45;
            break;
        case 43:
            f = EBG.Const.AKAMAIFCS_PLUID_43;
            break;
        case 9:
            g = "Type-12/", f = EBG.Const.AKAMAIFCS_PLUID_9
        }
        var f = escape(f), h = this._src.indexOf("/", this._adConfig.resourcePath),
        h = EBG.format("{0}{1}", EBG.fcsVirtualPath, this._src.substring(this._adConfig.resourcePath, h + 1));
        strUrlExtended = EBG.format("&ebNewPreview={0}&ebDCPipe={1}&ebResourcePath={2}&ebCampaignID={3}&ebStreamingAppURL={4}&ebStreamVirtualPath={5}&ebAdIdentifier={6}&ebPageGUID={7}", c, d, EBG.isInWorkshop ? "" : this._adConfig.resourcePath, e, f, h + g, this._adConfig.adId, EBG.pageGUID);
        EBG.isOfflineDemo ? strUrlExtended += EBG.format("&ebForcePlayMode={0}", 0) : EBG.isGlobalDef("gfEbForceStreaming") && (strUrlExtended += EBG.format("&ebForcePlayMode={0}",
        gfEbForceStreaming ? 1 : 0));
        this._adConfig.testImp && (strUrlExtended += EBG.format("&ebPipeParams={0}", escape("t=1")));
        3 != this._adConfig.FSMute && (strUrlExtended = 1 == this._adConfig.FSMute ? strUrlExtended + "&ebFLVFSMute=1" : strUrlExtended + "&ebFLVFSMute=0");
        return a + b + strUrlExtended
    },
    isAS3: function() {
        try {
            var a = this.ccGetElemById(this._flashResID), b = "undefined" != typeof a.ebGetVars;
            b && EBG.adaptor.browser.isSafari() && (b = "undefined" != typeof a.ebGetVars("xmouse"));
            return b
        } catch (c) {
            return !1
        } finally {}
    },
    _getDynamicContentRes: function() {
        try {
            var a =
            "", b;
            for (b in this._adConfig.DynamicContentResources)
                EBG.isDefined(this._adConfig.DynamicContentResources[b].url) && (a += EBG.format("&{0}={1}", b, this._adConfig.DynamicContentResources[b].url));
            return a
        } catch (c) {
            return !1
        } finally {}
    },
    _getFramesLoaded: function(a) {
        var b = 0;
        try {
            100 == this._getPercentLoaded(a) && (b = 1)
        } catch (c) {
            if ("undefined" != typeof a.TGetProperty)
                try {
                    b = a.TGetProperty("/", 12)
                } catch (d) {
                b = 0
            }
        }
        return b
    },
    _getPercentLoaded: function(a) {
        var b =- 1;
        "undefined" != typeof a.PercentLoaded && (b = a.PercentLoaded());
        return b
    },
    removeAsset: function(a, b) {
        var c = this.ccGetElemById(this._flashResID);
        if (c)
            a && this.resize(0, 0), this._container = c.parentNode, this._previousInnerHTML = c.parentNode.innerHTML, c = c.parentNode, EBG.adaptor.setInnerHtml(c, ""), b && c.parentNode.removeChild(c)
    },
    isReady: function() {
        var a = 0, b = 0;
        if (b = this.ccGetElemById(this._flashResID)) {
            var a = this._getFramesLoaded(b), b = this._getPercentLoaded(b), c = b * this._weight / 100;
            100 == b || 614400 < c || 1 < a ? (a = new EBG.Events.Event(EBG.Events.EventNames.CREATIVE_CONTAINER_READY),
            a.dispatcher = this, a.eventData = this._flashResID, EBG.eventMgr.dispatchEvent(a)) : EBG.runTimed(this, this.isReady, [], 50)
        } else 
            EBG.runTimed(this, this.isReady, [], 50)
    },
    inFrameTwo: function() {
        var a = 0, b = this.ccGetElemById(this._flashResID);
        try {
            a = b.TGetProperty("/", 4)
        } catch (c) {}("undefined" == EBG.typeOf(a) || 2 > a && 40 > this._numOfSecondFrameRetry) && EBG.runTimed(this, this.inFrameTwo, [], 50);
        if (2 <= a || 40 <= this._numOfSecondFrameRetry)
            a = new EBG.Events.Event(EBG.Events.EventNames.FLASH_IN_FRAME_TWO), a.dispatcher = this, a.eventData =
            this._flashResID, EBG.eventMgr.dispatchEvent(a);
        this._numOfSecondFrameRetry++
    },
    resize: function(a, b) {
        if (a && b) {
            var a = parseInt(a), b = parseInt(b), c = this.ccGetElemById(this._flashResID);
            EBG.adaptor.setElemStyle(c, "width", EBG.px(a));
            EBG.adaptor.setElemStyle(c, "height", EBG.px(b));
            EBG.adaptor.setElemStyle(c.parentNode, "width", EBG.px(a));
            EBG.adaptor.setElemStyle(c.parentNode, "height", EBG.px(b))
        }
    },
    call: function(a, b, c) {
        var d = this.ccGetElemById(this._flashResID);
        c || (c = "");
        if (this.isAS3())
            return d[a](b, c);
        c = "" !=
        c ? EBG.format("{0},{1}", b, c) : b;
        d.SetVariable(a, c);
        return null
    },
    play: function() {
        EBG.runTimed(this, this._playTimed, [this._flashResID], 10)
    },
    _playTimed: function(a) {
        try {
            var b = this.ccGetElemById(a);
            if (b)
                if (this._isPowerSaveExist())
                    this._detectPowerSave(b, !1, !1, 0);
                else 
                    try {
                        if (this._numOfPlayRetry++, 15 < this._numOfPlayRetry) {
                            this._numOfPlayRetry = 0;
                            this._richLoaded=!1;
                            var c = new EBG.Events.Event(EBG.Events.EventNames.REPLAY_AD);
                            c.dispatcher = this;
                            c.flashResID = a;
                            c.eventData = {};
                            c.eventData.cancelReport=!0;
                            c.timing =
                            EBG.Events.EventTiming.ONTIME_AND_AFTER;
                            EBG.eventMgr.dispatchEvent(c)
                        } else if (b.Play(), 1 < b.TGetPropertyAsNumber("/", EBG.FlashCC.FlashProperty.CURRENTFRAME) || b.IsPlaying())
                            this._numOfPlayRetry = 0;
                        else 
                            throw "Flash not playing";
                    } catch (d) {
                EBG.runTimed(this, this._playTimed, [a], 100)
            }
        } catch (e) {}
    },
    _isPowerSaveExist: function() {
        return EBG.adaptor.browser.isSafari() && 6 <= EBG.adaptor.browser.getVersion()
    },
    _detectPowerSave: function(a, b, c, d) {
        var e=!1;
        d++;
        "function" == typeof a.Play ? b ? (a.Play(), e=!0) : c || (a.Play(), c =
        !0) : b=!0;
        e || EBG.runTimed(this, this._detectPowerSave, [a, b, c, d], 1E3)
    },
    setProxyParams: function(a, b) {
        for (var c = this.ccGetElemById(this._flashResID), d = b.split(";"), e = 0; e < d.length; e++) {
            var f = d[e].split(",");
            c.SetVariable(a + ":" + f[0], f[1])
        }
    },
    callFlashFunc: function(a, b, c) {
        try {
            "undefined" == typeof c && (c = "");
            var d = this.ccGetElemById(this._flashResID), e = "";
            if (this.isAS3()) {
                var f = a.lastIndexOf("/"), a =- 1 != f ? a.substring(0, f) : a;
                if ("" != c)
                    for (var g = c.split(";"), c = 0; c < g.length; c++)
                        if ("" != g[c]) {
                            var h = g[c].split(","),
                            e = e + h[1];
                            c < g.length - 1 && (e += ",")
                        }
                d[a](b, e)
            } else 
                "" != c && this.setProxyParams(a, c), d.TCallLabel(a, b)
        } catch (i) {}
    },
    ccGetElemById: function(a) {
        try {
            var b = this.IMPopupRef ? this.IMPopupRef.document.getElementById(a): null;
            if (b)
                return b
        } catch (c) {}
        return EBG.adaptor.getElementById(a)
    }
};
EBG.declareClass(EBG.RichFlashCC, EBG.FlashCC);
EBG.declareNamespace("BWDetection");
EBG.BWDetection = {
    checked: !1,
    checking: !1,
    speed: 0,
    _adjustment: 0.75,
    _images: [{
        path: EBG.format("{0}{1}micro.gif", ebPtcl, ebO.sms),
        bytes: 51,
        start: null,
        end: null
    }, {
        path: EBG.format("{0}{1}micro.gif", ebPtcl, ebO.sms),
        bytes: 51,
        start: null,
        end: null
    }, {
        path: EBG.format("{0}{1}bw_image.png", ebPtcl, ebO.sms),
        bytes: 43677,
        start: null,
        end: null
    }
    ],
    _loaded: 0,
    _loadImage: function(a) {
        this._images[a].start = (new Date).getTime();
        var b = new Image, c = Math.random();
        b.onload = function() {
            EBG.BWDetection._imageLoaded(a)
        };
        b.src = this._images[a].path +
        "?rnd=" + c
    },
    _imageLoaded: function(a) {
        this._images[a].end = (new Date).getTime();
        this._loaded++;
        this._loaded == this._images.length && this._calculateSpeed()
    },
    _dispatchEvent: function() {
        var a = new EBG.Events.Event(EBG.Events.EventNames.BANDWITH_DETECTED);
        a.dispatcher = this;
        a.eventData = this.speed;
        EBG.eventMgr.dispatchEvent(a)
    },
    _calculateSpeed: function() {
        var a = Math.min(this._images[0].end - this._images[0].start, this._images[1].end - this._images[1].start), b = this._images[2].end - this._images[2].start, c = b, d = this._images[2].bytes;
        b > a && (c = b - a, d -= this._images[0].bytes);
        this.speed = Math.round(8 * (d / (c / 1E3) / 1024)) * this._adjustment;
        if (Infinity == this.speed)
            this.speed = 25E3;
        this.checked=!0;
        this.checking=!1;
        this._dispatchEvent()
    },
    init: function() {
        this.checking=!0;
        this._loadImage(0);
        this._loadImage(1);
        this._loadImage(2);
        var a = this;
        setTimeout(function() {
            if (!a.checked)
                a.speed = 56, a.checked=!0, a.checking=!1, a._dispatchEvent()
        }, 5E3)
    }
};
var tempExtensionHook = ebO.extensionHooks;
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        function c() {
            if (EBG.Ads.ExpBaseHtml5)
                EBG.Ads.ExpBaseHtml5.prototype._subscribeToEvents = function() {
                    EBG.callSuperFunction(EBG.Ads.ExpBaseHtml5, this, "_subscribeToEvents");
                    this._subscribeToAdEvent(EBG.EBMessage.EXPAND, this._handleExpand);
                    this._subscribeToAdEvent(EBG.EBMessage.COLLAPSE, this._handleCollapse);
                    this._subscribeToAdEvent(EBG.Events.EventNames.CLOSE_AD, this._handleCollapse);
                    EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD,
                    this._unLoadHandler, this))
                };
            if (EBG.Ads.SEBannerHtml5)
                EBG.Ads.SEBannerHtml5.prototype._subscribeToEvents = function() {
                    EBG.callSuperFunction(EBG.Ads.SEBannerHtml5, this, "_subscribeToEvents");
                    this._subscribeToAdEvent(EBG.EBMessage.EXPAND, this._onExpand);
                    this._subscribeToAdEvent(EBG.EBMessage.COLLAPSE, this._onCollapse);
                    this._subscribeToAdEvent(EBG.Events.EventNames.CLOSE_AD, this._onCollapse);
                    this._subscribeToAdEvent(EBG.EBMessage.INIT_EXPANSION_PARAMS, this._onInitExpansionParams);
                    EBG.eventMgr.subscribeToEvent(new EBG.Events.EventSubscription(EBG.Events.EventNames.PAGE_UNLOAD,
                    this._unLoadHandler, this))
                }
        }
        EBG.getFeatureFlagValue(b.ffs, "CFF_CloseAdPart") && c()
    })
} catch (e$$99) {
    ebO.extensionHooks = tempExtensionHook
}
tempExtensionHook = ebO.extensionHooks;
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        if (!EBG.getFeatureFlagValue(b.ffs, "CFF_DynamicExpansion"))
            a.expandDynamic = 0
    })
} catch (e$$100) {
    ebO.extensionHooks = tempExtensionHook
}
tempExtensionHook = ebO.extensionHooks;
try {
    ebO.extensionHooks.splice(0, 0, function(a, b) {
        function c() {
            b.adConfig.UiVz=!1;
            EBG.Initializer._initServingMode = function(a) {
                var b = this._getAdClass(a);
                a.requiresIframeBust = b.requiresIframeBust;
                var c = EBGInfra.isDefined(EBG.adaptor.serving) ? EBG.adaptor.serving.detectServingMode(!0): null;
                if (b.requiresIframeBust) {
                    if (!a.ifrm || a.soi)
                        a.ifrm = 0;
                    if (a.innerIframe)
                        a.ifrm = EBG.Adaptors.ServingMode.INNER_IFRAME;
                    EBG.adaptor.initServingMode(a.ifrm, !1, c)
                } else if (a.ifrm = 0, b != EBG.Ads.StdBanner && (EBG.adaptor.initServingMode(a.ifrm,
                !b.requiresIframeBust, c), c == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME))
                    try {
                        document.close()
                } catch (d) {}
                if (EBG.adaptor.inPlacementIframe() ||!a.innerIframe && c == EBG.Adaptors.ServingMode.IFRAME && b != EBG.Ads.StdBanner&&!EBG.adaptor.isSafeFrame())
                    a.ifrm = 1, b = new EBG.Events.EventSubscription(EBG.Events.EventNames.AIE_LOADED, this._handleAieLoad, this), b.dispatcherFilters = {
                        "_adConfig.rnd": a.rnd,
                        "_adConfig.templateName": a.tn
                    }, b.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(b), EBG.adaptor.serving.handleAieServing(a)
            };
            if (EBG.Adaptors.ServingMgr.prototype)
                EBG.Adaptors.ServingMgr.prototype.checkAie = function(a, c, d) {
                    d.ebO = EBG.cloneObj(a);
                    EBG.isDefinedNotNull(EBG.iframeLocation) ? c.apply(d, [JSON.stringify({
                        iflExists: 1,
                        iflCheck: 0
                    })]) : EBG.isDefinedNotNull(b.aiE) && EBG.isDefinedNotNull(b.aiE.iflExists) ? c.apply(d, [JSON.stringify(b.aiE)]) : (a = this._ebGetHostName(document.referrer), "" == a ? c.apply(d) : EBG.adaptor.getDataFromRemoteServer(ebPtcl + b.bs + this.aieServerRequestPrefix + a + this.aieServerRequestPrefixVersion, c, d, !0, !1) || c.apply(d,
                    [JSON.stringify({
                        iflExists: 1,
                        iflCheck: 0
                    })]))
                }, EBG.Adaptors.ServingMgr.prototype.handleAieServing = function(a) {
                    this.checkAie(a, this._handleAddInEyeServerResponse, this)
                }, EBG.Adaptors.ServingMgr.prototype._handleAddInEyeServerResponse = function(a, b) {
                    var c;
                    try {
                        c=!b && EBG.isDefinedNotNull(a) ? JSON.parse(a) : {
                            iflExists: 0,
                            iflCheck: 1
                        }
                    } catch (d) {
                        c = {
                            iflExists: 0,
                            iflCheck: 1
                        }
                    }
                    this.ebO.aiE = c;
                    EBGInfra.isDefined(EBG.adaptor.serving) && EBG.adaptor.serving.detectServingMode(!0);
                    if (this.ebO.requiresIframeBust)
                        if (c && c.iflExists)
                            this.insertInnerIframe(this.ebO.phid,
                            c.iflCheck ? EBG.Adaptors.IframeMode.SERVEANDVERIFY : EBG.Adaptors.IframeMode.SERVE);
                        else {
                            this.ebO.ifrm = 0;
                            this.ebO.adConfig.showAieDefaultImage = 1;
                            var i = new EBG.Events.Event(EBG.Events.EventNames.AIE_LOADED);
                            i.eventData = {
                                loadDefault: this.ebO.adConfig.showAieDefaultImage,
                                currentResponse: this.ebO
                            };
                            i.timing = EBG.Events.EventTiming.BEFORE;
                            EBG.eventMgr.dispatchEvent(i);
                            c.iflCheck && this.insertInnerIframe(this.ebO.phid, EBG.Adaptors.IframeMode.VERIFY)
                        } else 
                            this.ebO.ifrm = 0, i = new EBG.Events.Event(EBG.Events.EventNames.AIE_LOADED),
                            i.eventData = {
                                loadDefault: !0,
                                currentResponse: this.ebO
                            }, i.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.dispatchEvent(i), c.iflCheck && this.insertInnerIframe(this.ebO.phid, EBG.Adaptors.IframeMode.VERIFY)
                        };
            if (EBG.RichModules.VisibilityManager) {
                var a = function() {
                    return !0
                };
                EBG.RichModules.BasicVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.GeometricVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.GeometricVisibilityProvider._isAvailable = function(a) {
                    return a.actualServingMode !=
                    EBG.Adaptors.ServingMode.IFRAME || EBG.adaptor.serving.servingMode == EBG.Adaptors.ServingMode.INNER_IFRAME
                };
                EBG.RichModules.MouseVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.MouseVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.GridVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.FlashVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.SafeFrameVisibilityProvider.prototype.shouldReportRecordable = a;
                EBG.RichModules.FFVisibilityProvider.prototype.shouldReportRecordable =
                a;
                EBG.RichModules.VisibilityManager.prototype._availableVisibilityProviders = [EBG.RichModules.GeometricVisibilityProvider, EBG.RichModules.SafeFrameVisibilityProvider, EBG.RichModules.AddingEyeProvider, EBG.RichModules.MouseVisibilityProvider, EBG.RichModules.GridVisibilityProvider, EBG.RichModules.FlashVisibilityProvider, EBG.RichModules.FFVisibilityProvider];
                a = EBG.RichModules.VisibilityManager.prototype;
                EBG.RichModules.VisibilityManager = function(a, b) {
                    this.adConfig = a;
                    this._resObjId = b;
                    this.actualServingMode =
                    this.adConfig.actualServingMode;
                    this._averageLastCalcTime = (new Date).getTime();
                    if (this._visibilityProvider = this._getVisibilityProvider(this._resObjId, this.adConfig))
                        if (this._initializeVisibilityData(), this._subscribeToEvents(), this.adConfig.adStarted)
                            this._visibilityProvider.shouldReportRecordable() && this._reportVisibilityRecordable(), this._visibilityProvider.start();
                        else {
                            var c = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
                                this._visibilityProvider.shouldReportRecordable() &&
                                this._reportVisibilityRecordable();
                                this._visibilityProvider.start()
                            }, this);
                            c.timing = EBG.Events.EventTiming.ONTIME;
                            EBG.eventMgr.subscribeToEvent(c)
                        }
                };
                EBG.RichModules.VisibilityManager.ThreholdType = {
                    IAB: 0,
                    Agency: 1,
                    Advertiser: 2
                };
                EBG.RichModules.VisibilityManager.VisibilityPollingTimer = 1E3;
                EBG.RichModules.VisibilityManager.prototype = a
            }
        }
        EBG.getFeatureFlagValue(b.ffs, "CFF_RemoveUivz") && c()
    })
} catch (e$$102) {
    ebO.extensionHooks = tempExtensionHook
}
EBG.declareNamespace("Initializer");
EBG.Initializer = {
    initialize: function() {
        var a = null, b;
        if (!(void 0 !== b && b))
            a = EBG.Initializer._getCurrentServerResponse(a), EBG.reporter = EBG.reporter || new EBG.Reporter.ServerReporter(a), EBG.Initializer._initGlobals(a), EBG.Initializer._callExtensionHooks(a), EBG.Initializer._initAdaptor(a), EBG.Initializer._initManagers(a), EBG.Initializer._initDisplayAd(a);
        return a
    },
    _initManagers: function(a) {
        var b = new EBG.Events.Event(EBG.Events.EventNames.INIT_MANAGERS);
        b.eventData = {
            "_adConfig.rnd": a.rnd
        };
        b.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(b);
        EBG.Initializer._initInteractionManager();
        EBG.Initializer._initAnimationManager();
        EBG.Initializer._initPositioningHelper();
        b.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(b)
    },
    _initDisplayAd: function(a) {
        EBG.Initializer._updateAdConfig(a);
        if (EBG.Initializer._shouldInitAd(a)) {
            if (!EBG.isDefined(EBG.adaptor.getDisplayWin().EBG))
                EBG.adaptor.getDisplayWin().EBG = EBG;
            EBG.Initializer._initAd(a)
        }
    },
    _InitAdPreGlobals: function(a) {
        try {
            var b = EBG.adaptor.getPageWin();
            if (!b.gEbPageGUID)
                b.gEbPageGUID = a.adConfig.rnd;
            EBG.pageGUID = b.gEbPageGUID
        } catch (c) {
            EBG.pageGUID = a.adConfig.rnd
        }
    },
    _shouldInitAd: function(a) {
        return a.innerIframe || 0 == a.ifrm||-1 == a.ifrm && EBG.adaptor.serving && EBG.adaptor.serving.servingMode != EBG.Adaptors.ServingMode.IFRAME
    },
    _getCurrentServerResponse: function() {
        for (var a = 0, b; a < ebOArr.length;) {
            if ((b = ebOArr[a]) && this._getAdClass(b)) {
                ebOArr.splice(a, 1);
                break
            }
            a++
        }
        return b
    },
    _initGlobals: function(a) {
        var b = navigator.userAgent.toLowerCase();
        EBG.isOfflineDemo =
        EBG.isGlobalDef("gEbfOfflineDemo") ? gEbfOfflineDemo : !1;
        EBG.resourcePath = ebResourcePath;
        a.adConfig.resourcePath = ebResourcePath;
        EBG.sms = a.sms ? a.sms : "";
        EBG.fcsVirtualPath = a.fvp ? a.fvp : "";
        EBG.pluId = a.pi;
        EBG.dataCapture = EBG.bs = a.bs;
        EBG.protocol = ebPtcl;
        EBG.reportPageVer = a.rpv;
        EBG.html5Ver = a.html5v;
        EBG.flashPixelVer = a.vfp;
        EBG.intReportTimeout = EBG.isDefined(a.irt) ? a.irt : null;
        EBG.isMSNMessenger = ( - 1 < b.indexOf("msn messenger")||-1 < b.indexOf("windows live messenger")) && window == parent;
        EBG.isIMBanner = EBG.isGlobalDef("gfEbExpBanerIM") ?
        gfEbExpBanerIM : EBG.isGlobalDef("gfEbExpBannerIM") ? gfEbExpBannerIM : !1;
        EBG.isPreview=!!a.pr;
        EBG.isInWorkshop = EBG.isGlobalDef("gEbFlyLocal") ? gEbFlyLocal : !1;
        EBG.iframeLocation = a.ifl ? a.ifl : EBG.isGlobalDef("gstrEbIframeLocation") ? gstrEbIframeLocation : void 0;
        EBG.minZIndex = a.z ? a.z : EBG.isGlobalDef("gnEbMinZIndex") ? gnEbMinZIndex : 1E4;
        EBG.eyeDivRefElement = EBG.isGlobalDef("gEbEyeDivRefElement") ? gEbEyeDivRefElement : !1;
        EBG.eventMgr = EBG.eventMgr || new EBG.Events.EventManager;
        EBG.ads = EBG.ads || {};
        EBG.serverResponses =
        EBG.serverResponses || {};
        b = a.adConfig.adHtmlPath;
        if (EBG.isDefinedNotNull(b) && EBG.isDefinedNotNull(a.h5mi))
            EBG.adKitData = {
                paths: {
                    cachedScript: ebBigS,
                    nonCachedScript: ebPtcl + a.sms,
                    folderRoot: ebResourcePath + b.substring(0, b.lastIndexOf("/") + 1)
                },
                version: a.h5mi.adkitversion
            }
    },
    _initServingMode: function(a) {
        var b = this._getAdClass(a);
        a.requiresIframeBust = b.requiresIframeBust;
        var c = EBGInfra.isDefined(EBG.adaptor.serving) ? EBG.adaptor.serving.detectServingMode(!0): null;
        if (b.requiresIframeBust) {
            if (a.innerIframe)
                a.ifrm =
                EBG.Adaptors.ServingMode.INNER_IFRAME;
            if (!a.ifrm || a.soi)
                a.ifrm = 0;
            if (EBG.getFeatureFlagValue(a.ffs, "sf") && EBG.adaptor.isSafeFrame())
                a.ifrm = 0;
            EBG.adaptor.initServingMode(a.ifrm, !1, c);
            if (EBG.adaptor.inPlacementIframe())
                b = new EBG.Events.EventSubscription(EBG.Events.EventNames.AIE_LOADED, this._handleAieLoad, this), b.dispatcherFilters = {
                    "_adConfig.rnd": a.rnd
                }, b.timing = EBG.Events.EventTiming.BEFORE, EBG.eventMgr.subscribeToEvent(b), EBG.adaptor.serving.handleAieServing(a)
        } else if (a.ifrm = 0, b != EBG.Ads.StdBanner) {
            EBG.adaptor.initServingMode(a.ifrm,
            !b.requiresIframeBust, c);
            if (c == EBG.Adaptors.ServingMode.FRIENDLY_IFRAME) {
                a.adConfig.UiVz=!1;
                try {
                    document.close()
                } catch (d) {}
            }
            if (c == EBG.Adaptors.ServingMode.SCRIPT)
                a.adConfig.UiVz=!1
        } else 
            a.adConfig.UiVz=!1
    },
    _handleAieLoad: function(a) {
        a.eventData.loadDefault && a.eventData.currentResponse.tn != EBG.adTypes.VisibilityAd && (EBG.Initializer._initManagers(a.eventData.currentResponse), EBG.Initializer._initDisplayAd(a.eventData.currentResponse))
    },
    _callExtensionHooks: function(a) {
        if (a.extensionHooks) {
            a.adConfig.rnd =
            a.rnd;
            for (a.adConfig.uid = EBG.format("{0}_{1}", a.adConfig.adId, a.adConfig.rnd); 0 !== a.extensionHooks.length;)
                a.extensionHooks.pop().apply(null, [a.adConfig, a])
        }
    },
    getRichestAdaptor: function() {
        for (var a = [EBG.Adaptors.StdWebAdaptor, EBG.Adaptors.WebAdaptor], b = a.length - 1; 0 <= b; b--)
            if (a[b])
                return a[b]
    },
    getRichestInteractionManager: function() {
        for (var a = [EBG.Interactions.StdInteractionManager, EBG.Interactions.InteractionManager], b = a.length - 1; 0 <= b; b--)
            if (a[b])
                return a[b]
    },
    _initAdaptor: function(a) {
        var b = this.getRichestAdaptor(),
        c = new EBG.Events.Event(EBG.Events.EventNames.CREATE_ADAPTOR);
        c.eventData = {
            currentClass: b
        };
        c.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(c);
        if ("undefined" == typeof EBG.adaptor || EBG.adaptor.constructor.toString() != c.eventData.currentClass.toString())
            b = new c.eventData.currentClass, EBG.adaptor = b;
        c.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(c);
        EBG.adaptor.initInnerModules(a.plt, a.bt, a.bv, a.dt, a.bc);
        this._initServingMode(a);
        EBG.adaptor.registerSpecialBrowserEvents();
        EBG.eventMgr.attachToAdaptor()
    },
    _initInteractionManager: function() {
        newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_INT_MGR);
        newEvent.eventData = {
            currentClass: this.getRichestInteractionManager()
        };
        newEvent.timing = EBG.Events.EventTiming.BEFORE;
        EBG.eventMgr.dispatchEvent(newEvent);
        if ("undefined" == typeof EBG.intMgr || EBG.intMgr.constructor.toString() != newEvent.eventData.currentClass.toString()) {
            var a = new newEvent.eventData.currentClass;
            EBG.intMgr = a
        }
        newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
        EBG.eventMgr.dispatchEvent(newEvent)
    },
    _initAnimationManager: function() {
        try {
            if (EBG.RichModules && EBG.RichModules.AnimationManager) {
                newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_ANIM_MGR);
                newEvent.eventData = EBG.RichModules.AnimationManager;
                newEvent.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(newEvent);
                if (!EBG.animationMgr)
                    EBG.animationMgr = new newEvent.eventData;
                newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(newEvent)
            }
        } catch (a) {}
    },
    _initPositioningHelper: function() {
        try {
            if (EBG.Positioning &&
            EBG.Positioning.PositionManager) {
                newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_POSITIONING_HELPER);
                newEvent.eventData = EBG.Positioning.PositionManager;
                newEvent.timing = EBG.Events.EventTiming.BEFORE;
                EBG.eventMgr.dispatchEvent(newEvent);
                if (!EBG.posHelper)
                    EBG.posHelper = new newEvent.eventData;
                newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
                EBG.eventMgr.dispatchEvent(newEvent)
            }
        } catch (a) {}
    },
    _initAd: function(a) {
        try {
            var b = this._getAdClass(a);
            newEvent = new EBG.Events.Event(EBG.Events.EventNames.CREATE_AD);
            newEvent.eventData = {
                currentClass: b,
                adConfig: a.adConfig
            };
            newEvent.timing = EBG.Events.EventTiming.BEFORE;
            newEvent.dispatcher = {
                _adConfig: {
                    rnd: a.adConfig.rnd,
                    uid: a.adConfig.uid
                }
            };
            EBG.eventMgr.dispatchEvent(newEvent);
            EBG.Initializer._InitAdPreGlobals(a);
            new newEvent.eventData.currentClass(a.adConfig);
            newEvent.timing = EBG.Events.EventTiming.ONTIME_AND_AFTER;
            EBG.eventMgr.dispatchEvent(newEvent);
            EBG.adaptor.getDisplayWin().EBG.ads[a.adConfig.uid] || (EBG.adaptor.getDisplayWin().EBG.ads[a.adConfig.uid] = EBG.ads[a.adConfig.uid]);
            if (EBGInfra.isDefined(EBG.BWDetection) && EBGInfra.isDefined(window.gEBMainWindow) && EBGInfra.isDefined(gEBMainWindow.EBP) && EBGInfra.isDefined(gEBMainWindow.EBP.ebBW) && EBGInfra.isDefined(gEBMainWindow.EBP.ebBW.checked))
                EBG.BWDetection.speed = gEBMainWindow.EBP.ebBW.speed, EBG.BWDetection.checked=!0;
            if (a.adConfig.pckAssets) {
                var b = 0, c;
                for (c in a.adConfig.pckAssets)
                    a.adConfig.pckAssets.hasOwnProperty(c) && b++;
                if (0 < b&&!EBG.BWDetection.checking&&!EBG.BWDetection.checked)
                    a.adConfig.bwApplied=!0, EBG.BWDetection.init();
                a.adConfig.BWD = EBG.BWDetection
            }
        } catch (d) {
            c = EBG.reporter.formatCallStack(d.stack), a = {
                msg: escape(d.message),
                pli: a.adConfig.placementId,
                adid: a.adConfig.adId,
                sid: a.adConfig.sID,
                sm: a.adConfig.actualServingMode,
                tn: a.adConfig.templateName,
                stk: escape(c),
                cwu: escape(EBG.adaptor.getDisplayWin().document.location.href),
                cwr: escape(EBG.adaptor.getDisplayWin().document.referrer)
            }, EBG.reporter.report(a)
        }
    },
    _getAdClass: function(a) {
        var b;
        switch (a.tn) {
        case EBG.adTypes.RichBannerHtml5:
            b = EBG.Ads.RichBannerHtml5;
            break;
        case EBG.adTypes.SEBannerHtml5:
            b = EBG.Ads.SEBannerHtml5;
            break;
        case EBG.adTypes.ExpBannerHtml5:
            b = EBG.Ads.ExpBannerHtml5;
            break;
        case EBG.adTypes.StdBanner:
            b = a.IABBV || a.IABEV ? EBG.Ads.StdBannerEx : EBG.Ads.StdBanner;
            break;
        case EBG.adTypes.Banner:
            b = EBG.Ads.RichBanner;
            break;
        case EBG.adTypes.SingleExpBanner:
            b = EBG.Ads.SingleExpBanner;
            break;
        case EBG.adTypes.ExpBanner:
            b = EBG.Ads.ExpBanner;
            break;
        case EBG.adTypes.VisibilityAd:
            b = EBG.Ads.VisibilityAd;
            break;
        case EBG.adTypes.FloatingAd:
            b = EBG.Ads.Floating;
            break;
        case EBG.adTypes.FloatingAdWithRem:
            b =
            EBG.Ads.FloatingWithReminder;
            break;
        case EBG.adTypes.TrackingAd:
            b = EBG.Ads.TrackingAd
        }
        return b
    },
    _updateAdConfig: function(a) {
        a.adConfig.rnd = a.rnd;
        a.adConfig.uid = EBG.format("{0}_{1}", a.adConfig.adId, a.adConfig.rnd);
        EBG.serverResponses[a.adConfig.uid] = a;
        a.adConfig.placeHolderId = a.phid;
        a.adConfig.sUrlTokens = a.ut;
        if (a.element_id)
            a.adConfig.element_id = a.element_id;
        a.adConfig.adStarted=!1;
        var b = EBG.adaptor.getPageWin();
        if (b = EBG.getPageUrl(b))
            a.adConfig.ebReferrer = b;
        a.adConfig.actualServingMode = EBGInfra.isDefined(EBG.adaptor.serving) ?
        EBG.adaptor.serving.detectServingMode(!0) : null;
        a.adConfig.showSinglePanel = a.adConfig.expandDynamic ? 1 : a.adConfig.showSinglePanel;
        if (!a.adConfig.clickTrackingUrls)
            a.adConfig.clickTrackingUrls = [];
        if (a.ncu)
            a.adConfig.clickTrackingUrls.push(a.ncu), a.adConfig.ncu = a.ncu;
        if (!a.adConfig.defaultImpTrackingUrls)
            a.adConfig.defaultImpTrackingUrls = [], a.adConfig.defaultClickTrackingUrls = [];
        if (a.dctu)
            a.adConfig.defaultClickTrackingUrls = a.dctu;
        if (a.ditu)
            a.adConfig.defaultImpTrackingUrls = a.ditu;
        if (a.delayedImpParams)
            a.adConfig.delayedImpParams =
            a.delayedImpParams;
        a.adConfig.impressionTrackingURLs = [];
        if (a.itu && 0 < a.itu.length)
            a.adConfig.impressionTrackingURLs = a.itu;
        "undefined" != typeof gEbBAd && gEbBAd && (gEbBAd.playRS && gEbBAd.playRS.strNUrl && a.adConfig.impressionTrackingURLs.push(gEbBAd.playRS.strNUrl), gEbBAd.strNImpUrl && a.adConfig.impressionTrackingURLs.push(gEbBAd.strNImpUrl));
        a.adConfig.imageOnly=!1;
        a.adConfig.page = a.p;
        a.adConfig.massVersioning = {
            targetAudienceId: a.ta && "-1" != a.ta ? a.ta: "",
            deliveryGroupId: a.dg && "-1" != a.dg ? a.dg: "",
            subDeliveryGroupId: a.sdg &&
            "-1" != a.sdg ? a.sdg: "",
            adVersions: a.av ? a.av: "",
            defaultAdVersion: a.avd ? a.avd: "",
            adBasePath: a.abp ? a.abp: "",
            massVersionFolderDivider: a.mvfd ? a.mvfd: 0
        };
        if (a.soi)
            a.adConfig.showOnlyImage = a.soi, a.adConfig.massVersioning.adVersions = a.adConfig.massVersioning.defaultAdVersion;
        a.adConfig.reportDelayedImpression = a.rdi ? a.rdi : 0;
        a.adConfig.defaultImageReason = a.dir ? a.dir : "";
        a.adConfig.mobileSDK = a.sdk ? a.sdk : "";
        a.adConfig.isOfflineDemo = EBG.isOfflineDemo;
        if ("undefined" == typeof a.adConfig.openWindow)
            a.adConfig.openWindow =
            !0;
        this._updateAdConfigToHandleOpenWindow(a);
        a.adConfig.bigSDir = unescape(ebBigS);
        a.adConfig.imagesDir = unescape(ebBigS) + "Res/Images" + a.imgv + "/";
        a.adConfig.arrOnStartDnlEvents = a.osde;
        a.adConfig.arrOnPlayEvents = a.ope;
        EBG.adaptor.optOut = a.adConfig.optOut = a.oo ? a.oo : 0;
        EBG.adaptor.histLen = a.adConfig.histLen = a.hl ? a.hl : 30;
        a.adConfig.sPublisherPlacementId = a.ppi ? a.ppi : "";
        a.adConfig.width = a.adConfig.width ? a.adConfig.width : "";
        a.adConfig.height = a.adConfig.height ? a.adConfig.height : "";
        a.adConfig.width = a.w ? a.w : a.adConfig.width;
        a.adConfig.height = a.h ? a.h : a.adConfig.height;
        a.adConfig.shouldCollectUrl = a.cu ? a.cu : 0;
        a.adConfig.sID = a.sid ? a.sid : "";
        a.adConfig.dlm = a.dlm ? a.dlm : 3;
        a.adConfig.testImp = a.t?!0 : !1;
        a.adConfig.usercookie = a.usercookie ? a.usercookie : "";
        a.adConfig.visibility = {};
        a.adConfig.visibility.mode = EBG.VisibilityMode.DEFAULT_MODE;
        if (a.IABEV)
            a.adConfig.visibility.mode = EBG.VisibilityMode.ENHANCED_MODE;
        else if (a.IABBV)
            a.adConfig.visibility.mode = EBG.VisibilityMode.BASIC_MODE;
        a.adConfig.visibility.iabMinSurface = a.IABMS;
        a.adConfig.visibility.iabMinDuration =
        a.IABMD;
        a.adConfig.visibility.agencyMinSurface = a.AgMS ? a.AgMS : a.IABMS;
        a.adConfig.visibility.agencyMinDuration = a.AgMD ? a.AgMD : a.IABMD;
        a.adConfig.visibility.advertiserMinSurface = a.AdMS ? a.AdMS : a.IABMS;
        a.adConfig.visibility.advertiserMinDuration = a.AdMD ? a.AdMD : a.IABMD;
        if (EBGInfra.isDefined(a.adConfig.interactionsToReport))
            a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.AD_START] = EBG.Interactions.SystemInts.AD_START;
        if (EBGInfra.isDefined(a.adConfig.interactionsToReport) && a.adConfig.interactionsToReport.visibility)
            a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE] =
            EBG.Interactions.SystemInts.VISIBILITY_RECORDABLE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY_RECORDABLE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_RECORDABLE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AGENCY] =
            EBG.Interactions.SystemInts.VISIBILITY_AGENCY, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_IAB] = EBG.Interactions.SystemInts.VISIBILITY_IAB, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION] = EBG.Interactions.SystemInts.VISIBILITY_ADVERTISER_DURATION, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION] = EBG.Interactions.SystemInts.VISIBILITY_AGENCY_DURATION, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE] =
            EBG.Interactions.SystemInts.VISIBILITY_AVG_AD_SURFACE, a.adConfig.interactionsToReport[EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE] = EBG.Interactions.SystemInts.VISIBILITY_AVG_SCREEN_SHARE;
        if (EBGInfra.isDefined(a.adConfig.defaultFlashName)&&!EBGInfra.isDefined(a.adConfig.defaultFlashPath))
            a.adConfig.defaultFlashPath = a.adConfig.imagesDir + "BannerAssets/" + a.adConfig.defaultFlashName;
        a.adConfig.offsetX = a.offsetX ? a.offsetX : 0;
        a.adConfig.offsetY = a.offsetY ? a.offsetY : 0;
        a.adConfig.adChoice = {};
        a.adConfig.adChoice.certificationProgram =
        a.AcCP;
        a.adConfig.adChoice.customUrl = a.CAcURL;
        a.adConfig.adChoice.includeMarker = a.adConfig.AcIncludeMarker;
        a.adConfig.adChoice.iconPosition = parseInt(a.adConfig.AcIconPosition);
        if (a.wm)
            a.adConfig.wmode = a.wm.toLowerCase();
        if (!EBGInfra.isDefined(a.adConfig.pushDownConfig) && "none" != a.disp)
            a.adConfig.display = EBGInfra.isDefined(a.disp) ? a.disp : "inline";
        a.adConfig.disableAutoExpand = EBGInfra.isDefined(a.dex) ? a.dex : 0;
        a.adConfig.aiE = a.aiE ? a.aiE : {};
        a.adConfig.appPool = a.appPool ? a.appPool : "BurstingPipe";
        a.adConfig.moduleInfo =
        a.h5mi ? a.h5mi : {};
        try {
            if ("undefined" != typeof gEbBAd && gEbBAd) {
                if (gEbBAd.panelsWMode)
                    a.adConfig.panelsWMode = gEbBAd.panelsWMode;
                if (gEbBAd.strWmode)
                    a.adConfig.wmode = gEbBAd.strWmode.toLowerCase()
                }
        } catch (c) {}
        if (EBG.getFeatureFlagValue(EBG.serverResponses[a.adConfig.uid].ffs, "sf") && EBG.adaptor.isSafeFrame()) {
            a.adConfig.isSafeFrame=!0;
            a.adConfig.expandDynamic = 0;
            for (var d in a.adConfig.panels) {
                b = a.adConfig.panels[d];
                try {
                    var e = $sf.ext.geom();
                    if (b.posType == EBG.PanelPositionType.PAGE_RELATIVE_PERCENTAGE || b.posType ==
                    EBG.PanelPositionType.VIEWPORT_RELATIVE_PERCENTAGE)
                        b.xPos = Math.round((e.win.w - b.width) * (b.xPos / 100)), b.yPos = Math.round((e.win.h - b.height) * (b.yPos / 100));
                    b.posType != EBG.PanelPositionType.BANNER_RELATIVE_PIXELS && (b.xPos -= e.self.l, b.yPos -= e.self.t)
                } catch (f) {
                    b.xPos = 0, b.yPos = 0
                }
                b.posType = EBG.PanelPositionType.BANNER_RELATIVE_PIXELS
            }
        }
    },
    _updateAdConfigToHandleOpenWindow: function(a) {
        a.adConfig.bsPath = EBG.bs;
        a.adConfig.pluId = EBG.pluId;
        a.adConfig.protocol = EBG.protocol;
        if (EBGInfra.isDefined(a.lid))
            a.adConfig.lineId =
            a.lid;
        a.adConfig.isPreview=!!a.pr
    }
};
try {
    var currentResponse = EBG.Initializer.initialize();
    if (currentResponse.adConfig.UiVz&&!currentResponse.requiresIframeBust && "Visibility" != currentResponse.tn) {
        var vizClone = EBG.cloneObj(currentResponse);
        vizClone.tn = vizClone.adConfig.templateName = "Visibility";
        vizClone.ifrm = 2;
        vizClone.soi = 0;
        ebOArr[ebOArr.length] = vizClone;
        var newEbSrc = ebSrc.replace(currentResponse.tn, vizClone.tn), newEbSrc = newEbSrc.replace(/ex(debug|_api|)\.js/ig, ".js"), newScript = document.createElement("SCRIPT");
        newScript.src = newEbSrc;
        vizClone.ebSrc = newEbSrc;
        if (currentResponse.adConfig.adStarted) {
            var target = document.getElementById(vizClone.phid);
            target && target.appendChild(newScript)
        } else {
            var sub = new EBG.Events.EventSubscription(EBG.Events.EventNames.AD_START, function() {
                var a = document.getElementById(vizClone.phid);
                a && a.appendChild(newScript)
            }, this);
            sub.timing = EBG.Events.EventTiming.ONTIME;
            EBG.eventMgr.subscribeToEvent(sub)
        }
    }
} catch (e$$108) {};

