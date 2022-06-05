//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More = {
    version: "1.2.5.1",
    build: "254884f2b83651bf95260eed5c6cceb838e22d8e"
};
(function() {
    var a = {
        language: "en-US",
        languages: {
            "en-US": {}
        },
        cascades: ["en-US"]
    };
    var b;
    MooTools.lang = new Events();
    $extend(MooTools.lang, {
        setLanguage: function(c) {
            if (!a.languages[c]) {
                return this;
            }
            a.language = c;
            this.load();
            this.fireEvent("langChange", c);
            return this;
        },
        load: function() {
            var c = this.cascade(this.getCurrentLanguage());
            b = {};
            $each(c, function(f, d) {
                b[d] = this.lambda(f);
            }, this);
        },
        getCurrentLanguage: function() {
            return a.language;
        },
        addLanguage: function(c) {
            a.languages[c] = a.languages[c] || {};
            return this;
        },
        cascade: function(f) {
            var c = (a.languages[f] || {}).cascades || [];
            c.combine(a.cascades);
            c.erase(f).push(f);
            var d = c.map(function(g) {
                return a.languages[g];
            }, this);
            return $merge.apply(this, d);
        },
        lambda: function(c) {
            (c || {}).get = function(f, d) {
                return $lambda(c[f]).apply(this, $splat(d));
            };
            return c;
        },
        get: function(f, d, c) {
            if (b && b[f]) {
                return (d ? b[f].get(d, c) : b[f]);
            }
        },
        set: function(d, f, c) {
            this.addLanguage(d);
            langData = a.languages[d];
            if (!langData[f]) {
                langData[f] = {};
            }
            $extend(langData[f], c);
            if (d == this.getCurrentLanguage()) {
                this.load();
                this.fireEvent("langChange", d);
            }
            return this;
        },
        list: function() {
            return Hash.getKeys(a.languages);
        }
    });
})();
(function() {
    var c = this;
    var b = function() {
        if (c.console && console.log) {
            try {
                console.log.apply(console, arguments);
            } catch (d) {
                console.log(Array.slice(arguments));
            }
        } else {
            Log.logged.push(arguments);
        }
        return this;
    };
    var a = function() {
        this.logged.push(arguments);
        return this;
    };
    this.Log = new Class({
        logged: [],
        log: a,
        resetLog: function() {
            this.logged.empty();
            return this;
        },
        enableLog: function() {
            this.log = b;
            this.logged.each(function(d) {
                this.log.apply(this, d);
            }, this);
            return this.resetLog();
        },
        disableLog: function() {
            this.log = a;
            return this;
        }
    });
    Log.extend(new Log).enableLog();
    Log.logger = function() {
        return this.log.apply(this, arguments);
    };
})();
Class.refactor = function(b, a) {
    $each(a, function(f, d) {
        var c = b.prototype[d];
        if (c && (c = c._origin ? c._origin : c) && typeof f == "function") {
            b.implement(d, function() {
                var g = this.previous;
                this.previous = c;
                var h = f.apply(this, arguments);
                this.previous = g;
                return h;
            });
        } else {
            b.implement(d, f);
        }
    });
    return b;
};
Class.Mutators.Binds = function(a) {
    return a;
};
Class.Mutators.initialize = function(a) {
    return function() {
        $splat(this.Binds).each(function(b) {
            var c = this[b];
            if (c) {
                this[b] = c.bind(this);
            }
        }, this);
        return a.apply(this, arguments);
    };
};
Class.Occlude = new Class({
    occlude: function(c, b) {
        b = document.id(b || this.element);
        var a = b.retrieve(c || this.property);
        if (a&&!$defined(this.occluded)) {
            return this.occluded = a;
        }
        this.occluded = false;
        b.store(c || this.property, this);
        return this.occluded;
    }
});
(function() {
    var a = {
        wait: function(b) {
            return this.chain(function() {
                this.callChain.delay($pick(b, 500), this);
            }.bind(this));
        }
    };
    Chain.implement(a);
    if (window.Fx) {
        Fx.implement(a);
        ["Css", "Tween", "Elements"].each(function(b) {
            if (Fx[b]) {
                Fx[b].implement(a);
            }
        });
    }
    Element.implement({
        chains: function(b) {
            $splat($pick(b, ["tween", "morph", "reveal"])).each(function(c) {
                c = this.get(c);
                if (!c) {
                    return;
                }
                c.setOptions({
                    link: "chain"
                });
            }, this);
            return this;
        },
        pauseFx: function(c, b) {
            this.chains(b).get($pick(b, "tween")).wait(c);
            return this;
        }
    });
})();
Array.implement({
    min: function() {
        return Math.min.apply(null, this);
    },
    max: function() {
        return Math.max.apply(null, this);
    },
    average: function() {
        return this.length ? this.sum() / this.length : 0;
    },
    sum: function() {
        var a = 0, b = this.length;
        if (b) {
            do {
                a += this[--b];
            }
            while (b);
        }
        return a;
    },
    unique: function() {
        return [].combine(this);
    },
    shuffle: function() {
        for (var b = this.length;
        b&&--b;) {
            var a = this[b], c = Math.floor(Math.random() * (b + 1));
            this[b] = this[c];
            this[c] = a;
        }
        return this;
    }
});
(function() {
    var j = this.Date;
    if (!j.now) {
        j.now = $time;
    }
    j.Methods = {
        ms: "Milliseconds",
        year: "FullYear",
        min: "Minutes",
        mo: "Month",
        sec: "Seconds",
        hr: "Hours"
    };
    ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds", "Time", "TimezoneOffset", "Week", "Timezone", "GMTOffset", "DayOfYear", "LastMonth", "LastDayOfMonth", "UTCDate", "UTCDay", "UTCFullYear", "AMPM", "Ordinal", "UTCHours", "UTCMilliseconds", "UTCMinutes", "UTCMonth", "UTCSeconds", "UTCMilliseconds"].each(function(q) {
        j.Methods[q.toLowerCase()] = q;
    });
    var d = function(r, q) {
        return new Array(q - String(r).length + 1).join("0") + r;
    };
    j.implement({
        set: function(t, r) {
            switch ($type(t)) {
            case"object":
                for (var s in t) {
                    this.set(s, t[s]);
                }
                break;
            case"string":
                t = t.toLowerCase();
                var q = j.Methods;
                if (q[t]) {
                    this["set" + q[t]](r);
                }
            }
            return this;
        },
        get: function(r) {
            r = r.toLowerCase();
            var q = j.Methods;
            if (q[r]) {
                return this["get" + q[r]]();
            }
            return null;
        },
        clone: function() {
            return new j(this.get("time"));
        },
        increment: function(q, s) {
            q = q || "day";
            s = $pick(s, 1);
            switch (q) {
            case"year":
                return this.increment("month", s * 12);
            case"month":
                var r = this.get("date");
                this.set("date", 1).set("mo", this.get("mo") + s);
                return this.set("date", r.min(this.get("lastdayofmonth")));
            case"week":
                return this.increment("day", s * 7);
            case"day":
                return this.set("date", this.get("date") + s);
            }
            if (!j.units[q]) {
                throw new Error(q + " is not a supported interval");
            }
            return this.set("time", this.get("time") + s * j.units[q]());
        },
        decrement: function(q, r) {
            return this.increment(q, - 1 * $pick(r, 1));
        },
        isLeapYear: function() {
            return j.isLeapYear(this.get("year"));
        },
        clearTime: function() {
            return this.set({
                hr: 0,
                min: 0,
                sec: 0,
                ms: 0
            });
        },
        diff: function(r, q) {
            if ($type(r) == "string") {
                r = j.parse(r);
            }
            return ((r - this) / j.units[q || "day"](3, 3)).round();
        },
        getLastDayOfMonth: function() {
            return j.daysInMonth(this.get("mo"), this.get("year"));
        },
        getDayOfYear: function() {
            return (j.UTC(this.get("year"), this.get("mo"), this.get("date") + 1) - j.UTC(this.get("year"), 0, 1)) / j.units.day();
        },
        getWeek: function() {
            return (this.get("dayofyear") / 7).ceil();
        },
        getOrdinal: function(q) {
            return j.getMsg("ordinal", q || this.get("date"));
        },
        getTimezone: function() {
            return this.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3");
        },
        getGMTOffset: function() {
            var q = this.get("timezoneOffset");
            return ((q > 0) ? "-" : "+") + d((q.abs() / 60).floor(), 2) + d(q%60, 2);
        },
        setAMPM: function(q) {
            q = q.toUpperCase();
            var r = this.get("hr");
            if (r > 11 && q == "AM") {
                return this.decrement("hour", 12);
            } else {
                if (r < 12 && q == "PM") {
                    return this.increment("hour", 12);
                }
            }
            return this;
        },
        getAMPM: function() {
            return (this.get("hr") < 12) ? "AM" : "PM";
        },
        parse: function(q) {
            this.set("time", j.parse(q));
            return this;
        },
        isValid: function(q) {
            return !isNaN((q || this).valueOf());
        },
        format: function(q) {
            if (!this.isValid()) {
                return "invalid date";
            }
            q = q || "%x %X";
            q = l[q.toLowerCase()] || q;
            var r = this;
            return q.replace(/%([a-z%])/gi, function(t, s) {
                switch (s) {
                case"a":
                    return j.getMsg("days")[r.get("day")].substr(0, 3);
                case"A":
                    return j.getMsg("days")[r.get("day")];
                case"b":
                    return j.getMsg("months")[r.get("month")].substr(0, 3);
                case"B":
                    return j.getMsg("months")[r.get("month")];
                case"c":
                    return r.toString();
                case"d":
                    return d(r.get("date"), 2);
                case"D":
                    return r.get("date");
                case"e":
                    return r.get("date");
                case"H":
                    return d(r.get("hr"), 2);
                case"I":
                    return ((r.get("hr")%12) || 12);
                case"j":
                    return d(r.get("dayofyear"), 3);
                case"m":
                    return d((r.get("mo") + 1), 2);
                case"M":
                    return d(r.get("min"), 2);
                case"o":
                    return r.get("ordinal");
                case"p":
                    return j.getMsg(r.get("ampm"));
                case"s":
                    return Math.round(r / 1000);
                case"S":
                    return d(r.get("seconds"), 2);
                case"U":
                    return d(r.get("week"), 2);
                case"w":
                    return r.get("day");
                case"x":
                    return r.format(j.getMsg("shortDate"));
                case"X":
                    return r.format(j.getMsg("shortTime"));
                case"y":
                    return r.get("year").toString().substr(2);
                case"Y":
                    return r.get("year");
                case"T":
                    return r.get("GMTOffset");
                case"Z":
                    return r.get("Timezone");
                case"z":
                    return d(r.get("ms"), 3);
                }
                return s;
            });
        },
        toISOString: function() {
            return this.format("iso8601");
        }
    });
    j.alias("toISOString", "toJSON");
    j.alias("diff", "compare");
    j.alias("format", "strftime");
    var l = {
        db: "%Y-%m-%d %H:%M:%S",
        compact: "%Y%m%dT%H%M%S",
        iso8601: "%Y-%m-%dT%H:%M:%S%T",
        rfc822: "%a, %d %b %Y %H:%M:%S %Z",
        "short": "%d %b %H:%M",
        "long": "%B %d, %Y %H:%M"
    };
    var h = [];
    var f = j.parse;
    var o = function(t, v, s) {
        var r =- 1;
        var u = j.getMsg(t + "s");
        switch ($type(v)) {
        case"object":
            r = u[v.get(t)];
            break;
        case"number":
            r = u[v];
            if (!r) {
                throw new Error("Invalid " + t + " index: " + v);
            }
            break;
        case"string":
            var q = u.filter(function(w) {
                return this.test(w);
            }, new RegExp("^" + v, "i"));
            if (!q.length) {
                throw new Error("Invalid " + t + " string");
            }
            if (q.length > 1) {
                throw new Error("Ambiguous " + t);
            }
            r = q[0];
        }
        return (s) ? u.indexOf(r) : r;
    };
    j.extend({
        getMsg: function(r, q) {
            return MooTools.lang.get("Date", r, q);
        },
        units: {
            ms: $lambda(1),
            second: $lambda(1000),
            minute: $lambda(60000),
            hour: $lambda(3600000),
            day: $lambda(86400000),
            week: $lambda(608400000),
            month: function(r, q) {
                var s = new j;
                return j.daysInMonth($pick(r, s.get("mo")), $pick(q, s.get("year"))) * 86400000;
            },
            year: function(q) {
                q = q || new j().get("year");
                return j.isLeapYear(q) ? 31622400000 : 31536000000;
            }
        },
        daysInMonth: function(r, q) {
            return [31, j.isLeapYear(q) ? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r];
        },
        isLeapYear: function(q) {
            return ((q%4 === 0) && (q%100 !== 0)) || (q%400 === 0);
        },
        parse: function(s) {
            var r = $type(s);
            if (r == "number") {
                return new j(s);
            }
            if (r != "string") {
                return s;
            }
            s = s.clean();
            if (!s.length) {
                return null;
            }
            var q;
            h.some(function(u) {
                var t = u.re.exec(s);
                return (t) ? (q = u.handler(t)) : false;
            });
            return q || new j(f(s));
        },
        parseDay: function(q, r) {
            return o("day", q, r);
        },
        parseMonth: function(r, q) {
            return o("month", r, q);
        },
        parseUTC: function(r) {
            var q = new j(r);
            var s = j.UTC(q.get("year"), q.get("mo"), q.get("date"), q.get("hr"), q.get("min"), q.get("sec"), q.get("ms"));
            return new j(s);
        },
        orderIndex: function(q) {
            return j.getMsg("dateOrder").indexOf(q) + 1;
        },
        defineFormat: function(q, r) {
            l[q] = r;
        },
        defineFormats: function(q) {
            for (var r in q) {
                j.defineFormat(r, q[r]);
            }
        },
        parsePatterns: h,
        defineParser: function(q) {
            h.push((q.re && q.handler) ? q : m(q));
        },
        defineParsers: function() {
            Array.flatten(arguments).each(j.defineParser);
        },
        define2DigitYearStart: function(q) {
            i = q%100;
            n = q - i;
        }
    });
    var n = 1900;
    var i = 70;
    var k = function(q) {
        return new RegExp("(?:" + j.getMsg(q).map(function(r) {
            return r.substr(0, 3);
        }).join("|") + ")[a-z]*");
    };
    var a = function(q) {
        switch (q) {
        case"x":
            return ((j.orderIndex("month") == 1) ? "%m[-./]%d" : "%d[-./]%m") + "([-./]%y)?";
        case"X":
            return "%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%T?";
        }
        return null;
    };
    var p = {
        d: /[0-2]?[0-9]|3[01]/,
        H: /[01]?[0-9]|2[0-3]/,
        I: /0?[1-9]|1[0-2]/,
        M: /[0-5]?\d/,
        s: /\d+/,
        o: /[a-z]*/,
        p: /[ap]\.?m\.?/,
        y: /\d{2}|\d{4}/,
        Y: /\d{4}/,
        T: /Z|[+-]\d{2}(?::?\d{2})?/
    };
    p.m = p.I;
    p.S = p.M;
    var c;
    var b = function(q) {
        c = q;
        p.a = p.A = k("days");
        p.b = p.B = k("months");
        h.each(function(s, r) {
            if (s.format) {
                h[r] = m(s.format);
            }
        });
    };
    var m = function(s) {
        if (!c) {
            return {
                format: s
            };
        }
        var q = [];
        var r = (s.source || s).replace(/%([a-z])/gi, function(u, t) {
            return a(t) || u;
        }).replace(/\((?!\?)/g, "(?:").replace(/ (?!\?|\*)/g, ",? ").replace(/%([a-z%])/gi, function(u, t) {
            var v = p[t];
            if (!v) {
                return t;
            }
            q.push(t);
            return "(" + v.source + ")";
        }).replace(/\[a-z\]/gi, "[a-z\\u00c0-\\uffff]");
        return {
            format: s,
            re: new RegExp("^" + r + "$", "i"),
            handler: function(w) {
                w = w.slice(1).associate(q);
                var t = new j().clearTime(), v = w.y || w.Y;
                if (v != null) {
                    g.call(t, "y", v);
                }
                if ("d" in w) {
                    g.call(t, "d", 1);
                }
                if ("m" in w || "b" in w || "B" in w) {
                    g.call(t, "m", 1);
                }
                for (var u in w) {
                    g.call(t, u, w[u]);
                }
                return t;
            }
        };
    };
    var g = function(q, r) {
        if (!r) {
            return this;
        }
        switch (q) {
        case"a":
        case"A":
            return this.set("day", j.parseDay(r, true));
        case"b":
        case"B":
            return this.set("mo", j.parseMonth(r, true));
        case"d":
            return this.set("date", r);
        case"H":
        case"I":
            return this.set("hr", r);
        case"m":
            return this.set("mo", r - 1);
        case"M":
            return this.set("min", r);
        case"p":
            return this.set("ampm", r.replace(/\./g, ""));
        case"S":
            return this.set("sec", r);
        case"s":
            return this.set("ms", ("0." + r) * 1000);
        case"w":
            return this.set("day", r);
        case"Y":
            return this.set("year", r);
        case"y":
            r =+ r;
            if (r < 100) {
                r += n + (r < i ? 100 : 0);
            }
            return this.set("year", r);
        case"T":
            if (r == "Z") {
                r = "+00";
            }
            var s = r.match(/([+-])(\d{2}):?(\d{2})?/);
            s = (s[1] + "1") * (s[2] * 60 + ( + s[3] || 0)) + this.getTimezoneOffset();
            return this.set("time", this - s * 60000);
        }
        return this;
    };
    j.defineParsers("%Y([-./]%m([-./]%d((T| )%X)?)?)?", "%Y%m%d(T%H(%M%S?)?)?", "%x( %X)?", "%d%o( %b( %Y)?)?( %X)?", "%b( %d%o)?( %Y)?( %X)?", "%Y %b( %d%o( %X)?)?", "%o %b %d %X %T %Y");
    MooTools.lang.addEvent("langChange", function(q) {
        if (MooTools.lang.get("Date")) {
            b(q);
        }
    }).fireEvent("langChange", MooTools.lang.getCurrentLanguage());
})();
Date.implement({
    timeDiffInWords: function(a) {
        return Date.distanceOfTimeInWords(this, a || new Date);
    },
    timeDiff: function(h, b) {
        if (h == null) {
            h = new Date;
        }
        var g = ((h - this) / 1000).toInt();
        if (!g) {
            return "0s";
        }
        var a = {
            s: 60,
            m: 60,
            h: 24,
            d: 365,
            y: 0
        };
        var f, d = [];
        for (var c in a) {
            if (!g) {
                break;
            }
            if ((f = a[c])) {
                d.unshift((g%f) + c);
                g = (g / f).toInt();
            } else {
                d.unshift(g + c);
            }
        }
        return d.join(b || ":");
    }
});
Date.alias("timeDiffInWords", "timeAgoInWords");
Date.extend({
    distanceOfTimeInWords: function(b, a) {
        return Date.getTimePhrase(((a - b) / 1000).toInt());
    },
    getTimePhrase: function(g) {
        var d = (g < 0) ? "Until": "Ago";
        if (g < 0) {
            g*=-1;
        }
        var b = {
            minute: 60,
            hour: 60,
            day: 24,
            week: 7,
            month: 52 / 12,
            year: 12,
            eon: Infinity
        };
        var f = "lessThanMinute";
        for (var c in b) {
            var a = b[c];
            if (g < 1.5 * a) {
                if (g > 0.75 * a) {
                    f = c;
                }
                break;
            }
            g/=a;
            f = c + "s";
        }
        return Date.getMsg(f + d, g).substitute({
            delta: g.round()
        });
    }
});
Date.defineParsers({
    re: /^(?:tod|tom|yes)/i,
    handler: function(a) {
        var b = new Date().clearTime();
        switch (a[0]) {
        case"tom":
            return b.increment();
        case"yes":
            return b.decrement();
        default:
            return b;
        }
    }
}, {
    re: /^(next|last) ([a-z]+)$/i,
    handler: function(f) {
        var g = new Date().clearTime();
        var b = g.getDay();
        var c = Date.parseDay(f[2], true);
        var a = c - b;
        if (c <= b) {
            a += 7;
        }
        if (f[1] == "last") {
            a -= 7;
        }
        return g.set("date", g.getDate() + a);
    }
});
Hash.implement({
    getFromPath: function(a) {
        var b = this.getClean();
        a.replace(/\[([^\]]+)\]|\.([^.[]+)|[^[.]+/g, function(c) {
            if (!b) {
                return null;
            }
            var d = arguments[2] || arguments[1] || arguments[0];
            b = (d in b) ? b[d] : null;
            return c;
        });
        return b;
    },
    cleanValues: function(a) {
        a = a || $defined;
        this.each(function(c, b) {
            if (!a(c)) {
                this.erase(b);
            }
        }, this);
        return this;
    },
    run: function() {
        var a = arguments;
        this.each(function(c, b) {
            if ($type(c) == "function") {
                c.run(a);
            }
        });
    }
});
(function() {
    var c = {
        a: "[àáâãäåăą]",
        A: "[ÀÁÂÃÄÅĂĄ]",
        c: "[ćčç]",
        C: "[ĆČÇ]",
        d: "[ďđ]",
        D: "[ĎÐ]",
        e: "[èéêëěę]",
        E: "[ÈÉÊËĚĘ]",
        g: "[ğ]",
        G: "[Ğ]",
        i: "[ìíîï]",
        I: "[ÌÍÎÏ]",
        l: "[ĺľł]",
        L: "[ĹĽŁ]",
        n: "[ñňń]",
        N: "[ÑŇŃ]",
        o: "[òóôõöøő]",
        O: "[ÒÓÔÕÖØ]",
        r: "[řŕ]",
        R: "[ŘŔ]",
        s: "[ššş]",
        S: "[ŠŞŚ]",
        t: "[ťţ]",
        T: "[ŤŢ]",
        ue: "[ü]",
        UE: "[Ü]",
        u: "[ùúûůµ]",
        U: "[ÙÚÛŮ]",
        y: "[ÿý]",
        Y: "[ŸÝ]",
        z: "[žźż]",
        Z: "[ŽŹŻ]",
        th: "[þ]",
        TH: "[Þ]",
        dh: "[ð]",
        DH: "[Ð]",
        ss: "[ß]",
        oe: "[œ]",
        OE: "[Œ]",
        ae: "[æ]",
        AE: "[Æ]"
    }, b = {
        " ": "[\xa0\u2002\u2003\u2009]",
        "*": "[\xb7]",
        "'": "[\u2018\u2019]",
        '"': "[\u201c\u201d]",
        "...": "[\u2026]",
        "-": "[\u2013]",
        "--": "[\u2014]",
        "&raquo;": "[\uFFFD]"
    };
    function a(g, h) {
        var f = g;
        for (key in h) {
            f = f.replace(new RegExp(h[key], "g"), key);
        }
        return f;
    }
    function d(f, g) {
        f = f || "";
        var h = g ? "<" + f + "(?!\\w)[^>]*>([\\s\\S]*?)</" + f + "(?!\\w)>": "</?" + f + "([^>]+)?>";
        reg = new RegExp(h, "gi");
        return reg;
    }
    String.implement({
        standardize: function() {
            return a(this, c);
        },
        repeat: function(f) {
            return new Array(f + 1).join(this);
        },
        pad: function(g, i, f) {
            if (this.length >= g) {
                return this;
            }
            var h = (i == null ? " " : "" + i).repeat(g - this.length).substr(0, g - this.length);
            if (!f || f == "right") {
                return this + h;
            }
            if (f == "left") {
                return h + this;
            }
            return h.substr(0, (h.length / 2).floor()) + this + h.substr(0, (h.length / 2).ceil());
        },
        getTags: function(f, g) {
            return this.match(d(f, g)) || [];
        },
        stripTags: function(f, g) {
            return this.replace(d(f, g), "");
        },
        tidy: function() {
            return a(this, b);
        }
    });
})();
String.implement({
    parseQueryString: function(d, a) {
        if (d == null) {
            d = true;
        }
        if (a == null) {
            a = true;
        }
        var c = this.split(/[&;]/), b = {};
        if (c.length) {
            c.each(function(j) {
                var f = j.indexOf("="), g = f < 0 ? [""]: j.substr(0, f).match(/([^\]\[]+|(\B)(?=\]))/g), h = a ? decodeURIComponent(j.substr(f + 1)): j.substr(f + 1), i = b;
                g.each(function(l, k) {
                    if (d) {
                        l = decodeURIComponent(l);
                    }
                    var m = i[l];
                    if (k < g.length - 1) {
                        i = i[l] = m || {};
                    } else {
                        if ($type(m) == "array") {
                            m.push(h);
                        } else {
                            i[l] = $defined(m) ? [m, h] : h;
                        }
                    }
                });
            });
        }
        return b;
    },
    cleanQueryString: function(a) {
        return this.split("&").filter(function(f) {
            var b = f.indexOf("="), c = b < 0 ? "": f.substr(0, b), d = f.substr(b + 1);
            return a ? a.run([c, d]) : $chk(d);
        }).join("&");
    }
});
var URI = new Class({
    Implements: Options,
    options: {},
    regex: /^(?:(\w+):)?(?:\/\/(?:(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
    parts: ["scheme", "user", "password", "host", "port", "directory", "file", "query", "fragment"],
    schemes: {
        http: 80,
        https: 443,
        ftp: 21,
        rtsp: 554,
        mms: 1755,
        file: 0
    },
    initialize: function(b, a) {
        this.setOptions(a);
        var c = this.options.base || URI.base;
        if (!b) {
            b = c;
        }
        if (b && b.parsed) {
            this.parsed = $unlink(b.parsed);
        } else {
            this.set("value", b.href || b.toString(), c ? new URI(c) : false);
        }
    },
    parse: function(c, b) {
        var a = c.match(this.regex);
        if (!a) {
            return false;
        }
        a.shift();
        return this.merge(a.associate(this.parts), b);
    },
    merge: function(b, a) {
        if ((!b ||!b.scheme) && (!a ||!a.scheme)) {
            return false;
        }
        if (a) {
            this.parts.every(function(c) {
                if (b[c]) {
                    return false;
                }
                b[c] = a[c] || "";
                return true;
            });
        }
        b.port = b.port || this.schemes[b.scheme.toLowerCase()];
        b.directory = b.directory ? this.parseDirectory(b.directory, a ? a.directory : "") : "/";
        return b;
    },
    parseDirectory: function(b, c) {
        b = (b.substr(0, 1) == "/" ? "" : (c || "/")) + b;
        if (!b.test(URI.regs.directoryDot)) {
            return b;
        }
        var a = [];
        b.replace(URI.regs.endSlash, "").split("/").each(function(d) {
            if (d == ".." && a.length > 0) {
                a.pop();
            } else {
                if (d != ".") {
                    a.push(d);
                }
            }
        });
        return a.join("/") + "/";
    },
    combine: function(a) {
        return a.value || a.scheme + "://" + (a.user ? a.user + (a.password ? ":" + a.password : "") + "@" : "") + (a.host || "") + (a.port && a.port != this.schemes[a.scheme] ? ":" + a.port : "") + (a.directory || "/") + (a.file || "") + (a.query ? "?" + a.query : "") + (a.fragment ? "#" + a.fragment : "");
    },
    set: function(b, d, c) {
        if (b == "value") {
            var a = d.match(URI.regs.scheme);
            if (a) {
                a = a[1];
            }
            if (a&&!$defined(this.schemes[a.toLowerCase()])) {
                this.parsed = {
                    scheme: a,
                    value: d
                };
            } else {
                this.parsed = this.parse(d, (c || this).parsed) || (a ? {
                    scheme: a,
                    value: d
                } : {
                    value: d
                });
            }
        } else {
            if (b == "data") {
                this.setData(d);
            } else {
                this.parsed[b] = d;
            }
        }
        return this;
    },
    get: function(a, b) {
        switch (a) {
        case"value":
            return this.combine(this.parsed, b ? b.parsed : false);
        case"data":
            return this.getData();
        }
        return this.parsed[a] || "";
    },
    go: function() {
        document.location.href = this.toString();
    },
    toURI: function() {
        return this;
    },
    getData: function(c, b) {
        var a = this.get(b || "query");
        if (!$chk(a)) {
            return c ? null : {};
        }
        var d = a.parseQueryString();
        return c ? d[c] : d;
    },
    setData: function(a, c, b) {
        if (typeof a == "string") {
            data = this.getData();
            data[arguments[0]] = arguments[1];
            a = data;
        } else {
            if (c) {
                a = $merge(this.getData(), a);
            }
        }
        return this.set(b || "query", Hash.toQueryString(a));
    },
    clearData: function(a) {
        return this.set(a || "query", "");
    }
});
URI.prototype.toString = URI.prototype.valueOf = function() {
    return this.get("value");
};
URI.regs = {
    endSlash: /\/$/,
    scheme: /^(\w+):/,
    directoryDot: /\.\/|\.$/
};
URI.base = new URI(document.getElements("base[href]", true).getLast(), {
    base: document.location
});
String.implement({
    toURI: function(a) {
        return new URI(this, a);
    }
});
URI = Class.refactor(URI, {
    combine: function(g, f) {
        if (!f || g.scheme != f.scheme || g.host != f.host || g.port != f.port) {
            return this.previous.apply(this, arguments);
        }
        var a = g.file + (g.query ? "?" + g.query : "") + (g.fragment ? "#" + g.fragment : "");
        if (!f.directory) {
            return (g.directory || (g.file ? "" : "./")) + a;
        }
        var d = f.directory.split("/"), c = g.directory.split("/"), h = "", j;
        var b = 0;
        for (j = 0; j < d.length && j < c.length && d[j] == c[j]; j++) {}
        for (b = 0; b < d.length - j - 1; b++) {
            h += "../";
        }
        for (b = j; b < c.length - 1; b++) {
            h += c[b] + "/";
        }
        return (h || (g.file ? "" : "./")) + a;
    },
    toAbsolute: function(a) {
        a = new URI(a);
        if (a) {
            a.set("directory", "").set("file", "");
        }
        return this.toRelative(a);
    },
    toRelative: function(a) {
        return this.get("value", new URI(a));
    }
});
Element.implement({
    tidy: function() {
        this.set("value", this.get("value").tidy());
    },
    getTextInRange: function(b, a) {
        return this.get("value").substring(b, a);
    },
    getSelectedText: function() {
        if (this.setSelectionRange) {
            return this.getTextInRange(this.getSelectionStart(), this.getSelectionEnd());
        }
        return document.selection.createRange().text;
    },
    getSelectedRange: function() {
        if ($defined(this.selectionStart)) {
            return {
                start: this.selectionStart,
                end: this.selectionEnd
            };
        }
        var f = {
            start: 0,
            end: 0
        };
        var a = this.getDocument().selection.createRange();
        if (!a || a.parentElement() != this) {
            return f;
        }
        var c = a.duplicate();
        if (this.type == "text") {
            f.start = 0 - c.moveStart("character", - 100000);
            f.end = f.start + a.text.length;
        } else {
            var b = this.get("value");
            var d = b.length;
            c.moveToElementText(this);
            c.setEndPoint("StartToEnd", a);
            if (c.text.length) {
                d -= b.match(/[\n\r]*$/)[0].length;
            }
            f.end = d - c.text.length;
            c.setEndPoint("StartToStart", a);
            f.start = d - c.text.length;
        }
        return f;
    },
    getSelectionStart: function() {
        return this.getSelectedRange().start;
    },
    getSelectionEnd: function() {
        return this.getSelectedRange().end;
    },
    setCaretPosition: function(a) {
        if (a == "end") {
            a = this.get("value").length;
        }
        this.selectRange(a, a);
        return this;
    },
    getCaretPosition: function() {
        return this.getSelectedRange().start;
    },
    selectRange: function(f, a) {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(f, a);
        } else {
            var c = this.get("value");
            var d = c.substr(f, a - f).replace(/\r/g, "").length;
            f = c.substr(0, f).replace(/\r/g, "").length;
            var b = this.createTextRange();
            b.collapse(true);
            b.moveEnd("character", f + d);
            b.moveStart("character", f);
            b.select();
        }
        return this;
    },
    insertAtCursor: function(b, a) {
        var d = this.getSelectedRange();
        var c = this.get("value");
        this.set("value", c.substring(0, d.start) + b + c.substring(d.end, c.length));
        if ($pick(a, true)) {
            this.selectRange(d.start, d.start + b.length);
        } else {
            this.setCaretPosition(d.start + b.length);
        }
        return this;
    },
    insertAroundCursor: function(b, a) {
        b = $extend({
            before: "",
            defaultMiddle: "",
            after: ""
        }, b);
        var c = this.getSelectedText() || b.defaultMiddle;
        var h = this.getSelectedRange();
        var g = this.get("value");
        if (h.start == h.end) {
            this.set("value", g.substring(0, h.start) + b.before + c + b.after + g.substring(h.end, g.length));
            this.selectRange(h.start + b.before.length, h.end + b.before.length + c.length);
        } else {
            var d = g.substring(h.start, h.end);
            this.set("value", g.substring(0, h.start) + b.before + d + b.after + g.substring(h.end, g.length));
            var f = h.start + b.before.length;
            if ($pick(a, true)) {
                this.selectRange(f, f + d.length);
            } else {
                this.setCaretPosition(f + g.length);
            }
        }
        return this;
    }
});
Elements.from = function(f, d) {
    if ($pick(d, true)) {
        f = f.stripScripts();
    }
    var b, c = f.match(/^\s*<(t[dhr]|tbody|tfoot|thead)/i);
    if (c) {
        b = new Element("table");
        var a = c[1].toLowerCase();
        if (["td", "th", "tr"].contains(a)) {
            b = new Element("tbody").inject(b);
            if (a != "tr") {
                b = new Element("tr").inject(b);
            }
        }
    }
    return (b || new Element("div")).set("html", f).getChildren();
};
(function(d, f) {
    var c = /(.*?):relay\(((?:\(.*?\)|.)+)\)$/, b = /[+>~\s]/, g = function(h) {
        var i = h.match(c);
        return !i ? {
            event: h
        } : {
            event: i[1],
            selector: i[2]
        };
    }, a = function(n, h) {
        var l = n.target;
        if (b.test(h = h.trim())) {
            var k = this.getElements(h);
            for (var j = k.length; j--;
            ) {
                var m = k[j];
                if (l == m || m.hasChild(l)) {
                    return m;
                }
            }
        } else {
            for (; l && l != this; l = l.parentNode) {
                if (Element.match(l, h)) {
                    return document.id(l);
                }
            }
        }
        return null;
    };
    Element.implement({
        addEvent: function(l, k) {
            var j = g(l);
            if (j.selector) {
                var i = this.retrieve("delegation:_delegateMonitors", {});
                if (!i[l]) {
                    var h = function(n) {
                        var m = a.call(this, n, j.selector);
                        if (m) {
                            this.fireEvent(l, [n, m], 0, m);
                        }
                    }.bind(this);
                    i[l] = h;
                    d.call(this, j.event, h);
                }
            }
            return d.apply(this, arguments);
        },
        removeEvent: function(l, k) {
            var j = g(l);
            if (j.selector) {
                var i = this.retrieve("events");
                if (!i ||!i[l] || (k&&!i[l].keys.contains(k))) {
                    return this;
                }
                if (k) {
                    f.apply(this, [l, k]);
                } else {
                    f.apply(this, l);
                }
                i = this.retrieve("events");
                if (i && i[l] && i[l].keys.length == 0) {
                    var h = this.retrieve("delegation:_delegateMonitors", {});
                    f.apply(this, [j.event, h[l]]);
                    delete h[l];
                }
                return this;
            }
            return f.apply(this, arguments);
        },
        fireEvent: function(l, i, h, n) {
            var j = this.retrieve("events");
            var m, k;
            if (i) {
                m = i[0];
                k = i[1];
            }
            if (!j ||!j[l]) {
                return this;
            }
            j[l].keys.each(function(o) {
                o.create({
                    bind: n || this,
                    delay: h,
                    arguments: i
                })();
            }, this);
            return this;
        }
    });
})(Element.prototype.addEvent, Element.prototype.removeEvent);
try {
    if (typeof HTMLElement != "undefined") {
        HTMLElement.prototype.fireEvent = Element.prototype.fireEvent;
    }
} catch (e) {}
Element.implement({
    measure: function(f) {
        var h = function(i) {
            return !!(!i || i.offsetHeight || i.offsetWidth);
        };
        if (h(this)) {
            return f.apply(this);
        }
        var d = this.getParent(), g = [], b = [];
        while (!h(d) && d != document.body) {
            b.push(d.expose());
            d = d.getParent();
        }
        var c = this.expose();
        var a = f.apply(this);
        c();
        b.each(function(i) {
            i();
        });
        return a;
    },
    expose: function() {
        if (this.getStyle("display") != "none") {
            return $empty;
        }
        var a = this.style.cssText;
        this.setStyles({
            display: "block",
            position: "absolute",
            visibility: "hidden"
        });
        return function() {
            this.style.cssText = a;
        }.bind(this);
    },
    getDimensions: function(a) {
        a = $merge({
            computeSize: false
        }, a);
        var f = {};
        var d = function(h, g) {
            return (g.computeSize) ? h.getComputedSize(g) : h.getSize();
        };
        var b = this.getParent("body");
        if (b && this.getStyle("display") == "none") {
            f = this.measure(function() {
                return d(this, a);
            });
        } else {
            if (b) {
                try {
                    f = d(this, a);
                } catch (c) {}
            } else {
                f = {
                    x: 0,
                    y: 0
                };
            }
        }
        return $chk(f.x) ? $extend(f, {
            width: f.x,
            height: f.y
        }) : $extend(f, {
            x: f.width,
            y: f.height
        });
    },
    getComputedSize: function(a) {
        if (a && a.plains) {
            a.planes = a.plains;
        }
        a = $merge({
            styles: ["padding", "border"],
            planes: {
                height: ["top", "bottom"],
                width: ["left", "right"]
            },
            mode: "both"
        }, a);
        var c = {
            width: 0,
            height: 0
        };
        switch (a.mode) {
        case"vertical":
            delete c.width;
            delete a.planes.width;
            break;
        case"horizontal":
            delete c.height;
            delete a.planes.height;
            break;
        }
        var b = [];
        $each(a.planes, function(g, h) {
            g.each(function(i) {
                a.styles.each(function(j) {
                    b.push((j == "border") ? j + "-" + i + "-width" : j + "-" + i);
                });
            });
        });
        var f = {};
        b.each(function(g) {
            f[g] = this.getComputedStyle(g);
        }, this);
        var d = [];
        $each(a.planes, function(g, h) {
            var i = h.capitalize();
            c["total" + i] = c["computed" + i] = 0;
            g.each(function(j) {
                c["computed" + j.capitalize()] = 0;
                b.each(function(l, k) {
                    if (l.test(j)) {
                        f[l] = f[l].toInt() || 0;
                        c["total" + i] = c["total" + i] + f[l];
                        c["computed" + j.capitalize()] = c["computed" + j.capitalize()] + f[l];
                    }
                    if (l.test(j) && h != l && (l.test("border") || l.test("padding"))&&!d.contains(l)) {
                        d.push(l);
                        c["computed" + i] = c["computed" + i] - f[l];
                    }
                });
            });
        });
        ["Width", "Height"].each(function(h) {
            var g = h.toLowerCase();
            if (!$chk(c[g])) {
                return;
            }
            c[g] = c[g] + this["offset" + h] + c["computed" + h];
            c["total" + h] = c[g] + c["total" + h];
            delete c["computed" + h];
        }, this);
        return $extend(f, c);
    }
});
(function() {
    var a = false, b = false;
    var c = function() {
        var d = new Element("div").setStyles({
            position: "fixed",
            top: 0,
            right: 0
        }).inject(document.body);
        a = (d.offsetTop === 0);
        d.dispose();
        b = true;
    };
    Element.implement({
        pin: function(i, g) {
            if (!b) {
                c();
            }
            if (this.getStyle("display") == "none") {
                return this;
            }
            var k, l = window.getScroll();
            if (i !== false) {
                k = this.getPosition(a ? document.body : this.getOffsetParent());
                if (!this.retrieve("pin:_pinned")) {
                    var h = {
                        top: k.y - l.y,
                        left: k.x - l.x
                    };
                    if (a&&!g) {
                        this.setStyle("position", "fixed").setStyles(h);
                    } else {
                        var m = this.getOffsetParent(), j = this.getPosition(m), n = this.getStyles("left", "top");
                        if (m && n.left == "auto" || n.top == "auto") {
                            this.setPosition(j);
                        }
                        if (this.getStyle("position") == "static") {
                            this.setStyle("position", "absolute");
                        }
                        j = {
                            x: n.left.toInt() - l.x,
                            y: n.top.toInt() - l.y
                        };
                        var f = function() {
                            if (!this.retrieve("pin:_pinned")) {
                                return;
                            }
                            var o = window.getScroll();
                            this.setStyles({
                                left: j.x + o.x,
                                top: j.y + o.y
                            });
                        }.bind(this);
                        this.store("pin:_scrollFixer", f);
                        window.addEvent("scroll", f);
                    }
                    this.store("pin:_pinned", true);
                }
            } else {
                if (!this.retrieve("pin:_pinned")) {
                    return this;
                }
                var m = this.getParent(), d = (m.getComputedStyle("position") != "static" ? m : m.getOffsetParent());
                k = this.getPosition(d);
                this.store("pin:_pinned", false);
                var f = this.retrieve("pin:_scrollFixer");
                if (!f) {
                    this.setStyles({
                        position: "absolute",
                        top: k.y + l.y,
                        left: k.x + l.x
                    });
                } else {
                    this.store("pin:_scrollFixer", null);
                    window.removeEvent("scroll", f);
                }
                this.removeClass("isPinned");
            }
            return this;
        },
        unpin: function() {
            return this.pin(false);
        },
        togglepin: function() {
            return this.pin(!this.retrieve("pin:_pinned"));
        }
    });
})();
(function() {
    var a = Element.prototype.position;
    Element.implement({
        position: function(h) {
            if (h && ($defined(h.x) || $defined(h.y))) {
                return a ? a.apply(this, arguments) : this;
            }
            $each(h || {}, function(w, u) {
                if (!$defined(w)) {
                    delete h[u];
                }
            });
            h = $merge({
                relativeTo: document.body,
                position: {
                    x: "center",
                    y: "center"
                },
                edge: false,
                offset: {
                    x: 0,
                    y: 0
                },
                returnPos: false,
                relFixedPosition: false,
                ignoreMargins: false,
                ignoreScroll: false,
                allowNegative: false
            }, h);
            var s = {
                x: 0,
                y: 0
            }, f = false;
            var c = this.measure(function() {
                return document.id(this.getOffsetParent());
            });
            if (c && c != this.getDocument().body) {
                s = c.measure(function() {
                    return this.getPosition();
                });
                f = c != document.id(h.relativeTo);
                h.offset.x = h.offset.x - s.x;
                h.offset.y = h.offset.y - s.y;
            }
            var t = function(u) {
                if ($type(u) != "string") {
                    return u;
                }
                u = u.toLowerCase();
                var v = {};
                if (u.test("left")) {
                    v.x = "left";
                } else {
                    if (u.test("right")) {
                        v.x = "right";
                    } else {
                        v.x = "center";
                    }
                }
                if (u.test("upper") || u.test("top")) {
                    v.y = "top";
                } else {
                    if (u.test("bottom")) {
                        v.y = "bottom";
                    } else {
                        v.y = "center";
                    }
                }
                return v;
            };
            h.edge = t(h.edge);
            h.position = t(h.position);
            if (!h.edge) {
                if (h.position.x == "center" && h.position.y == "center") {
                    h.edge = {
                        x: "center",
                        y: "center"
                    };
                } else {
                    h.edge = {
                        x: "left",
                        y: "top"
                    };
                }
            }
            this.setStyle("position", "absolute");
            var g = document.id(h.relativeTo) || document.body, d = g == document.body ? window.getScroll(): g.getPosition(), m = d.y, i = d.x;
            var o = this.getDimensions({
                computeSize: true,
                styles: ["padding", "border", "margin"]
            });
            var k = {}, p = h.offset.y, r = h.offset.x, l = window.getSize();
            switch (h.position.x) {
            case"left":
                k.x = i + r;
                break;
            case"right":
                k.x = i + r + g.offsetWidth;
                break;
            default:
                k.x = i + ((g == document.body ? l.x : g.offsetWidth) / 2) + r;
                break;
            }
            switch (h.position.y) {
            case"top":
                k.y = m + p;
                break;
            case"bottom":
                k.y = m + p + g.offsetHeight;
                break;
            default:
                k.y = m + ((g == document.body ? l.y : g.offsetHeight) / 2) + p;
                break;
            }
            if (h.edge) {
                var b = {};
                switch (h.edge.x) {
                case"left":
                    b.x = 0;
                    break;
                case"right":
                    b.x =- o.x - o.computedRight - o.computedLeft;
                    break;
                default:
                    b.x =- (o.totalWidth / 2);
                    break;
                }
                switch (h.edge.y) {
                case"top":
                    b.y = 0;
                    break;
                case"bottom":
                    b.y =- o.y - o.computedTop - o.computedBottom;
                    break;
                default:
                    b.y =- (o.totalHeight / 2);
                    break;
                }
                k.x += b.x;
                k.y += b.y;
            }
            k = {
                left: ((k.x >= 0 || f || h.allowNegative) ? k.x : 0).toInt(),
                top: ((k.y >= 0 || f || h.allowNegative) ? k.y : 0).toInt()
            };
            var j = {
                left: "x",
                top: "y"
            };
            ["minimum", "maximum"].each(function(u) {
                ["left", "top"].each(function(v) {
                    var w = h[u] ? h[u][j[v]]: null;
                    if (w != null && ((u == "minimum") ? k[v] < w : k[v] > w)) {
                        k[v] = w;
                    }
                });
            });
            if (g.getStyle("position") == "fixed" || h.relFixedPosition) {
                var n = window.getScroll();
                k.top += n.y;
                k.left += n.x;
            }
            var q = g.getScroll();
            if (h.ignoreScroll) {
                k.top -= q.y;
                k.left -= q.x;
            } else {
                k.top += q.y;
                k.left += q.x;
            }
            if (h.ignoreMargins) {
                k.left += (h.edge.x == "right" ? o["margin-right"] : h.edge.x == "center"?-o["margin-left"] + ((o["margin-right"] + o["margin-left"]) / 2) : - o["margin-left"]);
                k.top += (h.edge.y == "bottom" ? o["margin-bottom"] : h.edge.y == "center"?-o["margin-top"] + ((o["margin-bottom"] + o["margin-top"]) / 2) : - o["margin-top"]);
            }
            k.left = Math.ceil(k.left);
            k.top = Math.ceil(k.top);
            if (h.returnPos) {
                return k;
            } else {
                this.setStyles(k);
            }
            return this;
        }
    });
})();
Element.implement({
    isDisplayed: function() {
        return this.getStyle("display") != "none";
    },
    isVisible: function() {
        var a = this.offsetWidth, b = this.offsetHeight;
        return (a == 0 && b == 0) ? false : (a > 0 && b > 0) ? true : this.style.display != "none";
    },
    toggle: function() {
        return this[this.isDisplayed() ? "hide": "show"]();
    },
    hide: function() {
        var b;
        try {
            b = this.getStyle("display");
        } catch (a) {}
        if (b == "none") {
            return this;
        }
        return this.store("element:_originalDisplay", b || "").setStyle("display", "none");
    },
    show: function(a) {
        if (!a && this.isDisplayed()) {
            return this;
        }
        a = a || this.retrieve("element:_originalDisplay") || "block";
        return this.setStyle("display", (a == "none") ? "block" : a);
    },
    swapClass: function(a, b) {
        return this.removeClass(a).addClass(b);
    }
});
Document.implement({
    clearSelection: function() {
        if (document.selection && document.selection.empty) {
            document.selection.empty();
        } else {
            if (window.getSelection) {
                var a = window.getSelection();
                if (a && a.removeAllRanges) {
                    a.removeAllRanges();
                }
            }
        }
    }
});
if (!window.Form) {
    window.Form = {};
}(function() {
    Form.Request = new Class({
        Binds: ["onSubmit", "onFormValidate"],
        Implements: [Options, Events, Class.Occlude],
        options: {
            requestOptions: {
                evalScripts: true,
                useSpinner: true,
                emulation: false,
                link: "ignore"
            },
            sendButtonClicked: true,
            extraData: {},
            resetForm: true
        },
        property: "form.request",
        initialize: function(b, c, a) {
            this.element = document.id(b);
            if (this.occlude()) {
                return this.occluded;
            }
            this.update = document.id(c);
            this.setOptions(a);
            this.makeRequest();
            if (this.options.resetForm) {
                this.request.addEvent("success", function() {
                    $try(function() {
                        this.element.reset();
                    }.bind(this));
                    if (window.OverText) {
                        OverText.update();
                    }
                }.bind(this));
            }
            this.attach();
        },
        toElement: function() {
            return this.element;
        },
        makeRequest: function() {
            this.request = new Request.HTML($merge({
                update: this.update,
                emulation: false,
                spinnerTarget: this.element,
                method: this.element.get("method") || "post"
            }, this.options.requestOptions)).addEvents({
                success: function(b, d, c, a) {
                    ["complete", "success"].each(function(f) {
                        this.fireEvent(f, [this.update, b, d, c, a]);
                    }, this);
                }.bind(this),
                failure: function() {
                    this.fireEvent("complete", arguments).fireEvent("failure", arguments);
                }.bind(this),
                exception: function() {
                    this.fireEvent("failure", arguments);
                }.bind(this)
            });
        },
        attach: function(a) {
            a = $pick(a, true);
            method = a ? "addEvent" : "removeEvent";
            this.element[method]("click:relay(button, input[type=submit])", this.saveClickedButton.bind(this));
            var b = this.element.retrieve("validator");
            if (b) {
                b[method]("onFormValidate", this.onFormValidate);
            } else {
                this.element[method]("submit", this.onSubmit);
            }
        },
        detach: function() {
            this.attach(false);
            return this;
        },
        enable: function() {
            this.attach();
            return this;
        },
        disable: function() {
            this.detach();
            return this;
        },
        onFormValidate: function(b, a, d) {
            if (!d) {
                return;
            }
            var c = this.element.retrieve("validator");
            if (b || (c&&!c.options.stopOnFailure)) {
                if (d && d.stop) {
                    d.stop();
                }
                this.send();
            }
        },
        onSubmit: function(b) {
            var a = this.element.retrieve("validator");
            if (a) {
                this.element.removeEvent("submit", this.onSubmit);
                a.addEvent("onFormValidate", this.onFormValidate);
                this.element.validate();
                return;
            }
            if (b) {
                b.stop();
            }
            this.send();
        },
        saveClickedButton: function(a, b) {
            if (!this.options.sendButtonClicked) {
                return;
            }
            if (!b.get("name")) {
                return;
            }
            this.options.extraData[b.get("name")] = b.get("value") || true;
            this.clickedCleaner = function() {
                delete this.options.extraData[b.get("name")];
                this.clickedCleaner = $empty;
            }.bind(this);
        },
        clickedCleaner: $empty,
        send: function() {
            var b = this.element.toQueryString().trim();
            var a = $H(this.options.extraData).toQueryString();
            if (b) {
                b += "&" + a;
            } else {
                b = a;
            }
            this.fireEvent("send", [this.element, b.parseQueryString()]);
            this.request.send({
                data: b,
                url: this.element.get("action")
            });
            this.clickedCleaner();
            return this;
        }
    });
    Element.Properties.formRequest = {
        set: function() {
            var a = Array.link(arguments, {
                options: Object.type,
                update: Element.type,
                updateId: String.type
            });
            var c = a.update || a.updateId;
            var b = this.retrieve("form.request");
            if (c) {
                if (b) {
                    b.update = document.id(c);
                }
                this.store("form.request:update", c);
            }
            if (a.options) {
                if (b) {
                    b.setOptions(a.options);
                }
                this.store("form.request:options", a.options);
            }
            return this;
        },
        get: function() {
            var a = Array.link(arguments, {
                options: Object.type,
                update: Element.type,
                updateId: String.type
            });
            var b = a.update || a.updateId;
            if (a.options || b ||!this.retrieve("form.request")) {
                if (a.options ||!this.retrieve("form.request:options")) {
                    this.set("form.request", a.options);
                }
                if (b) {
                    this.set("form.request", b);
                }
                this.store("form.request", new Form.Request(this, this.retrieve("form.request:update"), this.retrieve("form.request:options")));
            }
            return this.retrieve("form.request");
        }
    };
    Element.implement({
        formUpdate: function(b, a) {
            this.get("formRequest", b, a).send();
            return this;
        }
    });
})();
Form.Request.Append = new Class({
    Extends: Form.Request,
    options: {
        useReveal: true,
        revealOptions: {},
        inject: "bottom"
    },
    makeRequest: function() {
        this.request = new Request.HTML($merge({
            url: this.element.get("action"),
            method: this.element.get("method") || "post",
            spinnerTarget: this.element
        }, this.options.requestOptions, {
            evalScripts: false
        })).addEvents({
            success: function(b, h, g, a) {
                var c;
                var d = Elements.from(g);
                if (d.length == 1) {
                    c = d[0];
                } else {
                    c = new Element("div", {
                        styles: {
                            display: "none"
                        }
                    }).adopt(d);
                }
                c.inject(this.update, this.options.inject);
                if (this.options.requestOptions.evalScripts) {
                    $exec(a);
                }
                this.fireEvent("beforeEffect", c);
                var f = function() {
                    this.fireEvent("success", [c, this.update, b, h, g, a]);
                }.bind(this);
                if (this.options.useReveal) {
                    c.get("reveal", this.options.revealOptions).chain(f);
                    c.reveal();
                } else {
                    f();
                }
            }.bind(this),
            failure: function(a) {
                this.fireEvent("failure", a);
            }.bind(this)
        });
    }
});
if (!window.Form) {
    window.Form = {};
}
var InputValidator = new Class({
    Implements: [Options],
    options: {
        errorMsg: "Validation failed.",
        test: function(a) {
            return true;
        }
    },
    initialize: function(b, a) {
        this.setOptions(a);
        this.className = b;
    },
    test: function(b, a) {
        if (document.id(b)) {
            return this.options.test(document.id(b), a || this.getProps(b));
        } else {
            return false;
        }
    },
    getError: function(c, a) {
        var b = this.options.errorMsg;
        if ($type(b) == "function") {
            b = b(document.id(c), a || this.getProps(c));
        }
        return b;
    },
    getProps: function(a) {
        if (!document.id(a)) {
            return {};
        }
        return a.get("validatorProps");
    }
});
Element.Properties.validatorProps = {
    set: function(a) {
        return this.eliminate("validatorProps").store("validatorProps", a);
    },
    get: function(a) {
        if (a) {
            this.set(a);
        }
        if (this.retrieve("validatorProps")) {
            return this.retrieve("validatorProps");
        }
        if (this.getProperty("validatorProps")) {
            try {
                this.store("validatorProps", JSON.decode(this.getProperty("validatorProps")));
            } catch (c) {
                return {};
            }
        } else {
            var b = this.get("class").split(" ").filter(function(d) {
                return d.test(":");
            });
            if (!b.length) {
                this.store("validatorProps", {});
            } else {
                a = {};
                b.each(function(d) {
                    var f = d.split(":");
                    if (f[1]) {
                        try {
                            a[f[0]] = JSON.decode(f[1]);
                        } catch (g) {}
                    }
                });
                this.store("validatorProps", a);
            }
        }
        return this.retrieve("validatorProps");
    }
};
Form.Validator = new Class({
    Implements: [Options, Events],
    Binds: ["onSubmit"],
    options: {
        fieldSelectors: "input, select, textarea",
        ignoreHidden: true,
        ignoreDisabled: true,
        useTitles: false,
        evaluateOnSubmit: true,
        evaluateFieldsOnBlur: true,
        evaluateFieldsOnChange: true,
        serial: true,
        stopOnFailure: true,
        warningPrefix: function() {
            return Form.Validator.getMsg("warningPrefix") || "Warning: ";
        },
        errorPrefix: function() {
            return Form.Validator.getMsg("errorPrefix") || "Error: ";
        }
    },
    initialize: function(b, a) {
        this.setOptions(a);
        this.element = document.id(b);
        this.element.store("validator", this);
        this.warningPrefix = $lambda(this.options.warningPrefix)();
        this.errorPrefix = $lambda(this.options.errorPrefix)();
        if (this.options.evaluateOnSubmit) {
            this.element.addEvent("submit", this.onSubmit);
        }
        if (this.options.evaluateFieldsOnBlur || this.options.evaluateFieldsOnChange) {
            this.watchFields(this.getFields());
        }
    },
    toElement: function() {
        return this.element;
    },
    getFields: function() {
        return (this.fields = this.element.getElements(this.options.fieldSelectors));
    },
    watchFields: function(a) {
        a.each(function(b) {
            if (this.options.evaluateFieldsOnBlur) {
                b.addEvent("blur", this.validationMonitor.pass([b, false], this));
            }
            if (this.options.evaluateFieldsOnChange) {
                b.addEvent("change", this.validationMonitor.pass([b, true], this));
            }
        }, this);
    },
    validationMonitor: function() {
        $clear(this.timer);
        this.timer = this.validateField.delay(50, this, arguments);
    },
    onSubmit: function(a) {
        if (!this.validate(a) && a) {
            a.preventDefault();
        } else {
            this.reset();
        }
    },
    reset: function() {
        this.getFields().each(this.resetField, this);
        return this;
    },
    validate: function(b) {
        var a = this.getFields().map(function(c) {
            return this.validateField(c, true);
        }, this).every(function(c) {
            return c;
        });
        this.fireEvent("formValidate", [a, this.element, b]);
        if (this.options.stopOnFailure&&!a && b) {
            b.preventDefault();
        }
        return a;
    },
    validateField: function(j, a) {
        if (this.paused) {
            return true;
        }
        j = document.id(j);
        var d=!j.hasClass("validation-failed");
        var g, i;
        if (this.options.serial&&!a) {
            g = this.element.getElement(".validation-failed");
            i = this.element.getElement(".warning");
        }
        if (j && (!g || a || j.hasClass("validation-failed") || (g&&!this.options.serial))) {
            var c = j.className.split(" ").some(function(k) {
                return this.getValidator(k);
            }, this);
            var h = [];
            j.className.split(" ").each(function(k) {
                if (k&&!this.test(k, j)) {
                    h.include(k);
                }
            }, this);
            d = h.length === 0;
            if (c&&!j.hasClass("warnOnly")) {
                if (d) {
                    j.addClass("validation-passed").removeClass("validation-failed");
                    this.fireEvent("elementPass", j);
                } else {
                    j.addClass("validation-failed").removeClass("validation-passed");
                    this.fireEvent("elementFail", [j, h]);
                }
            }
            if (!i) {
                var f = j.className.split(" ").some(function(k) {
                    if (k.test("^warn-") || j.hasClass("warnOnly")) {
                        return this.getValidator(k.replace(/^warn-/, ""));
                    } else {
                        return null;
                    }
                }, this);
                j.removeClass("warning");
                var b = j.className.split(" ").map(function(k) {
                    if (k.test("^warn-") || j.hasClass("warnOnly")) {
                        return this.test(k.replace(/^warn-/, ""), j, true);
                    } else {
                        return null;
                    }
                }, this);
            }
        }
        return d;
    },
    test: function(b, d, f) {
        d = document.id(d);
        if ((this.options.ignoreHidden&&!d.isVisible()) || (this.options.ignoreDisabled && d.get("disabled"))) {
            return true;
        }
        var a = this.getValidator(b);
        f = $pick(f, false);
        if (d.hasClass("warnOnly")) {
            f = true;
        }
        var c = d.hasClass("ignoreValidation") || (a ? a.test(d) : true);
        if (a && d.isVisible()) {
            this.fireEvent("elementValidate", [c, d, b, f]);
        }
        if (f) {
            return true;
        }
        return c;
    },
    resetField: function(a) {
        a = document.id(a);
        if (a) {
            a.className.split(" ").each(function(b) {
                if (b.test("^warn-")) {
                    b = b.replace(/^warn-/, "");
                }
                a.removeClass("validation-failed");
                a.removeClass("warning");
                a.removeClass("validation-passed");
            }, this);
        }
        return this;
    },
    stop: function() {
        this.paused = true;
        return this;
    },
    start: function() {
        this.paused = false;
        return this;
    },
    ignoreField: function(a, b) {
        a = document.id(a);
        if (a) {
            this.enforceField(a);
            if (b) {
                a.addClass("warnOnly");
            } else {
                a.addClass("ignoreValidation");
            }
        }
        return this;
    },
    enforceField: function(a) {
        a = document.id(a);
        if (a) {
            a.removeClass("warnOnly").removeClass("ignoreValidation");
        }
        return this;
    }
});
Form.Validator.getMsg = function(a) {
    return MooTools.lang.get("Form.Validator", a);
};
Form.Validator.adders = {
    validators: {},
    add: function(b, a) {
        this.validators[b] = new InputValidator(b, a);
        if (!this.initialize) {
            this.implement({
                validators: this.validators
            });
        }
    },
    addAllThese: function(a) {
        $A(a).each(function(b) {
            this.add(b[0], b[1]);
        }, this);
    },
    getValidator: function(a) {
        return this.validators[a.split(":")[0]];
    }
};
$extend(Form.Validator, Form.Validator.adders);
Form.Validator.implement(Form.Validator.adders);
Form.Validator.add("IsEmpty", {
    errorMsg: false,
    test: function(a) {
        if (a.type == "select-one" || a.type == "select") {
            return !(a.selectedIndex >= 0 && a.options[a.selectedIndex].value != "");
        } else {
            return ((a.get("value") == null) || (a.get("value").length == 0));
        }
    }
});
Form.Validator.addAllThese([["required", {
    errorMsg: function() {
        return Form.Validator.getMsg("required");
    },
    test: function(a) {
        return !Form.Validator.getValidator("IsEmpty").test(a);
    }
}
], ["minLength", {
    errorMsg: function(a, b) {
        if ($type(b.minLength)) {
            return Form.Validator.getMsg("minLength").substitute({
                minLength: b.minLength,
                length: a.get("value").length
            });
        } else {
            return "";
        }
    },
    test: function(a, b) {
        if ($type(b.minLength)) {
            return (a.get("value").length >= $pick(b.minLength, 0));
        } else {
            return true;
        }
    }
}
], ["maxLength", {
    errorMsg: function(a, b) {
        if ($type(b.maxLength)) {
            return Form.Validator.getMsg("maxLength").substitute({
                maxLength: b.maxLength,
                length: a.get("value").length
            });
        } else {
            return "";
        }
    },
    test: function(a, b) {
        return (a.get("value").length <= $pick(b.maxLength, 10000));
    }
}
], ["validate-integer", {
    errorMsg: Form.Validator.getMsg.pass("integer"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^(-?[1-9]\d*|0)$/).test(a.get("value"));
    }
}
], ["validate-numeric", {
    errorMsg: Form.Validator.getMsg.pass("numeric"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(a.get("value"));
    }
}
], ["validate-digits", {
    errorMsg: Form.Validator.getMsg.pass("digits"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^[\d() .:\-\+#]+$/.test(a.get("value")));
    }
}
], ["validate-alpha", {
    errorMsg: Form.Validator.getMsg.pass("alpha"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^[a-zA-Z]+$/).test(a.get("value"));
    }
}
], ["validate-alphanum", {
    errorMsg: Form.Validator.getMsg.pass("alphanum"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) ||!(/\W/).test(a.get("value"));
    }
}
], ["validate-date", {
    errorMsg: function(a, b) {
        if (Date.parse) {
            var c = b.dateFormat || "%x";
            return Form.Validator.getMsg("dateSuchAs").substitute({
                date: new Date().format(c)
            });
        } else {
            return Form.Validator.getMsg("dateInFormatMDY");
        }
    },
    test: function(a, b) {
        if (Form.Validator.getValidator("IsEmpty").test(a)) {
            return true;
        }
        var h;
        if (Date.parse) {
            var g = b.dateFormat || "%x";
            h = Date.parse(a.get("value"));
            var f = h.format(g);
            if (f != "invalid date") {
                a.set("value", f);
            }
            return !isNaN(h);
        } else {
            var c = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            if (!c.test(a.get("value"))) {
                return false;
            }
            h = new Date(a.get("value").replace(c, "$1/$2/$3"));
            return (parseInt(RegExp.$1, 10) == (1 + h.getMonth())) && (parseInt(RegExp.$2, 10) == h.getDate()) && (parseInt(RegExp.$3, 10) == h.getFullYear());
        }
    }
}
], ["validate-email", {
    errorMsg: Form.Validator.getMsg.pass("email"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(a.get("value"));
    }
}
], ["validate-url", {
    errorMsg: Form.Validator.getMsg.pass("url"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(a.get("value"));
    }
}
], ["validate-currency-dollar", {
    errorMsg: Form.Validator.getMsg.pass("currencyDollar"),
    test: function(a) {
        return Form.Validator.getValidator("IsEmpty").test(a) || (/^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/).test(a.get("value"));
    }
}
], ["validate-one-required", {
    errorMsg: Form.Validator.getMsg.pass("oneRequired"),
    test: function(a, b) {
        var c = document.id(b["validate-one-required"]) || a.getParent(b["validate-one-required"]);
        return c.getElements("input").some(function(d) {
            if (["checkbox", "radio"].contains(d.get("type"))) {
                return d.get("checked");
            }
            return d.get("value");
        });
    }
}
]]);
Element.Properties.validator = {
    set: function(a) {
        var b = this.retrieve("validator");
        if (b) {
            b.setOptions(a);
        }
        return this.store("validator:options", a);
    },
    get: function(a) {
        if (a ||!this.retrieve("validator")) {
            if (a ||!this.retrieve("validator:options")) {
                this.set("validator", a);
            }
            this.store("validator", new Form.Validator(this, this.retrieve("validator:options")));
        }
        return this.retrieve("validator");
    }
};
Element.implement({
    validate: function(a) {
        if (a) {
            this.set("validator", a);
        }
        return this.get("validator", a).validate();
    }
});
var FormValidator = Form.Validator;
Form.Validator.Inline = new Class({
    Extends: Form.Validator,
    options: {
        showError: function(a) {
            if (a.reveal) {
                a.reveal();
            } else {
                a.setStyle("display", "block");
            }
        },
        hideError: function(a) {
            if (a.dissolve) {
                a.dissolve();
            } else {
                a.setStyle("display", "none");
            }
        },
        scrollToErrorsOnSubmit: true,
        scrollToErrorsOnBlur: false,
        scrollToErrorsOnChange: false,
        scrollFxOptions: {
            transition: "quad:out",
            offset: {
                y: - 20
            }
        }
    },
    initialize: function(b, a) {
        this.parent(b, a);
        this.addEvent("onElementValidate", function(h, g, f, i) {
            var d = this.getValidator(f);
            if (!h && d.getError(g)) {
                if (i) {
                    g.addClass("warning");
                }
                var c = this.makeAdvice(f, g, d.getError(g), i);
                this.insertAdvice(c, g);
                this.showAdvice(f, g);
            } else {
                this.hideAdvice(f, g);
            }
        });
    },
    makeAdvice: function(d, g, c, h) {
        var f = (h) ? this.warningPrefix: this.errorPrefix;
        f += (this.options.useTitles) ? g.title || c : c;
        var a = (h) ? "warning-advice": "validation-advice";
        var b = this.getAdvice(d, g);
        if (b) {
            b = b.set("html", f);
        } else {
            b = new Element("div", {
                html: f,
                styles: {
                    display: "none"
                },
                id: "advice-" + d.split(":")[0] + "-" + this.getFieldId(g)
            }).addClass(a);
        }
        g.store("advice-" + d, b);
        return b;
    },
    getFieldId: function(a) {
        return a.id ? a.id : a.id = "input_" + a.name;
    },
    showAdvice: function(b, c) {
        var a = this.getAdvice(b, c);
        if (a&&!c.retrieve(this.getPropName(b)) && (a.getStyle("display") == "none" || a.getStyle("visiblity") == "hidden" || a.getStyle("opacity") == 0)) {
            c.store(this.getPropName(b), true);
            this.options.showError(a);
            this.fireEvent("showAdvice", [c, a, b]);
        }
    },
    hideAdvice: function(b, c) {
        var a = this.getAdvice(b, c);
        if (a && c.retrieve(this.getPropName(b))) {
            c.store(this.getPropName(b), false);
            this.options.hideError(a);
            this.fireEvent("hideAdvice", [c, a, b]);
        }
    },
    getPropName: function(a) {
        return "advice" + a;
    },
    resetField: function(a) {
        a = document.id(a);
        if (!a) {
            return this;
        }
        this.parent(a);
        a.className.split(" ").each(function(b) {
            this.hideAdvice(b, a);
        }, this);
        return this;
    },
    getAllAdviceMessages: function(d, c) {
        var b = [];
        if (d.hasClass("ignoreValidation")&&!c) {
            return b;
        }
        var a = d.className.split(" ").some(function(h) {
            var f = h.test("^warn-") || d.hasClass("warnOnly");
            if (f) {
                h = h.replace(/^warn-/, "");
            }
            var g = this.getValidator(h);
            if (!g) {
                return;
            }
            b.push({
                message: g.getError(d),
                warnOnly: f,
                passed: g.test(),
                validator: g
            });
        }, this);
        return b;
    },
    getAdvice: function(a, b) {
        return b.retrieve("advice-" + a);
    },
    insertAdvice: function(a, c) {
        var b = c.get("validatorProps");
        if (!b.msgPos ||!document.id(b.msgPos)) {
            if (c.type.toLowerCase() == "radio") {
                c.getParent().adopt(a);
            } else {
                a.inject(document.id(c), "after");
            }
        } else {
            document.id(b.msgPos).grab(a);
        }
    },
    validateField: function(h, g, b) {
        var a = this.parent(h, g);
        if (((this.options.scrollToErrorsOnSubmit && b === undefined) || b)&&!a) {
            var c = document.id(this).getElement(".validation-failed");
            var d = document.id(this).getParent();
            while (d != document.body && d.getScrollSize().y == d.getSize().y) {
                d = d.getParent();
            }
            var f = d.retrieve("fvScroller");
            if (!f && window.Fx && Fx.Scroll) {
                f = new Fx.Scroll(d, this.options.scrollFxOptions);
                d.store("fvScroller", f);
            }
            if (c) {
                if (f) {
                    f.toElement(c);
                } else {
                    d.scrollTo(d.getScroll().x, c.getPosition(d).y - 20);
                }
            }
        }
        return a;
    },
    watchFields: function(a) {
        a.each(function(b) {
            if (this.options.evaluateFieldsOnBlur) {
                b.addEvent("blur", this.validationMonitor.pass([b, false, this.options.scrollToErrorsOnBlur], this));
            }
            if (this.options.evaluateFieldsOnChange) {
                b.addEvent("change", this.validationMonitor.pass([b, true, this.options.scrollToErrorsOnChange], this));
            }
        }, this);
    }
});
Form.Validator.addAllThese([["validate-enforce-oncheck", {
    test: function(a, b) {
        var c = a.getParent("form").retrieve("validator");
        if (!c) {
            return true;
        }(b.toEnforce || document.id(b.enforceChildrenOf).getElements("input, select, textarea")).map(function(d) {
            if (a.checked) {
                c.enforceField(d);
            } else {
                c.ignoreField(d);
                c.resetField(d);
            }
        });
        return true;
    }
}
], ["validate-ignore-oncheck", {
    test: function(a, b) {
        var c = a.getParent("form").retrieve("validator");
        if (!c) {
            return true;
        }(b.toIgnore || document.id(b.ignoreChildrenOf).getElements("input, select, textarea")).each(function(d) {
            if (a.checked) {
                c.ignoreField(d);
                c.resetField(d);
            } else {
                c.enforceField(d);
            }
        });
        return true;
    }
}
], ["validate-nospace", {
    errorMsg: function() {
        return Form.Validator.getMsg("noSpace");
    },
    test: function(a, b) {
        return !a.get("value").test(/\s/);
    }
}
], ["validate-toggle-oncheck", {
    test: function(b, c) {
        var d = b.getParent("form").retrieve("validator");
        if (!d) {
            return true;
        }
        var a = c.toToggle || document.id(c.toToggleChildrenOf).getElements("input, select, textarea");
        if (!b.checked) {
            a.each(function(f) {
                d.ignoreField(f);
                d.resetField(f);
            });
        } else {
            a.each(function(f) {
                d.enforceField(f);
            });
        }
        return true;
    }
}
], ["validate-reqchk-bynode", {
    errorMsg: function() {
        return Form.Validator.getMsg("reqChkByNode");
    },
    test: function(a, b) {
        return (document.id(b.nodeId).getElements(b.selector || "input[type=checkbox], input[type=radio]")).some(function(c) {
            return c.checked;
        });
    }
}
], ["validate-required-check", {
    errorMsg: function(a, b) {
        return b.useTitle ? a.get("title") : Form.Validator.getMsg("requiredChk");
    },
    test: function(a, b) {
        return !!a.checked;
    }
}
], ["validate-reqchk-byname", {
    errorMsg: function(a, b) {
        return Form.Validator.getMsg("reqChkByName").substitute({
            label: b.label || a.get("type")
        });
    },
    test: function(b, d) {
        var c = d.groupName || b.get("name");
        var a = $$(document.getElementsByName(c)).some(function(h, g) {
            return h.checked;
        });
        var f = b.getParent("form").retrieve("validator");
        if (a && f) {
            f.resetField(b);
        }
        return a;
    }
}
], ["validate-match", {
    errorMsg: function(a, b) {
        return Form.Validator.getMsg("match").substitute({
            matchName: b.matchName || document.id(b.matchInput).get("name")
        });
    },
    test: function(b, c) {
        var d = b.get("value");
        var a = document.id(c.matchInput) && document.id(c.matchInput).get("value");
        return d && a ? d == a : true;
    }
}
], ["validate-after-date", {
    errorMsg: function(a, b) {
        return Form.Validator.getMsg("afterDate").substitute({
            label: b.afterLabel || (b.afterElement ? Form.Validator.getMsg("startDate") : Form.Validator.getMsg("currentDate"))
        });
    },
    test: function(b, c) {
        var d = document.id(c.afterElement) ? Date.parse(document.id(c.afterElement).get("value")): new Date();
        var a = Date.parse(b.get("value"));
        return a && d ? a >= d : true;
    }
}
], ["validate-before-date", {
    errorMsg: function(a, b) {
        return Form.Validator.getMsg("beforeDate").substitute({
            label: b.beforeLabel || (b.beforeElement ? Form.Validator.getMsg("endDate") : Form.Validator.getMsg("currentDate"))
        });
    },
    test: function(b, c) {
        var d = Date.parse(b.get("value"));
        var a = document.id(c.beforeElement) ? Date.parse(document.id(c.beforeElement).get("value")): new Date();
        return a && d ? a >= d : true;
    }
}
], ["validate-custom-required", {
    errorMsg: function() {
        return Form.Validator.getMsg("required");
    },
    test: function(a, b) {
        return a.get("value") != b.emptyValue;
    }
}
], ["validate-same-month", {
    errorMsg: function(a, b) {
        var c = document.id(b.sameMonthAs) && document.id(b.sameMonthAs).get("value");
        var d = a.get("value");
        if (d != "") {
            return Form.Validator.getMsg(c ? "sameMonth" : "startMonth");
        }
    },
    test: function(a, b) {
        var d = Date.parse(a.get("value"));
        var c = Date.parse(document.id(b.sameMonthAs) && document.id(b.sameMonthAs).get("value"));
        return d && c ? d.format("%B") == c.format("%B") : true;
    }
}
], ["validate-cc-num", {
    errorMsg: function(a) {
        var b = a.get("value").replace(/[^0-9]/g, "");
        return Form.Validator.getMsg("creditcard").substitute({
            length: b.length
        });
    },
    test: function(c) {
        if (Form.Validator.getValidator("IsEmpty").test(c)) {
            return true;
        }
        var h = c.get("value");
        h = h.replace(/[^0-9]/g, "");
        var a = false;
        if (h.test(/^4[0-9]{12}([0-9]{3})?$/)) {
            a = "Visa";
        } else {
            if (h.test(/^5[1-5]([0-9]{14})$/)) {
                a = "Master Card";
            } else {
                if (h.test(/^3[47][0-9]{13}$/)) {
                    a = "American Express";
                } else {
                    if (h.test(/^6011[0-9]{12}$/)) {
                        a = "Discover";
                    }
                }
            }
        }
        if (a) {
            var d = 0;
            var f = 0;
            for (var b = h.length - 1; b >= 0; --b) {
                f = h.charAt(b).toInt();
                if (f == 0) {
                    continue;
                }
                if ((h.length - b)%2 == 0) {
                    f += f;
                }
                if (f > 9) {
                    f = f.toString().charAt(0).toInt() + f.toString().charAt(1).toInt();
                }
                d += f;
            }
            if ((d%10) == 0) {
                return true;
            }
        }
        var g = "";
        while (h != "") {
            g += " " + h.substr(0, 4);
            h = h.substr(4);
        }
        c.getParent("form").retrieve("validator").ignoreField(c);
        c.set("value", g.clean());
        c.getParent("form").retrieve("validator").enforceField(c);
        return false;
    }
}
]]);
var OverText = new Class({
    Implements: [Options, Events, Class.Occlude],
    Binds: ["reposition", "assert", "focus", "hide"],
    options: {
        element: "label",
        positionOptions: {
            position: "upperLeft",
            edge: "upperLeft",
            offset: {
                x: 4,
                y: 2
            }
        },
        poll: false,
        pollInterval: 250,
        wrap: false
    },
    property: "OverText",
    initialize: function(b, a) {
        this.element = document.id(b);
        if (this.occlude()) {
            return this.occluded;
        }
        this.setOptions(a);
        this.attach(this.element);
        OverText.instances.push(this);
        if (this.options.poll) {
            this.poll();
        }
        return this;
    },
    toElement: function() {
        return this.element;
    },
    attach: function() {
        var a = this.options.textOverride || this.element.get("alt") || this.element.get("title");
        if (!a) {
            return;
        }
        this.text = new Element(this.options.element, {
            "class": "overTxtLabel",
            styles: {
                lineHeight: "normal",
                position: "absolute",
                cursor: "text"
            },
            html: a,
            events: {
                click: this.hide.pass(this.options.element == "label", this)
            }
        }).inject(this.element, "after");
        if (this.options.element == "label") {
            if (!this.element.get("id")) {
                this.element.set("id", "input_" + new Date().getTime());
            }
            this.text.set("for", this.element.get("id"));
        }
        if (this.options.wrap) {
            this.textHolder = new Element("div", {
                styles: {
                    lineHeight: "normal",
                    position: "relative"
                },
                "class": "overTxtWrapper"
            }).adopt(this.text).inject(this.element, "before");
        }
        return this.enable();
    },
    destroy: function() {
        this.element.eliminate("OverTextDiv").eliminate("OverText");
        this.disable();
        if (this.text) {
            this.text.destroy();
        }
        if (this.textHolder) {
            this.textHolder.destroy();
        }
        return this;
    },
    disable: function() {
        this.element.removeEvents({
            focus: this.focus,
            blur: this.assert,
            change: this.assert
        });
        window.removeEvent("resize", this.reposition);
        this.hide(true, true);
        return this;
    },
    enable: function() {
        this.element.addEvents({
            focus: this.focus,
            blur: this.assert,
            change: this.assert
        });
        window.addEvent("resize", this.reposition);
        this.assert(true);
        this.reposition();
        return this;
    },
    wrap: function() {
        if (this.options.element == "label") {
            if (!this.element.get("id")) {
                this.element.set("id", "input_" + new Date().getTime());
            }
            this.text.set("for", this.element.get("id"));
        }
    },
    startPolling: function() {
        this.pollingPaused = false;
        return this.poll();
    },
    poll: function(a) {
        if (this.poller&&!a) {
            return this;
        }
        var b = function() {
            if (!this.pollingPaused) {
                this.assert(true);
            }
        }.bind(this);
        if (a) {
            $clear(this.poller);
        } else {
            this.poller = b.periodical(this.options.pollInterval, this);
        }
        return this;
    },
    stopPolling: function() {
        this.pollingPaused = true;
        return this.poll(true);
    },
    focus: function() {
        if (this.text && (!this.text.isDisplayed() || this.element.get("disabled"))) {
            return;
        }
        this.hide();
    },
    hide: function(c, a) {
        if (this.text && (this.text.isDisplayed() && (!this.element.get("disabled") || a))) {
            this.text.hide();
            this.fireEvent("textHide", [this.text, this.element]);
            this.pollingPaused = true;
            if (!c) {
                try {
                    this.element.fireEvent("focus");
                    this.element.focus();
                } catch (b) {}
            }
        }
        return this;
    },
    show: function() {
        if (this.text&&!this.text.isDisplayed()) {
            this.text.show();
            this.reposition();
            this.fireEvent("textShow", [this.text, this.element]);
            this.pollingPaused = false;
        }
        return this;
    },
    assert: function(a) {
        this[this.test() ? "show": "hide"](a);
    },
    test: function() {
        var a = this.element.get("value");
        return !a;
    },
    reposition: function() {
        this.assert(true);
        if (!this.element.isVisible()) {
            return this.stopPolling().hide();
        }
        if (this.text && this.test()) {
            this.text.position($merge(this.options.positionOptions, {
                relativeTo: this.element
            }));
        }
        return this;
    }
});
OverText.instances = [];
$extend(OverText, {
    each: function(a) {
        return OverText.instances.map(function(c, b) {
            if (c.element && c.text) {
                return a.apply(OverText, [c, b]);
            }
            return null;
        });
    },
    update: function() {
        return OverText.each(function(a) {
            return a.reposition();
        });
    },
    hideAll: function() {
        return OverText.each(function(a) {
            return a.hide(true, true);
        });
    },
    showAll: function() {
        return OverText.each(function(a) {
            return a.show();
        });
    }
});
if (window.Fx && Fx.Reveal) {
    Fx.Reveal.implement({
        hideInputs: Browser.Engine.trident ? "select, input, textarea, object, embed, .overTxtLabel": false
    });
}
Fx.Elements = new Class({
    Extends: Fx.CSS,
    initialize: function(b, a) {
        this.elements = this.subject = $$(b);
        this.parent(a);
    },
    compute: function(h, j, k) {
        var c = {};
        for (var d in h) {
            var a = h[d], f = j[d], g = c[d] = {};
            for (var b in a) {
                g[b] = this.parent(a[b], f[b], k);
            }
        }
        return c;
    },
    set: function(b) {
        for (var c in b) {
            if (!this.elements[c]) {
                continue;
            }
            var a = b[c];
            for (var d in a) {
                this.render(this.elements[c], d, a[d], this.options.unit);
            }
        }
        return this;
    },
    start: function(c) {
        if (!this.check(c)) {
            return this;
        }
        var j = {}, k = {};
        for (var d in c) {
            if (!this.elements[d]) {
                continue;
            }
            var g = c[d], a = j[d] = {}, h = k[d] = {};
            for (var b in g) {
                var f = this.prepare(this.elements[d], b, g[b]);
                a[b] = f.from;
                h[b] = f.to;
            }
        }
        return this.parent(j, k);
    }
});
Fx.Accordion = new Class({
    Extends: Fx.Elements,
    options: {
        fixedHeight: false,
        fixedWidth: false,
        display: 0,
        show: false,
        height: true,
        width: false,
        opacity: true,
        alwaysHide: false,
        trigger: "click",
        initialDisplayFx: true,
        returnHeightToAuto: true
    },
    initialize: function() {
        var c = Array.link(arguments, {
            container: Element.type,
            options: Object.type,
            togglers: $defined,
            elements: $defined
        });
        this.parent(c.elements, c.options);
        this.togglers = $$(c.togglers);
        this.previous =- 1;
        this.internalChain = new Chain();
        if (this.options.alwaysHide) {
            this.options.wait = true;
        }
        if ($chk(this.options.show)) {
            this.options.display = false;
            this.previous = this.options.show;
        }
        if (this.options.start) {
            this.options.display = false;
            this.options.show = false;
        }
        this.effects = {};
        if (this.options.opacity) {
            this.effects.opacity = "fullOpacity";
        }
        if (this.options.width) {
            this.effects.width = this.options.fixedWidth ? "fullWidth" : "offsetWidth";
        }
        if (this.options.height) {
            this.effects.height = this.options.fixedHeight ? "fullHeight" : "scrollHeight";
        }
        for (var b = 0, a = this.togglers.length; b < a; b++) {
            this.addSection(this.togglers[b], this.elements[b]);
        }
        this.elements.each(function(f, d) {
            if (this.options.show === d) {
                this.fireEvent("active", [this.togglers[d], f]);
            } else {
                for (var g in this.effects) {
                    f.setStyle(g, 0);
                }
            }
        }, this);
        if ($chk(this.options.display) || this.options.initialDisplayFx === false) {
            this.display(this.options.display, this.options.initialDisplayFx);
        }
        if (this.options.fixedHeight !== false) {
            this.options.returnHeightToAuto = false;
        }
        this.addEvent("complete", this.internalChain.callChain.bind(this.internalChain));
    },
    addSection: function(f, c) {
        f = document.id(f);
        c = document.id(c);
        var g = this.togglers.contains(f);
        this.togglers.include(f);
        this.elements.include(c);
        var a = this.togglers.indexOf(f);
        var b = this.display.bind(this, a);
        f.store("accordion:display", b);
        f.addEvent(this.options.trigger, b);
        if (this.options.height) {
            c.setStyles({
                "padding-top": 0,
                "border-top": "none",
                "padding-bottom": 0,
                "border-bottom": "none"
            });
        }
        if (this.options.width) {
            c.setStyles({
                "padding-left": 0,
                "border-left": "none",
                "padding-right": 0,
                "border-right": "none"
            });
        }
        c.fullOpacity = 1;
        if (this.options.fixedWidth) {
            c.fullWidth = this.options.fixedWidth;
        }
        if (this.options.fixedHeight) {
            c.fullHeight = this.options.fixedHeight;
        }
        c.setStyle("overflow", "hidden");
        if (!g) {
            for (var d in this.effects) {
                c.setStyle(d, 0);
            }
        }
        return this;
    },
    removeSection: function(f, b) {
        var a = this.togglers.indexOf(f);
        var c = this.elements[a];
        var d = function() {
            this.togglers.erase(f);
            this.elements.erase(c);
            this.detach(f);
        }.bind(this);
        if (this.now == a || b != undefined) {
            this.display($pick(b, a - 1 >= 0 ? a - 1 : 0)).chain(d);
        } else {
            d();
        }
        return this;
    },
    detach: function(b) {
        var a = function(c) {
            c.removeEvent(this.options.trigger, c.retrieve("accordion:display"));
        }.bind(this);
        if (!b) {
            this.togglers.each(a);
        } else {
            a(b);
        }
        return this;
    },
    display: function(a, b) {
        if (!this.check(a, b)) {
            return this;
        }
        b = $pick(b, true);
        a = ($type(a) == "element") ? this.elements.indexOf(a) : a;
        if (a == this.previous&&!this.options.alwaysHide) {
            return this;
        }
        if (this.options.returnHeightToAuto) {
            var d = this.elements[this.previous];
            if (d&&!this.selfHidden) {
                for (var c in this.effects) {
                    d.setStyle(c, d[this.effects[c]]);
                }
            }
        }
        if ((this.timer && this.options.wait) || (a === this.previous&&!this.options.alwaysHide)) {
            return this;
        }
        this.previous = a;
        var f = {};
        this.elements.each(function(j, h) {
            f[h] = {};
            var g;
            if (h != a) {
                g = true;
            } else {
                if (this.options.alwaysHide && ((j.offsetHeight > 0 && this.options.height) || j.offsetWidth > 0 && this.options.width)) {
                    g = true;
                    this.selfHidden = true;
                }
            }
            this.fireEvent(g ? "background" : "active", [this.togglers[h], j]);
            for (var k in this.effects) {
                f[h][k] = g ? 0 : j[this.effects[k]];
            }
        }, this);
        this.internalChain.clearChain();
        this.internalChain.chain(function() {
            if (this.options.returnHeightToAuto&&!this.selfHidden) {
                var g = this.elements[a];
                if (g) {
                    g.setStyle("height", "auto");
                }
            }
        }.bind(this));
        return b ? this.start(f) : this.set(f);
    }
});
var Accordion = new Class({
    Extends: Fx.Accordion,
    initialize: function() {
        this.parent.apply(this, arguments);
        var a = Array.link(arguments, {
            container: Element.type
        });
        this.container = a.container;
    },
    addSection: function(c, b, f) {
        c = document.id(c);
        b = document.id(b);
        var d = this.togglers.contains(c);
        var a = this.togglers.length;
        if (a && (!d || f)) {
            f = $pick(f, a - 1);
            c.inject(this.togglers[f], "before");
            b.inject(c, "after");
        } else {
            if (this.container&&!d) {
                c.inject(this.container);
                b.inject(this.container);
            }
        }
        return this.parent.apply(this, arguments);
    }
});
Fx.Move = new Class({
    Extends: Fx.Morph,
    options: {
        relativeTo: document.body,
        position: "center",
        edge: false,
        offset: {
            x: 0,
            y: 0
        }
    },
    start: function(a) {
        var b = this.element, c = b.getStyles("top", "left");
        if (c.top == "auto" || c.left == "auto") {
            b.setPosition(b.getPosition(b.getOffsetParent()));
        }
        return this.parent(b.position($merge(this.options, a, {
            returnPos: true
        })));
    }
});
Element.Properties.move = {
    set: function(a) {
        var b = this.retrieve("move");
        if (b) {
            b.cancel();
        }
        return this.eliminate("move").store("move:options", $extend({
            link: "cancel"
        }, a));
    },
    get: function(a) {
        if (a ||!this.retrieve("move")) {
            if (a ||!this.retrieve("move:options")) {
                this.set("move", a);
            }
            this.store("move", new Fx.Move(this, this.retrieve("move:options")));
        }
        return this.retrieve("move");
    }
};
Element.implement({
    move: function(a) {
        this.get("move").start(a);
        return this;
    }
});
Fx.Reveal = new Class({
    Extends: Fx.Morph,
    options: {
        link: "cancel",
        styles: ["padding", "border", "margin"],
        transitionOpacity: !Browser.Engine.trident4,
        mode: "vertical",
        display: function() {
            return this.element.get("tag") != "tr" ? "block" : "table-row";
        },
        hideInputs: Browser.Engine.trident ? "select, input, textarea, object, embed": false,
        opacity: 1
    },
    dissolve: function() {
        try {
            if (!this.hiding&&!this.showing) {
                if (this.element.getStyle("display") != "none") {
                    this.hiding = true;
                    this.showing = false;
                    this.hidden = true;
                    this.cssText = this.element.style.cssText;
                    var d = this.element.getComputedSize({
                        styles: this.options.styles,
                        mode: this.options.mode
                    });
                    this.element.setStyle("display", $lambda(this.options.display).apply(this));
                    if (this.options.transitionOpacity) {
                        d.opacity = this.options.opacity;
                    }
                    var b = {};
                    $each(d, function(g, f) {
                        b[f] = [g, 0];
                    }, this);
                    this.element.setStyle("overflow", "hidden");
                    var a = this.options.hideInputs ? this.element.getElements(this.options.hideInputs): null;
                    this.$chain.unshift(function() {
                        if (this.hidden) {
                            this.hiding = false;
                            $each(d, function(g, f) {
                                d[f] = g;
                            }, this);
                            this.element.style.cssText = this.cssText;
                            this.element.setStyle("display", "none");
                            if (a) {
                                a.setStyle("visibility", "visible");
                            }
                        }
                        this.fireEvent("hide", this.element);
                        this.callChain();
                    }.bind(this));
                    if (a) {
                        a.setStyle("visibility", "hidden");
                    }
                    this.start(b);
                } else {
                    this.callChain.delay(10, this);
                    this.fireEvent("complete", this.element);
                    this.fireEvent("hide", this.element);
                }
            } else {
                if (this.options.link == "chain") {
                    this.chain(this.dissolve.bind(this));
                } else {
                    if (this.options.link == "cancel"&&!this.hiding) {
                        this.cancel();
                        this.dissolve();
                    }
                }
            }
        } catch (c) {
            this.hiding = false;
            this.element.setStyle("display", "none");
            this.callChain.delay(10, this);
            this.fireEvent("complete", this.element);
            this.fireEvent("hide", this.element);
        }
        return this;
    },
    reveal: function() {
        try {
            if (!this.showing&&!this.hiding) {
                if (this.element.getStyle("display") == "none") {
                    this.showing = true;
                    this.hiding = this.hidden = false;
                    var d;
                    this.cssText = this.element.style.cssText;
                    this.element.measure(function() {
                        d = this.element.getComputedSize({
                            styles: this.options.styles,
                            mode: this.options.mode
                        });
                    }.bind(this));
                    $each(d, function(g, f) {
                        d[f] = g;
                    });
                    if ($chk(this.options.heightOverride)) {
                        d.height = this.options.heightOverride.toInt();
                    }
                    if ($chk(this.options.widthOverride)) {
                        d.width = this.options.widthOverride.toInt();
                    }
                    if (this.options.transitionOpacity) {
                        this.element.setStyle("opacity", 0);
                        d.opacity = this.options.opacity;
                    }
                    var b = {
                        height: 0,
                        display: $lambda(this.options.display).apply(this)
                    };
                    $each(d, function(g, f) {
                        b[f] = 0;
                    });
                    this.element.setStyles($merge(b, {
                        overflow: "hidden"
                    }));
                    var a = this.options.hideInputs ? this.element.getElements(this.options.hideInputs): null;
                    if (a) {
                        a.setStyle("visibility", "hidden");
                    }
                    this.start(d);
                    this.$chain.unshift(function() {
                        this.element.style.cssText = this.cssText;
                        this.element.setStyle("display", $lambda(this.options.display).apply(this));
                        if (!this.hidden) {
                            this.showing = false;
                        }
                        if (a) {
                            a.setStyle("visibility", "visible");
                        }
                        this.callChain();
                        this.fireEvent("show", this.element);
                    }.bind(this));
                } else {
                    this.callChain();
                    this.fireEvent("complete", this.element);
                    this.fireEvent("show", this.element);
                }
            } else {
                if (this.options.link == "chain") {
                    this.chain(this.reveal.bind(this));
                } else {
                    if (this.options.link == "cancel"&&!this.showing) {
                        this.cancel();
                        this.reveal();
                    }
                }
            }
        } catch (c) {
            this.element.setStyles({
                display: $lambda(this.options.display).apply(this),
                visiblity: "visible",
                opacity: this.options.opacity
            });
            this.showing = false;
            this.callChain.delay(10, this);
            this.fireEvent("complete", this.element);
            this.fireEvent("show", this.element);
        }
        return this;
    },
    toggle: function() {
        if (this.element.getStyle("display") == "none") {
            this.reveal();
        } else {
            this.dissolve();
        }
        return this;
    },
    cancel: function() {
        this.parent.apply(this, arguments);
        this.element.style.cssText = this.cssText;
        this.hiding = false;
        this.showing = false;
        return this;
    }
});
Element.Properties.reveal = {
    set: function(a) {
        var b = this.retrieve("reveal");
        if (b) {
            b.cancel();
        }
        return this.eliminate("reveal").store("reveal:options", a);
    },
    get: function(a) {
        if (a ||!this.retrieve("reveal")) {
            if (a ||!this.retrieve("reveal:options")) {
                this.set("reveal", a);
            }
            this.store("reveal", new Fx.Reveal(this, this.retrieve("reveal:options")));
        }
        return this.retrieve("reveal");
    }
};
Element.Properties.dissolve = Element.Properties.reveal;
Element.implement({
    reveal: function(a) {
        this.get("reveal", a).reveal();
        return this;
    },
    dissolve: function(a) {
        this.get("reveal", a).dissolve();
        return this;
    },
    nix: function() {
        var a = Array.link(arguments, {
            destroy: Boolean.type,
            options: Object.type
        });
        this.get("reveal", a.options).dissolve().chain(function() {
            this[a.destroy ? "destroy": "dispose"]();
        }.bind(this));
        return this;
    },
    wink: function() {
        var b = Array.link(arguments, {
            duration: Number.type,
            options: Object.type
        });
        var a = this.get("reveal", b.options);
        a.reveal().chain(function() {
            (function() {
                a.dissolve();
            }).delay(b.duration || 2000);
        });
    }
});
Fx.Scroll = new Class({
    Extends: Fx,
    options: {
        offset: {
            x: 0,
            y: 0
        },
        wheelStops: true
    },
    initialize: function(b, a) {
        this.element = this.subject = document.id(b);
        this.parent(a);
        var d = this.cancel.bind(this, false);
        if ($type(this.element) != "element") {
            this.element = document.id(this.element.getDocument().body);
        }
        var c = this.element;
        if (this.options.wheelStops) {
            this.addEvent("start", function() {
                c.addEvent("mousewheel", d);
            }, true);
            this.addEvent("complete", function() {
                c.removeEvent("mousewheel", d);
            }, true);
        }
    },
    set: function() {
        var a = Array.flatten(arguments);
        if (Browser.Engine.gecko) {
            a = [Math.round(a[0]), Math.round(a[1])];
        }
        this.element.scrollTo(a[0] + this.options.offset.x, a[1] + this.options.offset.y);
    },
    compute: function(c, b, a) {
        return [0, 1].map(function(d) {
            return Fx.compute(c[d], b[d], a);
        });
    },
    start: function(c, h) {
        if (!this.check(c, h)) {
            return this;
        }
        var f = this.element.getScrollSize(), b = this.element.getScroll(), d = {
            x: c,
            y: h
        };
        for (var g in d) {
            var a = f[g];
            if ($chk(d[g])) {
                d[g] = ($type(d[g]) == "number") ? d[g] : a;
            } else {
                d[g] = b[g];
            }
            d[g] += this.options.offset[g];
        }
        return this.parent([b.x, b.y], [d.x, d.y]);
    },
    toTop: function() {
        return this.start(false, 0);
    },
    toLeft: function() {
        return this.start(0, false);
    },
    toRight: function() {
        return this.start("right", false);
    },
    toBottom: function() {
        return this.start(false, "bottom");
    },
    toElement: function(b) {
        var a = document.id(b).getPosition(this.element);
        return this.start(a.x, a.y);
    },
    scrollIntoView: function(c, f, d) {
        f = f ? $splat(f) : ["x", "y"];
        var i = {};
        c = document.id(c);
        var g = c.getPosition(this.element);
        var j = c.getSize();
        var h = this.element.getScroll();
        var a = this.element.getSize();
        var b = {
            x: g.x + j.x,
            y: g.y + j.y
        };
        ["x", "y"].each(function(k) {
            if (f.contains(k)) {
                if (b[k] > h[k] + a[k]) {
                    i[k] = b[k] - a[k];
                }
                if (g[k] < h[k]) {
                    i[k] = g[k];
                }
            }
            if (i[k] == null) {
                i[k] = h[k];
            }
            if (d && d[k]) {
                i[k] = i[k] + d[k];
            }
        }, this);
        if (i.x != h.x || i.y != h.y) {
            this.start(i.x, i.y);
        }
        return this;
    },
    scrollToCenter: function(c, f, d) {
        f = f ? $splat(f) : ["x", "y"];
        c = $(c);
        var i = {}, g = c.getPosition(this.element), j = c.getSize(), h = this.element.getScroll(), a = this.element.getSize(), b = {
            x: g.x + j.x,
            y: g.y + j.y
        };
        ["x", "y"].each(function(k) {
            if (f.contains(k)) {
                i[k] = g[k] - (a[k] - j[k]) / 2;
            }
            if (i[k] == null) {
                i[k] = h[k];
            }
            if (d && d[k]) {
                i[k] = i[k] + d[k];
            }
        }, this);
        if (i.x != h.x || i.y != h.y) {
            this.start(i.x, i.y);
        }
        return this;
    }
});
Fx.Slide = new Class({
    Extends: Fx,
    options: {
        mode: "vertical",
        wrapper: false,
        hideOverflow: true,
        resetHeight: false
    },
    initialize: function(b, a) {
        this.addEvent("complete", function() {
            this.open = (this.wrapper["offset" + this.layout.capitalize()] != 0);
            if (this.open && this.options.resetHeight) {
                this.wrapper.setStyle("height", "");
            }
            if (this.open && Browser.Engine.webkit419) {
                this.element.dispose().inject(this.wrapper);
            }
        }, true);
        this.element = this.subject = document.id(b);
        this.parent(a);
        var d = this.element.retrieve("wrapper");
        var c = this.element.getStyles("margin", "position", "overflow");
        if (this.options.hideOverflow) {
            c = $extend(c, {
                overflow: "hidden"
            });
        }
        if (this.options.wrapper) {
            d = document.id(this.options.wrapper).setStyles(c);
        }
        this.wrapper = d || new Element("div", {
            styles: c
        }).wraps(this.element);
        this.element.store("wrapper", this.wrapper).setStyle("margin", 0);
        this.now = [];
        this.open = true;
    },
    vertical: function() {
        this.margin = "margin-top";
        this.layout = "height";
        this.offset = this.element.offsetHeight;
    },
    horizontal: function() {
        this.margin = "margin-left";
        this.layout = "width";
        this.offset = this.element.offsetWidth;
    },
    set: function(a) {
        this.element.setStyle(this.margin, a[0]);
        this.wrapper.setStyle(this.layout, a[1]);
        return this;
    },
    compute: function(c, b, a) {
        return [0, 1].map(function(d) {
            return Fx.compute(c[d], b[d], a);
        });
    },
    start: function(b, f) {
        if (!this.check(b, f)) {
            return this;
        }
        this[f || this.options.mode]();
        var d = this.element.getStyle(this.margin).toInt();
        var c = this.wrapper.getStyle(this.layout).toInt();
        var a = [[d, c], [0, this.offset]];
        var h = [[d, c], [ - this.offset, 0]];
        var g;
        switch (b) {
        case"in":
            g = a;
            break;
        case"out":
            g = h;
            break;
        case"toggle":
            g = (c == 0) ? a : h;
        }
        return this.parent(g[0], g[1]);
    },
    slideIn: function(a) {
        return this.start("in", a);
    },
    slideOut: function(a) {
        return this.start("out", a);
    },
    hide: function(a) {
        this[a || this.options.mode]();
        this.open = false;
        return this.set([ - this.offset, 0]);
    },
    show: function(a) {
        this[a || this.options.mode]();
        this.open = true;
        return this.set([0, this.offset]);
    },
    toggle: function(a) {
        return this.start("toggle", a);
    }
});
Element.Properties.slide = {
    set: function(b) {
        var a = this.retrieve("slide");
        if (a) {
            a.cancel();
        }
        return this.eliminate("slide").store("slide:options", $extend({
            link: "cancel"
        }, b));
    },
    get: function(a) {
        if (a ||!this.retrieve("slide")) {
            if (a ||!this.retrieve("slide:options")) {
                this.set("slide", a);
            }
            this.store("slide", new Fx.Slide(this, this.retrieve("slide:options")));
        }
        return this.retrieve("slide");
    }
};
Element.implement({
    slide: function(d, f) {
        d = d || "toggle";
        var b = this.get("slide"), a;
        switch (d) {
        case"hide":
            b.hide(f);
            break;
        case"show":
            b.show(f);
            break;
        case"toggle":
            var c = this.retrieve("slide:flag", b.open);
            b[c ? "slideOut": "slideIn"](f);
            this.store("slide:flag", !c);
            a = true;
            break;
        default:
            b.start(d, f);
        }
        if (!a) {
            this.eliminate("slide:flag");
        }
        return this;
    }
});
var SmoothScroll = Fx.SmoothScroll = new Class({
    Extends: Fx.Scroll,
    initialize: function(b, c) {
        c = c || document;
        this.doc = c.getDocument();
        var d = c.getWindow();
        this.parent(this.doc, b);
        this.links = $$(this.options.links || this.doc.links);
        var a = d.location.href.match(/^[^#]*/)[0] + "#";
        this.links.each(function(g) {
            if (g.href.indexOf(a) != 0) {
                return;
            }
            var f = g.href.substr(a.length);
            if (f) {
                this.useLink(g, f);
            }
        }, this);
        if (!Browser.Engine.webkit419) {
            this.addEvent("complete", function() {
                d.location.hash = this.anchor;
            }, true);
        }
    },
    useLink: function(c, a) {
        var b;
        c.addEvent("click", function(d) {
            if (b !== false&&!b) {
                b = document.id(a) || this.doc.getElement("a[name=" + a + "]");
            }
            if (b) {
                d.preventDefault();
                this.anchor = a;
                this.toElement(b).chain(function() {
                    this.fireEvent("scrolledTo", [c, b]);
                }.bind(this));
                c.blur();
            }
        }.bind(this));
    }
});
Fx.Sort = new Class({
    Extends: Fx.Elements,
    options: {
        mode: "vertical"
    },
    initialize: function(b, a) {
        this.parent(b, a);
        this.elements.each(function(c) {
            if (c.getStyle("position") == "static") {
                c.setStyle("position", "relative");
            }
        });
        this.setDefaultOrder();
    },
    setDefaultOrder: function() {
        this.currentOrder = this.elements.map(function(b, a) {
            return a;
        });
    },
    sort: function(f) {
        if ($type(f) != "array") {
            return false;
        }
        var j = 0, a = 0, c = {}, i = {}, d = this.options.mode == "vertical";
        var g = this.elements.map(function(n, l) {
            var m = n.getComputedSize({
                styles: ["border", "padding", "margin"]
            });
            var o;
            if (d) {
                o = {
                    top: j,
                    margin: m["margin-top"],
                    height: m.totalHeight
                };
                j += o.height - m["margin-top"];
            } else {
                o = {
                    left: a,
                    margin: m["margin-left"],
                    width: m.totalWidth
                };
                a += o.width;
            }
            var k = d ? "top": "left";
            i[l] = {};
            var p = n.getStyle(k).toInt();
            i[l][k] = p || 0;
            return o;
        }, this);
        this.set(i);
        f = f.map(function(k) {
            return k.toInt();
        });
        if (f.length != this.elements.length) {
            this.currentOrder.each(function(k) {
                if (!f.contains(k)) {
                    f.push(k);
                }
            });
            if (f.length > this.elements.length) {
                f.splice(this.elements.length - 1, f.length - this.elements.length);
            }
        }
        var b = j = a = 0;
        f.each(function(m, k) {
            var l = {};
            if (d) {
                l.top = j - g[m].top - b;
                j += g[m].height;
            } else {
                l.left = a - g[m].left;
                a += g[m].width;
            }
            b = b + g[m].margin;
            c[m] = l;
        }, this);
        var h = {};
        $A(f).sort().each(function(k) {
            h[k] = c[k];
        });
        this.start(h);
        this.currentOrder = f;
        return this;
    },
    rearrangeDOM: function(a) {
        a = a || this.currentOrder;
        var b = this.elements[0].getParent();
        var c = [];
        this.elements.setStyle("opacity", 0);
        a.each(function(d) {
            c.push(this.elements[d].inject(b).setStyles({
                top: 0,
                left: 0
            }));
        }, this);
        this.elements.setStyle("opacity", 1);
        this.elements = $$(c);
        this.setDefaultOrder();
        return this;
    },
    getDefaultOrder: function() {
        return this.elements.map(function(b, a) {
            return a;
        });
    },
    forward: function() {
        return this.sort(this.getDefaultOrder());
    },
    backward: function() {
        return this.sort(this.getDefaultOrder().reverse());
    },
    reverse: function() {
        return this.sort(this.currentOrder.reverse());
    },
    sortByElements: function(a) {
        return this.sort(a.map(function(b) {
            return this.elements.indexOf(b);
        }, this));
    },
    swap: function(c, b) {
        if ($type(c) == "element") {
            c = this.elements.indexOf(c);
        }
        if ($type(b) == "element") {
            b = this.elements.indexOf(b);
        }
        var a = $A(this.currentOrder);
        a[this.currentOrder.indexOf(c)] = b;
        a[this.currentOrder.indexOf(b)] = c;
        return this.sort(a);
    }
});
var Drag = new Class({
    Implements: [Events, Options],
    options: {
        snap: 6,
        unit: "px",
        grid: false,
        style: true,
        limit: false,
        handle: false,
        invert: false,
        preventDefault: false,
        stopPropagation: false,
        modifiers: {
            x: "left",
            y: "top"
        }
    },
    initialize: function() {
        var b = Array.link(arguments, {
            options: Object.type,
            element: $defined
        });
        this.element = document.id(b.element);
        this.document = this.element.getDocument();
        this.setOptions(b.options || {});
        var a = $type(this.options.handle);
        this.handles = ((a == "array" || a == "collection") ? $$(this.options.handle) : document.id(this.options.handle)) || this.element;
        this.mouse = {
            now: {},
            pos: {}
        };
        this.value = {
            start: {},
            now: {}
        };
        this.selection = (Browser.Engine.trident) ? "selectstart" : "mousedown";
        this.bound = {
            start: this.start.bind(this),
            check: this.check.bind(this),
            drag: this.drag.bind(this),
            stop: this.stop.bind(this),
            cancel: this.cancel.bind(this),
            eventStop: $lambda(false)
        };
        this.attach();
    },
    attach: function() {
        this.handles.addEvent("mousedown", this.bound.start);
        return this;
    },
    detach: function() {
        this.handles.removeEvent("mousedown", this.bound.start);
        return this;
    },
    start: function(f) {
        if (f.rightClick) {
            return;
        }
        if (this.options.preventDefault) {
            f.preventDefault();
        }
        if (this.options.stopPropagation) {
            f.stopPropagation();
        }
        this.mouse.start = f.page;
        this.fireEvent("beforeStart", this.element);
        var a = this.options.limit;
        this.limit = {
            x: [],
            y: []
        };
        var d = this.element.getStyles("left", "right", "top", "bottom");
        this._invert = {
            x: this.options.modifiers.x == "left" && d.left == "auto"&&!isNaN(d.right.toInt()) && (this.options.modifiers.x = "right"),
            y: this.options.modifiers.y == "top" && d.top == "auto"&&!isNaN(d.bottom.toInt()) && (this.options.modifiers.y = "bottom")
        };
        var h, g;
        for (h in this.options.modifiers) {
            if (!this.options.modifiers[h]) {
                continue;
            }
            var c = this.element.getStyle(this.options.modifiers[h]);
            if (c&&!c.match(/px$/)) {
                if (!g) {
                    g = this.element.getCoordinates(this.element.getOffsetParent());
                }
                c = g[this.options.modifiers[h]];
            }
            if (this.options.style) {
                this.value.now[h] = (c || 0).toInt();
            } else {
                this.value.now[h] = this.element[this.options.modifiers[h]];
            }
            if (this.options.invert) {
                this.value.now[h]*=-1;
            }
            if (this._invert[h]) {
                this.value.now[h]*=-1;
            }
            this.mouse.pos[h] = f.page[h] - this.value.now[h];
            if (a && a[h]) {
                for (var b = 2;
                b--; b) {
                    if ($chk(a[h][b])) {
                        this.limit[h][b] = $lambda(a[h][b])();
                    }
                }
            }
        }
        if ($type(this.options.grid) == "number") {
            this.options.grid = {
                x: this.options.grid,
                y: this.options.grid
            };
        }
        this.document.addEvents({
            mousemove: this.bound.check,
            mouseup: this.bound.cancel
        });
        this.document.addEvent(this.selection, this.bound.eventStop);
    },
    check: function(a) {
        if (this.options.preventDefault) {
            a.preventDefault();
        }
        var b = Math.round(Math.sqrt(Math.pow(a.page.x - this.mouse.start.x, 2) + Math.pow(a.page.y - this.mouse.start.y, 2)));
        if (b > this.options.snap) {
            this.cancel();
            this.document.addEvents({
                mousemove: this.bound.drag,
                mouseup: this.bound.stop
            });
            this.fireEvent("start", [this.element, a]).fireEvent("snap", this.element);
        }
    },
    drag: function(a) {
        if (this.options.preventDefault) {
            a.preventDefault();
        }
        this.mouse.now = a.page;
        for (var b in this.options.modifiers) {
            if (!this.options.modifiers[b]) {
                continue;
            }
            this.value.now[b] = this.mouse.now[b] - this.mouse.pos[b];
            if (this.options.invert) {
                this.value.now[b]*=-1;
            }
            if (this._invert[b]) {
                this.value.now[b]*=-1;
            }
            if (this.options.limit && this.limit[b]) {
                if ($chk(this.limit[b][1]) && (this.value.now[b] > this.limit[b][1])) {
                    this.value.now[b] = this.limit[b][1];
                } else {
                    if ($chk(this.limit[b][0]) && (this.value.now[b] < this.limit[b][0])) {
                        this.value.now[b] = this.limit[b][0];
                    }
                }
            }
            if (this.options.grid[b]) {
                this.value.now[b] -= ((this.value.now[b] - (this.limit[b][0] || 0))%this.options.grid[b]);
            }
            if (this.options.style) {
                this.element.setStyle(this.options.modifiers[b], this.value.now[b] + this.options.unit);
            } else {
                this.element[this.options.modifiers[b]] = this.value.now[b];
            }
        }
        this.fireEvent("drag", [this.element, a]);
    },
    cancel: function(a) {
        this.document.removeEvent("mousemove", this.bound.check);
        this.document.removeEvent("mouseup", this.bound.cancel);
        if (a) {
            this.document.removeEvent(this.selection, this.bound.eventStop);
            this.fireEvent("cancel", this.element);
        }
    },
    stop: function(a) {
        this.document.removeEvent(this.selection, this.bound.eventStop);
        this.document.removeEvent("mousemove", this.bound.drag);
        this.document.removeEvent("mouseup", this.bound.stop);
        if (a) {
            this.fireEvent("complete", [this.element, a]);
        }
    }
});
Element.implement({
    makeResizable: function(a) {
        var b = new Drag(this, $merge({
            modifiers: {
                x: "width",
                y: "height"
            }
        }, a));
        this.store("resizer", b);
        return b.addEvent("drag", function() {
            this.fireEvent("resize", b);
        }.bind(this));
    }
});
Drag.Move = new Class({
    Extends: Drag,
    options: {
        droppables: [],
        container: false,
        precalculate: false,
        includeMargins: true,
        checkDroppables: true
    },
    initialize: function(b, a) {
        this.parent(b, a);
        b = this.element;
        this.droppables = $$(this.options.droppables);
        this.container = document.id(this.options.container);
        if (this.container && $type(this.container) != "element") {
            this.container = document.id(this.container.getDocument().body);
        }
        if (this.options.style) {
            if (this.options.modifiers.x == "left" && this.options.modifiers.y == "top") {
                var g, c = document.id(b.getOffsetParent());
                if (c) {
                    g = c.getStyles("border-top-width", "border-left-width");
                }
                var d = b.getStyles("left", "top");
                if (c && (d.left == "auto" || d.top == "auto")) {
                    var f = b.getPosition(c);
                    f.x = f.x - (g["border-left-width"] ? g["border-left-width"].toInt() : 0);
                    f.y = f.y - (g["border-top-width"] ? g["border-top-width"].toInt() : 0);
                    b.setPosition(f);
                }
            }
            if (b.getStyle("position") == "static") {
                b.setStyle("position", "absolute");
            }
        }
        this.addEvent("start", this.checkDroppables, true);
        this.overed = null;
    },
    start: function(a) {
        if (this.container) {
            this.options.limit = this.calculateLimit();
        }
        if (this.options.precalculate) {
            this.positions = this.droppables.map(function(b) {
                return b.getCoordinates();
            });
        }
        this.parent(a);
    },
    calculateLimit: function() {
        var d = document.id(this.element.getOffsetParent()) || document.body, i = this.container.getCoordinates(d), h = {}, c = {}, b = {}, k = {}, g = {}, m = {};
        ["top", "right", "bottom", "left"].each(function(q) {
            h[q] = this.container.getStyle("border-" + q).toInt();
            b[q] = this.element.getStyle("border-" + q).toInt();
            c[q] = this.element.getStyle("margin-" + q).toInt();
            k[q] = this.container.getStyle("margin-" + q).toInt();
            m[q] = d.getStyle("padding-" + q).toInt();
            g[q] = d.getStyle("border-" + q).toInt();
        }, this);
        var f = this.element.offsetWidth + c.left + c.right, p = this.element.offsetHeight + c.top + c.bottom, j = 0, l = 0, o = i.right - h.right - f, a = i.bottom - h.bottom - p;
        if (this.options.includeMargins) {
            j += c.left;
            l += c.top;
        } else {
            o += c.right;
            a += c.bottom;
        }
        if (this.element.getStyle("position") == "relative") {
            var n = this.element.getCoordinates(d);
            n.left -= this.element.getStyle("left").toInt();
            n.top -= this.element.getStyle("top").toInt();
            j += h.left - n.left;
            l += h.top - n.top;
            o += c.left - n.left;
            a += c.top - n.top;
            if (this.container != d) {
                j += k.left + m.left;
                l += (Browser.Engine.trident4 ? 0 : k.top) + m.top;
            }
        } else {
            j -= c.left;
            l -= c.top;
            if (this.container == d) {
                o -= h.left;
                a -= h.top;
            } else {
                j += i.left + h.left - g.left;
                l += i.top + h.top - g.top;
                o -= g.left;
                a -= g.top;
            }
        }
        return {
            x: [j, o],
            y: [l, a]
        };
    },
    checkAgainst: function(c, b) {
        c = (this.positions) ? this.positions[b] : c.getCoordinates();
        var a = this.mouse.now;
        return (a.x > c.left && a.x < c.right && a.y < c.bottom && a.y > c.top);
    },
    checkDroppables: function() {
        var a = this.droppables.filter(this.checkAgainst, this).getLast();
        if (this.overed != a) {
            if (this.overed) {
                this.fireEvent("leave", [this.element, this.overed]);
            }
            if (a) {
                this.fireEvent("enter", [this.element, a]);
            }
            this.overed = a;
        }
    },
    drag: function(a) {
        this.parent(a);
        if (this.options.checkDroppables && this.droppables.length) {
            this.checkDroppables();
        }
    },
    stop: function(a) {
        this.checkDroppables();
        this.fireEvent("drop", [this.element, this.overed, a]);
        this.overed = null;
        return this.parent(a);
    }
});
Element.implement({
    makeDraggable: function(a) {
        var b = new Drag.Move(this, a);
        this.store("dragger", b);
        return b;
    }
});
var Slider = new Class({
    Implements: [Events, Options],
    Binds: ["clickedElement", "draggedKnob", "scrolledElement"],
    options: {
        onTick: function(a) {
            if (this.options.snap) {
                a = this.toPosition(this.step);
            }
            this.knob.setStyle(this.property, a);
        },
        initialStep: 0,
        snap: false,
        offset: 0,
        range: false,
        wheel: false,
        steps: 100,
        mode: "horizontal"
    },
    initialize: function(g, a, f) {
        this.setOptions(f);
        this.element = document.id(g);
        this.knob = document.id(a);
        this.previousChange = this.previousEnd = this.step =- 1;
        var h, b = {}, d = {
            x: false,
            y: false
        };
        switch (this.options.mode) {
        case"vertical":
            this.axis = "y";
            this.property = "top";
            h = "offsetHeight";
            break;
        case"horizontal":
            this.axis = "x";
            this.property = "left";
            h = "offsetWidth";
        }
        this.full = this.element.measure(function() {
            this.half = this.knob[h] / 2;
            return this.element[h] - this.knob[h] + (this.options.offset * 2);
        }.bind(this));
        this.setRange(this.options.range);
        this.knob.setStyle("position", "relative").setStyle(this.property, - this.options.offset);
        d[this.axis] = this.property;
        b[this.axis] = [ - this.options.offset, this.full - this.options.offset];
        var c = {
            snap: 0,
            limit: b,
            modifiers: d,
            onDrag: this.draggedKnob,
            onStart: this.draggedKnob,
            onBeforeStart: (function() {
                this.isDragging = true;
            }).bind(this),
            onCancel: function() {
                this.isDragging = false;
            }.bind(this),
            onComplete: function() {
                this.isDragging = false;
                this.draggedKnob();
                this.end();
            }.bind(this)
        };
        if (this.options.snap) {
            c.grid = Math.ceil(this.stepWidth);
            c.limit[this.axis][1] = this.full;
        }
        this.drag = new Drag(this.knob, c);
        this.attach();
        if (this.options.initialStep != null) {
            this.set(this.options.initialStep);
        }
    },
    attach: function() {
        this.element.addEvent("mousedown", this.clickedElement);
        if (this.options.wheel) {
            this.element.addEvent("mousewheel", this.scrolledElement);
        }
        this.drag.attach();
        return this;
    },
    detach: function() {
        this.element.removeEvent("mousedown", this.clickedElement);
        this.element.removeEvent("mousewheel", this.scrolledElement);
        this.drag.detach();
        return this;
    },
    set: function(a) {
        if (!((this.range > 0)^(a < this.min))) {
            a = this.min;
        }
        if (!((this.range > 0)^(a > this.max))) {
            a = this.max;
        }
        this.step = Math.round(a);
        this.checkStep();
        this.fireEvent("tick", this.toPosition(this.step));
        this.end();
        return this;
    },
    setRange: function(a, b) {
        this.min = $pick(a[0], 0);
        this.max = $pick(a[1], this.options.steps);
        this.range = this.max - this.min;
        this.steps = this.options.steps || this.full;
        this.stepSize = Math.abs(this.range) / this.steps;
        this.stepWidth = this.stepSize * this.full / Math.abs(this.range);
        this.set($pick(b, this.step).floor(this.min).max(this.max));
        return this;
    },
    clickedElement: function(c) {
        if (this.isDragging || c.target == this.knob) {
            return;
        }
        var b = this.range < 0?-1 : 1;
        var a = c.page[this.axis] - this.element.getPosition()[this.axis] - this.half;
        a = a.limit( - this.options.offset, this.full - this.options.offset);
        this.step = Math.round(this.min + b * this.toStep(a));
        this.checkStep();
        this.fireEvent("tick", a);
        this.end();
    },
    scrolledElement: function(a) {
        var b = (this.options.mode == "horizontal") ? (a.wheel < 0): (a.wheel > 0);
        this.set(b ? this.step - this.stepSize : this.step + this.stepSize);
        a.stop();
    },
    draggedKnob: function() {
        var b = this.range < 0?-1 : 1;
        var a = this.drag.value.now[this.axis];
        a = a.limit( - this.options.offset, this.full - this.options.offset);
        this.step = Math.round(this.min + b * this.toStep(a));
        this.checkStep();
    },
    checkStep: function() {
        if (this.previousChange != this.step) {
            this.previousChange = this.step;
            this.fireEvent("change", this.step);
        }
    },
    end: function() {
        if (this.previousEnd !== this.step) {
            this.previousEnd = this.step;
            this.fireEvent("complete", this.step + "");
        }
    },
    toStep: function(a) {
        var b = (a + this.options.offset) * this.stepSize / this.full * this.steps;
        return this.options.steps ? Math.round(b -= b%this.stepSize) : b;
    },
    toPosition: function(a) {
        return (this.full * Math.abs(this.min - a)) / (this.steps * this.stepSize) - this.options.offset;
    }
});
var Sortables = new Class({
    Implements: [Events, Options],
    options: {
        snap: 4,
        opacity: 1,
        clone: false,
        revert: false,
        handle: false,
        constrain: false,
        preventDefault: false
    },
    initialize: function(a, b) {
        this.setOptions(b);
        this.elements = [];
        this.lists = [];
        this.idle = true;
        this.addLists($$(document.id(a) || a));
        if (!this.options.clone) {
            this.options.revert = false;
        }
        if (this.options.revert) {
            this.effect = new Fx.Morph(null, $merge({
                duration: 250,
                link: "cancel"
            }, this.options.revert));
        }
    },
    attach: function() {
        this.addLists(this.lists);
        return this;
    },
    detach: function() {
        this.lists = this.removeLists(this.lists);
        return this;
    },
    addItems: function() {
        Array.flatten(arguments).each(function(a) {
            this.elements.push(a);
            var b = a.retrieve("sortables:start", this.start.bindWithEvent(this, a));
            (this.options.handle ? a.getElement(this.options.handle) || a : a).addEvent("mousedown", b);
        }, this);
        return this;
    },
    addLists: function() {
        Array.flatten(arguments).each(function(a) {
            this.lists.push(a);
            this.addItems(a.getChildren());
        }, this);
        return this;
    },
    removeItems: function() {
        return $$(Array.flatten(arguments).map(function(a) {
            this.elements.erase(a);
            var b = a.retrieve("sortables:start");
            (this.options.handle ? a.getElement(this.options.handle) || a : a).removeEvent("mousedown", b);
            return a;
        }, this));
    },
    removeLists: function() {
        return $$(Array.flatten(arguments).map(function(a) {
            this.lists.erase(a);
            this.removeItems(a.getChildren());
            return a;
        }, this));
    },
    getClone: function(b, a) {
        if (!this.options.clone) {
            return new Element(a.tagName).inject(document.body);
        }
        if ($type(this.options.clone) == "function") {
            return this.options.clone.call(this, b, a, this.list);
        }
        var c = a.clone(true).setStyles({
            margin: "0px",
            position: "absolute",
            visibility: "hidden",
            width: a.getStyle("width")
        });
        if (c.get("html").test("radio")) {
            c.getElements("input[type=radio]").each(function(d, f) {
                d.set("name", "clone_" + f);
                if (d.get("checked")) {
                    a.getElements("input[type=radio]")[f].set("checked", true);
                }
            });
        }
        return c.inject(this.list).setPosition(a.getPosition(a.getOffsetParent()));
    },
    getDroppables: function() {
        var a = this.list.getChildren();
        if (!this.options.constrain) {
            a = this.lists.concat(a).erase(this.list);
        }
        return a.erase(this.clone).erase(this.element);
    },
    insert: function(c, b) {
        var a = "inside";
        if (this.lists.contains(b)) {
            this.list = b;
            this.drag.droppables = this.getDroppables();
        } else {
            a = this.element.getAllPrevious().contains(b) ? "before" : "after";
        }
        this.element.inject(b, a);
        this.fireEvent("sort", [this.element, this.clone]);
    },
    start: function(b, a) {
        if (!this.idle || b.rightClick || ["button", "input"].contains(document.id(b.target).get("tag"))) {
            return;
        }
        this.idle = false;
        this.element = a;
        this.opacity = a.get("opacity");
        this.list = a.getParent();
        this.clone = this.getClone(b, a);
        this.drag = new Drag.Move(this.clone, {
            preventDefault: this.options.preventDefault,
            snap: this.options.snap,
            container: this.options.constrain && this.element.getParent(),
            droppables: this.getDroppables(),
            onSnap: function() {
                b.stop();
                this.clone.setStyle("visibility", "visible");
                this.element.set("opacity", this.options.opacity || 0);
                this.fireEvent("start", [this.element, this.clone]);
            }.bind(this),
            onEnter: this.insert.bind(this),
            onCancel: this.reset.bind(this),
            onComplete: this.end.bind(this)
        });
        this.clone.inject(this.element, "before");
        this.drag.start(b);
    },
    end: function() {
        this.drag.detach();
        this.element.set("opacity", this.opacity);
        if (this.effect) {
            var a = this.element.getStyles("width", "height");
            var b = this.clone.computePosition(this.element.getPosition(this.clone.getOffsetParent()));
            this.effect.element = this.clone;
            this.effect.start({
                top: b.top,
                left: b.left,
                width: a.width,
                height: a.height,
                opacity: 0.25
            }).chain(this.reset.bind(this));
        } else {
            this.reset();
        }
    },
    reset: function() {
        this.idle = true;
        this.clone.destroy();
        this.fireEvent("complete", this.element);
    },
    serialize: function() {
        var c = Array.link(arguments, {
            modifier: Function.type,
            index: $defined
        });
        var b = this.lists.map(function(d) {
            return d.getChildren().map(c.modifier || function(f) {
                return f.get("id");
            }, this);
        }, this);
        var a = c.index;
        if (this.lists.length == 1) {
            a = 0;
        }
        return $chk(a) && a >= 0 && a < this.lists.length ? b[a] : b;
    }
});
Request.JSONP = new Class({
    Implements: [Chain, Events, Options, Log],
    options: {
        url: "",
        data: {},
        retries: 0,
        timeout: 0,
        link: "ignore",
        callbackKey: "callback",
        injectScript: document.head
    },
    initialize: function(a) {
        this.setOptions(a);
        if (this.options.log) {
            this.enableLog();
        }
        this.running = false;
        this.requests = 0;
        this.triesRemaining = [];
    },
    check: function() {
        if (!this.running) {
            return true;
        }
        switch (this.options.link) {
        case"cancel":
            this.cancel();
            return true;
        case"chain":
            this.chain(this.caller.bind(this, arguments));
            return false;
        }
        return false;
    },
    send: function(c) {
        if (!$chk(arguments[1])&&!this.check(c)) {
            return this;
        }
        var f = $type(c), a = this.options, b = $chk(arguments[1]) ? arguments[1]: this.requests++;
        if (f == "string" || f == "element") {
            c = {
                data: c
            };
        }
        c = $extend({
            data: a.data,
            url: a.url
        }, c);
        if (!$chk(this.triesRemaining[b])) {
            this.triesRemaining[b] = this.options.retries;
        }
        var d = this.triesRemaining[b];
        (function() {
            var g = this.getScript(c);
            this.log("JSONP retrieving script with url: " + g.get("src"));
            this.fireEvent("request", g);
            this.running = true;
            (function() {
                if (d) {
                    this.triesRemaining[b] = d - 1;
                    if (g) {
                        g.destroy();
                        this.send(c, b).fireEvent("retry", this.triesRemaining[b]);
                    }
                } else {
                    if (this.running && g && this.options.timeout) {
                        g.destroy();
                        this.cancel().fireEvent("failure");
                    }
                }
            }).delay(this.options.timeout, this);
        }).delay(Browser.Engine.trident ? 50 : 0, this);
        return this;
    },
    cancel: function() {
        if (!this.running) {
            return this;
        }
        this.running = false;
        this.fireEvent("cancel");
        return this;
    },
    getScript: function(c) {
        var b = Request.JSONP.counter, d;
        Request.JSONP.counter++;
        switch ($type(c.data)) {
        case"element":
            d = document.id(c.data).toQueryString();
            break;
        case"object":
        case"hash":
            d = Hash.toQueryString(c.data);
        }
        var f = c.url + (c.url.test("\\?") ? "&" : "?") + (c.callbackKey || this.options.callbackKey) + "=Request.JSONP.request_map.request_" + b + (d ? "&" + d : "");
        if (f.length > 2083) {
            this.log("JSONP " + f + " will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs");
        }
        var a = new Element("script", {
            type: "text/javascript",
            src: f
        });
        Request.JSONP.request_map["request_" + b] = function() {
            this.success(arguments, a);
        }.bind(this);
        return a.inject(this.options.injectScript);
    },
    success: function(b, a) {
        if (!this.running) {
            return false;
        }
        if (a) {
            a.destroy();
        }
        this.running = false;
        this.log("JSONP successfully retrieved: ", b);
        this.fireEvent("complete", b).fireEvent("success", b).callChain();
    }
});
Request.JSONP.counter = 0;
Request.JSONP.request_map = {};
Request.Queue = new Class({
    Implements: [Options, Events],
    Binds: ["attach", "request", "complete", "cancel", "success", "failure", "exception"],
    options: {
        stopOnFailure: true,
        autoAdvance: true,
        concurrent: 1,
        requests: {}
    },
    initialize: function(a) {
        if (a) {
            var b = a.requests;
            delete a.requests;
        }
        this.setOptions(a);
        this.requests = new Hash;
        this.queue = [];
        this.reqBinders = {};
        if (b) {
            this.addRequests(b);
        }
    },
    addRequest: function(a, b) {
        this.requests.set(a, b);
        this.attach(a, b);
        return this;
    },
    addRequests: function(a) {
        $each(a, function(c, b) {
            this.addRequest(b, c);
        }, this);
        return this;
    },
    getName: function(a) {
        return this.requests.keyOf(a);
    },
    attach: function(a, b) {
        if (b._groupSend) {
            return this;
        }
        ["request", "complete", "cancel", "success", "failure", "exception"].each(function(c) {
            if (!this.reqBinders[a]) {
                this.reqBinders[a] = {};
            }
            this.reqBinders[a][c] = function() {
                this["on" + c.capitalize()].apply(this, [a, b].extend(arguments));
            }.bind(this);
            b.addEvent(c, this.reqBinders[a][c]);
        }, this);
        b._groupSend = b.send;
        b.send = function(c) {
            this.send(a, c);
            return b;
        }.bind(this);
        return this;
    },
    removeRequest: function(b) {
        var a = $type(b) == "object" ? this.getName(b): b;
        if (!a && $type(a) != "string") {
            return this;
        }
        b = this.requests.get(a);
        if (!b) {
            return this;
        }
        ["request", "complete", "cancel", "success", "failure", "exception"].each(function(c) {
            b.removeEvent(c, this.reqBinders[a][c]);
        }, this);
        b.send = b._groupSend;
        delete b._groupSend;
        return this;
    },
    getRunning: function() {
        return this.requests.filter(function(a) {
            return a.running;
        });
    },
    isRunning: function() {
        return !!(this.getRunning().getKeys().length);
    },
    send: function(b, a) {
        var c = function() {
            this.requests.get(b)._groupSend(a);
            this.queue.erase(c);
        }.bind(this);
        c.name = b;
        if (this.getRunning().getKeys().length >= this.options.concurrent || (this.error && this.options.stopOnFailure)) {
            this.queue.push(c);
        } else {
            c();
        }
        return this;
    },
    hasNext: function(a) {
        return (!a)?!!this.queue.length : !!this.queue.filter(function(b) {
            return b.name == a;
        }).length;
    },
    resume: function() {
        this.error = false;
        (this.options.concurrent - this.getRunning().getKeys().length).times(this.runNext, this);
        return this;
    },
    runNext: function(a) {
        if (!this.queue.length) {
            return this;
        }
        if (!a) {
            this.queue[0]();
        } else {
            var b;
            this.queue.each(function(c) {
                if (!b && c.name == a) {
                    b = true;
                    c();
                }
            });
        }
        return this;
    },
    runAll: function() {
        this.queue.each(function(a) {
            a();
        });
        return this;
    },
    clear: function(a) {
        if (!a) {
            this.queue.empty();
        } else {
            this.queue = this.queue.map(function(b) {
                if (b.name != a) {
                    return b;
                } else {
                    return false;
                }
            }).filter(function(b) {
                return b;
            });
        }
        return this;
    },
    cancel: function(a) {
        this.requests.get(a).cancel();
        return this;
    },
    onRequest: function() {
        this.fireEvent("request", arguments);
    },
    onComplete: function() {
        this.fireEvent("complete", arguments);
        if (!this.queue.length) {
            this.fireEvent("end");
        }
    },
    onCancel: function() {
        if (this.options.autoAdvance&&!this.error) {
            this.runNext();
        }
        this.fireEvent("cancel", arguments);
    },
    onSuccess: function() {
        if (this.options.autoAdvance&&!this.error) {
            this.runNext();
        }
        this.fireEvent("success", arguments);
    },
    onFailure: function() {
        this.error = true;
        if (!this.options.stopOnFailure && this.options.autoAdvance) {
            this.runNext();
        }
        this.fireEvent("failure", arguments);
    },
    onException: function() {
        this.error = true;
        if (!this.options.stopOnFailure && this.options.autoAdvance) {
            this.runNext();
        }
        this.fireEvent("exception", arguments);
    }
});
Request.implement({
    options: {
        initialDelay: 5000,
        delay: 5000,
        limit: 60000
    },
    startTimer: function(b) {
        var a = function() {
            if (!this.running) {
                this.send({
                    data: b
                });
            }
        };
        this.timer = a.delay(this.options.initialDelay, this);
        this.lastDelay = this.options.initialDelay;
        this.completeCheck = function(c) {
            $clear(this.timer);
            this.lastDelay = (c) ? this.options.delay : (this.lastDelay + this.options.delay).min(this.options.limit);
            this.timer = a.delay(this.lastDelay, this);
        };
        return this.addEvent("complete", this.completeCheck);
    },
    stopTimer: function() {
        $clear(this.timer);
        return this.removeEvent("complete", this.completeCheck);
    }
});
var Asset = {
    javascript: function(g, d) {
        d = $extend({
            onload: $empty,
            document: document,
            check: $lambda(true)
        }, d);
        if (d.onLoad) {
            d.onload = d.onLoad;
            delete d.onLoad;
        }
        var b = new Element("script", {
            src: g,
            type: "text/javascript"
        });
        var f = d.onload.bind(b), a = d.check, h = d.document;
        delete d.onload;
        delete d.check;
        delete d.document;
        b.addEvents({
            load: f,
            readystatechange: function() {
                if (["loaded", "complete"].contains(this.readyState)) {
                    f();
                }
            }
        }).set(d);
        if (Browser.Engine.webkit419) {
            var c = (function() {
                if (!$try(a)) {
                    return;
                }
                $clear(c);
                f();
            }).periodical(50);
        }
        return b.inject(h.head);
    },
    css: function(b, a) {
        a = a || {};
        var c = a.onload || a.onLoad;
        if (c) {
            a.events = a.events || {};
            a.events.load = c;
            delete a.onload;
            delete a.onLoad;
        }
        return new Element("link", $merge({
            rel: "stylesheet",
            media: "screen",
            type: "text/css",
            href: b
        }, a)).inject(document.head);
    },
    image: function(c, b) {
        b = $merge({
            onload: $empty,
            onabort: $empty,
            onerror: $empty
        }, b);
        var d = new Image();
        var a = document.id(d) || new Element("img");
        ["load", "abort", "error"].each(function(f) {
            var h = "on" + f;
            var g = f.capitalize();
            if (b["on" + g]) {
                b[h] = b["on" + g];
                delete b["on" + g];
            }
            var i = b[h];
            delete b[h];
            d[h] = function() {
                if (!d) {
                    return;
                }
                if (!a.parentNode) {
                    a.width = d.width;
                    a.height = d.height;
                }
                d = d.onload = d.onabort = d.onerror = null;
                i.delay(1, a, a);
                a.fireEvent(f, a, 1);
            };
        });
        d.src = a.src = c;
        if (d && d.complete) {
            d.onload.delay(1);
        }
        return a.set(b);
    },
    images: function(d, c) {
        c = $merge({
            onComplete: $empty,
            onProgress: $empty,
            onError: $empty,
            properties: {}
        }, c);
        d = $splat(d);
        var a = [];
        var b = 0;
        return new Elements(d.map(function(g, f) {
            return Asset.image(g, $extend(c.properties, {
                onload: function() {
                    c.onProgress.call(this, b, f);
                    b++;
                    if (b == d.length) {
                        c.onComplete();
                    }
                },
                onerror: function() {
                    c.onError.call(this, b, f);
                    b++;
                    if (b == d.length) {
                        c.onComplete();
                    }
                }
            }));
        }));
    }
};
var Color = new Native({
    initialize: function(b, c) {
        if (arguments.length >= 3) {
            c = "rgb";
            b = Array.slice(arguments, 0, 3);
        } else {
            if (typeof b == "string") {
                if (b.match(/rgb/)) {
                    b = b.rgbToHex().hexToRgb(true);
                } else {
                    if (b.match(/hsb/)) {
                        b = b.hsbToRgb();
                    } else {
                        b = b.hexToRgb(true);
                    }
                }
            }
        }
        c = c || "rgb";
        switch (c) {
        case"hsb":
            var a = b;
            b = b.hsbToRgb();
            b.hsb = a;
            break;
        case"hex":
            b = b.hexToRgb(true);
            break;
        }
        b.rgb = b.slice(0, 3);
        b.hsb = b.hsb || b.rgbToHsb();
        b.hex = b.rgbToHex();
        return $extend(b, this);
    }
});
Color.implement({
    mix: function() {
        var a = Array.slice(arguments);
        var c = ($type(a.getLast()) == "number") ? a.pop(): 50;
        var b = this.slice();
        a.each(function(d) {
            d = new Color(d);
            for (var f = 0; f < 3; f++) {
                b[f] = Math.round((b[f] / 100 * (100 - c)) + (d[f] / 100 * c));
            }
        });
        return new Color(b, "rgb");
    },
    invert: function() {
        return new Color(this.map(function(a) {
            return 255 - a;
        }));
    },
    setHue: function(a) {
        return new Color([a, this.hsb[1], this.hsb[2]], "hsb");
    },
    setSaturation: function(a) {
        return new Color([this.hsb[0], a, this.hsb[2]], "hsb");
    },
    setBrightness: function(a) {
        return new Color([this.hsb[0], this.hsb[1], a], "hsb");
    }
});
var $RGB = function(d, c, a) {
    return new Color([d, c, a], "rgb");
};
var $HSB = function(d, c, a) {
    return new Color([d, c, a], "hsb");
};
var $HEX = function(a) {
    return new Color(a, "hex");
};
Array.implement({
    rgbToHsb: function() {
        var b = this[0], c = this[1], k = this[2], h = 0;
        var j = Math.max(b, c, k), f = Math.min(b, c, k);
        var l = j - f;
        var i = j / 255, g = (j != 0) ? l / j: 0;
        if (g != 0) {
            var d = (j - b) / l;
            var a = (j - c) / l;
            var m = (j - k) / l;
            if (b == j) {
                h = m - a;
            } else {
                if (c == j) {
                    h = 2 + d - m;
                } else {
                    h = 4 + a - d;
                }
            }
            h/=6;
            if (h < 0) {
                h++;
            }
        }
        return [Math.round(h * 360), Math.round(g * 100), Math.round(i * 100)];
    },
    hsbToRgb: function() {
        var c = Math.round(this[2] / 100 * 255);
        if (this[1] == 0) {
            return [c, c, c];
        } else {
            var a = this[0]%360;
            var g = a%60;
            var h = Math.round((this[2] * (100 - this[1])) / 10000 * 255);
            var d = Math.round((this[2] * (6000 - this[1] * g)) / 600000 * 255);
            var b = Math.round((this[2] * (6000 - this[1] * (60 - g))) / 600000 * 255);
            switch (Math.floor(a / 60)) {
            case 0:
                return [c, b, h];
            case 1:
                return [d, c, h];
            case 2:
                return [h, c, b];
            case 3:
                return [h, d, c];
            case 4:
                return [b, h, c];
            case 5:
                return [c, h, d];
            }
        }
        return false;
    }
});
String.implement({
    rgbToHsb: function() {
        var a = this.match(/\d{1,3}/g);
        return (a) ? a.rgbToHsb() : null;
    },
    hsbToRgb: function() {
        var a = this.match(/\d{1,3}/g);
        return (a) ? a.hsbToRgb() : null;
    }
});
var Group = new Class({
    initialize: function() {
        this.instances = Array.flatten(arguments);
        this.events = {};
        this.checker = {};
    },
    addEvent: function(b, a) {
        this.checker[b] = this.checker[b] || {};
        this.events[b] = this.events[b] || [];
        if (this.events[b].contains(a)) {
            return false;
        } else {
            this.events[b].push(a);
        }
        this.instances.each(function(c, d) {
            c.addEvent(b, this.check.bind(this, [b, c, d]));
        }, this);
        return this;
    },
    check: function(c, a, b) {
        this.checker[c][b] = true;
        var d = this.instances.every(function(g, f) {
            return this.checker[c][f] || false;
        }, this);
        if (!d) {
            return;
        }
        this.checker[c] = {};
        this.events[c].each(function(f) {
            f.call(this, this.instances, a);
        }, this);
    }
});
Hash.Cookie = new Class({
    Extends: Cookie,
    options: {
        autoSave: true
    },
    initialize: function(b, a) {
        this.parent(b, a);
        this.load();
    },
    save: function() {
        var a = JSON.encode(this.hash);
        if (!a || a.length > 4096) {
            return false;
        }
        if (a == "{}") {
            this.dispose();
        } else {
            this.write(a);
        }
        return true;
    },
    load: function() {
        this.hash = new Hash(JSON.decode(this.read(), true));
        return this;
    }
});
Hash.each(Hash.prototype, function(b, a) {
    if (typeof b == "function") {
        Hash.Cookie.implement(a, function() {
            var c = b.apply(this.hash, arguments);
            if (this.options.autoSave) {
                this.save();
            }
            return c;
        });
    }
});
var IframeShim = new Class({
    Implements: [Options, Events, Class.Occlude],
    options: {
        className: "iframeShim",
        src: 'javascript:false;document.write("");',
        display: false,
        zIndex: null,
        margin: 0,
        offset: {
            x: 0,
            y: 0
        },
        browsers: (Browser.Engine.trident4 || (Browser.Engine.gecko&&!Browser.Engine.gecko19 && Browser.Platform.mac))
    },
    property: "IframeShim",
    initialize: function(b, a) {
        this.element = document.id(b);
        if (this.occlude()) {
            return this.occluded;
        }
        this.setOptions(a);
        this.makeShim();
        return this;
    },
    makeShim: function() {
        if (this.options.browsers) {
            var c = this.element.getStyle("zIndex").toInt();
            if (!c) {
                c = 1;
                var b = this.element.getStyle("position");
                if (b == "static" ||!b) {
                    this.element.setStyle("position", "relative");
                }
                this.element.setStyle("zIndex", c);
            }
            c = ($chk(this.options.zIndex) && c > this.options.zIndex) ? this.options.zIndex : c - 1;
            if (c < 0) {
                c = 1;
            }
            this.shim = new Element("iframe", {
                src: this.options.src,
                scrolling: "no",
                frameborder: 0,
                styles: {
                    zIndex: c,
                    position: "absolute",
                    border: "none",
                    filter: "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"
                },
                "class": this.options.className
            }).store("IframeShim", this);
            var a = (function() {
                this.shim.inject(this.element, "after");
                this[this.options.display ? "show": "hide"]();
                this.fireEvent("inject");
            }).bind(this);
            if (!IframeShim.ready) {
                window.addEvent("load", a);
            } else {
                a();
            }
        } else {
            this.position = this.hide = this.show = this.dispose = $lambda(this);
        }
    },
    position: function() {
        if (!IframeShim.ready ||!this.shim) {
            return this;
        }
        var a = this.element.measure(function() {
            return this.getSize();
        });
        if (this.options.margin != undefined) {
            a.x = a.x - (this.options.margin * 2);
            a.y = a.y - (this.options.margin * 2);
            this.options.offset.x += this.options.margin;
            this.options.offset.y += this.options.margin;
        }
        this.shim.set({
            width: a.x,
            height: a.y
        }).position({
            relativeTo: this.element,
            offset: this.options.offset
        });
        return this;
    },
    hide: function() {
        if (this.shim) {
            this.shim.setStyle("display", "none");
        }
        return this;
    },
    show: function() {
        if (this.shim) {
            this.shim.setStyle("display", "block");
        }
        return this.position();
    },
    dispose: function() {
        if (this.shim) {
            this.shim.dispose();
        }
        return this;
    },
    destroy: function() {
        if (this.shim) {
            this.shim.destroy();
        }
        return this;
    }
});
window.addEvent("load", function() {
    IframeShim.ready = true;
});
var HtmlTable = new Class({
    Implements: [Options, Events, Class.Occlude],
    options: {
        properties: {
            cellpadding: 0,
            cellspacing: 0,
            border: 0
        },
        rows: [],
        headers: [],
        footers: []
    },
    property: "HtmlTable",
    initialize: function() {
        var a = Array.link(arguments, {
            options: Object.type,
            table: Element.type
        });
        this.setOptions(a.options);
        this.element = a.table || new Element("table", this.options.properties);
        if (this.occlude()) {
            return this.occluded;
        }
        this.build();
    },
    build: function() {
        this.element.store("HtmlTable", this);
        this.body = document.id(this.element.tBodies[0]) || new Element("tbody").inject(this.element);
        $$(this.body.rows);
        if (this.options.headers.length) {
            this.setHeaders(this.options.headers);
        } else {
            this.thead = document.id(this.element.tHead);
        }
        if (this.thead) {
            this.head = document.id(this.thead.rows[0]);
        }
        if (this.options.footers.length) {
            this.setFooters(this.options.footers);
        }
        this.tfoot = document.id(this.element.tFoot);
        if (this.tfoot) {
            this.foot = document.id(this.tfoot.rows[0]);
        }
        this.options.rows.each(function(a) {
            this.push(a);
        }, this);
        ["adopt", "inject", "wraps", "grab", "replaces", "dispose"].each(function(a) {
            this[a] = this.element[a].bind(this.element);
        }, this);
    },
    toElement: function() {
        return this.element;
    },
    empty: function() {
        this.body.empty();
        return this;
    },
    set: function(d, a) {
        var c = (d == "headers") ? "tHead": "tFoot";
        this[c.toLowerCase()] = (document.id(this.element[c]) || new Element(c.toLowerCase()).inject(this.element, "top")).empty();
        var b = this.push(a, {}, this[c.toLowerCase()], d == "headers" ? "th" : "td");
        if (d == "headers") {
            this.head = document.id(this.thead.rows[0]);
        } else {
            this.foot = document.id(this.thead.rows[0]);
        }
        return b;
    },
    setHeaders: function(a) {
        this.set("headers", a);
        return this;
    },
    setFooters: function(a) {
        this.set("footers", a);
        return this;
    },
    push: function(f, b, d, a) {
        if ($type(f) == "element" && f.get("tag") == "tr") {
            f.inject(d || this.body);
            return {
                tr: f,
                tds: f.getChildren("td")
            };
        }
        var c = f.map(function(i) {
            var j = new Element(a || "td", i ? i.properties : {}), h = (i ? i.content : "") || i, g = document.id(h);
            if ($type(h) != "string" && g) {
                j.adopt(g);
            } else {
                j.set("html", h);
            }
            return j;
        });
        return {
            tr: new Element("tr", b).inject(d || this.body).adopt(c),
            tds: c
        };
    }
});
HtmlTable = Class.refactor(HtmlTable, {
    options: {
        classZebra: "table-tr-odd",
        zebra: true
    },
    initialize: function() {
        this.previous.apply(this, arguments);
        if (this.occluded) {
            return this.occluded;
        }
        if (this.options.zebra) {
            this.updateZebras();
        }
    },
    updateZebras: function() {
        Array.each(this.body.rows, this.zebra, this);
    },
    zebra: function(b, a) {
        return b[((a%2) ? "remove" : "add") + "Class"](this.options.classZebra);
    },
    push: function() {
        var a = this.previous.apply(this, arguments);
        if (this.options.zebra) {
            this.updateZebras();
        }
        return a;
    }
});
HtmlTable = Class.refactor(HtmlTable, {
    options: {
        sortIndex: 0,
        sortReverse: false,
        parsers: [],
        defaultParser: "string",
        classSortable: "table-sortable",
        classHeadSort: "table-th-sort",
        classHeadSortRev: "table-th-sort-rev",
        classNoSort: "table-th-nosort",
        classGroupHead: "table-tr-group-head",
        classGroup: "table-tr-group",
        classCellSort: "table-td-sort",
        classSortSpan: "table-th-sort-span",
        sortable: false
    },
    initialize: function() {
        this.previous.apply(this, arguments);
        if (this.occluded) {
            return this.occluded;
        }
        this.sorted = {
            index: null,
            dir: 1
        };
        this.bound = {
            headClick: this.headClick.bind(this)
        };
        this.sortSpans = new Elements();
        if (this.options.sortable) {
            this.enableSort();
            if (this.options.sortIndex != null) {
                this.sort(this.options.sortIndex, this.options.sortReverse);
            }
        }
    },
    attachSorts: function(a) {
        this.element.removeEvents("click:relay(th)");
        this.element[$pick(a, true) ? "addEvent": "removeEvent"]("click:relay(th)", this.bound.headClick);
    },
    setHeaders: function() {
        this.previous.apply(this, arguments);
        if (this.sortEnabled) {
            this.detectParsers();
        }
    },
    detectParsers: function(c) {
        if (!this.head) {
            return;
        }
        var a = this.options.parsers, b = this.body.rows;
        this.parsers = $$(this.head.cells).map(function(d, f) {
            if (!c && (d.hasClass(this.options.classNoSort) || d.retrieve("htmltable-parser"))) {
                return d.retrieve("htmltable-parser");
            }
            var g = new Element("div");
            $each(d.childNodes, function(k) {
                g.adopt(k);
            });
            g.inject(d);
            var i = new Element("span", {
                html: "&#160;",
                "class": this.options.classSortSpan
            }).inject(g, "top");
            this.sortSpans.push(i);
            var j = a[f], h;
            switch ($type(j)) {
            case"function":
                j = {
                    convert: j
                };
                h = true;
                break;
            case"string":
                j = j;
                h = true;
                break;
            }
            if (!h) {
                HtmlTable.Parsers.some(function(o) {
                    var m = o.match;
                    if (!m) {
                        return false;
                    }
                    for (var n = 0, l = b.length; n < l; n++) {
                        var k = document.id(b[n].cells[f]);
                        var p = k ? k.get("html").clean(): "";
                        if (p && m.test(p)) {
                            j = o;
                            return true;
                        }
                    }
                });
            }
            if (!j) {
                j = this.options.defaultParser;
            }
            d.store("htmltable-parser", j);
            return j;
        }, this);
    },
    headClick: function(c, b) {
        if (!this.head || b.hasClass(this.options.classNoSort)) {
            return;
        }
        var a = Array.indexOf(this.head.cells, b);
        this.sort(a);
        return false;
    },
    sort: function(g, k, n) {
        if (!this.head) {
            return;
        }
        n=!!(n);
        var m = this.options.classCellSort;
        var p = this.options.classGroup, u = this.options.classGroupHead;
        if (!n) {
            if (g != null) {
                if (this.sorted.index == g) {
                    this.sorted.reverse=!(this.sorted.reverse);
                } else {
                    if (this.sorted.index != null) {
                        this.sorted.reverse = false;
                        this.head.cells[this.sorted.index].removeClass(this.options.classHeadSort).removeClass(this.options.classHeadSortRev);
                    } else {
                        this.sorted.reverse = true;
                    }
                    this.sorted.index = g;
                }
            } else {
                g = this.sorted.index;
            }
            if (k != null) {
                this.sorted.reverse = k;
            }
            var d = document.id(this.head.cells[g]);
            if (d) {
                d.addClass(this.options.classHeadSort);
                if (this.sorted.reverse) {
                    d.addClass(this.options.classHeadSortRev);
                } else {
                    d.removeClass(this.options.classHeadSortRev);
                }
            }
            this.body.getElements("td").removeClass(this.options.classCellSort);
        }
        var c = this.parsers[g];
        if ($type(c) == "string") {
            c = HtmlTable.Parsers.get(c);
        }
        if (!c) {
            return;
        }
        if (!Browser.Engine.trident) {
            var b = this.body.getParent();
            this.body.dispose();
        }
        var t = Array.map(this.body.rows, function(w, j) {
            var v = c.convert.call(document.id(w.cells[g]));
            return {
                position: j,
                value: v,
                toString: function() {
                    return v.toString();
                }
            };
        }, this);
        t.reverse(true);
        t.sort(function(j, i) {
            if (j.value === i.value) {
                return 0;
            }
            return j.value > i.value ? 1 : - 1;
        });
        if (!this.sorted.reverse) {
            t.reverse(true);
        }
        var q = t.length, l = this.body;
        var o, s, a, h;
        while (q) {
            var r = t[--q];
            s = r.position;
            var f = l.rows[s];
            if (f.disabled) {
                continue;
            }
            if (!n) {
                if (h === r.value) {
                    f.removeClass(u).addClass(p);
                } else {
                    h = r.value;
                    f.removeClass(p).addClass(u);
                }
                if (this.options.zebra) {
                    this.zebra(f, q);
                }
                f.cells[g].addClass(m);
            }
            l.appendChild(f);
            for (o = 0; o < q; o++) {
                if (t[o].position > s) {
                    t[o].position--;
                }
            }
        }
        t = null;
        if (b) {
            b.grab(l);
        }
        return this.fireEvent("sort", [l, g]);
    },
    reSort: function() {
        if (this.sortEnabled) {
            this.sort.call(this, this.sorted.index, this.sorted.reverse);
        }
        return this;
    },
    enableSort: function() {
        this.element.addClass(this.options.classSortable);
        this.attachSorts(true);
        this.detectParsers();
        this.sortEnabled = true;
        return this;
    },
    disableSort: function() {
        this.element.removeClass(this.options.classSortable);
        this.attachSorts(false);
        this.sortSpans.each(function(a) {
            a.destroy();
        });
        this.sortSpans.empty();
        this.sortEnabled = false;
        return this;
    }
});
HtmlTable.Parsers = new Hash({
    date: {
        match: /^\d{2}[-\/ ]\d{2}[-\/ ]\d{2,4}$/,
        convert: function() {
            var a = Date.parse(this.get("text").stripTags());
            return $type(a) == "date" ? a.format("db") : "";
        },
        type: "date"
    },
    "input-checked": {
        match: / type="(radio|checkbox)" /,
        convert: function() {
            return this.getElement("input").checked;
        }
    },
    "input-value": {
        match: /<input/,
        convert: function() {
            return this.getElement("input").value;
        }
    },
    number: {
        match: /^\d+[^\d.,]*$/,
        convert: function() {
            return this.get("text").stripTags().toInt();
        },
        number: true
    },
    numberLax: {
        match: /^[^\d]+\d+$/,
        convert: function() {
            return this.get("text").replace(/[^-?^0-9]/, "").stripTags().toInt();
        },
        number: true
    },
    "float": {
        match: /^[\d]+\.[\d]+/,
        convert: function() {
            return this.get("text").replace(/[^-?^\d.]/, "").stripTags().toFloat();
        },
        number: true
    },
    floatLax: {
        match: /^[^\d]+[\d]+\.[\d]+$/,
        convert: function() {
            return this.get("text").replace(/[^-?^\d.]/, "").stripTags();
        },
        number: true
    },
    string: {
        match: null,
        convert: function() {
            return this.get("text").stripTags();
        }
    },
    title: {
        match: null,
        convert: function() {
            return this.title;
        }
    }
});
HtmlTable.defineParsers = function(a) {
    HtmlTable.Parsers = new Hash(a).combine(HtmlTable.Parsers);
};
HtmlTable = Class.refactor(HtmlTable, {
    options: {
        useKeyboard: true,
        classRowSelected: "table-tr-selected",
        classRowHovered: "table-tr-hovered",
        classSelectable: "table-selectable",
        shiftForMultiSelect: true,
        allowMultiSelect: true,
        selectable: false
    },
    initialize: function() {
        this.previous.apply(this, arguments);
        if (this.occluded) {
            return this.occluded;
        }
        this._selectedRows = new Elements();
        this._bound = {
            mouseleave: this._mouseleave.bind(this),
            clickRow: this._clickRow.bind(this)
        };
        if (this.options.selectable) {
            this.enableSelect();
        }
    },
    enableSelect: function() {
        this._selectEnabled = true;
        this._attachSelects();
        this.element.addClass(this.options.classSelectable);
    },
    disableSelect: function() {
        this._selectEnabled = false;
        this._attachSelects(false);
        this.element.removeClass(this.options.classSelectable);
    },
    push: function() {
        var a = this.previous.apply(this, arguments);
        this._updateSelects();
        return a;
    },
    toggleRow: function(a) {
        return this.isSelected(a) ? this.deselectRow.apply(this, arguments) : this.selectRow.apply(this, arguments);
    },
    selectRow: function(b, a) {
        if (this.isSelected(b) || (!a&&!this.body.getChildren().contains(b))) {
            return;
        }
        if (!this.options.allowMultiSelect) {
            this.selectNone();
        }
        if (!this.isSelected(b)) {
            this._selectedRows.push(b);
            b.addClass(this.options.classRowSelected);
            this.fireEvent("rowFocus", [b, this._selectedRows]);
        }
        this._focused = b;
        document.clearSelection();
        return this;
    },
    isSelected: function(a) {
        return this._selectedRows.contains(a);
    },
    deselectRow: function(b, a) {
        if (!this.isSelected(b) || (!a&&!this.body.getChildren().contains(b))) {
            return;
        }
        this._selectedRows.erase(b);
        b.removeClass(this.options.classRowSelected);
        this.fireEvent("rowUnfocus", [b, this._selectedRows]);
        return this;
    },
    selectAll: function(a) {
        if (!a&&!this.options.allowMultiSelect) {
            return;
        }
        this.selectRange(0, this.body.rows.length, a);
        return this;
    },
    selectNone: function() {
        return this.selectAll(true);
    },
    selectRange: function(b, a, g) {
        if (!this.options.allowMultiSelect&&!g) {
            return;
        }
        var h = g ? "deselectRow": "selectRow", f = $A(this.body.rows);
        if ($type(b) == "element") {
            b = f.indexOf(b);
        }
        if ($type(a) == "element") {
            a = f.indexOf(a);
        }
        a = a < f.length - 1 ? a : f.length - 1;
        if (a < b) {
            var d = b;
            b = a;
            a = d;
        }
        for (var c = b; c <= a; c++) {
            this[h](f[c], true);
        }
        return this;
    },
    deselectRange: function(b, a) {
        this.selectRange(b, a, true);
    },
    _enterRow: function(a) {
        if (this._hovered) {
            this._hovered = this._leaveRow(this._hovered);
        }
        this._hovered = a.addClass(this.options.classRowHovered);
    },
    _leaveRow: function(a) {
        a.removeClass(this.options.classRowHovered);
    },
    _updateSelects: function() {
        Array.each(this.body.rows, function(a) {
            var b = a.retrieve("binders");
            if ((b && this._selectEnabled) || (!b&&!this._selectEnabled)) {
                return;
            }
            if (!b) {
                b = {
                    mouseenter: this._enterRow.bind(this, [a]),
                    mouseleave: this._leaveRow.bind(this, [a])
                };
                a.store("binders", b).addEvents(b);
            } else {
                a.removeEvents(b);
            }
        }, this);
    },
    _shiftFocus: function(b, a) {
        if (!this._focused) {
            return this.selectRow(this.body.rows[0], a);
        }
        var c = this._getRowByOffset(b);
        if (c === null || this._focused == this.body.rows[c]) {
            return this;
        }
        this.toggleRow(this.body.rows[c], a);
    },
    _clickRow: function(a, b) {
        var c = (a.shift || a.meta || a.control) && this.options.shiftForMultiSelect;
        if (!c&&!(a.rightClick && this.isSelected(b) && this.options.allowMultiSelect)) {
            this.selectNone();
        }
        if (a.rightClick) {
            this.selectRow(b);
        } else {
            this.toggleRow(b);
        }
        if (a.shift) {
            this.selectRange(this._rangeStart || this.body.rows[0], b, this._rangeStart?!this.isSelected(b) : true);
            this._focused = b;
        }
        this._rangeStart = b;
    },
    _getRowByOffset: function(b) {
        if (!this._focused) {
            return 0;
        }
        var a = Array.indexOf(this.body.rows, this._focused) + b;
        if (a < 0) {
            a = null;
        }
        if (a >= this.body.rows.length) {
            a = null;
        }
        return a;
    },
    _attachSelects: function(d) {
        d = $pick(d, true);
        var h = d ? "addEvents": "removeEvents";
        this.element[h]({
            mouseleave: this._bound.mouseleave
        });
        this.body[h]({
            "click:relay(tr)": this._bound.clickRow,
            "contextmenu:relay(tr)": this._bound.clickRow
        });
        if (this.options.useKeyboard || this.keyboard) {
            if (!this.keyboard) {
                var g, f;
                var c = function(j) {
                    var i = function(k) {
                        $clear(g);
                        k.preventDefault();
                        var l = this.body.rows[this._getRowByOffset(j)];
                        if (k.shift && l && this.isSelected(l)) {
                            this.deselectRow(this._focused);
                            this._focused = l;
                        } else {
                            if (l && (!this.options.allowMultiSelect ||!k.shift)) {
                                this.selectNone();
                            }
                            this._shiftFocus(j, k);
                        }
                        if (f) {
                            g = i.delay(100, this, k);
                        } else {
                            g = (function() {
                                f = true;
                                i(k);
                            }).delay(400);
                        }
                    }.bind(this);
                    return i;
                }.bind(this);
                var b = function() {
                    $clear(g);
                    f = false;
                };
                this.keyboard = new Keyboard({
                    events: {
                        "keydown:shift+up": c( - 1),
                        "keydown:shift+down": c(1),
                        "keyup:shift+up": b,
                        "keyup:shift+down": b,
                        "keyup:up": b,
                        "keyup:down": b
                    },
                    active: true
                });
                var a = "";
                if (this.options.allowMultiSelect && this.options.shiftForMultiSelect && this.options.useKeyboard) {
                    a = " (Shift multi-selects).";
                }
                this.keyboard.addShortcuts({
                    "Select Previous Row": {
                        keys: "up",
                        shortcut: "up arrow",
                        handler: c( - 1),
                        description: "Select the previous row in the table." + a
                    },
                    "Select Next Row": {
                        keys: "down",
                        shortcut: "down arrow",
                        handler: c(1),
                        description: "Select the next row in the table." + a
                    }
                });
            }
            this.keyboard[d ? "activate": "deactivate"]();
        }
        this._updateSelects();
    },
    _mouseleave: function() {
        if (this._hovered) {
            this._leaveRow(this._hovered);
        }
    }
});
(function() {
    var a = this.Keyboard = new Class({
        Extends: Events,
        Implements: [Options, Log],
        options: {
            defaultEventType: "keydown",
            active: false,
            manager: null,
            events: {},
            nonParsedEvents: ["activate", "deactivate", "onactivate", "ondeactivate", "changed", "onchanged"]
        },
        initialize: function(g) {
            if (g && g.manager) {
                this.manager = g.manager;
                delete g.manager;
            }
            this.setOptions(g);
            this.setup();
        },
        setup: function() {
            this.addEvents(this.options.events);
            if (a.manager&&!this.manager) {
                a.manager.manage(this);
            }
            if (this.options.active) {
                this.activate();
            }
        },
        handle: function(i, h) {
            if (i.preventKeyboardPropagation) {
                return;
            }
            var g=!!this.manager;
            if (g && this.activeKB) {
                this.activeKB.handle(i, h);
                if (i.preventKeyboardPropagation) {
                    return;
                }
            }
            this.fireEvent(h, i);
            if (!g && this.activeKB) {
                this.activeKB.handle(i, h);
            }
        },
        addEvent: function(i, h, g) {
            return this.parent(a.parse(i, this.options.defaultEventType, this.options.nonParsedEvents), h, g);
        },
        removeEvent: function(h, g) {
            return this.parent(a.parse(h, this.options.defaultEventType, this.options.nonParsedEvents), g);
        },
        toggleActive: function() {
            return this[this.active ? "deactivate": "activate"]();
        },
        activate: function(g) {
            if (g) {
                if (g.isActive()) {
                    return this;
                }
                if (this.activeKB && g != this.activeKB) {
                    this.previous = this.activeKB;
                    this.previous.fireEvent("deactivate");
                }
                this.activeKB = g.fireEvent("activate");
                a.manager.fireEvent("changed");
            } else {
                if (this.manager) {
                    this.manager.activate(this);
                }
            }
            return this;
        },
        isActive: function() {
            return this.manager ? this.manager.activeKB == this : a.manager == this;
        },
        deactivate: function(g) {
            if (g) {
                if (g === this.activeKB) {
                    this.activeKB = null;
                    g.fireEvent("deactivate");
                    a.manager.fireEvent("changed");
                }
            } else {
                if (this.manager) {
                    this.manager.deactivate(this);
                }
            }
            return this;
        },
        relinquish: function() {
            if (this.isActive() && this.manager && this.manager.previous) {
                this.manager.activate(this.manager.previous);
            }
        },
        manage: function(g) {
            if (g.manager && g.manager != a.manager && this != a.manager) {
                g.manager.drop(g);
            }
            this.instances.push(g);
            g.manager = this;
            if (!this.activeKB) {
                this.activate(g);
            }
        },
        _disable: function(g) {
            if (this.activeKB == g) {
                this.activeKB = null;
            }
        },
        drop: function(g) {
            this._disable(g);
            this.instances.erase(g);
            a.manager.manage(g);
            if (this.activeKB == g && this.previous && this.instances.contains(this.previous)) {
                this.activate(this.previous);
            }
        },
        instances: [],
        trace: function() {
            a.trace(this);
        },
        each: function(g) {
            a.each(this, g);
        }
    });
    var b = {};
    var c = ["shift", "control", "alt", "meta"];
    var f = /^(?:shift|control|ctrl|alt|meta)$/;
    a.parse = function(i, h, l) {
        if (l && l.contains(i.toLowerCase())) {
            return i;
        }
        i = i.toLowerCase().replace(/^(keyup|keydown):/, function(n, m) {
            h = m;
            return "";
        });
        if (!b[i]) {
            var g, k = {};
            i.split("+").each(function(m) {
                if (f.test(m)) {
                    k[m] = true;
                } else {
                    g = m;
                }
            });
            k.control = k.control || k.ctrl;
            var j = [];
            c.each(function(m) {
                if (k[m]) {
                    j.push(m);
                }
            });
            if (g) {
                j.push(g);
            }
            b[i] = j.join("+");
        }
        return h + ":" + b[i];
    };
    a.each = function(g, h) {
        var i = g || a.manager;
        while (i) {
            h.run(i);
            i = i.activeKB;
        }
    };
    a.stop = function(g) {
        g.preventKeyboardPropagation = true;
    };
    a.manager = new a({
        active: true
    });
    a.trace = function(g) {
        g = g || a.manager;
        g.enableLog();
        g.log("the following items have focus: ");
        a.each(g, function(h) {
            g.log(document.id(h.widget) || h.wiget || h);
        });
    };
    var d = function(h) {
        var g = [];
        c.each(function(i) {
            if (h[i]) {
                g.push(i);
            }
        });
        if (!f.test(h.key)) {
            g.push(h.key);
        }
        a.manager.handle(h, h.type + ":" + g.join("+"));
    };
    document.addEvents({
        keyup: d,
        keydown: d
    });
    Event.Keys.extend({
        shift: 16,
        control: 17,
        alt: 18,
        capslock: 20,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        numlock: 144,
        scrolllock: 145,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": Browser.Engine.gecko ? 109: 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
    });
})();
Keyboard.prototype.options.nonParsedEvents.combine(["rebound", "onrebound"]);
Keyboard.implement({
    addShortcut: function(b, a) {
        this.shortcuts = this.shortcuts || [];
        this.shortcutIndex = this.shortcutIndex || {};
        a.getKeyboard = $lambda(this);
        a.name = b;
        this.shortcutIndex[b] = a;
        this.shortcuts.push(a);
        if (a.keys) {
            this.addEvent(a.keys, a.handler);
        }
        return this;
    },
    addShortcuts: function(b) {
        for (var a in b) {
            this.addShortcut(a, b[a]);
        }
        return this;
    },
    removeShortcut: function(b) {
        var a = this.getShortcut(b);
        if (a && a.keys) {
            this.removeEvent(a.keys, a.handler);
            delete this.shortcutIndex[b];
            this.shortcuts.erase(a);
        }
        return this;
    },
    removeShortcuts: function(a) {
        a.each(this.removeShortcut, this);
        return this;
    },
    getShortcuts: function() {
        return this.shortcuts || [];
    },
    getShortcut: function(a) {
        return (this.shortcutIndex || {})[a];
    }
});
Keyboard.rebind = function(b, a) {
    $splat(a).each(function(c) {
        c.getKeyboard().removeEvent(c.keys, c.handler);
        c.getKeyboard().addEvent(b, c.handler);
        c.keys = b;
        c.getKeyboard().fireEvent("rebound");
    });
};
Keyboard.getActiveShortcuts = function(b) {
    var a = [], c = [];
    Keyboard.each(b, [].push.bind(a));
    a.each(function(d) {
        c.extend(d.getShortcuts());
    });
    return c;
};
Keyboard.getShortcut = function(c, b, d) {
    d = d || {};
    var a = d.many ? []: null, f = d.many ? function(h) {
        var g = h.getShortcut(c);
        if (g) {
            a.push(g);
        }
    }
    : function(g) {
        if (!a) {
            a = g.getShortcut(c);
        }
    };
    Keyboard.each(b, f);
    return a;
};
Keyboard.getShortcuts = function(b, a) {
    return Keyboard.getShortcut(b, a, {
        many: true
    });
};
var Mask = new Class({
    Implements: [Options, Events],
    Binds: ["position"],
    options: {
        style: {},
        "class": "mask",
        maskMargins: false,
        useIframeShim: true,
        iframeShimOptions: {}
    },
    initialize: function(b, a) {
        this.target = document.id(b) || document.id(document.body);
        this.target.store("Mask", this);
        this.setOptions(a);
        this.render();
        this.inject();
    },
    render: function() {
        this.element = new Element("div", {
            "class": this.options["class"],
            id: this.options.id || "mask-" + $time(),
            styles: $merge(this.options.style, {
                display: "none"
            }),
            events: {
                click: function() {
                    this.fireEvent("click");
                    if (this.options.hideOnClick) {
                        this.hide();
                    }
                }.bind(this)
            }
        });
        this.hidden = true;
    },
    toElement: function() {
        return this.element;
    },
    inject: function(b, a) {
        a = a || this.options.inject ? this.options.inject.where : "" || this.target == document.body ? "inside" : "after";
        b = b || this.options.inject ? this.options.inject.target : "" || this.target;
        this.element.inject(b, a);
        if (this.options.useIframeShim) {
            this.shim = new IframeShim(this.element, this.options.iframeShimOptions);
            this.addEvents({
                show: this.shim.show.bind(this.shim),
                hide: this.shim.hide.bind(this.shim),
                destroy: this.shim.destroy.bind(this.shim)
            });
        }
    },
    position: function() {
        this.resize(this.options.width, this.options.height);
        this.element.position({
            relativeTo: this.target,
            position: "topLeft",
            ignoreMargins: !this.options.maskMargins,
            ignoreScroll: this.target == document.body
        });
        return this;
    },
    resize: function(a, f) {
        var b = {
            styles: ["padding", "border"]
        };
        if (this.options.maskMargins) {
            b.styles.push("margin");
        }
        var d = this.target.getComputedSize(b);
        if (this.target == document.body) {
            var c = window.getScrollSize();
            if (d.totalHeight < c.y) {
                d.totalHeight = c.y;
            }
            if (d.totalWidth < c.x) {
                d.totalWidth = c.x;
            }
        }
        this.element.setStyles({
            width: $pick(a, d.totalWidth, d.x),
            height: $pick(f, d.totalHeight, d.y)
        });
        return this;
    },
    show: function() {
        if (!this.hidden) {
            return this;
        }
        window.addEvent("resize", this.position);
        this.position();
        this.showMask.apply(this, arguments);
        return this;
    },
    showMask: function() {
        this.element.setStyle("display", "block");
        this.hidden = false;
        this.fireEvent("show");
    },
    hide: function() {
        if (this.hidden) {
            return this;
        }
        window.removeEvent("resize", this.position);
        this.hideMask.apply(this, arguments);
        if (this.options.destroyOnHide) {
            return this.destroy();
        }
        return this;
    },
    hideMask: function() {
        this.element.setStyle("display", "none");
        this.hidden = true;
        this.fireEvent("hide");
    },
    toggle: function() {
        this[this.hidden ? "show": "hide"]();
    },
    destroy: function() {
        this.hide();
        this.element.destroy();
        this.fireEvent("destroy");
        this.target.eliminate("mask");
    }
});
Element.Properties.mask = {
    set: function(b) {
        var a = this.retrieve("mask");
        return this.eliminate("mask").store("mask:options", b);
    },
    get: function(a) {
        if (a ||!this.retrieve("mask")) {
            if (this.retrieve("mask")) {
                this.retrieve("mask").destroy();
            }
            if (a ||!this.retrieve("mask:options")) {
                this.set("mask", a);
            }
            this.store("mask", new Mask(this, this.retrieve("mask:options")));
        }
        return this.retrieve("mask");
    }
};
Element.implement({
    mask: function(a) {
        this.get("mask", a).show();
        return this;
    },
    unmask: function() {
        this.get("mask").hide();
        return this;
    }
});
var Scroller = new Class({
    Implements: [Events, Options],
    options: {
        area: 20,
        velocity: 1,
        onChange: function(a, b) {
            this.element.scrollTo(a, b);
        },
        fps: 50
    },
    initialize: function(b, a) {
        this.setOptions(a);
        this.element = document.id(b);
        this.docBody = document.id(this.element.getDocument().body);
        this.listener = ($type(this.element) != "element") ? this.docBody : this.element;
        this.timer = null;
        this.bound = {
            attach: this.attach.bind(this),
            detach: this.detach.bind(this),
            getCoords: this.getCoords.bind(this)
        };
    },
    start: function() {
        this.listener.addEvents({
            mouseenter: this.bound.attach,
            mouseleave: this.bound.detach
        });
    },
    stop: function() {
        this.listener.removeEvents({
            mouseenter: this.bound.attach,
            mouseleave: this.bound.detach
        });
        this.detach();
        this.timer = $clear(this.timer);
    },
    attach: function() {
        this.listener.addEvent("mousemove", this.bound.getCoords);
    },
    detach: function() {
        this.listener.removeEvent("mousemove", this.bound.getCoords);
        this.timer = $clear(this.timer);
    },
    getCoords: function(a) {
        this.page = (this.listener.get("tag") == "body") ? a.client : a.page;
        if (!this.timer) {
            this.timer = this.scroll.periodical(Math.round(1000 / this.options.fps), this);
        }
    },
    scroll: function() {
        var c = this.element.getSize(), a = this.element.getScroll(), i = this.element != this.docBody ? this.element.getOffsets(): {
            x: 0,
            y: 0
        }, d = this.element.getScrollSize(), h = {
            x: 0,
            y: 0
        }, f = this.options.area.top || this.options.area, b = this.options.area.bottom || this.options.area;
        for (var g in this.page) {
            if (this.page[g] < (f + i[g]) && a[g] != 0) {
                h[g] = (this.page[g] - f - i[g]) * this.options.velocity;
            } else {
                if (this.page[g] + b > (c[g] + i[g]) && a[g] + c[g] != d[g]) {
                    h[g] = (this.page[g] - c[g] + b - i[g]) * this.options.velocity;
                }
            }
            h[g] = h[g].round();
        }
        if (h.y || h.x) {
            this.fireEvent("change", [a.x + h.x, a.y + h.y]);
        }
    }
});
(function() {
    var a = function(c, b) {
        return (c) ? ($type(c) == "function" ? c(b) : b.get(c)) : "";
    };
    this.Tips = new Class({
        Implements: [Events, Options],
        options: {
            onShow: function() {
                this.tip.setStyle("display", "block");
            },
            onHide: function() {
                this.tip.setStyle("display", "none");
            },
            title: "title",
            text: function(b) {
                return b.get("rel") || b.get("href");
            },
            showDelay: 100,
            hideDelay: 100,
            className: "tip-wrap",
            offset: {
                x: 16,
                y: 16
            },
            windowPadding: {
                x: 0,
                y: 0
            },
            fixed: false
        },
        initialize: function() {
            var b = Array.link(arguments, {
                options: Object.type,
                elements: $defined
            });
            this.setOptions(b.options);
            if (b.elements) {
                this.attach(b.elements);
            }
            this.container = new Element("div", {
                "class": "tip"
            });
        },
        toElement: function() {
            if (this.tip) {
                return this.tip;
            }
            return this.tip = new Element("div", {
                "class": this.options.className,
                styles: {
                    position: "absolute",
                    top: 0,
                    left: 0
                }
            }).adopt(new Element("div", {
                "class": "tip-top"
            }), this.container, new Element("div", {
                "class": "tip-bottom"
            }));
        },
        attach: function(b) {
            $$(b).each(function(d) {
                var g = a(this.options.title, d), f = a(this.options.text, d);
                d.erase("title").store("tip:native", g).retrieve("tip:title", g);
                d.retrieve("tip:text", f);
                this.fireEvent("attach", [d]);
                var c = ["enter", "leave"];
                if (!this.options.fixed) {
                    c.push("move");
                }
                c.each(function(i) {
                    var h = d.retrieve("tip:" + i);
                    if (!h) {
                        h = this["element" + i.capitalize()].bindWithEvent(this, d);
                    }
                    d.store("tip:" + i, h).addEvent("mouse" + i, h);
                }, this);
            }, this);
            return this;
        },
        detach: function(b) {
            $$(b).each(function(d) {
                ["enter", "leave", "move"].each(function(f) {
                    d.removeEvent("mouse" + f, d.retrieve("tip:" + f)).eliminate("tip:" + f);
                });
                this.fireEvent("detach", [d]);
                if (this.options.title == "title") {
                    var c = d.retrieve("tip:native");
                    if (c) {
                        d.set("title", c);
                    }
                }
            }, this);
            return this;
        },
        elementEnter: function(c, b) {
            this.container.empty();
            ["title", "text"].each(function(f) {
                var d = b.retrieve("tip:" + f);
                if (d) {
                    this.fill(new Element("div", {
                        "class": "tip-" + f
                    }).inject(this.container), d);
                }
            }, this);
            $clear(this.timer);
            this.timer = (function() {
                this.show(b);
                this.position((this.options.fixed) ? {
                    page: b.getPosition()
                } : c);
            }).delay(this.options.showDelay, this);
        },
        elementLeave: function(c, b) {
            $clear(this.timer);
            this.timer = this.hide.delay(this.options.hideDelay, this, b);
            this.fireForParent(c, b);
        },
        fireForParent: function(c, b) {
            b = b.getParent();
            if (!b || b == document.body) {
                return;
            }
            if (b.retrieve("tip:enter")) {
                b.fireEvent("mouseenter", c);
            } else {
                this.fireForParent(c, b);
            }
        },
        elementMove: function(c, b) {
            this.position(c);
        },
        position: function(f) {
            if (!this.tip) {
                document.id(this);
            }
            var c = window.getSize(), b = window.getScroll(), g = {
                x: this.tip.offsetWidth,
                y: this.tip.offsetHeight
            }, d = {
                x: "left",
                y: "top"
            }, h = {};
            for (var i in d) {
                h[d[i]] = f.page[i] + this.options.offset[i];
                if ((h[d[i]] + g[i] - b[i]) > c[i] - this.options.windowPadding[i]) {
                    h[d[i]] = f.page[i] - this.options.offset[i] - g[i];
                }
            }
            this.tip.setStyles(h);
        },
        fill: function(b, c) {
            if (typeof c == "string") {
                b.set("html", c);
            } else {
                b.adopt(c);
            }
        },
        show: function(b) {
            if (!this.tip) {
                document.id(this);
            }
            if (!this.tip.getParent()) {
                this.tip.inject(document.body);
            }
            this.fireEvent("show", [this.tip, b]);
        },
        hide: function(b) {
            if (!this.tip) {
                document.id(this);
            }
            this.fireEvent("hide", [this.tip, b]);
        }
    });
})();
var Spinner = new Class({
    Extends: Mask,
    options: {
        "class": "spinner",
        containerPosition: {},
        content: {
            "class": "spinner-content"
        },
        messageContainer: {
            "class": "spinner-msg"
        },
        img: {
            "class": "spinner-img"
        },
        fxOptions: {
            link: "chain"
        }
    },
    initialize: function() {
        this.parent.apply(this, arguments);
        this.target.store("spinner", this);
        var a = function() {
            this.active = false;
        }.bind(this);
        this.addEvents({
            hide: a,
            show: a
        });
    },
    render: function() {
        this.parent();
        this.element.set("id", this.options.id || "spinner-" + $time());
        this.content = document.id(this.options.content) || new Element("div", this.options.content);
        this.content.inject(this.element);
        if (this.options.message) {
            this.msg = document.id(this.options.message) || new Element("p", this.options.messageContainer).appendText(this.options.message);
            this.msg.inject(this.content);
        }
        if (this.options.img) {
            this.img = document.id(this.options.img) || new Element("div", this.options.img);
            this.img.inject(this.content);
        }
        this.element.set("tween", this.options.fxOptions);
    },
    show: function(a) {
        if (this.active) {
            return this.chain(this.show.bind(this));
        }
        if (!this.hidden) {
            this.callChain.delay(20, this);
            return this;
        }
        this.active = true;
        return this.parent(a);
    },
    showMask: function(a) {
        var b = function() {
            this.content.position($merge({
                relativeTo: this.element
            }, this.options.containerPosition));
        }.bind(this);
        if (a) {
            this.parent();
            b();
        } else {
            this.element.setStyles({
                display: "block",
                opacity: 0
            }).tween("opacity", this.options.style.opacity || 0.9);
            b();
            this.hidden = false;
            this.fireEvent("show");
            this.callChain();
        }
    },
    hide: function(a) {
        if (this.active) {
            return this.chain(this.hide.bind(this));
        }
        if (this.hidden) {
            this.callChain.delay(20, this);
            return this;
        }
        this.active = true;
        return this.parent(a);
    },
    hideMask: function(a) {
        if (a) {
            return this.parent();
        }
        this.element.tween("opacity", 0).get("tween").chain(function() {
            this.element.setStyle("display", "none");
            this.hidden = true;
            this.fireEvent("hide");
            this.callChain();
        }.bind(this));
    },
    destroy: function() {
        this.content.destroy();
        this.parent();
        this.target.eliminate("spinner");
    }
});
Spinner.implement(new Chain);
Request = Class.refactor(Request, {
    options: {
        useSpinner: false,
        spinnerOptions: {},
        spinnerTarget: false
    },
    initialize: function(a) {
        this._send = this.send;
        this.send = function(b) {
            var c = this.getSpinner();
            if (c) {
                c.chain(this._send.bind(this, b)).show();
            } else {
                this._send(b);
            }
            return this;
        };
        this.previous(a);
    },
    getSpinner: function() {
        if (!this.spinner) {
            var a = document.id(this.options.spinnerTarget) || document.id(this.options.update);
            if (this.options.useSpinner && a) {
                this.spinner = a.get("spinner", this.options.spinnerOptions);
                ["onComplete", "onException", "onCancel"].each(function(b) {
                    this.addEvent(b, this.spinner.hide.bind(this.spinner));
                }, this);
            }
        }
        return this.spinner;
    }
});
Element.Properties.spinner = {
    set: function(a) {
        var b = this.retrieve("spinner");
        return this.eliminate("spinner").store("spinner:options", a);
    },
    get: function(a) {
        if (a ||!this.retrieve("spinner")) {
            if (this.retrieve("spinner")) {
                this.retrieve("spinner").destroy();
            }
            if (a ||!this.retrieve("spinner:options")) {
                this.set("spinner", a);
            }
            new Spinner(this, this.retrieve("spinner:options"));
        }
        return this.retrieve("spinner");
    }
};
Element.implement({
    spin: function(a) {
        this.get("spinner", a).show();
        return this;
    },
    unspin: function() {
        var a = Array.link(arguments, {
            options: Object.type,
            callback: Function.type
        });
        this.get("spinner", a.options).hide(a.callback);
        return this;
    }
});
MooTools.lang.set("en-US", "Date", {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dateOrder: ["month", "date", "year"],
    shortDate: "%m/%d/%Y",
    shortTime: "%I:%M%p",
    AM: "AM",
    PM: "PM",
    ordinal: function(a) {
        return (a > 3 && a < 21) ? "th" : ["th", "st", "nd", "rd", "th"][Math.min(a%10, 4)];
    },
    lessThanMinuteAgo: "less than a minute ago",
    minuteAgo: "about a minute ago",
    minutesAgo: "{delta} minutes ago",
    hourAgo: "about an hour ago",
    hoursAgo: "about {delta} hours ago",
    dayAgo: "1 day ago",
    daysAgo: "{delta} days ago",
    weekAgo: "1 week ago",
    weeksAgo: "{delta} weeks ago",
    monthAgo: "1 month ago",
    monthsAgo: "{delta} months ago",
    yearAgo: "1 year ago",
    yearsAgo: "{delta} years ago",
    lessThanMinuteUntil: "less than a minute from now",
    minuteUntil: "about a minute from now",
    minutesUntil: "{delta} minutes from now",
    hourUntil: "about an hour from now",
    hoursUntil: "about {delta} hours from now",
    dayUntil: "1 day from now",
    daysUntil: "{delta} days from now",
    weekUntil: "1 week from now",
    weeksUntil: "{delta} weeks from now",
    monthUntil: "1 month from now",
    monthsUntil: "{delta} months from now",
    yearUntil: "1 year from now",
    yearsUntil: "{delta} years from now"
});
MooTools.lang.set("en-US", "Form.Validator", {
    required: "This field is required.",
    minLength: "Please enter at least {minLength} characters (you entered {length} characters).",
    maxLength: "Please enter no more than {maxLength} characters (you entered {length} characters).",
    integer: "Please enter an integer in this field. Numbers with decimals (e.g. 1.25) are not permitted.",
    numeric: 'Please enter only numeric values in this field (i.e. "1" or "1.1" or "-1" or "-1.1").',
    digits: "Please use numbers and punctuation only in this field (for example, a phone number with dashes or dots is permitted).",
    alpha: "Please use only letters (a-z) within this field. No spaces or other characters are allowed.",
    alphanum: "Please use only letters (a-z) or numbers (0-9) in this field. No spaces or other characters are allowed.",
    dateSuchAs: "Please enter a valid date such as {date}",
    dateInFormatMDY: 'Please enter a valid date such as MM/DD/YYYY (i.e. "12/31/1999")',
    email: 'Please enter a valid email address. For example "fred@domain.com".',
    url: "Please enter a valid URL such as http://www.google.com.",
    currencyDollar: "Please enter a valid $ amount. For example $100.00 .",
    oneRequired: "Please enter something for at least one of these inputs.",
    errorPrefix: "Error: ",
    warningPrefix: "Warning: ",
    noSpace: "There can be no spaces in this input.",
    reqChkByNode: "No items are selected.",
    requiredChk: "This field is required.",
    reqChkByName: "Please select a {label}.",
    match: "This field needs to match the {matchName} field",
    startDate: "the start date",
    endDate: "the end date",
    currendDate: "the current date",
    afterDate: "The date should be the same or after {label}.",
    beforeDate: "The date should be the same or before {label}.",
    startMonth: "Please select a start month",
    sameMonth: "These two dates must be in the same month - you must change one or the other.",
    creditcard: "The credit card number entered is invalid. Please check the number and try again. {length} digits entered."
});
MooTools.lang.set("ca-CA", "Date", {
    months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juli", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
    days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d/%m/%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: "",
    lessThanMinuteAgo: "fa menys d`un minut",
    minuteAgo: "fa un minut",
    minutesAgo: "fa {delta} minuts",
    hourAgo: "fa un hora",
    hoursAgo: "fa unes {delta} hores",
    dayAgo: "fa un dia",
    daysAgo: "fa {delta} dies",
    lessThanMinuteUntil: "menys d`un minut des d`ara",
    minuteUntil: "un minut des d`ara",
    minutesUntil: "{delta} minuts des d`ara",
    hourUntil: "un hora des d`ara",
    hoursUntil: "unes {delta} hores des d`ara",
    dayUntil: "1 dia des d`ara",
    daysUntil: "{delta} dies des d`ara"
});
(function() {
    var a = function(f, d, c, b) {
        if (f == 1) {
            return d;
        } else {
            if (f == 2 || f == 3 || f == 4) {
                return c;
            } else {
                return b;
            }
        }
    };
    MooTools.lang.set("cs-CZ", "Date", {
        months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        dateOrder: ["date", "month", "year"],
        shortDate: "%d.%m.%Y",
        shortTime: "%H:%M",
        AM: "dop.",
        PM: "odp.",
        ordinal: ".",
        lessThanMinuteAgo: "před chvílí",
        minuteAgo: "přibližně před minutou",
        minutesAgo: function(b) {
            return "před {delta} " + a(b, "minutou", "minutami", "minutami");
        },
        hourAgo: "přibližně před hodinou",
        hoursAgo: function(b) {
            return "před {delta} " + a(b, "hodinou", "hodinami", "hodinami");
        },
        dayAgo: "před dnem",
        daysAgo: function(b) {
            return "před {delta} " + a(b, "dnem", "dny", "dny");
        },
        weekAgo: "před týdnem",
        weeksAgo: function(b) {
            return "před {delta} " + a(b, "týdnem", "týdny", "týdny");
        },
        monthAgo: "před měsícem",
        monthsAgo: function(b) {
            return "před {delta} " + a(b, "měsícem", "měsíci", "měsíci");
        },
        yearAgo: "před rokem",
        yearsAgo: function(b) {
            return "před {delta} " + a(b, "rokem", "lety", "lety");
        },
        lessThanMinuteUntil: "za chvíli",
        minuteUntil: "přibližně za minutu",
        minutesUntil: function(b) {
            return "za {delta} " + a(b, "minutu", "minuty", "minut");
        },
        hourUntil: "přibližně za hodinu",
        hoursUntil: function(b) {
            return "za {delta} " + a(b, "hodinu", "hodiny", "hodin");
        },
        dayUntil: "za den",
        daysUntil: function(b) {
            return "za {delta} " + a(b, "den", "dny", "dnů");
        },
        weekUntil: "za týden",
        weeksUntil: function(b) {
            return "za {delta} " + a(b, "týden", "týdny", "týdnů");
        },
        monthUntil: "za měsíc",
        monthsUntil: function(b) {
            return "za {delta} " + a(b, "měsíc", "měsíce", "měsíců");
        },
        yearUntil: "za rok",
        yearsUntil: function(b) {
            return "za {delta} " + a(b, "rok", "roky", "let");
        }
    });
})();
MooTools.lang.set("da-DK", "Date", {
    months: ["Januar", "Februa", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
    days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d-%m-%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: ".",
    lessThanMinuteAgo: "mindre end et minut siden",
    minuteAgo: "omkring et minut siden",
    minutesAgo: "{delta} minutter siden",
    hourAgo: "omkring en time siden",
    hoursAgo: "omkring {delta} timer siden",
    dayAgo: "1 dag siden",
    daysAgo: "{delta} dage siden",
    weekAgo: "1 uge siden",
    weeksAgo: "{delta} uger siden",
    monthAgo: "1 måned siden",
    monthsAgo: "{delta} måneder siden",
    yearAgo: "1 år siden",
    yearsAgo: "{delta} år siden",
    lessThanMinuteUntil: "mindre end et minut fra nu",
    minuteUntil: "omkring et minut fra nu",
    minutesUntil: "{delta} minutter fra nu",
    hourUntil: "omkring en time fra nu",
    hoursUntil: "omkring {delta} timer fra nu",
    dayUntil: "1 dag fra nu",
    daysUntil: "{delta} dage fra nu",
    weekUntil: "1 uge fra nu",
    weeksUntil: "{delta} uger fra nu",
    monthUntil: "1 måned fra nu",
    monthsUntil: "{delta} måneder fra nu",
    yearUntil: "1 år fra nu",
    yearsUntil: "{delta} år fra nu"
});
MooTools.lang.set("nl-NL", "Date", {
    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d-%m-%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: "e",
    lessThanMinuteAgo: "minder dan een minuut geleden",
    minuteAgo: "ongeveer een minuut geleden",
    minutesAgo: "{delta} minuten geleden",
    hourAgo: "ongeveer een uur geleden",
    hoursAgo: "ongeveer {delta} uur geleden",
    dayAgo: "een dag geleden",
    daysAgo: "{delta} dagen geleden",
    weekAgo: "een week geleden",
    weeksAgo: "{delta} weken geleden",
    monthAgo: "een maand geleden",
    monthsAgo: "{delta} maanden geleden",
    yearAgo: "een jaar geleden",
    yearsAgo: "{delta} jaar geleden",
    lessThanMinuteUntil: "over minder dan een minuut",
    minuteUntil: "over ongeveer een minuut",
    minutesUntil: "over {delta} minuten",
    hourUntil: "over ongeveer een uur",
    hoursUntil: "over {delta} uur",
    dayUntil: "over ongeveer een dag",
    daysUntil: "over {delta} dagen",
    weekUntil: "over een week",
    weeksUntil: "over {delta} weken",
    monthUntil: "over een maand",
    monthsUntil: "over {delta} maanden",
    yearUntil: "over een jaar",
    yearsUntil: "over {delta} jaar"
});
MooTools.lang.set("en-GB", "Date", {
    dateOrder: ["date", "month", "year"],
    shortDate: "%d/%m/%Y",
    shortTime: "%H:%M"
}).set("cascade", ["en-US"]);
MooTools.lang.set("et-EE", "Date", {
    months: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
    days: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
    dateOrder: ["month", "date", "year"],
    shortDate: "%m.%d.%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: "",
    lessThanMinuteAgo: "vähem kui minut aega tagasi",
    minuteAgo: "umbes minut aega tagasi",
    minutesAgo: "{delta} minutit tagasi",
    hourAgo: "umbes tund aega tagasi",
    hoursAgo: "umbes {delta} tundi tagasi",
    dayAgo: "1 päev tagasi",
    daysAgo: "{delta} päeva tagasi",
    weekAgo: "1 nädal tagasi",
    weeksAgo: "{delta} nädalat tagasi",
    monthAgo: "1 kuu tagasi",
    monthsAgo: "{delta} kuud tagasi",
    yearAgo: "1 aasta tagasi",
    yearsAgo: "{delta} aastat tagasi",
    lessThanMinuteUntil: "vähem kui minuti aja pärast",
    minuteUntil: "umbes minuti aja pärast",
    minutesUntil: "{delta} minuti pärast",
    hourUntil: "umbes tunni aja pärast",
    hoursUntil: "umbes {delta} tunni pärast",
    dayUntil: "1 päeva pärast",
    daysUntil: "{delta} päeva pärast",
    weekUntil: "1 nädala pärast",
    weeksUntil: "{delta} nädala pärast",
    monthUntil: "1 kuu pärast",
    monthsUntil: "{delta} kuu pärast",
    yearUntil: "1 aasta pärast",
    yearsUntil: "{delta} aasta pärast"
});
MooTools.lang.set("de-DE", "Date", {
    months: ["Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d.%m.%Y",
    shortTime: "%H:%M",
    AM: "vormittags",
    PM: "nachmittags",
    ordinal: ".",
    lessThanMinuteAgo: "Vor weniger als einer Minute",
    minuteAgo: "Vor einer Minute",
    minutesAgo: "Vor {delta} Minuten",
    hourAgo: "Vor einer Stunde",
    hoursAgo: "Vor {delta} Stunden",
    dayAgo: "Vor einem Tag",
    daysAgo: "Vor {delta} Tagen",
    weekAgo: "Vor einer Woche",
    weeksAgo: "Vor {delta} Wochen",
    monthAgo: "Vor einem Monat",
    monthsAgo: "Vor {delta} Monaten",
    yearAgo: "Vor einem Jahr",
    yearsAgo: "Vor {delta} Jahren",
    lessThanMinuteUntil: "In weniger als einer Minute",
    minuteUntil: "In einer Minute",
    minutesUntil: "In {delta} Minuten",
    hourUntil: "In ca. einer Stunde",
    hoursUntil: "In ca. {delta} Stunden",
    dayUntil: "In einem Tag",
    daysUntil: "In {delta} Tagen",
    weekUntil: "In einer Woche",
    weeksUntil: "In {delta} Wochen",
    monthUntil: "In einem Monat",
    monthsUntil: "In {delta} Monaten",
    yearUntil: "In einem Jahr",
    yearsUntil: "In {delta} Jahren"
});
MooTools.lang.set("fr-FR", "Date", {
    months: ["Janvier", "F&eacute;vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao&ucirc;t", "Septembre", "Octobre", "Novembre", "D&eacute;cembre"],
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d/%m/%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: function(a) {
        return (a > 1) ? "" : "er";
    },
    lessThanMinuteAgo: "il y a moins d'une minute",
    minuteAgo: "il y a une minute",
    minutesAgo: "il y a {delta} minutes",
    hourAgo: "il y a une heure",
    hoursAgo: "il y a {delta} heures",
    dayAgo: "il y a un jour",
    daysAgo: "il y a {delta} jours",
    weekAgo: "il y a une semaine",
    weeksAgo: "il y a {delta} semaines",
    monthAgo: "il y a 1 mois",
    monthsAgo: "il y a {delta} mois",
    yearthAgo: "il y a 1 an",
    yearsAgo: "il y a {delta} ans",
    lessThanMinuteUntil: "dans moins d'une minute",
    minuteUntil: "dans une minute",
    minutesUntil: "dans {delta} minutes",
    hourUntil: "dans une heure",
    hoursUntil: "dans {delta} heures",
    dayUntil: "dans un jour",
    daysUntil: "dans {delta} jours",
    weekUntil: "dans 1 semaine",
    weeksUntil: "dans {delta} semaines",
    monthUntil: "dans 1 mois",
    monthsUntil: "dans {delta} mois",
    yearUntil: "dans 1 an",
    yearsUntil: "dans {delta} ans"
});
MooTools.lang.set("it-IT", "Date", {
    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    days: ["Domenica", "Luned&igrave;", "Marted&igrave;", "Mercoled&igrave;", "Gioved&igrave;", "Venerd&igrave;", "Sabato"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d/%m/%Y",
    shortTime: "%H.%M",
    AM: "AM",
    PM: "PM",
    ordinal: "&ordm;",
    lessThanMinuteAgo: "meno di un minuto fa",
    minuteAgo: "circa un minuto fa",
    minutesAgo: "circa {delta} minuti fa",
    hourAgo: "circa un'ora fa",
    hoursAgo: "circa {delta} ore fa",
    dayAgo: "circa 1 giorno fa",
    daysAgo: "circa {delta} giorni fa",
    lessThanMinuteUntil: "tra meno di un minuto",
    minuteUntil: "tra circa un minuto",
    minutesUntil: "tra circa {delta} minuti",
    hourUntil: "tra circa un'ora",
    hoursUntil: "tra circa {delta} ore",
    dayUntil: "tra circa un giorno",
    daysUntil: "tra circa {delta} giorni"
});
MooTools.lang.set("pl-PL", "Date", {
    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    dateOrder: ["year", "month", "date"],
    shortDate: "%Y-%m-%d",
    shortTime: "%H:%M",
    AM: "nad ranem",
    PM: "po południu",
    ordinal: function(a) {
        return (a > 3 && a < 21) ? "ty" : ["ty", "szy", "gi", "ci", "ty"][Math.min(a%10, 4)];
    },
    lessThanMinuteAgo: "mniej niż minute temu",
    minuteAgo: "około minutę temu",
    minutesAgo: "{delta} minut temu",
    hourAgo: "około godzinę temu",
    hoursAgo: "około {delta} godzin temu",
    dayAgo: "Wczoraj",
    daysAgo: "{delta} dni temu",
    lessThanMinuteUntil: "za niecałą minutę",
    minuteUntil: "za około minutę",
    minutesUntil: "za {delta} minut",
    hourUntil: "za około godzinę",
    hoursUntil: "za około {delta} godzin",
    dayUntil: "za 1 dzień",
    daysUntil: "za {delta} dni"
});
MooTools.lang.set("pt-BR", "Date", {
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d/%m/%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: "&ordm;",
    lessThanMinuteAgo: "há menos de um minuto",
    minuteAgo: "há cerca de um minuto",
    minutesAgo: "há {delta} minutos",
    hourAgo: "há cerca de uma hora",
    hoursAgo: "há cerca de {delta} horas",
    dayAgo: "há um dia",
    daysAgo: "há {delta} dias",
    weekAgo: "há uma semana",
    weeksAgo: "há {delta} semanas",
    monthAgo: "há um mês",
    monthsAgo: "há {delta} meses",
    yearAgo: "há um ano",
    yearsAgo: "há {delta} anos",
    lessThanMinuteUntil: "em menos de um minuto",
    minuteUntil: "em um minuto",
    minutesUntil: "em {delta} minutos",
    hourUntil: "em uma hora",
    hoursUntil: "em {delta} horas",
    dayUntil: "em um dia",
    daysUntil: "em {delta} dias",
    weekUntil: "em uma semana",
    weeksUntil: "em {delta} semanas",
    monthUntil: "em um mês",
    monthsUntil: "em {delta} meses",
    yearUntil: "em um ano",
    yearsUntil: "em {delta} anos"
});
MooTools.lang.set("es-ES", "Date", {
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    dateOrder: ["date", "month", "year"],
    shortDate: "%d/%m/%Y",
    shortTime: "%H:%M",
    AM: "AM",
    PM: "PM",
    ordinal: "",
    lessThanMinuteAgo: "hace menos de un minuto",
    minuteAgo: "hace un minuto",
    minutesAgo: "hace {delta} minutos",
    hourAgo: "hace una hora",
    hoursAgo: "hace unas {delta} horas",
    dayAgo: "hace un día",
    daysAgo: "hace {delta} días",
    weekAgo: "hace una semana",
    weeksAgo: "hace unas {delta} semanas",
    monthAgo: "hace un mes",
    monthsAgo: "hace {delta} meses",
    yearAgo: "hace un año",
    yearsAgo: "hace {delta} años",
    lessThanMinuteUntil: "menos de un minuto desde ahora",
    minuteUntil: "un minuto desde ahora",
    minutesUntil: "{delta} minutos desde ahora",
    hourUntil: "una hora desde ahora",
    hoursUntil: "unas {delta} horas desde ahora",
    dayUntil: "un día desde ahora",
    daysUntil: "{delta} días desde ahora",
    weekUntil: "una semana desde ahora",
    weeksUntil: "unas {delta} semanas desde ahora",
    monthUntil: "un mes desde ahora",
    monthsUntil: "{delta} meses desde ahora",
    yearUntil: "un año desde ahora",
    yearsUntil: "{delta} años desde ahora"
});
MooTools.lang.set("sv-SE", "Date", {
    months: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
    days: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
    dateOrder: ["year", "month", "date"],
    shortDate: "%Y-%m-%d",
    shortTime: "%H:%M",
    AM: "",
    PM: "",
    ordinal: "",
    lessThanMinuteAgo: "mindre än en minut sedan",
    minuteAgo: "ungefär en minut sedan",
    minutesAgo: "{delta} minuter sedan",
    hourAgo: "ungefär en timme sedan",
    hoursAgo: "ungefär {delta} timmar sedan",
    dayAgo: "1 dag sedan",
    daysAgo: "{delta} dagar sedan",
    lessThanMinuteUntil: "mindre än en minut sedan",
    minuteUntil: "ungefär en minut sedan",
    minutesUntil: "{delta} minuter sedan",
    hourUntil: "ungefär en timme sedan",
    hoursUntil: "ungefär {delta} timmar sedan",
    dayUntil: "1 dag sedan",
    daysUntil: "{delta} dagar sedan"
});
MooTools.lang.set("ca-CA", "Form.Validator", {
    required: "Aquest camp es obligatori.",
    minLength: "Per favor introdueix al menys {minLength} caracters (has introduit {length} caracters).",
    maxLength: "Per favor introdueix no mes de {maxLength} caracters (has introduit {length} caracters).",
    integer: "Per favor introdueix un nombre enter en aquest camp. Nombres amb decimals (p.e. 1,25) no estan permesos.",
    numeric: 'Per favor introdueix sols valors numerics en aquest camp (p.e. "1" o "1,1" o "-1" o "-1,1").',
    digits: "Per favor usa sols numeros i puntuacio en aquest camp (per exemple, un nombre de telefon amb guions i punts no esta permes).",
    alpha: "Per favor utilitza lletres nomes (a-z) en aquest camp. No s´admiteixen espais ni altres caracters.",
    alphanum: "Per favor, utilitza nomes lletres (a-z) o numeros (0-9) en aquest camp. No s´admiteixen espais ni altres caracters.",
    dateSuchAs: "Per favor introdueix una data valida com {date}",
    dateInFormatMDY: 'Per favor introdueix una data valida com DD/MM/YYYY (p.e. "31/12/1999")',
    email: 'Per favor, introdueix una adreça de correu electronic valida. Per exemple,  "fred@domain.com".',
    url: "Per favor introdueix una URL valida com http://www.google.com.",
    currencyDollar: "Per favor introdueix una quantitat valida de €. Per exemple €100,00 .",
    oneRequired: "Per favor introdueix alguna cosa per al menys una d´aquestes entrades.",
    errorPrefix: "Error: ",
    warningPrefix: "Avis: ",
    noSpace: "No poden haver espais en aquesta entrada.",
    reqChkByNode: "No hi han elements seleccionats.",
    requiredChk: "Aquest camp es obligatori.",
    reqChkByName: "Per favor selecciona una {label}.",
    match: "Aquest camp necessita coincidir amb el camp {matchName}",
    startDate: "la data de inici",
    endDate: "la data de fi",
    currendDate: "la data actual",
    afterDate: "La data deu ser igual o posterior a {label}.",
    beforeDate: "La data deu ser igual o anterior a {label}.",
    startMonth: "Per favor selecciona un mes d´orige",
    sameMonth: "Aquestes dos dates deuen estar dins del mateix mes - deus canviar una o altra."
});
MooTools.lang.set("cs-CZ", "Form.Validator", {
    required: "Tato položka je povinná.",
    minLength: "Zadejte prosím alespoň {minLength} znaků (napsáno {length} znaků).",
    maxLength: "Zadejte prosím méně než {maxLength} znaků (nápsáno {length} znaků).",
    integer: "Zadejte prosím celé číslo. Desetinná čísla (např. 1.25) nejsou povolena.",
    numeric: 'Zadejte jen číselné hodnoty  (tj. "1" nebo "1.1" nebo "-1" nebo "-1.1").',
    digits: "Zadejte prosím pouze čísla a interpunkční znaménka(například telefonní číslo s pomlčkami nebo tečkami je povoleno).",
    alpha: "Zadejte prosím pouze písmena (a-z). Mezery nebo jiné znaky nejsou povoleny.",
    alphanum: "Zadejte prosím pouze písmena (a-z) nebo číslice (0-9). Mezery nebo jiné znaky nejsou povoleny.",
    dateSuchAs: "Zadejte prosím platné datum jako {date}",
    dateInFormatMDY: 'Zadejte prosím platné datum jako MM / DD / RRRR (tj. "12/31/1999")',
    email: 'Zadejte prosím platnou e-mailovou adresu. Například "fred@domain.com".',
    url: "Zadejte prosím platnou URL adresu jako http://www.google.com.",
    currencyDollar: "Zadejte prosím platnou částku. Například $100.00.",
    oneRequired: "Zadejte prosím alespoň jednu hodnotu pro tyto položky.",
    errorPrefix: "Chyba: ",
    warningPrefix: "Upozornění: ",
    noSpace: "V této položce nejsou povoleny mezery",
    reqChkByNode: "Nejsou vybrány žádné položky.",
    requiredChk: "Tato položka je vyžadována.",
    reqChkByName: "Prosím vyberte {label}.",
    match: "Tato položka se musí shodovat s položkou {matchName}",
    startDate: "datum zahájení",
    endDate: "datum ukončení",
    currendDate: "aktuální datum",
    afterDate: "Datum by mělo být stejné nebo větší než {label}.",
    beforeDate: "Datum by mělo být stejné nebo menší než {label}.",
    startMonth: "Vyberte počáteční měsíc.",
    sameMonth: "Tyto dva datumy musí být ve stejném měsíci - změňte jeden z nich.",
    creditcard: "Zadané číslo kreditní karty je neplatné. Prosím opravte ho. Bylo zadáno {length} čísel."
});
MooTools.lang.set("nl-NL", "Form.Validator", {
    required: "Dit veld is verplicht.",
    minLength: "Vul minimaal {minLength} karakters in (je hebt {length} karakters ingevoerd).",
    maxLength: "Vul niet meer dan {maxLength} karakters in (je hebt {length} karakters ingevoerd).",
    integer: "Vul een getal in. Getallen met decimalen (bijvoorbeeld 1.25) zijn niet toegestaan.",
    numeric: 'Vul alleen numerieke waarden in (bijvoorbeeld "1" of "1.1" of "-1" of "-1.1").',
    digits: "Vul alleen nummers en leestekens in (bijvoorbeeld een telefoonnummer met streepjes is toegestaan).",
    alpha: "Vul alleen letters in (a-z). Spaties en andere karakters zijn niet toegestaan.",
    alphanum: "Vul alleen letters (a-z) of nummers (0-9) in. Spaties en andere karakters zijn niet toegestaan.",
    dateSuchAs: "Vul een geldige datum in, zoals {date}",
    dateInFormatMDY: 'Vul een geldige datum, in het formaat MM/DD/YYYY (bijvoorbeeld "12/31/1999")',
    email: 'Vul een geldig e-mailadres in. Bijvoorbeeld "fred@domein.nl".',
    url: "Vul een geldige URL in, zoals http://www.google.nl.",
    currencyDollar: "Vul een geldig $ bedrag in. Bijvoorbeeld $100.00 .",
    oneRequired: "Vul iets in bij in ieder geval een van deze velden.",
    warningPrefix: "Waarschuwing: ",
    errorPrefix: "Fout: ",
    noSpace: "Spaties zijn niet toegestaan in dit veld.",
    reqChkByNode: "Er zijn geen items geselecteerd.",
    requiredChk: "Dit veld is verplicht.",
    reqChkByName: "Selecteer een {label}.",
    match: "Dit veld moet overeen komen met het {matchName} veld",
    startDate: "de begin datum",
    endDate: "de eind datum",
    currendDate: "de huidige datum",
    afterDate: "De datum moet hetzelfde of na {label} zijn.",
    beforeDate: "De datum moet hetzelfde of voor {label} zijn.",
    startMonth: "Selecteer een begin maand",
    sameMonth: "Deze twee data moeten in dezelfde maand zijn - u moet een van beide aanpassen.",
    creditcard: "Het ingevulde creditcard nummer is niet geldig. Controleer het nummer en probeer opnieuw. {length} getallen ingevuld."
});
MooTools.lang.set("et-EE", "Form.Validator", {
    required: "Väli peab olema täidetud.",
    minLength: "Palun sisestage vähemalt {minLength} tähte (te sisestasite {length} tähte).",
    maxLength: "Palun ärge sisestage rohkem kui {maxLength} tähte (te sisestasite {length} tähte).",
    integer: "Palun sisestage väljale täisarv. Kümnendarvud (näiteks 1.25) ei ole lubatud.",
    numeric: 'Palun sisestage ainult numbreid väljale (näiteks "1", "1.1", "-1" või "-1.1").',
    digits: "Palun kasutage ainult numbreid ja kirjavahemärke (telefoninumbri sisestamisel on lubatud kasutada kriipse ja punkte).",
    alpha: "Palun kasutage ainult tähti (a-z). Tühikud ja teised sümbolid on keelatud.",
    alphanum: "Palun kasutage ainult tähti (a-z) või numbreid (0-9). Tühikud ja teised sümbolid on keelatud.",
    dateSuchAs: "Palun sisestage kehtiv kuupäev kujul {date}",
    dateInFormatMDY: 'Palun sisestage kehtiv kuupäev kujul MM.DD.YYYY (näiteks: "12.31.1999").',
    email: 'Palun sisestage kehtiv e-maili aadress (näiteks: "fred@domain.com").',
    url: "Palun sisestage kehtiv URL (näiteks: http://www.google.com).",
    currencyDollar: "Palun sisestage kehtiv $ summa (näiteks: $100.00).",
    oneRequired: "Palun sisestage midagi vähemalt ühele antud väljadest.",
    errorPrefix: "Viga: ",
    warningPrefix: "Hoiatus: ",
    noSpace: "Väli ei tohi sisaldada tühikuid.",
    reqChkByNode: "Ükski väljadest pole valitud.",
    requiredChk: "Välja täitmine on vajalik.",
    reqChkByName: "Palun valige üks {label}.",
    match: "Väli peab sobima {matchName} väljaga",
    startDate: "algkuupäev",
    endDate: "lõppkuupäev",
    currendDate: "praegune kuupäev",
    afterDate: "Kuupäev peab olema võrdne või pärast {label}.",
    beforeDate: "Kuupäev peab olema võrdne või enne {label}.",
    startMonth: "Palun valige algkuupäev.",
    sameMonth: "Antud kaks kuupäeva peavad olema samas kuus - peate muutma ühte kuupäeva."
});
MooTools.lang.set("de-DE", "Form.Validator", {
    required: "Dieses Eingabefeld muss ausgef&uuml;llt werden.",
    minLength: "Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben nur {length} Zeichen eingegeben).",
    maxLength: "Geben Sie bitte nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).",
    integer: "Geben Sie in diesem Eingabefeld bitte eine ganze Zahl ein. Dezimalzahlen (z.B. &quot;1.25&quot;) sind nicht erlaubt.",
    numeric: "Geben Sie in diesem Eingabefeld bitte nur Zahlenwerte (z.B. &quot;1&quot;, &quot;1.1&quot;, &quot;-1&quot; oder &quot;-1.1&quot;) ein.",
    digits: "Geben Sie in diesem Eingabefeld bitte nur Zahlen und Satzzeichen ein (z.B. eine Telefonnummer mit Bindestrichen und Punkten ist erlaubt).",
    alpha: "Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) ein. Leerzeichen und andere Zeichen sind nicht erlaubt.",
    alphanum: "Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) und Zahlen (0-9) ein. Leerzeichen oder andere Zeichen sind nicht erlaubt.",
    dateSuchAs: "Geben Sie bitte ein g&uuml;ltiges Datum ein (z.B. &quot;{date}&quot;).",
    dateInFormatMDY: "Geben Sie bitte ein g&uuml;ltiges Datum im Format TT.MM.JJJJ ein (z.B. &quot;31.12.1999&quot;).",
    email: "Geben Sie bitte eine g&uuml;ltige E-Mail-Adresse ein (z.B. &quot;max@mustermann.de&quot;).",
    url: "Geben Sie bitte eine g&uuml;ltige URL ein (z.B. &quot;http://www.google.de&quot;).",
    currencyDollar: "Geben Sie bitte einen g&uuml;ltigen Betrag in EURO ein (z.B. 100.00&#8364;).",
    oneRequired: "Bitte f&uuml;llen Sie mindestens ein Eingabefeld aus.",
    errorPrefix: "Fehler: ",
    warningPrefix: "Warnung: ",
    noSpace: "Es darf kein Leerzeichen in diesem Eingabefeld sein.",
    reqChkByNode: "Es wurden keine Elemente gew&auml;hlt.",
    requiredChk: "Dieses Feld muss ausgef&uuml;llt werden.",
    reqChkByName: "Bitte w&auml;hlen Sie ein {label}.",
    match: "Dieses Eingabefeld muss mit dem {matchName} Eingabefeld &uuml;bereinstimmen.",
    startDate: "Das Anfangsdatum",
    endDate: "Das Enddatum",
    currendDate: "Das aktuelle Datum",
    afterDate: "Das Datum sollte zur gleichen Zeit oder sp&auml;ter sein als {label}.",
    beforeDate: "Das Datum sollte zur gleichen Zeit oder fr&uuml;her sein als {label}.",
    startMonth: "W&auml;hlen Sie bitte einen Anfangsmonat",
    sameMonth: "Diese zwei Datumsangaben m&uuml;ssen im selben Monat sein - Sie m&uuml;ssen eines von beiden ver&auml;ndern.",
    creditcard: "Die eingegebene Kreditkartennummer ist ung&uuml;ltig. Bitte &uuml;berpr&uuml;fen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben."
});
MooTools.lang.set("fr-FR", "Form.Validator", {
    required: "Ce champ est obligatoire.",
    minLength: "Veuillez saisir un minimum de {minLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).",
    maxLength: "Veuillez saisir un maximum de {maxLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).",
    integer: 'Veuillez saisir un nombre entier dans ce champ. Les nombres d&eacute;cimaux (ex : "1,25") ne sont pas autoris&eacute;s.',
    numeric: 'Veuillez saisir uniquement des chiffres dans ce champ (ex : "1" ou "1,1" ou "-1" ou "-1,1").',
    digits: "Veuillez saisir uniquement des chiffres et des signes de ponctuation dans ce champ (ex : un num&eacute;ro de t&eacute;l&eacute;phone avec des traits d'union est autoris&eacute;).",
    alpha: "Veuillez saisir uniquement des lettres (a-z) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.",
    alphanum: "Veuillez saisir uniquement des lettres (a-z) ou des chiffres (0-9) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.",
    dateSuchAs: "Veuillez saisir une date correcte comme {date}",
    dateInFormatMDY: 'Veuillez saisir une date correcte, au format JJ/MM/AAAA (ex : "31/11/1999").',
    email: 'Veuillez saisir une adresse de courrier &eacute;lectronique. Par example "fred@domaine.com".',
    url: "Veuillez saisir une URL, comme http://www.google.com.",
    currencyDollar: "Veuillez saisir une quantit&eacute; correcte. Par example 100,00&euro;.",
    oneRequired: "Veuillez s&eacute;lectionner au moins une de ces options.",
    errorPrefix: "Erreur : ",
    warningPrefix: "Attention : ",
    noSpace: "Ce champ n'accepte pas les espaces.",
    reqChkByNode: "Aucun &eacute;l&eacute;ment n'est s&eacute;lectionn&eacute;.",
    requiredChk: "Ce champ est obligatoire.",
    reqChkByName: "Veuillez s&eacute;lectionner un(e) {label}.",
    match: "Ce champ doit correspondre avec le champ {matchName}.",
    startDate: "date de d&eacute;but",
    endDate: "date de fin",
    currendDate: "date actuelle",
    afterDate: "La date doit &ecirc;tre identique ou post&eacute;rieure &agrave; {label}.",
    beforeDate: "La date doit &ecirc;tre identique ou ant&eacute;rieure &agrave; {label}.",
    startMonth: "Veuillez s&eacute;lectionner un mois de d&eacute;but.",
    sameMonth: "Ces deux dates doivent &ecirc;tre dans le m&ecirc;me mois - vous devez en modifier une."
});
MooTools.lang.set("it-IT", "Form.Validator", {
    required: "Il campo &egrave; obbligatorio.",
    minLength: "Inserire almeno {minLength} caratteri (ne sono stati inseriti {length}).",
    maxLength: "Inserire al massimo {maxLength} caratteri (ne sono stati inseriti {length}).",
    integer: "Inserire un numero intero. Non sono consentiti decimali (es.: 1.25).",
    numeric: 'Inserire solo valori numerici (es.: "1" oppure "1.1" oppure "-1" oppure "-1.1").',
    digits: "Inserire solo numeri e caratteri di punteggiatura. Per esempio &egrave; consentito un numero telefonico con trattini o punti.",
    alpha: "Inserire solo lettere (a-z). Non sono consentiti spazi o altri caratteri.",
    alphanum: "Inserire solo lettere (a-z) o numeri (0-9). Non sono consentiti spazi o altri caratteri.",
    dateSuchAs: "Inserire una data valida del tipo {date}",
    dateInFormatMDY: 'Inserire una data valida nel formato MM/GG/AAAA (es.: "12/31/1999")',
    email: 'Inserire un indirizzo email valido. Per esempio "nome@dominio.com".',
    url: 'Inserire un indirizzo valido. Per esempio "http://www.dominio.com".',
    currencyDollar: 'Inserire un importo valido. Per esempio "$100.00".',
    oneRequired: "Completare almeno uno dei campi richiesti.",
    errorPrefix: "Errore: ",
    warningPrefix: "Attenzione: ",
    noSpace: "Non sono consentiti spazi.",
    reqChkByNode: "Nessuna voce selezionata.",
    requiredChk: "Il campo &egrave; obbligatorio.",
    reqChkByName: "Selezionare un(a) {label}.",
    match: "Il valore deve corrispondere al campo {matchName}",
    startDate: "data d'inizio",
    endDate: "data di fine",
    currendDate: "data attuale",
    afterDate: "La data deve corrispondere o essere successiva al {label}.",
    beforeDate: "La data deve corrispondere o essere precedente al {label}.",
    startMonth: "Selezionare un mese d'inizio",
    sameMonth: "Le due date devono essere dello stesso mese - occorre modificarne una."
});
MooTools.lang.set("pl-PL", "Form.Validator", {
    required: "To pole jest wymagane.",
    minLength: "Wymagane jest przynajmniej {minLength} znaków (wpisanych zostało tylko {length}).",
    maxLength: "Dozwolone jest nie więcej niż {maxLength} znaków (wpisanych zostało {length})",
    integer: "To pole wymaga liczb całych. Liczby dziesiętne (np. 1.25) są niedozwolone.",
    numeric: 'Prosimy używać tylko numerycznych wartości w tym polu (np. "1", "1.1", "-1" lub "-1.1").',
    digits: "Prosimy używać liczb oraz zankow punktuacyjnych w typ polu (dla przykładu, przy numerze telefonu myślniki i kropki są dozwolone).",
    alpha: "Prosimy używać tylko liter (a-z) w tym polu. Spacje oraz inne znaki są niedozwolone.",
    alphanum: "Prosimy używać tylko liter (a-z) lub liczb (0-9) w tym polu. Spacje oraz inne znaki są niedozwolone.",
    dateSuchAs: "Prosimy podać prawidłową datę w formacie: {date}",
    dateInFormatMDY: 'Prosimy podać poprawną date w formacie DD.MM.RRRR (i.e. "12.01.2009")',
    email: 'Prosimy podać prawidłowy adres e-mail, np. "jan@domena.pl".',
    url: "Prosimy podać prawidłowy adres URL, np. http://www.google.pl.",
    currencyDollar: "Prosimy podać prawidłową sumę w PLN. Dla przykładu: 100.00 PLN.",
    oneRequired: "Prosimy wypełnić chociaż jedno z pól.",
    errorPrefix: "Błąd: ",
    warningPrefix: "Uwaga: ",
    noSpace: "W tym polu nie mogą znajdować się spacje.",
    reqChkByNode: "Brak zaznaczonych elementów.",
    requiredChk: "To pole jest wymagane.",
    reqChkByName: "Prosimy wybrać z {label}.",
    match: "To pole musi być takie samo jak {matchName}",
    startDate: "data początkowa",
    endDate: "data końcowa",
    currendDate: "aktualna data",
    afterDate: "Podana data poinna być taka sama lub po {label}.",
    beforeDate: "Podana data poinna być taka sama lub przed {label}.",
    startMonth: "Prosimy wybrać początkowy miesiąc.",
    sameMonth: "Te dwie daty muszą być w zakresie tego samego miesiąca - wymagana jest zmiana któregoś z pól."
});
MooTools.lang.set("pt-PT", "Form.Validator", {
    required: "Este campo é necessário.",
    minLength: "Digite pelo menos{minLength} caracteres (comprimento {length} caracteres).",
    maxLength: "Não insira mais de {maxLength} caracteres (comprimento {length} caracteres).",
    integer: "Digite um número inteiro neste domínio. Com números decimais (por exemplo, 1,25), não são permitidas.",
    numeric: 'Digite apenas valores numéricos neste domínio (p.ex., "1" ou "1.1" ou "-1" ou "-1,1").',
    digits: "Por favor, use números e pontuação apenas neste campo (p.ex., um número de telefone com traços ou pontos é permitida).",
    alpha: "Por favor use somente letras (a-z), com nesta área. Não utilize espaços nem outros caracteres são permitidos.",
    alphanum: "Use somente letras (a-z) ou números (0-9) neste campo. Não utilize espaços nem outros caracteres são permitidos.",
    dateSuchAs: "Digite uma data válida, como {date}",
    dateInFormatMDY: 'Digite uma data válida, como DD/MM/YYYY (p.ex. "31/12/1999")',
    email: 'Digite um endereço de email válido. Por exemplo "fred@domain.com".',
    url: "Digite uma URL válida, como http://www.google.com.",
    currencyDollar: "Digite um valor válido $. Por exemplo $ 100,00. ",
    oneRequired: "Digite algo para pelo menos um desses insumos.",
    errorPrefix: "Erro: ",
    warningPrefix: "Aviso: "
});
MooTools.lang.set("pt-BR", "Form.Validator", {
    required: "Este campo é obrigatório.",
    minLength: "Digite pelo menos {minLength} caracteres (tamanho atual: {length}).",
    maxLength: "Não digite mais de {maxLength} caracteres (tamanho atual: {length}).",
    integer: "Por favor digite apenas um número inteiro neste campo. Não são permitidos números decimais (por exemplo, 1,25).",
    numeric: 'Por favor digite apenas valores numéricos neste campo (por exemplo, "1" ou "1.1" ou "-1" ou "-1,1").',
    digits: "Por favor use apenas números e pontuação neste campo (por exemplo, um número de telefone com traços ou pontos é permitido).",
    alpha: "Por favor use somente letras (a-z). Espaço e outros caracteres não são permitidos.",
    alphanum: "Use somente letras (a-z) ou números (0-9) neste campo. Espaço e outros caracteres não são permitidos.",
    dateSuchAs: "Digite uma data válida, como {date}",
    dateInFormatMDY: 'Digite uma data válida, como DD/MM/YYYY (por exemplo, "31/12/1999")',
    email: 'Digite um endereço de email válido. Por exemplo "nome@dominio.com".',
    url: "Digite uma URL válida. Exemplo: http://www.google.com.",
    currencyDollar: "Digite um valor em dinheiro válido. Exemplo: R$100,00 .",
    oneRequired: "Digite algo para pelo menos um desses campos.",
    errorPrefix: "Erro: ",
    warningPrefix: "Aviso: ",
    noSpace: "Não é possível digitar espaços neste campo.",
    reqChkByNode: "Não foi selecionado nenhum item.",
    requiredChk: "Este campo é obrigatório.",
    reqChkByName: "Por favor digite um {label}.",
    match: "Este campo deve ser igual ao campo {matchName}.",
    startDate: "a data inicial",
    endDate: "a data final",
    currendDate: "a data atual",
    afterDate: "A data deve ser igual ou posterior a {label}.",
    beforeDate: "A data deve ser igual ou anterior a {label}.",
    startMonth: "Por favor selecione uma data inicial.",
    sameMonth: "Estas duas datas devem ter o mesmo mês - você deve modificar uma das duas.",
    creditcard: "O número do cartão de crédito informado é inválido. Por favor verifique o valor e tente novamente. {length} números informados."
});
MooTools.lang.set("es-ES", "Form.Validator", {
    required: "Este campo es obligatorio.",
    minLength: "Por favor introduce al menos {minLength} caracteres (has introducido {length} caracteres).",
    maxLength: "Por favor introduce no m&aacute;s de {maxLength} caracteres (has introducido {length} caracteres).",
    integer: "Por favor introduce un n&uacute;mero entero en este campo. N&uacute;meros con decimales (p.e. 1,25) no se permiten.",
    numeric: 'Por favor introduce solo valores num&eacute;ricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").',
    digits: "Por favor usa solo n&uacute;meros y puntuaci&oacute;n en este campo (por ejemplo, un n&uacute;mero de tel&eacute;fono con guiones y puntos no esta permitido).",
    alpha: "Por favor usa letras solo (a-z) en este campo. No se admiten espacios ni otros caracteres.",
    alphanum: "Por favor, usa solo letras (a-z) o n&uacute;meros (0-9) en este campo. No se admiten espacios ni otros caracteres.",
    dateSuchAs: "Por favor introduce una fecha v&aacute;lida como {date}",
    dateInFormatMDY: 'Por favor introduce una fecha v&aacute;lida como DD/MM/YYYY (p.e. "31/12/1999")',
    email: 'Por favor, introduce una direcci&oacute;n de email v&aacute;lida. Por ejemplo,  "fred@domain.com".',
    url: "Por favor introduce una URL v&aacute;lida como http://www.google.com.",
    currencyDollar: "Por favor introduce una cantidad v&aacute;lida de €. Por ejemplo €100,00 .",
    oneRequired: "Por favor introduce algo para por lo menos una de estas entradas.",
    errorPrefix: "Error: ",
    warningPrefix: "Aviso: ",
    noSpace: "No pueden haber espacios en esta entrada.",
    reqChkByNode: "No hay elementos seleccionados.",
    requiredChk: "Este campo es obligatorio.",
    reqChkByName: "Por favor selecciona una {label}.",
    match: "Este campo necesita coincidir con el campo {matchName}",
    startDate: "la fecha de inicio",
    endDate: "la fecha de fin",
    currendDate: "la fecha actual",
    afterDate: "La fecha debe ser igual o posterior a {label}.",
    beforeDate: "La fecha debe ser igual o anterior a {label}.",
    startMonth: "Por favor selecciona un mes de origen",
    sameMonth: "Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra."
});
MooTools.lang.set("sv-SE", "Form.Validator", {
    required: "Fältet är obligatoriskt.",
    minLength: "Ange minst {minLength} tecken (du angav {length} tecken).",
    maxLength: "Ange högst {maxLength} tecken (du angav {length} tecken). ",
    integer: "Ange ett heltal i fältet. Tal med decimaler (t.ex. 1,25) är inte tillåtna.",
    numeric: 'Ange endast numeriska värden i detta fält (t.ex. "1" eller "1.1" eller "-1" eller "-1,1").',
    digits: "Använd endast siffror och skiljetecken i detta fält (till exempel ett telefonnummer med bindestreck tillåtet).",
    alpha: "Använd endast bokstäver (a-ö) i detta fält. Inga mellanslag eller andra tecken är tillåtna.",
    alphanum: "Använd endast bokstäver (a-ö) och siffror (0-9) i detta fält. Inga mellanslag eller andra tecken är tillåtna.",
    dateSuchAs: "Ange ett giltigt datum som t.ex. {date}",
    dateInFormatMDY: 'Ange ett giltigt datum som t.ex. YYYY-MM-DD (i.e. "1999-12-31")',
    email: 'Ange en giltig e-postadress. Till exempel "erik@domain.com".',
    url: "Ange en giltig webbadress som http://www.google.com.",
    currencyDollar: "Ange en giltig belopp. Exempelvis 100,00.",
    oneRequired: "Vänligen ange minst ett av dessa alternativ.",
    errorPrefix: "Fel: ",
    warningPrefix: "Varning: ",
    noSpace: "Det får inte finnas några mellanslag i detta fält.",
    reqChkByNode: "Inga objekt är valda.",
    requiredChk: "Detta är ett obligatoriskt fält.",
    reqChkByName: "Välj en {label}.",
    match: "Detta fält måste matcha {matchName}",
    startDate: "startdatumet",
    endDate: "slutdatum",
    currendDate: "dagens datum",
    afterDate: "Datumet bör vara samma eller senare än {label}.",
    beforeDate: "Datumet bör vara samma eller tidigare än {label}.",
    startMonth: "Välj en start månad",
    sameMonth: "Dessa två datum måste vara i samma månad - du måste ändra det ena eller det andra."
});

