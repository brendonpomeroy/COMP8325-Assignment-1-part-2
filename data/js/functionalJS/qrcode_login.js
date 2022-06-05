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
    a.register("core.dom.removeNode", function(b) {
        return function(c) {
            c = b.E(c) || c;
            try {
                c.parentNode.removeChild(c)
            } catch (d) {}
        }
    });
    a.register("core.util.getUniqueKey", function(d) {
        var b = (new Date()).getTime().toString(), c = 1;
        return function() {
            return b + (c++)
        }
    });
    a.register("core.func.empty", function() {
        return function() {}
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
    a.register("core.arr.isArray", function(b) {
        return function(c) {
            return Object.prototype.toString.call(c) === "[object Array]"
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
    a.register("common.channel.qrcode_login", function(b) {
        return b.common.listener.define("common.channel.qrcode_login", ["qrcode_scanned", "qrcode_used", "qrcode_timeout", "qrcode_exception", "login_failure", "login_success"])
    });
    a.register("jobs.qrcode_login", function(h) {
        var k = {}, c = h.common.channel.qrcode_login;
        var o = {
            entry: "sso",
            domain: "weibo.com",
            get_image_timeout: 10 * 1000,
            check_request_timeout: 10 * 1000,
            qrcode_size: 180,
            crossdomain_timeout: 3 * 1000,
            savestate: 30
        };
        var d = {
            qrcode_image: "//login.sina.com.cn/sso/qrcode/image",
            qrcode_check: "//login.sina.com.cn/sso/qrcode/check",
            qrcode_login: "//login.sina.com.cn/sso/login.php"
        };
        var i, n = 0, f = 3000;
        var m;
        k.set = function(q) {
            for (var p in q) {
                o[p] = q[p]
            }
            return k
        };
        k.getQRcode = function(p) {
            return g(function(q) {
                p(q)
            })
        };
        k.getQRcodeId = function() {
            return i
        };
        k.start = function() {
            m = false;
            n++;
            j(n)
        };
        k.cancel = function() {
            m = true
        };
        k.register = function(q, p) {
            c.register(q, p);
            return k
        };
        k.remove = function(q, p) {
            c.remove(q, p);
            return k
        };
        var g = function(p) {
            h.core.io.jsonp({
                url: d.qrcode_image,
                timeout: o.get_image_timeout,
                args: {
                    entry: o.entry,
                    size: o.qrcode_size
                },
                onComplete: function(q) {
                    if (!q || q.retcode != 20000000) {
                        p(q);
                        return 
                    }
                    var r = q.data;
                    if (r.interval) {
                        f = r.interval
                    }
                    i = r.qrid;
                    p(q)
                },
                onTimeout: function() {
                    c.fire("get_image_timeout")
                },
                isEncode: true,
                varkey: "callback"
            });
            return k
        };
        var j = function(q) {
            var p = function(r) {
                if (r.retcode == 20000000) {
                    l(r)
                } else {
                    if (r.retcode == 50114002) {
                        c.fire("qrcode_scanned", [r])
                    } else {
                        if (r.retcode == 50114003) {
                            c.fire("qrcode_timeout", [r])
                        } else {
                            if (r.retcode == 50114004) {
                                c.fire("qrcode_used", [r])
                            } else {
                                if (r.retcode == 50114015) {
                                    c.fire("qrcode_exception", [r])
                                } else {}
                            }
                        }
                    }
                }
                if (r.retcode == 50114001 || r.retcode == 50114002) {
                    setTimeout(function() {
                        if (q < n) {
                            return 
                        }
                        if (m) {
                            return 
                        }
                        e(p)
                    }, f)
                }
            };
            e(p)
        };
        var e = function(p) {
            h.core.io.jsonp({
                url: d.qrcode_check,
                timeout: o.check_request_timeout,
                args: {
                    entry: o.entry,
                    qrid: i
                },
                onComplete: function(q) {
                    if (!q) {
                        p({
                            retcode: - 1
                        });
                        return 
                    }
                    p(q)
                },
                onTimeout: function() {
                    c.fire("check_timeout")
                },
                isEncode: true,
                varkey: "callback"
            })
        };
        var l = function(p) {
            h.core.io.jsonp({
                url: d.qrcode_login,
                timeout: o.login_request_timeout,
                args: {
                    entry: o.entry,
                    returntype: "TEXT",
                    crossdomain: 1,
                    cdult: 3,
                    domain: o.domain,
                    alt: p.data.alt,
                    savestate: o.savestate
                },
                onComplete: function(q) {
                    if (q.retcode != 0) {
                        c.fire("login_failure", {
                            retcode: q.retcode,
                            msg: q.reason
                        })
                    } else {
                        b(q, function(r) {
                            if (r.result === false) {
                                c.fire("login_failure", {
                                    retcode: - 2,
                                    msg: "登录失败"
                                })
                            } else {
                                c.fire("login_success", q)
                            }
                        })
                    }
                },
                onTimeout: function() {
                    c.fire("login_failure", {
                        retcode: - 1,
                        msg: "登录超时"
                    })
                },
                isEncode: true,
                varkey: "callback"
            })
        };
        var b = function(s, u) {
            var p = s.crossDomainUrlList.length;
            if (p == 0) {
                u({
                    result: true
                });
                return 
            }
            var t = setTimeout(function() {
                p =- 1;
                u({
                    result: false
                })
            }, o.crossdomain_timeout);
            for (var q in s.crossDomainUrlList) {
                var r = h.core.str.parseURL(s.crossDomainUrlList[q]);
                if (r.host == "weibo.com") {
                    h.core.io.scriptLoader({
                        url: s.crossDomainUrlList[q],
                        charset: "UTF-8",
                        args: {
                            action: "login"
                        },
                        onComplete: function() {
                            p--;
                            if (p == 0) {
                                clearTimeout(t);
                                u({
                                    result: true
                                })
                            }
                        }
                    })
                } else {
                    h.core.io.jsonp({
                        url: s.crossDomainUrlList[q],
                        charset: "UTF-8",
                        args: {
                            action: "login"
                        },
                        onComplete: function() {
                            p--;
                            if (p == 0) {
                                clearTimeout(t);
                                u({
                                    result: true
                                })
                            }
                        }
                    })
                }
            }
        };
        return k
    });
    (function(c) {
        var b = c.jobs.qrcode_login;
        b.getVersion = function() {
            return "qrcode_login.js(v1.0.1) 2013-12-02"
        };
        b.STK = c;
        this.SINA_QRCODE_LOGIN = b
    }).call(this, a)
}).call(this);
