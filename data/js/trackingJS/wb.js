sa.u.wb = {
    data: null,
    gInfo: function(d, f) {
        var b = sa.u.wb.data, a, c;
        if (!b) {
            while (d && d !== document) {
                if (sa.getData(d, "nick")) {
                    a = sa.getData(d, "nick");
                    break
                }
                if (sa.getData(d, "wid")) {
                    c = sa.getData(d, "wid");
                    break
                }
                d = d.parentNode
            }
            if (c) {
                sa.u.wb.gInfoById(c, function(e) {
                    b = {};
                    b.wid = e.id;
                    b.nick = e.screen_name;
                    b.domain = e.domain || e.profile_url;
                    b.pic = e.avatar_large || e.profile_image_url;
                    b.verified = e.verified;
                    b.verified_type = e.verified_type;
                    sa.u.wb.data = b;
                    f(b)
                })
            } else {
                if (a) {
                    sa.u.wb.gInfoByNick(a, function(e) {
                        b = {};
                        b.wid = e.id;
                        b.nick = e.screen_name;
                        b.domain = e.domain || e.profile_url;
                        b.pic = e.avatar_large || e.profile_image_url;
                        b.verified = e.verified;
                        b.verified_type = e.verified_type;
                        sa.u.wb.data = b;
                        f(b)
                    })
                }
            }
        } else {
            f(b)
        }
    },
    gInfoById: function(b, c, a) {
        sa.n.jsonp(sa.ROOT + "/wapi/getinfo?wid=" + b, function() {
            if (getinfo&&!getinfo.data.error) {
                user = getinfo.data;
                c && c(user)
            } else {
                a && a(user)
            }
        })
    },
    gInfoByNick: function(a, c, b) {
        sa.n.jsonp(sa.ROOT + "/wapi/getuser?username=" + a, function() {
            if (getuser&&!getuser.data.error) {
                user = getuser.data;
                c && c(user)
            } else {
                b && b(user)
            }
        })
    },
    WBURL: "http://weibo.com",
    cLogin: function(b, a) {
        if ("undefined" != typeof sinaSSOController) {
            sinaSSOController.autoLogin(function(c) {
                if (c == null) {
                    a()
                } else {
                    b(c)
                }
            })
        } else {
            sa.n.jsonp("http://i.sso.sina.com.cn/js/ssologin.js", function() {
                sinaSSOController.entry = "adbox";
                sinaSSOController.autoLogin(function(c) {
                    if (c == null) {
                        a()
                    } else {
                        b(c)
                    }
                })
            })
        }
    }
};
sa.u.wba = {
    mo: 1,
    gen: function(c, a, d, b) {
        a = parseInt(a, 10) || 30;
        d = parseInt(d, 10) || 30;
        b = b || 0;
        return '<a href="' + sa.u.wb.WBURL + "/" + c.domain + '" target="_blank" style="' + (b ? "display:block;border-width:" + b + "px;" : "") + "width:" + (a - 2 * b) + "px;height:" + (d - 2 * b) + 'px;"><img src="' + c.pic + '" alt="' + c.nick + '" style="width:' + (a - 2 * b) + "px;height:" + (d - 2 * b) + 'px;"/></a>'
    },
    init: function(a) {
        sa.u.wb.gInfo(a, function(b) {
            a.innerHTML = sa.u.wba.gen(b, sa.getData(a, "width"), sa.getData(a, "height"), 1)
        })
    }
};
sa.u.wbav = {
    mo: 1,
    gen: function(b, a) {
        return '<div class="wba">' + sa.u.wba.gen(b, 0, 0, 1) + '</div><div class="wbn">' + sa.u.wbn.gen(b, a) + "</div>"
    },
    init: function(a) {
        sa.u.wb.gInfo(a, function(b) {
            a.innerHTML = sa.u.wbav.gen(b, a.offsetWidth - 30)
        })
    }
};
sa.u.wbn = {
    mo: 1,
    genV: function(b) {
        var a = b.verified ? ["approve_yellow", "approve_blue", "approve_blue", "approve_blue", "approve_blue", "approve_blue", "approve_blue", "approve_blue"][b.verified_type]: "";
        return a ? '<a href="http://weibo.com/verify" target="_blank"><img src="' + sa.SRC_ROOT + '/assets/images/blank.gif" alt="新浪个人认证" class="wbn-v ' + a + '" /></a>' : ""
    },
    gShort: function(g, b) {
        var a = (Math.floor(b / 15)) * 2 - 1, f = g.replace(/[^u00-uFF]/g, "aa").length, e, c = 0, d = [];
        g = g.split("");
        while (a > 0) {
            a -= (/[^u00-uFF]/.test(g[c]) ? 2 : 1);
            d.push(g[c++])
        }
        e = (d.length < g.length ? "..." : "");
        return d.join("") + e
    },
    gen: function(b, a) {
        a = a || 100;
        a = b.verified ? (a - 15) : a;
        return ['<a style="color:inherit;font:inherit;" href="' + sa.u.wb.WBURL + "/" + b.domain + '" target="_blank" title="' + b.nick + '">' + b.nick + "</a>", this.genV(b)].join("")
    },
    init: function(a) {
        sa.u.wb.gInfo(a, function(b) {
            a.innerHTML = sa.u.wbn.gen(b, a.offsetWidth)
        })
    }
};
sa.u.wbf = {
    mo: 1,
    cur: null,
    init: function(a) {
        sa.u.wb.cLogin(function(b) {
            a.setAttribute("moc", b.uid)
        }, function() {});
        sa.u.wb.gInfo(a, function(b) {
            sa.u.wbf.cFoc(a, b.wid)
        });
        a.onclick = function() {
            if (sa.u.gStat(this, "d")) {
                return 
            }
            sa.u.wb.gInfo(a, function(b) {
                sa.u.wbf.sFoc(a, b.wid)
            })
        }
    },
    dis: function(a) {
        if (this.cur && a && a.status == 0&&!a.data.error) {
            sa.u.aStat(this.cur, "d");
            this.cur.innerHTML = '<table cellspacing="0" cellpadding="0" style="width:' + (this.cur.offsetWidth - 2) + "px;height:" + (this.cur.offsetHeight - 2) + 'px;"><tr><td><span class="add-icon">&nbsp;</span>已关注</td></tr></table>'
        } else {
            if ((a.status !== 0) || (a.data && a.data.error_code)) {
                alert((a.statusInfo && a.statusInfo.global) || (sa.u.wb.info_map && sa.u.wb.info_map[a.data.error_code]) || a.data.error || "关注失败")
            }
        }
    },
    sFoc: function(a, b) {
        sa.u.wb.cLogin(function(c) {
            sa.u.wbf.cur = a;
            sa.n.ifrFix(sa.ROOT + "/wapi/follow", "parent.sa.u.wbf.dis", {
                params: "wid=" + b,
                postname: "poststr"
            })
        }, function() {
            window.open(sa.ROOT + "/assets/wblogin.html", "adbox_wb_login", "toolbar=0,status=0,resizable=1,width=660,height=350")
        })
    },
    cFoc: function(a, b) {
        sa.n.jsonp(sa.ROOT + "/wapi/getinfo?wid=" + b, function() {
            if (!window.getinfo) {
                return 
            }
            var c = window.getinfo.data || {};
            if (c.following) {
                sa.u.aStat(a, "d");
                a.innerHTML = '<table cellspacing="0" cellpadding="0" style="width:' + (a.offsetWidth - 2) + "px;height:" + (a.offsetHeight - 2) + 'px;"><tr><td><span class="add-icon">&nbsp;</span>已关注</td></tr></table>'
            }
        })
    }
};
sa.u.wbu = {
    init: function(a) {
        sa.u.wb.cLogin(function(b) {
            a.innerHTML = "你好，" + b.nick
        }, function() {
            a.innerHTML = "你好，尊敬的用户"
        })
    }
};
sa.u.wbr = {
    mo: 1,
    genU: function(a) {
        return '<a href="' + sa.u.wb.WBURL + "/" + a.domain + '" target="_blank">' + a.name + "</a>"
    },
    init: function(a) {
        sa.u.wb.gInfo(a, function(b) {
            sa.n.jsonp(sa.ROOT + "/wapi/getchain?wid=" + b.wid, function() {
                var g = window.getchain.data || {}, h = g.users, j = "", f = 0, e, k = [], c = parseInt(sa.getData(a, "max"), 10), d = parseInt(sa.getData(a, "showavatar"), 10) || 0;
                if (h instanceof Array) {
                    j = h.length ? (g.content_type ? sa.getData(a, "tpl") : sa.getData(a, "nologintpl")) : sa.getData(a, "noughttpl");
                    h.length = Math.min(h.length, c);
                    for (f = 0; f < h.length; f++) {
                        e = h[f];
                        if (e) {
                            e.nick = e.screen_name, e.pic = e.profile_image_url;
                            e.domain = e.domain || e.profile_url;
                            d && k.push(sa.u.wba.gen(e, 30, 30))
                        }
                    }
                    j = j.replace(/\$\{([^\}]*\d+)\}/g, function(l, m) {
                        index = m.match(/\d+$/)[0];
                        return h[index] ? m.replace(/\d+$/, function(n) {
                            return sa.u.wbn.gen(h[n])
                        }) : ""
                    });
                    j = j.replace(/\$\{cf\}/g, sa.u.wbn.gen(b, 120))
                }
                a.innerHTML += j + '<div class="wbr-pp">' + k.join("") + "</div>"
            })
        })
    }
};
sa.u.wbfriends = {
    mo: 1,
    init: function(a) {
        a.innerHTML = sa.getData(a, "noughttpl");
        sa.u.wb.cLogin(function() {
            var e = document.cookie + ";";
            if (/SUP=(\S*);/.test(e)) {
                var b = e.match(/SUP=(\S*);/)[1];
                b = decodeURIComponent(b);
                var c = b.match(/uid=(\d*)&/);
                if (c && c[1]) {
                    var d = c[1];
                    sa.n.jsonp(sa.ROOT + "/wapi/getactive?wid=" + d, function() {
                        if (window.getchain) {
                            var h = window.getchain.data || {}, j = h.users, k = sa.getData(a, "tpl"), l = [], f = parseInt(sa.getData(a, "max"), 10), g = parseInt(sa.getData(a, "showavatar"), 10) || 0;
                            if (j instanceof Array && j.length === 1 && j[0].id === 2671109275) {
                                j.length = 0
                            }
                            if (j instanceof Array && j.length > 0) {
                                j.length = Math.min(j.length, f);
                                for (i = 0; i < j.length; i++) {
                                    u = j[i];
                                    if (u) {
                                        u.nick = u.screen_name, u.pic = u.profile_image_url;
                                        u.domain = u.domain || u.profile_url;
                                        g && l.push(sa.u.wba.gen(u, 30, 30))
                                    }
                                }
                                k = k.replace(/\$\{([^\}]*\d+)\}/g, function(m, n) {
                                    index = n.match(/\d+$/)[0];
                                    return j[index] ? n.replace(/\d+$/, function(o) {
                                        return sa.u.wbn.gen(j[o])
                                    }) : ""
                                });
                                a.innerHTML = k + '<div class="wbfriends-pp">' + l.join("") + "</div>"
                            }
                        }
                    })
                }
            }
        })
    }
};
sa.u.wbs = {
    mo: 1,
    init: function(a) {
        a.onclick = function() {
            sa.u.wbs.s(sa.getData(this, "txt"), sa.getData(this, "pic"))
        }
    },
    s: function(a, b) {
        sa.u.wb.cLogin(function() {
            window.open(sa.ROOT + "/assets/wbshare.html?text=" + encodeURIComponent(a) + (b ? "&img=" + encodeURIComponent(b) : ""), "adbox_wb_share", "toolbar=0,status=0,resizable=1,width=660,height=450")
        }, function() {
            window.open(sa.ROOT + "/assets/wblogin.html", "adbox_wb_login", "toolbar=0,status=0,resizable=1,width=660,height=350")
        })
    }
};
sa.u.wbrp = {
    mo: 1,
    init: function(a) {
        a.onclick = function() {
            sa.u.wbrp.rp(sa.getData(this, "id"))
        }
    },
    rp: function(a) {
        sa.u.wb.cLogin(function() {
            window.open(sa.ROOT + "/assets/wbpost.html?id=" + a, "adbox_wb_repos", "toolbar=0,status=0,resizable=1,width=660,height=450")
        }, function() {
            window.open(sa.ROOT + "/assets/wblogin.html", "adbox_wb_login", "toolbar=0,status=0,resizable=1,width=660,height=350")
        })
    }
};
sa.u.wbcontent = {
    uid: 0,
    o: {},
    gUID: function() {
        return "s-" + this.uid++
    },
    gObj: function(a) {
        return this.o[sa.getData(a, "uid")]
    },
    gData: function(f) {
        var b = f.getElementsByTagName("li"), c = 0, a, d = [];
        while (a = b[c++]) {
            d.push({
                username: sa.getData(a, "username"),
                userurl: sa.getData(a, "userurl"),
                url: sa.getData(a, "url"),
                date: sa.getData(a, "date"),
                text: sa.getData(a, "text"),
                reposts_count: sa.getData(a, "reposts_count"),
                comments_count: sa.getData(a, "comments_count")
            })
        }
        return d
    },
    gen: function(q, j, d, e) {
        var p = q;
        var g = j;
        var n = "";
        var c = "";
        var o = 0;
        var m = 0;
        var k = d.length;
        if (k > 1) {
            if (e) {
                p = q - 40;
                o = 20;
                n = '<div class="wbcontent-area wbcontent-larea"><div class="wbcontent-larrow" style="top:' + (j - 16) / 2 + 'px"></div></div>';
                c = '<div class="wbcontent-area wbcontent-rarea" style="left:' + (q - 20) + 'px;"><div class="wbcontent-rarrow" style="top:' + (j - 16) / 2 + 'px"></div></div>'
            } else {
                g = j - 40;
                m = 20;
                n = '<div class="wbcontent-area wbcontent-tarea"><div class="wbcontent-tarrow" style="left:' + (q - 16) / 2 + 'px"></div></div>';
                c = '<div class="wbcontent-area wbcontent-barea" style="top:' + (j - 20) + 'px;"><div class="wbcontent-barrow" style="left:' + (q - 16) / 2 + 'px"></div></div>'
            }
        }
        var f = 0;
        var a;
        var l = [];
        while (a = d[f++]) {
            l.push('<div class="wbcontent-item" style="postion:absolute;left:0px;top:0px;"><div><span style="color:blue;"><a target="_blank" href="' + sa.u.wb.WBURL + "/" + a.userurl + '">@' + a.username + '</a></span><span style="color:blue;"><a target="_blank" href="' + a.url + '">' + (new Date(a.date.replace("+", "UTC+"))).toLocaleString() + "</a></span></div><div>" + a.text + '</div><div><span class="wbcontent-res" style="right:' + (o + 5) + 'px;">转发(' + a.reposts_count + ")评论(" + a.comments_count + ")</span></div></div>")
        }
        return [n, c, '<div class="wbcontent-inner" style="left:' + o + "px;top:" + m + "px;width:" + (p - 10) + "px;height:" + (g - 10) + 'px;">', l.join(""), "</div>"].join("")
    },
    init: function(d) {
        var b = this.gData(d);
        d.innerHTML = this.gen(parseInt(sa.getData(d, "w"), 10) || 250, parseInt(sa.getData(d, "h"), 10) || 200, b, parseInt(sa.getData(d, "dir"), 10) || 0);
        var c = 0;
        var a = b.length;
        if (a <= 1) {
            return 
        }
        d.childNodes[0].onclick = function(e) {
            if (c > 0) {
                sa.u.wbcontent.to(d, --c)
            }
        };
        d.childNodes[1].onclick = function(e) {
            if (c < a - 1) {
                sa.u.wbcontent.to(d, ++c)
            }
        };
        d.childNodes[0].onmouseover = function(e) {
            var e = e || window.event;
            var f = e.target || e.srcElement;
            f.className += " hover"
        };
        d.childNodes[0].onmouseout = function(e) {
            var e = e || window.event;
            var f = e.target || e.srcElement;
            f.className = f.className.replace(/hover/g, "")
        };
        d.childNodes[1].onmouseover = function(e) {
            var e = e || window.event;
            var f = e.target || e.srcElement;
            f.className += " hover"
        };
        d.childNodes[1].onmouseout = function(e) {
            var e = e || window.event;
            var f = e.target || e.srcElement;
            f.className = f.className.replace(/hover/g, "")
        };
        sa.u.wbcontent.to(d, 0)
    },
    to: function(d, a) {
        var c = d.childNodes[2].childNodes;
        for (var b = c.length - 1; b >= 0; b--) {
            c[b].className += " hide";
            if (b == a) {
                c[b].className = c[b].className.replace(/hide/g, "")
            }
        }
        d.childNodes[0].className = d.childNodes[0].className.replace(/invalid/g, "");
        d.childNodes[1].className = d.childNodes[1].className.replace(/invalid/g, "");
        if (a == 0) {
            d.childNodes[0].className += " invalid"
        }
        if (a == c.length - 1) {
            d.childNodes[1].className += " invalid"
        }
    }
};
sa.u.wbsend = {
    mo: 1,
    gen: function(e, c, b, a, d) {
        return '<div class="wbsend-text" style="height:' + (d - 30) + "px;width:" + (a - 5) + 'px;"><textarea style="width:100%;height:100%;' + b + '">' + e + '</textarea></div><div><div class="wbsend-pic"></div><div  class="wbsend-send"><a>发布微博</a></div></div>'
    },
    init: function(c) {
        c.innerHTML = this.gen(sa.getData(c, "text"), sa.getData(c, "pic"), sa.getData(c, "textstyle"), parseInt(sa.getData(c, "w"), 10) || 250, parseInt(sa.getData(c, "h"), 10) || 80);
        var b = parseInt(sa.getData(c, "atnum")) || 0;
        var a = sa.getData(c, "nick");
        sa.u.wb.cLogin(function() {
            var g = document.cookie + ";";
            if (/SUP=(\S*);/.test(g)) {
                var d = g.match(/SUP=(\S*);/)[1];
                d = decodeURIComponent(d);
                var e = d.match(/uid=(\d*)&/);
                if (e && e[1]) {
                    var f = e[1];
                    sa.n.jsonp(sa.ROOT + "/wapi/getactive?wid=" + f, function() {
                        if (!window.getchain) {
                            var n = document.createTextNode("@" + a);
                            c.childNodes[0].childNodes[0].appendChild(n)
                        } else {
                            var m = window.getchain.data || {};
                            var l = "";
                            var h = b;
                            var k = m.users;
                            if (k instanceof Array && k.length > 0) {
                                for (var j = 0; j < h; j++) {
                                    if (k[j] && k[j].id !== 2671109275) {
                                        l += "@" + k[j].name + " "
                                    }
                                }
                                var n = document.createTextNode(l);
                                c.childNodes[0].childNodes[0].appendChild(n)
                            }
                        }
                    })
                }
            }
        }, function() {
            c.childNodes[0].childNodes[0].append(a)
        });
        c.childNodes[1].childNodes[1].childNodes[0].onclick = function() {
            var d = c.childNodes[0].childNodes[0].innerHTML;
            sa.u.wbsend.s(d)
        }
    },
    cb: function() {
        alert("发布成功")
    },
    s: function(a, b) {
        sa.u.wb.cLogin(function() {
            sa.n.ifrFix(sa.ROOT + "/wapi/create", "parent.sa.u.wbsend.cb", {
                params: a,
                postname: "status"
            })
        }, function() {
            window.open(sa.ROOT + "/assets/wblogin.html", "adbox_wb_login", "toolbar=0,status=0,resizable=1,width=660,height=350")
        })
    }
};
sa.u.usern = {
    mo: 1,
    init: function(b) {
        var a = sa.getData(b, "before"), c = sa.getData(b, "after");
        sa.u.wb.cLogin(function(d) {
            sa.n.jsonp(sa.ROOT + "/wapi/getinfo?wid=" + d.uid, function() {
                if (!window.getinfo) {
                    b.innerHTML = a || "你好，访客"
                } else {
                    var e = window.getinfo.data || {};
                    if (!e.error) {
                        e.nick = e.screen_name;
                        var f = sa.u.wbn.gen(e);
                        b.innerHTML = (c ? c.replace(/\$\{nick\}/g, f) : f)
                    } else {
                        b.innerHTML = a || "你好，尊敬的新浪用户"
                    }
                }
            })
        }, function() {
            b.innerHTML = a || "你好，访客"
        })
    }
};
sa.u.usera = {
    mo: 1,
    init: function(a) {
        sa.u.wb.cLogin(function(b) {
            sa.n.jsonp(sa.ROOT + "/wapi/getinfo?wid=" + b.uid, function() {
                if (!window.getinfo) {
                    a.innerHTML = "访客"
                } else {
                    var c = window.getinfo.data || {};
                    if (!c.error) {
                        c.pic = c.avatar_large;
                        c.nick = c.screen_name;
                        a.innerHTML = sa.u.wba.gen(c, parseInt(sa.getData(a, "width"), 10), parseInt(sa.getData(a, "height"), 10), 1)
                    } else {
                        a.innerHTML = "新浪用户"
                    }
                }
            })
        }, function() {
            a.innerHTML = "访客"
        })
    }
};
document.domain = "sina.com.cn";
