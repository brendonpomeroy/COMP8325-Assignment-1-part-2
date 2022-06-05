(function(b, a) {
    a.register("module.Class", function(e) {
        var c = function() {};
        function d(m, k) {
            if (m.length ===+ m.length) {
                for (var j = 0, g = m.length; j < g; j++) {
                    if (k(m[j], j, m) === false) {
                        return 
                    }
                }
            } else {
                for (var h in m) {
                    if (m.hasOwnProperty(h)) {
                        if (k(m[h], h, m) === false) {
                            return 
                        }
                    }
                }
            }
        }
        var f = function(g) {
            d(Array.prototype.slice.call(arguments, 1), function(h) {
                if (h) {
                    for (var i in h) {
                        g[i] = h[i]
                    }
                }
            });
            return g
        };
        c.extend = function(h, k) {
            var g = this, i, j;
            if (h && h.hasOwnProperty("constructor")) {
                i = h.constructor
            } else {
                i = function() {
                    g.apply(this, arguments)
                }
            }
            f(i, g, k);
            j = function() {
                this.constructor = i
            };
            j.prototype = g.prototype;
            i.prototype = new j();
            if (h) {
                f(i.prototype, h)
            }
            i.__super__ = g.prototype;
            return i
        };
        return c
    });
    a.register("comp.component", function(f) {
        var d = f.module.Class, e = f.core.func.empty, h = function(i, j) {
            return function() {
                j.apply(i, arguments)
            }
        }, g = b.SINA_OUTLOGIN_LAYER;
        g.set("sso", {
            entry: "homepage"
        }).init();
        var c = d.extend({
            elem: null,
            loginLayer: g,
            constructor: function(i) {
                this.elem = i.elem;
                this.render();
                g.register("login_success", h(this, this.login));
                g.register("logout_success", h(this, this.logout))
            },
            render: e,
            show: function() {
                this.elem.style.display = ""
            },
            hide: function() {
                this.elem.style.display = "none"
            },
            login: e,
            logout: e,
            destory: function() {
                this.elem = null
            }
        }, {
            bind: h
        });
        return c
    });
    a.register("core.dom.contains", function(c) {
        return function(d, e) {
            if (d === e) {
                return false
            } else {
                if (d.compareDocumentPosition) {
                    return ((d.compareDocumentPosition(e) & 16) === 16)
                } else {
                    if (d.contains && e.nodeType === 1) {
                        return d.contains(e)
                    } else {
                        while (e = e.parentNode) {
                            if (d === e) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    });
    a.register("comp.dropmenu", function(f) {
        var d = f.comp.component, h = d.bind, e = f.core.dom.contains;
        var g = function(j, i) {
            return function(m) {
                var l = j;
                var k = m.relatedTarget || m.fromElement;
                if (!k || (l !== k&&!e(l, k))) {
                    i.apply(l, arguments)
                }
            }
        };
        var c = d.extend({
            constructor: function(j) {
                c.__super__.constructor.apply(this, arguments);
                var i = this;
                if (/ipad/.test(b.navigator.userAgent.toLowerCase())) {
                    f.addEvent(document.body, "touchend", h(i, i.bodyTouch))
                } else {
                    this.hover(function(k) {
                        i.highlight(true);
                        i.showMenu()
                    }, function() {
                        i.highlight(false);
                        i.hideMenu()
                    })
                }
            },
            elemTouch: function() {
                var i = b.user_panel_homepage_currentTab;
                if (i && (i != this)) {
                    i && i.highlight(false);
                    i && i.hideMenu()
                }
                this.highlight(true);
                this.showMenu();
                b.user_panel_homepage_currentTab = this
            },
            bodyTouch: function(j) {
                var i = j.target;
                if (!e(this.elem, i)) {
                    this.highlight(false);
                    this.hideMenu()
                }
            },
            render: function() {
                var i = this;
                if (/ipad/.test(b.navigator.userAgent.toLowerCase())) {
                    f.removeEvent(i.elem.getElementsByTagName("a")[0], "touchend", h(i, i.elemTouch))
                }
                if (this._menuTpl) {
                    this.elem.innerHTML = this._menuTpl
                }
                if (/ipad/.test(b.navigator.userAgent.toLowerCase())) {
                    f.addEvent(i.elem.getElementsByTagName("a")[0], "touchend", h(i, i.elemTouch))
                }
            },
            highlight: function(i) {
                var j = "tn-onmouse";
                if (i === true) {
                    f.addClassName(this.elem, j)
                } else {
                    f.removeClassName(this.elem, j)
                }
            },
            hover: function(j, i) {
                if (j) {
                    if (f.IE) {
                        f.addEvent(this.elem, "mouseenter", j)
                    } else {
                        f.addEvent(this.elem, "mouseover", g(this.elem, j))
                    }
                }
                if (i) {
                    if (f.IE) {
                        f.addEvent(this.elem, "mouseleave", i)
                    } else {
                        f.addEvent(this.elem, "mouseout", g(this.elem, i))
                    }
                }
            },
            showMenu: function() {
                if (this.menu) {
                    this.menu.style.display = "block"
                }
            },
            hideMenu: function() {
                if (this.menu) {
                    this.menu.style.display = "none"
                }
            },
            destory: function() {
                this.menu = null
            }
        });
        return c
    });
    a.register("comp.loginbutton", function(e) {
        var g = e.comp.dropmenu, f = g.bind, d = e.core.dom.contains;
        var c = g.extend({
            _timer: null,
            canCloseLoginLayer: function() {
                var i = this.loginLayer;
                if (i.isLogin()) {
                    return true
                } else {
                    var j = document.activeElement;
                    var k = i.nodes.loginname.value, h = i.nodes.password.value;
                    return !(k || h || d(i.nodes.box, j))
                }
            },
            showMenu: function() {
                this.loginLayer.set("plugin", {
                    parentNode: e.E("SI_Top_LoginLayer"),
                    position: "custom"
                }).set("styles", {
                    left: "-100px",
                    top: "-1px",
                    marginTop: "0px"
                });
                this.loginLayer.show();
                try {
                    _S_uaTrack("index_new_menu", "weibo_signin")
                } catch (h) {}
            },
            hideMenu: function() {
                if (this.canCloseLoginLayer()) {
                    this.loginLayer.hide()
                }
            },
            login: function() {
                this.hide()
            },
            logout: function() {
                this.show()
            },
            destory: function() {
                c.__super__.destory.call(this);
                if (this._timer) {
                    clearTimeout(this._timer);
                    this._timer = null
                }
            }
        });
        return c
    });
    a.register("comp.logoutmenu", function(g) {
        var f = g.comp.dropmenu, i = f.bind, e = g.core.dom.contains;
        var h = function(k, j) {
            return function(n) {
                var m = k;
                var l = n.relatedTarget || n.fromElement;
                if (!l || (m !== l&&!e(m, l))) {
                    j.apply(m, arguments)
                }
            }
        };
        var d = '<span class="tn-greeting">您好，</span>            <div id = "SI_Top_Box_div">                <a  class="tn-tab tn-tab-user" href="" target="_blank" id = "SI_Top_Nick">                <i><span class="tn-arrow"></span><em id = "SI_Top_Nick_Name"></em></i></a>                <div style="display:none;" class="tn-topmenulist tn-topmenulist-a tn-topmenulist-a-user">                    <ul class="tn-text-list">                        <li suda-uatrack="key=content_collect&value=www_fav_click"><a target="_blank" title="我的收藏" href="http://news.sina.com.cn/fav">我的收藏</a></li>                        <li><a target="_blank" title="退出" href="javascript:;" id = "SI_Top_Logout_a">退出</a></li>                    </ul>                </div>            </div>';
        var c = f.extend({
            _menuTpl: d,
            _timer: null,
            constructor: function() {
                c.__super__.constructor.apply(this, arguments);
                this.menu = document.getElementById("SI_Top_Box_div").getElementsByTagName("div")[0];
                g.addEvent(document.getElementById("SI_Top_Logout_a"), "click", i(this, function() {
                    this.loginLayer.logout()
                }));
                this.hide()
            },
            login: function() {
                this.getNickName()
            },
            logout: function() {
                this.hideMenu();
                this.hide()
            },
            getNickName: function() {
                var k = this.loginLayer;
                if (!k) {
                    return 
                }
                var j = k.getSinaCookie(), l = this;
                if (j && j.uid) {
                    k.getWeiboInfo({
                        timeout: 30 * 1000,
                        onSuccess: function(m) {
                            var n = document.getElementById("SI_Top_Nick");
                            n.href = "http://weibo.com/";
                            l.setNickName(m.data.name);
                            l.show()
                        },
                        onFailure: function() {
                            var m = document.getElementById("SI_Top_Nick");
                            m.href = "http://login.sina.com.cn/";
                            l.setNickName(j.nick);
                            l.show()
                        }
                    })
                }
            },
            setNickName: function(n) {
                var p = document.getElementById("SI_Top_Nick_Name");
                p.title = n;
                n = n.split("");
                var k = "", j = 0;
                for (var o = 0, m = n.length; o < m; o++) {
                    if (/[\u4e00-\u9fa5]/.test(n[o])) {
                        if (j < 5) {
                            j += 1;
                            k += n[o]
                        } else {
                            if (j === 5) {
                                j += 1;
                                k += "..."
                            } else {
                                break
                            }
                        }
                    } else {
                        if (j < 5) {
                            k += n[o];
                            j += 0.5
                        } else {
                            break
                        }
                    }
                }
                p.innerHTML = k
            },
            hover: function(l, j) {
                var k = document.getElementById("SI_Top_Nick");
                var m = document.getElementById("SI_Top_Box_div");
                if (l) {
                    if (g.IE) {
                        g.addEvent(k, "mouseenter", l)
                    } else {
                        g.addEvent(k, "mouseover", h(k, l))
                    }
                }
                if (j) {
                    if (g.IE) {
                        g.addEvent(m, "mouseleave", j)
                    } else {
                        g.addEvent(m, "mouseout", h(m, j))
                    }
                }
            },
            showMenu: function() {
                c.__super__.showMenu.apply(this, arguments);
                try {
                    SUDA.uaTrack("content_collect", "www_fav_show")
                } catch (j) {}
            }
        });
        return c
    });
    a.register("kit.extra.merge", function(c) {
        return function(e, d) {
            var g = {};
            for (var f in e) {
                g[f] = e[f]
            }
            for (var f in d) {
                g[f] = d[f]
            }
            return g
        }
    });
    a.register("kit.io.ajax", function(c) {
        return function(k) {
            var j, h, g, i, l, d, e;
            d = function(n) {
                l = false;
                k.onComplete(n, j.args);
                setTimeout(m, 0)
            };
            e = function(n) {
                l = false;
                k.onFail(n, j.args);
                setTimeout(m, 0)
            };
            g = [];
            i = null;
            l = false;
            j = c.parseParam({
                url: "",
                method: "get",
                responseType: "json",
                timeout: 30 * 1000,
                onTraning: c.funcEmpty,
                isEncode: true
            }, k);
            j.onComplete = d;
            j.onFail = e;
            var m = function() {
                if (!g.length) {
                    return 
                }
                if (l === true) {
                    return 
                }
                l = true;
                j.args = g.shift();
                i = c.ajax(j)
            };
            var f = function(o) {
                while (g.length) {
                    g.shift()
                }
                l = false;
                if (i) {
                    try {
                        i.abort()
                    } catch (n) {}
                }
                i = null
            };
            h = {};
            h.request = function(n) {
                if (!n) {
                    n = {}
                }
                if (n&&!n.setting_rid && b.$CONFIG && $CONFIG.setting_rid) {
                    n.setting_rid = $CONFIG.setting_rid
                }
                if (k.noQueue) {
                    f()
                }
                if (!k.uniqueRequest ||!i) {
                    g.push(n);
                    n._t = 0;
                    m()
                }
            };
            h.abort = f;
            return h
        }
    });
    a.register("kit.io.jsonp", function(c) {
        return function(f) {
            var e, h, d, j, g;
            e = c.parseParam({
                url: "",
                method: "get",
                responseType: "json",
                varkey: "_v",
                timeout: 30 * 1000,
                onComplete: c.funcEmpty,
                onTraning: c.funcEmpty,
                onFail: c.funcEmpty,
                isEncode: true
            }, f);
            d = [];
            j = {};
            g = false;
            var i = function() {
                if (!d.length) {
                    return 
                }
                if (g === true) {
                    return 
                }
                g = true;
                j.args = d.shift();
                j.onComplete = function(k) {
                    g = false;
                    e.onComplete(k, j.args);
                    setTimeout(i, 0)
                };
                j.onFail = function(k) {
                    g = false;
                    e.onFail(k);
                    setTimeout(i, 0)
                };
                c.jsonp(c.kit.extra.merge(e, {
                    args: j.args,
                    onComplete: function(k) {
                        j.onComplete(k)
                    },
                    onFail: function(k) {
                        try {
                            j.onFail(k)
                        } catch (l) {}
                    }
                }))
            };
            h = {};
            h.request = function(k) {
                if (!k) {
                    k = {}
                }
                if (k&&!k.setting_rid && b.$CONFIG && $CONFIG.setting_rid) {
                    k.setting_rid = $CONFIG.setting_rid
                }
                d.push(k);
                k._t = 1;
                i()
            };
            h.abort = function(k) {
                while (d.length) {
                    d.shift()
                }
                g = false;
                j = null
            };
            return h
        }
    });
    a.register("core.obj.parseParam", function(c) {
        return function(f, e, d) {
            var g, h = {};
            e = e || {};
            for (g in f) {
                h[g] = f[g];
                if (e[g] != null) {
                    if (d) {
                        if (f.hasOwnProperty(g)) {
                            h[g] = e[g]
                        }
                    } else {
                        h[g] = e[g]
                    }
                }
            }
            return h
        }
    });
    a.register("core.dom.removeNode", function(c) {
        return function(d) {
            d = c.E(d) || d;
            try {
                d.parentNode.removeChild(d)
            } catch (f) {}
        }
    });
    a.register("core.util.getUniqueKey", function(e) {
        var c = (new Date()).getTime().toString(), d = 1;
        return function() {
            return c + (d++)
        }
    });
    a.register("core.func.empty", function() {
        return function() {}
    });
    a.register("core.str.parseURL", function(c) {
        return function(f) {
            var e = /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
            var k = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
            var h = e.exec(f);
            var j = {};
            for (var g = 0, d = k.length; g < d; g += 1) {
                j[k[g]] = h[g] || ""
            }
            return j
        }
    });
    a.register("core.arr.isArray", function(c) {
        return function(d) {
            return Object.prototype.toString.call(d) === "[object Array]"
        }
    });
    a.register("core.str.trim", function(c) {
        return function(g) {
            if (typeof g !== "string") {
                throw "trim need a string as parameter"
            }
            var d = g.length;
            var f = 0;
            var e = /(\u3000|\s|\t|\u00A0)/;
            while (f < d) {
                if (!e.test(g.charAt(f))) {
                    break
                }
                f += 1
            }
            while (d > f) {
                if (!e.test(g.charAt(d - 1))) {
                    break
                }
                d -= 1
            }
            return g.slice(f, d)
        }
    });
    a.register("core.json.queryToJson", function(c) {
        return function(f, k) {
            var m = c.core.str.trim(f).split("&");
            var l = {};
            var e = function(i) {
                if (k) {
                    return decodeURIComponent(i)
                } else {
                    return i
                }
            };
            for (var h = 0, j = m.length; h < j; h++) {
                if (m[h]) {
                    var g = m[h].split("=");
                    var d = g[0];
                    var n = g[1];
                    if (g.length < 2) {
                        n = d;
                        d = "$nullName"
                    }
                    if (!l[d]) {
                        l[d] = e(n)
                    } else {
                        if (c.core.arr.isArray(l[d]) != true) {
                            l[d] = [l[d]]
                        }
                        l[d].push(e(n))
                    }
                }
            }
            return l
        }
    });
    a.register("core.json.jsonToQuery", function(c) {
        var d = function(f, e) {
            f = f == null ? "" : f;
            f = c.core.str.trim(f.toString());
            if (e) {
                return encodeURIComponent(f)
            }
            return f
        };
        return function(j, g) {
            var l = [];
            if (typeof j == "object") {
                for (var f in j) {
                    if (f === "$nullName") {
                        l = l.concat(j[f]);
                        continue
                    }
                    if (j[f] instanceof Array) {
                        for (var h = 0, e = j[f].length; h < e; h++) {
                            l.push(f + "=" + d(j[f][h], g))
                        }
                    } else {
                        if (typeof j[f] != "function") {
                            l.push(f + "=" + d(j[f], g))
                        }
                    }
                }
            }
            if (l.length) {
                return l.join("&")
            }
            return ""
        }
    });
    a.register("core.util.URL", function(c) {
        return function(h, e) {
            var g = c.core.obj.parseParam({
                isEncodeQuery: false,
                isEncodeHash: false
            }, e || {});
            var f = {};
            var j = c.core.str.parseURL(h);
            var d = c.core.json.queryToJson(j.query);
            var i = c.core.json.queryToJson(j.hash);
            f.setParam = function(k, l) {
                d[k] = l;
                return this
            };
            f.getParam = function(k) {
                return d[k]
            };
            f.setParams = function(l) {
                for (var k in l) {
                    f.setParam(k, l[k])
                }
                return this
            };
            f.setHash = function(k, l) {
                i[k] = l;
                return this
            };
            f.getHash = function(k) {
                return i[k]
            };
            f.valueOf = f.toString = function() {
                var k = [];
                var l = c.core.json.jsonToQuery(d, g.isEncodeQuery);
                var m = c.core.json.jsonToQuery(i, g.isEncodeQuery);
                if (j.scheme != "") {
                    k.push(j.scheme + ":");
                    k.push(j.slash)
                }
                if (j.host != "") {
                    k.push(j.host);
                    if (j.port != "") {
                        k.push(":");
                        k.push(j.port)
                    }
                }
                k.push("/");
                k.push(j.path);
                if (l != "") {
                    k.push("?" + l)
                }
                if (m != "") {
                    k.push("#" + m)
                }
                return k.join("")
            };
            return f
        }
    });
    a.register("core.io.scriptLoader", function(d) {
        var e = {};
        var c = {
            url: "",
            charset: "UTF-8",
            timeout: 30 * 1000,
            args: {},
            onComplete: d.core.func.empty,
            onTimeout: d.core.func.empty,
            isEncode: false,
            uniqueID: null
        };
        return function(j) {
            var h, f;
            var g = d.core.obj.parseParam(c, j);
            if (g.url == "") {
                throw "scriptLoader: url is null"
            }
            var i = g.uniqueID || d.core.util.getUniqueKey();
            h = e[i];
            if (h != null && d.IE != true) {
                d.core.dom.removeNode(h);
                h = null
            }
            if (h == null) {
                h = e[i] = d.C("script")
            }
            h.charset = g.charset;
            h.id = "scriptRequest_script_" + i;
            h.type = "text/javascript";
            if (g.onComplete != null) {
                if (d.IE) {
                    h.onreadystatechange = function() {
                        if (h.readyState.toLowerCase() == "loaded" || h.readyState.toLowerCase() == "complete") {
                            try {
                                clearTimeout(f);
                                document.getElementsByTagName("head")[0].removeChild(h);
                                h.onreadystatechange = null
                            } catch (k) {}
                            g.onComplete()
                        }
                    }
                } else {
                    h.onload = function() {
                        try {
                            clearTimeout(f);
                            d.core.dom.removeNode(h)
                        } catch (k) {}
                        g.onComplete()
                    }
                }
            }
            h.src = d.core.util.URL(g.url, {
                isEncodeQuery: g.isEncode
            }).setParams(g.args).toString();
            document.getElementsByTagName("head")[0].appendChild(h);
            if (g.timeout > 0) {
                f = setTimeout(function() {
                    try {
                        document.getElementsByTagName("head")[0].removeChild(h)
                    } catch (k) {}
                    g.onTimeout()
                }, g.timeout)
            }
            return h
        }
    });
    a.register("kit.io.jsonp2", function(c) {
        return function(h) {
            var f = c.core.obj.parseParam({
                url: "",
                charset: "UTF-8",
                timeout: 30 * 1000,
                args: {},
                onComplete: null,
                onTimeout: null,
                responseName: null,
                isEncode: false,
                varkey: "varname"
            }, h);
            var i =- 1;
            var g = f.responseName || ("STK_" + c.core.util.getUniqueKey());
            f.args[f.varkey] = g;
            var d = f.onComplete;
            var e = f.onTimeout;
            f.onTimeout = function() {
                if (i != 1 && e != null) {
                    i = 2;
                    e()
                }
            };
            f.onComplete = function() {
                if (i != 2 && d != null) {
                    i = 1;
                    d(b[g]);
                    b[g] = undefined
                }
            };
            return c.core.io.scriptLoader(f)
        }
    });
    a.register("kit.io.inter", function(c) {
        return function() {
            var d, f, e;
            d = {};
            f = {};
            e = {};
            d.register = function(h, g) {
                if (f[h] !== undefined) {
                    throw h + " interface has been registered"
                }
                f[h] = g;
                e[h] = {}
            };
            d.hookComplete = function(g, i) {
                var h = c.core.util.getUniqueKey();
                e[g][h] = i;
                return h
            };
            d.removeHook = function(g, h) {
                if (e[g] && e[g][h]) {
                    delete e[g][h]
                }
            };
            d.getTrans = function(i, g) {
                var h = c.kit.extra.merge(f[i], g);
                h.onComplete = function(l, n) {
                    try {
                        g.onComplete(l, n)
                    } catch (m) {}
                    if (l.code === "100000") {
                        try {
                            g.onSuccess(l, n)
                        } catch (m) {}
                    } else {
                        try {
                            g.onError(l, n)
                        } catch (m) {}
                    }
                    for (var j in e[i]) {
                        try {
                            e[i][j](l, n)
                        } catch (m) {}
                    }
                };
                if (f[i]["requestMode"] === "jsonp") {
                    return c.kit.io.jsonp(h)
                } else {
                    if (f[i]["requestMode"] === "ijax") {
                        return c.kit.io.ijax(h)
                    } else {
                        return c.kit.io.ajax(h)
                    }
                }
            };
            d.request = function(j, g, i) {
                var h = c.core.json.merge(f[j], g);
                if (i&&!i.setting_rid && b.$CONFIG && $CONFIG.setting_rid) {
                    i.setting_rid = $CONFIG.setting_rid
                }
                h.onComplete = function(m, o) {
                    try {
                        g.onComplete(m, o)
                    } catch (n) {}
                    if (m.code === "100000") {
                        try {
                            g.onSuccess(m, o)
                        } catch (n) {}
                    } else {
                        try {
                            g.onError(m, o)
                        } catch (n) {}
                    }
                    for (var l in e[j]) {
                        try {
                            e[j][l](m, o)
                        } catch (n) {}
                    }
                };
                h = c.core.obj.cut(h, ["noqueue"]);
                h.args = i;
                if (f[j]["requestMode"] === "jsonp") {
                    return c.jsonp(h)
                } else {
                    if (f[j]["requestMode"] === "jsonp2") {
                        return c.kit.io.jsonp2(h)
                    } else {
                        if (f[j]["requestMode"] === "ijax") {
                            return c.ijax(h)
                        } else {
                            return c.ajax(h)
                        }
                    }
                }
            };
            return d
        }
    });
    a.register("core.arr.indexOf", function(c) {
        return function(f, g) {
            if (g.indexOf) {
                return g.indexOf(f)
            }
            for (var e = 0, d = g.length; e < d; e++) {
                if (g[e] === f) {
                    return e
                }
            }
            return - 1
        }
    });
    a.register("core.arr.inArray", function(c) {
        return function(d, e) {
            return c.core.arr.indexOf(d, e)>-1
        }
    });
    a.register("core.obj.cut", function(c) {
        return function(g, f) {
            var e = {};
            if (!c.core.arr.isArray(f)) {
                throw "core.obj.cut need array as second parameter"
            }
            for (var d in g) {
                if (!c.core.arr.inArray(d, f)) {
                    e[d] = g[d]
                }
            }
            return e
        }
    });
    a.register("common.trans.top", function(e) {
        var c = e.kit.io.inter();
        var d = c.register;
        d("blogInfo", {
            url: "http://comet.blog.sina.com.cn/notice",
            requestMode: "jsonp2"
        });
        d("emailInfo", {
            url: "http://service.mail.sina.com.cn/mailproxy/mailnotice.php",
            requestMode: "jsonp"
        });
        d("weiboInfo", {
            url: "https://rm.api.weibo.com/2/remind/unread_count.json",
            requestMode: "jsonp"
        });
        return c
    });
    a.register("comp.weibomenu", function(g) {
        var f = g.comp.dropmenu, e = g.common.trans.top;
        var d = '<a target="_blank" href="http://weibo.com/" class="tn-tab" suda-uatrack="key=index_new_menu&value=weibo_click">        <i>微博<em class="tn-new" style="display:none;"></em>        <span class="tn-arrow"> </span></i> </a>    <div style="display:none;" class="tn-topmenulist tn-topmenulist-a tn-topmenulist-a-weibo">        <ul class="tn-text-list">            <li suda-uatrack="key=index_new_menu&value=weibo_list_click"><a href="http://weibo.com/messages?topnav=1&amp;wvr=4" title="私信" target="_blank" data-role="dm">私信</a></li>            <li suda-uatrack="key=index_new_menu&value=weibo_list_click"><a href="http://weibo.com/comment/inbox?topnav=1&amp;wvr=4&amp;f=1" title="评论" target="_blank" data-role="cmt">评论</a></li>            <li suda-uatrack="key=index_new_menu&value=weibo_list_click"><a href="http://weibo.com/at/weibo?topnav=1&amp;wvr=4" title="@我" target="_blank" data-role="mention_status">@我</a></li>        </ul>    </div>';
        var c = f.extend({
            _menuTpl: d,
            _timer: null,
            constructor: function() {
                this.resetWeiboInfo();
                c.__super__.constructor.apply(this, arguments)
            },
            render: function() {
                c.__super__.render.apply(this, arguments);
                this.menu = this.elem.getElementsByTagName("div")[0];
                var m = this.elem.getElementsByTagName("em")[0];
                if (this.weiboInfo._hasNewInfo) {
                    m.style.display = "inline-block"
                } else {
                    m.style.display = "none"
                }
                var h = this.elem.getElementsByTagName("li");
                for (var k = 0, j = h.length; k < j; k++) {
                    var n = h[k].childNodes[0];
                    while (n.nodeType !== 1) {
                        n = n.nextSibling
                    }
                    var o = this.weiboInfo[n.getAttribute("data-role")];
                    if (o > 0) {
                        n.innerHTML = "<em>" + o + "</em>" + n.title
                    }
                }
            },
            login: function() {
                var h = this;
                h.getWeiboInfo();
                this._timer = setInterval(function() {
                    h.getWeiboInfo()
                }, 1 * 60 * 1000)
            },
            getWeiboInfo: function() {
                var i = this;
                var h = this.loginLayer.getSinaCookie() && this.loginLayer.getSinaCookie().uid;
                if (h) {
                    e.request("weiboInfo", {
                        onComplete: function(j) {
                            if (j.code == 1) {
                                i.setWeiboInfo(j.data);
                                i.render()
                            }
                        }
                    }, {
                        source: "2751753920",
                        uid: h
                    })
                }
            },
            setWeiboInfo: function(h) {
                if (h.cmt > 0 || h.dm > 0 || h.mention_status > 0) {
                    this.weiboInfo._hasNewInfo = true
                } else {
                    this.weiboInfo._hasNewInfo = false
                }
                for (var i in this.weiboInfo) {
                    if ((i in h) && (h[i] != this.weiboInfo[i])) {
                        if (h[i] > 99) {
                            this.weiboInfo[i] = "99+"
                        } else {
                            this.weiboInfo[i] = h[i]
                        }
                    }
                }
            },
            resetWeiboInfo: function() {
                if (!this.weiboInfo) {
                    this.weiboInfo = {}
                }
                this.weiboInfo.cmt = 0;
                this.weiboInfo.dm = 0;
                this.weiboInfo.mention_status = 0;
                this.weiboInfo._changed = false;
                this.weiboInfo._hasNewInfo = false
            },
            logout: function() {
                clearInterval(this._timer);
                this.resetWeiboInfo();
                this.render()
            },
            showMenu: function() {
                c.__super__.showMenu.apply(this, arguments);
                try {
                    _S_uaTrack("index_new_menu", "weibo_show")
                } catch (h) {}
            },
            destory: function() {
                c.__super__.destory.call(this);
                this.weiboInfo = null
            }
        });
        return c
    });
    a.register("comp.emailmenu", function(g) {
        var f = g.comp.dropmenu, e = g.common.trans.top;
        var d = '<a target="_blank" href="http://mail.sina.com.cn" class="tn-tab" suda-uatrack="key=index_new_menu&value=mail_click"> <i>邮箱            <em class="tn-new" style="display:none;"></em>            <span class="tn-arrow"> </span></i> </a>    <div style="display:none;" class="tn-topmenulist tn-topmenulist-a tn-topmenulist-a-mail">        <ul class="tn-text-list">            <li suda-uatrack="key=index_new_menu&value=mail_list_click"><a href="http://mail.sina.com.cn/" title="免费邮箱" target="_blank" data-role="unread">免费邮箱</a></li>            <li suda-uatrack="key=index_new_menu&value=mail_list_click"><a href="http://vip.sina.com.cn/" title="VIP邮箱" target="_blank">VIP邮箱</a></li>            <li suda-uatrack="key=index_new_menu&value=mail_list_click"><a href="http://mail.sina.net/" title="企业邮箱" target="_blank">企业邮箱</a></li></ul>    </div>';
        var c = f.extend({
            _menuTpl: d,
            _timer: null,
            constructor: function() {
                this.resetMailInfo();
                c.__super__.constructor.apply(this, arguments)
            },
            render: function() {
                c.__super__.render.apply(this, arguments);
                this.menu = this.elem.getElementsByTagName("div")[0];
                var m = this.elem.getElementsByTagName("em")[0];
                if (this.mailInfo._hasNewInfo) {
                    m.style.display = "inline-block"
                } else {
                    m.style.display = "none"
                }
                var h = this.elem.getElementsByTagName("li");
                for (var k = 0, j = h.length; k < j; k++) {
                    var n = h[k].childNodes[0];
                    while (n.nodeType !== 1) {
                        n = n.nextSibling
                    }
                    var o = this.mailInfo[n.getAttribute("data-role")];
                    if (o > 0) {
                        n.innerHTML = "<em>" + o + "</em>" + n.title
                    }
                }
            },
            login: function() {
                var h = this;
                h.getMailInfo();
                this._timer = setInterval(function() {
                    h.getMailInfo()
                }, 2 * 60 * 1000)
            },
            logout: function() {
                clearInterval(this._timer);
                this.resetMailInfo();
                this.render()
            },
            getMailInfo: function() {
                var i = this;
                var h = this.loginLayer.getSinaCookie() && this.loginLayer.getSinaCookie().uid;
                if (h) {
                    e.request("emailInfo", {
                        onComplete: function(j) {
                            if (j.result == true) {
                                i.setMailInfo(j.data);
                                i.render()
                            }
                        }
                    }, {
                        uid: h
                    })
                }
            },
            setMailInfo: function(h) {
                h = parseInt(h, 10);
                if (h !== this.mailInfo.unread) {
                    if (h > 999) {
                        this.mailInfo.unread = "999+"
                    } else {
                        this.mailInfo.unread = h
                    }
                }
                if (h > 0) {
                    this.mailInfo._hasNewInfo = true
                } else {
                    this.mailInfo._hasNewInfo = false
                }
            },
            resetMailInfo: function() {
                if (!this.mailInfo) {
                    this.mailInfo = {}
                }
                this.mailInfo.unread = 0;
                this.mailInfo._changed = false;
                this.mailInfo._hasNewInfo = false
            },
            showMenu: function() {
                c.__super__.showMenu.apply(this, arguments);
                try {
                    _S_uaTrack("index_new_menu", "mail_show")
                } catch (h) {}
            },
            destory: function() {
                c.__super__.destory.call(this);
                this.mailInfo = null
            }
        });
        return c
    });
    a.register("comp.blogmenu", function(g) {
        var f = g.comp.dropmenu, e = g.common.trans.top;
        var d = '<a target="_blank" href="http://i.blog.sina.com.cn/" class="tn-tab" suda-uatrack="key=index_new_menu&value=blog_click">        <i>博客            <em class="tn-new" style="display: none;"></em>            <span class="tn-arrow"> </span></i> </a>    <div style="display:none;" class="tn-topmenulist tn-topmenulist-a tn-topmenulist-a-blog">        <ul class="tn-text-list">            <li suda-uatrack="key=index_new_menu&value=blog_list_click">                <a href="http://i.blog.sina.com.cn/blogprofile/profilecommlist.php?type=1" title="博客评论" target="_blank" data-role="blogcomment">博客评论</a></li>            <li suda-uatrack="key=index_new_menu&value=blog_list_click">                <a href="http://i.blog.sina.com.cn/blog_rebuild/profile/controllers/notelist.php?action=profilenotice" title="未读提醒" target="_blank" data-role="unreadnotices">未读提醒</a></li>        </ul>    </div>';
        var c = f.extend({
            _menuTpl: d,
            _timer: null,
            constructor: function() {
                this.resetBlogInfo();
                c.__super__.constructor.apply(this, arguments)
            },
            render: function() {
                c.__super__.render.apply(this, arguments);
                this.menu = this.elem.getElementsByTagName("div")[0];
                var m = this.elem.getElementsByTagName("em")[0];
                if (this.blogInfo._hasNewInfo) {
                    m.style.display = "inline-block"
                } else {
                    m.style.display = "none"
                }
                var h = this.elem.getElementsByTagName("li");
                for (var k = 0, j = h.length; k < j; k++) {
                    var n = h[k].childNodes[0];
                    while (n.nodeType !== 1) {
                        n = n.nextSibling
                    }
                    var o = this.blogInfo[n.getAttribute("data-role")];
                    if (o > 0) {
                        n.innerHTML = "<em>" + o + "</em>" + n.title
                    }
                }
            },
            login: function() {
                var h = this;
                h.getBlogInfo();
                this._timer = setInterval(function() {
                    h.getBlogInfo()
                }, 5 * 60 * 1000)
            },
            getBlogInfo: function() {
                var h = this.loginLayer.getSinaCookie() && this.loginLayer.getSinaCookie().uid, i = this;
                if (h) {
                    e.request("blogInfo", {
                        onComplete: function(j) {
                            if (j.code == "A00006") {
                                i.setBlogInfo(j.data[h]);
                                i.render()
                            }
                        }
                    }, {
                        uid: h
                    })
                }
            },
            resetBlogInfo: function() {
                if (!this.blogInfo) {
                    this.blogInfo = {}
                }
                this.blogInfo.unreadnotices = 0;
                this.blogInfo.blogcomment = 0;
                this.blogInfo._changed = false;
                this.blogInfo._hasNewInfo = false
            },
            setBlogInfo: function(h) {
                if (h.unreadnotices > 0 || h.blogcomment > 0) {
                    this.blogInfo._hasNewInfo = true
                } else {
                    this.blogInfo._hasNewInfo = false
                }
                for (var i in this.blogInfo) {
                    if ((i in h) && (h[i] != this.blogInfo[i])) {
                        if (h[i] > 999) {
                            this.blogInfo[i] = "999+"
                        } else {
                            this.blogInfo[i] = h[i]
                        }
                    }
                }
            },
            logout: function() {
                clearInterval(this._timer);
                this.resetBlogInfo();
                this.render()
            },
            showMenu: function() {
                c.__super__.showMenu.apply(this, arguments);
                try {
                    _S_uaTrack("index_new_menu", "blog_show")
                } catch (h) {}
            },
            destory: function() {
                c.__super__.destory.call(this);
                this.blogInfo = null
            }
        });
        return c
    });
    a.register("comp.topstyle", function(c) {
        return [".tn-person-r{float:right;}", ".tn-person-r .tn-title{float:left;font-size:12px;position:relative;}", ".tn-person-r .tn-title .tn-tab{border: 1px solid #FCFCFC; border-width: 0 1px; color:#4C4C4C; display: inline-block; line-height: 16px; cursor: pointer; position: relative; z-index:9999; padding:0 2px 0 0; text-decoration:none;}", ".tn-person-r .tn-title .tn-tab i,", ".tn-person-r .tn-user i{display: inline-block; height:17px;  padding:12px 15px 12px 18px; vertical-align:bottom; _overflow: hidden; font-style:normal;}", "/*.tn-person-r .tn-user{display: inline-block; line-height: 16px; position: relative; z-index:9999; padding:0 2px 0 0;}*/", ".tn-person-r .tn-user i{padding-left: 0;padding-right:0;}", ".tn-person-r .tn-user a:link,.top-nav .tn-user a:visited{text-decoration:none;}", ".tn-person-r .tn-user a:hover,.top-nav .tn-user a:active{text-decoration:underline;}", ".tn-person-r .tn-title .tn-tab-user i{position:relative;max-width:79px;_width:79px;height:23px;padding:6px 31px 12px 18px;line-height:28px;overflow:hidden;color:#FF8400; overflow:hidden;}", ".tn-person-r .tn-title .tn-tab-user .tn-arrow{position:absolute;right:15px;top:17px;}", ".tn-person-r .tn-title .tn-tab:hover,", ".tn-person-r .tn-setting .tn-name:hover,", ".tn-person-r .tn-setting .tn-tab:hover,", ".tn-person-r .tn-onmouse .tn-tab,", ".tn-person-r .tn-onmouse .tn-tab{ border-color:#EDEEF0; background-color: #EDEEF0; text-decoration:none; color:#ff8400; }", ".tn-person-r .tn-onmouse .tn-tab i,", ".tn-person-r .tn-onmouse .tn-tab i{ color: #4C4C4C; }", ".tn-person-r .tn-onmouse .tn-tab:hover i,", ".tn-person-r .tn-onmouse .tn-tab:hover i{color:#ff8400;}", ".tn-person-r .tn-title .tn-greeting{position:absolute;left:-36px;top:10px;height:20px; overflow:hidden;line-height:20px;}", ".tn-person-r .tn-title-login .tn-tab a,", ".tn-person-r .tn-title-login .tn-tab a:hover{ color:#000; }", ".tn-person-r .tn-topmenulist{ position:absolute; border:1px solid #333; background:#fff; z-index:9998; font-size:12px; }", ".tn-person-r .tn-topmenulist { color:#333; }", ".tn-person-r .tn-topmenulist a{ color:#0a8cd2; }", ".tn-person-r .tn-topmenulist .tn-text-list { border-bottom:1px solid #FECC5B;margin:0 0 -2px;padding:0;}", ".tn-person-r .tn-topmenulist .tn-text-list li{ /*height:31px; ������3����bug*/line-height:31px; border-bottom: 1px solid #FECC5B; }", ".tn-person-r .tn-topmenulist .tn-text-list li a{ _zoom:1; display: block; color:#333; padding:0 15px; }", ".tn-person-r .tn-topmenulist .tn-text-list li a:hover{ color: #E67902; background:#FFF5DA; text-decoration:none; }", ".tn-person-r .tn-topmenulist .tn-text-list li em{ color:#DE1F26; float: right; }", ".tn-person-r .tn-topmenulist-a{ border: 1px solid #EBBE7A; border-top:0; overflow: hidden; -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, .1); -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, .1); box-shadow: 3px 3px 3px rgba(0, 0, 0, .1); top:41px; left:0;}", ".tn-person-r .tn-topmenulist-b{border:0;top:42px;left:-110px;}", ".tn-person-r .tn-topmenulist-a-client{width:112px}", ".tn-person-r .tn-topmenulist-a-nav{ width:110px;}", ".tn-person-r .tn-topmenulist-a-menu{ width:110px;}", ".tn-person-r .tn-topmenulist-a-user{width:110px;}", ".tn-person-r .tn-topmenulist-a-weibo,.tn-topmenulist-a-other{ width:78px;}", ".tn-person-r .tn-topmenulist-a-mail,.tn-topmenulist-a-blog{ width:110px; }", ".tn-person-r .tn-topmenulist .tn-loading{ padding:10px 0; text-align:center; }", ".tn-person-r li { list-style:none; margin:0;padding:0;}", ".tn-person-r img { border:0; }", ".tn-person-r a:focus{ outline-style:none; }", ".tn-person-r em,", ".tn-person-r i{ font-style:normal; font-weight:normal; }", ".tn-person-r a{ color:#FF8400; text-decoration:none; }", ".tn-person-r a:hover { text-decoration:underline; }", ".tn-person-r .tn-new { margin-top:-10px;position:absolute;background:url(http://i0.sinaimg.cn/home/main/index2013/0403/icon.png) 0 -1017px; width:14px; height:11px; }", ".tn-person-r .tn-arrow { display:inline-block; width:8px; height:5px; margin:0 0 0 5px; overflow:hidden; vertical-align:middle; font-size:12px; line-height:13px; -webkit-transform:none; -moz-transform:none; -o-transform:none; background: url(http://i0.sinaimg.cn/home/main/index2013/0403/icon.png) 0 -977px no-repeat; }"].join("\n")
    });
    a.register("kit.dom.appendStyle", function(c) {
        return function(g, d) {
            var e = c.parseParam({
                autoAppend: true,
                target: null,
                type: "text/css"
            }, d);
            var f;
            g = g || "";
            g = g.toString();
            if (c.isNode(e.target) && e.target.tagName.toLowerCase() === "style") {
                f = e.target
            } else {
                f = document.createElement("style");
                f.setAttribute("type", e.type)
            }
            if (f.styleSheet) {
                f.styleSheet.cssText = f.innerHTML + g
            } else {
                f.appendChild(document.createTextNode(g))
            }
            if (e.autoAppend) {
                document.getElementsByTagName("head")[0].appendChild(f)
            }
            return f
        }
    });
    (function(k) {
        var n = "1.0";
        var j = k.comp.weibomenu, g = k.comp.blogmenu, c = k.comp.emailmenu, o = k.comp.loginbutton, f = k.comp.logoutmenu, e = k.kit.dom.appendStyle, m = k.comp.topstyle;
        e(m);
        var l = new g({
            elem: k.E("SI_Top_Blog")
        }), p = new c({
            elem: k.E("SI_Top_Mail")
        }), d = new j({
            elem: k.E("SI_Top_Weibo")
        }), h = new o({
            elem: k.E("SI_Top_Login")
        }), i = new f({
            elem: k.E("SI_Top_Logout")
        })
    })(a)
})(this, window.SINA_OUTLOGIN_LAYER.STK);
