/*!
* sina.com.cn/license
* svn:../ui/task/others/12Q3/0829_实时弹窗/
* 201401061526
* [1,694,36] published at 2014-09-29 17:18:42
*/
(function() {
    if ((window.top !== window.self) || window._preventTanChuang_) {
        return 
    }
    var getParam = function(key) {
        var params = location.search;
        if (params) {
            var arr = params.substr(1).split('&');
            for (var i = 0; i < arr.length; i++) {
                data = arr[i].split('=');
                if (data[0] == key) {
                    return data[1]
                }
            }
        }
    };
    var preventParam = getParam('from');
    if (preventParam && preventParam === 'wap') {
        return 
    }
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c%a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--)
                r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }
            ];
            e = function() {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c])
                p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('q $1y(g){7(g.18&&g.18==1)8 h=g;t 7(1z(g).19(/^#([^$]+)$/i)){8 h=1A.1B(K.$1+\'\');7(!h)9 Q}t 9 Q;7(W(h.6)!=\'X\'&&h.6){h.6.R();9 h};h.1C=0.1;h.6={};h.6.4=[];h.6.C=0;7(W(h.L)!=\'X\')1a{1b h.L}1c(1d){h.L=Q}8 k={\'1e|1f|1D|1E|1g|1h|1F|1G|1H|1i|1j\':\'1I\',\'1J\':\'1K\',\'E\':\'\'};8 l=!!1L.1M.19(/1N/1O);8 m={1k:S,H:5,D:\'\'};8 n={E:q(a,b){a=u(a);7(z(a)){7(l){8 c=(T K(\'1l\\\\s*\\\\(E\\\\s*=\\\\s*(\\\\d+)\\\\)\')).Y(h.v.1m+\'\');7(c)9 u(c[1]);t 9 1}t{9 Z.1P((h.v.E?1Q(h.v.E):1)*S)}}t{a=Z.1R(S,Z.1S(0,a));7(l){h.v.1T=1;h.v.1m=\'1l(E=\'+a+\');\'}t{h.v.E=a/S}}},\'1i\':q(a,b){a=u(a);8 x=0,y=0;8 c=(T K(\'^(-?\\\\d+)[^\\\\d\\\\-]+(-?\\\\d+)\')).Y(h.v.U+\'\');7(c){x=u(c[1]);y=u(c[2])}7(z(a))9 x;t{h.v.U=a+b+\' \'+y+b}},\'1j\':q(a,b){a=u(a);8 x=0,y=0;8 c=(T K(\'^(-?\\\\d+)[^\\\\d\\\\-]+(-?\\\\d+)\')).Y(h.v.U+\'\');7(c){x=u(c[1]);y=u(c[2])}7(z(a))9 y;t{h.v.U=x+b+\' \'+a+b}}};8 o={1g:q(){9 u(h.1U)},1h:q(){9 u(h.1V)},1e:q(){8 a=0;A(8 b=h;b;b=b.1n)a+=u(b.1W);9 a},1f:q(){8 a=0;A(8 b=h;b;b=b.1n)a+=u(b.1X);9 a}};h.1o=q(){3.6.R();9 3};h.1p=q(a,b){7(h.6.4[3.6.C].I)9 3;8 b=u(b);3.6.4[z(b)?3.6.C:b].10=a;9 3};h.1q=q(c){8 d=3.6.C;7(3.6.4[d].I)9 3;A(8 p 1r m){7(!c[p])c[p]=m[p]};7(!c.D){A(8 e 1r k)7((T K(e,\'i\').1Y(c.r))){c.D=k[e];1Z}};c.J=(c.J&&c.J.B)?c.J:q(){};c.M=(c.M&&c.M.B)?c.M:q(){};7(!3.6[c.r]){7(n[c.r])3.6[c.r]=n[c.r];t{8 f=3;3.6[c.r]=q(a,b){7(W(a)==\'X\')9 u(f.v[c.r]);t f.v[c.r]=u(a)+b}}};7(z(c.F)){7(z(3.6[c.r]()))7(o[c.r])c.F=o[c.r]();t c.F=0;t c.F=3.6[c.r]()}c.11=c.F;3.6[c.r](c.F,c.D);3.6.4[d].w.20(c);9 3};h.1s=q(a,b,c){8 d=h.6.C;7(3.6.4[d].I){9 3}1t(q(){7(h.6.4[d].I)9 h;h.6.4[d].I=12;7(h.6.4[d].N>0)9 h;h.6.4[d].13=(a&&a.B)?a:q(){};h.6.4[d].1u=(c&&c.B)?c:q(){};7(!z(b))h.6.4[d].V=b;A(8 i=0;i<h.6.4[d].w.G;i++){h.6.4[d].w[i].J.B(h);h.6.O(d,i)}},h.6.4[d].10);9 3};h.1v=q(a,b){3.6.4[!z(b)?b:3.6.C].14=a;9 3};h.1w=q(a){3.6.4[!z(a)?a:3.6.C].15=12;9 3};h.1x=q(){A(8 i=0;i<3.6.4.G;i++){A(8 j=0;j<3.6.4[i].w.G;j++){8 a=3.6.4[i].w[j];7(z(a.11))3.6[a.r](\'\',\'\');t 3.6[a.r](a.11,a.D)}}8 b=[\'6\',\'1p\',\'1q\',\'1o\',\'1s\',\'1v\',\'1w\',\'1x\'];A(8 i=0;i<b.G;i++)1a{1b 3[b[i]]}1c(1d){3[b[i]]=Q}3.L=12};h.6.R=q(){8 a=3.4.G;3.C=a;3.4[a]={};3.4[a].V=1;3.4[a].15=16;3.4[a].w=[];3.4[a].N=0;3.4[a].P=0;3.4[a].10=0;3.4[a].14=16;3.4[a].I=16;3.4[a].13=q(){};9 3};h.6.O=q(a,b){7(!3.4[a]||3.4[a].15||h.L)9;8 c=3.4[a].w[b];8 d=3[c.r]();7((c.H>0&&d+c.H<=c.17)||(c.H<0&&d+c.H>=c.17)){7(!3.4[a].14)3[c.r](d+c.H,c.D);8 e=3;1t(q(){7(e.O)e.O(a,b)},c.1k)}t{3[c.r](c.17,c.D);3.4[a].N++;c.M.B(h);7(3.4[a].w.G==3.4[a].N){3.4[a].N=0;3.4[a].P++;3.4[a].1u.B(h,3.4[a].P);7(3.4[a].P<3.4[a].V||3.4[a].V==-1){A(8 i=0;i<3.4[a].w.G;i++){3[c.r](c.F,3.4[a].w[i].D);3.4[a].w[i].J.B(h,3.4[a].P);3.O(a,i)}}t{3.4[a].13.B(h)}}}};h.6.R();9 h}', 62, 125, '|||this|sets||_fx|if|var|return|||||||||||||||||function|type||else|parseInt|style|_queue|||isNaN|for|call|_currSet|unit|opacity|from|length|step|_isrunning|onstart|RegExp|_fxTerminated|onfinish|_effectsDone|_process|_loopsDone|null|_addSet|100|new|backgroundPosition|_loops|typeof|undefined|exec|Math|_holdTime|_initial|true|_onfinal|_paused|_stoped|false|to|nodeType|match|try|delete|catch|err|left|top|width|height|backgroundx|backgroundy|delay|alpha|filter|offsetParent|fxAddSet|fxHold|fxAdd|in|fxRun|setTimeout|_onloop|fxPause|fxStop|fxReset|fx|String|document|getElementById|fxVersion|right|bottom|margin|padding|spacing|px|font|pt|navigator|userAgent|MSIE|ig|round|parseFloat|min|max|zoom|offsetWidth|offsetHeight|offsetLeft|offsetTop|test|break|push'.split('|'), 0, {}));
    (function() {
        var env = {
            DEBUG: false,
            version: '2.0.0',
            SOCKET_API: 'newspush.sinajs.cn',
            JS_POLL_VAR: 'live_NEWSPUSH',
            JS_POLL_PERIOD: 6 * 1000,
            COOKIE_KEY_TIMESTAMP: 'lxlrttp',
            COOKIE_KEY_STATUS: 'lxlrtst',
            CSS_ID: 'realTimeWindowStyle',
            isIe6: (!-[1, ]&&!window.XMLHttpRequest),
            ready: null,
            ua: (function() {
                var uas = {};
                var ua = navigator.userAgent.toLowerCase();
                uas.isIOS = /\((iPhone|iPad|iPod)/i.test(ua);
                return uas
            })()
        };
        (function() {
            env.log = function(msg) {
                env.DEBUG && window.console && window.console.log && window.console.log(msg)
            };
            env.log('version: ' + env.version);
            env.trim = function(str) {
                if (!str)
                    return '';
                return str.replace(/(^\s*)|(\s*$)/g, "")
            };
            env.encodeHTML = function(str) {
                var div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML.replace(/\s/g, '&nbsp;')
            };
            (function() {
                var DOMReady = (function() {
                    var me = {};
                    var fns = [], isReady = false, errorHandler = null, run = function(fn, args) {
                        try {
                            fn.apply(me, args || [])
                        } catch (err) {
                            if (errorHandler)
                                errorHandler.call(me, err)
                        }
                    }, ready = function() {
                        isReady = true;
                        for (var x = 0; x < fns.length; x++)
                            run(fns[x].fn, fns[x].args || []);
                        fns = []
                    };
                    me.setOnError = function(fn) {
                        errorHandler = fn;
                        return me
                    };
                    me.add = function(fn, args) {
                        if (isReady) {
                            run(fn, args)
                        } else {
                            fns[fns.length] = {
                                fn: fn,
                                args: args
                            }
                        }
                        return me
                    };
                    if (window.addEventListener) {
                        window.document.addEventListener('DOMContentLoaded', function() {
                            ready()
                        }, false)
                    } else {
                        (function() {
                            if (!window.document.uniqueID && window.document.expando)
                                return;
                            var tempNode = window.document.createElement('document:ready');
                            try {
                                tempNode.doScroll('left');
                                ready()
                            } catch (err) {
                                setTimeout(arguments.callee, 0)
                            }
                        })()
                    }
                    return me
                })();
                env.ready = function(fn) {
                    DOMReady.add(fn)
                }
            })();
            env.addEvent = function(elem, evt, fn) {
                if (!elem) {
                    return 
                }
                if (elem.addEventListener) {
                    elem.addEventListener(evt, fn, false)
                } else if (elem.attachEvent) {
                    elem.attachEvent('on' + evt, fn)
                }
            };
            env.dom = {};
            env.dom.byId = function(id) {
                return document.getElementById(id) || null
            };
            env.viewportSize = function() {
                var viewportwidth;
                var viewportheight;
                var docWidth, docHeight;
                if (typeof window.innerWidth != 'undefined') {
                    viewportwidth = window.innerWidth, viewportheight = window.innerHeight
                } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
                    viewportwidth = document.documentElement.clientWidth, viewportheight = document.documentElement.clientHeight
                } else {
                    viewportwidth = document.getElementsByTagName('body')[0].clientWidth, viewportheight = document.getElementsByTagName('body')[0].clientHeight
                }
                return {
                    w: viewportwidth,
                    h: viewportheight
                }
            };
            (function() {
                if (!env.isIe6) {
                    env.docScrollPosition = function() {
                        return null
                    };
                    return 
                }
                var scrollTop = document.body ? (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0): 0;
                var scrollLeft = document.body ? (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0): 0;
                env.addEvent(window, 'scroll', function(e) {
                    if (!document.body) {
                        return 
                    }
                    scrollTop = document.body ? (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) : 0;
                    scrollLeft = document.body ? (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0) : 0
                });
                env.docScrollPosition = function() {
                    if (!document.body) {
                        return null
                    }
                    return {
                        top: scrollTop,
                        left: scrollLeft
                    }
                }
            })();
            function setCookie(name, value, expires, path, domain, secure) {
                try {
                    var today = new Date();
                    today.setTime(today.getTime());
                    if (expires) {
                        expires = expires * 1000 * 60 * 60 * 24
                    }
                    var expires_date = new Date(today.getTime() + (expires));
                    document.cookie = name + "=" + escape(value) + ((expires) ? ";expires=" + expires_date.toGMTString() : "") + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ((secure) ? ";secure" : "")
                } catch (e) {}
            };
            function getCookie(check_name) {
                try {
                    var a_all_cookies = document.cookie.split(';');
                    var a_temp_cookie = '';
                    var cookie_name = '';
                    var cookie_value = '';
                    var b_cookie_found = false;
                    for (i = 0; i < a_all_cookies.length; i++) {
                        a_temp_cookie = a_all_cookies[i].split('=');
                        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
                        if (cookie_name == check_name) {
                            b_cookie_found = true;
                            if (a_temp_cookie.length > 1) {
                                cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''))
                            }
                            return cookie_value;
                            break
                        }
                        a_temp_cookie = null;
                        cookie_name = ''
                    }
                    if (!b_cookie_found) {
                        return null
                    }
                } catch (e) {}
            };
            env.setCookie = setCookie;
            env.getCookie = getCookie;
            var _getJsData = function(url, dispose) {
                var scriptNode = document.createElement("script");
                scriptNode.type = "text/javascript";
                scriptNode.setAttribute('charset', 'gb2312');
                scriptNode.onreadystatechange = scriptNode.onload = function() {
                    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                        if (dispose) {
                            dispose()
                        };
                        scriptNode.onreadystatechange = scriptNode.onload = null;
                        scriptNode.parentNode.removeChild(scriptNode)
                    }
                };
                scriptNode.src = url;
                document.getElementsByTagName("head")[0].appendChild(scriptNode)
            };
            env.getScript = _getJsData;
            function GetSuda() {
                this._init.apply(this, arguments)
            };
            GetSuda.prototype = {
                hasGot: false,
                _get: function() {
                    env.log('got suda!');
                    this.hasGot = true;
                    for (var i = 0; i < this._readyFn.length; i++) {
                        this._readyFn[i]()
                    }
                },
                _init: function() {
                    var that = this;
                    this._readyFn = [];
                    if (window.GB_SUDA && window.GB_SUDA._S_uaTrack) {
                        env.log('got suda!');
                        this.hasGot = true
                    } else {
                        env.getScript('http://i3.sinaimg.cn/unipro/pub/suda_s_v851c.js', function() {
                            if (window.GB_SUDA && window.GB_SUDA._S_uaTrack) {
                                that._get.call(that)
                            }
                        })
                    }
                },
                _readyFn: null,
                ready: function(fn) {
                    if (typeof fn !== 'function') {
                        return 
                    }
                    if (this.hasGot) {
                        fn();
                        return 
                    }
                    this._readyFn.push(fn)
                }
            };
            env.getSuda = new GetSuda();
            env.uaTrack = function(key, val, val2) {
                if (typeof _S_uaTrack == 'function') {
                    try {
                        _S_uaTrack(key, val, val2)
                    } catch (e) {}
                }
            }
        })();
        (function() {
            function RealTimeMessage() {
                this._init.apply(this, arguments)
            };
            RealTimeMessage.prototype = {
                onMsg: function(fn) {
                    this.onMsgFn = this.onMsgFn || [];
                    if (typeof fn === 'function') {
                        this.onMsgFn.push(fn)
                    }
                },
                onMsgFn: null,
                _curTimeStamp: 0,
                _msg: function(msg) {
                    env.log('blackbox data in' + ((new Date()).getTime()));
                    var lastTimeStamp, that = this, __u, __m, __l;
                    if (typeof msg[0] == 'undefind') {
                        return 
                    }
                    info = msg[0];
                    if (typeof info == 'undefined' ||!info) {
                        env.log('get empty data!');
                        return 
                    }
                    if (info.t < 0) {
                        env.log('get data, but info.t < 0. clear tunnel');
                        this._curTimeStamp = parseInt(info.i);
                        that._setMsgCookie(info);
                        return 
                    }
                    __u = env.trim(info.u);
                    __m = env.trim(info.m);
                    if (!__u ||!__m) {
                        env.log('empty msg...');
                        return 
                    }
                    if (__u.toLowerCase().indexOf('http') !== 0) {
                        env.log('url is wrong!');
                        return 
                    }
                    if (parseInt(info.i) < 1346399822) {
                        env.log('older than 1346399822!');
                        env.log('info.i = ' + info.i);
                        return 
                    }
                    lastTimeStamp = env.getCookie(env.COOKIE_KEY_TIMESTAMP) || 0;
                    if (parseInt(info.i) > parseInt(lastTimeStamp) && parseInt(info.i) > this._curTimeStamp) {
                        that._setMsgCookie(info);
                        if (!that.onMsgFn || that.onMsgFn.length === 0) {
                            env.log('got final data, no onmsg fn');
                            return 
                        }
                        this._curTimeStamp = parseInt(info.i);
                        for (var i = 0; i < that.onMsgFn.length; i++) {
                            that.onMsgFn[i](info)
                        }
                    } else {
                        env.log('get data! old data!');
                        env.log('lastTimeStamp: ' + lastTimeStamp);
                        env.log('newTimeStamp: ' + info.i);
                        env.log('title: ' + info.m)
                    }
                },
                _setMsgCookie: function(info) {
                    setTimeout(function() {
                        env.setCookie(env.COOKIE_KEY_TIMESTAMP, info.i, 100, '/', '.sina.com.cn')
                    }, 1e3)
                },
                _init: function() {
                    var that = this;
                    if (!IO ||!IO.WebPush3) {
                        return 
                    }
                    this.WebPush = new IO.WebPush3(env.SOCKET_API, [env.JS_POLL_VAR], function(msg) {
                        that._msg(msg[env.JS_POLL_VAR])
                    }, {
                        format: 'json',
                        local: true,
                        interval: 12
                    })
                }
            };
            env.RealTimeMessage = RealTimeMessage
        })();
        (function() {
            function RealTimeWindow() {
                this._init.apply(this, arguments)
            };
            RealTimeWindow.prototype = {
                msg: null,
                showing: false,
                container: null,
                idPre: null,
                _closeIntervalId: null,
                _show: function(url, c_id) {
                    var that = this;
                    this.showing = true;
                    this.container.style.visibility = 'hidden';
                    this.container.style.display = 'block';
                    this.container.style.width = 'auto';
                    this.container.style.width = 64 + env.dom.byId(that.idPre + 'Md').offsetWidth + 39 + 5 + 'px';
                    if (that.container.offsetWidth > env.viewportSize().w) {
                        that.container.style.left = (env.docScrollPosition() ? env.docScrollPosition().left : 0) + 'px'
                    } else {
                        that.container.style.left = (env.docScrollPosition() ? env.docScrollPosition().left : 0) + (env.viewportSize().w / 2 - that.container.offsetWidth / 2) + 'px'
                    }
                    this.container.style.visibility = 'visible';
                    if (env.isIe6) {
                        $fx(this.container).fxAdd({
                            type: 'top',
                            from: parseInt(this.container.style.top),
                            to: parseInt(this.container.style.top) - 49,
                            step: 2,
                            delay: 12
                        }).fxRun()
                    } else {
                        $fx(this.container).fxAdd({
                            type: 'bottom',
                            from: - 49,
                            to: 0,
                            step: 2,
                            delay: 12
                        }).fxRun()
                    }
                    env.getSuda.ready(function() {
                        env.log('suda pageview!');
                        env.uaTrack('newspopnew', 'pageview_' + c_id, url)
                    })
                },
                _close: function(nocookie) {
                    env.log('real time window close!');
                    this.container.style.display = 'none';
                    var that = this;
                    var cookie = env.getCookie(env.COOKIE_KEY_STATUS).replace('_o', '_c');
                    if (!nocookie) {
                        env.setCookie(env.COOKIE_KEY_STATUS, cookie, 100, '/', '.sina.com.cn')
                    }
                    if (this._closeIntervalId) {
                        clearInterval(this._closeIntervalId);
                        this._closeIntervalId = null
                    }
                    this.showing = false;
                    if (env.isIe6) {
                        this.container.style.top = parseInt(this.container.style.top) + 49 + 'px'
                    } else {
                        this.container.style.bottom = '-49px'
                    }
                },
                _isRightMsg: function() {
                    var dict = {
                        '1': 'all',
                        '28': 'ent',
                        '6': 'sports',
                        '2': 'tech',
                        '31': 'finance',
                        '20': 'baby',
                        '8': 'eladies',
                        '434': 'health',
                        '1081': 'collection',
                        '622': 'style',
                        '42': 'edu',
                        '54': 'astro',
                        '1443': 'fo',
                        '112': 'book',
                        '1488': 'history'
                    };
                    var url = location.href;
                    var host = url.split('?')[0];
                    var sinacn = '.sina.com.cn';
                    var isRightChannel = function(channel) {
                        return (host).indexOf(channel + sinacn)!==-1
                    };
                    return function(info) {
                        var index = info.c;
                        var channel = dict[index];
                        var infoUrl = info.u;
                        if (infoUrl === url) {
                            return false
                        }
                        if (typeof channel == 'undeinfed') {
                            return false
                        } else if (channel == 'all') {
                            return true
                        } else {
                            return isRightChannel(channel)
                        }
                    }
                }(),
                _render: function(info) {
                    if (!this._isRightMsg(info)) {
                        return 
                    }
                    var title, url, msg, time, that = this, oldCookie;
                    if (!info.m ||!info.u ||!info.i) {
                        env.log('valid info!');
                        return 
                    }
                    title = info.m;
                    url = info.u;
                    msg = info.l;
                    time = info.i;
                    c_id = info.c;
                    oldCookie = env.getCookie(env.COOKIE_KEY_STATUS);
                    if (oldCookie && parseInt(oldCookie) === parseInt(time) && oldCookie.indexOf('_c') >= 0) {
                        return 
                    }(this._closeIntervalId) && (clearInterval(this._closeIntervalId));
                    if (this.showing) {
                        this._close.call(this, true);
                        this._renderDOM.call(this, title, url, msg, c_id)
                    } else {
                        this._renderDOM.call(this, title, url, msg, c_id)
                    }
                    env.setCookie(env.COOKIE_KEY_STATUS, time + '_o', 100, '/', '.sina.com.cn');
                    this._closeIntervalId = setInterval(function() {
                        var cookie = env.getCookie(env.COOKIE_KEY_STATUS);
                        var isOpen=!!(cookie && cookie.indexOf('_o') >= 0);
                        if (!isOpen) {
                            that._close.call(that)
                        }
                    }, 100)
                },
                _addSudaClick: function(url, c_id) {
                    var that = this;
                    var sudaKey = 'newspopnew';
                    env.dom.byId(that.idPre + 'CloseBtn').onclick = function() {
                        that._close.call(that);
                        env.getSuda.ready(function() {
                            env.log('suda close!');
                            env.uaTrack(sudaKey, 'close_' + c_id)
                        })
                    };
                    env.dom.byId(that.idPre + 'Title').onclick = function() {
                        that._close.call(that);
                        env.getSuda.ready(function() {
                            env.log('suda title!');
                            env.uaTrack(sudaKey, 'click_' + c_id, url);
                            env.uaTrack(sudaKey, 'title_' + c_id, url)
                        })
                    };
                    env.dom.byId(that.idPre + 'Detail').onclick = function() {
                        that._close.call(that);
                        env.getSuda.ready(function() {
                            env.log('suda details!');
                            env.uaTrack(sudaKey, 'click_' + c_id, url);
                            env.uaTrack(sudaKey, 'details_' + c_id, url)
                        })
                    }
                },
                _renderDOM: function(title, url, msg, c_id) {
                    var that = this, i, clickA;
                    var html = [];
                    title = env.encodeHTML(title);
                    html.push('<div class="rtw2-in rtw2-cfx">');
                    html.push('<div class="rtw2-lt">');
                    html.push('</div>');
                    html.push('<div class="rtw2-md" id="' + this.idPre + 'Md">');
                    html.push('<a class="rtw2-md-title" hidefocus id="' + this.idPre + 'Title" href="' + url + '" target="_blank">' + title + '</a>');
                    html.push('<a class="rtw2-md-detail" hidefocus id="' + this.idPre + 'Detail" href="' + url + '" target="_blank">详细&gt;&gt;</a>');
                    html.push('</div>');
                    html.push('<div class="rtw2-close" >');
                    html.push('<a id="' + this.idPre + 'CloseBtn"  class="rtw2-close-btn" href="javascript:void(0);" hidefocus></a>');
                    html.push('</div>');
                    html.push('</div>');
                    html = html.join('');
                    env.log(html);
                    this.container.innerHTML = html;
                    that._addSudaClick(url, c_id);
                    this._show.call(this, url, c_id)
                },
                _init: function() {
                    var that = this, styleNode, css;
                    this.idPre = 'rtw' + (new Date()).getTime().toString() + Math.round(Math.random() * 10000).toString();
                    if (!env.dom.byId(env.CSS_ID)) {
                        var newStyle = [];
                        function appendStyle(css) {
                            var style = document.createElement('style');
                            style.type = 'text/css';
                            try {
                                style.appendChild(document.createTextNode(css))
                            } catch (e) {
                                if (style.styleSheet) {
                                    try {
                                        oldCss = style.styleSheet.cssText
                                    } catch (e) {
                                        oldCss = ''
                                    }
                                    style.styleSheet.cssText = oldCss + css
                                } else {}
                            }
                            document.getElementsByTagName('head')[0].appendChild(style)
                        }
                        newStyle.push('.rtw2-cfx:after {content:"\0020";display:block;height:0;clear:both;}');
                        newStyle.push('.rtw2-cfx {zoom:1;}');
                        newStyle.push('.real-time-window {z-index:60000; display:block; height:50px; line-height:50px; overflow:hidden; zoom:1;}');
                        newStyle.push('.real-time-window .rtw2-in { height:50px;line-height:50px;}');
                        newStyle.push('.real-time-window .rtw2-lt { display:inline; float:left; width:61px; height:50px; background:url(http://i3.sinaimg.cn/dy/deco/2013/0331/mmx_tc_ico_main.png) 0 0 no-repeat #f9f5ec; zoom:1; }');
                        newStyle.push('.real-time-window .rtw2-md { display:inline; float:left; background:#f9f5ec; height:48px; line-height:48px; zoom:1; border-top:1px solid #f6e3c9;border-bottom:1px solid #f6e3c9;}');
                        newStyle.push('.real-time-window a.rtw2-md-title { font-family:"Microsoft YaHei","微软雅黑","SimHei","黑体" !important; display:inline-block; height:48px; line-height:48px; padding:0 5px; font-size:16px; }');
                        newStyle.push('.real-time-window a.rtw2-md-title:link { color:#122E67 !important;text-decoration:none !important;}');
                        newStyle.push('.real-time-window a.rtw2-md-title:hover { color:#ff8400 !important;text-decoration:underline !important;}');
                        newStyle.push('.real-time-window a.rtw2-md-title:visited { color:#52687e !important;text-decoration:none !important;}');
                        newStyle.push('.real-time-window a.rtw2-md-detail {font-family:"SimSun","宋体","Arial Narrow" !important; display:inline-block; height:48px; line-height:48px; padding:0 5px; font-size:16px; display:none;}');
                        newStyle.push('.real-time-window a.rtw2-md-detail:link { color:#22c4ff;text-decoration:none;}');
                        newStyle.push('.real-time-window a.rtw2-md-detail:hover { color:#22c4ff;text-decoration:underline !important;}');
                        newStyle.push('.real-time-window a.rtw2-md-detail:visited { color:#22c4ff;text-decoration:none;}');
                        newStyle.push('.real-time-window .rtw2-close { display:inline; width:42px; height:38px; float:left; background:url(http://i3.sinaimg.cn/dy/deco/2013/0331/mmx_tc_ico_main.png) -61px 0 no-repeat; padding-top:12px; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale, src="http://i0.sinaimg.cn/dy/deco/2013/0331/mmx_tc_ico_right.png"); _background:none; zoom:1;}');
                        newStyle.push('.real-time-window .rtw2-close-btn{ width:26px; height:25px; display:block;background:url(http://i3.sinaimg.cn/dy/deco/2013/0331/mmx_tc_ico_main.png) no-repeat -103px 0 #f9f5ec;}');
                        newStyle.push('.real-time-window .rtw2-close-btn:hover{ background-position: right 0; }');
                        newStyle = newStyle.join('\n ');
                        appendStyle(newStyle)
                    }
                    var div = document.createElement('div');
                    div.className = 'real-time-window';
                    div.style.display = 'none';
                    if (env.isIe6) {
                        div.style.position = 'absolute';
                        div.style.left = '0px';
                        div.style.top = (env.docScrollPosition() ? env.docScrollPosition().top + env.viewportSize().h : 10000) + 'px';
                        env.addEvent(window, 'scroll', function(e) {
                            setTimeout(function() {
                                if (that.showing) {
                                    if (that.container.offsetWidth > env.viewportSize().w) {
                                        that.container.style.left = (env.docScrollPosition() ? env.docScrollPosition().left : 0) + 'px'
                                    } else {
                                        that.container.style.left = (env.docScrollPosition() ? env.docScrollPosition().left : 0) + (env.viewportSize().w / 2 - that.container.offsetWidth / 2) + 'px'
                                    }
                                    that.container.style.top = (env.docScrollPosition() ? env.docScrollPosition().top + env.viewportSize().h - 49 : 10000) + 'px'
                                } else {
                                    that.container.style.top = (env.docScrollPosition() ? env.docScrollPosition().top + env.viewportSize().h : 10000) + 'px'
                                }
                            }, 0)
                        });
                        env.addEvent(window, 'resize', function(e) {
                            setTimeout(function() {
                                if (that.showing) {
                                    if (that.container.offsetWidth > env.viewportSize().w) {
                                        that.container.style.left = (env.docScrollPosition() ? env.docScrollPosition().left : 0) + 'px'
                                    } else {
                                        that.container.style.left = (env.docScrollPosition() ? env.docScrollPosition().left : 0) + (env.viewportSize().w / 2 - that.container.offsetWidth / 2) + 'px'
                                    }
                                    that.container.style.top = (env.docScrollPosition() ? env.docScrollPosition().top + env.viewportSize().h - 49 : 10000) + 'px'
                                } else {
                                    that.container.style.top = (env.docScrollPosition() ? env.docScrollPosition().top + env.viewportSize().h : 10000) + 'px'
                                }
                            }, 0)
                        })
                    } else {
                        div.style.position = 'fixed';
                        div.style.left = '0px';
                        div.style.bottom = '-49px';
                        env.addEvent(window, 'resize', function(e) {
                            setTimeout(function() {
                                if (that.showing) {
                                    if (env.ua.isIOS) {
                                        document.body.scrollTop = document.body.scrollTop + 1
                                    }
                                    if (that.container.offsetWidth > env.viewportSize().w) {
                                        that.container.style.left = '0px'
                                    } else {
                                        that.container.style.left = env.viewportSize().w / 2 - that.container.offsetWidth / 2 + 'px'
                                    }
                                }
                            }, 0)
                        })
                    }
                    var appendFn = function() {
                        var body = document.getElementsByTagName('body');
                        if (!body || body.length === 0) {
                            setTimeout(appendFn, 200);
                            return 
                        }
                        body = body[0];
                        if (!body.childNodes || body.childNodes.length === 0) {
                            setTimeout(appendFn, 200);
                            return 
                        }
                        body.insertBefore(div, body.childNodes[0]);
                        that.container = div;
                        that.msg = new env.RealTimeMessage();
                        that.msg.onMsg(function(info) {
                            that._render.call(that, info)
                        })
                    };
                    appendFn()
                }
            };
            env.RealTimeWindow = RealTimeWindow
        })();
        (function() {
            env.getScript('http://woocall.sina.com.cn/lib/IO.WebPush3.js', function() {
                var app = new env.RealTimeWindow();
                if (!window.realTimeWindow) {
                    window.realTimeWindow = app
                } else {
                    window._realTimeWindow_ = app
                }
            })
        })();
        window.__realtimeMessageEnv__ = env
    })()
})();
