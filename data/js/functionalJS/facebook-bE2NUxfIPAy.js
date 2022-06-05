/*!CK:3161301226!*/
/*1415600700,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["0kaIk"]);
}

__d("PixelRatioConst", [], function(a, b, c, d, e, f) {
    e.exports = {
        cookieName: "dpr"
    };
}, null);
__d("AjaxRequest", ["ErrorUtils", "Keys", "URI", "UserAgent_DEPRECATED", "getSameOriginTransport", "setTimeoutAcrossTransitions", "PHPQuerySerializer", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    function o(s, t, u) {
        this.xhr = k();
        if (!(t instanceof i))
            t = new i(t);
        if (u && s == 'GET') {
            t.setQueryData(u);
        } else 
            this._params = u;
        this.method = s;
        this.uri = t;
        this.xhr.open(s, t);
    }
    var p = window.XMLHttpRequest && ('withCredentials' in new XMLHttpRequest());
    o.supportsCORS = function() {
        return p;
    };
    o.ERROR = 'ar:error';
    o.TIMEOUT = 'ar:timeout';
    o.PROXY_ERROR = 'ar:proxy error';
    o.TRANSPORT_ERROR = 'ar:transport error';
    o.SERVER_ERROR = 'ar:http error';
    o.PARSE_ERROR = 'ar:parse error';
    o._inflight = [];
    function q() {
        var s = o._inflight;
        o._inflight = [];
        s.forEach(function(t) {
            t.abort();
        });
    }
    function r(s) {
        s.onJSON = s.onError = s.onSuccess = null;
        clearTimeout(s._timer);
        if (s.xhr && s.xhr.readyState < 4) {
            s.xhr.abort();
            s.xhr = null;
        }
        o._inflight = o._inflight.filter(function(t) {
            return t && t != s && t.xhr && t.xhr.readyState < 4;
        });
    }
    n(o.prototype, {
        timeout: 60000,
        streamMode: true,
        prelude: /^for \(;;\);/,
        status: null,
        _eol: - 1,
        _call: function(s) {
            if (this[s])
                this[s](this);
        },
        _parseStatus: function() {
            var s;
            try {
                this.status = this.xhr.status;
                s = this.xhr.statusText;
            } catch (t) {
                if (this.xhr.readyState >= 4) {
                    this.errorType = o.TRANSPORT_ERROR;
                    this.errorText = t.message;
                }
                return;
            }
            if (this.status === 0&&!(/^(file|ftp)/.test(this.uri))) {
                this.errorType = o.TRANSPORT_ERROR;
            } else if (this.status >= 100 && this.status < 200) {
                this.errorType = o.PROXY_ERROR;
            } else if (this.status >= 200 && this.status < 300) {
                return;
            } else if (this.status >= 300 && this.status < 400) {
                this.errorType = o.PROXY_ERROR;
            } else if (this.status >= 400 && this.status < 500) {
                this.errorType = o.SERVER_ERROR;
            } else if (this.status >= 500 && this.status < 600) {
                this.errorType = o.PROXY_ERROR;
            } else if (this.status == 1223) {
                return;
            } else if (this.status >= 12001 && this.status <= 12156) {
                this.errorType = o.TRANSPORT_ERROR;
            } else {
                s = 'unrecognized status code: ' + this.status;
                this.errorType = o.ERROR;
            }
            if (!this.errorText)
                this.errorText = s;
        },
        _parseResponse: function() {
            var s, t = this.xhr.readyState;
            try {
                s = this.xhr.responseText || '';
            } catch (u) {
                if (t >= 4) {
                    this.errorType = o.ERROR;
                    this.errorText = 'responseText not available - ' + u.message;
                }
                return;
            }
            while (this.xhr) {
                var v = this._eol + 1, w = this.streamMode ? s.indexOf('\n', v): s.length;
                if (w < 0 && t == 4)
                    w = s.length;
                if (w <= this._eol)
                    break;
                var x = s;
                if (this.streamMode)
                    x = s.substr(v, w - v).replace(/^\s*|\s*$/g, '');
                if (v === 0 && this.prelude)
                    if (this.prelude.test(x))
                        x = x.replace(this.prelude, '');
                this._eol = w;
                if (x) {
                    try {
                        this.json = JSON.parse(x);
                    } catch (u) {
                        var y = (/(<body[\S\s]+?<\/body>)/i).test(s) && RegExp.$1, z = {
                            message: u.message,
                            'char': v,
                            excerpt: ((v === 0 && y) || x).substr(512)
                        };
                        this.errorType = o.PARSE_ERROR;
                        this.errorText = 'parse error - ' + JSON.stringify(z);
                        return;
                    }
                    g.applyWithGuard(this._call, this, ['onJSON']);
                }
            }
        },
        _onReadyState: function() {
            var s = this.xhr && this.xhr.readyState || 0;
            if (this.status == null && s >= 2)
                this._parseStatus();
            if (!this.errorType && this.status != null)
                if ((s == 3 && this.streamMode) || s == 4)
                    this._parseResponse();
            if (this.errorType || s == 4) {
                this._time = Date.now() - this._sentAt;
                this._call(!this.errorType ? 'onSuccess' : 'onError');
                r(this);
            }
        },
        send: function(s) {
            this.xhr.onreadystatechange = function() {
                g.applyWithGuard(this._onReadyState, this, arguments);
            }.bind(this);
            var t = this.timeout;
            if (t)
                this._timer = l((function() {
                    this.errorType = o.TIMEOUT;
                    this.errorText = 'timeout';
                    this._time = Date.now() - this._sentAt;
                    this._call('onError');
                    r(this);
                }).bind(this), t);
            o._inflight.push(this);
            if (this.method == 'POST')
                this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            this._sentAt = Date.now();
            this.xhr.send(s ? m.serialize(s) : '');
        },
        abort: function() {
            r(this);
        },
        toString: function() {
            var s = '[AjaxRequest readyState=' + this.xhr.readyState;
            if (this.errorType)
                s += ' errorType=' + this.errorType + ' (' + this.errorText + ')';
            return s + ']';
        },
        toJSON: function() {
            var s = {
                json: this.json,
                status: this.status,
                errorType: this.errorType,
                errorText: this.errorText,
                time: this._time
            };
            if (this.errorType)
                s.uri = this.uri;
            for (var t in s)
                if (s[t] == null)
                    delete s[t];
            return s;
        }
    });
    if (window.addEventListener && j.firefox())
        window.addEventListener('keydown', function(event) {
            if (event.keyCode === h.ESC)
                event.prevent();
            }, false);
    if (window.attachEvent)
        window.attachEvent('onunload', q);
    e.exports = o;
}, null);
__d("FBAjaxRequest", ["AjaxRequest", "copyProperties", "getAsyncParams"], function(a, b, c, d, e, f, g, h, i) {
    function j(k, l, m) {
        m = h(i(k), m);
        var n = new g(k, l, m);
        n.streamMode = false;
        var o = n._call;
        n._call = function(p) {
            if (p == 'onJSON' && this.json) {
                if (this.json.error) {
                    this.errorType = g.SERVER_ERROR;
                    this.errorText = 'AsyncResponse error: ' + this.json.error;
                }
                this.json = this.json.payload;
            }
            o.apply(this, arguments);
        };
        n.ajaxReqSend = n.send;
        n.send = function(p) {
            this.ajaxReqSend(h(p, m));
        };
        return n;
    }
    e.exports = j;
}, null);
__d("CallbackManagerController", ["ErrorUtils", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    var i = function(j) {
        this._pendingIDs = [];
        this._allRequests = [undefined];
        this._callbackArgHandler = j;
    };
    h(i.prototype, {
        executeOrEnqueue: function(j, k, l) {
            l = l || {};
            var m = this._attemptCallback(k, j, l);
            if (m)
                return 0;
            this._allRequests.push({
                fn: k,
                request: j,
                options: l
            });
            var n = this._allRequests.length - 1;
            this._pendingIDs.push(n);
            return n;
        },
        unsubscribe: function(j) {
            delete this._allRequests[j];
        },
        reset: function() {
            this._allRequests = [];
        },
        getRequest: function(j) {
            return this._allRequests[j];
        },
        runPossibleCallbacks: function() {
            var j = this._pendingIDs;
            this._pendingIDs = [];
            var k = [];
            j.forEach(function(l) {
                var m = this._allRequests[l];
                if (!m)
                    return;
                if (this._callbackArgHandler(m.request, m.options)) {
                    k.push(l);
                } else 
                    this._pendingIDs.push(l);
            }.bind(this));
            k.forEach(function(l) {
                var m = this._allRequests[l];
                delete this._allRequests[l];
                this._attemptCallback(m.fn, m.request, m.options);
            }.bind(this));
        },
        _attemptCallback: function(j, k, l) {
            var m = this._callbackArgHandler(k, l);
            if (m) {
                var n = {
                    ids: k
                };
                g.applyWithGuard(j, n, m);
            }
            return !!m;
        }
    });
    e.exports = i;
}, null);
__d("Deferred", [], function(a, b, c, d, e, f) {
    var g = 0, h = 1, i = 2, j = 4, k = 'callbacks', l = 'errbacks', m = 'cancelbacks', n = 'completeCallbacks', o = [], p = o.slice, q = o.unshift;
    function r(u, v) {
        return u ? p.call(u, v) : o;
    }
    function s(u, v) {
        return v < u.length ? r(u, v) : o;
    }
    function t() {
        "use strict";
        this.$Deferred0 = g;
    }
    t.prototype.addCallback = function(u, v) {
        "use strict";
        return this.$Deferred1(h, this.$Deferred2(k), u, v, s(arguments, 2));
    };
    t.prototype.removeCallback = function(u, v) {
        "use strict";
        return this.$Deferred3(this.$Deferred2(k), u, v);
    };
    t.prototype.addCompleteCallback = function(u, v) {
        "use strict";
        return this.$Deferred1(null, this.$Deferred2(n), u, v, s(arguments, 2));
    };
    t.prototype.removeCompleteCallback = function(u, v) {
        "use strict";
        return this.$Deferred3(this.$Deferred2(n), u, v);
    };
    t.prototype.addErrback = function(u, v) {
        "use strict";
        return this.$Deferred1(i, this.$Deferred2(l), u, v, s(arguments, 2));
    };
    t.prototype.removeErrback = function(u, v) {
        "use strict";
        return this.$Deferred3(this.$Deferred2(l), u, v);
    };
    t.prototype.addCancelback = function(u, v) {
        "use strict";
        return this.$Deferred1(j, this.$Deferred2(m), u, v, s(arguments, 2));
    };
    t.prototype.removeCancelback = function(u, v) {
        "use strict";
        return this.$Deferred3(this.$Deferred2(m), u, v);
    };
    t.prototype.getStatus = function() {
        "use strict";
        return this.$Deferred0;
    };
    t.prototype.setStatus = function(u) {
        "use strict";
        var v;
        this.$Deferred0 = u;
        this.callbackArgs = r(arguments, 1);
        if (u === i) {
            v = l;
        } else if (u === h) {
            v = k;
        } else if (u === j)
            v = m;
        if (v)
            this.$Deferred4(this[v], this.callbackArgs);
        this.$Deferred4(this[n], this.callbackArgs);
        return this;
    };
    t.prototype.setTimeout = function(u) {
        "use strict";
        if (this.timeout)
            this.clearTimeout();
        this.$Deferred5 = this.$Deferred5 || this.fail.bind(this);
        this.timeout = window.setTimeout(this.$Deferred5, u);
    };
    t.prototype.clearTimeout = function() {
        "use strict";
        window.clearTimeout(this.timeout);
        delete this.timeout;
    };
    t.prototype.succeed = function() {
        "use strict";
        return this.$Deferred6(h, arguments);
    };
    t.prototype.fail = function() {
        "use strict";
        return this.$Deferred6(i, arguments);
    };
    t.prototype.cancel = function() {
        "use strict";
        delete this[k];
        delete this[l];
        return this.$Deferred6(j, arguments);
    };
    t.prototype.$Deferred6 = function(u, v) {
        "use strict";
        q.call(v, u);
        return this.setStatus.apply(this, v);
    };
    t.prototype.$Deferred2 = function(u) {
        "use strict";
        return this[u] || (this[u] = []);
    };
    t.prototype.then = function(u, v, w, x) {
        "use strict";
        var y = new t(), u, z, aa, ba = r(arguments, 0);
        if (typeof ba[0] === 'function')
            u = ba.shift();
        if (typeof ba[0] === 'function')
            z = ba.shift();
        if (typeof ba[0] === 'function')
            aa = ba.shift();
        var ca = ba.shift();
        if (u) {
            var da = [this.$Deferred7, this, y, 'succeed', u, ca].concat(ba);
            this.addCallback.apply(this, da);
        } else 
            this.addCallback(y.succeed, y);
        if (z) {
            var ea = [this.$Deferred7, this, y, 'fail', z, ca].concat(ba);
            this.addErrback.apply(this, ea);
        } else 
            this.addErrback(y.fail, y);
        if (aa) {
            var fa = [this.$Deferred7, this, y, 'cancel', aa, ca].concat(ba);
            this.addCancelback.apply(this, fa);
        } else 
            this.addCancelback(y.cancel, y);
        return y;
    };
    t.prototype.$Deferred1 = function(u, v, w, x, y) {
        "use strict";
        var z = this.getStatus();
        if ((!u && z !== g) || z === u) {
            w.apply(x || this, y.concat(this.callbackArgs));
        } else 
            v.push(w, x, y);
        return this;
    };
    t.prototype.$Deferred3 = function(u, v, w) {
        "use strict";
        for (var x = 0; x < u.length; x += 3)
            if (u[x] === v && (!w || u[x + 1] === w)) {
                u.splice(x, 3);
                if (w)
                    break;
                    x -= 3;
            }
        return this;
    };
    t.prototype.pipe = function(u) {
        "use strict";
        this.addCallback(u.succeed, u).addErrback(u.fail, u).addCancelback(u.cancel, u);
    };
    t.prototype.$Deferred4 = function(u, v) {
        "use strict";
        for (var w = 0; w < (u || o).length; w += 3)
            u[w].apply(u[w + 1] || this, (u[w + 2] || o).concat(v));
    };
    t.prototype.$Deferred7 = function(u, v, w, x) {
        "use strict";
        var y = r(arguments, 4), z = w.apply(x, y);
        if (z instanceof t) {
            z.pipe(u);
        } else 
            u[v](z);
    };
    t.STATUS_UNKNOWN = g;
    t.STATUS_SUCCEEDED = h;
    t.STATUS_CANCELED = j;
    t.STATUS_FAILED = i;
    e.exports = t;
}, null);
__d("KeyedCallbackManager", ["CallbackManagerController", "Deferred", "ErrorUtils", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = function() {
        this._resources = {};
        this._controller = new g(this._constructCallbackArg.bind(this));
    };
    j(k.prototype, {
        executeOrEnqueue: function(l, m) {
            if (!(l instanceof Array)) {
                var n = l, o = m;
                l = [l];
                m = function(p) {
                    o(p[n]);
                };
            }
            l = l.filter(function(p) {
                var q = (p !== null && p !== undefined);
                if (!q)
                    i.applyWithGuard(function() {
                        throw new Error('KeyedCallbackManager.executeOrEnqueue: key ' + JSON.stringify(p) + ' is invalid');
                    });
                return q;
            });
            return this._controller.executeOrEnqueue(l, m);
        },
        deferredExecuteOrEnqueue: function(l) {
            var m = new h();
            this.executeOrEnqueue(l, m.succeed.bind(m));
            return m;
        },
        unsubscribe: function(l) {
            this._controller.unsubscribe(l);
        },
        reset: function() {
            this._controller.reset();
            this._resources = {};
        },
        getUnavailableResources: function(l) {
            var m = this._controller.getRequest(l), n = [];
            if (m)
                n = m.request.filter(function(o) {
                    return !this._resources[o];
                }.bind(this));
            return n;
        },
        getUnavailableResourcesFromRequest: function(l) {
            var m = Array.isArray(l) ? l: [l];
            return m.filter(function(n) {
                if (n !== null && n !== undefined)
                    return !this._resources[n];
            }, this);
        },
        addResourcesAndExecute: function(l) {
            j(this._resources, l);
            this._controller.runPossibleCallbacks();
        },
        setResource: function(l, m) {
            this._resources[l] = m;
            this._controller.runPossibleCallbacks();
        },
        getResource: function(l) {
            return this._resources[l];
        },
        getAllResources: function() {
            return this._resources;
        },
        dumpResources: function() {
            var l = {};
            for (var m in this._resources) {
                var n = this._resources[m];
                if (typeof n === 'object')
                    n = j({}, n);
                l[m] = n;
            }
            return l;
        },
        _constructCallbackArg: function(l) {
            var m = {};
            for (var n = 0; n < l.length; n++) {
                var o = l[n], p = this._resources[o];
                if (typeof p == 'undefined')
                    return false;
                m[o] = p;
            }
            return [m];
        }
    });
    e.exports = k;
}, null);
__d("BaseAsyncLoader", ["KeyedCallbackManager", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    var i = {};
    function j(l, m, n) {
        var o = new g(), p = false, q = [];
        function r() {
            if (!q.length || p)
                return;
            p = true;
            setTimeout(t, 0);
        }
        function s(w) {
            p = false;
            w.forEach(o.unsubscribe.bind(o));
            r();
        }
        function t() {
            var w = {}, x = [];
            q = q.filter(function(z) {
                var aa = o.getUnavailableResources(z);
                if (aa.length) {
                    aa.forEach(function(ba) {
                        w[ba] = true;
                    });
                    x.push(z);
                    return true;
                }
                return false;
            });
            var y = Object.keys(w);
            if (y.length) {
                n(l, y, x, u.bind(null, x), v.bind(null, x));
            } else 
                p = false;
        }
        function u(w, x) {
            var y = x.payload[m] || x.payload;
            o.addResourcesAndExecute(y);
            s(w);
        }
        function v(w) {
            s(w);
        }
        return {
            get: function(w, x) {
                var y = o.executeOrEnqueue(w, x), z = o.getUnavailableResources(y);
                if (z.length) {
                    q.push(y);
                    r();
                }
            },
            getCachedKeys: function() {
                return Object.keys(o.getAllResources());
            },
            getNow: function(w) {
                return o.getResource(w) || null;
            },
            set: function(w) {
                o.addResourcesAndExecute(w);
            }
        };
    }
    function k(l, m) {
        throw ('BaseAsyncLoader can\'t be instantiated');
    }
    h(k.prototype, {
        _getLoader: function() {
            if (!i[this._endpoint])
                i[this._endpoint] = j(this._endpoint, this._type, this.send);
            return i[this._endpoint];
        },
        get: function(l, m) {
            return this._getLoader().get(l, m);
        },
        getCachedKeys: function() {
            return this._getLoader().getCachedKeys();
        },
        getNow: function(l) {
            return this._getLoader().getNow(l);
        },
        reset: function() {
            i[this._endpoint] = null;
        },
        set: function(l) {
            this._getLoader().set(l);
        }
    });
    e.exports = k;
}, null);
__d("AjaxLoader", ["copyProperties", "FBAjaxRequest", "BaseAsyncLoader"], function(a, b, c, d, e, f, g, h, i) {
    function j(k, l) {
        this._endpoint = k;
        this._type = l;
    }
    g(j.prototype, i.prototype);
    j.prototype.send = function(k, l, m, n, o) {
        var p = new h('GET', k, {
            ids: l
        });
        p.onJSON = function(q) {
            n({
                payload: q.json
            });
        };
        p.onError = o;
        p.send();
    };
    e.exports = j;
}, null);
__d("ChannelConstants", [], function(a, b, c, d, e, f) {
    var g = 'channel/', h = {
        ON_SHUTDOWN: g + 'shutdown',
        ON_INVALID_HISTORY: g + 'invalid_history',
        ON_CONFIG: g + 'config',
        ON_ENTER_STATE: g + 'enter_state',
        ON_EXIT_STATE: g + 'exit_state',
        ATTEMPT_RECONNECT: g + 'attempt_reconnect',
        OK: 'ok',
        ERROR: 'error',
        ERROR_MAX: 'error_max',
        ERROR_MISSING: 'error_missing',
        ERROR_MSG_TYPE: 'error_msg_type',
        ERROR_SHUTDOWN: 'error_shutdown',
        ERROR_STALE: 'error_stale',
        SYS_OWNER: 'sys_owner',
        SYS_NONOWNER: 'sys_nonowner',
        SYS_ONLINE: 'sys_online',
        SYS_OFFLINE: 'sys_offline',
        SYS_TIMETRAVEL: 'sys_timetravel',
        HINT_AUTH: 'shutdown auth',
        HINT_CONN: 'shutdown conn',
        HINT_DISABLED: 'shutdown disabled',
        HINT_INVALID_STATE: 'shutdown invalid state',
        HINT_MAINT: 'shutdown maint',
        HINT_UNSUPPORTED: 'shutdown unsupported',
        reason_Unknown: 0,
        reason_AsyncError: 1,
        reason_TooLong: 2,
        reason_Refresh: 3,
        reason_RefreshDelay: 4,
        reason_UIRestart: 5,
        reason_NeedSeq: 6,
        reason_PrevFailed: 7,
        reason_IFrameLoadGiveUp: 8,
        reason_IFrameLoadRetry: 9,
        reason_IFrameLoadRetryWorked: 10,
        reason_PageTransitionRetry: 11,
        reason_IFrameLoadMaxSubdomain: 12,
        reason_NoChannelInfo: 13,
        reason_NoChannelHost: 14,
        CAPABILITY_VOIP_INTEROP: 8,
        CAPABILITY_VIDEO: 32,
        FANTAIL_DEBUG: 'DEBUG',
        FANTAIL_WARN: 'WARN',
        FANTAIL_INFO: 'INFO',
        FANTAIL_ERROR: 'ERROR',
        getArbiterType: function(i) {
            return g + 'message:' + i;
        }
    };
    e.exports = h;
}, null);
__d("JSLogger", [], function(a, b, c, d, e, f) {
    var g = {
        MAX_HISTORY: 500,
        counts: {},
        categories: {},
        seq: 0,
        pageId: (Math.random() * 2147483648 | 0).toString(36),
        forwarding: false
    };
    function h(m) {
        if (m == '/' || m.indexOf('/', 1) < 0)
            return false;
        var n = /^\/(v\d+\.\d\d?|head)\//.test(m);
        if (n)
            return (/^\/(dialog|plugins)\//).test(m.substring(m.indexOf('/', 1)));
        return (/^\/(dialog|plugins)\//).test(m);
    }
    function i(m) {
        if (m instanceof Error && a.ErrorUtils)
            m = a.ErrorUtils.normalizeError(m);
        try {
            return JSON.stringify(m);
        } catch (n) {
            return '{}';
        }
    }
    function j(m, event, n) {
        if (!g.counts[m])
            g.counts[m] = {};
        if (!g.counts[m][event])
            g.counts[m][event] = 0;
        n = n == null ? 1 : Number(n);
        g.counts[m][event] += isFinite(n) ? n : 0;
    }
    g.logAction = function(event, m, n) {
        if (this.type == 'bump') {
            j(this.cat, event, m);
        } else if (this.type == 'rate') {
            (m && j(this.cat, event + '_n', n));
            j(this.cat, event + '_d', n);
        } else {
            var o = {
                cat: this.cat,
                type: this.type,
                event: event,
                data: m != null ? i(m): null,
                date: Date.now(),
                seq: g.seq++
            };
            g.head = g.head ? (g.head.next = o) : (g.tail = o);
            while (g.head.seq - g.tail.seq > g.MAX_HISTORY)
                g.tail = g.tail.next;
            return o;
        }
    };
    function k(m) {
        if (!g.categories[m]) {
            g.categories[m] = {};
            var n = function(o) {
                var p = {
                    cat: m,
                    type: o
                };
                g.categories[m][o] = function() {
                    g.forwarding = false;
                    var q = null;
                    if (document.domain != 'facebook.com')
                        return;
                    q = g.logAction;
                    if (h(location.pathname)) {
                        g.forwarding = false;
                    } else 
                        try {
                            q = a.top.require('JSLogger')._.logAction;
                            g.forwarding = q !== g.logAction;
                    } catch (r) {}(q && q.apply(p, arguments));
                };
            };
            n('debug');
            n('log');
            n('warn');
            n('error');
            n('bump');
            n('rate');
        }
        return g.categories[m];
    }
    function l(m, n) {
        var o = [];
        for (var p = n || g.tail; p; p = p.next)
            if (!m || m(p)) {
                var q = {
                    type: p.type,
                    cat: p.cat,
                    date: p.date,
                    event: p.event,
                    seq: p.seq
                };
                if (p.data)
                    q.data = JSON.parse(p.data);
                    o.push(q);
            }
        return o;
    }
    e.exports = {
        _: g,
        DUMP_EVENT: 'jslogger/dump',
        create: k,
        getEntries: l
    };
}, null);
__d("BanzaiODS", ["Banzai", "invariant"], function(a, b, c, d, e, f, g, h) {
    function i() {
        var k = {}, l = {};
        function m(n, o, p, q) {
            if (p === undefined)
                p = 1;
            if (q === undefined)
                q = 1;
            if (n in l)
                if (l[n] <= 0) {
                    return;
                } else 
                    p/=l[n];
            var r = k[n] || (k[n] = {}), s = r[o] || (r[o] = [0]);
            p = Number(p);
            q = Number(q);
            if (!isFinite(p) ||!isFinite(q))
                return;
            s[0] += p;
            if (arguments.length >= 4) {
                if (!s[1])
                    s[1] = 0;
                s[1] += q;
            }
        }
        return {
            setEntitySample: function(n, o) {
                l[n] = Math.random() < o ? o : 0;
            },
            bumpEntityKey: function(n, o, p) {
                m(n, o, p);
            },
            bumpFraction: function(n, o, p, q) {
                m(n, o, p, q);
            },
            flush: function(n) {
                for (var o in k)
                    g.post('ods:' + o, k[o], n);
                k = {};
            }
        };
    }
    var j = i();
    j.create = i;
    g.subscribe(g.SEND, j.flush.bind(j, null));
    e.exports = j;
}, null);
__d("throwImmediate", ["setImmediate"], function(a, b, c, d, e, f, g) {
    'use strict';
    function h(j) {
        throw j;
    }
    function i(j) {
        g(h, j);
    }
    e.exports = i;
}, null);
__d("Promise", ["ES6Promise", "invariant", "throwImmediate"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.prototype;
    j["finally"] = function(k) {
        return this.then(k, k);
    };
    j.done = function(k, l) {
        this.then(k, l).then(null, i);
    };
    g.allObject = function(k) {
        h(!Array.isArray(k));
        var l = Object.keys(k);
        return g.all(l.map(function(m) {
            return k[m];
        })).then(function(m) {
            var n = {};
            m.forEach(function(o, p) {
                n[l[p]] = o;
            });
            return n;
        });
    };
    e.exports = g;
}, null);
__d("XChatUserInfoAllAsyncControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/chat\/user_info_all\/", {
        viewer: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("ShortProfilesBootstrapper", ["AsyncRequest", "BanzaiODS", "CurrentUser", "JSLogger", "Promise", "XChatUserInfoAllAsyncControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = 5, n = 10000, o = new l().setInt('viewer', i.getID()).getURI(), p = j.create('short_profiles');
    function q(r) {
        this.$ShortProfilesBootstrapper0 = r;
        this.$ShortProfilesBootstrapper1 = new k(function(s, t) {
            this.$ShortProfilesBootstrapper2 = s;
            this.$ShortProfilesBootstrapper3 = t;
        }.bind(this));
        this.$ShortProfilesBootstrapper4 = false;
        this.$ShortProfilesBootstrapper5 = null;
        this.$ShortProfilesBootstrapper6 = 0;
        this.$ShortProfilesBootstrapper7 = 0;
        this.$ShortProfilesBootstrapper8 = 0;
        this.$ShortProfilesBootstrapper9 = false;
        this.$ShortProfilesBootstrappera = false;
    }
    q.prototype.fetchAll = function() {
        this.$ShortProfilesBootstrapperb();
        if (this.$ShortProfilesBootstrapper4 || this.$ShortProfilesBootstrapper5)
            return this.$ShortProfilesBootstrapper1;
        if (this.$ShortProfilesBootstrapper6 >= m) {
            this.$ShortProfilesBootstrapperc();
            return this.$ShortProfilesBootstrapper1;
        }
        this.$ShortProfilesBootstrapper6++;
        this.$ShortProfilesBootstrapperd();
        this.$ShortProfilesBootstrapper5 = new g(o).setHandler(function(r) {
            this.$ShortProfilesBootstrapper5 = null;
            this.$ShortProfilesBootstrapper4 = true;
            this.$ShortProfilesBootstrappere();
            this.$ShortProfilesBootstrapper0(r.payload);
            this.$ShortProfilesBootstrapper2();
        }.bind(this)).setErrorHandler(function() {
            this.$ShortProfilesBootstrapper5 = null;
            this.$ShortProfilesBootstrapper7++;
            this.$ShortProfilesBootstrapperf();
        }.bind(this)).setTimeoutHandler(n, function() {
            this.$ShortProfilesBootstrapper5 = null;
            this.$ShortProfilesBootstrapper8++;
            this.$ShortProfilesBootstrapperg();
        }.bind(this));
        this.$ShortProfilesBootstrapper5.send();
        return this.$ShortProfilesBootstrapper1;
    };
    q.prototype.isBootstrapped = function() {
        return this.$ShortProfilesBootstrapper4;
    };
    q.prototype.isBootstrapping = function() {
        return !!this.$ShortProfilesBootstrapper5;
    };
    q.prototype.getAttemptCount = function() {
        return this.$ShortProfilesBootstrapper6;
    };
    q.prototype.getErrorCount = function() {
        return this.$ShortProfilesBootstrapper7;
    };
    q.prototype.getTimeoutCount = function() {
        return this.$ShortProfilesBootstrapper8;
    };
    q.prototype.$ShortProfilesBootstrapperb = function() {
        if (!this.$ShortProfilesBootstrapper9) {
            p.log('bootstrap_start');
            h.bumpEntityKey('chat.web', 'typeahead.bootstrap.starts');
            this.$ShortProfilesBootstrapper9 = true;
        }
    };
    q.prototype.$ShortProfilesBootstrapperd = function() {
        p.log('bootstrap_attempt');
        h.bumpEntityKey('chat.web', 'typeahead.bootstrap.attempts');
    };
    q.prototype.$ShortProfilesBootstrappere = function() {
        p.log('bootstrap_success');
        h.bumpEntityKey('chat.web', 'typeahead.bootstrap.successes');
        if (this.$ShortProfilesBootstrapper6 > 1)
            h.bumpEntityKey('chat.web', 'typeahead.bootstrap.successes_after_retries');
    };
    q.prototype.$ShortProfilesBootstrapperf = function() {
        p.log('bootstrap_error');
        h.bumpEntityKey('chat.web', 'typeahead.bootstrap.errors');
    };
    q.prototype.$ShortProfilesBootstrapperg = function() {
        p.log('bootstrap_timeout');
        h.bumpEntityKey('chat.web', 'typeahead.bootstrap.timeouts');
    };
    q.prototype.$ShortProfilesBootstrapperc = function() {
        if (!this.$ShortProfilesBootstrappera) {
            p.log('bootstrap_giveup');
            h.bumpEntityKey('chat.web', 'typeahead.bootstrap.giveups');
            this.$ShortProfilesBootstrappera = true;
            this.$ShortProfilesBootstrapper3();
        }
    };
    e.exports = q;
}, null);
__d("XChatUserInfoAsyncControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/chat\/user_info\/", {
        ids: {
            type: "IntVector"
        }
    });
}, null);
__d("ShortProfiles", ["AjaxLoader", "Arbiter", "JSLogger", "ShortProfilesBootstrapper", "XChatUserInfoAsyncControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = null, m = new g(new k().getURI().toString(), 'profiles'), n = {
        get: function(p, q) {
            this.getMulti([p], function(r) {
                q(r[p], p);
            });
        },
        getMulti: function(p, q) {
            function r(s) {
                q(o(s));
            }
            m.get(p, r);
        },
        getNow: function(p) {
            return o(m.getNow(p) || null);
        },
        getNowUnsafe: function(p) {
            return m.getNow(p) || null;
        },
        getCachedProfileIDs: function() {
            return m.getCachedKeys();
        },
        hasAll: function() {
            return !!l && l.isBootstrapped();
        },
        fetchAll: function() {
            if (!l)
                l = new j(function(p) {
                    m.set(p);
                });
            return l.fetchAll();
        },
        set: function(p, q) {
            var r = {};
            r[p] = q;
            this.setMulti(r);
        },
        setMulti: function(p) {
            m.set(o(p));
        }
    };
    function o(p) {
        return JSON.parse(JSON.stringify(p));
    }
    h.subscribe(i.DUMP_EVENT, function(p, q) {
        var r = n.getCachedProfileIDs(), s = i.getEntries(function(t) {
            return (t.cat == 'short_profiles' || t.cat == 'chat_typeahead');
        });
        q.chat_typeahead = {
            bootstrapped: l && l.isBootstrapped(),
            bootstrapping: l && l.isBootstrapping(),
            bootstrap_attempts: l && l.getAttemptCount(),
            bootstrap_errors: l && l.getErrorCount(),
            bootstrap_timeouts: l && l.getTimeoutCount(),
            entries: r,
            entry_count: r.length,
            history: s
        };
    });
    e.exports = n;
}, null);
__d("BanzaiScuba", ["Banzai", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    var i = "scuba_sample";
    function j(m, n, o) {
        this.fields = {};
        this.post = function(p) {
            if (!m)
                return;
            var q = {};
            h(q, this.fields);
            q._ds = m;
            if (n)
                q._lid = n;
            q._options = o;
            g.post(i, q, p);
            this.post = function() {};
            this.posted = true;
        };
        this.lid = n;
        return this;
    }
    function k(m, n, o) {
        if (!this.fields[m])
            this.fields[m] = {};
        this.fields[m][n] = o;
        return this;
    }
    function l(m) {
        return function(n, o) {
            if (this.posted)
                return this;
            return k.call(this, m, n, o);
        };
    }
    h(j.prototype, {
        post: function() {},
        addNormal: l('normal'),
        addInteger: l('int'),
        addDenorm: l('denorm'),
        addTagset: l('tags'),
        addNormVector: l('normvector')
    });
    e.exports = j;
}, null);
__d("BasicVector", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        "use strict";
        this.x = h;
        this.y = i;
    }
    g.prototype.derive = function(h, i) {
        "use strict";
        return new g(h, i);
    };
    g.prototype.toString = function() {
        "use strict";
        return '(' + this.x + ', ' + this.y + ')';
    };
    g.prototype.add = function(h, i) {
        "use strict";
        if (h instanceof g) {
            i = h.y;
            h = h.x;
        }
        var j = parseFloat(h), k = parseFloat(i);
        return this.derive(this.x + j, this.y + k);
    };
    g.prototype.mul = function(h, i) {
        "use strict";
        if (i === undefined)
            i = h;
        return this.derive(this.x * h, this.y * i);
    };
    g.prototype.div = function(h, i) {
        "use strict";
        if (i === undefined)
            i = h;
        return this.derive(this.x * 1 / h, this.y * 1 / i);
    };
    g.prototype.sub = function(h, i) {
        "use strict";
        if (arguments.length === 1) {
            return this.add(h.mul( - 1));
        } else 
            return this.add( - h, - i);
    };
    g.prototype.distanceTo = function(h) {
        "use strict";
        return this.sub(h).magnitude();
    };
    g.prototype.magnitude = function() {
        "use strict";
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    g.prototype.rotate = function(h) {
        "use strict";
        return this.derive(this.x * Math.cos(h) - this.y * Math.sin(h), this.x * Math.sin(h) + this.y * Math.cos(h));
    };
    e.exports = g;
}, null);
__d("ServerTime", ["InitialServerTime"], function(a, b, c, d, e, f, g) {
    k(g.serverTime);
    var h;
    function i() {
        return Date.now() - h;
    }
    function j() {
        return h;
    }
    function k(l) {
        h = Date.now() - l;
    }
    e.exports = {
        getMillis: i,
        getOffsetMillis: j,
        update: k,
        get: i,
        getSkew: j
    };
}, null);
__d("arrayContains", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        return h.indexOf(i)!=-1;
    }
    e.exports = g;
}, null);
__d("getOffsetParent", ["Style"], function(a, b, c, d, e, f, g) {
    function h(i) {
        var j = i.parentNode;
        if (!j || j === document.documentElement)
            return document.documentElement;
        if (g.get(j, 'position') !== 'static')
            return j;
        return j === document.body ? document.documentElement : h(j);
    }
    e.exports = h;
}, null);
__d("getUnboundedScrollPosition", [], function(a, b, c, d, e, f) {
    "use strict";
    function g(h) {
        if (h === window)
            return {
                x: window.pageXOffset || document.documentElement.scrollLeft,
                y: window.pageYOffset || document.documentElement.scrollTop
            };
        return {
            x: h.scrollLeft,
            y: h.scrollTop
        };
    }
    e.exports = g;
}, null);
__d("nativeRequestAnimationFrame", [], function(a, b, c, d, e, f) {
    var g = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    e.exports = g;
}, null);
__d("requestAnimationFrame", ["emptyFunction", "nativeRequestAnimationFrame"], function(a, b, c, d, e, f, g, h) {
    var i = 0, j = h || function(k) {
        var l = Date.now(), m = Math.max(0, 16 - (l - i));
        i = l + m;
        return a.setTimeout(function() {
            k(Date.now());
        }, m);
    };
    j(g);
    e.exports = j;
}, null);
__d("DOMVector", ["BasicVector", "getDocumentScrollElement", "getElementPosition", "getUnboundedScrollPosition", "getViewportDimensions"], function(a, b, c, d, e, f, g, h, i, j, k) {
    for (var l in g)
        if (g.hasOwnProperty(l))
            n[l] = g[l];
    var m = g === null ? null: g.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = g;
    function n(o, p, q) {
        "use strict";
        g.call(this, o, p);
        this.domain = q || 'pure';
    }
    n.prototype.derive = function(o, p, q) {
        "use strict";
        return new n(o, p, q || this.domain);
    };
    n.prototype.add = function(o, p) {
        "use strict";
        if (o instanceof n && o.getDomain() !== 'pure')
            o = o.convertTo(this.domain);
        return m.add.call(this, o, p);
    };
    n.prototype.convertTo = function(o) {
        "use strict";
        if (o != 'pure' && o != 'viewport' && o != 'document')
            return this.derive(0, 0);
        if (o == this.domain)
            return this.derive(this.x, this.y, this.domain);
        if (o == 'pure')
            return this.derive(this.x, this.y);
        if (this.domain == 'pure')
            return this.derive(0, 0);
        var p = n.getScrollPosition('document'), q = this.x, r = this.y;
        if (this.domain == 'document') {
            q -= p.x;
            r -= p.y;
        } else {
            q += p.x;
            r += p.y;
        }
        return this.derive(q, r, o);
    };
    n.prototype.getDomain = function() {
        "use strict";
        return this.domain;
    };
    n.from = function(o, p, q) {
        "use strict";
        return new n(o, p, q);
    };
    n.getScrollPosition = function(o) {
        "use strict";
        o = o || 'document';
        var p = j(window);
        return this.from(p.x, p.y, 'document').convertTo(o);
    };
    n.getElementPosition = function(o, p) {
        "use strict";
        p = p || 'document';
        var q = i(o);
        return this.from(q.x, q.y, 'viewport').convertTo(p);
    };
    n.getElementDimensions = function(o) {
        "use strict";
        return this.from(o.offsetWidth, o.offsetHeight);
    };
    n.getViewportDimensions = function() {
        "use strict";
        var o = k();
        return this.from(o.width, o.height, 'viewport');
    };
    n.getViewportWithoutScrollbarDimensions = function() {
        "use strict";
        var o = k.withoutScrollbars();
        return this.from(o.width, o.height, 'viewport');
    };
    n.getDocumentDimensions = function(o) {
        "use strict";
        var p = h(o);
        return this.from(p.scrollWidth, p.scrollHeight, 'document');
    };
    e.exports = n;
}, null);
__d("fbt", ["copyProperties", "substituteTokens", "invariant", "FbtLogger", "FbtQTOverrides"], function(a, b, c, d, e, f, g, h, i) {
    var j = b('FbtLogger').logger, k = b('FbtQTOverrides').overrides, l = {
        INDEX: 0,
        SUBSTITUTION: 1
    }, m = function() {};
    m._ = function(n, o) {
        var p = {}, q = n;
        if (o !== undefined)
            for (var r = 0; r < o.length; r++) {
                var s = o[r][l.INDEX];
                if (s !== null) {
                    i(s in q);
                    q = q[s];
                }
                g(p, o[r][l.SUBSTITUTION]);
            }
        if (typeof q === 'string') {
            return h(q, p);
        } else if (Array.isArray(q)) {
            var t = q[0], u = q[1];
            t = k[u] || t;
            m.logImpression(u);
            return h(t, p);
        } else 
            i(false);
    };
    m['enum'] = function(n, o) {
        return [n, null];
    };
    m.param = function(n, o) {
        var p = {};
        p[n] = o;
        return [null, p];
    };
    m.logImpression = function(n) {
        if (j)
            j.logImpression(n);
        return n;
    };
    e.exports = m;
}, null);
__d("LogHistory", ["createArrayFrom"], function(a, b, c, d, e, f, g) {
    var h = {}, i = [], j = 0, k = 500;
    function l(t, u, v) {
        var event = v.shift();
        i[j++] = {
            date: Date.now(),
            level: t,
            category: u,
            event: event,
            args: v
        };
        if (j >= k)
            j = 0;
    }
    function m(t) {
        "use strict";
        this.category = t;
    }
    m.prototype.debug = function(event) {
        "use strict";
        l('debug', this.category, g(arguments));
        return this;
    };
    m.prototype.log = function(event) {
        "use strict";
        l('log', this.category, g(arguments));
        return this;
    };
    m.prototype.warn = function(event) {
        "use strict";
        l('warn', this.category, g(arguments));
        return this;
    };
    m.prototype.error = function(event) {
        "use strict";
        l('error', this.category, g(arguments));
        return this;
    };
    function n(t) {
        if (!h[t])
            h[t] = new m(t);
        return h[t];
    }
    function o() {
        return i.length >= k ? (i.slice(j, k)).concat(i.slice(0, j)) : i.slice(0);
    }
    function p() {
        i.length = 0;
        j = 0;
    }
    function q(t) {}
    function r(t) {
        return t.map(function(u) {
            var v = /\d\d:\d\d:\d\d/.exec(new Date(u.date));
            return [v && v[0], u.level, u.category, u.event, JSON.stringify(u.args)].join(' | ');
        }).join('\n');
    }
    var s = {
        MAX: k,
        getInstance: n,
        getEntries: o,
        clearEntries: p,
        toConsole: q,
        formatEntries: r
    };
    e.exports = s;
}, null);
__d("EventPluginHub", ["EventPluginRegistry", "EventPluginUtils", "accumulateInto", "forEachAccumulated", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = {}, m = null, n = function(event) {
        if (event) {
            var r = h.executeDispatch, s = g.getPluginModuleForEvent(event);
            if (s && s.executeDispatch)
                r = s.executeDispatch;
            h.executeDispatchesInOrder(event, r);
            if (!event.isPersistent())
                event.constructor.release(event);
        }
    }, o = null;
    function p() {
        var r=!o ||!o.traverseTwoPhase ||!o.traverseEnterLeave;
        if (r)
            throw new Error('InstanceHandle not injected before use!');
    }
    var q = {
        injection: {
            injectMount: h.injection.injectMount,
            injectInstanceHandle: function(r) {
                o = r;
            },
            getInstanceHandle: function() {
                return o;
            },
            injectEventPluginOrder: g.injectEventPluginOrder,
            injectEventPluginsByName: g.injectEventPluginsByName
        },
        eventNameDispatchConfigs: g.eventNameDispatchConfigs,
        registrationNameModules: g.registrationNameModules,
        putListener: function(r, s, t) {
            k(!t || typeof t === 'function');
            var u = l[s] || (l[s] = {});
            u[r] = t;
        },
        getListener: function(r, s) {
            var t = l[s];
            return t && t[r];
        },
        deleteListener: function(r, s) {
            var t = l[s];
            if (t)
                delete t[r];
        },
        deleteAllListeners: function(r) {
            for (var s in l)
                delete l[s][r];
        },
        extractEvents: function(r, s, t, u) {
            var v, w = g.plugins;
            for (var x = 0, y = w.length; x < y; x++) {
                var z = w[x];
                if (z) {
                    var aa = z.extractEvents(r, s, t, u);
                    if (aa)
                        v = i(v, aa);
                }
            }
            return v;
        },
        enqueueEvents: function(r) {
            if (r)
                m = i(m, r);
        },
        processEventQueue: function() {
            var r = m;
            m = null;
            j(r, n);
            k(!m);
        },
        __purge: function() {
            l = {};
        },
        __getListenerBank: function() {
            return l;
        }
    };
    e.exports = q;
}, null);
__d("ReactServerRendering", ["ReactElement", "ReactInstanceHandles", "ReactMarkupChecksum", "ReactServerRenderingTransaction", "instantiateReactComponent", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    function m(o) {
        l(g.isValidElement(o));
        var p;
        try {
            var q = h.createReactRootID();
            p = j.getPooled(false);
            return p.perform(function() {
                var r = k(o, null), s = r.mountComponent(q, p, 0);
                return i.addChecksumToMarkup(s);
            }, null);
        } finally {
            j.release(p);
        }
    }
    function n(o) {
        l(g.isValidElement(o));
        var p;
        try {
            var q = h.createReactRootID();
            p = j.getPooled(true);
            return p.perform(function() {
                var r = k(o, null);
                return r.mountComponent(q, p, 0);
            }, null);
        } finally {
            j.release(p);
        }
    }
    e.exports = {
        renderToString: m,
        renderToStaticMarkup: n
    };
}, null);
__d("ReactMultiChild", ["ReactComponent", "ReactMultiChildUpdateTypes", "flattenChildren", "instantiateReactComponent", "shouldUpdateReactComponent"], function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    var l = 0, m = [], n = [];
    function o(v, w, x) {
        m.push({
            parentID: v,
            parentNode: null,
            type: h.INSERT_MARKUP,
            markupIndex: n.push(w) - 1,
            textContent: null,
            fromIndex: null,
            toIndex: x
        });
    }
    function p(v, w, x) {
        m.push({
            parentID: v,
            parentNode: null,
            type: h.MOVE_EXISTING,
            markupIndex: null,
            textContent: null,
            fromIndex: w,
            toIndex: x
        });
    }
    function q(v, w) {
        m.push({
            parentID: v,
            parentNode: null,
            type: h.REMOVE_NODE,
            markupIndex: null,
            textContent: null,
            fromIndex: w,
            toIndex: null
        });
    }
    function r(v, w) {
        m.push({
            parentID: v,
            parentNode: null,
            type: h.TEXT_CONTENT,
            markupIndex: null,
            textContent: w,
            fromIndex: null,
            toIndex: null
        });
    }
    function s() {
        if (m.length) {
            g.BackendIDOperations.dangerouslyProcessChildrenUpdates(m, n);
            t();
        }
    }
    function t() {
        m.length = 0;
        n.length = 0;
    }
    var u = {
        Mixin: {
            mountChildren: function(v, w) {
                var x = i(v), y = [], z = 0;
                this._renderedChildren = x;
                for (var aa in x) {
                    var ba = x[aa];
                    if (x.hasOwnProperty(aa)) {
                        var ca = j(ba, null);
                        x[aa] = ca;
                        var da = this._rootNodeID + aa, ea = ca.mountComponent(da, w, this._mountDepth + 1);
                        ca._mountIndex = z;
                        y.push(ea);
                        z++;
                    }
                }
                return y;
            },
            updateTextContent: function(v) {
                l++;
                var w = true;
                try {
                    var x = this._renderedChildren;
                    for (var y in x)
                        if (x.hasOwnProperty(y))
                            this._unmountChildByName(x[y], y);
                    this.setTextContent(v);
                    w = false;
                } finally {
                    l--;
                    if (!l)
                        w ? t() : s();
                }
            },
            updateChildren: function(v, w) {
                l++;
                var x = true;
                try {
                    this._updateChildren(v, w);
                    x = false;
                } finally {
                    l--;
                    if (!l)
                        x ? t() : s();
                }
            },
            _updateChildren: function(v, w) {
                var x = i(v), y = this._renderedChildren;
                if (!x&&!y)
                    return;
                var z, aa = 0, ba = 0;
                for (z in x) {
                    if (!x.hasOwnProperty(z))
                        continue;
                    var ca = y && y[z], da = ca && ca._currentElement, ea = x[z];
                    if (k(da, ea)) {
                        this.moveChild(ca, ba, aa);
                        aa = Math.max(ca._mountIndex, aa);
                        ca.receiveComponent(ea, w);
                        ca._mountIndex = ba;
                    } else {
                        if (ca) {
                            aa = Math.max(ca._mountIndex, aa);
                            this._unmountChildByName(ca, z);
                        }
                        var fa = j(ea, null);
                        this._mountChildByNameAtIndex(fa, z, ba, w);
                    }
                    ba++;
                }
                for (z in y)
                    if (y.hasOwnProperty(z)&&!(x && x[z]))
                        this._unmountChildByName(y[z], z);
            },
            unmountChildren: function() {
                var v = this._renderedChildren;
                for (var w in v) {
                    var x = v[w];
                    if (x.unmountComponent)
                        x.unmountComponent();
                }
                this._renderedChildren = null;
            },
            moveChild: function(v, w, x) {
                if (v._mountIndex < x)
                    p(this._rootNodeID, v._mountIndex, w);
            },
            createChild: function(v, w) {
                o(this._rootNodeID, w, v._mountIndex);
            },
            removeChild: function(v) {
                q(this._rootNodeID, v._mountIndex);
            },
            setTextContent: function(v) {
                r(this._rootNodeID, v);
            },
            _mountChildByNameAtIndex: function(v, w, x, y) {
                var z = this._rootNodeID + w, aa = v.mountComponent(z, y, this._mountDepth + 1);
                v._mountIndex = x;
                this.createChild(v, aa);
                this._renderedChildren = this._renderedChildren || {};
                this._renderedChildren[w] = v;
            },
            _unmountChildByName: function(v, w) {
                this.removeChild(v);
                v._mountIndex = null;
                v.unmountComponent();
                delete this._renderedChildren[w];
            }
        }
    };
    e.exports = u;
}, null);
__d("SubscriptionsHandler", ["invariant"], function(a, b, c, d, e, f, g) {
    function h(k) {
        return k.remove || k.reset || k.unsubscribe;
    }
    function i(k) {
        var l = h(k);
        l.call(k);
    }
    function j() {
        "use strict";
        this._subscriptions = [];
    }
    j.prototype.addSubscriptions = function() {
        "use strict";
        for (var k = [], l = 0, m = arguments.length; l < m; l++)
            k.push(arguments[l]);
        k.forEach(function(n) {
            var o = h(n);
            g(o);
        });
        if (this._subscriptions) {
            this._subscriptions = this._subscriptions.concat(k);
        } else 
            k.forEach(i);
    };
    j.prototype.engage = function() {
        "use strict";
        this._subscriptions = this._subscriptions || [];
    };
    j.prototype.release = function() {
        "use strict";
        if (this._subscriptions) {
            this._subscriptions.forEach(i);
            this._subscriptions = null;
        }
    };
    e.exports = j;
}, null);
__d("getContextualParent", ["ge"], function(a, b, c, d, e, f, g) {
    function h(i, j) {
        var k, l = false;
        do {
            if (i.getAttribute && (k = i.getAttribute('data-ownerid'))) {
                i = g(k);
                l = true;
            } else 
                i = i.parentNode;
        }
        while (j && i&&!l);
        return i;
    }
    e.exports = h;
}, null);
__d("collectDataAttributes", ["getContextualParent"], function(a, b, c, d, e, f, g) {
    function h(i, j) {
        var k = {}, l = {}, m = j.length, n;
        for (n = 0; n < m; ++n) {
            k[j[n]] = {};
            l[j[n]] = 'data-' + j[n];
        }
        var o = {
            tn: '',
            "tn-debug": ','
        };
        while (i) {
            if (i.getAttribute)
                for (n = 0; n < m; ++n) {
                    var p = i.getAttribute(l[j[n]]);
                    if (p) {
                        var q = JSON.parse(p);
                        for (var r in q)
                            if (o[r] !== undefined) {
                                if (k[j[n]][r] === undefined)
                                    k[j[n]][r] = [];
                                    k[j[n]][r].push(q[r]);
                            } else if (k[j[n]][r] === undefined)
                                k[j[n]][r] = q[r];
                    }
                }
            i = g(i);
        }
        for (var s in k)
            for (var t in o)
                if (k[s][t] !== undefined)
                    k[s][t] = k[s][t].join(o[t]);
        return k;
    }
    e.exports = h;
}, null);
__d("throttle", ["copyProperties"], function(a, b, c, d, e, f, g) {
    function h(j, k, l) {
        return i(j, k, l, false, false);
    }
    g(h, {
        acrossTransitions: function(j, k, l) {
            return i(j, k, l, true, false);
        },
        withBlocking: function(j, k, l) {
            return i(j, k, l, false, true);
        },
        acrossTransitionsWithBlocking: function(j, k, l) {
            return i(j, k, l, true, true);
        }
    });
    function i(j, k, l, m, n) {
        if (k == null)
            k = 100;
        var o, p, q = null, r = function() {
            p = Date.now();
            if (o) {
                j.apply(l, o);
                o = null;
                q = setTimeout(r, k, !m);
            } else 
                q = null;
        };
        return function s() {
            o = arguments;
            if (q === null || (Date.now() - p > k))
                if (n) {
                    r();
                } else 
                    q = setTimeout(r, 0, !m);
        };
    }
    e.exports = h;
}, null);
__d("NavigationMessage", [], function(a, b, c, d, e, f) {
    var g = {
        NAVIGATION_BEGIN: 'NavigationMessage/navigationBegin',
        NAVIGATION_SELECT: 'NavigationMessage/navigationSelect',
        NAVIGATION_FIRST_RESPONSE: 'NavigationMessage/navigationFirstResponse',
        NAVIGATION_COMPLETED: 'NavigationMessage/navigationCompleted',
        NAVIGATION_FAILED: 'NavigationMessage/navigationFailed',
        NAVIGATION_COUNT_UPDATE: 'NavigationMessage/navigationCount',
        NAVIGATION_FAVORITE_UPDATE: 'NavigationMessage/navigationFavoriteUpdate',
        NAVIGATION_ITEM_REMOVED: 'NavigationMessage/navigationItemRemoved',
        NAVIGATION_ITEM_HIDDEN: 'NavigationMessage/navigationItemHidden',
        INTERNAL_LOADING_BEGIN: 'NavigationMessage/internalLoadingBegin',
        INTERNAL_LOADING_COMPLETED: 'NavigationMessage/internalLoadingCompleted'
    };
    e.exports = g;
}, null);
__d("FlipDirectionOnKeypress", ["Event", "DOM", "Input", "Style"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(event) {
        var l = event.getTarget(), m = h.isNodeOfType(l, 'input') && (l.type == 'text'), n = h.isNodeOfType(l, 'textarea');
        if (!(m || n) || l.getAttribute('data-prevent-auto-flip'))
            return;
        var o = i.getValue(l), p = (l.style && l.style.direction);
        if (!p) {
            var q = 0, r = true;
            for (var s = 0; s < o.length; s++) {
                var t = o.charCodeAt(s);
                if (t >= 48) {
                    if (r) {
                        r = false;
                        q++;
                    }
                    if (t >= 1470 && t <= 1920) {
                        j.set(l, 'direction', 'rtl');
                        l.setAttribute('dir', 'rtl');
                        return;
                    }
                    if (q == 5) {
                        j.set(l, 'direction', 'ltr');
                        l.setAttribute('dir', 'ltr');
                        return;
                    }
                } else 
                    r = true;
            }
        } else if (o.length === 0) {
            j.set(l, 'direction', '');
            l.removeAttribute('dir');
        }
    }
    g.listen(document.documentElement, {
        keyup: k,
        input: k
    });
}, null);
__d("PlaceholderOnsubmitFormListener", ["Event", "Input"], function(a, b, c, d, e, f, g, h) {
    g.listen(document.documentElement, 'submit', function(i) {
        var j = i.getTarget().getElementsByTagName('*');
        for (var k = 0; k < j.length; k++)
            if (j[k].getAttribute('placeholder') && h.isEmpty(j[k]))
                h.setValue(j[k], '');
    });
}, null);
__d("LitestandClassicRHC", ["Arbiter", "BigPipe", "CSS", "DOMQuery", "NavigationMessage", "Run", "SubscriptionsHandler", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = "_268y";
    function p(r, s) {
        var t = new m(), u = t.release.bind(t), v = j.scry(r, '.pagelet'), w = v.length;
        t.addSubscriptions(s.subscribe([].map.call(v, function(x) {
            return x.id + '_displayed';
        }), function() {
            i.removeClass(r, o);
            if (--w === 0) {
                g.inform('LitestandClassicRHC/loaded');
                u();
            }
        }), g.subscribe(k.NAVIGATION_BEGIN, u), s.subscribeOnce('pagelet_displayed_all', function() {
            g.inform('LitestandClassicRHC/loaded');
            i.removeClass(r, o);
            u();
        }));
        l.onLeave(u);
    }
    var q = {
        init: function(r) {
            var s = h.getCurrentInstance();
            if (s && s.arbiter) {
                p(r, s.arbiter);
            } else 
                g.subscribeOnce('BigPipe/init', function(event, t) {
                    p(r, t.arbiter);
                }, g.SUBSCRIBE_NEW);
        }
    };
    e.exports = q;
}, null);
__d("EagleEye", ["Arbiter", "CurrentUser", "EagleEyeConfig", "Env", "ISB", "OnloadEvent", "TrackingConfig", "WebStorage", "isInIframe"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = '_e_', q = (window.name || '').toString();
    if (q.length == 7 && q.substr(0, 3) == p) {
        q = q.substr(3);
    } else {
        q = i.seed;
        if (!o())
            window.name = p + q;
    }
    var r = (window.location.protocol == 'https:' && document.cookie.match(/\bcsm=1/)) ? '; secure': '', s = p + q + '_', t = new Date(Date.now() + 604800000).toGMTString(), u = window.location.hostname.replace(/^.*(facebook\..*)$/i, '$1'), v = '; expires=' + t + ';path=/; domain=' + u + r, w = 0, x, y = i.sessionStorage && n.getSessionStorage(), z = document.cookie.length, aa = false, ba = Date.now();
    function ca(ga) {
        return s + (w++) + '=' + encodeURIComponent(ga) + v;
    }
    function da() {
        var ga = [], ha = false, ia = 0, ja = 0;
        this.isEmpty = function() {
            return !ga.length;
        };
        this.enqueue = function(ka, la) {
            if (la) {
                ga.unshift(ka);
            } else 
                ga.push(ka);
        };
        this.dequeue = function() {
            ga.shift();
        };
        this.peek = function() {
            return ga[0];
        };
        this.clear = function(ka) {
            z = Math.min(z, document.cookie.length);
            if (!aa && (new Date() - ba > 60000))
                aa = true;
            var la=!ka && (document.cookie.search(p) >= 0), ma=!!i.cookieHeaderLimit, na = i.cookieCountLimit || 19, oa = i.cookieHeaderLimit || 3950, pa = na - 5, qa = oa - 1000;
            while (!this.isEmpty()) {
                var ra = ca(this.peek());
                if (ma && (ra.length > oa || (aa && ra.length + z > oa))) {
                    this.dequeue();
                    continue;
                }
                if ((la || ma) && ((document.cookie.length + ra.length > oa) || (document.cookie.split(';').length > na)))
                    break;
                document.cookie = ra;
                la = true;
                this.dequeue();
            }
            var sa = Date.now();
            if (ka ||!ha && la && ((ja > 0) && (Math.min(10 * Math.pow(2, ja - 1), 60000) + ia < sa)) && g.query(l.ONLOAD) && (!this.isEmpty() || (document.cookie.length > qa) || (document.cookie.split(';').length > pa))) {
                var ta = new Image(), ua = this, va = m.domain || '';
                ha = true;
                ta.onload = function ya() {
                    ha = false;
                    ja = 0;
                    ua.clear();
                };
                ta.onerror = ta.onabort = function ya() {
                    ha = false;
                    ia = Date.now();
                    ja++;
                };
                var wa = k.token ? '&fb_isb=' + k.token: '', xa = '&__user=' + h.getID();
                ta.src = va + '/ajax/nectar.php?asyncSignal=' + (Math.floor(Math.random() * 10000) + 1) + wa + xa + '&' + (!ka ? '' : 's=') + sa;
            }
        };
    }
    x = new da();
    if (y) {
        var ea = function() {
            var ga = 0, ha = ga;
            function ia() {
                var la = sessionStorage.getItem('_e_ids');
                if (la) {
                    var ma = (la + '').split(';');
                    if (ma.length == 2) {
                        ga = parseInt(ma[0], 10);
                        ha = parseInt(ma[1], 10);
                    }
                }
            }
            function ja() {
                var la = ga + ';' + ha;
                sessionStorage.setItem('_e_ids', la);
            }
            function ka(la) {
                return '_e_' + ((la !== undefined) ? la : ga++);
            }
            this.isEmpty = function() {
                return ha === ga;
            };
            this.enqueue = function(la, ma) {
                var na = ma ? ka(--ha): ka();
                sessionStorage.setItem(na, la);
                ja();
            };
            this.dequeue = function() {
                this.isEmpty();
                sessionStorage.removeItem(ka(ha));
                ha++;
                ja();
            };
            this.peek = function() {
                var la = sessionStorage.getItem(ka(ha));
                return la ? (la + '') : la;
            };
            this.clear = x.clear;
            ia();
        };
        x = new ea();
    }
    var fa = {
        log: function(ga, ha, ia) {
            if (j.no_cookies)
                return;
            var ja = [q, Date.now(), ga].concat(ha);
            ja.push(ja.length);
            function ka() {
                var la = JSON.stringify(ja);
                try {
                    x.enqueue(la, !!ia);
                    x.clear(!!ia);
                } catch (ma) {
                    if (y && (ma.code === 1000)) {
                        x = new da();
                        y = false;
                        ka();
                    }
                }
            }
            ka();
        },
        getSessionID: function() {
            return q;
        }
    };
    e.exports = fa;
    a.EagleEye = fa;
}, 3);
__d("Nectar", ["Env", "startsWith", "getContextualParent"], function(a, b, c, d, e, f, g, h, i) {
    function j(m) {
        if (!m.nctr)
            m.nctr = {};
    }
    function k(m) {
        if (g.module ||!m)
            return g.module;
        var n = {
            fbpage_fan_confirm: true,
            photos_snowlift: true
        }, o;
        while (m && m.getAttribute) {
            var p = m.getAttribute('id');
            if (h(p, 'pagelet_'))
                return p;
            if (!o && n[p])
                o = p;
            m = i(m);
        }
        return o;
    }
    var l = {
        addModuleData: function(m, n) {
            var o = k(n);
            if (o) {
                j(m);
                m.nctr._mod = o;
            }
        },
        addImpressionID: function(m) {
            if (g.impid) {
                j(m);
                m.nctr._impid = g.impid;
            }
        }
    };
    e.exports = l;
}, null);
__d("ARIA", ["DOM", "emptyFunction", "ge"], function(a, b, c, d, e, f, g, h, i) {
    var j, k, l = function() {
        j = i('ariaAssertiveAlert');
        if (!j) {
            j = g.create('div', {
                id: 'ariaAssertiveAlert',
                className: 'accessible_elem',
                'aria-live': 'assertive'
            });
            g.appendContent(document.body, j);
        }
        k = i('ariaPoliteAlert');
        if (!k) {
            k = j.cloneNode(false);
            k.setAttribute('id', 'ariaPoliteAlert');
            k.setAttribute('aria-live', 'polite');
            g.appendContent(document.body, k);
        }
        l = h;
    };
    function m(o, p) {
        l();
        var q = p ? j: k;
        g.setContent(q, o);
    }
    var n = {
        owns: function(o, p) {
            o.setAttribute('aria-owns', g.getID(p));
        },
        setPopup: function(o, p) {
            var q = g.getID(p);
            o.setAttribute('aria-owns', q);
            o.setAttribute('aria-haspopup', 'true');
            if (o.tabIndex==-1)
                o.tabIndex = 0;
        },
        announce: function(o) {
            m(o, true);
        },
        notify: function(o) {
            m(o);
        }
    };
    e.exports = n;
}, null);
__d("DimensionLogging", ["BanzaiNectar", "DOMDimensions"], function(a, b, c, d, e, f, g, h) {
    var i = h.getViewportDimensions();
    g.log('browser_dimension', 'homeload', {
        x: i.width,
        y: i.height,
        sw: window.screen.width,
        sh: window.screen.height,
        aw: window.screen.availWidth,
        ah: window.screen.availHeight,
        at: window.screen.availTop,
        al: window.screen.availLeft
    });
}, null);
__d("MultiBootstrapDataSource", ["DataSource"], function(a, b, c, d, e, f, g) {
    for (var h in g)
        if (g.hasOwnProperty(h))
            j[h] = g[h];
    var i = g === null ? null: g.prototype;
    j.prototype = Object.create(i);
    j.prototype.constructor = j;
    j.__superConstructor__ = g;
    function j(k) {
        "use strict";
        this._bootstrapEndpoints = k.bootstrapEndpoints;
        g.call(this, k);
    }
    j.prototype.bootstrapWithoutToken = function() {
        "use strict";
        for (var k = 0; k < this._bootstrapEndpoints.length; k++)
            this.fetch(this._bootstrapEndpoints[k].endpoint, this._bootstrapEndpoints[k].data || {}, {
                bootstrap: true
            });
    };
    e.exports = j;
}, null);
__d("OnloadHooks", ["Arbiter", "ErrorUtils", "InitialJSLoader", "OnloadEvent"], function(a, b, c, d, e, f, g, h, i, j) {
    function k() {
        var r = a.CavalryLogger;
        if (!window.loaded && r)
            r.getInstance().setTimeStamp('t_prehooks');
        n('onloadhooks');
        if (!window.loaded && r)
            r.getInstance().setTimeStamp('t_hooks');
        window.loaded = true;
        g.inform('uipage_onload', true, g.BEHAVIOR_STATE);
    }
    function l() {
        n('onafterloadhooks');
        window.afterloaded = true;
    }
    function m(r, s) {
        return h.applyWithGuard(r, null, null, function(t) {
            t.event_type = s;
            t.category = 'runhook';
        });
    }
    function n(r) {
        var s = (r == 'onbeforeleavehooks') || (r == 'onbeforeunloadhooks');
        do {
            var t = window[r];
            if (!t)
                break;
            if (!s)
                window[r] = null;
            for (var u = 0; u < t.length; u++) {
                var v = m(t[u], r);
                if (s && v)
                    return v;
            }
        }
        while (!s && window[r]);
    }
    function o() {
        if (!window.loaded) {
            window.loaded = true;
            n('onloadhooks');
        }
        if (!window.afterloaded) {
            window.afterloaded = true;
            n('onafterloadhooks');
        }
    }
    function p() {
        g.registerCallback(k, [j.ONLOAD_DOMCONTENT_CALLBACK, i.INITIAL_JS_READY]);
        g.registerCallback(l, [j.ONLOAD_DOMCONTENT_CALLBACK, j.ONLOAD_CALLBACK, i.INITIAL_JS_READY]);
        g.subscribe(j.ONBEFOREUNLOAD, function(r, s) {
            s.warn = n('onbeforeleavehooks') || n('onbeforeunloadhooks');
            if (!s.warn) {
                window.loaded = false;
                window.afterloaded = false;
            }
        }, g.SUBSCRIBE_NEW);
        g.subscribe(j.ONUNLOAD, function(r, s) {
            n('onunloadhooks');
            n('onafterunloadhooks');
        }, g.SUBSCRIBE_NEW);
    }
    var q = {
        _onloadHook: k,
        _onafterloadHook: l,
        runHook: m,
        runHooks: n,
        keepWindowSetAsLoaded: o
    };
    p();
    a.OnloadHooks = e.exports = q;
}, null);
__d("PixelRatio", ["Arbiter", "Cookie", "PixelRatioConst", "Run"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = i.cookieName, l, m;
    function n() {
        return window.devicePixelRatio || 1;
    }
    function o() {
        h.set(k, n());
    }
    function p() {
        h.clear(k);
    }
    function q() {
        var s = n();
        if (s !== l) {
            o();
        } else 
            p();
    }
    var r = {
        startDetecting: function(s) {
            l = s || 1;
            p();
            if (m)
                return;
            m = [g.subscribe('pre_page_transition', q)];
            j.onBeforeUnload(q);
        }
    };
    e.exports = r;
}, null);
__d("PostLoadJS", ["Bootloader", "Run", "emptyFunction"], function(a, b, c, d, e, f, g, h, i) {
    function j(l, m) {
        h.onAfterLoad(function() {
            g.loadModules.call(g, [l], m);
        });
    }
    var k = {
        loadAndRequire: function(l) {
            j(l, i);
        },
        loadAndCall: function(l, m, n) {
            j(l, function(o) {
                o[m].apply(o, n);
            });
        }
    };
    e.exports = k;
}, null);
__d("UserActivity", ["Arbiter", "Event"], function(a, b, c, d, e, f, g, h) {
    var i = 5000, j = 500, k =- 5, l = Date.now(), m = l, n = {
        subscribeOnce: function(p) {
            var q = n.subscribe(function() {
                n.unsubscribe(q);
                p();
            });
        },
        subscribe: function(p) {
            return g.subscribe('useractivity/activity', p);
        },
        unsubscribe: function(p) {
            p.unsubscribe();
        },
        isActive: function(p) {
            return (new Date() - l < (p || i));
        },
        getLastInformTime: function() {
            return m;
        }
    };
    function o(event) {
        l = Date.now();
        var p = l - m;
        if (p > j) {
            m = l;
            g.inform('useractivity/activity', {
                event: event,
                idleness: p,
                last_inform: m
            });
        } else if (p < k)
            m = l;
    }
    h.listen(window, 'scroll', o);
    h.listen(window, 'focus', o);
    h.listen(document.documentElement, {
        DOMMouseScroll: o,
        mousewheel: o,
        keydown: o,
        mouseover: o,
        mousemove: o,
        click: o
    });
    g.subscribe('Event/stop', function(p, q) {
        o(q.event);
    });
    e.exports = n;
}, null);
__d("Vector", ["DOMVector", "Event"], function(a, b, c, d, e, f, g, h) {
    for (var i in g)
        if (g.hasOwnProperty(i))
            k[i] = g[i];
    var j = g === null ? null: g.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = g;
    function k(l, m, n) {
        "use strict";
        g.call(this, parseFloat(l), parseFloat(m), n);
    }
    k.prototype.derive = function(l, m, n) {
        "use strict";
        return new k(l, m, n || this.domain);
    };
    k.prototype.setElementPosition = function(l) {
        "use strict";
        var m = this.convertTo('document');
        l.style.left = parseInt(m.x, 10) + 'px';
        l.style.top = parseInt(m.y, 10) + 'px';
        return this;
    };
    k.prototype.setElementDimensions = function(l) {
        "use strict";
        return this.setElementWidth(l).setElementHeight(l);
    };
    k.prototype.setElementWidth = function(l) {
        "use strict";
        l.style.width = parseInt(this.x, 10) + 'px';
        return this;
    };
    k.prototype.setElementHeight = function(l) {
        "use strict";
        l.style.height = parseInt(this.y, 10) + 'px';
        return this;
    };
    k.prototype.scrollElementBy = function(l) {
        "use strict";
        if (l == document.body) {
            window.scrollBy(this.x, this.y);
        } else {
            l.scrollLeft += this.x;
            l.scrollTop += this.y;
        }
        return this;
    };
    k.from = function(l, m, n) {
        "use strict";
        return new k(l, m, n);
    };
    k.getEventPosition = function(l, m) {
        "use strict";
        m = m || 'document';
        var n = h.getPosition(l), o = this.from(n.x, n.y, 'document');
        return o.convertTo(m);
    };
    k.deserialize = function(l) {
        "use strict";
        var m = l.split(',');
        return this.from(m[0], m[1]);
    };
    e.exports = k;
}, null);
__d("queryThenMutateDOM", ["Run", "createArrayFrom", "emptyFunction", "requestAnimationFrame"], function(a, b, c, d, e, f, g, h, i, j) {
    var k, l, m = {}, n = [], o = [];
    function p(s, t, u) {
        if (!s&&!t)
            return;
        if (u && m.hasOwnProperty(u)) {
            return;
        } else if (u)
            m[u] = 1;
        n.push(t || i);
        o.push(s || i);
        r();
        if (!k) {
            k = true;
            g.onLeave(function() {
                k = false;
                l = false;
                m = {};
                n.length = 0;
                o.length = 0;
            });
        }
    }
    p.prepare = function(s, t, u) {
        return function() {
            var v = h(arguments);
            v.unshift(this);
            var w = Function.prototype.bind.apply(s, v), x = t.bind(this);
            p(w, x, u);
        };
    };
    function q() {
        m = {};
        var s = o.length, t = n.length, u = [], v;
        while (s--) {
            v = o.shift();
            u.push(v());
        }
        while (t--) {
            v = n.shift();
            v(u.shift());
        }
        l = false;
        r();
    }
    function r() {
        if (!l && (o.length || n.length)) {
            l = true;
            j(q);
        }
    }
    e.exports = p;
}, null);
__d("TimezoneAutoset", ["AsyncRequest", "emptyFunction"], function(a, b, c, d, e, f, g, h) {
    var i = false;
    function j(m) {
        var n = new Date(), o = n.getTimezoneOffset() / 30, p = n.getTime() / 1000, q = Math.round((m - p) / 1800), r = Math.round(o + q)%48;
        if (r == 0) {
            return 0;
        } else if (r > 24) {
            r -= Math.ceil(r / 48) * 48;
        } else if (r<-28)
            r += Math.ceil(r/-48) * 48;
        return r * 30;
    }
    function k(m, n, o) {
        if (!m || undefined == n)
            return;
        if (i)
            return;
        i = true;
        var p =- j(m);
        if (o || p != n) {
            var q = '/ajax/timezone/update.php';
            new g().setURI(q).setData({
                gmt_off: p,
                is_forced: o
            }).setErrorHandler(h).setTransportErrorHandler(h).setOption('suppressErrorAlerts', true).send();
        }
    }
    var l = {
        setInputValue: function(m, n) {
            m.value = j(n);
        },
        setTimezone: k
    };
    e.exports = l;
}, null);
__d("TinyViewport", ["Arbiter", "ArbiterMixin", "CSS", "Event", "copyProperties", "getDocumentScrollElement", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = document.documentElement, o, p, q = false, r = {
        isTiny: function() {
            return o;
        }
    };
    k(r, h);
    var s = m.bind(null, function() {
        p = p || l();
        o = n.clientHeight < 400 || n.clientWidth < p.scrollWidth - 1;
    }, function() {
        if (o !== q) {
            i.conditionClass(n, 'tinyViewport', o);
            i.conditionClass(n, 'canHaveFixedElements', !o);
            r.inform('change', o);
            q = o;
        }
    }, 'TinyViewport');
    s();
    g.subscribe('quickling/response', s);
    j.listen(window, 'resize', s);
    e.exports = r;
}, null);
__d("Button", ["CSS", "DataStore", "DOM", "Event", "Parent", "cx", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = 'uiButtonDisabled', o = 'uiButtonDepressed', p = "_42fr", q = "_42fs", r = 'button:blocker', s = 'href', t = 'ajaxify';
    function u(aa, ba) {
        var ca = h.get(aa, r);
        if (ba) {
            if (ca) {
                ca.remove();
                h.remove(aa, r);
            }
        } else if (!ca)
            h.set(aa, r, j.listen(aa, 'click', m.thatReturnsFalse, j.Priority.URGENT));
    }
    function v(aa) {
        var ba = k.byClass(aa, 'uiButton') || k.byClass(aa, "_42ft");
        if (!ba)
            throw new Error('invalid use case');
        return ba;
    }
    function w(aa) {
        return i.isNodeOfType(aa, 'a');
    }
    function x(aa) {
        return i.isNodeOfType(aa, 'button');
    }
    function y(aa) {
        return g.hasClass(aa, "_42ft");
    }
    var z = {
        getInputElement: function(aa) {
            aa = v(aa);
            if (w(aa))
                throw new Error('invalid use case');
            return x(aa) ? aa : i.find(aa, 'input');
        },
        isEnabled: function(aa) {
            return !(g.hasClass(v(aa), n) || g.hasClass(v(aa), p));
        },
        setEnabled: function(aa, ba) {
            aa = v(aa);
            var ca = y(aa) ? p: n;
            g.conditionClass(aa, ca, !ba);
            if (w(aa)) {
                var da = aa.getAttribute('href'), ea = aa.getAttribute('ajaxify'), fa = h.get(aa, s, '#'), ga = h.get(aa, t);
                if (ba) {
                    if (!da)
                        aa.setAttribute('href', fa);
                    if (!ea && ga)
                        aa.setAttribute('ajaxify', ga);
                    aa.removeAttribute('tabIndex');
                } else {
                    if (da && da !== fa)
                        h.set(aa, s, da);
                    if (ea && ea !== ga)
                        h.set(aa, t, ea);
                    aa.removeAttribute('href');
                    aa.removeAttribute('ajaxify');
                    aa.setAttribute('tabIndex', '-1');
                }
                u(aa, ba);
            } else {
                var ha = z.getInputElement(aa);
                ha.disabled=!ba;
                u(ha, ba);
            }
        },
        setDepressed: function(aa, ba) {
            aa = v(aa);
            var ca = y(aa) ? q: o;
            g.conditionClass(aa, ca, ba);
        },
        isDepressed: function(aa) {
            aa = v(aa);
            var ba = y(aa) ? q: o;
            return g.hasClass(aa, ba);
        },
        setLabel: function(aa, ba) {
            aa = v(aa);
            if (y(aa)) {
                var ca = [];
                if (ba)
                    ca.push(ba);
                var da = i.scry(aa, '.img')[0];
                if (da)
                    if (aa.firstChild == da) {
                        ca.unshift(da);
                    } else 
                        ca.push(da);
                i.setContent(aa, ca);
            } else if (w(aa)) {
                var ea = i.find(aa, 'span.uiButtonText');
                i.setContent(ea, ba);
            } else 
                z.getInputElement(aa).value = ba;
            var fa = y(aa) ? "_42fv": 'uiButtonNoText';
            g.conditionClass(aa, fa, !ba);
        },
        setIcon: function(aa, ba) {
            if (ba&&!i.isNode(ba))
                return;
            aa = v(aa);
            var ca = i.scry(aa, '.img')[0];
            if (!ba) {
                ca && i.remove(ca);
                return;
            }
            g.addClass(ba, 'customimg');
            if (ca != ba)
                if (ca) {
                    i.replace(ca, ba);
                } else 
                    i.prependContent(aa, ba);
        }
    };
    e.exports = z;
}, null);
__d("LayerAutoFocus", ["DOMQuery", "Focus", "TabbableElements", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this._layer = l;
    }
    k.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe('aftershow', this._focus.bind(this));
    };
    k.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    k.prototype._focus = function() {
        "use strict";
        var l = this._layer.getRoot(), m = g.scry(l, '.autofocus')[0], n = true;
        if (!m) {
            var o = document.activeElement;
            if (g.isNodeOfType(o, ['input', 'textarea']))
                return;
            var p = i.find(l);
            for (var q = 0; q < p.length; q++)
                if (p[q].tagName != 'A') {
                    m = p[q];
                    n = false;
                    break;
                }
        } else if (m.tabIndex !== 0)
            n = false;
        if (m) {
            n ? h.set(m) : h.setWithoutOutline(m);
        } else if (!l.offsetWidth) {
            l.tabIndex = 0;
            h.setWithoutOutline(l);
        }
    };
    j(k.prototype, {
        _subscription: null
    });
    e.exports = k;
}, null);
__d("LayerButtons", ["Event", "Parent", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        "use strict";
        this._layer = k;
    }
    j.prototype.enable = function() {
        "use strict";
        this._listener = g.listen(this._layer.getRoot(), 'click', this._handle.bind(this));
    };
    j.prototype.disable = function() {
        "use strict";
        this._listener.remove();
        this._listener = null;
    };
    j.prototype._handle = function(k) {
        "use strict";
        var l = k.getTarget(), m = h.byClass(l, 'layerConfirm');
        if (m) {
            if (this._layer.inform('confirm', m) === false)
                k.prevent();
            return;
        }
        var n = h.byClass(l, 'layerCancel');
        if (n) {
            if (this._layer.inform('cancel', n) !== false)
                this._layer.hide();
            k.prevent();
            return;
        }
        var o = h.byClass(l, 'layerButton');
        if (o)
            if (this._layer.inform('button', o) === false)
                k.prevent();
    };
    i(j.prototype, {
        _listener: null
    });
    e.exports = j;
}, null);
__d("LayerFormHooks", ["Event", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._layer = j;
    }
    i.prototype.enable = function() {
        "use strict";
        var j = this._layer.getRoot();
        this._subscriptions = [g.listen(j, 'submit', this._onSubmit.bind(this)), g.listen(j, 'success', this._onSuccess.bind(this)), g.listen(j, 'error', this._onError.bind(this))];
    };
    i.prototype.disable = function() {
        "use strict";
        this._subscriptions.forEach(function(j) {
            j.remove();
        });
        this._subscriptions = null;
    };
    i.prototype._onSubmit = function(event) {
        "use strict";
        if (this._layer.inform('submit', event) === false)
            event.kill();
    };
    i.prototype._onSuccess = function(event) {
        "use strict";
        if (this._layer.inform('success', event) === false)
            event.kill();
    };
    i.prototype._onError = function(event) {
        "use strict";
        var j = event.getData();
        if (this._layer.inform('error', {
            response: j.response
        }) === false)
            event.kill();
    };
    h(i.prototype, {
        _subscriptions: null
    });
    e.exports = i;
}, null);
__d("LayerRefocusOnHide", ["ContextualThing", "DOM", "DOMQuery", "Focus", "Parent", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(n) {
        "use strict";
        this._layer = n;
    }
    m.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe('hide', this._handle.bind(this));
    };
    m.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    m.prototype._handle = function(n, event) {
        "use strict";
        if (document.activeElement === document.body || i.contains(this._layer.getRoot(), document.activeElement)) {
            var o = this._layer.getCausalElement();
            while (o && (!o.offsetWidth)) {
                var p = k.byClass(o, 'uiToggle');
                if (p && p.offsetWidth) {
                    o = h.scry(p, '[rel="toggle"]')[0];
                } else {
                    var q = g.getContext(o);
                    if (q) {
                        o = q;
                    } else 
                        o = o.parentNode;
                }
            }
            if (o)
                if (o.tabIndex!=-1)
                    j.setWithoutOutline(o);
        }
    };
    l(m.prototype, {
        _subscription: null
    });
    e.exports = m;
}, null);
