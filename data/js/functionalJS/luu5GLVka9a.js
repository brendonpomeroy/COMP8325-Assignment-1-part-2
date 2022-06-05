/*!CK:27301948!*/
/*1415600704,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["XvtSa"]);
}

__d("MercuryGenericConstants", [], function(a, b, c, d, e, f) {
    e.exports = {
        MAX_THREAD_NAME_LENGTH: "250"
    };
}, null);
__d("MercuryMessageSourceTags", [], function(a, b, c, d, e, f) {
    e.exports = {
        CHAT: "source:chat",
        EMAIL: "source:email",
        MESSENGER: "source:messenger",
        MOBILE: "source:mobile"
    };
}, null);
__d("MercuryTimePassed", [], function(a, b, c, d, e, f) {
    e.exports = {
        TODAY: 0,
        WEEK_AGO: 1,
        MONTH_AGO: 2,
        CURRENT_YEAR: 3,
        OTHER_YEAR: 4
    };
}, null);
__d("MessagingEvent", [], function(a, b, c, d, e, f) {
    e.exports = {
        DELETE: "delete",
        DELETE_MESSAGES: "delete_messages",
        DELIVER: "deliver",
        ERROR: "error",
        READ: "read",
        REPORT_SPAM: "report_spam",
        REPORT_SPAM_MESSAGES: "report_spam_messages",
        UNMARK_SPAM: "unmark_spam",
        SUBSCRIBE: "subscribe",
        CHANGE_MUTE_SETTINGS: "change_mute_settings",
        TAG: "tag",
        UNREAD: "unread",
        UNSUBSCRIBE: "unsubscribe",
        DELIVER_LOG: "deliver_log",
        MORE_THREADS: "more_threads",
        READ_ALL: "read_all",
        READ_RECEIPT: "read_receipt",
        DELIVERY_RECEIPT: "delivery_receipt",
        SENT_PUSH: "sent_push",
        DELIVER_FAST_PAST: "deliver_fast_path",
        MESSENGER_STATUS: "messenger_status",
        UPDATE_PINNED_THREADS: "update_pinned_threads"
    };
}, null);
__d("PhotoResizeModeConst", [], function(a, b, c, d, e, f) {
    e.exports = {
        CONTAIN: "s",
        COVER: "p"
    };
}, null);
__d("SplitImage.react", ["React", "Image.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = g.createClass({
        displayName: "SplitImage",
        render: function() {
            var l = this.props.size;
            return (g.createElement("div", g.__spread({}, this.props, {
                className: j(this.props.className, "_55lt"),
                style: Object.assign({}, (this.props.style || {}), {
                    width: l,
                    height: l
                })
            }), this.renderImages()));
        },
        renderImages: function() {
            if (!this.props.srcs)
                return null;
            var l = this.props.srcs, m = Array.isArray(l);
            if (!m || l.length == 1)
                return this.renderOne(m ? l[0] : l);
            return l.length == 2 ? this.renderTwo(l) : this.renderThree(l);
        },
        renderOne: function(l) {
            return (g.createElement(h, {
                src: l,
                width: this.props.size,
                height: this.props.size,
                alt: ""
            }));
        },
        renderTwo: function(l) {
            var m = this.props.size, n = Math.floor(m / 2), o =- Math.floor(n / 2), p = (("_55lu") + (this.props.border ? ' ' + "_57xo" : ''));
            return (g.createElement("div", null, g.createElement("div", {
                className: "_55lu",
                style: {
                    width: n
                }
            }, g.createElement(h, {
                src: l[0],
                width: m,
                height: m,
                style: {
                    marginLeft: o
                }
            })), g.createElement("div", {
                className: p,
                style: {
                    width: n
                }
            }, g.createElement(h, {
                src: l[1],
                width: m,
                height: m,
                style: {
                    marginLeft: o
                }
            }))));
        },
        renderThree: function(l) {
            var m = this.props.size, n = Math.floor(m / 3 * 2), o =- Math.floor((m - n) / 2), p = Math.floor(m / 2), q = m - n, r =- Math.floor((p - q) / 2), s = (("_55lu") + (this.props.border ? ' ' + "_57pl" : '')), t = (("_55lu") + (this.props.border ? ' ' + "_57pm" : ''));
            return (g.createElement("div", null, g.createElement("div", {
                className: s,
                style: {
                    width: n
                }
            }, g.createElement(h, {
                src: l[0],
                width: m,
                height: m,
                style: {
                    marginLeft: o
                }
            })), g.createElement("div", {
                className: t,
                style: {
                    width: q,
                    height: p
                }
            }, g.createElement(h, {
                src: l[1],
                width: p,
                height: p,
                style: {
                    marginLeft: r
                }
            })), g.createElement("div", {
                className: "_55lu",
                style: {
                    width: q,
                    height: p
                }
            }, g.createElement(h, {
                src: l[2],
                width: p,
                height: p,
                style: {
                    marginLeft: r
                }
            }))));
        }
    });
    e.exports = k;
}, null);
__d("MenuSeparator.react", ["MenuSeparator"], function(a, b, c, d, e, f, g) {
    function h(j) {
        j.isReactLegacyFactory = {};
        j.type = j;
    }
    var i = g;
    h(i);
    e.exports = i;
}, null);
__d("RangedCallbackManager", ["CallbackManagerController", "copyProperties", "createObjectFrom"], function(a, b, c, d, e, f, g, h, i) {
    var j = function(k, l, m) {
        this._resources = [];
        this._reachedEndOfArray = false;
        this._error = false;
        this._existingIDs = {};
        this._controller = new g(this._constructCallbackArg.bind(this));
        this._getValueHandler = k;
        this._compareValuesHandler = l;
        this._skipOnStrictHandler = m;
    };
    h(j.prototype, {
        executeOrEnqueue: function(k, l, m, n, o) {
            return this._controller.executeOrEnqueue({
                start: k,
                limit: l
            }, m, {
                strict: !!n,
                skipOnStrictHandler: o
            });
        },
        unsubscribe: function(k) {
            this._controller.unsubscribe(k);
        },
        getUnavailableResources: function(k) {
            var l = this._controller.getRequest(k), m = [];
            if (l&&!this._reachedEndOfArray) {
                var n = l.request, o = this._filterForStrictResults(l.options), p = n.start + n.limit;
                for (var q = o.length; q < p; q++)
                    m.push(q);
            }
            return m;
        },
        addResources: function(k) {
            k.forEach(function(l) {
                if (!this._existingIDs[l]) {
                    this._existingIDs[l] = true;
                    this._resources.push(l);
                    this._error = null;
                }
            }.bind(this));
            this.resortResources();
            this._controller.runPossibleCallbacks();
        },
        addResourcesWithoutSorting: function(k, l) {
            var m = this._resources.slice(0, l);
            m = m.concat(k);
            m = m.concat(this._resources.slice(l));
            this._resources = m;
            h(this._existingIDs, i(k, true));
            this._error = null;
            this._controller.runPossibleCallbacks();
        },
        removeResources: function(k) {
            k.forEach(function(l) {
                if (this._existingIDs[l]) {
                    this._existingIDs[l] = false;
                    var m = this._resources.indexOf(l);
                    if (m!=-1)
                        this._resources.splice(m, 1);
                }
            }.bind(this));
        },
        removeAllResources: function() {
            this._resources = [];
            this._existingIDs = {};
        },
        resortResources: function() {
            this._resources = this._resources.sort(function(k, l) {
                return this._compareValuesHandler(this._getValueHandler(k), this._getValueHandler(l));
            }.bind(this));
        },
        setReachedEndOfArray: function() {
            if (!this._reachedEndOfArray) {
                this._reachedEndOfArray = true;
                this._error = null;
                this._controller.runPossibleCallbacks();
            }
        },
        hasReachedEndOfArray: function() {
            return this._reachedEndOfArray;
        },
        setError: function(k) {
            if (this._error !== k) {
                this._error = k;
                this._controller.runPossibleCallbacks();
            }
        },
        getError: function(k, l, m) {
            var n = this._filterForStrictResults({
                strict: m
            });
            return k + l > n.length ? this._error : null;
        },
        hasResource: function(k) {
            return this._existingIDs[k];
        },
        getResourceAtIndex: function(k) {
            return this._resources[k];
        },
        getAllResources: function() {
            return this._resources.concat();
        },
        getCurrentArraySize: function(k) {
            return this._filterForStrictResults(k).length;
        },
        _filterForStrictResults: function(k) {
            var l = this._resources;
            if (k && k.strict) {
                var m = k.skipOnStrictHandler || this._skipOnStrictHandler;
                if (m)
                    l = l.filter(m);
            }
            return l;
        },
        _constructCallbackArg: function(k, l) {
            var m = this._filterForStrictResults(l);
            if (!this._reachedEndOfArray&&!this._error && k.start + k.limit > m.length) {
                return false;
            } else {
                var n = m.slice(k.start, k.start + k.limit), o = k.start + k.limit > m.length ? this._error: null;
                return [n, o];
            }
        },
        getElementsUntil: function(k) {
            var l = [];
            for (var m = 0; m < this._resources.length; m++) {
                var n = this._getValueHandler(this._resources[m]);
                if (this._compareValuesHandler(n, k) > 0)
                    break;
                l.push(this._resources[m]);
            }
            return l;
        }
    });
    e.exports = j;
}, null);
__d("mergeDeepInto", ["invariant", "mergeHelpers"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = h.ArrayStrategies, j = h.checkArrayStrategy, k = h.checkMergeArrayArgs, l = h.checkMergeLevel, m = h.checkMergeObjectArgs, n = h.isTerminal, o = h.normalizeMergeArg, p = function(t, u, v, w) {
        m(t, u);
        l(w);
        var x = u ? Object.keys(u): [];
        for (var y = 0; y < x.length; y++) {
            var z = x[y];
            r(t, u, z, v, w);
        }
    }, q = function(t, u, v, w) {
        k(t, u);
        l(w);
        var x = Math.max(t.length, u.length);
        for (var y = 0; y < x; y++)
            r(t, u, y, v, w);
    }, r = function(t, u, v, w, x) {
        var y = u[v], z = u.hasOwnProperty(v), aa = z && n(y), ba = z && Array.isArray(y), ca = z&&!ba&&!ba, da = t[v], ea = t.hasOwnProperty(v), fa = ea && n(da), ga = ea && Array.isArray(da), ha = ea&&!ga&&!ga;
        if (fa) {
            if (aa) {
                t[v] = y;
            } else if (ba) {
                t[v] = [];
                q(t[v], y, w, x + 1);
            } else if (ca) {
                t[v] = {};
                p(t[v], y, w, x + 1);
            } else if (!z)
                t[v] = da;
        } else if (ga) {
            if (aa) {
                t[v] = y;
            } else if (ba) {
                g(i[w]);
                if (w === i.Clobber)
                    da.length = 0;
                q(da, y, w, x + 1);
            } else if (ca) {
                t[v] = {};
                p(t[v], y, w, x + 1);
            } else 
                !z;
        } else if (ha) {
            if (aa) {
                t[v] = y;
            } else if (ba) {
                t[v] = [];
                q(t[v], y, w, x + 1);
            } else if (ca) {
                p(da, y, w, x + 1);
            } else 
                !z;
        } else if (!ea)
            if (aa) {
                t[v] = y;
            } else if (ba) {
                t[v] = [];
                q(t[v], y, w, x + 1);
            } else if (ca) {
                t[v] = {};
                p(t[v], y, w, x + 1);
            } else 
                !z;
    }, s = function(t, u, v) {
        var w = o(u);
        j(v);
        p(t, w, v, 0);
    };
    e.exports = s;
}, null);
__d("mergeDeep", ["mergeHelpers", "mergeDeepInto"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = g.checkArrayStrategy, j = g.checkMergeObjectArgs, k = g.normalizeMergeArg, l = function(m, n, o) {
        var p = k(m), q = k(n);
        j(p, q);
        i(o);
        var r = {};
        h(r, p, o);
        h(r, q, o);
        return r;
    };
    e.exports = l;
}, null);
__d("mergeObjects", ["copyProperties"], function(a, b, c, d, e, f, g) {
    function h() {
        var i = {};
        for (var j = 0; j < arguments.length; j++)
            g(i, arguments[j]);
        return i;
    }
    e.exports = h;
}, null);
__d("DateConsts", ["fbt"], function(a, b, c, d, e, f, g) {
    var h = 1000, i = 60, j = 60, k = 24, l = 7, m = 365.242, n = 12, o = i * j, p = o * k, q = p * m, r = h * p, s = h * p * l, t = h * p * m, u = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6
    };
    Object.freeze(u);
    var v = "Day:", w = "Month:", x = "Year:", y = "dd", z = "mm", aa = "yyyy", ba = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ca = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], da = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ea = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], fa = ['', "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"], ga = {
        getWeekdayName: function(ha) {
            return ca[ha];
        },
        getWeekdayNameShort: function(ha) {
            return ba[ha];
        },
        getMonthName: function(ha) {
            return ea[ha - 1];
        },
        getMonthNameShort: function(ha) {
            return da[ha - 1];
        },
        getOrdinalSuffix: function(ha) {
            return fa[ha];
        },
        getDaysInMonth: function(ha, ia) {
            return (new Date(ha, ia, 0)).getDate();
        },
        getCurrentTimeInSeconds: function() {
            return Date.now() / h;
        },
        DAYS_PER_YEAR: m,
        DAYS_PER_WEEK: l,
        HOUR_PER_DAY: k,
        MIN_PER_HOUR: j,
        MONTHS_PER_YEAR: n,
        MS_PER_SEC: h,
        MS_PER_DAY: r,
        MS_PER_WEEK: s,
        MS_PER_YEAR: t,
        SEC_PER_MIN: i,
        SEC_PER_HOUR: o,
        SEC_PER_DAY: p,
        SEC_PER_YEAR: q,
        DAY_LABEL: v,
        MONTH_LABEL: w,
        YEAR_LABEL: x,
        DATE_PLACEHOLDER: y,
        MONTH_PLACEHOLDER: z,
        YEAR_PLACEHOLDER: aa,
        DAYS: u
    };
    e.exports = ga;
}, null);
__d("URLMatcher", [], function(a, b, c, d, e, f) {
    var g = '!"#%&\'()*,-./:;<>?@[\\]^_`{|}', h = '\u2000-\u206F\u00ab\u00bb\uff08\uff09', i = '(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])', j = '(?:(?:ht|f)tps?)://', k = '(?:(?:' + i + '[.]){3}' + i + ')', l = '\\[(?:(?:[A-Fa-f0-9]{1,4}::?){1,7}[A-Fa-f0-9]{1,4})\\]', m = '(?:\\b)www\\d{0,3}[.]', n = '[^\\s' + g + h + ']', o = '(?:(?:(?:[.:\\-_%@]|' + n + ')*' + n + ')|' + l + ')', p = '(?:[.][a-z]{2,4})', q = '(?::\\d+){0,1}', r = '(?=[/?#])', s = '(?:' + '(?:' + j + o + q + ')|' + '(?:' + k + q + ')|' + '(?:' + l + q + ')|' + '(?:' + m + o + p + q + ')|' + '(?:' + o + p + q + r + ')' + ')', t = '[/#?]', u = '\\([^\\s()<>]+\\)', v = '[^\\s()<>?#]+', w = new RegExp(s, 'im'), x = '^\\[[0-9]{1,4}:[0-9]{1,4}:[A-Fa-f0-9]{1,4}\\]', y = new RegExp(x, 'im'), z = '(?:' + '(?:' + t + ')' + '(?:' + '(?:' + u + '|' + v + ')*' + ')*' + ')*', aa = new RegExp('(' + '(?:' + s + ')' + '(?:' + z + ')' + ')', 'im'), ba = new RegExp('(' + '(?:' + j + o + q + ')|' + '(?:' + m + o + p + q + ')' + ')'), ca = /[\s'";]/, da = new RegExp(t, 'im'), ea = new RegExp('[\\s!"#%&\'()*,./:;<>?@[\\]^`{|}\u00ab\u00bb\u2000-\u206F\uff08\uff09]', 'im'), fa = new RegExp('[\\s()<>?#]', 'im'), ga = new RegExp('\\s()<>'), ha = function(oa) {
        if (oa && oa.indexOf('@')!=-1) {
            return (ba.exec(oa)) ? oa : null;
        } else 
            return oa;
    }, ia = function(oa) {
        return ja(oa, aa);
    }, ja = function(oa, pa) {
        var qa = (pa.exec(oa) || [])[1] || null;
        return ha(qa);
    }, ka = function(oa) {
        return w.exec(oa);
    }, la = function(oa) {
        return !ca.test(oa.charAt(oa.length - 1));
    }, ma = function(oa) {
        do {
            var pa = w.exec(oa);
            if (!pa)
                return null;
            var qa = false;
            if (pa[0][0] === '[' && pa.index > 0 && oa[pa.index - 1] === '@') {
                var ra = y.exec(pa[0]);
                if (ra) {
                    qa = true;
                    oa = oa.substr(pa.index + ra[0].length);
                }
            }
        }
        while (qa);
        var sa = oa.substr(pa.index + pa[0].length);
        if (sa.length === 0 ||!(da.test(sa[0])))
            return ha(pa[0]);
        var ta = 0, ua = 0, va = 1, wa = 0, xa = ua;
        for (var ya = 1; ya < sa.length; ya++) {
            var za = sa[ya];
            if (xa === ua) {
                if (za === '(') {
                    wa = wa + 1;
                    xa = va;
                } else if (da.test(za) ||!(ea.test(za))) {
                    ta = ya;
                } else if (fa.test(za))
                    break;
            } else if (za === '(') {
                wa = wa + 1;
            } else if (za === ')') {
                wa = wa - 1;
                if (wa === 0) {
                    xa = ua;
                    ta = ya;
                }
            } else if (ga.test(za))
                break;
        }
        return ha(pa[0] + sa.substring(0, ta + 1));
    }, na = {};
    na.permissiveMatch = ia;
    na.matchToPattern = ja;
    na.matchHost = ka;
    na.trigger = la;
    na.match = ma;
    e.exports = na;
}, null);
__d("formatDate", ["DateConsts", "DateFormatConfig", "fbt", "invariant"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(o, p, q) {
        q = q || {};
        if (!p ||!o)
            return '';
        if (typeof o === 'string')
            o = parseInt(o, 10);
        if (typeof o === 'number')
            o = new Date(o * 1000);
        j(o instanceof Date);
        j(!isNaN(o.getTime()));
        j(o.getTime() < 1e+15);
        if (typeof p !== 'string') {
            var r = m();
            for (var s in r) {
                var t = r[s];
                if (t.start <= o.getTime() && p[t.name]) {
                    p = p[t.name];
                    break;
                }
            }
        }
        var u;
        if (q.skipPatternLocalization || n() || p.length === 1) {
            u = p;
        } else {
            j(h.formats[p]);
            u = h.formats[p];
        }
        var v = q.utc ? 'getUTC': 'get', w = o[v + 'Date'](), x = o[v + 'Day'](), y = o[v + 'Month'](), z = o[v + 'FullYear'](), aa = o[v + 'Hours'](), ba = o[v + 'Minutes'](), ca = o[v + 'Seconds'](), da = o[v + 'Milliseconds'](), ea = '';
        for (var fa = 0; fa < u.length; fa++) {
            var ga = u.charAt(fa);
            switch (ga) {
            case '\\':
                fa++;
                ea += u.charAt(fa);
                break;
            case 'd':
                ea += l(w, 2);
                break;
            case 'j':
                ea += w;
                break;
            case 'S':
                ea += g.getOrdinalSuffix(w);
                break;
            case 'D':
                ea += g.getWeekdayNameShort(x);
                break;
            case 'l':
                ea += g.getWeekdayName(x);
                break;
            case 'F':
            case 'f':
                ea += g.getMonthName(y + 1);
                break;
            case 'M':
                ea += g.getMonthNameShort(y + 1);
                break;
            case 'm':
                ea += l(y + 1, 2);
                break;
            case 'n':
                ea += y + 1;
                break;
            case 'Y':
                ea += z;
                break;
            case 'y':
                ea += ('' + z).slice(2);
                break;
            case 'a':
                if (aa < 12) {
                    ea += "am";
                } else 
                    ea += "pm";
                break;
            case 'A':
                if (aa < 12) {
                    ea += "AM";
                } else 
                    ea += "PM";
                break;
            case 'g':
                ea += (aa === 0 || aa === 12) ? 12 : aa%12;
                break;
            case 'G':
                ea += aa;
                break;
            case 'h':
                if (aa === 0 || aa === 12) {
                    ea += 12;
                } else 
                    ea += l(aa%12, 2);
                break;
            case 'H':
                ea += l(aa, 2);
                break;
            case 'i':
                ea += l(ba, 2);
                break;
            case 's':
                ea += l(ca, 2);
                break;
            case 'X':
                ea += l(da, 3);
                break;
            default:
                ea += ga;
            }
        }
        return ea;
    }
    function l(o, p) {
        return Array(p - ('' + o).length + 1).join('0') + o;
    }
    function m() {
        var o = new Date(), p = o.getTime(), q = o.getFullYear(), r = o.getDate() - ((o.getDay() - h.weekStart + 6)%7), s = new Date(q, o.getMonth() + 1, 0).getDate(), t = new Date(q, 1, 29).getMonth() === 1 ? 366: 365, u = 1000 * 60 * 60 * 24;
        return [{
            name: 'today',
            start: o.setHours(0, 0, 0, 0)
        }, {
            name: 'withinDay',
            start: p - u
        }, {
            name: 'thisWeek',
            start: new Date(o.getTime()).setDate(r)
        }, {
            name: 'withinWeek',
            start: p - u * 7
        }, {
            name: 'thisMonth',
            start: o.setDate(1)
        }, {
            name: 'withinMonth',
            start: p - u * s
        }, {
            name: 'thisYear',
            start: o.setMonth(0)
        }, {
            name: 'withinYear',
            start: p - u * t
        }, {
            name: 'older',
            start: - Infinity
        }
        ];
    }
    k.periodNames = ['today', 'thisWeek', 'thisMonth', 'thisYear', 'withinDay', 'withinWeek', 'withinMonth', 'withinYear', 'older'];
    function n() {
        if (typeof window === 'undefined' ||!window ||!window.location)
            return false;
        var o = window.location.pathname, p = '/intern';
        return o.substr(0, p.length) === p;
    }
    e.exports = k;
}, null);
__d("ReactComponentWithPureRenderMixin", ["shallowEqual"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        shouldComponentUpdate: function(i, j) {
            return !g(this.props, i) ||!g(this.state, j);
        }
    };
    e.exports = h;
}, null);
__d("MercuryThreadActions", ["MercuryActionTypeConstants", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin", "MessagingTag", "merge", "mergeInto"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    'use strict';
    function n(o) {
        this.$MercuryThreadActions0 = o;
        this.$MercuryThreadActions1 = i.getForFBID(this.$MercuryThreadActions0);
    }
    n.prototype.markRead = function(o) {
        this.batchMarkRead([o]);
    };
    n.prototype.batchMarkRead = function(o) {
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions2(o, true));
    };
    n.prototype.markUnread = function(o) {
        this.batchMarkUnread([o]);
    };
    n.prototype.batchMarkUnread = function(o) {
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions2(o, false));
    };
    n.prototype.archive = function(o) {
        this.batchArchive([o]);
    };
    n.prototype.batchArchive = function(o) {
        o.forEach(function(p) {
            this.$MercuryThreadActions1.changeThreadArchivedStatus(p, true);
        }.bind(this));
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3(o, true));
    };
    n.prototype.unarchive = function(o) {
        this.batchUnarchive([o]);
    };
    n.prototype.batchUnarchive = function(o) {
        o.forEach(function(p) {
            this.$MercuryThreadActions1.changeThreadArchivedStatus(p, false);
        }.bind(this));
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions3(o, false));
    };
    n.prototype.markSpam = function(o) {
        this.batchMarkSpam([o]);
    };
    n.prototype.batchMarkSpam = function(o) {
        o.forEach(function(p) {
            this.$MercuryThreadActions1.markThreadSpam(p);
        }.bind(this));
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(o, k.SPAM));
    };
    n.prototype.unmarkSpam = function(o) {
        this.batchUnmarkSpam([o]);
    };
    n.prototype.batchUnmarkSpam = function(o) {
        o.forEach(function(p) {
            this.$MercuryThreadActions1.unmarkThreadSpam(p);
        }.bind(this));
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(o, k.INBOX));
    };
    n.prototype.changeFolder = function(o, p) {
        this.batchChangeFolder([o], p);
    };
    n.prototype.batchChangeFolder = function(o, p) {
        o.forEach(function(q) {
            this.$MercuryThreadActions1.changeThreadFolder(q, p);
        }.bind(this));
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions4(o, p));
    };
    n.prototype["delete"] = function(o) {
        this.batchDelete([o]);
    };
    n.prototype.batchDelete = function(o) {
        o.forEach(function(p) {
            this.$MercuryThreadActions1.deleteThread(p);
        }.bind(this));
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5(o, g.DELETE_THREAD, h.CLIENT_DELETE_THREAD));
    };
    n.prototype.unmute = function(o) {
        this.updateMuteSetting(o, 0);
    };
    n.prototype.updateMuteSetting = function(o, p) {
        this.$MercuryThreadActions1.changeMutingOnThread(o, p);
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5([o], g.CHANGE_MUTE_SETTINGS, h.CLIENT_CHANGE_MUTE_SETTINGS, {
            mute_settings: p
        }));
    };
    n.prototype.addParticipants = function(o, p) {
        this.$MercuryThreadActions1.handleUpdate(this.$MercuryThreadActions5([o], g.ADD_PARTICIPANTS, h.CLIENT_ADD_PARTICIPANTS, {
            participants: p
        }));
    };
    n.prototype.$MercuryThreadActions2 = function(o, p) {
        return this.$MercuryThreadActions5(o, g.CHANGE_READ_STATUS, h.CLIENT_CHANGE_READ_STATUS, {
            mark_as_read: p
        });
    };
    n.prototype.$MercuryThreadActions3 = function(o, p) {
        return this.$MercuryThreadActions5(o, g.CHANGE_ARCHIVED_STATUS, h.CLIENT_CHANGE_ARCHIVED_STATUS, {
            archived: p
        });
    };
    n.prototype.$MercuryThreadActions4 = function(o, p) {
        return this.$MercuryThreadActions5(o, g.CHANGE_FOLDER, h.CLIENT_CHANGE_FOLDER, {
            new_folder: p
        });
    };
    n.prototype.$MercuryThreadActions5 = function(o, p, q, r) {
        return {
            actions: o.map(function(s) {
                return l({
                    action_type: p,
                    action_id: null,
                    thread_id: s
                }, r);
            }),
            from_client: true,
            payload_source: q
        };
    };
    m(n, j);
    e.exports = n;
}, null);
__d("MercuryThreadMuter", ["AsyncDialog", "AsyncRequest", "CurrentUser", "DOM"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        getUserIDEmail: function() {
            return i.getID() + '@facebook.com';
        },
        getThreadMuteSettingForUser: function(l) {
            return l.mute_settings && l.mute_settings[k.getUserIDEmail()];
        },
        isThreadMuted: function(l) {
            return k.getThreadMuteSettingForUser(l) !== undefined;
        },
        showMuteChangeDialog: function(l, m) {
            g.send(new h('/ajax/mercury/mute_thread_dialog.php').setRelativeTo(m), function(n) {
                n.subscribe('confirm', function() {
                    this.hide();
                    var o;
                    j.scry(this.getRoot(), 'input[type="radio"]').forEach(function(r) {
                        if (r.checked)
                            o = r.value;
                    });
                    switch (o) {
                    case 'always':
                        o =- 1;
                        break;
                    case '1hour':
                        o = 3600;
                        break;
                    case '8am':
                        var p = new Date(), q = new Date();
                        q.setHours(8);
                        q.setMinutes(0);
                        q.setSeconds(0);
                        if (q > p) {
                            o = q - p;
                        } else 
                            o = q - p + (24 * 3600 * 1000);
                        o/=1000;
                        break;
                    default:
                        o = 0;
                    }
                    d(['MercuryThreadActions'], function(r) {
                        r.get().updateMuteSetting(l, o);
                    });
                }.bind(n));
            });
        }
    };
    e.exports = k;
}, null);
__d("ImageSourceType", [], function(a, b, c, d, e, f) {
    var g = {
        PROFILE_PICTURE: 'profile_picture',
        IMAGE: 'image'
    };
    e.exports = g;
}, null);
__d("ImageSourceRequest", ["CurrentUser", "ImageSourceType", "KeyedCallbackManager", "PhotoResizeModeConst", "MercuryServerDispatcher", "arrayContains", "extendArray"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n() {
        "use strict";
        this._request = {
            fbid: null,
            type: null,
            width: null,
            height: null,
            resize_mode: null
        };
        this._callback = null;
    }
    n.prototype.setFBID = function(r) {
        "use strict";
        this._request.fbid = r;
        return this;
    };
    n.prototype.setType = function(r) {
        "use strict";
        if (!l([h.PROFILE_PICTURE, h.IMAGE], r))
            throw new TypeError('ImageSourceRequest.setType: invalid type ' + r);
        this._request.type = r;
        return this;
    };
    n.prototype.setDimensions = function(r, s) {
        "use strict";
        this._request.width = r;
        this._request.height = s;
        return this;
    };
    n.prototype.setResizeMode = function(r) {
        "use strict";
        if (!l([j.COVER, j.CONTAIN], r))
            throw new TypeError('ImageSourceRequest.setResizeMode: invalid resize mode ' + r);
        this._request.resize_mode = r;
        return this;
    };
    n.prototype.setCallback = function(r) {
        "use strict";
        this._callback = r;
        return this;
    };
    n.prototype.send = function() {
        "use strict";
        if (!this._request.fbid ||!this._request.width ||!this._request.height ||!this._request.type ||!this._request.resize_mode ||!this._callback)
            throw new Error('ImageSourceRequest: You must set all the fields');
        var r = p(), s = q(this._request);
        r.executeOrEnqueue(s, this._callback);
        if (r.getUnavailableResourcesFromRequest(s).length === 1) {
            k.trySend('/ajax/image_source.php', {
                requests: [this._request]
            });
            return true;
        }
        return false;
    };
    var o = null;
    function p() {
        if (o)
            return o;
        var r = new i();
        o = r;
        k.registerEndpoints({
            '/ajax/image_source.php': {
                request_user_id: g.getID(),
                mode: k.BATCH_DEFERRED_MULTI,
                batch_function: function(s, t) {
                    m(s.requests, t.requests);
                    return s;
                },
                handler: function(s, t) {
                    var u = t.getData().requests;
                    for (var v = 0; v < u.length; ++v)
                        r.setResource(q(u[v]), s[v]);
                }
            }
        });
        return r;
    }
    function q(r) {
        return [r.fbid, r.type, r.width, r.height, r.resize_mode].join('|');
    }
    e.exports = n;
}, null);
__d("MercuryCallbackRegistry", [], function(a, b, c, d, e, f) {
    'use strict';
    function g() {
        this.$MercuryCallbackRegistry0 = 0;
        this.$MercuryCallbackRegistry1 = {};
    }
    g.prototype.add = function(h) {
        var i = this.$MercuryCallbackRegistry0++;
        this.$MercuryCallbackRegistry1[i] = h;
        return {
            id: i,
            remove: this.remove.bind(this, i)
        };
    };
    g.prototype.call = function(h) {
        for (var i = [], j = 1, k = arguments.length; j < k; j++)
            i.push(arguments[j]);
        var l = this.$MercuryCallbackRegistry1[h];
        if (l) {
            delete this.$MercuryCallbackRegistry1[h];
            l.apply(null, i);
        }
    };
    g.prototype.remove = function(h) {
        delete this.$MercuryCallbackRegistry1[h];
    };
    e.exports = g;
}, null);
__d("MercuryParticipants", ["CurrentUser", "EventEmitter", "ImageSourceRequest", "ImageSourceType", "ImmutableObject", "Map", "MercuryAssert", "MercuryCallbackRegistry", "MercuryIDs", "MercuryParticipantsConstants", "MercuryParticipantTypes", "PhotoResizeModeConst", "Set", "ShortProfiles", "fbt", "getObjectValues", "requireWeak", "setImmediate"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    'use strict';
    var y = 'update';
    function z(aa) {
        this.$MercuryParticipants0 = aa;
        this.$MercuryParticipants1 = new n();
        this.$MercuryParticipants2 = new h();
        this.$MercuryParticipants3 = new l();
        this.$MercuryParticipants4 = new l();
        this.$MercuryParticipants5 = false;
        this.$MercuryParticipants6 = new s();
        this.$MercuryParticipants7 = new s();
        w(['MercuryServerRequests'], function(ba) {
            var ca = ba.getForFBID(this.$MercuryParticipants0);
            ca.subscribe('update-participants', function(da, ea) {
                if (ea.participants && ea.participants.length > 0) {
                    var fa = new s();
                    ea.participants.forEach(function(ga) {
                        this.$MercuryParticipants8(ga);
                        fa.add(ga.id);
                    }.bind(this));
                    this.$MercuryParticipants2.emit(y, fa);
                }
            }.bind(this));
        }.bind(this));
    }
    z.prototype.subscribe = function(aa) {
        return this.$MercuryParticipants2.addListener(y, aa);
    };
    z.prototype.getIDFromVanityOrFBID = function(aa) {
        if (!aa)
            return;
        if (this.$MercuryParticipants4.has(aa))
            return this.$MercuryParticipants4.get(aa);
        if (/^\d+$/.test(aa))
            return o.getParticipantIDFromUserID(aa);
    };
    z.prototype.getNow = function(aa) {
        return this.$MercuryParticipants3.get(aa);
    };
    z.prototype.getOrFetch = function(aa) {
        var ba = this.getNow(aa);
        if (!ba&&!this.$MercuryParticipants7.has(aa))
            this.$MercuryParticipants6.add(aa);
        if (this.$MercuryParticipants6.size > 0&&!this.$MercuryParticipants5)
            this.$MercuryParticipants9();
        return ba;
    };
    z.prototype.get = function(aa, ba) {
        m.isParticipantID(aa);
        return this.$MercuryParticipantsa([aa], function(ca) {
            ba(ca[aa]);
        });
    };
    z.prototype.getMulti = function(aa, ba) {
        return this.$MercuryParticipantsa(aa, ba);
    };
    z.prototype.getBigImageMulti = function(aa, ba) {
        m.allParticipantIDs(aa);
        var ca = p.BIG_IMAGE_SIZE;
        return this.$MercuryParticipantsa(aa, function(da) {
            var ea = {}, fa = 0, ga = new s(), ha = function(la, ma) {
                fa++;
                ea[la] = ma;
                if (fa === aa.length) {
                    ba(ea);
                    if (ga.size > 0)
                        this.$MercuryParticipants2.emit(y, ga);
                }
            }.bind(this), ia = function(la, ma) {
                this.$MercuryParticipants3.set(la, k.set(this.$MercuryParticipants3.get(la), {
                    big_image_src: ma.uri
                }));
                ga.add(la);
                ha(la, ma.uri);
            }.bind(this);
            for (var ja in da) {
                var ka = da[ja];
                if (!ka.big_image_src) {
                    new i().setFBID(o.getUserIDFromParticipantID(ja)).setType(j.PROFILE_PICTURE).setDimensions(ca, ca).setResizeMode(r.COVER).setCallback(ia.bind(null, ja)).send();
                } else 
                    ha(ka.id, ka.big_image_src);
            }
        }.bind(this));
    };
    z.prototype.getOrderedBigImageMulti = function(aa, ba) {
        return this.getBigImageMulti(aa, function(ca) {
            ba(aa.map(function(da) {
                return ca[da];
            }));
        });
    };
    z.prototype.$MercuryParticipantsa = function(aa, ba) {
        m.allParticipantIDs(aa);
        var ca = this.$MercuryParticipants1.add(ba), da = {}, ea = {}, fa = [];
        aa.forEach(function(ha) {
            if (this.$MercuryParticipants3.has(ha)) {
                da[ha] = this.$MercuryParticipants3.get(ha);
            } else {
                var ia = o.tokenize(ha), ja = ia.type, ka = ia.value;
                if (ja == 'fbid') {
                    ea[ha] = ka;
                } else if (ja == 'email') {
                    da[ha] = this.$MercuryParticipantsb(ha);
                    fa.push(ha);
                }
            }
        }.bind(this));
        var ga = v(ea);
        if (ga.length) {
            t.getMulti(ga, function(ha) {
                for (var ia in ea) {
                    if (!ea.hasOwnProperty(ia))
                        return;
                    var ja = ea[ia], ka = ha[ja], la = {
                        gender: ka.gender,
                        href: ka.uri,
                        id: ia,
                        image_src: ka.thumbSrc,
                        name: ka.name,
                        short_name: ka.firstName,
                        employee: ka.employee,
                        is_employee_away: ka.is_employee_away,
                        type: ka.type,
                        vanity: ka.vanity,
                        is_friend: ka.is_friend,
                        is_messenger_user: ka.isMessengerUser,
                        orion_eligible: ka.orionEligible,
                        social_snippets: ka.social_snippets
                    };
                    this.$MercuryParticipants8(la);
                    da[ia] = this.$MercuryParticipants3.get(ia);
                }
                this.$MercuryParticipants1.call(ca.id, da);
                var ma = new s(Object.keys(ea).concat(fa));
                ma.size > 0 && this.$MercuryParticipants2.emit(y, ma);
            }.bind(this));
        } else {
            this.$MercuryParticipants1.call(ca.id, da);
            fa.length > 0 && this.$MercuryParticipants2.emit(y, new s(fa));
        }
        return ca;
    };
    z.prototype.$MercuryParticipants8 = function(aa) {
        var ba = aa.id, ca = this.$MercuryParticipantsc(aa), da = this.$MercuryParticipants3.get(ba);
        this.$MercuryParticipants3.set(ba, da ? k.set(da, ca) : new k(ca));
        if (aa.vanity)
            this.$MercuryParticipants4.set(aa.vanity, ba);
    };
    z.prototype.$MercuryParticipantsc = function(aa) {
        var ba = aa.type === q.USER || aa.type === q.FRIEND;
        if (!ba)
            return aa;
        if (!aa.name&&!aa.href&&!aa.vanity) {
            var ca = "Facebook User";
            aa.name = ca;
            aa.short_name = ca;
        }
        return aa;
    };
    z.prototype.$MercuryParticipantsb = function(aa) {
        m.isEmailParticipantID(aa);
        if (!this.$MercuryParticipants3.has(aa)) {
            var ba = o.tokenize(aa).value, ca = new k({
                gender: p.UNKNOWN_GENDER,
                href: null,
                id: aa,
                image_src: p.EMAIL_IMAGE,
                big_image_src: p.EMAIL_IMAGE,
                name: ba,
                short_name: ba,
                employee: false
            });
            this.$MercuryParticipants3.set(aa, ca);
        }
        return this.$MercuryParticipants3.get(aa);
    };
    z.prototype.$MercuryParticipants9 = function() {
        if (this.$MercuryParticipants5)
            return;
        this.$MercuryParticipants5 = true;
        x(function() {
            this.$MercuryParticipants5 = false;
            this.$MercuryParticipants6.forEach(function(aa) {
                return this.$MercuryParticipants7.add(aa);
            }.bind(this));
            this.$MercuryParticipantsa(this.$MercuryParticipants6, function(aa) {
                for (var ba in aa)
                    aa.hasOwnProperty(ba) && this.$MercuryParticipants7["delete"](ba);
            }.bind(this));
            this.$MercuryParticipants6.clear();
        }.bind(this));
    };
    e.exports = new z(g.getID());
}, null);
__d("MercuryAttachmentSnippet.react", ["EmoticonsList", "Image.react", "MercuryAttachment", "MercuryAttachmentType", "MercuryConstants", "MercuryIDs", "MercuryParticipants", "React", "StickerConstants", "TextWithEmoticons.react", "cx", "fbt", "ix", "joinClasses", "OrionMercuryAttachmentStrings"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    'use strict';
    var u = b('OrionMercuryAttachmentStrings').module, v = n.createClass({
        displayName: "MercuryAttachmentSnippet",
        propTypes: {
            thread: n.PropTypes.object.isRequired,
            viewer: n.PropTypes.string.isRequired
        },
        componentWillMount: function() {
            this._ensureParticipant(this.props.thread.snippet_sender);
            this._setVariables(this.props);
        },
        componentWillReceiveProps: function(z) {
            this._ensureParticipant(z.thread.snippet_sender);
            this._setVariables(z);
        },
        componentWillUnmount: function() {
            this._cancelParticipantFetch();
        },
        render: function() {
            var z = this._getSenderName();
            if (this._hasOnlyPhotos())
                return this._renderPhotoSnippet(z);
            if (this._hasOnlyVideo())
                return this._renderVideoSnippet(z);
            if (this._hasAudioClip())
                return this._renderAudioClipSnippet(z);
            if (this._hasSticker())
                return this._renderStickerSnippet(z);
            if (this._hasOrion())
                return this._renderOrionSnippet(z);
            if (this._hasShoerackInvitation())
                return this._renderShoerackInvitationSnippet(z);
            if (this._hasShare())
                return this._renderShareSnippet(z);
            return this._renderMixedSnippet(z);
        },
        _renderPhotoSnippet: function(z) {
            var aa;
            if (this._photos.length === 1) {
                if (this._isViewerSender) {
                    aa = ("You sent a photo.");
                } else 
                    aa = (r._("{name} sent a photo.", [r.param("name", z)]));
            } else if (this._isViewerSender) {
                aa = (r._("You sent {num_photos} photos.", [r.param("num_photos", this._photos.length)]));
            } else 
                aa = (r._("{name} sent {num_photos} photos.", [r.param("name", z), r.param("num_photos", this._photos.length)]));
            return this._renderSnippet(aa);
        },
        _renderVideoSnippet: function(z) {
            var aa;
            if (this._isViewerSender) {
                aa = ("You sent a video.");
            } else 
                aa = (r._("{sender name} sent a video.", [r.param("sender name", z)]));
            return this._renderSnippet(aa);
        },
        _renderAudioClipSnippet: function(z) {
            var aa;
            if (this._isViewerSender) {
                aa = ("You sent a voice message.");
            } else 
                aa = (r._("{name} sent a voice message.", [r.param("name", z)]));
            return this._renderSnippet(aa);
        },
        _renderStickerSnippet: function(z) {
            if (x(this._attachments[0].metadata.stickerID)) {
                return (n.createElement(p, {
                    renderEmoticons: true,
                    text: g.symbols.like
                }));
            } else if (this._isViewerSender) {
                return (n.createElement("span", null, "You sent a sticker."));
            } else 
                return (n.createElement("span", null, r._("{name} sent a sticker.", [r.param("name", z)])));
        },
        _renderOrionSnippet: function(z) {
            if (!u)
                return null;
            var aa = u.getOrionMercuryThreadAttachmentMetadataText(this._isViewerSender, z, this._attachments[0].metadata);
            return (n.createElement("span", null, aa));
        },
        _renderShoerackInvitationSnippet: function(z) {
            var aa;
            if (this._isViewerSender) {
                aa = ("You sent a Moments invitation.");
            } else 
                aa = (r._("{sender name} invited you to share photos using Moments.", [r.param("sender name", z)]));
            return this._renderSnippet(aa);
        },
        _renderShareSnippet: function(z) {
            var aa;
            if (this._isViewerSender) {
                aa = ("You shared a link.");
            } else 
                aa = (r._("{sender name} shared a link.", [r.param("sender name", z)]));
            return this._renderSnippet(aa);
        },
        _renderMixedSnippet: function(z) {
            return (n.createElement("span", null, this._attachments.filter(function(aa) {
                return aa.attach_type === j.FILE || aa.attach_type === j.PHOTO || aa.attach_type === j.VIDEO;
            }).map(function(aa) {
                return this._renderSnippet(aa.name, aa.icon_type);
            }.bind(this))));
        },
        _renderSnippet: function(z, aa) {
            var ba = i.getAttachIconClass(aa || this._attachments[0].icon_type), ca = t(ba, "uiIconText _3tn");
            return (n.createElement("span", {
                className: ca
            }, n.createElement(h, {
                src: s('/images/messaging/docs/generic.png')
            }), z));
        },
        _hasOnlyPhotos: function() {
            return this._photos.length === this._attachments.length;
        },
        _hasOnlyVideo: function() {
            return (this._attachments.length === 1 && this._attachments[0].attach_type === j.VIDEO);
        },
        _hasAudioClip: function() {
            return !!(this._attachments.length === 1 && this._attachments[0].metadata && this._attachments[0].metadata.type == 'fb_voice_message');
        },
        _hasSticker: function() {
            return (this._attachments.length === 1 && this._attachments[0].attach_type === j.STICKER);
        },
        _hasOrion: function() {
            return this._hasSingleAttachmentOfShareDataType(k.MercurySupportedShareType.FB_ORION);
        },
        _hasShoerackInvitation: function() {
            return this._hasSingleAttachmentOfShareDataType(k.MercurySupportedShareType.FB_SHOERACK_INVITATION);
        },
        _hasSingleAttachmentOfShareDataType: function(z) {
            return (this._attachments.length === 1 && this._attachments[0].share_data_type === z);
        },
        _hasShare: function() {
            return (this._attachments.length === 1 && this._attachments[0].attach_type === j.SHARE);
        },
        _setVariables: function(z) {
            this._viewer = z.viewer;
            this._sender = z.thread.snippet_sender;
            this._attachments = z.thread.snippet_attachments;
            this._photos = w(this._attachments);
            this._isViewerSender = y(this._sender, this._viewer);
        },
        _getSenderName: function() {
            if (!this._sender || this._isViewerSender)
                return null;
            var z = m.getNow(this._sender);
            if (!z)
                return null;
            return z.short_name;
        },
        _ensureParticipant: function(z) {
            if (!z)
                return;
            this._cancelParticipantFetch();
            if (!m.getNow(z))
                this._sub = m.get(z, function(aa) {
                    return this.forceUpdate();
                }.bind(this));
        },
        _cancelParticipantFetch: function() {
            this._sub && this._sub.remove();
        }
    });
    function w(z) {
        if (!z)
            return [];
        return z.filter(function(aa) {
            return aa.attach_type === j.PHOTO;
        });
    }
    function x(z) {
        return (z == o.LIKE_STICKER_ID || z == o.HOT_LIKE_SMALL_STICKER_ID || z == o.HOT_LIKE_MEDIUM_STICKER_ID || z == o.HOT_LIKE_LARGE_STICKER_ID);
    }
    function y(z, aa) {
        return !!(z && l.getParticipantIDFromUserID(aa) == z);
    }
    e.exports = v;
}, null);
__d("MercuryThreadImage.react", ["ImmutableObject", "MercuryIDs", "MercuryParticipants", "MercuryParticipantsConstants", "Pixelz.react", "React", "SplitImage.react", "areEqual"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    'use strict';
    var o = l.createClass({
        displayName: "MercuryThreadImage",
        propTypes: {
            thread: l.PropTypes.instanceOf(g).isRequired,
            viewer: l.PropTypes.string.isRequired,
            size: l.PropTypes.number
        },
        getInitialState: function() {
            return {
                participantImages: []
            };
        },
        componentDidMount: function() {
            this._getParticipantImages(this.props);
        },
        componentWillReceiveProps: function(p, q) {
            this._getParticipantImages(p);
        },
        shouldComponentUpdate: function(p, q) {
            return (p.thread.image_src !== this.props.thread.image_src || p.size !== this.props.size ||!n(q.participantImages, this.state.participantImages));
        },
        render: function() {
            var p = this.props.size || j.BIG_IMAGE_SIZE;
            if (this.props.thread.image_src)
                return (l.createElement(k, {
                    height: p,
                    resizeMode: 'cover',
                    src: this.props.thread.image_src,
                    width: p
                }));
            if (this.state.participantImages.length > 0)
                return (l.createElement(m, {
                    srcs: this.state.participantImages,
                    border: true,
                    size: p
                }));
            return null;
        },
        _getParticipantImages: function(p) {
            var q = p.thread, r = p.viewer;
            if (q.image_src)
                return;
            var s = h.getParticipantIDFromUserID(r), t = q.participants.filter(function(v) {
                return v != s;
            }), u = [];
            if (!t.length) {
                u = [s];
            } else if (t.length == 1) {
                u = t;
            } else 
                u = t.slice(0, 3);
            i.getOrderedBigImageMulti(u, function(v) {
                this.isMounted() && this.setState({
                    participantImages: v
                });
            }.bind(this));
        }
    });
    e.exports = o;
}, null);
__d("MercuryParticipantListRenderer", ["fbt"], function(a, b, c, d, e, f, g) {
    'use strict';
    function h() {
        this.$MercuryParticipantListRenderer0 = false;
        this.$MercuryParticipantListRenderer1 = false;
        this.$MercuryParticipantListRenderer2 = false;
        this.$MercuryParticipantListRenderer3 = function(r) {
            return this.$MercuryParticipantListRenderer1 ? r.short_name : r.name;
        }.bind(this);
    }
    h.prototype.renderParticipantList = function(r) {
        var s = r.map(this.$MercuryParticipantListRenderer3);
        switch (s.length) {
        case 0:
            return i(this.$MercuryParticipantListRenderer0);
        case 1:
            return j(s);
        case 2:
            return this.$MercuryParticipantListRenderer2 ? l(s) : k(s);
        case 3:
            return this.$MercuryParticipantListRenderer2 ? n(s) : m(s);
        default:
            return this.$MercuryParticipantListRenderer2 ? p(s) : o(s);
        }
    };
    h.prototype.setIsNewThread = function(r) {
        this.$MercuryParticipantListRenderer0 = r;
        return this;
    };
    h.prototype.setNameRenderer = function(r) {
        this.$MercuryParticipantListRenderer3 = r;
        return this;
    };
    h.prototype.setUseShortName = function(r) {
        this.$MercuryParticipantListRenderer1 = r;
        return this;
    };
    h.prototype.setUseAndSeparator = function(r) {
        this.$MercuryParticipantListRenderer2 = r;
        return this;
    };
    function i(r) {
        if (r) {
            return ("New Message");
        } else 
            return ("No Participants");
    }
    function j(r) {
        return r[0];
    }
    function k(r) {
        return (g._("{participant1}, {participant2}", [g.param("participant1", r[0]), g.param("participant2", r[1])]));
    }
    function l(r) {
        return (g._("{participant1} and {participant2}", [g.param("participant1", r[0]), g.param("participant2", r[1])]));
    }
    function m(r) {
        return (g._("{participant1}, {participant2}, {participant3}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("participant3", r[2])]));
    }
    function n(r) {
        return (g._("{participant1}, {participant2} and {participant3}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("participant3", r[2])]));
    }
    function o(r) {
        return (g._("{participant1}, {participant2}, {participant3}, {others_link}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("participant3", r[2]), g.param("others_link", q(r.length - 3))]));
    }
    function p(r) {
        return (g._("{participant1}, {participant2} and {others_link}", [g.param("participant1", r[0]), g.param("participant2", r[1]), g.param("others_link", q(r.length - 2))]));
    }
    function q(r) {
        if (r > 1) {
            return (g._("{others_count} others", [g.param("others_count", r)]));
        } else 
            return ("1 other");
    }
    e.exports = h;
}, null);
__d("MercuryThreadTitle.react", ["MercuryIDs", "MercuryParticipantListRenderer", "MercuryParticipants", "React", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    'use strict';
    var l = j.createClass({
        displayName: "MercuryThreadTitle",
        propTypes: {
            isNewThread: j.PropTypes.bool,
            thread: j.PropTypes.object.isRequired,
            viewer: j.PropTypes.string.isRequired,
            showUnreadCount: j.PropTypes.bool,
            useShortName: j.PropTypes.bool,
            useAndSeparator: j.PropTypes.bool
        },
        getDefaultProps: function() {
            return {
                isNewThread: false,
                showUnreadCount: false,
                useShortName: false,
                useAndSeparator: false
            };
        },
        getInitialState: function() {
            return {
                participantNames: ''
            };
        },
        componentDidMount: function() {
            this._renderParticipantsList(this.props);
        },
        componentWillReceiveProps: function(m) {
            this._renderParticipantsList(m);
        },
        render: function() {
            return (j.createElement("span", {
                className: this.props.className
            }, this.props.thread.name ? this._renderThreadTitle() : this.state.participantNames));
        },
        getTitle: function() {
            return this.state.participantNames;
        },
        _renderThreadTitle: function() {
            var m = this.props.thread;
            if (!m.unread_count ||!this.props.showUnreadCount)
                return m.name;
            return this._renderTitleWithUnreadCount(m.name, m.unread_count);
        },
        _renderParticipantsList: function(m) {
            if (m.thread.name)
                return;
            var n = g.getParticipantIDFromUserID(m.viewer), o = m.thread.participants;
            if (o.length > 1)
                o = o.filter(function(p) {
                    return p != n;
                });
            i.getMulti(o, function(p) {
                if (!this.isMounted())
                    return;
                var q = o.map(function(t) {
                    return p[t];
                }), r = new h().setUseShortName(this.props.useShortName).setUseAndSeparator(this.props.useAndSeparator).setIsNewThread(this.props.isNewThread).renderParticipantList(q), s = (m.showUnreadCount && m.thread.unread_count) ? this._renderTitleWithUnreadCount(r, m.thread.unread_count): r;
                this.setState({
                    participantNames: s
                });
            }.bind(this));
        },
        _renderTitleWithUnreadCount: function(m, n) {
            return (k._("{conversation-title} ({unread-count})", [k.param("conversation-title", m), k.param("unread-count", n)]));
        }
    });
    e.exports = l;
}, null);
__d("WebMessengerThreadPermalinks", ["MercuryIDs", "MessagingTag", "URI", "WebMessengerPermalinkConstants", "WWWBase", "requireWeak"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = {
        getThreadURI: function(q, r, s) {
            if (g.isCanonical(q)) {
                n(q, r, s);
            } else 
                o(q, r, s);
        }
    };
    function n(q, r, s) {
        var t = new i(k.uri), u = g.tokenize(q).value;
        t.setPath(p(s) + '/' + u);
        r && r(t.toString());
    }
    function o(q, r, s) {
        l(['MercuryServerRequests'], function(t) {
            var u = t.get();
            u.getServerThreadID(q, function(v) {
                var w = new i(k.uri);
                w.setPath(j.getURIPathForThreadID(v, p(s)));
                r && r(w.toString());
            });
        });
    }
    function p(q) {
        var r = j.BASE_PATH;
        if (q && q != h.INBOX)
            r += '/' + q;
        return r;
    }
    e.exports = m;
}, null);
__d("MercuryLocalIDs", ["PresenceUtil", "randomInt"], function(a, b, c, d, e, f, g, h) {
    'use strict';
    var i = {
        generateMessageID: function(j) {
            var k = j || Date.now(), l = h(0, 4294967295), m = g.getSessionID();
            return ("<" + k + ":" + l + "-" + m + "@mail.projektitan.com>");
        },
        generateThreadID: function(j) {
            return 'root:' + i.generateMessageID(j);
        }
    };
    e.exports = i;
}, null);
__d("MercuryViewer", ["CurrentUser", "MercuryAssert"], function(a, b, c, d, e, f, g, h) {
    'use strict';
    var i = 'fbid:' + g.getID(), j = {
        getID: function() {
            return i;
        },
        isViewer: function(k) {
            h.isParticipantID(k);
            return k === i;
        }
    };
    e.exports = j;
}, null);
__d("MercuryMessages", ["AsyncRequest", "BanzaiODS", "CurrentUser", "LogHistory", "MercuryActionStatus", "MercuryActionTypeConstants", "MercuryAssert", "MercuryAttachmentType", "MercuryIDs", "MercuryLocalIDs", "MercuryLogMessageType", "MercuryMessageClientState", "MercuryMessageSourceTags", "MercuryPayloadSource", "MercurySingletonMixin", "MercurySourceType", "MercuryTimePassed", "MercuryViewer", "MercuryMessageIDs", "RangedCallbackManager", "ReportState", "MercurySendMessageFields", "MercuryServerRequests", "MercuryThreadActions", "MercuryThreadInformer", "MercuryThreads", "copyProperties", "debounceAcrossTransitions", "formatDate", "invariant", "isNode", "mergeDeep", "setImmediate", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na) {
    'use strict';
    var oa = j.getInstance('mercury_messages');
    function pa(fb, gb) {
        var hb = gb;
        if (fb._localIdsMap[gb])
            hb = fb._localIdsMap[gb];
        return fb._messages[hb];
    }
    function qa(fb, gb) {
        if (gb.status === undefined)
            gb.status = k.UNSENT;
        gb.timestamp_absolute = "Today";
        gb.message_id = gb.message_id || p.generateMessageID(gb.timestamp);
        var hb = o.getParticipantIDFromUserID(fb._fbid);
        gb.specific_to_list = gb.specific_to_list || [];
        if (gb.specific_to_list.length && gb.specific_to_list.indexOf(hb)===-1)
            gb.specific_to_list.push(hb);
        if (!gb.thread_id) {
            if (gb.specific_to_list.length == 1) {
                gb.thread_id = 'user:' + fb._fbid;
            } else if (gb.specific_to_list.length == 2) {
                var ib = gb.specific_to_list[0] == hb ? gb.specific_to_list[1]: gb.specific_to_list[0];
                gb.thread_id = o.getThreadIDFromParticipantID(ib);
            }
            gb.thread_id = gb.thread_id || 'root:' + gb.message_id;
        }
        if (!gb.specific_to_list.length) {
            var jb = o.tokenize(gb.thread_id), kb = jb.type, lb = jb.value;
            if (kb == 'user')
                gb.specific_to_list = ['fbid:' + lb, hb];
        }
        gb[ba.AUTO_RETRY_CNT] = 0;
        if (!gb[ba.MANUAL_RETRY_CNT])
            gb[ba.MANUAL_RETRY_CNT] = 0;
    }
    function ra(fb, gb, hb, ib) {
        var jb = bb(hb) ? [s.CHAT]: [], kb = Date.now(), lb = ia(new Date(kb), 'g:ia'), mb = {
            action_type: gb,
            thread_id: ib,
            author: o.getParticipantIDFromUserID(fb._fbid),
            author_email: null,
            coordinates: null,
            timestamp: kb,
            timestamp_absolute: (new Date(kb)).toLocaleDateString(),
            timestamp_relative: lb,
            timestamp_time_passed: w.TODAY,
            is_unread: false,
            is_cleared: false,
            is_forward: false,
            is_filtered_content: false,
            is_spoof_warning: false,
            source: hb,
            source_tags: jb
        };
        return mb;
    }
    function sa(fb) {
        switch (fb) {
        case t.UNKNOWN:
        case t.SERVER_INITIAL_DATA:
        case t.SERVER_FETCH_THREAD_INFO:
        case t.SERVER_THREAD_SYNC:
            return true;
        }
        return false;
    }
    function ta(fb) {
        return fb && fb.substr(0, 6) === 'server';
    }
    function ua(fb, gb) {
        if (!fb._threadsToMessages[gb])
            fb._threadsToMessages[gb] = new z(function(hb) {
                return pa(fb, hb).timestamp;
            }, function(hb, ib) {
                return ib - hb;
            });
        return fb._threadsToMessages[gb];
    }
    function va(fb) {
        var gb = [];
        return JSON.stringify(fb, function(hb, ib) {
            if (typeof ib === 'object' && ib !== null) {
                if (ka(ib))
                    return '<' + ib.nodeName + '>';
                if (gb.indexOf(ib)!==-1)
                    return 'CIRCULAR';
                gb.push(ib);
            }
            return ib;
        });
    }
    aa.registerCallback('mercury-messages', function() {
        var fb = {}, gb = {}, hb = xa._getInstances();
        for (var ib in hb) {
            fb[ib] = {};
            for (var jb in hb[ib]._messages) {
                var kb = hb[ib]._messages[jb];
                if (Object.keys(kb).length === 0)
                    continue;
                var lb = kb.thread_id;
                fb[ib][lb] = fb[ib][lb] || {};
                fb[ib][lb][kb.message_id] = JSON.parse(va(kb));
            }
            gb[ib] = ga({}, hb[ib]._localIdsMap);
        }
        var mb = {};
        mb.local_message_ids = gb;
        mb.messages = fb;
        return mb;
    });
    function wa(fb, gb, hb) {
        gb.forEach(function(ib) {
            var jb = ua(fb, ib);
            jb.setReachedEndOfArray();
            fb._threadInformer.reorderedMessages(ib, hb);
        });
    }
    function xa(fb) {
        this._fbid = fb;
        this._serverRequests = ca.getForFBID(this._fbid);
        this._threadInformer = ea.getForFBID(this._fbid);
        this._threads = fa.getForFBID(this._fbid);
        this._threadActions = da.getForFBID(this._fbid);
        this._failedHistoryFetchThreads = {};
        this._threadsToMessages = {};
        this._localTitanMessagesCount = {};
        this._messages = {};
        this._attachmentData = {};
        this._messagesNeedingAttachmentData = {};
        this._localIdsMap = {};
        this._serverRequests.subscribe('update-messages', function(gb, hb) {
            var ib = (hb.actions || []).filter(function(kb) {
                var lb = kb.action_type;
                return (kb.is_forward || kb.thread_id) && (lb == l.LOG_MESSAGE || lb == l.USER_GENERATED_MESSAGE || lb == l.SEND_MESSAGE || lb == l.CLEAR_CHAT || lb == l.DELETE_THREAD || lb == l.DELETE_MESSAGES || lb == l.MARK_MESSAGES_SPAM);
            }), jb = sa(hb.payload_source);
            if (ta(hb.payload_source))
                ib.forEach(function(kb) {
                    if (!kb.is_forward) {
                        var lb = this._threads.getThreadMetaNow(kb.thread_id);
                        if (lb)
                            kb.is_cleared = kb.timestamp < lb.chat_clear_time;
                    }
                }.bind(this));
            this.handleUpdates(ib, jb, hb.payload_source, hb.from_client);
            if (hb.end_of_history)
                wa(this, hb.end_of_history, hb.payload_source);
        }.bind(this));
        oa.debug('constructed', {
            fbid: this._fbid
        });
    }
    ga(xa.prototype, {
        getMessagesFromIDs: function(fb) {
            return (fb || []).map(pa.bind(null, this)).filter(function(gb) {
                return gb;
            });
        },
        hasLoadedNMessages: function(fb, gb) {
            var hb = ua(this, fb);
            return hb.hasReachedEndOfArray() || hb.getCurrentArraySize() >= gb;
        },
        hasLoadedExactlyNMessages: function(fb, gb) {
            var hb = ua(this, fb);
            return hb.getCurrentArraySize() == gb;
        },
        clearMercuryInternalState_DO_NOT_USE: function() {
            this._failedHistoryFetchThreads = {};
            this._threadsToMessages = {};
            this._localTitanMessagesCount = {};
            this._messages = {};
            this._attachmentData = {};
            this._messagesNeedingAttachmentData = {};
            this._localIdsMap = {};
        },
        getThreadMessagesRange: function(fb, gb, hb, ib, jb, kb) {
            var lb = ua(this, fb), mb = function(ub) {
                ib(ya(this, ub));
            }.bind(this), nb = lb.executeOrEnqueue(gb, hb, mb), ob = lb.getUnavailableResources(nb), pb = this._failedHistoryFetchThreads[fb];
            if (ob.length&&!pb) {
                var qb = lb.getCurrentArraySize(), rb = this._localTitanMessagesCount[fb] || 0, sb = qb - rb, tb = ob.length + rb;
                oa.debug('fetch_missing_messages', {
                    threadID: fb,
                    offset: gb,
                    limit: hb,
                    missingIndices: ob,
                    messageCount: qb,
                    localMessageCount: rb
                });
                this._serverRequests.fetchThreadMessages(fb, sb, tb, jb, kb);
            } else 
                this._failedHistoryFetchThreads[fb] = false;
            return nb;
        },
        getThreadMessagesSinceTimestamp: function(fb, gb) {
            var hb = ua(this, fb), ib = hb.getElementsUntil(gb);
            return ya(this, ib);
        },
        hasLoadedAllMessages: function(fb) {
            return ua(this, fb).hasReachedEndOfArray();
        },
        getCurrentlyLoadedMessages: function(fb) {
            var gb = ua(this, fb).getAllResources();
            return ya(this, gb);
        },
        unsubscribe: function(fb, gb) {
            m.isThreadID(gb);
            var hb = ua(this, gb);
            hb.unsubscribe(fb);
        },
        addAttachmentData: function(fb, gb, hb) {
            var ib = pa(this, fb);
            if (ib) {
                var jb = ib.attachments.indexOf(gb);
                if (jb!=-1) {
                    ib.attachments = ib.attachments.map(function(kb, lb) {
                        return lb === jb ? hb : kb;
                    });
                    this._threadInformer.updatedMessage(ib.thread_id, ib.message_id, 'attach');
                }
            } else {
                if (!this._attachmentData[fb])
                    this._attachmentData[fb] = [];
                this._attachmentData[fb].push({
                    attach_key: gb,
                    data: hb
                });
            }
        },
        shouldSortOutOfOrderMessages: function(fb, gb, hb) {
            if (fb == t.CLIENT_CHANNEL_MESSAGE) {
                var ib = this.getThreadMessagesSinceTimestamp(gb, hb);
                if (ib.length > 0) {
                    h.bumpEntityKey('chat.web', 'channel.messages_reordered');
                    return true;
                }
            }
            return false;
        },
        handleUpdates: function(fb, gb, hb, ib) {
            var jb, kb = {}, lb = {};
            for (var mb = 0; mb < fb.length; mb++) {
                var nb = fb[mb];
                if (nb.is_forward || hb == t.SERVER_SEARCH) {
                    if (!this._messages[nb.message_id]) {
                        this._messages[nb.message_id] = nb;
                        cb(this, nb);
                    }
                    continue;
                }
                if (nb.client_state === r.SEND_TO_SERVER) {
                    this._messages[nb.message_id] = nb;
                    cb(this, nb);
                    continue;
                }
                var ob = nb.action_type;
                if (hb == t.CLIENT_CHANNEL_MESSAGE && ob == l.USER_GENERATED_MESSAGE && nb.threading_id && this._localIdsMap[nb.threading_id] === nb.threading_id) {
                    nb.client_message_id = nb.threading_id;
                    nb.status = k.SUCCESS;
                    nb.action_type = l.SEND_MESSAGE;
                    ob = nb.action_type;
                }
                if (hb === t.CLIENT_CHANNEL_MESSAGE && ob == l.USER_GENERATED_MESSAGE) {
                    var pb = this._threads.getThreadMetaNow(nb.thread_id);
                    if (pb && pb.folder)
                        nb.folder = pb.folder;
                }
                if (ob == l.SEND_MESSAGE) {
                    var qb = nb.client_message_id;
                    if (qb && this._localIdsMap[qb] && nb.status) {
                        var rb = pa(this, qb), sb = rb.status;
                        if (rb.status == k.SUCCESS)
                            continue;
                        if (nb.status == k.UNCONFIRMED) {
                            if (!lb[nb.thread_id])
                                lb[nb.thread_id] = [];
                            lb[nb.thread_id].push(qb);
                        } else if (!kb[nb.thread_id])
                            kb[nb.thread_id] = [];
                        this.updateLocalMessage(nb, hb);
                        if (typeof sb !== undefined || nb.status == k.FAILED_UNKNOWN_REASON || nb.status == k.UNABLE_TO_CONFIRM || nb.status == k.SUCCESS || nb.status == k.ERROR)
                            this._threadInformer.updatedMessage(nb.thread_id, pa(this, qb).message_id, hb);
                    }
                    continue;
                } else if (ob == l.DELETE_THREAD) {
                    ua(this, nb.thread_id).removeAllResources();
                    continue;
                } else if (ob == l.DELETE_MESSAGES) {
                    this._deleteMessages(nb.thread_id, nb.message_ids, hb);
                    continue;
                } else if (ob == l.LOG_MESSAGE) {
                    if (nb.log_message_type == q.SERVER_ERROR)
                        this._failedHistoryFetchThreads[nb.thread_id] = true;
                } else if (ob == l.CLEAR_CHAT) {
                    var tb = ua(this, nb.thread_id).getAllResources();
                    tb.map(pa.bind(null, this)).forEach(function(zb) {
                        zb.is_cleared = true;
                    });
                    continue;
                } else if (ob === l.MARK_MESSAGES_SPAM) {
                    this._markMessagesSpam(nb, hb);
                    continue;
                }
                var ub = pa(this, nb.message_id);
                if ((nb.threading_id && this._localIdsMap[nb.threading_id]) || (ub&&!ub.is_forward)) {
                    if (ub && nb.ranges && nb.ranges.length > 0) {
                        ub.ranges = nb.ranges;
                        this._threadInformer.updatedMessage(ub.thread_id, ub.message_id, 'link_shim');
                    }
                    continue;
                }
                if (!kb[nb.thread_id])
                    kb[nb.thread_id] = [];
                kb[nb.thread_id].push(nb.message_id);
                this._messages[nb.message_id] = nb;
                cb(this, nb);
                if (nb.threading_id && nb.threading_id != nb.message_id)
                    y.addServerID(nb.threading_id, nb.message_id);
                gb = gb || this.shouldSortOutOfOrderMessages(hb, nb.thread_id, nb.timestamp);
                if (!gb)
                    this._threadInformer.receivedMessage(nb);
            }
            for (var vb in kb) {
                jb = ua(this, vb);
                var wb = jb.getAllResources(), xb = wb.filter(function(zb) {
                    var ac = this._messages[zb];
                    return ac.action_type == l.LOG_MESSAGE && ac.log_message_type == q.SERVER_ERROR;
                }.bind(this));
                jb.removeResources(xb);
                if (ib)
                    za(this, vb, kb[vb]);
                if (gb) {
                    jb.addResources(kb[vb]);
                    this._threadInformer.reorderedMessages(vb, hb);
                } else 
                    jb.addResourcesWithoutSorting(kb[vb].reverse(), 0);
                this._threadInformer.updatedThread(vb);
            }
            var yb = Object.keys(lb);
            if (yb.length)
                this._serverRequests.requestMessageConfirmation(lb);
            oa.debug('handle_updates', {
                localMessageCounts: la(this._localTitanMessagesCount)
            });
        },
        sendMessage: function(fb, gb, hb) {
            gb = gb || Function.prototype;
            qa(this, fb);
            this._localIdsMap[fb.message_id] = fb.message_id;
            if (fb.thread_id == 'root:' + fb.message_id)
                ua(this, fb.thread_id).setReachedEndOfArray();
            this._serverRequests.sendNewMessage(fb, hb);
            gb(fb.thread_id);
        },
        isOutbound: function(fb) {
            return fb.author == x.getID();
        },
        isInbound: function(fb) {
            return !this.isOutbound(fb);
        },
        isSending: function(fb) {
            return (fb.status === k.UNSENT || fb.status === k.UNCONFIRMED || fb.status === k.UNABLE_TO_CONFIRM || fb.status === k.RESENDING);
        },
        isFirstMessage: function(fb) {
            var gb = ua(this, fb.thread_id);
            if (gb.getCurrentArraySize() === 0)
                return false;
            var hb = gb.getResourceAtIndex(gb.getCurrentArraySize() - 1), ib = pa(this, hb).message_id, jb = pa(this, fb.message_id).message_id;
            return gb.hasReachedEndOfArray() && ib == jb;
        },
        resendMessage: function(fb, gb) {
            var hb = ga({}, fb);
            hb.status = k.RESENDING;
            hb.timestamp = Date.now();
            hb.message_id = fb.message_id;
            hb[ba.AUTO_RETRY_CNT] = 0;
            hb[ba.MANUAL_RETRY_CNT] += 1;
            this._messages[fb.message_id] = hb;
            var ib = ua(this, fb.thread_id);
            ib.resortResources([fb.message_id]);
            this.sendMessage(hb, null, gb);
            this._threadInformer.reorderedMessages(fb.thread_id, t.CLIENT_SEND_MESSAGE);
        },
        _isWholeThread: function(fb, gb) {
            var hb = ua(this, fb);
            return (hb.getCurrentArraySize() == gb.length && hb.hasReachedEndOfArray());
        },
        _markMessagesSpam: function(fb, gb) {
            var hb = fb, ib = hb.thread_id, jb = hb.message_ids;
            if (!jb.length)
                return;
            if (this._isWholeThread(ib, jb)) {
                ma(function() {
                    return this._threadActions.markSpam(ib);
                }.bind(this));
            } else {
                this._deleteIndividualMessages(fb.thread_id, fb.message_ids, gb);
                this._serverRequests.markMessagesSpam(ib, jb);
            }
        },
        _deleteMessages: function(fb, gb, hb) {
            if (!gb.length)
                return;
            if (hb === t.CLIENT_CHANNEL_MESSAGE)
                this._deleteIndividualMessages(fb, gb, hb);
            if (this._isWholeThread(fb, gb)) {
                ma(function() {
                    return this._threadActions["delete"](fb);
                }.bind(this));
            } else {
                this._serverRequests.deleteMessages(fb, gb);
                this._deleteIndividualMessages(fb, gb, hb);
            }
        },
        _deleteIndividualMessages: function(fb, gb, hb) {
            var ib = gb.map(function(kb) {
                return pa(this, kb).message_id;
            }, this), jb = ua(this, fb);
            jb.removeResources(ib);
            this._threadInformer.reorderedMessages(fb, hb);
        },
        updateLocalMessage: function(fb, gb) {
            var hb = pa(this, fb.client_message_id);
            hb.status = fb.status;
            if (fb.status === k.SUCCESS || fb.error_data)
                hb.error_data = fb.error_data;
            var ib = fb.message_id, jb = fb.client_message_id;
            if (this._messages[ib])
                return false;
            this._localIdsMap[jb] = ib;
            this._messages[ib] = this._messages[jb];
            y.addServerID(jb, ib);
            this._messages[jb] = {};
            var kb = pa(this, jb);
            if (fb.timestamp)
                kb.timestamp = fb.timestamp;
            if (fb.attachments && fb.attachments.length) {
                kb.raw_attachments = null;
                kb.attachments = fb.attachments;
                cb(this, kb, ib);
            }
            if (fb.log_message_data)
                kb.log_message_data = fb.log_message_data;
            if (ab(kb))
                this._localTitanMessagesCount[kb.thread_id]--;
            return true;
        },
        constructUserGeneratedMessageObject: function(fb, gb, hb, ib, jb) {
            var kb = ra(this, l.USER_GENERATED_MESSAGE, gb, hb);
            if (typeof fb == 'string')
                fb = fb.replace(/^\s+/, '').replace(/\s+$/, '');
            kb.body = fb;
            kb.has_attachment = false;
            kb.html_body = false;
            kb.attachments = [];
            kb.specific_to_list = ib || [];
            kb.creator_info = jb;
            return kb;
        },
        constructLogMessageObject: function(fb, gb, hb, ib) {
            var jb = ra(this, l.LOG_MESSAGE, fb, gb);
            jb.log_message_type = hb;
            jb.log_message_data = ib;
            return jb;
        },
        getNumberLocalMessages: function(fb) {
            return this._localTitanMessagesCount[fb] || 0;
        },
        _uploadMessages: {},
        sendPendingUploadStartedMessage: function(fb, gb, hb) {
            if (hb.preview_attachments.length > 0) {
                fb.has_attachment = true;
                fb.preview_attachments = hb.preview_attachments;
            }
            fb.client_state = r.DO_NOT_SEND_TO_SERVER;
            fb.status = k.RESENDING;
            this._uploadMessages[gb] = fb;
            this.sendMessage(fb);
        },
        confirmPendingUploadStartedMessage: function(fb, gb) {
            var hb = this._updateMessageAfterUpload(fb, gb);
            this.sendMessage(hb);
        },
        cancelPendingUploadStartedMessage: function(fb, gb) {
            var hb = this._updateMessageAfterUpload(fb, gb);
            this._deleteIndividualMessages(hb.thread_id, [hb.message_id]);
            if (this._localTitanMessagesCount[hb.thread_id])
                this._localTitanMessagesCount[hb.thread_id]--;
        },
        _updateMessageAfterUpload: function(fb, gb) {
            var hb = this._uploadMessages[fb];
            ja(hb);
            hb.image_ids = gb.image_ids;
            hb.client_state = r.SEND_TO_SERVER;
            delete this._uploadMessages[fb];
            return hb;
        }
    });
    ga(xa, u, {
        addAttachmentData: function(fb, gb, hb, ib) {
            ib = ib || i.getID();
            xa.getForFBID(ib).addAttachmentData(fb, gb, hb);
        }
    });
    function ya(fb, gb) {
        var hb = gb.map(pa.bind(null, fb));
        return hb.reverse();
    }
    function za(fb, gb, hb) {
        var ib = hb.filter(function(jb) {
            return ab(pa(fb, jb));
        });
        if (!fb._localTitanMessagesCount[gb])
            fb._localTitanMessagesCount[gb] = 0;
        fb._localTitanMessagesCount[gb] += ib.length;
    }
    function ab(fb) {
        var gb = fb.action_type;
        if (gb == l.USER_GENERATED_MESSAGE)
            return true;
        switch (fb.log_message_type) {
        case q.SUBSCRIBE:
        case q.UNSUBSCRIBE:
        case q.SERVER_ERROR:
        case q.LIVE_LISTEN:
            return false;
        default:
            return true;
        }
    }
    function bb(fb) {
        switch (fb) {
        case v.CHAT_WEB:
        case v.CHAT_JABBER:
        case v.CHAT_IPHONE:
        case v.CHAT_MEEBO:
        case v.CHAT_ORCA:
        case v.CHAT_TEST:
        case v.CHAT:
        case v.DESKTOP:
            return true;
        default:
            return false;
        }
    }
    function cb(fb, gb, hb) {
        hb = hb || gb.message_id;
        var ib = fb._attachmentData[hb];
        if (ib) {
            ib.forEach(function(jb) {
                var kb = gb.attachments.indexOf(jb.attach_key);
                if (kb!==-1)
                    gb.attachments[kb] = jb.data;
            });
            delete fb._attachmentData[hb];
        } else if (!gb.is_forward && db(fb, gb)) {
            fb._messagesNeedingAttachmentData[hb] = true;
            eb(fb);
        }
    }
    function db(fb, gb) {
        if (!gb ||!gb.attachments)
            return false;
        for (var hb = 0; hb < gb.attachments.length; hb++) {
            var ib = gb.attachments[hb];
            if (typeof ib === 'string' && ib.indexOf(n.SHARE) === 0)
                return true;
        }
        var jb = gb.forward_message_ids || [];
        for (hb = 0; hb < jb.length; hb++) {
            var kb = pa(fb, jb[hb]);
            if (db(fb, kb))
                return true;
        }
        return false;
    }
    var eb = ha(function(fb) {
        var gb = {};
        for (var hb in fb._messagesNeedingAttachmentData) {
            var ib = pa(fb, hb);
            if (db(fb, ib))
                gb[hb] = true;
        }
        var jb = Object.keys(gb);
        if (jb.length) {
            var kb = {
                message_ids: jb
            };
            if (fb._fbid != i.getID())
                kb.request_user_id = fb._fbid;
            new g('/ajax/mercury/attachments/fetch_shares.php').setData(kb).setAllowCrossPageTransition(true).send();
        }
        fb._messagesNeedingAttachmentData = {};
    }, 0, this);
    e.exports = xa;
}, null);
__d("MercuryChannelHandler", ["Arbiter", "ChannelConstants", "MercuryActionTypeConstants", "MercuryGlobalActionType", "MercuryMessages", "MercuryPayloadSource", "MercuryServerRequests", "MercurySingletonMixin", "MercuryThreadInformer", "MercuryViewer", "MessagingEvent", "MessagingReliabilityLogger", "MessagingTag", "PresenceUtil", "copyProperties", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    var w = v(n);
    for (var x in w)
        if (w.hasOwnProperty(x))
            z[x] = w[x];
    var y = w === null ? null: w.prototype;
    z.prototype = Object.create(y);
    z.prototype.constructor = z;
    z.__superConstructor__ = w;
    function z(aa) {
        "use strict";
        this.$MercuryChannelHandler0 = aa;
        this.$MercuryChannelHandler1 = m.getForFBID(this.$MercuryChannelHandler0);
        this.$MercuryChannelHandler2 = o.getForFBID(this.$MercuryChannelHandler0);
        this.$MercuryChannelHandler3 = k.getForFBID(this.$MercuryChannelHandler0);
        this.$MercuryChannelHandler4 = [];
    }
    z.prototype.getInstanceFBID = function() {
        "use strict";
        return this.$MercuryChannelHandler0;
    };
    z.prototype.$MercuryChannelHandler5 = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj ||!ba.obj.message) {
            r.addEntry('channel_receive', 'invalid_data');
            return;
        }
        var ca = ba.obj.message, da = ca.other_user_fbid ? ca.other_user_fbid: ca.thread_fbid, ea = {
            author: ca.mercury_author_id,
            author_email: ca.mercury_author_email,
            body: ca.body,
            subject: ca.subject,
            has_attachment: ca.has_attachment,
            attachments: ca.attachments,
            html_body: ca.html_body,
            thread_id: ca.tid,
            thread_fbid: ca.thread_fbid,
            other_user_fbid: ca.other_user_fbid,
            message_id: ca.mid,
            coordinates: ca.mercury_coordinates,
            is_spoof_warning: ca.is_spoof_warning,
            ranges: ca.ranges,
            source: ca.mercury_source,
            source_tags: ca.mercury_source_tags,
            threading_id: ca.threading_id,
            timestamp: ca.timestamp,
            timestamp_absolute: ca.timestamp_absolute,
            timestamp_relative: ca.timestamp_relative,
            timestamp_time_passed: ca.timestamp_time_passed,
            action_type: i.USER_GENERATED_MESSAGE,
            is_unread: ca.is_unread,
            is_forward: false,
            forward_count: ca.forward_count || ca.forward,
            forward_message_ids: ca.forward_msg_ids,
            location_text: ca.location_text,
            folder: ba.obj.folder
        };
        if ("sync_id" in ca) {
            ea.sync_id = ca.sync_id;
        } else 
            ea.action_id = ca.action_id;
        var fa = [u({}, ea)];
        fa = fa.concat(ca.forward_actions || []);
        var ga = l.CLIENT_CHANNEL_MESSAGE;
        this.$MercuryChannelHandler1.handleUpdateWaitForThread({
            actions: fa,
            payload_source: ga
        }, da);
        if (!ca.is_unread && p.isViewer(ca.mercury_author_id)) {
            var ha = {};
            ha[da] = ba.obj.folder;
            this.$MercuryChannelHandler7(this.__getMessagingPayloadType(), {
                obj: {
                    event: q.READ,
                    thread_fbids: ca.thread_fbid ? [ca.thread_fbid]: [],
                    other_user_fbids: ca.other_user_fbid ? [ca.other_user_fbid]: [],
                    folder_info: ha,
                    timestamp: ca.timestamp
                }
            });
        }
        r.addEntry('channel_receive', 'success', [da, ea.message_id, t.getSessionID()]);
    };
    z.prototype.$MercuryChannelHandler7 = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj || (!ba.obj.thread_fbids&&!ba.obj.other_user_fbids))
            return;
        var ca = [], da = ba.obj.event == q.READ;
        (ba.obj.thread_fbids || []).forEach(function(ea) {
            ca.push({
                action_type: i.CHANGE_READ_STATUS,
                action_id: null,
                thread_fbid: ea,
                mark_as_read: da,
                timestamp: ba.obj.timestamp || 0,
                folder: ba.obj.folder_info[ea]
            });
        });
        (ba.obj.other_user_fbids || []).forEach(function(ea) {
            ca.push({
                action_type: i.CHANGE_READ_STATUS,
                action_id: null,
                other_user_fbid: ea,
                mark_as_read: da,
                timestamp: ba.obj.timestamp || 0,
                folder: ba.obj.folder_info[ea]
            });
        });
        this.$MercuryChannelHandler1.handleUpdate({
            actions: ca,
            payload_source: l.CLIENT_CHANNEL_MESSAGE
        });
    };
    z.prototype.$MercuryChannelHandler8 = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj ||!(ba.obj.thread_fbids || ba.obj.other_user_fbids))
            return;
        var ca = [];
        (ba.obj.thread_fbids || []).forEach(function(da) {
            ca.push({
                action_type: i.DELETE_THREAD,
                action_id: null,
                thread_fbid: da
            });
        });
        (ba.obj.other_user_fbids || []).forEach(function(da) {
            ca.push({
                action_type: i.DELETE_THREAD,
                action_id: null,
                other_user_fbid: da
            });
        });
        this.$MercuryChannelHandler1.handleUpdate({
            actions: ca,
            payload_source: l.CLIENT_CHANNEL_MESSAGE
        });
    };
    z.prototype.$MercuryChannelHandler9 = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj || (!ba.obj.thread_fbids&&!ba.obj.other_user_fbids) ||!ba.obj.mids)
            return;
        var ca = ba.obj.thread_fbids.length ? ba.obj.thread_fbids[0]: null, da = ba.obj.other_user_fbids.length ? ba.obj.other_user_fbids[0]: null, ea = {
            action_type: i.DELETE_MESSAGES,
            action_id: null,
            thread_fbid: ca,
            other_user_fbid: da,
            message_ids: ba.obj.mids
        };
        this.$MercuryChannelHandler1.handleUpdate({
            actions: [ea],
            threads: [ba.obj.updated_thread],
            payload_source: l.CLIENT_CHANNEL_MESSAGE
        });
    };
    z.prototype.$MercuryChannelHandlera = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj ||!ba.obj.folder)
            return;
        var ca = {
            action_type: j.MARK_ALL_READ,
            action_id: ba.obj.action_id,
            folder: ba.obj.folder
        };
        this.$MercuryChannelHandler1.handleUpdate({
            global_actions: [ca]
        });
    };
    z.prototype.$MercuryChannelHandlerb = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) || (!ba.obj.thread_fbids&&!ba.obj.other_user_fbids))
            return;
        var ca = l.CLIENT_CHANNEL_MESSAGE;
        (ba.obj.thread_fbids || []).forEach(function(da) {
            var ea = {
                action_type: i.CHANGE_ARCHIVED_STATUS,
                action_id: null,
                thread_fbid: da,
                other_user_fbid: null,
                archived: ba.obj.state
            };
            this.$MercuryChannelHandler1.handleUpdateWaitForThread({
                actions: [u({}, ea)],
                payload_source: ca
            }, da);
        }, this);
        (ba.obj.other_user_fbids || []).forEach(function(da) {
            var ea = {
                action_type: i.CHANGE_ARCHIVED_STATUS,
                action_id: null,
                thread_fbid: null,
                other_user_fbid: da,
                archived: ba.obj.state
            };
            this.$MercuryChannelHandler1.handleUpdateWaitForThread({
                actions: [u({}, ea)],
                payload_source: ca
            }, da);
        }, this);
    };
    z.prototype.$MercuryChannelHandlerc = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) || (!ba.obj.thread_fbids&&!ba.obj.other_user_fbids))
            return;
        var ca = l.CLIENT_CHANNEL_MESSAGE, da;
        (ba.obj.thread_fbids || []).forEach(function(ea) {
            if (ba.obj.event == q.TAG) {
                da = ba.obj.tag;
            } else 
                da = ba.obj.marked_as_spam ? s.SPAM : s.INBOX;
            var fa = {
                action_type: i.CHANGE_FOLDER,
                action_id: null,
                thread_fbid: ea,
                other_user_fbid: null,
                new_folder: da
            };
            this.$MercuryChannelHandler1.handleUpdateWaitForThread({
                actions: [u({}, fa)],
                payload_source: ca
            }, ea);
        }, this);
        (ba.obj.other_user_fbids || []).forEach(function(ea) {
            if (ba.obj.event == q.TAG) {
                da = ba.obj.tag;
            } else 
                da = ba.obj.marked_as_spam ? s.SPAM : s.INBOX;
            var fa = {
                action_type: i.CHANGE_FOLDER,
                action_id: null,
                other_user_fbid: ea,
                thread_fbid: null,
                new_folder: da
            };
            this.$MercuryChannelHandler1.handleUpdateWaitForThread({
                actions: [u({}, fa)],
                payload_source: ca
            }, ea);
        }, this);
    };
    z.prototype.$MercuryChannelHandlerd = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj.tag)
            return;
        switch (ba.obj.tag) {
        case s.ACTION_ARCHIVED:
            this.$MercuryChannelHandlerb(aa, ba);
            break;
        case s.INBOX:
        case s.OTHER:
            this.$MercuryChannelHandlerc(aa, ba);
            break;
        }
    };
    z.prototype.__markAsSeen = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandlere(aa) ||!ba.obj ||!ba.obj.seen_timestamp)
            return;
        this.$MercuryChannelHandler1.handleUpdate({
            message_counts: [{
                seen_timestamp: ba.obj.seen_timestamp,
                folder: s.INBOX
            }
            ],
            unseen_thread_fbids: [{
                thread_fbids: [],
                other_user_fbids: [],
                folder: s.INBOX
            }
            ],
            payload_source: l.CLIENT_CHANNEL_MESSAGE
        });
    };
    z.prototype.__updateModelsFromMercuryPayload = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandlerf(aa) ||!ba.obj)
            return;
        this.$MercuryChannelHandler2.synchronizeInforms(function() {
            var ca = ba.obj, da = [];
            (ca.actions || []).forEach(function(ea) {
                var fa = i.USER_GENERATED_MESSAGE;
                if (ea.action_type == i.LOG_MESSAGE) {
                    var ga = l.CLIENT_CHANNEL_MESSAGE, ha;
                    ha = ea.other_user_fbid || ea.thread_fbid;
                    this.$MercuryChannelHandler1.handleUpdateWaitForThread({
                        actions: [u({}, ea)],
                        payload_source: ga
                    }, ha);
                } else if (ea.action_type != fa)
                    da.push(ea);
            }, this);
            ca.actions = da;
            ca.payload_source = l.CLIENT_CHANNEL_MESSAGE;
            this.$MercuryChannelHandler1.handleUpdate(ca);
        }.bind(this));
    };
    z.prototype.$MercuryChannelHandlerg = function(aa, ba) {
        "use strict";
        this.$MercuryChannelHandler1.handleRoger(ba.obj);
    };
    z.prototype.$MercuryChannelHandlerh = function(aa, ba) {
        "use strict";
        if (!this.$MercuryChannelHandler6(aa) ||!ba.obj || ba.obj.mute_settings === undefined || (!ba.obj.thread_fbid&&!ba.obj.other_user_fbid))
            return;
        var ca = i.CHANGE_MUTE_SETTINGS, da = [{
            action_type: ca,
            action_id: null,
            thread_fbid: ba.obj.thread_fbid,
            other_user_fbid: ba.obj.other_user_fbid,
            mute_settings: ba.obj.mute_settings
        }
        ];
        this.$MercuryChannelHandler1.handleUpdate({
            actions: da,
            payload_source: l.CLIENT_CHANNEL_MESSAGE
        });
    };
    z.prototype.__handleMessagingPayload = function(aa, ba) {
        "use strict";
        switch (ba.obj.event) {
        case q.DELIVER:
            this.$MercuryChannelHandler5(aa, ba);
            break;
        case q.READ:
        case q.UNREAD:
            this.$MercuryChannelHandler7(aa, ba);
            break;
        case q.READ_ALL:
            this.$MercuryChannelHandlera(aa, ba);
            break;
        case q.DELETE:
            this.$MercuryChannelHandler8(aa, ba);
            break;
        case q.DELETE_MESSAGES:
            this.$MercuryChannelHandler9(aa, ba);
            break;
        case q.TAG:
            this.$MercuryChannelHandlerd(aa, ba);
            break;
        case q.REPORT_SPAM:
            this.$MercuryChannelHandlerc(aa, ba);
            break;
        case q.READ_RECEIPT:
            this.$MercuryChannelHandlerg(aa, ba);
            break;
        case q.CHANGE_MUTE_SETTINGS:
            this.$MercuryChannelHandlerh(aa, ba);
            break;
        }
    };
    z.prototype.getRouting = function() {
        "use strict";
        return {
            mercury: this.__updateModelsFromMercuryPayload,
            messaging: this.__handleMessagingPayload,
            inbox: this.__markAsSeen
        };
    };
    z.prototype.__getMessagingPayloadType = function() {
        "use strict";
        return h.getArbiterType('messaging');
    };
    z.prototype.__getMercuryPayloadType = function() {
        "use strict";
        return h.getArbiterType('mercury');
    };
    z.prototype.__getInboxPayloadType = function() {
        "use strict";
        return h.getArbiterType('inbox');
    };
    z.prototype.$MercuryChannelHandler6 = function(aa) {
        "use strict";
        return (aa == this.__getMessagingPayloadType());
    };
    z.prototype.$MercuryChannelHandlerf = function(aa) {
        "use strict";
        return (aa == this.__getMercuryPayloadType());
    };
    z.prototype.$MercuryChannelHandlere = function(aa) {
        "use strict";
        return (aa == this.__getInboxPayloadType());
    };
    z.prototype.turnOn = function() {
        "use strict";
        if (!this.$MercuryChannelHandler4.length) {
            var aa = this.getRouting();
            for (var ba in aa)
                this.$MercuryChannelHandler4.push(g.subscribe(h.getArbiterType(ba), aa[ba].bind(this)));
        }
        return this;
    };
    z.prototype.turnOff = function() {
        "use strict";
        if (this.$MercuryChannelHandler4.length) {
            this.$MercuryChannelHandler4.forEach(g.unsubscribe);
            this.$MercuryChannelHandler4 = [];
        }
        return this;
    };
    u(z, n);
    e.exports = z;
}, null);
__d("MercuryRoger", ["Arbiter", "ArbiterMixin", "JSLogger", "MercuryActionStatus", "copyProperties", "MercuryServerRequests", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = b('MercuryServerRequests').get(), m = b('MercuryThreads').get(), n = {}, o = [], p = {
        getSeenBy: function(q, r) {
            if (!q)
                return [];
            var s = [], t = n[q.thread_id], u = j.SUCCESS;
            for (var v in t)
                if (t[v] > q.timestamp && (q.status === undefined || q.status === u) && (!r || v != q.author))
                    s.push(v);
            return s;
        },
        getSeenTimestamp: function(q, r) {
            var s = n[q];
            return s ? s[r] : null;
        }
    };
    k(p, h);
    l.subscribe('update-roger', function(q, r) {
        for (var s in r) {
            if (!n[s])
                n[s] = {};
            for (var t in r[s]) {
                var u = m.getThreadMetaNow(s);
                if (u && u.participants)
                    if (u.participants.indexOf(t)==-1) {
                        o.push(n);
                        continue;
                    }
                var v = n[s][t], w = r[s][t];
                if (!v || w > v)
                    n[s][t] = w;
            }
        }
        if (r)
            p.inform('state-changed', r);
    });
    g.subscribe(i.DUMP_EVENT, function(q, r) {
        r.bad_read_receipts = {
            receipts: o
        };
    });
    e.exports = p;
}, null);
__d("MercuryDelayedRoger", ["ArbiterMixin", "LiveTimer", "MercuryActionStatus", "MercuryConfig", "MercuryRoger", "copyProperties", "setTimeoutAcrossTransitions", "MercuryMessages", "MercuryThreadInformer", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = b('MercuryMessages').get(), o = b('MercuryThreadInformer').get(), p = b('MercuryThreads').get(), q = {}, r = {}, s = j['roger.seen_delay'], t = l({
        getSeenBy: function(x, y) {
            if (r[x])
                return [];
            if (!q[x]) {
                var z = p.getThreadMetaNow(x);
                if (z)
                    q[x] = {
                        thread_id: x,
                        author: z.participants[0],
                        timestamp: z.timestamp
                    };
            }
            return k.getSeenBy(q[x], y);
        }
    }, g);
    function u(x) {
        var y = false;
        n.getThreadMessagesRange(x, 0, 1, function(z) {
            var aa = z[0];
            if (!aa)
                return;
            var ba = aa.timestamp;
            if (aa.action_id || aa.status == i.SUCCESS)
                ba -= h.getServerTimeOffset();
            var ca = t.getSeenBy(x);
            if (r[x]) {
                clearTimeout(r[x]);
                delete r[x];
            }
            var da = ba + s, ea = da - Date.now();
            if (ea > 0)
                r[x] = m(function() {
                    delete r[x];
                    v(x);
                }, ea);
            q[x] = aa;
            var fa = t.getSeenBy(x);
            if (ca.length || fa.length)
                y = true;
        });
        return y;
    }
    function v(x) {
        var y = {};
        y[x] = true;
        t.inform('state-changed', y);
    }
    function w(event, x) {
        var y = {};
        for (var z in x)
            if (u(z))
                y[z] = true;
        for (var aa in y) {
            t.inform('state-changed', y);
            break;
        }
    }
    k.subscribe('state-changed', function(x, y) {
        for (var z in y)
            !r[z] && v(z);
    });
    o.subscribe('messages-received', w);
    o.subscribe('messages-reordered', w);
    o.subscribe('messages-updated', w);
    e.exports = t;
}, null);
__d("MercuryUnseenState", ["MercuryFolders", "KeyedCallbackManager", "LogHistory", "MercuryActionTypeConstants", "MercurySingletonMixin", "MercuryThreadlistConstants", "MessagingTag", "ReportState", "MercuryServerRequests", "MercuryThreadInformer", "MercuryThreadMuter", "MercuryThreads", "copyProperties", "createObjectFrom", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = l.MAX_UNSEEN_COUNT, w = 'unseen_thread_hash', x = 'unseen_thread_list', y = i.getInstance('mercury_unseen_state');
    function z(na) {
        this._fbid = na;
        this._serverRequests = o.getForFBID(this._fbid);
        this._threads = r.getForFBID(this._fbid);
        this._threadInformer = p.getForFBID(this._fbid);
        this._initialUnseenCount = null;
        this._lastSeenTimestamp = 0;
        this._maxCount = false;
        this._pendingServerUpdates = false;
        this._unseenResources = new h();
        this._serverRequests.subscribe('update-unseen', function(oa, pa) {
            ea(this, pa);
        }.bind(this));
        this._serverRequests.subscribe('update-thread-ids', function(oa, pa) {
            ka(this, pa);
        }.bind(this));
    }
    s(z.prototype, {
        getUnseenCount: function() {
            if (this.exceedsMaxCount()) {
                y.error('unguarded_unseen_count_fetch', {});
                return 0;
            }
            return da(this) || 0;
        },
        exceedsMaxCount: function() {
            return this._maxCount || (da(this) > v);
        },
        markAsSeen: function() {
            var na = da(this);
            if (na === null) {
                this._pendingServerUpdates = true;
            } else if (na > 0 || this._maxCount) {
                this._serverRequests.markSeen();
                var oa = this._serverRequests.getLastActionTimestamp();
                fa(this, oa, []);
            }
        },
        markThreadSeen: function(na, oa) {
            var pa = {};
            pa[na] = 0;
            ha(this, pa, oa);
        }
    });
    s(z, k);
    function aa(na, oa) {
        na._unseenResources.setResource(w, oa);
        na._unseenResources.setResource(x, Object.keys(oa));
    }
    function ba(na, oa) {
        var pa = na._unseenResources.executeOrEnqueue(w, oa), qa = na._unseenResources.getUnavailableResources(pa);
        if (qa.length)
            na._serverRequests.fetchUnseenThreadIDs();
    }
    function ca(na) {
        return na._unseenResources.getResource(w);
    }
    function da(na) {
        var oa = na._unseenResources.getResource(x);
        if (oa) {
            return oa.length;
        } else 
            return na._initialUnseenCount;
    }
    function ea(na, oa) {
        var pa = ma(oa);
        if (oa.unseen_thread_fbids) {
            oa.unseen_thread_fbids.forEach(function(ab) {
                if (ab.folder != m.INBOX)
                    return;
                var bb = ab.thread_fbids || [];
                bb = bb.concat(ab.other_user_fbids || []);
                var cb = ja(na, bb), db = na._lastSeenTimestamp;
                if (pa && pa.seen_timestamp)
                    db = pa.seen_timestamp;
                fa(na, db, cb);
                if (pa && pa.unseen_count > v)
                    na._maxCount = true;
            });
        } else if (pa && pa.seen_timestamp) {
            na._lastSeenTimestamp = pa.seen_timestamp;
            if (pa.unseen_count > v) {
                na._maxCount = true;
                aa(na, {});
            } else {
                na._initialUnseenCount = pa.unseen_count;
                if (na._initialUnseenCount === 0)
                    aa(na, {});
            }
        } else {
            if (na._maxCount)
                return;
            var qa = oa.actions;
            if (!qa ||!(qa.length))
                return;
            var ra = {}, sa = {};
            for (var ta = 0; ta < qa.length; ta++) {
                var ua = qa[ta];
                if (ua.is_forward)
                    continue;
                var va = ua.action_type, wa = ua.other_user_fbid ? ua.other_user_fbid: ua.thread_fbid, xa = ua.thread_id ? ua.thread_id: wa;
                if (!la(na, ua))
                    continue;
                if (va == j.USER_GENERATED_MESSAGE || va == j.LOG_MESSAGE) {
                    var ya = ra[xa] ? ua.timestamp > ra[xa]: false, za = ya ||!ra[xa];
                    if (ua.is_unread && za)
                        na._threads.getThreadMeta(xa, function(ab) {
                            var bb = false;
                            if (ab && ab.last_read_timestamp)
                                if (ab.last_read_timestamp >= ua.timestamp)
                                    bb = true;
                                    if (!q.isThreadMuted(ab)&&!bb)
                                        ra[xa] = ua.timestamp;
                                    });
                } else if (va == j.CHANGE_READ_STATUS && ua.mark_as_read)
                    sa[xa] = ua.timestamp;
            }
            ga(na, ra);
            ha(na, sa);
        }
        if (na._pendingServerUpdates) {
            na._pendingServerUpdates = false;
            na.markAsSeen();
        }
    }
    function fa(na, oa, pa) {
        var qa = ca(na);
        if (qa === undefined || oa > na._lastSeenTimestamp || na._maxCount) {
            na._lastSeenTimestamp = oa;
            pa = pa || [];
            if (pa.length <= v)
                na._maxCount = false;
            var ra = {}, sa = ca(na) || {};
            for (var ta in sa)
                if (sa[ta] !== true) {
                    var ua = sa[ta];
                    if (ia(na, ua))
                        ra[ta] = ua;
                }
            var va = s(t(pa, true), ra);
            aa(na, va);
            na._threadInformer.updatedUnseenState();
        }
    }
    function ga(na, oa) {
        if (na._maxCount)
            return;
        var pa = {}, qa = false;
        for (var ra in oa) {
            var sa = oa[ra];
            if (ia(na, sa)) {
                pa[ra] = sa;
                qa = true;
            }
        }
        if (!qa)
            return;
        ba(na, function(ta) {
            for (var ua in pa) {
                var va = pa[ua];
                if (!ta[ua] && ia(na, va))
                    ta[ua] = pa[ua];
            }
            aa(na, ta);
            na._threadInformer.updatedUnseenState();
        });
    }
    function ha(na, oa, pa) {
        var qa = false;
        if (!u(oa))
            qa = true;
        if (qa)
            ba(na, function(ra) {
                var sa = false;
                for (var ta in oa) {
                    var ua = oa[ta], va = ua > ra[ta];
                    if (ra[ta] && (!ua || va)) {
                        delete ra[ta];
                        sa = true;
                    }
                }
                if (sa) {
                    aa(na, ra);
                    na._threadInformer.updatedUnseenState();
                    if (pa && da(na) === 0)
                        na._serverRequests.markSeen();
                }
            });
    }
    function ia(na, oa) {
        return oa > na._lastSeenTimestamp;
    }
    function ja(na, oa) {
        return oa.map(na._serverRequests.convertThreadIDIfAvailable, na._serverRequests);
    }
    function ka(na, oa) {
        var pa = ca(na);
        if (!pa)
            return;
        for (var qa in oa) {
            var ra = oa[qa];
            if (pa[qa]) {
                pa[ra] = pa[qa];
                delete pa[qa];
            }
        }
        aa(na, pa);
    }
    function la(na, oa) {
        var pa = oa.thread_id ? na._threads.getThreadMetaNow(oa.thread_id): null, qa = pa ? g.getFromMeta(pa): oa.folder;
        return qa === m.INBOX || qa === undefined;
    }
    function ma(na) {
        var oa = (na.message_counts || []);
        for (var pa = 0; pa < oa.length; pa++)
            if (oa[pa].folder == m.INBOX)
                return oa[pa];
        return null;
    }
    n.registerCallback('mercury-unseen-state', function() {
        var na = {};
        na.unseen = {};
        na.unseen_max_count = {};
        na.unseen_time = {};
        var oa = z._getInstances();
        for (var pa in oa) {
            na.unseen[pa] = s({}, ca(oa[pa]));
            na.unseen_max_count[pa] = oa[pa]._maxCount;
            na.unseen_time[pa] = oa[pa]._lastSeenTimestamp;
        }
        return na;
    });
    e.exports = z;
}, null);
__d("VaultBoxURI", ["URI"], function(a, b, c, d, e, f, g) {
    var h = {
        PHOTOS_SYNCED: 'photos_synced',
        isVaultBoxURI: function(i) {
            var j = new RegExp("\/" + h.PHOTOS_SYNCED + "\/?$");
            return i.getPath().match(j) && i.getQueryData().hasOwnProperty('view_image');
        },
        isVaultArchiveURI: function(i) {
            var j = new RegExp("\/" + h.PHOTOS_SYNCED + "\/?$");
            return i.getPath().match(j);
        },
        getSyncedTabURI: function() {
            return new g('/me/' + h.PHOTOS_SYNCED).getQualifiedURI();
        }
    };
    e.exports = h;
}, null);
