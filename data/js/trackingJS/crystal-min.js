!function(lib_name, crystal_args, namespace, ua) {
    function sns_pingurl(opt, act) {
        var actid = 0, subactid = 0, m_options = mix({}, opt);
        switch (act) {
        case"follow_success":
            actid = 80001;
            break;
        case"sns_plus_success":
            actid = 85001;
            break;
        case"share_success":
            actid = 80002;
            break;
        case"banner_click":
            actid = 80005;
            break;
        case"relation_click":
            actid = 80007;
            break;
        case"relation_click_weibo":
            actid = 70007;
            break;
        case"banner_close":
            actid = 85004;
            break;
        case"act_join_success":
            actid = 80006;
            break;
        case"weibo_join_success":
            actid = 80009;
            break;
        case"follow_click":
            actid = 80008
        }
        return m_options.actid = actid, m_options.subactid = subactid, m_options.aver = m_options.aver ? m_options.aver : "", m_options.token = m_options.token ? "&snstoken=" + m_options.token : "", m_options.uin = m_options.uin ? "&snsuin=" + m_options.uin : "", format("http://m.l.qq.com?t=s&mid={oid}&actid={actid}&subactid={subactid}&aver={aver}&oid={oid}&locid={loc}{token}{uin}", m_options)
    }
    var pageStartTime;
    window.QosSS && QosSS.t ? pageStartTime = QosSS.t[0] : window.QosS && QosS.G ? pageStartTime = QosS.G.startTime || QosS.G.st : window.QosS && QosS.Global && (pageStartTime = QosS.Global.startTime);
    var DURATION_LOAD_JS = pageStartTime && window.TIME_BEFORE_LOAD_CRYSTAL ? window.TIME_BEFORE_LOAD_CRYSTAL - pageStartTime: - 1;
    Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
        if (void 0 === this || null === this)
            throw new TypeError('"this" is null or not defined');
        var length = this.length>>>0;
        for (fromIndex =+ fromIndex || 0, 1 / 0 === Math.abs(fromIndex) && (fromIndex = 0), 0 > fromIndex && (fromIndex += length, 0 > fromIndex && (fromIndex = 0)); length > fromIndex; fromIndex++)
            if (this[fromIndex] === searchElement)
                return fromIndex;
        return - 1
    }, Array.prototype.forEach = function(callback, thisArg) {
        thisArg || (thisArg = null);
        var i, len = this.length;
        for (i = 0; len > i; i++)
            callback.call(thisArg, this[i], i, this)
    }), Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    var Uuids = {
        get: function() {
            for (var s = [], hexDigits = "0123456789abcdef", i = 0; 36 > i; i++)
                s[i] = hexDigits.substr(Math.floor(16 * Math.random()), 1);
            return s[14] = "4", s[19] = hexDigits.substr(3 & s[19] | 8, 1), s[8] = s[13] = s[18] = s[23] = "-", s.join("")
        },
        getReqId: function() {
            return this.get().replace(/[-]/g, "")
        },
        getCurrentPageReqId: function() {
            return this.cprid ? this.cprid : this.cprid = this.getReqId()
        }
    };
    namespace.Uuids = Uuids;
    var CrystalPageSpeed = {
        tagMap: {},
        time: function(tag, time) {
            var t = time || Date.now();
            this.tagMap[tag] ? {} : this.tagMap[tag] = {};
            var tagRecord = this.tagMap[tag];
            - 1 === tagRecord.start||-1 === tagRecord.end || tagRecord.duration || (!tagRecord.start || tagRecord.end) && (tagRecord.start = t, tagRecord.end = void 0)
        },
        timeEnd: function(tag) {
            var endTime = Date.now(), tag = this.tagMap[tag];
            return tag ? ( - 1 === tag.start||-1 === tag.end || tag.duration || tag.end || (tag.end = endTime, tag.duration =- 1 === tag.start?-1 : endTime - tag.start), tag.duration) : void 0
        },
        setDuration: function(tag, duration) {
            this.tagMap[tag] = {
                start: - 1,
                end: - 1,
                duration: duration
            }
        },
        flush: function(pingSender) {
            if (!this.isDirtyData() && crystal_args.jsProfileOpen) {
                var k, params = {}, envInfo = this.getEnvInfo();
                for (k in envInfo)
                    params[k] = envInfo[k];
                for (k in this.tagMap)
                    this.tagMap[k].duration + "" && ("lview-l.qq.com" === k ? params.lview = this.tagMap[k].duration : params[k] = this.tagMap[k].duration);
                0 === params.err && ("undefined" == typeof params.ping && (params.err = 6001), "undefined" == typeof params.cdn && (params.err = 5001), "undefined" == typeof params.lview && (params.err = 4001), "undefined" == typeof params.dr && (params.err = 3001), - 1 === params.loadjs && (params.err = 1001)), params.all = (new Date).getTime() - this.tagMap.js.start, params.all < 1e3 * crystal_args.lview_time_out && 4002 === params.err && (delete params.lview, params.err = 4004), pingSender = pingSender || sendPing, pingSender(crystal_args.mo_page_url + "?" + serializeQuery(params))
            }
            this.flush = function() {}
        },
        getEnvInfo: function() {
            if (!this.envInfo) {
                var d = this.getBrowserDimension(), dmMatch = location.href.match(/\/\/([^\?\/]*)\/?\??/), dm = dmMatch && dmMatch[1] ? dmMatch[1]: - 1;
                this.envInfo = {
                    err: 0,
                    dm: crystal_args.domain || dm,
                    ua: browsersniffer(navigator.userAgent),
                    cv: namespace.version,
                    fv: namespace.getFlashVersion(),
                    bw: d.width,
                    bh: d.height,
                    sw: window.screen.width,
                    sh: window.screen.height,
                    reqid: namespace.Uuids.getCurrentPageReqId()
                }
            }
            return this.envInfo
        },
        getBrowserDimension: function() {
            var r = {
                width: - 1,
                height: - 1
            }, myHeight = (document.documentElement, document.body, - 1), myWidth =- 1;
            return "number" == typeof window.innerWidth ? (myWidth = window.innerWidth, myHeight = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (myWidth = document.documentElement.clientWidth, myHeight = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (myWidth = document.body.clientWidth, myHeight = document.body.clientHeight), r.width = myWidth, r.height = myHeight, r
        },
        setEnvInfoProperty: function(propName, propValue) {
            this.getEnvInfo()[propName] = propValue
        },
        isDirtyData: function() {
            var i, testTags = ["loadjs", "js", "dr"];
            for (i = 0; i < testTags.length; i++) {
                var t = this.tagMap[testTags[i]];
                if (t && t.duration && t.duration<-1)
                    return !0
            }
            return !1
        },
        on: function(el, type, handler) {
            return document.addEventListener ? (el.addEventListener(type, handler, !1), handler) : (el.attachEvent("on" + type, handler), handler)
        },
        isElementInViewport: function(el, adWidth, adHeight) {
            if (!el.getBoundingClientRect)
                throw new Error("Method getBoundingClientRect is not supported to detect advertisement click.");
            var visibleArea, adArea = parseInt(adWidth) * parseInt(adHeight), rect = el.getBoundingClientRect(), top = rect.top, left = rect.left, bottom = rect.bottom, right = rect.right, winHeight = window.innerHeight || document.documentElement.clientHeight, winWidth = window.innerWidth || document.documentElement.clientWidth, visibleHeight = 0 > top ? adHeight + top: bottom > winHeight ? adHeight - bottom + winHeight: adHeight, visibleWidth = 0 > left ? adWidth + left: right > winWidth ? adWidth - right + winWidth: adWidth;
            return visibleArea = visibleHeight * visibleWidth, visibleArea >= adArea / 2
        },
        adClickMap: {},
        registerClick: function(adEl, clickableEl, adData) {
            if (crystal_args.jsProfileOpen) {
                var loc = adData.loc, oid = adData.oid;
                if (!this.adClickMap[loc]) {
                    this.adClickMap[loc] = {
                        loc: loc,
                        adEl: adEl,
                        adData: adData,
                        visibleStartTime: adData.fodder[0] && this.isElementInViewport(adEl, adData.fodder[0].width, adData.fodder[0].height) ? Date.now(): null
                    };
                    var self = this;
                    this.on(clickableEl, "click", function() {
                        var now = Date.now(), visibleStartTime = self.adClickMap[loc].visibleStartTime;
                        sendPing(crystal_args.mo_ad_click_url + "?" + serializeQuery({
                            loc: loc,
                            oid: oid,
                            reqid: namespace.Uuids.getCurrentPageReqId(),
                            stay: pageStartTime ? now - pageStartTime: - 1,
                            click: visibleStartTime ? now - visibleStartTime: - 1
                        }))
                    })
                }
            }
        },
        initVisibleAdDetectorEvent: function() {
            function handler() {
                var k, v;
                for (k in self.adClickMap)
                    v = self.adClickMap[k], v.adData.fodder[0] && self.isElementInViewport(v.adEl, v.adData.fodder[0].width, v.adData.fodder[0].height) && (v.visibleStartTime = Date.now())
            }
            var self = this;
            this.on(window, "DOMContentLoaded", handler), this.on(window, "load", handler), this.on(window, "scroll", handler), this.on(window, "resize", handler)
        }
    }, Cps = namespace.cps = CrystalPageSpeed;
    if (Cps.initVisibleAdDetectorEvent(), Cps.setDuration("loadjs", DURATION_LOAD_JS), Cps.time("js", window.TIME_BEFORE_LOAD_CRYSTAL ? window.TIME_BEFORE_LOAD_CRYSTAL : - 1), Cps.timeEnd("js"), Cps.time("dr"), "undefined" == typeof window[lib_name]) {
        window[lib_name] = window.crystal2 = window.AD2 = namespace, namespace.version = "crystal_v2.1Beta09Build094", eval(namespace.output(lib_name)), namespace.crystal_args = crystal_args;
        var refs = namespace.__images = [], sendPing = function(url, norandom) {
            var img = new Image(1, 1);
            if (!norandom) {
                var constr = "?";
                - 1 != url.indexOf("?") && (constr = "&"), url = url + constr + Math.random()
            }
            return img.src = url, refs.push(img), this
        }, report_ua = function() {
            for (var i in ua)
                if (0 != ua[i])
                    return i + ua[i]
        }(), importScript = namespace.importScript = function(url, callback, charset, errorCallback) {
            var script = document.createElement("script");
            script.src = url, charset && (script.charset = charset), callback && (ua.ie ? script.onreadystatechange = function() {
                var rs = this.readyState;
                ("loaded" === rs || "complete" === rs) && callback()
            } : script.onload = callback), errorCallback && "onerror"in script && (script.onerror = errorCallback), document.getElementsByTagName("head")[0].appendChild(script)
        };
        try {
            var url_search = location.search, channel_match = location.href.match(/([\w\.]+)\.qq\.com/), channel = (channel_match && channel_match[1]).toLowerCase();
            url_search.indexOf("pgv_ref=aio") >= 0 && (channel = "aio")
        } catch (e) {}
        var IPingBase = {
            append: doNothing,
            flush: doNothing,
            touch: sendPing
        };
        namespace.contains = document.documentElement.contains ? function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : document.documentElement.compareDocumentPosition ? function(a, b) {
            return !!(16 & a.compareDocumentPosition(b))
        } : function() {
            return !1
        }, namespace.sns_pingurl = sns_pingurl;
        var fp11input = null, pageinfo = namespace.pageinfo = {
            info: null,
            order: []
        }, limitchar = function(str, maxchar) {
            for (var cl = str.length, ret = "", olen = 0, i = 0; cl > i; i++) {
                var t = encodeURIComponent(str.substr(i, 1));
                olen += t.length, maxchar > olen && (ret += t)
            }
            return ret
        }, encodeURIComLimit = function(str, maxchar) {
            var encodeStr = encodeURIComponent(str);
            if (encodeStr.length > maxchar)
                for (var isOver=!1; !isOver;) {
                    encodeStr = encodeStr.substr(0, maxchar);
                    try {
                        decodeURIComponent(encodeStr), isOver=!0
                    } catch (e) {
                        maxchar--
                    }
                }
            return encodeStr
        }, isFromDiscuz = function(fromStr) {
            return fromStr ? fromStr.indexOf("/f/discuz")>-1 || fromStr.indexOf("search.php?")>-1 : !1
        }, collectInfo = function(mode) {
            var info = null;
            if (null != namespace.pageinfo.info)
                info = namespace.pageinfo.info;
            else {
                var keywords = "", title = "", refer = "", soso = "";
                each(document.getElementsByTagName("meta"), function(o) {
                    "keywords" == o.getAttribute("name") && (keywords = o.getAttribute("content") || "")
                });
                try {
                    title = document.getElementsByTagName("title")[0].innerHTML, refer = document.referrer;
                    var regex = new RegExp("(?:yahoo.+?[?|&]p=|openfind.+?query=|google.+?q=|lycos.+?query=|onseek.+?keyword=|search.tom.+?word=|search.qq.com.+?word=|zhongsou.com.+?word=|search.msn.com.+?q=|yisou.com.+?p=|sina.+?word=|sina.+?query=|sina.+?_searchkey=|sohu.+?word=|sohu.+?key_word=|sohu.+?query=|163.+?q=|baidu.+?wd=|baidu.+?kw=|baidu.+?word=|3721.com.+?p=|Alltheweb.+?q=|soso.+?w=|115.+?q=|youdao.+?q=|sogou.+?query=|bing.+?q=|114.+?kw=|/f/discuz.+q=|/.+/search.php.+?kw=)([^&]*)"), result = refer.match(regex);
                    if (result) {
                        var from = result[0];
                        if (0 === result[1].indexOf("%25") && (result[1] = decodeURIComponent(result[1])), isFromDiscuz(from))
                            refer = "discuz%7C" + result[1];
                        else 
                            try {
                                refer = result[0].substr(0, result[0].indexOf(".")) + "%7C" + result[1]
                        } catch (e) {
                            refer = result[0].substr(0, result[0].indexOf(".")) + "%7C" + result[1]
                        }
                    } else 
                        refer = ""
                } catch (e) {}
                keywords = limitchar(keywords, 360), title = limitchar(title, 180), refer = refer.substr(0, 90), soso = limitchar(soso, 90), info = {
                    k: keywords,
                    t: title,
                    r: refer,
                    s: soso
                }, namespace.pageinfo.info = info
            }
            return 1 == mode ? "&k=" + info.k + "&t=" + info.t + "&r=" + info.r + "&s=" + info.s : info
        };
        window[lib_name].ActionPing = {
            actionCodeDictionary: {
                RICH_COUPLET_MOUSEOVER: 40006,
                RICH_COUPLET_MOUSEOUT: 40005,
                RICH_COUPLET_CLOSE: 40001,
                RICH_COUPLET_SWITCH: 40009,
                RICH_COUPLET_SHOW: 40008,
                EXTEND_TURNER_EXTEND: 60003,
                EXTEND_TURNER_REDUCE: 60004
            },
            urlTemplate: "http://m.l.qq.com?t=s&mid={mid}&actid={actid}&subactid={subactid}&aver={aver}&oid={oid}&locid={loc}",
            _requestByImg: function(url, norandom) {
                var img = new Image(1, 1);
                if (!norandom) {
                    var constr = "?";
                    - 1 != url.indexOf("?") && (constr = "&"), url = url + constr + Math.random()
                }
                return img.src = url, refs.push(img), this
            },
            send: function(parameter) {
                var actionId = this.actionCodeDictionary[parameter.actionCode] || parameter.actionId;
                parameter.actid = actionId, parameter.mid = parameter.mid || parameter.oid, parameter.subactid = parameter.subactid || 0;
                var currentUrl = format(this.urlTemplate, parameter);
                this._requestByImg(currentUrl)
            }
        };
        var DataStorage = window[lib_name].DataStorage = function() {
            function generateExpireDate(expireTime) {
                return expireTime ? new Date((new Date).getTime() + 6e4 * expireTime).toUTCString() : void 0
            }
            var userDataDomElement, mod = "DataStorage", tests = {};
            return tests.localstorage = function() {
                try {
                    return localStorage.setItem(mod, mod), localStorage.removeItem(mod), !0
                } catch (e) {
                    return !1
                }
            }, tests.userdata = function() {
                try {
                    return userDataDomElement = document.createElement("input"), userDataDomElement.type = "hidden", "undefined" == typeof userDataDomElement.addBehavior?!1 : (userDataDomElement.addBehavior("#default#userData"), document.body.insertBefore(userDataDomElement, document.body.firstChild), userDataDomElement.load(mod), userDataDomElement.setAttribute(mod, mod), userDataDomElement.save(mod), userDataDomElement.load(mod), userDataDomElement.expires = new Date(315532799e3).toUTCString(), !0)
                } catch (e) {
                    return !1
                }
            }, tests.localstorage() ? {
                setItem: function(key, value) {
                    localStorage.setItem(key, value)
                },
                getItem: function(key) {
                    return localStorage.getItem(key)
                },
                removeItem: function(key) {
                    localStorage.removeItem(key)
                }
            } : tests.userdata() && ua.ie < 9 ? {
                defExps: 525600,
                valueKeyStr: "savedValue",
                setItem: function(key, value, expireTime) {
                    try {
                        userDataDomElement.load(key), userDataDomElement.setAttribute(this.valueKeyStr, value), expireTime = expireTime ? expireTime : this.defExps, userDataDomElement.expires = generateExpireDate(expireTime), userDataDomElement.save(key)
                    } catch (ex) {}
                },
                getItem: function(key) {
                    try {
                        return userDataDomElement.load(key), userDataDomElement.getAttribute(this.valueKeyStr)
                    } catch (ex) {
                        return null
                    }
                },
                removeItem: function(key) {
                    this.setItem(key, !1, - this.defExps)
                }
            } : {
                deserializeString: function(assign_token, pair_separator, need_last, need_decode) {
                    var decode = need_decode ? decodeURIComponent: function(k) {
                        return k
                    };
                    return function(s) {
                        var ret = {};
                        need_last && (s = s.replace(new RegExp(pair_separator + "$"), ""));
                        for (var pairArray = s.split(pair_separator), i = 0; i < pairArray.length; i++) {
                            var pair = pairArray[i], key_value = pair.split(assign_token);
                            ret[decode(key_value[0])] = decode(key_value[1])
                        }
                        return ret
                    }
                },
                setItem: function(key, value, expireTime) {
                    var text = key + "=" + value;
                    expireTime && (text += "; expires=" + generateExpireDate(expireTime)), text += "; path=/", document.cookie = text
                },
                getItem: function(key) {
                    if (key) {
                        var o = this.deserializeString("=", "; ", !1, !1)(document.cookie);
                        return o[key]
                    }
                },
                removeItem: function(key) {
                    this.setItem(key, "", - 1)
                }
            }
        }(), VISITOR_PING_WITH_HOST_DEFAULT_HOST = "p.l.qq.com", VisitorPingWithHost = function() {
            "use strict";
            var maxurl = 2048, maxRurl = 100, rurl = encodeURIComLimit(document.referrer, maxRurl), pingTemplate = "http://{host}/p?oid={oid}&cid={cid}&loc={loc}&aver={aver}&soid={soid}&pri={pri}&tango={tango}&dtype={dtype}&targetid={targetid}&btoid={btoid}&pctr={pctr}&btpri={btpri}&extstr={extstr}&chl={chl}&rurl=" + rurl, defaultHost = VISITOR_PING_WITH_HOST_DEFAULT_HOST, cache = {}, createCacheData = function(host) {
                return {
                    host: host,
                    oid: [],
                    cid: [],
                    loc: [],
                    aver: [],
                    soid: [],
                    pri: [],
                    tango: [],
                    dtype: [],
                    targetid: [],
                    btoid: [],
                    pctr: [],
                    btpri: [],
                    extstr: [],
                    chl: []
                }
            }, clearCache = function() {
                cache = {}
            }, spliceData = function(flushData, len) {
                var cacheDataCopy = {};
                return 0 > len && (len = flushData.oid.length + len), each(flushData, function(v, k) {
                    cacheDataCopy[k] = "host" === k ? v : v.splice(0, len)
                }), cacheDataCopy
            }, filterFlushData = function(flushData) {
                if (flushData.oid.length) {
                    {
                        flushData.oid.length
                    }
                    flushData.pri.toString().replace(/\,/g, "").length === flushData.pri.length && (flushData.pri = []), flushData.tango.toString().indexOf("1") < 0 && (flushData.tango = []);
                    for (var filters = ["pctr", "targetid", "btoid", "dtype", "btpri", "extstr", "chl"], i = 0, flen = filters.length; flen > i; i++) 
                        / [1 - 9] / .test(flushData[filters[i]].toString()) || (flushData[filters[i]] = [])
                }
                return flushData
            }, flush = function(flushData) {
                flushData.oid.length && (flushData = filterFlushData(flushData), sendPing(format(pingTemplate, flushData) + collectInfo(1), 0), namespace.pingSent || (Cps.timeEnd("ping"), namespace.cdnTest && Cps.flush(), namespace.pingSent=!0))
            }, flushAll = function() {
                each(cache, function(v) {
                    flush(v)
                }), clearCache()
            }, bufferFlush = buffer(flushAll, 2e3);
            return clearCache(), mix(instance(IPingBase), {
                append: function(data) {
                    var host = data.ping || defaultHost;
                    cache[host] || (cache[host] = createCacheData(host));
                    var flag=!1;
                    indexOf(cache[host].loc, data.loc)>-1 && (flag=!0), each(cache[host], function(v, k) {
                        flag || "host" === k || v.push(data[k] ? data[k] : 0)
                    });
                    var cacheData = cache[host], clen = collectInfo(1).length, purl = format(pingTemplate, cacheData), ncacheData = [];
                    purl.length + clen >= maxurl ? (ncacheData = spliceData(cacheData, - 1), flush(ncacheData)) : bufferFlush()
                },
                flush: flushAll
            })
        }(), VisitorPing = namespace.ping = function() {
            "use strict";
            return mix(instance(IPingBase), {
                append: function(data) {
                    VisitorPingWithHost.append(data)
                },
                flush: function() {
                    VisitorPingWithHost.flush()
                }
            })
        }(), getFlashVersion = namespace.getFlashVersion = function() {
            try {
                if (navigator.plugins && navigator.plugins.length > 0)
                    return parseInt(navigator.plugins["Shockwave Flash"].description.split(" ")[2], 10);
                if ("undefined" != typeof window.ActiveXObject) {
                    var flash;
                    try {
                        flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {
                        for (var i = 15; i > 5; i--)
                            try {
                                flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                                break
                        } catch (e) {}
                    }
                    return flash ? parseInt(flash.GetVariable("$version").split(" ")[1].split(",")[0], 10) : 0
                }
                return 0
            } catch (e) {
                return 0
            }
        }, browsersniffer = function(uastr) {
            if (!uastr)
                return "unknown";
            var uastr = uastr.toLowerCase(), pos =- 1, ret = uastr.match(/(?:metasr.\d*|qqbrowser.\d*|maxthon.\d*|theworld|lbbrowser|firefox.\d*|opera.\d*|bidubrowser.\d*)/);
            if (null !== ret)
                return ret[0].replace(" ", "").replace("/", "");
            if ((pos = uastr.indexOf("chrome"))>-1)
                return "chrome" + parseInt(uastr.substr(pos + 7, 4));
            if ((pos = uastr.indexOf("safari"))>-1)
                return "safari";
            var mpos = uastr.indexOf("msie");
            if (mpos>-1)
                return "ie" + parseInt(uastr.substr(mpos + 5, 2));
            var tpos = uastr.indexOf("trident");
            if (tpos>-1) {
                var rvpos = uastr.indexOf("rv:");
                if (rvpos>-1)
                    return "ie" + parseInt(uastr.substr(rvpos + 3, 2))
            }
            return uastr
        }, getFlashObject = namespace.getFlashObject = function(flashId) {
            try {
                return window.document[flashId] ? window.document[flashId] : document.getElementById(flashId)
            } catch (e) {
                return 0
            }
        };
        !function(dom, evt, cookie) {
            function getAntiCSRFToken() {
                function _getCookie(c_name) {
                    var i, x, y, ARRcookies = document.cookie.split(";");
                    for (i = 0; i < ARRcookies.length; i++)
                        if (x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("=")), y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1), x = x.replace(/^\s+|\s+$/g, ""), x == c_name)
                            return unescape(y)
                }
                function _getHash(key, hash, type) {
                    if (void 0 === key || null === key || 0 === key.length)
                        return "";
                    for (var i = 0, len = key.length; len > i; ++i)
                        hash += (hash<<5) + key.charAt(i).charCodeAt();
                    return hash = 2147483647 & hash, hash = hash.toString(16), type + (new Array(8 - hash.length + 1).join("0") + hash).toUpperCase()
                }
                var skeyHash = _getHash(_getCookie("skey"), 73231, "1"), lskeyHash = _getHash(_getCookie("lskey"), 48995, "2"), version = "A";
                return version + skeyHash + lskeyHash
            }
            function apiTokenEncode(oid, locat) {
                function apitoken_num2chr(len) {
                    var code;
                    if (len >= 0 && 9 >= len)
                        code = "0".charCodeAt(0) + len;
                    else if (len >= 10 && 35 >= len)
                        code = len - 10 + "a".charCodeAt(0);
                    else {
                        if (!(len >= 36 && 61 >= len))
                            return - 1;
                        code = len - 36 + "A".charCodeAt(0)
                    }
                    return String.fromCharCode(code)
                }
                function apitoken_numlen(num) {
                    var dec_num = 0;
                    do 
                        dec_num++, num/=10;
                    while (parseInt(num));
                    return dec_num
                }
                var version = "1", oidToken = "1" + apitoken_num2chr(apitoken_numlen(oid)) + oid, locarToken = "2" + apitoken_num2chr(locat.length) + locat, ac = getAntiCSRFToken(), acToken = "3" + apitoken_num2chr(ac.length) + ac;
                return version + oidToken + locarToken + acToken
            }
            if (mix(namespace, {
                dom: dom,
                evt: evt,
                ua: ua,
                cookie: cookie
            }), evt.on(window, "load", function() {
                setTimeout(function() {
                    crystal_args.mo_ping_script && Math.random() < crystal_args.mo_ping_ratio && importScript(crystal_args.mo_ping_script)
                }, 1e3)
            }), ua.gecko) {
                var xhr = new XMLHttpRequest;
                window.onbeforeunload = function() {
                    Cps.flush(function(url) {
                        xhr.open("GET", url, !1), xhr.send(null)
                    })
                }
            } else 
                evt.on(window, "beforeunload", function() {
                    Cps.flush()
                });
            evt.ready(function() {
                if (getFlashVersion() >= 11) {
                    var flashplayerid = generateId();
                    fp11input = dom.createElement({
                        position: "absolute",
                        left: "-1000px",
                        top: "50px",
                        width: "10px",
                        "z-index": - 1,
                        cursor: "none"
                    }, {
                        type: "text",
                        id: flashplayerid,
                        value: ""
                    }, "input");
                    var body = document.body || document.documentElement;
                    body.appendChild(fp11input)
                }
            }), evt.on(window, "unload", function() {
                VisitorPing.flush()
            }), namespace.resource = function(file) {
                return crystal_args.file_path + file
            }, namespace.resource_swf = function(file) {
                return crystal_args.ext_path + file
            };
            var getExtension = namespace.getExtension = function(uri) {
                try {
                    return /\.(\w+)(?:$|\?|\#)/.exec(uri)[1].toLowerCase()
                } catch (e) {
                    return "jpg"
                }
            }, htmlEncode = function() {
                var el = document.createElement("pre");
                return function(str) {
                    return el.innerHTML = "", el.appendChild(document.createTextNode(str)), el.innerHTML
                }
            }();
            namespace.getPlayIndex = function() {
                return parseInt(cookie.get("ad_play_index")) || Math.floor(100 * Math.random())
            };
            var display_index = namespace.getPlayIndex();
            cookie.set("ad_play_index", display_index + 1, {
                expires: 1,
                path: "/"
            });
            var queue = function(precondition) {
                var preconditioned=!1, precondition_is_running=!1, fns = [];
                return function(fn) {
                    preconditioned ? fn() : (fns.push(fn), precondition_is_running || (precondition(function() {
                        each(fns, function(f) {
                            f()
                        }), preconditioned=!0
                    }), precondition_is_running=!0))
                }
            }, afterImportExtension = queue(function(callback) {
                crystal_args.is_debug && (crystal_args.extension_js_src += "?_=" + (new Date).getTime()), importScript(crystal_args.extension_js_src, callback)
            }), NONE = namespace.NONE = 1, IMMEDIATELY = namespace.IMMEDIATELY = 2, LAZY = namespace.LAZY = 3, SELF_PING = namespace.SELF_PING = 4, default_fodder_count = 3, default_index = Math.floor(10 * Math.random())%default_fodder_count, getDefaultFodderUrl = function() {
                var scales = [{
                    scale: 7.15,
                    size: "960x90"
                }, {
                    scale: 2.4,
                    size: "409x114"
                }, {
                    scale: 0,
                    size: "300x250"
                }
                ], getScale = function(width, height) {
                    0 == height && (height = 1);
                    for (var s = width / height, i = 0; i < scales.length; i++)
                        if (s >= scales[i].scale)
                            return scales[i].size
                };
                return function(width, height) {
                    return format(namespace.resource("default_fodders/{scale}_{index}.swf?v=20130124"), {
                        scale: getScale(width, height),
                        index: default_index++%default_fodder_count
                    })
                }
            }(), getDefaultFodder = function(el) {
                var sw = parseInt(el.style.width), sh = parseInt(el.style.height), ow = el.offsetWidth, oh = el.offsetHeight, w = 0 !== ow || isNaN(sw) ? ow: sw, h = 0 !== oh || isNaN(sh) ? oh: sh;
                return {
                    resource_url: getDefaultFodderUrl(w, h),
                    width: w,
                    height: h,
                    cover: !1
                }
            }, getMulticlickurl = function(display_config, el) {
                var initvars = {};
                if (0 != display_config.click_prefix && 0 != display_config.click_content)
                    for (var click_arr = display_config.click_content.split(","), i = 0, len = click_arr.length; len > i; i++) {
                        var tmp = click_arr[i].split("|");
                        initvars[tmp[0]] = display_config.click_prefix + "seq=" + tmp[1] + "&loc=" + (el.id || "")
                    }
                return initvars
            }, getFodderCover = namespace.getFodderCover = function(el) {
                var childNodes = el.childNodes;
                if (childNodes && 0 != childNodes.length)
                    for (var len = childNodes.length, i = 0; len > i; i++) {
                        var currrentChild = childNodes[i];
                        if (dom.hasClass(currrentChild, "a_cover") && currrentChild.getAttribute("rel"))
                            return currrentChild;
                            var rt = arguments.callee(currrentChild);
                            if (rt)
                                return rt
                    }
            }, hasFilterInParent = function(el) {
                try {
                    var parent = el.parentNode;
                    return parent ? parent.style.filter?!0 : hasFilterInParent(parent) : !1
                } catch (e) {
                    return !1
                }
            }, dic_display = {
                third_party_script_plus: {
                    ping: LAZY,
                    render: function(config, el) {
                        if (config.fodder && config.fodder[0]) {
                            var ru = config.fodder[0].resource_url, fileName = /.+\/(\w+\.\w+)(?:\?.+)?/g.exec(ru)[1], fileNameArray = fileName.split("."), newFileName = fileNameArray[0] + "_" + config.oid + "_" + config.cid + "." + fileNameArray[1];
                            config.fodder[0].resource_url = ru.replace(fileName, newFileName), renderFodder(config.fodder[0], el)
                        }
                    }
                },
                third_party_script: {
                    ping: LAZY,
                    render: function(config, el) {
                        renderFodder(config.fodder[0], el)
                    }
                },
                banner: {
                    ping: LAZY,
                    render: function(config, el) {
                        config.display_config && config.display_config.click_prefix && config.display_config.click_content && (config.fodder[0].initvars = namespace.mix(config.fodder[0].initvars, getMulticlickurl(config.display_config, el))), config.display_config && 1 == config.display_config.support_api && (config.fodder[0].initvars = namespace.mix(config.fodder[0].initvars, {
                            token: namespace.getApitoken(config.oid, config.loc)
                        })), config.fodder[0].display = "banner", renderFodder(config.fodder[0], el, config.icon, "rb"), config.display_config && 1 == config.display_config.private_setting && evt.on(el, "mouseover", function() {
                            var icon = dom.$("private_setting_" + config.oid);
                            if (!icon) {
                                icon = createIcon("private_setting", config.display_config.icon_location || "rt", "20px", "20px", {
                                    title: "闅愮璁剧疆",
                                    link_to: "http://setting.snswin.qq.com"
                                }), icon.id = "private_setting_" + config.oid, el.appendChild(icon);
                                var hideIcon = function() {
                                    return setTimeout(function() {
                                        el.removeChild(icon)
                                    }, 3e3)
                                }, timer1 = hideIcon();
                                evt.on(icon, "mouseover", function() {
                                    clearTimeout(timer1)
                                }), evt.on(icon, "mouseout", function() {
                                    timer1 = hideIcon()
                                })
                            }
                        });
                        var displayConfig = config.display_config, fodder0 = config.fodder[0], isCover = fodder0 ? fodder0.cover: !1, coverElement = getFodderCover(el);
                        coverElement && Cps.registerClick(el, coverElement, config), displayConfig && 1 == displayConfig.support_api && isCover && coverElement && evt.on(coverElement, "click", function() {
                            sendPing(namespace.sns_pingurl(config, "banner_click"))
                        }), displayConfig && "_self" === displayConfig.target && coverElement && (coverElement.target = ""), displayConfig && displayConfig.pLink && coverElement && (coverElement.href = "", coverElement.target = "", evt.on(coverElement, "click", function(event) {
                            event.preventDefault ? event.preventDefault() : event.returnValue=!1;
                            try {
                                {
                                    new ActiveXObject("QQGAMEDETECT.QQGameDetectCtrl.1")
                                }
                                window.location = displayConfig.pLink
                            } catch (e) {
                                window.open(fodder0.link_to, "_blank")
                            }
                        })), dom.hasClass(el, "check_double_filter") && isCover && coverElement && hasFilterInParent(coverElement) && (coverElement.style.backgroundColor = "", coverElement.style.filter = "", coverElement.style.opacity = "")
                    }
                },
                auto: {
                    ping: IMMEDIATELY,
                    render: function(config, el) {
                        renderFodder(getDefaultFodder(el), el)
                    }
                },
                "default": {
                    ping: NONE,
                    render: function(config, el) {
                        renderFodder(getDefaultFodder(el), el)
                    }
                },
                "null": {
                    ping: IMMEDIATELY,
                    render: function() {}
                },
                banner_script_src: {
                    ping: IMMEDIATELY,
                    render: function(config, el) {
                        renderFodder(config.fodder[0], el), importScript(config.fodder[1].resource_url)
                    }
                },
                banner_import_monitor_url: {
                    ping: IMMEDIATELY,
                    render: function(config, el) {
                        renderFodder(config.fodder[0], el), importScript(config.monitor_url)
                    }
                },
                h_banner: {
                    ping: SELF_PING,
                    render: function() {
                        function contains(p, c) {
                            return p.contains ? p != c && p.contains(c) : !!(16 & p.compareDocumentPosition(c))
                        }
                        function fixedMouse(e, target) {
                            var related, type = e.type.toLowerCase();
                            if ("mouseover" == type)
                                related = e.relatedTarget || e.fromElement;
                            else {
                                if ("mouseout" != type)
                                    return !0;
                                related = e.relatedTarget || e.toElement
                            }
                            return related && "xul" != related.prefix&&!contains(target, related) && related !== target
                        }
                        function HBanner(adData, sendPv) {
                            this.adData = adData, this.sendPv = sendPv
                        }
                        var IeWindowResizeHook = {
                            originalHeight: window.innerHeight || document.documentElement.clientHeight,
                            originalWidth: window.innerWidth || document.documentElement.clientWidth,
                            isResize: function() {
                                var h = window.innerHeight || document.documentElement.clientHeight, w = window.innerWidth || document.documentElement.clientWidth;
                                return this.originalHeight != h || this.originalWidth != w ? (this.originalHeight = h, this.originalWidth = w, !0) : !1
                            }
                        }, CurrentPageAdMap = {};
                        window[lib_name].adRequesterCallback = function(adDataArray) {
                            var adData = adDataArray[0][0], elId = adData.loc, currentHBanner = CurrentPageAdMap[elId], sendPv = function(adData) {
                                var ping_data = {
                                    loc: adData.loc,
                                    cid: adData.cid || 0,
                                    oid: adData.oid || 0,
                                    aver: adData.aver || 0,
                                    soid: adData.soid || 0,
                                    ping: adData.ping,
                                    pri: adData.pri || 0,
                                    tango: adData.tango || 0,
                                    dtype: adData.dtype || 0,
                                    targetid: adData.targetid || 0,
                                    pctr: adData.pctr || 0,
                                    btoid: adData.btoid || 0,
                                    btpri: adData.btpri || 0,
                                    extstr: adData.extstr || ""
                                };
                                ping_data.dtype >= 1 && (ping_data.keywordIds = "" !== adData.keywordIds ? adData.keywordIds : "", ping_data.whiteListId = "" !== adData.whiteListId ? adData.whiteListId : "", ping_data.ArticleId = "" !== adData.ArticleId ? adData.ArticleId : ""), VisitorPing.append(ping_data);
                                var monitor_pv_delay = 1e3;
                                adData.monitor_url && setTimeout(function() {
                                    VisitorPing.touch(adData.monitor_url, !0)
                                }, monitor_pv_delay), adData.ext_monitor_url && setTimeout(function() {
                                    var ping_list = adData.ext_monitor_url.split(" ");
                                    ping_list = ping_list.slice(0, 3);
                                    for (var i = 0, len = ping_list.length; len > i; i++)
                                        ping_list[i].indexOf("http://")>-1 && VisitorPing.touch(ping_list[i], !0)
                                }, monitor_pv_delay)
                            };
                            currentHBanner ? (currentHBanner.destroy(), CurrentPageAdMap[elId] = new HBanner(adData, sendPv), CurrentPageAdMap[elId].init()) : (CurrentPageAdMap[elId] = new HBanner(adData, sendPv), CurrentPageAdMap[elId].init())
                        };
                        var AdRequester = {
                            request: function(elId) {
                                var lviewUrl = format(crystal_args.lview_template, {
                                    loc: elId
                                }), rotParam = "&rot=1&ri=hb_" + elId;
                                importScript(lviewUrl + "&callback=" + lib_name + ".adRequesterCallback" + rotParam + collectInfo(1), function() {}, crystal_args.charset)
                            }
                        };
                        return HBanner.prototype.init = function() {
                            var adData = this.adData;
                            this.adLocationEl = document.getElementById(adData.loc), this.pvCounter = 0;
                            var self = this;
                            if (!this.isNullOrder()) {
                                var adContent = document.createElement("div"), picTop = parseInt(dom.getStyle(document.getElementById("picWrap"), "top")), picTop = isNaN(picTop) ? 9: picTop, closeButton = this.closeButton = dom.createElement({
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    margin: picTop + 2 + "px 2px 0 0",
                                    "z-index": 100
                                }, {
                                    src: namespace.resource("takeover_close.gif")
                                }, "img");
                                renderFodder(adData.fodder[0], adContent), dom.setStyle(this.adLocationEl, {
                                    display: "none",
                                    zIndex: 100
                                }), this.adLocationEl.appendChild(adContent), this.adLocationEl.appendChild(closeButton), this.addCover(), evt.on(this.adLocationEl, "mouseover", function(e) {
                                    fixedMouse(e, self.adLocationEl) && self.removeCover()
                                }), evt.on(this.adLocationEl, "mouseout", function(e) {
                                    fixedMouse(e, self.adLocationEl) && self.addCover()
                                }), evt.on(closeButton, "click", function() {
                                    self.close()
                                })
                            }
                            this.resizeFunction = function() {
                                self.resize()
                            }, evt.on(window, "resize", this.resizeFunction), setTimeout(function() {
                                var i = hdPic.fn._getUrl() + "";
                                "1" !== i && "0" !== i && self.show()
                            }, 1e3), namespace.setArea(this.adData.loc, {
                                show: function() {
                                    self.show()
                                },
                                hide: function() {
                                    self.hide()
                                }
                            })
                        }, HBanner.prototype.destroy = function() {
                            this.resizeFunction && evt.un(window, "resize", this.resizeFunction), this.adLocationEl && (namespace.clearArea(this.adData.loc), dom.setStyle(this.adLocationEl, {
                                display: "none"
                            }), this.adLocationEl.innerHTML = "")
                        }, HBanner.prototype.addCover = function() {
                            var cover = document.getElementById("mengban_" + this.adData.loc);
                            cover || (cover = document.createElement("div"), dom.setStyle(cover, {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                opacity: "0.5",
                                filter: "alpha(opacity=50)",
                                backgroundColor: "white"
                            }), cover.id = "mengban_" + this.adData.loc, this.adLocationEl.appendChild(cover))
                        }, HBanner.prototype.removeCover = function() {
                            var cover = document.getElementById("mengban_" + this.adData.loc);
                            cover && this.adLocationEl.removeChild(cover)
                        }, HBanner.prototype.isNullOrder = function() {
                            return this.adData.oid + "" == "1"?!0 : !1
                        }, HBanner.prototype.show = function() {
                            if (this.is1stOrLast=!1, this.canBeShowed()) {
                                if (0 === this.pvCounter)
                                    this.sendPv && this.sendPv(this.adData);
                                else if (10 === this.pvCounter)
                                    return AdRequester.request(this.adData.loc), void 0;
                                this.pvCounter++;
                                var self = this;
                                setTimeout(function() {
                                    if (!self.isNullOrder()) {
                                        var picTop = parseInt(dom.getStyle(self.sizeReferenceEl, "top")), picTop = isNaN(picTop) ? 9: picTop, picHeight = dom.getStyle(self.sizeReferenceEl, "height");
                                        dom.setStyle(self.adLocationEl, {
                                            display: "block",
                                            height: picHeight,
                                            paddingTop: picTop + "px"
                                        }), self.closeButton && dom.setStyle(self.closeButton, {
                                            margin: picTop + 2 + "px 2px 0 0"
                                        })
                                    }
                                    self.resizeLock=!1
                                }, 300)
                            }
                        }, HBanner.prototype.close = function() {
                            dom.setStyle(this.adLocationEl, {
                                display: "none"
                            }), this.closeTimeCookieName || (this.closeTimeName = "hbanner" + this.adData.loc), DataStorage.setItem(this.closeTimeCookieName, (new Date).getTime(), 1440)
                        }, HBanner.prototype.isClosedWithinTime = function() {
                            this.closeTimeCookieName || (this.closeTimeName = "hbanner" + this.adData.loc);
                            var closeTime = parseInt(DataStorage.getItem(this.closeTimeCookieName) || 0), intervalTime = (new Date).getTime() - closeTime, minIntervalTime = 72e5;
                            return intervalTime > minIntervalTime?!1 : !0
                        }, HBanner.prototype.isSizeQualified = function() {
                            this.sizeReferenceEl || (this.sizeReferenceEl = document.getElementById("picWrap"));
                            var size = parseInt(dom.getStyle(this.sizeReferenceEl, "height"));
                            return isNaN(size) || 500 > size?!1 : !0
                        }, HBanner.prototype.getIs1stOrLast = function() {
                            return this.is1stOrLast
                        }, HBanner.prototype.hide = function() {
                            dom.setStyle(this.adLocationEl, {
                                display: "none"
                            }), this.is1stOrLast=!0
                        }, HBanner.prototype.canBeShowed = function() {
                            return !this.isClosedWithinTime() && this.isSizeQualified()
                        }, HBanner.prototype.resize = function() {
                            if (!ua.ie || IeWindowResizeHook.isResize()) {
                                var self = this;
                                setTimeout(function() {
                                    if (self.isSizeQualified()) {
                                        if (self.canBeShowed()&&!self.getIs1stOrLast()&&!self.resizeLock)
                                            if (self.resizeLock=!0, self.resizeHidePage === hdPic.fn._pageNow) {
                                                var picTop = parseInt(dom.getStyle(self.sizeReferenceEl, "top")), picTop = isNaN(picTop) ? 9: picTop, picHeight = dom.getStyle(self.sizeReferenceEl, "height");
                                                dom.setStyle(self.adLocationEl, {
                                                    display: "block",
                                                    height: picHeight,
                                                    paddingTop: picTop + "px"
                                                }), self.closeButton && dom.setStyle(self.closeButton, {
                                                    margin: picTop + 2 + "px 2px 0 0"
                                                }), self.resizeLock=!1
                                            } else 
                                                self.show()
                                    } else 
                                        dom.setStyle(self.adLocationEl, {
                                            display: "none"
                                        }), self.resizeHidePage = hdPic.fn._pageNow
                                }, 1e3)
                            }
                        }, namespace.shutongRequest = function(loc) {
                            AdRequester.request(loc)
                        }, function() {}
                    }()
                },
                text: {
                    ping: NONE,
                    render: function(config, el, area_id, ping) {
                        config.need_ping && ping();
                        var fodders = config.fodder, html = fodders[0], url = fodders[1], color = fodders[2], prefix = fodders[3] || "", style = fodders[4] || "", a = document.createElement("a");
                        a.className = el.className, a.target = "_blank", a.href = url, a.style.cssText = style, color && (a.style.color = color), a.innerHTML = prefix + html, el.parentNode.replaceChild(a, el), dom.$(area_id) && arguments.callee(config, dom.$(area_id), area_id, ping)
                    }
                },
                richtext: {
                    ping: IMMEDIATELY,
                    render: function(config, el) {
                        var fodders = config.fodder, html = fodders[0], url = fodders[1], color = fodders[2], a = document.createElement("a");
                        a.target = "_blank", a.href = url, color && (a.style.color = color), a.innerHTML = html, el.parentNode.replaceChild(a, el), dom.setStyle(el, {
                            height: "12px"
                        })
                    }
                },
                banner_text: {
                    ping: IMMEDIATELY,
                    render: function(config, el) {
                        var picFodder = config.fodder[0], textFodder = config.fodder[1], textLinkUrl = picFodder.link_to;
                        textLinkUrl.indexOf("?")>-1 ? textLinkUrl.lastIndexOf("&") === textLinkUrl.length - 1 ? (picFodder.link_to = picFodder.link_to + "clicktype=1", textLinkUrl += "clicktype=2") : (picFodder.link_to = picFodder.link_to + "&clicktype=1", textLinkUrl += "&clicktype=2") : (picFodder.link_to = picFodder.link_to + "?clicktype=1", textLinkUrl += "?clicktype=2"), renderFodder(picFodder, el);
                        var textWrapper = document.createElement("div"), textLink = document.createElement("a"), text = textFodder.text_content;
                        textLink.href = textLinkUrl + collectInfo(1), textLink.target = "_blank", textLink.innerHTML = text;
                        var displayConfig = config.display_config, text_position = displayConfig.text_position, textStyle = textFodder.style;
                        if (textStyle) {
                            for (var textStyleAry = textStyle.split(";"), slen = textStyleAry.length, textStyleObj = {}, i = 0; slen > i; i++) {
                                var currentStyleStr = textStyleAry[i], currentStylePair = currentStyleStr.split(":");
                                textStyleObj[currentStylePair[0]] = currentStylePair[1]
                            }
                            dom.setStyle(textLink, textStyleObj)
                        } else 
                            dom.setStyle(textLink, {
                                paddingBottom: "3px",
                                lineHeight: "1.5",
                                textDecoration: "none",
                                textSize: "16px",
                                background: "url(http://img1.gtimg.com/fashion/pics/hv1/252/73/1392/90533667.png) repeat-x left bottom"
                            });
                        switch (text_position) {
                        case"belowBanner":
                        default:
                            dom.setStyle(textWrapper, {
                                position: "absolute",
                                left: "0px",
                                width: "100%",
                                bottom: "-27px",
                                textAlign: "center"
                            })
                        }
                        textWrapper.appendChild(textLink), el.appendChild(textWrapper)
                    }
                },
                script_src: {
                    ping: NONE,
                    render: function(config, el, area_id, ping) {
                        importScript(config.fodder[0].resource_url), ping()
                    }
                },
                adbox: {
                    ping: NONE,
                    render: function(config, el, el_id, ping) {
                        var v = config.fodder[0].version;
                        namespace.importScript(config.fodder[0].resource_url + "?v=" + v, function() {
                            var fn = namespace["adbox_" + config.oid], fn1 = namespace.adbox_ADBOXCALLBACK, fn2 = namespace["adbox_" + config.oid + "_" + config.cid];
                            fn2 ? fn2(config, el, el_id, ping) : fn1 ? fn1(config, el, el_id, ping) : fn && fn(config, el, el_id, ping)
                        }, "utf8")
                    }
                }
            }, display_buffer = {}, NO_AD = {}, lazyRender;
            !function() {
                var event_attached=!1, areas = {}, ping_effect_height = crystal_args.ping_effect_height, pre_load_offset = crystal_args.pre_load_offset, max_used_height = 0, _checkRender = function(force_recalculate) {
                    var used_height = dom.getDocumentScrollTop() + dom.getViewportHeight();
                    if (force_recalculate ||!(max_used_height >= used_height)) {
                        max_used_height = used_height;
                        var rendered_ids = [];
                        each(areas, function(o, id) {
                            if (force_recalculate ||!o.y) {
                                var xy = dom.getXY(o.el);
                                o.y = xy[1]
                            }
                            o.y <= used_height + pre_load_offset && (o.rendered || (o.render(), o.rendered=!0)), o.y <= used_height - ping_effect_height && (o.pinged || (o.ping(), o.pinged=!0)), o.pinged && o.rendered && rendered_ids.push(id)
                        }), each(rendered_ids, function(id) {
                            delete areas[id]
                        });
                        var no_area=!0;
                        each(areas, function() {
                            no_area=!1
                        }), no_area && (evt.un(window, "resize", checkRender), evt.un(window, "scroll", checkRender), event_attached=!1)
                    }
                }, checkRender = function() {
                    _checkRender(!1)
                };
                namespace.forceCheckRender = function() {
                    _checkRender(!0)
                };
                var bufferCheckRender = buffer(function() {
                    event_attached || (checkRender(), evt.on(window, "resize", checkRender), evt.on(window, "scroll", checkRender), event_attached=!0)
                }, 100);
                namespace.renderAll = function() {
                    each(areas, function(o) {
                        o.rendered || (o.render(), o.rendered=!0)
                    }), areas = {}, evt.un(window, "resize", checkRender), evt.un(window, "scroll", checkRender), event_attached=!1
                }, lazyRender = function(id, render, ping) {
                    areas[id] = {
                        el: dom.$(id),
                        render: render,
                        rendered: !1,
                        ping: ping,
                        pinged: !1
                    }, bufferCheckRender()
                }
            }();
            var rendered_area = {}, in_reqeusting_ids = {}, renderArea = function(creativity_config, area_id, not_retry) {
                var area = dom.$(area_id);
                if (!area)
                    return not_retry || evt.ready(function() {
                        renderArea(creativity_config, area_id, !0)
                    }), void 0;
                var render_type = 0;
                area.setAttribute("oid", creativity_config.oid), area.setAttribute("display", creativity_config.display), area.getAttribute("immediately") && (render_type = IMMEDIATELY);
                var display_handler = namespace.getDisplayHandler(creativity_config.display), pingArea = function() {
                    var posconvert = area_id.indexOf("SLOT");
                    posconvert>-1 && (area_id = area_id.substr(0, posconvert));
                    var ping_data = {
                        loc: area_id,
                        cid: creativity_config.cid || 0,
                        oid: creativity_config.oid || 0,
                        aver: creativity_config.aver || 0,
                        soid: creativity_config.soid || 0,
                        ping: creativity_config.ping,
                        pri: creativity_config.pri || 0,
                        tango: creativity_config.tango || 0,
                        dtype: creativity_config.dtype || 0,
                        targetid: creativity_config.targetid || 0,
                        pctr: creativity_config.pctr || 0,
                        btoid: creativity_config.btoid || 0,
                        btpri: creativity_config.btpri || 0,
                        extstr: creativity_config.extstr || "",
                        chl: creativity_config.chl || 0
                    };
                    VisitorPing.append(ping_data);
                    var monitor_pv_delay = 1e3;
                    creativity_config.monitor_url && setTimeout(function() {
                        VisitorPing.touch(creativity_config.monitor_url, !0)
                    }, monitor_pv_delay), creativity_config.ext_monitor_url && setTimeout(function() {
                        var ping_list = creativity_config.ext_monitor_url.split(" ");
                        ping_list = ping_list.slice(0, 3);
                        for (var i = 0, len = ping_list.length; len > i; i++)
                            ping_list[i].indexOf("http://")>-1 && VisitorPing.touch(ping_list[i], !0)
                    }, monitor_pv_delay)
                }, render = function() {
                    display_handler.render(creativity_config, area, area_id, pingArea), creativity_config.plugins && afterImportExtension(function() {
                        namespace.addPlugins(creativity_config.plugins, creativity_config, area, area_id)
                    })
                }, render_type = render_type || display_handler.ping;
                switch (crystal_args.lazy_render || render_type != LAZY || (render_type = IMMEDIATELY), render_type) {
                case IMMEDIATELY:
                    render(), pingArea();
                    break;
                case LAZY:
                    lazyRender(area_id, render, pingArea);
                    break;
                case SELF_PING:
                    render();
                    break;
                case NONE:
                    render()
                }
            }, buildDefaultCreativityConfig = function(area_id) {
                var el = dom.$(area_id);
                return el && "none" != dom.getStyle(el, "display") ? {
                    display: "auto",
                    oid: 89,
                    cid: 0
                } : NO_AD
            }, renderBuffer = function() {
                each(arguments, function(area_id) {
                    rendered_area[area_id] || display_buffer[area_id] || (display_buffer[area_id] = buildDefaultCreativityConfig(area_id))
                }), each(display_buffer, function(creativity_config, area_id) {
                    if (!rendered_area[area_id] && ("weibo" != crystal_args.runat && (dom.$(area_id) && "1" == dom.$(area_id).getAttribute("rerender")?!1 : rendered_area[area_id]=!0), creativity_config !== NO_AD)) {
                        var display = creativity_config.display;
                        dic_display[display] ? renderArea(creativity_config, area_id) : afterImportExtension(function() {
                            renderArea(creativity_config, area_id)
                        }), dom.$(area_id) && "1" == dom.$(area_id).getAttribute("rerender") || delete display_buffer[area_id]
                    }
                })
            }, isNewArea = function(area_id) {
                return rendered_area[area_id] || display_buffer[area_id] || in_reqeusting_ids[area_id] ? void 0 : (in_reqeusting_ids[area_id]=!0, !0)
            }, findAreas = namespace.findAreas = function() {
                var areas = map(dom.getElementsByClassName(crystal_args.area_class, crystal_args.element_tags), function(el) {
                    return el.id || (el.id = generateId())
                });
                return areas
            }, rot = "&rot=1", rot_flag = {}, request = namespace.request = function(area0) {
                "norot" == namespace.rot && (rot = "");
                var no_data_area_ids;
                if (no_data_area_ids = area0===!0 ? findAreas() : filter("string" == typeof arguments[0] ? arguments : findAreas(), function() {
                    return !0
                }), "string" == typeof arguments[0])
                    for (var lview_data = {
                        "l.qq.com": {
                            charset: crystal_args.charset,
                            lview_template: crystal_args.lview_template,
                            data: []
                        }
                    }, i = 0, len = no_data_area_ids.length; len > i; i++)
                        lview_data["l.qq.com"].data.push(no_data_area_ids[i]);
                else 
                    var lview_data = namespace.location.getLview();
                namespace.each(lview_data, function(val, key) {
                    if (val.data = filter(val.data, isNewArea), val.data.length > 0) {
                        if (val.data.join(",").indexOf("QQ_takeover") >= 0)
                            var callback = function() {
                                namespace.lviewTimeout || Cps.timeEnd("lview-" + key), Cps.time("ping");
                                var hasTakeover = [];
                                clearTimeout(timeout_handle);
                                var toConfig = display_buffer.QQ_takeover;
                                "1" !== toConfig.oid && "100" != toConfig.oid && hasTakeover.push("takeover"), renderBuffer.apply(window, val.data), each(val.data, function(area_id) {
                                    delete in_reqeusting_ids[area_id]
                                }), window.QQindexAd && "function" == typeof window.QQindexAd && QQindexAd({
                                    displayCode: hasTakeover
                                })
                            };
                        else 
                            var callback = function() {
                                namespace.lviewTimeout || Cps.timeEnd("lview-" + key), Cps.time("ping"), clearTimeout(timeout_handle), renderBuffer.apply(window, val.data), each(val.data, function(area_id) {
                                    delete in_reqeusting_ids[area_id]
                                })
                            };
                        var lview_url = crystal_args.lview_template.replace("l.qq.com", key), ri = "&ri=" + key.substr(0, 2);
                        if (rot_flag[key]&&-1 === rot.indexOf("ri"))
                            var rot_string = ri;
                        else {
                            var rot_string = rot.indexOf("ri")>-1 ? rot: rot + ri;
                            rot_flag[key]=!0
                        }
                        Cps.time("lview-" + key), importScript(format(lview_url, {
                            loc: val.data.join(","),
                            oid: crystal_args.oid,
                            cid: crystal_args.cid
                        }) + "&callback=" + lib_name + ".callbackarea" + rot_string + "&chl=" + channel + collectInfo(1), callback, val.charset, function() {
                            Cps.setEnvInfoProperty("adb", 2), Cps.setEnvInfoProperty("err", 4003), Cps.flush()
                        });
                        var timeout_handle = setTimeout(function() {
                            Cps.setDuration("lview", - 1), Cps.setEnvInfoProperty("err", 4002), namespace.lviewTimeout=!0, Cps.flush(), callback()
                        }, 1e3 * crystal_args.lview_time_out)
                    }
                }), renderBuffer()
            };
            crystal_args.execute_on_ready && evt.ready(function() {
                Cps.timeEnd("dr"), request()
            });
            var isArray = function(o) {
                return !!o && "object" == typeof o && "number" == typeof o.length
            }, urlAppendQuery = function(sUrl, dictData, isEncode) {
                return sUrl + (dictData ? ( - 1 == sUrl.indexOf("?") ? "?" : "&") + serializeDictionary("=", "&", !1, isEncode)(dictData) : "")
            }, jsonp = function(sUrl, dictData, callback) {
                var methodName = generateId();
                window[methodName] = function() {
                    callback.apply(null, arguments), setTimeout(function() {
                        try {
                            delete window[methodName]
                        } catch (e) {
                            window[methodName] = void 0
                        }
                    }, 1)
                }, crystal_args.collect && ("qq" == crystal_args.runat || (dictData = mix(dictData, collectInfo()))), importScript(urlAppendQuery(sUrl, mix({
                    callback: methodName
                }, dictData), !1), null, crystal_args.charset)
            }, getLocData = function(url, locIds, callback) {
                jsonp(url, {
                    loc: locIds.join(",")
                }, callback)
            }, getLocIds = function(className, tags, callback) {
                callback(map(filter(dom.getElementsByClassName(className, tags), function(el) {
                    return !!el.id
                }), function(el) {
                    return el.id
                }))
            }, requestText = namespace.requestText = function() {
                getLocIds("w-l-qq-com", ["span"], function(arrIds) {
                    var arrIds = unique(arrIds);
                    if (0 != arrIds.length) {
                        for (var splitIds = []; arrIds.length > 24;)
                            splitIds.push(arrIds.splice(0, 24));
                        splitIds.push(arrIds.splice(0, arrIds.length));
                        for (var i = 0, len = splitIds.length; len > i; i++)
                            !function() {
                                var ids = splitIds[i];
                                getLocData("http://w.l.qq.com/lview?type=text", splitIds[i], function(oLoc) {
                                    var arrLoc;
                                    isArray(oLoc) ? arrLoc = oLoc : (arrLoc = [], each(oLoc, function(config) {
                                        arrLoc.push(config)
                                    })), each(arrLoc, function(locOrders, i) {
                                        var locId = ids[i];
                                        each(locOrders, function(orderConfig) {
                                            orderConfig.loc = locId
                                        })
                                    }), each(arrLoc, function(locOrders) {
                                        each(locOrders, function(order) {
                                            renderArea(order, order.loc)
                                        })
                                    })
                                })
                            }()
                    }
                })
            };
            evt.ready(requestText);
            var DISCUZ_MAX_SLOT_COUNT = crystal_args.MAX_SLOT_COUNT, renderedSlotsCount = 0, renderedSlots = {}, createPlaceHolder = function(slotId, width, height, type) {
                var scripts = document.getElementsByTagName("script"), script = scripts[scripts.length - 1], container = dom.createElement({
                    width: width + "px",
                    height: height + "px",
                    overflow: "hidden"
                });
                return container.id = type || "discuz" != crystal_args.runat ? slotId : slotId + "SLOT" + generateId(), script.parentNode.replaceChild(container, script), container
            }, addStaticSlot = function(options) {
                var slotType = options.type || "";
                if (slotType ||!(++renderedSlotsCount > DISCUZ_MAX_SLOT_COUNT)) {
                    var slotId = options.id, slotWidth = options.width || 0, slotHeight = options.height || 0, slotContainer = createPlaceHolder(slotId, slotWidth, slotHeight, slotType), real_location_id = slotContainer.id;
                    options.data || (getLocData(crystal_args.lview_template.replace("loc={loc}", ""), [slotId], function(arrLoc) {
                        if (arrLoc && arrLoc.length) {
                            var display = arrLoc[0].display;
                            - 1 != indexOf(["turner", "focusimage"], display) ? (arrLoc = {
                                display: display,
                                data: arrLoc
                            }, renderedSlots[real_location_id]=!0, afterImportExtension(function() {
                                renderArea(arrLoc, real_location_id)
                            })) : each(arrLoc, function(locOrders) {
                                isArray(locOrders) || (locOrders = [locOrders]), each(locOrders, function(orderConfig) {
                                    orderConfig = spec_oid(orderConfig), orderConfig.loc = real_location_id, renderedSlots[real_location_id]=!0;
                                    var display = orderConfig.display;
                                    dic_display[display] ? renderArea(orderConfig, orderConfig.loc) : afterImportExtension(function() {
                                        renderArea(orderConfig, orderConfig.loc)
                                    })
                                })
                            })
                        }
                    }), setTimeout(function() {
                        renderedSlots[real_location_id] || renderArea(buildDefaultCreativityConfig(slotId), slotId)
                    }, 6e3))
                }
            };
            namespace.addStaticSlot = addStaticSlot, namespace.analyze = function(src) {
                afterImportExtension(function() {
                    importScript(src)
                })
            }, namespace.AdDetectingLoader = {
                parseParam: function() {
                    var result = {}, hashParams = /^\#(.*)/.exec(window.location.hash);
                    hashParams = hashParams ? hashParams[1] : "", hashParams = hashParams.split("&");
                    var i, param, len = hashParams.length;
                    for (i = 0; len > i; i++)
                        param = hashParams[i].split("="), result[param[0]] = param[1];
                    return result
                },
                load: function(params) {
                    var adDetectingJsUrl = params.url || namespace.resource("res/ad_detecting.js"), delay = params.delay || 0;
                    afterImportExtension(function() {
                        setTimeout(function() {
                            importScript(adDetectingJsUrl)
                        }, 1e3 * delay)
                    })
                },
                init: function(option) {
                    if (option.autoLoad===!0) {
                        var params = this.parseParam();
                        "1" === params.crystal_mode && this.load(params)
                    }
                }
            }, namespace.AdDetectingLoader.init({
                autoLoad: !0
            });
            var render_param_couplet = {
                renderclick: 1,
                maxclick_num: 5,
                repeatTimer: null,
                preindex: null,
                name: "couplet",
                flag: 0
            }, render_param_central = {
                renderclick: 1,
                maxclick_num: 10,
                repeatTimer: null,
                preindex: null,
                name: "central",
                flag: 0,
                loc_id: ""
            };
            namespace.render = function(opt) {
                function renderPicAd(config, predo) {
                    "show_" + config.name;
                    if (1 == config.flag)
                        doShow(config.name);
                    else if (2 == config.flag);
                    else if (0 == config.flag)
                        if (null !== config.repeatTimer);
                    else {
                        predo && setTimeout(function() {
                            predo()
                        }, 10);
                        var maxrepeat_count = 20, repeat_count = 0;
                        config.repeatTimer = setInterval(function() {
                            repeat_count++, repeat_count > maxrepeat_count && clearInterval(config.repeatTimer), 0 != config.flag ? clearInterval(config.repeatTimer) : doShow(config.name)
                        }, 500)
                    }
                }
                function doShow(display_name) {
                    "central" == display_name ? show_central("", index, total) : "couplet" == display_name && show_couplet(loc_id, index, total)
                }
                var loc_id = opt.loc || "", index = parseInt(opt.curr, 10), total = parseInt(opt.total, 10);
                index = isNaN(index) ? 0 : index, total = isNaN(total) ? 0 : total;
                var initRender = function(loc_id) {
                    rot = "&rot=1&ri=0", request(loc_id)
                }, show_couplet = function(loc_id, index, total) {
                    var locClass = namespace.getArea(loc_id);
                    render_param_couplet.flag = 1;
                    var show_abled=!1;
                    if (0 != index && index != total - 1 ? (show_abled=!0, locClass.invoke("show")) : locClass.invoke("hide"), render_param_couplet.renderclick < render_param_couplet.maxclick_num) {
                        if (render_param_couplet.preindex != index)
                            return null !== render_param_couplet.preindex && show_abled && (render_param_couplet.renderclick = render_param_couplet.renderclick + 1), render_param_couplet.preindex = index, void 0
                    } else 
                        show_abled && (render_param_couplet.renderclick = 1, render_param_couplet.preindex = index, render_param_couplet.flag = 0, render_param_couplet.repeatTimer = null, delete display_buffer[loc_id], delete rendered_area[loc_id], locClass.invoke("remove"), namespace.clearArea(loc_id), renderPicAd(render_param_couplet, function() {
                            initRender(loc_id)
                        }))
                }, is_central_showable = function(index, total) {
                    return total - 10 > index && 0 != index?!0 : !1
                }, show_central = function(loc_id, index, total) {
                    if (render_param_central.loc_id)
                        var loc_id = render_param_central.loc_id;
                    else {
                        var nodes = namespace.dom.getElementsByClassName("central_center", ["div"]);
                        if (!(nodes.length > 0))
                            return;
                        var loc_id = nodes[0].id;
                        render_param_central.loc_id = loc_id, render_param_central.flag = 1
                    }
                    var locClass = namespace.getArea(loc_id), show_abled=!1;
                    if (locClass.invoke("close"), is_central_showable(index, total) && (show_abled=!0), render_param_central.renderclick < render_param_central.maxclick_num) {
                        if (render_param_central.preindex != index)
                            return null !== render_param_central.preindex && show_abled && (render_param_central.renderclick = render_param_central.renderclick + 1), render_param_central.preindex = index, void 0
                    } else 
                        show_abled && (render_param_central.renderclick = 1, locClass.invoke("open")), render_param_central.preindex = index
                };
                renderPicAd(render_param_couplet, function() {
                    initRender(loc_id)
                }), renderPicAd(render_param_central)
            };
            var spec_oid = function(cc) {
                return 1 == cc.oid ? cc.display = "null" : 100 == cc.oid && (cc.display = "auto"), cc
            }, ResourceSpeed = {
                test: function(resourceUrl, callback) {
                    if (crystal_args.jsProfileOpen) {
                        var fls = this.detectFlash(), swfDivId = "rsDetector", swfDiv = document.getElementById(swfDivId);
                        fls.f ? swfDiv || (swfDiv = document.createElement("div"), swfDiv.id = swfDivId, document.body.appendChild(swfDiv), function(cb) {
                            namespace.resourceSpeedCallback = function(data) {
                                "success" === data.message ? ( - 2 === data.timer ? Cps.setEnvInfoProperty("err", 5004) : Cps.setDuration("cdn", data.timer), Cps.setEnvInfoProperty("cdnsize", data.size), Cps.setEnvInfoProperty("cdnsp", data.speed)) : "timeout" === data.message ? (Cps.setDuration("cdn", - 1), Cps.setEnvInfoProperty("err", 5002)) : "error" === data.message && (Cps.setEnvInfoProperty("err", 5003), Cps.setEnvInfoProperty("adb", 3)), namespace.cdnTest=!0, cb && cb()
                            }
                        }(callback), namespace.renderFodder({
                            resource_url: namespace.resource_swf("res/loadTimer.swf"),
                            width: 1,
                            height: 1,
                            initvars: {
                                res: resourceUrl,
                                callb: "crystal.resourceSpeedCallback",
                                timeout: 1e3 * crystal_args.lview_time_out
                            }
                        }, swfDiv), swfDiv.style.fontSize = "0") : Cps.setEnvInfoProperty("err", 5005)
                    }
                },
                detectFlash: function() {
                    var fv = namespace.getFlashVersion();
                    return {
                        f: 0 === fv?!1: !0,
                        v: fv
                    }
                },
                isValidResource: function(resource) {
                    var ext = resource && resource.indexOf(".")>-1 ? namespace.getExtension(resource): "";
                    return ["jpg", "jpeg", "png", "swf"].indexOf(ext.toLowerCase())>-1
                }
            };
            namespace.area = function(area_config) {
                if (area_config) {
                    var area_id = area_config.id;
                    return display_buffer[area_id] = NO_AD, function() {
                        if (0 != arguments.length) {
                            var creativity_config = arguments[display_index%arguments.length];
                            namespace.pageinfo.order.push(creativity_config);
                            var r = creativity_config.fodder && creativity_config.fodder[0] ? creativity_config.fodder[0].resource_url: "";
                            !namespace.lviewTimeout && ResourceSpeed.isValidResource(r) && ResourceSpeed.test(r, function() {
                                namespace.pingSent && Cps.flush()
                            }), 1 == creativity_config.oid && (creativity_config.display = "null"), 100 == creativity_config.oid && (creativity_config.display = "auto");
                            var display = creativity_config.display;
                            - 1 != indexOf(["turner", "focusimage"], display) && (creativity_config = {
                                display: display,
                                data: arguments
                            }), display_buffer[area_id] = creativity_config
                        }
                    }
                }
            }, namespace.callbackarea = function(arrLoc) {
                for (var i = 0, len = arrLoc.length; len > i; i++)
                    if (isArray(arrLoc[i])) {
                        if (arrLoc[i][0].loc) {
                            var func = namespace.area({
                                id: arrLoc[i][0].loc
                            });
                            func.apply(null, arrLoc[i])
                        }
                    } else if (arrLoc[i].loc) {
                        var func = namespace.area({
                            id: arrLoc[i].loc
                        });
                        func.apply(null, [arrLoc[i]])
                    }
                }, namespace.getDisplayHandler = function(id) {
                return dic_display[id]
            }, namespace.setDisplayHandler = function(o) {
                mix(dic_display, o)
            };
            var ime = namespace.ime = {
                _isAbleInput: !0,
                _isChangeCursor: !0,
                _target: "",
                _swf: [],
                _element: fp11input,
                _setTxt: function(v) {
                    this._element.value = v
                },
                setFocus: function(b, swfid, target, txt, index, index1) {
                    this._isAbleInput = b, this._target = target;
                    var pos = dom.getXY(dom.$(swfid));
                    dom.setStyle(this._element, {
                        left: pos[0] + "px",
                        top: pos[1] + "px",
                        cursor: "none"
                    }), this._element.setAttribute("swfid", swfid), this._element.focus(), this._element.blur(), this._element.select(), b ? (this._isChangeCursor=!1, this._setTxt(txt), this._isChangeCursor=!0, this.setCaretPosition(this._element, index, index1)) : this._setTxt("")
                },
                immediately: function(swfid) {
                    var element = this._element = fp11input, lib = this;
                    ua.ie ? evt.on(element, "propertychange", function(evt) {
                        "value" == evt.propertyName && lib.webChange(lib, swfid)
                    }) : evt.on(element, "input", function() {
                        lib.webChange(lib, swfid)
                    }, !0), this.listenKey(lib, swfid)
                },
                webChange: function(lib, swfid) {
                    lib._isAbleInput && lib._isChangeCursor && lib.outPut(lib, swfid)
                },
                outPut: function(lib, swfid) {
                    var targetswf = namespace.getFlashObject(swfid), activeId = lib._element.getAttribute("swfid");
                    lib._target && swfid == activeId && targetswf.getInput && setTimeout(function() {
                        targetswf.getInput(lib._element.value, lib._target, lib.getCursortPosition(lib._element))
                    }, 100)
                },
                getCursortPosition: function(ctrl) {
                    var CaretPos = 0, startPos = 0;
                    if (document.selection) {
                        ctrl.focus();
                        var Sel = document.selection.createRange(), selLen = Sel.text.length;
                        Sel.moveStart("character", - ctrl.value.length), CaretPos = Sel.text.length, startPos = CaretPos - selLen
                    } else (ctrl.selectionStart || "0" == ctrl.selectionStart) 
                        && (startPos = ctrl.selectionStart, CaretPos = ctrl.selectionEnd);
                    return [startPos, CaretPos]
                },
                setCaretPosition: function(ctrl, pos, pos1) {
                    if (ctrl.setSelectionRange)
                        ctrl.focus(), ctrl.setSelectionRange(pos, pos1);
                    else if (ctrl.createTextRange) {
                        var range = ctrl.createTextRange();
                        range.collapse(!0), range.moveEnd("character", pos1), range.moveStart("character", pos), range.select()
                    }
                },
                listenKey: function(lib, swfid) {
                    document.addEventListener ? document.addEventListener("keydown", function(event) {
                        lib.getKey(event, lib, swfid)
                    }, !0) : document.attachEvent ? document.attachEvent("onkeydown", function(event) {
                        lib.getKey(event, lib, swfid)
                    }) : document.onkeydown = function(event) {
                        lib.getKey(event, lib, swfid)
                    }
                },
                getKey: function(e, lib, swfid) {
                    e = e || window.event;
                    var keycode = e.which ? e.which: e.keyCode;
                    (35 == keycode || 36 == keycode || 37 == keycode || 39 == keycode || 8 == keycode || 46 == keycode) && lib.outPut(lib, swfid)
                }
            };
            namespace.getAntiCSRFToken = getAntiCSRFToken, namespace.getApitoken = apiTokenEncode;
            var DelayClass = Class.create({
                init: function() {
                    this.invokes = []
                },
                invoke: function() {
                    this.invokes.push(arguments)
                },
                set: function(o) {
                    this.invoke = function(method, args) {
                        return o[method] ? o[method].apply(o, args || []) : void 0
                    }, each(this.invokes, function(args) {
                        this.invoke(args[0], args[1])
                    }, this)
                }
            });
            "object" != typeof namespace.json && (namespace.json = {}), function() {
                "use strict";
                function f(n) {
                    return 10 > n ? "0" + n : n
                }
                function quote(string) {
                    return escapable.lastIndex = 0, escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                        var c = meta[a];
                        return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                    }) + '"' : '"' + string + '"'
                }
                function str(key, holder) {
                    var i, k, v, length, partial, mind = gap, value = holder[key];
                    switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), "function" == typeof rep && (value = rep.call(holder, key, value)), typeof value) {
                    case"string":
                        return quote(value);
                    case"number":
                        return isFinite(value) ? String(value) : "null";
                    case"boolean":
                    case"null":
                        return String(value);
                    case"object":
                        if (!value)
                            return "null";
                        if (gap += indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
                            for (length = value.length, i = 0; length > i; i += 1)
                                partial[i] = str(i, value) || "null";
                            return v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]", gap = mind, v
                        }
                        if (rep && "object" == typeof rep)
                            for (length = rep.length, i = 0; length > i; i += 1)
                                "string" == typeof rep[i] && (k = rep[i], v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                        else 
                            for (k in value)
                                Object.prototype.hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                        return v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}", gap = mind, v
                    }
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }, "function" != typeof String.prototype.toJSON && (String.prototype.toJSON = function() {
                    return "function" == typeof this.valueOf ? this.valueOf() : this.toString()
                }), "function" != typeof Number.prototype.toJSON && (Number.prototype.toJSON = function() {
                    return "function" == typeof this.valueOf ? this.valueOf() : this.toString()
                }), "function" != typeof Boolean.prototype.toJSON && (Boolean.prototype.toJSON = function() {
                    return "function" == typeof this.valueOf ? this.valueOf() : this.toString()
                }));
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                }, rep;
                "function" != typeof namespace.json.stringify && (namespace.json.stringify = function(value, replacer, space) {
                    var i;
                    if (gap = "", indent = "", "number" == typeof space)
                        for (i = 0; space > i; i += 1)
                            indent += " ";
                    else 
                        "string" == typeof space && (indent = space);
                    if (rep = replacer, replacer && "function" != typeof replacer && ("object" != typeof replacer || "number" != typeof replacer.length))
                        throw new Error("namespace.json.stringify");
                    return str("", {
                        "": value
                    })
                }), "function" != typeof namespace.json.parse && (namespace.json.parse = function(text, reviver) {
                    function walk(holder, key) {
                        var k, v, value = holder[key];
                        if (value && "object" == typeof value)
                            for (k in value)
                                Object.prototype.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);
                        return reviver.call(holder, key, value)
                    }
                    var j;
                    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                        return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                    throw new SyntaxError("namespace.json.parse")
                })
            }();
            var LocationClass = Class.create({
                init: function() {
                    this.default_setting = {
                        lview: "l.qq.com",
                        charset: namespace.crystal_args.charset,
                        lview_template: namespace.crystal_args.lview_template
                    }, this.lview = {}
                },
                getLview: function() {
                    var locs = this.findLoc(namespace.crystal_args.area_class);
                    return this.parseConfig(locs)
                },
                findLoc: function(classes) {
                    var locs = dom.getElementsByClassName(classes, ["div", "span"]);
                    return locs
                },
                getLviewByLoc: function(loc) {
                    var el = dom.$(loc);
                    return el.getAttribute("adconfig_lview")
                },
                createLviewCache: function() {
                    return {}
                },
                parseConfig: function(els) {
                    var lviewCache = this.createLviewCache();
                    return namespace.each(els, function(el, i) {
                        var config = el.getAttribute("adconfig") || "{}";
                        config = eval("(" + config + ")");
                        var loc = el.id;
                        config = namespace.mix({}, this.default_setting, config);
                        for (var p in config)
                            el.setAttribute("adconfig_" + p, config[p]);
                        "undefined" != typeof lviewCache[config.lview] ? namespace.indexOf(lviewCache[config.lview].data, loc)>-1 || lviewCache[config.lview].data.push(loc) : lviewCache[config.lview] = {
                            lview_template: config.lview_template,
                            charset: config.charset,
                            data: [loc]
                        }
                    }, this), lviewCache
                }
            });
            namespace.location = new LocationClass, function() {
                var areas = {};
                namespace.clearArea = function(id) {
                    areas[id] = null
                }, namespace.getArea = function(id) {
                    return areas[id] || (areas[id] = new DelayClass)
                }, namespace.setArea = function(id, o) {
                    namespace.getArea(id).set(o)
                }
            }();
            var renderFodder = namespace.renderFodder = function(fodder, el, icon, iconpos) {
                if (el) {
                    fodder.width && dom.setStyle(el, {
                        display: "block",
                        width: fodder.width,
                        height: fodder.height
                    }), renderer[getExtension(fodder.resource_url)](fodder, el);
                    var elPosition = dom.getStyle(el, "position");
                    ("static" == elPosition || "" == elPosition) && (el.style.position = "relative"), fodder.cover && (fodder.link_to = fodder.link_to.indexOf("?")>-1 ? fodder.link_to + collectInfo(1) : fodder.link_to + "?" + collectInfo(1), el.appendChild(createCover(fodder.width, fodder.height, fodder.link_to))), icon && iconpos && el.appendChild(createIcon(icon, iconpos, fodder.width, fodder.height))
                }
            }, createIcon = namespace.createIcon = function(icon, pos, width, height, opt) {
                var opt = mix({}, opt), m = {}, resurl = link_to = "", title = opt.title || "", link_to = opt.link_to || "";
                "rb" == pos ? m = {
                    right: 0,
                    bottom: 0
                } : "lb" == pos ? m = {
                    left: 0,
                    bottom: 0
                } : "rt" == pos ? m = {
                    right: 0,
                    top: 0
                } : "lt" == pos && (m = {
                    left: 0,
                    top: 0
                }), "adwin" == icon ? (resurl = namespace.resource_swf("adwin_" + pos + ".png"), m = mix(m, {
                    width: "55px",
                    height: "20px"
                }), link_to = "http://union.discuz.qq.com") : "soso" == icon ? m = mix(m, {
                    width: 0,
                    height: 0
                }) : (resurl = namespace.resource_swf("icon_" + icon + ".png"), m = mix(m, {
                    width: width,
                    height: height
                })), 6 == ua.ie ? m.filter = format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}')", {
                    uri: resurl
                }) : m["background-image"] = format("url({uri})", {
                    uri: resurl
                });
                var style = mix({
                    position: "absolute",
                    "z-index": 11,
                    cursor: "pointer"
                }, m), icon = dom.createElement(style, {
                    "class": "absolute a_cover",
                    href: htmlEncode(link_to),
                    target: "_blank",
                    title: title
                }, "a");
                return icon
            }, createCover = namespace.createCover = function(width, height, link_to, left, top) {
                var cover = dom.createElement({
                    position: "absolute",
                    width: width + "px",
                    height: height + "px",
                    left: left || "0px",
                    top: top || "0px",
                    cursor: "pointer",
                    "z-index": 10,
                    "background-color": "#fff",
                    filter: "alpha(opacity=0)",
                    opacity: 0
                }, {
                    "class": "absolute a_cover",
                    href: htmlEncode(link_to),
                    target: "_blank",
                    rel: "nofollow"
                }, "a");
                return cover
            }, renderer = function() {
                var param_template = '<param name="{name}" value="{value}"></param>', buildParams = function(o) {
                    return map(o, function(v, k) {
                        return format(param_template, {
                            name: k,
                            value: v
                        })
                    }).join("")
                }, removeFlash = function(flash) {
                    if (flash && flash.parentNode) {
                        if (ua.ie)
                            for (var i in flash)
                                "function" == typeof flash[i] && (flash[i] = null);
                        flash.parentNode.removeChild(flash)
                    }
                }, buildHTML = dom.buildHTML, _renderImage = function(styles, link, el) {
                    return el.innerHTML = buildHTML(styles, {
                        href: htmlEncode(link),
                        target: "_blank"
                    }, "a"), el.firstChild
                }, renderImage = function(config, el) {
                    var styles = {
                        display: "block",
                        cursor: "pointer",
                        width: config.width + "px",
                        height: config.height + "px",
                        "background-image": format("url({uri})", {
                            uri: config.resource_url
                        })
                    };
                    return _renderImage(styles, config.link_to, el)
                }, renderIEPNG = function(config, el) {
                    var styles = {
                        display: "block",
                        cursor: "pointer",
                        width: config.width + "px",
                        height: config.height + "px",
                        filter: format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}')", {
                            uri: config.resource_url
                        })
                    };
                    return _renderImage(styles, config.link_to, el)
                }, renderFlash = function(config, el) {
                    var params = {
                        allowscriptaccess: "always",
                        wmode: "opaque",
                        quality: "high"
                    };
                    config.params && mix(params, config.params);
                    var initvars = config.initvars || {};
                    config.link_to && (initvars.adlink = config.link_to), getFlashVersion() >= 11 && (initvars.ime=!0), initvars.ime && (initvars.setFocus = lib_name + ".ime.setFocus");
                    var attrs = {
                        id: generateId()
                    };
                    if (initvars.swfid = attrs.id, params.flashvars = serializeQuery(initvars), ua.ie ? (attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", params.movie = config.resource_url) : (params.type = "application/x-shockwave-flash", attrs.data = config.resource_url), getFlashVersion() > 0)
                        el.innerHTML = buildHTML({
                            outline: "none",
                            width: config.width + "px",
                            height: config.height + "px"
                        }, attrs, "object", buildParams(params));
                    else if (config.display && "banner" == config.display) {
                        var getHost = function(url) {
                            var host = "";
                            ("undefined" == typeof url || null == url) && (url = window.location.href);
                            var regex = /.*\:\/\/([^\/]*).*/, match = url.match(regex);
                            return "undefined" != typeof match && null != match && (host = match[1]), host
                        }, domain = getHost(config.resource_url) ? "http://" + getHost(config.resource_url): "http://wa.gtimg.com";
                        attrs.src = domain + "/web/res/shumway/iframe/view.html?swf=" + config.resource_url, el.innerHTML = buildHTML({
                            border: "none",
                            width: config.width + "px",
                            height: config.height + "px"
                        }, attrs, "iframe", buildParams(params))
                    }
                    var flash = el.firstChild;
                    return evt.on(window, "unload", function() {
                        removeFlash(flash)
                    }), flash
                }, renderHTML = function(config, el) {
                    var ifr_src = config.resource_url;
                    if (config.link_to) {
                        var hs_ques = ifr_src.indexOf("?")>-1?!0 : !1;
                        ifr_src += hs_ques ? "&tclick=" : "?tclick=", ifr_src += encodeURIComponent(config.link_to)
                    }
                    dom.$(el).innerHTML = '<iframe frameborder="0" src="' + ifr_src + '" scrolling="no" marginwidth="0" marginheight="0" style="width:' + config.width + "px;height:" + config.height + 'px;"></iframe>'
                }, renderSl = function(config, el) {
                    var params = mix({
                        source: config.resource_url,
                        windowless: !0
                    }, config.params), initvars = mix({
                        adlink: config.link_to
                    }, config.initvars);
                    return params.initParams = serializeQuery(initvars), el.innerHTML = buildHTML({
                        width: config.width + "px",
                        height: config.height + "px"
                    }, {
                        type: "application/x-silverlight",
                        data: "data:application/x-silverlight,"
                    }, "object", buildParams(params)), el.firstChild
                };
                return {
                    jpg: renderImage,
                    jpeg: renderImage,
                    png: 6 == ua.ie ? renderIEPNG: renderImage,
                    gif: renderImage,
                    swf: renderFlash,
                    xap: renderSl,
                    html: renderHTML
                }
            }()
        }(function() {
            var el_template = '<{tag} {attrs}style="{styles}">{inner}</{tag}>', propertyCache = {}, patterns = {
                HYPHEN: /(-[a-z])/i,
                ROOT_TAG: /^body|html$/i
            }, toCamel = function(property) {
                if (!patterns.HYPHEN.test(property))
                    return property;
                if (propertyCache[property])
                    return propertyCache[property];
                for (var converted = property; patterns.HYPHEN.exec(converted);)
                    converted = converted.replace(RegExp.$1, RegExp.$1.substr(1).toUpperCase());
                return propertyCache[property] = converted, converted
            }, setStyle = function() {
                var px = /left|top|right|bottom|width|height/, transVal = function(k, v) {
                    return px.test(k) && "number" == typeof v && (v += "px"), v
                };
                return ua.ie ? function(el, property, val) {
                    switch (property = toCamel(property)) {
                    case"opacity":
                        el.style.filter = "alpha(opacity=" + 100 * val + ")", el.style[property] = transVal(property, val), el.currentStyle && el.currentStyle.hasLayout || (el.style.zoom = 1);
                        break;
                    case"float":
                        property = "styleFloat";
                    default:
                        el.style[property] = transVal(property, val)
                    }
                } : function(el, property, val) {
                    property = toCamel(property), "float" == property && (property = "cssFloat"), el.style[property] = transVal(property, val)
                }
            }(), buildHTML = function(styles, attrs, tag, inner) {
                return format(el_template, {
                    tag: tag || "div",
                    attrs: serializeAttrs(attrs || {}),
                    styles: serializeStyles(styles),
                    inner: inner || ""
                })
            }, getStyle = function() {
                return document.defaultView && document.defaultView.getComputedStyle ? function(el, property) {
                    var value = null;
                    "float" == property && (property = "cssFloat");
                    var computed = document.defaultView.getComputedStyle(el, "");
                    return computed && (value = computed[toCamel(property)]), el.style[property] || value
                } : document.documentElement.currentStyle && ua.ie ? function(el, property) {
                    switch (property = toCamel(property)) {
                    case"opacity":
                        var val = 100;
                        try {
                            val = el.filters["DXImageTransform.Microsoft.Alpha"].opacity
                        } catch (e) {
                            try {
                                val = el.filters("alpha").opacity
                            } catch (e) {}
                        }
                        return val / 100;
                    case"float":
                        property = "styleFloat";
                    default:
                        var value = el.currentStyle ? el.currentStyle[property]: null;
                        return el.style[property] || value
                    }
                } : function(el, property) {
                    return el.style[property]
                }
            }(), hasClass = function(elem, className) {
                return elem && indexOf((elem.className || elem).toString().split(/\s+/), className)>-1
            }, addClass = function(elem, className) {
                elem&&!this.hasClass(elem, className) && className && (elem.className = elem.className + " " + className)
            };
            return {
                hasClass: hasClass,
                addClass: addClass,
                $: function(id) {
                    return "string" == typeof id ? document.getElementById(id) : id
                },
                getStyle: getStyle,
                setStyle: function(el, k, v) {
                    el = el, "object" == typeof k ? each(k, function(_v, _k) {
                        setStyle(el, _k, _v)
                    }) : setStyle(el, k, v)
                },
                setBackgroundImage: function(el, url) {
                    6 == ua.ie && /png$/.test(url) ? el.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + url + "')" : el.style.backgroundImage = "url(" + url + ")"
                },
                buildHTML: buildHTML,
                createElement: function(html) {
                    "string" != typeof html && (html = buildHTML.apply(window, arguments));
                    var el = document.createElement("div");
                    return el.innerHTML = html, el.firstChild
                },
                getElementsByClassName: function(cls, tags) {
                    if (document.getElementsByClassName)
                        return document.getElementsByClassName(cls);
                    var els = [];
                    return each(tags, function(tag) {
                        els = filter(document.getElementsByTagName(tag), function(div) {
                            return hasClass(div, cls)
                        }).concat(els)
                    }), els
                },
                getXY: function(el) {
                    var pos = [el.offsetLeft, el.offsetTop], parentNode = el.offsetParent, accountForBody = ua.webkit && "absolute" == getStyle(el, "position") && el.offsetParent == el.ownerDocument.body;
                    if (parentNode != el)
                        for (; parentNode;)
                            pos[0] += parentNode.offsetLeft, pos[1] += parentNode.offsetTop, !accountForBody && ua.webkit && "absolute" == getStyle(parentNode, "position") && (accountForBody=!0), parentNode = parentNode.offsetParent;
                    for (accountForBody && (pos[0] -= el.ownerDocument.body.offsetLeft, pos[1] -= el.ownerDocument.body.offsetTop), parentNode = el.parentNode; parentNode.tagName&&!patterns.ROOT_TAG.test(parentNode.tagName);)
                        getStyle(parentNode, "display").search(/^inline|table-row.*$/i) && (pos[0] -= parentNode.scrollLeft, pos[1] -= parentNode.scrollTop), parentNode = parentNode.parentNode;
                    return pos
                },
                getDocumentScrollLeft: function(doc) {
                    return doc = doc || document, Math.max(doc.documentElement.scrollLeft, doc.body.scrollLeft)
                },
                getDocumentScrollTop: function(doc) {
                    return doc = doc || document, Math.max(doc.documentElement.scrollTop, doc.body.scrollTop)
                },
                getDocumentHeight: function() {
                    var scrollHeight = "CSS1Compat" != document.compatMode ? document.body.scrollHeight: document.documentElement.scrollHeight, h = Math.max(scrollHeight, this.getViewportHeight());
                    return h
                },
                getDocumentWidth: function() {
                    var scrollWidth = "CSS1Compat" != document.compatMode ? document.body.scrollWidth: document.documentElement.scrollWidth, w = Math.max(scrollWidth, this.getViewportWidth());
                    return w
                },
                getViewportHeight: function() {
                    var height = self.innerHeight, mode = document.compatMode;
                    return !mode&&!ua.ie || ua.opera || (height = "CSS1Compat" == mode ? document.documentElement.clientHeight : document.body.clientHeight), height
                },
                getViewportWidth: function() {
                    var width = self.innerWidth, mode = document.compatMode;
                    return (mode || ua.ie) && (width = "CSS1Compat" == mode ? document.documentElement.clientWidth : document.body.clientWidth), width
                },
                addCss: function(rulesArray) {
                    var s = document.createElement("style");
                    document.getElementsByTagName("head")[0].appendChild(s);
                    var sheet = s.sheet || s.styleSheet;
                    sheet.insertRule ? each(rulesArray, function(v, index) {
                        sheet.insertRule(v.selector + "{" + v.rules + "}", v.index || index)
                    }) : each(rulesArray, function(v, index) {
                        sheet.addRule(v.selector, v.rules, v.index || index)
                    })
                }
            }
        }(), function() {
            var doc = document.documentElement, body = document.body, evt = {
                getPageX: function(e) {
                    return "pageX"in e ? e.pageX : e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0)
                },
                getPageY: function(e) {
                    return "pageY"in e ? e.pageY : e.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                }
            };
            return document.addEventListener ? (evt.on = function(el, type, handler) {
                return el.addEventListener(type, handler, !1), handler
            }, evt.on2 = evt.on, evt.un = function(el, type, handler) {
                el.removeEventListener(type, handler, !1)
            }, evt.stopPropagation = function(e) {
                e.stopPropagation()
            }, evt.preventDefault = function(e) {
                e.preventDefault()
            }, evt.getTarget = function(e) {
                return e.target
            }, evt.getRelTarget = function(e) {
                return e.relatedTarget
            }) : (evt.on = function(el, type, handler) {
                el.attachEvent("on" + type, handler)
            }, evt.on2 = function(el, type, handler) {
                var actualHandler = function() {
                    handler.call(el, window.event)
                };
                return el.attachEvent("on" + type, actualHandler), actualHandler
            }, evt.un = function(el, type, handler) {
                el.detachEvent("on" + type, handler)
            }, evt.stopPropagation = function(e) {
                e.cancelBubble=!0
            }, evt.preventDefault = function(e) {
                e.returnValue=!1
            }, evt.getTarget = function(e) {
                return e.srcElement
            }, evt.getRelTarget = function(e) {
                return e.fromElement === e.srcElement ? e.toElement : e.fromElement
            }), evt.stop = function(e) {
                evt.stopPropagation(e), evt.preventDefault(e)
            }, function() {
                var fns = [], is_ready=!1;
                evt.ready = function(f) {
                    fns.push(f)
                };
                var _ready = function() {
                    is_ready || (is_ready=!0, evt.ready = function(f) {
                        f()
                    }, each(fns, function(f) {
                        f()
                    }))
                };
                if (ua.ie) {
                    var timer = setInterval(function() {
                        try {
                            document.documentElement.doScroll("left"), clearInterval(timer), timer = null, _ready()
                        } catch (ex) {}
                    }, 64);
                    document.attachEvent("onreadystatechange", function() {
                        "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), _ready())
                    })
                } else 
                    evt.on(document, "DOMContentLoaded", _ready);
                evt.on(window, "load", _ready)
            }(), evt
        }(), {
            set: function(key, value, options) {
                var text = key + "=" + value;
                options && (options.expires && (text += "; expires=" + new Date((new Date).getTime() + 864e5 * options.expires).toGMTString()), options.path && (text += "; path=" + options.path), options.domain && (text += "; domain=" + options.domain), options.secure===!0 && (text += "; secure")), document.cookie = text
            },
            get: function(key) {
                var o = deserializeString("=", "; ", !1, !1)(document.cookie);
                return key ? o[key] : o
            },
            remove: function(k, options) {
                options = options || {}, options.expires =- 1, this.set(k, "", options)
            }
        })
    }
}("crystal", function() {
    var crystal_args = {
        area_class: "l_qq_com",
        element_tags: ["div"],
        execute_on_ready: !0,
        file_path: "http://ra.gtimg.com/web/",
        ext_path: "http://ra.gtimg.com/web/",
        is_debug: !1,
        lazy_render: !1,
        lview_template: "http://l.qq.com/lview?c=www&loc={loc}",
        lview_time_out: 6,
        ping_template: "http://p.l.qq.com/p?oid={oid}&cid={cid}&loc={loc}&aver={aver}&soid={soid}",
        charset: "gbk",
        ping_effect_height: - 99999,
        pre_load_offset: 100,
        runat: "qq",
        collect: !0,
        mo_page_ratio: 0,
        mo_page_url: "http://dp3.qq.com/qqweb/",
        mo_ad_click_url: "http://dp3.qq.com/click/",
        mo_ping_ratio: 0,
        mo_ping_script: "",
        share_dialogue_url: "http://adsrich.qq.com/web/res/weibo/relay.html",
        jsProfileOpen: !1
    };
    crystal_args.extension_js_src = crystal_args.file_path + "crystal/lastest/crystal_ext-min.js", crystal_args.sac_req_url = "http://bs.l.qq.com/sns";
    var script = document.getElementById("l_qq_com");
    try {
        var input_args = eval("(" + script.getAttribute("arguments") + ")");
        for (var i in input_args)
            crystal_args[i] = input_args[i]
    } catch (e) {}
    return crystal_args
}(), function() {
    var slice = Array.slice || function() {
        var _slice = Array.prototype.slice;
        return function(arr) {
            return _slice.apply(arr, _slice.call(arguments, 1))
        }
    }(), mix = function(r) {
        r || (r = {});
        for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            if (s)
                for (var j in s)
                    r[j] = s[j]
        }
        return r
    }, each = function(o, fn, context) {
        if ("number" == typeof o.length)
            for (var i = 0, len = o.length; len > i; i++)
                fn.call(context, o[i], i);
        else if ("number" == typeof o)
            for (var i = 0; o > i; i++)
                fn.call(context, i, i);
        else 
            for (var i in o)
                o.hasOwnProperty(i) && fn.call(context, o[i], i)
    }, serializeDictionary = function(assign_token, pair_separator, need_last, need_encode) {
        var encode = need_encode ? encodeURIComponent: function(k) {
            return k
        };
        return function(o) {
            var ret = [];
            return each(o, function(v, k) {
                null != k && void 0 != v && ret.push(encode(k) + assign_token + encode(v))
            }), ret.join(pair_separator) + (need_last ? pair_separator : "")
        }
    }, deserializeString = function(assign_token, pair_separator, need_last, need_decode) {
        var decode = need_decode ? decodeURIComponent: function(k) {
            return k
        };
        return function(s) {
            var ret = {};
            return need_last && (s = s.replace(new RegExp(pair_separator + "$"), "")), each(s.split(pair_separator), function(pair) {
                var key_value = pair.split(assign_token);
                ret[decode(key_value[0])] = decode(key_value[1])
            }), ret
        }
    }, Class = {
        create: function(proto, sp) {
            var ctor = function() {
                this.init && this.init.apply(this, arguments)
            }, mixins_begin_index = 1;
            if (sp && "function" == typeof sp) {
                var F = function() {};
                ctor.superclass = F.prototype = sp.prototype, ctor.prototype = new F, mixins_begin_index = 2
            }
            var mixins = slice(arguments, mixins_begin_index);
            return mixins.unshift(proto), mix(ctor.prototype, mix.apply(window, mixins)), ctor
        }
    };
    return {
        slice: slice,
        generateId: function() {
            var id = 1;
            return function() {
                return "auto_gen_" + id++
            }
        }(),
        each: each,
        map: function(o, fn) {
            var ret = [];
            return each(o, function(v, k) {
                ret.push(fn(v, k))
            }), ret
        },
        unique: function(arr) {
            var o = (arr.length, {}), ret = [];
            each(arr, function(v) {
                o[v] = v
            });
            for (var p in o)
                p == o[p] && ret.push(p);
            return ret
        },
        filter: function(o, fn) {
            var ret = [];
            return each(o, function(v, k) {
                fn(v, k)===!0 && ret.push(v)
            }), ret
        },
        indexOf: function(arr, o) {
            if (arr.indexOf)
                return arr.indexOf(o);
            for (var i = 0; i < arr.length; i++)
                if (arr[i] === o)
                    return i;
            return - 1
        },
        lenFor: function(str) {
            var byteLen = 0, len = str.length, l = arguments[1];
            if (str) {
                for (var i = 0; len > i; i++)
                    if (str.charCodeAt(i) > 255 ? byteLen += 2 : byteLen++, byteLen > l)
                        return str.substr(0, i);
                return l ? str : byteLen
            }
            return 0
        },
        mix: mix,
        serializeDictionary: serializeDictionary,
        deserializeString: deserializeString,
        serializeStyles: serializeDictionary(":", ";", !0, !1),
        serializeAttrs: function() {
            var fn = serializeDictionary("=", " ", !0, !1);
            return function(o) {
                return each(o, function(v, k) {
                    o[k] = '"' + v + '"'
                }), fn(o)
            }
        }(),
        serializeQuery: serializeDictionary("=", "&", !1, !0),
        buffer: function(runner, delay) {
            var timer;
            return function() {
                timer && clearTimeout(timer);
                var args = arguments;
                timer = setTimeout(function() {
                    runner.apply(window, args)
                }, delay || 100)
            }
        },
        format: function(s, config, reserve) {
            return s.replace(/\{([^}]*)\}/g, "object" == typeof config ? function(m, i) {
                var ret = config[i];
                return null == ret && reserve ? m : ret
            } : config)
        },
        instance: function(o) {
            var ctor = function() {};
            return ctor.prototype = o, new ctor
        },
        doNothing: function() {},
        output: function(lib_name, lib) {
            var eval_arr = [];
            lib_name = lib_name || "crystal";
            for (var p in lib || this)
                eval_arr.push("var "), eval_arr.push(p), eval_arr.push("="), eval_arr.push(lib_name), eval_arr.push("."), eval_arr.push(p), eval_arr.push(";");
            return eval_arr.join("")
        },
        Class: Class
    }
}(), function() {
    var m, o = {
        ie: 0,
        opera: 0,
        gecko: 0,
        webkit: 0,
        mobile: null
    }, ua = navigator.userAgent;
    return /KHTML/.test(ua) && (o.webkit = 1), m = ua.match(/AppleWebKit\/([^\s]*)/), m && m[1] && (o.webkit = parseFloat(m[1]), / Mobile\//.test(ua) ? o.mobile = "Apple" : (m = ua.match(/NokiaN[^\/]*/), m && (o.mobile = m[0]))), o.webkit || (m = ua.match(/Opera[\s\/]([^\s]*)/), m && m[1] ? (o.opera = parseFloat(m[1]), m = ua.match(/Opera Mini[^;]*/), m && (o.mobile = m[0])) : (m = ua.match(/MSIE\s([^;]*)/i), m && m[1] ? o.ie = parseFloat(m[1]) : (m = ua.match(/Gecko\/([^\s]*)/), m && (o.gecko = 1, m = ua.match(/rv:([^\s\)]*)/), m && m[1] && (o.gecko = parseFloat(m[1])))))), o
}());
var mutex_lock, mutex_unlock;
!function(namespace) {
    var locked=!1;
    namespace.mutex_lock = function() {
        return locked?-1 : (locked=!0, 0)
    }, namespace.mutex_unlock = function() {
        return locked=!1, 0
    }
}(window); /*2014-10-09 11:06:27*/
