(function() {
    var e = {
        iu: "https://d5nxst8fruw4z.cloudfront.net/atrk.gif?",
        ver: "20130128",
        opts: {
            atrk_acct: "",
            domain: "",
            dynamic: false
        },
        fired: function() {
            if (typeof window._atrk_fired === "undefined") {
                window._atrk_fired = false
            }
            return window._atrk_fired
        },
        params: {
            frame_height: function() {
                return e.frame("innerHeight", "clientHeight")
            },
            frame_width: function() {
                return e.frame("innerWidth", "clientWidth")
            },
            iframe: function() {
                try {
                    return window != window.top ? 1 : 0
                } catch (e) {
                    return 0
                }
            },
            title: function() {
                return this.ue(document ? document.title : "")
            },
            time: function() {
                var e = new Date;
                return e.getTime() + "&time_zone_offset=" + e.getTimezoneOffset()
            },
            screen_params: function() {
                try {
                    return screen.width + "x" + screen.height + "x" + screen.colorDepth
                } catch (e) {}
                return ""
            },
            java_enabled: function() {
                if (navigator && typeof navigator.javaEnabled !== "undefined") {
                    return navigator.javaEnabled() ? "1" : "0"
                }
                return ""
            },
            cookie_enabled: function() {
                if (navigator && typeof navigator.cookieEnabled !== "undefined") {
                    return navigator.cookieEnabled ? "1" : "0"
                }
                return ""
            },
            ref_url: function() {
                return typeof document.referrer === "string" ? e.ue(document.referrer) : ""
            },
            host_url: function() {
                return typeof window.location.href === "string" ? e.ue(window.location.href) : ""
            },
            random_number: function() {
                return Math.round(Math.random() * 21474836747)
            },
            sess_cookie: function() {
                return e.gc("__asc", e.user_cookie_v, "sess_cookie", 30 * 60)
            },
            user_cookie: function() {
                return e.gc("__auc", e.user_cookie_v, "user_cookie", 366 * 24 * 60 * 60)
            },
            dynamic: function() {
                return this.opts.dynamic.toString()
            },
            domain: function() {
                return typeof this.opts.domain === "string" ? this.opts.domain : ""
            },
            account: function() {
                return typeof this.opts.atrk_acct === "string" ? this.opts.atrk_acct : ""
            },
            jsv: function() {
                return this.ver
            },
            user_lang: function() {
                return window.navigator.userLanguage || window.navigator.language
            }
        },
        frame: function(e, t) {
            if (typeof window[e] !== "undefined") {
                return window[e]
            } else if (typeof window.document[t] !== "undefined") {
                return window.document[t]
            } else {
                try {
                    return window.document.getElementsByTagName("body")[0][t]
                } catch (n) {
                    return "-"
                }
            }
        },
        r: function() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
        },
        muc: function() {
            return this.r() + this.r() + (new Date).getTime().toString(16) + this.r() + this.r()
        },
        gc: function(e, t, n, r) {
            var i = "", s = 0;
            try {
                i = this.gbc(e)
            } catch (o) {}
            if (i == null || i.length == 0) {
                i = t;
                s = 1
            }
            this.sbc(e, i, r);
            return i + "&" + n + "_flag=" + s
        },
        ue: function(e) {
            try {
                return encodeURIComponent(e)
            } catch (t) {
                return escape(e)
            }
        },
        gbc: function(e) {
            var t = document.cookie, n = e + "=", r = t.indexOf("; " + n), i;
            if (r==-1) {
                r = t.indexOf(n);
                if (r != 0)
                    return null
            } else {
                r += 2
            }
            i = t.indexOf(";", r);
            if (i==-1) {
                i = t.length
            }
            return this.ue(t.substring(r + n.length, i))
        },
        sbc: function(e, t, n) {
            var r = new Date, i = this.dom(), s = "/";
            r.setTime(r.getTime() + n * 1e3);
            document.cookie = e + "=" + escape(t) + (n ? "; expires=" + r.toGMTString() : "") + (i && i.length > 0 ? "; domain=." + i : "") + "; path=/"
        },
        dom: function() {
            if (typeof this.opts.domain === "string") {
                return this.opts.domain
            } else {
                var e = window.location.host;
                return e.substr(0, 4) == "www." ? e.substr(4) : e
            }
        },
        gen_url: function() {
            try {
                var e = this;
                return this.iu + this.map(this.params, function(t, n) {
                    return t + "=" + n.call(e)
                }).join("&")
            } catch (t) {
                return this.iu
            }
        },
        map: function(e, t) {
            var n = [];
            for (var r in e) {
                if (e.hasOwnProperty(r)) {
                    n.push(t.call(this, r, e[r]))
                }
            }
            return n
        },
        cloudfront: {
            url: "http://cloudfront-labs.amazonaws.com/x.png",
            fire: function() {
                if (location.protocol == "http:") {
                    (new Image).src = e.cloudfront.url
                }
            }
        },
        user_cookie_v: "",
        fire: function(e) {
            this.user_cookie_v = this.muc();
            this.map(e, function(e, t) {
                this.opts[e] = t
            });
            if (this.fired()) {
                return 
            }
            window._atrk_fired = true;
            var t = new Image(1, 1);
            t.alt = "alexametrics";
            t.src = this.gen_url();
            this.cloudfront.fire()
        }
    };
    window.atrk = function() {
        e.fire(_atrk_opts)
    };
    if (typeof _atrk_opts !== "undefined" && typeof _atrk_opts.dynamic !== "undefined" && _atrk_opts.dynamic) {
        atrk()
    }
})()
