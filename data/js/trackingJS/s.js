/*
 Includes code from:
 CryptoJS
 code.google.com/p/crypto-js
 (c) 2009-2012 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 Includes code from:
 PluginDetect v0.8.0
 www.pinlady.net/PluginDetect/license/
*/
var _sift = _sift || [];
function __siftFlashCB(u) {
    _sift.push(["_setFlash", u])
}
window.__siftFlashCB = __siftFlashCB;
var Sift = Sift || function() {
    function u(a, b) {
        for (var c = r(a), d = a.length; 0 < c.length && c.length > b;)
            d = Math.floor(d / 2), c = r(a.substring(0, d));
        return c
    }
    function H(a) {
        var b = "", c = 0, d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                e && ("undefined" != e && "null" != e) && (0 < c && (b += "&"), b += d + "=" + e, c++)
            }
        return b
    }
    function M() {
        var a = window.location.hostname, b = a.split(".");
        if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(a))
            return a;
        if (1 == b.length)
            return null;
        for (var a = "", c = 0; 2 > c;) {
            c++;
            var d = b[b.length - c], a = d + (1 < c ? "." : "") + a;
            if ( - 1 !=
            ";ac;ad;ae;aero;af;ag;ai;al;am;an;ao;aq;ar;arpa;as;asia;at;au;aw;ax;az;ba;bb;bd;be;bf;bg;bh;bi;biz;bj;bm;bn;bo;br;bs;bt;bv;bw;by;bz;ca;cat;cc;cd;cf;cg;ch;ci;ck;cl;cm;cn;co;com;coop;cr;cu;cv;cx;cy;cz;de;dj;dk;dm;do;dz;ec;edu;ee;eg;er;es;et;eu;fi;fj;fk;fm;fo;fr;ga;gb;gd;ge;gf;gg;gh;gi;gl;gm;gn;gov;gp;gq;gr;gs;gt;gu;gw;gy;hk;hm;hn;hr;ht;hu;id;ie;il;im;in;info;int;io;iq;ir;is;it;je;jm;jo;jobs;jp;ke;kg;kh;ki;km;kn;kp;kr;kw;ky;kz;la;lb;lc;li;lk;lr;ls;lt;lu;lv;ly;ma;mc;md;me;mg;mh;mil;mk;ml;mm;mn;mo;mobi;mp;mq;mr;ms;mt;mu;museum;mv;mw;mx;my;mz;na;name;nc;ne;net;nf;ng;ni;nl;no;np;nr;nu;nz;om;org;pa;pe;pf;pg;ph;pk;pl;pm;pn;pr;pro;ps;pt;pw;py;qa;re;ro;rs;ru;rw;sa;sb;sc;sd;se;sg;sh;si;sj;sk;sl;sm;sn;so;sr;st;su;sv;sy;sz;tc;td;tel;tf;tg;th;tj;tk;tl;tm;tn;to;tp;tr;travel;tt;tv;tw;tz;ua;ug;uk;us;uy;uz;va;vc;ve;vg;vi;vn;vu;wf;ws;ye;yt;za;zm;zw;".indexOf(";" +
            d + ";")) {
                a = b[b.length - c - 1] + "." + a;
                break
            }
        }
        return a
    }
    function N(a) {
        var b = new Image(1, 1);
        b.onload = function() {
            b.onload = null;
            b.onerror = null
        };
        b.onerror = function() {
            b.onload = null;
            b.onerror = null
        };
        b.src = A + "/i.gif?" + a
    }
    function s(a, b, c) {
        var d = y.getVersion(c);
        d ? a[b] = d : - 0.25 <= y.isMinVersion(c, 0) && (a[b] = "unk")
    }
    function O(a, b) {
        function c() {
            var e = (new Date).getTime(), f=!1;
            do 
                if (d < a.length)
                    a[d](), d += 1;
                else {
                    f=!0;
                    break
                }
            while (100 > (new Date).getTime() - e);
            f || setTimeout(c, b)
        }
        var d = 0;
        setTimeout(c, b)
    }
    function P() {
        var a = {
            random_: Math.ceil(1E9 *
            Math.random()),
            version_: Q,
            beaconKey_: I
        }, b = {}, c=!1;
        O([function() {
            var b;
            a: {
                b = document.cookie;
                var c = J + "=", f = b.indexOf("; " + c);
                if ( - 1 == f) {
                    if (f = b.indexOf(c), 0 !== f) {
                        b = void 0;
                        break a
                    }
                } else 
                    f += 2;
                var g = b.indexOf(";", f);
                - 1 == g && (g = b.length);
                b = R(b.substring(f + c.length, g))
            }
            if (!b || 15 > b.length || "undefined" === b || "null" === b) {
                c = b = void 0;
                for (c = b = ""; 36 > b++; c += 51 * b & 52 ? (b^15 ? 8^Math.random() 
                    * (b^20 ? 16 : 4) : 4).toString(16) : "-");
                b = c;
                var g = new Date(2030, 1, 1), c = J, f = r(b), g = g.toGMTString(), l = void 0 === C ? M() : C;
                document.cookie = c + "=" +
                f + (g ? ";expires=" + g : "") + ";path=/" + (l ? ";domain=." + l : "")
            }
            a.userUuid_ = b
        }, function() {
            var b;
            b = "";
            try {
                b = t.top.document.referrer
            } catch (c) {
                if (t.parent)
                    try {
                        b = t.parent.document.referrer
                } catch (f) {
                    b = ""
                }
            }
            "" === b && (b = z.referrer);
            "" !== b && (a.referrer_ = u(b, 200))
        }, function() {
            z && (a.title_ = u(z.title, S), a.characterSet_ = r(z.characterSet || z.charset))
        }, function() {
            t && (a.url_ = u(t.location.href, 200), a.hostName_ = u(t.location.hostname, 200))
        }, function() {
            B && (a.screenHeight_ = B.height, a.screenWidth_ = B.width, a.colorDepth_ = B.colorDepth)
        },
        function() {
            v && (a.platform_ = r(v.platform), a.language_ = r(v.language || v.browserLanguage), a.userAgent_ = u(v.userAgent, 200))
        }, function() {
            var b = new Date;
            a.timezoneOffset_ = b.getTimezoneOffset();
            b.setDate(1);
            b.setMonth(6);
            var c = b.getTimezoneOffset();
            b.setMonth(12);
            b = b.getTimezoneOffset();
            a.dstOffset_ = Math.abs(Math.abs(b) - Math.abs(c))
        }, function() {
            D && (a.userId_ = r(D))
        }, function() {
            E ? a.sessionId_ = w.MD5(E.toString()) : a.userUuid_ && (a.sessionId_ = w.MD5(a.userUuid_))
        }, function() {
            F && (a.partnerUserId_ = r(F))
        }, function() {
            for (var b =
            v.mimeTypes, c = b ? b.length : 0, f = "", g = 0; g < c; g++)
                f += b[g].type;
            a.numMimeTypes_ = c;
            a.mimeTypesHash_ = w.MD5(f)
        }, function() {
            for (var b = v.plugins, c = b ? b.length : 0, f = "", g = 0; g < c; g++)
                var l = b[g], f = f + (l.name + l.description + l.filename + l.length);
            a.numPlugins_ = c;
            a.pluginsHash_ = w.MD5(f)
        }, function() {
            y.getVersion(".")
        }, function() {
            s(b, "f", "Flash")
        }, function() {
            s(b, "sv", "Shockwave")
        }, function() {
            s(b, "q", "Quicktime")
        }, function() {
            s(b, "w", "WindowsMediaPlayer")
        }, function() {
            s(b, "sl", "Silverlight")
        }, function() {
            (void 0 === K || 8 > K) && s(b,
            "vl", "VLC")
        }, function() {
            s(b, "pd", "AdobeReader")
        }, function() {
            s(b, "rp", "RealPlayer")
        }, function() {
            if (!c) {
                c=!0;
                y.runWLfuncs(y);
                if (null != x && "object" == typeof x) {
                    for (var d in x)
                        a[d] = x[d];
                    if (x.flash_fontsArray_) {
                        var e = (d = x.flash_fontsArray_) ? d.length: 0;
                        a.numFonts_ = e;
                        for (var f = "", g = 0; g < e; g++)
                            f += d[g];
                        a.fontsHash_ = w.MD5(f)
                    }
                }
                a.time_ = (new Date).getTime() - T;
                a = {
                    bk: a.beaconKey_,
                    tm: a.time_,
                    r: a.random_,
                    v: a.version_,
                    cs: a.characterSet_,
                    h: a.hostName_,
                    l: a.language_,
                    P: a.partnerUserId_,
                    S: a.sessionId_,
                    ui: a.userId_,
                    uu: a.userUuid_,
                    t: a.title_,
                    u: a.url_,
                    rf: a.referrer_,
                    ua: a.userAgent_,
                    nm: a.numMimeTypes_,
                    mh: a.mimeTypesHash_,
                    nf: a.numFonts_,
                    fh: a.fontsHash_,
                    np: a.numPlugins_,
                    ph: a.pluginsHash_,
                    sh: a.screenHeight_,
                    sw: a.screenWidth_,
                    cd: a.colorDepth_,
                    p: a.platform_,
                    to: a.timezoneOffset_,
                    d: a.dstOffset_,
                    si: a.flash_SocketIP_,
                    fu: a.flash_uuid_
                };
                d = H(a);
                (e = H(b)) && (d += "&" + e);
                N(d + "&z=z")
            }
        }
        ], U)
    }
    function L() {
        var a, b, c;
        for (a = 0; a < arguments.length; a += 1)
            c = arguments[a], b = c.shift(), "string" === typeof b || b instanceof String ? G[b].apply(G, c) : b.apply(G, c)
    }
    var w =
    {};
    (function() {
        var a = w = {}, b = a.util = {
            rotl: function(a, b) {
                return a<<b | a>>>32 - b
            },
            rotr: function(a, b) {
                return a<<32 - b | a>>>b
            },
            endian: function(a) {
                if (a.constructor == Number)
                    return b.rotl(a, 8) & 16711935 | b.rotl(a, 24) & 4278255360;
                for (var c = 0; c < a.length; c++)
                    a[c] = b.endian(a[c]);
                return a
            },
            randomBytes: function(a) {
                for (var b = []; 0 < a; a--)
                    b.push(Math.floor(256 * Math.random()));
                return b
            },
            bytesToWords: function(a) {
                for (var b = [], c = 0, g = 0; c < a.length; c++, g += 8)
                    b[g>>>5]|=(a[c] & 255)<<24 - g%32;
                return b
            },
            wordsToBytes: function(a) {
                for (var b =
                [], c = 0; c < 32 * a.length; c += 8)
                    b.push(a[c>>>5]>>>24 - c%32 & 255);
                return b
            },
            bytesToHex: function(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    b.push((a[c]>>>4).toString(16)), b.push((a[c] & 15).toString(16));
                return b.join("")
            },
            hexToBytes: function(a) {
                for (var b = [], c = 0; c < a.length; c += 2)
                    b.push(parseInt(a.substr(c, 2), 16));
                return b
            },
            bytesToBase64: function(a) {
                if ("function" == typeof btoa)
                    return btoa(c.bytesToString(a));
                for (var b = [], f = 0; f < a.length; f += 3)
                    for (var g = a[f]<<16 | a[f + 1]<<8 | a[f + 2], l = 0; 4 > l; l++)
                        8 * f + 6 * l <= 8 * a.length ? b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(g>>>
                        6 * (3 - l) & 63)) : b.push("=");
                return b.join("")
            },
            base64ToBytes: function(a) {
                if ("function" == typeof atob)
                    return c.stringToBytes(atob(a));
                for (var a = a.replace(/[^A-Z0-9+\/]/ig, ""), b = [], f = 0, g = 0; f < a.length; g=++f%4)
                    0 != g && b.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(f - 1)) & Math.pow(2, - 2 * g + 8) - 1)<<2 * g | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(f))>>>6 - 2 * g);
                return b
            }
        }, a = a.charenc = {};
        a.UTF8 = {
            stringToBytes: function(a) {
                return c.stringToBytes(unescape(encodeURIComponent(a)))
            },
            bytesToString: function(a) {
                return decodeURIComponent(escape(c.bytesToString(a)))
            }
        };
        var c = a.Binary = {
            stringToBytes: function(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    b.push(a.charCodeAt(c) & 255);
                return b
            },
            bytesToString: function(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    b.push(String.fromCharCode(a[c]));
                return b.join("")
            }
        }
    })();
    (function() {
        var a = w, b = a.util, c = a.charenc, d = c.UTF8, e = c.Binary, f = a.MD5 = function(a, c) {
            var d = b.wordsToBytes(f._md5(a));
            return c && c.asBytes ? d : c && c.asString ? e.bytesToString(d) : b.bytesToHex(d)
        };
        f._md5 =
        function(a) {
            a.constructor == String && (a = d.stringToBytes(a));
            for (var c = b.bytesToWords(a), e = 8 * a.length, a = 1732584193, h =- 271733879, j =- 1732584194, k = 271733878, m = 0; m < c.length; m++)
                c[m] = (c[m]<<8 | c[m]>>>24) & 16711935 | (c[m]<<24 | c[m]>>>8) & 4278255360;
            c[e>>>5]|=128<<e%32;
            c[(e + 64>>>9<<4) + 14] = e;
            for (var e = f._ff, o = f._gg, p = f._hh, q = f._ii, m = 0; m < c.length; m += 16)
                var r = a, s = h, t = j, u = k, a = e(a, h, j, k, c[m + 0], 7, - 680876936), k = e(k, a, h, j, c[m + 1], 12, - 389564586), j = e(j, k, a, h, c[m + 2], 17, 606105819), h = e(h, j, k, a, c[m + 3], 22, - 1044525330), a = e(a, h,
                j, k, c[m + 4], 7, - 176418897), k = e(k, a, h, j, c[m + 5], 12, 1200080426), j = e(j, k, a, h, c[m + 6], 17, - 1473231341), h = e(h, j, k, a, c[m + 7], 22, - 45705983), a = e(a, h, j, k, c[m + 8], 7, 1770035416), k = e(k, a, h, j, c[m + 9], 12, - 1958414417), j = e(j, k, a, h, c[m + 10], 17, - 42063), h = e(h, j, k, a, c[m + 11], 22, - 1990404162), a = e(a, h, j, k, c[m + 12], 7, 1804603682), k = e(k, a, h, j, c[m + 13], 12, - 40341101), j = e(j, k, a, h, c[m + 14], 17, - 1502002290), h = e(h, j, k, a, c[m + 15], 22, 1236535329), a = o(a, h, j, k, c[m + 1], 5, - 165796510), k = o(k, a, h, j, c[m + 6], 9, - 1069501632), j = o(j, k, a, h, c[m + 11], 14, 643717713),
                h = o(h, j, k, a, c[m + 0], 20, - 373897302), a = o(a, h, j, k, c[m + 5], 5, - 701558691), k = o(k, a, h, j, c[m + 10], 9, 38016083), j = o(j, k, a, h, c[m + 15], 14, - 660478335), h = o(h, j, k, a, c[m + 4], 20, - 405537848), a = o(a, h, j, k, c[m + 9], 5, 568446438), k = o(k, a, h, j, c[m + 14], 9, - 1019803690), j = o(j, k, a, h, c[m + 3], 14, - 187363961), h = o(h, j, k, a, c[m + 8], 20, 1163531501), a = o(a, h, j, k, c[m + 13], 5, - 1444681467), k = o(k, a, h, j, c[m + 2], 9, - 51403784), j = o(j, k, a, h, c[m + 7], 14, 1735328473), h = o(h, j, k, a, c[m + 12], 20, - 1926607734), a = p(a, h, j, k, c[m + 5], 4, - 378558), k = p(k, a, h, j, c[m + 8], 11, - 2022574463),
                j = p(j, k, a, h, c[m + 11], 16, 1839030562), h = p(h, j, k, a, c[m + 14], 23, - 35309556), a = p(a, h, j, k, c[m + 1], 4, - 1530992060), k = p(k, a, h, j, c[m + 4], 11, 1272893353), j = p(j, k, a, h, c[m + 7], 16, - 155497632), h = p(h, j, k, a, c[m + 10], 23, - 1094730640), a = p(a, h, j, k, c[m + 13], 4, 681279174), k = p(k, a, h, j, c[m + 0], 11, - 358537222), j = p(j, k, a, h, c[m + 3], 16, - 722521979), h = p(h, j, k, a, c[m + 6], 23, 76029189), a = p(a, h, j, k, c[m + 9], 4, - 640364487), k = p(k, a, h, j, c[m + 12], 11, - 421815835), j = p(j, k, a, h, c[m + 15], 16, 530742520), h = p(h, j, k, a, c[m + 2], 23, - 995338651), a = q(a, h, j, k, c[m + 0], 6, - 198630844),
                k = q(k, a, h, j, c[m + 7], 10, 1126891415), j = q(j, k, a, h, c[m + 14], 15, - 1416354905), h = q(h, j, k, a, c[m + 5], 21, - 57434055), a = q(a, h, j, k, c[m + 12], 6, 1700485571), k = q(k, a, h, j, c[m + 3], 10, - 1894986606), j = q(j, k, a, h, c[m + 10], 15, - 1051523), h = q(h, j, k, a, c[m + 1], 21, - 2054922799), a = q(a, h, j, k, c[m + 8], 6, 1873313359), k = q(k, a, h, j, c[m + 15], 10, - 30611744), j = q(j, k, a, h, c[m + 6], 15, - 1560198380), h = q(h, j, k, a, c[m + 13], 21, 1309151649), a = q(a, h, j, k, c[m + 4], 6, - 145523070), k = q(k, a, h, j, c[m + 11], 10, - 1120210379), j = q(j, k, a, h, c[m + 2], 15, 718787259), h = q(h, j, k, a, c[m + 9], 21,
                - 343485551), a = a + r>>>0, h = h + s>>>0, j = j + t>>>0, k = k + u>>>0;
            return b.endian([a, h, j, k])
        };
        f._ff = function(a, b, c, d, e, f, m) {
            a = a + (b & c|~b & d) + (e>>>0) + m;
            return (a<<f | a>>>32 - f) + b
        };
        f._gg = function(a, b, c, d, e, f, m) {
            a = a + (b & d | c&~d) + (e>>>0) + m;
            return (a<<f | a>>>32 - f) + b
        };
        f._hh = function(a, b, c, d, e, f, m) {
            a = a + (b^c^d) + (e>>>0) + m;
            return (a<<f | a>>>32 - f) + b
        };
        f._ii = function(a, b, c, d, e, f, m) {
            a = a + (c^(b|~d)) + (e>>>0) + m;
            return (a<<f | a>>>32 - f) + b
        };
        f._blocksize = 16;
        f._digestsize = 16
    })();
    var y = {
        version: "0.8.0",
        name: "PluginDetect",
        openTag: "<",
        isDefined: function(a) {
            return "undefined" !=
            typeof a
        },
        isArray: function(a) {
            return /array/i.test(Object.prototype.toString.call(a))
        },
        isFunc: function(a) {
            return "function" == typeof a
        },
        isString: function(a) {
            return "string" == typeof a
        },
        isNum: function(a) {
            return "number" == typeof a
        },
        isStrNum: function(a) {
            return "string" == typeof a && /\d/.test(a)
        },
        getNumRegx: /[\d][\d\.\_,-]*/,
        splitNumRegx: /[\.\_,-]/g,
        getNum: function(a, b) {
            var c = this.isStrNum(a) ? (this.isDefined(b) ? RegExp(b) : this.getNumRegx).exec(a): null;
            return c ? c[0] : null
        },
        compareNums: function(a, b, c) {
            var d = parseInt;
            if (this.isStrNum(a) && this.isStrNum(b)) {
                if (this.isDefined(c) && c.compareNums)
                    return c.compareNums(a, b);
                a = a.split(this.splitNumRegx);
                b = b.split(this.splitNumRegx);
                for (c = 0; c < Math.min(a.length, b.length); c++) {
                    if (d(a[c], 10) > d(b[c], 10))
                        return 1;
                    if (d(a[c], 10) < d(b[c], 10))
                        return - 1
                }
            }
            return 0
        },
        formatNum: function(a, b) {
            var c, d;
            if (!this.isStrNum(a))
                return null;
            this.isNum(b) || (b = 4);
            b--;
            d = a.replace(/\s/g, "").split(this.splitNumRegx).concat(["0", "0", "0", "0"]);
            for (c = 0; 4 > c; c++)
                if (/^(0+)(.+)$/.test(d[c]) && (d[c] = RegExp.$2),
                c > b ||!/\d/.test(d[c]))
                    d[c] = "0";
            return d.slice(0, 4).join(",")
        },
        $$hasMimeType: function(a) {
            return function(b) {
                if (!a.isIE && b) {
                    var c, d, e = a.isArray(b) ? b: a.isString(b) ? [b]: [];
                    for (d = 0; d < e.length; d++)
                        if (a.isString(e[d]) && /[^\s]/.test(e[d]) && (c = (b = navigator.mimeTypes[e[d]]) ? b.enabledPlugin : 0) && (c.name || c.description))
                            return b
                }
                return null
            }
        },
        getPROP: function(a, b, c) {
            try {
                a && (c = a[b])
            } catch (d) {}
            return c
        },
        isEnabled: {
            $: 1,
            IEPluginSecurityPopup: function() {
                var a = this.$;
                return a.isIE && 7 <= a.verIE ? 1 : 0
            },
            objectProperty: function(a) {
                var b =
                this.$, c = 0;
                b.isIE && 7 <= b.verIE && (a = b.getPROP(a, "object"), b.isDefined(a) && (c = a ? 1 : - 1));
                return c
            }
        },
        findNavPlugin: function(a, b, c) {
            var a = RegExp(a, "i"), b=!this.isDefined(b) || b ? /\d/ : 0, c = c ? RegExp(c, "i") : 0, d = navigator.plugins, e, f, g;
            for (e = 0; e < d.length; e++)
                if (g = d[e].description || "", f = d[e].name || "", a.test(g) && (!b || b.test(RegExp.leftContext + RegExp.rightContext)) || a.test(f) && (!b || b.test(RegExp.leftContext + RegExp.rightContext)))
                    if (!c ||!c.test(g)&&!c.test(f))
                        return d[e];
            return null
        },
        getMimeEnabledPlugin: function(a,
        b, c) {
            var d, b = RegExp(b, "i"), c = c ? RegExp(c, "i"): 0, e, f, g = this.isString(a) ? [a]: a;
            for (f = 0; f < g.length; f++)
                if ((d = this.hasMimeType(g[f])) && (d = d.enabledPlugin))
                    if (e = d.description || "", a = d.name || "", b.test(e) || b.test(a))
                        if (!c ||!c.test(e)&&!c.test(a))
                            return d;
            return 0
        },
        init: function(a) {
            var b, c = {
                status: - 3,
                plugin: 0
            };
            if (!this.isString(a))
                return c;
            if (1 == a.length)
                return this.getVersionDelimiter = a, c;
            a = a.toLowerCase().replace(/\s/g, "");
            b = this.Plugins[a];
            if (!b ||!b.getVersion)
                return c;
            c.plugin = b;
            this.isDefined(b.installed) ||
            (b.installed = null, b.version = null, b.version0 = null, b.getVersionDone = null, b.pluginName = a);
            if (this.isIE&&!this.ActiveXEnabled && "java" !== a)
                return c.status =- 2, c;
            c.status = 1;
            return c
        },
        getPluginFileVersion: function(a, b) {
            var c, d, e, f, g =- 1;
            if (2 < this.OS ||!a ||!a.version ||!(c = this.getNum(a.version)))
                return b;
            if (!b)
                return c;
            c = this.formatNum(c);
            b = this.formatNum(b);
            d = b.split(this.splitNumRegx);
            e = c.split(this.splitNumRegx);
            for (f = 0; f < d.length; f++)
                if ( - 1 < g && f > g && "0" != d[f] || e[f] != d[f] && ( - 1 == g && (g = f), "0" != d[f]))
                    return b;
            return c
        },
        AXO: window.ActiveXObject,
        getAXO: function(a) {
            var b = null;
            try {
                b = new this.AXO(a)
            } catch (c) {}
            return b
        },
        convertFuncs: function(a) {
            var b, c, d = /^[\$][\$]/;
            for (b in a)
                if (d.test(b))
                    try {
                        c = b.slice(2), 0 < c.length&&!a[c] && (a[c] = a[b](a), delete a[b])
            } catch (e) {}
        },
        initObj: function(a, b, c) {
            var d;
            if (a) {
                if (1 == a[b[0]] || c)
                    for (d = 0; d < b.length; d += 2)
                        a[b[d]] = b[d + 1];
                for (d in a)(c = a[d]) 
                    && 1 == c[b[0]] && this.initObj(c, b)
            }
        },
        initScript: function() {
            var a = navigator, b, c = document, d = a.userAgent || "", e = a.vendor || "", f = a.platform || "", a =
            a.product || "";
            this.initObj(this, ["$", this]);
            for (b in this.Plugins)
                this.Plugins[b] && this.initObj(this.Plugins[b], ["$", this, "$$", this.Plugins[b]], 1);
            this.convertFuncs(this);
            this.OS = 100;
            if (f) {
                var g = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
                for (b = g.length - 2; 0 <= b; b -= 2)
                    if (g[b] && RegExp(g[b], "i").test(f)) {
                        this.OS = g[b + 1];
                        break
                    }
            }
            this.head = c.getElementsByTagName("head")[0] || c.getElementsByTagName("body")[0] || c.body ||
            null;
            this.verIE = (this.isIE = /*@cc_on!@*/
            !1) ? /MSIE\s*(\d+\.?\d*)/i.test(d) ? parseFloat(RegExp.$1, 10) : 7 : null;
            this.ActiveXEnabled=!1;
            if (this.isIE) {
                c = "Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM ShockwaveFlash.ShockwaveFlash TDCCtl.TDCCtl Shell.UIHelper Scripting.Dictionary wmplayer.ocx".split(" ");
                for (b = 0; b < c.length; b++)
                    if (this.getAXO(c[b])) {
                        this.ActiveXEnabled=!0;
                        break
                    }
                d = ""
            }
            this.verGecko = (this.isGecko = /Gecko/i.test(a) && /Gecko\s*\/\s*\d/i.test(d)) ? this.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(d) ?
            RegExp.$1 : "0.9") : null;
            this.verChrome = (this.isChrome = /Chrome\s*\/\s*(\d[\d\.]*)/i.test(d)) ? this.formatNum(RegExp.$1) : null;
            this.verSafari = (this.isSafari = (/Apple/i.test(e) ||!e&&!this.isChrome) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(d)) && /Version\s*\/\s*(\d[\d\.]*)/i.test(d) ? this.formatNum(RegExp.$1) : null;
            this.verOpera = (this.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(d)) && (/Version\s*\/\s*(\d+\.?\d*)/i.test(d) || 1) ? parseFloat(RegExp.$1, 10) : null;
            this.addWinEvent("load", this.handler(this.runWLfuncs, this))
        },
        handler: function(a, b, c) {
            return function() {
                a(b, c)
            }
        },
        fPush: function(a, b) {
            this.isArray(b) && (this.isFunc(a) || this.isArray(a) && 0 < a.length && this.isFunc(a[0])) && b.push(a)
        },
        callArray: function(a) {
            var b, c;
            if (this.isArray(a)) {
                c = [].concat(a);
                for (b = 0; b < c.length; b++)
                    this.call(c[b]), a.splice(0, 1)
            }
        },
        call: function(a) {
            var b = this.isArray(a) ? a.length: - 1;
            if (0 < b && this.isFunc(a[0]))
                a[0](this, 1 < b ? a[1] : 0, 2 < b ? a[2] : 0, 3 < b ? a[3] : 0);
            else 
                this.isFunc(a) && a(this)
        },
        $$isMinVersion: function(a) {
            return function(b, c, d, e) {
                var f = a.init(b),
                b =- 1;
                if (0 > f.status)
                    return f.status;
                f = f.plugin;
                c = a.formatNum(a.isNum(c) ? c.toString() : a.isStrNum(c) ? a.getNum(c) : "0");
                1 != f.getVersionDone && (f.getVersion(c, d, e), null === f.getVersionDone && (f.getVersionDone = 1));
                null !== f.installed && (b = 0.5 >= f.installed ? f.installed : 0.7 == f.installed ? 1 : null === f.version ? 0 : 0 <= a.compareNums(f.version, c, f) ? 1 : - 0.1);
                return b
            }
        },
        getVersionDelimiter: ",",
        $$getVersion: function(a) {
            return function(b, c, d) {
                b = a.init(b);
                if (0 > b.status)
                    return null;
                b = b.plugin;
                1 != b.getVersionDone && (b.getVersion(null,
                c, d), null === b.getVersionDone && (b.getVersionDone = 1));
                return c = (c = b.version || b.version0) ? c.replace(a.splitNumRegx, a.getVersionDelimiter) : c
            }
        },
        codebase: {
            $: 1,
            isDisabled: function() {
                var a = this.$;
                return a.ActiveXEnabled && a.isIE && 7 <= a.verIE ? 0 : 1
            },
            checkGarbage: function(a) {
                var b = this.$;
                return b.isIE && (a && 0 < b.isEnabled.objectProperty(a.firstChild)) && (a = b.getPROP(a.firstChild, "readyState"), b.isNum(a) && 4 != a) ? this.garbage = 1 : 0
            },
            emptyGarbage: function() {
                if (this.$.isIE && this.garbage) {
                    try {
                        window.CollectGarbage()
                    } catch (a) {}
                    this.garbage =
                    0
                }
            },
            init: function(a) {
                if (!a.init) {
                    var b = this.$, c;
                    a.init = 1;
                    a.min = 0;
                    a.max = 0;
                    a.hasRun = 0;
                    a.version = null;
                    a.L = 0;
                    a.altHTML = "";
                    a.span = document.createElement("span");
                    a.tagA = '<object width="1" height="1" style="display:none;" codebase="#version=';
                    a.tagB = '" classid="' + a.$$.classID + '">' + a.ParamTags + a.altHTML + b.openTag + "/object>";
                    for (c = 0; c < a.Lower.length; c++)
                        a.Lower[c] = b.formatNum(a.Lower[c]), a.Upper[c] = b.formatNum(a.Upper[c])
                }
            },
            isActiveXObject: function(a, b) {
                var c = this.$, d = 0, e = a.$$, f = a.span;
                if (a.min && 0 >= c.compareNums(b,
                a.min))
                    return 1;
                if (a.max && 0 <= c.compareNums(b, a.max))
                    return 0;
                e.BIfuncs && e.BIfuncs.length && c.callArray(e.BIfuncs);
                f.innerHTML = a.tagA + b + a.tagB;
                0 < c.isEnabled.objectProperty(f.firstChild) && (d = 1);
                this.checkGarbage(f);
                f.innerHTML = "";
                d ? a.min = b : a.max = b;
                return d
            },
            convert_: function(a, b, c, d) {
                b = a.convert[b];
                a = a.$;
                return b ? a.isFunc(b) ? a.formatNum(b(c.split(a.splitNumRegx), d).join(",")) : c : b
            },
            convert: function(a, b, c) {
                var d = a.$, e, f, g, b = d.formatNum(b);
                f = {
                    v: b,
                    x: - 1
                };
                if (b)
                    for (e = 0; e < a.Lower.length; e++)
                        if ((g = this.convert_(a,
                        e, a.Lower[e])) && 0 <= d.compareNums(b, c ? g : a.Lower[e]) && (!e || 0 > d.compareNums(b, c ? this.convert_(a, e, a.Upper[e]) : a.Upper[e]))) {
                            f.v = this.convert_(a, e, b, c);
                            f.x = e;
                            break
                        }
                return f
            },
            isMin: function(a, b) {
                var c = a.$, d, e = 0;
                this.init(a);
                if (!c.isStrNum(b) || this.isDisabled())
                    return e;
                if (!a.L) {
                    a.L = {};
                    for (d = 0; d < a.Lower.length; d++)
                        if (this.isActiveXObject(a, a.Lower[d])) {
                            a.L = this.convert(a, a.Lower[d]);
                            break
                        }
                }
                a.L.v && (d = this.convert(a, b, 1), 0 <= d.x && (e = (a.L.x == d.x ? this.isActiveXObject(a, d.v) : 0 >= c.compareNums(b, a.L.v)) ? 1 : - 1));
                return e
            },
            search: function(a) {
                var b = this, c = b.$, d = 0, e;
                b.init(a);
                e = a.hasRun || b.isDisabled() ? 1 : 0;
                a.hasRun = 1;
                if (e)
                    return a.version;
                var f, g = function(c, e) {
                    var f = [].concat(j);
                    f[c] = e;
                    (f = b.isActiveXObject(a, f.join(","))) ? (d = 1, j[c] = e) : k[c] = e;
                    return f
                }, l = a.DIGITMAX, n, h, j = [0, 0, 0, 0], k = [0, 0, 0, 0];
                for (e = 0; e < k.length; e++) {
                    j[e] = a.DIGITMIN[e] || 0;
                    n = j.join(",");
                    h = j.slice(0, e).concat([9999999, 9999999, 9999999, 9999999]).slice(0, j.length).join(",");
                    for (f = 0; f < l.length; f++)
                        c.isArray(l[f]) && (l[f].push(0), l[f][e] > k[e] && (0 <= c.compareNums(h,
                        a.Lower[f]) && 0 > c.compareNums(n, a.Upper[f])) && (k[e] = l[f][e]));
                    for (f = 0; 20 > f; f++) {
                        if (16 >= k[e] - j[e]) {
                            for (f = k[e]; f >= j[e] + (e ? 1 : 0)&&!g(e, f); f--);
                            break
                        }
                        g(e, Math.round((k[e] + j[e]) / 2))
                    }
                    if (!d)
                        break;
                    k[e] = j[e]
                }
                d && (a.version = b.convert(a, j.join(",")).v);
                return a.version
            }
        },
        addWinEvent: function(a, b) {
            var c = window, d;
            this.isFunc(b) && (c.addEventListener ? c.addEventListener(a, b, !1) : c.attachEvent ? c.attachEvent("on" + a, b) : (d = c["on" + a], c["on" + a] = this.winHandler(b, d)))
        },
        winHandler: function(a, b) {
            return function() {
                a();
                "function" ==
                typeof b && b()
            }
        },
        WLfuncs0: [],
        WLfuncs: [],
        runWLfuncs: function(a) {
            a.winLoaded=!0;
            a.callArray(a.WLfuncs0);
            a.callArray(a.WLfuncs);
            if (a.DOM)
                a.DOM.onDoneEmptyDiv()
        },
        winLoaded: !1,
        $$onWindowLoaded: function(a) {
            return function(b) {
                a.winLoaded ? a.call(b) : a.fPush(b, a.WLfuncs)
            }
        },
        DOM: {
            $: 1,
            div: null,
            divID: "plugindetect",
            divWidth: 50,
            pluginSize: 1,
            altHTML: "&nbsp;&nbsp;&nbsp;&nbsp;",
            emptyNode: function(a) {
                var b = this.$, c;
                if (a && a.childNodes) {
                    for (c = a.childNodes.length - 1; 0 <= c; c--)
                        try {
                            b.isIE && (a.childNodes[c].style.display = "none")
                        } catch (d) {}
                    try {
                        a.innerHTML =
                        ""
                    } catch (e) {}
                }
            },
            LASTfuncs: [],
            onDoneEmptyDiv: function() {
                var a = this.$, b, c;
                if (a.winLoaded&&!a.WLfuncs0.length&&!a.WLfuncs.length) {
                    for (b in a.Plugins)
                        if ((c = a.Plugins[b]) && (3 == c.OTF || c.funcs && c.funcs.length))
                            return;
                    a.callArray(this.LASTfuncs);
                    if (this.div && this.div.childNodes) {
                        for (b = this.div.childNodes.length - 1; 0 <= b; b--)
                            a = this.div.childNodes[b], this.emptyNode(a);
                        try {
                            this.div.innerHTML = ""
                        } catch (d) {}
                    }
                    if (!this.div && (b = document.getElementById(this.divID)))
                        this.div = b;
                    if (this.div && this.div.parentNode) {
                        try {
                            this.div.parentNode.removeChild(this.div)
                        } catch (e) {}
                        this.div =
                        null
                    }
                }
            },
            width: function() {
                var a = this.DOM.$, b = this.span;
                return b ? a.isNum(b.scrollWidth) ? b.scrollWidth : a.isNum(b.offsetWidth) ? b.offsetWidth : - 1 : - 1
            },
            obj: function(a) {
                var b = this.DOM, c = this.span, c = c && c.firstChild ? c.firstChild: null;
                try {
                    c && a && b.div.focus()
                } catch (d) {}
                return c
            },
            getTagStatus: function(a, b, c, d) {
                if (!a ||!b ||!c)
                    return - 2;
                var e = this.$, f = a.width(), g = c.width(), l = b.width();
                if (!c.span ||!b.span ||!a.obj())
                    return - 2;
                if (0 > f || 0 > g || 0 > l || l <= this.pluginSize || g < l)
                    return 0;
                if (f >= l)
                    return - 1;
                try {
                    if (f == this.pluginSize &&
                    (!e.isIE || 4 == e.getPROP(a.obj(), "readyState")))
                        if (!a.winLoaded && e.winLoaded || a.winLoaded && e.isNum(d) && (e.isNum(a.count) || (a.count = d), 10 <= d - a.count))
                            return 1
                } catch (n) {}
                return 0
            },
            setStyle: function(a, b) {
                var c = a.style, d;
                if (c && b)
                    for (d = 0; d < b.length; d += 2)
                        try {
                            c[b[d]] = b[d + 1]
                } catch (e) {}
            },
            insertDivInBody: function(a, b) {
                var c = this.$, d = null, e = b ? window.top.document: window.document, f = e.getElementsByTagName("body")[0] || e.body;
                if (!f)
                    try {
                        e.write('<div id="pd33993399">.' + c.openTag + "/div>"), d = e.getElementById("pd33993399")
                } catch (g) {}
                if (f =
                e.getElementsByTagName("body")[0] || e.body)
                    f.insertBefore(a, f.firstChild), d && f.removeChild(d)
            },
            insert: function(a, b, c, d) {
                var e = this.$, f = document, g, l = f.createElement("span"), n, h = "outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(" ");
                e.isDefined(d) || (d = "");
                if (e.isString(a) && /[^\s]/.test(a)) {
                    a = a.toLowerCase().replace(/\s/g, "");
                    g = e.openTag + a + ' width="' + this.pluginSize + '" height="' + this.pluginSize + '" ';
                    g += 'style="outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;display:inline;" ';
                    for (n = 0; n < b.length; n += 2) 
                        / [^\s] / .test(b[n + 1]) && (g += b[n] + '="' + b[n + 1] + '" ');
                    g += ">";
                    for (n = 0; n < c.length; n += 2) 
                        / [^\s] / .test(c[n + 1]) && (g += e.openTag + 'param name="' + c[n] + '" value="' + c[n + 1] + '" />');
                    g += d + e.openTag + "/" + a + ">"
                } else 
                    a = "", g = d;
                if (!this.div && ((b = f.getElementById(this.divID)) ? this.div = b : (this.div = f.createElement("div"), this.div.id = this.divID), this.setStyle(this.div, h.concat(["width", this.divWidth + "px", "height", this.pluginSize + 3 + "px", "fontSize", this.pluginSize + 3 + "px", "lineHeight", this.pluginSize + 3 + "px",
                "verticalAlign", "baseline", "display", "block"])), !b))
                    this.setStyle(this.div, "position absolute right 0px top 0px".split(" ")), this.insertDivInBody(this.div);
                a = {
                    span: null,
                    winLoaded: e.winLoaded,
                    tagName: a,
                    outerHTML: g,
                    DOM: this,
                    width: this.width,
                    obj: this.obj
                };
                if (this.div && this.div.parentNode) {
                    this.setStyle(l, h.concat(["fontSize", this.pluginSize + 3 + "px", "lineHeight", this.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "inline"]));
                    this.div.appendChild(l);
                    try {
                        l.innerHTML = g
                    } catch (j) {}
                    a.span = l;
                    a.winLoaded =
                    e.winLoaded
                }
                return a
            }
        },
        file: {
            $: 1,
            any: "fileStorageAny999",
            valid: "fileStorageValid999",
            save: function(a, b, c) {
                var d = this.$;
                a && d.isDefined(c) && (a[this.any] || (a[this.any] = []), a[this.valid] || (a[this.valid] = []), a[this.any].push(c), (b = this.split(b, c)) && a[this.valid].push(b))
            },
            getValidLength: function(a) {
                return a && a[this.valid] ? a[this.valid].length : 0
            },
            getAnyLength: function(a) {
                return a && a[this.any] ? a[this.any].length : 0
            },
            getValid: function(a, b) {
                return a && a[this.valid] ? this.get(a[this.valid], b) : null
            },
            getAny: function(a,
            b) {
                return a && a[this.any] ? this.get(a[this.any], b) : null
            },
            get: function(a, b) {
                var c = a.length - 1, d = this.$.isNum(b) ? b: c;
                return 0 > d || d > c ? null : a[d]
            },
            split: function(a, b) {
                var c = this.$, d = null, e, a = a ? a.replace(".", "\\."): "";
                e = RegExp("^(.*[^\\/])(" + a + "\\s*)$");
                c.isString(b) && e.test(b) && (c = RegExp.$1.split("/"), d = {
                    name: c[c.length - 1],
                    ext: RegExp.$2,
                    full: b
                }, c[c.length - 1] = "", d.path = c.join("/"));
                return d
            },
            z: 0
        },
        Plugins: {
            quicktime: {
                mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"],
                progID: "QuickTimeCheckObject.QuickTimeCheck.1",
                progID0: "QuickTime.QuickTime",
                classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
                codebase: {
                    $: 1,
                    isMin: function(a) {
                        return this.$.codebase.isMin(this, a)
                    },
                    search: function() {
                        return this.$.codebase.search(this)
                    },
                    ParamTags: '<param name="src" value="" /><param name="controller" value="false" />',
                    DIGITMAX: [[12, 11, 11], [7, 60], [7, 11, 11], 0, [7, 11, 11]],
                    DIGITMIN: [5, 0, 0, 0],
                    Upper: ["999", "7,60", "7,50", "7,6", "7,5"],
                    Lower: ["7,60", "7,50", "7,6", "7,5", "0"],
                    convert: [1, function(a,
                    b) {
                        return b ? [a[0], a[1] + a[2], a[3], "0"] : [a[0], a[1].charAt(0), a[1].charAt(1), a[2]]
                    }, 1, 0, 1]
                },
                setPluginStatus: function(a, b, c) {
                    var d = this.$;
                    this.installed = b ? 1 : c ? 0 < c ? 0.7 : - 0.1 : a ? 0 : - 1;
                    b && (this.version = d.formatNum(b, 3));
                    this.getVersionDone = 0.7 == this.installed||-0.1 == this.installed ? 0 : 1;
                    d.codebase.emptyGarbage()
                },
                getVersion: function(a) {
                    var b = this.$, c = null, d = null;
                    if (b.isIE) {
                        b.isStrNum(a) && (a = a.split(b.splitNumRegx), 3 < a.length && 0 < parseInt(a[3], 10) && (a[3] = "9999"), a = a.join(","));
                        if (a = this.codebase.isMin(a)) {
                            this.setPluginStatus(0,
                            0, a);
                            return 
                        }
                        if (!c || b.debug)
                            c = this.codebase.search();
                        if (!c || b.debug)
                            if (d = b.getAXO(this.progID), (a = b.getPROP(d, "QuickTimeVersion")) && a.toString)
                                c = a.toString(16), c = parseInt(c.charAt(0) || "0", 16) + "." + parseInt(c.charAt(1) || "0", 16) + "." + parseInt(c.charAt(2) || "0", 16)
                    } else 
                        b.hasMimeType(this.mimeType) && (d = 3 != b.OS ? b.findNavPlugin("QuickTime.*Plug-?in", 0) : null) && d.name && (c = b.getNum(d.name));
                    this.setPluginStatus(d, c)
                }
            },
            java: {
                mimeType: ["application/x-java-applet", "application/x-java-vm", "application/x-java-bean"],
                classID: "clsid:8AD9C840-044E-11D1-B3E9-00805F499D93",
                navigator: {
                    $: 1,
                    a: function() {
                        var a=!0;
                        try {
                            a = window.navigator.javaEnabled()
                        } catch (b) {}
                        return a
                    }(),
                    javaEnabled: function() {
                        return this.a
                    },
                    mimeObj: 0,
                    pluginObj: 0
                },
                OTF: null,
                getVerifyTagsDefault: function() {
                    return [1, this.applet.isDisabled.VerifyTagsDefault_1() ? 0: 1, 1]
                },
                getVersion: function(a, b, c) {
                    var d = this.$, e = this.applet, f = this.verify, g = this.navigator, l = null, n = null, h = null;
                    null === this.getVersionDone && (this.OTF = 0, g.mimeObj = d.hasMimeType(this.mimeType), g.mimeObj &&
                    (g.pluginObj = g.mimeObj.enabledPlugin), f && f.begin());
                    e.setVerifyTagsArray(c);
                    d.file.save(this, ".jar", b);
                    if (0 === this.getVersionDone)
                        e.should_Insert_Query_Any() && (b = e.insert_Query_Any(a), this.setPluginStatus(b[0], b[1], l, a));
                    else {
                        if ((!l || d.debug) && this.DTK.query().version)
                            l = this.DTK.version;
                        if ((!l || d.debug) && this.navMime.query().version)
                            l = this.navMime.version;
                        if ((!l || d.debug) && this.navPlugin.query().version)
                            l = this.navPlugin.version;
                        this.nonAppletDetectionOk(l) && (h = l);
                        if (!h || d.debug || e.VerifyTagsHas(2.2) ||
                        e.VerifyTagsHas(2.5))
                            b = this.lang.System.getProperty(), b[0] && (l = b[0], h = b[0], n = b[1]);
                        this.setPluginStatus(h, n, l, a);
                        e.should_Insert_Query_Any() && (b = e.insert_Query_Any(a), b[0] && (h = b[0], n = b[1]));
                        this.setPluginStatus(h, n, l, a)
                    }
                },
                nonAppletDetectionOk: function(a) {
                    var b = this.$, c = this.navigator, d = 1;
                    !a ||!c.javaEnabled()&&!this.lang.System.getPropertyHas(a) ||!b.isIE&&!c.mimeObj&&!this.lang.System.getPropertyHas(a) || b.isIE&&!b.ActiveXEnabled ? d = 0 : 20 <= b.OS || this.info && (0 > this.info.getPlugin2Status() && this.info.BrowserRequiresPlugin2()) &&
                    (d = 0);
                    return d
                },
                setPluginStatus: function(a, b, c, d) {
                    var e = this.$, f, g = 0, l = this.applet, c = c || this.version0;
                    0 < this.OTF && (a = a || this.lang.System.getProperty()[0]);
                    if (f = l.isRange(a))
                        l.setRange(f, d) == a && (g = f), a = 0;
                    3 > this.OTF && (this.installed = g ? 0 < g ? 0.7 : - 0.1 : a ? 1 : c?-0.2 : - 1);
                    2 == this.OTF && (this.NOTF&&!this.applet.getResult()[0]&&!this.lang.System.getProperty()[0]) && (this.installed = c?-0.2 : - 1);
                    c && (this.version0 = e.formatNum(e.getNum(c)));
                    a&&!g && (this.version = e.formatNum(e.getNum(a)));
                    b && e.isString(b) && (this.vendor =
                    b);
                    this.vendor || (this.vendor = "");
                    this.verify && this.verify.isEnabled() ? this.getVersionDone = 0 : 1 != this.getVersionDone && (this.getVersionDone = 2 > this.OTF ? 0 : this.applet.can_Insert_Query_Any() ? 0 : 1);
                    e.codebase.emptyGarbage()
                },
                DTK: {
                    $: 1,
                    hasRun: 0,
                    status: null,
                    VERSIONS: [],
                    version: "",
                    HTML: null,
                    Plugin2Status: null,
                    classID: ["clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA", "clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA"],
                    mimeType: ["application/java-deployment-toolkit", "application/npruntime-scriptable-plugin;DeploymentToolkit"],
                    isDisabled: function() {
                        var a = this.$;
                        return a.isIE && (6 > a.verIE ||!a.ActiveXEnabled) || a.isGecko && 0 >= a.compareNums(a.verGecko, a.formatNum("1.6")) || a.isSafari && 1 == a.OS && (!a.verSafari || 0 > a.compareNums(a.verSafari, "5,1,0,0")) || a.isChrome ? 1 : 0
                    },
                    query: function() {
                        var a = this.$, b, c, d = a.DOM.altHTML, e = {}, f, g = null, l = null, n = this.hasRun || this.isDisabled();
                        this.hasRun = 1;
                        if (n)
                            return this;
                        this.status = 0;
                        if (a.isIE)
                            for (b = 0; b < this.classID.length&&!(this.HTML = a.DOM.insert("object", ["classid", this.classID[b]], [], d), g = this.HTML.obj(),
                            a.getPROP(g, "jvms")); b++);
                        else if ((c = a.hasMimeType(this.mimeType)) && c.type)
                            this.HTML = a.DOM.insert("object", ["type", c.type], [], d), g = this.HTML.obj();
                        if (g)
                            try {
                                if (f = a.getPROP(g, "jvms"))
                                    if (l = f.getLength(), a.isNum(l)) {
                                        this.status = 0 < l ? 1 : - 1;
                                        for (b = 0; b < l; b++)
                                            if (c = a.getNum(f.get(l - 1 - b).version))
                                                this.VERSIONS.push(c), e["a" + a.formatNum(c)] = 1
                                    }
                        } catch (h) {}
                        c = 0;
                        for (b in e)
                            c++;
                        c && c !== this.VERSIONS.length && (this.VERSIONS = []);
                        this.VERSIONS.length && (this.version = a.formatNum(this.VERSIONS[0]));
                        return this
                    }
                },
                navMime: {
                    $: 1,
                    hasRun: 0,
                    mimetype: "",
                    version: "",
                    length: 0,
                    mimeObj: 0,
                    pluginObj: 0,
                    isDisabled: function() {
                        var a = this.$$.navigator;
                        return this.$.isIE ||!a.mimeObj ||!a.pluginObj ? 1 : 0
                    },
                    query: function() {
                        var a = this.$, b = this.hasRun || this.isDisabled();
                        this.hasRun = 1;
                        if (b)
                            return this;
                        var b = /^\s*application\/x-java-applet;jpi-version\s*=\s*(\d.*)$/i, c, d, e, f, g = {}, l = a.formatNum("0");
                        for (d = 0; d < navigator.mimeTypes.length; d++)
                            if (f = (e = navigator.mimeTypes[d]) ? e.enabledPlugin : 0, (c = e && b.test(e.type || "") ? a.formatNum(a.getNum(RegExp.$1)) : 0) &&
                            f && (f.description || f.name))
                                g["a" + c] || this.length++, g["a" + c] = e.type, 0 < a.compareNums(c, l) && (l = c);
                        if (c = g["a" + l])
                            this.pluginObj = (this.mimeObj = e = a.hasMimeType(c)) ? e.enabledPlugin : 0, this.mimetype = c, this.version = l;
                        return this
                    }
                },
                navPlugin: {
                    $: 1,
                    hasRun: 0,
                    version: "",
                    isDisabled: function() {
                        var a = this.$$.navigator;
                        return this.$.isIE ||!a.mimeObj ||!a.pluginObj ? 1 : 0
                    },
                    query: function() {
                        var a = this.$, b = this.$$.navigator, c, d, e = 0;
                        c = this.hasRun || this.isDisabled();
                        this.hasRun = 1;
                        if (c)
                            return this;
                        c = b.pluginObj.name || "";
                        b = b.pluginObj.description ||
                        "";
                        if (!e || a.debug)
                            if (d = /Java.*TM.*Platform[^\d]*(\d+)(?:[\.,_](\d*))?(?:\s*[Update]+\s*(\d*))?/i, (d.test(c) || d.test(b)) && 5 <= parseInt(RegExp.$1, 10))
                                e = "1," + RegExp.$1 + "," + (RegExp.$2 ? RegExp.$2 : "0") + "," + (RegExp.$3 ? RegExp.$3 : "0");
                        if (!e || a.debug) {
                            d = /Java[^\d]*Plug-in/i;
                            b = d.test(b) ? a.formatNum(a.getNum(b)) : 0;
                            c = d.test(c) ? a.formatNum(a.getNum(c)) : 0;
                            if (b && (0 > a.compareNums(b, a.formatNum("1,3")) || 0 <= a.compareNums(b, a.formatNum("2"))))
                                b = 0;
                            if (c && (0 > a.compareNums(c, a.formatNum("1,3")) || 0 <= a.compareNums(c, a.formatNum("2"))))
                                c =
                                0;
                            (c = b && c ? 0 < a.compareNums(b, c) ? b : c : b || c) && (e = c)
                        }
                        if (!e && (a.isSafari && 2 == a.OS) && (c = a.findNavPlugin("Java.*\\d.*Plug-in.*Cocoa", 0)))(b = a.getNum(c.description)) && (e = b);
                        e && (this.version = a.formatNum(e));
                        return this
                    }
                },
                lang: {
                    $: 1,
                    System: {
                        $: 1,
                        hasRun: 0,
                        result: [null, null],
                        isDisabled: function() {
                            var a = this.$;
                            return !window.java || a.isIE || 2 == a.OS && a.verOpera && 9.2 > a.verOpera && 9 <= a.verOpera ? 1 : 0
                        },
                        getPropertyHas: function(a) {
                            var b = this.$, c = this.getProperty()[0];
                            return a && c && 0 === b.compareNums(b.formatNum(a), b.formatNum(c)) ?
                            1 : 0
                        },
                        getProperty: function() {
                            var a = this.$, b, c = this.hasRun || this.isDisabled();
                            this.hasRun = 1;
                            if (!c) {
                                a.java_qqq990 = 0;
                                try {
                                    b = document.createElement("script"), b.type = "text/javascript", b.appendChild(document.createTextNode("(function(){var e;try{" + a.name + ".java_qqq990=[window.java.lang.System.getProperty('java.version')+'',window.java.lang.System.getProperty('java.vendor')+'']}catch(e){}})();")), a.head.insertBefore(b, a.head.firstChild), a.head.removeChild(b)
                                } catch (d) {}
                                a.isArray(a.java_qqq990) && (this.result =
                                [].concat(a.java_qqq990))
                            }
                            return this.result
                        }
                    }
                },
                applet: {
                    $: 1,
                    codebase: {
                        $: 1,
                        isMin: function(a) {
                            return this.$.codebase.isMin(this, a)
                        },
                        search: function() {
                            return this.$.codebase.search(this)
                        },
                        ParamTags: '<param name="code" value="A19999.class" /><param name="codebase_lookup" value="false" />',
                        DIGITMAX: [[16, 64], [6, 0, 512], 0, [1, 5, 2, 256], 0, [1, 4, 1, 1], [1, 4, 0, 64], [1, 3, 2, 32]],
                        DIGITMIN: [1, 0, 0, 0],
                        Upper: "999 10 5,0,20 1,5,0,20 1,4,1,20 1,4,1,2 1,4,1 1,4".split(" "),
                        Lower: "10 5,0,20 1,5,0,20 1,4,1,20 1,4,1,2 1,4,1 1,4 0".split(" "),
                        convert: [function(a, b) {
                            return b ? [1 < parseInt(a[0], 10) ? "99": parseInt(a[1], 10) + 3 + "", a[3], "0", "0"] : ["1", parseInt(a[0], 10) - 3 + "", "0", a[1]]
                        }, function(a, b) {
                            return b ? [a[1], a[2], a[3] + "0", "0"] : ["1", a[0], a[1], a[2].substring(0, a[2].length - 1 || 1)]
                        }, 0, function(a, b) {
                            return b ? [a[0], a[1], a[2], a[3] + "0"] : [a[0], a[1], a[2], a[3].substring(0, a[3].length - 1 || 1)]
                        }, 0, 1, function(a, b) {
                            return b ? [a[0], a[1], a[2], a[3] + "0"] : [a[0], a[1], a[2], a[3].substring(0, a[3].length - 1 || 1)]
                        }, 1]
                    },
                    results: [[null, null], [null, null], [null, null], [null, null]],
                    getResult: function() {
                        var a = this.results, b, c = [];
                        for (b = a.length - 1; 0 <= b&&!(c = a[b], c[0]); b--);
                        return c = [].concat(c)
                    },
                    HTML: [0, 0, 0, 0],
                    active: [0, 0, 0, 0],
                    DummyObjTagHTML: 0,
                    DummySpanTagHTML: 0,
                    allowed: [1, 1, 1, 1],
                    VerifyTagsHas: function(a) {
                        var b;
                        for (b = 0; b < this.allowed.length; b++)
                            if (this.allowed[b] === a)
                                return 1;
                        return 0
                    },
                    saveAsVerifyTagsArray: function(a) {
                        var b = this.$, c;
                        if (b.isArray(a)) {
                            for (c = 1; c < this.allowed.length; c++)
                                a.length > c - 1 && b.isNum(a[c - 1]) && (0 > a[c - 1] && (a[c - 1] = 0), 3 < a[c - 1] && (a[c - 1] = 3), this.allowed[c] = a[c -
                                1]);
                            this.allowed[0] = this.allowed[3]
                        }
                    },
                    setVerifyTagsArray: function(a) {
                        var b = this.$, c = this.$$;
                        null === c.getVersionDone && this.saveAsVerifyTagsArray(c.getVerifyTagsDefault());
                        b.debug || c.verify && c.verify.isEnabled() ? this.saveAsVerifyTagsArray([3, 3, 3]) : a && this.saveAsVerifyTagsArray(a)
                    },
                    isDisabled: {
                        $: 1,
                        single: function(a) {
                            var b = this.$;
                            if (0 == a)
                                return b.codebase.isDisabled();
                            if (3 == a&&!b.isIE || this.all())
                                return 1;
                            if (1 == a || 3 == a)
                                return this.ObjectTag();
                            if (2 == a)
                                return this.AppletTag()
                        },
                        aA_: null,
                        all: function() {
                            var a =
                            this.$, b = this.$$, c = b.navigator, d = 0;
                            null === this.aA_ && (20 <= a.OS ? d = 0 : a.verOpera && 11 > a.verOpera&&!c.javaEnabled()&&!b.lang.System.getProperty()[0] ? d = 1 : a.verGecko && 0 > a.compareNums(a.verGecko, a.formatNum("2"))&&!c.mimeObj&&!b.lang.System.getProperty()[0] ? d = 1 : this.AppletTag() && this.ObjectTag() && (d = 1), this.aA_ = d);
                            return this.aA_
                        },
                        AppletTag: function() {
                            var a = this.$$.navigator;
                            return this.$.isIE?!a.javaEnabled() : 0
                        },
                        ObjectTag: function() {
                            var a = this.$;
                            return a.isIE?!a.ActiveXEnabled : 0
                        },
                        VerifyTagsDefault_1: function() {
                            var a =
                            this.$;
                            return 20 <= a.OS ? 1 : a.isIE && (9 > a.verIE ||!a.ActiveXEnabled) || a.verGecko && 0 > a.compareNums(a.verGecko, a.formatNum("2")) || a.isSafari && (!a.verSafari || 0 > a.compareNums(a.verSafari, a.formatNum("4"))) || a.verOpera && 10 > a.verOpera ? 0 : 1
                        },
                        z: 0
                    },
                    can_Insert_Query: function(a) {
                        var b = this.results[0][0], c = this.getResult()[0];
                        return this.HTML[a] || 0 == a && null !== b&&!this.isRange(b) || 0 == a && c&&!this.isRange(c) ? 0 : !this.isDisabled.single(a)
                    },
                    can_Insert_Query_Any: function() {
                        var a;
                        for (a = 0; a < this.results.length; a++)
                            if (this.can_Insert_Query(a))
                                return 1;
                        return 0
                    },
                    should_Insert_Query: function(a) {
                        var b = this.allowed, c = this.$$, d = this.getResult()[0], d = d && (0 < a ||!this.isRange(d));
                        return !this.can_Insert_Query(a) || 0 === b[a] ? 0 : 3 == b[a] || (2.8 == b[a]&&!d || 2.5 == b[a]&&!c.lang.System.getProperty()[0] || 2.2 == b[a]&&!c.lang.System.getProperty()[0]&&!d) ||!c.nonAppletDetectionOk(c.version0) && (2 == b[a] || 1 == b[a]&&!d) ? 1 : 0
                    },
                    should_Insert_Query_Any: function() {
                        var a;
                        for (a = 0; a < this.allowed.length; a++)
                            if (this.should_Insert_Query(a))
                                return 1;
                        return 0
                    },
                    query: function(a) {
                        var b = this.$,
                        c = this.$$, d = null, e = null, f = this.results, g, l = this.HTML[a];
                        if (l && l.obj()&&!(f[a][0] || b.debug && 3 > c.OTF))
                            if (c = l.obj(!0), b.isIE && (g = b.getPROP(c, "readyState")), !b.isIE || 4 == g) {
                                try {
                                    d = b.getNum(c.getVersion() + ""), e = c.getVendor() + "", c.statusbar(" ")
                                } catch (n) {}
                                d && b.isStrNum(d) && (f[a] = [d, e])
                        }
                    },
                    isRange: function(a) {
                        return /^[<>]/.test(a || "") ? ">" == a.charAt(0) ? 1 : - 1 : 0
                    },
                    setRange: function(a, b) {
                        return (a ? 0 < a ? ">" : "<" : "") + (this.$.isString(b) ? b : "")
                    },
                    insert_Query_Any: function(a) {
                        var b = this.$, c = this.$$, d = this.results, e = this.HTML,
                        f = b.DOM.altHTML, g, l = b.file.getValid(c);
                        this.should_Insert_Query(0) && (2 > c.OTF && (c.OTF = 2), d[0] = [0, 0], (g = a ? this.codebase.isMin(a) : this.codebase.search()) && (d[0][0] = a ? this.setRange(g, a) : g));
                        if (!l)
                            return this.getResult();
                        a = l.path;
                        l = ["archive", l.name + l.ext, "code", "A.class"];
                        g = ["mayscript", "true"];
                        var n = ["scriptable", "true", "codebase_lookup", "false"].concat(g), h = c.navigator, h=!b.isIE && h.mimeObj && h.mimeObj.type ? h.mimeObj.type : c.mimeType[0];
                        this.should_Insert_Query(1) && (2 > c.OTF && (c.OTF = 2), e[1] = b.DOM.insert("object",
                        ["type", h], ["codebase", a].concat(l).concat(n), f, c), d[1] = [0, 0], this.query(1));
                        this.should_Insert_Query(2) && (2 > c.OTF && (c.OTF = 2), e[2] = b.isIE ? b.DOM.insert("applet", ["alt", f].concat(g).concat(l), ["codebase", a].concat(n), f, c) : b.DOM.insert("applet", ["codebase", a, "alt", f].concat(g).concat(l), [].concat(n), f, c), d[2] = [0, 0], this.query(2));
                        this.should_Insert_Query(3) && (2 > c.OTF && (c.OTF = 2), e[3] = b.isIE ? b.DOM.insert("object", ["classid", c.classID], ["codebase", a].concat(l).concat(n), f, c) : b.DOM.insert(), d[3] = [0, 0], this.query(3));
                        !this.DummyObjTagHTML&&!this.isDisabled.ObjectTag() && (this.DummyObjTagHTML = b.DOM.insert("object", [], [], f));
                        this.DummySpanTagHTML || (this.DummySpanTagHTML = b.DOM.insert("", [], [], f));
                        return this.getResult()
                    }
                },
                zz: 0
            },
            flash: {
                mimeType: "application/x-shockwave-flash",
                progID: "ShockwaveFlash.ShockwaveFlash",
                classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
                getVersion: function() {
                    var a = function(a) {
                        return !a ? null : (a = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a)) ? a[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") :
                        null
                    }, b = this.$, c, d = null, e = null, f = null;
                    if (b.isIE) {
                        for (c = 15; 2 < c; c--)
                            if (e = b.getAXO(this.progID + "." + c)) {
                                f = c.toString();
                                break
                            }
                        e || (e = b.getAXO(this.progID));
                        if ("6" == f)
                            try {
                                e.AllowScriptAccess = "always"
                        } catch (g) {
                            return "6,0,21,0"
                        }
                        try {
                            d = a(e.GetVariable("$version"))
                        } catch (l) {}
                        !d && f && (d = f)
                    } else {
                        if (e = b.hasMimeType(this.mimeType)) {
                            c = b.DOM.insert("object", ["type", this.mimeType], [], "", this).obj();
                            try {
                                d = b.getNum(c.GetVariable("$version"))
                            } catch (n) {}
                        }
                        d || ((c = e ? e.enabledPlugin : null) && c.description && (d = a(c.description)),
                        d && (d = b.getPluginFileVersion(c, d)))
                    }
                    this.installed = d ? 1 : - 1;
                    this.version = b.formatNum(d);
                    return !0
                }
            },
            shockwave: {
                mimeType: "application/x-director",
                progID: "SWCtl.SWCtl",
                classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
                getVersion: function() {
                    var a = null, b = null, c = this.$;
                    if (c.isIE) {
                        try {
                            b = c.getAXO(this.progID).ShockwaveVersion("")
                        } catch (d) {}
                        c.isString(b) && 0 < b.length ? a = c.getNum(b) : c.getAXO(this.progID + ".8") ? a = "8" : c.getAXO(this.progID + ".7") ? a = "7" : c.getAXO(this.progID + ".1") && (a = "6")
                    } else (b = c.findNavPlugin("Shockwave\\s*for\\s*Director")
                        ) &&
                        (b.description && c.hasMimeType(this.mimeType)) && (a = c.getNum(b.description)), a && (a = c.getPluginFileVersion(b, a));
                    this.installed = a ? 1 : - 1;
                    this.version = c.formatNum(a)
                }
            },
            windowsmediaplayer: {
                mimeType: ["application/x-mplayer2", "application/asx", "application/x-ms-wmp"],
                navPluginObj: null,
                progID: "wmplayer.ocx",
                classID: "clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",
                INSTALLED: {
                    dfault: null,
                    inputMime: {}
                },
                getVersion: function(a, b) {
                    var c = this.$, d, e = null, f = null, g = this.mimeType;
                    this.installed =- 1;
                    c.isString(b) ? (b = b.replace(/\s/g,
                    "")) && (g = b) : b = null;
                    if (b) {
                        if (e = this.INSTALLED.inputMime[b], c.isDefined(e)) {
                            this.installed = e;
                            return 
                        }
                    } else if (e = this.INSTALLED.dfault, null !== e) {
                        this.installed = e;
                        return 
                    }
                    if (c.isIE)
                        e = c.getAXO(this.progID), f = c.getPROP(e, "versionInfo") || f, this.installed = e && f ? 1 : e ? 0 : - 1;
                    else {
                        if (20 > c.OS && 3 <= c.OS) {
                            this.installed =- 1;
                            return 
                        }
                        null === this.getVersionDone ? (this.getVersionDone = 0, e = c.getMimeEnabledPlugin(this.mimeType, "Windows\\s*Media\\s*Player.*Plug-?in|Flip4Mac.*Windows\\s*Media.*Plug-?in", "Totem|VLC|RealPlayer"), b ||
                        (d = e), !e && c.hasMimeType(this.mimeType) && (e = c.findNavPlugin("Windows\\s*Media\\s*Player.*Plug-?in|Flip4Mac.*Windows\\s*Media.*Plug-?in", 0, "Totem|VLC|RealPlayer")), e && (this.navPluginObj = e, e = (e = (e = c.isGecko && 0 > c.compareNums(c.verGecko, c.formatNum("1.8"))) || c.isOpera && 10 > c.verOpera) || c.isChrome, !e && c.getMimeEnabledPlugin(this.mimeType[2], "Windows\\s*Media\\s*Player.*Firefox.*Plug-?in", "Totem|VLC|RealPlayer") && (f = c.getPROP(c.DOM.insert("object", ["type", this.mimeType[2], "data", ""], ["src", ""], "", this).obj(),
                        "versionInfo") || f))) : f = this.version;
                        c.isDefined(d) || (d = c.getMimeEnabledPlugin(g, "Windows\\s*Media\\s*Player.*Plug-?in|Flip4Mac.*Windows\\s*Media.*Plug-?in", "Totem|VLC|RealPlayer"));
                        this.installed = d && f ? 1 : d ? 0 : this.navPluginObj?-0.2 : - 1
                    }
                    this.version || (this.version = c.formatNum(f));
                    b ? this.INSTALLED.inputMime[b] = this.installed : this.INSTALLED.dfault = this.installed
                }
            },
            silverlight: {
                mimeType: "application/x-silverlight",
                progID: "AgControl.AgControl",
                digits: [20, 20, 9, 12, 31],
                getVersion: function() {
                    var a = this.$, b = null,
                    c = null, c = null, d=!0, e = [1, 0, 1, 1, 1], f = [1, 0, 1, 1, 1], g = function(a) {
                        return (10 > a ? "0" : "") + a.toString()
                    }, l = function(a, b, c, d, e, f) {
                        try {
                            return a.IsVersionSupported(b + "." + c + "." + d + g(e) + g(f) + ".0")
                        } catch (l) {}
                        return !1
                    };
                    if (a.isIE) {
                        var c = a.getAXO(this.progID), n;
                        if (c && l(c, e[0], e[1], e[2], e[3], e[4])) {
                            for (e = 0; e < this.digits.length; e++) {
                                n = f[e];
                                for (n += 0 == e ? 0 : 1; n <= this.digits[e]; n++)
                                    if (l(c, 0 == e ? n : f[0], 1 == e ? n : f[1], 2 == e ? n : f[2], 3 == e ? n : f[3], 4 == e ? n : f[4]))
                                        d=!0, f[e] = n;
                                    else 
                                        break;
                                if (!d)
                                    break
                            }
                            d && (b = f[0] + "." + f[1] + "." + f[2] + g(f[3]) + g(f[4]) +
                            ".0")
                        }
                    } else 
                        a.hasMimeType(this.mimeType) && (f = a.isGecko && 0 >= a.compareNums(a.verGecko, a.formatNum("1.6")), a.isGecko && f && (d=!1), (c = a.findNavPlugin("Silverlight.*Plug-?in", 0)) && c.description && (b = a.formatNum(c.description)), b && (f = b.split(a.splitNumRegx), 30226 <= parseInt(f[2], 10) && 2 > parseInt(f[0], 10) && (f[0] = "2"), b = f.join(",")));
                    this.installed = c && d && b ? 1 : c && d ? 0 : c?-0.2 : - 1;
                    this.version = a.formatNum(b)
                }
            },
            vlc: {
                mimeType: "application/x-vlc-plugin",
                progID: "VideoLAN.VLCPlugin",
                classID: "clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921",
                compareNums: function(a, b) {
                    var c = this.$, d = a.split(c.splitNumRegx), c = b.split(c.splitNumRegx), e, f, g, l, n;
                    for (e = 0; e < Math.min(d.length, c.length); e++) {
                        /([\d]+)([a-z]?)/.test(d[e]);
                        f = parseInt(RegExp.$1, 10);
                        l = 2 == e && 0 < RegExp.$2.length ? RegExp.$2.charCodeAt(0) : - 1;
                        /([\d]+)([a-z]?)/.test(c[e]);
                        g = parseInt(RegExp.$1, 10);
                        n = 2 == e && 0 < RegExp.$2.length ? RegExp.$2.charCodeAt(0) : - 1;
                        if (f != g)
                            return f > g ? 1 : - 1;
                        if (2 == e && l != n)
                            return l > n ? 1 : - 1
                    }
                    return 0
                },
                getVersion: function() {
                    var a = this.$, b, c = null;
                    a.isIE ? ((b = a.getAXO(this.progID)) &&
                    (c = a.getNum(a.getPROP(b, "VersionInfo"), "[\\d][\\d\\.]*[a-z]*")), this.installed = c ? 1 : b ? 0 : - 1) : (a.hasMimeType(this.mimeType) && (b = a.findNavPlugin("VLC.*Plug-?in", 0, "Totem")) && b.description && (c = a.getNum(b.description, "[\\d][\\d\\.]*[a-z]*")), this.installed = c ? 1 : - 1);
                    this.version = a.formatNum(c)
                }
            },
            adobereader: {
                mimeType: "application/pdf",
                navPluginObj: null,
                progID: ["AcroPDF.PDF", "PDF.PdfCtrl"],
                classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
                INSTALLED: {},
                pluginHasMimeType: function(a, b, c) {
                    for (var d in a)
                        if (a[d] &&
                        a[d].type && a[d].type == b)
                            return 1;
                    return this.$.getMimeEnabledPlugin(b, c) ? 1 : 0
                },
                getVersion: function(a, b) {
                    var c = this.$, d, e, f, g = null, l = null, n = this.mimeType;
                    c.isString(b) ? (b = b.replace(/\s/g, "")) && (n = b) : b = null;
                    if (c.isDefined(this.INSTALLED[n]))
                        this.installed = this.INSTALLED[n];
                    else {
                        if (c.isIE) {
                            g = c.getAXO(this.progID[0]) || c.getAXO(this.progID[1]);
                            f = /=\s*([\d\.]+)/g;
                            try {
                                d = (g || c.DOM.insert("object", ["classid", this.classID], ["src", ""], "", this).obj()).GetVersions();
                                for (e = 0; 5 > e; e++)
                                    if (f.test(d) && (!l || RegExp.$1 >
                                    l))
                                        l = RegExp.$1
                            } catch (h) {}
                            this.installed = l ? 1 : g ? 0 : - 1
                        } else 
                            0 !== this.getVersionDone ? (this.getVersionDone = 0, g = c.getMimeEnabledPlugin(this.mimeType, "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in"), b || (f = g), !g && c.hasMimeType(this.mimeType) && (g = c.findNavPlugin("Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in", 0)), g && (this.navPluginObj = g, l = c.getNum(g.description) || c.getNum(g.name), l = c.getPluginFileVersion(g, l), !l && 1 == c.OS && (this.pluginHasMimeType(g, "application/vnd.adobe.pdfxml",
                            "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in") ? l = "9" : this.pluginHasMimeType(g, "application/vnd.adobe.x-mars", "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in") && (l = "8")))) : l = this.version, c.isDefined(f) || (f = c.getMimeEnabledPlugin(n, "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in")), this.installed = f && l ? 1 : f ? 0 : this.navPluginObj?-0.2 : - 1;
                        this.version || (this.version = c.formatNum(l));
                        this.INSTALLED[n] = this.installed
                    }
                }
            },
            realplayer: {
                mimeType: ["audio/x-pn-realaudio-plugin"],
                progID: ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"],
                classID: "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA",
                INSTALLED: {},
                q1: [[11, 0, 0], [999], [663], [663], [663], [660], [468], [468], [468], [468], [468], [468], [431], [431], [431], [372], [180], [180], [172], [172], [167], [114], [0]],
                q3: [[6, 0], [12, 99], [12, 69], [12, 69], [12, 69], [12, 69], [12, 69], [12, 69], [12, 69], [12, 69], [12, 69], [12, 69], [12, 46],
                [12, 46], [12, 46], [11, 3006], [11, 2806], [11, 2806], [11, 2804], [11, 2804], [11, 2799], [11, 2749], [11, 2700]],
                compare: function(a, b) {
                    var c, d = a.length, e = b.length, f, g;
                    for (c = 0; c < Math.max(d, e); c++) {
                        f = c < d ? a[c] : 0;
                        g = c < e ? b[c] : 0;
                        if (f > g)
                            return 1;
                        if (f < g)
                            return - 1
                    }
                    return 0
                },
                convertNum: function(a, b, c) {
                    var d = this.$, e;
                    if (!a ||!(e = d.formatNum(a)))
                        return null;
                    e = e.split(d.splitNumRegx);
                    for (a = 0; a < e.length; a++)
                        e[a] = parseInt(e[a], 10);
                    if (0 != this.compare(e.slice(0, Math.min(b[0].length, e.length)), b[0]))
                        return null;
                    e = e.length > b[0].length ?
                    e.slice(b[0].length) : [];
                    if (0 < this.compare(e, b[1]) || 0 > this.compare(e, b[b.length - 1]))
                        return null;
                    for (a = b.length - 1; 1 <= a && 1 != a&&!(0 == this.compare(b[a], e) && 0 == this.compare(b[a], b[a - 1]))&&!(0 <= this.compare(e, b[a]) && 0 > this.compare(e, b[a - 1])); a--);
                    return c[0].join(".") + "." + c[a].join(".")
                },
                getVersion: function(a, b) {
                    var c = null, d = 0, e = 0, f = this.$, g, l = this.mimeType[0];
                    f.isString(b) ? (b = b.replace(/\s/g, "")) && (l = b) : b = null;
                    if (f.isDefined(this.INSTALLED[l]))
                        this.installed = this.INSTALLED[l];
                    else {
                        if (f.isIE) {
                            for (d = 0; d <
                            this.progID.length; d++)
                                if (g = f.getAXO(this.progID[d]))
                                    try {
                                        c = f.getNum(g.GetVersionInfo());
                                        break
                            } catch (n) {}
                            this.installed = c ? 1 : - 1
                        } else {
                            g = f.hasMimeType(this.mimeType);
                            var h = f.findNavPlugin("RealPlayer.*Plug-?in", 0);
                            g && h && (d = 1, e = b ? f.getMimeEnabledPlugin(b, "RealPlayer.*Plug-?in") ? 1 : 0 : 1);
                            if (0 !== this.getVersionDone) {
                                if (this.getVersionDone = 0, g) {
                                    var h = 1, j = null, k = null;
                                    (g = f.hasMimeType("application/vnd.rn-realplayer-javascript")) && (j = f.formatNum(f.getNum(g.enabledPlugin.description)));
                                    1 == f.OS && j && (g = j.split(f.splitNumRegx),
                                    k=!0, 0 > this.compare(g, [6, 0, 12, 200]) ? k=!1 : 0 >= this.compare(g, [6, 0, 12, 1739]) && 0 <= this.compare(g, [6, 0, 12, 857]) && (k=!1));
                                    !1 === k && (h = 0);
                                    2 >= f.OS ? (f.isGecko && 0 > f.compareNums(f.verGecko, f.formatNum("1,8")) && (h = 0), f.isChrome && (h = 0), f.isOpera && 10 > f.verOpera && (h = 0)) : h = 0;
                                    if (h) {
                                        g = f.DOM.insert("object", ["type", this.mimeType[0]], "src  autostart false imagestatus false controls stopbutton".split(" "), "", this).obj();
                                        try {
                                            c = f.getNum(g.GetVersionInfo())
                                        } catch (m) {}
                                        f.DOM.setStyle(g, ["display", "none"])
                                    }
                                    !c && (j&&!1 === k) &&
                                    (c = (g = this.convertNum(j, this.q3, this.q1)) ? g : j)
                                }
                            } else 
                                c = this.version;
                            this.installed = d && e && c ? 1 : d && e ? 0 : d?-0.2 : - 1
                        }
                        this.version || (this.version = f.formatNum(c));
                        this.INSTALLED[l] = this.installed
                    }
                }
            },
            zz: 0
        }
    };
    y.initScript();
    var T = (new Date).getTime(), z = document, v = navigator, B = screen, t = window, r = t.encodeURIComponent, R = t.decodeURIComponent, A = "b.siftscience.com", A = "https:" == z.location.protocol ? "https://" + A: "http://" + A, x, U = 0, J = "__ssid", E, F, D, I, C, Q = 100, S = 100, K = function() {
        for (var a = 3, b = document.createElement("b"), c =
        b.all || []; b.innerHTML = "<\!--[if gt IE " + ++a + "]><i><![endif]--\>", c[0];);
        return 4 < a ? a : document.documentMode
    }(), G = {
        _trackPageview: function() {
            P()
        },
        _setAccount: function(a) {
            I = a
        },
        _setUserId: function(a) {
            D = a
        },
        _setPartnerUserId: function(a) {
            F = a
        },
        _setSessionId: function(a) {
            E = a
        },
        _setTrackerUrl: function(a) {
            A = a
        },
        _setCookieDomain: function(a) {
            C = a
        },
        _setFlash: function(a) {
            x = a
        }
    };
    for (i = 0; i < _sift.length; i++)
        L(_sift[i]);
    _sift = {
        push: L
    }
}();
//1409274787

