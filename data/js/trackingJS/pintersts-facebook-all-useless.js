/*1416872149,,JIT Construction: v1507751,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
    window.FB || (function(window) {
        var self = window, document = window.document;
        var undefined = void 0;
        var setTimeout = window.setTimeout, setInterval = window.setInterval, clearTimeout = window.clearTimeout, clearInterval = window.clearInterval;
        var __DEV__ = 0;
        function emptyFunction() {};
        var __w, __t;
        __t = function(a) {
            return a[0];
        };
        __w = function(a) {
            return a;
        };
        var require, __d;
        (function(a) {
            var b = {}, c = {}, d = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
            require = function(e, f) {
                if (c.hasOwnProperty(e))
                    return c[e];
                if (!b.hasOwnProperty(e)) {
                    if (f)
                        return null;
                    throw new Error('Module ' + e + ' has not been defined');
                }
                var g = b[e], h = g.deps, i = g.factory.length, j, k = [];
                for (var l = 0; l < i; l++) {
                    switch (h[l]) {
                    case 'module':
                        j = g;
                        break;
                    case 'exports':
                        j = g.exports;
                        break;
                    case 'global':
                        j = a;
                        break;
                    case 'require':
                        j = require;
                        break;
                    case 'requireDynamic':
                        j = require;
                        break;
                    case 'requireLazy':
                        j = null;
                        break;
                    default:
                        j = require.call(null, h[l]);
                    }
                    k.push(j);
                }
                g.factory.apply(a, k);
                c[e] = g.exports;
                return g.exports;
            };
            __d = function(e, f, g, h) {
                if (typeof g == 'function') {
                    b[e] = {
                        factory: g,
                        deps: d.concat(f),
                        exports: {}
                    };
                    if (h === 3)
                        require.call(null, e);
                } else 
                    c[e] = g;
            };
        })(this);
        __d("ES5ArrayPrototype", [], function(a, b, c, d, e, f) {
            var g = {};
            g.map = function(h, i) {
                if (typeof h != 'function')
                    throw new TypeError();
                var j, k = this.length, l = new Array(k);
                for (j = 0; j < k; ++j)
                    if (j in this)
                        l[j] = h.call(i, this[j], j, this);
                return l;
            };
            g.forEach = function(h, i) {
                g.map.call(this, h, i);
            };
            g.filter = function(h, i) {
                if (typeof h != 'function')
                    throw new TypeError();
                var j, k, l = this.length, m = [];
                for (j = 0; j < l; ++j)
                    if (j in this) {
                        k = this[j];
                        if (h.call(i, k, j, this))
                            m.push(k);
                    }
                return m;
            };
            g.every = function(h, i) {
                if (typeof h != 'function')
                    throw new TypeError();
                var j = new Object(this), k = j.length;
                for (var l = 0; l < k; l++)
                    if (l in j)
                        if (!h.call(i, j[l], l, j))
                            return false;
                return true;
            };
            g.some = function(h, i) {
                if (typeof h != 'function')
                    throw new TypeError();
                var j = new Object(this), k = j.length;
                for (var l = 0; l < k; l++)
                    if (l in j)
                        if (h.call(i, j[l], l, j))
                            return true;
                return false;
            };
            g.indexOf = function(h, i) {
                var j = this.length;
                i|=0;
                if (i < 0)
                    i += j;
                for (; i < j; i++)
                    if (i in this && this[i] === h)
                        return i;
                return - 1;
            };
            e.exports = g;
        }, null);
        __d("ES5FunctionPrototype", [], function(a, b, c, d, e, f) {
            var g = {};
            g.bind = function(h) {
                if (typeof this != 'function')
                    throw new TypeError('Bind must be called on a function');
                var i = this, j = Array.prototype.slice.call(arguments, 1);
                function k() {
                    return i.apply(h, j.concat(Array.prototype.slice.call(arguments)));
                }
                k.displayName = 'bound:' + (i.displayName || i.name || '(?)');
                k.toString = function l() {
                    return 'bound: ' + i;
                };
                return k;
            };
            e.exports = g;
        }, null);
        __d("ES5StringPrototype", [], function(a, b, c, d, e, f) {
            var g = {};
            g.trim = function() {
                if (this == null)
                    throw new TypeError('String.prototype.trim called on null or undefined');
                return String.prototype.replace.call(this, /^\s+|\s+$/g, '');
            };
            g.startsWith = function(h) {
                var i = String(this);
                if (this == null)
                    throw new TypeError('String.prototype.startsWith called on null or undefined');
                var j = arguments.length > 1 ? Number(arguments[1]): 0;
                if (isNaN(j))
                    j = 0;
                var k = Math.min(Math.max(j, 0), i.length);
                return i.indexOf(String(h), j) == k;
            };
            g.endsWith = function(h) {
                var i = String(this);
                if (this == null)
                    throw new TypeError('String.prototype.endsWith called on null or undefined');
                var j = i.length, k = String(h), l = arguments.length > 1 ? Number(arguments[1]): j;
                if (isNaN(l))
                    l = 0;
                var m = Math.min(Math.max(l, 0), j), n = m - k.length;
                if (n < 0)
                    return false;
                return i.lastIndexOf(k, n) == n;
            };
            g.contains = function(h) {
                if (this == null)
                    throw new TypeError('String.prototype.contains called on null or undefined');
                var i = String(this), j = arguments.length > 1 ? Number(arguments[1]): 0;
                if (isNaN(j))
                    j = 0;
                return i.indexOf(String(h), j)!=-1;
            };
            g.repeat = function(h) {
                if (this == null)
                    throw new TypeError('String.prototype.repeat called on null or undefined');
                var i = String(this), j = h ? Number(h): 0;
                if (isNaN(j))
                    j = 0;
                if (j < 0 || j === Infinity)
                    throw RangeError();
                if (j === 1)
                    return i;
                if (j === 0)
                    return '';
                var k = '';
                while (j) {
                    if (j & 1)
                        k += i;
                    if ((j>>=1))
                        i += i;
                }
                return k;
            };
            e.exports = g;
        }, null);
        __d("ES5Array", [], function(a, b, c, d, e, f) {
            var g = {};
            g.isArray = function(h) {
                return Object.prototype.toString.call(h) == '[object Array]';
            };
            e.exports = g;
        }, null);
        __d("ie8DontEnum", [], function(a, b, c, d, e, f) {
            var g = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'prototypeIsEnumerable', 'constructor'], h = ({}).hasOwnProperty, i = function() {};
            if (({
                toString: true
            }).propertyIsEnumerable('toString'))
                i = function(j, k) {
                    for (var l = 0; l < g.length; l++) {
                        var m = g[l];
                        if (h.call(j, m))
                            k(m);
                    }
                };
            e.exports = i;
        }, null);
        __d("ES5Object", ["ie8DontEnum"], function(a, b, c, d, e, f, g) {
            var h = ({}).hasOwnProperty, i = {};
            function j() {}
            i.create = function(k) {
                var l = typeof k;
                if (l != 'object' && l != 'function')
                    throw new TypeError('Object prototype may only be a Object or null');
                j.prototype = k;
                return new j();
            };
            i.keys = function(k) {
                var l = typeof k;
                if (l != 'object' && l != 'function' || k === null)
                    throw new TypeError('Object.keys called on non-object');
                var m = [];
                for (var n in k)
                    if (h.call(k, n))
                        m.push(n);
                g(k, function(o) {
                    return m.push(o);
                });
                return m;
            };
            e.exports = i;
        }, null);
        __d("ES5Date", [], function(a, b, c, d, e, f) {
            var g = {};
            g.now = function() {
                return new Date().getTime();
            };
            e.exports = g;
        }, null);
        /**
         * @providesModule JSON3
         * @preserve-header
         *
         *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
         */
        __d("JSON3", [], function(a, b, c, d, e, f) {
            (function() {
                var g = {}.toString, h, i, j, k = e.exports = {}, l = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba = new Date( - 3509827334573292), ca, da, ea;
                try {
                    ba = ba.getUTCFullYear()==-109252 && ba.getUTCMonth() === 0 && ba.getUTCDate() == 1 && ba.getUTCHours() == 10 && ba.getUTCMinutes() == 37 && ba.getUTCSeconds() == 6 && ba.getUTCMilliseconds() == 708;
                } catch (fa) {}
                if (!ba) {
                    ca = Math.floor;
                    da = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                    ea = function(ga, ha) {
                        return da[ha] + 365 * (ga - 1970) + ca((ga - 1969 + (ha =+ (ha > 1))) / 4) - ca((ga - 1901 + ha) / 100) + ca((ga - 1601 + ha) / 400);
                    };
                }
                if (typeof JSON == "object" && JSON) {
                    k.stringify = JSON.stringify;
                    k.parse = JSON.parse;
                }
                if ((m = typeof k.stringify == "function"&&!ea)) {
                    (ba = function() {
                        return 1;
                    }).toJSON = ba;
                    try {
                        m = k.stringify(0) === "0" && k.stringify(new Number()) === "0" && k.stringify(new String()) == '""' && k.stringify(g) === j && k.stringify(j) === j && k.stringify() === j && k.stringify(ba) === "1" && k.stringify([ba]) == "[1]" && k.stringify([j]) == "[null]" && k.stringify(null) == "null" && k.stringify([j, g, null]) == "[null,null,null]" && k.stringify({
                            result: [ba, true, false, null, "\0\b\n\f\r\t"]
                        }) == l && k.stringify(null, ba) === "1" && k.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && k.stringify(new Date( - 8.64e+15)) == '"-271821-04-20T00:00:00.000Z"' && k.stringify(new Date(8.64e+15)) == '"+275760-09-13T00:00:00.000Z"' && k.stringify(new Date( - 62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && k.stringify(new Date( - 1)) == '"1969-12-31T23:59:59.999Z"';
                    } catch (fa) {
                        m = false;
                    }
                }
                if (typeof k.parse == "function")
                    try {
                        if (k.parse("0") === 0&&!k.parse(false)) {
                            ba = k.parse(l);
                            if ((r = ba.A.length == 5 && ba.A[0] == 1)) {
                                try {
                                    r=!k.parse('"\t"');
                                } catch (fa) {}
                                if (r)
                                    try {
                                        r = k.parse("01") != 1;
                                    } catch (fa) {}
                            }
                        }
                } catch (fa) {
                    r = false;
                }
                ba = l = null;
                if (!m ||!r) {
                    if (!(h = {}.hasOwnProperty))
                        h = function(ga) {
                            var ha = {}, ia;
                            if ((ha.__proto__ = null, ha.__proto__ = {
                                toString: 1
                            }, ha).toString != g) {
                                h = function(ja) {
                                    var ka = this.__proto__, la = ja in (this.__proto__ = null, this);
                                    this.__proto__ = ka;
                                    return la;
                                };
                            } else {
                                ia = ha.constructor;
                                h = function(ja) {
                                    var ka = (this.constructor || ia).prototype;
                                    return ja in this&&!(ja in ka && this[ja] === ka[ja]);
                                };
                            }
                            ha = null;
                            return h.call(this, ga);
                        };
                    i = function(ga, ha) {
                        var ia = 0, ja, ka, la, ma;
                        (ja = function() {
                            this.valueOf = 0;
                        }).prototype.valueOf = 0;
                        ka = new ja();
                        for (la in ka)
                            if (h.call(ka, la))
                                ia++;
                        ja = ka = null;
                        if (!ia) {
                            ka = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            ma = function(na, oa) {
                                var pa = g.call(na) == "[object Function]", qa, ra;
                                for (qa in na)
                                    if (!(pa && qa == "prototype") && h.call(na, qa))
                                        oa(qa);
                                for (ra = ka.length; qa = ka[--ra]; h.call(na, qa) 
                                    && oa(qa));
                            };
                        } else if (ia == 2) {
                            ma = function(na, oa) {
                                var pa = {}, qa = g.call(na) == "[object Function]", ra;
                                for (ra in na)
                                    if (!(qa && ra == "prototype")&&!h.call(pa, ra) && (pa[ra] = 1) && h.call(na, ra))
                                        oa(ra);
                            };
                        } else 
                            ma = function(na, oa) {
                                var pa = g.call(na) == "[object Function]", qa, ra;
                                for (qa in na)
                                    if (!(pa && qa == "prototype") && h.call(na, qa)&&!(ra = qa === "constructor"))
                                        oa(qa);
                                        if (ra || h.call(na, (qa = "constructor")))
                                            oa(qa);
                                        };
                        return ma(ga, ha);
                    };
                    if (!m) {
                        n = {
                            "\\": "\\\\",
                            '"': '\\"',
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t"
                        };
                        o = function(ga, ha) {
                            return ("000000" + (ha || 0)).slice( - ga);
                        };
                        p = function(ga) {
                            var ha = '"', ia = 0, ja;
                            for (; ja = ga.charAt(ia); ia++)
                                ha += '\\"\b\f\n\r\t'.indexOf(ja)>-1 ? n[ja] : ja < " " ? "\\u00" + o(2, ja.charCodeAt(0).toString(16)) : ja;
                            return ha + '"';
                        };
                        q = function(ga, ha, ia, ja, ka, la, ma) {
                            var na = ha[ga], oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb;
                            if (typeof na == "object" && na) {
                                oa = g.call(na);
                                if (oa == "[object Date]"&&!h.call(na, "toJSON")) {
                                    if (na>-1 / 0 && na < 1 / 0) {
                                        if (ea) {
                                            ra = ca(na / 86400000);
                                            for (pa = ca(ra / 365.2425) + 1970 - 1; ea(pa + 1, 0) <= ra; pa++);
                                            for (qa = ca((ra - ea(pa, 0)) / 30.42); ea(pa, qa + 1) <= ra; qa++);
                                            ra = 1 + ra - ea(pa, qa);
                                            sa = (na%86400000 + 86400000)%86400000;
                                            ta = ca(sa / 3600000)%24;
                                            ua = ca(sa / 60000)%60;
                                            va = ca(sa / 1000)%60;
                                            wa = sa%1000;
                                        } else {
                                            pa = na.getUTCFullYear();
                                            qa = na.getUTCMonth();
                                            ra = na.getUTCDate();
                                            ta = na.getUTCHours();
                                            ua = na.getUTCMinutes();
                                            va = na.getUTCSeconds();
                                            wa = na.getUTCMilliseconds();
                                        }
                                        na = (pa <= 0 || pa >= 10000 ? (pa < 0 ? "-" : "+") + o(6, pa < 0?-pa : pa) : o(4, pa)) + "-" + o(2, qa + 1) + "-" + o(2, ra) + "T" + o(2, ta) + ":" + o(2, ua) + ":" + o(2, va) + "." + o(3, wa) + "Z";
                                    } else 
                                        na = null;
                                } else if (typeof na.toJSON == "function" && ((oa != "[object Number]" && oa != "[object String]" && oa != "[object Array]") || h.call(na, "toJSON")))
                                    na = na.toJSON(ga);
                            }
                            if (ia)
                                na = ia.call(ha, ga, na);
                            if (na === null)
                                return "null";
                            oa = g.call(na);
                            if (oa == "[object Boolean]") {
                                return "" + na;
                            } else if (oa == "[object Number]") {
                                return na>-1 / 0 && na < 1 / 0 ? "" + na : "null";
                            } else if (oa == "[object String]")
                                return p(na);
                            if (typeof na == "object") {
                                for (ab = ma.length; ab--;)
                                    if (ma[ab] === na)
                                        throw TypeError();
                                ma.push(na);
                                xa = [];
                                bb = la;
                                la += ka;
                                if (oa == "[object Array]") {
                                    for (za = 0, ab = na.length; za < ab; cb || (cb = true)
                                        , za++) {
                                        ya = q(za, na, ia, ja, ka, la, ma);
                                        xa.push(ya === j ? "null" : ya);
                                    }
                                    return cb ? (ka ? "[\n" + la + xa.join(",\n" + la) + "\n" + bb + "]" : ("[" + xa.join(",") + "]")) : "[]";
                                } else {
                                    i(ja || na, function(db) {
                                        var eb = q(db, na, ia, ja, ka, la, ma);
                                        if (eb !== j)
                                            xa.push(p(db) + ":" + (ka ? " " : "") + eb);
                                        cb || (cb = true);
                                    });
                                    return cb ? (ka ? "{\n" + la + xa.join(",\n" + la) + "\n" + bb + "}" : ("{" + xa.join(",") + "}")) : "{}";
                                }
                                ma.pop();
                            }
                        };
                        k.stringify = function(ga, ha, ia) {
                            var ja, ka, la, ma, na, oa;
                            if (typeof ha == "function" || typeof ha == "object" && ha)
                                if (g.call(ha) == "[object Function]") {
                                    ka = ha;
                                } else if (g.call(ha) == "[object Array]") {
                                    la = {};
                                    for (ma = 0, na = ha.length; ma < na; oa = ha[ma++], ((g.call(oa) 
                                        == "[object String]" || g.call(oa) == "[object Number]") && (la[oa] = 1)));
                                }
                            if (ia)
                                if (g.call(ia) == "[object Number]") {
                                    if ((ia -= ia%1) > 0)
                                        for (ja = "", ia > 10 && (ia = 10); ja.length < ia; ja += " ");
                                } else if (g.call(ia) == "[object String]")
                                    ja = ia.length <= 10 ? ia : ia.slice(0, 10);
                            return q("", (oa = {}, oa[""] = ga, oa), ka, la, ja, "", []);
                        };
                    }
                    if (!r) {
                        s = String.fromCharCode;
                        t = {
                            "\\": "\\",
                            '"': '"',
                            "/": "/",
                            b: "\b",
                            t: "\t",
                            n: "\n",
                            f: "\f",
                            r: "\r"
                        };
                        u = function() {
                            z = aa = null;
                            throw SyntaxError();
                        };
                        v = function() {
                            var ga = aa, ha = ga.length, ia, ja, ka, la, ma;
                            while (z < ha) {
                                ia = ga.charAt(z);
                                if ("\t\r\n ".indexOf(ia)>-1) {
                                    z++;
                                } else if ("{}[]:,".indexOf(ia)>-1) {
                                    z++;
                                    return ia;
                                } else if (ia == '"') {
                                    for (ja = "@", z++; z < ha;) {
                                        ia = ga.charAt(z);
                                        if (ia < " ") {
                                            u();
                                        } else if (ia == "\\") {
                                            ia = ga.charAt(++z);
                                            if ('\\"/btnfr'.indexOf(ia)>-1) {
                                                ja += t[ia];
                                                z++;
                                            } else if (ia == "u") {
                                                ka=++z;
                                                for (la = z + 4; z < la; z++) {
                                                    ia = ga.charAt(z);
                                                    if (!(ia >= "0" && ia <= "9" || ia >= "a" && ia <= "f" || ia >= "A" && ia <= "F"))
                                                        u();
                                                }
                                                ja += s("0x" + ga.slice(ka, z));
                                            } else 
                                                u();
                                        } else {
                                            if (ia == '"')
                                                break;
                                            ja += ia;
                                            z++;
                                        }
                                    }
                                    if (ga.charAt(z) == '"') {
                                        z++;
                                        return ja;
                                    }
                                    u();
                                } else {
                                    ka = z;
                                    if (ia == "-") {
                                        ma = true;
                                        ia = ga.charAt(++z);
                                    }
                                    if (ia >= "0" && ia <= "9") {
                                        if (ia == "0" && (ia = ga.charAt(z + 1), ia >= "0" && ia <= "9"))
                                            u();
                                        ma = false;
                                        for (; z < ha && (ia = ga.charAt(z), ia >= "0" && ia <= "9"); z++);
                                        if (ga.charAt(z) == ".") {
                                            la=++z;
                                            for (; la < ha && (ia = ga.charAt(la), ia >= "0" && ia <= "9"); la++);
                                            if (la == z)
                                                u();
                                            z = la;
                                        }
                                        ia = ga.charAt(z);
                                        if (ia == "e" || ia == "E") {
                                            ia = ga.charAt(++z);
                                            if (ia == "+" || ia == "-")
                                                z++;
                                            for (la = z; la < ha && (ia = ga.charAt(la), ia >= "0" && ia <= "9"); la++);
                                            if (la == z)
                                                u();
                                            z = la;
                                        }
                                        return + ga.slice(ka, z);
                                    }
                                    if (ma)
                                        u();
                                    if (ga.slice(z, z + 4) == "true") {
                                        z += 4;
                                        return true;
                                    } else if (ga.slice(z, z + 5) == "false") {
                                        z += 5;
                                        return false;
                                    } else if (ga.slice(z, z + 4) == "null") {
                                        z += 4;
                                        return null;
                                    }
                                    u();
                                }
                            }
                            return "$";
                        };
                        w = function(ga) {
                            var ha, ia, ja;
                            if (ga == "$")
                                u();
                            if (typeof ga == "string") {
                                if (ga.charAt(0) == "@")
                                    return ga.slice(1);
                                if (ga == "[") {
                                    ha = [];
                                    for (; ; ia || (ia = true)) {
                                        ga = v();
                                        if (ga == "]")
                                            break;
                                        if (ia)
                                            if (ga == ",") {
                                                ga = v();
                                                if (ga == "]")
                                                    u();
                                            } else 
                                                u();
                                        if (ga == ",")
                                            u();
                                        ha.push(w(ga));
                                    }
                                    return ha;
                                } else if (ga == "{") {
                                    ha = {};
                                    for (; ; ia || (ia = true)) {
                                        ga = v();
                                        if (ga == "}")
                                            break;
                                        if (ia)
                                            if (ga == ",") {
                                                ga = v();
                                                if (ga == "}")
                                                    u();
                                            } else 
                                                u();
                                        if (ga == "," || typeof ga != "string" || ga.charAt(0) != "@" || v() != ":")
                                            u();
                                        ha[ga.slice(1)] = w(v());
                                    }
                                    return ha;
                                }
                                u();
                            }
                            return ga;
                        };
                        y = function(ga, ha, ia) {
                            var ja = x(ga, ha, ia);
                            if (ja === j) {
                                delete ga[ha];
                            } else 
                                ga[ha] = ja;
                        };
                        x = function(ga, ha, ia) {
                            var ja = ga[ha], ka;
                            if (typeof ja == "object" && ja)
                                if (g.call(ja) == "[object Array]") {
                                    for (ka = ja.length; ka--;)
                                        y(ja, ka, ia);
                                } else 
                                    i(ja, function(la) {
                                        y(ja, la, ia);
                                    });
                            return ia.call(ga, ha, ja);
                        };
                        k.parse = function(ga, ha) {
                            z = 0;
                            aa = ga;
                            var ia = w(v());
                            if (v() != "$")
                                u();
                            z = aa = null;
                            return ha && g.call(ha) == "[object Function]" ? x((ba = {}, ba[""] = ia, ba), "", ha) : ia;
                        };
                    }
                }
            }).call(this);
        }, null);
        __d("ES6Object", ["ie8DontEnum"], function(a, b, c, d, e, f, g) {
            var h = ({}).hasOwnProperty, i = {
                assign: function(j) {
                    for (var k = [], l = 1, m = arguments.length; l < m; l++)
                        k.push(arguments[l]);
                    if (j == null)
                        throw new TypeError('Object.assign target cannot be null or undefined');
                    j = Object(j);
                    for (var n = 0; n < k.length; n++) {
                        var o = k[n];
                        if (o == null)
                            continue;
                        o = Object(o);
                        for (var p in o)
                            if (h.call(o, p))
                                j[p] = o[p];
                        g(o, function(q) {
                            return j[q] = o[q];
                        });
                    }
                    return j;
                }
            };
            e.exports = i;
        }, null);
        __d("ES6ArrayPrototype", [], function(a, b, c, d, e, f) {
            var g = {
                find: function(h, i) {
                    if (this == null)
                        throw new TypeError('Array.prototype.find called on null or undefined');
                    if (typeof h !== 'function')
                        throw new TypeError('predicate must be a function');
                    var j = g.findIndex.call(this, h, i);
                    return j===-1 ? void 0 : this[j];
                },
                findIndex: function(h, i) {
                    if (this == null)
                        throw new TypeError('Array.prototype.findIndex called on null or undefined');
                    if (typeof h !== 'function')
                        throw new TypeError('predicate must be a function');
                    var j = Object(this), k = j.length>>>0;
                    for (var l = 0; l < k; l++)
                        if (h.call(i, j[l], l, j))
                            return l;
                    return - 1;
                }
            };
            e.exports = g;
        }, null);
        __d("ES6DatePrototype", [], function(a, b, c, d, e, f) {
            function g(i) {
                return (i < 10 ? '0' : '') + i;
            }
            var h = {
                toISOString: function() {
                    if (!isFinite(this))
                        throw new Error('Invalid time value');
                    var i = this.getUTCFullYear();
                    i = (i < 0 ? '-' : (i > 9999 ? '+' : '')) + ('00000' + Math.abs(i)).slice(0 <= i && i <= 9999?-4 : - 6);
                    return i + '-' + g(this.getUTCMonth() + 1) + '-' + g(this.getUTCDate()) + 'T' + g(this.getUTCHours()) + ':' + g(this.getUTCMinutes()) + ':' + g(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
                }
            };
            e.exports = h;
        }, null);
        __d("ES6Number", [], function(a, b, c, d, e, f) {
            var g = {
                isFinite: function(h) {
                    return (typeof h == 'number') && isFinite(h);
                },
                isNaN: function(h) {
                    return (typeof h == 'number') && isNaN(h);
                }
            };
            e.exports = g;
        }, null);
        __d("ES", ["ES5ArrayPrototype", "ES5FunctionPrototype", "ES5StringPrototype", "ES5Array", "ES5Object", "ES5Date", "JSON3", "ES6Object", "ES6ArrayPrototype", "ES6DatePrototype", "ES6Number"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            var r = ({}).toString, s = {
                'JSON.stringify': m.stringify,
                'JSON.parse': m.parse
            }, t = {
                'Array.prototype': g,
                'Function.prototype': h,
                'String.prototype': i,
                Object: k,
                Array: j,
                Date: l
            }, u = {
                Object: n,
                'Array.prototype': o,
                'Date.prototype': p,
                Number: q
            };
            function v(x) {
                for (var y in x) {
                    if (!x.hasOwnProperty(y))
                        continue;
                    var z = x[y], aa = y.split('.'), ba = aa.length == 2 ? window[aa[0]][aa[1]]: window[y];
                    for (var ca in z) {
                        if (!z.hasOwnProperty(ca))
                            continue;
                        var da = ba[ca];
                        s[y + '.' + ca] = da && /\{\s+\[native code\]\s\}/.test(da) ? da : z[ca];
                    }
                }
            }
            v(t);
            v(u);
            function w(x, y, z) {
                for (var aa = [], ba = 3, ca = arguments.length; ba < ca; ba++)
                    aa.push(arguments[ba]);
                var da = z ? r.call(x).slice(8, - 1) + '.prototype': x, ea = s[da + '.' + y] || x[y];
                if (typeof ea === 'function')
                    return ea.apply(x, aa);
            }
            e.exports = w;
        }, null);
        var ES = require('ES');
        __d("JSSDKRuntimeConfig", [], {
            "locale": "en_US",
            "rtl": false,
            "revision": "1507751"
        });
        __d("JSSDKConfig", [], {
            "bustCache": true,
            "tagCountLogRate": 0.01,
            "errorHandling": {
                "rate": 4
            },
            "usePluginPipe": true,
            "features": {
                "allow_non_canvas_app_events": false,
                "event_subscriptions_log": {
                    "rate": 0.01,
                    "value": 10000
                },
                "kill_fragment": true,
                "xfbml_profile_pic_server": true,
                "error_handling": {
                    "rate": 4
                },
                "e2e_ping_tracking": {
                    "rate": 1.0e-6
                },
                "xd_timeout": {
                    "rate": 4,
                    "value": 30000
                },
                "use_bundle": true,
                "launch_payment_dialog_via_pac": {
                    "rate": 100
                },
                "plugin_tags_blacklist": ["recommendations_bar"]
            },
            "api": {
                "mode": "warn",
                "whitelist": ["AppEvents", "AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.logEvent", "AppEvents.logPurchase", "Canvas", "Canvas.Prefetcher", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Event", "Event.subscribe", "Event.unsubscribe", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.cancelFlow", "Payment.continueFlow", "Payment.init", "Payment.lockForProcessing", "Payment.parse", "Payment.setSize", "Payment.unlockForProcessing", "ThirdPartyProvider", "ThirdPartyProvider.init", "ThirdPartyProvider.sendData", "UA", "UA.nativeApp", "XFBML", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"]
            },
            "initSitevars": {
                "enableMobileComments": 1,
                "iframePermissions": {
                    "read_stream": false,
                    "manage_mailbox": false,
                    "manage_friendlists": false,
                    "read_mailbox": false,
                    "publish_checkins": true,
                    "status_update": true,
                    "photo_upload": true,
                    "video_upload": true,
                    "sms": false,
                    "create_event": true,
                    "rsvp_event": true,
                    "offline_access": true,
                    "email": true,
                    "xmpp_login": false,
                    "create_note": true,
                    "share_item": true,
                    "export_stream": false,
                    "publish_stream": true,
                    "publish_likes": true,
                    "ads_management": false,
                    "contact_email": true,
                    "access_private_data": false,
                    "read_insights": false,
                    "read_requests": false,
                    "read_friendlists": true,
                    "manage_pages": false,
                    "physical_login": false,
                    "manage_groups": false,
                    "read_deals": false
                }
            }
        });
        __d("UrlMapConfig", [], {
            "www": "www.facebook.com",
            "m": "m.facebook.com",
            "connect": "connect.facebook.net",
            "business": "business.facebook.com",
            "api_https": "api.facebook.com",
            "api_read_https": "api-read.facebook.com",
            "graph_https": "graph.facebook.com",
            "fbcdn_http": "static.ak.fbcdn.net",
            "fbcdn_https": "fbstatic-a.akamaihd.net",
            "cdn_http": "static.ak.facebook.com",
            "cdn_https": "s-static.ak.facebook.com"
        });
        __d("JSSDKXDConfig", [], {
            "XdUrl": "\/connect\/xd_arbiter.php?version=41",
            "XdBundleUrl": "\/connect\/xd_arbiter\/7r8gQb8MIqE.js?version=41",
            "Flash": {
                "path": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/yR\/r\/ks_9ZXiQ0GL.swf"
            },
            "useCdn": true
        });
        __d("JSSDKCssConfig", [], {
            "rules": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_close_icon:active{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}",
            "components": ["css:fb.css.base", "css:fb.css.dialog", "css:fb.css.iframewidget"]
        });
        __d("ApiClientConfig", [], {
            "FlashRequest": {
                "swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/PvklbuW2Ycn.swf"
            }
        });
        __d("JSSDKCanvasPrefetcherConfig", [], {
            "blacklist": [144959615576466],
            "sampleRate": 500
        });
        __d("JSSDKPluginPipeConfig", [], {
            "threshold": 0,
            "enabledApps": {
                "209753825810663": 1,
                "187288694643718": 1
            }
        });
        __d("QueryString", [], function(a, b, c, d, e, f) {
            function g(k) {
                var l = [];
                ES(ES('Object', 'keys', false, k).sort(), 'forEach', true, function(m) {
                    var n = k[m];
                    if (typeof n === 'undefined')
                        return;
                    if (n === null) {
                        l.push(m);
                        return;
                    }
                    l.push(encodeURIComponent(m) + '=' + encodeURIComponent(n));
                });
                return l.join('&');
            }
            function h(k, l) {
                var m = {};
                if (k === '')
                    return m;
                var n = k.split('&');
                for (var o = 0; o < n.length; o++) {
                    var p = n[o].split('=', 2), q = decodeURIComponent(p[0]);
                    if (l && m.hasOwnProperty(q))
                        throw new URIError('Duplicate key: ' + q);
                    m[q] = p.length === 2 ? decodeURIComponent(p[1]) : null;
                }
                return m;
            }
            function i(k, l) {
                return k + (~ES(k, 'indexOf', true, '?') ? '&' : '?') + (typeof l === 'string' ? l : j.encode(l));
            }
            var j = {
                encode: g,
                decode: h,
                appendToUrl: i
            };
            e.exports = j;
        }, null);
        __d("ManagedError", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                Error.prototype.constructor.call(this, h);
                this.message = h;
                this.innerError = i;
            }
            g.prototype = new Error();
            g.prototype.constructor = g;
            e.exports = g;
        }, null);
        __d("AssertionError", ["ManagedError"], function(a, b, c, d, e, f, g) {
            function h(i) {
                g.prototype.constructor.apply(this, arguments);
            }
            h.prototype = new g();
            h.prototype.constructor = h;
            e.exports = h;
        }, null);
        __d("sprintf", [], function(a, b, c, d, e, f) {
            function g(h) {
                for (var i = [], j = 1, k = arguments.length; j < k; j++)
                    i.push(arguments[j]);
                var l = 0;
                return h.replace(/%s/g, function(m) {
                    return i[l++];
                });
            }
            e.exports = g;
        }, null);
        __d("Assert", ["AssertionError", "sprintf"], function(a, b, c, d, e, f, g, h) {
            function i(n, o) {
                if (typeof n !== 'boolean' ||!n)
                    throw new g(o);
                return n;
            }
            function j(n, o, p) {
                var q;
                if (o === (void 0)) {
                    q = 'undefined';
                } else if (o === null) {
                    q = 'null';
                } else {
                    var r = Object.prototype.toString.call(o);
                    q = /\s(\w*)/.exec(r)[1].toLowerCase();
                }
                i(ES(n, 'indexOf', true, q)!==-1, p || h('Expression is of type %s, not %s', q, n));
                return o;
            }
            function k(n, o, p) {
                i(o instanceof n, p || 'Expression not instance of type');
                return o;
            }
            function l(n, o) {
                m['is' + n] = o;
                m['maybe' + n] = function(p, q) {
                    if (p != null)
                        o(p, q);
                };
            }
            var m = {
                isInstanceOf: k,
                isTrue: i,
                isTruthy: function(n, o) {
                    return i(!!n, o);
                },
                type: j,
                define: function(n, o) {
                    n = n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase();
                    l(n, function(p, q) {
                        i(o(p), q);
                    });
                }
            };
            ES(['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'], 'forEach', true, function(n) {
                l(n, ES(j, 'bind', true, null, n.toLowerCase()));
            });
            e.exports = m;
        }, null);
        __d("Type", ["Assert"], function(a, b, c, d, e, f, g) {
            function h() {
                var l = this.__mixins;
                if (l)
                    for (var m = 0; m < l.length; m++)
                        l[m].apply(this, arguments);
            }
            function i(l, m) {
                if (m instanceof l)
                    return true;
                if (m instanceof h)
                    for (var n = 0; n < m.__mixins.length; n++)
                        if (m.__mixins[n] == l)
                            return true;
                return false;
            }
            function j(l, m) {
                var n = l.prototype;
                if (!ES('Array', 'isArray', false, m))
                    m = [m];
                for (var o = 0; o < m.length; o++) {
                    var p = m[o];
                    if (typeof p == 'function') {
                        n.__mixins.push(p);
                        p = p.prototype;
                    }
                    ES(ES('Object', 'keys', false, p), 'forEach', true, function(q) {
                        n[q] = p[q];
                    });
                }
            }
            function k(l, m, n) {
                var o = m && m.hasOwnProperty('constructor') ? m.constructor: function() {
                    this.parent.apply(this, arguments);
                };
                g.isFunction(o);
                if (l && l.prototype instanceof h === false)
                    throw new Error('parent type does not inherit from Type');
                l = l || h;
                function p() {}
                p.prototype = l.prototype;
                o.prototype = new p();
                if (m)
                    ES('Object', 'assign', false, o.prototype, m);
                o.prototype.constructor = o;
                o.parent = l;
                o.prototype.__mixins = l.prototype.__mixins ? Array.prototype.slice.call(l.prototype.__mixins) : [];
                if (n)
                    j(o, n);
                o.prototype.parent = function() {
                    this.parent = l.prototype.parent;
                    l.apply(this, arguments);
                };
                o.prototype.parentCall = function(q) {
                    return l.prototype[q].apply(this, Array.prototype.slice.call(arguments, 1));
                };
                o.extend = function(q, r) {
                    return k(this, q, r);
                };
                return o;
            }
            ES('Object', 'assign', false, h.prototype, {
                instanceOf: function(l) {
                    return i(l, this);
                }
            });
            ES('Object', 'assign', false, h, {
                extend: function(l, m) {
                    return typeof l === 'function' ? k.apply(null, arguments) : k(null, l, m);
                },
                instanceOf: i
            });
            e.exports = h;
        }, null);
        __d("ObservableMixin", [], function(a, b, c, d, e, f) {
            function g() {
                this.__observableEvents = {};
            }
            g.prototype = {
                inform: function(h) {
                    var i = Array.prototype.slice.call(arguments, 1), j = Array.prototype.slice.call(this.getSubscribers(h));
                    for (var k = 0; k < j.length; k++) {
                        if (j[k] === null)
                            continue;
                        try {
                            j[k].apply(this, i);
                        } catch (l) {
                            setTimeout(function() {
                                throw l;
                            }, 0);
                        }
                    }
                    return this;
                },
                getSubscribers: function(h) {
                    return this.__observableEvents[h] || (this.__observableEvents[h] = []);
                },
                clearSubscribers: function(h) {
                    if (h)
                        this.__observableEvents[h] = [];
                    return this;
                },
                clearAllSubscribers: function() {
                    this.__observableEvents = {};
                    return this;
                },
                subscribe: function(h, i) {
                    var j = this.getSubscribers(h);
                    j.push(i);
                    return this;
                },
                unsubscribe: function(h, i) {
                    var j = this.getSubscribers(h);
                    for (var k = 0; k < j.length; k++)
                        if (j[k] === i) {
                            j.splice(k, 1);
                            break;
                        }
                    return this;
                },
                monitor: function(h, i) {
                    if (!i()) {
                        var j = ES(function(k) {
                            if (i.apply(i, arguments))
                                this.unsubscribe(h, j);
                        }, 'bind', true, this);
                        this.subscribe(h, j);
                    }
                    return this;
                }
            };
            e.exports = g;
        }, null);
        __d("sdk.Model", ["Type", "ObservableMixin"], function(a, b, c, d, e, f, g, h) {
            var i = g.extend({
                constructor: function(j) {
                    this.parent();
                    var k = {}, l = this;
                    ES(ES('Object', 'keys', false, j), 'forEach', true, function(m) {
                        k[m] = j[m];
                        l['set' + m] = function(n) {
                            if (n === k[m])
                                return this;
                            k[m] = n;
                            l.inform(m + '.change', n);
                            return l;
                        };
                        l['get' + m] = function() {
                            return k[m];
                        };
                    });
                }
            }, h);
            e.exports = i;
        }, null);
        __d("sdk.Runtime", ["sdk.Model", "JSSDKRuntimeConfig"], function(a, b, c, d, e, f, g, h) {
            var i = {
                UNKNOWN: 0,
                PAGETAB: 1,
                CANVAS: 2,
                PLATFORM: 4
            }, j = new g({
                AccessToken: '',
                ClientID: '',
                CookieUserID: '',
                Environment: i.UNKNOWN,
                Initialized: false,
                IsVersioned: false,
                KidDirectedSite: (void 0),
                Locale: h.locale,
                LoginStatus: (void 0),
                Revision: h.revision,
                Rtl: h.rtl,
                Scope: (void 0),
                Secure: (void 0),
                UseCookie: false,
                UserID: '',
                Version: (void 0)
            });
            ES('Object', 'assign', false, j, {
                ENVIRONMENTS: i,
                isEnvironment: function(k) {
                    var l = this.getEnvironment();
                    return (k | l) === l;
                },
                isCanvasEnvironment: function() {
                    return this.isEnvironment(i.CANVAS) || this.isEnvironment(i.PAGETAB);
                }
            });
            (function() {
                var k = /app_runner/.test(window.name) ? i.PAGETAB: /iframe_canvas/.test(window.name) ? i.CANVAS: i.UNKNOWN;
                if ((k | i.PAGETAB) === k)
                    k = k | i.CANVAS;
                j.setEnvironment(k);
            })();
            e.exports = j;
        }, null);
        __d("sdk.Cookie", ["QueryString", "sdk.Runtime"], function(a, b, c, d, e, f, g, h) {
            var i = null;
            function j(m, n, o) {
                m = m + h.getClientID();
                var p = i && i !== '.';
                if (p) {
                    document.cookie = m + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                    document.cookie = m + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                }
                var q = new Date(o).toGMTString();
                document.cookie = m + '=' + n + (n && o === 0 ? '' : '; expires=' + q) + '; path=/' + (p ? '; domain=' + i : '');
            }
            function k(m) {
                m = m + h.getClientID();
                var n = new RegExp('\\b' + m + '=([^;]*)\\b');
                return n.test(document.cookie) ? RegExp.$1 : null;
            }
            var l = {
                setDomain: function(m) {
                    i = m;
                    var n = g.encode({
                        base_domain: i && i !== '.' ? i: ''
                    }), o = new Date();
                    o.setFullYear(o.getFullYear() + 1);
                    j('fbm_', n, o.getTime());
                },
                getDomain: function() {
                    return i;
                },
                loadMeta: function() {
                    var m = k('fbm_');
                    if (m) {
                        var n = g.decode(m);
                        if (!i)
                            i = n.base_domain;
                        return n;
                    }
                },
                loadSignedRequest: function() {
                    return k('fbsr_');
                },
                setSignedRequestCookie: function(m, n) {
                    if (!m)
                        throw new Error('Value passed to Cookie.setSignedRequestCookie ' + 'was empty.');
                    j('fbsr_', m, n);
                },
                clearSignedRequestCookie: function() {
                    j('fbsr_', '', 0);
                },
                setRaw: j
            };
            e.exports = l;
        }, null);
        __d("wrapFunction", [], function(a, b, c, d, e, f) {
            var g = {};
            function h(i, j, k) {
                j = j || 'default';
                return function() {
                    var l = j in g ? g[j](i, k): i;
                    return l.apply(this, arguments);
                };
            }
            h.setWrapper = function(i, j) {
                j = j || 'default';
                g[j] = i;
            };
            e.exports = h;
        }, null);
        __d("DOMEventListener", ["wrapFunction"], function(a, b, c, d, e, f, g) {
            var h, i;
            if (window.addEventListener) {
                h = function(k, l, m) {
                    m.wrapper = g(m, 'entry', 'DOMEventListener.add ' + l);
                    k.addEventListener(l, m.wrapper, false);
                };
                i = function(k, l, m) {
                    k.removeEventListener(l, m.wrapper, false);
                };
            } else if (window.attachEvent) {
                h = function(k, l, m) {
                    m.wrapper = g(m, 'entry', 'DOMEventListener.add ' + l);
                    k.attachEvent('on' + l, m.wrapper);
                };
                i = function(k, l, m) {
                    k.detachEvent('on' + l, m.wrapper);
                };
            } else 
                i = h = function() {};
            var j = {
                add: function(k, l, m) {
                    h(k, l, m);
                    return {
                        remove: function() {
                            i(k, l, m);
                            k = null;
                        }
                    };
                },
                remove: i
            };
            e.exports = j;
        }, null);
        __d("sdk.UA", [], function(a, b, c, d, e, f) {
            var g = navigator.userAgent, h = {
                iphone: /\b(iPhone|iP[ao]d)/.test(g),
                ipad: /\b(iP[ao]d)/.test(g),
                android: /Android/i.test(g),
                nativeApp: /FBAN\/\w+;/i.test(g)
            }, i = /Mobile/i.test(g), j = {
                ie: '',
                firefox: '',
                chrome: '',
                webkit: '',
                osx: ''
            }, k = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(g);
            if (k) {
                j.ie = k[1] ? parseFloat(k[1]) : k[4] ? parseFloat(k[4]) : '';
                j.firefox = k[2] || '';
                j.webkit = k[3] || '';
                if (k[3]) {
                    var l = /(?:Chrome\/(\d+\.\d+))/.exec(g);
                    j.chrome = l ? l[1] : '';
                }
            }
            var m = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(g);
            if (m)
                j.osx = m[1];
            function n(p) {
                return ES(p.split('.'), 'map', true, function(q) {
                    return parseFloat(q);
                });
            }
            var o = {};
            ES(ES('Object', 'keys', false, j), 'map', true, function(p) {
                o[p] = function() {
                    return parseFloat(j[p]);
                };
                o[p].getVersionParts = function() {
                    return n(j[p]);
                };
            });
            ES(ES('Object', 'keys', false, h), 'map', true, function(p) {
                o[p] = function() {
                    return h[p];
                };
            });
            o.mobile = function() {
                return h.iphone || h.ipad || h.android || i;
            };
            e.exports = o;
        }, null);
        __d("getBlankIframeSrc", ["sdk.UA"], function(a, b, c, d, e, f, g) {
            function h() {
                return g.ie() < 10 ? 'javascript:false' : 'about:blank';
            }
            e.exports = h;
        }, null);
        __d("guid", [], function(a, b, c, d, e, f) {
            function g() {
                return 'f' + (Math.random() * (1<<30)).toString(16).replace('.', '');
            }
            e.exports = g;
        }, null);
        __d("UserAgent_DEPRECATED", [], function(a, b, c, d, e, f) {
            var g = false, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
            function w() {
                if (g)
                    return;
                g = true;
                var y = navigator.userAgent, z = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y), aa = /(Mac OS X)|(Windows)|(Linux)/.exec(y);
                s = /\b(iPhone|iP[ao]d)/.exec(y);
                t = /\b(iP[ao]d)/.exec(y);
                q = /Android/i.exec(y);
                u = /FBAN\/\w+;/i.exec(y);
                v = /Mobile/i.exec(y);
                r=!!(/Win64/.exec(y));
                if (z) {
                    h = z[1] ? parseFloat(z[1]) : (z[5] ? parseFloat(z[5]) : NaN);
                    if (h && document && document.documentMode)
                        h = document.documentMode;
                    var ba = /(?:Trident\/(\d+.\d+))/.exec(y);
                    m = ba ? parseFloat(ba[1]) + 4 : h;
                    i = z[2] ? parseFloat(z[2]) : NaN;
                    j = z[3] ? parseFloat(z[3]) : NaN;
                    k = z[4] ? parseFloat(z[4]) : NaN;
                    if (k) {
                        z = /(?:Chrome\/(\d+\.\d+))/.exec(y);
                        l = z && z[1] ? parseFloat(z[1]) : NaN;
                    } else 
                        l = NaN;
                } else 
                    h = i = j = l = k = NaN;
                if (aa) {
                    if (aa[1]) {
                        var ca = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);
                        n = ca ? parseFloat(ca[1].replace('_', '.')) : true;
                    } else 
                        n = false;
                    o=!!aa[2];
                    p=!!aa[3];
                } else 
                    n = o = p = false;
            }
            var x = {
                ie: function() {
                    return w() || h;
                },
                ieCompatibilityMode: function() {
                    return w() || (m > h);
                },
                ie64: function() {
                    return x.ie() && r;
                },
                firefox: function() {
                    return w() || i;
                },
                opera: function() {
                    return w() || j;
                },
                webkit: function() {
                    return w() || k;
                },
                safari: function() {
                    return x.webkit();
                },
                chrome: function() {
                    return w() || l;
                },
                windows: function() {
                    return w() || o;
                },
                osx: function() {
                    return w() || n;
                },
                linux: function() {
                    return w() || p;
                },
                iphone: function() {
                    return w() || s;
                },
                mobile: function() {
                    return w() || (s || t || q || v);
                },
                nativeApp: function() {
                    return w() || u;
                },
                android: function() {
                    return w() || q;
                },
                ipad: function() {
                    return w() || t;
                }
            };
            e.exports = x;
        }, null);
        __d("hasNamePropertyBug", ["guid", "UserAgent_DEPRECATED"], function(a, b, c, d, e, f, g, h) {
            var i = h.ie() ? (void 0): false;
            function j() {
                var l = document.createElement("form"), m = l.appendChild(document.createElement("input"));
                m.name = g();
                i = m !== l.elements[m.name];
                l = m = null;
                return i;
            }
            function k() {
                return typeof i === 'undefined' ? j() : i;
            }
            e.exports = k;
        }, null);
        __d("sdk.createIframe", ["DOMEventListener", "getBlankIframeSrc", "guid", "hasNamePropertyBug"], function(a, b, c, d, e, f, g, h, i, j) {
            function k(l) {
                l = ES('Object', 'assign', false, {}, l);
                var m, n = l.name || i(), o = l.root, p = l.style || {
                    border: 'none'
                }, q = l.url, r = l.onload, s = l.onerror;
                if (j()) {
                    m = document.createElement('<iframe name="' + n + '"/>');
                } else {
                    m = document.createElement("iframe");
                    m.name = n;
                }
                delete l.style;
                delete l.name;
                delete l.url;
                delete l.root;
                delete l.onload;
                delete l.onerror;
                var t = ES('Object', 'assign', false, {
                    frameBorder: 0,
                    allowTransparency: true,
                    scrolling: 'no'
                }, l);
                if (t.width)
                    m.width = t.width + 'px';
                if (t.height)
                    m.height = t.height + 'px';
                delete t.height;
                delete t.width;
                for (var u in t)
                    if (t.hasOwnProperty(u))
                        m.setAttribute(u, t[u]);
                ES('Object', 'assign', false, m.style, p);
                m.src = h();
                o.appendChild(m);
                if (r)
                    var v = g.add(m, 'load', function() {
                        v.remove();
                        r();
                    });
                if (s)
                    var w = g.add(m, 'error', function() {
                        w.remove();
                        s();
                    });
                m.src = q;
                return m;
            }
            e.exports = k;
        }, null);
        __d("DOMWrapper", [], function(a, b, c, d, e, f) {
            var g, h, i = {
                setRoot: function(j) {
                    g = j;
                },
                getRoot: function() {
                    return g || document.body;
                },
                setWindow: function(j) {
                    h = j;
                },
                getWindow: function() {
                    return h || self;
                }
            };
            e.exports = i;
        }, null);
        __d("eprintf", [], function(a, b, c, d, e, f) {
            var g = function(h) {
                var i = ES(Array.prototype.slice.call(arguments), 'map', true, function(l) {
                    return String(l);
                }), j = h.split('%s').length - 1;
                if (j !== i.length - 1)
                    return g('eprintf args number mismatch: %s', ES('JSON', 'stringify', false, i));
                var k = 1;
                return h.replace(/%s/g, function(l) {
                    return String(i[k++]);
                });
            };
            e.exports = g;
        }, null);
        __d("ex", ["eprintf"], function(a, b, c, d, e, f, g) {
            var h = function() {
                for (var i = [], j = 0, k = arguments.length; j < k; j++)
                    i.push(arguments[j]);
                i = ES(i, 'map', true, function(l) {
                    return String(l);
                });
                if (i[0].split('%s').length !== i.length)
                    return h('ex args number mismatch: %s', ES('JSON', 'stringify', false, i));
                return h._prefix + ES('JSON', 'stringify', false, i) + h._suffix;
            };
            h._prefix = '<![EX[';
            h._suffix = ']]>';
            e.exports = h;
        }, null);
        __d("invariant", ["ex", "sprintf"], function(a, b, c, d, e, f, g, h) {
            "use strict";
            var i = g, j = function(k, l) {
                if (!k) {
                    var m;
                    if (l === (void 0)) {
                        m = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
                    } else {
                        var n = ['Invariant Violation: ' + l];
                        for (var o = 2, p = arguments.length; o < p; o++)
                            n.push(arguments[o]);
                        m = new Error(i.apply(null, n));
                        m.messageWithParams = n;
                    }
                    m.framesToPop = 1;
                    throw m;
                }
            };
            e.exports = j;
        }, null);
        __d("sdk.feature", ["JSSDKConfig", "invariant"], function(a, b, c, d, e, f, g, h) {
            function i(j, k) {
                h(arguments.length >= 2);
                if (g.features && j in g.features) {
                    var l = g.features[j];
                    if (typeof l === 'object' && typeof l.rate === 'number') {
                        if (l.rate && Math.random() * 100 <= l.rate) {
                            return l.value || true;
                        } else 
                            return l.value ? null : false;
                    } else 
                        return l;
                }
                return k;
            }
            e.exports = i;
        }, null);
        __d("sdk.getContextType", ["sdk.Runtime", "sdk.UA"], function(a, b, c, d, e, f, g, h) {
            function i() {
                if (h.nativeApp())
                    return 3;
                if (h.mobile())
                    return 2;
                if (g.isEnvironment(g.ENVIRONMENTS.CANVAS))
                    return 5;
                return 1;
            }
            e.exports = i;
        }, null);
        __d("Log", ["sprintf"], function(a, b, c, d, e, f, g) {
            var h = {
                DEBUG: 3,
                INFO: 2,
                WARNING: 1,
                ERROR: 0
            };
            function i(k, l) {
                var m = Array.prototype.slice.call(arguments, 2), n = g.apply(null, m), o = window.console;
                if (o && j.level >= l)
                    o[k in o ? k: 'log'](n);
            }
            var j = {
                level: - 1,
                Level: h,
                debug: ES(i, 'bind', true, null, 'debug', h.DEBUG),
                info: ES(i, 'bind', true, null, 'info', h.INFO),
                warn: ES(i, 'bind', true, null, 'warn', h.WARNING),
                error: ES(i, 'bind', true, null, 'error', h.ERROR)
            };
            e.exports = j;
        }, null);
        __d("sdk.domReady", [], function(a, b, c, d, e, f) {
            var g, h = "readyState" in document ? /loaded|complete/.test(document.readyState): !!document.body;
            function i() {
                if (!g)
                    return;
                var l;
                while (l = g.shift())
                    l();
                g = null;
            }
            function j(l) {
                if (g) {
                    g.push(l);
                    return;
                } else 
                    l();
            }
            if (!h) {
                g = [];
                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', i, false);
                    window.addEventListener('load', i, false);
                } else if (document.attachEvent) {
                    document.attachEvent('onreadystatechange', i);
                    window.attachEvent('onload', i);
                }
                if (document.documentElement.doScroll && window == window.top) {
                    var k = function() {
                        try {
                            document.documentElement.doScroll('left');
                        } catch (l) {
                            setTimeout(k, 0);
                            return;
                        }
                        i();
                    };
                    k();
                }
            }
            e.exports = j;
        }, 3);
        __d("sdk.Content", ["Log", "sdk.UA", "sdk.domReady"], function(a, b, c, d, e, f, g, h, i) {
            var j, k, l = {
                append: function(m, n) {
                    if (!n)
                        if (!j) {
                            j = n = document.getElementById('fb-root');
                            if (!n) {
                                g.warn('The "fb-root" div has not been created, auto-creating');
                                j = n = document.createElement('div');
                                n.id = 'fb-root';
                                if (h.ie() ||!document.body) {
                                    i(function() {
                                        document.body.appendChild(n);
                                    });
                                } else 
                                    document.body.appendChild(n);
                            }
                            n.className += ' fb_reset';
                        } else 
                            n = j;
                    if (typeof m == 'string') {
                        var o = document.createElement('div');
                        n.appendChild(o).innerHTML = m;
                        return o;
                    } else 
                        return n.appendChild(m);
                },
                appendHidden: function(m) {
                    if (!n) {
                        var n = document.createElement('div'), o = n.style;
                        o.position = 'absolute';
                        o.top = '-10000px';
                        o.width = o.height = 0;
                        n = l.append(n);
                    }
                    return l.append(m, n);
                },
                submitToTarget: function(m, n) {
                    var o = document.createElement('form');
                    o.action = m.url;
                    o.target = m.target;
                    o.method = (n) ? 'GET' : 'POST';
                    l.appendHidden(o);
                    for (var p in m.params)
                        if (m.params.hasOwnProperty(p)) {
                            var q = m.params[p];
                            if (q !== null && q !== (void 0)) {
                                var r = document.createElement('input');
                                r.name = p;
                                r.value = q;
                                o.appendChild(r);
                            }
                        }
                    o.submit();
                    o.parentNode.removeChild(o);
                }
            };
            e.exports = l;
        }, null);
        __d("Miny", [], function(a, b, c, d, e, f) {
            var g = 'Miny1', h = {
                encode: [],
                decode: {}
            }, i = 'wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('');
            function j(n) {
                for (var o = h.encode.length; o < n; o++) {
                    var p = o.toString(32).split('');
                    p[p.length - 1] = i[parseInt(p[p.length - 1], 32)];
                    p = p.join('');
                    h.encode[o] = p;
                    h.decode[p] = o;
                }
                return h;
            }
            function k(n) {
                if (/^$|[~\\]|__proto__/.test(n))
                    return n;
                var o = n.match(/\w+|\W+/g), p = {};
                for (var q = 0; q < o.length; q++)
                    p[o[q]] = (p[o[q]] || 0) + 1;
                var r = ES('Object', 'keys', false, p);
                r.sort(function(u, v) {
                    return p[u] < p[v] ? 1 : (p[v] < p[u]?-1 : 0);
                });
                var s = j(r.length).encode;
                for (q = 0; q < r.length; q++)
                    p[r[q]] = s[q];
                var t = [];
                for (q = 0; q < o.length; q++)
                    t[q] = p[o[q]];
                return [g, r.length].concat(r).concat(t.join('')).join('~');
            }
            function l(n) {
                var o = n.split('~');
                if (o.shift() != g)
                    return n;
                var p = parseInt(o.shift(), 10), q = o.pop();
                q = q.match(/[0-9a-v]*[\-w-zA-Z_]/g);
                var r = o, s = j(p).decode, t = [];
                for (var u = 0; u < q.length; u++)
                    t[u] = r[s[q[u]]];
                return t.join('');
            }
            var m = {
                encode: k,
                decode: l
            };
            e.exports = m;
        }, null);
        __d("UrlMap", ["UrlMapConfig"], function(a, b, c, d, e, f, g) {
            var h = {
                resolve: function(i, j) {
                    var k = typeof j == 'undefined' ? location.protocol.replace(':', ''): j ? 'https': 'http';
                    if (i in g)
                        return k + '://' + g[i];
                    if (typeof j == 'undefined' && i + '_' + k in g)
                        return k + '://' + g[i + '_' + k];
                    if (j !== true && i + '_http' in g)
                        return 'http://' + g[i + '_http'];
                    if (j !== false && i + '_https' in g)
                        return 'https://' + g[i + '_https'];
                }
            };
            e.exports = h;
        }, null);
        __d("dotAccess", [], function(a, b, c, d, e, f) {
            function g(h, i, j) {
                var k = i.split('.');
                do {
                    var l = k.shift();
                    h = h[l] || j && (h[l] = {});
                }
                while (k.length && h);
                return h;
            }
            e.exports = g;
        }, null);
        __d("GlobalCallback", ["DOMWrapper", "dotAccess", "guid", "wrapFunction"], function(a, b, c, d, e, f, g, h, i, j) {
            var k, l, m = {
                setPrefix: function(n) {
                    k = h(g.getWindow(), n, true);
                    l = n;
                },
                create: function(n, o) {
                    if (!k)
                        this.setPrefix('__globalCallbacks');
                    var p = i();
                    k[p] = j(n, 'entry', o || 'GlobalCallback');
                    return l + '.' + p;
                },
                remove: function(n) {
                    var o = n.substring(l.length + 1);
                    delete k[o];
                }
            };
            e.exports = m;
        }, null);
        __d("insertIframe", ["GlobalCallback", "getBlankIframeSrc", "guid"], function(a, b, c, d, e, f, g, h, i) {
            function j(k) {
                k.id = k.id || i();
                k.name = k.name || i();
                var l = false, m = false, n = function() {
                    if (l&&!m) {
                        m = true;
                        k.onload && k.onload(k.root.firstChild);
                    }
                }, o = g.create(n);
                if (document.attachEvent) {
                    var p = ('<iframe' + ' id="' + k.id + '"' + ' name="' + k.name + '"' + (k.title ? ' title="' + k.title + '"' : '') + (k.className ? ' class="' + k.className + '"' : '') + ' style="border:none;' + (k.width ? 'width:' + k.width + 'px;' : '') + (k.height ? 'height:' + k.height + 'px;' : '') + '"' + ' src="' + h() + '"' + ' frameborder="0"' + ' scrolling="no"' + ' allowtransparency="true"' + ' onload="' + o + '()"' + '></iframe>');
                    k.root.innerHTML = ('<iframe src="' + h() + '"' + ' frameborder="0"' + ' scrolling="no"' + ' style="height:1px"></iframe>');
                    l = true;
                    setTimeout(function() {
                        k.root.innerHTML = p;
                        k.root.firstChild.src = k.url;
                        k.onInsert && k.onInsert(k.root.firstChild);
                    }, 0);
                } else {
                    var q = document.createElement('iframe');
                    q.id = k.id;
                    q.name = k.name;
                    q.onload = n;
                    q.scrolling = 'no';
                    q.style.border = 'none';
                    q.style.overflow = 'hidden';
                    if (k.title)
                        q.title = k.title;
                    if (k.className)
                        q.className = k.className;
                    if (k.height !== (void 0))
                        q.style.height = k.height + 'px';
                    if (k.width !== (void 0))
                        if (k.width == '100%') {
                            q.style.width = k.width;
                        } else 
                            q.style.width = k.width + 'px';
                    k.root.appendChild(q);
                    l = true;
                    q.src = k.url;
                    k.onInsert && k.onInsert(q);
                }
            }
            e.exports = j;
        }, null);
        __d("sdk.Impressions", ["sdk.Content", "Miny", "QueryString", "sdk.Runtime", "UrlMap", "getBlankIframeSrc", "guid", "insertIframe"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
            function o(q) {
                var r = j.getClientID();
                if (!q.api_key && r)
                    q.api_key = r;
                q.kid_directed_site = j.getKidDirectedSite();
                var s = k.resolve('www', true) + '/impression.php/' + m() + '/', t = i.appendToUrl(s, q);
                if (t.length > 2000)
                    if (q.payload && typeof q.payload === 'string') {
                        var u = h.encode(q.payload);
                        if (u && u.length < q.payload.length) {
                            q.payload = u;
                            t = i.appendToUrl(s, q);
                        }
                    }
                if (t.length <= 2000) {
                    var v = new Image();
                    v.src = t;
                } else {
                    var w = m(), x = g.appendHidden('');
                    n({
                        url: l(),
                        root: x,
                        name: w,
                        className: 'fb_hidden fb_invisible',
                        onload: function() {
                            x.parentNode.removeChild(x);
                        }
                    });
                    g.submitToTarget({
                        url: s,
                        target: w,
                        params: q
                    });
                }
            }
            var p = {
                log: function(q, r) {
                    if (!r.source)
                        r.source = 'jssdk';
                    o({
                        lid: q,
                        payload: ES('JSON', 'stringify', false, r)
                    });
                },
                impression: o
            };
            e.exports = p;
        }, null);
        __d("Base64", [], function(a, b, c, d, e, f) {
            var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            function h(l) {
                l = (l.charCodeAt(0)<<16) | (l.charCodeAt(1)<<8) | l.charCodeAt(2);
                return String.fromCharCode(g.charCodeAt(l>>>18), g.charCodeAt((l>>>12) & 63), g.charCodeAt((l>>>6) & 63), g.charCodeAt(l & 63));
            }
            var i = '>___?456789:;<=_______' + '\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31' + '______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';
            function j(l) {
                l = (i.charCodeAt(l.charCodeAt(0) - 43)<<18) | (i.charCodeAt(l.charCodeAt(1) - 43)<<12) | (i.charCodeAt(l.charCodeAt(2) - 43)<<6) | i.charCodeAt(l.charCodeAt(3) - 43);
                return String.fromCharCode(l>>>16, (l>>>8) & 255, l & 255);
            }
            var k = {
                encode: function(l) {
                    l = unescape(encodeURI(l));
                    var m = (l.length + 2)%3;
                    l = (l + '\0\0'.slice(m)).replace(/[\s\S]{3}/g, h);
                    return l.slice(0, l.length + m - 2) + '=='.slice(m);
                },
                decode: function(l) {
                    l = l.replace(/[^A-Za-z0-9+\/]/g, '');
                    var m = (l.length + 3) & 3;
                    l = (l + 'AAA'.slice(m)).replace(/..../g, j);
                    l = l.slice(0, l.length + m - 3);
                    try {
                        return decodeURIComponent(escape(l));
                    } catch (n) {
                        throw new Error('Not valid UTF-8');
                    }
                },
                encodeObject: function(l) {
                    return k.encode(ES('JSON', 'stringify', false, l));
                },
                decodeObject: function(l) {
                    return ES('JSON', 'parse', false, k.decode(l));
                },
                encodeNums: function(l) {
                    return String.fromCharCode.apply(String, ES(l, 'map', true, function(m) {
                        return g.charCodeAt((m|-(m > 63))&-(m > 0) & 63);
                    }));
                }
            };
            e.exports = k;
        }, null);
        __d("sdk.SignedRequest", ["Base64"], function(a, b, c, d, e, f, g) {
            function h(j) {
                if (!j)
                    return null;
                var k = j.split('.', 2)[1].replace(/\-/g, '+').replace(/\_/g, '/');
                return g.decodeObject(k);
            }
            var i = {
                parse: h
            };
            e.exports = i;
        }, null);
        __d("URIRFC3986", [], function(a, b, c, d, e, f) {
            var g = new RegExp('^' + '([^:/?#]+:)?' + '(//' + '([^\\\\/?#@]*@)?' + '(' + '\\[[A-Fa-f0-9:.]+\\]|' + '[^\\/?#:]*' + ')' + '(:[0-9]*)?' + ')?' + '([^?#]*)' + '(\\?[^#]*)?' + '(#.*)?'), h = {
                parse: function(i) {
                    if (ES(i, 'trim', true) === '')
                        return null;
                    var j = i.match(g), k = {};
                    k.uri = j[0] ? j[0] : null;
                    k.scheme = j[1] ? j[1].substr(0, j[1].length - 1) : null;
                    k.authority = j[2] ? j[2].substr(2) : null;
                    k.userinfo = j[3] ? j[3].substr(0, j[3].length - 1) : null;
                    k.host = j[2] ? j[4] : null;
                    k.port = j[5] ? (j[5].substr(1) ? parseInt(j[5].substr(1), 10) : null) : null;
                    k.path = j[6] ? j[6] : null;
                    k.query = j[7] ? j[7].substr(1) : null;
                    k.fragment = j[8] ? j[8].substr(1) : null;
                    k.isGenericURI = k.authority === null&&!!k.scheme;
                    return k;
                }
            };
            e.exports = h;
        }, null);
        __d("createObjectFrom", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                var j = {}, k = ES('Array', 'isArray', false, i);
                if (typeof i == 'undefined')
                    i = true;
                for (var l = h.length; l--;)
                    j[h[l]] = k ? i[l] : i;
                return j;
            }
            e.exports = g;
        }, null);
        __d("URISchemes", ["createObjectFrom"], function(a, b, c, d, e, f, g) {
            var h = g(['fb', 'fbcf', 'fbconnect', 'fb-messenger', 'fbrpc', 'file', 'ftp', 'http', 'https', 'mailto', 'ms-app', 'itms', 'itms-apps', 'itms-services', 'market', 'svn+ssh', 'fbstaging', 'tel', 'sms', 'pebblejs']), i = {
                isAllowed: function(j) {
                    if (!j)
                        return true;
                    return h.hasOwnProperty(j.toLowerCase());
                }
            };
            e.exports = i;
        }, null);
        __d("copyProperties", [], function(a, b, c, d, e, f) {
            function g(h, i, j, k, l, m, n) {
                h = h || {};
                var o = [i, j, k, l, m], p = 0, q;
                while (o[p]) {
                    q = o[p++];
                    for (var r in q)
                        h[r] = q[r];
                    if (q.hasOwnProperty && q.hasOwnProperty('toString') && (typeof q.toString != 'undefined') && (h.toString !== q.toString))
                        h.toString = q.toString;
                }
                return h;
            }
            e.exports = g;
        }, null);
        __d("URIBase", ["URIRFC3986", "URISchemes", "copyProperties", "ex", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l = new RegExp('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f' + '\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF' + '\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'), m = new RegExp('^(?:[^/]*:|' + '[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');
            function n(q, r, s, t) {
                if (!r)
                    return true;
                if (r instanceof p) {
                    q.setProtocol(r.getProtocol());
                    q.setDomain(r.getDomain());
                    q.setPort(r.getPort());
                    q.setPath(r.getPath());
                    q.setQueryData(t.deserialize(t.serialize(r.getQueryData())));
                    q.setFragment(r.getFragment());
                    q.setForceFragmentSeparator(r.getForceFragmentSeparator());
                    return true;
                }
                r = ES(r.toString(), 'trim', true);
                var u = g.parse(r) || {};
                if (!s&&!h.isAllowed(u.scheme))
                    return false;
                q.setProtocol(u.scheme || '');
                if (!s && l.test(u.host))
                    return false;
                q.setDomain(u.host || '');
                q.setPort(u.port || '');
                q.setPath(u.path || '');
                if (s) {
                    q.setQueryData(t.deserialize(u.query) || {});
                } else 
                    try {
                        q.setQueryData(t.deserialize(u.query) || {});
                } catch (v) {
                    return false;
                }
                q.setFragment(u.fragment || '');
                if (u.fragment === '')
                    q.setForceFragmentSeparator(true);
                if (u.userinfo !== null)
                    if (s) {
                        throw new Error(j('URI.parse: invalid URI (userinfo is not allowed in a URI): %s', q.toString()));
                    } else 
                        return false;
                if (!q.getDomain() && ES(q.getPath(), 'indexOf', true, '\\')!==-1)
                    if (s) {
                        throw new Error(j('URI.parse: invalid URI (no domain but multiple back-slashes): %s', q.toString()));
                    } else 
                        return false;
                if (!q.getProtocol() && m.test(r))
                    if (s) {
                        throw new Error(j('URI.parse: invalid URI (unsafe protocol-relative URLs): %s', q.toString()));
                    } else 
                        return false;
                return true;
            }
            var o = [];
            function p(q, r) {
                "use strict";
                k(r);
                this.$URIBase0 = r;
                this.$URIBase1 = '';
                this.$URIBase2 = '';
                this.$URIBase3 = '';
                this.$URIBase4 = '';
                this.$URIBase5 = '';
                this.$URIBase6 = {};
                this.$URIBase7 = false;
                n(this, q, true, r);
            }
            p.prototype.setProtocol = function(q) {
                "use strict";
                k(h.isAllowed(q));
                this.$URIBase1 = q;
                return this;
            };
            p.prototype.getProtocol = function(q) {
                "use strict";
                return this.$URIBase1;
            };
            p.prototype.setSecure = function(q) {
                "use strict";
                return this.setProtocol(q ? 'https' : 'http');
            };
            p.prototype.isSecure = function() {
                "use strict";
                return this.getProtocol() === 'https';
            };
            p.prototype.setDomain = function(q) {
                "use strict";
                if (l.test(q))
                    throw new Error(j('URI.setDomain: unsafe domain specified: %s for url %s', q, this.toString()));
                this.$URIBase2 = q;
                return this;
            };
            p.prototype.getDomain = function() {
                "use strict";
                return this.$URIBase2;
            };
            p.prototype.setPort = function(q) {
                "use strict";
                this.$URIBase3 = q;
                return this;
            };
            p.prototype.getPort = function() {
                "use strict";
                return this.$URIBase3;
            };
            p.prototype.setPath = function(q) {
                "use strict";
                this.$URIBase4 = q;
                return this;
            };
            p.prototype.getPath = function() {
                "use strict";
                return this.$URIBase4;
            };
            p.prototype.addQueryData = function(q, r) {
                "use strict";
                if (Object.prototype.toString.call(q) === '[object Object]') {
                    i(this.$URIBase6, q);
                } else 
                    this.$URIBase6[q] = r;
                return this;
            };
            p.prototype.setQueryData = function(q) {
                "use strict";
                this.$URIBase6 = q;
                return this;
            };
            p.prototype.getQueryData = function() {
                "use strict";
                return this.$URIBase6;
            };
            p.prototype.removeQueryData = function(q) {
                "use strict";
                if (!ES('Array', 'isArray', false, q))
                    q = [q];
                for (var r = 0, s = q.length; r < s; ++r)
                    delete this.$URIBase6[q[r]];
                return this;
            };
            p.prototype.setFragment = function(q) {
                "use strict";
                this.$URIBase5 = q;
                this.setForceFragmentSeparator(false);
                return this;
            };
            p.prototype.getFragment = function() {
                "use strict";
                return this.$URIBase5;
            };
            p.prototype.setForceFragmentSeparator = function(q) {
                "use strict";
                this.$URIBase7 = q;
                return this;
            };
            p.prototype.getForceFragmentSeparator = function() {
                "use strict";
                return this.$URIBase7;
            };
            p.prototype.isEmpty = function() {
                "use strict";
                return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || ES('Object', 'keys', false, this.getQueryData()).length > 0 || this.getFragment());
            };
            p.prototype.toString = function() {
                "use strict";
                var q = this;
                for (var r = 0; r < o.length; r++)
                    q = o[r](q);
                return q.$URIBase8();
            };
            p.prototype.$URIBase8 = function() {
                "use strict";
                var q = '', r = this.getProtocol();
                if (r)
                    q += r + '://';
                var s = this.getDomain();
                if (s)
                    q += s;
                var t = this.getPort();
                if (t)
                    q += ':' + t;
                var u = this.getPath();
                if (u) {
                    q += u;
                } else if (q)
                    q += '/';
                var v = this.$URIBase0.serialize(this.getQueryData());
                if (v)
                    q += '?' + v;
                var w = this.getFragment();
                if (w) {
                    q += '#' + w;
                } else if (this.getForceFragmentSeparator())
                    q += '#';
                return q;
            };
            p.registerFilter = function(q) {
                "use strict";
                o.push(q);
            };
            p.prototype.getOrigin = function() {
                "use strict";
                var q = this.getPort();
                return this.getProtocol() + '://' + this.getDomain() + (q ? ':' + q : '');
            };
            p.isValidURI = function(q, r) {
                return n(new p(null, r), q, false, r);
            };
            e.exports = p;
        }, null);
        __d("sdk.URI", ["Assert", "QueryString", "URIBase"], function(a, b, c, d, e, f, g, h, i) {
            var j = /\.facebook\.com$/, k = {
                serialize: function(o) {
                    return o ? h.encode(o) : '';
                },
                deserialize: function(o) {
                    return o ? h.decode(o) : {};
                }
            };
            for (var l in i)
                if (i.hasOwnProperty(l))
                    n[l] = i[l];
            var m = i === null ? null: i.prototype;
            n.prototype = ES('Object', 'create', false, m);
            n.prototype.constructor = n;
            n.__superConstructor__ = i;
            function n(o) {
                "use strict";
                g.isString(o, 'The passed argument was of invalid type.');
                if (!(this instanceof n))
                    return new n(o);
                i.call(this, o, k);
            }
            n.prototype.isFacebookURI = function() {
                "use strict";
                return j.test(this.getDomain());
            };
            n.prototype.valueOf = function() {
                "use strict";
                return this.toString();
            };
            e.exports = n;
        }, null);
        __d("sdk.Event", [], function(a, b, c, d, e, f) {
            var g = {
                SUBSCRIBE: 'event.subscribe',
                UNSUBSCRIBE: 'event.unsubscribe',
                subscribers: function() {
                    if (!this._subscribersMap)
                        this._subscribersMap = {};
                    return this._subscribersMap;
                },
                subscribe: function(h, i) {
                    var j = this.subscribers();
                    if (!j[h]) {
                        j[h] = [i];
                    } else if (ES(j[h], 'indexOf', true, i)==-1)
                        j[h].push(i);
                    if (h != this.SUBSCRIBE && h != this.UNSUBSCRIBE)
                        this.fire(this.SUBSCRIBE, h, j[h]);
                },
                unsubscribe: function(h, i) {
                    var j = this.subscribers()[h];
                    if (j)
                        ES(j, 'forEach', true, function(k, l) {
                            if (k == i)
                                j.splice(l, 1);
                            });
                    if (h != this.SUBSCRIBE && h != this.UNSUBSCRIBE)
                        this.fire(this.UNSUBSCRIBE, h, j);
                },
                monitor: function(h, i) {
                    if (!i()) {
                        var j = this, k = function() {
                            if (i.apply(i, arguments))
                                j.unsubscribe(h, k);
                        };
                        this.subscribe(h, k);
                    }
                },
                clear: function(h) {
                    delete this.subscribers()[h];
                },
                fire: function(h) {
                    var i = Array.prototype.slice.call(arguments, 1), j = this.subscribers()[h];
                    if (j)
                        ES(j, 'forEach', true, function(k) {
                            if (k)
                                k.apply(this, i);
                            });
                }
            };
            e.exports = g;
        }, null);
        __d("Queue", ["copyProperties"], function(a, b, c, d, e, f, g) {
            var h = {};
            function i(j) {
                "use strict";
                this._opts = g({
                    interval: 0,
                    processor: null
                }, j);
                this._queue = [];
                this._stopped = true;
            }
            i.prototype._dispatch = function(j) {
                "use strict";
                if (this._stopped || this._queue.length === 0)
                    return;
                if (!this._opts.processor) {
                    this._stopped = true;
                    throw new Error('No processor available');
                }
                if (this._opts.interval) {
                    this._opts.processor.call(this, this._queue.shift());
                    this._timeout = setTimeout(ES(this._dispatch, 'bind', true, this), this._opts.interval);
                } else 
                    while (this._queue.length)
                        this._opts.processor.call(this, this._queue.shift());
            };
            i.prototype.enqueue = function(j) {
                "use strict";
                if (this._opts.processor&&!this._stopped) {
                    this._opts.processor.call(this, j);
                } else 
                    this._queue.push(j);
                return this;
            };
            i.prototype.start = function(j) {
                "use strict";
                if (j)
                    this._opts.processor = j;
                this._stopped = false;
                this._dispatch();
                return this;
            };
            i.prototype.isStarted = function() {
                "use strict";
                return !this._stopped;
            };
            i.prototype.dispatch = function() {
                "use strict";
                this._dispatch(true);
            };
            i.prototype.stop = function(j) {
                "use strict";
                this._stopped = true;
                if (j)
                    clearTimeout(this._timeout);
                return this;
            };
            i.prototype.merge = function(j, k) {
                "use strict";
                this._queue[k ? 'unshift': 'push'].apply(this._queue, j._queue);
                j._queue = [];
                this._dispatch();
                return this;
            };
            i.prototype.getLength = function() {
                "use strict";
                return this._queue.length;
            };
            i.get = function(j, k) {
                "use strict";
                var l;
                if (j in h) {
                    l = h[j];
                } else 
                    l = h[j] = new i(k);
                return l;
            };
            i.exists = function(j) {
                "use strict";
                return j in h;
            };
            i.remove = function(j) {
                "use strict";
                return delete h[j];
            };
            e.exports = i;
        }, null);
        __d("JSONRPC", ["Log"], function(a, b, c, d, e, f, g) {
            function h(i) {
                "use strict";
                this.$JSONRPC0 = 0;
                this.$JSONRPC1 = {};
                this.remote = ES(function(j) {
                    this.$JSONRPC2 = j;
                    return this.remote;
                }, 'bind', true, this);
                this.local = {};
                this.$JSONRPC3 = i;
            }
            h.prototype.stub = function(i) {
                "use strict";
                this.remote[i] = ES(function() {
                    for (var j = [], k = 0, l = arguments.length; k < l; k++)
                        j.push(arguments[k]);
                    var m = {
                        jsonrpc: '2.0',
                        method: i
                    };
                    if (typeof j[j.length - 1] == 'function') {
                        m.id=++this.$JSONRPC0;
                        this.$JSONRPC1[m.id] = j.pop();
                    }
                    m.params = j;
                    this.$JSONRPC3(ES('JSON', 'stringify', false, m), this.$JSONRPC2 || {
                        method: i
                    });
                }, 'bind', true, this);
            };
            h.prototype.read = function(i, j) {
                "use strict";
                var k = ES('JSON', 'parse', false, i), l = k.id;
                if (!k.method) {
                    if (!this.$JSONRPC1[l]) {
                        g.warn('Could not find callback %s', l);
                        return;
                    }
                    var m = this.$JSONRPC1[l];
                    delete this.$JSONRPC1[l];
                    delete k.id;
                    delete k.jsonrpc;
                    m(k);
                    return;
                }
                var n = this, o = this.local[k.method], p;
                if (l) {
                    p = function(s, t) {
                        var u = {
                            jsonrpc: '2.0',
                            id: l
                        };
                        u[s] = t;
                        setTimeout(function() {
                            n.$JSONRPC3(ES('JSON', 'stringify', false, u), j);
                        }, 0);
                    };
                } else 
                    p = function() {};
                if (!o) {
                    g.error('Method "%s" has not been defined', k.method);
                    p('error', {
                        code: - 32601,
                        message: 'Method not found',
                        data: k.method
                    });
                    return;
                }
                k.params.push(ES(p, 'bind', true, null, 'result'));
                k.params.push(ES(p, 'bind', true, null, 'error'));
                try {
                    var r = o.apply(j || null, k.params);
                    if (typeof r !== 'undefined')
                        p('result', r);
                } catch (q) {
                    g.error('Invokation of RPC method %s resulted in the error: %s', k.method, q.message);
                    p('error', {
                        code: - 32603,
                        message: 'Internal error',
                        data: q.message
                    });
                }
            };
            e.exports = h;
        }, null);
        __d("sdk.RPC", ["Assert", "JSONRPC", "Queue"], function(a, b, c, d, e, f, g, h, i) {
            var j = new i(), k = new h(function(m) {
                j.enqueue(m);
            }), l = {
                local: k.local,
                remote: k.remote,
                stub: ES(k.stub, 'bind', true, k),
                setInQueue: function(m) {
                    g.isInstanceOf(i, m);
                    m.start(function(n) {
                        k.read(n);
                    });
                },
                getOutQueue: function() {
                    return j;
                }
            };
            e.exports = l;
        }, null);
        __d("sdk.Scribe", ["QueryString", "sdk.Runtime", "UrlMap"], function(a, b, c, d, e, f, g, h, i) {
            function j(l, m) {
                if (typeof m.extra == 'object')
                    m.extra.revision = h.getRevision();
                (new Image()).src = g.appendToUrl(i.resolve('www', true) + '/common/scribe_endpoint.php', {
                    c: l,
                    m: ES('JSON', 'stringify', false, m)
                });
            }
            var k = {
                log: j
            };
            e.exports = k;
        }, null);
        __d("emptyFunction", [], function(a, b, c, d, e, f) {
            function g(i) {
                return function() {
                    return i;
                };
            }
            function h() {}
            h.thatReturns = g;
            h.thatReturnsFalse = g(false);
            h.thatReturnsTrue = g(true);
            h.thatReturnsNull = g(null);
            h.thatReturnsThis = function() {
                return this;
            };
            h.thatReturnsArgument = function(i) {
                return i;
            };
            e.exports = h;
        }, null);
        __d("htmlSpecialChars", [], function(a, b, c, d, e, f) {
            var g = /&/g, h = /</g, i = />/g, j = /"/g, k = /'/g;
            function l(m) {
                if (typeof m == 'undefined' || m === null ||!m.toString)
                    return '';
                if (m === false) {
                    return '0';
                } else if (m === true)
                    return '1';
                return m.toString().replace(g, '&amp;').replace(j, '&quot;').replace(k, '&#039;').replace(h, '&lt;').replace(i, '&gt;');
            }
            e.exports = l;
        }, null);
        __d("Flash", ["DOMEventListener", "DOMWrapper", "QueryString", "UserAgent_DEPRECATED", "copyProperties", "guid", "htmlSpecialChars"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = {}, o, p = h.getWindow().document;
            function q(v) {
                var w = p.getElementById(v);
                if (w)
                    w.parentNode.removeChild(w);
                delete n[v];
            }
            function r() {
                for (var v in n)
                    if (n.hasOwnProperty(v))
                        q(v);
            }
            function s(v) {
                return v.replace(/\d+/g, function(w) {
                    return '000'.substring(w.length) + w;
                });
            }
            function t(v) {
                if (!o) {
                    if (j.ie() >= 9)
                        g.add(window, 'unload', r);
                    o = true;
                }
                n[v] = v;
            }
            var u = {
                embed: function(v, w, x, y) {
                    var z = l();
                    v = m(v).replace(/&amp;/g, '&');
                    x = k({
                        allowscriptaccess: 'always',
                        flashvars: y,
                        movie: v
                    }, x || {});
                    if (typeof x.flashvars == 'object')
                        x.flashvars = i.encode(x.flashvars);
                    var aa = [];
                    for (var ba in x)
                        if (x.hasOwnProperty(ba) && x[ba])
                            aa.push('<param name="' + m(ba) + '" value="' + m(x[ba]) + '">');
                    var ca = w.appendChild(p.createElement('span')), da = '<object ' + (j.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + v + '" ' + (x.height ? 'height="' + x.height + '" ' : '') + (x.width ? 'width="' + x.width + '" ' : '') + 'id="' + z + '">' + aa.join('') + '</object>';
                    ca.innerHTML = da;
                    var ea = ca.firstChild;
                    t(z);
                    return ea;
                },
                remove: q,
                getVersion: function() {
                    var v = 'Shockwave Flash', w = 'application/x-shockwave-flash', x = 'ShockwaveFlash.ShockwaveFlash', y;
                    if (navigator.plugins && typeof navigator.plugins[v] == 'object') {
                        var z = navigator.plugins[v].description;
                        if (z && navigator.mimeTypes && navigator.mimeTypes[w] && navigator.mimeTypes[w].enabledPlugin)
                            y = z.match(/\d+/g);
                    }
                    if (!y)
                        try {
                            y = (new ActiveXObject(x)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);
                            y = Array.prototype.slice.call(y, 1);
                    } catch (aa) {}
                    return y;
                },
                checkMinVersion: function(v) {
                    var w = u.getVersion();
                    if (!w)
                        return false;
                    return s(w.join('.')) >= s(v);
                },
                isAvailable: function() {
                    return !!u.getVersion();
                }
            };
            e.exports = u;
        }, null);
        __d("XDM", ["DOMEventListener", "DOMWrapper", "emptyFunction", "Flash", "GlobalCallback", "guid", "Log", "UserAgent_DEPRECATED", "wrapFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            var p = {}, q = {
                transports: []
            }, r = h.getWindow();
            function s(u) {
                var v = {}, w = u.length, x = q.transports;
                while (w--)
                    v[u[w]] = 1;
                w = x.length;
                while (w--) {
                    var y = x[w], z = p[y];
                    if (!v[y] && z.isAvailable())
                        return y;
                }
            }
            var t = {
                register: function(u, v) {
                    m.debug('Registering %s as XDM provider', u);
                    q.transports.push(u);
                    p[u] = v;
                },
                create: function(u) {
                    if (!u.whenReady&&!u.onMessage) {
                        m.error('An instance without whenReady or onMessage makes no sense');
                        throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                    }
                    if (!u.channel) {
                        m.warn('Missing channel name, selecting at random');
                        u.channel = l();
                    }
                    if (!u.whenReady)
                        u.whenReady = i;
                    if (!u.onMessage)
                        u.onMessage = i;
                    var v = u.transport || s(u.blacklist || []), w = p[v];
                    if (w && w.isAvailable()) {
                        m.debug('%s is available', v);
                        w.init(u);
                        return v;
                    }
                }
            };
            t.register('flash', (function() {
                var u = false, v, w = false, x = 15000, y;
                return {
                    isAvailable: function() {
                        return j.checkMinVersion('8.0.24');
                    },
                    init: function(z) {
                        m.debug('init flash: ' + z.channel);
                        var aa = {
                            send: function(da, ea, fa, ga) {
                                m.debug('sending to: %s (%s)', ea, ga);
                                v.postMessage(da, ea, ga);
                            }
                        };
                        if (u) {
                            z.whenReady(aa);
                            return;
                        }
                        var ba = z.root.appendChild(r.document.createElement('div')), ca = k.create(function() {
                            k.remove(ca);
                            clearTimeout(y);
                            m.info('xdm.swf called the callback');
                            var da = k.create(function(ea, fa) {
                                ea = decodeURIComponent(ea);
                                fa = decodeURIComponent(fa);
                                m.debug('received message %s from %s', ea, fa);
                                z.onMessage(ea, fa);
                            }, 'xdm.swf:onMessage');
                            v.init(z.channel, da);
                            z.whenReady(aa);
                        }, 'xdm.swf:load');
                        v = j.embed(z.flashUrl, ba, null, {
                            protocol: location.protocol.replace(':', ''),
                            host: location.host,
                            callback: ca,
                            log: w
                        });
                        y = setTimeout(function() {
                            m.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', x);
                        }, x);
                        u = true;
                    }
                };
            })());
            t.register('postmessage', (function() {
                var u = false;
                return {
                    isAvailable: function() {
                        return !!r.postMessage;
                    },
                    init: function(v) {
                        m.debug('init postMessage: ' + v.channel);
                        var w = '_FB_' + v.channel, x = {
                            send: function(y, z, aa, ba) {
                                if (r === aa) {
                                    m.error('Invalid windowref, equal to window (self)');
                                    throw new Error();
                                }
                                m.debug('sending to: %s (%s)', z, ba);
                                var ca = function() {
                                    aa.postMessage('_FB_' + ba + y, z);
                                };
                                if (n.ie() == 8 || n.ieCompatibilityMode()) {
                                    setTimeout(ca, 0);
                                } else 
                                    ca();
                            }
                        };
                        if (u) {
                            v.whenReady(x);
                            return;
                        }
                        g.add(r, 'message', o(function(event) {
                            var y = event.data, z = event.origin || 'native';
                            if (!/^(https?:\/\/|native$)/.test(z)) {
                                m.debug('Received message from invalid origin type: %s', z);
                                return;
                            }
                            if (typeof y != 'string') {
                                m.warn('Received message of type %s from %s, expected a string', typeof y, z);
                                return;
                            }
                            m.debug('received message %s from %s', y, z);
                            if (y.substring(0, w.length) == w)
                                y = y.substring(w.length);
                            v.onMessage(y, z);
                        }, 'entry', 'onMessage'));
                        v.whenReady(x);
                        u = true;
                    }
                };
            })());
            e.exports = t;
        }, null);
        __d("isFacebookURI", [], function(a, b, c, d, e, f) {
            var g = null, h = ['http', 'https'];
            function i(j) {
                if (!g)
                    g = new RegExp('(^|\\.)facebook\\.com$', 'i');
                if (j.isEmpty() && j.toString() !== '#')
                    return false;
                if (!j.getDomain()&&!j.getProtocol())
                    return true;
                return (ES(h, 'indexOf', true, j.getProtocol())!==-1 && g.test(j.getDomain()));
            }
            i.setRegex = function(j) {
                g = j;
            };
            e.exports = i;
        }, null);
        __d("sdk.XD", ["sdk.Content", "sdk.Event", "Log", "QueryString", "Queue", "sdk.RPC", "sdk.Runtime", "sdk.Scribe", "sdk.URI", "UrlMap", "JSSDKXDConfig", "XDM", "isFacebookURI", "sdk.createIframe", "sdk.feature", "guid"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
            var w = new k(), x = new k(), y = new k(), z, aa, ba = v(), ca = q.useCdn ? 'cdn': 'www', da = u('use_bundle', false) ? q.XdBundleUrl: q.XdUrl, ea = p.resolve(ca, false) + da, fa = p.resolve(ca, true) + da, ga = v(), ha = location.protocol + '//' + location.host, ia, ja = false, ka = 'Facebook Cross Domain Communication Frame', la = {}, ma = new k();
            l.setInQueue(ma);
            function na(ta) {
                i.info('Remote XD can talk to facebook.com (%s)', ta);
                m.setEnvironment(ta === 'canvas' ? m.ENVIRONMENTS.CANVAS : m.ENVIRONMENTS.PAGETAB);
            }
            function oa(ta, ua) {
                if (!ua) {
                    i.error('No senderOrigin');
                    throw new Error();
                }
                var va = /^https?/.exec(ua)[0];
                switch (ta.xd_action) {
                case 'proxy_ready':
                    var wa, xa;
                    if (va == 'https') {
                        wa = y;
                        xa = aa;
                    } else {
                        wa = x;
                        xa = z;
                    }
                    if (ta.registered) {
                        na(ta.registered);
                        w = wa.merge(w);
                    }
                    i.info('Proxy ready, starting queue %s containing %s messages', va + 'ProxyQueue', wa.getLength());
                    wa.start(function(za) {
                        ia.send(typeof za === 'string' ? za : j.encode(za), ua, xa.contentWindow, ga + '_' + va);
                    });
                    break;
                case 'plugin_ready':
                    i.info('Plugin %s ready, protocol: %s', ta.name, va);
                    la[ta.name] = {
                        protocol: va
                    };
                    if (k.exists(ta.name)) {
                        var ya = k.get(ta.name);
                        i.debug('Enqueuing %s messages for %s in %s', ya.getLength(), ta.name, va + 'ProxyQueue');
                        (va == 'https' ? y : x).merge(ya);
                    }
                    break;
                }
                if (ta.data)
                    pa(ta.data, ua);
            }
            function pa(ta, ua) {
                if (ua && ua !== 'native'&&!s(o(ua)))
                    return;
                if (typeof ta == 'string') {
                    if (/^FB_RPC:/.test(ta)) {
                        ma.enqueue(ta.substring(7));
                        return;
                    }
                    if (ta.substring(0, 1) == '{') {
                        try {
                            ta = ES('JSON', 'parse', false, ta);
                        } catch (va) {
                            i.warn('Failed to decode %s as JSON', ta);
                            return;
                        }
                    } else 
                        ta = j.decode(ta);
                }
                if (!ua)
                    if (ta.xd_sig == ba)
                        ua = ta.xd_origin;
                if (ta.xd_action) {
                    oa(ta, ua);
                    return;
                }
                if (ta.access_token)
                    m.setSecure(/^https/.test(ha));
                if (ta.cb) {
                    var wa = sa._callbacks[ta.cb];
                    if (!sa._forever[ta.cb])
                        delete sa._callbacks[ta.cb];
                    if (wa)
                        wa(ta);
                }
            }
            function qa(ta, ua) {
                if (ta == 'facebook') {
                    ua.relation = 'parent.parent';
                    w.enqueue(ua);
                } else {
                    ua.relation = 'parent.frames["' + ta + '"]';
                    var va = la[ta];
                    if (va) {
                        i.debug('Enqueuing message for plugin %s in %s', ta, va.protocol + 'ProxyQueue');
                        (va.protocol == 'https' ? y : x).enqueue(ua);
                    } else {
                        i.debug('Buffering message for plugin %s', ta);
                        k.get(ta).enqueue(ua);
                    }
                }
            }
            l.getOutQueue().start(function(ta) {
                qa('facebook', 'FB_RPC:' + ta);
            });
            function ra(ta) {
                if (ja)
                    return;
                var ua = g.appendHidden(document.createElement('div')), va = r.create({
                    blacklist: null,
                    root: ua,
                    channel: ga,
                    flashUrl: q.Flash.path,
                    whenReady: function(wa) {
                        ia = wa;
                        var xa = {
                            channel: ga,
                            origin: location.protocol + '//' + location.host,
                            transport: va,
                            xd_name: ta
                        }, ya = '#' + j.encode(xa);
                        if (m.getSecure() !== true)
                            z = t({
                                url: ea + ya,
                                name: 'fb_xdm_frame_http',
                                id: 'fb_xdm_frame_http',
                                root: ua,
                                'aria-hidden': true,
                                title: ka,
                                tabindex: - 1
                            });
                        aa = t({
                            url: fa + ya,
                            name: 'fb_xdm_frame_https',
                            id: 'fb_xdm_frame_https',
                            root: ua,
                            'aria-hidden': true,
                            title: ka,
                            tabindex: - 1
                        });
                    },
                    onMessage: pa
                });
                if (!va)
                    n.log('jssdk_error', {
                        appId: m.getClientID(),
                        error: 'XD_TRANSPORT',
                        extra: {
                            message: 'Failed to create a valid transport'
                        }
                    });
                ja = true;
            }
            var sa = {
                rpc: l,
                _callbacks: {},
                _forever: {},
                _channel: ga,
                _origin: ha,
                onMessage: pa,
                recv: pa,
                init: ra,
                sendToFacebook: qa,
                inform: function(ta, ua, va, wa) {
                    qa('facebook', {
                        method: ta,
                        params: ES('JSON', 'stringify', false, ua || {}),
                        behavior: wa || 'p',
                        relation: va
                    });
                },
                handler: function(ta, ua, va, wa) {
                    var xa = '#' + j.encode({
                        cb: this.registerCallback(ta, va, wa),
                        origin: ha + '/' + ga,
                        domain: location.hostname,
                        relation: ua || 'opener'
                    });
                    return (location.protocol == 'https:' ? fa : ea) + xa;
                },
                registerCallback: function(ta, ua, va) {
                    va = va || v();
                    if (ua)
                        sa._forever[va] = true;
                    sa._callbacks[va] = ta;
                    return va;
                }
            };
            h.subscribe('init:post', function(ta) {
                ra(ta.xdProxyName);
                var ua = u('xd_timeout', false);
                if (ua)
                    setTimeout(function() {
                        var va = aa && (!!z == x.isStarted()&&!!aa == y.isStarted());
                        if (!va)
                            n.log('jssdk_error', {
                                appId: m.getClientID(),
                                error: 'XD_INITIALIZATION',
                                extra: {
                                    message: 'Failed to initialize in ' + ua + 'ms'
                                }
                            });
                        }, ua);
            });
            e.exports = sa;
        }, null);
        __d("sdk.Auth", ["sdk.Cookie", "sdk.createIframe", "DOMWrapper", "sdk.feature", "sdk.getContextType", "guid", "sdk.Impressions", "Log", "ObservableMixin", "sdk.Runtime", "sdk.SignedRequest", "UrlMap", "sdk.URI", "sdk.XD"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
            var u, v, w = new o();
            function x(da, ea) {
                var fa = p.getUserID(), ga = '';
                if (da)
                    if (da.userID) {
                        ga = da.userID;
                    } else if (da.signedRequest) {
                        var ha = q.parse(da.signedRequest);
                        if (ha && ha.user_id)
                            ga = ha.user_id;
                    }
                var ia = p.getLoginStatus(), ja = (ia === 'unknown' && da) || (p.getUseCookie() && p.getCookieUserID() !== ga), ka = fa&&!da, la = da && fa && fa != ga, ma = da != u, na = ea != (ia || 'unknown');
                p.setLoginStatus(ea);
                p.setAccessToken(da && da.accessToken || null);
                p.setUserID(ga);
                u = da;
                var oa = {
                    authResponse: da,
                    status: ea
                };
                if (ka || la)
                    w.inform('logout', oa);
                if (ja || la)
                    w.inform('login', oa);
                if (ma)
                    w.inform('authresponse.change', oa);
                if (na)
                    w.inform('status.change', oa);
                return oa;
            }
            function y() {
                return u;
            }
            function z(da, ea, fa) {
                return function(ga) {
                    var ha;
                    if (ga && ga.access_token) {
                        var ia = q.parse(ga.signed_request);
                        ea = {
                            accessToken: ga.access_token,
                            userID: ia.user_id,
                            expiresIn: parseInt(ga.expires_in, 10),
                            signedRequest: ga.signed_request
                        };
                        if (ga.granted_scopes)
                            ea.grantedScopes = ga.granted_scopes;
                        if (p.getUseCookie()) {
                            var ja = ea.expiresIn === 0 ? 0: ES('Date', 'now', false) + ea.expiresIn * 1000, ka = g.getDomain();
                            if (!ka && ga.base_domain)
                                g.setDomain('.' + ga.base_domain);
                            g.setSignedRequestCookie(ga.signed_request, ja);
                        }
                        ha = 'connected';
                        x(ea, ha);
                    } else if (fa === 'logout' || fa === 'login_status') {
                        if (ga.error && ga.error === 'not_authorized') {
                            ha = 'not_authorized';
                        } else 
                            ha = 'unknown';
                        x(null, ha);
                        if (p.getUseCookie())
                            g.clearSignedRequestCookie();
                    }
                    if (ga && ga.https == 1)
                        p.setSecure(true);
                    if (da)
                        da({
                            authResponse: ea,
                            status: p.getLoginStatus()
                        });
                    return ea;
                };
            }
            function aa(da) {
                var ea, fa = ES('Date', 'now', false);
                if (v) {
                    clearTimeout(v);
                    v = null;
                }
                var ga = z(da, u, 'login_status'), ha = s(r.resolve('www', true) + '/connect/ping').setQueryData({
                    client_id: p.getClientID(),
                    response_type: 'token,signed_request,code',
                    domain: location.hostname,
                    origin: k(),
                    redirect_uri: t.handler(function(ia) {
                        if (j('e2e_ping_tracking', true)) {
                            var ja = {
                                init: fa,
                                close: ES('Date', 'now', false),
                                method: 'ping'
                            };
                            n.debug('e2e: %s', ES('JSON', 'stringify', false, ja));
                            m.log(114, {
                                payload: ja
                            });
                        }
                        ea.parentNode.removeChild(ea);
                        if (ga(ia))
                            v = setTimeout(function() {
                                aa(function() {});
                            }, 1200000);
                    }, 'parent'),
                    sdk: 'joey',
                    kid_directed_site: p.getKidDirectedSite()
                });
                ea = h({
                    root: i.getRoot(),
                    name: l(),
                    url: ha.toString(),
                    style: {
                        display: 'none'
                    }
                });
            }
            var ba;
            function ca(da, ea) {
                if (!p.getClientID()) {
                    n.warn('FB.getLoginStatus() called before calling FB.init().');
                    return;
                }
                if (da)
                    if (!ea && ba == 'loaded') {
                        da({
                            status: p.getLoginStatus(),
                            authResponse: y()
                        });
                        return;
                    } else 
                        w.subscribe('FB.loginStatus', da);
                if (!ea && ba == 'loading')
                    return;
                ba = 'loading';
                var fa = function(ga) {
                    ba = 'loaded';
                    w.inform('FB.loginStatus', ga);
                    w.clearSubscribers('FB.loginStatus');
                };
                aa(fa);
            }
            ES('Object', 'assign', false, w, {
                getLoginStatus: ca,
                fetchLoginStatus: aa,
                setAuthResponse: x,
                getAuthResponse: y,
                parseSignedRequest: q.parse,
                xdResponseWrapper: z
            });
            e.exports = w;
        }, null);
        __d("toArray", ["invariant"], function(a, b, c, d, e, f, g) {
            function h(i) {
                var j = i.length;
                g(!ES('Array', 'isArray', false, i) && (typeof i === 'object' || typeof i === 'function'));
                g(typeof j === 'number');
                g(j === 0 || (j - 1) in i);
                if (i.hasOwnProperty)
                    try {
                        return Array.prototype.slice.call(i);
                } catch (k) {}
                var l = Array(j);
                for (var m = 0; m < j; m++)
                    l[m] = i[m];
                return l;
            }
            e.exports = h;
        }, null);
        __d("createArrayFromMixed", ["toArray"], function(a, b, c, d, e, f, g) {
            function h(j) {
                return (!!j && (typeof j == 'object' || typeof j == 'function') && ('length' in j)&&!('setInterval' in j) && (typeof j.nodeType != 'number') && (ES('Array', 'isArray', false, j) || ('callee' in j) || ('item' in j)));
            }
            function i(j) {
                if (!h(j)) {
                    return [j];
                } else if (ES('Array', 'isArray', false, j)) {
                    return j.slice();
                } else 
                    return g(j);
            }
            e.exports = i;
        }, null);
        __d("sdk.DOM", ["Assert", "sdk.UA", "createArrayFromMixed", "sdk.domReady"], function(a, b, c, d, e, f, g, h, i, j) {
            var k = {};
            function l(z, aa) {
                var ba = (z.getAttribute(aa) || z.getAttribute(aa.replace(/_/g, '-')) || z.getAttribute(aa.replace(/-/g, '_')) || z.getAttribute(aa.replace(/-/g, '')) || z.getAttribute(aa.replace(/_/g, '')) || z.getAttribute('data-' + aa) || z.getAttribute('data-' + aa.replace(/_/g, '-')) || z.getAttribute('data-' + aa.replace(/-/g, '_')) || z.getAttribute('data-' + aa.replace(/-/g, '')) || z.getAttribute('data-' + aa.replace(/_/g, '')));
                return ba ? String(ba) : null;
            }
            function m(z, aa) {
                var ba = l(z, aa);
                return ba ? /^(true|1|yes|on)$/.test(ba) : null;
            }
            function n(z, aa) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                try {
                    return String(z[aa]);
                } catch (ba) {
                    throw new Error('Could not read property ' + aa + ' : ' + ba.message);
                }
            }
            function o(z, aa) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                try {
                    z.innerHTML = aa;
                } catch (ba) {
                    throw new Error('Could not set innerHTML : ' + ba.message);
                }
            }
            function p(z, aa) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                var ba = ' ' + n(z, 'className') + ' ';
                return ES(ba, 'indexOf', true, ' ' + aa + ' ') >= 0;
            }
            function q(z, aa) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                if (!p(z, aa))
                    z.className = n(z, 'className') + ' ' + aa;
            }
            function r(z, aa) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                var ba = new RegExp('\\s*' + aa, 'g');
                z.className = ES(n(z, 'className').replace(ba, ''), 'trim', true);
            }
            function s(z, aa, ba) {
                g.isString(z);
                aa = aa || document.body;
                ba = ba || '*';
                if (aa.querySelectorAll)
                    return i(aa.querySelectorAll(ba + '.' + z));
                var ca = aa.getElementsByTagName(ba), da = [];
                for (var ea = 0, fa = ca.length; ea < fa; ea++)
                    if (p(ca[ea], z))
                        da[da.length] = ca[ea];
                return da;
            }
            function t(z, aa) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                aa = aa.replace(/-(\w)/g, function(da, ea) {
                    return ea.toUpperCase();
                });
                var ba = z.currentStyle || document.defaultView.getComputedStyle(z, null), ca = ba[aa];
                if (/backgroundPosition?/.test(aa) && /top|left/.test(ca))
                    ca = '0%';
                return ca;
            }
            function u(z, aa, ba) {
                g.isTruthy(z, 'element not specified');
                g.isString(aa);
                aa = aa.replace(/-(\w)/g, function(ca, da) {
                    return da.toUpperCase();
                });
                z.style[aa] = ba;
            }
            function v(z, aa) {
                var ba = true;
                for (var ca = 0, da; da = aa[ca++];)
                    if (!(da in k)) {
                        ba = false;
                        k[da] = true;
                    }
                if (ba)
                    return;
                if (h.ie() < 11) {
                    try {
                        document.createStyleSheet().cssText = z;
                    } catch (ea) {
                        if (document.styleSheets[0])
                            document.styleSheets[0].cssText += z;
                    }
                } else {
                    var fa = document.createElement('style');
                    fa.type = 'text/css';
                    fa.textContent = z;
                    document.getElementsByTagName('head')[0].appendChild(fa);
                }
            }
            function w() {
                var z = (document.documentElement && document.compatMode == 'CSS1Compat') ? document.documentElement: document.body;
                return {
                    scrollTop: z.scrollTop || document.body.scrollTop,
                    scrollLeft: z.scrollLeft || document.body.scrollLeft,
                    width: window.innerWidth ? window.innerWidth: z.clientWidth,
                    height: window.innerHeight ? window.innerHeight: z.clientHeight
                };
            }
            function x(z) {
                g.isTruthy(z, 'element not specified');
                var aa = 0, ba = 0;
                do {
                    aa += z.offsetLeft;
                    ba += z.offsetTop;
                }
                while (z = z.offsetParent);
                return {
                    x: aa,
                    y: ba
                };
            }
            var y = {
                containsCss: p,
                addCss: q,
                removeCss: r,
                getByClass: s,
                getStyle: t,
                setStyle: u,
                getAttr: l,
                getBoolAttr: m,
                getProp: n,
                html: o,
                addCssRules: v,
                getViewportInfo: w,
                getPosition: x,
                ready: j
            };
            e.exports = y;
        }, null);
        __d("sdk.ErrorHandling", ["ManagedError", "sdk.Runtime", "sdk.Scribe", "sdk.UA", "sdk.feature", "wrapFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
            var m = k('error_handling', false), n = '';
            function o(u) {
                var v = u._originalError;
                delete u._originalError;
                i.log('jssdk_error', {
                    appId: h.getClientID(),
                    error: u.name || u.message,
                    extra: u
                });
                throw v;
            }
            function p(u) {
                var v = {
                    line: u.lineNumber || u.line,
                    message: u.message,
                    name: u.name,
                    script: u.fileName || u.sourceURL || u.script,
                    stack: u.stackTrace || u.stack
                };
                v._originalError = u;
                if (j.chrome() && /([\w:\.\/]+\.js):(\d+)/.test(u.stack)) {
                    v.script = RegExp.$1;
                    v.line = parseInt(RegExp.$2, 10);
                }
                for (var w in v)(v[w] == null && delete v[w]);
                return v;
            }
            function q(u, v) {
                return function() {
                    if (!m)
                        return u.apply(this, arguments);
                    try {
                        n = v;
                        return u.apply(this, arguments);
                    } catch (w) {
                        if (w instanceof g)
                            throw w;
                        var x = p(w);
                        x.entry = v;
                        var y = ES(Array.prototype.slice.call(arguments), 'map', true, function(z) {
                            var aa = Object.prototype.toString.call(z);
                            return (/^\[object (String|Number|Boolean|Object|Date)\]$/).test(aa) ? z : z.toString();
                        });
                        x.args = ES('JSON', 'stringify', false, y).substring(0, 200);
                        o(x);
                    } finally {
                        n = '';
                    }
                };
            }
            function r(u) {
                if (!u.__wrapper)
                    u.__wrapper = function() {
                        try {
                            return u.apply(this, arguments);
                        } catch (v) {
                            window.setTimeout(function() {
                                throw v;
                            }, 0);
                            return false;
                        }
                    };
                return u.__wrapper;
            }
            function s(u, v) {
                return function(w, x) {
                    var y = v + ':' + (n || '[global]') + ':' + (w.name || '[anonymous]' + (arguments.callee.caller.name ? '(' + arguments.callee.caller.name + ')' : ''));
                    return u(l(w, 'entry', y), x);
                };
            }
            if (m) {
                setTimeout = s(setTimeout, 'setTimeout');
                setInterval = s(setInterval, 'setInterval');
                l.setWrapper(q, 'entry');
            }
            var t = {
                guard: q,
                unguard: r
            };
            e.exports = t;
        }, null);
        __d("sdk.Insights", ["sdk.Impressions"], function(a, b, c, d, e, f, g) {
            var h = {
                TYPE: {
                    NOTICE: 'notice',
                    WARNING: 'warn',
                    ERROR: 'error'
                },
                CATEGORY: {
                    DEPRECATED: 'deprecated',
                    APIERROR: 'apierror'
                },
                log: function(i, j, k) {
                    var l = {
                        source: 'jssdk',
                        type: i,
                        category: j,
                        payload: k
                    };
                    g.log(113, l);
                },
                impression: g.impression
            };
            e.exports = h;
        }, null);
        __d("FB", ["sdk.Auth", "JSSDKCssConfig", "dotAccess", "sdk.domReady", "sdk.DOM", "sdk.ErrorHandling", "sdk.Content", "DOMWrapper", "GlobalCallback", "sdk.Insights", "Log", "sdk.Runtime", "sdk.Scribe", "JSSDKConfig"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
            var u, v, w = i(t, 'api.mode'), x = {};
            u = window.FB = {};
            var y = {};
            q.level = 1;
            o.setPrefix('FB.__globalCallbacks');
            var z = document.createElement('div');
            n.setRoot(z);
            j(function() {
                q.info('domReady');
                m.appendHidden(z);
                if (h.rules)
                    k.addCssRules(h.rules, h.components);
            });
            r.subscribe('AccessToken.change', function(ca) {
                if (!ca && r.getLoginStatus() === 'connected')
                    g.getLoginStatus(null, true);
            });
            if (i(t, 'api.whitelist.length')) {
                v = {};
                ES(t.api.whitelist, 'forEach', true, function(ca) {
                    v[ca] = 1;
                });
            }
            function aa(ca, da, ea, fa) {
                var ga;
                if (/^_/.test(ea)) {
                    ga = 'hide';
                } else if (v&&!v[da])
                    ga = w;
                switch (ga) {
                case 'hide':
                    return;
                case 'stub':
                    return function() {
                        q.warn('The method FB.%s has been removed from the JS SDK.', da);
                    };
                    break;
                default:
                    return l.guard(function() {
                        if (ga === 'warn') {
                            q.warn('The method FB.%s is not officially supported by ' + 'Facebook and access to it will soon be removed.', da);
                            if (!x.hasOwnProperty(da)) {
                                p.log(p.TYPE.WARNING, p.CATEGORY.DEPRECATED, 'FB.' + da);
                                s.log('jssdk_error', {
                                    appId: r.getClientID(),
                                    error: 'Private method used',
                                    extra: {
                                        args: da
                                    }
                                });
                                x[da] = true;
                            }
                        }
                        function ha(pa) {
                            if (ES('Array', 'isArray', false, pa))
                                return ES(pa, 'map', true, ha);
                            if (pa && typeof pa === 'object' && pa.__wrapped)
                                return pa.__wrapped;
                            return typeof pa === 'function' && /^function/.test(pa.toString()) ? l.unguard(pa) : pa;
                        }
                        var ia = ES(Array.prototype.slice.call(arguments), 'map', true, ha), ja = ca.apply(fa, ia), ka, la = true;
                        if (ja && typeof ja === 'object') {
                            var ma = Function();
                            ma.prototype = ja;
                            ka = new ma();
                            ka.__wrapped = ja;
                            for (var na in ja) {
                                var oa = ja[na];
                                if (typeof oa !== 'function' || na === 'constructor')
                                    continue;
                                la = false;
                                ka[na] = aa(oa, da + ':' + na, na, ja);
                            }
                        }
                        if (!la)
                            return ka;
                        return la ? ja : ka;
                    }, da);
                }
            }
            function ba(ca, da) {
                var ea = ca ? i(u, ca, true): u;
                ES(ES('Object', 'keys', false, da), 'forEach', true, function(fa) {
                    var ga = da[fa];
                    if (typeof ga === 'function') {
                        var ha = (ca ? ca + '.' : '') + fa, ia = aa(ga, ha, fa, da);
                        if (ia)
                            ea[fa] = ia;
                    } else if (typeof ga === 'object') {
                        ha = (ca ? ca + '.' : '') + fa;
                        if (v && v[ha])
                            ea[fa] = ga;
                    }
                });
            }
            r.setSecure((function() {
                var ca = /iframe_canvas|app_runner/.test(window.name), da = /dialog/.test(window.name);
                if (location.protocol == 'https:' && (window == top ||!(ca || da)))
                    return true;
                if (/_fb_https?/.test(window.name))
                    return ES(window.name, 'indexOf', true, '_fb_https')!=-1;
            })());
            ES('Object', 'assign', false, y, {
                provide: ba
            });
            e.exports = y;
        }, null);
        __d("ArgumentError", ["ManagedError"], function(a, b, c, d, e, f, g) {
            function h(i, j) {
                g.prototype.constructor.apply(this, arguments);
            }
            h.prototype = new g();
            h.prototype.constructor = h;
            e.exports = h;
        }, null);
        __d("CORSRequest", ["wrapFunction", "QueryString"], function(a, b, c, d, e, f, g, h) {
            function i(l, m) {
                if (!self.XMLHttpRequest)
                    return null;
                var n = new XMLHttpRequest(), o = function() {};
                if ('withCredentials' in n) {
                    n.open(l, m, true);
                    n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                } else if (self.XDomainRequest) {
                    n = new XDomainRequest();
                    try {
                        n.open(l, m);
                        n.onprogress = n.ontimeout = o;
                    } catch (p) {
                        return null;
                    }
                } else 
                    return null;
                var q = {
                    send: function(t) {
                        n.send(t);
                    }
                }, r = g(function() {
                    r = o;
                    if ('onload' in q)
                        q.onload(n);
                }, 'entry', 'XMLHttpRequest:load'), s = g(function() {
                    s = o;
                    if ('onerror' in q)
                        q.onerror(n);
                }, 'entry', 'XMLHttpRequest:error');
                n.onload = function() {
                    r();
                };
                n.onerror = function() {
                    s();
                };
                n.onreadystatechange = function() {
                    if (n.readyState == 4)
                        if (n.status == 200) {
                            r();
                        } else 
                            s();
                };
                return q;
            }
            function j(l, m, n, o) {
                n.suppress_http_code = 1;
                var p = h.encode(n);
                if (m != 'post') {
                    l = h.appendToUrl(l, p);
                    p = '';
                }
                var q = i(m, l);
                if (!q)
                    return false;
                q.onload = function(r) {
                    o(ES('JSON', 'parse', false, r.responseText));
                };
                q.onerror = function(r) {
                    if (r.responseText) {
                        o(ES('JSON', 'parse', false, r.responseText));
                    } else 
                        o({
                            error: {
                                type: 'http',
                                message: 'unknown error',
                                status: r.status
                            }
                        });
                };
                q.send(p);
                return true;
            }
            var k = {
                execute: j
            };
            e.exports = k;
        }, null);
        __d("FlashRequest", ["DOMWrapper", "Flash", "GlobalCallback", "QueryString", "Queue"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l, m = {}, n, o;
            function p() {
                if (!n)
                    throw new Error('swfUrl has not been set');
                var s = i.create(function() {
                    l.start(function(u) {
                        var v = o.execute(u.method, u.url, u.body);
                        if (!v)
                            throw new Error('Could create request');
                        m[v] = u.callback;
                    });
                }), t = i.create(function(u, v, w) {
                    var x;
                    try {
                        x = ES('JSON', 'parse', false, decodeURIComponent(w));
                    } catch (y) {
                        x = {
                            error: {
                                type: 'SyntaxError',
                                message: y.message,
                                status: v,
                                raw: w
                            }
                        };
                    }
                    m[u](x);
                    delete m[u];
                });
                o = h.embed(n, g.getRoot(), null, {
                    log: false,
                    initCallback: s,
                    requestCallback: t
                });
            }
            function q(s, t, u, v) {
                u.suppress_http_code = 1;
                if (!u.method)
                    u.method = t;
                var w = j.encode(u);
                if (t === 'get' && s.length + w.length < 2000) {
                    s = j.appendToUrl(s, w);
                    w = '';
                } else 
                    t = 'post';
                if (!l) {
                    if (!h.isAvailable())
                        return false;
                    l = new k();
                    p();
                }
                l.enqueue({
                    method: t,
                    url: s,
                    body: w,
                    callback: v
                });
                return true;
            }
            var r = {
                setSwfUrl: function(s) {
                    n = s;
                },
                execute: q
            };
            e.exports = r;
        }, null);
        __d("flattenObject", [], function(a, b, c, d, e, f) {
            function g(h) {
                var i = {};
                for (var j in h)
                    if (h.hasOwnProperty(j)) {
                        var k = h[j];
                        if (null === k || (void 0) === k) {
                            continue;
                        } else if (typeof k == 'string') {
                            i[j] = k;
                        } else 
                            i[j] = ES('JSON', 'stringify', false, k);
                    }
                return i;
            }
            e.exports = g;
        }, null);
        __d("JSONPRequest", ["DOMWrapper", "GlobalCallback", "QueryString"], function(a, b, c, d, e, f, g, h, i) {
            function j(l, m, n, o) {
                var p = document.createElement('script'), q = function(s) {
                    q = function() {};
                    h.remove(n.callback);
                    o(s);
                    p.parentNode.removeChild(p);
                };
                n.callback = h.create(q);
                if (!n.method)
                    n.method = m;
                l = i.appendToUrl(l, n);
                if (l.length > 2000) {
                    h.remove(n.callback);
                    return false;
                }
                p.onerror = function() {
                    q({
                        error: {
                            type: 'http',
                            message: 'unknown error'
                        }
                    });
                };
                var r = function() {
                    setTimeout(function() {
                        q({
                            error: {
                                type: 'http',
                                message: 'unknown error'
                            }
                        });
                    }, 0);
                };
                if (p.addEventListener) {
                    p.addEventListener('load', r, false);
                } else 
                    p.onreadystatechange = function() {
                        if (/loaded|complete/.test(this.readyState))
                            r();
                        };
                p.src = l;
                g.getRoot().appendChild(p);
                return true;
            }
            var k = {
                execute: j
            };
            e.exports = k;
        }, null);
        __d("ApiClient", ["ArgumentError", "Assert", "CORSRequest", "FlashRequest", "flattenObject", "JSONPRequest", "Log", "ObservableMixin", "QueryString", "sprintf", "sdk.URI", "UrlMap", "ApiClientConfig", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
            var u, v, w, x = {
                get: true,
                post: true,
                'delete': true,
                put: true
            }, y = {
                fql_query: true,
                fql_multiquery: true,
                friends_get: true,
                notifications_get: true,
                stream_get: true,
                users_getinfo: true
            }, z = [], aa = [], ba = null, ca = 50, da = 105440539523;
            function ea(ma, na, oa, pa) {
                if (w)
                    oa = ES('Object', 'assign', false, {}, w, oa);
                oa.access_token = oa.access_token || u;
                oa.pretty = oa.pretty || 0;
                oa = k(oa);
                var qa = {
                    jsonp: l,
                    cors: i,
                    flash: j
                }, ra;
                if (oa.transport) {
                    ra = [oa.transport];
                    delete oa.transport;
                } else 
                    ra = ['jsonp', 'cors', 'flash'];
                for (var sa = 0; sa < ra.length; sa++) {
                    var ta = qa[ra[sa]], ua = ES('Object', 'assign', false, {}, oa);
                    if (ta.execute(ma, na, ua, pa))
                        return;
                }
                pa({
                    error: {
                        type: 'no-transport',
                        message: 'Could not find a usable transport for request'
                    }
                });
            }
            function fa(ma, na, oa, pa, qa, ra) {
                la.inform('request.complete', na, oa, pa, ra, ES('Date', 'now', false) - qa);
                if (ma)
                    ma(ra);
            }
            function ga(ma) {
                var na = ma.shift();
                h.isString(na, 'Invalid path');
                if (!/^https?/.test(na) && na.charAt(0) !== '/')
                    na = '/' + na;
                var oa, pa = {};
                try {
                    oa = new q(na);
                } catch (qa) {
                    throw new g(qa.message, qa);
                }
                ES(ma, 'forEach', true, function(ua) {
                    return pa[typeof ua] = ua;
                });
                var ra = (pa.string || 'get').toLowerCase();
                h.isTrue(x.hasOwnProperty(ra), p('Invalid method passed to ApiClient: %s', ra));
                var sa = pa['function'];
                if (!sa)
                    m.warn('No callback passed to the ApiClient');
                if (pa.object)
                    oa.addQueryData(pa.object);
                var ta = oa.getQueryData();
                ta.method = ra;
                return {
                    uri: oa,
                    callback: sa,
                    params: ta
                };
            }
            function ha() {
                for (var ma = [], na = 0, oa = arguments.length; na < oa; na++)
                    ma.push(arguments[na]);
                var pa = ga(ma), qa = pa.uri, ra = pa.callback, sa = pa.params, ta = sa.method, ua = qa.getProtocol() && qa.getDomain() ? qa.setQueryData({}).toString(): r.resolve('graph') + qa.getPath();
                la.inform('request.prepare', ua, sa);
                ea(ua, ta == 'get' ? 'get' : 'post', sa, ES(fa, 'bind', true, null, ra, qa.getPath(), ta, sa, ES('Date', 'now', false)));
            }
            function ia() {
                for (var ma = [], na = 0, oa = arguments.length; na < oa; na++)
                    ma.push(arguments[na]);
                var pa = ga(ma), qa = pa.uri, ra = pa.callback, sa = pa.params, ta = sa.method, ua = {
                    method: ta,
                    relative_url: qa.removeQueryData('method').toString()
                };
                if (ta.toLowerCase() == 'post') {
                    ua.body = o.encode(k(qa.getQueryData()));
                    ua.relative_url = qa.setQueryData({}).toString();
                }
                z.push(ua);
                aa.push(ra);
                if (z.length == ca) {
                    ja();
                } else if (!ba)
                    ba = setTimeout(ja, 0);
            }
            function ja() {
                t(z.length > 0);
                t(z.length === aa.length);
                var ma = z, na = aa;
                z = [];
                aa = [];
                ba = null;
                if (ma.length === 1) {
                    var oa = ma[0], pa = na[0], qa = oa.body ? o.decode(oa.body): null;
                    ha(oa.relative_url, oa.method, qa, pa);
                    return;
                }
                ha('/', 'POST', {
                    batch: ma,
                    include_headers: false,
                    batch_app_id: v || da
                }, function(ra) {
                    if (ES('Array', 'isArray', false, ra)) {
                        ES(ra, 'forEach', true, function(sa, ta) {
                            na[ta](ES('JSON', 'parse', false, sa.body));
                        });
                    } else 
                        ES(na, 'forEach', true, function(sa) {
                            return sa({
                                error: {
                                    message: 'Fatal: batch call failed.'
                                }
                            });
                        });
                });
            }
            function ka(ma, na) {
                h.isObject(ma);
                h.isString(ma.method, 'method missing');
                if (!na)
                    m.warn('No callback passed to the ApiClient');
                var oa = ma.method.toLowerCase().replace('.', '_');
                ma.format = 'json-strings';
                ma.api_key = v;
                var pa = oa in y ? 'api_read': 'api', qa = r.resolve(pa) + '/restserver.php', ra = ES(fa, 'bind', true, null, na, '/restserver.php', 'get', ma, ES('Date', 'now', false));
                ea(qa, 'get', ma, ra);
            }
            var la = ES('Object', 'assign', false, new n(), {
                setAccessToken: function(ma) {
                    u = ma;
                },
                setClientID: function(ma) {
                    v = ma;
                },
                setDefaultParams: function(ma) {
                    w = ma;
                },
                rest: ka,
                graph: ha,
                scheduleBatchCall: ia
            });
            j.setSwfUrl(s.FlashRequest.swfUrl);
            e.exports = la;
        }, null);
        __d("sdk.PlatformVersioning", ["sdk.Runtime", "ManagedError"], function(a, b, c, d, e, f, g, h) {
            var i = /^v\d+\.\d\d?$/, j = {
                REGEX: i,
                assertVersionIsSet: function() {
                    if (!g.getVersion())
                        throw new h('init not called with valid version');
                },
                assertValidVersion: function(k) {
                    if (!i.test(k))
                        throw new h('invalid version specified');
                }
            };
            e.exports = j;
        }, null);
        __d("sdk.api", ["ApiClient", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.URI"], function(a, b, c, d, e, f, g, h, i, j) {
            var k;
            i.subscribe('ClientID.change', function(m) {
                g.setClientID(m);
            });
            i.subscribe('AccessToken.change', function(m) {
                k = m;
                g.setAccessToken(m);
            });
            g.setDefaultParams({
                sdk: 'joey'
            });
            g.subscribe('request.complete', function(m, n, o, p) {
                var q = false;
                if (p && typeof p == 'object')
                    if (p.error) {
                        if (p.error == 'invalid_token' || (p.error.type == 'OAuthException' && p.error.code == 190))
                            q = true;
                    } else if (p.error_code)
                        if (p.error_code == '190')
                            q = true;
                if (q && k === i.getAccessToken())
                    i.setAccessToken(null);
            });
            g.subscribe('request.complete', function(m, n, o, p) {
                if (((m == '/me/permissions' && n === 'delete') || (m == '/restserver.php' && o.method == 'Auth.revokeAuthorization')) && p === true)
                    i.setAccessToken(null);
            });
            function l(m) {
                if (typeof m === 'string') {
                    if (i.getIsVersioned()) {
                        h.assertVersionIsSet();
                        if (!/https?/.test(m) && m.charAt(0) !== '/')
                            m = '/' + m;
                        m = j(m).setDomain(null).setProtocol(null).toString();
                        if (!h.REGEX.test(m.substring(1, ES(m, 'indexOf', true, '/', 1))))
                            m = '/' + i.getVersion() + m;
                        var n = [m].concat(Array.prototype.slice.call(arguments, 1));
                        g.graph.apply(g, n);
                    } else 
                        g.graph.apply(g, arguments);
                } else 
                    g.rest.apply(g, arguments);
            }
            e.exports = l;
        }, null);
        __d("legacy:fb.api", ["FB", "sdk.api"], function(a, b, c, d, e, f, g, h) {
            g.provide('', {
                api: h
            });
        }, 3);
        __d("sdk.Canvas.Environment", ["sdk.RPC"], function(a, b, c, d, e, f, g) {
            function h(k) {
                g.remote.getPageInfo(function(l) {
                    k(l.result);
                });
            }
            function i(k, l) {
                g.remote.scrollTo({
                    x: k || 0,
                    y: l || 0
                });
            }
            g.stub('getPageInfo');
            g.stub('scrollTo');
            var j = {
                getPageInfo: h,
                scrollTo: i
            };
            e.exports = j;
        }, null);
        __d("sdk.fbt", [], function(a, b, c, d, e, f) {
            var g = {
                _: function(h) {
                    return typeof h === 'string' ? h : h[0];
                }
            };
            e.exports = g;
        }, null);
        __d("sdk.Dialog", ["sdk.Canvas.Environment", "sdk.Content", "sdk.DOM", "DOMEventListener", "ObservableMixin", "sdk.Runtime", "Type", "sdk.UA", "sdk.fbt", "sdk.feature"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            var q = 590, r = 500, s = 240, t = 575, u = function() {
                var y;
                if (p('dialog_resize_refactor', false)) {
                    var z = v();
                    y = z && (z.height >= q || z.width >= r);
                } else 
                    y=!!n.ipad();
                u = function() {
                    return y;
                };
                return y;
            };
            function v() {
                if (p('dialog_resize_refactor', false)) {
                    var y = i.getViewportInfo();
                    if (y.height && y.width)
                        return {
                            width: Math.min(y.width, q),
                            height: Math.min(y.height, r)
                        };
                }
                return null;
            }
            var w = m.extend({
                constructor: function y(z, aa) {
                    this.parent();
                    this.id = z;
                    this.display = aa;
                    this._e2e = {};
                    if (!x._dialogs) {
                        x._dialogs = {};
                        x._addOrientationHandler();
                    }
                    x._dialogs[z] = this;
                    this.trackEvent('init');
                },
                trackEvent: function(y, z) {
                    if (this._e2e[y])
                        return this;
                    this._e2e[y] = z || ES('Date', 'now', false);
                    if (y == 'close')
                        this.inform('e2e:end', this._e2e);
                    return this;
                },
                trackEvents: function(y) {
                    if (typeof y === 'string')
                        y = ES('JSON', 'parse', false, y);
                    for (var z in y)
                        if (y.hasOwnProperty(z))
                            this.trackEvent(z, y[z]);
                    return this;
                }
            }, k), x = {
                newInstance: function(y, z) {
                    return new w(y, z);
                },
                _dialogs: null,
                _lastYOffset: 0,
                _loaderEl: null,
                _overlayEl: null,
                _stack: [],
                _active: null,
                get: function(y) {
                    return x._dialogs[y];
                },
                _findRoot: function(y) {
                    while (y) {
                        if (i.containsCss(y, 'fb_dialog'))
                            return y;
                        y = y.parentNode;
                    }
                },
                _createWWWLoader: function(y) {
                    y = y ? y : 460;
                    return x.create({
                        content: ('<div class="dialog_title">' + '  <a id="fb_dialog_loader_close">' + '    <div class="fb_dialog_close_icon"></div>' + '  </a>' + '  <span>Facebook</span>' + '  <div style="clear:both;"></div>' + '</div>' + '<div class="dialog_content"></div>' + '<div class="dialog_footer"></div>'),
                        width: y
                    });
                },
                _createMobileLoader: function() {
                    var y = n.nativeApp() ? '': ('<table>' + '  <tbody>' + '    <tr>' + '      <td class="header_left">' + '        <label class="touchable_button">' + '          <input type="submit" value="' + "Cancel" + '"' + '            id="fb_dialog_loader_close"/>' + '        </label>' + '      </td>' + '      <td class="header_center">' + '        <div>' + '         ' + "Loading..." + '        </div>' + '      </td>' + '      <td class="header_right">' + '      </td>' + '    </tr>' + '  </tbody>' + '</table>');
                    return x.create({
                        classes: 'loading' + (u() ? ' centered' : ''),
                        content: ('<div class="dialog_header">' + y + '</div>')
                    });
                },
                _restoreBodyPosition: function() {
                    if (!u()) {
                        var y = document.getElementsByTagName('body')[0];
                        i.removeCss(y, 'fb_hidden');
                    }
                },
                _showTabletOverlay: function() {
                    if (!u())
                        return;
                    if (!x._overlayEl) {
                        x._overlayEl = document.createElement('div');
                        x._overlayEl.setAttribute('id', 'fb_dialog_ipad_overlay');
                        h.append(x._overlayEl, null);
                    }
                    x._overlayEl.className = '';
                },
                _hideTabletOverlay: function() {
                    if (u())
                        x._overlayEl.className = 'hidden';
                },
                showLoader: function(y, z) {
                    x._showTabletOverlay();
                    if (!x._loaderEl)
                        x._loaderEl = x._findRoot(n.mobile() ? x._createMobileLoader() : x._createWWWLoader(z));
                    if (!y)
                        y = function() {};
                    var aa = document.getElementById('fb_dialog_loader_close');
                    i.removeCss(aa, 'fb_hidden');
                    aa.onclick = function() {
                        x._hideLoader();
                        x._restoreBodyPosition();
                        x._hideTabletOverlay();
                        y();
                    };
                    var ba = document.getElementById('fb_dialog_ipad_overlay');
                    if (ba)
                        ba.ontouchstart = aa.onclick;
                    x._makeActive(x._loaderEl);
                },
                _hideLoader: function() {
                    if (x._loaderEl && x._loaderEl == x._active)
                        x._loaderEl.style.top = '-10000px';
                },
                _makeActive: function(y) {
                    x._setDialogSizes();
                    x._lowerActive();
                    x._active = y;
                    if (l.isEnvironment(l.ENVIRONMENTS.CANVAS))
                        g.getPageInfo(function(z) {
                            x._centerActive(z);
                        });
                    x._centerActive();
                },
                _lowerActive: function() {
                    if (!x._active)
                        return;
                    x._active.style.top = '-10000px';
                    x._active = null;
                },
                _removeStacked: function(y) {
                    x._stack = ES(x._stack, 'filter', true, function(z) {
                        return z != y;
                    });
                },
                _centerActive: function(y) {
                    var z = x._active;
                    if (!z)
                        return;
                    var aa = i.getViewportInfo(), ba = parseInt(z.offsetWidth, 10), ca = parseInt(z.offsetHeight, 10), da = aa.scrollLeft + (aa.width - ba) / 2, ea = (aa.height - ca) / 2.5;
                    if (da < ea)
                        ea = da;
                    var fa = aa.height - ca - ea, ga = (aa.height - ca) / 2;
                    if (y)
                        ga = y.scrollTop - y.offsetTop + (y.clientHeight - ca) / 2;
                    if (ga < ea) {
                        ga = ea;
                    } else if (ga > fa)
                        ga = fa;
                    ga += aa.scrollTop;
                    if (n.mobile()) {
                        var ha = 100;
                        if (u()) {
                            ha += (aa.height - ca) / 2;
                        } else {
                            var ia = document.getElementsByTagName('body')[0];
                            i.addCss(ia, 'fb_hidden');
                            if (p('dialog_resize_refactor', false))
                                ia.style.width = 'auto';
                            ga = 10000;
                        }
                        var ja = i.getByClass('fb_dialog_padding', z);
                        if (ja.length)
                            ja[0].style.height = ha + 'px';
                    }
                    z.style.left = (da > 0 ? da : 0) + 'px';
                    z.style.top = (ga > 0 ? ga : 0) + 'px';
                },
                _setDialogSizes: function() {
                    if (!n.mobile() || u())
                        return;
                    for (var y in x._dialogs)
                        if (x._dialogs.hasOwnProperty(y)) {
                            var z = document.getElementById(y);
                            if (z) {
                                z.style.width = x.getDefaultSize().width + 'px';
                                z.style.height = x.getDefaultSize().height + 'px';
                            }
                        }
                },
                getDefaultSize: function() {
                    if (n.mobile()) {
                        var y = v();
                        if (y)
                            return y;
                        if (n.ipad())
                            return {
                                width: r,
                                height: q
                            };
                        if (n.android()) {
                            return {
                                width: screen.availWidth,
                                height: screen.availHeight
                            };
                        } else {
                            var z = window.innerWidth, aa = window.innerHeight, ba = z / aa > 1.2;
                            return {
                                width: z,
                                height: Math.max(aa, (ba ? screen.width : screen.height))
                            };
                        }
                    }
                    return {
                        width: t,
                        height: s
                    };
                },
                _handleOrientationChange: function(y) {
                    var z = p('dialog_resize_refactor', false) ? i.getViewportInfo().width: screen.availWidth;
                    if (n.android() && z == x._availScreenWidth) {
                        setTimeout(x._handleOrientationChange, 50);
                        return;
                    }
                    x._availScreenWidth = z;
                    if (u()) {
                        x._centerActive();
                    } else {
                        var aa = x.getDefaultSize().width;
                        for (var ba in x._dialogs)
                            if (x._dialogs.hasOwnProperty(ba)) {
                                var ca = document.getElementById(ba);
                                if (ca)
                                    ca.style.width = aa + 'px';
                            }
                    }
                },
                _addOrientationHandler: function() {
                    if (!n.mobile())
                        return;
                    var y = "onorientationchange" in window ? 'orientationchange': 'resize';
                    x._availScreenWidth = p('dialog_resize_refactor', false) ? i.getViewportInfo().width : screen.availWidth;
                    j.add(window, y, x._handleOrientationChange);
                },
                create: function(y) {
                    y = y || {};
                    var z = document.createElement('div'), aa = document.createElement('div'), ba = 'fb_dialog';
                    if (y.closeIcon && y.onClose) {
                        var ca = document.createElement('a');
                        ca.className = 'fb_dialog_close_icon';
                        ca.onclick = y.onClose;
                        z.appendChild(ca);
                    }
                    ba += ' ' + (y.classes || '');
                    if (n.ie()) {
                        ba += ' fb_dialog_legacy';
                        ES(['vert_left', 'vert_right', 'horiz_top', 'horiz_bottom', 'top_left', 'top_right', 'bottom_left', 'bottom_right'], 'forEach', true, function(fa) {
                            var ga = document.createElement('span');
                            ga.className = 'fb_dialog_' + fa;
                            z.appendChild(ga);
                        });
                    } else 
                        ba += n.mobile() ? ' fb_dialog_mobile' : ' fb_dialog_advanced';
                    if (y.content)
                        h.append(y.content, aa);
                    z.className = ba;
                    var da = parseInt(y.width, 10);
                    if (!isNaN(da))
                        z.style.width = da + 'px';
                    aa.className = 'fb_dialog_content';
                    z.appendChild(aa);
                    if (n.mobile()) {
                        var ea = document.createElement('div');
                        ea.className = 'fb_dialog_padding';
                        z.appendChild(ea);
                    }
                    h.append(z);
                    if (y.visible)
                        x.show(z);
                    return aa;
                },
                show: function(y) {
                    var z = x._findRoot(y);
                    if (z) {
                        x._removeStacked(z);
                        x._hideLoader();
                        x._makeActive(z);
                        x._stack.push(z);
                        if ('fbCallID' in y)
                            x.get(y.fbCallID).inform('iframe_show').trackEvent('show');
                    }
                },
                hide: function(y) {
                    var z = x._findRoot(y);
                    x._hideLoader();
                    if (z == x._active) {
                        x._lowerActive();
                        x._restoreBodyPosition();
                        x._hideTabletOverlay();
                        if ('fbCallID' in y)
                            x.get(y.fbCallID).inform('iframe_hide').trackEvent('hide');
                    }
                },
                remove: function(y) {
                    y = x._findRoot(y);
                    if (y) {
                        var z = x._active == y;
                        x._removeStacked(y);
                        if (z) {
                            x._hideLoader();
                            if (x._stack.length > 0) {
                                x.show(x._stack.pop());
                            } else {
                                x._lowerActive();
                                x._restoreBodyPosition();
                                x._hideTabletOverlay();
                            }
                        } else if (x._active === null && x._stack.length > 0)
                            x.show(x._stack.pop());
                        setTimeout(function() {
                            y.parentNode.removeChild(y);
                        }, 3000);
                    }
                },
                isActive: function(y) {
                    var z = x._findRoot(y);
                    return z && z === x._active;
                }
            };
            e.exports = x;
        }, null);
        __d("sdk.Frictionless", ["sdk.Auth", "sdk.api", "sdk.Event", "sdk.Dialog"], function(a, b, c, d, e, f, g, h, i, j) {
            var k = {
                _allowedRecipients: {},
                _useFrictionless: false,
                _updateRecipients: function() {
                    k._allowedRecipients = {};
                    h('/me/apprequestformerrecipients', function(l) {
                        if (!l || l.error)
                            return;
                        ES(l.data, 'forEach', true, function(m) {
                            k._allowedRecipients[m.recipient_id] = true;
                        });
                    });
                },
                init: function() {
                    k._useFrictionless = true;
                    g.getLoginStatus(function(l) {
                        if (l.status == 'connected')
                            k._updateRecipients();
                    });
                    i.subscribe('auth.login', function(l) {
                        if (l.authResponse)
                            k._updateRecipients();
                    });
                },
                _processRequestResponse: function(l, m) {
                    return function(n) {
                        var o = n && n.updated_frictionless;
                        if (k._useFrictionless && o)
                            k._updateRecipients();
                        if (n) {
                            if (!m && n.frictionless) {
                                j._hideLoader();
                                j._restoreBodyPosition();
                                j._hideIPadOverlay();
                            }
                            delete n.frictionless;
                            delete n.updated_frictionless;
                        }
                        l && l(n);
                    };
                },
                isAllowed: function(l) {
                    if (!l)
                        return false;
                    if (typeof l === 'number')
                        return l in k._allowedRecipients;
                    if (typeof l === 'string')
                        l = l.split(',');
                    l = ES(l, 'map', true, function(o) {
                        return ES(String(o), 'trim', true);
                    });
                    var m = true, n = false;
                    ES(l, 'forEach', true, function(o) {
                        m = m && o in k._allowedRecipients;
                        n = true;
                    });
                    return m && n;
                }
            };
            i.subscribe('init:post', function(l) {
                if (l.frictionlessRequests)
                    k.init();
            });
            e.exports = k;
        }, null);
        __d("sdk.Native", ["Log", "sdk.UA"], function(a, b, c, d, e, f, g, h) {
            var i = 'fbNativeReady', j = {
                onready: function(k) {
                    if (!h.nativeApp()) {
                        g.error('FB.Native.onready only works when the page is rendered ' + 'in a WebView of the native Facebook app. Test if this is the ' + 'case calling FB.UA.nativeApp()');
                        return;
                    }
                    if (window.__fbNative&&!this.nativeReady)
                        ES('Object', 'assign', false, this, window.__fbNative);
                    if (this.nativeReady) {
                        k();
                    } else {
                        var l = function(m) {
                            window.removeEventListener(i, l);
                            this.onready(k);
                        };
                        window.addEventListener(i, l, false);
                    }
                }
            };
            e.exports = j;
        }, null);
        __d("resolveURI", [], function(a, b, c, d, e, f) {
            function g(h) {
                if (!h)
                    return window.location.href;
                h = h.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
                var i = document.createElement('div');
                i.innerHTML = '<a href="' + h + '"></a>';
                return i.firstChild.href;
            }
            e.exports = g;
        }, null);
        __d("sdk.UIServer", ["sdk.Auth", "sdk.Content", "sdk.DOM", "sdk.Dialog", "sdk.Event", "sdk.Frictionless", "Log", "sdk.Native", "QueryString", "sdk.RPC", "sdk.Runtime", "JSSDKConfig", "sdk.UA", "UrlMap", "sdk.XD", "createObjectFrom", "flattenObject", "sdk.getContextType", "guid", "insertIframe", "resolveURI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
            var ba = {
                transform: function(ea) {
                    if (ea.params.display === 'touch' && ea.params.access_token && window.postMessage) {
                        ea.params.channel = da._xdChannelHandler(ea.id, 'parent');
                        if (!s.nativeApp())
                            ea.params.in_iframe = 1;
                        return ea;
                    } else 
                        return da.genericTransform(ea);
                },
                getXdRelation: function(ea) {
                    var fa = ea.display;
                    if (fa === 'touch' && window.postMessage && ea.in_iframe)
                        return 'parent';
                    return da.getXdRelation(ea);
                }
            }, ca = {
                'stream.share': {
                    size: {
                        width: 670,
                        height: 340
                    },
                    url: 'sharer.php',
                    transform: function(ea) {
                        if (!ea.params.u)
                            ea.params.u = window.location.toString();
                        ea.params.display = 'popup';
                        return ea;
                    }
                },
                apprequests: {
                    transform: function(ea) {
                        ea = ba.transform(ea);
                        ea.params.frictionless = l && l._useFrictionless;
                        if (ea.params.frictionless) {
                            if (l.isAllowed(ea.params.to)) {
                                ea.params.display = 'iframe';
                                ea.params.in_iframe = true;
                                ea.hideLoader = true;
                            }
                            ea.cb = l._processRequestResponse(ea.cb, ea.hideLoader);
                        }
                        ea.closeIcon = false;
                        return ea;
                    },
                    getXdRelation: ba.getXdRelation
                },
                feed: ba,
                'permissions.oauth': {
                    url: 'dialog/oauth',
                    size: {
                        width: (s.mobile() ? null : 475),
                        height: (s.mobile() ? null : 183)
                    },
                    transform: function(ea) {
                        if (!q.getClientID()) {
                            m.error('FB.login() called before FB.init().');
                            return;
                        }
                        if (g.getAuthResponse()&&!ea.params.scope&&!ea.params.auth_type) {
                            m.error('FB.login() called when user is already connected.');
                            ea.cb && ea.cb({
                                status: q.getLoginStatus(),
                                authResponse: g.getAuthResponse()
                            });
                            return;
                        }
                        var fa = ea.cb, ga = ea.id;
                        delete ea.cb;
                        var ha = ES('Object', 'keys', false, ES('Object', 'assign', false, ea.params.response_type ? v(ea.params.response_type.split(',')) : {}, {
                            token: true,
                            signed_request: true
                        })).join(',');
                        if (ea.params.display === 'async') {
                            ES('Object', 'assign', false, ea.params, {
                                client_id: q.getClientID(),
                                origin: x(),
                                response_type: ha,
                                domain: location.hostname
                            });
                            ea.cb = g.xdResponseWrapper(fa, g.getAuthResponse(), 'permissions.oauth');
                        } else 
                            ES('Object', 'assign', false, ea.params, {
                                client_id: q.getClientID(),
                                redirect_uri: aa(da.xdHandler(fa, ga, 'opener', g.getAuthResponse(), 'permissions.oauth')),
                                origin: x(),
                                response_type: ha,
                                domain: location.hostname
                            });
                        return ea;
                    }
                },
                'auth.logout': {
                    url: 'logout.php',
                    transform: function(ea) {
                        if (!q.getClientID()) {
                            m.error('FB.logout() called before calling FB.init().');
                        } else if (!g.getAuthResponse()) {
                            m.error('FB.logout() called without an access token.');
                        } else {
                            ea.params.next = da.xdHandler(ea.cb, ea.id, 'parent', g.getAuthResponse(), 'logout');
                            return ea;
                        }
                    }
                },
                'login.status': {
                    url: 'dialog/oauth',
                    transform: function(ea) {
                        var fa = ea.cb, ga = ea.id;
                        delete ea.cb;
                        ES('Object', 'assign', false, ea.params, {
                            client_id: q.getClientID(),
                            redirect_uri: da.xdHandler(fa, ga, 'parent', g.getAuthResponse(), 'login_status'),
                            origin: x(),
                            response_type: 'token,signed_request,code',
                            domain: location.hostname
                        });
                        return ea;
                    }
                },
                pay: {
                    size: {
                        width: 555,
                        height: 120
                    },
                    connectDisplay: 'popup'
                }
            }, da = {
                Methods: ca,
                _loadedNodes: {},
                _defaultCb: {},
                _resultToken: '"xxRESULTTOKENxx"',
                genericTransform: function(ea) {
                    if (ea.params.display == 'dialog' || ea.params.display == 'iframe')
                        ES('Object', 'assign', false, ea.params, {
                            display: 'iframe',
                            channel: da._xdChannelHandler(ea.id, 'parent.parent')
                        }, true);
                    return ea;
                },
                checkOauthDisplay: function(ea) {
                    var fa = ea.scope || ea.perms || q.getScope();
                    if (!fa)
                        return ea.display;
                    var ga = fa.split(/\s|,/g);
                    for (var ha = 0; ha < ga.length; ha++)
                        if (!r.initSitevars.iframePermissions[ES(ga[ha], 'trim', true)])
                            return 'popup';
                    return ea.display;
                },
                prepareCall: function(ea, fa) {
                    var ga = ea.method.toLowerCase(), ha = da.Methods.hasOwnProperty(ga) ? ES('Object', 'assign', false, {}, da.Methods[ga]): {}, ia = y(), ja = q.getSecure() || (ga !== 'auth.status' && ga != 'login.status');
                    ES('Object', 'assign', false, ea, {
                        app_id: q.getClientID(),
                        locale: q.getLocale(),
                        sdk: 'joey',
                        access_token: ja && q.getAccessToken() || (void 0)
                    });
                    ea.display = da.getDisplayMode(ha, ea);
                    if (!ha.url)
                        ha.url = 'dialog/' + ga;
                    if ((ha.url == 'dialog/oauth' || ha.url == 'dialog/permissions.request') && (ea.display == 'iframe' || (ea.display == 'touch' && ea.in_iframe)))
                        ea.display = da.checkOauthDisplay(ea);
                    if (q.getIsVersioned() && ha.url.substring(0, 7) === 'dialog/')
                        ha.url = ea.version + '/' + ha.url;
                    var ka = {
                        cb: fa,
                        id: ia,
                        size: ha.size || da.getDefaultSize(),
                        url: t.resolve(ea.display == 'touch' ? 'm' : 'www', ja) + '/' + ha.url,
                        params: ea,
                        name: ga,
                        dialog: j.newInstance(ia, ea.display)
                    }, la = ha.transform ? ha.transform: da.genericTransform;
                    if (la) {
                        ka = la(ka);
                        if (!ka)
                            return;
                    }
                    if (ea.display === 'touch' && ea.in_iframe)
                        ka.params.parent_height = window.innerHeight;
                    var ma = ha.getXdRelation || da.getXdRelation, na = ma(ka.params);
                    if (!(ka.id in da._defaultCb)&&!('next' in ka.params)&&!('redirect_uri' in ka.params))
                        ka.params.next = da._xdResult(ka.cb, ka.id, na, true);
                    if (na === 'parent')
                        ES('Object', 'assign', false, ka.params, {
                            channel_url: da._xdChannelHandler(ia, 'parent.parent')
                        }, true);
                    ka = da.prepareParams(ka);
                    return ka;
                },
                prepareParams: function(ea) {
                    if (ea.params.display !== 'async')
                        delete ea.params.method;
                    ea.params = w(ea.params);
                    var fa = o.encode(ea.params);
                    if (!s.nativeApp() && da.urlTooLongForIE(ea.url + '?' + fa)) {
                        ea.post = true;
                    } else if (fa)
                        ea.url += '?' + fa;
                    return ea;
                },
                urlTooLongForIE: function(ea) {
                    return ea.length > 2000;
                },
                getDisplayMode: function(ea, fa) {
                    if (fa.display === 'hidden' || fa.display === 'none')
                        return fa.display;
                    var ga = q.isEnvironment(q.ENVIRONMENTS.CANVAS) || q.isEnvironment(q.ENVIRONMENTS.PAGETAB);
                    if (ga&&!fa.display)
                        return 'async';
                    if (s.mobile() || fa.display === 'touch')
                        return 'touch';
                    if (!q.getAccessToken() && (fa.display == 'iframe' || fa.display == 'dialog')&&!ea.loggedOutIframe) {
                        m.error('"dialog" mode can only be used when the user is connected.');
                        return 'popup';
                    }
                    if (ea.connectDisplay&&!ga)
                        return ea.connectDisplay;
                    return fa.display || (q.getAccessToken() ? 'dialog' : 'popup');
                },
                getXdRelation: function(ea) {
                    var fa = ea.display;
                    if (fa === 'popup' || fa === 'touch')
                        return 'opener';
                    if (fa === 'dialog' || fa === 'iframe' || fa === 'hidden' || fa === 'none')
                        return 'parent';
                    if (fa === 'async')
                        return 'parent.frames[' + window.name + ']';
                },
                popup: function(ea) {
                    var fa = typeof window.screenX != 'undefined' ? window.screenX: window.screenLeft, ga = typeof window.screenY != 'undefined' ? window.screenY: window.screenTop, ha = typeof window.outerWidth != 'undefined' ? window.outerWidth: document.documentElement.clientWidth, ia = typeof window.outerHeight != 'undefined' ? window.outerHeight: (document.documentElement.clientHeight - 22), ja = s.mobile() ? null: ea.size.width, ka = s.mobile() ? null: ea.size.height, la = (fa < 0) ? window.screen.width + fa: fa, ma = parseInt(la + ((ha - ja) / 2), 10), na = parseInt(ga + ((ia - ka) / 2.5), 10), oa = [];
                    if (ja !== null)
                        oa.push('width=' + ja);
                    if (ka !== null)
                        oa.push('height=' + ka);
                    oa.push('left=' + ma);
                    oa.push('top=' + na);
                    oa.push('scrollbars=1');
                    if (ea.name == 'permissions.request' || ea.name == 'permissions.oauth')
                        oa.push('location=1,toolbar=0');
                    oa = oa.join(',');
                    var pa;
                    if (ea.post) {
                        pa = window.open('about:blank', ea.id, oa);
                        if (pa) {
                            da.setLoadedNode(ea, pa, 'popup');
                            h.submitToTarget({
                                url: ea.url,
                                target: ea.id,
                                params: ea.params
                            });
                        }
                    } else {
                        pa = window.open(ea.url, ea.id, oa);
                        if (pa)
                            da.setLoadedNode(ea, pa, 'popup');
                    }
                    if (!pa)
                        return;
                    if (ea.id in da._defaultCb)
                        da._popupMonitor();
                },
                setLoadedNode: function(ea, fa, ga) {
                    if (ea.params && ea.params.display != 'popup')
                        fa.fbCallID = ea.id;
                    fa = {
                        node: fa,
                        type: ga,
                        fbCallID: ea.id
                    };
                    da._loadedNodes[ea.id] = fa;
                },
                getLoadedNode: function(ea) {
                    var fa = typeof ea == 'object' ? ea.id: ea, ga = da._loadedNodes[fa];
                    return ga ? ga.node : null;
                },
                hidden: function(ea) {
                    ea.className = 'FB_UI_Hidden';
                    ea.root = h.appendHidden('');
                    da._insertIframe(ea);
                },
                iframe: function(ea) {
                    ea.className = 'FB_UI_Dialog';
                    var fa = function() {
                        da._triggerDefault(ea.id);
                    };
                    ea.root = j.create({
                        onClose: fa,
                        closeIcon: ea.closeIcon === (void 0) ? true: ea.closeIcon,
                        classes: (s.ipad() ? 'centered' : '')
                    });
                    if (!ea.hideLoader)
                        j.showLoader(fa, ea.size.width);
                    i.addCss(ea.root, 'fb_dialog_iframe');
                    da._insertIframe(ea);
                },
                touch: function(ea) {
                    if (ea.params && ea.params.in_iframe) {
                        if (ea.ui_created) {
                            j.showLoader(function() {
                                da._triggerDefault(ea.id);
                            }, 0);
                        } else 
                            da.iframe(ea);
                    } else if (s.nativeApp()&&!ea.ui_created) {
                        ea.frame = ea.id;
                        n.onready(function() {
                            da.setLoadedNode(ea, n.open(ea.url + '#cb=' + ea.frameName), 'native');
                        });
                        da._popupMonitor();
                    } else if (!ea.ui_created)
                        da.popup(ea);
                },
                async: function(ea) {
                    ea.params.redirect_uri = location.protocol + '//' + location.host + location.pathname;
                    delete ea.params.access_token;
                    p.remote.showDialog(ea.params, function(fa) {
                        var ga = fa.result;
                        if (ga && ga.e2e) {
                            var ha = j.get(ea.id);
                            ha.trackEvents(ga.e2e);
                            ha.trackEvent('close');
                            delete ga.e2e;
                        }
                        ea.cb(ga);
                    });
                },
                getDefaultSize: function() {
                    return j.getDefaultSize();
                },
                _insertIframe: function(ea) {
                    da._loadedNodes[ea.id] = false;
                    var fa = function(ga) {
                        if (ea.id in da._loadedNodes)
                            da.setLoadedNode(ea, ga, 'iframe');
                    };
                    if (ea.post) {
                        z({
                            url: 'about:blank',
                            root: ea.root,
                            className: ea.className,
                            width: ea.size.width,
                            height: ea.size.height,
                            id: ea.id,
                            onInsert: fa,
                            onload: function(ga) {
                                h.submitToTarget({
                                    url: ea.url,
                                    target: ga.name,
                                    params: ea.params
                                });
                            }
                        });
                    } else 
                        z({
                            url: ea.url,
                            root: ea.root,
                            className: ea.className,
                            width: ea.size.width,
                            height: ea.size.height,
                            id: ea.id,
                            name: ea.frameName,
                            onInsert: fa
                        });
                },
                _handleResizeMessage: function(ea, fa) {
                    var ga = da.getLoadedNode(ea);
                    if (!ga)
                        return;
                    if (fa.height)
                        ga.style.height = fa.height + 'px';
                    if (fa.width)
                        ga.style.width = fa.width + 'px';
                    u.inform('resize.ack', fa || {}, 'parent.frames[' + ga.name + ']');
                    if (!j.isActive(ga))
                        j.show(ga);
                },
                _triggerDefault: function(ea) {
                    da._xdRecv({
                        frame: ea
                    }, da._defaultCb[ea] || function() {});
                },
                _popupMonitor: function() {
                    var ea;
                    for (var fa in da._loadedNodes)
                        if (da._loadedNodes.hasOwnProperty(fa) && fa in da._defaultCb) {
                            var ga = da._loadedNodes[fa];
                            if (ga.type != 'popup' && ga.type != 'native')
                                continue;
                                var ha = ga.node;
                                try {
                                    if (ha.closed) {
                                        da._triggerDefault(fa);
                                    } else 
                                        ea = true;
                                    } catch (ia) {}
                        }
                    if (ea&&!da._popupInterval) {
                        da._popupInterval = setInterval(da._popupMonitor, 100);
                    } else if (!ea && da._popupInterval) {
                        clearInterval(da._popupInterval);
                        da._popupInterval = null;
                    }
                },
                _xdChannelHandler: function(ea, fa) {
                    return u.handler(function(ga) {
                        var ha = da.getLoadedNode(ea);
                        if (!ha)
                            return;
                        if (ga.type == 'resize') {
                            da._handleResizeMessage(ea, ga);
                        } else if (ga.type == 'hide') {
                            j.hide(ha);
                        } else if (ga.type == 'rendered') {
                            var ia = j._findRoot(ha);
                            j.show(ia);
                        } else if (ga.type == 'fireevent')
                            k.fire(ga.event);
                    }, fa, true, null);
                },
                _xdNextHandler: function(ea, fa, ga, ha) {
                    if (ha)
                        da._defaultCb[fa] = ea;
                    return u.handler(function(ia) {
                        da._xdRecv(ia, ea);
                    }, ga) + '&frame=' + fa;
                },
                _xdRecv: function(ea, fa) {
                    var ga = da.getLoadedNode(ea.frame);
                    if (ga)
                        if (ga.close) {
                            try {
                                ga.close();
                                if (/iPhone.*Version\/(5|6)/.test(navigator.userAgent) && RegExp.$1 !== '5')
                                    window.focus();
                                    da._popupCount--;
                                } catch (ha) {}
                        } else if (i.containsCss(ga, 'FB_UI_Hidden')) {
                            setTimeout(function() {
                                ga.parentNode.parentNode.removeChild(ga.parentNode);
                            }, 3000);
                        } else if (i.containsCss(ga, 'FB_UI_Dialog'))
                            j.remove(ga);
                    delete da._loadedNodes[ea.frame];
                    delete da._defaultCb[ea.frame];
                    if (ea.e2e) {
                        var ia = j.get(ea.frame);
                        ia.trackEvents(ea.e2e);
                        ia.trackEvent('close');
                        delete ea.e2e;
                    }
                    fa(ea);
                },
                _xdResult: function(ea, fa, ga, ha) {
                    return (da._xdNextHandler(function(ia) {
                        ea && ea(ia.result && ia.result != da._resultToken && ES('JSON', 'parse', false, ia.result));
                    }, fa, ga, ha) + '&result=' + encodeURIComponent(da._resultToken));
                },
                xdHandler: function(ea, fa, ga, ha, ia) {
                    return da._xdNextHandler(g.xdResponseWrapper(ea, ha, ia), fa, ga, true);
                }
            };
            p.stub('showDialog');
            e.exports = da;
        }, null);
        __d("sdk.ui", ["Assert", "sdk.Impressions", "Log", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.UIServer", "sdk.feature"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            function n(o, p) {
                g.isObject(o);
                g.maybeFunction(p);
                if (k.getIsVersioned()) {
                    j.assertVersionIsSet();
                    if (o.version) {
                        j.assertValidVersion(o.version);
                    } else 
                        o.version = k.getVersion();
                }
                o = ES('Object', 'assign', false, {}, o);
                if (!o.method) {
                    i.error('"method" is a required parameter for FB.ui().');
                    return null;
                }
                if (o.method == 'pay.prompt')
                    o.method = 'pay';
                var q = o.method;
                if (o.redirect_uri) {
                    i.warn('When using FB.ui, you should not specify a redirect_uri.');
                    delete o.redirect_uri;
                }
                if ((q == 'permissions.request' || q == 'permissions.oauth') && (o.display == 'iframe' || o.display == 'dialog'))
                    o.display = l.checkOauthDisplay(o);
                var r = m('e2e_tracking', true);
                if (r)
                    o.e2e = {};
                var s = l.prepareCall(o, p || function() {});
                if (!s)
                    return null;
                var t = s.params.display;
                if (t === 'dialog') {
                    t = 'iframe';
                } else if (t === 'none')
                    t = 'hidden';
                var u = l[t];
                if (!u) {
                    i.error('"display" must be one of "popup", ' + '"dialog", "iframe", "touch", "async", "hidden", or "none"');
                    return null;
                }
                if (r)
                    s.dialog.subscribe('e2e:end', function(v) {
                        v.method = q;
                        v.display = t;
                        i.debug('e2e: %s', ES('JSON', 'stringify', false, v));
                        h.log(114, {
                            payload: v
                        });
                    });
                u(s);
                return s.dialog;
            }
            e.exports = n;
        }, null);
        __d("legacy:fb.auth", ["sdk.Auth", "sdk.Cookie", "copyProperties", "sdk.Event", "FB", "Log", "sdk.Runtime", "sdk.SignedRequest", "sdk.ui"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            k.provide('', {
                getLoginStatus: function() {
                    return g.getLoginStatus.apply(g, arguments);
                },
                getAuthResponse: function() {
                    return g.getAuthResponse();
                },
                getAccessToken: function() {
                    return m.getAccessToken() || null;
                },
                getUserID: function() {
                    return m.getUserID() || m.getCookieUserID();
                },
                login: function(p, q) {
                    if (q && q.perms&&!q.scope) {
                        q.scope = q.perms;
                        delete q.perms;
                        l.warn('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                    }
                    var r = m.isEnvironment(m.ENVIRONMENTS.CANVAS) || m.isEnvironment(m.ENVIRONMENTS.PAGETAB);
                    o(i({
                        method: 'permissions.oauth',
                        display: r ? 'async': 'popup',
                        domain: location.hostname
                    }, q || {}), p);
                },
                logout: function(p) {
                    o({
                        method: 'auth.logout',
                        display: 'hidden'
                    }, p);
                }
            });
            g.subscribe('logout', ES(j.fire, 'bind', true, j, 'auth.logout'));
            g.subscribe('login', ES(j.fire, 'bind', true, j, 'auth.login'));
            g.subscribe('authresponse.change', ES(j.fire, 'bind', true, j, 'auth.authResponseChange'));
            g.subscribe('status.change', ES(j.fire, 'bind', true, j, 'auth.statusChange'));
            j.subscribe('init:post', function(p) {
                if (p.status)
                    g.getLoginStatus();
                if (m.getClientID())
                    if (p.authResponse) {
                        g.setAuthResponse(p.authResponse, 'connected');
                    } else if (m.getUseCookie()) {
                        var q = h.loadSignedRequest(), r;
                        if (q) {
                            try {
                                r = n.parse(q);
                            } catch (s) {
                                h.clearSignedRequestCookie();
                            }
                            if (r && r.user_id)
                                m.setCookieUserID(r.user_id);
                        }
                        h.loadMeta();
                    }
            });
        }, 3);
        __d("sdk.Canvas.IframeHandling", ["DOMWrapper", "sdk.RPC"], function(a, b, c, d, e, f, g, h) {
            var i = null, j;
            function k() {
                var o = g.getWindow().document, p = o.body, q = o.documentElement, r = Math.max(p.offsetTop, 0), s = Math.max(q.offsetTop, 0), t = p.scrollHeight + r, u = p.offsetHeight + r, v = q.scrollHeight + s, w = q.offsetHeight + s;
                return Math.max(t, u, v, w);
            }
            function l(o) {
                if (typeof o != 'object')
                    o = {};
                var p = 0, q = 0;
                if (!o.height) {
                    o.height = k();
                    p = 16;
                    q = 4;
                }
                if (!o.frame)
                    o.frame = window.name || 'iframe_canvas';
                if (j) {
                    var r = j.height, s = o.height - r;
                    if (s <= q && s>=-p)
                        return false;
                }
                j = o;
                h.remote.setSize(o);
                return true;
            }
            function m(o, p) {
                if (p === (void 0) && typeof o === 'number') {
                    p = o;
                    o = true;
                }
                if (o || o === (void 0)) {
                    if (i === null)
                        i = setInterval(function() {
                            l();
                        }, p || 100);
                    l();
                } else if (i !== null) {
                    clearInterval(i);
                    i = null;
                }
            }
            h.stub('setSize');
            var n = {
                setSize: l,
                setAutoGrow: m
            };
            e.exports = n;
        }, null);
        __d("sdk.Canvas.Navigation", ["sdk.RPC"], function(a, b, c, d, e, f, g) {
            function h(j) {
                g.local.navigate = function(k) {
                    j({
                        path: k
                    });
                };
                g.remote.setNavigationEnabled(true);
            }
            g.stub('setNavigationEnabled');
            var i = {
                setUrlHandler: h
            };
            e.exports = i;
        }, null);
        __d("sdk.Canvas.Plugin", ["Log", "sdk.RPC", "sdk.Runtime", "sdk.UA", "sdk.api", "createArrayFromMixed"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
            var m = 'CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000', n = 'CLSID:444785F1-DE89-4295-863A-D46C3A781394', o = null, p = j.osx() && j.osx.getVersionParts(), q=!((p && p[0] > 10 && p[1] > 10) && (j.chrome() >= 31 || j.webkit() >= 537.71 || j.firefox() >= 25));
            function r(ba) {
                ba._hideunity_savedstyle = {};
                ba._hideunity_savedstyle.left = ba.style.left;
                ba._hideunity_savedstyle.position = ba.style.position;
                ba._hideunity_savedstyle.width = ba.style.width;
                ba._hideunity_savedstyle.height = ba.style.height;
                ba.style.left = '-10000px';
                ba.style.position = 'absolute';
                ba.style.width = '1px';
                ba.style.height = '1px';
            }
            function s(ba) {
                if (ba._hideunity_savedstyle) {
                    ba.style.left = ba._hideunity_savedstyle.left;
                    ba.style.position = ba._hideunity_savedstyle.position;
                    ba.style.width = ba._hideunity_savedstyle.width;
                    ba.style.height = ba._hideunity_savedstyle.height;
                }
            }
            function t(ba) {
                ba._old_visibility = ba.style.visibility;
                ba.style.visibility = 'hidden';
            }
            function u(ba) {
                ba.style.visibility = ba._old_visibility || '';
                delete ba._old_visibility;
            }
            function v(ba) {
                var ca = ba.type ? ba.type.toLowerCase(): null, da = ca === 'application/x-shockwave-flash' || (ba.classid && ba.classid.toUpperCase() == m);
                if (!da)
                    return false;
                var ea = /opaque|transparent/i;
                if (ea.test(ba.getAttribute('wmode')))
                    return false;
                for (var fa = 0; fa < ba.childNodes.length; fa++) {
                    var ga = ba.childNodes[fa];
                    if (/param/i.test(ga.nodeName) && /wmode/i.test(ga.name) && ea.test(ga.value))
                        return false;
                }
                return true;
            }
            function w(ba) {
                var ca = ba.type ? ba.type.toLowerCase(): null;
                return ca === 'application/vnd.unity' || (ba.classid && ba.classid.toUpperCase() == n);
            }
            function x(ba) {
                var ca = l(window.document.getElementsByTagName('object'));
                ca = ca.concat(l(window.document.getElementsByTagName('embed')));
                var da = false, ea = false;
                ES(ca, 'forEach', true, function(ga) {
                    var ha = v(ga), ia = q && w(ga);
                    if (!ha&&!ia)
                        return;
                    da = da || ha;
                    ea = ea || ia;
                    var ja = function() {
                        if (ba.state === 'opened') {
                            if (ha) {
                                t(ga);
                            } else 
                                r(ga);
                        } else if (ha) {
                            u(ga);
                        } else 
                            s(ga);
                    };
                    if (o) {
                        g.info('Calling developer specified callback');
                        var ka = {
                            state: ba.state,
                            elem: ga
                        };
                        o(ka);
                        setTimeout(ja, 200);
                    } else 
                        ja();
                });
                if (Math.random() <= 1 / 1000) {
                    var fa = {
                        unity: ea,
                        flash: da
                    };
                    k(i.getClientID() + '/occludespopups', 'post', fa);
                }
            }
            h.local.hidePluginObjects = function() {
                g.info('hidePluginObjects called');
                x({
                    state: 'opened'
                });
            };
            h.local.showPluginObjects = function() {
                g.info('showPluginObjects called');
                x({
                    state: 'closed'
                });
            };
            h.local.showFlashObjects = h.local.showPluginObjects;
            h.local.hideFlashObjects = h.local.hidePluginObjects;
            function y() {
                t();
                r();
            }
            function z() {
                u();
                s();
            }
            var aa = {
                _setHidePluginCallback: function(ba) {
                    o = ba;
                },
                hidePluginElement: y,
                showPluginElement: z
            };
            e.exports = aa;
        }, null);
        __d("sdk.Canvas.Tti", ["sdk.RPC", "sdk.Runtime"], function(a, b, c, d, e, f, g, h) {
            function i(n, o) {
                var p = {
                    appId: h.getClientID(),
                    time: ES('Date', 'now', false),
                    name: o
                }, q = [p];
                if (n)
                    q.push(function(r) {
                        n(r.result);
                    });
                g.remote.logTtiMessage.apply(null, q);
            }
            function j() {
                i(null, 'StartIframeAppTtiTimer');
            }
            function k(n) {
                i(n, 'StopIframeAppTtiTimer');
            }
            function l(n) {
                i(n, 'RecordIframeAppTti');
            }
            g.stub('logTtiMessage');
            var m = {
                setDoneLoading: l,
                startTimer: j,
                stopTimer: k
            };
            e.exports = m;
        }, null);
        __d("legacy:fb.canvas", ["Assert", "sdk.Canvas.Environment", "sdk.Event", "FB", "sdk.Canvas.IframeHandling", "sdk.Canvas.Navigation", "sdk.Canvas.Plugin", "sdk.RPC", "sdk.Runtime", "sdk.Canvas.Tti"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            j.provide('Canvas', {
                setSize: function(q) {
                    g.maybeObject(q, 'Invalid argument');
                    return k.setSize.apply(null, arguments);
                },
                setAutoGrow: function() {
                    return k.setAutoGrow.apply(null, arguments);
                },
                getPageInfo: function(q) {
                    g.isFunction(q, 'Invalid argument');
                    return h.getPageInfo.apply(null, arguments);
                },
                scrollTo: function(q, r) {
                    g.maybeNumber(q, 'Invalid argument');
                    g.maybeNumber(r, 'Invalid argument');
                    return h.scrollTo.apply(null, arguments);
                },
                setDoneLoading: function(q) {
                    g.maybeFunction(q, 'Invalid argument');
                    return p.setDoneLoading.apply(null, arguments);
                },
                startTimer: function() {
                    return p.startTimer.apply(null, arguments);
                },
                stopTimer: function(q) {
                    g.maybeFunction(q, 'Invalid argument');
                    return p.stopTimer.apply(null, arguments);
                },
                getHash: function(q) {
                    g.isFunction(q, 'Invalid argument');
                    return l.getHash.apply(null, arguments);
                },
                setHash: function(q) {
                    g.isString(q, 'Invalid argument');
                    return l.setHash.apply(null, arguments);
                },
                setUrlHandler: function(q) {
                    g.isFunction(q, 'Invalid argument');
                    return l.setUrlHandler.apply(null, arguments);
                }
            });
            n.local.fireEvent = ES(i.fire, 'bind', true, i);
            i.subscribe('init:post', function(q) {
                if (o.isEnvironment(o.ENVIRONMENTS.CANVAS)) {
                    g.isTrue(!q.hideFlashCallback ||!q.hidePluginCallback, 'cannot specify deprecated hideFlashCallback and new hidePluginCallback');
                    m._setHidePluginCallback(q.hidePluginCallback || q.hideFlashCallback);
                }
            });
        }, 3);
        __d("legacy:fb.canvas-legacy", ["Assert", "FB", "Log", "sdk.Canvas.Tti"], function(a, b, c, d, e, f, g, h, i, j) {
            h.provide('CanvasInsights', {
                setDoneLoading: function(k) {
                    i.warn('Deprecated: use FB.Canvas.setDoneLoading');
                    g.maybeFunction(k, 'Invalid argument');
                    return j.setDoneLoading.apply(null, arguments);
                }
            });
        }, 3);
        __d("sdk.Canvas.Prefetcher", ["sdk.api", "createArrayFromMixed", "JSSDKCanvasPrefetcherConfig", "sdk.Runtime"], function(a, b, c, d, e, f, g, h, i, j) {
            var k = {
                AUTOMATIC: 0,
                MANUAL: 1
            }, l = i.sampleRate, m = i.blacklist, n = k.AUTOMATIC, o = [];
            function p() {
                var u = {
                    object: 'data',
                    link: 'href',
                    script: 'src'
                };
                if (n == k.AUTOMATIC)
                    ES(ES('Object', 'keys', false, u), 'forEach', true, function(v) {
                        var w = u[v];
                        ES(h(document.getElementsByTagName(v)), 'forEach', true, function(x) {
                            if (x[w])
                                o.push(x[w]);
                            });
                        });
                if (o.length === 0)
                    return;
                g(j.getClientID() + '/staticresources', 'post', {
                    urls: ES('JSON', 'stringify', false, o),
                    is_https: location.protocol === 'https:'
                });
                o = [];
            }
            function q() {
                if (!j.isEnvironment(j.ENVIRONMENTS.CANVAS) ||!j.getClientID() ||!l)
                    return;
                if (Math.random() > 1 / l || m == '*'||~ES(m, 'indexOf', true, j.getClientID()))
                    return;
                setTimeout(p, 30000);
            }
            function r(u) {
                n = u;
            }
            function s(u) {
                o.push(u);
            }
            var t = {
                COLLECT_AUTOMATIC: k.AUTOMATIC,
                COLLECT_MANUAL: k.MANUAL,
                addStaticResource: s,
                setCollectionMode: r,
                _maybeSample: q
            };
            e.exports = t;
        }, null);
        __d("legacy:fb.canvas.prefetcher", ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"], function(a, b, c, d, e, f, g, h, i, j) {
            g.provide('Canvas.Prefetcher', h);
            i.subscribe('init:post', function(k) {
                if (j.isEnvironment(j.ENVIRONMENTS.CANVAS))
                    h._maybeSample();
            });
        }, 3);
        __d("legacy:fb.compat.ui", ["copyProperties", "FB", "Log", "sdk.ui", "sdk.UIServer"], function(a, b, c, d, e, f, g, h, i, j, k) {
            h.provide('', {
                share: function(l) {
                    i.error('share() has been deprecated. Please use FB.ui() instead.');
                    j({
                        display: 'popup',
                        method: 'stream.share',
                        u: l
                    });
                },
                publish: function(l, m) {
                    i.error('publish() has been deprecated. Please use FB.ui() instead.');
                    l = l || {};
                    j(g({
                        display: 'popup',
                        method: 'stream.publish',
                        preview: 1
                    }, l || {}), m);
                },
                addFriend: function(l, m) {
                    i.error('addFriend() has been deprecated. Please use FB.ui() instead.');
                    j({
                        display: 'popup',
                        id: l,
                        method: 'friend.add'
                    }, m);
                }
            });
            k.Methods['auth.login'] = k.Methods['permissions.request'];
        }, 3);
        __d("mergeArrays", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                for (var j = 0; j < i.length; j++)
                    if (ES(h, 'indexOf', true, i[j]) < 0)
                        h.push(i[j]);
                return h;
            }
            e.exports = g;
        }, null);
        __d("format", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                i = Array.prototype.slice.call(arguments, 1);
                return h.replace(/\{(\d+)\}/g, function(j, k) {
                    var l = i[Number(k)];
                    return (l === null || l === (void 0)) ? '' : l.toString();
                });
            }
            e.exports = g;
        }, null);
        __d("safeEval", [], function(a, b, c, d, e, f) {
            function g(h, i) {
                if (h === null || typeof h === 'undefined')
                    return;
                if (typeof h !== 'string')
                    return h;
                if (/^\w+$/.test(h) && typeof window[h] === 'function')
                    return window[h].apply(null, i || []);
                return Function('return eval("' + h.replace(/"/g, '\\"') + '");').apply(null, i || []);
            }
            e.exports = g;
        }, null);
        __d("sdk.Waitable", ["sdk.Model"], function(a, b, c, d, e, f, g) {
            var h = g.extend({
                constructor: function() {
                    this.parent({
                        Value: (void 0)
                    });
                },
                error: function(i) {
                    this.inform("error", i);
                },
                wait: function(i, j) {
                    if (j)
                        this.subscribe('error', j);
                    this.monitor('Value.change', ES(function() {
                        var k = this.getValue();
                        if (k !== (void 0)) {
                            this.value = k;
                            i(k);
                            return true;
                        }
                    }, 'bind', true, this));
                }
            });
            e.exports = h;
        }, null);
        __d("sdk.Query", ["format", "safeEval", "Type", "sdk.Waitable"], function(a, b, c, d, e, f, g, h, i, j) {
            function k(p) {
                return ES(p.split(','), 'map', true, function(q) {
                    return ES(q, 'trim', true);
                });
            }
            function l(p) {
                var q = (/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(p), r, s, t = 'unknown';
                if (q) {
                    s = q[2];
                    if (/^(["'])(?:\\?.)*?\1$/.test(s)) {
                        s = h(s);
                        t = 'index';
                    } else if (/^\d+\.?\d*$/.test(s))
                        t = 'index';
                }
                if (t == 'index') {
                    r = {
                        type: 'index',
                        key: q[1],
                        value: s
                    };
                } else 
                    r = {
                        type: 'unknown',
                        value: p
                    };
                return r;
            }
            function m(p) {
                return typeof p === 'string' ? ES('JSON', 'stringify', false, p) : p;
            }
            var n = 1, o = j.extend({
                constructor: function() {
                    this.parent();
                    this.name = 'v_' + n++;
                },
                hasDependency: function(p) {
                    if (arguments.length)
                        this._hasDependency = p;
                    return !!this._hasDependency;
                },
                parse: function(p) {
                    var q = g.apply(null, p), r = (/^select (.*?) from (\w+)\s+where (.*)$/i).exec(q);
                    this.fields = k(r[1]);
                    this.table = r[2];
                    this.where = l(r[3]);
                    for (var s = 1; s < p.length; s++)
                        if (i.instanceOf(o, p[s]))
                            p[s].hasDependency(true);
                    return this;
                },
                toFql: function() {
                    var p = 'select ' + this.fields.join(',') + ' from ' + this.table + ' where ';
                    switch (this.where.type) {
                    case 'unknown':
                        p += this.where.value;
                        break;
                    case 'index':
                        p += this.where.key + '=' + m(this.where.value);
                        break;
                    case 'in':
                        if (this.where.value.length == 1) {
                            p += this.where.key + '=' + m(this.where.value[0]);
                        } else 
                            p += this.where.key + ' in (' + ES(this.where.value, 'map', true, m).join(',') + ')';
                        break;
                    }
                    return p;
                },
                toString: function() {
                    return '#' + this.name;
                }
            });
            e.exports = o;
        }, null);
        __d("sdk.Data", ["sdk.api", "sdk.ErrorHandling", "mergeArrays", "sdk.Query", "safeEval", "sdk.Waitable"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
            var m = {
                query: function(n, o) {
                    var p = new j().parse(Array.prototype.slice.call(arguments));
                    m.queue.push(p);
                    m._waitToProcess();
                    return p;
                },
                waitOn: function(n, o) {
                    var p = new l(), q = n.length;
                    if (typeof(o) == 'string') {
                        var r = o;
                        o = h.unguard(function() {
                            return k(r);
                        });
                    }
                    ES(n, 'forEach', true, function(s) {
                        s.monitor('Value.change', function() {
                            var t = false;
                            if (m._getValue(s) !== (void 0)) {
                                s.value = s.getValue();
                                q--;
                                t = true;
                            }
                            if (q === 0) {
                                var u = o(ES(n, 'map', true, m._getValue));
                                p.setValue(u !== (void 0) ? u : true);
                            }
                            return t;
                        });
                    });
                    return p;
                },
                process: function(n) {
                    m._process(n);
                },
                _getValue: function(n) {
                    return n instanceof l ? n.getValue() : n;
                },
                _selectByIndex: function(n, o, p, q) {
                    var r = new j();
                    r.fields = n;
                    r.table = o;
                    r.where = {
                        type: 'index',
                        key: p,
                        value: q
                    };
                    m.queue.push(r);
                    m._waitToProcess();
                    return r;
                },
                _waitToProcess: function() {
                    if (m.timer < 0)
                        m.timer = setTimeout(function() {
                            m._process();
                        }, 10);
                },
                _process: function(n) {
                    m.timer =- 1;
                    var o = {}, p = m.queue;
                    if (!p.length)
                        return;
                    m.queue = [];
                    for (var q = 0; q < p.length; q++) {
                        var r = p[q];
                        if (r.where.type == 'index'&&!r.hasDependency()) {
                            m._mergeIndexQuery(r, o);
                        } else 
                            o[r.name] = r;
                    }
                    var s = {
                        q: {}
                    };
                    for (var t in o)
                        if (o.hasOwnProperty(t))
                            s.q[t] = o[t].toFql();
                    if (n)
                        s.access_token = n;
                    g('/fql', 'GET', s, function(u) {
                        if (u.error) {
                            ES(ES('Object', 'keys', false, o), 'forEach', true, function(v) {
                                o[v].error(new Error(u.error.message));
                            });
                        } else 
                            ES(u.data, 'forEach', true, function(v) {
                                o[v.name].setValue(v.fql_result_set);
                            });
                    });
                },
                _mergeIndexQuery: function(n, o) {
                    var p = n.where.key, q = n.where.value, r = 'index_' + n.table + '_' + p, s = o[r];
                    if (!s) {
                        s = o[r] = new j();
                        s.fields = [p];
                        s.table = n.table;
                        s.where = {
                            type: 'in',
                            key: p,
                            value: []
                        };
                    }
                    i(s.fields, n.fields);
                    i(s.where.value, [q]);
                    s.wait(function(t) {
                        n.setValue(ES(t, 'filter', true, function(u) {
                            return u[p] == q;
                        }));
                    });
                },
                timer: - 1,
                queue: []
            };
            e.exports = m;
        }, null);
        __d("legacy:fb.data", ["FB", "sdk.Data"], function(a, b, c, d, e, f, g, h) {
            g.provide('Data', h);
        }, 3);
        __d("legacy:fb.event", ["FB", "sdk.Event", "sdk.Runtime", "sdk.Scribe", "sdk.feature"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l = [], m = null, n = k('event_subscriptions_log', false);
            g.provide('Event', {
                subscribe: function(o, p) {
                    if (n) {
                        l.push(o);
                        if (!m)
                            m = setTimeout(function() {
                                j.log('jssdk_error', {
                                    appId: i.getClientID(),
                                    error: 'EVENT_SUBSCRIPTIONS_LOG',
                                    extra: {
                                        line: 0,
                                        name: 'EVENT_SUBSCRIPTIONS_LOG',
                                        script: 'N/A',
                                        stack: 'N/A',
                                        message: l.sort().join(',')
                                    }
                                });
                                l.length = 0;
                                m = null;
                            }, n);
                    }
                    return h.subscribe(o, p);
                },
                unsubscribe: ES(h.unsubscribe, 'bind', true, h)
            });
        }, 3);
        __d("legacy:fb.event-legacy", ["FB", "sdk.Event"], function(a, b, c, d, e, f, g, h) {
            g.provide('Event', {
                clear: ES(h.clear, 'bind', true, h),
                fire: ES(h.fire, 'bind', true, h),
                monitor: ES(h.monitor, 'bind', true, h)
            });
            g.provide('EventProvider', h);
        }, 3);
        __d("legacy:fb.frictionless", ["FB", "sdk.Frictionless"], function(a, b, c, d, e, f, g, h) {
            g.provide('Frictionless', h);
        }, 3);
        __d("sdk.init", ["sdk.Cookie", "sdk.ErrorHandling", "sdk.Event", "Log", "ManagedError", "sdk.PlatformVersioning", "QueryString", "sdk.Runtime", "sdk.URI", "createArrayFromMixed"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            function q(s) {
                var t = (typeof s == 'number' && s > 0) || (typeof s == 'string' && /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(s));
                if (t)
                    return s.toString();
                j.warn('Invalid App Id: Must be a number or numeric string representing ' + 'the application id.');
                return null;
            }
            function r(s) {
                if (n.getInitialized())
                    j.warn('FB.init has already been called - this could indicate a problem');
                if (n.getIsVersioned()) {
                    if (Object.prototype.toString.call(s) !== '[object Object]')
                        throw new k('Invalid argument');
                    if (s.authResponse)
                        j.warn('Setting authResponse is not supported');
                    if (!s.version)
                        s.version = o(location.href).getQueryData().sdk_version;
                    l.assertValidVersion(s.version);
                    n.setVersion(s.version);
                } else {
                    if (/number|string/.test(typeof s)) {
                        j.warn('FB.init called with invalid parameters');
                        s = {
                            apiKey: s
                        };
                    }
                    s = ES('Object', 'assign', false, {
                        status: true
                    }, s || {});
                }
                var t = q(s.appId || s.apiKey);
                if (t !== null)
                    n.setClientID(t);
                if ('scope' in s)
                    n.setScope(s.scope);
                if (s.cookie) {
                    n.setUseCookie(true);
                    if (typeof s.cookie === 'string')
                        g.setDomain(s.cookie);
                }
                if (s.kidDirectedSite)
                    n.setKidDirectedSite(true);
                n.setInitialized(true);
                i.fire('init:post', s);
            }
            setTimeout(function() {
                var s = /(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;
                ES(p(document.getElementsByTagName('script')), 'forEach', true, function(t) {
                    if (t.src) {
                        var u = s.exec(t.src);
                        if (u) {
                            var v = m.decode(u[2]);
                            for (var w in v)
                                if (v.hasOwnProperty(w)) {
                                    var x = v[w];
                                    if (x == '0')
                                        v[w] = 0;
                                }
                            r(v);
                        }
                    }
                });
                if (window.fbAsyncInit&&!window.fbAsyncInit.hasRun) {
                    window.fbAsyncInit.hasRun = true;
                    h.unguard(window.fbAsyncInit)();
                }
            }, 0);
            e.exports = r;
        }, null);
        __d("legacy:fb.init", ["FB", "sdk.init"], function(a, b, c, d, e, f, g, h) {
            g.provide('', {
                init: h
            });
        }, 3);
        __d("legacy:fb.json", ["FB", "ManagedError"], function(a, b, c, d, e, f, g, h) {
            g.provide('JSON', {
                stringify: function(i) {
                    try {
                        return ES('JSON', 'stringify', false, i);
                    } catch (j) {
                        throw new h(j.message, j);
                    }
                },
                parse: function(i) {
                    try {
                        return ES('JSON', 'parse', false, i);
                    } catch (j) {
                        throw new h(j.message, j);
                    }
                }
            });
        }, 3);
        __d("legacy:fb.ua", ["FB", "sdk.UA"], function(a, b, c, d, e, f, g, h) {
            g.provide('UA', {
                nativeApp: h.nativeApp
            });
        }, 3);
        __d("legacy:fb.ui", ["FB", "sdk.ui"], function(a, b, c, d, e, f, g, h) {
            g.provide('', {
                ui: h
            });
        }, 3);
        __d("runOnce", [], function(a, b, c, d, e, f) {
            function g(h) {
                var i, j;
                return function() {
                    if (!i) {
                        i = true;
                        j = h();
                    }
                    return j;
                };
            }
            e.exports = g;
        }, null);
        __d("XFBML", ["Assert", "sdk.DOM", "Log", "ObservableMixin", "sdk.UA", "createArrayFromMixed", "runOnce"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = {}, o = {}, p = 0, q = new j();
            function r(y, z) {
                return y[z] + '';
            }
            function s(y) {
                return y.scopeName ? (y.scopeName + ':' + y.nodeName) : '';
            }
            function t(y) {
                return n[r(y, 'nodeName').toLowerCase()] || n[s(y).toLowerCase()];
            }
            function u(y) {
                var z = ES(ES(r(y, 'className'), 'trim', true).split(/\s+/), 'filter', true, function(aa) {
                    return o.hasOwnProperty(aa);
                });
                if (z.length === 0)
                    return (void 0);
                if (y.getAttribute('fb-xfbml-state') ||!y.childNodes || y.childNodes.length === 0 || (y.childNodes.length === 1 && y.childNodes[0].nodeType === 3) || (y.children.length === 1 && r(y.children[0], 'className') === 'fb-xfbml-parse-ignore'))
                    return o[z[0]];
            }
            function v(y) {
                var z = {};
                ES(l(y.attributes), 'forEach', true, function(aa) {
                    z[r(aa, 'name')] = r(aa, 'value');
                });
                return z;
            }
            function w(y, z, aa) {
                var ba = document.createElement('div');
                h.addCss(y, z + '-' + aa);
                ES(l(y.childNodes), 'forEach', true, function(ca) {
                    ba.appendChild(ca);
                });
                ES(l(y.attributes), 'forEach', true, function(ca) {
                    ba.setAttribute(ca.name, ca.value);
                });
                y.parentNode.replaceChild(ba, y);
                return ba;
            }
            function x(y, z, aa) {
                g.isTrue(y && y.nodeType && y.nodeType === 1&&!!y.getElementsByTagName, 'Invalid DOM node passed to FB.XFBML.parse()');
                g.isFunction(z, 'Invalid callback passed to FB.XFBML.parse()');
                var ba=++p;
                i.info('XFBML Parsing Start %s', ba);
                var ca = 1, da = 0, ea = function() {
                    ca--;
                    if (ca === 0) {
                        i.info('XFBML Parsing Finish %s, %s tags found', ba, da);
                        z();
                        q.inform('render', ba, da);
                    }
                    g.isTrue(ca >= 0, 'onrender() has been called too many times');
                };
                ES(l(y.getElementsByTagName('*')), 'forEach', true, function(ga) {
                    if (!aa && ga.getAttribute('fb-xfbml-state'))
                        return;
                    if (ga.nodeType !== 1)
                        return;
                    var ha = t(ga) || u(ga);
                    if (!ha)
                        return;
                    if (k.ie() < 9 && ga.scopeName)
                        ga = w(ga, ha.xmlns, ha.localName);
                    ca++;
                    da++;
                    var ia = new ha.ctor(ga, ha.xmlns, ha.localName, v(ga));
                    ia.subscribe('render', m(function() {
                        ga.setAttribute('fb-xfbml-state', 'rendered');
                        ea();
                    }));
                    var ja = function() {
                        if (ga.getAttribute('fb-xfbml-state') == 'parsed') {
                            q.subscribe('render.queue', ja);
                        } else {
                            ga.setAttribute('fb-xfbml-state', 'parsed');
                            ia.process();
                        }
                    };
                    ja();
                });
                q.inform('parse', ba, da);
                var fa = 30000;
                setTimeout(function() {
                    if (ca > 0)
                        i.warn('%s tags failed to render in %s ms', ca, fa);
                }, fa);
                ea();
            }
            q.subscribe('render', function() {
                var y = q.getSubscribers('render.queue');
                q.clearSubscribers('render.queue');
                ES(y, 'forEach', true, function(z) {
                    z();
                });
            });
            ES('Object', 'assign', false, q, {
                registerTag: function(y) {
                    var z = y.xmlns + ':' + y.localName;
                    g.isUndefined(n[z], z + ' already registered');
                    n[z] = y;
                    o[y.xmlns + '-' + y.localName] = y;
                },
                parse: function(y, z) {
                    x(y || document.body, z || function() {}, true);
                },
                parseNew: function() {
                    x(document.body, function() {}, false);
                }
            });
            e.exports = q;
        }, null);
        __d("PluginPipe", ["sdk.Content", "sdk.feature", "guid", "insertIframe", "Miny", "ObservableMixin", "JSSDKPluginPipeConfig", "sdk.Runtime", "sdk.UA", "UrlMap", "XFBML"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
            var r = new l(), s = m.threshold, t = [];
            function u() {
                return !!(h('plugin_pipe', false) && n.getSecure() !== (void 0) && (o.chrome() || o.firefox()) && m.enabledApps[n.getClientID()]);
            }
            function v() {
                var x = t;
                t = [];
                if (x.length <= s) {
                    ES(x, 'forEach', true, function(aa) {
                        j(aa.config);
                    });
                    return;
                }
                var y = x.length + 1;
                function z() {
                    y--;
                    if (y === 0)
                        w(x);
                }
                ES(x, 'forEach', true, function(aa) {
                    var ba = {};
                    for (var ca in aa.config)
                        ba[ca] = aa.config[ca];
                    ba.url = p.resolve('www', n.getSecure()) + '/plugins/plugin_pipe_shell.php';
                    ba.onload = z;
                    j(ba);
                });
                z();
            }
            q.subscribe('parse', v);
            function w(x) {
                var y = document.createElement('span');
                g.appendHidden(y);
                var z = {};
                ES(x, 'forEach', true, function(ea) {
                    z[ea.config.name] = {
                        plugin: ea.tag,
                        params: ea.params
                    };
                });
                var aa = ES('JSON', 'stringify', false, z), ba = k.encode(aa);
                ES(x, 'forEach', true, function(ea) {
                    var fa = document.getElementsByName(ea.config.name)[0];
                    fa.onload = ea.config.onload;
                });
                var ca = p.resolve('www', n.getSecure()) + '/plugins/pipe.php', da = i();
                j({
                    url: 'about:blank',
                    root: y,
                    name: da,
                    className: 'fb_hidden fb_invisible',
                    onload: function() {
                        g.submitToTarget({
                            url: ca,
                            target: da,
                            params: {
                                plugins: ba.length < aa.length ? ba: aa
                            }
                        });
                    }
                });
            }
            ES('Object', 'assign', false, r, {
                add: function(x) {
                    var y = u();
                    y && t.push({
                        config: x._config,
                        tag: x._tag,
                        params: x._params
                    });
                    return y;
                }
            });
            e.exports = r;
        }, null);
        __d("IframePlugin", ["sdk.Auth", "sdk.DOM", "sdk.Event", "Log", "ObservableMixin", "sdk.PlatformVersioning", "PluginPipe", "QueryString", "sdk.Runtime", "Type", "sdk.UA", "sdk.URI", "UrlMap", "sdk.XD", "sdk.createIframe", "guid", "resolveURI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
            var x = {
                skin: 'string',
                font: 'string',
                width: 'px',
                height: 'px',
                ref: 'string',
                color_scheme: 'string'
            };
            function y(ga, ha, ia) {
                if (ha || ha === 0)
                    ga.style.width = ha + 'px';
                if (ia || ia === 0)
                    ga.style.height = ia + 'px';
            }
            function z(ga) {
                return function(ha) {
                    var ia = {
                        width: ha.width,
                        height: ha.height,
                        pluginID: ga
                    };
                    i.fire('xfbml.resize', ia);
                };
            }
            var aa = {
                string: function(ga) {
                    return ga;
                },
                bool: function(ga) {
                    return ga ? (/^(?:true|1|yes|on)$/i).test(ga) : (void 0);
                },
                url: function(ga) {
                    return w(ga);
                },
                url_maybe: function(ga) {
                    return ga ? w(ga) : ga;
                },
                hostname: function(ga) {
                    return ga || window.location.hostname;
                },
                px: function(ga) {
                    return (/^(\d+)(?:px)?$/).test(ga) ? parseInt(RegExp.$1, 10) : (void 0);
                },
                text: function(ga) {
                    return ga;
                }
            };
            function ba(ga, ha) {
                var ia = ga[ha] || ga[ha.replace(/_/g, '-')] || ga[ha.replace(/_/g, '')] || ga['data-' + ha] || ga['data-' + ha.replace(/_/g, '-')] || ga['data-' + ha.replace(/_/g, '')] || (void 0);
                return ia;
            }
            function ca(ga, ha, ia, ja) {
                ES(ES('Object', 'keys', false, ga), 'forEach', true, function(ka) {
                    if (ga[ka] == 'text'&&!ia[ka]) {
                        ia[ka] = ha.textContent || ha.innerText || '';
                        ha.setAttribute(ka, ia[ka]);
                    }
                    ja[ka] = aa[ga[ka]](ba(ia, ka));
                });
            }
            function da(ga) {
                return ga || ga === '0' || ga === 0 ? parseInt(ga, 10) : (void 0);
            }
            function ea(ga) {
                if (ga)
                    y(ga, 0, 0);
            }
            var fa = p.extend({
                constructor: function(ga, ha, ia, ja) {
                    this.parent();
                    ia = ia.replace(/-/g, '_');
                    var ka = ba(ja, 'plugin_id');
                    this.subscribe('xd.resize', z(ka));
                    this.subscribe('xd.resize.flow', z(ka));
                    this.subscribe('xd.resize.flow', ES(function(qa) {
                        ES('Object', 'assign', false, this._iframeOptions.root.style, {
                            verticalAlign: 'bottom',
                            overflow: ''
                        });
                        y(this._iframeOptions.root, da(qa.width), da(qa.height));
                        this.updateLift();
                        clearTimeout(this._timeoutID);
                    }, 'bind', true, this));
                    this.subscribe('xd.resize', ES(function(qa) {
                        ES('Object', 'assign', false, this._iframeOptions.root.style, {
                            verticalAlign: 'bottom',
                            overflow: ''
                        });
                        y(this._iframeOptions.root, da(qa.width), da(qa.height));
                        y(this._iframe, da(qa.width), da(qa.height));
                        this._isIframeResized = true;
                        this.updateLift();
                        clearTimeout(this._timeoutID);
                    }, 'bind', true, this));
                    this.subscribe('xd.resize.iframe', ES(function(qa) {
                        y(this._iframe, da(qa.width), da(qa.height));
                        this._isIframeResized = true;
                        this.updateLift();
                        clearTimeout(this._timeoutID);
                    }, 'bind', true, this));
                    this.subscribe('xd.sdk_event', function(qa) {
                        var ra = ES('JSON', 'parse', false, qa.data);
                        ra.pluginID = ka;
                        i.fire(qa.event, ra, ga);
                    });
                    var la = o.getSecure() || window.location.protocol == 'https:', ma = s.resolve('www', la) + '/plugins/' + ia + '.php?', na = {};
                    ca(this.getParams(), ga, ja, na);
                    ca(x, ga, ja, na);
                    ES('Object', 'assign', false, na, {
                        app_id: o.getClientID(),
                        locale: o.getLocale(),
                        sdk: 'joey',
                        kid_directed_site: o.getKidDirectedSite(),
                        channel: t.handler(ES(function(qa) {
                            return this.inform('xd.' + qa.type, qa);
                        }, 'bind', true, this), 'parent.parent', true)
                    });
                    h.addCss(ga, 'fb_iframe_widget');
                    var oa = v();
                    this.subscribe('xd.verify', function(qa) {
                        t.sendToFacebook(oa, {
                            method: 'xd/verify',
                            params: ES('JSON', 'stringify', false, qa.token)
                        });
                    });
                    this.subscribe('xd.refreshLoginStatus', ES(g.getLoginStatus, 'bind', true, g, ES(this.inform, 'bind', true, this, 'login.status'), true));
                    var pa = document.createElement('span');
                    ES('Object', 'assign', false, pa.style, {
                        verticalAlign: 'top',
                        width: '0px',
                        height: '0px',
                        overflow: 'hidden'
                    });
                    this._element = ga;
                    this._ns = ha;
                    this._tag = ia;
                    this._params = na;
                    this._config = this.getConfig();
                    this._iframeOptions = {
                        root: pa,
                        url: ma + n.encode(na),
                        name: oa,
                        width: this._config.mobile_fullsize && q.mobile() ? void 0: na.width || 1000,
                        height: na.height || 1000,
                        style: {
                            border: 'none',
                            visibility: 'hidden'
                        },
                        title: this._ns + ':' + this._tag + ' Facebook Social Plugin',
                        onload: ES(function() {
                            return this.inform('render');
                        }, 'bind', true, this),
                        onerror: ES(function() {
                            return ea(this._iframe);
                        }, 'bind', true, this)
                    };
                },
                process: function() {
                    if (o.getIsVersioned()) {
                        l.assertVersionIsSet();
                        var ga = r(this._iframeOptions.url);
                        this._iframeOptions.url = ga.setPath('/' + o.getVersion() + ga.getPath()).toString();
                    }
                    var ha = ES('Object', 'assign', false, {}, this._params);
                    delete ha.channel;
                    var ia = n.encode(ha);
                    if (this._element.getAttribute('fb-iframe-plugin-query') == ia) {
                        j.info('Skipping render: %s:%s %s', this._ns, this._tag, ia);
                        this.inform('render');
                        return;
                    }
                    this._element.setAttribute('fb-iframe-plugin-query', ia);
                    this.subscribe('render', ES(function() {
                        this._iframe.style.visibility = 'visible';
                        if (!this._isIframeResized)
                            ea(this._iframe);
                    }, 'bind', true, this));
                    while (this._element.firstChild)
                        this._element.removeChild(this._element.firstChild);
                    this._element.appendChild(this._iframeOptions.root);
                    var ja = q.mobile() ? 120: 45;
                    this._timeoutID = setTimeout(ES(function() {
                        ea(this._iframe);
                        j.warn('%s:%s failed to resize in %ss', this._ns, this._tag, ja);
                    }, 'bind', true, this), ja * 1000);
                    if (!m.add(this))
                        this._iframe = u(this._iframeOptions);
                    if (q.mobile()) {
                        h.addCss(this._element, 'fb_iframe_widget_fluid');
                        if (!this._iframeOptions.width) {
                            ES('Object', 'assign', false, this._element.style, {
                                display: 'block',
                                width: '100%',
                                height: 'auto'
                            });
                            ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                width: '100%',
                                height: 'auto'
                            });
                            ES('Object', 'assign', false, this._iframe.style, {
                                width: '100%',
                                height: 'auto',
                                position: 'static'
                            });
                        }
                    }
                },
                getConfig: function() {
                    return {};
                },
                updateLift: function() {
                    var ga = this._iframe.style.width === this._iframeOptions.root.style.width && this._iframe.style.height === this._iframeOptions.root.style.height;
                    h[ga ? 'removeCss': 'addCss'](this._iframe, 'fb_iframe_widget_lift');
                }
            }, k);
            fa.getVal = ba;
            fa.withParams = function(ga, ha) {
                return fa.extend({
                    getParams: function() {
                        return ga;
                    },
                    getConfig: function() {
                        return ha ? ha : {};
                    }
                });
            };
            e.exports = fa;
        }, null);
        __d("PluginConfig", [], function(a, b, c, d, e, f) {
            var g = {
                post: {
                    mobile_fullsize: true
                }
            };
            e.exports = g;
        }, null);
        __d("PluginTags", [], function(a, b, c, d, e, f) {
            var g = {
                activity: {
                    filter: 'string',
                    action: 'string',
                    max_age: 'string',
                    linktarget: 'string',
                    header: 'bool',
                    recommendations: 'bool',
                    site: 'hostname'
                },
                composer: {
                    action_type: 'string',
                    action_properties: 'string'
                },
                create_event_button: {},
                degrees: {
                    href: 'url'
                },
                facepile: {
                    href: 'string',
                    action: 'string',
                    size: 'string',
                    max_rows: 'string',
                    show_count: 'bool'
                },
                follow: {
                    href: 'url',
                    layout: 'string',
                    show_faces: 'bool'
                },
                like: {
                    href: 'url',
                    layout: 'string',
                    show_faces: 'bool',
                    share: 'bool',
                    action: 'string',
                    send: 'bool'
                },
                like_box: {
                    href: 'string',
                    show_faces: 'bool',
                    header: 'bool',
                    stream: 'bool',
                    force_wall: 'bool',
                    show_border: 'bool',
                    id: 'string',
                    connections: 'string',
                    profile_id: 'string',
                    name: 'string'
                },
                open_graph: {
                    href: 'url',
                    layout: 'string',
                    show_faces: 'bool',
                    action_type: 'string',
                    action_properties: 'string'
                },
                open_graph_preview: {
                    action_type: 'string',
                    action_properties: 'string'
                },
                page_events: {
                    href: 'url'
                },
                post: {
                    href: 'url',
                    show_border: 'bool'
                },
                privacy_selector: {},
                profile_pic: {
                    uid: 'string',
                    linked: 'bool',
                    href: 'string',
                    size: 'string',
                    facebook_logo: 'bool'
                },
                recommendations: {
                    filter: 'string',
                    action: 'string',
                    max_age: 'string',
                    linktarget: 'string',
                    header: 'bool',
                    site: 'hostname'
                },
                share_button: {
                    href: 'url',
                    layout: 'string',
                    type: 'string'
                },
                shared_activity: {
                    header: 'bool'
                },
                send: {
                    href: 'url'
                },
                send_to_mobile: {
                    max_rows: 'string',
                    show_faces: 'bool',
                    size: 'string'
                },
                story: {
                    href: 'url',
                    show_border: 'bool'
                },
                topic: {
                    topic_name: 'string',
                    topic_id: 'string'
                },
                want: {
                    href: 'url',
                    layout: 'string',
                    show_faces: 'bool'
                }
            }, h = {
                subscribe: 'follow',
                fan: 'like_box',
                likebox: 'like_box',
                friendpile: 'facepile'
            };
            ES(ES('Object', 'keys', false, h), 'forEach', true, function(i) {
                g[i] = g[h[i]];
            });
            e.exports = g;
        }, null);
        __d("sdk.Arbiter", [], function(a, b, c, d, e, f) {
            var g = {
                BEHAVIOR_EVENT: 'e',
                BEHAVIOR_PERSISTENT: 'p',
                BEHAVIOR_STATE: 's'
            };
            e.exports = g;
        }, null);
        __d("sdk.XFBML.Element", ["sdk.DOM", "Type", "ObservableMixin"], function(a, b, c, d, e, f, g, h, i) {
            var j = h.extend({
                constructor: function(k) {
                    this.parent();
                    this.dom = k;
                },
                fire: function() {
                    this.inform.apply(this, arguments);
                },
                getAttribute: function(k, l, m) {
                    var n = g.getAttr(this.dom, k);
                    return n ? m ? m(n) : n : l;
                },
                _getBoolAttribute: function(k, l) {
                    var m = g.getBoolAttr(this.dom, k);
                    return m === null ? l : m;
                },
                _getPxAttribute: function(k, l) {
                    return this.getAttribute(k, l, function(m) {
                        var n = parseInt(m, 10);
                        return isNaN(n) ? l : n;
                    });
                },
                _getLengthAttribute: function(k, l) {
                    return this.getAttribute(k, l, function(m) {
                        if (m === '100%')
                            return m;
                        var n = parseInt(m, 10);
                        return isNaN(n) ? l : n;
                    });
                },
                _getAttributeFromList: function(k, l, m) {
                    return this.getAttribute(k, l, function(n) {
                        n = n.toLowerCase();
                        return (ES(m, 'indexOf', true, n)>-1) ? n : l;
                    });
                },
                isValid: function() {
                    for (var k = this.dom; k; k = k.parentNode)
                        if (k == document.body)
                            return true;
                },
                clear: function() {
                    g.html(this.dom, '');
                }
            }, i);
            e.exports = j;
        }, null);
        __d("sdk.XFBML.IframeWidget", ["sdk.Arbiter", "sdk.Auth", "sdk.Content", "sdk.DOM", "sdk.Event", "sdk.XFBML.Element", "guid", "insertIframe", "QueryString", "sdk.Runtime", "sdk.ui", "UrlMap", "sdk.XD"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
            var t = l.extend({
                _iframeName: null,
                _showLoader: true,
                _refreshOnAuthChange: false,
                _allowReProcess: false,
                _fetchPreCachedLoader: false,
                _visibleAfter: 'load',
                _widgetPipeEnabled: false,
                _borderReset: false,
                _repositioned: false,
                getUrlBits: function() {
                    throw new Error('Inheriting class needs to implement getUrlBits().');
                },
                setupAndValidate: function() {
                    return true;
                },
                oneTimeSetup: function() {},
                getSize: function() {},
                getIframeName: function() {
                    return this._iframeName;
                },
                getIframeTitle: function() {
                    return 'Facebook Social Plugin';
                },
                getChannelUrl: function() {
                    if (!this._channelUrl) {
                        var x = this;
                        this._channelUrl = s.handler(function(y) {
                            x.fire('xd.' + y.type, y);
                        }, 'parent.parent', true);
                    }
                    return this._channelUrl;
                },
                getIframeNode: function() {
                    return this.dom.getElementsByTagName('iframe')[0];
                },
                arbiterInform: function(event, x, y) {
                    s.sendToFacebook(this.getIframeName(), {
                        method: event,
                        params: ES('JSON', 'stringify', false, x || {}),
                        behavior: y || g.BEHAVIOR_PERSISTENT
                    });
                },
                _arbiterInform: function(event, x, y) {
                    var z = 'parent.frames["' + this.getIframeNode().name + '"]';
                    s.inform(event, x, z, y);
                },
                getDefaultWebDomain: function() {
                    return r.resolve('www');
                },
                process: function(x) {
                    if (this._done) {
                        if (!this._allowReProcess&&!x)
                            return;
                        this.clear();
                    } else 
                        this._oneTimeSetup();
                    this._done = true;
                    this._iframeName = this.getIframeName() || this._iframeName || m();
                    if (!this.setupAndValidate()) {
                        this.fire('render');
                        return;
                    }
                    if (this._showLoader)
                        this._addLoader();
                    j.addCss(this.dom, 'fb_iframe_widget');
                    if (this._visibleAfter != 'immediate') {
                        j.addCss(this.dom, 'fb_hide_iframes');
                    } else 
                        this.subscribe('iframe.onload', ES(this.fire, 'bind', true, this, 'render'));
                    var y = this.getSize() || {}, z = this.getFullyQualifiedURL();
                    if (y.width == '100%')
                        j.addCss(this.dom, 'fb_iframe_widget_fluid');
                    this.clear();
                    n({
                        url: z,
                        root: this.dom.appendChild(document.createElement('span')),
                        name: this._iframeName,
                        title: this.getIframeTitle(),
                        className: p.getRtl() ? 'fb_rtl': 'fb_ltr',
                        height: y.height,
                        width: y.width,
                        onload: ES(this.fire, 'bind', true, this, 'iframe.onload')
                    });
                    this._resizeFlow(y);
                    this.loaded = false;
                    this.subscribe('iframe.onload', ES(function() {
                        this.loaded = true;
                        if (!this._isResizeHandled)
                            j.addCss(this.dom, 'fb_hide_iframes');
                    }, 'bind', true, this));
                },
                generateWidgetPipeIframeName: function() {
                    u++;
                    return 'fb_iframe_' + u;
                },
                getFullyQualifiedURL: function() {
                    var x = this._getURL();
                    x += '?' + o.encode(this._getQS());
                    if (x.length > 2000) {
                        x = 'about:blank';
                        var y = ES(function() {
                            this._postRequest();
                            this.unsubscribe('iframe.onload', y);
                        }, 'bind', true, this);
                        this.subscribe('iframe.onload', y);
                    }
                    return x;
                },
                _getWidgetPipeShell: function() {
                    return r.resolve('www') + '/common/widget_pipe_shell.php';
                },
                _oneTimeSetup: function() {
                    this.subscribe('xd.resize', ES(this._handleResizeMsg, 'bind', true, this));
                    this.subscribe('xd.resize', ES(this._bubbleResizeEvent, 'bind', true, this));
                    this.subscribe('xd.resize.iframe', ES(this._resizeIframe, 'bind', true, this));
                    this.subscribe('xd.resize.flow', ES(this._resizeFlow, 'bind', true, this));
                    this.subscribe('xd.resize.flow', ES(this._bubbleResizeEvent, 'bind', true, this));
                    this.subscribe('xd.refreshLoginStatus', function() {
                        h.getLoginStatus(function() {}, true);
                    });
                    this.subscribe('xd.logout', function() {
                        q({
                            method: 'auth.logout',
                            display: 'hidden'
                        }, function() {});
                    });
                    if (this._refreshOnAuthChange)
                        this._setupAuthRefresh();
                    if (this._visibleAfter == 'load')
                        this.subscribe('iframe.onload', ES(this._makeVisible, 'bind', true, this));
                    this.subscribe('xd.verify', ES(function(x) {
                        this.arbiterInform('xd/verify', x.token);
                    }, 'bind', true, this));
                    this.oneTimeSetup();
                },
                _makeVisible: function() {
                    this._removeLoader();
                    j.removeCss(this.dom, 'fb_hide_iframes');
                    this.fire('render');
                },
                _setupAuthRefresh: function() {
                    h.getLoginStatus(ES(function(x) {
                        var y = x.status;
                        k.subscribe('auth.statusChange', ES(function(z) {
                            if (!this.isValid())
                                return;
                            if (y == 'unknown' || z.status == 'unknown')
                                this.process(true);
                            y = z.status;
                        }, 'bind', true, this));
                    }, 'bind', true, this));
                },
                _handleResizeMsg: function(x) {
                    if (!this.isValid())
                        return;
                    this._resizeIframe(x);
                    this._resizeFlow(x);
                    if (!this._borderReset) {
                        this.getIframeNode().style.border = 'none';
                        this._borderReset = true;
                    }
                    this._isResizeHandled = true;
                    this._makeVisible();
                },
                _bubbleResizeEvent: function(x) {
                    var y = {
                        height: x.height,
                        width: x.width,
                        pluginID: this.getAttribute('plugin-id')
                    };
                    k.fire('xfbml.resize', y);
                },
                _resizeIframe: function(x) {
                    var y = this.getIframeNode();
                    if (x.reposition === "true")
                        this._repositionIframe(x);
                    x.height && (y.style.height = x.height + 'px');
                    x.width && (y.style.width = x.width + 'px');
                    this._updateIframeZIndex();
                },
                _resizeFlow: function(x) {
                    var y = this.dom.getElementsByTagName('span')[0];
                    x.height && (y.style.height = x.height + 'px');
                    x.width && (y.style.width = x.width + 'px');
                    this._updateIframeZIndex();
                },
                _updateIframeZIndex: function() {
                    var x = this.dom.getElementsByTagName('span')[0], y = this.getIframeNode(), z = y.style.height === x.style.height && y.style.width === x.style.width, aa = z ? 'removeCss': 'addCss';
                    j[aa](y, 'fb_iframe_widget_lift');
                },
                _repositionIframe: function(x) {
                    var y = this.getIframeNode(), z = parseInt(j.getStyle(y, 'width'), 10), aa = j.getPosition(y).x, ba = j.getViewportInfo().width, ca = parseInt(x.width, 10);
                    if (aa + ca > ba && aa > ca) {
                        y.style.left = z - ca + 'px';
                        this.arbiterInform('xd/reposition', {
                            type: 'horizontal'
                        });
                        this._repositioned = true;
                    } else if (this._repositioned) {
                        y.style.left = '0px';
                        this.arbiterInform('xd/reposition', {
                            type: 'restore'
                        });
                        this._repositioned = false;
                    }
                },
                _addLoader: function() {
                    if (!this._loaderDiv) {
                        j.addCss(this.dom, 'fb_iframe_widget_loader');
                        this._loaderDiv = document.createElement('div');
                        this._loaderDiv.className = 'FB_Loader';
                        this.dom.appendChild(this._loaderDiv);
                    }
                },
                _removeLoader: function() {
                    if (this._loaderDiv) {
                        j.removeCss(this.dom, 'fb_iframe_widget_loader');
                        if (this._loaderDiv.parentNode)
                            this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                        this._loaderDiv = null;
                    }
                },
                _getQS: function() {
                    return ES('Object', 'assign', false, {
                        api_key: p.getClientID(),
                        locale: p.getLocale(),
                        sdk: 'joey',
                        kid_directed_site: p.getKidDirectedSite(),
                        ref: this.getAttribute('ref')
                    }, this.getUrlBits().params);
                },
                _getURL: function() {
                    var x = this.getDefaultWebDomain(), y = '';
                    return x + '/plugins/' + y + this.getUrlBits().name + '.php';
                },
                _postRequest: function() {
                    i.submitToTarget({
                        url: this._getURL(),
                        target: this.getIframeNode().name,
                        params: this._getQS()
                    });
                }
            }), u = 0, v = {};
            function w() {
                var x = {};
                for (var y in v) {
                    var z = v[y];
                    x[y] = {
                        widget: z.getUrlBits().name,
                        params: z._getQS()
                    };
                }
                return x;
            }
            e.exports = t;
        }, null);
        __d("sdk.XFBML.Comments", ["sdk.Event", "sdk.XFBML.IframeWidget", "QueryString", "sdk.Runtime", "JSSDKConfig", "sdk.UA", "UrlMap"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = h.extend({
                _visibleAfter: 'immediate',
                _refreshOnAuthChange: true,
                setupAndValidate: function() {
                    var o = {
                        channel_url: this.getChannelUrl(),
                        colorscheme: this.getAttribute('colorscheme'),
                        skin: this.getAttribute('skin'),
                        numposts: this.getAttribute('num-posts', 10),
                        width: this._getLengthAttribute('width'),
                        href: this.getAttribute('href'),
                        permalink: this.getAttribute('permalink'),
                        publish_feed: this.getAttribute('publish_feed'),
                        order_by: this.getAttribute('order_by'),
                        mobile: this._getBoolAttribute('mobile')
                    };
                    if (!o.width&&!o.permalink)
                        o.width = 550;
                    if (k.initSitevars.enableMobileComments && l.mobile() && o.mobile !== false) {
                        o.mobile = true;
                        delete o.width;
                    }
                    if (!o.skin)
                        o.skin = o.colorscheme;
                    if (!o.href) {
                        o.migrated = this.getAttribute('migrated');
                        o.xid = this.getAttribute('xid');
                        o.title = this.getAttribute('title', document.title);
                        o.url = this.getAttribute('url', document.URL);
                        o.quiet = this.getAttribute('quiet');
                        o.reverse = this.getAttribute('reverse');
                        o.simple = this.getAttribute('simple');
                        o.css = this.getAttribute('css');
                        o.notify = this.getAttribute('notify');
                        if (!o.xid) {
                            var p = ES(document.URL, 'indexOf', true, '#');
                            if (p > 0) {
                                o.xid = encodeURIComponent(document.URL.substring(0, p));
                            } else 
                                o.xid = encodeURIComponent(document.URL);
                        }
                        if (o.migrated)
                            o.href = m.resolve('www') + '/plugins/comments_v1.php?' + 'app_id=' + j.getClientID() + '&xid=' + encodeURIComponent(o.xid) + '&url=' + encodeURIComponent(o.url);
                    } else {
                        var q = this.getAttribute('fb_comment_id');
                        if (!q) {
                            q = i.decode(document.URL.substring(ES(document.URL, 'indexOf', true, '?') + 1)).fb_comment_id;
                            if (q && ES(q, 'indexOf', true, '#') > 0)
                                q = q.substring(0, ES(q, 'indexOf', true, '#'));
                        }
                        if (q) {
                            o.fb_comment_id = q;
                            this.subscribe('render', ES(function() {
                                if (!window.location.hash)
                                    window.location.hash = this.getIframeNode().id;
                            }, 'bind', true, this));
                        }
                    }
                    this._attr = o;
                    return true;
                },
                oneTimeSetup: function() {
                    this.subscribe('xd.commentCreated', ES(this._handleCommentCreatedMsg, 'bind', true, this));
                    this.subscribe('xd.commentRemoved', ES(this._handleCommentRemovedMsg, 'bind', true, this));
                },
                getSize: function() {
                    if (!this._attr.permalink)
                        return {
                            width: this._attr.mobile ? '100%': this._attr.width,
                            height: 100
                        };
                },
                getUrlBits: function() {
                    return {
                        name: 'comments',
                        params: this._attr
                    };
                },
                getDefaultWebDomain: function() {
                    return m.resolve(this._attr.mobile ? 'm' : 'www', true);
                },
                _handleCommentCreatedMsg: function(o) {
                    if (!this.isValid())
                        return;
                    var p = {
                        href: o.href,
                        commentID: o.commentID,
                        parentCommentID: o.parentCommentID,
                        message: o.message
                    };
                    g.fire('comment.create', p);
                },
                _handleCommentRemovedMsg: function(o) {
                    if (!this.isValid())
                        return;
                    var p = {
                        href: o.href,
                        commentID: o.commentID
                    };
                    g.fire('comment.remove', p);
                }
            });
            e.exports = n;
        }, null);
        __d("sdk.XFBML.CommentsCount", ["ApiClient", "sdk.DOM", "sdk.XFBML.Element", "sprintf"], function(a, b, c, d, e, f, g, h, i, j) {
            var k = i.extend({
                process: function() {
                    h.addCss(this.dom, 'fb_comments_count_zero');
                    var l = this.getAttribute('href', window.location.href);
                    g.scheduleBatchCall('/v2.1/' + encodeURIComponent(l), {
                        fields: 'share'
                    }, ES(function(m) {
                        var n = (m.share && m.share.comment_count) || 0;
                        h.html(this.dom, j('<span class="fb_comments_count">%s</span>', n));
                        if (n > 0)
                            h.removeCss(this.dom, 'fb_comments_count_zero');
                        this.fire('render');
                    }, 'bind', true, this));
                }
            });
            e.exports = k;
        }, null);
        __d("sdk.Helper", ["sdk.ErrorHandling", "sdk.Event", "UrlMap", "safeEval", "sprintf"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l = {
                isUser: function(m) {
                    return m < 2.2e+09 || (m >= 1e+14 && m <= 100099999989999) || (m >= 8.9e+13 && m <= 89999999999999);
                },
                upperCaseFirstChar: function(m) {
                    if (m.length > 0) {
                        return m.substr(0, 1).toUpperCase() + m.substr(1);
                    } else 
                        return m;
                },
                getProfileLink: function(m, n, o) {
                    if (!o && m)
                        o = k('%s/profile.php?id=%s', i.resolve('www'), m.uid || m.id);
                    if (o)
                        n = k('<a class="fb_link" href="%s">%s</a>', o, n);
                    return n;
                },
                invokeHandler: function(m, n, o) {
                    if (m)
                        if (typeof m === 'string') {
                            g.unguard(j)(m, o);
                        } else if (m.apply)
                            g.unguard(m).apply(n, o || []);
                },
                fireEvent: function(m, n) {
                    var o = n._attr.href;
                    n.fire(m, o);
                    h.fire(m, o, n);
                },
                executeFunctionByName: function(m) {
                    var n = Array.prototype.slice.call(arguments, 1), o = m.split("."), p = o.pop(), q = window;
                    for (var r = 0; r < o.length; r++)
                        q = q[o[r]];
                    return q[p].apply(this, n);
                }
            };
            e.exports = l;
        }, null);
        __d("sdk.XFBML.LoginButton", ["sdk.Helper", "IframePlugin"], function(a, b, c, d, e, f, g, h) {
            var i = h.extend({
                constructor: function(j, k, l, m) {
                    this.parent(j, k, l, m);
                    var n = h.getVal(m, 'on_login');
                    if (n)
                        this.subscribe('login.status', function(o) {
                            g.invokeHandler(n, null, [o]);
                        });
                },
                getParams: function() {
                    return {
                        scope: 'string',
                        perms: 'string',
                        size: 'string',
                        login_text: 'text',
                        show_faces: 'bool',
                        max_rows: 'string',
                        show_login_face: 'bool',
                        registration_url: 'url_maybe',
                        auto_logout_link: 'bool',
                        one_click: 'bool',
                        show_banner: 'bool',
                        auth_type: 'string',
                        default_audience: 'string'
                    };
                }
            });
            e.exports = i;
        }, null);
        __d("escapeHTML", [], function(a, b, c, d, e, f) {
            var g = /[&<>"'\/]/g, h = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;',
                '/': '&#x2F;'
            };
            function i(j) {
                return j.replace(g, function(k) {
                    return h[k];
                });
            }
            e.exports = i;
        }, null);
        __d("sdk.XFBML.Name", ["ApiClient", "escapeHTML", "sdk.Event", "sdk.XFBML.Element", "sdk.Helper", "Log", "sdk.Runtime"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = ({}).hasOwnProperty, o = j.extend({
                process: function() {
                    ES('Object', 'assign', false, this, {
                        _uid: this.getAttribute('uid'),
                        _firstnameonly: this._getBoolAttribute('first-name-only'),
                        _lastnameonly: this._getBoolAttribute('last-name-only'),
                        _possessive: this._getBoolAttribute('possessive'),
                        _reflexive: this._getBoolAttribute('reflexive'),
                        _objective: this._getBoolAttribute('objective'),
                        _linked: this._getBoolAttribute('linked', true),
                        _subjectId: this.getAttribute('subject-id')
                    });
                    if (!this._uid) {
                        l.error('"uid" is a required attribute for <fb:name>');
                        this.fire('render');
                        return;
                    }
                    var p = [];
                    if (this._firstnameonly) {
                        p.push('first_name');
                    } else if (this._lastnameonly) {
                        p.push('last_name');
                    } else 
                        p.push('name');
                    if (this._subjectId) {
                        p.push('gender');
                        if (this._subjectId == m.getUserID())
                            this._reflexive = true;
                    }
                    i.monitor('auth.statusChange', ES(function() {
                        if (!this.isValid()) {
                            this.fire('render');
                            return true;
                        }
                        if (!this._uid || this._uid == 'loggedinuser')
                            this._uid = m.getUserID();
                        if (!this._uid)
                            return;
                        g.scheduleBatchCall('/v1.0/' + this._uid, {
                            fields: p.join(',')
                        }, ES(function(q) {
                            if (n.call(q, 'error')) {
                                l.warn('The name is not found for ID: ' + this._uid);
                                return;
                            }
                            if (this._subjectId == this._uid) {
                                this._renderPronoun(q);
                            } else 
                                this._renderOther(q);
                            this.fire('render');
                        }, 'bind', true, this));
                    }, 'bind', true, this));
                },
                _renderPronoun: function(p) {
                    var q = '', r = this._objective;
                    if (this._subjectId) {
                        r = true;
                        if (this._subjectId === this._uid)
                            this._reflexive = true;
                    }
                    if (this._uid == m.getUserID() && this._getBoolAttribute('use-you', true)) {
                        if (this._possessive) {
                            if (this._reflexive) {
                                q = 'your own';
                            } else 
                                q = 'your';
                        } else if (this._reflexive) {
                            q = 'yourself';
                        } else 
                            q = 'you';
                    } else 
                        switch (p.gender) {
                        case 'male':
                            if (this._possessive) {
                                q = this._reflexive ? 'his own' : 'his';
                            } else if (this._reflexive) {
                                q = 'himself';
                            } else if (r) {
                                q = 'him';
                            } else 
                                q = 'he';
                                break;
                            case 'female':
                                if (this._possessive) {
                                    q = this._reflexive ? 'her own' : 'her';
                                } else if (this._reflexive) {
                                    q = 'herself';
                                } else if (r) {
                                    q = 'her';
                                } else 
                                    q = 'she';
                                    break;
                                default:
                                    if (this._getBoolAttribute('use-they', true)) {
                                        if (this._possessive) {
                                            if (this._reflexive) {
                                                q = 'their own';
                                            } else 
                                                q = 'their';
                                        } else if (this._reflexive) {
                                            q = 'themselves';
                                        } else if (r) {
                                            q = 'them';
                                        } else 
                                            q = 'they';
                                    } else if (this._possessive) {
                                        if (this._reflexive) {
                                            q = 'his/her own';
                                        } else 
                                            q = 'his/her';
                                    } else if (this._reflexive) {
                                        q = 'himself/herself';
                                    } else if (r) {
                                        q = 'him/her';
                                    } else 
                                        q = 'he/she';
                                        break;
                        }
                    if (this._getBoolAttribute('capitalize', false))
                        q = k.upperCaseFirstChar(q);
                    this.dom.innerHTML = q;
                },
                _renderOther: function(p) {
                    var q = '', r = '';
                    if (this._uid == m.getUserID() && this._getBoolAttribute('use-you', true)) {
                        if (this._reflexive) {
                            if (this._possessive) {
                                q = 'your own';
                            } else 
                                q = 'yourself';
                        } else if (this._possessive) {
                            q = 'your';
                        } else 
                            q = 'you';
                    } else if (p) {
                        if (null === p.first_name)
                            p.first_name = '';
                        if (null === p.last_name)
                            p.last_name = '';
                        if (this._firstnameonly && p.first_name !== (void 0)) {
                            q = h(p.first_name);
                        } else if (this._lastnameonly && p.last_name !== (void 0))
                            q = h(p.last_name);
                        if (!q)
                            q = h(p.name);
                        if (q !== '' && this._possessive)
                            q += '\'s';
                    }
                    if (!q)
                        q = h(this.getAttribute('if-cant-see', 'Facebook User'));
                    if (q) {
                        if (this._getBoolAttribute('capitalize', false))
                            q = k.upperCaseFirstChar(q);
                        if (p && this._linked) {
                            r = k.getProfileLink(p, q, this.getAttribute('href', null));
                        } else 
                            r = q;
                    }
                    this.dom.innerHTML = r;
                }
            });
            e.exports = o;
        }, null);
        __d("sdk.XFBML.Registration", ["sdk.Auth", "sdk.Helper", "sdk.XFBML.IframeWidget", "sdk.Runtime", "UrlMap"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l = i.extend({
                _visibleAfter: 'immediate',
                _baseHeight: 167,
                _fieldHeight: 28,
                _skinnyWidth: 520,
                _skinnyBaseHeight: 173,
                _skinnyFieldHeight: 52,
                setupAndValidate: function() {
                    this._attr = {
                        action: this.getAttribute('action'),
                        border_color: this.getAttribute('border-color'),
                        channel_url: this.getChannelUrl(),
                        client_id: j.getClientID(),
                        fb_only: this._getBoolAttribute('fb-only', false),
                        fb_register: this._getBoolAttribute('fb-register', false),
                        fields: this.getAttribute('fields'),
                        height: this._getPxAttribute('height'),
                        redirect_uri: this.getAttribute('redirect-uri', window.location.href),
                        no_footer: this._getBoolAttribute('no-footer'),
                        no_header: this._getBoolAttribute('no-header'),
                        onvalidate: this.getAttribute('onvalidate'),
                        width: this._getPxAttribute('width', 600),
                        target: this.getAttribute('target')
                    };
                    if (this._attr.onvalidate)
                        this.subscribe('xd.validate', ES(function(m) {
                            var n = ES('JSON', 'parse', false, m.value), o = ES(function(q) {
                                this.arbiterInform('Registration.Validation', {
                                    errors: q,
                                    id: m.id
                                });
                            }, 'bind', true, this), p = h.executeFunctionByName(this._attr.onvalidate, n, o);
                            if (p)
                                o(p);
                            }, 'bind', true, this));
                    this.subscribe('xd.authLogin', ES(this._onAuthLogin, 'bind', true, this));
                    this.subscribe('xd.authLogout', ES(this._onAuthLogout, 'bind', true, this));
                    return true;
                },
                getSize: function() {
                    return {
                        width: this._attr.width,
                        height: this._getHeight()
                    };
                },
                _getHeight: function() {
                    if (this._attr.height)
                        return this._attr.height;
                    var m;
                    if (!this._attr.fields) {
                        m = ['name'];
                    } else 
                        try {
                            m = ES('JSON', 'parse', false, this._attr.fields);
                    } catch (n) {
                        m = this._attr.fields.split(/,/);
                    }
                    if (this._attr.width < this._skinnyWidth) {
                        return this._skinnyBaseHeight + m.length * this._skinnyFieldHeight;
                    } else 
                        return this._baseHeight + m.length * this._fieldHeight;
                },
                getUrlBits: function() {
                    return {
                        name: 'registration',
                        params: this._attr
                    };
                },
                getDefaultWebDomain: function() {
                    return k.resolve('www', true);
                },
                _onAuthLogin: function() {
                    if (!g.getAuthResponse())
                        g.getLoginStatus();
                    h.fireEvent('auth.login', this);
                },
                _onAuthLogout: function() {
                    if (!g.getAuthResponse())
                        g.getLoginStatus();
                    h.fireEvent('auth.logout', this);
                }
            });
            e.exports = l;
        }, null);
        __d("legacy:fb.xfbml", ["Assert", "sdk.Event", "FB", "IframePlugin", "PluginConfig", "PluginTags", "XFBML", "sdk.domReady", "sdk.feature", "wrapFunction", "sdk.XFBML.Comments", "sdk.XFBML.CommentsCount", "sdk.XFBML.LoginButton", "sdk.XFBML.Name", "sdk.XFBML.Registration"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            var q = {
                comments: b('sdk.XFBML.Comments'),
                comments_count: b('sdk.XFBML.CommentsCount'),
                login_button: b('sdk.XFBML.LoginButton'),
                name: b('sdk.XFBML.Name'),
                registration: b('sdk.XFBML.Registration')
            }, r = o('plugin_tags_blacklist', []);
            ES(ES('Object', 'keys', false, l), 'forEach', true, function(t) {
                if (ES(r, 'indexOf', true, t)!==-1)
                    return;
                m.registerTag({
                    xmlns: 'fb',
                    localName: t.replace(/_/g, '-'),
                    ctor: j.withParams(l[t], k[t])
                });
            });
            ES(ES('Object', 'keys', false, q), 'forEach', true, function(t) {
                if (ES(r, 'indexOf', true, t)!==-1)
                    return;
                m.registerTag({
                    xmlns: 'fb',
                    localName: t.replace(/_/g, '-'),
                    ctor: q[t]
                });
            });
            i.provide('XFBML', {
                parse: function(t) {
                    g.maybeXfbml(t, 'Invalid argument');
                    if (t && t.nodeType === 9)
                        t = t.body;
                    return m.parse.apply(null, arguments);
                }
            });
            m.subscribe('parse', ES(h.fire, 'bind', true, h, 'xfbml.parse'));
            m.subscribe('render', ES(h.fire, 'bind', true, h, 'xfbml.render'));
            h.subscribe('init:post', function(t) {
                if (t.xfbml)
                    setTimeout(p(ES(n, 'bind', true, null, m.parse), 'entry', 'init:post:xfbml.parse'), 0);
            });
            g.define('Xfbml', function(t) {
                return (t.nodeType === 1 || t.nodeType === 9) && typeof t.nodeName === 'string';
            });
            try {
                if (document.namespaces&&!document.namespaces.item.fb)
                    document.namespaces.add('fb');
            } catch (s) {}
        }, 3);

    }).call({}, window.inDapIF ? parent.window : window);
} catch (e) {
    new Image().src = "http:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"1507751","message":"' + e.message + '"}}');
}
